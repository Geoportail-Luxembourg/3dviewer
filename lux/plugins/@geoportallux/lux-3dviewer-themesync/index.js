import { VcsModule as M } from "../../../assets/core.js";
import { TrustedServers as U } from "../../../assets/cesium.js";
const j = "@geoportallux/lux-3dviewer-themesync", k = "1.5.2", E = "^6.1", b = ["fr", "de", "en", "lb"];
function G(e) {
  return (e == null ? void 0 : e.split("/")[1]) || "png";
}
function D(e, n, t, a) {
  const s = n == null ? void 0 : n.legend_name, l = {
    lang: a,
    id: t,
    ...s && { name: s }
  };
  return `${e}?${new URLSearchParams(l).toString()}`;
}
function V(e) {
  return {
    fr: "fre",
    en: "eng",
    de: "ger",
    lb: "ltz"
  }[e.toLowerCase()];
}
function H(e) {
  return {
    show: `!(${e.map((t) => `\${id} === '${t}'`).join("||")})`
  };
}
function N(e) {
  var a;
  let n;
  const t = (a = e.metadata) == null ? void 0 : a.ol3d_options;
  return t && (n = {
    type: "DeclarativeStyleItem",
    declarativeStyle: {}
  }, t.cesium3DTileStyle && (n.declarativeStyle = t.cesium3DTileStyle), t.vcsHiddenObjectIds && (n.declarativeStyle = H(
    t.vcsHiddenObjectIds
  ))), n;
}
function P(e, n, t, a, s, l, i) {
  var p, y, g, $, o, c, f, T, w, S, v, _;
  if (a && a.type && !t.layers.some((r) => r.id === a.id) && a.name !== "wintermesh" && !a.time) {
    l && (a.type = l);
    let r = {
      id: a.id,
      name: a.name,
      source: a.source,
      style: a.style,
      layers: String(a.url ? a.id : a.layers),
      // use layers as identifier when passing via proxy (see used url below)
      activeOnStartup: !1,
      allowPicking: !!((p = a.metadata) != null && p.is_queryable),
      properties: {
        is3DLayer: !!l,
        // For 2d back button
        luxId: a.id,
        // For 2d back button
        luxIsBaselayer: a.type === "BaseLayer",
        // For 2d back button
        title: `layers["${a.name}"]["title"]`,
        // use translations for layers (content tree and elsewhere). does not contain nodes
        ...((y = a.metadata) == null ? void 0 : y.legend_name) && {
          legend: [
            {
              type: "IframeLegendItem",
              popoutBtn: !0,
              src: D(
                n.luxLegendUrl,
                a.metadata,
                `${a.id}`,
                e.locale
              )
              // Nice to have: update the legend when switching lang, but this is not implemented in vcmap-ui yet
            }
          ]
        },
        ...a.properties
      }
    };
    switch ((g = a.metadata) != null && g.exclusion && (r.exclusiveGroups = JSON.parse(($ = a.metadata) == null ? void 0 : $.exclusion)), a.type) {
      case "WMS":
      case "WMTS":
        r = {
          ...r,
          type: "WMSLayer",
          url: a.url ? n.luxOwsUrl : n.luxProxyUrl,
          // if no url in themes api, use proxy url (with credentials via TrustedServers)
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
        }, r.properties.featureInfo = "featureInfo2d";
        break;
      case "BaseLayer":
        r = {
          ...r,
          type: "WMTSLayer",
          url: `${n.luxWmtsUrl}/${a.layer}/${a.matrixSet}/{TileMatrix}/{TileCol}/{TileRow}.${G(a.imageType)}`,
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
        }, (o = r.exclusiveGroups) == null || o.push("baselayer");
        break;
      case "data":
        r = {
          ...r,
          url: `${a.url}/${a.layer}/tileset.json`,
          type: "CesiumTilesetLayer",
          style: N(a),
          activeOnStartup: ((c = a.metadata) == null ? void 0 : c.ol3d_defaultlayer) || !1
        }, r.allowPicking = !0, r.properties.featureInfo = "featureInfo3d";
        break;
      case "mesh":
        r = {
          ...r,
          url: `${a.url}/${a.layer}/tileset.json`,
          type: "CesiumTilesetLayer",
          // activeOnStartup: do not recover ol3d_defaultlayer value for mesh as exclusive terrain is already activeOnStartup
          offset: [0, 0, ((T = (f = a.metadata) == null ? void 0 : f.ol3d_options) == null ? void 0 : T.heightOffset) || 0],
          exclusiveGroups: ["mesh"]
        }, (S = (w = a.metadata) == null ? void 0 : w.ol3d_options) != null && S.vcsClippingPolygons && a.metadata.ol3d_options.vcsClippingPolygons.forEach(
          (L, B) => {
            const O = {
              name: `ClippingPolygon_${a.name}_${B}`,
              activeOnStartup: !0,
              terrain: !1,
              layerNames: [a.name],
              coordinates: L
            };
            t.clippingPolygons.push(O);
          }
        );
        break;
    }
    t.layers.push(r);
  }
  const u = {
    name: i ? `${i}.${a.name}` : a.name,
    type: a.children && a.children.length > 0 ? "NodeContentTreeItem" : "LayerContentTreeItem",
    layerName: a.name,
    title: `layers["${a.name}"]["title"]`,
    // use translations for layers and nodes (content tree only)
    visible: !0
  };
  n.luxGeonetworkUrl && ((v = a.metadata) != null && v.metadata_id) && (u.infoUrl = `${n.luxGeonetworkUrl}/${V(e.locale)}/catalog.search#/metadata/${(_ = a.metadata) == null ? void 0 : _.metadata_id}`), t.contentTree.push(u);
  function x(r) {
    return {
      layers: {
        [a.name]: {
          title: s[r][a.name] || a.name
        },
        ...t.i18n[0][r].layers
      }
    };
  }
  if (b.forEach((r) => {
    const L = {
      [r]: x(r)
    };
    t.i18n[0][r] = L[r];
  }), a.children && Array.isArray(a.children)) {
    const r = i ? `${i}.${a.name}` : a.name;
    a.children.forEach((L) => {
      P(
        e,
        n,
        t,
        L,
        s,
        l,
        r
      );
    });
  }
}
async function W(e, n, t) {
  var l;
  const a = await e.getState(!0);
  t.some(
    (i) => {
      var d;
      return (d = a.layers) == null ? void 0 : d.some(
        (u) => u.name === i.name
      );
    }
  ) || await ((l = e.layers.getByKey(n.luxDefaultBaselayer)) == null ? void 0 : l.activate());
}
function q(e) {
  async function n(s, l, i, d) {
    const u = {
      _id: "catalogConfig",
      layers: [
        {
          name: "LuxBaseTerrain",
          url: i,
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
    l == null || l.forEach((p) => {
      var y;
      P(
        s,
        e,
        u,
        p,
        d,
        (y = p.metadata) == null ? void 0 : y.ol3d_type
      );
    });
    const x = new M(u);
    await s.addModule(x);
  }
  async function t(s) {
    const l = Date.now(), i = `${e.luxThemesUrl}&cache_version=${l}`, d = await fetch(i, {
      credentials: e.credentials || "same-origin"
    }).then((o) => o.json()), { themes: u } = d, x = d.lux_3d.terrain_url, p = d.background_layers.map(
      (o) => ({
        ...o,
        type: "BaseLayer"
      })
    ), y = u.filter(
      (o) => {
        var c, f;
        return ((c = o.metadata) == null ? void 0 : c.ol3d_type) || ((f = o.metadata) == null ? void 0 : f.display_in_switcher) === !0;
      }
    ).sort((o, c) => {
      var f, T;
      return (f = o.metadata) != null && f.ol3d_type ? -1 : (T = c.metadata) != null && T.ol3d_type ? 1 : 0;
    });
    y.unshift({
      id: -1,
      name: "basemap",
      children: p
    });
    const $ = (await Promise.all(
      b.map(
        (o) => fetch(
          `${e.luxI18nUrl}/${o}.json?_t=${Date.now()}`
        ).then((c) => c.json())
      )
    )).reduce(
      (o, c) => ({ ...o, ...c }),
      {}
    );
    y.length > 0 && await n(s, y, x, $), await W(s, e, p);
  }
  function a(s) {
    const { hostname: l, port: i } = new URL(s);
    U.add(l, i ? parseInt(i, 10) : 443);
  }
  return {
    get name() {
      return j;
    },
    get version() {
      return k;
    },
    get mapVersion() {
      return E;
    },
    async initialize(s) {
      a(e.luxProxyUrl), await t(s);
    },
    async reloadThemes(s) {
      await s.removeModule("catalogConfig"), await t(s);
    },
    onVcsAppMounted() {
    },
    /**
     * should return all default values of the configuration
     */
    getDefaultOptions() {
      return e;
    },
    /**
     * should return the plugin's serialization excluding all default values
     */
    toJSON() {
      return e;
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
