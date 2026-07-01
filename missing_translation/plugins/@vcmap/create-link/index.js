import { VcsTextField as g, VcsButton as p, NotificationType as u, setStateToUrl as f, ButtonLocation as L, WindowSlot as b } from "../../../assets/ui.js";
import { defineComponent as v, ref as d, inject as h, openBlock as y, createBlock as C, unref as c, withCtx as S, createVNode as l, createElementVNode as T } from "../../../assets/vue.js";
import { VSheet as A } from "../../../assets/vuetify.js";
const _ = { class: "d-flex col-2 justify-end pa-0" }, x = /* @__PURE__ */ v({
  __name: "fallbackCreateLink",
  props: {
    link: {
      type: String,
      required: !0
    }
  },
  setup(e) {
    const a = d(e.link), r = h("vcsApp"), n = d();
    function w() {
      var i;
      const t = ((i = n.value) == null ? void 0 : i.$el).querySelector("input");
      t && (t.select(), document.execCommand("copy"), r.notifier.add({
        title: "createLink.title",
        message: "createLink.copied",
        type: u.SUCCESS
      }));
    }
    const m = async () => {
      const t = await r.getState(!0), i = new URL(window.location.href);
      f(t, i), a.value = i.toString();
    };
    return (t, i) => (y(), C(c(A), { class: "d-flex flex-row align-center pl-2 pr-2" }, {
      default: S(() => [
        l(c(g), {
          value: a.value,
          ref_key: "input",
          ref: n
        }, null, 8, ["value"]),
        T("div", _, [
          l(c(p), {
            icon: "mdi-content-copy",
            class: "mr-2",
            onClick: w,
            tooltip: t.$t("createLink.copyToClipboard")
          }, null, 8, ["tooltip"]),
          l(c(p), {
            icon: "mdi-refresh",
            class: "mr-2",
            onClick: m,
            tooltip: t.$t("createLink.refreshTooltip")
          }, null, 8, ["tooltip"])
        ])
      ]),
      _: 1
      /* STABLE */
    }));
  }
}), s = "@vcmap/create-link", V = "3.0.0", B = "^6.1", k = "create-link-fallback-window";
function N(e, o) {
  e.windowManager.remove(k), e.windowManager.add(
    {
      id: k,
      component: x,
      slot: b.DYNAMIC_RIGHT,
      state: {
        headerTitle: "createLink.windowTitle",
        headerIcon: "mdi-share-variant"
      },
      props: {
        link: o
      }
    },
    s
  );
}
function I() {
  return {
    get name() {
      return s;
    },
    get version() {
      return V;
    },
    get mapVersion() {
      return B;
    },
    i18n: {
      de: {
        createLink: {
          title: "Link kopieren",
          windowTitle: "Anwendungslink",
          createLink: "Link erstellen",
          copyToClipboard: "Anwendungslinks in Zwischenablage kopieren",
          refreshTooltip: "Anwendungslinks aktualisieren",
          copied: "Der Anwendungslink in wurde in die Zwischenablage kopiert."
        }
      },
      en: {
        createLink: {
          title: "Copy link",
          windowTitle: "Application link",
          createLink: "Create link",
          copyToClipboard: "Copy application link to clipboard",
          refreshTooltip: "Refresh application link",
          copied: "Application link copied to clipboard."
        }
      }
    },
    initialize(e) {
      const o = navigator.clipboard ? "createLink.title" : "createLink.createLink", a = navigator.clipboard ? "createLink.copyToClipboard" : "";
      return e.navbarManager.add(
        {
          action: {
            name: o,
            title: a,
            icon: "mdi-share-variant",
            async callback() {
              const r = await e.getState(!0), n = new URL(window.location.href);
              f(r, n), navigator.clipboard ? (await navigator.clipboard.writeText(n.toString()), e.notifier.add({
                title: "createLink.title",
                message: "createLink.copied",
                type: u.SUCCESS
              })) : N(e, n.toString());
            }
          }
        },
        s,
        L.SHARE,
        { desktop: !0, tablet: !0, mobile: !0 }
      ), Promise.resolve();
    }
  };
}
export {
  I as default
};
