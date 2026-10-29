import { VcsFlightComponent as x, VcsFormButton as F, createToggleAction as V, WindowSlot as C, ButtonLocation as b } from "../../../assets/ui.js";
import { VSheet as y } from "../../../assets/vuetify.js";
import { resolveComponent as r, createBlock as u, openBlock as d, withCtx as f, createCommentVNode as k, createElementVNode as h, createVNode as v, createTextVNode as R, shallowRef as O, ref as l, provide as I, toRaw as _, isReactive as m, reactive as N, watch as j, nextTick as B } from "../../../assets/vue.js";
import { FlightInstance as p } from "../../../assets/core.js";
const E = "@vcmap-show-case/flight-component-example", T = "1.0.0", $ = "^6.0", c = {
  name: E,
  version: T,
  mapVersion: $
}, L = (e, t) => {
  const o = e.__vccOpts || e;
  for (const [n, a] of t)
    o[n] = a;
  return o;
}, S = {
  name: "FlightExample",
  components: {
    VcsFormButton: F,
    VSheet: y,
    VcsFlightComponent: x
  },
  setup() {
    const e = p.getDefaultOptions(), t = O(
      new p(e)
    ), o = l(!0);
    I("flightInstance", t);
    const n = l({
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
    console.log("toRaw obj", a), console.log("isReactive obj", m(a)), console.log("isReactive foo", m(a.foo)), console.log("isReactive array", m(a.array));
    const g = N({
      raw: a
    }), s = l(structuredClone(_(g.raw)));
    return j(
      s,
      (i) => {
        console.log("watch", i);
      },
      { deep: !0 }
    ), s.value.foo.array[2] = 5, {
      hasFlightInstance: o,
      async reset() {
        o.value = !1, t.value = new p(e), await B(), o.value = !0;
      },
      log() {
        console.log(t.value.toJSON());
      }
    };
  }
}, M = { class: "d-flex gc-2 px-2 pt-2 pb-1" }, P = { class: "d-flex gc-2 w-full justify-end" };
function z(e, t, o, n, a, g) {
  const s = r("VcsFlightComponent"), i = r("VcsFormButton"), w = r("v-sheet");
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
      const { action: t, destroy: o } = V(
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
        { id: "flight-component-example", action: t },
        c.name,
        b.TOOL
      ), this.destroy = o;
    }
  };
}
export {
  q as default
};
