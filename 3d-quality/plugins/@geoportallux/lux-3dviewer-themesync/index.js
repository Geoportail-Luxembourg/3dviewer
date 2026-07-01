import { VcsModule as E } from "../../../assets/core.js";
const M = "@geoportallux/lux-3dviewer-themesync", j = "1.4.1-alpha", k = "^6.1", _ = ["fr", "de", "en", "lb"];
function B(n) {
  return (n == null ? void 0 : n.split("/")[1]) || "png";
}
function U(n, t, r, e) {
  const o = t == null ? void 0 : t.legend_name, i = {
    lang: e,
    id: r,
    ...o && { name: o }
  };
  return `${n}?${new URLSearchParams(i).toString()}`;
}
function G(n) {
  return {
    fr: "fre",
    en: "eng",
    de: "ger",
    lb: "ltz"
  }[n.toLowerCase()];
}
function N(n) {
  return {
    show: `!(${n.map((r) => `\${id} === '${r}'`).join("||")})`
  };
}
function V(n) {
  var e;
  let t;
  const r = (e = n.metadata) == null ? void 0 : e.ol3d_options;
  return r && (t = {
    type: "DeclarativeStyleItem",
    declarativeStyle: {}
  }, r.cesium3DTileStyle && (t.declarativeStyle = r.cesium3DTileStyle), r.vcsHiddenObjectIds && (t.declarativeStyle = N(
    r.vcsHiddenObjectIds
  ))), t;
}
function w(n, t, r, e, o, i, c) {
  var s, l, u, f, S, g, L, T, $, v, b;
  const d = e && e.type && !r.layers.some((a) => a.id === e.id) && e.name !== "wintermesh";
  if (d) {
    i && (e.type = i);
    let a = {
      id: e.id,
      name: e.name,
      source: e.source,
      style: e.style,
      layers: e.id,
      activeOnStartup: !1,
      allowPicking: !!((s = e.metadata) != null && s.is_queryable),
      properties: {
        is3DLayer: !!i,
        // For 2d back button
        luxId: e.id,
        // For 2d back button
        luxIsBaselayer: e.type === "BaseLayer",
        // For 2d back button
        title: `layers.${e.name}.title`,
        // use translations for layers (content tree and elsewhere). does not contain nodes
        legend: [
          {
            type: "IframeLegendItem",
            src: U(
              t.luxLegendUrl,
              e.metadata,
              `${e.id}`,
              n.locale
            )
            // Nice to have: update the legend when switching lang, but this is not implemented in vcmap-ui yet
          }
        ],
        ...e.properties
      },
      ...e.layer === t.luxDefaultBaselayer && {
        activeOnStartup: !0
      }
    };
    switch ((l = e.metadata) != null && l.exclusion && (a.exclusiveGroups = JSON.parse((u = e.metadata) == null ? void 0 : u.exclusion)), e.type) {
      case "WMS":
      case "WMTS":
        a = {
          ...a,
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
        }, a.properties.featureInfo = "featureInfo2d";
        break;
      case "BaseLayer":
        a = {
          ...a,
          type: "WMTSLayer",
          url: `${t.luxWmtsUrl}/${e.layer}/${e.matrixSet}/{TileMatrix}/{TileCol}/{TileRow}.${B(e.imageType)}`,
          format: e.imageType,
          extent: {
            coordinates: [-180, -85, 180, 85],
            projection: {
              epsg: "EPSG:4326"
            }
          },
          minLevel: 0,
          maxLevel: 22,
          zIndex: 0
        }, (f = a.exclusiveGroups) == null || f.push("baselayer");
        break;
      case "data":
        a = {
          ...a,
          url: `${e.url}/${e.layer}/tileset.json`,
          type: "CesiumTilesetLayer",
          style: V(e),
          activeOnStartup: ((S = e.metadata) == null ? void 0 : S.ol3d_defaultlayer) || !1,
          screenSpaceError: 16,
          // default is 16
          screenSpaceErrorMobile: 2
          // default is 32, resulting in too low quality on mobile
        }, a.allowPicking = !0, a.properties.featureInfo = "featureInfo3d";
        break;
      case "mesh":
        a = {
          ...a,
          url: `${e.url}/${e.layer}/tileset.json`,
          type: "CesiumTilesetLayer",
          // activeOnStartup: do not recover ol3d_defaultlayer value for mesh as exclusive terrain is already activeOnStartup
          offset: [0, 0, ((L = (g = e.metadata) == null ? void 0 : g.ol3d_options) == null ? void 0 : L.heightOffset) || 0],
          exclusiveGroups: ["mesh"],
          screenSpaceError: 16,
          screenSpaceErrorMobile: 2
        }, ($ = (T = e.metadata) == null ? void 0 : T.ol3d_options) != null && $.vcsClippingPolygons && e.metadata.ol3d_options.vcsClippingPolygons.forEach(
          (x, O) => {
            const P = {
              name: `ClippingPolygon_${e.name}_${O}`,
              activeOnStartup: !0,
              terrain: !1,
              layerNames: [e.name],
              coordinates: x
            };
            r.clippingPolygons.push(P);
          }
        );
        break;
    }
    r.layers.push(a);
  }
  const y = {
    name: c ? `${c}.${e.name}` : e.name,
    type: e.children && e.children.length > 0 ? "NodeContentTreeItem" : "LayerContentTreeItem",
    layerName: e.name,
    title: `layers.${e.name}.title`,
    // use translations for layers and nodes (content tree only)
    visible: !0
  };
  t.luxGeonetworkUrl && d && ((v = e.metadata) != null && v.metadata_id) && (y.infoUrl = `${t.luxGeonetworkUrl}/${G(n.locale)}/catalog.search#/metadata/${(b = e.metadata) == null ? void 0 : b.metadata_id}`), r.contentTree.push(y);
  function p(a) {
    return {
      layers: {
        [e.name]: {
          title: o[a][e.name] || e.name
        },
        ...r.i18n[0][a].layers
      }
    };
  }
  if (_.forEach((a) => {
    const x = {
      [a]: p(a)
    };
    r.i18n[0][a] = x[a];
  }), e.children && Array.isArray(e.children)) {
    const a = c ? `${c}.${e.name}` : e.name;
    e.children.forEach((x) => {
      w(
        n,
        t,
        r,
        x,
        o,
        i,
        a
      );
    });
  }
}
function D(n) {
  async function t(r, e, o, i) {
    const c = {
      _id: "catalogConfig",
      layers: [
        {
          name: "LuxBaseTerrain",
          url: o,
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
    e == null || e.forEach((y) => {
      var p;
      w(
        r,
        n,
        c,
        y,
        i,
        (p = y.metadata) == null ? void 0 : p.ol3d_type
      );
    });
    const d = new E(c);
    await r.addModule(d);
  }
  return {
    get name() {
      return M;
    },
    get version() {
      return j;
    },
    get mapVersion() {
      return k;
    },
    async initialize(r) {
      const e = await fetch(
        n.luxThemesUrl
      ).then((s) => s.json()), { themes: o } = e, i = e.lux_3d.terrain_url, c = e.background_layers.map(
        (s) => ({
          ...s,
          type: "BaseLayer"
        })
      ), d = o.filter(
        (s) => {
          var l, u;
          return ((l = s.metadata) == null ? void 0 : l.ol3d_type) || ((u = s.metadata) == null ? void 0 : u.display_in_switcher) === !0;
        }
      ).sort((s, l) => {
        var u, f;
        return (u = s.metadata) != null && u.ol3d_type ? -1 : (f = l.metadata) != null && f.ol3d_type ? 1 : 0;
      });
      d.unshift({
        id: -1,
        name: "basemap",
        children: c
      });
      const p = (await Promise.all(
        _.map(
          (s) => fetch(`${n.luxI18nUrl}/${s}.json`).then(
            (l) => l.json()
          )
        )
      )).reduce(
        (s, l) => ({ ...s, ...l }),
        {}
      );
      d.length > 0 && await t(r, d, i, p);
    },
    onVcsAppMounted() {
    },
    /**
     * should return all default values of the configuration
     */
    getDefaultOptions() {
      return n;
    },
    /**
     * should return the plugin's serialization excluding all default values
     */
    toJSON() {
      return n;
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
  D as default
};
