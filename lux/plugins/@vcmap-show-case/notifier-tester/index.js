import { VcsCheckbox as h, NotificationType as b, createToggleAction as N, WindowSlot as y, ButtonLocation as L } from "../../../assets/ui.js";
import { VDivider as M, VCard as w, VIcon as B, VTextField as I, VListItem as O, VList as S, VSheet as D } from "../../../assets/vuetify.js";
import { resolveComponent as r, createBlock as f, openBlock as c, withCtx as s, createVNode as a, createElementBlock as F, Fragment as U, renderList as A, createTextVNode as m, toDisplayString as v, inject as E, ref as _, computed as j } from "../../../assets/vue.js";
const z = "@vcmap-show-case/notifier-tester", J = "1.0.0", P = "^6.0", l = {
  name: z,
  version: J,
  mapVersion: P
}, W = (n, t) => {
  const o = n.__vccOpts || n;
  for (const [e, d] of t)
    o[e] = d;
  return o;
}, Y = {
  name: "NotifierTester",
  components: {
    VSheet: D,
    VList: S,
    VListItem: O,
    VTextField: I,
    VIcon: B,
    VCard: w,
    VDivider: M,
    VcsCheckbox: h
  },
  setup() {
    const n = E("vcsApp"), t = _("Message"), o = _(5e3);
    return {
      types: b,
      message: t,
      notify(e) {
        n.notifier.add({
          type: e,
          message: t.value,
          timeout: o.value
        });
      },
      notifications: n.notifier.notifications,
      timeout: o,
      hasTimeout: j({
        get() {
          return o.value === -1;
        },
        set(e) {
          e && o.value !== -1 ? o.value = -1 : o.value === -1 && (o.value = 5e3);
        }
      })
    };
  }
};
function q(n, t, o, e, d, H) {
  const u = r("v-text-field"), p = r("VcsCheckbox"), V = r("v-icon"), g = r("v-list-item"), T = r("v-list"), C = r("v-divider"), k = r("v-card"), x = r("v-sheet");
  return c(), f(x, null, {
    default: s(() => [
      a(u, {
        modelValue: e.message,
        "onUpdate:modelValue": t[0] || (t[0] = (i) => e.message = i),
        label: "Message"
      }, null, 8, ["modelValue"]),
      a(u, {
        modelValue: e.timeout,
        "onUpdate:modelValue": t[1] || (t[1] = (i) => e.timeout = i),
        modelModifiers: { number: !0 },
        label: "Timeout"
      }, null, 8, ["modelValue"]),
      a(p, {
        modelValue: e.hasTimeout,
        "onUpdate:modelValue": t[2] || (t[2] = (i) => e.hasTimeout = i),
        label: "Toggle Timeout"
      }, null, 8, ["modelValue"]),
      a(T, null, {
        default: s(() => [
          (c(!0), F(U, null, A(e.types, (i) => (c(), f(g, { key: i }, {
            append: s(() => [
              a(V, {
                onClick: (K) => e.notify(i)
              }, {
                default: s(() => [
                  m("mdi-plus")
                ]),
                _: 2
              }, 1032, ["onClick"])
            ]),
            default: s(() => [
              m(v(i) + " ", 1)
            ]),
            _: 2
          }, 1024))), 128))
        ]),
        _: 1
      }),
      a(C),
      a(k, null, {
        default: s(() => [
          m(" Current number of notifications: " + v(e.notifications.length), 1)
        ]),
        _: 1
      })
    ]),
    _: 1
  });
}
const G = /* @__PURE__ */ W(Y, [["render", q]]);
function Z() {
  return {
    get name() {
      return l.name;
    },
    get version() {
      return l.version;
    },
    get mapVersion() {
      return l.mapVersion;
    },
    initialize(n) {
      const { action: t, destroy: o } = N(
        {
          name: "Notifier Tester",
          icon: "$vcsComment"
        },
        {
          id: "notifier-tester",
          state: {
            headerTitle: "Notifier Tester",
            headerIcon: "$vcsComment"
          },
          component: G,
          slot: y.DYNAMIC_LEFT
        },
        n.windowManager,
        l.name
      );
      n.navbarManager.add(
        { id: "notifier", action: t },
        l.name,
        L.TOOL
      ), this.destroy = o;
    }
  };
}
export {
  Z as default
};
