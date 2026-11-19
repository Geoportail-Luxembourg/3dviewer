import { VcsFlightComponent as x, VcsFormButton as F, createToggleAction as V, WindowSlot as C, ButtonLocation as b } from "../../../assets/ui.js";
import { VSheet as y } from "../../../assets/vuetify.js";
import { resolveComponent as l, createBlock as u, openBlock as d, withCtx as f, createCommentVNode as k, createElementVNode as h, createVNode as v, createTextVNode as R, shallowRef as O, ref as r, provide as I, toRaw as _, isReactive as p, reactive as N, watch as j, nextTick as B } from "../../../assets/vue.js";
import { FlightInstance as m } from "../../../assets/core.js";
const E = "@vcmap-show-case/flight-component-example", T = "1.0.0", $ = "^6.0", c = {
  name: E,
  version: T,
  mapVersion: $
}, L = (e, o) => {
  const t = e.__vccOpts || e;
  for (const [n, a] of o)
    t[n] = a;
  return t;
}, S = {
  name: "FlightExample",
  components: {
    VcsFormButton: F,
    VSheet: y,
    VcsFlightComponent: x
  },
  setup() {
    const e = m.getDefaultOptions(), o = O(
      new m(e)
    ), t = r(!0);
    I("flightInstance", o);
    const n = r({
      foo: {
        bar: !0,
        array: [1, 2, 3],
        obj: {
          baz: "abc"
        }
      }
    });
    console.log("obj", n);
    const a = _(n);
    console.log("toRaw obj", a), console.log("isReactive obj", p(a)), console.log("isReactive foo", p(a.foo)), console.log("isReactive array", p(a.array));
    const g = N({
      raw: a
    }), s = r(structuredClone(_(g.raw)));
    return j(
      s,
      (i) => {
        console.log("watch", i);
      },
      { deep: !0 }
    ), s.value.foo.array[2] = 5, {
      hasFlightInstance: t,
      async reset() {
        t.value = !1, o.value = new m(e), await B(), t.value = !0;
      },
      log() {
        console.log(o.value.toJSON());
      }
    };
  }
}, M = { class: "d-flex gc-2 px-2 pt-2 pb-1" }, P = { class: "d-flex gc-2 w-full justify-end" };
function z(e, o, t, n, a, g) {
  const s = l("VcsFlightComponent"), i = l("VcsFormButton"), w = l("v-sheet");
  return d(), u(w, null, {
    default: f(() => [
      n.hasFlightInstance ? (d(), u(s, {
        key: 0,
        "parent-id": e.$attrs["window-state"].id
      }, null, 8, ["parent-id"])) : k("", !0),
      h("div", M, [
        h("div", P, [
          v(i, {
            type: "submit",
            variant: "filled",
            onClick: n.log
          }, {
            default: f(() => [
              R(" Log FlightOptions ")
            ]),
            _: 1
          }, 8, ["onClick"]),
          v(i, {
            onClick: n.reset,
            icon: "$vcsReturn",
            tooltip: "Reset"
          }, null, 8, ["onClick"])
        ])
      ])
    ]),
    _: 1
  });
}
const D = /* @__PURE__ */ L(S, [["render", z]]);
function q() {
  return {
    get name() {
      return c.name;
    },
    get version() {
      return c.version;
    },
    get mapVersion() {
      return c.mapVersion;
    },
    initialize(e) {
      const { action: o, destroy: t } = V(
        {
          name: "Flight Example",
          icon: "$vcsPoi"
        },
        {
          id: "flight-component-example",
          state: {
            headerTitle: "Flight Example",
            headerIcon: "$vcsPoi"
          },
          component: D,
          slot: C.DYNAMIC_LEFT
        },
        e.windowManager,
        c.name
      );
      e.navbarManager.add(
        { id: "flight-component-example", action: o },
        c.name,
        b.TOOL
      ), this.destroy = t;
    }
  };
}
export {
  q as default
};
