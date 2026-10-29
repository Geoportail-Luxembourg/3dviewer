
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
} await loadCss('data:text/css;base64,LnRpdGxlLXBhcmVudFtkYXRhLXYtMjA3MTc5NGFde292ZXJmbG93OmhpZGRlbjt0ZXh0LW92ZXJmbG93OmVsbGlwc2lzO2N1cnNvcjpwb2ludGVyfS5hY3RpdmVbZGF0YS12LTIwNzE3OTRhXXtjb2xvcjpyZ2IodmFyKC0tdi10aGVtZS1wcmltYXJ5KSl9LnRpdGxlW2RhdGEtdi1iOWE4MmUxN117Zm9udC13ZWlnaHQ6NzAwO3RleHQtZGVjb3JhdGlvbjp1bmRlcmxpbmU7ZGlzcGxheTpmbGV4O2p1c3RpZnktY29udGVudDpjZW50ZXJ9LnN1YnRpdGxlW2RhdGEtdi1iOWE4MmUxN117Zm9udC1zdHlsZTppdGFsaWM7dGV4dC1hbGlnbjpjZW50ZXI7ZGlzcGxheTpibG9jaztwYWRkaW5nLWJvdHRvbToxcHg7cGFkZGluZy1sZWZ0OjRweDtwYWRkaW5nLXJpZ2h0OjRweDt3aGl0ZS1zcGFjZTpub3dyYXAhaW1wb3J0YW50O292ZXJmbG93OmhpZGRlbiFpbXBvcnRhbnQ7dGV4dC1vdmVyZmxvdzplbGxpcHNpcyFpbXBvcnRhbnR9LnNlY3Rpb25bZGF0YS12LWI5YTgyZTE3XSAuc2VjdGlvbi1jb250ZW50e2hlaWdodDpjYWxjKDEwMCUgLSAodmFyKC0tdi12Y3MtZm9udC1zaXplKSAqIDIgKyA2MnB4KSkhaW1wb3J0YW50fS5vdmVybGF5LWxlZnRbZGF0YS12LWRiMmJkY2U2XXt0b3A6MDtsZWZ0OjA7ei1pbmRleDoxMDtwb3NpdGlvbjphYnNvbHV0ZTttYXgtd2lkdGg6ODAlO2JhY2tncm91bmQtY29sb3I6cmdiKHZhcigtLXYtdGhlbWUtc3VyZmFjZSkpfS5yaWdodC1vdmVybGF5W2RhdGEtdi1kYjJiZGNlNl17dG9wOjA7cmlnaHQ6MDt6LWluZGV4Ojk7d2lkdGg6MTAwJTtoZWlnaHQ6MTAwJTtjdXJzb3I6cG9pbnRlcjtwb3NpdGlvbjphYnNvbHV0ZTtiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMCwwLDAsY2FsYyh2YXIoLS12LWRpc2FibGVkLW9wYWNpdHkpICogdmFyKC0tdi1kaXNhYmxlZC1vcGFjaXR5KSkpfS50cmVldmlld1tkYXRhLXYtNmM1YjU3ODJdIC52Y3MtYWN0aW9uLWJ1dHRvbi1saXN0e3BhZGRpbmctcmlnaHQ6OHB4IWltcG9ydGFudH0udHJlZXZpZXdbZGF0YS12LTZjNWI1NzgyXSAucHJlcGVuZDpub3QoLmxldmVsLTAgLnByZXBlbmQpe2Rpc3BsYXk6bm9uZSFpbXBvcnRhbnR9LnRyZWV2aWV3W2RhdGEtdi02YzViNTc4Ml0gLnRyZWVub2RlOmhhcyguYWN0aXZlKT5idXR0b24+c3Bhbj5pe2NvbG9yOnJnYih2YXIoLS12LXRoZW1lLXByaW1hcnkpKSFpbXBvcnRhbnR9LmZpeGVkLWJvdHRvbVtkYXRhLXYtNmM1YjU3ODJde3Bvc2l0aW9uOnN0aWNreSFpbXBvcnRhbnQ7ZmxleC1ncm93OjA7Ym90dG9tOjA7bWFyZ2luLXRvcDphdXRvO3otaW5kZXg6MTtiYWNrZ3JvdW5kLWNvbG9yOnJnYih2YXIoLS12LXRoZW1lLXN1cmZhY2UpKX0uYnV0dG9uLW1hcmdpbltkYXRhLXYtNmM1YjU3ODJde2hlaWdodDpjYWxjKDEwMCUgLSAodmFyKC0tdi12Y3MtZm9udC1zaXplKSAqIDIgKyAxNnB4KSkhaW1wb3J0YW50fVtkYXRhLXYtMDc4YTBiNTFdIC52LWxpc3R7d2lkdGg6MTAwJTtoZWlnaHQ6NDQ4cHh9W2RhdGEtdi0wNzhhMGI1MV0gLnYtcGFnaW5hdGlvbl9fbGlzdCAudi1wYWdpbmF0aW9uX19wcmV2e3Bvc2l0aW9uOmFic29sdXRlO2xlZnQ6MH1bZGF0YS12LTA3OGEwYjUxXSAudi1wYWdpbmF0aW9uX19saXN0IGxpLnYtcGFnaW5hdGlvbl9faXRlbTpudGgtY2hpbGQoMil7bWFyZ2luLWxlZnQ6YXV0byFpbXBvcnRhbnR9W2RhdGEtdi0wNzhhMGI1MV0gLnYtcGFnaW5hdGlvbl9fbGlzdCAudi1wYWdpbmF0aW9uX19pdGVtPmJ1dHRvbnt3aWR0aDpmaXQtY29udGVudDttaW4td2lkdGg6MjhweH1bZGF0YS12LTA3OGEwYjUxXSAudi1wYWdpbmF0aW9uX19saXN0IC52LXBhZ2luYXRpb25fX25leHR7bWFyZ2luLWxlZnQ6YXV0b30udHJlZXZpZXdbZGF0YS12LWI4YjEyYWI2XSAudmNzLWFjdGlvbi1idXR0b24tbGlzdHtwYWRkaW5nLXJpZ2h0OjhweCFpbXBvcnRhbnR9LnRyZWV2aWV3W2RhdGEtdi1iOGIxMmFiNl0gLnYtc3BhY2Vye2Rpc3BsYXk6bm9uZSFpbXBvcnRhbnR9W2RhdGEtdi1mOWJmN2UyOV0gLnYtZGF0YS10YWJsZV9fdGR7d29yZC1icmVhazpicmVhay1hbGx9Lm1heC1oZWlnaHRbZGF0YS12LTE1NjMzMTNjXXtoZWlnaHQ6NTMwcHh9LmRldGFpbHNbZGF0YS12LTE1NjMzMTNjXXtiYWNrZ3JvdW5kLWNvbG9yOnJnYih2YXIoLS12LXRoZW1lLW9uLXN1cmZhY2UtdmFyaWFudCkpfS5tYXgtMy1saW5lc1tkYXRhLXYtMTU2MzMxM2Nde2Rpc3BsYXk6LXdlYmtpdC1ib3g7LXdlYmtpdC1saW5lLWNsYW1wOjM7LXdlYmtpdC1ib3gtb3JpZW50OnZlcnRpY2FsO2hlaWdodDoxMDAlfVtkYXRhLXYtMTU2MzMxM2NdIC52LWNhcmQ+LnYtY2FyZC1pdGVte2hlaWdodDpjYWxjKDEwMCUgLSA0OHB4KTthbGlnbi1jb250ZW50OnN0YXJ0fVtkYXRhLXYtYTgwNzA4YWFdIC5iYWRnZXt0b3A6LTZweDtyaWdodDotNnB4fS5saXN0W2RhdGEtdi04YTI1YmNmNV0gLnYtZXhwYW5zaW9uLXBhbmVsc3toZWlnaHQ6Y2FsYygxMDAlIC0gKHZhcigtLXYtdmNzLWZvbnQtc2l6ZSkgKiAyICsgMThweCkpIWltcG9ydGFudDtvdmVyZmxvdy15OmF1dG87YWxpZ24tY29udGVudDpmbGV4LXN0YXJ0fS5saXN0W2RhdGEtdi04YTI1YmNmNV0gLnYtbGlzdC1pdGVte3BhZGRpbmctbGVmdDoyNHB4IWltcG9ydGFudH0ubGlzdFtkYXRhLXYtOGEyNWJjZjVdIC52LWxpc3QtaXRlbS52LWxpc3QtaXRlbS0tYWN0aXZle3BhZGRpbmctbGVmdDoyMHB4IWltcG9ydGFudH0ubGlzdFtkYXRhLXYtOGEyNWJjZjVdIC52LXNwYWNlcntkaXNwbGF5Om5vbmUhaW1wb3J0YW50fS5idXR0b24tbWFyZ2luW2RhdGEtdi04YTI1YmNmNV17aGVpZ2h0OmNhbGMoMTAwJSAtICh2YXIoLS12LXZjcy1mb250LXNpemUpICogMiArIDIwcHgpKSFpbXBvcnRhbnR9LmRsLWNvbnRlbnRbZGF0YS12LWE1ZWMxNjc4XXtoZWlnaHQ6Y2FsYyg1NjJweCAtIHZhcigtLXYtdmNzLWZvbnQtc2l6ZSkgKiAyIC0gNnB4KX0udmNzLWJhZGdlW2RhdGEtdi1hNWVjMTY3OF17dG9wOjRweDtyaWdodDoycHh9LnRvZ2dsZS1idXR0b25bZGF0YS12LWE1ZWMxNjc4XSAudi1pY29ue2ZvbnQtc2l6ZToyNHB4IWltcG9ydGFudH1bZGF0YS12LTg0NTE4NTZjXSAudmNzTGlzdHt3aWR0aDoxMDAlIWltcG9ydGFudH0K');import { LayerContentTreeItem as Gt, NotificationType as he, getPluginAssetUrl as kn, createEllipseTooltip as Nn, VcsLabel as me, VcsExtent as Ye, VcsFormSection as Xe, VcsTreeviewSearchbar as qt, VcsTreeview as Zt, VcsTextField as Ae, VcsSelect as Be, VcsFormButton as je, VcsCheckbox as Qe, VcsButton as xe, VcsList as Jt, VcsActionButtonList as Ht, useProxiedComplexModel as Mn, VcsDataTable as Un, VcsMarkdown as Fn, VcsSlider as Yt, VcsGroupedList as Wn, VcsBadge as Bn, VcsTextArea as jn, VcsChipArrayInput as zn, AbstractConfigEditor as Kn, createToggleAction as Gn, WindowSlot as qn, ButtonLocation as Zn, GroupContentTreeItem as Jn, TableFeatureInfoView as Hn, callSafeAction as Yn } from "../../../assets/ui.js";
import { Extent as be, GeoJSONLayer as Xt, Viewpoint as Qt, VectorStyleItem as Xn, getInitForUrl as vt, WMSLayer as Qn, wgs84Projection as xn, WMSFeatureProvider as ea, CesiumTilesetLayer as ta, TerrainLayer as na, WFSLayer as aa, WMTSLayer as ra, Projection as xt, PointCloudLayer as oa, CzmlLayer as sa, markVolatile as $t, maxZIndex as ia } from "../../../assets/core.js";
import { reactive as G, toRaw as P, defineComponent as Y, ref as T, computed as ee, openBlock as y, createElementBlock as V, normalizeClass as en, createElementVNode as j, toDisplayString as p, unref as re, createBlock as L, withCtx as s, createTextVNode as b, createCommentVNode as E, resolveComponent as m, Fragment as Pe, renderList as ze, createVNode as o, inject as le, withDirectives as la, renderSlot as Vt, vShow as ua, withKeys as tn, createSlots as nn, watch as se, nextTick as an, resolveDynamicComponent as da, onMounted as ca, onUnmounted as ma, withModifiers as fa } from "../../../assets/vue.js";
import { VTooltip as pa, VRow as H, VChip as rn, VSlideXTransition as ga, VCol as ie, VDivider as et, VFadeTransition as ya, VSpacer as va, VCardTitle as ha, VCard as Ke, VPagination as ba, VMenu as Sa, VIcon as wa, VDialog as on, VContainer as ht, VCardText as Ta, VTabsWindowItem as Aa, VTabsWindow as La, VTabs as Ca, VTab as Ea, VSheet as $a, VForm as Va } from "../../../assets/vuetify.js";
import { useDisplay as sn } from "../../../assets/vuetify.js";
import { ol$Feature as _a, ol$geom$Point as Pa, ol$style$Style as Ia, ol$format$WMSCapabilities as Ra, ol$xml$makeStructureNS as I, ol$xml$makeObjectPropertySetter as v, ol$format$xsd$readString as N, ol$xml$makeObjectPropertyPusher as Ee, ol$xml$makeArrayPusher as ue, ol$format$xlink$readHref as lt, ol$xml$pushParseAndPop as k, ol$xml$getAllTextContent as Oa, ol$format$XML as Da, ol$format$WMTSCapabilities as ka } from "../../../assets/ol.js";
const Q = {
  ERROR: 2,
  WARN: 4,
  INFO: 8,
  DEBUG: 16
}, we = {
  ERROR: 0,
  WARN: 0,
  INFO: 0,
  DEBUG: 0
};
we.ERROR = Q.ERROR | Q.WARN | Q.INFO | Q.DEBUG;
we.WARN = Q.WARN | Q.INFO | Q.DEBUG;
we.INFO = Q.INFO | Q.DEBUG;
we.DEBUG = Q.DEBUG;
const We = {
  logLevel: Q.INFO
}, Ge = /* @__PURE__ */ new Map();
Ge.set(Q.ERROR, "error");
Ge.set(Q.WARN, "warn");
Ge.set(Q.INFO, "info");
Ge.set(Q.DEBUG, "log");
class ln {
  /**
   * @param {string=} className
   */
  constructor(t) {
    this.className = t, this.deprecations = /* @__PURE__ */ new Map();
  }
  /**
   * Logs an error message
   * @param {string} msg The message to log.
   * @param {...any} optArgs
   */
  error(t, ...a) {
    We.logLevel & we.ERROR && this._log(String(t), Q.ERROR, a);
  }
  /**
   * Logs a warning message
   * @param {string} msg The message to log.
   * @param {...any} optArgs
   */
  warning(t, ...a) {
    We.logLevel & we.WARN && this._log(String(t), Q.WARN, a);
  }
  /**
   * Deprecate a function. deprecations are stored on the logger
   * @param {string} functionName
   * @param {string=} alternativeFunctionName
   */
  deprecate(t, a) {
    const n = String(t), r = a ? String(a) : null;
    if (!this.deprecations.has(n)) {
      this.deprecations.set(n, r || null);
      let u = `${n} has been deprecated and will be removed`;
      r && (u = `${u}. ${r}`), this.warning(u);
    }
  }
  /**
   * Logs an info message
   * @param {string} msg The message to log.
   * @param {...any} optArgs
   */
  info(t, ...a) {
    We.logLevel & we.INFO && this._log(String(t), Q.INFO, a);
  }
  /**
   * Logs a debug message
   * @param {string} msg The message to log.
   * @param {...any} optArgs
   */
  debug(t, ...a) {
    We.logLevel & we.DEBUG && this._log(String(t), Q.DEBUG, a);
  }
  /**
   * Alias for debug
   * @param {string} msg The message to log.
   * @param {...any} optArgs
   */
  log(t, ...a) {
    We.logLevel & we.DEBUG && this._log(String(t), Q.DEBUG, a);
  }
  /**
   * Logs a message
   * @param {string} msg The message to log.
   * @param {LOG_LEVEL} level
   * @param {Array} optArgs
   * @private
   */
  _log(t, a, n) {
    let r = t;
    this.className && (r = `[${this.className}] ${r}`), console[Ge.get(a)](r, ...n), a & Q.ERROR && (console.group(), console.trace(), console.groupEnd());
  }
}
const ut = /* @__PURE__ */ new Map();
let nt;
function Na() {
  return nt || (nt = new ln()), nt;
}
function Ma(e) {
  const t = new ln(e);
  return ut.set(e, t), t;
}
function Se(e) {
  return e ? ut.has(e) ? ut.get(e) : Ma(e) : Na();
}
const $e = {
  defaultMerge: Symbol("deepmerge-ts: default merge"),
  skip: Symbol("deepmerge-ts: skip")
};
$e.defaultMerge;
function Ua(e, t) {
  return t;
}
function Fa(e, t) {
  return e.filter((a) => a !== void 0);
}
var _t;
(function(e) {
  e[e.NOT = 0] = "NOT", e[e.RECORD = 1] = "RECORD", e[e.ARRAY = 2] = "ARRAY", e[e.SET = 3] = "SET", e[e.MAP = 4] = "MAP", e[e.OTHER = 5] = "OTHER";
})(_t || (_t = {}));
function Pt(e) {
  return typeof e != "object" || e === null ? 0 : Array.isArray(e) ? 2 : ja(e) ? 1 : e instanceof Set ? 3 : e instanceof Map ? 4 : 5;
}
function Wa(e) {
  const t = /* @__PURE__ */ new Set();
  for (const a of e)
    for (const n of [...Object.keys(a), ...Object.getOwnPropertySymbols(a)])
      t.add(n);
  return t;
}
function Ba(e, t) {
  return typeof e == "object" && Object.prototype.propertyIsEnumerable.call(e, t);
}
function un(e) {
  var n;
  let t = 0, a = (n = e[0]) == null ? void 0 : n[Symbol.iterator]();
  return {
    [Symbol.iterator]() {
      return {
        next() {
          var r;
          do {
            if (a === void 0)
              return { done: !0, value: void 0 };
            const u = a.next();
            if (u.done === !0) {
              t += 1, a = (r = e[t]) == null ? void 0 : r[Symbol.iterator]();
              continue;
            }
            return {
              done: !1,
              value: u.value
            };
          } while (!0);
        }
      };
    }
  };
}
const It = ["[object Object]", "[object Module]"];
function ja(e) {
  if (!It.includes(Object.prototype.toString.call(e)))
    return !1;
  const { constructor: t } = e;
  if (t === void 0)
    return !0;
  const a = t.prototype;
  return !(a === null || typeof a != "object" || !It.includes(Object.prototype.toString.call(a)) || !a.hasOwnProperty("isPrototypeOf"));
}
function za(e, t, a) {
  const n = {};
  for (const r of Wa(e)) {
    const u = [];
    for (const d of e)
      Ba(d, r) && u.push(d[r]);
    if (u.length === 0)
      continue;
    const i = t.metaDataUpdater(a, {
      key: r,
      parents: e
    }), l = dn(u, t, i);
    l !== $e.skip && (r === "__proto__" ? Object.defineProperty(n, r, {
      value: l,
      configurable: !0,
      enumerable: !0,
      writable: !0
    }) : n[r] = l);
  }
  return n;
}
function Ka(e) {
  return e.flat();
}
function Ga(e) {
  return new Set(un(e));
}
function qa(e) {
  return new Map(un(e));
}
function Za(e) {
  return e.at(-1);
}
const He = {
  mergeRecords: za,
  mergeArrays: Ka,
  mergeSets: Ga,
  mergeMaps: qa,
  mergeOthers: Za
};
function Ja(e, t) {
  const a = Ha(e, n);
  function n(...r) {
    return dn(r, a, t);
  }
  return n;
}
function Ha(e, t) {
  return {
    defaultMergeFunctions: He,
    mergeFunctions: {
      ...He,
      ...Object.fromEntries(Object.entries(e).filter(([a, n]) => Object.hasOwn(He, a)).map(([a, n]) => n === !1 ? [a, He.mergeOthers] : [a, n]))
    },
    metaDataUpdater: e.metaDataUpdater ?? Ua,
    deepmerge: t,
    useImplicitDefaultMerging: e.enableImplicitDefaultMerging ?? !1,
    filterValues: e.filterValues === !1 ? void 0 : e.filterValues ?? Fa,
    actions: $e
  };
}
function dn(e, t, a) {
  var u;
  const n = ((u = t.filterValues) == null ? void 0 : u.call(t, e, a)) ?? e;
  if (n.length === 0)
    return;
  if (n.length === 1)
    return at(n, t, a);
  const r = Pt(n[0]);
  if (r !== 0 && r !== 5) {
    for (let i = 1; i < n.length; i++)
      if (Pt(n[i]) !== r)
        return at(n, t, a);
  }
  switch (r) {
    case 1:
      return Ya(n, t, a);
    case 2:
      return Xa(n, t, a);
    case 3:
      return Qa(n, t, a);
    case 4:
      return xa(n, t, a);
    default:
      return at(n, t, a);
  }
}
function Ya(e, t, a) {
  const n = t.mergeFunctions.mergeRecords(e, t, a);
  return n === $e.defaultMerge || t.useImplicitDefaultMerging && n === void 0 && t.mergeFunctions.mergeRecords !== t.defaultMergeFunctions.mergeRecords ? t.defaultMergeFunctions.mergeRecords(e, t, a) : n;
}
function Xa(e, t, a) {
  const n = t.mergeFunctions.mergeArrays(e, t, a);
  return n === $e.defaultMerge || t.useImplicitDefaultMerging && n === void 0 && t.mergeFunctions.mergeArrays !== t.defaultMergeFunctions.mergeArrays ? t.defaultMergeFunctions.mergeArrays(e) : n;
}
function Qa(e, t, a) {
  const n = t.mergeFunctions.mergeSets(e, t, a);
  return n === $e.defaultMerge || t.useImplicitDefaultMerging && n === void 0 && t.mergeFunctions.mergeSets !== t.defaultMergeFunctions.mergeSets ? t.defaultMergeFunctions.mergeSets(e) : n;
}
function xa(e, t, a) {
  const n = t.mergeFunctions.mergeMaps(e, t, a);
  return n === $e.defaultMerge || t.useImplicitDefaultMerging && n === void 0 && t.mergeFunctions.mergeMaps !== t.defaultMergeFunctions.mergeMaps ? t.defaultMergeFunctions.mergeMaps(e) : n;
}
function at(e, t, a) {
  const n = t.mergeFunctions.mergeOthers(e, t, a);
  return n === $e.defaultMerge || t.useImplicitDefaultMerging && n === void 0 && t.mergeFunctions.mergeOthers !== t.defaultMergeFunctions.mergeOthers ? t.defaultMergeFunctions.mergeOthers(e) : n;
}
const U = "@vcmap/dynamic-layer", er = "3.0.0", tr = "^6.3", nr = {
  title: "Kartendaten erkunden",
  contentTreeTitle: "Dynamisch geladene Ebenen",
  configEditorTitle: "Dynamisch geladene Ebenen Editor",
  common: {
    description: "Beschreibung",
    format: "Format",
    filter: "Filtern",
    layers: "Ebenen",
    more: "weitere",
    show: "Zeige",
    theLayer: "Die Ebene",
    title: "Titel",
    type: "Typ"
  },
  webdata: {
    title: "Web-Daten",
    type: {
      WFSLayer: "Web Feature Service (WFS)",
      WMSLayer: "Web Map Service (WMS)",
      WMTSLayer: "Web Map Tile Service (WMTS)",
      CesiumTilesetLayer: "Cesium 3D Tiles",
      CzmlLayer: "CZML",
      GeoJSONLayer: "GeoJSON",
      PointCloudLayer: "Cesium Pointcloud",
      TerrainLayer: "Cesium Terrain"
    },
    add: {
      title: "Hinzufügen einer neuen Webdatenquelle per URL",
      type: "Wählen Sie den Typ der Webdatenquelle",
      url: "Geben Sie die URL des Webdienstes ein",
      useAuthentication: "Authentifizierung verwenden",
      authentication: "Authentifizierung"
    }
  },
  catalogues: {
    title: "Kataloge",
    searchAmong: "Suche in den",
    datasets: " Datensätze",
    noDescription: "Keine Beschreibung verfügbar",
    type: {
      piveau: "Piveau",
      geonetwork: "GeoNetwork",
      idra: "Idra",
      nbsRegistry: "NBS Registry"
    },
    noDistributionAvailable: "Für diesen Datensatz ist keine Bereitstellung verfügbar.",
    chooseLayersToAdd: "Unter dieser Adresse sind mehrere Ebenen verfügbar. Bitte fügen Sie die gewünschten Ebenen hinzu, indem Sie auf + klicken.",
    selectedDistributionName: "Der Name der ausgewählten Bereitstellung lautet:",
    defaultMarkdownDescription: `# Wie benutzt man den Katalogbereich dieses Plugins?
## Auswahl eines Datensatzes:
Um einen bestimmten Datensatz zu finden, stehen Ihnen verschiedene Optionen zur Verfügung:
- Mit der Suchleiste können Sie die Datensätze nach Text filtern;
- Mit der Schaltfläche „Sortieren“ können Sie die Reihenfolge wählen, in der die Datensätze angezeigt werden (nach Relevanz, Name, Erstellungs- oder Änderungsdatum);
- Mit der Schaltfläche „Filtern“ können Sie die Datensätze nach den im Katalog verfügbaren Optionen filtern (z. B. Kategorie, Format, ...).

Wenn Sie den gewünschten Datensatz gefunden haben, wählen Sie ihn in der Liste auf der linken Seite aus, um seine Informationen anzuzeigen.
## Fügen Sie der Karte die Verteilung eines Datensatzes hinzu:
Ein Datensatz aus einem Katalog kann die folgenden Informationen enthalten: eine Liste von Schlüsselwörtern und eine Beschreibung (die bei Bedarf eingeklappt werden kann) sowie eine Liste der Verteilungen. Die Liste der Verteilungen zeigt alle Verteilungen in Bezug auf einen Datensatz an. In der Datentabelle kann jede Verteilung erweitert werden, um weitere Details zu erhalten. Dabei kann es sich um einen Bezeichner, eine Beschreibung und Schaltflächen für den Zugriff und das Herunterladen der Daten handeln. Wenn eine Verteilung in einem Format vorliegt, das auf der Karte angezeigt werden kann und vom Plugin unterstützt wird, wird eine Schaltfläche „Zur Karte hinzufügen“ angezeigt. Die folgenden Datenformate werden unterstützt und können der Karte hinzugefügt werden:

- [3D Tiles](https://www.ogc.org/standard/3dtiles/)
- [Cesium PointCloud](https://cesium.com/platform/cesium-ion/3d-tiling-pipeline/point-clouds/)
- [Cesium Terrain](https://cesium.com/learn/cesiumjs-learn/cesiumjs-terrain/)
- [CZML](https://github.com/AnalyticalGraphicsInc/czml-writer/wiki/CZML-Guide)
- [GeoJSON](https://www.ogc.org/standard/eo-geojson/)
- [Web Feature Service (WFS)](https://www.ogc.org/standard/wfs/)
- [Web Map Service (WMS)](https://www.ogc.org/standard/wms/)
- [Web Map Tile Service (WMTS)](https://www.ogc.org/standard/wmts/)

Wenn eine Verteilung zur Karte hinzugefügt wird:
- eine Benachrichtigung bestätigt das Hinzufügen;
- Sie wird auf der Tab Hinzugefügte Daten aufgeführt, wo ihre Parameter geändert werden können;
- und es wird ein Ebeneneintrag in den Karteninhaltsbaum eingefügt, um sie zu aktivieren/deaktivieren.

Wenn die hinzugefügten Daten aus Unterdaten bestehen (z. B. ein WMS-Server mit mehreren Ebenen), öffnet sich ein neues Fenster zur Auswahl der gewünschten Ebene.`,
    sortBy: {
      relevance: "Relevanz",
      nameAsc: "Name A-Z",
      nameDesc: "Name Z-A",
      lastCreated: "Zuletzt erstellt",
      lastModified: "Zuletzt aktualisiert",
      rating: "Bewertung",
      popularity: "Beliebtheit",
      lowScaleFirst: "Niedrige Skala zuerst",
      highScaleFirst: "Hohe Skala zuerst"
    }
  },
  added: {
    title: "Hinzugefügte Daten",
    selectToEdit: "Wählen Sie einen Datensatz in der linken Spalte aus, um seine Parameter zu ändern.",
    actions: {
      selectAll: "Alle auswählen",
      clearSelection: "Auswahl aufheben",
      removeSelection: "Auswahl entfernen",
      removeSelectionTitle: "Auswahl von der Karte entfernen"
    }
  },
  info: {
    title: "Informationen",
    accessConstraints: "Informationen über Zugangsbeschränkungen",
    attributions: "Urheberrechte",
    catalogueSource: "Quellkatalog",
    created: "Erstellung",
    contact: "Kontakt",
    distributions: "Bereitstellungen",
    extent: "Ausdehnung",
    fees: "Gebühren",
    license: "Lizenz",
    modified: "Änderungsdatum",
    owner: "Eigentümer",
    publisher: "Herausgeber",
    source: "Quelle",
    website: "Website",
    noInfoFor: "Keine anzuzeigenden Informationen für",
    successfullyAdded: "wurde erfolgreich hinzugefügt! Bearbeiten Sie ihre Einstellungen auf der Registerkarte Hinzugefügte Daten."
  },
  parameters: {
    title: "Parameter",
    epsg: "EPSG-Code",
    featureInfo: "Objektinformationen",
    featureNS: "Feature-Namensraum",
    featurePrefix: "Feature-Präfix",
    featureType: "Feature-Typ",
    opacity: "Deckkraft",
    numberLevelZeroTiles: "Anzahl der LevelZeroTiles",
    pointSize: "Punktgröße",
    proj4: "Proj4-Definition",
    requestVertexNormals: "Vertex-Normalen anfordern",
    requestWaterMask: "Wassermaske anfordern",
    screenSpaceError: "ScreenSpaceError",
    style: "Darstellungsstil",
    tileMatrixPrefix: "TileMatrixPrefix",
    tileMatrixSetID: "TileMatrixSetID",
    tileSize: "Kachelgröße",
    tilingSchema: "Kachelschema",
    transparency: "Hintergrundtransparenz",
    zoomLevels: "Zoomstufen",
    saveHint: "Verwenden Sie die Schaltflächen in der oberen Kopfzeile, um Ihre Änderungen zu speichern oder zu verwerfen."
  },
  actions: {
    add: "Zur Karte hinzufügen",
    apply: "Anwenden",
    access: "Zugang",
    cancel: "Abbrechen",
    collapse: "Einklappen",
    download: "Herunterladen",
    edit: "Einstellungen bearbeiten",
    expand: "Erweitern",
    open: "Öffnen",
    overview: "Übersicht",
    remove: "Entfernen",
    rename: "Umbenennen",
    toggleDatasetList: "Toggle dataset list",
    zoomToExtent: "Zoom zur Ausdehnung",
    filter: {
      showAddedOnly: "Nur hinzugefügte Ebenen anzeigen",
      reset: "Filter zurücksetzen"
    },
    layer: {
      add: "Ebene zur Karte hinzufügen",
      addAll: "Alle verschachtelten Ebenen hinzufügen",
      remove: "Aus der Karte entfernen",
      removeAll: "Alle verschachtelten Ebenen entfernen"
    },
    source: {
      add: "Webdatenquelle hinzufügen",
      addNew: "Neue Quelle hinzufügen",
      delete: "Quelle löschen"
    }
  },
  errors: {
    addingLayer: "Ein Fehler aufgetreten beim Hinzufügen der Ebene",
    alreadyAdded: "ist bereits hinzugefügt worden!",
    invalidUrl: "Diese URL ist nicht gültig!",
    invalidJson: "Das bereitgestellte JSON ist ungültig!",
    invalidAuthentication: "Die bereitgestellte Authentifizierung ist ungültig! Es muss sich um ein gültiges JSON-Objekt handeln.",
    fetchingCatalogue: "Es ist ein Fehler beim Abrufen des Katalogs unter",
    fetchingDatasetDetails: "Beim Abrufen der Datensatzdetails ist ein Fehler aufgetreten",
    fetchingSource: "Beim Abrufen der Quelle ist ein Fehler aufgetreten.",
    layerCreation: "Beim Erstellen der Ebene ist ein Fehler aufgetreten.",
    noActiveCategory: "Plugin-Konfiguration lässt die Verwendung nicht zu: Es ist keine Kategorie aktiviert.",
    noData: "Es wurden noch keine Daten hinzugefügt!",
    unablePreloadCatalogue: "Der Katalog kann nicht vorgeladen werden bei",
    urlAlreadyAdded: "Diese URL ist bereits hinzugefügt worden!"
  },
  config: {
    general: "Allgemeine Einstellungen",
    defaultTab: "Standardregisterkarte",
    enabledTabs: "Aktivierte Tabs",
    defaultType: "Standardtyp",
    defaultUrl: "Standard-URL",
    defaultSorting: "Standard-Sortierung",
    itemsPerPage: "Elemente pro Seite",
    presets: "Voreinstellungen für Kataloge",
    addPreset: "Einen Katalog hinzufügen",
    subtitle: "Untertitel",
    logo: "Logo",
    filter: "Filter",
    aggregationKeys: "Aggregationsschlüssel"
  }
}, ar = {
  dynamicLayer: nr
}, rr = {
  title: "Explore map data",
  contentTreeTitle: "Dynamically loaded layers",
  configEditorTitle: "Dynamic Layer Editor",
  common: {
    description: "Description",
    filter: "Filter",
    format: "Format",
    layers: "layers",
    more: "more",
    show: "Show",
    theLayer: "The layer",
    title: "Title",
    type: "Type"
  },
  webdata: {
    title: "Web Data",
    type: {
      WFSLayer: "Web Feature Service (WFS)",
      WMSLayer: "Web Map Service (WMS)",
      WMTSLayer: "Web Map Tile Service (WMTS)",
      CesiumTilesetLayer: "Cesium 3D Tiles",
      CzmlLayer: "CZML",
      GeoJSONLayer: "GeoJSON",
      PointCloudLayer: "Cesium Pointcloud",
      TerrainLayer: "Cesium Terrain"
    },
    add: {
      title: "Add a new web data source to map by URL",
      type: "Select the web data source type",
      url: "Enter the web service URL",
      useAuthentication: "Use authentication",
      authentication: "Authentication"
    }
  },
  catalogues: {
    title: "Catalogues",
    searchAmong: "Search among",
    datasets: "datasets",
    noDescription: "No description available",
    type: {
      piveau: "Piveau",
      geonetwork: "GeoNetwork",
      idra: "Idra",
      nbsRegistry: "NBS Registry"
    },
    nbsAddedToMap: "The selected NBS has been added to the map.",
    noDistributionAvailable: "No distribution available for this dataset.",
    chooseLayersToAdd: "Several layers are available at this address. Please add the desired layers by clicking on +.",
    selectedDistributionName: "The name of the selected distribution is:",
    defaultMarkdownDescription: `# How to use the catalogue section of this plugin?
## Selection of a dataset:
There are several ways to find a specific dataset:
- the search bar allows you to filter datasets by text;
- the sort button allows you to choose the order in which datasets are displayed (by relevance, name, creation or modification date);
- the filter button allows you to filter datasets according to the options provided by the catalogue (e.g. category, format, ...).

Once you've found the dataset you're looking for, select it from the list on the left to display its information.
## Add a dataset distribution to the map:
A dataset from a catalogue can conatain the following information: a list of keywords and a description (which can be collapsed if necessary), and a list of distributions. The distribution list shows all distributions related to a dataset. In the data table, each distribution can be expanded to obtain more details. This can include: an identifier, a description, and buttons for accessing and downloading the data. When a distribution is in a format that can be displayed on the map and is supported by the plugin, an “Add to map” button is displayed. The following data formats are supported and can be added to the Map:

- [3D Tiles](https://www.ogc.org/standard/3dtiles/)
- [Cesium PointCloud](https://cesium.com/platform/cesium-ion/3d-tiling-pipeline/point-clouds/)
- [Cesium Terrain](https://cesium.com/learn/cesiumjs-learn/cesiumjs-terrain/)
- [CZML](https://github.com/AnalyticalGraphicsInc/czml-writer/wiki/CZML-Guide)
- [GeoJSON](https://www.ogc.org/standard/eo-geojson/)
- [Web Feature Service (WFS)](https://www.ogc.org/standard/wfs/)
- [Web Map Service (WMS)](https://www.ogc.org/standard/wms/)
- [Web Map Tile Service (WMTS)](https://www.ogc.org/standard/wmts/)

When a distribution is added to the map:
- a notification confirms its addition;
- it is listed in the  \`Added Data\`  tab where its parameters can be modified;
- and a layer entry is added to the map content tree, to enable/disable it.

If the added data consists of sub-data (e.g. a WMS server with several layers), a new window opens to select the desired layer.`,
    sortBy: {
      relevance: "Relevance",
      nameAsc: "Name ascensing",
      nameDesc: "Name descending",
      lastCreated: "Last created",
      lastModified: "Last modified",
      rating: "Rating",
      popularity: "Popularity",
      lowScaleFirst: "Low scale first",
      highScaleFirst: "High scale first"
    }
  },
  added: {
    title: "Added Data",
    selectToEdit: "Select a dataset in the left-hand column to modify its parameters.",
    actions: {
      selectAll: "Select all",
      clearSelection: "Clear selection",
      removeSelection: "Remove selection",
      removeSelectionTitle: "Remove selection from the map"
    }
  },
  info: {
    title: "Information",
    accessConstraints: "Access constraints information",
    attributions: "Attributions",
    catalogueSource: "Catalogue source",
    created: "Created",
    contact: "Contact",
    distributions: "Distributions",
    extent: "Extent",
    fees: "Fees",
    license: "License",
    modified: "Modified",
    owner: "Owner",
    publisher: "Publisher",
    source: "Source",
    website: "Website",
    noInfoFor: "No information to be displayed for",
    successfullyAdded: "has successfully been added! Edit its parameters from the Added Data tab."
  },
  parameters: {
    title: "Parameters",
    epsg: "EPSG code",
    featureInfo: "Feature info",
    featureNS: "Feature Namespace",
    featurePrefix: "Feature Prefix",
    featureType: "Feature Type",
    opacity: "Opacity",
    numberLevelZeroTiles: "Number of LevelZeroTiles",
    pointSize: "Point size",
    proj4: "Proj4 definition",
    requestVertexNormals: "Request Vertex Normals",
    requestWaterMask: "Request Water Mask",
    screenSpaceError: "ScreenSpaceError",
    style: "Style",
    tileMatrixPrefix: "TileMatrixPrefix",
    tileMatrixSetID: "TileMatrixSetID",
    tileSize: "Tile size",
    tilingSchema: "Tiling scheme",
    transparency: "Background transparency",
    zoomLevels: "Zoom Levels",
    saveHint: "Use the buttons in the above header to save or discard your changes."
  },
  actions: {
    add: "Add to Map",
    apply: "Apply",
    access: "Access",
    cancel: "Cancel",
    collapse: "Collapse",
    download: "Download",
    edit: "Edit parameters",
    expand: "Expand",
    open: "Open",
    overview: "Overview",
    remove: "Remove",
    toggleDatasetList: "Toggle dataset list",
    zoomToExtent: "Zoom to extent",
    filter: {
      showAddedOnly: "Show only added layers",
      reset: "Reset filter"
    },
    layer: {
      add: "Add layer to map",
      addAll: "Add all nested layers",
      remove: "Remove from map",
      removeAll: "Remove all nested layers"
    },
    source: {
      add: "Add source",
      addNew: "Add a new source",
      delete: "Delete source"
    }
  },
  errors: {
    addingLayer: "An error occurred when adding the layer",
    alreadyAdded: "has already been added!",
    invalidUrl: "This URL is invalid!",
    invalidJson: "The provided JSON is invalid!",
    invalidAuthentication: "The provided authentication is invalid! It must be a valid JSON object.",
    fetchingCatalogue: "An error occurred while fetching the catalogue at",
    fetchingDatasetDetails: "An error occurred while fetching the dataset details",
    fetchingSource: "An error occurred while fetching the source.",
    layerCreation: "An error occurred while creating the layer.",
    noActiveCategory: "plugin configuration does not allow its use: no category is activated.",
    noData: "No data has yet been added!",
    unablePreloadCatalogue: "Unable to preload the catalogue at",
    urlAlreadyAdded: "This URL has already been added!"
  },
  config: {
    general: "General settings",
    defaultTab: "Default tab",
    enabledTabs: "Enabled tabs",
    defaultType: "Default type",
    defaultUrl: "Default URL",
    defaultSorting: "Default sorting",
    itemsPerPage: "Items per page",
    presets: "Presets catalogues",
    addPreset: "Add a catalogue",
    subtitle: "Subtitle",
    logo: "Logo",
    filter: "Filter",
    aggregationKeys: "Aggregation keys"
  }
}, or = {
  dynamicLayer: rr
};
var W = /* @__PURE__ */ ((e) => (e.WEBDATA = "webdata", e.CATALOGUES = "catalogues", e.ADDED = "added", e))(W || {}), $ = /* @__PURE__ */ ((e) => (e.CESIUM_TILESET = "CesiumTilesetLayer", e.POINTCLOUD = "PointCloudLayer", e.TERRAIN = "TerrainLayer", e.CZML = "CzmlLayer", e.GEOJSON = "GeoJSONLayer", e.WFS = "WFSLayer", e.WMS = "WMSLayer", e.WMTS = "WMTSLayer", e))($ || {});
function sr(e, t) {
  const a = (n, r) => {
    if (t(r))
      return n.push(r), n;
    if (r.children.length) {
      const u = r.children.reduce(a, []);
      if (u.length) {
        const i = { ...r };
        i.children = u, n.push(i);
      }
    }
    return n;
  };
  return e.reduce(a, []);
}
function Ue(e, t) {
  function a(n) {
    n.forEach((r) => {
      e(r), r.children.length && a(r.children);
    });
  }
  a([t]);
}
function ir(e, t) {
  const a = e.plugins.getByKey(U);
  let n;
  return a.webdata.added.value.forEach((r) => {
    n || Ue((u) => {
      n || u.children.find((i) => i.name === t.name) && (n = u);
    }, r);
  }), n;
}
function bt(e, t) {
  const a = e.plugins.getByKey(U);
  let n = 1;
  const r = () => !!e.layers.getByKey(`${t}-${n}`) || !!a.webdata.added.value.find(
    (u) => u.name === `${t}-${n}`
  );
  for (; r(); )
    n += 1;
  return `${t}-${n}`;
}
function St(e, t) {
  var i;
  const a = ["REQUEST", "SERVICE", "VERSION"], n = (i = e.split("?")[1]) == null ? void 0 : i.split("&"), r = n ? Object.fromEntries(
    n.map((l) => l.split("=")).map(([l, d]) => [
      a.includes(l.toUpperCase()) ? l.toUpperCase() : l,
      d
    ])
  ) : {}, u = { ...r };
  return a.forEach((l) => {
    delete u[l];
  }), r.SERVICE = t, r.REQUEST = "GetCapabilities", {
    parameters: Object.entries(r).map((l) => l.join("=")).join("&"),
    optionalParameters: u
  };
}
function cn(e, t) {
  const a = new URL(e);
  return t && Object.entries(t).length && Object.entries(t).forEach(([n, r]) => {
    a.searchParams.append(n, r);
  }), a.toString();
}
function wt(e) {
  return be.validateOptions(e.toJSON()) ? (e.extent[0] < -180 && (e.extent[0] = -180), e.extent[1] < -90 && (e.extent[1] = -90), e.extent[2] > 180 && (e.extent[2] = 180), e.extent[3] > 90 && (e.extent[3] = 90), e) : new be({
    coordinates: be.WGS_84_EXTENT,
    projection: { epsg: 4326 }
  });
}
function De(e, t) {
  switch (t) {
    case $.TERRAIN:
      return e.split("/layer.json")[0];
    case $.WFS:
    case $.WMS:
    case $.WMTS:
      return e.split("?")[0];
    // 3D Tiles URL does not need to be parsed.
    default:
      return e;
  }
}
function mn(e) {
  return [$.WFS, $.WMS, $.WMTS].includes(
    e.type
  );
}
const lr = Symbol("isMatcher"), ur = Symbol("Integer"), dr = Symbol("NonEmptyString"), Tt = /* @__PURE__ */ new Map();
[
  [String, "string"],
  [Number, "number"],
  [Boolean, "boolean"],
  [Function, "function"],
  [void 0, "undefined"],
  [Symbol, "symbol"]
].forEach(([e, t]) => {
  Tt.set(e, t);
});
function cr(e) {
  return e == null ? void 0 : e[lr];
}
function dt(e) {
  if (!e || String(e) !== "[object Object]")
    return !1;
  const t = Object.getPrototypeOf(e);
  if (!t)
    return !0;
  const n = {}.hasOwnProperty.call(t, "constructor") && t.constructor;
  return typeof n == "function" && String(n) === String(Object);
}
function ve(e, t) {
  if (e === null)
    return "null";
  if (typeof e > "u")
    return "undefined";
  if (t)
    return typeof e;
  let a;
  if (Array.isArray(e))
    a = `[${e.map((r) => ve(r, t)).join(",")}]`;
  else
    try {
      a = JSON.stringify(e);
    } catch {
      a = typeof e;
    }
  return a = a || typeof e, a.length > 20 ? `${a.substring(0, 20)}...` : a;
}
function mr(e, t) {
  return typeof t == "string" || typeof t == "number" || typeof t == "boolean" || typeof t == "symbol" ? e === t ? !1 : `Expected ${ve(e)} to equal ${t.toString()}` : null;
}
function fr(e, t, a) {
  if (Array.isArray(t)) {
    if (t.length !== 1)
      throw new Error("Array patterns may only have one type");
    if (Array.isArray(e)) {
      let n = !1;
      return e.findIndex((u) => (n = a(u, t[0]), n)) > -1 ? `${String(n)} in ${ve(e)}` : !1;
    }
    return `Expected ${ve(e)} to be an Array`;
  }
  return null;
}
function ct(e, t, a, n) {
  const r = n ? `${n}.` : "";
  if (!dt(e))
    return `Expected ${ve(e)} to be a plain Object`;
  let i = !1;
  const l = Object.keys(t).find((d) => {
    const c = e[d];
    return dt(t[d]) ? i = ct(c, t[d], a, r + d) : i = a(c, t[d]), i;
  });
  return l ? `${String(i)} in object.${r}${l}` : !1;
}
function pr(e, t) {
  if (t === Number)
    return Number.isFinite(e) ? !1 : `expected ${ve(e)} to be a number, excluding NaN`;
  if (t === ur)
    return Number.isInteger(e) ? !1 : `expected ${ve(e)} to be an integer number`;
  if (t === dr)
    return typeof e == "string" && e.length > 0 ? !1 : `expected ${ve(e)} to be a non-empty string`;
  const a = Tt.get(t);
  return a ? typeof e === a ? !1 : `expected ${ve(e)} to be a ${String(a)}` : null;
}
function fn(e) {
  if (e === null)
    return "null";
  const t = Tt.get(e);
  if (t)
    return t;
  const a = e == null ? void 0 : e.className;
  if (a)
    return a;
  let n = String(e);
  const r = n.match(/function (.*)\(/);
  if (r && r.length > 1) {
    const u = e == null ? void 0 : e.name;
    return u || r[1].substring(0, 20);
  }
  if (dt(e)) {
    const u = {};
    Object.keys(e).forEach((i) => {
      u[i] = fn(e[i]);
    });
    try {
      n = `Object of ${JSON.stringify(u)}`;
    } catch {
      n = "Object";
    }
  }
  return n;
}
function gr(e, t) {
  const a = (n, r) => {
    if (cr(r))
      return r(n);
    if (r == null)
      return n === r ? !1 : `Expected ${ve(n)} to be ${String(r)}`;
    const u = pr(n, r);
    if (u !== null)
      return u;
    const i = mr(n, r);
    if (i !== null)
      return i;
    if (Array.isArray(r))
      return fr(n, r, a);
    if (r === Object)
      return ct(n, {}, a);
    if (r instanceof Function)
      return n instanceof r ? !1 : `Expected ${ve(n, !0)} to be of Type ${fn(r)}`;
    if (typeof r == "object") {
      const l = ct(n, r, a);
      return l || !1;
    }
    throw new Error(`Cannot handle pattern ${String(r)}`);
  };
  return a(e, t);
}
let yr = Error;
function vr(e, t) {
  const a = gr(e, t);
  if (a)
    throw new yr(`Match failed: ${a}`);
}
const oe = [];
for (let e = 0; e < 256; ++e)
  oe.push((e + 256).toString(16).slice(1));
function hr(e, t = 0) {
  return (oe[e[t + 0]] + oe[e[t + 1]] + oe[e[t + 2]] + oe[e[t + 3]] + "-" + oe[e[t + 4]] + oe[e[t + 5]] + "-" + oe[e[t + 6]] + oe[e[t + 7]] + "-" + oe[e[t + 8]] + oe[e[t + 9]] + "-" + oe[e[t + 10]] + oe[e[t + 11]] + oe[e[t + 12]] + oe[e[t + 13]] + oe[e[t + 14]] + oe[e[t + 15]]).toLowerCase();
}
let rt;
const br = new Uint8Array(16);
function Sr() {
  if (!rt) {
    if (typeof crypto > "u" || !crypto.getRandomValues)
      throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
    rt = crypto.getRandomValues.bind(crypto);
  }
  return rt(br);
}
const wr = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto), Rt = { randomUUID: wr };
function Tr(e, t, a) {
  var r;
  if (Rt.randomUUID && !e)
    return Rt.randomUUID();
  e = e || {};
  const n = e.random ?? ((r = e.rng) == null ? void 0 : r.call(e)) ?? Sr();
  if (n.length < 16)
    throw new Error("Random bytes length must be >= 16");
  return n[6] = n[6] & 15 | 64, n[8] = n[8] & 63 | 128, hr(n);
}
var qe = /* @__PURE__ */ ((e) => (e.relevance = "relevance", e.rating = "rating", e.popularity = "popularity", e.lastModified = "dateStamp", e.lastCreated = "createDate", e.nameAsc = "resourceTitleObject.default.sort", e))(qe || {});
function Ar(e) {
  var a;
  const t = At(e.urlObject.default);
  return {
    id: e.hash || Tr(),
    title: e.hash,
    description: (a = e.descriptionObject) == null ? void 0 : a.default,
    type: t,
    [t ? "accessUrl" : "downloadUrl"]: e.urlObject.default,
    format: e.mimeType || (t == null ? void 0 : t.slice(0, -5))
  };
}
function mt(e) {
  var r, u, i, l, d, c, g, f, w, h;
  const t = {
    id: e._id,
    title: (r = e._source.resourceTitleObject) == null ? void 0 : r.default,
    description: (u = e._source.resourceAbstractObject) == null ? void 0 : u.default
  };
  (d = (l = (i = e._source.contactForResource) == null ? void 0 : i[0]) == null ? void 0 : l.organisationObject) != null && d.default && (t.source = {
    title: (c = e._source.contactForResource[0].organisationObject) == null ? void 0 : c.default,
    ...e._source.contactForResource[0].website ? { url: e._source.contactForResource[0].website } : {}
  }), e._source.recordOwner && (t.owner = {
    title: e._source.recordOwner
  });
  const a = (g = e._source.resourceDate) == null ? void 0 : g.find(
    (S) => S.type === "creation"
  );
  a && (t.created = new Date(a.date).toDateString());
  const n = (f = e._source.resourceDate) == null ? void 0 : f.find(
    (S) => S.type === "revision"
  );
  return n && n !== a && (t.modified = new Date(n.date).toDateString()), ((w = e._source.tag) == null ? void 0 : w.length) > 0 && (t.keywords = e._source.tag.map((S) => S.default)), ((h = e._source.link) == null ? void 0 : h.length) > 0 && (t.distributions = (Array.isArray(e._source.link) ? e._source.link : [e._source.link]).map(Ar)), t;
}
function Lr(e) {
  const t = e.aggregations ? Object.entries(e.aggregations).map(([n, r]) => ({
    id: n,
    title: Sn(n),
    values: (r.buckets || []).map((u) => ({
      id: u.key,
      title: `${u.key} (${u.doc_count})`
    }))
  })).filter((n) => n.values.length > 0) : [], a = Array.isArray(e.hits.hits) ? e.hits.hits.map(mt) : [mt(e.hits.hits)];
  return { count: e.hits.total.value, datasets: a, facets: t };
}
const ft = [
  "resourceType",
  "inspireTheme",
  "cl_topic",
  "format",
  "organisationNameObject",
  "groupOwner"
];
function Cr(e = ft) {
  return Object.fromEntries(
    e.map((t) => [t, { terms: { field: t } }])
  );
}
async function Er(e) {
  const t = Te(e.url, x.GEONETWORK), a = qe[e.sortBy] ?? "relevance", r = {
    sort: a === "relevance" ? ["_score"] : [
      {
        [a]: {
          order: a === "resourceTitleObject.default.sort" ? "asc" : "desc"
        }
      },
      "_score"
    ],
    track_total_hits: !0,
    from: e.itemsPerPage * e.page,
    size: e.itemsPerPage,
    aggregations: Cr(e.aggregationKeys),
    query: {
      bool: {
        must: e.query ? [{ query_string: { query: e.query } }] : [],
        filter: [
          ...Object.entries({
            ...e.facets,
            ...e.filter ?? {}
          }).map(([i, l]) => ({
            term: { [i]: l }
          }))
        ]
      }
    }
  }, u = {
    method: "POST",
    signal: AbortSignal.timeout(3e4),
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    body: JSON.stringify(r)
  };
  return fetch(t, u).then((i) => {
    if (!i.ok)
      throw new Error(
        `GeoNetwork API error: ${i.status} ${i.statusText}`
      );
    return i.json();
  }).then((i) => Lr(i));
}
async function $r(e, t) {
  const a = Te(e, x.GEONETWORK), n = {
    query: {
      bool: {
        must: [{ multi_match: { fields: ["id", "uuid"], query: t } }]
      }
    }
  }, r = {
    method: "POST",
    signal: AbortSignal.timeout(3e4),
    body: JSON.stringify(n),
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    }
  };
  return fetch(a, r).then((u) => {
    if (!u.ok)
      throw new Error(
        `GeoNetwork API error: ${u.status} ${u.statusText}`
      );
    return u.json();
  }).then(
    (u) => mt(u.hits.hits[0])
  );
}
var Ce = /* @__PURE__ */ ((e) => (e.relevance = "relevance+desc", e.nameAsc = "title.$locale$+asc", e.nameDesc = "title.$locale$+desc", e.lastModified = "modified+desc", e.lastCreated = "issued+desc", e))(Ce || {});
function Vr(e, t) {
  var n, r, u, i;
  const a = {
    id: e.id,
    title: Oe(e.title, t) || e.id,
    description: Oe(e.description, t),
    type: At(((n = e.format) == null ? void 0 : n.label) ?? ((r = e.format) == null ? void 0 : r.id)),
    ...e.issued && { created: new Date(e.issued).toDateString() },
    ...e.modified && { modified: new Date(e.modified).toDateString() },
    ...e.format && { format: e.format.label ?? e.format.id },
    ...e.license && { license: e.license.label ?? e.license.id }
  };
  return (u = e.access_url) != null && u[0] && (a.accessUrl = e.access_url[0]), (i = e.download_url) != null && i[0] && (a.downloadUrl = e.download_url[0]), a;
}
function pn(e, t) {
  var a, n, r, u;
  return {
    id: e.id,
    title: Oe(e.title, t),
    description: Oe(e.description, t),
    ...((a = e.publisher) == null ? void 0 : a.name) && {
      publisher: { title: e.publisher.name, url: (n = e.publisher) == null ? void 0 : n.resource }
    },
    ...e.issued && { created: new Date(e.issued).toDateString() },
    ...e.modified && { modified: new Date(e.modified).toDateString() },
    keywords: (r = e.keywords) == null ? void 0 : r.map(
      (i) => Oe(i.title, t) || i.label
    ),
    distributions: (u = e.distributions) == null ? void 0 : u.map(
      (i) => Vr(i, t)
    )
  };
}
function _r(e, t) {
  var a;
  return {
    count: e.result.count,
    datasets: e.result.results.map((n) => pn(n, t)),
    facets: ((a = e.result.facets) == null ? void 0 : a.filter((n) => n.items.length > 0).map((n) => ({
      id: n.id,
      title: n.title,
      values: n.items.map((r) => ({
        id: r.id,
        title: `${Oe(r.title, t)} (${r.count})`
      }))
    }))) ?? []
  };
}
async function Pr(e) {
  const t = Te(e.url, x.PIVEAU);
  t.pathname = `${t.pathname}/search`;
  const a = {
    method: "GET",
    headers: { accept: "application/json" },
    signal: AbortSignal.timeout(3e4)
  }, n = Object.keys(Ce).includes(e.sortBy) ? Ce[e.sortBy].replace("$locale$", e.locale) : "relevance+desc";
  return e.filter && Object.entries(e.filter).forEach(([r, u]) => {
    t.searchParams.append(r, u);
  }), t.searchParams.append("q", e.query), t.searchParams.append("sort", n), t.searchParams.append("page", e.page.toString()), t.searchParams.append("limit", e.itemsPerPage.toString()), t.searchParams.append("facets", JSON.stringify(e.facets)), fetch(t, a).then((r) => r.json()).then((r) => _r(r, e.locale));
}
async function Ir(e, t, a) {
  const n = Te(e, x.PIVEAU);
  n.pathname = `${n.pathname}/dataset/${t}`;
  const r = {
    method: "GET",
    headers: { accept: "application/json" },
    signal: AbortSignal.timeout(5e3)
  };
  return fetch(n, r).then((u) => u.json()).then(
    (u) => pn(u.result, a)
  );
}
var Ze = /* @__PURE__ */ ((e) => (e.nameAsc = "nameAsc", e.nameDesc = "nameDesc", e.lastModified = "lastModified", e.lastCreated = "lastCreated", e))(Ze || {});
function Rr(e) {
  const t = {
    id: e.id,
    title: e.title,
    description: e.description,
    type: At(e.format),
    format: e.format,
    ...e.releaseDate && {
      created: new Date(e.releaseDate).toDateString()
    },
    ...e.updateDate && {
      modified: new Date(e.updateDate).toDateString()
    },
    license: e.license.name
  };
  return e.accessURL && (t.accessUrl = e.accessURL), e.downloadURL && (t.downloadUrl = e.downloadURL), t;
}
function gn(e) {
  var a, n, r;
  const t = {
    id: e.id,
    title: e.title,
    description: e.description,
    ...e.releaseDate && {
      created: new Date(e.releaseDate).toDateString()
    },
    ...e.updateDate && {
      modified: new Date(e.updateDate).toDateString()
    },
    keywords: e.keywords,
    distributions: (a = e.distributions) == null ? void 0 : a.map(Rr)
  };
  return (n = e.publisher) != null && n.name && (t.publisher = {
    title: e.publisher.name,
    url: (r = e.publisher) == null ? void 0 : r.homepage
  }), t;
}
function Or(e) {
  return {
    count: e.count,
    datasets: e.results.map(gn),
    facets: e.facets.filter((t) => t.values.length).map((t) => ({
      id: t.search_parameter,
      title: t.displayName,
      values: t.values.map((a) => ({ id: a.search_value, title: a.facet }))
    }))
  };
}
function Dr(e, t) {
  const a = Object.entries(e), n = { field: "ALL", value: t.replaceAll(" ", ",") };
  return a.length ? [...a.map((r) => ({ field: r[0], value: r[1] })), n] : [n];
}
function kr(e) {
  switch (e) {
    case "lastCreated":
      return { field: "releaseDate", mode: "desc" };
    case "lastModified":
      return { field: "updateDate", mode: "desc" };
    case "nameAsc":
      return { field: "title", mode: "asc" };
    case "nameDesc":
      return { field: "title", mode: "desc" };
    default:
      return { field: "title", mode: "asc" };
  }
}
async function Nr(e) {
  const t = Te(e.url, x.IDRA), a = {
    method: "GET",
    headers: { accept: "application/json" },
    signal: AbortSignal.timeout(3e4)
  }, n = new URL(t.href);
  n.pathname = `${n.pathname}/cataloguesInfo`;
  const r = await fetch(n, a).then((d) => d.json()).then((d) => d.map((c) => c.id)), u = {
    filters: Dr(e.facets, e.query),
    sort: kr(
      Ze[e.sortBy]
    ),
    live: !1,
    rows: e.itemsPerPage.toString(),
    start: (e.itemsPerPage * e.page).toString(),
    nodes: r,
    euroVocFilter: { euroVoc: !1, sourceLanguage: "", targetLanguages: [] }
  }, i = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    signal: AbortSignal.timeout(3e4),
    body: JSON.stringify(u)
  }, l = new URL(t.href);
  return l.pathname = `${l.pathname}/search`, fetch(l, i).then((d) => d.json()).then((d) => Or(d));
}
async function Mr(e, t) {
  const a = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    signal: AbortSignal.timeout(5e3)
  }, n = Te(e, x.IDRA);
  return n.pathname = `${n.pathname}/dataset/${t}`, fetch(n, a).then((r) => r.json()).then((r) => {
    var u;
    return gn((u = r.results) == null ? void 0 : u[0]);
  });
}
var yn = /* @__PURE__ */ ((e) => (e.CLIMATE_ZONES = "climateZoneIds", e.PILOTS = "pilotIds", e.KEYWORD_IDS = "keywordIds", e.PROBLEM_IDS = "problemIds", e))(yn || {});
function Ur(e) {
  var t;
  if ((t = e.data) != null && t.id)
    return {
      id: e.data.id.toString(),
      title: e.data.title,
      description: `${e.data.areaCharacterization}
${e.data.challenges}`,
      ...e.data.dateCreated && {
        created: new Date(e.data.dateCreated).toDateString()
      },
      keywords: e.data.keywords,
      distributions: [
        {
          id: e.data.id.toString(),
          title: e.data.title,
          type: "feature",
          featureProperties: {
            longitude: e.data.geoLocation.longitude,
            latitude: e.data.geoLocation.latitude,
            id: e.data.id,
            geoLocation: e.data.geoLocation,
            areaCharacterization: e.data.areaCharacterization,
            dateCreated: e.data.dateCreated,
            lessonsLearnt: e.data.lessonsLearnt,
            potentialImpactsAndBenefits: e.data.potentialImpactsAndBenefits,
            title: e.data.title,
            climateZone: e.data.climateZone,
            pilot: e.data.pilot,
            status: e.data.status,
            isUrbreathNbs: e.data.isUrbreathNbs,
            keywords: e.data.keywords,
            objective: e.data.objective,
            problems: e.data.problems,
            mainImage: e.data.mainImage,
            images: e.data.images,
            challenges: e.data.challenges,
            relatedMaterial: e.data.relatedMaterial,
            videos: e.data.videos,
            idraDatasets: e.data.idraDatasets,
            kpis: e.data.kpis
          }
        }
      ]
    };
}
async function Fr(e, t) {
  const a = Te(e, x.NBS);
  a.pathname = `${a.pathname}/nbs/${t}`;
  const n = {
    method: "GET",
    headers: { accept: "application/json" },
    signal: AbortSignal.timeout(5e3)
  };
  return fetch(a, n).then((r) => r.json()).then((r) => Ur(r));
}
async function Wr(e) {
  const t = Object.values(yn).reduce(
    (u, i) => {
      const l = `${i.slice(0, -3)}s`;
      return e.facets[l] && (u[i] = [e.facets[l]]), u;
    },
    {
      climateZoneIds: [],
      pilotIds: [],
      keywordIds: [],
      problemIds: []
    }
  ), a = JSON.stringify({ ...t, onlyUrbreathNbs: !1 }), n = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: a,
    signal: AbortSignal.timeout(3e4)
  }, r = Te(e.url, x.NBS);
  return r.pathname = `${r.pathname}/nbs/map`, fetch(r, n).then((u) => u.json()).then(async (u) => {
    if (!u.success)
      throw new Error(u.message || "Failed to fetch registry data");
    const i = (await Promise.all(
      u.data.map(
        async (g) => Fr(e.url, g.id.toString())
      )
    )).filter((g) => !!g).slice(
      e.page * e.itemsPerPage,
      (e.page + 1) * e.itemsPerPage
    ), l = Te(e.url, x.NBS);
    l.pathname = `${l.pathname}/filters/`;
    const d = await fetch(l).then((g) => g.json()).catch((g) => (Se(U).error(
      `Failed to fetch registry filters from ${r}: ${String(g)}`
    ), null)), c = [];
    return d != null && d.success ? c.push(
      ...Object.entries(d.data).map(([g, f]) => ({
        id: g,
        title: Sn(g),
        values: f.map((w) => ({
          id: w.id,
          title: `${w.label} `
        }))
      }))
    ) : Se(U).error(
      (d == null ? void 0 : d.message) || "Failed to fetch registry filters"
    ), { count: u.data.length, datasets: i, facets: c };
  });
}
const Ot = "nbsRegistryLayer";
function Br(e, t) {
  let a = e.layers.getByKey(Ot);
  if (!a) {
    a = new Xt({
      name: Ot,
      properties: {
        featureInfo: "NbsRegistryFeatureInfo",
        title: "Nature-Based Solutions"
      }
    }), a.activate().catch(() => {
    }), e.layers.add(a);
    const r = tt(a.name), u = new Gt(
      {
        name: r,
        layerName: a.name,
        title: "Nature-Based Solutions"
      },
      e
    );
    u.addAction(
      G({
        name: "dynamicLayer.actions.zoomToExtent",
        callback: async () => {
          var l;
          const i = Qt.createViewpointFromExtent(
            a.getZoomToExtent()
          );
          i && await ((l = e.maps.activeMap) == null ? void 0 : l.gotoViewpoint(i));
        }
      })
    ), u.addAction(
      G({
        name: "dynamicLayer.actions.layer.remove",
        callback: () => {
          e.layers.remove(a), a.destroy(), e.contentTree.remove(u);
        }
      })
    ), e.contentTree.add(u);
  }
  const n = new _a({
    geometry: new Pa([
      t.featureProperties.longitude,
      t.featureProperties.latitude
    ]),
    ...t.featureProperties
  });
  n.setStyle(
    new Ia(
      new Xn({
        image: { src: bn(e, x.NBS), scale: 0.05 }
      })
    )
  ), a.addFeatures([n]), e.notifier.add({
    type: he.SUCCESS,
    message: e.vueI18n.t("dynamicLayer.catalogues.nbsAddedToMap")
  });
}
var x = /* @__PURE__ */ ((e) => (e.IDRA = "idra", e.NBS = "nbsRegistry", e.PIVEAU = "piveau", e.GEONETWORK = "geonetwork", e))(x || {});
const Dt = {
  piveau: Object.keys(Ce),
  idra: Object.keys(Ze),
  geonetwork: Object.keys(qe),
  nbsRegistry: []
}, jr = {
  piveau: "api/hub/search",
  idra: "api/v1/client",
  geonetwork: "geonetwork/srv/api/search/records/_search",
  nbsRegistry: "api"
};
function Te(e, t) {
  const a = new URL(e), n = jr[t].split("/").filter(Boolean), r = n.join("/");
  let u = a.pathname.replace(/\/$/, ""), i = 0;
  for (let l = n.length; l > 0; l--) {
    const d = n.slice(0, l).join("/");
    if (u.includes(`/${d}`) || u === `/${d}`) {
      i = l;
      break;
    }
  }
  if (i > 0) {
    const l = n.slice(0, i).join("/"), d = u.lastIndexOf(`/${l}`);
    d !== -1 && (u = u.slice(0, d));
  }
  return a.pathname = `${u ? `${u}/` : "/"}${r}`, a;
}
function vn(e) {
  switch (e) {
    case "idra":
      return Ze.nameAsc;
    case "piveau":
      return Ce.relevance;
    case "geonetwork":
      return qe.relevance;
    default:
      return "";
  }
}
function zr(e) {
  return {
    type: e.type,
    url: e.url,
    itemsPerPage: e.itemsPerPage ?? 14,
    filter: e.filter ?? {},
    sortBy: e.sortBy ?? vn(e.type),
    locale: e.locale ?? "en",
    page: e.page ?? 0,
    query: e.query ?? "",
    facets: e.facets ?? {},
    aggregationKeys: e.aggregationKeys
  };
}
async function hn(e) {
  vr(e, { type: String, url: String });
  const t = zr(e);
  switch (t.type) {
    case "geonetwork":
      return Er(t);
    case "idra":
      return Nr(t);
    case "nbsRegistry":
      return Wr(t);
    case "piveau":
      return Pr(t);
    default:
      throw new Error("Unsupported catalogue type");
  }
}
function Kr(e, t, a, n) {
  switch (e) {
    case "geonetwork":
      return $r(t, a);
    case "idra":
      return Mr(t, a);
    case "piveau":
      return Ir(t, a, n);
    default:
      throw new Error("Unsupported catalogue type");
  }
}
function kt(e, t) {
  var n;
  e.windowManager.has(yt) && e.windowManager.remove(yt);
  const a = (n = e.layers.getByKey(t)) == null ? void 0 : n.getZoomToExtent();
  if (a) {
    const r = Qt.createViewpointFromExtent(a);
    if (r) {
      const { activeMap: u } = e.maps;
      if (u)
        e.maps.activeMap.gotoViewpoint(r).catch((i) => {
          Se(U).error(String(i));
        });
      else {
        const i = e.maps.mapActivated.addEventListener(() => {
          i(), e.maps.activeMap.gotoViewpoint(r).catch((l) => {
            Se(U).error(String(l));
          });
        });
      }
    }
  }
}
async function Gr(e, t, a, n, r, u = !1) {
  try {
    const l = await Ct(e, { url: t, type: a, id: n, title: r });
    if (!l.children.length)
      await ke(e, l), u && kt(e, l.name);
    else if (l.children.length === 1 && !l.children[0].children.length)
      await ke(e, l.children[0]), u && kt(e, l.children[0].name);
    else
      return Object.assign(l, {
        actions: l.actions.filter(
          (d) => d.name !== wn.DeleteSource.toString()
        )
      });
  } catch (i) {
    e.notifier.add({ type: he.ERROR, message: String(i) });
  }
}
function bn(e, t) {
  return kn(e, U, `plugin-assets/${t}_logo.png`) ?? "";
}
function Oe(e, t) {
  return e ? typeof e == "string" ? e : e[t] ?? e.en ?? Object.values(e)[0] : "";
}
function Sn(e) {
  return e.match(/^[a-z]+|[A-Z][a-z]*/g).map((t) => t[0].toUpperCase() + t.substring(1).toLowerCase()).join(" ");
}
function At(e) {
  function t(a) {
    return e ? e.toLowerCase().includes(a) : !1;
  }
  if (t("wfs"))
    return $.WFS;
  if (t("wms"))
    return $.WMS;
  if (t("wmts"))
    return $.WMTS;
  if (t("geojson"))
    return $.GEOJSON;
  if (t("czml"))
    return $.CZML;
}
function pt(e) {
  return e === W.WEBDATA ? Object.values($).map((t) => ({
    value: t,
    title: `dynamicLayer.webdata.type.${t}`
  })) : Object.values(x).map((t) => ({
    value: t,
    title: `dynamicLayer.catalogues.type.${t}`
  }));
}
function tt(e) {
  return `${U}.${e.replaceAll(".", "")}`;
}
function qr(e, t, a) {
  const n = e.plugins.getByKey(U);
  function r(i) {
    const { host: l } = new URL(i.url), d = i.title ?? l.split(".").slice(1).join("."), c = { ...i, title: d };
    return hn({
      type: c.type,
      url: c.url,
      itemsPerPage: n.config.catalogues.itemsPerPage,
      filter: i.filter,
      sortBy: i.defaultSorting,
      aggregationKeys: i.aggregationKeys
    }).then((g) => {
      if (g) {
        const f = {
          ...c,
          defaultSorting: i.defaultSorting,
          data: g
        };
        return n.catalogues.added.value.push(f), f;
      }
    });
  }
  const u = t.find((i) => i.url === (a == null ? void 0 : a.url));
  u && r(u).then((i) => {
    n.catalogues.selected.value = i;
    const { type: l, url: d } = i;
    Kr(l, d, a.dataset, e.locale).then((c) => {
      n.catalogues.selectedDataset.value = c, n.catalogues.expandedDistributionIds.value = [a.distrib];
    }).catch((c) => {
      e.notifier.add({
        type: he.ERROR,
        title: "dynamicLayer.errors.fetchingDatasetDetails",
        message: String(c)
      });
    });
  }).catch(() => {
    Se(U).error(
      `${e.vueI18n.t("dynamicLayer.errors.unablePreloadCatalogue")} ${u.url}`
    );
  }), Promise.all(
    t.filter((i) => i !== u).map(async (i) => {
      await r(i);
    })
  ).catch((i) => {
    Se(U).error(
      `An error occurred while preloading catalogues: ${String(i)}`
    );
  });
}
var wn = /* @__PURE__ */ ((e) => (e.AddToMap = "dynamicLayer.actions.layer.add", e.AddAll = "dynamicLayer.actions.layer.addAll", e.RemoveAll = "dynamicLayer.actions.layer.removeAll", e.EditLayer = "editLayer", e.RemoveLayer = "dynamicLayer.actions.layer.remove", e.DeleteSource = "dynamicLayer.actions.source.delete", e))(wn || {});
function gt(e) {
  function t(a) {
    let n = 0;
    for (const r of a.children)
      !r.isAddedToMap && !r.children.length && (n += 1), n += t(r);
    return n;
  }
  return t(e);
}
async function ke(e, t) {
  if (e.layers.hasKey(t.name))
    e.notifier.add({
      type: he.ERROR,
      message: `${e.vueI18n.t("dynamicLayer.common.theLayer")} ${t.title} ${e.vueI18n.t("dynamicLayer.errors.alreadyAdded")}`
    });
  else {
    const a = e.plugins.getByKey(U);
    try {
      const n = Zs(t, a.layerIndex);
      n.properties.featureInfo = U, e.layers.add(n), await n.activate(), a.state[n.url] || (a.state[n.url] = { layerNames: [], type: t.type }), a.state[n.url].layerNames.includes(t.name) || a.state[n.url].layerNames.push(t.name), t.isAddedToMap = !0;
      const r = tt(n.name), u = new Gt(
        {
          name: r,
          layerName: n.name,
          title: t.title
        },
        e
      );
      t.actions = ge(e, t), e.contentTree.add(u), a.addedToMap.value.push(t), a.addedSelected.value = t, a.activeTab.value === W.WEBDATA && (a.webdata.selected.value = t), e.notifier.add({
        type: he.SUCCESS,
        message: `${e.vueI18n.t("dynamicLayer.common.theLayer")} ${t.title} ${e.vueI18n.t("dynamicLayer.info.successfullyAdded")}`
      });
    } catch (n) {
      e.notifier.add({
        type: he.ERROR,
        title: `${e.vueI18n.t("dynamicLayer.errors.addingLayer")}: ${t.title}`,
        message: n
      });
    }
  }
}
function Tn(e, t) {
  const a = e.plugins.getByKey(U);
  t.children.filter((n) => !n.isAddedToMap).forEach((n) => {
    Ue((r) => {
      r.children.length || ke(e, r).catch((u) => {
        Se(U).error(String(u));
      });
    }, n);
  }), a.activeTab.value === W.WEBDATA && (a.webdata.selected.value = t);
}
function Ne(e, t) {
  var c;
  const { state: a, addedToMap: n, addedSelected: r } = e.plugins.getByKey(
    U
  );
  ((c = r.value) == null ? void 0 : c.name) === t.name && (r.value = void 0);
  const u = e.layers.getByKey(t.name);
  u && (e.layers.remove(u), u.destroy());
  const i = tt(t.name), l = e.contentTree.getByKey(i);
  l && e.contentTree.remove(l), a[t.url] && (a[t.url].layerNames.includes(t.name) && a[t.url].layerNames.splice(
    a[t.url].layerNames.findIndex((g) => g === t.name),
    1
  ), a[t.url].layerNames.length || delete a[t.url]);
  const d = n.value.indexOf(t);
  n.value.splice(d, 1), t.isAddedToMap = !1, t.actions = ge(e, t);
}
function Zr(e, t) {
  Ue((a) => {
    Ne(e, a);
  }, t);
}
function An(e, t) {
  const a = e.plugins.getByKey(U);
  a.webdata.selected.value = void 0, Ue((r) => {
    Ne(e, r);
  }, t);
  const { value: n } = a.webdata.added;
  n.splice(n.indexOf(t), 1);
}
function ge(e, t) {
  const a = [];
  t.isAddedToMap && a.push(
    G({
      icon: "mdi-map-check-outline",
      name: "dynamicLayer.actions.layer.remove",
      title: "dynamicLayer.actions.layer.remove",
      callback: Ne.bind(null, e, t)
    })
  ), !t.children.length && !t.isAddedToMap && a.push(
    G({
      icon: "$vcsPlus",
      name: "dynamicLayer.actions.layer.add",
      title: "dynamicLayer.actions.layer.add",
      callback: ke.bind(null, e, t)
    })
  ), t.children.length && (a.push(
    G({
      name: "dynamicLayer.actions.layer.addAll",
      disabled: gt(t) === 0,
      callback: Tn.bind(null, e, t)
    })
  ), a.push(
    G({
      name: "dynamicLayer.actions.layer.removeAll",
      disabled: !t.children.some((r) => r.isAddedToMap),
      callback: Zr.bind(null, e, t)
    })
  )), t.isRootElement && a.push(
    G({
      name: "dynamicLayer.actions.source.delete",
      callback: An.bind(null, e, t)
    })
  );
  const n = ir(e, t);
  if (n) {
    const r = n.actions.find(
      (i) => i.name === "dynamicLayer.actions.layer.addAll"
    );
    r && (r.disabled = gt(n) === 0);
    const u = n.actions.find(
      (i) => i.name === "dynamicLayer.actions.layer.removeAll"
    );
    u && (u.disabled = !n.children.some((i) => i.isAddedToMap));
  }
  return a;
}
const Jr = [
  "application/json",
  "application/geojson",
  "application/geo+json",
  "application/vnd.geo+json",
  "application/vnd.ogc.gml",
  "text/xml"
];
function Hr(e, t, a, n) {
  var r, u, i, l, d, c, g, f, w, h, S, O, C, M, F, K, B;
  try {
    let A = function(z) {
      var Ve, _e, ye, Le;
      function te(J) {
        var pe;
        return J.Layer ? ((pe = J.Layer) == null ? void 0 : pe.length) > 1 ? !0 : J.Name !== J.Layer[0].Name : !1;
      }
      const q = te(z);
      function fe(J) {
        var Fe;
        return (q ? z : ((Fe = z == null ? void 0 : z.Layer) == null ? void 0 : Fe[0]) ?? z)[J];
      }
      const Re = !!e.layers.hasKey(z.Name), ae = {
        optionalParameters: n,
        formats: D.Request.GetMap.Format.filter(
          (J) => J === "image/png" || J === "image/jpeg"
        ),
        featureInfoResponseType: Z,
        attributions: {
          provider: (_e = (Ve = _.ContactInformation) == null ? void 0 : Ve.ContactPersonPrimary) == null ? void 0 : _e.ContactOrganization,
          url: _.OnlineResource
        },
        url: a,
        actions: [],
        type: $.WMS,
        name: fe("Name"),
        title: fe("Title"),
        queryable: fe("queryable"),
        supportsTransparency: !fe("opaque"),
        extent: wt(
          new be({
            coordinates: fe("EX_GeographicBoundingBox"),
            projection: { epsg: 4326 }
          })
        ),
        description: fe("Abstract"),
        keywordList: fe("KeywordList"),
        styles: (ye = z.Style) == null ? void 0 : ye.map((J) => ({
          value: J.Name,
          title: J.Title,
          abstract: J.Abstract,
          legendUrl: J.LegendURL[0].OnlineResource
        })),
        children: te(z) ? (Le = z.Layer) == null ? void 0 : Le.map((J) => A(J)) : []
      };
      return ae.isAddedToMap = Re && !ae.children.length, ae;
    }, ne = function(z) {
      var te;
      z.actions.push(...ge(e, z)), (te = z.children) == null || te.forEach((q) => {
        ne(q);
      });
    };
    const { Capability: D, Service: _ } = new Ra().read(t), Z = Jr.find(
      (z) => {
        var te, q;
        return (q = (te = D.Request.GetFeatureInfo) == null ? void 0 : te.Format) == null ? void 0 : q.includes(z);
      }
    ), de = G({
      actions: [],
      name: a,
      title: _.Title,
      type: $.WMS,
      url: a,
      isRootElement: !0,
      accessConstraints: _.AccessConstraints,
      description: _.Abstract,
      fees: _.Fees,
      formats: D.Request.GetMap.Format.filter(
        (z) => z === "image/png" || z === "image/jpeg"
      ),
      featureInfoResponseType: Z,
      keywordList: _.KeywordList,
      onlineResource: _.OnlineResource,
      contact: {
        address: (u = (r = _.ContactInformation) == null ? void 0 : r.ContactAddress) == null ? void 0 : u.Address,
        city: `${((l = (i = _.ContactInformation) == null ? void 0 : i.ContactAddress) == null ? void 0 : l.PostCode) ?? ""}${(c = (d = _.ContactInformation) == null ? void 0 : d.ContactAddress) != null && c.PostCode && ((f = (g = _.ContactInformation) == null ? void 0 : g.ContactAddress) != null && f.City) ? " " : ""}${((h = (w = _.ContactInformation) == null ? void 0 : w.ContactAddress) == null ? void 0 : h.City) ?? ""}`,
        country: (O = (S = _.ContactInformation) == null ? void 0 : S.ContactAddress) == null ? void 0 : O.Country,
        person: (M = (C = _.ContactInformation) == null ? void 0 : C.ContactPersonPrimary) == null ? void 0 : M.ContactPerson,
        position: (F = _.ContactInformation) == null ? void 0 : F.ContactPosition,
        organization: (B = (K = _.ContactInformation) == null ? void 0 : K.ContactPersonPrimary) == null ? void 0 : B.ContactOrganization
      },
      children: D.Layer.Layer.map((z) => A(z))
    });
    return ne(de), de;
  } catch (A) {
    throw Se("DynamicLayer").error(
      `Failed to parse WMS Capabilities from ${a}: ${String(A)}`
    ), new Error(
      "Failed to parse WMS Capabilities, see console for details"
    );
  }
}
async function Yr(e, t, a) {
  const n = De(t, $.WMS), { parameters: r, optionalParameters: u } = St(
    t,
    "WMS"
  ), i = vt(n, a);
  return fetch(`${n}?${r}`, i).then((l) => l.text()).then((l) => Hr(e, l, n, u));
}
function Xr(e, t) {
  var i, l;
  const a = e.formats.includes("image/png") ? "image/png" : e.formats[0], n = (i = e.styles) == null ? void 0 : i[0], r = {
    ...e.optionalParameters,
    FORMAT: a,
    STYLES: (n == null ? void 0 : n.value) ?? "",
    LAYERS: e.name,
    TRANSPARENT: e.supportsTransparency ? "TRUE" : "FALSE"
  }, u = new Qn({
    name: e.name,
    layers: e.name,
    url: e.url,
    headers: P(e.headers),
    extent: ((l = e.extent) == null ? void 0 : l.toJSON()) ?? xn.toJSON(),
    parameters: r,
    properties: {
      title: e.title,
      ...(n == null ? void 0 : n.legendUrl) && {
        legend: [
          {
            type: "ImageLegendItem",
            src: n.legendUrl,
            popoutBtn: !0
          }
        ]
      },
      attributions: P(e.attributions)
    },
    zIndex: t
  });
  return e.queryable && (u.featureProvider = new ea({
    url: e.url,
    parameters: r,
    extent: e.extent,
    responseType: e.featureInfoResponseType,
    minLevel: 0,
    maxLevel: 18
  })), u;
}
function Qr(e, t, a, n) {
  const r = G(
    {
      actions: [],
      children: [],
      name: a,
      title: n,
      type: $.CESIUM_TILESET,
      url: t,
      isRootElement: !0
    }
  );
  return r.actions.push(
    ...ge(e, r)
  ), r;
}
function xr(e) {
  return new ta({
    url: e.url,
    name: e.name,
    activeOnStartup: !0,
    headers: P(e.headers),
    properties: { title: e.title }
  });
}
function eo(e, t, a, n) {
  const r = De(t, $.TERRAIN), u = G({
    actions: [],
    children: [],
    name: a,
    title: n,
    type: $.TERRAIN,
    url: r,
    isRootElement: !0
  });
  return u.actions.push(
    ...ge(e, u)
  ), u;
}
function to(e) {
  return new na({
    url: e.url,
    name: e.name,
    headers: P(e.headers),
    properties: { title: e.title }
  });
}
const ce = {
  _200: "2.0.0",
  _110: "1.1.0",
  _100: "1.0.0"
};
function Ie(e) {
  return e[0].version;
}
const R = [
  null,
  "http://www.opengis.net/fes/2.0",
  "http://www.opengis.net/ows/1.1",
  "http://www.opengis.net/ows",
  "http://www.opengis.net/wfs",
  "http://www.opengis.net/wfs/2.0",
  "http://www.opengis.net/ogc",
  "http://www.opengis.net/gml",
  "http://www.opengis.net/gml/3.2"
], no = {
  [ce._200]: I(R, {
    ServiceIdentification: v(ot),
    ServiceProvider: v(Mt),
    OperationsMetadata: v(Ut),
    FeatureTypeList: v(st),
    Filter_Capabilities: v(it)
  }),
  [ce._110]: I(R, {
    ServiceIdentification: v(ot),
    ServiceProvider: v(Mt),
    OperationsMetadata: v(Ut),
    FeatureTypeList: v(st),
    Filter_Capabilities: v(it)
  }),
  [ce._100]: I(R, {
    Service: v(ot),
    Capability: v(Yo),
    FeatureTypeList: v(st),
    Filter_Capabilities: v(it)
  })
};
class ao extends Da {
  constructor() {
    super(), this.version = void 0;
  }
  /**
   * @param {Element} node Node.
   * @return {Object} Object
   */
  readFromNode(t) {
    this.version = t.getAttribute("version").trim();
    const a = k(
      {
        version: this.version
      },
      no[this.version],
      t,
      []
    );
    return a || null;
  }
}
const ro = I(R, {
  Name: v(N),
  Title: v(N),
  Abstract: v(N),
  Keywords: v(function(e, t) {
    return Ie(t) === ce._100 ? In(e) : En(e, t);
  }),
  ServiceType: v(N),
  ServiceTypeVersion: v(N),
  Fees: v(N),
  AccessConstraints: v(N),
  OnlineResource: v(N)
}), oo = I(R, {
  ProviderName: v(N),
  ServiceContact: v(Xo)
}), so = I(R, {
  Operation: Ee(ds),
  Constraint: Ee(Ln)
}), io = I(R, {
  Request: v(cs)
}), lo = I(R, {
  IndividualName: v(N),
  PositionName: v(N),
  ContactInfo: v(Qo)
}), uo = I(R, {
  Phone: v(xo),
  Address: v(es)
}), co = I(R, {
  Voice: v(N),
  Facsimile: v(N)
}), mo = I(R, {
  DeliveryPoint: v(N),
  City: v(N),
  AdministrativeArea: v(N),
  PostalCode: v(N),
  Country: v(N),
  ElectronicMailAddress: v(N)
}), fo = I(R, {
  FeatureType: ue(Lt)
}), po = I(R, {
  Operations: v(Me),
  FeatureType: Ee(Lt)
}), go = I(R, {
  Operations: v(rs),
  FeatureType: Ee(Lt)
}), yo = I(R, {
  Name: v(N),
  Title: v(N),
  Abstract: v(N),
  Keywords: v(function(e, t) {
    return Ie(t) === ce._100 ? In(e) : En(e, t);
  }),
  DefaultSRS: v(N),
  DefaultCRS: v(N),
  // 1.1.0
  OtherSRS: Ee(N),
  // 1.1.0
  SRS: v(N),
  WGS84BoundingBox: v(vs),
  MetadataURL: v(gs),
  LatLongBoundingBox: v(hs)
  // 1.0.0
}), vo = I(R, {
  DCP: v(ts),
  Parameter: Ee(ps)
}), ho = I(R, {
  Operation: ue(N)
}), bo = I(R, {
  DCPType: Os(ns),
  SchemaDescriptionLanguage: v(Me),
  ResultFormat: v(Me)
}), Nt = I(R, {
  Value: Ee(N),
  AllowedValues: v($n)
}), So = I(R, {
  NoValues: v(N),
  DefaultValue: v(N),
  AllowedValues: v($n)
}), wo = I(R, {
  Get: v(lt),
  Post: v(lt)
}), To = I(R, {
  Get: v(jt),
  Post: v(jt)
}), Ao = I(R, {
  LowerCorner: v(Bt),
  UpperCorner: v(Bt)
}), Lo = I(R, {
  HTTP: v(ls)
}), Co = I(R, {
  HTTP: v(us)
}), Eo = I(R, {
  Keyword: ue(N)
}), $o = I(R, {
  Value: ue(N)
}), Vo = I(R, {
  Conformance: v(bs),
  Id_Capabilities: v(Ss),
  Scalar_Capabilities: v(ws),
  Spatial_Capabilities: v(Ts),
  Temporal_Capabilities: v(As),
  Functions: v(Ls)
}), _o = I(R, {
  Constraint: Ee(Ln)
}), Po = I(R, {
  ResourceIdentifier: ue(ys)
}), Io = I(R, {
  LogicalOperators: v(Es),
  ComparisonOperators: v(_n)
}), Ro = I(R, {
  LogicalOperators: v(N),
  ComparisonOperators: v(_n),
  ArithmeticOperators: v(Pn)
}), Oo = I(R, {
  Logical_Operators: v(N),
  Comparison_Operators: v(Me),
  Arithmetic_Operators: v(Pn)
}), Do = I(R, {
  GeometryOperands: v($s),
  SpatialOperators: v(Vs)
}), ko = I(R, {
  Spatial_Operators: v(Me)
}), No = I(R, {
  TemporalOperands: v(_s),
  TemporalOperators: v(Ps)
}), Mo = I(R, {
  Function: ue(ms)
}), Uo = I(R, {
  Function_Names: v(Ft),
  // 1.0.0
  FunctionNames: v(Ft)
  // 1.1.0
}), Fo = I(R, {
  FunctionName: ue(Wt),
  // 1.1.0
  Function_Name: ue(Wt)
  // 1.0.0
}), Wo = I(R, {
  Returns: v(N),
  Arguments: v(Is)
}), Bo = I(R, {
  Argument: ue(fs)
}), jo = I(R, {
  Type: v(N)
}), zo = I(R, {
  LogicalOperator: ue(Je)
}), Ko = I(R, {
  ComparisonOperator: ue(Cn)
}), Go = I(R, {
  Simple_Arithmetic: v(N),
  SimpleArithmetic: v(N),
  Functions: v(Cs)
}), qo = I(R, {
  GeometryOperand: ue(Cn)
}), Zo = I(R, {
  SpatialOperator: ue(Je)
}), Jo = I(R, {
  TemporalOperand: ue(Je)
}), Ho = I(R, {
  TemporalOperator: ue(Je)
});
function ot(e, t) {
  return k({}, ro, e, t);
}
function Mt(e, t) {
  return k({}, oo, e, t);
}
function Ut(e, t) {
  return k({}, so, e, t);
}
function Yo(e, t) {
  return k({}, io, e, t);
}
function st(e, t) {
  const a = Ie(t);
  let n;
  return a === ce._100 ? n = po : a === ce._110 ? n = go : n = fo, k(
    a === ce._100 || a === ce._110 ? {} : [],
    n,
    e,
    t
  );
}
function Xo(e, t) {
  return k({}, lo, e, t);
}
function Qo(e, t) {
  return k({}, uo, e, t);
}
function xo(e, t) {
  return k({}, co, e, t);
}
function es(e, t) {
  return k({}, mo, e, t);
}
function ts(e, t) {
  return k({}, Lo, e, t);
}
function ns(e, t) {
  return k({}, Co, e, t);
}
function as(e, t) {
  return k({}, vo, e, t);
}
function rs(e, t) {
  return k([], ho, e, t);
}
function os(e, t) {
  return k({}, bo, e, t);
}
function ss(e, t) {
  return Ie(t) === ce._110 ? k({}, Nt, e, t) : k({}, Nt, e, t);
}
function is(e, t) {
  return k({}, So, e, t);
}
function ls(e, t) {
  return k({}, wo, e, t);
}
function us(e, t) {
  return k({}, To, e, t);
}
function Ft(e, t) {
  return k([], Fo, e, t);
}
function ds(e, t) {
  const a = as(e, t);
  if (a)
    return a.name = e.getAttribute("name"), a;
}
function cs(e, t) {
  const a = [];
  for (const n of e.children) {
    const r = os(n, t);
    r && (r.name = n.tagName, a.push(r));
  }
  if (a.length)
    return a;
}
function ms(e, t) {
  const a = Vn(e, t);
  if (a)
    return a.name = e.getAttribute("name"), a;
}
function Wt(e, t) {
  const a = Vn(e, t);
  if (a)
    return a.name = N(e), a.nArgs = Number(e.getAttribute("nArgs")), a;
}
function fs(e, t) {
  const a = Rs(e, t);
  if (a)
    return a.name = e.getAttribute("name"), a;
}
function ps(e, t) {
  const a = ss(e, t);
  if (a)
    return a.name = e.getAttribute("name"), a;
}
function Ln(e, t) {
  const a = is(e, t);
  if (a)
    return a.name = e.getAttribute("name"), a;
}
function Je(e) {
  return e.getAttribute("name") || void 0;
}
function Cn(e) {
  return Je(e) || N(e) || void 0;
}
function gs(e) {
  return lt(e) || N(e) || void 0;
}
function ys(e) {
  return {
    name: e.getAttribute("name")
  };
}
function vs(e, t) {
  return k({}, Ao, e, t);
}
function hs(e, t) {
  return [
    Number(e.getAttribute("minx")),
    Number(e.getAttribute("miny")),
    Number(e.getAttribute("maxx")),
    Number(e.getAttribute("maxy"))
  ];
}
function En(e, t) {
  return k([], Eo, e, t);
}
function $n(e, t) {
  return k([], $o, e, t);
}
function Me(e, t) {
  const a = [];
  for (const n of e.children) {
    const u = n.tagName.split(":");
    a.push(u[u.length - 1]);
  }
  if (a.length)
    return a;
}
function Lt(e, t) {
  return k({}, yo, e, t);
}
function it(e, t) {
  return k({}, Vo, e, t);
}
function bs(e, t) {
  return k({}, _o, e, t);
}
function Ss(e, t) {
  return Ie(t) === ce._110 ? Me(e) : k([], Po, e, t);
}
function ws(e, t) {
  let a;
  const n = Ie(t);
  return n === ce._100 ? a = Oo : n === ce._110 ? a = Ro : a = Io, k({}, a, e, t);
}
function Ts(e, t) {
  return k(
    {},
    Ie(t) === ce._100 ? ko : Do,
    e,
    t
  );
}
function As(e, t) {
  return k({}, No, e, t);
}
function Ls(e, t) {
  return k([], Mo, e, t);
}
function Cs(e, t) {
  return k({}, Uo, e, t);
}
function Vn(e, t) {
  return k({}, Wo, e, t);
}
function Es(e, t) {
  return k([], zo, e, t);
}
function _n(e, t) {
  return k([], Ko, e, t);
}
function Pn(e, t) {
  return k({}, Go, e, t);
}
function $s(e, t) {
  return k([], qo, e, t);
}
function Vs(e, t) {
  return k([], Zo, e, t);
}
function _s(e, t) {
  return k([], Jo, e, t);
}
function Ps(e, t) {
  return k([], Ho, e, t);
}
function Is(e, t) {
  return k([], Bo, e, t);
}
function Rs(e, t) {
  return k({}, jo, e, t);
}
function Bt(e) {
  const t = Oa(e, !1).split(" ");
  if (t.length)
    return t.map((a) => Number(a));
}
function In(e, t = ", ") {
  const a = N(e);
  if (!a)
    return;
  const n = a.split(t);
  if (!(!n || !n.length))
    return n;
}
function jt(e) {
  return e.getAttribute("onlineResource");
}
function Os(e, t, a) {
  return (
    /**
     * @param {Element} node Node.
     * @param {Array<*>} objectStack Object stack.
     */
    function(n, r) {
      const u = e.call(
        this,
        n,
        r
      );
      if (u !== void 0) {
        const i = (
          /** @type {!Object} */
          r[r.length - 1]
        ), l = n.localName;
        for (const d of Object.keys(u))
          i[l] && d in i[l] ? i[l][d] = { ...i[l][d], ...u[d] } : i[l] = u;
      }
    }
  );
}
async function Ds(e, t) {
  return fetch(
    `${e}?SERVICE=WFS&REQUEST=DescribeFeatureType&VERSION=${t}`
  ).then((a) => a.text()).then((a) => new DOMParser().parseFromString(a, "application/xml")).then(
    (a) => {
      var n, r;
      return (r = (n = a.activeElement) == null ? void 0 : n.attributes.getNamedItem("targetNamespace")) == null ? void 0 : r.value;
    }
  );
}
async function ks(e, t, a, n) {
  var d, c, g, f, w, h, S, O, C, M, F, K, B, A, ne, D, _, Z, de, z, te, q;
  const r = new ao().read(t), u = await Ds(a, r.version);
  function i(fe) {
    const Re = [];
    return fe.forEach((ae) => {
      var Le, J;
      const Ve = !!e.layers.hasKey(ae.Name), _e = wt(
        new be({
          coordinates: (Le = ae.WGS84BoundingBox) != null && Le.LowerCorner && ((J = ae.WGS84BoundingBox) != null && J.UpperCorner) ? [
            ...ae.WGS84BoundingBox.LowerCorner,
            ...ae.WGS84BoundingBox.UpperCorner
          ] : be.WGS_84_EXTENT,
          projection: { epsg: 4326 }
        })
      ), ye = {
        actions: [],
        children: [],
        optionalParameters: n,
        name: ae.Name,
        title: ae.Title,
        attributions: { provider: r.ServiceProvider.ProviderName },
        type: $.WFS,
        url: a,
        namespace: u,
        description: ae.Abstract,
        keywordList: ae.Keywords,
        onlineResource: ae.MetadataUrl,
        extent: _e
      };
      ye.actions.push(...ge(e, ye)), ye.isAddedToMap = Ve && !ye.children.length, Re.push(ye);
    }), Re;
  }
  const l = G({
    actions: [],
    name: a,
    title: ((d = r.ServiceIdentification) == null ? void 0 : d.Title) ?? bt(e, "WFSLayer"),
    accessConstraints: (c = r.ServiceIdentification) == null ? void 0 : c.AccessConstraints,
    description: (g = r.ServiceIdentification) == null ? void 0 : g.Abstract,
    fees: (f = r.ServiceIdentification) == null ? void 0 : f.Fees,
    keywordList: (w = r.ServiceIdentification) == null ? void 0 : w.Keywords,
    contact: {
      address: (S = (h = r.ServiceProvider) == null ? void 0 : h.ServiceContact) == null ? void 0 : S.ContactInfo.Address.AdministrativeArea,
      city: `${((C = (O = r.ServiceProvider) == null ? void 0 : O.ServiceContact) == null ? void 0 : C.ContactInfo.Address.PostalCode) ?? ""}${(F = (M = r.ServiceProvider) == null ? void 0 : M.ServiceContact) != null && F.ContactInfo.Address.PostalCode && ((B = (K = r.ServiceProvider) == null ? void 0 : K.ServiceContact) != null && B.ContactInfo.Address.City) ? " " : ""}${((ne = (A = r.ServiceProvider) == null ? void 0 : A.ServiceContact) == null ? void 0 : ne.ContactInfo.Address.City) ?? ""}`,
      country: (_ = (D = r.ServiceProvider) == null ? void 0 : D.ServiceContact) == null ? void 0 : _.ContactInfo.Address.Country,
      person: (de = (Z = r.ServiceProvider) == null ? void 0 : Z.ServiceContact) == null ? void 0 : de.IndividualName,
      position: (te = (z = r.ServiceProvider) == null ? void 0 : z.ServiceContact) == null ? void 0 : te.PositionName,
      organization: (q = r.ServiceProvider) == null ? void 0 : q.ProviderName
    },
    type: $.WFS,
    url: a,
    isRootElement: !0,
    children: i(
      Array.isArray(r.FeatureTypeList) ? r.FeatureTypeList : r.FeatureTypeList.FeatureType
    )
  });
  return l.actions.push(...ge(e, l)), l;
}
async function Ns(e, t, a) {
  const n = De(t, $.WFS), { parameters: r, optionalParameters: u } = St(
    t,
    "WFS"
  ), i = vt(n, a);
  return fetch(`${n}?${r}`, i).then((l) => l.text()).then(
    (l) => ks(e, l, n, u)
  );
}
function Ms(e, t) {
  var u, i;
  const a = e.name.split(":"), n = a[0], r = a[1];
  return new aa({
    url: cn(e.url, e.optionalParameters),
    name: e.name,
    extent: (u = e.extent) == null ? void 0 : u.toJSON(),
    headers: P(e.headers),
    featureType: r,
    featurePrefix: n,
    featureNS: e.namespace ?? "",
    projection: (i = e.extent) == null ? void 0 : i.projection,
    properties: { title: e.title, attributions: P(e.attributions) },
    zIndex: t
  });
}
function Us(e, t, a, n) {
  var d, c, g, f, w, h, S, O, C, M, F, K, B, A, ne, D, _, Z, de, z, te;
  const r = new ka().read(t), u = r.Contents.TileMatrixSet.filter(
    (q) => q.SupportedCRS.includes("3857")
  ).sort((q, fe) => fe.TileMatrix.length - q.TileMatrix.length)[0] ?? r.Contents.TileMatrixSet[0];
  function i(q) {
    var Ve, _e, ye, Le, J;
    const fe = !!e.layers.hasKey(q.Identifier), Re = wt(
      new be({
        coordinates: (Ve = q.WGS84BoundingBox) != null && Ve.length ? q.WGS84BoundingBox : be.WGS_84_EXTENT,
        projection: { epsg: 4326 }
      })
    ), ae = {
      actions: [],
      children: [],
      name: q.Identifier,
      title: q.Title,
      optionalParameters: n,
      isAddedToMap: fe,
      type: $.WMTS,
      url: ((ye = (_e = q.ResourceURL) == null ? void 0 : _e.find((pe) => pe.resourceType === "tile")) == null ? void 0 : ye.template) ?? a,
      description: q.Abstract,
      keywordList: [],
      attributions: {
        url: (Le = r.ServiceProvider) == null ? void 0 : Le.ProviderSite,
        provider: (J = r.ServiceProvider) == null ? void 0 : J.ProviderName
      },
      formats: q.Format,
      extent: Re,
      defaultTileMatrixSetId: u.Identifier,
      matrixSetIds: q.TileMatrixSetLink.map((pe) => pe.TileMatrixSet),
      styles: q.Style.map((pe) => {
        var Fe;
        return {
          name: pe.Identifier,
          title: pe.Title,
          legendUrl: (Fe = pe.LegendURL) == null ? void 0 : Fe[0].href,
          isDefault: pe.isDefault
        };
      })
    };
    return ae.actions = ge(e, ae), ae;
  }
  const l = G({
    actions: [],
    name: a,
    title: ((d = r.ServiceIdentification) == null ? void 0 : d.Title) ?? bt(e, "WMTSLayer"),
    accessConstraints: (c = r.ServiceIdentification) == null ? void 0 : c.AccessConstraints,
    description: (g = r.ServiceIdentification) == null ? void 0 : g.Abstract,
    fees: (f = r.ServiceIdentification) == null ? void 0 : f.Fees,
    keywordList: [],
    contact: {
      address: (h = (w = r.ServiceProvider) == null ? void 0 : w.ServiceContact) == null ? void 0 : h.ContactInfo.Address.DeliveryPoint,
      city: `${((O = (S = r.ServiceProvider) == null ? void 0 : S.ServiceContact) == null ? void 0 : O.ContactInfo.Address.PostalCode) ?? ""}${(M = (C = r.ServiceProvider) == null ? void 0 : C.ServiceContact) != null && M.ContactInfo.Address.PostalCode && ((K = (F = r.ServiceProvider) == null ? void 0 : F.ServiceContact) != null && K.ContactInfo.Address.City) ? " " : ""}${((A = (B = r.ServiceProvider) == null ? void 0 : B.ServiceContact) == null ? void 0 : A.ContactInfo.Address.City) ?? ""}`,
      country: (D = (ne = r.ServiceProvider) == null ? void 0 : ne.ServiceContact) == null ? void 0 : D.ContactInfo.Address.Country,
      person: (Z = (_ = r.ServiceProvider) == null ? void 0 : _.ServiceContact) == null ? void 0 : Z.IndividualName,
      position: (z = (de = r.ServiceProvider) == null ? void 0 : de.ServiceContact) == null ? void 0 : z.PositionName,
      organization: (te = r.ServiceProvider) == null ? void 0 : te.ProviderName
    },
    type: $.WMTS,
    url: a,
    isRootElement: !0,
    children: r.Contents.Layer.map((q) => i(q))
  });
  return l.actions.push(...ge(e, l)), l;
}
async function Fs(e, t, a) {
  const n = De(t, $.WMTS), { parameters: r, optionalParameters: u } = St(
    t,
    "WMTS"
  ), i = vt(n, a);
  return fetch(`${n}?${r}`, i).then((l) => l.text()).then(
    (l) => Us(e, l, n, u)
  );
}
function Ws(e, t) {
  var a, n, r, u, i;
  return new ra({
    url: cn(e.url, e.optionalParameters),
    name: e.name,
    layer: e.name,
    headers: P(e.headers),
    tileMatrixSetID: e.defaultTileMatrixSetId,
    format: (a = e.formats) == null ? void 0 : a[0],
    wmtsStyle: ((r = (n = e.styles) == null ? void 0 : n.find((l) => l.isDefault)) == null ? void 0 : r.name) ?? ((u = e.styles) == null ? void 0 : u[0].name),
    matrixIds: e.matrixSetIds ?? [],
    extent: (i = e.extent) == null ? void 0 : i.toJSON(),
    properties: { title: e.title, attributions: P(e.attributions) },
    tileSize: [256, 256],
    zIndex: t
  });
}
function Bs(e, t, a, n) {
  const r = G({
    actions: [],
    children: [],
    name: a,
    title: n,
    type: $.GEOJSON,
    url: t,
    isRootElement: !0
  });
  return r.actions = ge(e, r), r;
}
function js(e) {
  return new Xt({
    url: e.url,
    name: e.name,
    headers: P(e.headers),
    projection: new xt({ epsg: 4326 }),
    properties: { title: e.title }
  });
}
function zs(e, t, a, n) {
  const r = G({
    actions: [],
    children: [],
    name: a,
    title: n,
    type: $.POINTCLOUD,
    url: t,
    isRootElement: !0
  });
  return r.actions.push(
    ...ge(e, r)
  ), r;
}
function Ks(e) {
  return new oa({
    url: e.url,
    name: e.name,
    headers: P(e.headers),
    properties: { title: e.title }
  });
}
function Gs(e, t, a, n) {
  const r = G({
    actions: [],
    children: [],
    name: a,
    title: n,
    type: $.CZML,
    url: t,
    isRootElement: !0
  });
  return r.actions.push(...ge(e, r)), r;
}
function qs(e) {
  return new sa({
    url: e.url,
    name: e.name,
    headers: P(e.headers),
    properties: { title: e.title }
  });
}
async function Ct(e, t) {
  const a = t.title || bt(e, t.type), n = t.id || a;
  let r;
  switch (t.type) {
    case $.CESIUM_TILESET:
      r = Qr(e, t.url, n, a);
      break;
    case $.CZML:
      r = Gs(e, t.url, n, a);
      break;
    case $.GEOJSON:
      r = Bs(e, t.url, n, a);
      break;
    case $.POINTCLOUD:
      r = zs(e, t.url, n, a);
      break;
    case $.TERRAIN:
      r = eo(e, t.url, n, a);
      break;
    case $.WFS:
      r = await Ns(e, t.url, t.headers);
      break;
    case $.WMS:
      r = await Yr(e, t.url, t.headers);
      break;
    case $.WMTS:
      r = await Fs(e, t.url, t.headers);
      break;
    default:
      throw new Error(e.vueI18n.t("dynamicLayer.errors.fetchingSource"));
  }
  return t.headers && Ue((u) => {
    u.headers = t.headers;
  }, r), r;
}
function Zs(e, t) {
  switch (e.type) {
    case $.CESIUM_TILESET:
      return xr(e);
    case $.CZML:
      return qs(e);
    case $.GEOJSON:
      return js(e);
    case $.POINTCLOUD:
      return Ks(e);
    case $.TERRAIN:
      return to(e);
    case $.WFS:
      return Ms(e, t);
    case $.WMS:
      return Xr(e, t);
    case $.WMTS:
      return Ws(e, t);
    default:
      throw Se(U).error("dynamicLayer.errors.layerCreation"), new Error();
  }
}
const Js = /* @__PURE__ */ Y({
  __name: "DlTreeviewTitle",
  props: {
    title: {
      type: String,
      required: !0
    },
    active: {
      type: Boolean,
      default: !1
    }
  },
  setup(e) {
    const t = e, a = T(), n = Nn(
      ee(() => a.value),
      ee(() => ""),
      ee(() => t.title)
    );
    return (r, u) => (y(), V(
      "div",
      {
        ref_key: "titleParent",
        ref: a,
        class: en(["title-parent pr-2 vcs-treeview-title w-100", { active: e.active }])
      },
      [
        j(
          "span",
          null,
          p(e.title),
          1
          /* TEXT */
        ),
        re(n) ? (y(), L(re(pa), {
          key: 0,
          activator: "parent"
        }, {
          default: s(() => [
            b(
              p(re(n)),
              1
              /* TEXT */
            )
          ]),
          _: 1
          /* STABLE */
        })) : E("v-if", !0)
      ],
      2
      /* CLASS */
    ));
  }
}), X = (e, t) => {
  const a = e.__vccOpts || e;
  for (const [n, r] of t)
    a[n] = r;
  return a;
}, Rn = /* @__PURE__ */ X(Js, [["__scopeId", "data-v-2071794a"]]), Hs = Y({
  name: "WxsInformations",
  components: {
    VChip: rn,
    VRow: H,
    VcsExtent: Ye,
    VcsLabel: me
  },
  props: {
    item: {
      type: Object,
      required: !0
    }
  },
  setup() {
    return {
      CategoryType: W,
      checkAnyProperty(e) {
        return e ? Object.values(e).some((t) => !!t) : !1;
      }
    };
  }
}), Ys = {
  key: 1,
  class: "w-100"
}, Xs = {
  key: 2,
  class: "w-100"
}, Qs = {
  key: 3,
  class: "w-100"
}, xs = {
  key: 4,
  class: "w-100"
}, ei = {
  key: 5,
  class: "w-100"
}, ti = /* @__PURE__ */ j(
  "br",
  null,
  null,
  -1
  /* HOISTED */
), ni = ["href"], ai = {
  key: 6,
  class: "w-100"
}, ri = { key: 0 }, oi = { key: 1 }, si = { key: 2 };
function ii(e, t, a, n, r, u) {
  var g;
  const i = m("v-chip"), l = m("v-row"), d = m("VcsLabel"), c = m("VcsExtent");
  return y(), V(
    Pe,
    null,
    [
      (g = e.item.keywordList) != null && g.length ? (y(), L(l, {
        key: 0,
        "no-gutters": "",
        class: "w-100"
      }, {
        default: s(() => [
          (y(!0), V(
            Pe,
            null,
            ze(e.item.keywordList, (f) => (y(), L(
              i,
              {
                key: f,
                label: "",
                size: "x-small",
                color: "primary",
                class: "ma-1"
              },
              {
                default: s(() => [
                  b(
                    p(f),
                    1
                    /* TEXT */
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
      })) : E("v-if", !0),
      e.item.description ? (y(), V("span", Ys, [
        o(l, { "no-gutters": "" }, {
          default: s(() => [
            o(d, {
              "html-for": "description",
              class: "font-weight-bold"
            }, {
              default: s(() => [
                b(
                  p(e.$t("dynamicLayer.common.description")),
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
        o(l, {
          "no-gutters": "",
          class: "px-2"
        }, {
          default: s(() => [
            b(
              p(e.item.description),
              1
              /* TEXT */
            )
          ]),
          _: 1
          /* STABLE */
        })
      ])) : E("v-if", !0),
      e.item.accessConstraints ? (y(), V("span", Xs, [
        o(l, { "no-gutters": "" }, {
          default: s(() => [
            o(d, {
              "html-for": "accessConstraints",
              class: "font-weight-bold"
            }, {
              default: s(() => [
                b(
                  p(e.$t("dynamicLayer.info.accessConstraints")),
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
        o(l, {
          "no-gutters": "",
          class: "px-2"
        }, {
          default: s(() => [
            b(
              p(e.item.accessConstraints),
              1
              /* TEXT */
            )
          ]),
          _: 1
          /* STABLE */
        })
      ])) : E("v-if", !0),
      e.item.fees ? (y(), V("span", Qs, [
        o(l, { "no-gutters": "" }, {
          default: s(() => [
            o(d, {
              "html-for": "fees",
              class: "font-weight-bold"
            }, {
              default: s(() => [
                b(
                  p(e.$t("dynamicLayer.info.fees")),
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
        o(l, {
          "no-gutters": "",
          class: "px-2"
        }, {
          default: s(() => [
            b(
              p(e.item.fees),
              1
              /* TEXT */
            )
          ]),
          _: 1
          /* STABLE */
        })
      ])) : E("v-if", !0),
      e.item.extent ? (y(), V("span", xs, [
        o(l, { "no-gutters": "" }, {
          default: s(() => [
            o(d, {
              "html-for": "extent",
              class: "font-weight-bold"
            }, {
              default: s(() => [
                b(
                  p(e.$t("dynamicLayer.info.extent")),
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
        o(l, { "no-gutters": "" }, {
          default: s(() => [
            o(c, {
              disabled: "",
              "model-value": e.item.extent.toJSON()
            }, null, 8, ["model-value"])
          ]),
          _: 1
          /* STABLE */
        })
      ])) : E("v-if", !0),
      e.checkAnyProperty(e.item.attributions) ? (y(), V("span", ei, [
        o(l, { "no-gutters": "" }, {
          default: s(() => [
            o(d, {
              "html-for": "attributions",
              class: "font-weight-bold"
            }, {
              default: s(() => [
                b(
                  p(e.$t("dynamicLayer.info.attributions")),
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
        o(l, {
          "no-gutters": "",
          class: "px-2"
        }, {
          default: s(() => {
            var f, w;
            return [
              j("div", null, [
                b(
                  p((f = e.item.attributions) == null ? void 0 : f.provider) + " ",
                  1
                  /* TEXT */
                ),
                ti,
                (w = e.item.attributions) != null && w.url ? (y(), V("a", {
                  key: 0,
                  href: e.item.attributions.url,
                  target: "_blank"
                }, p(e.$t("dynamicLayer.info.website")), 9, ni)) : E("v-if", !0)
              ])
            ];
          }),
          _: 1
          /* STABLE */
        })
      ])) : E("v-if", !0),
      e.checkAnyProperty(e.item.contact) ? (y(), V("span", ai, [
        o(l, { "no-gutters": "" }, {
          default: s(() => [
            o(d, {
              "html-for": "contact",
              class: "font-weight-bold"
            }, {
              default: s(() => [
                b(
                  p(e.$t("dynamicLayer.info.contact")),
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
        o(l, {
          "no-gutters": "",
          class: "px-2 pb-1"
        }, {
          default: s(() => {
            var f, w, h, S, O, C, M, F, K, B, A, ne, D;
            return [
              j("p", null, [
                b(
                  p((f = e.item.contact) == null ? void 0 : f.person) + p((w = e.item.contact) != null && w.person && ((h = e.item.contact) != null && h.organization) ? " - " : "") + p((S = e.item.contact) == null ? void 0 : S.organization) + " ",
                  1
                  /* TEXT */
                ),
                (O = e.item.contact) != null && O.organization ? (y(), V("br", ri)) : E("v-if", !0),
                b(
                  " " + p((C = e.item.contact) == null ? void 0 : C.position) + " ",
                  1
                  /* TEXT */
                ),
                (M = e.item.contact) != null && M.position ? (y(), V("br", oi)) : E("v-if", !0),
                b(
                  " " + p((F = e.item.contact) == null ? void 0 : F.address) + " ",
                  1
                  /* TEXT */
                ),
                (K = e.item.contact) != null && K.address ? (y(), V("br", si)) : E("v-if", !0),
                b(
                  " " + p((B = e.item.contact) == null ? void 0 : B.city) + p((A = e.item.contact) != null && A.city && ((ne = e.item.contact) != null && ne.country) ? ", " : "") + p((D = e.item.contact) == null ? void 0 : D.country),
                  1
                  /* TEXT */
                )
              ])
            ];
          }),
          _: 1
          /* STABLE */
        })
      ])) : E("v-if", !0)
    ],
    64
    /* STABLE_FRAGMENT */
  );
}
const li = /* @__PURE__ */ X(Hs, [["render", ii]]), ui = { class: "h-100" }, di = { class: "h-100 overflow-y-auto pb-2" }, ci = {
  key: 1,
  class: "pa-1"
}, mi = /* @__PURE__ */ Y({
  __name: "WebdataInformations",
  props: {
    item: { type: Object, required: !0 },
    title: {
      type: String,
      default: (e) => `dynamicLayer.webdata.type.${e.item.type}`
    },
    subtitle: { type: String, default: "" },
    startOpen: { type: Boolean, default: !1 }
  },
  setup(e) {
    return (t, a) => (y(), V("div", ui, [
      o(re(H), {
        "no-gutters": "",
        class: "title pt-1"
      }, {
        default: s(() => [
          b(
            p(t.$t(e.title)),
            1
            /* TEXT */
          )
        ]),
        _: 1
        /* STABLE */
      }),
      o(re(H), {
        "no-gutters": "",
        class: "subtitle"
      }, {
        default: s(() => [
          b(
            p(e.subtitle) + "  ",
            1
            /* TEXT */
          )
        ]),
        _: 1
        /* STABLE */
      }),
      o(re(Xe), {
        heading: "dynamicLayer.info.title",
        expandable: "",
        "start-open": e.startOpen,
        class: "h-100 section"
      }, {
        default: s(() => [
          j("div", di, [
            re(mn)(e.item) ? (y(), L(li, {
              key: 0,
              item: e.item
            }, null, 8, ["item"])) : (y(), V(
              "span",
              ci,
              p(t.$t("dynamicLayer.info.noInfoFor")) + " " + p(e.item.type) + " " + p(t.$t("dynamicLayer.common.layers")) + ". ",
              1
              /* TEXT */
            ))
          ])
        ]),
        _: 1
        /* STABLE */
      }, 8, ["start-open"])
    ]));
  }
}), On = /* @__PURE__ */ X(mi, [["__scopeId", "data-v-b9a82e17"]]), fi = /* @__PURE__ */ Y({
  name: "DynamicColumns",
  __name: "DynamicColumns",
  props: {
    leftCols: { type: Number, default: 4 }
  },
  setup(e) {
    const a = le("vcsApp").plugins.getByKey(U), { activeTab: n, leftPanelActive: r } = a, { mdAndDown: u } = sn(), i = ee(() => r[n.value]);
    function l() {
      r[n.value] = !1;
    }
    return (d, c) => (y(), L(re(H), {
      "no-gutters": "",
      class: "h-100"
    }, {
      default: s(() => [
        o(re(ga), null, {
          default: s(() => [
            la(o(re(ie), {
              cols: e.leftCols,
              class: en(["h-100", { "overlay-left": re(u) }])
            }, {
              default: s(() => [
                Vt(d.$slots, "left", {}, void 0, !0)
              ]),
              _: 3
              /* FORWARDED */
            }, 8, ["cols", "class"]), [
              [ua, !re(u) || i.value]
            ])
          ]),
          _: 3
          /* FORWARDED */
        }),
        !re(u) || i.value ? (y(), L(re(et), {
          key: 0,
          vertical: ""
        })) : E("v-if", !0),
        o(re(ie), {
          cols: re(u) ? 12 : 12 - e.leftCols,
          class: "h-100"
        }, {
          default: s(() => [
            o(re(ya), null, {
              default: s(() => [
                re(u) && i.value ? (y(), V("div", {
                  key: 0,
                  class: "right-overlay",
                  onClick: l
                })) : E("v-if", !0)
              ]),
              _: 1
              /* STABLE */
            }),
            Vt(d.$slots, "right", {}, void 0, !0)
          ]),
          _: 3
          /* FORWARDED */
        }, 8, ["cols"])
      ]),
      _: 3
      /* FORWARDED */
    }));
  }
}), Et = /* @__PURE__ */ X(fi, [["__scopeId", "data-v-db2bdce6"]]), pi = Y({
  name: "WebdataWindow",
  components: {
    VCard: Ke,
    VCardTitle: ha,
    VCol: ie,
    VDivider: et,
    VRow: H,
    VSpacer: va,
    VcsButton: xe,
    VcsCheckbox: Qe,
    VcsFormButton: je,
    VcsLabel: me,
    VcsSelect: Be,
    VcsTextField: Ae,
    VcsTreeview: Zt,
    DynamicColumns: Et,
    DlTreeviewTitle: Rn,
    VcsTreeviewSearchbar: qt,
    WebdataInformations: On
  },
  setup() {
    const e = le("vcsApp"), t = e.plugins.getByKey(U), { leftPanelActive: a } = t, { added: n, selected: r, opened: u } = t.webdata, i = T(""), l = T(!1), d = pt(W.WEBDATA), c = T(t.config.webdata.defaultType), g = T(t.config.webdata.defaultUrl), f = T(!1), w = T('{"authentication": "token"}'), h = T(!1);
    function S(O) {
      try {
        const C = JSON.parse(O);
        return typeof C == "object" && Object.keys(C).length > 0;
      } catch {
        return !1;
      }
    }
    return {
      newSourceType: c,
      newSourceUrl: g,
      newSourceUseAuthentication: f,
      newSourceAuthentication: w,
      added: n,
      opened: u,
      selected: r,
      search: i,
      filterActive: h,
      availableTypes: d,
      isNewSourceLoading: l,
      getNonAddedChildrenLength: gt,
      addLayer: ke.bind(null, e),
      addNested: Tn.bind(null, e),
      removeLayer: Ne.bind(null, e),
      removeSource: An.bind(null, e),
      addNewSource() {
        r.value = void 0, a[W.WEBDATA] = !1;
      },
      editParameters(O) {
        t.activeTab.value = W.ADDED, t.addedSelected.value = O, t.leftPanelActive[W.ADDED] = !1;
      },
      filter(O) {
        return sr(O, (C) => !!C.isAddedToMap);
      },
      getSubtitle(O) {
        return mn(O) ? O.name : De(O.url, O.type);
      },
      isAuthValid: S,
      async addSource() {
        if (!(!c.value || !g.value || l.value)) {
          if (f.value && !S(w.value)) {
            e.notifier.add({
              type: he.ERROR,
              message: "dynamicLayer.errors.invalidAuthentication"
            });
            return;
          }
          h.value = !1;
          try {
            l.value = !0;
            const O = De(
              g.value,
              c.value
            );
            if (n.value.some((K) => K.url === O)) {
              e.notifier.add({
                type: he.ERROR,
                message: "dynamicLayer.errors.urlAlreadyAdded"
              }), l.value = !1;
              return;
            }
            const C = f.value ? JSON.parse(w.value) : void 0, M = {
              url: g.value,
              type: c.value,
              headers: C
            }, F = await Ct(e, M);
            r.value = F, u.value = [F.name], n.value.push(F), t.leftPanelActive[W.WEBDATA] = !0;
          } catch (O) {
            e.notifier.add({
              type: he.ERROR,
              message: O
            });
          }
          l.value = !1;
        }
      }
    };
  }
}), gi = {
  key: 0,
  class: "h-100"
}, yi = { class: "d-flex justify-end gc-2 pa-2 w-100" }, vi = {
  key: 3,
  class: "d-flex gc-2"
}, hi = { class: "d-flex justify-end pt-3" };
function bi(e, t, a, n, r, u) {
  const i = m("VcsTreeviewSearchbar"), l = m("v-col"), d = m("VcsButton"), c = m("v-row"), g = m("DlTreeviewTitle"), f = m("VcsTreeview"), w = m("WebdataInformations"), h = m("VDivider"), S = m("VcsFormButton"), O = m("VSpacer"), C = m("v-card-title"), M = m("VcsLabel"), F = m("VcsSelect"), K = m("VcsTextField"), B = m("VcsCheckbox"), A = m("v-card"), ne = m("DynamicColumns");
  return y(), L(ne, null, {
    left: s(() => [
      o(c, { "no-gutters": "" }, {
        default: s(() => [
          o(l, { cols: "10" }, {
            default: s(() => [
              o(i, {
                modelValue: e.search,
                "onUpdate:modelValue": t[0] || (t[0] = (D) => e.search = D)
              }, null, 8, ["modelValue"])
            ]),
            _: 1
            /* STABLE */
          }),
          o(l, {
            cols: "2",
            class: "bg-base-lighten-3 d-flex align-center justify-end px-2 gc-2"
          }, {
            default: s(() => [
              o(d, {
                icon: "mdi-filter",
                tooltip: "dynamicLayer.actions.filter.showAddedOnly",
                active: e.filterActive,
                onClick: t[1] || (t[1] = (D) => e.filterActive = !e.filterActive)
              }, null, 8, ["active"]),
              o(d, {
                icon: "$vcsPlus",
                tooltip: "dynamicLayer.actions.source.addNew",
                active: !e.selected,
                onClick: e.addNewSource
              }, null, 8, ["active", "onClick"])
            ]),
            _: 1
            /* STABLE */
          })
        ]),
        _: 1
        /* STABLE */
      }),
      o(c, {
        "no-gutters": "",
        style: { height: "486px" }
      }, {
        default: s(() => [
          o(f, {
            opened: e.opened,
            "onUpdate:opened": t[2] || (t[2] = (D) => e.opened = D),
            class: "treeview h-100 w-100 overflow-y-auto",
            items: e.filterActive ? e.filter(e.added) : e.added,
            search: e.search
          }, {
            title: s(({ item: D }) => [
              o(g, {
                title: D.title,
                active: e.selected === D,
                onClick: (_) => e.selected = D
              }, null, 8, ["title", "active", "onClick"])
            ]),
            _: 1
            /* STABLE */
          }, 8, ["opened", "items", "search"])
        ]),
        _: 1
        /* STABLE */
      })
    ]),
    right: s(() => [
      e.selected ? (y(), V("span", gi, [
        (y(), L(w, {
          key: e.selected.name,
          item: e.selected,
          title: e.selected.title,
          subtitle: e.getSubtitle(e.selected),
          "start-open": "",
          class: "button-margin"
        }, null, 8, ["item", "title", "subtitle"])),
        o(c, {
          "no-gutters": "",
          class: "fixed-bottom d-flex justify-end"
        }, {
          default: s(() => [
            o(h),
            j("span", yi, [
              e.selected.children.length ? (y(), L(S, {
                key: 0,
                variant: "filled",
                disabled: !e.getNonAddedChildrenLength(e.selected),
                onClick: t[3] || (t[3] = (D) => e.addNested(e.selected))
              }, {
                default: s(() => [
                  b(
                    p(e.$t("dynamicLayer.actions.layer.addAll")) + " " + p(e.getNonAddedChildrenLength(e.selected) ? `(${e.getNonAddedChildrenLength(e.selected)})` : ""),
                    1
                    /* TEXT */
                  )
                ]),
                _: 1
                /* STABLE */
              }, 8, ["disabled"])) : E("v-if", !0),
              e.selected.isRootElement ? (y(), L(S, {
                key: 1,
                onClick: t[4] || (t[4] = (D) => e.removeSource(e.selected))
              }, {
                default: s(() => [
                  b(
                    p(e.$t("dynamicLayer.actions.source.delete")),
                    1
                    /* TEXT */
                  )
                ]),
                _: 1
                /* STABLE */
              })) : E("v-if", !0),
              !e.selected.children.length && e.selected.isAddedToMap ? (y(), L(O, { key: 2 })) : E("v-if", !0),
              !e.selected.children.length && e.selected.isAddedToMap ? (y(), V("span", vi, [
                o(S, {
                  variant: "filled",
                  onClick: t[5] || (t[5] = (D) => e.editParameters(e.selected))
                }, {
                  default: s(() => [
                    b(
                      p(e.$t("dynamicLayer.actions.edit")),
                      1
                      /* TEXT */
                    )
                  ]),
                  _: 1
                  /* STABLE */
                }),
                o(S, {
                  onClick: t[6] || (t[6] = (D) => e.removeLayer(e.selected))
                }, {
                  default: s(() => [
                    b(
                      p(e.$t("dynamicLayer.actions.layer.remove")),
                      1
                      /* TEXT */
                    )
                  ]),
                  _: 1
                  /* STABLE */
                })
              ])) : e.selected.children.length ? E("v-if", !0) : (y(), L(S, {
                key: 4,
                variant: "filled",
                onClick: t[7] || (t[7] = (D) => e.addLayer(e.selected))
              }, {
                default: s(() => [
                  b(
                    p(e.$t("dynamicLayer.actions.layer.add")),
                    1
                    /* TEXT */
                  )
                ]),
                _: 1
                /* STABLE */
              }))
            ])
          ]),
          _: 1
          /* STABLE */
        })
      ])) : (y(), L(c, {
        key: 1,
        "no-gutters": "",
        class: "h-75"
      }, {
        default: s(() => [
          o(l, {
            cols: "8",
            offset: "2",
            class: "d-flex align-center"
          }, {
            default: s(() => [
              o(A, {
                flat: "",
                class: "w-100"
              }, {
                default: s(() => [
                  o(C, { class: "font-weight-bold d-flex justify-center text-decoration-underline" }, {
                    default: s(() => [
                      b(
                        p(e.$t("dynamicLayer.webdata.add.title")),
                        1
                        /* TEXT */
                      )
                    ]),
                    _: 1
                    /* STABLE */
                  }),
                  o(c, {
                    "no-gutters": "",
                    class: "w-100 pt-3"
                  }, {
                    default: s(() => [
                      o(M, { "html-for": "type" }, {
                        default: s(() => [
                          b(
                            p(e.$t("dynamicLayer.webdata.add.type")),
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
                  o(c, {
                    "no-gutters": "",
                    class: "w-100"
                  }, {
                    default: s(() => [
                      o(F, {
                        id: "type",
                        modelValue: e.newSourceType,
                        "onUpdate:modelValue": t[8] || (t[8] = (D) => e.newSourceType = D),
                        items: e.availableTypes
                      }, null, 8, ["modelValue", "items"])
                    ]),
                    _: 1
                    /* STABLE */
                  }),
                  o(c, {
                    "no-gutters": "",
                    class: "w-100 pt-3"
                  }, {
                    default: s(() => [
                      o(M, { "html-for": "url" }, {
                        default: s(() => [
                          b(
                            p(e.$t("dynamicLayer.webdata.add.url")),
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
                  o(c, {
                    "no-gutters": "",
                    class: "w-100"
                  }, {
                    default: s(() => [
                      o(K, {
                        id: "url",
                        modelValue: e.newSourceUrl,
                        "onUpdate:modelValue": t[9] || (t[9] = (D) => e.newSourceUrl = D),
                        placeholder: "URL",
                        onKeyup: tn(e.addSource, ["enter"])
                      }, null, 8, ["modelValue", "onKeyup"])
                    ]),
                    _: 1
                    /* STABLE */
                  }),
                  o(c, {
                    "no-gutters": "",
                    class: "w-100 pt-3"
                  }, {
                    default: s(() => [
                      o(B, {
                        modelValue: e.newSourceUseAuthentication,
                        "onUpdate:modelValue": t[10] || (t[10] = (D) => e.newSourceUseAuthentication = D),
                        label: "dynamicLayer.webdata.add.useAuthentication"
                      }, null, 8, ["modelValue"])
                    ]),
                    _: 1
                    /* STABLE */
                  }),
                  e.newSourceUseAuthentication ? (y(), L(c, {
                    key: 0,
                    "no-gutters": "",
                    class: "w-100"
                  }, {
                    default: s(() => [
                      o(K, {
                        modelValue: e.newSourceAuthentication,
                        "onUpdate:modelValue": t[11] || (t[11] = (D) => e.newSourceAuthentication = D),
                        label: e.$t("dynamicLayer.webdata.add.authentication"),
                        autofocus: "",
                        rules: [e.isAuthValid]
                      }, null, 8, ["modelValue", "label", "rules"])
                    ]),
                    _: 1
                    /* STABLE */
                  })) : E("v-if", !0),
                  j("span", hi, [
                    o(S, {
                      variant: "filled",
                      loading: e.isNewSourceLoading,
                      disabled: !e.newSourceType || !e.newSourceUrl || e.isNewSourceLoading || e.newSourceUseAuthentication && !e.newSourceAuthentication,
                      onClick: e.addSource
                    }, {
                      default: s(() => [
                        b(
                          p(e.$t("dynamicLayer.actions.source.add")),
                          1
                          /* TEXT */
                        )
                      ]),
                      _: 1
                      /* STABLE */
                    }, 8, ["loading", "disabled", "onClick"])
                  ])
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
      }))
    ]),
    _: 1
    /* STABLE */
  });
}
const Si = /* @__PURE__ */ X(pi, [["render", bi], ["__scopeId", "data-v-6c5b5782"]]), wi = Y({
  name: "CataloguesFilter",
  components: {
    VCol: ie,
    VRow: H,
    VcsButton: xe,
    VcsTextField: Ae,
    VcsSelect: Be
  },
  props: {
    facet: {
      type: Object,
      required: !0
    },
    selection: { type: Array, required: !0 },
    opened: { type: Boolean, required: !0 }
  },
  emits: ["filter", "toggleFacet"],
  setup(e, { emit: t }) {
    const a = T("");
    return {
      filteredItems: ee(
        () => a.value ? e.facet.values.filter(
          (r) => r.title.toLowerCase().includes(a.value.toLowerCase())
        ) : e.facet.values
      ),
      search: a,
      apply(r) {
        t("filter", e.facet.id, [r]), t("toggleFacet", "");
      },
      reset() {
        t("filter", e.facet.id, []);
      }
    };
  }
});
function Ti(e, t, a, n, r, u) {
  const i = m("VcsTextField"), l = m("VcsButton"), d = m("v-row"), c = m("VcsSelect"), g = m("v-col");
  return y(), L(d, {
    "no-gutters": "",
    class: "w-100"
  }, {
    default: s(() => [
      o(g, {
        cols: e.selection.length ? 11 : 12
      }, {
        default: s(() => [
          o(c, {
            "item-value": "id",
            items: e.filteredItems,
            label: e.facet.title,
            "model-value": e.selection,
            "menu-props": { origin: "overlap", modelValue: e.opened },
            disabled: !!e.selection.length,
            onClick: t[2] || (t[2] = (f) => e.$emit("toggleFacet", e.facet.id)),
            "onUpdate:modelValue": e.apply
          }, nn({
            _: 2
            /* DYNAMIC */
          }, [
            e.facet.values.length > 1 ? {
              name: "prepend-item",
              fn: s(() => [
                o(d, {
                  "no-gutters": "",
                  class: "px-2 pt-1"
                }, {
                  default: s(() => [
                    o(i, {
                      modelValue: e.search,
                      "onUpdate:modelValue": t[0] || (t[0] = (f) => e.search = f),
                      autofocus: "",
                      placeholder: `${e.$t("dynamicLayer.common.filter")} ${e.facet.title}`,
                      clearable: ""
                    }, null, 8, ["modelValue", "placeholder"]),
                    o(l, {
                      class: "pl-2 pt-2",
                      icon: "mdi-window-close",
                      tooltip: e.$t("dynamicLayer.actions.cancel"),
                      onClick: t[1] || (t[1] = (f) => e.$emit("toggleFacet", ""))
                    }, null, 8, ["tooltip"])
                  ]),
                  _: 1
                  /* STABLE */
                })
              ]),
              key: "0"
            } : void 0
          ]), 1032, ["items", "label", "model-value", "menu-props", "disabled", "onUpdate:modelValue"])
        ]),
        _: 1
        /* STABLE */
      }, 8, ["cols"]),
      e.selection.length ? (y(), L(g, {
        key: 0,
        cols: "1",
        class: "d-flex align-center px-1"
      }, {
        default: s(() => [
          o(l, {
            icon: "mdi-filter-remove",
            tooltip: e.$t("dynamicLayer.actions.filter.reset"),
            onClick: e.reset
          }, null, 8, ["tooltip", "onClick"])
        ]),
        _: 1
        /* STABLE */
      })) : E("v-if", !0)
    ]),
    _: 1
    /* STABLE */
  });
}
const Ai = /* @__PURE__ */ X(wi, [["render", Ti]]);
function zt(e) {
  return e.map((t) => ({ name: t.id, title: t.title }));
}
const Li = Y({
  name: "DatasetsList",
  components: {
    VCard: Ke,
    VCol: ie,
    VIcon: wa,
    VMenu: Sa,
    VPagination: ba,
    VRow: H,
    VcsActionButtonList: Ht,
    VcsList: Jt,
    VcsButton: xe,
    VcsTreeviewSearchbar: qt,
    CatalogueFilter: Ai
  },
  props: {
    source: {
      type: Object,
      required: !0
    },
    modelValue: {
      type: Object,
      default: void 0
    }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    var ne, D;
    const a = le("vcsApp"), n = a.plugins.getByKey(U), { locale: r } = a, { itemsPerPage: u } = n.config.catalogues, i = T(e.source.data), l = Mn(
      e,
      "modelValue",
      (_, Z) => {
        t("update:modelValue", Z);
      }
    ), d = T(""), c = T(!1), g = T(!1), f = T(
      e.source.defaultSorting ?? ((ne = Dt[e.source.type]) == null ? void 0 : ne[0])
    ), w = (D = Dt[e.source.type]) == null ? void 0 : D.map(
      (_) => G({
        active: ee(() => f.value === _),
        name: `dynamicLayer.catalogues.sortBy.${_}`,
        callback: () => {
          f.value = _;
        }
      })
    ), h = T(zt(i.value.datasets)), S = T(1), O = T(!0), C = ee({
      get: () => l.value ? [h.value.find((_) => {
        var Z;
        return _.name === ((Z = l.value) == null ? void 0 : Z.id);
      })] : [],
      set(_) {
        const Z = _ != null && _[0] ? i.value.datasets.find((de) => de.id === _[0].name) : void 0;
        l.value = Z, _ != null && _.length && O.value && (n.leftPanelActive[W.CATALOGUES] = !1);
      }
    }), M = Object.fromEntries(
      i.value.facets.map((_) => [_.id, []])
    ), F = T(), K = T(!1), B = n.config.catalogues.presets.find(
      ({ url: _ }) => _ === e.source.url
    );
    async function A(_ = !1, Z = 1) {
      g.value = !0, _ || (S.value = 1);
      const de = Object.fromEntries(
        Object.entries(M).filter((te) => te[1].length > 0).map((te) => [te[0], te[1][0]])
      ), z = await hn({
        type: e.source.type,
        url: e.source.url,
        locale: r,
        facets: de,
        itemsPerPage: u,
        filter: e.source.filter,
        sortBy: f.value,
        page: S.value - 1,
        query: d.value,
        aggregationKeys: B == null ? void 0 : B.aggregationKeys
      }).catch(() => {
        K.value = !0, S.value = Z, a.notifier.add({
          type: he.ERROR,
          message: `${a.vueI18n.t("dynamicLayer.errors.fetchingCatalogue")} ${e.source.url}`
        });
      }).finally(() => {
        g.value = !1;
      });
      z && (i.value = z, h.value = zt(i.value.datasets), C.value = void 0);
    }
    return se(f, async () => {
      await A();
    }), se(S, async (_, Z) => {
      if (K.value) {
        K.value = !1;
        return;
      }
      await A(!0, Z);
    }), {
      locale: a.locale,
      data: i,
      page: S,
      itemsPerPage: u,
      loading: g,
      search: d,
      searchLoading: c,
      sortByActions: w,
      showDatasetDescription: O,
      datasets: h,
      arraySelected: C,
      filters: M,
      openedFacet: F,
      facets: ee(
        () => i.value.facets.filter(
          ({ id: _ }) => !Object.keys(e.source.filter ?? {}).includes(_)
        )
      ),
      async updateFilters(_, Z) {
        M[_] = Z, await A();
      },
      async updateSearch() {
        await A();
      },
      async clearSearch() {
        c.value = !0, await an(), await A(), c.value = !1;
      }
    };
  }
}), Ci = { class: "d-block h-100" }, Ei = {
  key: 0,
  class: "h-100 d-flex align-center justify-center"
};
function $i(e, t, a, n, r, u) {
  const i = m("VcsTreeviewSearchbar"), l = m("VcsActionButtonList"), d = m("CatalogueFilter"), c = m("v-row"), g = m("v-card"), f = m("v-menu"), w = m("VcsButton"), h = m("v-col"), S = m("v-icon"), O = m("VcsList"), C = m("VPagination");
  return y(), V("span", Ci, [
    o(c, { "no-gutters": "" }, {
      default: s(() => [
        o(h, {
          cols: "12",
          class: "d-flex align-center bg-base-lighten-3 px-1"
        }, {
          default: s(() => {
            var M;
            return [
              o(i, {
                modelValue: e.search,
                "onUpdate:modelValue": t[0] || (t[0] = (F) => e.search = F),
                class: "w-100",
                loading: e.searchLoading,
                placeholder: `${e.$t("dynamicLayer.catalogues.searchAmong")} ${e.data.count.toLocaleString(e.locale)} ${e.$t("dynamicLayer.catalogues.datasets")}`,
                "onClick:clear": e.clearSearch,
                onKeydown: tn(e.updateSearch, ["enter"])
              }, null, 8, ["modelValue", "loading", "placeholder", "onClick:clear", "onKeydown"]),
              (M = e.sortByActions) != null && M.length ? (y(), L(l, {
                key: 0,
                class: "px-1",
                actions: e.sortByActions,
                "overflow-icon": "mdi-sort",
                "overflow-count": 0
              }, null, 8, ["actions"])) : E("v-if", !0),
              e.facets.length ? (y(), L(w, {
                key: 1,
                class: "pl-2",
                active: Object.values(e.filters).some((F) => F.length),
                icon: "mdi-filter",
                tooltip: e.$t("dynamicLayer.common.filter")
              }, {
                default: s(() => [
                  o(f, {
                    activator: "parent",
                    "close-on-content-click": !1,
                    "menu-props": { closeOnContentClick: !0 },
                    location: "end"
                  }, {
                    default: s(() => [
                      o(g, { "min-width": "300" }, {
                        default: s(() => [
                          (y(!0), V(
                            Pe,
                            null,
                            ze(e.facets, (F) => (y(), L(
                              c,
                              {
                                key: F.id,
                                "no-gutters": "",
                                class: "px-2 py-1"
                              },
                              {
                                default: s(() => [
                                  o(d, {
                                    facet: F,
                                    selection: e.filters[F.id],
                                    opened: e.openedFacet === F.id,
                                    onFilter: e.updateFilters,
                                    onToggleFacet: t[1] || (t[1] = (K) => e.openedFacet = K)
                                  }, null, 8, ["facet", "selection", "opened", "onFilter"])
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
                      })
                    ]),
                    _: 1
                    /* STABLE */
                  })
                ]),
                _: 1
                /* STABLE */
              }, 8, ["active", "tooltip"])) : E("v-if", !0)
            ];
          }),
          _: 1
          /* STABLE */
        })
      ]),
      _: 1
      /* STABLE */
    }),
    e.loading ? (y(), V("div", Ei, [
      o(S, {
        size: "2em",
        color: "primary",
        icon: "$vcsProgress"
      })
    ])) : (y(), L(c, {
      key: 1,
      "no-gutters": ""
    }, {
      default: s(() => [
        o(O, {
          modelValue: e.arraySelected,
          "onUpdate:modelValue": t[2] || (t[2] = (M) => e.arraySelected = M),
          selectable: "",
          "single-select": "",
          "return-object": "",
          items: e.datasets
        }, null, 8, ["modelValue", "items"])
      ]),
      _: 1
      /* STABLE */
    })),
    o(c, {
      "no-gutters": "",
      class: "d-flex justify-center"
    }, {
      default: s(() => [
        o(C, {
          modelValue: e.page,
          "onUpdate:modelValue": t[3] || (t[3] = (M) => e.page = M),
          class: "w-100",
          "prev-icon": "mdi-chevron-left",
          "next-icon": "mdi-chevron-right",
          "active-color": "primary",
          density: "compact",
          length: Math.ceil(e.data.count / e.itemsPerPage),
          "total-visible": "5"
        }, null, 8, ["modelValue", "length"])
      ]),
      _: 1
      /* STABLE */
    })
  ]);
}
const Vi = /* @__PURE__ */ X(Li, [["render", $i], ["__scopeId", "data-v-078a0b51"]]), _i = Y({
  name: "DistributionDetails",
  components: {
    VCard: Ke,
    VDialog: on,
    VRow: H,
    VcsFormButton: je,
    VcsLabel: me,
    VcsTreeview: Zt,
    DlTreeviewTitle: Rn
  },
  props: {
    columns: { type: Array, required: !0 },
    distribution: {
      type: Object,
      required: !0
    }
  },
  setup(e) {
    const t = le("vcsApp"), a = t.plugins.getByKey(U), n = T(!1), r = T();
    async function u(i) {
      n.value = !0;
      const l = await Gr(
        t,
        i.accessUrl,
        i.type,
        i.id,
        i.title,
        !!a.state.entry
      );
      n.value = !1, r.value = l;
    }
    return a.state.entry && a.state.entry.distrib === e.distribution.id && u(e.distribution).then(() => {
      delete a.state.entry;
    }).catch((i) => {
      t.notifier.add({
        type: he.ERROR,
        message: `${t.vueI18n.t("dynamicLayer.errors.addingLayer")} ${e.distribution.title}: ${String(i)}`
      });
    }), {
      plugin: a,
      loading: n,
      chooseLayerOfItem: r,
      addToMap: u,
      addNbs: Br.bind(null, t)
    };
  }
}), Pi = ["colspan"], Ii = {
  "no-gutters": "",
  class: "d-flex justify-end gc-2 font-italic"
}, Ri = { key: 0 }, Oi = { class: "w-100 d-inline-block text-break" }, Di = { class: "d-flex gc-2 justify-end py-2" }, ki = { key: 1 }, Ni = { class: "pa-2" }, Mi = { key: 0 }, Ui = { class: "font-italic" }, Fi = { key: 2 };
function Wi(e, t, a, n, r, u) {
  const i = m("VcsLabel"), l = m("v-row"), d = m("VcsFormButton"), c = m("DlTreeviewTitle"), g = m("VcsTreeview"), f = m("v-card"), w = m("v-dialog");
  return y(), V("tr", null, [
    j("td", {
      colspan: e.columns.length
    }, [
      j(
        "span",
        Ii,
        " id: " + p(e.distribution.id),
        1
        /* TEXT */
      ),
      e.distribution.description ? (y(), V("span", Ri, [
        o(l, { "no-gutters": "" }, {
          default: s(() => [
            o(i, {
              "html-for": "description",
              class: "font-weight-bold"
            }, {
              default: s(() => [
                b(
                  p(e.$t("dynamicLayer.common.description")),
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
        o(l, {
          "no-gutters": "",
          class: "px-2 w-100"
        }, {
          default: s(() => [
            j(
              "span",
              Oi,
              p(e.distribution.description),
              1
              /* TEXT */
            )
          ]),
          _: 1
          /* STABLE */
        })
      ])) : E("v-if", !0),
      j("div", Di, [
        e.distribution.downloadUrl ? (y(), L(d, {
          key: 0,
          download: "",
          href: e.distribution.downloadUrl,
          target: "_blank"
        }, {
          default: s(() => [
            b(
              p(e.$t("dynamicLayer.actions.download")),
              1
              /* TEXT */
            )
          ]),
          _: 1
          /* STABLE */
        }, 8, ["href"])) : E("v-if", !0),
        e.distribution.accessUrl ? (y(), V("span", ki, [
          e.distribution.type ? (y(), L(d, {
            key: 1,
            variant: "filled",
            loading: e.loading,
            onClick: t[0] || (t[0] = (h) => e.addToMap(e.distribution))
          }, {
            default: s(() => [
              b(
                p(e.$t("dynamicLayer.actions.add")),
                1
                /* TEXT */
              )
            ]),
            _: 1
            /* STABLE */
          }, 8, ["loading"])) : (y(), L(d, {
            key: 0,
            variant: "filled",
            target: "_blank",
            href: e.distribution.accessUrl
          }, {
            default: s(() => [
              b(
                p(e.$t("dynamicLayer.actions.access")),
                1
                /* TEXT */
              )
            ]),
            _: 1
            /* STABLE */
          }, 8, ["href"])),
          o(w, {
            "model-value": !!e.chooseLayerOfItem,
            width: "400",
            onAfterLeave: t[1] || (t[1] = (h) => e.chooseLayerOfItem = void 0)
          }, {
            default: s(() => [
              o(f, null, {
                default: s(() => [
                  j("span", Ni, [
                    b(
                      p(e.$t("dynamicLayer.catalogues.chooseLayersToAdd")) + " ",
                      1
                      /* TEXT */
                    ),
                    e.distribution.title ? (y(), V("p", Mi, [
                      b(
                        p(e.$t("dynamicLayer.catalogues.selectedDistributionName")) + " ",
                        1
                        /* TEXT */
                      ),
                      j(
                        "span",
                        Ui,
                        p(e.distribution.title),
                        1
                        /* TEXT */
                      ),
                      b(". ")
                    ])) : E("v-if", !0)
                  ]),
                  o(g, {
                    "show-searchbar": "",
                    items: [e.chooseLayerOfItem],
                    "open-all": "",
                    class: "treeview"
                  }, {
                    title: s(({ item: h }) => [
                      o(c, {
                        title: h.title
                      }, null, 8, ["title"])
                    ]),
                    _: 1
                    /* STABLE */
                  }, 8, ["items"])
                ]),
                _: 1
                /* STABLE */
              })
            ]),
            _: 1
            /* STABLE */
          }, 8, ["model-value"])
        ])) : e.distribution.featureProperties ? (y(), V("span", Fi, [
          o(d, {
            variant: "filled",
            loading: e.loading,
            onClick: t[2] || (t[2] = (h) => e.addNbs(e.distribution))
          }, {
            default: s(() => [
              b(
                p(e.$t("dynamicLayer.actions.add")),
                1
                /* TEXT */
              )
            ]),
            _: 1
            /* STABLE */
          }, 8, ["loading"])
        ])) : E("v-if", !0)
      ])
    ], 8, Pi)
  ]);
}
const Bi = /* @__PURE__ */ X(_i, [["render", Wi], ["__scopeId", "data-v-b8b12ab6"]]);
function Kt(e) {
  if (e.format)
    return e.format;
  if (e.downloadUrl)
    try {
      return new URL(e.downloadUrl).pathname.slice(
        e.downloadUrl.lastIndexOf(".") + 1
      );
    } catch {
      return "";
    }
  return "";
}
function ji(e = []) {
  const t = [
    {
      title: "dynamicLayer.common.title",
      value: (a) => a.title ?? a.id,
      cellProps: { nowrap: !1 },
      nowrap: !0,
      key: "title",
      sortable: !0
    }
  ];
  return e.some(Kt) && t.push({
    title: "dynamicLayer.common.format",
    value: (a) => Kt(a),
    sortable: !0,
    cellProps: { nowrap: !1 },
    nowrap: !0,
    key: "format"
  }), e.some((a) => a.modified) ? t.push({
    title: "dynamicLayer.info.modified",
    cellProps: { nowrap: !0 },
    nowrap: !0,
    key: "modified",
    value: (a) => a.modified ?? "",
    sortable: !0
  }) : e.some((a) => a.created) && t.push({
    title: "dynamicLayer.info.created",
    cellProps: { nowrap: !0 },
    nowrap: !0,
    key: "created",
    value: (a) => a.created ?? "",
    sortable: !0
  }), e.some((a) => a.license) && t.push({
    title: "dynamicLayer.info.license",
    value: (a) => a.license ?? "",
    cellProps: { nowrap: !1 },
    nowrap: !0,
    key: "license",
    sortable: !0
  }), t;
}
const zi = Y({
  name: "DatasetDetails",
  components: {
    VChip: rn,
    VRow: H,
    VcsDataTable: Un,
    VcsFormSection: Xe,
    VcsLabel: me,
    DistributionDetails: Bi
  },
  props: {
    dataset: {
      type: Object,
      required: !0
    }
  },
  setup(e) {
    const t = le("vcsApp"), a = t.plugins.getByKey(U), { expandedDistributionIds: n } = a.catalogues, { locale: r } = t, u = T(e.dataset.distributions ?? []), i = T(ji(u.value)), l = T(
      e.dataset.keywords && e.dataset.keywords.length <= 4
    );
    return {
      expandedDistributionIds: n,
      locale: r,
      distributions: u,
      headers: i,
      showAllKeywords: l
    };
  }
}), Ki = {
  class: "py-1 d-flex flex-column",
  style: { "max-height": "100%" }
}, Gi = { class: "d-inline-block w-100 flex-grow-1 overflow-y-auto" }, qi = { class: "text-truncate pr-1" }, Zi = { class: "font-italic" }, Ji = ["href"], Hi = {
  key: 1,
  class: "text-decoration-underline"
}, Yi = { class: "text-truncate pr-1" }, Xi = { class: "font-italic" }, Qi = ["href"], xi = {
  key: 1,
  class: "text-decoration-underline"
}, el = { class: "text-truncate pr-1" }, tl = { class: "font-italic" }, nl = ["href"], al = {
  key: 1,
  class: "text-decoration-underline"
}, rl = { key: 0 }, ol = { class: "text-decoration-underline" }, sl = { class: "font-italic" }, il = { key: 1 }, ll = { class: "text-decoration-underline" }, ul = { class: "font-italic" }, dl = {
  key: 1,
  class: "w-100 pb-1"
}, cl = { key: 0 };
function ml(e, t, a, n, r, u) {
  const i = m("v-row"), l = m("v-chip"), d = m("VcsLabel"), c = m("VcsFormSection"), g = m("DistributionDetails"), f = m("VcsDataTable");
  return y(), V("span", Ki, [
    o(i, {
      "no-gutters": "",
      class: "font-weight-black d-flex justify-center text-center py-1"
    }, {
      default: s(() => [
        b(
          p(e.dataset.title),
          1
          /* TEXT */
        )
      ]),
      _: 1
      /* STABLE */
    }),
    j("div", Gi, [
      e.dataset.source ? (y(), L(i, {
        key: 0,
        "no-gutters": "",
        class: "d-flex align-center justify-center gc-1"
      }, {
        default: s(() => [
          j("span", qi, [
            b(
              p(e.$t("dynamicLayer.info.source")) + ": ",
              1
              /* TEXT */
            ),
            j("span", Zi, [
              e.dataset.source.url ? (y(), V("a", {
                key: 0,
                href: e.dataset.source.url,
                target: "_blank"
              }, p(e.dataset.source.title), 9, Ji)) : (y(), V(
                "span",
                Hi,
                p(e.dataset.source.title),
                1
                /* TEXT */
              ))
            ])
          ])
        ]),
        _: 1
        /* STABLE */
      })) : E("v-if", !0),
      e.dataset.publisher ? (y(), L(i, {
        key: 1,
        "no-gutters": "",
        class: "d-flex align-center justify-center gc-1"
      }, {
        default: s(() => [
          j("span", Yi, [
            b(
              p(e.$t("dynamicLayer.info.publisher")) + ": ",
              1
              /* TEXT */
            ),
            j("span", Xi, [
              e.dataset.publisher.url ? (y(), V("a", {
                key: 0,
                href: e.dataset.publisher.url,
                target: "_blank"
              }, p(e.dataset.publisher.title), 9, Qi)) : (y(), V(
                "span",
                xi,
                p(e.dataset.publisher.title),
                1
                /* TEXT */
              ))
            ])
          ])
        ]),
        _: 1
        /* STABLE */
      })) : E("v-if", !0),
      e.dataset.owner ? (y(), L(i, {
        key: 2,
        "no-gutters": "",
        class: "d-flex align-center justify-center gc-1"
      }, {
        default: s(() => [
          j("span", el, [
            b(
              p(e.$t("dynamicLayer.info.owner")) + ": ",
              1
              /* TEXT */
            ),
            j("span", tl, [
              e.dataset.owner.url ? (y(), V("a", {
                key: 0,
                href: e.dataset.owner.url,
                target: "_blank"
              }, p(e.dataset.owner.title), 9, nl)) : (y(), V(
                "span",
                al,
                p(e.dataset.owner.title),
                1
                /* TEXT */
              ))
            ])
          ])
        ]),
        _: 1
        /* STABLE */
      })) : E("v-if", !0),
      o(i, {
        "no-gutters": "",
        class: "d-flex justify-center gc-4"
      }, {
        default: s(() => [
          e.dataset.created ? (y(), V("span", rl, [
            j(
              "span",
              ol,
              p(e.$t("dynamicLayer.info.created")) + ":",
              1
              /* TEXT */
            ),
            j(
              "span",
              sl,
              " " + p(e.dataset.created),
              1
              /* TEXT */
            )
          ])) : E("v-if", !0),
          e.dataset.modified ? (y(), V("span", il, [
            j(
              "span",
              ll,
              p(e.$t("dynamicLayer.info.modified")) + ":",
              1
              /* TEXT */
            ),
            j(
              "span",
              ul,
              " " + p(e.dataset.modified),
              1
              /* TEXT */
            )
          ])) : E("v-if", !0)
        ]),
        _: 1
        /* STABLE */
      }),
      o(c, {
        heading: "dynamicLayer.info.title",
        expandable: "",
        "start-open": ""
      }, {
        default: s(() => {
          var w;
          return [
            (w = e.dataset.keywords) != null && w.length ? (y(), L(i, {
              key: 0,
              "no-gutters": "",
              class: "w-100 pt-1"
            }, {
              default: s(() => [
                e.dataset.keywords.length > 3 ? (y(), L(l, {
                  key: 0,
                  size: "x-small",
                  color: "primary",
                  variant: "outlined",
                  class: "ma-1",
                  onClick: t[0] || (t[0] = (h) => e.showAllKeywords = !e.showAllKeywords)
                }, {
                  default: s(() => [
                    b(
                      p(e.showAllKeywords ? e.$t("dynamicLayer.actions.collapse") : `${e.$t("dynamicLayer.common.show")} ${e.dataset.keywords.length} ${e.$t("dynamicLayer.common.more")}`),
                      1
                      /* TEXT */
                    )
                  ]),
                  _: 1
                  /* STABLE */
                })) : E("v-if", !0),
                (y(!0), V(
                  Pe,
                  null,
                  ze(e.dataset.keywords.slice(
                    e.showAllKeywords ? void 0 : -1
                  ), (h) => (y(), L(
                    l,
                    {
                      key: h,
                      size: "x-small",
                      color: "primary",
                      class: "ma-1"
                    },
                    {
                      default: s(() => [
                        b(
                          p(h),
                          1
                          /* TEXT */
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
            })) : E("v-if", !0),
            e.dataset.description ? (y(), V("span", dl, [
              o(i, { "no-gutters": "" }, {
                default: s(() => [
                  o(d, {
                    "html-for": "description",
                    class: "font-weight-bold"
                  }, {
                    default: s(() => [
                      b(
                        p(e.$t("dynamicLayer.common.description")),
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
              o(i, {
                "no-gutters": "",
                class: "px-2"
              }, {
                default: s(() => [
                  b(
                    p(e.dataset.description),
                    1
                    /* TEXT */
                  )
                ]),
                _: 1
                /* STABLE */
              })
            ])) : E("v-if", !0)
          ];
        }),
        _: 1
        /* STABLE */
      }),
      o(c, {
        heading: `${e.$t("dynamicLayer.info.distributions")} (${e.distributions.length})`,
        expandable: "",
        "start-open": ""
      }, {
        default: s(() => [
          o(i, { "no-gutters": "" }, {
            default: s(() => [
              e.distributions.length ? (y(), L(f, {
                key: 1,
                expanded: e.expandedDistributionIds,
                "onUpdate:expanded": t[1] || (t[1] = (w) => e.expandedDistributionIds = w),
                class: "w-100",
                items: e.distributions,
                headers: e.headers,
                "items-per-page": e.distributions.length,
                "show-expand": "",
                "expand-on-click": ""
              }, {
                "expanded-row": s(({ columns: w, item: h }) => [
                  o(g, {
                    columns: w,
                    distribution: h
                  }, null, 8, ["columns", "distribution"])
                ]),
                _: 1
                /* STABLE */
              }, 8, ["expanded", "items", "headers", "items-per-page"])) : (y(), V(
                "span",
                cl,
                p(e.$t("dynamicLayer.catalogues.noDistributionAvailable")),
                1
                /* TEXT */
              ))
            ]),
            _: 1
            /* STABLE */
          })
        ]),
        _: 1
        /* STABLE */
      }, 8, ["heading"])
    ])
  ]);
}
const fl = /* @__PURE__ */ X(zi, [["render", ml], ["__scopeId", "data-v-f9bf7e29"]]), pl = Y({
  name: "CataloguesWindow",
  components: {
    VCard: Ke,
    VCardText: Ta,
    VCol: ie,
    VContainer: ht,
    VRow: H,
    VcsFormButton: je,
    VcsMarkdown: Fn,
    DynamicColumns: Et,
    DatasetsList: Vi,
    DatasetDetails: fl
  },
  setup() {
    const e = le("vcsApp"), t = e.plugins.getByKey(U), {
      added: a,
      selected: n,
      selectedDataset: r
    } = t.catalogues;
    a.value.length === 1 && (n.value = a.value[0]);
    const u = T(!0);
    return se(n, () => {
      r.value = void 0, t.leftPanelActive[W.CATALOGUES] = !0;
    }), {
      CataloguesTypes: x,
      locale: e.locale,
      added: a,
      selectedCatalogue: n,
      selectedDataset: r,
      showDatasetDescription: u,
      getLogo(i) {
        return i.logo ?? bn(e, i.type);
      }
    };
  }
}), gl = ["src"], yl = { class: "d-flex align-start font-weight-black" }, vl = { class: "text-wrap max-3-lines" }, hl = { class: "d-flex justify-end gc-1" };
function bl(e, t, a, n, r, u) {
  const i = m("v-col"), l = m("VcsFormButton"), d = m("v-row"), c = m("v-card-text"), g = m("v-card"), f = m("DatasetsList"), w = m("DatasetDetails"), h = m("VcsMarkdown"), S = m("DynamicColumns"), O = m("v-container");
  return y(), L(O, { class: "h-100 pa-0" }, {
    default: s(() => [
      E(" OVERVIEW "),
      e.selectedCatalogue ? (y(), V(
        Pe,
        { key: 1 },
        [
          E(" CATALOGUE "),
          o(S, { "left-cols": 5 }, {
            left: s(() => [
              (y(), L(f, {
                key: e.selectedCatalogue.url,
                modelValue: e.selectedDataset,
                "onUpdate:modelValue": t[0] || (t[0] = (C) => e.selectedDataset = C),
                source: e.selectedCatalogue
              }, null, 8, ["modelValue", "source"]))
            ]),
            right: s(() => [
              e.selectedDataset ? (y(), L(w, {
                key: e.selectedDataset.id,
                dataset: e.selectedDataset,
                "show-description": e.showDatasetDescription,
                onToggleDescription: t[1] || (t[1] = (C) => e.showDatasetDescription = !e.showDatasetDescription)
              }, null, 8, ["dataset", "show-description"])) : (y(), L(h, {
                key: 1,
                class: "pa-1 max-height overflow-y-auto",
                content: e.selectedCatalogue.description ? e.$t(e.selectedCatalogue.description) : e.$t("dynamicLayer.catalogues.defaultMarkdownDescription")
              }, null, 8, ["content"]))
            ]),
            _: 1
            /* STABLE */
          })
        ],
        2112
        /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */
      )) : (y(), L(d, {
        key: 0,
        "no-gutters": "",
        class: "w-100 h-100 overflow-y-auto px-1"
      }, {
        default: s(() => [
          (y(!0), V(
            Pe,
            null,
            ze(e.added, (C) => (y(), L(
              i,
              {
                key: C.url,
                class: "v-col-6 pa-1 d-flex flex-column"
              },
              {
                default: s(() => [
                  o(
                    g,
                    {
                      variant: "outlined",
                      rounded: "",
                      class: "flex-grow-1"
                    },
                    {
                      append: s(() => [
                        j("img", {
                          src: e.getLogo(C),
                          style: { height: "calc(2 * var(--v-vcs-font-size))" }
                        }, null, 8, gl)
                      ]),
                      title: s(() => [
                        j(
                          "span",
                          yl,
                          p(e.$t(C.title)),
                          1
                          /* TEXT */
                        )
                      ]),
                      subtitle: s(() => [
                        j(
                          "span",
                          vl,
                          p(e.$t(
                            C.subtitle ?? "dynamicLayer.catalogues.noDescription"
                          )),
                          1
                          /* TEXT */
                        )
                      ]),
                      default: s(() => [
                        o(
                          c,
                          { class: "details py-2" },
                          {
                            default: s(() => [
                              o(
                                d,
                                {
                                  "no-gutters": "",
                                  class: "d-flex align-center"
                                },
                                {
                                  default: s(() => [
                                    o(
                                      i,
                                      null,
                                      {
                                        default: s(() => [
                                          b(
                                            p(C.data.count.toLocaleString(e.locale)) + " " + p(e.$t("dynamicLayer.catalogues.datasets")),
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
                                    o(
                                      i,
                                      null,
                                      {
                                        default: s(() => [
                                          j("span", hl, [
                                            o(l, {
                                              variant: "filled",
                                              onClick: (M) => e.selectedCatalogue = C
                                            }, {
                                              default: s(() => [
                                                b(
                                                  p(e.$t("dynamicLayer.actions.open")),
                                                  1
                                                  /* TEXT */
                                                )
                                              ]),
                                              _: 2
                                              /* DYNAMIC */
                                            }, 1032, ["onClick"])
                                          ])
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
      }))
    ]),
    _: 1
    /* STABLE */
  });
}
const Sl = /* @__PURE__ */ X(pl, [["render", bl], ["__scopeId", "data-v-1563313c"]]), wl = Y({
  name: "WmsParameters",
  components: {
    VCol: ie,
    VRow: H,
    VcsCheckbox: Qe,
    VcsExtent: Ye,
    VcsLabel: me,
    VcsSelect: Be,
    VcsSlider: Yt
  },
  props: {
    item: {
      type: Object,
      required: !0
    }
  },
  emits: ["parametersEdited"],
  setup(e, { emit: t }) {
    const n = le("vcsApp").layers.getByKey(e.item.name), r = T({
      ...n.toJSON(),
      tilingSchema: n.tilingSchema,
      opacity: n.opacity,
      availableStyles: P(e.item.styles),
      availableFormats: P(e.item.formats),
      supportsTransparency: e.item.supportsTransparency,
      queryable: e.item.queryable
    }), u = T(
      structuredClone(P(r.value))
    ), i = T(!!n.featureProvider);
    se(
      [r, i],
      () => {
        t("parametersEdited");
      },
      { deep: !0 }
    );
    function l(d, c) {
      return d.find((g) => g.value === c);
    }
    return {
      parameters: r,
      findStyle: l,
      enableFeatureInfo: i,
      styleText(d) {
        return d.title;
      },
      setExtent(d) {
        r.value.extent = d;
      },
      updateTransparency() {
        r.value.parameters.TRANSPARENT === "true" && (r.value.parameters.FORMAT = "image/png");
      },
      updateFormat(d) {
        var c;
        d !== "image/png" && ((c = r.value.parameters) != null && c.TRANSPARENT) && (r.value.parameters.TRANSPARENT = "false");
      },
      cancel() {
        r.value = structuredClone(P(u.value));
      },
      async apply() {
        Object.keys(r.value).forEach((d) => {
          var c;
          d in n && (d === "extent" ? n.extent = new be(r.value[d]) : d === "properties" || d === "parameters" ? (r.value.availableStyles && n.parameters.STYLES !== r.value.parameters.STYLE && (n.properties.legend = [
            {
              popoutBtn: !0,
              type: "ImageLegendItem",
              src: (c = l(
                r.value.availableStyles,
                r.value.parameters.STYLES
              )) == null ? void 0 : c.legendUrl
            }
          ]), Object.keys(n[d]).forEach((g) => {
            var f;
            (f = r.value[d]) != null && f[g] && (n[d][g] = P(
              r.value[d][g]
            ));
          })) : n[d] = r.value[d]);
        }), i.value ? n.properties.featureInfo = U : delete n.properties.featureInfo, n.deactivate(), await n.activate(), await n.reload(), u.value = structuredClone(P(r.value));
      }
    };
  }
}), Tl = { class: "px-2 pb-1" };
function Al(e, t, a, n, r, u) {
  var h;
  const i = m("VcsExtent"), l = m("v-row"), d = m("VcsLabel"), c = m("v-col"), g = m("VcsSelect"), f = m("VcsSlider"), w = m("VcsCheckbox");
  return y(), V("span", null, [
    e.parameters.extent ? (y(), L(l, {
      key: 0,
      "no-gutters": ""
    }, {
      default: s(() => [
        o(i, {
          id: "extent",
          "model-value": e.parameters.extent,
          "first-cols": 6,
          "onUpdate:modelValue": e.setExtent
        }, null, 8, ["model-value", "onUpdate:modelValue"])
      ]),
      _: 1
      /* STABLE */
    })) : E("v-if", !0),
    e.parameters.tilingSchema ? (y(), L(l, {
      key: 1,
      "no-gutters": "",
      class: "px-1"
    }, {
      default: s(() => [
        o(c, null, {
          default: s(() => [
            o(d, { "html-for": "tilingSchema" }, {
              default: s(() => [
                b(
                  p(e.$t("dynamicLayer.parameters.tilingSchema")),
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
        o(c, null, {
          default: s(() => [
            o(g, {
              id: "tilingSchema",
              modelValue: e.parameters.tilingSchema,
              "onUpdate:modelValue": t[0] || (t[0] = (S) => e.parameters.tilingSchema = S),
              items: ["geographic", "mercator"],
              "return-object": ""
            }, null, 8, ["modelValue"])
          ]),
          _: 1
          /* STABLE */
        })
      ]),
      _: 1
      /* STABLE */
    })) : E("v-if", !0),
    e.parameters.parameters.FORMAT ? (y(), L(l, {
      key: 2,
      "no-gutters": "",
      class: "px-1"
    }, {
      default: s(() => [
        o(c, null, {
          default: s(() => [
            o(d, { "html-for": "format" }, {
              default: s(() => [
                b(
                  p(e.$t("dynamicLayer.common.format")),
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
        o(c, null, {
          default: s(() => [
            o(g, {
              id: "format",
              modelValue: e.parameters.parameters.FORMAT,
              "onUpdate:modelValue": [
                t[1] || (t[1] = (S) => e.parameters.parameters.FORMAT = S),
                e.updateFormat
              ],
              items: e.parameters.availableFormats
            }, null, 8, ["modelValue", "items", "onUpdate:modelValue"])
          ]),
          _: 1
          /* STABLE */
        })
      ]),
      _: 1
      /* STABLE */
    })) : E("v-if", !0),
    o(l, {
      "no-gutters": "",
      class: "px-1"
    }, {
      default: s(() => [
        o(c, null, {
          default: s(() => [
            o(d, { "html-for": "opacity" }, {
              default: s(() => [
                b(
                  p(e.$t("dynamicLayer.parameters.opacity")),
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
        o(c, null, {
          default: s(() => [
            o(f, {
              id: "opacity",
              modelValue: e.parameters.opacity,
              "onUpdate:modelValue": t[2] || (t[2] = (S) => e.parameters.opacity = S),
              min: "0",
              max: "1",
              step: "0.01"
            }, {
              append: s(() => [
                b(
                  p(Math.round(e.parameters.opacity * 100)) + "%",
                  1
                  /* TEXT */
                )
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
    }),
    e.parameters.supportsTransparency ? (y(), L(l, {
      key: 3,
      "no-gutters": "",
      class: "px-1"
    }, {
      default: s(() => [
        o(c, null, {
          default: s(() => [
            o(d, { "html-for": "transparency" }, {
              default: s(() => [
                b(
                  p(e.$t("dynamicLayer.parameters.transparency")),
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
        o(c, { class: "d-flex align-center" }, {
          default: s(() => [
            o(w, {
              id: "transparency",
              modelValue: e.parameters.parameters.TRANSPARENT,
              "onUpdate:modelValue": t[3] || (t[3] = (S) => e.parameters.parameters.TRANSPARENT = S),
              "true-value": "TRUE",
              "false-value": "FALSE",
              onChange: e.updateTransparency
            }, null, 8, ["modelValue", "onChange"])
          ]),
          _: 1
          /* STABLE */
        })
      ]),
      _: 1
      /* STABLE */
    })) : E("v-if", !0),
    e.parameters.queryable ? (y(), L(l, {
      key: 4,
      "no-gutters": "",
      class: "px-1"
    }, {
      default: s(() => [
        o(c, null, {
          default: s(() => [
            o(d, { "html-for": "featureInfo" }, {
              default: s(() => [
                b(
                  p(e.$t("dynamicLayer.parameters.featureInfo")),
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
        o(c, { class: "d-flex align-center" }, {
          default: s(() => [
            o(w, {
              id: "featureInfo",
              modelValue: e.enableFeatureInfo,
              "onUpdate:modelValue": t[4] || (t[4] = (S) => e.enableFeatureInfo = S)
            }, null, 8, ["modelValue"])
          ]),
          _: 1
          /* STABLE */
        })
      ]),
      _: 1
      /* STABLE */
    })) : E("v-if", !0),
    e.parameters.parameters.STYLES ? (y(), L(l, {
      key: 5,
      "no-gutters": "",
      class: "px-1"
    }, {
      default: s(() => [
        o(c, null, {
          default: s(() => [
            o(d, { "html-for": "style" }, {
              default: s(() => [
                b(
                  p(e.$t("dynamicLayer.parameters.style")),
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
        o(c, null, {
          default: s(() => [
            o(g, {
              id: "style",
              modelValue: e.parameters.parameters.STYLES,
              "onUpdate:modelValue": t[5] || (t[5] = (S) => e.parameters.parameters.STYLES = S),
              items: e.parameters.availableStyles,
              "item-text": e.styleText
            }, null, 8, ["modelValue", "items", "item-text"])
          ]),
          _: 1
          /* STABLE */
        })
      ]),
      _: 1
      /* STABLE */
    })) : E("v-if", !0),
    e.parameters.availableStyles && ((h = e.findStyle(e.parameters.availableStyles, e.parameters.parameters.STYLES)) != null && h.abstract) ? (y(), L(l, {
      key: 6,
      "no-gutters": ""
    }, {
      default: s(() => {
        var S;
        return [
          j(
            "p",
            Tl,
            p(e.$t("dynamicLayer.common.description")) + ": " + p((S = e.findStyle(e.parameters.availableStyles, e.parameters.parameters.STYLES)) == null ? void 0 : S.abstract),
            1
            /* TEXT */
          )
        ];
      }),
      _: 1
      /* STABLE */
    })) : E("v-if", !0)
  ]);
}
const Ll = /* @__PURE__ */ X(wl, [["render", Al]]), Cl = Y({
  name: "CesiumTilesetParameters",
  components: {
    VCol: ie,
    VRow: H,
    VcsLabel: me,
    VcsTextField: Ae
  },
  props: {
    item: {
      type: Object,
      required: !0
    }
  },
  emits: ["parametersEdited"],
  setup(e, { emit: t }) {
    const n = le("vcsApp").layers.getByKey(e.item.name), r = T({
      properties: { title: n.properties.title },
      screenSpaceError: n.screenSpaceError
    }), u = T(structuredClone(P(r.value)));
    return se(
      r,
      () => {
        t("parametersEdited");
      },
      { deep: !0 }
    ), {
      parameters: r,
      cancel() {
        r.value = structuredClone(P(u.value));
      },
      async apply() {
        n.screenSpaceError = r.value.screenSpaceError, await n.reload(), u.value = structuredClone(P(r.value));
      }
    };
  }
});
function El(e, t, a, n, r, u) {
  const i = m("VcsLabel"), l = m("v-col"), d = m("VcsTextField"), c = m("v-row");
  return y(), V("span", null, [
    e.parameters.screenSpaceError ? (y(), L(c, {
      key: 0,
      "no-gutters": "",
      class: "px-1"
    }, {
      default: s(() => [
        o(l, null, {
          default: s(() => [
            o(i, { "html-for": "screenSpaceError" }, {
              default: s(() => [
                b(
                  p(e.$t("dynamicLayer.parameters.screenSpaceError")),
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
          default: s(() => [
            o(d, {
              id: "screenSpaceError",
              modelValue: e.parameters.screenSpaceError,
              "onUpdate:modelValue": t[0] || (t[0] = (g) => e.parameters.screenSpaceError = g),
              modelModifiers: { number: !0 },
              type: "number",
              "show-spin-buttons": ""
            }, null, 8, ["modelValue"])
          ]),
          _: 1
          /* STABLE */
        })
      ]),
      _: 1
      /* STABLE */
    })) : E("v-if", !0)
  ]);
}
const $l = /* @__PURE__ */ X(Cl, [["render", El]]), Vl = Y({
  name: "GeoJSONParameters",
  components: {
    VCol: ie,
    VRow: H,
    VcsLabel: me,
    VcsTextField: Ae
  },
  props: {
    item: {
      type: Object,
      required: !0
    }
  },
  emits: ["parametersEdited"],
  setup(e, { emit: t }) {
    const n = le("vcsApp").layers.getByKey(e.item.name), r = T({
      ...n.toJSON(),
      epsg: n.projection.epsg,
      proj4: n.projection.proj4
    }), u = T(structuredClone(P(r.value)));
    return se(
      r,
      () => {
        t("parametersEdited");
      },
      { deep: !0 }
    ), {
      parameters: r,
      cancel() {
        r.value = structuredClone(P(u.value));
      },
      apply() {
        (n.projection.epsg !== r.value.epsg || n.projection.proj4 !== r.value.proj4) && (n.projection = new xt({
          epsg: r.value.epsg,
          proj4: r.value.proj4
        })), u.value = structuredClone(P(r.value));
      }
    };
  }
});
function _l(e, t, a, n, r, u) {
  const i = m("VcsLabel"), l = m("v-col"), d = m("VcsTextField"), c = m("v-row");
  return y(), V("span", null, [
    o(c, {
      "no-gutters": "",
      class: "px-1"
    }, {
      default: s(() => [
        o(l, null, {
          default: s(() => [
            o(i, { "html-for": "epsg" }, {
              default: s(() => [
                b(
                  p(e.$t("dynamicLayer.parameters.epsg")),
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
          default: s(() => [
            o(d, {
              id: "epsg",
              modelValue: e.parameters.epsg,
              "onUpdate:modelValue": t[0] || (t[0] = (g) => e.parameters.epsg = g),
              clearable: ""
            }, null, 8, ["modelValue"])
          ]),
          _: 1
          /* STABLE */
        })
      ]),
      _: 1
      /* STABLE */
    }),
    o(c, {
      "no-gutters": "",
      class: "px-1"
    }, {
      default: s(() => [
        o(l, null, {
          default: s(() => [
            o(i, { "html-for": "proj4" }, {
              default: s(() => [
                b(
                  p(e.$t("dynamicLayer.parameters.proj4")),
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
          default: s(() => [
            o(d, {
              id: "proj4",
              modelValue: e.parameters.proj4,
              "onUpdate:modelValue": t[1] || (t[1] = (g) => e.parameters.proj4 = g),
              clearable: ""
            }, null, 8, ["modelValue"])
          ]),
          _: 1
          /* STABLE */
        })
      ]),
      _: 1
      /* STABLE */
    })
  ]);
}
const Pl = /* @__PURE__ */ X(Vl, [["render", _l]]), Il = Y({
  name: "TerrainParameters",
  components: {
    VCol: ie,
    VRow: H,
    VcsCheckbox: Qe,
    VcsLabel: me
  },
  props: {
    item: {
      type: Object,
      required: !0
    }
  },
  emits: ["parametersEdited"],
  setup(e, { emit: t }) {
    const n = le("vcsApp").layers.getByKey(e.item.name), r = T({
      requestVertexNormals: n.requestVertexNormals,
      requestWaterMask: n.requestWaterMask
    }), u = T(structuredClone(P(r.value)));
    return se(
      r,
      () => {
        t("parametersEdited");
      },
      { deep: !0 }
    ), {
      parameters: r,
      cancel() {
        r.value = structuredClone(P(u.value));
      },
      async apply() {
        n.requestVertexNormals !== r.value.requestVertexNormals && (n.requestVertexNormals = r.value.requestVertexNormals), n.requestWaterMask !== r.value.requestWaterMask && (n.requestWaterMask = r.value.requestWaterMask), n.deactivate(), await n.activate(), u.value = structuredClone(P(r.value));
      }
    };
  }
});
function Rl(e, t, a, n, r, u) {
  const i = m("VcsLabel"), l = m("v-col"), d = m("VcsCheckbox"), c = m("v-row");
  return y(), V("span", null, [
    o(c, {
      "no-gutters": "",
      class: "px-1"
    }, {
      default: s(() => [
        o(l, null, {
          default: s(() => [
            o(i, { "html-for": "requestVertexNormals" }, {
              default: s(() => [
                b(
                  p(e.$t("dynamicLayer.parameters.requestVertexNormals")),
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
        o(l, { class: "d-flex align-center" }, {
          default: s(() => [
            o(d, {
              id: "requestVertexNormals",
              modelValue: e.parameters.requestVertexNormals,
              "onUpdate:modelValue": t[0] || (t[0] = (g) => e.parameters.requestVertexNormals = g)
            }, null, 8, ["modelValue"])
          ]),
          _: 1
          /* STABLE */
        })
      ]),
      _: 1
      /* STABLE */
    }),
    o(c, {
      "no-gutters": "",
      class: "px-1"
    }, {
      default: s(() => [
        o(l, null, {
          default: s(() => [
            o(i, { "html-for": "requestWaterMask" }, {
              default: s(() => [
                b(
                  p(e.$t("dynamicLayer.parameters.requestWaterMask")),
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
        o(l, { class: "d-flex align-center" }, {
          default: s(() => [
            o(d, {
              id: "requestWaterMask",
              modelValue: e.parameters.requestWaterMask,
              "onUpdate:modelValue": t[1] || (t[1] = (g) => e.parameters.requestWaterMask = g)
            }, null, 8, ["modelValue"])
          ]),
          _: 1
          /* STABLE */
        })
      ]),
      _: 1
      /* STABLE */
    })
  ]);
}
const Ol = /* @__PURE__ */ X(Il, [["render", Rl]]), Dl = Y({
  name: "WfsParameters",
  components: {
    VCol: ie,
    VRow: H,
    VcsExtent: Ye,
    VcsLabel: me,
    VcsTextField: Ae
  },
  props: {
    item: {
      type: Object,
      required: !0
    }
  },
  emits: ["parametersEdited"],
  setup(e, { emit: t }) {
    const n = le("vcsApp").layers.getByKey(e.item.name), r = T({ ...n.toJSON() }), u = T(structuredClone(P(r.value)));
    return se(
      r,
      () => {
        t("parametersEdited");
      },
      { deep: !0 }
    ), {
      parameters: r,
      setExtent(i) {
        r.value.extent = i;
      },
      cancel() {
        r.value = structuredClone(P(u.value));
      },
      async apply() {
        Object.keys(r.value).forEach((i) => {
          i in n && (i === "extent" && r.value.extent !== n.extent ? n.extent = new be(P(r.value.extent)) : i !== "projection" && (n[i] = P(r.value[i])));
        }), n.deactivate(), await n.activate(), await n.reload(), u.value = structuredClone(P(r.value));
      }
    };
  }
});
function kl(e, t, a, n, r, u) {
  const i = m("VcsLabel"), l = m("v-col"), d = m("VcsTextField"), c = m("v-row"), g = m("VcsExtent");
  return y(), V("span", null, [
    o(c, {
      "no-gutters": "",
      class: "px-1"
    }, {
      default: s(() => [
        o(l, null, {
          default: s(() => [
            o(i, { "html-for": "featureNS" }, {
              default: s(() => [
                b(
                  p(e.$t("dynamicLayer.parameters.featureNS")),
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
          default: s(() => [
            o(d, {
              id: "featureNS",
              modelValue: e.parameters.featureNS,
              "onUpdate:modelValue": t[0] || (t[0] = (f) => e.parameters.featureNS = f)
            }, null, 8, ["modelValue"])
          ]),
          _: 1
          /* STABLE */
        })
      ]),
      _: 1
      /* STABLE */
    }),
    o(c, {
      "no-gutters": "",
      class: "px-1"
    }, {
      default: s(() => [
        o(l, null, {
          default: s(() => [
            o(i, { "html-for": "featurePrefix" }, {
              default: s(() => [
                b(
                  p(e.$t("dynamicLayer.parameters.featurePrefix")),
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
          default: s(() => [
            o(d, {
              id: "featurePrefix",
              modelValue: e.parameters.featurePrefix,
              "onUpdate:modelValue": t[1] || (t[1] = (f) => e.parameters.featurePrefix = f)
            }, null, 8, ["modelValue"])
          ]),
          _: 1
          /* STABLE */
        })
      ]),
      _: 1
      /* STABLE */
    }),
    o(c, {
      "no-gutters": "",
      class: "px-1"
    }, {
      default: s(() => [
        o(l, null, {
          default: s(() => [
            o(i, { "html-for": "featureType" }, {
              default: s(() => [
                b(
                  p(e.$t("dynamicLayer.parameters.featureType")),
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
          default: s(() => [
            o(d, {
              id: "featureType",
              modelValue: e.parameters.featureType[0],
              "onUpdate:modelValue": t[2] || (t[2] = (f) => e.parameters.featureType[0] = f)
            }, null, 8, ["modelValue"])
          ]),
          _: 1
          /* STABLE */
        })
      ]),
      _: 1
      /* STABLE */
    }),
    e.parameters.extent ? (y(), L(c, {
      key: 0,
      "no-gutters": ""
    }, {
      default: s(() => [
        o(g, {
          id: "extent",
          "model-value": e.parameters.extent,
          "first-cols": 6,
          "onUpdate:modelValue": e.setExtent
        }, null, 8, ["model-value", "onUpdate:modelValue"])
      ]),
      _: 1
      /* STABLE */
    })) : E("v-if", !0)
  ]);
}
const Nl = /* @__PURE__ */ X(Dl, [["render", kl]]), Ml = Y({
  name: "WmtsParameters",
  components: {
    VCol: ie,
    VRow: H,
    VcsExtent: Ye,
    VcsLabel: me,
    VcsSelect: Be,
    VcsSlider: Yt,
    VcsTextField: Ae
  },
  props: {
    item: {
      type: Object,
      required: !0
    }
  },
  emits: ["parametersEdited"],
  setup(e, { emit: t }) {
    const n = le("vcsApp").layers.getByKey(e.item.name), r = T({
      ...n.toJSON(),
      opacity: n.opacity,
      minLevel: n.minLevel,
      maxLevel: n.maxLevel,
      tileSize: n.tileSize,
      tileMatrixPrefix: n.tileMatrixPrefix,
      numberOfLevelZeroTilesX: n.numberOfLevelZeroTilesX,
      numberOfLevelZeroTilesY: n.numberOfLevelZeroTilesY
    }), u = T(structuredClone(P(r.value)));
    return se(
      r,
      () => {
        t("parametersEdited");
      },
      { deep: !0 }
    ), {
      parameters: r,
      itemText: (i) => i.title ?? i.name,
      setExtent(i) {
        r.value.extent = i;
      },
      cancel() {
        r.value = structuredClone(P(u.value));
      },
      async apply() {
        Object.keys(r.value).forEach((i) => {
          i in n && (i === "extent" && r.value.extent !== n.extent ? n.extent = new be(P(r.value.extent)) : i !== "projection" && (n[i] = P(r.value[i])));
        }), n.deactivate(), await n.activate(), await n.reload(), u.value = structuredClone(P(r.value));
      }
    };
  }
});
function Ul(e, t, a, n, r, u) {
  const i = m("VcsLabel"), l = m("v-col"), d = m("VcsSlider"), c = m("v-row"), g = m("VcsSelect"), f = m("VcsTextField"), w = m("VcsExtent");
  return y(), V("span", null, [
    o(c, {
      "no-gutters": "",
      class: "px-1"
    }, {
      default: s(() => [
        o(l, null, {
          default: s(() => [
            o(i, { "html-for": "opacity" }, {
              default: s(() => [
                b(
                  p(e.$t("dynamicLayer.parameters.opacity")),
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
          default: s(() => [
            o(d, {
              id: "opacity",
              modelValue: e.parameters.opacity,
              "onUpdate:modelValue": t[0] || (t[0] = (h) => e.parameters.opacity = h),
              min: "0",
              max: "1",
              step: "0.01"
            }, {
              append: s(() => [
                b(
                  p(Math.round(e.parameters.opacity * 100)) + "%",
                  1
                  /* TEXT */
                )
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
    }),
    o(c, {
      "no-gutters": "",
      class: "px-1"
    }, {
      default: s(() => [
        o(l, null, {
          default: s(() => [
            o(i, { "html-for": "format" }, {
              default: s(() => [
                b(
                  p(e.$t("dynamicLayer.common.format")),
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
          default: s(() => [
            o(g, {
              id: "format",
              modelValue: e.parameters.format,
              "onUpdate:modelValue": t[1] || (t[1] = (h) => e.parameters.format = h),
              items: e.item.formats
            }, null, 8, ["modelValue", "items"])
          ]),
          _: 1
          /* STABLE */
        })
      ]),
      _: 1
      /* STABLE */
    }),
    o(c, {
      "no-gutters": "",
      class: "px-1"
    }, {
      default: s(() => [
        o(l, null, {
          default: s(() => [
            o(i, { "html-for": "tileMatrixSetID" }, {
              default: s(() => [
                b(
                  p(e.$t("dynamicLayer.parameters.tileMatrixSetID")),
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
          default: s(() => [
            o(g, {
              id: "tileMatrixSetID",
              modelValue: e.parameters.tileMatrixSetID,
              "onUpdate:modelValue": t[2] || (t[2] = (h) => e.parameters.tileMatrixSetID = h),
              items: e.item.matrixSetIds
            }, null, 8, ["modelValue", "items"])
          ]),
          _: 1
          /* STABLE */
        })
      ]),
      _: 1
      /* STABLE */
    }),
    o(c, {
      "no-gutters": "",
      class: "px-1"
    }, {
      default: s(() => [
        o(l, null, {
          default: s(() => [
            o(i, { "html-for": "tileMatrixPrefix" }, {
              default: s(() => [
                b(
                  p(e.$t("dynamicLayer.parameters.tileMatrixPrefix")),
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
          default: s(() => [
            o(f, {
              id: "tileMatrixPrefix",
              modelValue: e.parameters.tileMatrixPrefix,
              "onUpdate:modelValue": t[3] || (t[3] = (h) => e.parameters.tileMatrixPrefix = h)
            }, null, 8, ["modelValue"])
          ]),
          _: 1
          /* STABLE */
        })
      ]),
      _: 1
      /* STABLE */
    }),
    e.parameters.numberOfLevelZeroTilesX && e.parameters.numberOfLevelZeroTilesY ? (y(), L(c, {
      key: 0,
      "no-gutters": "",
      class: "px-1"
    }, {
      default: s(() => [
        o(l, { cols: "6" }, {
          default: s(() => [
            o(i, { "html-for": "levelZeroTilesX" }, {
              default: s(() => [
                b(
                  p(e.$t("dynamicLayer.parameters.numberLevelZeroTiles")),
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
          default: s(() => [
            o(f, {
              id: "levelZeroTilesX",
              modelValue: e.parameters.numberOfLevelZeroTilesX,
              "onUpdate:modelValue": t[4] || (t[4] = (h) => e.parameters.numberOfLevelZeroTilesX = h),
              modelModifiers: { number: !0 },
              prefix: "X"
            }, null, 8, ["modelValue"])
          ]),
          _: 1
          /* STABLE */
        }),
        o(l, null, {
          default: s(() => [
            o(f, {
              id: "levelZeroTilesY",
              modelValue: e.parameters.numberOfLevelZeroTilesX,
              "onUpdate:modelValue": t[5] || (t[5] = (h) => e.parameters.numberOfLevelZeroTilesX = h),
              modelModifiers: { number: !0 },
              prefix: "Y"
            }, null, 8, ["modelValue"])
          ]),
          _: 1
          /* STABLE */
        })
      ]),
      _: 1
      /* STABLE */
    })) : E("v-if", !0),
    o(c, {
      "no-gutters": "",
      class: "px-1"
    }, {
      default: s(() => [
        o(l, { cols: "6" }, {
          default: s(() => [
            o(i, { "html-for": "zoomLevelMin" }, {
              default: s(() => [
                b(
                  p(e.$t("dynamicLayer.parameters.zoomLevels")),
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
          default: s(() => [
            o(f, {
              id: "zoomLevelMin",
              modelValue: e.parameters.minLevel,
              "onUpdate:modelValue": t[6] || (t[6] = (h) => e.parameters.minLevel = h),
              modelModifiers: { number: !0 },
              prefix: "min"
            }, null, 8, ["modelValue"])
          ]),
          _: 1
          /* STABLE */
        }),
        o(l, null, {
          default: s(() => [
            o(f, {
              id: "zoomLevelMax",
              modelValue: e.parameters.maxLevel,
              "onUpdate:modelValue": t[7] || (t[7] = (h) => e.parameters.maxLevel = h),
              modelModifiers: { number: !0 },
              prefix: "max"
            }, null, 8, ["modelValue"])
          ]),
          _: 1
          /* STABLE */
        })
      ]),
      _: 1
      /* STABLE */
    }),
    o(c, {
      "no-gutters": "",
      class: "px-1"
    }, {
      default: s(() => [
        o(l, { cols: "6" }, {
          default: s(() => [
            o(i, { "html-for": "tileSizeX" }, {
              default: s(() => [
                b(
                  p(e.$t("dynamicLayer.parameters.tileSize")),
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
          default: s(() => [
            o(f, {
              id: "tileSizeX",
              modelValue: e.parameters.tileSize[0],
              "onUpdate:modelValue": t[8] || (t[8] = (h) => e.parameters.tileSize[0] = h),
              modelModifiers: { number: !0 },
              prefix: "X",
              suffix: "pixels"
            }, null, 8, ["modelValue"])
          ]),
          _: 1
          /* STABLE */
        }),
        o(l, null, {
          default: s(() => [
            o(f, {
              id: "tileSizeY",
              modelValue: e.parameters.tileSize[1],
              "onUpdate:modelValue": t[9] || (t[9] = (h) => e.parameters.tileSize[1] = h),
              modelModifiers: { number: !0 },
              prefix: "Y",
              suffix: "pixels"
            }, null, 8, ["modelValue"])
          ]),
          _: 1
          /* STABLE */
        })
      ]),
      _: 1
      /* STABLE */
    }),
    o(c, {
      "no-gutters": "",
      class: "px-1"
    }, {
      default: s(() => [
        o(l, null, {
          default: s(() => [
            o(i, { "html-for": "style" }, {
              default: s(() => [
                b(
                  p(e.$t("dynamicLayer.parameters.style")),
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
          default: s(() => [
            o(g, {
              id: "style",
              modelValue: e.parameters.wmtsStyle,
              "onUpdate:modelValue": t[10] || (t[10] = (h) => e.parameters.wmtsStyle = h),
              items: e.item.styles,
              "item-text": e.itemText
            }, null, 8, ["modelValue", "items", "item-text"])
          ]),
          _: 1
          /* STABLE */
        })
      ]),
      _: 1
      /* STABLE */
    }),
    e.parameters.extent ? (y(), L(c, {
      key: 1,
      "no-gutters": ""
    }, {
      default: s(() => [
        o(w, {
          id: "extent",
          "model-value": e.parameters.extent,
          "first-cols": 6,
          "onUpdate:modelValue": e.setExtent
        }, null, 8, ["model-value", "onUpdate:modelValue"])
      ]),
      _: 1
      /* STABLE */
    })) : E("v-if", !0)
  ]);
}
const Fl = /* @__PURE__ */ X(Ml, [["render", Ul]]), Wl = Y({
  name: "PointCloudParameters",
  components: {
    VCol: ie,
    VRow: H,
    VcsLabel: me,
    VcsTextField: Ae
  },
  props: {
    item: {
      type: Object,
      required: !0
    }
  },
  emits: ["parametersEdited"],
  setup(e, { emit: t }) {
    const n = le("vcsApp").layers.getByKey(e.item.name), r = T({
      pointSize: n.pointSize,
      screenSpaceError: n.screenSpaceError
    }), u = T(structuredClone(P(r.value)));
    return se(
      r,
      () => {
        t("parametersEdited");
      },
      { deep: !0 }
    ), {
      parameters: r,
      cancel() {
        r.value = structuredClone(P(u.value));
      },
      async apply() {
        n.screenSpaceError !== r.value.screenSpaceError && (n.screenSpaceError = r.value.screenSpaceError), n.pointSize !== r.value.pointSize && (n.pointSize = r.value.pointSize), await n.reload(), u.value = structuredClone(P(r.value));
      }
    };
  }
});
function Bl(e, t, a, n, r, u) {
  const i = m("VcsLabel"), l = m("v-col"), d = m("VcsTextField"), c = m("v-row");
  return y(), V("span", null, [
    o(c, {
      "no-gutters": "",
      class: "px-1"
    }, {
      default: s(() => [
        o(l, null, {
          default: s(() => [
            o(i, { "html-for": "pointSize" }, {
              default: s(() => [
                b(
                  p(e.$t("dynamicLayer.parameters.pointSize")),
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
          default: s(() => [
            o(d, {
              id: "pointSize",
              modelValue: e.parameters.pointSize,
              "onUpdate:modelValue": t[0] || (t[0] = (g) => e.parameters.pointSize = g),
              modelModifiers: { number: !0 },
              type: "number",
              "show-spin-buttons": ""
            }, null, 8, ["modelValue"])
          ]),
          _: 1
          /* STABLE */
        })
      ]),
      _: 1
      /* STABLE */
    }),
    o(c, {
      "no-gutters": "",
      class: "px-1"
    }, {
      default: s(() => [
        o(l, null, {
          default: s(() => [
            o(i, { "html-for": "screenSpaceError" }, {
              default: s(() => [
                b(
                  p(e.$t("dynamicLayer.parameters.screenSpaceError")),
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
          default: s(() => [
            o(d, {
              id: "screenSpaceError",
              modelValue: e.parameters.screenSpaceError,
              "onUpdate:modelValue": t[1] || (t[1] = (g) => e.parameters.screenSpaceError = g),
              modelModifiers: { number: !0 },
              type: "number",
              "show-spin-buttons": ""
            }, null, 8, ["modelValue"])
          ]),
          _: 1
          /* STABLE */
        })
      ]),
      _: 1
      /* STABLE */
    })
  ]);
}
const jl = /* @__PURE__ */ X(Wl, [["render", Bl]]), zl = Y({
  name: "CzmlParameters",
  components: {
    VCol: ie,
    VRow: H,
    VcsCheckbox: Qe,
    VcsLabel: me
  },
  props: {
    item: {
      type: Object,
      required: !0
    }
  },
  emits: ["parametersEdited"],
  setup(e, { emit: t }) {
    const n = le("vcsApp").layers.getByKey(e.item.name), r = T({
      ...n.toJSON(),
      featureInfo: !!n.properties.featureInfo
    }), u = T(structuredClone(P(r.value)));
    return se(
      r,
      () => {
        t("parametersEdited");
      },
      { deep: !0 }
    ), {
      parameters: r,
      cancel() {
        r.value = structuredClone(P(u.value));
      },
      apply() {
        r.value.featureInfo ? n.properties.featureInfo = U : delete n.properties.featureInfo, u.value = structuredClone(P(r.value));
      }
    };
  }
});
function Kl(e, t, a, n, r, u) {
  const i = m("VcsLabel"), l = m("v-col"), d = m("VcsCheckbox"), c = m("v-row");
  return y(), V("span", null, [
    o(c, {
      "no-gutters": "",
      class: "px-1"
    }, {
      default: s(() => [
        o(l, null, {
          default: s(() => [
            o(i, { "html-for": "featureInfo" }, {
              default: s(() => [
                b(
                  p(e.$t("dynamicLayer.parameters.featureInfo")),
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
          default: s(() => [
            o(d, {
              id: "featureInfo",
              modelValue: e.parameters.featureInfo,
              "onUpdate:modelValue": t[0] || (t[0] = (g) => e.parameters.featureInfo = g),
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
  ]);
}
const Gl = /* @__PURE__ */ X(zl, [["render", Kl]]), ql = Y({
  name: "WebdataParameters",
  components: {
    VCol: ie,
    VRow: H,
    VcsFormSection: Xe,
    VcsLabel: me,
    VcsTextField: Ae,
    CesiumTilesetParameters: $l,
    CzmlParameters: Gl,
    GeoJSONParameters: Pl,
    PointCloudParameters: jl,
    TerrainParameters: Ol,
    WfsParameters: Nl,
    WmsParameters: Ll,
    WmtsParameters: Fl
  },
  props: {
    item: {
      type: Object,
      required: !0
    }
  },
  emits: ["rename"],
  setup(e, { emit: t }) {
    const a = T(!0), n = T(!1), r = T(!1), u = ee(
      () => n.value || r.value
    ), i = T(), l = T(e.item.title);
    return {
      show: a,
      hasUpdate: u,
      itemParameters: i,
      parametersHaveUpdate: r,
      title: l,
      titleHasUpdate: n,
      headerActions: ee(
        () => u.value ? [
          G({
            icon: "mdi-close",
            title: "dynamicLayer.actions.cancel",
            disabled: !u.value,
            callback: async () => {
              l.value = e.item.title, i.value.cancel(), await an(), n.value = !1, r.value = !1;
            }
          }),
          G({
            icon: "mdi-content-save-edit-outline",
            title: "dynamicLayer.actions.apply",
            disabled: !u.value,
            callback: () => {
              n.value && (t("rename", l.value), n.value = !1), r.value && (i.value.apply(), r.value = !1);
            }
          })
        ] : []
      ),
      getComponentName() {
        switch (e.item.type) {
          case $.CESIUM_TILESET:
            return "CesiumTilesetParameters";
          case $.CZML:
            return "CzmlParameters";
          case $.GEOJSON:
            return "GeoJSONParameters";
          case $.POINTCLOUD:
            return "PointCloudParameters";
          case $.TERRAIN:
            return "TerrainParameters";
          case $.WFS:
            return "WfsParameters";
          case $.WMS:
            return "WmsParameters";
          case $.WMTS:
            return "WmtsParameters";
          default:
            return "";
        }
      }
    };
  }
}), Zl = { class: "h-100 overflow-y-auto" };
function Jl(e, t, a, n, r, u) {
  const i = m("VcsLabel"), l = m("v-col"), d = m("VcsTextField"), c = m("v-row"), g = m("VcsFormSection");
  return y(), L(g, {
    heading: "dynamicLayer.parameters.title",
    class: "h-100",
    "header-actions": e.headerActions,
    "help-text": e.hasUpdate ? e.$t("dynamicLayer.parameters.saveHint") : "",
    "start-help-open": "",
    expandable: "",
    "start-open": "",
    "action-button-list-overflow-count": 3
  }, {
    default: s(() => [
      j("div", Zl, [
        o(c, {
          "no-gutters": "",
          class: "px-1"
        }, {
          default: s(() => [
            o(l, null, {
              default: s(() => [
                o(i, { "html-for": "title" }, {
                  default: s(() => [
                    b(
                      p(e.$t("dynamicLayer.common.title")),
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
              default: s(() => [
                o(d, {
                  id: "title",
                  modelValue: e.title,
                  "onUpdate:modelValue": [
                    t[0] || (t[0] = (f) => e.title = f),
                    t[1] || (t[1] = (f) => e.titleHasUpdate = !0)
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
        (y(), L(da(e.getComponentName()), {
          ref: "itemParameters",
          class: "w-100 d-inline-block overflow-y-auto",
          item: e.item,
          onRename: t[2] || (t[2] = (f) => e.$emit("rename")),
          onParametersEdited: t[3] || (t[3] = (f) => e.parametersHaveUpdate = !0)
        }, null, 40, ["item"]))
      ])
    ]),
    _: 1
    /* STABLE */
  }, 8, ["header-actions", "help-text"]);
}
const Hl = /* @__PURE__ */ X(ql, [["render", Jl], ["__scopeId", "data-v-a80708aa"]]), Yl = Y({
  name: "AddedData",
  components: {
    VDivider: et,
    VRow: H,
    VcsFormButton: je,
    VcsGroupedList: Wn,
    DynamicColumns: Et,
    WebdataParameters: Hl,
    WebdataInformations: On
  },
  setup() {
    const e = le("vcsApp"), t = e.plugins.getByKey(U), { addedSelected: a, addedToMap: n } = t, r = ee(
      () => n.value.map(
        (d) => G({
          name: d.name,
          title: d.title,
          group: d.type
        })
      )
    );
    se(r, () => {
      r.value.length === 0 ? t.activeTab.value = t.config.defaultTab : r.value.length === 1 && !a.value && (a.value = n.value[0]);
    });
    const u = T([
      r.value.find(
        (d) => {
          var c;
          return d.name === ((c = a.value) == null ? void 0 : c.name);
        }
      )
    ]);
    se(u, (d) => {
      (d == null ? void 0 : d.length) === 1 ? a.value = n.value.find(
        (c) => {
          var g;
          return c.name === ((g = d[0]) == null ? void 0 : g.name);
        }
      ) : a.value = void 0;
    });
    function i() {
      a.value && (u.value = [
        r.value.find(
          (d) => d.name === a.value.name
        )
      ]);
    }
    return i(), se(t.activeTab, (d) => {
      d === W.ADDED && i();
    }), {
      groups: ee(() => [...new Set(n.value.map((d) => d.type))].map(
        (d) => ({
          name: d,
          title: `dynamicLayer.webdata.type.${d}`,
          headerActions: [
            G({
              name: "dynamicLayer.added.actions.selectAll",
              callback: () => {
                u.value = r.value.filter(
                  (c) => c.group === String(d)
                );
              }
            }),
            G({
              name: "dynamicLayer.added.actions.clearSelection",
              disabled: ee(() => !u.value.length),
              callback: () => {
                u.value = [];
              }
            }),
            G({
              name: "dynamicLayer.added.actions.removeSelection",
              title: "dynamicLayer.added.actions.removeSelectionTitle",
              disabled: ee(() => !u.value.length),
              callback: () => {
                n.value.filter(
                  (c) => u.value.some((g) => (g == null ? void 0 : g.name) === c.name)
                ).forEach((c) => {
                  Ne(e, c);
                }), u.value = [];
              }
            })
          ]
        })
      )),
      localItems: r,
      addedSelected: a,
      localSelected: u,
      removeLayer(d) {
        Ne(e, d), t.leftPanelActive[W.ADDED] = !0;
      },
      rename(d) {
        const c = a.value.name, g = e.layers.getByKey(c);
        g.properties.title = d;
        const f = tt(c), w = e.contentTree.getByKey(f);
        w.title = d, a.value.title = d;
      }
    };
  }
}), Xl = {
  key: 0,
  class: "d-flex w-100 py-1 justify-center font-weight-bold"
}, Ql = { class: "pa-2" };
function xl(e, t, a, n, r, u) {
  const i = m("VcsGroupedList"), l = m("WebdataInformations"), d = m("WebdataParameters"), c = m("v-row"), g = m("VDivider"), f = m("VcsFormButton"), w = m("DynamicColumns");
  return y(), L(w, null, {
    left: s(() => [
      o(i, {
        modelValue: e.localSelected,
        "onUpdate:modelValue": t[0] || (t[0] = (h) => e.localSelected = h),
        class: "list h-100",
        items: e.localItems,
        groups: e.groups,
        searchable: "",
        selectable: "",
        "open-all": ""
      }, null, 8, ["modelValue", "items", "groups"])
    ]),
    right: s(() => [
      e.addedSelected ? (y(), L(c, {
        key: 1,
        "no-gutters": "",
        class: "d-flex w-100 h-100"
      }, {
        default: s(() => [
          o(c, {
            "no-gutters": "",
            class: "d-block w-100 overflow-y-auto button-margin"
          }, {
            default: s(() => [
              o(l, {
                item: e.addedSelected,
                title: e.addedSelected.name,
                subtitle: e.addedSelected.url,
                style: { height: "min-content !important" }
              }, null, 8, ["item", "title", "subtitle"]),
              (y(), L(d, {
                key: e.addedSelected.name,
                item: e.addedSelected,
                style: { height: "min-content !important" },
                onRename: e.rename
              }, null, 8, ["item", "onRename"]))
            ]),
            _: 1
            /* STABLE */
          }),
          o(c, {
            "no-gutters": "",
            class: "w-100 justify-end"
          }, {
            default: s(() => [
              o(g),
              j("span", Ql, [
                o(f, {
                  onClick: t[1] || (t[1] = (h) => e.removeLayer(e.addedSelected))
                }, {
                  default: s(() => [
                    b(
                      p(e.$t("dynamicLayer.actions.layer.remove")),
                      1
                      /* TEXT */
                    )
                  ]),
                  _: 1
                  /* STABLE */
                })
              ])
            ]),
            _: 1
            /* STABLE */
          })
        ]),
        _: 1
        /* STABLE */
      })) : (y(), V(
        "span",
        Xl,
        p(e.$t("dynamicLayer.added.selectToEdit")),
        1
        /* TEXT */
      ))
    ]),
    _: 1
    /* STABLE */
  });
}
const eu = /* @__PURE__ */ X(Yl, [["render", xl], ["__scopeId", "data-v-8a25bcf5"]]), yt = "dynamic_layer_window_id", tu = Y({
  name: "DynamicLayer",
  components: {
    VContainer: ht,
    VDivider: et,
    VRow: H,
    VSheet: $a,
    VTab: Ea,
    VTabs: Ca,
    VTabsWindow: La,
    VTabsWindowItem: Aa,
    VcsActionButtonList: Ht,
    VcsBadge: Bn,
    VcsButton: xe,
    AddedData: eu,
    Catalogues: Sl,
    Webdata: Si
  },
  setup() {
    const e = le("vcsApp"), t = e.plugins.getByKey(U), { activeTab: a, addedToMap: n, config: r, leftPanelActive: u } = t, { added: i, selected: l } = t.catalogues, d = ee(() => [
      ...Object.values(W).filter(
        (C) => r.enabledTabs.includes(C)
      ),
      ...n.value.length ? [W.ADDED] : []
    ]), c = ee(() => [
      G({
        name: "dynamicLayer.actions.overview",
        callback: () => {
          l.value = void 0;
        }
      }),
      ...i.value.map((C) => G({
        name: C.title,
        title: `${C.data.count.toLocaleString(e.locale)} ${e.vueI18n.t("dynamicLayer.catalogues.datasets")} @ ${new URL(C.url).host}`,
        active: ee(() => {
          var M;
          return ((M = l.value) == null ? void 0 : M.url) === C.url;
        }),
        callback: () => {
          l.value = C;
        }
      }))
    ]), g = T(!1);
    se(
      () => n.value.length,
      (C, M) => {
        g.value = C > M || g.value;
      }
    ), se(a, () => {
      a.value === W.ADDED && (g.value = !1);
    });
    const { mdAndDown: f } = sn(), w = ee(
      () => a.value === W.CATALOGUES && !l.value
    ), h = ee(() => u[a.value]), S = () => {
      u[a.value] = !u[a.value];
    }, O = (C) => {
      C.key === "ArrowRight" && f.value && S();
    };
    return ca(() => {
      window.addEventListener("keydown", O);
    }), ma(() => {
      window.removeEventListener("keydown", O);
    }), {
      mdAndDown: f,
      disableToggle: w,
      toggleState: h,
      toggleOverlay: S,
      CategoryType: W,
      activeTab: a,
      enabledTabs: d,
      addedCatalogue: i,
      selectedCatalogue: l,
      cataloguesActions: c,
      addedHasUpdate: g,
      switchCategory(C) {
        a.value === W.CATALOGUES && C === W.CATALOGUES && i.value.length > 1 && (l.value = void 0), a.value = C;
      }
    };
  }
});
function nu(e, t, a, n, r, u) {
  const i = m("VcsButton"), l = m("VcsBadge"), d = m("VcsActionButtonList"), c = m("v-tab"), g = m("v-tabs"), f = m("v-row"), w = m("v-divider"), h = m("Webdata"), S = m("v-tabs-window-item"), O = m("Catalogues"), C = m("AddedData"), M = m("v-tabs-window"), F = m("v-container"), K = m("v-sheet");
  return y(), L(K, null, {
    default: s(() => [
      o(f, {
        "no-gutters": "",
        class: "d-flex align-center"
      }, {
        default: s(() => [
          e.mdAndDown ? (y(), L(i, {
            key: 0,
            active: e.toggleState,
            disabled: e.disableToggle,
            tooltip: e.$t("dynamicLayer.actions.toggleDatasetList"),
            icon: "mdi-view-split-vertical",
            class: "toggle-button px-2",
            onClick: e.toggleOverlay
          }, null, 8, ["active", "disabled", "tooltip", "onClick"])) : E("v-if", !0),
          o(g, {
            color: "primary",
            height: "32",
            "model-value": e.activeTab
          }, {
            default: s(() => [
              (y(!0), V(
                Pe,
                null,
                ze(e.enabledTabs, (B) => (y(), V("span", { key: B }, [
                  o(c, {
                    value: B,
                    text: e.$t(`dynamicLayer.${B}.title`),
                    onClick: (A) => e.switchCategory(B)
                  }, nn({
                    append: s(() => [
                      B === e.CategoryType.ADDED && e.addedHasUpdate ? (y(), L(l, {
                        key: 0,
                        class: "position-absolute"
                      })) : B === e.CategoryType.CATALOGUES && e.activeTab === e.CategoryType.CATALOGUES && e.addedCatalogue.length > 1 && e.selectedCatalogue ? (y(), L(d, {
                        key: 1,
                        actions: e.cataloguesActions,
                        "overflow-icon": "mdi-chevron-down",
                        "overflow-count": 0
                      }, null, 8, ["actions"])) : E("v-if", !0)
                    ]),
                    _: 2
                    /* DYNAMIC */
                  }, [
                    B === e.CategoryType.CATALOGUES && e.addedCatalogue.length === 1 ? {
                      name: "default",
                      fn: s(() => [
                        b(
                          p(e.addedCatalogue[0].title),
                          1
                          /* TEXT */
                        )
                      ]),
                      key: "0"
                    } : void 0
                  ]), 1032, ["value", "text", "onClick"])
                ]))),
                128
                /* KEYED_FRAGMENT */
              ))
            ]),
            _: 1
            /* STABLE */
          }, 8, ["model-value"])
        ]),
        _: 1
        /* STABLE */
      }),
      o(w),
      o(F, { class: "pa-0 dl-content" }, {
        default: s(() => [
          o(M, {
            modelValue: e.activeTab,
            "onUpdate:modelValue": t[0] || (t[0] = (B) => e.activeTab = B),
            class: "h-100"
          }, {
            default: s(() => [
              o(S, {
                value: e.CategoryType.WEBDATA,
                class: "h-100"
              }, {
                default: s(() => [
                  o(h)
                ]),
                _: 1
                /* STABLE */
              }, 8, ["value"]),
              o(S, {
                value: e.CategoryType.CATALOGUES,
                class: "h-100"
              }, {
                default: s(() => [
                  o(O)
                ]),
                _: 1
                /* STABLE */
              }, 8, ["value"]),
              o(S, {
                value: e.CategoryType.ADDED,
                class: "h-100"
              }, {
                default: s(() => [
                  o(C)
                ]),
                _: 1
                /* STABLE */
              }, 8, ["value"])
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
  });
}
const au = /* @__PURE__ */ X(tu, [["render", nu], ["__scopeId", "data-v-a5ec1678"]]);
function Dn() {
  return {
    defaultTab: W.WEBDATA,
    enabledTabs: [W.WEBDATA, W.CATALOGUES],
    webdata: {
      defaultType: $.WMS,
      defaultUrl: ""
    },
    catalogues: {
      itemsPerPage: 14,
      presets: []
    }
  };
}
const ru = Y({
  name: "DynamicLayerConfigEditor",
  components: {
    VCard: Ke,
    VCol: ie,
    VContainer: ht,
    VDialog: on,
    VForm: Va,
    VRow: H,
    AbstractConfigEditor: Kn,
    VcsChipArrayInput: zn,
    VcsFormButton: je,
    VcsFormSection: Xe,
    VcsLabel: me,
    VcsList: Jt,
    VcsSelect: Be,
    VcsTextArea: jn,
    VcsTextField: Ae
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
    const t = Dn(), a = e.getConfig(), n = T({ ...t, ...a }), r = T(
      Object.values(W).filter((f) => f !== W.ADDED).map((f) => ({
        title: `dynamicLayer.${f}.title`,
        value: f
      }))
    ), u = T(pt(W.WEBDATA)), i = T(pt(W.CATALOGUES)), l = T([]), d = T({
      url: "",
      type: x.PIVEAU,
      defaultSorting: Ce.relevance,
      title: "",
      subtitle: "",
      logo: "",
      description: ""
    });
    se(
      () => d.value.type,
      (f) => {
        d.value.defaultSorting = vn(f), f === x.GEONETWORK ? d.value.aggregationKeys = ft : delete d.value.aggregationKeys;
      }
    );
    const c = T(!1);
    function g() {
      l.value = [], n.value.catalogues.presets.forEach((f) => {
        l.value.push({
          title: f.title ?? f.url,
          actions: [
            G({
              name: "dynamicLayer.actions.edit",
              icon: "mdi-pencil",
              callback: () => {
                c.value = !0, d.value = f;
              }
            }),
            G({
              name: "dynamicLayer.actions.remove",
              icon: "mdi-delete",
              callback: () => {
                const w = n.value.catalogues.presets.findIndex(
                  (S) => S.url === f.url
                );
                n.value.catalogues.presets.splice(w, 1);
                const h = l.value.findIndex(
                  (S) => S.title === (f.title ?? f.url)
                );
                l.value.splice(h, 1);
              }
            })
          ]
        });
      });
    }
    return g(), {
      CategoryType: W,
      localConfig: n,
      tabs: r,
      webdataTypes: u,
      cataloguesTypes: i,
      catalogues: l,
      menuCatalogueItem: d,
      dialog: c,
      defaultAggregationKeys: ft,
      supportsSorting: ee(
        () => d.value.type !== x.NBS
      ),
      getsortOptions: (f) => f === x.PIVEAU ? Object.entries(Ce).map(
        ([w, h]) => ({
          value: h,
          title: `dynamicLayer.catalogues.sortBy.${w}`
        })
      ) : f === x.IDRA ? Object.entries(Ze).map(([w, h]) => ({
        value: h,
        title: `dynamicLayer.catalogues.sortBy.${w}`
      })) : f === x.GEONETWORK ? Object.entries(qe).map(
        ([w, h]) => ({
          value: h,
          title: `dynamicLayer.catalogues.sortBy.${w}`
        })
      ) : [],
      titleAction: T([
        {
          name: "dynamicLayer.config.addPreset",
          icon: "$vcsPlus",
          callback() {
            c.value = !0, d.value = {
              url: "",
              type: x.PIVEAU,
              defaultSorting: Ce.relevance,
              title: "",
              subtitle: "",
              logo: "",
              description: ""
            };
          }
        }
      ]),
      isUrl(f) {
        try {
          return !!new URL(f);
        } catch {
          return "dynamicLayer.errors.invalidUrl";
        }
      },
      isValidFilter(f) {
        if (!f)
          return !0;
        try {
          return JSON.parse(f), !0;
        } catch {
          return "dynamicLayer.errors.invalidJson";
        }
      },
      checkDefaultTab() {
        n.value.enabledTabs.includes(
          n.value.defaultTab
        ) || (n.value.defaultTab = n.value.enabledTabs[0]);
      },
      addOrUpdate() {
        const f = n.value.catalogues.presets.findIndex(
          (w) => w.url === d.value.url
        );
        f !== -1 ? n.value.catalogues.presets[f] = P(
          d.value
        ) : n.value.catalogues.presets.push(
          P(d.value)
        ), c.value = !1, g();
      },
      apply() {
        const f = structuredClone(
          P(n.value)
        );
        f.enabledTabs.map(P), f.webdata = structuredClone(P(f.webdata)), f.catalogues = {
          itemsPerPage: P(f.catalogues.itemsPerPage),
          presets: f.catalogues.presets.map(
            (w) => structuredClone(P(w))
          )
        }, e.setConfig(f);
      }
    };
  }
}), ou = { key: 0 }, su = { key: 0 }, iu = { class: "d-flex justify-end gc-2 pt-1" };
function lu(e, t, a, n, r, u) {
  const i = m("VcsLabel"), l = m("v-col"), d = m("VcsSelect"), c = m("v-row"), g = m("VcsFormSection"), f = m("VcsTextField"), w = m("VcsList"), h = m("VcsChipArrayInput"), S = m("VcsTextArea"), O = m("VcsFormButton"), C = m("v-form"), M = m("v-card"), F = m("v-dialog"), K = m("v-container"), B = m("AbstractConfigEditor");
  return e.localConfig ? (y(), L(B, {
    key: 0,
    onSubmit: e.apply
  }, {
    default: s(() => [
      o(K, { class: "pa-0" }, {
        default: s(() => [
          o(g, {
            heading: e.$t("dynamicLayer.config.general"),
            expandable: "",
            "start-open": "",
            disabled: !e.localConfig.enabledTabs.includes(e.CategoryType.WEBDATA)
          }, {
            default: s(() => [
              o(c, { "no-gutters": "" }, {
                default: s(() => [
                  o(l, null, {
                    default: s(() => [
                      o(i, { "html-for": "enabledTabs" }, {
                        default: s(() => [
                          b(
                            p(e.$t("dynamicLayer.config.enabledTabs")),
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
                    default: s(() => [
                      o(d, {
                        id: "enabledTabs",
                        modelValue: e.localConfig.enabledTabs,
                        "onUpdate:modelValue": [
                          t[0] || (t[0] = (A) => e.localConfig.enabledTabs = A),
                          e.checkDefaultTab
                        ],
                        multiple: "",
                        items: e.tabs,
                        rules: [(A) => !!A.length]
                      }, null, 8, ["modelValue", "items", "rules", "onUpdate:modelValue"])
                    ]),
                    _: 1
                    /* STABLE */
                  })
                ]),
                _: 1
                /* STABLE */
              }),
              o(c, { "no-gutters": "" }, {
                default: s(() => [
                  o(l, null, {
                    default: s(() => [
                      o(i, { "html-for": "defaultTab" }, {
                        default: s(() => [
                          b(
                            p(e.$t("dynamicLayer.config.defaultTab")),
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
                    default: s(() => [
                      o(d, {
                        id: "defaultTab",
                        modelValue: e.localConfig.defaultTab,
                        "onUpdate:modelValue": t[1] || (t[1] = (A) => e.localConfig.defaultTab = A),
                        actions: e.titleAction,
                        items: e.tabs.filter((A) => e.localConfig.enabledTabs.includes(A.value))
                      }, null, 8, ["modelValue", "actions", "items"])
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
          }, 8, ["heading", "disabled"]),
          o(g, {
            heading: e.$t("dynamicLayer.webdata.title"),
            expandable: e.localConfig.enabledTabs.includes(e.CategoryType.WEBDATA),
            "start-open": "",
            disabled: !e.localConfig.enabledTabs.includes(e.CategoryType.WEBDATA)
          }, {
            default: s(() => [
              e.localConfig.enabledTabs.includes(e.CategoryType.WEBDATA) ? (y(), V("span", ou, [
                o(c, { "no-gutters": "" }, {
                  default: s(() => [
                    o(l, null, {
                      default: s(() => [
                        o(i, { "html-for": "webdataType" }, {
                          default: s(() => [
                            b(
                              p(e.$t("dynamicLayer.config.defaultType")),
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
                      default: s(() => [
                        o(d, {
                          id: "webdataType",
                          modelValue: e.localConfig.webdata.defaultType,
                          "onUpdate:modelValue": t[2] || (t[2] = (A) => e.localConfig.webdata.defaultType = A),
                          items: e.webdataTypes
                        }, null, 8, ["modelValue", "items"])
                      ]),
                      _: 1
                      /* STABLE */
                    })
                  ]),
                  _: 1
                  /* STABLE */
                }),
                o(c, { "no-gutters": "" }, {
                  default: s(() => [
                    o(l, null, {
                      default: s(() => [
                        o(i, { "html-for": "webdataUrl" }, {
                          default: s(() => [
                            b(
                              p(e.$t("dynamicLayer.config.defaultUrl")),
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
                      default: s(() => [
                        o(f, {
                          id: "webdataUrl",
                          modelValue: e.localConfig.webdata.defaultUrl,
                          "onUpdate:modelValue": t[3] || (t[3] = (A) => e.localConfig.webdata.defaultUrl = A)
                        }, null, 8, ["modelValue"])
                      ]),
                      _: 1
                      /* STABLE */
                    })
                  ]),
                  _: 1
                  /* STABLE */
                })
              ])) : E("v-if", !0)
            ]),
            _: 1
            /* STABLE */
          }, 8, ["heading", "expandable", "disabled"]),
          o(g, {
            heading: e.$t("dynamicLayer.catalogues.title"),
            expandable: e.localConfig.enabledTabs.includes(e.CategoryType.CATALOGUES),
            "start-open": "",
            disabled: !e.localConfig.enabledTabs.includes(e.CategoryType.CATALOGUES)
          }, {
            default: s(() => [
              e.localConfig.enabledTabs.includes(e.CategoryType.CATALOGUES) ? (y(), V("span", su, [
                o(c, { "no-gutters": "" }, {
                  default: s(() => [
                    o(l, null, {
                      default: s(() => [
                        o(i, { "html-for": "cataloguesItemsPerPage" }, {
                          default: s(() => [
                            b(
                              p(e.$t("dynamicLayer.config.itemsPerPage")),
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
                      default: s(() => [
                        o(f, {
                          id: "cataloguesItemsPerPage",
                          modelValue: e.localConfig.catalogues.itemsPerPage,
                          "onUpdate:modelValue": t[4] || (t[4] = (A) => e.localConfig.catalogues.itemsPerPage = A),
                          modelModifiers: { number: !0 },
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
                o(c, { "no-gutters": "" }, {
                  default: s(() => [
                    o(w, {
                      items: e.catalogues,
                      title: "dynamicLayer.config.presets",
                      actions: e.titleAction
                    }, null, 8, ["items", "actions"])
                  ]),
                  _: 1
                  /* STABLE */
                }),
                o(F, {
                  "model-value": !!e.dialog,
                  width: "500",
                  "onUpdate:modelValue": t[15] || (t[15] = (A) => e.dialog = A)
                }, {
                  default: s(() => [
                    o(M, { class: "pa-2" }, {
                      default: s(() => [
                        o(C, {
                          onSubmit: fa(e.addOrUpdate, ["prevent"])
                        }, {
                          default: s(() => [
                            o(c, { "no-gutters": "" }, {
                              default: s(() => [
                                o(l, null, {
                                  default: s(() => [
                                    o(i, {
                                      required: "",
                                      "html-for": "title"
                                    }, {
                                      default: s(() => [
                                        b(
                                          p(e.$t("dynamicLayer.common.title")),
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
                                  default: s(() => [
                                    o(f, {
                                      id: "title",
                                      modelValue: e.menuCatalogueItem.title,
                                      "onUpdate:modelValue": t[5] || (t[5] = (A) => e.menuCatalogueItem.title = A)
                                    }, null, 8, ["modelValue"])
                                  ]),
                                  _: 1
                                  /* STABLE */
                                })
                              ]),
                              _: 1
                              /* STABLE */
                            }),
                            o(c, { "no-gutters": "" }, {
                              default: s(() => [
                                o(l, null, {
                                  default: s(() => [
                                    o(i, {
                                      required: "",
                                      "html-for": "url"
                                    }, {
                                      default: s(() => [
                                        b("URL")
                                      ]),
                                      _: 1
                                      /* STABLE */
                                    })
                                  ]),
                                  _: 1
                                  /* STABLE */
                                }),
                                o(l, null, {
                                  default: s(() => [
                                    o(f, {
                                      id: "url",
                                      modelValue: e.menuCatalogueItem.url,
                                      "onUpdate:modelValue": t[6] || (t[6] = (A) => e.menuCatalogueItem.url = A),
                                      rules: [() => e.isUrl(e.menuCatalogueItem.url)]
                                    }, null, 8, ["modelValue", "rules"])
                                  ]),
                                  _: 1
                                  /* STABLE */
                                })
                              ]),
                              _: 1
                              /* STABLE */
                            }),
                            o(c, { "no-gutters": "" }, {
                              default: s(() => [
                                o(l, null, {
                                  default: s(() => [
                                    o(i, {
                                      required: "",
                                      "html-for": "type"
                                    }, {
                                      default: s(() => [
                                        b(
                                          p(e.$t("dynamicLayer.common.type")),
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
                                  default: s(() => [
                                    o(d, {
                                      id: "type",
                                      modelValue: e.menuCatalogueItem.type,
                                      "onUpdate:modelValue": t[7] || (t[7] = (A) => e.menuCatalogueItem.type = A),
                                      items: e.cataloguesTypes
                                    }, null, 8, ["modelValue", "items"])
                                  ]),
                                  _: 1
                                  /* STABLE */
                                })
                              ]),
                              _: 1
                              /* STABLE */
                            }),
                            o(c, { "no-gutters": "" }, {
                              default: s(() => [
                                o(l, null, {
                                  default: s(() => [
                                    o(i, { "html-for": "subtitle" }, {
                                      default: s(() => [
                                        b(
                                          p(e.$t("dynamicLayer.config.subtitle")),
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
                                  default: s(() => [
                                    o(f, {
                                      id: "subtitle",
                                      modelValue: e.menuCatalogueItem.subtitle,
                                      "onUpdate:modelValue": t[8] || (t[8] = (A) => e.menuCatalogueItem.subtitle = A)
                                    }, null, 8, ["modelValue"])
                                  ]),
                                  _: 1
                                  /* STABLE */
                                })
                              ]),
                              _: 1
                              /* STABLE */
                            }),
                            o(c, { "no-gutters": "" }, {
                              default: s(() => [
                                o(l, null, {
                                  default: s(() => [
                                    o(i, { "html-for": "logo" }, {
                                      default: s(() => [
                                        b(
                                          p(e.$t("dynamicLayer.config.logo")),
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
                                  default: s(() => [
                                    o(f, {
                                      id: "logo",
                                      modelValue: e.menuCatalogueItem.logo,
                                      "onUpdate:modelValue": t[9] || (t[9] = (A) => e.menuCatalogueItem.logo = A)
                                    }, null, 8, ["modelValue"])
                                  ]),
                                  _: 1
                                  /* STABLE */
                                })
                              ]),
                              _: 1
                              /* STABLE */
                            }),
                            e.supportsSorting ? (y(), L(c, {
                              key: 0,
                              "no-gutters": ""
                            }, {
                              default: s(() => [
                                o(l, null, {
                                  default: s(() => [
                                    o(i, { "html-for": "defaultSorting" }, {
                                      default: s(() => [
                                        b(
                                          p(e.$t("dynamicLayer.config.defaultSorting")),
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
                                  default: s(() => [
                                    o(d, {
                                      id: "defaultSorting",
                                      modelValue: e.menuCatalogueItem.defaultSorting,
                                      "onUpdate:modelValue": t[10] || (t[10] = (A) => e.menuCatalogueItem.defaultSorting = A),
                                      items: e.getsortOptions(e.menuCatalogueItem.type)
                                    }, null, 8, ["modelValue", "items"])
                                  ]),
                                  _: 1
                                  /* STABLE */
                                })
                              ]),
                              _: 1
                              /* STABLE */
                            })) : E("v-if", !0),
                            e.menuCatalogueItem.type === "geonetwork" || e.menuCatalogueItem.type === "piveau" ? (y(), L(c, {
                              key: 1,
                              "no-gutters": ""
                            }, {
                              default: s(() => [
                                o(l, null, {
                                  default: s(() => [
                                    o(i, { "html-for": "filter" }, {
                                      default: s(() => [
                                        b(
                                          p(e.$t("dynamicLayer.config.filter")),
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
                                  default: s(() => [
                                    o(f, {
                                      id: "filter",
                                      rules: [e.isValidFilter],
                                      "model-value": JSON.stringify(e.menuCatalogueItem.filter),
                                      "onUpdate:modelValue": t[11] || (t[11] = (A) => e.menuCatalogueItem.filter = A ? JSON.parse(A) : void 0)
                                    }, null, 8, ["rules", "model-value"])
                                  ]),
                                  _: 1
                                  /* STABLE */
                                })
                              ]),
                              _: 1
                              /* STABLE */
                            })) : E("v-if", !0),
                            e.menuCatalogueItem.type === "geonetwork" ? (y(), L(c, {
                              key: 2,
                              "no-gutters": ""
                            }, {
                              default: s(() => [
                                o(l, null, {
                                  default: s(() => [
                                    o(i, { "html-for": "aggregationKeys" }, {
                                      default: s(() => [
                                        b(
                                          p(e.$t("dynamicLayer.config.aggregationKeys")),
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
                                  default: s(() => [
                                    o(h, {
                                      id: "aggregationKeys",
                                      column: "",
                                      "model-value": e.menuCatalogueItem.aggregationKeys ?? e.defaultAggregationKeys,
                                      "onUpdate:modelValue": t[12] || (t[12] = (A) => e.menuCatalogueItem.aggregationKeys = A)
                                    }, null, 8, ["model-value"])
                                  ]),
                                  _: 1
                                  /* STABLE */
                                })
                              ]),
                              _: 1
                              /* STABLE */
                            })) : E("v-if", !0),
                            o(c, { "no-gutters": "" }, {
                              default: s(() => [
                                o(S, {
                                  modelValue: e.menuCatalogueItem.description,
                                  "onUpdate:modelValue": t[13] || (t[13] = (A) => e.menuCatalogueItem.description = A),
                                  placeholder: `${e.$t("dynamicLayer.common.description")} (markdown)`
                                }, null, 8, ["modelValue", "placeholder"])
                              ]),
                              _: 1
                              /* STABLE */
                            }),
                            j("span", iu, [
                              o(O, {
                                variant: "filled",
                                type: "submit",
                                disabled: !e.menuCatalogueItem.title || !e.menuCatalogueItem.url
                              }, {
                                default: s(() => [
                                  b(
                                    p(e.$t("dynamicLayer.actions.apply")),
                                    1
                                    /* TEXT */
                                  )
                                ]),
                                _: 1
                                /* STABLE */
                              }, 8, ["disabled"]),
                              o(O, {
                                onClick: t[14] || (t[14] = (A) => e.dialog = !1)
                              }, {
                                default: s(() => [
                                  b(
                                    p(e.$t("dynamicLayer.actions.cancel")),
                                    1
                                    /* TEXT */
                                  )
                                ]),
                                _: 1
                                /* STABLE */
                              })
                            ])
                          ]),
                          _: 1
                          /* STABLE */
                        }, 8, ["onSubmit"])
                      ]),
                      _: 1
                      /* STABLE */
                    })
                  ]),
                  _: 1
                  /* STABLE */
                }, 8, ["model-value"])
              ])) : E("v-if", !0)
            ]),
            _: 1
            /* STABLE */
          }, 8, ["heading", "expandable", "disabled"])
        ]),
        _: 1
        /* STABLE */
      })
    ]),
    _: 1
    /* STABLE */
  }, 8, ["onSubmit"])) : E("v-if", !0);
}
const uu = /* @__PURE__ */ X(ru, [["render", lu], ["__scopeId", "data-v-8451856c"]]);
function yu(e) {
  let t, a;
  const n = [], r = G({}), i = Ja({ mergeArrays: !1 })(Dn(), e), l = T([]), d = T(), c = G({
    [W.WEBDATA]: !1,
    [W.CATALOGUES]: !0,
    [W.ADDED]: !1
  }), g = T(
    i.enabledTabs.includes(i.defaultTab) ? i.defaultTab : i.enabledTabs[0]
  ), f = {
    added: T([]),
    selected: T(),
    selectedDataset: T(),
    expandedDistributionIds: T([])
  }, w = {
    added: T([]),
    selected: T(),
    opened: T([])
  };
  return {
    get name() {
      return U;
    },
    get version() {
      return er;
    },
    get mapVersion() {
      return tr;
    },
    get config() {
      return i;
    },
    state: r,
    activeTab: g,
    addedToMap: l,
    addedSelected: d,
    catalogues: f,
    webdata: w,
    leftPanelActive: c,
    get layerIndex() {
      if (!a) {
        const h = [...t.layers].map((S) => S.zIndex).filter((S) => S < ia);
        a = Math.max(0, ...h);
      }
      return a += 1, a;
    },
    initialize(h, S) {
      if (t = h, !g.value)
        throw new Error(
          `${U} ${t.vueI18n.t("dynamicLayer.error.noActiveCategory")}`
        );
      const { action: O, destroy: C } = Gn(
        {
          name: "dynamicLayer.title",
          icon: "mdi-database-search-outline",
          title: "dynamicLayer.title"
        },
        {
          id: yt,
          component: au,
          state: {
            infoUrlCallback: t.getHelpUrlCallback(
              "/tools/dynamicLayerTool.html"
            ),
            headerTitle: "dynamicLayer.title",
            headerIcon: "mdi-database-search-outline"
          },
          slot: qn.DETACHED,
          position: {
            left: "20%",
            right: "20%",
            top: "10%",
            height: 600
          }
        },
        h.windowManager,
        U
      );
      n.push(C), h.navbarManager.add(
        { id: U, action: O },
        U,
        Zn.CONTENT
      );
      const M = new Jn(
        {
          name: U,
          title: "dynamicLayer.contentTreeTitle",
          initOpen: !0
        },
        h
      );
      $t(M), h.contentTree.add(M);
      const F = new Hn({ name: U });
      return $t(F), h.featureInfo.add(F), i.enabledTabs.includes(W.CATALOGUES) && qr(t, i.catalogues.presets, S == null ? void 0 : S.entry), S && Object.entries(S).forEach(([K, B]) => {
        if (K === "entry")
          r.entry = B, Yn(O);
        else {
          const { type: A, layerNames: ne } = B;
          Ct(t, { url: K, type: A }).then((D) => {
            D.children.forEach((_) => {
              Ue((Z) => {
                ne.includes(Z.name) && ke(t, Z).catch((de) => {
                  Se(U).error(String(de));
                });
              }, _);
            }), w.added.value.push(D);
          }).catch((D) => {
            Se(U).error(String(D));
          });
        }
      }), Promise.resolve();
    },
    getState() {
      return r;
    },
    i18n: { en: or, de: ar },
    toJSON() {
      return {
        defaultTab: i.defaultTab,
        enabledTabs: i.enabledTabs,
        webdata: i.webdata,
        catalogues: i.catalogues
      };
    },
    getConfigEditors() {
      return [
        {
          component: uu,
          title: "dynamicLayer.configEditorTitle",
          infoUrlCallback: t.getHelpUrlCallback(
            "/components/plugins/dynamicLayerConfig.html",
            "app-configurator"
          )
        }
      ];
    },
    destroy() {
      n.forEach((O) => {
        O();
      }), t.navbarManager.remove(U);
      const h = t.contentTree.getByKey(U);
      h && t.contentTree.remove(h);
      const S = t.featureInfo.getByKey(U);
      S && t.featureInfo.remove(S);
    }
  };
}
export {
  yu as default
};
