
function loadCss(href) {
  return new Promise((resolve, reject) => {
    const elem = document.createElement('link');
    elem.rel = 'stylesheet';
    elem.href = href;
    elem.defer = false;
    elem.async = false;
    elem.onload = resolve;
    elem.onerror = reject;
    document.head.appendChild(elem);
  });
} await loadCss('data:text/css;base64,W2RhdGEtdi02YWUxNTlhN10gLnZjcy1mb3JtLXNlY3Rpb24taGVhZGVye2hlaWdodDpjYWxjKHZhcigtLXYtdmNzLWZvbnQtc2l6ZSkgKiAyICsgNnB4KSFpbXBvcnRhbnQ7YmFja2dyb3VuZC1jb2xvcjpyZ2IodmFyKC0tdi10aGVtZS1zdXJmYWNlKSkhaW1wb3J0YW50fS5tb2RpZmllZC1mb3JtLXNlY3Rpb25bZGF0YS12LTZhZTE1OWE3XXtib3JkZXItdG9wOjFweCBzb2xpZCByZ2IodmFyKC0tdi10aGVtZS1iYXNlLWxpZ2h0ZW4tMykpIWltcG9ydGFudH0udi1pbnB1dFtkYXRhLXYtYTQyMGU4ZDBde21hcmdpbi1sZWZ0OjJweCFpbXBvcnRhbnR9LnYtY29sb3ItcGlja2VyLnYtc2hlZXRbZGF0YS12LTg5MzJiMjU4XXtib3gtc2hhZG93Om5vbmV9W2RhdGEtdi1hMjA3NmU1Nl0gLnZjcy1mb3JtLXNlY3Rpb24taGVhZGVye3BhZGRpbmctbGVmdDpjYWxjKHZhcigtLXYtdmNzLWZvbnQtc2l6ZSkgKiAxLjIzMzMzMzMzMzMgKyAycHgpIWltcG9ydGFudH0udi1jb2xvci1waWNrZXIudi1zaGVldFtkYXRhLXYtYWVkMGY4MjJde2JveC1zaGFkb3c6bm9uZX0uY29sW2RhdGEtdi1lM2UxZDgwMV17cGFkZGluZy10b3A6MH0K');import { VcsFormSection as Pt, VcsLabel as X, VcsTextField as ee, VcsCheckbox as xt, useProxiedComplexModel as R, VcsSlider as Mt, VcsSelect as Dt, VcsFormButton as Nt, ButtonLocation as Lt, WindowSlot as Tt } from "../../../assets/ui.js";
import { CesiumMap as F } from "../../../assets/core.js";
import { openBlock as N, createBlock as L, unref as Wt, mergeProps as Et, withCtx as r, renderSlot as jt, inject as U, reactive as M, computed as K, resolveComponent as g, createVNode as l, createTextVNode as B, toDisplayString as C, createElementVNode as Ae, createCommentVNode as Ot, shallowReactive as Rt, watch as E } from "../../../assets/vue.js";
import { PostProcessStageLibrary as D, Color as te, Matrix3 as Vt, Cartesian3 as ne, SunLight as Ut, DirectionalLight as he, defined as zt, Transforms as Ct, Simon1994PlanetaryPositions as $t } from "../../../assets/cesium.js";
import { VCol as J, VRow as q, VContainer as Y, VColorPicker as Ft, VSheet as Ht } from "../../../assets/vuetify.js";
const Ie = Symbol("isMatcher"), Gt = Symbol("Integer"), Kt = Symbol("NonEmptyString"), ke = /* @__PURE__ */ new Map();
[
  [String, "string"],
  [Number, "number"],
  [Boolean, "boolean"],
  [Function, "function"],
  [void 0, "undefined"],
  [Symbol, "symbol"]
].forEach(([n, e]) => {
  ke.set(n, e);
});
function Jt(n) {
  return n == null ? void 0 : n[Ie];
}
function we(n) {
  if (!n || String(n) !== "[object Object]")
    return !1;
  const e = Object.getPrototypeOf(n);
  if (!e)
    return !0;
  const t = {}.hasOwnProperty.call(e, "constructor") && e.constructor;
  return typeof t == "function" && String(t) === String(Object);
}
function T(n, e) {
  if (n === null)
    return "null";
  if (typeof n > "u")
    return "undefined";
  if (e)
    return typeof n;
  let o;
  if (Array.isArray(n))
    o = `[${n.map((s) => T(s, e)).join(",")}]`;
  else
    try {
      o = JSON.stringify(n);
    } catch {
      o = typeof n;
    }
  return o = o || typeof n, o.length > 20 ? `${o.substring(0, 20)}...` : o;
}
function qt(n, e) {
  return typeof e == "string" || typeof e == "number" || typeof e == "boolean" || typeof e == "symbol" ? n === e ? !1 : `Expected ${T(n)} to equal ${e.toString()}` : null;
}
function Yt(n, e, o) {
  if (Array.isArray(e)) {
    if (e.length !== 1)
      throw new Error("Array patterns may only have one type");
    if (Array.isArray(n)) {
      let t = !1;
      return n.findIndex((c) => (t = o(c, e[0]), t)) > -1 ? `${String(t)} in ${T(n)}` : !1;
    }
    return `Expected ${T(n)} to be an Array`;
  }
  return null;
}
function xe(n, e, o, t) {
  const s = t ? `${t}.` : "";
  if (!we(n))
    return `Expected ${T(n)} to be a plain Object`;
  let i = !1;
  const u = Object.keys(e).find((p) => {
    const a = n[p];
    return we(e[p]) ? i = xe(a, e[p], o, s + p) : i = o(a, e[p]), i;
  });
  return u ? `${String(i)} in object.${s}${u}` : !1;
}
function It(n, e) {
  if (e === Number)
    return Number.isFinite(n) ? !1 : `expected ${T(n)} to be a number, excluding NaN`;
  if (e === Gt)
    return Number.isInteger(n) ? !1 : `expected ${T(n)} to be an integer number`;
  if (e === Kt)
    return typeof n == "string" && n.length > 0 ? !1 : `expected ${T(n)} to be a non-empty string`;
  const o = ke.get(e);
  return o ? typeof n === o ? !1 : `expected ${T(n)} to be a ${String(o)}` : null;
}
function kt(n) {
  if (n === null)
    return "null";
  const e = ke.get(n);
  if (e)
    return e;
  const o = n == null ? void 0 : n.className;
  if (o)
    return o;
  let t = String(n);
  const s = t.match(/function (.*)\(/);
  if (s && s.length > 1) {
    const c = n == null ? void 0 : n.name;
    return c || s[1].substring(0, 20);
  }
  if (we(n)) {
    const c = {};
    Object.keys(n).forEach((i) => {
      c[i] = kt(n[i]);
    });
    try {
      t = `Object of ${JSON.stringify(c)}`;
    } catch {
      t = "Object";
    }
  }
  return t;
}
function Pe(n, e) {
  const o = (t, s) => {
    if (Jt(s))
      return s(t);
    if (s == null)
      return t === s ? !1 : `Expected ${T(t)} to be ${String(s)}`;
    const c = It(t, s);
    if (c !== null)
      return c;
    const i = qt(t, s);
    if (i !== null)
      return i;
    if (Array.isArray(s))
      return Yt(t, s, o);
    if (s === Object)
      return xe(t, {}, o);
    if (s instanceof Function)
      return t instanceof s ? !1 : `Expected ${T(t, !0)} to be of Type ${kt(s)}`;
    if (typeof s == "object") {
      const u = xe(t, s, o);
      return u || !1;
    }
    throw new Error(`Cannot handle pattern ${String(s)}`);
  };
  return o(n, e);
}
function h(n, e) {
  return !Pe(n, e);
}
let Zt = Error;
function Bt(n, e) {
  const o = Pe(n, e);
  if (o)
    throw new Zt(`Match failed: ${o}`);
}
function Qt(n) {
  const e = (o) => {
    if (o === void 0)
      return !1;
    const t = Pe(o, n);
    return t && `${t} or undefined`;
  };
  return e[Ie] = !0, e;
}
function w(n, e, o) {
  const t = o ?? Number;
  Bt(n, t), Bt(e, t);
  const s = (c) => {
    const i = It(c, t);
    return i || (c >= n && c <= e ? !1 : `expected ${T(c)} to be within range ${n}:${e}`);
  };
  return s[Ie] = !0, s;
}
const ae = "@vcmap/cesium-filters", Xt = "2.0.1", en = "^6.0", At = () => ({}), W = (n, e) => {
  const o = n.__vccOpts || n;
  for (const [t, s] of e)
    o[t] = s;
  return o;
}, tn = {
  __name: "ModifiedSectionComponent",
  setup(n) {
    return (e, o) => (N(), L(
      Wt(Pt),
      Et(e.$attrs, { class: "modified-form-section" }),
      {
        default: r(() => [
          jt(e.$slots, "default", {}, void 0, !0)
        ]),
        _: 3
        /* FORWARDED */
      },
      16
      /* FULL_PROPS */
    ));
  }
}, $ = /* @__PURE__ */ W(tn, [["__scopeId", "data-v-6ae159a7"]]);
function Se() {
  return {
    enabled: !1,
    intensity: 0.5,
    bias: 0.1,
    lengthCap: 3,
    stepSize: 1.95,
    frustumLength: 1e3,
    blurStepSize: 0.86,
    ambientOcclusionOnly: !1
  };
}
function _e() {
  return {
    enabled: !1,
    contrast: 128,
    brightness: -0.3,
    delta: 1,
    sigma: 2,
    stepSize: 1,
    glowOnly: !1
  };
}
function ve() {
  return {
    enabled: !1,
    focalDistance: 5,
    delta: 1,
    sigma: 2,
    stepSize: 1
  };
}
function ye() {
  return {
    enabled: !1,
    gradations: 5
  };
}
function Oe() {
  return {
    enabled: !1,
    brightness: 0.5
  };
}
function Ve() {
  return {
    enabled: !1,
    gamma: 2.2
  };
}
function ze() {
  return {
    enabled: !1,
    delta: 1,
    sigma: 2,
    stepSize: 1
  };
}
function Fe() {
  return {
    enabled: !1
  };
}
function Ce() {
  return {
    enabled: !1,
    color: "#E00E0E"
  };
}
function ue(n) {
  return n === 0 ? {
    enabled: !1,
    selected: n,
    lightIntensity: 3,
    color: "#FFFFFF",
    showButton: !1,
    x: 0,
    y: 0,
    z: 0
  } : n === 1 ? {
    enabled: !1,
    selected: n,
    lightIntensity: 0.5,
    color: "#E6ECFF",
    showButton: !1,
    x: 0,
    y: 0,
    z: 0
  } : n === 2 ? {
    enabled: !1,
    selected: n,
    lightIntensity: 1,
    color: "#FFFFFF",
    showButton: !1,
    x: 0,
    y: 0,
    z: 0
  } : n === 3 ? {
    enabled: !1,
    selected: n,
    lightIntensity: 1,
    color: "#FFFFFF",
    showButton: !0,
    x: 0,
    y: 0,
    z: 0
  } : {
    enabled: !1,
    selected: 0,
    lightIntensity: 3,
    color: "#FFFFFF",
    showButton: !1,
    x: 0,
    y: 0,
    z: 0
  };
}
const H = {
  enabled: Boolean,
  intensity: w(0, 100, Number),
  bias: w(0, 1, Number),
  lengthCap: w(0, 1e3, Number),
  stepSize: w(0, 10, Number),
  frustumLength: w(0, 1e4, Number),
  blurStepSize: w(0, 10, Number),
  ambientOcclusionOnly: Boolean
}, G = {
  enabled: Boolean,
  contrast: w(-255, 255, Number),
  brightness: w(-1, 1, Number),
  delta: w(-10, 10, Number),
  sigma: w(-10, 100, Number),
  stepSize: w(0, 100, Number),
  glowOnly: Boolean
}, Q = {
  enabled: Boolean,
  focalDistance: w(0, 1e3, Number),
  delta: w(0, 100, Number),
  sigma: w(0, 100, Number),
  stepSize: w(0, 100, Number)
}, me = {
  enabled: Boolean,
  gradations: w(0, 1e3, Number)
}, fe = {
  enabled: Boolean,
  brightness: w(0, 10, Number)
}, oe = {
  enabled: Boolean,
  delta: w(0, 10, Number),
  sigma: w(0, 10, Number),
  stepSize: w(0, 100, Number)
}, ge = {
  enabled: Boolean,
  gamma: w(0, 1e3, Number)
}, pe = {
  enabled: Boolean
}, be = {
  enabled: Boolean,
  color: String
}, Z = {
  enabled: Boolean,
  selected: w(0, 3, Number),
  lightIntensity: w(0, 100, Number),
  color: String,
  showButton: Boolean,
  x: Number,
  y: Number,
  z: Number
};
function j(n) {
  const e = {};
  return Object.keys(n).forEach((o) => {
    e[o] = Qt(n[o]);
  }), e;
}
const nn = {
  name: "AmbientOcclusionComponent",
  components: {
    VCol: J,
    VRow: q,
    VContainer: Y,
    VcsLabel: X,
    VcsTextField: ee,
    VcsCheckbox: xt,
    ModifiedSectionComponent: $
  },
  props: {
    modelValue: {
      type: Object,
      default: Se,
      validator: (n) => h(n, H)
    }
  },
  setup(n, { emit: e }) {
    const o = R(
      n,
      "modelValue",
      e
    ), t = Se(), s = U("vcsApp"), c = {
      intensity: [
        (a) => h(a, H.intensity) || s.vueI18n.t("cesium-filters.errormessage.intensity")
      ],
      bias: [
        (a) => h(a, H.bias) || s.vueI18n.t("cesium-filters.errormessage.bias")
      ],
      lengthCap: [
        (a) => h(a, H.lengthCap) || s.vueI18n.t("cesium-filters.errormessage.lengthCap")
      ],
      stepSize: [
        (a) => h(a, H.stepSize) || s.vueI18n.t("cesium-filters.errormessage.stepSize")
      ],
      frustumLength: [
        (a) => h(a, H.frustumLength) || s.vueI18n.t("cesium-filters.errormessage.frustumLength")
      ],
      blurStepSize: [
        (a) => h(a, H.blurStepSize) || s.vueI18n.t("cesium-filters.errormessage.blurStepSize")
      ]
    }, i = M({
      name: "enableBriAction",
      title: "cesium-filters.tooltip.activate",
      icon: "$vcsCheckbox",
      active: o.value.enabled,
      setTitleAndIcon() {
        i.icon = i.active ? "$vcsCheckboxChecked" : "$vcsCheckbox", i.title = i.active ? "cesium-filters.tooltip.deactivate" : "cesium-filters.tooltip.activate";
      },
      callback() {
        o.value.enabled = !o.value.enabled, i.active = o.value.enabled, i.setTitleAndIcon();
      }
    });
    i.setTitleAndIcon();
    const u = M({
      name: "resetBriAction",
      title: "cesium-filters.tooltip.reset",
      icon: "$vcsReturn",
      callback() {
        o.value = { ...t }, i.active = o.value.enabled, i.setTitleAndIcon();
      }
    }), p = K(() => Object.keys(o.value).filter((a) => a !== "enabled").some(
      (a) => o.value[a] !== t[a]
    ) ? [i, u] : [i]);
    return {
      rules: c,
      actions: p,
      ambientOcclusion: o
    };
  }
};
function on(n, e, o, t, s, c) {
  const i = g("VcsLabel"), u = g("v-col"), p = g("VcsTextField"), a = g("v-row"), V = g("VcsCheckbox"), z = g("v-container"), _ = g("ModifiedSectionComponent");
  return N(), L(_, {
    expandable: !0,
    heading: "cesium-filters.ambientOc.ambientOcclusion",
    "action-button-list-overflow-count": 5,
    "header-actions": t.actions
  }, {
    default: r(() => [
      l(z, null, {
        default: r(() => [
          l(a, { "no-gutters": "" }, {
            default: r(() => [
              l(u, null, {
                default: r(() => [
                  l(i, { "html-for": "AOintensity_id" }, {
                    default: r(() => [
                      B(
                        C(n.$t("cesium-filters.ambientOc.AOitensity")),
                        1
                        /* TEXT */
                      )
                    ]),
                    _: 1
                    /* STABLE */
                  })
                ]),
                _: 1
                /* STABLE */
              }),
              l(u, null, {
                default: r(() => [
                  l(p, {
                    id: "AOintensity_id",
                    type: "number",
                    min: "0",
                    max: "100",
                    step: 0.1,
                    rules: t.rules.intensity,
                    disabled: !t.ambientOcclusion.enabled,
                    "show-spin-buttons": "",
                    modelValue: t.ambientOcclusion.intensity,
                    "onUpdate:modelValue": e[0] || (e[0] = (A) => t.ambientOcclusion.intensity = A),
                    modelModifiers: { number: !0 }
                  }, null, 8, ["rules", "disabled", "modelValue"])
                ]),
                _: 1
                /* STABLE */
              })
            ]),
            _: 1
            /* STABLE */
          }),
          l(a, { "no-gutters": "" }, {
            default: r(() => [
              l(u, null, {
                default: r(() => [
                  l(i, { "html-for": "AObias_id" }, {
                    default: r(() => [
                      B(
                        C(n.$t("cesium-filters.ambientOc.AObias")),
                        1
                        /* TEXT */
                      )
                    ]),
                    _: 1
                    /* STABLE */
                  })
                ]),
                _: 1
                /* STABLE */
              }),
              l(u, null, {
                default: r(() => [
                  l(p, {
                    id: "AObias_id",
                    type: "number",
                    min: "0",
                    max: "1",
                    step: 0.1,
                    rules: t.rules.bias,
                    "show-spin-buttons": "",
                    modelValue: t.ambientOcclusion.bias,
                    "onUpdate:modelValue": e[1] || (e[1] = (A) => t.ambientOcclusion.bias = A),
                    modelModifiers: { number: !0 },
                    disabled: !t.ambientOcclusion.enabled
                  }, null, 8, ["rules", "modelValue", "disabled"])
                ]),
                _: 1
                /* STABLE */
              })
            ]),
            _: 1
            /* STABLE */
          }),
          l(a, { "no-gutters": "" }, {
            default: r(() => [
              l(u, null, {
                default: r(() => [
                  l(i, { "html-for": "AOlengthCap_id" }, {
                    default: r(() => [
                      B(
                        C(n.$t("cesium-filters.ambientOc.AOlengthCap")),
                        1
                        /* TEXT */
                      )
                    ]),
                    _: 1
                    /* STABLE */
                  })
                ]),
                _: 1
                /* STABLE */
              }),
              l(u, null, {
                default: r(() => [
                  l(p, {
                    id: "AOlengthCap_id",
                    type: "number",
                    step: 1,
                    min: "0",
                    max: "1000",
                    rules: t.rules.lengthCap,
                    "show-spin-buttons": "",
                    modelValue: t.ambientOcclusion.lengthCap,
                    "onUpdate:modelValue": e[2] || (e[2] = (A) => t.ambientOcclusion.lengthCap = A),
                    modelModifiers: { number: !0 },
                    disabled: !t.ambientOcclusion.enabled
                  }, null, 8, ["rules", "modelValue", "disabled"])
                ]),
                _: 1
                /* STABLE */
              })
            ]),
            _: 1
            /* STABLE */
          }),
          l(a, { "no-gutters": "" }, {
            default: r(() => [
              l(u, null, {
                default: r(() => [
                  l(i, { "html-for": "AOstepSize_id" }, {
                    default: r(() => [
                      B(
                        C(n.$t("cesium-filters.ambientOc.AOstepSize")),
                        1
                        /* TEXT */
                      )
                    ]),
                    _: 1
                    /* STABLE */
                  })
                ]),
                _: 1
                /* STABLE */
              }),
              l(u, null, {
                default: r(() => [
                  l(p, {
                    id: "AOstepSize_id",
                    type: "number",
                    min: "0",
                    max: "10",
                    step: 0.01,
                    rules: t.rules.stepSize,
                    "show-spin-buttons": "",
                    modelValue: t.ambientOcclusion.stepSize,
                    "onUpdate:modelValue": e[3] || (e[3] = (A) => t.ambientOcclusion.stepSize = A),
                    modelModifiers: { number: !0 },
                    disabled: !t.ambientOcclusion.enabled
                  }, null, 8, ["rules", "modelValue", "disabled"])
                ]),
                _: 1
                /* STABLE */
              })
            ]),
            _: 1
            /* STABLE */
          }),
          l(a, { "no-gutters": "" }, {
            default: r(() => [
              l(u, null, {
                default: r(() => [
                  l(i, { "html-for": "AOfrustumLength_id" }, {
                    default: r(() => [
                      B(
                        C(n.$t("cesium-filters.ambientOc.AOfrustumLength")),
                        1
                        /* TEXT */
                      )
                    ]),
                    _: 1
                    /* STABLE */
                  })
                ]),
                _: 1
                /* STABLE */
              }),
              l(u, null, {
                default: r(() => [
                  l(p, {
                    id: "AOfrustumLength_id",
                    type: "number",
                    min: "0",
                    max: "10000",
                    step: 1,
                    rules: t.rules.frustumLength,
                    "show-spin-buttons": "",
                    modelValue: t.ambientOcclusion.frustumLength,
                    "onUpdate:modelValue": e[4] || (e[4] = (A) => t.ambientOcclusion.frustumLength = A),
                    modelModifiers: { number: !0 },
                    disabled: !t.ambientOcclusion.enabled
                  }, null, 8, ["rules", "modelValue", "disabled"])
                ]),
                _: 1
                /* STABLE */
              })
            ]),
            _: 1
            /* STABLE */
          }),
          l(a, { "no-gutters": "" }, {
            default: r(() => [
              l(u, null, {
                default: r(() => [
                  l(i, { "html-for": "AOblurStepSize_id" }, {
                    default: r(() => [
                      B(
                        C(n.$t("cesium-filters.ambientOc.AOblurStepSize")),
                        1
                        /* TEXT */
                      )
                    ]),
                    _: 1
                    /* STABLE */
                  })
                ]),
                _: 1
                /* STABLE */
              }),
              l(u, null, {
                default: r(() => [
                  l(p, {
                    id: "AOblurStepSize_id",
                    type: "number",
                    min: "0",
                    max: "10",
                    step: 0.01,
                    rules: t.rules.blurStepSize,
                    "show-spin-buttons": "",
                    modelValue: t.ambientOcclusion.blurStepSize,
                    "onUpdate:modelValue": e[5] || (e[5] = (A) => t.ambientOcclusion.blurStepSize = A),
                    modelModifiers: { number: !0 },
                    disabled: !t.ambientOcclusion.enabled
                  }, null, 8, ["rules", "modelValue", "disabled"])
                ]),
                _: 1
                /* STABLE */
              })
            ]),
            _: 1
            /* STABLE */
          }),
          l(a, { "no-gutters": "" }, {
            default: r(() => [
              l(u, {
                cols: "1",
                class: "align-center d-flex"
              }, {
                default: r(() => [
                  l(V, {
                    id: "ambOexcl_check",
                    modelValue: t.ambientOcclusion.ambientOcclusionOnly,
                    "onUpdate:modelValue": e[6] || (e[6] = (A) => t.ambientOcclusion.ambientOcclusionOnly = A),
                    "true-value": !0,
                    "false-value": !1,
                    disabled: !t.ambientOcclusion.enabled
                  }, null, 8, ["modelValue", "disabled"])
                ]),
                _: 1
                /* STABLE */
              }),
              l(u, null, {
                default: r(() => [
                  l(i, { "html-for": "ambOexcl_check" }, {
                    default: r(() => [
                      B(
                        C(n.$t("cesium-filters.ambientOc.AOambOexcl")),
                        1
                        /* TEXT */
                      )
                    ]),
                    _: 1
                    /* STABLE */
                  })
                ]),
                _: 1
                /* STABLE */
              })
            ]),
            _: 1
            /* STABLE */
          })
        ]),
        _: 1
        /* STABLE */
      })
    ]),
    _: 1
    /* STABLE */
  }, 8, ["header-actions"]);
}
const sn = /* @__PURE__ */ W(nn, [["render", on], ["__scopeId", "data-v-a420e8d0"]]), ln = {
  name: "BloomComponent",
  components: {
    VCol: J,
    VRow: q,
    VContainer: Y,
    VcsLabel: X,
    VcsTextField: ee,
    VcsCheckbox: xt,
    ModifiedSectionComponent: $,
    VcsSlider: Mt
  },
  props: {
    modelValue: {
      type: Object,
      default: _e,
      validator: (n) => h(n, G)
    }
  },
  setup(n, { emit: e }) {
    const o = R(n, "modelValue", e), t = _e(), s = U("vcsApp"), c = {
      contrast: [
        (a) => h(a, G.contrast) || s.vueI18n.t("cesium-filters.errormessage.contrast")
      ],
      brightness: [
        (a) => h(a, G.brightness) || s.vueI18n.t("cesium-filters.errormessage.brightness")
      ],
      delta: [
        (a) => h(a, G.delta) || s.vueI18n.t("cesium-filters.errormessage.delta")
      ],
      sigma: [
        (a) => h(a, G.sigma) || s.vueI18n.t("cesium-filters.errormessage.sigma")
      ],
      stepSize: [
        (a) => h(a, G.stepSize) || s.vueI18n.t("cesium-filters.errormessage.stepSizeBloom")
      ]
    }, i = M({
      name: "enableBloAction",
      title: "cesium-filters.tooltip.activate",
      icon: "$vcsCheckbox",
      active: o.value.enabled,
      setTitleAndIcon() {
        i.icon = i.active ? "$vcsCheckboxChecked" : "$vcsCheckbox", i.title = i.active ? "cesium-filters.tooltip.deactivate" : "cesium-filters.tooltip.activate";
      },
      callback() {
        o.value.enabled = !o.value.enabled, i.active = o.value.enabled, i.setTitleAndIcon();
      }
    });
    i.setTitleAndIcon();
    const u = M({
      name: "resetBloAction",
      title: "cesium-filters.tooltip.reset",
      icon: "$vcsReturn",
      callback() {
        o.value = { ...t }, i.active = o.value.enabled, i.setTitleAndIcon();
      }
    }), p = K(() => Object.keys(o.value).filter((a) => a !== "enabled").some((a) => o.value[a] !== t[a]) ? [i, u] : [i]);
    return {
      rules: c,
      actions: p,
      bloom: o
    };
  }
};
function an(n, e, o, t, s, c) {
  const i = g("VcsLabel"), u = g("v-col"), p = g("VcsSlider"), a = g("v-row"), V = g("VcsTextField"), z = g("VcsCheckbox"), _ = g("v-container"), A = g("ModifiedSectionComponent");
  return N(), L(A, {
    expandable: !0,
    "action-button-list-overflow-count": 5,
    "header-actions": t.actions,
    heading: "cesium-filters.Blooms.Bloom"
  }, {
    default: r(() => [
      l(_, null, {
        default: r(() => [
          l(a, { "no-gutters": "" }, {
            default: r(() => [
              l(u, null, {
                default: r(() => [
                  l(i, { "html-for": "BContrast_id" }, {
                    default: r(() => [
                      B(
                        C(n.$t("cesium-filters.Blooms.BContrast")),
                        1
                        /* TEXT */
                      )
                    ]),
                    _: 1
                    /* STABLE */
                  })
                ]),
                _: 1
                /* STABLE */
              }),
              l(u, null, {
                default: r(() => [
                  l(p, {
                    id: "BContrast_id",
                    "thumb-label": "",
                    min: -255,
                    max: 255,
                    type: "number",
                    step: 0.1,
                    modelValue: t.bloom.contrast,
                    "onUpdate:modelValue": e[0] || (e[0] = (I) => t.bloom.contrast = I),
                    modelModifiers: { number: !0 },
                    rules: t.rules.contrast,
                    disabled: !t.bloom.enabled
                  }, null, 8, ["modelValue", "rules", "disabled"])
                ]),
                _: 1
                /* STABLE */
              })
            ]),
            _: 1
            /* STABLE */
          }),
          l(a, { "no-gutters": "" }, {
            default: r(() => [
              l(u, null, {
                default: r(() => [
                  l(i, { "html-for": "Bbrightness_id" }, {
                    default: r(() => [
                      B(
                        C(n.$t("cesium-filters.Blooms.Bbrightness")),
                        1
                        /* TEXT */
                      )
                    ]),
                    _: 1
                    /* STABLE */
                  })
                ]),
                _: 1
                /* STABLE */
              }),
              l(u, null, {
                default: r(() => [
                  l(V, {
                    id: "Bbrightness_id",
                    type: "number",
                    step: 0.1,
                    min: -1,
                    max: 1,
                    "show-spin-buttons": "",
                    modelValue: t.bloom.brightness,
                    "onUpdate:modelValue": e[1] || (e[1] = (I) => t.bloom.brightness = I),
                    modelModifiers: { number: !0 },
                    rules: t.rules.brightness,
                    disabled: !t.bloom.enabled
                  }, null, 8, ["modelValue", "rules", "disabled"])
                ]),
                _: 1
                /* STABLE */
              })
            ]),
            _: 1
            /* STABLE */
          }),
          l(a, { "no-gutters": "" }, {
            default: r(() => [
              l(u, null, {
                default: r(() => [
                  l(i, { "html-for": "Bdelta_id" }, {
                    default: r(() => [
                      B(
                        C(n.$t("cesium-filters.Blooms.Bdelta")),
                        1
                        /* TEXT */
                      )
                    ]),
                    _: 1
                    /* STABLE */
                  })
                ]),
                _: 1
                /* STABLE */
              }),
              l(u, null, {
                default: r(() => [
                  l(V, {
                    id: "Bdelta_id",
                    type: "number",
                    step: 0.1,
                    min: -10,
                    max: 10,
                    "show-spin-buttons": "",
                    modelValue: t.bloom.delta,
                    "onUpdate:modelValue": e[2] || (e[2] = (I) => t.bloom.delta = I),
                    modelModifiers: { number: !0 },
                    rules: t.rules.delta,
                    disabled: !t.bloom.enabled
                  }, null, 8, ["modelValue", "rules", "disabled"])
                ]),
                _: 1
                /* STABLE */
              })
            ]),
            _: 1
            /* STABLE */
          }),
          l(a, { "no-gutters": "" }, {
            default: r(() => [
              l(u, null, {
                default: r(() => [
                  l(i, { "html-for": "Bsigma_id" }, {
                    default: r(() => [
                      B(
                        C(n.$t("cesium-filters.Blooms.Bsigma")),
                        1
                        /* TEXT */
                      )
                    ]),
                    _: 1
                    /* STABLE */
                  })
                ]),
                _: 1
                /* STABLE */
              }),
              l(u, null, {
                default: r(() => [
                  l(V, {
                    id: "Bsigma_id",
                    type: "number",
                    step: 0.1,
                    min: -10,
                    max: 100,
                    "show-spin-buttons": "",
                    modelValue: t.bloom.sigma,
                    "onUpdate:modelValue": e[3] || (e[3] = (I) => t.bloom.sigma = I),
                    modelModifiers: { number: !0 },
                    rules: t.rules.sigma,
                    disabled: !t.bloom.enabled
                  }, null, 8, ["modelValue", "rules", "disabled"])
                ]),
                _: 1
                /* STABLE */
              })
            ]),
            _: 1
            /* STABLE */
          }),
          l(a, { "no-gutters": "" }, {
            default: r(() => [
              l(u, null, {
                default: r(() => [
                  l(i, { "html-for": "BstepSize_id" }, {
                    default: r(() => [
                      B(
                        C(n.$t("cesium-filters.Blooms.BstepSize")),
                        1
                        /* TEXT */
                      )
                    ]),
                    _: 1
                    /* STABLE */
                  })
                ]),
                _: 1
                /* STABLE */
              }),
              l(u, null, {
                default: r(() => [
                  l(V, {
                    id: "BstepSize_id",
                    type: "number",
                    step: 1,
                    min: 0,
                    max: 100,
                    "show-spin-buttons": "",
                    modelValue: t.bloom.stepSize,
                    "onUpdate:modelValue": e[4] || (e[4] = (I) => t.bloom.stepSize = I),
                    modelModifiers: { number: !0 },
                    rules: t.rules.stepSize,
                    disabled: !t.bloom.enabled
                  }, null, 8, ["modelValue", "rules", "disabled"])
                ]),
                _: 1
                /* STABLE */
              })
            ]),
            _: 1
            /* STABLE */
          }),
          l(a, { "no-gutters": "" }, {
            default: r(() => [
              l(u, {
                cols: "1",
                class: "align-center d-flex"
              }, {
                default: r(() => [
                  l(z, {
                    id: "Bglowexcl_check",
                    modelValue: t.bloom.glowOnly,
                    "onUpdate:modelValue": e[5] || (e[5] = (I) => t.bloom.glowOnly = I),
                    "true-value": !0,
                    "false-value": !1,
                    disabled: !t.bloom.enabled
                  }, null, 8, ["modelValue", "disabled"])
                ]),
                _: 1
                /* STABLE */
              }),
              l(u, null, {
                default: r(() => [
                  l(i, {
                    class: "pt-1",
                    "html-for": "Bglowexcl_check"
                  }, {
                    default: r(() => [
                      B(
                        C(n.$t("cesium-filters.Blooms.Bglowexcl")),
                        1
                        /* TEXT */
                      )
                    ]),
                    _: 1
                    /* STABLE */
                  })
                ]),
                _: 1
                /* STABLE */
              })
            ]),
            _: 1
            /* STABLE */
          })
        ]),
        _: 1
        /* STABLE */
      })
    ]),
    _: 1
    /* STABLE */
  }, 8, ["header-actions"]);
}
const rn = /* @__PURE__ */ W(ln, [["render", an]]), cn = {
  name: "DepthOfFieldComponent",
  components: {
    VCol: J,
    VRow: q,
    VContainer: Y,
    ModifiedSectionComponent: $,
    VcsLabel: X,
    VcsTextField: ee
  },
  props: {
    modelValue: {
      type: Object,
      default: ve,
      validator: (n) => h(n, Q)
    }
  },
  setup(n, { emit: e }) {
    const o = R(n, "modelValue", e), t = ve(), s = U("vcsApp"), c = {
      focalDistance: [
        (a) => h(a, Q.focalDistance) || s.vueI18n.t("cesium-filters.errormessage.focalDistance")
      ],
      delta: [
        (a) => h(a, Q.delta) || s.vueI18n.t("cesium-filters.errormessage.deltaDoF")
      ],
      sigma: [
        (a) => h(a, Q.sigma) || s.vueI18n.t("cesium-filters.errormessage.sigmaDof")
      ],
      stepSize: [
        (a) => h(a, Q.stepSize) || s.vueI18n.t("cesium-filters.errormessage.stepSizeDoF")
      ]
    }, i = M({
      name: "enableDofAction",
      title: "cesium-filters.tooltip.activate",
      icon: "$vcsCheckbox",
      active: o.value.enabled,
      setTitleAndIcon() {
        i.icon = i.active ? "$vcsCheckboxChecked" : "$vcsCheckbox", i.title = i.active ? "cesium-filters.tooltip.deactivate" : "cesium-filters.tooltip.activate";
      },
      callback() {
        o.value.enabled = !o.value.enabled, i.active = o.value.enabled, i.setTitleAndIcon();
      }
    });
    i.setTitleAndIcon();
    const u = M({
      name: "resetDofAction",
      title: "cesium-filters.tooltip.reset",
      icon: "$vcsReturn",
      callback() {
        o.value = { ...t }, i.active = o.value.enabled, i.setTitleAndIcon();
      }
    }), p = K(() => Object.keys(o.value).filter((a) => a !== "enabled").some(
      (a) => o.value[a] !== t[a]
    ) ? [i, u] : [i]);
    return {
      rules: c,
      actions: p,
      depthOfField: o
    };
  }
};
function dn(n, e, o, t, s, c) {
  const i = g("VcsLabel"), u = g("v-col"), p = g("VcsTextField"), a = g("v-row"), V = g("v-container"), z = g("ModifiedSectionComponent");
  return N(), L(z, {
    expandable: !0,
    "action-button-list-overflow-count": 5,
    "header-actions": t.actions,
    heading: "cesium-filters.depthOF.dof"
  }, {
    default: r(() => [
      l(V, null, {
        default: r(() => [
          l(a, { "no-gutters": "" }, {
            default: r(() => [
              l(u, null, {
                default: r(() => [
                  l(i, { "html-for": "dofFocalDistance_id" }, {
                    default: r(() => [
                      B(
                        C(n.$t("cesium-filters.depthOF.dofFocalDistance")),
                        1
                        /* TEXT */
                      )
                    ]),
                    _: 1
                    /* STABLE */
                  })
                ]),
                _: 1
                /* STABLE */
              }),
              l(u, null, {
                default: r(() => [
                  l(p, {
                    id: "dofFocalDistance_id",
                    type: "number",
                    step: 1,
                    min: "0",
                    max: "1000",
                    "show-spin-buttons": "",
                    modelValue: t.depthOfField.focalDistance,
                    "onUpdate:modelValue": e[0] || (e[0] = (_) => t.depthOfField.focalDistance = _),
                    modelModifiers: { number: !0 },
                    rules: t.rules.focalDistance,
                    disabled: !t.depthOfField.enabled
                  }, null, 8, ["modelValue", "rules", "disabled"])
                ]),
                _: 1
                /* STABLE */
              })
            ]),
            _: 1
            /* STABLE */
          }),
          l(a, { "no-gutters": "" }, {
            default: r(() => [
              l(u, null, {
                default: r(() => [
                  l(i, { "html-for": "dofdelta_id" }, {
                    default: r(() => [
                      B(
                        C(n.$t("cesium-filters.depthOF.dofdelta")),
                        1
                        /* TEXT */
                      )
                    ]),
                    _: 1
                    /* STABLE */
                  })
                ]),
                _: 1
                /* STABLE */
              }),
              l(u, null, {
                default: r(() => [
                  l(p, {
                    id: "dofdelta_id",
                    type: "number",
                    step: 0.1,
                    min: "0",
                    max: "10",
                    "show-spin-buttons": "",
                    modelValue: t.depthOfField.delta,
                    "onUpdate:modelValue": e[1] || (e[1] = (_) => t.depthOfField.delta = _),
                    modelModifiers: { number: !0 },
                    rules: t.rules.delta,
                    disabled: !t.depthOfField.enabled
                  }, null, 8, ["modelValue", "rules", "disabled"])
                ]),
                _: 1
                /* STABLE */
              })
            ]),
            _: 1
            /* STABLE */
          }),
          l(a, { "no-gutters": "" }, {
            default: r(() => [
              l(u, null, {
                default: r(() => [
                  l(i, { "html-for": "dofsigma_id" }, {
                    default: r(() => [
                      B(
                        C(n.$t("cesium-filters.depthOF.dofsigma")),
                        1
                        /* TEXT */
                      )
                    ]),
                    _: 1
                    /* STABLE */
                  })
                ]),
                _: 1
                /* STABLE */
              }),
              l(u, null, {
                default: r(() => [
                  l(p, {
                    id: "dofsigma_id",
                    type: "number",
                    step: 0.1,
                    min: "0",
                    max: "10",
                    "show-spin-buttons": "",
                    modelValue: t.depthOfField.sigma,
                    "onUpdate:modelValue": e[2] || (e[2] = (_) => t.depthOfField.sigma = _),
                    modelModifiers: { number: !0 },
                    rules: t.rules.sigma,
                    disabled: !t.depthOfField.enabled
                  }, null, 8, ["modelValue", "rules", "disabled"])
                ]),
                _: 1
                /* STABLE */
              })
            ]),
            _: 1
            /* STABLE */
          }),
          l(a, { "no-gutters": "" }, {
            default: r(() => [
              l(u, null, {
                default: r(() => [
                  l(i, { "html-for": "dofstepSize_id" }, {
                    default: r(() => [
                      B(
                        C(n.$t("cesium-filters.depthOF.dofstepSize")),
                        1
                        /* TEXT */
                      )
                    ]),
                    _: 1
                    /* STABLE */
                  })
                ]),
                _: 1
                /* STABLE */
              }),
              l(u, null, {
                default: r(() => [
                  l(p, {
                    id: "dofstepSize_id",
                    type: "number",
                    step: 1,
                    min: "0",
                    max: "100",
                    "show-spin-buttons": "",
                    modelValue: t.depthOfField.stepSize,
                    "onUpdate:modelValue": e[3] || (e[3] = (_) => t.depthOfField.stepSize = _),
                    modelModifiers: { number: !0 },
                    rules: t.rules.stepSize,
                    disabled: !t.depthOfField.enabled
                  }, null, 8, ["modelValue", "rules", "disabled"])
                ]),
                _: 1
                /* STABLE */
              })
            ]),
            _: 1
            /* STABLE */
          })
        ]),
        _: 1
        /* STABLE */
      })
    ]),
    _: 1
    /* STABLE */
  }, 8, ["header-actions"]);
}
const un = /* @__PURE__ */ W(cn, [["render", dn]]), mn = {
  name: "BlackAndWhiteComponent",
  components: {
    VCol: J,
    VRow: q,
    VContainer: Y,
    ModifiedSectionComponent: $,
    VcsLabel: X,
    VcsTextField: ee
  },
  props: {
    modelValue: {
      type: Object,
      default: ye,
      validator: (n) => h(n, me)
    }
  },
  setup(n, { emit: e }) {
    const o = R(n, "modelValue", e), t = ye(), s = U("vcsApp"), c = {
      gradations: [
        (a) => h(a, me.gradations) || s.vueI18n.t("cesium-filters.errormessage.gradations ")
      ]
    }, i = M({
      name: "enableBaWAction",
      title: "cesium-filters.tooltip.activate",
      icon: "$vcsCheckbox",
      active: o.value.enabled,
      setTitleAndIcon() {
        i.icon = i.active ? "$vcsCheckboxChecked" : "$vcsCheckbox", i.title = i.active ? "cesium-filters.tooltip.deactivate" : "cesium-filters.tooltip.activate";
      },
      callback() {
        o.value.enabled = !o.value.enabled, i.active = o.value.enabled, i.setTitleAndIcon();
      }
    });
    i.setTitleAndIcon();
    const u = M({
      name: "resetBaWAction",
      title: "cesium-filters.tooltip.reset",
      icon: "$vcsReturn",
      callback() {
        o.value = { ...t }, i.active = o.value.enabled, i.setTitleAndIcon();
      }
    }), p = K(() => Object.keys(o.value).filter((a) => a !== "enabled").some(
      (a) => o.value[a] !== t[a]
    ) ? [i, u] : [i]);
    return {
      rules: c,
      actions: p,
      blackAndWhite: o
    };
  }
};
function fn(n, e, o, t, s, c) {
  const i = g("VcsLabel"), u = g("v-col"), p = g("VcsTextField"), a = g("v-row"), V = g("v-container"), z = g("ModifiedSectionComponent");
  return N(), L(z, {
    expandable: !0,
    "action-button-list-overflow-count": 5,
    "header-actions": t.actions,
    heading: "cesium-filters.baw"
  }, {
    default: r(() => [
      l(V, null, {
        default: r(() => [
          l(a, { "no-gutters": "" }, {
            default: r(() => [
              l(u, null, {
                default: r(() => [
                  l(i, { "html-for": "bwgrad_id" }, {
                    default: r(() => [
                      B(
                        C(n.$t("cesium-filters.bwgrad")),
                        1
                        /* TEXT */
                      )
                    ]),
                    _: 1
                    /* STABLE */
                  })
                ]),
                _: 1
                /* STABLE */
              }),
              l(u, null, {
                default: r(() => [
                  l(p, {
                    id: "bwgrad_id",
                    type: "number",
                    step: 1,
                    min: "0",
                    max: "1000",
                    rules: t.rules.gradations,
                    "show-spin-buttons": "",
                    modelValue: t.blackAndWhite.gradations,
                    "onUpdate:modelValue": e[0] || (e[0] = (_) => t.blackAndWhite.gradations = _),
                    modelModifiers: { number: !0 },
                    disabled: !t.blackAndWhite.enabled
                  }, null, 8, ["rules", "modelValue", "disabled"])
                ]),
                _: 1
                /* STABLE */
              })
            ]),
            _: 1
            /* STABLE */
          })
        ]),
        _: 1
        /* STABLE */
      })
    ]),
    _: 1
    /* STABLE */
  }, 8, ["header-actions"]);
}
const gn = /* @__PURE__ */ W(mn, [["render", fn]]), bn = {
  name: "BrightnessComponent",
  components: {
    VCol: J,
    VRow: q,
    VContainer: Y,
    ModifiedSectionComponent: $,
    VcsLabel: X,
    VcsTextField: ee
  },
  props: {
    modelValue: {
      type: Object,
      default: Oe,
      validator: (n) => h(n, fe)
    }
  },
  setup(n, { emit: e }) {
    const o = R(n, "modelValue", e), t = Oe(), s = U("vcsApp"), c = {
      brightness: [
        (a) => h(a, fe.brightness) || s.vueI18n.t("cesium-filters.errormessage.brightnessB")
      ]
    }, i = M({
      name: "enableBriAction",
      title: "cesium-filters.tooltip.activate",
      icon: "$vcsCheckbox",
      active: o.value.enabled,
      setTitleAndIcon() {
        i.icon = i.active ? "$vcsCheckboxChecked" : "$vcsCheckbox", i.title = i.active ? "cesium-filters.tooltip.deactivate" : "cesium-filters.tooltip.activate";
      },
      callback() {
        o.value.enabled = !o.value.enabled, i.active = o.value.enabled, i.setTitleAndIcon();
      }
    });
    i.setTitleAndIcon();
    const u = M({
      name: "resetBriAction",
      title: "cesium-filters.tooltip.reset",
      icon: "$vcsReturn",
      callback() {
        o.value = { ...t }, i.active = o.value.enabled, i.setTitleAndIcon();
      }
    }), p = K(() => Object.keys(o.value).filter((a) => a !== "enabled").some((a) => o.value[a] !== t[a]) ? [i, u] : [i]);
    return {
      rules: c,
      actions: p,
      brightness: o
    };
  }
};
function hn(n, e, o, t, s, c) {
  const i = g("VcsLabel"), u = g("v-col"), p = g("VcsTextField"), a = g("v-row"), V = g("v-container"), z = g("ModifiedSectionComponent");
  return N(), L(z, {
    expandable: !0,
    "action-button-list-overflow-count": 5,
    "header-actions": t.actions,
    heading: "cesium-filters.brightness"
  }, {
    default: r(() => [
      l(V, null, {
        default: r(() => [
          l(a, { "no-gutters": "" }, {
            default: r(() => [
              l(u, null, {
                default: r(() => [
                  l(i, { "html-for": "bright_id" }, {
                    default: r(() => [
                      B(
                        C(n.$t("cesium-filters.brightness")),
                        1
                        /* TEXT */
                      )
                    ]),
                    _: 1
                    /* STABLE */
                  })
                ]),
                _: 1
                /* STABLE */
              }),
              l(u, null, {
                default: r(() => [
                  l(p, {
                    id: "bright_id",
                    type: "number",
                    step: 0.1,
                    min: "0",
                    max: "10",
                    "show-spin-buttons": "",
                    modelValue: t.brightness.brightness,
                    "onUpdate:modelValue": e[0] || (e[0] = (_) => t.brightness.brightness = _),
                    modelModifiers: { number: !0 },
                    rules: t.rules.brightness,
                    disabled: !t.brightness.enabled
                  }, null, 8, ["modelValue", "rules", "disabled"])
                ]),
                _: 1
                /* STABLE */
              })
            ]),
            _: 1
            /* STABLE */
          })
        ]),
        _: 1
        /* STABLE */
      })
    ]),
    _: 1
    /* STABLE */
  }, 8, ["header-actions"]);
}
const pn = /* @__PURE__ */ W(bn, [["render", hn]]), Sn = {
  name: "SilhouetteComponent",
  components: {
    VCol: J,
    VRow: q,
    VContainer: Y,
    VColorPicker: Ft,
    ModifiedSectionComponent: $
  },
  props: {
    modelValue: {
      type: Object,
      default: Ce,
      validator: (n) => h(n, be)
    }
  },
  setup(n, { emit: e }) {
    const o = R(n, "modelValue", e), t = Ce(), s = U("vcsApp"), c = {
      color: [
        (a) => h(a, be.color) || s.vueI18n.t("cesium-filters.errormessage.color")
      ]
    }, i = M({
      name: "enableSilAction",
      title: "cesium-filters.tooltip.activate",
      icon: "$vcsCheckbox",
      active: o.value.enabled,
      setTitleAndIcon() {
        i.icon = i.active ? "$vcsCheckboxChecked" : "$vcsCheckbox", i.title = i.active ? "cesium-filters.tooltip.deactivate" : "cesium-filters.tooltip.activate";
      },
      callback() {
        o.value.enabled = !o.value.enabled, i.active = o.value.enabled, i.setTitleAndIcon();
      }
    });
    i.setTitleAndIcon();
    const u = M({
      name: "resetSilAction",
      title: "cesium-filters.tooltip.reset",
      icon: "$vcsReturn",
      callback() {
        o.value = { ...t }, i.active = o.value.enabled, i.setTitleAndIcon();
      }
    }), p = K(() => Object.keys(o.value).filter((a) => a !== "enabled").some((a) => o.value[a] !== t[a]) ? [i, u] : [i]);
    return {
      rules: c,
      actions: p,
      silhouette: o
    };
  }
}, _n = {
  class: "d-flex justify-center",
  style: { margin: "0 2px 0 2px" }
};
function vn(n, e, o, t, s, c) {
  const i = g("v-color-picker"), u = g("v-col"), p = g("v-row"), a = g("v-container"), V = g("ModifiedSectionComponent");
  return N(), L(V, {
    expandable: !0,
    "action-button-list-overflow-count": 5,
    "header-actions": t.actions,
    heading: "cesium-filters.silhouette"
  }, {
    default: r(() => [
      l(a, null, {
        default: r(() => [
          l(p, { "no-gutters": "" }, {
            default: r(() => [
              l(u, null, {
                default: r(() => [
                  Ae("div", _n, [
                    l(i, {
                      modelValue: t.silhouette.color,
                      "onUpdate:modelValue": e[0] || (e[0] = (z) => t.silhouette.color = z),
                      disabled: !t.silhouette.enabled,
                      modes: ["hex", "rgb"],
                      style: { width: "100%" }
                    }, null, 8, ["modelValue", "disabled"])
                  ])
                ]),
                _: 1
                /* STABLE */
              })
            ]),
            _: 1
            /* STABLE */
          })
        ]),
        _: 1
        /* STABLE */
      })
    ]),
    _: 1
    /* STABLE */
  }, 8, ["header-actions"]);
}
const yn = /* @__PURE__ */ W(Sn, [["render", vn], ["__scopeId", "data-v-8932b258"]]), On = {
  name: "BlurComponent",
  components: {
    VCol: J,
    VRow: q,
    VContainer: Y,
    ModifiedSectionComponent: $,
    VcsLabel: X,
    VcsTextField: ee
  },
  props: {
    modelValue: {
      type: Object,
      default: ze,
      validator: (n) => h(n, oe)
    }
  },
  setup(n, { emit: e }) {
    const o = R(n, "modelValue", e), t = ze(), s = U("vcsApp"), c = {
      delta: [
        (a) => h(a, oe.delta) || s.vueI18n.t("cesium-filters.errormessage.deltaBlur")
      ],
      sigma: [
        (a) => h(a, oe.sigma) || s.vueI18n.t("cesium-filters.errormessage.sigmaBlur")
      ],
      stepSize: [
        (a) => h(a, oe.stepSize) || s.vueI18n.t("cesium-filters.errormessage.stepSizeBlur")
      ]
    }, i = M({
      name: "enableBluAction",
      title: "cesium-filters.tooltip.activate",
      icon: "$vcsCheckbox",
      active: o.value.enabled,
      setTitleAndIcon() {
        i.icon = i.active ? "$vcsCheckboxChecked" : "$vcsCheckbox", i.title = i.active ? "cesium-filters.tooltip.deactivate" : "cesium-filters.tooltip.activate";
      },
      callback() {
        o.value.enabled = !o.value.enabled, i.active = o.value.enabled, i.setTitleAndIcon();
      }
    });
    i.setTitleAndIcon();
    const u = M({
      name: "resetBluAction",
      title: "cesium-filters.tooltip.reset",
      icon: "$vcsReturn",
      callback() {
        o.value = { ...t }, i.active = o.value.enabled, i.setTitleAndIcon();
      }
    }), p = K(() => Object.keys(o.value).filter((a) => a !== "enabled").some((a) => o.value[a] !== t[a]) ? [i, u] : [i]);
    return {
      rules: c,
      actions: p,
      blur: o
    };
  }
};
function Vn(n, e, o, t, s, c) {
  const i = g("VcsLabel"), u = g("v-col"), p = g("VcsTextField"), a = g("v-row"), V = g("v-container"), z = g("ModifiedSectionComponent");
  return N(), L(z, {
    expandable: !0,
    "action-button-list-overflow-count": 5,
    "header-actions": t.actions,
    heading: "cesium-filters.blurs.blur"
  }, {
    default: r(() => [
      l(V, null, {
        default: r(() => [
          l(a, { "no-gutters": "" }, {
            default: r(() => [
              l(u, null, {
                default: r(() => [
                  l(i, { "html-for": "blurDelta_id" }, {
                    default: r(() => [
                      B(
                        C(n.$t("cesium-filters.blurs.blurDelta")),
                        1
                        /* TEXT */
                      )
                    ]),
                    _: 1
                    /* STABLE */
                  })
                ]),
                _: 1
                /* STABLE */
              }),
              l(u, null, {
                default: r(() => [
                  l(p, {
                    id: "blurDelta_id",
                    type: "number",
                    step: 0.1,
                    min: "0",
                    max: "10",
                    "show-spin-buttons": "",
                    modelValue: t.blur.delta,
                    "onUpdate:modelValue": e[0] || (e[0] = (_) => t.blur.delta = _),
                    modelModifiers: { number: !0 },
                    rules: t.rules.delta,
                    disabled: !t.blur.enabled
                  }, null, 8, ["modelValue", "rules", "disabled"])
                ]),
                _: 1
                /* STABLE */
              })
            ]),
            _: 1
            /* STABLE */
          }),
          l(a, { "no-gutters": "" }, {
            default: r(() => [
              l(u, null, {
                default: r(() => [
                  l(i, { "html-for": "blurSigma_id" }, {
                    default: r(() => [
                      B(
                        C(n.$t("cesium-filters.blurs.blurSigma")),
                        1
                        /* TEXT */
                      )
                    ]),
                    _: 1
                    /* STABLE */
                  })
                ]),
                _: 1
                /* STABLE */
              }),
              l(u, null, {
                default: r(() => [
                  l(p, {
                    id: "blurSigma_id",
                    type: "number",
                    step: 0.1,
                    min: "0",
                    max: "10",
                    "show-spin-buttons": "",
                    modelValue: t.blur.sigma,
                    "onUpdate:modelValue": e[1] || (e[1] = (_) => t.blur.sigma = _),
                    modelModifiers: { number: !0 },
                    rules: t.rules.sigma,
                    disabled: !t.blur.enabled
                  }, null, 8, ["modelValue", "rules", "disabled"])
                ]),
                _: 1
                /* STABLE */
              })
            ]),
            _: 1
            /* STABLE */
          }),
          l(a, { "no-gutters": "" }, {
            default: r(() => [
              l(u, null, {
                default: r(() => [
                  l(i, { "html-for": "blurStepSize_id" }, {
                    default: r(() => [
                      B(
                        C(n.$t("cesium-filters.blurs.blurStepSize")),
                        1
                        /* TEXT */
                      )
                    ]),
                    _: 1
                    /* STABLE */
                  })
                ]),
                _: 1
                /* STABLE */
              }),
              l(u, null, {
                default: r(() => [
                  l(p, {
                    id: "blurStepSize_id",
                    type: "number",
                    step: 0.1,
                    min: "0",
                    max: "100",
                    "show-spin-buttons": "",
                    modelValue: t.blur.stepSize,
                    "onUpdate:modelValue": e[2] || (e[2] = (_) => t.blur.stepSize = _),
                    modelModifiers: { number: !0 },
                    rules: t.rules.stepSize,
                    disabled: !t.blur.enabled
                  }, null, 8, ["modelValue", "rules", "disabled"])
                ]),
                _: 1
                /* STABLE */
              })
            ]),
            _: 1
            /* STABLE */
          })
        ]),
        _: 1
        /* STABLE */
      })
    ]),
    _: 1
    /* STABLE */
  }, 8, ["header-actions"]);
}
const zn = /* @__PURE__ */ W(On, [["render", Vn]]), Cn = {
  name: "NightVisionComponent",
  components: {
    ModifiedSectionComponent: $
  },
  props: {
    modelValue: {
      type: Object,
      default: Fe,
      validator: (n) => h(n, pe)
    }
  },
  setup(n, { emit: e }) {
    const o = R(n, "modelValue", e), t = M({
      name: "enableNigAction",
      icon: "$vcsCheckbox",
      active: o.value.enabled,
      setTitleAndIcon() {
        t.icon = t.active ? "$vcsCheckboxChecked" : "$vcsCheckbox", t.title = t.active ? "cesium-filters.tooltip.deactivate" : "cesium-filters.tooltip.activate";
      },
      callback() {
        o.value.enabled = !o.value.enabled, t.active = o.value.enabled, t.setTitleAndIcon();
      }
    });
    return t.setTitleAndIcon(), {
      action: t,
      nightVision: o
    };
  }
};
function Bn(n, e, o, t, s, c) {
  const i = g("ModifiedSectionComponent");
  return N(), L(i, {
    expandable: !1,
    "header-actions": [t.action],
    heading: "cesium-filters.nightvision"
  }, null, 8, ["header-actions"]);
}
const An = /* @__PURE__ */ W(Cn, [["render", Bn], ["__scopeId", "data-v-a2076e56"]]), wn = {
  name: "HdrComponent",
  components: {
    VCol: J,
    VRow: q,
    VContainer: Y,
    ModifiedSectionComponent: $,
    VcsLabel: X,
    VcsTextField: ee
  },
  props: {
    modelValue: {
      type: Object,
      default: Ve,
      validator: (n) => h(n, ge)
    }
  },
  setup(n, { emit: e }) {
    const o = R(n, "modelValue", e), t = Ve(), s = U("vcsApp"), c = {
      gamma: [
        (a) => h(a, ge.gamma) || s.vueI18n.t("cesium-filters.errormessage.gamma")
      ]
    }, i = M({
      name: "enableHdrAction",
      title: "cesium-filters.tooltip.activate",
      icon: "$vcsCheckbox",
      active: o.value.enabled,
      setTitleAndIcon() {
        i.icon = i.active ? "$vcsCheckboxChecked" : "$vcsCheckbox", i.title = i.active ? "cesium-filters.tooltip.deactivate" : "cesium-filters.tooltip.activate";
      },
      callback() {
        o.value.enabled = !o.value.enabled, i.active = o.value.enabled, i.setTitleAndIcon();
      }
    });
    i.setTitleAndIcon();
    const u = M({
      name: "resetHdrAction",
      title: "cesium-filters.tooltip.reset",
      icon: "$vcsReturn",
      callback() {
        o.value = { ...t }, i.active = o.value.enabled, i.setTitleAndIcon();
      }
    }), p = K(() => Object.keys(o.value).filter((a) => a !== "enabled").some((a) => o.value[a] !== t[a]) ? [i, u] : [i]);
    return {
      rules: c,
      actions: p,
      hdr: o
    };
  }
};
function xn(n, e, o, t, s, c) {
  const i = g("VcsLabel"), u = g("v-col"), p = g("VcsTextField"), a = g("v-row"), V = g("v-container"), z = g("ModifiedSectionComponent");
  return N(), L(z, {
    expandable: !0,
    "action-button-list-overflow-count": 5,
    "header-actions": t.actions,
    heading: "cesium-filters.hdr"
  }, {
    default: r(() => [
      l(V, null, {
        default: r(() => [
          l(a, { "no-gutters": "" }, {
            default: r(() => [
              l(u, null, {
                default: r(() => [
                  l(i, { "html-for": "hdrgamma_id" }, {
                    default: r(() => [
                      B(
                        C(n.$t("cesium-filters.hdrgamma")),
                        1
                        /* TEXT */
                      )
                    ]),
                    _: 1
                    /* STABLE */
                  })
                ]),
                _: 1
                /* STABLE */
              }),
              l(u, null, {
                default: r(() => [
                  l(p, {
                    id: "hdrgamma_id",
                    type: "number",
                    step: 0.1,
                    min: "0",
                    max: "1000",
                    rules: t.rules.gamma,
                    "show-spin-buttons": "",
                    modelValue: t.hdr.gamma,
                    "onUpdate:modelValue": e[0] || (e[0] = (_) => t.hdr.gamma = _),
                    modelModifiers: { number: !0 },
                    disabled: !t.hdr.enabled
                  }, null, 8, ["rules", "modelValue", "disabled"])
                ]),
                _: 1
                /* STABLE */
              })
            ]),
            _: 1
            /* STABLE */
          })
        ]),
        _: 1
        /* STABLE */
      })
    ]),
    _: 1
    /* STABLE */
  }, 8, ["header-actions"]);
}
const Fn = /* @__PURE__ */ W(wn, [["render", xn]]), In = {
  name: "LightingComponent",
  components: {
    VCol: J,
    VRow: q,
    VContainer: Y,
    ModifiedSectionComponent: $,
    VcsLabel: X,
    VcsTextField: ee,
    VcsSelect: Dt,
    VColorPicker: Ft,
    VcsFormButton: Nt
  },
  props: {
    modelValue: {
      type: Object,
      default: ue,
      validator: (n) => h(n, Z)
    }
  },
  setup(n, { emit: e }) {
    const o = R(n, "modelValue", e), t = ue(o.value.selected), s = U("vcsApp"), c = s.maps.activeMap;
    c instanceof F && (t.lightIntensity = c.lightIntensity, o.value.lightIntensity = c.lightIntensity);
    const i = {
      selected: [
        (_) => h(_, Z.selected) || s.vueI18n.t("cesium-filters.errormessage.selected")
      ],
      lightIntensity: [
        (_) => h(_, Z.lightIntensity) || s.vueI18n.t("cesium-filters.errormessage.lightIntensity")
      ],
      color: [
        (_) => h(_, Z.color) || s.vueI18n.t("cesium-filters.errormessage.color")
      ],
      x: [
        (_) => h(_, Z.x) || s.vueI18n.t("cesium-filters.errormessage.x")
      ],
      y: [
        (_) => h(_, Z.y) || s.vueI18n.t("cesium-filters.errormessage.y")
      ],
      z: [
        (_) => h(_, Z.z) || s.vueI18n.t("cesium-filters.errormessage.z")
      ]
    }, u = M({
      name: "resetLigAction",
      title: "cesium-filters.tooltip.reset",
      icon: "$vcsReturn",
      callback() {
        o.value = { ...t };
      }
    }), p = K(() => Object.keys(o.value).filter((_) => _ !== "enabled").some((_) => o.value[_] !== t[_]) ? [u] : []), a = [
      { modelValue: 0, text: "cesium-filters.lighting.sun" },
      { modelValue: 1, text: "cesium-filters.lighting.moon" },
      { modelValue: 2, text: "cesium-filters.lighting.flash" },
      { modelValue: 3, text: "cesium-filters.lighting.fixed" }
    ];
    function V() {
      c instanceof F && (o.value.x = c.getScene().camera.direction.x, o.value.y = c.getScene().camera.direction.y, o.value.z = c.getScene().camera.direction.z);
    }
    function z() {
      const _ = ue(o.value.selected);
      o.value.lightIntensity = _.lightIntensity, o.value.color = _.color, o.value.showButton = _.showButton;
    }
    return {
      lightingItems: a,
      updateDirectLPosition: V,
      actions: p,
      rules: i,
      lighting: o,
      changeSelect: z
    };
  }
}, kn = { style: { border: "1px solid red", "border-radius": "5px", padding: "5px" } }, Pn = {
  class: "d-flex justify-center",
  style: { margin: "0 2px 0 2px" }
};
function Mn(n, e, o, t, s, c) {
  const i = g("VcsSelect"), u = g("v-col"), p = g("v-row"), a = g("VcsLabel"), V = g("VcsTextField"), z = g("v-color-picker"), _ = g("VcsFormButton"), A = g("v-container"), I = g("ModifiedSectionComponent");
  return N(), L(I, {
    expandable: !0,
    "action-button-list-overflow-count": 5,
    "header-actions": t.actions,
    heading: "cesium-filters.title3"
  }, {
    default: r(() => [
      l(A, null, {
        default: r(() => [
          l(p, { "no-gutters": "" }, {
            default: r(() => [
              l(u, null, {
                default: r(() => [
                  l(i, {
                    id: "lightingSelect",
                    placeholder: n.$t("cesium-filters.lighting.sun"),
                    items: t.lightingItems,
                    modelValue: t.lighting.selected,
                    "onUpdate:modelValue": e[0] || (e[0] = (d) => t.lighting.selected = d),
                    "item-text": (d) => d.text,
                    "item-value": (d) => d.modelValue
                  }, null, 8, ["placeholder", "items", "modelValue", "item-text", "item-value"])
                ]),
                _: 1
                /* STABLE */
              })
            ]),
            _: 1
            /* STABLE */
          }),
          t.lighting.selected === 1 ? (N(), L(p, {
            key: 0,
            class: "containerPadding"
          }, {
            default: r(() => [
              l(u, null, {
                default: r(() => [
                  Ae(
                    "p",
                    kn,
                    C(n.$t("cesium-filters.MessageMoon")),
                    1
                    /* TEXT */
                  )
                ]),
                _: 1
                /* STABLE */
              })
            ]),
            _: 1
            /* STABLE */
          })) : Ot("v-if", !0),
          l(p, { "no-gutters": "" }, {
            default: r(() => [
              l(u, null, {
                default: r(() => [
                  l(a, { "html-for": "lightIntensity_id" }, {
                    default: r(() => [
                      B(
                        C(n.$t("cesium-filters.lightIntensity")),
                        1
                        /* TEXT */
                      )
                    ]),
                    _: 1
                    /* STABLE */
                  })
                ]),
                _: 1
                /* STABLE */
              }),
              l(u, null, {
                default: r(() => [
                  l(V, {
                    id: "lightIntensity_id",
                    type: "number",
                    modelValue: t.lighting.lightIntensity,
                    "onUpdate:modelValue": e[1] || (e[1] = (d) => t.lighting.lightIntensity = d),
                    modelModifiers: { number: !0 },
                    rules: t.rules.lightIntensity
                  }, null, 8, ["modelValue", "rules"])
                ]),
                _: 1
                /* STABLE */
              })
            ]),
            _: 1
            /* STABLE */
          }),
          l(p, { "no-gutters": "" }, {
            default: r(() => [
              l(u, null, {
                default: r(() => [
                  Ae("div", Pn, [
                    l(z, {
                      modelValue: t.lighting.color,
                      "onUpdate:modelValue": e[2] || (e[2] = (d) => t.lighting.color = d),
                      modes: ["hex", "rgb"],
                      style: { width: "100%" }
                    }, null, 8, ["modelValue"])
                  ])
                ]),
                _: 1
                /* STABLE */
              })
            ]),
            _: 1
            /* STABLE */
          }),
          t.lighting.showButton ? (N(), L(p, { key: 1 }, {
            default: r(() => [
              l(u, null, {
                default: r(() => [
                  l(_, {
                    onClick: e[3] || (e[3] = (d) => t.updateDirectLPosition())
                  }, {
                    default: r(() => [
                      B(
                        C(n.$t("cesium-filters.currentPOS")),
                        1
                        /* TEXT */
                      )
                    ]),
                    _: 1
                    /* STABLE */
                  })
                ]),
                _: 1
                /* STABLE */
              })
            ]),
            _: 1
            /* STABLE */
          })) : Ot("v-if", !0)
        ]),
        _: 1
        /* STABLE */
      })
    ]),
    _: 1
    /* STABLE */
  }, 8, ["header-actions"]);
}
const Dn = /* @__PURE__ */ W(In, [["render", Mn], ["__scopeId", "data-v-aed0f822"]]), ie = "filter_effects_window_id", Nn = {
  name: "FilterEffects",
  components: {
    VSheet: Ht,
    AmbientOcclusionComponent: sn,
    BloomComponent: rn,
    DepthOfFieldComponent: un,
    BlackAndWhiteComponent: gn,
    BrightnessComponent: pn,
    SilhouetteComponent: yn,
    BlurComponent: zn,
    NightVisionComponent: An,
    HdrComponent: Fn,
    LightingComponent: Dn
  },
  setup() {
    const n = U("vcsApp"), e = n.maps.activeMap, o = n.plugins.getByKey(ae).values;
    return e instanceof F && (o.lighting.lightIntensity = e.lightIntensity), {
      myvalues: o,
      closeSelf() {
        n.windowManager.remove(ie);
      }
    };
  }
};
function Ln(n, e, o, t, s, c) {
  const i = g("LightingComponent"), u = g("HdrComponent"), p = g("AmbientOcclusionComponent"), a = g("BloomComponent"), V = g("DepthOfFieldComponent"), z = g("BlackAndWhiteComponent"), _ = g("BrightnessComponent"), A = g("SilhouetteComponent"), I = g("BlurComponent"), d = g("NightVisionComponent"), b = g("v-sheet");
  return N(), L(b, null, {
    default: r(() => [
      l(i, {
        modelValue: t.myvalues.lighting,
        "onUpdate:modelValue": e[0] || (e[0] = (S) => t.myvalues.lighting = S)
      }, null, 8, ["modelValue"]),
      l(u, {
        modelValue: t.myvalues.hdr,
        "onUpdate:modelValue": e[1] || (e[1] = (S) => t.myvalues.hdr = S)
      }, null, 8, ["modelValue"]),
      l(p, {
        modelValue: t.myvalues.ambientOcclusion,
        "onUpdate:modelValue": e[2] || (e[2] = (S) => t.myvalues.ambientOcclusion = S)
      }, null, 8, ["modelValue"]),
      l(a, {
        modelValue: t.myvalues.bloom,
        "onUpdate:modelValue": e[3] || (e[3] = (S) => t.myvalues.bloom = S)
      }, null, 8, ["modelValue"]),
      l(V, {
        modelValue: t.myvalues.depthOfField,
        "onUpdate:modelValue": e[4] || (e[4] = (S) => t.myvalues.depthOfField = S)
      }, null, 8, ["modelValue"]),
      l(z, {
        modelValue: t.myvalues.blackAndWhite,
        "onUpdate:modelValue": e[5] || (e[5] = (S) => t.myvalues.blackAndWhite = S)
      }, null, 8, ["modelValue"]),
      l(_, {
        modelValue: t.myvalues.brightness,
        "onUpdate:modelValue": e[6] || (e[6] = (S) => t.myvalues.brightness = S)
      }, null, 8, ["modelValue"]),
      l(A, {
        modelValue: t.myvalues.silhouette,
        "onUpdate:modelValue": e[7] || (e[7] = (S) => t.myvalues.silhouette = S)
      }, null, 8, ["modelValue"]),
      l(I, {
        modelValue: t.myvalues.blur,
        "onUpdate:modelValue": e[8] || (e[8] = (S) => t.myvalues.blur = S)
      }, null, 8, ["modelValue"]),
      l(d, {
        modelValue: t.myvalues.nightVision,
        "onUpdate:modelValue": e[9] || (e[9] = (S) => t.myvalues.nightVision = S)
      }, null, 8, ["modelValue"])
    ]),
    _: 1
    /* STABLE */
  });
}
const Tn = /* @__PURE__ */ W(Nn, [["render", Ln], ["__scopeId", "data-v-e3e1d801"]]), Wn = {
  "cesium-filters": {
    title: "Filter und Effekte",
    title2: "Hight Dynamic Range (HDR)",
    title3: "Beleuchtung",
    lightIntensity: "Intensität",
    hdr: "High Dynamic Range (HDR)",
    hdrgamma: "Gamma",
    close: "Schließen",
    log: "Loggen",
    FogPPS: "Nebel als Post Processing Schritt",
    logTooltip: "Logge Hello World in Console",
    nightvision: "Nacht Sicht",
    currentPOS: "Updaten mit aktueller Position",
    reset: "Werte zurücksetzen",
    MessageMoon: "Um den Himmel dem Mondlicht anzupassen ist es noch notwendig in den Zeiteinstellungen auf Nacht zu schalten.",
    errormessage: {
      intensity: "Wert muss zischen 0 und 100 sein",
      bias: "Wert muss zischen 0 und 1 sein",
      lengthCap: "Wert muss zischen 0 und 1000 sein",
      stepSize: "Wert muss zischen 0 und 10 sein",
      blurStepSize: "Wert muss zischen 0 und 10 sein",
      frustumLength: "Wert muss zischen 0 und 10000",
      "gradations ": "Wert muss zischen 0 und 1000 sein",
      contrast: "Wert muss zischen -255 und 255 sein",
      brightness: "Wert muss zischen -1 und 1 sein",
      delta: "Wert muss zischen -10 und 10 sein",
      sigma: "Wert muss zischen -10 und 100 sein",
      stepSizeBloom: "Wert muss zischen 0 und 100",
      gamma: "Wert muss zischen 0 und 1000 sein",
      brightnessB: "Wert muss zischen 0 und 10 sein",
      focalDistance: "Wert muss zischen 0 und 1000 sein",
      deltaDoF: "Wert muss zischen 0 und 100",
      sigmaDoF: "Wert muss zischen 0 und 100",
      stepSizeDoF: "Wert muss zischen 0 und 100",
      deltaBlur: "Wert muss zischen 0 und 10",
      sigmaBlur: "Wert muss zischen 0 und 10",
      stepSizeBlur: "Wert muss zischen 0 und 100",
      lightIntensity: "Wert muss zischen 0 und 100 sein"
    },
    tooltip: {
      reset: "Werte zurücksetzen",
      activate: "Aktivieren",
      deactivate: "Deaktivieren"
    },
    lighting: {
      sun: "Sonnenlicht",
      moon: "Mondlicht",
      flash: "Taschenlampe",
      fixed: "Fixierte Lamp"
    },
    blurs: {
      blur: "Unschärfe",
      blurDelta: "Delta",
      blurSigma: "Sigma",
      blurStepSize: "Schritt Größe"
    },
    silhouette: "Silhouette",
    brightness: "Helligkeit",
    baw: "Schwarz und Weiß",
    bwgrad: "Gradations",
    depthOF: {
      dof: "Tiefenschärfe",
      dofFocalDistance: "Brennweite",
      dofdelta: "Delta",
      dofsigma: "Sigma",
      dofstepSize: "Schritt Größe"
    },
    ambientOc: {
      ambientOcclusion: "Umgebungsokklusion",
      AOambOexcl: "Nur Umgebungsokklusion",
      AOitensity: "Intensität",
      AObias: "Bias",
      AOlengthCap: "Length Cap",
      AOstepSize: "Schritt Größe",
      AOblurStepSize: "Unschärfe Schritt Größe",
      AOfrustumLength: "Frustum Länge"
    },
    Blooms: {
      Bloom: "Bloom",
      Bglowexcl: "glowOnly",
      BContrast: "Kontrast",
      Bbrightness: "Helligkeit",
      Bdelta: "Delta",
      Bsigma: "Sigma",
      BstepSize: "Schritt Größe"
    },
    toolState: {
      open: "Filter und Effekte",
      activate: "Filter und Effekte",
      deactivate: "Fenster schließen",
      tooltip: "Einstellungen zur Anwendung visueller Effekte auf die Karte"
    }
  }
}, En = {
  "cesium-filters": {
    title: "Filter and Effects",
    title2: "Hight Dynamic Range (HDR)",
    title3: "Lighting",
    lightIntensity: "Intensity",
    hdr: "High Dynamic Range (HDR)",
    hdrgamma: "Gamma",
    close: "Close",
    log: "Log",
    FogPPS: "Fog as Post Processing Step",
    logTooltip: "Log Hello World to console",
    nightvision: "Night Vision",
    currentPOS: "Update with Current Position",
    reset: "Reset",
    MessageMoon: "To adapt the sky to the moonlight, it is still necessary to switch to night in the time settings.",
    errormessage: {
      intensity: "Value must be between 0 and 100",
      bias: "Value must be between 0 and 1",
      lengthCap: "Value must be between 0 and 1000",
      stepSize: "Value must be between 0 and 10",
      frustumLength: "Value must be between 0 and 10000",
      blurStepSize: "Value must be between 0 and 10",
      "gradations ": "Value must be between 0 and 1000",
      contrast: "Value must be between -255 and 255",
      brightness: "Value must be between -1 and 1",
      delta: "Value must be between -10 and 10",
      sigma: "Value must be between -10 and 100",
      stepSizeBloom: "Value must be between 0 and 100",
      gamma: "Value must be between 0 and 1000",
      brightnessB: "Value must be between 0 and 10",
      focalDistance: "Value must be between 0 and 1000",
      deltaDoF: "Value must be between 0 and 100",
      sigmaDoF: "Value must be between 0 and 100",
      stepSizeDoF: "Value must be between 0 and 100",
      deltaBlur: "Value must be between 0 and 10",
      sigmaBlur: "Value must be between 0 and 10",
      stepSizeBlur: "Value must be between 0 and 100",
      lightIntensity: "Value must be between 0 and 100"
    },
    tooltip: {
      reset: "Reset Values",
      activate: "Activate",
      deactivate: "Deactivate"
    },
    lighting: {
      sun: "Sun Light",
      moon: "Moon Light",
      flash: "Flashlight",
      fixed: "Fixed Light"
    },
    blurs: {
      blur: "Blur",
      blurDelta: "Delta",
      blurSigma: "Sigma",
      blurStepSize: "step Size"
    },
    silhouette: "Silhouette",
    brightness: "Brightness",
    baw: "Black and White",
    bwgrad: "gradations",
    depthOF: {
      dof: "Depth of Field",
      dofFocalDistance: "focal Distance",
      dofdelta: "Delta",
      dofsigma: "Sigma",
      dofstepSize: "step Size"
    },
    ambientOc: {
      ambientOcclusion: "Ambient Occlusion",
      AOambOexcl: "ambient Occlusion Only",
      AOitensity: "intensity",
      AObias: "bias",
      AOlengthCap: "Length Cap",
      AOstepSize: "step Size",
      AOblurStepSize: "blur step size",
      AOfrustumLength: "frustum Length"
    },
    Blooms: {
      Bloom: "Bloom",
      Bglowexcl: "glowOnly",
      BContrast: "contrast",
      Bbrightness: "brightness",
      Bdelta: "delta",
      Bsigma: "sigma",
      BstepSize: "step Size"
    },
    toolState: {
      open: "Filter and Effects",
      activate: "Filter and Effects",
      deactivate: "close window",
      tooltip: "Settings to apply visual effects to the map"
    }
  }
};
function jn(n) {
  var o, t;
  const e = (t = (o = n.getScene()) == null ? void 0 : o.postProcessStages) == null ? void 0 : t.ambientOcclusion;
  if (e)
    return {
      enabled: e.enabled,
      intensity: e.uniforms.intensity,
      bias: e.uniforms.bias,
      lengthCap: e.uniforms.lengthCap,
      stepSize: e.uniforms.stepSize,
      frustumLength: e.uniforms.frustumLength,
      blurStepSize: e.uniforms.blurStepSize,
      ambientOcclusionOnly: e.uniforms.ambientOcclusionOnly
    };
}
function Rn(n) {
  var o, t;
  const e = (t = (o = n.getScene()) == null ? void 0 : o.postProcessStages) == null ? void 0 : t.bloom;
  if (e)
    return {
      enabled: e.enabled,
      contrast: e.uniforms.contrast,
      brightness: e.uniforms.brightness,
      delta: e.uniforms.delta,
      sigma: e.uniforms.sigma,
      stepSize: e.uniforms.stepSize,
      glowOnly: e.uniforms.glowOnly
    };
}
function Un(n) {
  var e, o, t;
  if ((e = n.getScene()) != null && e.postProcessStages) {
    const s = (t = (o = n.getScene()) == null ? void 0 : o.postProcessStages) == null ? void 0 : t.getStageByName("czm_depth_of_field");
    return s ? {
      enabled: s.enabled,
      focalDistance: s.uniforms.focalDistance,
      delta: s.uniforms.delta,
      sigma: s.uniforms.sigma,
      stepSize: s.uniforms.stepSize
    } : void 0;
  } else
    return;
}
function $n(n) {
  var e, o, t;
  if ((e = n.getScene()) != null && e.postProcessStages) {
    const s = (t = (o = n.getScene()) == null ? void 0 : o.postProcessStages) == null ? void 0 : t.getStageByName("czm_black_and_white");
    return s ? {
      gradations: s.uniforms.gradations,
      enabled: s.enabled
    } : void 0;
  } else
    return;
}
function Hn(n) {
  var e, o, t;
  if ((e = n.getScene()) != null && e.postProcessStages) {
    const s = (t = (o = n.getScene()) == null ? void 0 : o.postProcessStages) == null ? void 0 : t.getStageByName("czm_brightness");
    return s ? {
      enabled: s.enabled,
      brightness: s.uniforms.brightness
    } : void 0;
  } else
    return;
}
function Gn(n) {
  const e = n.getScene();
  if (e)
    return {
      gamma: e.gamma,
      enabled: e.highDynamicRange
    };
}
function Kn(n) {
  var e, o, t;
  if ((e = n.getScene()) != null && e.postProcessStages) {
    const s = (t = (o = n.getScene()) == null ? void 0 : o.postProcessStages) == null ? void 0 : t.getStageByName("czm_blur");
    return s ? {
      enabled: s.enabled,
      delta: s.uniforms.delta,
      sigma: s.uniforms.sigma,
      stepSize: s.uniforms.stepSize
    } : void 0;
  } else
    return;
}
function Jn(n) {
  var e, o, t;
  if ((e = n.getScene()) != null && e.postProcessStages) {
    const s = (t = (o = n.getScene()) == null ? void 0 : o.postProcessStages) == null ? void 0 : t.getStageByName("czm_night_vision");
    return s ? {
      enabled: s.enabled
    } : void 0;
  } else
    return;
}
function qn(n) {
  var o, t, s, c;
  const e = D.createSilhouetteStage();
  if ((t = (o = n.getScene()) == null ? void 0 : o.postProcessStages) != null && t.getStageByName(e.name)) {
    const i = (c = (s = n.getScene()) == null ? void 0 : s.postProcessStages) == null ? void 0 : c.getStageByName(e.name);
    return i ? {
      enabled: i.enabled,
      color: i.uniforms.color
    } : void 0;
  } else
    return;
}
function Yn(n) {
  return {
    light: n.getScene().light,
    dynamicAtmosphereLighting: n.getScene().globe.dynamicAtmosphereLighting,
    dynamicAtmosphereLightingFromSun: n.getScene().globe.dynamicAtmosphereLighting,
    intensity: n.getScene().light.intensity,
    color: n.getScene().light.color
  };
}
function wt(n) {
  return {
    map: n,
    ambientOcclusion: jn(n),
    blackAndWhite: $n(n),
    bloom: Rn(n),
    hdr: Gn(n),
    depthOfField: Un(n),
    brightness: Hn(n),
    blur: Kn(n),
    silhouette: qn(n),
    nightVision: Jn(n),
    lighting: Yn(n)
  };
}
function Zn(n) {
  const e = {
    id: ie,
    component: Tn,
    slot: Tt.DYNAMIC_RIGHT,
    state: {
      headerTitle: "cesium-filters.title",
      infoUrlCallback: n.getHelpUrlCallback(
        "/components/genericFunctions.html"
      )
    }
  }, o = M({
    name: "cesium-filters.toolState.open",
    title: "cesium-filters.toolState.tooltip",
    icon: "mdi-gradient-vertical",
    active: !1,
    disabled: !1,
    callback() {
      o.active ? (n.windowManager.remove(e.id), o.active = !1) : (o.active = !0, n.windowManager.add(e, ae));
    }
  }), t = [
    n.windowManager.added.addEventListener(({ id: c }) => {
      c === e.id && (o.active = !0);
    }),
    n.windowManager.removed.addEventListener(({ id: c }) => {
      c === e.id && (o.active = !1);
    })
  ];
  return { action: o, destroy: () => {
    t.forEach((c) => c());
  }, windowComponent: e };
}
function ii(n) {
  const e = Rt({
    ambientOcclusion: {
      ...Se()
    },
    blackAndWhite: {
      ...ye()
    },
    hdr: {
      ...Ve()
    },
    bloom: {
      ..._e()
    },
    depthOfField: {
      ...ve()
    },
    brightness: {
      ...Oe()
    },
    blur: {
      ...ze()
    },
    nightVision: {
      ...Fe()
    },
    silhouette: {
      ...Ce()
    },
    lighting: {
      ...ue()
    }
  }), o = [];
  let t = null;
  return {
    get name() {
      return ae;
    },
    get version() {
      return Xt;
    },
    get mapVersion() {
      return en;
    },
    get config() {
      return { ...At(), ...n };
    },
    get values() {
      return e;
    },
    initialize(s, c) {
      this._app = s;
      const { action: i, destroy: u, windowComponent: p } = Zn(s);
      this._destroyAction = u, this._mapChangedListener = s.maps.mapActivated.addEventListener(
        (d) => {
          d instanceof F ? (i.disabled = !1, s.windowManager.remove(p.id)) : (this._app.windowManager.has(ie) && this._app.windowManager.remove(ie), i.disabled = !0);
        }
      );
      function a() {
        c && h(c.ao, j(H)) && (e.ambientOcclusion = {
          ...e.ambientOcclusion,
          ...c.ao
        }), c && h(c.baw, j(me)) && (e.blackAndWhite = {
          ...e.blackAndWhite,
          ...c.baw
        }), c && h(c.hd, j(ge)) && (e.hdr = {
          ...e.hdr,
          ...c.hd
        }), c && h(c.blm, j(G)) && (e.bloom = {
          ...e.bloom,
          ...c.blm
        }), c && h(c.dof, j(Q)) && (e.depthOfField = {
          ...e.depthOfField,
          ...c.dof
        }), c && h(c.brt, j(fe)) && (e.brightness = {
          ...e.brightness,
          ...c.brt
        }), c && h(c.blr, j(oe)) && (e.blur = {
          ...e.blur,
          ...c.blr
        }), c && h(c.nv, j(pe)) && (e.nightVision = {
          ...e.nightVision,
          ...c.nv
        }), c && h(c.sil, j(be)) && (e.silhouette = {
          ...e.silhouette,
          ...c.sil
        }), c && h(c.lig, j(Z)) && (e.lighting = {
          ...e.lighting,
          ...c.lig
        });
      }
      let V = null;
      s.maps.activeMap && s.maps.activeMap instanceof F ? (t = wt(s.maps.activeMap), a()) : V = s.maps.mapActivated.addEventListener((d) => {
        d instanceof F && (t || (t = wt(d)), a(), V());
      }), o.push(
        E(
          () => e.ambientOcclusion,
          (d) => {
            var S, y;
            const b = s.maps.activeMap;
            if (b instanceof F) {
              const v = (y = (S = b.getScene()) == null ? void 0 : S.postProcessStages) == null ? void 0 : y.ambientOcclusion;
              v && h(d, H) && (v.uniforms.intensity = d.intensity, v.enabled = d.enabled, v.uniforms.ambientOcclusionOnly = d.ambientOcclusionOnly, v.uniforms.frustumLength = d.frustumLength, v.uniforms.blurStepSize = d.blurStepSize, v.uniforms.stepSize = d.stepSize, v.uniforms.lengthCap = d.lengthCap, v.uniforms.bias = d.bias);
            }
          }
        )
      ), o.push(
        E(
          () => e.blackAndWhite,
          (d) => {
            var S, y, v, x, k;
            const b = s.maps.activeMap;
            if (b instanceof F && ((S = b.getScene()) != null && S.postProcessStages) && h(d, me)) {
              let O = (v = (y = b.getScene()) == null ? void 0 : y.postProcessStages) == null ? void 0 : v.getStageByName("czm_black_and_white");
              O || (O = (k = (x = b.getScene()) == null ? void 0 : x.postProcessStages) == null ? void 0 : k.add(
                D.createBlackAndWhiteStage()
              )), O.uniforms.gradations = d.gradations, O.enabled = d.enabled;
            }
          }
        )
      ), o.push(
        E(
          () => e.bloom,
          (d) => {
            var S, y;
            const b = s.maps.activeMap;
            if (b instanceof F) {
              const v = (y = (S = b.getScene()) == null ? void 0 : S.postProcessStages) == null ? void 0 : y.bloom;
              v && h(d, G) && (v.enabled = d.enabled, v.uniforms.contrast = d.contrast, v.uniforms.brightness = d.brightness, v.uniforms.delta = d.delta, v.uniforms.sigma = d.sigma, v.uniforms.stepSize = d.stepSize, v.uniforms.glowOnly = d.glowOnly);
            }
          }
        )
      ), o.push(
        E(
          () => e.hdr,
          (d) => {
            const b = s.maps.activeMap;
            if (b instanceof F) {
              const S = b.getScene();
              S && h(d, ge) && (S.gamma = d.gamma, S.highDynamicRange = d.enabled);
            }
          }
        )
      ), o.push(
        E(
          () => e.depthOfField,
          (d) => {
            var S, y, v, x, k;
            const b = s.maps.activeMap;
            if (b instanceof F && ((S = b.getScene()) != null && S.postProcessStages) && h(d, Q)) {
              let O = (v = (y = b.getScene()) == null ? void 0 : y.postProcessStages) == null ? void 0 : v.getStageByName("czm_depth_of_field");
              O || (O = (k = (x = b.getScene()) == null ? void 0 : x.postProcessStages) == null ? void 0 : k.add(
                D.createDepthOfFieldStage()
              )), O.uniforms.focalDistance = d.focalDistance, O.enabled = d.enabled, O.uniforms.delta = d.delta, O.uniforms.sigma = d.sigma, O.uniforms.stepSize = d.stepSize;
            }
          }
        )
      ), o.push(
        E(
          () => e.brightness,
          (d) => {
            var S, y, v, x, k;
            const b = s.maps.activeMap;
            if (b instanceof F && ((S = b.getScene()) != null && S.postProcessStages) && h(d, fe)) {
              let O = (v = (y = b.getScene()) == null ? void 0 : y.postProcessStages) == null ? void 0 : v.getStageByName("czm_brightness");
              O || (O = (k = (x = b.getScene()) == null ? void 0 : x.postProcessStages) == null ? void 0 : k.add(
                D.createBrightnessStage()
              )), O.uniforms.brightness = d.brightness, O.enabled = d.enabled;
            }
          }
        )
      ), o.push(
        E(
          () => e.blur,
          (d) => {
            var S, y, v, x, k;
            const b = s.maps.activeMap;
            if (b instanceof F && ((S = b.getScene()) != null && S.postProcessStages) && h(d, oe)) {
              let O = (v = (y = b.getScene()) == null ? void 0 : y.postProcessStages) == null ? void 0 : v.getStageByName("czm_blur");
              O || (O = (k = (x = b.getScene()) == null ? void 0 : x.postProcessStages) == null ? void 0 : k.add(
                D.createBlurStage()
              )), O.uniforms.delta = d.delta, O.uniforms.sigma = d.sigma, O.uniforms.stepSize = d.stepSize, O.enabled = d.enabled;
            }
          }
        )
      ), o.push(
        E(
          () => e.silhouette,
          (d) => {
            var S, y, v, x, k, O, re, ce;
            const b = s.maps.activeMap;
            if (b instanceof F) {
              const se = D.createSilhouetteStage();
              (y = (S = b.getScene()) == null ? void 0 : S.postProcessStages) != null && y.getStageByName(se.name) && ((O = (v = b.getScene()) == null ? void 0 : v.postProcessStages) == null || O.remove(
                (k = (x = b.getScene()) == null ? void 0 : x.postProcessStages) == null ? void 0 : k.getStageByName(se.name)
              ));
              const le = (ce = (re = b.getScene()) == null ? void 0 : re.postProcessStages) == null ? void 0 : ce.add(se);
              le && h(d, be) && (le.enabled = d.enabled, le.uniforms.color = te.fromCssColorString(
                d.color
              ));
            }
          }
        )
      );
      const z = new Vt(), _ = new ne(), A = new ne();
      function I(d) {
        const b = s.maps.activeMap;
        if (b instanceof F) {
          const S = b.getCesiumWidget();
          d = zt(d) ? d : new ne();
          const y = S.clock.currentTime;
          zt(
            Ct.computeIcrfToFixedMatrix(y, z)
          ) || Ct.computeTemeToPseudoFixedMatrix(y, z);
          const v = $t.computeMoonPositionInEarthInertialFrame(
            y,
            _
          );
          Vt.multiplyByVector(
            z,
            v,
            v
          );
          const x = ne.normalize(
            v,
            A
          );
          return ne.negate(x, d);
        } else
          return "";
      }
      o.push(
        E(
          () => e.lighting,
          (d) => {
            var S;
            const b = s.maps.activeMap;
            if (b instanceof F) {
              if (d.selected === 0) {
                const y = new Ut();
                b.getScene().light = y, b.getScene().globe.dynamicAtmosphereLighting = !0, b.getScene().globe.dynamicAtmosphereLightingFromSun = !1, b.getScene().light.intensity = d.lightIntensity, b.getScene().light.color = te.fromCssColorString(
                  d.color
                );
              } else if (d.selected === 1) {
                const y = new he({
                  direction: I(),
                  color: new te(0.9, 0.925, 1),
                  intensity: 0.5
                });
                (S = b.getScene()) == null || S.preRender.addEventListener((v) => {
                  v.light === y && (v.light.direction = I(
                    v.light.direction
                  ));
                }), b.getScene().light = y, b.getScene().globe.dynamicAtmosphereLightingFromSun = !0, b.getScene().light.intensity = d.lightIntensity, b.getScene().light.color = te.fromCssColorString(
                  d.color
                );
              } else if (d.selected === 2) {
                const y = new he({
                  direction: b.getScene().camera.directionWC
                });
                b.getScene().light = y, b.getScene().globe.dynamicAtmosphereLighting = !1, b.getScene().light.intensity = d.lightIntensity, b.getScene().light.color = te.fromCssColorString(
                  d.color
                );
              } else if (d.selected === 3) {
                let y;
                d.x !== 0 || d.y !== 0 || d.z !== 0 ? y = new he({
                  direction: new ne(
                    d.x,
                    d.y,
                    d.z
                  )
                }) : y = new he({
                  direction: new ne(
                    b.getScene().camera.direction.x,
                    b.getScene().camera.direction.y,
                    b.getScene().camera.direction.z
                  )
                }), b.getScene().light = y, b.getScene().light.intensity = d.lightIntensity, b.getScene().light.color = te.fromCssColorString(
                  d.color
                );
              }
            }
          }
        )
      ), o.push(
        E(
          () => e.nightVision,
          (d) => {
            var S, y, v, x, k;
            const b = s.maps.activeMap;
            if (b instanceof F && ((S = b.getScene()) != null && S.postProcessStages) && h(d, pe)) {
              let O = (v = (y = b.getScene()) == null ? void 0 : y.postProcessStages) == null ? void 0 : v.getStageByName("czm_night_vision");
              O || (O = (k = (x = b.getScene()) == null ? void 0 : x.postProcessStages) == null ? void 0 : k.add(
                D.createNightVisionStage()
              )), O.enabled = d.enabled;
            }
          }
        )
      ), s.navbarManager.add(
        {
          id: ie,
          action: i
        },
        ae,
        Lt.MENU
      );
    },
    getState() {
      const s = {};
      if (e.ambientOcclusion.enabled) {
        const c = {};
        Object.keys(e.ambientOcclusion).forEach((i) => {
          e.ambientOcclusion[i] !== Se()[i] && (c[i] = e.ambientOcclusion[i]);
        }), s.ao = c;
      }
      if (e.blackAndWhite.enabled) {
        const c = {};
        Object.keys(e.blackAndWhite).forEach((i) => {
          e.blackAndWhite[i] !== ye()[i] && (c[i] = e.blackAndWhite[i]);
        }), s.baw = c;
      }
      if (e.hdr.enabled) {
        const c = {};
        Object.keys(e.hdr).forEach((i) => {
          e.hdr[i] !== Ve()[i] && (c[i] = e.hdr[i]);
        }), s.hd = c;
      }
      if (e.bloom.enabled) {
        const c = {};
        Object.keys(e.bloom).forEach((i) => {
          e.bloom[i] !== _e()[i] && (c[i] = e.bloom[i]);
        }), s.blm = c;
      }
      if (e.depthOfField.enabled) {
        const c = {};
        Object.keys(e.depthOfField).forEach((i) => {
          e.depthOfField[i] !== ve()[i] && (c[i] = e.depthOfField[i]);
        }), s.dof = c;
      }
      if (e.brightness.enabled) {
        const c = {};
        Object.keys(e.brightness).forEach((i) => {
          e.brightness[i] !== Oe()[i] && (c[i] = e.brightness[i]);
        }), s.brt = c;
      }
      if (e.blur.enabled) {
        const c = {};
        Object.keys(e.blur).forEach((i) => {
          e.blur[i] !== ze()[i] && (c[i] = e.blur[i]);
        }), s.blr = c;
      }
      if (e.nightVision.enabled) {
        const c = {};
        Object.keys(e.nightVision).forEach((i) => {
          e.nightVision[i] !== Fe()[i] && (c[i] = e.nightVision[i]);
        }), s.nv = c;
      }
      if (e.silhouette.enabled) {
        const c = {};
        Object.keys(e.silhouette).forEach((i) => {
          e.silhouette[i] !== Ce()[i] && (c[i] = e.silhouette[i]);
        }), s.sil = c;
      }
      if (e.lighting) {
        const c = {};
        Object.keys(e.lighting).forEach((i) => {
          e.lighting[i] !== ue()[i] && (c[i] = e.lighting[i]);
        }), Object.keys(c).length > 0 && (s.lig = c);
      }
      return Object.keys(s).length > 0 ? s : {};
    },
    getDefaultOptions: At,
    getConfigEditors() {
      return [];
    },
    toJSON() {
      return {};
    },
    i18n: {
      de: Wn,
      en: En
    },
    destroy() {
      var c, i, u, p, a, V, z, _, A, I, d, b, S, y, v, x, k, O, re, ce, se, le, Me, De, Ne, Le, Te, We, Ee, je, Re, Ue, $e, He, Ge, Ke, Je, qe, Ye, Ze, Qe, Xe, et, tt, nt, it, ot, st, lt, at, rt, ct, dt, ut, mt, ft, gt, bt, ht, pt, St, _t, vt, yt;
      const { map: s } = t;
      if (!s.isDestroyed) {
        if ("ambientOcclusion" in t) {
          const f = t.ambientOcclusion;
          let m = (i = (c = s.getScene()) == null ? void 0 : c.postProcessStages) == null ? void 0 : i.ambientOcclusion;
          m ? (m.uniforms.intensity = f.intensity, m.enabled = f.enabled, m.uniforms.ambientOcclusionOnly = f.ambientOcclusionOnly, m.uniforms.frustumLength = f.frustumLength, m.uniforms.blurStepSize = f.blurStepSize, m.uniforms.stepSize = f.stepSize, m.uniforms.lengthCap = f.lengthCap, m.uniforms.bias = f.bias) : (m = (p = (u = s.getScene()) == null ? void 0 : u.postProcessStages) == null ? void 0 : p.ambientOcclusion, m.enabled = !1);
        } else {
          const f = (V = (a = s.getScene()) == null ? void 0 : a.postProcessStages) == null ? void 0 : V.ambientOcclusion;
          f.enabled = !1;
        }
        if ("blackAndWhite" in t) {
          const f = t.blackAndWhite;
          if (s instanceof F && ((z = s.getScene()) != null && z.postProcessStages) && h(f, me)) {
            let m = (A = (_ = s.getScene()) == null ? void 0 : _.postProcessStages) == null ? void 0 : A.getStageByName("czm_black_and_white");
            m || (m = (d = (I = s.getScene()) == null ? void 0 : I.postProcessStages) == null ? void 0 : d.add(
              D.createBlackAndWhiteStage()
            )), m.uniforms.gradations = f.gradations, m.enabled = f.enabled;
          } else {
            const m = (S = (b = s.getScene()) == null ? void 0 : b.postProcessStages) == null ? void 0 : S.getStageByName("czm_black_and_white");
            m && (m.enabled = !1);
          }
        } else {
          const f = (v = (y = s.getScene()) == null ? void 0 : y.postProcessStages) == null ? void 0 : v.getStageByName("czm_black_and_white");
          f && (f.enabled = !1);
        }
        if ("bloom" in t) {
          const f = t.bloom;
          let m = (k = (x = s.getScene()) == null ? void 0 : x.postProcessStages) == null ? void 0 : k.bloom;
          m && h(f, G) ? (m.enabled = f.enabled, m.uniforms.contrast = f.contrast, m.uniforms.brightness = f.brightness, m.uniforms.delta = f.delta, m.uniforms.sigma = f.sigma, m.uniforms.stepSize = f.stepSize, m.uniforms.glowOnly = f.glowOnly) : (m = (re = (O = s.getScene()) == null ? void 0 : O.postProcessStages) == null ? void 0 : re.bloom, m && (m.enabled = !1));
        } else {
          const f = (se = (ce = s.getScene()) == null ? void 0 : ce.postProcessStages) == null ? void 0 : se.bloom;
          f && (f.enabled = !1);
        }
        if ("hdr" in t) {
          const f = t.hdr;
          let m = s.getScene();
          m && h(f, ge) ? (m.gamma = f.gamma, m.highDynamicRange = f.enabled) : (m = s.getScene(), m && (m.highDynamicRange = !1));
        } else {
          const f = s.getScene();
          f && (f.highDynamicRange = !1);
        }
        if ("depthOfField" in t) {
          const f = t.depthOfField;
          if (s instanceof F && ((le = s.getScene()) != null && le.postProcessStages) && h(f, Q)) {
            let m = (De = (Me = s.getScene()) == null ? void 0 : Me.postProcessStages) == null ? void 0 : De.getStageByName("czm_depth_of_field");
            m || (m = (Le = (Ne = s.getScene()) == null ? void 0 : Ne.postProcessStages) == null ? void 0 : Le.add(
              D.createDepthOfFieldStage()
            )), m.uniforms.focalDistance = f.focalDistance, m.enabled = f.enabled, m.uniforms.delta = f.delta, m.uniforms.sigma = f.sigma, m.uniforms.stepSize = f.stepSize;
          } else {
            const m = (We = (Te = s.getScene()) == null ? void 0 : Te.postProcessStages) == null ? void 0 : We.getStageByName("czm_depth_of_field");
            m && (m.enabled = !1);
          }
        } else {
          const f = (je = (Ee = s.getScene()) == null ? void 0 : Ee.postProcessStages) == null ? void 0 : je.getStageByName("czm_depth_of_field");
          f && (f.enabled = !1);
        }
        if ("brightness" in t) {
          const f = t.brightness;
          if (s instanceof F && ((Re = s.getScene()) != null && Re.postProcessStages) && h(f, fe)) {
            let m = ($e = (Ue = s.getScene()) == null ? void 0 : Ue.postProcessStages) == null ? void 0 : $e.getStageByName("czm_brightness");
            m || (m = (Ge = (He = s.getScene()) == null ? void 0 : He.postProcessStages) == null ? void 0 : Ge.add(
              D.createBrightnessStage()
            )), m.uniforms.brightness = f.brightness, m.enabled = f.enabled;
          } else {
            const m = (Je = (Ke = s.getScene()) == null ? void 0 : Ke.postProcessStages) == null ? void 0 : Je.getStageByName("czm_brightness");
            m && (m.enabled = !1);
          }
        } else {
          const f = (Ye = (qe = s.getScene()) == null ? void 0 : qe.postProcessStages) == null ? void 0 : Ye.getStageByName("czm_brightness");
          f && (f.enabled = !1);
        }
        if ("blur" in t) {
          const f = t.blur;
          if (s instanceof F && ((Ze = s.getScene()) != null && Ze.postProcessStages) && h(f, oe)) {
            let m = (Xe = (Qe = s.getScene()) == null ? void 0 : Qe.postProcessStages) == null ? void 0 : Xe.getStageByName("czm_blur");
            m || (m = (tt = (et = s.getScene()) == null ? void 0 : et.postProcessStages) == null ? void 0 : tt.add(
              D.createBlurStage()
            )), m.uniforms.delta = f.delta, m.uniforms.sigma = f.sigma, m.uniforms.stepSize = f.stepSize, m.enabled = f.enabled;
          } else {
            const m = (it = (nt = s.getScene()) == null ? void 0 : nt.postProcessStages) == null ? void 0 : it.getStageByName("czm_blur");
            m && (m.enabled = !1);
          }
        } else {
          const f = (st = (ot = s.getScene()) == null ? void 0 : ot.postProcessStages) == null ? void 0 : st.getStageByName("czm_blur");
          f && (f.enabled = !1);
        }
        if ("silhouette" in t) {
          const f = t.silhouette;
          let m = D.createSilhouetteStage(), P = s.getScene(), de = (lt = P == null ? void 0 : P.postProcessStages) == null ? void 0 : lt.getStageByName(
            m.name
          );
          de && ((at = P == null ? void 0 : P.postProcessStages) == null || at.remove(de));
          const Be = (rt = P == null ? void 0 : P.postProcessStages) == null ? void 0 : rt.add(m);
          Be && h(f, be) ? (Be.enabled = f.enabled, Be.uniforms.color = te.fromCssColorString(
            f.color
          )) : (m = D.createSilhouetteStage(), P = s.getScene(), de = (ct = P == null ? void 0 : P.postProcessStages) == null ? void 0 : ct.getStageByName(
            m.name
          ), de && ((dt = P == null ? void 0 : P.postProcessStages) == null || dt.remove(de)));
        } else {
          const f = D.createSilhouetteStage(), m = s.getScene(), P = (ut = m == null ? void 0 : m.postProcessStages) == null ? void 0 : ut.getStageByName(
            f.name
          );
          P && ((mt = m == null ? void 0 : m.postProcessStages) == null || mt.remove(P));
        }
        if ("lighting" in t) {
          const f = t.lighting;
          s.getScene().light = f.light, s.getScene().globe.dynamicAtmosphereLighting = f.dynamicAtmosphereLighting, s.getScene().globe.dynamicAtmosphereLightingFromSun = f.dynamicAtmosphereLightingFromSun, s.getScene().light.intensity = f.intensity, s.getScene().light.color = f.color;
        }
      }
      if ("nightVision" in t) {
        const f = t.nightVision;
        if (s instanceof F && ((ft = s.getScene()) != null && ft.postProcessStages) && h(f, pe)) {
          let m = (bt = (gt = s.getScene()) == null ? void 0 : gt.postProcessStages) == null ? void 0 : bt.getStageByName("czm_night_vision");
          m || (m = (pt = (ht = s.getScene()) == null ? void 0 : ht.postProcessStages) == null ? void 0 : pt.add(
            D.createNightVisionStage()
          )), m.enabled = f.enabled;
        } else {
          const m = (_t = (St = s.getScene()) == null ? void 0 : St.postProcessStages) == null ? void 0 : _t.getStageByName("czm_night_vision");
          m && (m.enabled = !1);
        }
      } else {
        const f = (yt = (vt = s.getScene()) == null ? void 0 : vt.postProcessStages) == null ? void 0 : yt.getStageByName("czm_night_vision");
        f && (f.enabled = !1);
      }
      this._app && (this._app.navbarManager.has(ae) && this._app.navbarManager.remove(ae), this._app.windowManager.has(ie) && this._app.windowManager.remove(ie)), this._destroyAction && this._destroyAction(), o.forEach((f) => f()), o.splice(0), this._mapChangedListener && this._mapChangedListener();
    }
  };
}
export {
  ii as default
};
