
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
} await loadCss('data:text/css;base64,LmhlbGxvLXdvcmxkW2RhdGEtdi1jN2I0ZWIzOF17YmFja2dyb3VuZC1jb2xvcjojMGZmfQo=');import { VcsButton as V, getPluginAssetUrl as H, WindowSlot as k } from "../../../assets/ui.js";
import { resolveComponent as r, createBlock as m, openBlock as u, withCtx as t, createVNode as n, createElementVNode as y, toDisplayString as d, createCommentVNode as L, createTextVNode as _, inject as S } from "../../../assets/vue.js";
import { VImg as B, VRow as T, VContainer as b, VCard as x, VSheet as N } from "../../../assets/vuetify.js";
const c = "@vcmap/hello-world", j = "1.0.8", A = "^6.0", g = () => ({
  showLogHelloWorld: !0,
  showComponent: !0
}), D = (l, s) => {
  const o = l.__vccOpts || l;
  for (const [e, i] of s)
    o[e] = i;
  return o;
}, p = "hello_world_window_id", I = {
  name: "HelloWorld",
  components: {
    VcsButton: V,
    VSheet: N,
    VCard: x,
    VContainer: b,
    VRow: T,
    VImg: B
  },
  emits: ["close"],
  setup(l, { emit: s }) {
    const o = S("vcsApp"), { helloWorld: e, showHelloWorldBtn: i } = o.plugins.getByKey(c);
    return {
      closeSelf() {
        s("close");
      },
      helloWorld() {
        console.log(e());
      },
      showHelloWorldBtn: i,
      logoUrl: H(o, c, "plugin-assets/vcs_logo.png")
    };
  }
};
function M(l, s, o, e, i, E) {
  const a = r("v-row"), w = r("v-img"), h = r("VcsButton"), W = r("v-container"), C = r("v-card"), v = r("v-sheet");
  return u(), m(v, { class: "hello-world" }, {
    default: t(() => [
      n(C, { class: "pa-2 ma-2" }, {
        default: t(() => [
          n(W, null, {
            default: t(() => [
              n(a, { class: "justify-center mb-4" }, {
                default: t(() => [
                  y("h1", null, d(l.$t("helloWorld.helloWorld")), 1)
                ]),
                _: 1
              }),
              n(a, { class: "justify-center mb-4" }, {
                default: t(() => [
                  n(w, {
                    src: e.logoUrl,
                    alt: "plugin-assets example",
                    "max-width": "200"
                  }, null, 8, ["src"])
                ]),
                _: 1
              }),
              n(a, { class: "justify-center" }, {
                default: t(() => [
                  e.showHelloWorldBtn ? (u(), m(h, {
                    key: 0,
                    icon: "mdi-times",
                    tooltip: "helloWorld.logTooltip",
                    onClick: e.helloWorld
                  }, {
                    default: t(() => [
                      _(d(l.$t("helloWorld.log")), 1)
                    ]),
                    _: 1
                  }, 8, ["onClick"])) : L("", !0),
                  n(h, {
                    icon: "mdi-times",
                    onClick: e.closeSelf
                  }, {
                    default: t(() => [
                      _(d(l.$t("helloWorld.close")), 1)
                    ]),
                    _: 1
                  }, 8, ["onClick"])
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
  });
}
const O = /* @__PURE__ */ D(I, [["render", M], ["__scopeId", "data-v-c7b4eb38"]]);
function f() {
  return "Hello World!";
}
function U(l, s) {
  return console.log(l, s), {
    get name() {
      return c;
    },
    get version() {
      return j;
    },
    get mapVersion() {
      return A;
    },
    get config() {
      return { ...g(), ...l };
    },
    helloWorld: f,
    /**
     * @param {import("@vcmap/ui").VcsUiApp} vcsUiApp
     * @param {PluginState=} state
     */
    initialize(o, e) {
      console.log(
        "Called before loading the rest of the current context. Passed in the containing Vcs UI App ",
        o,
        e
      ), this._app = o;
    },
    /**
     * @param {import("@vcmap/ui").VcsUiApp} vcsUiApp
     * @returns {Promise<void>}
     */
    async onVcsAppMounted(o) {
      this.config.showComponent ? o.windowManager.add(
        {
          id: p,
          component: O,
          WindowSlot: k.DETACHED,
          position: {
            left: "40%",
            right: "40%"
          },
          state: {
            headerTitle: c
          }
        },
        c
      ) : console.log(c, f());
    },
    /**
     * @param {boolean} forUrl
     * @returns {PluginState}
     */
    getState(o) {
      console.log("Called when collecting state, e.g. for create link", o);
      const e = {
        active: this._app.windowManager.has(p)
      };
      return o || (e.position = this._app.windowManager.get(p).position), e;
    },
    getDefaultOptions: g,
    /**
     * @returns {PluginConfig}
     */
    toJSON() {
      console.log("Called when serializing this plugin instance");
      const o = g(), e = {};
      return this.config.showLogHelloWorld !== o.showLogHelloWorld && (e.showLogHelloWorld = this.config.showLogHelloWorld), this.config.showComponent !== o.showComponent && (e.showComponent = this.config.showComponent), e;
    },
    i18n: {
      en: {
        helloWorld: {
          helloWorld: "Hello World",
          close: "Close",
          log: "Log",
          logTooltip: "Log Hello World to console"
        }
      },
      de: {
        helloWorld: {
          helloWorld: "Hallo Welt",
          close: "Schließen",
          log: "Loggen",
          logTooltip: "Logge Hello World in Console"
        }
      }
    },
    destroy() {
      console.log("hook to cleanup");
    }
  };
}
export {
  U as default,
  f as helloWorld
};
