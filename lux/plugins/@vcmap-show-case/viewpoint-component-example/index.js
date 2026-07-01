import { VcsViewpointComponent as V, VcsFormButton as w, createToggleAction as f, WindowSlot as _, ButtonLocation as g } from "../../../assets/ui.js";
import { VSheet as x } from "../../../assets/vuetify.js";
import { resolveComponent as c, createBlock as C, openBlock as O, withCtx as l, createVNode as a, createElementVNode as p, createTextVNode as h, inject as k, ref as y } from "../../../assets/vue.js";
import { Viewpoint as m } from "../../../assets/core.js";
const B = "@vcmap-show-case/viewpoint-component-example", E = "1.0.0", N = "^6.0", s = {
  name: B,
  version: E,
  mapVersion: N
}, M = (o, t) => {
  const e = o.__vccOpts || o;
  for (const [n, i] of t)
    e[n] = i;
  return e;
}, S = {
  name: "ViewpointExample",
  components: {
    VcsFormButton: w,
    VSheet: x,
    VcsViewpointComponent: V
  },
  setup() {
    var n, i;
    const o = k("vcsApp"), t = ((i = (n = o.maps.activeMap) == null ? void 0 : n.getViewpointSync()) == null ? void 0 : i.toJSON()) || m.getDefaultOptions(), e = y(structuredClone(t));
    return {
      viewpointOptions: e,
      reset() {
        e.value = structuredClone(t), o.maps.activeMap.gotoViewpoint(
          new m(e.value)
        );
      },
      log() {
        console.log({ ...e.value });
      }
    };
  }
}, T = { class: "d-flex gc-2 px-2 pt-2 pb-1" }, F = { class: "d-flex gc-2 w-full justify-start" }, L = { class: "d-flex gc-2 w-full justify-end" };
function b(o, t, e, n, i, P) {
  const d = c("VcsViewpointComponent"), r = c("VcsFormButton"), u = c("v-sheet");
  return O(), C(u, null, {
    default: l(() => [
      a(d, {
        modelValue: n.viewpointOptions,
        "onUpdate:modelValue": t[0] || (t[0] = (v) => n.viewpointOptions = v)
      }, null, 8, ["modelValue"]),
      p("div", T, [
        p("div", F, [
          a(r, {
            icon: "$vcsReturn",
            onClick: n.reset
          }, null, 8, ["onClick"])
        ]),
        p("div", L, [
          a(r, {
            type: "submit",
            variant: "filled",
            onClick: n.log
          }, {
            default: l(() => [
              h(" Log ViewpointOptions ")
            ]),
            _: 1
          }, 8, ["onClick"])
        ])
      ])
    ]),
    _: 1
  });
}
const j = /* @__PURE__ */ M(S, [["render", b]]);
function J() {
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
    initialize(o) {
      const { action: t, destroy: e } = f(
        {
          name: "Viewpoint Example",
          icon: "$vcsPoi"
        },
        {
          id: "viewpoint-component-example",
          state: {
            headerTitle: "Viewpoint Example",
            headerIcon: "$vcsPoi"
          },
          component: j,
          slot: _.DYNAMIC_LEFT
        },
        o.windowManager,
        s.name
      );
      o.navbarManager.add(
        { id: "viewpoint-component-example", action: t },
        s.name,
        g.TOOL
      ), this.destroy = e;
    }
  };
}
export {
  J as default
};
