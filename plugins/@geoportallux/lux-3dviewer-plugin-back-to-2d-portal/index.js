import { ButtonLocation as k } from "../../../assets/ui.js";
import { ol$proj$fromLonLat as h } from "../../../assets/ol.js";
const l = "@geoportallux/lux-3dviewer-plugin-back-to-2d-portal", f = "1.0.1", v = "^6.1", M = {
  9: 19e4,
  10: 1e5,
  11: 7e4,
  12: 4e4,
  13: 25e3,
  14: 1e4,
  15: 6e3,
  16: 3500,
  17: 1900,
  18: 900,
  19: 600
};
function x(t) {
  let o = 9;
  for (const [e, a] of Object.entries(M))
    t < a && (o = parseInt(e, 10));
  return o;
}
function L(t, o) {
  return {
    get name() {
      return l;
    },
    get version() {
      return f;
    },
    get mapVersion() {
      return v;
    },
    // eslint-disable-next-line  @typescript-eslint/no-unused-vars
    initialize(e, a) {
      const c = {
        name: "2D",
        title: "back2d.title",
        icon: "$vcs2d",
        callback: async () => {
          var u;
          const n = await e.getState(!0);
          if (!((u = n.activeViewpoint) != null && u.cameraPosition))
            return;
          const [s, d, p] = n.activeViewpoint.cameraPosition, i = h([s, d]), m = Math.round(i[0]), b = Math.round(i[1]), g = x(Math.abs(p)), r = document.createElement("a");
          r.href = `${t.pathTo2dGeoportal}?X=${Math.round(m)}&Y=${Math.round(b)}&zoom=${g}&version=3`, r.target = t.tabId, r.click();
        }
      };
      return e.navbarManager.add(
        { id: "back-2D", action: c },
        l,
        k.MAP,
        { desktop: !0, tablet: !0, mobile: !0 }
      ), Promise.resolve();
    },
    // eslint-disable-next-line  @typescript-eslint/no-unused-vars
    onVcsAppMounted(e) {
    },
    /**
     * should return all default values of the configuration
     */
    getDefaultOptions() {
      return {
        pathTo2dGeoportal: t.pathTo2dGeoportal,
        tabId: t.tabId
      };
    },
    /**
     * should return the plugin's serialization excluding all default values
     */
    toJSON() {
      return {
        pathTo2dGeoportal: t.pathTo2dGeoportal,
        tabId: t.tabId
      };
    },
    /**
     * should return the plugins state
     * @returns {PluginState}
     */
    getState() {
      return {
        prop: "*"
      };
    },
    /**
     * components for configuring the plugin and/ or custom items defined by the plugin
     */
    getConfigEditors() {
      return [];
    },
    destroy() {
    },
    i18n: {
      de: {
        back2d: {
          title: "Zurück zum Luxemburger Geoportal"
        }
      },
      en: {
        back2d: {
          title: "Back to the Luxembourg geoportal"
        }
      },
      fr: {
        back2d: {
          title: "Retour au géoportail du Luxembourg"
        }
      },
      lb: {
        back2d: {
          title: "Zeréck op de Lëtzebuerger Geoportal"
        }
      }
    }
  };
}
export {
  L as default
};
