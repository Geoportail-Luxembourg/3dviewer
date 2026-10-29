import { VcsModule as j } from "../../../assets/core.js";
const k = "@geoportallux/lux-3dviewer-themesync", M = "1.4.7", E = "^6.1", b = ["fr", "de", "en", "lb"];
function G(r) {
  return (r == null ? void 0 : r.split("/")[1]) || "png";
}
function U(r, t, n, a) {
  const c = t == null ? void 0 : t.legend_name, l = {
    lang: a,
    id: n,
    ...c && { name: c }
  };
  return `${r}?${new URLSearchParams(l).toString()}`;
}
function D(r) {
  return {
    fr: "fre",
    en: "eng",
    de: "ger",
    lb: "ltz"
  }[r.toLowerCase()];
}
function H(r) {
  return {
    show: `!(${r.map((n) => `\${id} === '${n}'`).join("||")})`
  };
}
function N(r) {
  var a;
  let t;
  const n = (a = r.metadata) == null ? void 0 : a.ol3d_options;
  return n && (t = {
    type: "DeclarativeStyleItem",
    declarativeStyle: {}
  }, n.cesium3DTileStyle && (t.declarativeStyle = n.cesium3DTileStyle), n.vcsHiddenObjectIds && (t.declarativeStyle = H(
    n.vcsHiddenObjectIds
  ))), t;
}
function P(r, t, n, a, c, l, i) {
  var s, o, y, f, x, L, T, $, S, w, _, v;
  if (a && a.type && !n.layers.some((e) => e.id === a.id) && a.name !== "wintermesh" && !a.time) {
    l && (a.type = l);
    let e = {
      id: a.id,
      name: a.name,
      source: a.source,
      style: a.style,
      layers: a.id,
      activeOnStartup: !1,
      allowPicking: !!((s = a.metadata) != null && s.is_queryable),
      properties: {
        is3DLayer: !!l,
        // For 2d back button
        luxId: a.id,
        // For 2d back button
        luxIsBaselayer: a.type === "BaseLayer",
        // For 2d back button
        title: `layers["${a.name}"]["title"]`,
        // use translations for layers (content tree and elsewhere). does not contain nodes
        ...((o = a.metadata) == null ? void 0 : o.legend_name) && {
          legend: [
            {
              type: "IframeLegendItem",
              popoutBtn: !0,
              src: U(
                t.luxLegendUrl,
                a.metadata,
                `${a.id}`,
                r.locale
              )
              // Nice to have: update the legend when switching lang, but this is not implemented in vcmap-ui yet
            }
          ]
        },
        ...a.properties
      }
    };
    switch ((y = a.metadata) != null && y.exclusion && (e.exclusiveGroups = JSON.parse((f = a.metadata) == null ? void 0 : f.exclusion)), a.type) {
      case "WMS":
      case "WMTS":
        e = {
          ...e,
          type: "WMSLayer",
          url: t.luxOwsUrl,
          tilingSchema: "mercator",
          featureInfo: {
            responseType: "text/html"
          },
          parameters: {
            format: "image/png",
            transparent: !0
          },
          minLevel: 0,
          maxLevel: 22
        }, e.properties.featureInfo = "featureInfo2d";
        break;
      case "BaseLayer":
        e = {
          ...e,
          type: "WMTSLayer",
          url: `${t.luxWmtsUrl}/${a.layer}/${a.matrixSet}/{TileMatrix}/{TileCol}/{TileRow}.${G(a.imageType)}`,
          format: a.imageType,
          extent: {
            coordinates: [-180, -85, 180, 85],
            projection: {
              epsg: "EPSG:4326"
            }
          },
          minLevel: 0,
          maxLevel: 22,
          zIndex: 0
        }, (x = e.exclusiveGroups) == null || x.push("baselayer");
        break;
      case "data":
        e = {
          ...e,
          url: `${a.url}/${a.layer}/tileset.json`,
          type: "CesiumTilesetLayer",
          style: N(a),
          activeOnStartup: ((L = a.metadata) == null ? void 0 : L.ol3d_defaultlayer) || !1
        }, e.allowPicking = !0, e.properties.featureInfo = "featureInfo3d";
        break;
      case "mesh":
        e = {
          ...e,
          url: `${a.url}/${a.layer}/tileset.json`,
          type: "CesiumTilesetLayer",
          // activeOnStartup: do not recover ol3d_defaultlayer value for mesh as exclusive terrain is already activeOnStartup
          offset: [0, 0, (($ = (T = a.metadata) == null ? void 0 : T.ol3d_options) == null ? void 0 : $.heightOffset) || 0],
          exclusiveGroups: ["mesh"]
        }, (w = (S = a.metadata) == null ? void 0 : S.ol3d_options) != null && w.vcsClippingPolygons && a.metadata.ol3d_options.vcsClippingPolygons.forEach(
          (g, B) => {
            const O = {
              name: `ClippingPolygon_${a.name}_${B}`,
              activeOnStartup: !0,
              terrain: !1,
              layerNames: [a.name],
              coordinates: g
            };
            n.clippingPolygons.push(O);
          }
        );
        break;
    }
    n.layers.push(e);
  }
  const u = {
    name: i ? `${i}.${a.name}` : a.name,
    type: a.children && a.children.length > 0 ? "NodeContentTreeItem" : "LayerContentTreeItem",
    layerName: a.name,
    title: `layers["${a.name}"]["title"]`,
    // use translations for layers and nodes (content tree only)
    visible: !0
  };
  t.luxGeonetworkUrl && ((_ = a.metadata) != null && _.metadata_id) && (u.infoUrl = `${t.luxGeonetworkUrl}/${D(r.locale)}/catalog.search#/metadata/${(v = a.metadata) == null ? void 0 : v.metadata_id}`), n.contentTree.push(u);
  function p(e) {
    return {
      layers: {
        [a.name]: {
          title: c[e][a.name] || a.name
        },
        ...n.i18n[0][e].layers
      }
    };
  }
  if (b.forEach((e) => {
    const g = {
      [e]: p(e)
    };
    n.i18n[0][e] = g[e];
  }), a.children && Array.isArray(a.children)) {
    const e = i ? `${i}.${a.name}` : a.name;
    a.children.forEach((g) => {
      P(
        r,
        t,
        n,
        g,
        c,
        l,
        e
      );
    });
  }
}
async function V(r, t, n) {
  var l;
  const a = await r.getState(!0);
  n.some(
    (i) => {
      var d;
      return (d = a.layers) == null ? void 0 : d.some(
        (u) => u.name === i.name
      );
    }
  ) || await ((l = r.layers.getByKey(t.luxDefaultBaselayer)) == null ? void 0 : l.activate());
}
function q(r) {
  async function t(n, a, c, l) {
    const i = {
      _id: "catalogConfig",
      layers: [
        {
          name: "LuxBaseTerrain",
          url: c,
          type: "TerrainLayer",
          activeOnStartup: !0,
          requestVertexNormals: !0,
          properties: {
            title: "Terrain"
          },
          exclusiveGroups: ["mesh"]
        }
      ],
      clippingPolygons: [],
      contentTree: [
        {
          name: "terrain",
          type: "LayerContentTreeItem",
          layerName: "LuxBaseTerrain"
        }
      ],
      i18n: [
        {
          name: "layerTranslations2d",
          fr: {
            layers: {
              basemap: {
                title: "Fond de carte"
              }
            }
          },
          de: {
            layers: {
              basemap: {
                title: "Kartenhintergrund"
              }
            }
          },
          en: {
            layers: {
              basemap: {
                title: "Base map"
              }
            }
          },
          lb: {
            layers: {
              basemap: {
                title: "Kaartenhannergrond"
              }
            }
          }
        }
      ]
    };
    a == null || a.forEach((u) => {
      var p;
      P(
        n,
        r,
        i,
        u,
        l,
        (p = u.metadata) == null ? void 0 : p.ol3d_type
      );
    });
    const d = new j(i);
    await n.addModule(d);
  }
  return {
    get name() {
      return k;
    },
    get version() {
      return M;
    },
    get mapVersion() {
      return E;
    },
    async initialize(n) {
      const a = await fetch(
        r.luxThemesUrl
      ).then((s) => s.json()), { themes: c } = a, l = a.lux_3d.terrain_url, i = a.background_layers.map(
        (s) => ({
          ...s,
          type: "BaseLayer"
        })
      ), d = c.filter(
        (s) => {
          var o, y;
          return ((o = s.metadata) == null ? void 0 : o.ol3d_type) || ((y = s.metadata) == null ? void 0 : y.display_in_switcher) === !0;
        }
      ).sort((s, o) => {
        var y, f;
        return (y = s.metadata) != null && y.ol3d_type ? -1 : (f = o.metadata) != null && f.ol3d_type ? 1 : 0;
      });
      d.unshift({
        id: -1,
        name: "basemap",
        children: i
      });
      const p = (await Promise.all(
        b.map(
          (s) => fetch(
            `${r.luxI18nUrl}/${s}.json?_t=${Date.now()}`
          ).then((o) => o.json())
        )
      )).reduce(
        (s, o) => ({ ...s, ...o }),
        {}
      );
      d.length > 0 && await t(n, d, l, p), await V(n, r, i);
    },
    onVcsAppMounted() {
    },
    /**
     * should return all default values of the configuration
     */
    getDefaultOptions() {
      return r;
    },
    /**
     * should return the plugin's serialization excluding all default values
     */
    toJSON() {
      return r;
    },
    /**
     * should return the plugins state
     * @param {boolean} forUrl
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
    }
  };
}
export {
  q as default
};
