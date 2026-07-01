
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
} await loadCss('data:text/css;base64,LmV5ZS1kb21lLWxpZ2h0aW5nPmRpdltkYXRhLXYtYjMxNzc0NmZdOmxhc3QtY2hpbGR7cGFkZGluZy1ib3R0b206OXB4IWltcG9ydGFudH0K');import { useProxiedAtomicModel as q, VcsLabel as W, VcsSlider as J, VcsCheckbox as z, VcsFormSection as T, LayerContentTreeItem as Y, createToggleAction as Z, WindowSlot as _ } from "../../../assets/ui.js";
import { CesiumMap as H, LayerState as C, PointCloudLayer as Q } from "../../../assets/core.js";
import { defineComponent as R, createElementBlock as x, openBlock as y, createVNode as e, unref as t, withCtx as o, createElementVNode as P, createTextVNode as j, toDisplayString as V, isRef as X, useModel as v, computed as ee, createCommentVNode as A, inject as te, ref as $, watch as M, reactive as B, onUnmounted as ne, createBlock as N } from "../../../assets/vue.js";
import { VRow as h, VCol as f, VSheet as ie, VContainer as F } from "../../../assets/vuetify.js";
const oe = { class: "d-flex align-center" }, D = /* @__PURE__ */ R({
  __name: "LabeledSlider",
  props: {
    modelValue: { type: Number, default: NaN },
    /** The name of the value to be modeled. Will be translated. */
    name: { type: String, required: !0 },
    tooltip: { type: String, default: void 0 },
    /** Whether to render the inputfield and the slider as disabled. */
    disabled: { type: Boolean, default: !1 },
    /** The details of the value. The `min` and `max` values will be used to ensure that the emited value is valid. */
    details: {
      type: Object,
      required: !0
    }
  },
  emits: ["update:modelValue"],
  setup(i, { emit: c }) {
    const n = q(i, "modelValue", c);
    return (S, a) => (y(), x("div", null, [
      e(t(h), {
        "no-gutters": "",
        class: "justify-space-between px-1"
      }, {
        default: o(() => [
          e(t(W), {
            "html-for": i.name,
            "help-text": i.tooltip,
            class: "pt-1 gc-2"
          }, {
            default: o(() => [
              j(
                V(S.$t(`pointcloudSettings.${i.name}`)),
                1
                /* TEXT */
              )
            ]),
            _: 1
            /* STABLE */
          }, 8, ["html-for", "help-text"]),
          P(
            "div",
            oe,
            V(isFinite(t(n)) && !i.disabled ? t(n) : ""),
            1
            /* TEXT */
          )
        ]),
        _: 1
        /* STABLE */
      }),
      e(t(h), { "no-gutters": "" }, {
        default: o(() => [
          e(t(J), {
            class: "py-0",
            id: i.name,
            type: "number",
            density: "compact",
            min: i.details.min,
            max: i.details.max,
            step: i.details.step ?? 1,
            disabled: i.disabled,
            modelValue: t(n),
            "onUpdate:modelValue": a[0] || (a[0] = (r) => X(n) ? n.value = r : null),
            modelModifiers: { number: !0 }
          }, null, 8, ["id", "min", "max", "step", "disabled", "modelValue"])
        ]),
        _: 1
        /* STABLE */
      })
    ]));
  }
}), ae = {
  key: 0,
  class: "ml-4"
}, le = /* @__PURE__ */ R({
  __name: "AttenuationSettings",
  props: {
    attenuation: {
      type: Boolean,
      default: !1
    },
    attenuationModifiers: {},
    geometricErrorScale: {
      type: Number,
      default: 0
    },
    geometricErrorScaleModifiers: {},
    maximumAttenuation: {
      type: Number,
      default: void 0
    },
    maximumAttenuationModifiers: {},
    baseResolution: {
      type: Number,
      default: void 0
    },
    baseResolutionModifiers: {}
  },
  emits: ["update:attenuation", "update:geometricErrorScale", "update:maximumAttenuation", "update:baseResolution"],
  setup(i) {
    const c = {
      geometricErrorScale: { min: 0, max: 2, step: 0.1 },
      maximumAttenuation: { min: 0, max: 32, step: 1 },
      baseResolution: { min: 0, max: 10, step: 0.1 }
    }, m = v(i, "attenuation"), p = v(i, "geometricErrorScale"), n = v(
      i,
      "maximumAttenuation"
    ), S = v(i, "baseResolution"), a = ee({
      get: () => n.value !== void 0,
      set: (r) => {
        r ? n.value = 16 : n.value = void 0;
      }
    });
    return (r, s) => (y(), x("div", null, [
      e(t(h), { "no-gutters": "" }, {
        default: o(() => [
          e(t(f), null, {
            default: o(() => [
              e(t(z), {
                label: "pointcloudSettings.enableAttenuation",
                modelValue: m.value,
                "onUpdate:modelValue": s[0] || (s[0] = (g) => m.value = g)
              }, null, 8, ["modelValue"])
            ]),
            _: 1
            /* STABLE */
          })
        ]),
        _: 1
        /* STABLE */
      }),
      m.value ? (y(), x("div", ae, [
        e(t(h), { "no-gutters": "" }, {
          default: o(() => [
            e(t(f), null, {
              default: o(() => [
                e(D, {
                  name: "geometricErrorScale",
                  tooltip: "pointcloudSettings.hints.geometricErrorScale",
                  details: c.geometricErrorScale,
                  modelValue: p.value,
                  "onUpdate:modelValue": s[1] || (s[1] = (g) => p.value = g)
                }, null, 8, ["details", "modelValue"])
              ]),
              _: 1
              /* STABLE */
            })
          ]),
          _: 1
          /* STABLE */
        }),
        e(t(h), { "no-gutters": "" }, {
          default: o(() => [
            e(t(f), null, {
              default: o(() => [
                e(D, {
                  name: "baseResolution",
                  tooltip: "pointcloudSettings.hints.baseResolution",
                  details: c.baseResolution,
                  modelValue: S.value,
                  "onUpdate:modelValue": s[2] || (s[2] = (g) => S.value = g)
                }, null, 8, ["details", "modelValue"])
              ]),
              _: 1
              /* STABLE */
            })
          ]),
          _: 1
          /* STABLE */
        }),
        e(t(h), { "no-gutters": "" }, {
          default: o(() => [
            e(t(f), null, {
              default: o(() => [
                e(t(z), {
                  modelValue: a.value,
                  "onUpdate:modelValue": s[3] || (s[3] = (g) => a.value = g),
                  label: "pointcloudSettings.useMaxAttenuation"
                }, null, 8, ["modelValue"])
              ]),
              _: 1
              /* STABLE */
            })
          ]),
          _: 1
          /* STABLE */
        }),
        e(t(h), { "no-gutters": "" }, {
          default: o(() => [
            e(t(f), null, {
              default: o(() => [
                e(D, {
                  disabled: !a.value,
                  name: "maximumAttenuation",
                  tooltip: "pointcloudSettings.hints.maximumAttenuation",
                  details: c.maximumAttenuation,
                  modelValue: n.value,
                  "onUpdate:modelValue": s[4] || (s[4] = (g) => n.value = g)
                }, null, 8, ["disabled", "details", "modelValue"])
              ]),
              _: 1
              /* STABLE */
            })
          ]),
          _: 1
          /* STABLE */
        })
      ])) : A("v-if", !0)
    ]));
  }
}), re = {
  key: 0,
  class: "ml-4"
}, se = /* @__PURE__ */ R({
  __name: "EyeDomeShading",
  props: {
    eyeDomeLighting: {
      type: Boolean,
      default: !0
    },
    eyeDomeLightingModifiers: {},
    eyeDomeLightingStrength: {
      type: Number,
      default: 1
    },
    eyeDomeLightingStrengthModifiers: {},
    eyeDomeLightingRadius: {
      type: Number,
      default: 1
    },
    eyeDomeLightingRadiusModifiers: {}
  },
  emits: ["update:eyeDomeLighting", "update:eyeDomeLightingStrength", "update:eyeDomeLightingRadius"],
  setup(i) {
    const c = {
      eyeDomeLightingStrength: { min: 0, max: 10, step: 0.01 },
      eyeDomeLightingRadius: { min: 0, max: 10, step: 0.1 }
    }, m = v(i, "eyeDomeLighting"), p = v(i, "eyeDomeLightingStrength"), n = v(i, "eyeDomeLightingRadius");
    return (S, a) => (y(), x("div", null, [
      e(t(h), { "no-gutters": "" }, {
        default: o(() => [
          e(t(f), null, {
            default: o(() => [
              e(t(z), {
                label: "pointcloudSettings.enableEyeDomeLighting",
                modelValue: m.value,
                "onUpdate:modelValue": a[0] || (a[0] = (r) => m.value = r)
              }, null, 8, ["modelValue"])
            ]),
            _: 1
            /* STABLE */
          })
        ]),
        _: 1
        /* STABLE */
      }),
      m.value ? (y(), x("div", re, [
        e(t(h), { "no-gutters": "" }, {
          default: o(() => [
            e(t(f), null, {
              default: o(() => [
                e(D, {
                  name: "eyeDomeLightingStrength",
                  tooltip: "pointcloudSettings.hints.eyeDomeLightingStrength",
                  details: c.eyeDomeLightingStrength,
                  modelValue: p.value,
                  "onUpdate:modelValue": a[1] || (a[1] = (r) => p.value = r)
                }, null, 8, ["details", "modelValue"])
              ]),
              _: 1
              /* STABLE */
            })
          ]),
          _: 1
          /* STABLE */
        }),
        e(t(h), { "no-gutters": "" }, {
          default: o(() => [
            e(t(f), null, {
              default: o(() => [
                e(D, {
                  name: "eyeDomeLightingRadius",
                  tooltip: "pointcloudSettings.hints.eyeDomeLightingRadius",
                  details: c.eyeDomeLightingRadius,
                  modelValue: n.value,
                  "onUpdate:modelValue": a[2] || (a[2] = (r) => n.value = r)
                }, null, 8, ["details", "modelValue"])
              ]),
              _: 1
              /* STABLE */
            })
          ]),
          _: 1
          /* STABLE */
        })
      ])) : A("v-if", !0)
    ]));
  }
}), ue = {
  target: "_blank",
  href: "https://cesium.com/learn/cesiumjs/ref-doc/PointCloudShading.html"
}, de = /* @__PURE__ */ R({
  __name: "PointcloudSettings",
  props: {
    layerName: {
      type: String,
      required: !0
    }
  },
  emits: ["close"],
  setup(i, { emit: c }) {
    var U, I;
    function m(E, u) {
      const d = Number(E);
      return Number.isFinite(d) ? d : u;
    }
    const p = i, n = c, S = {
      pointSize: { min: 1, max: 32 },
      screenSpaceError: { min: 0, max: 64 }
    }, a = te("vcsApp"), r = a.layers.getByKey(p.layerName), s = $(m(r.pointSize, 1));
    M(s, () => {
      r.pointSize = s.value;
    });
    const g = $(r.screenSpaceError);
    M(g, () => {
      r.setMaximumScreenSpaceError(g.value);
    });
    const b = (I = (U = r.getImplementationsForMap(a.maps.activeMap)) == null ? void 0 : U[0]) == null ? void 0 : I.cesium3DTileset.pointCloudShading, l = B({ ...b }), w = { ...b }, k = B({
      name: "reset",
      icon: "$vcsReturn",
      title: "pointcloudSettings.reset",
      callback: () => {
        Object.assign(l, w);
      }
    });
    let L = s.value;
    M(l, () => {
      Object.assign(b, l), b.attenuation ? (L = s.value, r.pointSize = void 0) : r.pointSize !== L && (r.pointSize = L, s.value = L);
    });
    const K = a.maps.mapActivated.addEventListener((E) => {
      E instanceof H || n("close");
    }), G = r.stateChanged.addEventListener(() => {
      r.state === C.INACTIVE && n("close");
    });
    return ne(() => {
      K(), G();
    }), (E, u) => (y(), N(t(ie), { class: "pa-0" }, {
      default: o(() => [
        e(t(T), { heading: "pointcloudSettings.generalSettings" }, {
          default: o(() => [
            e(t(F), { class: "pa-2" }, {
              default: o(() => [
                e(t(h), { "no-gutters": "" }, {
                  default: o(() => [
                    e(t(f), null, {
                      default: o(() => [
                        e(D, {
                          name: "pointSize",
                          details: S.pointSize,
                          tooltip: l != null && l.attenuation ? "pointcloudSettings.hints.pointSizeDisabled" : "",
                          disabled: l == null ? void 0 : l.attenuation,
                          modelValue: s.value,
                          "onUpdate:modelValue": u[0] || (u[0] = (d) => s.value = d)
                        }, null, 8, ["details", "tooltip", "disabled", "modelValue"])
                      ]),
                      _: 1
                      /* STABLE */
                    })
                  ]),
                  _: 1
                  /* STABLE */
                }),
                e(t(h), { "no-gutters": "" }, {
                  default: o(() => [
                    e(t(f), null, {
                      default: o(() => [
                        e(D, {
                          name: "screenSpaceError",
                          tooltip: "pointcloudSettings.hints.screenSpaceError",
                          details: S.screenSpaceError,
                          modelValue: g.value,
                          "onUpdate:modelValue": u[1] || (u[1] = (d) => g.value = d)
                        }, null, 8, ["details", "modelValue"])
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
        }),
        l ? (y(), N(t(T), {
          key: 0,
          heading: "pointcloudSettings.advancedSettings",
          "help-text": "pointcloudSettings.hints.advancedSettings",
          "header-actions": [k],
          expandable: ""
        }, {
          help: o(() => [
            P("div", null, [
              j(
                V(E.$t("pointcloudSettings.hints.advancedSettings1")) + " ",
                1
                /* TEXT */
              ),
              P(
                "a",
                ue,
                V(E.$t("pointcloudSettings.hints.advancedSettings2")),
                1
                /* TEXT */
              )
            ])
          ]),
          default: o(() => [
            e(t(F), { class: "pa-2" }, {
              default: o(() => [
                e(le, {
                  attenuation: l.attenuation,
                  "onUpdate:attenuation": u[2] || (u[2] = (d) => l.attenuation = d),
                  "geometric-error-scale": l.geometricErrorScale,
                  "onUpdate:geometricErrorScale": u[3] || (u[3] = (d) => l.geometricErrorScale = d),
                  "maximum-attenuation": l.maximumAttenuation,
                  "onUpdate:maximumAttenuation": u[4] || (u[4] = (d) => l.maximumAttenuation = d),
                  "base-resolution": l.baseResolution,
                  "onUpdate:baseResolution": u[5] || (u[5] = (d) => l.baseResolution = d)
                }, null, 8, ["attenuation", "geometric-error-scale", "maximum-attenuation", "base-resolution"]),
                l.attenuation ? (y(), N(se, {
                  key: 0,
                  "eye-dome-lighting": l.eyeDomeLighting,
                  "onUpdate:eyeDomeLighting": u[6] || (u[6] = (d) => l.eyeDomeLighting = d),
                  "eye-dome-lighting-strength": l.eyeDomeLightingStrength,
                  "onUpdate:eyeDomeLightingStrength": u[7] || (u[7] = (d) => l.eyeDomeLightingStrength = d),
                  "eye-dome-lighting-radius": l.eyeDomeLightingRadius,
                  "onUpdate:eyeDomeLightingRadius": u[8] || (u[8] = (d) => l.eyeDomeLightingRadius = d)
                }, null, 8, ["eye-dome-lighting", "eye-dome-lighting-strength", "eye-dome-lighting-radius"])) : A("v-if", !0)
              ]),
              _: 1
              /* STABLE */
            })
          ]),
          _: 1
          /* STABLE */
        }, 8, ["header-actions"])) : A("v-if", !0)
      ]),
      _: 1
      /* STABLE */
    }));
  }
}), me = (i, c) => {
  const m = i.__vccOpts || i;
  for (const [p, n] of c)
    m[p] = n;
  return m;
}, ge = /* @__PURE__ */ me(de, [["__scopeId", "data-v-b317746f"]]), O = "@vcmap/pointcloud-settings", ce = "1.0.0", pe = "^6.0";
function he(i) {
  return i.properties.title ?? i.name;
}
function ve() {
  let i;
  const c = [], m = {}, p = "pointcloudSettings.title";
  return {
    get name() {
      return O;
    },
    get version() {
      return ce;
    },
    get mapVersion() {
      return pe;
    },
    initialize(n) {
      i = n;
      function S(a) {
        var r;
        if (!(a.actions.findIndex((s) => s.name === p) >= 0) && a instanceof Y) {
          const { layerName: s } = a.toJSON(), g = n.layers.getByKey(s);
          if (g instanceof Q) {
            const { action: b, destroy: l } = Z(
              {
                name: p,
                disabled: g.state === C.INACTIVE
              },
              {
                id: `pointcloudSettings-${s}`,
                component: ge,
                slot: _.DYNAMIC_LEFT,
                state: {
                  headerIcon: "mdi-dots-hexagon",
                  headerTitle: [
                    "pointcloudSettings.header",
                    he(g)
                  ]
                },
                props: { layerName: s }
              },
              n.windowManager,
              O
            ), w = g.stateChanged.addEventListener(
              (k) => {
                b.disabled = k === C.INACTIVE;
              }
            );
            (r = m[a.name]) == null || r.call(m), m[a.name] = () => {
              l(), w();
            }, a.addAction(b);
          }
        }
      }
      for (const a of n.contentTree)
        S(a);
      return c.push(
        n.contentTree.added.addEventListener((a) => {
          S(a);
        })
      ), Promise.resolve();
    },
    getDefaultOptions() {
      return {};
    },
    toJSON() {
      return {};
    },
    i18n: {
      en: {
        pointcloudSettings: {
          title: "Pointcloud settings",
          header: "Pointcloud settings:",
          generalSettings: "General settings",
          pointSize: "Point size",
          screenSpaceError: "Max. Screenspace Error",
          advancedSettings: "Advanced settings",
          reset: "Reset",
          enableAttenuation: "Enable attenuation",
          geometricErrorScale: "Geometric Error Scale",
          useMaxAttenuation: "Use maximum attenuation",
          maximumAttenuation: "Maximum attenuation",
          baseResolution: "Base resolution",
          enableEyeDomeLighting: "Enable Eye Dome Lighting",
          eyeDomeLightingStrength: "Strength",
          eyeDomeLightingRadius: "Radius",
          hints: {
            advancedSettings1: "Advanced options for performing point attenuation based on geometric error when rendering point clouds. See the",
            advancedSettings2: "Cesium documentation",
            pointSizeDisabled: "Point size is incompatible with Attenuation, and is therefore disabled",
            screenSpaceError: "Drives level of detail refinement, helping determine when  a tile refines to its descendants",
            geometricErrorScale: "Scale to be applied to the geometric error before computing attenuation",
            maximumAttenuation: "Maximum point attenuation in pixels. If undefined, the maximumScreenSpaceError will be used.",
            baseResolution: "Average base resolution in meters, used in place of geometric error when geometric error is 0",
            eyeDomeLightingStrength: "Apparent contrast of the Eye dome lighting",
            eyeDomeLightingRadius: "Thickness of contours of the Eye dome lighting"
          }
        }
      },
      de: {
        pointcloudSettings: {
          title: "Punktwolken-Einstellungen",
          header: "Punktwolken-Einstellungen:",
          generalSettings: "Allgemeine Einstellungen",
          pointSize: "Punktgröße",
          screenSpaceError: "Max. Screenspace Error",
          advancedSettings: "Erweiterte Einstellungen",
          reset: "Zurücksetzen",
          enableAttenuation: "Abschwächung ermöglichen",
          geometricErrorScale: "Geometrische Fehlerskala",
          useMaxAttenuation: "Maximale Abschwächung verwenden",
          maximumAttenuation: "Maximale Abschwächung",
          baseResolution: "Basisauflösung",
          enableEyeDomeLighting: "Eye-Dome-Lighting ermöglichen",
          eyeDomeLightingStrength: "Stärke",
          eyeDomeLightingRadius: "Radius",
          hints: {
            advancedSettings1: "Erweiterte Optionen für die Durchführung der Punktabschwächung auf der Grundlage geometrischer Fehler beim Rendern von Punktwolken. Siehe die",
            advancedSettings2: "Cesium Dokumentation",
            pointSizeDisabled: "Punktgröße ist mit Abschwächung nicht kompatibel und wird daher deaktiviert",
            screenSpaceError: "Steuert die Verfeinerungsebene und bestimmt, wann eine Kachel zu ihren Nachkommen verfeinert wird",
            geometricErrorScale: "Skala, die auf den geometrischen Fehler anzuwenden ist, bevor die Abschwächung berechnet wird",
            maximumAttenuation: "Maximale Punktabschwächung in Pixeln. Ist dieser Wert nicht definiert, wird der Wert maximumScreenSpaceError verwendet",
            baseResolution: "Durchschnittliche Basisauflösung in Metern, wird anstelle des geometrischen Fehlers verwendet, wenn der geometrische Fehler 0 ist",
            eyeDomeLightingStrength: "Scheinbarer Kontrast der Eye-Dome-Lighting",
            eyeDomeLightingRadius: "Dicke der Konturen der Eye-Dome-Lighting"
          }
        }
      }
    },
    getConfigEditors() {
      return [];
    },
    destroy() {
      c.forEach((n) => n()), Object.values(m).forEach((n) => n()), [...i.contentTree].forEach((n) => {
        n.removeAction(p);
      });
    }
  };
}
export {
  ve as default
};
