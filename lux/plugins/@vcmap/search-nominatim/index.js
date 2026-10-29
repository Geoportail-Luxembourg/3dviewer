import { Extent as V, wgs84Projection as b, parseGeoJSON as E, mercatorProjection as O } from "../../../assets/core.js";
import { featureInfoViewSymbol as v, AddressBalloonFeatureInfoView as F, AbstractConfigEditor as j, VcsExtentEditor as B, VcsFormSection as U, VcsLabel as L, VcsTextField as R } from "../../../assets/ui.js";
import { ol$Feature as T, ol$geom$Point as A } from "../../../assets/ol.js";
import { VContainer as D, VRow as P, VCol as J } from "../../../assets/vuetify.js";
import { ref as $, computed as I, resolveComponent as s, openBlock as _, createBlock as q, mergeProps as z, withCtx as r, createVNode as i, createElementBlock as M, Fragment as k, renderList as G, createTextVNode as g, toDisplayString as h } from "../../../assets/vue.js";
const p = "@vcmap/search-nominatim", H = "2.0.2", K = "^6.0";
function Q(n, t) {
  let e;
  if (n.geojson)
    e = E(n.geojson).features[0];
  else if (n.lat && n.lon)
    e = new T(
      new A(
        O.transformFrom(b, [n.lon, n.lat])
      )
    );
  else
    throw new Error("No coordinates found for the feature");
  e.setProperties(n.address);
  const o = n.display_name;
  return e[v] = new F({
    type: "AddressBalloonFeatureInfoView",
    name: "NominatimSearchBalloon",
    balloonSubtitle: "",
    addressName: "building",
    street: "road",
    number: "house_number",
    city: "city",
    zip: "postcode",
    country: "country"
  }), { title: o, feature: e, icon: t };
}
class m {
  /**
   * @returns {NominatimSearchOptions}
   */
  static getDefaultOptions() {
    return {
      url: "https://nominatim.openstreetmap.org/search",
      city: void 0,
      state: void 0,
      countrycode: "de",
      extent: void 0,
      limit: 20,
      icon: "mdi-circle-double"
    };
  }
  /**
   * @param {NominatimSearchOptions} options
   */
  constructor(t) {
    const e = m.getDefaultOptions();
    this._name = p, this.url = t.url ?? e.url, this.city = t.city ?? null, this.state = t.state ?? null, this.countrycode = t.countrycode ?? e.countrycode, this.extent = t.extent ? new V(t.extent) : null, this.limit = t.limit ?? e.limit, this.icon = t.icon ?? e.icon, this._controller = new AbortController();
  }
  /**
   * @type {string}
   * @readonly
   */
  get name() {
    return this._name;
  }
  /**
   * @param {string} q - search value
   * @returns {Array<ResultItem>}
   */
  async search(t) {
    const e = {
      q: t,
      countrycodes: this.countrycode,
      format: "json",
      polygon_geojson: 1,
      addressdetails: 1,
      limit: this.limit
    };
    this.city && (e.q += `,${this.city}`), this.state && (e.q += `,${this.state}`), this.extent && (e.viewbox = this.extent.getCoordinatesInProjection(b).join(","), e.bounded = 1);
    const o = new URL(this.url);
    o.search = new URLSearchParams(e).toString();
    const { signal: c } = this._controller.signal;
    return (await (await fetch(o, { signal: c })).json()).map((a) => Q(a, this.icon));
  }
  abort() {
    this._controller.abort();
  }
  toJSON() {
    const t = m.getDefaultOptions(), e = {};
    return this.url !== t.url && (e.url = this.url), this.city !== t.city && (e.city = this.city), this.state !== t.state && (e.state = this.state), this.countrycode !== t.countrycode && (e.countrycode = this.countrycode), this.extent && this.extent !== t.extent && (e.extent = this.extent.toJSON()), this.limit !== t.limit && (e.limit = this.limit), this.icon !== t.icon && (e.icon = this.icon), e;
  }
}
const W = (n, t) => {
  const e = n.__vccOpts || n;
  for (const [o, c] of t)
    e[o] = c;
  return e;
}, X = {
  name: "SearchNominatimEditor",
  components: {
    VContainer: D,
    VRow: P,
    VCol: J,
    AbstractConfigEditor: j,
    VcsExtentEditor: B,
    VcsFormSection: U,
    VcsLabel: L,
    VcsTextField: R
  },
  props: {
    getConfig: {
      type: Function,
      required: !0
    },
    setConfig: {
      type: Function,
      required: !0
    }
  },
  setup(n) {
    const t = m.getDefaultOptions(), e = n.getConfig(), o = $(Object.assign(t, e)), c = I({
      get() {
        return new V(
          o.value.extent ?? { projection: { epsg: 4326 } }
        ).toJSON();
      },
      set(u) {
        o.value.extent = u;
      }
    });
    return {
      localConfig: o,
      extent: c,
      apply: () => {
        n.setConfig(o.value);
      }
    };
  }
};
function Y(n, t, e, o, c, y) {
  const u = s("VcsLabel"), a = s("v-col"), f = s("VcsTextField"), d = s("v-row"), x = s("v-container"), C = s("VcsFormSection"), N = s("VcsExtentEditor"), w = s("AbstractConfigEditor");
  return _(), q(w, z({ ...n.$attrs, ...n.$props }, { onSubmit: o.apply }), {
    default: r(() => [
      i(C, { heading: "searchNominatim.general" }, {
        default: r(() => [
          i(x, { class: "py-0 px-1" }, {
            default: r(() => [
              (_(), M(
                k,
                null,
                G(["url", "state", "city", "countrycode"], (l) => i(
                  d,
                  {
                    key: l,
                    "no-gutters": ""
                  },
                  {
                    default: r(() => [
                      i(
                        a,
                        null,
                        {
                          default: r(() => [
                            i(u, { "html-for": l }, {
                              default: r(() => [
                                g(
                                  h(n.$t(`searchNominatim.${l}`)),
                                  1
                                  /* TEXT */
                                )
                              ]),
                              _: 2
                              /* DYNAMIC */
                            }, 1032, ["html-for"])
                          ]),
                          _: 2
                          /* DYNAMIC */
                        },
                        1024
                        /* DYNAMIC_SLOTS */
                      ),
                      i(
                        a,
                        null,
                        {
                          default: r(() => [
                            i(f, {
                              id: l,
                              modelValue: o.localConfig[l],
                              "onUpdate:modelValue": (S) => o.localConfig[l] = S,
                              modelModifiers: { trim: !0 },
                              clearable: ""
                            }, null, 8, ["id", "modelValue", "onUpdate:modelValue"])
                          ]),
                          _: 2
                          /* DYNAMIC */
                        },
                        1024
                        /* DYNAMIC_SLOTS */
                      )
                    ]),
                    _: 2
                    /* DYNAMIC */
                  },
                  1024
                  /* DYNAMIC_SLOTS */
                )),
                64
                /* STABLE_FRAGMENT */
              )),
              i(d, { "no-gutters": "" }, {
                default: r(() => [
                  i(a, null, {
                    default: r(() => [
                      i(u, { "html-for": "limit" }, {
                        default: r(() => [
                          g(
                            h(n.$t("searchNominatim.limit")),
                            1
                            /* TEXT */
                          )
                        ]),
                        _: 1
                        /* STABLE */
                      })
                    ]),
                    _: 1
                    /* STABLE */
                  }),
                  i(a, null, {
                    default: r(() => [
                      i(f, {
                        id: "limit",
                        modelValue: o.localConfig.limit,
                        "onUpdate:modelValue": t[0] || (t[0] = (l) => o.localConfig.limit = l),
                        modelModifiers: { number: !0 },
                        clearable: "",
                        type: "number"
                      }, null, 8, ["modelValue"])
                    ]),
                    _: 1
                    /* STABLE */
                  })
                ]),
                _: 1
                /* STABLE */
              }),
              i(d, { "no-gutters": "" }, {
                default: r(() => [
                  i(a, null, {
                    default: r(() => [
                      i(u, { "html-for": "icon" }, {
                        default: r(() => [
                          g(
                            h(n.$t("searchNominatim.icon")),
                            1
                            /* TEXT */
                          )
                        ]),
                        _: 1
                        /* STABLE */
                      })
                    ]),
                    _: 1
                    /* STABLE */
                  }),
                  i(a, null, {
                    default: r(() => [
                      i(f, {
                        id: "icon",
                        modelValue: o.localConfig.icon,
                        "onUpdate:modelValue": t[1] || (t[1] = (l) => o.localConfig.icon = l)
                      }, null, 8, ["modelValue"])
                    ]),
                    _: 1
                    /* STABLE */
                  })
                ]),
                _: 1
                /* STABLE */
              })
            ]),
            _: 1
            /* STABLE */
          })
        ]),
        _: 1
        /* STABLE */
      }),
      i(d, { "no-gutters": "" }, {
        default: r(() => [
          i(N, {
            modelValue: o.extent,
            "onUpdate:modelValue": t[2] || (t[2] = (l) => o.extent = l),
            class: "w-100"
          }, null, 8, ["modelValue"])
        ]),
        _: 1
        /* STABLE */
      })
    ]),
    _: 1
    /* STABLE */
  }, 16, ["onSubmit"]);
}
const Z = /* @__PURE__ */ W(X, [["render", Y]]);
function rt(n) {
  let t, e;
  return {
    get name() {
      return p;
    },
    get version() {
      return H;
    },
    get mapVersion() {
      return K;
    },
    /**
     * @param {import("@vcmap/ui").VcsUiApp} vcsUiApp
     */
    initialize(o) {
      t = new m(n), o.search.add(t, p), e = o;
    },
    /**
     * @returns {NominatimSearchOptions}
     */
    toJSON() {
      return (t == null ? void 0 : t.toJSON()) || {};
    },
    getDefaultOptions() {
      return m.getDefaultOptions();
    },
    getConfigEditors() {
      return [
        {
          component: Z,
          title: "searchNominatim.configEditorTitle",
          infoUrlCallback: e == null ? void 0 : e.getHelpUrlCallback(
            "/components/plugins/searchToolConfig.html#id_searchNominatimConfig",
            "app-configurator"
          )
        }
      ];
    },
    i18n: {
      en: {
        searchNominatim: {
          general: "General",
          name: "Name",
          url: "URL to Nominatim",
          state: "State",
          city: "City",
          countrycode: "Country Code",
          limit: "Maximum number of results",
          icon: "Results icon",
          bbox: "Bounding Box",
          configEditorTitle: "Search Nominatim Editor"
        }
      },
      de: {
        searchNominatim: {
          general: "Allgemein",
          name: "Name",
          url: "URL zu Nominatim",
          state: "Bundesland",
          city: "Stadt",
          countrycode: "Ländercode",
          limit: "Maximale Anzahl Resultate",
          icon: "Ergebnissymbol",
          bbox: "Bounding Box",
          configEditorTitle: "Nominatim Suche Editor"
        }
      }
    }
  };
}
export {
  rt as default
};
