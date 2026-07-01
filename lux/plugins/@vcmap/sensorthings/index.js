
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
} await loadCss('data:text/css;base64,LnNlbnNvci10aGluZ3MtdGFibGVbZGF0YS12LTM0Nzc5NzI4XXtib3JkZXItc3BhY2luZzowO292ZXJmbG93LXdyYXA6YW55d2hlcmU7d2lkdGg6MTAwJX0uc2Vuc29yLXRoaW5ncy10YWJsZSB0Ym9keSB0cltkYXRhLXYtMzQ3Nzk3MjhdOm50aC1jaGlsZChvZGQpe2JhY2tncm91bmQtY29sb3I6cmdiKHZhcigtLXYtdGhlbWUtYmFzZS1saWdodGVuLTQpKSFpbXBvcnRhbnR9LnNlbnNvci10aGluZ3MtdGFibGUgdGRbZGF0YS12LTM0Nzc5NzI4XXtwYWRkaW5nOjAgOHB4O2hlaWdodDpjYWxjKHZhcigtLXYtdmNzLWZvbnQtc2l6ZSkgKiAyICsgNnB4KX1bZGF0YS12LTg2Nzc1YjBmXSAudmNzLXRhYmxlPi52LXRhYmxlX193cmFwcGVyIHRke3dvcmQtYnJlYWs6YnJlYWstYWxsfVtkYXRhLXYtODY3NzViMGZdIC52LWV4cGFuc2lvbi1wYW5lbC10ZXh0X193cmFwcGVye3BhZGRpbmctaW5saW5lOjB9Cg==');var zi = Object.defineProperty;
var Vi = (C, D, O) => D in C ? zi(C, D, { enumerable: !0, configurable: !0, writable: !0, value: O }) : C[D] = O;
var je = (C, D, O) => Vi(C, typeof D != "symbol" ? D + "" : D, O);
import { requestJson as na, Projection as Di, VectorTileLayer as Ei, parseGeoJSON as Oi, StaticFeatureTileProvider as Ni, Extent as Oa, wgs84Projection as Fi, WMTSLayer as Ri, VectorLayer as Xi, VectorProperties as Yi, moduleIdSymbol as ht } from "../../../assets/core.js";
import { VcsLabel as Ce, VcsDatePicker as Hi, NotificationType as kt, AbstractFeatureInfoView as Na, IframeComponent as Fa, renderTemplate as Ra, BalloonComponent as Xa, BalloonFeatureInfoView as Ya, VcsButton as la, VcsTextField as Oe, useProxiedComplexModel as Be, useComponentId as We, VcsCheckbox as Ht, useModelHasProperty as Gi, VcsFormSection as Ue, VcsImportComponent as Bi, VcsSelect as at, VcsDataTable as ha, VcsActionButtonList as Et, AbstractConfigEditor as Ha, WindowSlot as Wi, VcsChipArrayInput as Ta, VcsExtent as _i, setupExtentComponentActions as ji, VcsRadio as $i, VcsFormButton as Ui, useProxiedAtomicModel as Zi } from "../../../assets/ui.js";
import { defineComponent as De, ref as ve, onBeforeMount as qi, onMounted as Ga, getCurrentInstance as ca, onBeforeUnmount as Ji, toRefs as Ki, watch as tt, h as Qi, nextTick as aa, inject as rt, computed as Ge, resolveComponent as Q, openBlock as fe, createElementBlock as Gt, createElementVNode as Ie, toDisplayString as ce, createTextVNode as ge, createVNode as P, withCtx as V, createBlock as be, unref as M, normalizeProps as es, guardReactiveProps as ts, mergeProps as Ot, createCommentVNode as Ne, Fragment as da, renderList as Ba, renderSlot as $e, createSlots as as, useModel as is, onUnmounted as Ct, withKeys as Nt, withModifiers as At, toRaw as Ft, resolveDynamicComponent as ss, shallowRef as ia, isRef as Wa } from "../../../assets/vue.js";
import { VContainer as Xe, VRow as Se, VCol as re, VDivider as _a, VOverlay as rs, VIcon as os, VForm as ja, VDialog as $a, VCard as ns, VCardTitle as ls, VCardText as hs, VCardActions as cs } from "../../../assets/vuetify.js";
import { useTheme as ds } from "../../../assets/vuetify.js";
const Rt = "@vcmap/sensorthings", us = "1.0.1", gs = "^6.1";
async function ua(C) {
  const D = [];
  let O = C;
  for (; O; ) {
    const R = (
      // eslint-disable-next-line no-await-in-loop
      await na(O)
    );
    D.push(...R.value), O = R["@iot.nextLink"];
  }
  return D;
}
async function ps(C, D, O, R, T, N) {
  const E = C.endsWith("/") ? C : `${C}/`, Y = new Date(R);
  Y.setHours(0, 0, 0);
  const _ = new Date(T);
  _.setDate(T.getDate() + 1), _.setHours(0, 0, 0);
  const U = `${E}Things(${D})/Datastreams?
    $filter=ObservedProperty/name eq '${O}'&
    $top=1&
    $expand=Observations(
      $filter=phenomenonTime ge ${Y.toISOString()} and phenomenonTime lt ${_.toISOString()};
      $top=${N};
      $orderby=phenomenonTime asc)`;
  return ua(U);
}
async function fs(C, D, O) {
  const T = `${C.endsWith("/") ? C : `${C}/`}Datastreams?
    $filter=ObservedProperty/name eq '${O}' and Thing/id eq ${D}&
    $orderby=Observations/phenomenonTime desc&
    $top=1&
    $expand=Observations($top=1;$orderby=phenomenonTime desc)`;
  return (await na(
    T
  )).value[0];
}
async function ms(C, D, O) {
  const T = `${C.endsWith("/") ? C : `${C}/`}Datastreams?
    $filter=ObservedProperty/name eq '${O}' and Thing/id eq ${D}&
    $orderby=Observations/phenomenonTime asc&
    $top=1&
    $expand=Observations($top=1;$orderby=phenomenonTime asc)`;
  return (await na(
    T
  )).value[0].Observations[0];
}
async function xs(C) {
  const D = C.endsWith("/") ? C : `${C}/`;
  return ua(`${D}ObservedProperties`);
}
function bs(C, D, O) {
  const R = [];
  if (C && R.push(`Datastreams/ObservedProperty/name eq '${C}'`), D) {
    const T = D.getCoordinatesInProjection(
      new Di({ epsg: 4326 })
    ), [N, E, Y, _] = T;
    R.push(
      `st_within(Locations/location, geography'POLYGON ((${N} ${E}, ${Y} ${E}, ${Y} ${_}, ${N} ${_}, ${N} ${E}))')`
    );
  }
  return O && R.push(O), R;
}
async function vs(C, D, O, R) {
  const T = bs(D, O, R), N = [];
  T.length && N.push(`$filter=${T.join(" and ")}`), N.push("$expand=Locations($top=1)");
  const Y = `${C.endsWith("/") ? C : `${C}/`}Things?$top=1000&${N.join("&")}`;
  return ua(Y);
}
function ys() {
  return "data:image/svg+xml,%3Csvg%20width%3D%2240.821%22%20height%3D%2251.946%22%20viewBox%3D%220%200%2010.801%2013.744%22%20xml%3Aspace%3D%22preserve%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20transform%3D%22translate(-1.45)scale(.26)%22%3E%3Cpath%20style%3D%22fill%3A%23fff%3Bstroke%3A%2328a5de%3Bstroke-width%3A.40518%3Bstroke-linecap%3Asquare%22%20cx%3D%22449.283%22%20cy%3D%22357.57%22%20r%3D%22290%22%20d%3D%22M42.817%2020.709A16.796%2016.796%200%200%201%2026.021%2037.505A16.796%2016.796%200%200%201%209.225%2020.709A16.796%2016.796%200%200%201%2042.817%2020.709z%22%2F%3E%3Cpath%20d%3D%22M7.074%2028.124c2.085%206.238%207.06%2015.354%2018.91%2023.821%2011.85%20-8.473%2016.819%20-17.584%2018.904%20-23.821%200.944%20-2.317%201.471%20-4.842%201.494%20-7.489%200.006%20-0.122%20-0.012%20-0.197%20-0.012%20-0.214v-0.006C46.371%209.139%2037.243%200%2025.972%200c-11.276%200%20-20.41%209.139%20-20.41%2020.416%200%200%200%200.075%200.006%200.22%200.029%202.647%200.562%205.172%201.506%207.489m18.91%20-23.091c8.688%200%2015.73%207.043%2015.73%2015.73s-7.043%2015.73%20-15.73%2015.73c-8.688%200%20-15.73%20-7.043%20-15.73%20-15.73s7.043%20-15.73%2015.73%20-15.73%22%20style%3D%22fill%3A%23409d76%3Bfill-opacity%3A1%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E";
}
class ct extends Ei {
  constructor(O) {
    const R = ct.getDefaultOptions(), T = {
      ...O,
      renderer: O.renderer ?? R.renderer,
      minLevel: O.minLevel || R.minLevel,
      maxLevel: O.maxLevel || R.maxLevel,
      style: O.style ?? R.style
    };
    super(T);
    je(this, "_observedProperty");
    je(this, "_additionalFilters");
    this._observedProperty = O.observedProperty, this._additionalFilters = O.additionalFilters;
  }
  static get className() {
    return "SensorThingsLayer";
  }
  static getDefaultOptions() {
    return {
      ...super.getDefaultOptions(),
      renderer: "primitive",
      minLevel: 1,
      maxLevel: 15,
      style: {
        type: "VectorStyleItem",
        image: {
          src: ys()
        },
        fill: {
          color: [255, 255, 255, 1]
        },
        stroke: {
          color: [0, 0, 0, 1],
          width: 1
        }
      }
    };
  }
  async initialize() {
    if (!this.initialized)
      try {
        const O = await vs(
          this.url,
          this._observedProperty,
          this.extent ?? void 0,
          this._additionalFilters
        );
        O.length === 0 && this.getLogger().warning(
          `The request to the SensorThings API of layer "${this.name}" did not return any entities. Make sure the filters (extent, observerProperty) are set correctly.`
        );
        const R = O.filter((T) => !!T.Locations[0]).map((T) => {
          const N = Oi(T.Locations[0].location).features[0];
          return N.setId(String(T["@iot.id"])), N.setProperties({
            name: T.name,
            ...T.properties
          }), N;
        });
        O.length !== R.length && this.getLogger().warning(
          `On layer "${this.name}" ${O.length - R.length} things lack location data and were excluded.`
        ), this.tileProvider = new Ni({
          features: R
        }), await super.initialize();
      } catch (O) {
        this.getLogger().error(
          `Initializing of layer "${this.name}" failed, due to a`,
          O,
          "Please ensure that the url is correct."
        );
      }
  }
  get observedProperty() {
    return this._observedProperty;
  }
  get additionalFilters() {
    return this._additionalFilters;
  }
  toJSON() {
    const { tileProvider: O, ...R } = super.toJSON(), T = { ...R, url: this.url };
    return this._observedProperty && (T.observedProperty = this._observedProperty), this._additionalFilters && (T.additionalFilters = this._additionalFilters), T;
  }
}
function ws(C) {
  return C && C.__esModule && Object.prototype.hasOwnProperty.call(C, "default") ? C.default : C;
}
var sa = { exports: {} };
/*!
 * ApexCharts v3.54.1
 * (c) 2018-2024 ApexCharts
 * Released under the MIT License.
 */
(function(C, D) {
  function O(y, e) {
    (e == null || e > y.length) && (e = y.length);
    for (var t = 0, a = Array(e); t < e; t++) a[t] = y[t];
    return a;
  }
  function R(y) {
    if (y === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return y;
  }
  function T(y, e) {
    if (!(y instanceof e)) throw new TypeError("Cannot call a class as a function");
  }
  function N(y, e) {
    for (var t = 0; t < e.length; t++) {
      var a = e[t];
      a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(y, oe(a.key), a);
    }
  }
  function E(y, e, t) {
    return e && N(y.prototype, e), t && N(y, t), Object.defineProperty(y, "prototype", { writable: !1 }), y;
  }
  function Y(y, e) {
    var t = typeof Symbol < "u" && y[Symbol.iterator] || y["@@iterator"];
    if (!t) {
      if (Array.isArray(y) || (t = me(y)) || e) {
        t && (y = t);
        var a = 0, i = function() {
        };
        return { s: i, n: function() {
          return a >= y.length ? { done: !0 } : { done: !1, value: y[a++] };
        }, e: function(n) {
          throw n;
        }, f: i };
      }
      throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
    }
    var r, s = !0, o = !1;
    return { s: function() {
      t = t.call(y);
    }, n: function() {
      var n = t.next();
      return s = n.done, n;
    }, e: function(n) {
      o = !0, r = n;
    }, f: function() {
      try {
        s || t.return == null || t.return();
      } finally {
        if (o) throw r;
      }
    } };
  }
  function _(y) {
    var e = se();
    return function() {
      var t, a = $(y);
      if (e) {
        var i = $(this).constructor;
        t = Reflect.construct(a, arguments, i);
      } else t = a.apply(this, arguments);
      return function(r, s) {
        if (s && (typeof s == "object" || typeof s == "function")) return s;
        if (s !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
        return R(r);
      }(this, t);
    };
  }
  function U(y, e, t) {
    return (e = oe(e)) in y ? Object.defineProperty(y, e, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : y[e] = t, y;
  }
  function $(y) {
    return $ = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
      return e.__proto__ || Object.getPrototypeOf(e);
    }, $(y);
  }
  function Z(y, e) {
    if (typeof e != "function" && e !== null) throw new TypeError("Super expression must either be null or a function");
    y.prototype = Object.create(e && e.prototype, { constructor: { value: y, writable: !0, configurable: !0 } }), Object.defineProperty(y, "prototype", { writable: !1 }), e && te(y, e);
  }
  function se() {
    try {
      var y = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
      }));
    } catch {
    }
    return (se = function() {
      return !!y;
    })();
  }
  function ie(y, e) {
    var t = Object.keys(y);
    if (Object.getOwnPropertySymbols) {
      var a = Object.getOwnPropertySymbols(y);
      e && (a = a.filter(function(i) {
        return Object.getOwnPropertyDescriptor(y, i).enumerable;
      })), t.push.apply(t, a);
    }
    return t;
  }
  function H(y) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e] != null ? arguments[e] : {};
      e % 2 ? ie(Object(t), !0).forEach(function(a) {
        U(y, a, t[a]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(y, Object.getOwnPropertyDescriptors(t)) : ie(Object(t)).forEach(function(a) {
        Object.defineProperty(y, a, Object.getOwnPropertyDescriptor(t, a));
      });
    }
    return y;
  }
  function te(y, e) {
    return te = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, a) {
      return t.__proto__ = a, t;
    }, te(y, e);
  }
  function J(y, e) {
    return function(t) {
      if (Array.isArray(t)) return t;
    }(y) || function(t, a) {
      var i = t == null ? null : typeof Symbol < "u" && t[Symbol.iterator] || t["@@iterator"];
      if (i != null) {
        var r, s, o, n, h = [], d = !0, c = !1;
        try {
          if (o = (i = i.call(t)).next, a === 0) {
            if (Object(i) !== i) return;
            d = !1;
          } else for (; !(d = (r = o.call(i)).done) && (h.push(r.value), h.length !== a); d = !0) ;
        } catch (u) {
          c = !0, s = u;
        } finally {
          try {
            if (!d && i.return != null && (n = i.return(), Object(n) !== n)) return;
          } finally {
            if (c) throw s;
          }
        }
        return h;
      }
    }(y, e) || me(y, e) || function() {
      throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
    }();
  }
  function K(y) {
    return function(e) {
      if (Array.isArray(e)) return O(e);
    }(y) || function(e) {
      if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
    }(y) || me(y) || function() {
      throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
    }();
  }
  function oe(y) {
    var e = function(t, a) {
      if (typeof t != "object" || !t) return t;
      var i = t[Symbol.toPrimitive];
      if (i !== void 0) {
        var r = i.call(t, a || "default");
        if (typeof r != "object") return r;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return (a === "string" ? String : Number)(t);
    }(y, "string");
    return typeof e == "symbol" ? e : e + "";
  }
  function he(y) {
    return he = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
      return typeof e;
    } : function(e) {
      return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
    }, he(y);
  }
  function me(y, e) {
    if (y) {
      if (typeof y == "string") return O(y, e);
      var t = {}.toString.call(y).slice(8, -1);
      return t === "Object" && y.constructor && (t = y.constructor.name), t === "Map" || t === "Set" ? Array.from(y) : t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? O(y, e) : void 0;
    }
  }
  var z = function() {
    function y() {
      T(this, y);
    }
    return E(y, [{ key: "shadeRGBColor", value: function(e, t) {
      var a = t.split(","), i = e < 0 ? 0 : 255, r = e < 0 ? -1 * e : e, s = parseInt(a[0].slice(4), 10), o = parseInt(a[1], 10), n = parseInt(a[2], 10);
      return "rgb(" + (Math.round((i - s) * r) + s) + "," + (Math.round((i - o) * r) + o) + "," + (Math.round((i - n) * r) + n) + ")";
    } }, { key: "shadeHexColor", value: function(e, t) {
      var a = parseInt(t.slice(1), 16), i = e < 0 ? 0 : 255, r = e < 0 ? -1 * e : e, s = a >> 16, o = a >> 8 & 255, n = 255 & a;
      return "#" + (16777216 + 65536 * (Math.round((i - s) * r) + s) + 256 * (Math.round((i - o) * r) + o) + (Math.round((i - n) * r) + n)).toString(16).slice(1);
    } }, { key: "shadeColor", value: function(e, t) {
      return y.isColorHex(t) ? this.shadeHexColor(e, t) : this.shadeRGBColor(e, t);
    } }], [{ key: "bind", value: function(e, t) {
      return function() {
        return e.apply(t, arguments);
      };
    } }, { key: "isObject", value: function(e) {
      return e && he(e) === "object" && !Array.isArray(e) && e != null;
    } }, { key: "is", value: function(e, t) {
      return Object.prototype.toString.call(t) === "[object " + e + "]";
    } }, { key: "listToArray", value: function(e) {
      var t, a = [];
      for (t = 0; t < e.length; t++) a[t] = e[t];
      return a;
    } }, { key: "extend", value: function(e, t) {
      var a = this;
      typeof Object.assign != "function" && (Object.assign = function(r) {
        if (r == null) throw new TypeError("Cannot convert undefined or null to object");
        for (var s = Object(r), o = 1; o < arguments.length; o++) {
          var n = arguments[o];
          if (n != null) for (var h in n) n.hasOwnProperty(h) && (s[h] = n[h]);
        }
        return s;
      });
      var i = Object.assign({}, e);
      return this.isObject(e) && this.isObject(t) && Object.keys(t).forEach(function(r) {
        a.isObject(t[r]) && r in e ? i[r] = a.extend(e[r], t[r]) : Object.assign(i, U({}, r, t[r]));
      }), i;
    } }, { key: "extendArray", value: function(e, t) {
      var a = [];
      return e.map(function(i) {
        a.push(y.extend(t, i));
      }), e = a;
    } }, { key: "monthMod", value: function(e) {
      return e % 12;
    } }, { key: "clone", value: function(e) {
      if (y.is("Array", e)) {
        for (var t = [], a = 0; a < e.length; a++) t[a] = this.clone(e[a]);
        return t;
      }
      if (y.is("Null", e)) return null;
      if (y.is("Date", e)) return e;
      if (he(e) === "object") {
        var i = {};
        for (var r in e) e.hasOwnProperty(r) && (i[r] = this.clone(e[r]));
        return i;
      }
      return e;
    } }, { key: "log10", value: function(e) {
      return Math.log(e) / Math.LN10;
    } }, { key: "roundToBase10", value: function(e) {
      return Math.pow(10, Math.floor(Math.log10(e)));
    } }, { key: "roundToBase", value: function(e, t) {
      return Math.pow(t, Math.floor(Math.log(e) / Math.log(t)));
    } }, { key: "parseNumber", value: function(e) {
      return e === null ? e : parseFloat(e);
    } }, { key: "stripNumber", value: function(e) {
      var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 2;
      return Number.isInteger(e) ? e : parseFloat(e.toPrecision(t));
    } }, { key: "randomId", value: function() {
      return (Math.random() + 1).toString(36).substring(4);
    } }, { key: "noExponents", value: function(e) {
      var t = String(e).split(/[eE]/);
      if (t.length === 1) return t[0];
      var a = "", i = e < 0 ? "-" : "", r = t[0].replace(".", ""), s = Number(t[1]) + 1;
      if (s < 0) {
        for (a = i + "0."; s++; ) a += "0";
        return a + r.replace(/^-/, "");
      }
      for (s -= r.length; s--; ) a += "0";
      return r + a;
    } }, { key: "getDimensions", value: function(e) {
      var t = getComputedStyle(e, null), a = e.clientHeight, i = e.clientWidth;
      return a -= parseFloat(t.paddingTop) + parseFloat(t.paddingBottom), [i -= parseFloat(t.paddingLeft) + parseFloat(t.paddingRight), a];
    } }, { key: "getBoundingClientRect", value: function(e) {
      var t = e.getBoundingClientRect();
      return { top: t.top, right: t.right, bottom: t.bottom, left: t.left, width: e.clientWidth, height: e.clientHeight, x: t.left, y: t.top };
    } }, { key: "getLargestStringFromArr", value: function(e) {
      return e.reduce(function(t, a) {
        return Array.isArray(a) && (a = a.reduce(function(i, r) {
          return i.length > r.length ? i : r;
        })), t.length > a.length ? t : a;
      }, 0);
    } }, { key: "hexToRgba", value: function() {
      var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "#999999", t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0.6;
      e.substring(0, 1) !== "#" && (e = "#999999");
      var a = e.replace("#", "");
      a = a.match(new RegExp("(.{" + a.length / 3 + "})", "g"));
      for (var i = 0; i < a.length; i++) a[i] = parseInt(a[i].length === 1 ? a[i] + a[i] : a[i], 16);
      return t !== void 0 && a.push(t), "rgba(" + a.join(",") + ")";
    } }, { key: "getOpacityFromRGBA", value: function(e) {
      return parseFloat(e.replace(/^.*,(.+)\)/, "$1"));
    } }, { key: "rgb2hex", value: function(e) {
      return (e = e.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i)) && e.length === 4 ? "#" + ("0" + parseInt(e[1], 10).toString(16)).slice(-2) + ("0" + parseInt(e[2], 10).toString(16)).slice(-2) + ("0" + parseInt(e[3], 10).toString(16)).slice(-2) : "";
    } }, { key: "isColorHex", value: function(e) {
      return /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)|(^#[0-9A-F]{8}$)/i.test(e);
    } }, { key: "getPolygonPos", value: function(e, t) {
      for (var a = [], i = 2 * Math.PI / t, r = 0; r < t; r++) {
        var s = {};
        s.x = e * Math.sin(r * i), s.y = -e * Math.cos(r * i), a.push(s);
      }
      return a;
    } }, { key: "polarToCartesian", value: function(e, t, a, i) {
      var r = (i - 90) * Math.PI / 180;
      return { x: e + a * Math.cos(r), y: t + a * Math.sin(r) };
    } }, { key: "escapeString", value: function(e) {
      var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "x", a = e.toString().slice();
      return a = a.replace(/[` ~!@#$%^&*()|+\=?;:'",.<>{}[\]\\/]/gi, t);
    } }, { key: "negToZero", value: function(e) {
      return e < 0 ? 0 : e;
    } }, { key: "moveIndexInArray", value: function(e, t, a) {
      if (a >= e.length) for (var i = a - e.length + 1; i--; ) e.push(void 0);
      return e.splice(a, 0, e.splice(t, 1)[0]), e;
    } }, { key: "extractNumber", value: function(e) {
      return parseFloat(e.replace(/[^\d.]*/g, ""));
    } }, { key: "findAncestor", value: function(e, t) {
      for (; (e = e.parentElement) && !e.classList.contains(t); ) ;
      return e;
    } }, { key: "setELstyles", value: function(e, t) {
      for (var a in t) t.hasOwnProperty(a) && (e.style.key = t[a]);
    } }, { key: "preciseAddition", value: function(e, t) {
      var a = (String(e).split(".")[1] || "").length, i = (String(t).split(".")[1] || "").length, r = Math.pow(10, Math.max(a, i));
      return (Math.round(e * r) + Math.round(t * r)) / r;
    } }, { key: "isNumber", value: function(e) {
      return !isNaN(e) && parseFloat(Number(e)) === e && !isNaN(parseInt(e, 10));
    } }, { key: "isFloat", value: function(e) {
      return Number(e) === e && e % 1 != 0;
    } }, { key: "isSafari", value: function() {
      return /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
    } }, { key: "isFirefox", value: function() {
      return navigator.userAgent.toLowerCase().indexOf("firefox") > -1;
    } }, { key: "isMsEdge", value: function() {
      var e = window.navigator.userAgent, t = e.indexOf("Edge/");
      return t > 0 && parseInt(e.substring(t + 5, e.indexOf(".", t)), 10);
    } }, { key: "getGCD", value: function(e, t) {
      var a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 7, i = Math.pow(10, a - Math.floor(Math.log10(Math.max(e, t))));
      for (e = Math.round(Math.abs(e) * i), t = Math.round(Math.abs(t) * i); t; ) {
        var r = t;
        t = e % t, e = r;
      }
      return e / i;
    } }, { key: "getPrimeFactors", value: function(e) {
      for (var t = [], a = 2; e >= 2; ) e % a == 0 ? (t.push(a), e /= a) : a++;
      return t;
    } }, { key: "mod", value: function(e, t) {
      var a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 7, i = Math.pow(10, a - Math.floor(Math.log10(Math.max(e, t))));
      return (e = Math.round(Math.abs(e) * i)) % (t = Math.round(Math.abs(t) * i)) / i;
    } }]), y;
  }(), ye = function() {
    function y(e) {
      T(this, y), this.ctx = e, this.w = e.w, this.setEasingFunctions();
    }
    return E(y, [{ key: "setEasingFunctions", value: function() {
      var e;
      if (!this.w.globals.easing) {
        switch (this.w.config.chart.animations.easing) {
          case "linear":
            e = "-";
            break;
          case "easein":
            e = "<";
            break;
          case "easeout":
            e = ">";
            break;
          case "easeinout":
          default:
            e = "<>";
            break;
          case "swing":
            e = function(t) {
              var a = 1.70158;
              return (t -= 1) * t * ((a + 1) * t + a) + 1;
            };
            break;
          case "bounce":
            e = function(t) {
              return t < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + 0.75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + 0.9375 : 7.5625 * (t -= 2.625 / 2.75) * t + 0.984375;
            };
            break;
          case "elastic":
            e = function(t) {
              return t === !!t ? t : Math.pow(2, -10 * t) * Math.sin((t - 0.075) * (2 * Math.PI) / 0.3) + 1;
            };
        }
        this.w.globals.easing = e;
      }
    } }, { key: "animateLine", value: function(e, t, a, i) {
      e.attr(t).animate(i).attr(a);
    } }, { key: "animateMarker", value: function(e, t, a, i) {
      e.attr({ opacity: 0 }).animate(t, a).attr({ opacity: 1 }).afterAll(function() {
        i();
      });
    } }, { key: "animateRect", value: function(e, t, a, i, r) {
      e.attr(t).animate(i).attr(a).afterAll(function() {
        return r();
      });
    } }, { key: "animatePathsGradually", value: function(e) {
      var t = e.el, a = e.realIndex, i = e.j, r = e.fill, s = e.pathFrom, o = e.pathTo, n = e.speed, h = e.delay, d = this.w, c = 0;
      d.config.chart.animations.animateGradually.enabled && (c = d.config.chart.animations.animateGradually.delay), d.config.chart.animations.dynamicAnimation.enabled && d.globals.dataChanged && d.config.chart.type !== "bar" && (c = 0), this.morphSVG(t, a, i, d.config.chart.type !== "line" || d.globals.comboCharts ? r : "stroke", s, o, n, h * c);
    } }, { key: "showDelayedElements", value: function() {
      this.w.globals.delayedElements.forEach(function(e) {
        var t = e.el;
        t.classList.remove("apexcharts-element-hidden"), t.classList.add("apexcharts-hidden-element-shown");
      });
    } }, { key: "animationCompleted", value: function(e) {
      var t = this.w;
      t.globals.animationEnded || (t.globals.animationEnded = !0, this.showDelayedElements(), typeof t.config.chart.events.animationEnd == "function" && t.config.chart.events.animationEnd(this.ctx, { el: e, w: t }));
    } }, { key: "morphSVG", value: function(e, t, a, i, r, s, o, n) {
      var h = this, d = this.w;
      r || (r = e.attr("pathFrom")), s || (s = e.attr("pathTo"));
      var c = function(u) {
        return d.config.chart.type === "radar" && (o = 1), "M 0 ".concat(d.globals.gridHeight);
      };
      (!r || r.indexOf("undefined") > -1 || r.indexOf("NaN") > -1) && (r = c()), (!s || s.indexOf("undefined") > -1 || s.indexOf("NaN") > -1) && (s = c()), d.globals.shouldAnimate || (o = 1), e.plot(r).animate(1, d.globals.easing, n).plot(r).animate(o, d.globals.easing, n).plot(s).afterAll(function() {
        z.isNumber(a) ? a === d.globals.series[d.globals.maxValsInArrayIndex].length - 2 && d.globals.shouldAnimate && h.animationCompleted(e) : i !== "none" && d.globals.shouldAnimate && (!d.globals.comboCharts && t === d.globals.series.length - 1 || d.globals.comboCharts) && h.animationCompleted(e), h.showDelayedElements();
      });
    } }]), y;
  }(), Pe = function() {
    function y(e) {
      T(this, y), this.ctx = e, this.w = e.w;
    }
    return E(y, [{ key: "getDefaultFilter", value: function(e, t) {
      var a = this.w;
      e.unfilter(!0), new window.SVG.Filter().size("120%", "180%", "-5%", "-40%"), a.config.states.normal.filter !== "none" ? this.applyFilter(e, t, a.config.states.normal.filter.type, a.config.states.normal.filter.value) : a.config.chart.dropShadow.enabled && this.dropShadow(e, a.config.chart.dropShadow, t);
    } }, { key: "addNormalFilter", value: function(e, t) {
      var a = this.w;
      a.config.chart.dropShadow.enabled && !e.node.classList.contains("apexcharts-marker") && this.dropShadow(e, a.config.chart.dropShadow, t);
    } }, { key: "addLightenFilter", value: function(e, t, a) {
      var i = this, r = this.w, s = a.intensity;
      e.unfilter(!0), new window.SVG.Filter(), e.filter(function(o) {
        var n = r.config.chart.dropShadow;
        (n.enabled ? i.addShadow(o, t, n) : o).componentTransfer({ rgb: { type: "linear", slope: 1.5, intercept: s } });
      }), e.filterer.node.setAttribute("filterUnits", "userSpaceOnUse"), this._scaleFilterSize(e.filterer.node);
    } }, { key: "addDarkenFilter", value: function(e, t, a) {
      var i = this, r = this.w, s = a.intensity;
      e.unfilter(!0), new window.SVG.Filter(), e.filter(function(o) {
        var n = r.config.chart.dropShadow;
        (n.enabled ? i.addShadow(o, t, n) : o).componentTransfer({ rgb: { type: "linear", slope: s } });
      }), e.filterer.node.setAttribute("filterUnits", "userSpaceOnUse"), this._scaleFilterSize(e.filterer.node);
    } }, { key: "applyFilter", value: function(e, t, a) {
      var i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 0.5;
      switch (a) {
        case "none":
          this.addNormalFilter(e, t);
          break;
        case "lighten":
          this.addLightenFilter(e, t, { intensity: i });
          break;
        case "darken":
          this.addDarkenFilter(e, t, { intensity: i });
      }
    } }, { key: "addShadow", value: function(e, t, a) {
      var i, r = this.w, s = a.blur, o = a.top, n = a.left, h = a.color, d = a.opacity;
      if (((i = r.config.chart.dropShadow.enabledOnSeries) === null || i === void 0 ? void 0 : i.length) > 0 && r.config.chart.dropShadow.enabledOnSeries.indexOf(t) === -1) return e;
      var c = e.flood(Array.isArray(h) ? h[t] : h, d).composite(e.sourceAlpha, "in").offset(n, o).gaussianBlur(s).merge(e.source);
      return e.blend(e.source, c);
    } }, { key: "dropShadow", value: function(e, t) {
      var a, i, r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0, s = t.top, o = t.left, n = t.blur, h = t.color, d = t.opacity, c = t.noUserSpaceOnUse, u = this.w;
      return e.unfilter(!0), z.isMsEdge() && u.config.chart.type === "radialBar" || ((a = u.config.chart.dropShadow.enabledOnSeries) === null || a === void 0 ? void 0 : a.length) > 0 && ((i = u.config.chart.dropShadow.enabledOnSeries) === null || i === void 0 ? void 0 : i.indexOf(r)) === -1 || (h = Array.isArray(h) ? h[r] : h, e.filter(function(p) {
        var m = null;
        m = z.isSafari() || z.isFirefox() || z.isMsEdge() ? p.flood(h, d).composite(p.sourceAlpha, "in").offset(o, s).gaussianBlur(n) : p.flood(h, d).composite(p.sourceAlpha, "in").offset(o, s).gaussianBlur(n).merge(p.source), p.blend(p.source, m);
      }), c || e.filterer.node.setAttribute("filterUnits", "userSpaceOnUse"), this._scaleFilterSize(e.filterer.node)), e;
    } }, { key: "setSelectionFilter", value: function(e, t, a) {
      var i = this.w;
      if (i.globals.selectedDataPoints[t] !== void 0 && i.globals.selectedDataPoints[t].indexOf(a) > -1) {
        e.node.setAttribute("selected", !0);
        var r = i.config.states.active.filter;
        r !== "none" && this.applyFilter(e, t, r.type, r.value);
      }
    } }, { key: "_scaleFilterSize", value: function(e) {
      (function(t) {
        for (var a in t) t.hasOwnProperty(a) && e.setAttribute(a, t[a]);
      })({ width: "200%", height: "200%", x: "-50%", y: "-50%" });
    } }]), y;
  }(), X = function() {
    function y(e) {
      T(this, y), this.ctx = e, this.w = e.w;
    }
    return E(y, [{ key: "roundPathCorners", value: function(e, t) {
      function a(A, L, I) {
        var F = L.x - A.x, B = L.y - A.y, G = Math.sqrt(F * F + B * B);
        return i(A, L, Math.min(1, I / G));
      }
      function i(A, L, I) {
        return { x: A.x + (L.x - A.x) * I, y: A.y + (L.y - A.y) * I };
      }
      function r(A, L) {
        A.length > 2 && (A[A.length - 2] = L.x, A[A.length - 1] = L.y);
      }
      function s(A) {
        return { x: parseFloat(A[A.length - 2]), y: parseFloat(A[A.length - 1]) };
      }
      e.indexOf("NaN") > -1 && (e = "");
      var o = e.split(/[,\s]/).reduce(function(A, L) {
        var I = L.match("([a-zA-Z])(.+)");
        return I ? (A.push(I[1]), A.push(I[2])) : A.push(L), A;
      }, []).reduce(function(A, L) {
        return parseFloat(L) == L && A.length ? A[A.length - 1].push(L) : A.push([L]), A;
      }, []), n = [];
      if (o.length > 1) {
        var h = s(o[0]), d = null;
        o[o.length - 1][0] == "Z" && o[0].length > 2 && (d = ["L", h.x, h.y], o[o.length - 1] = d), n.push(o[0]);
        for (var c = 1; c < o.length; c++) {
          var u = n[n.length - 1], p = o[c], m = p == d ? o[1] : o[c + 1];
          if (m && u && u.length > 2 && p[0] == "L" && m.length > 2 && m[0] == "L") {
            var f, b, v = s(u), w = s(p), l = s(m);
            f = a(w, v, t), b = a(w, l, t), r(p, f), p.origPoint = w, n.push(p);
            var g = i(f, w, 0.5), x = i(w, b, 0.5), k = ["C", g.x, g.y, x.x, x.y, b.x, b.y];
            k.origPoint = w, n.push(k);
          } else n.push(p);
        }
        if (d) {
          var S = s(n[n.length - 1]);
          n.push(["Z"]), r(n[0], S);
        }
      } else n = o;
      return n.reduce(function(A, L) {
        return A + L.join(" ") + " ";
      }, "");
    } }, { key: "drawLine", value: function(e, t, a, i) {
      var r = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : "#a8a8a8", s = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : 0, o = arguments.length > 6 && arguments[6] !== void 0 ? arguments[6] : null, n = arguments.length > 7 && arguments[7] !== void 0 ? arguments[7] : "butt";
      return this.w.globals.dom.Paper.line().attr({ x1: e, y1: t, x2: a, y2: i, stroke: r, "stroke-dasharray": s, "stroke-width": o, "stroke-linecap": n });
    } }, { key: "drawRect", value: function() {
      var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0, t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0, i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 0, r = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : 0, s = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : "#fefefe", o = arguments.length > 6 && arguments[6] !== void 0 ? arguments[6] : 1, n = arguments.length > 7 && arguments[7] !== void 0 ? arguments[7] : null, h = arguments.length > 8 && arguments[8] !== void 0 ? arguments[8] : null, d = arguments.length > 9 && arguments[9] !== void 0 ? arguments[9] : 0, c = this.w.globals.dom.Paper.rect();
      return c.attr({ x: e, y: t, width: a > 0 ? a : 0, height: i > 0 ? i : 0, rx: r, ry: r, opacity: o, "stroke-width": n !== null ? n : 0, stroke: h !== null ? h : "none", "stroke-dasharray": d }), c.node.setAttribute("fill", s), c;
    } }, { key: "drawPolygon", value: function(e) {
      var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "#e1e1e1", a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1, i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : "none";
      return this.w.globals.dom.Paper.polygon(e).attr({ fill: i, stroke: t, "stroke-width": a });
    } }, { key: "drawCircle", value: function(e) {
      var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
      e < 0 && (e = 0);
      var a = this.w.globals.dom.Paper.circle(2 * e);
      return t !== null && a.attr(t), a;
    } }, { key: "drawPath", value: function(e) {
      var t = e.d, a = t === void 0 ? "" : t, i = e.stroke, r = i === void 0 ? "#a8a8a8" : i, s = e.strokeWidth, o = s === void 0 ? 1 : s, n = e.fill, h = e.fillOpacity, d = h === void 0 ? 1 : h, c = e.strokeOpacity, u = c === void 0 ? 1 : c, p = e.classes, m = e.strokeLinecap, f = m === void 0 ? null : m, b = e.strokeDashArray, v = b === void 0 ? 0 : b, w = this.w;
      return f === null && (f = w.config.stroke.lineCap), (a.indexOf("undefined") > -1 || a.indexOf("NaN") > -1) && (a = "M 0 ".concat(w.globals.gridHeight)), w.globals.dom.Paper.path(a).attr({ fill: n, "fill-opacity": d, stroke: r, "stroke-opacity": u, "stroke-linecap": f, "stroke-width": o, "stroke-dasharray": v, class: p });
    } }, { key: "group", value: function() {
      var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : null, t = this.w.globals.dom.Paper.group();
      return e !== null && t.attr(e), t;
    } }, { key: "move", value: function(e, t) {
      var a = ["M", e, t].join(" ");
      return a;
    } }, { key: "line", value: function(e, t) {
      var a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null, i = null;
      return a === null ? i = [" L", e, t].join(" ") : a === "H" ? i = [" H", e].join(" ") : a === "V" && (i = [" V", t].join(" ")), i;
    } }, { key: "curve", value: function(e, t, a, i, r, s) {
      var o = ["C", e, t, a, i, r, s].join(" ");
      return o;
    } }, { key: "quadraticCurve", value: function(e, t, a, i) {
      return ["Q", e, t, a, i].join(" ");
    } }, { key: "arc", value: function(e, t, a, i, r, s, o) {
      var n = "A";
      arguments.length > 7 && arguments[7] !== void 0 && arguments[7] && (n = "a");
      var h = [n, e, t, a, i, r, s, o].join(" ");
      return h;
    } }, { key: "renderPaths", value: function(e) {
      var t, a = e.j, i = e.realIndex, r = e.pathFrom, s = e.pathTo, o = e.stroke, n = e.strokeWidth, h = e.strokeLinecap, d = e.fill, c = e.animationDelay, u = e.initialSpeed, p = e.dataChangeSpeed, m = e.className, f = e.chartType, b = e.shouldClipToGrid, v = b === void 0 || b, w = e.bindEventsOnPaths, l = w === void 0 || w, g = e.drawShadow, x = g === void 0 || g, k = this.w, S = new Pe(this.ctx), A = new ye(this.ctx), L = this.w.config.chart.animations.enabled, I = L && this.w.config.chart.animations.dynamicAnimation.enabled, F = !!(L && !k.globals.resized || I && k.globals.dataChanged && k.globals.shouldAnimate);
      F ? t = r : (t = s, k.globals.animationEnded = !0);
      var B = k.config.stroke.dashArray, G = 0;
      G = Array.isArray(B) ? B[i] : k.config.stroke.dashArray;
      var W = this.drawPath({ d: t, stroke: o, strokeWidth: n, fill: d, fillOpacity: 1, classes: m, strokeLinecap: h, strokeDashArray: G });
      if (W.attr("index", i), v && (f === "bar" && !k.globals.isHorizontal || k.globals.comboCharts ? W.attr({ "clip-path": "url(#gridRectBarMask".concat(k.globals.cuid, ")") }) : W.attr({ "clip-path": "url(#gridRectMask".concat(k.globals.cuid, ")") })), k.config.states.normal.filter.type !== "none") S.getDefaultFilter(W, i);
      else if (k.config.chart.dropShadow.enabled && x) {
        var q = k.config.chart.dropShadow;
        S.dropShadow(W, q, i);
      }
      l && (W.node.addEventListener("mouseenter", this.pathMouseEnter.bind(this, W)), W.node.addEventListener("mouseleave", this.pathMouseLeave.bind(this, W)), W.node.addEventListener("mousedown", this.pathMouseDown.bind(this, W))), W.attr({ pathTo: s, pathFrom: r });
      var ee = { el: W, j: a, realIndex: i, pathFrom: r, pathTo: s, fill: d, strokeWidth: n, delay: c };
      return !L || k.globals.resized || k.globals.dataChanged ? !k.globals.resized && k.globals.dataChanged || A.showDelayedElements() : A.animatePathsGradually(H(H({}, ee), {}, { speed: u })), k.globals.dataChanged && I && F && A.animatePathsGradually(H(H({}, ee), {}, { speed: p })), W;
    } }, { key: "drawPattern", value: function(e, t, a) {
      var i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : "#a8a8a8", r = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : 0;
      return this.w.globals.dom.Paper.pattern(t, a, function(s) {
        e === "horizontalLines" ? s.line(0, 0, a, 0).stroke({ color: i, width: r + 1 }) : e === "verticalLines" ? s.line(0, 0, 0, t).stroke({ color: i, width: r + 1 }) : e === "slantedLines" ? s.line(0, 0, t, a).stroke({ color: i, width: r }) : e === "squares" ? s.rect(t, a).fill("none").stroke({ color: i, width: r }) : e === "circles" && s.circle(t).fill("none").stroke({ color: i, width: r });
      });
    } }, { key: "drawGradient", value: function(e, t, a, i, r) {
      var s, o = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : null, n = arguments.length > 6 && arguments[6] !== void 0 ? arguments[6] : null, h = arguments.length > 7 && arguments[7] !== void 0 ? arguments[7] : null, d = arguments.length > 8 && arguments[8] !== void 0 ? arguments[8] : 0, c = this.w;
      t.length < 9 && t.indexOf("#") === 0 && (t = z.hexToRgba(t, i)), a.length < 9 && a.indexOf("#") === 0 && (a = z.hexToRgba(a, r));
      var u = 0, p = 1, m = 1, f = null;
      n !== null && (u = n[0] !== void 0 ? n[0] / 100 : 0, p = n[1] !== void 0 ? n[1] / 100 : 1, m = n[2] !== void 0 ? n[2] / 100 : 1, f = n[3] !== void 0 ? n[3] / 100 : null);
      var b = !(c.config.chart.type !== "donut" && c.config.chart.type !== "pie" && c.config.chart.type !== "polarArea" && c.config.chart.type !== "bubble");
      if (s = h === null || h.length === 0 ? c.globals.dom.Paper.gradient(b ? "radial" : "linear", function(l) {
        l.at(u, t, i), l.at(p, a, r), l.at(m, a, r), f !== null && l.at(f, t, i);
      }) : c.globals.dom.Paper.gradient(b ? "radial" : "linear", function(l) {
        (Array.isArray(h[d]) ? h[d] : h).forEach(function(g) {
          l.at(g.offset / 100, g.color, g.opacity);
        });
      }), b) {
        var v = c.globals.gridWidth / 2, w = c.globals.gridHeight / 2;
        c.config.chart.type !== "bubble" ? s.attr({ gradientUnits: "userSpaceOnUse", cx: v, cy: w, r: o }) : s.attr({ cx: 0.5, cy: 0.5, r: 0.8, fx: 0.2, fy: 0.2 });
      } else e === "vertical" ? s.from(0, 0).to(0, 1) : e === "diagonal" ? s.from(0, 0).to(1, 1) : e === "horizontal" ? s.from(0, 1).to(1, 1) : e === "diagonal2" && s.from(1, 0).to(0, 1);
      return s;
    } }, { key: "getTextBasedOnMaxWidth", value: function(e) {
      var t = e.text, a = e.maxWidth, i = e.fontSize, r = e.fontFamily, s = this.getTextRects(t, i, r), o = s.width / t.length, n = Math.floor(a / o);
      return a < s.width ? t.slice(0, n - 3) + "..." : t;
    } }, { key: "drawText", value: function(e) {
      var t = this, a = e.x, i = e.y, r = e.text, s = e.textAnchor, o = e.fontSize, n = e.fontFamily, h = e.fontWeight, d = e.foreColor, c = e.opacity, u = e.maxWidth, p = e.cssClass, m = p === void 0 ? "" : p, f = e.isPlainText, b = f === void 0 || f, v = e.dominantBaseline, w = v === void 0 ? "auto" : v, l = this.w;
      r === void 0 && (r = "");
      var g = r;
      s || (s = "start"), d && d.length || (d = l.config.chart.foreColor), n = n || l.config.chart.fontFamily, h = h || "regular";
      var x, k = { maxWidth: u, fontSize: o = o || "11px", fontFamily: n };
      return Array.isArray(r) ? x = l.globals.dom.Paper.text(function(S) {
        for (var A = 0; A < r.length; A++) g = r[A], u && (g = t.getTextBasedOnMaxWidth(H({ text: r[A] }, k))), A === 0 ? S.tspan(g) : S.tspan(g).newLine();
      }) : (u && (g = this.getTextBasedOnMaxWidth(H({ text: r }, k))), x = b ? l.globals.dom.Paper.plain(r) : l.globals.dom.Paper.text(function(S) {
        return S.tspan(g);
      })), x.attr({ x: a, y: i, "text-anchor": s, "dominant-baseline": w, "font-size": o, "font-family": n, "font-weight": h, fill: d, class: "apexcharts-text " + m }), x.node.style.fontFamily = n, x.node.style.opacity = c, x;
    } }, { key: "getMarkerPath", value: function(e, t, a, i) {
      var r = "";
      switch (a) {
        case "cross":
          r = "M ".concat(e - (i /= 1.4), " ").concat(t - i, " L ").concat(e + i, " ").concat(t + i, "  M ").concat(e - i, " ").concat(t + i, " L ").concat(e + i, " ").concat(t - i);
          break;
        case "plus":
          r = "M ".concat(e - (i /= 1.12), " ").concat(t, " L ").concat(e + i, " ").concat(t, "  M ").concat(e, " ").concat(t - i, " L ").concat(e, " ").concat(t + i);
          break;
        case "star":
        case "sparkle":
          var s = 5;
          i *= 1.15, a === "sparkle" && (i /= 1.1, s = 4);
          for (var o = Math.PI / s, n = 0; n <= 2 * s; n++) {
            var h = n * o, d = n % 2 == 0 ? i : i / 2;
            r += (n === 0 ? "M" : "L") + (e + d * Math.sin(h)) + "," + (t - d * Math.cos(h));
          }
          r += "Z";
          break;
        case "triangle":
          r = "M ".concat(e, " ").concat(t - i, ` 
             L `).concat(e + i, " ").concat(t + i, ` 
             L `).concat(e - i, " ").concat(t + i, ` 
             Z`);
          break;
        case "square":
        case "rect":
          r = "M ".concat(e - (i /= 1.125), " ").concat(t - i, ` 
           L `).concat(e + i, " ").concat(t - i, ` 
           L `).concat(e + i, " ").concat(t + i, ` 
           L `).concat(e - i, " ").concat(t + i, ` 
           Z`);
          break;
        case "diamond":
          i *= 1.05, r = "M ".concat(e, " ").concat(t - i, ` 
             L `).concat(e + i, " ").concat(t, ` 
             L `).concat(e, " ").concat(t + i, ` 
             L `).concat(e - i, " ").concat(t, ` 
            Z`);
          break;
        case "line":
          r = "M ".concat(e - (i /= 1.1), " ").concat(t, ` 
           L `).concat(e + i, " ").concat(t);
          break;
        default:
          i *= 2, r = "M ".concat(e, ", ").concat(t, ` 
           m -`).concat(i / 2, `, 0 
           a `).concat(i / 2, ",").concat(i / 2, " 0 1,0 ").concat(i, `,0 
           a `).concat(i / 2, ",").concat(i / 2, " 0 1,0 -").concat(i, ",0");
      }
      return r;
    } }, { key: "drawMarkerShape", value: function(e, t, a, i, r) {
      var s = this.drawPath({ d: this.getMarkerPath(e, t, a, i, r), stroke: r.pointStrokeColor, strokeDashArray: r.pointStrokeDashArray, strokeWidth: r.pointStrokeWidth, fill: r.pointFillColor, fillOpacity: r.pointFillOpacity, strokeOpacity: r.pointStrokeOpacity });
      return s.attr({ cx: e, cy: t, shape: r.shape, class: r.class ? r.class : "" }), s;
    } }, { key: "drawMarker", value: function(e, t, a) {
      e = e || 0;
      var i = a.pSize || 0;
      return z.isNumber(t) || (i = 0, t = 0), this.drawMarkerShape(e, t, a == null ? void 0 : a.shape, i, H(H({}, a), a.shape === "line" || a.shape === "plus" || a.shape === "cross" ? { pointStrokeColor: a.pointFillColor, pointStrokeOpacity: a.pointFillOpacity } : {}));
    } }, { key: "pathMouseEnter", value: function(e, t) {
      var a = this.w, i = new Pe(this.ctx), r = parseInt(e.node.getAttribute("index"), 10), s = parseInt(e.node.getAttribute("j"), 10);
      if (typeof a.config.chart.events.dataPointMouseEnter == "function" && a.config.chart.events.dataPointMouseEnter(t, this.ctx, { seriesIndex: r, dataPointIndex: s, w: a }), this.ctx.events.fireEvent("dataPointMouseEnter", [t, this.ctx, { seriesIndex: r, dataPointIndex: s, w: a }]), (a.config.states.active.filter.type === "none" || e.node.getAttribute("selected") !== "true") && a.config.states.hover.filter.type !== "none" && !a.globals.isTouchDevice) {
        var o = a.config.states.hover.filter;
        i.applyFilter(e, r, o.type, o.value);
      }
    } }, { key: "pathMouseLeave", value: function(e, t) {
      var a = this.w, i = new Pe(this.ctx), r = parseInt(e.node.getAttribute("index"), 10), s = parseInt(e.node.getAttribute("j"), 10);
      typeof a.config.chart.events.dataPointMouseLeave == "function" && a.config.chart.events.dataPointMouseLeave(t, this.ctx, { seriesIndex: r, dataPointIndex: s, w: a }), this.ctx.events.fireEvent("dataPointMouseLeave", [t, this.ctx, { seriesIndex: r, dataPointIndex: s, w: a }]), a.config.states.active.filter.type !== "none" && e.node.getAttribute("selected") === "true" || a.config.states.hover.filter.type !== "none" && i.getDefaultFilter(e, r);
    } }, { key: "pathMouseDown", value: function(e, t) {
      var a = this.w, i = new Pe(this.ctx), r = parseInt(e.node.getAttribute("index"), 10), s = parseInt(e.node.getAttribute("j"), 10), o = "false";
      if (e.node.getAttribute("selected") === "true") {
        if (e.node.setAttribute("selected", "false"), a.globals.selectedDataPoints[r].indexOf(s) > -1) {
          var n = a.globals.selectedDataPoints[r].indexOf(s);
          a.globals.selectedDataPoints[r].splice(n, 1);
        }
      } else {
        if (!a.config.states.active.allowMultipleDataPointsSelection && a.globals.selectedDataPoints.length > 0) {
          a.globals.selectedDataPoints = [];
          var h = a.globals.dom.Paper.select(".apexcharts-series path").members, d = a.globals.dom.Paper.select(".apexcharts-series circle, .apexcharts-series rect").members, c = function(m) {
            Array.prototype.forEach.call(m, function(f) {
              f.node.setAttribute("selected", "false"), i.getDefaultFilter(f, r);
            });
          };
          c(h), c(d);
        }
        e.node.setAttribute("selected", "true"), o = "true", a.globals.selectedDataPoints[r] === void 0 && (a.globals.selectedDataPoints[r] = []), a.globals.selectedDataPoints[r].push(s);
      }
      if (o === "true") {
        var u = a.config.states.active.filter;
        if (u !== "none") i.applyFilter(e, r, u.type, u.value);
        else if (a.config.states.hover.filter !== "none" && !a.globals.isTouchDevice) {
          var p = a.config.states.hover.filter;
          i.applyFilter(e, r, p.type, p.value);
        }
      } else a.config.states.active.filter.type !== "none" && (a.config.states.hover.filter.type === "none" || a.globals.isTouchDevice ? i.getDefaultFilter(e, r) : (p = a.config.states.hover.filter, i.applyFilter(e, r, p.type, p.value)));
      typeof a.config.chart.events.dataPointSelection == "function" && a.config.chart.events.dataPointSelection(t, this.ctx, { selectedDataPoints: a.globals.selectedDataPoints, seriesIndex: r, dataPointIndex: s, w: a }), t && this.ctx.events.fireEvent("dataPointSelection", [t, this.ctx, { selectedDataPoints: a.globals.selectedDataPoints, seriesIndex: r, dataPointIndex: s, w: a }]);
    } }, { key: "rotateAroundCenter", value: function(e) {
      var t = {};
      return e && typeof e.getBBox == "function" && (t = e.getBBox()), { x: t.x + t.width / 2, y: t.y + t.height / 2 };
    } }, { key: "getTextRects", value: function(e, t, a, i) {
      var r = !(arguments.length > 4 && arguments[4] !== void 0) || arguments[4], s = this.w, o = this.drawText({ x: -200, y: -200, text: e, textAnchor: "start", fontSize: t, fontFamily: a, foreColor: "#fff", opacity: 0 });
      i && o.attr("transform", i), s.globals.dom.Paper.add(o);
      var n = o.bbox();
      return r || (n = o.node.getBoundingClientRect()), o.remove(), { width: n.width, height: n.height };
    } }, { key: "placeTextWithEllipsis", value: function(e, t, a) {
      if (typeof e.getComputedTextLength == "function" && (e.textContent = t, t.length > 0 && e.getComputedTextLength() >= a / 1.1)) {
        for (var i = t.length - 3; i > 0; i -= 3) if (e.getSubStringLength(0, i) <= a / 1.1) return void (e.textContent = t.substring(0, i) + "...");
        e.textContent = ".";
      }
    } }], [{ key: "setAttrs", value: function(e, t) {
      for (var a in t) t.hasOwnProperty(a) && e.setAttribute(a, t[a]);
    } }]), y;
  }(), Te = function() {
    function y(e) {
      T(this, y), this.ctx = e, this.w = e.w;
    }
    return E(y, [{ key: "getStackedSeriesTotals", value: function() {
      var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], t = this.w, a = [];
      if (t.globals.series.length === 0) return a;
      for (var i = 0; i < t.globals.series[t.globals.maxValsInArrayIndex].length; i++) {
        for (var r = 0, s = 0; s < t.globals.series.length; s++) t.globals.series[s][i] !== void 0 && e.indexOf(s) === -1 && (r += t.globals.series[s][i]);
        a.push(r);
      }
      return a;
    } }, { key: "getSeriesTotalByIndex", value: function() {
      var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : null;
      return e === null ? this.w.config.series.reduce(function(t, a) {
        return t + a;
      }, 0) : this.w.globals.series[e].reduce(function(t, a) {
        return t + a;
      }, 0);
    } }, { key: "getStackedSeriesTotalsByGroups", value: function() {
      var e = this, t = this.w, a = [];
      return t.globals.seriesGroups.forEach(function(i) {
        var r = [];
        t.config.series.forEach(function(o, n) {
          i.indexOf(t.globals.seriesNames[n]) > -1 && r.push(n);
        });
        var s = t.globals.series.map(function(o, n) {
          return r.indexOf(n) === -1 ? n : -1;
        }).filter(function(o) {
          return o !== -1;
        });
        a.push(e.getStackedSeriesTotals(s));
      }), a;
    } }, { key: "setSeriesYAxisMappings", value: function() {
      var e = this.w.globals, t = this.w.config, a = [], i = [], r = [], s = e.series.length > t.yaxis.length || t.yaxis.some(function(c) {
        return Array.isArray(c.seriesName);
      });
      t.series.forEach(function(c, u) {
        r.push(u), i.push(null);
      }), t.yaxis.forEach(function(c, u) {
        a[u] = [];
      });
      var o = [];
      t.yaxis.forEach(function(c, u) {
        var p = !1;
        if (c.seriesName) {
          var m = [];
          Array.isArray(c.seriesName) ? m = c.seriesName : m.push(c.seriesName), m.forEach(function(f) {
            t.series.forEach(function(b, v) {
              if (b.name === f) {
                var w = v;
                u === v || s ? !s || r.indexOf(v) > -1 ? a[u].push([u, v]) : console.warn("Series '" + b.name + "' referenced more than once in what looks like the new style. That is, when using either seriesName: [], or when there are more series than yaxes.") : (a[v].push([v, u]), w = u), p = !0, (w = r.indexOf(w)) !== -1 && r.splice(w, 1);
              }
            });
          });
        }
        p || o.push(u);
      }), a = a.map(function(c, u) {
        var p = [];
        return c.forEach(function(m) {
          i[m[1]] = m[0], p.push(m[1]);
        }), p;
      });
      for (var n = t.yaxis.length - 1, h = 0; h < o.length && (n = o[h], a[n] = [], r); h++) {
        var d = r[0];
        r.shift(), a[n].push(d), i[d] = n;
      }
      r.forEach(function(c) {
        a[n].push(c), i[c] = n;
      }), e.seriesYAxisMap = a.map(function(c) {
        return c;
      }), e.seriesYAxisReverseMap = i.map(function(c) {
        return c;
      }), e.seriesYAxisMap.forEach(function(c, u) {
        c.forEach(function(p) {
          t.series[p] && t.series[p].group === void 0 && (t.series[p].group = "apexcharts-axis-".concat(u.toString()));
        });
      });
    } }, { key: "isSeriesNull", value: function() {
      var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : null;
      return (e === null ? this.w.config.series.filter(function(t) {
        return t !== null;
      }) : this.w.config.series[e].data.filter(function(t) {
        return t !== null;
      })).length === 0;
    } }, { key: "seriesHaveSameValues", value: function(e) {
      return this.w.globals.series[e].every(function(t, a, i) {
        return t === i[0];
      });
    } }, { key: "getCategoryLabels", value: function(e) {
      var t = this.w, a = e.slice();
      return t.config.xaxis.convertedCatToNumeric && (a = e.map(function(i, r) {
        return t.config.xaxis.labels.formatter(i - t.globals.minX + 1);
      })), a;
    } }, { key: "getLargestSeries", value: function() {
      var e = this.w;
      e.globals.maxValsInArrayIndex = e.globals.series.map(function(t) {
        return t.length;
      }).indexOf(Math.max.apply(Math, e.globals.series.map(function(t) {
        return t.length;
      })));
    } }, { key: "getLargestMarkerSize", value: function() {
      var e = this.w, t = 0;
      return e.globals.markers.size.forEach(function(a) {
        t = Math.max(t, a);
      }), e.config.markers.discrete && e.config.markers.discrete.length && e.config.markers.discrete.forEach(function(a) {
        t = Math.max(t, a.size);
      }), t > 0 && (e.config.markers.hover.size > 0 ? t = e.config.markers.hover.size : t += e.config.markers.hover.sizeOffset), e.globals.markers.largestSize = t, t;
    } }, { key: "getSeriesTotals", value: function() {
      var e = this.w;
      e.globals.seriesTotals = e.globals.series.map(function(t, a) {
        var i = 0;
        if (Array.isArray(t)) for (var r = 0; r < t.length; r++) i += t[r];
        else i += t;
        return i;
      });
    } }, { key: "getSeriesTotalsXRange", value: function(e, t) {
      var a = this.w;
      return a.globals.series.map(function(i, r) {
        for (var s = 0, o = 0; o < i.length; o++) a.globals.seriesX[r][o] > e && a.globals.seriesX[r][o] < t && (s += i[o]);
        return s;
      });
    } }, { key: "getPercentSeries", value: function() {
      var e = this.w;
      e.globals.seriesPercent = e.globals.series.map(function(t, a) {
        var i = [];
        if (Array.isArray(t)) for (var r = 0; r < t.length; r++) {
          var s = e.globals.stackedSeriesTotals[r], o = 0;
          s && (o = 100 * t[r] / s), i.push(o);
        }
        else {
          var n = 100 * t / e.globals.seriesTotals.reduce(function(h, d) {
            return h + d;
          }, 0);
          i.push(n);
        }
        return i;
      });
    } }, { key: "getCalculatedRatios", value: function() {
      var e, t, a, i = this, r = this.w, s = r.globals, o = [], n = 0, h = [], d = 0.1, c = 0;
      if (s.yRange = [], s.isMultipleYAxis) for (var u = 0; u < s.minYArr.length; u++) s.yRange.push(Math.abs(s.minYArr[u] - s.maxYArr[u])), h.push(0);
      else s.yRange.push(Math.abs(s.minY - s.maxY));
      s.xRange = Math.abs(s.maxX - s.minX), s.zRange = Math.abs(s.maxZ - s.minZ);
      for (var p = 0; p < s.yRange.length; p++) o.push(s.yRange[p] / s.gridHeight);
      if (t = s.xRange / s.gridWidth, e = s.yRange / s.gridWidth, a = s.xRange / s.gridHeight, (n = s.zRange / s.gridHeight * 16) || (n = 1), s.minY !== Number.MIN_VALUE && Math.abs(s.minY) !== 0 && (s.hasNegs = !0), r.globals.seriesYAxisReverseMap.length > 0) {
        var m = function(b, v) {
          var w = r.config.yaxis[r.globals.seriesYAxisReverseMap[v]], l = b < 0 ? -1 : 1;
          return b = Math.abs(b), w.logarithmic && (b = i.getBaseLog(w.logBase, b)), -l * b / o[v];
        };
        if (s.isMultipleYAxis) {
          h = [];
          for (var f = 0; f < o.length; f++) h.push(m(s.minYArr[f], f));
        } else (h = []).push(m(s.minY, 0)), s.minY !== Number.MIN_VALUE && Math.abs(s.minY) !== 0 && (d = -s.minY / e, c = s.minX / t);
      } else (h = []).push(0), d = 0, c = 0;
      return { yRatio: o, invertedYRatio: e, zRatio: n, xRatio: t, invertedXRatio: a, baseLineInvertedY: d, baseLineY: h, baseLineX: c };
    } }, { key: "getLogSeries", value: function(e) {
      var t = this, a = this.w;
      return a.globals.seriesLog = e.map(function(i, r) {
        var s = a.globals.seriesYAxisReverseMap[r];
        return a.config.yaxis[s] && a.config.yaxis[s].logarithmic ? i.map(function(o) {
          return o === null ? null : t.getLogVal(a.config.yaxis[s].logBase, o, r);
        }) : i;
      }), a.globals.invalidLogScale ? e : a.globals.seriesLog;
    } }, { key: "getBaseLog", value: function(e, t) {
      return Math.log(t) / Math.log(e);
    } }, { key: "getLogVal", value: function(e, t, a) {
      if (t <= 0) return 0;
      var i = this.w, r = i.globals.minYArr[a] === 0 ? -1 : this.getBaseLog(e, i.globals.minYArr[a]), s = (i.globals.maxYArr[a] === 0 ? 0 : this.getBaseLog(e, i.globals.maxYArr[a])) - r;
      return t < 1 ? t / s : (this.getBaseLog(e, t) - r) / s;
    } }, { key: "getLogYRatios", value: function(e) {
      var t = this, a = this.w, i = this.w.globals;
      return i.yLogRatio = e.slice(), i.logYRange = i.yRange.map(function(r, s) {
        var o = a.globals.seriesYAxisReverseMap[s];
        if (a.config.yaxis[o] && t.w.config.yaxis[o].logarithmic) {
          var n, h = -Number.MAX_VALUE, d = Number.MIN_VALUE;
          return i.seriesLog.forEach(function(c, u) {
            c.forEach(function(p) {
              a.config.yaxis[u] && a.config.yaxis[u].logarithmic && (h = Math.max(p, h), d = Math.min(p, d));
            });
          }), n = Math.pow(i.yRange[s], Math.abs(d - h) / i.yRange[s]), i.yLogRatio[s] = n / i.gridHeight, n;
        }
      }), i.invalidLogScale ? e.slice() : i.yLogRatio;
    } }, { key: "drawSeriesByGroup", value: function(e, t, a, i) {
      var r = this.w, s = [];
      return e.series.length > 0 && t.forEach(function(o) {
        var n = [], h = [];
        e.i.forEach(function(d, c) {
          r.config.series[d].group === o && (n.push(e.series[c]), h.push(d));
        }), n.length > 0 && s.push(i.draw(n, a, h));
      }), s;
    } }], [{ key: "checkComboSeries", value: function(e, t) {
      var a = !1, i = 0, r = 0;
      return t === void 0 && (t = "line"), e.length && e[0].type !== void 0 && e.forEach(function(s) {
        s.type !== "bar" && s.type !== "column" && s.type !== "candlestick" && s.type !== "boxPlot" || i++, s.type !== void 0 && s.type !== t && r++;
      }), r > 0 && (a = !0), { comboBarCount: i, comboCharts: a };
    } }, { key: "extendArrayProps", value: function(e, t, a) {
      var i, r, s, o, n, h;
      return (i = t) !== null && i !== void 0 && i.yaxis && (t = e.extendYAxis(t, a)), (r = t) !== null && r !== void 0 && r.annotations && (t.annotations.yaxis && (t = e.extendYAxisAnnotations(t)), (s = t) !== null && s !== void 0 && (o = s.annotations) !== null && o !== void 0 && o.xaxis && (t = e.extendXAxisAnnotations(t)), (n = t) !== null && n !== void 0 && (h = n.annotations) !== null && h !== void 0 && h.points && (t = e.extendPointAnnotations(t))), t;
    } }]), y;
  }(), Ze = function() {
    function y(e) {
      T(this, y), this.w = e.w, this.annoCtx = e;
    }
    return E(y, [{ key: "setOrientations", value: function(e) {
      var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null, a = this.w;
      if (e.label.orientation === "vertical") {
        var i = t !== null ? t : 0, r = a.globals.dom.baseEl.querySelector(".apexcharts-xaxis-annotations .apexcharts-xaxis-annotation-label[rel='".concat(i, "']"));
        if (r !== null) {
          var s = r.getBoundingClientRect();
          r.setAttribute("x", parseFloat(r.getAttribute("x")) - s.height + 4);
          var o = e.label.position === "top" ? s.width : -s.width;
          r.setAttribute("y", parseFloat(r.getAttribute("y")) + o);
          var n = this.annoCtx.graphics.rotateAroundCenter(r), h = n.x, d = n.y;
          r.setAttribute("transform", "rotate(-90 ".concat(h, " ").concat(d, ")"));
        }
      }
    } }, { key: "addBackgroundToAnno", value: function(e, t) {
      var a = this.w;
      if (!e || !t.label.text || !String(t.label.text).trim()) return null;
      var i = a.globals.dom.baseEl.querySelector(".apexcharts-grid").getBoundingClientRect(), r = e.getBoundingClientRect(), s = t.label.style.padding, o = s.left, n = s.right, h = s.top, d = s.bottom;
      if (t.label.orientation === "vertical") {
        var c = [o, n, h, d];
        h = c[0], d = c[1], o = c[2], n = c[3];
      }
      var u = r.left - i.left - o, p = r.top - i.top - h, m = this.annoCtx.graphics.drawRect(u - a.globals.barPadForNumericAxis, p, r.width + o + n, r.height + h + d, t.label.borderRadius, t.label.style.background, 1, t.label.borderWidth, t.label.borderColor, 0);
      return t.id && m.node.classList.add(t.id), m;
    } }, { key: "annotationsBackground", value: function() {
      var e = this, t = this.w, a = function(i, r, s) {
        var o = t.globals.dom.baseEl.querySelector(".apexcharts-".concat(s, "-annotations .apexcharts-").concat(s, "-annotation-label[rel='").concat(r, "']"));
        if (o) {
          var n = o.parentNode, h = e.addBackgroundToAnno(o, i);
          h && (n.insertBefore(h.node, o), i.label.mouseEnter && h.node.addEventListener("mouseenter", i.label.mouseEnter.bind(e, i)), i.label.mouseLeave && h.node.addEventListener("mouseleave", i.label.mouseLeave.bind(e, i)), i.label.click && h.node.addEventListener("click", i.label.click.bind(e, i)));
        }
      };
      t.config.annotations.xaxis.forEach(function(i, r) {
        return a(i, r, "xaxis");
      }), t.config.annotations.yaxis.forEach(function(i, r) {
        return a(i, r, "yaxis");
      }), t.config.annotations.points.forEach(function(i, r) {
        return a(i, r, "point");
      });
    } }, { key: "getY1Y2", value: function(e, t) {
      var a, i = this.w, r = e === "y1" ? t.y : t.y2, s = !1;
      if (this.annoCtx.invertAxis) {
        var o = i.config.xaxis.convertedCatToNumeric ? i.globals.categoryLabels : i.globals.labels, n = o.indexOf(r), h = i.globals.dom.baseEl.querySelector(".apexcharts-yaxis-texts-g text:nth-child(".concat(n + 1, ")"));
        a = h ? parseFloat(h.getAttribute("y")) : (i.globals.gridHeight / o.length - 1) * (n + 1) - i.globals.barHeight, t.seriesIndex !== void 0 && i.globals.barHeight && (a -= i.globals.barHeight / 2 * (i.globals.series.length - 1) - i.globals.barHeight * t.seriesIndex);
      } else {
        var d, c = i.globals.seriesYAxisMap[t.yAxisIndex][0], u = i.config.yaxis[t.yAxisIndex].logarithmic ? new Te(this.annoCtx.ctx).getLogVal(i.config.yaxis[t.yAxisIndex].logBase, r, c) / i.globals.yLogRatio[c] : (r - i.globals.minYArr[c]) / (i.globals.yRange[c] / i.globals.gridHeight);
        a = i.globals.gridHeight - Math.min(Math.max(u, 0), i.globals.gridHeight), s = u > i.globals.gridHeight || u < 0, !t.marker || t.y !== void 0 && t.y !== null || (a = 0), (d = i.config.yaxis[t.yAxisIndex]) !== null && d !== void 0 && d.reversed && (a = u);
      }
      return typeof r == "string" && r.includes("px") && (a = parseFloat(r)), { yP: a, clipped: s };
    } }, { key: "getX1X2", value: function(e, t) {
      var a = this.w, i = e === "x1" ? t.x : t.x2, r = this.annoCtx.invertAxis ? a.globals.minY : a.globals.minX, s = this.annoCtx.invertAxis ? a.globals.maxY : a.globals.maxX, o = this.annoCtx.invertAxis ? a.globals.yRange[0] : a.globals.xRange, n = !1, h = this.annoCtx.inversedReversedAxis ? (s - i) / (o / a.globals.gridWidth) : (i - r) / (o / a.globals.gridWidth);
      return a.config.xaxis.type !== "category" && !a.config.xaxis.convertedCatToNumeric || this.annoCtx.invertAxis || a.globals.dataFormatXNumeric || a.config.chart.sparkline.enabled || (h = this.getStringX(i)), typeof i == "string" && i.includes("px") && (h = parseFloat(i)), i == null && t.marker && (h = a.globals.gridWidth), t.seriesIndex !== void 0 && a.globals.barWidth && !this.annoCtx.invertAxis && (h -= a.globals.barWidth / 2 * (a.globals.series.length - 1) - a.globals.barWidth * t.seriesIndex), h > a.globals.gridWidth ? (h = a.globals.gridWidth, n = !0) : h < 0 && (h = 0, n = !0), { x: h, clipped: n };
    } }, { key: "getStringX", value: function(e) {
      var t = this.w, a = e;
      t.config.xaxis.convertedCatToNumeric && t.globals.categoryLabels.length && (e = t.globals.categoryLabels.indexOf(e) + 1);
      var i = t.globals.labels.map(function(s) {
        return Array.isArray(s) ? s.join(" ") : s;
      }).indexOf(e), r = t.globals.dom.baseEl.querySelector(".apexcharts-xaxis-texts-g text:nth-child(".concat(i + 1, ")"));
      return r && (a = parseFloat(r.getAttribute("x"))), a;
    } }]), y;
  }(), pe = function() {
    function y(e) {
      T(this, y), this.w = e.w, this.annoCtx = e, this.invertAxis = this.annoCtx.invertAxis, this.helpers = new Ze(this.annoCtx);
    }
    return E(y, [{ key: "addXaxisAnnotation", value: function(e, t, a) {
      var i, r = this.w, s = this.helpers.getX1X2("x1", e), o = s.x, n = s.clipped, h = !0, d = e.label.text, c = e.strokeDashArray;
      if (z.isNumber(o)) {
        if (e.x2 === null || e.x2 === void 0) {
          if (!n) {
            var u = this.annoCtx.graphics.drawLine(o + e.offsetX, 0 + e.offsetY, o + e.offsetX, r.globals.gridHeight + e.offsetY, e.borderColor, c, e.borderWidth);
            t.appendChild(u.node), e.id && u.node.classList.add(e.id);
          }
        } else {
          var p = this.helpers.getX1X2("x2", e);
          if (i = p.x, h = p.clipped, !n || !h) {
            if (i < o) {
              var m = o;
              o = i, i = m;
            }
            var f = this.annoCtx.graphics.drawRect(o + e.offsetX, 0 + e.offsetY, i - o, r.globals.gridHeight + e.offsetY, 0, e.fillColor, e.opacity, 1, e.borderColor, c);
            f.node.classList.add("apexcharts-annotation-rect"), f.attr("clip-path", "url(#gridRectMask".concat(r.globals.cuid, ")")), t.appendChild(f.node), e.id && f.node.classList.add(e.id);
          }
        }
        if (!n || !h) {
          var b = this.annoCtx.graphics.getTextRects(d, parseFloat(e.label.style.fontSize)), v = e.label.position === "top" ? 4 : e.label.position === "center" ? r.globals.gridHeight / 2 + (e.label.orientation === "vertical" ? b.width / 2 : 0) : r.globals.gridHeight, w = this.annoCtx.graphics.drawText({ x: o + e.label.offsetX, y: v + e.label.offsetY - (e.label.orientation === "vertical" ? e.label.position === "top" ? b.width / 2 - 12 : -b.width / 2 : 0), text: d, textAnchor: e.label.textAnchor, fontSize: e.label.style.fontSize, fontFamily: e.label.style.fontFamily, fontWeight: e.label.style.fontWeight, foreColor: e.label.style.color, cssClass: "apexcharts-xaxis-annotation-label ".concat(e.label.style.cssClass, " ").concat(e.id ? e.id : "") });
          w.attr({ rel: a }), t.appendChild(w.node), this.annoCtx.helpers.setOrientations(e, a);
        }
      }
    } }, { key: "drawXAxisAnnotations", value: function() {
      var e = this, t = this.w, a = this.annoCtx.graphics.group({ class: "apexcharts-xaxis-annotations" });
      return t.config.annotations.xaxis.map(function(i, r) {
        e.addXaxisAnnotation(i, a.node, r);
      }), a;
    } }]), y;
  }(), de = function() {
    function y(e) {
      T(this, y), this.ctx = e, this.w = e.w, this.months31 = [1, 3, 5, 7, 8, 10, 12], this.months30 = [2, 4, 6, 9, 11], this.daysCntOfYear = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334];
    }
    return E(y, [{ key: "isValidDate", value: function(e) {
      return typeof e != "number" && !isNaN(this.parseDate(e));
    } }, { key: "getTimeStamp", value: function(e) {
      return Date.parse(e) ? this.w.config.xaxis.labels.datetimeUTC ? new Date(new Date(e).toISOString().substr(0, 25)).getTime() : new Date(e).getTime() : e;
    } }, { key: "getDate", value: function(e) {
      return this.w.config.xaxis.labels.datetimeUTC ? new Date(new Date(e).toUTCString()) : new Date(e);
    } }, { key: "parseDate", value: function(e) {
      var t = Date.parse(e);
      if (!isNaN(t)) return this.getTimeStamp(e);
      var a = Date.parse(e.replace(/-/g, "/").replace(/[a-z]+/gi, " "));
      return a = this.getTimeStamp(a);
    } }, { key: "parseDateWithTimezone", value: function(e) {
      return Date.parse(e.replace(/-/g, "/").replace(/[a-z]+/gi, " "));
    } }, { key: "formatDate", value: function(e, t) {
      var a = this.w.globals.locale, i = this.w.config.xaxis.labels.datetimeUTC, r = ["\0"].concat(K(a.months)), s = [""].concat(K(a.shortMonths)), o = [""].concat(K(a.days)), n = [""].concat(K(a.shortDays));
      function h(A, L) {
        var I = A + "";
        for (L = L || 2; I.length < L; ) I = "0" + I;
        return I;
      }
      var d = i ? e.getUTCFullYear() : e.getFullYear();
      t = (t = (t = t.replace(/(^|[^\\])yyyy+/g, "$1" + d)).replace(/(^|[^\\])yy/g, "$1" + d.toString().substr(2, 2))).replace(/(^|[^\\])y/g, "$1" + d);
      var c = (i ? e.getUTCMonth() : e.getMonth()) + 1;
      t = (t = (t = (t = t.replace(/(^|[^\\])MMMM+/g, "$1" + r[0])).replace(/(^|[^\\])MMM/g, "$1" + s[0])).replace(/(^|[^\\])MM/g, "$1" + h(c))).replace(/(^|[^\\])M/g, "$1" + c);
      var u = i ? e.getUTCDate() : e.getDate();
      t = (t = (t = (t = t.replace(/(^|[^\\])dddd+/g, "$1" + o[0])).replace(/(^|[^\\])ddd/g, "$1" + n[0])).replace(/(^|[^\\])dd/g, "$1" + h(u))).replace(/(^|[^\\])d/g, "$1" + u);
      var p = i ? e.getUTCHours() : e.getHours(), m = p > 12 ? p - 12 : p === 0 ? 12 : p;
      t = (t = (t = (t = t.replace(/(^|[^\\])HH+/g, "$1" + h(p))).replace(/(^|[^\\])H/g, "$1" + p)).replace(/(^|[^\\])hh+/g, "$1" + h(m))).replace(/(^|[^\\])h/g, "$1" + m);
      var f = i ? e.getUTCMinutes() : e.getMinutes();
      t = (t = t.replace(/(^|[^\\])mm+/g, "$1" + h(f))).replace(/(^|[^\\])m/g, "$1" + f);
      var b = i ? e.getUTCSeconds() : e.getSeconds();
      t = (t = t.replace(/(^|[^\\])ss+/g, "$1" + h(b))).replace(/(^|[^\\])s/g, "$1" + b);
      var v = i ? e.getUTCMilliseconds() : e.getMilliseconds();
      t = t.replace(/(^|[^\\])fff+/g, "$1" + h(v, 3)), v = Math.round(v / 10), t = t.replace(/(^|[^\\])ff/g, "$1" + h(v)), v = Math.round(v / 10);
      var w = p < 12 ? "AM" : "PM";
      t = (t = (t = t.replace(/(^|[^\\])f/g, "$1" + v)).replace(/(^|[^\\])TT+/g, "$1" + w)).replace(/(^|[^\\])T/g, "$1" + w.charAt(0));
      var l = w.toLowerCase();
      t = (t = t.replace(/(^|[^\\])tt+/g, "$1" + l)).replace(/(^|[^\\])t/g, "$1" + l.charAt(0));
      var g = -e.getTimezoneOffset(), x = i || !g ? "Z" : g > 0 ? "+" : "-";
      if (!i) {
        var k = (g = Math.abs(g)) % 60;
        x += h(Math.floor(g / 60)) + ":" + h(k);
      }
      t = t.replace(/(^|[^\\])K/g, "$1" + x);
      var S = (i ? e.getUTCDay() : e.getDay()) + 1;
      return t = (t = (t = (t = (t = t.replace(new RegExp(o[0], "g"), o[S])).replace(new RegExp(n[0], "g"), n[S])).replace(new RegExp(r[0], "g"), r[c])).replace(new RegExp(s[0], "g"), s[c])).replace(/\\(.)/g, "$1");
    } }, { key: "getTimeUnitsfromTimestamp", value: function(e, t, a) {
      var i = this.w;
      i.config.xaxis.min !== void 0 && (e = i.config.xaxis.min), i.config.xaxis.max !== void 0 && (t = i.config.xaxis.max);
      var r = this.getDate(e), s = this.getDate(t), o = this.formatDate(r, "yyyy MM dd HH mm ss fff").split(" "), n = this.formatDate(s, "yyyy MM dd HH mm ss fff").split(" ");
      return { minMillisecond: parseInt(o[6], 10), maxMillisecond: parseInt(n[6], 10), minSecond: parseInt(o[5], 10), maxSecond: parseInt(n[5], 10), minMinute: parseInt(o[4], 10), maxMinute: parseInt(n[4], 10), minHour: parseInt(o[3], 10), maxHour: parseInt(n[3], 10), minDate: parseInt(o[2], 10), maxDate: parseInt(n[2], 10), minMonth: parseInt(o[1], 10) - 1, maxMonth: parseInt(n[1], 10) - 1, minYear: parseInt(o[0], 10), maxYear: parseInt(n[0], 10) };
    } }, { key: "isLeapYear", value: function(e) {
      return e % 4 == 0 && e % 100 != 0 || e % 400 == 0;
    } }, { key: "calculcateLastDaysOfMonth", value: function(e, t, a) {
      return this.determineDaysOfMonths(e, t) - a;
    } }, { key: "determineDaysOfYear", value: function(e) {
      var t = 365;
      return this.isLeapYear(e) && (t = 366), t;
    } }, { key: "determineRemainingDaysOfYear", value: function(e, t, a) {
      var i = this.daysCntOfYear[t] + a;
      return t > 1 && this.isLeapYear() && i++, i;
    } }, { key: "determineDaysOfMonths", value: function(e, t) {
      var a = 30;
      switch (e = z.monthMod(e), !0) {
        case this.months30.indexOf(e) > -1:
          e === 2 && (a = this.isLeapYear(t) ? 29 : 28);
          break;
        case this.months31.indexOf(e) > -1:
        default:
          a = 31;
      }
      return a;
    } }]), y;
  }(), He = function() {
    function y(e) {
      T(this, y), this.ctx = e, this.w = e.w, this.tooltipKeyFormat = "dd MMM";
    }
    return E(y, [{ key: "xLabelFormat", value: function(e, t, a, i) {
      var r = this.w;
      if (r.config.xaxis.type === "datetime" && r.config.xaxis.labels.formatter === void 0 && r.config.tooltip.x.formatter === void 0) {
        var s = new de(this.ctx);
        return s.formatDate(s.getDate(t), r.config.tooltip.x.format);
      }
      return e(t, a, i);
    } }, { key: "defaultGeneralFormatter", value: function(e) {
      return Array.isArray(e) ? e.map(function(t) {
        return t;
      }) : e;
    } }, { key: "defaultYFormatter", value: function(e, t, a) {
      var i = this.w;
      if (z.isNumber(e)) if (i.globals.yValueDecimal !== 0) e = e.toFixed(t.decimalsInFloat !== void 0 ? t.decimalsInFloat : i.globals.yValueDecimal);
      else {
        var r = e.toFixed(0);
        e = e == r ? r : e.toFixed(1);
      }
      return e;
    } }, { key: "setLabelFormatters", value: function() {
      var e = this, t = this.w;
      return t.globals.xaxisTooltipFormatter = function(a) {
        return e.defaultGeneralFormatter(a);
      }, t.globals.ttKeyFormatter = function(a) {
        return e.defaultGeneralFormatter(a);
      }, t.globals.ttZFormatter = function(a) {
        return a;
      }, t.globals.legendFormatter = function(a) {
        return e.defaultGeneralFormatter(a);
      }, t.config.xaxis.labels.formatter !== void 0 ? t.globals.xLabelFormatter = t.config.xaxis.labels.formatter : t.globals.xLabelFormatter = function(a) {
        if (z.isNumber(a)) {
          if (!t.config.xaxis.convertedCatToNumeric && t.config.xaxis.type === "numeric") {
            if (z.isNumber(t.config.xaxis.decimalsInFloat)) return a.toFixed(t.config.xaxis.decimalsInFloat);
            var i = t.globals.maxX - t.globals.minX;
            return i > 0 && i < 100 ? a.toFixed(1) : a.toFixed(0);
          }
          return t.globals.isBarHorizontal && t.globals.maxY - t.globals.minYArr < 4 ? a.toFixed(1) : a.toFixed(0);
        }
        return a;
      }, typeof t.config.tooltip.x.formatter == "function" ? t.globals.ttKeyFormatter = t.config.tooltip.x.formatter : t.globals.ttKeyFormatter = t.globals.xLabelFormatter, typeof t.config.xaxis.tooltip.formatter == "function" && (t.globals.xaxisTooltipFormatter = t.config.xaxis.tooltip.formatter), (Array.isArray(t.config.tooltip.y) || t.config.tooltip.y.formatter !== void 0) && (t.globals.ttVal = t.config.tooltip.y), t.config.tooltip.z.formatter !== void 0 && (t.globals.ttZFormatter = t.config.tooltip.z.formatter), t.config.legend.formatter !== void 0 && (t.globals.legendFormatter = t.config.legend.formatter), t.config.yaxis.forEach(function(a, i) {
        a.labels.formatter !== void 0 ? t.globals.yLabelFormatters[i] = a.labels.formatter : t.globals.yLabelFormatters[i] = function(r) {
          return t.globals.xyCharts ? Array.isArray(r) ? r.map(function(s) {
            return e.defaultYFormatter(s, a, i);
          }) : e.defaultYFormatter(r, a, i) : r;
        };
      }), t.globals;
    } }, { key: "heatmapLabelFormatters", value: function() {
      var e = this.w;
      if (e.config.chart.type === "heatmap") {
        e.globals.yAxisScale[0].result = e.globals.seriesNames.slice();
        var t = e.globals.seriesNames.reduce(function(a, i) {
          return a.length > i.length ? a : i;
        }, 0);
        e.globals.yAxisScale[0].niceMax = t, e.globals.yAxisScale[0].niceMin = t;
      }
    } }]), y;
  }(), Le = function() {
    function y(e) {
      T(this, y), this.ctx = e, this.w = e.w;
    }
    return E(y, [{ key: "getLabel", value: function(e, t, a, i) {
      var r = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : [], s = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : "12px", o = !(arguments.length > 6 && arguments[6] !== void 0) || arguments[6], n = this.w, h = e[i] === void 0 ? "" : e[i], d = h, c = n.globals.xLabelFormatter, u = n.config.xaxis.labels.formatter, p = !1, m = new He(this.ctx), f = h;
      o && (d = m.xLabelFormat(c, h, f, { i, dateFormatter: new de(this.ctx).formatDate, w: n }), u !== void 0 && (d = u(h, e[i], { i, dateFormatter: new de(this.ctx).formatDate, w: n })));
      var b, v;
      t.length > 0 ? (b = t[i].unit, v = null, t.forEach(function(x) {
        x.unit === "month" ? v = "year" : x.unit === "day" ? v = "month" : x.unit === "hour" ? v = "day" : x.unit === "minute" && (v = "hour");
      }), p = v === b, a = t[i].position, d = t[i].value) : n.config.xaxis.type === "datetime" && u === void 0 && (d = ""), d === void 0 && (d = ""), d = Array.isArray(d) ? d : d.toString();
      var w = new X(this.ctx), l = {};
      l = n.globals.rotateXLabels && o ? w.getTextRects(d, parseInt(s, 10), null, "rotate(".concat(n.config.xaxis.labels.rotate, " 0 0)"), !1) : w.getTextRects(d, parseInt(s, 10));
      var g = !n.config.xaxis.labels.showDuplicates && this.ctx.timeScale;
      return !Array.isArray(d) && (String(d) === "NaN" || r.indexOf(d) >= 0 && g) && (d = ""), { x: a, text: d, textRect: l, isBold: p };
    } }, { key: "checkLabelBasedOnTickamount", value: function(e, t, a) {
      var i = this.w, r = i.config.xaxis.tickAmount;
      return r === "dataPoints" && (r = Math.round(i.globals.gridWidth / 120)), r > a || e % Math.round(a / (r + 1)) == 0 || (t.text = ""), t;
    } }, { key: "checkForOverflowingLabels", value: function(e, t, a, i, r) {
      var s = this.w;
      if (e === 0 && s.globals.skipFirstTimelinelabel && (t.text = ""), e === a - 1 && s.globals.skipLastTimelinelabel && (t.text = ""), s.config.xaxis.labels.hideOverlappingLabels && i.length > 0) {
        var o = r[r.length - 1];
        t.x < o.textRect.width / (s.globals.rotateXLabels ? Math.abs(s.config.xaxis.labels.rotate) / 12 : 1.01) + o.x && (t.text = "");
      }
      return t;
    } }, { key: "checkForReversedLabels", value: function(e, t) {
      var a = this.w;
      return a.config.yaxis[e] && a.config.yaxis[e].reversed && t.reverse(), t;
    } }, { key: "yAxisAllSeriesCollapsed", value: function(e) {
      var t = this.w.globals;
      return !t.seriesYAxisMap[e].some(function(a) {
        return t.collapsedSeriesIndices.indexOf(a) === -1;
      });
    } }, { key: "translateYAxisIndex", value: function(e) {
      var t = this.w, a = t.globals, i = t.config.yaxis;
      return a.series.length > i.length || i.some(function(r) {
        return Array.isArray(r.seriesName);
      }) ? e : a.seriesYAxisReverseMap[e];
    } }, { key: "isYAxisHidden", value: function(e) {
      var t = this.w, a = t.config.yaxis[e];
      if (!a.show || this.yAxisAllSeriesCollapsed(e)) return !0;
      if (!a.showForNullSeries) {
        var i = t.globals.seriesYAxisMap[e], r = new Te(this.ctx);
        return i.every(function(s) {
          return r.isSeriesNull(s);
        });
      }
      return !1;
    } }, { key: "getYAxisForeColor", value: function(e, t) {
      var a = this.w;
      return Array.isArray(e) && a.globals.yAxisScale[t] && this.ctx.theme.pushExtraColors(e, a.globals.yAxisScale[t].result.length, !1), e;
    } }, { key: "drawYAxisTicks", value: function(e, t, a, i, r, s, o) {
      var n = this.w, h = new X(this.ctx), d = n.globals.translateY + n.config.yaxis[r].labels.offsetY;
      if (n.globals.isBarHorizontal ? d = 0 : n.config.chart.type === "heatmap" && (d += s / 2), i.show && t > 0) {
        n.config.yaxis[r].opposite === !0 && (e += i.width);
        for (var c = t; c >= 0; c--) {
          var u = h.drawLine(e + a.offsetX - i.width + i.offsetX, d + i.offsetY, e + a.offsetX + i.offsetX, d + i.offsetY, i.color);
          o.add(u), d += s;
        }
      }
    } }]), y;
  }(), dt = function() {
    function y(e) {
      T(this, y), this.w = e.w, this.annoCtx = e, this.helpers = new Ze(this.annoCtx), this.axesUtils = new Le(this.annoCtx);
    }
    return E(y, [{ key: "addYaxisAnnotation", value: function(e, t, a) {
      var i, r = this.w, s = e.strokeDashArray, o = this.helpers.getY1Y2("y1", e), n = o.yP, h = o.clipped, d = !0, c = !1, u = e.label.text;
      if (e.y2 === null || e.y2 === void 0) {
        if (!h) {
          c = !0;
          var p = this.annoCtx.graphics.drawLine(0 + e.offsetX, n + e.offsetY, this._getYAxisAnnotationWidth(e), n + e.offsetY, e.borderColor, s, e.borderWidth);
          t.appendChild(p.node), e.id && p.node.classList.add(e.id);
        }
      } else {
        if (i = (o = this.helpers.getY1Y2("y2", e)).yP, d = o.clipped, i > n) {
          var m = n;
          n = i, i = m;
        }
        if (!h || !d) {
          c = !0;
          var f = this.annoCtx.graphics.drawRect(0 + e.offsetX, i + e.offsetY, this._getYAxisAnnotationWidth(e), n - i, 0, e.fillColor, e.opacity, 1, e.borderColor, s);
          f.node.classList.add("apexcharts-annotation-rect"), f.attr("clip-path", "url(#gridRectMask".concat(r.globals.cuid, ")")), t.appendChild(f.node), e.id && f.node.classList.add(e.id);
        }
      }
      if (c) {
        var b = e.label.position === "right" ? r.globals.gridWidth : e.label.position === "center" ? r.globals.gridWidth / 2 : 0, v = this.annoCtx.graphics.drawText({ x: b + e.label.offsetX, y: (i ?? n) + e.label.offsetY - 3, text: u, textAnchor: e.label.textAnchor, fontSize: e.label.style.fontSize, fontFamily: e.label.style.fontFamily, fontWeight: e.label.style.fontWeight, foreColor: e.label.style.color, cssClass: "apexcharts-yaxis-annotation-label ".concat(e.label.style.cssClass, " ").concat(e.id ? e.id : "") });
        v.attr({ rel: a }), t.appendChild(v.node);
      }
    } }, { key: "_getYAxisAnnotationWidth", value: function(e) {
      var t = this.w;
      return t.globals.gridWidth, (e.width.indexOf("%") > -1 ? t.globals.gridWidth * parseInt(e.width, 10) / 100 : parseInt(e.width, 10)) + e.offsetX;
    } }, { key: "drawYAxisAnnotations", value: function() {
      var e = this, t = this.w, a = this.annoCtx.graphics.group({ class: "apexcharts-yaxis-annotations" });
      return t.config.annotations.yaxis.forEach(function(i, r) {
        i.yAxisIndex = e.axesUtils.translateYAxisIndex(i.yAxisIndex), e.axesUtils.isYAxisHidden(i.yAxisIndex) && e.axesUtils.yAxisAllSeriesCollapsed(i.yAxisIndex) || e.addYaxisAnnotation(i, a.node, r);
      }), a;
    } }]), y;
  }(), Qe = function() {
    function y(e) {
      T(this, y), this.w = e.w, this.annoCtx = e, this.helpers = new Ze(this.annoCtx);
    }
    return E(y, [{ key: "addPointAnnotation", value: function(e, t, a) {
      if (!(this.w.globals.collapsedSeriesIndices.indexOf(e.seriesIndex) > -1)) {
        var i = this.helpers.getX1X2("x1", e), r = i.x, s = i.clipped, o = (i = this.helpers.getY1Y2("y1", e)).yP, n = i.clipped;
        if (z.isNumber(r) && !n && !s) {
          var h = { pSize: e.marker.size, pointStrokeWidth: e.marker.strokeWidth, pointFillColor: e.marker.fillColor, pointStrokeColor: e.marker.strokeColor, shape: e.marker.shape, pRadius: e.marker.radius, class: "apexcharts-point-annotation-marker ".concat(e.marker.cssClass, " ").concat(e.id ? e.id : "") }, d = this.annoCtx.graphics.drawMarker(r + e.marker.offsetX, o + e.marker.offsetY, h);
          t.appendChild(d.node);
          var c = e.label.text ? e.label.text : "", u = this.annoCtx.graphics.drawText({ x: r + e.label.offsetX, y: o + e.label.offsetY - e.marker.size - parseFloat(e.label.style.fontSize) / 1.6, text: c, textAnchor: e.label.textAnchor, fontSize: e.label.style.fontSize, fontFamily: e.label.style.fontFamily, fontWeight: e.label.style.fontWeight, foreColor: e.label.style.color, cssClass: "apexcharts-point-annotation-label ".concat(e.label.style.cssClass, " ").concat(e.id ? e.id : "") });
          if (u.attr({ rel: a }), t.appendChild(u.node), e.customSVG.SVG) {
            var p = this.annoCtx.graphics.group({ class: "apexcharts-point-annotations-custom-svg " + e.customSVG.cssClass });
            p.attr({ transform: "translate(".concat(r + e.customSVG.offsetX, ", ").concat(o + e.customSVG.offsetY, ")") }), p.node.innerHTML = e.customSVG.SVG, t.appendChild(p.node);
          }
          if (e.image.path) {
            var m = e.image.width ? e.image.width : 20, f = e.image.height ? e.image.height : 20;
            d = this.annoCtx.addImage({ x: r + e.image.offsetX - m / 2, y: o + e.image.offsetY - f / 2, width: m, height: f, path: e.image.path, appendTo: ".apexcharts-point-annotations" });
          }
          e.mouseEnter && d.node.addEventListener("mouseenter", e.mouseEnter.bind(this, e)), e.mouseLeave && d.node.addEventListener("mouseleave", e.mouseLeave.bind(this, e)), e.click && d.node.addEventListener("click", e.click.bind(this, e));
        }
      }
    } }, { key: "drawPointAnnotations", value: function() {
      var e = this, t = this.w, a = this.annoCtx.graphics.group({ class: "apexcharts-point-annotations" });
      return t.config.annotations.points.map(function(i, r) {
        e.addPointAnnotation(i, a.node, r);
      }), a;
    } }]), y;
  }(), nt = { name: "en", options: { months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"], shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], toolbar: { exportToSVG: "Download SVG", exportToPNG: "Download PNG", exportToCSV: "Download CSV", menu: "Menu", selection: "Selection", selectionZoom: "Selection Zoom", zoomIn: "Zoom In", zoomOut: "Zoom Out", pan: "Panning", reset: "Reset Zoom" } } }, Je = function() {
    function y() {
      T(this, y), this.yAxis = { show: !0, showAlways: !1, showForNullSeries: !0, seriesName: void 0, opposite: !1, reversed: !1, logarithmic: !1, logBase: 10, tickAmount: void 0, stepSize: void 0, forceNiceScale: !1, max: void 0, min: void 0, floating: !1, decimalsInFloat: void 0, labels: { show: !0, showDuplicates: !1, minWidth: 0, maxWidth: 160, offsetX: 0, offsetY: 0, align: void 0, rotate: 0, padding: 20, style: { colors: [], fontSize: "11px", fontWeight: 400, fontFamily: void 0, cssClass: "" }, formatter: void 0 }, axisBorder: { show: !1, color: "#e0e0e0", width: 1, offsetX: 0, offsetY: 0 }, axisTicks: { show: !1, color: "#e0e0e0", width: 6, offsetX: 0, offsetY: 0 }, title: { text: void 0, rotate: -90, offsetY: 0, offsetX: 0, style: { color: void 0, fontSize: "11px", fontWeight: 900, fontFamily: void 0, cssClass: "" } }, tooltip: { enabled: !1, offsetX: 0 }, crosshairs: { show: !0, position: "front", stroke: { color: "#b6b6b6", width: 1, dashArray: 0 } } }, this.pointAnnotation = { id: void 0, x: 0, y: null, yAxisIndex: 0, seriesIndex: void 0, mouseEnter: void 0, mouseLeave: void 0, click: void 0, marker: { size: 4, fillColor: "#fff", strokeWidth: 2, strokeColor: "#333", shape: "circle", offsetX: 0, offsetY: 0, cssClass: "" }, label: { borderColor: "#c2c2c2", borderWidth: 1, borderRadius: 2, text: void 0, textAnchor: "middle", offsetX: 0, offsetY: 0, mouseEnter: void 0, mouseLeave: void 0, click: void 0, style: { background: "#fff", color: void 0, fontSize: "11px", fontFamily: void 0, fontWeight: 400, cssClass: "", padding: { left: 5, right: 5, top: 2, bottom: 2 } } }, customSVG: { SVG: void 0, cssClass: void 0, offsetX: 0, offsetY: 0 }, image: { path: void 0, width: 20, height: 20, offsetX: 0, offsetY: 0 } }, this.yAxisAnnotation = { id: void 0, y: 0, y2: null, strokeDashArray: 1, fillColor: "#c2c2c2", borderColor: "#c2c2c2", borderWidth: 1, opacity: 0.3, offsetX: 0, offsetY: 0, width: "100%", yAxisIndex: 0, label: { borderColor: "#c2c2c2", borderWidth: 1, borderRadius: 2, text: void 0, textAnchor: "end", position: "right", offsetX: 0, offsetY: -3, mouseEnter: void 0, mouseLeave: void 0, click: void 0, style: { background: "#fff", color: void 0, fontSize: "11px", fontFamily: void 0, fontWeight: 400, cssClass: "", padding: { left: 5, right: 5, top: 2, bottom: 2 } } } }, this.xAxisAnnotation = { id: void 0, x: 0, x2: null, strokeDashArray: 1, fillColor: "#c2c2c2", borderColor: "#c2c2c2", borderWidth: 1, opacity: 0.3, offsetX: 0, offsetY: 0, label: { borderColor: "#c2c2c2", borderWidth: 1, borderRadius: 2, text: void 0, textAnchor: "middle", orientation: "vertical", position: "top", offsetX: 0, offsetY: 0, mouseEnter: void 0, mouseLeave: void 0, click: void 0, style: { background: "#fff", color: void 0, fontSize: "11px", fontFamily: void 0, fontWeight: 400, cssClass: "", padding: { left: 5, right: 5, top: 2, bottom: 2 } } } }, this.text = { x: 0, y: 0, text: "", textAnchor: "start", foreColor: void 0, fontSize: "13px", fontFamily: void 0, fontWeight: 400, appendTo: ".apexcharts-annotations", backgroundColor: "transparent", borderColor: "#c2c2c2", borderRadius: 0, borderWidth: 0, paddingLeft: 4, paddingRight: 4, paddingTop: 2, paddingBottom: 2 };
    }
    return E(y, [{ key: "init", value: function() {
      return { annotations: { yaxis: [this.yAxisAnnotation], xaxis: [this.xAxisAnnotation], points: [this.pointAnnotation], texts: [], images: [], shapes: [] }, chart: { animations: { enabled: !0, easing: "easeinout", speed: 800, animateGradually: { delay: 150, enabled: !0 }, dynamicAnimation: { enabled: !0, speed: 350 } }, background: "", locales: [nt], defaultLocale: "en", dropShadow: { enabled: !1, enabledOnSeries: void 0, top: 2, left: 2, blur: 4, color: "#000", opacity: 0.35 }, events: { animationEnd: void 0, beforeMount: void 0, mounted: void 0, updated: void 0, click: void 0, mouseMove: void 0, mouseLeave: void 0, xAxisLabelClick: void 0, legendClick: void 0, markerClick: void 0, selection: void 0, dataPointSelection: void 0, dataPointMouseEnter: void 0, dataPointMouseLeave: void 0, beforeZoom: void 0, beforeResetZoom: void 0, zoomed: void 0, scrolled: void 0, brushScrolled: void 0 }, foreColor: "#373d3f", fontFamily: "Helvetica, Arial, sans-serif", height: "auto", parentHeightOffset: 15, redrawOnParentResize: !0, redrawOnWindowResize: !0, id: void 0, group: void 0, nonce: void 0, offsetX: 0, offsetY: 0, selection: { enabled: !1, type: "x", fill: { color: "#24292e", opacity: 0.1 }, stroke: { width: 1, color: "#24292e", opacity: 0.4, dashArray: 3 }, xaxis: { min: void 0, max: void 0 }, yaxis: { min: void 0, max: void 0 } }, sparkline: { enabled: !1 }, brush: { enabled: !1, autoScaleYaxis: !0, target: void 0, targets: void 0 }, stacked: !1, stackOnlyBar: !0, stackType: "normal", toolbar: { show: !0, offsetX: 0, offsetY: 0, tools: { download: !0, selection: !0, zoom: !0, zoomin: !0, zoomout: !0, pan: !0, reset: !0, customIcons: [] }, export: { csv: { filename: void 0, columnDelimiter: ",", headerCategory: "category", headerValue: "value", categoryFormatter: void 0, valueFormatter: void 0 }, png: { filename: void 0 }, svg: { filename: void 0 }, scale: void 0, width: void 0 }, autoSelected: "zoom" }, type: "line", width: "100%", zoom: { enabled: !0, type: "x", autoScaleYaxis: !1, allowMouseWheelZoom: !0, zoomedArea: { fill: { color: "#90CAF9", opacity: 0.4 }, stroke: { color: "#0D47A1", opacity: 0.4, width: 1 } } } }, plotOptions: { line: { isSlopeChart: !1 }, area: { fillTo: "origin" }, bar: { horizontal: !1, columnWidth: "70%", barHeight: "70%", distributed: !1, borderRadius: 0, borderRadiusApplication: "around", borderRadiusWhenStacked: "last", rangeBarOverlap: !0, rangeBarGroupRows: !1, hideZeroBarsWhenGrouped: !1, isDumbbell: !1, dumbbellColors: void 0, isFunnel: !1, isFunnel3d: !0, colors: { ranges: [], backgroundBarColors: [], backgroundBarOpacity: 1, backgroundBarRadius: 0 }, dataLabels: { position: "top", maxItems: 100, hideOverflowingLabels: !0, orientation: "horizontal", total: { enabled: !1, formatter: void 0, offsetX: 0, offsetY: 0, style: { color: "#373d3f", fontSize: "12px", fontFamily: void 0, fontWeight: 600 } } } }, bubble: { zScaling: !0, minBubbleRadius: void 0, maxBubbleRadius: void 0 }, candlestick: { colors: { upward: "#00B746", downward: "#EF403C" }, wick: { useFillColor: !0 } }, boxPlot: { colors: { upper: "#00E396", lower: "#008FFB" } }, heatmap: { radius: 2, enableShades: !0, shadeIntensity: 0.5, reverseNegativeShade: !1, distributed: !1, useFillColorAsStroke: !1, colorScale: { inverse: !1, ranges: [], min: void 0, max: void 0 } }, treemap: { enableShades: !0, shadeIntensity: 0.5, distributed: !1, reverseNegativeShade: !1, useFillColorAsStroke: !1, borderRadius: 4, dataLabels: { format: "scale" }, colorScale: { inverse: !1, ranges: [], min: void 0, max: void 0 } }, radialBar: { inverseOrder: !1, startAngle: 0, endAngle: 360, offsetX: 0, offsetY: 0, hollow: { margin: 5, size: "50%", background: "transparent", image: void 0, imageWidth: 150, imageHeight: 150, imageOffsetX: 0, imageOffsetY: 0, imageClipped: !0, position: "front", dropShadow: { enabled: !1, top: 0, left: 0, blur: 3, color: "#000", opacity: 0.5 } }, track: { show: !0, startAngle: void 0, endAngle: void 0, background: "#f2f2f2", strokeWidth: "97%", opacity: 1, margin: 5, dropShadow: { enabled: !1, top: 0, left: 0, blur: 3, color: "#000", opacity: 0.5 } }, dataLabels: { show: !0, name: { show: !0, fontSize: "16px", fontFamily: void 0, fontWeight: 600, color: void 0, offsetY: 0, formatter: function(e) {
        return e;
      } }, value: { show: !0, fontSize: "14px", fontFamily: void 0, fontWeight: 400, color: void 0, offsetY: 16, formatter: function(e) {
        return e + "%";
      } }, total: { show: !1, label: "Total", fontSize: "16px", fontWeight: 600, fontFamily: void 0, color: void 0, formatter: function(e) {
        return e.globals.seriesTotals.reduce(function(t, a) {
          return t + a;
        }, 0) / e.globals.series.length + "%";
      } } }, barLabels: { enabled: !1, offsetX: 0, offsetY: 0, useSeriesColors: !0, fontFamily: void 0, fontWeight: 600, fontSize: "16px", formatter: function(e) {
        return e;
      }, onClick: void 0 } }, pie: { customScale: 1, offsetX: 0, offsetY: 0, startAngle: 0, endAngle: 360, expandOnClick: !0, dataLabels: { offset: 0, minAngleToShowLabel: 10 }, donut: { size: "65%", background: "transparent", labels: { show: !1, name: { show: !0, fontSize: "16px", fontFamily: void 0, fontWeight: 600, color: void 0, offsetY: -10, formatter: function(e) {
        return e;
      } }, value: { show: !0, fontSize: "20px", fontFamily: void 0, fontWeight: 400, color: void 0, offsetY: 10, formatter: function(e) {
        return e;
      } }, total: { show: !1, showAlways: !1, label: "Total", fontSize: "16px", fontWeight: 400, fontFamily: void 0, color: void 0, formatter: function(e) {
        return e.globals.seriesTotals.reduce(function(t, a) {
          return t + a;
        }, 0);
      } } } } }, polarArea: { rings: { strokeWidth: 1, strokeColor: "#e8e8e8" }, spokes: { strokeWidth: 1, connectorColors: "#e8e8e8" } }, radar: { size: void 0, offsetX: 0, offsetY: 0, polygons: { strokeWidth: 1, strokeColors: "#e8e8e8", connectorColors: "#e8e8e8", fill: { colors: void 0 } } } }, colors: void 0, dataLabels: { enabled: !0, enabledOnSeries: void 0, formatter: function(e) {
        return e !== null ? e : "";
      }, textAnchor: "middle", distributed: !1, offsetX: 0, offsetY: 0, style: { fontSize: "12px", fontFamily: void 0, fontWeight: 600, colors: void 0 }, background: { enabled: !0, foreColor: "#fff", borderRadius: 2, padding: 4, opacity: 0.9, borderWidth: 1, borderColor: "#fff", dropShadow: { enabled: !1, top: 1, left: 1, blur: 1, color: "#000", opacity: 0.45 } }, dropShadow: { enabled: !1, top: 1, left: 1, blur: 1, color: "#000", opacity: 0.45 } }, fill: { type: "solid", colors: void 0, opacity: 0.85, gradient: { shade: "dark", type: "horizontal", shadeIntensity: 0.5, gradientToColors: void 0, inverseColors: !0, opacityFrom: 1, opacityTo: 1, stops: [0, 50, 100], colorStops: [] }, image: { src: [], width: void 0, height: void 0 }, pattern: { style: "squares", width: 6, height: 6, strokeWidth: 2 } }, forecastDataPoints: { count: 0, fillOpacity: 0.5, strokeWidth: void 0, dashArray: 4 }, grid: { show: !0, borderColor: "#e0e0e0", strokeDashArray: 0, position: "back", xaxis: { lines: { show: !1 } }, yaxis: { lines: { show: !0 } }, row: { colors: void 0, opacity: 0.5 }, column: { colors: void 0, opacity: 0.5 }, padding: { top: 0, right: 10, bottom: 0, left: 12 } }, labels: [], legend: { show: !0, showForSingleSeries: !1, showForNullSeries: !0, showForZeroSeries: !0, floating: !1, position: "bottom", horizontalAlign: "center", inverseOrder: !1, fontSize: "12px", fontFamily: void 0, fontWeight: 400, width: void 0, height: void 0, formatter: void 0, tooltipHoverFormatter: void 0, offsetX: -20, offsetY: 4, customLegendItems: [], labels: { colors: void 0, useSeriesColors: !1 }, markers: { size: 7, fillColors: void 0, strokeWidth: 1, shape: void 0, offsetX: 0, offsetY: 0, customHTML: void 0, onClick: void 0 }, itemMargin: { horizontal: 5, vertical: 4 }, onItemClick: { toggleDataSeries: !0 }, onItemHover: { highlightDataSeries: !0 } }, markers: { discrete: [], size: 0, colors: void 0, strokeColors: "#fff", strokeWidth: 2, strokeOpacity: 0.9, strokeDashArray: 0, fillOpacity: 1, shape: "circle", offsetX: 0, offsetY: 0, showNullDataPoints: !0, onClick: void 0, onDblClick: void 0, hover: { size: void 0, sizeOffset: 3 } }, noData: { text: void 0, align: "center", verticalAlign: "middle", offsetX: 0, offsetY: 0, style: { color: void 0, fontSize: "14px", fontFamily: void 0 } }, responsive: [], series: void 0, states: { normal: { filter: { type: "none", value: 0 } }, hover: { filter: { type: "lighten", value: 0.1 } }, active: { allowMultipleDataPointsSelection: !1, filter: { type: "darken", value: 0.5 } } }, title: { text: void 0, align: "left", margin: 5, offsetX: 0, offsetY: 0, floating: !1, style: { fontSize: "14px", fontWeight: 900, fontFamily: void 0, color: void 0 } }, subtitle: { text: void 0, align: "left", margin: 5, offsetX: 0, offsetY: 30, floating: !1, style: { fontSize: "12px", fontWeight: 400, fontFamily: void 0, color: void 0 } }, stroke: { show: !0, curve: "smooth", lineCap: "butt", width: 2, colors: void 0, dashArray: 0, fill: { type: "solid", colors: void 0, opacity: 0.85, gradient: { shade: "dark", type: "horizontal", shadeIntensity: 0.5, gradientToColors: void 0, inverseColors: !0, opacityFrom: 1, opacityTo: 1, stops: [0, 50, 100], colorStops: [] } } }, tooltip: { enabled: !0, enabledOnSeries: void 0, shared: !0, hideEmptySeries: !1, followCursor: !1, intersect: !1, inverseOrder: !1, custom: void 0, fillSeriesColor: !1, theme: "light", cssClass: "", style: { fontSize: "12px", fontFamily: void 0 }, onDatasetHover: { highlightDataSeries: !1 }, x: { show: !0, format: "dd MMM", formatter: void 0 }, y: { formatter: void 0, title: { formatter: function(e) {
        return e ? e + ": " : "";
      } } }, z: { formatter: void 0, title: "Size: " }, marker: { show: !0, fillColors: void 0 }, items: { display: "flex" }, fixed: { enabled: !1, position: "topRight", offsetX: 0, offsetY: 0 } }, xaxis: { type: "category", categories: [], convertedCatToNumeric: !1, offsetX: 0, offsetY: 0, overwriteCategories: void 0, labels: { show: !0, rotate: -45, rotateAlways: !1, hideOverlappingLabels: !0, trim: !1, minHeight: void 0, maxHeight: 120, showDuplicates: !0, style: { colors: [], fontSize: "12px", fontWeight: 400, fontFamily: void 0, cssClass: "" }, offsetX: 0, offsetY: 0, format: void 0, formatter: void 0, datetimeUTC: !0, datetimeFormatter: { year: "yyyy", month: "MMM 'yy", day: "dd MMM", hour: "HH:mm", minute: "HH:mm:ss", second: "HH:mm:ss" } }, group: { groups: [], style: { colors: [], fontSize: "12px", fontWeight: 400, fontFamily: void 0, cssClass: "" } }, axisBorder: { show: !0, color: "#e0e0e0", width: "100%", height: 1, offsetX: 0, offsetY: 0 }, axisTicks: { show: !0, color: "#e0e0e0", height: 6, offsetX: 0, offsetY: 0 }, stepSize: void 0, tickAmount: void 0, tickPlacement: "on", min: void 0, max: void 0, range: void 0, floating: !1, decimalsInFloat: void 0, position: "bottom", title: { text: void 0, offsetX: 0, offsetY: 0, style: { color: void 0, fontSize: "12px", fontWeight: 900, fontFamily: void 0, cssClass: "" } }, crosshairs: { show: !0, width: 1, position: "back", opacity: 0.9, stroke: { color: "#b6b6b6", width: 1, dashArray: 3 }, fill: { type: "solid", color: "#B1B9C4", gradient: { colorFrom: "#D8E3F0", colorTo: "#BED1E6", stops: [0, 100], opacityFrom: 0.4, opacityTo: 0.5 } }, dropShadow: { enabled: !1, left: 0, top: 0, blur: 1, opacity: 0.4 } }, tooltip: { enabled: !0, offsetY: 0, formatter: void 0, style: { fontSize: "12px", fontFamily: void 0 } } }, yaxis: this.yAxis, theme: { mode: "", palette: "palette1", monochrome: { enabled: !1, color: "#008FFB", shadeTo: "light", shadeIntensity: 0.65 } } };
    } }]), y;
  }(), qa = function() {
    function y(e) {
      T(this, y), this.ctx = e, this.w = e.w, this.graphics = new X(this.ctx), this.w.globals.isBarHorizontal && (this.invertAxis = !0), this.helpers = new Ze(this), this.xAxisAnnotations = new pe(this), this.yAxisAnnotations = new dt(this), this.pointsAnnotations = new Qe(this), this.w.globals.isBarHorizontal && this.w.config.yaxis[0].reversed && (this.inversedReversedAxis = !0), this.xDivision = this.w.globals.gridWidth / this.w.globals.dataPoints;
    }
    return E(y, [{ key: "drawAxesAnnotations", value: function() {
      var e = this.w;
      if (e.globals.axisCharts && e.globals.dataPoints) {
        for (var t = this.yAxisAnnotations.drawYAxisAnnotations(), a = this.xAxisAnnotations.drawXAxisAnnotations(), i = this.pointsAnnotations.drawPointAnnotations(), r = e.config.chart.animations.enabled, s = [t, a, i], o = [a.node, t.node, i.node], n = 0; n < 3; n++) e.globals.dom.elGraphical.add(s[n]), !r || e.globals.resized || e.globals.dataChanged || e.config.chart.type !== "scatter" && e.config.chart.type !== "bubble" && e.globals.dataPoints > 1 && o[n].classList.add("apexcharts-element-hidden"), e.globals.delayedElements.push({ el: o[n], index: 0 });
        this.helpers.annotationsBackground();
      }
    } }, { key: "drawImageAnnos", value: function() {
      var e = this;
      this.w.config.annotations.images.map(function(t, a) {
        e.addImage(t, a);
      });
    } }, { key: "drawTextAnnos", value: function() {
      var e = this;
      this.w.config.annotations.texts.map(function(t, a) {
        e.addText(t, a);
      });
    } }, { key: "addXaxisAnnotation", value: function(e, t, a) {
      this.xAxisAnnotations.addXaxisAnnotation(e, t, a);
    } }, { key: "addYaxisAnnotation", value: function(e, t, a) {
      this.yAxisAnnotations.addYaxisAnnotation(e, t, a);
    } }, { key: "addPointAnnotation", value: function(e, t, a) {
      this.pointsAnnotations.addPointAnnotation(e, t, a);
    } }, { key: "addText", value: function(e, t) {
      var a = e.x, i = e.y, r = e.text, s = e.textAnchor, o = e.foreColor, n = e.fontSize, h = e.fontFamily, d = e.fontWeight, c = e.cssClass, u = e.backgroundColor, p = e.borderWidth, m = e.strokeDashArray, f = e.borderRadius, b = e.borderColor, v = e.appendTo, w = v === void 0 ? ".apexcharts-svg" : v, l = e.paddingLeft, g = l === void 0 ? 4 : l, x = e.paddingRight, k = x === void 0 ? 4 : x, S = e.paddingBottom, A = S === void 0 ? 2 : S, L = e.paddingTop, I = L === void 0 ? 2 : L, F = this.w, B = this.graphics.drawText({ x: a, y: i, text: r, textAnchor: s || "start", fontSize: n || "12px", fontWeight: d || "regular", fontFamily: h || F.config.chart.fontFamily, foreColor: o || F.config.chart.foreColor, cssClass: c }), G = F.globals.dom.baseEl.querySelector(w);
      G && G.appendChild(B.node);
      var W = B.bbox();
      if (r) {
        var q = this.graphics.drawRect(W.x - g, W.y - I, W.width + g + k, W.height + A + I, f, u || "transparent", 1, p, b, m);
        G.insertBefore(q.node, B.node);
      }
    } }, { key: "addImage", value: function(e, t) {
      var a = this.w, i = e.path, r = e.x, s = r === void 0 ? 0 : r, o = e.y, n = o === void 0 ? 0 : o, h = e.width, d = h === void 0 ? 20 : h, c = e.height, u = c === void 0 ? 20 : c, p = e.appendTo, m = p === void 0 ? ".apexcharts-svg" : p, f = a.globals.dom.Paper.image(i);
      f.size(d, u).move(s, n);
      var b = a.globals.dom.baseEl.querySelector(m);
      return b && b.appendChild(f.node), f;
    } }, { key: "addXaxisAnnotationExternal", value: function(e, t, a) {
      return this.addAnnotationExternal({ params: e, pushToMemory: t, context: a, type: "xaxis", contextMethod: a.addXaxisAnnotation }), a;
    } }, { key: "addYaxisAnnotationExternal", value: function(e, t, a) {
      return this.addAnnotationExternal({ params: e, pushToMemory: t, context: a, type: "yaxis", contextMethod: a.addYaxisAnnotation }), a;
    } }, { key: "addPointAnnotationExternal", value: function(e, t, a) {
      return this.invertAxis === void 0 && (this.invertAxis = a.w.globals.isBarHorizontal), this.addAnnotationExternal({ params: e, pushToMemory: t, context: a, type: "point", contextMethod: a.addPointAnnotation }), a;
    } }, { key: "addAnnotationExternal", value: function(e) {
      var t = e.params, a = e.pushToMemory, i = e.context, r = e.type, s = e.contextMethod, o = i, n = o.w, h = n.globals.dom.baseEl.querySelector(".apexcharts-".concat(r, "-annotations")), d = h.childNodes.length + 1, c = new Je(), u = Object.assign({}, r === "xaxis" ? c.xAxisAnnotation : r === "yaxis" ? c.yAxisAnnotation : c.pointAnnotation), p = z.extend(u, t);
      switch (r) {
        case "xaxis":
          this.addXaxisAnnotation(p, h, d);
          break;
        case "yaxis":
          this.addYaxisAnnotation(p, h, d);
          break;
        case "point":
          this.addPointAnnotation(p, h, d);
      }
      var m = n.globals.dom.baseEl.querySelector(".apexcharts-".concat(r, "-annotations .apexcharts-").concat(r, "-annotation-label[rel='").concat(d, "']")), f = this.helpers.addBackgroundToAnno(m, p);
      return f && h.insertBefore(f.node, m), a && n.globals.memory.methodsToExec.push({ context: o, id: p.id ? p.id : z.randomId(), method: s, label: "addAnnotation", params: t }), i;
    } }, { key: "clearAnnotations", value: function(e) {
      for (var t = e.w, a = t.globals.dom.baseEl.querySelectorAll(".apexcharts-yaxis-annotations, .apexcharts-xaxis-annotations, .apexcharts-point-annotations"), i = t.globals.memory.methodsToExec.length - 1; i >= 0; i--) t.globals.memory.methodsToExec[i].label !== "addText" && t.globals.memory.methodsToExec[i].label !== "addAnnotation" || t.globals.memory.methodsToExec.splice(i, 1);
      a = z.listToArray(a), Array.prototype.forEach.call(a, function(r) {
        for (; r.firstChild; ) r.removeChild(r.firstChild);
      });
    } }, { key: "removeAnnotation", value: function(e, t) {
      var a = e.w, i = a.globals.dom.baseEl.querySelectorAll(".".concat(t));
      i && (a.globals.memory.methodsToExec.map(function(r, s) {
        r.id === t && a.globals.memory.methodsToExec.splice(s, 1);
      }), Array.prototype.forEach.call(i, function(r) {
        r.parentElement.removeChild(r);
      }));
    } }]), y;
  }(), Wt = function(y) {
    var e, t = y.isTimeline, a = y.ctx, i = y.seriesIndex, r = y.dataPointIndex, s = y.y1, o = y.y2, n = y.w, h = n.globals.seriesRangeStart[i][r], d = n.globals.seriesRangeEnd[i][r], c = n.globals.labels[r], u = n.config.series[i].name ? n.config.series[i].name : "", p = n.globals.ttKeyFormatter, m = n.config.tooltip.y.title.formatter, f = { w: n, seriesIndex: i, dataPointIndex: r, start: h, end: d };
    typeof m == "function" && (u = m(u, f)), (e = n.config.series[i].data[r]) !== null && e !== void 0 && e.x && (c = n.config.series[i].data[r].x), t || n.config.xaxis.type === "datetime" && (c = new He(a).xLabelFormat(n.globals.ttKeyFormatter, c, c, { i: void 0, dateFormatter: new de(a).formatDate, w: n })), typeof p == "function" && (c = p(c, f)), Number.isFinite(s) && Number.isFinite(o) && (h = s, d = o);
    var b = "", v = "", w = n.globals.colors[i];
    if (n.config.tooltip.x.formatter === void 0) if (n.config.xaxis.type === "datetime") {
      var l = new de(a);
      b = l.formatDate(l.getDate(h), n.config.tooltip.x.format), v = l.formatDate(l.getDate(d), n.config.tooltip.x.format);
    } else b = h, v = d;
    else b = n.config.tooltip.x.formatter(h), v = n.config.tooltip.x.formatter(d);
    return { start: h, end: d, startVal: b, endVal: v, ylabel: c, color: w, seriesName: u };
  }, _t = function(y) {
    var e = y.color, t = y.seriesName, a = y.ylabel, i = y.start, r = y.end, s = y.seriesIndex, o = y.dataPointIndex, n = y.ctx.tooltip.tooltipLabels.getFormatters(s);
    i = n.yLbFormatter(i), r = n.yLbFormatter(r);
    var h = n.yLbFormatter(y.w.globals.series[s][o]), d = `<span class="value start-value">
  `.concat(i, `
  </span> <span class="separator">-</span> <span class="value end-value">
  `).concat(r, `
  </span>`);
    return '<div class="apexcharts-tooltip-rangebar"><div> <span class="series-name" style="color: ' + e + '">' + (t || "") + '</span></div><div> <span class="category">' + a + ": </span> " + (y.w.globals.comboCharts ? y.w.config.series[s].type === "rangeArea" || y.w.config.series[s].type === "rangeBar" ? d : "<span>".concat(h, "</span>") : d) + " </div></div>";
  }, xt = function() {
    function y(e) {
      T(this, y), this.opts = e;
    }
    return E(y, [{ key: "hideYAxis", value: function() {
      this.opts.yaxis[0].show = !1, this.opts.yaxis[0].title.text = "", this.opts.yaxis[0].axisBorder.show = !1, this.opts.yaxis[0].axisTicks.show = !1, this.opts.yaxis[0].floating = !0;
    } }, { key: "line", value: function() {
      return { chart: { animations: { easing: "swing" } }, dataLabels: { enabled: !1 }, stroke: { width: 5, curve: "straight" }, markers: { size: 0, hover: { sizeOffset: 6 } }, xaxis: { crosshairs: { width: 1 } } };
    } }, { key: "sparkline", value: function(e) {
      return this.hideYAxis(), z.extend(e, { grid: { show: !1, padding: { left: 0, right: 0, top: 0, bottom: 0 } }, legend: { show: !1 }, xaxis: { labels: { show: !1 }, tooltip: { enabled: !1 }, axisBorder: { show: !1 }, axisTicks: { show: !1 } }, chart: { toolbar: { show: !1 }, zoom: { enabled: !1 } }, dataLabels: { enabled: !1 } });
    } }, { key: "slope", value: function() {
      return this.hideYAxis(), { chart: { toolbar: { show: !1 }, zoom: { enabled: !1 } }, dataLabels: { enabled: !0, formatter: function(e, t) {
        var a = t.w.config.series[t.seriesIndex].name;
        return e !== null ? a + ": " + e : "";
      }, background: { enabled: !1 }, offsetX: -5 }, grid: { xaxis: { lines: { show: !0 } }, yaxis: { lines: { show: !1 } } }, xaxis: { position: "top", labels: { style: { fontSize: 14, fontWeight: 900 } }, tooltip: { enabled: !1 }, crosshairs: { show: !1 } }, markers: { size: 8, hover: { sizeOffset: 1 } }, legend: { show: !1 }, tooltip: { shared: !1, intersect: !0, followCursor: !0 }, stroke: { width: 5, curve: "straight" } };
    } }, { key: "bar", value: function() {
      return { chart: { stacked: !1, animations: { easing: "swing" } }, plotOptions: { bar: { dataLabels: { position: "center" } } }, dataLabels: { style: { colors: ["#fff"] }, background: { enabled: !1 } }, stroke: { width: 0, lineCap: "round" }, fill: { opacity: 0.85 }, legend: { markers: { shape: "square" } }, tooltip: { shared: !1, intersect: !0 }, xaxis: { tooltip: { enabled: !1 }, tickPlacement: "between", crosshairs: { width: "barWidth", position: "back", fill: { type: "gradient" }, dropShadow: { enabled: !1 }, stroke: { width: 0 } } } };
    } }, { key: "funnel", value: function() {
      return this.hideYAxis(), H(H({}, this.bar()), {}, { chart: { animations: { easing: "linear", speed: 800, animateGradually: { enabled: !1 } } }, plotOptions: { bar: { horizontal: !0, borderRadiusApplication: "around", borderRadius: 0, dataLabels: { position: "center" } } }, grid: { show: !1, padding: { left: 0, right: 0 } }, xaxis: { labels: { show: !1 }, tooltip: { enabled: !1 }, axisBorder: { show: !1 }, axisTicks: { show: !1 } } });
    } }, { key: "candlestick", value: function() {
      var e = this;
      return { stroke: { width: 1, colors: ["#333"] }, fill: { opacity: 1 }, dataLabels: { enabled: !1 }, tooltip: { shared: !0, custom: function(t) {
        var a = t.seriesIndex, i = t.dataPointIndex, r = t.w;
        return e._getBoxTooltip(r, a, i, ["Open", "High", "", "Low", "Close"], "candlestick");
      } }, states: { active: { filter: { type: "none" } } }, xaxis: { crosshairs: { width: 1 } } };
    } }, { key: "boxPlot", value: function() {
      var e = this;
      return { chart: { animations: { dynamicAnimation: { enabled: !1 } } }, stroke: { width: 1, colors: ["#24292e"] }, dataLabels: { enabled: !1 }, tooltip: { shared: !0, custom: function(t) {
        var a = t.seriesIndex, i = t.dataPointIndex, r = t.w;
        return e._getBoxTooltip(r, a, i, ["Minimum", "Q1", "Median", "Q3", "Maximum"], "boxPlot");
      } }, markers: { size: 7, strokeWidth: 1, strokeColors: "#111" }, xaxis: { crosshairs: { width: 1 } } };
    } }, { key: "rangeBar", value: function() {
      return { chart: { animations: { animateGradually: !1 } }, stroke: { width: 0, lineCap: "square" }, plotOptions: { bar: { borderRadius: 0, dataLabels: { position: "center" } } }, dataLabels: { enabled: !1, formatter: function(e, t) {
        t.ctx;
        var a = t.seriesIndex, i = t.dataPointIndex, r = t.w, s = function() {
          var o = r.globals.seriesRangeStart[a][i];
          return r.globals.seriesRangeEnd[a][i] - o;
        };
        return r.globals.comboCharts ? r.config.series[a].type === "rangeBar" || r.config.series[a].type === "rangeArea" ? s() : e : s();
      }, background: { enabled: !1 }, style: { colors: ["#fff"] } }, markers: { size: 10 }, tooltip: { shared: !1, followCursor: !0, custom: function(e) {
        return e.w.config.plotOptions && e.w.config.plotOptions.bar && e.w.config.plotOptions.bar.horizontal ? function(t) {
          var a = Wt(H(H({}, t), {}, { isTimeline: !0 })), i = a.color, r = a.seriesName, s = a.ylabel, o = a.startVal, n = a.endVal;
          return _t(H(H({}, t), {}, { color: i, seriesName: r, ylabel: s, start: o, end: n }));
        }(e) : function(t) {
          var a = Wt(t), i = a.color, r = a.seriesName, s = a.ylabel, o = a.start, n = a.end;
          return _t(H(H({}, t), {}, { color: i, seriesName: r, ylabel: s, start: o, end: n }));
        }(e);
      } }, xaxis: { tickPlacement: "between", tooltip: { enabled: !1 }, crosshairs: { stroke: { width: 0 } } } };
    } }, { key: "dumbbell", value: function(e) {
      var t, a;
      return (t = e.plotOptions.bar) !== null && t !== void 0 && t.barHeight || (e.plotOptions.bar.barHeight = 2), (a = e.plotOptions.bar) !== null && a !== void 0 && a.columnWidth || (e.plotOptions.bar.columnWidth = 2), e;
    } }, { key: "area", value: function() {
      return { stroke: { width: 4, fill: { type: "solid", gradient: { inverseColors: !1, shade: "light", type: "vertical", opacityFrom: 0.65, opacityTo: 0.5, stops: [0, 100, 100] } } }, fill: { type: "gradient", gradient: { inverseColors: !1, shade: "light", type: "vertical", opacityFrom: 0.65, opacityTo: 0.5, stops: [0, 100, 100] } }, markers: { size: 0, hover: { sizeOffset: 6 } }, tooltip: { followCursor: !1 } };
    } }, { key: "rangeArea", value: function() {
      return { stroke: { curve: "straight", width: 0 }, fill: { type: "solid", opacity: 0.6 }, markers: { size: 0 }, states: { hover: { filter: { type: "none" } }, active: { filter: { type: "none" } } }, tooltip: { intersect: !1, shared: !0, followCursor: !0, custom: function(e) {
        return function(t) {
          var a = Wt(t), i = a.color, r = a.seriesName, s = a.ylabel, o = a.start, n = a.end;
          return _t(H(H({}, t), {}, { color: i, seriesName: r, ylabel: s, start: o, end: n }));
        }(e);
      } } };
    } }, { key: "brush", value: function(e) {
      return z.extend(e, { chart: { toolbar: { autoSelected: "selection", show: !1 }, zoom: { enabled: !1 } }, dataLabels: { enabled: !1 }, stroke: { width: 1 }, tooltip: { enabled: !1 }, xaxis: { tooltip: { enabled: !1 } } });
    } }, { key: "stacked100", value: function(e) {
      e.dataLabels = e.dataLabels || {}, e.dataLabels.formatter = e.dataLabels.formatter || void 0;
      var t = e.dataLabels.formatter;
      return e.yaxis.forEach(function(a, i) {
        e.yaxis[i].min = 0, e.yaxis[i].max = 100;
      }), e.chart.type === "bar" && (e.dataLabels.formatter = t || function(a) {
        return typeof a == "number" && a ? a.toFixed(0) + "%" : a;
      }), e;
    } }, { key: "stackedBars", value: function() {
      var e = this.bar();
      return H(H({}, e), {}, { plotOptions: H(H({}, e.plotOptions), {}, { bar: H(H({}, e.plotOptions.bar), {}, { borderRadiusApplication: "end", borderRadiusWhenStacked: "last" }) }) });
    } }, { key: "convertCatToNumeric", value: function(e) {
      return e.xaxis.convertedCatToNumeric = !0, e;
    } }, { key: "convertCatToNumericXaxis", value: function(e, t, a) {
      e.xaxis.type = "numeric", e.xaxis.labels = e.xaxis.labels || {}, e.xaxis.labels.formatter = e.xaxis.labels.formatter || function(s) {
        return z.isNumber(s) ? Math.floor(s) : s;
      };
      var i = e.xaxis.labels.formatter, r = e.xaxis.categories && e.xaxis.categories.length ? e.xaxis.categories : e.labels;
      return a && a.length && (r = a.map(function(s) {
        return Array.isArray(s) ? s : String(s);
      })), r && r.length && (e.xaxis.labels.formatter = function(s) {
        return z.isNumber(s) ? i(r[Math.floor(s) - 1]) : i(s);
      }), e.xaxis.categories = [], e.labels = [], e.xaxis.tickAmount = e.xaxis.tickAmount || "dataPoints", e;
    } }, { key: "bubble", value: function() {
      return { dataLabels: { style: { colors: ["#fff"] } }, tooltip: { shared: !1, intersect: !0 }, xaxis: { crosshairs: { width: 0 } }, fill: { type: "solid", gradient: { shade: "light", inverse: !0, shadeIntensity: 0.55, opacityFrom: 0.4, opacityTo: 0.8 } } };
    } }, { key: "scatter", value: function() {
      return { dataLabels: { enabled: !1 }, tooltip: { shared: !1, intersect: !0 }, markers: { size: 6, strokeWidth: 1, hover: { sizeOffset: 2 } } };
    } }, { key: "heatmap", value: function() {
      return { chart: { stacked: !1 }, fill: { opacity: 1 }, dataLabels: { style: { colors: ["#fff"] } }, stroke: { colors: ["#fff"] }, tooltip: { followCursor: !0, marker: { show: !1 }, x: { show: !1 } }, legend: { position: "top", markers: { shape: "square" } }, grid: { padding: { right: 20 } } };
    } }, { key: "treemap", value: function() {
      return { chart: { zoom: { enabled: !1 } }, dataLabels: { style: { fontSize: 14, fontWeight: 600, colors: ["#fff"] } }, stroke: { show: !0, width: 2, colors: ["#fff"] }, legend: { show: !1 }, fill: { opacity: 1, gradient: { stops: [0, 100] } }, tooltip: { followCursor: !0, x: { show: !1 } }, grid: { padding: { left: 0, right: 0 } }, xaxis: { crosshairs: { show: !1 }, tooltip: { enabled: !1 } } };
    } }, { key: "pie", value: function() {
      return { chart: { toolbar: { show: !1 } }, plotOptions: { pie: { donut: { labels: { show: !1 } } } }, dataLabels: { formatter: function(e) {
        return e.toFixed(1) + "%";
      }, style: { colors: ["#fff"] }, background: { enabled: !1 }, dropShadow: { enabled: !0 } }, stroke: { colors: ["#fff"] }, fill: { opacity: 1, gradient: { shade: "light", stops: [0, 100] } }, tooltip: { theme: "dark", fillSeriesColor: !0 }, legend: { position: "right" }, grid: { padding: { left: 0, right: 0, top: 0, bottom: 0 } } };
    } }, { key: "donut", value: function() {
      return { chart: { toolbar: { show: !1 } }, dataLabels: { formatter: function(e) {
        return e.toFixed(1) + "%";
      }, style: { colors: ["#fff"] }, background: { enabled: !1 }, dropShadow: { enabled: !0 } }, stroke: { colors: ["#fff"] }, fill: { opacity: 1, gradient: { shade: "light", shadeIntensity: 0.35, stops: [80, 100], opacityFrom: 1, opacityTo: 1 } }, tooltip: { theme: "dark", fillSeriesColor: !0 }, legend: { position: "right" }, grid: { padding: { left: 0, right: 0, top: 0, bottom: 0 } } };
    } }, { key: "polarArea", value: function() {
      return { chart: { toolbar: { show: !1 } }, dataLabels: { formatter: function(e) {
        return e.toFixed(1) + "%";
      }, enabled: !1 }, stroke: { show: !0, width: 2 }, fill: { opacity: 0.7 }, tooltip: { theme: "dark", fillSeriesColor: !0 }, legend: { position: "right" }, grid: { padding: { left: 0, right: 0, top: 0, bottom: 0 } } };
    } }, { key: "radar", value: function() {
      return this.opts.yaxis[0].labels.offsetY = this.opts.yaxis[0].labels.offsetY ? this.opts.yaxis[0].labels.offsetY : 6, { dataLabels: { enabled: !1, style: { fontSize: "11px" } }, stroke: { width: 2 }, markers: { size: 5, strokeWidth: 1, strokeOpacity: 1 }, fill: { opacity: 0.2 }, tooltip: { shared: !1, intersect: !0, followCursor: !0 }, grid: { show: !1, padding: { left: 0, right: 0, top: 0, bottom: 0 } }, xaxis: { labels: { formatter: function(e) {
        return e;
      }, style: { colors: ["#a8a8a8"], fontSize: "11px" } }, tooltip: { enabled: !1 }, crosshairs: { show: !1 } } };
    } }, { key: "radialBar", value: function() {
      return { chart: { animations: { dynamicAnimation: { enabled: !0, speed: 800 } }, toolbar: { show: !1 } }, fill: { gradient: { shade: "dark", shadeIntensity: 0.4, inverseColors: !1, type: "diagonal2", opacityFrom: 1, opacityTo: 1, stops: [70, 98, 100] } }, legend: { show: !1, position: "right" }, tooltip: { enabled: !1, fillSeriesColor: !0 }, grid: { padding: { left: 0, right: 0, top: 0, bottom: 0 } } };
    } }, { key: "_getBoxTooltip", value: function(e, t, a, i, r) {
      var s = e.globals.seriesCandleO[t][a], o = e.globals.seriesCandleH[t][a], n = e.globals.seriesCandleM[t][a], h = e.globals.seriesCandleL[t][a], d = e.globals.seriesCandleC[t][a];
      return e.config.series[t].type && e.config.series[t].type !== r ? `<div class="apexcharts-custom-tooltip">
          `.concat(e.config.series[t].name ? e.config.series[t].name : "series-" + (t + 1), ": <strong>").concat(e.globals.series[t][a], `</strong>
        </div>`) : '<div class="apexcharts-tooltip-box apexcharts-tooltip-'.concat(e.config.chart.type, '">') + "<div>".concat(i[0], ': <span class="value">') + s + "</span></div>" + "<div>".concat(i[1], ': <span class="value">') + o + "</span></div>" + (n ? "<div>".concat(i[2], ': <span class="value">') + n + "</span></div>" : "") + "<div>".concat(i[3], ': <span class="value">') + h + "</span></div>" + "<div>".concat(i[4], ': <span class="value">') + d + "</span></div></div>";
    } }]), y;
  }(), bt = function() {
    function y(e) {
      T(this, y), this.opts = e;
    }
    return E(y, [{ key: "init", value: function(e) {
      var t = e.responsiveOverride, a = this.opts, i = new Je(), r = new xt(a);
      this.chartType = a.chart.type, a = this.extendYAxis(a), a = this.extendAnnotations(a);
      var s = i.init(), o = {};
      if (a && he(a) === "object") {
        var n, h, d, c, u, p, m, f, b, v, w = {};
        w = ["line", "area", "bar", "candlestick", "boxPlot", "rangeBar", "rangeArea", "bubble", "scatter", "heatmap", "treemap", "pie", "polarArea", "donut", "radar", "radialBar"].indexOf(a.chart.type) !== -1 ? r[a.chart.type]() : r.line(), (n = a.plotOptions) !== null && n !== void 0 && (h = n.bar) !== null && h !== void 0 && h.isFunnel && (w = r.funnel()), a.chart.stacked && a.chart.type === "bar" && (w = r.stackedBars()), (d = a.chart.brush) !== null && d !== void 0 && d.enabled && (w = r.brush(w)), (c = a.plotOptions) !== null && c !== void 0 && (u = c.line) !== null && u !== void 0 && u.isSlopeChart && (w = r.slope()), a.chart.stacked && a.chart.stackType === "100%" && (a = r.stacked100(a)), (p = a.plotOptions) !== null && p !== void 0 && (m = p.bar) !== null && m !== void 0 && m.isDumbbell && (a = r.dumbbell(a)), this.checkForDarkTheme(window.Apex), this.checkForDarkTheme(a), a.xaxis = a.xaxis || window.Apex.xaxis || {}, t || (a.xaxis.convertedCatToNumeric = !1), ((f = (a = this.checkForCatToNumericXAxis(this.chartType, w, a)).chart.sparkline) !== null && f !== void 0 && f.enabled || (b = window.Apex.chart) !== null && b !== void 0 && (v = b.sparkline) !== null && v !== void 0 && v.enabled) && (w = r.sparkline(w)), o = z.extend(s, w);
      }
      var l = z.extend(o, window.Apex);
      return s = z.extend(l, a), s = this.handleUserInputErrors(s);
    } }, { key: "checkForCatToNumericXAxis", value: function(e, t, a) {
      var i, r, s = new xt(a), o = (e === "bar" || e === "boxPlot") && ((i = a.plotOptions) === null || i === void 0 || (r = i.bar) === null || r === void 0 ? void 0 : r.horizontal), n = e === "pie" || e === "polarArea" || e === "donut" || e === "radar" || e === "radialBar" || e === "heatmap", h = a.xaxis.type !== "datetime" && a.xaxis.type !== "numeric", d = a.xaxis.tickPlacement ? a.xaxis.tickPlacement : t.xaxis && t.xaxis.tickPlacement;
      return o || n || !h || d === "between" || (a = s.convertCatToNumeric(a)), a;
    } }, { key: "extendYAxis", value: function(e, t) {
      var a = new Je();
      (e.yaxis === void 0 || !e.yaxis || Array.isArray(e.yaxis) && e.yaxis.length === 0) && (e.yaxis = {}), e.yaxis.constructor !== Array && window.Apex.yaxis && window.Apex.yaxis.constructor !== Array && (e.yaxis = z.extend(e.yaxis, window.Apex.yaxis)), e.yaxis.constructor !== Array ? e.yaxis = [z.extend(a.yAxis, e.yaxis)] : e.yaxis = z.extendArray(e.yaxis, a.yAxis);
      var i = !1;
      e.yaxis.forEach(function(s) {
        s.logarithmic && (i = !0);
      });
      var r = e.series;
      return t && !r && (r = t.config.series), i && r.length !== e.yaxis.length && r.length && (e.yaxis = r.map(function(s, o) {
        if (s.name || (r[o].name = "series-".concat(o + 1)), e.yaxis[o]) return e.yaxis[o].seriesName = r[o].name, e.yaxis[o];
        var n = z.extend(a.yAxis, e.yaxis[0]);
        return n.show = !1, n;
      })), i && r.length > 1 && r.length !== e.yaxis.length && console.warn("A multi-series logarithmic chart should have equal number of series and y-axes"), e;
    } }, { key: "extendAnnotations", value: function(e) {
      return e.annotations === void 0 && (e.annotations = {}, e.annotations.yaxis = [], e.annotations.xaxis = [], e.annotations.points = []), e = this.extendYAxisAnnotations(e), e = this.extendXAxisAnnotations(e), e = this.extendPointAnnotations(e);
    } }, { key: "extendYAxisAnnotations", value: function(e) {
      var t = new Je();
      return e.annotations.yaxis = z.extendArray(e.annotations.yaxis !== void 0 ? e.annotations.yaxis : [], t.yAxisAnnotation), e;
    } }, { key: "extendXAxisAnnotations", value: function(e) {
      var t = new Je();
      return e.annotations.xaxis = z.extendArray(e.annotations.xaxis !== void 0 ? e.annotations.xaxis : [], t.xAxisAnnotation), e;
    } }, { key: "extendPointAnnotations", value: function(e) {
      var t = new Je();
      return e.annotations.points = z.extendArray(e.annotations.points !== void 0 ? e.annotations.points : [], t.pointAnnotation), e;
    } }, { key: "checkForDarkTheme", value: function(e) {
      e.theme && e.theme.mode === "dark" && (e.tooltip || (e.tooltip = {}), e.tooltip.theme !== "light" && (e.tooltip.theme = "dark"), e.chart.foreColor || (e.chart.foreColor = "#f6f7f8"), e.theme.palette || (e.theme.palette = "palette4"));
    } }, { key: "handleUserInputErrors", value: function(e) {
      var t = e;
      if (t.tooltip.shared && t.tooltip.intersect) throw new Error("tooltip.shared cannot be enabled when tooltip.intersect is true. Turn off any other option by setting it to false.");
      if (t.chart.type === "bar" && t.plotOptions.bar.horizontal) {
        if (t.yaxis.length > 1) throw new Error("Multiple Y Axis for bars are not supported. Switch to column chart by setting plotOptions.bar.horizontal=false");
        t.yaxis[0].reversed && (t.yaxis[0].opposite = !0), t.xaxis.tooltip.enabled = !1, t.yaxis[0].tooltip.enabled = !1, t.chart.zoom.enabled = !1;
      }
      return t.chart.type !== "bar" && t.chart.type !== "rangeBar" || t.tooltip.shared && t.xaxis.crosshairs.width === "barWidth" && t.series.length > 1 && (t.xaxis.crosshairs.width = "tickWidth"), t.chart.type !== "candlestick" && t.chart.type !== "boxPlot" || t.yaxis[0].reversed && (console.warn("Reversed y-axis in ".concat(t.chart.type, " chart is not supported.")), t.yaxis[0].reversed = !1), t;
    } }]), y;
  }(), ga = function() {
    function y() {
      T(this, y);
    }
    return E(y, [{ key: "initGlobalVars", value: function(e) {
      e.series = [], e.seriesCandleO = [], e.seriesCandleH = [], e.seriesCandleM = [], e.seriesCandleL = [], e.seriesCandleC = [], e.seriesRangeStart = [], e.seriesRangeEnd = [], e.seriesRange = [], e.seriesPercent = [], e.seriesGoals = [], e.seriesX = [], e.seriesZ = [], e.seriesNames = [], e.seriesTotals = [], e.seriesLog = [], e.seriesColors = [], e.stackedSeriesTotals = [], e.seriesXvalues = [], e.seriesYvalues = [], e.labels = [], e.hasXaxisGroups = !1, e.groups = [], e.barGroups = [], e.lineGroups = [], e.areaGroups = [], e.hasSeriesGroups = !1, e.seriesGroups = [], e.categoryLabels = [], e.timescaleLabels = [], e.noLabelsProvided = !1, e.resizeTimer = null, e.selectionResizeTimer = null, e.lastWheelExecution = 0, e.delayedElements = [], e.pointsArray = [], e.dataLabelsRects = [], e.isXNumeric = !1, e.skipLastTimelinelabel = !1, e.skipFirstTimelinelabel = !1, e.isDataXYZ = !1, e.isMultiLineX = !1, e.isMultipleYAxis = !1, e.maxY = -Number.MAX_VALUE, e.minY = Number.MIN_VALUE, e.minYArr = [], e.maxYArr = [], e.maxX = -Number.MAX_VALUE, e.minX = Number.MAX_VALUE, e.initialMaxX = -Number.MAX_VALUE, e.initialMinX = Number.MAX_VALUE, e.maxDate = 0, e.minDate = Number.MAX_VALUE, e.minZ = Number.MAX_VALUE, e.maxZ = -Number.MAX_VALUE, e.minXDiff = Number.MAX_VALUE, e.yAxisScale = [], e.xAxisScale = null, e.xAxisTicksPositions = [], e.yLabelsCoords = [], e.yTitleCoords = [], e.barPadForNumericAxis = 0, e.padHorizontal = 0, e.xRange = 0, e.yRange = [], e.zRange = 0, e.dataPoints = 0, e.xTickAmount = 0, e.multiAxisTickAmount = 0;
    } }, { key: "globalVars", value: function(e) {
      return { chartID: null, cuid: null, events: { beforeMount: [], mounted: [], updated: [], clicked: [], selection: [], dataPointSelection: [], zoomed: [], scrolled: [] }, colors: [], clientX: null, clientY: null, fill: { colors: [] }, stroke: { colors: [] }, dataLabels: { style: { colors: [] } }, radarPolygons: { fill: { colors: [] } }, markers: { colors: [], size: e.markers.size, largestSize: 0 }, animationEnded: !1, isTouchDevice: "ontouchstart" in window || navigator.msMaxTouchPoints, isDirty: !1, isExecCalled: !1, initialConfig: null, initialSeries: [], lastXAxis: [], lastYAxis: [], columnSeries: null, labels: [], timescaleLabels: [], noLabelsProvided: !1, allSeriesCollapsed: !1, collapsedSeries: [], collapsedSeriesIndices: [], ancillaryCollapsedSeries: [], ancillaryCollapsedSeriesIndices: [], risingSeries: [], dataFormatXNumeric: !1, capturedSeriesIndex: -1, capturedDataPointIndex: -1, selectedDataPoints: [], invalidLogScale: !1, ignoreYAxisIndexes: [], maxValsInArrayIndex: 0, radialSize: 0, selection: void 0, zoomEnabled: e.chart.toolbar.autoSelected === "zoom" && e.chart.toolbar.tools.zoom && e.chart.zoom.enabled, panEnabled: e.chart.toolbar.autoSelected === "pan" && e.chart.toolbar.tools.pan, selectionEnabled: e.chart.toolbar.autoSelected === "selection" && e.chart.toolbar.tools.selection, yaxis: null, mousedown: !1, lastClientPosition: {}, visibleXRange: void 0, yValueDecimal: 0, total: 0, SVGNS: "http://www.w3.org/2000/svg", svgWidth: 0, svgHeight: 0, noData: !1, locale: {}, dom: {}, memory: { methodsToExec: [] }, shouldAnimate: !0, skipLastTimelinelabel: !1, skipFirstTimelinelabel: !1, delayedElements: [], axisCharts: !0, isDataXYZ: !1, isSlopeChart: e.plotOptions.line.isSlopeChart, resized: !1, resizeTimer: null, comboCharts: !1, dataChanged: !1, previousPaths: [], allSeriesHasEqualX: !0, pointsArray: [], dataLabelsRects: [], lastDrawnDataLabelsIndexes: [], hasNullValues: !1, easing: null, zoomed: !1, gridWidth: 0, gridHeight: 0, rotateXLabels: !1, defaultLabels: !1, xLabelFormatter: void 0, yLabelFormatters: [], xaxisTooltipFormatter: void 0, ttKeyFormatter: void 0, ttVal: void 0, ttZFormatter: void 0, LINE_HEIGHT_RATIO: 1.618, xAxisLabelsHeight: 0, xAxisGroupLabelsHeight: 0, xAxisLabelsWidth: 0, yAxisLabelsWidth: 0, scaleX: 1, scaleY: 1, translateX: 0, translateY: 0, translateYAxisX: [], yAxisWidths: [], translateXAxisY: 0, translateXAxisX: 0, tooltip: null, niceScaleAllowedMagMsd: [[1, 1, 2, 5, 5, 5, 10, 10, 10, 10, 10], [1, 1, 2, 5, 5, 5, 10, 10, 10, 10, 10]], niceScaleDefaultTicks: [1, 2, 4, 4, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 12, 12, 12, 12, 12, 12, 12, 12, 12, 24], seriesYAxisMap: [], seriesYAxisReverseMap: [] };
    } }, { key: "init", value: function(e) {
      var t = this.globalVars(e);
      return this.initGlobalVars(t), t.initialConfig = z.extend({}, e), t.initialSeries = z.clone(e.series), t.lastXAxis = z.clone(t.initialConfig.xaxis), t.lastYAxis = z.clone(t.initialConfig.yaxis), t;
    } }]), y;
  }(), Ja = function() {
    function y(e) {
      T(this, y), this.opts = e;
    }
    return E(y, [{ key: "init", value: function() {
      var e = new bt(this.opts).init({ responsiveOverride: !1 });
      return { config: e, globals: new ga().init(e) };
    } }]), y;
  }(), Ke = function() {
    function y(e) {
      T(this, y), this.ctx = e, this.w = e.w, this.opts = null, this.seriesIndex = 0, this.patternIDs = [];
    }
    return E(y, [{ key: "clippedImgArea", value: function(e) {
      var t = this.w, a = t.config, i = parseInt(t.globals.gridWidth, 10), r = parseInt(t.globals.gridHeight, 10), s = i > r ? i : r, o = e.image, n = 0, h = 0;
      e.width === void 0 && e.height === void 0 ? a.fill.image.width !== void 0 && a.fill.image.height !== void 0 ? (n = a.fill.image.width + 1, h = a.fill.image.height) : (n = s + 1, h = s) : (n = e.width, h = e.height);
      var d = document.createElementNS(t.globals.SVGNS, "pattern");
      X.setAttrs(d, { id: e.patternID, patternUnits: e.patternUnits ? e.patternUnits : "userSpaceOnUse", width: n + "px", height: h + "px" });
      var c = document.createElementNS(t.globals.SVGNS, "image");
      d.appendChild(c), c.setAttributeNS(window.SVG.xlink, "href", o), X.setAttrs(c, { x: 0, y: 0, preserveAspectRatio: "none", width: n + "px", height: h + "px" }), c.style.opacity = e.opacity, t.globals.dom.elDefs.node.appendChild(d);
    } }, { key: "getSeriesIndex", value: function(e) {
      var t = this.w, a = t.config.chart.type;
      return (a === "bar" || a === "rangeBar") && t.config.plotOptions.bar.distributed || a === "heatmap" || a === "treemap" ? this.seriesIndex = e.seriesNumber : this.seriesIndex = e.seriesNumber % t.globals.series.length, this.seriesIndex;
    } }, { key: "fillPath", value: function(e) {
      var t = this.w;
      this.opts = e;
      var a, i, r, s = this.w.config;
      this.seriesIndex = this.getSeriesIndex(e);
      var o = this.getFillColors()[this.seriesIndex];
      t.globals.seriesColors[this.seriesIndex] !== void 0 && (o = t.globals.seriesColors[this.seriesIndex]), typeof o == "function" && (o = o({ seriesIndex: this.seriesIndex, dataPointIndex: e.dataPointIndex, value: e.value, w: t }));
      var n = e.fillType ? e.fillType : this.getFillType(this.seriesIndex), h = Array.isArray(s.fill.opacity) ? s.fill.opacity[this.seriesIndex] : s.fill.opacity;
      e.color && (o = e.color), o || (o = "#fff", console.warn("undefined color - ApexCharts"));
      var d = o;
      if (o.indexOf("rgb") === -1 ? o.length < 9 && (d = z.hexToRgba(o, h)) : o.indexOf("rgba") > -1 && (h = z.getOpacityFromRGBA(o)), e.opacity && (h = e.opacity), n === "pattern" && (i = this.handlePatternFill({ fillConfig: e.fillConfig, patternFill: i, fillColor: o, fillOpacity: h, defaultColor: d })), n === "gradient" && (r = this.handleGradientFill({ fillConfig: e.fillConfig, fillColor: o, fillOpacity: h, i: this.seriesIndex })), n === "image") {
        var c = s.fill.image.src, u = e.patternID ? e.patternID : "", p = "pattern".concat(t.globals.cuid).concat(e.seriesNumber + 1).concat(u);
        this.patternIDs.indexOf(p) === -1 && (this.clippedImgArea({ opacity: h, image: Array.isArray(c) ? e.seriesNumber < c.length ? c[e.seriesNumber] : c[0] : c, width: e.width ? e.width : void 0, height: e.height ? e.height : void 0, patternUnits: e.patternUnits, patternID: p }), this.patternIDs.push(p)), a = "url(#".concat(p, ")");
      } else a = n === "gradient" ? r : n === "pattern" ? i : d;
      return e.solid && (a = d), a;
    } }, { key: "getFillType", value: function(e) {
      var t = this.w;
      return Array.isArray(t.config.fill.type) ? t.config.fill.type[e] : t.config.fill.type;
    } }, { key: "getFillColors", value: function() {
      var e = this.w, t = e.config, a = this.opts, i = [];
      return e.globals.comboCharts ? e.config.series[this.seriesIndex].type === "line" ? Array.isArray(e.globals.stroke.colors) ? i = e.globals.stroke.colors : i.push(e.globals.stroke.colors) : Array.isArray(e.globals.fill.colors) ? i = e.globals.fill.colors : i.push(e.globals.fill.colors) : t.chart.type === "line" ? Array.isArray(e.globals.stroke.colors) ? i = e.globals.stroke.colors : i.push(e.globals.stroke.colors) : Array.isArray(e.globals.fill.colors) ? i = e.globals.fill.colors : i.push(e.globals.fill.colors), a.fillColors !== void 0 && (i = [], Array.isArray(a.fillColors) ? i = a.fillColors.slice() : i.push(a.fillColors)), i;
    } }, { key: "handlePatternFill", value: function(e) {
      var t = e.fillConfig, a = e.patternFill, i = e.fillColor, r = e.fillOpacity, s = e.defaultColor, o = this.w.config.fill;
      t && (o = t);
      var n = this.opts, h = new X(this.ctx), d = Array.isArray(o.pattern.strokeWidth) ? o.pattern.strokeWidth[this.seriesIndex] : o.pattern.strokeWidth, c = i;
      return Array.isArray(o.pattern.style) ? a = o.pattern.style[n.seriesNumber] !== void 0 ? h.drawPattern(o.pattern.style[n.seriesNumber], o.pattern.width, o.pattern.height, c, d, r) : s : a = h.drawPattern(o.pattern.style, o.pattern.width, o.pattern.height, c, d, r), a;
    } }, { key: "handleGradientFill", value: function(e) {
      var t = e.fillColor, a = e.fillOpacity, i = e.fillConfig, r = e.i, s = this.w.config.fill;
      i && (s = H(H({}, s), i));
      var o, n = this.opts, h = new X(this.ctx), d = new z(), c = s.gradient.type, u = t, p = s.gradient.opacityFrom === void 0 ? a : Array.isArray(s.gradient.opacityFrom) ? s.gradient.opacityFrom[r] : s.gradient.opacityFrom;
      u.indexOf("rgba") > -1 && (p = z.getOpacityFromRGBA(u));
      var m = s.gradient.opacityTo === void 0 ? a : Array.isArray(s.gradient.opacityTo) ? s.gradient.opacityTo[r] : s.gradient.opacityTo;
      if (s.gradient.gradientToColors === void 0 || s.gradient.gradientToColors.length === 0) o = s.gradient.shade === "dark" ? d.shadeColor(-1 * parseFloat(s.gradient.shadeIntensity), t.indexOf("rgb") > -1 ? z.rgb2hex(t) : t) : d.shadeColor(parseFloat(s.gradient.shadeIntensity), t.indexOf("rgb") > -1 ? z.rgb2hex(t) : t);
      else if (s.gradient.gradientToColors[n.seriesNumber]) {
        var f = s.gradient.gradientToColors[n.seriesNumber];
        o = f, f.indexOf("rgba") > -1 && (m = z.getOpacityFromRGBA(f));
      } else o = t;
      if (s.gradient.gradientFrom && (u = s.gradient.gradientFrom), s.gradient.gradientTo && (o = s.gradient.gradientTo), s.gradient.inverseColors) {
        var b = u;
        u = o, o = b;
      }
      return u.indexOf("rgb") > -1 && (u = z.rgb2hex(u)), o.indexOf("rgb") > -1 && (o = z.rgb2hex(o)), h.drawGradient(c, u, o, p, m, n.size, s.gradient.stops, s.gradient.colorStops, r);
    } }]), y;
  }(), ut = function() {
    function y(e, t) {
      T(this, y), this.ctx = e, this.w = e.w;
    }
    return E(y, [{ key: "setGlobalMarkerSize", value: function() {
      var e = this.w;
      if (e.globals.markers.size = Array.isArray(e.config.markers.size) ? e.config.markers.size : [e.config.markers.size], e.globals.markers.size.length > 0) {
        if (e.globals.markers.size.length < e.globals.series.length + 1) for (var t = 0; t <= e.globals.series.length; t++) e.globals.markers.size[t] === void 0 && e.globals.markers.size.push(e.globals.markers.size[0]);
      } else e.globals.markers.size = e.config.series.map(function(a) {
        return e.config.markers.size;
      });
    } }, { key: "plotChartMarkers", value: function(e, t, a, i) {
      var r, s = arguments.length > 4 && arguments[4] !== void 0 && arguments[4], o = this.w, n = t, h = e, d = null, c = new X(this.ctx), u = o.config.markers.discrete && o.config.markers.discrete.length;
      if ((o.globals.markers.size[t] > 0 || s || u) && (d = c.group({ class: s || u ? "" : "apexcharts-series-markers" })).attr("clip-path", "url(#gridRectMarkerMask".concat(o.globals.cuid, ")")), Array.isArray(h.x)) for (var p = 0; p < h.x.length; p++) {
        var m = a;
        a === 1 && p === 0 && (m = 0), a === 1 && p === 1 && (m = 1);
        var f = "apexcharts-marker";
        if (o.config.chart.type !== "line" && o.config.chart.type !== "area" || o.globals.comboCharts || o.config.tooltip.intersect || (f += " no-pointer-events"), (Array.isArray(o.config.markers.size) ? o.globals.markers.size[t] > 0 : o.config.markers.size > 0) || s || u) {
          z.isNumber(h.y[p]) ? f += " w".concat(z.randomId()) : f = "apexcharts-nullpoint";
          var b = this.getMarkerConfig({ cssClass: f, seriesIndex: t, dataPointIndex: m });
          o.config.series[n].data[m] && (o.config.series[n].data[m].fillColor && (b.pointFillColor = o.config.series[n].data[m].fillColor), o.config.series[n].data[m].strokeColor && (b.pointStrokeColor = o.config.series[n].data[m].strokeColor)), i !== void 0 && (b.pSize = i), (h.x[p] < -o.globals.markers.largestSize || h.x[p] > o.globals.gridWidth + o.globals.markers.largestSize || h.y[p] < -o.globals.markers.largestSize || h.y[p] > o.globals.gridHeight + o.globals.markers.largestSize) && (b.pSize = 0), (r = c.drawMarker(h.x[p], h.y[p], b)).attr("rel", m), r.attr("j", m), r.attr("index", t), r.node.setAttribute("default-marker-size", b.pSize), new Pe(this.ctx).setSelectionFilter(r, t, m), this.addEvents(r), d && d.add(r);
        } else o.globals.pointsArray[t] === void 0 && (o.globals.pointsArray[t] = []), o.globals.pointsArray[t].push([h.x[p], h.y[p]]);
      }
      return d;
    } }, { key: "getMarkerConfig", value: function(e) {
      var t = e.cssClass, a = e.seriesIndex, i = e.dataPointIndex, r = i === void 0 ? null : i, s = e.radius, o = s === void 0 ? null : s, n = e.size, h = n === void 0 ? null : n, d = e.strokeWidth, c = d === void 0 ? null : d, u = this.w, p = this.getMarkerStyle(a), m = h === null ? u.globals.markers.size[a] : h, f = u.config.markers;
      return r !== null && f.discrete.length && f.discrete.map(function(b) {
        b.seriesIndex === a && b.dataPointIndex === r && (p.pointStrokeColor = b.strokeColor, p.pointFillColor = b.fillColor, m = b.size, p.pointShape = b.shape);
      }), { pSize: o === null ? m : o, pRadius: o !== null ? o : f.radius, pointStrokeWidth: c !== null ? c : Array.isArray(f.strokeWidth) ? f.strokeWidth[a] : f.strokeWidth, pointStrokeColor: p.pointStrokeColor, pointFillColor: p.pointFillColor, shape: p.pointShape || (Array.isArray(f.shape) ? f.shape[a] : f.shape), class: t, pointStrokeOpacity: Array.isArray(f.strokeOpacity) ? f.strokeOpacity[a] : f.strokeOpacity, pointStrokeDashArray: Array.isArray(f.strokeDashArray) ? f.strokeDashArray[a] : f.strokeDashArray, pointFillOpacity: Array.isArray(f.fillOpacity) ? f.fillOpacity[a] : f.fillOpacity, seriesIndex: a };
    } }, { key: "addEvents", value: function(e) {
      var t = this.w, a = new X(this.ctx);
      e.node.addEventListener("mouseenter", a.pathMouseEnter.bind(this.ctx, e)), e.node.addEventListener("mouseleave", a.pathMouseLeave.bind(this.ctx, e)), e.node.addEventListener("mousedown", a.pathMouseDown.bind(this.ctx, e)), e.node.addEventListener("click", t.config.markers.onClick), e.node.addEventListener("dblclick", t.config.markers.onDblClick), e.node.addEventListener("touchstart", a.pathMouseDown.bind(this.ctx, e), { passive: !0 });
    } }, { key: "getMarkerStyle", value: function(e) {
      var t = this.w, a = t.globals.markers.colors, i = t.config.markers.strokeColor || t.config.markers.strokeColors;
      return { pointStrokeColor: Array.isArray(i) ? i[e] : i, pointFillColor: Array.isArray(a) ? a[e] : a };
    } }]), y;
  }(), pa = function() {
    function y(e) {
      T(this, y), this.ctx = e, this.w = e.w, this.initialAnim = this.w.config.chart.animations.enabled;
    }
    return E(y, [{ key: "draw", value: function(e, t, a) {
      var i = this.w, r = new X(this.ctx), s = a.realIndex, o = a.pointsPos, n = a.zRatio, h = a.elParent, d = r.group({ class: "apexcharts-series-markers apexcharts-series-".concat(i.config.chart.type) });
      if (d.attr("clip-path", "url(#gridRectMarkerMask".concat(i.globals.cuid, ")")), Array.isArray(o.x)) for (var c = 0; c < o.x.length; c++) {
        var u = t + 1, p = !0;
        t === 0 && c === 0 && (u = 0), t === 0 && c === 1 && (u = 1);
        var m = i.globals.markers.size[s];
        if (n !== 1 / 0) {
          var f = i.config.plotOptions.bubble;
          m = i.globals.seriesZ[s][u], f.zScaling && (m /= n), f.minBubbleRadius && m < f.minBubbleRadius && (m = f.minBubbleRadius), f.maxBubbleRadius && m > f.maxBubbleRadius && (m = f.maxBubbleRadius);
        }
        var b = o.x[c], v = o.y[c];
        if (m = m || 0, v !== null && i.globals.series[s][u] !== void 0 || (p = !1), p) {
          var w = this.drawPoint(b, v, m, s, u, t);
          d.add(w);
        }
        h.add(d);
      }
    } }, { key: "drawPoint", value: function(e, t, a, i, r, s) {
      var o = this.w, n = i, h = new ye(this.ctx), d = new Pe(this.ctx), c = new Ke(this.ctx), u = new ut(this.ctx), p = new X(this.ctx), m = u.getMarkerConfig({ cssClass: "apexcharts-marker", seriesIndex: n, dataPointIndex: r, radius: o.config.chart.type === "bubble" || o.globals.comboCharts && o.config.series[i] && o.config.series[i].type === "bubble" ? a : null }), f = c.fillPath({ seriesNumber: i, dataPointIndex: r, color: m.pointFillColor, patternUnits: "objectBoundingBox", value: o.globals.series[i][s] }), b = p.drawMarker(e, t, m);
      if (o.config.series[n].data[r] && o.config.series[n].data[r].fillColor && (f = o.config.series[n].data[r].fillColor), b.attr({ fill: f }), o.config.chart.dropShadow.enabled) {
        var v = o.config.chart.dropShadow;
        d.dropShadow(b, v, i);
      }
      if (!this.initialAnim || o.globals.dataChanged || o.globals.resized) o.globals.animationEnded = !0;
      else {
        var w = o.config.chart.animations.speed;
        h.animateMarker(b, w, o.globals.easing, function() {
          window.setTimeout(function() {
            h.animationCompleted(b);
          }, 100);
        });
      }
      return b.attr({ rel: r, j: r, index: i, "default-marker-size": m.pSize }), d.setSelectionFilter(b, i, r), u.addEvents(b), b.node.classList.add("apexcharts-marker"), b;
    } }, { key: "centerTextInBubble", value: function(e) {
      var t = this.w;
      return { y: e += parseInt(t.config.dataLabels.style.fontSize, 10) / 4 };
    } }]), y;
  }(), gt = function() {
    function y(e) {
      T(this, y), this.ctx = e, this.w = e.w;
    }
    return E(y, [{ key: "dataLabelsCorrection", value: function(e, t, a, i, r, s, o) {
      var n = this.w, h = !1, d = new X(this.ctx).getTextRects(a, o), c = d.width, u = d.height;
      t < 0 && (t = 0), t > n.globals.gridHeight + u && (t = n.globals.gridHeight + u / 2), n.globals.dataLabelsRects[i] === void 0 && (n.globals.dataLabelsRects[i] = []), n.globals.dataLabelsRects[i].push({ x: e, y: t, width: c, height: u });
      var p = n.globals.dataLabelsRects[i].length - 2, m = n.globals.lastDrawnDataLabelsIndexes[i] !== void 0 ? n.globals.lastDrawnDataLabelsIndexes[i][n.globals.lastDrawnDataLabelsIndexes[i].length - 1] : 0;
      if (n.globals.dataLabelsRects[i][p] !== void 0) {
        var f = n.globals.dataLabelsRects[i][m];
        (e > f.x + f.width || t > f.y + f.height || t + u < f.y || e + c < f.x) && (h = !0);
      }
      return (r === 0 || s) && (h = !0), { x: e, y: t, textRects: d, drawnextLabel: h };
    } }, { key: "drawDataLabel", value: function(e) {
      var t = this, a = e.type, i = e.pos, r = e.i, s = e.j, o = e.isRangeStart, n = e.strokeWidth, h = n === void 0 ? 2 : n, d = this.w, c = new X(this.ctx), u = d.config.dataLabels, p = 0, m = 0, f = s, b = null;
      if (d.globals.collapsedSeriesIndices.indexOf(r) !== -1 || !u.enabled || !Array.isArray(i.x)) return b;
      b = c.group({ class: "apexcharts-data-labels" });
      for (var v = 0; v < i.x.length; v++) if (p = i.x[v] + u.offsetX, m = i.y[v] + u.offsetY + h, !isNaN(p)) {
        s === 1 && v === 0 && (f = 0), s === 1 && v === 1 && (f = 1);
        var w = d.globals.series[r][f];
        a === "rangeArea" && (w = o ? d.globals.seriesRangeStart[r][f] : d.globals.seriesRangeEnd[r][f]);
        var l = "", g = function(k) {
          return d.config.dataLabels.formatter(k, { ctx: t.ctx, seriesIndex: r, dataPointIndex: f, w: d });
        };
        d.config.chart.type === "bubble" ? (l = g(w = d.globals.seriesZ[r][f]), m = i.y[v], m = new pa(this.ctx).centerTextInBubble(m, r, f).y) : w !== void 0 && (l = g(w));
        var x = d.config.dataLabels.textAnchor;
        d.globals.isSlopeChart && (x = f === 0 ? "end" : f === d.config.series[r].data.length - 1 ? "start" : "middle"), this.plotDataLabelsText({ x: p, y: m, text: l, i: r, j: f, parent: b, offsetCorrection: !0, dataLabelsConfig: d.config.dataLabels, textAnchor: x });
      }
      return b;
    } }, { key: "plotDataLabelsText", value: function(e) {
      var t = this.w, a = new X(this.ctx), i = e.x, r = e.y, s = e.i, o = e.j, n = e.text, h = e.textAnchor, d = e.fontSize, c = e.parent, u = e.dataLabelsConfig, p = e.color, m = e.alwaysDrawDataLabel, f = e.offsetCorrection, b = e.className, v = null;
      if (Array.isArray(t.config.dataLabels.enabledOnSeries) && t.config.dataLabels.enabledOnSeries.indexOf(s) < 0) return v;
      var w = { x: i, y: r, drawnextLabel: !0, textRects: null };
      f && (w = this.dataLabelsCorrection(i, r, n, s, o, m, parseInt(u.style.fontSize, 10))), t.globals.zoomed || (i = w.x, r = w.y), w.textRects && (i < -20 - w.textRects.width || i > t.globals.gridWidth + w.textRects.width + 30) && (n = "");
      var l = t.globals.dataLabels.style.colors[s];
      ((t.config.chart.type === "bar" || t.config.chart.type === "rangeBar") && t.config.plotOptions.bar.distributed || t.config.dataLabels.distributed) && (l = t.globals.dataLabels.style.colors[o]), typeof l == "function" && (l = l({ series: t.globals.series, seriesIndex: s, dataPointIndex: o, w: t })), p && (l = p);
      var g = u.offsetX, x = u.offsetY;
      if (t.config.chart.type !== "bar" && t.config.chart.type !== "rangeBar" || (g = 0, x = 0), t.globals.isSlopeChart && (o !== 0 && (g = -2 * u.offsetX + 5), o !== 0 && o !== t.config.series[s].data.length - 1 && (g = 0)), w.drawnextLabel) {
        if ((v = a.drawText({ width: 100, height: parseInt(u.style.fontSize, 10), x: i + g, y: r + x, foreColor: l, textAnchor: h || u.textAnchor, text: n, fontSize: d || u.style.fontSize, fontFamily: u.style.fontFamily, fontWeight: u.style.fontWeight || "normal" })).attr({ class: b || "apexcharts-datalabel", cx: i, cy: r }), u.dropShadow.enabled) {
          var k = u.dropShadow;
          new Pe(this.ctx).dropShadow(v, k);
        }
        c.add(v), t.globals.lastDrawnDataLabelsIndexes[s] === void 0 && (t.globals.lastDrawnDataLabelsIndexes[s] = []), t.globals.lastDrawnDataLabelsIndexes[s].push(o);
      }
      return v;
    } }, { key: "addBackgroundToDataLabel", value: function(e, t) {
      var a = this.w, i = a.config.dataLabels.background, r = i.padding, s = i.padding / 2, o = t.width, n = t.height, h = new X(this.ctx).drawRect(t.x - r, t.y - s / 2, o + 2 * r, n + s, i.borderRadius, a.config.chart.background !== "transparent" && a.config.chart.background ? a.config.chart.background : "#fff", i.opacity, i.borderWidth, i.borderColor);
      return i.dropShadow.enabled && new Pe(this.ctx).dropShadow(h, i.dropShadow), h;
    } }, { key: "dataLabelsBackground", value: function() {
      var e = this.w;
      if (e.config.chart.type !== "bubble") for (var t = e.globals.dom.baseEl.querySelectorAll(".apexcharts-datalabels text"), a = 0; a < t.length; a++) {
        var i = t[a], r = i.getBBox(), s = null;
        if (r.width && r.height && (s = this.addBackgroundToDataLabel(i, r)), s) {
          i.parentNode.insertBefore(s.node, i);
          var o = i.getAttribute("fill");
          e.config.chart.animations.enabled && !e.globals.resized && !e.globals.dataChanged ? s.animate().attr({ fill: o }) : s.attr({ fill: o }), i.setAttribute("fill", e.config.dataLabels.background.foreColor);
        }
      }
    } }, { key: "bringForward", value: function() {
      for (var e = this.w, t = e.globals.dom.baseEl.querySelectorAll(".apexcharts-datalabels"), a = e.globals.dom.baseEl.querySelector(".apexcharts-plot-series:last-child"), i = 0; i < t.length; i++) a && a.insertBefore(t[i], a.nextSibling);
    } }]), y;
  }(), qe = function() {
    function y(e) {
      T(this, y), this.ctx = e, this.w = e.w, this.legendInactiveClass = "legend-mouseover-inactive";
    }
    return E(y, [{ key: "getAllSeriesEls", value: function() {
      return this.w.globals.dom.baseEl.getElementsByClassName("apexcharts-series");
    } }, { key: "getSeriesByName", value: function(e) {
      return this.w.globals.dom.baseEl.querySelector(".apexcharts-inner .apexcharts-series[seriesName='".concat(z.escapeString(e), "']"));
    } }, { key: "isSeriesHidden", value: function(e) {
      var t = this.getSeriesByName(e), a = parseInt(t.getAttribute("data:realIndex"), 10);
      return { isHidden: t.classList.contains("apexcharts-series-collapsed"), realIndex: a };
    } }, { key: "addCollapsedClassToSeries", value: function(e, t) {
      var a = this.w;
      function i(r) {
        for (var s = 0; s < r.length; s++) r[s].index === t && e.node.classList.add("apexcharts-series-collapsed");
      }
      i(a.globals.collapsedSeries), i(a.globals.ancillaryCollapsedSeries);
    } }, { key: "toggleSeries", value: function(e) {
      var t = this.isSeriesHidden(e);
      return this.ctx.legend.legendHelpers.toggleDataSeries(t.realIndex, t.isHidden), t.isHidden;
    } }, { key: "showSeries", value: function(e) {
      var t = this.isSeriesHidden(e);
      t.isHidden && this.ctx.legend.legendHelpers.toggleDataSeries(t.realIndex, !0);
    } }, { key: "hideSeries", value: function(e) {
      var t = this.isSeriesHidden(e);
      t.isHidden || this.ctx.legend.legendHelpers.toggleDataSeries(t.realIndex, !1);
    } }, { key: "resetSeries", value: function() {
      var e = !(arguments.length > 0 && arguments[0] !== void 0) || arguments[0], t = !(arguments.length > 1 && arguments[1] !== void 0) || arguments[1], a = !(arguments.length > 2 && arguments[2] !== void 0) || arguments[2], i = this.w, r = z.clone(i.globals.initialSeries);
      i.globals.previousPaths = [], a ? (i.globals.collapsedSeries = [], i.globals.ancillaryCollapsedSeries = [], i.globals.collapsedSeriesIndices = [], i.globals.ancillaryCollapsedSeriesIndices = []) : r = this.emptyCollapsedSeries(r), i.config.series = r, e && (t && (i.globals.zoomed = !1, this.ctx.updateHelpers.revertDefaultAxisMinMax()), this.ctx.updateHelpers._updateSeries(r, i.config.chart.animations.dynamicAnimation.enabled));
    } }, { key: "emptyCollapsedSeries", value: function(e) {
      for (var t = this.w, a = 0; a < e.length; a++) t.globals.collapsedSeriesIndices.indexOf(a) > -1 && (e[a].data = []);
      return e;
    } }, { key: "highlightSeries", value: function(e) {
      var t = this.w, a = this.getSeriesByName(e), i = parseInt(a == null ? void 0 : a.getAttribute("data:realIndex"), 10), r = t.globals.dom.baseEl.querySelectorAll(".apexcharts-series, .apexcharts-datalabels, .apexcharts-yaxis"), s = null, o = null, n = null;
      if (t.globals.axisCharts || t.config.chart.type === "radialBar") if (t.globals.axisCharts) {
        s = t.globals.dom.baseEl.querySelector(".apexcharts-series[data\\:realIndex='".concat(i, "']")), o = t.globals.dom.baseEl.querySelector(".apexcharts-datalabels[data\\:realIndex='".concat(i, "']"));
        var h = t.globals.seriesYAxisReverseMap[i];
        n = t.globals.dom.baseEl.querySelector(".apexcharts-yaxis[rel='".concat(h, "']"));
      } else s = t.globals.dom.baseEl.querySelector(".apexcharts-series[rel='".concat(i + 1, "']"));
      else s = t.globals.dom.baseEl.querySelector(".apexcharts-series[rel='".concat(i + 1, "'] path"));
      for (var d = 0; d < r.length; d++) r[d].classList.add(this.legendInactiveClass);
      if (s) t.globals.axisCharts || s.parentNode.classList.remove(this.legendInactiveClass), s.classList.remove(this.legendInactiveClass), o !== null && o.classList.remove(this.legendInactiveClass), n !== null && n.classList.remove(this.legendInactiveClass);
      else for (var c = 0; c < r.length; c++) r[c].classList.remove(this.legendInactiveClass);
    } }, { key: "toggleSeriesOnHover", value: function(e, t) {
      var a = this.w;
      t || (t = e.target);
      var i = a.globals.dom.baseEl.querySelectorAll(".apexcharts-series, .apexcharts-datalabels, .apexcharts-yaxis");
      if (e.type === "mousemove") {
        var r = parseInt(t.getAttribute("rel"), 10) - 1;
        this.highlightSeries(a.globals.seriesNames[r]);
      } else if (e.type === "mouseout") for (var s = 0; s < i.length; s++) i[s].classList.remove(this.legendInactiveClass);
    } }, { key: "highlightRangeInSeries", value: function(e, t) {
      var a = this, i = this.w, r = i.globals.dom.baseEl.getElementsByClassName("apexcharts-heatmap-rect"), s = function(h) {
        for (var d = 0; d < r.length; d++) r[d].classList[h](a.legendInactiveClass);
      };
      if (e.type === "mousemove") {
        var o = parseInt(t.getAttribute("rel"), 10) - 1;
        s("add");
        var n = i.config.plotOptions.heatmap.colorScale.ranges;
        (function(h, d) {
          for (var c = 0; c < r.length; c++) {
            var u = Number(r[c].getAttribute("val"));
            u >= h.from && (u < h.to || h.to === d && u === d) && r[c].classList.remove(a.legendInactiveClass);
          }
        })(n[o], n.reduce(function(h, d) {
          return Math.max(h, d.to);
        }, 0));
      } else e.type === "mouseout" && s("remove");
    } }, { key: "getActiveConfigSeriesIndex", value: function() {
      var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "asc", t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [], a = this.w, i = 0;
      if (a.config.series.length > 1) {
        for (var r = a.config.series.map(function(o, n) {
          return o.data && o.data.length > 0 && a.globals.collapsedSeriesIndices.indexOf(n) === -1 && (!a.globals.comboCharts || t.length === 0 || t.length && t.indexOf(a.config.series[n].type) > -1) ? n : -1;
        }), s = e === "asc" ? 0 : r.length - 1; e === "asc" ? s < r.length : s >= 0; e === "asc" ? s++ : s--) if (r[s] !== -1) {
          i = r[s];
          break;
        }
      }
      return i;
    } }, { key: "getBarSeriesIndices", value: function() {
      return this.w.globals.comboCharts ? this.w.config.series.map(function(e, t) {
        return e.type === "bar" || e.type === "column" ? t : -1;
      }).filter(function(e) {
        return e !== -1;
      }) : this.w.config.series.map(function(e, t) {
        return t;
      });
    } }, { key: "getPreviousPaths", value: function() {
      var e = this.w;
      function t(s, o, n) {
        for (var h = s[o].childNodes, d = { type: n, paths: [], realIndex: s[o].getAttribute("data:realIndex") }, c = 0; c < h.length; c++) if (h[c].hasAttribute("pathTo")) {
          var u = h[c].getAttribute("pathTo");
          d.paths.push({ d: u });
        }
        e.globals.previousPaths.push(d);
      }
      e.globals.previousPaths = [], ["line", "area", "bar", "rangebar", "rangeArea", "candlestick", "radar"].forEach(function(s) {
        for (var o, n = (o = s, e.globals.dom.baseEl.querySelectorAll(".apexcharts-".concat(o, "-series .apexcharts-series"))), h = 0; h < n.length; h++) t(n, h, s);
      }), this.handlePrevBubbleScatterPaths("bubble"), this.handlePrevBubbleScatterPaths("scatter");
      var a = e.globals.dom.baseEl.querySelectorAll(".apexcharts-".concat(e.config.chart.type, " .apexcharts-series"));
      if (a.length > 0) for (var i = function(s) {
        for (var o = e.globals.dom.baseEl.querySelectorAll(".apexcharts-".concat(e.config.chart.type, " .apexcharts-series[data\\:realIndex='").concat(s, "'] rect")), n = [], h = function(c) {
          var u = function(m) {
            return o[c].getAttribute(m);
          }, p = { x: parseFloat(u("x")), y: parseFloat(u("y")), width: parseFloat(u("width")), height: parseFloat(u("height")) };
          n.push({ rect: p, color: o[c].getAttribute("color") });
        }, d = 0; d < o.length; d++) h(d);
        e.globals.previousPaths.push(n);
      }, r = 0; r < a.length; r++) i(r);
      e.globals.axisCharts || (e.globals.previousPaths = e.globals.series);
    } }, { key: "handlePrevBubbleScatterPaths", value: function(e) {
      var t = this.w, a = t.globals.dom.baseEl.querySelectorAll(".apexcharts-".concat(e, "-series .apexcharts-series"));
      if (a.length > 0) for (var i = 0; i < a.length; i++) {
        for (var r = t.globals.dom.baseEl.querySelectorAll(".apexcharts-".concat(e, "-series .apexcharts-series[data\\:realIndex='").concat(i, "'] circle")), s = [], o = 0; o < r.length; o++) s.push({ x: r[o].getAttribute("cx"), y: r[o].getAttribute("cy"), r: r[o].getAttribute("r") });
        t.globals.previousPaths.push(s);
      }
    } }, { key: "clearPreviousPaths", value: function() {
      var e = this.w;
      e.globals.previousPaths = [], e.globals.allSeriesCollapsed = !1;
    } }, { key: "handleNoData", value: function() {
      var e = this.w, t = e.config.noData, a = new X(this.ctx), i = e.globals.svgWidth / 2, r = e.globals.svgHeight / 2, s = "middle";
      if (e.globals.noData = !0, e.globals.animationEnded = !0, t.align === "left" ? (i = 10, s = "start") : t.align === "right" && (i = e.globals.svgWidth - 10, s = "end"), t.verticalAlign === "top" ? r = 50 : t.verticalAlign === "bottom" && (r = e.globals.svgHeight - 50), i += t.offsetX, r = r + parseInt(t.style.fontSize, 10) + 2 + t.offsetY, t.text !== void 0 && t.text !== "") {
        var o = a.drawText({ x: i, y: r, text: t.text, textAnchor: s, fontSize: t.style.fontSize, fontFamily: t.style.fontFamily, foreColor: t.style.color, opacity: 1, class: "apexcharts-text-nodata" });
        e.globals.dom.Paper.add(o);
      }
    } }, { key: "setNullSeriesToZeroValues", value: function(e) {
      for (var t = this.w, a = 0; a < e.length; a++) if (e[a].length === 0) for (var i = 0; i < e[t.globals.maxValsInArrayIndex].length; i++) e[a].push(0);
      return e;
    } }, { key: "hasAllSeriesEqualX", value: function() {
      for (var e = !0, t = this.w, a = this.filteredSeriesX(), i = 0; i < a.length - 1; i++) if (a[i][0] !== a[i + 1][0]) {
        e = !1;
        break;
      }
      return t.globals.allSeriesHasEqualX = e, e;
    } }, { key: "filteredSeriesX", value: function() {
      var e = this.w.globals.seriesX.map(function(t) {
        return t.length > 0 ? t : [];
      });
      return e;
    } }]), y;
  }(), jt = function() {
    function y(e) {
      T(this, y), this.ctx = e, this.w = e.w, this.twoDSeries = [], this.threeDSeries = [], this.twoDSeriesX = [], this.seriesGoals = [], this.coreUtils = new Te(this.ctx);
    }
    return E(y, [{ key: "isMultiFormat", value: function() {
      return this.isFormatXY() || this.isFormat2DArray();
    } }, { key: "isFormatXY", value: function() {
      var e = this.w.config.series.slice(), t = new qe(this.ctx);
      if (this.activeSeriesIndex = t.getActiveConfigSeriesIndex(), e[this.activeSeriesIndex].data !== void 0 && e[this.activeSeriesIndex].data.length > 0 && e[this.activeSeriesIndex].data[0] !== null && e[this.activeSeriesIndex].data[0].x !== void 0 && e[this.activeSeriesIndex].data[0] !== null) return !0;
    } }, { key: "isFormat2DArray", value: function() {
      var e = this.w.config.series.slice(), t = new qe(this.ctx);
      if (this.activeSeriesIndex = t.getActiveConfigSeriesIndex(), e[this.activeSeriesIndex].data !== void 0 && e[this.activeSeriesIndex].data.length > 0 && e[this.activeSeriesIndex].data[0] !== void 0 && e[this.activeSeriesIndex].data[0] !== null && e[this.activeSeriesIndex].data[0].constructor === Array) return !0;
    } }, { key: "handleFormat2DArray", value: function(e, t) {
      for (var a = this.w.config, i = this.w.globals, r = a.chart.type === "boxPlot" || a.series[t].type === "boxPlot", s = 0; s < e[t].data.length; s++) if (e[t].data[s][1] !== void 0 && (Array.isArray(e[t].data[s][1]) && e[t].data[s][1].length === 4 && !r ? this.twoDSeries.push(z.parseNumber(e[t].data[s][1][3])) : e[t].data[s].length >= 5 ? this.twoDSeries.push(z.parseNumber(e[t].data[s][4])) : this.twoDSeries.push(z.parseNumber(e[t].data[s][1])), i.dataFormatXNumeric = !0), a.xaxis.type === "datetime") {
        var o = new Date(e[t].data[s][0]);
        o = new Date(o).getTime(), this.twoDSeriesX.push(o);
      } else this.twoDSeriesX.push(e[t].data[s][0]);
      for (var n = 0; n < e[t].data.length; n++) e[t].data[n][2] !== void 0 && (this.threeDSeries.push(e[t].data[n][2]), i.isDataXYZ = !0);
    } }, { key: "handleFormatXY", value: function(e, t) {
      var a = this.w.config, i = this.w.globals, r = new de(this.ctx), s = t;
      i.collapsedSeriesIndices.indexOf(t) > -1 && (s = this.activeSeriesIndex);
      for (var o = 0; o < e[t].data.length; o++) e[t].data[o].y !== void 0 && (Array.isArray(e[t].data[o].y) ? this.twoDSeries.push(z.parseNumber(e[t].data[o].y[e[t].data[o].y.length - 1])) : this.twoDSeries.push(z.parseNumber(e[t].data[o].y))), e[t].data[o].goals !== void 0 && Array.isArray(e[t].data[o].goals) ? (this.seriesGoals[t] === void 0 && (this.seriesGoals[t] = []), this.seriesGoals[t].push(e[t].data[o].goals)) : (this.seriesGoals[t] === void 0 && (this.seriesGoals[t] = []), this.seriesGoals[t].push(null));
      for (var n = 0; n < e[s].data.length; n++) {
        var h = typeof e[s].data[n].x == "string", d = Array.isArray(e[s].data[n].x), c = !d && !!r.isValidDate(e[s].data[n].x);
        if (h || c) if (h || a.xaxis.convertedCatToNumeric) {
          var u = i.isBarHorizontal && i.isRangeData;
          a.xaxis.type !== "datetime" || u ? (this.fallbackToCategory = !0, this.twoDSeriesX.push(e[s].data[n].x), isNaN(e[s].data[n].x) || this.w.config.xaxis.type === "category" || typeof e[s].data[n].x == "string" || (i.isXNumeric = !0)) : this.twoDSeriesX.push(r.parseDate(e[s].data[n].x));
        } else a.xaxis.type === "datetime" ? this.twoDSeriesX.push(r.parseDate(e[s].data[n].x.toString())) : (i.dataFormatXNumeric = !0, i.isXNumeric = !0, this.twoDSeriesX.push(parseFloat(e[s].data[n].x)));
        else d ? (this.fallbackToCategory = !0, this.twoDSeriesX.push(e[s].data[n].x)) : (i.isXNumeric = !0, i.dataFormatXNumeric = !0, this.twoDSeriesX.push(e[s].data[n].x));
      }
      if (e[t].data[0] && e[t].data[0].z !== void 0) {
        for (var p = 0; p < e[t].data.length; p++) this.threeDSeries.push(e[t].data[p].z);
        i.isDataXYZ = !0;
      }
    } }, { key: "handleRangeData", value: function(e, t) {
      var a = this.w.globals, i = {};
      return this.isFormat2DArray() ? i = this.handleRangeDataFormat("array", e, t) : this.isFormatXY() && (i = this.handleRangeDataFormat("xy", e, t)), a.seriesRangeStart.push(i.start === void 0 ? [] : i.start), a.seriesRangeEnd.push(i.end === void 0 ? [] : i.end), a.seriesRange.push(i.rangeUniques), a.seriesRange.forEach(function(r, s) {
        r && r.forEach(function(o, n) {
          o.y.forEach(function(h, d) {
            for (var c = 0; c < o.y.length; c++) if (d !== c) {
              var u = h.y1, p = h.y2, m = o.y[c].y1;
              u <= o.y[c].y2 && m <= p && (o.overlaps.indexOf(h.rangeName) < 0 && o.overlaps.push(h.rangeName), o.overlaps.indexOf(o.y[c].rangeName) < 0 && o.overlaps.push(o.y[c].rangeName));
            }
          });
        });
      }), i;
    } }, { key: "handleCandleStickBoxData", value: function(e, t) {
      var a = this.w.globals, i = {};
      return this.isFormat2DArray() ? i = this.handleCandleStickBoxDataFormat("array", e, t) : this.isFormatXY() && (i = this.handleCandleStickBoxDataFormat("xy", e, t)), a.seriesCandleO[t] = i.o, a.seriesCandleH[t] = i.h, a.seriesCandleM[t] = i.m, a.seriesCandleL[t] = i.l, a.seriesCandleC[t] = i.c, i;
    } }, { key: "handleRangeDataFormat", value: function(e, t, a) {
      var i = [], r = [], s = t[a].data.filter(function(d, c, u) {
        return c === u.findIndex(function(p) {
          return p.x === d.x;
        });
      }).map(function(d, c) {
        return { x: d.x, overlaps: [], y: [] };
      });
      if (e === "array") for (var o = 0; o < t[a].data.length; o++) Array.isArray(t[a].data[o]) ? (i.push(t[a].data[o][1][0]), r.push(t[a].data[o][1][1])) : (i.push(t[a].data[o]), r.push(t[a].data[o]));
      else if (e === "xy") for (var n = function(d) {
        var c = Array.isArray(t[a].data[d].y), u = z.randomId(), p = t[a].data[d].x, m = { y1: c ? t[a].data[d].y[0] : t[a].data[d].y, y2: c ? t[a].data[d].y[1] : t[a].data[d].y, rangeName: u };
        t[a].data[d].rangeName = u;
        var f = s.findIndex(function(b) {
          return b.x === p;
        });
        s[f].y.push(m), i.push(m.y1), r.push(m.y2);
      }, h = 0; h < t[a].data.length; h++) n(h);
      return { start: i, end: r, rangeUniques: s };
    } }, { key: "handleCandleStickBoxDataFormat", value: function(e, t, a) {
      var i = this.w, r = i.config.chart.type === "boxPlot" || i.config.series[a].type === "boxPlot", s = [], o = [], n = [], h = [], d = [];
      if (e === "array") if (r && t[a].data[0].length === 6 || !r && t[a].data[0].length === 5) for (var c = 0; c < t[a].data.length; c++) s.push(t[a].data[c][1]), o.push(t[a].data[c][2]), r ? (n.push(t[a].data[c][3]), h.push(t[a].data[c][4]), d.push(t[a].data[c][5])) : (h.push(t[a].data[c][3]), d.push(t[a].data[c][4]));
      else for (var u = 0; u < t[a].data.length; u++) Array.isArray(t[a].data[u][1]) && (s.push(t[a].data[u][1][0]), o.push(t[a].data[u][1][1]), r ? (n.push(t[a].data[u][1][2]), h.push(t[a].data[u][1][3]), d.push(t[a].data[u][1][4])) : (h.push(t[a].data[u][1][2]), d.push(t[a].data[u][1][3])));
      else if (e === "xy") for (var p = 0; p < t[a].data.length; p++) Array.isArray(t[a].data[p].y) && (s.push(t[a].data[p].y[0]), o.push(t[a].data[p].y[1]), r ? (n.push(t[a].data[p].y[2]), h.push(t[a].data[p].y[3]), d.push(t[a].data[p].y[4])) : (h.push(t[a].data[p].y[2]), d.push(t[a].data[p].y[3])));
      return { o: s, h: o, m: n, l: h, c: d };
    } }, { key: "parseDataAxisCharts", value: function(e) {
      var t = this, a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : this.ctx, i = this.w.config, r = this.w.globals, s = new de(a), o = i.labels.length > 0 ? i.labels.slice() : i.xaxis.categories.slice();
      r.isRangeBar = i.chart.type === "rangeBar" && r.isBarHorizontal, r.hasXaxisGroups = i.xaxis.type === "category" && i.xaxis.group.groups.length > 0, r.hasXaxisGroups && (r.groups = i.xaxis.group.groups), e.forEach(function(p, m) {
        p.name !== void 0 ? r.seriesNames.push(p.name) : r.seriesNames.push("series-" + parseInt(m + 1, 10));
      }), this.coreUtils.setSeriesYAxisMappings();
      var n = [], h = K(new Set(i.series.map(function(p) {
        return p.group;
      })));
      i.series.forEach(function(p, m) {
        var f = h.indexOf(p.group);
        n[f] || (n[f] = []), n[f].push(r.seriesNames[m]);
      }), r.seriesGroups = n;
      for (var d = function() {
        for (var p = 0; p < o.length; p++) if (typeof o[p] == "string") {
          if (!s.isValidDate(o[p])) throw new Error("You have provided invalid Date format. Please provide a valid JavaScript Date");
          t.twoDSeriesX.push(s.parseDate(o[p]));
        } else t.twoDSeriesX.push(o[p]);
      }, c = 0; c < e.length; c++) {
        if (this.twoDSeries = [], this.twoDSeriesX = [], this.threeDSeries = [], e[c].data === void 0) return void console.error("It is a possibility that you may have not included 'data' property in series.");
        if (i.chart.type !== "rangeBar" && i.chart.type !== "rangeArea" && e[c].type !== "rangeBar" && e[c].type !== "rangeArea" || (r.isRangeData = !0, i.chart.type !== "rangeBar" && i.chart.type !== "rangeArea" || this.handleRangeData(e, c)), this.isMultiFormat()) this.isFormat2DArray() ? this.handleFormat2DArray(e, c) : this.isFormatXY() && this.handleFormatXY(e, c), i.chart.type !== "candlestick" && e[c].type !== "candlestick" && i.chart.type !== "boxPlot" && e[c].type !== "boxPlot" || this.handleCandleStickBoxData(e, c), r.series.push(this.twoDSeries), r.labels.push(this.twoDSeriesX), r.seriesX.push(this.twoDSeriesX), r.seriesGoals = this.seriesGoals, c !== this.activeSeriesIndex || this.fallbackToCategory || (r.isXNumeric = !0);
        else {
          i.xaxis.type === "datetime" ? (r.isXNumeric = !0, d(), r.seriesX.push(this.twoDSeriesX)) : i.xaxis.type === "numeric" && (r.isXNumeric = !0, o.length > 0 && (this.twoDSeriesX = o, r.seriesX.push(this.twoDSeriesX))), r.labels.push(this.twoDSeriesX);
          var u = e[c].data.map(function(p) {
            return z.parseNumber(p);
          });
          r.series.push(u);
        }
        r.seriesZ.push(this.threeDSeries), e[c].color !== void 0 ? r.seriesColors.push(e[c].color) : r.seriesColors.push(void 0);
      }
      return this.w;
    } }, { key: "parseDataNonAxisCharts", value: function(e) {
      var t = this.w.globals, a = this.w.config;
      t.series = e.slice(), t.seriesNames = a.labels.slice();
      for (var i = 0; i < t.series.length; i++) t.seriesNames[i] === void 0 && t.seriesNames.push("series-" + (i + 1));
      return this.w;
    } }, { key: "handleExternalLabelsData", value: function(e) {
      var t = this.w.config, a = this.w.globals;
      t.xaxis.categories.length > 0 ? a.labels = t.xaxis.categories : t.labels.length > 0 ? a.labels = t.labels.slice() : this.fallbackToCategory ? (a.labels = a.labels[0], a.seriesRange.length && (a.seriesRange.map(function(i) {
        i.forEach(function(r) {
          a.labels.indexOf(r.x) < 0 && r.x && a.labels.push(r.x);
        });
      }), a.labels = Array.from(new Set(a.labels.map(JSON.stringify)), JSON.parse)), t.xaxis.convertedCatToNumeric && (new xt(t).convertCatToNumericXaxis(t, this.ctx, a.seriesX[0]), this._generateExternalLabels(e))) : this._generateExternalLabels(e);
    } }, { key: "_generateExternalLabels", value: function(e) {
      var t = this.w.globals, a = this.w.config, i = [];
      if (t.axisCharts) {
        if (t.series.length > 0) if (this.isFormatXY()) for (var r = a.series.map(function(c, u) {
          return c.data.filter(function(p, m, f) {
            return f.findIndex(function(b) {
              return b.x === p.x;
            }) === m;
          });
        }), s = r.reduce(function(c, u, p, m) {
          return m[c].length > u.length ? c : p;
        }, 0), o = 0; o < r[s].length; o++) i.push(o + 1);
        else for (var n = 0; n < t.series[t.maxValsInArrayIndex].length; n++) i.push(n + 1);
        t.seriesX = [];
        for (var h = 0; h < e.length; h++) t.seriesX.push(i);
        this.w.globals.isBarHorizontal || (t.isXNumeric = !0);
      }
      if (i.length === 0) {
        i = t.axisCharts ? [] : t.series.map(function(c, u) {
          return u + 1;
        });
        for (var d = 0; d < e.length; d++) t.seriesX.push(i);
      }
      t.labels = i, a.xaxis.convertedCatToNumeric && (t.categoryLabels = i.map(function(c) {
        return a.xaxis.labels.formatter(c);
      })), t.noLabelsProvided = !0;
    } }, { key: "parseData", value: function(e) {
      var t = this.w, a = t.config, i = t.globals;
      if (this.excludeCollapsedSeriesInYAxis(), this.fallbackToCategory = !1, this.ctx.core.resetGlobals(), this.ctx.core.isMultipleY(), i.axisCharts ? (this.parseDataAxisCharts(e), this.coreUtils.getLargestSeries()) : this.parseDataNonAxisCharts(e), a.chart.stacked) {
        var r = new qe(this.ctx);
        i.series = r.setNullSeriesToZeroValues(i.series);
      }
      this.coreUtils.getSeriesTotals(), i.axisCharts && (i.stackedSeriesTotals = this.coreUtils.getStackedSeriesTotals(), i.stackedSeriesTotalsByGroups = this.coreUtils.getStackedSeriesTotalsByGroups()), this.coreUtils.getPercentSeries(), i.dataFormatXNumeric || i.isXNumeric && (a.xaxis.type !== "numeric" || a.labels.length !== 0 || a.xaxis.categories.length !== 0) || this.handleExternalLabelsData(e);
      for (var s = this.coreUtils.getCategoryLabels(i.labels), o = 0; o < s.length; o++) if (Array.isArray(s[o])) {
        i.isMultiLineX = !0;
        break;
      }
    } }, { key: "excludeCollapsedSeriesInYAxis", value: function() {
      var e = this.w, t = [];
      e.globals.seriesYAxisMap.forEach(function(a, i) {
        var r = 0;
        a.forEach(function(s) {
          e.globals.collapsedSeriesIndices.indexOf(s) !== -1 && r++;
        }), r > 0 && r == a.length && t.push(i);
      }), e.globals.ignoreYAxisIndexes = t.map(function(a) {
        return a;
      });
    } }]), y;
  }(), Lt = function() {
    function y(e) {
      T(this, y), this.ctx = e, this.w = e.w;
    }
    return E(y, [{ key: "scaleSvgNode", value: function(e, t) {
      var a = parseFloat(e.getAttributeNS(null, "width")), i = parseFloat(e.getAttributeNS(null, "height"));
      e.setAttributeNS(null, "width", a * t), e.setAttributeNS(null, "height", i * t), e.setAttributeNS(null, "viewBox", "0 0 " + a + " " + i);
    } }, { key: "getSvgString", value: function() {
      var e = this;
      return new Promise(function(t) {
        var a = e.w, i = a.config.chart.toolbar.export.width, r = a.config.chart.toolbar.export.scale || i / a.globals.svgWidth;
        r || (r = 1);
        var s = e.w.globals.dom.Paper.svg(), o = e.w.globals.dom.Paper.node.cloneNode(!0);
        r !== 1 && e.scaleSvgNode(o, r), e.convertImagesToBase64(o).then(function() {
          s = new XMLSerializer().serializeToString(o), t(s.replace(/&nbsp;/g, "&#160;"));
        });
      });
    } }, { key: "convertImagesToBase64", value: function(e) {
      var t = this, a = e.getElementsByTagName("image"), i = Array.from(a).map(function(r) {
        var s = r.getAttributeNS("http://www.w3.org/1999/xlink", "href");
        return s && !s.startsWith("data:") ? t.getBase64FromUrl(s).then(function(o) {
          r.setAttributeNS("http://www.w3.org/1999/xlink", "href", o);
        }).catch(function(o) {
          console.error("Error converting image to base64:", o);
        }) : Promise.resolve();
      });
      return Promise.all(i);
    } }, { key: "getBase64FromUrl", value: function(e) {
      return new Promise(function(t, a) {
        var i = new Image();
        i.crossOrigin = "Anonymous", i.onload = function() {
          var r = document.createElement("canvas");
          r.width = i.width, r.height = i.height, r.getContext("2d").drawImage(i, 0, 0), t(r.toDataURL());
        }, i.onerror = a, i.src = e;
      });
    } }, { key: "cleanup", value: function() {
      var e = this.w, t = e.globals.dom.baseEl.getElementsByClassName("apexcharts-xcrosshairs"), a = e.globals.dom.baseEl.getElementsByClassName("apexcharts-ycrosshairs"), i = e.globals.dom.baseEl.querySelectorAll(".apexcharts-zoom-rect, .apexcharts-selection-rect");
      Array.prototype.forEach.call(i, function(r) {
        r.setAttribute("width", 0);
      }), t && t[0] && (t[0].setAttribute("x", -500), t[0].setAttribute("x1", -500), t[0].setAttribute("x2", -500)), a && a[0] && (a[0].setAttribute("y", -100), a[0].setAttribute("y1", -100), a[0].setAttribute("y2", -100));
    } }, { key: "svgUrl", value: function() {
      var e = this;
      return new Promise(function(t) {
        e.cleanup(), e.getSvgString().then(function(a) {
          var i = new Blob([a], { type: "image/svg+xml;charset=utf-8" });
          t(URL.createObjectURL(i));
        });
      });
    } }, { key: "dataURI", value: function(e) {
      var t = this;
      return new Promise(function(a) {
        var i = t.w, r = e ? e.scale || e.width / i.globals.svgWidth : 1;
        t.cleanup();
        var s = document.createElement("canvas");
        s.width = i.globals.svgWidth * r, s.height = parseInt(i.globals.dom.elWrap.style.height, 10) * r;
        var o = i.config.chart.background !== "transparent" && i.config.chart.background ? i.config.chart.background : "#fff", n = s.getContext("2d");
        n.fillStyle = o, n.fillRect(0, 0, s.width * r, s.height * r), t.getSvgString().then(function(h) {
          var d = "data:image/svg+xml," + encodeURIComponent(h), c = new Image();
          c.crossOrigin = "anonymous", c.onload = function() {
            if (n.drawImage(c, 0, 0), s.msToBlob) {
              var u = s.msToBlob();
              a({ blob: u });
            } else {
              var p = s.toDataURL("image/png");
              a({ imgURI: p });
            }
          }, c.src = d;
        });
      });
    } }, { key: "exportToSVG", value: function() {
      var e = this;
      this.svgUrl().then(function(t) {
        e.triggerDownload(t, e.w.config.chart.toolbar.export.svg.filename, ".svg");
      });
    } }, { key: "exportToPng", value: function() {
      var e = this, t = this.w.config.chart.toolbar.export.scale, a = this.w.config.chart.toolbar.export.width, i = t ? { scale: t } : a ? { width: a } : void 0;
      this.dataURI(i).then(function(r) {
        var s = r.imgURI, o = r.blob;
        o ? navigator.msSaveOrOpenBlob(o, e.w.globals.chartID + ".png") : e.triggerDownload(s, e.w.config.chart.toolbar.export.png.filename, ".png");
      });
    } }, { key: "exportToCSV", value: function(e) {
      var t = this, a = e.series, i = e.fileName, r = e.columnDelimiter, s = r === void 0 ? "," : r, o = e.lineDelimiter, n = o === void 0 ? `
` : o, h = this.w;
      a || (a = h.config.series);
      var d, c, u = [], p = [], m = "", f = h.globals.series.map(function(S, A) {
        return h.globals.collapsedSeriesIndices.indexOf(A) === -1 ? S : [];
      }), b = function(S) {
        return typeof h.config.chart.toolbar.export.csv.categoryFormatter == "function" ? h.config.chart.toolbar.export.csv.categoryFormatter(S) : h.config.xaxis.type === "datetime" && String(S).length >= 10 ? new Date(S).toDateString() : z.isNumber(S) ? S : S.split(s).join("");
      }, v = function(S) {
        return typeof h.config.chart.toolbar.export.csv.valueFormatter == "function" ? h.config.chart.toolbar.export.csv.valueFormatter(S) : S;
      }, w = Math.max.apply(Math, K(a.map(function(S) {
        return S.data ? S.data.length : 0;
      }))), l = new jt(this.ctx), g = new Le(this.ctx), x = function(S) {
        var A = "";
        if (h.globals.axisCharts) {
          if (h.config.xaxis.type === "category" || h.config.xaxis.convertedCatToNumeric) if (h.globals.isBarHorizontal) {
            var L = h.globals.yLabelFormatters[0], I = new qe(t.ctx).getActiveConfigSeriesIndex();
            A = L(h.globals.labels[S], { seriesIndex: I, dataPointIndex: S, w: h });
          } else A = g.getLabel(h.globals.labels, h.globals.timescaleLabels, 0, S).text;
          h.config.xaxis.type === "datetime" && (h.config.xaxis.categories.length ? A = h.config.xaxis.categories[S] : h.config.labels.length && (A = h.config.labels[S]));
        } else A = h.config.labels[S];
        return A === null ? "nullvalue" : (Array.isArray(A) && (A = A.join(" ")), z.isNumber(A) ? A : A.split(s).join(""));
      }, k = function(S, A) {
        if (u.length && A === 0 && p.push(u.join(s)), S.data) {
          S.data = S.data.length && S.data || K(Array(w)).map(function() {
            return "";
          });
          for (var L = 0; L < S.data.length; L++) {
            u = [];
            var I = x(L);
            if (I !== "nullvalue") {
              if (I || (l.isFormatXY() ? I = a[A].data[L].x : l.isFormat2DArray() && (I = a[A].data[L] ? a[A].data[L][0] : "")), A === 0) {
                u.push(b(I));
                for (var F = 0; F < h.globals.series.length; F++) {
                  var B, G = l.isFormatXY() ? (B = a[F].data[L]) === null || B === void 0 ? void 0 : B.y : f[F][L];
                  u.push(v(G));
                }
              }
              (h.config.chart.type === "candlestick" || S.type && S.type === "candlestick") && (u.pop(), u.push(h.globals.seriesCandleO[A][L]), u.push(h.globals.seriesCandleH[A][L]), u.push(h.globals.seriesCandleL[A][L]), u.push(h.globals.seriesCandleC[A][L])), (h.config.chart.type === "boxPlot" || S.type && S.type === "boxPlot") && (u.pop(), u.push(h.globals.seriesCandleO[A][L]), u.push(h.globals.seriesCandleH[A][L]), u.push(h.globals.seriesCandleM[A][L]), u.push(h.globals.seriesCandleL[A][L]), u.push(h.globals.seriesCandleC[A][L])), h.config.chart.type === "rangeBar" && (u.pop(), u.push(h.globals.seriesRangeStart[A][L]), u.push(h.globals.seriesRangeEnd[A][L])), u.length && p.push(u.join(s));
            }
          }
        }
      };
      u.push(h.config.chart.toolbar.export.csv.headerCategory), h.config.chart.type === "boxPlot" ? (u.push("minimum"), u.push("q1"), u.push("median"), u.push("q3"), u.push("maximum")) : h.config.chart.type === "candlestick" ? (u.push("open"), u.push("high"), u.push("low"), u.push("close")) : h.config.chart.type === "rangeBar" ? (u.push("minimum"), u.push("maximum")) : a.map(function(S, A) {
        var L = (S.name ? S.name : "series-".concat(A)) + "";
        h.globals.axisCharts && u.push(L.split(s).join("") ? L.split(s).join("") : "series-".concat(A));
      }), h.globals.axisCharts || (u.push(h.config.chart.toolbar.export.csv.headerValue), p.push(u.join(s))), h.globals.allSeriesHasEqualX || !h.globals.axisCharts || h.config.xaxis.categories.length || h.config.labels.length ? a.map(function(S, A) {
        h.globals.axisCharts ? k(S, A) : ((u = []).push(b(h.globals.labels[A])), u.push(v(f[A])), p.push(u.join(s)));
      }) : (d = /* @__PURE__ */ new Set(), c = {}, a.forEach(function(S, A) {
        S == null || S.data.forEach(function(L) {
          var I, F;
          if (l.isFormatXY()) I = L.x, F = L.y;
          else {
            if (!l.isFormat2DArray()) return;
            I = L[0], F = L[1];
          }
          c[I] || (c[I] = Array(a.length).fill("")), c[I][A] = v(F), d.add(I);
        });
      }), u.length && p.push(u.join(s)), Array.from(d).sort().forEach(function(S) {
        p.push([b(S), c[S].join(s)]);
      })), m += p.join(n), this.triggerDownload("data:text/csv; charset=utf-8," + encodeURIComponent("\uFEFF" + m), i || h.config.chart.toolbar.export.csv.filename, ".csv");
    } }, { key: "triggerDownload", value: function(e, t, a) {
      var i = document.createElement("a");
      i.href = e, i.download = (t || this.w.globals.chartID) + a, document.body.appendChild(i), i.click(), document.body.removeChild(i);
    } }]), y;
  }(), vt = function() {
    function y(e, t) {
      T(this, y), this.ctx = e, this.elgrid = t, this.w = e.w;
      var a = this.w;
      this.axesUtils = new Le(e), this.xaxisLabels = a.globals.labels.slice(), a.globals.timescaleLabels.length > 0 && !a.globals.isBarHorizontal && (this.xaxisLabels = a.globals.timescaleLabels.slice()), a.config.xaxis.overwriteCategories && (this.xaxisLabels = a.config.xaxis.overwriteCategories), this.drawnLabels = [], this.drawnLabelsRects = [], a.config.xaxis.position === "top" ? this.offY = 0 : this.offY = a.globals.gridHeight, this.offY = this.offY + a.config.xaxis.axisBorder.offsetY, this.isCategoryBarHorizontal = a.config.chart.type === "bar" && a.config.plotOptions.bar.horizontal, this.xaxisFontSize = a.config.xaxis.labels.style.fontSize, this.xaxisFontFamily = a.config.xaxis.labels.style.fontFamily, this.xaxisForeColors = a.config.xaxis.labels.style.colors, this.xaxisBorderWidth = a.config.xaxis.axisBorder.width, this.isCategoryBarHorizontal && (this.xaxisBorderWidth = a.config.yaxis[0].axisBorder.width.toString()), this.xaxisBorderWidth.indexOf("%") > -1 ? this.xaxisBorderWidth = a.globals.gridWidth * parseInt(this.xaxisBorderWidth, 10) / 100 : this.xaxisBorderWidth = parseInt(this.xaxisBorderWidth, 10), this.xaxisBorderHeight = a.config.xaxis.axisBorder.height, this.yaxis = a.config.yaxis[0];
    }
    return E(y, [{ key: "drawXaxis", value: function() {
      var e = this.w, t = new X(this.ctx), a = t.group({ class: "apexcharts-xaxis", transform: "translate(".concat(e.config.xaxis.offsetX, ", ").concat(e.config.xaxis.offsetY, ")") }), i = t.group({ class: "apexcharts-xaxis-texts-g", transform: "translate(".concat(e.globals.translateXAxisX, ", ").concat(e.globals.translateXAxisY, ")") });
      a.add(i);
      for (var r = [], s = 0; s < this.xaxisLabels.length; s++) r.push(this.xaxisLabels[s]);
      if (this.drawXAxisLabelAndGroup(!0, t, i, r, e.globals.isXNumeric, function(m, f) {
        return f;
      }), e.globals.hasXaxisGroups) {
        var o = e.globals.groups;
        r = [];
        for (var n = 0; n < o.length; n++) r.push(o[n].title);
        var h = {};
        e.config.xaxis.group.style && (h.xaxisFontSize = e.config.xaxis.group.style.fontSize, h.xaxisFontFamily = e.config.xaxis.group.style.fontFamily, h.xaxisForeColors = e.config.xaxis.group.style.colors, h.fontWeight = e.config.xaxis.group.style.fontWeight, h.cssClass = e.config.xaxis.group.style.cssClass), this.drawXAxisLabelAndGroup(!1, t, i, r, !1, function(m, f) {
          return o[m].cols * f;
        }, h);
      }
      if (e.config.xaxis.title.text !== void 0) {
        var d = t.group({ class: "apexcharts-xaxis-title" }), c = t.drawText({ x: e.globals.gridWidth / 2 + e.config.xaxis.title.offsetX, y: this.offY + parseFloat(this.xaxisFontSize) + (e.config.xaxis.position === "bottom" ? e.globals.xAxisLabelsHeight : -e.globals.xAxisLabelsHeight - 10) + e.config.xaxis.title.offsetY, text: e.config.xaxis.title.text, textAnchor: "middle", fontSize: e.config.xaxis.title.style.fontSize, fontFamily: e.config.xaxis.title.style.fontFamily, fontWeight: e.config.xaxis.title.style.fontWeight, foreColor: e.config.xaxis.title.style.color, cssClass: "apexcharts-xaxis-title-text " + e.config.xaxis.title.style.cssClass });
        d.add(c), a.add(d);
      }
      if (e.config.xaxis.axisBorder.show) {
        var u = e.globals.barPadForNumericAxis, p = t.drawLine(e.globals.padHorizontal + e.config.xaxis.axisBorder.offsetX - u, this.offY, this.xaxisBorderWidth + u, this.offY, e.config.xaxis.axisBorder.color, 0, this.xaxisBorderHeight);
        this.elgrid && this.elgrid.elGridBorders && e.config.grid.show ? this.elgrid.elGridBorders.add(p) : a.add(p);
      }
      return a;
    } }, { key: "drawXAxisLabelAndGroup", value: function(e, t, a, i, r, s) {
      var o, n = this, h = arguments.length > 6 && arguments[6] !== void 0 ? arguments[6] : {}, d = [], c = [], u = this.w, p = h.xaxisFontSize || this.xaxisFontSize, m = h.xaxisFontFamily || this.xaxisFontFamily, f = h.xaxisForeColors || this.xaxisForeColors, b = h.fontWeight || u.config.xaxis.labels.style.fontWeight, v = h.cssClass || u.config.xaxis.labels.style.cssClass, w = u.globals.padHorizontal, l = i.length, g = u.config.xaxis.type === "category" ? u.globals.dataPoints : l;
      if (g === 0 && l > g && (g = l), r) {
        var x = g > 1 ? g - 1 : g;
        o = u.globals.gridWidth / Math.min(x, l - 1), w = w + s(0, o) / 2 + u.config.xaxis.labels.offsetX;
      } else o = u.globals.gridWidth / g, w = w + s(0, o) + u.config.xaxis.labels.offsetX;
      for (var k = function(A) {
        var L = w - s(A, o) / 2 + u.config.xaxis.labels.offsetX;
        A === 0 && l === 1 && o / 2 === w && g === 1 && (L = u.globals.gridWidth / 2);
        var I = n.axesUtils.getLabel(i, u.globals.timescaleLabels, L, A, d, p, e), F = 28;
        if (u.globals.rotateXLabels && e && (F = 22), u.config.xaxis.title.text && u.config.xaxis.position === "top" && (F += parseFloat(u.config.xaxis.title.style.fontSize) + 2), e || (F = F + parseFloat(p) + (u.globals.xAxisLabelsHeight - u.globals.xAxisGroupLabelsHeight) + (u.globals.rotateXLabels ? 10 : 0)), I = u.config.xaxis.tickAmount !== void 0 && u.config.xaxis.tickAmount !== "dataPoints" && u.config.xaxis.type !== "datetime" ? n.axesUtils.checkLabelBasedOnTickamount(A, I, l) : n.axesUtils.checkForOverflowingLabels(A, I, l, d, c), u.config.xaxis.labels.show) {
          var B = t.drawText({ x: I.x, y: n.offY + u.config.xaxis.labels.offsetY + F - (u.config.xaxis.position === "top" ? u.globals.xAxisHeight + u.config.xaxis.axisTicks.height - 2 : 0), text: I.text, textAnchor: "middle", fontWeight: I.isBold ? 600 : b, fontSize: p, fontFamily: m, foreColor: Array.isArray(f) ? e && u.config.xaxis.convertedCatToNumeric ? f[u.globals.minX + A - 1] : f[A] : f, isPlainText: !1, cssClass: (e ? "apexcharts-xaxis-label " : "apexcharts-xaxis-group-label ") + v });
          if (a.add(B), B.on("click", function(W) {
            if (typeof u.config.chart.events.xAxisLabelClick == "function") {
              var q = Object.assign({}, u, { labelIndex: A });
              u.config.chart.events.xAxisLabelClick(W, n.ctx, q);
            }
          }), e) {
            var G = document.createElementNS(u.globals.SVGNS, "title");
            G.textContent = Array.isArray(I.text) ? I.text.join(" ") : I.text, B.node.appendChild(G), I.text !== "" && (d.push(I.text), c.push(I));
          }
        }
        A < l - 1 && (w += s(A + 1, o));
      }, S = 0; S <= l - 1; S++) k(S);
    } }, { key: "drawXaxisInversed", value: function(e) {
      var t, a, i = this, r = this.w, s = new X(this.ctx), o = r.config.yaxis[0].opposite ? r.globals.translateYAxisX[e] : 0, n = s.group({ class: "apexcharts-yaxis apexcharts-xaxis-inversed", rel: e }), h = s.group({ class: "apexcharts-yaxis-texts-g apexcharts-xaxis-inversed-texts-g", transform: "translate(" + o + ", 0)" });
      n.add(h);
      var d = [];
      if (r.config.yaxis[e].show) for (var c = 0; c < this.xaxisLabels.length; c++) d.push(this.xaxisLabels[c]);
      t = r.globals.gridHeight / d.length, a = -t / 2.2;
      var u = r.globals.yLabelFormatters[0], p = r.config.yaxis[0].labels;
      if (p.show) for (var m = function(x) {
        var k = d[x] === void 0 ? "" : d[x];
        k = u(k, { seriesIndex: e, dataPointIndex: x, w: r });
        var S = i.axesUtils.getYAxisForeColor(p.style.colors, e), A = 0;
        Array.isArray(k) && (A = k.length / 2 * parseInt(p.style.fontSize, 10));
        var L = p.offsetX - 15, I = "end";
        i.yaxis.opposite && (I = "start"), r.config.yaxis[0].labels.align === "left" ? (L = p.offsetX, I = "start") : r.config.yaxis[0].labels.align === "center" ? (L = p.offsetX, I = "middle") : r.config.yaxis[0].labels.align === "right" && (I = "end");
        var F = s.drawText({ x: L, y: a + t + p.offsetY - A, text: k, textAnchor: I, foreColor: Array.isArray(S) ? S[x] : S, fontSize: p.style.fontSize, fontFamily: p.style.fontFamily, fontWeight: p.style.fontWeight, isPlainText: !1, cssClass: "apexcharts-yaxis-label " + p.style.cssClass, maxWidth: p.maxWidth });
        h.add(F), F.on("click", function(W) {
          if (typeof r.config.chart.events.xAxisLabelClick == "function") {
            var q = Object.assign({}, r, { labelIndex: x });
            r.config.chart.events.xAxisLabelClick(W, i.ctx, q);
          }
        });
        var B = document.createElementNS(r.globals.SVGNS, "title");
        if (B.textContent = Array.isArray(k) ? k.join(" ") : k, F.node.appendChild(B), r.config.yaxis[e].labels.rotate !== 0) {
          var G = s.rotateAroundCenter(F.node);
          F.node.setAttribute("transform", "rotate(".concat(r.config.yaxis[e].labels.rotate, " 0 ").concat(G.y, ")"));
        }
        a += t;
      }, f = 0; f <= d.length - 1; f++) m(f);
      if (r.config.yaxis[0].title.text !== void 0) {
        var b = s.group({ class: "apexcharts-yaxis-title apexcharts-xaxis-title-inversed", transform: "translate(" + o + ", 0)" }), v = s.drawText({ x: r.config.yaxis[0].title.offsetX, y: r.globals.gridHeight / 2 + r.config.yaxis[0].title.offsetY, text: r.config.yaxis[0].title.text, textAnchor: "middle", foreColor: r.config.yaxis[0].title.style.color, fontSize: r.config.yaxis[0].title.style.fontSize, fontWeight: r.config.yaxis[0].title.style.fontWeight, fontFamily: r.config.yaxis[0].title.style.fontFamily, cssClass: "apexcharts-yaxis-title-text " + r.config.yaxis[0].title.style.cssClass });
        b.add(v), n.add(b);
      }
      var w = 0;
      this.isCategoryBarHorizontal && r.config.yaxis[0].opposite && (w = r.globals.gridWidth);
      var l = r.config.xaxis.axisBorder;
      if (l.show) {
        var g = s.drawLine(r.globals.padHorizontal + l.offsetX + w, 1 + l.offsetY, r.globals.padHorizontal + l.offsetX + w, r.globals.gridHeight + l.offsetY, l.color, 0);
        this.elgrid && this.elgrid.elGridBorders && r.config.grid.show ? this.elgrid.elGridBorders.add(g) : n.add(g);
      }
      return r.config.yaxis[0].axisTicks.show && this.axesUtils.drawYAxisTicks(w, d.length, r.config.yaxis[0].axisBorder, r.config.yaxis[0].axisTicks, 0, t, n), n;
    } }, { key: "drawXaxisTicks", value: function(e, t, a) {
      var i = this.w, r = e;
      if (!(e < 0 || e - 2 > i.globals.gridWidth)) {
        var s = this.offY + i.config.xaxis.axisTicks.offsetY;
        if (t = t + s + i.config.xaxis.axisTicks.height, i.config.xaxis.position === "top" && (t = s - i.config.xaxis.axisTicks.height), i.config.xaxis.axisTicks.show) {
          var o = new X(this.ctx).drawLine(e + i.config.xaxis.axisTicks.offsetX, s + i.config.xaxis.offsetY, r + i.config.xaxis.axisTicks.offsetX, t + i.config.xaxis.offsetY, i.config.xaxis.axisTicks.color);
          a.add(o), o.node.classList.add("apexcharts-xaxis-tick");
        }
      }
    } }, { key: "getXAxisTicksPositions", value: function() {
      var e = this.w, t = [], a = this.xaxisLabels.length, i = e.globals.padHorizontal;
      if (e.globals.timescaleLabels.length > 0) for (var r = 0; r < a; r++) i = this.xaxisLabels[r].position, t.push(i);
      else for (var s = a, o = 0; o < s; o++) {
        var n = s;
        e.globals.isXNumeric && e.config.chart.type !== "bar" && (n -= 1), i += e.globals.gridWidth / n, t.push(i);
      }
      return t;
    } }, { key: "xAxisLabelCorrections", value: function() {
      var e = this.w, t = new X(this.ctx), a = e.globals.dom.baseEl.querySelector(".apexcharts-xaxis-texts-g"), i = e.globals.dom.baseEl.querySelectorAll(".apexcharts-xaxis-texts-g text:not(.apexcharts-xaxis-group-label)"), r = e.globals.dom.baseEl.querySelectorAll(".apexcharts-yaxis-inversed text"), s = e.globals.dom.baseEl.querySelectorAll(".apexcharts-xaxis-inversed-texts-g text tspan");
      if (e.globals.rotateXLabels || e.config.xaxis.labels.rotateAlways) for (var o = 0; o < i.length; o++) {
        var n = t.rotateAroundCenter(i[o]);
        n.y = n.y - 1, n.x = n.x + 1, i[o].setAttribute("transform", "rotate(".concat(e.config.xaxis.labels.rotate, " ").concat(n.x, " ").concat(n.y, ")")), i[o].setAttribute("text-anchor", "end"), a.setAttribute("transform", "translate(0, ".concat(-10, ")"));
        var h = i[o].childNodes;
        e.config.xaxis.labels.trim && Array.prototype.forEach.call(h, function(p) {
          t.placeTextWithEllipsis(p, p.textContent, e.globals.xAxisLabelsHeight - (e.config.legend.position === "bottom" ? 20 : 10));
        });
      }
      else (function() {
        for (var p = e.globals.gridWidth / (e.globals.labels.length + 1), m = 0; m < i.length; m++) {
          var f = i[m].childNodes;
          e.config.xaxis.labels.trim && e.config.xaxis.type !== "datetime" && Array.prototype.forEach.call(f, function(b) {
            t.placeTextWithEllipsis(b, b.textContent, p);
          });
        }
      })();
      if (r.length > 0) {
        var d = r[r.length - 1].getBBox(), c = r[0].getBBox();
        d.x < -20 && r[r.length - 1].parentNode.removeChild(r[r.length - 1]), c.x + c.width > e.globals.gridWidth && !e.globals.isBarHorizontal && r[0].parentNode.removeChild(r[0]);
        for (var u = 0; u < s.length; u++) t.placeTextWithEllipsis(s[u], s[u].textContent, e.config.yaxis[0].labels.maxWidth - (e.config.yaxis[0].title.text ? 2 * parseFloat(e.config.yaxis[0].title.style.fontSize) : 0) - 15);
      }
    } }]), y;
  }(), fa = function() {
    function y(e) {
      T(this, y), this.ctx = e, this.w = e.w;
      var t = this.w;
      this.xaxisLabels = t.globals.labels.slice(), this.axesUtils = new Le(e), this.isRangeBar = t.globals.seriesRange.length && t.globals.isBarHorizontal, t.globals.timescaleLabels.length > 0 && (this.xaxisLabels = t.globals.timescaleLabels.slice());
    }
    return E(y, [{ key: "drawGridArea", value: function() {
      var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : null, t = this.w, a = new X(this.ctx);
      e || (e = a.group({ class: "apexcharts-grid" }));
      var i = a.drawLine(t.globals.padHorizontal, 1, t.globals.padHorizontal, t.globals.gridHeight, "transparent"), r = a.drawLine(t.globals.padHorizontal, t.globals.gridHeight, t.globals.gridWidth, t.globals.gridHeight, "transparent");
      return e.add(r), e.add(i), e;
    } }, { key: "drawGrid", value: function() {
      if (this.w.globals.axisCharts) {
        var e = this.renderGrid();
        return this.drawGridArea(e.el), e;
      }
      return null;
    } }, { key: "createGridMask", value: function() {
      var e = this.w, t = e.globals, a = new X(this.ctx), i = Array.isArray(e.config.stroke.width) ? Math.max.apply(Math, K(e.config.stroke.width)) : e.config.stroke.width, r = function(d) {
        var c = document.createElementNS(t.SVGNS, "clipPath");
        return c.setAttribute("id", d), c;
      };
      t.dom.elGridRectMask = r("gridRectMask".concat(t.cuid)), t.dom.elGridRectBarMask = r("gridRectBarMask".concat(t.cuid)), t.dom.elGridRectMarkerMask = r("gridRectMarkerMask".concat(t.cuid)), t.dom.elForecastMask = r("forecastMask".concat(t.cuid)), t.dom.elNonForecastMask = r("nonForecastMask".concat(t.cuid));
      var s = 0, o = 0;
      (["bar", "rangeBar", "candlestick", "boxPlot"].includes(e.config.chart.type) || e.globals.comboBarCount > 0) && e.globals.isXNumeric && !e.globals.isBarHorizontal && (s = Math.max(e.config.grid.padding.left, t.barPadForNumericAxis), o = Math.max(e.config.grid.padding.right, t.barPadForNumericAxis)), t.dom.elGridRect = a.drawRect(0, 0, t.gridWidth, t.gridHeight, 0, "#fff"), t.dom.elGridRectBar = a.drawRect(-i / 2 - s - 2, -i / 2 - 2, t.gridWidth + i + o + s + 4, t.gridHeight + i + 4, 0, "#fff");
      var n = e.globals.markers.largestSize;
      t.dom.elGridRectMarker = a.drawRect(-n, -n, t.gridWidth + 2 * n, t.gridHeight + 2 * n, 0, "#fff"), t.dom.elGridRectMask.appendChild(t.dom.elGridRect.node), t.dom.elGridRectBarMask.appendChild(t.dom.elGridRectBar.node), t.dom.elGridRectMarkerMask.appendChild(t.dom.elGridRectMarker.node);
      var h = t.dom.baseEl.querySelector("defs");
      h.appendChild(t.dom.elGridRectMask), h.appendChild(t.dom.elGridRectBarMask), h.appendChild(t.dom.elGridRectMarkerMask), h.appendChild(t.dom.elForecastMask), h.appendChild(t.dom.elNonForecastMask);
    } }, { key: "_drawGridLines", value: function(e) {
      var t = e.i, a = e.x1, i = e.y1, r = e.x2, s = e.y2, o = e.xCount, n = e.parent, h = this.w;
      if (!(t === 0 && h.globals.skipFirstTimelinelabel || t === o - 1 && h.globals.skipLastTimelinelabel && !h.config.xaxis.labels.formatter || h.config.chart.type === "radar")) {
        h.config.grid.xaxis.lines.show && this._drawGridLine({ i: t, x1: a, y1: i, x2: r, y2: s, xCount: o, parent: n });
        var d = 0;
        if (h.globals.hasXaxisGroups && h.config.xaxis.tickPlacement === "between") {
          var c = h.globals.groups;
          if (c) {
            for (var u = 0, p = 0; u < t && p < c.length; p++) u += c[p].cols;
            u === t && (d = 0.6 * h.globals.xAxisLabelsHeight);
          }
        }
        new vt(this.ctx).drawXaxisTicks(a, d, h.globals.dom.elGraphical);
      }
    } }, { key: "_drawGridLine", value: function(e) {
      var t = e.i, a = e.x1, i = e.y1, r = e.x2, s = e.y2, o = e.xCount, n = e.parent, h = this.w, d = n.node.classList.contains("apexcharts-gridlines-horizontal"), c = h.globals.barPadForNumericAxis, u = i === 0 && s === 0 || a === 0 && r === 0 || i === h.globals.gridHeight && s === h.globals.gridHeight || h.globals.isBarHorizontal && (t === 0 || t === o - 1), p = new X(this).drawLine(a - (d ? c : 0), i, r + (d ? c : 0), s, h.config.grid.borderColor, h.config.grid.strokeDashArray);
      p.node.classList.add("apexcharts-gridline"), u && h.config.grid.show ? this.elGridBorders.add(p) : n.add(p);
    } }, { key: "_drawGridBandRect", value: function(e) {
      var t = e.c, a = e.x1, i = e.y1, r = e.x2, s = e.y2, o = e.type, n = this.w, h = new X(this.ctx), d = n.globals.barPadForNumericAxis, c = n.config.grid[o].colors[t], u = h.drawRect(a - (o === "row" ? d : 0), i, r + (o === "row" ? 2 * d : 0), s, 0, c, n.config.grid[o].opacity);
      this.elg.add(u), u.attr("clip-path", "url(#gridRectMask".concat(n.globals.cuid, ")")), u.node.classList.add("apexcharts-grid-".concat(o));
    } }, { key: "_drawXYLines", value: function(e) {
      var t = this, a = e.xCount, i = e.tickAmount, r = this.w;
      if (r.config.grid.xaxis.lines.show || r.config.xaxis.axisTicks.show) {
        var s, o = r.globals.padHorizontal, n = r.globals.gridHeight;
        r.globals.timescaleLabels.length ? function(m) {
          for (var f = m.xC, b = m.x1, v = m.y1, w = m.x2, l = m.y2, g = 0; g < f; g++) b = t.xaxisLabels[g].position, w = t.xaxisLabels[g].position, t._drawGridLines({ i: g, x1: b, y1: v, x2: w, y2: l, xCount: a, parent: t.elgridLinesV });
        }({ xC: a, x1: o, y1: 0, x2: s, y2: n }) : (r.globals.isXNumeric && (a = r.globals.xAxisScale.result.length), function(m) {
          for (var f = m.xC, b = m.x1, v = m.y1, w = m.x2, l = m.y2, g = 0; g < f + (r.globals.isXNumeric ? 0 : 1); g++) g === 0 && f === 1 && r.globals.dataPoints === 1 && (w = b = r.globals.gridWidth / 2), t._drawGridLines({ i: g, x1: b, y1: v, x2: w, y2: l, xCount: a, parent: t.elgridLinesV }), w = b += r.globals.gridWidth / (r.globals.isXNumeric ? f - 1 : f);
        }({ xC: a, x1: o, y1: 0, x2: s, y2: n }));
      }
      if (r.config.grid.yaxis.lines.show) {
        var h = 0, d = 0, c = r.globals.gridWidth, u = i + 1;
        this.isRangeBar && (u = r.globals.labels.length);
        for (var p = 0; p < u + (this.isRangeBar ? 1 : 0); p++) this._drawGridLine({ i: p, xCount: u + (this.isRangeBar ? 1 : 0), x1: 0, y1: h, x2: c, y2: d, parent: this.elgridLinesH }), d = h += r.globals.gridHeight / (this.isRangeBar ? u : i);
      }
    } }, { key: "_drawInvertedXYLines", value: function(e) {
      var t = e.xCount, a = this.w;
      if (a.config.grid.xaxis.lines.show || a.config.xaxis.axisTicks.show) for (var i, r = a.globals.padHorizontal, s = a.globals.gridHeight, o = 0; o < t + 1; o++)
        a.config.grid.xaxis.lines.show && this._drawGridLine({ i: o, xCount: t + 1, x1: r, y1: 0, x2: i, y2: s, parent: this.elgridLinesV }), new vt(this.ctx).drawXaxisTicks(r, 0, a.globals.dom.elGraphical), i = r += a.globals.gridWidth / t;
      if (a.config.grid.yaxis.lines.show) for (var n = 0, h = 0, d = a.globals.gridWidth, c = 0; c < a.globals.dataPoints + 1; c++) this._drawGridLine({ i: c, xCount: a.globals.dataPoints + 1, x1: 0, y1: n, x2: d, y2: h, parent: this.elgridLinesH }), h = n += a.globals.gridHeight / a.globals.dataPoints;
    } }, { key: "renderGrid", value: function() {
      var e = this.w, t = e.globals, a = new X(this.ctx);
      this.elg = a.group({ class: "apexcharts-grid" }), this.elgridLinesH = a.group({ class: "apexcharts-gridlines-horizontal" }), this.elgridLinesV = a.group({ class: "apexcharts-gridlines-vertical" }), this.elGridBorders = a.group({ class: "apexcharts-grid-borders" }), this.elg.add(this.elgridLinesH), this.elg.add(this.elgridLinesV), e.config.grid.show || (this.elgridLinesV.hide(), this.elgridLinesH.hide(), this.elGridBorders.hide());
      for (var i = 0; i < t.seriesYAxisMap.length && t.ignoreYAxisIndexes.includes(i); ) i++;
      i === t.seriesYAxisMap.length && (i = 0);
      var r, s = t.yAxisScale[i].result.length - 1;
      if (!t.isBarHorizontal || this.isRangeBar) {
        var o, n, h;
        r = this.xaxisLabels.length, this.isRangeBar && (s = t.labels.length, e.config.xaxis.tickAmount && e.config.xaxis.labels.formatter && (r = e.config.xaxis.tickAmount), ((o = t.yAxisScale) === null || o === void 0 || (n = o[i]) === null || n === void 0 || (h = n.result) === null || h === void 0 ? void 0 : h.length) > 0 && e.config.xaxis.type !== "datetime" && (r = t.yAxisScale[i].result.length - 1)), this._drawXYLines({ xCount: r, tickAmount: s });
      } else r = s, s = t.xTickAmount, this._drawInvertedXYLines({ xCount: r, tickAmount: s });
      return this.drawGridBands(r, s), { el: this.elg, elGridBorders: this.elGridBorders, xAxisTickWidth: t.gridWidth / r };
    } }, { key: "drawGridBands", value: function(e, t) {
      var a, i, r = this, s = this.w;
      if (((a = s.config.grid.row.colors) === null || a === void 0 ? void 0 : a.length) > 0 && function(m, f, b, v, w, l) {
        for (var g = 0, x = 0; g < f; g++, x++) x >= s.config.grid[m].colors.length && (x = 0), r._drawGridBandRect({ c: x, x1: b, y1: v, x2: w, y2: l, type: m }), v += s.globals.gridHeight / t;
      }("row", t, 0, 0, s.globals.gridWidth, s.globals.gridHeight / t), ((i = s.config.grid.column.colors) === null || i === void 0 ? void 0 : i.length) > 0) {
        var o = s.globals.isBarHorizontal || s.config.xaxis.tickPlacement !== "on" || s.config.xaxis.type !== "category" && !s.config.xaxis.convertedCatToNumeric ? e : e - 1;
        s.globals.isXNumeric && (o = s.globals.xAxisScale.result.length - 1);
        for (var n = s.globals.padHorizontal, h = s.globals.padHorizontal + s.globals.gridWidth / o, d = s.globals.gridHeight, c = 0, u = 0; c < e; c++, u++) {
          var p;
          u >= s.config.grid.column.colors.length && (u = 0), s.config.xaxis.type === "datetime" && (n = this.xaxisLabels[c].position, h = (((p = this.xaxisLabels[c + 1]) === null || p === void 0 ? void 0 : p.position) || s.globals.gridWidth) - this.xaxisLabels[c].position), this._drawGridBandRect({ c: u, x1: n, y1: 0, x2: h, y2: d, type: "column" }), n += s.globals.gridWidth / o;
        }
      }
    } }]), y;
  }(), ma = function() {
    function y(e) {
      T(this, y), this.ctx = e, this.w = e.w, this.coreUtils = new Te(this.ctx);
    }
    return E(y, [{ key: "niceScale", value: function(e, t) {
      var a, i, r, s, o = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0, n = 1e-11, h = this.w, d = h.globals;
      d.isBarHorizontal ? (a = h.config.xaxis, i = Math.max((d.svgWidth - 100) / 25, 2)) : (a = h.config.yaxis[o], i = Math.max((d.svgHeight - 100) / 15, 2)), z.isNumber(i) || (i = 10), r = a.min !== void 0 && a.min !== null, s = a.max !== void 0 && a.min !== null;
      var c = a.stepSize !== void 0 && a.stepSize !== null, u = a.tickAmount !== void 0 && a.tickAmount !== null, p = u ? a.tickAmount : d.niceScaleDefaultTicks[Math.min(Math.round(i / 2), d.niceScaleDefaultTicks.length - 1)];
      if (d.isMultipleYAxis && !u && d.multiAxisTickAmount > 0 && (p = d.multiAxisTickAmount, u = !0), p = p === "dataPoints" ? d.dataPoints - 1 : Math.abs(Math.round(p)), (e === Number.MIN_VALUE && t === 0 || !z.isNumber(e) && !z.isNumber(t) || e === Number.MIN_VALUE && t === -Number.MAX_VALUE) && (e = z.isNumber(a.min) ? a.min : 0, t = z.isNumber(a.max) ? a.max : e + p, d.allSeriesCollapsed = !1), e > t) {
        console.warn("axis.min cannot be greater than axis.max: swapping min and max");
        var m = t;
        t = e, e = m;
      } else e === t && (e = e === 0 ? 0 : e - 1, t = t === 0 ? 2 : t + 1);
      var f = [];
      p < 1 && (p = 1);
      var b = p, v = Math.abs(t - e);
      !r && e > 0 && e / v < 0.15 && (e = 0, r = !0), !s && t < 0 && -t / v < 0.15 && (t = 0, s = !0);
      var w = (v = Math.abs(t - e)) / b, l = w, g = Math.floor(Math.log10(l)), x = Math.pow(10, g), k = Math.ceil(l / x);
      if (w = l = (k = d.niceScaleAllowedMagMsd[d.yValueDecimal === 0 ? 0 : 1][k]) * x, d.isBarHorizontal && a.stepSize && a.type !== "datetime" ? (w = a.stepSize, c = !0) : c && (w = a.stepSize), c && a.forceNiceScale) {
        var S = Math.floor(Math.log10(w));
        w *= Math.pow(10, g - S);
      }
      if (r && s) {
        var A = v / b;
        if (u) if (c) if (z.mod(v, w) != 0) {
          var L = z.getGCD(w, A);
          w = A / L < 10 ? L : A;
        } else z.mod(w, A) == 0 ? w = A : (A = w, u = !1);
        else w = A;
        else if (c) z.mod(v, w) == 0 ? A = w : w = A;
        else if (z.mod(v, w) == 0) A = w;
        else {
          A = v / (b = Math.ceil(v / w));
          var I = z.getGCD(v, w);
          v / I < i && (A = I), w = A;
        }
        b = Math.round(v / w);
      } else {
        if (r || s) {
          if (s) if (u) e = t - w * b;
          else {
            var F = e;
            e = w * Math.floor(e / w), Math.abs(t - e) / z.getGCD(v, w) > i && (e = t - w * p, e += w * Math.floor((F - e) / w));
          }
          else if (r) if (u) t = e + w * b;
          else {
            var B = t;
            t = w * Math.ceil(t / w), Math.abs(t - e) / z.getGCD(v, w) > i && (t = e + w * p, t += w * Math.ceil((B - t) / w));
          }
        } else if (d.isMultipleYAxis && u) {
          var G = w * Math.floor(e / w), W = G + w * b;
          W < t && (w *= 2), W = t, t = (e = G) + w * b, v = Math.abs(t - e), e > 0 && e < Math.abs(W - t) && (e = 0, t = w * b), t < 0 && -t < Math.abs(G - e) && (t = 0, e = -w * b);
        } else e = w * Math.floor(e / w), t = w * Math.ceil(t / w);
        v = Math.abs(t - e), w = z.getGCD(v, w), b = Math.round(v / w);
      }
      if (u || r || s || (b = Math.ceil((v - n) / (w + n))) > 16 && z.getPrimeFactors(b).length < 2 && b++, !u && a.forceNiceScale && d.yValueDecimal === 0 && b > v && (b = v, w = Math.round(v / b)), b > i && (!u && !c || a.forceNiceScale)) {
        var q = z.getPrimeFactors(b), ee = q.length - 1, ae = b;
        e: for (var ne = 0; ne < ee; ne++) for (var ue = 0; ue <= ee - ne; ue++) {
          for (var le = Math.min(ue + ne, ee), xe = ae, ze = 1, Ve = ue; Ve <= le; Ve++) ze *= q[Ve];
          if ((xe /= ze) < i) {
            ae = xe;
            break e;
          }
        }
        w = ae === b ? v : v / ae, b = Math.round(v / w);
      }
      d.isMultipleYAxis && d.multiAxisTickAmount == 0 && d.ignoreYAxisIndexes.indexOf(o) < 0 && (d.multiAxisTickAmount = b);
      var Me = e - w, _e = w * n;
      do
        Me += w, f.push(z.stripNumber(Me, 7));
      while (t - Me > _e);
      return { result: f, niceMin: f[0], niceMax: f[f.length - 1] };
    } }, { key: "linearScale", value: function(e, t) {
      var a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 10, i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 0, r = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : void 0, s = Math.abs(t - e), o = [];
      if (e === t) return { result: o = [e], niceMin: o[0], niceMax: o[o.length - 1] };
      (a = this._adjustTicksForSmallRange(a, i, s)) === "dataPoints" && (a = this.w.globals.dataPoints - 1), r || (r = s / a), r = Math.round(10 * (r + Number.EPSILON)) / 10, a === Number.MAX_VALUE && (a = 5, r = 1);
      for (var n = e; a >= 0; ) o.push(n), n = z.preciseAddition(n, r), a -= 1;
      return { result: o, niceMin: o[0], niceMax: o[o.length - 1] };
    } }, { key: "logarithmicScaleNice", value: function(e, t, a) {
      t <= 0 && (t = Math.max(e, a)), e <= 0 && (e = Math.min(t, a));
      for (var i = [], r = Math.ceil(Math.log(t) / Math.log(a) + 1), s = Math.floor(Math.log(e) / Math.log(a)); s < r; s++) i.push(Math.pow(a, s));
      return { result: i, niceMin: i[0], niceMax: i[i.length - 1] };
    } }, { key: "logarithmicScale", value: function(e, t, a) {
      t <= 0 && (t = Math.max(e, a)), e <= 0 && (e = Math.min(t, a));
      for (var i = [], r = Math.log(t) / Math.log(a), s = Math.log(e) / Math.log(a), o = r - s, n = Math.round(o), h = o / n, d = 0, c = s; d < n; d++, c += h) i.push(Math.pow(a, c));
      return i.push(Math.pow(a, r)), { result: i, niceMin: e, niceMax: t };
    } }, { key: "_adjustTicksForSmallRange", value: function(e, t, a) {
      var i = e;
      if (t !== void 0 && this.w.config.yaxis[t].labels.formatter && this.w.config.yaxis[t].tickAmount === void 0) {
        var r = Number(this.w.config.yaxis[t].labels.formatter(1));
        z.isNumber(r) && this.w.globals.yValueDecimal === 0 && (i = Math.ceil(a));
      }
      return i < e ? i : e;
    } }, { key: "setYScaleForIndex", value: function(e, t, a) {
      var i = this.w.globals, r = this.w.config, s = i.isBarHorizontal ? r.xaxis : r.yaxis[e];
      i.yAxisScale[e] === void 0 && (i.yAxisScale[e] = []);
      var o = Math.abs(a - t);
      s.logarithmic && o <= 5 && (i.invalidLogScale = !0), s.logarithmic && o > 5 ? (i.allSeriesCollapsed = !1, i.yAxisScale[e] = s.forceNiceScale ? this.logarithmicScaleNice(t, a, s.logBase) : this.logarithmicScale(t, a, s.logBase)) : a !== -Number.MAX_VALUE && z.isNumber(a) && t !== Number.MAX_VALUE && z.isNumber(t) ? (i.allSeriesCollapsed = !1, i.yAxisScale[e] = this.niceScale(t, a, e)) : i.yAxisScale[e] = this.niceScale(Number.MIN_VALUE, 0, e);
    } }, { key: "setXScale", value: function(e, t) {
      var a = this.w, i = a.globals, r = Math.abs(t - e);
      if (t !== -Number.MAX_VALUE && z.isNumber(t)) {
        var s = i.xTickAmount + 1;
        r < 10 && r > 1 && (s = r), i.xAxisScale = this.linearScale(e, t, s, 0, a.config.xaxis.stepSize);
      } else i.xAxisScale = this.linearScale(0, 10, 10);
      return i.xAxisScale;
    } }, { key: "scaleMultipleYAxes", value: function() {
      var e = this, t = this.w.config, a = this.w.globals;
      this.coreUtils.setSeriesYAxisMappings();
      var i = a.seriesYAxisMap, r = a.minYArr, s = a.maxYArr;
      a.allSeriesCollapsed = !0, a.barGroups = [], i.forEach(function(o, n) {
        var h = [];
        o.forEach(function(d) {
          var c = t.series[d].group;
          h.indexOf(c) < 0 && h.push(c);
        }), o.length > 0 ? function() {
          var d, c, u = Number.MAX_VALUE, p = -Number.MAX_VALUE, m = u, f = p;
          if (t.chart.stacked) (function() {
            var w = new Array(a.dataPoints).fill(0), l = [], g = [], x = [];
            h.forEach(function() {
              l.push(w.map(function() {
                return Number.MIN_VALUE;
              })), g.push(w.map(function() {
                return Number.MIN_VALUE;
              })), x.push(w.map(function() {
                return Number.MIN_VALUE;
              }));
            });
            for (var k = function(A) {
              !d && t.series[o[A]].type && (d = t.series[o[A]].type);
              var L = o[A];
              c = t.series[L].group ? t.series[L].group : "axis-".concat(n), !(a.collapsedSeriesIndices.indexOf(L) < 0 && a.ancillaryCollapsedSeriesIndices.indexOf(L) < 0) || (a.allSeriesCollapsed = !1, h.forEach(function(I, F) {
                if (t.series[L].group === I) for (var B = 0; B < a.series[L].length; B++) {
                  var G = a.series[L][B];
                  G >= 0 ? g[F][B] += G : x[F][B] += G, l[F][B] += G, m = Math.min(m, G), f = Math.max(f, G);
                }
              })), d !== "bar" && d !== "column" || a.barGroups.push(c);
            }, S = 0; S < o.length; S++) k(S);
            d || (d = t.chart.type), d === "bar" || d === "column" ? h.forEach(function(A, L) {
              u = Math.min(u, Math.min.apply(null, x[L])), p = Math.max(p, Math.max.apply(null, g[L]));
            }) : (h.forEach(function(A, L) {
              m = Math.min(m, Math.min.apply(null, l[L])), f = Math.max(f, Math.max.apply(null, l[L]));
            }), u = m, p = f), u === Number.MIN_VALUE && p === Number.MIN_VALUE && (p = -Number.MAX_VALUE);
          })();
          else for (var b = 0; b < o.length; b++) {
            var v = o[b];
            u = Math.min(u, r[v]), p = Math.max(p, s[v]), !(a.collapsedSeriesIndices.indexOf(v) < 0 && a.ancillaryCollapsedSeriesIndices.indexOf(v) < 0) || (a.allSeriesCollapsed = !1);
          }
          t.yaxis[n].min !== void 0 && (u = typeof t.yaxis[n].min == "function" ? t.yaxis[n].min(u) : t.yaxis[n].min), t.yaxis[n].max !== void 0 && (p = typeof t.yaxis[n].max == "function" ? t.yaxis[n].max(p) : t.yaxis[n].max), a.barGroups = a.barGroups.filter(function(w, l, g) {
            return g.indexOf(w) === l;
          }), e.setYScaleForIndex(n, u, p), o.forEach(function(w) {
            r[w] = a.yAxisScale[n].niceMin, s[w] = a.yAxisScale[n].niceMax;
          });
        }() : e.setYScaleForIndex(n, 0, -Number.MAX_VALUE);
      });
    } }]), y;
  }(), $t = function() {
    function y(e) {
      T(this, y), this.ctx = e, this.w = e.w, this.scales = new ma(e);
    }
    return E(y, [{ key: "init", value: function() {
      this.setYRange(), this.setXRange(), this.setZRange();
    } }, { key: "getMinYMaxY", value: function(e) {
      var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Number.MAX_VALUE, a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : -Number.MAX_VALUE, i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null, r = this.w.config, s = this.w.globals, o = -Number.MAX_VALUE, n = Number.MIN_VALUE;
      i === null && (i = e + 1);
      var h = s.series, d = h, c = h;
      r.chart.type === "candlestick" ? (d = s.seriesCandleL, c = s.seriesCandleH) : r.chart.type === "boxPlot" ? (d = s.seriesCandleO, c = s.seriesCandleC) : s.isRangeData && (d = s.seriesRangeStart, c = s.seriesRangeEnd);
      var u = !1;
      if (s.seriesX.length >= i) {
        var p, m = (p = s.brushSource) === null || p === void 0 ? void 0 : p.w.config.chart.brush;
        (r.chart.zoom.enabled && r.chart.zoom.autoScaleYaxis || m != null && m.enabled && m != null && m.autoScaleYaxis) && (u = !0);
      }
      for (var f = e; f < i; f++) {
        s.dataPoints = Math.max(s.dataPoints, h[f].length);
        var b = r.series[f].type;
        s.categoryLabels.length && (s.dataPoints = s.categoryLabels.filter(function(x) {
          return x !== void 0;
        }).length), s.labels.length && r.xaxis.type !== "datetime" && s.series.reduce(function(x, k) {
          return x + k.length;
        }, 0) !== 0 && (s.dataPoints = Math.max(s.dataPoints, s.labels.length));
        var v = 0, w = h[f].length - 1;
        if (u) {
          if (r.xaxis.min) for (; v < w && s.seriesX[f][v] < r.xaxis.min; v++) ;
          if (r.xaxis.max) for (; w > v && s.seriesX[f][w] > r.xaxis.max; w--) ;
        }
        for (var l = v; l <= w && l < s.series[f].length; l++) {
          var g = h[f][l];
          if (g !== null && z.isNumber(g)) {
            switch (c[f][l] !== void 0 && (o = Math.max(o, c[f][l]), t = Math.min(t, c[f][l])), d[f][l] !== void 0 && (t = Math.min(t, d[f][l]), a = Math.max(a, d[f][l])), b) {
              case "candlestick":
                s.seriesCandleC[f][l] !== void 0 && (o = Math.max(o, s.seriesCandleH[f][l]), t = Math.min(t, s.seriesCandleL[f][l]));
                break;
              case "boxPlot":
                s.seriesCandleC[f][l] !== void 0 && (o = Math.max(o, s.seriesCandleC[f][l]), t = Math.min(t, s.seriesCandleO[f][l]));
            }
            b && b !== "candlestick" && b !== "boxPlot" && b !== "rangeArea" && b !== "rangeBar" && (o = Math.max(o, s.series[f][l]), t = Math.min(t, s.series[f][l])), a = o, s.seriesGoals[f] && s.seriesGoals[f][l] && Array.isArray(s.seriesGoals[f][l]) && s.seriesGoals[f][l].forEach(function(x) {
              n !== Number.MIN_VALUE && (n = Math.min(n, x.value), t = n), o = Math.max(o, x.value), a = o;
            }), z.isFloat(g) && (g = z.noExponents(g), s.yValueDecimal = Math.max(s.yValueDecimal, g.toString().split(".")[1].length)), n > d[f][l] && d[f][l] < 0 && (n = d[f][l]);
          } else s.hasNullValues = !0;
        }
        b !== "bar" && b !== "column" || (n < 0 && o < 0 && (o = 0, a = Math.max(a, 0)), n === Number.MIN_VALUE && (n = 0, t = Math.min(t, 0)));
      }
      return r.chart.type === "rangeBar" && s.seriesRangeStart.length && s.isBarHorizontal && (n = t), r.chart.type === "bar" && (n < 0 && o < 0 && (o = 0), n === Number.MIN_VALUE && (n = 0)), { minY: n, maxY: o, lowestY: t, highestY: a };
    } }, { key: "setYRange", value: function() {
      var e = this.w.globals, t = this.w.config;
      e.maxY = -Number.MAX_VALUE, e.minY = Number.MIN_VALUE;
      var a, i = Number.MAX_VALUE;
      if (e.isMultipleYAxis) {
        i = Number.MAX_VALUE;
        for (var r = 0; r < e.series.length; r++) a = this.getMinYMaxY(r), e.minYArr[r] = a.lowestY, e.maxYArr[r] = a.highestY, i = Math.min(i, a.lowestY);
      }
      return a = this.getMinYMaxY(0, i, null, e.series.length), t.chart.type === "bar" ? (e.minY = a.minY, e.maxY = a.maxY) : (e.minY = a.lowestY, e.maxY = a.highestY), i = a.lowestY, t.chart.stacked && this._setStackedMinMax(), t.chart.type === "line" || t.chart.type === "area" || t.chart.type === "scatter" || t.chart.type === "candlestick" || t.chart.type === "boxPlot" || t.chart.type === "rangeBar" && !e.isBarHorizontal ? e.minY === Number.MIN_VALUE && i !== -Number.MAX_VALUE && i !== e.maxY && (e.minY = i) : e.minY = e.minY !== Number.MIN_VALUE ? Math.min(a.minY, e.minY) : a.minY, t.yaxis.forEach(function(s, o) {
        s.max !== void 0 && (typeof s.max == "number" ? e.maxYArr[o] = s.max : typeof s.max == "function" && (e.maxYArr[o] = s.max(e.isMultipleYAxis ? e.maxYArr[o] : e.maxY)), e.maxY = e.maxYArr[o]), s.min !== void 0 && (typeof s.min == "number" ? e.minYArr[o] = s.min : typeof s.min == "function" && (e.minYArr[o] = s.min(e.isMultipleYAxis ? e.minYArr[o] === Number.MIN_VALUE ? 0 : e.minYArr[o] : e.minY)), e.minY = e.minYArr[o]);
      }), e.isBarHorizontal && ["min", "max"].forEach(function(s) {
        t.xaxis[s] !== void 0 && typeof t.xaxis[s] == "number" && (s === "min" ? e.minY = t.xaxis[s] : e.maxY = t.xaxis[s]);
      }), e.isMultipleYAxis ? (this.scales.scaleMultipleYAxes(), e.minY = i) : (this.scales.setYScaleForIndex(0, e.minY, e.maxY), e.minY = e.yAxisScale[0].niceMin, e.maxY = e.yAxisScale[0].niceMax, e.minYArr[0] = e.minY, e.maxYArr[0] = e.maxY), e.barGroups = [], e.lineGroups = [], e.areaGroups = [], t.series.forEach(function(s) {
        switch (s.type || t.chart.type) {
          case "bar":
          case "column":
            e.barGroups.push(s.group);
            break;
          case "line":
            e.lineGroups.push(s.group);
            break;
          case "area":
            e.areaGroups.push(s.group);
        }
      }), e.barGroups = e.barGroups.filter(function(s, o, n) {
        return n.indexOf(s) === o;
      }), e.lineGroups = e.lineGroups.filter(function(s, o, n) {
        return n.indexOf(s) === o;
      }), e.areaGroups = e.areaGroups.filter(function(s, o, n) {
        return n.indexOf(s) === o;
      }), { minY: e.minY, maxY: e.maxY, minYArr: e.minYArr, maxYArr: e.maxYArr, yAxisScale: e.yAxisScale };
    } }, { key: "setXRange", value: function() {
      var e = this.w.globals, t = this.w.config, a = t.xaxis.type === "numeric" || t.xaxis.type === "datetime" || t.xaxis.type === "category" && !e.noLabelsProvided || e.noLabelsProvided || e.isXNumeric;
      if (e.isXNumeric && function() {
        for (var n = 0; n < e.series.length; n++) if (e.labels[n]) for (var h = 0; h < e.labels[n].length; h++) e.labels[n][h] !== null && z.isNumber(e.labels[n][h]) && (e.maxX = Math.max(e.maxX, e.labels[n][h]), e.initialMaxX = Math.max(e.maxX, e.labels[n][h]), e.minX = Math.min(e.minX, e.labels[n][h]), e.initialMinX = Math.min(e.minX, e.labels[n][h]));
      }(), e.noLabelsProvided && t.xaxis.categories.length === 0 && (e.maxX = e.labels[e.labels.length - 1], e.initialMaxX = e.labels[e.labels.length - 1], e.minX = 1, e.initialMinX = 1), e.isXNumeric || e.noLabelsProvided || e.dataFormatXNumeric) {
        var i = 10;
        if (t.xaxis.tickAmount === void 0) i = Math.round(e.svgWidth / 150), t.xaxis.type === "numeric" && e.dataPoints < 30 && (i = e.dataPoints - 1), i > e.dataPoints && e.dataPoints !== 0 && (i = e.dataPoints - 1);
        else if (t.xaxis.tickAmount === "dataPoints") {
          if (e.series.length > 1 && (i = e.series[e.maxValsInArrayIndex].length - 1), e.isXNumeric) {
            var r = e.maxX - e.minX;
            r < 30 && (i = r - 1);
          }
        } else i = t.xaxis.tickAmount;
        if (e.xTickAmount = i, t.xaxis.max !== void 0 && typeof t.xaxis.max == "number" && (e.maxX = t.xaxis.max), t.xaxis.min !== void 0 && typeof t.xaxis.min == "number" && (e.minX = t.xaxis.min), t.xaxis.range !== void 0 && (e.minX = e.maxX - t.xaxis.range), e.minX !== Number.MAX_VALUE && e.maxX !== -Number.MAX_VALUE) if (t.xaxis.convertedCatToNumeric && !e.dataFormatXNumeric) {
          for (var s = [], o = e.minX - 1; o < e.maxX; o++) s.push(o + 1);
          e.xAxisScale = { result: s, niceMin: s[0], niceMax: s[s.length - 1] };
        } else e.xAxisScale = this.scales.setXScale(e.minX, e.maxX);
        else e.xAxisScale = this.scales.linearScale(0, i, i, 0, t.xaxis.stepSize), e.noLabelsProvided && e.labels.length > 0 && (e.xAxisScale = this.scales.linearScale(1, e.labels.length, i - 1, 0, t.xaxis.stepSize), e.seriesX = e.labels.slice());
        a && (e.labels = e.xAxisScale.result.slice());
      }
      return e.isBarHorizontal && e.labels.length && (e.xTickAmount = e.labels.length), this._handleSingleDataPoint(), this._getMinXDiff(), { minX: e.minX, maxX: e.maxX };
    } }, { key: "setZRange", value: function() {
      var e = this.w.globals;
      if (e.isDataXYZ) {
        for (var t = 0; t < e.series.length; t++) if (e.seriesZ[t] !== void 0) for (var a = 0; a < e.seriesZ[t].length; a++) e.seriesZ[t][a] !== null && z.isNumber(e.seriesZ[t][a]) && (e.maxZ = Math.max(e.maxZ, e.seriesZ[t][a]), e.minZ = Math.min(e.minZ, e.seriesZ[t][a]));
      }
    } }, { key: "_handleSingleDataPoint", value: function() {
      var e = this.w.globals, t = this.w.config;
      if (e.minX === e.maxX) {
        var a = new de(this.ctx);
        if (t.xaxis.type === "datetime") {
          var i = a.getDate(e.minX);
          t.xaxis.labels.datetimeUTC ? i.setUTCDate(i.getUTCDate() - 2) : i.setDate(i.getDate() - 2), e.minX = new Date(i).getTime();
          var r = a.getDate(e.maxX);
          t.xaxis.labels.datetimeUTC ? r.setUTCDate(r.getUTCDate() + 2) : r.setDate(r.getDate() + 2), e.maxX = new Date(r).getTime();
        } else (t.xaxis.type === "numeric" || t.xaxis.type === "category" && !e.noLabelsProvided) && (e.minX = e.minX - 2, e.initialMinX = e.minX, e.maxX = e.maxX + 2, e.initialMaxX = e.maxX);
      }
    } }, { key: "_getMinXDiff", value: function() {
      var e = this.w.globals;
      e.isXNumeric && e.seriesX.forEach(function(t, a) {
        t.length === 1 && t.push(e.seriesX[e.maxValsInArrayIndex][e.seriesX[e.maxValsInArrayIndex].length - 1]);
        var i = t.slice();
        i.sort(function(r, s) {
          return r - s;
        }), i.forEach(function(r, s) {
          if (s > 0) {
            var o = r - i[s - 1];
            o > 0 && (e.minXDiff = Math.min(o, e.minXDiff));
          }
        }), e.dataPoints !== 1 && e.minXDiff !== Number.MAX_VALUE || (e.minXDiff = 0.5);
      });
    } }, { key: "_setStackedMinMax", value: function() {
      var e = this, t = this.w.globals;
      if (t.series.length) {
        var a = t.seriesGroups;
        a.length || (a = [this.w.globals.seriesNames.map(function(s) {
          return s;
        })]);
        var i = {}, r = {};
        a.forEach(function(s) {
          i[s] = [], r[s] = [], e.w.config.series.map(function(o, n) {
            return s.indexOf(t.seriesNames[n]) > -1 ? n : null;
          }).filter(function(o) {
            return o !== null;
          }).forEach(function(o) {
            for (var n = 0; n < t.series[t.maxValsInArrayIndex].length; n++) {
              var h, d, c, u;
              i[s][n] === void 0 && (i[s][n] = 0, r[s][n] = 0), (e.w.config.chart.stacked && !t.comboCharts || e.w.config.chart.stacked && t.comboCharts && (!e.w.config.chart.stackOnlyBar || ((h = e.w.config.series) === null || h === void 0 || (d = h[o]) === null || d === void 0 ? void 0 : d.type) === "bar" || ((c = e.w.config.series) === null || c === void 0 || (u = c[o]) === null || u === void 0 ? void 0 : u.type) === "column")) && t.series[o][n] !== null && z.isNumber(t.series[o][n]) && (t.series[o][n] > 0 ? i[s][n] += parseFloat(t.series[o][n]) + 1e-4 : r[s][n] += parseFloat(t.series[o][n]));
            }
          });
        }), Object.entries(i).forEach(function(s) {
          var o = J(s, 1)[0];
          i[o].forEach(function(n, h) {
            t.maxY = Math.max(t.maxY, i[o][h]), t.minY = Math.min(t.minY, r[o][h]);
          });
        });
      }
    } }]), y;
  }(), Ut = function() {
    function y(e, t) {
      T(this, y), this.ctx = e, this.elgrid = t, this.w = e.w;
      var a = this.w;
      this.xaxisFontSize = a.config.xaxis.labels.style.fontSize, this.axisFontFamily = a.config.xaxis.labels.style.fontFamily, this.xaxisForeColors = a.config.xaxis.labels.style.colors, this.isCategoryBarHorizontal = a.config.chart.type === "bar" && a.config.plotOptions.bar.horizontal, this.xAxisoffX = a.config.xaxis.position === "bottom" ? a.globals.gridHeight : 0, this.drawnLabels = [], this.axesUtils = new Le(e);
    }
    return E(y, [{ key: "drawYaxis", value: function(e) {
      var t = this.w, a = new X(this.ctx), i = t.config.yaxis[e].labels.style, r = i.fontSize, s = i.fontFamily, o = i.fontWeight, n = a.group({ class: "apexcharts-yaxis", rel: e, transform: "translate(".concat(t.globals.translateYAxisX[e], ", 0)") });
      if (this.axesUtils.isYAxisHidden(e)) return n;
      var h = a.group({ class: "apexcharts-yaxis-texts-g" });
      n.add(h);
      var d = t.globals.yAxisScale[e].result.length - 1, c = t.globals.gridHeight / d, u = t.globals.yLabelFormatters[e], p = this.axesUtils.checkForReversedLabels(e, t.globals.yAxisScale[e].result.slice());
      if (t.config.yaxis[e].labels.show) {
        var m = t.globals.translateY + t.config.yaxis[e].labels.offsetY;
        t.globals.isBarHorizontal ? m = 0 : t.config.chart.type === "heatmap" && (m -= c / 2), m += parseInt(r, 10) / 3;
        for (var f = d; f >= 0; f--) {
          var b = u(p[f], f, t), v = t.config.yaxis[e].labels.padding;
          t.config.yaxis[e].opposite && t.config.yaxis.length !== 0 && (v *= -1);
          var w = this.getTextAnchor(t.config.yaxis[e].labels.align, t.config.yaxis[e].opposite), l = this.axesUtils.getYAxisForeColor(i.colors, e), g = Array.isArray(l) ? l[f] : l, x = z.listToArray(t.globals.dom.baseEl.querySelectorAll(".apexcharts-yaxis[rel='".concat(e, "'] .apexcharts-yaxis-label tspan"))).map(function(S) {
            return S.textContent;
          }), k = a.drawText({ x: v, y: m, text: x.includes(b) && !t.config.yaxis[e].labels.showDuplicates ? "" : b, textAnchor: w, fontSize: r, fontFamily: s, fontWeight: o, maxWidth: t.config.yaxis[e].labels.maxWidth, foreColor: g, isPlainText: !1, cssClass: "apexcharts-yaxis-label ".concat(i.cssClass) });
          h.add(k), this.addTooltip(k, b), t.config.yaxis[e].labels.rotate !== 0 && this.rotateLabel(a, k, firstLabel, t.config.yaxis[e].labels.rotate), m += c;
        }
      }
      return this.addYAxisTitle(a, n, e), this.addAxisBorder(a, n, e, d, c), n;
    } }, { key: "getTextAnchor", value: function(e, t) {
      return e === "left" ? "start" : e === "center" ? "middle" : e === "right" ? "end" : t ? "start" : "end";
    } }, { key: "addTooltip", value: function(e, t) {
      var a = document.createElementNS(this.w.globals.SVGNS, "title");
      a.textContent = Array.isArray(t) ? t.join(" ") : t, e.node.appendChild(a);
    } }, { key: "rotateLabel", value: function(e, t, a, i) {
      var r = e.rotateAroundCenter(a.node), s = e.rotateAroundCenter(t.node);
      t.node.setAttribute("transform", "rotate(".concat(i, " ").concat(r.x, " ").concat(s.y, ")"));
    } }, { key: "addYAxisTitle", value: function(e, t, a) {
      var i = this.w;
      if (i.config.yaxis[a].title.text !== void 0) {
        var r = e.group({ class: "apexcharts-yaxis-title" }), s = i.config.yaxis[a].opposite ? i.globals.translateYAxisX[a] : 0, o = e.drawText({ x: s, y: i.globals.gridHeight / 2 + i.globals.translateY + i.config.yaxis[a].title.offsetY, text: i.config.yaxis[a].title.text, textAnchor: "end", foreColor: i.config.yaxis[a].title.style.color, fontSize: i.config.yaxis[a].title.style.fontSize, fontWeight: i.config.yaxis[a].title.style.fontWeight, fontFamily: i.config.yaxis[a].title.style.fontFamily, cssClass: "apexcharts-yaxis-title-text ".concat(i.config.yaxis[a].title.style.cssClass) });
        r.add(o), t.add(r);
      }
    } }, { key: "addAxisBorder", value: function(e, t, a, i, r) {
      var s = this.w, o = s.config.yaxis[a].axisBorder, n = 31 + o.offsetX;
      if (s.config.yaxis[a].opposite && (n = -31 - o.offsetX), o.show) {
        var h = e.drawLine(n, s.globals.translateY + o.offsetY - 2, n, s.globals.gridHeight + s.globals.translateY + o.offsetY + 2, o.color, 0, o.width);
        t.add(h);
      }
      s.config.yaxis[a].axisTicks.show && this.axesUtils.drawYAxisTicks(n, i, o, s.config.yaxis[a].axisTicks, a, r, t);
    } }, { key: "drawYaxisInversed", value: function(e) {
      var t = this.w, a = new X(this.ctx), i = a.group({ class: "apexcharts-xaxis apexcharts-yaxis-inversed" }), r = a.group({ class: "apexcharts-xaxis-texts-g", transform: "translate(".concat(t.globals.translateXAxisX, ", ").concat(t.globals.translateXAxisY, ")") });
      i.add(r);
      var s = t.globals.yAxisScale[e].result.length - 1, o = t.globals.gridWidth / s + 0.1, n = o + t.config.xaxis.labels.offsetX, h = t.globals.xLabelFormatter, d = this.axesUtils.checkForReversedLabels(e, t.globals.yAxisScale[e].result.slice()), c = t.globals.timescaleLabels;
      if (c.length > 0 && (this.xaxisLabels = c.slice(), s = (d = c.slice()).length), t.config.xaxis.labels.show) for (var u = c.length ? 0 : s; c.length ? u < c.length : u >= 0; c.length ? u++ : u--) {
        var p = h(d[u], u, t), m = t.globals.gridWidth + t.globals.padHorizontal - (n - o + t.config.xaxis.labels.offsetX);
        if (c.length) {
          var f = this.axesUtils.getLabel(d, c, m, u, this.drawnLabels, this.xaxisFontSize);
          m = f.x, p = f.text, this.drawnLabels.push(f.text), u === 0 && t.globals.skipFirstTimelinelabel && (p = ""), u === d.length - 1 && t.globals.skipLastTimelinelabel && (p = "");
        }
        var b = a.drawText({ x: m, y: this.xAxisoffX + t.config.xaxis.labels.offsetY + 30 - (t.config.xaxis.position === "top" ? t.globals.xAxisHeight + t.config.xaxis.axisTicks.height - 2 : 0), text: p, textAnchor: "middle", foreColor: Array.isArray(this.xaxisForeColors) ? this.xaxisForeColors[e] : this.xaxisForeColors, fontSize: this.xaxisFontSize, fontFamily: this.xaxisFontFamily, fontWeight: t.config.xaxis.labels.style.fontWeight, isPlainText: !1, cssClass: "apexcharts-xaxis-label ".concat(t.config.xaxis.labels.style.cssClass) });
        r.add(b), b.tspan(p), this.addTooltip(b, p), n += o;
      }
      return this.inversedYAxisTitleText(i), this.inversedYAxisBorder(i), i;
    } }, { key: "inversedYAxisBorder", value: function(e) {
      var t = this.w, a = new X(this.ctx), i = t.config.xaxis.axisBorder;
      if (i.show) {
        var r = 0;
        t.config.chart.type === "bar" && t.globals.isXNumeric && (r -= 15);
        var s = a.drawLine(t.globals.padHorizontal + r + i.offsetX, this.xAxisoffX, t.globals.gridWidth, this.xAxisoffX, i.color, 0, i.height);
        this.elgrid && this.elgrid.elGridBorders && t.config.grid.show ? this.elgrid.elGridBorders.add(s) : e.add(s);
      }
    } }, { key: "inversedYAxisTitleText", value: function(e) {
      var t = this.w, a = new X(this.ctx);
      if (t.config.xaxis.title.text !== void 0) {
        var i = a.group({ class: "apexcharts-xaxis-title apexcharts-yaxis-title-inversed" }), r = a.drawText({ x: t.globals.gridWidth / 2 + t.config.xaxis.title.offsetX, y: this.xAxisoffX + parseFloat(this.xaxisFontSize) + parseFloat(t.config.xaxis.title.style.fontSize) + t.config.xaxis.title.offsetY + 20, text: t.config.xaxis.title.text, textAnchor: "middle", fontSize: t.config.xaxis.title.style.fontSize, fontFamily: t.config.xaxis.title.style.fontFamily, fontWeight: t.config.xaxis.title.style.fontWeight, foreColor: t.config.xaxis.title.style.color, cssClass: "apexcharts-xaxis-title-text ".concat(t.config.xaxis.title.style.cssClass) });
        i.add(r), e.add(i);
      }
    } }, { key: "yAxisTitleRotate", value: function(e, t) {
      var a = this.w, i = new X(this.ctx), r = a.globals.dom.baseEl.querySelector(".apexcharts-yaxis[rel='".concat(e, "'] .apexcharts-yaxis-texts-g")), s = r ? r.getBoundingClientRect() : { width: 0, height: 0 }, o = a.globals.dom.baseEl.querySelector(".apexcharts-yaxis[rel='".concat(e, "'] .apexcharts-yaxis-title text")), n = o ? o.getBoundingClientRect() : { width: 0, height: 0 };
      if (o) {
        var h = this.xPaddingForYAxisTitle(e, s, n, t);
        o.setAttribute("x", h.xPos - (t ? 10 : 0));
        var d = i.rotateAroundCenter(o);
        o.setAttribute("transform", "rotate(".concat(t ? -1 * a.config.yaxis[e].title.rotate : a.config.yaxis[e].title.rotate, " ").concat(d.x, " ").concat(d.y, ")"));
      }
    } }, { key: "xPaddingForYAxisTitle", value: function(e, t, a, i) {
      var r = this.w, s = 0, o = 10;
      return r.config.yaxis[e].title.text === void 0 || e < 0 ? { xPos: s, padd: 0 } : (i ? s = t.width + r.config.yaxis[e].title.offsetX + a.width / 2 + o / 2 : (s = -1 * t.width + r.config.yaxis[e].title.offsetX + o / 2 + a.width / 2, r.globals.isBarHorizontal && (o = 25, s = -1 * t.width - r.config.yaxis[e].title.offsetX - o)), { xPos: s, padd: o });
    } }, { key: "setYAxisXPosition", value: function(e, t) {
      var a = this.w, i = 0, r = 0, s = 18, o = 1;
      a.config.yaxis.length > 1 && (this.multipleYs = !0), a.config.yaxis.forEach(function(n, h) {
        var d = a.globals.ignoreYAxisIndexes.includes(h) || !n.show || n.floating || e[h].width === 0, c = e[h].width + t[h].width;
        n.opposite ? a.globals.isBarHorizontal ? (r = a.globals.gridWidth + a.globals.translateX - 1, a.globals.translateYAxisX[h] = r - n.labels.offsetX) : (r = a.globals.gridWidth + a.globals.translateX + o, d || (o += c + 20), a.globals.translateYAxisX[h] = r - n.labels.offsetX + 20) : (i = a.globals.translateX - s, d || (s += c + 20), a.globals.translateYAxisX[h] = i + n.labels.offsetX);
      });
    } }, { key: "setYAxisTextAlignments", value: function() {
      var e = this.w;
      z.listToArray(e.globals.dom.baseEl.getElementsByClassName("apexcharts-yaxis")).forEach(function(t, a) {
        var i = e.config.yaxis[a];
        if (i && !i.floating && i.labels.align !== void 0) {
          var r = e.globals.dom.baseEl.querySelector(".apexcharts-yaxis[rel='".concat(a, "'] .apexcharts-yaxis-texts-g")), s = z.listToArray(e.globals.dom.baseEl.querySelectorAll(".apexcharts-yaxis[rel='".concat(a, "'] .apexcharts-yaxis-label"))), o = r.getBoundingClientRect();
          s.forEach(function(n) {
            n.setAttribute("text-anchor", i.labels.align);
          }), i.labels.align !== "left" || i.opposite ? i.labels.align === "center" ? r.setAttribute("transform", "translate(".concat(o.width / 2 * (i.opposite ? 1 : -1), ", 0)")) : i.labels.align === "right" && i.opposite && r.setAttribute("transform", "translate(".concat(o.width, ", 0)")) : r.setAttribute("transform", "translate(-".concat(o.width, ", 0)"));
        }
      });
    } }]), y;
  }(), Ka = function() {
    function y(e) {
      T(this, y), this.ctx = e, this.w = e.w, this.documentEvent = z.bind(this.documentEvent, this);
    }
    return E(y, [{ key: "addEventListener", value: function(e, t) {
      var a = this.w;
      a.globals.events.hasOwnProperty(e) ? a.globals.events[e].push(t) : a.globals.events[e] = [t];
    } }, { key: "removeEventListener", value: function(e, t) {
      var a = this.w;
      if (a.globals.events.hasOwnProperty(e)) {
        var i = a.globals.events[e].indexOf(t);
        i !== -1 && a.globals.events[e].splice(i, 1);
      }
    } }, { key: "fireEvent", value: function(e, t) {
      var a = this.w;
      if (a.globals.events.hasOwnProperty(e)) {
        t && t.length || (t = []);
        for (var i = a.globals.events[e], r = i.length, s = 0; s < r; s++) i[s].apply(null, t);
      }
    } }, { key: "setupEventHandlers", value: function() {
      var e = this, t = this.w, a = this.ctx, i = t.globals.dom.baseEl.querySelector(t.globals.chartClass);
      this.ctx.eventList.forEach(function(r) {
        i.addEventListener(r, function(s) {
          var o = Object.assign({}, t, { seriesIndex: t.globals.axisCharts ? t.globals.capturedSeriesIndex : 0, dataPointIndex: t.globals.capturedDataPointIndex });
          s.type === "mousemove" || s.type === "touchmove" ? typeof t.config.chart.events.mouseMove == "function" && t.config.chart.events.mouseMove(s, a, o) : s.type === "mouseleave" || s.type === "touchleave" ? typeof t.config.chart.events.mouseLeave == "function" && t.config.chart.events.mouseLeave(s, a, o) : (s.type === "mouseup" && s.which === 1 || s.type === "touchend") && (typeof t.config.chart.events.click == "function" && t.config.chart.events.click(s, a, o), a.ctx.events.fireEvent("click", [s, a, o]));
        }, { capture: !1, passive: !0 });
      }), this.ctx.eventList.forEach(function(r) {
        t.globals.dom.baseEl.addEventListener(r, e.documentEvent, { passive: !0 });
      }), this.ctx.core.setupBrushHandler();
    } }, { key: "documentEvent", value: function(e) {
      var t = this.w, a = e.target.className;
      if (e.type === "click") {
        var i = t.globals.dom.baseEl.querySelector(".apexcharts-menu");
        i && i.classList.contains("apexcharts-menu-open") && a !== "apexcharts-menu-icon" && i.classList.remove("apexcharts-menu-open");
      }
      t.globals.clientX = e.type === "touchmove" ? e.touches[0].clientX : e.clientX, t.globals.clientY = e.type === "touchmove" ? e.touches[0].clientY : e.clientY;
    } }]), y;
  }(), Qa = function() {
    function y(e) {
      T(this, y), this.ctx = e, this.w = e.w;
    }
    return E(y, [{ key: "setCurrentLocaleValues", value: function(e) {
      var t = this.w.config.chart.locales;
      window.Apex.chart && window.Apex.chart.locales && window.Apex.chart.locales.length > 0 && (t = this.w.config.chart.locales.concat(window.Apex.chart.locales));
      var a = t.filter(function(r) {
        return r.name === e;
      })[0];
      if (!a) throw new Error("Wrong locale name provided. Please make sure you set the correct locale name in options");
      var i = z.extend(nt, a);
      this.w.globals.locale = i.options;
    } }]), y;
  }(), ei = function() {
    function y(e) {
      T(this, y), this.ctx = e, this.w = e.w;
    }
    return E(y, [{ key: "drawAxis", value: function(e, t) {
      var a, i, r = this, s = this.w.globals, o = this.w.config, n = new vt(this.ctx, t), h = new Ut(this.ctx, t);
      s.axisCharts && e !== "radar" && (s.isBarHorizontal ? (i = h.drawYaxisInversed(0), a = n.drawXaxisInversed(0), s.dom.elGraphical.add(a), s.dom.elGraphical.add(i)) : (a = n.drawXaxis(), s.dom.elGraphical.add(a), o.yaxis.map(function(d, c) {
        if (s.ignoreYAxisIndexes.indexOf(c) === -1 && (i = h.drawYaxis(c), s.dom.Paper.add(i), r.w.config.grid.position === "back")) {
          var u = s.dom.Paper.children()[1];
          u.remove(), s.dom.Paper.add(u);
        }
      })));
    } }]), y;
  }(), Zt = function() {
    function y(e) {
      T(this, y), this.ctx = e, this.w = e.w;
    }
    return E(y, [{ key: "drawXCrosshairs", value: function() {
      var e = this.w, t = new X(this.ctx), a = new Pe(this.ctx), i = e.config.xaxis.crosshairs.fill.gradient, r = e.config.xaxis.crosshairs.dropShadow, s = e.config.xaxis.crosshairs.fill.type, o = i.colorFrom, n = i.colorTo, h = i.opacityFrom, d = i.opacityTo, c = i.stops, u = r.enabled, p = r.left, m = r.top, f = r.blur, b = r.color, v = r.opacity, w = e.config.xaxis.crosshairs.fill.color;
      if (e.config.xaxis.crosshairs.show) {
        s === "gradient" && (w = t.drawGradient("vertical", o, n, h, d, null, c, null));
        var l = t.drawRect();
        e.config.xaxis.crosshairs.width === 1 && (l = t.drawLine());
        var g = e.globals.gridHeight;
        (!z.isNumber(g) || g < 0) && (g = 0);
        var x = e.config.xaxis.crosshairs.width;
        (!z.isNumber(x) || x < 0) && (x = 0), l.attr({ class: "apexcharts-xcrosshairs", x: 0, y: 0, y2: g, width: x, height: g, fill: w, filter: "none", "fill-opacity": e.config.xaxis.crosshairs.opacity, stroke: e.config.xaxis.crosshairs.stroke.color, "stroke-width": e.config.xaxis.crosshairs.stroke.width, "stroke-dasharray": e.config.xaxis.crosshairs.stroke.dashArray }), u && (l = a.dropShadow(l, { left: p, top: m, blur: f, color: b, opacity: v })), e.globals.dom.elGraphical.add(l);
      }
    } }, { key: "drawYCrosshairs", value: function() {
      var e = this.w, t = new X(this.ctx), a = e.config.yaxis[0].crosshairs, i = e.globals.barPadForNumericAxis;
      if (e.config.yaxis[0].crosshairs.show) {
        var r = t.drawLine(-i, 0, e.globals.gridWidth + i, 0, a.stroke.color, a.stroke.dashArray, a.stroke.width);
        r.attr({ class: "apexcharts-ycrosshairs" }), e.globals.dom.elGraphical.add(r);
      }
      var s = t.drawLine(-i, 0, e.globals.gridWidth + i, 0, a.stroke.color, 0, 0);
      s.attr({ class: "apexcharts-ycrosshairs-hidden" }), e.globals.dom.elGraphical.add(s);
    } }]), y;
  }(), ti = function() {
    function y(e) {
      T(this, y), this.ctx = e, this.w = e.w;
    }
    return E(y, [{ key: "checkResponsiveConfig", value: function(e) {
      var t = this, a = this.w, i = a.config;
      if (i.responsive.length !== 0) {
        var r = i.responsive.slice();
        r.sort(function(h, d) {
          return h.breakpoint > d.breakpoint ? 1 : d.breakpoint > h.breakpoint ? -1 : 0;
        }).reverse();
        var s = new bt({}), o = function() {
          var h = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, d = r[0].breakpoint, c = window.innerWidth > 0 ? window.innerWidth : screen.width;
          if (c > d) {
            var u = z.clone(a.globals.initialConfig);
            u.series = z.clone(a.config.series);
            var p = Te.extendArrayProps(s, u, a);
            h = z.extend(p, h), h = z.extend(a.config, h), t.overrideResponsiveOptions(h);
          } else for (var m = 0; m < r.length; m++) c < r[m].breakpoint && (h = Te.extendArrayProps(s, r[m].options, a), h = z.extend(a.config, h), t.overrideResponsiveOptions(h));
        };
        if (e) {
          var n = Te.extendArrayProps(s, e, a);
          n = z.extend(a.config, n), o(n = z.extend(n, e));
        } else o({});
      }
    } }, { key: "overrideResponsiveOptions", value: function(e) {
      var t = new bt(e).init({ responsiveOverride: !0 });
      this.w.config = t;
    } }]), y;
  }(), ai = function() {
    function y(e) {
      T(this, y), this.ctx = e, this.w = e.w, this.colors = [], this.isColorFn = !1, this.isHeatmapDistributed = this.checkHeatmapDistributed(), this.isBarDistributed = this.checkBarDistributed();
    }
    return E(y, [{ key: "checkHeatmapDistributed", value: function() {
      var e = this.w.config, t = e.chart, a = e.plotOptions;
      return t.type === "treemap" && a.treemap && a.treemap.distributed || t.type === "heatmap" && a.heatmap && a.heatmap.distributed;
    } }, { key: "checkBarDistributed", value: function() {
      var e = this.w.config, t = e.chart, a = e.plotOptions;
      return a.bar && a.bar.distributed && (t.type === "bar" || t.type === "rangeBar");
    } }, { key: "init", value: function() {
      this.setDefaultColors();
    } }, { key: "setDefaultColors", value: function() {
      var e = this.w, t = new z();
      e.globals.dom.elWrap.classList.add("apexcharts-theme-".concat(e.config.theme.mode));
      var a = K(e.config.colors || e.config.fill.colors || []);
      e.globals.colors = this.getColors(a), this.applySeriesColors(e.globals.seriesColors, e.globals.colors), e.config.theme.monochrome.enabled && (e.globals.colors = this.getMonochromeColors(e.config.theme.monochrome, e.globals.series, t));
      var i = e.globals.colors.slice();
      this.pushExtraColors(e.globals.colors), this.applyColorTypes(["fill", "stroke"], i), this.applyDataLabelsColors(i), this.applyRadarPolygonsColors(), this.applyMarkersColors(i);
    } }, { key: "getColors", value: function(e) {
      var t = this, a = this.w;
      return e && e.length !== 0 ? Array.isArray(e) && e.length > 0 && typeof e[0] == "function" ? (this.isColorFn = !0, a.config.series.map(function(i, r) {
        var s = e[r] || e[0];
        return typeof s == "function" ? s({ value: a.globals.axisCharts ? a.globals.series[r][0] || 0 : a.globals.series[r], seriesIndex: r, dataPointIndex: r, w: t.w }) : s;
      })) : e : this.predefined();
    } }, { key: "applySeriesColors", value: function(e, t) {
      e.forEach(function(a, i) {
        a && (t[i] = a);
      });
    } }, { key: "getMonochromeColors", value: function(e, t, a) {
      var i = e.color, r = e.shadeIntensity, s = e.shadeTo, o = this.isBarDistributed || this.isHeatmapDistributed ? t[0].length * t.length : t.length, n = 1 / (o / r), h = 0;
      return Array.from({ length: o }, function() {
        var d = s === "dark" ? a.shadeColor(-1 * h, i) : a.shadeColor(h, i);
        return h += n, d;
      });
    } }, { key: "applyColorTypes", value: function(e, t) {
      var a = this, i = this.w;
      e.forEach(function(r) {
        i.globals[r].colors = i.config[r].colors === void 0 ? a.isColorFn ? i.config.colors : t : i.config[r].colors.slice(), a.pushExtraColors(i.globals[r].colors);
      });
    } }, { key: "applyDataLabelsColors", value: function(e) {
      var t = this.w;
      t.globals.dataLabels.style.colors = t.config.dataLabels.style.colors === void 0 ? e : t.config.dataLabels.style.colors.slice(), this.pushExtraColors(t.globals.dataLabels.style.colors, 50);
    } }, { key: "applyRadarPolygonsColors", value: function() {
      var e = this.w;
      e.globals.radarPolygons.fill.colors = e.config.plotOptions.radar.polygons.fill.colors === void 0 ? [e.config.theme.mode === "dark" ? "#424242" : "none"] : e.config.plotOptions.radar.polygons.fill.colors.slice(), this.pushExtraColors(e.globals.radarPolygons.fill.colors, 20);
    } }, { key: "applyMarkersColors", value: function(e) {
      var t = this.w;
      t.globals.markers.colors = t.config.markers.colors === void 0 ? e : t.config.markers.colors.slice(), this.pushExtraColors(t.globals.markers.colors);
    } }, { key: "pushExtraColors", value: function(e, t) {
      var a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null, i = this.w, r = t || i.globals.series.length;
      if (a === null && (a = this.isBarDistributed || this.isHeatmapDistributed || i.config.chart.type === "heatmap" && i.config.plotOptions.heatmap && i.config.plotOptions.heatmap.colorScale.inverse), a && i.globals.series.length && (r = i.globals.series[i.globals.maxValsInArrayIndex].length * i.globals.series.length), e.length < r) for (var s = r - e.length, o = 0; o < s; o++) e.push(e[o]);
    } }, { key: "updateThemeOptions", value: function(e) {
      e.chart = e.chart || {}, e.tooltip = e.tooltip || {};
      var t = e.theme.mode, a = t === "dark" ? "palette4" : t === "light" ? "palette1" : e.theme.palette || "palette1", i = t === "dark" ? "#f6f7f8" : t === "light" ? "#373d3f" : e.chart.foreColor || "#373d3f";
      return e.tooltip.theme = t || "light", e.chart.foreColor = i, e.theme.palette = a, e;
    } }, { key: "predefined", value: function() {
      var e = { palette1: ["#008FFB", "#00E396", "#FEB019", "#FF4560", "#775DD0"], palette2: ["#3f51b5", "#03a9f4", "#4caf50", "#f9ce1d", "#FF9800"], palette3: ["#33b2df", "#546E7A", "#d4526e", "#13d8aa", "#A5978B"], palette4: ["#4ecdc4", "#c7f464", "#81D4FA", "#fd6a6a", "#546E7A"], palette5: ["#2b908f", "#f9a3a4", "#90ee7e", "#fa4443", "#69d2e7"], palette6: ["#449DD1", "#F86624", "#EA3546", "#662E9B", "#C5D86D"], palette7: ["#D7263D", "#1B998B", "#2E294E", "#F46036", "#E2C044"], palette8: ["#662E9B", "#F86624", "#F9C80E", "#EA3546", "#43BCCD"], palette9: ["#5C4742", "#A5978B", "#8D5B4C", "#5A2A27", "#C4BBAF"], palette10: ["#A300D6", "#7D02EB", "#5653FE", "#2983FF", "#00B1F2"], default: ["#008FFB", "#00E396", "#FEB019", "#FF4560", "#775DD0"] };
      return e[this.w.config.theme.palette] || e.default;
    } }]), y;
  }(), ii = function() {
    function y(e) {
      T(this, y), this.ctx = e, this.w = e.w;
    }
    return E(y, [{ key: "draw", value: function() {
      this.drawTitleSubtitle("title"), this.drawTitleSubtitle("subtitle");
    } }, { key: "drawTitleSubtitle", value: function(e) {
      var t = this.w, a = e === "title" ? t.config.title : t.config.subtitle, i = t.globals.svgWidth / 2, r = a.offsetY, s = "middle";
      if (a.align === "left" ? (i = 10, s = "start") : a.align === "right" && (i = t.globals.svgWidth - 10, s = "end"), i += a.offsetX, r = r + parseInt(a.style.fontSize, 10) + a.margin / 2, a.text !== void 0) {
        var o = new X(this.ctx).drawText({ x: i, y: r, text: a.text, textAnchor: s, fontSize: a.style.fontSize, fontFamily: a.style.fontFamily, fontWeight: a.style.fontWeight, foreColor: a.style.color, opacity: 1 });
        o.node.setAttribute("class", "apexcharts-".concat(e, "-text")), t.globals.dom.Paper.add(o);
      }
    } }]), y;
  }(), si = function() {
    function y(e) {
      T(this, y), this.w = e.w, this.dCtx = e;
    }
    return E(y, [{ key: "getTitleSubtitleCoords", value: function(e) {
      var t = this.w, a = 0, i = 0, r = e === "title" ? t.config.title.floating : t.config.subtitle.floating, s = t.globals.dom.baseEl.querySelector(".apexcharts-".concat(e, "-text"));
      if (s !== null && !r) {
        var o = s.getBoundingClientRect();
        a = o.width, i = t.globals.axisCharts ? o.height + 5 : o.height;
      }
      return { width: a, height: i };
    } }, { key: "getLegendsRect", value: function() {
      var e = this.w, t = e.globals.dom.elLegendWrap;
      e.config.legend.height || e.config.legend.position !== "top" && e.config.legend.position !== "bottom" || (t.style.maxHeight = e.globals.svgHeight / 2 + "px");
      var a = Object.assign({}, z.getBoundingClientRect(t));
      return t !== null && !e.config.legend.floating && e.config.legend.show ? this.dCtx.lgRect = { x: a.x, y: a.y, height: a.height, width: a.height === 0 ? 0 : a.width } : this.dCtx.lgRect = { x: 0, y: 0, height: 0, width: 0 }, e.config.legend.position !== "left" && e.config.legend.position !== "right" || 1.5 * this.dCtx.lgRect.width > e.globals.svgWidth && (this.dCtx.lgRect.width = e.globals.svgWidth / 1.5), this.dCtx.lgRect;
    } }, { key: "getDatalabelsRect", value: function() {
      var e = this, t = this.w, a = [];
      t.config.series.forEach(function(n, h) {
        n.data.forEach(function(d, c) {
          var u;
          u = t.globals.series[h][c], i = t.config.dataLabels.formatter(u, { ctx: e.dCtx.ctx, seriesIndex: h, dataPointIndex: c, w: t }), a.push(i);
        });
      });
      var i = z.getLargestStringFromArr(a), r = new X(this.dCtx.ctx), s = t.config.dataLabels.style, o = r.getTextRects(i, parseInt(s.fontSize), s.fontFamily);
      return { width: 1.05 * o.width, height: o.height };
    } }, { key: "getLargestStringFromMultiArr", value: function(e, t) {
      var a = e;
      if (this.w.globals.isMultiLineX) {
        var i = t.map(function(s, o) {
          return Array.isArray(s) ? s.length : 1;
        }), r = Math.max.apply(Math, K(i));
        a = t[i.indexOf(r)];
      }
      return a;
    } }]), y;
  }(), ri = function() {
    function y(e) {
      T(this, y), this.w = e.w, this.dCtx = e;
    }
    return E(y, [{ key: "getxAxisLabelsCoords", value: function() {
      var e, t = this.w, a = t.globals.labels.slice();
      if (t.config.xaxis.convertedCatToNumeric && a.length === 0 && (a = t.globals.categoryLabels), t.globals.timescaleLabels.length > 0) {
        var i = this.getxAxisTimeScaleLabelsCoords();
        e = { width: i.width, height: i.height }, t.globals.rotateXLabels = !1;
      } else {
        this.dCtx.lgWidthForSideLegends = t.config.legend.position !== "left" && t.config.legend.position !== "right" || t.config.legend.floating ? 0 : this.dCtx.lgRect.width;
        var r = t.globals.xLabelFormatter, s = z.getLargestStringFromArr(a), o = this.dCtx.dimHelpers.getLargestStringFromMultiArr(s, a);
        t.globals.isBarHorizontal && (o = s = t.globals.yAxisScale[0].result.reduce(function(m, f) {
          return m.length > f.length ? m : f;
        }, 0));
        var n = new He(this.dCtx.ctx), h = s;
        s = n.xLabelFormat(r, s, h, { i: void 0, dateFormatter: new de(this.dCtx.ctx).formatDate, w: t }), o = n.xLabelFormat(r, o, h, { i: void 0, dateFormatter: new de(this.dCtx.ctx).formatDate, w: t }), (t.config.xaxis.convertedCatToNumeric && s === void 0 || String(s).trim() === "") && (o = s = "1");
        var d = new X(this.dCtx.ctx), c = d.getTextRects(s, t.config.xaxis.labels.style.fontSize), u = c;
        if (s !== o && (u = d.getTextRects(o, t.config.xaxis.labels.style.fontSize)), (e = { width: c.width >= u.width ? c.width : u.width, height: c.height >= u.height ? c.height : u.height }).width * a.length > t.globals.svgWidth - this.dCtx.lgWidthForSideLegends - this.dCtx.yAxisWidth - this.dCtx.gridPad.left - this.dCtx.gridPad.right && t.config.xaxis.labels.rotate !== 0 || t.config.xaxis.labels.rotateAlways) {
          if (!t.globals.isBarHorizontal) {
            t.globals.rotateXLabels = !0;
            var p = function(m) {
              return d.getTextRects(m, t.config.xaxis.labels.style.fontSize, t.config.xaxis.labels.style.fontFamily, "rotate(".concat(t.config.xaxis.labels.rotate, " 0 0)"), !1);
            };
            c = p(s), s !== o && (u = p(o)), e.height = (c.height > u.height ? c.height : u.height) / 1.5, e.width = c.width > u.width ? c.width : u.width;
          }
        } else t.globals.rotateXLabels = !1;
      }
      return t.config.xaxis.labels.show || (e = { width: 0, height: 0 }), { width: e.width, height: e.height };
    } }, { key: "getxAxisGroupLabelsCoords", value: function() {
      var e, t = this.w;
      if (!t.globals.hasXaxisGroups) return { width: 0, height: 0 };
      var a, i = ((e = t.config.xaxis.group.style) === null || e === void 0 ? void 0 : e.fontSize) || t.config.xaxis.labels.style.fontSize, r = t.globals.groups.map(function(c) {
        return c.title;
      }), s = z.getLargestStringFromArr(r), o = this.dCtx.dimHelpers.getLargestStringFromMultiArr(s, r), n = new X(this.dCtx.ctx), h = n.getTextRects(s, i), d = h;
      return s !== o && (d = n.getTextRects(o, i)), a = { width: h.width >= d.width ? h.width : d.width, height: h.height >= d.height ? h.height : d.height }, t.config.xaxis.labels.show || (a = { width: 0, height: 0 }), { width: a.width, height: a.height };
    } }, { key: "getxAxisTitleCoords", value: function() {
      var e = this.w, t = 0, a = 0;
      if (e.config.xaxis.title.text !== void 0) {
        var i = new X(this.dCtx.ctx).getTextRects(e.config.xaxis.title.text, e.config.xaxis.title.style.fontSize);
        t = i.width, a = i.height;
      }
      return { width: t, height: a };
    } }, { key: "getxAxisTimeScaleLabelsCoords", value: function() {
      var e, t = this.w;
      this.dCtx.timescaleLabels = t.globals.timescaleLabels.slice();
      var a = this.dCtx.timescaleLabels.map(function(r) {
        return r.value;
      }), i = a.reduce(function(r, s) {
        return r === void 0 ? (console.error("You have possibly supplied invalid Date format. Please supply a valid JavaScript Date"), 0) : r.length > s.length ? r : s;
      }, 0);
      return 1.05 * (e = new X(this.dCtx.ctx).getTextRects(i, t.config.xaxis.labels.style.fontSize)).width * a.length > t.globals.gridWidth && t.config.xaxis.labels.rotate !== 0 && (t.globals.overlappingXLabels = !0), e;
    } }, { key: "additionalPaddingXLabels", value: function(e) {
      var t = this, a = this.w, i = a.globals, r = a.config, s = r.xaxis.type, o = e.width;
      i.skipLastTimelinelabel = !1, i.skipFirstTimelinelabel = !1;
      var n = a.config.yaxis[0].opposite && a.globals.isBarHorizontal, h = function(d, c) {
        r.yaxis.length > 1 && function(u) {
          return i.collapsedSeriesIndices.indexOf(u) !== -1;
        }(c) || function(u) {
          if (t.dCtx.timescaleLabels && t.dCtx.timescaleLabels.length) {
            var p = t.dCtx.timescaleLabels[0], m = t.dCtx.timescaleLabels[t.dCtx.timescaleLabels.length - 1].position + o / 1.75 - t.dCtx.yAxisWidthRight, f = p.position - o / 1.75 + t.dCtx.yAxisWidthLeft, b = a.config.legend.position === "right" && t.dCtx.lgRect.width > 0 ? t.dCtx.lgRect.width : 0;
            m > i.svgWidth - i.translateX - b && (i.skipLastTimelinelabel = !0), f < -(u.show && !u.floating || r.chart.type !== "bar" && r.chart.type !== "candlestick" && r.chart.type !== "rangeBar" && r.chart.type !== "boxPlot" ? 10 : o / 1.75) && (i.skipFirstTimelinelabel = !0);
          } else s === "datetime" ? t.dCtx.gridPad.right < o && !i.rotateXLabels && (i.skipLastTimelinelabel = !0) : s !== "datetime" && t.dCtx.gridPad.right < o / 2 - t.dCtx.yAxisWidthRight && !i.rotateXLabels && !a.config.xaxis.labels.trim && (t.dCtx.xPadRight = o / 2 + 1);
        }(d);
      };
      r.yaxis.forEach(function(d, c) {
        n ? (t.dCtx.gridPad.left < o && (t.dCtx.xPadLeft = o / 2 + 1), t.dCtx.xPadRight = o / 2 + 1) : h(d, c);
      });
    } }]), y;
  }(), oi = function() {
    function y(e) {
      T(this, y), this.w = e.w, this.dCtx = e;
    }
    return E(y, [{ key: "getyAxisLabelsCoords", value: function() {
      var e = this, t = this.w, a = [], i = 10, r = new Le(this.dCtx.ctx);
      return t.config.yaxis.map(function(s, o) {
        var n = { seriesIndex: o, dataPointIndex: -1, w: t }, h = t.globals.yAxisScale[o], d = 0;
        if (!r.isYAxisHidden(o) && s.labels.show && s.labels.minWidth !== void 0 && (d = s.labels.minWidth), !r.isYAxisHidden(o) && s.labels.show && h.result.length) {
          var c = t.globals.yLabelFormatters[o], u = h.niceMin === Number.MIN_VALUE ? 0 : h.niceMin, p = h.result.reduce(function(g, x) {
            var k, S;
            return ((k = String(c(g, n))) === null || k === void 0 ? void 0 : k.length) > ((S = String(c(x, n))) === null || S === void 0 ? void 0 : S.length) ? g : x;
          }, u), m = p = c(p, n);
          if (p !== void 0 && p.length !== 0 || (p = h.niceMax), t.globals.isBarHorizontal) {
            i = 0;
            var f = t.globals.labels.slice();
            p = z.getLargestStringFromArr(f), p = c(p, { seriesIndex: o, dataPointIndex: -1, w: t }), m = e.dCtx.dimHelpers.getLargestStringFromMultiArr(p, f);
          }
          var b = new X(e.dCtx.ctx), v = "rotate(".concat(s.labels.rotate, " 0 0)"), w = b.getTextRects(p, s.labels.style.fontSize, s.labels.style.fontFamily, v, !1), l = w;
          p !== m && (l = b.getTextRects(m, s.labels.style.fontSize, s.labels.style.fontFamily, v, !1)), a.push({ width: (d > l.width || d > w.width ? d : l.width > w.width ? l.width : w.width) + i, height: l.height > w.height ? l.height : w.height });
        } else a.push({ width: 0, height: 0 });
      }), a;
    } }, { key: "getyAxisTitleCoords", value: function() {
      var e = this, t = this.w, a = [];
      return t.config.yaxis.map(function(i, r) {
        if (i.show && i.title.text !== void 0) {
          var s = new X(e.dCtx.ctx), o = "rotate(".concat(i.title.rotate, " 0 0)"), n = s.getTextRects(i.title.text, i.title.style.fontSize, i.title.style.fontFamily, o, !1);
          a.push({ width: n.width, height: n.height });
        } else a.push({ width: 0, height: 0 });
      }), a;
    } }, { key: "getTotalYAxisWidth", value: function() {
      var e = this.w, t = 0, a = 0, i = 0, r = e.globals.yAxisScale.length > 1 ? 10 : 0, s = new Le(this.dCtx.ctx), o = function(n, h) {
        var d = e.config.yaxis[h].floating, c = 0;
        n.width > 0 && !d ? (c = n.width + r, function(u) {
          return e.globals.ignoreYAxisIndexes.indexOf(u) > -1;
        }(h) && (c = c - n.width - r)) : c = d || s.isYAxisHidden(h) ? 0 : 5, e.config.yaxis[h].opposite ? i += c : a += c, t += c;
      };
      return e.globals.yLabelsCoords.map(function(n, h) {
        o(n, h);
      }), e.globals.yTitleCoords.map(function(n, h) {
        o(n, h);
      }), e.globals.isBarHorizontal && !e.config.yaxis[0].floating && (t = e.globals.yLabelsCoords[0].width + e.globals.yTitleCoords[0].width + 15), this.dCtx.yAxisWidthLeft = a, this.dCtx.yAxisWidthRight = i, t;
    } }]), y;
  }(), ni = function() {
    function y(e) {
      T(this, y), this.w = e.w, this.dCtx = e;
    }
    return E(y, [{ key: "gridPadForColumnsInNumericAxis", value: function(e) {
      var t = this.w, a = t.config, i = t.globals;
      if (i.noData || i.collapsedSeries.length + i.ancillaryCollapsedSeries.length === a.series.length) return 0;
      var r = function(p) {
        return ["bar", "rangeBar", "candlestick", "boxPlot"].includes(p);
      }, s = a.chart.type, o = 0, n = r(s) ? a.series.length : 1;
      i.comboBarCount > 0 && (n = i.comboBarCount), i.collapsedSeries.forEach(function(p) {
        r(p.type) && (n -= 1);
      }), a.chart.stacked && (n = 1);
      var h = r(s) || i.comboBarCount > 0, d = Math.abs(i.initialMaxX - i.initialMinX);
      if (h && i.isXNumeric && !i.isBarHorizontal && n > 0 && d !== 0) {
        d <= 3 && (d = i.dataPoints);
        var c = d / e, u = i.minXDiff && i.minXDiff / c > 0 ? i.minXDiff / c : 0;
        u > e / 2 && (u /= 2), (o = u * parseInt(a.plotOptions.bar.columnWidth, 10) / 100) < 1 && (o = 1), i.barPadForNumericAxis = o;
      }
      return o;
    } }, { key: "gridPadFortitleSubtitle", value: function() {
      var e = this, t = this.w, a = t.globals, i = this.dCtx.isSparkline || !a.axisCharts ? 0 : 10;
      ["title", "subtitle"].forEach(function(o) {
        t.config[o].text !== void 0 ? i += t.config[o].margin : i += e.dCtx.isSparkline || !a.axisCharts ? 0 : 5;
      }), !t.config.legend.show || t.config.legend.position !== "bottom" || t.config.legend.floating || a.axisCharts || (i += 10);
      var r = this.dCtx.dimHelpers.getTitleSubtitleCoords("title"), s = this.dCtx.dimHelpers.getTitleSubtitleCoords("subtitle");
      a.gridHeight -= r.height + s.height + i, a.translateY += r.height + s.height + i;
    } }, { key: "setGridXPosForDualYAxis", value: function(e, t) {
      var a = this.w, i = new Le(this.dCtx.ctx);
      a.config.yaxis.forEach(function(r, s) {
        a.globals.ignoreYAxisIndexes.indexOf(s) !== -1 || r.floating || i.isYAxisHidden(s) || (r.opposite && (a.globals.translateX -= t[s].width + e[s].width + parseInt(r.labels.style.fontSize, 10) / 1.2 + 12), a.globals.translateX < 2 && (a.globals.translateX = 2));
      });
    } }]), y;
  }(), Mt = function() {
    function y(e) {
      T(this, y), this.ctx = e, this.w = e.w, this.lgRect = {}, this.yAxisWidth = 0, this.yAxisWidthLeft = 0, this.yAxisWidthRight = 0, this.xAxisHeight = 0, this.isSparkline = this.w.config.chart.sparkline.enabled, this.dimHelpers = new si(this), this.dimYAxis = new oi(this), this.dimXAxis = new ri(this), this.dimGrid = new ni(this), this.lgWidthForSideLegends = 0, this.gridPad = this.w.config.grid.padding, this.xPadRight = 0, this.xPadLeft = 0;
    }
    return E(y, [{ key: "plotCoords", value: function() {
      var e = this, t = this.w, a = t.globals;
      this.lgRect = this.dimHelpers.getLegendsRect(), this.datalabelsCoords = { width: 0, height: 0 };
      var i = Array.isArray(t.config.stroke.width) ? Math.max.apply(Math, K(t.config.stroke.width)) : t.config.stroke.width;
      this.isSparkline && ((t.config.markers.discrete.length > 0 || t.config.markers.size > 0) && Object.entries(this.gridPad).forEach(function(s) {
        var o = J(s, 2), n = o[0], h = o[1];
        e.gridPad[n] = Math.max(h, e.w.globals.markers.largestSize / 1.5);
      }), this.gridPad.top = Math.max(i / 2, this.gridPad.top), this.gridPad.bottom = Math.max(i / 2, this.gridPad.bottom)), a.axisCharts ? this.setDimensionsForAxisCharts() : this.setDimensionsForNonAxisCharts(), this.dimGrid.gridPadFortitleSubtitle(), a.gridHeight = a.gridHeight - this.gridPad.top - this.gridPad.bottom, a.gridWidth = a.gridWidth - this.gridPad.left - this.gridPad.right - this.xPadRight - this.xPadLeft;
      var r = this.dimGrid.gridPadForColumnsInNumericAxis(a.gridWidth);
      a.gridWidth = a.gridWidth - 2 * r, a.translateX = a.translateX + this.gridPad.left + this.xPadLeft + (r > 0 ? r : 0), a.translateY = a.translateY + this.gridPad.top;
    } }, { key: "setDimensionsForAxisCharts", value: function() {
      var e = this, t = this.w, a = t.globals, i = this.dimYAxis.getyAxisLabelsCoords(), r = this.dimYAxis.getyAxisTitleCoords();
      a.isSlopeChart && (this.datalabelsCoords = this.dimHelpers.getDatalabelsRect()), t.globals.yLabelsCoords = [], t.globals.yTitleCoords = [], t.config.yaxis.map(function(p, m) {
        t.globals.yLabelsCoords.push({ width: i[m].width, index: m }), t.globals.yTitleCoords.push({ width: r[m].width, index: m });
      }), this.yAxisWidth = this.dimYAxis.getTotalYAxisWidth();
      var s = this.dimXAxis.getxAxisLabelsCoords(), o = this.dimXAxis.getxAxisGroupLabelsCoords(), n = this.dimXAxis.getxAxisTitleCoords();
      this.conditionalChecksForAxisCoords(s, n, o), a.translateXAxisY = t.globals.rotateXLabels ? this.xAxisHeight / 8 : -4, a.translateXAxisX = t.globals.rotateXLabels && t.globals.isXNumeric && t.config.xaxis.labels.rotate <= -45 ? -this.xAxisWidth / 4 : 0, t.globals.isBarHorizontal && (a.rotateXLabels = !1, a.translateXAxisY = parseInt(t.config.xaxis.labels.style.fontSize, 10) / 1.5 * -1), a.translateXAxisY = a.translateXAxisY + t.config.xaxis.labels.offsetY, a.translateXAxisX = a.translateXAxisX + t.config.xaxis.labels.offsetX;
      var h = this.yAxisWidth, d = this.xAxisHeight;
      a.xAxisLabelsHeight = this.xAxisHeight - n.height, a.xAxisGroupLabelsHeight = a.xAxisLabelsHeight - s.height, a.xAxisLabelsWidth = this.xAxisWidth, a.xAxisHeight = this.xAxisHeight;
      var c = 10;
      (t.config.chart.type === "radar" || this.isSparkline) && (h = 0, d = 0), this.isSparkline && (this.lgRect = { height: 0, width: 0 }), (this.isSparkline || t.config.chart.type === "treemap") && (h = 0, d = 0, c = 0), this.isSparkline || t.config.chart.type === "treemap" || this.dimXAxis.additionalPaddingXLabels(s);
      var u = function() {
        a.translateX = h + e.datalabelsCoords.width, a.gridHeight = a.svgHeight - e.lgRect.height - d - (e.isSparkline || t.config.chart.type === "treemap" ? 0 : t.globals.rotateXLabels ? 10 : 15), a.gridWidth = a.svgWidth - h - 2 * e.datalabelsCoords.width;
      };
      switch (t.config.xaxis.position === "top" && (c = a.xAxisHeight - t.config.xaxis.axisTicks.height - 5), t.config.legend.position) {
        case "bottom":
          a.translateY = c, u();
          break;
        case "top":
          a.translateY = this.lgRect.height + c, u();
          break;
        case "left":
          a.translateY = c, a.translateX = this.lgRect.width + h + this.datalabelsCoords.width, a.gridHeight = a.svgHeight - d - 12, a.gridWidth = a.svgWidth - this.lgRect.width - h - 2 * this.datalabelsCoords.width;
          break;
        case "right":
          a.translateY = c, a.translateX = h + this.datalabelsCoords.width, a.gridHeight = a.svgHeight - d - 12, a.gridWidth = a.svgWidth - this.lgRect.width - h - 2 * this.datalabelsCoords.width - 5;
          break;
        default:
          throw new Error("Legend position not supported");
      }
      this.dimGrid.setGridXPosForDualYAxis(r, i), new Ut(this.ctx).setYAxisXPosition(i, r);
    } }, { key: "setDimensionsForNonAxisCharts", value: function() {
      var e = this.w, t = e.globals, a = e.config, i = 0;
      e.config.legend.show && !e.config.legend.floating && (i = 20);
      var r = a.chart.type === "pie" || a.chart.type === "polarArea" || a.chart.type === "donut" ? "pie" : "radialBar", s = a.plotOptions[r].offsetY, o = a.plotOptions[r].offsetX;
      if (!a.legend.show || a.legend.floating) {
        t.gridHeight = t.svgHeight;
        var n = t.dom.elWrap.getBoundingClientRect().width;
        return t.gridWidth = Math.min(n, t.gridHeight), t.translateY = s, void (t.translateX = o + (t.svgWidth - t.gridWidth) / 2);
      }
      switch (a.legend.position) {
        case "bottom":
          t.gridHeight = t.svgHeight - this.lgRect.height, t.gridWidth = t.svgWidth, t.translateY = s - 10, t.translateX = o + (t.svgWidth - t.gridWidth) / 2;
          break;
        case "top":
          t.gridHeight = t.svgHeight - this.lgRect.height, t.gridWidth = t.svgWidth, t.translateY = this.lgRect.height + s + 10, t.translateX = o + (t.svgWidth - t.gridWidth) / 2;
          break;
        case "left":
          t.gridWidth = t.svgWidth - this.lgRect.width - i, t.gridHeight = a.chart.height !== "auto" ? t.svgHeight : t.gridWidth, t.translateY = s, t.translateX = o + this.lgRect.width + i;
          break;
        case "right":
          t.gridWidth = t.svgWidth - this.lgRect.width - i - 5, t.gridHeight = a.chart.height !== "auto" ? t.svgHeight : t.gridWidth, t.translateY = s, t.translateX = o + 10;
          break;
        default:
          throw new Error("Legend position not supported");
      }
    } }, { key: "conditionalChecksForAxisCoords", value: function(e, t, a) {
      var i = this.w, r = i.globals.hasXaxisGroups ? 2 : 1, s = a.height + e.height + t.height, o = i.globals.isMultiLineX ? 1.2 : i.globals.LINE_HEIGHT_RATIO, n = i.globals.rotateXLabels ? 22 : 10, h = i.globals.rotateXLabels && i.config.legend.position === "bottom" ? 10 : 0;
      this.xAxisHeight = s * o + r * n + h, this.xAxisWidth = e.width, this.xAxisHeight - t.height > i.config.xaxis.labels.maxHeight && (this.xAxisHeight = i.config.xaxis.labels.maxHeight), i.config.xaxis.labels.minHeight && this.xAxisHeight < i.config.xaxis.labels.minHeight && (this.xAxisHeight = i.config.xaxis.labels.minHeight), i.config.xaxis.floating && (this.xAxisHeight = 0);
      var d = 0, c = 0;
      i.config.yaxis.forEach(function(u) {
        d += u.labels.minWidth, c += u.labels.maxWidth;
      }), this.yAxisWidth < d && (this.yAxisWidth = d), this.yAxisWidth > c && (this.yAxisWidth = c);
    } }]), y;
  }(), li = function() {
    function y(e) {
      T(this, y), this.w = e.w, this.lgCtx = e;
    }
    return E(y, [{ key: "getLegendStyles", value: function() {
      var e, t, a, i = document.createElement("style");
      i.setAttribute("type", "text/css");
      var r = ((e = this.lgCtx.ctx) === null || e === void 0 || (t = e.opts) === null || t === void 0 || (a = t.chart) === null || a === void 0 ? void 0 : a.nonce) || this.w.config.chart.nonce;
      r && i.setAttribute("nonce", r);
      var s = document.createTextNode(`
      .apexcharts-flip-y {
        transform: scaleY(-1) translateY(-100%);
        transform-origin: top;
        transform-box: fill-box;
      }
      .apexcharts-flip-x {
        transform: scaleX(-1);
        transform-origin: center;
        transform-box: fill-box;
      }
      .apexcharts-legend {
        display: flex;
        overflow: auto;
        padding: 0 10px;
      }
      .apexcharts-legend.apx-legend-position-bottom, .apexcharts-legend.apx-legend-position-top {
        flex-wrap: wrap
      }
      .apexcharts-legend.apx-legend-position-right, .apexcharts-legend.apx-legend-position-left {
        flex-direction: column;
        bottom: 0;
      }
      .apexcharts-legend.apx-legend-position-bottom.apexcharts-align-left, .apexcharts-legend.apx-legend-position-top.apexcharts-align-left, .apexcharts-legend.apx-legend-position-right, .apexcharts-legend.apx-legend-position-left {
        justify-content: flex-start;
      }
      .apexcharts-legend.apx-legend-position-bottom.apexcharts-align-center, .apexcharts-legend.apx-legend-position-top.apexcharts-align-center {
        justify-content: center;
      }
      .apexcharts-legend.apx-legend-position-bottom.apexcharts-align-right, .apexcharts-legend.apx-legend-position-top.apexcharts-align-right {
        justify-content: flex-end;
      }
      .apexcharts-legend-series {
        cursor: pointer;
        line-height: normal;
        display: flex;
        align-items: center;
      }
      .apexcharts-legend-text {
        position: relative;
        font-size: 14px;
      }
      .apexcharts-legend-text *, .apexcharts-legend-marker * {
        pointer-events: none;
      }
      .apexcharts-legend-marker {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        margin-right: 1px;
      }

      .apexcharts-legend-series.apexcharts-no-click {
        cursor: auto;
      }
      .apexcharts-legend .apexcharts-hidden-zero-series, .apexcharts-legend .apexcharts-hidden-null-series {
        display: none !important;
      }
      .apexcharts-inactive-legend {
        opacity: 0.45;
      }`);
      return i.appendChild(s), i;
    } }, { key: "getLegendDimensions", value: function() {
      var e = this.w.globals.dom.baseEl.querySelector(".apexcharts-legend").getBoundingClientRect(), t = e.width;
      return { clwh: e.height, clww: t };
    } }, { key: "appendToForeignObject", value: function() {
      this.w.globals.dom.elLegendForeign.appendChild(this.getLegendStyles());
    } }, { key: "toggleDataSeries", value: function(e, t) {
      var a = this, i = this.w;
      if (i.globals.axisCharts || i.config.chart.type === "radialBar") {
        i.globals.resized = !0;
        var r = null, s = null;
        i.globals.risingSeries = [], i.globals.axisCharts ? (r = i.globals.dom.baseEl.querySelector(".apexcharts-series[data\\:realIndex='".concat(e, "']")), s = parseInt(r.getAttribute("data:realIndex"), 10)) : (r = i.globals.dom.baseEl.querySelector(".apexcharts-series[rel='".concat(e + 1, "']")), s = parseInt(r.getAttribute("rel"), 10) - 1), t ? [{ cs: i.globals.collapsedSeries, csi: i.globals.collapsedSeriesIndices }, { cs: i.globals.ancillaryCollapsedSeries, csi: i.globals.ancillaryCollapsedSeriesIndices }].forEach(function(d) {
          a.riseCollapsedSeries(d.cs, d.csi, s);
        }) : this.hideSeries({ seriesEl: r, realIndex: s });
      } else {
        var o = i.globals.dom.Paper.select(" .apexcharts-series[rel='".concat(e + 1, "'] path")), n = i.config.chart.type;
        if (n === "pie" || n === "polarArea" || n === "donut") {
          var h = i.config.plotOptions.pie.donut.labels;
          new X(this.lgCtx.ctx).pathMouseDown(o.members[0], null), this.lgCtx.ctx.pie.printDataLabelsInner(o.members[0].node, h);
        }
        o.fire("click");
      }
    } }, { key: "getSeriesAfterCollapsing", value: function(e) {
      var t = e.realIndex, a = this.w, i = a.globals, r = z.clone(a.config.series);
      if (i.axisCharts) {
        var s = a.config.yaxis[i.seriesYAxisReverseMap[t]], o = { index: t, data: r[t].data.slice(), type: r[t].type || a.config.chart.type };
        if (s && s.show && s.showAlways) i.ancillaryCollapsedSeriesIndices.indexOf(t) < 0 && (i.ancillaryCollapsedSeries.push(o), i.ancillaryCollapsedSeriesIndices.push(t));
        else if (i.collapsedSeriesIndices.indexOf(t) < 0) {
          i.collapsedSeries.push(o), i.collapsedSeriesIndices.push(t);
          var n = i.risingSeries.indexOf(t);
          i.risingSeries.splice(n, 1);
        }
      } else i.collapsedSeries.push({ index: t, data: r[t] }), i.collapsedSeriesIndices.push(t);
      return i.allSeriesCollapsed = i.collapsedSeries.length + i.ancillaryCollapsedSeries.length === a.config.series.length, this._getSeriesBasedOnCollapsedState(r);
    } }, { key: "hideSeries", value: function(e) {
      for (var t = e.seriesEl, a = e.realIndex, i = this.w, r = this.getSeriesAfterCollapsing({ realIndex: a }), s = t.childNodes, o = 0; o < s.length; o++) s[o].classList.contains("apexcharts-series-markers-wrap") && (s[o].classList.contains("apexcharts-hide") ? s[o].classList.remove("apexcharts-hide") : s[o].classList.add("apexcharts-hide"));
      this.lgCtx.ctx.updateHelpers._updateSeries(r, i.config.chart.animations.dynamicAnimation.enabled);
    } }, { key: "riseCollapsedSeries", value: function(e, t, a) {
      var i = this.w, r = z.clone(i.config.series);
      if (e.length > 0) {
        for (var s = 0; s < e.length; s++) e[s].index === a && (i.globals.axisCharts ? r[a].data = e[s].data.slice() : r[a] = e[s].data, r[a].hidden = !1, e.splice(s, 1), t.splice(s, 1), i.globals.risingSeries.push(a));
        r = this._getSeriesBasedOnCollapsedState(r), this.lgCtx.ctx.updateHelpers._updateSeries(r, i.config.chart.animations.dynamicAnimation.enabled);
      }
    } }, { key: "_getSeriesBasedOnCollapsedState", value: function(e) {
      var t = this.w, a = 0;
      return t.globals.axisCharts ? e.forEach(function(i, r) {
        t.globals.collapsedSeriesIndices.indexOf(r) < 0 && t.globals.ancillaryCollapsedSeriesIndices.indexOf(r) < 0 || (e[r].data = [], a++);
      }) : e.forEach(function(i, r) {
        !t.globals.collapsedSeriesIndices.indexOf(r) < 0 && (e[r] = 0, a++);
      }), t.globals.allSeriesCollapsed = a === e.length, e;
    } }]), y;
  }(), xa = function() {
    function y(e) {
      T(this, y), this.ctx = e, this.w = e.w, this.onLegendClick = this.onLegendClick.bind(this), this.onLegendHovered = this.onLegendHovered.bind(this), this.isBarsDistributed = this.w.config.chart.type === "bar" && this.w.config.plotOptions.bar.distributed && this.w.config.series.length === 1, this.legendHelpers = new li(this);
    }
    return E(y, [{ key: "init", value: function() {
      var e = this.w, t = e.globals, a = e.config, i = a.legend.showForSingleSeries && t.series.length === 1 || this.isBarsDistributed || t.series.length > 1;
      if (this.legendHelpers.appendToForeignObject(), (i || !t.axisCharts) && a.legend.show) {
        for (; t.dom.elLegendWrap.firstChild; ) t.dom.elLegendWrap.removeChild(t.dom.elLegendWrap.firstChild);
        this.drawLegends(), a.legend.position === "bottom" || a.legend.position === "top" ? this.legendAlignHorizontal() : a.legend.position !== "right" && a.legend.position !== "left" || this.legendAlignVertical();
      }
    } }, { key: "createLegendMarker", value: function(e) {
      var t = e.i, a = e.fillcolor, i = this.w, r = document.createElement("span");
      r.classList.add("apexcharts-legend-marker");
      var s = i.config.legend.markers.shape || i.config.markers.shape, o = s;
      Array.isArray(s) && (o = s[t]);
      var n = Array.isArray(i.config.legend.markers.size) ? parseFloat(i.config.legend.markers.size[t]) : parseFloat(i.config.legend.markers.size), h = Array.isArray(i.config.legend.markers.offsetX) ? parseFloat(i.config.legend.markers.offsetX[t]) : parseFloat(i.config.legend.markers.offsetX), d = Array.isArray(i.config.legend.markers.offsetY) ? parseFloat(i.config.legend.markers.offsetY[t]) : parseFloat(i.config.legend.markers.offsetY), c = Array.isArray(i.config.legend.markers.strokeWidth) ? parseFloat(i.config.legend.markers.strokeWidth[t]) : parseFloat(i.config.legend.markers.strokeWidth), u = r.style;
      if (u.height = 2 * (n + c) + "px", u.width = 2 * (n + c) + "px", u.left = h + "px", u.top = d + "px", i.config.legend.markers.customHTML) u.background = "transparent", u.color = a[t], Array.isArray(i.config.legend.markers.customHTML) ? i.config.legend.markers.customHTML[t] && (r.innerHTML = i.config.legend.markers.customHTML[t]()) : r.innerHTML = i.config.legend.markers.customHTML();
      else {
        var p = new ut(this.ctx).getMarkerConfig({ cssClass: "apexcharts-legend-marker apexcharts-marker apexcharts-marker-".concat(o), seriesIndex: t, strokeWidth: c, size: n }), m = SVG(r).size("100%", "100%"), f = new X(this.ctx).drawMarker(0, 0, H(H({}, p), {}, { pointFillColor: Array.isArray(a) ? a[t] : p.pointFillColor, shape: o }));
        SVG.select(".apexcharts-legend-marker.apexcharts-marker").members.forEach(function(b) {
          b.node.classList.contains("apexcharts-marker-triangle") ? b.node.style.transform = "translate(50%, 45%)" : b.node.style.transform = "translate(50%, 50%)";
        }), m.add(f);
      }
      return r;
    } }, { key: "drawLegends", value: function() {
      var e = this, t = this.w, a = t.config.legend.fontFamily, i = t.globals.seriesNames, r = t.config.legend.markers.fillColors ? t.config.legend.markers.fillColors.slice() : t.globals.colors.slice();
      if (t.config.chart.type === "heatmap") {
        var s = t.config.plotOptions.heatmap.colorScale.ranges;
        i = s.map(function(x) {
          return x.name ? x.name : x.from + " - " + x.to;
        }), r = s.map(function(x) {
          return x.color;
        });
      } else this.isBarsDistributed && (i = t.globals.labels.slice());
      t.config.legend.customLegendItems.length && (i = t.config.legend.customLegendItems);
      for (var o = t.globals.legendFormatter, n = t.config.legend.inverseOrder, h = n ? i.length - 1 : 0; n ? h >= 0 : h <= i.length - 1; n ? h-- : h++) {
        var d, c = o(i[h], { seriesIndex: h, w: t }), u = !1, p = !1;
        if (t.globals.collapsedSeries.length > 0) for (var m = 0; m < t.globals.collapsedSeries.length; m++) t.globals.collapsedSeries[m].index === h && (u = !0);
        if (t.globals.ancillaryCollapsedSeriesIndices.length > 0) for (var f = 0; f < t.globals.ancillaryCollapsedSeriesIndices.length; f++) t.globals.ancillaryCollapsedSeriesIndices[f] === h && (p = !0);
        var b = this.createLegendMarker({ i: h, fillcolor: r });
        X.setAttrs(b, { rel: h + 1, "data:collapsed": u || p }), (u || p) && b.classList.add("apexcharts-inactive-legend");
        var v = document.createElement("div"), w = document.createElement("span");
        w.classList.add("apexcharts-legend-text"), w.innerHTML = Array.isArray(c) ? c.join(" ") : c;
        var l = t.config.legend.labels.useSeriesColors ? t.globals.colors[h] : Array.isArray(t.config.legend.labels.colors) ? (d = t.config.legend.labels.colors) === null || d === void 0 ? void 0 : d[h] : t.config.legend.labels.colors;
        l || (l = t.config.chart.foreColor), w.style.color = l, w.style.fontSize = parseFloat(t.config.legend.fontSize) + "px", w.style.fontWeight = t.config.legend.fontWeight, w.style.fontFamily = a || t.config.chart.fontFamily, X.setAttrs(w, { rel: h + 1, i: h, "data:default-text": encodeURIComponent(c), "data:collapsed": u || p }), v.appendChild(b), v.appendChild(w);
        var g = new Te(this.ctx);
        t.config.legend.showForZeroSeries || g.getSeriesTotalByIndex(h) === 0 && g.seriesHaveSameValues(h) && !g.isSeriesNull(h) && t.globals.collapsedSeriesIndices.indexOf(h) === -1 && t.globals.ancillaryCollapsedSeriesIndices.indexOf(h) === -1 && v.classList.add("apexcharts-hidden-zero-series"), t.config.legend.showForNullSeries || g.isSeriesNull(h) && t.globals.collapsedSeriesIndices.indexOf(h) === -1 && t.globals.ancillaryCollapsedSeriesIndices.indexOf(h) === -1 && v.classList.add("apexcharts-hidden-null-series"), t.globals.dom.elLegendWrap.appendChild(v), t.globals.dom.elLegendWrap.classList.add("apexcharts-align-".concat(t.config.legend.horizontalAlign)), t.globals.dom.elLegendWrap.classList.add("apx-legend-position-" + t.config.legend.position), v.classList.add("apexcharts-legend-series"), v.style.margin = "".concat(t.config.legend.itemMargin.vertical, "px ").concat(t.config.legend.itemMargin.horizontal, "px"), t.globals.dom.elLegendWrap.style.width = t.config.legend.width ? t.config.legend.width + "px" : "", t.globals.dom.elLegendWrap.style.height = t.config.legend.height ? t.config.legend.height + "px" : "", X.setAttrs(v, { rel: h + 1, seriesName: z.escapeString(i[h]), "data:collapsed": u || p }), (u || p) && v.classList.add("apexcharts-inactive-legend"), t.config.legend.onItemClick.toggleDataSeries || v.classList.add("apexcharts-no-click");
      }
      t.globals.dom.elWrap.addEventListener("click", e.onLegendClick, !0), t.config.legend.onItemHover.highlightDataSeries && t.config.legend.customLegendItems.length === 0 && (t.globals.dom.elWrap.addEventListener("mousemove", e.onLegendHovered, !0), t.globals.dom.elWrap.addEventListener("mouseout", e.onLegendHovered, !0));
    } }, { key: "setLegendWrapXY", value: function(e, t) {
      var a = this.w, i = a.globals.dom.elLegendWrap, r = i.clientHeight, s = 0, o = 0;
      if (a.config.legend.position === "bottom") o = a.globals.svgHeight - Math.min(r, a.globals.svgHeight / 2) - 5;
      else if (a.config.legend.position === "top") {
        var n = new Mt(this.ctx), h = n.dimHelpers.getTitleSubtitleCoords("title").height, d = n.dimHelpers.getTitleSubtitleCoords("subtitle").height;
        o = (h > 0 ? h - 10 : 0) + (d > 0 ? d - 10 : 0);
      }
      i.style.position = "absolute", s = s + e + a.config.legend.offsetX, o = o + t + a.config.legend.offsetY, i.style.left = s + "px", i.style.top = o + "px", a.config.legend.position === "right" && (i.style.left = "auto", i.style.right = 25 + a.config.legend.offsetX + "px"), ["width", "height"].forEach(function(c) {
        i.style[c] && (i.style[c] = parseInt(a.config.legend[c], 10) + "px");
      });
    } }, { key: "legendAlignHorizontal", value: function() {
      var e = this.w;
      e.globals.dom.elLegendWrap.style.right = 0;
      var t = new Mt(this.ctx), a = t.dimHelpers.getTitleSubtitleCoords("title"), i = t.dimHelpers.getTitleSubtitleCoords("subtitle"), r = 0;
      e.config.legend.position === "top" && (r = a.height + i.height + e.config.title.margin + e.config.subtitle.margin - 10), this.setLegendWrapXY(20, r);
    } }, { key: "legendAlignVertical", value: function() {
      var e = this.w, t = this.legendHelpers.getLegendDimensions(), a = 0;
      e.config.legend.position === "left" && (a = 20), e.config.legend.position === "right" && (a = e.globals.svgWidth - t.clww - 10), this.setLegendWrapXY(a, 20);
    } }, { key: "onLegendHovered", value: function(e) {
      var t = this.w, a = e.target.classList.contains("apexcharts-legend-series") || e.target.classList.contains("apexcharts-legend-text") || e.target.classList.contains("apexcharts-legend-marker");
      if (t.config.chart.type === "heatmap" || this.isBarsDistributed) {
        if (a) {
          var i = parseInt(e.target.getAttribute("rel"), 10) - 1;
          this.ctx.events.fireEvent("legendHover", [this.ctx, i, this.w]), new qe(this.ctx).highlightRangeInSeries(e, e.target);
        }
      } else !e.target.classList.contains("apexcharts-inactive-legend") && a && new qe(this.ctx).toggleSeriesOnHover(e, e.target);
    } }, { key: "onLegendClick", value: function(e) {
      var t = this.w;
      if (!t.config.legend.customLegendItems.length && (e.target.classList.contains("apexcharts-legend-series") || e.target.classList.contains("apexcharts-legend-text") || e.target.classList.contains("apexcharts-legend-marker"))) {
        var a = parseInt(e.target.getAttribute("rel"), 10) - 1, i = e.target.getAttribute("data:collapsed") === "true", r = this.w.config.chart.events.legendClick;
        typeof r == "function" && r(this.ctx, a, this.w), this.ctx.events.fireEvent("legendClick", [this.ctx, a, this.w]);
        var s = this.w.config.legend.markers.onClick;
        typeof s == "function" && e.target.classList.contains("apexcharts-legend-marker") && (s(this.ctx, a, this.w), this.ctx.events.fireEvent("legendMarkerClick", [this.ctx, a, this.w])), t.config.chart.type !== "treemap" && t.config.chart.type !== "heatmap" && !this.isBarsDistributed && t.config.legend.onItemClick.toggleDataSeries && this.legendHelpers.toggleDataSeries(a, i);
      }
    } }]), y;
  }(), ba = function() {
    function y(e) {
      T(this, y), this.ctx = e, this.w = e.w;
      var t = this.w;
      this.ev = this.w.config.chart.events, this.selectedClass = "apexcharts-selected", this.localeValues = this.w.globals.locale.toolbar, this.minX = t.globals.minX, this.maxX = t.globals.maxX;
    }
    return E(y, [{ key: "createToolbar", value: function() {
      var e = this, t = this.w, a = function() {
        return document.createElement("div");
      }, i = a();
      if (i.setAttribute("class", "apexcharts-toolbar"), i.style.top = t.config.chart.toolbar.offsetY + "px", i.style.right = 3 - t.config.chart.toolbar.offsetX + "px", t.globals.dom.elWrap.appendChild(i), this.elZoom = a(), this.elZoomIn = a(), this.elZoomOut = a(), this.elPan = a(), this.elSelection = a(), this.elZoomReset = a(), this.elMenuIcon = a(), this.elMenu = a(), this.elCustomIcons = [], this.t = t.config.chart.toolbar.tools, Array.isArray(this.t.customIcons)) for (var r = 0; r < this.t.customIcons.length; r++) this.elCustomIcons.push(a());
      var s = [], o = function(c, u, p) {
        var m = c.toLowerCase();
        e.t[m] && t.config.chart.zoom.enabled && s.push({ el: u, icon: typeof e.t[m] == "string" ? e.t[m] : p, title: e.localeValues[c], class: "apexcharts-".concat(m, "-icon") });
      };
      o("zoomIn", this.elZoomIn, `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
    <path d="M0 0h24v24H0z" fill="none"/>
    <path d="M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
</svg>
`), o("zoomOut", this.elZoomOut, `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
    <path d="M0 0h24v24H0z" fill="none"/>
    <path d="M7 11v2h10v-2H7zm5-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
</svg>
`);
      var n = function(c) {
        e.t[c] && t.config.chart[c].enabled && s.push({ el: c === "zoom" ? e.elZoom : e.elSelection, icon: typeof e.t[c] == "string" ? e.t[c] : c === "zoom" ? `<svg xmlns="http://www.w3.org/2000/svg" fill="#000000" height="24" viewBox="0 0 24 24" width="24">
    <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
    <path d="M0 0h24v24H0V0z" fill="none"/>
    <path d="M12 10h-2v2H9v-2H7V9h2V7h1v2h2v1z"/>
</svg>` : `<svg fill="#6E8192" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
    <path d="M0 0h24v24H0z" fill="none"/>
    <path d="M3 5h2V3c-1.1 0-2 .9-2 2zm0 8h2v-2H3v2zm4 8h2v-2H7v2zM3 9h2V7H3v2zm10-6h-2v2h2V3zm6 0v2h2c0-1.1-.9-2-2-2zM5 21v-2H3c0 1.1.9 2 2 2zm-2-4h2v-2H3v2zM9 3H7v2h2V3zm2 18h2v-2h-2v2zm8-8h2v-2h-2v2zm0 8c1.1 0 2-.9 2-2h-2v2zm0-12h2V7h-2v2zm0 8h2v-2h-2v2zm-4 4h2v-2h-2v2zm0-16h2V3h-2v2z"/>
</svg>`, title: e.localeValues[c === "zoom" ? "selectionZoom" : "selection"], class: t.globals.isTouchDevice ? "apexcharts-element-hidden" : "apexcharts-".concat(c, "-icon") });
      };
      n("zoom"), n("selection"), this.t.pan && t.config.chart.zoom.enabled && s.push({ el: this.elPan, icon: typeof this.t.pan == "string" ? this.t.pan : `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000" height="24" viewBox="0 0 24 24" width="24">
    <defs>
        <path d="M0 0h24v24H0z" id="a"/>
    </defs>
    <clipPath id="b">
        <use overflow="visible" xlink:href="#a"/>
    </clipPath>
    <path clip-path="url(#b)" d="M23 5.5V20c0 2.2-1.8 4-4 4h-7.3c-1.08 0-2.1-.43-2.85-1.19L1 14.83s1.26-1.23 1.3-1.25c.22-.19.49-.29.79-.29.22 0 .42.06.6.16.04.01 4.31 2.46 4.31 2.46V4c0-.83.67-1.5 1.5-1.5S11 3.17 11 4v7h1V1.5c0-.83.67-1.5 1.5-1.5S15 .67 15 1.5V11h1V2.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5V11h1V5.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5z"/>
</svg>`, title: this.localeValues.pan, class: t.globals.isTouchDevice ? "apexcharts-element-hidden" : "apexcharts-pan-icon" }), o("reset", this.elZoomReset, `<svg fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
    <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
    <path d="M0 0h24v24H0z" fill="none"/>
</svg>`), this.t.download && s.push({ el: this.elMenuIcon, icon: typeof this.t.download == "string" ? this.t.download : '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0V0z"/><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/></svg>', title: this.localeValues.menu, class: "apexcharts-menu-icon" });
      for (var h = 0; h < this.elCustomIcons.length; h++) s.push({ el: this.elCustomIcons[h], icon: this.t.customIcons[h].icon, title: this.t.customIcons[h].title, index: this.t.customIcons[h].index, class: "apexcharts-toolbar-custom-icon " + this.t.customIcons[h].class });
      s.forEach(function(c, u) {
        c.index && z.moveIndexInArray(s, u, c.index);
      });
      for (var d = 0; d < s.length; d++) X.setAttrs(s[d].el, { class: s[d].class, title: s[d].title }), s[d].el.innerHTML = s[d].icon, i.appendChild(s[d].el);
      this._createHamburgerMenu(i), t.globals.zoomEnabled ? this.elZoom.classList.add(this.selectedClass) : t.globals.panEnabled ? this.elPan.classList.add(this.selectedClass) : t.globals.selectionEnabled && this.elSelection.classList.add(this.selectedClass), this.addToolbarEventListeners();
    } }, { key: "_createHamburgerMenu", value: function(e) {
      this.elMenuItems = [], e.appendChild(this.elMenu), X.setAttrs(this.elMenu, { class: "apexcharts-menu" });
      for (var t = [{ name: "exportSVG", title: this.localeValues.exportToSVG }, { name: "exportPNG", title: this.localeValues.exportToPNG }, { name: "exportCSV", title: this.localeValues.exportToCSV }], a = 0; a < t.length; a++) this.elMenuItems.push(document.createElement("div")), this.elMenuItems[a].innerHTML = t[a].title, X.setAttrs(this.elMenuItems[a], { class: "apexcharts-menu-item ".concat(t[a].name), title: t[a].title }), this.elMenu.appendChild(this.elMenuItems[a]);
    } }, { key: "addToolbarEventListeners", value: function() {
      var e = this;
      this.elZoomReset.addEventListener("click", this.handleZoomReset.bind(this)), this.elSelection.addEventListener("click", this.toggleZoomSelection.bind(this, "selection")), this.elZoom.addEventListener("click", this.toggleZoomSelection.bind(this, "zoom")), this.elZoomIn.addEventListener("click", this.handleZoomIn.bind(this)), this.elZoomOut.addEventListener("click", this.handleZoomOut.bind(this)), this.elPan.addEventListener("click", this.togglePanning.bind(this)), this.elMenuIcon.addEventListener("click", this.toggleMenu.bind(this)), this.elMenuItems.forEach(function(a) {
        a.classList.contains("exportSVG") ? a.addEventListener("click", e.handleDownload.bind(e, "svg")) : a.classList.contains("exportPNG") ? a.addEventListener("click", e.handleDownload.bind(e, "png")) : a.classList.contains("exportCSV") && a.addEventListener("click", e.handleDownload.bind(e, "csv"));
      });
      for (var t = 0; t < this.t.customIcons.length; t++) this.elCustomIcons[t].addEventListener("click", this.t.customIcons[t].click.bind(this, this.ctx, this.ctx.w));
    } }, { key: "toggleZoomSelection", value: function(e) {
      this.ctx.getSyncedCharts().forEach(function(t) {
        t.ctx.toolbar.toggleOtherControls();
        var a = e === "selection" ? t.ctx.toolbar.elSelection : t.ctx.toolbar.elZoom, i = e === "selection" ? "selectionEnabled" : "zoomEnabled";
        t.w.globals[i] = !t.w.globals[i], a.classList.contains(t.ctx.toolbar.selectedClass) ? a.classList.remove(t.ctx.toolbar.selectedClass) : a.classList.add(t.ctx.toolbar.selectedClass);
      });
    } }, { key: "getToolbarIconsReference", value: function() {
      var e = this.w;
      this.elZoom || (this.elZoom = e.globals.dom.baseEl.querySelector(".apexcharts-zoom-icon")), this.elPan || (this.elPan = e.globals.dom.baseEl.querySelector(".apexcharts-pan-icon")), this.elSelection || (this.elSelection = e.globals.dom.baseEl.querySelector(".apexcharts-selection-icon"));
    } }, { key: "enableZoomPanFromToolbar", value: function(e) {
      this.toggleOtherControls(), e === "pan" ? this.w.globals.panEnabled = !0 : this.w.globals.zoomEnabled = !0;
      var t = e === "pan" ? this.elPan : this.elZoom, a = e === "pan" ? this.elZoom : this.elPan;
      t && t.classList.add(this.selectedClass), a && a.classList.remove(this.selectedClass);
    } }, { key: "togglePanning", value: function() {
      this.ctx.getSyncedCharts().forEach(function(e) {
        e.ctx.toolbar.toggleOtherControls(), e.w.globals.panEnabled = !e.w.globals.panEnabled, e.ctx.toolbar.elPan.classList.contains(e.ctx.toolbar.selectedClass) ? e.ctx.toolbar.elPan.classList.remove(e.ctx.toolbar.selectedClass) : e.ctx.toolbar.elPan.classList.add(e.ctx.toolbar.selectedClass);
      });
    } }, { key: "toggleOtherControls", value: function() {
      var e = this, t = this.w;
      t.globals.panEnabled = !1, t.globals.zoomEnabled = !1, t.globals.selectionEnabled = !1, this.getToolbarIconsReference(), [this.elPan, this.elSelection, this.elZoom].forEach(function(a) {
        a && a.classList.remove(e.selectedClass);
      });
    } }, { key: "handleZoomIn", value: function() {
      var e = this.w;
      e.globals.isRangeBar && (this.minX = e.globals.minY, this.maxX = e.globals.maxY);
      var t = (this.minX + this.maxX) / 2, a = (this.minX + t) / 2, i = (this.maxX + t) / 2, r = this._getNewMinXMaxX(a, i);
      e.globals.disableZoomIn || this.zoomUpdateOptions(r.minX, r.maxX);
    } }, { key: "handleZoomOut", value: function() {
      var e = this.w;
      if (e.globals.isRangeBar && (this.minX = e.globals.minY, this.maxX = e.globals.maxY), !(e.config.xaxis.type === "datetime" && new Date(this.minX).getUTCFullYear() < 1e3)) {
        var t = (this.minX + this.maxX) / 2, a = this.minX - (t - this.minX), i = this.maxX - (t - this.maxX), r = this._getNewMinXMaxX(a, i);
        e.globals.disableZoomOut || this.zoomUpdateOptions(r.minX, r.maxX);
      }
    } }, { key: "_getNewMinXMaxX", value: function(e, t) {
      var a = this.w.config.xaxis.convertedCatToNumeric;
      return { minX: a ? Math.floor(e) : e, maxX: a ? Math.floor(t) : t };
    } }, { key: "zoomUpdateOptions", value: function(e, t) {
      var a = this.w;
      if (e !== void 0 || t !== void 0) {
        if (!(a.config.xaxis.convertedCatToNumeric && (e < 1 && (e = 1, t = a.globals.dataPoints), t - e < 2))) {
          var i = { min: e, max: t }, r = this.getBeforeZoomRange(i);
          r && (i = r.xaxis);
          var s = { xaxis: i }, o = z.clone(a.globals.initialConfig.yaxis);
          a.config.chart.group || (s.yaxis = o), this.w.globals.zoomed = !0, this.ctx.updateHelpers._updateOptions(s, !1, this.w.config.chart.animations.dynamicAnimation.enabled), this.zoomCallback(i, o);
        }
      } else this.handleZoomReset();
    } }, { key: "zoomCallback", value: function(e, t) {
      typeof this.ev.zoomed == "function" && this.ev.zoomed(this.ctx, { xaxis: e, yaxis: t });
    } }, { key: "getBeforeZoomRange", value: function(e, t) {
      var a = null;
      return typeof this.ev.beforeZoom == "function" && (a = this.ev.beforeZoom(this, { xaxis: e, yaxis: t })), a;
    } }, { key: "toggleMenu", value: function() {
      var e = this;
      window.setTimeout(function() {
        e.elMenu.classList.contains("apexcharts-menu-open") ? e.elMenu.classList.remove("apexcharts-menu-open") : e.elMenu.classList.add("apexcharts-menu-open");
      }, 0);
    } }, { key: "handleDownload", value: function(e) {
      var t = this.w, a = new Lt(this.ctx);
      switch (e) {
        case "svg":
          a.exportToSVG(this.ctx);
          break;
        case "png":
          a.exportToPng(this.ctx);
          break;
        case "csv":
          a.exportToCSV({ series: t.config.series, columnDelimiter: t.config.chart.toolbar.export.csv.columnDelimiter });
      }
    } }, { key: "handleZoomReset", value: function(e) {
      this.ctx.getSyncedCharts().forEach(function(t) {
        var a = t.w;
        if (a.globals.lastXAxis.min = a.globals.initialConfig.xaxis.min, a.globals.lastXAxis.max = a.globals.initialConfig.xaxis.max, t.updateHelpers.revertDefaultAxisMinMax(), typeof a.config.chart.events.beforeResetZoom == "function") {
          var i = a.config.chart.events.beforeResetZoom(t, a);
          i && t.updateHelpers.revertDefaultAxisMinMax(i);
        }
        typeof a.config.chart.events.zoomed == "function" && t.ctx.toolbar.zoomCallback({ min: a.config.xaxis.min, max: a.config.xaxis.max }), a.globals.zoomed = !1;
        var r = t.ctx.series.emptyCollapsedSeries(z.clone(a.globals.initialSeries));
        t.updateHelpers._updateSeries(r, a.config.chart.animations.dynamicAnimation.enabled);
      });
    } }, { key: "destroy", value: function() {
      this.elZoom = null, this.elZoomIn = null, this.elZoomOut = null, this.elPan = null, this.elSelection = null, this.elZoomReset = null, this.elMenuIcon = null;
    } }]), y;
  }(), hi = function(y) {
    Z(t, ba);
    var e = _(t);
    function t(a) {
      var i;
      return T(this, t), (i = e.call(this, a)).ctx = a, i.w = a.w, i.dragged = !1, i.graphics = new X(i.ctx), i.eventList = ["mousedown", "mouseleave", "mousemove", "touchstart", "touchmove", "mouseup", "touchend", "wheel"], i.clientX = 0, i.clientY = 0, i.startX = 0, i.endX = 0, i.dragX = 0, i.startY = 0, i.endY = 0, i.dragY = 0, i.moveDirection = "none", i.debounceTimer = null, i.debounceDelay = 100, i.wheelDelay = 400, i;
    }
    return E(t, [{ key: "init", value: function(a) {
      var i = this, r = a.xyRatios, s = this.w, o = this;
      this.xyRatios = r, this.zoomRect = this.graphics.drawRect(0, 0, 0, 0), this.selectionRect = this.graphics.drawRect(0, 0, 0, 0), this.gridRect = s.globals.dom.baseEl.querySelector(".apexcharts-grid"), this.zoomRect.node.classList.add("apexcharts-zoom-rect"), this.selectionRect.node.classList.add("apexcharts-selection-rect"), s.globals.dom.elGraphical.add(this.zoomRect), s.globals.dom.elGraphical.add(this.selectionRect), s.config.chart.selection.type === "x" ? this.slDraggableRect = this.selectionRect.draggable({ minX: 0, minY: 0, maxX: s.globals.gridWidth, maxY: s.globals.gridHeight }).on("dragmove", this.selectionDragging.bind(this, "dragging")) : s.config.chart.selection.type === "y" ? this.slDraggableRect = this.selectionRect.draggable({ minX: 0, maxX: s.globals.gridWidth }).on("dragmove", this.selectionDragging.bind(this, "dragging")) : this.slDraggableRect = this.selectionRect.draggable().on("dragmove", this.selectionDragging.bind(this, "dragging")), this.preselectedSelection(), this.hoverArea = s.globals.dom.baseEl.querySelector("".concat(s.globals.chartClass, " .apexcharts-svg")), this.hoverArea.classList.add("apexcharts-zoomable"), this.eventList.forEach(function(n) {
        i.hoverArea.addEventListener(n, o.svgMouseEvents.bind(o, r), { capture: !1, passive: !0 });
      }), s.config.chart.zoom.allowMouseWheelZoom && this.hoverArea.addEventListener("wheel", o.mouseWheelEvent.bind(o), { capture: !1, passive: !1 });
    } }, { key: "destroy", value: function() {
      this.slDraggableRect && (this.slDraggableRect.draggable(!1), this.slDraggableRect.off(), this.selectionRect.off()), this.selectionRect = null, this.zoomRect = null, this.gridRect = null;
    } }, { key: "svgMouseEvents", value: function(a, i) {
      var r = this.w, s = this, o = this.ctx.toolbar, n = r.globals.zoomEnabled ? r.config.chart.zoom.type : r.config.chart.selection.type, h = r.config.chart.toolbar.autoSelected;
      if (i.shiftKey ? (this.shiftWasPressed = !0, o.enableZoomPanFromToolbar(h === "pan" ? "zoom" : "pan")) : this.shiftWasPressed && (o.enableZoomPanFromToolbar(h), this.shiftWasPressed = !1), i.target) {
        var d, c = i.target.classList;
        if (i.target.parentNode && i.target.parentNode !== null && (d = i.target.parentNode.classList), !(c.contains("apexcharts-selection-rect") || c.contains("apexcharts-legend-marker") || c.contains("apexcharts-legend-text") || d && d.contains("apexcharts-toolbar"))) {
          if (s.clientX = i.type === "touchmove" || i.type === "touchstart" ? i.touches[0].clientX : i.type === "touchend" ? i.changedTouches[0].clientX : i.clientX, s.clientY = i.type === "touchmove" || i.type === "touchstart" ? i.touches[0].clientY : i.type === "touchend" ? i.changedTouches[0].clientY : i.clientY, i.type === "mousedown" && i.which === 1) {
            var u = s.gridRect.getBoundingClientRect();
            s.startX = s.clientX - u.left, s.startY = s.clientY - u.top, s.dragged = !1, s.w.globals.mousedown = !0;
          }
          if ((i.type === "mousemove" && i.which === 1 || i.type === "touchmove") && (s.dragged = !0, r.globals.panEnabled ? (r.globals.selection = null, s.w.globals.mousedown && s.panDragging({ context: s, zoomtype: n, xyRatios: a })) : (s.w.globals.mousedown && r.globals.zoomEnabled || s.w.globals.mousedown && r.globals.selectionEnabled) && (s.selection = s.selectionDrawing({ context: s, zoomtype: n }))), i.type === "mouseup" || i.type === "touchend" || i.type === "mouseleave") {
            var p, m = (p = s.gridRect) === null || p === void 0 ? void 0 : p.getBoundingClientRect();
            m && s.w.globals.mousedown && (s.endX = s.clientX - m.left, s.endY = s.clientY - m.top, s.dragX = Math.abs(s.endX - s.startX), s.dragY = Math.abs(s.endY - s.startY), (r.globals.zoomEnabled || r.globals.selectionEnabled) && s.selectionDrawn({ context: s, zoomtype: n }), r.globals.panEnabled && r.config.xaxis.convertedCatToNumeric && s.delayedPanScrolled()), r.globals.zoomEnabled && s.hideSelectionRect(this.selectionRect), s.dragged = !1, s.w.globals.mousedown = !1;
          }
          this.makeSelectionRectDraggable();
        }
      }
    } }, { key: "mouseWheelEvent", value: function(a) {
      var i = this, r = this.w;
      a.preventDefault();
      var s = Date.now();
      s - r.globals.lastWheelExecution > this.wheelDelay && (this.executeMouseWheelZoom(a), r.globals.lastWheelExecution = s), this.debounceTimer && clearTimeout(this.debounceTimer), this.debounceTimer = setTimeout(function() {
        s - r.globals.lastWheelExecution > i.wheelDelay && (i.executeMouseWheelZoom(a), r.globals.lastWheelExecution = s);
      }, this.debounceDelay);
    } }, { key: "executeMouseWheelZoom", value: function(a) {
      var i, r = this.w;
      this.minX = r.globals.isRangeBar ? r.globals.minY : r.globals.minX, this.maxX = r.globals.isRangeBar ? r.globals.maxY : r.globals.maxX;
      var s = (i = this.gridRect) === null || i === void 0 ? void 0 : i.getBoundingClientRect();
      if (s) {
        var o, n, h, d = (a.clientX - s.left) / s.width, c = this.minX, u = this.maxX, p = u - c;
        if (a.deltaY < 0) {
          var m = c + d * p;
          n = m - (o = 0.5 * p) / 2, h = m + o / 2;
        } else n = c - (o = 1.5 * p) / 2, h = u + o / 2;
        if (!r.globals.isRangeBar) {
          n = Math.max(n, r.globals.initialMinX), h = Math.min(h, r.globals.initialMaxX);
          var f = 0.01 * (r.globals.initialMaxX - r.globals.initialMinX);
          if (h - n < f) {
            var b = (n + h) / 2;
            n = b - f / 2, h = b + f / 2;
          }
        }
        var v = this._getNewMinXMaxX(n, h);
        isNaN(v.minX) || isNaN(v.maxX) || this.zoomUpdateOptions(v.minX, v.maxX);
      }
    } }, { key: "makeSelectionRectDraggable", value: function() {
      var a = this.w;
      if (this.selectionRect) {
        var i = this.selectionRect.node.getBoundingClientRect();
        i.width > 0 && i.height > 0 && this.slDraggableRect.selectize({ points: "l, r", pointSize: 8, pointType: "rect" }).resize({ constraint: { minX: 0, minY: 0, maxX: a.globals.gridWidth, maxY: a.globals.gridHeight } }).on("resizing", this.selectionDragging.bind(this, "resizing"));
      }
    } }, { key: "preselectedSelection", value: function() {
      var a = this.w, i = this.xyRatios;
      if (!a.globals.zoomEnabled) {
        if (a.globals.selection !== void 0 && a.globals.selection !== null) this.drawSelectionRect(a.globals.selection);
        else if (a.config.chart.selection.xaxis.min !== void 0 && a.config.chart.selection.xaxis.max !== void 0) {
          var r = (a.config.chart.selection.xaxis.min - a.globals.minX) / i.xRatio, s = a.globals.gridWidth - (a.globals.maxX - a.config.chart.selection.xaxis.max) / i.xRatio - r;
          a.globals.isRangeBar && (r = (a.config.chart.selection.xaxis.min - a.globals.yAxisScale[0].niceMin) / i.invertedYRatio, s = (a.config.chart.selection.xaxis.max - a.config.chart.selection.xaxis.min) / i.invertedYRatio);
          var o = { x: r, y: 0, width: s, height: a.globals.gridHeight, translateX: 0, translateY: 0, selectionEnabled: !0 };
          this.drawSelectionRect(o), this.makeSelectionRectDraggable(), typeof a.config.chart.events.selection == "function" && a.config.chart.events.selection(this.ctx, { xaxis: { min: a.config.chart.selection.xaxis.min, max: a.config.chart.selection.xaxis.max }, yaxis: {} });
        }
      }
    } }, { key: "drawSelectionRect", value: function(a) {
      var i = a.x, r = a.y, s = a.width, o = a.height, n = a.translateX, h = n === void 0 ? 0 : n, d = a.translateY, c = d === void 0 ? 0 : d, u = this.w, p = this.zoomRect, m = this.selectionRect;
      if (this.dragged || u.globals.selection !== null) {
        var f = { transform: "translate(" + h + ", " + c + ")" };
        u.globals.zoomEnabled && this.dragged && (s < 0 && (s = 1), p.attr({ x: i, y: r, width: s, height: o, fill: u.config.chart.zoom.zoomedArea.fill.color, "fill-opacity": u.config.chart.zoom.zoomedArea.fill.opacity, stroke: u.config.chart.zoom.zoomedArea.stroke.color, "stroke-width": u.config.chart.zoom.zoomedArea.stroke.width, "stroke-opacity": u.config.chart.zoom.zoomedArea.stroke.opacity }), X.setAttrs(p.node, f)), u.globals.selectionEnabled && (m.attr({ x: i, y: r, width: s > 0 ? s : 0, height: o > 0 ? o : 0, fill: u.config.chart.selection.fill.color, "fill-opacity": u.config.chart.selection.fill.opacity, stroke: u.config.chart.selection.stroke.color, "stroke-width": u.config.chart.selection.stroke.width, "stroke-dasharray": u.config.chart.selection.stroke.dashArray, "stroke-opacity": u.config.chart.selection.stroke.opacity }), X.setAttrs(m.node, f));
      }
    } }, { key: "hideSelectionRect", value: function(a) {
      a && a.attr({ x: 0, y: 0, width: 0, height: 0 });
    } }, { key: "selectionDrawing", value: function(a) {
      var i = a.context, r = a.zoomtype, s = this.w, o = i, n = this.gridRect.getBoundingClientRect(), h = o.startX - 1, d = o.startY, c = !1, u = !1, p = o.clientX - n.left - h, m = o.clientY - n.top - d, f = {};
      return Math.abs(p + h) > s.globals.gridWidth ? p = s.globals.gridWidth - h : o.clientX - n.left < 0 && (p = h), h > o.clientX - n.left && (c = !0, p = Math.abs(p)), d > o.clientY - n.top && (u = !0, m = Math.abs(m)), f = r === "x" ? { x: c ? h - p : h, y: 0, width: p, height: s.globals.gridHeight } : r === "y" ? { x: 0, y: u ? d - m : d, width: s.globals.gridWidth, height: m } : { x: c ? h - p : h, y: u ? d - m : d, width: p, height: m }, o.drawSelectionRect(f), o.selectionDragging("resizing"), f;
    } }, { key: "selectionDragging", value: function(a, i) {
      var r = this, s = this.w, o = this.xyRatios, n = this.selectionRect, h = 0;
      a === "resizing" && (h = 30);
      var d = function(u) {
        return parseFloat(n.node.getAttribute(u));
      }, c = { x: d("x"), y: d("y"), width: d("width"), height: d("height") };
      s.globals.selection = c, typeof s.config.chart.events.selection == "function" && s.globals.selectionEnabled && (clearTimeout(this.w.globals.selectionResizeTimer), this.w.globals.selectionResizeTimer = window.setTimeout(function() {
        var u, p, m, f, b = r.gridRect.getBoundingClientRect(), v = n.node.getBoundingClientRect();
        s.globals.isRangeBar ? (u = s.globals.yAxisScale[0].niceMin + (v.left - b.left) * o.invertedYRatio, p = s.globals.yAxisScale[0].niceMin + (v.right - b.left) * o.invertedYRatio, m = 0, f = 1) : (u = s.globals.xAxisScale.niceMin + (v.left - b.left) * o.xRatio, p = s.globals.xAxisScale.niceMin + (v.right - b.left) * o.xRatio, m = s.globals.yAxisScale[0].niceMin + (b.bottom - v.bottom) * o.yRatio[0], f = s.globals.yAxisScale[0].niceMax - (v.top - b.top) * o.yRatio[0]);
        var w = { xaxis: { min: u, max: p }, yaxis: { min: m, max: f } };
        s.config.chart.events.selection(r.ctx, w), s.config.chart.brush.enabled && s.config.chart.events.brushScrolled !== void 0 && s.config.chart.events.brushScrolled(r.ctx, w);
      }, h));
    } }, { key: "selectionDrawn", value: function(a) {
      var i = a.context, r = a.zoomtype, s = this.w, o = i, n = this.xyRatios, h = this.ctx.toolbar;
      if (o.startX > o.endX) {
        var d = o.startX;
        o.startX = o.endX, o.endX = d;
      }
      if (o.startY > o.endY) {
        var c = o.startY;
        o.startY = o.endY, o.endY = c;
      }
      var u = void 0, p = void 0;
      s.globals.isRangeBar ? (u = s.globals.yAxisScale[0].niceMin + o.startX * n.invertedYRatio, p = s.globals.yAxisScale[0].niceMin + o.endX * n.invertedYRatio) : (u = s.globals.xAxisScale.niceMin + o.startX * n.xRatio, p = s.globals.xAxisScale.niceMin + o.endX * n.xRatio);
      var m = [], f = [];
      if (s.config.yaxis.forEach(function(k, S) {
        var A = s.globals.seriesYAxisMap[S][0];
        m.push(s.globals.yAxisScale[S].niceMax - n.yRatio[A] * o.startY), f.push(s.globals.yAxisScale[S].niceMax - n.yRatio[A] * o.endY);
      }), o.dragged && (o.dragX > 10 || o.dragY > 10) && u !== p) {
        if (s.globals.zoomEnabled) {
          var b = z.clone(s.globals.initialConfig.yaxis), v = z.clone(s.globals.initialConfig.xaxis);
          if (s.globals.zoomed = !0, s.config.xaxis.convertedCatToNumeric && (u = Math.floor(u), p = Math.floor(p), u < 1 && (u = 1, p = s.globals.dataPoints), p - u < 2 && (p = u + 1)), r !== "xy" && r !== "x" || (v = { min: u, max: p }), r !== "xy" && r !== "y" || b.forEach(function(k, S) {
            b[S].min = f[S], b[S].max = m[S];
          }), h) {
            var w = h.getBeforeZoomRange(v, b);
            w && (v = w.xaxis ? w.xaxis : v, b = w.yaxis ? w.yaxis : b);
          }
          var l = { xaxis: v };
          s.config.chart.group || (l.yaxis = b), o.ctx.updateHelpers._updateOptions(l, !1, o.w.config.chart.animations.dynamicAnimation.enabled), typeof s.config.chart.events.zoomed == "function" && h.zoomCallback(v, b);
        } else if (s.globals.selectionEnabled) {
          var g, x = null;
          g = { min: u, max: p }, r !== "xy" && r !== "y" || (x = z.clone(s.config.yaxis)).forEach(function(k, S) {
            x[S].min = f[S], x[S].max = m[S];
          }), s.globals.selection = o.selection, typeof s.config.chart.events.selection == "function" && s.config.chart.events.selection(o.ctx, { xaxis: g, yaxis: x });
        }
      }
    } }, { key: "panDragging", value: function(a) {
      var i = a.context, r = this.w, s = i;
      if (r.globals.lastClientPosition.x !== void 0) {
        var o = r.globals.lastClientPosition.x - s.clientX, n = r.globals.lastClientPosition.y - s.clientY;
        Math.abs(o) > Math.abs(n) && o > 0 ? this.moveDirection = "left" : Math.abs(o) > Math.abs(n) && o < 0 ? this.moveDirection = "right" : Math.abs(n) > Math.abs(o) && n > 0 ? this.moveDirection = "up" : Math.abs(n) > Math.abs(o) && n < 0 && (this.moveDirection = "down");
      }
      r.globals.lastClientPosition = { x: s.clientX, y: s.clientY };
      var h = r.globals.isRangeBar ? r.globals.minY : r.globals.minX, d = r.globals.isRangeBar ? r.globals.maxY : r.globals.maxX;
      r.config.xaxis.convertedCatToNumeric || s.panScrolled(h, d);
    } }, { key: "delayedPanScrolled", value: function() {
      var a = this.w, i = a.globals.minX, r = a.globals.maxX, s = (a.globals.maxX - a.globals.minX) / 2;
      this.moveDirection === "left" ? (i = a.globals.minX + s, r = a.globals.maxX + s) : this.moveDirection === "right" && (i = a.globals.minX - s, r = a.globals.maxX - s), i = Math.floor(i), r = Math.floor(r), this.updateScrolledChart({ xaxis: { min: i, max: r } }, i, r);
    } }, { key: "panScrolled", value: function(a, i) {
      var r = this.w, s = this.xyRatios, o = z.clone(r.globals.initialConfig.yaxis), n = s.xRatio, h = r.globals.minX, d = r.globals.maxX;
      r.globals.isRangeBar && (n = s.invertedYRatio, h = r.globals.minY, d = r.globals.maxY), this.moveDirection === "left" ? (a = h + r.globals.gridWidth / 15 * n, i = d + r.globals.gridWidth / 15 * n) : this.moveDirection === "right" && (a = h - r.globals.gridWidth / 15 * n, i = d - r.globals.gridWidth / 15 * n), r.globals.isRangeBar || (a < r.globals.initialMinX || i > r.globals.initialMaxX) && (a = h, i = d);
      var c = { xaxis: { min: a, max: i } };
      r.config.chart.group || (c.yaxis = o), this.updateScrolledChart(c, a, i);
    } }, { key: "updateScrolledChart", value: function(a, i, r) {
      var s = this.w;
      this.ctx.updateHelpers._updateOptions(a, !1, !1), typeof s.config.chart.events.scrolled == "function" && s.config.chart.events.scrolled(this.ctx, { xaxis: { min: i, max: r } });
    } }]), t;
  }(), va = function() {
    function y(e) {
      T(this, y), this.w = e.w, this.ttCtx = e, this.ctx = e.ctx;
    }
    return E(y, [{ key: "getNearestValues", value: function(e) {
      var t = e.hoverArea, a = e.elGrid, i = e.clientX, r = e.clientY, s = this.w, o = a.getBoundingClientRect(), n = o.width, h = o.height, d = n / (s.globals.dataPoints - 1), c = h / s.globals.dataPoints, u = this.hasBars();
      !s.globals.comboCharts && !u || s.config.xaxis.convertedCatToNumeric || (d = n / s.globals.dataPoints);
      var p = i - o.left - s.globals.barPadForNumericAxis, m = r - o.top;
      p < 0 || m < 0 || p > n || m > h ? (t.classList.remove("hovering-zoom"), t.classList.remove("hovering-pan")) : s.globals.zoomEnabled ? (t.classList.remove("hovering-pan"), t.classList.add("hovering-zoom")) : s.globals.panEnabled && (t.classList.remove("hovering-zoom"), t.classList.add("hovering-pan"));
      var f = Math.round(p / d), b = Math.floor(m / c);
      u && !s.config.xaxis.convertedCatToNumeric && (f = Math.ceil(p / d), f -= 1);
      var v = null, w = null, l = s.globals.seriesXvalues.map(function(A) {
        return A.filter(function(L) {
          return z.isNumber(L);
        });
      }), g = s.globals.seriesYvalues.map(function(A) {
        return A.filter(function(L) {
          return z.isNumber(L);
        });
      });
      if (s.globals.isXNumeric) {
        var x = this.ttCtx.getElGrid().getBoundingClientRect(), k = p * (x.width / n), S = m * (x.height / h);
        v = (w = this.closestInMultiArray(k, S, l, g)).index, f = w.j, v !== null && (l = s.globals.seriesXvalues[v], f = (w = this.closestInArray(k, l)).index);
      }
      return s.globals.capturedSeriesIndex = v === null ? -1 : v, (!f || f < 1) && (f = 0), s.globals.isBarHorizontal ? s.globals.capturedDataPointIndex = b : s.globals.capturedDataPointIndex = f, { capturedSeries: v, j: s.globals.isBarHorizontal ? b : f, hoverX: p, hoverY: m };
    } }, { key: "closestInMultiArray", value: function(e, t, a, i) {
      var r = this.w, s = 0, o = null, n = -1;
      r.globals.series.length > 1 ? s = this.getFirstActiveXArray(a) : o = 0;
      var h = a[s][0], d = Math.abs(e - h);
      if (a.forEach(function(p) {
        p.forEach(function(m, f) {
          var b = Math.abs(e - m);
          b <= d && (d = b, n = f);
        });
      }), n !== -1) {
        var c = i[s][n], u = Math.abs(t - c);
        o = s, i.forEach(function(p, m) {
          var f = Math.abs(t - p[n]);
          f <= u && (u = f, o = m);
        });
      }
      return { index: o, j: n };
    } }, { key: "getFirstActiveXArray", value: function(e) {
      for (var t = this.w, a = 0, i = e.map(function(s, o) {
        return s.length > 0 ? o : -1;
      }), r = 0; r < i.length; r++) if (i[r] !== -1 && t.globals.collapsedSeriesIndices.indexOf(r) === -1 && t.globals.ancillaryCollapsedSeriesIndices.indexOf(r) === -1) {
        a = i[r];
        break;
      }
      return a;
    } }, { key: "closestInArray", value: function(e, t) {
      for (var a = t[0], i = null, r = Math.abs(e - a), s = 0; s < t.length; s++) {
        var o = Math.abs(e - t[s]);
        o < r && (r = o, i = s);
      }
      return { index: i };
    } }, { key: "isXoverlap", value: function(e) {
      var t = [], a = this.w.globals.seriesX.filter(function(r) {
        return r[0] !== void 0;
      });
      if (a.length > 0) for (var i = 0; i < a.length - 1; i++) a[i][e] !== void 0 && a[i + 1][e] !== void 0 && a[i][e] !== a[i + 1][e] && t.push("unEqual");
      return t.length === 0;
    } }, { key: "isInitialSeriesSameLen", value: function() {
      for (var e = !0, t = this.w.globals.initialSeries, a = 0; a < t.length - 1; a++) if (t[a].data.length !== t[a + 1].data.length) {
        e = !1;
        break;
      }
      return e;
    } }, { key: "getBarsHeight", value: function(e) {
      return K(e).reduce(function(t, a) {
        return t + a.getBBox().height;
      }, 0);
    } }, { key: "getElMarkers", value: function(e) {
      return typeof e == "number" ? this.w.globals.dom.baseEl.querySelectorAll(".apexcharts-series[data\\:realIndex='".concat(e, "'] .apexcharts-series-markers-wrap > *")) : this.w.globals.dom.baseEl.querySelectorAll(".apexcharts-series-markers-wrap > *");
    } }, { key: "getAllMarkers", value: function() {
      var e = this.w.globals.dom.baseEl.querySelectorAll(".apexcharts-series-markers-wrap");
      (e = K(e)).sort(function(a, i) {
        var r = Number(a.getAttribute("data:realIndex")), s = Number(i.getAttribute("data:realIndex"));
        return s < r ? 1 : s > r ? -1 : 0;
      });
      var t = [];
      return e.forEach(function(a) {
        t.push(a.querySelector(".apexcharts-marker"));
      }), t;
    } }, { key: "hasMarkers", value: function(e) {
      return this.getElMarkers(e).length > 0;
    } }, { key: "getPathFromPoint", value: function(e, t) {
      var a = Number(e.getAttribute("cx")), i = Number(e.getAttribute("cy")), r = e.getAttribute("shape");
      return new X(this.ctx).getMarkerPath(a, i, r, t);
    } }, { key: "getElBars", value: function() {
      return this.w.globals.dom.baseEl.querySelectorAll(".apexcharts-bar-series,  .apexcharts-candlestick-series, .apexcharts-boxPlot-series, .apexcharts-rangebar-series");
    } }, { key: "hasBars", value: function() {
      return this.getElBars().length > 0;
    } }, { key: "getHoverMarkerSize", value: function(e) {
      var t = this.w, a = t.config.markers.hover.size;
      return a === void 0 && (a = t.globals.markers.size[e] + t.config.markers.hover.sizeOffset), a;
    } }, { key: "toggleAllTooltipSeriesGroups", value: function(e) {
      var t = this.w, a = this.ttCtx;
      a.allTooltipSeriesGroups.length === 0 && (a.allTooltipSeriesGroups = t.globals.dom.baseEl.querySelectorAll(".apexcharts-tooltip-series-group"));
      for (var i = a.allTooltipSeriesGroups, r = 0; r < i.length; r++) e === "enable" ? (i[r].classList.add("apexcharts-active"), i[r].style.display = t.config.tooltip.items.display) : (i[r].classList.remove("apexcharts-active"), i[r].style.display = "none");
    } }]), y;
  }(), ci = function() {
    function y(e) {
      T(this, y), this.w = e.w, this.ctx = e.ctx, this.ttCtx = e, this.tooltipUtil = new va(e);
    }
    return E(y, [{ key: "drawSeriesTexts", value: function(e) {
      var t = e.shared, a = t === void 0 || t, i = e.ttItems, r = e.i, s = r === void 0 ? 0 : r, o = e.j, n = o === void 0 ? null : o, h = e.y1, d = e.y2, c = e.e, u = this.w;
      u.config.tooltip.custom !== void 0 ? this.handleCustomTooltip({ i: s, j: n, y1: h, y2: d, w: u }) : this.toggleActiveInactiveSeries(a, s);
      var p = this.getValuesToPrint({ i: s, j: n });
      this.printLabels({ i: s, j: n, values: p, ttItems: i, shared: a, e: c });
      var m = this.ttCtx.getElTooltip();
      this.ttCtx.tooltipRect.ttWidth = m.getBoundingClientRect().width, this.ttCtx.tooltipRect.ttHeight = m.getBoundingClientRect().height;
    } }, { key: "printLabels", value: function(e) {
      var t, a = this, i = e.i, r = e.j, s = e.values, o = e.ttItems, n = e.shared, h = e.e, d = this.w, c = [], u = function(x) {
        return d.globals.seriesGoals[x] && d.globals.seriesGoals[x][r] && Array.isArray(d.globals.seriesGoals[x][r]);
      }, p = s.xVal, m = s.zVal, f = s.xAxisTTVal, b = "", v = d.globals.colors[i];
      r !== null && d.config.plotOptions.bar.distributed && (v = d.globals.colors[r]);
      for (var w = function(x, k) {
        var S = a.getFormatters(i);
        b = a.getSeriesName({ fn: S.yLbTitleFormatter, index: i, seriesIndex: i, j: r }), d.config.chart.type === "treemap" && (b = S.yLbTitleFormatter(String(d.config.series[i].data[r].x), { series: d.globals.series, seriesIndex: i, dataPointIndex: r, w: d }));
        var A = d.config.tooltip.inverseOrder ? k : x;
        if (d.globals.axisCharts) {
          var L = function(B) {
            var G, W, q, ee;
            return d.globals.isRangeData ? S.yLbFormatter((G = d.globals.seriesRangeStart) === null || G === void 0 || (W = G[B]) === null || W === void 0 ? void 0 : W[r], { series: d.globals.seriesRangeStart, seriesIndex: B, dataPointIndex: r, w: d }) + " - " + S.yLbFormatter((q = d.globals.seriesRangeEnd) === null || q === void 0 || (ee = q[B]) === null || ee === void 0 ? void 0 : ee[r], { series: d.globals.seriesRangeEnd, seriesIndex: B, dataPointIndex: r, w: d }) : S.yLbFormatter(d.globals.series[B][r], { series: d.globals.series, seriesIndex: B, dataPointIndex: r, w: d });
          };
          if (n) S = a.getFormatters(A), b = a.getSeriesName({ fn: S.yLbTitleFormatter, index: A, seriesIndex: i, j: r }), v = d.globals.colors[A], t = L(A), u(A) && (c = d.globals.seriesGoals[A][r].map(function(B) {
            return { attrs: B, val: S.yLbFormatter(B.value, { seriesIndex: A, dataPointIndex: r, w: d }) };
          }));
          else {
            var I, F = h == null || (I = h.target) === null || I === void 0 ? void 0 : I.getAttribute("fill");
            F && (F.indexOf("url") !== -1 ? F.indexOf("Pattern") !== -1 && (v = d.globals.dom.baseEl.querySelector(F.substr(4).slice(0, -1)).childNodes[0].getAttribute("stroke")) : v = F), t = L(i), u(i) && Array.isArray(d.globals.seriesGoals[i][r]) && (c = d.globals.seriesGoals[i][r].map(function(B) {
              return { attrs: B, val: S.yLbFormatter(B.value, { seriesIndex: i, dataPointIndex: r, w: d }) };
            }));
          }
        }
        r === null && (t = S.yLbFormatter(d.globals.series[i], H(H({}, d), {}, { seriesIndex: i, dataPointIndex: i }))), a.DOMHandling({ i, t: A, j: r, ttItems: o, values: { val: t, goalVals: c, xVal: p, xAxisTTVal: f, zVal: m }, seriesName: b, shared: n, pColor: v });
      }, l = 0, g = d.globals.series.length - 1; l < d.globals.series.length; l++, g--) w(l, g);
    } }, { key: "getFormatters", value: function(e) {
      var t, a = this.w, i = a.globals.yLabelFormatters[e];
      return a.globals.ttVal !== void 0 ? Array.isArray(a.globals.ttVal) ? (i = a.globals.ttVal[e] && a.globals.ttVal[e].formatter, t = a.globals.ttVal[e] && a.globals.ttVal[e].title && a.globals.ttVal[e].title.formatter) : (i = a.globals.ttVal.formatter, typeof a.globals.ttVal.title.formatter == "function" && (t = a.globals.ttVal.title.formatter)) : t = a.config.tooltip.y.title.formatter, typeof i != "function" && (i = a.globals.yLabelFormatters[0] ? a.globals.yLabelFormatters[0] : function(r) {
        return r;
      }), typeof t != "function" && (t = function(r) {
        return r;
      }), { yLbFormatter: i, yLbTitleFormatter: t };
    } }, { key: "getSeriesName", value: function(e) {
      var t = e.fn, a = e.index, i = e.seriesIndex, r = e.j, s = this.w;
      return t(String(s.globals.seriesNames[a]), { series: s.globals.series, seriesIndex: i, dataPointIndex: r, w: s });
    } }, { key: "DOMHandling", value: function(e) {
      e.i;
      var t = e.t, a = e.j, i = e.ttItems, r = e.values, s = e.seriesName, o = e.shared, n = e.pColor, h = this.w, d = this.ttCtx, c = r.val, u = r.goalVals, p = r.xVal, m = r.xAxisTTVal, f = r.zVal, b = null;
      b = i[t].children, h.config.tooltip.fillSeriesColor && (i[t].style.backgroundColor = n, b[0].style.display = "none"), d.showTooltipTitle && (d.tooltipTitle === null && (d.tooltipTitle = h.globals.dom.baseEl.querySelector(".apexcharts-tooltip-title")), d.tooltipTitle.innerHTML = p), d.isXAxisTooltipEnabled && (d.xaxisTooltipText.innerHTML = m !== "" ? m : p);
      var v = i[t].querySelector(".apexcharts-tooltip-text-y-label");
      v && (v.innerHTML = s || "");
      var w = i[t].querySelector(".apexcharts-tooltip-text-y-value");
      w && (w.innerHTML = c !== void 0 ? c : ""), b[0] && b[0].classList.contains("apexcharts-tooltip-marker") && (h.config.tooltip.marker.fillColors && Array.isArray(h.config.tooltip.marker.fillColors) && (n = h.config.tooltip.marker.fillColors[t]), b[0].style.backgroundColor = n), h.config.tooltip.marker.show || (b[0].style.display = "none");
      var l = i[t].querySelector(".apexcharts-tooltip-text-goals-label"), g = i[t].querySelector(".apexcharts-tooltip-text-goals-value");
      if (u.length && h.globals.seriesGoals[t]) {
        var x = function() {
          var A = "<div >", L = "<div>";
          u.forEach(function(I, F) {
            A += ' <div style="display: flex"><span class="apexcharts-tooltip-marker" style="background-color: '.concat(I.attrs.strokeColor, '; height: 3px; border-radius: 0; top: 5px;"></span> ').concat(I.attrs.name, "</div>"), L += "<div>".concat(I.val, "</div>");
          }), l.innerHTML = A + "</div>", g.innerHTML = L + "</div>";
        };
        o ? h.globals.seriesGoals[t][a] && Array.isArray(h.globals.seriesGoals[t][a]) ? x() : (l.innerHTML = "", g.innerHTML = "") : x();
      } else l.innerHTML = "", g.innerHTML = "";
      if (f !== null && (i[t].querySelector(".apexcharts-tooltip-text-z-label").innerHTML = h.config.tooltip.z.title, i[t].querySelector(".apexcharts-tooltip-text-z-value").innerHTML = f !== void 0 ? f : ""), o && b[0]) {
        if (h.config.tooltip.hideEmptySeries) {
          var k = i[t].querySelector(".apexcharts-tooltip-marker"), S = i[t].querySelector(".apexcharts-tooltip-text");
          parseFloat(c) == 0 ? (k.style.display = "none", S.style.display = "none") : (k.style.display = "block", S.style.display = "block");
        }
        c == null || h.globals.ancillaryCollapsedSeriesIndices.indexOf(t) > -1 || h.globals.collapsedSeriesIndices.indexOf(t) > -1 || Array.isArray(d.tConfig.enabledOnSeries) && d.tConfig.enabledOnSeries.indexOf(t) === -1 ? b[0].parentNode.style.display = "none" : b[0].parentNode.style.display = h.config.tooltip.items.display;
      } else Array.isArray(d.tConfig.enabledOnSeries) && d.tConfig.enabledOnSeries.indexOf(t) === -1 && (b[0].parentNode.style.display = "none");
    } }, { key: "toggleActiveInactiveSeries", value: function(e, t) {
      var a = this.w;
      if (e) this.tooltipUtil.toggleAllTooltipSeriesGroups("enable");
      else {
        this.tooltipUtil.toggleAllTooltipSeriesGroups("disable");
        var i = a.globals.dom.baseEl.querySelector(".apexcharts-tooltip-series-group-".concat(t));
        i && (i.classList.add("apexcharts-active"), i.style.display = a.config.tooltip.items.display);
      }
    } }, { key: "getValuesToPrint", value: function(e) {
      var t = e.i, a = e.j, i = this.w, r = this.ctx.series.filteredSeriesX(), s = "", o = "", n = null, h = null, d = { series: i.globals.series, seriesIndex: t, dataPointIndex: a, w: i }, c = i.globals.ttZFormatter;
      a === null ? h = i.globals.series[t] : i.globals.isXNumeric && i.config.chart.type !== "treemap" ? (s = r[t][a], r[t].length === 0 && (s = r[this.tooltipUtil.getFirstActiveXArray(r)][a])) : s = new jt(this.ctx).isFormatXY() ? i.config.series[t].data[a] !== void 0 ? i.config.series[t].data[a].x : "" : i.globals.labels[a] !== void 0 ? i.globals.labels[a] : "";
      var u = s;
      return i.globals.isXNumeric && i.config.xaxis.type === "datetime" ? s = new He(this.ctx).xLabelFormat(i.globals.ttKeyFormatter, u, u, { i: void 0, dateFormatter: new de(this.ctx).formatDate, w: this.w }) : s = i.globals.isBarHorizontal ? i.globals.yLabelFormatters[0](u, d) : i.globals.xLabelFormatter(u, d), i.config.tooltip.x.formatter !== void 0 && (s = i.globals.ttKeyFormatter(u, d)), i.globals.seriesZ.length > 0 && i.globals.seriesZ[t].length > 0 && (n = c(i.globals.seriesZ[t][a], i)), o = typeof i.config.xaxis.tooltip.formatter == "function" ? i.globals.xaxisTooltipFormatter(u, d) : s, { val: Array.isArray(h) ? h.join(" ") : h, xVal: Array.isArray(s) ? s.join(" ") : s, xAxisTTVal: Array.isArray(o) ? o.join(" ") : o, zVal: n };
    } }, { key: "handleCustomTooltip", value: function(e) {
      var t = e.i, a = e.j, i = e.y1, r = e.y2, s = e.w, o = this.ttCtx.getElTooltip(), n = s.config.tooltip.custom;
      Array.isArray(n) && n[t] && (n = n[t]), o.innerHTML = n({ ctx: this.ctx, series: s.globals.series, seriesIndex: t, dataPointIndex: a, y1: i, y2: r, w: s });
    } }]), y;
  }(), ya = function() {
    function y(e) {
      T(this, y), this.ttCtx = e, this.ctx = e.ctx, this.w = e.w;
    }
    return E(y, [{ key: "moveXCrosshairs", value: function(e) {
      var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null, a = this.ttCtx, i = this.w, r = a.getElXCrosshairs(), s = e - a.xcrosshairsWidth / 2, o = i.globals.labels.slice().length;
      if (t !== null && (s = i.globals.gridWidth / o * t), r === null || i.globals.isBarHorizontal || (r.setAttribute("x", s), r.setAttribute("x1", s), r.setAttribute("x2", s), r.setAttribute("y2", i.globals.gridHeight), r.classList.add("apexcharts-active")), s < 0 && (s = 0), s > i.globals.gridWidth && (s = i.globals.gridWidth), a.isXAxisTooltipEnabled) {
        var n = s;
        i.config.xaxis.crosshairs.width !== "tickWidth" && i.config.xaxis.crosshairs.width !== "barWidth" || (n = s + a.xcrosshairsWidth / 2), this.moveXAxisTooltip(n);
      }
    } }, { key: "moveYCrosshairs", value: function(e) {
      var t = this.ttCtx;
      t.ycrosshairs !== null && X.setAttrs(t.ycrosshairs, { y1: e, y2: e }), t.ycrosshairsHidden !== null && X.setAttrs(t.ycrosshairsHidden, { y1: e, y2: e });
    } }, { key: "moveXAxisTooltip", value: function(e) {
      var t = this.w, a = this.ttCtx;
      if (a.xaxisTooltip !== null && a.xcrosshairsWidth !== 0) {
        a.xaxisTooltip.classList.add("apexcharts-active");
        var i = a.xaxisOffY + t.config.xaxis.tooltip.offsetY + t.globals.translateY + 1 + t.config.xaxis.offsetY;
        if (e -= a.xaxisTooltip.getBoundingClientRect().width / 2, !isNaN(e)) {
          e += t.globals.translateX;
          var r;
          r = new X(this.ctx).getTextRects(a.xaxisTooltipText.innerHTML), a.xaxisTooltipText.style.minWidth = r.width + "px", a.xaxisTooltip.style.left = e + "px", a.xaxisTooltip.style.top = i + "px";
        }
      }
    } }, { key: "moveYAxisTooltip", value: function(e) {
      var t = this.w, a = this.ttCtx;
      a.yaxisTTEls === null && (a.yaxisTTEls = t.globals.dom.baseEl.querySelectorAll(".apexcharts-yaxistooltip"));
      var i = parseInt(a.ycrosshairsHidden.getAttribute("y1"), 10), r = t.globals.translateY + i, s = a.yaxisTTEls[e].getBoundingClientRect().height, o = t.globals.translateYAxisX[e] - 2;
      t.config.yaxis[e].opposite && (o -= 26), r -= s / 2, t.globals.ignoreYAxisIndexes.indexOf(e) === -1 ? (a.yaxisTTEls[e].classList.add("apexcharts-active"), a.yaxisTTEls[e].style.top = r + "px", a.yaxisTTEls[e].style.left = o + t.config.yaxis[e].tooltip.offsetX + "px") : a.yaxisTTEls[e].classList.remove("apexcharts-active");
    } }, { key: "moveTooltip", value: function(e, t) {
      var a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null, i = this.w, r = this.ttCtx, s = r.getElTooltip(), o = r.tooltipRect, n = a !== null ? parseFloat(a) : 1, h = parseFloat(e) + n + 5, d = parseFloat(t) + n / 2;
      if (h > i.globals.gridWidth / 2 && (h = h - o.ttWidth - n - 10), h > i.globals.gridWidth - o.ttWidth - 10 && (h = i.globals.gridWidth - o.ttWidth), h < -20 && (h = -20), i.config.tooltip.followCursor) {
        var c = r.getElGrid().getBoundingClientRect();
        (h = r.e.clientX - c.left) > i.globals.gridWidth / 2 && (h -= r.tooltipRect.ttWidth), (d = r.e.clientY + i.globals.translateY - c.top) > i.globals.gridHeight / 2 && (d -= r.tooltipRect.ttHeight);
      } else i.globals.isBarHorizontal || o.ttHeight / 2 + d > i.globals.gridHeight && (d = i.globals.gridHeight - o.ttHeight + i.globals.translateY);
      isNaN(h) || (h += i.globals.translateX, s.style.left = h + "px", s.style.top = d + "px");
    } }, { key: "moveMarkers", value: function(e, t) {
      var a = this.w, i = this.ttCtx;
      if (a.globals.markers.size[e] > 0) for (var r = a.globals.dom.baseEl.querySelectorAll(" .apexcharts-series[data\\:realIndex='".concat(e, "'] .apexcharts-marker")), s = 0; s < r.length; s++) parseInt(r[s].getAttribute("rel"), 10) === t && (i.marker.resetPointsSize(), i.marker.enlargeCurrentPoint(t, r[s]));
      else i.marker.resetPointsSize(), this.moveDynamicPointOnHover(t, e);
    } }, { key: "moveDynamicPointOnHover", value: function(e, t) {
      var a, i, r, s, o = this.w, n = this.ttCtx, h = new X(this.ctx), d = o.globals.pointsArray, c = n.tooltipUtil.getHoverMarkerSize(t), u = o.config.series[t].type;
      if (!u || u !== "column" && u !== "candlestick" && u !== "boxPlot") {
        r = (a = d[t][e]) === null || a === void 0 ? void 0 : a[0], s = ((i = d[t][e]) === null || i === void 0 ? void 0 : i[1]) || 0;
        var p = o.globals.dom.baseEl.querySelector(".apexcharts-series[data\\:realIndex='".concat(t, "'] .apexcharts-series-markers path"));
        if (p && s < o.globals.gridHeight && s > 0) {
          var m = p.getAttribute("shape"), f = h.getMarkerPath(r, s, m, 1.5 * c);
          p.setAttribute("d", f);
        }
        this.moveXCrosshairs(r), n.fixedTooltip || this.moveTooltip(r, s, c);
      }
    } }, { key: "moveDynamicPointsOnHover", value: function(e) {
      var t, a = this.ttCtx, i = a.w, r = 0, s = 0, o = i.globals.pointsArray, n = new qe(this.ctx), h = new X(this.ctx);
      t = n.getActiveConfigSeriesIndex("asc", ["line", "area", "scatter", "bubble"]);
      var d = a.tooltipUtil.getHoverMarkerSize(t);
      o[t] && (r = o[t][e][0], s = o[t][e][1]);
      var c = a.tooltipUtil.getAllMarkers();
      if (c !== null) for (var u = 0; u < i.globals.series.length; u++) {
        var p = o[u];
        if (i.globals.comboCharts && p === void 0 && c.splice(u, 0, null), p && p.length) {
          var m = o[u][e][1], f = void 0;
          c[u].setAttribute("cx", r);
          var b = c[u].getAttribute("shape");
          if (i.config.chart.type === "rangeArea" && !i.globals.comboCharts) {
            var v = e + i.globals.series[u].length;
            f = o[u][v][1], m -= Math.abs(m - f) / 2;
          }
          if (m !== null && !isNaN(m) && m < i.globals.gridHeight + d && m + d > 0) {
            var w = h.getMarkerPath(r, m, b, d);
            c[u].setAttribute("d", w);
          } else c[u].setAttribute("d", "");
        }
      }
      this.moveXCrosshairs(r), a.fixedTooltip || this.moveTooltip(r, s || i.globals.gridHeight, d);
    } }, { key: "moveStickyTooltipOverBars", value: function(e, t) {
      var a = this.w, i = this.ttCtx, r = a.globals.columnSeries ? a.globals.columnSeries.length : a.globals.series.length, s = r >= 2 && r % 2 == 0 ? Math.floor(r / 2) : Math.floor(r / 2) + 1;
      a.globals.isBarHorizontal && (s = new qe(this.ctx).getActiveConfigSeriesIndex("desc") + 1);
      var o = a.globals.dom.baseEl.querySelector(".apexcharts-bar-series .apexcharts-series[rel='".concat(s, "'] path[j='").concat(e, "'], .apexcharts-candlestick-series .apexcharts-series[rel='").concat(s, "'] path[j='").concat(e, "'], .apexcharts-boxPlot-series .apexcharts-series[rel='").concat(s, "'] path[j='").concat(e, "'], .apexcharts-rangebar-series .apexcharts-series[rel='").concat(s, "'] path[j='").concat(e, "']"));
      o || typeof t != "number" || (o = a.globals.dom.baseEl.querySelector(".apexcharts-bar-series .apexcharts-series[data\\:realIndex='".concat(t, "'] path[j='").concat(e, `'],
        .apexcharts-candlestick-series .apexcharts-series[data\\:realIndex='`).concat(t, "'] path[j='").concat(e, `'],
        .apexcharts-boxPlot-series .apexcharts-series[data\\:realIndex='`).concat(t, "'] path[j='").concat(e, `'],
        .apexcharts-rangebar-series .apexcharts-series[data\\:realIndex='`).concat(t, "'] path[j='").concat(e, "']")));
      var n = o ? parseFloat(o.getAttribute("cx")) : 0, h = o ? parseFloat(o.getAttribute("cy")) : 0, d = o ? parseFloat(o.getAttribute("barWidth")) : 0, c = i.getElGrid().getBoundingClientRect(), u = o && (o.classList.contains("apexcharts-candlestick-area") || o.classList.contains("apexcharts-boxPlot-area"));
      a.globals.isXNumeric ? (o && !u && (n -= r % 2 != 0 ? d / 2 : 0), o && u && a.globals.comboCharts && (n -= d / 2)) : a.globals.isBarHorizontal || (n = i.xAxisTicksPositions[e - 1] + i.dataPointsDividedWidth / 2, isNaN(n) && (n = i.xAxisTicksPositions[e] - i.dataPointsDividedWidth / 2)), a.globals.isBarHorizontal ? h -= i.tooltipRect.ttHeight : a.config.tooltip.followCursor ? h = i.e.clientY - c.top - i.tooltipRect.ttHeight / 2 : h + i.tooltipRect.ttHeight + 15 > a.globals.gridHeight && (h = a.globals.gridHeight), a.globals.isBarHorizontal || this.moveXCrosshairs(n), i.fixedTooltip || this.moveTooltip(n, h || a.globals.gridHeight);
    } }]), y;
  }(), di = function() {
    function y(e) {
      T(this, y), this.w = e.w, this.ttCtx = e, this.ctx = e.ctx, this.tooltipPosition = new ya(e);
    }
    return E(y, [{ key: "drawDynamicPoints", value: function() {
      var e = this.w, t = new X(this.ctx), a = new ut(this.ctx), i = e.globals.dom.baseEl.querySelectorAll(".apexcharts-series");
      i = K(i), e.config.chart.stacked && i.sort(function(c, u) {
        return parseFloat(c.getAttribute("data:realIndex")) - parseFloat(u.getAttribute("data:realIndex"));
      });
      for (var r = 0; r < i.length; r++) {
        var s = i[r].querySelector(".apexcharts-series-markers-wrap");
        if (s !== null) {
          var o = void 0, n = "apexcharts-marker w".concat((Math.random() + 1).toString(36).substring(4));
          e.config.chart.type !== "line" && e.config.chart.type !== "area" || e.globals.comboCharts || e.config.tooltip.intersect || (n += " no-pointer-events");
          var h = a.getMarkerConfig({ cssClass: n, seriesIndex: Number(s.getAttribute("data:realIndex")) });
          (o = t.drawMarker(0, 0, h)).node.setAttribute("default-marker-size", 0);
          var d = document.createElementNS(e.globals.SVGNS, "g");
          d.classList.add("apexcharts-series-markers"), d.appendChild(o.node), s.appendChild(d);
        }
      }
    } }, { key: "enlargeCurrentPoint", value: function(e, t) {
      var a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null, i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null, r = this.w;
      r.config.chart.type !== "bubble" && this.newPointSize(e, t);
      var s = t.getAttribute("cx"), o = t.getAttribute("cy");
      if (a !== null && i !== null && (s = a, o = i), this.tooltipPosition.moveXCrosshairs(s), !this.fixedTooltip) {
        if (r.config.chart.type === "radar") {
          var n = this.ttCtx.getElGrid().getBoundingClientRect();
          s = this.ttCtx.e.clientX - n.left;
        }
        this.tooltipPosition.moveTooltip(s, o, r.config.markers.hover.size);
      }
    } }, { key: "enlargePoints", value: function(e) {
      for (var t = this.w, a = this, i = this.ttCtx, r = e, s = t.globals.dom.baseEl.querySelectorAll(".apexcharts-series:not(.apexcharts-series-collapsed) .apexcharts-marker"), o = t.config.markers.hover.size, n = 0; n < s.length; n++) {
        var h = s[n].getAttribute("rel"), d = s[n].getAttribute("index");
        if (o === void 0 && (o = t.globals.markers.size[d] + t.config.markers.hover.sizeOffset), r === parseInt(h, 10)) {
          a.newPointSize(r, s[n]);
          var c = s[n].getAttribute("cx"), u = s[n].getAttribute("cy");
          a.tooltipPosition.moveXCrosshairs(c), i.fixedTooltip || a.tooltipPosition.moveTooltip(c, u, o);
        } else a.oldPointSize(s[n]);
      }
    } }, { key: "newPointSize", value: function(e, t) {
      var a = this.w, i = a.config.markers.hover.size, r = e === 0 ? t.parentNode.firstChild : t.parentNode.lastChild;
      if (r.getAttribute("default-marker-size") !== "0") {
        var s = parseInt(r.getAttribute("index"), 10);
        i === void 0 && (i = a.globals.markers.size[s] + a.config.markers.hover.sizeOffset), i < 0 && (i = 0);
        var o = this.ttCtx.tooltipUtil.getPathFromPoint(t, i);
        t.setAttribute("d", o);
      }
    } }, { key: "oldPointSize", value: function(e) {
      var t = parseFloat(e.getAttribute("default-marker-size")), a = this.ttCtx.tooltipUtil.getPathFromPoint(e, t);
      e.setAttribute("d", a);
    } }, { key: "resetPointsSize", value: function() {
      for (var e = this.w.globals.dom.baseEl.querySelectorAll(".apexcharts-series:not(.apexcharts-series-collapsed) .apexcharts-marker"), t = 0; t < e.length; t++) {
        var a = parseFloat(e[t].getAttribute("default-marker-size"));
        if (z.isNumber(a) && a >= 0) {
          var i = this.ttCtx.tooltipUtil.getPathFromPoint(e[t], a);
          e[t].setAttribute("d", i);
        } else e[t].setAttribute("d", "M0,0");
      }
    } }]), y;
  }(), ui = function() {
    function y(e) {
      T(this, y), this.w = e.w;
      var t = this.w;
      this.ttCtx = e, this.isVerticalGroupedRangeBar = !t.globals.isBarHorizontal && t.config.chart.type === "rangeBar" && t.config.plotOptions.bar.rangeBarGroupRows;
    }
    return E(y, [{ key: "getAttr", value: function(e, t) {
      return parseFloat(e.target.getAttribute(t));
    } }, { key: "handleHeatTreeTooltip", value: function(e) {
      var t = e.e, a = e.opt, i = e.x, r = e.y, s = e.type, o = this.ttCtx, n = this.w;
      if (t.target.classList.contains("apexcharts-".concat(s, "-rect"))) {
        var h = this.getAttr(t, "i"), d = this.getAttr(t, "j"), c = this.getAttr(t, "cx"), u = this.getAttr(t, "cy"), p = this.getAttr(t, "width"), m = this.getAttr(t, "height");
        if (o.tooltipLabels.drawSeriesTexts({ ttItems: a.ttItems, i: h, j: d, shared: !1, e: t }), n.globals.capturedSeriesIndex = h, n.globals.capturedDataPointIndex = d, i = c + o.tooltipRect.ttWidth / 2 + p, r = u + o.tooltipRect.ttHeight / 2 - m / 2, o.tooltipPosition.moveXCrosshairs(c + p / 2), i > n.globals.gridWidth / 2 && (i = c - o.tooltipRect.ttWidth / 2 + p), o.w.config.tooltip.followCursor) {
          var f = n.globals.dom.elWrap.getBoundingClientRect();
          i = n.globals.clientX - f.left - (i > n.globals.gridWidth / 2 ? o.tooltipRect.ttWidth : 0), r = n.globals.clientY - f.top - (r > n.globals.gridHeight / 2 ? o.tooltipRect.ttHeight : 0);
        }
      }
      return { x: i, y: r };
    } }, { key: "handleMarkerTooltip", value: function(e) {
      var t, a, i = e.e, r = e.opt, s = e.x, o = e.y, n = this.w, h = this.ttCtx;
      if (i.target.classList.contains("apexcharts-marker")) {
        var d = parseInt(r.paths.getAttribute("cx"), 10), c = parseInt(r.paths.getAttribute("cy"), 10), u = parseFloat(r.paths.getAttribute("val"));
        if (a = parseInt(r.paths.getAttribute("rel"), 10), t = parseInt(r.paths.parentNode.parentNode.parentNode.getAttribute("rel"), 10) - 1, h.intersect) {
          var p = z.findAncestor(r.paths, "apexcharts-series");
          p && (t = parseInt(p.getAttribute("data:realIndex"), 10));
        }
        if (h.tooltipLabels.drawSeriesTexts({ ttItems: r.ttItems, i: t, j: a, shared: !h.showOnIntersect && n.config.tooltip.shared, e: i }), i.type === "mouseup" && h.markerClick(i, t, a), n.globals.capturedSeriesIndex = t, n.globals.capturedDataPointIndex = a, s = d, o = c + n.globals.translateY - 1.4 * h.tooltipRect.ttHeight, h.w.config.tooltip.followCursor) {
          var m = h.getElGrid().getBoundingClientRect();
          o = h.e.clientY + n.globals.translateY - m.top;
        }
        u < 0 && (o = c), h.marker.enlargeCurrentPoint(a, r.paths, s, o);
      }
      return { x: s, y: o };
    } }, { key: "handleBarTooltip", value: function(e) {
      var t, a, i = e.e, r = e.opt, s = this.w, o = this.ttCtx, n = o.getElTooltip(), h = 0, d = 0, c = 0, u = this.getBarTooltipXY({ e: i, opt: r });
      t = u.i;
      var p = u.j;
      s.globals.capturedSeriesIndex = t, s.globals.capturedDataPointIndex = p, s.globals.isBarHorizontal && o.tooltipUtil.hasBars() || !s.config.tooltip.shared ? (d = u.x, c = u.y, a = Array.isArray(s.config.stroke.width) ? s.config.stroke.width[t] : s.config.stroke.width, h = d) : s.globals.comboCharts || s.config.tooltip.shared || (h /= 2), isNaN(c) && (c = s.globals.svgHeight - o.tooltipRect.ttHeight);
      var m = parseInt(r.paths.parentNode.getAttribute("data:realIndex"), 10);
      if (s.globals.isMultipleYAxis ? s.config.yaxis[m] && s.config.yaxis[m].reversed : s.config.yaxis[0].reversed, d + o.tooltipRect.ttWidth > s.globals.gridWidth ? d -= o.tooltipRect.ttWidth : d < 0 && (d = 0), o.w.config.tooltip.followCursor) {
        var f = o.getElGrid().getBoundingClientRect();
        c = o.e.clientY - f.top;
      }
      o.tooltip === null && (o.tooltip = s.globals.dom.baseEl.querySelector(".apexcharts-tooltip")), s.config.tooltip.shared || (s.globals.comboBarCount > 0 ? o.tooltipPosition.moveXCrosshairs(h + a / 2) : o.tooltipPosition.moveXCrosshairs(h)), !o.fixedTooltip && (!s.config.tooltip.shared || s.globals.isBarHorizontal && o.tooltipUtil.hasBars()) && (c = c + s.globals.translateY - o.tooltipRect.ttHeight / 2, n.style.left = d + s.globals.translateX + "px", n.style.top = c + "px");
    } }, { key: "getBarTooltipXY", value: function(e) {
      var t = this, a = e.e, i = e.opt, r = this.w, s = null, o = this.ttCtx, n = 0, h = 0, d = 0, c = 0, u = 0, p = a.target.classList;
      if (p.contains("apexcharts-bar-area") || p.contains("apexcharts-candlestick-area") || p.contains("apexcharts-boxPlot-area") || p.contains("apexcharts-rangebar-area")) {
        var m = a.target, f = m.getBoundingClientRect(), b = i.elGrid.getBoundingClientRect(), v = f.height;
        u = f.height;
        var w = f.width, l = parseInt(m.getAttribute("cx"), 10), g = parseInt(m.getAttribute("cy"), 10);
        c = parseFloat(m.getAttribute("barWidth"));
        var x = a.type === "touchmove" ? a.touches[0].clientX : a.clientX;
        s = parseInt(m.getAttribute("j"), 10), n = parseInt(m.parentNode.getAttribute("rel"), 10) - 1;
        var k = m.getAttribute("data-range-y1"), S = m.getAttribute("data-range-y2");
        r.globals.comboCharts && (n = parseInt(m.parentNode.getAttribute("data:realIndex"), 10));
        var A = function(I) {
          return r.globals.isXNumeric ? l - w / 2 : t.isVerticalGroupedRangeBar ? l + w / 2 : l - o.dataPointsDividedWidth + w / 2;
        }, L = function() {
          return g - o.dataPointsDividedHeight + v / 2 - o.tooltipRect.ttHeight / 2;
        };
        o.tooltipLabels.drawSeriesTexts({ ttItems: i.ttItems, i: n, j: s, y1: k ? parseInt(k, 10) : null, y2: S ? parseInt(S, 10) : null, shared: !o.showOnIntersect && r.config.tooltip.shared, e: a }), r.config.tooltip.followCursor ? r.globals.isBarHorizontal ? (h = x - b.left + 15, d = L()) : (h = A(), d = a.clientY - b.top - o.tooltipRect.ttHeight / 2 - 15) : r.globals.isBarHorizontal ? ((h = l) < o.xyRatios.baseLineInvertedY && (h = l - o.tooltipRect.ttWidth), d = L()) : (h = A(), d = g);
      }
      return { x: h, y: d, barHeight: u, barWidth: c, i: n, j: s };
    } }]), y;
  }(), gi = function() {
    function y(e) {
      T(this, y), this.w = e.w, this.ttCtx = e;
    }
    return E(y, [{ key: "drawXaxisTooltip", value: function() {
      var e = this.w, t = this.ttCtx, a = e.config.xaxis.position === "bottom";
      t.xaxisOffY = a ? e.globals.gridHeight + 1 : -e.globals.xAxisHeight - e.config.xaxis.axisTicks.height + 3;
      var i = a ? "apexcharts-xaxistooltip apexcharts-xaxistooltip-bottom" : "apexcharts-xaxistooltip apexcharts-xaxistooltip-top", r = e.globals.dom.elWrap;
      t.isXAxisTooltipEnabled && e.globals.dom.baseEl.querySelector(".apexcharts-xaxistooltip") === null && (t.xaxisTooltip = document.createElement("div"), t.xaxisTooltip.setAttribute("class", i + " apexcharts-theme-" + e.config.tooltip.theme), r.appendChild(t.xaxisTooltip), t.xaxisTooltipText = document.createElement("div"), t.xaxisTooltipText.classList.add("apexcharts-xaxistooltip-text"), t.xaxisTooltipText.style.fontFamily = e.config.xaxis.tooltip.style.fontFamily || e.config.chart.fontFamily, t.xaxisTooltipText.style.fontSize = e.config.xaxis.tooltip.style.fontSize, t.xaxisTooltip.appendChild(t.xaxisTooltipText));
    } }, { key: "drawYaxisTooltip", value: function() {
      for (var e = this.w, t = this.ttCtx, a = 0; a < e.config.yaxis.length; a++) {
        var i = e.config.yaxis[a].opposite || e.config.yaxis[a].crosshairs.opposite;
        t.yaxisOffX = i ? e.globals.gridWidth + 1 : 1;
        var r = "apexcharts-yaxistooltip apexcharts-yaxistooltip-".concat(a, i ? " apexcharts-yaxistooltip-right" : " apexcharts-yaxistooltip-left"), s = e.globals.dom.elWrap;
        e.globals.dom.baseEl.querySelector(".apexcharts-yaxistooltip apexcharts-yaxistooltip-".concat(a)) === null && (t.yaxisTooltip = document.createElement("div"), t.yaxisTooltip.setAttribute("class", r + " apexcharts-theme-" + e.config.tooltip.theme), s.appendChild(t.yaxisTooltip), a === 0 && (t.yaxisTooltipText = []), t.yaxisTooltipText[a] = document.createElement("div"), t.yaxisTooltipText[a].classList.add("apexcharts-yaxistooltip-text"), t.yaxisTooltip.appendChild(t.yaxisTooltipText[a]));
      }
    } }, { key: "setXCrosshairWidth", value: function() {
      var e = this.w, t = this.ttCtx, a = t.getElXCrosshairs();
      if (t.xcrosshairsWidth = parseInt(e.config.xaxis.crosshairs.width, 10), e.globals.comboCharts) {
        var i = e.globals.dom.baseEl.querySelector(".apexcharts-bar-area");
        if (i !== null && e.config.xaxis.crosshairs.width === "barWidth") {
          var r = parseFloat(i.getAttribute("barWidth"));
          t.xcrosshairsWidth = r;
        } else if (e.config.xaxis.crosshairs.width === "tickWidth") {
          var s = e.globals.labels.length;
          t.xcrosshairsWidth = e.globals.gridWidth / s;
        }
      } else if (e.config.xaxis.crosshairs.width === "tickWidth") {
        var o = e.globals.labels.length;
        t.xcrosshairsWidth = e.globals.gridWidth / o;
      } else if (e.config.xaxis.crosshairs.width === "barWidth") {
        var n = e.globals.dom.baseEl.querySelector(".apexcharts-bar-area");
        if (n !== null) {
          var h = parseFloat(n.getAttribute("barWidth"));
          t.xcrosshairsWidth = h;
        } else t.xcrosshairsWidth = 1;
      }
      e.globals.isBarHorizontal && (t.xcrosshairsWidth = 0), a !== null && t.xcrosshairsWidth > 0 && a.setAttribute("width", t.xcrosshairsWidth);
    } }, { key: "handleYCrosshair", value: function() {
      var e = this.w, t = this.ttCtx;
      t.ycrosshairs = e.globals.dom.baseEl.querySelector(".apexcharts-ycrosshairs"), t.ycrosshairsHidden = e.globals.dom.baseEl.querySelector(".apexcharts-ycrosshairs-hidden");
    } }, { key: "drawYaxisTooltipText", value: function(e, t, a) {
      var i = this.ttCtx, r = this.w, s = r.globals, o = s.seriesYAxisMap[e];
      if (i.yaxisTooltips[e] && o.length > 0) {
        var n = s.yLabelFormatters[e], h = i.getElGrid().getBoundingClientRect(), d = o[0], c = 0;
        a.yRatio.length > 1 && (c = d);
        var u = (t - h.top) * a.yRatio[c], p = s.maxYArr[d] - s.minYArr[d], m = s.minYArr[d] + (p - u);
        r.config.yaxis[e].reversed && (m = s.maxYArr[d] - (p - u)), i.tooltipPosition.moveYCrosshairs(t - h.top), i.yaxisTooltipText[e].innerHTML = n(m), i.tooltipPosition.moveYAxisTooltip(e);
      }
    } }]), y;
  }(), wa = function() {
    function y(e) {
      T(this, y), this.ctx = e, this.w = e.w;
      var t = this.w;
      this.tConfig = t.config.tooltip, this.tooltipUtil = new va(this), this.tooltipLabels = new ci(this), this.tooltipPosition = new ya(this), this.marker = new di(this), this.intersect = new ui(this), this.axesTooltip = new gi(this), this.showOnIntersect = this.tConfig.intersect, this.showTooltipTitle = this.tConfig.x.show, this.fixedTooltip = this.tConfig.fixed.enabled, this.xaxisTooltip = null, this.yaxisTTEls = null, this.isBarShared = !t.globals.isBarHorizontal && this.tConfig.shared, this.lastHoverTime = Date.now();
    }
    return E(y, [{ key: "getElTooltip", value: function(e) {
      return e || (e = this), e.w.globals.dom.baseEl ? e.w.globals.dom.baseEl.querySelector(".apexcharts-tooltip") : null;
    } }, { key: "getElXCrosshairs", value: function() {
      return this.w.globals.dom.baseEl.querySelector(".apexcharts-xcrosshairs");
    } }, { key: "getElGrid", value: function() {
      return this.w.globals.dom.baseEl.querySelector(".apexcharts-grid");
    } }, { key: "drawTooltip", value: function(e) {
      var t = this.w;
      this.xyRatios = e, this.isXAxisTooltipEnabled = t.config.xaxis.tooltip.enabled && t.globals.axisCharts, this.yaxisTooltips = t.config.yaxis.map(function(s, o) {
        return !!(s.show && s.tooltip.enabled && t.globals.axisCharts);
      }), this.allTooltipSeriesGroups = [], t.globals.axisCharts || (this.showTooltipTitle = !1);
      var a = document.createElement("div");
      if (a.classList.add("apexcharts-tooltip"), t.config.tooltip.cssClass && a.classList.add(t.config.tooltip.cssClass), a.classList.add("apexcharts-theme-".concat(this.tConfig.theme)), t.globals.dom.elWrap.appendChild(a), t.globals.axisCharts) {
        this.axesTooltip.drawXaxisTooltip(), this.axesTooltip.drawYaxisTooltip(), this.axesTooltip.setXCrosshairWidth(), this.axesTooltip.handleYCrosshair();
        var i = new vt(this.ctx);
        this.xAxisTicksPositions = i.getXAxisTicksPositions();
      }
      if (!t.globals.comboCharts && !this.tConfig.intersect && t.config.chart.type !== "rangeBar" || this.tConfig.shared || (this.showOnIntersect = !0), t.config.markers.size !== 0 && t.globals.markers.largestSize !== 0 || this.marker.drawDynamicPoints(this), t.globals.collapsedSeries.length !== t.globals.series.length) {
        this.dataPointsDividedHeight = t.globals.gridHeight / t.globals.dataPoints, this.dataPointsDividedWidth = t.globals.gridWidth / t.globals.dataPoints, this.showTooltipTitle && (this.tooltipTitle = document.createElement("div"), this.tooltipTitle.classList.add("apexcharts-tooltip-title"), this.tooltipTitle.style.fontFamily = this.tConfig.style.fontFamily || t.config.chart.fontFamily, this.tooltipTitle.style.fontSize = this.tConfig.style.fontSize, a.appendChild(this.tooltipTitle));
        var r = t.globals.series.length;
        (t.globals.xyCharts || t.globals.comboCharts) && this.tConfig.shared && (r = this.showOnIntersect ? 1 : t.globals.series.length), this.legendLabels = t.globals.dom.baseEl.querySelectorAll(".apexcharts-legend-text"), this.ttItems = this.createTTElements(r), this.addSVGEvents();
      }
    } }, { key: "createTTElements", value: function(e) {
      for (var t = this, a = this.w, i = [], r = this.getElTooltip(), s = function(n) {
        var h = document.createElement("div");
        h.classList.add("apexcharts-tooltip-series-group", "apexcharts-tooltip-series-group-".concat(n)), h.style.order = a.config.tooltip.inverseOrder ? e - n : n + 1;
        var d = document.createElement("span");
        d.classList.add("apexcharts-tooltip-marker"), d.style.backgroundColor = a.globals.colors[n], h.appendChild(d);
        var c = document.createElement("div");
        c.classList.add("apexcharts-tooltip-text"), c.style.fontFamily = t.tConfig.style.fontFamily || a.config.chart.fontFamily, c.style.fontSize = t.tConfig.style.fontSize, ["y", "goals", "z"].forEach(function(u) {
          var p = document.createElement("div");
          p.classList.add("apexcharts-tooltip-".concat(u, "-group"));
          var m = document.createElement("span");
          m.classList.add("apexcharts-tooltip-text-".concat(u, "-label")), p.appendChild(m);
          var f = document.createElement("span");
          f.classList.add("apexcharts-tooltip-text-".concat(u, "-value")), p.appendChild(f), c.appendChild(p);
        }), h.appendChild(c), r.appendChild(h), i.push(h);
      }, o = 0; o < e; o++) s(o);
      return i;
    } }, { key: "addSVGEvents", value: function() {
      var e = this.w, t = e.config.chart.type, a = this.getElTooltip(), i = !(t !== "bar" && t !== "candlestick" && t !== "boxPlot" && t !== "rangeBar"), r = t === "area" || t === "line" || t === "scatter" || t === "bubble" || t === "radar", s = e.globals.dom.Paper.node, o = this.getElGrid();
      o && (this.seriesBound = o.getBoundingClientRect());
      var n, h = [], d = [], c = { hoverArea: s, elGrid: o, tooltipEl: a, tooltipY: h, tooltipX: d, ttItems: this.ttItems };
      if (e.globals.axisCharts && (r ? n = e.globals.dom.baseEl.querySelectorAll(".apexcharts-series[data\\:longestSeries='true'] .apexcharts-marker") : i ? n = e.globals.dom.baseEl.querySelectorAll(".apexcharts-series .apexcharts-bar-area, .apexcharts-series .apexcharts-candlestick-area, .apexcharts-series .apexcharts-boxPlot-area, .apexcharts-series .apexcharts-rangebar-area") : t !== "heatmap" && t !== "treemap" || (n = e.globals.dom.baseEl.querySelectorAll(".apexcharts-series .apexcharts-heatmap, .apexcharts-series .apexcharts-treemap")), n && n.length)) for (var u = 0; u < n.length; u++) h.push(n[u].getAttribute("cy")), d.push(n[u].getAttribute("cx"));
      if (e.globals.xyCharts && !this.showOnIntersect || e.globals.comboCharts && !this.showOnIntersect || i && this.tooltipUtil.hasBars() && this.tConfig.shared) this.addPathsEventListeners([s], c);
      else if (i && !e.globals.comboCharts || r && this.showOnIntersect) this.addDatapointEventsListeners(c);
      else if (!e.globals.axisCharts || t === "heatmap" || t === "treemap") {
        var p = e.globals.dom.baseEl.querySelectorAll(".apexcharts-series");
        this.addPathsEventListeners(p, c);
      }
      if (this.showOnIntersect) {
        var m = e.globals.dom.baseEl.querySelectorAll(".apexcharts-line-series .apexcharts-marker, .apexcharts-area-series .apexcharts-marker");
        m.length > 0 && this.addPathsEventListeners(m, c), this.tooltipUtil.hasBars() && !this.tConfig.shared && this.addDatapointEventsListeners(c);
      }
    } }, { key: "drawFixedTooltipRect", value: function() {
      var e = this.w, t = this.getElTooltip(), a = t.getBoundingClientRect(), i = a.width + 10, r = a.height + 10, s = this.tConfig.fixed.offsetX, o = this.tConfig.fixed.offsetY, n = this.tConfig.fixed.position.toLowerCase();
      return n.indexOf("right") > -1 && (s = s + e.globals.svgWidth - i + 10), n.indexOf("bottom") > -1 && (o = o + e.globals.svgHeight - r - 10), t.style.left = s + "px", t.style.top = o + "px", { x: s, y: o, ttWidth: i, ttHeight: r };
    } }, { key: "addDatapointEventsListeners", value: function(e) {
      var t = this.w.globals.dom.baseEl.querySelectorAll(".apexcharts-series-markers .apexcharts-marker, .apexcharts-bar-area, .apexcharts-candlestick-area, .apexcharts-boxPlot-area, .apexcharts-rangebar-area");
      this.addPathsEventListeners(t, e);
    } }, { key: "addPathsEventListeners", value: function(e, t) {
      for (var a = this, i = function(s) {
        var o = { paths: e[s], tooltipEl: t.tooltipEl, tooltipY: t.tooltipY, tooltipX: t.tooltipX, elGrid: t.elGrid, hoverArea: t.hoverArea, ttItems: t.ttItems };
        ["mousemove", "mouseup", "touchmove", "mouseout", "touchend"].map(function(n) {
          return e[s].addEventListener(n, a.onSeriesHover.bind(a, o), { capture: !1, passive: !0 });
        });
      }, r = 0; r < e.length; r++) i(r);
    } }, { key: "onSeriesHover", value: function(e, t) {
      var a = this, i = Date.now() - this.lastHoverTime;
      i >= 100 ? this.seriesHover(e, t) : (clearTimeout(this.seriesHoverTimeout), this.seriesHoverTimeout = setTimeout(function() {
        a.seriesHover(e, t);
      }, 100 - i));
    } }, { key: "seriesHover", value: function(e, t) {
      var a = this;
      this.lastHoverTime = Date.now();
      var i = [], r = this.w;
      r.config.chart.group && (i = this.ctx.getGroupedCharts()), r.globals.axisCharts && (r.globals.minX === -1 / 0 && r.globals.maxX === 1 / 0 || r.globals.dataPoints === 0) || (i.length ? i.forEach(function(s) {
        var o = a.getElTooltip(s), n = { paths: e.paths, tooltipEl: o, tooltipY: e.tooltipY, tooltipX: e.tooltipX, elGrid: e.elGrid, hoverArea: e.hoverArea, ttItems: s.w.globals.tooltip.ttItems };
        s.w.globals.minX === a.w.globals.minX && s.w.globals.maxX === a.w.globals.maxX && s.w.globals.tooltip.seriesHoverByContext({ chartCtx: s, ttCtx: s.w.globals.tooltip, opt: n, e: t });
      }) : this.seriesHoverByContext({ chartCtx: this.ctx, ttCtx: this.w.globals.tooltip, opt: e, e: t }));
    } }, { key: "seriesHoverByContext", value: function(e) {
      var t = e.chartCtx, a = e.ttCtx, i = e.opt, r = e.e, s = t.w, o = this.getElTooltip(t);
      o && (a.tooltipRect = { x: 0, y: 0, ttWidth: o.getBoundingClientRect().width, ttHeight: o.getBoundingClientRect().height }, a.e = r, a.tooltipUtil.hasBars() && !s.globals.comboCharts && !a.isBarShared && this.tConfig.onDatasetHover.highlightDataSeries && new qe(t).toggleSeriesOnHover(r, r.target.parentNode), a.fixedTooltip && a.drawFixedTooltipRect(), s.globals.axisCharts ? a.axisChartsTooltips({ e: r, opt: i, tooltipRect: a.tooltipRect }) : a.nonAxisChartsTooltips({ e: r, opt: i, tooltipRect: a.tooltipRect }));
    } }, { key: "axisChartsTooltips", value: function(e) {
      var t, a, i = e.e, r = e.opt, s = this.w, o = r.elGrid.getBoundingClientRect(), n = i.type === "touchmove" ? i.touches[0].clientX : i.clientX, h = i.type === "touchmove" ? i.touches[0].clientY : i.clientY;
      if (this.clientY = h, this.clientX = n, s.globals.capturedSeriesIndex = -1, s.globals.capturedDataPointIndex = -1, h < o.top || h > o.top + o.height) this.handleMouseOut(r);
      else {
        if (Array.isArray(this.tConfig.enabledOnSeries) && !s.config.tooltip.shared) {
          var d = parseInt(r.paths.getAttribute("index"), 10);
          if (this.tConfig.enabledOnSeries.indexOf(d) < 0) return void this.handleMouseOut(r);
        }
        var c = this.getElTooltip(), u = this.getElXCrosshairs(), p = [];
        s.config.chart.group && (p = this.ctx.getSyncedCharts());
        var m = s.globals.xyCharts || s.config.chart.type === "bar" && !s.globals.isBarHorizontal && this.tooltipUtil.hasBars() && this.tConfig.shared || s.globals.comboCharts && this.tooltipUtil.hasBars();
        if (i.type === "mousemove" || i.type === "touchmove" || i.type === "mouseup") {
          if (s.globals.collapsedSeries.length + s.globals.ancillaryCollapsedSeries.length === s.globals.series.length) return;
          u !== null && u.classList.add("apexcharts-active");
          var f = this.yaxisTooltips.filter(function(w) {
            return w === !0;
          });
          if (this.ycrosshairs !== null && f.length && this.ycrosshairs.classList.add("apexcharts-active"), m && !this.showOnIntersect || p.length > 1) this.handleStickyTooltip(i, n, h, r);
          else if (s.config.chart.type === "heatmap" || s.config.chart.type === "treemap") {
            var b = this.intersect.handleHeatTreeTooltip({ e: i, opt: r, x: t, y: a, type: s.config.chart.type });
            t = b.x, a = b.y, c.style.left = t + "px", c.style.top = a + "px";
          } else this.tooltipUtil.hasBars() && this.intersect.handleBarTooltip({ e: i, opt: r }), this.tooltipUtil.hasMarkers() && this.intersect.handleMarkerTooltip({ e: i, opt: r, x: t, y: a });
          if (this.yaxisTooltips.length) for (var v = 0; v < s.config.yaxis.length; v++) this.axesTooltip.drawYaxisTooltipText(v, h, this.xyRatios);
          s.globals.dom.baseEl.classList.add("apexcharts-tooltip-active"), r.tooltipEl.classList.add("apexcharts-active");
        } else i.type !== "mouseout" && i.type !== "touchend" || this.handleMouseOut(r);
      }
    } }, { key: "nonAxisChartsTooltips", value: function(e) {
      var t = e.e, a = e.opt, i = e.tooltipRect, r = this.w, s = a.paths.getAttribute("rel"), o = this.getElTooltip(), n = r.globals.dom.elWrap.getBoundingClientRect();
      if (t.type === "mousemove" || t.type === "touchmove") {
        r.globals.dom.baseEl.classList.add("apexcharts-tooltip-active"), o.classList.add("apexcharts-active"), this.tooltipLabels.drawSeriesTexts({ ttItems: a.ttItems, i: parseInt(s, 10) - 1, shared: !1 });
        var h = r.globals.clientX - n.left - i.ttWidth / 2, d = r.globals.clientY - n.top - i.ttHeight - 10;
        if (o.style.left = h + "px", o.style.top = d + "px", r.config.legend.tooltipHoverFormatter) {
          var c = s - 1, u = (0, r.config.legend.tooltipHoverFormatter)(this.legendLabels[c].getAttribute("data:default-text"), { seriesIndex: c, dataPointIndex: c, w: r });
          this.legendLabels[c].innerHTML = u;
        }
      } else t.type !== "mouseout" && t.type !== "touchend" || (o.classList.remove("apexcharts-active"), r.globals.dom.baseEl.classList.remove("apexcharts-tooltip-active"), r.config.legend.tooltipHoverFormatter && this.legendLabels.forEach(function(p) {
        var m = p.getAttribute("data:default-text");
        p.innerHTML = decodeURIComponent(m);
      }));
    } }, { key: "handleStickyTooltip", value: function(e, t, a, i) {
      var r = this.w, s = this.tooltipUtil.getNearestValues({ context: this, hoverArea: i.hoverArea, elGrid: i.elGrid, clientX: t, clientY: a }), o = s.j, n = s.capturedSeries;
      r.globals.collapsedSeriesIndices.includes(n) && (n = null);
      var h = i.elGrid.getBoundingClientRect();
      if (s.hoverX < 0 || s.hoverX > h.width) this.handleMouseOut(i);
      else if (n !== null) this.handleStickyCapturedSeries(e, n, i, o);
      else if (this.tooltipUtil.isXoverlap(o) || r.globals.isBarHorizontal) {
        var d = r.globals.series.findIndex(function(c, u) {
          return !r.globals.collapsedSeriesIndices.includes(u);
        });
        this.create(e, this, d, o, i.ttItems);
      }
    } }, { key: "handleStickyCapturedSeries", value: function(e, t, a, i) {
      var r = this.w;
      if (!this.tConfig.shared && r.globals.series[t][i] === null) return void this.handleMouseOut(a);
      if (r.globals.series[t][i] !== void 0) this.tConfig.shared && this.tooltipUtil.isXoverlap(i) && this.tooltipUtil.isInitialSeriesSameLen() ? this.create(e, this, t, i, a.ttItems) : this.create(e, this, t, i, a.ttItems, !1);
      else if (this.tooltipUtil.isXoverlap(i)) {
        var s = r.globals.series.findIndex(function(o, n) {
          return !r.globals.collapsedSeriesIndices.includes(n);
        });
        this.create(e, this, s, i, a.ttItems);
      }
    } }, { key: "deactivateHoverFilter", value: function() {
      for (var e = this.w, t = new X(this.ctx), a = e.globals.dom.Paper.select(".apexcharts-bar-area"), i = 0; i < a.length; i++) t.pathMouseLeave(a[i]);
    } }, { key: "handleMouseOut", value: function(e) {
      var t = this.w, a = this.getElXCrosshairs();
      if (t.globals.dom.baseEl.classList.remove("apexcharts-tooltip-active"), e.tooltipEl.classList.remove("apexcharts-active"), this.deactivateHoverFilter(), t.config.chart.type !== "bubble" && this.marker.resetPointsSize(), a !== null && a.classList.remove("apexcharts-active"), this.ycrosshairs !== null && this.ycrosshairs.classList.remove("apexcharts-active"), this.isXAxisTooltipEnabled && this.xaxisTooltip.classList.remove("apexcharts-active"), this.yaxisTooltips.length) {
        this.yaxisTTEls === null && (this.yaxisTTEls = t.globals.dom.baseEl.querySelectorAll(".apexcharts-yaxistooltip"));
        for (var i = 0; i < this.yaxisTTEls.length; i++) this.yaxisTTEls[i].classList.remove("apexcharts-active");
      }
      t.config.legend.tooltipHoverFormatter && this.legendLabels.forEach(function(r) {
        var s = r.getAttribute("data:default-text");
        r.innerHTML = decodeURIComponent(s);
      });
    } }, { key: "markerClick", value: function(e, t, a) {
      var i = this.w;
      typeof i.config.chart.events.markerClick == "function" && i.config.chart.events.markerClick(e, this.ctx, { seriesIndex: t, dataPointIndex: a, w: i }), this.ctx.events.fireEvent("markerClick", [e, this.ctx, { seriesIndex: t, dataPointIndex: a, w: i }]);
    } }, { key: "create", value: function(e, t, a, i, r) {
      var s, o, n, h, d, c, u, p, m, f, b, v, w, l, g, x, k = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : null, S = this.w, A = t;
      e.type === "mouseup" && this.markerClick(e, a, i), k === null && (k = this.tConfig.shared);
      var L = this.tooltipUtil.hasMarkers(a), I = this.tooltipUtil.getElBars();
      if (S.config.legend.tooltipHoverFormatter) {
        var F = S.config.legend.tooltipHoverFormatter, B = Array.from(this.legendLabels);
        B.forEach(function(ze) {
          var Ve = ze.getAttribute("data:default-text");
          ze.innerHTML = decodeURIComponent(Ve);
        });
        for (var G = 0; G < B.length; G++) {
          var W = B[G], q = parseInt(W.getAttribute("i"), 10), ee = decodeURIComponent(W.getAttribute("data:default-text")), ae = F(ee, { seriesIndex: k ? q : a, dataPointIndex: i, w: S });
          if (k) W.innerHTML = S.globals.collapsedSeriesIndices.indexOf(q) < 0 ? ae : ee;
          else if (W.innerHTML = q === a ? ae : ee, a === q) break;
        }
      }
      var ne = H(H({ ttItems: r, i: a, j: i }, ((s = S.globals.seriesRange) === null || s === void 0 || (o = s[a]) === null || o === void 0 || (n = o[i]) === null || n === void 0 || (h = n.y[0]) === null || h === void 0 ? void 0 : h.y1) !== void 0 && { y1: (d = S.globals.seriesRange) === null || d === void 0 || (c = d[a]) === null || c === void 0 || (u = c[i]) === null || u === void 0 || (p = u.y[0]) === null || p === void 0 ? void 0 : p.y1 }), ((m = S.globals.seriesRange) === null || m === void 0 || (f = m[a]) === null || f === void 0 || (b = f[i]) === null || b === void 0 || (v = b.y[0]) === null || v === void 0 ? void 0 : v.y2) !== void 0 && { y2: (w = S.globals.seriesRange) === null || w === void 0 || (l = w[a]) === null || l === void 0 || (g = l[i]) === null || g === void 0 || (x = g.y[0]) === null || x === void 0 ? void 0 : x.y2 });
      if (k) {
        if (A.tooltipLabels.drawSeriesTexts(H(H({}, ne), {}, { shared: !this.showOnIntersect && this.tConfig.shared })), L) S.globals.markers.largestSize > 0 ? A.marker.enlargePoints(i) : A.tooltipPosition.moveDynamicPointsOnHover(i);
        else if (this.tooltipUtil.hasBars() && (this.barSeriesHeight = this.tooltipUtil.getBarsHeight(I), this.barSeriesHeight > 0)) {
          var ue = new X(this.ctx), le = S.globals.dom.Paper.select(".apexcharts-bar-area[j='".concat(i, "']"));
          this.deactivateHoverFilter(), this.tooltipPosition.moveStickyTooltipOverBars(i, a);
          for (var xe = 0; xe < le.length; xe++) ue.pathMouseEnter(le[xe]);
        }
      } else A.tooltipLabels.drawSeriesTexts(H({ shared: !1 }, ne)), this.tooltipUtil.hasBars() && A.tooltipPosition.moveStickyTooltipOverBars(i, a), L && A.tooltipPosition.moveMarkers(a, i);
    } }]), y;
  }(), pi = function() {
    function y(e) {
      T(this, y), this.w = e.w, this.barCtx = e, this.totalFormatter = this.w.config.plotOptions.bar.dataLabels.total.formatter, this.totalFormatter || (this.totalFormatter = this.w.config.dataLabels.formatter);
    }
    return E(y, [{ key: "handleBarDataLabels", value: function(e) {
      var t, a, i = e.x, r = e.y, s = e.y1, o = e.y2, n = e.i, h = e.j, d = e.realIndex, c = e.columnGroupIndex, u = e.series, p = e.barHeight, m = e.barWidth, f = e.barXPosition, b = e.barYPosition, v = e.visibleSeries, w = e.renderedPath, l = this.w, g = new X(this.barCtx.ctx), x = Array.isArray(this.barCtx.strokeWidth) ? this.barCtx.strokeWidth[d] : this.barCtx.strokeWidth;
      l.globals.isXNumeric && !l.globals.isBarHorizontal ? (t = i + parseFloat(m * (v + 1)), a = r + parseFloat(p * (v + 1)) - x) : (t = i + parseFloat(m * v), a = r + parseFloat(p * v));
      var k, S = null, A = i, L = r, I = {}, F = l.config.dataLabels, B = this.barCtx.barOptions.dataLabels, G = this.barCtx.barOptions.dataLabels.total;
      b !== void 0 && this.barCtx.isRangeBar && (a = b, L = b), f !== void 0 && this.barCtx.isVerticalGroupedRangeBar && (t = f, A = f);
      var W = F.offsetX, q = F.offsetY, ee = { width: 0, height: 0 };
      if (l.config.dataLabels.enabled) {
        var ae = l.globals.series[n][h];
        ee = g.getTextRects(l.config.dataLabels.formatter ? l.config.dataLabels.formatter(ae, H(H({}, l), {}, { seriesIndex: n, dataPointIndex: h, w: l })) : l.globals.yLabelFormatters[0](ae), parseFloat(F.style.fontSize));
      }
      var ne = { x: i, y: r, i: n, j: h, realIndex: d, columnGroupIndex: c, renderedPath: w, bcx: t, bcy: a, barHeight: p, barWidth: m, textRects: ee, strokeWidth: x, dataLabelsX: A, dataLabelsY: L, dataLabelsConfig: F, barDataLabelsConfig: B, barTotalDataLabelsConfig: G, offX: W, offY: q };
      return I = this.barCtx.isHorizontal ? this.calculateBarsDataLabelsPosition(ne) : this.calculateColumnsDataLabelsPosition(ne), w.attr({ cy: I.bcy, cx: I.bcx, j: h, val: l.globals.series[n][h], barHeight: p, barWidth: m }), k = this.drawCalculatedDataLabels({ x: I.dataLabelsX, y: I.dataLabelsY, val: this.barCtx.isRangeBar ? [s, o] : l.config.chart.stackType === "100%" ? u[d][h] : l.globals.series[d][h], i: d, j: h, barWidth: m, barHeight: p, textRects: ee, dataLabelsConfig: F }), l.config.chart.stacked && G.enabled && (S = this.drawTotalDataLabels({ x: I.totalDataLabelsX, y: I.totalDataLabelsY, barWidth: m, barHeight: p, realIndex: d, textAnchor: I.totalDataLabelsAnchor, val: this.getStackedTotalDataLabel({ realIndex: d, j: h }), dataLabelsConfig: F, barTotalDataLabelsConfig: G })), { dataLabels: k, totalDataLabels: S };
    } }, { key: "getStackedTotalDataLabel", value: function(e) {
      var t = e.realIndex, a = e.j, i = this.w, r = this.barCtx.stackedSeriesTotals[a];
      return this.totalFormatter && (r = this.totalFormatter(r, H(H({}, i), {}, { seriesIndex: t, dataPointIndex: a, w: i }))), r;
    } }, { key: "calculateColumnsDataLabelsPosition", value: function(e) {
      var t = this.w, a = e.i, i = e.j, r = e.realIndex;
      e.columnGroupIndex;
      var s, o, n = e.y, h = e.bcx, d = e.barWidth, c = e.barHeight, u = e.textRects, p = e.dataLabelsX, m = e.dataLabelsY, f = e.dataLabelsConfig, b = e.barDataLabelsConfig, v = e.barTotalDataLabelsConfig, w = e.strokeWidth, l = e.offX, g = e.offY, x = h;
      c = Math.abs(c);
      var k = t.config.plotOptions.bar.dataLabels.orientation === "vertical", S = this.barCtx.barHelpers.getZeroValueEncounters({ i: a, j: i }).zeroEncounters;
      h -= w / 2;
      var A = t.globals.gridWidth / t.globals.dataPoints;
      this.barCtx.isVerticalGroupedRangeBar ? p += d / 2 : (p = t.globals.isXNumeric ? h - d / 2 + l : h - A + d / 2 + l, S > 0 && t.config.plotOptions.bar.hideZeroBarsWhenGrouped && (p -= d * S)), k && (p = p + u.height / 2 - w / 2 - 2);
      var L = t.globals.series[a][i] < 0, I = n;
      switch (this.barCtx.isReversed && (I = n + (L ? c : -c)), b.position) {
        case "center":
          m = k ? L ? I - c / 2 + g : I + c / 2 - g : L ? I - c / 2 + u.height / 2 + g : I + c / 2 + u.height / 2 - g;
          break;
        case "bottom":
          m = k ? L ? I - c + g : I + c - g : L ? I - c + u.height + w + g : I + c - u.height / 2 + w - g;
          break;
        case "top":
          m = k ? L ? I + g : I - g : L ? I - u.height / 2 - g : I + u.height + g;
      }
      if (this.barCtx.lastActiveBarSerieIndex === r && v.enabled) {
        var F = new X(this.barCtx.ctx).getTextRects(this.getStackedTotalDataLabel({ realIndex: r, j: i }), f.fontSize);
        s = L ? I - F.height / 2 - g - v.offsetY + 18 : I + F.height + g + v.offsetY - 18;
        var B = A;
        o = x + (t.globals.isXNumeric ? -d * t.globals.barGroups.length / 2 : t.globals.barGroups.length * d / 2 - (t.globals.barGroups.length - 1) * d - B) + v.offsetX;
      }
      return t.config.chart.stacked || (m < 0 ? m = 0 + w : m + u.height / 3 > t.globals.gridHeight && (m = t.globals.gridHeight - w)), { bcx: h, bcy: n, dataLabelsX: p, dataLabelsY: m, totalDataLabelsX: o, totalDataLabelsY: s, totalDataLabelsAnchor: "middle" };
    } }, { key: "calculateBarsDataLabelsPosition", value: function(e) {
      var t = this.w, a = e.x, i = e.i, r = e.j, s = e.realIndex, o = e.bcy, n = e.barHeight, h = e.barWidth, d = e.textRects, c = e.dataLabelsX, u = e.strokeWidth, p = e.dataLabelsConfig, m = e.barDataLabelsConfig, f = e.barTotalDataLabelsConfig, b = e.offX, v = e.offY, w = t.globals.gridHeight / t.globals.dataPoints;
      h = Math.abs(h);
      var l, g, x = o - (this.barCtx.isRangeBar ? 0 : w) + n / 2 + d.height / 2 + v - 3, k = "start", S = t.globals.series[i][r] < 0, A = a;
      switch (this.barCtx.isReversed && (A = a + (S ? -h : h), k = S ? "start" : "end"), m.position) {
        case "center":
          c = S ? A + h / 2 - b : Math.max(d.width / 2, A - h / 2) + b;
          break;
        case "bottom":
          c = S ? A + h - u - b : A - h + u + b;
          break;
        case "top":
          c = S ? A - u - b : A - u + b;
      }
      if (this.barCtx.lastActiveBarSerieIndex === s && f.enabled) {
        var L = new X(this.barCtx.ctx).getTextRects(this.getStackedTotalDataLabel({ realIndex: s, j: r }), p.fontSize);
        S ? (l = A - u - b - f.offsetX, k = "end") : l = A + b + f.offsetX + (this.barCtx.isReversed ? -(h + u) : u), g = x - d.height / 2 + L.height / 2 + f.offsetY + u;
      }
      return t.config.chart.stacked || (p.textAnchor === "start" ? c - d.width < 0 ? c = S ? d.width + u : u : c + d.width > t.globals.gridWidth && (c = S ? t.globals.gridWidth - u : t.globals.gridWidth - d.width - u) : p.textAnchor === "middle" ? c - d.width / 2 < 0 ? c = d.width / 2 + u : c + d.width / 2 > t.globals.gridWidth && (c = t.globals.gridWidth - d.width / 2 - u) : p.textAnchor === "end" && (c < 1 ? c = d.width + u : c + 1 > t.globals.gridWidth && (c = t.globals.gridWidth - d.width - u))), { bcx: a, bcy: o, dataLabelsX: c, dataLabelsY: x, totalDataLabelsX: l, totalDataLabelsY: g, totalDataLabelsAnchor: k };
    } }, { key: "drawCalculatedDataLabels", value: function(e) {
      var t = e.x, a = e.y, i = e.val, r = e.i, s = e.j, o = e.textRects, n = e.barHeight, h = e.barWidth, d = e.dataLabelsConfig, c = this.w, u = "rotate(0)";
      c.config.plotOptions.bar.dataLabels.orientation === "vertical" && (u = "rotate(-90, ".concat(t, ", ").concat(a, ")"));
      var p = new gt(this.barCtx.ctx), m = new X(this.barCtx.ctx), f = d.formatter, b = null, v = c.globals.collapsedSeriesIndices.indexOf(r) > -1;
      if (d.enabled && !v) {
        b = m.group({ class: "apexcharts-data-labels", transform: u });
        var w = "";
        i !== void 0 && (w = f(i, H(H({}, c), {}, { seriesIndex: r, dataPointIndex: s, w: c }))), !i && c.config.plotOptions.bar.hideZeroBarsWhenGrouped && (w = "");
        var l = c.globals.series[r][s] < 0, g = c.config.plotOptions.bar.dataLabels.position;
        c.config.plotOptions.bar.dataLabels.orientation === "vertical" && (g === "top" && (d.textAnchor = l ? "end" : "start"), g === "center" && (d.textAnchor = "middle"), g === "bottom" && (d.textAnchor = l ? "end" : "start")), this.barCtx.isRangeBar && this.barCtx.barOptions.dataLabels.hideOverflowingLabels && h < m.getTextRects(w, parseFloat(d.style.fontSize)).width && (w = ""), c.config.chart.stacked && this.barCtx.barOptions.dataLabels.hideOverflowingLabels && (this.barCtx.isHorizontal ? o.width / 1.6 > Math.abs(h) && (w = "") : o.height / 1.6 > Math.abs(n) && (w = ""));
        var x = H({}, d);
        this.barCtx.isHorizontal && i < 0 && (d.textAnchor === "start" ? x.textAnchor = "end" : d.textAnchor === "end" && (x.textAnchor = "start")), p.plotDataLabelsText({ x: t, y: a, text: w, i: r, j: s, parent: b, dataLabelsConfig: x, alwaysDrawDataLabel: !0, offsetCorrection: !0 });
      }
      return b;
    } }, { key: "drawTotalDataLabels", value: function(e) {
      var t = e.x, a = e.y, i = e.val, r = e.realIndex, s = e.textAnchor, o = e.barTotalDataLabelsConfig;
      this.w;
      var n, h = new X(this.barCtx.ctx);
      return o.enabled && t !== void 0 && a !== void 0 && this.barCtx.lastActiveBarSerieIndex === r && (n = h.drawText({ x: t, y: a, foreColor: o.style.color, text: i, textAnchor: s, fontFamily: o.style.fontFamily, fontSize: o.style.fontSize, fontWeight: o.style.fontWeight })), n;
    } }]), y;
  }(), fi = function() {
    function y(e) {
      T(this, y), this.w = e.w, this.barCtx = e;
    }
    return E(y, [{ key: "initVariables", value: function(e) {
      var t = this.w;
      this.barCtx.series = e, this.barCtx.totalItems = 0, this.barCtx.seriesLen = 0, this.barCtx.visibleI = -1, this.barCtx.visibleItems = 1;
      for (var a = 0; a < e.length; a++) if (e[a].length > 0 && (this.barCtx.seriesLen = this.barCtx.seriesLen + 1, this.barCtx.totalItems += e[a].length), t.globals.isXNumeric) for (var i = 0; i < e[a].length; i++) t.globals.seriesX[a][i] > t.globals.minX && t.globals.seriesX[a][i] < t.globals.maxX && this.barCtx.visibleItems++;
      else this.barCtx.visibleItems = t.globals.dataPoints;
      this.arrBorderRadius = this.createBorderRadiusArr(t.globals.series), this.barCtx.seriesLen === 0 && (this.barCtx.seriesLen = 1), this.barCtx.zeroSerieses = [], t.globals.comboCharts || this.checkZeroSeries({ series: e });
    } }, { key: "initialPositions", value: function() {
      var e, t, a, i, r, s, o, n, h = this.w, d = h.globals.dataPoints;
      this.barCtx.isRangeBar && (d = h.globals.labels.length);
      var c = this.barCtx.seriesLen;
      if (h.config.plotOptions.bar.rangeBarGroupRows && (c = 1), this.barCtx.isHorizontal) r = (a = h.globals.gridHeight / d) / c, h.globals.isXNumeric && (r = (a = h.globals.gridHeight / this.barCtx.totalItems) / this.barCtx.seriesLen), r = r * parseInt(this.barCtx.barOptions.barHeight, 10) / 100, String(this.barCtx.barOptions.barHeight).indexOf("%") === -1 && (r = parseInt(this.barCtx.barOptions.barHeight, 10)), n = this.barCtx.baseLineInvertedY + h.globals.padHorizontal + (this.barCtx.isReversed ? h.globals.gridWidth : 0) - (this.barCtx.isReversed ? 2 * this.barCtx.baseLineInvertedY : 0), this.barCtx.isFunnel && (n = h.globals.gridWidth / 2), t = (a - r * this.barCtx.seriesLen) / 2;
      else {
        if (i = h.globals.gridWidth / this.barCtx.visibleItems, h.config.xaxis.convertedCatToNumeric && (i = h.globals.gridWidth / h.globals.dataPoints), s = i / c * parseInt(this.barCtx.barOptions.columnWidth, 10) / 100, h.globals.isXNumeric) {
          var u = this.barCtx.xRatio;
          h.globals.minXDiff && h.globals.minXDiff !== 0.5 && h.globals.minXDiff / u > 0 && (i = h.globals.minXDiff / u), (s = i / c * parseInt(this.barCtx.barOptions.columnWidth, 10) / 100) < 1 && (s = 1);
        }
        String(this.barCtx.barOptions.columnWidth).indexOf("%") === -1 && (s = parseInt(this.barCtx.barOptions.columnWidth, 10)), o = h.globals.gridHeight - this.barCtx.baseLineY[this.barCtx.translationsIndex] - (this.barCtx.isReversed ? h.globals.gridHeight : 0) + (this.barCtx.isReversed ? 2 * this.barCtx.baseLineY[this.barCtx.translationsIndex] : 0), e = h.globals.padHorizontal + (i - s * this.barCtx.seriesLen) / 2;
      }
      return h.globals.barHeight = r, h.globals.barWidth = s, { x: e, y: t, yDivision: a, xDivision: i, barHeight: r, barWidth: s, zeroH: o, zeroW: n };
    } }, { key: "initializeStackedPrevVars", value: function(e) {
      e.w.globals.seriesGroups.forEach(function(t) {
        e[t] || (e[t] = {}), e[t].prevY = [], e[t].prevX = [], e[t].prevYF = [], e[t].prevXF = [], e[t].prevYVal = [], e[t].prevXVal = [];
      });
    } }, { key: "initializeStackedXYVars", value: function(e) {
      e.w.globals.seriesGroups.forEach(function(t) {
        e[t] || (e[t] = {}), e[t].xArrj = [], e[t].xArrjF = [], e[t].xArrjVal = [], e[t].yArrj = [], e[t].yArrjF = [], e[t].yArrjVal = [];
      });
    } }, { key: "getPathFillColor", value: function(e, t, a, i) {
      var r, s, o, n, h, d = this.w, c = this.barCtx.ctx.fill, u = null, p = this.barCtx.barOptions.distributed ? a : t;
      return this.barCtx.barOptions.colors.ranges.length > 0 && this.barCtx.barOptions.colors.ranges.map(function(m) {
        e[t][a] >= m.from && e[t][a] <= m.to && (u = m.color);
      }), (r = d.config.series[t].data[a]) !== null && r !== void 0 && r.fillColor && (u = d.config.series[t].data[a].fillColor), c.fillPath({ seriesNumber: this.barCtx.barOptions.distributed ? p : i, dataPointIndex: a, color: u, value: e[t][a], fillConfig: (s = d.config.series[t].data[a]) === null || s === void 0 ? void 0 : s.fill, fillType: (o = d.config.series[t].data[a]) !== null && o !== void 0 && (n = o.fill) !== null && n !== void 0 && n.type ? (h = d.config.series[t].data[a]) === null || h === void 0 ? void 0 : h.fill.type : Array.isArray(d.config.fill.type) ? d.config.fill.type[i] : d.config.fill.type });
    } }, { key: "getStrokeWidth", value: function(e, t, a) {
      var i = 0, r = this.w;
      return this.barCtx.series[e][t] ? this.barCtx.isNullValue = !1 : this.barCtx.isNullValue = !0, r.config.stroke.show && (this.barCtx.isNullValue || (i = Array.isArray(this.barCtx.strokeWidth) ? this.barCtx.strokeWidth[a] : this.barCtx.strokeWidth)), i;
    } }, { key: "createBorderRadiusArr", value: function(e) {
      var t = this.w, a = !this.w.config.chart.stacked || t.config.plotOptions.bar.borderRadiusWhenStacked !== "last" || t.config.plotOptions.bar.borderRadius <= 0, i = e.length, r = e[0].length, s = Array.from({ length: i }, function() {
        return Array(r).fill(a ? "top" : "none");
      });
      if (a) return s;
      for (var o = 0; o < r; o++) {
        for (var n = [], h = [], d = 0, c = 0; c < i; c++) {
          var u = e[c][o];
          u > 0 ? (n.push(c), d++) : u < 0 && (h.push(c), d++);
        }
        if (n.length > 0 && h.length === 0) if (n.length === 1) s[n[0]][o] = "both";
        else {
          var p, m = n[0], f = n[n.length - 1], b = Y(n);
          try {
            for (b.s(); !(p = b.n()).done; ) {
              var v = p.value;
              s[v][o] = v === m ? "bottom" : v === f ? "top" : "none";
            }
          } catch (q) {
            b.e(q);
          } finally {
            b.f();
          }
        }
        else if (h.length > 0 && n.length === 0) if (h.length === 1) s[h[0]][o] = "both";
        else {
          var w, l = h[0], g = h[h.length - 1], x = Y(h);
          try {
            for (x.s(); !(w = x.n()).done; ) {
              var k = w.value;
              s[k][o] = k === l ? "bottom" : k === g ? "top" : "none";
            }
          } catch (q) {
            x.e(q);
          } finally {
            x.f();
          }
        }
        else if (n.length > 0 && h.length > 0) {
          var S, A = n[n.length - 1], L = Y(n);
          try {
            for (L.s(); !(S = L.n()).done; ) {
              var I = S.value;
              s[I][o] = I === A ? "top" : "none";
            }
          } catch (q) {
            L.e(q);
          } finally {
            L.f();
          }
          var F, B = h[h.length - 1], G = Y(h);
          try {
            for (G.s(); !(F = G.n()).done; ) {
              var W = F.value;
              s[W][o] = W === B ? "bottom" : "none";
            }
          } catch (q) {
            G.e(q);
          } finally {
            G.f();
          }
        } else d === 1 && (s[n[0] || h[0]][o] = "both");
      }
      return s;
    } }, { key: "barBackground", value: function(e) {
      var t = e.j, a = e.i, i = e.x1, r = e.x2, s = e.y1, o = e.y2, n = e.elSeries, h = this.w, d = new X(this.barCtx.ctx), c = new qe(this.barCtx.ctx).getActiveConfigSeriesIndex();
      if (this.barCtx.barOptions.colors.backgroundBarColors.length > 0 && c === a) {
        t >= this.barCtx.barOptions.colors.backgroundBarColors.length && (t %= this.barCtx.barOptions.colors.backgroundBarColors.length);
        var u = this.barCtx.barOptions.colors.backgroundBarColors[t], p = d.drawRect(i !== void 0 ? i : 0, s !== void 0 ? s : 0, r !== void 0 ? r : h.globals.gridWidth, o !== void 0 ? o : h.globals.gridHeight, this.barCtx.barOptions.colors.backgroundBarRadius, u, this.barCtx.barOptions.colors.backgroundBarOpacity);
        n.add(p), p.node.classList.add("apexcharts-backgroundBar");
      }
    } }, { key: "getColumnPaths", value: function(e) {
      var t, a = e.barWidth, i = e.barXPosition, r = e.y1, s = e.y2, o = e.strokeWidth, n = e.isReversed, h = e.series, d = e.seriesGroup, c = e.realIndex, u = e.i, p = e.j, m = e.w, f = new X(this.barCtx.ctx);
      (o = Array.isArray(o) ? o[c] : o) || (o = 0);
      var b = a, v = i;
      (t = m.config.series[c].data[p]) !== null && t !== void 0 && t.columnWidthOffset && (v = i - m.config.series[c].data[p].columnWidthOffset / 2, b = a + m.config.series[c].data[p].columnWidthOffset);
      var w = o / 2, l = v + w, g = v + b - w, x = (h[u][p] >= 0 ? 1 : -1) * (n ? -1 : 1);
      r += 1e-3 - w * x, s += 1e-3 + w * x;
      var k = f.move(l, r), S = f.move(l, r), A = f.line(g, r);
      if (m.globals.previousPaths.length > 0 && (S = this.barCtx.getPreviousPath(c, p, !1)), k = k + f.line(l, s) + f.line(g, s) + A + (m.config.plotOptions.bar.borderRadiusApplication === "around" || this.arrBorderRadius[c][p] === "both" ? " Z" : " z"), S = S + f.line(l, r) + A + A + A + A + A + f.line(l, r) + (m.config.plotOptions.bar.borderRadiusApplication === "around" || this.arrBorderRadius[c][p] === "both" ? " Z" : " z"), this.arrBorderRadius[c][p] !== "none" && (k = f.roundPathCorners(k, m.config.plotOptions.bar.borderRadius)), m.config.chart.stacked) {
        var L = this.barCtx;
        (L = this.barCtx[d]).yArrj.push(s - w * x), L.yArrjF.push(Math.abs(r - s + o * x)), L.yArrjVal.push(this.barCtx.series[u][p]);
      }
      return { pathTo: k, pathFrom: S };
    } }, { key: "getBarpaths", value: function(e) {
      var t, a = e.barYPosition, i = e.barHeight, r = e.x1, s = e.x2, o = e.strokeWidth, n = e.isReversed, h = e.series, d = e.seriesGroup, c = e.realIndex, u = e.i, p = e.j, m = e.w, f = new X(this.barCtx.ctx);
      (o = Array.isArray(o) ? o[c] : o) || (o = 0);
      var b = a, v = i;
      (t = m.config.series[c].data[p]) !== null && t !== void 0 && t.barHeightOffset && (b = a - m.config.series[c].data[p].barHeightOffset / 2, v = i + m.config.series[c].data[p].barHeightOffset);
      var w = o / 2, l = b + w, g = b + v - w, x = (h[u][p] >= 0 ? 1 : -1) * (n ? -1 : 1);
      r += 1e-3 + w * x, s += 1e-3 - w * x;
      var k = f.move(r, l), S = f.move(r, l);
      m.globals.previousPaths.length > 0 && (S = this.barCtx.getPreviousPath(c, p, !1));
      var A = f.line(r, g);
      if (k = k + f.line(s, l) + f.line(s, g) + A + (m.config.plotOptions.bar.borderRadiusApplication === "around" || this.arrBorderRadius[c][p] === "both" ? " Z" : " z"), S = S + f.line(r, l) + A + A + A + A + A + f.line(r, l) + (m.config.plotOptions.bar.borderRadiusApplication === "around" || this.arrBorderRadius[c][p] === "both" ? " Z" : " z"), this.arrBorderRadius[c][p] !== "none" && (k = f.roundPathCorners(k, m.config.plotOptions.bar.borderRadius)), m.config.chart.stacked) {
        var L = this.barCtx;
        (L = this.barCtx[d]).xArrj.push(s + w * x), L.xArrjF.push(Math.abs(r - s - o * x)), L.xArrjVal.push(this.barCtx.series[u][p]);
      }
      return { pathTo: k, pathFrom: S };
    } }, { key: "checkZeroSeries", value: function(e) {
      for (var t = e.series, a = this.w, i = 0; i < t.length; i++) {
        for (var r = 0, s = 0; s < t[a.globals.maxValsInArrayIndex].length; s++) r += t[i][s];
        r === 0 && this.barCtx.zeroSerieses.push(i);
      }
    } }, { key: "getXForValue", value: function(e, t) {
      var a = !(arguments.length > 2 && arguments[2] !== void 0) || arguments[2] ? t : null;
      return e != null && (a = t + e / this.barCtx.invertedYRatio - 2 * (this.barCtx.isReversed ? e / this.barCtx.invertedYRatio : 0)), a;
    } }, { key: "getYForValue", value: function(e, t, a) {
      var i = !(arguments.length > 3 && arguments[3] !== void 0) || arguments[3] ? t : null;
      return e != null && (i = t - e / this.barCtx.yRatio[a] + 2 * (this.barCtx.isReversed ? e / this.barCtx.yRatio[a] : 0)), i;
    } }, { key: "getGoalValues", value: function(e, t, a, i, r, s) {
      var o = this, n = this.w, h = [], d = function(p, m) {
        var f;
        h.push((U(f = {}, e, e === "x" ? o.getXForValue(p, t, !1) : o.getYForValue(p, a, s, !1)), U(f, "attrs", m), f));
      };
      if (n.globals.seriesGoals[i] && n.globals.seriesGoals[i][r] && Array.isArray(n.globals.seriesGoals[i][r]) && n.globals.seriesGoals[i][r].forEach(function(p) {
        d(p.value, p);
      }), this.barCtx.barOptions.isDumbbell && n.globals.seriesRange.length) {
        var c = this.barCtx.barOptions.dumbbellColors ? this.barCtx.barOptions.dumbbellColors : n.globals.colors, u = { strokeHeight: e === "x" ? 0 : n.globals.markers.size[i], strokeWidth: e === "x" ? n.globals.markers.size[i] : 0, strokeDashArray: 0, strokeLineCap: "round", strokeColor: Array.isArray(c[i]) ? c[i][0] : c[i] };
        d(n.globals.seriesRangeStart[i][r], u), d(n.globals.seriesRangeEnd[i][r], H(H({}, u), {}, { strokeColor: Array.isArray(c[i]) ? c[i][1] : c[i] }));
      }
      return h;
    } }, { key: "drawGoalLine", value: function(e) {
      var t = e.barXPosition, a = e.barYPosition, i = e.goalX, r = e.goalY, s = e.barWidth, o = e.barHeight, n = new X(this.barCtx.ctx), h = n.group({ className: "apexcharts-bar-goals-groups" });
      h.node.classList.add("apexcharts-element-hidden"), this.barCtx.w.globals.delayedElements.push({ el: h.node }), h.attr("clip-path", "url(#gridRectMarkerMask".concat(this.barCtx.w.globals.cuid, ")"));
      var d = null;
      return this.barCtx.isHorizontal ? Array.isArray(i) && i.forEach(function(c) {
        if (c.x >= -1 && c.x <= n.w.globals.gridWidth + 1) {
          var u = c.attrs.strokeHeight !== void 0 ? c.attrs.strokeHeight : o / 2, p = a + u + o / 2;
          d = n.drawLine(c.x, p - 2 * u, c.x, p, c.attrs.strokeColor ? c.attrs.strokeColor : void 0, c.attrs.strokeDashArray, c.attrs.strokeWidth ? c.attrs.strokeWidth : 2, c.attrs.strokeLineCap), h.add(d);
        }
      }) : Array.isArray(r) && r.forEach(function(c) {
        if (c.y >= -1 && c.y <= n.w.globals.gridHeight + 1) {
          var u = c.attrs.strokeWidth !== void 0 ? c.attrs.strokeWidth : s / 2, p = t + u + s / 2;
          d = n.drawLine(p - 2 * u, c.y, p, c.y, c.attrs.strokeColor ? c.attrs.strokeColor : void 0, c.attrs.strokeDashArray, c.attrs.strokeHeight ? c.attrs.strokeHeight : 2, c.attrs.strokeLineCap), h.add(d);
        }
      }), h;
    } }, { key: "drawBarShadow", value: function(e) {
      var t = e.prevPaths, a = e.currPaths, i = e.color, r = this.w, s = t.x, o = t.x1, n = t.barYPosition, h = a.x, d = a.x1, c = a.barYPosition, u = n + a.barHeight, p = new X(this.barCtx.ctx), m = new z(), f = p.move(o, u) + p.line(s, u) + p.line(h, c) + p.line(d, c) + p.line(o, u) + (r.config.plotOptions.bar.borderRadiusApplication === "around" || this.arrBorderRadius[realIndex][j] === "both" ? " Z" : " z");
      return p.drawPath({ d: f, fill: m.shadeColor(0.5, z.rgb2hex(i)), stroke: "none", strokeWidth: 0, fillOpacity: 1, classes: "apexcharts-bar-shadows" });
    } }, { key: "getZeroValueEncounters", value: function(e) {
      var t, a = e.i, i = e.j, r = this.w, s = 0, o = 0;
      return (r.config.plotOptions.bar.horizontal ? r.globals.series.map(function(n, h) {
        return h;
      }) : ((t = r.globals.columnSeries) === null || t === void 0 ? void 0 : t.i.map(function(n) {
        return n;
      })) || []).forEach(function(n) {
        var h = r.globals.seriesPercent[n][i];
        h && s++, n < a && h === 0 && o++;
      }), { nonZeroColumns: s, zeroEncounters: o };
    } }, { key: "getGroupIndex", value: function(e) {
      var t = this.w, a = t.globals.seriesGroups.findIndex(function(s) {
        return s.indexOf(t.globals.seriesNames[e]) > -1;
      }), i = this.barCtx.columnGroupIndices, r = i.indexOf(a);
      return r < 0 && (i.push(a), r = i.length - 1), { groupIndex: a, columnGroupIndex: r };
    } }]), y;
  }(), pt = function() {
    function y(e, t) {
      T(this, y), this.ctx = e, this.w = e.w;
      var a = this.w;
      this.barOptions = a.config.plotOptions.bar, this.isHorizontal = this.barOptions.horizontal, this.strokeWidth = a.config.stroke.width, this.isNullValue = !1, this.isRangeBar = a.globals.seriesRange.length && this.isHorizontal, this.isVerticalGroupedRangeBar = !a.globals.isBarHorizontal && a.globals.seriesRange.length && a.config.plotOptions.bar.rangeBarGroupRows, this.isFunnel = this.barOptions.isFunnel, this.xyRatios = t, this.xyRatios !== null && (this.xRatio = t.xRatio, this.yRatio = t.yRatio, this.invertedXRatio = t.invertedXRatio, this.invertedYRatio = t.invertedYRatio, this.baseLineY = t.baseLineY, this.baseLineInvertedY = t.baseLineInvertedY), this.yaxisIndex = 0, this.translationsIndex = 0, this.seriesLen = 0, this.pathArr = [];
      var i = new qe(this.ctx);
      this.lastActiveBarSerieIndex = i.getActiveConfigSeriesIndex("desc", ["bar", "column"]), this.columnGroupIndices = [];
      var r = i.getBarSeriesIndices(), s = new Te(this.ctx);
      this.stackedSeriesTotals = s.getStackedSeriesTotals(this.w.config.series.map(function(o, n) {
        return r.indexOf(n) === -1 ? n : -1;
      }).filter(function(o) {
        return o !== -1;
      })), this.barHelpers = new fi(this);
    }
    return E(y, [{ key: "draw", value: function(e, t) {
      var a = this.w, i = new X(this.ctx), r = new Te(this.ctx, a);
      e = r.getLogSeries(e), this.series = e, this.yRatio = r.getLogYRatios(this.yRatio), this.barHelpers.initVariables(e);
      var s = i.group({ class: "apexcharts-bar-series apexcharts-plot-series" });
      a.config.dataLabels.enabled && this.totalItems > this.barOptions.dataLabels.maxItems && console.warn("WARNING: DataLabels are enabled but there are too many to display. This may cause performance issue when rendering - ApexCharts");
      for (var o = 0, n = 0; o < e.length; o++, n++) {
        var h, d, c, u, p = void 0, m = void 0, f = [], b = [], v = a.globals.comboCharts ? t[o] : o, w = this.barHelpers.getGroupIndex(v).columnGroupIndex, l = i.group({ class: "apexcharts-series", rel: o + 1, seriesName: z.escapeString(a.globals.seriesNames[v]), "data:realIndex": v });
        this.ctx.series.addCollapsedClassToSeries(l, v), e[o].length > 0 && (this.visibleI = this.visibleI + 1);
        var g = 0, x = 0;
        this.yRatio.length > 1 && (this.yaxisIndex = a.globals.seriesYAxisReverseMap[v], this.translationsIndex = v);
        var k = this.translationsIndex;
        this.isReversed = a.config.yaxis[this.yaxisIndex] && a.config.yaxis[this.yaxisIndex].reversed;
        var S = this.barHelpers.initialPositions();
        m = S.y, g = S.barHeight, d = S.yDivision, u = S.zeroW, p = S.x, x = S.barWidth, h = S.xDivision, c = S.zeroH, this.horizontal || b.push(p + x / 2);
        var A = i.group({ class: "apexcharts-datalabels", "data:realIndex": v });
        a.globals.delayedElements.push({ el: A.node }), A.node.classList.add("apexcharts-element-hidden");
        var L = i.group({ class: "apexcharts-bar-goals-markers" }), I = i.group({ class: "apexcharts-bar-shadows" });
        a.globals.delayedElements.push({ el: I.node }), I.node.classList.add("apexcharts-element-hidden");
        for (var F = 0; F < e[o].length; F++) {
          var B = this.barHelpers.getStrokeWidth(o, F, v), G = null, W = { indexes: { i: o, j: F, realIndex: v, translationsIndex: k, bc: n }, x: p, y: m, strokeWidth: B, elSeries: l };
          this.isHorizontal ? (G = this.drawBarPaths(H(H({}, W), {}, { barHeight: g, zeroW: u, yDivision: d })), x = this.series[o][F] / this.invertedYRatio) : (G = this.drawColumnPaths(H(H({}, W), {}, { xDivision: h, barWidth: x, zeroH: c })), g = this.series[o][F] / this.yRatio[k]);
          var q = this.barHelpers.getPathFillColor(e, o, F, v);
          if (this.isFunnel && this.barOptions.isFunnel3d && this.pathArr.length && F > 0) {
            var ee = this.barHelpers.drawBarShadow({ color: typeof q == "string" && (q == null ? void 0 : q.indexOf("url")) === -1 ? q : z.hexToRgba(a.globals.colors[o]), prevPaths: this.pathArr[this.pathArr.length - 1], currPaths: G });
            ee && I.add(ee);
          }
          this.pathArr.push(G);
          var ae = this.barHelpers.drawGoalLine({ barXPosition: G.barXPosition, barYPosition: G.barYPosition, goalX: G.goalX, goalY: G.goalY, barHeight: g, barWidth: x });
          ae && L.add(ae), m = G.y, p = G.x, F > 0 && b.push(p + x / 2), f.push(m), this.renderSeries({ realIndex: v, pathFill: q, j: F, i: o, columnGroupIndex: w, pathFrom: G.pathFrom, pathTo: G.pathTo, strokeWidth: B, elSeries: l, x: p, y: m, series: e, barHeight: Math.abs(G.barHeight ? G.barHeight : g), barWidth: Math.abs(G.barWidth ? G.barWidth : x), elDataLabelsWrap: A, elGoalsMarkers: L, elBarShadows: I, visibleSeries: this.visibleI, type: "bar" });
        }
        a.globals.seriesXvalues[v] = b, a.globals.seriesYvalues[v] = f, s.add(l);
      }
      return s;
    } }, { key: "renderSeries", value: function(e) {
      var t = e.realIndex, a = e.pathFill, i = e.lineFill, r = e.j, s = e.i, o = e.columnGroupIndex, n = e.pathFrom, h = e.pathTo, d = e.strokeWidth, c = e.elSeries, u = e.x, p = e.y, m = e.y1, f = e.y2, b = e.series, v = e.barHeight, w = e.barWidth, l = e.barXPosition, g = e.barYPosition, x = e.elDataLabelsWrap, k = e.elGoalsMarkers, S = e.elBarShadows, A = e.visibleSeries, L = e.type, I = e.classes, F = this.w, B = new X(this.ctx);
      if (!i) {
        var G = typeof F.globals.stroke.colors[t] == "function" ? function(ne) {
          var ue, le = F.config.stroke.colors;
          return Array.isArray(le) && le.length > 0 && ((ue = le[ne]) || (ue = ""), typeof ue == "function") ? ue({ value: F.globals.series[ne][r], dataPointIndex: r, w: F }) : ue;
        }(t) : F.globals.stroke.colors[t];
        i = this.barOptions.distributed ? F.globals.stroke.colors[r] : G;
      }
      F.config.series[s].data[r] && F.config.series[s].data[r].strokeColor && (i = F.config.series[s].data[r].strokeColor), this.isNullValue && (a = "none");
      var W = r / F.config.chart.animations.animateGradually.delay * (F.config.chart.animations.speed / F.globals.dataPoints) / 2.4, q = B.renderPaths({ i: s, j: r, realIndex: t, pathFrom: n, pathTo: h, stroke: i, strokeWidth: d, strokeLineCap: F.config.stroke.lineCap, fill: a, animationDelay: W, initialSpeed: F.config.chart.animations.speed, dataChangeSpeed: F.config.chart.animations.dynamicAnimation.speed, className: "apexcharts-".concat(L, "-area ").concat(I), chartType: L });
      q.attr("clip-path", "url(#gridRectBarMask".concat(F.globals.cuid, ")"));
      var ee = F.config.forecastDataPoints;
      ee.count > 0 && r >= F.globals.dataPoints - ee.count && (q.node.setAttribute("stroke-dasharray", ee.dashArray), q.node.setAttribute("stroke-width", ee.strokeWidth), q.node.setAttribute("fill-opacity", ee.fillOpacity)), m !== void 0 && f !== void 0 && (q.attr("data-range-y1", m), q.attr("data-range-y2", f)), new Pe(this.ctx).setSelectionFilter(q, t, r), c.add(q);
      var ae = new pi(this).handleBarDataLabels({ x: u, y: p, y1: m, y2: f, i: s, j: r, series: b, realIndex: t, columnGroupIndex: o, barHeight: v, barWidth: w, barXPosition: l, barYPosition: g, renderedPath: q, visibleSeries: A });
      return ae.dataLabels !== null && x.add(ae.dataLabels), ae.totalDataLabels && x.add(ae.totalDataLabels), c.add(x), k && c.add(k), S && c.add(S), c;
    } }, { key: "drawBarPaths", value: function(e) {
      var t, a = e.indexes, i = e.barHeight, r = e.strokeWidth, s = e.zeroW, o = e.x, n = e.y, h = e.yDivision, d = e.elSeries, c = this.w, u = a.i, p = a.j;
      if (c.globals.isXNumeric) t = (n = (c.globals.seriesX[u][p] - c.globals.minX) / this.invertedXRatio - i) + i * this.visibleI;
      else if (c.config.plotOptions.bar.hideZeroBarsWhenGrouped) {
        var m = 0, f = 0;
        c.globals.seriesPercent.forEach(function(v, w) {
          v[p] && m++, w < u && v[p] === 0 && f++;
        }), m > 0 && (i = this.seriesLen * i / m), t = n + i * this.visibleI, t -= i * f;
      } else t = n + i * this.visibleI;
      this.isFunnel && (s -= (this.barHelpers.getXForValue(this.series[u][p], s) - s) / 2), o = this.barHelpers.getXForValue(this.series[u][p], s);
      var b = this.barHelpers.getBarpaths({ barYPosition: t, barHeight: i, x1: s, x2: o, strokeWidth: r, isReversed: this.isReversed, series: this.series, realIndex: a.realIndex, i: u, j: p, w: c });
      return c.globals.isXNumeric || (n += h), this.barHelpers.barBackground({ j: p, i: u, y1: t - i * this.visibleI, y2: i * this.seriesLen, elSeries: d }), { pathTo: b.pathTo, pathFrom: b.pathFrom, x1: s, x: o, y: n, goalX: this.barHelpers.getGoalValues("x", s, null, u, p), barYPosition: t, barHeight: i };
    } }, { key: "drawColumnPaths", value: function(e) {
      var t, a = e.indexes, i = e.x, r = e.y, s = e.xDivision, o = e.barWidth, n = e.zeroH, h = e.strokeWidth, d = e.elSeries, c = this.w, u = a.realIndex, p = a.translationsIndex, m = a.i, f = a.j, b = a.bc;
      if (c.globals.isXNumeric) {
        var v = this.getBarXForNumericXAxis({ x: i, j: f, realIndex: u, barWidth: o });
        i = v.x, t = v.barXPosition;
      } else if (c.config.plotOptions.bar.hideZeroBarsWhenGrouped) {
        var w = this.barHelpers.getZeroValueEncounters({ i: m, j: f }), l = w.nonZeroColumns, g = w.zeroEncounters;
        l > 0 && (o = this.seriesLen * o / l), t = i + o * this.visibleI, t -= o * g;
      } else t = i + o * this.visibleI;
      r = this.barHelpers.getYForValue(this.series[m][f], n, p);
      var x = this.barHelpers.getColumnPaths({ barXPosition: t, barWidth: o, y1: n, y2: r, strokeWidth: h, isReversed: this.isReversed, series: this.series, realIndex: u, i: m, j: f, w: c });
      return c.globals.isXNumeric || (i += s), this.barHelpers.barBackground({ bc: b, j: f, i: m, x1: t - h / 2 - o * this.visibleI, x2: o * this.seriesLen + h / 2, elSeries: d }), { pathTo: x.pathTo, pathFrom: x.pathFrom, x: i, y: r, goalY: this.barHelpers.getGoalValues("y", null, n, m, f, p), barXPosition: t, barWidth: o };
    } }, { key: "getBarXForNumericXAxis", value: function(e) {
      var t = e.x, a = e.barWidth, i = e.realIndex, r = e.j, s = this.w, o = i;
      return s.globals.seriesX[i].length || (o = s.globals.maxValsInArrayIndex), s.globals.seriesX[o][r] && (t = (s.globals.seriesX[o][r] - s.globals.minX) / this.xRatio - a * this.seriesLen / 2), { barXPosition: t + a * this.visibleI, x: t };
    } }, { key: "getPreviousPath", value: function(e, t) {
      for (var a, i = this.w, r = 0; r < i.globals.previousPaths.length; r++) {
        var s = i.globals.previousPaths[r];
        s.paths && s.paths.length > 0 && parseInt(s.realIndex, 10) === parseInt(e, 10) && i.globals.previousPaths[r].paths[t] !== void 0 && (a = i.globals.previousPaths[r].paths[t].d);
      }
      return a;
    } }]), y;
  }(), Sa = function(y) {
    Z(t, pt);
    var e = _(t);
    function t() {
      return T(this, t), e.apply(this, arguments);
    }
    return E(t, [{ key: "draw", value: function(a, i) {
      var r = this, s = this.w;
      this.graphics = new X(this.ctx), this.bar = new pt(this.ctx, this.xyRatios);
      var o = new Te(this.ctx, s);
      a = o.getLogSeries(a), this.yRatio = o.getLogYRatios(this.yRatio), this.barHelpers.initVariables(a), s.config.chart.stackType === "100%" && (a = s.globals.comboCharts ? i.map(function(m) {
        return s.globals.seriesPercent[m];
      }) : s.globals.seriesPercent.slice()), this.series = a, this.barHelpers.initializeStackedPrevVars(this);
      for (var n = this.graphics.group({ class: "apexcharts-bar-series apexcharts-plot-series" }), h = 0, d = 0, c = function(m, f) {
        var b = void 0, v = void 0, w = void 0, l = void 0, g = s.globals.comboCharts ? i[m] : m, x = r.barHelpers.getGroupIndex(g), k = x.groupIndex, S = x.columnGroupIndex;
        r.groupCtx = r[s.globals.seriesGroups[k]];
        var A = [], L = [], I = 0;
        r.yRatio.length > 1 && (r.yaxisIndex = s.globals.seriesYAxisReverseMap[g][0], I = g), r.isReversed = s.config.yaxis[r.yaxisIndex] && s.config.yaxis[r.yaxisIndex].reversed;
        var F = r.graphics.group({ class: "apexcharts-series", seriesName: z.escapeString(s.globals.seriesNames[g]), rel: m + 1, "data:realIndex": g });
        r.ctx.series.addCollapsedClassToSeries(F, g);
        var B = r.graphics.group({ class: "apexcharts-datalabels", "data:realIndex": g }), G = r.graphics.group({ class: "apexcharts-bar-goals-markers" }), W = 0, q = 0, ee = r.initialPositions(h, d, b, v, w, l, I);
        d = ee.y, W = ee.barHeight, v = ee.yDivision, l = ee.zeroW, h = ee.x, q = ee.barWidth, b = ee.xDivision, w = ee.zeroH, s.globals.barHeight = W, s.globals.barWidth = q, r.barHelpers.initializeStackedXYVars(r), r.groupCtx.prevY.length === 1 && r.groupCtx.prevY[0].every(function(Me) {
          return isNaN(Me);
        }) && (r.groupCtx.prevY[0] = r.groupCtx.prevY[0].map(function() {
          return w;
        }), r.groupCtx.prevYF[0] = r.groupCtx.prevYF[0].map(function() {
          return 0;
        }));
        for (var ae = 0; ae < s.globals.dataPoints; ae++) {
          var ne = r.barHelpers.getStrokeWidth(m, ae, g), ue = { indexes: { i: m, j: ae, realIndex: g, translationsIndex: I, bc: f }, strokeWidth: ne, x: h, y: d, elSeries: F, columnGroupIndex: S, seriesGroup: s.globals.seriesGroups[k] }, le = null;
          r.isHorizontal ? (le = r.drawStackedBarPaths(H(H({}, ue), {}, { zeroW: l, barHeight: W, yDivision: v })), q = r.series[m][ae] / r.invertedYRatio) : (le = r.drawStackedColumnPaths(H(H({}, ue), {}, { xDivision: b, barWidth: q, zeroH: w })), W = r.series[m][ae] / r.yRatio[I]);
          var xe = r.barHelpers.drawGoalLine({ barXPosition: le.barXPosition, barYPosition: le.barYPosition, goalX: le.goalX, goalY: le.goalY, barHeight: W, barWidth: q });
          xe && G.add(xe), d = le.y, h = le.x, A.push(h), L.push(d);
          var ze = r.barHelpers.getPathFillColor(a, m, ae, g), Ve = "";
          s.globals.isBarHorizontal ? r.barHelpers.arrBorderRadius[g][ae] === "bottom" && s.globals.series[g][ae] > 0 && (Ve = "apexcharts-flip-x") : r.barHelpers.arrBorderRadius[g][ae] === "bottom" && s.globals.series[g][ae] > 0 && (Ve = "apexcharts-flip-y"), F = r.renderSeries({ realIndex: g, pathFill: ze, j: ae, i: m, columnGroupIndex: S, pathFrom: le.pathFrom, pathTo: le.pathTo, strokeWidth: ne, elSeries: F, x: h, y: d, series: a, barHeight: W, barWidth: q, elDataLabelsWrap: B, elGoalsMarkers: G, type: "bar", visibleSeries: S, classes: Ve });
        }
        s.globals.seriesXvalues[g] = A, s.globals.seriesYvalues[g] = L, r.groupCtx.prevY.push(r.groupCtx.yArrj), r.groupCtx.prevYF.push(r.groupCtx.yArrjF), r.groupCtx.prevYVal.push(r.groupCtx.yArrjVal), r.groupCtx.prevX.push(r.groupCtx.xArrj), r.groupCtx.prevXF.push(r.groupCtx.xArrjF), r.groupCtx.prevXVal.push(r.groupCtx.xArrjVal), n.add(F);
      }, u = 0, p = 0; u < a.length; u++, p++) c(u, p);
      return n;
    } }, { key: "initialPositions", value: function(a, i, r, s, o, n, h) {
      var d, c, u = this.w;
      if (this.isHorizontal) {
        s = u.globals.gridHeight / u.globals.dataPoints;
        var p = u.config.plotOptions.bar.barHeight;
        d = String(p).indexOf("%") === -1 ? parseInt(p, 10) : s * parseInt(p, 10) / 100, n = u.globals.padHorizontal + (this.isReversed ? u.globals.gridWidth - this.baseLineInvertedY : this.baseLineInvertedY), i = (s - d) / 2;
      } else {
        c = r = u.globals.gridWidth / u.globals.dataPoints;
        var m = u.config.plotOptions.bar.columnWidth;
        u.globals.isXNumeric && u.globals.dataPoints > 1 ? c = (r = u.globals.minXDiff / this.xRatio) * parseInt(this.barOptions.columnWidth, 10) / 100 : String(m).indexOf("%") === -1 ? c = parseInt(m, 10) : c *= parseInt(m, 10) / 100, o = this.isReversed ? this.baseLineY[h] : u.globals.gridHeight - this.baseLineY[h], a = u.globals.padHorizontal + (r - c) / 2;
      }
      var f = u.globals.barGroups.length || 1;
      return { x: a, y: i, yDivision: s, xDivision: r, barHeight: d / f, barWidth: c / f, zeroH: o, zeroW: n };
    } }, { key: "drawStackedBarPaths", value: function(a) {
      for (var i, r = a.indexes, s = a.barHeight, o = a.strokeWidth, n = a.zeroW, h = a.x, d = a.y, c = a.columnGroupIndex, u = a.seriesGroup, p = a.yDivision, m = a.elSeries, f = this.w, b = d + c * s, v = r.i, w = r.j, l = r.realIndex, g = r.translationsIndex, x = 0, k = 0; k < this.groupCtx.prevXF.length; k++) x += this.groupCtx.prevXF[k][w];
      var S;
      if ((S = u.indexOf(f.config.series[l].name)) > 0) {
        var A = n;
        this.groupCtx.prevXVal[S - 1][w] < 0 ? A = this.series[v][w] >= 0 ? this.groupCtx.prevX[S - 1][w] + x - 2 * (this.isReversed ? x : 0) : this.groupCtx.prevX[S - 1][w] : this.groupCtx.prevXVal[S - 1][w] >= 0 && (A = this.series[v][w] >= 0 ? this.groupCtx.prevX[S - 1][w] : this.groupCtx.prevX[S - 1][w] - x + 2 * (this.isReversed ? x : 0)), i = A;
      } else i = n;
      h = this.series[v][w] === null ? i : i + this.series[v][w] / this.invertedYRatio - 2 * (this.isReversed ? this.series[v][w] / this.invertedYRatio : 0);
      var L = this.barHelpers.getBarpaths({ barYPosition: b, barHeight: s, x1: i, x2: h, strokeWidth: o, isReversed: this.isReversed, series: this.series, realIndex: r.realIndex, seriesGroup: u, i: v, j: w, w: f });
      return this.barHelpers.barBackground({ j: w, i: v, y1: b, y2: s, elSeries: m }), d += p, { pathTo: L.pathTo, pathFrom: L.pathFrom, goalX: this.barHelpers.getGoalValues("x", n, null, v, w, g), barXPosition: i, barYPosition: b, x: h, y: d };
    } }, { key: "drawStackedColumnPaths", value: function(a) {
      var i = a.indexes, r = a.x, s = a.y, o = a.xDivision, n = a.barWidth, h = a.zeroH, d = a.columnGroupIndex, c = a.seriesGroup, u = a.elSeries, p = this.w, m = i.i, f = i.j, b = i.bc, v = i.realIndex, w = i.translationsIndex;
      if (p.globals.isXNumeric) {
        var l = p.globals.seriesX[v][f];
        l || (l = 0), r = (l - p.globals.minX) / this.xRatio - n / 2 * p.globals.barGroups.length;
      }
      for (var g, x = r + d * n, k = 0, S = 0; S < this.groupCtx.prevYF.length; S++) k += isNaN(this.groupCtx.prevYF[S][f]) ? 0 : this.groupCtx.prevYF[S][f];
      var A = m;
      if (c && (A = c.indexOf(p.globals.seriesNames[v])), A > 0 && !p.globals.isXNumeric || A > 0 && p.globals.isXNumeric && p.globals.seriesX[v - 1][f] === p.globals.seriesX[v][f]) {
        var L, I, F, B = Math.min(this.yRatio.length + 1, v + 1);
        if (this.groupCtx.prevY[A - 1] !== void 0 && this.groupCtx.prevY[A - 1].length) for (var G = 1; G < B; G++) {
          var W;
          if (!isNaN((W = this.groupCtx.prevY[A - G]) === null || W === void 0 ? void 0 : W[f])) {
            F = this.groupCtx.prevY[A - G][f];
            break;
          }
        }
        for (var q = 1; q < B; q++) {
          var ee, ae;
          if (((ee = this.groupCtx.prevYVal[A - q]) === null || ee === void 0 ? void 0 : ee[f]) < 0) {
            I = this.series[m][f] >= 0 ? F - k + 2 * (this.isReversed ? k : 0) : F;
            break;
          }
          if (((ae = this.groupCtx.prevYVal[A - q]) === null || ae === void 0 ? void 0 : ae[f]) >= 0) {
            I = this.series[m][f] >= 0 ? F : F + k - 2 * (this.isReversed ? k : 0);
            break;
          }
        }
        I === void 0 && (I = p.globals.gridHeight), g = (L = this.groupCtx.prevYF[0]) !== null && L !== void 0 && L.every(function(ue) {
          return ue === 0;
        }) && this.groupCtx.prevYF.slice(1, A).every(function(ue) {
          return ue.every(function(le) {
            return isNaN(le);
          });
        }) ? h : I;
      } else g = h;
      s = this.series[m][f] ? g - this.series[m][f] / this.yRatio[w] + 2 * (this.isReversed ? this.series[m][f] / this.yRatio[w] : 0) : g;
      var ne = this.barHelpers.getColumnPaths({ barXPosition: x, barWidth: n, y1: g, y2: s, yRatio: this.yRatio[w], strokeWidth: this.strokeWidth, isReversed: this.isReversed, series: this.series, seriesGroup: c, realIndex: i.realIndex, i: m, j: f, w: p });
      return this.barHelpers.barBackground({ bc: b, j: f, i: m, x1: x, x2: n, elSeries: u }), { pathTo: ne.pathTo, pathFrom: ne.pathFrom, goalY: this.barHelpers.getGoalValues("y", null, h, m, f), barXPosition: x, x: p.globals.isXNumeric ? r : r + o, y: s };
    } }]), t;
  }(), qt = function(y) {
    Z(t, pt);
    var e = _(t);
    function t() {
      return T(this, t), e.apply(this, arguments);
    }
    return E(t, [{ key: "draw", value: function(a, i, r) {
      var s = this, o = this.w, n = new X(this.ctx), h = o.globals.comboCharts ? i : o.config.chart.type, d = new Ke(this.ctx);
      this.candlestickOptions = this.w.config.plotOptions.candlestick, this.boxOptions = this.w.config.plotOptions.boxPlot, this.isHorizontal = o.config.plotOptions.bar.horizontal;
      var c = new Te(this.ctx, o);
      a = c.getLogSeries(a), this.series = a, this.yRatio = c.getLogYRatios(this.yRatio), this.barHelpers.initVariables(a);
      for (var u = n.group({ class: "apexcharts-".concat(h, "-series apexcharts-plot-series") }), p = function(f) {
        s.isBoxPlot = o.config.chart.type === "boxPlot" || o.config.series[f].type === "boxPlot";
        var b, v, w, l, g = void 0, x = void 0, k = [], S = [], A = o.globals.comboCharts ? r[f] : f, L = s.barHelpers.getGroupIndex(A).columnGroupIndex, I = n.group({ class: "apexcharts-series", seriesName: z.escapeString(o.globals.seriesNames[A]), rel: f + 1, "data:realIndex": A });
        s.ctx.series.addCollapsedClassToSeries(I, A), a[f].length > 0 && (s.visibleI = s.visibleI + 1);
        var F, B, G = 0;
        s.yRatio.length > 1 && (s.yaxisIndex = o.globals.seriesYAxisReverseMap[A][0], G = A);
        var W = s.barHelpers.initialPositions();
        x = W.y, F = W.barHeight, v = W.yDivision, l = W.zeroW, g = W.x, B = W.barWidth, b = W.xDivision, w = W.zeroH, S.push(g + B / 2);
        for (var q = n.group({ class: "apexcharts-datalabels", "data:realIndex": A }), ee = function(ne) {
          var ue = s.barHelpers.getStrokeWidth(f, ne, A), le = null, xe = { indexes: { i: f, j: ne, realIndex: A, translationsIndex: G }, x: g, y: x, strokeWidth: ue, elSeries: I };
          le = s.isHorizontal ? s.drawHorizontalBoxPaths(H(H({}, xe), {}, { yDivision: v, barHeight: F, zeroW: l })) : s.drawVerticalBoxPaths(H(H({}, xe), {}, { xDivision: b, barWidth: B, zeroH: w })), x = le.y, g = le.x, ne > 0 && S.push(g + B / 2), k.push(x), le.pathTo.forEach(function(ze, Ve) {
            var Me = !s.isBoxPlot && s.candlestickOptions.wick.useFillColor ? le.color[Ve] : o.globals.stroke.colors[f], _e = d.fillPath({ seriesNumber: A, dataPointIndex: ne, color: le.color[Ve], value: a[f][ne] });
            s.renderSeries({ realIndex: A, pathFill: _e, lineFill: Me, j: ne, i: f, pathFrom: le.pathFrom, pathTo: ze, strokeWidth: ue, elSeries: I, x: g, y: x, series: a, columnGroupIndex: L, barHeight: F, barWidth: B, elDataLabelsWrap: q, visibleSeries: s.visibleI, type: o.config.chart.type });
          });
        }, ae = 0; ae < o.globals.dataPoints; ae++) ee(ae);
        o.globals.seriesXvalues[A] = S, o.globals.seriesYvalues[A] = k, u.add(I);
      }, m = 0; m < a.length; m++) p(m);
      return u;
    } }, { key: "drawVerticalBoxPaths", value: function(a) {
      var i = a.indexes, r = a.x;
      a.y;
      var s = a.xDivision, o = a.barWidth, n = a.zeroH, h = a.strokeWidth, d = this.w, c = new X(this.ctx), u = i.i, p = i.j, m = !0, f = d.config.plotOptions.candlestick.colors.upward, b = d.config.plotOptions.candlestick.colors.downward, v = "";
      this.isBoxPlot && (v = [this.boxOptions.colors.lower, this.boxOptions.colors.upper]);
      var w = this.yRatio[i.translationsIndex], l = i.realIndex, g = this.getOHLCValue(l, p), x = n, k = n;
      g.o > g.c && (m = !1);
      var S = Math.min(g.o, g.c), A = Math.max(g.o, g.c), L = g.m;
      d.globals.isXNumeric && (r = (d.globals.seriesX[l][p] - d.globals.minX) / this.xRatio - o / 2);
      var I = r + o * this.visibleI;
      this.series[u][p] === void 0 || this.series[u][p] === null ? (S = n, A = n) : (S = n - S / w, A = n - A / w, x = n - g.h / w, k = n - g.l / w, L = n - g.m / w);
      var F = c.move(I, n), B = c.move(I + o / 2, S);
      return d.globals.previousPaths.length > 0 && (B = this.getPreviousPath(l, p, !0)), F = this.isBoxPlot ? [c.move(I, S) + c.line(I + o / 2, S) + c.line(I + o / 2, x) + c.line(I + o / 4, x) + c.line(I + o - o / 4, x) + c.line(I + o / 2, x) + c.line(I + o / 2, S) + c.line(I + o, S) + c.line(I + o, L) + c.line(I, L) + c.line(I, S + h / 2), c.move(I, L) + c.line(I + o, L) + c.line(I + o, A) + c.line(I + o / 2, A) + c.line(I + o / 2, k) + c.line(I + o - o / 4, k) + c.line(I + o / 4, k) + c.line(I + o / 2, k) + c.line(I + o / 2, A) + c.line(I, A) + c.line(I, L) + "z"] : [c.move(I, A) + c.line(I + o / 2, A) + c.line(I + o / 2, x) + c.line(I + o / 2, A) + c.line(I + o, A) + c.line(I + o, S) + c.line(I + o / 2, S) + c.line(I + o / 2, k) + c.line(I + o / 2, S) + c.line(I, S) + c.line(I, A - h / 2)], B += c.move(I, S), d.globals.isXNumeric || (r += s), { pathTo: F, pathFrom: B, x: r, y: A, barXPosition: I, color: this.isBoxPlot ? v : m ? [f] : [b] };
    } }, { key: "drawHorizontalBoxPaths", value: function(a) {
      var i = a.indexes;
      a.x;
      var r = a.y, s = a.yDivision, o = a.barHeight, n = a.zeroW, h = a.strokeWidth, d = this.w, c = new X(this.ctx), u = i.i, p = i.j, m = this.boxOptions.colors.lower;
      this.isBoxPlot && (m = [this.boxOptions.colors.lower, this.boxOptions.colors.upper]);
      var f = this.invertedYRatio, b = i.realIndex, v = this.getOHLCValue(b, p), w = n, l = n, g = Math.min(v.o, v.c), x = Math.max(v.o, v.c), k = v.m;
      d.globals.isXNumeric && (r = (d.globals.seriesX[b][p] - d.globals.minX) / this.invertedXRatio - o / 2);
      var S = r + o * this.visibleI;
      this.series[u][p] === void 0 || this.series[u][p] === null ? (g = n, x = n) : (g = n + g / f, x = n + x / f, w = n + v.h / f, l = n + v.l / f, k = n + v.m / f);
      var A = c.move(n, S), L = c.move(g, S + o / 2);
      return d.globals.previousPaths.length > 0 && (L = this.getPreviousPath(b, p, !0)), A = [c.move(g, S) + c.line(g, S + o / 2) + c.line(w, S + o / 2) + c.line(w, S + o / 2 - o / 4) + c.line(w, S + o / 2 + o / 4) + c.line(w, S + o / 2) + c.line(g, S + o / 2) + c.line(g, S + o) + c.line(k, S + o) + c.line(k, S) + c.line(g + h / 2, S), c.move(k, S) + c.line(k, S + o) + c.line(x, S + o) + c.line(x, S + o / 2) + c.line(l, S + o / 2) + c.line(l, S + o - o / 4) + c.line(l, S + o / 4) + c.line(l, S + o / 2) + c.line(x, S + o / 2) + c.line(x, S) + c.line(k, S) + "z"], L += c.move(g, S), d.globals.isXNumeric || (r += s), { pathTo: A, pathFrom: L, x, y: r, barYPosition: S, color: m };
    } }, { key: "getOHLCValue", value: function(a, i) {
      var r = this.w;
      return { o: this.isBoxPlot ? r.globals.seriesCandleH[a][i] : r.globals.seriesCandleO[a][i], h: this.isBoxPlot ? r.globals.seriesCandleO[a][i] : r.globals.seriesCandleH[a][i], m: r.globals.seriesCandleM[a][i], l: this.isBoxPlot ? r.globals.seriesCandleC[a][i] : r.globals.seriesCandleL[a][i], c: this.isBoxPlot ? r.globals.seriesCandleL[a][i] : r.globals.seriesCandleC[a][i] };
    } }]), t;
  }(), ka = function() {
    function y(e) {
      T(this, y), this.ctx = e, this.w = e.w;
    }
    return E(y, [{ key: "checkColorRange", value: function() {
      var e = this.w, t = !1, a = e.config.plotOptions[e.config.chart.type];
      return a.colorScale.ranges.length > 0 && a.colorScale.ranges.map(function(i, r) {
        i.from <= 0 && (t = !0);
      }), t;
    } }, { key: "getShadeColor", value: function(e, t, a, i) {
      var r = this.w, s = 1, o = r.config.plotOptions[e].shadeIntensity, n = this.determineColor(e, t, a);
      r.globals.hasNegs || i ? s = r.config.plotOptions[e].reverseNegativeShade ? n.percent < 0 ? n.percent / 100 * (1.25 * o) : (1 - n.percent / 100) * (1.25 * o) : n.percent <= 0 ? 1 - (1 + n.percent / 100) * o : (1 - n.percent / 100) * o : (s = 1 - n.percent / 100, e === "treemap" && (s = (1 - n.percent / 100) * (1.25 * o)));
      var h = n.color, d = new z();
      if (r.config.plotOptions[e].enableShades) if (this.w.config.theme.mode === "dark") {
        var c = d.shadeColor(-1 * s, n.color);
        h = z.hexToRgba(z.isColorHex(c) ? c : z.rgb2hex(c), r.config.fill.opacity);
      } else {
        var u = d.shadeColor(s, n.color);
        h = z.hexToRgba(z.isColorHex(u) ? u : z.rgb2hex(u), r.config.fill.opacity);
      }
      return { color: h, colorProps: n };
    } }, { key: "determineColor", value: function(e, t, a) {
      var i = this.w, r = i.globals.series[t][a], s = i.config.plotOptions[e], o = s.colorScale.inverse ? a : t;
      s.distributed && i.config.chart.type === "treemap" && (o = a);
      var n = i.globals.colors[o], h = null, d = Math.min.apply(Math, K(i.globals.series[t])), c = Math.max.apply(Math, K(i.globals.series[t]));
      s.distributed || e !== "heatmap" || (d = i.globals.minY, c = i.globals.maxY), s.colorScale.min !== void 0 && (d = s.colorScale.min < i.globals.minY ? s.colorScale.min : i.globals.minY, c = s.colorScale.max > i.globals.maxY ? s.colorScale.max : i.globals.maxY);
      var u = Math.abs(c) + Math.abs(d), p = 100 * r / (u === 0 ? u - 1e-6 : u);
      return s.colorScale.ranges.length > 0 && s.colorScale.ranges.map(function(m, f) {
        if (r >= m.from && r <= m.to) {
          n = m.color, h = m.foreColor ? m.foreColor : null, d = m.from, c = m.to;
          var b = Math.abs(c) + Math.abs(d);
          p = 100 * r / (b === 0 ? b - 1e-6 : b);
        }
      }), { color: n, foreColor: h, percent: p };
    } }, { key: "calculateDataLabels", value: function(e) {
      var t = e.text, a = e.x, i = e.y, r = e.i, s = e.j, o = e.colorProps, n = e.fontSize, h = this.w.config.dataLabels, d = new X(this.ctx), c = new gt(this.ctx), u = null;
      if (h.enabled) {
        u = d.group({ class: "apexcharts-data-labels" });
        var p = h.offsetX, m = h.offsetY, f = a + p, b = i + parseFloat(h.style.fontSize) / 3 + m;
        c.plotDataLabelsText({ x: f, y: b, text: t, i: r, j: s, color: o.foreColor, parent: u, fontSize: n, dataLabelsConfig: h });
      }
      return u;
    } }, { key: "addListeners", value: function(e) {
      var t = new X(this.ctx);
      e.node.addEventListener("mouseenter", t.pathMouseEnter.bind(this, e)), e.node.addEventListener("mouseleave", t.pathMouseLeave.bind(this, e)), e.node.addEventListener("mousedown", t.pathMouseDown.bind(this, e));
    } }]), y;
  }(), mi = function() {
    function y(e, t) {
      T(this, y), this.ctx = e, this.w = e.w, this.xRatio = t.xRatio, this.yRatio = t.yRatio, this.dynamicAnim = this.w.config.chart.animations.dynamicAnimation, this.helpers = new ka(e), this.rectRadius = this.w.config.plotOptions.heatmap.radius, this.strokeWidth = this.w.config.stroke.show ? this.w.config.stroke.width : 0;
    }
    return E(y, [{ key: "draw", value: function(e) {
      var t = this.w, a = new X(this.ctx), i = a.group({ class: "apexcharts-heatmap" });
      i.attr("clip-path", "url(#gridRectMask".concat(t.globals.cuid, ")"));
      var r = t.globals.gridWidth / t.globals.dataPoints, s = t.globals.gridHeight / t.globals.series.length, o = 0, n = !1;
      this.negRange = this.helpers.checkColorRange();
      var h = e.slice();
      t.config.yaxis[0].reversed && (n = !0, h.reverse());
      for (var d = n ? 0 : h.length - 1; n ? d < h.length : d >= 0; n ? d++ : d--) {
        var c = a.group({ class: "apexcharts-series apexcharts-heatmap-series", seriesName: z.escapeString(t.globals.seriesNames[d]), rel: d + 1, "data:realIndex": d });
        if (this.ctx.series.addCollapsedClassToSeries(c, d), t.config.chart.dropShadow.enabled) {
          var u = t.config.chart.dropShadow;
          new Pe(this.ctx).dropShadow(c, u, d);
        }
        for (var p = 0, m = t.config.plotOptions.heatmap.shadeIntensity, f = 0; f < h[d].length; f++) {
          var b = this.helpers.getShadeColor(t.config.chart.type, d, f, this.negRange), v = b.color, w = b.colorProps;
          t.config.fill.type === "image" && (v = new Ke(this.ctx).fillPath({ seriesNumber: d, dataPointIndex: f, opacity: t.globals.hasNegs ? w.percent < 0 ? 1 - (1 + w.percent / 100) : m + w.percent / 100 : w.percent / 100, patternID: z.randomId(), width: t.config.fill.image.width ? t.config.fill.image.width : r, height: t.config.fill.image.height ? t.config.fill.image.height : s }));
          var l = this.rectRadius, g = a.drawRect(p, o, r, s, l);
          if (g.attr({ cx: p, cy: o }), g.node.classList.add("apexcharts-heatmap-rect"), c.add(g), g.attr({ fill: v, i: d, index: d, j: f, val: e[d][f], "stroke-width": this.strokeWidth, stroke: t.config.plotOptions.heatmap.useFillColorAsStroke ? v : t.globals.stroke.colors[0], color: v }), this.helpers.addListeners(g), t.config.chart.animations.enabled && !t.globals.dataChanged) {
            var x = 1;
            t.globals.resized || (x = t.config.chart.animations.speed), this.animateHeatMap(g, p, o, r, s, x);
          }
          if (t.globals.dataChanged) {
            var k = 1;
            if (this.dynamicAnim.enabled && t.globals.shouldAnimate) {
              k = this.dynamicAnim.speed;
              var S = t.globals.previousPaths[d] && t.globals.previousPaths[d][f] && t.globals.previousPaths[d][f].color;
              S || (S = "rgba(255, 255, 255, 0)"), this.animateHeatColor(g, z.isColorHex(S) ? S : z.rgb2hex(S), z.isColorHex(v) ? v : z.rgb2hex(v), k);
            }
          }
          var A = (0, t.config.dataLabels.formatter)(t.globals.series[d][f], { value: t.globals.series[d][f], seriesIndex: d, dataPointIndex: f, w: t }), L = this.helpers.calculateDataLabels({ text: A, x: p + r / 2, y: o + s / 2, i: d, j: f, colorProps: w, series: h });
          L !== null && c.add(L), p += r;
        }
        o += s, i.add(c);
      }
      var I = t.globals.yAxisScale[0].result.slice();
      return t.config.yaxis[0].reversed ? I.unshift("") : I.push(""), t.globals.yAxisScale[0].result = I, i;
    } }, { key: "animateHeatMap", value: function(e, t, a, i, r, s) {
      var o = new ye(this.ctx);
      o.animateRect(e, { x: t + i / 2, y: a + r / 2, width: 0, height: 0 }, { x: t, y: a, width: i, height: r }, s, function() {
        o.animationCompleted(e);
      });
    } }, { key: "animateHeatColor", value: function(e, t, a, i) {
      e.attr({ fill: t }).animate(i).attr({ fill: a });
    } }]), y;
  }(), Aa = function() {
    function y(e) {
      T(this, y), this.ctx = e, this.w = e.w;
    }
    return E(y, [{ key: "drawYAxisTexts", value: function(e, t, a, i) {
      var r = this.w, s = r.config.yaxis[0], o = r.globals.yLabelFormatters[0];
      return new X(this.ctx).drawText({ x: e + s.labels.offsetX, y: t + s.labels.offsetY, text: o(i, a), textAnchor: "middle", fontSize: s.labels.style.fontSize, fontFamily: s.labels.style.fontFamily, foreColor: Array.isArray(s.labels.style.colors) ? s.labels.style.colors[a] : s.labels.style.colors });
    } }]), y;
  }(), Ca = function() {
    function y(e) {
      T(this, y), this.ctx = e, this.w = e.w;
      var t = this.w;
      this.chartType = this.w.config.chart.type, this.initialAnim = this.w.config.chart.animations.enabled, this.dynamicAnim = this.initialAnim && this.w.config.chart.animations.dynamicAnimation.enabled, this.animBeginArr = [0], this.animDur = 0, this.donutDataLabels = this.w.config.plotOptions.pie.donut.labels, this.lineColorArr = t.globals.stroke.colors !== void 0 ? t.globals.stroke.colors : t.globals.colors, this.defaultSize = Math.min(t.globals.gridWidth, t.globals.gridHeight), this.centerY = this.defaultSize / 2, this.centerX = t.globals.gridWidth / 2, t.config.chart.type === "radialBar" ? this.fullAngle = 360 : this.fullAngle = Math.abs(t.config.plotOptions.pie.endAngle - t.config.plotOptions.pie.startAngle), this.initialAngle = t.config.plotOptions.pie.startAngle % this.fullAngle, t.globals.radialSize = this.defaultSize / 2.05 - t.config.stroke.width - (t.config.chart.sparkline.enabled ? 0 : t.config.chart.dropShadow.blur), this.donutSize = t.globals.radialSize * parseInt(t.config.plotOptions.pie.donut.size, 10) / 100;
      var a = t.config.plotOptions.pie.customScale, i = t.globals.gridWidth / 2, r = t.globals.gridHeight / 2;
      this.translateX = i - i * a, this.translateY = r - r * a, this.dataLabelsGroup = new X(this.ctx).group({ class: "apexcharts-datalabels-group", transform: "translate(".concat(this.translateX, ", ").concat(this.translateY, ") scale(").concat(a, ")") }), this.maxY = 0, this.sliceLabels = [], this.sliceSizes = [], this.prevSectorAngleArr = [];
    }
    return E(y, [{ key: "draw", value: function(e) {
      var t = this, a = this.w, i = new X(this.ctx), r = i.group({ class: "apexcharts-pie" });
      if (a.globals.noData) return r;
      for (var s = 0, o = 0; o < e.length; o++) s += z.negToZero(e[o]);
      var n = [], h = i.group();
      s === 0 && (s = 1e-5), e.forEach(function(l) {
        t.maxY = Math.max(t.maxY, l);
      }), a.config.yaxis[0].max && (this.maxY = a.config.yaxis[0].max), a.config.grid.position === "back" && this.chartType === "polarArea" && this.drawPolarElements(r);
      for (var d = 0; d < e.length; d++) {
        var c = this.fullAngle * z.negToZero(e[d]) / s;
        n.push(c), this.chartType === "polarArea" ? (n[d] = this.fullAngle / e.length, this.sliceSizes.push(a.globals.radialSize * e[d] / this.maxY)) : this.sliceSizes.push(a.globals.radialSize);
      }
      if (a.globals.dataChanged) {
        for (var u, p = 0, m = 0; m < a.globals.previousPaths.length; m++) p += z.negToZero(a.globals.previousPaths[m]);
        for (var f = 0; f < a.globals.previousPaths.length; f++) u = this.fullAngle * z.negToZero(a.globals.previousPaths[f]) / p, this.prevSectorAngleArr.push(u);
      }
      if (this.donutSize < 0 && (this.donutSize = 0), this.chartType === "donut") {
        var b = i.drawCircle(this.donutSize);
        b.attr({ cx: this.centerX, cy: this.centerY, fill: a.config.plotOptions.pie.donut.background ? a.config.plotOptions.pie.donut.background : "transparent" }), h.add(b);
      }
      var v = this.drawArcs(n, e);
      if (this.sliceLabels.forEach(function(l) {
        v.add(l);
      }), h.attr({ transform: "translate(".concat(this.translateX, ", ").concat(this.translateY, ") scale(").concat(a.config.plotOptions.pie.customScale, ")") }), h.add(v), r.add(h), this.donutDataLabels.show) {
        var w = this.renderInnerDataLabels(this.dataLabelsGroup, this.donutDataLabels, { hollowSize: this.donutSize, centerX: this.centerX, centerY: this.centerY, opacity: this.donutDataLabels.show });
        r.add(w);
      }
      return a.config.grid.position === "front" && this.chartType === "polarArea" && this.drawPolarElements(r), r;
    } }, { key: "drawArcs", value: function(e, t) {
      var a = this.w, i = new Pe(this.ctx), r = new X(this.ctx), s = new Ke(this.ctx), o = r.group({ class: "apexcharts-slices" }), n = this.initialAngle, h = this.initialAngle, d = this.initialAngle, c = this.initialAngle;
      this.strokeWidth = a.config.stroke.show ? a.config.stroke.width : 0;
      for (var u = 0; u < e.length; u++) {
        var p = r.group({ class: "apexcharts-series apexcharts-pie-series", seriesName: z.escapeString(a.globals.seriesNames[u]), rel: u + 1, "data:realIndex": u });
        o.add(p), h = c, d = (n = d) + e[u], c = h + this.prevSectorAngleArr[u];
        var m = d < n ? this.fullAngle + d - n : d - n, f = s.fillPath({ seriesNumber: u, size: this.sliceSizes[u], value: t[u] }), b = this.getChangedPath(h, c), v = r.drawPath({ d: b, stroke: Array.isArray(this.lineColorArr) ? this.lineColorArr[u] : this.lineColorArr, strokeWidth: 0, fill: f, fillOpacity: a.config.fill.opacity, classes: "apexcharts-pie-area apexcharts-".concat(this.chartType.toLowerCase(), "-slice-").concat(u) });
        if (v.attr({ index: 0, j: u }), i.setSelectionFilter(v, 0, u), a.config.chart.dropShadow.enabled) {
          var w = a.config.chart.dropShadow;
          i.dropShadow(v, w, u);
        }
        this.addListeners(v, this.donutDataLabels), X.setAttrs(v.node, { "data:angle": m, "data:startAngle": n, "data:strokeWidth": this.strokeWidth, "data:value": t[u] });
        var l = { x: 0, y: 0 };
        this.chartType === "pie" || this.chartType === "polarArea" ? l = z.polarToCartesian(this.centerX, this.centerY, a.globals.radialSize / 1.25 + a.config.plotOptions.pie.dataLabels.offset, (n + m / 2) % this.fullAngle) : this.chartType === "donut" && (l = z.polarToCartesian(this.centerX, this.centerY, (a.globals.radialSize + this.donutSize) / 2 + a.config.plotOptions.pie.dataLabels.offset, (n + m / 2) % this.fullAngle)), p.add(v);
        var g = 0;
        if (!this.initialAnim || a.globals.resized || a.globals.dataChanged ? this.animBeginArr.push(0) : ((g = m / this.fullAngle * a.config.chart.animations.speed) === 0 && (g = 1), this.animDur = g + this.animDur, this.animBeginArr.push(this.animDur)), this.dynamicAnim && a.globals.dataChanged ? this.animatePaths(v, { size: this.sliceSizes[u], endAngle: d, startAngle: n, prevStartAngle: h, prevEndAngle: c, animateStartingPos: !0, i: u, animBeginArr: this.animBeginArr, shouldSetPrevPaths: !0, dur: a.config.chart.animations.dynamicAnimation.speed }) : this.animatePaths(v, { size: this.sliceSizes[u], endAngle: d, startAngle: n, i: u, totalItems: e.length - 1, animBeginArr: this.animBeginArr, dur: g }), a.config.plotOptions.pie.expandOnClick && this.chartType !== "polarArea" && v.node.addEventListener("mouseup", this.pieClicked.bind(this, u)), a.globals.selectedDataPoints[0] !== void 0 && a.globals.selectedDataPoints[0].indexOf(u) > -1 && this.pieClicked(u), a.config.dataLabels.enabled) {
          var x = l.x, k = l.y, S = 100 * m / this.fullAngle + "%";
          if (m !== 0 && a.config.plotOptions.pie.dataLabels.minAngleToShowLabel < e[u]) {
            var A = a.config.dataLabels.formatter;
            A !== void 0 && (S = A(a.globals.seriesPercent[u][0], { seriesIndex: u, w: a }));
            var L = a.globals.dataLabels.style.colors[u], I = r.group({ class: "apexcharts-datalabels" }), F = r.drawText({ x, y: k, text: S, textAnchor: "middle", fontSize: a.config.dataLabels.style.fontSize, fontFamily: a.config.dataLabels.style.fontFamily, fontWeight: a.config.dataLabels.style.fontWeight, foreColor: L });
            if (I.add(F), a.config.dataLabels.dropShadow.enabled) {
              var B = a.config.dataLabels.dropShadow;
              i.dropShadow(F, B);
            }
            F.node.classList.add("apexcharts-pie-label"), a.config.chart.animations.animate && a.globals.resized === !1 && (F.node.classList.add("apexcharts-pie-label-delay"), F.node.style.animationDelay = a.config.chart.animations.speed / 940 + "s"), this.sliceLabels.push(I);
          }
        }
      }
      return o;
    } }, { key: "addListeners", value: function(e, t) {
      var a = new X(this.ctx);
      e.node.addEventListener("mouseenter", a.pathMouseEnter.bind(this, e)), e.node.addEventListener("mouseleave", a.pathMouseLeave.bind(this, e)), e.node.addEventListener("mouseleave", this.revertDataLabelsInner.bind(this, e.node, t)), e.node.addEventListener("mousedown", a.pathMouseDown.bind(this, e)), this.donutDataLabels.total.showAlways || (e.node.addEventListener("mouseenter", this.printDataLabelsInner.bind(this, e.node, t)), e.node.addEventListener("mousedown", this.printDataLabelsInner.bind(this, e.node, t)));
    } }, { key: "animatePaths", value: function(e, t) {
      var a = this.w, i = t.endAngle < t.startAngle ? this.fullAngle + t.endAngle - t.startAngle : t.endAngle - t.startAngle, r = i, s = t.startAngle, o = t.startAngle;
      t.prevStartAngle !== void 0 && t.prevEndAngle !== void 0 && (s = t.prevEndAngle, r = t.prevEndAngle < t.prevStartAngle ? this.fullAngle + t.prevEndAngle - t.prevStartAngle : t.prevEndAngle - t.prevStartAngle), t.i === a.config.series.length - 1 && (i + o > this.fullAngle ? t.endAngle = t.endAngle - (i + o) : i + o < this.fullAngle && (t.endAngle = t.endAngle + (this.fullAngle - (i + o)))), i === this.fullAngle && (i = this.fullAngle - 0.01), this.animateArc(e, s, o, i, r, t);
    } }, { key: "animateArc", value: function(e, t, a, i, r, s) {
      var o, n = this, h = this.w, d = new ye(this.ctx), c = s.size;
      (isNaN(t) || isNaN(r)) && (t = a, r = i, s.dur = 0);
      var u = i, p = a, m = t < a ? this.fullAngle + t - a : t - a;
      h.globals.dataChanged && s.shouldSetPrevPaths && s.prevEndAngle && (o = n.getPiePath({ me: n, startAngle: s.prevStartAngle, angle: s.prevEndAngle < s.prevStartAngle ? this.fullAngle + s.prevEndAngle - s.prevStartAngle : s.prevEndAngle - s.prevStartAngle, size: c }), e.attr({ d: o })), s.dur !== 0 ? e.animate(s.dur, h.globals.easing, s.animBeginArr[s.i]).afterAll(function() {
        n.chartType !== "pie" && n.chartType !== "donut" && n.chartType !== "polarArea" || this.animate(h.config.chart.animations.dynamicAnimation.speed).attr({ "stroke-width": n.strokeWidth }), s.i === h.config.series.length - 1 && d.animationCompleted(e);
      }).during(function(f) {
        u = m + (i - m) * f, s.animateStartingPos && (u = r + (i - r) * f, p = t - r + (a - (t - r)) * f), o = n.getPiePath({ me: n, startAngle: p, angle: u, size: c }), e.node.setAttribute("data:pathOrig", o), e.attr({ d: o });
      }) : (o = n.getPiePath({ me: n, startAngle: p, angle: i, size: c }), s.isTrack || (h.globals.animationEnded = !0), e.node.setAttribute("data:pathOrig", o), e.attr({ d: o, "stroke-width": n.strokeWidth }));
    } }, { key: "pieClicked", value: function(e) {
      var t, a = this.w, i = this, r = i.sliceSizes[e] + (a.config.plotOptions.pie.expandOnClick ? 4 : 0), s = a.globals.dom.Paper.select(".apexcharts-".concat(i.chartType.toLowerCase(), "-slice-").concat(e)).members[0];
      if (s.attr("data:pieClicked") !== "true") {
        var o = a.globals.dom.baseEl.getElementsByClassName("apexcharts-pie-area");
        Array.prototype.forEach.call(o, function(c) {
          c.setAttribute("data:pieClicked", "false");
          var u = c.getAttribute("data:pathOrig");
          u && c.setAttribute("d", u);
        }), a.globals.capturedDataPointIndex = e, s.attr("data:pieClicked", "true");
        var n = parseInt(s.attr("data:startAngle"), 10), h = parseInt(s.attr("data:angle"), 10);
        t = i.getPiePath({ me: i, startAngle: n, angle: h, size: r }), h !== 360 && s.plot(t);
      } else {
        s.attr({ "data:pieClicked": "false" }), this.revertDataLabelsInner(s.node, this.donutDataLabels);
        var d = s.attr("data:pathOrig");
        s.attr({ d });
      }
    } }, { key: "getChangedPath", value: function(e, t) {
      var a = "";
      return this.dynamicAnim && this.w.globals.dataChanged && (a = this.getPiePath({ me: this, startAngle: e, angle: t - e, size: this.size })), a;
    } }, { key: "getPiePath", value: function(e) {
      var t, a = e.me, i = e.startAngle, r = e.angle, s = e.size, o = new X(this.ctx), n = i, h = Math.PI * (n - 90) / 180, d = r + i;
      Math.ceil(d) >= this.fullAngle + this.w.config.plotOptions.pie.startAngle % this.fullAngle && (d = this.fullAngle + this.w.config.plotOptions.pie.startAngle % this.fullAngle - 0.01), Math.ceil(d) > this.fullAngle && (d -= this.fullAngle);
      var c = Math.PI * (d - 90) / 180, u = a.centerX + s * Math.cos(h), p = a.centerY + s * Math.sin(h), m = a.centerX + s * Math.cos(c), f = a.centerY + s * Math.sin(c), b = z.polarToCartesian(a.centerX, a.centerY, a.donutSize, d), v = z.polarToCartesian(a.centerX, a.centerY, a.donutSize, n), w = r > 180 ? 1 : 0, l = ["M", u, p, "A", s, s, 0, w, 1, m, f];
      return t = a.chartType === "donut" ? [].concat(l, ["L", b.x, b.y, "A", a.donutSize, a.donutSize, 0, w, 0, v.x, v.y, "L", u, p, "z"]).join(" ") : a.chartType === "pie" || a.chartType === "polarArea" ? [].concat(l, ["L", a.centerX, a.centerY, "L", u, p]).join(" ") : [].concat(l).join(" "), o.roundPathCorners(t, 2 * this.strokeWidth);
    } }, { key: "drawPolarElements", value: function(e) {
      var t = this.w, a = new ma(this.ctx), i = new X(this.ctx), r = new Aa(this.ctx), s = i.group(), o = i.group(), n = a.niceScale(0, Math.ceil(this.maxY), 0), h = n.result.reverse(), d = n.result.length;
      this.maxY = n.niceMax;
      for (var c = t.globals.radialSize, u = c / (d - 1), p = 0; p < d - 1; p++) {
        var m = i.drawCircle(c);
        if (m.attr({ cx: this.centerX, cy: this.centerY, fill: "none", "stroke-width": t.config.plotOptions.polarArea.rings.strokeWidth, stroke: t.config.plotOptions.polarArea.rings.strokeColor }), t.config.yaxis[0].show) {
          var f = r.drawYAxisTexts(this.centerX, this.centerY - c + parseInt(t.config.yaxis[0].labels.style.fontSize, 10) / 2, p, h[p]);
          o.add(f);
        }
        s.add(m), c -= u;
      }
      this.drawSpokes(e), e.add(s), e.add(o);
    } }, { key: "renderInnerDataLabels", value: function(e, t, a) {
      var i = this.w, r = new X(this.ctx), s = t.total.show;
      e.node.innerHTML = "", e.node.style.opacity = a.opacity;
      var o, n, h = a.centerX, d = this.donutDataLabels.total.label ? a.centerY : a.centerY - a.centerY / 6;
      o = t.name.color === void 0 ? i.globals.colors[0] : t.name.color;
      var c = t.name.fontSize, u = t.name.fontFamily, p = t.name.fontWeight;
      n = t.value.color === void 0 ? i.config.chart.foreColor : t.value.color;
      var m = t.value.formatter, f = "", b = "";
      if (s ? (o = t.total.color, c = t.total.fontSize, u = t.total.fontFamily, p = t.total.fontWeight, b = this.donutDataLabels.total.label ? t.total.label : "", f = t.total.formatter(i)) : i.globals.series.length === 1 && (f = m(i.globals.series[0], i), b = i.globals.seriesNames[0]), b && (b = t.name.formatter(b, t.total.show, i)), t.name.show) {
        var v = r.drawText({ x: h, y: d + parseFloat(t.name.offsetY), text: b, textAnchor: "middle", foreColor: o, fontSize: c, fontWeight: p, fontFamily: u });
        v.node.classList.add("apexcharts-datalabel-label"), e.add(v);
      }
      if (t.value.show) {
        var w = t.name.show ? parseFloat(t.value.offsetY) + 16 : t.value.offsetY, l = r.drawText({ x: h, y: d + w, text: f, textAnchor: "middle", foreColor: n, fontWeight: t.value.fontWeight, fontSize: t.value.fontSize, fontFamily: t.value.fontFamily });
        l.node.classList.add("apexcharts-datalabel-value"), e.add(l);
      }
      return e;
    } }, { key: "printInnerLabels", value: function(e, t, a, i) {
      var r, s = this.w;
      i ? r = e.name.color === void 0 ? s.globals.colors[parseInt(i.parentNode.getAttribute("rel"), 10) - 1] : e.name.color : s.globals.series.length > 1 && e.total.show && (r = e.total.color);
      var o = s.globals.dom.baseEl.querySelector(".apexcharts-datalabel-label"), n = s.globals.dom.baseEl.querySelector(".apexcharts-datalabel-value");
      a = (0, e.value.formatter)(a, s), i || typeof e.total.formatter != "function" || (a = e.total.formatter(s));
      var h = t === e.total.label;
      t = this.donutDataLabels.total.label ? e.name.formatter(t, h, s) : "", o !== null && (o.textContent = t), n !== null && (n.textContent = a), o !== null && (o.style.fill = r);
    } }, { key: "printDataLabelsInner", value: function(e, t) {
      var a = this.w, i = e.getAttribute("data:value"), r = a.globals.seriesNames[parseInt(e.parentNode.getAttribute("rel"), 10) - 1];
      a.globals.series.length > 1 && this.printInnerLabels(t, r, i, e);
      var s = a.globals.dom.baseEl.querySelector(".apexcharts-datalabels-group");
      s !== null && (s.style.opacity = 1);
    } }, { key: "drawSpokes", value: function(e) {
      var t = this, a = this.w, i = new X(this.ctx), r = a.config.plotOptions.polarArea.spokes;
      if (r.strokeWidth !== 0) {
        for (var s = [], o = 360 / a.globals.series.length, n = 0; n < a.globals.series.length; n++) s.push(z.polarToCartesian(this.centerX, this.centerY, a.globals.radialSize, a.config.plotOptions.pie.startAngle + o * n));
        s.forEach(function(h, d) {
          var c = i.drawLine(h.x, h.y, t.centerX, t.centerY, Array.isArray(r.connectorColors) ? r.connectorColors[d] : r.connectorColors);
          e.add(c);
        });
      }
    } }, { key: "revertDataLabelsInner", value: function() {
      var e = this.w;
      if (this.donutDataLabels.show) {
        var t = e.globals.dom.Paper.select(".apexcharts-datalabels-group").members[0], a = this.renderInnerDataLabels(t, this.donutDataLabels, { hollowSize: this.donutSize, centerX: this.centerX, centerY: this.centerY, opacity: this.donutDataLabels.show });
        e.globals.dom.Paper.select(".apexcharts-radialbar, .apexcharts-pie").members[0].add(a);
      }
    } }]), y;
  }(), xi = function() {
    function y(e) {
      T(this, y), this.ctx = e, this.w = e.w, this.chartType = this.w.config.chart.type, this.initialAnim = this.w.config.chart.animations.enabled, this.dynamicAnim = this.initialAnim && this.w.config.chart.animations.dynamicAnimation.enabled, this.animDur = 0;
      var t = this.w;
      this.graphics = new X(this.ctx), this.lineColorArr = t.globals.stroke.colors !== void 0 ? t.globals.stroke.colors : t.globals.colors, this.defaultSize = t.globals.svgHeight < t.globals.svgWidth ? t.globals.gridHeight : t.globals.gridWidth, this.isLog = t.config.yaxis[0].logarithmic, this.logBase = t.config.yaxis[0].logBase, this.coreUtils = new Te(this.ctx), this.maxValue = this.isLog ? this.coreUtils.getLogVal(this.logBase, t.globals.maxY, 0) : t.globals.maxY, this.minValue = this.isLog ? this.coreUtils.getLogVal(this.logBase, this.w.globals.minY, 0) : t.globals.minY, this.polygons = t.config.plotOptions.radar.polygons, this.strokeWidth = t.config.stroke.show ? t.config.stroke.width : 0, this.size = this.defaultSize / 2.1 - this.strokeWidth - t.config.chart.dropShadow.blur, t.config.xaxis.labels.show && (this.size = this.size - t.globals.xAxisLabelsWidth / 1.75), t.config.plotOptions.radar.size !== void 0 && (this.size = t.config.plotOptions.radar.size), this.dataRadiusOfPercent = [], this.dataRadius = [], this.angleArr = [], this.yaxisLabelsTextsPos = [];
    }
    return E(y, [{ key: "draw", value: function(e) {
      var t = this, a = this.w, i = new Ke(this.ctx), r = [], s = new gt(this.ctx);
      e.length && (this.dataPointsLen = e[a.globals.maxValsInArrayIndex].length), this.disAngle = 2 * Math.PI / this.dataPointsLen;
      var o = a.globals.gridWidth / 2, n = a.globals.gridHeight / 2, h = o + a.config.plotOptions.radar.offsetX, d = n + a.config.plotOptions.radar.offsetY, c = this.graphics.group({ class: "apexcharts-radar-series apexcharts-plot-series", transform: "translate(".concat(h || 0, ", ").concat(d || 0, ")") }), u = [], p = null, m = null;
      if (this.yaxisLabels = this.graphics.group({ class: "apexcharts-yaxis" }), e.forEach(function(b, v) {
        var w = b.length === a.globals.dataPoints, l = t.graphics.group().attr({ class: "apexcharts-series", "data:longestSeries": w, seriesName: z.escapeString(a.globals.seriesNames[v]), rel: v + 1, "data:realIndex": v });
        t.dataRadiusOfPercent[v] = [], t.dataRadius[v] = [], t.angleArr[v] = [], b.forEach(function(G, W) {
          var q = Math.abs(t.maxValue - t.minValue);
          G -= t.minValue, t.isLog && (G = t.coreUtils.getLogVal(t.logBase, G, 0)), t.dataRadiusOfPercent[v][W] = G / q, t.dataRadius[v][W] = t.dataRadiusOfPercent[v][W] * t.size, t.angleArr[v][W] = W * t.disAngle;
        }), u = t.getDataPointsPos(t.dataRadius[v], t.angleArr[v]);
        var g = t.createPaths(u, { x: 0, y: 0 });
        p = t.graphics.group({ class: "apexcharts-series-markers-wrap apexcharts-element-hidden" }), m = t.graphics.group({ class: "apexcharts-datalabels", "data:realIndex": v }), a.globals.delayedElements.push({ el: p.node, index: v });
        var x = { i: v, realIndex: v, animationDelay: v, initialSpeed: a.config.chart.animations.speed, dataChangeSpeed: a.config.chart.animations.dynamicAnimation.speed, className: "apexcharts-radar", shouldClipToGrid: !1, bindEventsOnPaths: !1, stroke: a.globals.stroke.colors[v], strokeLineCap: a.config.stroke.lineCap }, k = null;
        a.globals.previousPaths.length > 0 && (k = t.getPreviousPath(v));
        for (var S = 0; S < g.linePathsTo.length; S++) {
          var A = t.graphics.renderPaths(H(H({}, x), {}, { pathFrom: k === null ? g.linePathsFrom[S] : k, pathTo: g.linePathsTo[S], strokeWidth: Array.isArray(t.strokeWidth) ? t.strokeWidth[v] : t.strokeWidth, fill: "none", drawShadow: !1 }));
          l.add(A);
          var L = i.fillPath({ seriesNumber: v }), I = t.graphics.renderPaths(H(H({}, x), {}, { pathFrom: k === null ? g.areaPathsFrom[S] : k, pathTo: g.areaPathsTo[S], strokeWidth: 0, fill: L, drawShadow: !1 }));
          if (a.config.chart.dropShadow.enabled) {
            var F = new Pe(t.ctx), B = a.config.chart.dropShadow;
            F.dropShadow(I, Object.assign({}, B, { noUserSpaceOnUse: !0 }), v);
          }
          l.add(I);
        }
        b.forEach(function(G, W) {
          var q = new ut(t.ctx).getMarkerConfig({ cssClass: "apexcharts-marker", seriesIndex: v, dataPointIndex: W }), ee = t.graphics.drawMarker(u[W].x, u[W].y, q);
          ee.attr("rel", W), ee.attr("j", W), ee.attr("index", v), ee.node.setAttribute("default-marker-size", q.pSize);
          var ae = t.graphics.group({ class: "apexcharts-series-markers" });
          ae && ae.add(ee), p.add(ae), l.add(p);
          var ne = a.config.dataLabels;
          if (ne.enabled) {
            var ue = ne.formatter(a.globals.series[v][W], { seriesIndex: v, dataPointIndex: W, w: a });
            s.plotDataLabelsText({ x: u[W].x, y: u[W].y, text: ue, textAnchor: "middle", i: v, j: v, parent: m, offsetCorrection: !1, dataLabelsConfig: H({}, ne) });
          }
          l.add(m);
        }), r.push(l);
      }), this.drawPolygons({ parent: c }), a.config.xaxis.labels.show) {
        var f = this.drawXAxisTexts();
        c.add(f);
      }
      return r.forEach(function(b) {
        c.add(b);
      }), c.add(this.yaxisLabels), c;
    } }, { key: "drawPolygons", value: function(e) {
      for (var t = this, a = this.w, i = e.parent, r = new Aa(this.ctx), s = a.globals.yAxisScale[0].result.reverse(), o = s.length, n = [], h = this.size / (o - 1), d = 0; d < o; d++) n[d] = h * d;
      n.reverse();
      var c = [], u = [];
      n.forEach(function(p, m) {
        var f = z.getPolygonPos(p, t.dataPointsLen), b = "";
        f.forEach(function(v, w) {
          if (m === 0) {
            var l = t.graphics.drawLine(v.x, v.y, 0, 0, Array.isArray(t.polygons.connectorColors) ? t.polygons.connectorColors[w] : t.polygons.connectorColors);
            u.push(l);
          }
          w === 0 && t.yaxisLabelsTextsPos.push({ x: v.x, y: v.y }), b += v.x + "," + v.y + " ";
        }), c.push(b);
      }), c.forEach(function(p, m) {
        var f = t.polygons.strokeColors, b = t.polygons.strokeWidth, v = t.graphics.drawPolygon(p, Array.isArray(f) ? f[m] : f, Array.isArray(b) ? b[m] : b, a.globals.radarPolygons.fill.colors[m]);
        i.add(v);
      }), u.forEach(function(p) {
        i.add(p);
      }), a.config.yaxis[0].show && this.yaxisLabelsTextsPos.forEach(function(p, m) {
        var f = r.drawYAxisTexts(p.x, p.y, m, s[m]);
        t.yaxisLabels.add(f);
      });
    } }, { key: "drawXAxisTexts", value: function() {
      var e = this, t = this.w, a = t.config.xaxis.labels, i = this.graphics.group({ class: "apexcharts-xaxis" }), r = z.getPolygonPos(this.size, this.dataPointsLen);
      return t.globals.labels.forEach(function(s, o) {
        var n = t.config.xaxis.labels.formatter, h = new gt(e.ctx);
        if (r[o]) {
          var d = e.getTextPos(r[o], e.size), c = n(s, { seriesIndex: -1, dataPointIndex: o, w: t });
          h.plotDataLabelsText({ x: d.newX, y: d.newY, text: c, textAnchor: d.textAnchor, i: o, j: o, parent: i, className: "apexcharts-xaxis-label", color: Array.isArray(a.style.colors) && a.style.colors[o] ? a.style.colors[o] : "#a8a8a8", dataLabelsConfig: H({ textAnchor: d.textAnchor, dropShadow: { enabled: !1 } }, a), offsetCorrection: !1 }).on("click", function(u) {
            if (typeof t.config.chart.events.xAxisLabelClick == "function") {
              var p = Object.assign({}, t, { labelIndex: o });
              t.config.chart.events.xAxisLabelClick(u, e.ctx, p);
            }
          });
        }
      }), i;
    } }, { key: "createPaths", value: function(e, t) {
      var a = this, i = [], r = [], s = [], o = [];
      if (e.length) {
        r = [this.graphics.move(t.x, t.y)], o = [this.graphics.move(t.x, t.y)];
        var n = this.graphics.move(e[0].x, e[0].y), h = this.graphics.move(e[0].x, e[0].y);
        e.forEach(function(d, c) {
          n += a.graphics.line(d.x, d.y), h += a.graphics.line(d.x, d.y), c === e.length - 1 && (n += "Z", h += "Z");
        }), i.push(n), s.push(h);
      }
      return { linePathsFrom: r, linePathsTo: i, areaPathsFrom: o, areaPathsTo: s };
    } }, { key: "getTextPos", value: function(e, t) {
      var a = "middle", i = e.x, r = e.y;
      return Math.abs(e.x) >= 10 ? e.x > 0 ? (a = "start", i += 10) : e.x < 0 && (a = "end", i -= 10) : a = "middle", Math.abs(e.y) >= t - 10 && (e.y < 0 ? r -= 10 : e.y > 0 && (r += 10)), { textAnchor: a, newX: i, newY: r };
    } }, { key: "getPreviousPath", value: function(e) {
      for (var t = this.w, a = null, i = 0; i < t.globals.previousPaths.length; i++) {
        var r = t.globals.previousPaths[i];
        r.paths.length > 0 && parseInt(r.realIndex, 10) === parseInt(e, 10) && t.globals.previousPaths[i].paths[0] !== void 0 && (a = t.globals.previousPaths[i].paths[0].d);
      }
      return a;
    } }, { key: "getDataPointsPos", value: function(e, t) {
      var a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : this.dataPointsLen;
      e = e || [], t = t || [];
      for (var i = [], r = 0; r < a; r++) {
        var s = {};
        s.x = e[r] * Math.sin(t[r]), s.y = -e[r] * Math.cos(t[r]), i.push(s);
      }
      return i;
    } }]), y;
  }(), bi = function(y) {
    Z(t, Ca);
    var e = _(t);
    function t(a) {
      var i;
      T(this, t), (i = e.call(this, a)).ctx = a, i.w = a.w, i.animBeginArr = [0], i.animDur = 0;
      var r = i.w;
      return i.startAngle = r.config.plotOptions.radialBar.startAngle, i.endAngle = r.config.plotOptions.radialBar.endAngle, i.totalAngle = Math.abs(r.config.plotOptions.radialBar.endAngle - r.config.plotOptions.radialBar.startAngle), i.trackStartAngle = r.config.plotOptions.radialBar.track.startAngle, i.trackEndAngle = r.config.plotOptions.radialBar.track.endAngle, i.barLabels = i.w.config.plotOptions.radialBar.barLabels, i.donutDataLabels = i.w.config.plotOptions.radialBar.dataLabels, i.radialDataLabels = i.donutDataLabels, i.trackStartAngle || (i.trackStartAngle = i.startAngle), i.trackEndAngle || (i.trackEndAngle = i.endAngle), i.endAngle === 360 && (i.endAngle = 359.99), i.margin = parseInt(r.config.plotOptions.radialBar.track.margin, 10), i.onBarLabelClick = i.onBarLabelClick.bind(R(i)), i;
    }
    return E(t, [{ key: "draw", value: function(a) {
      var i = this.w, r = new X(this.ctx), s = r.group({ class: "apexcharts-radialbar" });
      if (i.globals.noData) return s;
      var o = r.group(), n = this.defaultSize / 2, h = i.globals.gridWidth / 2, d = this.defaultSize / 2.05;
      i.config.chart.sparkline.enabled || (d = d - i.config.stroke.width - i.config.chart.dropShadow.blur);
      var c = i.globals.fill.colors;
      if (i.config.plotOptions.radialBar.track.show) {
        var u = this.drawTracks({ size: d, centerX: h, centerY: n, colorArr: c, series: a });
        o.add(u);
      }
      var p = this.drawArcs({ size: d, centerX: h, centerY: n, colorArr: c, series: a }), m = 360;
      i.config.plotOptions.radialBar.startAngle < 0 && (m = this.totalAngle);
      var f = (360 - m) / 360;
      if (i.globals.radialSize = d - d * f, this.radialDataLabels.value.show) {
        var b = Math.max(this.radialDataLabels.value.offsetY, this.radialDataLabels.name.offsetY);
        i.globals.radialSize += b * f;
      }
      return o.add(p.g), i.config.plotOptions.radialBar.hollow.position === "front" && (p.g.add(p.elHollow), p.dataLabels && p.g.add(p.dataLabels)), s.add(o), s;
    } }, { key: "drawTracks", value: function(a) {
      var i = this.w, r = new X(this.ctx), s = r.group({ class: "apexcharts-tracks" }), o = new Pe(this.ctx), n = new Ke(this.ctx), h = this.getStrokeWidth(a);
      a.size = a.size - h / 2;
      for (var d = 0; d < a.series.length; d++) {
        var c = r.group({ class: "apexcharts-radialbar-track apexcharts-track" });
        s.add(c), c.attr({ rel: d + 1 }), a.size = a.size - h - this.margin;
        var u = i.config.plotOptions.radialBar.track, p = n.fillPath({ seriesNumber: 0, size: a.size, fillColors: Array.isArray(u.background) ? u.background[d] : u.background, solid: !0 }), m = this.trackStartAngle, f = this.trackEndAngle;
        Math.abs(f) + Math.abs(m) >= 360 && (f = 360 - Math.abs(this.startAngle) - 0.1);
        var b = r.drawPath({ d: "", stroke: p, strokeWidth: h * parseInt(u.strokeWidth, 10) / 100, fill: "none", strokeOpacity: u.opacity, classes: "apexcharts-radialbar-area" });
        if (u.dropShadow.enabled) {
          var v = u.dropShadow;
          o.dropShadow(b, v);
        }
        c.add(b), b.attr("id", "apexcharts-radialbarTrack-" + d), this.animatePaths(b, { centerX: a.centerX, centerY: a.centerY, endAngle: f, startAngle: m, size: a.size, i: d, totalItems: 2, animBeginArr: 0, dur: 0, isTrack: !0, easing: i.globals.easing });
      }
      return s;
    } }, { key: "drawArcs", value: function(a) {
      var i = this.w, r = new X(this.ctx), s = new Ke(this.ctx), o = new Pe(this.ctx), n = r.group(), h = this.getStrokeWidth(a);
      a.size = a.size - h / 2;
      var d = i.config.plotOptions.radialBar.hollow.background, c = a.size - h * a.series.length - this.margin * a.series.length - h * parseInt(i.config.plotOptions.radialBar.track.strokeWidth, 10) / 100 / 2, u = c - i.config.plotOptions.radialBar.hollow.margin;
      i.config.plotOptions.radialBar.hollow.image !== void 0 && (d = this.drawHollowImage(a, n, c, d));
      var p = this.drawHollow({ size: u, centerX: a.centerX, centerY: a.centerY, fill: d || "transparent" });
      if (i.config.plotOptions.radialBar.hollow.dropShadow.enabled) {
        var m = i.config.plotOptions.radialBar.hollow.dropShadow;
        o.dropShadow(p, m);
      }
      var f = 1;
      !this.radialDataLabels.total.show && i.globals.series.length > 1 && (f = 0);
      var b = null;
      if (this.radialDataLabels.show) {
        var v = i.globals.dom.Paper.select(".apexcharts-datalabels-group").members[0];
        b = this.renderInnerDataLabels(v, this.radialDataLabels, { hollowSize: c, centerX: a.centerX, centerY: a.centerY, opacity: f });
      }
      i.config.plotOptions.radialBar.hollow.position === "back" && (n.add(p), b && n.add(b));
      var w = !1;
      i.config.plotOptions.radialBar.inverseOrder && (w = !0);
      for (var l = w ? a.series.length - 1 : 0; w ? l >= 0 : l < a.series.length; w ? l-- : l++) {
        var g = r.group({ class: "apexcharts-series apexcharts-radial-series", seriesName: z.escapeString(i.globals.seriesNames[l]) });
        n.add(g), g.attr({ rel: l + 1, "data:realIndex": l }), this.ctx.series.addCollapsedClassToSeries(g, l), a.size = a.size - h - this.margin;
        var x = s.fillPath({ seriesNumber: l, size: a.size, value: a.series[l] }), k = this.startAngle, S = void 0, A = z.negToZero(a.series[l] > 100 ? 100 : a.series[l]) / 100, L = Math.round(this.totalAngle * A) + this.startAngle, I = void 0;
        i.globals.dataChanged && (S = this.startAngle, I = Math.round(this.totalAngle * z.negToZero(i.globals.previousPaths[l]) / 100) + S), Math.abs(L) + Math.abs(k) > 360 && (L -= 0.01), Math.abs(I) + Math.abs(S) > 360 && (I -= 0.01);
        var F = L - k, B = Array.isArray(i.config.stroke.dashArray) ? i.config.stroke.dashArray[l] : i.config.stroke.dashArray, G = r.drawPath({ d: "", stroke: x, strokeWidth: h, fill: "none", fillOpacity: i.config.fill.opacity, classes: "apexcharts-radialbar-area apexcharts-radialbar-slice-" + l, strokeDashArray: B });
        if (X.setAttrs(G.node, { "data:angle": F, "data:value": a.series[l] }), i.config.chart.dropShadow.enabled) {
          var W = i.config.chart.dropShadow;
          o.dropShadow(G, W, l);
        }
        if (o.setSelectionFilter(G, 0, l), this.addListeners(G, this.radialDataLabels), g.add(G), G.attr({ index: 0, j: l }), this.barLabels.enabled) {
          var q = z.polarToCartesian(a.centerX, a.centerY, a.size, k), ee = this.barLabels.formatter(i.globals.seriesNames[l], { seriesIndex: l, w: i }), ae = ["apexcharts-radialbar-label"];
          this.barLabels.onClick || ae.push("apexcharts-no-click");
          var ne = this.barLabels.useSeriesColors ? i.globals.colors[l] : i.config.chart.foreColor;
          ne || (ne = i.config.chart.foreColor);
          var ue = q.x + this.barLabels.offsetX, le = q.y + this.barLabels.offsetY, xe = r.drawText({ x: ue, y: le, text: ee, textAnchor: "end", dominantBaseline: "middle", fontFamily: this.barLabels.fontFamily, fontWeight: this.barLabels.fontWeight, fontSize: this.barLabels.fontSize, foreColor: ne, cssClass: ae.join(" ") });
          xe.on("click", this.onBarLabelClick), xe.attr({ rel: l + 1 }), k !== 0 && xe.attr({ "transform-origin": "".concat(ue, " ").concat(le), transform: "rotate(".concat(k, " 0 0)") }), g.add(xe);
        }
        var ze = 0;
        !this.initialAnim || i.globals.resized || i.globals.dataChanged || (ze = i.config.chart.animations.speed), i.globals.dataChanged && (ze = i.config.chart.animations.dynamicAnimation.speed), this.animDur = ze / (1.2 * a.series.length) + this.animDur, this.animBeginArr.push(this.animDur), this.animatePaths(G, { centerX: a.centerX, centerY: a.centerY, endAngle: L, startAngle: k, prevEndAngle: I, prevStartAngle: S, size: a.size, i: l, totalItems: 2, animBeginArr: this.animBeginArr, dur: ze, shouldSetPrevPaths: !0, easing: i.globals.easing });
      }
      return { g: n, elHollow: p, dataLabels: b };
    } }, { key: "drawHollow", value: function(a) {
      var i = new X(this.ctx).drawCircle(2 * a.size);
      return i.attr({ class: "apexcharts-radialbar-hollow", cx: a.centerX, cy: a.centerY, r: a.size, fill: a.fill }), i;
    } }, { key: "drawHollowImage", value: function(a, i, r, s) {
      var o = this.w, n = new Ke(this.ctx), h = z.randomId(), d = o.config.plotOptions.radialBar.hollow.image;
      if (o.config.plotOptions.radialBar.hollow.imageClipped) n.clippedImgArea({ width: r, height: r, image: d, patternID: "pattern".concat(o.globals.cuid).concat(h) }), s = "url(#pattern".concat(o.globals.cuid).concat(h, ")");
      else {
        var c = o.config.plotOptions.radialBar.hollow.imageWidth, u = o.config.plotOptions.radialBar.hollow.imageHeight;
        if (c === void 0 && u === void 0) {
          var p = o.globals.dom.Paper.image(d).loaded(function(f) {
            this.move(a.centerX - f.width / 2 + o.config.plotOptions.radialBar.hollow.imageOffsetX, a.centerY - f.height / 2 + o.config.plotOptions.radialBar.hollow.imageOffsetY);
          });
          i.add(p);
        } else {
          var m = o.globals.dom.Paper.image(d).loaded(function(f) {
            this.move(a.centerX - c / 2 + o.config.plotOptions.radialBar.hollow.imageOffsetX, a.centerY - u / 2 + o.config.plotOptions.radialBar.hollow.imageOffsetY), this.size(c, u);
          });
          i.add(m);
        }
      }
      return s;
    } }, { key: "getStrokeWidth", value: function(a) {
      var i = this.w;
      return a.size * (100 - parseInt(i.config.plotOptions.radialBar.hollow.size, 10)) / 100 / (a.series.length + 1) - this.margin;
    } }, { key: "onBarLabelClick", value: function(a) {
      var i = parseInt(a.target.getAttribute("rel"), 10) - 1, r = this.barLabels.onClick, s = this.w;
      r && r(s.globals.seriesNames[i], { w: s, seriesIndex: i });
    } }]), t;
  }(), vi = function(y) {
    Z(t, pt);
    var e = _(t);
    function t() {
      return T(this, t), e.apply(this, arguments);
    }
    return E(t, [{ key: "draw", value: function(a, i) {
      var r = this.w, s = new X(this.ctx);
      this.rangeBarOptions = this.w.config.plotOptions.rangeBar, this.series = a, this.seriesRangeStart = r.globals.seriesRangeStart, this.seriesRangeEnd = r.globals.seriesRangeEnd, this.barHelpers.initVariables(a);
      for (var o = s.group({ class: "apexcharts-rangebar-series apexcharts-plot-series" }), n = 0; n < a.length; n++) {
        var h, d, c, u, p = void 0, m = void 0, f = r.globals.comboCharts ? i[n] : n, b = this.barHelpers.getGroupIndex(f).columnGroupIndex, v = s.group({ class: "apexcharts-series", seriesName: z.escapeString(r.globals.seriesNames[f]), rel: n + 1, "data:realIndex": f });
        this.ctx.series.addCollapsedClassToSeries(v, f), a[n].length > 0 && (this.visibleI = this.visibleI + 1);
        var w = 0, l = 0, g = 0;
        this.yRatio.length > 1 && (this.yaxisIndex = r.globals.seriesYAxisReverseMap[f][0], g = f);
        var x = this.barHelpers.initialPositions();
        m = x.y, u = x.zeroW, p = x.x, l = x.barWidth, w = x.barHeight, h = x.xDivision, d = x.yDivision, c = x.zeroH;
        for (var k = s.group({ class: "apexcharts-datalabels", "data:realIndex": f }), S = s.group({ class: "apexcharts-rangebar-goals-markers" }), A = 0; A < r.globals.dataPoints; A++) {
          var L = this.barHelpers.getStrokeWidth(n, A, f), I = this.seriesRangeStart[n][A], F = this.seriesRangeEnd[n][A], B = null, G = null, W = null, q = { x: p, y: m, strokeWidth: L, elSeries: v }, ee = this.seriesLen;
          if (r.config.plotOptions.bar.rangeBarGroupRows && (ee = 1), r.config.series[n].data[A] === void 0) break;
          if (this.isHorizontal) {
            W = m + w * this.visibleI;
            var ae = (d - w * ee) / 2;
            if (r.config.series[n].data[A].x) {
              var ne = this.detectOverlappingBars({ i: n, j: A, barYPosition: W, srty: ae, barHeight: w, yDivision: d, initPositions: x });
              w = ne.barHeight, W = ne.barYPosition;
            }
            l = (B = this.drawRangeBarPaths(H({ indexes: { i: n, j: A, realIndex: f }, barHeight: w, barYPosition: W, zeroW: u, yDivision: d, y1: I, y2: F }, q))).barWidth;
          } else {
            r.globals.isXNumeric && (p = (r.globals.seriesX[n][A] - r.globals.minX) / this.xRatio - l / 2), G = p + l * this.visibleI;
            var ue = (h - l * ee) / 2;
            if (r.config.series[n].data[A].x) {
              var le = this.detectOverlappingBars({ i: n, j: A, barXPosition: G, srtx: ue, barWidth: l, xDivision: h, initPositions: x });
              l = le.barWidth, G = le.barXPosition;
            }
            w = (B = this.drawRangeColumnPaths(H({ indexes: { i: n, j: A, realIndex: f, translationsIndex: g }, barWidth: l, barXPosition: G, zeroH: c, xDivision: h }, q))).barHeight;
          }
          var xe = this.barHelpers.drawGoalLine({ barXPosition: B.barXPosition, barYPosition: W, goalX: B.goalX, goalY: B.goalY, barHeight: w, barWidth: l });
          xe && S.add(xe), m = B.y, p = B.x;
          var ze = this.barHelpers.getPathFillColor(a, n, A, f), Ve = r.globals.stroke.colors[f];
          this.renderSeries({ realIndex: f, pathFill: ze, lineFill: Ve, j: A, i: n, x: p, y: m, y1: I, y2: F, pathFrom: B.pathFrom, pathTo: B.pathTo, strokeWidth: L, elSeries: v, series: a, barHeight: w, barWidth: l, barXPosition: G, barYPosition: W, columnGroupIndex: b, elDataLabelsWrap: k, elGoalsMarkers: S, visibleSeries: this.visibleI, type: "rangebar" });
        }
        o.add(v);
      }
      return o;
    } }, { key: "detectOverlappingBars", value: function(a) {
      var i = a.i, r = a.j, s = a.barYPosition, o = a.barXPosition, n = a.srty, h = a.srtx, d = a.barHeight, c = a.barWidth, u = a.yDivision, p = a.xDivision, m = a.initPositions, f = this.w, b = [], v = f.config.series[i].data[r].rangeName, w = f.config.series[i].data[r].x, l = Array.isArray(w) ? w.join(" ") : w, g = f.globals.labels.map(function(k) {
        return Array.isArray(k) ? k.join(" ") : k;
      }).indexOf(l), x = f.globals.seriesRange[i].findIndex(function(k) {
        return k.x === l && k.overlaps.length > 0;
      });
      return this.isHorizontal ? (s = f.config.plotOptions.bar.rangeBarGroupRows ? n + u * g : n + d * this.visibleI + u * g, x > -1 && !f.config.plotOptions.bar.rangeBarOverlap && (b = f.globals.seriesRange[i][x].overlaps).indexOf(v) > -1 && (s = (d = m.barHeight / b.length) * this.visibleI + u * (100 - parseInt(this.barOptions.barHeight, 10)) / 100 / 2 + d * (this.visibleI + b.indexOf(v)) + u * g)) : (g > -1 && !f.globals.timescaleLabels.length && (o = f.config.plotOptions.bar.rangeBarGroupRows ? h + p * g : h + c * this.visibleI + p * g), x > -1 && !f.config.plotOptions.bar.rangeBarOverlap && (b = f.globals.seriesRange[i][x].overlaps).indexOf(v) > -1 && (o = (c = m.barWidth / b.length) * this.visibleI + p * (100 - parseInt(this.barOptions.barWidth, 10)) / 100 / 2 + c * (this.visibleI + b.indexOf(v)) + p * g)), { barYPosition: s, barXPosition: o, barHeight: d, barWidth: c };
    } }, { key: "drawRangeColumnPaths", value: function(a) {
      var i = a.indexes, r = a.x, s = a.xDivision, o = a.barWidth, n = a.barXPosition, h = a.zeroH, d = this.w, c = i.i, u = i.j, p = i.realIndex, m = i.translationsIndex, f = this.yRatio[m], b = this.getRangeValue(p, u), v = Math.min(b.start, b.end), w = Math.max(b.start, b.end);
      this.series[c][u] === void 0 || this.series[c][u] === null ? v = h : (v = h - v / f, w = h - w / f);
      var l = Math.abs(w - v), g = this.barHelpers.getColumnPaths({ barXPosition: n, barWidth: o, y1: v, y2: w, strokeWidth: this.strokeWidth, series: this.seriesRangeEnd, realIndex: p, i: p, j: u, w: d });
      if (d.globals.isXNumeric) {
        var x = this.getBarXForNumericXAxis({ x: r, j: u, realIndex: p, barWidth: o });
        r = x.x, n = x.barXPosition;
      } else r += s;
      return { pathTo: g.pathTo, pathFrom: g.pathFrom, barHeight: l, x: r, y: b.start < 0 && b.end < 0 ? v : w, goalY: this.barHelpers.getGoalValues("y", null, h, c, u, m), barXPosition: n };
    } }, { key: "preventBarOverflow", value: function(a) {
      var i = this.w;
      return a < 0 && (a = 0), a > i.globals.gridWidth && (a = i.globals.gridWidth), a;
    } }, { key: "drawRangeBarPaths", value: function(a) {
      var i = a.indexes, r = a.y, s = a.y1, o = a.y2, n = a.yDivision, h = a.barHeight, d = a.barYPosition, c = a.zeroW, u = this.w, p = i.realIndex, m = i.j, f = this.preventBarOverflow(c + s / this.invertedYRatio), b = this.preventBarOverflow(c + o / this.invertedYRatio), v = this.getRangeValue(p, m), w = Math.abs(b - f), l = this.barHelpers.getBarpaths({ barYPosition: d, barHeight: h, x1: f, x2: b, strokeWidth: this.strokeWidth, series: this.seriesRangeEnd, i: p, realIndex: p, j: m, w: u });
      return u.globals.isXNumeric || (r += n), { pathTo: l.pathTo, pathFrom: l.pathFrom, barWidth: w, x: v.start < 0 && v.end < 0 ? f : b, goalX: this.barHelpers.getGoalValues("x", c, null, p, m), y: r };
    } }, { key: "getRangeValue", value: function(a, i) {
      var r = this.w;
      return { start: r.globals.seriesRangeStart[a][i], end: r.globals.seriesRangeEnd[a][i] };
    } }]), t;
  }(), yi = function() {
    function y(e) {
      T(this, y), this.w = e.w, this.lineCtx = e;
    }
    return E(y, [{ key: "sameValueSeriesFix", value: function(e, t) {
      var a = this.w;
      if ((a.config.fill.type === "gradient" || a.config.fill.type[e] === "gradient") && new Te(this.lineCtx.ctx, a).seriesHaveSameValues(e)) {
        var i = t[e].slice();
        i[i.length - 1] = i[i.length - 1] + 1e-6, t[e] = i;
      }
      return t;
    } }, { key: "calculatePoints", value: function(e) {
      var t = e.series, a = e.realIndex, i = e.x, r = e.y, s = e.i, o = e.j, n = e.prevY, h = this.w, d = [], c = [];
      if (o === 0) {
        var u = this.lineCtx.categoryAxisCorrection + h.config.markers.offsetX;
        h.globals.isXNumeric && (u = (h.globals.seriesX[a][0] - h.globals.minX) / this.lineCtx.xRatio + h.config.markers.offsetX), d.push(u), c.push(z.isNumber(t[s][0]) ? n + h.config.markers.offsetY : null), d.push(i + h.config.markers.offsetX), c.push(z.isNumber(t[s][o + 1]) ? r + h.config.markers.offsetY : null);
      } else d.push(i + h.config.markers.offsetX), c.push(z.isNumber(t[s][o + 1]) ? r + h.config.markers.offsetY : null);
      return { x: d, y: c };
    } }, { key: "checkPreviousPaths", value: function(e) {
      for (var t = e.pathFromLine, a = e.pathFromArea, i = e.realIndex, r = this.w, s = 0; s < r.globals.previousPaths.length; s++) {
        var o = r.globals.previousPaths[s];
        (o.type === "line" || o.type === "area") && o.paths.length > 0 && parseInt(o.realIndex, 10) === parseInt(i, 10) && (o.type === "line" ? (this.lineCtx.appendPathFrom = !1, t = r.globals.previousPaths[s].paths[0].d) : o.type === "area" && (this.lineCtx.appendPathFrom = !1, a = r.globals.previousPaths[s].paths[0].d, r.config.stroke.show && r.globals.previousPaths[s].paths[1] && (t = r.globals.previousPaths[s].paths[1].d)));
      }
      return { pathFromLine: t, pathFromArea: a };
    } }, { key: "determineFirstPrevY", value: function(e) {
      var t, a, i, r = e.i, s = e.realIndex, o = e.series, n = e.prevY, h = e.lineYPosition, d = e.translationsIndex, c = this.w, u = c.config.chart.stacked && !c.globals.comboCharts || c.config.chart.stacked && c.globals.comboCharts && (!this.w.config.chart.stackOnlyBar || ((t = this.w.config.series[s]) === null || t === void 0 ? void 0 : t.type) === "bar" || ((a = this.w.config.series[s]) === null || a === void 0 ? void 0 : a.type) === "column");
      if (((i = o[r]) === null || i === void 0 ? void 0 : i[0]) !== void 0) n = (h = u && r > 0 ? this.lineCtx.prevSeriesY[r - 1][0] : this.lineCtx.zeroY) - o[r][0] / this.lineCtx.yRatio[d] + 2 * (this.lineCtx.isReversed ? o[r][0] / this.lineCtx.yRatio[d] : 0);
      else if (u && r > 0 && o[r][0] === void 0) {
        for (var p = r - 1; p >= 0; p--) if (o[p][0] !== null && o[p][0] !== void 0) {
          n = h = this.lineCtx.prevSeriesY[p][0];
          break;
        }
      }
      return { prevY: n, lineYPosition: h };
    } }]), y;
  }(), wi = function(y) {
    for (var e, t, a, i, r = function(d) {
      for (var c = [], u = d[0], p = d[1], m = c[0] = Jt(u, p), f = 1, b = d.length - 1; f < b; f++) u = p, p = d[f + 1], c[f] = 0.5 * (m + (m = Jt(u, p)));
      return c[f] = m, c;
    }(y), s = y.length - 1, o = [], n = 0; n < s; n++) a = Jt(y[n], y[n + 1]), Math.abs(a) < 1e-6 ? r[n] = r[n + 1] = 0 : (i = (e = r[n] / a) * e + (t = r[n + 1] / a) * t) > 9 && (i = 3 * a / Math.sqrt(i), r[n] = i * e, r[n + 1] = i * t);
    for (var h = 0; h <= s; h++) i = (y[Math.min(s, h + 1)][0] - y[Math.max(0, h - 1)][0]) / (6 * (1 + r[h] * r[h])), o.push([i || 0, r[h] * i || 0]);
    return o;
  }, Si = function(y) {
    var e = wi(y), t = y[1], a = y[0], i = [], r = e[1], s = e[0];
    i.push(a, [a[0] + s[0], a[1] + s[1], t[0] - r[0], t[1] - r[1], t[0], t[1]]);
    for (var o = 2, n = e.length; o < n; o++) {
      var h = y[o], d = e[o];
      i.push([h[0] - d[0], h[1] - d[1], h[0], h[1]]);
    }
    return i;
  }, ki = function(y, e, t) {
    var a = y.slice(e, t);
    if (e) {
      if (t - e > 1 && a[1].length < 6) {
        var i = a[0].length;
        a[1] = [2 * a[0][i - 2] - a[0][i - 4], 2 * a[0][i - 1] - a[0][i - 3]].concat(a[1]);
      }
      a[0] = a[0].slice(-2);
    }
    return a;
  };
  function Jt(y, e) {
    return (e[1] - y[1]) / (e[0] - y[0]);
  }
  var Kt = function() {
    function y(e, t, a) {
      T(this, y), this.ctx = e, this.w = e.w, this.xyRatios = t, this.pointsChart = !(this.w.config.chart.type !== "bubble" && this.w.config.chart.type !== "scatter") || a, this.scatter = new pa(this.ctx), this.noNegatives = this.w.globals.minX === Number.MAX_VALUE, this.lineHelpers = new yi(this), this.markers = new ut(this.ctx), this.prevSeriesY = [], this.categoryAxisCorrection = 0, this.yaxisIndex = 0;
    }
    return E(y, [{ key: "draw", value: function(e, t, a, i) {
      var r, s = this.w, o = new X(this.ctx), n = s.globals.comboCharts ? t : s.config.chart.type, h = o.group({ class: "apexcharts-".concat(n, "-series apexcharts-plot-series") }), d = new Te(this.ctx, s);
      this.yRatio = this.xyRatios.yRatio, this.zRatio = this.xyRatios.zRatio, this.xRatio = this.xyRatios.xRatio, this.baseLineY = this.xyRatios.baseLineY, e = d.getLogSeries(e), this.yRatio = d.getLogYRatios(this.yRatio), this.prevSeriesY = [];
      for (var c = [], u = 0; u < e.length; u++) {
        e = this.lineHelpers.sameValueSeriesFix(u, e);
        var p = s.globals.comboCharts ? a[u] : u, m = this.yRatio.length > 1 ? p : 0;
        this._initSerieVariables(e, u, p);
        var f = [], b = [], v = [], w = s.globals.padHorizontal + this.categoryAxisCorrection;
        this.ctx.series.addCollapsedClassToSeries(this.elSeries, p), s.globals.isXNumeric && s.globals.seriesX.length > 0 && (w = (s.globals.seriesX[p][0] - s.globals.minX) / this.xRatio), v.push(w);
        var l, g = w, x = void 0, k = g, S = this.zeroY, A = this.zeroY;
        S = this.lineHelpers.determineFirstPrevY({ i: u, realIndex: p, series: e, prevY: S, lineYPosition: 0, translationsIndex: m }).prevY, s.config.stroke.curve === "monotoneCubic" && e[u][0] === null ? f.push(null) : f.push(S), l = S, n === "rangeArea" && (x = A = this.lineHelpers.determineFirstPrevY({ i: u, realIndex: p, series: i, prevY: A, lineYPosition: 0, translationsIndex: m }).prevY, b.push(f[0] !== null ? A : null));
        var L = this._calculatePathsFrom({ type: n, series: e, i: u, realIndex: p, translationsIndex: m, prevX: k, prevY: S, prevY2: A }), I = [f[0]], F = [b[0]], B = { type: n, series: e, realIndex: p, translationsIndex: m, i: u, x: w, y: 1, pX: g, pY: l, pathsFrom: L, linePaths: [], areaPaths: [], seriesIndex: a, lineYPosition: 0, xArrj: v, yArrj: f, y2Arrj: b, seriesRangeEnd: i }, G = this._iterateOverDataPoints(H(H({}, B), {}, { iterations: n === "rangeArea" ? e[u].length - 1 : void 0, isRangeStart: !0 }));
        if (n === "rangeArea") {
          for (var W = this._calculatePathsFrom({ series: i, i: u, realIndex: p, prevX: k, prevY: A }), q = this._iterateOverDataPoints(H(H({}, B), {}, { series: i, xArrj: [w], yArrj: I, y2Arrj: F, pY: x, areaPaths: G.areaPaths, pathsFrom: W, iterations: i[u].length - 1, isRangeStart: !1 })), ee = G.linePaths.length / 2, ae = 0; ae < ee; ae++) G.linePaths[ae] = q.linePaths[ae + ee] + G.linePaths[ae];
          G.linePaths.splice(ee), G.pathFromLine = q.pathFromLine + G.pathFromLine;
        } else G.pathFromArea += "z";
        this._handlePaths({ type: n, realIndex: p, i: u, paths: G }), this.elSeries.add(this.elPointsMain), this.elSeries.add(this.elDataLabelsWrap), c.push(this.elSeries);
      }
      if (((r = s.config.series[0]) === null || r === void 0 ? void 0 : r.zIndex) !== void 0 && c.sort(function(le, xe) {
        return Number(le.node.getAttribute("zIndex")) - Number(xe.node.getAttribute("zIndex"));
      }), s.config.chart.stacked) for (var ne = c.length - 1; ne >= 0; ne--) h.add(c[ne]);
      else for (var ue = 0; ue < c.length; ue++) h.add(c[ue]);
      return h;
    } }, { key: "_initSerieVariables", value: function(e, t, a) {
      var i = this.w, r = new X(this.ctx);
      this.xDivision = i.globals.gridWidth / (i.globals.dataPoints - (i.config.xaxis.tickPlacement === "on" ? 1 : 0)), this.strokeWidth = Array.isArray(i.config.stroke.width) ? i.config.stroke.width[a] : i.config.stroke.width;
      var s = 0;
      this.yRatio.length > 1 && (this.yaxisIndex = i.globals.seriesYAxisReverseMap[a], s = a), this.isReversed = i.config.yaxis[this.yaxisIndex] && i.config.yaxis[this.yaxisIndex].reversed, this.zeroY = i.globals.gridHeight - this.baseLineY[s] - (this.isReversed ? i.globals.gridHeight : 0) + (this.isReversed ? 2 * this.baseLineY[s] : 0), this.areaBottomY = this.zeroY, (this.zeroY > i.globals.gridHeight || i.config.plotOptions.area.fillTo === "end") && (this.areaBottomY = i.globals.gridHeight), this.categoryAxisCorrection = this.xDivision / 2, this.elSeries = r.group({ class: "apexcharts-series", zIndex: i.config.series[a].zIndex !== void 0 ? i.config.series[a].zIndex : a, seriesName: z.escapeString(i.globals.seriesNames[a]) }), this.elPointsMain = r.group({ class: "apexcharts-series-markers-wrap", "data:realIndex": a }), this.elDataLabelsWrap = r.group({ class: "apexcharts-datalabels", "data:realIndex": a });
      var o = e[t].length === i.globals.dataPoints;
      this.elSeries.attr({ "data:longestSeries": o, rel: t + 1, "data:realIndex": a }), this.appendPathFrom = !0;
    } }, { key: "_calculatePathsFrom", value: function(e) {
      var t, a, i, r, s = e.type, o = e.series, n = e.i, h = e.realIndex, d = e.translationsIndex, c = e.prevX, u = e.prevY, p = e.prevY2, m = this.w, f = new X(this.ctx);
      if (o[n][0] === null) {
        for (var b = 0; b < o[n].length; b++) if (o[n][b] !== null) {
          c = this.xDivision * b, u = this.zeroY - o[n][b] / this.yRatio[d], t = f.move(c, u), a = f.move(c, this.areaBottomY);
          break;
        }
      } else t = f.move(c, u), s === "rangeArea" && (t = f.move(c, p) + f.line(c, u)), a = f.move(c, this.areaBottomY) + f.line(c, u);
      if (i = f.move(0, this.zeroY) + f.line(0, this.zeroY), r = f.move(0, this.zeroY) + f.line(0, this.zeroY), m.globals.previousPaths.length > 0) {
        var v = this.lineHelpers.checkPreviousPaths({ pathFromLine: i, pathFromArea: r, realIndex: h });
        i = v.pathFromLine, r = v.pathFromArea;
      }
      return { prevX: c, prevY: u, linePath: t, areaPath: a, pathFromLine: i, pathFromArea: r };
    } }, { key: "_handlePaths", value: function(e) {
      var t = e.type, a = e.realIndex, i = e.i, r = e.paths, s = this.w, o = new X(this.ctx), n = new Ke(this.ctx);
      this.prevSeriesY.push(r.yArrj), s.globals.seriesXvalues[a] = r.xArrj, s.globals.seriesYvalues[a] = r.yArrj;
      var h = s.config.forecastDataPoints;
      if (h.count > 0 && t !== "rangeArea") {
        var d = s.globals.seriesXvalues[a][s.globals.seriesXvalues[a].length - h.count - 1], c = o.drawRect(d, 0, s.globals.gridWidth, s.globals.gridHeight, 0);
        s.globals.dom.elForecastMask.appendChild(c.node);
        var u = o.drawRect(0, 0, d, s.globals.gridHeight, 0);
        s.globals.dom.elNonForecastMask.appendChild(u.node);
      }
      this.pointsChart || s.globals.delayedElements.push({ el: this.elPointsMain.node, index: a });
      var p = { i, realIndex: a, animationDelay: i, initialSpeed: s.config.chart.animations.speed, dataChangeSpeed: s.config.chart.animations.dynamicAnimation.speed, className: "apexcharts-".concat(t) };
      if (t === "area") for (var m = n.fillPath({ seriesNumber: a }), f = 0; f < r.areaPaths.length; f++) {
        var b = o.renderPaths(H(H({}, p), {}, { pathFrom: r.pathFromArea, pathTo: r.areaPaths[f], stroke: "none", strokeWidth: 0, strokeLineCap: null, fill: m }));
        this.elSeries.add(b);
      }
      if (s.config.stroke.show && !this.pointsChart) {
        var v = null;
        if (t === "line") v = n.fillPath({ seriesNumber: a, i });
        else if (s.config.stroke.fill.type === "solid") v = s.globals.stroke.colors[a];
        else {
          var w = s.config.fill;
          s.config.fill = s.config.stroke.fill, v = n.fillPath({ seriesNumber: a, i }), s.config.fill = w;
        }
        for (var l = 0; l < r.linePaths.length; l++) {
          var g = v;
          t === "rangeArea" && (g = n.fillPath({ seriesNumber: a }));
          var x = H(H({}, p), {}, { pathFrom: r.pathFromLine, pathTo: r.linePaths[l], stroke: v, strokeWidth: this.strokeWidth, strokeLineCap: s.config.stroke.lineCap, fill: t === "rangeArea" ? g : "none" }), k = o.renderPaths(x);
          if (this.elSeries.add(k), k.attr("fill-rule", "evenodd"), h.count > 0 && t !== "rangeArea") {
            var S = o.renderPaths(x);
            S.node.setAttribute("stroke-dasharray", h.dashArray), h.strokeWidth && S.node.setAttribute("stroke-width", h.strokeWidth), this.elSeries.add(S), S.attr("clip-path", "url(#forecastMask".concat(s.globals.cuid, ")")), k.attr("clip-path", "url(#nonForecastMask".concat(s.globals.cuid, ")"));
          }
        }
      }
    } }, { key: "_iterateOverDataPoints", value: function(e) {
      var t, a, i = this, r = e.type, s = e.series, o = e.iterations, n = e.realIndex, h = e.translationsIndex, d = e.i, c = e.x, u = e.y, p = e.pX, m = e.pY, f = e.pathsFrom, b = e.linePaths, v = e.areaPaths, w = e.seriesIndex, l = e.lineYPosition, g = e.xArrj, x = e.yArrj, k = e.y2Arrj, S = e.isRangeStart, A = e.seriesRangeEnd, L = this.w, I = new X(this.ctx), F = this.yRatio, B = f.prevY, G = f.linePath, W = f.areaPath, q = f.pathFromLine, ee = f.pathFromArea, ae = z.isNumber(L.globals.minYArr[n]) ? L.globals.minYArr[n] : L.globals.minY;
      o || (o = L.globals.dataPoints > 1 ? L.globals.dataPoints - 1 : L.globals.dataPoints);
      var ne = function(Fe, Re) {
        return Re - Fe / F[h] + 2 * (i.isReversed ? Fe / F[h] : 0);
      }, ue = u, le = L.config.chart.stacked && !L.globals.comboCharts || L.config.chart.stacked && L.globals.comboCharts && (!this.w.config.chart.stackOnlyBar || ((t = this.w.config.series[n]) === null || t === void 0 ? void 0 : t.type) === "bar" || ((a = this.w.config.series[n]) === null || a === void 0 ? void 0 : a.type) === "column"), xe = L.config.stroke.curve;
      Array.isArray(xe) && (xe = Array.isArray(w) ? xe[w[d]] : xe[d]);
      for (var ze, Ve = 0, Me = 0; Me < o; Me++) {
        var _e = s[d][Me + 1] === void 0 || s[d][Me + 1] === null;
        if (L.globals.isXNumeric) {
          var ke = L.globals.seriesX[n][Me + 1];
          L.globals.seriesX[n][Me + 1] === void 0 && (ke = L.globals.seriesX[n][o - 1]), c = (ke - L.globals.minX) / this.xRatio;
        } else c += this.xDivision;
        le ? d > 0 && L.globals.collapsedSeries.length < L.config.series.length - 1 ? l = this.prevSeriesY[function(Fe) {
          for (var Re = Fe; Re > 0; Re--) {
            if (!(L.globals.collapsedSeriesIndices.indexOf((w == null ? void 0 : w[Re]) || Re) > -1)) return Re;
            Re--;
          }
          return 0;
        }(d - 1)][Me + 1] : l = this.zeroY : l = this.zeroY, _e ? u = ne(ae, l) : (u = ne(s[d][Me + 1], l), r === "rangeArea" && (ue = ne(A[d][Me + 1], l))), g.push(c), !_e || L.config.stroke.curve !== "smooth" && L.config.stroke.curve !== "monotoneCubic" ? (x.push(u), k.push(ue)) : (x.push(null), k.push(null));
        var we = this.lineHelpers.calculatePoints({ series: s, x: c, y: u, realIndex: n, i: d, j: Me, prevY: B }), Ae = this._createPaths({ type: r, series: s, i: d, realIndex: n, j: Me, x: c, y: u, y2: ue, xArrj: g, yArrj: x, y2Arrj: k, pX: p, pY: m, pathState: Ve, segmentStartX: ze, linePath: G, areaPath: W, linePaths: b, areaPaths: v, curve: xe, isRangeStart: S });
        v = Ae.areaPaths, b = Ae.linePaths, p = Ae.pX, m = Ae.pY, Ve = Ae.pathState, ze = Ae.segmentStartX, W = Ae.areaPath, G = Ae.linePath, !this.appendPathFrom || xe === "monotoneCubic" && r === "rangeArea" || (q += I.line(c, this.zeroY), ee += I.line(c, this.zeroY)), this.handleNullDataPoints(s, we, d, Me, n), this._handleMarkersAndLabels({ type: r, pointsPos: we, i: d, j: Me, realIndex: n, isRangeStart: S });
      }
      return { yArrj: x, xArrj: g, pathFromArea: ee, areaPaths: v, pathFromLine: q, linePaths: b, linePath: G, areaPath: W };
    } }, { key: "_handleMarkersAndLabels", value: function(e) {
      var t = e.type, a = e.pointsPos, i = e.isRangeStart, r = e.i, s = e.j, o = e.realIndex, n = this.w, h = new gt(this.ctx);
      if (this.pointsChart) this.scatter.draw(this.elSeries, s, { realIndex: o, pointsPos: a, zRatio: this.zRatio, elParent: this.elPointsMain });
      else {
        n.globals.series[r].length > 1 && this.elPointsMain.node.classList.add("apexcharts-element-hidden");
        var d = this.markers.plotChartMarkers(a, o, s + 1);
        d !== null && this.elPointsMain.add(d);
      }
      var c = h.drawDataLabel({ type: t, isRangeStart: i, pos: a, i: o, j: s + 1 });
      c !== null && this.elDataLabelsWrap.add(c);
    } }, { key: "_createPaths", value: function(e) {
      var t = e.type, a = e.series, i = e.i;
      e.realIndex;
      var r, s = e.j, o = e.x, n = e.y, h = e.xArrj, d = e.yArrj, c = e.y2, u = e.y2Arrj, p = e.pX, m = e.pY, f = e.pathState, b = e.segmentStartX, v = e.linePath, w = e.areaPath, l = e.linePaths, g = e.areaPaths, x = e.curve, k = e.isRangeStart, S = new X(this.ctx), A = this.areaBottomY, L = t === "rangeArea", I = t === "rangeArea" && k;
      switch (x) {
        case "monotoneCubic":
          var F = k ? d : u;
          switch (f) {
            case 0:
              if (F[s + 1] === null) break;
              f = 1;
            case 1:
              if (!(L ? h.length === a[i].length : s === a[i].length - 2)) break;
            case 2:
              var B = k ? h : h.slice().reverse(), G = k ? F : F.slice().reverse(), W = (r = G, B.map(function(ke, we) {
                return [ke, r[we]];
              }).filter(function(ke) {
                return ke[1] !== null;
              })), q = W.length > 1 ? Si(W) : W, ee = [];
              L && (I ? g = W : ee = g.reverse());
              var ae = 0, ne = 0;
              if (function(ke, we) {
                for (var Ae = function(yt) {
                  var Ye = [], it = 0;
                  return yt.forEach(function(Ii) {
                    Ii !== null ? it++ : it > 0 && (Ye.push(it), it = 0);
                  }), it > 0 && Ye.push(it), Ye;
                }(ke), Fe = [], Re = 0, et = 0; Re < Ae.length; et += Ae[Re++]) Fe[Re] = ki(we, et, et + Ae[Re]);
                return Fe;
              }(G, q).forEach(function(ke) {
                ae++;
                var we = function(Re) {
                  for (var et = "", yt = 0; yt < Re.length; yt++) {
                    var Ye = Re[yt], it = Ye.length;
                    it > 4 ? (et += "C".concat(Ye[0], ", ").concat(Ye[1]), et += ", ".concat(Ye[2], ", ").concat(Ye[3]), et += ", ".concat(Ye[4], ", ").concat(Ye[5])) : it > 2 && (et += "S".concat(Ye[0], ", ").concat(Ye[1]), et += ", ".concat(Ye[2], ", ").concat(Ye[3]));
                  }
                  return et;
                }(ke), Ae = ne, Fe = (ne += ke.length) - 1;
                I ? v = S.move(W[Ae][0], W[Ae][1]) + we : L ? v = S.move(ee[Ae][0], ee[Ae][1]) + S.line(W[Ae][0], W[Ae][1]) + we + S.line(ee[Fe][0], ee[Fe][1]) : (v = S.move(W[Ae][0], W[Ae][1]) + we, w = v + S.line(W[Fe][0], A) + S.line(W[Ae][0], A) + "z", g.push(w)), l.push(v);
              }), L && ae > 1 && !I) {
                var ue = l.slice(ae).reverse();
                l.splice(ae), ue.forEach(function(ke) {
                  return l.push(ke);
                });
              }
              f = 0;
          }
          break;
        case "smooth":
          var le = 0.35 * (o - p);
          if (a[i][s] === null) f = 0;
          else switch (f) {
            case 0:
              if (b = p, v = I ? S.move(p, u[s]) + S.line(p, m) : S.move(p, m), w = S.move(p, m), a[i][s + 1] === null) {
                l.push(v), g.push(w);
                break;
              }
              if (f = 1, s < a[i].length - 2) {
                var xe = S.curve(p + le, m, o - le, n, o, n);
                v += xe, w += xe;
                break;
              }
            case 1:
              if (a[i][s + 1] === null) v += I ? S.line(p, c) : S.move(p, m), w += S.line(p, A) + S.line(b, A) + "z", l.push(v), g.push(w), f = -1;
              else {
                var ze = S.curve(p + le, m, o - le, n, o, n);
                v += ze, w += ze, s >= a[i].length - 2 && (I && (v += S.curve(o, n, o, n, o, c) + S.move(o, c)), w += S.curve(o, n, o, n, o, A) + S.line(b, A) + "z", l.push(v), g.push(w), f = -1);
              }
          }
          p = o, m = n;
          break;
        default:
          var Ve = function(ke, we, Ae) {
            var Fe = [];
            switch (ke) {
              case "stepline":
                Fe = S.line(we, null, "H") + S.line(null, Ae, "V");
                break;
              case "linestep":
                Fe = S.line(null, Ae, "V") + S.line(we, null, "H");
                break;
              case "straight":
                Fe = S.line(we, Ae);
            }
            return Fe;
          };
          if (a[i][s] === null) f = 0;
          else switch (f) {
            case 0:
              if (b = p, v = I ? S.move(p, u[s]) + S.line(p, m) : S.move(p, m), w = S.move(p, m), a[i][s + 1] === null) {
                l.push(v), g.push(w);
                break;
              }
              if (f = 1, s < a[i].length - 2) {
                var Me = Ve(x, o, n);
                v += Me, w += Me;
                break;
              }
            case 1:
              if (a[i][s + 1] === null) v += I ? S.line(p, c) : S.move(p, m), w += S.line(p, A) + S.line(b, A) + "z", l.push(v), g.push(w), f = -1;
              else {
                var _e = Ve(x, o, n);
                v += _e, w += _e, s >= a[i].length - 2 && (I && (v += S.line(o, c)), w += S.line(o, A) + S.line(b, A) + "z", l.push(v), g.push(w), f = -1);
              }
          }
          p = o, m = n;
      }
      return { linePaths: l, areaPaths: g, pX: p, pY: m, pathState: f, segmentStartX: b, linePath: v, areaPath: w };
    } }, { key: "handleNullDataPoints", value: function(e, t, a, i, r) {
      var s = this.w;
      if (e[a][i] === null && s.config.markers.showNullDataPoints || e[a].length === 1) {
        var o = this.strokeWidth - s.config.markers.strokeWidth / 2;
        o > 0 || (o = 0);
        var n = this.markers.plotChartMarkers(t, r, i + 1, o, !0);
        n !== null && this.elPointsMain.add(n);
      }
    } }]), y;
  }();
  window.TreemapSquared = {}, window.TreemapSquared.generate = /* @__PURE__ */ function() {
    function y(o, n, h, d) {
      this.xoffset = o, this.yoffset = n, this.height = d, this.width = h, this.shortestEdge = function() {
        return Math.min(this.height, this.width);
      }, this.getCoordinates = function(c) {
        var u, p = [], m = this.xoffset, f = this.yoffset, b = r(c) / this.height, v = r(c) / this.width;
        if (this.width >= this.height) for (u = 0; u < c.length; u++) p.push([m, f, m + b, f + c[u] / b]), f += c[u] / b;
        else for (u = 0; u < c.length; u++) p.push([m, f, m + c[u] / v, f + v]), m += c[u] / v;
        return p;
      }, this.cutArea = function(c) {
        var u;
        if (this.width >= this.height) {
          var p = c / this.height, m = this.width - p;
          u = new y(this.xoffset + p, this.yoffset, m, this.height);
        } else {
          var f = c / this.width, b = this.height - f;
          u = new y(this.xoffset, this.yoffset + f, this.width, b);
        }
        return u;
      };
    }
    function e(o, n, h, d, c) {
      d = d === void 0 ? 0 : d, c = c === void 0 ? 0 : c;
      var u = t(function(p, m) {
        var f, b = [], v = m / r(p);
        for (f = 0; f < p.length; f++) b[f] = p[f] * v;
        return b;
      }(o, n * h), [], new y(d, c, n, h), []);
      return function(p) {
        var m, f, b = [];
        for (m = 0; m < p.length; m++) for (f = 0; f < p[m].length; f++) b.push(p[m][f]);
        return b;
      }(u);
    }
    function t(o, n, h, d) {
      var c, u, p;
      if (o.length !== 0) return c = h.shortestEdge(), function(m, f, b) {
        var v;
        if (m.length === 0) return !0;
        (v = m.slice()).push(f);
        var w = a(m, b), l = a(v, b);
        return w >= l;
      }(n, u = o[0], c) ? (n.push(u), t(o.slice(1), n, h, d)) : (p = h.cutArea(r(n), d), d.push(h.getCoordinates(n)), t(o, [], p, d)), d;
      d.push(h.getCoordinates(n));
    }
    function a(o, n) {
      var h = Math.min.apply(Math, o), d = Math.max.apply(Math, o), c = r(o);
      return Math.max(Math.pow(n, 2) * d / Math.pow(c, 2), Math.pow(c, 2) / (Math.pow(n, 2) * h));
    }
    function i(o) {
      return o && o.constructor === Array;
    }
    function r(o) {
      var n, h = 0;
      for (n = 0; n < o.length; n++) h += o[n];
      return h;
    }
    function s(o) {
      var n, h = 0;
      if (i(o[0])) for (n = 0; n < o.length; n++) h += s(o[n]);
      else h = r(o);
      return h;
    }
    return function o(n, h, d, c, u) {
      c = c === void 0 ? 0 : c, u = u === void 0 ? 0 : u;
      var p, m, f = [], b = [];
      if (i(n[0])) {
        for (m = 0; m < n.length; m++) f[m] = s(n[m]);
        for (p = e(f, h, d, c, u), m = 0; m < n.length; m++) b.push(o(n[m], p[m][2] - p[m][0], p[m][3] - p[m][1], p[m][0], p[m][1]));
      } else b = e(n, h, d, c, u);
      return b;
    };
  }();
  var lt, Tt, Ai = function() {
    function y(e, t) {
      T(this, y), this.ctx = e, this.w = e.w, this.strokeWidth = this.w.config.stroke.width, this.helpers = new ka(e), this.dynamicAnim = this.w.config.chart.animations.dynamicAnimation, this.labels = [];
    }
    return E(y, [{ key: "draw", value: function(e) {
      var t = this, a = this.w, i = new X(this.ctx), r = new Ke(this.ctx), s = i.group({ class: "apexcharts-treemap" });
      if (a.globals.noData) return s;
      var o = [];
      return e.forEach(function(n) {
        var h = n.map(function(d) {
          return Math.abs(d);
        });
        o.push(h);
      }), this.negRange = this.helpers.checkColorRange(), a.config.series.forEach(function(n, h) {
        n.data.forEach(function(d) {
          Array.isArray(t.labels[h]) || (t.labels[h] = []), t.labels[h].push(d.x);
        });
      }), window.TreemapSquared.generate(o, a.globals.gridWidth, a.globals.gridHeight).forEach(function(n, h) {
        var d = i.group({ class: "apexcharts-series apexcharts-treemap-series", seriesName: z.escapeString(a.globals.seriesNames[h]), rel: h + 1, "data:realIndex": h });
        if (a.config.chart.dropShadow.enabled) {
          var c = a.config.chart.dropShadow;
          new Pe(t.ctx).dropShadow(s, c, h);
        }
        var u = i.group({ class: "apexcharts-data-labels" });
        n.forEach(function(p, m) {
          var f = p[0], b = p[1], v = p[2], w = p[3], l = i.drawRect(f, b, v - f, w - b, a.config.plotOptions.treemap.borderRadius, "#fff", 1, t.strokeWidth, a.config.plotOptions.treemap.useFillColorAsStroke ? x : a.globals.stroke.colors[h]);
          l.attr({ cx: f, cy: b, index: h, i: h, j: m, width: v - f, height: w - b });
          var g = t.helpers.getShadeColor(a.config.chart.type, h, m, t.negRange), x = g.color;
          a.config.series[h].data[m] !== void 0 && a.config.series[h].data[m].fillColor && (x = a.config.series[h].data[m].fillColor);
          var k = r.fillPath({ color: x, seriesNumber: h, dataPointIndex: m });
          l.node.classList.add("apexcharts-treemap-rect"), l.attr({ fill: k }), t.helpers.addListeners(l);
          var S = { x: f + (v - f) / 2, y: b + (w - b) / 2, width: 0, height: 0 }, A = { x: f, y: b, width: v - f, height: w - b };
          if (a.config.chart.animations.enabled && !a.globals.dataChanged) {
            var L = 1;
            a.globals.resized || (L = a.config.chart.animations.speed), t.animateTreemap(l, S, A, L);
          }
          if (a.globals.dataChanged) {
            var I = 1;
            t.dynamicAnim.enabled && a.globals.shouldAnimate && (I = t.dynamicAnim.speed, a.globals.previousPaths[h] && a.globals.previousPaths[h][m] && a.globals.previousPaths[h][m].rect && (S = a.globals.previousPaths[h][m].rect), t.animateTreemap(l, S, A, I));
          }
          var F = t.getFontSize(p), B = a.config.dataLabels.formatter(t.labels[h][m], { value: a.globals.series[h][m], seriesIndex: h, dataPointIndex: m, w: a });
          a.config.plotOptions.treemap.dataLabels.format === "truncate" && (F = parseInt(a.config.dataLabels.style.fontSize, 10), B = t.truncateLabels(B, F, f, b, v, w));
          var G = null;
          a.globals.series[h][m] && (G = t.helpers.calculateDataLabels({ text: B, x: (f + v) / 2, y: (b + w) / 2 + t.strokeWidth / 2 + F / 3, i: h, j: m, colorProps: g, fontSize: F, series: e })), a.config.dataLabels.enabled && G && t.rotateToFitLabel(G, F, B, f, b, v, w), d.add(l), G !== null && d.add(G);
        }), d.add(u), s.add(d);
      }), s;
    } }, { key: "getFontSize", value: function(e) {
      var t = this.w, a, i, r, s, o = function n(h) {
        var d, c = 0;
        if (Array.isArray(h[0])) for (d = 0; d < h.length; d++) c += n(h[d]);
        else for (d = 0; d < h.length; d++) c += h[d].length;
        return c;
      }(this.labels) / function n(h) {
        var d, c = 0;
        if (Array.isArray(h[0])) for (d = 0; d < h.length; d++) c += n(h[d]);
        else for (d = 0; d < h.length; d++) c += 1;
        return c;
      }(this.labels);
      return a = e[2] - e[0], i = e[3] - e[1], r = a * i, s = Math.pow(r, 0.5), Math.min(s / o, parseInt(t.config.dataLabels.style.fontSize, 10));
    } }, { key: "rotateToFitLabel", value: function(e, t, a, i, r, s, o) {
      var n = new X(this.ctx), h = n.getTextRects(a, t);
      if (h.width + this.w.config.stroke.width + 5 > s - i && h.width <= o - r) {
        var d = n.rotateAroundCenter(e.node);
        e.node.setAttribute("transform", "rotate(-90 ".concat(d.x, " ").concat(d.y, ") translate(").concat(h.height / 3, ")"));
      }
    } }, { key: "truncateLabels", value: function(e, t, a, i, r, s) {
      var o = new X(this.ctx), n = o.getTextRects(e, t).width + this.w.config.stroke.width + 5 > r - a && s - i > r - a ? s - i : r - a, h = o.getTextBasedOnMaxWidth({ text: e, maxWidth: n, fontSize: t });
      return e.length !== h.length && n / t < 5 ? "" : h;
    } }, { key: "animateTreemap", value: function(e, t, a, i) {
      var r = new ye(this.ctx);
      r.animateRect(e, { x: t.x, y: t.y, width: t.width, height: t.height }, { x: a.x, y: a.y, width: a.width, height: a.height }, i, function() {
        r.animationCompleted(e);
      });
    } }]), y;
  }(), Pa = 86400, Ci = 10 / Pa, Pi = function() {
    function y(e) {
      T(this, y), this.ctx = e, this.w = e.w, this.timeScaleArray = [], this.utc = this.w.config.xaxis.labels.datetimeUTC;
    }
    return E(y, [{ key: "calculateTimeScaleTicks", value: function(e, t) {
      var a = this, i = this.w;
      if (i.globals.allSeriesCollapsed) return i.globals.labels = [], i.globals.timescaleLabels = [], [];
      var r = new de(this.ctx), s = (t - e) / 864e5;
      this.determineInterval(s), i.globals.disableZoomIn = !1, i.globals.disableZoomOut = !1, s < Ci ? i.globals.disableZoomIn = !0 : s > 5e4 && (i.globals.disableZoomOut = !0);
      var o = r.getTimeUnitsfromTimestamp(e, t, this.utc), n = i.globals.gridWidth / s, h = n / 24, d = h / 60, c = d / 60, u = Math.floor(24 * s), p = Math.floor(1440 * s), m = Math.floor(s * Pa), f = Math.floor(s), b = Math.floor(s / 30), v = Math.floor(s / 365), w = { minMillisecond: o.minMillisecond, minSecond: o.minSecond, minMinute: o.minMinute, minHour: o.minHour, minDate: o.minDate, minMonth: o.minMonth, minYear: o.minYear }, l = { firstVal: w, currentMillisecond: w.minMillisecond, currentSecond: w.minSecond, currentMinute: w.minMinute, currentHour: w.minHour, currentMonthDate: w.minDate, currentDate: w.minDate, currentMonth: w.minMonth, currentYear: w.minYear, daysWidthOnXAxis: n, hoursWidthOnXAxis: h, minutesWidthOnXAxis: d, secondsWidthOnXAxis: c, numberOfSeconds: m, numberOfMinutes: p, numberOfHours: u, numberOfDays: f, numberOfMonths: b, numberOfYears: v };
      switch (this.tickInterval) {
        case "years":
          this.generateYearScale(l);
          break;
        case "months":
        case "half_year":
          this.generateMonthScale(l);
          break;
        case "months_days":
        case "months_fortnight":
        case "days":
        case "week_days":
          this.generateDayScale(l);
          break;
        case "hours":
          this.generateHourScale(l);
          break;
        case "minutes_fives":
        case "minutes":
          this.generateMinuteScale(l);
          break;
        case "seconds_tens":
        case "seconds_fives":
        case "seconds":
          this.generateSecondScale(l);
      }
      var g = this.timeScaleArray.map(function(x) {
        var k = { position: x.position, unit: x.unit, year: x.year, day: x.day ? x.day : 1, hour: x.hour ? x.hour : 0, month: x.month + 1 };
        return x.unit === "month" ? H(H({}, k), {}, { day: 1, value: x.value + 1 }) : x.unit === "day" || x.unit === "hour" ? H(H({}, k), {}, { value: x.value }) : x.unit === "minute" ? H(H({}, k), {}, { value: x.value, minute: x.value }) : x.unit === "second" ? H(H({}, k), {}, { value: x.value, minute: x.minute, second: x.second }) : x;
      });
      return g.filter(function(x) {
        var k = 1, S = Math.ceil(i.globals.gridWidth / 120), A = x.value;
        i.config.xaxis.tickAmount !== void 0 && (S = i.config.xaxis.tickAmount), g.length > S && (k = Math.floor(g.length / S));
        var L = !1, I = !1;
        switch (a.tickInterval) {
          case "years":
            x.unit === "year" && (L = !0);
            break;
          case "half_year":
            k = 7, x.unit === "year" && (L = !0);
            break;
          case "months":
            k = 1, x.unit === "year" && (L = !0);
            break;
          case "months_fortnight":
            k = 15, x.unit !== "year" && x.unit !== "month" || (L = !0), A === 30 && (I = !0);
            break;
          case "months_days":
            k = 10, x.unit === "month" && (L = !0), A === 30 && (I = !0);
            break;
          case "week_days":
            k = 8, x.unit === "month" && (L = !0);
            break;
          case "days":
            k = 1, x.unit === "month" && (L = !0);
            break;
          case "hours":
            x.unit === "day" && (L = !0);
            break;
          case "minutes_fives":
          case "seconds_fives":
            A % 5 != 0 && (I = !0);
            break;
          case "seconds_tens":
            A % 10 != 0 && (I = !0);
        }
        if (a.tickInterval === "hours" || a.tickInterval === "minutes_fives" || a.tickInterval === "seconds_tens" || a.tickInterval === "seconds_fives") {
          if (!I) return !0;
        } else if ((A % k == 0 || L) && !I) return !0;
      });
    } }, { key: "recalcDimensionsBasedOnFormat", value: function(e, t) {
      var a = this.w, i = this.formatDates(e), r = this.removeOverlappingTS(i);
      a.globals.timescaleLabels = r.slice(), new Mt(this.ctx).plotCoords();
    } }, { key: "determineInterval", value: function(e) {
      var t = 24 * e, a = 60 * t;
      switch (!0) {
        case e / 365 > 5:
          this.tickInterval = "years";
          break;
        case e > 800:
          this.tickInterval = "half_year";
          break;
        case e > 180:
          this.tickInterval = "months";
          break;
        case e > 90:
          this.tickInterval = "months_fortnight";
          break;
        case e > 60:
          this.tickInterval = "months_days";
          break;
        case e > 30:
          this.tickInterval = "week_days";
          break;
        case e > 2:
          this.tickInterval = "days";
          break;
        case t > 2.4:
          this.tickInterval = "hours";
          break;
        case a > 15:
          this.tickInterval = "minutes_fives";
          break;
        case a > 5:
          this.tickInterval = "minutes";
          break;
        case a > 1:
          this.tickInterval = "seconds_tens";
          break;
        case 60 * a > 20:
          this.tickInterval = "seconds_fives";
          break;
        default:
          this.tickInterval = "seconds";
      }
    } }, { key: "generateYearScale", value: function(e) {
      var t = e.firstVal, a = e.currentMonth, i = e.currentYear, r = e.daysWidthOnXAxis, s = e.numberOfYears, o = t.minYear, n = 0, h = new de(this.ctx), d = "year";
      if (t.minDate > 1 || t.minMonth > 0) {
        var c = h.determineRemainingDaysOfYear(t.minYear, t.minMonth, t.minDate);
        n = (h.determineDaysOfYear(t.minYear) - c + 1) * r, o = t.minYear + 1, this.timeScaleArray.push({ position: n, value: o, unit: d, year: o, month: z.monthMod(a + 1) });
      } else t.minDate === 1 && t.minMonth === 0 && this.timeScaleArray.push({ position: n, value: o, unit: d, year: i, month: z.monthMod(a + 1) });
      for (var u = o, p = n, m = 0; m < s; m++) u++, p = h.determineDaysOfYear(u - 1) * r + p, this.timeScaleArray.push({ position: p, value: u, unit: d, year: u, month: 1 });
    } }, { key: "generateMonthScale", value: function(e) {
      var t = e.firstVal, a = e.currentMonthDate, i = e.currentMonth, r = e.currentYear, s = e.daysWidthOnXAxis, o = e.numberOfMonths, n = i, h = 0, d = new de(this.ctx), c = "month", u = 0;
      if (t.minDate > 1) {
        h = (d.determineDaysOfMonths(i + 1, t.minYear) - a + 1) * s, n = z.monthMod(i + 1);
        var p = r + u, m = z.monthMod(n), f = n;
        n === 0 && (c = "year", f = p, m = 1, p += u += 1), this.timeScaleArray.push({ position: h, value: f, unit: c, year: p, month: m });
      } else this.timeScaleArray.push({ position: h, value: n, unit: c, year: r, month: z.monthMod(i) });
      for (var b = n + 1, v = h, w = 0, l = 1; w < o; w++, l++) {
        (b = z.monthMod(b)) === 0 ? (c = "year", u += 1) : c = "month";
        var g = this._getYear(r, b, u);
        v = d.determineDaysOfMonths(b, g) * s + v;
        var x = b === 0 ? g : b;
        this.timeScaleArray.push({ position: v, value: x, unit: c, year: g, month: b === 0 ? 1 : b }), b++;
      }
    } }, { key: "generateDayScale", value: function(e) {
      var t = e.firstVal, a = e.currentMonth, i = e.currentYear, r = e.hoursWidthOnXAxis, s = e.numberOfDays, o = new de(this.ctx), n = "day", h = t.minDate + 1, d = h, c = function(l, g, x) {
        return l > o.determineDaysOfMonths(g + 1, x) && (d = 1, n = "month", p = g += 1), g;
      }, u = (24 - t.minHour) * r, p = h, m = c(d, a, i);
      t.minHour === 0 && t.minDate === 1 ? (u = 0, p = z.monthMod(t.minMonth), n = "month", d = t.minDate) : t.minDate !== 1 && t.minHour === 0 && t.minMinute === 0 && (u = 0, h = t.minDate, p = h, m = c(d = h, a, i)), this.timeScaleArray.push({ position: u, value: p, unit: n, year: this._getYear(i, m, 0), month: z.monthMod(m), day: d });
      for (var f = u, b = 0; b < s; b++) {
        n = "day", m = c(d += 1, m, this._getYear(i, m, 0));
        var v = this._getYear(i, m, 0);
        f = 24 * r + f;
        var w = d === 1 ? z.monthMod(m) : d;
        this.timeScaleArray.push({ position: f, value: w, unit: n, year: v, month: z.monthMod(m), day: w });
      }
    } }, { key: "generateHourScale", value: function(e) {
      var t = e.firstVal, a = e.currentDate, i = e.currentMonth, r = e.currentYear, s = e.minutesWidthOnXAxis, o = e.numberOfHours, n = new de(this.ctx), h = "hour", d = function(k, S) {
        return k > n.determineDaysOfMonths(S + 1, r) && (b = 1, S += 1), { month: S, date: b };
      }, c = function(k, S) {
        return k > n.determineDaysOfMonths(S + 1, r) ? S += 1 : S;
      }, u = 60 - (t.minMinute + t.minSecond / 60), p = u * s, m = t.minHour + 1, f = m;
      u === 60 && (p = 0, f = m = t.minHour);
      var b = a;
      f >= 24 && (f = 0, b += 1, h = "day");
      var v = d(b, i).month;
      v = c(b, v), this.timeScaleArray.push({ position: p, value: m, unit: h, day: b, hour: f, year: r, month: z.monthMod(v) }), f++;
      for (var w = p, l = 0; l < o; l++) {
        h = "hour", f >= 24 && (f = 0, h = "day", v = d(b += 1, v).month, v = c(b, v));
        var g = this._getYear(r, v, 0);
        w = 60 * s + w;
        var x = f === 0 ? b : f;
        this.timeScaleArray.push({ position: w, value: x, unit: h, hour: f, day: b, year: g, month: z.monthMod(v) }), f++;
      }
    } }, { key: "generateMinuteScale", value: function(e) {
      for (var t = e.currentMillisecond, a = e.currentSecond, i = e.currentMinute, r = e.currentHour, s = e.currentDate, o = e.currentMonth, n = e.currentYear, h = e.minutesWidthOnXAxis, d = e.secondsWidthOnXAxis, c = e.numberOfMinutes, u = i + 1, p = s, m = o, f = n, b = r, v = (60 - a - t / 1e3) * d, w = 0; w < c; w++) u >= 60 && (u = 0, (b += 1) === 24 && (b = 0)), this.timeScaleArray.push({ position: v, value: u, unit: "minute", hour: b, minute: u, day: p, year: this._getYear(f, m, 0), month: z.monthMod(m) }), v += h, u++;
    } }, { key: "generateSecondScale", value: function(e) {
      for (var t = e.currentMillisecond, a = e.currentSecond, i = e.currentMinute, r = e.currentHour, s = e.currentDate, o = e.currentMonth, n = e.currentYear, h = e.secondsWidthOnXAxis, d = e.numberOfSeconds, c = a + 1, u = i, p = s, m = o, f = n, b = r, v = (1e3 - t) / 1e3 * h, w = 0; w < d; w++) c >= 60 && (c = 0, ++u >= 60 && (u = 0, ++b === 24 && (b = 0))), this.timeScaleArray.push({ position: v, value: c, unit: "second", hour: b, minute: u, second: c, day: p, year: this._getYear(f, m, 0), month: z.monthMod(m) }), v += h, c++;
    } }, { key: "createRawDateString", value: function(e, t) {
      var a = e.year;
      return e.month === 0 && (e.month = 1), a += "-" + ("0" + e.month.toString()).slice(-2), e.unit === "day" ? a += e.unit === "day" ? "-" + ("0" + t).slice(-2) : "-01" : a += "-" + ("0" + (e.day ? e.day : "1")).slice(-2), e.unit === "hour" ? a += e.unit === "hour" ? "T" + ("0" + t).slice(-2) : "T00" : a += "T" + ("0" + (e.hour ? e.hour : "0")).slice(-2), e.unit === "minute" ? a += ":" + ("0" + t).slice(-2) : a += ":" + (e.minute ? ("0" + e.minute).slice(-2) : "00"), e.unit === "second" ? a += ":" + ("0" + t).slice(-2) : a += ":00", this.utc && (a += ".000Z"), a;
    } }, { key: "formatDates", value: function(e) {
      var t = this, a = this.w;
      return e.map(function(i) {
        var r = i.value.toString(), s = new de(t.ctx), o = t.createRawDateString(i, r), n = s.getDate(s.parseDate(o));
        if (t.utc || (n = s.getDate(s.parseDateWithTimezone(o))), a.config.xaxis.labels.format === void 0) {
          var h = "dd MMM", d = a.config.xaxis.labels.datetimeFormatter;
          i.unit === "year" && (h = d.year), i.unit === "month" && (h = d.month), i.unit === "day" && (h = d.day), i.unit === "hour" && (h = d.hour), i.unit === "minute" && (h = d.minute), i.unit === "second" && (h = d.second), r = s.formatDate(n, h);
        } else r = s.formatDate(n, a.config.xaxis.labels.format);
        return { dateString: o, position: i.position, value: r, unit: i.unit, year: i.year, month: i.month };
      });
    } }, { key: "removeOverlappingTS", value: function(e) {
      var t, a = this, i = new X(this.ctx), r = !1;
      e.length > 0 && e[0].value && e.every(function(n) {
        return n.value.length === e[0].value.length;
      }) && (r = !0, t = i.getTextRects(e[0].value).width);
      var s = 0, o = e.map(function(n, h) {
        if (h > 0 && a.w.config.xaxis.labels.hideOverlappingLabels) {
          var d = r ? t : i.getTextRects(e[s].value).width, c = e[s].position;
          return n.position > c + d + 10 ? (s = h, n) : null;
        }
        return n;
      });
      return o = o.filter(function(n) {
        return n !== null;
      });
    } }, { key: "_getYear", value: function(e, t, a) {
      return e + Math.floor(t / 12) + a;
    } }]), y;
  }(), Li = function() {
    function y(e, t) {
      T(this, y), this.ctx = t, this.w = t.w, this.el = e;
    }
    return E(y, [{ key: "setupElements", value: function() {
      var e = this.w, t = e.globals, a = e.config, i = a.chart.type;
      t.axisCharts = ["line", "area", "bar", "rangeBar", "rangeArea", "candlestick", "boxPlot", "scatter", "bubble", "radar", "heatmap", "treemap"].includes(i), t.xyCharts = ["line", "area", "bar", "rangeBar", "rangeArea", "candlestick", "boxPlot", "scatter", "bubble"].includes(i), t.isBarHorizontal = ["bar", "rangeBar", "boxPlot"].includes(i) && a.plotOptions.bar.horizontal, t.chartClass = ".apexcharts".concat(t.chartID), t.dom.baseEl = this.el, t.dom.elWrap = document.createElement("div"), X.setAttrs(t.dom.elWrap, { id: t.chartClass.substring(1), class: "apexcharts-canvas ".concat(t.chartClass.substring(1)) }), this.el.appendChild(t.dom.elWrap), t.dom.Paper = new window.SVG.Doc(t.dom.elWrap), t.dom.Paper.attr({ class: "apexcharts-svg", "xmlns:data": "ApexChartsNS", transform: "translate(".concat(a.chart.offsetX, ", ").concat(a.chart.offsetY, ")") }), t.dom.Paper.node.style.background = a.theme.mode !== "dark" || a.chart.background ? a.theme.mode !== "light" || a.chart.background ? a.chart.background : "#fff" : "#424242", this.setSVGDimensions(), t.dom.elLegendForeign = document.createElementNS(t.SVGNS, "foreignObject"), X.setAttrs(t.dom.elLegendForeign, { x: 0, y: 0, width: t.svgWidth, height: t.svgHeight }), t.dom.elLegendWrap = document.createElement("div"), t.dom.elLegendWrap.classList.add("apexcharts-legend"), t.dom.elLegendWrap.setAttribute("xmlns", "http://www.w3.org/1999/xhtml"), t.dom.elLegendForeign.appendChild(t.dom.elLegendWrap), t.dom.Paper.node.appendChild(t.dom.elLegendForeign), t.dom.elGraphical = t.dom.Paper.group().attr({ class: "apexcharts-inner apexcharts-graphical" }), t.dom.elDefs = t.dom.Paper.defs(), t.dom.Paper.add(t.dom.elGraphical), t.dom.elGraphical.add(t.dom.elDefs);
    } }, { key: "plotChartType", value: function(e, t) {
      var a = this.w, i = this.ctx, r = a.config, s = a.globals, o = { line: { series: [], i: [] }, area: { series: [], i: [] }, scatter: { series: [], i: [] }, bubble: { series: [], i: [] }, column: { series: [], i: [] }, candlestick: { series: [], i: [] }, boxPlot: { series: [], i: [] }, rangeBar: { series: [], i: [] }, rangeArea: { series: [], seriesRangeEnd: [], i: [] } }, n = r.chart.type || "line", h = null, d = 0;
      s.series.forEach(function(k, S) {
        var A = e[S].type || n;
        o[A] ? (A === "rangeArea" ? (o[A].series.push(s.seriesRangeStart[S]), o[A].seriesRangeEnd.push(s.seriesRangeEnd[S])) : o[A].series.push(k), o[A].i.push(S), A !== "column" && A !== "bar" || (a.globals.columnSeries = o.column)) : ["heatmap", "treemap", "pie", "donut", "polarArea", "radialBar", "radar"].includes(A) ? h = A : A === "bar" ? (o.column.series.push(k), o.column.i.push(S)) : console.warn("You have specified an unrecognized series type (".concat(A, ").")), n !== A && A !== "scatter" && d++;
      }), d > 0 && (h && console.warn("Chart or series type ".concat(h, " cannot appear with other chart or series types.")), o.column.series.length > 0 && r.plotOptions.bar.horizontal && (d -= o.column.series.length, o.column = { series: [], i: [] }, a.globals.columnSeries = { series: [], i: [] }, console.warn("Horizontal bars are not supported in a mixed/combo chart. Please turn off `plotOptions.bar.horizontal`"))), s.comboCharts || (s.comboCharts = d > 0);
      var c = new Kt(i, t), u = new qt(i, t);
      i.pie = new Ca(i);
      var p = new bi(i);
      i.rangeBar = new vi(i, t);
      var m = new xi(i), f = [];
      if (s.comboCharts) {
        var b, v, w = new Te(i);
        if (o.area.series.length > 0 && (b = f).push.apply(b, K(w.drawSeriesByGroup(o.area, s.areaGroups, "area", c))), o.column.series.length > 0) if (r.chart.stacked) {
          var l = new Sa(i, t);
          f.push(l.draw(o.column.series, o.column.i));
        } else i.bar = new pt(i, t), f.push(i.bar.draw(o.column.series, o.column.i));
        if (o.rangeArea.series.length > 0 && f.push(c.draw(o.rangeArea.series, "rangeArea", o.rangeArea.i, o.rangeArea.seriesRangeEnd)), o.line.series.length > 0 && (v = f).push.apply(v, K(w.drawSeriesByGroup(o.line, s.lineGroups, "line", c))), o.candlestick.series.length > 0 && f.push(u.draw(o.candlestick.series, "candlestick", o.candlestick.i)), o.boxPlot.series.length > 0 && f.push(u.draw(o.boxPlot.series, "boxPlot", o.boxPlot.i)), o.rangeBar.series.length > 0 && f.push(i.rangeBar.draw(o.rangeBar.series, o.rangeBar.i)), o.scatter.series.length > 0) {
          var g = new Kt(i, t, !0);
          f.push(g.draw(o.scatter.series, "scatter", o.scatter.i));
        }
        if (o.bubble.series.length > 0) {
          var x = new Kt(i, t, !0);
          f.push(x.draw(o.bubble.series, "bubble", o.bubble.i));
        }
      } else switch (r.chart.type) {
        case "line":
          f = c.draw(s.series, "line");
          break;
        case "area":
          f = c.draw(s.series, "area");
          break;
        case "bar":
          r.chart.stacked ? f = new Sa(i, t).draw(s.series) : (i.bar = new pt(i, t), f = i.bar.draw(s.series));
          break;
        case "candlestick":
          f = new qt(i, t).draw(s.series, "candlestick");
          break;
        case "boxPlot":
          f = new qt(i, t).draw(s.series, r.chart.type);
          break;
        case "rangeBar":
          f = i.rangeBar.draw(s.series);
          break;
        case "rangeArea":
          f = c.draw(s.seriesRangeStart, "rangeArea", void 0, s.seriesRangeEnd);
          break;
        case "heatmap":
          f = new mi(i, t).draw(s.series);
          break;
        case "treemap":
          f = new Ai(i, t).draw(s.series);
          break;
        case "pie":
        case "donut":
        case "polarArea":
          f = i.pie.draw(s.series);
          break;
        case "radialBar":
          f = p.draw(s.series);
          break;
        case "radar":
          f = m.draw(s.series);
          break;
        default:
          f = c.draw(s.series);
      }
      return f;
    } }, { key: "setSVGDimensions", value: function() {
      var e = this.w, t = e.globals, a = e.config;
      a.chart.width = a.chart.width || "100%", a.chart.height = a.chart.height || "auto", t.svgWidth = a.chart.width, t.svgHeight = a.chart.height;
      var i = z.getDimensions(this.el), r = a.chart.width.toString().split(/[0-9]+/g).pop();
      r === "%" ? z.isNumber(i[0]) && (i[0].width === 0 && (i = z.getDimensions(this.el.parentNode)), t.svgWidth = i[0] * parseInt(a.chart.width, 10) / 100) : r !== "px" && r !== "" || (t.svgWidth = parseInt(a.chart.width, 10));
      var s = String(a.chart.height).toString().split(/[0-9]+/g).pop();
      if (t.svgHeight !== "auto" && t.svgHeight !== "") if (s === "%") {
        var o = z.getDimensions(this.el.parentNode);
        t.svgHeight = o[1] * parseInt(a.chart.height, 10) / 100;
      } else t.svgHeight = parseInt(a.chart.height, 10);
      else t.svgHeight = t.axisCharts ? t.svgWidth / 1.61 : t.svgWidth / 1.2;
      if (t.svgWidth = Math.max(t.svgWidth, 0), t.svgHeight = Math.max(t.svgHeight, 0), X.setAttrs(t.dom.Paper.node, { width: t.svgWidth, height: t.svgHeight }), s !== "%") {
        var n = a.chart.sparkline.enabled ? 0 : t.axisCharts ? a.chart.parentHeightOffset : 0;
        t.dom.Paper.node.parentNode.parentNode.style.minHeight = "".concat(t.svgHeight + n, "px");
      }
      t.dom.elWrap.style.width = "".concat(t.svgWidth, "px"), t.dom.elWrap.style.height = "".concat(t.svgHeight, "px");
    } }, { key: "shiftGraphPosition", value: function() {
      var e = this.w.globals, t = e.translateY, a = e.translateX;
      X.setAttrs(e.dom.elGraphical.node, { transform: "translate(".concat(a, ", ").concat(t, ")") });
    } }, { key: "resizeNonAxisCharts", value: function() {
      var e = this.w, t = e.globals, a = 0, i = e.config.chart.sparkline.enabled ? 1 : 15;
      i += e.config.grid.padding.bottom, ["top", "bottom"].includes(e.config.legend.position) && e.config.legend.show && !e.config.legend.floating && (a = new xa(this.ctx).legendHelpers.getLegendDimensions().clwh + 7);
      var r = e.globals.dom.baseEl.querySelector(".apexcharts-radialbar, .apexcharts-pie"), s = 2.05 * e.globals.radialSize;
      if (r && !e.config.chart.sparkline.enabled && e.config.plotOptions.radialBar.startAngle !== 0) {
        var o = z.getBoundingClientRect(r);
        s = o.bottom;
        var n = o.bottom - o.top;
        s = Math.max(2.05 * e.globals.radialSize, n);
      }
      var h = Math.ceil(s + t.translateY + a + i);
      t.dom.elLegendForeign && t.dom.elLegendForeign.setAttribute("height", h), e.config.chart.height && String(e.config.chart.height).includes("%") || (t.dom.elWrap.style.height = "".concat(h, "px"), X.setAttrs(t.dom.Paper.node, { height: h }), t.dom.Paper.node.parentNode.parentNode.style.minHeight = "".concat(h, "px"));
    } }, { key: "coreCalculations", value: function() {
      new $t(this.ctx).init();
    } }, { key: "resetGlobals", value: function() {
      var e = this, t = function() {
        return e.w.config.series.map(function() {
          return [];
        });
      }, a = new ga(), i = this.w.globals;
      a.initGlobalVars(i), i.seriesXvalues = t(), i.seriesYvalues = t();
    } }, { key: "isMultipleY", value: function() {
      return !!(Array.isArray(this.w.config.yaxis) && this.w.config.yaxis.length > 1) && (this.w.globals.isMultipleYAxis = !0, !0);
    } }, { key: "xySettings", value: function() {
      var e = this.w, t = null;
      if (e.globals.axisCharts) {
        if (e.config.xaxis.crosshairs.position === "back" && new Zt(this.ctx).drawXCrosshairs(), e.config.yaxis[0].crosshairs.position === "back" && new Zt(this.ctx).drawYCrosshairs(), e.config.xaxis.type === "datetime" && e.config.xaxis.labels.formatter === void 0) {
          this.ctx.timeScale = new Pi(this.ctx);
          var a = [];
          isFinite(e.globals.minX) && isFinite(e.globals.maxX) && !e.globals.isBarHorizontal ? a = this.ctx.timeScale.calculateTimeScaleTicks(e.globals.minX, e.globals.maxX) : e.globals.isBarHorizontal && (a = this.ctx.timeScale.calculateTimeScaleTicks(e.globals.minY, e.globals.maxY)), this.ctx.timeScale.recalcDimensionsBasedOnFormat(a);
        }
        t = new Te(this.ctx).getCalculatedRatios();
      }
      return t;
    } }, { key: "updateSourceChart", value: function(e) {
      this.ctx.w.globals.selection = void 0, this.ctx.updateHelpers._updateOptions({ chart: { selection: { xaxis: { min: e.w.globals.minX, max: e.w.globals.maxX } } } }, !1, !1);
    } }, { key: "setupBrushHandler", value: function() {
      var e = this, t = this.w;
      if (t.config.chart.brush.enabled && typeof t.config.chart.events.selection != "function") {
        var a = Array.isArray(t.config.chart.brush.targets) ? t.config.chart.brush.targets : [t.config.chart.brush.target];
        a.forEach(function(i) {
          var r = ApexCharts.getChartByID(i);
          r.w.globals.brushSource = e.ctx, typeof r.w.config.chart.events.zoomed != "function" && (r.w.config.chart.events.zoomed = function() {
            return e.updateSourceChart(r);
          }), typeof r.w.config.chart.events.scrolled != "function" && (r.w.config.chart.events.scrolled = function() {
            return e.updateSourceChart(r);
          });
        }), t.config.chart.events.selection = function(i, r) {
          a.forEach(function(s) {
            ApexCharts.getChartByID(s).ctx.updateHelpers._updateOptions({ xaxis: { min: r.xaxis.min, max: r.xaxis.max } }, !1, !1, !1, !1);
          });
        };
      }
    } }]), y;
  }(), Mi = function() {
    function y(e) {
      T(this, y), this.ctx = e, this.w = e.w;
    }
    return E(y, [{ key: "_updateOptions", value: function(e) {
      var t = this, a = arguments.length > 1 && arguments[1] !== void 0 && arguments[1], i = !(arguments.length > 2 && arguments[2] !== void 0) || arguments[2], r = !(arguments.length > 3 && arguments[3] !== void 0) || arguments[3], s = arguments.length > 4 && arguments[4] !== void 0 && arguments[4];
      return new Promise(function(o) {
        var n = [t.ctx];
        r && (n = t.ctx.getSyncedCharts()), t.ctx.w.globals.isExecCalled && (n = [t.ctx], t.ctx.w.globals.isExecCalled = !1), n.forEach(function(h, d) {
          var c = h.w;
          if (c.globals.shouldAnimate = i, a || (c.globals.resized = !0, c.globals.dataChanged = !0, i && h.series.getPreviousPaths()), e && he(e) === "object" && (h.config = new bt(e), e = Te.extendArrayProps(h.config, e, c), h.w.globals.chartID !== t.ctx.w.globals.chartID && delete e.series, c.config = z.extend(c.config, e), s && (c.globals.lastXAxis = e.xaxis ? z.clone(e.xaxis) : [], c.globals.lastYAxis = e.yaxis ? z.clone(e.yaxis) : [], c.globals.initialConfig = z.extend({}, c.config), c.globals.initialSeries = z.clone(c.config.series), e.series))) {
            for (var u = 0; u < c.globals.collapsedSeriesIndices.length; u++) {
              var p = c.config.series[c.globals.collapsedSeriesIndices[u]];
              c.globals.collapsedSeries[u].data = c.globals.axisCharts ? p.data.slice() : p;
            }
            for (var m = 0; m < c.globals.ancillaryCollapsedSeriesIndices.length; m++) {
              var f = c.config.series[c.globals.ancillaryCollapsedSeriesIndices[m]];
              c.globals.ancillaryCollapsedSeries[m].data = c.globals.axisCharts ? f.data.slice() : f;
            }
            h.series.emptyCollapsedSeries(c.config.series);
          }
          return h.update(e).then(function() {
            d === n.length - 1 && o(h);
          });
        });
      });
    } }, { key: "_updateSeries", value: function(e, t) {
      var a = this, i = arguments.length > 2 && arguments[2] !== void 0 && arguments[2];
      return new Promise(function(r) {
        var s, o = a.w;
        return o.globals.shouldAnimate = t, o.globals.dataChanged = !0, t && a.ctx.series.getPreviousPaths(), o.globals.axisCharts ? ((s = e.map(function(n, h) {
          return a._extendSeries(n, h);
        })).length === 0 && (s = [{ data: [] }]), o.config.series = s) : o.config.series = e.slice(), i && (o.globals.initialConfig.series = z.clone(o.config.series), o.globals.initialSeries = z.clone(o.config.series)), a.ctx.update().then(function() {
          r(a.ctx);
        });
      });
    } }, { key: "_extendSeries", value: function(e, t) {
      var a = this.w, i = a.config.series[t];
      return H(H({}, a.config.series[t]), {}, { name: e.name ? e.name : i == null ? void 0 : i.name, color: e.color ? e.color : i == null ? void 0 : i.color, type: e.type ? e.type : i == null ? void 0 : i.type, group: e.group ? e.group : i == null ? void 0 : i.group, hidden: e.hidden !== void 0 ? e.hidden : i == null ? void 0 : i.hidden, data: e.data ? e.data : i == null ? void 0 : i.data, zIndex: e.zIndex !== void 0 ? e.zIndex : t });
    } }, { key: "toggleDataPointSelection", value: function(e, t) {
      var a = this.w, i = null, r = ".apexcharts-series[data\\:realIndex='".concat(e, "']");
      return a.globals.axisCharts ? i = a.globals.dom.Paper.select("".concat(r, " path[j='").concat(t, "'], ").concat(r, " circle[j='").concat(t, "'], ").concat(r, " rect[j='").concat(t, "']")).members[0] : t === void 0 && (i = a.globals.dom.Paper.select("".concat(r, " path[j='").concat(e, "']")).members[0], a.config.chart.type !== "pie" && a.config.chart.type !== "polarArea" && a.config.chart.type !== "donut" || this.ctx.pie.pieClicked(e)), i ? (new X(this.ctx).pathMouseDown(i, null), i.node ? i.node : null) : (console.warn("toggleDataPointSelection: Element not found"), null);
    } }, { key: "forceXAxisUpdate", value: function(e) {
      var t = this.w;
      if (["min", "max"].forEach(function(i) {
        e.xaxis[i] !== void 0 && (t.config.xaxis[i] = e.xaxis[i], t.globals.lastXAxis[i] = e.xaxis[i]);
      }), e.xaxis.categories && e.xaxis.categories.length && (t.config.xaxis.categories = e.xaxis.categories), t.config.xaxis.convertedCatToNumeric) {
        var a = new xt(e);
        e = a.convertCatToNumericXaxis(e, this.ctx);
      }
      return e;
    } }, { key: "forceYAxisUpdate", value: function(e) {
      return e.chart && e.chart.stacked && e.chart.stackType === "100%" && (Array.isArray(e.yaxis) ? e.yaxis.forEach(function(t, a) {
        e.yaxis[a].min = 0, e.yaxis[a].max = 100;
      }) : (e.yaxis.min = 0, e.yaxis.max = 100)), e;
    } }, { key: "revertDefaultAxisMinMax", value: function(e) {
      var t = this, a = this.w, i = a.globals.lastXAxis, r = a.globals.lastYAxis;
      e && e.xaxis && (i = e.xaxis), e && e.yaxis && (r = e.yaxis), a.config.xaxis.min = i.min, a.config.xaxis.max = i.max;
      var s = function(o) {
        r[o] !== void 0 && (a.config.yaxis[o].min = r[o].min, a.config.yaxis[o].max = r[o].max);
      };
      a.config.yaxis.map(function(o, n) {
        a.globals.zoomed || r[n] !== void 0 ? s(n) : t.ctx.opts.yaxis[n] !== void 0 && (o.min = t.ctx.opts.yaxis[n].min, o.max = t.ctx.opts.yaxis[n].max);
      });
    } }]), y;
  }();
  lt = typeof window < "u" ? window : void 0, Tt = function(y, e) {
    var t = (this !== void 0 ? this : y).SVG = function(l) {
      if (t.supported) return l = new t.Doc(l), t.parser.draw || t.prepare(), l;
    };
    if (t.ns = "http://www.w3.org/2000/svg", t.xmlns = "http://www.w3.org/2000/xmlns/", t.xlink = "http://www.w3.org/1999/xlink", t.svgjs = "http://svgjs.dev", t.supported = !0, !t.supported) return !1;
    t.did = 1e3, t.eid = function(l) {
      return "Svgjs" + d(l) + t.did++;
    }, t.create = function(l) {
      var g = e.createElementNS(this.ns, l);
      return g.setAttribute("id", this.eid(l)), g;
    }, t.extend = function() {
      var l, g;
      g = (l = [].slice.call(arguments)).pop();
      for (var x = l.length - 1; x >= 0; x--) if (l[x]) for (var k in g) l[x].prototype[k] = g[k];
      t.Set && t.Set.inherit && t.Set.inherit();
    }, t.invent = function(l) {
      var g = typeof l.create == "function" ? l.create : function() {
        this.constructor.call(this, t.create(l.create));
      };
      return l.inherit && (g.prototype = new l.inherit()), l.extend && t.extend(g, l.extend), l.construct && t.extend(l.parent || t.Container, l.construct), g;
    }, t.adopt = function(l) {
      return l ? l.instance ? l.instance : ((g = l.nodeName == "svg" ? l.parentNode instanceof y.SVGElement ? new t.Nested() : new t.Doc() : l.nodeName == "linearGradient" ? new t.Gradient("linear") : l.nodeName == "radialGradient" ? new t.Gradient("radial") : t[d(l.nodeName)] ? new t[d(l.nodeName)]() : new t.Element(l)).type = l.nodeName, g.node = l, l.instance = g, g instanceof t.Doc && g.namespace().defs(), g.setData(JSON.parse(l.getAttribute("svgjs:data")) || {}), g) : null;
      var g;
    }, t.prepare = function() {
      var l = e.getElementsByTagName("body")[0], g = (l ? new t.Doc(l) : t.adopt(e.documentElement).nested()).size(2, 0);
      t.parser = { body: l || e.documentElement, draw: g.style("opacity:0;position:absolute;left:-100%;top:-100%;overflow:hidden").node, poly: g.polyline().node, path: g.path().node, native: t.create("svg") };
    }, t.parser = { native: t.create("svg") }, e.addEventListener("DOMContentLoaded", function() {
      t.parser.draw || t.prepare();
    }, !1), t.regex = { numberAndUnit: /^([+-]?(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?)([a-z%]*)$/i, hex: /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i, rgb: /rgb\((\d+),(\d+),(\d+)\)/, reference: /#([a-z0-9\-_]+)/i, transforms: /\)\s*,?\s*/, whitespace: /\s/g, isHex: /^#[a-f0-9]{3,6}$/i, isRgb: /^rgb\(/, isCss: /[^:]+:[^;]+;?/, isBlank: /^(\s+)?$/, isNumber: /^[+-]?(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i, isPercent: /^-?[\d\.]+%$/, isImage: /\.(jpg|jpeg|png|gif|svg)(\?[^=]+.*)?/i, delimiter: /[\s,]+/, hyphen: /([^e])\-/gi, pathLetters: /[MLHVCSQTAZ]/gi, isPathLetter: /[MLHVCSQTAZ]/i, numbersWithDots: /((\d?\.\d+(?:e[+-]?\d+)?)((?:\.\d+(?:e[+-]?\d+)?)+))+/gi, dots: /\./g }, t.utils = { map: function(l, g) {
      for (var x = l.length, k = [], S = 0; S < x; S++) k.push(g(l[S]));
      return k;
    }, filter: function(l, g) {
      for (var x = l.length, k = [], S = 0; S < x; S++) g(l[S]) && k.push(l[S]);
      return k;
    }, filterSVGElements: function(l) {
      return this.filter(l, function(g) {
        return g instanceof y.SVGElement;
      });
    } }, t.defaults = { attrs: { "fill-opacity": 1, "stroke-opacity": 1, "stroke-width": 0, "stroke-linejoin": "miter", "stroke-linecap": "butt", fill: "#000000", stroke: "#000000", opacity: 1, x: 0, y: 0, cx: 0, cy: 0, width: 0, height: 0, r: 0, rx: 0, ry: 0, offset: 0, "stop-opacity": 1, "stop-color": "#000000", "font-size": 16, "font-family": "Helvetica, Arial, sans-serif", "text-anchor": "start" } }, t.Color = function(l) {
      var g, x;
      this.r = 0, this.g = 0, this.b = 0, l && (typeof l == "string" ? t.regex.isRgb.test(l) ? (g = t.regex.rgb.exec(l.replace(t.regex.whitespace, "")), this.r = parseInt(g[1]), this.g = parseInt(g[2]), this.b = parseInt(g[3])) : t.regex.isHex.test(l) && (g = t.regex.hex.exec((x = l).length == 4 ? ["#", x.substring(1, 2), x.substring(1, 2), x.substring(2, 3), x.substring(2, 3), x.substring(3, 4), x.substring(3, 4)].join("") : x), this.r = parseInt(g[1], 16), this.g = parseInt(g[2], 16), this.b = parseInt(g[3], 16)) : he(l) === "object" && (this.r = l.r, this.g = l.g, this.b = l.b));
    }, t.extend(t.Color, { toString: function() {
      return this.toHex();
    }, toHex: function() {
      return "#" + c(this.r) + c(this.g) + c(this.b);
    }, toRgb: function() {
      return "rgb(" + [this.r, this.g, this.b].join() + ")";
    }, brightness: function() {
      return this.r / 255 * 0.3 + this.g / 255 * 0.59 + this.b / 255 * 0.11;
    }, morph: function(l) {
      return this.destination = new t.Color(l), this;
    }, at: function(l) {
      return this.destination ? (l = l < 0 ? 0 : l > 1 ? 1 : l, new t.Color({ r: ~~(this.r + (this.destination.r - this.r) * l), g: ~~(this.g + (this.destination.g - this.g) * l), b: ~~(this.b + (this.destination.b - this.b) * l) })) : this;
    } }), t.Color.test = function(l) {
      return l += "", t.regex.isHex.test(l) || t.regex.isRgb.test(l);
    }, t.Color.isRgb = function(l) {
      return l && typeof l.r == "number" && typeof l.g == "number" && typeof l.b == "number";
    }, t.Color.isColor = function(l) {
      return t.Color.isRgb(l) || t.Color.test(l);
    }, t.Array = function(l, g) {
      (l = (l || []).valueOf()).length == 0 && g && (l = g.valueOf()), this.value = this.parse(l);
    }, t.extend(t.Array, { toString: function() {
      return this.value.join(" ");
    }, valueOf: function() {
      return this.value;
    }, parse: function(l) {
      return l = l.valueOf(), Array.isArray(l) ? l : this.split(l);
    } }), t.PointArray = function(l, g) {
      t.Array.call(this, l, g || [[0, 0]]);
    }, t.PointArray.prototype = new t.Array(), t.PointArray.prototype.constructor = t.PointArray;
    for (var a = { M: function(l, g, x) {
      return g.x = x.x = l[0], g.y = x.y = l[1], ["M", g.x, g.y];
    }, L: function(l, g) {
      return g.x = l[0], g.y = l[1], ["L", l[0], l[1]];
    }, H: function(l, g) {
      return g.x = l[0], ["H", l[0]];
    }, V: function(l, g) {
      return g.y = l[0], ["V", l[0]];
    }, C: function(l, g) {
      return g.x = l[4], g.y = l[5], ["C", l[0], l[1], l[2], l[3], l[4], l[5]];
    }, Q: function(l, g) {
      return g.x = l[2], g.y = l[3], ["Q", l[0], l[1], l[2], l[3]];
    }, S: function(l, g) {
      return g.x = l[2], g.y = l[3], ["S", l[0], l[1], l[2], l[3]];
    }, Z: function(l, g, x) {
      return g.x = x.x, g.y = x.y, ["Z"];
    } }, i = "mlhvqtcsaz".split(""), r = 0, s = i.length; r < s; ++r) a[i[r]] = /* @__PURE__ */ function(l) {
      return function(g, x, k) {
        if (l == "H") g[0] = g[0] + x.x;
        else if (l == "V") g[0] = g[0] + x.y;
        else if (l == "A") g[5] = g[5] + x.x, g[6] = g[6] + x.y;
        else for (var S = 0, A = g.length; S < A; ++S) g[S] = g[S] + (S % 2 ? x.y : x.x);
        if (a && typeof a[l] == "function") return a[l](g, x, k);
      };
    }(i[r].toUpperCase());
    t.PathArray = function(l, g) {
      t.Array.call(this, l, g || [["M", 0, 0]]);
    }, t.PathArray.prototype = new t.Array(), t.PathArray.prototype.constructor = t.PathArray, t.extend(t.PathArray, { toString: function() {
      return function(l) {
        for (var g = 0, x = l.length, k = ""; g < x; g++) k += l[g][0], l[g][1] != null && (k += l[g][1], l[g][2] != null && (k += " ", k += l[g][2], l[g][3] != null && (k += " ", k += l[g][3], k += " ", k += l[g][4], l[g][5] != null && (k += " ", k += l[g][5], k += " ", k += l[g][6], l[g][7] != null && (k += " ", k += l[g][7])))));
        return k + " ";
      }(this.value);
    }, move: function(l, g) {
      var x = this.bbox();
      return x.x, x.y, this;
    }, at: function(l) {
      if (!this.destination) return this;
      for (var g = this.value, x = this.destination.value, k = [], S = new t.PathArray(), A = 0, L = g.length; A < L; A++) {
        k[A] = [g[A][0]];
        for (var I = 1, F = g[A].length; I < F; I++) k[A][I] = g[A][I] + (x[A][I] - g[A][I]) * l;
        k[A][0] === "A" && (k[A][4] = +(k[A][4] != 0), k[A][5] = +(k[A][5] != 0));
      }
      return S.value = k, S;
    }, parse: function(l) {
      if (l instanceof t.PathArray) return l.valueOf();
      var g, x = { M: 2, L: 2, H: 1, V: 1, C: 6, S: 4, Q: 4, T: 2, A: 7, Z: 0 };
      l = typeof l == "string" ? l.replace(t.regex.numbersWithDots, n).replace(t.regex.pathLetters, " $& ").replace(t.regex.hyphen, "$1 -").trim().split(t.regex.delimiter) : l.reduce(function(F, B) {
        return [].concat.call(F, B);
      }, []);
      var k = [], S = new t.Point(), A = new t.Point(), L = 0, I = l.length;
      do
        t.regex.isPathLetter.test(l[L]) ? (g = l[L], ++L) : g == "M" ? g = "L" : g == "m" && (g = "l"), k.push(a[g].call(null, l.slice(L, L += x[g.toUpperCase()]).map(parseFloat), S, A));
      while (I > L);
      return k;
    }, bbox: function() {
      return t.parser.draw || t.prepare(), t.parser.path.setAttribute("d", this.toString()), t.parser.path.getBBox();
    } }), t.Number = t.invent({ create: function(l, g) {
      this.value = 0, this.unit = g || "", typeof l == "number" ? this.value = isNaN(l) ? 0 : isFinite(l) ? l : l < 0 ? -34e37 : 34e37 : typeof l == "string" ? (g = l.match(t.regex.numberAndUnit)) && (this.value = parseFloat(g[1]), g[5] == "%" ? this.value /= 100 : g[5] == "s" && (this.value *= 1e3), this.unit = g[5]) : l instanceof t.Number && (this.value = l.valueOf(), this.unit = l.unit);
    }, extend: { toString: function() {
      return (this.unit == "%" ? ~~(1e8 * this.value) / 1e6 : this.unit == "s" ? this.value / 1e3 : this.value) + this.unit;
    }, toJSON: function() {
      return this.toString();
    }, valueOf: function() {
      return this.value;
    }, plus: function(l) {
      return l = new t.Number(l), new t.Number(this + l, this.unit || l.unit);
    }, minus: function(l) {
      return l = new t.Number(l), new t.Number(this - l, this.unit || l.unit);
    }, times: function(l) {
      return l = new t.Number(l), new t.Number(this * l, this.unit || l.unit);
    }, divide: function(l) {
      return l = new t.Number(l), new t.Number(this / l, this.unit || l.unit);
    }, to: function(l) {
      var g = new t.Number(this);
      return typeof l == "string" && (g.unit = l), g;
    }, morph: function(l) {
      return this.destination = new t.Number(l), l.relative && (this.destination.value += this.value), this;
    }, at: function(l) {
      return this.destination ? new t.Number(this.destination).minus(this).times(l).plus(this) : this;
    } } }), t.Element = t.invent({ create: function(l) {
      this._stroke = t.defaults.attrs.stroke, this._event = null, this.dom = {}, (this.node = l) && (this.type = l.nodeName, this.node.instance = this, this._stroke = l.getAttribute("stroke") || this._stroke);
    }, extend: { x: function(l) {
      return this.attr("x", l);
    }, y: function(l) {
      return this.attr("y", l);
    }, cx: function(l) {
      return l == null ? this.x() + this.width() / 2 : this.x(l - this.width() / 2);
    }, cy: function(l) {
      return l == null ? this.y() + this.height() / 2 : this.y(l - this.height() / 2);
    }, move: function(l, g) {
      return this.x(l).y(g);
    }, center: function(l, g) {
      return this.cx(l).cy(g);
    }, width: function(l) {
      return this.attr("width", l);
    }, height: function(l) {
      return this.attr("height", l);
    }, size: function(l, g) {
      var x = u(this, l, g);
      return this.width(new t.Number(x.width)).height(new t.Number(x.height));
    }, clone: function(l) {
      this.writeDataToDom();
      var g = f(this.node.cloneNode(!0));
      return l ? l.add(g) : this.after(g), g;
    }, remove: function() {
      return this.parent() && this.parent().removeElement(this), this;
    }, replace: function(l) {
      return this.after(l).remove(), l;
    }, addTo: function(l) {
      return l.put(this);
    }, putIn: function(l) {
      return l.add(this);
    }, id: function(l) {
      return this.attr("id", l);
    }, show: function() {
      return this.style("display", "");
    }, hide: function() {
      return this.style("display", "none");
    }, visible: function() {
      return this.style("display") != "none";
    }, toString: function() {
      return this.attr("id");
    }, classes: function() {
      var l = this.attr("class");
      return l == null ? [] : l.trim().split(t.regex.delimiter);
    }, hasClass: function(l) {
      return this.classes().indexOf(l) != -1;
    }, addClass: function(l) {
      if (!this.hasClass(l)) {
        var g = this.classes();
        g.push(l), this.attr("class", g.join(" "));
      }
      return this;
    }, removeClass: function(l) {
      return this.hasClass(l) && this.attr("class", this.classes().filter(function(g) {
        return g != l;
      }).join(" ")), this;
    }, toggleClass: function(l) {
      return this.hasClass(l) ? this.removeClass(l) : this.addClass(l);
    }, reference: function(l) {
      return t.get(this.attr(l));
    }, parent: function(l) {
      var g = this;
      if (!g.node.parentNode) return null;
      if (g = t.adopt(g.node.parentNode), !l) return g;
      for (; g && g.node instanceof y.SVGElement; ) {
        if (typeof l == "string" ? g.matches(l) : g instanceof l) return g;
        if (!g.node.parentNode || g.node.parentNode.nodeName == "#document") return null;
        g = t.adopt(g.node.parentNode);
      }
    }, doc: function() {
      return this instanceof t.Doc ? this : this.parent(t.Doc);
    }, parents: function(l) {
      var g = [], x = this;
      do {
        if (!(x = x.parent(l)) || !x.node) break;
        g.push(x);
      } while (x.parent);
      return g;
    }, matches: function(l) {
      return function(g, x) {
        return (g.matches || g.matchesSelector || g.msMatchesSelector || g.mozMatchesSelector || g.webkitMatchesSelector || g.oMatchesSelector).call(g, x);
      }(this.node, l);
    }, native: function() {
      return this.node;
    }, svg: function(l) {
      var g = e.createElementNS("http://www.w3.org/2000/svg", "svg");
      if (!(l && this instanceof t.Parent)) return g.appendChild(l = e.createElementNS("http://www.w3.org/2000/svg", "svg")), this.writeDataToDom(), l.appendChild(this.node.cloneNode(!0)), g.innerHTML.replace(/^<svg>/, "").replace(/<\/svg>$/, "");
      g.innerHTML = "<svg>" + l.replace(/\n/, "").replace(/<([\w:-]+)([^<]+?)\/>/g, "<$1$2></$1>") + "</svg>";
      for (var x = 0, k = g.firstChild.childNodes.length; x < k; x++) this.node.appendChild(g.firstChild.firstChild);
      return this;
    }, writeDataToDom: function() {
      return (this.each || this.lines) && (this.each ? this : this.lines()).each(function() {
        this.writeDataToDom();
      }), this.node.removeAttribute("svgjs:data"), Object.keys(this.dom).length && this.node.setAttribute("svgjs:data", JSON.stringify(this.dom)), this;
    }, setData: function(l) {
      return this.dom = l, this;
    }, is: function(l) {
      return function(g, x) {
        return g instanceof x;
      }(this, l);
    } } }), t.easing = { "-": function(l) {
      return l;
    }, "<>": function(l) {
      return -Math.cos(l * Math.PI) / 2 + 0.5;
    }, ">": function(l) {
      return Math.sin(l * Math.PI / 2);
    }, "<": function(l) {
      return 1 - Math.cos(l * Math.PI / 2);
    } }, t.morph = function(l) {
      return function(g, x) {
        return new t.MorphObj(g, x).at(l);
      };
    }, t.Situation = t.invent({ create: function(l) {
      this.init = !1, this.reversed = !1, this.reversing = !1, this.duration = new t.Number(l.duration).valueOf(), this.delay = new t.Number(l.delay).valueOf(), this.start = +/* @__PURE__ */ new Date() + this.delay, this.finish = this.start + this.duration, this.ease = l.ease, this.loop = 0, this.loops = !1, this.animations = {}, this.attrs = {}, this.styles = {}, this.transforms = [], this.once = {};
    } }), t.FX = t.invent({ create: function(l) {
      this._target = l, this.situations = [], this.active = !1, this.situation = null, this.paused = !1, this.lastPos = 0, this.pos = 0, this.absPos = 0, this._speed = 1;
    }, extend: { animate: function(l, g, x) {
      he(l) === "object" && (g = l.ease, x = l.delay, l = l.duration);
      var k = new t.Situation({ duration: l || 1e3, delay: x || 0, ease: t.easing[g || "-"] || g });
      return this.queue(k), this;
    }, target: function(l) {
      return l && l instanceof t.Element ? (this._target = l, this) : this._target;
    }, timeToAbsPos: function(l) {
      return (l - this.situation.start) / (this.situation.duration / this._speed);
    }, absPosToTime: function(l) {
      return this.situation.duration / this._speed * l + this.situation.start;
    }, startAnimFrame: function() {
      this.stopAnimFrame(), this.animationFrame = y.requestAnimationFrame((function() {
        this.step();
      }).bind(this));
    }, stopAnimFrame: function() {
      y.cancelAnimationFrame(this.animationFrame);
    }, start: function() {
      return !this.active && this.situation && (this.active = !0, this.startCurrent()), this;
    }, startCurrent: function() {
      return this.situation.start = +/* @__PURE__ */ new Date() + this.situation.delay / this._speed, this.situation.finish = this.situation.start + this.situation.duration / this._speed, this.initAnimations().step();
    }, queue: function(l) {
      return (typeof l == "function" || l instanceof t.Situation) && this.situations.push(l), this.situation || (this.situation = this.situations.shift()), this;
    }, dequeue: function() {
      return this.stop(), this.situation = this.situations.shift(), this.situation && (this.situation instanceof t.Situation ? this.start() : this.situation.call(this)), this;
    }, initAnimations: function() {
      var l, g = this.situation;
      if (g.init) return this;
      for (var x in g.animations) {
        l = this.target()[x](), Array.isArray(l) || (l = [l]), Array.isArray(g.animations[x]) || (g.animations[x] = [g.animations[x]]);
        for (var k = l.length; k--; ) g.animations[x][k] instanceof t.Number && (l[k] = new t.Number(l[k])), g.animations[x][k] = l[k].morph(g.animations[x][k]);
      }
      for (var x in g.attrs) g.attrs[x] = new t.MorphObj(this.target().attr(x), g.attrs[x]);
      for (var x in g.styles) g.styles[x] = new t.MorphObj(this.target().style(x), g.styles[x]);
      return g.initialTransformation = this.target().matrixify(), g.init = !0, this;
    }, clearQueue: function() {
      return this.situations = [], this;
    }, clearCurrent: function() {
      return this.situation = null, this;
    }, stop: function(l, g) {
      var x = this.active;
      return this.active = !1, g && this.clearQueue(), l && this.situation && (!x && this.startCurrent(), this.atEnd()), this.stopAnimFrame(), this.clearCurrent();
    }, after: function(l) {
      var g = this.last();
      return this.target().on("finished.fx", function x(k) {
        k.detail.situation == g && (l.call(this, g), this.off("finished.fx", x));
      }), this._callStart();
    }, during: function(l) {
      var g = this.last(), x = function(k) {
        k.detail.situation == g && l.call(this, k.detail.pos, t.morph(k.detail.pos), k.detail.eased, g);
      };
      return this.target().off("during.fx", x).on("during.fx", x), this.after(function() {
        this.off("during.fx", x);
      }), this._callStart();
    }, afterAll: function(l) {
      var g = function x(k) {
        l.call(this), this.off("allfinished.fx", x);
      };
      return this.target().off("allfinished.fx", g).on("allfinished.fx", g), this._callStart();
    }, last: function() {
      return this.situations.length ? this.situations[this.situations.length - 1] : this.situation;
    }, add: function(l, g, x) {
      return this.last()[x || "animations"][l] = g, this._callStart();
    }, step: function(l) {
      var g, x, k;
      l || (this.absPos = this.timeToAbsPos(+/* @__PURE__ */ new Date())), this.situation.loops !== !1 ? (g = Math.max(this.absPos, 0), x = Math.floor(g), this.situation.loops === !0 || x < this.situation.loops ? (this.pos = g - x, k = this.situation.loop, this.situation.loop = x) : (this.absPos = this.situation.loops, this.pos = 1, k = this.situation.loop - 1, this.situation.loop = this.situation.loops), this.situation.reversing && (this.situation.reversed = this.situation.reversed != !!((this.situation.loop - k) % 2))) : (this.absPos = Math.min(this.absPos, 1), this.pos = this.absPos), this.pos < 0 && (this.pos = 0), this.situation.reversed && (this.pos = 1 - this.pos);
      var S = this.situation.ease(this.pos);
      for (var A in this.situation.once) A > this.lastPos && A <= S && (this.situation.once[A].call(this.target(), this.pos, S), delete this.situation.once[A]);
      return this.active && this.target().fire("during", { pos: this.pos, eased: S, fx: this, situation: this.situation }), this.situation ? (this.eachAt(), this.pos == 1 && !this.situation.reversed || this.situation.reversed && this.pos == 0 ? (this.stopAnimFrame(), this.target().fire("finished", { fx: this, situation: this.situation }), this.situations.length || (this.target().fire("allfinished"), this.situations.length || (this.target().off(".fx"), this.active = !1)), this.active ? this.dequeue() : this.clearCurrent()) : !this.paused && this.active && this.startAnimFrame(), this.lastPos = S, this) : this;
    }, eachAt: function() {
      var l, g = this, x = this.target(), k = this.situation;
      for (var S in k.animations) l = [].concat(k.animations[S]).map(function(I) {
        return typeof I != "string" && I.at ? I.at(k.ease(g.pos), g.pos) : I;
      }), x[S].apply(x, l);
      for (var S in k.attrs) l = [S].concat(k.attrs[S]).map(function(F) {
        return typeof F != "string" && F.at ? F.at(k.ease(g.pos), g.pos) : F;
      }), x.attr.apply(x, l);
      for (var S in k.styles) l = [S].concat(k.styles[S]).map(function(F) {
        return typeof F != "string" && F.at ? F.at(k.ease(g.pos), g.pos) : F;
      }), x.style.apply(x, l);
      if (k.transforms.length) {
        l = k.initialTransformation, S = 0;
        for (var A = k.transforms.length; S < A; S++) {
          var L = k.transforms[S];
          L instanceof t.Matrix ? l = L.relative ? l.multiply(new t.Matrix().morph(L).at(k.ease(this.pos))) : l.morph(L).at(k.ease(this.pos)) : (L.relative || L.undo(l.extract()), l = l.multiply(L.at(k.ease(this.pos))));
        }
        x.matrix(l);
      }
      return this;
    }, once: function(l, g, x) {
      var k = this.last();
      return x || (l = k.ease(l)), k.once[l] = g, this;
    }, _callStart: function() {
      return setTimeout((function() {
        this.start();
      }).bind(this), 0), this;
    } }, parent: t.Element, construct: { animate: function(l, g, x) {
      return (this.fx || (this.fx = new t.FX(this))).animate(l, g, x);
    }, delay: function(l) {
      return (this.fx || (this.fx = new t.FX(this))).delay(l);
    }, stop: function(l, g) {
      return this.fx && this.fx.stop(l, g), this;
    }, finish: function() {
      return this.fx && this.fx.finish(), this;
    } } }), t.MorphObj = t.invent({ create: function(l, g) {
      return t.Color.isColor(g) ? new t.Color(l).morph(g) : t.regex.delimiter.test(l) ? t.regex.pathLetters.test(l) ? new t.PathArray(l).morph(g) : new t.Array(l).morph(g) : t.regex.numberAndUnit.test(g) ? new t.Number(l).morph(g) : (this.value = l, void (this.destination = g));
    }, extend: { at: function(l, g) {
      return g < 1 ? this.value : this.destination;
    }, valueOf: function() {
      return this.value;
    } } }), t.extend(t.FX, { attr: function(l, g, x) {
      if (he(l) === "object") for (var k in l) this.attr(k, l[k]);
      else this.add(l, g, "attrs");
      return this;
    }, plot: function(l, g, x, k) {
      return arguments.length == 4 ? this.plot([l, g, x, k]) : this.add("plot", new (this.target()).morphArray(l));
    } }), t.Box = t.invent({ create: function(l, g, x, k) {
      if (!(he(l) !== "object" || l instanceof t.Element)) return t.Box.call(this, l.left != null ? l.left : l.x, l.top != null ? l.top : l.y, l.width, l.height);
      var S;
      arguments.length == 4 && (this.x = l, this.y = g, this.width = x, this.height = k), (S = this).x == null && (S.x = 0, S.y = 0, S.width = 0, S.height = 0), S.w = S.width, S.h = S.height, S.x2 = S.x + S.width, S.y2 = S.y + S.height, S.cx = S.x + S.width / 2, S.cy = S.y + S.height / 2;
    } }), t.BBox = t.invent({ create: function(l) {
      if (t.Box.apply(this, [].slice.call(arguments)), l instanceof t.Element) {
        var g;
        try {
          if (!e.documentElement.contains) {
            for (var x = l.node; x.parentNode; ) x = x.parentNode;
            if (x != e) throw new Error("Element not in the dom");
          }
          g = l.node.getBBox();
        } catch {
          if (l instanceof t.Shape) {
            t.parser.draw || t.prepare();
            var k = l.clone(t.parser.draw.instance).show();
            k && k.node && typeof k.node.getBBox == "function" && (g = k.node.getBBox()), k && typeof k.remove == "function" && k.remove();
          } else g = { x: l.node.clientLeft, y: l.node.clientTop, width: l.node.clientWidth, height: l.node.clientHeight };
        }
        t.Box.call(this, g);
      }
    }, inherit: t.Box, parent: t.Element, construct: { bbox: function() {
      return new t.BBox(this);
    } } }), t.BBox.prototype.constructor = t.BBox, t.Matrix = t.invent({ create: function(l) {
      var g = m([1, 0, 0, 1, 0, 0]);
      l = l === null ? g : l instanceof t.Element ? l.matrixify() : typeof l == "string" ? m(l.split(t.regex.delimiter).map(parseFloat)) : arguments.length == 6 ? m([].slice.call(arguments)) : Array.isArray(l) ? m(l) : l && he(l) === "object" ? l : g;
      for (var x = v.length - 1; x >= 0; --x) this[v[x]] = l[v[x]] != null ? l[v[x]] : g[v[x]];
    }, extend: { extract: function() {
      var l = p(this, 0, 1);
      p(this, 1, 0);
      var g = 180 / Math.PI * Math.atan2(l.y, l.x) - 90;
      return { x: this.e, y: this.f, transformedX: (this.e * Math.cos(g * Math.PI / 180) + this.f * Math.sin(g * Math.PI / 180)) / Math.sqrt(this.a * this.a + this.b * this.b), transformedY: (this.f * Math.cos(g * Math.PI / 180) + this.e * Math.sin(-g * Math.PI / 180)) / Math.sqrt(this.c * this.c + this.d * this.d), rotation: g, a: this.a, b: this.b, c: this.c, d: this.d, e: this.e, f: this.f, matrix: new t.Matrix(this) };
    }, clone: function() {
      return new t.Matrix(this);
    }, morph: function(l) {
      return this.destination = new t.Matrix(l), this;
    }, multiply: function(l) {
      return new t.Matrix(this.native().multiply(function(g) {
        return g instanceof t.Matrix || (g = new t.Matrix(g)), g;
      }(l).native()));
    }, inverse: function() {
      return new t.Matrix(this.native().inverse());
    }, translate: function(l, g) {
      return new t.Matrix(this.native().translate(l || 0, g || 0));
    }, native: function() {
      for (var l = t.parser.native.createSVGMatrix(), g = v.length - 1; g >= 0; g--) l[v[g]] = this[v[g]];
      return l;
    }, toString: function() {
      return "matrix(" + b(this.a) + "," + b(this.b) + "," + b(this.c) + "," + b(this.d) + "," + b(this.e) + "," + b(this.f) + ")";
    } }, parent: t.Element, construct: { ctm: function() {
      return new t.Matrix(this.node.getCTM());
    }, screenCTM: function() {
      if (this instanceof t.Nested) {
        var l = this.rect(1, 1), g = l.node.getScreenCTM();
        return l.remove(), new t.Matrix(g);
      }
      return new t.Matrix(this.node.getScreenCTM());
    } } }), t.Point = t.invent({ create: function(l, g) {
      var x;
      x = Array.isArray(l) ? { x: l[0], y: l[1] } : he(l) === "object" ? { x: l.x, y: l.y } : l != null ? { x: l, y: g ?? l } : { x: 0, y: 0 }, this.x = x.x, this.y = x.y;
    }, extend: { clone: function() {
      return new t.Point(this);
    }, morph: function(l, g) {
      return this.destination = new t.Point(l, g), this;
    } } }), t.extend(t.Element, { point: function(l, g) {
      return new t.Point(l, g).transform(this.screenCTM().inverse());
    } }), t.extend(t.Element, { attr: function(l, g, x) {
      if (l == null) {
        for (l = {}, x = (g = this.node.attributes).length - 1; x >= 0; x--) l[g[x].nodeName] = t.regex.isNumber.test(g[x].nodeValue) ? parseFloat(g[x].nodeValue) : g[x].nodeValue;
        return l;
      }
      if (he(l) === "object") for (var k in l) this.attr(k, l[k]);
      else if (g === null) this.node.removeAttribute(l);
      else {
        if (g == null) return (g = this.node.getAttribute(l)) == null ? t.defaults.attrs[l] : t.regex.isNumber.test(g) ? parseFloat(g) : g;
        l == "stroke-width" ? this.attr("stroke", parseFloat(g) > 0 ? this._stroke : null) : l == "stroke" && (this._stroke = g), l != "fill" && l != "stroke" || (t.regex.isImage.test(g) && (g = this.doc().defs().image(g, 0, 0)), g instanceof t.Image && (g = this.doc().defs().pattern(0, 0, function() {
          this.add(g);
        }))), typeof g == "number" ? g = new t.Number(g) : t.Color.isColor(g) ? g = new t.Color(g) : Array.isArray(g) && (g = new t.Array(g)), l == "leading" ? this.leading && this.leading(g) : typeof x == "string" ? this.node.setAttributeNS(x, l, g.toString()) : this.node.setAttribute(l, g.toString()), !this.rebuild || l != "font-size" && l != "x" || this.rebuild(l, g);
      }
      return this;
    } }), t.extend(t.Element, { transform: function(l, g) {
      var x;
      return he(l) !== "object" ? (x = new t.Matrix(this).extract(), typeof l == "string" ? x[l] : x) : (x = new t.Matrix(this), g = !!g || !!l.relative, l.a != null && (x = g ? x.multiply(new t.Matrix(l)) : new t.Matrix(l)), this.attr("transform", x));
    } }), t.extend(t.Element, { untransform: function() {
      return this.attr("transform", null);
    }, matrixify: function() {
      return (this.attr("transform") || "").split(t.regex.transforms).slice(0, -1).map(function(l) {
        var g = l.trim().split("(");
        return [g[0], g[1].split(t.regex.delimiter).map(function(x) {
          return parseFloat(x);
        })];
      }).reduce(function(l, g) {
        return g[0] == "matrix" ? l.multiply(m(g[1])) : l[g[0]].apply(l, g[1]);
      }, new t.Matrix());
    }, toParent: function(l) {
      if (this == l) return this;
      var g = this.screenCTM(), x = l.screenCTM().inverse();
      return this.addTo(l).untransform().transform(x.multiply(g)), this;
    }, toDoc: function() {
      return this.toParent(this.doc());
    } }), t.Transformation = t.invent({ create: function(l, g) {
      if (arguments.length > 1 && typeof g != "boolean") return this.constructor.call(this, [].slice.call(arguments));
      if (Array.isArray(l)) for (var x = 0, k = this.arguments.length; x < k; ++x) this[this.arguments[x]] = l[x];
      else if (l && he(l) === "object") for (x = 0, k = this.arguments.length; x < k; ++x) this[this.arguments[x]] = l[this.arguments[x]];
      this.inversed = !1, g === !0 && (this.inversed = !0);
    } }), t.Translate = t.invent({ parent: t.Matrix, inherit: t.Transformation, create: function(l, g) {
      this.constructor.apply(this, [].slice.call(arguments));
    }, extend: { arguments: ["transformedX", "transformedY"], method: "translate" } }), t.extend(t.Element, { style: function(l, g) {
      if (arguments.length == 0) return this.node.style.cssText || "";
      if (arguments.length < 2) if (he(l) === "object") for (var x in l) this.style(x, l[x]);
      else {
        if (!t.regex.isCss.test(l)) return this.node.style[h(l)];
        for (l = l.split(/\s*;\s*/).filter(function(k) {
          return !!k;
        }).map(function(k) {
          return k.split(/\s*:\s*/);
        }); g = l.pop(); ) this.style(g[0], g[1]);
      }
      else this.node.style[h(l)] = g === null || t.regex.isBlank.test(g) ? "" : g;
      return this;
    } }), t.Parent = t.invent({ create: function(l) {
      this.constructor.call(this, l);
    }, inherit: t.Element, extend: { children: function() {
      return t.utils.map(t.utils.filterSVGElements(this.node.childNodes), function(l) {
        return t.adopt(l);
      });
    }, add: function(l, g) {
      return g == null ? this.node.appendChild(l.node) : l.node != this.node.childNodes[g] && this.node.insertBefore(l.node, this.node.childNodes[g]), this;
    }, put: function(l, g) {
      return this.add(l, g), l;
    }, has: function(l) {
      return this.index(l) >= 0;
    }, index: function(l) {
      return [].slice.call(this.node.childNodes).indexOf(l.node);
    }, get: function(l) {
      return t.adopt(this.node.childNodes[l]);
    }, first: function() {
      return this.get(0);
    }, last: function() {
      return this.get(this.node.childNodes.length - 1);
    }, each: function(l, g) {
      for (var x = this.children(), k = 0, S = x.length; k < S; k++) x[k] instanceof t.Element && l.apply(x[k], [k, x]), g && x[k] instanceof t.Container && x[k].each(l, g);
      return this;
    }, removeElement: function(l) {
      return this.node.removeChild(l.node), this;
    }, clear: function() {
      for (; this.node.hasChildNodes(); ) this.node.removeChild(this.node.lastChild);
      return delete this._defs, this;
    }, defs: function() {
      return this.doc().defs();
    } } }), t.extend(t.Parent, { ungroup: function(l, g) {
      return g === 0 || this instanceof t.Defs || this.node == t.parser.draw || (l = l || (this instanceof t.Doc ? this : this.parent(t.Parent)), g = g || 1 / 0, this.each(function() {
        return this instanceof t.Defs ? this : this instanceof t.Parent ? this.ungroup(l, g - 1) : this.toParent(l);
      }), this.node.firstChild || this.remove()), this;
    }, flatten: function(l, g) {
      return this.ungroup(l, g);
    } }), t.Container = t.invent({ create: function(l) {
      this.constructor.call(this, l);
    }, inherit: t.Parent }), t.ViewBox = t.invent({ parent: t.Container, construct: {} }), ["click", "dblclick", "mousedown", "mouseup", "mouseover", "mouseout", "mousemove", "touchstart", "touchmove", "touchleave", "touchend", "touchcancel"].forEach(function(l) {
      t.Element.prototype[l] = function(g) {
        return t.on(this.node, l, g), this;
      };
    }), t.listeners = [], t.handlerMap = [], t.listenerId = 0, t.on = function(l, g, x, k, S) {
      var A = x.bind(k || l.instance || l), L = (t.handlerMap.indexOf(l) + 1 || t.handlerMap.push(l)) - 1, I = g.split(".")[0], F = g.split(".")[1] || "*";
      t.listeners[L] = t.listeners[L] || {}, t.listeners[L][I] = t.listeners[L][I] || {}, t.listeners[L][I][F] = t.listeners[L][I][F] || {}, x._svgjsListenerId || (x._svgjsListenerId = ++t.listenerId), t.listeners[L][I][F][x._svgjsListenerId] = A, l.addEventListener(I, A, S || { passive: !1 });
    }, t.off = function(l, g, x) {
      var k = t.handlerMap.indexOf(l), S = g && g.split(".")[0], A = g && g.split(".")[1], L = "";
      if (k != -1) if (x) {
        if (typeof x == "function" && (x = x._svgjsListenerId), !x) return;
        t.listeners[k][S] && t.listeners[k][S][A || "*"] && (l.removeEventListener(S, t.listeners[k][S][A || "*"][x], !1), delete t.listeners[k][S][A || "*"][x]);
      } else if (A && S) {
        if (t.listeners[k][S] && t.listeners[k][S][A]) {
          for (var I in t.listeners[k][S][A]) t.off(l, [S, A].join("."), I);
          delete t.listeners[k][S][A];
        }
      } else if (A) for (var F in t.listeners[k]) for (var L in t.listeners[k][F]) A === L && t.off(l, [F, A].join("."));
      else if (S) {
        if (t.listeners[k][S]) {
          for (var L in t.listeners[k][S]) t.off(l, [S, L].join("."));
          delete t.listeners[k][S];
        }
      } else {
        for (var F in t.listeners[k]) t.off(l, F);
        delete t.listeners[k], delete t.handlerMap[k];
      }
    }, t.extend(t.Element, { on: function(l, g, x, k) {
      return t.on(this.node, l, g, x, k), this;
    }, off: function(l, g) {
      return t.off(this.node, l, g), this;
    }, fire: function(l, g) {
      return l instanceof y.Event ? this.node.dispatchEvent(l) : this.node.dispatchEvent(l = new t.CustomEvent(l, { detail: g, cancelable: !0 })), this._event = l, this;
    }, event: function() {
      return this._event;
    } }), t.Defs = t.invent({ create: "defs", inherit: t.Container }), t.G = t.invent({ create: "g", inherit: t.Container, extend: { x: function(l) {
      return l == null ? this.transform("x") : this.transform({ x: l - this.x() }, !0);
    } }, construct: { group: function() {
      return this.put(new t.G());
    } } }), t.Doc = t.invent({ create: function(l) {
      l && ((l = typeof l == "string" ? e.getElementById(l) : l).nodeName == "svg" ? this.constructor.call(this, l) : (this.constructor.call(this, t.create("svg")), l.appendChild(this.node), this.size("100%", "100%")), this.namespace().defs());
    }, inherit: t.Container, extend: { namespace: function() {
      return this.attr({ xmlns: t.ns, version: "1.1" }).attr("xmlns:xlink", t.xlink, t.xmlns).attr("xmlns:svgjs", t.svgjs, t.xmlns);
    }, defs: function() {
      var l;
      return this._defs || ((l = this.node.getElementsByTagName("defs")[0]) ? this._defs = t.adopt(l) : this._defs = new t.Defs(), this.node.appendChild(this._defs.node)), this._defs;
    }, parent: function() {
      return this.node.parentNode && this.node.parentNode.nodeName != "#document" ? this.node.parentNode : null;
    }, remove: function() {
      return this.parent() && this.parent().removeChild(this.node), this;
    }, clear: function() {
      for (; this.node.hasChildNodes(); ) this.node.removeChild(this.node.lastChild);
      return delete this._defs, t.parser.draw && !t.parser.draw.parentNode && this.node.appendChild(t.parser.draw), this;
    }, clone: function(l) {
      this.writeDataToDom();
      var g = this.node, x = f(g.cloneNode(!0));
      return l ? (l.node || l).appendChild(x.node) : g.parentNode.insertBefore(x.node, g.nextSibling), x;
    } } }), t.extend(t.Element, {}), t.Gradient = t.invent({ create: function(l) {
      this.constructor.call(this, t.create(l + "Gradient")), this.type = l;
    }, inherit: t.Container, extend: { at: function(l, g, x) {
      return this.put(new t.Stop()).update(l, g, x);
    }, update: function(l) {
      return this.clear(), typeof l == "function" && l.call(this, this), this;
    }, fill: function() {
      return "url(#" + this.id() + ")";
    }, toString: function() {
      return this.fill();
    }, attr: function(l, g, x) {
      return l == "transform" && (l = "gradientTransform"), t.Container.prototype.attr.call(this, l, g, x);
    } }, construct: { gradient: function(l, g) {
      return this.defs().gradient(l, g);
    } } }), t.extend(t.Gradient, t.FX, { from: function(l, g) {
      return (this._target || this).type == "radial" ? this.attr({ fx: new t.Number(l), fy: new t.Number(g) }) : this.attr({ x1: new t.Number(l), y1: new t.Number(g) });
    }, to: function(l, g) {
      return (this._target || this).type == "radial" ? this.attr({ cx: new t.Number(l), cy: new t.Number(g) }) : this.attr({ x2: new t.Number(l), y2: new t.Number(g) });
    } }), t.extend(t.Defs, { gradient: function(l, g) {
      return this.put(new t.Gradient(l)).update(g);
    } }), t.Stop = t.invent({ create: "stop", inherit: t.Element, extend: { update: function(l) {
      return (typeof l == "number" || l instanceof t.Number) && (l = { offset: arguments[0], color: arguments[1], opacity: arguments[2] }), l.opacity != null && this.attr("stop-opacity", l.opacity), l.color != null && this.attr("stop-color", l.color), l.offset != null && this.attr("offset", new t.Number(l.offset)), this;
    } } }), t.Pattern = t.invent({ create: "pattern", inherit: t.Container, extend: { fill: function() {
      return "url(#" + this.id() + ")";
    }, update: function(l) {
      return this.clear(), typeof l == "function" && l.call(this, this), this;
    }, toString: function() {
      return this.fill();
    }, attr: function(l, g, x) {
      return l == "transform" && (l = "patternTransform"), t.Container.prototype.attr.call(this, l, g, x);
    } }, construct: { pattern: function(l, g, x) {
      return this.defs().pattern(l, g, x);
    } } }), t.extend(t.Defs, { pattern: function(l, g, x) {
      return this.put(new t.Pattern()).update(x).attr({ x: 0, y: 0, width: l, height: g, patternUnits: "userSpaceOnUse" });
    } }), t.Shape = t.invent({ create: function(l) {
      this.constructor.call(this, l);
    }, inherit: t.Element }), t.Symbol = t.invent({ create: "symbol", inherit: t.Container, construct: { symbol: function() {
      return this.put(new t.Symbol());
    } } }), t.Use = t.invent({ create: "use", inherit: t.Shape, extend: { element: function(l, g) {
      return this.attr("href", (g || "") + "#" + l, t.xlink);
    } }, construct: { use: function(l, g) {
      return this.put(new t.Use()).element(l, g);
    } } }), t.Rect = t.invent({ create: "rect", inherit: t.Shape, construct: { rect: function(l, g) {
      return this.put(new t.Rect()).size(l, g);
    } } }), t.Circle = t.invent({ create: "circle", inherit: t.Shape, construct: { circle: function(l) {
      return this.put(new t.Circle()).rx(new t.Number(l).divide(2)).move(0, 0);
    } } }), t.extend(t.Circle, t.FX, { rx: function(l) {
      return this.attr("r", l);
    }, ry: function(l) {
      return this.rx(l);
    } }), t.Ellipse = t.invent({ create: "ellipse", inherit: t.Shape, construct: { ellipse: function(l, g) {
      return this.put(new t.Ellipse()).size(l, g).move(0, 0);
    } } }), t.extend(t.Ellipse, t.Rect, t.FX, { rx: function(l) {
      return this.attr("rx", l);
    }, ry: function(l) {
      return this.attr("ry", l);
    } }), t.extend(t.Circle, t.Ellipse, { x: function(l) {
      return l == null ? this.cx() - this.rx() : this.cx(l + this.rx());
    }, y: function(l) {
      return l == null ? this.cy() - this.ry() : this.cy(l + this.ry());
    }, cx: function(l) {
      return l == null ? this.attr("cx") : this.attr("cx", l);
    }, cy: function(l) {
      return l == null ? this.attr("cy") : this.attr("cy", l);
    }, width: function(l) {
      return l == null ? 2 * this.rx() : this.rx(new t.Number(l).divide(2));
    }, height: function(l) {
      return l == null ? 2 * this.ry() : this.ry(new t.Number(l).divide(2));
    }, size: function(l, g) {
      var x = u(this, l, g);
      return this.rx(new t.Number(x.width).divide(2)).ry(new t.Number(x.height).divide(2));
    } }), t.Line = t.invent({ create: "line", inherit: t.Shape, extend: { array: function() {
      return new t.PointArray([[this.attr("x1"), this.attr("y1")], [this.attr("x2"), this.attr("y2")]]);
    }, plot: function(l, g, x, k) {
      return l == null ? this.array() : (l = g !== void 0 ? { x1: l, y1: g, x2: x, y2: k } : new t.PointArray(l).toLine(), this.attr(l));
    }, move: function(l, g) {
      return this.attr(this.array().move(l, g).toLine());
    }, size: function(l, g) {
      var x = u(this, l, g);
      return this.attr(this.array().size(x.width, x.height).toLine());
    } }, construct: { line: function(l, g, x, k) {
      return t.Line.prototype.plot.apply(this.put(new t.Line()), l != null ? [l, g, x, k] : [0, 0, 0, 0]);
    } } }), t.Polyline = t.invent({ create: "polyline", inherit: t.Shape, construct: { polyline: function(l) {
      return this.put(new t.Polyline()).plot(l || new t.PointArray());
    } } }), t.Polygon = t.invent({ create: "polygon", inherit: t.Shape, construct: { polygon: function(l) {
      return this.put(new t.Polygon()).plot(l || new t.PointArray());
    } } }), t.extend(t.Polyline, t.Polygon, { array: function() {
      return this._array || (this._array = new t.PointArray(this.attr("points")));
    }, plot: function(l) {
      return l == null ? this.array() : this.clear().attr("points", typeof l == "string" ? l : this._array = new t.PointArray(l));
    }, clear: function() {
      return delete this._array, this;
    }, move: function(l, g) {
      return this.attr("points", this.array().move(l, g));
    }, size: function(l, g) {
      var x = u(this, l, g);
      return this.attr("points", this.array().size(x.width, x.height));
    } }), t.extend(t.Line, t.Polyline, t.Polygon, { morphArray: t.PointArray, x: function(l) {
      return l == null ? this.bbox().x : this.move(l, this.bbox().y);
    }, y: function(l) {
      return l == null ? this.bbox().y : this.move(this.bbox().x, l);
    }, width: function(l) {
      var g = this.bbox();
      return l == null ? g.width : this.size(l, g.height);
    }, height: function(l) {
      var g = this.bbox();
      return l == null ? g.height : this.size(g.width, l);
    } }), t.Path = t.invent({ create: "path", inherit: t.Shape, extend: { morphArray: t.PathArray, array: function() {
      return this._array || (this._array = new t.PathArray(this.attr("d")));
    }, plot: function(l) {
      return l == null ? this.array() : this.clear().attr("d", typeof l == "string" ? l : this._array = new t.PathArray(l));
    }, clear: function() {
      return delete this._array, this;
    } }, construct: { path: function(l) {
      return this.put(new t.Path()).plot(l || new t.PathArray());
    } } }), t.Image = t.invent({ create: "image", inherit: t.Shape, extend: { load: function(l) {
      if (!l) return this;
      var g = this, x = new y.Image();
      return t.on(x, "load", function() {
        t.off(x);
        var k = g.parent(t.Pattern);
        k !== null && (g.width() == 0 && g.height() == 0 && g.size(x.width, x.height), k && k.width() == 0 && k.height() == 0 && k.size(g.width(), g.height()), typeof g._loaded == "function" && g._loaded.call(g, { width: x.width, height: x.height, ratio: x.width / x.height, url: l }));
      }), t.on(x, "error", function(k) {
        t.off(x), typeof g._error == "function" && g._error.call(g, k);
      }), this.attr("href", x.src = this.src = l, t.xlink);
    }, loaded: function(l) {
      return this._loaded = l, this;
    }, error: function(l) {
      return this._error = l, this;
    } }, construct: { image: function(l, g, x) {
      return this.put(new t.Image()).load(l).size(g || 0, x || g || 0);
    } } }), t.Text = t.invent({ create: function() {
      this.constructor.call(this, t.create("text")), this.dom.leading = new t.Number(1.3), this._rebuild = !0, this._build = !1, this.attr("font-family", t.defaults.attrs["font-family"]);
    }, inherit: t.Shape, extend: { x: function(l) {
      return l == null ? this.attr("x") : this.attr("x", l);
    }, text: function(l) {
      if (l === void 0) {
        l = "";
        for (var g = this.node.childNodes, x = 0, k = g.length; x < k; ++x) x != 0 && g[x].nodeType != 3 && t.adopt(g[x]).dom.newLined == 1 && (l += `
`), l += g[x].textContent;
        return l;
      }
      if (this.clear().build(!0), typeof l == "function") l.call(this, this);
      else {
        x = 0;
        for (var S = (l = l.split(`
`)).length; x < S; x++) this.tspan(l[x]).newLine();
      }
      return this.build(!1).rebuild();
    }, size: function(l) {
      return this.attr("font-size", l).rebuild();
    }, leading: function(l) {
      return l == null ? this.dom.leading : (this.dom.leading = new t.Number(l), this.rebuild());
    }, lines: function() {
      var l = (this.textPath && this.textPath() || this).node, g = t.utils.map(t.utils.filterSVGElements(l.childNodes), function(x) {
        return t.adopt(x);
      });
      return new t.Set(g);
    }, rebuild: function(l) {
      if (typeof l == "boolean" && (this._rebuild = l), this._rebuild) {
        var g = this, x = 0, k = this.dom.leading * new t.Number(this.attr("font-size"));
        this.lines().each(function() {
          this.dom.newLined && (g.textPath() || this.attr("x", g.attr("x")), this.text() == `
` ? x += k : (this.attr("dy", k + x), x = 0));
        }), this.fire("rebuild");
      }
      return this;
    }, build: function(l) {
      return this._build = !!l, this;
    }, setData: function(l) {
      return this.dom = l, this.dom.leading = new t.Number(l.leading || 1.3), this;
    } }, construct: { text: function(l) {
      return this.put(new t.Text()).text(l);
    }, plain: function(l) {
      return this.put(new t.Text()).plain(l);
    } } }), t.Tspan = t.invent({ create: "tspan", inherit: t.Shape, extend: { text: function(l) {
      return l == null ? this.node.textContent + (this.dom.newLined ? `
` : "") : (typeof l == "function" ? l.call(this, this) : this.plain(l), this);
    }, dx: function(l) {
      return this.attr("dx", l);
    }, dy: function(l) {
      return this.attr("dy", l);
    }, newLine: function() {
      var l = this.parent(t.Text);
      return this.dom.newLined = !0, this.dy(l.dom.leading * l.attr("font-size")).attr("x", l.x());
    } } }), t.extend(t.Text, t.Tspan, { plain: function(l) {
      return this._build === !1 && this.clear(), this.node.appendChild(e.createTextNode(l)), this;
    }, tspan: function(l) {
      var g = (this.textPath && this.textPath() || this).node, x = new t.Tspan();
      return this._build === !1 && this.clear(), g.appendChild(x.node), x.text(l);
    }, clear: function() {
      for (var l = (this.textPath && this.textPath() || this).node; l.hasChildNodes(); ) l.removeChild(l.lastChild);
      return this;
    }, length: function() {
      return this.node.getComputedTextLength();
    } }), t.TextPath = t.invent({ create: "textPath", inherit: t.Parent, parent: t.Text, construct: { morphArray: t.PathArray, array: function() {
      var l = this.track();
      return l ? l.array() : null;
    }, plot: function(l) {
      var g = this.track(), x = null;
      return g && (x = g.plot(l)), l == null ? x : this;
    }, track: function() {
      var l = this.textPath();
      if (l) return l.reference("href");
    }, textPath: function() {
      if (this.node.firstChild && this.node.firstChild.nodeName == "textPath") return t.adopt(this.node.firstChild);
    } } }), t.Nested = t.invent({ create: function() {
      this.constructor.call(this, t.create("svg")), this.style("overflow", "visible");
    }, inherit: t.Container, construct: { nested: function() {
      return this.put(new t.Nested());
    } } });
    var o = { stroke: ["color", "width", "opacity", "linecap", "linejoin", "miterlimit", "dasharray", "dashoffset"], fill: ["color", "opacity", "rule"], prefix: function(l, g) {
      return g == "color" ? l : l + "-" + g;
    } };
    function n(l, g, x, k) {
      return x + k.replace(t.regex.dots, " .");
    }
    function h(l) {
      return l.toLowerCase().replace(/-(.)/g, function(g, x) {
        return x.toUpperCase();
      });
    }
    function d(l) {
      return l.charAt(0).toUpperCase() + l.slice(1);
    }
    function c(l) {
      var g = l.toString(16);
      return g.length == 1 ? "0" + g : g;
    }
    function u(l, g, x) {
      if (g == null || x == null) {
        var k = l.bbox();
        g == null ? g = k.width / k.height * x : x == null && (x = k.height / k.width * g);
      }
      return { width: g, height: x };
    }
    function p(l, g, x) {
      return { x: g * l.a + x * l.c + 0, y: g * l.b + x * l.d + 0 };
    }
    function m(l) {
      return { a: l[0], b: l[1], c: l[2], d: l[3], e: l[4], f: l[5] };
    }
    function f(l) {
      for (var g = l.childNodes.length - 1; g >= 0; g--) l.childNodes[g] instanceof y.SVGElement && f(l.childNodes[g]);
      return t.adopt(l).id(t.eid(l.nodeName));
    }
    function b(l) {
      return Math.abs(l) > 1e-37 ? l : 0;
    }
    ["fill", "stroke"].forEach(function(l) {
      var g = {};
      g[l] = function(x) {
        if (x === void 0) return this;
        if (typeof x == "string" || t.Color.isRgb(x) || x && typeof x.fill == "function") this.attr(l, x);
        else for (var k = o[l].length - 1; k >= 0; k--) x[o[l][k]] != null && this.attr(o.prefix(l, o[l][k]), x[o[l][k]]);
        return this;
      }, t.extend(t.Element, t.FX, g);
    }), t.extend(t.Element, t.FX, { translate: function(l, g) {
      return this.transform({ x: l, y: g });
    }, matrix: function(l) {
      return this.attr("transform", new t.Matrix(arguments.length == 6 ? [].slice.call(arguments) : l));
    }, opacity: function(l) {
      return this.attr("opacity", l);
    }, dx: function(l) {
      return this.x(new t.Number(l).plus(this instanceof t.FX ? 0 : this.x()), !0);
    }, dy: function(l) {
      return this.y(new t.Number(l).plus(this instanceof t.FX ? 0 : this.y()), !0);
    } }), t.extend(t.Path, { length: function() {
      return this.node.getTotalLength();
    }, pointAt: function(l) {
      return this.node.getPointAtLength(l);
    } }), t.Set = t.invent({ create: function(l) {
      Array.isArray(l) ? this.members = l : this.clear();
    }, extend: { add: function() {
      for (var l = [].slice.call(arguments), g = 0, x = l.length; g < x; g++) this.members.push(l[g]);
      return this;
    }, remove: function(l) {
      var g = this.index(l);
      return g > -1 && this.members.splice(g, 1), this;
    }, each: function(l) {
      for (var g = 0, x = this.members.length; g < x; g++) l.apply(this.members[g], [g, this.members]);
      return this;
    }, clear: function() {
      return this.members = [], this;
    }, length: function() {
      return this.members.length;
    }, has: function(l) {
      return this.index(l) >= 0;
    }, index: function(l) {
      return this.members.indexOf(l);
    }, get: function(l) {
      return this.members[l];
    }, first: function() {
      return this.get(0);
    }, last: function() {
      return this.get(this.members.length - 1);
    }, valueOf: function() {
      return this.members;
    } }, construct: { set: function(l) {
      return new t.Set(l);
    } } }), t.FX.Set = t.invent({ create: function(l) {
      this.set = l;
    } }), t.Set.inherit = function() {
      var l = [];
      for (var g in t.Shape.prototype) typeof t.Shape.prototype[g] == "function" && typeof t.Set.prototype[g] != "function" && l.push(g);
      for (var g in l.forEach(function(k) {
        t.Set.prototype[k] = function() {
          for (var S = 0, A = this.members.length; S < A; S++) this.members[S] && typeof this.members[S][k] == "function" && this.members[S][k].apply(this.members[S], arguments);
          return k == "animate" ? this.fx || (this.fx = new t.FX.Set(this)) : this;
        };
      }), l = [], t.FX.prototype) typeof t.FX.prototype[g] == "function" && typeof t.FX.Set.prototype[g] != "function" && l.push(g);
      l.forEach(function(x) {
        t.FX.Set.prototype[x] = function() {
          for (var k = 0, S = this.set.members.length; k < S; k++) this.set.members[k].fx[x].apply(this.set.members[k].fx, arguments);
          return this;
        };
      });
    }, t.extend(t.Element, {}), t.extend(t.Element, { remember: function(l, g) {
      if (he(arguments[0]) === "object") for (var x in l) this.remember(x, l[x]);
      else {
        if (arguments.length == 1) return this.memory()[l];
        this.memory()[l] = g;
      }
      return this;
    }, forget: function() {
      if (arguments.length == 0) this._memory = {};
      else for (var l = arguments.length - 1; l >= 0; l--) delete this.memory()[arguments[l]];
      return this;
    }, memory: function() {
      return this._memory || (this._memory = {});
    } }), t.get = function(l) {
      var g = e.getElementById(function(x) {
        var k = (x || "").toString().match(t.regex.reference);
        if (k) return k[1];
      }(l) || l);
      return t.adopt(g);
    }, t.select = function(l, g) {
      return new t.Set(t.utils.map((g || e).querySelectorAll(l), function(x) {
        return t.adopt(x);
      }));
    }, t.extend(t.Parent, { select: function(l) {
      return t.select(l, this.node);
    } });
    var v = "abcdef".split("");
    if (typeof y.CustomEvent != "function") {
      var w = function(l, g) {
        g = g || { bubbles: !1, cancelable: !1, detail: void 0 };
        var x = e.createEvent("CustomEvent");
        return x.initCustomEvent(l, g.bubbles, g.cancelable, g.detail), x;
      };
      w.prototype = y.Event.prototype, t.CustomEvent = w;
    } else t.CustomEvent = y.CustomEvent;
    return t;
  }, he(D) === "object" ? C.exports = lt.document ? Tt(lt, lt.document) : function(y) {
    return Tt(y, y.document);
  } : lt.SVG = Tt(lt, lt.document), /*! svg.filter.js - v2.0.2 - 2016-02-24
  * https://github.com/wout/svg.filter.js
  * Copyright (c) 2016 Wout Fierens; Licensed MIT */
  (function() {
    SVG.Filter = SVG.invent({ create: "filter", inherit: SVG.Parent, extend: { source: "SourceGraphic", sourceAlpha: "SourceAlpha", background: "BackgroundImage", backgroundAlpha: "BackgroundAlpha", fill: "FillPaint", stroke: "StrokePaint", autoSetIn: !0, put: function(s, o) {
      return this.add(s, o), !s.attr("in") && this.autoSetIn && s.attr("in", this.source), s.attr("result") || s.attr("result", s), s;
    }, blend: function(s, o, n) {
      return this.put(new SVG.BlendEffect(s, o, n));
    }, colorMatrix: function(s, o) {
      return this.put(new SVG.ColorMatrixEffect(s, o));
    }, convolveMatrix: function(s) {
      return this.put(new SVG.ConvolveMatrixEffect(s));
    }, componentTransfer: function(s) {
      return this.put(new SVG.ComponentTransferEffect(s));
    }, composite: function(s, o, n) {
      return this.put(new SVG.CompositeEffect(s, o, n));
    }, flood: function(s, o) {
      return this.put(new SVG.FloodEffect(s, o));
    }, offset: function(s, o) {
      return this.put(new SVG.OffsetEffect(s, o));
    }, image: function(s) {
      return this.put(new SVG.ImageEffect(s));
    }, merge: function() {
      var s = [void 0];
      for (var o in arguments) s.push(arguments[o]);
      return this.put(new (SVG.MergeEffect.bind.apply(SVG.MergeEffect, s))());
    }, gaussianBlur: function(s, o) {
      return this.put(new SVG.GaussianBlurEffect(s, o));
    }, morphology: function(s, o) {
      return this.put(new SVG.MorphologyEffect(s, o));
    }, diffuseLighting: function(s, o, n) {
      return this.put(new SVG.DiffuseLightingEffect(s, o, n));
    }, displacementMap: function(s, o, n, h, d) {
      return this.put(new SVG.DisplacementMapEffect(s, o, n, h, d));
    }, specularLighting: function(s, o, n, h) {
      return this.put(new SVG.SpecularLightingEffect(s, o, n, h));
    }, tile: function() {
      return this.put(new SVG.TileEffect());
    }, turbulence: function(s, o, n, h, d) {
      return this.put(new SVG.TurbulenceEffect(s, o, n, h, d));
    }, toString: function() {
      return "url(#" + this.attr("id") + ")";
    } } }), SVG.extend(SVG.Defs, { filter: function(s) {
      var o = this.put(new SVG.Filter());
      return typeof s == "function" && s.call(o, o), o;
    } }), SVG.extend(SVG.Container, { filter: function(s) {
      return this.defs().filter(s);
    } }), SVG.extend(SVG.Element, SVG.G, SVG.Nested, { filter: function(s) {
      return this.filterer = s instanceof SVG.Element ? s : this.doc().filter(s), this.doc() && this.filterer.doc() !== this.doc() && this.doc().defs().add(this.filterer), this.attr("filter", this.filterer), this.filterer;
    }, unfilter: function(s) {
      return this.filterer && s === !0 && this.filterer.remove(), delete this.filterer, this.attr("filter", null);
    } }), SVG.Effect = SVG.invent({ create: function() {
      this.constructor.call(this);
    }, inherit: SVG.Element, extend: { in: function(s) {
      return s == null ? this.parent() && this.parent().select('[result="' + this.attr("in") + '"]').get(0) || this.attr("in") : this.attr("in", s);
    }, result: function(s) {
      return s == null ? this.attr("result") : this.attr("result", s);
    }, toString: function() {
      return this.result();
    } } }), SVG.ParentEffect = SVG.invent({ create: function() {
      this.constructor.call(this);
    }, inherit: SVG.Parent, extend: { in: function(s) {
      return s == null ? this.parent() && this.parent().select('[result="' + this.attr("in") + '"]').get(0) || this.attr("in") : this.attr("in", s);
    }, result: function(s) {
      return s == null ? this.attr("result") : this.attr("result", s);
    }, toString: function() {
      return this.result();
    } } });
    var y = { blend: function(s, o) {
      return this.parent() && this.parent().blend(this, s, o);
    }, colorMatrix: function(s, o) {
      return this.parent() && this.parent().colorMatrix(s, o).in(this);
    }, convolveMatrix: function(s) {
      return this.parent() && this.parent().convolveMatrix(s).in(this);
    }, componentTransfer: function(s) {
      return this.parent() && this.parent().componentTransfer(s).in(this);
    }, composite: function(s, o) {
      return this.parent() && this.parent().composite(this, s, o);
    }, flood: function(s, o) {
      return this.parent() && this.parent().flood(s, o);
    }, offset: function(s, o) {
      return this.parent() && this.parent().offset(s, o).in(this);
    }, image: function(s) {
      return this.parent() && this.parent().image(s);
    }, merge: function() {
      return this.parent() && this.parent().merge.apply(this.parent(), [this].concat(arguments));
    }, gaussianBlur: function(s, o) {
      return this.parent() && this.parent().gaussianBlur(s, o).in(this);
    }, morphology: function(s, o) {
      return this.parent() && this.parent().morphology(s, o).in(this);
    }, diffuseLighting: function(s, o, n) {
      return this.parent() && this.parent().diffuseLighting(s, o, n).in(this);
    }, displacementMap: function(s, o, n, h) {
      return this.parent() && this.parent().displacementMap(this, s, o, n, h);
    }, specularLighting: function(s, o, n, h) {
      return this.parent() && this.parent().specularLighting(s, o, n, h).in(this);
    }, tile: function() {
      return this.parent() && this.parent().tile().in(this);
    }, turbulence: function(s, o, n, h, d) {
      return this.parent() && this.parent().turbulence(s, o, n, h, d).in(this);
    } };
    SVG.extend(SVG.Effect, y), SVG.extend(SVG.ParentEffect, y), SVG.ChildEffect = SVG.invent({ create: function() {
      this.constructor.call(this);
    }, inherit: SVG.Element, extend: { in: function(s) {
      this.attr("in", s);
    } } });
    var e = { blend: function(s, o, n) {
      this.attr({ in: s, in2: o, mode: n || "normal" });
    }, colorMatrix: function(s, o) {
      s == "matrix" && (o = i(o)), this.attr({ type: s, values: o === void 0 ? null : o });
    }, convolveMatrix: function(s) {
      s = i(s), this.attr({ order: Math.sqrt(s.split(" ").length), kernelMatrix: s });
    }, composite: function(s, o, n) {
      this.attr({ in: s, in2: o, operator: n });
    }, flood: function(s, o) {
      this.attr("flood-color", s), o != null && this.attr("flood-opacity", o);
    }, offset: function(s, o) {
      this.attr({ dx: s, dy: o });
    }, image: function(s) {
      this.attr("href", s, SVG.xlink);
    }, displacementMap: function(s, o, n, h, d) {
      this.attr({ in: s, in2: o, scale: n, xChannelSelector: h, yChannelSelector: d });
    }, gaussianBlur: function(s, o) {
      s != null || o != null ? this.attr("stdDeviation", function(n) {
        if (!Array.isArray(n)) return n;
        for (var h = 0, d = n.length, c = []; h < d; h++) c.push(n[h]);
        return c.join(" ");
      }(Array.prototype.slice.call(arguments))) : this.attr("stdDeviation", "0 0");
    }, morphology: function(s, o) {
      this.attr({ operator: s, radius: o });
    }, tile: function() {
    }, turbulence: function(s, o, n, h, d) {
      this.attr({ numOctaves: o, seed: n, stitchTiles: h, baseFrequency: s, type: d });
    } }, t = { merge: function() {
      var s;
      if (arguments[0] instanceof SVG.Set) {
        var o = this;
        arguments[0].each(function(h) {
          this instanceof SVG.MergeNode ? o.put(this) : (this instanceof SVG.Effect || this instanceof SVG.ParentEffect) && o.put(new SVG.MergeNode(this));
        });
      } else {
        s = Array.isArray(arguments[0]) ? arguments[0] : arguments;
        for (var n = 0; n < s.length; n++) s[n] instanceof SVG.MergeNode ? this.put(s[n]) : this.put(new SVG.MergeNode(s[n]));
      }
    }, componentTransfer: function(s) {
      if (this.rgb = new SVG.Set(), ["r", "g", "b", "a"].forEach((function(n) {
        this[n] = new SVG["Func" + n.toUpperCase()]("identity"), this.rgb.add(this[n]), this.node.appendChild(this[n].node);
      }).bind(this)), s) for (var o in s.rgb && (["r", "g", "b"].forEach((function(n) {
        this[n].attr(s.rgb);
      }).bind(this)), delete s.rgb), s) this[o].attr(s[o]);
    }, diffuseLighting: function(s, o, n) {
      this.attr({ surfaceScale: s, diffuseConstant: o, kernelUnitLength: n });
    }, specularLighting: function(s, o, n, h) {
      this.attr({ surfaceScale: s, diffuseConstant: o, specularExponent: n, kernelUnitLength: h });
    } }, a = { distantLight: function(s, o) {
      this.attr({ azimuth: s, elevation: o });
    }, pointLight: function(s, o, n) {
      this.attr({ x: s, y: o, z: n });
    }, spotLight: function(s, o, n, h, d, c) {
      this.attr({ x: s, y: o, z: n, pointsAtX: h, pointsAtY: d, pointsAtZ: c });
    }, mergeNode: function(s) {
      this.attr("in", s);
    } };
    function i(s) {
      return Array.isArray(s) && (s = new SVG.Array(s)), s.toString().replace(/^\s+/, "").replace(/\s+$/, "").replace(/\s+/g, " ");
    }
    function r() {
      var s = function() {
      };
      for (var o in typeof arguments[arguments.length - 1] == "function" && (s = arguments[arguments.length - 1], Array.prototype.splice.call(arguments, arguments.length - 1, 1)), arguments) for (var n in arguments[o]) s(arguments[o][n], n, arguments[o]);
    }
    ["r", "g", "b", "a"].forEach(function(s) {
      a["Func" + s.toUpperCase()] = function(o) {
        switch (this.attr("type", o), o) {
          case "table":
            this.attr("tableValues", arguments[1]);
            break;
          case "linear":
            this.attr("slope", arguments[1]), this.attr("intercept", arguments[2]);
            break;
          case "gamma":
            this.attr("amplitude", arguments[1]), this.attr("exponent", arguments[2]), this.attr("offset", arguments[2]);
        }
      };
    }), r(e, function(s, o) {
      var n = o.charAt(0).toUpperCase() + o.slice(1);
      SVG[n + "Effect"] = SVG.invent({ create: function() {
        this.constructor.call(this, SVG.create("fe" + n)), s.apply(this, arguments), this.result(this.attr("id") + "Out");
      }, inherit: SVG.Effect, extend: {} });
    }), r(t, function(s, o) {
      var n = o.charAt(0).toUpperCase() + o.slice(1);
      SVG[n + "Effect"] = SVG.invent({ create: function() {
        this.constructor.call(this, SVG.create("fe" + n)), s.apply(this, arguments), this.result(this.attr("id") + "Out");
      }, inherit: SVG.ParentEffect, extend: {} });
    }), r(a, function(s, o) {
      var n = o.charAt(0).toUpperCase() + o.slice(1);
      SVG[n] = SVG.invent({ create: function() {
        this.constructor.call(this, SVG.create("fe" + n)), s.apply(this, arguments);
      }, inherit: SVG.ChildEffect, extend: {} });
    }), SVG.extend(SVG.MergeEffect, { in: function(s) {
      return s instanceof SVG.MergeNode ? this.add(s, 0) : this.add(new SVG.MergeNode(s), 0), this;
    } }), SVG.extend(SVG.CompositeEffect, SVG.BlendEffect, SVG.DisplacementMapEffect, { in2: function(s) {
      return s == null ? this.parent() && this.parent().select('[result="' + this.attr("in2") + '"]').get(0) || this.attr("in2") : this.attr("in2", s);
    } }), SVG.filter = { sepiatone: [0.343, 0.669, 0.119, 0, 0, 0.249, 0.626, 0.13, 0, 0, 0.172, 0.334, 0.111, 0, 0, 0, 0, 0, 1, 0] };
  }).call(void 0), function() {
    function y(r, s, o, n, h, d, c) {
      for (var u = r.slice(s, o || c), p = n.slice(h, d || c), m = 0, f = { pos: [0, 0], start: [0, 0] }, b = { pos: [0, 0], start: [0, 0] }; u[m] = e.call(f, u[m]), p[m] = e.call(b, p[m]), u[m][0] != p[m][0] || u[m][0] == "M" || u[m][0] == "A" && (u[m][4] != p[m][4] || u[m][5] != p[m][5]) ? (Array.prototype.splice.apply(u, [m, 1].concat(a.call(f, u[m]))), Array.prototype.splice.apply(p, [m, 1].concat(a.call(b, p[m])))) : (u[m] = t.call(f, u[m]), p[m] = t.call(b, p[m])), !(++m == u.length && m == p.length); )
        m == u.length && u.push(["C", f.pos[0], f.pos[1], f.pos[0], f.pos[1], f.pos[0], f.pos[1]]), m == p.length && p.push(["C", b.pos[0], b.pos[1], b.pos[0], b.pos[1], b.pos[0], b.pos[1]]);
      return { start: u, dest: p };
    }
    function e(r) {
      switch (r[0]) {
        case "z":
        case "Z":
          r[0] = "L", r[1] = this.start[0], r[2] = this.start[1];
          break;
        case "H":
          r[0] = "L", r[2] = this.pos[1];
          break;
        case "V":
          r[0] = "L", r[2] = r[1], r[1] = this.pos[0];
          break;
        case "T":
          r[0] = "Q", r[3] = r[1], r[4] = r[2], r[1] = this.reflection[1], r[2] = this.reflection[0];
          break;
        case "S":
          r[0] = "C", r[6] = r[4], r[5] = r[3], r[4] = r[2], r[3] = r[1], r[2] = this.reflection[1], r[1] = this.reflection[0];
      }
      return r;
    }
    function t(r) {
      var s = r.length;
      return this.pos = [r[s - 2], r[s - 1]], "SCQT".indexOf(r[0]) != -1 && (this.reflection = [2 * this.pos[0] - r[s - 4], 2 * this.pos[1] - r[s - 3]]), r;
    }
    function a(r) {
      var s = [r];
      switch (r[0]) {
        case "M":
          return this.pos = this.start = [r[1], r[2]], s;
        case "L":
          r[5] = r[3] = r[1], r[6] = r[4] = r[2], r[1] = this.pos[0], r[2] = this.pos[1];
          break;
        case "Q":
          r[6] = r[4], r[5] = r[3], r[4] = 1 * r[4] / 3 + 2 * r[2] / 3, r[3] = 1 * r[3] / 3 + 2 * r[1] / 3, r[2] = 1 * this.pos[1] / 3 + 2 * r[2] / 3, r[1] = 1 * this.pos[0] / 3 + 2 * r[1] / 3;
          break;
        case "A":
          s = function(o, n) {
            var h, d, c, u, p, m, f, b, v, w, l, g, x, k, S, A, L, I, F, B, G, W, q, ee, ae, ne, ue = Math.abs(n[1]), le = Math.abs(n[2]), xe = n[3] % 360, ze = n[4], Ve = n[5], Me = n[6], _e = n[7], ke = new SVG.Point(o), we = new SVG.Point(Me, _e), Ae = [];
            if (ue === 0 || le === 0 || ke.x === we.x && ke.y === we.y) return [["C", ke.x, ke.y, we.x, we.y, we.x, we.y]];
            for (h = new SVG.Point((ke.x - we.x) / 2, (ke.y - we.y) / 2).transform(new SVG.Matrix().rotate(xe)), (d = h.x * h.x / (ue * ue) + h.y * h.y / (le * le)) > 1 && (ue *= d = Math.sqrt(d), le *= d), c = new SVG.Matrix().rotate(xe).scale(1 / ue, 1 / le).rotate(-xe), ke = ke.transform(c), we = we.transform(c), u = [we.x - ke.x, we.y - ke.y], m = u[0] * u[0] + u[1] * u[1], p = Math.sqrt(m), u[0] /= p, u[1] /= p, f = m < 4 ? Math.sqrt(1 - m / 4) : 0, ze === Ve && (f *= -1), b = new SVG.Point((we.x + ke.x) / 2 + f * -u[1], (we.y + ke.y) / 2 + f * u[0]), v = new SVG.Point(ke.x - b.x, ke.y - b.y), w = new SVG.Point(we.x - b.x, we.y - b.y), l = Math.acos(v.x / Math.sqrt(v.x * v.x + v.y * v.y)), v.y < 0 && (l *= -1), g = Math.acos(w.x / Math.sqrt(w.x * w.x + w.y * w.y)), w.y < 0 && (g *= -1), Ve && l > g && (g += 2 * Math.PI), !Ve && l < g && (g -= 2 * Math.PI), k = Math.ceil(2 * Math.abs(l - g) / Math.PI), A = [], L = l, x = (g - l) / k, S = 4 * Math.tan(x / 4) / 3, G = 0; G <= k; G++) F = Math.cos(L), I = Math.sin(L), B = new SVG.Point(b.x + F, b.y + I), A[G] = [new SVG.Point(B.x + S * I, B.y - S * F), B, new SVG.Point(B.x - S * I, B.y + S * F)], L += x;
            for (A[0][0] = A[0][1].clone(), A[A.length - 1][2] = A[A.length - 1][1].clone(), c = new SVG.Matrix().rotate(xe).scale(ue, le).rotate(-xe), G = 0, W = A.length; G < W; G++) A[G][0] = A[G][0].transform(c), A[G][1] = A[G][1].transform(c), A[G][2] = A[G][2].transform(c);
            for (G = 1, W = A.length; G < W; G++) q = (B = A[G - 1][2]).x, ee = B.y, ae = (B = A[G][0]).x, ne = B.y, Me = (B = A[G][1]).x, _e = B.y, Ae.push(["C", q, ee, ae, ne, Me, _e]);
            return Ae;
          }(this.pos, r), r = s[0];
      }
      return r[0] = "C", this.pos = [r[5], r[6]], this.reflection = [2 * r[5] - r[3], 2 * r[6] - r[4]], s;
    }
    function i(r, s) {
      if (s === !1) return !1;
      for (var o = s, n = r.length; o < n; ++o) if (r[o][0] == "M") return o;
      return !1;
    }
    SVG.extend(SVG.PathArray, { morph: function(r) {
      for (var s = this.value, o = this.parse(r), n = 0, h = 0, d = !1, c = !1; n !== !1 || h !== !1; ) {
        var u;
        d = i(s, n !== !1 && n + 1), c = i(o, h !== !1 && h + 1), n === !1 && (n = (u = new SVG.PathArray(p.start).bbox()).height == 0 || u.width == 0 ? s.push(s[0]) - 1 : s.push(["M", u.x + u.width / 2, u.y + u.height / 2]) - 1), h === !1 && (h = (u = new SVG.PathArray(p.dest).bbox()).height == 0 || u.width == 0 ? o.push(o[0]) - 1 : o.push(["M", u.x + u.width / 2, u.y + u.height / 2]) - 1);
        var p = y(s, n, d, o, h, c);
        s = s.slice(0, n).concat(p.start, d === !1 ? [] : s.slice(d)), o = o.slice(0, h).concat(p.dest, c === !1 ? [] : o.slice(c)), n = d !== !1 && n + p.start.length, h = c !== !1 && h + p.dest.length;
      }
      return this.value = s, this.destination = new SVG.PathArray(), this.destination.value = o, this;
    } });
  }(), /*! svg.draggable.js - v2.2.2 - 2019-01-08
  * https://github.com/svgdotjs/svg.draggable.js
  * Copyright (c) 2019 Wout Fierens; Licensed MIT */
  (function() {
    function y(e) {
      e.remember("_draggable", this), this.el = e;
    }
    y.prototype.init = function(e, t) {
      var a = this;
      this.constraint = e, this.value = t, this.el.on("mousedown.drag", function(i) {
        a.start(i);
      }), this.el.on("touchstart.drag", function(i) {
        a.start(i);
      });
    }, y.prototype.transformPoint = function(e, t) {
      var a = (e = e || window.event).changedTouches && e.changedTouches[0] || e;
      return this.p.x = a.clientX - (t || 0), this.p.y = a.clientY, this.p.matrixTransform(this.m);
    }, y.prototype.getBBox = function() {
      var e = this.el.bbox();
      return this.el instanceof SVG.Nested && (e = this.el.rbox()), (this.el instanceof SVG.G || this.el instanceof SVG.Use || this.el instanceof SVG.Nested) && (e.x = this.el.x(), e.y = this.el.y()), e;
    }, y.prototype.start = function(e) {
      if (e.type != "click" && e.type != "mousedown" && e.type != "mousemove" || (e.which || e.buttons) == 1) {
        var t = this;
        if (this.el.fire("beforedrag", { event: e, handler: this }), !this.el.event().defaultPrevented) {
          e.preventDefault(), e.stopPropagation(), this.parent = this.parent || this.el.parent(SVG.Nested) || this.el.parent(SVG.Doc), this.p = this.parent.node.createSVGPoint(), this.m = this.el.node.getScreenCTM().inverse();
          var a, i = this.getBBox();
          if (this.el instanceof SVG.Text) switch (a = this.el.node.getComputedTextLength(), this.el.attr("text-anchor")) {
            case "middle":
              a /= 2;
              break;
            case "start":
              a = 0;
          }
          this.startPoints = { point: this.transformPoint(e, a), box: i, transform: this.el.transform() }, SVG.on(window, "mousemove.drag", function(r) {
            t.drag(r);
          }), SVG.on(window, "touchmove.drag", function(r) {
            t.drag(r);
          }), SVG.on(window, "mouseup.drag", function(r) {
            t.end(r);
          }), SVG.on(window, "touchend.drag", function(r) {
            t.end(r);
          }), this.el.fire("dragstart", { event: e, p: this.startPoints.point, m: this.m, handler: this });
        }
      }
    }, y.prototype.drag = function(e) {
      var t = this.getBBox(), a = this.transformPoint(e), i = this.startPoints.box.x + a.x - this.startPoints.point.x, r = this.startPoints.box.y + a.y - this.startPoints.point.y, s = this.constraint, o = a.x - this.startPoints.point.x, n = a.y - this.startPoints.point.y;
      if (this.el.fire("dragmove", { event: e, p: a, m: this.m, handler: this }), this.el.event().defaultPrevented) return a;
      if (typeof s == "function") {
        var h = s.call(this.el, i, r, this.m);
        typeof h == "boolean" && (h = { x: h, y: h }), h.x === !0 ? this.el.x(i) : h.x !== !1 && this.el.x(h.x), h.y === !0 ? this.el.y(r) : h.y !== !1 && this.el.y(h.y);
      } else typeof s == "object" && (s.minX != null && i < s.minX ? o = (i = s.minX) - this.startPoints.box.x : s.maxX != null && i > s.maxX - t.width && (o = (i = s.maxX - t.width) - this.startPoints.box.x), s.minY != null && r < s.minY ? n = (r = s.minY) - this.startPoints.box.y : s.maxY != null && r > s.maxY - t.height && (n = (r = s.maxY - t.height) - this.startPoints.box.y), s.snapToGrid != null && (i -= i % s.snapToGrid, r -= r % s.snapToGrid, o -= o % s.snapToGrid, n -= n % s.snapToGrid), this.el instanceof SVG.G ? this.el.matrix(this.startPoints.transform).transform({ x: o, y: n }, !0) : this.el.move(i, r));
      return a;
    }, y.prototype.end = function(e) {
      var t = this.drag(e);
      this.el.fire("dragend", { event: e, p: t, m: this.m, handler: this }), SVG.off(window, "mousemove.drag"), SVG.off(window, "touchmove.drag"), SVG.off(window, "mouseup.drag"), SVG.off(window, "touchend.drag");
    }, SVG.extend(SVG.Element, { draggable: function(e, t) {
      typeof e != "function" && typeof e != "object" || (t = e, e = !0);
      var a = this.remember("_draggable") || new y(this);
      return (e = e === void 0 || e) ? a.init(t || {}, e) : (this.off("mousedown.drag"), this.off("touchstart.drag")), this;
    } });
  }).call(void 0), function() {
    function y(e) {
      this.el = e, e.remember("_selectHandler", this), this.pointSelection = { isSelected: !1 }, this.rectSelection = { isSelected: !1 }, this.pointsList = { lt: [0, 0], rt: ["width", 0], rb: ["width", "height"], lb: [0, "height"], t: ["width", 0], r: ["width", "height"], b: ["width", "height"], l: [0, "height"] }, this.pointCoord = function(t, a, i) {
        var r = typeof t != "string" ? t : a[t];
        return i ? r / 2 : r;
      }, this.pointCoords = function(t, a) {
        var i = this.pointsList[t];
        return { x: this.pointCoord(i[0], a, t === "t" || t === "b"), y: this.pointCoord(i[1], a, t === "r" || t === "l") };
      };
    }
    y.prototype.init = function(e, t) {
      var a = this.el.bbox();
      this.options = {};
      var i = this.el.selectize.defaults.points;
      for (var r in this.el.selectize.defaults) this.options[r] = this.el.selectize.defaults[r], t[r] !== void 0 && (this.options[r] = t[r]);
      var s = ["points", "pointsExclude"];
      for (var r in s) {
        var o = this.options[s[r]];
        typeof o == "string" ? o = o.length > 0 ? o.split(/\s*,\s*/i) : [] : typeof o == "boolean" && s[r] === "points" && (o = o ? i : []), this.options[s[r]] = o;
      }
      this.options.points = [i, this.options.points].reduce(function(n, h) {
        return n.filter(function(d) {
          return h.indexOf(d) > -1;
        });
      }), this.options.points = [this.options.points, this.options.pointsExclude].reduce(function(n, h) {
        return n.filter(function(d) {
          return h.indexOf(d) < 0;
        });
      }), this.parent = this.el.parent(), this.nested = this.nested || this.parent.group(), this.nested.matrix(new SVG.Matrix(this.el).translate(a.x, a.y)), this.options.deepSelect && ["line", "polyline", "polygon"].indexOf(this.el.type) !== -1 ? this.selectPoints(e) : this.selectRect(e), this.observe(), this.cleanup();
    }, y.prototype.selectPoints = function(e) {
      return this.pointSelection.isSelected = e, this.pointSelection.set || (this.pointSelection.set = this.parent.set(), this.drawPoints()), this;
    }, y.prototype.getPointArray = function() {
      var e = this.el.bbox();
      return this.el.array().valueOf().map(function(t) {
        return [t[0] - e.x, t[1] - e.y];
      });
    }, y.prototype.drawPoints = function() {
      for (var e = this, t = this.getPointArray(), a = 0, i = t.length; a < i; ++a) {
        var r = /* @__PURE__ */ function(o) {
          return function(n) {
            (n = n || window.event).preventDefault ? n.preventDefault() : n.returnValue = !1, n.stopPropagation();
            var h = n.pageX || n.touches[0].pageX, d = n.pageY || n.touches[0].pageY;
            e.el.fire("point", { x: h, y: d, i: o, event: n });
          };
        }(a), s = this.drawPoint(t[a][0], t[a][1]).addClass(this.options.classPoints).addClass(this.options.classPoints + "_point").on("touchstart", r).on("mousedown", r);
        this.pointSelection.set.add(s);
      }
    }, y.prototype.drawPoint = function(e, t) {
      var a = this.options.pointType;
      switch (a) {
        case "circle":
          return this.drawCircle(e, t);
        case "rect":
          return this.drawRect(e, t);
        default:
          if (typeof a == "function") return a.call(this, e, t);
          throw new Error("Unknown " + a + " point type!");
      }
    }, y.prototype.drawCircle = function(e, t) {
      return this.nested.circle(this.options.pointSize).center(e, t);
    }, y.prototype.drawRect = function(e, t) {
      return this.nested.rect(this.options.pointSize, this.options.pointSize).center(e, t);
    }, y.prototype.updatePointSelection = function() {
      var e = this.getPointArray();
      this.pointSelection.set.each(function(t) {
        this.cx() === e[t][0] && this.cy() === e[t][1] || this.center(e[t][0], e[t][1]);
      });
    }, y.prototype.updateRectSelection = function() {
      var e = this, t = this.el.bbox();
      if (this.rectSelection.set.get(0).attr({ width: t.width, height: t.height }), this.options.points.length && this.options.points.map(function(i, r) {
        var s = e.pointCoords(i, t);
        e.rectSelection.set.get(r + 1).center(s.x, s.y);
      }), this.options.rotationPoint) {
        var a = this.rectSelection.set.length();
        this.rectSelection.set.get(a - 1).center(t.width / 2, 20);
      }
    }, y.prototype.selectRect = function(e) {
      var t = this, a = this.el.bbox();
      function i(o) {
        return function(n) {
          (n = n || window.event).preventDefault ? n.preventDefault() : n.returnValue = !1, n.stopPropagation();
          var h = n.pageX || n.touches[0].pageX, d = n.pageY || n.touches[0].pageY;
          t.el.fire(o, { x: h, y: d, event: n });
        };
      }
      if (this.rectSelection.isSelected = e, this.rectSelection.set = this.rectSelection.set || this.parent.set(), this.rectSelection.set.get(0) || this.rectSelection.set.add(this.nested.rect(a.width, a.height).addClass(this.options.classRect)), this.options.points.length && this.rectSelection.set.length() < 2 && (this.options.points.map(function(o, n) {
        var h = t.pointCoords(o, a), d = t.drawPoint(h.x, h.y).attr("class", t.options.classPoints + "_" + o).on("mousedown", i(o)).on("touchstart", i(o));
        t.rectSelection.set.add(d);
      }), this.rectSelection.set.each(function() {
        this.addClass(t.options.classPoints);
      })), this.options.rotationPoint && (this.options.points && !this.rectSelection.set.get(9) || !this.options.points && !this.rectSelection.set.get(1))) {
        var r = function(o) {
          (o = o || window.event).preventDefault ? o.preventDefault() : o.returnValue = !1, o.stopPropagation();
          var n = o.pageX || o.touches[0].pageX, h = o.pageY || o.touches[0].pageY;
          t.el.fire("rot", { x: n, y: h, event: o });
        }, s = this.drawPoint(a.width / 2, 20).attr("class", this.options.classPoints + "_rot").on("touchstart", r).on("mousedown", r);
        this.rectSelection.set.add(s);
      }
    }, y.prototype.handler = function() {
      var e = this.el.bbox();
      this.nested.matrix(new SVG.Matrix(this.el).translate(e.x, e.y)), this.rectSelection.isSelected && this.updateRectSelection(), this.pointSelection.isSelected && this.updatePointSelection();
    }, y.prototype.observe = function() {
      var e = this;
      if (MutationObserver) if (this.rectSelection.isSelected || this.pointSelection.isSelected) this.observerInst = this.observerInst || new MutationObserver(function() {
        e.handler();
      }), this.observerInst.observe(this.el.node, { attributes: !0 });
      else try {
        this.observerInst.disconnect(), delete this.observerInst;
      } catch {
      }
      else this.el.off("DOMAttrModified.select"), (this.rectSelection.isSelected || this.pointSelection.isSelected) && this.el.on("DOMAttrModified.select", function() {
        e.handler();
      });
    }, y.prototype.cleanup = function() {
      !this.rectSelection.isSelected && this.rectSelection.set && (this.rectSelection.set.each(function() {
        this.remove();
      }), this.rectSelection.set.clear(), delete this.rectSelection.set), !this.pointSelection.isSelected && this.pointSelection.set && (this.pointSelection.set.each(function() {
        this.remove();
      }), this.pointSelection.set.clear(), delete this.pointSelection.set), this.pointSelection.isSelected || this.rectSelection.isSelected || (this.nested.remove(), delete this.nested);
    }, SVG.extend(SVG.Element, { selectize: function(e, t) {
      return typeof e == "object" && (t = e, e = !0), (this.remember("_selectHandler") || new y(this)).init(e === void 0 || e, t || {}), this;
    } }), SVG.Element.prototype.selectize.defaults = { points: ["lt", "rt", "rb", "lb", "t", "r", "b", "l"], pointsExclude: [], classRect: "svg_select_boundingRect", classPoints: "svg_select_points", pointSize: 7, rotationPoint: !0, deepSelect: !1, pointType: "circle" };
  }(), function() {
    (function() {
      function y(e) {
        e.remember("_resizeHandler", this), this.el = e, this.parameters = {}, this.lastUpdateCall = null, this.p = e.doc().node.createSVGPoint();
      }
      y.prototype.transformPoint = function(e, t, a) {
        return this.p.x = e - (this.offset.x - window.pageXOffset), this.p.y = t - (this.offset.y - window.pageYOffset), this.p.matrixTransform(a || this.m);
      }, y.prototype._extractPosition = function(e) {
        return { x: e.clientX != null ? e.clientX : e.touches[0].clientX, y: e.clientY != null ? e.clientY : e.touches[0].clientY };
      }, y.prototype.init = function(e) {
        var t = this;
        if (this.stop(), e !== "stop") {
          for (var a in this.options = {}, this.el.resize.defaults) this.options[a] = this.el.resize.defaults[a], e[a] !== void 0 && (this.options[a] = e[a]);
          this.el.on("lt.resize", function(i) {
            t.resize(i || window.event);
          }), this.el.on("rt.resize", function(i) {
            t.resize(i || window.event);
          }), this.el.on("rb.resize", function(i) {
            t.resize(i || window.event);
          }), this.el.on("lb.resize", function(i) {
            t.resize(i || window.event);
          }), this.el.on("t.resize", function(i) {
            t.resize(i || window.event);
          }), this.el.on("r.resize", function(i) {
            t.resize(i || window.event);
          }), this.el.on("b.resize", function(i) {
            t.resize(i || window.event);
          }), this.el.on("l.resize", function(i) {
            t.resize(i || window.event);
          }), this.el.on("rot.resize", function(i) {
            t.resize(i || window.event);
          }), this.el.on("point.resize", function(i) {
            t.resize(i || window.event);
          }), this.update();
        }
      }, y.prototype.stop = function() {
        return this.el.off("lt.resize"), this.el.off("rt.resize"), this.el.off("rb.resize"), this.el.off("lb.resize"), this.el.off("t.resize"), this.el.off("r.resize"), this.el.off("b.resize"), this.el.off("l.resize"), this.el.off("rot.resize"), this.el.off("point.resize"), this;
      }, y.prototype.resize = function(e) {
        var t = this;
        this.m = this.el.node.getScreenCTM().inverse(), this.offset = { x: window.pageXOffset, y: window.pageYOffset };
        var a = this._extractPosition(e.detail.event);
        if (this.parameters = { type: this.el.type, p: this.transformPoint(a.x, a.y), x: e.detail.x, y: e.detail.y, box: this.el.bbox(), rotation: this.el.transform().rotation }, this.el.type === "text" && (this.parameters.fontSize = this.el.attr()["font-size"]), e.detail.i !== void 0) {
          var i = this.el.array().valueOf();
          this.parameters.i = e.detail.i, this.parameters.pointCoords = [i[e.detail.i][0], i[e.detail.i][1]];
        }
        switch (e.type) {
          case "lt":
            this.calc = function(r, s) {
              var o = this.snapToGrid(r, s);
              if (this.parameters.box.width - o[0] > 0 && this.parameters.box.height - o[1] > 0) {
                if (this.parameters.type === "text") return this.el.move(this.parameters.box.x + o[0], this.parameters.box.y), void this.el.attr("font-size", this.parameters.fontSize - o[0]);
                o = this.checkAspectRatio(o), this.el.move(this.parameters.box.x + o[0], this.parameters.box.y + o[1]).size(this.parameters.box.width - o[0], this.parameters.box.height - o[1]);
              }
            };
            break;
          case "rt":
            this.calc = function(r, s) {
              var o = this.snapToGrid(r, s, 2);
              if (this.parameters.box.width + o[0] > 0 && this.parameters.box.height - o[1] > 0) {
                if (this.parameters.type === "text") return this.el.move(this.parameters.box.x - o[0], this.parameters.box.y), void this.el.attr("font-size", this.parameters.fontSize + o[0]);
                o = this.checkAspectRatio(o, !0), this.el.move(this.parameters.box.x, this.parameters.box.y + o[1]).size(this.parameters.box.width + o[0], this.parameters.box.height - o[1]);
              }
            };
            break;
          case "rb":
            this.calc = function(r, s) {
              var o = this.snapToGrid(r, s, 0);
              if (this.parameters.box.width + o[0] > 0 && this.parameters.box.height + o[1] > 0) {
                if (this.parameters.type === "text") return this.el.move(this.parameters.box.x - o[0], this.parameters.box.y), void this.el.attr("font-size", this.parameters.fontSize + o[0]);
                o = this.checkAspectRatio(o), this.el.move(this.parameters.box.x, this.parameters.box.y).size(this.parameters.box.width + o[0], this.parameters.box.height + o[1]);
              }
            };
            break;
          case "lb":
            this.calc = function(r, s) {
              var o = this.snapToGrid(r, s, 1);
              if (this.parameters.box.width - o[0] > 0 && this.parameters.box.height + o[1] > 0) {
                if (this.parameters.type === "text") return this.el.move(this.parameters.box.x + o[0], this.parameters.box.y), void this.el.attr("font-size", this.parameters.fontSize - o[0]);
                o = this.checkAspectRatio(o, !0), this.el.move(this.parameters.box.x + o[0], this.parameters.box.y).size(this.parameters.box.width - o[0], this.parameters.box.height + o[1]);
              }
            };
            break;
          case "t":
            this.calc = function(r, s) {
              var o = this.snapToGrid(r, s, 2);
              if (this.parameters.box.height - o[1] > 0) {
                if (this.parameters.type === "text") return;
                this.el.move(this.parameters.box.x, this.parameters.box.y + o[1]).height(this.parameters.box.height - o[1]);
              }
            };
            break;
          case "r":
            this.calc = function(r, s) {
              var o = this.snapToGrid(r, s, 0);
              if (this.parameters.box.width + o[0] > 0) {
                if (this.parameters.type === "text") return;
                this.el.move(this.parameters.box.x, this.parameters.box.y).width(this.parameters.box.width + o[0]);
              }
            };
            break;
          case "b":
            this.calc = function(r, s) {
              var o = this.snapToGrid(r, s, 0);
              if (this.parameters.box.height + o[1] > 0) {
                if (this.parameters.type === "text") return;
                this.el.move(this.parameters.box.x, this.parameters.box.y).height(this.parameters.box.height + o[1]);
              }
            };
            break;
          case "l":
            this.calc = function(r, s) {
              var o = this.snapToGrid(r, s, 1);
              if (this.parameters.box.width - o[0] > 0) {
                if (this.parameters.type === "text") return;
                this.el.move(this.parameters.box.x + o[0], this.parameters.box.y).width(this.parameters.box.width - o[0]);
              }
            };
            break;
          case "rot":
            this.calc = function(r, s) {
              var o = r + this.parameters.p.x, n = s + this.parameters.p.y, h = Math.atan2(this.parameters.p.y - this.parameters.box.y - this.parameters.box.height / 2, this.parameters.p.x - this.parameters.box.x - this.parameters.box.width / 2), d = Math.atan2(n - this.parameters.box.y - this.parameters.box.height / 2, o - this.parameters.box.x - this.parameters.box.width / 2), c = this.parameters.rotation + 180 * (d - h) / Math.PI + this.options.snapToAngle / 2;
              this.el.center(this.parameters.box.cx, this.parameters.box.cy).rotate(c - c % this.options.snapToAngle, this.parameters.box.cx, this.parameters.box.cy);
            };
            break;
          case "point":
            this.calc = function(r, s) {
              var o = this.snapToGrid(r, s, this.parameters.pointCoords[0], this.parameters.pointCoords[1]), n = this.el.array().valueOf();
              n[this.parameters.i][0] = this.parameters.pointCoords[0] + o[0], n[this.parameters.i][1] = this.parameters.pointCoords[1] + o[1], this.el.plot(n);
            };
        }
        this.el.fire("resizestart", { dx: this.parameters.x, dy: this.parameters.y, event: e }), SVG.on(window, "touchmove.resize", function(r) {
          t.update(r || window.event);
        }), SVG.on(window, "touchend.resize", function() {
          t.done();
        }), SVG.on(window, "mousemove.resize", function(r) {
          t.update(r || window.event);
        }), SVG.on(window, "mouseup.resize", function() {
          t.done();
        });
      }, y.prototype.update = function(e) {
        if (e) {
          var t = this._extractPosition(e), a = this.transformPoint(t.x, t.y), i = a.x - this.parameters.p.x, r = a.y - this.parameters.p.y;
          this.lastUpdateCall = [i, r], this.calc(i, r), this.el.fire("resizing", { dx: i, dy: r, event: e });
        } else this.lastUpdateCall && this.calc(this.lastUpdateCall[0], this.lastUpdateCall[1]);
      }, y.prototype.done = function() {
        this.lastUpdateCall = null, SVG.off(window, "mousemove.resize"), SVG.off(window, "mouseup.resize"), SVG.off(window, "touchmove.resize"), SVG.off(window, "touchend.resize"), this.el.fire("resizedone");
      }, y.prototype.snapToGrid = function(e, t, a, i) {
        var r;
        return i !== void 0 ? r = [(a + e) % this.options.snapToGrid, (i + t) % this.options.snapToGrid] : (a = a ?? 3, r = [(this.parameters.box.x + e + (1 & a ? 0 : this.parameters.box.width)) % this.options.snapToGrid, (this.parameters.box.y + t + (2 & a ? 0 : this.parameters.box.height)) % this.options.snapToGrid]), e < 0 && (r[0] -= this.options.snapToGrid), t < 0 && (r[1] -= this.options.snapToGrid), e -= Math.abs(r[0]) < this.options.snapToGrid / 2 ? r[0] : r[0] - (e < 0 ? -this.options.snapToGrid : this.options.snapToGrid), t -= Math.abs(r[1]) < this.options.snapToGrid / 2 ? r[1] : r[1] - (t < 0 ? -this.options.snapToGrid : this.options.snapToGrid), this.constraintToBox(e, t, a, i);
      }, y.prototype.constraintToBox = function(e, t, a, i) {
        var r, s, o = this.options.constraint || {};
        return i !== void 0 ? (r = a, s = i) : (r = this.parameters.box.x + (1 & a ? 0 : this.parameters.box.width), s = this.parameters.box.y + (2 & a ? 0 : this.parameters.box.height)), o.minX !== void 0 && r + e < o.minX && (e = o.minX - r), o.maxX !== void 0 && r + e > o.maxX && (e = o.maxX - r), o.minY !== void 0 && s + t < o.minY && (t = o.minY - s), o.maxY !== void 0 && s + t > o.maxY && (t = o.maxY - s), [e, t];
      }, y.prototype.checkAspectRatio = function(e, t) {
        if (!this.options.saveAspectRatio) return e;
        var a = e.slice(), i = this.parameters.box.width / this.parameters.box.height, r = this.parameters.box.width + e[0], s = this.parameters.box.height - e[1], o = r / s;
        return o < i ? (a[1] = r / i - this.parameters.box.height, t && (a[1] = -a[1])) : o > i && (a[0] = this.parameters.box.width - s * i, t && (a[0] = -a[0])), a;
      }, SVG.extend(SVG.Element, { resize: function(e) {
        return (this.remember("_resizeHandler") || new y(this)).init(e || {}), this;
      } }), SVG.Element.prototype.resize.defaults = { snapToAngle: 0.1, snapToGrid: 1, constraint: {}, saveAspectRatio: !1 };
    }).call(this);
  }(), window.Apex === void 0 && (window.Apex = {});
  var La = function() {
    function y(e) {
      T(this, y), this.ctx = e, this.w = e.w;
    }
    return E(y, [{ key: "initModules", value: function() {
      this.ctx.publicMethods = ["updateOptions", "updateSeries", "appendData", "appendSeries", "isSeriesHidden", "highlightSeries", "toggleSeries", "showSeries", "hideSeries", "setLocale", "resetSeries", "zoomX", "toggleDataPointSelection", "dataURI", "exportToCSV", "addXaxisAnnotation", "addYaxisAnnotation", "addPointAnnotation", "clearAnnotations", "removeAnnotation", "paper", "destroy"], this.ctx.eventList = ["click", "mousedown", "mousemove", "mouseleave", "touchstart", "touchmove", "touchleave", "mouseup", "touchend"], this.ctx.animations = new ye(this.ctx), this.ctx.axes = new ei(this.ctx), this.ctx.core = new Li(this.ctx.el, this.ctx), this.ctx.config = new bt({}), this.ctx.data = new jt(this.ctx), this.ctx.grid = new fa(this.ctx), this.ctx.graphics = new X(this.ctx), this.ctx.coreUtils = new Te(this.ctx), this.ctx.crosshairs = new Zt(this.ctx), this.ctx.events = new Ka(this.ctx), this.ctx.exports = new Lt(this.ctx), this.ctx.fill = new Ke(this.ctx), this.ctx.localization = new Qa(this.ctx), this.ctx.options = new Je(), this.ctx.responsive = new ti(this.ctx), this.ctx.series = new qe(this.ctx), this.ctx.theme = new ai(this.ctx), this.ctx.formatters = new He(this.ctx), this.ctx.titleSubtitle = new ii(this.ctx), this.ctx.legend = new xa(this.ctx), this.ctx.toolbar = new ba(this.ctx), this.ctx.tooltip = new wa(this.ctx), this.ctx.dimensions = new Mt(this.ctx), this.ctx.updateHelpers = new Mi(this.ctx), this.ctx.zoomPanSelection = new hi(this.ctx), this.ctx.w.globals.tooltip = new wa(this.ctx);
    } }]), y;
  }(), Ma = function() {
    function y(e) {
      T(this, y), this.ctx = e, this.w = e.w;
    }
    return E(y, [{ key: "clear", value: function(e) {
      var t = e.isUpdating;
      this.ctx.zoomPanSelection && this.ctx.zoomPanSelection.destroy(), this.ctx.toolbar && this.ctx.toolbar.destroy(), this.ctx.animations = null, this.ctx.axes = null, this.ctx.annotations = null, this.ctx.core = null, this.ctx.data = null, this.ctx.grid = null, this.ctx.series = null, this.ctx.responsive = null, this.ctx.theme = null, this.ctx.formatters = null, this.ctx.titleSubtitle = null, this.ctx.legend = null, this.ctx.dimensions = null, this.ctx.options = null, this.ctx.crosshairs = null, this.ctx.zoomPanSelection = null, this.ctx.updateHelpers = null, this.ctx.toolbar = null, this.ctx.localization = null, this.ctx.w.globals.tooltip = null, this.clearDomElements({ isUpdating: t });
    } }, { key: "killSVG", value: function(e) {
      e.each(function() {
        this.removeClass("*"), this.off(), this.stop();
      }, !0), e.ungroup(), e.clear();
    } }, { key: "clearDomElements", value: function(e) {
      var t = this, a = e.isUpdating, i = this.w.globals.dom.Paper.node;
      i.parentNode && i.parentNode.parentNode && !a && (i.parentNode.parentNode.style.minHeight = "unset");
      var r = this.w.globals.dom.baseEl;
      r && this.ctx.eventList.forEach(function(o) {
        r.removeEventListener(o, t.ctx.events.documentEvent);
      });
      var s = this.w.globals.dom;
      if (this.ctx.el !== null) for (; this.ctx.el.firstChild; ) this.ctx.el.removeChild(this.ctx.el.firstChild);
      this.killSVG(s.Paper), s.Paper.remove(), s.elWrap = null, s.elGraphical = null, s.elLegendWrap = null, s.elLegendForeign = null, s.baseEl = null, s.elGridRect = null, s.elGridRectMask = null, s.elGridRectBarMask = null, s.elGridRectMarkerMask = null, s.elForecastMask = null, s.elNonForecastMask = null, s.elDefs = null;
    } }]), y;
  }(), Qt = /* @__PURE__ */ new WeakMap(), Ti = function() {
    function y(e, t) {
      T(this, y), this.opts = t, this.ctx = this, this.w = new Ja(t).init(), this.el = e, this.w.globals.cuid = z.randomId(), this.w.globals.chartID = this.w.config.chart.id ? z.escapeString(this.w.config.chart.id) : this.w.globals.cuid, new La(this).initModules(), this.create = z.bind(this.create, this), this.windowResizeHandler = this._windowResizeHandler.bind(this), this.parentResizeHandler = this._parentResizeCallback.bind(this);
    }
    return E(y, [{ key: "render", value: function() {
      var e = this;
      return new Promise(function(t, a) {
        if (e.el !== null) {
          Apex._chartInstances === void 0 && (Apex._chartInstances = []), e.w.config.chart.id && Apex._chartInstances.push({ id: e.w.globals.chartID, group: e.w.config.chart.group, chart: e }), e.setLocale(e.w.config.chart.defaultLocale);
          var i = e.w.config.chart.events.beforeMount;
          typeof i == "function" && i(e, e.w), e.events.fireEvent("beforeMount", [e, e.w]), window.addEventListener("resize", e.windowResizeHandler), function(u, p) {
            var m = !1;
            if (u.nodeType !== Node.DOCUMENT_FRAGMENT_NODE) {
              var f = u.getBoundingClientRect();
              u.style.display !== "none" && f.width !== 0 || (m = !0);
            }
            var b = new ResizeObserver(function(v) {
              m && p.call(u, v), m = !0;
            });
            u.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? Array.from(u.children).forEach(function(v) {
              return b.observe(v);
            }) : b.observe(u), Qt.set(p, b);
          }(e.el.parentNode, e.parentResizeHandler);
          var r = e.el.getRootNode && e.el.getRootNode(), s = z.is("ShadowRoot", r), o = e.el.ownerDocument, n = s ? r.getElementById("apexcharts-css") : o.getElementById("apexcharts-css");
          if (!n) {
            var h;
            (n = document.createElement("style")).id = "apexcharts-css", n.textContent = `@keyframes opaque {
  0% {
    opacity: 0
  }

  to {
    opacity: 1
  }
}

@keyframes resizeanim {

  0%,
  to {
    opacity: 0
  }
}

.apexcharts-canvas {
  position: relative;
  direction: ltr !important;
  user-select: none
}

.apexcharts-canvas ::-webkit-scrollbar {
  -webkit-appearance: none;
  width: 6px
}

.apexcharts-canvas ::-webkit-scrollbar-thumb {
  border-radius: 4px;
  background-color: rgba(0, 0, 0, .5);
  box-shadow: 0 0 1px rgba(255, 255, 255, .5);
  -webkit-box-shadow: 0 0 1px rgba(255, 255, 255, .5)
}

.apexcharts-inner {
  position: relative
}

.apexcharts-text tspan {
  font-family: inherit
}

rect.legend-mouseover-inactive,
.legend-mouseover-inactive rect,
.legend-mouseover-inactive path,
.legend-mouseover-inactive circle,
.legend-mouseover-inactive line,
.legend-mouseover-inactive text.apexcharts-yaxis-title-text,
.legend-mouseover-inactive text.apexcharts-yaxis-label {
  transition: .15s ease all;
  opacity: .2
}

.apexcharts-legend-text {
  padding-left: 15px;
  margin-left: -15px;
}

.apexcharts-series-collapsed {
  opacity: 0
}

.apexcharts-tooltip {
  border-radius: 5px;
  box-shadow: 2px 2px 6px -4px #999;
  cursor: default;
  font-size: 14px;
  left: 62px;
  opacity: 0;
  pointer-events: none;
  position: absolute;
  top: 20px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  white-space: nowrap;
  z-index: 12;
  transition: .15s ease all
}

.apexcharts-tooltip.apexcharts-active {
  opacity: 1;
  transition: .15s ease all
}

.apexcharts-tooltip.apexcharts-theme-light {
  border: 1px solid #e3e3e3;
  background: rgba(255, 255, 255, .96)
}

.apexcharts-tooltip.apexcharts-theme-dark {
  color: #fff;
  background: rgba(30, 30, 30, .8)
}

.apexcharts-tooltip * {
  font-family: inherit
}

.apexcharts-tooltip-title {
  padding: 6px;
  font-size: 15px;
  margin-bottom: 4px
}

.apexcharts-tooltip.apexcharts-theme-light .apexcharts-tooltip-title {
  background: #eceff1;
  border-bottom: 1px solid #ddd
}

.apexcharts-tooltip.apexcharts-theme-dark .apexcharts-tooltip-title {
  background: rgba(0, 0, 0, .7);
  border-bottom: 1px solid #333
}

.apexcharts-tooltip-text-goals-value,
.apexcharts-tooltip-text-y-value,
.apexcharts-tooltip-text-z-value {
  display: inline-block;
  margin-left: 5px;
  font-weight: 600
}

.apexcharts-tooltip-text-goals-label:empty,
.apexcharts-tooltip-text-goals-value:empty,
.apexcharts-tooltip-text-y-label:empty,
.apexcharts-tooltip-text-y-value:empty,
.apexcharts-tooltip-text-z-value:empty,
.apexcharts-tooltip-title:empty {
  display: none
}

.apexcharts-tooltip-text-goals-label,
.apexcharts-tooltip-text-goals-value {
  padding: 6px 0 5px
}

.apexcharts-tooltip-goals-group,
.apexcharts-tooltip-text-goals-label,
.apexcharts-tooltip-text-goals-value {
  display: flex
}

.apexcharts-tooltip-text-goals-label:not(:empty),
.apexcharts-tooltip-text-goals-value:not(:empty) {
  margin-top: -6px
}

.apexcharts-tooltip-marker {
  width: 12px;
  height: 12px;
  position: relative;
  top: 0;
  margin-right: 10px;
  border-radius: 50%
}

.apexcharts-tooltip-series-group {
  padding: 0 10px;
  display: none;
  text-align: left;
  justify-content: left;
  align-items: center
}

.apexcharts-tooltip-series-group.apexcharts-active .apexcharts-tooltip-marker {
  opacity: 1
}

.apexcharts-tooltip-series-group.apexcharts-active,
.apexcharts-tooltip-series-group:last-child {
  padding-bottom: 4px
}

.apexcharts-tooltip-y-group {
  padding: 6px 0 5px
}

.apexcharts-custom-tooltip,
.apexcharts-tooltip-box {
  padding: 4px 8px
}

.apexcharts-tooltip-boxPlot {
  display: flex;
  flex-direction: column-reverse
}

.apexcharts-tooltip-box>div {
  margin: 4px 0
}

.apexcharts-tooltip-box span.value {
  font-weight: 700
}

.apexcharts-tooltip-rangebar {
  padding: 5px 8px
}

.apexcharts-tooltip-rangebar .category {
  font-weight: 600;
  color: #777
}

.apexcharts-tooltip-rangebar .series-name {
  font-weight: 700;
  display: block;
  margin-bottom: 5px
}

.apexcharts-xaxistooltip,
.apexcharts-yaxistooltip {
  opacity: 0;
  pointer-events: none;
  color: #373d3f;
  font-size: 13px;
  text-align: center;
  border-radius: 2px;
  position: absolute;
  z-index: 10;
  background: #eceff1;
  border: 1px solid #90a4ae
}

.apexcharts-xaxistooltip {
  padding: 9px 10px;
  transition: .15s ease all
}

.apexcharts-xaxistooltip.apexcharts-theme-dark {
  background: rgba(0, 0, 0, .7);
  border: 1px solid rgba(0, 0, 0, .5);
  color: #fff
}

.apexcharts-xaxistooltip:after,
.apexcharts-xaxistooltip:before {
  left: 50%;
  border: solid transparent;
  content: " ";
  height: 0;
  width: 0;
  position: absolute;
  pointer-events: none
}

.apexcharts-xaxistooltip:after {
  border-color: transparent;
  border-width: 6px;
  margin-left: -6px
}

.apexcharts-xaxistooltip:before {
  border-color: transparent;
  border-width: 7px;
  margin-left: -7px
}

.apexcharts-xaxistooltip-bottom:after,
.apexcharts-xaxistooltip-bottom:before {
  bottom: 100%
}

.apexcharts-xaxistooltip-top:after,
.apexcharts-xaxistooltip-top:before {
  top: 100%
}

.apexcharts-xaxistooltip-bottom:after {
  border-bottom-color: #eceff1
}

.apexcharts-xaxistooltip-bottom:before {
  border-bottom-color: #90a4ae
}

.apexcharts-xaxistooltip-bottom.apexcharts-theme-dark:after,
.apexcharts-xaxistooltip-bottom.apexcharts-theme-dark:before {
  border-bottom-color: rgba(0, 0, 0, .5)
}

.apexcharts-xaxistooltip-top:after {
  border-top-color: #eceff1
}

.apexcharts-xaxistooltip-top:before {
  border-top-color: #90a4ae
}

.apexcharts-xaxistooltip-top.apexcharts-theme-dark:after,
.apexcharts-xaxistooltip-top.apexcharts-theme-dark:before {
  border-top-color: rgba(0, 0, 0, .5)
}

.apexcharts-xaxistooltip.apexcharts-active {
  opacity: 1;
  transition: .15s ease all
}

.apexcharts-yaxistooltip {
  padding: 4px 10px
}

.apexcharts-yaxistooltip.apexcharts-theme-dark {
  background: rgba(0, 0, 0, .7);
  border: 1px solid rgba(0, 0, 0, .5);
  color: #fff
}

.apexcharts-yaxistooltip:after,
.apexcharts-yaxistooltip:before {
  top: 50%;
  border: solid transparent;
  content: " ";
  height: 0;
  width: 0;
  position: absolute;
  pointer-events: none
}

.apexcharts-yaxistooltip:after {
  border-color: transparent;
  border-width: 6px;
  margin-top: -6px
}

.apexcharts-yaxistooltip:before {
  border-color: transparent;
  border-width: 7px;
  margin-top: -7px
}

.apexcharts-yaxistooltip-left:after,
.apexcharts-yaxistooltip-left:before {
  left: 100%
}

.apexcharts-yaxistooltip-right:after,
.apexcharts-yaxistooltip-right:before {
  right: 100%
}

.apexcharts-yaxistooltip-left:after {
  border-left-color: #eceff1
}

.apexcharts-yaxistooltip-left:before {
  border-left-color: #90a4ae
}

.apexcharts-yaxistooltip-left.apexcharts-theme-dark:after,
.apexcharts-yaxistooltip-left.apexcharts-theme-dark:before {
  border-left-color: rgba(0, 0, 0, .5)
}

.apexcharts-yaxistooltip-right:after {
  border-right-color: #eceff1
}

.apexcharts-yaxistooltip-right:before {
  border-right-color: #90a4ae
}

.apexcharts-yaxistooltip-right.apexcharts-theme-dark:after,
.apexcharts-yaxistooltip-right.apexcharts-theme-dark:before {
  border-right-color: rgba(0, 0, 0, .5)
}

.apexcharts-yaxistooltip.apexcharts-active {
  opacity: 1
}

.apexcharts-yaxistooltip-hidden {
  display: none
}

.apexcharts-xcrosshairs,
.apexcharts-ycrosshairs {
  pointer-events: none;
  opacity: 0;
  transition: .15s ease all
}

.apexcharts-xcrosshairs.apexcharts-active,
.apexcharts-ycrosshairs.apexcharts-active {
  opacity: 1;
  transition: .15s ease all
}

.apexcharts-ycrosshairs-hidden {
  opacity: 0
}

.apexcharts-selection-rect {
  cursor: move
}

.svg_select_boundingRect,
.svg_select_points_rot {
  pointer-events: none;
  opacity: 0;
  visibility: hidden
}

.apexcharts-selection-rect+g .svg_select_boundingRect,
.apexcharts-selection-rect+g .svg_select_points_rot {
  opacity: 0;
  visibility: hidden
}

.apexcharts-selection-rect+g .svg_select_points_l,
.apexcharts-selection-rect+g .svg_select_points_r {
  cursor: ew-resize;
  opacity: 1;
  visibility: visible
}

.svg_select_points {
  fill: #efefef;
  stroke: #333;
  rx: 2
}

.apexcharts-svg.apexcharts-zoomable.hovering-zoom {
  cursor: crosshair
}

.apexcharts-svg.apexcharts-zoomable.hovering-pan {
  cursor: move
}

.apexcharts-menu-icon,
.apexcharts-pan-icon,
.apexcharts-reset-icon,
.apexcharts-selection-icon,
.apexcharts-toolbar-custom-icon,
.apexcharts-zoom-icon,
.apexcharts-zoomin-icon,
.apexcharts-zoomout-icon {
  cursor: pointer;
  width: 20px;
  height: 20px;
  line-height: 24px;
  color: #6e8192;
  text-align: center
}

.apexcharts-menu-icon svg,
.apexcharts-reset-icon svg,
.apexcharts-zoom-icon svg,
.apexcharts-zoomin-icon svg,
.apexcharts-zoomout-icon svg {
  fill: #6e8192
}

.apexcharts-selection-icon svg {
  fill: #444;
  transform: scale(.76)
}

.apexcharts-theme-dark .apexcharts-menu-icon svg,
.apexcharts-theme-dark .apexcharts-pan-icon svg,
.apexcharts-theme-dark .apexcharts-reset-icon svg,
.apexcharts-theme-dark .apexcharts-selection-icon svg,
.apexcharts-theme-dark .apexcharts-toolbar-custom-icon svg,
.apexcharts-theme-dark .apexcharts-zoom-icon svg,
.apexcharts-theme-dark .apexcharts-zoomin-icon svg,
.apexcharts-theme-dark .apexcharts-zoomout-icon svg {
  fill: #f3f4f5
}

.apexcharts-canvas .apexcharts-reset-zoom-icon.apexcharts-selected svg,
.apexcharts-canvas .apexcharts-selection-icon.apexcharts-selected svg,
.apexcharts-canvas .apexcharts-zoom-icon.apexcharts-selected svg {
  fill: #008ffb
}

.apexcharts-theme-light .apexcharts-menu-icon:hover svg,
.apexcharts-theme-light .apexcharts-reset-icon:hover svg,
.apexcharts-theme-light .apexcharts-selection-icon:not(.apexcharts-selected):hover svg,
.apexcharts-theme-light .apexcharts-zoom-icon:not(.apexcharts-selected):hover svg,
.apexcharts-theme-light .apexcharts-zoomin-icon:hover svg,
.apexcharts-theme-light .apexcharts-zoomout-icon:hover svg {
  fill: #333
}

.apexcharts-menu-icon,
.apexcharts-selection-icon {
  position: relative
}

.apexcharts-reset-icon {
  margin-left: 5px
}

.apexcharts-menu-icon,
.apexcharts-reset-icon,
.apexcharts-zoom-icon {
  transform: scale(.85)
}

.apexcharts-zoomin-icon,
.apexcharts-zoomout-icon {
  transform: scale(.7)
}

.apexcharts-zoomout-icon {
  margin-right: 3px
}

.apexcharts-pan-icon {
  transform: scale(.62);
  position: relative;
  left: 1px;
  top: 0
}

.apexcharts-pan-icon svg {
  fill: #fff;
  stroke: #6e8192;
  stroke-width: 2
}

.apexcharts-pan-icon.apexcharts-selected svg {
  stroke: #008ffb
}

.apexcharts-pan-icon:not(.apexcharts-selected):hover svg {
  stroke: #333
}

.apexcharts-toolbar {
  position: absolute;
  z-index: 11;
  max-width: 176px;
  text-align: right;
  border-radius: 3px;
  padding: 0 6px 2px;
  display: flex;
  justify-content: space-between;
  align-items: center
}

.apexcharts-menu {
  background: #fff;
  position: absolute;
  top: 100%;
  border: 1px solid #ddd;
  border-radius: 3px;
  padding: 3px;
  right: 10px;
  opacity: 0;
  min-width: 110px;
  transition: .15s ease all;
  pointer-events: none
}

.apexcharts-menu.apexcharts-menu-open {
  opacity: 1;
  pointer-events: all;
  transition: .15s ease all
}

.apexcharts-menu-item {
  padding: 6px 7px;
  font-size: 12px;
  cursor: pointer
}

.apexcharts-theme-light .apexcharts-menu-item:hover {
  background: #eee
}

.apexcharts-theme-dark .apexcharts-menu {
  background: rgba(0, 0, 0, .7);
  color: #fff
}

@media screen and (min-width:768px) {
  .apexcharts-canvas:hover .apexcharts-toolbar {
    opacity: 1
  }
}

.apexcharts-canvas .apexcharts-element-hidden,
.apexcharts-datalabel.apexcharts-element-hidden,
.apexcharts-hide .apexcharts-series-points {
  opacity: 0;
}

.apexcharts-hidden-element-shown {
  opacity: 1;
  transition: 0.25s ease all;
}

.apexcharts-datalabel,
.apexcharts-datalabel-label,
.apexcharts-datalabel-value,
.apexcharts-datalabels,
.apexcharts-pie-label {
  cursor: default;
  pointer-events: none
}

.apexcharts-pie-label-delay {
  opacity: 0;
  animation-name: opaque;
  animation-duration: .3s;
  animation-fill-mode: forwards;
  animation-timing-function: ease
}

.apexcharts-radialbar-label {
  cursor: pointer;
}

.apexcharts-annotation-rect,
.apexcharts-area-series .apexcharts-area,
.apexcharts-area-series .apexcharts-series-markers .apexcharts-marker.no-pointer-events,
.apexcharts-gridline,
.apexcharts-line,
.apexcharts-line-series .apexcharts-series-markers .apexcharts-marker.no-pointer-events,
.apexcharts-point-annotation-label,
.apexcharts-radar-series path:not(.apexcharts-marker),
.apexcharts-radar-series polygon,
.apexcharts-toolbar svg,
.apexcharts-tooltip .apexcharts-marker,
.apexcharts-xaxis-annotation-label,
.apexcharts-yaxis-annotation-label,
.apexcharts-zoom-rect {
  pointer-events: none
}

.apexcharts-tooltip-active .apexcharts-marker {
  transition: .15s ease all
}

.resize-triggers {
  animation: 1ms resizeanim;
  visibility: hidden;
  opacity: 0;
  height: 100%;
  width: 100%;
  overflow: hidden
}

.contract-trigger:before,
.resize-triggers,
.resize-triggers>div {
  content: " ";
  display: block;
  position: absolute;
  top: 0;
  left: 0
}

.resize-triggers>div {
  height: 100%;
  width: 100%;
  background: #eee;
  overflow: auto
}

.contract-trigger:before {
  overflow: hidden;
  width: 200%;
  height: 200%
}

.apexcharts-bar-goals-markers {
  pointer-events: none
}

.apexcharts-bar-shadows {
  pointer-events: none
}

.apexcharts-rangebar-goals-markers {
  pointer-events: none
}
`;
            var d = ((h = e.opts.chart) === null || h === void 0 ? void 0 : h.nonce) || e.w.config.chart.nonce;
            d && n.setAttribute("nonce", d), s ? r.prepend(n) : o.head.appendChild(n);
          }
          var c = e.create(e.w.config.series, {});
          if (!c) return t(e);
          e.mount(c).then(function() {
            typeof e.w.config.chart.events.mounted == "function" && e.w.config.chart.events.mounted(e, e.w), e.events.fireEvent("mounted", [e, e.w]), t(c);
          }).catch(function(u) {
            a(u);
          });
        } else a(new Error("Element not found"));
      });
    } }, { key: "create", value: function(e, t) {
      var a = this, i = this.w;
      new La(this).initModules();
      var r = this.w.globals;
      if (r.noData = !1, r.animationEnded = !1, this.responsive.checkResponsiveConfig(t), i.config.xaxis.convertedCatToNumeric && new xt(i.config).convertCatToNumericXaxis(i.config, this.ctx), this.el === null || (this.core.setupElements(), i.config.chart.type === "treemap" && (i.config.grid.show = !1, i.config.yaxis[0].show = !1), r.svgWidth === 0)) return r.animationEnded = !0, null;
      var s = e;
      e.forEach(function(u, p) {
        u.hidden && (s = a.legend.legendHelpers.getSeriesAfterCollapsing({ realIndex: p }));
      });
      var o = Te.checkComboSeries(s, i.config.chart.type);
      r.comboCharts = o.comboCharts, r.comboBarCount = o.comboBarCount;
      var n = s.every(function(u) {
        return u.data && u.data.length === 0;
      });
      (s.length === 0 || n && r.collapsedSeries.length < 1) && this.series.handleNoData(), this.events.setupEventHandlers(), this.data.parseData(s), this.theme.init(), new ut(this).setGlobalMarkerSize(), this.formatters.setLabelFormatters(), this.titleSubtitle.draw(), r.noData && r.collapsedSeries.length !== r.series.length && !i.config.legend.showForSingleSeries || this.legend.init(), this.series.hasAllSeriesEqualX(), r.axisCharts && (this.core.coreCalculations(), i.config.xaxis.type !== "category" && this.formatters.setLabelFormatters(), this.ctx.toolbar.minX = i.globals.minX, this.ctx.toolbar.maxX = i.globals.maxX), this.formatters.heatmapLabelFormatters(), new Te(this).getLargestMarkerSize(), this.dimensions.plotCoords();
      var h = this.core.xySettings();
      this.grid.createGridMask();
      var d = this.core.plotChartType(s, h), c = new gt(this);
      return c.bringForward(), i.config.dataLabels.background.enabled && c.dataLabelsBackground(), this.core.shiftGraphPosition(), { elGraph: d, xyRatios: h, dimensions: { plot: { left: i.globals.translateX, top: i.globals.translateY, width: i.globals.gridWidth, height: i.globals.gridHeight } } };
    } }, { key: "mount", value: function() {
      var e = this, t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : null, a = this, i = a.w;
      return new Promise(function(r, s) {
        if (a.el === null) return s(new Error("Not enough data to display or target element not found"));
        (t === null || i.globals.allSeriesCollapsed) && a.series.handleNoData(), a.grid = new fa(a);
        var o, n, h = a.grid.drawGrid();
        if (a.annotations = new qa(a), a.annotations.drawImageAnnos(), a.annotations.drawTextAnnos(), i.config.grid.position === "back" && (h && i.globals.dom.elGraphical.add(h.el), h != null && (o = h.elGridBorders) !== null && o !== void 0 && o.node && i.globals.dom.elGraphical.add(h.elGridBorders)), Array.isArray(t.elGraph)) for (var d = 0; d < t.elGraph.length; d++) i.globals.dom.elGraphical.add(t.elGraph[d]);
        else i.globals.dom.elGraphical.add(t.elGraph);
        i.config.grid.position === "front" && (h && i.globals.dom.elGraphical.add(h.el), h != null && (n = h.elGridBorders) !== null && n !== void 0 && n.node && i.globals.dom.elGraphical.add(h.elGridBorders)), i.config.xaxis.crosshairs.position === "front" && a.crosshairs.drawXCrosshairs(), i.config.yaxis[0].crosshairs.position === "front" && a.crosshairs.drawYCrosshairs(), i.config.chart.type !== "treemap" && a.axes.drawAxis(i.config.chart.type, h);
        var c = new vt(e.ctx, h), u = new Ut(e.ctx, h);
        if (h !== null && (c.xAxisLabelCorrections(h.xAxisTickWidth), u.setYAxisTextAlignments(), i.config.yaxis.map(function(m, f) {
          i.globals.ignoreYAxisIndexes.indexOf(f) === -1 && u.yAxisTitleRotate(f, m.opposite);
        })), a.annotations.drawAxesAnnotations(), !i.globals.noData) {
          if (i.config.tooltip.enabled && !i.globals.noData && a.w.globals.tooltip.drawTooltip(t.xyRatios), i.globals.axisCharts && (i.globals.isXNumeric || i.config.xaxis.convertedCatToNumeric || i.globals.isRangeBar)) (i.config.chart.zoom.enabled || i.config.chart.selection && i.config.chart.selection.enabled || i.config.chart.pan && i.config.chart.pan.enabled) && a.zoomPanSelection.init({ xyRatios: t.xyRatios });
          else {
            var p = i.config.chart.toolbar.tools;
            ["zoom", "zoomin", "zoomout", "selection", "pan", "reset"].forEach(function(m) {
              p[m] = !1;
            });
          }
          i.config.chart.toolbar.show && !i.globals.allSeriesCollapsed && a.toolbar.createToolbar();
        }
        i.globals.memory.methodsToExec.length > 0 && i.globals.memory.methodsToExec.forEach(function(m) {
          m.method(m.params, !1, m.context);
        }), i.globals.axisCharts || i.globals.noData || a.core.resizeNonAxisCharts(), r(a);
      });
    } }, { key: "destroy", value: function() {
      var e, t;
      window.removeEventListener("resize", this.windowResizeHandler), this.el.parentNode, e = this.parentResizeHandler, (t = Qt.get(e)) && (t.disconnect(), Qt.delete(e));
      var a = this.w.config.chart.id;
      a && Apex._chartInstances.forEach(function(i, r) {
        i.id === z.escapeString(a) && Apex._chartInstances.splice(r, 1);
      }), new Ma(this.ctx).clear({ isUpdating: !1 });
    } }, { key: "updateOptions", value: function(e) {
      var t = this, a = arguments.length > 1 && arguments[1] !== void 0 && arguments[1], i = !(arguments.length > 2 && arguments[2] !== void 0) || arguments[2], r = !(arguments.length > 3 && arguments[3] !== void 0) || arguments[3], s = !(arguments.length > 4 && arguments[4] !== void 0) || arguments[4], o = this.w;
      return o.globals.selection = void 0, e.series && (this.series.resetSeries(!1, !0, !1), e.series.length && e.series[0].data && (e.series = e.series.map(function(n, h) {
        return t.updateHelpers._extendSeries(n, h);
      })), this.updateHelpers.revertDefaultAxisMinMax()), e.xaxis && (e = this.updateHelpers.forceXAxisUpdate(e)), e.yaxis && (e = this.updateHelpers.forceYAxisUpdate(e)), o.globals.collapsedSeriesIndices.length > 0 && this.series.clearPreviousPaths(), e.theme && (e = this.theme.updateThemeOptions(e)), this.updateHelpers._updateOptions(e, a, i, r, s);
    } }, { key: "updateSeries", value: function() {
      var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], t = !(arguments.length > 1 && arguments[1] !== void 0) || arguments[1], a = !(arguments.length > 2 && arguments[2] !== void 0) || arguments[2];
      return this.series.resetSeries(!1), this.updateHelpers.revertDefaultAxisMinMax(), this.updateHelpers._updateSeries(e, t, a);
    } }, { key: "appendSeries", value: function(e) {
      var t = !(arguments.length > 1 && arguments[1] !== void 0) || arguments[1], a = !(arguments.length > 2 && arguments[2] !== void 0) || arguments[2], i = this.w.config.series.slice();
      return i.push(e), this.series.resetSeries(!1), this.updateHelpers.revertDefaultAxisMinMax(), this.updateHelpers._updateSeries(i, t, a);
    } }, { key: "appendData", value: function(e) {
      var t = !(arguments.length > 1 && arguments[1] !== void 0) || arguments[1], a = this;
      a.w.globals.dataChanged = !0, a.series.getPreviousPaths();
      for (var i = a.w.config.series.slice(), r = 0; r < i.length; r++) if (e[r] !== null && e[r] !== void 0) for (var s = 0; s < e[r].data.length; s++) i[r].data.push(e[r].data[s]);
      return a.w.config.series = i, t && (a.w.globals.initialSeries = z.clone(a.w.config.series)), this.update();
    } }, { key: "update", value: function(e) {
      var t = this;
      return new Promise(function(a, i) {
        new Ma(t.ctx).clear({ isUpdating: !0 });
        var r = t.create(t.w.config.series, e);
        if (!r) return a(t);
        t.mount(r).then(function() {
          typeof t.w.config.chart.events.updated == "function" && t.w.config.chart.events.updated(t, t.w), t.events.fireEvent("updated", [t, t.w]), t.w.globals.isDirty = !0, a(t);
        }).catch(function(s) {
          i(s);
        });
      });
    } }, { key: "getSyncedCharts", value: function() {
      var e = this.getGroupedCharts(), t = [this];
      return e.length && (t = [], e.forEach(function(a) {
        t.push(a);
      })), t;
    } }, { key: "getGroupedCharts", value: function() {
      var e = this;
      return Apex._chartInstances.filter(function(t) {
        if (t.group) return !0;
      }).map(function(t) {
        return e.w.config.chart.group === t.group ? t.chart : e;
      });
    } }, { key: "toggleSeries", value: function(e) {
      return this.series.toggleSeries(e);
    } }, { key: "highlightSeriesOnLegendHover", value: function(e, t) {
      return this.series.toggleSeriesOnHover(e, t);
    } }, { key: "showSeries", value: function(e) {
      this.series.showSeries(e);
    } }, { key: "hideSeries", value: function(e) {
      this.series.hideSeries(e);
    } }, { key: "highlightSeries", value: function(e) {
      this.series.highlightSeries(e);
    } }, { key: "isSeriesHidden", value: function(e) {
      this.series.isSeriesHidden(e);
    } }, { key: "resetSeries", value: function() {
      var e = !(arguments.length > 0 && arguments[0] !== void 0) || arguments[0], t = !(arguments.length > 1 && arguments[1] !== void 0) || arguments[1];
      this.series.resetSeries(e, t);
    } }, { key: "addEventListener", value: function(e, t) {
      this.events.addEventListener(e, t);
    } }, { key: "removeEventListener", value: function(e, t) {
      this.events.removeEventListener(e, t);
    } }, { key: "addXaxisAnnotation", value: function(e) {
      var t = !(arguments.length > 1 && arguments[1] !== void 0) || arguments[1], a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : void 0, i = this;
      a && (i = a), i.annotations.addXaxisAnnotationExternal(e, t, i);
    } }, { key: "addYaxisAnnotation", value: function(e) {
      var t = !(arguments.length > 1 && arguments[1] !== void 0) || arguments[1], a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : void 0, i = this;
      a && (i = a), i.annotations.addYaxisAnnotationExternal(e, t, i);
    } }, { key: "addPointAnnotation", value: function(e) {
      var t = !(arguments.length > 1 && arguments[1] !== void 0) || arguments[1], a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : void 0, i = this;
      a && (i = a), i.annotations.addPointAnnotationExternal(e, t, i);
    } }, { key: "clearAnnotations", value: function() {
      var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : void 0, t = this;
      e && (t = e), t.annotations.clearAnnotations(t);
    } }, { key: "removeAnnotation", value: function(e) {
      var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : void 0, a = this;
      t && (a = t), a.annotations.removeAnnotation(a, e);
    } }, { key: "getChartArea", value: function() {
      return this.w.globals.dom.baseEl.querySelector(".apexcharts-inner");
    } }, { key: "getSeriesTotalXRange", value: function(e, t) {
      return this.coreUtils.getSeriesTotalsXRange(e, t);
    } }, { key: "getHighestValueInSeries", value: function() {
      var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
      return new $t(this.ctx).getMinYMaxY(e).highestY;
    } }, { key: "getLowestValueInSeries", value: function() {
      var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
      return new $t(this.ctx).getMinYMaxY(e).lowestY;
    } }, { key: "getSeriesTotal", value: function() {
      return this.w.globals.seriesTotals;
    } }, { key: "toggleDataPointSelection", value: function(e, t) {
      return this.updateHelpers.toggleDataPointSelection(e, t);
    } }, { key: "zoomX", value: function(e, t) {
      this.ctx.toolbar.zoomUpdateOptions(e, t);
    } }, { key: "setLocale", value: function(e) {
      this.localization.setCurrentLocaleValues(e);
    } }, { key: "dataURI", value: function(e) {
      return new Lt(this.ctx).dataURI(e);
    } }, { key: "exportToCSV", value: function() {
      var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      return new Lt(this.ctx).exportToCSV(e);
    } }, { key: "paper", value: function() {
      return this.w.globals.dom.Paper;
    } }, { key: "_parentResizeCallback", value: function() {
      this.w.globals.animationEnded && this.w.config.chart.redrawOnParentResize && this._windowResize();
    } }, { key: "_windowResize", value: function() {
      var e = this;
      clearTimeout(this.w.globals.resizeTimer), this.w.globals.resizeTimer = window.setTimeout(function() {
        e.w.globals.resized = !0, e.w.globals.dataChanged = !1, e.ctx.update();
      }, 150);
    } }, { key: "_windowResizeHandler", value: function() {
      var e = this.w.config.chart.redrawOnWindowResize;
      typeof e == "function" && (e = e()), e && this._windowResize();
    } }], [{ key: "getChartByID", value: function(e) {
      var t = z.escapeString(e);
      if (Apex._chartInstances) {
        var a = Apex._chartInstances.filter(function(i) {
          return i.id === t;
        })[0];
        return a && a.chart;
      }
    } }, { key: "initOnLoad", value: function() {
      for (var e = document.querySelectorAll("[data-apexcharts]"), t = 0; t < e.length; t++)
        new y(e[t], JSON.parse(e[t].getAttribute("data-options"))).render();
    } }, { key: "exec", value: function(e, t) {
      var a = this.getChartByID(e);
      if (a) {
        a.w.globals.isExecCalled = !0;
        var i = null;
        if (a.publicMethods.indexOf(t) !== -1) {
          for (var r = arguments.length, s = new Array(r > 2 ? r - 2 : 0), o = 2; o < r; o++) s[o - 2] = arguments[o];
          i = a[t].apply(a, s);
        }
        return i;
      }
    } }, { key: "merge", value: function(e, t) {
      return z.extend(e, t);
    } }]), y;
  }();
  C.exports = Ti;
})(sa, sa.exports);
var Ss = sa.exports;
const Ia = /* @__PURE__ */ ws(Ss), za = [
  "animationEnd",
  "beforeMount",
  "mounted",
  "updated",
  "click",
  "mouseMove",
  "mouseLeave",
  "legendClick",
  "markerClick",
  "selection",
  "dataPointSelection",
  "dataPointMouseEnter",
  "dataPointMouseLeave",
  "beforeZoom",
  "beforeResetZoom",
  "zoomed",
  "scrolled",
  "brushScrolled"
], Xt = De({
  name: "apexchart",
  props: {
    options: {
      type: Object
    },
    type: {
      type: String
    },
    series: {
      type: Array,
      required: !0
    },
    width: {
      default: "100%"
    },
    height: {
      default: "auto"
    }
  },
  // events emitted by this component
  emits: za,
  setup(C, { emit: D }) {
    const O = ve(null), R = ve(null), T = (pe) => pe && typeof pe == "object" && !Array.isArray(pe) && pe != null, N = (pe, de) => {
      typeof Object.assign != "function" && function() {
        Object.assign = function(Le) {
          if (Le == null)
            throw new TypeError("Cannot convert undefined or null to object");
          let dt = Object(Le);
          for (let Qe = 1; Qe < arguments.length; Qe++) {
            let nt = arguments[Qe];
            if (nt != null)
              for (let Je in nt)
                nt.hasOwnProperty(Je) && (dt[Je] = nt[Je]);
          }
          return dt;
        };
      }();
      let He = Object.assign({}, pe);
      return T(pe) && T(de) && Object.keys(de).forEach((Le) => {
        T(de[Le]) ? Le in pe ? He[Le] = N(pe[Le], de[Le]) : Object.assign(He, {
          [Le]: de[Le]
        }) : Object.assign(He, {
          [Le]: de[Le]
        });
      }), He;
    }, E = async () => {
      if (await aa(), R.value)
        return;
      const pe = {
        chart: {
          type: C.type || C.options.chart.type || "line",
          height: C.height,
          width: C.width,
          events: {}
        },
        series: C.series
      }, de = C.options.chart ? C.options.chart.events : null;
      za.forEach((Le) => {
        let dt = (...Qe) => D(Le, ...Qe);
        pe.chart.events[Le] = (...Qe) => {
          dt(...Qe), de && de.hasOwnProperty(Le) && de[Le](...Qe);
        };
      });
      const He = N(C.options, pe);
      return R.value = new Ia(O.value, He), R.value.render();
    }, Y = () => (_(), E()), _ = () => {
      R.value.destroy();
    }, U = (pe, de) => R.value.updateSeries(pe, de), $ = (pe, de, He, Le) => R.value.updateOptions(pe, de, He, Le), Z = (pe) => R.value.toggleSeries(pe), se = (pe) => {
      R.value.showSeries(pe);
    }, ie = (pe) => {
      R.value.hideSeries(pe);
    }, H = (pe, de) => R.value.appendSeries(pe, de), te = () => {
      R.value.resetSeries();
    }, J = (pe, de) => {
      R.value.toggleDataPointSelection(pe, de);
    }, K = (pe) => R.value.appendData(pe), oe = (pe, de) => R.value.zoomX(pe, de), he = (pe) => R.value.dataURI(pe), me = (pe) => R.value.setLocale(pe), z = (pe, de) => {
      R.value.addXaxisAnnotation(pe, de);
    }, ye = (pe, de) => {
      R.value.addYaxisAnnotation(pe, de);
    }, Pe = (pe, de) => {
      R.value.addPointAnnotation(pe, de);
    }, X = (pe, de) => {
      R.value.removeAnnotation(pe, de);
    }, Te = () => {
      R.value.clearAnnotations();
    };
    qi(() => {
      window.ApexCharts = Ia;
    }), Ga(() => {
      O.value = ca().proxy.$el, E();
    }), Ji(() => {
      R.value && _();
    });
    const Ze = Ki(C);
    return tt(Ze.options, () => {
      !R.value && C.options ? E() : R.value.updateOptions(C.options);
    }), tt(
      Ze.series,
      () => {
        !R.value && C.series ? E() : R.value.updateSeries(C.series);
      },
      { deep: !0 }
    ), tt(Ze.type, () => {
      Y();
    }), tt(Ze.width, () => {
      Y();
    }), tt(Ze.height, () => {
      Y();
    }), {
      chart: R,
      init: E,
      refresh: Y,
      destroy: _,
      updateOptions: $,
      updateSeries: U,
      toggleSeries: Z,
      showSeries: se,
      hideSeries: ie,
      resetSeries: te,
      zoomX: oe,
      toggleDataPointSelection: J,
      appendData: K,
      appendSeries: H,
      addXaxisAnnotation: z,
      addYaxisAnnotation: ye,
      addPointAnnotation: Pe,
      removeAnnotation: X,
      clearAnnotations: Te,
      setLocale: me,
      dataURI: he
    };
  },
  render() {
    return Qi("div", {
      class: "vue-apexcharts"
    });
  }
}), ks = (C) => {
  C.component(Xt.name, Xt);
};
Xt.install = ks;
const Ee = {
  OFF: 1,
  ERROR: 2,
  WARN: 4,
  INFO: 8,
  DEBUG: 16
}, st = {
  ERROR: 0,
  WARN: 0,
  INFO: 0,
  DEBUG: 0
};
st.ERROR = Ee.ERROR | Ee.WARN | Ee.INFO | Ee.DEBUG;
st.WARN = Ee.WARN | Ee.INFO | Ee.DEBUG;
st.INFO = Ee.INFO | Ee.DEBUG;
st.DEBUG = Ee.DEBUG;
const wt = {
  useTimestamp: !1,
  logLevel: Ee.INFO
}, Pt = /* @__PURE__ */ new Map();
Pt.set(Ee.ERROR, "error");
Pt.set(Ee.WARN, "warn");
Pt.set(Ee.INFO, "info");
Pt.set(Ee.DEBUG, "log");
class As {
  /**
   * @param {string=} className
   */
  constructor(D) {
    this.className = D, this.deprecations = /* @__PURE__ */ new Map();
  }
  /**
   * Logs an error message
   * @param {string} msg The message to log.
   * @param {...any} optArgs
   */
  error(D, ...O) {
    wt.logLevel & st.ERROR && this._log(String(D), Ee.ERROR, O);
  }
  /**
   * Logs a warning message
   * @param {string} msg The message to log.
   * @param {...any} optArgs
   */
  warning(D, ...O) {
    wt.logLevel & st.WARN && this._log(String(D), Ee.WARN, O);
  }
  /**
   * Deprecate a function. deprecations are stored on the logger
   * @param {string} functionName
   * @param {string=} alternativeFunctionName
   */
  deprecate(D, O) {
    const R = String(D), T = O ? String(O) : null;
    if (!this.deprecations.has(R)) {
      this.deprecations.set(R, T || null);
      let N = `${R} has been deprecated and will be removed`;
      T && (N = `${N}. ${T}`), this.warning(N);
    }
  }
  /**
   * Logs an info message
   * @param {string} msg The message to log.
   * @param {...any} optArgs
   */
  info(D, ...O) {
    wt.logLevel & st.INFO && this._log(String(D), Ee.INFO, O);
  }
  /**
   * Logs a debug message
   * @param {string} msg The message to log.
   * @param {...any} optArgs
   */
  debug(D, ...O) {
    wt.logLevel & st.DEBUG && this._log(String(D), Ee.DEBUG, O);
  }
  /**
   * Alias for debug
   * @param {string} msg The message to log.
   * @param {...any} optArgs
   */
  log(D, ...O) {
    wt.logLevel & st.DEBUG && this._log(String(D), Ee.DEBUG, O);
  }
  /**
   * Logs a message
   * @param {string} msg The message to log.
   * @param {LOG_LEVEL} level
   * @param {Array} optArgs
   * @private
   */
  _log(D, O, R) {
    let T = D;
    this.className && (T = `[${this.className}] ${T}`), console[Pt.get(O)](T, ...R), O & Ee.ERROR && (console.group(), console.trace(), console.groupEnd());
  }
}
const ra = /* @__PURE__ */ new Map();
function Cs(C) {
  const D = new As(C);
  return ra.set(C, D), D;
}
function oa(C) {
  return ra.has(C) ? ra.get(C) : Cs(C);
}
const Ps = "ar", Ls = {
  months: [
    "يناير",
    "فبراير",
    "مارس",
    "أبريل",
    "مايو",
    "يونيو",
    "يوليو",
    "أغسطس",
    "سبتمبر",
    "أكتوبر",
    "نوفمبر",
    "ديسمبر"
  ],
  shortMonths: [
    "يناير",
    "فبراير",
    "مارس",
    "أبريل",
    "مايو",
    "يونيو",
    "يوليو",
    "أغسطس",
    "سبتمبر",
    "أكتوبر",
    "نوفمبر",
    "ديسمبر"
  ],
  days: [
    "الأحد",
    "الإثنين",
    "الثلاثاء",
    "الأربعاء",
    "الخميس",
    "الجمعة",
    "السبت"
  ],
  shortDays: [
    "أحد",
    "إثنين",
    "ثلاثاء",
    "أربعاء",
    "خميس",
    "جمعة",
    "سبت"
  ],
  toolbar: {
    exportToSVG: "تحميل بصيغة SVG",
    exportToPNG: "تحميل بصيغة PNG",
    exportToCSV: "تحميل بصيغة CSV",
    menu: "القائمة",
    selection: "تحديد",
    selectionZoom: "تكبير التحديد",
    zoomIn: "تكبير",
    zoomOut: "تصغير",
    pan: "تحريك",
    reset: "إعادة التعيين"
  }
}, Ms = {
  name: Ps,
  options: Ls
}, Ts = "be-cyrl", Is = {
  months: [
    "Студзень",
    "Люты",
    "Сакавік",
    "Красавік",
    "Травень",
    "Чэрвень",
    "Ліпень",
    "Жнівень",
    "Верасень",
    "Кастрычнік",
    "Лістапад",
    "Сьнежань"
  ],
  shortMonths: [
    "Сту",
    "Лют",
    "Сак",
    "Кра",
    "Тра",
    "Чэр",
    "Ліп",
    "Жні",
    "Вер",
    "Кас",
    "Ліс",
    "Сьн"
  ],
  days: [
    "Нядзеля",
    "Панядзелак",
    "Аўторак",
    "Серада",
    "Чацьвер",
    "Пятніца",
    "Субота"
  ],
  shortDays: [
    "Нд",
    "Пн",
    "Аў",
    "Ср",
    "Чц",
    "Пт",
    "Сб"
  ],
  toolbar: {
    exportToSVG: "Спампаваць SVG",
    exportToPNG: "Спампаваць PNG",
    exportToCSV: "Спампаваць CSV",
    menu: "Мэню",
    selection: "Вылучэньне",
    selectionZoom: "Вылучэньне з маштабаваньнем",
    zoomIn: "Наблізіць",
    zoomOut: "Аддаліць",
    pan: "Ссоўваньне",
    reset: "Скінуць маштабаваньне"
  }
}, zs = {
  name: Ts,
  options: Is
}, Vs = "be-latn", Ds = {
  months: [
    "Studzień",
    "Luty",
    "Sakavik",
    "Krasavik",
    "Travień",
    "Červień",
    "Lipień",
    "Žnivień",
    "Vierasień",
    "Kastryčnik",
    "Listapad",
    "Śniežań"
  ],
  shortMonths: [
    "Stu",
    "Lut",
    "Sak",
    "Kra",
    "Tra",
    "Čer",
    "Lip",
    "Žni",
    "Vie",
    "Kas",
    "Lis",
    "Śni"
  ],
  days: [
    "Niadziela",
    "Paniadziełak",
    "Aŭtorak",
    "Sierada",
    "Čaćvier",
    "Piatnica",
    "Subota"
  ],
  shortDays: [
    "Nd",
    "Pn",
    "Aŭ",
    "Sr",
    "Čć",
    "Pt",
    "Sb"
  ],
  toolbar: {
    exportToSVG: "Spampavać SVG",
    exportToPNG: "Spampavać PNG",
    exportToCSV: "Spampavać CSV",
    menu: "Meniu",
    selection: "Vyłučeńnie",
    selectionZoom: "Vyłučeńnie z maštabavańniem",
    zoomIn: "Nablizić",
    zoomOut: "Addalić",
    pan: "Ssoŭvańnie",
    reset: "Skinuć maštabavańnie"
  }
}, Es = {
  name: Vs,
  options: Ds
}, Os = "ca", Ns = {
  months: [
    "Gener",
    "Febrer",
    "Març",
    "Abril",
    "Maig",
    "Juny",
    "Juliol",
    "Agost",
    "Setembre",
    "Octubre",
    "Novembre",
    "Desembre"
  ],
  shortMonths: [
    "Gen.",
    "Febr.",
    "Març",
    "Abr.",
    "Maig",
    "Juny",
    "Jul.",
    "Ag.",
    "Set.",
    "Oct.",
    "Nov.",
    "Des."
  ],
  days: [
    "Diumenge",
    "Dilluns",
    "Dimarts",
    "Dimecres",
    "Dijous",
    "Divendres",
    "Dissabte"
  ],
  shortDays: [
    "Dg",
    "Dl",
    "Dt",
    "Dc",
    "Dj",
    "Dv",
    "Ds"
  ],
  toolbar: {
    exportToSVG: "Descarregar SVG",
    exportToPNG: "Descarregar PNG",
    exportToCSV: "Descarregar CSV",
    menu: "Menú",
    selection: "Seleccionar",
    selectionZoom: "Seleccionar Zoom",
    zoomIn: "Augmentar",
    zoomOut: "Disminuir",
    pan: "Navegació",
    reset: "Reiniciar Zoom"
  }
}, Fs = {
  name: Os,
  options: Ns
}, Rs = "cs", Xs = {
  months: [
    "Leden",
    "Únor",
    "Březen",
    "Duben",
    "Květen",
    "Červen",
    "Červenec",
    "Srpen",
    "Září",
    "Říjen",
    "Listopad",
    "Prosinec"
  ],
  shortMonths: [
    "Led",
    "Úno",
    "Bře",
    "Dub",
    "Kvě",
    "Čvn",
    "Čvc",
    "Srp",
    "Zář",
    "Říj",
    "Lis",
    "Pro"
  ],
  days: [
    "Neděle",
    "Pondělí",
    "Úterý",
    "Středa",
    "Čtvrtek",
    "Pátek",
    "Sobota"
  ],
  shortDays: [
    "Ne",
    "Po",
    "Út",
    "St",
    "Čt",
    "Pá",
    "So"
  ],
  toolbar: {
    exportToSVG: "Stáhnout SVG",
    exportToPNG: "Stáhnout PNG",
    exportToCSV: "Stáhnout CSV",
    menu: "Menu",
    selection: "Vybrat",
    selectionZoom: "Zoom: Vybrat",
    zoomIn: "Zoom: Přiblížit",
    zoomOut: "Zoom: Oddálit",
    pan: "Přesouvat",
    reset: "Resetovat"
  }
}, Ys = {
  name: Rs,
  options: Xs
}, Hs = "da", Gs = {
  months: [
    "januar",
    "februar",
    "marts",
    "april",
    "maj",
    "juni",
    "juli",
    "august",
    "september",
    "oktober",
    "november",
    "december"
  ],
  shortMonths: [
    "jan",
    "feb",
    "mar",
    "apr",
    "maj",
    "jun",
    "jul",
    "aug",
    "sep",
    "okt",
    "nov",
    "dec"
  ],
  days: [
    "Søndag",
    "Mandag",
    "Tirsdag",
    "Onsdag",
    "Torsdag",
    "Fredag",
    "Lørdag"
  ],
  shortDays: [
    "Søn",
    "Man",
    "Tir",
    "Ons",
    "Tor",
    "Fre",
    "Lør"
  ],
  toolbar: {
    exportToSVG: "Download SVG",
    exportToPNG: "Download PNG",
    exportToCSV: "Download CSV",
    menu: "Menu",
    selection: "Valg",
    selectionZoom: "Zoom til valg",
    zoomIn: "Zoom ind",
    zoomOut: "Zoom ud",
    pan: "Panorér",
    reset: "Nulstil zoom"
  }
}, Bs = {
  name: Hs,
  options: Gs
}, Ws = "de", _s = {
  months: [
    "Januar",
    "Februar",
    "März",
    "April",
    "Mai",
    "Juni",
    "Juli",
    "August",
    "September",
    "Oktober",
    "November",
    "Dezember"
  ],
  shortMonths: [
    "Jan",
    "Feb",
    "Mär",
    "Apr",
    "Mai",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Okt",
    "Nov",
    "Dez"
  ],
  days: [
    "Sonntag",
    "Montag",
    "Dienstag",
    "Mittwoch",
    "Donnerstag",
    "Freitag",
    "Samstag"
  ],
  shortDays: [
    "So",
    "Mo",
    "Di",
    "Mi",
    "Do",
    "Fr",
    "Sa"
  ],
  toolbar: {
    exportToSVG: "SVG speichern",
    exportToPNG: "PNG speichern",
    exportToCSV: "CSV speichern",
    menu: "Menü",
    selection: "Auswahl",
    selectionZoom: "Auswahl vergrößern",
    zoomIn: "Vergrößern",
    zoomOut: "Verkleinern",
    pan: "Verschieben",
    reset: "Zoom zurücksetzen"
  }
}, js = {
  name: Ws,
  options: _s
}, $s = "el", Us = {
  months: [
    "Ιανουάριος",
    "Φεβρουάριος",
    "Μάρτιος",
    "Απρίλιος",
    "Μάιος",
    "Ιούνιος",
    "Ιούλιος",
    "Αύγουστος",
    "Σεπτέμβριος",
    "Οκτώβριος",
    "Νοέμβριος",
    "Δεκέμβριος"
  ],
  shortMonths: [
    "Ιαν",
    "Φευ",
    "Μαρ",
    "Απρ",
    "Μάι",
    "Ιουν",
    "Ιουλ",
    "Αυγ",
    "Σεπ",
    "Οκτ",
    "Νοε",
    "Δεκ"
  ],
  days: [
    "Κυριακή",
    "Δευτέρα",
    "Τρίτη",
    "Τετάρτη",
    "Πέμπτη",
    "Παρασκευή",
    "Σάββατο"
  ],
  shortDays: [
    "Κυρ",
    "Δευ",
    "Τρι",
    "Τετ",
    "Πεμ",
    "Παρ",
    "Σαβ"
  ],
  toolbar: {
    exportToSVG: "Λήψη SVG",
    exportToPNG: "Λήψη PNG",
    exportToCSV: "Λήψη CSV",
    menu: "Menu",
    selection: "Επιλογή",
    selectionZoom: "Μεγένθυση βάση επιλογής",
    zoomIn: "Μεγένθυνση",
    zoomOut: "Σμίκρυνση",
    pan: "Μετατόπιση",
    reset: "Επαναφορά μεγένθυνσης"
  }
}, Zs = {
  name: $s,
  options: Us
}, qs = "en", Js = {
  months: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ],
  shortMonths: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ],
  days: [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ],
  shortDays: [
    "Sun",
    "Mon",
    "Tue",
    "Wed",
    "Thu",
    "Fri",
    "Sat"
  ],
  toolbar: {
    exportToSVG: "Download SVG",
    exportToPNG: "Download PNG",
    exportToCSV: "Download CSV",
    menu: "Menu",
    selection: "Selection",
    selectionZoom: "Selection Zoom",
    zoomIn: "Zoom In",
    zoomOut: "Zoom Out",
    pan: "Panning",
    reset: "Reset Zoom"
  }
}, Ks = {
  name: qs,
  options: Js
}, Qs = "es", er = {
  months: [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre"
  ],
  shortMonths: [
    "Ene",
    "Feb",
    "Mar",
    "Abr",
    "May",
    "Jun",
    "Jul",
    "Ago",
    "Sep",
    "Oct",
    "Nov",
    "Dic"
  ],
  days: [
    "Domingo",
    "Lunes",
    "Martes",
    "Miércoles",
    "Jueves",
    "Viernes",
    "Sábado"
  ],
  shortDays: [
    "Dom",
    "Lun",
    "Mar",
    "Mie",
    "Jue",
    "Vie",
    "Sab"
  ],
  toolbar: {
    exportToSVG: "Descargar SVG",
    exportToPNG: "Descargar PNG",
    exportToCSV: "Descargar CSV",
    menu: "Menu",
    selection: "Seleccionar",
    selectionZoom: "Seleccionar Zoom",
    zoomIn: "Aumentar",
    zoomOut: "Disminuir",
    pan: "Navegación",
    reset: "Reiniciar Zoom"
  }
}, tr = {
  name: Qs,
  options: er
}, ar = "et", ir = {
  months: [
    "jaanuar",
    "veebruar",
    "märts",
    "aprill",
    "mai",
    "juuni",
    "juuli",
    "august",
    "september",
    "oktoober",
    "november",
    "detsember"
  ],
  shortMonths: [
    "jaan",
    "veebr",
    "märts",
    "apr",
    "mai",
    "juuni",
    "juuli",
    "aug",
    "sept",
    "okt",
    "nov",
    "dets"
  ],
  days: [
    "pühapäev",
    "esmaspäev",
    "teisipäev",
    "kolmapäev",
    "neljapäev",
    "reede",
    "laupäev"
  ],
  shortDays: [
    "P",
    "E",
    "T",
    "K",
    "N",
    "R",
    "L"
  ],
  toolbar: {
    exportToSVG: "Lae alla SVG",
    exportToPNG: "Lae alla PNG",
    exportToCSV: "Lae alla CSV",
    menu: "Menüü",
    selection: "Valik",
    selectionZoom: "Valiku suum",
    zoomIn: "Suurenda",
    zoomOut: "Vähenda",
    pan: "Panoraamimine",
    reset: "Lähtesta suum"
  }
}, sr = {
  name: ar,
  options: ir
}, rr = "fa", or = {
  months: [
    "فروردین",
    "اردیبهشت",
    "خرداد",
    "تیر",
    "مرداد",
    "شهریور",
    "مهر",
    "آبان",
    "آذر",
    "دی",
    "بهمن",
    "اسفند"
  ],
  shortMonths: [
    "فرو",
    "ارد",
    "خرد",
    "تیر",
    "مرد",
    "شهر",
    "مهر",
    "آبا",
    "آذر",
    "دی",
    "بهمـ",
    "اسفـ"
  ],
  days: [
    "یکشنبه",
    "دوشنبه",
    "سه شنبه",
    "چهارشنبه",
    "پنجشنبه",
    "جمعه",
    "شنبه"
  ],
  shortDays: [
    "ی",
    "د",
    "س",
    "چ",
    "پ",
    "ج",
    "ش"
  ],
  toolbar: {
    exportToSVG: "دانلود SVG",
    exportToPNG: "دانلود PNG",
    exportToCSV: "دانلود CSV",
    menu: "منو",
    selection: "انتخاب",
    selectionZoom: "بزرگنمایی انتخابی",
    zoomIn: "بزرگنمایی",
    zoomOut: "کوچکنمایی",
    pan: "پیمایش",
    reset: "بازنشانی بزرگنمایی"
  }
}, nr = {
  name: rr,
  options: or
}, lr = "fi", hr = {
  months: [
    "Tammikuu",
    "Helmikuu",
    "Maaliskuu",
    "Huhtikuu",
    "Toukokuu",
    "Kesäkuu",
    "Heinäkuu",
    "Elokuu",
    "Syyskuu",
    "Lokakuu",
    "Marraskuu",
    "Joulukuu"
  ],
  shortMonths: [
    "Tammi",
    "Helmi",
    "Maalis",
    "Huhti",
    "Touko",
    "Kesä",
    "Heinä",
    "Elo",
    "Syys",
    "Loka",
    "Marras",
    "Joulu"
  ],
  days: [
    "Sunnuntai",
    "Maanantai",
    "Tiistai",
    "Keskiviikko",
    "Torstai",
    "Perjantai",
    "Lauantai"
  ],
  shortDays: [
    "Su",
    "Ma",
    "Ti",
    "Ke",
    "To",
    "Pe",
    "La"
  ],
  toolbar: {
    exportToSVG: "Lataa SVG",
    exportToPNG: "Lataa PNG",
    exportToCSV: "Lataa CSV",
    menu: "Valikko",
    selection: "Valinta",
    selectionZoom: "Valinnan zoomaus",
    zoomIn: "Lähennä",
    zoomOut: "Loitonna",
    pan: "Panoroi",
    reset: "Nollaa zoomaus"
  }
}, cr = {
  name: lr,
  options: hr
}, dr = "fr", ur = {
  months: [
    "janvier",
    "février",
    "mars",
    "avril",
    "mai",
    "juin",
    "juillet",
    "août",
    "septembre",
    "octobre",
    "novembre",
    "décembre"
  ],
  shortMonths: [
    "janv.",
    "févr.",
    "mars",
    "avr.",
    "mai",
    "juin",
    "juill.",
    "août",
    "sept.",
    "oct.",
    "nov.",
    "déc."
  ],
  days: [
    "dimanche",
    "lundi",
    "mardi",
    "mercredi",
    "jeudi",
    "vendredi",
    "samedi"
  ],
  shortDays: [
    "dim.",
    "lun.",
    "mar.",
    "mer.",
    "jeu.",
    "ven.",
    "sam."
  ],
  toolbar: {
    exportToSVG: "Télécharger au format SVG",
    exportToPNG: "Télécharger au format PNG",
    exportToCSV: "Télécharger au format CSV",
    menu: "Menu",
    selection: "Sélection",
    selectionZoom: "Sélection et zoom",
    zoomIn: "Zoomer",
    zoomOut: "Dézoomer",
    pan: "Navigation",
    reset: "Réinitialiser le zoom"
  }
}, gr = {
  name: dr,
  options: ur
}, pr = "he", fr = {
  months: [
    "ינואר",
    "פברואר",
    "מרץ",
    "אפריל",
    "מאי",
    "יוני",
    "יולי",
    "אוגוסט",
    "ספטמבר",
    "אוקטובר",
    "נובמבר",
    "דצמבר"
  ],
  shortMonths: [
    "ינו׳",
    "פבר׳",
    "מרץ",
    "אפר׳",
    "מאי",
    "יוני",
    "יולי",
    "אוג׳",
    "ספט׳",
    "אוק׳",
    "נוב׳",
    "דצמ׳"
  ],
  days: [
    "ראשון",
    "שני",
    "שלישי",
    "רביעי",
    "חמישי",
    "שישי",
    "שבת"
  ],
  shortDays: [
    "א׳",
    "ב׳",
    "ג׳",
    "ד׳",
    "ה׳",
    "ו׳",
    "ש׳"
  ],
  toolbar: {
    exportToSVG: "הורד SVG",
    exportToPNG: "הורד PNG",
    exportToCSV: "הורד CSV",
    menu: "תפריט",
    selection: "בחירה",
    selectionZoom: "זום בחירה",
    zoomIn: "הגדלה",
    zoomOut: "הקטנה",
    pan: "הזזה",
    reset: "איפוס תצוגה"
  }
}, mr = {
  name: pr,
  options: fr
}, xr = "hi", br = {
  months: [
    "जनवरी",
    "फ़रवरी",
    "मार्च",
    "अप्रैल",
    "मई",
    "जून",
    "जुलाई",
    "अगस्त",
    "सितंबर",
    "अक्टूबर",
    "नवंबर",
    "दिसंबर"
  ],
  shortMonths: [
    "जनवरी",
    "फ़रवरी",
    "मार्च",
    "अप्रैल",
    "मई",
    "जून",
    "जुलाई",
    "अगस्त",
    "सितंबर",
    "अक्टूबर",
    "नवंबर",
    "दिसंबर"
  ],
  days: [
    "रविवार",
    "सोमवार",
    "मंगलवार",
    "बुधवार",
    "गुरुवार",
    "शुक्रवार",
    "शनिवार"
  ],
  shortDays: [
    "रवि",
    "सोम",
    "मंगल",
    "बुध",
    "गुरु",
    "शुक्र",
    "शनि"
  ],
  toolbar: {
    exportToSVG: "निर्यात SVG",
    exportToPNG: "निर्यात PNG",
    exportToCSV: "निर्यात CSV",
    menu: "सूची",
    selection: "चयन",
    selectionZoom: "ज़ूम करना",
    zoomIn: "ज़ूम इन",
    zoomOut: "ज़ूम आउट",
    pan: "पैनिंग",
    reset: "फिर से कायम करना"
  }
}, vr = {
  name: xr,
  options: br
}, yr = "hr", wr = {
  months: [
    "Siječanj",
    "Veljača",
    "Ožujak",
    "Travanj",
    "Svibanj",
    "Lipanj",
    "Srpanj",
    "Kolovoz",
    "Rujan",
    "Listopad",
    "Studeni",
    "Prosinac"
  ],
  shortMonths: [
    "Sij",
    "Velj",
    "Ožu",
    "Tra",
    "Svi",
    "Lip",
    "Srp",
    "Kol",
    "Ruj",
    "Lis",
    "Stu",
    "Pro"
  ],
  days: [
    "Nedjelja",
    "Ponedjeljak",
    "Utorak",
    "Srijeda",
    "Četvrtak",
    "Petak",
    "Subota"
  ],
  shortDays: [
    "Ned",
    "Pon",
    "Uto",
    "Sri",
    "Čet",
    "Pet",
    "Sub"
  ],
  toolbar: {
    exportToSVG: "Preuzmi SVG",
    exportToPNG: "Preuzmi PNG",
    exportToCSV: "Preuzmi CSV",
    menu: "Izbornik",
    selection: "Odabir",
    selectionZoom: "Odabirno povećanje",
    zoomIn: "Uvećajte prikaz",
    zoomOut: "Umanjite prikaz",
    pan: "Pomicanje",
    reset: "Povratak na zadani prikaz"
  }
}, Sr = {
  name: yr,
  options: wr
}, kr = "hu", Ar = {
  months: [
    "január",
    "február",
    "március",
    "április",
    "május",
    "június",
    "július",
    "augusztus",
    "szeptember",
    "október",
    "november",
    "december"
  ],
  shortMonths: [
    "jan",
    "feb",
    "mar",
    "ápr",
    "máj",
    "jún",
    "júl",
    "aug",
    "szept",
    "okt",
    "nov",
    "dec"
  ],
  days: [
    "hétfő",
    "kedd",
    "szerda",
    "csütörtök",
    "péntek",
    "szombat",
    "vasárnap"
  ],
  shortDays: [
    "H",
    "K",
    "Sze",
    "Cs",
    "P",
    "Szo",
    "V"
  ],
  toolbar: {
    exportToSVG: "Exportálás SVG-be",
    exportToPNG: "Exportálás PNG-be",
    exportToCSV: "Exportálás CSV-be",
    menu: "Fő ajánlat",
    download: "SVG letöltése",
    selection: "Kiválasztás",
    selectionZoom: "Nagyító kiválasztása",
    zoomIn: "Nagyítás",
    zoomOut: "Kicsinyítés",
    pan: "Képcsúsztatás",
    reset: "Nagyító visszaállítása"
  }
}, Cr = {
  name: kr,
  options: Ar
}, Pr = "hy", Lr = {
  months: [
    "Հունվար",
    "Փետրվար",
    "Մարտ",
    "Ապրիլ",
    "Մայիս",
    "Հունիս",
    "Հուլիս",
    "Օգոստոս",
    "Սեպտեմբեր",
    "Հոկտեմբեր",
    "Նոյեմբեր",
    "Դեկտեմբեր"
  ],
  shortMonths: [
    "Հնվ",
    "Փտվ",
    "Մրտ",
    "Ապր",
    "Մյս",
    "Հնս",
    "Հլիս",
    "Օգս",
    "Սեպ",
    "Հոկ",
    "Նոյ",
    "Դեկ"
  ],
  days: [
    "Կիրակի",
    "Երկուշաբթի",
    "Երեքշաբթի",
    "Չորեքշաբթի",
    "Հինգշաբթի",
    "Ուրբաթ",
    "Շաբաթ"
  ],
  shortDays: [
    "Կիր",
    "Երկ",
    "Երք",
    "Չրք",
    "Հնգ",
    "Ուրբ",
    "Շբթ"
  ],
  toolbar: {
    exportToSVG: "Բեռնել SVG",
    exportToPNG: "Բեռնել PNG",
    exportToCSV: "Բեռնել CSV",
    menu: "Մենյու",
    selection: "Ընտրված",
    selectionZoom: "Ընտրված հատվածի խոշորացում",
    zoomIn: "Խոշորացնել",
    zoomOut: "Մանրացնել",
    pan: "Տեղափոխում",
    reset: "Բերել սկզբնական վիճակի"
  }
}, Mr = {
  name: Pr,
  options: Lr
}, Tr = "id", Ir = {
  months: [
    "Januari",
    "Februari",
    "Maret",
    "April",
    "Mei",
    "Juni",
    "Juli",
    "Agustus",
    "September",
    "Oktober",
    "November",
    "Desember"
  ],
  shortMonths: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "Mei",
    "Jun",
    "Jul",
    "Agu",
    "Sep",
    "Okt",
    "Nov",
    "Des"
  ],
  days: [
    "Minggu",
    "Senin",
    "Selasa",
    "Rabu",
    "kamis",
    "Jumat",
    "Sabtu"
  ],
  shortDays: [
    "Min",
    "Sen",
    "Sel",
    "Rab",
    "Kam",
    "Jum",
    "Sab"
  ],
  toolbar: {
    exportToSVG: "Unduh SVG",
    exportToPNG: "Unduh PNG",
    exportToCSV: "Unduh CSV",
    menu: "Menu",
    selection: "Pilihan",
    selectionZoom: "Perbesar Pilihan",
    zoomIn: "Perbesar",
    zoomOut: "Perkecil",
    pan: "Geser",
    reset: "Atur Ulang Zoom"
  }
}, zr = {
  name: Tr,
  options: Ir
}, Vr = "it", Dr = {
  months: [
    "Gennaio",
    "Febbraio",
    "Marzo",
    "Aprile",
    "Maggio",
    "Giugno",
    "Luglio",
    "Agosto",
    "Settembre",
    "Ottobre",
    "Novembre",
    "Dicembre"
  ],
  shortMonths: [
    "Gen",
    "Feb",
    "Mar",
    "Apr",
    "Mag",
    "Giu",
    "Lug",
    "Ago",
    "Set",
    "Ott",
    "Nov",
    "Dic"
  ],
  days: [
    "Domenica",
    "Lunedì",
    "Martedì",
    "Mercoledì",
    "Giovedì",
    "Venerdì",
    "Sabato"
  ],
  shortDays: [
    "Dom",
    "Lun",
    "Mar",
    "Mer",
    "Gio",
    "Ven",
    "Sab"
  ],
  toolbar: {
    exportToSVG: "Scarica SVG",
    exportToPNG: "Scarica PNG",
    exportToCSV: "Scarica CSV",
    menu: "Menu",
    selection: "Selezione",
    selectionZoom: "Seleziona Zoom",
    zoomIn: "Zoom In",
    zoomOut: "Zoom Out",
    pan: "Sposta",
    reset: "Reimposta Zoom"
  }
}, Er = {
  name: Vr,
  options: Dr
}, Or = "ja", Nr = {
  months: [
    "1月",
    "2月",
    "3月",
    "4月",
    "5月",
    "6月",
    "7月",
    "8月",
    "9月",
    "10月",
    "11月",
    "12月"
  ],
  shortMonths: [
    "1月",
    "2月",
    "3月",
    "4月",
    "5月",
    "6月",
    "7月",
    "8月",
    "9月",
    "10月",
    "11月",
    "12月"
  ],
  days: [
    "日曜日",
    "月曜日",
    "火曜日",
    "水曜日",
    "木曜日",
    "金曜日",
    "土曜日"
  ],
  shortDays: [
    "日",
    "月",
    "火",
    "水",
    "木",
    "金",
    "土"
  ],
  toolbar: {
    exportToSVG: "SVGダウンロード",
    exportToPNG: "PNGダウンロード",
    exportToCSV: "CSVダウンロード",
    menu: "メニュー",
    selection: "選択",
    selectionZoom: "選択ズーム",
    zoomIn: "拡大",
    zoomOut: "縮小",
    pan: "パン",
    reset: "ズームリセット"
  }
}, Fr = {
  name: Or,
  options: Nr
}, Rr = "ka", Xr = {
  months: [
    "იანვარი",
    "თებერვალი",
    "მარტი",
    "აპრილი",
    "მაისი",
    "ივნისი",
    "ივლისი",
    "აგვისტო",
    "სექტემბერი",
    "ოქტომბერი",
    "ნოემბერი",
    "დეკემბერი"
  ],
  shortMonths: [
    "იან",
    "თებ",
    "მარ",
    "აპრ",
    "მაი",
    "ივნ",
    "ივლ",
    "აგვ",
    "სექ",
    "ოქტ",
    "ნოე",
    "დეკ"
  ],
  days: [
    "კვირა",
    "ორშაბათი",
    "სამშაბათი",
    "ოთხშაბათი",
    "ხუთშაბათი",
    "პარასკევი",
    "შაბათი"
  ],
  shortDays: [
    "კვი",
    "ორშ",
    "სამ",
    "ოთხ",
    "ხუთ",
    "პარ",
    "შაბ"
  ],
  toolbar: {
    exportToSVG: "გადმოქაჩე SVG",
    exportToPNG: "გადმოქაჩე PNG",
    exportToCSV: "გადმოქაჩე CSV",
    menu: "მენიუ",
    selection: "არჩევა",
    selectionZoom: "არჩეულის გადიდება",
    zoomIn: "გადიდება",
    zoomOut: "დაპატარაება",
    pan: "გადაჩოჩება",
    reset: "გადიდების გაუქმება"
  }
}, Yr = {
  name: Rr,
  options: Xr
}, Hr = "ko", Gr = {
  months: [
    "1월",
    "2월",
    "3월",
    "4월",
    "5월",
    "6월",
    "7월",
    "8월",
    "9월",
    "10월",
    "11월",
    "12월"
  ],
  shortMonths: [
    "1월",
    "2월",
    "3월",
    "4월",
    "5월",
    "6월",
    "7월",
    "8월",
    "9월",
    "10월",
    "11월",
    "12월"
  ],
  days: [
    "일요일",
    "월요일",
    "화요일",
    "수요일",
    "목요일",
    "금요일",
    "토요일"
  ],
  shortDays: [
    "일",
    "월",
    "화",
    "수",
    "목",
    "금",
    "토"
  ],
  toolbar: {
    exportToSVG: "SVG 다운로드",
    exportToPNG: "PNG 다운로드",
    exportToCSV: "CSV 다운로드",
    menu: "메뉴",
    selection: "선택",
    selectionZoom: "선택영역 확대",
    zoomIn: "확대",
    zoomOut: "축소",
    pan: "패닝",
    reset: "원래대로"
  }
}, Br = {
  name: Hr,
  options: Gr
}, Wr = "lt", _r = {
  months: [
    "Sausis",
    "Vasaris",
    "Kovas",
    "Balandis",
    "Gegužė",
    "Birželis",
    "Liepa",
    "Rugpjūtis",
    "Rugsėjis",
    "Spalis",
    "Lapkritis",
    "Gruodis"
  ],
  shortMonths: [
    "Sau",
    "Vas",
    "Kov",
    "Bal",
    "Geg",
    "Bir",
    "Lie",
    "Rgp",
    "Rgs",
    "Spl",
    "Lap",
    "Grd"
  ],
  days: [
    "Sekmadienis",
    "Pirmadienis",
    "Antradienis",
    "Trečiadienis",
    "Ketvirtadienis",
    "Penktadienis",
    "Šeštadienis"
  ],
  shortDays: [
    "Sk",
    "Per",
    "An",
    "Tr",
    "Kt",
    "Pn",
    "Št"
  ],
  toolbar: {
    exportToSVG: "Atsisiųsti SVG",
    exportToPNG: "Atsisiųsti PNG",
    exportToCSV: "Atsisiųsti CSV",
    menu: "Menu",
    selection: "Pasirinkimas",
    selectionZoom: "Zoom: Pasirinkimas",
    zoomIn: "Zoom: Priartinti",
    zoomOut: "Zoom: Atitolinti",
    pan: "Perkėlimas",
    reset: "Atstatyti"
  }
}, jr = {
  name: Wr,
  options: _r
}, $r = "lv", Ur = {
  months: [
    "janvāris",
    "februāris",
    "marts",
    "aprīlis",
    "maijs",
    "jūnijs",
    "jūlijs",
    "augusts",
    "septembris",
    "oktobris",
    "novembris",
    "decembris"
  ],
  shortMonths: [
    "janv",
    "febr",
    "marts",
    "apr",
    "maijs",
    "jūn",
    "jūl",
    "aug",
    "sept",
    "okt",
    "nov",
    "dec"
  ],
  days: [
    "svētdiena",
    "pirmdiena",
    "otrdiena",
    "trešdiena",
    "ceturtdiena",
    "piektdiena",
    "sestdiena"
  ],
  shortDays: [
    "Sv",
    "P",
    "O",
    "T",
    "C",
    "P",
    "S"
  ],
  toolbar: {
    exportToSVG: "Lejuplādēt SVG",
    exportToPNG: "Lejuplādēt PNG",
    exportToCSV: "Lejuplādēt CSV",
    menu: "Izvēlne",
    selection: "Atlase",
    selectionZoom: "Pietuvināt atlasi",
    zoomIn: "Pietuvināt",
    zoomOut: "Attālināt",
    pan: "Pārvietoties diagrammā",
    reset: "Atiestatīt pietuvinājumu"
  }
}, Zr = {
  name: $r,
  options: Ur
}, qr = "ms", Jr = {
  months: [
    "Januari",
    "Februari",
    "Mac",
    "April",
    "Mei",
    "Jun",
    "Julai",
    "Ogos",
    "September",
    "Oktober",
    "November",
    "Disember"
  ],
  shortMonths: [
    "Jan",
    "Feb",
    "Mac",
    "Apr",
    "Mei",
    "Jun",
    "Jul",
    "Ogos",
    "Sep",
    "Okt",
    "Nov",
    "Dis"
  ],
  days: [
    "Ahad",
    "Isnin",
    "Selasa",
    "Rabu",
    "Khamis",
    "Jumaat",
    "Sabtu"
  ],
  shortDays: [
    "Ahd",
    "Isn",
    "Sel",
    "Rab",
    "Kha",
    "Jum",
    "Sab"
  ],
  toolbar: {
    exportToSVG: "Muat turun SVG",
    exportToPNG: "Muat turun PNG",
    exportToCSV: "Muat turun CSV",
    menu: "Menu",
    selection: "Pilihan",
    selectionZoom: "Zum Pilihan",
    zoomIn: "Zoom Masuk",
    zoomOut: "Zoom Keluar",
    pan: "Pemusingan",
    reset: "Tetapkan Semula Zum"
  }
}, Kr = {
  name: qr,
  options: Jr
}, Qr = "nb", eo = {
  months: [
    "Januar",
    "Februar",
    "Mars",
    "April",
    "Mai",
    "Juni",
    "Juli",
    "August",
    "September",
    "Oktober",
    "November",
    "Desember"
  ],
  shortMonths: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "Mai",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Okt",
    "Nov",
    "Des"
  ],
  days: [
    "Søndag",
    "Mandag",
    "Tirsdag",
    "Onsdag",
    "Torsdag",
    "Fredag",
    "Lørdag"
  ],
  shortDays: [
    "Sø",
    "Ma",
    "Ti",
    "On",
    "To",
    "Fr",
    "Lø"
  ],
  toolbar: {
    exportToSVG: "Last ned SVG",
    exportToPNG: "Last ned PNG",
    exportToCSV: "Last ned CSV",
    menu: "Menu",
    selection: "Velg",
    selectionZoom: "Zoom: Velg",
    zoomIn: "Zoome inn",
    zoomOut: "Zoome ut",
    pan: "Skyving",
    reset: "Start på nytt"
  }
}, to = {
  name: Qr,
  options: eo
}, ao = "nl", io = {
  months: [
    "Januari",
    "Februari",
    "Maart",
    "April",
    "Mei",
    "Juni",
    "Juli",
    "Augustus",
    "September",
    "Oktober",
    "November",
    "December"
  ],
  shortMonths: [
    "Jan",
    "Feb",
    "Mrt",
    "Apr",
    "Mei",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Okt",
    "Nov",
    "Dec"
  ],
  days: [
    "Zondag",
    "Maandag",
    "Dinsdag",
    "Woensdag",
    "Donderdag",
    "Vrijdag",
    "Zaterdag"
  ],
  shortDays: [
    "Zo",
    "Ma",
    "Di",
    "Wo",
    "Do",
    "Vr",
    "Za"
  ],
  toolbar: {
    exportToSVG: "Download SVG",
    exportToPNG: "Download PNG",
    exportToCSV: "Download CSV",
    menu: "Menu",
    selection: "Selectie",
    selectionZoom: "Zoom selectie",
    zoomIn: "Zoom in",
    zoomOut: "Zoom out",
    pan: "Verplaatsen",
    reset: "Standaardwaarden"
  }
}, so = {
  name: ao,
  options: io
}, ro = "pl", oo = {
  months: [
    "Styczeń",
    "Luty",
    "Marzec",
    "Kwiecień",
    "Maj",
    "Czerwiec",
    "Lipiec",
    "Sierpień",
    "Wrzesień",
    "Październik",
    "Listopad",
    "Grudzień"
  ],
  shortMonths: [
    "Sty",
    "Lut",
    "Mar",
    "Kwi",
    "Maj",
    "Cze",
    "Lip",
    "Sie",
    "Wrz",
    "Paź",
    "Lis",
    "Gru"
  ],
  days: [
    "Niedziela",
    "Poniedziałek",
    "Wtorek",
    "Środa",
    "Czwartek",
    "Piątek",
    "Sobota"
  ],
  shortDays: [
    "Nd",
    "Pn",
    "Wt",
    "Śr",
    "Cz",
    "Pt",
    "Sb"
  ],
  toolbar: {
    exportToSVG: "Pobierz SVG",
    exportToPNG: "Pobierz PNG",
    exportToCSV: "Pobierz CSV",
    menu: "Menu",
    selection: "Wybieranie",
    selectionZoom: "Zoom: Wybieranie",
    zoomIn: "Zoom: Przybliż",
    zoomOut: "Zoom: Oddal",
    pan: "Przesuwanie",
    reset: "Resetuj"
  }
}, no = {
  name: ro,
  options: oo
}, lo = "pt", ho = {
  months: [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro"
  ],
  shortMonths: [
    "Jan",
    "Fev",
    "Mar",
    "Abr",
    "Mai",
    "Jun",
    "Jul",
    "Ag",
    "Set",
    "Out",
    "Nov",
    "Dez"
  ],
  days: [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado"
  ],
  shortDays: [
    "Do",
    "Se",
    "Te",
    "Qa",
    "Qi",
    "Sx",
    "Sa"
  ],
  toolbar: {
    exportToSVG: "Transferir SVG",
    exportToPNG: "Transferir PNG",
    exportToCSV: "Transferir CSV",
    menu: "Menu",
    selection: "Selecionar",
    selectionZoom: "Zoom: Selecionar",
    zoomIn: "Zoom: Aumentar",
    zoomOut: "Zoom: Diminuir",
    pan: "Deslocamento",
    reset: "Redefinir"
  }
}, co = {
  name: lo,
  options: ho
}, uo = "pt-br", go = {
  months: [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro"
  ],
  shortMonths: [
    "Jan",
    "Fev",
    "Mar",
    "Abr",
    "Mai",
    "Jun",
    "Jul",
    "Ago",
    "Set",
    "Out",
    "Nov",
    "Dez"
  ],
  days: [
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado"
  ],
  shortDays: [
    "Dom",
    "Seg",
    "Ter",
    "Qua",
    "Qui",
    "Sex",
    "Sab"
  ],
  toolbar: {
    exportToSVG: "Baixar SVG",
    exportToPNG: "Baixar PNG",
    exportToCSV: "Baixar CSV",
    menu: "Menu",
    selection: "Selecionar",
    selectionZoom: "Selecionar Zoom",
    zoomIn: "Aumentar",
    zoomOut: "Diminuir",
    pan: "Navegação",
    reset: "Reiniciar Zoom"
  }
}, po = {
  name: uo,
  options: go
}, fo = "rs", mo = {
  months: [
    "Januar",
    "Februar",
    "Mart",
    "April",
    "Maj",
    "Jun",
    "Jul",
    "Avgust",
    "Septembar",
    "Oktobar",
    "Novembar",
    "Decembar"
  ],
  shortMonths: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "Maj",
    "Jun",
    "Jul",
    "Avg",
    "Sep",
    "Okt",
    "Nov",
    "Dec"
  ],
  days: [
    "Nedelja",
    "Ponedeljak",
    "Utorak",
    "Sreda",
    "Četvrtak",
    "Petak",
    "Subota"
  ],
  shortDays: [
    "Ned",
    "Pon",
    "Uto",
    "Sre",
    "Čet",
    "Pet",
    "Sub"
  ],
  toolbar: {
    exportToSVG: "Preuzmi SVG",
    exportToPNG: "Preuzmi PNG",
    exportToCSV: "Preuzmi CSV",
    menu: "Meni",
    selection: "Odabir",
    selectionZoom: "Odabirno povećanje",
    zoomIn: "Uvećajte prikaz",
    zoomOut: "Umanjite prikaz",
    pan: "Pomeranje",
    reset: "Resetuj prikaz"
  }
}, xo = {
  name: fo,
  options: mo
}, bo = "ru", vo = {
  months: [
    "Январь",
    "Февраль",
    "Март",
    "Апрель",
    "Май",
    "Июнь",
    "Июль",
    "Август",
    "Сентябрь",
    "Октябрь",
    "Ноябрь",
    "Декабрь"
  ],
  shortMonths: [
    "Янв",
    "Фев",
    "Мар",
    "Апр",
    "Май",
    "Июн",
    "Июл",
    "Авг",
    "Сен",
    "Окт",
    "Ноя",
    "Дек"
  ],
  days: [
    "Воскресенье",
    "Понедельник",
    "Вторник",
    "Среда",
    "Четверг",
    "Пятница",
    "Суббота"
  ],
  shortDays: [
    "Вс",
    "Пн",
    "Вт",
    "Ср",
    "Чт",
    "Пт",
    "Сб"
  ],
  toolbar: {
    exportToSVG: "Сохранить SVG",
    exportToPNG: "Сохранить PNG",
    exportToCSV: "Сохранить CSV",
    menu: "Меню",
    selection: "Выбор",
    selectionZoom: "Выбор с увеличением",
    zoomIn: "Увеличить",
    zoomOut: "Уменьшить",
    pan: "Перемещение",
    reset: "Сбросить увеличение"
  }
}, yo = {
  name: bo,
  options: vo
}, wo = "se", So = {
  months: [
    "Januari",
    "Februari",
    "Mars",
    "April",
    "Maj",
    "Juni",
    "Juli",
    "Augusti",
    "September",
    "Oktober",
    "November",
    "December"
  ],
  shortMonths: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "Maj",
    "Juni",
    "Juli",
    "Aug",
    "Sep",
    "Okt",
    "Nov",
    "Dec"
  ],
  days: [
    "Söndag",
    "Måndag",
    "Tisdag",
    "Onsdag",
    "Torsdag",
    "Fredag",
    "Lördag"
  ],
  shortDays: [
    "Sön",
    "Mån",
    "Tis",
    "Ons",
    "Tor",
    "Fre",
    "Lör"
  ],
  toolbar: {
    exportToSVG: "Ladda SVG",
    exportToPNG: "Ladda PNG",
    exportToCSV: "Ladda CSV",
    menu: "Meny",
    selection: "Selektion",
    selectionZoom: "Val av zoom",
    zoomIn: "Zooma in",
    zoomOut: "Zooma ut",
    pan: "Panorering",
    reset: "Återställ zoomning"
  }
}, ko = {
  name: wo,
  options: So
}, Ao = "sk", Co = {
  months: [
    "Január",
    "Február",
    "Marec",
    "Apríl",
    "Máj",
    "Jún",
    "Júl",
    "August",
    "September",
    "Október",
    "November",
    "December"
  ],
  shortMonths: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "Máj",
    "Jún",
    "Júl",
    "Aug",
    "Sep",
    "Okt",
    "Nov",
    "Dec"
  ],
  days: [
    "Nedeľa",
    "Pondelok",
    "Utorok",
    "Streda",
    "Štvrtok",
    "Piatok",
    "Sobota"
  ],
  shortDays: [
    "Ne",
    "Po",
    "Ut",
    "St",
    "Št",
    "Pi",
    "So"
  ],
  toolbar: {
    exportToSVG: "Stiahnuť SVG",
    exportToPNG: "Stiahnuť PNG",
    exportToCSV: "Stiahnuť CSV",
    menu: "Menu",
    selection: "Vyberanie",
    selectionZoom: "Zoom: Vyberanie",
    zoomIn: "Zoom: Priblížiť",
    zoomOut: "Zoom: Vzdialiť",
    pan: "Presúvanie",
    reset: "Resetovať"
  }
}, Po = {
  name: Ao,
  options: Co
}, Lo = "sl", Mo = {
  months: [
    "Januar",
    "Februar",
    "Marec",
    "April",
    "Maj",
    "Junij",
    "Julij",
    "Avgust",
    "Septemer",
    "Oktober",
    "November",
    "December"
  ],
  shortMonths: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "Maj",
    "Jun",
    "Jul",
    "Avg",
    "Sep",
    "Okt",
    "Nov",
    "Dec"
  ],
  days: [
    "Nedelja",
    "Ponedeljek",
    "Torek",
    "Sreda",
    "Četrtek",
    "Petek",
    "Sobota"
  ],
  shortDays: [
    "Ne",
    "Po",
    "To",
    "Sr",
    "Če",
    "Pe",
    "So"
  ],
  toolbar: {
    exportToSVG: "Prenesi SVG",
    exportToPNG: "Prenesi PNG",
    exportToCSV: "Prenesi CSV",
    menu: "Menu",
    selection: "Izbiranje",
    selectionZoom: "Zoom: Izbira",
    zoomIn: "Zoom: Približaj",
    zoomOut: "Zoom: Oddalji",
    pan: "Pomikanje",
    reset: "Resetiraj"
  }
}, To = {
  name: Lo,
  options: Mo
}, Io = "sq", zo = {
  months: [
    "Janar",
    "Shkurt",
    "Mars",
    "Prill",
    "Maj",
    "Qershor",
    "Korrik",
    "Gusht",
    "Shtator",
    "Tetor",
    "Nëntor",
    "Dhjetor"
  ],
  shortMonths: [
    "Jan",
    "Shk",
    "Mar",
    "Pr",
    "Maj",
    "Qer",
    "Korr",
    "Gush",
    "Sht",
    "Tet",
    "Nën",
    "Dhj"
  ],
  days: [
    "e Dielë",
    "e Hënë",
    "e Martë",
    "e Mërkurë",
    "e Enjte",
    "e Premte",
    "e Shtunë"
  ],
  shortDays: [
    "Die",
    "Hën",
    "Mar",
    "Mër",
    "Enj",
    "Pre",
    "Sht"
  ],
  toolbar: {
    exportToSVG: "Shkarko SVG",
    exportToPNG: "Shkarko PNG",
    exportToCSV: "Shkarko CSV",
    menu: "Menu",
    selection: "Seleksiono",
    selectionZoom: "Seleksiono Zmadhim",
    zoomIn: "Zmadho",
    zoomOut: "Zvogëlo",
    pan: "Spostoje",
    reset: "Rikthe dimensionin"
  }
}, Vo = {
  name: Io,
  options: zo
}, Do = "th", Eo = {
  months: [
    "มกราคม",
    "กุมภาพันธ์",
    "มีนาคม",
    "เมษายน",
    "พฤษภาคม",
    "มิถุนายน",
    "กรกฎาคม",
    "สิงหาคม",
    "กันยายน",
    "ตุลาคม",
    "พฤศจิกายน",
    "ธันวาคม"
  ],
  shortMonths: [
    "ม.ค.",
    "ก.พ.",
    "มี.ค.",
    "เม.ย.",
    "พ.ค.",
    "มิ.ย.",
    "ก.ค.",
    "ส.ค.",
    "ก.ย.",
    "ต.ค.",
    "พ.ย.",
    "ธ.ค."
  ],
  days: [
    "อาทิตย์",
    "จันทร์",
    "อังคาร",
    "พุธ",
    "พฤหัสบดี",
    "ศุกร์",
    "เสาร์"
  ],
  shortDays: [
    "อา",
    "จ",
    "อ",
    "พ",
    "พฤ",
    "ศ",
    "ส"
  ],
  toolbar: {
    exportToSVG: "ดาวน์โหลด SVG",
    exportToPNG: "ดาวน์โหลด PNG",
    exportToCSV: "ดาวน์โหลด CSV",
    menu: "เมนู",
    selection: "เลือก",
    selectionZoom: "เลือกจุดที่จะซูม",
    zoomIn: "ซูมเข้า",
    zoomOut: "ซูมออก",
    pan: "ปรากฎว่า",
    reset: "รีเซ็ตการซูม"
  }
}, Oo = {
  name: Do,
  options: Eo
}, No = "tr", Fo = {
  months: [
    "Ocak",
    "Şubat",
    "Mart",
    "Nisan",
    "Mayıs",
    "Haziran",
    "Temmuz",
    "Ağustos",
    "Eylül",
    "Ekim",
    "Kasım",
    "Aralık"
  ],
  shortMonths: [
    "Oca",
    "Şub",
    "Mar",
    "Nis",
    "May",
    "Haz",
    "Tem",
    "Ağu",
    "Eyl",
    "Eki",
    "Kas",
    "Ara"
  ],
  days: [
    "Pazar",
    "Pazartesi",
    "Salı",
    "Çarşamba",
    "Perşembe",
    "Cuma",
    "Cumartesi"
  ],
  shortDays: [
    "Paz",
    "Pzt",
    "Sal",
    "Çar",
    "Per",
    "Cum",
    "Cmt"
  ],
  toolbar: {
    exportToSVG: "SVG İndir",
    exportToPNG: "PNG İndir",
    exportToCSV: "CSV İndir",
    menu: "Menü",
    selection: "Seçim",
    selectionZoom: "Seçim Yakınlaştır",
    zoomIn: "Yakınlaştır",
    zoomOut: "Uzaklaştır",
    pan: "Kaydır",
    reset: "Yakınlaştırmayı Sıfırla"
  }
}, Ro = {
  name: No,
  options: Fo
}, Xo = "ua", Yo = {
  months: [
    "Січень",
    "Лютий",
    "Березень",
    "Квітень",
    "Травень",
    "Червень",
    "Липень",
    "Серпень",
    "Вересень",
    "Жовтень",
    "Листопад",
    "Грудень"
  ],
  shortMonths: [
    "Січ",
    "Лют",
    "Бер",
    "Кві",
    "Тра",
    "Чер",
    "Лип",
    "Сер",
    "Вер",
    "Жов",
    "Лис",
    "Гру"
  ],
  days: [
    "Неділя",
    "Понеділок",
    "Вівторок",
    "Середа",
    "Четвер",
    "П'ятниця",
    "Субота"
  ],
  shortDays: [
    "Нд",
    "Пн",
    "Вт",
    "Ср",
    "Чт",
    "Пт",
    "Сб"
  ],
  toolbar: {
    exportToSVG: "Зберегти SVG",
    exportToPNG: "Зберегти PNG",
    exportToCSV: "Зберегти CSV",
    menu: "Меню",
    selection: "Вибір",
    selectionZoom: "Вибір із збільшенням",
    zoomIn: "Збільшити",
    zoomOut: "Зменшити",
    pan: "Переміщення",
    reset: "Скинути збільшення"
  }
}, Ho = {
  name: Xo,
  options: Yo
}, Go = "vi", Bo = {
  months: [
    "Tháng 01",
    "Tháng 02",
    "Tháng 03",
    "Tháng 04",
    "Tháng 05",
    "Tháng 06",
    "Tháng 07",
    "Tháng 08",
    "Tháng 09",
    "Tháng 10",
    "Tháng 11",
    "Tháng 12"
  ],
  shortMonths: [
    "Th01",
    "Th02",
    "Th03",
    "Th04",
    "Th05",
    "Th06",
    "Th07",
    "Th08",
    "Th09",
    "Th10",
    "Th11",
    "Th12"
  ],
  days: [
    "Chủ nhật",
    "Thứ hai",
    "Thứ ba",
    "Thứ Tư",
    "Thứ năm",
    "Thứ sáu",
    "Thứ bảy"
  ],
  shortDays: [
    "CN",
    "T2",
    "T3",
    "T4",
    "T5",
    "T6",
    "T7"
  ],
  toolbar: {
    exportToSVG: "Tải xuống SVG",
    exportToPNG: "Tải xuống PNG",
    exportToCSV: "Tải xuống CSV",
    menu: "Tuỳ chọn",
    selection: "Vùng chọn",
    selectionZoom: "Vùng chọn phóng to",
    zoomIn: "Phóng to",
    zoomOut: "Thu nhỏ",
    pan: "Di chuyển",
    reset: "Đặt lại thu phóng"
  }
}, Wo = {
  name: Go,
  options: Bo
}, _o = "zh-cn", jo = {
  months: [
    "一月",
    "二月",
    "三月",
    "四月",
    "五月",
    "六月",
    "七月",
    "八月",
    "九月",
    "十月",
    "十一月",
    "十二月"
  ],
  shortMonths: [
    "一月",
    "二月",
    "三月",
    "四月",
    "五月",
    "六月",
    "七月",
    "八月",
    "九月",
    "十月",
    "十一月",
    "十二月"
  ],
  days: [
    "星期天",
    "星期一",
    "星期二",
    "星期三",
    "星期四",
    "星期五",
    "星期六"
  ],
  shortDays: [
    "周日",
    "周一",
    "周二",
    "周三",
    "周四",
    "周五",
    "周六"
  ],
  toolbar: {
    exportToSVG: "下载 SVG",
    exportToPNG: "下载 PNG",
    exportToCSV: "下载 CSV",
    menu: "菜单",
    selection: "选择",
    selectionZoom: "选择缩放",
    zoomIn: "放大",
    zoomOut: "缩小",
    pan: "平移",
    reset: "重置缩放"
  }
}, $o = {
  name: _o,
  options: jo
}, Uo = "zh-tw", Zo = {
  months: [
    "一月",
    "二月",
    "三月",
    "四月",
    "五月",
    "六月",
    "七月",
    "八月",
    "九月",
    "十月",
    "十一月",
    "十二月"
  ],
  shortMonths: [
    "一月",
    "二月",
    "三月",
    "四月",
    "五月",
    "六月",
    "七月",
    "八月",
    "九月",
    "十月",
    "十一月",
    "十二月"
  ],
  days: [
    "星期日",
    "星期一",
    "星期二",
    "星期三",
    "星期四",
    "星期五",
    "星期六"
  ],
  shortDays: [
    "週日",
    "週一",
    "週二",
    "週三",
    "週四",
    "週五",
    "週六"
  ],
  toolbar: {
    exportToSVG: "下載 SVG",
    exportToPNG: "下載 PNG",
    exportToCSV: "下載 CSV",
    menu: "選單",
    selection: "選擇",
    selectionZoom: "選擇縮放",
    zoomIn: "放大",
    zoomOut: "縮小",
    pan: "平移",
    reset: "重置縮放"
  }
}, qo = {
  name: Uo,
  options: Zo
}, Va = [
  Ms,
  zs,
  Es,
  Fs,
  Ys,
  Bs,
  js,
  Zs,
  Ks,
  tr,
  sr,
  nr,
  cr,
  gr,
  mr,
  vr,
  Sr,
  Cr,
  Mr,
  zr,
  Er,
  Fr,
  Yr,
  Br,
  jr,
  Zr,
  Kr,
  to,
  so,
  no,
  co,
  po,
  xo,
  yo,
  ko,
  Po,
  To,
  Vo,
  Oo,
  Ro,
  Ho,
  Wo,
  $o,
  qo
], ea = 1e3;
function Jo(C, D) {
  return new Date(
    C.getTime() - D * 24 * 60 * 60 * 1e3
  );
}
function St(C) {
  return C.indexOf("/") === -1 ? C : C.slice(0, C.indexOf("/"));
}
function Ko(C) {
  return C.map((D) => ({
    name: D.name,
    data: D.Observations.slice().reverse().map((O) => {
      const R = St(O.phenomenonTime);
      return [new Date(R).getTime(), O.result];
    })
  }));
}
const Qo = De({
  name: "ChartComponent",
  components: {
    VContainer: Xe,
    VRow: Se,
    VCol: re,
    VDivider: _a,
    ApexChart: Xt,
    VcsLabel: Ce,
    VcsDatePicker: Hi,
    VOverlay: rs,
    VIcon: os
  },
  props: {
    featureId: {
      type: String,
      required: !0
    },
    layerName: {
      type: String,
      required: !0
    },
    attributes: {
      type: Object,
      required: !0
    },
    initialDayObservationRange: {
      type: Number,
      default: 1
    }
  },
  setup(C) {
    const D = ca().proxy, O = rt("vcsApp"), R = ds(), T = ve(), N = ve(), E = ve([]), Y = ve(), _ = ve(), U = ve(), $ = ve(), Z = ve(!1), se = Ge(
      () => {
        var J;
        return {
          chart: {
            id: "sensorthings-chart",
            locales: Va,
            defaultLocale: ((J = Va.find((K) => K.name === D.$i18n.locale)) == null ? void 0 : J.name) || "en",
            toolbar: {
              export: {
                csv: {
                  columnDelimiter: ";",
                  headerCategory: "datetime",
                  categoryFormatter(K) {
                    return K !== void 0 ? new Date(K).toISOString() : K;
                  }
                }
              }
            }
          },
          xaxis: {
            type: "datetime",
            title: { text: D.$st("sensorthings.chart.time") },
            labels: {
              datetimeUTC: !1
            }
          },
          yaxis: {
            title: {
              text: D.$st(Y.value || "sensorthings.chart.count")
            }
          },
          stroke: {
            width: 2
          },
          tooltip: {
            x: {
              format: "dd MMM HH:mm"
            },
            y: {
              title: {
                formatter() {
                  return "";
                }
              }
            }
          },
          theme: {
            mode: R.global.name.value
          }
        };
      }
    ), ie = ve([]);
    async function H() {
      const J = O.layers.getByKey(C.layerName);
      if (!$.value || !T.value || !N.value)
        throw new Error("Input data for datastreams query is missing");
      const K = await ps(
        J.url,
        C.featureId,
        $.value,
        T.value,
        N.value,
        ea
      );
      K.length || oa(Rt).warning(
        `No datastreams for observed property: ${J.observedProperty} available`
      ), E.value = Ko(K), K.forEach((oe) => {
        oe.Observations.length >= ea ? O.notifier.add({
          message: D.$st("sensorthings.limitedObservations", {
            datastream: oe.name,
            maxObservations: ea
          }),
          type: kt.WARNING,
          timeout: 1e4
        }) : oe.Observations.length || O.notifier.add({
          message: D.$st("sensorthings.noObservations", {
            datastream: oe.name
          }),
          type: kt.INFO,
          timeout: 1e4
        });
      });
    }
    async function te() {
      const J = O.layers.getByKey(C.layerName);
      if (!(J != null && J.observedProperty))
        throw new Error("Layer does not exist or has no observed property");
      $.value = J.observedProperty;
      const K = await fs(
        J.url,
        C.featureId,
        J.observedProperty
      );
      Y.value = K.unitOfMeasurement.name, _.value = K.unitOfMeasurement.symbol, U.value = K.Observations[0], N.value = new Date(
        St(U.value.phenomenonTime)
      ), T.value = Jo(
        N.value,
        C.initialDayObservationRange
      ), ms(
        J.url,
        C.featureId,
        J.observedProperty
      ).then((oe) => {
        ie.value[0] = St(
          oe.phenomenonTime
        ), U.value && (ie.value[1] = St(
          U.value.phenomenonTime
        ));
      }).catch((oe) => {
        oa(Rt).warning("Querying first observation failed", oe);
      });
    }
    return tt(
      () => C.featureId,
      async () => {
        Z.value = !0, await te(), Z.value = !1;
      },
      { immediate: !0 }
    ), tt([T, N], async () => {
      if (T.value && N.value && T.value > N.value) {
        const J = new Date(T.value);
        N.value = J;
      }
      await H();
    }), {
      chartOptions: se,
      chartSeries: E,
      startDate: T,
      endDate: N,
      observedProperty: $,
      latestObservationValue: Ge(
        () => {
          var J;
          return ((J = U.value) == null ? void 0 : J.result) ?? "-";
        }
      ),
      latestUnitSymbol: _,
      latestObservationTime: Ge(() => U.value ? new Date(
        St(U.value.phenomenonTime)
      ).toLocaleString(D.$i18n.locale) : "-"),
      calenderMinMax: ie,
      loadingData: Z
    };
  }
}), ot = (C, D) => {
  const O = C.__vccOpts || C;
  for (const [R, T] of D)
    O[R] = T;
  return O;
}, en = { class: "sensor-things-table" }, tn = { class: "opacity-50" };
function an(C, D, O, R, T, N) {
  const E = Q("v-divider"), Y = Q("VcsLabel"), _ = Q("v-col"), U = Q("VcsDatePicker"), $ = Q("v-row"), Z = Q("v-container"), se = Q("apex-chart"), ie = Q("v-icon"), H = Q("v-overlay");
  return fe(), Gt("div", null, [
    Ie("table", en, [
      Ie("tbody", null, [
        Ie("tr", null, [
          Ie(
            "td",
            null,
            ce(C.$st("sensorthings.name")),
            1
            /* TEXT */
          ),
          Ie(
            "td",
            null,
            ce(C.attributes.name),
            1
            /* TEXT */
          )
        ]),
        Ie("tr", null, [
          Ie(
            "td",
            null,
            ce(C.$st("sensorthings.observedProperty")),
            1
            /* TEXT */
          ),
          Ie(
            "td",
            null,
            ce(C.observedProperty),
            1
            /* TEXT */
          )
        ]),
        Ie("tr", null, [
          Ie(
            "td",
            null,
            ce(C.$st("sensorthings.latestObservation")),
            1
            /* TEXT */
          ),
          Ie("td", null, [
            ge(
              ce(`${C.latestObservationValue} ${C.latestUnitSymbol ?? ""}`) + " ",
              1
              /* TEXT */
            ),
            Ie(
              "span",
              tn,
              "(" + ce(C.latestObservationTime) + ")",
              1
              /* TEXT */
            )
          ])
        ])
      ])
    ]),
    P(E),
    P(Z, { class: "px-1 py-0" }, {
      default: V(() => [
        P($, { "no-gutters": "" }, {
          default: V(() => [
            P(_, { cols: "2" }, {
              default: V(() => [
                P(Y, null, {
                  default: V(() => [
                    ge(
                      ce(C.$st("sensorthings.from")),
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
            P(_, null, {
              default: V(() => [
                P(U, {
                  modelValue: C.startDate,
                  "onUpdate:modelValue": D[0] || (D[0] = (te) => C.startDate = te),
                  "date-picker-props": {
                    min: C.calenderMinMax[0],
                    max: C.calenderMinMax[1]
                  }
                }, null, 8, ["modelValue", "date-picker-props"])
              ]),
              _: 1
              /* STABLE */
            }),
            P(_, { cols: "2" }, {
              default: V(() => [
                P(Y, null, {
                  default: V(() => [
                    ge(
                      ce(C.$st("sensorthings.to")),
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
            P(_, null, {
              default: V(() => [
                P(U, {
                  modelValue: C.endDate,
                  "onUpdate:modelValue": D[1] || (D[1] = (te) => C.endDate = te),
                  "date-picker-props": {
                    min: C.startDate,
                    max: C.calenderMinMax[1]
                  }
                }, null, 8, ["modelValue", "date-picker-props"])
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
    P($, {
      "no-gutters": "",
      class: "pb-3 pt-3 pl-1"
    }, {
      default: V(() => [
        P(_, null, {
          default: V(() => [
            P(se, {
              type: "line",
              options: C.chartOptions,
              series: C.chartSeries
            }, null, 8, ["options", "series"])
          ]),
          _: 1
          /* STABLE */
        })
      ]),
      _: 1
      /* STABLE */
    }),
    P(H, {
      "model-value": C.loadingData,
      contained: "",
      persistent: "",
      class: "d-flex justify-center align-center"
    }, {
      default: V(() => [
        P(ie, {
          size: "x-large",
          color: "primary"
        }, {
          default: V(() => [
            ge(" $vcsProgress ")
          ]),
          _: 1
          /* STABLE */
        })
      ]),
      _: 1
      /* STABLE */
    }, 8, ["model-value"])
  ]);
}
const Ua = /* @__PURE__ */ ot(Qo, [["render", an], ["__scopeId", "data-v-34779728"]]);
class mt extends Na {
  constructor(O) {
    var R, T;
    super(
      { ...mt.getDefaultOptions(), ...O },
      Ua
    );
    je(this, "_initialDayObservationRange");
    je(this, "_windowHeader");
    this._initialDayObservationRange = O.initialDayObservationRange, this._windowHeader = (T = (R = O.window) == null ? void 0 : R.state) == null ? void 0 : T.headerTitle;
  }
  static get className() {
    return "ChartFeatureInfoView";
  }
  getProperties(O, R) {
    return {
      ...super.getProperties(O, R),
      initialDayObservationRange: this._initialDayObservationRange
    };
  }
  getWindowComponentOptions(O, R, T) {
    const N = super.getWindowComponentOptions(
      O,
      R,
      T
    );
    return !this._windowHeader && N.state && (N.state.headerTitle = `${T.name} - Thing: ${R.feature.getId()}`), N;
  }
  toJSON() {
    const O = super.toJSON();
    return this._initialDayObservationRange !== void 0 && (O.initialDayObservationRange = this._initialDayObservationRange), O;
  }
}
function Bt(C) {
  const D = Number(C);
  return C === "" || Number.isNaN(D) ? C : D;
}
class It extends Na {
  constructor(O) {
    var R, T;
    super(O, Fa);
    je(this, "_url");
    je(this, "_thingDashboardMapping");
    je(this, "_title");
    je(this, "_windowHeader");
    this._thingDashboardMapping = new Map(O.thingDashboardMapping), this._title = O.title, this._url = O.url || "", this._windowHeader = (T = (R = O.window) == null ? void 0 : R.state) == null ? void 0 : T.headerTitle;
  }
  static get className() {
    return "DashboardFeatureInfoView";
  }
  getProperties(O, R) {
    const T = super.getProperties(O, R), N = Ra(
      this._url,
      T.attributes
    ), E = this._thingDashboardMapping.get(Bt(T.featureId)) || "", Y = N ? new URL(`${E}`, N).toString() : `${E}`;
    return {
      ...T,
      src: Y,
      title: this._title
    };
  }
  getWindowComponentOptions(O, R, T) {
    const N = super.getWindowComponentOptions(
      O,
      R,
      T
    );
    N.state || (N.state = {}), this._windowHeader || (N.state.headerTitle = `${T.name} - Thing: ${R.feature.getId()}`);
    const E = {
      name: "open-dashboard-new-tab",
      title: "sensorthings.dashboard.openInNewTab",
      icon: "$vcsExternalLink",
      callback() {
        var Y;
        (Y = N.props) != null && Y.src && window.open(N.props.src);
      }
    };
    return N.state.headerActions ? Array.isArray(N.state.headerActions) ? N.state.headerActions.push(E) : N.state.headerActions.value.push(E) : N.state.headerActions = [E], N;
  }
  toJSON() {
    const O = {
      ...super.toJSON()
    };
    return this._thingDashboardMapping.size > 0 && (O.thingDashboardMapping = this._thingDashboardMapping.entries().toArray()), this._title !== void 0 && (O.title = this._title), this._url !== "" && (O.url = this._url), O;
  }
}
const sn = /* @__PURE__ */ De({
  __name: "ChartBalloonComponent",
  setup(C) {
    return (D, O) => (fe(), be(
      M(Xa),
      es(ts({ ...D.$attrs })),
      {
        default: V(() => [
          P(Ua, {
            "feature-id": D.$attrs.featureId,
            attributes: D.$attrs.attributes,
            "layer-name": D.$attrs.layerName,
            "initial-day-observation-range": D.$attrs.initialDayObservationRange
          }, null, 8, ["feature-id", "attributes", "layer-name", "initial-day-observation-range"])
        ]),
        _: 1
        /* STABLE */
      },
      16
      /* FULL_PROPS */
    ));
  }
});
class zt extends Ya {
  constructor(O) {
    super(
      O,
      sn
    );
    je(this, "_initialDayObservationRange");
    this._initialDayObservationRange = O.initialDayObservationRange;
  }
  static get className() {
    return "ChartBalloonFeatureInfoView";
  }
  getProperties(O, R) {
    const T = super.getProperties(O, R);
    return {
      ...T,
      balloonSubtitle: this.balloonSubtitle ? T.balloonSubtitle : `Thing: ${T.featureId}`,
      initialDayObservationRange: this._initialDayObservationRange
    };
  }
  toJSON() {
    const O = super.toJSON();
    return this._initialDayObservationRange !== void 0 && (O.initialDayObservationRange = this._initialDayObservationRange), O;
  }
}
const rn = { class: "d-flex align-center justify-space-between" }, on = { class: "font-weight-bold" }, nn = /* @__PURE__ */ De({
  __name: "IframeBalloonComponent",
  props: {
    balloonTitle: {},
    balloonSubtitle: {},
    src: {}
  },
  setup(C) {
    function D(O) {
      window.open(O, "_blank");
    }
    return (O, R) => {
      const T = Q("v-list-item-title"), N = Q("v-list-item-subtitle");
      return fe(), be(M(Xa), Ot({
        "balloon-title": O.balloonTitle,
        "balloon-subtitle": O.balloonSubtitle
      }, O.$attrs), {
        "balloon-title": V(() => [
          Ie("div", rn, [
            Ie("div", null, [
              P(T, null, {
                default: V(() => [
                  Ie(
                    "h3",
                    on,
                    ce(O.$st(O.balloonTitle)),
                    1
                    /* TEXT */
                  )
                ]),
                _: 1
                /* STABLE */
              }),
              O.balloonSubtitle ? (fe(), be(N, { key: 0 }, {
                default: V(() => [
                  ge(
                    ce(O.$st(O.balloonSubtitle)),
                    1
                    /* TEXT */
                  )
                ]),
                _: 1
                /* STABLE */
              })) : Ne("v-if", !0)
            ]),
            P(M(la), {
              icon: "$vcsExternalLink",
              tooltip: "sensorthings.dashboard.openInNewTab",
              class: "px-1",
              onClick: R[0] || (R[0] = (E) => D(O.src))
            })
          ])
        ]),
        default: V(() => [
          P(M(Fa), Ot({ src: O.src }, O.$attrs), null, 16, ["src"])
        ]),
        _: 1
        /* STABLE */
      }, 16, ["balloon-title", "balloon-subtitle"]);
    };
  }
});
class Vt extends Ya {
  constructor(O) {
    super(
      O,
      nn
    );
    je(this, "_url");
    je(this, "_thingDashboardMapping");
    je(this, "_title");
    this._thingDashboardMapping = new Map(O.thingDashboardMapping), this._title = O.title, this._url = O.url || "";
  }
  static get className() {
    return "DashboardBalloonFeatureInfoView";
  }
  getProperties(O, R) {
    const T = super.getProperties(O, R), N = Ra(
      this._url,
      T.attributes
    ), E = this._thingDashboardMapping.get(Bt(T.featureId)) || "", Y = N ? new URL(`${E}`, N).toString() : `${E}`;
    return {
      ...T,
      src: Y,
      title: this._title,
      balloonSubtitle: this.balloonSubtitle ? T.balloonSubtitle : `Thing: ${T.featureId}`
    };
  }
  toJSON() {
    const O = {
      ...super.toJSON()
    };
    return this._thingDashboardMapping.size > 0 && (O.thingDashboardMapping = this._thingDashboardMapping.entries().toArray()), this._title !== void 0 && (O.title = this._title), this._url !== "" && (O.url = this._url), O;
  }
}
const ln = De({
  name: "WindowStateSettings",
  components: {
    VContainer: Xe,
    VRow: Se,
    VCol: re,
    VcsLabel: Ce,
    VcsTextField: Oe
  },
  props: {
    modelValue: {
      type: Object,
      required: !0
    }
  },
  setup(C, { emit: D }) {
    const O = Be(
      C,
      "modelValue",
      D
    ), R = ["headerTitle", "headerIcon"], T = {
      headerTitle: "appConfigurator.editors.featureInfo.window.state.headerTitlePlaceholder",
      headerIcon: "$vcsInfo"
    }, N = Ge(() => R.reduce(
      (Y, _) => (Y[_] = {
        key: _,
        input: Ge({
          get() {
            return O.value[_];
          },
          set(U) {
            O.value[_] = U;
          }
        }),
        placeholder: T[_]
      }, Y),
      {}
    ));
    return {
      cid: We(),
      inputs: N
    };
  }
});
function hn(C, D, O, R, T, N) {
  const E = Q("VcsLabel"), Y = Q("v-col"), _ = Q("VcsTextField"), U = Q("v-row"), $ = Q("v-container");
  return fe(), be($, { class: "py-0 px-1" }, {
    default: V(() => [
      (fe(!0), Gt(
        da,
        null,
        Ba(C.inputs, ({ key: Z, input: se, placeholder: ie }) => (fe(), be(
          U,
          {
            "no-gutters": "",
            key: Z
          },
          {
            default: V(() => [
              P(
                Y,
                null,
                {
                  default: V(() => [
                    P(E, {
                      "html-for": `${C.cid}-${Z}`
                    }, {
                      default: V(() => [
                        ge(
                          ce(C.$st(`appConfigurator.editors.featureInfo.window.state.${Z}`)),
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
              P(
                Y,
                null,
                {
                  default: V(() => [
                    P(_, {
                      id: `${C.cid}-${Z}`,
                      clearable: "",
                      placeholder: ie,
                      modelValue: se.value,
                      "onUpdate:modelValue": (H) => se.value = H,
                      modelModifiers: { trim: !0 }
                    }, null, 8, ["id", "placeholder", "modelValue", "onUpdate:modelValue"])
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
        ))),
        128
        /* KEYED_FRAGMENT */
      ))
    ]),
    _: 1
    /* STABLE */
  });
}
const cn = /* @__PURE__ */ ot(ln, [["render", hn]]), dn = De({
  name: "WindowPositionSettings",
  components: {
    VContainer: Xe,
    VRow: Se,
    VCol: re,
    VcsCheckbox: Ht,
    VcsTextField: Oe
  },
  props: {
    modelValue: {
      type: Object,
      required: !0
    },
    positionKeys: {
      type: Array,
      default: () => ["height", "maxHeight", "width", "maxWidth"]
    }
  },
  setup(C, { emit: D }) {
    const O = Be(
      C,
      "modelValue",
      D
    );
    return {
      inputs: Ge(() => C.positionKeys.reduce(
        (T, N) => (T[N] = {
          key: N,
          checkbox: Gi(O, N, null),
          input: Ge({
            get() {
              return O.value[N];
            },
            set(E) {
              O.value[N] = E;
            }
          }),
          placeholder: "auto"
        }, T),
        {}
      ))
    };
  }
});
function un(C, D, O, R, T, N) {
  const E = Q("VcsCheckbox"), Y = Q("v-col"), _ = Q("VcsTextField"), U = Q("v-row"), $ = Q("v-container");
  return fe(), be($, { class: "py-0 px-1" }, {
    default: V(() => [
      (fe(!0), Gt(
        da,
        null,
        Ba(C.inputs, ({ key: Z, checkbox: se, input: ie, placeholder: H }) => (fe(), be(
          U,
          {
            "no-gutters": "",
            key: Z
          },
          {
            default: V(() => [
              P(
                Y,
                null,
                {
                  default: V(() => [
                    P(E, {
                      label: `appConfigurator.editors.featureInfo.window.position.${Z}`,
                      modelValue: se.value,
                      "onUpdate:modelValue": (te) => se.value = te
                    }, null, 8, ["label", "modelValue", "onUpdate:modelValue"])
                  ]),
                  _: 2
                  /* DYNAMIC */
                },
                1024
                /* DYNAMIC_SLOTS */
              ),
              P(
                Y,
                null,
                {
                  default: V(() => [
                    P(_, {
                      clearable: "",
                      disabled: !se.value,
                      placeholder: H,
                      modelValue: ie.value,
                      "onUpdate:modelValue": (te) => ie.value = te,
                      modelModifiers: { trim: !0 }
                    }, null, 8, ["disabled", "placeholder", "modelValue", "onUpdate:modelValue"])
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
        ))),
        128
        /* KEYED_FRAGMENT */
      ))
    ]),
    _: 1
    /* STABLE */
  });
}
const gn = /* @__PURE__ */ ot(dn, [["render", un]]), pn = De({
  name: "WindowSettings",
  components: {
    VContainer: Xe,
    VcsFormSection: Ue,
    WindowStateSettings: cn,
    WindowPositionSettings: gn
  },
  props: {
    modelValue: {
      type: Object,
      default: () => {
      }
    },
    isBalloon: {
      type: Boolean,
      default: !1
    }
  },
  setup(C, { emit: D }) {
    return {
      localValue: Be(C, "modelValue", D)
    };
  }
});
function fn(C, D, O, R, T, N) {
  const E = Q("WindowStateSettings"), Y = Q("WindowPositionSettings"), _ = Q("v-container"), U = Q("VcsFormSection");
  return fe(), be(U, {
    heading: "appConfigurator.editors.featureInfo.window.title",
    expandable: ""
  }, {
    default: V(() => [
      P(_, { class: "py-0 px-1" }, {
        default: V(() => [
          C.isBalloon ? Ne("v-if", !0) : (fe(), be(E, {
            key: 0,
            modelValue: C.localValue.state,
            "onUpdate:modelValue": D[0] || (D[0] = ($) => C.localValue.state = $)
          }, null, 8, ["modelValue"])),
          P(Y, {
            modelValue: C.localValue.position,
            "onUpdate:modelValue": D[1] || (D[1] = ($) => C.localValue.position = $)
          }, null, 8, ["modelValue"])
        ]),
        _: 1
        /* STABLE */
      })
    ]),
    _: 1
    /* STABLE */
  });
}
const mn = /* @__PURE__ */ ot(pn, [["render", fn]]), xn = De({
  name: "BalloonFeatureInfoView",
  components: {
    VContainer: Xe,
    VRow: Se,
    VCol: re,
    VcsFormSection: Ue,
    VcsLabel: Ce,
    VcsTextField: Oe
  },
  props: {
    modelValue: {
      type: Object,
      required: !0
    }
  },
  setup(C, { emit: D }) {
    const O = Be(
      C,
      "modelValue",
      D
    );
    return {
      cid: We(),
      localConfig: O
    };
  }
});
function bn(C, D, O, R, T, N) {
  const E = Q("VcsLabel"), Y = Q("v-col"), _ = Q("VcsTextField"), U = Q("v-row"), $ = Q("v-container"), Z = Q("VcsFormSection");
  return fe(), be(Z, {
    heading: "appConfigurator.editors.featureInfo.balloon.title",
    expandable: ""
  }, {
    default: V(() => [
      P($, { class: "py-0 px-1" }, {
        default: V(() => [
          P(U, { "no-gutters": "" }, {
            default: V(() => [
              P(Y, null, {
                default: V(() => [
                  P(E, {
                    "html-for": `${C.cid}-balloonTitle`
                  }, {
                    default: V(() => [
                      ge(
                        ce(C.$st("appConfigurator.editors.featureInfo.balloon.balloonTitle")),
                        1
                        /* TEXT */
                      )
                    ]),
                    _: 1
                    /* STABLE */
                  }, 8, ["html-for"])
                ]),
                _: 1
                /* STABLE */
              }),
              P(Y, null, {
                default: V(() => [
                  P(_, {
                    id: `${C.cid}-balloonTitle`,
                    clearable: "",
                    placeholder: "layerName",
                    modelValue: C.localConfig.balloonTitle,
                    "onUpdate:modelValue": D[0] || (D[0] = (se) => C.localConfig.balloonTitle = se)
                  }, null, 8, ["id", "modelValue"])
                ]),
                _: 1
                /* STABLE */
              })
            ]),
            _: 1
            /* STABLE */
          }),
          P(U, { "no-gutters": "" }, {
            default: V(() => [
              P(Y, null, {
                default: V(() => [
                  P(E, {
                    "html-for": `${C.cid}-balloonSubtitle`
                  }, {
                    default: V(() => [
                      ge(
                        ce(C.$st("appConfigurator.editors.featureInfo.balloon.balloonSubtitle")),
                        1
                        /* TEXT */
                      )
                    ]),
                    _: 1
                    /* STABLE */
                  }, 8, ["html-for"])
                ]),
                _: 1
                /* STABLE */
              }),
              P(Y, null, {
                default: V(() => [
                  P(_, {
                    id: `${C.cid}-balloonSubtitle`,
                    clearable: "",
                    placeholder: "featureId",
                    modelValue: C.localConfig.balloonSubtitle,
                    "onUpdate:modelValue": D[1] || (D[1] = (se) => C.localConfig.balloonSubtitle = se)
                  }, null, 8, ["id", "modelValue"])
                ]),
                _: 1
                /* STABLE */
              })
            ]),
            _: 1
            /* STABLE */
          }),
          $e(C.$slots, "default")
        ]),
        _: 3
        /* FORWARDED */
      })
    ]),
    _: 3
    /* FORWARDED */
  });
}
const vn = /* @__PURE__ */ ot(xn, [["render", bn]]), yn = /* @__PURE__ */ De({
  __name: "CsvImport",
  props: {
    maximumRows: {}
  },
  emits: ["imported"],
  setup(C, { emit: D }) {
    const O = D, R = C, T = ve(!0), N = [
      "utf-8",
      // Universal encoding, most common
      "utf-16le",
      // Windows Unicode
      "utf-16be",
      // Big endian UTF-16
      "iso-8859-1",
      // Western European
      "iso-8859-2",
      // Central European
      "iso-8859-15",
      // Updated Western European with Euro sign
      "windows-1252",
      // Windows Western European
      "windows-1250",
      // Windows Central European
      "ascii"
      // Basic ASCII, fallback option
    ], E = ve(N[0]), Y = [
      { value: ";", title: ";" },
      { value: ",", title: "," },
      { value: " ", title: "[Space]" },
      { value: "	", title: "[Tab]" },
      { value: "|", title: "|" }
    ], _ = ve(Y[0].value);
    function U($) {
      return new Promise((Z) => {
        $[0] || Z(!1);
        const se = new FileReader(), ie = T.value ? 1 : 0, H = R.maximumRows ? ie + R.maximumRows : void 0;
        se.onload = () => {
          const te = se.result.split(/\r?\n/).slice(ie, H).filter((J) => J.trim() !== "").map((J) => J.split(_.value).map(Bt));
          O("imported", te), Z(!0);
        }, se.onerror = () => {
          throw Z(!1), new Error(
            "Reading the file failed. Please make sure the csv file is valid."
          );
        }, se.readAsText($[0], E.value);
      });
    }
    return ($, Z) => (fe(), be(M(Bi), {
      "import-files": U,
      "file-types": [".csv"],
      multiple: !1
    }, {
      default: V(() => [
        P(
          M(Ue),
          {
            heading: "sensorthings.editors.csv.options",
            expandable: "",
            "start-open": "",
            class: "pt-2"
          },
          as({
            default: V(() => [
              P(M(Se), { "no-gutters": "" }, {
                default: V(() => [
                  P(M(re), null, {
                    default: V(() => [
                      P(M(Ce), { "html-for": "csv-encoding" }, {
                        default: V(() => [
                          ge(
                            ce($.$st("sensorthings.editors.csv.encoding")),
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
                  P(M(re), null, {
                    default: V(() => [
                      P(M(at), {
                        modelValue: E.value,
                        "onUpdate:modelValue": Z[0] || (Z[0] = (se) => E.value = se),
                        items: N,
                        id: "csv-encoding"
                      }, null, 8, ["modelValue"])
                    ]),
                    _: 1
                    /* STABLE */
                  })
                ]),
                _: 1
                /* STABLE */
              }),
              P(M(Se), { "no-gutters": "" }, {
                default: V(() => [
                  P(M(re), null, {
                    default: V(() => [
                      P(M(Ce), { "html-for": "csv-delimiter" }, {
                        default: V(() => [
                          ge(
                            ce($.$st("sensorthings.editors.csv.delimiter")),
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
                  P(M(re), null, {
                    default: V(() => [
                      P(M(at), {
                        modelValue: _.value,
                        "onUpdate:modelValue": Z[1] || (Z[1] = (se) => _.value = se),
                        items: Y,
                        id: "csv-delimiter"
                      }, null, 8, ["modelValue"])
                    ]),
                    _: 1
                    /* STABLE */
                  })
                ]),
                _: 1
                /* STABLE */
              }),
              P(M(Se), { "no-gutters": "" }, {
                default: V(() => [
                  P(M(re), null, {
                    default: V(() => [
                      P(M(Ht), {
                        label: "sensorthings.editors.csv.hasHeading",
                        modelValue: T.value,
                        "onUpdate:modelValue": Z[2] || (Z[2] = (se) => T.value = se)
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
            _: 2
            /* DYNAMIC */
          }, [
            $.maximumRows ? {
              name: "help",
              fn: V(() => [
                ge(
                  ce($.$st("sensorthings.editors.csv.limit", { maximumRows: $.maximumRows })),
                  1
                  /* TEXT */
                )
              ]),
              key: "0"
            } : void 0
          ]),
          1024
          /* DYNAMIC_SLOTS */
        )
      ]),
      _: 1
      /* STABLE */
    }));
  }
}), wn = /* @__PURE__ */ Ie(
  "td",
  null,
  null,
  -1
  /* HOISTED */
), Sn = { class: "px-1" }, kn = /* @__PURE__ */ Ie(
  "td",
  null,
  "=",
  -1
  /* HOISTED */
), An = { class: "px-1" }, Cn = { class: "d-flex justify-end align-center" }, Pn = /* @__PURE__ */ De({
  __name: "QueryParamsTable",
  props: {
    modelValue: { required: !0 },
    modelModifiers: {}
  },
  emits: ["update:modelValue"],
  setup(C) {
    const D = is(C, "modelValue"), O = new URL(D.value), R = ve(Array.from(O.searchParams.entries())), T = Ge(() => R.value.map(([U, $], Z) => ({
      seperator: Z === 0 ? "?" : "&",
      key: U,
      equals: "=",
      value: $,
      actions: [
        {
          name: U,
          icon: "mdi-delete",
          title: "sensorthings.editors.dashboard.delete",
          callback() {
            R.value.splice(Z, 1);
          }
        }
      ]
    }))), N = ve(["", ""]), E = ve([]);
    function Y() {
      var U, $;
      (U = E.value[1]) != null && U.disabled || (R.value.push([...N.value]), N.value = ["", ""], ($ = document.getElementById("dashboard-searchparam-key")) == null || $.focus());
    }
    E.value = [
      {
        name: "delete-entries",
        icon: "mdi-delete",
        title: "sensorthings.editors.dashboard.deleteAll",
        callback() {
          R.value = [];
        }
      },
      {
        name: "add-entry",
        icon: "mdi-check",
        title: "sensorthings.editors.dashboard.addEntry",
        disabled: !0,
        callback() {
          Y();
        }
      }
    ], tt(
      N,
      (U) => {
        E.value[1].disabled = !(U[0] && U[1]);
      },
      { deep: !0, immediate: !0 }
    );
    function _(U) {
      return U.replace(
        /([&=?])%7B%7B.*?%7D%7D([&=]|$)/g,
        ($) => $.replace(/%7B%7B/g, "{{").replace(/%7D%7D/g, "}}")
      );
    }
    return Ct(() => {
      O.search = "", R.value.forEach(([U, $]) => {
        O.searchParams.append(U, $);
      }), D.value = _(O.toString());
    }), (U, $) => (fe(), be(M(Ue), { heading: "sensorthings.editors.dashboard.queryParams" }, {
      default: V(() => [
        P(M(ha), {
          items: T.value,
          headers: [
            {
              title: "",
              key: "seperator",
              width: "2ch",
              sortable: !1
            },
            {
              title: "sensorthings.editors.dashboard.queryKey",
              key: "key",
              sortable: !1
            },
            {
              title: "",
              key: "equals",
              width: "2ch",
              sortable: !1
            },
            {
              title: "sensorthings.editors.dashboard.queryValue",
              key: "value",
              sortable: !1
            },
            {
              title: "",
              key: "actions",
              sortable: !1,
              align: "end",
              width: "10px"
            }
          ],
          "show-searchbar": !1,
          "items-per-page": 5,
          "no-data-text": U.$st("sensorthings.editors.dashboard.tableNoData")
        }, {
          "item.actions": V(({ item: Z }) => [
            P(M(Et), {
              actions: Z.actions,
              right: ""
            }, null, 8, ["actions"])
          ]),
          "body.prepend": V(() => [
            Ie("tr", null, [
              wn,
              Ie("td", Sn, [
                P(M(Oe), {
                  id: "dashboard-searchparam-key",
                  modelValue: N.value[0],
                  "onUpdate:modelValue": $[0] || ($[0] = (Z) => N.value[0] = Z),
                  onKeydown: Nt(At(Y, ["prevent"]), ["enter"]),
                  placeholder: "param1"
                }, null, 8, ["modelValue", "onKeydown"])
              ]),
              kn,
              Ie("td", An, [
                P(M(Oe), {
                  modelValue: N.value[1],
                  "onUpdate:modelValue": $[1] || ($[1] = (Z) => N.value[1] = Z),
                  placeholder: "A",
                  onKeydown: Nt(At(Y, ["prevent"]), ["enter"])
                }, null, 8, ["modelValue", "onKeydown"])
              ]),
              Ie("td", Cn, [
                P(M(Et), {
                  actions: E.value,
                  right: "",
                  "overflow-count": 3
                }, null, 8, ["actions"])
              ])
            ])
          ]),
          _: 1
          /* STABLE */
        }, 8, ["items", "no-data-text"])
      ]),
      _: 1
      /* STABLE */
    }));
  }
});
function ft(C) {
  return !!C || C === 0;
}
const Ln = De({
  name: "DashboardEditor",
  components: {
    VContainer: Xe,
    VRow: Se,
    VCol: re,
    VForm: ja,
    VDialog: $a,
    VcsFormSection: Ue,
    VcsLabel: Ce,
    VcsTextField: Oe,
    VcsDataTable: ha,
    VcsActionButtonList: Et,
    VcsButton: la,
    VcsCheckbox: Ht,
    CsvImport: yn,
    QueryParamsTable: Pn
  },
  props: {
    modelValue: {
      type: Object,
      required: !0
    }
  },
  setup(C, { emit: D }) {
    const O = rt("vcsApp"), R = ca().proxy, T = We(), N = Be(
      C,
      "modelValue",
      D
    ), E = Ge(
      () => {
        if (N.value.thingDashboardMapping)
          return N.value.thingDashboardMapping.map((ie, H) => {
            var te;
            return {
              id: ie[0],
              dashboard: ie[1],
              actions: [
                {
                  name: (te = ie[0]) == null ? void 0 : te.toString(),
                  icon: "mdi-delete",
                  title: "sensorthings.editors.dashboard.delete",
                  callback() {
                    var J;
                    (J = N.value.thingDashboardMapping) == null || J.splice(H, 1);
                  }
                }
              ]
            };
          });
      }
    ), Y = ve({
      thingId: void 0,
      dashboard: void 0
    }), _ = ve(!0);
    function U() {
      var ie, H;
      _.value && ft(Y.value.thingId) && ft(Y.value.dashboard) && ((ie = N.value.thingDashboardMapping) == null || ie.unshift([
        Bt(Y.value.thingId),
        Y.value.dashboard
      ]), Y.value.thingId = void 0, Y.value.dashboard = void 0, (H = document.getElementById("dashboard-mapping-thing-id")) == null || H.focus());
    }
    const $ = ve(
      !!N.value.thingDashboardMapping
    ), Z = ve(!1), se = ve([
      {
        name: "delete-entries",
        icon: "mdi-delete",
        title: "sensorthings.editors.dashboard.deleteAll",
        callback() {
          N.value.thingDashboardMapping = [];
        }
      },
      {
        name: "upload-entries",
        icon: "$vcsUpload",
        title: "sensorthings.editors.dashboard.uploadEntries",
        callback() {
          Z.value = !0;
        }
      },
      {
        name: "add-entry",
        icon: "mdi-check",
        title: "sensorthings.editors.dashboard.addEntry",
        disabled: !0,
        callback() {
          U();
        }
      }
    ]);
    return tt($, (ie) => {
      N.value.thingDashboardMapping = ie ? [] : void 0;
    }), tt(
      [Y, _],
      () => {
        se.value[2].disabled = !(ft(Y.value.thingId) && ft(Y.value.dashboard)) || !_.value;
      },
      { deep: !0, immediate: !0 }
    ), {
      cid: T,
      localConfig: N,
      nonEmpty: (ie) => ie && ie !== "" || "sensorthings.editors.dashboard.emptySrc",
      enableDashboardMapping: $,
      dashboardMappingItems: E,
      dashboardMappingEntry: Y,
      dashboardMappingEntryActions: se,
      dashboardMappingUploadDialog: Z,
      addEntry: U,
      csvInputValidity: _,
      addCsvEntries(ie) {
        const H = ie.filter(
          (he) => ft(he[0]) && ft(he[1])
        ), te = new Map(H), J = ie.length - H.length, K = H.length - te.size;
        (J !== 0 || K !== 0) && O.notifier.add({
          message: R.$st("sensorthings.editors.dashboard.importFeedback", {
            numberInvalid: J,
            numberDublicate: K
          }),
          type: kt.WARNING
        });
        const { thingDashboardMapping: oe } = N.value;
        oe != null && oe.length ? te.forEach((he, me) => {
          oe.some((ye) => ye[0] === me) || oe.push([me, he]);
        }) : N.value.thingDashboardMapping = Array.from(te);
      },
      isValidUrl(ie) {
        return !!ie && URL.canParse(ie);
      }
    };
  }
}), Mn = { class: "px-1" }, Tn = { class: "px-1" }, In = { class: "d-flex justify-end align-center" };
function zn(C, D, O, R, T, N) {
  const E = Q("VcsLabel"), Y = Q("v-col"), _ = Q("VcsTextField"), U = Q("v-row"), $ = Q("VcsButton"), Z = Q("QueryParamsTable"), se = Q("v-dialog"), ie = Q("VcsCheckbox"), H = Q("VcsActionButtonList"), te = Q("CsvImport"), J = Q("VcsDataTable"), K = Q("v-form"), oe = Q("v-container"), he = Q("VcsFormSection");
  return fe(), be(he, {
    heading: "sensorthings.editors.dashboard.title",
    expandable: "",
    "start-open": ""
  }, {
    default: V(() => [
      P(oe, { class: "py-0 px-1" }, {
        default: V(() => [
          P(U, { "no-gutters": "" }, {
            default: V(() => [
              P(Y, { cols: "6" }, {
                default: V(() => [
                  P(E, {
                    "html-for": `${C.cid}-title`
                  }, {
                    default: V(() => [
                      ge(
                        ce(C.$st("appConfigurator.editors.featureInfo.iframe.iframeTitle")),
                        1
                        /* TEXT */
                      )
                    ]),
                    _: 1
                    /* STABLE */
                  }, 8, ["html-for"])
                ]),
                _: 1
                /* STABLE */
              }),
              P(Y, { cols: "6" }, {
                default: V(() => [
                  P(_, {
                    id: `${C.cid}-title`,
                    clearable: "",
                    modelValue: C.localConfig.title,
                    "onUpdate:modelValue": D[0] || (D[0] = (me) => C.localConfig.title = me)
                  }, null, 8, ["id", "modelValue"])
                ]),
                _: 1
                /* STABLE */
              })
            ]),
            _: 1
            /* STABLE */
          }),
          P(U, { "no-gutters": "" }, {
            default: V(() => [
              P(Y, { cols: "6" }, {
                default: V(() => [
                  P(E, {
                    "html-for": `${C.cid}-url`
                  }, {
                    default: V(() => [
                      ge(
                        ce(C.$st("sensorthings.editors.dashboard.url")),
                        1
                        /* TEXT */
                      )
                    ]),
                    _: 1
                    /* STABLE */
                  }, 8, ["html-for"])
                ]),
                _: 1
                /* STABLE */
              }),
              P(Y, { cols: "6" }, {
                default: V(() => [
                  P(_, {
                    id: `${C.cid}-url`,
                    modelValue: C.localConfig.url,
                    "onUpdate:modelValue": D[2] || (D[2] = (me) => C.localConfig.url = me),
                    clearable: "",
                    class: "pr-1 py-1",
                    placeholder: "https://example.org",
                    rules: [
                      (me) => !me || C.isValidUrl(me) || "sensorthings.editors.validation.validUrl"
                    ]
                  }, {
                    append: V(() => [
                      P(se, { "max-width": "500" }, {
                        activator: V(({ props: me }) => [
                          P($, Ot({
                            icon: "$vcsEdit",
                            tooltip: "sensorthings.editors.dashboard.editQueryParams"
                          }, me, {
                            disabled: !C.isValidUrl(C.localConfig.url)
                          }), null, 16, ["disabled"])
                        ]),
                        default: V(() => [
                          P(Z, {
                            modelValue: C.localConfig.url,
                            "onUpdate:modelValue": D[1] || (D[1] = (me) => C.localConfig.url = me)
                          }, null, 8, ["modelValue"])
                        ]),
                        _: 1
                        /* STABLE */
                      })
                    ]),
                    _: 1
                    /* STABLE */
                  }, 8, ["id", "modelValue", "rules"])
                ]),
                _: 1
                /* STABLE */
              })
            ]),
            _: 1
            /* STABLE */
          }),
          P(U, { "no-gutters": "" }, {
            default: V(() => [
              P(Y, null, {
                default: V(() => [
                  P(ie, {
                    modelValue: C.enableDashboardMapping,
                    "onUpdate:modelValue": D[3] || (D[3] = (me) => C.enableDashboardMapping = me),
                    label: "sensorthings.editors.dashboard.mapping",
                    "true-value": !0,
                    "false-value": !1
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
                /* STABLE */
              })
            ]),
            _: 1
            /* STABLE */
          }),
          C.localConfig.thingDashboardMapping ? (fe(), be(U, {
            key: 0,
            "no-gutters": "",
            class: "pa-1"
          }, {
            default: V(() => [
              P(Y, null, {
                default: V(() => [
                  P(K, {
                    modelValue: C.csvInputValidity,
                    "onUpdate:modelValue": D[8] || (D[8] = (me) => C.csvInputValidity = me)
                  }, {
                    default: V(() => [
                      C.dashboardMappingItems ? (fe(), be(J, {
                        key: 0,
                        items: C.dashboardMappingItems,
                        headers: [
                          { title: "sensorthings.id", key: "id" },
                          {
                            title: "sensorthings.editors.dashboard.dashboardUrl",
                            key: "dashboard"
                          },
                          {
                            title: "",
                            key: "actions",
                            sortable: !1,
                            align: "end"
                          }
                        ],
                        "items-per-page": 5,
                        "no-data-text": C.$st("sensorthings.editors.dashboard.tableNoData")
                      }, {
                        "item.actions": V(({ item: me }) => [
                          P(H, {
                            actions: me.actions,
                            right: ""
                          }, null, 8, ["actions"])
                        ]),
                        "body.prepend": V(() => [
                          Ie("tr", null, [
                            Ie("td", Mn, [
                              P(_, {
                                id: "dashboard-mapping-thing-id",
                                modelValue: C.dashboardMappingEntry.thingId,
                                "onUpdate:modelValue": D[4] || (D[4] = (me) => C.dashboardMappingEntry.thingId = me),
                                onKeydown: Nt(At(C.addEntry, ["prevent"]), ["enter"]),
                                placeholder: "123",
                                rules: [
                                  (me) => {
                                    var z;
                                    return !((z = C.localConfig.thingDashboardMapping) != null && z.some(
                                      (ye) => ye[0] == me
                                    )) || "sensorthings.editors.dashboard.unique";
                                  }
                                ]
                              }, null, 8, ["modelValue", "onKeydown", "rules"])
                            ]),
                            Ie("td", Tn, [
                              P(_, {
                                modelValue: C.dashboardMappingEntry.dashboard,
                                "onUpdate:modelValue": D[5] || (D[5] = (me) => C.dashboardMappingEntry.dashboard = me),
                                placeholder: "https://example.org",
                                onKeydown: Nt(At(C.addEntry, ["prevent"]), ["enter"])
                              }, null, 8, ["modelValue", "onKeydown"])
                            ]),
                            Ie("td", In, [
                              P(H, {
                                actions: C.dashboardMappingEntryActions,
                                right: "",
                                "overflow-count": 3
                              }, null, 8, ["actions"]),
                              P(se, {
                                modelValue: C.dashboardMappingUploadDialog,
                                "onUpdate:modelValue": D[7] || (D[7] = (me) => C.dashboardMappingUploadDialog = me),
                                width: "400"
                              }, {
                                default: V(() => [
                                  P(te, {
                                    "maximum-rows": 200,
                                    onClose: D[6] || (D[6] = (me) => C.dashboardMappingUploadDialog = !1),
                                    onImported: C.addCsvEntries
                                  }, null, 8, ["onImported"])
                                ]),
                                _: 1
                                /* STABLE */
                              }, 8, ["modelValue"])
                            ])
                          ])
                        ]),
                        _: 1
                        /* STABLE */
                      }, 8, ["items", "no-data-text"])) : Ne("v-if", !0)
                    ]),
                    _: 1
                    /* STABLE */
                  }, 8, ["modelValue"])
                ]),
                _: 1
                /* STABLE */
              })
            ]),
            _: 1
            /* STABLE */
          })) : Ne("v-if", !0)
        ]),
        _: 1
        /* STABLE */
      })
    ]),
    _: 1
    /* STABLE */
  });
}
const Da = /* @__PURE__ */ ot(Ln, [["render", zn], ["__scopeId", "data-v-86775b0f"]]), Ea = /* @__PURE__ */ De({
  __name: "ChartEditor",
  props: {
    modelValue: {}
  },
  emits: ["update:modelValue"],
  setup(C, { emit: D }) {
    const O = We(), N = Be(
      C,
      "modelValue",
      D
    );
    return N.value.initialDayObservationRange || (N.value.initialDayObservationRange = 1), (E, Y) => (fe(), be(M(Ue), {
      heading: "sensorthings.editors.chart.title",
      expandable: "",
      "start-open": ""
    }, {
      default: V(() => [
        P(M(Xe), { class: "py-0 px-1" }, {
          default: V(() => [
            P(M(Se), { "no-gutters": "" }, {
              default: V(() => [
                P(M(re), { cols: "6" }, {
                  default: V(() => [
                    P(M(Ce), {
                      "html-for": `${M(O)}-title`
                    }, {
                      default: V(() => [
                        ge(
                          ce(E.$st("sensorthings.editors.chart.initialDayObservationRange")),
                          1
                          /* TEXT */
                        )
                      ]),
                      _: 1
                      /* STABLE */
                    }, 8, ["html-for"])
                  ]),
                  _: 1
                  /* STABLE */
                }),
                P(M(re), { cols: "6" }, {
                  default: V(() => [
                    P(M(Oe), {
                      id: `${M(O)}-title`,
                      modelValue: M(N).initialDayObservationRange,
                      "onUpdate:modelValue": Y[0] || (Y[0] = (_) => M(N).initialDayObservationRange = _),
                      modelModifiers: { number: !0 },
                      type: "number",
                      min: "1",
                      placeholder: "1",
                      rules: [
                        (_) => Number.isInteger(_) && _ > 0 || _ == null || "sensorthings.editors.validation.isNumberGreaterZero"
                      ]
                    }, null, 8, ["id", "modelValue", "rules"])
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
    }));
  }
}), Vn = De({
  name: "FeatureInfoEditor",
  components: {
    AbstractConfigEditor: Ha,
    DashboardEditor: Da,
    ChartEditor: Ea,
    BalloonFeatureInfoViewComponent: vn,
    WindowSettings: mn,
    VcsFormSection: Ue,
    VContainer: Xe,
    VRow: Se,
    VCol: re,
    VcsLabel: Ce,
    VcsTextField: Oe
  },
  props: {
    getConfig: {
      type: Function,
      required: !0
    },
    setConfig: {
      type: Function,
      required: !0
    },
    actions: {
      type: Array,
      default: () => []
    },
    nameRules: {
      type: Array,
      default: () => []
    }
  },
  setup(C) {
    const D = rt("vcsApp"), O = C.getConfig();
    O.window || (O.window = {}), O.window.state || (O.window.state = {}), O.window.position || (O.window.position = {}), O.attributeKeys || (O.attributeKeys = []);
    const R = ve(O), T = (_) => {
      if (_ && D.featureInfoClassRegistry.getClass(_)) {
        if (_ === "DashboardFeatureInfoView" || _ === "DashboardBalloonFeatureInfoView")
          return Da;
        if (_ === "ChartFeatureInfoView" || _ === "ChartBalloonFeatureInfoView")
          return Ea;
      }
    }, N = () => {
      var _, U, $, Z, se;
      ((_ = R.value.window) == null ? void 0 : _.slot) === Wi.DYNAMIC_LEFT && delete R.value.window.slot, Object.keys(
        ((U = R.value.window) == null ? void 0 : U.state) ?? {}
      ).forEach((ie) => {
        var H, te;
        ((te = (H = R.value.window) == null ? void 0 : H.state) == null ? void 0 : te[ie]) == null && delete R.value.window.state[ie];
      }), Object.keys((($ = R.value.window) == null ? void 0 : $.state) ?? {}).length < 1 && delete R.value.window.state, Object.keys(
        ((Z = R.value.window) == null ? void 0 : Z.position) ?? {}
      ).forEach((ie) => {
        var H, te;
        ((te = (H = R.value.window) == null ? void 0 : H.position) == null ? void 0 : te[ie]) == null && delete R.value.window.position[ie];
      }), Object.keys(((se = R.value.window) == null ? void 0 : se.position) ?? {}).length < 1 && delete R.value.window.position, Object.keys(R.value.window ?? {}).length < 1 && delete R.value.window, C.setConfig(Ft(R.value));
    }, E = () => {
      C.setConfig();
    }, Y = We();
    return {
      localConfig: R,
      getComponent: T,
      submit: N,
      cancel: E,
      cid: Y
    };
  }
});
function Dn(C, D, O, R, T, N) {
  const E = Q("VcsLabel"), Y = Q("v-col"), _ = Q("VcsTextField"), U = Q("v-row"), $ = Q("v-container"), Z = Q("VcsFormSection"), se = Q("BalloonFeatureInfoViewComponent"), ie = Q("WindowSettings"), H = Q("AbstractConfigEditor");
  return fe(), be(H, {
    onSubmit: C.submit,
    onCancel: C.cancel
  }, {
    default: V(() => {
      var te;
      return [
        P(Z, {
          heading: "appConfigurator.editors.featureInfo.general.title",
          expandable: "",
          "start-open": ""
        }, {
          default: V(() => [
            P($, { class: "py-0 px-1" }, {
              default: V(() => [
                P(U, { "no-gutters": "" }, {
                  default: V(() => [
                    P(Y, null, {
                      default: V(() => [
                        P(E, {
                          "html-for": `${C.cid}-name`,
                          required: ""
                        }, {
                          default: V(() => [
                            ge(
                              ce(C.$st("appConfigurator.editors.featureInfo.general.name")),
                              1
                              /* TEXT */
                            )
                          ]),
                          _: 1
                          /* STABLE */
                        }, 8, ["html-for"])
                      ]),
                      _: 1
                      /* STABLE */
                    }),
                    P(Y, null, {
                      default: V(() => [
                        P(_, {
                          id: `${C.cid}-name`,
                          clearable: "",
                          modelValue: C.localConfig.name,
                          "onUpdate:modelValue": D[0] || (D[0] = (J) => C.localConfig.name = J),
                          modelModifiers: { trim: !0 },
                          rules: C.nameRules
                        }, null, 8, ["id", "modelValue", "rules"])
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
        C.localConfig.type === "DashboardBalloonFeatureInfoView" || C.localConfig.type === "ChartBalloonFeatureInfoView" ? (fe(), be(se, {
          key: 0,
          modelValue: C.localConfig,
          "onUpdate:modelValue": D[1] || (D[1] = (J) => C.localConfig = J)
        }, null, 8, ["modelValue"])) : Ne("v-if", !0),
        (fe(), be(ss(C.getComponent(C.localConfig.type)), {
          modelValue: C.localConfig,
          "onUpdate:modelValue": D[2] || (D[2] = (J) => C.localConfig = J)
        }, null, 8, ["modelValue"])),
        C.localConfig.window ? (fe(), be(ie, {
          key: 1,
          modelValue: C.localConfig.window,
          "onUpdate:modelValue": D[3] || (D[3] = (J) => C.localConfig.window = J),
          "is-balloon": (te = C.localConfig.type) == null ? void 0 : te.includes("Balloon")
        }, null, 8, ["modelValue", "is-balloon"])) : Ne("v-if", !0)
      ];
    }),
    _: 1
    /* STABLE */
  }, 8, ["onSubmit", "onCancel"]);
}
const Dt = /* @__PURE__ */ ot(Vn, [["render", Dn]]);
function Za(C, D, O) {
  return C[D] = C[D] ?? O, C;
}
function En(C) {
  const D = new Oa({
    projection: Fi.toJSON()
  }).toJSON();
  return C === Ri.className && (D.coordinates = [-180, -85, 180, 85]), D;
}
function On(C) {
  return Za(C, "extent", En(C.type));
}
function Nn(C) {
  return Za(C, "properties", {});
}
function Fn(C, D) {
  Object.values(D).forEach(
    (O) => {
      O(C);
    }
  );
}
function Yt(C) {
  return !C && C === "" ? "appConfigurator.validation.isRequired" : !0;
}
const Rn = /* @__PURE__ */ De({
  __name: "GeneralLayerSettings",
  props: {
    modelValue: {
      type: Object,
      required: !0
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    nameRules: {
      type: Array,
      default: () => [Yt]
    },
    hideUrl: {
      type: Boolean,
      default: !1
    },
    requiredUrl: {
      type: Boolean,
      default: !0
    },
    urlRules: {
      type: Array,
      default: (C) => C.requiredUrl ? [Yt] : []
    }
  },
  emits: ["update:modelValue"],
  setup(C, { emit: D }) {
    const T = Be(
      C,
      "modelValue",
      D
    ), N = We();
    return (E, Y) => M(T) ? (fe(), be(M(Ue), {
      key: 0,
      heading: "appConfigurator.editors.layer.general.title",
      expandable: "",
      disabled: C.disabled,
      "start-open": !0
    }, {
      default: V(() => [
        P(M(Xe), { class: "py-0 px-1" }, {
          default: V(() => [
            $e(E.$slots, "prepend"),
            $e(E.$slots, "default", {}, () => [
              P(M(Se), { "no-gutters": "" }, {
                default: V(() => [
                  P(M(re), null, {
                    default: V(() => [
                      P(M(Ce), {
                        "html-for": `${M(N)}-name`,
                        required: ""
                      }, {
                        default: V(() => [
                          ge(
                            ce(E.$t("appConfigurator.editors.layer.general.name")),
                            1
                            /* TEXT */
                          )
                        ]),
                        _: 1
                        /* STABLE */
                      }, 8, ["html-for"])
                    ]),
                    _: 1
                    /* STABLE */
                  }),
                  P(M(re), null, {
                    default: V(() => [
                      P(M(Oe), {
                        id: `${M(N)}-name`,
                        clearable: "",
                        modelValue: M(T).name,
                        "onUpdate:modelValue": Y[0] || (Y[0] = (_) => M(T).name = _),
                        modelModifiers: { trim: !0 },
                        rules: C.nameRules
                      }, null, 8, ["id", "modelValue", "rules"])
                    ]),
                    _: 1
                    /* STABLE */
                  })
                ]),
                _: 1
                /* STABLE */
              }),
              M(T).properties ? (fe(), be(M(Se), {
                key: 0,
                "no-gutters": ""
              }, {
                default: V(() => [
                  P(M(re), null, {
                    default: V(() => [
                      P(M(Ce), {
                        "html-for": `${M(N)}-title`
                      }, {
                        default: V(() => [
                          ge(
                            ce(E.$t("appConfigurator.editors.layer.general.layerTitle")),
                            1
                            /* TEXT */
                          )
                        ]),
                        _: 1
                        /* STABLE */
                      }, 8, ["html-for"])
                    ]),
                    _: 1
                    /* STABLE */
                  }),
                  P(M(re), null, {
                    default: V(() => [
                      P(M(Oe), {
                        id: `${M(N)}-title`,
                        clearable: "",
                        placeholder: M(T).name,
                        modelValue: M(T).properties.title,
                        "onUpdate:modelValue": Y[1] || (Y[1] = (_) => M(T).properties.title = _),
                        modelModifiers: { trim: !0 }
                      }, null, 8, ["id", "placeholder", "modelValue"])
                    ]),
                    _: 1
                    /* STABLE */
                  })
                ]),
                _: 1
                /* STABLE */
              })) : Ne("v-if", !0),
              C.hideUrl ? Ne("v-if", !0) : (fe(), be(M(Se), {
                key: 1,
                "no-gutters": ""
              }, {
                default: V(() => [
                  P(M(re), null, {
                    default: V(() => [
                      P(M(Ce), {
                        "html-for": `${M(N)}-url`,
                        required: C.requiredUrl
                      }, {
                        default: V(() => [
                          ge(
                            ce(E.$t("appConfigurator.editors.layer.general.url")),
                            1
                            /* TEXT */
                          )
                        ]),
                        _: 1
                        /* STABLE */
                      }, 8, ["html-for", "required"])
                    ]),
                    _: 1
                    /* STABLE */
                  }),
                  P(M(re), null, {
                    default: V(() => [
                      P(M(Oe), {
                        id: `${M(N)}-url`,
                        clearable: "",
                        modelValue: M(T).url,
                        "onUpdate:modelValue": Y[2] || (Y[2] = (_) => M(T).url = _),
                        modelModifiers: { trim: !0 },
                        rules: C.urlRules
                      }, null, 8, ["id", "modelValue", "rules"])
                    ]),
                    _: 1
                    /* STABLE */
                  })
                ]),
                _: 1
                /* STABLE */
              }))
            ]),
            $e(E.$slots, "append")
          ]),
          _: 3
          /* FORWARDED */
        })
      ]),
      _: 3
      /* FORWARDED */
    }, 8, ["disabled"])) : Ne("v-if", !0);
  }
}), Xn = /* @__PURE__ */ De({
  __name: "ExtendedLayerSettings",
  props: {
    modelValue: {
      type: Object,
      required: !0
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    hideShowInOverviewMap: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["update:modelValue"],
  setup(C, { emit: D }) {
    const T = Be(
      C,
      "modelValue",
      D
    ), N = We();
    return (E, Y) => M(T) ? (fe(), be(M(Ue), {
      key: 0,
      heading: "appConfigurator.editors.layer.extended.title",
      expandable: "",
      disabled: C.disabled
    }, {
      default: V(() => [
        P(M(Xe), { class: "py-0 px-1" }, {
          default: V(() => [
            $e(E.$slots, "prepend"),
            $e(E.$slots, "default", {}, () => [
              M(T).properties && !C.hideShowInOverviewMap ? (fe(), be(M(Se), {
                key: 0,
                "no-gutters": ""
              }, {
                default: V(() => [
                  P(M(re), null, {
                    default: V(() => [
                      P(M(Ce), {
                        "html-for": `${M(N)}-showInOverviewMap`
                      }, {
                        default: V(() => [
                          ge(
                            ce(E.$t("appConfigurator.editors.layer.extended.showInOverviewMap")),
                            1
                            /* TEXT */
                          )
                        ]),
                        _: 1
                        /* STABLE */
                      }, 8, ["html-for"])
                    ]),
                    _: 1
                    /* STABLE */
                  }),
                  P(M(re), null, {
                    default: V(() => [
                      P(M(Ht), {
                        id: `${M(N)}-showInOverviewMap`,
                        modelValue: M(T).properties.showInOverviewMap,
                        "onUpdate:modelValue": Y[0] || (Y[0] = (_) => M(T).properties.showInOverviewMap = _),
                        modelModifiers: { number: !0 }
                      }, null, 8, ["id", "modelValue"])
                    ]),
                    _: 1
                    /* STABLE */
                  })
                ]),
                _: 1
                /* STABLE */
              })) : Ne("v-if", !0)
            ]),
            $e(E.$slots, "append")
          ]),
          _: 3
          /* FORWARDED */
        })
      ]),
      _: 3
      /* FORWARDED */
    }, 8, ["disabled"])) : Ne("v-if", !0);
  }
}), Yn = /* @__PURE__ */ De({
  __name: "LevelSettings",
  props: {
    modelValue: {
      type: Object,
      default: () => ({ minLevel: 0, maxLevel: 18 })
    }
  },
  emits: ["update:modelValue"],
  setup(C, { emit: D }) {
    const T = Be(
      C,
      "modelValue",
      D
    ), N = We();
    return (E, Y) => (fe(), be(M(Xe), { class: "pa-0" }, {
      default: V(() => [
        P(M(Se), { "no-gutters": "" }, {
          default: V(() => [
            P(M(re), { cols: "6" }, {
              default: V(() => [
                P(M(Ce), {
                  "html-for": `${M(N)}-min`
                }, {
                  default: V(() => [
                    ge(
                      ce(E.$t("appConfigurator.editors.layer.vectorTile.level")),
                      1
                      /* TEXT */
                    )
                  ]),
                  _: 1
                  /* STABLE */
                }, 8, ["html-for"])
              ]),
              _: 1
              /* STABLE */
            }),
            P(M(re), null, {
              default: V(() => [
                P(M(Oe), {
                  id: `${M(N)}-min`,
                  type: "number",
                  step: "1",
                  prefix: "min",
                  modelValue: M(T).minLevel,
                  "onUpdate:modelValue": Y[0] || (Y[0] = (_) => M(T).minLevel = _),
                  modelModifiers: { number: !0 }
                }, null, 8, ["id", "modelValue"])
              ]),
              _: 1
              /* STABLE */
            }),
            P(M(re), { class: "px-2" }, {
              default: V(() => [
                P(M(Oe), {
                  id: `${M(N)}-max`,
                  type: "number",
                  step: "1",
                  prefix: "max",
                  modelValue: M(T).maxLevel,
                  "onUpdate:modelValue": Y[1] || (Y[1] = (_) => M(T).maxLevel = _),
                  modelModifiers: { number: !0 }
                }, null, 8, ["id", "modelValue"])
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
    }));
  }
}), Hn = /* @__PURE__ */ De({
  __name: "MapHandlingLayerSettings",
  props: {
    modelValue: {
      type: Object,
      required: !0
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    rules: {
      type: Array,
      default: () => []
    }
  },
  emits: ["update:modelValue"],
  setup(C, { emit: D }) {
    const O = C, R = D, T = rt("vcsApp"), N = Be(O, "modelValue", R), E = ia([...T.maps].map(($) => $.name)), Y = ia(
      [...T.viewpoints].map(($) => $.name)
    ), _ = [
      T.maps.added.addEventListener(() => {
        E.value = [...T.maps].map(($) => $.name);
      }),
      T.maps.removed.addEventListener(() => {
        E.value = [...T.maps].map(($) => $.name);
      }),
      T.viewpoints.added.addEventListener(() => {
        Y.value = [...T.viewpoints].map(($) => $.name);
      }),
      T.viewpoints.removed.addEventListener(() => {
        Y.value = [...T.viewpoints].map(($) => $.name);
      })
    ];
    Ct(() => {
      _.forEach(($) => $());
    });
    const U = We();
    return ($, Z) => M(N) ? (fe(), be(M(Ue), {
      key: 0,
      heading: "appConfigurator.editors.layer.mapHandling.title",
      expandable: "",
      disabled: C.disabled
    }, {
      default: V(() => [
        P(M(Xe), { class: "py-0 px-1" }, {
          default: V(() => [
            $e($.$slots, "prepend"),
            $e($.$slots, "default", {}, () => [
              P(M(Se), { "no-gutters": "" }, {
                default: V(() => [
                  P(M(re), null, {
                    default: V(() => [
                      P(M(Ce), {
                        "html-for": `${M(U)}-exclusiveGroups`
                      }, {
                        default: V(() => [
                          ge(
                            ce($.$t("appConfigurator.editors.layer.mapHandling.exclusiveGroups")),
                            1
                            /* TEXT */
                          )
                        ]),
                        _: 1
                        /* STABLE */
                      }, 8, ["html-for"])
                    ]),
                    _: 1
                    /* STABLE */
                  }),
                  P(M(re), null, {
                    default: V(() => [
                      P(M(Ta), {
                        id: `${M(U)}-exclusiveGroups`,
                        column: "",
                        placeholder: "group1",
                        "input-width": 100,
                        modelValue: M(N).exclusiveGroups,
                        "onUpdate:modelValue": Z[0] || (Z[0] = (se) => M(N).exclusiveGroups = se),
                        modelModifiers: { trim: !0 }
                      }, null, 8, ["id", "modelValue"])
                    ]),
                    _: 1
                    /* STABLE */
                  })
                ]),
                _: 1
                /* STABLE */
              }),
              P(M(Se), { "no-gutters": "" }, {
                default: V(() => [
                  P(M(re), null, {
                    default: V(() => [
                      P(M(Ce), {
                        "html-for": `${M(U)}-mapNames`
                      }, {
                        default: V(() => [
                          ge(
                            ce($.$t("appConfigurator.editors.layer.mapHandling.mapNames")),
                            1
                            /* TEXT */
                          )
                        ]),
                        _: 1
                        /* STABLE */
                      }, 8, ["html-for"])
                    ]),
                    _: 1
                    /* STABLE */
                  }),
                  P(M(re), null, {
                    default: V(() => [
                      P(M(at), {
                        id: `${M(U)}-mapNames`,
                        placeholder: $.$t(
                          "appConfigurator.editors.layer.mapHandling.mapNamesPlaceholder"
                        ),
                        clearable: "",
                        multiple: "",
                        items: E.value,
                        modelValue: M(N).mapNames,
                        "onUpdate:modelValue": Z[1] || (Z[1] = (se) => M(N).mapNames = se),
                        modelModifiers: { trim: !0 }
                      }, null, 8, ["id", "placeholder", "items", "modelValue"])
                    ]),
                    _: 1
                    /* STABLE */
                  })
                ]),
                _: 1
                /* STABLE */
              }),
              P(M(Se), { "no-gutters": "" }, {
                default: V(() => [
                  P(M(re), null, {
                    default: V(() => [
                      P(M(Ce), {
                        "html-for": `${M(U)}-hiddenObjectIds`
                      }, {
                        default: V(() => [
                          ge(
                            ce($.$t("appConfigurator.editors.layer.mapHandling.hiddenObjectIds")),
                            1
                            /* TEXT */
                          )
                        ]),
                        _: 1
                        /* STABLE */
                      }, 8, ["html-for"])
                    ]),
                    _: 1
                    /* STABLE */
                  }),
                  P(M(re), null, {
                    default: V(() => [
                      P(M(Ta), {
                        id: `${M(U)}-hiddenObjectIds`,
                        placeholder: $.$t(
                          "appConfigurator.editors.layer.mapHandling.hiddenObjectIdsPlaceholder"
                        ),
                        column: "",
                        "input-width": 150,
                        modelValue: M(N).hiddenObjectIds,
                        "onUpdate:modelValue": Z[2] || (Z[2] = (se) => M(N).hiddenObjectIds = se)
                      }, null, 8, ["id", "placeholder", "modelValue"])
                    ]),
                    _: 1
                    /* STABLE */
                  })
                ]),
                _: 1
                /* STABLE */
              }),
              P(M(Se), { "no-gutters": "" }, {
                default: V(() => [
                  P(M(re), null, {
                    default: V(() => [
                      P(M(Ce), {
                        "html-for": `${M(U)}-zIndex`
                      }, {
                        default: V(() => [
                          ge(
                            ce($.$t("appConfigurator.editors.layer.mapHandling.zIndex")),
                            1
                            /* TEXT */
                          )
                        ]),
                        _: 1
                        /* STABLE */
                      }, 8, ["html-for"])
                    ]),
                    _: 1
                    /* STABLE */
                  }),
                  P(M(re), null, {
                    default: V(() => [
                      P(M(Oe), {
                        id: `${M(U)}-zIndex`,
                        type: "number",
                        step: "1",
                        modelValue: M(N).zIndex,
                        "onUpdate:modelValue": Z[3] || (Z[3] = (se) => M(N).zIndex = se),
                        modelModifiers: { number: !0 }
                      }, null, 8, ["id", "modelValue"])
                    ]),
                    _: 1
                    /* STABLE */
                  })
                ]),
                _: 1
                /* STABLE */
              }),
              M(N).properties ? (fe(), be(M(Se), {
                key: 0,
                "no-gutters": ""
              }, {
                default: V(() => [
                  P(M(re), null, {
                    default: V(() => [
                      P(M(Ce), {
                        "html-for": `${M(U)}-defaultViewpoint`
                      }, {
                        default: V(() => [
                          ge(
                            ce($.$t("appConfigurator.editors.layer.mapHandling.defaultViewpoint")),
                            1
                            /* TEXT */
                          )
                        ]),
                        _: 1
                        /* STABLE */
                      }, 8, ["html-for"])
                    ]),
                    _: 1
                    /* STABLE */
                  }),
                  P(M(re), null, {
                    default: V(() => [
                      P(M(at), {
                        id: `${M(U)}-defaultViewpoint`,
                        clearable: "",
                        placeholder: $.$t(
                          "appConfigurator.editors.layer.mapHandling.noDefaultViewpoint"
                        ),
                        items: Y.value,
                        modelValue: M(N).properties.defaultViewpoint,
                        "onUpdate:modelValue": Z[4] || (Z[4] = (se) => M(N).properties.defaultViewpoint = se)
                      }, null, 8, ["id", "placeholder", "items", "modelValue"])
                    ]),
                    _: 1
                    /* STABLE */
                  })
                ]),
                _: 1
                /* STABLE */
              })) : Ne("v-if", !0)
            ]),
            $e($.$slots, "append")
          ]),
          _: 3
          /* FORWARDED */
        })
      ]),
      _: 3
      /* FORWARDED */
    }, 8, ["disabled"])) : Ne("v-if", !0);
  }
}), Gn = /* @__PURE__ */ De({
  __name: "StyleSettings",
  props: {
    modelValue: {
      type: Object,
      default: () => Xi.getDefaultOptions()
    }
  },
  emits: ["update:modelValue"],
  setup(C, { emit: D }) {
    function O(K, oe, he) {
      return he[oe] !== null && typeof he[oe] == "object" ? K.styles.hasKey(he[oe].name) ? {
        title: he[oe].name,
        value: he[oe].name
      } : {
        title: "appConfigurator.editors.layer.styleSettings.inlineStyle",
        value: he[oe]
      } : null;
    }
    const R = C, T = D, N = rt("vcsApp"), E = Be(
      R,
      "modelValue",
      T
    ), Y = ve([...N.styles].map((K) => K.name)), _ = [
      N.styles.added.addEventListener((K) => {
        Y.value.push(K.name);
      }),
      N.styles.removed.addEventListener(() => {
        Y.value = [...N.styles].map((K) => K.name);
      })
    ], U = O(
      N,
      "style",
      E.value
    ), $ = Ge(() => U ? [
      U,
      ...Y.value.map((K) => ({ title: K, value: K }))
    ] : Y.value), Z = O(
      N,
      "highlightStyle",
      E.value
    ), se = (K) => K.className === "VectorStyleItem", ie = Ge(() => {
      const K = [
        ...Y.value.map((oe) => N.styles.getByKey(oe)).filter(se)
      ].map((oe) => ({ title: oe.name, value: oe.name }));
      return Z ? [Z, ...K] : K;
    });
    Ct(() => {
      _.forEach((K) => K());
    });
    const H = We();
    function te(K, oe) {
      var he;
      oe === U || oe === Z ? E.value[K] = oe : E.value[K] = K === "style" ? oe : (he = N.styles.getByKey(oe)) == null ? void 0 : he.toJSON();
    }
    function J(K, oe) {
      var he, me;
      return ((he = O(N, K, oe)) == null ? void 0 : he.value) || ((me = oe[K]) == null ? void 0 : me.name) || oe[K] || null;
    }
    return (K, oe) => (fe(), be(M(Xe), { class: "pa-0" }, {
      default: V(() => [
        P(M(Se), { "no-gutters": "" }, {
          default: V(() => [
            P(M(re), { cols: "6" }, {
              default: V(() => [
                P(M(Ce), {
                  "html-for": `${M(H)}-availableStyles`
                }, {
                  default: V(() => [
                    ge(
                      ce(K.$t("appConfigurator.editors.layer.styleSettings.availableStyles")),
                      1
                      /* TEXT */
                    )
                  ]),
                  _: 1
                  /* STABLE */
                }, 8, ["html-for"])
              ]),
              _: 1
              /* STABLE */
            }),
            P(M(re), null, {
              default: V(() => [
                P(M(at), {
                  id: `${M(H)}-availableStyles`,
                  multiple: "",
                  clearable: "",
                  placeholder: K.$t("appConfigurator.editors.layer.styleSettings.noStyle"),
                  items: Y.value,
                  modelValue: M(E).properties.availableStyles,
                  "onUpdate:modelValue": oe[0] || (oe[0] = (he) => M(E).properties.availableStyles = he)
                }, null, 8, ["id", "placeholder", "items", "modelValue"])
              ]),
              _: 1
              /* STABLE */
            })
          ]),
          _: 1
          /* STABLE */
        }),
        P(M(Se), { "no-gutters": "" }, {
          default: V(() => [
            P(M(re), { cols: "6" }, {
              default: V(() => [
                P(M(Ce), {
                  "html-for": `${M(H)}-style`
                }, {
                  default: V(() => [
                    ge(
                      ce(K.$t("appConfigurator.editors.layer.styleSettings.style")),
                      1
                      /* TEXT */
                    )
                  ]),
                  _: 1
                  /* STABLE */
                }, 8, ["html-for"])
              ]),
              _: 1
              /* STABLE */
            }),
            P(M(re), null, {
              default: V(() => [
                P(M(at), {
                  id: `${M(H)}-style`,
                  clearable: "",
                  placeholder: K.$t("appConfigurator.editors.layer.styleSettings.noStyle"),
                  items: $.value,
                  "model-value": J("style", M(E)),
                  "onUpdate:modelValue": oe[1] || (oe[1] = (he) => te("style", he))
                }, null, 8, ["id", "placeholder", "items", "model-value"])
              ]),
              _: 1
              /* STABLE */
            })
          ]),
          _: 1
          /* STABLE */
        }),
        P(M(Se), { "no-gutters": "" }, {
          default: V(() => [
            P(M(re), { cols: "6" }, {
              default: V(() => [
                P(M(Ce), {
                  "html-for": `${M(H)}-highlight-style`
                }, {
                  default: V(() => [
                    ge(
                      ce(K.$t("appConfigurator.editors.layer.styleSettings.highlightStyle")),
                      1
                      /* TEXT */
                    )
                  ]),
                  _: 1
                  /* STABLE */
                }, 8, ["html-for"])
              ]),
              _: 1
              /* STABLE */
            }),
            P(M(re), null, {
              default: V(() => [
                P(M(at), {
                  id: `${M(H)}-highlight-style`,
                  clearable: "",
                  placeholder: K.$t("appConfigurator.editors.layer.styleSettings.noStyle"),
                  items: ie.value,
                  "model-value": J("highlightStyle", M(E)),
                  "onUpdate:modelValue": oe[2] || (oe[2] = (he) => te("highlightStyle", he))
                }, null, 8, ["id", "placeholder", "items", "model-value"])
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
    }));
  }
}), Bn = /* @__PURE__ */ De({
  __name: "DisplayLayerSettings",
  props: {
    modelValue: {
      type: Object,
      required: !0
    },
    disabled: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["update:modelValue"],
  setup(C, { emit: D }) {
    const T = Be(
      C,
      "modelValue",
      D
    );
    return (N, E) => M(T) ? (fe(), be(M(Ue), {
      key: 0,
      heading: "appConfigurator.editors.layer.display.title",
      expandable: "",
      disabled: C.disabled
    }, {
      default: V(() => [
        P(M(Xe), { class: "py-0 px-1" }, {
          default: V(() => [
            $e(N.$slots, "prepend"),
            $e(N.$slots, "default", {}, () => [
              P(Gn, {
                modelValue: M(T),
                "onUpdate:modelValue": E[0] || (E[0] = (Y) => Wa(T) ? T.value = Y : null)
              }, null, 8, ["modelValue"])
            ]),
            $e(N.$slots, "append")
          ]),
          _: 3
          /* FORWARDED */
        })
      ]),
      _: 3
      /* FORWARDED */
    }, 8, ["disabled"])) : Ne("v-if", !0);
  }
}), Wn = De({
  name: "ExtentSettings",
  components: {
    VcsFormSection: Ue,
    VcsExtent: _i
  },
  props: {
    modelValue: {
      type: Object,
      required: !0
    },
    disabled: {
      type: Boolean,
      default: !1
    }
  },
  setup(C, { emit: D }) {
    const O = rt("vcsApp"), R = Be(
      C,
      "modelValue",
      D
    ), T = Ge({
      get() {
        return new Oa(R.value.extent);
      },
      set(Y) {
        R.value.extent = Y.toJSON();
      }
    }), { actions: N, destroy: E } = ji(O, T);
    return C.disabled && N.forEach((Y) => {
      Y.name !== "components.extent.zoom" && (Y.disabled = !0);
    }), Ct(() => {
      E();
    }), {
      localConfig: R,
      actions: N
    };
  }
});
function _n(C, D, O, R, T, N) {
  const E = Q("VcsExtent"), Y = Q("VcsFormSection");
  return C.localConfig.extent ? (fe(), be(Y, {
    key: 0,
    heading: "appConfigurator.editors.settings.extent.title",
    expandable: "",
    "header-actions": C.actions
  }, {
    default: V(() => [
      P(E, {
        modelValue: C.localConfig.extent,
        "onUpdate:modelValue": D[0] || (D[0] = (_) => C.localConfig.extent = _),
        disabled: C.disabled
      }, null, 8, ["modelValue", "disabled"])
    ]),
    _: 1
    /* STABLE */
  }, 8, ["header-actions"])) : Ne("v-if", !0);
}
const jn = /* @__PURE__ */ ot(Wn, [["render", _n]]);
function ta(C) {
  var O;
  const { attributions: D } = C.properties;
  if (D)
    return {
      key: `${C.className}_${C.name}`,
      title: ((O = C.properties) == null ? void 0 : O.title) ?? `${C.className}: ${C.name}`,
      attributions: Array.isArray(D) ? D : [D]
    };
}
function $n(C) {
  return [
    ...[...C.maps].map(ta),
    ...[...C.layers].map(ta),
    ...[...C.obliqueCollections].map(ta)
  ].flat().filter((D) => !!D);
}
const Un = De({
  name: "AttributionsEditor",
  components: {
    VContainer: Xe,
    VRow: Se,
    VCol: re,
    VDialog: $a,
    VCard: ns,
    VCardTitle: ls,
    VCardText: hs,
    VCardActions: cs,
    VForm: ja,
    VDivider: _a,
    VcsLabel: Ce,
    VcsRadio: $i,
    VcsSelect: at,
    VcsTextField: Oe,
    VcsButton: la,
    VcsFormButton: Ui,
    VcsDataTable: ha,
    VcsActionButtonList: Et
  },
  props: {
    modelValue: {
      type: [Object, Array],
      default: () => []
    }
  },
  setup(C, { emit: D }) {
    const O = rt("vcsApp"), R = ve(!1), T = ve(), N = ve(!1), E = ve({
      provider: "",
      url: "",
      year: (/* @__PURE__ */ new Date()).getFullYear()
    }), Y = $n(O), _ = ve("add"), U = ve(null), $ = Ge({
      get() {
        return Array.isArray(C.modelValue) ? C.modelValue : [C.modelValue];
      },
      set(z) {
        z.length === 1 ? D("update:modelValue", Ft(z[0])) : D(
          "update:modelValue",
          z.map((ye) => Ft(ye))
        );
      }
    }), Z = ve([]), se = Ge(() => {
      var ye;
      let z = (ye = Z.value[0]) == null ? void 0 : ye.provider;
      return Z.value.length > 1 && (z += ` (+${Z.value.length - 1})`), z;
    }), ie = (z) => [
      {
        name: "edit-attribution",
        icon: "$vcsEdit",
        title: "appConfigurator.editors.settings.attributions.edit",
        callback() {
          E.value = z, R.value = !0;
        }
      },
      {
        name: "remove-attribution",
        icon: "$vcsTrashCan",
        title: "appConfigurator.editors.settings.attributions.remove",
        callback() {
          Z.value.splice(
            Z.value.findIndex(
              (ye) => ye.year === z.year && ye.provider === z.provider && ye.url === z.url
            ),
            1
          ), $.value.splice(
            $.value.indexOf(z),
            1
          );
        }
      }
    ];
    Z.value = $.value.map((z) => ({
      ...z,
      actions: ie(z)
    }));
    const H = async () => {
      var Pe;
      const z = $.value.findIndex(
        ({ provider: X, url: Te, year: Ze }) => X === E.value.provider && Te === E.value.url && Ze === E.value.year
      ), ye = {
        ...E.value,
        actions: ie(E.value)
      };
      z > -1 ? (Object.assign($.value[z], {
        ...E.value
      }), Object.assign(Z.value[z], ye)) : ($.value = [
        ...$.value,
        { ...E.value }
      ], Z.value = [
        ...Z.value,
        ye
      ]), E.value = {
        provider: "",
        url: "",
        year: (/* @__PURE__ */ new Date()).getFullYear()
      }, await aa(), (Pe = T.value) == null || Pe.resetValidation();
    }, te = async () => {
      var z;
      if (U.value) {
        const ye = Y.find(
          (Pe) => Pe.key === U.value
        );
        if (ye) {
          const Pe = Array.isArray(ye.attributions) ? ye.attributions : [ye.attributions];
          $.value = [
            ...$.value,
            ...Pe
          ], Z.value = [
            ...Z.value,
            ...Pe.map((X) => ({
              ...X,
              actions: ie(X)
            }))
          ];
        }
      }
      await aa(), (z = T.value) == null || z.resetValidation();
    }, J = async () => {
      _.value === "adopt" ? await te() : await H();
    }, K = () => {
      $.value = [], Z.value = [];
    }, oe = [
      {
        title: "appConfigurator.editors.settings.attributions.provider",
        value: "provider"
      },
      {
        title: "appConfigurator.editors.settings.attributions.url",
        value: "url"
      },
      {
        title: "appConfigurator.editors.settings.attributions.year",
        value: "year"
      },
      {
        title: "appConfigurator.editors.settings.attributions.actions",
        value: "actions",
        sortable: !1
      }
    ], he = [
      {
        label: "appConfigurator.editors.settings.attributions.addTooltip",
        value: "add"
      },
      {
        label: "appConfigurator.editors.settings.attributions.adoptTooltip",
        value: "adopt"
      }
    ];
    return {
      cid: We(),
      dialog: R,
      isValid: N,
      formRef: T,
      addOptions: he,
      selectedOption: _,
      selectedEntry: U,
      entries: Y,
      newAttribution: E,
      submit: J,
      clear: K,
      headers: oe,
      attributionItems: Z,
      attributionsLine: se,
      isRequiredString: Yt
    };
  }
});
function Zn(C, D, O, R, T, N) {
  const E = Q("VcsLabel"), Y = Q("v-col"), _ = Q("VcsTextField"), U = Q("VcsButton"), $ = Q("v-card-title"), Z = Q("v-divider"), se = Q("vcs-radio"), ie = Q("vcs-select"), H = Q("v-row"), te = Q("VcsFormButton"), J = Q("v-container"), K = Q("v-form"), oe = Q("VcsActionButtonList"), he = Q("VcsDataTable"), me = Q("v-card-text"), z = Q("v-card-actions"), ye = Q("v-card"), Pe = Q("v-dialog");
  return fe(), be(J, { class: "pa-0" }, {
    default: V(() => [
      P(H, { "no-gutters": "" }, {
        default: V(() => [
          P(Y, { cols: "6" }, {
            default: V(() => [
              P(E, {
                "html-for": `${C.cid}-attributions`
              }, {
                default: V(() => [
                  ge(
                    ce(C.$t("appConfigurator.editors.settings.attributions.title")),
                    1
                    /* TEXT */
                  )
                ]),
                _: 1
                /* STABLE */
              }, 8, ["html-for"])
            ]),
            _: 1
            /* STABLE */
          }),
          P(Y, null, {
            default: V(() => [
              P(_, {
                id: `${C.cid}-attributions`,
                disabled: "",
                modelValue: C.attributionsLine,
                "onUpdate:modelValue": D[0] || (D[0] = (X) => C.attributionsLine = X)
              }, null, 8, ["id", "modelValue"])
            ]),
            _: 1
            /* STABLE */
          }),
          P(Y, { cols: "1" }, {
            default: V(() => [
              P(Pe, {
                modelValue: C.dialog,
                "onUpdate:modelValue": D[8] || (D[8] = (X) => C.dialog = X),
                width: "75%"
              }, {
                activator: V(({ props: X }) => [
                  P(
                    U,
                    Ot(X, {
                      icon: "$vcsEdit",
                      class: "ma-1 float-end"
                    }),
                    null,
                    16
                    /* FULL_PROPS */
                  )
                ]),
                default: V(() => [
                  P(ye, null, {
                    default: V(() => [
                      P($, { class: "font-weight-bold ma-0" }, {
                        default: V(() => [
                          ge(
                            ce(C.$t("appConfigurator.editors.settings.attributions.title")),
                            1
                            /* TEXT */
                          )
                        ]),
                        _: 1
                        /* STABLE */
                      }),
                      P(Z),
                      P(me, { class: "pa-2" }, {
                        default: V(() => [
                          P(se, {
                            items: C.addOptions,
                            modelValue: C.selectedOption,
                            "onUpdate:modelValue": D[1] || (D[1] = (X) => C.selectedOption = X),
                            inline: ""
                          }, null, 8, ["items", "modelValue"]),
                          P(K, {
                            onSubmit: At(C.submit, ["prevent"]),
                            modelValue: C.isValid,
                            "onUpdate:modelValue": D[6] || (D[6] = (X) => C.isValid = X),
                            ref: "formRef",
                            class: "pa-0"
                          }, {
                            default: V(() => [
                              P(J, { class: "px-1 py-0" }, {
                                default: V(() => [
                                  C.selectedOption === "adopt" ? (fe(), be(H, {
                                    key: 0,
                                    "no-gutters": ""
                                  }, {
                                    default: V(() => [
                                      P(Y, null, {
                                        default: V(() => [
                                          P(E, {
                                            "html-for": `${C.cid}-provider`,
                                            required: ""
                                          }, {
                                            default: V(() => [
                                              ge(
                                                ce(C.$t(
                                                  "appConfigurator.editors.settings.attributions.from"
                                                )),
                                                1
                                                /* TEXT */
                                              )
                                            ]),
                                            _: 1
                                            /* STABLE */
                                          }, 8, ["html-for"])
                                        ]),
                                        _: 1
                                        /* STABLE */
                                      }),
                                      P(Y, null, {
                                        default: V(() => [
                                          P(ie, {
                                            items: C.entries,
                                            "item-title": "title",
                                            "item-value": "key",
                                            modelValue: C.selectedEntry,
                                            "onUpdate:modelValue": D[2] || (D[2] = (X) => C.selectedEntry = X),
                                            placeholder: C.$t(
                                              "appConfigurator.editors.settings.attributions.select"
                                            ),
                                            rules: [
                                              (X) => !!X || "appConfigurator.editors.settings.attributions.select"
                                            ]
                                          }, null, 8, ["items", "modelValue", "placeholder", "rules"])
                                        ]),
                                        _: 1
                                        /* STABLE */
                                      })
                                    ]),
                                    _: 1
                                    /* STABLE */
                                  })) : (fe(), Gt(
                                    da,
                                    { key: 1 },
                                    [
                                      P(H, { "no-gutters": "" }, {
                                        default: V(() => [
                                          P(Y, null, {
                                            default: V(() => [
                                              P(E, {
                                                "html-for": `${C.cid}-provider`,
                                                required: ""
                                              }, {
                                                default: V(() => [
                                                  ge(
                                                    ce(C.$t(
                                                      "appConfigurator.editors.settings.attributions.provider"
                                                    )),
                                                    1
                                                    /* TEXT */
                                                  )
                                                ]),
                                                _: 1
                                                /* STABLE */
                                              }, 8, ["html-for"])
                                            ]),
                                            _: 1
                                            /* STABLE */
                                          }),
                                          P(Y, null, {
                                            default: V(() => [
                                              P(_, {
                                                id: `${C.cid}-provider`,
                                                clearable: "",
                                                placeholder: C.$t(
                                                  "appConfigurator.editors.settings.attributions.placeholder"
                                                ),
                                                modelValue: C.newAttribution.provider,
                                                "onUpdate:modelValue": D[3] || (D[3] = (X) => C.newAttribution.provider = X),
                                                modelModifiers: { trim: !0 },
                                                rules: [C.isRequiredString]
                                              }, null, 8, ["id", "placeholder", "modelValue", "rules"])
                                            ]),
                                            _: 1
                                            /* STABLE */
                                          })
                                        ]),
                                        _: 1
                                        /* STABLE */
                                      }),
                                      P(H, { "no-gutters": "" }, {
                                        default: V(() => [
                                          P(Y, null, {
                                            default: V(() => [
                                              P(E, {
                                                "html-for": `${C.cid}-url`
                                              }, {
                                                default: V(() => [
                                                  ge(
                                                    ce(C.$t(
                                                      "appConfigurator.editors.settings.attributions.url"
                                                    )),
                                                    1
                                                    /* TEXT */
                                                  )
                                                ]),
                                                _: 1
                                                /* STABLE */
                                              }, 8, ["html-for"])
                                            ]),
                                            _: 1
                                            /* STABLE */
                                          }),
                                          P(Y, null, {
                                            default: V(() => [
                                              P(_, {
                                                id: `${C.cid}-url`,
                                                clearable: "",
                                                modelValue: C.newAttribution.url,
                                                "onUpdate:modelValue": D[4] || (D[4] = (X) => C.newAttribution.url = X),
                                                modelModifiers: { trim: !0 }
                                              }, null, 8, ["id", "modelValue"])
                                            ]),
                                            _: 1
                                            /* STABLE */
                                          })
                                        ]),
                                        _: 1
                                        /* STABLE */
                                      }),
                                      P(H, { "no-gutters": "" }, {
                                        default: V(() => [
                                          P(Y, null, {
                                            default: V(() => [
                                              P(E, {
                                                "html-for": `${C.cid}-year`
                                              }, {
                                                default: V(() => [
                                                  ge(
                                                    ce(C.$t(
                                                      "appConfigurator.editors.settings.attributions.year"
                                                    )),
                                                    1
                                                    /* TEXT */
                                                  )
                                                ]),
                                                _: 1
                                                /* STABLE */
                                              }, 8, ["html-for"])
                                            ]),
                                            _: 1
                                            /* STABLE */
                                          }),
                                          P(Y, null, {
                                            default: V(() => [
                                              P(_, {
                                                id: `${C.cid}-year`,
                                                clearable: "",
                                                modelValue: C.newAttribution.year,
                                                "onUpdate:modelValue": D[5] || (D[5] = (X) => C.newAttribution.year = X),
                                                modelModifiers: { number: !0 }
                                              }, null, 8, ["id", "modelValue"])
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
                                  )),
                                  P(H, { "no-gutters": "" }, {
                                    default: V(() => [
                                      P(Y, { class: "d-flex justify-end" }, {
                                        default: V(() => [
                                          P(te, {
                                            type: "submit",
                                            variant: "filled",
                                            disabled: !C.isValid,
                                            class: "mr-1 mt-1"
                                          }, {
                                            default: V(() => [
                                              ge(
                                                ce(C.$t(
                                                  `appConfigurator.editors.settings.attributions.${C.selectedOption}`
                                                )),
                                                1
                                                /* TEXT */
                                              )
                                            ]),
                                            _: 1
                                            /* STABLE */
                                          }, 8, ["disabled"])
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
                          }, 8, ["onSubmit", "modelValue"]),
                          P(he, {
                            items: C.attributionItems,
                            "item-key": "provider",
                            headers: C.headers,
                            "show-searchbar": !1
                          }, {
                            "item.actions": V(({ item: X }) => [
                              X.actions ? (fe(), be(oe, {
                                key: 0,
                                actions: X.actions,
                                "block-overflow": !0,
                                "overflow-count": 2
                              }, null, 8, ["actions"])) : Ne("v-if", !0)
                            ]),
                            _: 1
                            /* STABLE */
                          }, 8, ["items", "headers"])
                        ]),
                        _: 1
                        /* STABLE */
                      }),
                      P(z, null, {
                        default: V(() => [
                          P(te, {
                            onClick: D[7] || (D[7] = (X) => C.dialog = !1),
                            variant: "filled"
                          }, {
                            default: V(() => [
                              ge(
                                ce(C.$t("appConfigurator.apply")),
                                1
                                /* TEXT */
                              )
                            ]),
                            _: 1
                            /* STABLE */
                          }),
                          P(te, {
                            onClick: C.clear,
                            class: "ml-1"
                          }, {
                            default: V(() => [
                              ge(
                                ce(C.$t("appConfigurator.editors.settings.attributions.clear")),
                                1
                                /* TEXT */
                              )
                            ]),
                            _: 1
                            /* STABLE */
                          }, 8, ["onClick"])
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
              }, 8, ["modelValue"])
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
  });
}
const qn = /* @__PURE__ */ ot(Un, [["render", Zn]]), Jn = /* @__PURE__ */ De({
  __name: "VcsObjectInformationSettings",
  props: {
    modelValue: {
      type: Object,
      required: !0
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    heading: {
      type: String,
      default: "appConfigurator.editors.settings.information.title"
    }
  },
  emits: ["update:modelValue"],
  setup(C, { emit: D }) {
    const T = Be(C, "modelValue", D), N = We();
    return (E, Y) => M(T) ? (fe(), be(M(Ue), {
      key: 0,
      heading: C.heading,
      expandable: "",
      disabled: C.disabled
    }, {
      default: V(() => [
        M(T).properties ? (fe(), be(M(Xe), {
          key: 0,
          class: "py-0 px-1"
        }, {
          default: V(() => [
            P(M(Se), { "no-gutters": "" }, {
              default: V(() => [
                P(M(re), null, {
                  default: V(() => [
                    P(M(Ce), {
                      "html-for": `${M(N)}-tooltip`
                    }, {
                      default: V(() => [
                        ge(
                          ce(E.$t("appConfigurator.editors.settings.information.tooltip")),
                          1
                          /* TEXT */
                        )
                      ]),
                      _: 1
                      /* STABLE */
                    }, 8, ["html-for"])
                  ]),
                  _: 1
                  /* STABLE */
                }),
                P(M(re), null, {
                  default: V(() => [
                    P(M(Oe), {
                      id: `${M(N)}-tooltip`,
                      clearable: "",
                      placeholder: E.$t("appConfigurator.editors.settings.information.tooltipTooltip"),
                      modelValue: M(T).properties.tooltip,
                      "onUpdate:modelValue": Y[0] || (Y[0] = (_) => M(T).properties.tooltip = _),
                      modelModifiers: { trim: !0 }
                    }, null, 8, ["id", "placeholder", "modelValue"])
                  ]),
                  _: 1
                  /* STABLE */
                })
              ]),
              _: 1
              /* STABLE */
            }),
            P(M(Se), { "no-gutters": "" }, {
              default: V(() => [
                P(M(re), null, {
                  default: V(() => [
                    P(M(Ce), {
                      "html-for": `${M(N)}-icon`
                    }, {
                      default: V(() => [
                        ge(
                          ce(E.$t("appConfigurator.editors.settings.information.icon")),
                          1
                          /* TEXT */
                        )
                      ]),
                      _: 1
                      /* STABLE */
                    }, 8, ["html-for"])
                  ]),
                  _: 1
                  /* STABLE */
                }),
                P(M(re), null, {
                  default: V(() => [
                    P(M(Oe), {
                      id: `${M(N)}-icon`,
                      clearable: "",
                      modelValue: M(T).properties.icon,
                      "onUpdate:modelValue": Y[1] || (Y[1] = (_) => M(T).properties.icon = _),
                      modelModifiers: { trim: !0 }
                    }, null, 8, ["id", "modelValue"])
                  ]),
                  _: 1
                  /* STABLE */
                })
              ]),
              _: 1
              /* STABLE */
            }),
            P(M(Se), { "no-gutters": "" }, {
              default: V(() => [
                P(M(re), null, {
                  default: V(() => [
                    P(M(Ce), {
                      "html-for": `${M(N)}-infoUrl`
                    }, {
                      default: V(() => [
                        ge(
                          ce(E.$t("appConfigurator.editors.settings.information.infoUrl")),
                          1
                          /* TEXT */
                        )
                      ]),
                      _: 1
                      /* STABLE */
                    }, 8, ["html-for"])
                  ]),
                  _: 1
                  /* STABLE */
                }),
                P(M(re), null, {
                  default: V(() => [
                    P(M(Oe), {
                      id: `${M(N)}-infoUrl`,
                      clearable: "",
                      modelValue: M(T).properties.infoUrl,
                      "onUpdate:modelValue": Y[2] || (Y[2] = (_) => M(T).properties.infoUrl = _),
                      modelModifiers: { trim: !0 }
                    }, null, 8, ["id", "modelValue"])
                  ]),
                  _: 1
                  /* STABLE */
                })
              ]),
              _: 1
              /* STABLE */
            }),
            P(qn, {
              modelValue: M(T).properties.attributions,
              "onUpdate:modelValue": Y[3] || (Y[3] = (_) => M(T).properties.attributions = _)
            }, null, 8, ["modelValue"])
          ]),
          _: 1
          /* STABLE */
        })) : Ne("v-if", !0)
      ]),
      _: 1
      /* STABLE */
    }, 8, ["heading", "disabled"])) : Ne("v-if", !0);
  }
}), Kn = /* @__PURE__ */ De({
  __name: "FeatureInfoSettings",
  props: {
    modelValue: {
      type: String,
      default: ""
    }
  },
  emits: ["update:modelValue"],
  setup(C, { emit: D }) {
    const T = Zi(C, "modelValue", D), N = rt("vcsApp"), E = ia(
      [...N.featureInfo].map((U) => U.name)
    ), Y = [
      N.featureInfo.added.addEventListener((U) => {
        E.value.push(U.name);
      }),
      N.featureInfo.removed.addEventListener(() => {
        E.value = [...N.featureInfo].map((U) => U.name);
      })
    ];
    Ct(() => {
      Y.forEach((U) => U());
    });
    const _ = We();
    return (U, $) => (fe(), be(M(Se), { "no-gutters": "" }, {
      default: V(() => [
        P(M(re), null, {
          default: V(() => [
            P(M(Ce), {
              "html-for": `${M(_)}-featureInfo`
            }, {
              default: V(() => [
                ge(
                  ce(U.$t("appConfigurator.editors.layer.mapHandling.featureInfo")),
                  1
                  /* TEXT */
                )
              ]),
              _: 1
              /* STABLE */
            }, 8, ["html-for"])
          ]),
          _: 1
          /* STABLE */
        }),
        P(M(re), null, {
          default: V(() => [
            P(M(at), {
              id: `${M(_)}-featureInfo`,
              clearable: "",
              placeholder: U.$t("appConfigurator.editors.layer.mapHandling.nofeatureInfo"),
              items: E.value,
              modelValue: M(T),
              "onUpdate:modelValue": $[0] || ($[0] = (Z) => Wa(T) ? T.value = Z : null),
              modelModifiers: { trim: !0 }
            }, null, 8, ["id", "placeholder", "items", "modelValue"])
          ]),
          _: 1
          /* STABLE */
        })
      ]),
      _: 1
      /* STABLE */
    }));
  }
}), Qn = /* @__PURE__ */ De({
  __name: "SensorthingsLayerEditor",
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
  setup(C) {
    const D = rt("vcsApp"), O = C, R = O.getConfig();
    Fn(R, {
      properties: Nn,
      extent: On
    }), R.vectorProperties = new Yi(
      R.vectorProperties || {}
    ).getValues();
    const T = ct.getDefaultOptions(), N = ve({
      ...T,
      ...R
    }), E = ve();
    function Y() {
      N.value.observedProperty = "", E.value = void 0;
    }
    function _(H) {
      const te = N.value.observedProperty;
      H.every((J) => J.name !== te) && (N.value.observedProperty = ""), E.value = [
        { value: "", title: "sensorthings.editors.layer.noFilter" }
      ].concat(
        H.map((J) => ({
          value: J.name,
          title: J.name
        }))
      );
    }
    let U;
    async function $() {
      if (N.value.url && N.value.url !== U) {
        U = N.value.url;
        try {
          const H = await xs(N.value.url);
          _(H), D.notifier.add({
            message: "sensorthings.editors.layer.fetchSuccess",
            type: kt.SUCCESS
          });
        } catch (H) {
          Y(), D.notifier.add({
            message: "sensorthings.editors.layer.fetchFailed",
            type: kt.ERROR
          }), oa(Rt).error(H);
        }
      }
    }
    const Z = () => {
      N.value.observedProperty === "" && delete N.value.observedProperty;
      const H = structuredClone(Ft(N.value));
      O.setConfig(H);
    }, se = () => {
      O.setConfig();
    };
    Ga(async () => {
      await $();
    });
    const ie = We();
    return (H, te) => (fe(), be(M(Ha), {
      onSubmit: Z,
      onCancel: se
    }, {
      default: V(() => [
        P(Rn, {
          modelValue: N.value,
          "onUpdate:modelValue": te[1] || (te[1] = (J) => N.value = J),
          "hide-url": ""
        }, {
          append: V(() => [
            P(M(Se), { "no-gutters": "" }, {
              default: V(() => [
                P(M(re), null, {
                  default: V(() => [
                    P(M(Ce), {
                      "html-for": `${M(ie)}-url`,
                      required: ""
                    }, {
                      default: V(() => [
                        ge(
                          ce(H.$t("appConfigurator.editors.layer.general.url")),
                          1
                          /* TEXT */
                        )
                      ]),
                      _: 1
                      /* STABLE */
                    }, 8, ["html-for"])
                  ]),
                  _: 1
                  /* STABLE */
                }),
                P(M(re), null, {
                  default: V(() => [
                    P(M(Oe), {
                      id: `${M(ie)}-url`,
                      clearable: "",
                      modelValue: N.value.url,
                      "onUpdate:modelValue": te[0] || (te[0] = (J) => N.value.url = J),
                      modelModifiers: { trim: !0 },
                      rules: [M(Yt)],
                      onBlur: $
                    }, null, 8, ["id", "modelValue", "rules"])
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
        }, 8, ["modelValue"]),
        P(Xn, {
          modelValue: N.value,
          "onUpdate:modelValue": te[5] || (te[5] = (J) => N.value = J)
        }, {
          append: V(() => [
            P(Yn, {
              modelValue: N.value,
              "onUpdate:modelValue": te[2] || (te[2] = (J) => N.value = J)
            }, null, 8, ["modelValue"]),
            P(M(Se), { "no-gutters": "" }, {
              default: V(() => [
                P(M(re), null, {
                  default: V(() => [
                    P(M(Ce), {
                      "html-for": `${M(ie)}-observedProperty`
                    }, {
                      default: V(() => [
                        ge(
                          ce(H.$t("sensorthings.editors.layer.observedPropertyFilter")),
                          1
                          /* TEXT */
                        )
                      ]),
                      _: 1
                      /* STABLE */
                    }, 8, ["html-for"])
                  ]),
                  _: 1
                  /* STABLE */
                }),
                P(M(re), null, {
                  default: V(() => [
                    P(M(at), {
                      id: `${M(ie)}-observedProperty`,
                      modelValue: N.value.observedProperty,
                      "onUpdate:modelValue": te[3] || (te[3] = (J) => N.value.observedProperty = J),
                      items: E.value,
                      "no-data-text": "sensorthings.editors.layer.noData"
                    }, null, 8, ["id", "modelValue", "items"])
                  ]),
                  _: 1
                  /* STABLE */
                })
              ]),
              _: 1
              /* STABLE */
            }),
            P(M(Se), { "no-gutters": "" }, {
              default: V(() => [
                P(M(re), null, {
                  default: V(() => [
                    P(M(Ce), {
                      "html-for": `${M(ie)}-additionalFilters`
                    }, {
                      default: V(() => [
                        ge(
                          ce(H.$t("sensorthings.editors.layer.additionalFilters")),
                          1
                          /* TEXT */
                        )
                      ]),
                      _: 1
                      /* STABLE */
                    }, 8, ["html-for"])
                  ]),
                  _: 1
                  /* STABLE */
                }),
                P(M(re), null, {
                  default: V(() => [
                    P(M(Oe), {
                      id: `${M(ie)}-additionalFilters`,
                      clearable: "",
                      modelValue: N.value.additionalFilters,
                      "onUpdate:modelValue": te[4] || (te[4] = (J) => N.value.additionalFilters = J),
                      modelModifiers: { trim: !0 }
                    }, {
                      "prepend-inner": V(() => [
                        ge("$filter=")
                      ]),
                      _: 1
                      /* STABLE */
                    }, 8, ["id", "modelValue"])
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
        }, 8, ["modelValue"]),
        P(Hn, {
          modelValue: N.value,
          "onUpdate:modelValue": te[7] || (te[7] = (J) => N.value = J)
        }, {
          append: V(() => [
            P(Kn, {
              modelValue: N.value.properties.featureInfo,
              "onUpdate:modelValue": te[6] || (te[6] = (J) => N.value.properties.featureInfo = J)
            }, null, 8, ["modelValue"])
          ]),
          _: 1
          /* STABLE */
        }, 8, ["modelValue"]),
        P(Bn, {
          modelValue: N.value,
          "onUpdate:modelValue": te[8] || (te[8] = (J) => N.value = J)
        }, null, 8, ["modelValue"]),
        P(jn, {
          modelValue: N.value,
          "onUpdate:modelValue": te[9] || (te[9] = (J) => N.value = J)
        }, null, 8, ["modelValue"]),
        P(Jn, {
          modelValue: N.value,
          "onUpdate:modelValue": te[10] || (te[10] = (J) => N.value = J)
        }, null, 8, ["modelValue"])
      ]),
      _: 1
      /* STABLE */
    }));
  }
});
function ol() {
  let C;
  return {
    get name() {
      return Rt;
    },
    get version() {
      return us;
    },
    get mapVersion() {
      return gs;
    },
    async initialize(D) {
      return C = D, D.layerClassRegistry.registerClass(
        this[ht],
        ct.className,
        ct
      ), D.featureInfoClassRegistry.registerClass(
        this[ht],
        mt.className,
        mt
      ), D.featureInfoClassRegistry.registerClass(
        this[ht],
        zt.className,
        zt
      ), D.featureInfoClassRegistry.registerClass(
        this[ht],
        It.className,
        It
      ), D.featureInfoClassRegistry.registerClass(
        this[ht],
        Vt.className,
        Vt
      ), Promise.resolve();
    },
    /**
     * components for configuring the plugin and/ or custom items defined by the plugin
     */
    getConfigEditors() {
      return [
        {
          component: Dt,
          collectionName: "featureInfo",
          itemName: mt.className,
          title: "sensorthings.editors.title.chart",
          infoUrlCallback: C == null ? void 0 : C.getHelpUrlCallback(
            "/components/plugins/sensorthingsConfig.html#id_chartFeatureInfo",
            "app-configurator"
          )
        },
        {
          component: Dt,
          collectionName: "featureInfo",
          itemName: zt.className,
          title: "sensorthings.editors.title.chartBalloon",
          infoUrlCallback: C == null ? void 0 : C.getHelpUrlCallback(
            "/components/plugins/sensorthingsConfig.html#id_chartBalloonFeatureInfo",
            "app-configurator"
          )
        },
        {
          component: Dt,
          collectionName: "featureInfo",
          itemName: It.className,
          title: "sensorthings.editors.title.dashboard",
          infoUrlCallback: C == null ? void 0 : C.getHelpUrlCallback(
            "/components/plugins/sensorthingsConfig.html#id_dashboardFeatureInfo",
            "app-configurator"
          )
        },
        {
          component: Dt,
          collectionName: "featureInfo",
          itemName: Vt.className,
          title: "sensorthings.editors.title.dashboardBalloon",
          infoUrlCallback: C == null ? void 0 : C.getHelpUrlCallback(
            "/components/plugins/sensorthingsConfig.html#id_dashboardBalloonFeatureInfo",
            "app-configurator"
          )
        },
        {
          component: Qn,
          collectionName: "layers",
          itemName: ct.className,
          title: "sensorthings.editors.title.sensorthingsLayer",
          infoUrlCallback: C == null ? void 0 : C.getHelpUrlCallback(
            "/components/plugins/sensorthingsConfig.html#id_sensorThingsLayer",
            "app-configurator"
          )
        }
      ];
    },
    destroy() {
      C.layerClassRegistry.unregisterClass(
        this[ht],
        ct.className
      ), [
        mt.className,
        zt.className,
        It.className,
        Vt.className
      ].forEach((D) => {
        C.featureInfoClassRegistry.unregisterClass(
          this[ht],
          D
        );
      });
    },
    i18n: {
      en: {
        sensorthings: {
          from: "From",
          to: "To",
          id: "Thing ID",
          name: "Thing name",
          observedProperty: "Observed property",
          latestObservation: "Latest observation",
          limitedObservations: 'Number of observations reached limit of: {maxObservations} for "{datastream}". Only the first {maxObservations} observations are shown.',
          noObservations: "No data was found for “{datastream}” for the selected time period. Please adjust time span using input elements.",
          chart: {
            time: "Time",
            count: "Count"
          },
          dashboard: {
            openInNewTab: "Open dashboard in new tab"
          },
          editors: {
            title: {
              chart: "Sensorthings chart view - Editor",
              chartBalloon: "Sensorthings popup (balloon) chart view - Editor",
              dashboard: "Sensorthings dashboard view - Editor",
              dashboardBalloon: "Sensorthings popup (balloon) dashboard view - Editor",
              sensorthingsLayer: "SensorThings layer"
            },
            dashboard: {
              title: "Dashboard settings",
              url: "URL",
              unique: "ID must be unique",
              delete: "Delete entry",
              deleteAll: "Delete all entries",
              uploadEntries: "Upload entries from a CSV file",
              importFeedback: "Filtered {numberInvalid} row(s) due to invalid data and {numberDublicate} row(s) due to dublicates.",
              dashboardUrl: "Dashboard URL (path)",
              editQueryParams: "Edit query parameter",
              queryParams: "Query parameter",
              queryKey: "Key",
              queryValue: "Value",
              mapping: "Custom mapping of thing ID to dashboard ID",
              tableNoData: "No entries yet",
              addEntry: "Add entry"
            },
            chart: {
              title: "Chart settings",
              initialDayObservationRange: "Initial time span (days)"
            },
            csv: {
              options: "CSV import options",
              hasHeading: "Has heading",
              encoding: "Encoding",
              delimiter: "Delimiter",
              limit: "The CSV import is limited to {maximumRows} rows. All rows that exceed this limit will be ignored."
            },
            layer: {
              noData: "Provide valid URL first",
              noFilter: "No filter",
              observedPropertyFilter: "Observed property filter",
              fetchSuccess: "URL query was successful.",
              fetchFailed: "URL query failed. Please ensure that the URL is correct.",
              additionalFilters: "Additional filters"
            },
            validation: {
              isNumberGreaterZero: "Number must be greater zero.",
              validUrl: "Value must be a valid URL"
            }
          }
        }
      },
      de: {
        sensorthings: {
          from: "Von",
          to: "Bis",
          id: "Thing ID",
          name: "Name",
          observedProperty: "Beobachtetes Merkmal",
          latestObservation: "Letzte Beobachtung",
          limitedObservations: 'Anzahl der Beobachtungen erreicht Limit von: {maxObservations} für "{datastream}". Nur die ersten {maxObservations} Beobachtungen werden angezeigt.',
          noObservations: 'Für die ausgewählte Zeitspanne wurden keine Daten für "{datastream}" gefunden. Bitte passen Sie die Zeitspanne über die Eingabeelemente an.',
          chart: {
            time: "Zeit",
            count: "Anzahl"
          },
          dashboard: {
            openInNewTab: "Dashboard in neuem Tab öffnen"
          },
          editors: {
            title: {
              chart: "Sensorthings Diagramm Darstellung - Editor",
              chartBalloon: "Sensorthings Popup-Darstellung (Balloon) Diagramm - Editor",
              dashboard: "Sensorthings Dashboard Darstellung - Editor",
              dashboardBalloon: "Sensorthings Popup-Darstellung (Balloon) Dashboard - Editor",
              sensorthingsLayer: "SensorThings Ebene"
            },
            dashboard: {
              title: "Dashboard Einstellungen",
              url: "URL",
              unique: "ID muss einzigartig sein",
              delete: "Eintrag löschen",
              deleteAll: "Alle Einträge löschen",
              uploadEntries: "Einträge aus CSV Datei hochladen",
              importFeedback: "Es wurden {numberInvalid} Zeile(n) auf Grund von ungültigen Werten und {numberDublicate} Zeile(n) auf Grund von Duplikaten herausgefiltert.",
              dashboardUrl: "Dashboard URL (Pfad)",
              editQueryParams: "Abfrage Parameter bearbeiten",
              queryParams: "Abfrage Parameter",
              queryKey: "Schlüssel",
              queryValue: "Wert",
              mapping: "Manuelle Zuordnung von Thing-ID zu Dashboard-ID",
              tableNoData: "Bisher keine Einträge",
              addEntry: "Eintrag hinzufügen"
            },
            chart: {
              title: "Diagramm Einstellungen",
              initialDayObservationRange: "Initialer Zeitraum in Tagen"
            },
            csv: {
              options: "CSV Import Optionen",
              hasHeading: "Hat Überschriften",
              encoding: "Zeichencodierung",
              delimiter: "Trennzeichen",
              limit: "Der CSV Import is auf {maximumRows} Zeilen begrenzt. Alle Zeilen die dieses Limit überschreiten werden nicht importiert."
            },
            layer: {
              noData: "Erst valide URL bereistellen",
              noFilter: "Kein Filter",
              observedPropertyFilter: "Beobachtetes Merkmal Filter",
              fetchSuccess: "Test-Abfrage der URL war erfolgreich.",
              fetchFailed: "Test-Abfrage hat fehlgeschlagen. Stellen Sie sicher, dass die URL korrekt ist.",
              additionalFilters: "Zusätzliche Filter"
            },
            validation: {
              isNumberGreaterZero: "Zahl muss größer Null sein.",
              validUrl: "Wert muss eine valide URL sein"
            }
          }
        }
      }
    }
  };
}
export {
  ol as default
};
