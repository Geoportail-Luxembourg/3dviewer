
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
} await loadCss('data:text/css;base64,LnNsaWRlci1jb250YWluZXJbZGF0YS12LTY2NWQyODExXXtwYWRkaW5nLWlubGluZToycHg7b3ZlcmZsb3c6aGlkZGVufS5zbGlkZXItY29udGFpbmVyW2RhdGEtdi02NjVkMjgxMV0gLnZjcy1zbGlkZXJ7b3ZlcmZsb3c6dmlzaWJsZSFpbXBvcnRhbnR9Cg==');import { useProxiedAtomicModel as X, VcsLabel as ee, VcsSlider as te, VcsFormSection as z, VcsCheckbox as U, AbstractConfigEditor as ne, LayerContentTreeItem as ae, WMSGroupContentTreeItem as ie, createToggleAction as oe, WindowSlot as le } from "../../../assets/ui.js";
import { LayerState as F, RasterLayer as re, PointCloudLayer as se } from "../../../assets/core.js";
import { defineComponent as D, openBlock as h, createElementBlock as R, createVNode as t, unref as o, withCtx as s, createTextVNode as W, toDisplayString as $, createElementVNode as T, isRef as ue, inject as B, ref as w, watch as M, onUnmounted as G, createBlock as E, toRaw as H, resolveComponent as N, mergeProps as de, Fragment as me, renderList as ce, useModel as L, computed as ge, createCommentVNode as P, reactive as pe } from "../../../assets/vue.js";
import { VRow as S, VSheet as J, VContainer as O, VCol as x } from "../../../assets/vuetify.js";
function Y(e, n) {
  if (e != null) {
    const l = Number.parseFloat(String(e));
    if (l != null && !Number.isNaN(l))
      return l;
  }
  return n;
}
const fe = { class: "d-flex align-center" }, ye = /* @__PURE__ */ D({
  __name: "LabeledSlider",
  props: {
    modelValue: { type: Number, default: NaN },
    /** The name of the value to be modeled. Will be translated. */
    name: { type: String, required: !0 },
    tooltip: { type: String, default: void 0 },
    /** Whether to render the inputfield and the slider as disabled. */
    disabled: { type: Boolean, default: !1 },
    /** Whether to display the value as percentage. Displays values as a rounded percentage. */
    usePercentage: { type: Boolean, default: !1 },
    /** The minimum value of the slider. */
    min: { type: Number, default: 0 },
    /** The maximum value of the slider. */
    max: { type: Number, default: 1 },
    /** The step value of the slider. */
    step: { type: Number, default: 0.01 }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: n }) {
    const l = n, u = e, m = X(u, "modelValue", l);
    function r(d) {
      return isFinite(d) && !u.disabled ? u.usePercentage ? `${Math.round((d - u.min) / (u.max - u.min) * 100)}%` : d : "";
    }
    return (d, c) => (h(), R("div", null, [
      t(o(S), {
        "no-gutters": "",
        class: "justify-space-between px-1"
      }, {
        default: s(() => [
          t(o(ee), {
            "html-for": e.name,
            "help-text": e.tooltip,
            class: "pt-1 gc-2"
          }, {
            default: s(() => [
              W(
                $(d.$t(`layerSettings.${e.name}`)),
                1
                /* TEXT */
              )
            ]),
            _: 1
            /* STABLE */
          }, 8, ["html-for", "help-text"]),
          T(
            "div",
            fe,
            $(r(o(m))),
            1
            /* TEXT */
          )
        ]),
        _: 1
        /* STABLE */
      }),
      t(o(S), {
        "no-gutters": "",
        class: "slider-container"
      }, {
        default: s(() => [
          t(o(te), {
            id: e.name,
            modelValue: o(m),
            "onUpdate:modelValue": c[0] || (c[0] = (a) => ue(m) ? m.value = a : null),
            modelModifiers: { number: !0 },
            type: "number",
            min: e.min,
            max: e.max,
            step: e.step,
            disabled: e.disabled
          }, null, 8, ["id", "modelValue", "min", "max", "step", "disabled"])
        ]),
        _: 1
        /* STABLE */
      })
    ]));
  }
}), Z = (e, n) => {
  const l = e.__vccOpts || e;
  for (const [u, m] of n)
    l[u] = m;
  return l;
}, V = /* @__PURE__ */ Z(ye, [["__scopeId", "data-v-665d2811"]]), he = /* @__PURE__ */ D({
  __name: "RasterSettings",
  props: {
    layerName: { type: String, required: !0 }
  },
  emits: ["close"],
  setup(e, { emit: n }) {
    const l = e, u = n, m = B("vcsApp"), r = m.layers.getByKey(l.layerName), d = w(Y(r.opacity, 1));
    M(d, () => {
      r.opacity = d.value;
    });
    const c = m.maps.mapActivated.addEventListener((i) => {
      r.isSupported(i) || u("close");
    }), a = r.stateChanged.addEventListener((i) => {
      i === F.INACTIVE && u("close");
    });
    return G(() => {
      c(), a();
    }), (i, p) => (h(), E(o(J), { class: "layer-raster-settings px-1" }, {
      default: s(() => [
        t(V, {
          modelValue: d.value,
          "onUpdate:modelValue": p[0] || (p[0] = (g) => d.value = g),
          name: "raster.opacity",
          "use-percentage": ""
        }, null, 8, ["modelValue"])
      ]),
      _: 1
      /* STABLE */
    }));
  }
}), Q = "@vcmap/layer-settings", Se = "1.0.2", ve = "^6.2", be = {
  settings: "Einstellungen",
  generalSettings: "Allgemeine Einstellungen",
  advancedSettings: "Erweiterte Einstellungen",
  reset: "Zurücksetzen",
  raster: {
    opacity: "Opazität"
  },
  pointcloud: {
    pointSize: "Punktgröße",
    screenSpaceError: "Max. Screenspace Error",
    enableAttenuation: "Abschwächung ermöglichen",
    geometricErrorScale: "Geometrische Fehlerskala",
    useMaxAttenuation: "Maximale Abschwächung verwenden",
    maximumAttenuation: "Maximale Abschwächung",
    baseResolution: "Basisauflösung",
    enableEyeDomeLighting: "Eye-Dome-Lighting ermöglichen",
    eyeDomeLightingStrength: "Stärke",
    eyeDomeLightingRadius: "Radius",
    noVisualization: "Keine Visualisierungsoptionen verfügbar.",
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
  },
  config: {
    enableFor: "Ebeneneinstellungen aktivieren für:",
    enableForHelp: "Wählen Sie die Ebenentypen aus, für die die Ebeneneinstellungen verfügbar sein sollen.",
    rasterLayers: "Rasterebenen",
    pointcloudLayers: "Punktwolkenebenen"
  }
}, xe = {
  layerSettings: be
}, Ee = {
  settings: "Settings",
  generalSettings: "General settings",
  advancedSettings: "Advanced settings",
  reset: "Reset",
  raster: {
    opacity: "Opacity"
  },
  pointcloud: {
    pointSize: "Point size",
    screenSpaceError: "Max. Screenspace Error",
    enableAttenuation: "Enable attenuation",
    geometricErrorScale: "Geometric Error Scale",
    useMaxAttenuation: "Use maximum attenuation",
    maximumAttenuation: "Maximum attenuation",
    baseResolution: "Base resolution",
    enableEyeDomeLighting: "Enable Eye Dome Lighting",
    eyeDomeLightingStrength: "Strength",
    eyeDomeLightingRadius: "Radius",
    noVisualization: "No visualization options available.",
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
  },
  config: {
    enableFor: "Enable layer settings for:",
    enableForHelp: "Select the layer types for which the layer settings should be available.",
    rasterLayers: "Raster layers",
    pointcloudLayers: "Pointcloud layers"
  }
}, Ve = {
  layerSettings: Ee
};
function _() {
  return {
    raster: !0,
    pointcloud: !0
  };
}
const Le = D({
  name: "ConfigEditor",
  components: {
    VContainer: O,
    VRow: S,
    AbstractConfigEditor: ne,
    VcsCheckbox: U,
    VcsFormSection: z
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
  setup(e) {
    const n = w({
      ...e.getConfig(),
      ..._()
    }), l = Object.keys(
      _()
    );
    return {
      localConfig: n,
      supportedTypes: l,
      apply() {
        e.setConfig(structuredClone(H(n.value)));
      }
    };
  }
});
function De(e, n, l, u, m, r) {
  const d = N("VcsCheckbox"), c = N("v-row"), a = N("v-container"), i = N("VcsFormSection"), p = N("AbstractConfigEditor");
  return h(), E(p, de({ ...e.$attrs, ...e.$props }, { onSubmit: e.apply }), {
    default: s(() => [
      t(i, {
        heading: "layerSettings.config.enableFor",
        "help-text": "layerSettings.config.enableForHelp"
      }, {
        default: s(() => [
          (h(!0), R(
            me,
            null,
            ce(e.supportedTypes, (g, v) => (h(), E(
              a,
              {
                key: v,
                class: "pa-1"
              },
              {
                default: s(() => [
                  t(
                    c,
                    { "no-gutters": "" },
                    {
                      default: s(() => [
                        t(d, {
                          modelValue: e.localConfig[g],
                          "onUpdate:modelValue": (b) => e.localConfig[g] = b,
                          label: `layerSettings.config.${g}Layers`
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "label"])
                      ]),
                      _: 2
                      /* DYNAMIC */
                    },
                    1024
                    /* DYNAMIC_SLOTS */
                  )
                ]),
                _: 2
                /* DYNAMIC */
              },
              1024
              /* DYNAMIC_SLOTS */
            ))),
            128
            /* KEYED_FRAGMENT */
          ))
        ]),
        _: 1
        /* STABLE */
      })
    ]),
    _: 1
    /* STABLE */
  }, 16, ["onSubmit"]);
}
const Ae = /* @__PURE__ */ Z(Le, [["render", De]]), Ce = {
  key: 0,
  class: "ml-4"
}, we = /* @__PURE__ */ D({
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
  setup(e) {
    const n = { min: 0, max: 2, step: 0.1 }, l = { min: 0, max: 32, step: 1 }, u = { min: 0, max: 10, step: 0.1 }, m = L(e, "attenuation"), r = L(e, "geometricErrorScale"), d = L(
      e,
      "maximumAttenuation"
    ), c = L(e, "baseResolution"), a = ge({
      get: () => d.value !== void 0,
      set: (i) => {
        i ? d.value = 16 : d.value = void 0;
      }
    });
    return (i, p) => (h(), R("div", null, [
      t(o(S), { "no-gutters": "" }, {
        default: s(() => [
          t(o(x), null, {
            default: s(() => [
              t(o(U), {
                modelValue: m.value,
                "onUpdate:modelValue": p[0] || (p[0] = (g) => m.value = g),
                label: "layerSettings.pointcloud.enableAttenuation"
              }, null, 8, ["modelValue"])
            ]),
            _: 1
            /* STABLE */
          })
        ]),
        _: 1
        /* STABLE */
      }),
      m.value ? (h(), R("div", Ce, [
        t(o(S), { "no-gutters": "" }, {
          default: s(() => [
            t(o(x), null, {
              default: s(() => [
                t(V, {
                  modelValue: r.value,
                  "onUpdate:modelValue": p[1] || (p[1] = (g) => r.value = g),
                  name: "pointcloud.geometricErrorScale",
                  tooltip: "layerSettings.pointcloud.hints.geometricErrorScale",
                  min: n.min,
                  max: n.max,
                  step: n.step
                }, null, 8, ["modelValue", "min", "max", "step"])
              ]),
              _: 1
              /* STABLE */
            })
          ]),
          _: 1
          /* STABLE */
        }),
        t(o(S), { "no-gutters": "" }, {
          default: s(() => [
            t(o(x), null, {
              default: s(() => [
                t(V, {
                  modelValue: c.value,
                  "onUpdate:modelValue": p[2] || (p[2] = (g) => c.value = g),
                  name: "pointcloud.baseResolution",
                  tooltip: "layerSettings.pointcloud.hints.baseResolution",
                  min: u.min,
                  max: u.max,
                  step: u.step
                }, null, 8, ["modelValue", "min", "max", "step"])
              ]),
              _: 1
              /* STABLE */
            })
          ]),
          _: 1
          /* STABLE */
        }),
        t(o(S), { "no-gutters": "" }, {
          default: s(() => [
            t(o(x), null, {
              default: s(() => [
                t(o(U), {
                  modelValue: a.value,
                  "onUpdate:modelValue": p[3] || (p[3] = (g) => a.value = g),
                  label: "layerSettings.pointcloud.useMaxAttenuation"
                }, null, 8, ["modelValue"])
              ]),
              _: 1
              /* STABLE */
            })
          ]),
          _: 1
          /* STABLE */
        }),
        t(o(S), { "no-gutters": "" }, {
          default: s(() => [
            t(o(x), null, {
              default: s(() => [
                t(V, {
                  modelValue: d.value,
                  "onUpdate:modelValue": p[4] || (p[4] = (g) => d.value = g),
                  disabled: !a.value,
                  name: "pointcloud.maximumAttenuation",
                  tooltip: "layerSettings.pointcloud.hints.maximumAttenuation",
                  min: l.min,
                  max: l.max,
                  step: l.step
                }, null, 8, ["modelValue", "disabled", "min", "max", "step"])
              ]),
              _: 1
              /* STABLE */
            })
          ]),
          _: 1
          /* STABLE */
        })
      ])) : P("v-if", !0)
    ]));
  }
}), Re = {
  key: 0,
  class: "ml-4"
}, ke = /* @__PURE__ */ D({
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
  setup(e) {
    const n = { min: 0, max: 10, step: 0.01 }, l = { min: 0, max: 10, step: 0.1 }, u = L(e, "eyeDomeLighting"), m = L(e, "eyeDomeLightingStrength"), r = L(e, "eyeDomeLightingRadius");
    return (d, c) => (h(), R("div", null, [
      t(o(S), { "no-gutters": "" }, {
        default: s(() => [
          t(o(x), null, {
            default: s(() => [
              t(o(U), {
                modelValue: u.value,
                "onUpdate:modelValue": c[0] || (c[0] = (a) => u.value = a),
                label: "layerSettings.pointcloud.enableEyeDomeLighting"
              }, null, 8, ["modelValue"])
            ]),
            _: 1
            /* STABLE */
          })
        ]),
        _: 1
        /* STABLE */
      }),
      u.value ? (h(), R("div", Re, [
        t(o(S), { "no-gutters": "" }, {
          default: s(() => [
            t(o(x), null, {
              default: s(() => [
                t(V, {
                  modelValue: m.value,
                  "onUpdate:modelValue": c[1] || (c[1] = (a) => m.value = a),
                  name: "pointcloud.eyeDomeLightingStrength",
                  tooltip: "layerSettings.pointcloud.hints.eyeDomeLightingStrength",
                  min: n.min,
                  max: n.max,
                  step: n.step
                }, null, 8, ["modelValue", "min", "max", "step"])
              ]),
              _: 1
              /* STABLE */
            })
          ]),
          _: 1
          /* STABLE */
        }),
        t(o(S), { "no-gutters": "" }, {
          default: s(() => [
            t(o(x), null, {
              default: s(() => [
                t(V, {
                  modelValue: r.value,
                  "onUpdate:modelValue": c[2] || (c[2] = (a) => r.value = a),
                  name: "pointcloud.eyeDomeLightingRadius",
                  tooltip: "layerSettings.pointcloud.hints.eyeDomeLightingRadius",
                  min: l.min,
                  max: l.max,
                  step: l.step
                }, null, 8, ["modelValue", "min", "max", "step"])
              ]),
              _: 1
              /* STABLE */
            })
          ]),
          _: 1
          /* STABLE */
        })
      ])) : P("v-if", !0)
    ]));
  }
}), Ne = {
  target: "_blank",
  href: "https://cesium.com/learn/cesiumjs/ref-doc/PointCloudShading.html"
}, Me = /* @__PURE__ */ D({
  __name: "PointcloudAdvancedSettings",
  props: {
    layerName: {}
  },
  emits: ["update:shadingAttenuation"],
  setup(e, { emit: n }) {
    var v;
    const l = e, u = n, m = B("vcsApp"), r = m.maps.activeMap, a = ((v = m.layers.getByKey(l.layerName).getImplementationsForMap(r)) == null ? void 0 : v[0]).cesium3DTileset.pointCloudShading, i = w(structuredClone(a)), p = structuredClone(a), g = pe({
      name: "reset",
      icon: "$vcsReturn",
      title: "layerSettings.reset",
      callback: () => {
        i.value = structuredClone(p);
      }
    });
    return M(
      i,
      () => {
        Object.assign(a, structuredClone(H(i.value))), u("update:shadingAttenuation", i.value.attenuation);
      },
      { deep: !0 }
    ), (b, f) => i.value ? (h(), E(o(z), {
      key: 0,
      heading: "layerSettings.advancedSettings",
      "help-text": "layerSettings.pointcloud.hints.advancedSettings",
      "header-actions": [g],
      expandable: ""
    }, {
      help: s(() => [
        T("div", null, [
          W(
            $(b.$t("layerSettings.pointcloud.hints.advancedSettings1")) + " ",
            1
            /* TEXT */
          ),
          T(
            "a",
            Ne,
            $(b.$t("layerSettings.pointcloud.hints.advancedSettings2")),
            1
            /* TEXT */
          )
        ])
      ]),
      default: s(() => [
        t(o(O), { class: "pa-2" }, {
          default: s(() => [
            t(we, {
              attenuation: i.value.attenuation,
              "onUpdate:attenuation": f[0] || (f[0] = (y) => i.value.attenuation = y),
              "geometric-error-scale": i.value.geometricErrorScale,
              "onUpdate:geometricErrorScale": f[1] || (f[1] = (y) => i.value.geometricErrorScale = y),
              "maximum-attenuation": i.value.maximumAttenuation,
              "onUpdate:maximumAttenuation": f[2] || (f[2] = (y) => i.value.maximumAttenuation = y),
              "base-resolution": i.value.baseResolution,
              "onUpdate:baseResolution": f[3] || (f[3] = (y) => i.value.baseResolution = y)
            }, null, 8, ["attenuation", "geometric-error-scale", "maximum-attenuation", "base-resolution"]),
            i.value.attenuation ? (h(), E(ke, {
              key: 0,
              "eye-dome-lighting": i.value.eyeDomeLighting,
              "onUpdate:eyeDomeLighting": f[4] || (f[4] = (y) => i.value.eyeDomeLighting = y),
              "eye-dome-lighting-strength": i.value.eyeDomeLightingStrength,
              "onUpdate:eyeDomeLightingStrength": f[5] || (f[5] = (y) => i.value.eyeDomeLightingStrength = y),
              "eye-dome-lighting-radius": i.value.eyeDomeLightingRadius,
              "onUpdate:eyeDomeLightingRadius": f[6] || (f[6] = (y) => i.value.eyeDomeLightingRadius = y)
            }, null, 8, ["eye-dome-lighting", "eye-dome-lighting-strength", "eye-dome-lighting-radius"])) : P("v-if", !0)
          ]),
          _: 1
          /* STABLE */
        })
      ]),
      _: 1
      /* STABLE */
    }, 8, ["header-actions"])) : P("v-if", !0);
  }
}), _e = { class: "pa-1" }, $e = /* @__PURE__ */ D({
  __name: "PointcloudSettings",
  props: {
    layerName: {}
  },
  emits: ["close"],
  setup(e, { emit: n }) {
    var K, j;
    const l = e, u = n, m = { min: 1, max: 32, step: 1 }, r = { min: 0, max: 64, step: 1 }, d = B("vcsApp"), c = d.maps.activeMap, a = d.layers.getByKey(l.layerName), i = (K = a.getImplementationsForMap(c)) == null ? void 0 : K[0], p = (j = i == null ? void 0 : i.cesium3DTileset) == null ? void 0 : j.pointCloudShading, g = w(a.screenSpaceError), v = w(Y(a.pointSize, 1)), b = w((p == null ? void 0 : p.attenuation) ?? !1);
    M(g, () => {
      a.setMaximumScreenSpaceError(g.value);
    }), M(v, () => {
      b.value || (a.pointSize = v.value);
    }), M(b, (A) => {
      a.pointSize = A ? void 0 : v.value;
    });
    const f = d.maps.mapActivated.addEventListener((A) => {
      a.isSupported(A) || u("close");
    }), y = a.stateChanged.addEventListener(() => {
      a.state === F.INACTIVE && u("close");
    });
    return G(() => {
      f(), y();
    }), (A, C) => (h(), E(o(J), { class: "pa-0" }, {
      default: s(() => [
        t(o(z), { heading: "layerSettings.generalSettings" }, {
          default: s(() => [
            t(o(O), { class: "pa-2" }, {
              default: s(() => [
                t(o(S), { "no-gutters": "" }, {
                  default: s(() => [
                    t(o(x), null, {
                      default: s(() => [
                        t(V, {
                          modelValue: v.value,
                          "onUpdate:modelValue": C[0] || (C[0] = (k) => v.value = k),
                          name: "pointcloud.pointSize",
                          min: m.min,
                          max: m.max,
                          step: m.step,
                          tooltip: b.value ? "layerSettings.pointcloud.hints.pointSizeDisabled" : "",
                          disabled: b.value
                        }, null, 8, ["modelValue", "min", "max", "step", "tooltip", "disabled"])
                      ]),
                      _: 1
                      /* STABLE */
                    })
                  ]),
                  _: 1
                  /* STABLE */
                }),
                t(o(S), { "no-gutters": "" }, {
                  default: s(() => [
                    t(o(x), null, {
                      default: s(() => [
                        t(V, {
                          modelValue: g.value,
                          "onUpdate:modelValue": C[1] || (C[1] = (k) => g.value = k),
                          name: "pointcloud.screenSpaceError",
                          tooltip: "layerSettings.pointcloud.hints.screenSpaceError",
                          min: r.min,
                          max: r.max,
                          step: r.step
                        }, null, 8, ["modelValue", "min", "max", "step"])
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
        o(p) ? (h(), E(Me, {
          key: 0,
          "layer-name": A.layerName,
          "onUpdate:shadingAttenuation": C[2] || (C[2] = (k) => b.value = k)
        }, null, 8, ["layer-name"])) : (h(), E(o(z), {
          key: 1,
          heading: "layerSettings.advancedSettings",
          expandable: ""
        }, {
          default: s(() => [
            T(
              "div",
              _e,
              $(A.$t("layerSettings.pointcloud.noVisualization")),
              1
              /* TEXT */
            )
          ]),
          _: 1
          /* STABLE */
        }))
      ]),
      _: 1
      /* STABLE */
    }));
  }
}), I = "layerSettings.settings";
function ze(e, n) {
  return {
    id: `layerSettings-${e.name}`,
    component: n,
    slot: le.DYNAMIC_LEFT,
    props: { layerName: e.name },
    state: {
      headerTitle: e.properties.title ?? e.name,
      headerIcon: 'svgString:<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.667 10.667.667 6l6-4.667 6 4.667zm0 1.693.666-.527V12c0 .473.08.927.234 1.333l-.9.714-6-4.667 1.08-.84z" fill="currentColor"/><g clip-path="url(#a)"><path d="M11.987 12.607a1.194 1.194 0 1 1 0-2.389 1.194 1.194 0 0 1 0 2.389m2.535-.864a3 3 0 0 0 .024-.33q-.002-.169-.024-.342l.72-.556a.17.17 0 0 0 .04-.219l-.682-1.18a.17.17 0 0 0-.208-.075l-.85.341a2.5 2.5 0 0 0-.576-.334l-.126-.905A.17.17 0 0 0 12.67 8h-1.366a.17.17 0 0 0-.17.143l-.127.905c-.215.085-.399.2-.576.334l-.85-.341a.17.17 0 0 0-.208.075l-.683 1.18a.17.17 0 0 0 .041.219l.72.556a3 3 0 0 0-.024.341q.002.168.024.331l-.72.567a.17.17 0 0 0-.04.218l.682 1.18a.17.17 0 0 0 .208.076l.85-.345c.177.137.361.253.576.338l.127.904a.17.17 0 0 0 .17.144h1.365a.17.17 0 0 0 .17-.144l.127-.904c.215-.089.4-.201.577-.338l.85.345a.17.17 0 0 0 .207-.075l.683-1.18a.17.17 0 0 0-.041-.22z" fill="currentColor"/></g></svg>'
    }
  };
}
function q(e, n, l, u) {
  var m;
  if (n instanceof ae || n instanceof ie) {
    let r = function(g) {
      return oe(
        {
          name: I,
          disabled: (c == null ? void 0 : c.state) === F.INACTIVE
        },
        ze(c, g),
        e.windowManager,
        Q
      );
    };
    if (n.actions.some((g) => g.name === I))
      return;
    const { layerName: d } = n.toJSON(), c = e.layers.getByKey(d);
    let a, i;
    if (l.raster && c instanceof re)
      ({ action: a, destroy: i } = r(he));
    else if (l.pointcloud && c instanceof se)
      ({ action: a, destroy: i } = r($e));
    else
      return;
    const p = c.stateChanged.addEventListener((g) => {
      a.disabled = g === F.INACTIVE;
    });
    (m = u[n.name]) == null || m.call(u), u[n.name] = () => {
      i(), p();
    }, n.addAction(a);
  }
}
function Ie(e) {
  let n;
  const l = { ..._(), ...e }, u = [], m = {};
  return {
    get name() {
      return Q;
    },
    get version() {
      return Se;
    },
    get mapVersion() {
      return ve;
    },
    get config() {
      return l;
    },
    initialize(r) {
      n = r;
      for (const d of r.contentTree)
        q(n, d, l, m);
      return u.push(
        r.contentTree.added.addEventListener((d) => {
          q(n, d, l, m);
        })
      ), Promise.resolve();
    },
    getDefaultOptions: _,
    toJSON() {
      const r = {}, d = _();
      return Object.keys(l).forEach((c) => {
        const a = c;
        l[a] !== d[a] && (r[a] = l[a]);
      }), r;
    },
    i18n: { en: Ve, de: xe },
    getConfigEditors() {
      return [
        {
          component: Ae,
          title: "Layer Settings Config Editor",
          infoUrlCallback: n == null ? void 0 : n.getHelpUrlCallback(
            "/components/plugins/layerSettingsToolConfig.html",
            "app-configurator"
          )
        }
      ];
    },
    destroy() {
      u.forEach((r) => {
        r();
      }), Object.values(m).forEach((r) => {
        r();
      }), [...n.contentTree].forEach((r) => {
        r.removeAction(I);
      });
    }
  };
}
export {
  Ie as default
};
