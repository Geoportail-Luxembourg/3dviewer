import { ToolboxType as l, ButtonLocation as h } from "../../../assets/ui.js";
import { resolveComponent as v, createBlock as f, openBlock as p, withCtx as _, createElementVNode as r, reactive as d, ref as M, watch as y } from "../../../assets/vue.js";
import { VSheet as E } from "../../../assets/vuetify.js";
const T = "@vcmap-show-case/toolbox-example", w = "1.0.0", k = "^6.0", o = {
  name: T,
  version: w,
  mapVersion: k
}, C = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [i, s] of t)
    n[i] = s;
  return n;
}, N = {
  name: "WindowExampleContent",
  components: { VSheet: E },
  setup() {
    return {};
  }
}, L = /* @__PURE__ */ r("ul", null, [
  /* @__PURE__ */ r("li", null, "Close window to get into background state."),
  /* @__PURE__ */ r("li", null, "Click tristate button to deactivate")
], -1);
function S(e, t, n, i, s, a) {
  const c = v("v-sheet");
  return p(), f(c, { class: "pa-1" }, {
    default: _(() => [
      L
    ]),
    _: 1
  });
}
const I = /* @__PURE__ */ C(N, [["render", S]]), A = {
  active: !1,
  currentIndex: 0,
  _stop() {
    console.log("stopping session", this._session), this._session = null, this.active = !1;
  },
  _start() {
    const e = (t) => ({ type: t });
    this._session = e(this.tools[this.currentIndex].name), this.active = !0, console.log("starting session", this._session);
  },
  callback() {
    this.active ? this._stop() : this._start();
  },
  selected(e) {
    this.currentIndex = e, this.active ? (this._session.type = this.tools[this.currentIndex].name, console.log("updating active session", this._session)) : this._start();
  }
};
function O(e) {
  const t = {
    id: "tri-state-example",
    state: {
      headerTitle: "Example Session Toggle"
    },
    component: I
  }, n = d({
    name: "tri-state-action",
    title: "tristate",
    icon: "mdi-state-machine",
    active: !1,
    background: !1,
    callback() {
      if (this.active) {
        if (this.background)
          return e.windowManager.add(t, "@vcmap/test");
        e.windowManager.remove(t.id), this.active = !1;
      } else
        return this.active = !0, e.windowManager.add(t, "@vcmap/test");
      return null;
    }
  }), i = [
    e.windowManager.added.addEventListener(({ id: a }) => {
      a === t.id && (n.active = !0, n.background = !1);
    }),
    e.windowManager.removed.addEventListener(({ id: a }) => {
      a === t.id && (n.background = !0);
    })
  ];
  return { action: n, destroy: () => {
    e.windowManager.has(t.id) && e.windowManager.remove(t.id), i.forEach((a) => a());
  } };
}
function V(e) {
  const t = d({
    name: "Toolbox Changer",
    active: !1,
    callback() {
      e.toolboxManager.toolboxName !== o.name ? e.toolboxManager.toolboxName = o.name : e.toolboxManager.setDefaultToolboxName();
    }
  }), n = e.toolboxManager.toolboxNameChanged.addEventListener(
    (i) => {
      t.active = i === o.name;
    }
  );
  return {
    action: t,
    destroy: n
  };
}
async function $() {
  return {
    get name() {
      return o.name;
    },
    get version() {
      return o.version;
    },
    get mapVersion() {
      return o.mapVersion;
    },
    initialize(e) {
      var a;
      const { action: t, destroy: n } = V(e);
      e.navbarManager.add(
        { id: "toolbox-changer", action: t },
        o.name,
        h.TOOL
      );
      let i = () => {
      };
      e.toolboxManager.has("featureInfo") ? (a = e.toolboxManager.get("featureInfo")) == null || a.toolboxNames.push(o.name) : i = e.toolboxManager.added.addEventListener(
        (c) => {
          c.id === "featureInfo" && c.toolboxNames.push(o.name);
        }
      ), this._destroyToolboxChanger = [n, i];
      const s = {
        id: "namedDingleSelect",
        type: l.SINGLE,
        toolboxNames: [o.name],
        action: {
          name: "select",
          title: "single select",
          icon: "mdi-eye",
          active: !1,
          disabled: !1,
          callback() {
            this.disabled = !0, setTimeout(() => {
              this.disabled = !1;
            }, 2e3);
          }
        }
      };
      e.toolboxManager.add(
        s,
        o.name
      );
    },
    onVcsAppMounted(e) {
      const t = M(!1), n = {
        id: "singleToolboxExample",
        type: l.SINGLE,
        action: {
          name: "single",
          title: "single toolbox example",
          icon: "mdi-numeric-1-box",
          active: !1,
          callback() {
            this.active = !this.active, t.value = this.active, this.icon = this.active ? "mdi-numeric-1-box-outline" : "mdi-numeric-1-box";
          }
        }
      };
      e.toolboxManager.add(
        n,
        o.name
      );
      const i = {
        name: "select",
        title: "select toolbox example",
        ...A,
        disabled: !1,
        tools: [
          {
            name: "pen",
            title: "select item 1",
            icon: "mdi-numeric-1-box"
          },
          {
            name: "object",
            title: "select item 2",
            icon: "mdi-numeric-2-box"
          }
        ]
      }, s = {
        id: "selectToolboxExample",
        type: l.SELECT,
        action: i
      };
      e.toolboxManager.add(s, o.name);
      const a = {
        id: "groupToolboxExample",
        type: l.GROUP,
        icon: "mdi-numeric",
        disabled: !1,
        title: "group toolbox example"
      };
      e.toolboxManager.add(
        a,
        o.name
      );
      const c = [
        {
          id: "group-item-1",
          action: {
            name: "group-action-1",
            title: "group action 1",
            icon: "mdi-numeric-1-box",
            active: !1,
            callback() {
              this.active = !this.active;
            }
          }
        },
        {
          id: "group-item-2",
          action: {
            name: "group-action-2",
            title: "group action 2",
            icon: "mdi-numeric-2-box",
            active: !1,
            callback() {
              this.active = !this.active;
            }
          }
        },
        {
          id: "group-item-3",
          action: {
            name: "group-action-3",
            title: "group action 3",
            icon: "mdi-numeric-3-box",
            active: !1,
            disabled: !0,
            callback() {
              this.active = !this.active;
            }
          }
        }
      ], m = e.toolboxManager.get(
        "groupToolboxExample"
      ).buttonManager;
      c.forEach(
        (x) => m.add(x, o.name)
      ), this._stopWatching = y(
        () => t.value,
        () => {
          e.toolboxManager.get(s.id).action.disabled = t.value, e.toolboxManager.get(
            a.id
          ).disabled = t.value;
        }
      );
      const { action: u, destroy: b } = O(e), g = {
        id: "tristateExample",
        type: l.SINGLE,
        action: u
      };
      e.toolboxManager.add(g, o.name), this._destroyAction = b;
    },
    destroy() {
      this._stopWatching(), this._destroyToolboxChanger.forEach((e) => e()), this._destroyAction && (this._destroyAction(), this._destroyAction = null);
    }
  };
}
export {
  $ as default
};
