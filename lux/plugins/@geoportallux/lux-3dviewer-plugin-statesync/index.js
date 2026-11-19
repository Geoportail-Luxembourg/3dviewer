import { getFromLocalStorage as T, removeFromLocalStorage as O, setToLocalStorage as _ } from "../../../assets/ui.js";
const l = "@geoportallux/lux-3dviewer-plugin-statesync", N = "1.0.0", R = "^6.3", S = "state", K = 1e3;
function j(e) {
  return "_cachedAppState" in e;
}
function z(e) {
  return e._cachedAppState;
}
function L(e, t) {
  e._cachedAppState = t;
}
function D(e) {
  if (typeof e != "object" || e === null)
    return !1;
  const t = e;
  return Array.isArray(t.moduleIds) && t.moduleIds.every((n) => typeof n == "string") && Array.isArray(t.layers) && t.layers.every(
    (n) => typeof n == "object" && n !== null && typeof n.name == "string" && typeof n.active == "boolean"
  ) && Array.isArray(t.plugins) && Array.isArray(t.clippingPolygons) && (t.activeMap === void 0 || typeof t.activeMap == "string") && (t.activeObliqueCollection === void 0 || typeof t.activeObliqueCollection == "string") && (t.activeViewpoint === void 0 || typeof t.activeViewpoint == "object" && t.activeViewpoint !== null);
}
const J = 7, V = 2, h = 3;
function c(e, t) {
  const n = 10 ** t;
  return Math.round(e * n) / n;
}
function P(e) {
  return e.map(
    (t, n) => c(t, n < 2 ? J : V)
  );
}
function b(e) {
  const t = { ...e };
  return delete t.name, Array.isArray(e.cameraPosition) && (t.cameraPosition = P(e.cameraPosition)), Array.isArray(e.groundPosition) && (t.groundPosition = P(e.groundPosition)), typeof e.distance == "number" && (t.distance = c(e.distance, V)), typeof e.heading == "number" && (t.heading = c(e.heading, h)), typeof e.pitch == "number" && (t.pitch = c(e.pitch, h)), typeof e.roll == "number" && (t.roll = c(e.roll, h)), t;
}
function x(e) {
  return e.activeViewpoint ? {
    ...e,
    activeViewpoint: b(e.activeViewpoint)
  } : e;
}
function w() {
  const e = T(l, S);
  if (e) {
    try {
      const t = JSON.parse(e);
      if (D(t))
        return t;
    } catch {
    }
    O(l, S);
  }
}
function F(e) {
  var n;
  if (new URL(window.location.href).searchParams.has("state"))
    return;
  const t = w();
  if (t) {
    if (!j(e)) {
      console.warn(
        `${l}: VcsUiApp no longer exposes _cachedAppState, state restore is disabled.`
      );
      return;
    }
    (n = z(e)) != null && n.moduleIds.length || L(e, t);
  }
}
function U() {
  const e = new URL(window.location.href);
  e.searchParams.has("state") && (e.searchParams.delete("state"), window.history.replaceState(window.history.state, "", e));
}
function E(e, t, n) {
  const o = new Set(e.map((i) => i.name)), a = t.filter(
    (i) => !o.has(i.name) && !n(i.name)
  );
  return a.length ? [...e, ...a] : e;
}
function H(e) {
  return e._id;
}
async function k(e) {
  var n;
  const t = e.maps.activeMap;
  if (!t)
    return "";
  try {
    const o = await t.getViewpoint();
    if ((n = o == null ? void 0 : o.isValid) != null && n.call(o))
      return JSON.stringify(b(o.toJSON()));
  } catch {
  }
  return "";
}
function q(e) {
  let t, n, o = !1, a, i = w();
  async function C() {
    a = void 0;
    const r = await k(e), d = r !== n;
    if (n = r, !(!o && !d)) {
      o = !1;
      try {
        const s = await e.getState(!0);
        i && (s.layers = E(
          s.layers,
          i.layers,
          (p) => !!e.layers.getByKey(p)
        ), s.clippingPolygons = E(
          s.clippingPolygons,
          i.clippingPolygons,
          (p) => !!e.clippingPolygons.getByKey(p)
        ));
        const v = x(s), m = JSON.stringify(v);
        m !== t && (_(l, S, m), t = m), i = v;
      } catch {
      }
    }
  }
  function I(r) {
    if (!i)
      return;
    const d = H(r);
    d !== e.dynamicModuleId && L(e, {
      moduleIds: [d],
      layers: i.layers.map((s) => ({ ...s })),
      clippingPolygons: i.clippingPolygons.map((s) => ({
        ...s
      })),
      plugins: []
    });
  }
  function A() {
    a || (a = setTimeout(() => {
      C().catch(() => {
      });
    }, K));
  }
  function f() {
    o = !0, A();
  }
  let u;
  function y(r) {
    u == null || u(), u = r == null ? void 0 : r.postRender.addEventListener(A);
  }
  y(e.maps.activeMap);
  const g = e.clippingPolygons.stateChanged, M = [
    e.layers.stateChanged.addEventListener(f),
    g == null ? void 0 : g.addEventListener(f),
    e.maps.mapActivated.addEventListener((r) => {
      y(r), f();
    }),
    e.moduleRemoved.addEventListener(I)
  ].filter((r) => !!r);
  return () => {
    a && (clearTimeout(a), a = void 0), y(null), M.forEach((r) => {
      r();
    });
  };
}
function G() {
  let e;
  return {
    get name() {
      return l;
    },
    get version() {
      return N;
    },
    get mapVersion() {
      return R;
    },
    initialize(t) {
      return F(t), U(), Promise.resolve();
    },
    onVcsAppMounted(t) {
      e = q(t);
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
      return {};
    },
    /**
     * should return the plugins state
     * @returns {PluginState}
     */
    getState() {
      return {};
    },
    /**
     * components for configuring the plugin and/ or custom items defined by the plugin
     */
    getConfigEditors() {
      return [];
    },
    destroy() {
      e == null || e(), e = void 0;
    }
  };
}
export {
  G as default
};
