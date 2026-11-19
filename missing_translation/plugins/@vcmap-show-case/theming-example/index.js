import { VcsTextField as B, VcsFormButton as E, VcsFormSection as k, VcsLabel as L, createVcsThemes as T, isDark as M, createToggleAction as S, WindowSlot as U, ButtonLocation as N } from "../../../assets/ui.js";
import { resolveComponent as l, createBlock as p, openBlock as s, withCtx as e, createVNode as t, createElementBlock as x, Fragment as b, renderList as y, createTextVNode as _, toDisplayString as C, inject as O, ref as j, computed as D, onMounted as R, toRaw as w, onUnmounted as W, watch as I } from "../../../assets/vue.js";
import { VCol as J, VRow as K, VCard as P, VContainer as Y } from "../../../assets/vuetify.js";
const q = "@vcmap-show-case/theming-example", z = "1.0.0", G = "^6.0", i = {
  name: q,
  version: z,
  mapVersion: G
}, H = (n, o) => {
  const c = n.__vccOpts || n;
  for (const [a, h] of o)
    c[a] = h;
  return c;
}, Q = {
  name: "ThemingExample",
  components: {
    VcsLabel: L,
    VcsFormSection: k,
    VcsFormButton: E,
    VcsTextField: B,
    VContainer: Y,
    VCard: P,
    VRow: K,
    VCol: J
  },
  setup() {
    const n = O("vcsApp"), o = j(T()), c = D(() => M(n) ? o.value.dark : o.value.light);
    return R(() => {
      n.uiConfig.override({
        name: "vuetifyTheme",
        value: w(o.value)
      });
    }), W(() => {
      n.uiConfig.remove(n.uiConfig.getByKey("vuetifyTheme"));
    }), I(
      () => o.value,
      () => {
        n.uiConfig.replace({
          name: "vuetifyTheme",
          value: w(o.value)
        });
      },
      { deep: !0 }
    ), {
      reset: () => {
        o.value = T();
      },
      theming: o,
      currentTheme: c
    };
  }
};
function X(n, o, c, a, h, $) {
  const f = l("VcsLabel"), u = l("v-col"), V = l("VcsTextField"), g = l("v-row"), m = l("v-container"), v = l("VcsFormSection"), F = l("VcsFormButton"), A = l("VCard");
  return s(), p(A, null, {
    default: e(() => [
      t(v, {
        heading: "Colors",
        expandable: "",
        "start-open": ""
      }, {
        default: e(() => [
          t(m, { class: "px-1 py-0" }, {
            default: e(() => [
              (s(!0), x(b, null, y(Object.keys(a.currentTheme.colors), (r) => (s(), p(g, {
                key: r,
                "no-gutters": ""
              }, {
                default: e(() => [
                  t(u, null, {
                    default: e(() => [
                      t(f, null, {
                        default: e(() => [
                          _(C(r), 1)
                        ]),
                        _: 2
                      }, 1024)
                    ]),
                    _: 2
                  }, 1024),
                  t(u, null, {
                    default: e(() => [
                      t(V, {
                        modelValue: a.currentTheme.colors[r],
                        "onUpdate:modelValue": (d) => a.currentTheme.colors[r] = d,
                        "bg-color": a.currentTheme.colors[r]
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "bg-color"])
                    ]),
                    _: 2
                  }, 1024)
                ]),
                _: 2
              }, 1024))), 128))
            ]),
            _: 1
          })
        ]),
        _: 1
      }),
      t(v, {
        heading: "Variables",
        expandable: "",
        "start-open": ""
      }, {
        default: e(() => [
          t(m, { class: "px-1 py-0" }, {
            default: e(() => [
              (s(!0), x(b, null, y(Object.keys(a.currentTheme.variables), (r) => (s(), p(g, {
                "no-gutters": "",
                key: r
              }, {
                default: e(() => [
                  t(u, null, {
                    default: e(() => [
                      t(f, null, {
                        default: e(() => [
                          _(C(r), 1)
                        ]),
                        _: 2
                      }, 1024)
                    ]),
                    _: 2
                  }, 1024),
                  t(u, null, {
                    default: e(() => [
                      t(V, {
                        modelValue: a.currentTheme.variables[r],
                        "onUpdate:modelValue": (d) => a.currentTheme.variables[r] = d
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024)
                ]),
                _: 2
              }, 1024))), 128))
            ]),
            _: 1
          })
        ]),
        _: 1
      }),
      t(m, { class: "px-1 py-0" }, {
        default: e(() => [
          t(F, { onClick: a.reset }, {
            default: e(() => [
              _(" Reset default ")
            ]),
            _: 1
          }, 8, ["onClick"])
        ]),
        _: 1
      })
    ]),
    _: 1
  });
}
const Z = /* @__PURE__ */ H(Q, [["render", X]]), oe = async () => ({
  get name() {
    return i.name;
  },
  get version() {
    return i.version;
  },
  get mapVersion() {
    return i.mapVersion;
  },
  onVcsAppMounted(n) {
    const { action: o, destroy: c } = S(
      {
        name: "Theming Example",
        icon: "$vcsWand",
        title: "Theming Example Plugin"
      },
      {
        id: "theming-example",
        component: Z,
        slot: U.DYNAMIC_LEFT,
        state: {
          headerTitle: "Theming Example",
          headerIcon: "$vcsWand",
          styles: { width: "350px", height: "auto" }
        }
      },
      n.windowManager,
      i.name
    );
    n.navbarManager.add(
      { id: "theming-example", action: o },
      i.name,
      N.MENU,
      { desktop: !0, tablet: !0 }
    ), this._destroyAction = c;
  },
  destroy() {
    this._destroyAction && (this._destroyAction(), this._destroyAction = null);
  }
});
export {
  oe as default
};
