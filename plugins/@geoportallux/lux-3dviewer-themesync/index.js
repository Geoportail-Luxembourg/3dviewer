import { VcsModule as f } from "../../../assets/core.js";
const p = "@geoportallux/lux-3dviewer-themesync", L = "1.0.0", T = "^6.1", y = ["fr", "de", "en", "lb"];
function $(a) {
  return (a == null ? void 0 : a.split("/")[1]) || "png";
}
function x(a, t, s, r) {
  const i = t == null ? void 0 : t.legend_name, o = {
    lang: r,
    id: s,
    ...i && { name: i }
  };
  return `${a}?${new URLSearchParams(o).toString()}`;
}
function d(a, t, s, r, i, o = !1, l) {
  if (o && (r.type = "3D"), r && r.type) {
    let n = {
      id: r.id,
      name: r.name,
      source: r.source,
      style: r.style,
      layers: r.name,
      activeOnStartup: !1,
      allowPicking: !1,
      properties: {
        title: `layers.${r.name}.title`,
        // use translations for layers (content tree and elsewhere). does not contain nodes
        legend: [
          {
            type: "IframeLegendItem",
            src: x(
              t.luxLegendUrl,
              r.metadata,
              `${r.id}`,
              a.locale
            )
            // Nice to have: update the legend when switching lang, but this is not implemented in vcmap-ui yet
          }
        ],
        ...r.properties
      },
      type: `${r.type}Layer`
    };
    switch (r.type) {
      case "WMS":
        n = {
          ...n,
          url: t.luxOwsUrl,
          tilingSchema: "mercator",
          parameters: {
            format: "image/png",
            transparent: !0
          }
        };
        break;
      case "WMTS":
        n = {
          ...n,
          url: `${t.luxWmtsUrl}/${r.name}/GLOBAL_WEBMERCATOR_4_V3/{TileMatrix}/{TileCol}/{TileRow}.${$(r.imageType)}`,
          extent: {
            coordinates: [5.7357, 49.4478, 6.5286, 50.1826],
            projection: {
              epsg: "EPSG:4326"
            }
          }
        };
        break;
      case "3D":
        n = {
          ...n,
          url: `${t.lux3dUrl}/${r.name}/tileset.json`,
          type: "CesiumTilesetLayer"
        };
        break;
    }
    s.layers.some((e) => e.id === n.id) || s.layers.push(n);
  }
  s.contentTree.push({
    name: l ? `${l}.${r.name}` : r.name,
    type: r.children && r.children.length > 0 ? "NodeContentTreeItem" : "LayerContentTreeItem",
    layerName: r.name,
    title: `layers.${r.name}.title`,
    // use translations for layers and nodes (content tree only)
    visible: !0
  });
  function u(n) {
    return {
      layers: {
        [r.name]: {
          title: i[n][r.name] || r.name
        },
        ...s.i18n[0][n].layers
      }
    };
  }
  if (y.forEach((n) => {
    const e = {
      [n]: u(n)
    };
    s.i18n[0][n] = e[n];
  }), r.children && Array.isArray(r.children)) {
    const n = l ? `${l}.${r.name}` : r.name;
    r.children.forEach((e) => {
      d(
        a,
        t,
        s,
        e,
        i,
        o,
        n
      );
    });
  }
}
function S(a) {
  async function t(s, r, i, o) {
    const l = {
      _id: "catalogConfig",
      layers: [
        {
          name: "LuxBaseTerrain",
          url: i,
          type: "TerrainLayer",
          activeOnStartup: !0,
          requestVertexNormals: !0,
          properties: {
            title: "Luxembourg Terrain"
          }
        }
      ],
      contentTree: [],
      i18n: [
        {
          name: "layerTranslations2d",
          fr: { layers: [] },
          de: { layers: [] },
          en: { layers: [] },
          lb: { layers: [] }
        }
      ]
    };
    r == null || r.forEach((n) => {
      d(
        s,
        a,
        l,
        n,
        o,
        n.name === "3D Layers"
      );
    });
    const u = new f(l);
    await s.addModule(u);
  }
  return {
    get name() {
      return p;
    },
    get version() {
      return L;
    },
    get mapVersion() {
      return T;
    },
    async initialize(s) {
      const r = await fetch(
        a.luxThemesUrl
      ).then((e) => e.json()), { themes: i } = r, o = r.lux_3d.terrain_url, l = i.filter(
        (e) => {
          var c;
          return e.name === "3D Layers" || ((c = e.metadata) == null ? void 0 : c.display_in_switcher) === !0;
        }
      ).sort((e, c) => e.name === "3D Layers" ? -1 : c.name === "3D Layers" ? 1 : 0), n = (await Promise.all(
        y.map(
          (e) => fetch(`${a.luxI18nUrl}/${e}.json`).then(
            (c) => c.json()
          )
        )
      )).reduce(
        (e, c) => ({ ...e, ...c }),
        {}
      );
      l.length > 0 && await t(s, l, o, n);
    },
    onVcsAppMounted() {
    },
    /**
     * should return all default values of the configuration
     */
    getDefaultOptions() {
      return a;
    },
    /**
     * should return the plugin's serialization excluding all default values
     */
    toJSON() {
      return a;
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
  S as default
};
