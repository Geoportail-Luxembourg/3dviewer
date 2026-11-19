
function loadCss(href) {
  return new Promise((resolve, reject) => {
    const elem = document.createElement('link');
    elem.rel = 'stylesheet';
    elem.href = href;
    elem.defer = false;
    elem.async = false;
    elem.onload = resolve;
    elem.onerror = reject;
    document.head.appendChild(elem);
  });
} await loadCss('data:text/css;base64,LnZjcy1wb3NpdGlvbi1kaXNwbGF5W2RhdGEtdi03MDYyMTUwNl17aGVpZ2h0OmNhbGModmFyKC0tdi12Y3MtZm9udC1zaXplKSAqIDIgLSA0cHgpfS52Y3MtcG9zaXRpb24tZGlzcGxheS52Y3MtcG9zaXRpb24tdmFsdWVbZGF0YS12LTcwNjIxNTA2XXtjb2xvcjpyZ2IodmFyKC0tdi10aGVtZS1iYXNlLWRhcmtlbi0yKSl9Cg==');var A = Object.defineProperty;
var D = (o, e, n) => e in o ? A(o, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : o[e] = n;
var $ = (o, e, n) => D(o, typeof e != "symbol" ? e + "" : e, n);
import { VcsFormButton as N, VcsFormattedNumber as x, VcsLabel as O, BalloonComponent as T, featureInfoViewSymbol as z, BalloonFeatureInfoView as H, VcsProjection as M, VcsList as K, AbstractConfigEditor as U, NotificationType as I } from "../../../assets/ui.js";
import { Projection as g, wgs84Projection as f, mercatorProjection as L, getDefaultProjection as C } from "../../../assets/core.js";
import { ol$coordinate$toStringHDMS as q, ol$extent$containsCoordinate as J, Feature as Q, ol$geom$Point as X } from "../../../assets/ol.js";
import { VCol as k, VIcon as Y, VRow as F, VForm as Z, VContainer as ee } from "../../../assets/vuetify.js";
import { defineComponent as B, inject as R, resolveComponent as c, openBlock as y, createBlock as S, normalizeProps as oe, guardReactiveProps as te, withCtx as a, createVNode as i, createTextVNode as v, toDisplayString as h, createCommentVNode as ne, reactive as re, ref as j, toRaw as se, mergeProps as ie } from "../../../assets/vue.js";
const w = "@vcmap/search-coordinate", ae = "2.0.1", ce = "^6.0", le = B({
  name: "CoordinateBalloonComponent",
  components: {
    VcsFormButton: N,
    VcsFormattedNumber: x,
    VcsLabel: O,
    BalloonComponent: T,
    VCol: k,
    VIcon: Y,
    VRow: F
  },
  setup(o, { attrs: e }) {
    const n = R("vcsApp"), t = g.transform(
      f,
      L,
      e.position
    );
    return {
      swapValue() {
        const s = n.vueI18n.t("searchCoordinate.balloon.title");
        n.search.search(t.slice(0, 2).reverse().join(", ")).then((l) => {
          var d, r;
          l.length > 0 && ((r = (d = l.find((p) => p.title.includes(s))).clicked) == null || r.call(d).catch(() => {
          }));
        }).catch(() => {
        });
      }
    };
  }
}), G = (o, e) => {
  const n = o.__vccOpts || o;
  for (const [t, s] of e)
    n[t] = s;
  return n;
};
function pe(o, e, n, t, s, l) {
  const d = c("v-icon"), r = c("v-col"), p = c("VcsLabel"), u = c("VcsFormattedNumber"), _ = c("v-row"), P = c("VcsFormButton"), b = c("BalloonComponent");
  return y(), S(
    b,
    oe(te({ ...o.$attrs })),
    {
      default: a(({ attrs: m }) => [
        i(
          _,
          { "no-gutters": "" },
          {
            default: a(() => [
              i(r, {
                cols: "2",
                class: "d-flex justify-center align-center"
              }, {
                default: a(() => [
                  i(d, { size: "20" }, {
                    default: a(() => [
                      v(" $vcsHomePoint ")
                    ]),
                    _: 1
                    /* STABLE */
                  })
                ]),
                _: 1
                /* STABLE */
              }),
              i(
                r,
                { cols: "10" },
                {
                  default: a(() => [
                    i(p, { class: "py-0 vcs-position-display" }, {
                      default: a(() => [
                        v(
                          h(o.$t("searchCoordinate.balloon.geographic")) + " (WGS84) ",
                          1
                          /* TEXT */
                        )
                      ]),
                      _: 1
                      /* STABLE */
                    }),
                    i(
                      p,
                      { class: "py-0 vcs-position-display vcs-position-value" },
                      {
                        default: a(() => [
                          v(
                            h(`Lat: ${m.attributes.pointWGS84[0]}   Lon: ${m.attributes.pointWGS84[1]}`),
                            1
                            /* TEXT */
                          )
                        ]),
                        _: 2
                        /* DYNAMIC */
                      },
                      1024
                      /* DYNAMIC_SLOTS */
                    ),
                    i(
                      p,
                      { class: "py-0 vcs-position-display" },
                      {
                        default: a(() => [
                          v(
                            h(o.$t("searchCoordinate.balloon.projected")) + " (" + h(m.attributes.epsg) + ") ",
                            1
                            /* TEXT */
                          )
                        ]),
                        _: 2
                        /* DYNAMIC */
                      },
                      1024
                      /* DYNAMIC_SLOTS */
                    ),
                    i(
                      _,
                      { "no-gutters": "" },
                      {
                        default: a(() => [
                          i(u, {
                            class: "py-0 vcs-position-display vcs-position-value",
                            prefix: "x:",
                            "model-value": m.attributes.pointProjected[0],
                            "number-format-options": { useGrouping: !1 }
                          }, null, 8, ["model-value"]),
                          i(u, {
                            class: "py-0 pl-2 vcs-position-display vcs-position-value",
                            prefix: "y:",
                            "model-value": m.attributes.pointProjected[1],
                            "number-format-options": { useGrouping: !1 }
                          }, null, 8, ["model-value"])
                        ]),
                        _: 2
                        /* DYNAMIC */
                      },
                      1024
                      /* DYNAMIC_SLOTS */
                    ),
                    i(
                      _,
                      {
                        "no-gutters": "",
                        class: "pt-2"
                      },
                      {
                        default: a(() => [
                          m.attributes.isWGS84Input ? (y(), S(P, {
                            key: 0,
                            onClick: o.swapValue
                          }, {
                            default: a(() => [
                              v(
                                h(o.$t("searchCoordinate.balloon.swapLonLat")),
                                1
                                /* TEXT */
                              )
                            ]),
                            _: 1
                            /* STABLE */
                          }, 8, ["onClick"])) : ne("v-if", !0)
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
              )
            ]),
            _: 2
            /* DYNAMIC */
          },
          1024
          /* DYNAMIC_SLOTS */
        )
      ]),
      _: 1
      /* STABLE */
    },
    16
    /* FULL_PROPS */
  );
}
const de = /* @__PURE__ */ G(le, [["render", pe], ["__scopeId", "data-v-70621506"]]), ue = /(?:90|[0-8]?[0-9])°\s*([0-5]?[0-9]'\s*)?([0-5]?[0-9](?:[.,]\d{1,5})?"\s*)?\s*[NS]/, me = /(?:180|1[0-7][0-9]|0?[0-9][0-9]|[0-9])°\s*([0-5]?[0-9]'\s*)?([0-5]?[0-9](?:[.,]\d{1,5})?"\s*)?\s?[EW]/;
function fe(o) {
  let e = 0, n;
  const t = o.split(/[^\w.]+/);
  return t.length === 2 ? (e = Number(t[0]), n = t[1]) : t.length === 3 ? (e = Number(t[0]) + Number(t[1]) / 60, n = t[2]) : t.length === 4 && (e = Number(t[0]) + Number(t[1]) / 60 + Number(t[2]) / (60 * 60), n = t[3]), (n === "S" || n === "W") && (e *= -1), e;
}
function ge(o) {
  return o.map(fe);
}
function ve(o) {
  const e = q(o), n = e.match(/\s*[NSEW]\s*/g), t = e.split(/\s*[NSEW]\s*/g);
  return [
    `${t[0]}${n[0]}`.trim(),
    `${t[1]}${n[1]}`.trim()
  ];
}
function W(o) {
  return [f, C(), ...o].filter(
    (e, n, t) => n === t.findIndex((s) => s.epsg === e.epsg)
  );
}
class he {
  constructor(e, n) {
    $(this, "app");
    $(this, "searchProjections");
    this.app = e, this.searchProjections = [], n.searchProjections && (this.searchProjections = n.searchProjections.map(
      (t) => new g(t)
    ));
  }
  // eslint-disable-next-line class-methods-use-this
  get name() {
    return w;
  }
  async search(e) {
    const n = [];
    let t;
    const s = e.match(ue), l = e.match(me);
    if (l && s)
      t = ge([l[0], s[0]]);
    else {
      const d = e.match(/-?\d+([.,]\d*)?/g);
      d && (t = d.map((r) => parseFloat(r.replace(",", "."))).filter(Number.isFinite).slice(0, 2));
    }
    return Array.isArray(t) && t.length === 2 && W(this.searchProjections).forEach((r) => {
      const p = g.transform(f, r, t), u = r.proj.getExtent();
      u ? J(u, p) && (r.epsg === f.epsg ? n.push(this.createResultItem(t)) : n.push(
        this.createResultItem(p, t, r.epsg)
      )) : n.push(this.createResultItem(p, t, r.epsg));
    }), Promise.resolve(n);
  }
  createResultItem(e, n, t) {
    const s = C(), l = new Q();
    l.setGeometry(
      new X(
        g.transform(L, f, e)
      )
    );
    const d = {
      pointWGS84: ve(e),
      pointProjected: n || g.transform(s, f, e),
      epsg: t || s.epsg,
      isWGS84Input: !t
    };
    l.setProperties(d);
    const r = `${this.app.vueI18n.t("searchCoordinate.balloon.title")} ${t || "WGS84 (lon/lat)"}`;
    return l[z] = new H(
      {
        name: "CoordinateSearchBalloon",
        balloonTitle: r,
        balloonSubtitle: ""
      },
      de
    ), {
      title: r,
      feature: l,
      icon: "$vcsPoi"
    };
  }
  // eslint-disable-next-line class-methods-use-this
  abort() {
  }
  // eslint-disable-next-line class-methods-use-this
  destroy() {
  }
}
function E(o, e) {
  if (o) {
    const n = o.proj.getCode();
    return {
      name: n,
      title: n,
      disabled: o.epsg === f.epsg || o.epsg === C().epsg,
      value: {
        epsg: o.epsg,
        proj4: o.proj4
      },
      actions: [
        {
          name: "searchCoordinate.configEditor.removeProjection",
          callback() {
            const t = e.value.findIndex(
              (s) => s.name === n
            );
            e.value.splice(t, 1);
          }
        }
      ]
    };
  }
  return null;
}
const _e = B({
  name: "CoordinateSearchEditor",
  methods: { reactive: re },
  components: {
    VcsProjection: M,
    VcsFormButton: N,
    VcsList: K,
    VForm: Z,
    VContainer: ee,
    VRow: F,
    VCol: k,
    AbstractConfigEditor: U
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
  setup(o) {
    const e = R("vcsApp"), n = j(o.getConfig()), t = j([]), s = j({}), l = j(!1);
    return t.value = W(
      (n.value.searchProjections || []).map(
        (r) => new g(r)
      )
    ).map((r) => E(r, t)).filter((r) => r !== null), {
      apply: () => {
        o.setConfig({
          ...n.value,
          searchProjections: t.value.map((r) => se(r.value)).filter(
            (r) => r.epsg !== f.epsg && r.epsg !== C().epsg
          )
        });
      },
      inputOptions: s,
      projectionItems: t,
      validProjection: l,
      addProjectionItem() {
        const r = new g(s.value);
        if (t.value.some((u) => u.value.epsg === r.epsg)) {
          e.notifier.add({
            message: e.vueI18n.t("searchCoordinate.configEditor.existing"),
            type: I.WARNING
          });
          return;
        }
        const p = E(
          r,
          t
        );
        p ? t.value.push(p) : e.notifier.add({
          message: e.vueI18n.t(
            "searchCoordinate.configEditor.invalidInput"
          ),
          type: I.ERROR
        });
      }
    };
  }
});
function je(o, e, n, t, s, l) {
  const d = c("vcs-projection"), r = c("v-form"), p = c("VcsFormButton"), u = c("v-col"), _ = c("v-row"), P = c("VcsList"), b = c("v-container"), m = c("AbstractConfigEditor");
  return y(), S(m, ie({ onSubmit: o.apply }, { ...o.$attrs, ...o.$props }), {
    default: a(() => [
      i(b, { class: "py-0 px-1" }, {
        default: a(() => [
          i(r, {
            modelValue: o.validProjection,
            "onUpdate:modelValue": e[1] || (e[1] = (V) => o.validProjection = V)
          }, {
            default: a(() => [
              i(d, {
                modelValue: o.inputOptions,
                "onUpdate:modelValue": e[0] || (e[0] = (V) => o.inputOptions = V),
                required: ""
              }, null, 8, ["modelValue"])
            ]),
            _: 1
            /* STABLE */
          }, 8, ["modelValue"]),
          i(_, { "no-gutters": "" }, {
            default: a(() => [
              i(u, null, {
                default: a(() => [
                  i(p, {
                    onClick: o.addProjectionItem,
                    disabled: !o.validProjection
                  }, {
                    default: a(() => [
                      v(
                        h(o.$t("searchCoordinate.configEditor.addProjection")),
                        1
                        /* TEXT */
                      )
                    ]),
                    _: 1
                    /* STABLE */
                  }, 8, ["onClick", "disabled"])
                ]),
                _: 1
                /* STABLE */
              })
            ]),
            _: 1
            /* STABLE */
          }),
          i(P, {
            title: "searchCoordinate.configEditor.projections",
            items: o.projectionItems
          }, null, 8, ["items"])
        ]),
        _: 1
        /* STABLE */
      })
    ]),
    _: 1
    /* STABLE */
  }, 16, ["onSubmit"]);
}
const Ce = /* @__PURE__ */ G(_e, [["render", je]]);
function we(o) {
  let e;
  return {
    get name() {
      return w;
    },
    get version() {
      return ae;
    },
    get mapVersion() {
      return ce;
    },
    toJSON() {
      return o;
    },
    initialize(n) {
      e = n, n.search.add(new he(n, o), w);
    },
    getDefaultOptions() {
      return {};
    },
    i18n: {
      en: {
        searchCoordinate: {
          balloon: {
            title: "Searched Position",
            description: "Coordinate",
            geographic: "Geographic",
            projected: "Projected",
            swapLonLat: "Swap Lon/Lat"
          },
          configEditor: {
            title: "Coordinate Search Editor",
            projections: "Projections",
            addProjection: "Add",
            removeProjection: "Remove projection",
            invalidInput: "Please enter a valid epsg or proj4",
            existing: "Projection already defined."
          }
        }
      },
      de: {
        searchCoordinate: {
          balloon: {
            title: "Gesuchte Position",
            description: "Koordinate",
            geographic: "Geographisch",
            projected: "Projiziert",
            swapLonLat: "Tausche Lon/Lat"
          },
          configEditor: {
            title: "Koordinatensuche Editor",
            projections: "Projektionen",
            addProjection: "hinzufügen",
            removeProjection: "Projektion entfernen",
            invalidInput: "Geben Sie gültige eine epsg oder proj4 ein",
            existing: "Projektion ist bereits definiert."
          }
        }
      }
    },
    getConfigEditors() {
      return [
        {
          component: Ce,
          title: "searchCoordinate.configEditor.title",
          infoUrlCallback: e == null ? void 0 : e.getHelpUrlCallback(
            "/components/plugins/searchToolConfig.html#id_searchCoordinateConfig",
            "app-configurator"
          )
        }
      ];
    }
  };
}
export {
  we as default
};
