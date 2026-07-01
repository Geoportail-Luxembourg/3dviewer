var H = Object.defineProperty;
var Y = (e, r, t) => r in e ? H(e, r, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[r] = t;
var E = (e, r, t) => Y(e, typeof r != "symbol" ? r + "" : r, t);
import { AddressBalloonFeatureInfoView as k, featureInfoViewSymbol as ee, VcsTextArea as re, VcsChipArrayInput as te, VcsFormSection as ne, AbstractConfigEditor as oe, VcsLabel as le, VcsTextField as ie, VcsProjection as se } from "../../../assets/ui.js";
import { Projection as ae, wgs84Projection as B, requestUrl as ue, mercatorProjection as fe } from "../../../assets/core.js";
import { ol$format$WFS as de } from "../../../assets/ol.js";
import { TrustedServers as pe } from "../../../assets/cesium.js";
import { VContainer as ce, VRow as me, VCol as ge, VSwitch as ye } from "../../../assets/vuetify.js";
import { defineComponent as he, ref as Ee, resolveComponent as h, openBlock as be, createBlock as Oe, mergeProps as Se, withCtx as o, createVNode as n, createTextVNode as g, toDisplayString as w } from "../../../assets/vue.js";
const F = "@vcmap/search-wfs", Ve = "2.0.1", Ce = "^6.0";
function Fe(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var L = {}, D = Array.prototype, G = Object.prototype, Ne = D.slice, _e = G.toString, x = G.hasOwnProperty, W = D.forEach, Me = Object.keys, we = Array.isArray, m = function() {
}, Re = m.each = m.forEach = function(e, r, t) {
  if (e != null) {
    if (W && e.forEach === W)
      e.forEach(r, t);
    else if (e.length === +e.length) {
      for (var i = 0, a = e.length; i < a; i++)
        if (r.call(t, e[i], i, e) === L) return;
    } else
      for (var u = m.keys(e), i = 0, a = u.length; i < a; i++)
        if (r.call(t, e[u[i]], u[i], e) === L) return;
  }
};
m.keys = Me || function(e) {
  if (e !== Object(e)) throw new TypeError("Invalid object");
  var r = [];
  for (var t in e) m.has(e, t) && r.push(t);
  return r;
};
m.defaults = function(e) {
  return Re(Ne.call(arguments, 1), function(r) {
    if (r)
      for (var t in r)
        e[t] === void 0 && (e[t] = r[t]);
  }), e;
};
m.isArray = we || function(e) {
  return _e.call(e) === "[object Array]";
};
m.has = function(e, r) {
  if (!m.isArray(r))
    return e != null && x.call(e, r);
  for (var t = r.length, i = 0; i < t; i++) {
    var a = r[i];
    if (e == null || !x.call(e, a))
      return !1;
    e = e[a];
  }
  return !!t;
};
var Q = {
  escape: {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#x27;"
  }
}, Ae = {
  escape: new RegExp("[" + m.keys(Q.escape).join("") + "]", "g")
};
m.each(["escape"], function(e) {
  m[e] = function(r) {
    return r == null ? "" : ("" + r).replace(Ae[e], function(t) {
      return Q[e][t];
    });
  };
});
m.templateSettings = {
  evaluate: /<%([\s\S]+?)%>/g,
  interpolate: /<%=([\s\S]+?)%>/g,
  escape: /<%-([\s\S]+?)%>/g
};
var R = /(.)^/, $e = {
  "'": "'",
  "\\": "\\",
  "\r": "r",
  "\n": "n",
  "	": "t",
  "\u2028": "u2028",
  "\u2029": "u2029"
}, Te = /\\|'|\r|\n|\t|\u2028|\u2029/g;
m.template = function(e, r, t) {
  var i;
  t = m.defaults({}, t, m.templateSettings);
  var a = new RegExp([
    (t.escape || R).source,
    (t.interpolate || R).source,
    (t.evaluate || R).source
  ].join("|") + "|$", "g"), u = 0, s = "__p+='";
  e.replace(a, function(d, p, y, _, M) {
    return s += e.slice(u, M).replace(Te, function(S) {
      return "\\" + $e[S];
    }), p && (s += `'+
((__t=(` + p + `))==null?'':_.escape(__t))+
'`), y && (s += `'+
((__t=(` + y + `))==null?'':__t)+
'`), _ && (s += `';
` + _ + `
__p+='`), u = M + d.length, d;
  }), s += `';
`, t.variable || (s = `with(obj||{}){
` + s + `}
`), s = `var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};
` + s + `return __p;
`;
  try {
    i = new Function(t.variable || "obj", "_", s);
  } catch (d) {
    throw d.source = s, d;
  }
  if (r) return i(r, m);
  var l = function(d) {
    return i.call(this, d, m);
  };
  return l.source = "function(" + (t.variable || "obj") + `){
` + s + "}", l;
};
var je = m, z = je, ve = z.template;
function U(e, r, t) {
  return ve(e, r, t);
}
U._ = z;
var Ue = U;
(typeof window < "u" || typeof navigator < "u") && (window.UnderscoreTemplate = U);
const qe = /* @__PURE__ */ Fe(Ue);
function ke(e, r) {
  const t = {};
  return pe.contains(e) && (t.credentials = "include"), t;
}
function Le(e, r) {
  return e == null ? r : typeof e == "boolean" ? e : e === 1 ? !0 : e === 0 ? !1 : typeof e == "string" && (e.toLowerCase() === "true" || e.toLowerCase() === "1") ? !0 : typeof e == "string" && (e.toLowerCase() === "false" || e.toLowerCase() === "0") ? !1 : r;
}
const C = [
  [String, "string"],
  [Number, "number"],
  [Boolean, "boolean"],
  [Function, "function"],
  [void 0, "undefined"],
  [Symbol, "symbol"]
];
function A(e) {
  const r = {};
  if (!e || r.toString(e) !== "[object Object]")
    return !1;
  const t = Object.getPrototypeOf(e);
  if (!t)
    return !0;
  const i = r.hasOwnProperty, a = i.call(t, "constructor") && t.constructor;
  return typeof a == "function" && i.toString.call(a) === i.toString.call(Object);
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
    t = `[${e.map((a) => b(a, r)).join(",")}]`;
  else
    try {
      t = JSON.stringify(e);
    } catch {
      t = typeof e;
    }
  return t = t || typeof e, t.length > 20 ? `${t.substr(0, 20)}...` : t;
}
function xe(e, r) {
  return typeof r == "string" || typeof r == "number" || typeof r == "boolean" || typeof r == "symbol" ? e === r ? !1 : `Expected ${b(e)} to equal ${r.toString()}` : null;
}
function We(e, r, t) {
  if (Array.isArray(r)) {
    if (r.length !== 1)
      throw new Error("Array patterns may only have on type");
    if (Array.isArray(e)) {
      let i = !1;
      return e.findIndex((u) => {
        try {
          J(u, r[0], t);
        } catch (s) {
          i = s.message.replace(/Match failed:\s/, "");
        }
        return i;
      }) > -1 ? `${i} in ${b(e)}` : !1;
    }
    return `Expected ${b(e)} to be an Array`;
  }
  return null;
}
function $(e, r, t) {
  const i = t ? `${t}.` : "";
  if (!A(e))
    return `Expected ${b(e)} to be a plain Object`;
  let u = !1;
  const s = Object.keys(r).find((l) => {
    const d = e[l];
    if (A(r[l]))
      u = $(d, r[l], i + l);
    else
      try {
        J(d, r[l]);
      } catch (p) {
        u = p.message.replace(/Match failed:\s/, "");
      }
    return u;
  });
  return s ? `${u} in object.${i}${s}` : !1;
}
function Ie(e, r) {
  if (r === Number)
    return Number.isFinite(e) ? !1 : `expected ${b(e)} to be a number, excluding NaN`;
  for (let t = C.length; t--; )
    if (r === C[t][0])
      return typeof e === C[t][1] ? !1 : `expected ${b(e)} to be a ${C[t][1]}`;
  return null;
}
function T(e) {
  if (e === null)
    return "null";
  const r = C.find((a) => a[0] === e);
  if (r)
    return r[1];
  let t = e.toString();
  if (e.className)
    return e.className;
  const i = t.match(/function (.*)\(/);
  if (i && i.length > 1)
    return i[1];
  if (A(e)) {
    const a = {};
    Object.keys(e).forEach((u) => {
      a[u] = T(e[u]);
    });
    try {
      t = `Object of ${JSON.stringify(a)}`;
    } catch {
      t = "Object";
    }
  }
  return t;
}
function X(e, r, t) {
  const i = function(s, l) {
    if (l == null)
      return s === l ? !1 : `Expected ${b(s)} to be ${l}`;
    const d = Ie(s, l);
    if (d !== null)
      return d;
    const p = xe(s, l);
    if (p !== null)
      return p;
    if (Array.isArray(l))
      return We(s, l, t);
    if (l instanceof Function)
      return s instanceof l ? !1 : `Expected ${b(s, !0)} to be of Type ${T(l)}`;
    if (l === Object)
      return $(s, {});
    if (typeof l != "object")
      throw new Error(`Cannot handler pattern ${l}`);
    const y = $(s, l);
    return y || !1;
  };
  let a;
  return Array.isArray(r) && r.length > 1 ? r.every((s) => i(e, s)) && (a = `Expected ${b(e)} to be a ${r.map((s) => T(s)).join(" or ")}`) : a = i(e, r), a;
}
function I(e, r, t) {
  return !X(e, r, t);
}
function J(e, r, t) {
  const i = X(e, r, t);
  if (i)
    throw new Error(`Match failed: ${i}`);
  return !1;
}
const c = {
  OFF: 1,
  ERROR: 2,
  WARN: 4,
  INFO: 8,
  DEBUG: 16
}, O = {
  ERROR: 0,
  WARN: 0,
  INFO: 0,
  DEBUG: 0
};
O.ERROR = c.ERROR | c.WARN | c.INFO | c.DEBUG;
O.WARN = c.WARN | c.INFO | c.DEBUG;
O.INFO = c.INFO | c.DEBUG;
O.DEBUG = c.DEBUG;
const V = {
  useTimestamp: !1,
  logLevel: c.INFO
}, N = /* @__PURE__ */ new Map();
N.set(c.ERROR, "error");
N.set(c.WARN, "warn");
N.set(c.INFO, "info");
N.set(c.DEBUG, "log");
class Pe {
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
    V.logLevel & O.ERROR && this._log(String(r), c.ERROR, t);
  }
  /**
   * Logs a warning message
   * @param {string} msg The message to log.
   * @param {...any} optArgs
   */
  warning(r, ...t) {
    V.logLevel & O.WARN && this._log(String(r), c.WARN, t);
  }
  /**
   * Deprecate a function. deprecations are stored on the logger
   * @param {string} functionName
   * @param {string=} alternativeFunctionName
   */
  deprecate(r, t) {
    const i = String(r), a = t ? String(t) : null;
    if (!this.deprecations.has(i)) {
      this.deprecations.set(i, a || null);
      let u = `${i} has been deprecated and will be removed`;
      a && (u = `${u}. ${a}`), this.warning(u);
    }
  }
  /**
   * Logs an info message
   * @param {string} msg The message to log.
   * @param {...any} optArgs
   */
  info(r, ...t) {
    V.logLevel & O.INFO && this._log(String(r), c.INFO, t);
  }
  /**
   * Logs a debug message
   * @param {string} msg The message to log.
   * @param {...any} optArgs
   */
  debug(r, ...t) {
    V.logLevel & O.DEBUG && this._log(String(r), c.DEBUG, t);
  }
  /**
   * Alias for debug
   * @param {string} msg The message to log.
   * @param {...any} optArgs
   */
  log(r, ...t) {
    V.logLevel & O.DEBUG && this._log(String(r), c.DEBUG, t);
  }
  /**
   * Logs a message
   * @param {string} msg The message to log.
   * @param {LOG_LEVEL} level
   * @param {Array} optArgs
   * @private
   */
  _log(r, t, i) {
    let a = r;
    this.className && (a = `[${this.className}] ${a}`), console[N.get(t)](a, ...i), t & c.ERROR && (console.group(), console.trace(), console.groupEnd());
  }
}
const j = /* @__PURE__ */ new Map();
function Be(e) {
  const r = new Pe(e);
  return j.set(e, r), r;
}
function P(e) {
  return j.has(e) ? j.get(e) : Be(e);
}
class De {
  constructor(r, t) {
    E(this, "app");
    E(this, "url");
    E(this, "addressMapping");
    E(this, "getFeatureOptions");
    E(this, "filterExpression");
    E(this, "isStoredQuery");
    E(this, "regEx");
    E(this, "minToken");
    E(this, "projection");
    this.app = r, I(t.url, String) ? this.url = t.url.replace(/\/$/, "") : P(F).error("Please provide an url"), this.addressMapping = Object.assign(
      k.getDefaultOptions(),
      t.addressMapping
    ), this.getFeatureOptions = t.getFeatureOptions, I(t.filterExpression, String) ? this.filterExpression = qe(t.filterExpression) : P(F).error("Please provide a filterExpression"), this.isStoredQuery = Le(t.isStoredQuery, !1), this.regEx = t.regEx, this.minToken = t.minToken, this.projection = new ae(
      t.projection ?? B.toJSON()
    );
  }
  // eslint-disable-next-line class-methods-use-this
  get name() {
    return F;
  }
  async search(r) {
    const t = new de(), i = this.generateGetFeatureXMLString(r, t);
    if (!i)
      return Promise.resolve([]);
    const a = ke(this.url);
    return a.method = "POST", a.body = i, a.headers = {
      "Content-Type": "application/text+xml"
    }, ue(this.url, a).then((u) => u.text()).then((u) => t.readFeatures(u, {
      dataProjection: this.projection.proj,
      featureProjection: fe.proj
    }).map((s) => {
      const l = `${s.get(this.addressMapping.street)} ${s.get(
        this.addressMapping.number
      )}, ${s.get(
        this.addressMapping.zip
      )} ${s.get(this.addressMapping.city)}`;
      return s[ee] = new k({
        type: "AddressBalloonFeatureInfoView",
        name: "WfsSearchBalloon",
        balloonSubtitle: "",
        ...this.addressMapping
      }), {
        title: l,
        feature: s
      };
    })).catch((u) => Promise.reject(u));
  }
  generateGetFeatureXMLString(r, t) {
    const i = r.match(new RegExp(this.regEx));
    if (!i || i.length < this.minToken + 1)
      return null;
    const a = new DOMParser(), u = this.filterExpression({ token: i }), s = t.writeGetFeature(
      this.getFeatureOptions
    ), l = a.parseFromString(u, "text/xml"), d = s.getElementsByTagName("Query")[0];
    if (this.isStoredQuery) {
      const p = l.documentElement;
      for (let y = 0; y < d.attributes.length; y++)
        p.attributes.setNamedItem(
          d.attributes[y].cloneNode()
        );
      d.parentNode.replaceChild(p, d);
    } else
      d.appendChild(l.documentElement);
    return new XMLSerializer().serializeToString(s);
  }
  // eslint-disable-next-line class-methods-use-this
  abort() {
  }
  // eslint-disable-next-line class-methods-use-this
  destroy() {
  }
}
function v() {
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
    regEx: "([a-zA-ZßäöüÄÖÜ\\.\\-\\s]+)\\s*([0-9]+\\s*[a-zA-Z]*)?",
    minToken: 1,
    projection: B.toJSON()
  };
}
function Ge(e) {
  return e !== "" || "searchWfs.configEditor.isRequired";
}
const Qe = he({
  name: "WfsSearchEditor",
  components: {
    VcsTextArea: re,
    VcsChipArrayInput: te,
    VcsFormSection: ne,
    VContainer: ce,
    VRow: me,
    VCol: ge,
    VSwitch: ye,
    AbstractConfigEditor: oe,
    VcsLabel: le,
    VcsTextField: ie,
    VcsProjection: se
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
    const r = Ee(v()), t = e.getConfig();
    for (const [a, u] of Object.entries(t))
      u && (typeof u == "object" ? Object.assign(r.value[a], u) : r.value[a] = u);
    return {
      apply: () => {
        e.setConfig(r.value);
      },
      isRequired: Ge,
      localConfig: r
    };
  }
}), ze = (e, r) => {
  const t = e.__vccOpts || e;
  for (const [i, a] of r)
    t[i] = a;
  return t;
};
function Xe(e, r, t, i, a, u) {
  const s = h("VcsLabel"), l = h("v-col"), d = h("VcsTextField"), p = h("v-row"), y = h("VcsTextArea"), _ = h("v-switch"), M = h("vcs-projection"), S = h("v-container"), K = h("VcsChipArrayInput"), q = h("VcsFormSection"), Z = h("AbstractConfigEditor");
  return be(), Oe(Z, Se({ onSubmit: e.apply }, { ...e.$attrs, ...e.$props }), {
    default: o(() => [
      n(S, { class: "py-0 px-1" }, {
        default: o(() => [
          n(p, { "no-gutters": "" }, {
            default: o(() => [
              n(l, null, {
                default: o(() => [
                  n(s, {
                    "html-for": "url",
                    required: ""
                  }, {
                    default: o(() => [
                      g("URL")
                    ]),
                    _: 1
                    /* STABLE */
                  })
                ]),
                _: 1
                /* STABLE */
              }),
              n(l, null, {
                default: o(() => [
                  n(d, {
                    id: "url",
                    clearable: "",
                    modelValue: e.localConfig.url,
                    "onUpdate:modelValue": r[0] || (r[0] = (f) => e.localConfig.url = f),
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
          n(p, { "no-gutters": "" }, {
            default: o(() => [
              n(l, null, {
                default: o(() => [
                  n(s, {
                    "html-for": "regEx",
                    required: ""
                  }, {
                    default: o(() => [
                      g(
                        w(e.$t("searchWfs.configEditor.regEx")),
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
              n(l, null, {
                default: o(() => [
                  n(d, {
                    id: "regEx",
                    clearable: "",
                    modelValue: e.localConfig.regEx,
                    "onUpdate:modelValue": r[1] || (r[1] = (f) => e.localConfig.regEx = f),
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
          n(p, { "no-gutters": "" }, {
            default: o(() => [
              n(l, null, {
                default: o(() => [
                  n(s, {
                    "html-for": "minToken",
                    required: ""
                  }, {
                    default: o(() => [
                      g(
                        w(e.$t("searchWfs.configEditor.minToken")),
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
              n(l, null, {
                default: o(() => [
                  n(d, {
                    id: "minToken",
                    clearable: "",
                    type: "number",
                    modelValue: e.localConfig.minToken,
                    "onUpdate:modelValue": r[2] || (r[2] = (f) => e.localConfig.minToken = f),
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
          n(p, { "no-gutters": "" }, {
            default: o(() => [
              n(l, null, {
                default: o(() => [
                  n(s, {
                    "html-for": "filterExpression",
                    required: ""
                  }, {
                    default: o(() => [
                      g(
                        w(e.$t("searchWfs.configEditor.filterExpression")),
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
              n(l, null, {
                default: o(() => [
                  n(y, {
                    id: "filterExpression",
                    clearable: "",
                    modelValue: e.localConfig.filterExpression,
                    "onUpdate:modelValue": r[3] || (r[3] = (f) => e.localConfig.filterExpression = f),
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
          n(p, { "no-gutters": "" }, {
            default: o(() => [
              n(_, {
                class: "pl-1",
                "html-for": "isStoredQuery",
                modelValue: e.localConfig.isStoredQuery,
                "onUpdate:modelValue": r[4] || (r[4] = (f) => e.localConfig.isStoredQuery = f),
                label: e.$t("searchWfs.configEditor.storedQuery")
              }, null, 8, ["modelValue", "label"])
            ]),
            _: 1
            /* STABLE */
          }),
          n(p, { "no-gutters": "" }, {
            default: o(() => [
              n(M, {
                modelValue: e.localConfig.projection,
                "onUpdate:modelValue": r[5] || (r[5] = (f) => e.localConfig.projection = f)
              }, null, 8, ["modelValue"])
            ]),
            _: 1
            /* STABLE */
          })
        ]),
        _: 1
        /* STABLE */
      }),
      n(q, {
        expandable: !0,
        "start-open": "",
        heading: "searchWfs.configEditor.queryOptions"
      }, {
        default: o(() => [
          n(S, { class: "py-0 px-1" }, {
            default: o(() => [
              n(p, { "no-gutters": "" }, {
                default: o(() => [
                  n(l, null, {
                    default: o(() => [
                      n(s, {
                        "html-for": "featureNS",
                        required: ""
                      }, {
                        default: o(() => [
                          g("featureNS")
                        ]),
                        _: 1
                        /* STABLE */
                      })
                    ]),
                    _: 1
                    /* STABLE */
                  }),
                  n(l, null, {
                    default: o(() => [
                      n(d, {
                        id: "featureNS",
                        clearable: "",
                        modelValue: e.localConfig.getFeatureOptions.featureNS,
                        "onUpdate:modelValue": r[6] || (r[6] = (f) => e.localConfig.getFeatureOptions.featureNS = f),
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
              n(p, { "no-gutters": "" }, {
                default: o(() => [
                  n(l, null, {
                    default: o(() => [
                      n(s, {
                        "html-for": "featurePrefix",
                        required: ""
                      }, {
                        default: o(() => [
                          g("featurePrefix")
                        ]),
                        _: 1
                        /* STABLE */
                      })
                    ]),
                    _: 1
                    /* STABLE */
                  }),
                  n(l, null, {
                    default: o(() => [
                      n(d, {
                        id: "featurePrefix",
                        clearable: "",
                        modelValue: e.localConfig.getFeatureOptions.featurePrefix,
                        "onUpdate:modelValue": r[7] || (r[7] = (f) => e.localConfig.getFeatureOptions.featurePrefix = f),
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
              n(p, { "no-gutters": "" }, {
                default: o(() => [
                  n(l, null, {
                    default: o(() => [
                      n(s, {
                        "html-for": "featureTypes",
                        required: ""
                      }, {
                        default: o(() => [
                          g("featureTypes")
                        ]),
                        _: 1
                        /* STABLE */
                      })
                    ]),
                    _: 1
                    /* STABLE */
                  }),
                  n(l, null, {
                    default: o(() => [
                      n(K, {
                        id: "featureTypes",
                        modelValue: e.localConfig.getFeatureOptions.featureTypes,
                        "onUpdate:modelValue": r[8] || (r[8] = (f) => e.localConfig.getFeatureOptions.featureTypes = f),
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
              n(p, { "no-gutters": "" }, {
                default: o(() => [
                  n(l, null, {
                    default: o(() => [
                      n(s, {
                        "html-for": "maxFeatures",
                        required: ""
                      }, {
                        default: o(() => [
                          g("maxFeatures")
                        ]),
                        _: 1
                        /* STABLE */
                      })
                    ]),
                    _: 1
                    /* STABLE */
                  }),
                  n(l, null, {
                    default: o(() => [
                      n(d, {
                        id: "maxFeatures",
                        clearable: "",
                        type: "number",
                        modelValue: e.localConfig.getFeatureOptions.maxFeatures,
                        "onUpdate:modelValue": r[9] || (r[9] = (f) => e.localConfig.getFeatureOptions.maxFeatures = f),
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
              n(p, { "no-gutters": "" }, {
                default: o(() => [
                  n(l, null, {
                    default: o(() => [
                      n(s, {
                        "html-for": "geometryName",
                        required: ""
                      }, {
                        default: o(() => [
                          g("geometryName")
                        ]),
                        _: 1
                        /* STABLE */
                      })
                    ]),
                    _: 1
                    /* STABLE */
                  }),
                  n(l, null, {
                    default: o(() => [
                      n(d, {
                        id: "geometryName",
                        clearable: "",
                        modelValue: e.localConfig.getFeatureOptions.geometryName,
                        "onUpdate:modelValue": r[10] || (r[10] = (f) => e.localConfig.getFeatureOptions.geometryName = f),
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
              n(p, { "no-gutters": "" }, {
                default: o(() => [
                  n(l, null, {
                    default: o(() => [
                      n(s, {
                        "html-for": "srsName",
                        required: ""
                      }, {
                        default: o(() => [
                          g("srsName")
                        ]),
                        _: 1
                        /* STABLE */
                      })
                    ]),
                    _: 1
                    /* STABLE */
                  }),
                  n(l, null, {
                    default: o(() => [
                      n(d, {
                        id: "srsName",
                        clearable: "",
                        modelValue: e.localConfig.getFeatureOptions.srsName,
                        "onUpdate:modelValue": r[11] || (r[11] = (f) => e.localConfig.getFeatureOptions.srsName = f),
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
      n(q, {
        expandable: !0,
        heading: "searchWfs.configEditor.addressMapping"
      }, {
        default: o(() => [
          n(S, { class: "py-0 px-1" }, {
            default: o(() => [
              n(p, { "no-gutters": "" }, {
                default: o(() => [
                  n(l, null, {
                    default: o(() => [
                      n(s, { "html-for": "addressName" }, {
                        default: o(() => [
                          g("addressName")
                        ]),
                        _: 1
                        /* STABLE */
                      })
                    ]),
                    _: 1
                    /* STABLE */
                  }),
                  n(l, null, {
                    default: o(() => [
                      n(d, {
                        id: "addressName",
                        clearable: "",
                        modelValue: e.localConfig.addressMapping.addressName,
                        "onUpdate:modelValue": r[12] || (r[12] = (f) => e.localConfig.addressMapping.addressName = f),
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
              n(p, { "no-gutters": "" }, {
                default: o(() => [
                  n(l, null, {
                    default: o(() => [
                      n(s, { "html-for": "street" }, {
                        default: o(() => [
                          g("street")
                        ]),
                        _: 1
                        /* STABLE */
                      })
                    ]),
                    _: 1
                    /* STABLE */
                  }),
                  n(l, null, {
                    default: o(() => [
                      n(d, {
                        id: "street",
                        clearable: "",
                        modelValue: e.localConfig.addressMapping.street,
                        "onUpdate:modelValue": r[13] || (r[13] = (f) => e.localConfig.addressMapping.street = f),
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
              n(p, { "no-gutters": "" }, {
                default: o(() => [
                  n(l, null, {
                    default: o(() => [
                      n(s, { "html-for": "number" }, {
                        default: o(() => [
                          g("number")
                        ]),
                        _: 1
                        /* STABLE */
                      })
                    ]),
                    _: 1
                    /* STABLE */
                  }),
                  n(l, null, {
                    default: o(() => [
                      n(d, {
                        id: "number",
                        clearable: "",
                        modelValue: e.localConfig.addressMapping.number,
                        "onUpdate:modelValue": r[14] || (r[14] = (f) => e.localConfig.addressMapping.number = f),
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
              n(p, { "no-gutters": "" }, {
                default: o(() => [
                  n(l, null, {
                    default: o(() => [
                      n(s, { "html-for": "city" }, {
                        default: o(() => [
                          g("city")
                        ]),
                        _: 1
                        /* STABLE */
                      })
                    ]),
                    _: 1
                    /* STABLE */
                  }),
                  n(l, null, {
                    default: o(() => [
                      n(d, {
                        id: "city",
                        clearable: "",
                        modelValue: e.localConfig.addressMapping.city,
                        "onUpdate:modelValue": r[15] || (r[15] = (f) => e.localConfig.addressMapping.city = f),
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
              n(p, { "no-gutters": "" }, {
                default: o(() => [
                  n(l, null, {
                    default: o(() => [
                      n(s, { "html-for": "zip" }, {
                        default: o(() => [
                          g("zip")
                        ]),
                        _: 1
                        /* STABLE */
                      })
                    ]),
                    _: 1
                    /* STABLE */
                  }),
                  n(l, null, {
                    default: o(() => [
                      n(d, {
                        id: "zip",
                        clearable: "",
                        modelValue: e.localConfig.addressMapping.zip,
                        "onUpdate:modelValue": r[16] || (r[16] = (f) => e.localConfig.addressMapping.zip = f),
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
              n(p, { "no-gutters": "" }, {
                default: o(() => [
                  n(l, null, {
                    default: o(() => [
                      n(s, { "html-for": "country" }, {
                        default: o(() => [
                          g("country")
                        ]),
                        _: 1
                        /* STABLE */
                      })
                    ]),
                    _: 1
                    /* STABLE */
                  }),
                  n(l, null, {
                    default: o(() => [
                      n(d, {
                        id: "country",
                        clearable: "",
                        modelValue: e.localConfig.addressMapping.country,
                        "onUpdate:modelValue": r[17] || (r[17] = (f) => e.localConfig.addressMapping.country = f),
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
      })
    ]),
    _: 1
    /* STABLE */
  }, 16, ["onSubmit"]);
}
const Je = /* @__PURE__ */ ze(Qe, [["render", Xe]]);
function nr(e) {
  let r;
  return {
    get name() {
      return F;
    },
    get version() {
      return Ve;
    },
    get mapVersion() {
      return Ce;
    },
    initialize(t) {
      r = t, t.search.add(new De(t, e), F);
    },
    getDefaultOptions: v,
    toJSON() {
      const t = v(), i = {
        url: e.url,
        addressMapping: e.addressMapping,
        getFeatureOptions: e.getFeatureOptions,
        filterExpression: e.filterExpression,
        regEx: e.regEx,
        minToken: e.minToken
      };
      return e.isStoredQuery && e.isStoredQuery !== t.isStoredQuery && (i.isStoredQuery = e.isStoredQuery), i;
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
            isRequired: "Input is required"
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
            isRequired: "Eingabe ist erforderlich"
          }
        }
      }
    },
    getConfigEditors() {
      return [
        {
          component: Je,
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
  nr as default
};
