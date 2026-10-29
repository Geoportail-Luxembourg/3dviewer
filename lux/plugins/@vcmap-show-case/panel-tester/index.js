import { VcsToolButton as E, PanelLocation as a, createToggleAction as x, ButtonLocation as A } from "../../../assets/ui.js";
import { createElementBlock as d, openBlock as i, createElementVNode as s, toDisplayString as m, Fragment as b, renderList as M, resolveComponent as k, createVNode as L, createBlock as P, withCtx as $, createTextVNode as y, inject as I, computed as w } from "../../../assets/vue.js";
import { VDivider as O } from "../../../assets/vuetify.js";
const v = "@vcmap-show-case/panel-tester", C = "1.0.0", R = "^6.0", _ = {
  name: v,
  version: C,
  mapVersion: R
}, h = (e, r) => {
  const l = e.__vccOpts || e;
  for (const [o, c] of r)
    l[o] = c;
  return l;
}, V = {
  name: "IframePanelExample"
}, B = { class: "pa-1" }, F = /* @__PURE__ */ s("div", { class: "d-flex flex-column overflow-hidden w-full h-full pa-1" }, [
  /* @__PURE__ */ s("iframe", {
    src: "http://localhost:8080",
    class: "flex-grow-1",
    height: "1000"
  })
], -1);
function z(e, r, l, o, c, u) {
  return i(), d("div", B, [
    s("h1", null, m(e.$attrs["panel-state"].location), 1),
    s("p", null, m(e.$attrs["panel-state"].id), 1),
    F
  ]);
}
const G = /* @__PURE__ */ h(V, [["render", z]]), H = {
  name: "TextPanelExample"
}, j = { class: "pa-1" }, S = { class: "d-flex flex-column overflow-hidden w-full h-full pa-1" };
function q(e, r, l, o, c, u) {
  return i(), d("div", j, [
    s("h1", null, m(e.$attrs["panel-state"].location), 1),
    s("p", null, m(e.$attrs["panel-state"].id), 1),
    s("div", S, [
      (i(!0), d(b, null, M([...Array(5).keys()], (p) => (i(), d("p", { key: p }, " Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, "))), 128))
    ])
  ]);
}
const N = /* @__PURE__ */ h(H, [["render", q]]), D = {
  name: "ImgPanelExample"
}, J = { class: "pa-1 h-full" }, K = /* @__PURE__ */ s("div", { class: "d-flex pa-1" }, [
  /* @__PURE__ */ s("img", {
    src: "https://vc.systems/wp-content/uploads/2020/07/vcs_logo.png",
    alt: "logo"
  })
], -1);
function Q(e, r, l, o, c, u) {
  return i(), d("div", J, [
    s("h1", null, m(e.$attrs["panel-state"].location), 1),
    s("p", null, m(e.$attrs["panel-state"].id), 1),
    K
  ]);
}
const U = /* @__PURE__ */ h(D, [["render", Q]]), W = {
  name: "PanelExample",
  components: { VcsToolButton: E, VDivider: O },
  setup() {
    const e = I("vcsApp"), r = Object.values(a), l = {
      [a.LEFT]: "panel-1",
      [a.RIGHT]: "panel-2",
      [a.BOTTOM]: "panel-3"
    }, o = {
      [a.LEFT]: G,
      [a.RIGHT]: N,
      [a.BOTTOM]: U
    }, c = {
      [a.LEFT]: {
        green: !0
      },
      [a.RIGHT]: {
        red: !0
      }
    }, u = {
      [a.BOTTOM]: {
        backgroundColor: "#2196f3"
      }
    }, p = (t) => ({
      id: l[t],
      component: o[t],
      state: {
        classes: c[t],
        styles: u[t]
      }
    });
    return {
      toggle(t, n) {
        e.panelManager.hasLocation(n) ? e.panelManager.removePanelAtLocation(n) : (t.stopPropagation(), e.panelManager.add(
          { ...p(n) },
          v,
          n
        ));
      },
      switchLR() {
        const t = e.panelManager.getLocation(a.LEFT), n = e.panelManager.getLocation(a.RIGHT);
        if (e.panelManager.removePanelAtLocation(a.LEFT), e.panelManager.removePanelAtLocation(a.RIGHT), t) {
          const { id: g, component: f, state: T } = t;
          e.panelManager.add(
            { id: g, component: f, state: T },
            v,
            a.RIGHT
          );
        }
        if (n) {
          const { id: g, component: f, state: T } = n;
          e.panelManager.add(
            { id: g, component: f, state: T },
            v,
            a.LEFT
          );
        }
      },
      toggleResizable() {
        e.panelManager.componentIds.forEach((t) => {
          Object.assign(e.panelManager.get(t).state, {
            resizable: !e.panelManager.get(t).state.resizable
          });
        });
      },
      panelLocations: r,
      isActive(t) {
        return w(
          () => {
            var n;
            return e.panelManager.componentIds.includes(
              (n = e.panelManager.getLocation(t)) == null ? void 0 : n.id
            );
          }
        );
      }
    };
  }
}, X = { class: "pa-1" };
function Y(e, r, l, o, c, u) {
  const p = k("VcsToolButton"), t = k("v-divider");
  return i(), d("div", X, [
    (i(!0), d(b, null, M(o.panelLocations, (n, g) => (i(), P(p, {
      key: `b-${g}`,
      active: o.isActive(n).value,
      onClick: (f) => o.toggle(f, n),
      class: "pa-1"
    }, {
      default: $(() => [
        y(" toggle " + m(n), 1)
      ]),
      _: 2
    }, 1032, ["active", "onClick"]))), 128)),
    L(t),
    L(p, {
      class: "pa-1",
      onClick: o.switchLR
    }, {
      default: $(() => [
        y("switch LEFT-RIGHT ")
      ]),
      _: 1
    }, 8, ["onClick"]),
    L(p, {
      class: "pa-1",
      onClick: o.toggleResizable
    }, {
      default: $(() => [
        y("toggle resizable ")
      ]),
      _: 1
    }, 8, ["onClick"])
  ]);
}
const Z = /* @__PURE__ */ h(W, [["render", Y]]);
async function ne() {
  return {
    get name() {
      return _.name;
    },
    get version() {
      return _.version;
    },
    get mapVersion() {
      return _.mapVersion;
    },
    onVcsAppMounted(e) {
      const { action: r, destroy: l } = x(
        {
          name: "Panel Tester"
        },
        {
          id: "panel-tester",
          state: {
            headerTitle: "panelTester.title"
          },
          component: Z,
          position: {
            height: 200
          }
        },
        e.windowManager,
        _.name
      );
      e.navbarManager.add(
        { id: "panel-tester", action: r },
        _.name,
        A.TOOL
      ), this._destroyAction = [l];
    },
    i18n: {
      de: {
        panelTester: {
          title: "Panel Tester"
        }
      },
      en: {
        panelTester: {
          title: "Panel Tester"
        }
      }
    },
    destroy() {
      this._destroyActions && (this._destroyActions.forEach((e) => e()), this._destroyActions = null);
    }
  };
}
export {
  ne as default
};
