import { VcsToolButton as k, PanelLocation as a, createToggleAction as y, ButtonLocation as E } from "../../../assets/ui.js";
import { createElementBlock as v, openBlock as p, createElementVNode as s, toDisplayString as c, resolveComponent as M, createVNode as L, Fragment as x, renderList as A, createBlock as P, withCtx as $, createTextVNode as b, inject as I, computed as w } from "../../../assets/vue.js";
import { VDivider as O } from "../../../assets/vuetify.js";
const _ = "@vcmap-show-case/panel-tester", C = "1.0.0", V = "^6.0", f = {
  name: _,
  version: C,
  mapVersion: V
}, h = (e, r) => {
  const l = e.__vccOpts || e;
  for (const [o, i] of r)
    l[o] = i;
  return l;
}, R = {
  name: "IframePanelExample"
}, B = { class: "pa-1" }, F = /* @__PURE__ */ s("div", { class: "d-flex flex-column overflow-hidden w-full h-full pa-1" }, [
  /* @__PURE__ */ s("iframe", {
    src: "http://localhost:8080",
    class: "flex-grow-1",
    height: "1000"
  })
], -1);
function z(e, r, l, o, i, d) {
  return p(), v("div", B, [
    s("h1", null, c(e.$attrs["panel-state"].location), 1),
    s("p", null, c(e.$attrs["panel-state"].id), 1),
    F
  ]);
}
const G = /* @__PURE__ */ h(R, [["render", z]]), H = {
  name: "TextPanelExample"
}, j = { class: "pa-1" }, S = /* @__PURE__ */ s("div", { class: "d-flex flex-column overflow-hidden w-full h-full pa-1" }, [
  /* @__PURE__ */ s("p", null, " Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, ")
], -1);
function q(e, r, l, o, i, d) {
  return p(), v("div", j, [
    s("h1", null, c(e.$attrs["panel-state"].location), 1),
    s("p", null, c(e.$attrs["panel-state"].id), 1),
    S
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
function Q(e, r, l, o, i, d) {
  return p(), v("div", J, [
    s("h1", null, c(e.$attrs["panel-state"].location), 1),
    s("p", null, c(e.$attrs["panel-state"].id), 1),
    K
  ]);
}
const U = /* @__PURE__ */ h(D, [["render", Q]]), W = {
  name: "PanelExample",
  components: { VcsToolButton: k, VDivider: O },
  setup() {
    const e = I("vcsApp"), r = Object.values(a), l = {
      [a.LEFT]: "panel-1",
      [a.RIGHT]: "panel-2",
      [a.BOTTOM]: "panel-3"
    }, o = {
      [a.LEFT]: G,
      [a.RIGHT]: N,
      [a.BOTTOM]: U
    }, i = {
      [a.LEFT]: {
        green: !0
      },
      [a.RIGHT]: {
        red: !0
      }
    }, d = {
      [a.BOTTOM]: {
        backgroundColor: "#2196f3"
      }
    }, m = (t) => ({
      id: l[t],
      component: o[t],
      state: {
        classes: i[t],
        styles: d[t]
      }
    });
    return {
      toggle(t, n) {
        e.panelManager.hasLocation(n) ? e.panelManager.removePanelAtLocation(n) : (t.stopPropagation(), e.panelManager.add(
          { ...m(n) },
          _,
          n
        ));
      },
      switchLR() {
        const t = e.panelManager.getLocation(a.LEFT), n = e.panelManager.getLocation(a.RIGHT);
        if (e.panelManager.removePanelAtLocation(a.LEFT), e.panelManager.removePanelAtLocation(a.RIGHT), t) {
          const { id: u, component: g, state: T } = t;
          e.panelManager.add(
            { id: u, component: g, state: T },
            _,
            a.RIGHT
          );
        }
        if (n) {
          const { id: u, component: g, state: T } = n;
          e.panelManager.add(
            { id: u, component: g, state: T },
            _,
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
function Y(e, r, l, o, i, d) {
  const m = M("VcsToolButton"), t = M("v-divider");
  return p(), v("div", X, [
    (p(!0), v(x, null, A(o.panelLocations, (n, u) => (p(), P(m, {
      key: `b-${u}`,
      active: o.isActive(n).value,
      onClick: (g) => o.toggle(g, n),
      class: "pa-1"
    }, {
      default: $(() => [
        b(" toggle " + c(n), 1)
      ]),
      _: 2
    }, 1032, ["active", "onClick"]))), 128)),
    L(t),
    L(m, {
      class: "pa-1",
      onClick: o.switchLR
    }, {
      default: $(() => [
        b("switch LEFT-RIGHT ")
      ]),
      _: 1
    }, 8, ["onClick"]),
    L(m, {
      class: "pa-1",
      onClick: o.toggleResizable
    }, {
      default: $(() => [
        b("toggle resizable ")
      ]),
      _: 1
    }, 8, ["onClick"])
  ]);
}
const Z = /* @__PURE__ */ h(W, [["render", Y]]);
async function ne() {
  return {
    get name() {
      return f.name;
    },
    get version() {
      return f.version;
    },
    get mapVersion() {
      return f.mapVersion;
    },
    onVcsAppMounted(e) {
      const { action: r, destroy: l } = y(
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
        f.name
      );
      e.navbarManager.add(
        { id: "panel-tester", action: r },
        f.name,
        E.TOOL
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
