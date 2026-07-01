import { ButtonLocation as S, renderTemplate as K, VcsLabel as Y, VcsSelect as Q, VcsTextArea as Z, VcsTextField as x, VcsCheckbox as tt, VcsFormSection as H, VcsFormButton as et, AbstractConfigEditor as ot, VcsList as nt } from "../../../assets/ui.js";
import { CesiumMap as it, OpenlayersMap as lt, Projection as B, ObliqueMap as at, wgs84Projection as E } from "../../../assets/core.js";
import { defineComponent as z, ref as O, toRaw as X, onMounted as st, computed as _, resolveComponent as v, openBlock as T, createBlock as N, withCtx as r, createVNode as l, createTextVNode as y, toDisplayString as L, createElementVNode as rt, watch as ut, mergeProps as dt, createCommentVNode as G } from "../../../assets/vue.js";
import { VContainer as ct, VRow as pt, VCol as mt, VCard as ft, VDivider as gt, VForm as bt, VDialog as vt } from "../../../assets/vuetify.js";
const g = {
  OFF: 1,
  ERROR: 2,
  WARN: 4,
  INFO: 8,
  DEBUG: 16
}, k = {
  ERROR: 0,
  WARN: 0,
  INFO: 0,
  DEBUG: 0
};
k.ERROR = g.ERROR | g.WARN | g.INFO | g.DEBUG;
k.WARN = g.WARN | g.INFO | g.DEBUG;
k.INFO = g.INFO | g.DEBUG;
k.DEBUG = g.DEBUG;
const R = {
  useTimestamp: !1,
  logLevel: g.INFO
}, U = /* @__PURE__ */ new Map();
U.set(g.ERROR, "error");
U.set(g.WARN, "warn");
U.set(g.INFO, "info");
U.set(g.DEBUG, "log");
class ht {
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
  error(e, ...i) {
    R.logLevel & k.ERROR && this._log(String(e), g.ERROR, i);
  }
  /**
   * Logs a warning message
   * @param {string} msg The message to log.
   * @param {...any} optArgs
   */
  warning(e, ...i) {
    R.logLevel & k.WARN && this._log(String(e), g.WARN, i);
  }
  /**
   * Deprecate a function. deprecations are stored on the logger
   * @param {string} functionName
   * @param {string=} alternativeFunctionName
   */
  deprecate(e, i) {
    const a = String(e), u = i ? String(i) : null;
    if (!this.deprecations.has(a)) {
      this.deprecations.set(a, u || null);
      let o = `${a} has been deprecated and will be removed`;
      u && (o = `${o}. ${u}`), this.warning(o);
    }
  }
  /**
   * Logs an info message
   * @param {string} msg The message to log.
   * @param {...any} optArgs
   */
  info(e, ...i) {
    R.logLevel & k.INFO && this._log(String(e), g.INFO, i);
  }
  /**
   * Logs a debug message
   * @param {string} msg The message to log.
   * @param {...any} optArgs
   */
  debug(e, ...i) {
    R.logLevel & k.DEBUG && this._log(String(e), g.DEBUG, i);
  }
  /**
   * Alias for debug
   * @param {string} msg The message to log.
   * @param {...any} optArgs
   */
  log(e, ...i) {
    R.logLevel & k.DEBUG && this._log(String(e), g.DEBUG, i);
  }
  /**
   * Logs a message
   * @param {string} msg The message to log.
   * @param {LOG_LEVEL} level
   * @param {Array} optArgs
   * @private
   */
  _log(e, i, a) {
    let u = e;
    this.className && (u = `[${this.className}] ${u}`), console[U.get(i)](u, ...a), i & g.ERROR && (console.group(), console.trace(), console.groupEnd());
  }
}
const D = /* @__PURE__ */ new Map();
function Vt(t) {
  const e = new ht(t);
  return D.set(t, e), e;
}
function A(t) {
  return D.has(t) ? D.get(t) : Vt(t);
}
const C = "@vcmap/link-button", kt = "2.0.3", Bt = "^6.1";
function P() {
  return {
    buttonLocation: S.TOOL,
    templateUrl: "",
    title: "",
    icon: "$vcsExternalLink",
    projection: {},
    visibility: { mobile: !0, tablet: !0, desktop: !0 }
  };
}
function W(t, e, i) {
  const a = t[0] * Math.PI / 180, u = t[1] * Math.PI / 180, o = 63710088e-1, p = Math.asin(
    Math.sin(u) * Math.cos(i / o) + Math.cos(u) * Math.sin(i / o) * Math.cos(e)
  );
  return [(a + Math.atan2(
    Math.sin(e) * Math.sin(i / o) * Math.cos(u),
    Math.cos(i / o) - Math.sin(u) * Math.sin(p)
  )) / (Math.PI / 180), p / (Math.PI / 180)];
}
function Et(t, e, i) {
  const a = Math.PI / 3, { clientWidth: u, clientHeight: o } = t, p = u / o, s = 2 * Math.tan(a / 2) * e, d = s / p, n = Math.sqrt(
    s * s + d * d
  );
  return [
    ...W(
      i,
      Math.PI / 2 - Math.atan2(d, s) + Math.PI,
      n / 2
    ),
    ...W(
      i,
      Math.PI / 2 - Math.atan2(d, s),
      n / 2
    )
  ];
}
async function yt(t, e, i) {
  var w;
  const { activeMap: a } = t.maps, u = await (a == null ? void 0 : a.getViewpoint());
  if (!u)
    throw new Error("no active map or viewpoint");
  const { distance: o, heading: p, pitch: s, roll: d } = u;
  let { groundPosition: n, cameraPosition: c } = u, m = [];
  if (a instanceof it) {
    const b = (w = a.getScene()) == null ? void 0 : w.canvas;
    b && o && n && (m = Et(b, o, n));
  } else if (a instanceof lt && a.olMap) {
    const b = a.olMap.getView().calculateExtent();
    m = [
      ...B.mercatorToWgs84([b[0], b[1]]),
      ...B.mercatorToWgs84([b[2], b[3]])
    ];
  } else if (a instanceof at && a.olMap && a.currentImage) {
    const b = a.olMap.getView().calculateExtent(), I = a.currentImage.transformImage2RealWorld([
      b[0],
      b[1]
    ]), F = a.currentImage.transformImage2RealWorld([
      b[2],
      b[3]
    ]), { projection: f } = a.currentImage.meta;
    m = [
      ...B.transform(E, f, I).slice(
        0,
        2
      ),
      ...B.transform(E, f, F).slice(
        0,
        2
      )
    ];
  }
  const V = i && B.validateOptions(i);
  i && !V && A(C).warning("projection not valid");
  const M = B.parseEPSGCode(i == null ? void 0 : i.epsg);
  if (M && M !== E.epsg && V) {
    const b = new B(i);
    n && (n = b.transformFrom(
      E,
      n
    )), c && (c = b.transformFrom(
      E,
      c
    )), m.length && (m = [
      ...b.transformFrom(E, [
        m[0],
        m[1]
      ]),
      ...b.transformFrom(E, [
        m[2],
        m[3]
      ])
    ]);
  }
  const j = K(e, {
    groundPosition: n,
    cameraPosition: c,
    distance: o,
    heading: p,
    pitch: s,
    roll: d,
    extent: m
  });
  return encodeURI(j);
}
function Lt(t) {
  var i;
  const e = document.createElement("a");
  e.href = t, e.target = "_blank", document.body.appendChild(e), e.click(), (i = e.parentNode) == null || i.removeChild(e);
}
let $;
const Ot = new Uint8Array(16);
function Rt() {
  if (!$ && ($ = typeof crypto < "u" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto), !$))
    throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
  return $(Ot);
}
const h = [];
for (let t = 0; t < 256; ++t)
  h.push((t + 256).toString(16).slice(1));
function Ut(t, e = 0) {
  return h[t[e + 0]] + h[t[e + 1]] + h[t[e + 2]] + h[t[e + 3]] + "-" + h[t[e + 4]] + h[t[e + 5]] + "-" + h[t[e + 6]] + h[t[e + 7]] + "-" + h[t[e + 8]] + h[t[e + 9]] + "-" + h[t[e + 10]] + h[t[e + 11]] + h[t[e + 12]] + h[t[e + 13]] + h[t[e + 14]] + h[t[e + 15]];
}
const Mt = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto), q = {
  randomUUID: Mt
};
function wt(t, e, i) {
  if (q.randomUUID && !e && !t)
    return q.randomUUID();
  t = t || {};
  const a = t.random || (t.rng || Rt)();
  return a[6] = a[6] & 15 | 64, a[8] = a[8] & 63 | 128, Ut(a);
}
const $t = z({
  name: "ButtonEditor",
  title: "Button Editor",
  components: {
    VcsLabel: Y,
    VcsSelect: Q,
    VcsTextArea: Z,
    VcsTextField: x,
    VContainer: ct,
    VRow: pt,
    VCol: mt,
    VCard: ft,
    VcsCheckbox: tt,
    VcsFormSection: H,
    VDivider: gt,
    VcsFormButton: et,
    VForm: bt
  },
  props: {
    modelValue: {
      type: Object,
      required: !0
    }
  },
  emits: ["update:modelValue", "close"],
  setup(t, { emit: e }) {
    const i = [
      { value: S.TOOL, title: "TOOL" },
      { value: S.MENU, title: "MENU" }
    ], a = O(), u = O(
      structuredClone(X(t.modelValue))
    );
    return st(() => {
      var o;
      (o = a.value) == null || o.validate();
    }), {
      epsg: _({
        get() {
          var o;
          return (o = u.value.projection) == null ? void 0 : o.epsg;
        },
        set(o) {
          u.value.projection ? u.value.projection.epsg = o : u.value.projection = { epsg: o };
        }
      }),
      proj4: _({
        get() {
          var o;
          return (o = u.value.projection) == null ? void 0 : o.proj4;
        },
        set(o) {
          u.value.projection ? u.value.projection.proj4 = o : u.value.projection = { proj4: o };
        }
      }),
      availableButtonLocations: i,
      headerActions: [
        {
          name: "components.close",
          title: "components.close",
          icon: "mdi-close-thick",
          callback() {
            e("close");
          }
        }
      ],
      requiredRule: (o) => !!o || "components.validation.required",
      isValid: O(!0),
      validationForm: a,
      localLinkButtonOptions: u
    };
  }
}), J = (t, e) => {
  const i = t.__vccOpts || t;
  for (const [a, u] of e)
    i[a] = u;
  return i;
}, Ct = { class: "d-flex justify-end pa-2" };
function Pt(t, e, i, a, u, o) {
  const p = v("VcsLabel"), s = v("v-col"), d = v("VcsTextArea"), n = v("v-row"), c = v("VcsTextField"), m = v("VcsSelect"), V = v("VcsCheckbox"), M = v("v-container"), j = v("v-form"), w = v("v-divider"), b = v("VcsFormButton"), I = v("VcsFormSection"), F = v("v-card");
  return T(), N(F, null, {
    default: r(() => [
      l(I, {
        heading: "linkButton.editor.buttonEditor",
        "header-actions": t.headerActions
      }, {
        default: r(() => [
          l(j, {
            ref: "validationForm",
            modelValue: t.isValid,
            "onUpdate:modelValue": e[9] || (e[9] = (f) => t.isValid = f)
          }, {
            default: r(() => [
              l(M, { class: "px-2 pt-0 pb-2" }, {
                default: r(() => [
                  l(n, { "no-gutters": "" }, {
                    default: r(() => [
                      l(s, { cols: "6" }, {
                        default: r(() => [
                          l(p, {
                            "html-for": "link-button-url",
                            required: !0
                          }, {
                            default: r(() => [
                              y(
                                L(t.$t("linkButton.editor.templateUrl")),
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
                      l(s, { cols: "6" }, {
                        default: r(() => [
                          l(d, {
                            id: "link-button-url",
                            modelValue: t.localLinkButtonOptions.templateUrl,
                            "onUpdate:modelValue": e[0] || (e[0] = (f) => t.localLinkButtonOptions.templateUrl = f),
                            rows: "2",
                            placeholder: 'https://new.virtualcitymap.de/?state=[[[{{cameraPosition}}],[{{groundPosition}}],{{distance}},{{heading}},{{pitch}},{{roll}}],";cesium",["VC Map Demo"]]',
                            rules: [t.requiredRule]
                          }, null, 8, ["modelValue", "rules"])
                        ]),
                        _: 1
                        /* STABLE */
                      })
                    ]),
                    _: 1
                    /* STABLE */
                  }),
                  l(n, { "no-gutters": "" }, {
                    default: r(() => [
                      l(s, { cols: "6" }, {
                        default: r(() => [
                          l(p, {
                            "html-for": "link-button-title",
                            required: !0
                          }, {
                            default: r(() => [
                              y(
                                L(t.$t("linkButton.editor.title")),
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
                      l(s, { cols: "6" }, {
                        default: r(() => [
                          l(c, {
                            id: "link-button-title",
                            modelValue: t.localLinkButtonOptions.title,
                            "onUpdate:modelValue": e[1] || (e[1] = (f) => t.localLinkButtonOptions.title = f),
                            placeholder: t.$t("linkButton.editor.titlePlaceholder"),
                            rules: [t.requiredRule]
                          }, null, 8, ["modelValue", "placeholder", "rules"])
                        ]),
                        _: 1
                        /* STABLE */
                      })
                    ]),
                    _: 1
                    /* STABLE */
                  }),
                  l(n, { "no-gutters": "" }, {
                    default: r(() => [
                      l(s, { cols: "6" }, {
                        default: r(() => [
                          l(p, {
                            "html-for": "link-button-icon",
                            required: !0
                          }, {
                            default: r(() => [
                              y(
                                L(t.$t("linkButton.editor.icon")),
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
                      l(s, { cols: "6" }, {
                        default: r(() => [
                          l(c, {
                            id: "link-button-icon",
                            modelValue: t.localLinkButtonOptions.icon,
                            "onUpdate:modelValue": e[2] || (e[2] = (f) => t.localLinkButtonOptions.icon = f),
                            placeholder: t.$t("linkButton.editor.iconPlaceholder"),
                            rules: [t.requiredRule]
                          }, null, 8, ["modelValue", "placeholder", "rules"])
                        ]),
                        _: 1
                        /* STABLE */
                      })
                    ]),
                    _: 1
                    /* STABLE */
                  }),
                  l(n, { "no-gutters": "" }, {
                    default: r(() => [
                      l(s, { cols: "6" }, {
                        default: r(() => [
                          l(p, { "html-for": "link-button-buttonLocation" }, {
                            default: r(() => [
                              y(
                                L(t.$t("linkButton.editor.buttonLocation")),
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
                      l(s, { cols: "6" }, {
                        default: r(() => [
                          l(m, {
                            id: "link-button-buttonLocation",
                            modelValue: t.localLinkButtonOptions.buttonLocation,
                            "onUpdate:modelValue": e[3] || (e[3] = (f) => t.localLinkButtonOptions.buttonLocation = f),
                            items: t.availableButtonLocations
                          }, null, 8, ["modelValue", "items"])
                        ]),
                        _: 1
                        /* STABLE */
                      })
                    ]),
                    _: 1
                    /* STABLE */
                  }),
                  l(n, { "no-gutters": "" }, {
                    default: r(() => [
                      l(s, { cols: "6" }, {
                        default: r(() => [
                          l(p, { "html-for": "link-button-epsg" }, {
                            default: r(() => [
                              y(
                                L(t.$t("linkButton.editor.projection")),
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
                      l(s, { cols: "6" }, {
                        default: r(() => [
                          l(c, {
                            id: "link-button-epsg",
                            modelValue: t.epsg,
                            "onUpdate:modelValue": e[4] || (e[4] = (f) => t.epsg = f),
                            placeholder: t.$t("linkButton.editor.epsgPlaceholder")
                          }, null, 8, ["modelValue", "placeholder"])
                        ]),
                        _: 1
                        /* STABLE */
                      })
                    ]),
                    _: 1
                    /* STABLE */
                  }),
                  l(n, {
                    "no-gutters": "",
                    class: "justify-end"
                  }, {
                    default: r(() => [
                      l(s, { cols: "6" }, {
                        default: r(() => [
                          l(c, {
                            id: "link-button-proj4",
                            modelValue: t.proj4,
                            "onUpdate:modelValue": e[5] || (e[5] = (f) => t.proj4 = f),
                            placeholder: t.$t("linkButton.editor.proj4Placeholder")
                          }, null, 8, ["modelValue", "placeholder"])
                        ]),
                        _: 1
                        /* STABLE */
                      })
                    ]),
                    _: 1
                    /* STABLE */
                  }),
                  l(n, { "no-gutters": "" }, {
                    default: r(() => [
                      l(s, { cols: "6" }, {
                        default: r(() => [
                          l(p, { "html-for": "link-button-visibility" }, {
                            default: r(() => [
                              y(
                                L(t.$t("linkButton.editor.visibility")),
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
                      l(s, { cols: "6" }, {
                        default: r(() => [
                          l(V, {
                            id: "link-button-visibility",
                            modelValue: t.localLinkButtonOptions.visibility.mobile,
                            "onUpdate:modelValue": e[6] || (e[6] = (f) => t.localLinkButtonOptions.visibility.mobile = f),
                            label: t.$t("linkButton.editor.mobile")
                          }, null, 8, ["modelValue", "label"])
                        ]),
                        _: 1
                        /* STABLE */
                      })
                    ]),
                    _: 1
                    /* STABLE */
                  }),
                  l(n, {
                    "no-gutters": "",
                    class: "justify-end"
                  }, {
                    default: r(() => [
                      l(s, { cols: "6" }, {
                        default: r(() => [
                          l(V, {
                            modelValue: t.localLinkButtonOptions.visibility.tablet,
                            "onUpdate:modelValue": e[7] || (e[7] = (f) => t.localLinkButtonOptions.visibility.tablet = f),
                            label: t.$t("linkButton.editor.tablet")
                          }, null, 8, ["modelValue", "label"])
                        ]),
                        _: 1
                        /* STABLE */
                      })
                    ]),
                    _: 1
                    /* STABLE */
                  }),
                  l(n, {
                    "no-gutters": "",
                    class: "justify-end"
                  }, {
                    default: r(() => [
                      l(s, { cols: "6" }, {
                        default: r(() => [
                          l(V, {
                            modelValue: t.localLinkButtonOptions.visibility.desktop,
                            "onUpdate:modelValue": e[8] || (e[8] = (f) => t.localLinkButtonOptions.visibility.desktop = f),
                            label: t.$t("linkButton.editor.desktop")
                          }, null, 8, ["modelValue", "label"])
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
          }, 8, ["modelValue"]),
          l(w),
          rt("div", Ct, [
            l(b, {
              variant: "filled",
              disabled: !t.isValid,
              onClick: e[10] || (e[10] = () => {
                t.$emit("update:modelValue", t.localLinkButtonOptions), t.$emit("close");
              })
            }, {
              default: r(() => [
                y(
                  L(t.$t("components.apply")),
                  1
                  /* TEXT */
                )
              ]),
              _: 1
              /* STABLE */
            }, 8, ["disabled"])
          ])
        ]),
        _: 1
        /* STABLE */
      }, 8, ["header-actions"])
    ]),
    _: 1
    /* STABLE */
  });
}
const jt = /* @__PURE__ */ J($t, [["render", Pt]]), It = z({
  name: "LinkButtonConfigEditor",
  components: {
    AbstractConfigEditor: ot,
    VcsFormSection: H,
    VcsList: nt,
    VDialog: vt,
    ButtonEditor: jt
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
    var d;
    const e = O(), i = O([]), a = t.getConfig(), u = P(), o = O({
      ...a,
      buttons: ((d = a.buttons) == null ? void 0 : d.map((n) => ({ ...u, ...n }))) ?? []
    });
    function p() {
      var c;
      const n = (c = o.value.buttons) == null ? void 0 : c.map(
        (m) => X(m)
      );
      t.setConfig({ ...a, buttons: n });
    }
    function s(n, c) {
      const m = n.title && n.templateUrl && n.icon;
      return {
        name: wt(),
        title: n.title || "linkButton.editor.titleMissing",
        icon: m ? void 0 : "mdi-alert",
        tooltip: m ? void 0 : "linkButton.editor.infoMissing",
        actions: [
          {
            name: "linkButton.editor.edit",
            icon: "$vcsEdit",
            callback() {
              e.value = c;
            }
          },
          {
            name: "linkButton.editor.remove",
            icon: "$vcsTrashCan",
            callback() {
              var V;
              (V = o.value) != null && V.buttons && o.value.buttons.splice(c, 1);
            }
          }
        ]
      };
    }
    return ut(
      o,
      (n) => {
        n != null && n.buttons ? i.value = n.buttons.map(s) : i.value = [];
      },
      { immediate: !0, deep: !0 }
    ), {
      localConfig: o,
      apply: p,
      listItems: i,
      headerActions: [
        {
          name: "linkButton.editor.add",
          icon: "$vcsPlus",
          callback() {
            var n;
            (n = o.value) != null && n.buttons ? (o.value.buttons.push(P()), i.value = o.value.buttons.map(s)) : A(C).error("no local config available");
          }
        }
      ],
      buttonOptions: _({
        get() {
          var n, c;
          if (e.value !== void 0)
            return (c = (n = o.value) == null ? void 0 : n.buttons) == null ? void 0 : c[e.value];
        },
        set(n) {
          var c;
          n && e.value !== void 0 && ((c = o.value) != null && c.buttons) ? o.value.buttons[e.value] = n : e.value = void 0;
        }
      })
    };
  }
});
function Ft(t, e, i, a, u, o) {
  const p = v("VcsList"), s = v("ButtonEditor"), d = v("v-dialog"), n = v("VcsFormSection"), c = v("AbstractConfigEditor");
  return t.localConfig ? (T(), N(c, dt({ key: 0 }, { ...t.$attrs, ...t.$props }, { onSubmit: t.apply }), {
    default: r(() => [
      l(n, {
        heading: "linkButton.editor.buttons",
        expandable: "",
        "start-open": !0,
        "header-actions": t.headerActions
      }, {
        default: r(() => [
          l(p, {
            items: t.listItems,
            "show-title": !1
          }, null, 8, ["items"]),
          t.buttonOptions ? (T(), N(d, {
            key: 0,
            "model-value": !0,
            width: "400",
            persistent: !0
          }, {
            default: r(() => [
              l(s, {
                modelValue: t.buttonOptions,
                "onUpdate:modelValue": e[0] || (e[0] = (m) => t.buttonOptions = m),
                onClose: e[1] || (e[1] = (m) => t.buttonOptions = void 0)
              }, null, 8, ["modelValue"])
            ]),
            _: 1
            /* STABLE */
          })) : G("v-if", !0)
        ]),
        _: 1
        /* STABLE */
      }, 8, ["header-actions"])
    ]),
    _: 1
    /* STABLE */
  }, 16, ["onSubmit"])) : G("v-if", !0);
}
const St = /* @__PURE__ */ J(It, [["render", Ft]]);
function At(t) {
  var u;
  const e = P(), i = {
    buttons: (u = t.buttons) == null ? void 0 : u.filter((o) => !!o.templateUrl).map((o) => ({ ...structuredClone(e), ...o }))
  };
  let a;
  return {
    get name() {
      return C;
    },
    get version() {
      return kt;
    },
    get mapVersion() {
      return Bt;
    },
    initialize(o) {
      var p;
      return a = o, (p = i.buttons) == null || p.forEach((s) => {
        const d = s;
        if (o.navbarManager.has(d.title))
          A("@vcmap/link-button").warning(
            `button with name "${d.title}" is already added to the navbarManager`
          );
        else {
          let { icon: n } = d;
          /:|\./.test(d.icon) && (n = `imageUrl:${n}`);
          const m = {
            name: d.title,
            title: d.title,
            icon: n,
            active: !1,
            async callback() {
              const V = await yt(
                o,
                d.templateUrl,
                d.projection
              );
              Lt(V);
            }
          };
          o.navbarManager.add(
            { id: m.name, action: m },
            C,
            d.buttonLocation,
            d.visibility
          );
        }
      }), Promise.resolve();
    },
    /**
     * should return all default values of the configuration
     */
    getDefaultOptions() {
      return {
        buttons: [P()]
      };
    },
    /**
     * should return the plugin's serialization excluding all default values
     */
    toJSON() {
      var p;
      return { buttons: (p = i.buttons) == null ? void 0 : p.map((s) => {
        const d = {
          templateUrl: s.templateUrl
        };
        if (s.buttonLocation !== e.buttonLocation && (d.buttonLocation = s.buttonLocation), s.title !== e.title && (d.title = s.title), s.icon !== e.icon && (d.icon = s.icon), s.projection && (d.projection = s.projection), s.visibility) {
          const n = Object.keys(s.visibility).filter(
            (c) => s.visibility[c] !== e.visibility[c]
          );
          n.length && (d.visibility = Object.fromEntries(
            n.map((c) => [c, s.visibility[c]])
          ));
        }
        return d;
      }) };
    },
    /**
     * components for configuring the plugin and/ or custom items defined by the plugin
     */
    getConfigEditors() {
      return [
        {
          component: St,
          title: "linkButton.editor.editorTitle",
          infoUrlCallback: a.getHelpUrlCallback(
            "/components/plugins/linkButtonConfig.html",
            "app-configurator"
          )
        }
      ];
    },
    destroy() {
      delete a.vuetify.icons.sets.linkButton;
    },
    i18n: {
      en: {
        linkButton: {
          warning: {
            buttonExistsAlready: "A button with this title has already been added"
          },
          editor: {
            editorTitle: "LinkButton Editor",
            templateUrl: "Template URL",
            title: "Title",
            titlePlaceholder: "Title and tooltip of button",
            icon: "Icon",
            iconPlaceholder: "$vcsExternalLink",
            buttonLocation: "Button location",
            projection: "Projection",
            epsgPlaceholder: "EPSG:4326",
            proj4Placeholder: "+proj=longlat +datum=WGS84 +no_defs +type=crs",
            buttons: "Buttons",
            buttonEditor: "Button Editor",
            infoMissing: "Required configuration missing",
            titleMissing: "Button title is missing",
            visibility: "Visibility",
            mobile: "Mobile",
            tablet: "Tablet",
            desktop: "Desktop"
          }
        }
      },
      de: {
        linkButton: {
          warning: {
            buttonExistsAlready: "Ein Button mit diesem Titel wurde bereits hinzugefügt"
          },
          editor: {
            editorTitle: "LinkButton Editor",
            templateUrl: "Template URL",
            title: "Titel",
            titlePlaceholder: "Titel und Tooltip des Buttons",
            icon: "Icon",
            iconPlaceholder: "$vcsExternalLink",
            buttonLocation: "Button Position",
            projection: "Projektion",
            epsgPlaceholder: "EPSG:4326",
            proj4Placeholder: "+proj=longlat +datum=WGS84 +no_defs +type=crs",
            buttons: "Buttons",
            buttonEditor: "Button Editor",
            infoMissing: "Erforderliche Konfiguration fehlt",
            titleMissing: "Button Titel fehlt",
            visibility: "Sichtbarkeit",
            mobile: "Handy",
            tablet: "Tablet",
            desktop: "Desktop"
          }
        }
      }
    }
  };
}
export {
  At as default
};
