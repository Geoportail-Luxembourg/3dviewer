import { VcsTextField as T, VcsButton as u, NotificationType as h, setStateToUrl as L, ButtonLocation as g, WindowSlot as S } from "../../../assets/ui.js";
import { defineComponent as b, ref as w, inject as C, createBlock as y, openBlock as v, unref as p, withCtx as A, createVNode as s, createElementVNode as x } from "../../../assets/vue.js";
import { VSheet as U } from "../../../assets/vuetify.js";
const _ = { class: "d-flex col-2 justify-end pa-0" }, R = /* @__PURE__ */ b({
  __name: "fallbackCreateLink",
  props: {
    link: {
      type: String,
      required: !0
    }
  },
  setup(t) {
    const o = w(t.link), r = C("vcsApp"), a = w();
    function l() {
      var n;
      const e = ((n = a.value) == null ? void 0 : n.$el).querySelector("input");
      e && (e.select(), document.execCommand("copy"), r.notifier.add({
        title: "createLink.title",
        message: "createLink.copied",
        type: h.SUCCESS
      }));
    }
    const c = async () => {
      const e = await r.getState(!0), n = new URL(window.location.href);
      L(e, n), o.value = n.toString();
    };
    return (e, n) => (v(), y(p(U), { class: "d-flex flex-row align-center pl-2 pr-2" }, {
      default: A(() => [
        s(p(T), {
          value: o.value,
          ref_key: "input",
          ref: a
        }, null, 8, ["value"]),
        x("div", _, [
          s(p(u), {
            icon: "mdi-content-copy",
            class: "mr-2",
            onClick: l,
            tooltip: e.$t("createLink.copyToClipboard")
          }, null, 8, ["tooltip"]),
          s(p(u), {
            icon: "mdi-refresh",
            class: "mr-2",
            onClick: c,
            tooltip: e.$t("createLink.refreshTooltip")
          }, null, 8, ["tooltip"])
        ])
      ]),
      _: 1
      /* STABLE */
    }));
  }
}), d = "@geoportallux/lux-3dviewer-plugin-create-link", V = "1.0.0", E = "^6.1", f = "create-link-fallback-window";
function N(t, i) {
  t.windowManager.remove(f), t.windowManager.add(
    {
      id: f,
      component: R,
      slot: S.DYNAMIC_RIGHT,
      state: {
        headerTitle: "createLink.windowTitle",
        headerIcon: "mdi-share-variant"
      },
      props: {
        link: i
      }
    },
    d
  );
}
function M(t) {
  return {
    get name() {
      return d;
    },
    get version() {
      return V;
    },
    get mapVersion() {
      return E;
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
      },
      fr: {
        createLink: {
          title: "Copier le lien",
          windowTitle: "Lien",
          createLink: "Générer le lien",
          copyToClipboard: "Copier le lien dans le presse-papiers",
          refreshTooltip: "Rafraîchir le lien",
          copied: "Le lien a bien été copié dans le presse-papiers."
        }
      },
      lb: {
        createLink: {
          title: "Link kopéieren",
          windowTitle: "Applicatiouns-Link",
          createLink: "Link erstellen",
          copyToClipboard: "Applicatiouns-Link an d'Zëschenaplag kopéieren",
          refreshTooltip: "Applicatiouns-Link aktualiséieren",
          copied: "Applicatiouns-Link gouf an d'Zëschenaplag kopéiert."
        }
      }
    },
    initialize(i) {
      const o = navigator.clipboard ? "createLink.title" : "createLink.createLink", r = navigator.clipboard ? "createLink.copyToClipboard" : "";
      return i.navbarManager.add(
        {
          action: {
            name: o,
            title: r,
            icon: "mdi-share-variant",
            async callback() {
              const a = await i.getState(!0), l = new URL(window.location.href);
              L(a, l);
              const c = new URLSearchParams();
              c.set("url", l.toString());
              const e = await fetch(t.pathToUrlShortenerApi, {
                method: "POST",
                headers: {
                  "Content-Type": "application/x-www-form-urlencoded"
                },
                body: c.toString()
              });
              if (!e.ok) {
                const m = await e.text();
                throw new Error(`Erreur ${e.status}: ${m}`);
              }
              const k = (await e.json()).short_url;
              navigator.clipboard ? (await navigator.clipboard.writeText(k), i.notifier.add({
                title: "createLink.title",
                message: "createLink.copied",
                type: h.SUCCESS
              })) : N(i, k);
            }
          }
        },
        d,
        g.SHARE,
        { desktop: !0, tablet: !0, mobile: !0 }
      ), Promise.resolve();
    },
    getDefaultOptions() {
      return {
        pathToUrlShortenerApi: t.pathToUrlShortenerApi
      };
    },
    toJSON() {
      return {
        pathToUrlShortenerApi: t.pathToUrlShortenerApi
      };
    }
  };
}
export {
  M as default
};
