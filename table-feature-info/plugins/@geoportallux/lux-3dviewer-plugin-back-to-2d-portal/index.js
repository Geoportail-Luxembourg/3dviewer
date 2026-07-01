import { ButtonLocation as f } from "../../../assets/ui.js";
import { Projection as P, mercatorProjection as v, wgs84Projection as y } from "../../../assets/core.js";
const I = "@geoportallux/lux-3dviewer-plugin-back-to-2d-portal", j = "1.2.2", z = "^6.1", G = {
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
function _(t) {
  let o = 9;
  for (const [n, a] of Object.entries(G))
    t < a && (o = parseInt(n, 10));
  return o;
}
function w(t, o = "_blank") {
  const n = document.createElement("a");
  n.href = t, n.target = o, n.click();
}
const A = [
  100,
  250,
  500,
  1e3,
  1500,
  2e3,
  2500,
  3e3,
  3500,
  4e3,
  4500,
  5e3,
  5500,
  6e3,
  6500,
  7e3,
  7500,
  8e3,
  8500,
  9e3,
  9500,
  1e4,
  15e3,
  2e4,
  25e3,
  3e4,
  35e3,
  4e4,
  45e3,
  5e4,
  55e3,
  6e4,
  65e3,
  7e4,
  75e3,
  8e4,
  85e3,
  9e4,
  95e3,
  1e5,
  125e3,
  2e5,
  25e4,
  3e5,
  4e5,
  5e5,
  6e5,
  7e5,
  8e5,
  9e5,
  1e6
];
function B(t) {
  const a = t / 2645833333333333e-19, r = A.reduce((i, s) => Math.abs(s - a) < Math.abs(i - a) ? s : i);
  return Math.round(r);
}
function O(t, o) {
  if (!t.pathTo2dGeoportal)
    return;
  const n = {
    name: "2D",
    title: "linkTo2d.title",
    icon: "$vcs2d",
    callback: async () => {
      var D, $, x;
      const a = await o.getState(!0), r = ((D = a.activeViewpoint) == null ? void 0 : D.groundPosition) || (($ = a.activeViewpoint) == null ? void 0 : $.cameraPosition);
      if (!r || !((x = a.activeViewpoint) != null && x.cameraPosition))
        return;
      const [i, s] = r, u = a.activeViewpoint.cameraPosition[2], c = P.transform(
        v,
        y,
        [i, s]
      ), b = Math.round(c[0]), k = Math.round(c[1]), g = _(Math.abs(u)), h = `lang=${o.locale}`, T = -((a.activeViewpoint.heading ?? 0) * Math.PI) / 180, d = [...o.layers].filter((e) => {
        var M;
        return ((M = e.properties) == null ? void 0 : M.luxId) && (e.active || e.loading);
      }).toReversed(), l = d.filter(
        (e) => !(e != null && e.properties.is3DLayer) && !(e != null && e.properties.luxIsBaselayer)
      ), p = `layers=${l.map((e) => e == null ? void 0 : e.properties.luxId).join("-")}`, m = `opacities=${l.map(() => 1).join("-")}`, S = `bgLayer=${d.filter(
        (e) => e == null ? void 0 : e.properties.luxIsBaselayer
      ).map((e) => e == null ? void 0 : e.name).join("") || "blank"}`, L = `${t.pathTo2dGeoportal}?X=${Math.round(b)}&Y=${Math.round(k)}&zoom=${g}&rotation=${T}&${h}&version=3&${p}&${m}&${S}`, V = t.tabId || "_blank";
      w(L, V);
    }
  };
  o.navbarManager.add(
    { id: "back-2D", action: n },
    I,
    f.MAP,
    { desktop: !0, tablet: !0, mobile: !0 }
  );
}
function R(t, o) {
  if (!t.pathToPrintPortal)
    return;
  const n = new P({
    epsg: "2169",
    proj4: "+proj=tmerc +lat_0=49.83333333333334 +lon_0=6.166666666666667 +k=1 +x_0=80000 +y_0=100000 +ellps=intl +towgs84=-189.681,18.3463,-42.7695,-0.33746,-3.09264,2.53861,0.4598 +units=m +no_defs"
  }), a = {
    name: "3DPrint",
    title: "linkTo3DPrint.title",
    icon: "$vcsExport",
    callback: async () => {
      var l, p, m;
      const r = await o.getState(!0), i = ((l = r.activeViewpoint) == null ? void 0 : l.groundPosition) || ((p = r.activeViewpoint) == null ? void 0 : p.cameraPosition);
      if (!i || !((m = r.activeViewpoint) != null && m.cameraPosition))
        return;
      const [s, u] = i, c = P.transform(n, y, [
        s,
        u
      ]), b = Math.round(c[0]), k = Math.round(c[1]), g = o.maps.activeMap.getCurrentResolution(
        P.transform(v, y, [s, u])
      ), h = B(g), T = `${t.pathToPrintPortal}?easting=${b}&northing=${k}&scale=${h}`, d = t.tabId || "_blank";
      w(T, d);
    }
  };
  o.navbarManager.add(
    { id: "print-3D", action: a },
    I,
    f.MAP,
    { desktop: !0, tablet: !0, mobile: !0 }
  );
}
function F(t, o) {
  return {
    get name() {
      return I;
    },
    get version() {
      return j;
    },
    get mapVersion() {
      return z;
    },
    // eslint-disable-next-line  @typescript-eslint/no-unused-vars
    initialize(n, a) {
      return window.name = "lux3d", O(t, n), R(t, n), Promise.resolve();
    },
    // eslint-disable-next-line  @typescript-eslint/no-unused-vars
    onVcsAppMounted(n) {
    },
    /**
     * should return all default values of the configuration
     */
    getDefaultOptions() {
      return {
        pathTo2dGeoportal: t.pathTo2dGeoportal,
        tabId: t.tabId,
        pathToPrintPortal: t.pathToPrintPortal,
        tabIdPrint: t.tabIdPrint
      };
    },
    /**
     * should return the plugin's serialization excluding all default values
     */
    toJSON() {
      return {
        pathTo2dGeoportal: t.pathTo2dGeoportal,
        tabId: t.tabId,
        pathToPrintPortal: t.pathToPrintPortal,
        tabIdPrint: t.tabIdPrint
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
        linkTo2d: {
          title: "Zurück zum Luxemburger Geoportal"
        },
        linkTo3DPrint: {
          title: "3D-Druck bestellen"
        }
      },
      en: {
        linkTo2d: {
          title: "Back to the Luxembourg geoportal"
        },
        linkTo3DPrint: {
          title: "Order a 3D print"
        }
      },
      fr: {
        linkTo2d: {
          title: "Retour au géoportail du Luxembourg"
        },
        linkTo3DPrint: {
          title: "Commander une impression 3D"
        }
      },
      lb: {
        linkTo2d: {
          title: "Zeréck op de Lëtzebuerger Geoportal"
        },
        linkTo3DPrint: {
          title: "Eng 3D-Dréck bestellen"
        }
      }
    }
  };
}
export {
  F as default
};
