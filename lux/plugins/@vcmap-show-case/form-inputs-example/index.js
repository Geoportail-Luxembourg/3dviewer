
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
} await loadCss('data:text/css;base64,bGFiZWxbZGF0YS12LTYxMTJlOGI5XXtmb250LXNpemU6MTJweH0K');import { resolveComponent as m, createBlock as X, openBlock as F, withCtx as t, createVNode as e, createElementVNode as u, createTextVNode as c, toDisplayString as p, normalizeClass as G, createElementBlock as M, inject as Q, ref as _, watch as W, pushScopeId as $, popScopeId as ee, reactive as O } from "../../../assets/vue.js";
import { VcsSlider as te, VcsDatePicker as le, VcsCoordinate as ne, VcsChipArrayInput as ae, VcsTextArea as ie, VcsLabeledSlider as de, VcsLabel as se, VcsFormSection as oe, VcsFormattedNumber as ue, VcsRadio as re, VcsCheckbox as me, VcsFileInput as ce, VcsTextField as pe, VcsSelect as fe, VcsFormButton as be, createToggleAction as ge, WindowSlot as Ie, ButtonLocation as Ve } from "../../../assets/ui.js";
import { VIcon as xe, VContainer as _e, VCol as he, VRow as ve, VForm as Se } from "../../../assets/vuetify.js";
const r = {
  ERROR: 2,
  WARN: 4,
  INFO: 8,
  DEBUG: 16
}, I = {
  ERROR: 0,
  WARN: 0,
  INFO: 0,
  DEBUG: 0
};
I.ERROR = r.ERROR | r.WARN | r.INFO | r.DEBUG;
I.WARN = r.WARN | r.INFO | r.DEBUG;
I.INFO = r.INFO | r.DEBUG;
I.DEBUG = r.DEBUG;
const y = {
  logLevel: r.INFO
}, E = /* @__PURE__ */ new Map();
E.set(r.ERROR, "error");
E.set(r.WARN, "warn");
E.set(r.INFO, "info");
E.set(r.DEBUG, "log");
class ye {
  /**
   * @param {string=} className
   */
  constructor(l) {
    this.className = l, this.deprecations = /* @__PURE__ */ new Map();
  }
  /**
   * Logs an error message
   * @param {string} msg The message to log.
   * @param {...any} optArgs
   */
  error(l, ...a) {
    y.logLevel & I.ERROR && this._log(String(l), r.ERROR, a);
  }
  /**
   * Logs a warning message
   * @param {string} msg The message to log.
   * @param {...any} optArgs
   */
  warning(l, ...a) {
    y.logLevel & I.WARN && this._log(String(l), r.WARN, a);
  }
  /**
   * Deprecate a function. deprecations are stored on the logger
   * @param {string} functionName
   * @param {string=} alternativeFunctionName
   */
  deprecate(l, a) {
    const n = String(l), g = a ? String(a) : null;
    if (!this.deprecations.has(n)) {
      this.deprecations.set(n, g || null);
      let h = `${n} has been deprecated and will be removed`;
      g && (h = `${h}. ${g}`), this.warning(h);
    }
  }
  /**
   * Logs an info message
   * @param {string} msg The message to log.
   * @param {...any} optArgs
   */
  info(l, ...a) {
    y.logLevel & I.INFO && this._log(String(l), r.INFO, a);
  }
  /**
   * Logs a debug message
   * @param {string} msg The message to log.
   * @param {...any} optArgs
   */
  debug(l, ...a) {
    y.logLevel & I.DEBUG && this._log(String(l), r.DEBUG, a);
  }
  /**
   * Alias for debug
   * @param {string} msg The message to log.
   * @param {...any} optArgs
   */
  log(l, ...a) {
    y.logLevel & I.DEBUG && this._log(String(l), r.DEBUG, a);
  }
  /**
   * Logs a message
   * @param {string} msg The message to log.
   * @param {LOG_LEVEL} level
   * @param {Array} optArgs
   * @private
   */
  _log(l, a, n) {
    let g = l;
    this.className && (g = `[${this.className}] ${g}`), console[E.get(a)](g, ...n), a & r.ERROR && (console.group(), console.trace(), console.groupEnd());
  }
}
const C = /* @__PURE__ */ new Map();
function Te(s) {
  const l = new ye(s);
  return C.set(s, l), l;
}
function Ee(s) {
  return C.has(s) ? C.get(s) : Te(s);
}
const we = "@vcmap-show-case/form-inputs-example", Ae = "1.0.0", Ne = "^6.0", x = {
  name: we,
  version: Ae,
  mapVersion: Ne
}, Fe = "form-inputs-example", Re = ["A", "B", "C", "D"], Oe = "myInitialText", T = {
  name: Fe,
  selectOptions: Re,
  initialTextInput: Oe
};
function k(s) {
  return /\D+/.test(s) || `Invalid text: ${s}`;
}
function z(s, l) {
  return l === "B" ? s === "test" || `input ${s} must be "test"` : !0;
}
function Ce(s) {
  return s > 10 ? "Input must be lower 10" : !0;
}
function P(s) {
  return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(s) || "Invalid e-mail.";
}
const ke = (s, l) => {
  const a = s.__vccOpts || s;
  for (const [n, g] of l)
    a[n] = g;
  return a;
}, Ue = {
  name: "FormInputsExample",
  components: {
    VcsFormButton: be,
    VcsSelect: fe,
    VcsTextField: pe,
    VcsFileInput: ce,
    VcsCheckbox: me,
    VcsRadio: re,
    VcsFormattedNumber: ue,
    VcsFormSection: oe,
    VcsLabel: se,
    VcsLabeledSlider: de,
    VcsTextArea: ie,
    VcsChipArrayInput: ae,
    VcsCoordinate: ne,
    VForm: Se,
    VRow: ve,
    VCol: he,
    VContainer: _e,
    VcsDatePicker: le,
    VcsSlider: te,
    VIcon: xe
  },
  props: {
    actions: {
      type: Array,
      required: !0
    },
    disabled: {
      type: Boolean,
      required: !0
    }
  },
  setup() {
    const l = Q("vcsApp").plugins.getByKey(x.name), a = _(!0);
    W(l.state, () => {
      a.value = !0;
    });
    const n = _();
    return {
      // no object-destruction of reactive objects! or use toRef()
      state: l.state,
      // do not put the whole config here, since it would become reactive
      selectOptions: l.config.selectOptions,
      form: n,
      isValid: _(!0),
      isValidText: k,
      conditionalTest: z,
      arrayTest: Ce,
      isValidEmail: P,
      newUpdate: a,
      resetState() {
        l.resetState(), n.value.resetValidation();
      },
      validate() {
        n.value.validate();
      },
      logState() {
        console.log(l.getSerializedState()), a.value = !1;
      }
    };
  }
}, De = (s) => ($("data-v-6112e8b9"), s = s(), ee(), s), Be = { key: 0 }, Le = { key: 1 }, Ge = { class: "pa-2 text--primary" }, Me = /* @__PURE__ */ De(() => /* @__PURE__ */ u("h3", null, "This is a custom header using header slot", -1)), We = { class: "d-flex gc-2 px-2 pt-2 pb-1" }, ze = { class: "d-flex gc-2" }, Pe = { class: "d-flex gc-2 w-full justify-end" };
function qe(s, l, a, n, g, h) {
  const b = m("VcsLabel"), d = m("v-col"), f = m("VcsSelect"), o = m("v-row"), V = m("VcsTextField"), w = m("VcsCheckbox"), U = m("VcsChipArrayInput"), q = m("VcsTextArea"), j = m("VcsFileInput"), Z = m("VcsDatePicker"), v = m("v-container"), S = m("VcsFormSection"), J = m("VcsSlider"), D = m("VcsLabeledSlider"), A = m("VcsFormattedNumber"), Y = m("VcsCoordinate"), B = m("VcsRadio"), H = m("v-icon"), N = m("VcsFormButton"), K = m("v-form");
  return F(), X(K, {
    modelValue: n.isValid,
    "onUpdate:modelValue": l[22] || (l[22] = (i) => n.isValid = i),
    ref: "form"
  }, {
    default: t(() => [
      e(S, {
        heading: "VcsFormSection Select & Text Inputs",
        expandable: "",
        "start-open": "",
        "header-actions": a.actions,
        "action-button-list-overflow-count": 4,
        "start-help-open": !0
      }, {
        help: t(() => [
          u("ol", null, [
            u("li", null, p(s.$t("form-inputs-example.help1")) + ":", 1),
            u("span", null, p(s.$t("form-inputs-example.help1desc")), 1),
            u("li", null, p(s.$t("form-inputs-example.help2")) + ":", 1),
            u("span", null, p(s.$t("form-inputs-example.help2desc")), 1),
            u("li", null, p(s.$t("form-inputs-example.help3")) + ":", 1),
            u("span", null, p(s.$t("form-inputs-example.help3desc")), 1)
          ])
        ]),
        default: t(() => [
          e(v, { class: "py-0 px-1" }, {
            default: t(() => [
              e(o, { "no-gutters": "" }, {
                default: t(() => [
                  e(d, null, {
                    default: t(() => [
                      e(b, {
                        disabled: a.disabled,
                        "html-for": "selectInput",
                        tooltip: "labelTooltip"
                      }, {
                        default: t(() => [
                          c(p(s.$t("form-inputs-example.select")), 1)
                        ]),
                        _: 1
                      }, 8, ["disabled"])
                    ]),
                    _: 1
                  }),
                  e(d, null, {
                    default: t(() => [
                      e(f, {
                        disabled: a.disabled,
                        id: "selectInput",
                        loading: "primary",
                        items: n.selectOptions,
                        rules: [(i) => i !== "D" || "D is not allowed"],
                        modelValue: n.state.selected,
                        "onUpdate:modelValue": l[0] || (l[0] = (i) => n.state.selected = i)
                      }, null, 8, ["disabled", "items", "rules", "modelValue"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              e(o, { "no-gutters": "" }, {
                default: t(() => [
                  e(d, { cols: "6" }, {
                    default: t(() => [
                      e(b, {
                        disabled: a.disabled,
                        "html-for": "conditionalInput"
                      }, {
                        default: t(() => [
                          c(" Conditional Input with long label ")
                        ]),
                        _: 1
                      }, 8, ["disabled"])
                    ]),
                    _: 1
                  }),
                  e(d, null, {
                    default: t(() => [
                      e(V, {
                        disabled: a.disabled,
                        id: "conditionalInput",
                        clearable: "",
                        rules: [
                          n.conditionalTest(n.state.conditionalInput, n.state.selected)
                        ],
                        modelValue: n.state.conditionalInput,
                        "onUpdate:modelValue": l[1] || (l[1] = (i) => n.state.conditionalInput = i),
                        placeholder: "conditional"
                      }, null, 8, ["disabled", "rules", "modelValue"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              e(o, { "no-gutters": "" }, {
                default: t(() => [
                  e(d, null, {
                    default: t(() => [
                      e(w, {
                        disabled: a.disabled,
                        label: "Checkbox"
                      }, null, 8, ["disabled"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              e(o, { "no-gutters": "" }, {
                default: t(() => [
                  e(d, null, {
                    default: t(() => [
                      e(b, {
                        disabled: a.disabled,
                        "html-for": "arrayInput"
                      }, {
                        default: t(() => [
                          c(" Array Input ")
                        ]),
                        _: 1
                      }, 8, ["disabled"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              e(o, { "no-gutters": "" }, {
                default: t(() => [
                  e(d, null, {
                    default: t(() => [
                      e(U, {
                        disabled: a.disabled,
                        id: "arrayInput",
                        type: "number",
                        modelValue: n.state.arrayInput,
                        "onUpdate:modelValue": l[2] || (l[2] = (i) => n.state.arrayInput = i),
                        rules: [n.arrayTest]
                      }, null, 8, ["disabled", "modelValue", "rules"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              e(o, { "no-gutters": "" }, {
                default: t(() => [
                  e(d, null, {
                    default: t(() => [
                      e(U, {
                        disabled: a.disabled,
                        id: "arrayInput",
                        modelValue: n.state.arrayInputString,
                        "onUpdate:modelValue": l[3] || (l[3] = (i) => n.state.arrayInputString = i),
                        column: ""
                      }, null, 8, ["disabled", "modelValue"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              e(o, { "no-gutters": "" }, {
                default: t(() => [
                  e(d, null, {
                    default: t(() => [
                      e(V, {
                        disabled: a.disabled,
                        modelValue: n.state.initialTextInput,
                        "onUpdate:modelValue": l[4] || (l[4] = (i) => n.state.initialTextInput = i),
                        rules: [n.isValidText],
                        loading: n.state.initialTextInput === "myInitialText" ? "primary" : void 0,
                        "error-messages": n.state.checkboxInput ? void 0 : ["manual error message depending on checkbox"]
                      }, null, 8, ["disabled", "modelValue", "rules", "loading", "error-messages"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              e(o, { "no-gutters": "" }, {
                default: t(() => [
                  e(d, null, {
                    default: t(() => [
                      e(q, {
                        disabled: a.disabled,
                        rules: [(i) => !!i || "text area must not be empty"],
                        placeholder: "This is a text area",
                        tooltip: "This is a tooltip",
                        rows: "2"
                      }, null, 8, ["disabled", "rules"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              e(o, { "no-gutters": "" }, {
                default: t(() => [
                  e(d, null, {
                    default: t(() => [
                      e(b, {
                        disabled: a.disabled,
                        "html-for": "emailInput",
                        required: ""
                      }, {
                        default: t(() => [
                          c(" Email ")
                        ]),
                        _: 1
                      }, 8, ["disabled"])
                    ]),
                    _: 1
                  }),
                  e(d, null, {
                    default: t(() => [
                      e(V, {
                        disabled: a.disabled,
                        id: "emailInput",
                        type: "email",
                        rules: [n.isValidEmail],
                        modelValue: n.state.email,
                        "onUpdate:modelValue": l[5] || (l[5] = (i) => n.state.email = i),
                        placeholder: "Email address"
                      }, null, 8, ["disabled", "rules", "modelValue"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              e(o, { "no-gutters": "" }, {
                default: t(() => [
                  e(d, null, {
                    default: t(() => [
                      e(b, {
                        disabled: a.disabled,
                        "html-for": "prependedInput"
                      }, {
                        default: t(() => [
                          c(" String With Icon ")
                        ]),
                        _: 1
                      }, 8, ["disabled"])
                    ]),
                    _: 1
                  }),
                  e(d, null, {
                    default: t(() => [
                      e(V, {
                        disabled: a.disabled,
                        id: "prependedInput",
                        "prepend-icon": "mdi-map-marker",
                        modelValue: n.state.prependedInput,
                        "onUpdate:modelValue": l[6] || (l[6] = (i) => n.state.prependedInput = i),
                        label: "text"
                      }, null, 8, ["disabled", "modelValue"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              e(o, { "no-gutters": "" }, {
                default: t(() => [
                  e(d, null, {
                    default: t(() => [
                      e(b, {
                        disabled: a.disabled,
                        "html-for": "fileInput"
                      }, {
                        default: t(() => [
                          c(" File input ")
                        ]),
                        _: 1
                      }, 8, ["disabled"])
                    ]),
                    _: 1
                  }),
                  e(d, null, {
                    default: t(() => [
                      e(j, {
                        disabled: a.disabled,
                        id: "fileInput",
                        multiple: "",
                        tooltip: "Click to select a file.",
                        modelValue: n.state.files,
                        "onUpdate:modelValue": l[7] || (l[7] = (i) => n.state.files = i)
                      }, null, 8, ["disabled", "modelValue"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              e(o, { "no-gutters": "" }, {
                default: t(() => [
                  e(d, null, {
                    default: t(() => [
                      e(b, {
                        disabled: a.disabled,
                        "html-for": "dateInput"
                      }, {
                        default: t(() => [
                          c(" Date ")
                        ]),
                        _: 1
                      }, 8, ["disabled"])
                    ]),
                    _: 1
                  }),
                  e(d, null, {
                    default: t(() => [
                      e(Z, {
                        disabled: a.disabled,
                        id: "dateInput"
                      }, null, 8, ["disabled"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["header-actions"]),
      e(S, {
        heading: "VcsFormSection Number Inputs",
        "help-text": "form-inputs-example.help"
      }, {
        default: t(() => [
          e(v, { class: "py-0 px-1" }, {
            default: t(() => [
              e(o, { "no-gutters": "" }, {
                default: t(() => [
                  e(d, null, {
                    default: t(() => [
                      e(b, {
                        disabled: a.disabled,
                        "html-for": "numberInput"
                      }, {
                        default: t(() => [
                          c(" NumberInput ")
                        ]),
                        _: 1
                      }, 8, ["disabled"])
                    ]),
                    _: 1
                  }),
                  e(d, null, {
                    default: t(() => [
                      e(V, {
                        disabled: a.disabled,
                        id: "numberInput",
                        type: "number",
                        step: "1",
                        unit: "cm",
                        modelValue: n.state.numberInput,
                        "onUpdate:modelValue": l[8] || (l[8] = (i) => n.state.numberInput = i),
                        modelModifiers: { number: !0 },
                        "show-spin-buttons": ""
                      }, null, 8, ["disabled", "modelValue"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              e(o, {
                "no-gutters": "",
                class: "align-center"
              }, {
                default: t(() => [
                  e(d, null, {
                    default: t(() => [
                      e(b, {
                        disabled: a.disabled,
                        "html-for": "sliderInput"
                      }, {
                        default: t(() => [
                          c(" Slider ")
                        ]),
                        _: 1
                      }, 8, ["disabled"])
                    ]),
                    _: 1
                  }),
                  e(d, null, {
                    default: t(() => [
                      e(J, {
                        disabled: a.disabled,
                        id: "sliderInput",
                        type: "number",
                        step: "1",
                        modelValue: n.state.numberInput,
                        "onUpdate:modelValue": l[9] || (l[9] = (i) => n.state.numberInput = i),
                        modelModifiers: { number: !0 }
                      }, null, 8, ["disabled", "modelValue"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              e(D, {
                label: "Labeled Slider",
                modelValue: n.state.numberInput,
                "onUpdate:modelValue": l[10] || (l[10] = (i) => n.state.numberInput = i),
                modelModifiers: { number: !0 },
                disabled: a.disabled,
                unit: "cm",
                min: 0,
                max: 100,
                step: 1e-3
              }, null, 8, ["modelValue", "disabled"]),
              e(D, {
                label: "Labeled Slider with Input",
                modelValue: n.state.numberInput,
                "onUpdate:modelValue": l[11] || (l[11] = (i) => n.state.numberInput = i),
                modelModifiers: { number: !0 },
                disabled: a.disabled,
                unit: "cm",
                min: 0,
                max: 100,
                step: 1e-3,
                "allow-text-input": ""
              }, null, 8, ["modelValue", "disabled"]),
              e(o, { "no-gutters": "" }, {
                default: t(() => [
                  e(d, null, {
                    default: t(() => [
                      e(b, {
                        disabled: a.disabled,
                        "html-for": "formattedNumber"
                      }, {
                        default: t(() => [
                          c(" VcsFormattedNumber ")
                        ]),
                        _: 1
                      }, 8, ["disabled"])
                    ]),
                    _: 1
                  }),
                  e(d, { class: "d-flex justify-end" }, {
                    default: t(() => [
                      e(A, {
                        disabled: a.disabled,
                        id: "formattedNumber",
                        value: n.state.numberInput,
                        unit: "cm",
                        "fraction-digits": 1
                      }, null, 8, ["disabled", "value"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              e(o, {
                "no-gutters": "",
                class: "gc-2"
              }, {
                default: t(() => [
                  e(d, null, {
                    default: t(() => [
                      e(A, {
                        disabled: a.disabled,
                        id: "formattedNumber",
                        value: n.state.numberInput,
                        prefix: "X",
                        unit: "cm",
                        "fraction-digits": 1
                      }, null, 8, ["disabled", "value"])
                    ]),
                    _: 1
                  }),
                  e(d, null, {
                    default: t(() => [
                      e(A, {
                        disabled: a.disabled,
                        id: "formattedNumber",
                        value: n.state.numberInput,
                        prefix: "Y",
                        unit: "cm",
                        "fraction-digits": 1
                      }, null, 8, ["disabled", "value"])
                    ]),
                    _: 1
                  }),
                  e(d, null, {
                    default: t(() => [
                      e(A, {
                        disabled: a.disabled,
                        id: "formattedNumber",
                        value: n.state.numberInput,
                        prefix: "Z",
                        unit: "cm",
                        "fraction-digits": 1
                      }, null, 8, ["disabled", "value"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              e(Y, {
                disabled: a.disabled,
                modelValue: n.state.arrayInput,
                "onUpdate:modelValue": l[12] || (l[12] = (i) => n.state.arrayInput = i)
              }, null, 8, ["disabled", "modelValue"])
            ]),
            _: 1
          })
        ]),
        _: 1
      }),
      e(S, {
        heading: "VcsFormSection Radio & Checkbox",
        expandable: "",
        "start-open": "",
        disabled: !n.state.checkboxInput
      }, {
        default: t(() => [
          e(v, { class: "py-0 px-1" }, {
            default: t(() => [
              e(o, { "no-gutters": "" }, {
                default: t(() => [
                  e(d, null, {
                    default: t(() => [
                      e(B, {
                        disabled: a.disabled,
                        items: [
                          ...n.selectOptions,
                          {
                            label: "Radio Option E colored",
                            color: "primary",
                            value: "E"
                          }
                        ],
                        modelValue: n.state.selected,
                        "onUpdate:modelValue": l[13] || (l[13] = (i) => n.state.selected = i),
                        rules: [(i) => i !== "D" || "D is not allowed"],
                        inline: ""
                      }, null, 8, ["disabled", "items", "modelValue", "rules"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              e(o, { "no-gutters": "" }, {
                default: t(() => [
                  e(d, null, {
                    default: t(() => [
                      e(b, { disabled: a.disabled }, {
                        default: t(() => [
                          c(" Radio with img label ")
                        ]),
                        _: 1
                      }, 8, ["disabled"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              e(o, { "no-gutters": "" }, {
                default: t(() => [
                  e(d, null, {
                    default: t(() => [
                      e(B, {
                        disabled: a.disabled,
                        modelValue: n.state.selected,
                        "onUpdate:modelValue": l[14] || (l[14] = (i) => n.state.selected = i),
                        items: [
                          { value: "AAAAAAAA", src: "mdi-circle-outline" },
                          { value: "B", src: "mdi-close" },
                          { value: "C", src: "mdi-triangle-outline" },
                          { value: "D", src: "mdi-square-outline" }
                        ],
                        rules: [(i) => i !== "D" || "Square is not allowed"],
                        tooltip: "This is a radio grid",
                        inline: "",
                        "label-position": "top",
                        class: "d-flex justify-center"
                      }, {
                        label: t(({ item: i, error: L }) => [
                          u("figure", null, [
                            e(H, {
                              size: "24",
                              class: G(["d-flex justify-center mx-auto", { "text-error": L }])
                            }, {
                              default: t(() => [
                                c(p(i.src), 1)
                              ]),
                              _: 2
                            }, 1032, ["class"]),
                            u("figcaption", {
                              class: G(["d-flex justify-center", { "text-error": L }])
                            }, p(i.value), 3)
                          ])
                        ]),
                        _: 1
                      }, 8, ["disabled", "modelValue", "rules"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              e(o, { "no-gutters": "" }, {
                default: t(() => [
                  e(d, null, {
                    default: t(() => [
                      e(w, {
                        disabled: a.disabled,
                        id: "checkboxInput",
                        label: "CheckboxInput",
                        tooltip: "This is a checkbox for terms of usage",
                        rules: [
                          () => n.state.checkboxInput || "Please accept our terms of use"
                        ],
                        modelValue: n.state.checkboxInput,
                        "onUpdate:modelValue": l[15] || (l[15] = (i) => n.state.checkboxInput = i)
                      }, null, 8, ["disabled", "rules", "modelValue"])
                    ]),
                    _: 1
                  }),
                  e(d, null, {
                    default: t(() => [
                      e(N, {
                        disabled: a.disabled,
                        "is-active": n.state.checkboxInput,
                        onClick: l[16] || (l[16] = (i) => n.state.checkboxInput = !n.state.checkboxInput),
                        tooltip: "toggle button",
                        color: "warning",
                        "tooltip-position": "right",
                        class: "pt-1"
                      }, {
                        default: t(() => [
                          n.state.checkboxInput ? (F(), M("span", Be, "Active-true")) : (F(), M("span", Le, "Active-false"))
                        ]),
                        _: 1
                      }, 8, ["disabled", "is-active"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["disabled"]),
      e(S, { heading: "VcsFormSection Mixed Inputs" }, {
        header: t(({ heading: i }) => [
          u("article", Ge, [
            c(p(i) + " ", 1),
            Me
          ])
        ]),
        default: t(() => [
          e(v, { class: "py-0 px-1" }, {
            default: t(() => [
              e(o, null, {
                default: t(() => [
                  e(d, { cols: "1" }, {
                    default: t(() => [
                      e(b, {
                        disabled: a.disabled,
                        "html-for": "textInput",
                        class: "text-caption"
                      }, {
                        default: t(() => [
                          c(" 1 ")
                        ]),
                        _: 1
                      }, 8, ["disabled"])
                    ]),
                    _: 1
                  }),
                  e(d, null, {
                    default: t(() => [
                      e(f, {
                        disabled: a.disabled,
                        items: [
                          { value: "one", i18n: "form-inputs-example.numbers.one" },
                          { value: "two", i18n: "form-inputs-example.numbers.two" },
                          { value: "three", i18n: "form-inputs-example.numbers.three" }
                        ],
                        "item-text": (i) => i.i18n,
                        placeholder: "Numbers"
                      }, null, 8, ["disabled", "item-text"])
                    ]),
                    _: 1
                  }),
                  e(d, null, {
                    default: t(() => [
                      e(f, {
                        disabled: a.disabled,
                        items: [
                          { value: "Anna", fullName: "Annabella" },
                          { value: "Bella", fullName: "Belladonna" },
                          { value: "Claudi", fullName: "Claudine" }
                        ],
                        "item-text": (i) => i.fullName,
                        multiple: "",
                        modelValue: n.state.selectedMultiple,
                        "onUpdate:modelValue": l[17] || (l[17] = (i) => n.state.selectedMultiple = i),
                        rules: [
                          (i) => !!i.length || "Please select at least one option."
                        ]
                      }, null, 8, ["disabled", "item-text", "modelValue", "rules"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        _: 1
      }),
      e(S, {
        heading: "Disabled form section",
        expandable: "",
        "start-open": "",
        disabled: !0,
        "header-actions": a.actions,
        "action-button-list-overflow-count": 4
      }, {
        help: t(() => [
          u("ol", null, [
            u("li", null, p(s.$t("form-inputs-example.help1")) + ":", 1),
            u("span", null, p(s.$t("form-inputs-example.help1desc")), 1),
            u("li", null, p(s.$t("form-inputs-example.help2")) + ":", 1),
            u("span", null, p(s.$t("form-inputs-example.help2desc")), 1),
            u("li", null, p(s.$t("form-inputs-example.help3")) + ":", 1),
            u("span", null, p(s.$t("form-inputs-example.help3desc")), 1)
          ])
        ]),
        default: t(() => [
          e(v, { class: "py-0 px-1" }, {
            default: t(() => [
              e(o, { "no-gutters": "" }, {
                default: t(() => [
                  e(d, null, {
                    default: t(() => [
                      e(b, {
                        "html-for": "selectInput2",
                        disabled: ""
                      }, {
                        default: t(() => [
                          c(p(s.$t("form-inputs-example.select")), 1)
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  e(d, null, {
                    default: t(() => [
                      e(f, {
                        id: "selectInput2",
                        items: n.selectOptions,
                        rules: [(i) => i !== "D" || "D is not allowed"],
                        modelValue: n.state.selected,
                        "onUpdate:modelValue": l[18] || (l[18] = (i) => n.state.selected = i),
                        disabled: !0
                      }, null, 8, ["items", "rules", "modelValue"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["header-actions"]),
      u("div", We, [
        u("div", ze, [
          e(N, {
            onClick: l[19] || (l[19] = (i) => n.validate())
          }, {
            default: t(() => [
              c(" Val ")
            ]),
            _: 1
          }),
          e(N, {
            onClick: l[20] || (l[20] = (i) => n.resetState()),
            icon: "$vcsReturn"
          }, {
            default: t(() => [
              c(" Reset ")
            ]),
            _: 1
          })
        ]),
        u("div", Pe, [
          e(N, {
            variant: "filled",
            onClick: l[21] || (l[21] = (i) => n.logState(n.state)),
            disabled: !n.isValid,
            tooltip: "Log current state in console",
            "has-update": n.isValid && n.newUpdate
          }, {
            default: t(() => [
              c(" Log State ")
            ]),
            _: 1
          }, 8, ["disabled", "has-update"])
        ])
      ])
    ]),
    _: 1
  }, 8, ["modelValue"]);
}
const je = /* @__PURE__ */ ke(Ue, [["render", qe], ["__scopeId", "data-v-6112e8b9"]]);
function Ze() {
  const s = _(!1), l = _(!0);
  return { actions: [
    O({
      name: "disabledSelection",
      title: "Changed Disabled",
      icon: s.value ? "mdi-airplane" : "mdi-airplane-off",
      callback() {
        s.value = !s.value, this.icon = s.value ? "mdi-airplane" : "mdi-airplane-off";
      }
    }),
    {
      name: "noIcon",
      title: "another action without icon",
      callback: () => {
      }
    },
    {
      name: "alert",
      icon: "mdi-message-text",
      callback() {
        alert("alert");
      }
    }
  ], disabled: s, showSection: l };
}
function R() {
  return Ee(x.name);
}
function Ke() {
  return T;
}
function Xe(s) {
  const l = {
    // not reactive can be put without using reactive or ref
    nonReactiveProp: "nonReactive",
    // no validation, ref to track config changes; use reactive on nested arrays or objects
    selectOptions: _([
      ...s.selectOptions ?? T.selectOptions
    ]),
    // ref prop with getter setter --> validation
    _initialTextInput: _(T.initialTextInput),
    set initialTextInput(d) {
      const f = k(d);
      f === !0 ? this._initialTextInput.value = d : R().error(
        "Error setting initialTextInput on plugin config:",
        f
      );
    },
    get initialTextInput() {
      return this._initialTextInput;
    }
  };
  s.initialTextInput && (l.initialTextInput = s.initialTextInput);
  const a = {
    selected: l.selectOptions.value[0],
    selectedMultiple: [],
    arrayInput: [1, 2, 3],
    arrayInputString: ["a", "b", "c"],
    conditionalInput: "",
    initialTextInput: l.initialTextInput.value,
    numberInput: 100.156,
    checkboxInput: !0,
    email: "",
    prependedInput: "",
    files: [],
    dateInput: void 0
  }, n = O(structuredClone(a)), g = W(
    [l.selectOptions, l.initialTextInput],
    ([d, f]) => {
      d.includes(n.selected) || (R().error("invalid state", n.selected), n.selected = d[0]), n.initialTextInput = f;
    }
  );
  function h() {
    return { ...n };
  }
  function b(d) {
    const f = {
      conditionalInput: z(
        d.conditionalInput,
        d.selected
      ),
      initialTextInput: k(d.initialTextInput),
      email: P(d.email)
    };
    Object.keys(f).forEach((o) => {
      f[o] !== !0 && (R().warning(
        `Validation failed for state property "${o}":`,
        f[o]
      ), delete d[o]);
    }), Object.assign(n, d);
  }
  return {
    get name() {
      return x.name;
    },
    get version() {
      return x.version;
    },
    get mapVersion() {
      return x.mapVersion;
    },
    config: l,
    state: n,
    resetState: () => Object.assign(n, structuredClone(a)),
    getSerializedState: h,
    setSerializedState: b,
    onVcsAppMounted(d) {
      const { actions: f, disabled: o } = Ze(), { action: V, destroy: w } = ge(
        {
          name: "Form Inputs Example",
          icon: "$vcsHealthCareIndustries",
          title: "form-inputs-example.tooltip"
        },
        {
          id: "formInputsExample",
          component: je,
          slot: Ie.DYNAMIC_LEFT,
          state: {
            headerTitle: "form-inputs-example.title",
            headerIcon: "$vcsCircle",
            headerActions: f,
            headerActionsOverflow: 2,
            infoUrl: "https://vc.systems"
          },
          props: O({
            actions: f,
            disabled: o
          })
        },
        d.windowManager,
        x.name
      );
      d.navbarManager.add(
        { id: "formInputsExample", action: V },
        x.name,
        Ve.TOOL
      ), this._destroyAction = w;
    },
    toJSON: async () => {
      const d = {};
      return d.selectOptions = l.selectOptions, l.initialTextInput !== T.initialTextInput && (d.initialTextInput = T.initialTextInput), d;
    },
    i18n: {
      de: {
        "form-inputs-example": {
          title: "Form Inputs Beispiel",
          select: "Select Feld",
          tooltip: "Form Inputs Beispiel Plugin",
          help: "Geben Sie eine Zahl in das Feld NumberInput ein. VcsFormattedNumber rundet auf eine Dezimalstelle.",
          help1: "Wählen Sie eine Option",
          help1desc: "Wenn 'Option A' gewählt ist, muss der bedingte Input 'test' sein.",
          help2: "Ändern Sie den Wert von 'myInitialText'",
          help2desc: "InitialTextInput bleibt solange im Lade-Status, bis sich der Wert 'myInitialText' ändert.",
          help3: "Geben Sie eine Email Adresse ein",
          help3desc: "Email Adressen werden validiert.",
          numbers: {
            one: "eins",
            two: "zwei",
            three: "drei"
          }
        }
      },
      en: {
        "form-inputs-example": {
          title: "Form Inputs Example",
          select: "Select field",
          tooltip: "Form Inputs Example Plugin",
          help: "Enter a number to the NumberInput field. VcsFormattedNumber rounds to one decimal digit.",
          help1: "Select an option",
          help1desc: "If 'Option A' is chosen, conditional input must be 'test'.",
          help2: "Change 'myInitialText' to some other value",
          help2desc: "InitialTextInput text field stays in loading state, as long as 'myInitialText' is not changed.",
          help3: "Enter an email address.",
          help3desc: "Emails get validated.",
          numbers: {
            one: "one",
            two: "two",
            three: "three"
          }
        }
      }
    },
    destroy() {
      g(), this._destroyAction && (this._destroyAction(), this._destroyAction = null);
    }
  };
}
export {
  Xe as default,
  Ke as getDefaultConfig
};
