var G = Object.defineProperty;
var C = (n, e, t) => e in n ? G(n, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : n[e] = t;
var p = (n, e, t) => C(n, typeof e != "symbol" ? e + "" : e, t);
import { Controller as b, getZeroInput as _, clearInput as B, fromArray as S } from "../../../assets/core.js";
const D = "@vcmap/gamepad", I = "1.0.1", x = "^6.0", r = {
  OFF: 1,
  ERROR: 2,
  WARN: 4,
  INFO: 8,
  DEBUG: 16
}, c = {
  ERROR: 0,
  WARN: 0,
  INFO: 0,
  DEBUG: 0
};
c.ERROR = r.ERROR | r.WARN | r.INFO | r.DEBUG;
c.WARN = r.WARN | r.INFO | r.DEBUG;
c.INFO = r.INFO | r.DEBUG;
c.DEBUG = r.DEBUG;
const u = {
  useTimestamp: !1,
  logLevel: r.INFO
}, f = /* @__PURE__ */ new Map();
f.set(r.ERROR, "error");
f.set(r.WARN, "warn");
f.set(r.INFO, "info");
f.set(r.DEBUG, "log");
class L {
  /**
   * @param {string=} className
   */
  constructor(e) {
    this.className = e, this.deprecations = /* @__PURE__ */ new Map();
  }
  /**
   * Logs an error message
   * @param {string} msg The message to log.
   * @param {...any} optArgs
   */
  error(e, ...t) {
    u.logLevel & c.ERROR && this._log(String(e), r.ERROR, t);
  }
  /**
   * Logs a warning message
   * @param {string} msg The message to log.
   * @param {...any} optArgs
   */
  warning(e, ...t) {
    u.logLevel & c.WARN && this._log(String(e), r.WARN, t);
  }
  /**
   * Deprecate a function. deprecations are stored on the logger
   * @param {string} functionName
   * @param {string=} alternativeFunctionName
   */
  deprecate(e, t) {
    const i = String(e), o = t ? String(t) : null;
    if (!this.deprecations.has(i)) {
      this.deprecations.set(i, o || null);
      let s = `${i} has been deprecated and will be removed`;
      o && (s = `${s}. ${o}`), this.warning(s);
    }
  }
  /**
   * Logs an info message
   * @param {string} msg The message to log.
   * @param {...any} optArgs
   */
  info(e, ...t) {
    u.logLevel & c.INFO && this._log(String(e), r.INFO, t);
  }
  /**
   * Logs a debug message
   * @param {string} msg The message to log.
   * @param {...any} optArgs
   */
  debug(e, ...t) {
    u.logLevel & c.DEBUG && this._log(String(e), r.DEBUG, t);
  }
  /**
   * Alias for debug
   * @param {string} msg The message to log.
   * @param {...any} optArgs
   */
  log(e, ...t) {
    u.logLevel & c.DEBUG && this._log(String(e), r.DEBUG, t);
  }
  /**
   * Logs a message
   * @param {string} msg The message to log.
   * @param {LOG_LEVEL} level
   * @param {Array} optArgs
   * @private
   */
  _log(e, t, i) {
    let o = e;
    this.className && (o = `[${this.className}] ${o}`), console[f.get(t)](o, ...i), t & r.ERROR && (console.group(), console.trace(), console.groupEnd());
  }
}
const v = /* @__PURE__ */ new Map();
let w;
function F() {
  return w || (w = new L()), w;
}
function U(n) {
  const e = new L(n);
  return v.set(n, e), e;
}
function m(n) {
  return n ? v.has(n) ? v.get(n) : U(n) : F();
}
function A(n, e) {
  return n == null ? !!e : typeof n == "boolean" ? n : n === 1 ? !0 : n === 0 ? !1 : typeof n == "string" && (n.toLowerCase() === "true" || n.toLowerCase() === "1") ? !0 : typeof n == "string" && (n.toLowerCase() === "false" || n.toLowerCase() === "0") ? !1 : !!e;
}
function O(n, e) {
  return n >= 0 && n < e;
}
function g(n, e) {
  let t = (Math.abs(n) - e) / (1 - e);
  return t < 0 && (t = 0), t * Math.sign(n);
}
function M(n, e, t) {
  return t.forward = g(n.forward, e), t.right = g(n.right, e), t.up = g(n.up, e), t.tiltDown = g(n.tiltDown, e), t.rollRight = g(n.rollRight, e), t.turnRight = g(n.turnRight, e), t;
}
function d(n, e) {
  if (typeof e == "number")
    return O(e, n.axes.length) ? n.axes[e] : 0;
  if (typeof (e == null ? void 0 : e["+"]) == "number" && typeof (e == null ? void 0 : e["-"]) == "number") {
    const t = O(e["+"], n.buttons.length) ? n.buttons[e["+"]].value : 0, i = O(e["-"], n.buttons.length) ? n.buttons[e["-"]].value : 0;
    return t > i ? t : i * -1;
  }
  return 0;
}
class l extends b {
  constructor(t) {
    const i = l.getDefaultOptions();
    super({ ...i, ...t });
    /**
     * device number in gamepad api array
     */
    p(this, "device");
    p(this, "connected");
    /**
     * Mapping gamepad axes and buttons to NavigationAxes
     */
    p(this, "mapping");
    p(this, "_input", _());
    this.device = t.device || i.device, this.connected = A(t.connected, i.connected), this.mapping = t.mapping || i.mapping;
  }
  static get className() {
    return "GamepadController";
  }
  static getDefaultOptions() {
    return {
      id: "",
      device: 0,
      connected: !1,
      mapping: void 0
    };
  }
  getGamepad() {
    return (navigator == null ? void 0 : navigator.getGamepads()[this.device]) || null;
  }
  getControllerInput() {
    const t = this.getGamepad();
    if (t) {
      if (B(this._input), this.mapping)
        this._input.forward = d(t, this.mapping.forward), this._input.right = d(t, this.mapping.right), this._input.up = d(t, this.mapping.up), this._input.tiltDown = d(t, this.mapping.tiltDown), this._input.rollRight = d(t, this.mapping.rollRight), this._input.turnRight = d(t, this.mapping.turnRight);
      else {
        const i = [
          ...t.axes,
          ...t.buttons.map((o) => o.value),
          ...new Array(6).fill(0)
        ];
        S(i, this._input);
      }
      return M(this._input, this.inputThreshold, this._input);
    }
    return null;
  }
  toJSON() {
    const t = l.getDefaultOptions(), i = super.toJSON();
    return this.device !== t.device && (i.device = this.device), this.connected !== t.connected && (i.connected = this.connected), this.mapping !== t.mapping && (i.mapping = this.mapping), i;
  }
}
function E(n, e) {
  if (navigator.getGamepads) {
    const t = navigator.getGamepads();
    m(D).debug("detected gamepads", t);
    let i = 0;
    for (; i < t.length - 1; ) {
      const o = t[i];
      if (o && o.id && o.connected) {
        const s = o.id.toLowerCase().includes("gamepad") ? "GamepadController" : "SpaceMouseController";
        m("DeviceManager").info(`connecting ${o.id} as ${s}`);
        const a = n.maps.navigation.getController(o.id);
        a && a instanceof l ? (a.device = i, a.connected = o.connected) : e.addController({
          type: s,
          id: o.id,
          device: i,
          connected: o.connected
        });
      }
      i += 1;
    }
  }
}
function W(n, e) {
  const t = (s) => {
    m(D).info(
      "Gamepad connected at index %d: %s. %d buttons, %d axes.",
      s.gamepad.index,
      s.gamepad.id,
      s.gamepad.buttons.length,
      s.gamepad.axes.length
    ), E(n, e);
  }, i = (s) => {
    m("DeviceManager").info(
      "Gamepad disconnected from index %d: %s",
      s.gamepad.index,
      s.gamepad.id
    );
    const a = n.maps.navigation.getController(s.gamepad.id);
    a && n.maps.navigation.removeController(a.id);
  };
  window.addEventListener("gamepadconnected", t), window.addEventListener("gamepaddisconnected", i);
  const o = [
    () => window.removeEventListener("gamepadconnected", t),
    () => window.removeEventListener("gamepaddisconnected", i)
  ];
  return E(n, e), () => {
    o.forEach((s) => s());
  };
}
class h extends l {
  static get className() {
    return "SpaceMouseController";
  }
  static getDefaultOptions() {
    return {
      id: "",
      scales: {
        forward: -1.2,
        right: 1.2,
        up: -1.2,
        tiltDown: -0.3,
        rollRight: 0.5,
        turnRight: 1
      },
      mapping: {
        forward: 1,
        right: 0,
        up: 2,
        tiltDown: 3,
        rollRight: 4,
        turnRight: 5
      }
    };
  }
  constructor(e) {
    const t = h.getDefaultOptions();
    super({ ...t, ...e });
  }
}
function V(n) {
  let e, t = () => {
  };
  return {
    get name() {
      return D;
    },
    get version() {
      return I;
    },
    get mapVersion() {
      return x;
    },
    addController(i) {
      var o, s;
      if (e) {
        const { navigation: a } = e.maps, N = ((o = n.controllers) == null ? void 0 : o.find((R) => R.id === i.id)) || ((s = n.controllers) == null ? void 0 : s.find((R) => R.type === i.type)) || {};
        Object.assign(i, N), i.type === h.className ? a.addController(new h(i)) : a.addController(new l(i));
      }
    },
    initialize(i) {
      e = i, t = W(e, this);
    },
    /**
     * should return all default values of the configuration
     */
    getDefaultOptions() {
      return {};
    },
    /**
     * should return the plugin's serialization excluding all default values
     */
    toJSON() {
      return structuredClone(n);
    },
    /**
     * components for configuring the plugin and/ or custom items defined by the plugin
     */
    getConfigEditors() {
      return [];
    },
    destroy() {
      t();
    }
  };
}
export {
  V as default
};
