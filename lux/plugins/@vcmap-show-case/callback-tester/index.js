import { VcsTextArea as k, VcsFormButton as _, NotificationType as i, createToggleAction as f, WindowSlot as b, ButtonLocation as V } from "../../../assets/ui.js";
import { resolveComponent as r, createElementBlock as g, openBlock as y, createVNode as l, withCtx as d, createTextVNode as C, inject as T, ref as h } from "../../../assets/vue.js";
import { VRow as v } from "../../../assets/vuetify.js";
const A = (e, o) => {
  const t = e.__vccOpts || e;
  for (const [a, s] of o)
    t[a] = s;
  return t;
}, O = {
  name: "CallbackTester",
  components: { VRow: v, VcsFormButton: _, VcsTextArea: k },
  setup() {
    const e = T("vcsApp"), o = h();
    return {
      callback: o,
      isJSONValid(t) {
        try {
          JSON.parse(t);
        } catch {
          return !1;
        }
        return !0;
      },
      call() {
        try {
          e.callbackClassRegistry.createFromTypeOptions(
            { ...JSON.parse(o.value) },
            e
          ).callback(), e.notifier.add({
            type: i.SUCCESS,
            message: "Callback succesfully executed!"
          });
        } catch (t) {
          e.notifier.add({
            type: i.ERROR,
            message: `An error occured when calling the callback: ${t.message}`
          });
        }
      }
    };
  }
}, x = { class: "pa-1" };
function N(e, o, t, a, s, E) {
  const p = r("VcsTextArea"), u = r("VcsFormButton"), m = r("v-row");
  return y(), g("div", x, [
    l(p, {
      class: "pb-1",
      placeholder: " JSON callback",
      modelValue: a.callback,
      "onUpdate:modelValue": o[0] || (o[0] = (c) => a.callback = c),
      rules: [(c) => a.isJSONValid(c) || "Invalid JSON input"]
    }, null, 8, ["modelValue", "rules"]),
    l(m, {
      "no-gutters": "",
      class: "d-flex justify-end pt-1 pr-1"
    }, {
      default: d(() => [
        l(u, {
          variant: "filled",
          onClick: a.call
        }, {
          default: d(() => [
            C(" Execute ")
          ]),
          _: 1
        }, 8, ["onClick"])
      ]),
      _: 1
    })
  ]);
}
const S = /* @__PURE__ */ A(O, [["render", N]]), w = "@vcmap-show-case/callback-tester", J = "1.0.0", B = "^6.0", n = {
  name: w,
  version: J,
  mapVersion: B
};
function I() {
  return {
    get name() {
      return n.name;
    },
    get version() {
      return n.version;
    },
    get mapVersion() {
      return n.mapVersion;
    },
    onVcsAppMounted(e) {
      const { action: o, destroy: t } = f(
        {
          name: "Callback Tester",
          title: "Callback Tester Plugin",
          icon: "mdi-phone-return-outline"
        },
        {
          id: "callback-tester",
          component: S,
          slot: b.DYNAMIC_LEFT,
          state: {
            headerTitle: "Callback Tester",
            headerIcon: "mdi-phone-return-outline"
          }
        },
        e.windowManager,
        n.name
      );
      e.navbarManager.add({ action: o }, n.name, V.TOOL), this._destroyAction = t;
    },
    destroy() {
      this._destroyAction && (this._destroyAction(), this._destroyAction = null);
    }
  };
}
export {
  I as default
};
