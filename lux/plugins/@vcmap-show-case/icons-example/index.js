
function loadCss(href) {
  return new Promise((resolve, reject) => {
    const elem = document.createElement('link');
    elem.rel = 'stylesheet';
    elem.href = href;
    elem.defer = false;
    elem.async = false;
    elem.onload = resolve;
    elem.onerror = reject;
    document.head.appendChild(elem);
  });
} await loadCss('data:text/css;base64,Lmljb25zLXdpbmRvd1tkYXRhLXYtMzA2ODMzNmRde21heC1oZWlnaHQ6NjAwcHh9Cg==');import { VcsList as l, Icons as m, createToggleAction as p, WindowSlot as d, ButtonLocation as _ } from "../../../assets/ui.js";
import { VSheet as u } from "../../../assets/vuetify.js";
import { resolveComponent as a, createBlock as v, openBlock as f, withCtx as y, createVNode as h, computed as g } from "../../../assets/vue.js";
const w = "@vcmap-show-case/icons-example", x = "1.0.0", A = "^6.0", n = {
  name: w,
  version: x,
  mapVersion: A
}, I = (o, e) => {
  const t = o.__vccOpts || o;
  for (const [s, c] of e)
    t[s] = c;
  return t;
}, k = {
  name: "AllIconsComponent",
  components: {
    VcsList: l,
    VSheet: u
  },
  setup() {
    const o = (e) => {
      const t = `$${e}`;
      return {
        name: t,
        title: t,
        icon: t,
        actions: [
          {
            name: "copy-icon-to-clipboard",
            icon: "mdi-content-copy",
            title: `Copy ${t}`,
            callback: async () => {
              await navigator.clipboard.writeText(t);
            }
          }
        ]
      };
    };
    return {
      icons: g(
        () => Object.keys(m).map((e) => o(e))
      )
    };
  }
};
function V(o, e, t, s, c, C) {
  const r = a("vcs-list"), i = a("v-sheet");
  return f(), v(i, { class: "overflow-auto icons-window" }, {
    default: y(() => [
      h(r, {
        items: s.icons,
        searchable: !0,
        "show-title": !1
      }, null, 8, ["items"])
    ]),
    _: 1
  });
}
const b = /* @__PURE__ */ I(k, [["render", V], ["__scopeId", "data-v-3068336d"]]);
async function T() {
  return {
    get name() {
      return n.name;
    },
    get version() {
      return n.version;
    },
    get mapVersion() {
      return n.mapVersion;
    },
    onVcsAppMounted(o) {
      const { action: e, destroy: t } = p(
        {
          name: "Icons Examples",
          title: "Icons Example Plugin"
        },
        {
          id: "icons-example",
          component: b,
          slot: d.DETACHED,
          state: {
            headerTitle: "Icons Example"
          }
        },
        o.windowManager,
        n.name
      );
      o.navbarManager.add({ action: e }, n.name, _.TOOL), this._destroyAction = t;
    },
    destroy() {
      this._destroyAction && (this._destroyAction(), this._destroyAction = null);
    }
  };
}
export {
  T as default
};
