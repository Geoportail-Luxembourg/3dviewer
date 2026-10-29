import { VcsLabel as v, VcsFormButton as x, VcsProjection as E, createToggleAction as h, WindowSlot as w, ButtonLocation as y } from "../../../assets/ui.js";
import { defineComponent as q, ref as m, createElementBlock as A, openBlock as N, createVNode as e, createElementVNode as O, unref as o, withCtx as t, createTextVNode as r, toDisplayString as c, toRaw as C } from "../../../assets/vue.js";
import { mercatorProjection as _ } from "../../../assets/core.js";
import { VContainer as P, VRow as p, VCol as a, VSwitch as j } from "../../../assets/vuetify.js";
const S = "@vcmap-show-case/projection-example", $ = "1.0.0", D = "^6.0", s = {
  name: S,
  version: $,
  mapVersion: D
}, L = { class: "d-flex gc-2 justify-end mr-2" }, b = /* @__PURE__ */ q({
  __name: "ProjectionExample",
  setup(f) {
    const u = m(_.toJSON()), i = m(!1), g = m(!1), V = m(!1);
    function B() {
      u.value = _.toJSON(), console.log(_.toJSON());
    }
    return (d, l) => (N(), A("div", null, [
      e(o(P), null, {
        default: t(() => [
          e(o(p), { "no-gutters": "" }, {
            default: t(() => [
              e(o(a), null, {
                default: t(() => [
                  e(o(v), null, {
                    default: t(() => [
                      r(c(d.$t("required")), 1)
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              e(o(a), null, {
                default: t(() => [
                  e(o(j), {
                    modelValue: i.value,
                    "onUpdate:modelValue": l[0] || (l[0] = (n) => i.value = n)
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          e(o(p), { "no-gutters": "" }, {
            default: t(() => [
              e(o(a), null, {
                default: t(() => [
                  e(o(v), null, {
                    default: t(() => [
                      r(c(d.$t("hideRequestButton")), 1)
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              e(o(a), null, {
                default: t(() => [
                  e(o(j), {
                    modelValue: g.value,
                    "onUpdate:modelValue": l[1] || (l[1] = (n) => g.value = n)
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          e(o(p), { "no-gutters": "" }, {
            default: t(() => [
              e(o(a), null, {
                default: t(() => [
                  e(o(v), null, {
                    default: t(() => [
                      r(c(d.$t("hideAlias")), 1)
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              e(o(a), null, {
                default: t(() => [
                  e(o(j), {
                    modelValue: V.value,
                    "onUpdate:modelValue": l[2] || (l[2] = (n) => V.value = n)
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          e(o(p), { "no-gutters": "" }, {
            default: t(() => [
              e(o(a), null, {
                default: t(() => [
                  e(o(x), {
                    onClick: B,
                    class: "w-100"
                  }, {
                    default: t(() => [
                      r("Reset Web Mercator")
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
      e(o(E), {
        modelValue: u.value,
        "onUpdate:modelValue": l[3] || (l[3] = (n) => u.value = n),
        required: i.value,
        "hide-request-button": g.value,
        "hide-alias": V.value,
        class: "pa-1"
      }, null, 8, ["modelValue", "required", "hide-request-button", "hide-alias"]),
      O("div", L, [
        e(o(x), {
          onClick: l[4] || (l[4] = (n) => console.log(C(u.value)))
        }, {
          default: t(() => [
            r(c(d.$t("projectionExample.log")), 1)
          ]),
          _: 1
        })
      ])
    ]));
  }
});
async function M() {
  return {
    get name() {
      return s.name;
    },
    get version() {
      return s.version;
    },
    get mapVersion() {
      return s.mapVersion;
    },
    initialize(f) {
      const { action: u, destroy: i } = h(
        {
          name: "Projection Example",
          title: "Projection Example Plugin",
          icon: "$vcsBoundingBox"
        },
        {
          id: "projection-example",
          component: b,
          slot: w.DYNAMIC_LEFT,
          state: {
            headerTitle: "Projection Example",
            headerIcon: "$vcsBoundingBox"
          }
        },
        f.windowManager,
        s.name
      );
      f.navbarManager.add({ action: u }, s.name, y.TOOL), this._destroyAction = i;
    },
    i18n: {
      de: {
        projectionExample: {
          openDialog: "Dialog öffnen",
          log: "Log"
        }
      },
      en: {
        openDialog: "Open Dialog",
        log: "Log"
      }
    },
    destroy() {
      this._destroyAction && (this._destroyAction(), this._destroyAction = null);
    }
  };
}
export {
  M as default
};
