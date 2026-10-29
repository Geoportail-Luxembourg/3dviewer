
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
} await loadCss('data:text/css;base64,LnJlbGF0aXZlUG9zaXRpb257bWFyZ2luLWxlZnQ6N2VtfQo=');var re = Object.defineProperty;
var de = (t, e, a) => e in t ? re(t, e, { enumerable: !0, configurable: !0, writable: !0, value: a }) : t[e] = a;
var O = (t, e, a) => de(t, typeof e != "symbol" ? e + "" : e, a);
import { VcsEvent as ue, moduleIdSymbol as ee, volatileModuleId as me } from "../../../assets/core.js";
import { VcsSlider as ce, VcsLabel as q, ContentTreeItem as pe, StateActionState as F, WindowSlot as he, VcsSelect as ve, VcsTextField as te, VcsFormButton as ye, VcsFormSection as ae, VcsList as fe, AbstractConfigEditor as ge } from "../../../assets/ui.js";
import { defineComponent as K, inject as le, ref as g, watch as P, computed as ie, onUnmounted as _e, onMounted as we, resolveComponent as m, openBlock as D, createBlock as M, withCtx as o, createVNode as l, createTextVNode as w, toDisplayString as N, reactive as Ne, createElementVNode as be, getCurrentInstance as Le, toRaw as W, mergeProps as Ve, createCommentVNode as x } from "../../../assets/vue.js";
import { VSheet as Ie, VCol as oe, VRow as ne, VForm as Oe, VContainer as se, VDivider as Se, VCard as Ee, VDialog as Te } from "../../../assets/vuetify.js";
const j = "@vcmap/layer-slider", Ce = "2.0.0", $e = "^6.0", Re = K({
  name: "LayerSlider",
  components: {
    VcsSlider: ce,
    VSheet: Ie,
    VcsLabel: q
  },
  props: {
    labels: {
      type: Array,
      required: !0
    },
    layerIndex: {
      type: Number,
      required: !0
    },
    itemName: {
      type: String,
      required: !0
    },
    itemTitle: {
      type: String,
      required: !0
    }
  },
  setup(t) {
    const a = le("vcsApp").contentTree.getByKey(
      t.itemName
    ), i = g(t.layerIndex);
    P(i, (s) => {
      a.layerIndex !== s && a.setLayer(s);
    });
    const n = a.layerChanged.addEventListener(
      (s) => {
        i.value = s.layerIndex;
      }
    ), u = ie(() => {
      const s = {};
      return t.labels.forEach((r, p) => {
        s[p] = r;
      }), s;
    });
    return _e(() => {
      n();
    }), we(() => {
      i.value = a.layerIndex;
    }), {
      labelsObject: u,
      selectedLayer: i,
      currentItem: a
    };
  }
}), J = (t, e) => {
  const a = t.__vccOpts || t;
  for (const [i, n] of e)
    a[i] = n;
  return a;
};
function Ae(t, e, a, i, n, u) {
  const s = m("VcsLabel"), r = m("VcsSlider"), p = m("v-sheet");
  return D(), M(p, { class: "px-3" }, {
    default: o(() => [
      l(s, null, {
        default: o(() => [
          w(
            N(t.itemTitle),
            1
            /* TEXT */
          )
        ]),
        _: 1
        /* STABLE */
      }),
      l(r, {
        step: 1,
        min: 0,
        ticks: t.labelsObject,
        max: t.labels.length - 1,
        "show-ticks": "always",
        type: "number",
        modelValue: t.selectedLayer,
        "onUpdate:modelValue": e[0] || (e[0] = (y) => t.selectedLayer = y)
      }, null, 8, ["ticks", "max", "modelValue"])
    ]),
    _: 1
    /* STABLE */
  });
}
const Fe = /* @__PURE__ */ J(Re, [["render", Ae]]);
class G extends pe {
  constructor(a, i) {
    var n, u, s, r, p, y, b, L, h;
    super(a, i);
    O(this, "_windowOptions");
    O(this, "_listeners");
    O(this, "_layerIndex");
    O(this, "layerChanged");
    O(this, "_layerNames");
    O(this, "_labels");
    O(this, "_app");
    O(this, "activateAction");
    this.state = F.INACTIVE, this._layerNames = a.layerNames || [], this._labels = a.labels || [], this._layerIndex = 0, this._windowOptions = {
      id: a.name,
      component: Fe,
      slot: ((n = a.windowOptions) == null ? void 0 : n.slot) || he.DYNAMIC_LEFT,
      position: {
        width: ((s = (u = a.windowOptions) == null ? void 0 : u.position) == null ? void 0 : s.width) || "400px",
        height: ((p = (r = a.windowOptions) == null ? void 0 : r.position) == null ? void 0 : p.height) || "120px"
      },
      state: {
        headerTitle: ((b = (y = a.windowOptions) == null ? void 0 : y.state) == null ? void 0 : b.headerTitle) || "layerSlider.title",
        headerIcon: ((h = (L = a.windowOptions) == null ? void 0 : L.state) == null ? void 0 : h.headerIcon) || "mdi-tune-variant"
      },
      props: {
        labels: this._labels.slice(0),
        layerIndex: this._layerIndex,
        itemName: a.name,
        itemTitle: a.title
      }
    }, this.layerChanged = new ue(), this._listeners = [], this._app = i, this.activateAction = Ne({
      name: "open",
      icon: "mdi-tune-variant",
      title: "layerSlider.openTooltip",
      active: !1,
      callback: async () => {
        this.activateAction.active === !0 ? (this.activateAction.active = !1, this._app.windowManager.has(this._windowOptions.id) && this._app.windowManager.remove(this._windowOptions.id)) : (this.activateAction.active = !0, await this.activate());
      }
    }), this._setup();
  }
  static get className() {
    return "SliderContentTreeItem";
  }
  async activate() {
    this.state = F.ACTIVE, this.activateAction.active = !0;
    for (let n = 0; n < this._layerNames.length; n++)
      if (n !== this._layerIndex) {
        const u = this._layerNames[n], s = this._app.layers.getByKey(u);
        s && s.deactivate();
      }
    const a = this._layerNames[this._layerIndex], i = this._app.layers.getByKey(a);
    i && await i.activate(), this._app.windowManager.has(this._windowOptions.id) || this._app.windowManager.add(this._windowOptions, j);
  }
  deactivate() {
    this.state = F.INACTIVE;
    for (let a = 0; a < this._layerNames.length; a++) {
      const i = this._layerNames[a], n = this._app.layers.getByKey(i);
      n && n.deactivate();
    }
    this._app.windowManager.has(this._windowOptions.id) && this._app.windowManager.remove(this._windowOptions.id);
  }
  // New setLayer function
  setLayer(a) {
    this.layerIndex = a, this.layerChanged.raiseEvent({ layerIndex: a, isActive: !0 });
    for (let n = 0; n <= this._layerNames.length; n++)
      if (n !== a) {
        const u = this._layerNames[n], s = this._app.layers.getByKey(u);
        s && s.deactivate();
      }
    const i = this._app.layers.getByKey(this._layerNames[a]);
    i && i.activate().catch((n) => {
      console.error("Error activating layer:", n);
    });
  }
  get layerIndex() {
    return this._layerIndex;
  }
  set layerIndex(a) {
    this._layerIndex = a;
  }
  _clearListeners() {
    this._listeners.forEach((a) => {
      a();
    }), this._listeners.splice(0);
  }
  _setup() {
    this._clearListeners(), this._listeners = [
      this._app.windowManager.removed.addEventListener(
        ({ id: a }) => {
          a === `${this._windowOptions.id}` && (this.activateAction.active = !1);
        }
      ),
      this._app.layers.stateChanged.addEventListener((a) => {
        if (this._layerNames.includes(a.name)) {
          const i = this._layerNames.indexOf(a.name);
          a.active ? this.setLayer(i) : a.loading || i === this._layerIndex && this._app.windowManager.has(this._windowOptions.id) && (this._app.windowManager.remove(this._windowOptions.id), this.state = F.INACTIVE);
        }
      })
    ], this.addAction(this.activateAction, 12);
  }
  async clicked() {
    await super.clicked(), this.state === F.INACTIVE ? await this.activate() : this.deactivate();
  }
  destroy() {
    super.destroy(), this._clearListeners();
  }
  toJSON() {
    var i, n, u, s, r;
    const a = super.toJSON();
    return a.windowOptions = {
      id: this._windowOptions.id,
      slot: this._windowOptions.slot,
      position: {
        width: (i = this._windowOptions.position) == null ? void 0 : i.width,
        height: (n = this._windowOptions.position) == null ? void 0 : n.height
      },
      state: {
        headerTitle: (u = this._windowOptions.state) == null ? void 0 : u.headerTitle,
        headerIcon: (s = this._windowOptions.state) == null ? void 0 : s.headerIcon,
        infoUrlCallback: (r = this._windowOptions.state) == null ? void 0 : r.infoUrlCallback
      }
    }, a.layerNames = structuredClone(this._layerNames), a.labels = structuredClone(this._labels), a;
  }
}
const c = {
  OFF: 1,
  ERROR: 2,
  WARN: 4,
  INFO: 8,
  DEBUG: 16
}, S = {
  ERROR: 0,
  WARN: 0,
  INFO: 0,
  DEBUG: 0
};
S.ERROR = c.ERROR | c.WARN | c.INFO | c.DEBUG;
S.WARN = c.WARN | c.INFO | c.DEBUG;
S.INFO = c.INFO | c.DEBUG;
S.DEBUG = c.DEBUG;
const B = {
  useTimestamp: !1,
  logLevel: c.INFO
}, U = /* @__PURE__ */ new Map();
U.set(c.ERROR, "error");
U.set(c.WARN, "warn");
U.set(c.INFO, "info");
U.set(c.DEBUG, "log");
class Be {
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
  error(e, ...a) {
    B.logLevel & S.ERROR && this._log(String(e), c.ERROR, a);
  }
  /**
   * Logs a warning message
   * @param {string} msg The message to log.
   * @param {...any} optArgs
   */
  warning(e, ...a) {
    B.logLevel & S.WARN && this._log(String(e), c.WARN, a);
  }
  /**
   * Deprecate a function. deprecations are stored on the logger
   * @param {string} functionName
   * @param {string=} alternativeFunctionName
   */
  deprecate(e, a) {
    const i = String(e), n = a ? String(a) : null;
    if (!this.deprecations.has(i)) {
      this.deprecations.set(i, n || null);
      let u = `${i} has been deprecated and will be removed`;
      n && (u = `${u}. ${n}`), this.warning(u);
    }
  }
  /**
   * Logs an info message
   * @param {string} msg The message to log.
   * @param {...any} optArgs
   */
  info(e, ...a) {
    B.logLevel & S.INFO && this._log(String(e), c.INFO, a);
  }
  /**
   * Logs a debug message
   * @param {string} msg The message to log.
   * @param {...any} optArgs
   */
  debug(e, ...a) {
    B.logLevel & S.DEBUG && this._log(String(e), c.DEBUG, a);
  }
  /**
   * Alias for debug
   * @param {string} msg The message to log.
   * @param {...any} optArgs
   */
  log(e, ...a) {
    B.logLevel & S.DEBUG && this._log(String(e), c.DEBUG, a);
  }
  /**
   * Logs a message
   * @param {string} msg The message to log.
   * @param {LOG_LEVEL} level
   * @param {Array} optArgs
   * @private
   */
  _log(e, a, i) {
    let n = e;
    this.className && (n = `[${this.className}] ${n}`), console[U.get(a)](n, ...i), a & c.ERROR && (console.group(), console.trace(), console.groupEnd());
  }
}
const H = /* @__PURE__ */ new Map();
function Ue(t) {
  const e = new Be(t);
  return H.set(t, e), e;
}
function ke(t) {
  return H.has(t) ? H.get(t) : Ue(t);
}
const De = K({
  name: "LayerLabelsEdit",
  title: "Layer - Labels Editor",
  components: {
    VcsSelect: ve,
    VcsTextField: te,
    VcsLabel: q,
    VCol: oe,
    VRow: ne,
    VForm: Oe,
    VContainer: se,
    VcsFormButton: ye,
    VDivider: Se,
    VCard: Ee,
    VcsFormSection: ae
  },
  props: {
    modelValue: {
      type: Object,
      required: !0
    }
  },
  setup(t) {
    const e = le("vcsApp"), a = g(structuredClone(t.modelValue)), i = g(!1), n = g(
      [...e.layers].filter((s) => s[ee] !== me).map((s) => s.name)
    ), u = () => {
      i.value = !!a.value.layerName;
    };
    return P(a, u, { deep: !0 }), {
      localLayerLabelsOptions: a,
      layerLocal: n,
      isFormValid: i,
      validateForm: u
    };
  }
}), Me = { class: "d-flex pa-2" };
function We(t, e, a, i, n, u) {
  const s = m("VcsLabel"), r = m("v-col"), p = m("VcsSelect"), y = m("v-row"), b = m("VcsTextField"), L = m("v-container"), h = m("v-form"), $ = m("v-divider"), I = m("VcsFormButton"), C = m("VcsFormSection"), v = m("v-card");
  return D(), M(v, null, {
    default: o(() => [
      l(C, null, {
        default: o(() => [
          l(
            h,
            { ref: "form" },
            {
              default: o(() => [
                l(L, { class: "px-2 pt-0 pb-2" }, {
                  default: o(() => [
                    l(y, { "no-gutters": "" }, {
                      default: o(() => [
                        l(r, { cols: "6" }, {
                          default: o(() => [
                            l(s, { "html-for": "layerName" }, {
                              default: o(() => [
                                w(
                                  N(t.$st("layerSlider.configEditor.layerName")),
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
                        l(r, { cols: "6" }, {
                          default: o(() => [
                            l(p, {
                              items: t.layerLocal,
                              placeholder: "layer",
                              modelValue: t.localLayerLabelsOptions.layerName,
                              "onUpdate:modelValue": e[0] || (e[0] = (T) => t.localLayerLabelsOptions.layerName = T),
                              onChange: t.validateForm
                            }, null, 8, ["items", "modelValue", "onChange"])
                          ]),
                          _: 1
                          /* STABLE */
                        })
                      ]),
                      _: 1
                      /* STABLE */
                    }),
                    l(y, { "no-gutters": "" }, {
                      default: o(() => [
                        l(r, { cols: "6" }, {
                          default: o(() => [
                            l(s, { "html-for": "labelName" }, {
                              default: o(() => [
                                w(
                                  N(t.$st("layerSlider.configEditor.labelName")),
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
                        l(r, { cols: "6" }, {
                          default: o(() => [
                            l(b, {
                              placeholder: "label",
                              modelValue: t.localLayerLabelsOptions.label,
                              "onUpdate:modelValue": e[1] || (e[1] = (T) => t.localLayerLabelsOptions.label = T)
                            }, null, 8, ["modelValue"])
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
            },
            512
            /* NEED_PATCH */
          ),
          l($),
          be("div", Me, [
            l(I, {
              onClick: e[2] || (e[2] = (T) => t.$emit("close"))
            }, {
              default: o(() => [
                w(
                  N(t.$st("components.close")),
                  1
                  /* TEXT */
                )
              ]),
              _: 1
              /* STABLE */
            }),
            l(I, {
              class: "justify-end relativePosition",
              disabled: !t.isFormValid,
              onClick: e[3] || (e[3] = () => {
                t.$emit("update:modelValue", t.localLayerLabelsOptions), t.$emit("close");
              }),
              variant: "filled"
            }, {
              default: o(() => [
                w(
                  N(t.$st("components.apply")),
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
      })
    ]),
    _: 1
    /* STABLE */
  });
}
const Ge = /* @__PURE__ */ J(De, [["render", We]]), He = K({
  name: "LayerSliderConfigEditor",
  title: "layerSlider.name",
  components: {
    VDialog: Te,
    VcsList: fe,
    VcsFormSection: ae,
    VRow: ne,
    VcsLabel: q,
    AbstractConfigEditor: ge,
    VcsTextField: te,
    VCol: oe,
    LayerLabelsEdit: Ge,
    VContainer: se
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
    var C, v, T, z, Y, Q, X, Z;
    const e = g(t.getConfig()), a = Le().proxy, i = g(), n = g(), u = g(), s = g(), r = g(), p = g(), y = g(), b = g(), L = g(), h = g(void 0);
    n.value = e.value.name, u.value = e.value.title, s.value = (v = (C = e.value.windowOptions) == null ? void 0 : C.position) == null ? void 0 : v.height, r.value = (z = (T = e.value.windowOptions) == null ? void 0 : T.position) == null ? void 0 : z.width, p.value = (Q = (Y = e.value.windowOptions) == null ? void 0 : Y.state) == null ? void 0 : Q.headerTitle, y.value = (Z = (X = e.value.windowOptions) == null ? void 0 : X.state) == null ? void 0 : Z.headerIcon, e.value.labels || (e.value.labels = []), L.value = e.value.labels, e.value.layerNames || (e.value.layerNames = []), b.value = e.value.layerNames;
    const $ = () => {
      e.value && (e.value.name = n.value, e.value.title = u.value, e.value.windowOptions || (e.value.windowOptions = { position: {} }), e.value.windowOptions.position || (e.value.windowOptions.position = {}), e.value.windowOptions.position.height = s.value, e.value.windowOptions.position.width = r.value, e.value.windowOptions.state || (e.value.windowOptions.state = {}), e.value.windowOptions.state.headerTitle = p.value, e.value.windowOptions.state.headerIcon = y.value, e.value.labels = W(L.value), e.value.layerNames = W(b.value), t.setConfig(W(e.value)));
    };
    function I(d, f) {
      var V, E;
      return {
        name: d,
        title: `${d} (${((V = e.value) == null ? void 0 : V.labels[f]) || "no Label"})`,
        label: (E = e.value) == null ? void 0 : E.labels[f],
        actions: [
          {
            name: "edit",
            icon: "$vcsEdit",
            callback() {
              i.value = f;
            }
          },
          {
            name: "linkButton.editor.remove",
            icon: "$vcsTrashCan",
            callback() {
              var R, A, _;
              (R = e.value) != null && R.layerNames && (e.value.layerNames.splice(f, 1), e.value.labels.splice(f, 1), h.value = (_ = (A = e.value) == null ? void 0 : A.layerNames) == null ? void 0 : _.map(I));
            }
          }
        ]
      };
    }
    return P(
      e,
      (d) => {
        d != null && d.layerNames ? h.value = d.layerNames.map(
          (f, V) => I(f, V)
        ) : h.value = [];
      },
      { immediate: !0 }
    ), {
      itemName: n,
      itemTitle: u,
      itemHeight: s,
      itemWidth: r,
      itemHeaderTitle: p,
      itemHeaderIcon: y,
      itemLabels: L,
      itemLayerNames: b,
      apply: $,
      localConfig: e,
      listItems: h,
      headerActions: [
        {
          name: "linkButton.editor.add",
          icon: "$vcsPlus",
          callback() {
            var d;
            (d = e.value) != null && d.layerNames ? (h.value = e.value.layerNames.map(I), i.value = e.value.layerNames.push("empty Layer") - 1) : ke(j).error("no local config available");
          }
        }
      ],
      layerLabelOptions: ie({
        get() {
          var d, f, V, E;
          if (i.value !== void 0)
            return {
              layerName: (f = (d = e.value) == null ? void 0 : d.layerNames) == null ? void 0 : f[i.value],
              label: (E = (V = e.value) == null ? void 0 : V.labels) == null ? void 0 : E[i.value]
            };
        },
        set(d) {
          var f;
          d && i.value !== void 0 && ((f = e.value) != null && f.layerNames) ? (e.value.layerNames[i.value] = d.layerName, e.value.labels[i.value] = d.label, h.value = e.value.layerNames.map(I)) : i.value = void 0;
        }
      }),
      move({
        item: d,
        targetIndex: f
      }) {
        var V, E, R, A;
        if (h.value) {
          let _ = f;
          _ = _ >= 0 ? _ : 0, _ = _ < h.value.length ? _ : h.value.length - 1;
          const k = h.value.indexOf(d);
          k !== _ && (h.value.splice(k, 1), h.value.splice(_, 0, d), (V = e.value) == null || V.layerNames.splice(k, 1), (E = e.value) == null || E.layerNames.splice(_, 0, d.name), (R = e.value) == null || R.labels.splice(k, 1), (A = e.value) == null || A.labels.splice(_, 0, d.label));
        }
      },
      ruleName: (d) => !!d || a.$st("layerSlider.error.itemName"),
      ruleTitle: (d) => !!d || a.$st("layerSlider.error.itemName")
    };
  }
});
function qe(t, e, a, i, n, u) {
  const s = m("VcsLabel"), r = m("v-col"), p = m("VcsTextField"), y = m("v-row"), b = m("v-container"), L = m("VcsList"), h = m("LayerLabelsEdit"), $ = m("v-dialog"), I = m("VcsFormSection"), C = m("AbstractConfigEditor");
  return t.localConfig ? (D(), M(C, Ve({
    key: 0,
    onSubmit: t.apply
  }, { ...t.$attrs, ...t.$props }), {
    default: o(() => [
      l(b, { class: "py-0 px-1" }, {
        default: o(() => [
          l(y, { "no-gutters": "" }, {
            default: o(() => [
              l(r, { cols: "4" }, {
                default: o(() => [
                  l(s, {
                    "html-for": "nameInput",
                    required: ""
                  }, {
                    default: o(() => [
                      w(
                        N(t.$st("layerSlider.configEditor.itemName")),
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
              l(r, { cols: "8" }, {
                default: o(() => [
                  l(p, {
                    "hide-details": "",
                    modelValue: t.itemName,
                    "onUpdate:modelValue": e[0] || (e[0] = (v) => t.itemName = v),
                    error: !t.itemName,
                    rules: [t.ruleName],
                    required: ""
                  }, null, 8, ["modelValue", "error", "rules"])
                ]),
                _: 1
                /* STABLE */
              })
            ]),
            _: 1
            /* STABLE */
          }),
          l(y, { "no-gutters": "" }, {
            default: o(() => [
              l(r, { cols: "4" }, {
                default: o(() => [
                  l(s, {
                    "html-for": "titleInput",
                    required: ""
                  }, {
                    default: o(() => [
                      w(
                        N(t.$st("layerSlider.configEditor.itemTitle")),
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
              l(r, { cols: "8" }, {
                default: o(() => [
                  l(p, {
                    "hide-details": "",
                    modelValue: t.itemTitle,
                    "onUpdate:modelValue": e[1] || (e[1] = (v) => t.itemTitle = v),
                    error: !t.itemTitle,
                    rules: [t.ruleTitle],
                    required: ""
                  }, null, 8, ["modelValue", "error", "rules"])
                ]),
                _: 1
                /* STABLE */
              })
            ]),
            _: 1
            /* STABLE */
          }),
          l(y, { "no-gutters": "" }, {
            default: o(() => [
              l(r, { cols: "4" }, {
                default: o(() => [
                  l(s, { "html-for": "widthInput" }, {
                    default: o(() => [
                      w(
                        N(t.$st("layerSlider.configEditor.itemWidth")),
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
              l(r, { cols: "8" }, {
                default: o(() => [
                  l(p, {
                    type: "number",
                    step: "10",
                    "hide-details": "",
                    modelValue: t.itemWidth,
                    "onUpdate:modelValue": e[2] || (e[2] = (v) => t.itemWidth = v)
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
                /* STABLE */
              })
            ]),
            _: 1
            /* STABLE */
          }),
          l(y, { "no-gutters": "" }, {
            default: o(() => [
              l(r, { cols: "4" }, {
                default: o(() => [
                  l(s, { "html-for": "heightInput" }, {
                    default: o(() => [
                      w(
                        N(t.$st("layerSlider.configEditor.itemHeight")),
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
              l(r, { cols: "8" }, {
                default: o(() => [
                  l(p, {
                    type: "number",
                    step: "10",
                    "hide-details": "",
                    modelValue: t.itemHeight,
                    "onUpdate:modelValue": e[3] || (e[3] = (v) => t.itemHeight = v)
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
                /* STABLE */
              })
            ]),
            _: 1
            /* STABLE */
          }),
          l(y, { "no-gutters": "" }, {
            default: o(() => [
              l(r, { cols: "4" }, {
                default: o(() => [
                  l(s, { "html-for": "headerTitleInput" }, {
                    default: o(() => [
                      w(
                        N(t.$st("layerSlider.configEditor.headerTitleInput")),
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
              l(r, { cols: "8" }, {
                default: o(() => [
                  l(p, {
                    "hide-details": "",
                    modelValue: t.itemHeaderTitle,
                    "onUpdate:modelValue": e[4] || (e[4] = (v) => t.itemHeaderTitle = v)
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
                /* STABLE */
              })
            ]),
            _: 1
            /* STABLE */
          }),
          l(y, { "no-gutters": "" }, {
            default: o(() => [
              l(r, { cols: "4" }, {
                default: o(() => [
                  l(s, { "html-for": "headerIconInput" }, {
                    default: o(() => [
                      w(
                        N(t.$st("layerSlider.configEditor.headerIconInput")),
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
              l(r, { cols: "8" }, {
                default: o(() => [
                  l(p, {
                    "hide-details": "",
                    modelValue: t.itemHeaderIcon,
                    "onUpdate:modelValue": e[5] || (e[5] = (v) => t.itemHeaderIcon = v)
                  }, null, 8, ["modelValue"])
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
      l(I, {
        heading: "layerSlider.configEditor.heading",
        "start-open": !0,
        "header-actions": t.headerActions
      }, {
        default: o(() => [
          l(L, {
            items: t.listItems,
            draggable: !0,
            onItemMoved: t.move,
            "show-title": !1
          }, null, 8, ["items", "onItemMoved"]),
          t.layerLabelOptions ? (D(), M($, {
            key: 0,
            "model-value": !0,
            width: "400",
            persistent: !0
          }, {
            default: o(() => [
              l(h, {
                modelValue: t.layerLabelOptions,
                "onUpdate:modelValue": e[6] || (e[6] = (v) => t.layerLabelOptions = v),
                onClose: e[7] || (e[7] = (v) => t.layerLabelOptions = void 0)
              }, null, 8, ["modelValue"])
            ]),
            _: 1
            /* STABLE */
          })) : x("v-if", !0)
        ]),
        _: 1
        /* STABLE */
      }, 8, ["header-actions"])
    ]),
    _: 1
    /* STABLE */
  }, 16, ["onSubmit"])) : x("v-if", !0);
}
const Ke = /* @__PURE__ */ J(He, [["render", qe]]);
function Qe() {
  return {
    get name() {
      return j;
    },
    get version() {
      return Ce;
    },
    get mapVersion() {
      return $e;
    },
    initialize() {
      return Promise.resolve();
    },
    onVcsAppMounted(t) {
      t.contentTreeClassRegistry.registerClass(
        this[ee] || t.dynamicModuleId,
        G.className,
        G
      );
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
      return [
        {
          component: Ke,
          title: "layerSlider.name",
          collectionName: "contentTree",
          itemName: G.className
        }
      ];
    },
    i18n: {
      de: {
        layerSlider: {
          title: "Schieberegler",
          name: "Ebenen Schieberegler Editor",
          openTooltip: "Ebenen Schieberegler",
          error: {
            itemTitle: "Bitte geben Sie einen Title an",
            itemName: "Bitte geben Sie einen Namen an"
          },
          configEditor: {
            itemName: "Name (ID)",
            itemTitle: "Titel",
            itemWidth: "Breite",
            itemHeight: "Höhe",
            headerTitleInput: "Schieberegler Titel",
            headerIconInput: "Schieberegler Icon",
            heading: "Ebenenname (Label)",
            labelName: "Labelname",
            layerName: "Ebenenname"
          }
        }
      },
      en: {
        layerSlider: {
          title: "Slider",
          name: "Layer Slider Editor",
          openTooltip: "Layer Slider",
          error: {
            itemTitle: "Please enter a title",
            itemName: "Please enter a name"
          },
          configEditor: {
            itemName: "Name (ID)",
            itemTitle: "Title",
            itemWidth: "Width",
            itemHeight: "Height",
            headerTitleInput: "Slider Title",
            headerIconInput: "Slider Icon",
            heading: "Layer Name (Label)",
            labelName: "Label Name",
            layerName: "Layer Name"
          }
        }
      }
    },
    destroy() {
    }
  };
}
export {
  Qe as default
};
