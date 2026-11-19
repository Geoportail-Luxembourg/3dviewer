var ae = Object.defineProperty;
var ie = (e, r, t) => r in e ? ae(e, r, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[r] = t;
var E = (e, r, t) => ie(e, typeof r != "symbol" ? r + "" : r, t);
import { Projection as v, wgs84Projection as X, requestUrl as se, mercatorProjection as ue } from "../../../assets/core.js";
import { featureInfoViewSymbol as de, VcsTextArea as fe, VcsChipArrayInput as pe, VcsFormSection as me, AbstractConfigEditor as ce, VcsLabel as ge, VcsTextField as ye, VcsProjection as he, VcsSelect as Ee } from "../../../assets/ui.js";
import { ol$format$WFS as be } from "../../../assets/ol.js";
import { TrustedServers as Ve } from "../../../assets/cesium.js";
import { VContainer as Oe, VRow as we, VCol as Se, VSwitch as Ne } from "../../../assets/vuetify.js";
import { defineComponent as Ce, ref as B, watch as Te, resolveComponent as y, openBlock as M, createBlock as P, withCtx as n, createVNode as o, createTextVNode as c, toDisplayString as O, createElementBlock as Fe, Fragment as _e, createCommentVNode as D } from "../../../assets/vue.js";
const C = "@vcmap/search-wfs", Me = "2.1.0", Re = "^6.0";
function $e(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var G = {}, J = Array.prototype, K = Object.prototype, Ae = J.slice, ve = K.toString, Q = K.hasOwnProperty, x = J.forEach, ke = Object.keys, je = Array.isArray, g = function() {
}, Ue = g.each = g.forEach = function(e, r, t) {
  if (e != null) {
    if (x && e.forEach === x)
      e.forEach(r, t);
    else if (e.length === +e.length) {
      for (var l = 0, s = e.length; l < s; l++)
        if (r.call(t, e[l], l, e) === G) return;
    } else
      for (var f = g.keys(e), l = 0, s = f.length; l < s; l++)
        if (r.call(t, e[f[l]], f[l], e) === G) return;
  }
};
g.keys = ke || function(e) {
  if (e !== Object(e)) throw new TypeError("Invalid object");
  var r = [];
  for (var t in e) g.has(e, t) && r.push(t);
  return r;
};
g.defaults = function(e) {
  return Ue(Ae.call(arguments, 1), function(r) {
    if (r)
      for (var t in r)
        e[t] === void 0 && (e[t] = r[t]);
  }), e;
};
g.isArray = je || function(e) {
  return ve.call(e) === "[object Array]";
};
g.has = function(e, r) {
  if (!g.isArray(r))
    return e != null && Q.call(e, r);
  for (var t = r.length, l = 0; l < t; l++) {
    var s = r[l];
    if (e == null || !Q.call(e, s))
      return !1;
    e = e[s];
  }
  return !!t;
};
var H = {
  escape: {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#x27;"
  }
}, qe = {
  escape: new RegExp("[" + g.keys(H.escape).join("") + "]", "g")
};
g.each(["escape"], function(e) {
  g[e] = function(r) {
    return r == null ? "" : ("" + r).replace(qe[e], function(t) {
      return H[e][t];
    });
  };
});
g.templateSettings = {
  evaluate: /<%([\s\S]+?)%>/g,
  interpolate: /<%=([\s\S]+?)%>/g,
  escape: /<%-([\s\S]+?)%>/g
};
var R = /(.)^/, Ie = {
  "'": "'",
  "\\": "\\",
  "\r": "r",
  "\n": "n",
  "	": "t",
  "\u2028": "u2028",
  "\u2029": "u2029"
}, We = /\\|'|\r|\n|\t|\u2028|\u2029/g;
g.template = function(e, r, t) {
  var l;
  t = g.defaults({}, t, g.templateSettings);
  var s = new RegExp([
    (t.escape || R).source,
    (t.interpolate || R).source,
    (t.evaluate || R).source
  ].join("|") + "|$", "g"), f = 0, i = "__p+='";
  e.replace(s, function(d, p, h, F, _) {
    return i += e.slice(f, _).replace(We, function(w) {
      return "\\" + Ie[w];
    }), p && (i += `'+
((__t=(` + p + `))==null?'':_.escape(__t))+
'`), h && (i += `'+
((__t=(` + h + `))==null?'':__t)+
'`), F && (i += `';
` + F + `
__p+='`), f = _ + d.length, d;
  }), i += `';
`, t.variable || (i = `with(obj||{}){
` + i + `}
`), i = `var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};
` + i + `return __p;
`;
  try {
    l = new Function(t.variable || "obj", "_", i);
  } catch (d) {
    throw d.source = i, d;
  }
  if (r) return l(r, g);
  var a = function(d) {
    return l.call(this, d, g);
  };
  return a.source = "function(" + (t.variable || "obj") + `){
` + i + "}", a;
};
var Le = g, Z = Le, Be = Z.template;
function W(e, r, t) {
  return Be(e, r, t);
}
W._ = Z;
var Pe = W;
(typeof window < "u" || typeof navigator < "u") && (window.UnderscoreTemplate = W);
const $ = /* @__PURE__ */ $e(Pe);
function De(e, r) {
  const t = {};
  return Ve.contains(e) && (t.credentials = "include"), t;
}
function Ge(e, r) {
  return e == null ? r : typeof e == "boolean" ? e : e === 1 ? !0 : e === 0 ? !1 : typeof e == "string" && (e.toLowerCase() === "true" || e.toLowerCase() === "1") ? !0 : typeof e == "string" && (e.toLowerCase() === "false" || e.toLowerCase() === "0") ? !1 : r;
}
const N = [
  [String, "string"],
  [Number, "number"],
  [Boolean, "boolean"],
  [Function, "function"],
  [void 0, "undefined"],
  [Symbol, "symbol"]
];
function k(e) {
  const r = {};
  if (!e || r.toString(e) !== "[object Object]")
    return !1;
  const t = Object.getPrototypeOf(e);
  if (!t)
    return !0;
  const l = r.hasOwnProperty, s = l.call(t, "constructor") && t.constructor;
  return typeof s == "function" && l.toString.call(s) === l.toString.call(Object);
}
function b(e, r) {
  if (e === null)
    return "null";
  if (typeof e > "u")
    return "undefined";
  if (r)
    return typeof e;
  let t;
  if (Array.isArray(e))
    t = `[${e.map((s) => b(s, r)).join(",")}]`;
  else
    try {
      t = JSON.stringify(e);
    } catch {
      t = typeof e;
    }
  return t = t || typeof e, t.length > 20 ? `${t.substr(0, 20)}...` : t;
}
function Qe(e, r) {
  return typeof r == "string" || typeof r == "number" || typeof r == "boolean" || typeof r == "symbol" ? e === r ? !1 : `Expected ${b(e)} to equal ${r.toString()}` : null;
}
function xe(e, r, t) {
  if (Array.isArray(r)) {
    if (r.length !== 1)
      throw new Error("Array patterns may only have on type");
    if (Array.isArray(e)) {
      let l = !1;
      return e.findIndex((f) => {
        try {
          ee(f, r[0], t);
        } catch (i) {
          l = i.message.replace(/Match failed:\s/, "");
        }
        return l;
      }) > -1 ? `${l} in ${b(e)}` : !1;
    }
    return `Expected ${b(e)} to be an Array`;
  }
  return null;
}
function j(e, r, t) {
  const l = t ? `${t}.` : "";
  if (!k(e))
    return `Expected ${b(e)} to be a plain Object`;
  let f = !1;
  const i = Object.keys(r).find((a) => {
    const d = e[a];
    if (k(r[a]))
      f = j(d, r[a], l + a);
    else
      try {
        ee(d, r[a]);
      } catch (p) {
        f = p.message.replace(/Match failed:\s/, "");
      }
    return f;
  });
  return i ? `${f} in object.${l}${i}` : !1;
}
function ze(e, r) {
  if (r === Number)
    return Number.isFinite(e) ? !1 : `expected ${b(e)} to be a number, excluding NaN`;
  for (let t = N.length; t--; )
    if (r === N[t][0])
      return typeof e === N[t][1] ? !1 : `expected ${b(e)} to be a ${N[t][1]}`;
  return null;
}
function U(e) {
  if (e === null)
    return "null";
  const r = N.find((s) => s[0] === e);
  if (r)
    return r[1];
  let t = e.toString();
  if (e.className)
    return e.className;
  const l = t.match(/function (.*)\(/);
  if (l && l.length > 1)
    return l[1];
  if (k(e)) {
    const s = {};
    Object.keys(e).forEach((f) => {
      s[f] = U(e[f]);
    });
    try {
      t = `Object of ${JSON.stringify(s)}`;
    } catch {
      t = "Object";
    }
  }
  return t;
}
function Y(e, r, t) {
  const l = function(i, a) {
    if (a == null)
      return i === a ? !1 : `Expected ${b(i)} to be ${a}`;
    const d = ze(i, a);
    if (d !== null)
      return d;
    const p = Qe(i, a);
    if (p !== null)
      return p;
    if (Array.isArray(a))
      return xe(i, a, t);
    if (a instanceof Function)
      return i instanceof a ? !1 : `Expected ${b(i, !0)} to be of Type ${U(a)}`;
    if (a === Object)
      return j(i, {});
    if (typeof a != "object")
      throw new Error(`Cannot handler pattern ${a}`);
    const h = j(i, a);
    return h || !1;
  };
  let s;
  return Array.isArray(r) && r.length > 1 ? r.every((i) => l(e, i)) && (s = `Expected ${b(e)} to be a ${r.map((i) => U(i)).join(" or ")}`) : s = l(e, r), s;
}
function A(e, r, t) {
  return !Y(e, r, t);
}
function ee(e, r, t) {
  const l = Y(e, r, t);
  if (l)
    throw new Error(`Match failed: ${l}`);
  return !1;
}
const m = {
  OFF: 1,
  ERROR: 2,
  WARN: 4,
  INFO: 8,
  DEBUG: 16
}, V = {
  ERROR: 0,
  WARN: 0,
  INFO: 0,
  DEBUG: 0
};
V.ERROR = m.ERROR | m.WARN | m.INFO | m.DEBUG;
V.WARN = m.WARN | m.INFO | m.DEBUG;
V.INFO = m.INFO | m.DEBUG;
V.DEBUG = m.DEBUG;
const S = {
  useTimestamp: !1,
  logLevel: m.INFO
}, T = /* @__PURE__ */ new Map();
T.set(m.ERROR, "error");
T.set(m.WARN, "warn");
T.set(m.INFO, "info");
T.set(m.DEBUG, "log");
class Xe {
  /**
   * @param {string=} className
   */
  constructor(r) {
    this.className = r, this.deprecations = /* @__PURE__ */ new Map();
  }
  /**
   * Logs an error message
   * @param {string} msg The message to log.
   * @param {...any} optArgs
   */
  error(r, ...t) {
    S.logLevel & V.ERROR && this._log(String(r), m.ERROR, t);
  }
  /**
   * Logs a warning message
   * @param {string} msg The message to log.
   * @param {...any} optArgs
   */
  warning(r, ...t) {
    S.logLevel & V.WARN && this._log(String(r), m.WARN, t);
  }
  /**
   * Deprecate a function. deprecations are stored on the logger
   * @param {string} functionName
   * @param {string=} alternativeFunctionName
   */
  deprecate(r, t) {
    const l = String(r), s = t ? String(t) : null;
    if (!this.deprecations.has(l)) {
      this.deprecations.set(l, s || null);
      let f = `${l} has been deprecated and will be removed`;
      s && (f = `${f}. ${s}`), this.warning(f);
    }
  }
  /**
   * Logs an info message
   * @param {string} msg The message to log.
   * @param {...any} optArgs
   */
  info(r, ...t) {
    S.logLevel & V.INFO && this._log(String(r), m.INFO, t);
  }
  /**
   * Logs a debug message
   * @param {string} msg The message to log.
   * @param {...any} optArgs
   */
  debug(r, ...t) {
    S.logLevel & V.DEBUG && this._log(String(r), m.DEBUG, t);
  }
  /**
   * Alias for debug
   * @param {string} msg The message to log.
   * @param {...any} optArgs
   */
  log(r, ...t) {
    S.logLevel & V.DEBUG && this._log(String(r), m.DEBUG, t);
  }
  /**
   * Logs a message
   * @param {string} msg The message to log.
   * @param {LOG_LEVEL} level
   * @param {Array} optArgs
   * @private
   */
  _log(r, t, l) {
    let s = r;
    this.className && (s = `[${this.className}] ${s}`), console[T.get(t)](s, ...l), t & m.ERROR && (console.group(), console.trace(), console.groupEnd());
  }
}
const q = /* @__PURE__ */ new Map();
function Je(e) {
  const r = new Xe(e);
  return q.set(e, r), r;
}
function z(e) {
  return q.has(e) ? q.get(e) : Je(e);
}
class Ke {
  constructor(r, t) {
    E(this, "app");
    E(this, "url");
    E(this, "getFeatureOptions");
    E(this, "filterExpression");
    E(this, "displayNameTemplate");
    E(this, "isStoredQuery");
    E(this, "regEx");
    E(this, "minToken");
    E(this, "projection");
    E(this, "featureInfoViewOptions");
    this.app = r, A(t.url, String) ? this.url = t.url.replace(/\/$/, "") : z(C).error("Please provide an url");
    let l;
    t.featureInfoViewOptions ? l = {
      name: "WfsSearchBalloon",
      balloonSubtitle: "",
      ...t.featureInfoViewOptions
    } : l = {
      type: "AddressBalloonFeatureInfoView",
      name: "WfsSearchBalloon",
      balloonSubtitle: "",
      ...t.addressMapping
    }, this.featureInfoViewOptions = l, this.getFeatureOptions = t.getFeatureOptions, A(t.filterExpression, String) ? this.filterExpression = $(t.filterExpression) : z(C).error("Please provide a filter expression"), A(t.displayNameTemplate, String) ? this.displayNameTemplate = $(
      t.displayNameTemplate
    ) : this.displayNameTemplate = $(
      `<%= ${t.addressMapping.street} %> <%= ${t.addressMapping.number} %>, <%= ${t.addressMapping.zip} %> <%= ${t.addressMapping.city} %>`
    ), this.isStoredQuery = Ge(t.isStoredQuery, !1), this.regEx = t.regEx, this.minToken = t.minToken, this.projection = new v(
      t.projection ?? X.toJSON()
    );
  }
  // eslint-disable-next-line class-methods-use-this
  get name() {
    return C;
  }
  async search(r) {
    const t = new be(), l = this.generateGetFeatureXMLString(r, t);
    if (!l)
      return Promise.resolve([]);
    const s = De(this.url);
    return s.method = "POST", s.body = l, s.headers = {
      "Content-Type": "application/text+xml"
    }, se(this.url, s).then((f) => f.text()).then((f) => t.readFeatures(f, {
      dataProjection: this.projection.proj,
      featureProjection: ue.proj
    }).map((i) => {
      const a = this.displayNameTemplate(
        i.getProperties()
      );
      return i[de] = this.app.featureInfoClassRegistry.createFromTypeOptions(
        this.featureInfoViewOptions
      ), {
        title: a,
        feature: i
      };
    })).catch((f) => Promise.reject(f));
  }
  generateGetFeatureXMLString(r, t) {
    const l = r.match(new RegExp(this.regEx, "u"));
    if (!l || l.length < this.minToken + 1)
      return null;
    const s = new DOMParser(), f = this.filterExpression({ token: l }), i = t.writeGetFeature(
      this.getFeatureOptions
    ), a = s.parseFromString(f, "text/xml"), d = i.getElementsByTagName("Query")[0];
    if (this.isStoredQuery) {
      const p = a.documentElement;
      for (let h = 0; h < d.attributes.length; h++)
        p.attributes.setNamedItem(
          d.attributes[h].cloneNode()
        );
      d.parentNode.replaceChild(p, d);
    } else
      d.appendChild(a.documentElement);
    return new XMLSerializer().serializeToString(i);
  }
  // eslint-disable-next-line class-methods-use-this
  abort() {
  }
  // eslint-disable-next-line class-methods-use-this
  destroy() {
  }
}
function I() {
  return {
    url: "./search-wfs",
    addressMapping: {
      city: "ort",
      street: "strasse",
      number: "hnr",
      zip: "plz"
    },
    getFeatureOptions: {
      featureNS: "",
      featurePrefix: "",
      featureTypes: [],
      maxFeatures: 10,
      geometryName: "geom",
      srsName: "urn:ogc:def:crs:EPSG::4326"
    },
    filterExpression: "",
    regEx: "^([\\p{L}0-9'\\.\\-\\s]+?),*\\s*([0-9\\-]+\\s*[a-zA-Z]{0,1})?$",
    minToken: 1,
    projection: X.toJSON()
  };
}
function re(e) {
  const r = I();
  return e && Object.entries(e).forEach(([t, l]) => {
    l && (typeof l == "object" ? r[t] = { ...r[t], ...l } : r[t] = l);
  }), r;
}
function He(e) {
  return e !== "" || "searchWfs.configEditor.isRequired";
}
const Ze = Ce({
  name: "WfsSearchEditor",
  components: {
    VcsTextArea: fe,
    VcsChipArrayInput: pe,
    VcsFormSection: me,
    VContainer: Oe,
    VRow: we,
    VCol: Se,
    VSwitch: Ne,
    AbstractConfigEditor: ce,
    VcsLabel: ge,
    VcsTextField: ye,
    VcsProjection: he,
    VcsSelect: Ee
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
  setup(e) {
    var s;
    const r = B(re(e.getConfig())), t = B(
      ((s = r.value.featureInfoViewOptions) == null ? void 0 : s.type) === "MarkdownBalloonFeatureInfoView" ? "markdown" : "address"
    );
    return Te(
      t,
      () => {
        t.value === "address" ? r.value.featureInfoViewOptions = void 0 : r.value.featureInfoViewOptions = {
          type: "MarkdownBalloonFeatureInfoView",
          template: ""
        };
      },
      { flush: "sync" }
    ), {
      apply: () => {
        e.setConfig(r.value);
      },
      isRequired: He,
      localConfig: r,
      balloonType: t
    };
  }
}), Ye = (e, r) => {
  const t = e.__vccOpts || e;
  for (const [l, s] of r)
    t[l] = s;
  return t;
};
function er(e, r, t, l, s, f) {
  const i = y("VcsLabel"), a = y("v-col"), d = y("VcsTextField"), p = y("v-row"), h = y("VcsTextArea"), F = y("v-switch"), _ = y("vcs-projection"), w = y("v-container"), te = y("VcsChipArrayInput"), L = y("VcsFormSection"), oe = y("vcs-text-field"), ne = y("vcs-select"), le = y("AbstractConfigEditor");
  return M(), P(le, { onSubmit: e.apply }, {
    default: n(() => [
      o(w, { class: "py-0 px-1" }, {
        default: n(() => [
          o(p, { "no-gutters": "" }, {
            default: n(() => [
              o(a, null, {
                default: n(() => [
                  o(i, {
                    "html-for": "url",
                    required: ""
                  }, {
                    default: n(() => [
                      c("URL")
                    ]),
                    _: 1
                    /* STABLE */
                  })
                ]),
                _: 1
                /* STABLE */
              }),
              o(a, null, {
                default: n(() => [
                  o(d, {
                    id: "url",
                    clearable: "",
                    modelValue: e.localConfig.url,
                    "onUpdate:modelValue": r[0] || (r[0] = (u) => e.localConfig.url = u),
                    modelModifiers: { trim: !0 },
                    rules: [e.isRequired]
                  }, null, 8, ["modelValue", "rules"])
                ]),
                _: 1
                /* STABLE */
              })
            ]),
            _: 1
            /* STABLE */
          }),
          o(p, { "no-gutters": "" }, {
            default: n(() => [
              o(a, null, {
                default: n(() => [
                  o(i, {
                    "html-for": "regEx",
                    required: ""
                  }, {
                    default: n(() => [
                      c(
                        O(e.$t("searchWfs.configEditor.regEx")),
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
              o(a, null, {
                default: n(() => [
                  o(d, {
                    id: "regEx",
                    clearable: "",
                    modelValue: e.localConfig.regEx,
                    "onUpdate:modelValue": r[1] || (r[1] = (u) => e.localConfig.regEx = u),
                    modelModifiers: { trim: !0 },
                    rules: [e.isRequired]
                  }, null, 8, ["modelValue", "rules"])
                ]),
                _: 1
                /* STABLE */
              })
            ]),
            _: 1
            /* STABLE */
          }),
          o(p, { "no-gutters": "" }, {
            default: n(() => [
              o(a, null, {
                default: n(() => [
                  o(i, {
                    "html-for": "minToken",
                    required: ""
                  }, {
                    default: n(() => [
                      c(
                        O(e.$t("searchWfs.configEditor.minToken")),
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
              o(a, null, {
                default: n(() => [
                  o(d, {
                    id: "minToken",
                    clearable: "",
                    type: "number",
                    modelValue: e.localConfig.minToken,
                    "onUpdate:modelValue": r[2] || (r[2] = (u) => e.localConfig.minToken = u),
                    modelModifiers: { number: !0 },
                    rules: [e.isRequired]
                  }, null, 8, ["modelValue", "rules"])
                ]),
                _: 1
                /* STABLE */
              })
            ]),
            _: 1
            /* STABLE */
          }),
          o(p, { "no-gutters": "" }, {
            default: n(() => [
              o(a, null, {
                default: n(() => [
                  o(i, {
                    "html-for": "filterExpression",
                    required: ""
                  }, {
                    default: n(() => [
                      c(
                        O(e.$t("searchWfs.configEditor.filterExpression")),
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
              o(a, null, {
                default: n(() => [
                  o(h, {
                    id: "filterExpression",
                    clearable: "",
                    modelValue: e.localConfig.filterExpression,
                    "onUpdate:modelValue": r[3] || (r[3] = (u) => e.localConfig.filterExpression = u),
                    modelModifiers: { trim: !0 },
                    rules: [e.isRequired]
                  }, null, 8, ["modelValue", "rules"])
                ]),
                _: 1
                /* STABLE */
              })
            ]),
            _: 1
            /* STABLE */
          }),
          o(p, { "no-gutters": "" }, {
            default: n(() => [
              o(F, {
                class: "pl-1",
                "html-for": "isStoredQuery",
                modelValue: e.localConfig.isStoredQuery,
                "onUpdate:modelValue": r[4] || (r[4] = (u) => e.localConfig.isStoredQuery = u),
                label: e.$t("searchWfs.configEditor.storedQuery")
              }, null, 8, ["modelValue", "label"])
            ]),
            _: 1
            /* STABLE */
          }),
          o(p, { "no-gutters": "" }, {
            default: n(() => [
              o(_, {
                modelValue: e.localConfig.projection,
                "onUpdate:modelValue": r[5] || (r[5] = (u) => e.localConfig.projection = u)
              }, null, 8, ["modelValue"])
            ]),
            _: 1
            /* STABLE */
          })
        ]),
        _: 1
        /* STABLE */
      }),
      o(L, {
        expandable: !0,
        "start-open": "",
        heading: "searchWfs.configEditor.queryOptions"
      }, {
        default: n(() => [
          o(w, { class: "py-0 px-1" }, {
            default: n(() => [
              o(p, { "no-gutters": "" }, {
                default: n(() => [
                  o(a, null, {
                    default: n(() => [
                      o(i, {
                        "html-for": "featureNS",
                        required: ""
                      }, {
                        default: n(() => [
                          c("featureNS")
                        ]),
                        _: 1
                        /* STABLE */
                      })
                    ]),
                    _: 1
                    /* STABLE */
                  }),
                  o(a, null, {
                    default: n(() => [
                      o(d, {
                        id: "featureNS",
                        clearable: "",
                        modelValue: e.localConfig.getFeatureOptions.featureNS,
                        "onUpdate:modelValue": r[6] || (r[6] = (u) => e.localConfig.getFeatureOptions.featureNS = u),
                        modelModifiers: { trim: !0 },
                        rules: [e.isRequired]
                      }, null, 8, ["modelValue", "rules"])
                    ]),
                    _: 1
                    /* STABLE */
                  })
                ]),
                _: 1
                /* STABLE */
              }),
              o(p, { "no-gutters": "" }, {
                default: n(() => [
                  o(a, null, {
                    default: n(() => [
                      o(i, {
                        "html-for": "featurePrefix",
                        required: ""
                      }, {
                        default: n(() => [
                          c("featurePrefix")
                        ]),
                        _: 1
                        /* STABLE */
                      })
                    ]),
                    _: 1
                    /* STABLE */
                  }),
                  o(a, null, {
                    default: n(() => [
                      o(d, {
                        id: "featurePrefix",
                        clearable: "",
                        modelValue: e.localConfig.getFeatureOptions.featurePrefix,
                        "onUpdate:modelValue": r[7] || (r[7] = (u) => e.localConfig.getFeatureOptions.featurePrefix = u),
                        modelModifiers: { trim: !0 },
                        rules: [e.isRequired]
                      }, null, 8, ["modelValue", "rules"])
                    ]),
                    _: 1
                    /* STABLE */
                  })
                ]),
                _: 1
                /* STABLE */
              }),
              o(p, { "no-gutters": "" }, {
                default: n(() => [
                  o(a, null, {
                    default: n(() => [
                      o(i, {
                        "html-for": "featureTypes",
                        required: ""
                      }, {
                        default: n(() => [
                          c("featureTypes")
                        ]),
                        _: 1
                        /* STABLE */
                      })
                    ]),
                    _: 1
                    /* STABLE */
                  }),
                  o(a, null, {
                    default: n(() => [
                      o(te, {
                        id: "featureTypes",
                        modelValue: e.localConfig.getFeatureOptions.featureTypes,
                        "onUpdate:modelValue": r[8] || (r[8] = (u) => e.localConfig.getFeatureOptions.featureTypes = u),
                        column: ""
                      }, null, 8, ["modelValue"])
                    ]),
                    _: 1
                    /* STABLE */
                  })
                ]),
                _: 1
                /* STABLE */
              }),
              o(p, { "no-gutters": "" }, {
                default: n(() => [
                  o(a, null, {
                    default: n(() => [
                      o(i, {
                        "html-for": "maxFeatures",
                        required: ""
                      }, {
                        default: n(() => [
                          c("maxFeatures")
                        ]),
                        _: 1
                        /* STABLE */
                      })
                    ]),
                    _: 1
                    /* STABLE */
                  }),
                  o(a, null, {
                    default: n(() => [
                      o(d, {
                        id: "maxFeatures",
                        clearable: "",
                        type: "number",
                        modelValue: e.localConfig.getFeatureOptions.maxFeatures,
                        "onUpdate:modelValue": r[9] || (r[9] = (u) => e.localConfig.getFeatureOptions.maxFeatures = u),
                        modelModifiers: { number: !0 },
                        rules: [e.isRequired]
                      }, null, 8, ["modelValue", "rules"])
                    ]),
                    _: 1
                    /* STABLE */
                  })
                ]),
                _: 1
                /* STABLE */
              }),
              o(p, { "no-gutters": "" }, {
                default: n(() => [
                  o(a, null, {
                    default: n(() => [
                      o(i, {
                        "html-for": "geometryName",
                        required: ""
                      }, {
                        default: n(() => [
                          c("geometryName")
                        ]),
                        _: 1
                        /* STABLE */
                      })
                    ]),
                    _: 1
                    /* STABLE */
                  }),
                  o(a, null, {
                    default: n(() => [
                      o(d, {
                        id: "geometryName",
                        clearable: "",
                        modelValue: e.localConfig.getFeatureOptions.geometryName,
                        "onUpdate:modelValue": r[10] || (r[10] = (u) => e.localConfig.getFeatureOptions.geometryName = u),
                        modelModifiers: { trim: !0 },
                        rules: [e.isRequired]
                      }, null, 8, ["modelValue", "rules"])
                    ]),
                    _: 1
                    /* STABLE */
                  })
                ]),
                _: 1
                /* STABLE */
              }),
              o(p, { "no-gutters": "" }, {
                default: n(() => [
                  o(a, null, {
                    default: n(() => [
                      o(i, {
                        "html-for": "srsName",
                        required: ""
                      }, {
                        default: n(() => [
                          c("srsName")
                        ]),
                        _: 1
                        /* STABLE */
                      })
                    ]),
                    _: 1
                    /* STABLE */
                  }),
                  o(a, null, {
                    default: n(() => [
                      o(d, {
                        id: "srsName",
                        clearable: "",
                        modelValue: e.localConfig.getFeatureOptions.srsName,
                        "onUpdate:modelValue": r[11] || (r[11] = (u) => e.localConfig.getFeatureOptions.srsName = u),
                        modelModifiers: { trim: !0 },
                        rules: [e.isRequired]
                      }, null, 8, ["modelValue", "rules"])
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
      o(L, {
        expandable: !0,
        heading: "searchWfs.configEditor.addressMapping"
      }, {
        default: n(() => [
          o(w, { class: "py-0 px-1" }, {
            default: n(() => [
              o(p, { "no-gutters": "" }, {
                default: n(() => [
                  o(a, null, {
                    default: n(() => [
                      o(i, { "html-for": "displayNameTemplate" }, {
                        default: n(() => [
                          c(
                            O(e.$t("searchWfs.configEditor.displayNameTemplate")),
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
                  o(a, null, {
                    default: n(() => [
                      o(oe, {
                        id: "displayNameTemplate",
                        modelValue: e.localConfig.displayNameTemplate,
                        "onUpdate:modelValue": r[12] || (r[12] = (u) => e.localConfig.displayNameTemplate = u)
                      }, null, 8, ["modelValue"])
                    ]),
                    _: 1
                    /* STABLE */
                  })
                ]),
                _: 1
                /* STABLE */
              }),
              o(p, { "no-gutters": "" }, {
                default: n(() => [
                  o(a, null, {
                    default: n(() => [
                      o(i, { "html-for": "balloonType" }, {
                        default: n(() => [
                          c(
                            O(e.$t("searchWfs.configEditor.balloonType")),
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
                  o(a, null, {
                    default: n(() => [
                      o(ne, {
                        id: "balloonType",
                        modelValue: e.balloonType,
                        "onUpdate:modelValue": r[13] || (r[13] = (u) => e.balloonType = u),
                        items: [
                          { value: "address", title: "searchWfs.configEditor.address" },
                          { value: "markdown", title: "searchWfs.configEditor.markdown" }
                        ]
                      }, null, 8, ["modelValue"])
                    ]),
                    _: 1
                    /* STABLE */
                  })
                ]),
                _: 1
                /* STABLE */
              }),
              e.balloonType === "address" ? (M(), Fe(
                _e,
                { key: 0 },
                [
                  o(p, { "no-gutters": "" }, {
                    default: n(() => [
                      o(a, null, {
                        default: n(() => [
                          o(i, { "html-for": "addressName" }, {
                            default: n(() => [
                              c("addressName")
                            ]),
                            _: 1
                            /* STABLE */
                          })
                        ]),
                        _: 1
                        /* STABLE */
                      }),
                      o(a, null, {
                        default: n(() => [
                          o(d, {
                            id: "addressName",
                            clearable: "",
                            modelValue: e.localConfig.addressMapping.addressName,
                            "onUpdate:modelValue": r[14] || (r[14] = (u) => e.localConfig.addressMapping.addressName = u),
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
                  o(p, { "no-gutters": "" }, {
                    default: n(() => [
                      o(a, null, {
                        default: n(() => [
                          o(i, { "html-for": "street" }, {
                            default: n(() => [
                              c("street")
                            ]),
                            _: 1
                            /* STABLE */
                          })
                        ]),
                        _: 1
                        /* STABLE */
                      }),
                      o(a, null, {
                        default: n(() => [
                          o(d, {
                            id: "street",
                            clearable: "",
                            modelValue: e.localConfig.addressMapping.street,
                            "onUpdate:modelValue": r[15] || (r[15] = (u) => e.localConfig.addressMapping.street = u),
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
                  o(p, { "no-gutters": "" }, {
                    default: n(() => [
                      o(a, null, {
                        default: n(() => [
                          o(i, { "html-for": "number" }, {
                            default: n(() => [
                              c("number")
                            ]),
                            _: 1
                            /* STABLE */
                          })
                        ]),
                        _: 1
                        /* STABLE */
                      }),
                      o(a, null, {
                        default: n(() => [
                          o(d, {
                            id: "number",
                            clearable: "",
                            modelValue: e.localConfig.addressMapping.number,
                            "onUpdate:modelValue": r[16] || (r[16] = (u) => e.localConfig.addressMapping.number = u),
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
                  o(p, { "no-gutters": "" }, {
                    default: n(() => [
                      o(a, null, {
                        default: n(() => [
                          o(i, { "html-for": "city" }, {
                            default: n(() => [
                              c("city")
                            ]),
                            _: 1
                            /* STABLE */
                          })
                        ]),
                        _: 1
                        /* STABLE */
                      }),
                      o(a, null, {
                        default: n(() => [
                          o(d, {
                            id: "city",
                            clearable: "",
                            modelValue: e.localConfig.addressMapping.city,
                            "onUpdate:modelValue": r[17] || (r[17] = (u) => e.localConfig.addressMapping.city = u),
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
                  o(p, { "no-gutters": "" }, {
                    default: n(() => [
                      o(a, null, {
                        default: n(() => [
                          o(i, { "html-for": "zip" }, {
                            default: n(() => [
                              c("zip")
                            ]),
                            _: 1
                            /* STABLE */
                          })
                        ]),
                        _: 1
                        /* STABLE */
                      }),
                      o(a, null, {
                        default: n(() => [
                          o(d, {
                            id: "zip",
                            clearable: "",
                            modelValue: e.localConfig.addressMapping.zip,
                            "onUpdate:modelValue": r[18] || (r[18] = (u) => e.localConfig.addressMapping.zip = u),
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
                  o(p, { "no-gutters": "" }, {
                    default: n(() => [
                      o(a, null, {
                        default: n(() => [
                          o(i, { "html-for": "country" }, {
                            default: n(() => [
                              c("country")
                            ]),
                            _: 1
                            /* STABLE */
                          })
                        ]),
                        _: 1
                        /* STABLE */
                      }),
                      o(a, null, {
                        default: n(() => [
                          o(d, {
                            id: "country",
                            clearable: "",
                            modelValue: e.localConfig.addressMapping.country,
                            "onUpdate:modelValue": r[19] || (r[19] = (u) => e.localConfig.addressMapping.country = u),
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
                ],
                64
                /* STABLE_FRAGMENT */
              )) : D("v-if", !0),
              e.balloonType === "markdown" ? (M(), P(p, {
                key: 1,
                "no-gutters": ""
              }, {
                default: n(() => [
                  o(a, null, {
                    default: n(() => [
                      o(i, {
                        "html-for": "template",
                        required: ""
                      }, {
                        default: n(() => [
                          c(
                            O(e.$t("searchWfs.configEditor.markdownTemplate")),
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
                  o(a, null, {
                    default: n(() => [
                      o(h, {
                        id: "template",
                        clearable: "",
                        modelValue: e.localConfig.featureInfoViewOptions.template,
                        "onUpdate:modelValue": r[20] || (r[20] = (u) => e.localConfig.featureInfoViewOptions.template = u),
                        modelModifiers: { trim: !0 },
                        rules: [e.isRequired]
                      }, null, 8, ["modelValue", "rules"])
                    ]),
                    _: 1
                    /* STABLE */
                  })
                ]),
                _: 1
                /* STABLE */
              })) : D("v-if", !0)
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
  }, 8, ["onSubmit"]);
}
const rr = /* @__PURE__ */ Ye(Ze, [["render", er]]);
function ur(e) {
  let r;
  return {
    get name() {
      return C;
    },
    get version() {
      return Me;
    },
    get mapVersion() {
      return Re;
    },
    initialize(t) {
      r = t, t.search.add(
        new Ke(t, re(e)),
        C
      );
    },
    getDefaultOptions: I,
    toJSON() {
      const t = I(), l = {
        url: e.url,
        addressMapping: e.addressMapping,
        getFeatureOptions: e.getFeatureOptions,
        filterExpression: e.filterExpression,
        regEx: e.regEx,
        minToken: e.minToken,
        displayNameTemplate: e.displayNameTemplate,
        featureInfoViewOptions: e.featureInfoViewOptions
      };
      return e.isStoredQuery && e.isStoredQuery !== t.isStoredQuery && (l.isStoredQuery = e.isStoredQuery), e.projection && !new v(e.projection).equals(
        new v(t.projection)
      ) && (l.projection = e.projection), l;
    },
    i18n: {
      en: {
        searchWfs: {
          configEditor: {
            title: "WFS Search Editor",
            regEx: "Regular Expression",
            minToken: "Minimum number of Token",
            filterExpression: "Filter Expression",
            queryOptions: "Query Options",
            storedQuery: "Stored Query",
            addressMapping: "Address Attribute Mapping",
            isRequired: "Input is required",
            displayNameTemplate: "Display Name Template",
            balloonType: "Balloon Type",
            markdown: "Markdown",
            address: "Address",
            markdownTemplate: "Template"
          }
        }
      },
      de: {
        searchWfs: {
          configEditor: {
            title: "WFS-Suche Editor",
            regEx: "Regulärer Ausdruck",
            minToken: "Mindestanzahl von Token",
            filterExpression: "Filterausdruck",
            queryOptions: "Abfrageoptionen",
            storedQuery: "Vordefinierte  Anfrage",
            addressMapping: "Adressattribute Abbildung",
            isRequired: "Eingabe ist erforderlich",
            displayNameTemplate: "Anzeigenamenvorlage",
            balloonType: "Ballontyp",
            markdown: "Markdown",
            address: "Adresse",
            markdownTemplate: "Vorlage"
          }
        }
      }
    },
    getConfigEditors() {
      return [
        {
          component: rr,
          title: "searchWfs.configEditor.title",
          infoUrlCallback: r == null ? void 0 : r.getHelpUrlCallback(
            "/components/plugins/searchToolConfig.html#id_searchWFSConfig",
            "app-configurator"
          )
        }
      ];
    }
  };
}
export {
  ur as default
};
