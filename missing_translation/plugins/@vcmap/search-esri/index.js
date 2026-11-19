var _ = Object.defineProperty;
var w = (t, e, r) => e in t ? _(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r;
var f = (t, e, r) => w(t, typeof e != "symbol" ? e + "" : e, r);
import { featureInfoViewSymbol as E, AddressBalloonFeatureInfoView as z, VcsFormSection as L, AbstractConfigEditor as S, VcsLabel as D, VcsTextField as v } from "../../../assets/ui.js";
import { Feature as R, ol$geom$Point as F } from "../../../assets/ol.js";
import { Projection as U, mercatorProjection as P, wgs84Projection as N, Viewpoint as $ } from "../../../assets/core.js";
import { VContainer as A, VRow as j, VCol as k } from "../../../assets/vuetify.js";
import { defineComponent as I, ref as q, resolveComponent as g, openBlock as x, createBlock as O, mergeProps as B, withCtx as a, createVNode as o, createTextVNode as c, toDisplayString as C } from "../../../assets/vue.js";
const b = "@vcmap/search-esri", T = "2.0.1", Q = "^6.0";
class G {
  constructor(e, r) {
    f(this, "app");
    f(this, "url");
    f(this, "addressMapping");
    f(this, "defaultQueryParams");
    f(this, "zoomDistance");
    f(this, "_abortController");
    this.app = e, this.url = r.url, this.addressMapping = r.addressMapping, this.defaultQueryParams = {
      outSR: "{ latestWkid: 4326, wkid: 4326 }",
      outFields: "*",
      maxLocations: r.maxLocations ?? 6
    }, this.zoomDistance = r.zoomDistance ?? 240;
  }
  // eslint-disable-next-line class-methods-use-this
  get name() {
    return b;
  }
  async search(e) {
    const r = {
      SingleLineCityName: e,
      f: "json",
      ...this.defaultQueryParams
    }, n = new URL(
      `${this.url}/findAddressCandidates`,
      window.location.href
    );
    return n.search = new URLSearchParams(r).toString(), this.abort(), this._abortController = new AbortController(), (await (await fetch(n, { signal: this._abortController.signal })).json()).candidates.map(this.createResultItem.bind(this));
  }
  async suggest(e) {
    if (e.length < 3)
      return [];
    const r = {
      text: e,
      f: "json"
    }, n = new URL(`${this.url}/suggest`, window.location.href);
    return n.search = new URLSearchParams(r).toString(), this.abort(), this._abortController = new AbortController(), (await (await fetch(n, { signal: this._abortController.signal })).json()).suggestions.map((i) => i.text);
  }
  createResultItem(e) {
    const { location: r } = e, n = new R(), d = [Number(r.x), Number(r.y)];
    return n.setGeometry(
      new F(
        U.transform(P, N, d)
      )
    ), n.setProperties(e.attributes), n[E] = new z({
      type: "AddressBalloonFeatureInfoView",
      name: "EsriSearchBalloon",
      balloonSubtitle: "",
      ...this.addressMapping
    }), {
      title: e.address,
      feature: n,
      clicked: () => (this.app.maps.activeMap.gotoViewpoint(
        new $({
          name: "viewpointFromExtend",
          distance: this.zoomDistance,
          groundPosition: d,
          heading: 360,
          pitch: -90,
          roll: 0,
          animate: !0
        })
      ).catch(() => {
      }), this.app.featureInfo.selectFeature(n))
    };
  }
  abort() {
    var e;
    (e = this._abortController) == null || e.abort(), this._abortController = void 0;
  }
  destroy() {
    this.abort();
  }
}
function h() {
  return {
    url: "",
    addressMapping: {
      addressName: "address"
    },
    maxLocations: 6,
    zoomDistance: 240
  };
}
function W(t) {
  return t !== "" || "searchEsri.configEditor.params.isRequired";
}
const Z = I({
  name: "EsriSearchEditor",
  components: {
    VcsFormSection: L,
    VContainer: A,
    VRow: j,
    VCol: k,
    AbstractConfigEditor: S,
    VcsLabel: D,
    VcsTextField: v
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
  setup(t) {
    const e = q(h()), r = t.getConfig();
    for (const [d, p] of Object.entries(r))
      p && (typeof p == "object" ? Object.assign(e.value[d], p) : e.value[d] = p);
    return {
      apply: () => {
        t.setConfig(e.value);
      },
      isRequired: W,
      localConfig: e
    };
  }
}), H = (t, e) => {
  const r = t.__vccOpts || t;
  for (const [n, d] of e)
    r[n] = d;
  return r;
};
function J(t, e, r, n, d, p) {
  const i = g("VcsLabel"), l = g("v-col"), u = g("VcsTextField"), m = g("v-row"), V = g("v-container"), M = g("VcsFormSection"), y = g("AbstractConfigEditor");
  return x(), O(y, B({ onSubmit: t.apply }, { ...t.$attrs, ...t.$props }), {
    default: a(() => [
      o(V, { class: "py-0 px-1" }, {
        default: a(() => [
          o(m, { "no-gutters": "" }, {
            default: a(() => [
              o(l, null, {
                default: a(() => [
                  o(i, {
                    "html-for": "url",
                    required: ""
                  }, {
                    default: a(() => [
                      c(" URL ")
                    ]),
                    _: 1
                    /* STABLE */
                  })
                ]),
                _: 1
                /* STABLE */
              }),
              o(l, null, {
                default: a(() => [
                  o(u, {
                    id: "url",
                    clearable: "",
                    modelValue: t.localConfig.url,
                    "onUpdate:modelValue": e[0] || (e[0] = (s) => t.localConfig.url = s),
                    modelModifiers: { trim: !0 },
                    rules: [t.isRequired]
                  }, null, 8, ["modelValue", "rules"])
                ]),
                _: 1
                /* STABLE */
              })
            ]),
            _: 1
            /* STABLE */
          }),
          o(m, { "no-gutters": "" }, {
            default: a(() => [
              o(l, null, {
                default: a(() => [
                  o(i, { "html-for": "maxLocations" }, {
                    default: a(() => [
                      c(
                        C(t.$t("searchEsri.configEditor.params.maxLocations")),
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
              o(l, null, {
                default: a(() => [
                  o(u, {
                    id: "maxLocations",
                    clearable: "",
                    type: "number",
                    modelValue: t.localConfig.maxLocations,
                    "onUpdate:modelValue": e[1] || (e[1] = (s) => t.localConfig.maxLocations = s),
                    modelModifiers: { number: !0 }
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
                /* STABLE */
              })
            ]),
            _: 1
            /* STABLE */
          }),
          o(m, { "no-gutters": "" }, {
            default: a(() => [
              o(l, null, {
                default: a(() => [
                  o(i, { "html-for": "zoomDistance" }, {
                    default: a(() => [
                      c(
                        C(t.$t("searchEsri.configEditor.params.zoomDistance")),
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
              o(l, null, {
                default: a(() => [
                  o(u, {
                    id: "zoomDistance",
                    clearable: "",
                    type: "number",
                    modelValue: t.localConfig.zoomDistance,
                    "onUpdate:modelValue": e[2] || (e[2] = (s) => t.localConfig.zoomDistance = s),
                    modelModifiers: { number: !0 }
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
      }),
      o(M, {
        expandable: !0,
        heading: "searchEsri.configEditor.addressMapping"
      }, {
        default: a(() => [
          o(m, { "no-gutters": "" }, {
            default: a(() => [
              o(l, null, {
                default: a(() => [
                  o(i, { "html-for": "addressName" }, {
                    default: a(() => [
                      c("addressName")
                    ]),
                    _: 1
                    /* STABLE */
                  })
                ]),
                _: 1
                /* STABLE */
              }),
              o(l, null, {
                default: a(() => [
                  o(u, {
                    id: "addressName",
                    clearable: "",
                    modelValue: t.localConfig.addressMapping.addressName,
                    "onUpdate:modelValue": e[3] || (e[3] = (s) => t.localConfig.addressMapping.addressName = s),
                    modelModifiers: { trim: !0 }
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
                /* STABLE */
              })
            ]),
            _: 1
            /* STABLE */
          }),
          o(m, { "no-gutters": "" }, {
            default: a(() => [
              o(l, null, {
                default: a(() => [
                  o(i, { "html-for": "street" }, {
                    default: a(() => [
                      c("street")
                    ]),
                    _: 1
                    /* STABLE */
                  })
                ]),
                _: 1
                /* STABLE */
              }),
              o(l, null, {
                default: a(() => [
                  o(u, {
                    id: "street",
                    clearable: "",
                    modelValue: t.localConfig.addressMapping.street,
                    "onUpdate:modelValue": e[4] || (e[4] = (s) => t.localConfig.addressMapping.street = s),
                    modelModifiers: { trim: !0 }
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
                /* STABLE */
              })
            ]),
            _: 1
            /* STABLE */
          }),
          o(m, { "no-gutters": "" }, {
            default: a(() => [
              o(l, null, {
                default: a(() => [
                  o(i, { "html-for": "number" }, {
                    default: a(() => [
                      c("number")
                    ]),
                    _: 1
                    /* STABLE */
                  })
                ]),
                _: 1
                /* STABLE */
              }),
              o(l, null, {
                default: a(() => [
                  o(u, {
                    id: "number",
                    clearable: "",
                    modelValue: t.localConfig.addressMapping.number,
                    "onUpdate:modelValue": e[5] || (e[5] = (s) => t.localConfig.addressMapping.number = s),
                    modelModifiers: { trim: !0 }
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
                /* STABLE */
              })
            ]),
            _: 1
            /* STABLE */
          }),
          o(m, { "no-gutters": "" }, {
            default: a(() => [
              o(l, null, {
                default: a(() => [
                  o(i, { "html-for": "city" }, {
                    default: a(() => [
                      c("city")
                    ]),
                    _: 1
                    /* STABLE */
                  })
                ]),
                _: 1
                /* STABLE */
              }),
              o(l, null, {
                default: a(() => [
                  o(u, {
                    id: "city",
                    clearable: "",
                    modelValue: t.localConfig.addressMapping.city,
                    "onUpdate:modelValue": e[6] || (e[6] = (s) => t.localConfig.addressMapping.city = s),
                    modelModifiers: { trim: !0 }
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
                /* STABLE */
              })
            ]),
            _: 1
            /* STABLE */
          }),
          o(m, { "no-gutters": "" }, {
            default: a(() => [
              o(l, null, {
                default: a(() => [
                  o(i, { "html-for": "zip" }, {
                    default: a(() => [
                      c("zip")
                    ]),
                    _: 1
                    /* STABLE */
                  })
                ]),
                _: 1
                /* STABLE */
              }),
              o(l, null, {
                default: a(() => [
                  o(u, {
                    id: "zip",
                    clearable: "",
                    modelValue: t.localConfig.addressMapping.zip,
                    "onUpdate:modelValue": e[7] || (e[7] = (s) => t.localConfig.addressMapping.zip = s),
                    modelModifiers: { trim: !0 }
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
                /* STABLE */
              })
            ]),
            _: 1
            /* STABLE */
          }),
          o(m, { "no-gutters": "" }, {
            default: a(() => [
              o(l, null, {
                default: a(() => [
                  o(i, { "html-for": "country" }, {
                    default: a(() => [
                      c("country")
                    ]),
                    _: 1
                    /* STABLE */
                  })
                ]),
                _: 1
                /* STABLE */
              }),
              o(l, null, {
                default: a(() => [
                  o(u, {
                    id: "country",
                    clearable: "",
                    modelValue: t.localConfig.addressMapping.country,
                    "onUpdate:modelValue": e[8] || (e[8] = (s) => t.localConfig.addressMapping.country = s),
                    modelModifiers: { trim: !0 }
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
  }, 16, ["onSubmit"]);
}
const K = /* @__PURE__ */ H(Z, [["render", J]]);
function re(t) {
  let e;
  return {
    get name() {
      return b;
    },
    get version() {
      return T;
    },
    get mapVersion() {
      return Q;
    },
    initialize(r) {
      e = r, r.search.add(new G(r, t), b);
    },
    getDefaultOptions: h,
    toJSON() {
      const r = h(), n = {
        url: t.url,
        addressMapping: t.addressMapping
      };
      return t.maxLocations && t.maxLocations !== r.maxLocations && (n.maxLocations = t.maxLocations), t.zoomDistance && t.zoomDistance !== r.zoomDistance && (n.zoomDistance = t.zoomDistance), n;
    },
    i18n: {
      en: {
        searchEsri: {
          configEditor: {
            title: "ESRI Search Editor",
            params: {
              maxLocations: "Maximum number of results",
              zoomDistance: "Zoom Distance"
            },
            addressMapping: "Address Attribute Mapping",
            isRequired: "Input is required"
          }
        }
      },
      de: {
        searchEsri: {
          configEditor: {
            title: "ESRI-Suche Editor",
            params: {
              maxLocations: "Maximale Anzahl Resultate",
              zoomDistance: "Zoom Distance"
            },
            addressMapping: "Adressattribute Abbildung",
            isRequired: "Eingabe ist erforderlich"
          }
        }
      }
    },
    getConfigEditors() {
      return [
        {
          component: K,
          title: "searchEsri.configEditor.title",
          infoUrlCallback: e == null ? void 0 : e.getHelpUrlCallback(
            "/components/plugins/searchToolConfig.html#id_searchEsriConfig",
            "app-configurator"
          )
        }
      ];
    }
  };
}
export {
  re as default
};
