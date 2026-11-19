import { VcsSelect as x, VcsFormButton as z, VcsWizardStep as g, VcsWizard as W, createToggleAction as w, WindowSlot as S, ButtonLocation as k } from "../../../assets/ui.js";
import { VForm as y } from "../../../assets/vuetify.js";
import { resolveComponent as d, createBlock as C, openBlock as b, withCtx as n, createVNode as i, createElementVNode as r, createTextVNode as p, ref as u } from "../../../assets/vue.js";
const A = "@vcmap-show-case/wizard-example", T = "1.0.0", B = "^6.0", c = {
  name: A,
  version: T,
  mapVersion: B
}, M = (l, o) => {
  const s = l.__vccOpts || l;
  for (const [e, m] of o)
    s[e] = m;
  return s;
}, E = {
  name: "WizardExample",
  components: {
    VcsWizard: W,
    VcsWizardStep: g,
    VcsFormButton: z,
    VcsSelect: x,
    VForm: y
  },
  setup() {
    const l = u(0), o = u(void 0), s = u(null), e = u(!1), m = {
      second: [
        {
          name: "resetSecondStep",
          title: "Reset step",
          icon: "$vcsReturn",
          callback() {
            o.value = void 0;
          }
        }
      ]
    };
    function f() {
      var a;
      l.value = 0, (a = s.value) == null || a.resetValidation();
    }
    return {
      step: l,
      selection: o,
      actions: m,
      formValid: e,
      formRef: s,
      finish: f
    };
  }
}, F = /* @__PURE__ */ r("div", null, "This is the content of the first step.", -1), N = /* @__PURE__ */ r("ol", null, [
  /* @__PURE__ */ r("li", null, "is"),
  /* @__PURE__ */ r("li", null, "a"),
  /* @__PURE__ */ r("li", null, "test")
], -1), U = { class: "d-flex flex-grow-1 flex-row-reverse pa-2" };
function O(l, o, s, e, m, f) {
  const a = d("VcsFormButton"), V = d("VcsWizardStep"), _ = d("VcsSelect"), h = d("v-form"), v = d("VcsWizard");
  return b(), C(v, {
    modelValue: e.step,
    "onUpdate:modelValue": o[5] || (o[5] = (t) => e.step = t),
    modelModifiers: { number: !0 }
  }, {
    default: n(() => [
      i(V, {
        step: "0",
        complete: e.step > 0,
        "help-text": "1. this is the help text",
        heading: "This is the first step",
        modelValue: e.step,
        "onUpdate:modelValue": o[0] || (o[0] = (t) => e.step = t),
        modelModifiers: { number: !0 }
      }, {
        actions: n(({ next: t }) => [
          i(a, { onClick: t }, {
            default: n(() => [
              p("Next")
            ]),
            _: 2
          }, 1032, ["onClick"])
        ]),
        default: n(() => [
          F
        ]),
        _: 1
      }, 8, ["complete", "modelValue"]),
      i(V, {
        step: "1",
        editable: "",
        "header-actions": e.actions.second,
        heading: "This is the second step",
        modelValue: e.step,
        "onUpdate:modelValue": o[3] || (o[3] = (t) => e.step = t),
        modelModifiers: { number: !0 },
        rules: [(t) => !!e.formValid]
      }, {
        help: n(() => [
          p(" Allowed options: "),
          N
        ]),
        actions: n(({ prev: t }) => [
          i(a, { onClick: t }, {
            default: n(() => [
              p("Back")
            ]),
            _: 2
          }, 1032, ["onClick"])
        ]),
        default: n(() => [
          i(h, {
            ref: "formRef",
            modelValue: e.formValid,
            "onUpdate:modelValue": o[2] || (o[2] = (t) => e.formValid = t),
            "lazy-validation": ""
          }, {
            default: n(() => [
              i(_, {
                items: ["this", "is", "a", "test"],
                modelValue: e.selection,
                "onUpdate:modelValue": o[1] || (o[1] = (t) => e.selection = t),
                placeholder: "Select",
                rules: [
                  (t) => !!t && t !== "this" || "Please select a valid option."
                ]
              }, null, 8, ["modelValue", "rules"])
            ]),
            _: 1
          }, 8, ["modelValue"])
        ]),
        _: 1
      }, 8, ["header-actions", "modelValue", "rules"]),
      r("div", U, [
        i(a, {
          disabled: !e.selection || !e.formValid,
          onClick: o[4] || (o[4] = (t) => e.finish()),
          variant: "filled"
        }, {
          default: n(() => [
            p(" Finish ")
          ]),
          _: 1
        }, 8, ["disabled"])
      ])
    ]),
    _: 1
  }, 8, ["modelValue"]);
}
const R = /* @__PURE__ */ M(E, [["render", O]]), D = async () => ({
  get name() {
    return c.name;
  },
  get version() {
    return c.version;
  },
  get mapVersion() {
    return c.mapVersion;
  },
  onVcsAppMounted(l) {
    const { action: o, destroy: s } = w(
      {
        name: "Wizard Example",
        icon: "$vcsWand",
        title: "Wizard Example Plugin"
      },
      {
        id: "wizard-example",
        component: R,
        slot: S.DYNAMIC_LEFT,
        state: {
          headerTitle: "VCS Wizard",
          headerIcon: "$vcsWand",
          styles: { width: "350px", height: "auto" }
        }
      },
      l.windowManager,
      c.name
    );
    l.navbarManager.add(
      { id: "wizard-example", action: o },
      c.name,
      k.TOOL
    ), this._destroyAction = s;
  },
  destroy() {
    this._destroyAction && (this._destroyAction(), this._destroyAction = null);
  }
});
export {
  D as default
};
