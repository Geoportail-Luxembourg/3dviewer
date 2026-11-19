import { Extent as R, CesiumMap as w, OpenlayersMap as V, mercatorProjection as G, wgs84Projection as D } from "../../../assets/core.js";
import { Cartographic as M, Math as O, Cartesian3 as _ } from "../../../assets/cesium.js";
import { ol$View as C } from "../../../assets/ol.js";
import { VcsExtentEditor as A, AbstractConfigEditor as U } from "../../../assets/ui.js";
import { defineComponent as B, ref as L, toRaw as I, resolveComponent as v, openBlock as S, createBlock as x, mergeProps as F, withCtx as $, createVNode as b } from "../../../assets/vue.js";
const r = {
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
const l = {
  logLevel: r.INFO
}, g = /* @__PURE__ */ new Map();
g.set(r.ERROR, "error");
g.set(r.WARN, "warn");
g.set(r.INFO, "info");
g.set(r.DEBUG, "log");
class W {
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
  error(e, ...o) {
    l.logLevel & c.ERROR && this._log(String(e), r.ERROR, o);
  }
  /**
   * Logs a warning message
   * @param {string} msg The message to log.
   * @param {...any} optArgs
   */
  warning(e, ...o) {
    l.logLevel & c.WARN && this._log(String(e), r.WARN, o);
  }
  /**
   * Deprecate a function. deprecations are stored on the logger
   * @param {string} functionName
   * @param {string=} alternativeFunctionName
   */
  deprecate(e, o) {
    const i = String(e), n = o ? String(o) : null;
    if (!this.deprecations.has(i)) {
      this.deprecations.set(i, n || null);
      let s = `${i} has been deprecated and will be removed`;
      n && (s = `${s}. ${n}`), this.warning(s);
    }
  }
  /**
   * Logs an info message
   * @param {string} msg The message to log.
   * @param {...any} optArgs
   */
  info(e, ...o) {
    l.logLevel & c.INFO && this._log(String(e), r.INFO, o);
  }
  /**
   * Logs a debug message
   * @param {string} msg The message to log.
   * @param {...any} optArgs
   */
  debug(e, ...o) {
    l.logLevel & c.DEBUG && this._log(String(e), r.DEBUG, o);
  }
  /**
   * Alias for debug
   * @param {string} msg The message to log.
   * @param {...any} optArgs
   */
  log(e, ...o) {
    l.logLevel & c.DEBUG && this._log(String(e), r.DEBUG, o);
  }
  /**
   * Logs a message
   * @param {string} msg The message to log.
   * @param {LOG_LEVEL} level
   * @param {Array} optArgs
   * @private
   */
  _log(e, o, i) {
    let n = e;
    this.className && (n = `[${this.className}] ${n}`), console[g.get(o)](n, ...i), o & r.ERROR && (console.group(), console.trace(), console.groupEnd());
  }
}
const m = /* @__PURE__ */ new Map();
function y(t) {
  const e = new W(t);
  return m.set(t, e), e;
}
function P(t) {
  return m.has(t) ? m.get(t) : y(t);
}
const N = "@vcmap/geofence", k = "1.0.3", j = "^6.2", q = B({
  name: "ConfigEditor",
  components: {
    AbstractConfigEditor: U,
    VcsExtentEditor: A
  },
  props: {
    getConfig: {
      type: Function,
      required: !0
    },
    setConfig: {
      type: Function,
      required: !0
    }
  },
  setup(t) {
    const e = L(t.getConfig());
    return {
      localConfig: e,
      apply() {
        t.setConfig(structuredClone(I(e.value)));
      }
    };
  }
}), z = (t, e) => {
  const o = t.__vccOpts || t;
  for (const [i, n] of e)
    o[i] = n;
  return o;
};
function J(t, e, o, i, n, s) {
  const a = v("VcsExtentEditor"), f = v("AbstractConfigEditor");
  return S(), x(f, F({ ...t.$attrs, ...t.$props }, { onSubmit: t.apply }), {
    default: $(() => [
      b(a, {
        modelValue: t.localConfig.extentOptions,
        "onUpdate:modelValue": e[0] || (e[0] = (p) => t.localConfig.extentOptions = p)
      }, null, 8, ["modelValue"])
    ]),
    _: 1
    /* STABLE */
  }, 16, ["onSubmit"]);
}
const X = /* @__PURE__ */ z(q, [["render", J]]);
function Y(t, e) {
  const o = M.fromCartesian(t), i = O.toDegrees(o.longitude), n = O.toDegrees(o.latitude), s = e.getCoordinatesInProjection(D), a = s[0], f = s[1], p = s[2], E = s[3];
  let u = i;
  i < a ? u = a : i > p && (u = p);
  let d = n;
  if (n < f ? d = f : n > E && (d = E), u !== i || d !== n)
    return _.fromDegrees(
      u,
      d,
      o.height
    );
}
function h(t, e) {
  if (t instanceof w) {
    const { camera: o, scene: i } = t.getCesiumWidget();
    if (o)
      return i.preRender.addEventListener(() => {
        const n = Y(
          o.position,
          e
        );
        n && (o.position = n);
      });
  } else if (t instanceof V && t.olMap) {
    const o = t.olMap.getView(), i = e.getCoordinatesInProjection(G);
    return t.olMap.setView(
      new C({
        extent: i,
        constrainOnlyCenter: !0,
        center: o.getCenter(),
        zoom: o.getZoom()
      })
    ), () => {
      if (t.olMap) {
        const n = t.olMap.getView();
        t.olMap.setView(
          new C({
            extent: void 0,
            center: n.getCenter(),
            zoom: n.getZoom()
          })
        );
      }
    };
  }
}
function ee(t) {
  let e, o, i, n;
  return t.extentOptions && R.validateOptions(t.extentOptions) ? n = new R(t.extentOptions) : P(N).error(
    "Invalid or missing extentOptions in Geofence plugin configuration, unable to setup geofencing."
  ), {
    get name() {
      return N;
    },
    get version() {
      return k;
    },
    get mapVersion() {
      return j;
    },
    onVcsAppMounted(s) {
      e = s, n != null && n.isValid() && (e.maps.activeMap && (i = h(e.maps.activeMap, n)), o = e.maps.mapActivated.addEventListener((a) => {
        i == null || i(), i = h(a, n);
      }));
    },
    getDefaultOptions() {
      return {};
    },
    toJSON() {
      return n != null && n.isValid() ? {
        extentOptions: n.toJSON()
      } : {};
    },
    getConfigEditors() {
      return [
        {
          component: X,
          title: "Geofence Config Editor",
          infoUrlCallback: e == null ? void 0 : e.getHelpUrlCallback(
            "/components/plugins/geofenceToolConfig.html",
            "app-configurator"
          )
        }
      ];
    },
    destroy() {
      o == null || o(), i == null || i();
    }
  };
}
export {
  ee as default
};
