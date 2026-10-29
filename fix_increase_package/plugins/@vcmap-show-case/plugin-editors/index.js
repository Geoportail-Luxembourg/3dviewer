import { VcsList as y, VcsHelp as h, createToggleAction as v, WindowSlot as _, ButtonLocation as E } from "../../../assets/ui.js";
import { resolveComponent as f, createElementBlock as w, openBlock as C, createVNode as g, ref as V, inject as $, onUnmounted as L } from "../../../assets/vue.js";
const u = "@vcmap-show-case/plugin-editors", A = "1.0.0", I = "^6.0", r = {
  name: u,
  version: A,
  mapVersion: I
}, N = (t, o) => {
  const i = t.__vccOpts || t;
  for (const [c, d] of o)
    i[c] = d;
  return i;
}, O = {
  name: "PluginEditors",
  components: {
    VcsHelp: h,
    VcsList: y
  },
  setup() {
    const t = V([]), o = (
      /** @type {VcsUiApp} */
      $("vcsApp")
    ), i = (e) => {
      var a;
      const n = (a = e.getConfigEditors) == null ? void 0 : a.call(e);
      if ((n == null ? void 0 : n.length) > 0) {
        const m = n.filter((s) => s.component).map(
          (s, l) => v(
            {
              name: `editor-${l + 1}`,
              title: s.title,
              icon: l < 9 ? `mdi-numeric-${l + 1}-box` : void 0
            },
            {
              id: `${e.name}-editor-${l}`,
              component: s.component,
              parentId: u,
              slot: _.DYNAMIC_CHILD,
              props: {
                getConfig: () => o.plugins.getSerializedByKey(e.name),
                setConfig(p) {
                  p ? (o.notifier.add({
                    type: "info",
                    title: e.name,
                    message: JSON.stringify(p, null, 2)
                  }), console.log(p)) : o.notifier.add({
                    type: "warning",
                    message: `${e.name}: no config set.`
                  });
                }
              },
              state: {
                headerTitle: s.title ?? `${e.name} Editor ${l + 1}`,
                infoUrlCallback: s.infoUrlCallback
              },
              position: {
                width: 500
              }
            },
            o.windowManager,
            u
          )
        );
        if (m.length > 0)
          return {
            title: e.name,
            actions: m.map((s) => s.action),
            destroy() {
              m.forEach((s) => s.destroy()), m.splice(0);
            }
          };
      }
      return null;
    };
    t.value = [...o.plugins].map(i).filter((e) => e);
    const c = o.plugins.added.addEventListener((e) => {
      const n = i(e);
      n && t.value.push(n);
    }), d = o.plugins.removed.addEventListener((e) => {
      const n = t.value.findIndex((a) => a.title === e.name);
      n > -1 && (t.value[n].destroy(), t.value.splice(n, 1));
    });
    return L(() => {
      c(), d(), t.value.forEach((e) => {
        e.destroy();
      });
    }), {
      plugins: t
    };
  }
};
function k(t, o, i, c, d, e) {
  const n = f("VcsHelp"), a = f("VcsList");
  return C(), w("div", null, [
    g(n, { text: "Below all config editors provided by plugins are listed. Important Note: Changes made in editors are not applied!" }),
    g(a, {
      items: c.plugins,
      "show-title": !1
    }, null, 8, ["items"])
  ]);
}
const b = /* @__PURE__ */ N(O, [["render", k]]);
function P() {
  return {
    get name() {
      return r.name;
    },
    get version() {
      return r.version;
    },
    get mapVersion() {
      return r.mapVersion;
    },
    async initialize(t) {
      const { action: o, destroy: i } = v(
        {
          name: "Plugin Editors",
          title: "Overview of Plugins with editors."
        },
        {
          id: r.name,
          component: b,
          slot: _.DYNAMIC_LEFT,
          state: {
            headerTitle: "Plugin Editors"
          }
        },
        t.windowManager,
        r.name
      );
      t.navbarManager.add(
        { id: r.name, action: o },
        r.name,
        E.TOOL
      ), this._destroyAction = i;
    },
    getConfigEditors() {
      return [];
    },
    toJSON() {
      return {};
    },
    destroy() {
      this._destroyAction();
    }
  };
}
export {
  P as default
};
