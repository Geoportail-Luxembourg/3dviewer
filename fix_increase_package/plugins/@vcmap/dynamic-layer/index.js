
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
} await loadCss('data:text/css;base64,LnRpdGxlLXBhcmVudFtkYXRhLXYtMjA3MTc5NGFde292ZXJmbG93OmhpZGRlbjt0ZXh0LW92ZXJmbG93OmVsbGlwc2lzO2N1cnNvcjpwb2ludGVyfS5hY3RpdmVbZGF0YS12LTIwNzE3OTRhXXtjb2xvcjpyZ2IodmFyKC0tdi10aGVtZS1wcmltYXJ5KSl9LnRpdGxlW2RhdGEtdi00M2E3NGY2YV17Zm9udC13ZWlnaHQ6NzAwO3RleHQtZGVjb3JhdGlvbjp1bmRlcmxpbmU7ZGlzcGxheTpmbGV4O2p1c3RpZnktY29udGVudDpjZW50ZXJ9LnN1YnRpdGxlW2RhdGEtdi00M2E3NGY2YV17Zm9udC1zdHlsZTppdGFsaWM7ZGlzcGxheTpmbGV4O2p1c3RpZnktY29udGVudDpjZW50ZXI7cGFkZGluZy1ib3R0b206MXB4O3doaXRlLXNwYWNlOm5vd3JhcCFpbXBvcnRhbnQ7b3ZlcmZsb3c6aGlkZGVuIWltcG9ydGFudDt0ZXh0LW92ZXJmbG93OmVsbGlwc2lzIWltcG9ydGFudH0uc2VjdGlvbltkYXRhLXYtNDNhNzRmNmFdIC5zZWN0aW9uLWNvbnRlbnR7aGVpZ2h0OmNhbGMoMTAwJSAtICh2YXIoLS12LXZjcy1mb250LXNpemUpICogMiArIDYycHgpKSFpbXBvcnRhbnR9LnRyZWV2aWV3W2RhdGEtdi1mODAyMGExY10gLnZjcy1hY3Rpb24tYnV0dG9uLWxpc3R7cGFkZGluZy1yaWdodDo4cHghaW1wb3J0YW50fS50cmVldmlld1tkYXRhLXYtZjgwMjBhMWNdIC5wcmVwZW5kOm5vdCgubGV2ZWwtMCAucHJlcGVuZCl7ZGlzcGxheTpub25lIWltcG9ydGFudH0udHJlZXZpZXdbZGF0YS12LWY4MDIwYTFjXSAudHJlZW5vZGU6aGFzKC5hY3RpdmUpPmJ1dHRvbj5zcGFuPml7Y29sb3I6cmdiKHZhcigtLXYtdGhlbWUtcHJpbWFyeSkpIWltcG9ydGFudH0uZml4ZWQtYm90dG9tW2RhdGEtdi1mODAyMGExY117cG9zaXRpb246c3RpY2t5IWltcG9ydGFudDtmbGV4LWdyb3c6MDtib3R0b206MDttYXJnaW4tdG9wOmF1dG87ei1pbmRleDoxO2JhY2tncm91bmQtY29sb3I6cmdiKHZhcigtLXYtdGhlbWUtc3VyZmFjZSkpfS5idXR0b24tbWFyZ2luW2RhdGEtdi1mODAyMGExY117aGVpZ2h0OmNhbGMoMTAwJSAtICh2YXIoLS12LXZjcy1mb250LXNpemUpICogMiArIDE2cHgpKSFpbXBvcnRhbnR9W2RhdGEtdi1hNDY4YmM0Yl0gLnYtbGlzdHt3aWR0aDoxMDAlO2hlaWdodDo0NDhweH1bZGF0YS12LWE0NjhiYzRiXSAudi1wYWdpbmF0aW9uX19saXN0IC52LXBhZ2luYXRpb25fX3ByZXZ7cG9zaXRpb246YWJzb2x1dGU7bGVmdDowfVtkYXRhLXYtYTQ2OGJjNGJdIC52LXBhZ2luYXRpb25fX2xpc3QgLnYtcGFnaW5hdGlvbl9faXRlbT5idXR0b257d2lkdGg6Zml0LWNvbnRlbnQ7bWluLXdpZHRoOjI4cHh9W2RhdGEtdi1hNDY4YmM0Yl0gLnYtcGFnaW5hdGlvbl9fbGlzdCAudi1wYWdpbmF0aW9uX19uZXh0e3Bvc2l0aW9uOmFic29sdXRlO3JpZ2h0OjU4LjUlfS50cmVldmlld1tkYXRhLXYtNmEzNWMyMmJdIC52Y3MtYWN0aW9uLWJ1dHRvbi1saXN0e3BhZGRpbmctcmlnaHQ6OHB4IWltcG9ydGFudH0udHJlZXZpZXdbZGF0YS12LTZhMzVjMjJiXSAudi1zcGFjZXJ7ZGlzcGxheTpub25lIWltcG9ydGFudH1bZGF0YS12LWI2NjVlNTRlXSAudi1kYXRhLXRhYmxlX190ZHt3b3JkLWJyZWFrOmJyZWFrLWFsbH0ubWF4LWhlaWdodFtkYXRhLXYtMWFmNjkwNzZde2hlaWdodDo1MzBweH0uZGV0YWlsc1tkYXRhLXYtMWFmNjkwNzZde2JhY2tncm91bmQtY29sb3I6cmdiKHZhcigtLXYtdGhlbWUtb24tc3VyZmFjZS12YXJpYW50KSl9Lm1heC0zLWxpbmVzW2RhdGEtdi0xYWY2OTA3Nl17ZGlzcGxheTotd2Via2l0LWJveDstd2Via2l0LWxpbmUtY2xhbXA6Mzstd2Via2l0LWJveC1vcmllbnQ6dmVydGljYWw7aGVpZ2h0OjEwMCV9W2RhdGEtdi0xYWY2OTA3Nl0gLnYtY2FyZD4udi1jYXJkLWl0ZW17aGVpZ2h0OmNhbGMoMTAwJSAtIDQ4cHgpO2FsaWduLWNvbnRlbnQ6c3RhcnR9W2RhdGEtdi05MDNjZjY5NF0gLmJhZGdle3RvcDotNnB4O3JpZ2h0Oi02cHh9Lmxpc3RbZGF0YS12LWZmOWZlMzEwXSAudi1leHBhbnNpb24tcGFuZWxze2hlaWdodDpjYWxjKDEwMCUgLSAodmFyKC0tdi12Y3MtZm9udC1zaXplKSAqIDIgKyAxOHB4KSkhaW1wb3J0YW50O292ZXJmbG93LXk6YXV0bzthbGlnbi1jb250ZW50OmZsZXgtc3RhcnR9Lmxpc3RbZGF0YS12LWZmOWZlMzEwXSAudi1saXN0LWl0ZW17cGFkZGluZy1sZWZ0OjI0cHghaW1wb3J0YW50fS5saXN0W2RhdGEtdi1mZjlmZTMxMF0gLnYtbGlzdC1pdGVtLnYtbGlzdC1pdGVtLS1hY3RpdmV7cGFkZGluZy1sZWZ0OjIwcHghaW1wb3J0YW50fS5saXN0W2RhdGEtdi1mZjlmZTMxMF0gLnYtc3BhY2Vye2Rpc3BsYXk6bm9uZSFpbXBvcnRhbnR9LmJ1dHRvbi1tYXJnaW5bZGF0YS12LWZmOWZlMzEwXXtoZWlnaHQ6Y2FsYygxMDAlIC0gKHZhcigtLXYtdmNzLWZvbnQtc2l6ZSkgKiAyICsgMjBweCkpIWltcG9ydGFudH0uZGwtY29udGVudFtkYXRhLXYtOWUwNDM0YmFde2hlaWdodDpjYWxjKDU2MnB4IC0gdmFyKC0tdi12Y3MtZm9udC1zaXplKSAqIDIgLSA2cHgpfS52Y3MtYmFkZ2VbZGF0YS12LTllMDQzNGJhXXt0b3A6NHB4O3JpZ2h0OjJweH1bZGF0YS12LWE2MTIxYzY5XSAudmNzTGlzdHt3aWR0aDoxMDAlIWltcG9ydGFudH0K');import { LayerContentTreeItem as Ot, NotificationType as ye, getPluginAssetUrl as hn, createEllipseTooltip as bn, VcsLabel as le, VcsExtent as Je, VcsFormSection as Ye, VcsTreeviewSearchbar as kt, VcsTreeview as Mt, VcsTextField as be, VcsSelect as Fe, VcsFormButton as We, VcsButton as ut, VcsList as Nt, VcsActionButtonList as Ut, VcsDataTable as Sn, VcsMarkdown as wn, VcsSlider as Ft, VcsCheckbox as ct, VcsGroupedList as Tn, VcsBadge as Ln, VcsTextArea as An, AbstractConfigEditor as Cn, createToggleAction as En, WindowSlot as _n, ButtonLocation as $n, GroupContentTreeItem as Vn, TableFeatureInfoView as Rn, callSafeAction as Pn } from "../../../assets/ui.js";
import { Extent as pe, GeoJSONLayer as Wt, Viewpoint as Bt, VectorStyleItem as In, WMSLayer as Dn, wgs84Projection as On, WMSFeatureProvider as kn, CesiumTilesetLayer as Mn, TerrainLayer as Nn, WFSLayer as Un, WMTSLayer as Fn, Projection as zt, PointCloudLayer as Wn, CzmlLayer as Bn, maxZIndex as zn } from "../../../assets/core.js";
import { reactive as B, toRaw as D, defineComponent as H, ref as w, computed as ne, createElementBlock as E, openBlock as g, normalizeClass as jn, createElementVNode as U, createBlock as A, createCommentVNode as $, toDisplayString as y, unref as Ee, withCtx as s, createTextVNode as b, resolveComponent as m, Fragment as _e, renderList as Be, createVNode as o, inject as re, withKeys as jt, createSlots as Gn, watch as te, nextTick as Kn, resolveDynamicComponent as qn, mergeProps as Zn, withModifiers as Hn } from "../../../assets/vue.js";
import { VTooltip as Jn, VRow as Y, VChip as Gt, VSpacer as Yn, VDivider as Xe, VCol as oe, VCardTitle as Xn, VCard as ze, VPagination as Qn, VMenu as xn, VIcon as ea, VDialog as Kt, VContainer as mt, VCardText as ta, VTabsWindowItem as na, VTabsWindow as aa, VTabs as ra, VTab as oa, VSheet as sa, VForm as ia } from "../../../assets/vuetify.js";
import { ol$Feature as la, ol$geom$Point as da, ol$style$Style as ua, ol$format$WMSCapabilities as ca, ol$xml$makeStructureNS as V, ol$xml$makeObjectPropertySetter as h, ol$format$xsd$readString as I, ol$xml$makeObjectPropertyPusher as Te, ol$xml$makeArrayPusher as ae, ol$format$xlink$readHref as rt, ol$xml$pushParseAndPop as P, ol$xml$getAllTextContent as ma, ol$format$XML as pa, ol$format$WMTSCapabilities as fa } from "../../../assets/ol.js";
const Z = {
  ERROR: 2,
  WARN: 4,
  INFO: 8,
  DEBUG: 16
}, he = {
  ERROR: 0,
  WARN: 0,
  INFO: 0,
  DEBUG: 0
};
he.ERROR = Z.ERROR | Z.WARN | Z.INFO | Z.DEBUG;
he.WARN = Z.WARN | Z.INFO | Z.DEBUG;
he.INFO = Z.INFO | Z.DEBUG;
he.DEBUG = Z.DEBUG;
const Ne = {
  logLevel: Z.INFO
}, je = /* @__PURE__ */ new Map();
je.set(Z.ERROR, "error");
je.set(Z.WARN, "warn");
je.set(Z.INFO, "info");
je.set(Z.DEBUG, "log");
class ya {
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
  error(t, ...n) {
    Ne.logLevel & he.ERROR && this._log(String(t), Z.ERROR, n);
  }
  /**
   * Logs a warning message
   * @param {string} msg The message to log.
   * @param {...any} optArgs
   */
  warning(t, ...n) {
    Ne.logLevel & he.WARN && this._log(String(t), Z.WARN, n);
  }
  /**
   * Deprecate a function. deprecations are stored on the logger
   * @param {string} functionName
   * @param {string=} alternativeFunctionName
   */
  deprecate(t, n) {
    const a = String(t), r = n ? String(n) : null;
    if (!this.deprecations.has(a)) {
      this.deprecations.set(a, r || null);
      let l = `${a} has been deprecated and will be removed`;
      r && (l = `${l}. ${r}`), this.warning(l);
    }
  }
  /**
   * Logs an info message
   * @param {string} msg The message to log.
   * @param {...any} optArgs
   */
  info(t, ...n) {
    Ne.logLevel & he.INFO && this._log(String(t), Z.INFO, n);
  }
  /**
   * Logs a debug message
   * @param {string} msg The message to log.
   * @param {...any} optArgs
   */
  debug(t, ...n) {
    Ne.logLevel & he.DEBUG && this._log(String(t), Z.DEBUG, n);
  }
  /**
   * Alias for debug
   * @param {string} msg The message to log.
   * @param {...any} optArgs
   */
  log(t, ...n) {
    Ne.logLevel & he.DEBUG && this._log(String(t), Z.DEBUG, n);
  }
  /**
   * Logs a message
   * @param {string} msg The message to log.
   * @param {LOG_LEVEL} level
   * @param {Array} optArgs
   * @private
   */
  _log(t, n, a) {
    let r = t;
    this.className && (r = `[${this.className}] ${r}`), console[je.get(n)](r, ...a), n & Z.ERROR && (console.group(), console.trace(), console.groupEnd());
  }
}
const ot = /* @__PURE__ */ new Map();
function ga(e) {
  const t = new ya(e);
  return ot.set(e, t), t;
}
function ge(e) {
  return ot.has(e) ? ot.get(e) : ga(e);
}
const Le = {
  defaultMerge: Symbol("deepmerge-ts: default merge"),
  skip: Symbol("deepmerge-ts: skip")
};
Le.defaultMerge;
function va(e, t) {
  return t;
}
function ha(e, t) {
  return e.filter((n) => n !== void 0);
}
var bt;
(function(e) {
  e[e.NOT = 0] = "NOT", e[e.RECORD = 1] = "RECORD", e[e.ARRAY = 2] = "ARRAY", e[e.SET = 3] = "SET", e[e.MAP = 4] = "MAP", e[e.OTHER = 5] = "OTHER";
})(bt || (bt = {}));
function St(e) {
  return typeof e != "object" || e === null ? 0 : Array.isArray(e) ? 2 : wa(e) ? 1 : e instanceof Set ? 3 : e instanceof Map ? 4 : 5;
}
function ba(e) {
  const t = /* @__PURE__ */ new Set();
  for (const n of e)
    for (const a of [...Object.keys(n), ...Object.getOwnPropertySymbols(n)])
      t.add(a);
  return t;
}
function Sa(e, t) {
  return typeof e == "object" && Object.prototype.propertyIsEnumerable.call(e, t);
}
function qt(e) {
  var a;
  let t = 0, n = (a = e[0]) == null ? void 0 : a[Symbol.iterator]();
  return {
    [Symbol.iterator]() {
      return {
        next() {
          var r;
          do {
            if (n === void 0)
              return { done: !0, value: void 0 };
            const l = n.next();
            if (l.done === !0) {
              t += 1, n = (r = e[t]) == null ? void 0 : r[Symbol.iterator]();
              continue;
            }
            return {
              done: !1,
              value: l.value
            };
          } while (!0);
        }
      };
    }
  };
}
const wt = ["[object Object]", "[object Module]"];
function wa(e) {
  if (!wt.includes(Object.prototype.toString.call(e)))
    return !1;
  const { constructor: t } = e;
  if (t === void 0)
    return !0;
  const n = t.prototype;
  return !(n === null || typeof n != "object" || !wt.includes(Object.prototype.toString.call(n)) || !n.hasOwnProperty("isPrototypeOf"));
}
function Ta(e, t, n) {
  const a = {};
  for (const r of ba(e)) {
    const l = [];
    for (const u of e)
      Sa(u, r) && l.push(u[r]);
    if (l.length === 0)
      continue;
    const i = t.metaDataUpdater(n, {
      key: r,
      parents: e
    }), d = Zt(l, t, i);
    d !== Le.skip && (r === "__proto__" ? Object.defineProperty(a, r, {
      value: d,
      configurable: !0,
      enumerable: !0,
      writable: !0
    }) : a[r] = d);
  }
  return a;
}
function La(e) {
  return e.flat();
}
function Aa(e) {
  return new Set(qt(e));
}
function Ca(e) {
  return new Map(qt(e));
}
function Ea(e) {
  return e.at(-1);
}
const qe = {
  mergeRecords: Ta,
  mergeArrays: La,
  mergeSets: Aa,
  mergeMaps: Ca,
  mergeOthers: Ea
};
function _a(e, t) {
  const n = $a(e, a);
  function a(...r) {
    return Zt(r, n, t);
  }
  return a;
}
function $a(e, t) {
  return {
    defaultMergeFunctions: qe,
    mergeFunctions: {
      ...qe,
      ...Object.fromEntries(Object.entries(e).filter(([n, a]) => Object.hasOwn(qe, n)).map(([n, a]) => a === !1 ? [n, qe.mergeOthers] : [n, a]))
    },
    metaDataUpdater: e.metaDataUpdater ?? va,
    deepmerge: t,
    useImplicitDefaultMerging: e.enableImplicitDefaultMerging ?? !1,
    filterValues: e.filterValues === !1 ? void 0 : e.filterValues ?? ha,
    actions: Le
  };
}
function Zt(e, t, n) {
  var l;
  const a = ((l = t.filterValues) == null ? void 0 : l.call(t, e, n)) ?? e;
  if (a.length === 0)
    return;
  if (a.length === 1)
    return xe(a, t, n);
  const r = St(a[0]);
  if (r !== 0 && r !== 5) {
    for (let i = 1; i < a.length; i++)
      if (St(a[i]) !== r)
        return xe(a, t, n);
  }
  switch (r) {
    case 1:
      return Va(a, t, n);
    case 2:
      return Ra(a, t, n);
    case 3:
      return Pa(a, t, n);
    case 4:
      return Ia(a, t, n);
    default:
      return xe(a, t, n);
  }
}
function Va(e, t, n) {
  const a = t.mergeFunctions.mergeRecords(e, t, n);
  return a === Le.defaultMerge || t.useImplicitDefaultMerging && a === void 0 && t.mergeFunctions.mergeRecords !== t.defaultMergeFunctions.mergeRecords ? t.defaultMergeFunctions.mergeRecords(e, t, n) : a;
}
function Ra(e, t, n) {
  const a = t.mergeFunctions.mergeArrays(e, t, n);
  return a === Le.defaultMerge || t.useImplicitDefaultMerging && a === void 0 && t.mergeFunctions.mergeArrays !== t.defaultMergeFunctions.mergeArrays ? t.defaultMergeFunctions.mergeArrays(e) : a;
}
function Pa(e, t, n) {
  const a = t.mergeFunctions.mergeSets(e, t, n);
  return a === Le.defaultMerge || t.useImplicitDefaultMerging && a === void 0 && t.mergeFunctions.mergeSets !== t.defaultMergeFunctions.mergeSets ? t.defaultMergeFunctions.mergeSets(e) : a;
}
function Ia(e, t, n) {
  const a = t.mergeFunctions.mergeMaps(e, t, n);
  return a === Le.defaultMerge || t.useImplicitDefaultMerging && a === void 0 && t.mergeFunctions.mergeMaps !== t.defaultMergeFunctions.mergeMaps ? t.defaultMergeFunctions.mergeMaps(e) : a;
}
function xe(e, t, n) {
  const a = t.mergeFunctions.mergeOthers(e, t, n);
  return a === Le.defaultMerge || t.useImplicitDefaultMerging && a === void 0 && t.mergeFunctions.mergeOthers !== t.defaultMergeFunctions.mergeOthers ? t.defaultMergeFunctions.mergeOthers(e) : a;
}
const k = "@vcmap/dynamic-layer", Da = "1.0.7", Oa = "^6.2", ka = {
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
      url: "Geben Sie die URL des Webdienstes ein"
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
    publisher: "Herausgeber",
    owner: "Eigentümer",
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
    itemsPerPage: "Elemente pro Seite",
    presets: "Voreinstellungen für Kataloge",
    addPreset: "Einen Katalog hinzufügen",
    subtitle: "Untertitel",
    logo: "Logo",
    filter: "Filter"
  }
}, Ma = {
  dynamicLayer: ka
}, Na = {
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
      url: "Enter the web service URL"
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
    publisher: "Publisher",
    owner: "Owner",
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
    itemsPerPage: "Items per page",
    presets: "Presets catalogues",
    addPreset: "Add a catalogue",
    subtitle: "Subtitle",
    logo: "Logo",
    filter: "Filter"
  }
}, Ua = {
  dynamicLayer: Na
};
var G = /* @__PURE__ */ ((e) => (e.WEBDATA = "webdata", e.CATALOGUES = "catalogues", e.ADDED = "added", e))(G || {}), L = /* @__PURE__ */ ((e) => (e.CESIUM_TILESET = "CesiumTilesetLayer", e.POINTCLOUD = "PointCloudLayer", e.TERRAIN = "TerrainLayer", e.CZML = "CzmlLayer", e.GEOJSON = "GeoJSONLayer", e.WFS = "WFSLayer", e.WMS = "WMSLayer", e.WMTS = "WMTSLayer", e))(L || {});
function Fa(e, t) {
  const n = (a, r) => {
    if (t(r))
      return a.push(r), a;
    if (r.children.length) {
      const l = r.children.reduce(n, []);
      if (l.length) {
        const i = { ...r };
        i.children = l, a.push(i);
      }
    }
    return a;
  };
  return e.reduce(n, []);
}
function Ge(e, t) {
  function n(a) {
    a.forEach((r) => {
      e(r), r.children.length && n(r.children);
    });
  }
  n([t]);
}
function Wa(e, t) {
  const n = e.plugins.getByKey(k);
  let a;
  return n.webdata.added.value.forEach((r) => {
    a || Ge((l) => {
      a || l.children.find((i) => i.name === t.name) && (a = l);
    }, r);
  }), a;
}
function pt(e, t) {
  const n = e.plugins.getByKey(k);
  let a = 1;
  const r = () => !!e.layers.getByKey(`${t}-${a}`) || !!n.webdata.added.value.find(
    (l) => l.name === `${t}-${a}`
  );
  for (; r(); )
    a += 1;
  return `${t}-${a}`;
}
function ft(e, t) {
  var i;
  const n = ["REQUEST", "SERVICE", "VERSION"], a = (i = e.split("?")[1]) == null ? void 0 : i.split("&"), r = a ? Object.fromEntries(
    a.map((d) => d.split("=")).map(([d, u]) => [
      n.includes(d.toUpperCase()) ? d.toUpperCase() : d,
      u
    ])
  ) : {}, l = { ...r };
  return n.forEach((d) => {
    delete l[d];
  }), r.SERVICE = t, r.REQUEST = "GetCapabilities", {
    parameters: Object.entries(r).map((d) => d.join("=")).join("&"),
    optionalParameters: l
  };
}
function Ht(e, t) {
  const n = new URL(e);
  return t && Object.entries(t).length && Object.entries(t).forEach(([a, r]) => {
    n.searchParams.append(a, r);
  }), n.toString();
}
function yt(e) {
  return pe.validateOptions(e.toJSON()) ? (e.extent[0] < -180 && (e.extent[0] = -180), e.extent[1] < -90 && (e.extent[1] = -90), e.extent[2] > 180 && (e.extent[2] = 180), e.extent[3] > 90 && (e.extent[3] = 90), e) : new pe({
    coordinates: pe.WGS_84_EXTENT,
    projection: { epsg: 4326 }
  });
}
function Pe(e, t) {
  switch (t) {
    case L.TERRAIN:
      return e.split("/layer.json")[0];
    case L.WFS:
    case L.WMS:
    case L.WMTS:
      return e.split("?")[0];
    // 3D Tiles URL does not need to be parsed.
    default:
      return e;
  }
}
function Jt(e) {
  return [L.WFS, L.WMS, L.WMTS].includes(
    e.type
  );
}
const ee = [];
for (let e = 0; e < 256; ++e)
  ee.push((e + 256).toString(16).slice(1));
function Ba(e, t = 0) {
  return (ee[e[t + 0]] + ee[e[t + 1]] + ee[e[t + 2]] + ee[e[t + 3]] + "-" + ee[e[t + 4]] + ee[e[t + 5]] + "-" + ee[e[t + 6]] + ee[e[t + 7]] + "-" + ee[e[t + 8]] + ee[e[t + 9]] + "-" + ee[e[t + 10]] + ee[e[t + 11]] + ee[e[t + 12]] + ee[e[t + 13]] + ee[e[t + 14]] + ee[e[t + 15]]).toLowerCase();
}
let et;
const za = new Uint8Array(16);
function ja() {
  if (!et) {
    if (typeof crypto > "u" || !crypto.getRandomValues)
      throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
    et = crypto.getRandomValues.bind(crypto);
  }
  return et(za);
}
const Ga = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto), Tt = { randomUUID: Ga };
function Ka(e, t, n) {
  var r;
  if (Tt.randomUUID && !e)
    return Tt.randomUUID();
  e = e || {};
  const a = e.random ?? ((r = e.rng) == null ? void 0 : r.call(e)) ?? ja();
  if (a.length < 16)
    throw new Error("Random bytes length must be >= 16");
  return a[6] = a[6] & 15 | 64, a[8] = a[8] & 63 | 128, Ba(a);
}
var Ze = /* @__PURE__ */ ((e) => (e.relevance = "relevance", e.lastModified = "changeDate", e.nameAsc = "title", e.rating = "rating", e.popularity = "popularity", e.lowScaleFirst = "denominatorDesc", e.highScaleFirst = "denominatorAsc", e))(Ze || {});
function qa(e) {
  const t = e.split("|");
  let n = t[0];
  n && t[1] ? n += ` ${t[1]}` : t[1] ? n = t[1] : n || (n = t[2]);
  const a = Ue(t[4]) ?? Ue(t[3]) ?? Ue(t[2]);
  return {
    id: Ka(),
    title: n,
    description: t[1],
    type: a,
    [t[3].includes("link") ? "downloadUrl" : "accessUrl"]: t[2],
    format: (t[3] || (a == null ? void 0 : a.slice(0, -5))) ?? t[4]
  };
}
function st(e) {
  var n;
  const t = {
    id: e["geonet:info"].uuid,
    title: e.title ?? e.defaultTitle ?? e.identifier,
    description: e.abstract ?? e.defaultAbstract,
    ...e.recordOwner && { owner: { title: e.recordOwner } }
  };
  return e.publicationDate && (t.created = new Date(e.publicationDate).toDateString()), (n = e["geonet:info"]) != null && n.changeDate && (t.modified = new Date(e["geonet:info"].changeDate).toDateString()), e.keyword && (t.keywords = Array.isArray(e.keyword) ? e.keyword : [e.keyword]), e.link && (t.distributions = (Array.isArray(e.link) ? e.link : [e.link]).map(qa)), t;
}
function Za(e) {
  const t = e.summary.dimension.filter(
    (a) => a.category && (Array.isArray(a.category) ? a.category : [a.category]).length > 0
  ).map((a) => ({
    id: a["@name"],
    title: tn(a["@label"]),
    values: (Array.isArray(a.category) ? a.category : [a.category]).filter((r) => !!r).map((r) => ({
      id: r["@value"],
      title: `${r["@label"]} (${r["@count"]})`
    }))
  })), n = Array.isArray(e.metadata) ? e.metadata.map(st) : [st(e.metadata)];
  return { count: +e.summary["@count"], datasets: n, facets: t };
}
async function Ha(e, t, n, a, r, l, i) {
  const d = { method: "GET", signal: AbortSignal.timeout(3e4) }, u = Object.keys(Ze).includes(r) ? Ze[r] : "relevance", c = Object.entries({
    ...l,
    ...i ? { type: [i] } : {}
  }).map(([f, v]) => `${f}/${encodeURIComponent(v[0])}`).join("&"), p = new URL(`${ve(e)}/q`);
  return p.searchParams.set("_content_type", "json"), p.searchParams.set("facet.q", c), p.searchParams.set("resultType", "details"), p.searchParams.set("fast", "index"), p.searchParams.set("from", (t * n + 1).toString()), p.searchParams.set("to", (t * (n + 1)).toString()), p.searchParams.set("any", a), p.searchParams.set("sortBy", u), u === "title" && p.searchParams.append("sortOrder", "reverse"), fetch(p, d).then((f) => f.json()).then((f) => Za(f));
}
async function Ja(e, t) {
  const n = { method: "GET", signal: AbortSignal.timeout(5e3) }, a = new URL(`${ve(e)}/q`);
  return a.searchParams.set("_content_type", "json"), a.searchParams.set("fast", "index"), a.searchParams.set("_uuid_OR__id", t), fetch(a, n).then((r) => r.json()).then((r) => {
    const l = Array.isArray(r.metadata) ? r.metadata[0] : r.metadata;
    return st(l);
  });
}
var He = /* @__PURE__ */ ((e) => (e.relevance = "relevance+desc", e.nameAsc = "title.$locale$+asc", e.nameDesc = "title.$locale$+desc", e.lastModified = "modified+desc", e.lastCreated = "issued+desc", e))(He || {});
function Ya(e, t) {
  var a, r, l, i;
  const n = {
    id: e.id,
    title: Re(e.title, t) || e.id,
    description: Re(e.description, t),
    type: Ue(((a = e.format) == null ? void 0 : a.label) ?? ((r = e.format) == null ? void 0 : r.id)),
    ...e.issued && { created: new Date(e.issued).toDateString() },
    ...e.modified && { modified: new Date(e.modified).toDateString() },
    ...e.format && { format: e.format.label ?? e.format.id },
    ...e.license && { license: e.license.label ?? e.license.id }
  };
  return (l = e.access_url) != null && l[0] && (n.accessUrl = e.access_url[0]), (i = e.download_url) != null && i[0] && (n.downloadUrl = e.download_url[0]), n;
}
function Yt(e, t) {
  var n, a, r, l;
  return {
    id: e.id,
    title: Re(e.title, t),
    description: Re(e.description, t),
    ...((n = e.publisher) == null ? void 0 : n.name) && {
      publisher: { title: e.publisher.name, url: (a = e.publisher) == null ? void 0 : a.resource }
    },
    ...e.issued && { created: new Date(e.issued).toDateString() },
    ...e.modified && { modified: new Date(e.modified).toDateString() },
    keywords: (r = e.keywords) == null ? void 0 : r.map(
      (i) => Re(i.title, t) || i.label
    ),
    distributions: (l = e.distributions) == null ? void 0 : l.map(
      (i) => Ya(i, t)
    )
  };
}
function Xa(e, t) {
  var n;
  return {
    count: e.result.count,
    datasets: e.result.results.map((a) => Yt(a, t)),
    facets: ((n = e.result.facets) == null ? void 0 : n.filter((a) => a.items.length > 0).map((a) => ({
      id: a.id,
      title: a.title,
      values: a.items.map((r) => ({
        id: r.id,
        title: `${Re(r.title, t)} (${r.count})`
      }))
    }))) ?? []
  };
}
async function Qa(e, t, n, a, r, l, i, d) {
  const u = {
    method: "GET",
    headers: { accept: "application/json" },
    signal: AbortSignal.timeout(3e4)
  }, c = Object.keys(He).includes(r) ? He[r].replace(
    "$locale$",
    i
  ) : "relevance+desc", p = new URL(`${ve(e)}/search`);
  return d && p.searchParams.append("filter", d), p.searchParams.append("q", a), p.searchParams.append("sort", c), p.searchParams.append("page", n.toString()), p.searchParams.append("limit", t.toString()), p.searchParams.append("facets", JSON.stringify(l)), fetch(p, u).then((f) => f.json()).then((f) => Xa(f, i));
}
async function xa(e, t, n) {
  const a = new URL(`${ve(e)}/datasets/${t}`), r = {
    method: "GET",
    headers: { accept: "application/json" },
    signal: AbortSignal.timeout(5e3)
  };
  return fetch(a, r).then((l) => l.json()).then(
    (l) => Yt(l.result, n)
  );
}
var gt = /* @__PURE__ */ ((e) => (e.nameAsc = "nameAsc", e.nameDesc = "nameDesc", e.lastModified = "lastModified", e.lastCreated = "lastCreated", e))(gt || {});
function er(e) {
  const t = {
    id: e.id,
    title: e.title,
    description: e.description,
    type: Ue(e.format),
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
function Xt(e) {
  var n, a, r;
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
    distributions: (n = e.distributions) == null ? void 0 : n.map(er)
  };
  return (a = e.publisher) != null && a.name && (t.publisher = {
    title: e.publisher.name,
    url: (r = e.publisher) == null ? void 0 : r.homepage
  }), t;
}
function tr(e) {
  return {
    count: e.count,
    datasets: e.results.map(Xt),
    facets: e.facets.filter((t) => t.values.length).map((t) => ({
      id: t.search_parameter,
      title: t.displayName,
      values: t.values.map((n) => ({ id: n.search_value, title: n.facet }))
    }))
  };
}
function nr(e, t) {
  const n = Object.entries(e), a = { field: "ALL", value: t.replaceAll(" ", ",") };
  return n.length ? [...n.map((r) => ({ field: r[0], value: r[1][0] })), a] : [a];
}
function ar(e) {
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
async function rr(e, t, n, a, r, l) {
  const i = {
    method: "GET",
    headers: { accept: "application/json" },
    signal: AbortSignal.timeout(3e4)
  }, d = new URL(`${ve(e)}/cataloguesInfo`), u = await fetch(d, i).then((v) => v.json()).then((v) => v.map((S) => S.id)), c = {
    filters: nr(l, a),
    sort: ar(
      gt[r]
    ),
    live: !1,
    rows: t.toString(),
    start: (t * n).toString(),
    nodes: u,
    euroVocFilter: { euroVoc: !1, sourceLanguage: "", targetLanguages: [] }
  }, p = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    signal: AbortSignal.timeout(3e4),
    body: JSON.stringify(c)
  }, f = new URL(`${ve(e)}/search`);
  return fetch(f, p).then((v) => v.json()).then((v) => tr(v));
}
async function or(e, t) {
  const n = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    signal: AbortSignal.timeout(5e3)
  }, a = new URL(`${ve(e)}/dataset/${t}`);
  return fetch(a, n).then((r) => r.json()).then((r) => {
    var l;
    return Xt((l = r.results) == null ? void 0 : l[0]);
  });
}
var Qt = /* @__PURE__ */ ((e) => (e.CLIMATE_ZONES = "climateZoneIds", e.PILOTS = "pilotIds", e.KEYWORD_IDS = "keywordIds", e.PROBLEM_IDS = "problemIds", e))(Qt || {});
function sr(e) {
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
          feature: new la({
            geometry: new da([
              e.data.geoLocation.longitude,
              e.data.geoLocation.latitude
            ]),
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
          })
        }
      ]
    };
}
async function ir(e, t) {
  const n = new URL(`${ve(e)}/api/nbs/${t}`), a = {
    method: "GET",
    headers: { accept: "application/json" },
    signal: AbortSignal.timeout(5e3)
  };
  return fetch(n, a).then((r) => r.json()).then((r) => sr(r));
}
async function lr(e, t, n, a) {
  const r = Object.values(Qt).reduce(
    (u, c) => {
      const p = `${c.slice(0, -3)}s`;
      return a[p] && (u[c] = a[p]), u;
    },
    {
      climateZoneIds: [],
      pilotIds: [],
      keywordIds: [],
      problemIds: []
    }
  ), l = JSON.stringify({ ...r, onlyUrbreathNbs: !1 }), i = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: l,
    signal: AbortSignal.timeout(3e4)
  }, d = `${ve(e)}/api/nbs/map`;
  return fetch(d, i).then((u) => u.json()).then(async (u) => {
    if (!u.success)
      throw new Error(u.message || "Failed to fetch registry data");
    const c = (await Promise.all(
      u.data.map(
        async (v) => ir(e, v.id.toString())
      )
    )).filter((v) => !!v).slice(n * t, (n + 1) * t), p = await fetch(
      `${ve(e)}/api/filters/`
    ).then((v) => v.json()).catch((v) => (ge(k).error(
      `Failed to fetch registry filters from ${d}: ${String(v)}`
    ), null)), f = [];
    return p != null && p.success ? f.push(
      ...Object.entries(p.data).map(([v, S]) => ({
        id: v,
        title: tn(v),
        values: S.map((T) => ({
          id: T.id,
          title: `${T.label} `
        }))
      }))
    ) : ge(k).error(
      (p == null ? void 0 : p.message) || "Failed to fetch registry filters"
    ), { count: u.data.length, datasets: c, facets: f };
  });
}
const Lt = "nbsRegistryLayer";
function dr(e, t) {
  let n = e.layers.getByKey(Lt);
  if (!n) {
    n = new Wt({
      name: Lt,
      properties: {
        featureInfo: "NbsRegistryFeatureInfo",
        title: "Nature-Based Solutions"
      }
    }), n.activate().catch(() => {
    }), e.layers.add(n);
    const a = Qe(n.name), r = new Ot(
      {
        name: a,
        layerName: n.name,
        title: "Nature-Based Solutions"
      },
      e
    );
    r.addAction(
      B({
        name: "dynamicLayer.actions.zoomToExtent",
        callback: async () => {
          var i;
          const l = Bt.createViewpointFromExtent(
            n.getZoomToExtent()
          );
          l && await ((i = e.maps.activeMap) == null ? void 0 : i.gotoViewpoint(l));
        }
      })
    ), r.addAction(
      B({
        name: "dynamicLayer.actions.layer.remove",
        callback: () => {
          e.layers.remove(n), n.destroy(), e.contentTree.remove(r);
        }
      })
    ), e.contentTree.add(r);
  }
  t.feature.setStyle(
    new ua(
      new In({
        image: { src: en(e, Ie.NBS), scale: 0.05 }
      })
    )
  ), n.addFeatures([t.feature]), e.notifier.add({
    type: ye.SUCCESS,
    message: e.vueI18n.t("dynamicLayer.catalogues.nbsAddedToMap")
  });
}
var Ie = /* @__PURE__ */ ((e) => (e.IDRA = "idra", e.NBS = "nbsRegistry", e.PIVEAU = "piveau", e.GEONETWORK = "geonetwork", e))(Ie || {});
const At = {
  piveau: Object.keys(He),
  idra: Object.keys(gt),
  geonetwork: Object.keys(Ze),
  nbsRegistry: []
};
async function xt(e, t, n, a, r = "en", l = 0, i = "", d = "relevance", u = {}) {
  return e === "piveau" ? Qa(
    t,
    n,
    l,
    i,
    d,
    u,
    r,
    a
  ) : e === "nbsRegistry" ? lr(t, n, l, u) : e === "idra" ? rr(t, n, l, i, d, u) : Ha(
    t,
    n,
    l,
    i,
    d,
    u,
    a
  );
}
function ur(e, t, n, a) {
  switch (e) {
    case "geonetwork":
      return Ja(t, n);
    case "idra":
      return or(t, n);
    case "piveau":
      return xa(t, n, a);
    default:
      throw new Error("Unsupported catalogue type");
  }
}
function Ct(e, t) {
  var a;
  e.windowManager.has(dt) && e.windowManager.remove(dt);
  const n = (a = e.layers.getByKey(t)) == null ? void 0 : a.getZoomToExtent();
  if (n) {
    const r = Bt.createViewpointFromExtent(n);
    if (r) {
      const { activeMap: l } = e.maps;
      if (l)
        e.maps.activeMap.gotoViewpoint(r).catch((i) => {
          ge(k).error(String(i));
        });
      else {
        const i = e.maps.mapActivated.addEventListener(() => {
          i(), e.maps.activeMap.gotoViewpoint(r).catch((d) => {
            ge(k).error(String(d));
          });
        });
      }
    }
  }
}
async function cr(e, t, n, a, r, l = !1) {
  try {
    const i = await ht(e, t, n, a, r);
    if (!i.children.length)
      await De(e, i), l && Ct(e, i.name);
    else if (i.children.length === 1 && !i.children[0].children.length)
      await De(e, i.children[0]), l && Ct(e, i.children[0].name);
    else
      return Object.assign(i, {
        actions: i.actions.filter(
          (d) => d.name !== nn.DeleteSource.toString()
        )
      });
  } catch (i) {
    e.notifier.add({ type: ye.ERROR, message: String(i) });
  }
}
function en(e, t) {
  return hn(e, k, `plugin-assets/${t}_logo.png`) ?? "";
}
function Re(e, t) {
  return e ? typeof e == "string" ? e : e[t] ?? e.en ?? Object.values(e)[0] : "";
}
function ve(e) {
  return e.slice(-1) === "/" ? e.slice(0, -1) : e;
}
function tn(e) {
  return e.match(/^[a-z]+|[A-Z][a-z]*/g).map((t) => t[0].toUpperCase() + t.substring(1).toLowerCase()).join(" ");
}
function Ue(e) {
  function t(n) {
    return e ? e.toLowerCase().includes(n) : !1;
  }
  if (t("wfs"))
    return L.WFS;
  if (t("wms"))
    return L.WMS;
  if (t("wmts"))
    return L.WMTS;
  if (t("geojson"))
    return L.GEOJSON;
  if (t("czml"))
    return L.CZML;
}
function it(e) {
  return e === G.WEBDATA ? Object.values(L).map((t) => ({
    value: t,
    title: `dynamicLayer.webdata.type.${t}`
  })) : Object.values(Ie).map((t) => ({
    value: t,
    title: `dynamicLayer.catalogues.type.${t}`
  }));
}
function Qe(e) {
  return `${k}.${e.replaceAll(".", "")}`;
}
function mr(e, t, n) {
  const a = e.plugins.getByKey(k);
  function r(i) {
    const { host: d } = new URL(i.url), u = {
      title: i.title ?? d.replace("www.", ""),
      url: i.url,
      type: i.type,
      subtitle: i.subtitle,
      ...i.logo && { logo: i.logo },
      ...i.filter && { filter: i.filter },
      ...i.description && { description: i.description }
    };
    return xt(
      u.type,
      u.url,
      a.config.catalogues.itemsPerPage,
      i.filter
    ).then((c) => {
      if (c) {
        const p = {
          ...u,
          data: c
        };
        return a.catalogues.added.value.push(p), p;
      }
    });
  }
  const l = t.find((i) => i.url === (n == null ? void 0 : n.url));
  l && r(l).then((i) => {
    a.catalogues.selected.value = i;
    const { type: d, url: u } = i;
    ur(d, u, n.dataset, e.locale).then((c) => {
      a.catalogues.selectedDataset.value = c, a.catalogues.expandedDistributionIds.value = [n.distrib];
    }).catch((c) => {
      e.notifier.add({
        type: ye.ERROR,
        title: "dynamicLayer.errors.fetchingDatasetDetails",
        message: String(c)
      });
    });
  }).catch(() => {
    ge(k).error(
      `${e.vueI18n.t("dynamicLayer.errors.unablePreloadCatalogue")} ${l.url}`
    );
  }), Promise.all(
    t.filter((i) => i !== l).map(async (i) => {
      await r(i);
    })
  ).catch((i) => {
    ge(k).error(String(i));
  });
}
var nn = /* @__PURE__ */ ((e) => (e.AddToMap = "dynamicLayer.actions.layer.add", e.AddAll = "dynamicLayer.actions.layer.addAll", e.RemoveAll = "dynamicLayer.actions.layer.removeAll", e.EditLayer = "editLayer", e.RemoveLayer = "dynamicLayer.actions.layer.remove", e.DeleteSource = "dynamicLayer.actions.source.delete", e))(nn || {});
function lt(e) {
  function t(n) {
    let a = 0;
    for (const r of n.children)
      !r.isAddedToMap && !r.children.length && (a += 1), a += t(r);
    return a;
  }
  return t(e);
}
async function De(e, t) {
  if (e.layers.hasKey(t.name))
    e.notifier.add({
      type: ye.ERROR,
      message: `${e.vueI18n.t("dynamicLayer.common.theLayer")} ${t.title} ${e.vueI18n.t("dynamicLayer.errors.alreadyAdded")}`
    });
  else {
    const n = e.plugins.getByKey(k);
    try {
      const a = ps(t, n.layerIndex);
      a.properties.featureInfo = k, e.layers.add(a), await a.activate(), n.state[a.url] || (n.state[a.url] = { layerNames: [], type: t.type }), n.state[a.url].layerNames.includes(t.name) || n.state[a.url].layerNames.push(t.name), t.isAddedToMap = !0;
      const r = Qe(a.name), l = new Ot(
        {
          name: r,
          layerName: a.name,
          title: t.title
        },
        e
      );
      t.actions = ce(e, t), e.contentTree.add(l), n.addedToMap.value.push(t), n.addedSelected.value = t, n.activeTab.value === G.WEBDATA && (n.webdata.selected.value = t), e.notifier.add({
        type: ye.SUCCESS,
        message: `${e.vueI18n.t("dynamicLayer.common.theLayer")} ${t.title} ${e.vueI18n.t("dynamicLayer.info.successfullyAdded")}`
      });
    } catch (a) {
      e.notifier.add({
        type: ye.ERROR,
        title: `${e.vueI18n.t("dynamicLayer.errors.addingLayer")}: ${t.title}`,
        message: a
      });
    }
  }
}
function an(e, t) {
  const n = e.plugins.getByKey(k);
  t.children.filter((a) => !a.isAddedToMap).forEach((a) => {
    Ge((r) => {
      r.children.length || De(e, r).catch((l) => {
        ge(k).error(String(l));
      });
    }, a);
  }), n.activeTab.value === G.WEBDATA && (n.webdata.selected.value = t);
}
function Oe(e, t) {
  var c;
  const { state: n, addedToMap: a, addedSelected: r } = e.plugins.getByKey(
    k
  );
  ((c = r.value) == null ? void 0 : c.name) === t.name && (r.value = void 0);
  const l = e.layers.getByKey(t.name);
  l && (e.layers.remove(l), l.destroy());
  const i = Qe(t.name), d = e.contentTree.getByKey(i);
  d && e.contentTree.remove(d), n[t.url] && (n[t.url].layerNames.includes(t.name) && n[t.url].layerNames.splice(
    n[t.url].layerNames.findIndex((p) => p === t.name),
    1
  ), n[t.url].layerNames.length || delete n[t.url]);
  const u = a.value.indexOf(t);
  a.value.splice(u, 1), t.isAddedToMap = !1, t.actions = ce(e, t);
}
function pr(e, t) {
  Ge((n) => {
    Oe(e, n);
  }, t);
}
function rn(e, t) {
  const n = e.plugins.getByKey(k);
  n.webdata.selected.value = void 0, Ge((r) => {
    Oe(e, r);
  }, t);
  const { value: a } = n.webdata.added;
  a.splice(a.indexOf(t), 1);
}
function ce(e, t) {
  const n = [];
  t.isAddedToMap && n.push(
    B({
      icon: "mdi-map-check-outline",
      name: "dynamicLayer.actions.layer.remove",
      title: "dynamicLayer.actions.layer.remove",
      callback: Oe.bind(null, e, t)
    })
  ), !t.children.length && !t.isAddedToMap && n.push(
    B({
      icon: "$vcsPlus",
      name: "dynamicLayer.actions.layer.add",
      title: "dynamicLayer.actions.layer.add",
      callback: De.bind(null, e, t)
    })
  ), t.children.length && (n.push(
    B({
      name: "dynamicLayer.actions.layer.addAll",
      disabled: lt(t) === 0,
      callback: an.bind(null, e, t)
    })
  ), n.push(
    B({
      name: "dynamicLayer.actions.layer.removeAll",
      disabled: !t.children.some((r) => r.isAddedToMap),
      callback: pr.bind(null, e, t)
    })
  )), t.isRootElement && n.push(
    B({
      name: "dynamicLayer.actions.source.delete",
      callback: rn.bind(null, e, t)
    })
  );
  const a = Wa(e, t);
  if (a) {
    const r = a.actions.find(
      (i) => i.name === "dynamicLayer.actions.layer.addAll"
    );
    r && (r.disabled = lt(a) === 0);
    const l = a.actions.find(
      (i) => i.name === "dynamicLayer.actions.layer.removeAll"
    );
    l && (l.disabled = !a.children.some((i) => i.isAddedToMap));
  }
  return n;
}
const fr = [
  "application/json",
  "application/geojson",
  "application/geo+json",
  "application/vnd.geo+json",
  "application/vnd.ogc.gml",
  "text/xml"
];
function yr(e, t, n, a) {
  var p, f, v, S, T, N, M, F, O, j, C, X, _, K, de, fe, Se;
  const { Capability: r, Service: l } = new ca().read(t), i = fr.find(
    (W) => {
      var se, z;
      return (z = (se = r.Request.GetFeatureInfo) == null ? void 0 : se.Format) == null ? void 0 : z.includes(W);
    }
  );
  function d(W) {
    var Ae, Ce, me, we;
    function se(q) {
      var x;
      return q.Layer ? ((x = q.Layer) == null ? void 0 : x.length) > 1 ? !0 : q.Name !== q.Layer[0].Name : !1;
    }
    const z = se(W);
    function ue(q) {
      var Me;
      let x = z ? W : ((Me = W == null ? void 0 : W.Layer) == null ? void 0 : Me[0]) ?? W;
      return q.forEach((vn) => {
        x = x == null ? void 0 : x[vn];
      }), x;
    }
    const Ve = !!e.layers.hasKey(W.Name), Q = {
      optionalParameters: a,
      formats: r.Request.GetMap.Format.filter(
        (q) => q === "image/png" || q === "image/jpeg"
      ),
      featureInfoResponseType: i,
      attributions: {
        provider: (Ce = (Ae = l.ContactInformation) == null ? void 0 : Ae.ContactPersonPrimary) == null ? void 0 : Ce.ContactOrganization,
        url: l.OnlineResource
      },
      url: n,
      actions: [],
      type: L.WMS,
      name: ue(["Name"]),
      title: ue(["Title"]),
      queryable: ue(["queryable"]),
      supportsTransparency: !ue(["opaque"]),
      extent: yt(
        new pe({
          coordinates: ue(["EX_GeographicBoundingBox"]),
          projection: { epsg: 4326 }
        })
      ),
      description: ue(["Abstract"]),
      keywordList: ue(["KeywordList"]),
      styles: (me = W.Style) == null ? void 0 : me.map((q) => ({
        value: q.Name,
        title: q.Title,
        abstract: q.Abstract,
        legendUrl: q.LegendURL[0].OnlineResource
      })),
      children: se(W) ? (we = W.Layer) == null ? void 0 : we.map((q) => d(q)) : []
    };
    return Q.isAddedToMap = Ve && !Q.children.length, Q;
  }
  const u = B({
    actions: [],
    name: n,
    title: l.Title,
    type: L.WMS,
    url: n,
    isRootElement: !0,
    accessConstraints: l.AccessConstraints,
    description: l.Abstract,
    fees: l.Fees,
    formats: r.Request.GetMap.Format.filter(
      (W) => W === "image/png" || W === "image/jpeg"
    ),
    featureInfoResponseType: i,
    keywordList: l.KeywordList,
    onlineResource: l.OnlineResource,
    contact: {
      address: (f = (p = l.ContactInformation) == null ? void 0 : p.ContactAddress) == null ? void 0 : f.Address,
      city: `${((S = (v = l.ContactInformation) == null ? void 0 : v.ContactAddress) == null ? void 0 : S.PostCode) ?? ""}${(N = (T = l.ContactInformation) == null ? void 0 : T.ContactAddress) != null && N.PostCode && ((F = (M = l.ContactInformation) == null ? void 0 : M.ContactAddress) != null && F.City) ? " " : ""}${((j = (O = l.ContactInformation) == null ? void 0 : O.ContactAddress) == null ? void 0 : j.City) ?? ""}`,
      country: (X = (C = l.ContactInformation) == null ? void 0 : C.ContactAddress) == null ? void 0 : X.Country,
      person: (K = (_ = l.ContactInformation) == null ? void 0 : _.ContactPersonPrimary) == null ? void 0 : K.ContactPerson,
      position: (de = l.ContactInformation) == null ? void 0 : de.ContactPosition,
      organization: (Se = (fe = l.ContactInformation) == null ? void 0 : fe.ContactPersonPrimary) == null ? void 0 : Se.ContactOrganization
    },
    children: r.Layer.Layer.map((W) => d(W))
  });
  function c(W) {
    var se;
    W.actions.push(...ce(e, W)), (se = W.children) == null || se.forEach((z) => {
      c(z);
    });
  }
  return c(u), u;
}
async function gr(e, t) {
  const n = Pe(t, L.WMS), { parameters: a, optionalParameters: r } = ft(
    t,
    "WMS"
  );
  return fetch(`${n}?${a}`).then((l) => l.text()).then((l) => yr(e, l, n, r));
}
function vr(e, t) {
  var i, d;
  const n = e.formats.includes("image/png") ? "image/png" : e.formats[0], a = (i = e.styles) == null ? void 0 : i[0], r = {
    ...e.optionalParameters,
    FORMAT: n,
    STYLES: (a == null ? void 0 : a.value) ?? "",
    LAYERS: e.name,
    TRANSPARENT: e.supportsTransparency ? "TRUE" : "FALSE"
  }, l = new Dn({
    name: e.name,
    layers: e.name,
    url: e.url,
    extent: ((d = e.extent) == null ? void 0 : d.toJSON()) ?? On.toJSON(),
    parameters: r,
    properties: {
      title: e.title,
      ...(a == null ? void 0 : a.legendUrl) && {
        legend: [
          {
            type: "ImageLegendItem",
            src: a.legendUrl,
            popoutBtn: !0
          }
        ]
      },
      attributions: D(e.attributions)
    },
    zIndex: t
  });
  return e.queryable && (l.featureProvider = new kn(e.name, {
    url: e.url,
    parameters: r,
    extent: e.extent,
    responseType: e.featureInfoResponseType,
    minLevel: 0,
    maxLevel: 18
  })), l;
}
function hr(e, t, n, a) {
  const r = B(
    {
      actions: [],
      children: [],
      name: n,
      title: a,
      type: L.CESIUM_TILESET,
      url: t,
      isRootElement: !0
    }
  );
  return r.actions.push(
    ...ce(e, r)
  ), r;
}
function br(e) {
  return new Mn({
    url: e.url,
    name: e.name,
    activeOnStartup: !0,
    properties: { title: e.title }
  });
}
function Sr(e, t, n, a) {
  const r = Pe(t, L.TERRAIN), l = B({
    actions: [],
    children: [],
    name: n,
    title: a,
    type: L.TERRAIN,
    url: r,
    isRootElement: !0
  });
  return l.actions.push(
    ...ce(e, l)
  ), l;
}
function wr(e) {
  return new Nn({
    url: e.url,
    name: e.name,
    activeOnStartup: !0,
    properties: { title: e.title }
  });
}
const ie = {
  _200: "2.0.0",
  _110: "1.1.0",
  _100: "1.0.0"
};
function $e(e) {
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
], Tr = {
  [ie._200]: V(R, {
    ServiceIdentification: h(tt),
    ServiceProvider: h(_t),
    OperationsMetadata: h($t),
    FeatureTypeList: h(nt),
    Filter_Capabilities: h(at)
  }),
  [ie._110]: V(R, {
    ServiceIdentification: h(tt),
    ServiceProvider: h(_t),
    OperationsMetadata: h($t),
    FeatureTypeList: h(nt),
    Filter_Capabilities: h(at)
  }),
  [ie._100]: V(R, {
    Service: h(tt),
    Capability: h(go),
    FeatureTypeList: h(nt),
    Filter_Capabilities: h(at)
  })
};
class Lr extends pa {
  constructor() {
    super(), this.version = void 0;
  }
  /**
   * @param {Element} node Node.
   * @return {Object} Object
   */
  readFromNode(t) {
    this.version = t.getAttribute("version").trim();
    const n = P(
      {
        version: this.version
      },
      Tr[this.version],
      t,
      []
    );
    return n || null;
  }
}
const Ar = V(R, {
  Name: h(I),
  Title: h(I),
  Abstract: h(I),
  Keywords: h(function(e, t) {
    return $e(t) === ie._100 ? pn(e) : ln(e, t);
  }),
  ServiceType: h(I),
  ServiceTypeVersion: h(I),
  Fees: h(I),
  AccessConstraints: h(I),
  OnlineResource: h(I)
}), Cr = V(R, {
  ProviderName: h(I),
  ServiceContact: h(vo)
}), Er = V(R, {
  Operation: Te(Ro),
  Constraint: Te(on)
}), _r = V(R, {
  Request: h(Po)
}), $r = V(R, {
  IndividualName: h(I),
  PositionName: h(I),
  ContactInfo: h(ho)
}), Vr = V(R, {
  Phone: h(bo),
  Address: h(So)
}), Rr = V(R, {
  Voice: h(I),
  Facsimile: h(I)
}), Pr = V(R, {
  DeliveryPoint: h(I),
  City: h(I),
  AdministrativeArea: h(I),
  PostalCode: h(I),
  Country: h(I),
  ElectronicMailAddress: h(I)
}), Ir = V(R, {
  FeatureType: ae(vt)
}), Dr = V(R, {
  Operations: h(ke),
  FeatureType: Te(vt)
}), Or = V(R, {
  Operations: h(Ao),
  FeatureType: Te(vt)
}), kr = V(R, {
  Name: h(I),
  Title: h(I),
  Abstract: h(I),
  Keywords: h(function(e, t) {
    return $e(t) === ie._100 ? pn(e) : ln(e, t);
  }),
  DefaultSRS: h(I),
  DefaultCRS: h(I),
  // 1.1.0
  OtherSRS: Te(I),
  // 1.1.0
  SRS: h(I),
  WGS84BoundingBox: h(No),
  MetadataURL: h(ko),
  LatLongBoundingBox: h(Uo)
  // 1.0.0
}), Mr = V(R, {
  DCP: h(wo),
  Parameter: Te(Oo)
}), Nr = V(R, {
  Operation: ae(I)
}), Ur = V(R, {
  DCPType: xo(To),
  SchemaDescriptionLanguage: h(ke),
  ResultFormat: h(ke)
}), Et = V(R, {
  Value: Te(I),
  AllowedValues: h(dn)
}), Fr = V(R, {
  NoValues: h(I),
  DefaultValue: h(I),
  AllowedValues: h(dn)
}), Wr = V(R, {
  Get: h(rt),
  Post: h(rt)
}), Br = V(R, {
  Get: h(It),
  Post: h(It)
}), zr = V(R, {
  LowerCorner: h(Pt),
  UpperCorner: h(Pt)
}), jr = V(R, {
  HTTP: h($o)
}), Gr = V(R, {
  HTTP: h(Vo)
}), Kr = V(R, {
  Keyword: ae(I)
}), qr = V(R, {
  Value: ae(I)
}), Zr = V(R, {
  Conformance: h(Fo),
  Id_Capabilities: h(Wo),
  Scalar_Capabilities: h(Bo),
  Spatial_Capabilities: h(zo),
  Temporal_Capabilities: h(jo),
  Functions: h(Go)
}), Hr = V(R, {
  Constraint: Te(on)
}), Jr = V(R, {
  ResourceIdentifier: ae(Mo)
}), Yr = V(R, {
  LogicalOperators: h(qo),
  ComparisonOperators: h(cn)
}), Xr = V(R, {
  LogicalOperators: h(I),
  ComparisonOperators: h(cn),
  ArithmeticOperators: h(mn)
}), Qr = V(R, {
  Logical_Operators: h(I),
  Comparison_Operators: h(ke),
  Arithmetic_Operators: h(mn)
}), xr = V(R, {
  GeometryOperands: h(Zo),
  SpatialOperators: h(Ho)
}), eo = V(R, {
  Spatial_Operators: h(ke)
}), to = V(R, {
  TemporalOperands: h(Jo),
  TemporalOperators: h(Yo)
}), no = V(R, {
  Function: ae(Io)
}), ao = V(R, {
  Function_Names: h(Vt),
  // 1.0.0
  FunctionNames: h(Vt)
  // 1.1.0
}), ro = V(R, {
  FunctionName: ae(Rt),
  // 1.1.0
  Function_Name: ae(Rt)
  // 1.0.0
}), oo = V(R, {
  Returns: h(I),
  Arguments: h(Xo)
}), so = V(R, {
  Argument: ae(Do)
}), io = V(R, {
  Type: h(I)
}), lo = V(R, {
  LogicalOperator: ae(Ke)
}), uo = V(R, {
  ComparisonOperator: ae(sn)
}), co = V(R, {
  Simple_Arithmetic: h(I),
  SimpleArithmetic: h(I),
  Functions: h(Ko)
}), mo = V(R, {
  GeometryOperand: ae(sn)
}), po = V(R, {
  SpatialOperator: ae(Ke)
}), fo = V(R, {
  TemporalOperand: ae(Ke)
}), yo = V(R, {
  TemporalOperator: ae(Ke)
});
function tt(e, t) {
  return P({}, Ar, e, t);
}
function _t(e, t) {
  return P({}, Cr, e, t);
}
function $t(e, t) {
  return P({}, Er, e, t);
}
function go(e, t) {
  return P({}, _r, e, t);
}
function nt(e, t) {
  const n = $e(t);
  let a;
  return n === ie._100 ? a = Dr : n === ie._110 ? a = Or : a = Ir, P(
    n === ie._100 || n === ie._110 ? {} : [],
    a,
    e,
    t
  );
}
function vo(e, t) {
  return P({}, $r, e, t);
}
function ho(e, t) {
  return P({}, Vr, e, t);
}
function bo(e, t) {
  return P({}, Rr, e, t);
}
function So(e, t) {
  return P({}, Pr, e, t);
}
function wo(e, t) {
  return P({}, jr, e, t);
}
function To(e, t) {
  return P({}, Gr, e, t);
}
function Lo(e, t) {
  return P({}, Mr, e, t);
}
function Ao(e, t) {
  return P([], Nr, e, t);
}
function Co(e, t) {
  return P({}, Ur, e, t);
}
function Eo(e, t) {
  return $e(t) === ie._110 ? P({}, Et, e, t) : P({}, Et, e, t);
}
function _o(e, t) {
  return P({}, Fr, e, t);
}
function $o(e, t) {
  return P({}, Wr, e, t);
}
function Vo(e, t) {
  return P({}, Br, e, t);
}
function Vt(e, t) {
  return P([], ro, e, t);
}
function Ro(e, t) {
  const n = Lo(e, t);
  if (n)
    return n.name = e.getAttribute("name"), n;
}
function Po(e, t) {
  const n = [];
  for (const a of e.children) {
    const r = Co(a, t);
    r && (r.name = a.tagName, n.push(r));
  }
  if (n.length)
    return n;
}
function Io(e, t) {
  const n = un(e, t);
  if (n)
    return n.name = e.getAttribute("name"), n;
}
function Rt(e, t) {
  const n = un(e, t);
  if (n)
    return n.name = I(e), n.nArgs = Number(e.getAttribute("nArgs")), n;
}
function Do(e, t) {
  const n = Qo(e, t);
  if (n)
    return n.name = e.getAttribute("name"), n;
}
function Oo(e, t) {
  const n = Eo(e, t);
  if (n)
    return n.name = e.getAttribute("name"), n;
}
function on(e, t) {
  const n = _o(e, t);
  if (n)
    return n.name = e.getAttribute("name"), n;
}
function Ke(e) {
  return e.getAttribute("name") || void 0;
}
function sn(e) {
  return Ke(e) || I(e) || void 0;
}
function ko(e) {
  return rt(e) || I(e) || void 0;
}
function Mo(e) {
  return {
    name: e.getAttribute("name")
  };
}
function No(e, t) {
  return P({}, zr, e, t);
}
function Uo(e, t) {
  return [
    Number(e.getAttribute("minx")),
    Number(e.getAttribute("miny")),
    Number(e.getAttribute("maxx")),
    Number(e.getAttribute("maxy"))
  ];
}
function ln(e, t) {
  return P([], Kr, e, t);
}
function dn(e, t) {
  return P([], qr, e, t);
}
function ke(e, t) {
  const n = [];
  for (const a of e.children) {
    const l = a.tagName.split(":");
    n.push(l[l.length - 1]);
  }
  if (n.length)
    return n;
}
function vt(e, t) {
  return P({}, kr, e, t);
}
function at(e, t) {
  return P({}, Zr, e, t);
}
function Fo(e, t) {
  return P({}, Hr, e, t);
}
function Wo(e, t) {
  return $e(t) === ie._110 ? ke(e) : P([], Jr, e, t);
}
function Bo(e, t) {
  let n;
  const a = $e(t);
  return a === ie._100 ? n = Qr : a === ie._110 ? n = Xr : n = Yr, P({}, n, e, t);
}
function zo(e, t) {
  return P(
    {},
    $e(t) === ie._100 ? eo : xr,
    e,
    t
  );
}
function jo(e, t) {
  return P({}, to, e, t);
}
function Go(e, t) {
  return P([], no, e, t);
}
function Ko(e, t) {
  return P({}, ao, e, t);
}
function un(e, t) {
  return P({}, oo, e, t);
}
function qo(e, t) {
  return P([], lo, e, t);
}
function cn(e, t) {
  return P([], uo, e, t);
}
function mn(e, t) {
  return P({}, co, e, t);
}
function Zo(e, t) {
  return P([], mo, e, t);
}
function Ho(e, t) {
  return P([], po, e, t);
}
function Jo(e, t) {
  return P([], fo, e, t);
}
function Yo(e, t) {
  return P([], yo, e, t);
}
function Xo(e, t) {
  return P([], so, e, t);
}
function Qo(e, t) {
  return P({}, io, e, t);
}
function Pt(e) {
  const t = ma(e, !1).split(" ");
  if (t.length)
    return t.map((n) => Number(n));
}
function pn(e, t = ", ") {
  const n = I(e);
  if (!n)
    return;
  const a = n.split(t);
  if (!(!a || !a.length))
    return a;
}
function It(e) {
  return e.getAttribute("onlineResource");
}
function xo(e, t, n) {
  return (
    /**
     * @param {Element} node Node.
     * @param {Array<*>} objectStack Object stack.
     */
    function(a, r) {
      const l = e.call(
        this,
        a,
        r
      );
      if (l !== void 0) {
        const i = (
          /** @type {!Object} */
          r[r.length - 1]
        ), d = a.localName;
        for (const u of Object.keys(l))
          i[d] && u in i[d] ? i[d][u] = { ...i[d][u], ...l[u] } : i[d] = l;
      }
    }
  );
}
async function es(e, t) {
  return fetch(
    `${e}?SERVICE=WFS&REQUEST=DescribeFeatureType&VERSION=${t}`
  ).then((n) => n.text()).then((n) => new DOMParser().parseFromString(n, "application/xml")).then(
    (n) => {
      var a, r;
      return (r = (a = n.activeElement) == null ? void 0 : a.attributes.getNamedItem("targetNamespace")) == null ? void 0 : r.value;
    }
  );
}
async function ts(e, t, n, a) {
  var u, c, p, f, v, S, T, N, M, F, O, j, C, X, _, K, de, fe, Se, W, se, z;
  const r = new Lr().read(t), l = await es(n, r.version);
  function i(ue) {
    const Ve = [];
    return ue.forEach((Q) => {
      var we, q;
      const Ae = !!e.layers.hasKey(Q.Name), Ce = yt(
        new pe({
          coordinates: (we = Q.WGS84BoundingBox) != null && we.LowerCorner && ((q = Q.WGS84BoundingBox) != null && q.UpperCorner) ? [
            ...Q.WGS84BoundingBox.LowerCorner,
            ...Q.WGS84BoundingBox.UpperCorner
          ] : pe.WGS_84_EXTENT,
          projection: { epsg: 4326 }
        })
      ), me = {
        actions: [],
        children: [],
        optionalParameters: a,
        name: Q.Name,
        title: Q.Title,
        attributions: { provider: r.ServiceProvider.ProviderName },
        type: L.WFS,
        url: n,
        namespace: l,
        description: Q.Abstract,
        keywordList: Q.Keywords,
        onlineResource: Q.MetadataUrl,
        extent: Ce
      };
      me.actions.push(...ce(e, me)), me.isAddedToMap = Ae && !me.children.length, Ve.push(me);
    }), Ve;
  }
  const d = B({
    actions: [],
    name: n,
    title: ((u = r.ServiceIdentification) == null ? void 0 : u.Title) ?? pt(e, "WFSLayer"),
    accessConstraints: (c = r.ServiceIdentification) == null ? void 0 : c.AccessConstraints,
    description: (p = r.ServiceIdentification) == null ? void 0 : p.Abstract,
    fees: (f = r.ServiceIdentification) == null ? void 0 : f.Fees,
    keywordList: (v = r.ServiceIdentification) == null ? void 0 : v.Keywords,
    contact: {
      address: (T = (S = r.ServiceProvider) == null ? void 0 : S.ServiceContact) == null ? void 0 : T.ContactInfo.Address.AdministrativeArea,
      city: `${((M = (N = r.ServiceProvider) == null ? void 0 : N.ServiceContact) == null ? void 0 : M.ContactInfo.Address.PostalCode) ?? ""}${(O = (F = r.ServiceProvider) == null ? void 0 : F.ServiceContact) != null && O.ContactInfo.Address.PostalCode && ((C = (j = r.ServiceProvider) == null ? void 0 : j.ServiceContact) != null && C.ContactInfo.Address.City) ? " " : ""}${((_ = (X = r.ServiceProvider) == null ? void 0 : X.ServiceContact) == null ? void 0 : _.ContactInfo.Address.City) ?? ""}`,
      country: (de = (K = r.ServiceProvider) == null ? void 0 : K.ServiceContact) == null ? void 0 : de.ContactInfo.Address.Country,
      person: (Se = (fe = r.ServiceProvider) == null ? void 0 : fe.ServiceContact) == null ? void 0 : Se.IndividualName,
      position: (se = (W = r.ServiceProvider) == null ? void 0 : W.ServiceContact) == null ? void 0 : se.PositionName,
      organization: (z = r.ServiceProvider) == null ? void 0 : z.ProviderName
    },
    type: L.WFS,
    url: n,
    isRootElement: !0,
    children: i(
      Array.isArray(r.FeatureTypeList) ? r.FeatureTypeList : r.FeatureTypeList.FeatureType
    )
  });
  return d.actions.push(...ce(e, d)), d;
}
async function ns(e, t) {
  const n = Pe(t, L.WFS), { parameters: a, optionalParameters: r } = ft(
    t,
    "WFS"
  );
  return fetch(`${n}?${a}`).then((l) => l.text()).then(
    (l) => ts(e, l, n, r)
  );
}
function as(e, t) {
  var l, i;
  const n = e.name.split(":"), a = n[0], r = n[1];
  return new Un({
    url: Ht(e.url, e.optionalParameters),
    name: e.name,
    extent: (l = e.extent) == null ? void 0 : l.toJSON(),
    featureType: r,
    featurePrefix: a,
    featureNS: e.namespace ?? "",
    projection: (i = e.extent) == null ? void 0 : i.projection,
    properties: { title: e.title, attributions: D(e.attributions) },
    zIndex: t
  });
}
function rs(e, t, n, a) {
  var u, c, p, f, v, S, T, N, M, F, O, j, C, X, _, K, de, fe, Se, W, se;
  const r = new fa().read(t), l = r.Contents.TileMatrixSet.filter(
    (z) => z.SupportedCRS.includes("3857")
  ).sort((z, ue) => ue.TileMatrix.length - z.TileMatrix.length)[0] ?? r.Contents.TileMatrixSet[0];
  function i(z) {
    var Ae, Ce, me, we, q;
    const ue = !!e.layers.hasKey(z.Identifier), Ve = yt(
      new pe({
        coordinates: (Ae = z.WGS84BoundingBox) != null && Ae.length ? z.WGS84BoundingBox : pe.WGS_84_EXTENT,
        projection: { epsg: 4326 }
      })
    ), Q = {
      actions: [],
      children: [],
      name: z.Identifier,
      title: z.Title,
      optionalParameters: a,
      isAddedToMap: ue,
      type: L.WMTS,
      url: ((me = (Ce = z.ResourceURL) == null ? void 0 : Ce.find((x) => x.resourceType === "tile")) == null ? void 0 : me.template) ?? n,
      description: z.Abstract,
      keywordList: [],
      attributions: {
        url: (we = r.ServiceProvider) == null ? void 0 : we.ProviderSite,
        provider: (q = r.ServiceProvider) == null ? void 0 : q.ProviderName
      },
      formats: z.Format,
      extent: Ve,
      defaultTileMatrixSetId: l.Identifier,
      matrixSetIds: z.TileMatrixSetLink.map((x) => x.TileMatrixSet),
      styles: z.Style.map((x) => {
        var Me;
        return {
          name: x.Identifier,
          title: x.Title,
          legendUrl: (Me = x.LegendURL) == null ? void 0 : Me[0].href,
          isDefault: x.isDefault
        };
      })
    };
    return Q.actions = ce(e, Q), Q;
  }
  const d = B({
    actions: [],
    name: n,
    title: ((u = r.ServiceIdentification) == null ? void 0 : u.Title) ?? pt(e, "WMTSLayer"),
    accessConstraints: (c = r.ServiceIdentification) == null ? void 0 : c.AccessConstraints,
    description: (p = r.ServiceIdentification) == null ? void 0 : p.Abstract,
    fees: (f = r.ServiceIdentification) == null ? void 0 : f.Fees,
    keywordList: [],
    contact: {
      address: (S = (v = r.ServiceProvider) == null ? void 0 : v.ServiceContact) == null ? void 0 : S.ContactInfo.Address.DeliveryPoint,
      city: `${((N = (T = r.ServiceProvider) == null ? void 0 : T.ServiceContact) == null ? void 0 : N.ContactInfo.Address.PostalCode) ?? ""}${(F = (M = r.ServiceProvider) == null ? void 0 : M.ServiceContact) != null && F.ContactInfo.Address.PostalCode && ((j = (O = r.ServiceProvider) == null ? void 0 : O.ServiceContact) != null && j.ContactInfo.Address.City) ? " " : ""}${((X = (C = r.ServiceProvider) == null ? void 0 : C.ServiceContact) == null ? void 0 : X.ContactInfo.Address.City) ?? ""}`,
      country: (K = (_ = r.ServiceProvider) == null ? void 0 : _.ServiceContact) == null ? void 0 : K.ContactInfo.Address.Country,
      person: (fe = (de = r.ServiceProvider) == null ? void 0 : de.ServiceContact) == null ? void 0 : fe.IndividualName,
      position: (W = (Se = r.ServiceProvider) == null ? void 0 : Se.ServiceContact) == null ? void 0 : W.PositionName,
      organization: (se = r.ServiceProvider) == null ? void 0 : se.ProviderName
    },
    type: L.WMTS,
    url: n,
    isRootElement: !0,
    children: r.Contents.Layer.map((z) => i(z))
  });
  return d.actions.push(...ce(e, d)), d;
}
async function os(e, t) {
  const n = Pe(t, L.WMTS), { parameters: a, optionalParameters: r } = ft(
    t,
    "WMTS"
  );
  return fetch(`${n}?${a}`).then((l) => l.text()).then(
    (l) => rs(e, l, n, r)
  );
}
function ss(e, t) {
  var n, a, r, l, i;
  return new Fn({
    url: Ht(e.url, e.optionalParameters),
    name: e.name,
    layer: e.name,
    tileMatrixSetID: e.defaultTileMatrixSetId,
    format: (n = e.formats) == null ? void 0 : n[0],
    wmtsStyle: ((r = (a = e.styles) == null ? void 0 : a.find((d) => d.isDefault)) == null ? void 0 : r.name) ?? ((l = e.styles) == null ? void 0 : l[0].name),
    matrixIds: e.matrixSetIds ?? [],
    extent: (i = e.extent) == null ? void 0 : i.toJSON(),
    properties: { title: e.title, attributions: D(e.attributions) },
    tileSize: [256, 256],
    zIndex: t
  });
}
function is(e, t, n, a) {
  const r = B({
    actions: [],
    children: [],
    name: n,
    title: a,
    type: L.GEOJSON,
    url: t,
    isRootElement: !0
  });
  return r.actions = ce(e, r), r;
}
function ls(e) {
  return new Wt({
    url: e.url,
    name: e.name,
    projection: new zt({ epsg: 4326 }),
    properties: { title: e.title }
  });
}
function ds(e, t, n, a) {
  const r = B({
    actions: [],
    children: [],
    name: n,
    title: a,
    type: L.POINTCLOUD,
    url: t,
    isRootElement: !0
  });
  return r.actions.push(
    ...ce(e, r)
  ), r;
}
function us(e) {
  return new Wn({
    url: e.url,
    name: e.name,
    activeOnStartup: !0,
    properties: { title: e.title }
  });
}
function cs(e, t, n, a) {
  const r = B({
    actions: [],
    children: [],
    name: n,
    title: a,
    type: L.CZML,
    url: t,
    isRootElement: !0
  });
  return r.actions.push(...ce(e, r)), r;
}
function ms(e) {
  return new Bn({
    url: e.url,
    name: e.name,
    properties: { title: e.title }
  });
}
async function ht(e, t, n, a, r) {
  const l = r || pt(e, n), i = a || l;
  switch (n) {
    case L.CESIUM_TILESET:
      return hr(e, t, i, l);
    case L.CZML:
      return cs(e, t, i, l);
    case L.GEOJSON:
      return is(e, t, i, l);
    case L.POINTCLOUD:
      return ds(e, t, i, l);
    case L.TERRAIN:
      return Sr(e, t, i, l);
    case L.WFS:
      return ns(e, t);
    case L.WMS:
      return gr(e, t);
    case L.WMTS:
      return os(e, t);
    default:
      throw new Error(e.vueI18n.t("dynamicLayer.errors.fetchingSource"));
  }
}
function ps(e, t) {
  switch (e.type) {
    case L.CESIUM_TILESET:
      return br(e);
    case L.CZML:
      return ms(e);
    case L.GEOJSON:
      return ls(e);
    case L.POINTCLOUD:
      return us(e);
    case L.TERRAIN:
      return wr(e);
    case L.WFS:
      return as(e, t);
    case L.WMS:
      return vr(e, t);
    case L.WMTS:
      return ss(e, t);
    default:
      throw ge(k).error("dynamicLayer.errors.layerCreation"), new Error();
  }
}
const fs = /* @__PURE__ */ H({
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
    const t = e, n = w(), a = bn(
      ne(() => n.value),
      ne(() => ""),
      ne(() => t.title)
    );
    return (r, l) => (g(), E(
      "div",
      {
        ref_key: "titleParent",
        ref: n,
        class: jn(["title-parent pr-2 vcs-treeview-title w-100", { active: e.active }])
      },
      [
        U(
          "span",
          null,
          y(e.title),
          1
          /* TEXT */
        ),
        Ee(a) ? (g(), A(Ee(Jn), {
          key: 0,
          activator: "parent"
        }, {
          default: s(() => [
            b(
              y(Ee(a)),
              1
              /* TEXT */
            )
          ]),
          _: 1
          /* STABLE */
        })) : $("v-if", !0)
      ],
      2
      /* CLASS */
    ));
  }
}), J = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [a, r] of t)
    n[a] = r;
  return n;
}, fn = /* @__PURE__ */ J(fs, [["__scopeId", "data-v-2071794a"]]), ys = H({
  name: "WxsInformations",
  components: {
    VChip: Gt,
    VRow: Y,
    VcsExtent: Je,
    VcsLabel: le
  },
  props: {
    item: {
      type: Object,
      required: !0
    }
  },
  setup() {
    return {
      CategoryType: G,
      checkAnyProperty(e) {
        return e ? Object.values(e).some((t) => !!t) : !1;
      }
    };
  }
}), gs = {
  key: 1,
  class: "w-100"
}, vs = {
  key: 2,
  class: "w-100"
}, hs = {
  key: 3,
  class: "w-100"
}, bs = {
  key: 4,
  class: "w-100"
}, Ss = {
  key: 5,
  class: "w-100"
}, ws = /* @__PURE__ */ U(
  "br",
  null,
  null,
  -1
  /* HOISTED */
), Ts = ["href"], Ls = {
  key: 6,
  class: "w-100"
}, As = { key: 0 }, Cs = { key: 1 }, Es = { key: 2 };
function _s(e, t, n, a, r, l) {
  var p;
  const i = m("v-chip"), d = m("v-row"), u = m("VcsLabel"), c = m("VcsExtent");
  return g(), E(
    _e,
    null,
    [
      (p = e.item.keywordList) != null && p.length ? (g(), A(d, {
        key: 0,
        "no-gutters": "",
        class: "w-100"
      }, {
        default: s(() => [
          (g(!0), E(
            _e,
            null,
            Be(e.item.keywordList, (f) => (g(), A(
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
                    y(f),
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
      })) : $("v-if", !0),
      e.item.description ? (g(), E("span", gs, [
        o(d, { "no-gutters": "" }, {
          default: s(() => [
            o(u, {
              "html-for": "description",
              class: "font-weight-bold"
            }, {
              default: s(() => [
                b(
                  y(e.$t("dynamicLayer.common.description")),
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
        o(d, {
          "no-gutters": "",
          class: "px-2"
        }, {
          default: s(() => [
            b(
              y(e.item.description),
              1
              /* TEXT */
            )
          ]),
          _: 1
          /* STABLE */
        })
      ])) : $("v-if", !0),
      e.item.accessConstraints ? (g(), E("span", vs, [
        o(d, { "no-gutters": "" }, {
          default: s(() => [
            o(u, {
              "html-for": "accessConstraints",
              class: "font-weight-bold"
            }, {
              default: s(() => [
                b(
                  y(e.$t("dynamicLayer.info.accessConstraints")),
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
        o(d, {
          "no-gutters": "",
          class: "px-2"
        }, {
          default: s(() => [
            b(
              y(e.item.accessConstraints),
              1
              /* TEXT */
            )
          ]),
          _: 1
          /* STABLE */
        })
      ])) : $("v-if", !0),
      e.item.fees ? (g(), E("span", hs, [
        o(d, { "no-gutters": "" }, {
          default: s(() => [
            o(u, {
              "html-for": "fees",
              class: "font-weight-bold"
            }, {
              default: s(() => [
                b(
                  y(e.$t("dynamicLayer.info.fees")),
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
        o(d, {
          "no-gutters": "",
          class: "px-2"
        }, {
          default: s(() => [
            b(
              y(e.item.fees),
              1
              /* TEXT */
            )
          ]),
          _: 1
          /* STABLE */
        })
      ])) : $("v-if", !0),
      e.item.extent ? (g(), E("span", bs, [
        o(d, { "no-gutters": "" }, {
          default: s(() => [
            o(u, {
              "html-for": "extent",
              class: "font-weight-bold"
            }, {
              default: s(() => [
                b(
                  y(e.$t("dynamicLayer.info.extent")),
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
        o(d, { "no-gutters": "" }, {
          default: s(() => [
            o(c, {
              disabled: "",
              "model-value": e.item.extent.toJSON()
            }, null, 8, ["model-value"])
          ]),
          _: 1
          /* STABLE */
        })
      ])) : $("v-if", !0),
      e.checkAnyProperty(e.item.attributions) ? (g(), E("span", Ss, [
        o(d, { "no-gutters": "" }, {
          default: s(() => [
            o(u, {
              "html-for": "attributions",
              class: "font-weight-bold"
            }, {
              default: s(() => [
                b(
                  y(e.$t("dynamicLayer.info.attributions")),
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
        o(d, {
          "no-gutters": "",
          class: "px-2"
        }, {
          default: s(() => {
            var f, v;
            return [
              U("div", null, [
                b(
                  y((f = e.item.attributions) == null ? void 0 : f.provider) + " ",
                  1
                  /* TEXT */
                ),
                ws,
                (v = e.item.attributions) != null && v.url ? (g(), E("a", {
                  key: 0,
                  href: e.item.attributions.url,
                  target: "_blank"
                }, y(e.$t("dynamicLayer.info.website")), 9, Ts)) : $("v-if", !0)
              ])
            ];
          }),
          _: 1
          /* STABLE */
        })
      ])) : $("v-if", !0),
      e.checkAnyProperty(e.item.contact) ? (g(), E("span", Ls, [
        o(d, { "no-gutters": "" }, {
          default: s(() => [
            o(u, {
              "html-for": "contact",
              class: "font-weight-bold"
            }, {
              default: s(() => [
                b(
                  y(e.$t("dynamicLayer.info.contact")),
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
        o(d, {
          "no-gutters": "",
          class: "px-2 pb-1"
        }, {
          default: s(() => {
            var f, v, S, T, N, M, F, O, j, C, X, _, K;
            return [
              U("p", null, [
                b(
                  y((f = e.item.contact) == null ? void 0 : f.person) + y((v = e.item.contact) != null && v.person && ((S = e.item.contact) != null && S.organization) ? " - " : "") + y((T = e.item.contact) == null ? void 0 : T.organization) + " ",
                  1
                  /* TEXT */
                ),
                (N = e.item.contact) != null && N.organization ? (g(), E("br", As)) : $("v-if", !0),
                b(
                  " " + y((M = e.item.contact) == null ? void 0 : M.position) + " ",
                  1
                  /* TEXT */
                ),
                (F = e.item.contact) != null && F.position ? (g(), E("br", Cs)) : $("v-if", !0),
                b(
                  " " + y((O = e.item.contact) == null ? void 0 : O.address) + " ",
                  1
                  /* TEXT */
                ),
                (j = e.item.contact) != null && j.address ? (g(), E("br", Es)) : $("v-if", !0),
                b(
                  " " + y((C = e.item.contact) == null ? void 0 : C.city) + y((X = e.item.contact) != null && X.city && ((_ = e.item.contact) != null && _.country) ? ", " : "") + y((K = e.item.contact) == null ? void 0 : K.country),
                  1
                  /* TEXT */
                )
              ])
            ];
          }),
          _: 1
          /* STABLE */
        })
      ])) : $("v-if", !0)
    ],
    64
    /* STABLE_FRAGMENT */
  );
}
const $s = /* @__PURE__ */ J(ys, [["render", _s]]), Vs = { class: "h-100" }, Rs = { class: "h-100 overflow-y-auto pb-2" }, Ps = {
  key: 1,
  class: "pa-1"
}, Is = /* @__PURE__ */ H({
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
    return (t, n) => (g(), E("div", Vs, [
      o(Ee(Y), {
        "no-gutters": "",
        class: "title pt-1"
      }, {
        default: s(() => [
          b(
            y(t.$t(e.title)),
            1
            /* TEXT */
          )
        ]),
        _: 1
        /* STABLE */
      }),
      o(Ee(Y), {
        "no-gutters": "",
        class: "subtitle"
      }, {
        default: s(() => [
          b(
            y(e.subtitle) + "  ",
            1
            /* TEXT */
          )
        ]),
        _: 1
        /* STABLE */
      }),
      o(Ee(Ye), {
        heading: "dynamicLayer.info.title",
        expandable: "",
        "start-open": e.startOpen,
        class: "h-100 section"
      }, {
        default: s(() => [
          U("div", Rs, [
            Ee(Jt)(e.item) ? (g(), A($s, {
              key: 0,
              item: e.item
            }, null, 8, ["item"])) : (g(), E(
              "span",
              Ps,
              y(t.$t("dynamicLayer.info.noInfoFor")) + " " + y(e.item.type) + " " + y(t.$t("dynamicLayer.common.layers")) + ". ",
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
}), yn = /* @__PURE__ */ J(Is, [["__scopeId", "data-v-43a74f6a"]]), Ds = H({
  name: "WebdataWindow",
  components: {
    VCard: ze,
    VCardTitle: Xn,
    VCol: oe,
    VDivider: Xe,
    VRow: Y,
    VSpacer: Yn,
    VcsButton: ut,
    VcsFormButton: We,
    VcsLabel: le,
    VcsSelect: Fe,
    VcsTextField: be,
    VcsTreeview: Mt,
    DlTreeviewTitle: fn,
    VcsTreeviewSearchbar: kt,
    WebdataInformations: yn
  },
  setup() {
    const e = re("vcsApp"), t = e.plugins.getByKey(k), { added: n, selected: a, opened: r } = t.webdata, l = w(""), i = w(!1), d = it(G.WEBDATA), u = w(t.config.webdata.defaultType), c = w(t.config.webdata.defaultUrl), p = w(!1);
    return {
      newSourceType: u,
      newSourceUrl: c,
      added: n,
      opened: r,
      selected: a,
      search: l,
      filterActive: p,
      availableTypes: d,
      isNewSourceLoading: i,
      getNonAddedChildrenLength: lt,
      addLayer: De.bind(null, e),
      addNested: an.bind(null, e),
      removeLayer: Oe.bind(null, e),
      removeSource: rn.bind(null, e),
      editParameters(f) {
        t.activeTab.value = G.ADDED, t.addedSelected.value = f;
      },
      filter(f) {
        return Fa(f, (v) => !!v.isAddedToMap);
      },
      getSubtitle(f) {
        return Jt(f) ? f.name : Pe(f.url, f.type);
      },
      async addSource() {
        if (!(!u.value || !c.value || i.value)) {
          p.value = !1;
          try {
            i.value = !0;
            const f = Pe(
              c.value,
              u.value
            );
            if (n.value.some((S) => S.url === f)) {
              e.notifier.add({
                type: ye.ERROR,
                message: "dynamicLayer.errors.urlAlreadyAdded"
              }), i.value = !1;
              return;
            }
            const v = await ht(
              e,
              c.value,
              u.value
            );
            a.value = v, r.value = [v.name], n.value.push(v);
          } catch (f) {
            e.notifier.add({
              type: ye.ERROR,
              message: f
            });
          }
          i.value = !1;
        }
      }
    };
  }
}), Os = {
  key: 0,
  class: "h-100"
}, ks = { class: "d-flex justify-end gc-2 pa-2 w-100" }, Ms = {
  key: 3,
  class: "d-flex gc-2"
}, Ns = { class: "d-flex justify-end pt-3" };
function Us(e, t, n, a, r, l) {
  const i = m("VcsTreeviewSearchbar"), d = m("v-col"), u = m("VcsButton"), c = m("v-row"), p = m("DlTreeviewTitle"), f = m("VcsTreeview"), v = m("v-divider"), S = m("WebdataInformations"), T = m("VDivider"), N = m("VcsFormButton"), M = m("VSpacer"), F = m("v-card-title"), O = m("VcsLabel"), j = m("VcsSelect"), C = m("VcsTextField"), X = m("v-card");
  return g(), A(c, {
    "no-gutters": "",
    class: "h-100"
  }, {
    default: s(() => [
      o(d, {
        cols: "4",
        class: "h-100"
      }, {
        default: s(() => [
          o(c, { "no-gutters": "" }, {
            default: s(() => [
              o(d, { cols: "10" }, {
                default: s(() => [
                  o(i, {
                    modelValue: e.search,
                    "onUpdate:modelValue": t[0] || (t[0] = (_) => e.search = _)
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
                /* STABLE */
              }),
              o(d, {
                cols: "2",
                class: "bg-base-lighten-3 d-flex align-center justify-end px-2 gc-2"
              }, {
                default: s(() => [
                  o(u, {
                    icon: "mdi-filter",
                    tooltip: "dynamicLayer.actions.filter.showAddedOnly",
                    active: e.filterActive,
                    onClick: t[1] || (t[1] = (_) => e.filterActive = !e.filterActive)
                  }, null, 8, ["active"]),
                  o(u, {
                    icon: "$vcsPlus",
                    tooltip: "dynamicLayer.actions.source.addNew",
                    active: !e.selected,
                    onClick: t[2] || (t[2] = (_) => e.selected = void 0)
                  }, null, 8, ["active"])
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
                "onUpdate:opened": t[3] || (t[3] = (_) => e.opened = _),
                class: "treeview h-100 w-100 overflow-y-auto",
                items: e.filterActive ? e.filter(e.added) : e.added,
                search: e.search
              }, {
                title: s(({ item: _ }) => [
                  o(p, {
                    title: _.title,
                    active: e.selected === _,
                    onClick: (K) => e.selected = _
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
        _: 1
        /* STABLE */
      }),
      o(v, { vertical: "" }),
      o(d, {
        cols: "8",
        class: "h-100"
      }, {
        default: s(() => [
          e.selected ? (g(), E("span", Os, [
            (g(), A(S, {
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
                o(T),
                U("span", ks, [
                  e.selected.children.length ? (g(), A(N, {
                    key: 0,
                    variant: "filled",
                    disabled: !e.getNonAddedChildrenLength(e.selected),
                    onClick: t[4] || (t[4] = (_) => e.addNested(e.selected))
                  }, {
                    default: s(() => [
                      b(
                        y(e.$t("dynamicLayer.actions.layer.addAll")) + " " + y(e.getNonAddedChildrenLength(e.selected) ? `(${e.getNonAddedChildrenLength(e.selected)})` : ""),
                        1
                        /* TEXT */
                      )
                    ]),
                    _: 1
                    /* STABLE */
                  }, 8, ["disabled"])) : $("v-if", !0),
                  e.selected.isRootElement ? (g(), A(N, {
                    key: 1,
                    onClick: t[5] || (t[5] = (_) => e.removeSource(e.selected))
                  }, {
                    default: s(() => [
                      b(
                        y(e.$t("dynamicLayer.actions.source.delete")),
                        1
                        /* TEXT */
                      )
                    ]),
                    _: 1
                    /* STABLE */
                  })) : $("v-if", !0),
                  !e.selected.children.length && e.selected.isAddedToMap ? (g(), A(M, { key: 2 })) : $("v-if", !0),
                  !e.selected.children.length && e.selected.isAddedToMap ? (g(), E("span", Ms, [
                    o(N, {
                      variant: "filled",
                      onClick: t[6] || (t[6] = (_) => e.editParameters(e.selected))
                    }, {
                      default: s(() => [
                        b(
                          y(e.$t("dynamicLayer.actions.edit")),
                          1
                          /* TEXT */
                        )
                      ]),
                      _: 1
                      /* STABLE */
                    }),
                    o(N, {
                      onClick: t[7] || (t[7] = (_) => e.removeLayer(e.selected))
                    }, {
                      default: s(() => [
                        b(
                          y(e.$t("dynamicLayer.actions.layer.remove")),
                          1
                          /* TEXT */
                        )
                      ]),
                      _: 1
                      /* STABLE */
                    })
                  ])) : e.selected.children.length ? $("v-if", !0) : (g(), A(N, {
                    key: 4,
                    variant: "filled",
                    onClick: t[8] || (t[8] = (_) => e.addLayer(e.selected))
                  }, {
                    default: s(() => [
                      b(
                        y(e.$t("dynamicLayer.actions.layer.add")),
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
          ])) : (g(), A(c, {
            key: 1,
            "no-gutters": "",
            class: "h-75"
          }, {
            default: s(() => [
              o(d, {
                cols: "8",
                offset: "2",
                class: "d-flex align-center"
              }, {
                default: s(() => [
                  o(X, {
                    flat: "",
                    class: "w-100"
                  }, {
                    default: s(() => [
                      o(F, { class: "font-weight-bold d-flex justify-center text-decoration-underline" }, {
                        default: s(() => [
                          b(
                            y(e.$t("dynamicLayer.webdata.add.title")),
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
                          o(O, { "html-for": "type" }, {
                            default: s(() => [
                              b(
                                y(e.$t("dynamicLayer.webdata.add.type")),
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
                          o(j, {
                            id: "type",
                            modelValue: e.newSourceType,
                            "onUpdate:modelValue": t[9] || (t[9] = (_) => e.newSourceType = _),
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
                          o(O, { "html-for": "url" }, {
                            default: s(() => [
                              b(
                                y(e.$t("dynamicLayer.webdata.add.url")),
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
                          o(C, {
                            id: "url",
                            modelValue: e.newSourceUrl,
                            "onUpdate:modelValue": t[10] || (t[10] = (_) => e.newSourceUrl = _),
                            placeholder: "URL",
                            onKeyup: jt(e.addSource, ["enter"])
                          }, null, 8, ["modelValue", "onKeyup"])
                        ]),
                        _: 1
                        /* STABLE */
                      }),
                      U("span", Ns, [
                        o(N, {
                          variant: "filled",
                          loading: e.isNewSourceLoading,
                          disabled: !e.newSourceType || !e.newSourceUrl || e.isNewSourceLoading,
                          onClick: e.addSource
                        }, {
                          default: s(() => [
                            b(
                              y(e.$t("dynamicLayer.actions.source.add")),
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
      })
    ]),
    _: 1
    /* STABLE */
  });
}
const Fs = /* @__PURE__ */ J(Ds, [["render", Us], ["__scopeId", "data-v-f8020a1c"]]), Ws = H({
  name: "CataloguesFilter",
  components: {
    VCol: oe,
    VRow: Y,
    VcsButton: ut,
    VcsTextField: be,
    VcsSelect: Fe
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
    const n = w("");
    return {
      filteredItems: ne(
        () => n.value ? e.facet.values.filter(
          (r) => r.title.toLowerCase().includes(n.value.toLowerCase())
        ) : e.facet.values
      ),
      search: n,
      apply(r) {
        t("filter", e.facet.id, [r]), t("toggleFacet", "");
      },
      reset() {
        t("filter", e.facet.id, []);
      }
    };
  }
});
function Bs(e, t, n, a, r, l) {
  const i = m("VcsTextField"), d = m("VcsButton"), u = m("v-row"), c = m("VcsSelect"), p = m("v-col");
  return g(), A(u, {
    "no-gutters": "",
    class: "w-100"
  }, {
    default: s(() => [
      o(p, {
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
          }, Gn({
            _: 2
            /* DYNAMIC */
          }, [
            e.facet.values.length > 1 ? {
              name: "prepend-item",
              fn: s(() => [
                o(u, {
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
                    o(d, {
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
      e.selection.length ? (g(), A(p, {
        key: 0,
        cols: "1",
        class: "d-flex align-center px-1"
      }, {
        default: s(() => [
          o(d, {
            icon: "mdi-filter-remove",
            tooltip: e.$t("dynamicLayer.actions.filter.reset"),
            onClick: e.reset
          }, null, 8, ["tooltip", "onClick"])
        ]),
        _: 1
        /* STABLE */
      })) : $("v-if", !0)
    ]),
    _: 1
    /* STABLE */
  });
}
const zs = /* @__PURE__ */ J(Ws, [["render", Bs]]);
function Dt(e) {
  return e.map((t) => ({ name: t.id, title: t.title }));
}
const js = H({
  name: "DatasetsList",
  components: {
    VCard: ze,
    VCol: oe,
    VIcon: ea,
    VMenu: xn,
    VPagination: Qn,
    VRow: Y,
    VcsActionButtonList: Ut,
    VcsList: Nt,
    VcsButton: ut,
    VcsTreeviewSearchbar: kt,
    CatalogueFilter: zs
  },
  props: {
    source: {
      type: Object,
      required: !0
    }
  },
  emits: ["select"],
  setup(e, { emit: t }) {
    var C, X;
    const n = re("vcsApp"), a = n.plugins.getByKey(k), { locale: r } = n, { itemsPerPage: l } = a.config.catalogues, i = w(e.source.data), d = w(""), u = w(!1), c = w(!1), p = w((C = At[e.source.type]) == null ? void 0 : C[0]), f = (X = At[e.source.type]) == null ? void 0 : X.map(
      (_) => B({
        active: ne(() => p.value === _),
        name: `dynamicLayer.catalogues.sortBy.${_}`,
        callback: () => {
          p.value = _;
        }
      })
    ), v = w(Dt(i.value.datasets)), S = w(1), T = w(!0), N = ne({
      get: () => [],
      set(_) {
        const K = _ != null && _[0] ? i.value.datasets.find((de) => de.id === _[0].name) : void 0;
        t("select", K);
      }
    }), M = Object.fromEntries(
      i.value.facets.map((_) => [_.id, []])
    ), F = w(), O = w(!1);
    async function j(_ = !1, K = 1) {
      c.value = !0, _ || (S.value = 1);
      const de = await xt(
        e.source.type,
        e.source.url,
        l,
        e.source.filter,
        r,
        S.value - 1,
        d.value ?? "",
        p.value,
        Object.fromEntries(
          Object.entries(M).filter((fe) => fe[1].length > 0)
        )
      ).catch(() => {
        O.value = !0, S.value = K, n.notifier.add({
          type: ye.ERROR,
          message: `${n.vueI18n.t("dynamicLayer.errors.fetchingCatalogue")} ${e.source.url}`
        });
      }).finally(() => {
        c.value = !1;
      });
      de && (i.value = de, v.value = Dt(i.value.datasets), N.value = void 0);
    }
    return te(p, async () => {
      await j();
    }), te(S, async (_, K) => {
      if (O.value) {
        O.value = !1;
        return;
      }
      await j(!0, K);
    }), {
      locale: n.locale,
      data: i,
      page: S,
      itemsPerPage: l,
      loading: c,
      search: d,
      searchLoading: u,
      sortByActions: f,
      showDatasetDescription: T,
      datasets: v,
      arraySelected: N,
      filters: M,
      openedFacet: F,
      async updateFilters(_, K) {
        M[_] = K, await j();
      },
      async updateSearch() {
        u.value = !0, await j(), u.value = !1;
      }
    };
  }
}), Gs = { class: "d-block h-100" }, Ks = {
  key: 0,
  class: "h-100 d-flex align-center justify-center"
};
function qs(e, t, n, a, r, l) {
  const i = m("VcsTreeviewSearchbar"), d = m("VcsActionButtonList"), u = m("CatalogueFilter"), c = m("v-row"), p = m("v-card"), f = m("v-menu"), v = m("VcsButton"), S = m("v-col"), T = m("v-icon"), N = m("VcsList"), M = m("VPagination");
  return g(), E("span", Gs, [
    o(c, { "no-gutters": "" }, {
      default: s(() => [
        o(S, {
          cols: "12",
          class: "d-flex align-center bg-base-lighten-3 px-1"
        }, {
          default: s(() => {
            var F;
            return [
              o(i, {
                modelValue: e.search,
                "onUpdate:modelValue": t[0] || (t[0] = (O) => e.search = O),
                class: "w-100",
                loading: e.searchLoading,
                placeholder: `${e.$t("dynamicLayer.catalogues.searchAmong")} ${e.data.count.toLocaleString(e.locale)} ${e.$t("dynamicLayer.catalogues.datasets")}`,
                "onClick:clear": e.updateSearch,
                onKeyup: jt(e.updateSearch, ["enter"])
              }, null, 8, ["modelValue", "loading", "placeholder", "onClick:clear", "onKeyup"]),
              (F = e.sortByActions) != null && F.length ? (g(), A(d, {
                key: 0,
                class: "px-1",
                actions: e.sortByActions,
                button: "VcsButton",
                "overflow-icon": "mdi-sort",
                "overflow-count": 0
              }, null, 8, ["actions"])) : $("v-if", !0),
              e.data.facets.length ? (g(), A(v, {
                key: 1,
                class: "pl-2",
                active: Object.values(e.filters).some((O) => O.length),
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
                      o(p, { "min-width": "300" }, {
                        default: s(() => [
                          (g(!0), E(
                            _e,
                            null,
                            Be(e.data.facets, (O) => (g(), A(
                              c,
                              {
                                key: O.id,
                                "no-gutters": "",
                                class: "px-2 py-1"
                              },
                              {
                                default: s(() => [
                                  o(u, {
                                    facet: O,
                                    selection: e.filters[O.id],
                                    opened: e.openedFacet === O.id,
                                    onFilter: e.updateFilters,
                                    onToggleFacet: t[1] || (t[1] = (j) => e.openedFacet = j)
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
              }, 8, ["active", "tooltip"])) : $("v-if", !0)
            ];
          }),
          _: 1
          /* STABLE */
        })
      ]),
      _: 1
      /* STABLE */
    }),
    e.loading ? (g(), E("div", Ks, [
      o(T, {
        size: "2em",
        color: "primary",
        icon: "$vcsProgress"
      })
    ])) : (g(), A(c, {
      key: 1,
      "no-gutters": ""
    }, {
      default: s(() => [
        o(N, {
          modelValue: e.arraySelected,
          "onUpdate:modelValue": t[2] || (t[2] = (F) => e.arraySelected = F),
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
        o(M, {
          modelValue: e.page,
          "onUpdate:modelValue": t[3] || (t[3] = (F) => e.page = F),
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
const Zs = /* @__PURE__ */ J(js, [["render", qs], ["__scopeId", "data-v-a468bc4b"]]), Hs = H({
  name: "DistributionDetails",
  components: {
    VCard: ze,
    VDialog: Kt,
    VRow: Y,
    VcsFormButton: We,
    VcsLabel: le,
    VcsTreeview: Mt,
    DlTreeviewTitle: fn
  },
  props: {
    columns: { type: Array, required: !0 },
    distribution: {
      type: Object,
      required: !0
    }
  },
  setup(e) {
    const t = re("vcsApp"), n = t.plugins.getByKey(k), a = w(!1), r = w();
    async function l(i) {
      a.value = !0;
      const d = await cr(
        t,
        i.accessUrl,
        i.type,
        i.id,
        i.title,
        !!n.state.entry
      );
      a.value = !1, r.value = d;
    }
    return n.state.entry && n.state.entry.distrib === e.distribution.id && l(e.distribution).then(() => {
      delete n.state.entry;
    }).catch((i) => {
      t.notifier.add({
        type: ye.ERROR,
        message: `${t.vueI18n.t("dynamicLayer.errors.addingLayer")} ${e.distribution.title}: ${String(i)}`
      });
    }), {
      plugin: n,
      loading: a,
      chooseLayerOfItem: r,
      addToMap: l,
      addNbs: dr.bind(null, t)
    };
  }
}), Js = ["colspan"], Ys = {
  "no-gutters": "",
  class: "d-flex justify-end gc-2 font-italic"
}, Xs = { key: 0 }, Qs = { class: "w-100 d-inline-block text-break" }, xs = { class: "d-flex gc-2 justify-end py-2" }, ei = { key: 1 }, ti = { class: "pa-2" }, ni = { key: 0 }, ai = { class: "font-italic" }, ri = { key: 2 };
function oi(e, t, n, a, r, l) {
  const i = m("VcsLabel"), d = m("v-row"), u = m("VcsFormButton"), c = m("DlTreeviewTitle"), p = m("VcsTreeview"), f = m("v-card"), v = m("v-dialog");
  return g(), E("tr", null, [
    U("td", {
      colspan: e.columns.length
    }, [
      U(
        "span",
        Ys,
        " id: " + y(e.distribution.id),
        1
        /* TEXT */
      ),
      e.distribution.description ? (g(), E("span", Xs, [
        o(d, { "no-gutters": "" }, {
          default: s(() => [
            o(i, {
              "html-for": "description",
              class: "font-weight-bold"
            }, {
              default: s(() => [
                b(
                  y(e.$t("dynamicLayer.common.description")),
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
        o(d, {
          "no-gutters": "",
          class: "px-2 w-100"
        }, {
          default: s(() => [
            U(
              "span",
              Qs,
              y(e.distribution.description),
              1
              /* TEXT */
            )
          ]),
          _: 1
          /* STABLE */
        })
      ])) : $("v-if", !0),
      U("div", xs, [
        e.distribution.downloadUrl ? (g(), A(u, {
          key: 0,
          download: "",
          href: e.distribution.downloadUrl,
          target: "_blank"
        }, {
          default: s(() => [
            b(
              y(e.$t("dynamicLayer.actions.download")),
              1
              /* TEXT */
            )
          ]),
          _: 1
          /* STABLE */
        }, 8, ["href"])) : $("v-if", !0),
        e.distribution.accessUrl ? (g(), E("span", ei, [
          e.distribution.type ? (g(), A(u, {
            key: 1,
            variant: "filled",
            loading: e.loading,
            onClick: t[0] || (t[0] = (S) => e.addToMap(e.distribution))
          }, {
            default: s(() => [
              b(
                y(e.$t("dynamicLayer.actions.add")),
                1
                /* TEXT */
              )
            ]),
            _: 1
            /* STABLE */
          }, 8, ["loading"])) : (g(), A(u, {
            key: 0,
            variant: "filled",
            target: "_blank",
            href: e.distribution.accessUrl
          }, {
            default: s(() => [
              b(
                y(e.$t("dynamicLayer.actions.access")),
                1
                /* TEXT */
              )
            ]),
            _: 1
            /* STABLE */
          }, 8, ["href"])),
          o(v, {
            "model-value": !!e.chooseLayerOfItem,
            width: "400",
            onAfterLeave: t[1] || (t[1] = (S) => e.chooseLayerOfItem = void 0)
          }, {
            default: s(() => [
              o(f, null, {
                default: s(() => [
                  U("span", ti, [
                    b(
                      y(e.$t("dynamicLayer.catalogues.chooseLayersToAdd")) + " ",
                      1
                      /* TEXT */
                    ),
                    e.distribution.title ? (g(), E("p", ni, [
                      b(
                        y(e.$t("dynamicLayer.catalogues.selectedDistributionName")) + " ",
                        1
                        /* TEXT */
                      ),
                      U(
                        "span",
                        ai,
                        y(e.distribution.title),
                        1
                        /* TEXT */
                      ),
                      b(". ")
                    ])) : $("v-if", !0)
                  ]),
                  o(p, {
                    "show-searchbar": "",
                    items: [e.chooseLayerOfItem],
                    "open-all": "",
                    class: "treeview"
                  }, {
                    title: s(({ item: S }) => [
                      o(c, {
                        title: S.title
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
        ])) : e.distribution.feature ? (g(), E("span", ri, [
          o(u, {
            variant: "filled",
            loading: e.loading,
            onClick: t[2] || (t[2] = (S) => e.addNbs(e.distribution))
          }, {
            default: s(() => [
              b(
                y(e.$t("dynamicLayer.actions.add")),
                1
                /* TEXT */
              )
            ]),
            _: 1
            /* STABLE */
          }, 8, ["loading"])
        ])) : $("v-if", !0)
      ])
    ], 8, Js)
  ]);
}
const si = /* @__PURE__ */ J(Hs, [["render", oi], ["__scopeId", "data-v-6a35c22b"]]);
function ii(e = []) {
  const t = [
    {
      title: "dynamicLayer.common.title",
      value: (n) => n.title ?? n.id,
      cellProps: { nowrap: !1 },
      nowrap: !0,
      key: "title",
      sortable: !0
    }
  ];
  return e.some((n) => n.format) && t.push({
    title: "dynamicLayer.common.format",
    value: (n) => n.format ?? "",
    sortable: !0,
    cellProps: { nowrap: !1 },
    nowrap: !0,
    key: "format"
  }), e.some((n) => n.modified) ? t.push({
    title: "dynamicLayer.info.modified",
    cellProps: { nowrap: !0 },
    nowrap: !0,
    key: "modified",
    value: (n) => n.modified ?? "",
    sortable: !0
  }) : e.some((n) => n.created) && t.push({
    title: "dynamicLayer.info.created",
    cellProps: { nowrap: !0 },
    nowrap: !0,
    key: "created",
    value: (n) => n.created ?? "",
    sortable: !0
  }), e.some((n) => n.license) && t.push({
    title: "dynamicLayer.info.license",
    value: (n) => n.license ?? "",
    cellProps: { nowrap: !1 },
    nowrap: !0,
    key: "license",
    sortable: !0
  }), t;
}
const li = H({
  name: "DatasetDetails",
  components: {
    VChip: Gt,
    VRow: Y,
    VcsDataTable: Sn,
    VcsFormSection: Ye,
    VcsLabel: le,
    DistributionDetails: si
  },
  props: {
    dataset: {
      type: Object,
      required: !0
    }
  },
  setup(e) {
    const t = re("vcsApp"), n = t.plugins.getByKey(k), { expandedDistributionIds: a } = n.catalogues, { locale: r } = t, l = w(e.dataset.distributions ?? []), i = w(ii(l.value)), d = w(
      e.dataset.keywords && e.dataset.keywords.length <= 4
    );
    return {
      expandedDistributionIds: a,
      locale: r,
      distributions: l,
      headers: i,
      showAllKeywords: d
    };
  }
}), di = { class: "py-1" }, ui = { class: "text-truncate pr-1" }, ci = { class: "font-italic" }, mi = ["href"], pi = {
  key: 1,
  class: "text-decoration-underline"
}, fi = { class: "text-truncate pr-1" }, yi = { class: "font-italic" }, gi = ["href"], vi = {
  key: 1,
  class: "text-decoration-underline"
}, hi = { class: "text-truncate pr-1" }, bi = { class: "font-italic" }, Si = ["href"], wi = {
  key: 1,
  class: "text-decoration-underline"
}, Ti = { key: 0 }, Li = { class: "text-decoration-underline" }, Ai = { class: "font-italic" }, Ci = { key: 1 }, Ei = { class: "text-decoration-underline" }, _i = { class: "font-italic" }, $i = {
  key: 1,
  class: "w-100 pb-1"
}, Vi = { key: 0 };
function Ri(e, t, n, a, r, l) {
  const i = m("v-row"), d = m("v-chip"), u = m("VcsLabel"), c = m("VcsFormSection"), p = m("DistributionDetails"), f = m("VcsDataTable");
  return g(), E("span", di, [
    o(i, {
      "no-gutters": "",
      class: "font-weight-black d-flex justify-center text-center py-1"
    }, {
      default: s(() => [
        b(
          y(e.dataset.title),
          1
          /* TEXT */
        )
      ]),
      _: 1
      /* STABLE */
    }),
    e.dataset.source ? (g(), A(i, {
      key: 0,
      "no-gutters": "",
      class: "d-flex align-center justify-center gc-1"
    }, {
      default: s(() => [
        U("span", ui, [
          b(
            y(e.$t("dynamicLayer.info.source")) + ": ",
            1
            /* TEXT */
          ),
          U("span", ci, [
            e.dataset.source.url ? (g(), E("a", {
              key: 0,
              href: e.dataset.source.url,
              target: "_blank"
            }, y(e.dataset.source.title), 9, mi)) : (g(), E(
              "span",
              pi,
              y(e.dataset.source.title),
              1
              /* TEXT */
            ))
          ])
        ])
      ]),
      _: 1
      /* STABLE */
    })) : $("v-if", !0),
    e.dataset.publisher ? (g(), A(i, {
      key: 1,
      "no-gutters": "",
      class: "d-flex align-center justify-center gc-1"
    }, {
      default: s(() => [
        U("span", fi, [
          b(
            y(e.$t("dynamicLayer.info.publisher")) + ": ",
            1
            /* TEXT */
          ),
          U("span", yi, [
            e.dataset.publisher.url ? (g(), E("a", {
              key: 0,
              href: e.dataset.publisher.url,
              target: "_blank"
            }, y(e.dataset.publisher.title), 9, gi)) : (g(), E(
              "span",
              vi,
              y(e.dataset.publisher.title),
              1
              /* TEXT */
            ))
          ])
        ])
      ]),
      _: 1
      /* STABLE */
    })) : $("v-if", !0),
    e.dataset.owner ? (g(), A(i, {
      key: 2,
      "no-gutters": "",
      class: "d-flex align-center justify-center gc-1"
    }, {
      default: s(() => [
        U("span", hi, [
          b(
            y(e.$t("dynamicLayer.info.owner")) + ": ",
            1
            /* TEXT */
          ),
          U("span", bi, [
            e.dataset.owner.url ? (g(), E("a", {
              key: 0,
              href: e.dataset.owner.url,
              target: "_blank"
            }, y(e.dataset.owner.title), 9, Si)) : (g(), E(
              "span",
              wi,
              y(e.dataset.owner.title),
              1
              /* TEXT */
            ))
          ])
        ])
      ]),
      _: 1
      /* STABLE */
    })) : $("v-if", !0),
    o(i, {
      "no-gutters": "",
      class: "d-flex justify-center gc-4"
    }, {
      default: s(() => [
        e.dataset.created ? (g(), E("span", Ti, [
          U(
            "span",
            Li,
            y(e.$t("dynamicLayer.info.created")) + ":",
            1
            /* TEXT */
          ),
          U(
            "span",
            Ai,
            " " + y(e.dataset.created),
            1
            /* TEXT */
          )
        ])) : $("v-if", !0),
        e.dataset.modified ? (g(), E("span", Ci, [
          U(
            "span",
            Ei,
            y(e.$t("dynamicLayer.info.modified")) + ":",
            1
            /* TEXT */
          ),
          U(
            "span",
            _i,
            " " + y(e.dataset.modified),
            1
            /* TEXT */
          )
        ])) : $("v-if", !0)
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
        var v;
        return [
          (v = e.dataset.keywords) != null && v.length ? (g(), A(i, {
            key: 0,
            "no-gutters": "",
            class: "w-100 pt-1"
          }, {
            default: s(() => [
              e.dataset.keywords.length > 3 ? (g(), A(d, {
                key: 0,
                size: "x-small",
                color: "primary",
                variant: "outlined",
                class: "ma-1",
                onClick: t[0] || (t[0] = (S) => e.showAllKeywords = !e.showAllKeywords)
              }, {
                default: s(() => [
                  b(
                    y(e.showAllKeywords ? e.$t("dynamicLayer.actions.collapse") : `${e.$t("dynamicLayer.common.show")} ${e.dataset.keywords.length} ${e.$t("dynamicLayer.common.more")}`),
                    1
                    /* TEXT */
                  )
                ]),
                _: 1
                /* STABLE */
              })) : $("v-if", !0),
              (g(!0), E(
                _e,
                null,
                Be(e.dataset.keywords.slice(
                  e.showAllKeywords ? void 0 : -1
                ), (S) => (g(), A(
                  d,
                  {
                    key: S,
                    size: "x-small",
                    color: "primary",
                    class: "ma-1"
                  },
                  {
                    default: s(() => [
                      b(
                        y(S),
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
          })) : $("v-if", !0),
          e.dataset.description ? (g(), E("span", $i, [
            o(i, { "no-gutters": "" }, {
              default: s(() => [
                o(u, {
                  "html-for": "description",
                  class: "font-weight-bold"
                }, {
                  default: s(() => [
                    b(
                      y(e.$t("dynamicLayer.common.description")),
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
                  y(e.dataset.description),
                  1
                  /* TEXT */
                )
              ]),
              _: 1
              /* STABLE */
            })
          ])) : $("v-if", !0)
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
            e.distributions.length ? (g(), A(f, {
              key: 1,
              expanded: e.expandedDistributionIds,
              "onUpdate:expanded": t[1] || (t[1] = (v) => e.expandedDistributionIds = v),
              class: "w-100",
              items: e.distributions,
              headers: e.headers,
              "items-per-page": e.distributions.length,
              "show-expand": "",
              "expand-on-click": ""
            }, {
              "expanded-row": s(({ columns: v, item: S }) => [
                o(p, {
                  columns: v,
                  distribution: S
                }, null, 8, ["columns", "distribution"])
              ]),
              _: 1
              /* STABLE */
            }, 8, ["expanded", "items", "headers", "items-per-page"])) : (g(), E(
              "span",
              Vi,
              y(e.$t("dynamicLayer.catalogues.noDistributionAvailable")),
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
  ]);
}
const Pi = /* @__PURE__ */ J(li, [["render", Ri], ["__scopeId", "data-v-b665e54e"]]), Ii = H({
  name: "CataloguesWindow",
  components: {
    VCard: ze,
    VCardText: ta,
    VCol: oe,
    VContainer: mt,
    VDivider: Xe,
    VRow: Y,
    VcsFormButton: We,
    VcsMarkdown: wn,
    DatasetsList: Zs,
    DatasetDetails: Pi
  },
  setup() {
    const e = re("vcsApp"), t = e.plugins.getByKey(k), {
      added: n,
      selected: a,
      selectedDataset: r
    } = t.catalogues;
    n.value.length === 1 && (a.value = n.value[0]);
    const l = w(!0);
    return te(a, () => {
      r.value = void 0;
    }), {
      CataloguesTypes: Ie,
      locale: e.locale,
      added: n,
      selectedCatalogue: a,
      selectedDataset: r,
      showDatasetDescription: l,
      getLogo(i) {
        return i.logo ?? en(e, i.type);
      },
      selectDataset: (i) => {
        r.value = i;
      }
    };
  }
}), Di = ["src"], Oi = { class: "d-flex align-start font-weight-black" }, ki = { class: "text-wrap max-3-lines" }, Mi = { class: "d-flex justify-end gc-1" };
function Ni(e, t, n, a, r, l) {
  const i = m("v-col"), d = m("VcsFormButton"), u = m("v-row"), c = m("v-card-text"), p = m("v-card"), f = m("DatasetsList"), v = m("v-divider"), S = m("DatasetDetails"), T = m("VcsMarkdown"), N = m("v-container");
  return g(), A(N, { class: "h-100 pa-0" }, {
    default: s(() => [
      $(" OVERVIEW "),
      e.selectedCatalogue ? (g(), E(
        _e,
        { key: 1 },
        [
          $(" CATALOGUE "),
          (g(), A(u, {
            key: e.selectedCatalogue.url,
            "no-gutters": "",
            class: "h-100"
          }, {
            default: s(() => [
              o(i, {
                cols: "5",
                class: "h-100"
              }, {
                default: s(() => [
                  o(f, {
                    source: e.selectedCatalogue,
                    onSelect: e.selectDataset
                  }, null, 8, ["source", "onSelect"])
                ]),
                _: 1
                /* STABLE */
              }),
              o(v, { vertical: "" }),
              o(i, {
                cols: "7",
                class: "max-height overflow-y-auto"
              }, {
                default: s(() => [
                  e.selectedDataset ? (g(), A(S, {
                    key: e.selectedDataset.id,
                    dataset: e.selectedDataset,
                    "show-description": e.showDatasetDescription,
                    onToggleDescription: t[0] || (t[0] = (M) => e.showDatasetDescription = !e.showDatasetDescription)
                  }, null, 8, ["dataset", "show-description"])) : (g(), A(T, {
                    key: 1,
                    class: "pa-1",
                    content: e.selectedCatalogue.description ?? e.$t("dynamicLayer.catalogues.defaultMarkdownDescription")
                  }, null, 8, ["content"]))
                ]),
                _: 1
                /* STABLE */
              })
            ]),
            _: 1
            /* STABLE */
          }))
        ],
        2112
        /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */
      )) : (g(), A(u, {
        key: 0,
        "no-gutters": "",
        class: "w-100 overflow-y-auto px-1"
      }, {
        default: s(() => [
          (g(!0), E(
            _e,
            null,
            Be(e.added, (M) => (g(), A(
              i,
              {
                key: M.url,
                class: "v-col-6 pa-1 d-flex flex-column"
              },
              {
                default: s(() => [
                  o(
                    p,
                    {
                      variant: "outlined",
                      rounded: "",
                      class: "flex-grow-1"
                    },
                    {
                      append: s(() => [
                        U("img", {
                          src: e.getLogo(M),
                          style: { height: "calc(2 * var(--v-vcs-font-size))" }
                        }, null, 8, Di)
                      ]),
                      title: s(() => [
                        U(
                          "span",
                          Oi,
                          y(M.title),
                          1
                          /* TEXT */
                        )
                      ]),
                      subtitle: s(() => [
                        U(
                          "span",
                          ki,
                          y(M.subtitle ?? e.$t("dynamicLayer.catalogues.noDescription")),
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
                                u,
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
                                            y(M.data.count.toLocaleString(e.locale)) + " " + y(e.$t("dynamicLayer.catalogues.datasets")),
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
                                          U("span", Mi, [
                                            o(d, {
                                              variant: "filled",
                                              onClick: (F) => e.selectedCatalogue = M
                                            }, {
                                              default: s(() => [
                                                b(
                                                  y(e.$t("dynamicLayer.actions.open")),
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
const Ui = /* @__PURE__ */ J(Ii, [["render", Ni], ["__scopeId", "data-v-1af69076"]]), Fi = H({
  name: "WmsParameters",
  components: {
    VCol: oe,
    VRow: Y,
    VcsCheckbox: ct,
    VcsExtent: Je,
    VcsLabel: le,
    VcsSelect: Fe,
    VcsSlider: Ft
  },
  props: {
    item: {
      type: Object,
      required: !0
    }
  },
  emits: ["parametersEdited"],
  setup(e, { emit: t }) {
    const a = re("vcsApp").layers.getByKey(e.item.name), r = w({
      ...a.toJSON(),
      tilingSchema: a.tilingSchema,
      opacity: a.opacity,
      availableStyles: D(e.item.styles),
      availableFormats: D(e.item.formats),
      supportsTransparency: e.item.supportsTransparency,
      queryable: e.item.queryable
    }), l = w(
      structuredClone(D(r.value))
    ), i = w(!!a.featureProvider);
    te(
      [r, i],
      () => {
        t("parametersEdited");
      },
      { deep: !0 }
    );
    function d(u, c) {
      return u.find((p) => p.value === c);
    }
    return {
      parameters: r,
      findStyle: d,
      enableFeatureInfo: i,
      styleText(u) {
        return u.title;
      },
      setExtent(u) {
        r.value.extent = u;
      },
      updateTransparency() {
        r.value.parameters.TRANSPARENT === "true" && (r.value.parameters.FORMAT = "image/png");
      },
      updateFormat(u) {
        var c;
        u !== "image/png" && ((c = r.value.parameters) != null && c.TRANSPARENT) && (r.value.parameters.TRANSPARENT = "false");
      },
      cancel() {
        r.value = structuredClone(D(l.value));
      },
      async apply() {
        Object.keys(r.value).forEach((u) => {
          var c;
          u in a && (u === "extent" ? a.extent = new pe(r.value[u]) : u === "properties" || u === "parameters" ? (r.value.availableStyles && a.parameters.STYLES !== r.value.parameters.STYLE && (a.properties.legend = [
            {
              popoutBtn: !0,
              type: "ImageLegendItem",
              src: (c = d(
                r.value.availableStyles,
                r.value.parameters.STYLES
              )) == null ? void 0 : c.legendUrl
            }
          ]), Object.keys(a[u]).forEach((p) => {
            var f;
            (f = r.value[u]) != null && f[p] && (a[u][p] = D(
              r.value[u][p]
            ));
          })) : a[u] = r.value[u]);
        }), i.value ? a.properties.featureInfo = k : delete a.properties.featureInfo, a.deactivate(), await a.activate(), await a.reload(), l.value = structuredClone(D(r.value));
      }
    };
  }
}), Wi = { class: "px-2 pb-1" };
function Bi(e, t, n, a, r, l) {
  var S;
  const i = m("VcsExtent"), d = m("v-row"), u = m("VcsLabel"), c = m("v-col"), p = m("VcsSelect"), f = m("VcsSlider"), v = m("VcsCheckbox");
  return g(), E("span", null, [
    e.parameters.extent ? (g(), A(d, {
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
    })) : $("v-if", !0),
    e.parameters.tilingSchema ? (g(), A(d, {
      key: 1,
      "no-gutters": "",
      class: "px-1"
    }, {
      default: s(() => [
        o(c, null, {
          default: s(() => [
            o(u, { "html-for": "tilingSchema" }, {
              default: s(() => [
                b(
                  y(e.$t("dynamicLayer.parameters.tilingSchema")),
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
            o(p, {
              id: "tilingSchema",
              modelValue: e.parameters.tilingSchema,
              "onUpdate:modelValue": t[0] || (t[0] = (T) => e.parameters.tilingSchema = T),
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
    })) : $("v-if", !0),
    e.parameters.parameters.FORMAT ? (g(), A(d, {
      key: 2,
      "no-gutters": "",
      class: "px-1"
    }, {
      default: s(() => [
        o(c, null, {
          default: s(() => [
            o(u, { "html-for": "format" }, {
              default: s(() => [
                b(
                  y(e.$t("dynamicLayer.common.format")),
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
            o(p, {
              id: "format",
              modelValue: e.parameters.parameters.FORMAT,
              "onUpdate:modelValue": [
                t[1] || (t[1] = (T) => e.parameters.parameters.FORMAT = T),
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
    })) : $("v-if", !0),
    o(d, {
      "no-gutters": "",
      class: "px-1"
    }, {
      default: s(() => [
        o(c, null, {
          default: s(() => [
            o(u, { "html-for": "opacity" }, {
              default: s(() => [
                b(
                  y(e.$t("dynamicLayer.parameters.opacity")),
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
              "onUpdate:modelValue": t[2] || (t[2] = (T) => e.parameters.opacity = T),
              min: "0",
              max: "1",
              step: "0.01"
            }, {
              append: s(() => [
                b(
                  y(Math.round(e.parameters.opacity * 100)) + "%",
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
    e.parameters.supportsTransparency ? (g(), A(d, {
      key: 3,
      "no-gutters": "",
      class: "px-1"
    }, {
      default: s(() => [
        o(c, null, {
          default: s(() => [
            o(u, { "html-for": "transparency" }, {
              default: s(() => [
                b(
                  y(e.$t("dynamicLayer.parameters.transparency")),
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
            o(v, {
              id: "transparency",
              modelValue: e.parameters.parameters.TRANSPARENT,
              "onUpdate:modelValue": t[3] || (t[3] = (T) => e.parameters.parameters.TRANSPARENT = T),
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
    })) : $("v-if", !0),
    e.parameters.queryable ? (g(), A(d, {
      key: 4,
      "no-gutters": "",
      class: "px-1"
    }, {
      default: s(() => [
        o(c, null, {
          default: s(() => [
            o(u, { "html-for": "featureInfo" }, {
              default: s(() => [
                b(
                  y(e.$t("dynamicLayer.parameters.featureInfo")),
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
            o(v, {
              id: "featureInfo",
              modelValue: e.enableFeatureInfo,
              "onUpdate:modelValue": t[4] || (t[4] = (T) => e.enableFeatureInfo = T)
            }, null, 8, ["modelValue"])
          ]),
          _: 1
          /* STABLE */
        })
      ]),
      _: 1
      /* STABLE */
    })) : $("v-if", !0),
    e.parameters.parameters.STYLES ? (g(), A(d, {
      key: 5,
      "no-gutters": "",
      class: "px-1"
    }, {
      default: s(() => [
        o(c, null, {
          default: s(() => [
            o(u, { "html-for": "style" }, {
              default: s(() => [
                b(
                  y(e.$t("dynamicLayer.parameters.style")),
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
            o(p, {
              id: "style",
              modelValue: e.parameters.parameters.STYLES,
              "onUpdate:modelValue": t[5] || (t[5] = (T) => e.parameters.parameters.STYLES = T),
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
    })) : $("v-if", !0),
    e.parameters.availableStyles && ((S = e.findStyle(e.parameters.availableStyles, e.parameters.parameters.STYLES)) != null && S.abstract) ? (g(), A(d, {
      key: 6,
      "no-gutters": ""
    }, {
      default: s(() => {
        var T;
        return [
          U(
            "p",
            Wi,
            y(e.$t("dynamicLayer.common.description")) + ": " + y((T = e.findStyle(e.parameters.availableStyles, e.parameters.parameters.STYLES)) == null ? void 0 : T.abstract),
            1
            /* TEXT */
          )
        ];
      }),
      _: 1
      /* STABLE */
    })) : $("v-if", !0)
  ]);
}
const zi = /* @__PURE__ */ J(Fi, [["render", Bi]]), ji = H({
  name: "CesiumTilesetParameters",
  components: {
    VCol: oe,
    VRow: Y,
    VcsLabel: le,
    VcsTextField: be
  },
  props: {
    item: {
      type: Object,
      required: !0
    }
  },
  emits: ["parametersEdited"],
  setup(e, { emit: t }) {
    const a = re("vcsApp").layers.getByKey(e.item.name), r = w({
      properties: { title: a.properties.title },
      screenSpaceError: a.screenSpaceError
    }), l = w(structuredClone(D(r.value)));
    return te(
      r,
      () => {
        t("parametersEdited");
      },
      { deep: !0 }
    ), {
      parameters: r,
      cancel() {
        r.value = structuredClone(D(l.value));
      },
      async apply() {
        a.screenSpaceError = r.value.screenSpaceError, await a.reload(), l.value = structuredClone(D(r.value));
      }
    };
  }
});
function Gi(e, t, n, a, r, l) {
  const i = m("VcsLabel"), d = m("v-col"), u = m("VcsTextField"), c = m("v-row");
  return g(), E("span", null, [
    e.parameters.screenSpaceError ? (g(), A(c, {
      key: 0,
      "no-gutters": "",
      class: "px-1"
    }, {
      default: s(() => [
        o(d, null, {
          default: s(() => [
            o(i, { "html-for": "screenSpaceError" }, {
              default: s(() => [
                b(
                  y(e.$t("dynamicLayer.parameters.screenSpaceError")),
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
        o(d, null, {
          default: s(() => [
            o(u, {
              id: "screenSpaceError",
              modelValue: e.parameters.screenSpaceError,
              "onUpdate:modelValue": t[0] || (t[0] = (p) => e.parameters.screenSpaceError = p),
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
    })) : $("v-if", !0)
  ]);
}
const Ki = /* @__PURE__ */ J(ji, [["render", Gi]]), qi = H({
  name: "GeoJSONParameters",
  components: {
    VCol: oe,
    VRow: Y,
    VcsLabel: le,
    VcsTextField: be
  },
  props: {
    item: {
      type: Object,
      required: !0
    }
  },
  emits: ["parametersEdited"],
  setup(e, { emit: t }) {
    const a = re("vcsApp").layers.getByKey(e.item.name), r = w({
      ...a.toJSON(),
      epsg: a.projection.epsg,
      proj4: a.projection.proj4
    }), l = w(structuredClone(D(r.value)));
    return te(
      r,
      () => {
        t("parametersEdited");
      },
      { deep: !0 }
    ), {
      parameters: r,
      cancel() {
        r.value = structuredClone(D(l.value));
      },
      apply() {
        (a.projection.epsg !== r.value.epsg || a.projection.proj4 !== r.value.proj4) && (a.projection = new zt({
          epsg: r.value.epsg,
          proj4: r.value.proj4
        })), l.value = structuredClone(D(r.value));
      }
    };
  }
});
function Zi(e, t, n, a, r, l) {
  const i = m("VcsLabel"), d = m("v-col"), u = m("VcsTextField"), c = m("v-row");
  return g(), E("span", null, [
    o(c, {
      "no-gutters": "",
      class: "px-1"
    }, {
      default: s(() => [
        o(d, null, {
          default: s(() => [
            o(i, { "html-for": "epsg" }, {
              default: s(() => [
                b(
                  y(e.$t("dynamicLayer.parameters.epsg")),
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
        o(d, null, {
          default: s(() => [
            o(u, {
              id: "epsg",
              modelValue: e.parameters.epsg,
              "onUpdate:modelValue": t[0] || (t[0] = (p) => e.parameters.epsg = p),
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
        o(d, null, {
          default: s(() => [
            o(i, { "html-for": "proj4" }, {
              default: s(() => [
                b(
                  y(e.$t("dynamicLayer.parameters.proj4")),
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
        o(d, null, {
          default: s(() => [
            o(u, {
              id: "proj4",
              modelValue: e.parameters.proj4,
              "onUpdate:modelValue": t[1] || (t[1] = (p) => e.parameters.proj4 = p),
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
const Hi = /* @__PURE__ */ J(qi, [["render", Zi]]), Ji = H({
  name: "TerrainParameters",
  components: {
    VCol: oe,
    VRow: Y,
    VcsCheckbox: ct,
    VcsLabel: le
  },
  props: {
    item: {
      type: Object,
      required: !0
    }
  },
  emits: ["parametersEdited"],
  setup(e, { emit: t }) {
    const a = re("vcsApp").layers.getByKey(e.item.name), r = w({
      requestVertexNormals: a.requestVertexNormals,
      requestWaterMask: a.requestWaterMask
    }), l = w(structuredClone(D(r.value)));
    return te(
      r,
      () => {
        t("parametersEdited");
      },
      { deep: !0 }
    ), {
      parameters: r,
      cancel() {
        r.value = structuredClone(D(l.value));
      },
      async apply() {
        a.requestVertexNormals !== r.value.requestVertexNormals && (a.requestVertexNormals = r.value.requestVertexNormals), a.requestWaterMask !== r.value.requestWaterMask && (a.requestWaterMask = r.value.requestWaterMask), a.deactivate(), await a.activate(), l.value = structuredClone(D(r.value));
      }
    };
  }
});
function Yi(e, t, n, a, r, l) {
  const i = m("VcsLabel"), d = m("v-col"), u = m("VcsCheckbox"), c = m("v-row");
  return g(), E("span", null, [
    o(c, {
      "no-gutters": "",
      class: "px-1"
    }, {
      default: s(() => [
        o(d, null, {
          default: s(() => [
            o(i, { "html-for": "requestVertexNormals" }, {
              default: s(() => [
                b(
                  y(e.$t("dynamicLayer.parameters.requestVertexNormals")),
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
        o(d, { class: "d-flex align-center" }, {
          default: s(() => [
            o(u, {
              id: "requestVertexNormals",
              modelValue: e.parameters.requestVertexNormals,
              "onUpdate:modelValue": t[0] || (t[0] = (p) => e.parameters.requestVertexNormals = p)
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
        o(d, null, {
          default: s(() => [
            o(i, { "html-for": "requestWaterMask" }, {
              default: s(() => [
                b(
                  y(e.$t("dynamicLayer.parameters.requestWaterMask")),
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
        o(d, { class: "d-flex align-center" }, {
          default: s(() => [
            o(u, {
              id: "requestWaterMask",
              modelValue: e.parameters.requestWaterMask,
              "onUpdate:modelValue": t[1] || (t[1] = (p) => e.parameters.requestWaterMask = p)
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
const Xi = /* @__PURE__ */ J(Ji, [["render", Yi]]), Qi = H({
  name: "WfsParameters",
  components: {
    VCol: oe,
    VRow: Y,
    VcsExtent: Je,
    VcsLabel: le,
    VcsTextField: be
  },
  props: {
    item: {
      type: Object,
      required: !0
    }
  },
  emits: ["parametersEdited"],
  setup(e, { emit: t }) {
    const a = re("vcsApp").layers.getByKey(e.item.name), r = w({ ...a.toJSON() }), l = w(structuredClone(D(r.value)));
    return te(
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
        r.value = structuredClone(D(l.value));
      },
      async apply() {
        Object.keys(r.value).forEach((i) => {
          i in a && (i === "extent" && r.value.extent !== a.extent ? a.extent = new pe(D(r.value.extent)) : i !== "projection" && (a[i] = D(r.value[i])));
        }), a.deactivate(), await a.activate(), await a.reload(), l.value = structuredClone(D(r.value));
      }
    };
  }
});
function xi(e, t, n, a, r, l) {
  const i = m("VcsLabel"), d = m("v-col"), u = m("VcsTextField"), c = m("v-row"), p = m("VcsExtent");
  return g(), E("span", null, [
    o(c, {
      "no-gutters": "",
      class: "px-1"
    }, {
      default: s(() => [
        o(d, null, {
          default: s(() => [
            o(i, { "html-for": "featureNS" }, {
              default: s(() => [
                b(
                  y(e.$t("dynamicLayer.parameters.featureNS")),
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
        o(d, null, {
          default: s(() => [
            o(u, {
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
        o(d, null, {
          default: s(() => [
            o(i, { "html-for": "featurePrefix" }, {
              default: s(() => [
                b(
                  y(e.$t("dynamicLayer.parameters.featurePrefix")),
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
        o(d, null, {
          default: s(() => [
            o(u, {
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
        o(d, null, {
          default: s(() => [
            o(i, { "html-for": "featureType" }, {
              default: s(() => [
                b(
                  y(e.$t("dynamicLayer.parameters.featureType")),
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
        o(d, null, {
          default: s(() => [
            o(u, {
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
    e.parameters.extent ? (g(), A(c, {
      key: 0,
      "no-gutters": ""
    }, {
      default: s(() => [
        o(p, {
          id: "extent",
          "model-value": e.parameters.extent,
          "first-cols": 6,
          "onUpdate:modelValue": e.setExtent
        }, null, 8, ["model-value", "onUpdate:modelValue"])
      ]),
      _: 1
      /* STABLE */
    })) : $("v-if", !0)
  ]);
}
const el = /* @__PURE__ */ J(Qi, [["render", xi]]), tl = H({
  name: "WmtsParameters",
  components: {
    VCol: oe,
    VRow: Y,
    VcsExtent: Je,
    VcsLabel: le,
    VcsSelect: Fe,
    VcsSlider: Ft,
    VcsTextField: be
  },
  props: {
    item: {
      type: Object,
      required: !0
    }
  },
  emits: ["parametersEdited"],
  setup(e, { emit: t }) {
    const a = re("vcsApp").layers.getByKey(e.item.name), r = w({
      ...a.toJSON(),
      opacity: a.opacity,
      minLevel: a.minLevel,
      maxLevel: a.maxLevel,
      tileSize: a.tileSize,
      tileMatrixPrefix: a.tileMatrixPrefix,
      numberOfLevelZeroTilesX: a.numberOfLevelZeroTilesX,
      numberOfLevelZeroTilesY: a.numberOfLevelZeroTilesY
    }), l = w(structuredClone(D(r.value)));
    return te(
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
        r.value = structuredClone(D(l.value));
      },
      async apply() {
        Object.keys(r.value).forEach((i) => {
          i in a && (i === "extent" && r.value.extent !== a.extent ? a.extent = new pe(D(r.value.extent)) : i !== "projection" && (a[i] = D(r.value[i])));
        }), a.deactivate(), await a.activate(), await a.reload(), l.value = structuredClone(D(r.value));
      }
    };
  }
});
function nl(e, t, n, a, r, l) {
  const i = m("VcsLabel"), d = m("v-col"), u = m("VcsSlider"), c = m("v-row"), p = m("VcsSelect"), f = m("VcsTextField"), v = m("VcsExtent");
  return g(), E("span", null, [
    o(c, {
      "no-gutters": "",
      class: "px-1"
    }, {
      default: s(() => [
        o(d, null, {
          default: s(() => [
            o(i, { "html-for": "opacity" }, {
              default: s(() => [
                b(
                  y(e.$t("dynamicLayer.parameters.opacity")),
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
        o(d, null, {
          default: s(() => [
            o(u, {
              id: "opacity",
              modelValue: e.parameters.opacity,
              "onUpdate:modelValue": t[0] || (t[0] = (S) => e.parameters.opacity = S),
              min: "0",
              max: "1",
              step: "0.01"
            }, {
              append: s(() => [
                b(
                  y(Math.round(e.parameters.opacity * 100)) + "%",
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
        o(d, null, {
          default: s(() => [
            o(i, { "html-for": "format" }, {
              default: s(() => [
                b(
                  y(e.$t("dynamicLayer.common.format")),
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
        o(d, null, {
          default: s(() => [
            o(p, {
              id: "format",
              modelValue: e.parameters.format,
              "onUpdate:modelValue": t[1] || (t[1] = (S) => e.parameters.format = S),
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
        o(d, null, {
          default: s(() => [
            o(i, { "html-for": "tileMatrixSetID" }, {
              default: s(() => [
                b(
                  y(e.$t("dynamicLayer.parameters.tileMatrixSetID")),
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
        o(d, null, {
          default: s(() => [
            o(p, {
              id: "tileMatrixSetID",
              modelValue: e.parameters.tileMatrixSetID,
              "onUpdate:modelValue": t[2] || (t[2] = (S) => e.parameters.tileMatrixSetID = S),
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
        o(d, null, {
          default: s(() => [
            o(i, { "html-for": "tileMatrixPrefix" }, {
              default: s(() => [
                b(
                  y(e.$t("dynamicLayer.parameters.tileMatrixPrefix")),
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
        o(d, null, {
          default: s(() => [
            o(f, {
              id: "tileMatrixPrefix",
              modelValue: e.parameters.tileMatrixPrefix,
              "onUpdate:modelValue": t[3] || (t[3] = (S) => e.parameters.tileMatrixPrefix = S)
            }, null, 8, ["modelValue"])
          ]),
          _: 1
          /* STABLE */
        })
      ]),
      _: 1
      /* STABLE */
    }),
    e.parameters.numberOfLevelZeroTilesX && e.parameters.numberOfLevelZeroTilesY ? (g(), A(c, {
      key: 0,
      "no-gutters": "",
      class: "px-1"
    }, {
      default: s(() => [
        o(d, { cols: "6" }, {
          default: s(() => [
            o(i, { "html-for": "levelZeroTilesX" }, {
              default: s(() => [
                b(
                  y(e.$t("dynamicLayer.parameters.numberLevelZeroTiles")),
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
        o(d, null, {
          default: s(() => [
            o(f, {
              id: "levelZeroTilesX",
              modelValue: e.parameters.numberOfLevelZeroTilesX,
              "onUpdate:modelValue": t[4] || (t[4] = (S) => e.parameters.numberOfLevelZeroTilesX = S),
              modelModifiers: { number: !0 },
              prefix: "X"
            }, null, 8, ["modelValue"])
          ]),
          _: 1
          /* STABLE */
        }),
        o(d, null, {
          default: s(() => [
            o(f, {
              id: "levelZeroTilesY",
              modelValue: e.parameters.numberOfLevelZeroTilesX,
              "onUpdate:modelValue": t[5] || (t[5] = (S) => e.parameters.numberOfLevelZeroTilesX = S),
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
    })) : $("v-if", !0),
    o(c, {
      "no-gutters": "",
      class: "px-1"
    }, {
      default: s(() => [
        o(d, { cols: "6" }, {
          default: s(() => [
            o(i, { "html-for": "zoomLevelMin" }, {
              default: s(() => [
                b(
                  y(e.$t("dynamicLayer.parameters.zoomLevels")),
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
        o(d, null, {
          default: s(() => [
            o(f, {
              id: "zoomLevelMin",
              modelValue: e.parameters.minLevel,
              "onUpdate:modelValue": t[6] || (t[6] = (S) => e.parameters.minLevel = S),
              modelModifiers: { number: !0 },
              prefix: "min"
            }, null, 8, ["modelValue"])
          ]),
          _: 1
          /* STABLE */
        }),
        o(d, null, {
          default: s(() => [
            o(f, {
              id: "zoomLevelMax",
              modelValue: e.parameters.maxLevel,
              "onUpdate:modelValue": t[7] || (t[7] = (S) => e.parameters.maxLevel = S),
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
        o(d, { cols: "6" }, {
          default: s(() => [
            o(i, { "html-for": "tileSizeX" }, {
              default: s(() => [
                b(
                  y(e.$t("dynamicLayer.parameters.tileSize")),
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
        o(d, null, {
          default: s(() => [
            o(f, {
              id: "tileSizeX",
              modelValue: e.parameters.tileSize[0],
              "onUpdate:modelValue": t[8] || (t[8] = (S) => e.parameters.tileSize[0] = S),
              modelModifiers: { number: !0 },
              prefix: "X",
              suffix: "pixels"
            }, null, 8, ["modelValue"])
          ]),
          _: 1
          /* STABLE */
        }),
        o(d, null, {
          default: s(() => [
            o(f, {
              id: "tileSizeY",
              modelValue: e.parameters.tileSize[1],
              "onUpdate:modelValue": t[9] || (t[9] = (S) => e.parameters.tileSize[1] = S),
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
        o(d, null, {
          default: s(() => [
            o(i, { "html-for": "style" }, {
              default: s(() => [
                b(
                  y(e.$t("dynamicLayer.parameters.style")),
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
        o(d, null, {
          default: s(() => [
            o(p, {
              id: "style",
              modelValue: e.parameters.wmtsStyle,
              "onUpdate:modelValue": t[10] || (t[10] = (S) => e.parameters.wmtsStyle = S),
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
    e.parameters.extent ? (g(), A(c, {
      key: 1,
      "no-gutters": ""
    }, {
      default: s(() => [
        o(v, {
          id: "extent",
          "model-value": e.parameters.extent,
          "first-cols": 6,
          "onUpdate:modelValue": e.setExtent
        }, null, 8, ["model-value", "onUpdate:modelValue"])
      ]),
      _: 1
      /* STABLE */
    })) : $("v-if", !0)
  ]);
}
const al = /* @__PURE__ */ J(tl, [["render", nl]]), rl = H({
  name: "PointCloudParameters",
  components: {
    VCol: oe,
    VRow: Y,
    VcsLabel: le,
    VcsTextField: be
  },
  props: {
    item: {
      type: Object,
      required: !0
    }
  },
  emits: ["parametersEdited"],
  setup(e, { emit: t }) {
    const a = re("vcsApp").layers.getByKey(e.item.name), r = w({
      pointSize: a.pointSize,
      screenSpaceError: a.screenSpaceError
    }), l = w(structuredClone(D(r.value)));
    return te(
      r,
      () => {
        t("parametersEdited");
      },
      { deep: !0 }
    ), {
      parameters: r,
      cancel() {
        r.value = structuredClone(D(l.value));
      },
      async apply() {
        a.screenSpaceError !== r.value.screenSpaceError && (a.screenSpaceError = r.value.screenSpaceError), a.pointSize !== r.value.pointSize && (a.pointSize = r.value.pointSize), await a.reload(), l.value = structuredClone(D(r.value));
      }
    };
  }
});
function ol(e, t, n, a, r, l) {
  const i = m("VcsLabel"), d = m("v-col"), u = m("VcsTextField"), c = m("v-row");
  return g(), E("span", null, [
    o(c, {
      "no-gutters": "",
      class: "px-1"
    }, {
      default: s(() => [
        o(d, null, {
          default: s(() => [
            o(i, { "html-for": "pointSize" }, {
              default: s(() => [
                b(
                  y(e.$t("dynamicLayer.parameters.pointSize")),
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
        o(d, null, {
          default: s(() => [
            o(u, {
              id: "pointSize",
              modelValue: e.parameters.pointSize,
              "onUpdate:modelValue": t[0] || (t[0] = (p) => e.parameters.pointSize = p),
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
        o(d, null, {
          default: s(() => [
            o(i, { "html-for": "screenSpaceError" }, {
              default: s(() => [
                b(
                  y(e.$t("dynamicLayer.parameters.screenSpaceError")),
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
        o(d, null, {
          default: s(() => [
            o(u, {
              id: "screenSpaceError",
              modelValue: e.parameters.screenSpaceError,
              "onUpdate:modelValue": t[1] || (t[1] = (p) => e.parameters.screenSpaceError = p),
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
const sl = /* @__PURE__ */ J(rl, [["render", ol]]), il = H({
  name: "CzmlParameters",
  components: {
    VCol: oe,
    VRow: Y,
    VcsCheckbox: ct,
    VcsLabel: le
  },
  props: {
    item: {
      type: Object,
      required: !0
    }
  },
  emits: ["parametersEdited"],
  setup(e, { emit: t }) {
    const a = re("vcsApp").layers.getByKey(e.item.name), r = w({
      ...a.toJSON(),
      featureInfo: !!a.properties.featureInfo
    }), l = w(structuredClone(D(r.value)));
    return te(
      r,
      () => {
        t("parametersEdited");
      },
      { deep: !0 }
    ), {
      parameters: r,
      cancel() {
        r.value = structuredClone(D(l.value));
      },
      apply() {
        r.value.featureInfo ? a.properties.featureInfo = k : delete a.properties.featureInfo, l.value = structuredClone(D(r.value));
      }
    };
  }
});
function ll(e, t, n, a, r, l) {
  const i = m("VcsLabel"), d = m("v-col"), u = m("VcsCheckbox"), c = m("v-row");
  return g(), E("span", null, [
    o(c, {
      "no-gutters": "",
      class: "px-1"
    }, {
      default: s(() => [
        o(d, null, {
          default: s(() => [
            o(i, { "html-for": "featureInfo" }, {
              default: s(() => [
                b(
                  y(e.$t("dynamicLayer.parameters.featureInfo")),
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
        o(d, null, {
          default: s(() => [
            o(u, {
              id: "featureInfo",
              modelValue: e.parameters.featureInfo,
              "onUpdate:modelValue": t[0] || (t[0] = (p) => e.parameters.featureInfo = p),
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
const dl = /* @__PURE__ */ J(il, [["render", ll]]), ul = H({
  name: "WebdataParameters",
  components: {
    VCol: oe,
    VRow: Y,
    VcsFormSection: Ye,
    VcsLabel: le,
    VcsTextField: be,
    CesiumTilesetParameters: Ki,
    CzmlParameters: dl,
    GeoJSONParameters: Hi,
    PointCloudParameters: sl,
    TerrainParameters: Xi,
    WfsParameters: el,
    WmsParameters: zi,
    WmtsParameters: al
  },
  props: {
    item: {
      type: Object,
      required: !0
    }
  },
  emits: ["rename"],
  setup(e, { emit: t }) {
    const n = w(!0), a = w(!1), r = w(!1), l = ne(
      () => a.value || r.value
    ), i = w(), d = w(e.item.title);
    return {
      show: n,
      hasUpdate: l,
      itemParameters: i,
      parametersHaveUpdate: r,
      title: d,
      titleHasUpdate: a,
      headerActions: ne(
        () => l.value ? [
          B({
            icon: "mdi-close",
            tooltip: "dynamicLayer.actions.cancel",
            disabled: !l.value,
            callback: async () => {
              d.value = e.item.title, i.value.cancel(), await Kn(), a.value = !1, r.value = !1;
            }
          }),
          B({
            icon: "mdi-content-save-edit-outline",
            tooltip: "dynamicLayer.actions.apply",
            disabled: !l.value,
            callback: () => {
              a.value && (t("rename", d.value), a.value = !1), r.value && (i.value.apply(), r.value = !1);
            }
          })
        ] : []
      ),
      getComponentName() {
        switch (e.item.type) {
          case L.CESIUM_TILESET:
            return "CesiumTilesetParameters";
          case L.CZML:
            return "CzmlParameters";
          case L.GEOJSON:
            return "GeoJSONParameters";
          case L.POINTCLOUD:
            return "PointCloudParameters";
          case L.TERRAIN:
            return "TerrainParameters";
          case L.WFS:
            return "WfsParameters";
          case L.WMS:
            return "WmsParameters";
          case L.WMTS:
            return "WmtsParameters";
          default:
            return "";
        }
      }
    };
  }
}), cl = { class: "h-100 overflow-y-auto" };
function ml(e, t, n, a, r, l) {
  const i = m("VcsLabel"), d = m("v-col"), u = m("VcsTextField"), c = m("v-row"), p = m("VcsFormSection");
  return g(), A(p, {
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
      U("div", cl, [
        o(c, {
          "no-gutters": "",
          class: "px-1"
        }, {
          default: s(() => [
            o(d, null, {
              default: s(() => [
                o(i, { "html-for": "title" }, {
                  default: s(() => [
                    b(
                      y(e.$t("dynamicLayer.common.title")),
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
            o(d, null, {
              default: s(() => [
                o(u, {
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
        (g(), A(qn(e.getComponentName()), {
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
const pl = /* @__PURE__ */ J(ul, [["render", ml], ["__scopeId", "data-v-903cf694"]]), fl = H({
  name: "AddedData",
  components: {
    VCol: oe,
    VDivider: Xe,
    VRow: Y,
    VcsFormButton: We,
    VcsGroupedList: Tn,
    WebdataParameters: pl,
    WebdataInformations: yn
  },
  setup() {
    const e = re("vcsApp"), t = e.plugins.getByKey(k), { addedSelected: n, addedToMap: a } = t, r = ne(
      () => a.value.map(
        (u) => B({
          name: u.name,
          title: u.title,
          group: u.type
        })
      )
    );
    te(r, () => {
      r.value.length === 0 && (t.activeTab.value = t.config.defaultTab);
    });
    const l = w([
      r.value.find(
        (u) => {
          var c;
          return u.name === ((c = n.value) == null ? void 0 : c.name);
        }
      )
    ]);
    te(l, (u) => {
      (u == null ? void 0 : u.length) === 1 ? n.value = a.value.find(
        (c) => {
          var p;
          return c.name === ((p = u[0]) == null ? void 0 : p.name);
        }
      ) : n.value = void 0;
    });
    function i() {
      n.value && (l.value = [
        r.value.find(
          (u) => u.name === n.value.name
        )
      ]);
    }
    return i(), te(t.activeTab, (u) => {
      u === G.ADDED && i();
    }), {
      groups: ne(() => [...new Set(a.value.map((u) => u.type))].map(
        (u) => ({
          name: u,
          title: `dynamicLayer.webdata.type.${u}`,
          headerActions: [
            B({
              name: "dynamicLayer.added.actions.selectAll",
              callback: () => {
                l.value = r.value.filter(
                  (c) => c.group === String(u)
                );
              }
            }),
            B({
              name: "dynamicLayer.added.actions.clearSelection",
              disabled: ne(() => !l.value.length),
              callback: () => {
                l.value = [];
              }
            }),
            B({
              name: "dynamicLayer.added.actions.removeSelection",
              title: "dynamicLayer.added.actions.removeSelectionTitle",
              disabled: ne(() => !l.value.length),
              callback: () => {
                a.value.filter(
                  (c) => l.value.some((p) => (p == null ? void 0 : p.name) === c.name)
                ).forEach((c) => {
                  Oe(e, c);
                }), l.value = [];
              }
            })
          ]
        })
      )),
      localItems: r,
      addedSelected: n,
      localSelected: l,
      removeLayer: Oe.bind(null, e),
      rename(u) {
        const c = n.value.name, p = e.layers.getByKey(c);
        p.properties.title = u;
        const f = Qe(c), v = e.contentTree.getByKey(f);
        v.title = u, n.value.title = u;
      }
    };
  }
}), yl = {
  key: 0,
  class: "d-flex w-100 py-1 justify-center font-weight-bold"
}, gl = { class: "pa-2" };
function vl(e, t, n, a, r, l) {
  const i = m("VcsGroupedList"), d = m("v-col"), u = m("v-divider"), c = m("WebdataInformations"), p = m("WebdataParameters"), f = m("v-row"), v = m("VDivider"), S = m("VcsFormButton");
  return g(), A(f, {
    "no-gutters": "",
    class: "h-100"
  }, {
    default: s(() => [
      o(d, {
        cols: "4",
        class: "h-100"
      }, {
        default: s(() => [
          o(i, {
            modelValue: e.localSelected,
            "onUpdate:modelValue": t[0] || (t[0] = (T) => e.localSelected = T),
            class: "list h-100",
            items: e.localItems,
            groups: e.groups,
            searchable: "",
            selectable: "",
            "open-all": ""
          }, null, 8, ["modelValue", "items", "groups"])
        ]),
        _: 1
        /* STABLE */
      }),
      o(u, {
        vertical: "",
        style: { "z-index": "1" }
      }),
      o(d, {
        cols: "8",
        class: "h-100"
      }, {
        default: s(() => [
          e.addedSelected ? (g(), A(f, {
            key: 1,
            "no-gutters": "",
            class: "d-flex w-100 h-100"
          }, {
            default: s(() => [
              o(f, {
                "no-gutters": "",
                class: "d-block w-100 overflow-y-auto button-margin"
              }, {
                default: s(() => [
                  o(c, {
                    item: e.addedSelected,
                    title: e.addedSelected.name,
                    subtitle: e.addedSelected.url,
                    style: { height: "min-content !important" }
                  }, null, 8, ["item", "title", "subtitle"]),
                  (g(), A(p, {
                    key: e.addedSelected.name,
                    item: e.addedSelected,
                    style: { height: "min-content !important" },
                    onRename: e.rename
                  }, null, 8, ["item", "onRename"]))
                ]),
                _: 1
                /* STABLE */
              }),
              o(f, {
                "no-gutters": "",
                class: "w-100 justify-end"
              }, {
                default: s(() => [
                  o(v),
                  U("span", gl, [
                    o(S, {
                      onClick: t[1] || (t[1] = (T) => e.removeLayer(e.addedSelected))
                    }, {
                      default: s(() => [
                        b(
                          y(e.$t("dynamicLayer.actions.layer.remove")),
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
          })) : (g(), E(
            "span",
            yl,
            y(e.$t("dynamicLayer.added.selectToEdit")),
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
  });
}
const hl = /* @__PURE__ */ J(fl, [["render", vl], ["__scopeId", "data-v-ff9fe310"]]), dt = "dynamic_layer_window_id", bl = H({
  name: "DynamicLayer",
  components: {
    VContainer: mt,
    VDivider: Xe,
    VSheet: sa,
    VTab: oa,
    VTabs: ra,
    VTabsWindow: aa,
    VTabsWindowItem: na,
    VcsActionButtonList: Ut,
    VcsBadge: Ln,
    AddedData: hl,
    Catalogues: Ui,
    Webdata: Fs
  },
  setup() {
    const e = re("vcsApp"), t = e.plugins.getByKey(k), { activeTab: n, addedToMap: a, catalogues: r, config: l } = t, i = ne(() => [
      ...Object.values(G).filter(
        (c) => l.enabledTabs.includes(c)
      ),
      ...a.value.length ? [G.ADDED] : []
    ]), d = ne(() => [
      B({
        name: "dynamicLayer.actions.overview",
        callback: () => {
          r.selected.value = void 0;
        }
      }),
      ...r.added.value.map((c) => B({
        name: c.title,
        title: `${c.data.count.toLocaleString(e.locale)} ${e.vueI18n.t("dynamicLayer.catalogues.datasets")} @ ${new URL(c.url).host}`,
        active: ne(() => {
          var p;
          return ((p = r.selected.value) == null ? void 0 : p.url) === c.url;
        }),
        callback: () => {
          r.selected.value = c;
        }
      }))
    ]), u = w(!1);
    return te(
      () => a.value.length,
      (c, p) => {
        u.value = c > p || u.value;
      }
    ), te(n, () => {
      n.value === G.ADDED && (u.value = !1);
    }), {
      CategoryType: G,
      activeTab: n,
      enabledTabs: i,
      catalogues: r,
      cataloguesActions: d,
      addedHasUpdate: u,
      switchCategory(c) {
        n.value === G.CATALOGUES && c === G.CATALOGUES && r.added.value.length > 1 && (t.catalogues.selected.value = void 0), n.value = c;
      }
    };
  }
});
function Sl(e, t, n, a, r, l) {
  const i = m("VcsBadge"), d = m("VcsActionButtonList"), u = m("v-tab"), c = m("v-tabs"), p = m("v-divider"), f = m("Webdata"), v = m("v-tabs-window-item"), S = m("Catalogues"), T = m("AddedData"), N = m("v-tabs-window"), M = m("v-container"), F = m("v-sheet");
  return g(), A(F, null, {
    default: s(() => [
      o(c, {
        color: "primary",
        height: "32",
        "model-value": e.activeTab
      }, {
        default: s(() => [
          (g(!0), E(
            _e,
            null,
            Be(e.enabledTabs, (O) => (g(), E("span", { key: O }, [
              o(u, {
                value: O,
                text: e.$t(`dynamicLayer.${O}.title`),
                onClick: (j) => e.switchCategory(O)
              }, {
                append: s(() => [
                  O === e.CategoryType.ADDED && e.addedHasUpdate ? (g(), A(i, {
                    key: 0,
                    class: "position-absolute"
                  })) : O === e.CategoryType.CATALOGUES && e.activeTab === e.CategoryType.CATALOGUES && e.catalogues.added.value.length > 1 && e.catalogues.selected.value ? (g(), A(d, {
                    key: 1,
                    actions: e.cataloguesActions,
                    "overflow-icon": "mdi-chevron-down",
                    "overflow-count": 0
                  }, null, 8, ["actions"])) : $("v-if", !0)
                ]),
                _: 2
                /* DYNAMIC */
              }, 1032, ["value", "text", "onClick"])
            ]))),
            128
            /* KEYED_FRAGMENT */
          ))
        ]),
        _: 1
        /* STABLE */
      }, 8, ["model-value"]),
      o(p),
      o(M, { class: "pa-0 dl-content" }, {
        default: s(() => [
          o(N, {
            modelValue: e.activeTab,
            "onUpdate:modelValue": t[0] || (t[0] = (O) => e.activeTab = O),
            class: "h-100"
          }, {
            default: s(() => [
              o(v, {
                value: e.CategoryType.WEBDATA,
                class: "h-100"
              }, {
                default: s(() => [
                  o(f)
                ]),
                _: 1
                /* STABLE */
              }, 8, ["value"]),
              o(v, {
                value: e.CategoryType.CATALOGUES,
                class: "h-100"
              }, {
                default: s(() => [
                  o(S)
                ]),
                _: 1
                /* STABLE */
              }, 8, ["value"]),
              o(v, {
                value: e.CategoryType.ADDED,
                class: "h-100"
              }, {
                default: s(() => [
                  o(T)
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
const wl = /* @__PURE__ */ J(bl, [["render", Sl], ["__scopeId", "data-v-9e0434ba"]]);
function gn() {
  return {
    defaultTab: G.WEBDATA,
    enabledTabs: [G.WEBDATA, G.CATALOGUES],
    webdata: {
      defaultType: L.WMS,
      defaultUrl: ""
    },
    catalogues: {
      itemsPerPage: 14,
      presets: []
    }
  };
}
const Tl = H({
  name: "DynamicLayerConfigEditor",
  components: {
    VCard: ze,
    VCol: oe,
    VContainer: mt,
    VDialog: Kt,
    VForm: ia,
    VRow: Y,
    AbstractConfigEditor: Cn,
    VcsFormButton: We,
    VcsFormSection: Ye,
    VcsLabel: le,
    VcsList: Nt,
    VcsSelect: Fe,
    VcsTextArea: An,
    VcsTextField: be
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
    const t = gn(), n = e.getConfig(), a = w({ ...t, ...n }), r = w(
      Object.values(G).filter((f) => f !== G.ADDED).map((f) => ({
        title: `dynamicLayer.${f}.title`,
        value: f
      }))
    ), l = w(it(G.WEBDATA)), i = w(it(G.CATALOGUES)), d = w([]), u = w({
      url: "",
      type: Ie.PIVEAU,
      title: "",
      subtitle: "",
      logo: "",
      description: ""
    }), c = w(!1);
    function p() {
      d.value = [], a.value.catalogues.presets.forEach((f) => {
        d.value.push({
          title: f.title ?? f.url,
          actions: [
            B({
              name: "dynamicLayer.actions.edit",
              icon: "mdi-pencil",
              callback: () => {
                c.value = !0, u.value = f;
              }
            }),
            B({
              name: "dynamicLayer.actions.remove",
              icon: "mdi-delete",
              callback: () => {
                const v = a.value.catalogues.presets.findIndex(
                  (T) => T.url === f.url
                );
                a.value.catalogues.presets.splice(v, 1);
                const S = d.value.findIndex(
                  (T) => T.title === (f.title ?? f.url)
                );
                d.value.splice(S, 1);
              }
            })
          ]
        });
      });
    }
    return p(), {
      CategoryType: G,
      localConfig: a,
      tabs: r,
      webdataTypes: l,
      cataloguesTypes: i,
      catalogues: d,
      menuCatalogueItem: u,
      dialog: c,
      titleAction: w([
        {
          name: "dynamicLayer.config.addPreset",
          icon: "$vcsPlus",
          callback() {
            c.value = !0, u.value = {
              url: "",
              type: Ie.PIVEAU,
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
      checkDefaultTab() {
        a.value.enabledTabs.includes(
          a.value.defaultTab
        ) || (a.value.defaultTab = a.value.enabledTabs[0]);
      },
      addOrUpdate() {
        const f = a.value.catalogues.presets.findIndex(
          (v) => v.url === u.value.url
        );
        f !== -1 ? a.value.catalogues.presets[f] = D(
          u.value
        ) : a.value.catalogues.presets.push(
          D(u.value)
        ), c.value = !1, p();
      },
      apply() {
        const f = structuredClone(
          D(a.value)
        );
        f.enabledTabs.map(D), f.webdata = structuredClone(D(f.webdata)), f.catalogues = {
          itemsPerPage: D(f.catalogues.itemsPerPage),
          presets: f.catalogues.presets.map(
            (v) => structuredClone(D(v))
          )
        }, e.setConfig(f);
      }
    };
  }
}), Ll = { key: 0 }, Al = { key: 0 }, Cl = { class: "d-flex justify-end gc-2 pt-1" };
function El(e, t, n, a, r, l) {
  const i = m("VcsLabel"), d = m("v-col"), u = m("VcsSelect"), c = m("v-row"), p = m("VcsFormSection"), f = m("VcsTextField"), v = m("VcsList"), S = m("VcsTextArea"), T = m("VcsFormButton"), N = m("v-form"), M = m("v-card"), F = m("v-dialog"), O = m("v-container"), j = m("AbstractConfigEditor");
  return e.localConfig ? (g(), A(j, Zn({ key: 0 }, { ...e.$attrs, ...e.$props }, { onSubmit: e.apply }), {
    default: s(() => [
      o(O, { class: "pa-0" }, {
        default: s(() => [
          o(p, {
            heading: e.$t("dynamicLayer.config.general"),
            expandable: "",
            "start-open": "",
            disabled: !e.localConfig.enabledTabs.includes(e.CategoryType.WEBDATA)
          }, {
            default: s(() => [
              o(c, { "no-gutters": "" }, {
                default: s(() => [
                  o(d, null, {
                    default: s(() => [
                      o(i, { "html-for": "enabledTabs" }, {
                        default: s(() => [
                          b(
                            y(e.$t("dynamicLayer.config.enabledTabs")),
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
                  o(d, null, {
                    default: s(() => [
                      o(u, {
                        id: "enabledTabs",
                        modelValue: e.localConfig.enabledTabs,
                        "onUpdate:modelValue": [
                          t[0] || (t[0] = (C) => e.localConfig.enabledTabs = C),
                          e.checkDefaultTab
                        ],
                        multiple: "",
                        items: e.tabs,
                        rules: [(C) => !!C.length]
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
                  o(d, null, {
                    default: s(() => [
                      o(i, { "html-for": "defaultTab" }, {
                        default: s(() => [
                          b(
                            y(e.$t("dynamicLayer.config.defaultTab")),
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
                  o(d, null, {
                    default: s(() => [
                      o(u, {
                        id: "defaultTab",
                        modelValue: e.localConfig.defaultTab,
                        "onUpdate:modelValue": t[1] || (t[1] = (C) => e.localConfig.defaultTab = C),
                        items: e.localConfig.enabledTabs,
                        actions: e.titleAction,
                        "item-text": (C) => e.$t(`dynamicLayer.${C}.title`)
                      }, null, 8, ["modelValue", "items", "actions", "item-text"])
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
          o(p, {
            heading: e.$t("dynamicLayer.webdata.title"),
            expandable: e.localConfig.enabledTabs.includes(e.CategoryType.WEBDATA),
            "start-open": "",
            disabled: !e.localConfig.enabledTabs.includes(e.CategoryType.WEBDATA)
          }, {
            default: s(() => [
              e.localConfig.enabledTabs.includes(e.CategoryType.WEBDATA) ? (g(), E("span", Ll, [
                o(c, { "no-gutters": "" }, {
                  default: s(() => [
                    o(d, null, {
                      default: s(() => [
                        o(i, { "html-for": "webdataType" }, {
                          default: s(() => [
                            b(
                              y(e.$t("dynamicLayer.config.defaultType")),
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
                    o(d, null, {
                      default: s(() => [
                        o(u, {
                          id: "webdataType",
                          modelValue: e.localConfig.webdata.defaultType,
                          "onUpdate:modelValue": t[2] || (t[2] = (C) => e.localConfig.webdata.defaultType = C),
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
                    o(d, null, {
                      default: s(() => [
                        o(i, { "html-for": "webdataUrl" }, {
                          default: s(() => [
                            b(
                              y(e.$t("dynamicLayer.config.defaultUrl")),
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
                    o(d, null, {
                      default: s(() => [
                        o(f, {
                          id: "webdataUrl",
                          modelValue: e.localConfig.webdata.defaultUrl,
                          "onUpdate:modelValue": t[3] || (t[3] = (C) => e.localConfig.webdata.defaultUrl = C)
                        }, null, 8, ["modelValue"])
                      ]),
                      _: 1
                      /* STABLE */
                    })
                  ]),
                  _: 1
                  /* STABLE */
                })
              ])) : $("v-if", !0)
            ]),
            _: 1
            /* STABLE */
          }, 8, ["heading", "expandable", "disabled"]),
          o(p, {
            heading: e.$t("dynamicLayer.catalogues.title"),
            expandable: e.localConfig.enabledTabs.includes(e.CategoryType.CATALOGUES),
            "start-open": "",
            disabled: !e.localConfig.enabledTabs.includes(e.CategoryType.CATALOGUES)
          }, {
            default: s(() => [
              e.localConfig.enabledTabs.includes(e.CategoryType.CATALOGUES) ? (g(), E("span", Al, [
                o(c, { "no-gutters": "" }, {
                  default: s(() => [
                    o(d, null, {
                      default: s(() => [
                        o(i, { "html-for": "cataloguesItemsPerPage" }, {
                          default: s(() => [
                            b(
                              y(e.$t("dynamicLayer.config.itemsPerPage")),
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
                    o(d, null, {
                      default: s(() => [
                        o(f, {
                          id: "cataloguesItemsPerPage",
                          modelValue: e.localConfig.catalogues.itemsPerPage,
                          "onUpdate:modelValue": t[4] || (t[4] = (C) => e.localConfig.catalogues.itemsPerPage = C),
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
                    o(v, {
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
                  "onUpdate:modelValue": t[13] || (t[13] = (C) => e.dialog = C)
                }, {
                  default: s(() => [
                    o(M, { class: "pa-2" }, {
                      default: s(() => [
                        o(N, {
                          onSubmit: Hn(e.addOrUpdate, ["prevent"])
                        }, {
                          default: s(() => [
                            o(c, { "no-gutters": "" }, {
                              default: s(() => [
                                o(d, null, {
                                  default: s(() => [
                                    o(i, {
                                      required: "",
                                      "html-for": "title"
                                    }, {
                                      default: s(() => [
                                        b(
                                          y(e.$t("dynamicLayer.common.title")),
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
                                o(d, null, {
                                  default: s(() => [
                                    o(f, {
                                      id: "title",
                                      modelValue: e.menuCatalogueItem.title,
                                      "onUpdate:modelValue": t[5] || (t[5] = (C) => e.menuCatalogueItem.title = C)
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
                                o(d, null, {
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
                                o(d, null, {
                                  default: s(() => [
                                    o(f, {
                                      id: "url",
                                      modelValue: e.menuCatalogueItem.url,
                                      "onUpdate:modelValue": t[6] || (t[6] = (C) => e.menuCatalogueItem.url = C),
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
                                o(d, null, {
                                  default: s(() => [
                                    o(i, {
                                      required: "",
                                      "html-for": "type"
                                    }, {
                                      default: s(() => [
                                        b(
                                          y(e.$t("dynamicLayer.common.type")),
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
                                o(d, null, {
                                  default: s(() => [
                                    o(u, {
                                      id: "type",
                                      modelValue: e.menuCatalogueItem.type,
                                      "onUpdate:modelValue": t[7] || (t[7] = (C) => e.menuCatalogueItem.type = C),
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
                                o(d, null, {
                                  default: s(() => [
                                    o(i, { "html-for": "subtitle" }, {
                                      default: s(() => [
                                        b(
                                          y(e.$t("dynamicLayer.config.subtitle")),
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
                                o(d, null, {
                                  default: s(() => [
                                    o(f, {
                                      id: "subtitle",
                                      modelValue: e.menuCatalogueItem.subtitle,
                                      "onUpdate:modelValue": t[8] || (t[8] = (C) => e.menuCatalogueItem.subtitle = C)
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
                                o(d, null, {
                                  default: s(() => [
                                    o(i, { "html-for": "logo" }, {
                                      default: s(() => [
                                        b(
                                          y(e.$t("dynamicLayer.config.logo")),
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
                                o(d, null, {
                                  default: s(() => [
                                    o(f, {
                                      id: "logo",
                                      modelValue: e.menuCatalogueItem.logo,
                                      "onUpdate:modelValue": t[9] || (t[9] = (C) => e.menuCatalogueItem.logo = C)
                                    }, null, 8, ["modelValue"])
                                  ]),
                                  _: 1
                                  /* STABLE */
                                })
                              ]),
                              _: 1
                              /* STABLE */
                            }),
                            e.menuCatalogueItem.type === "geonetwork" || e.menuCatalogueItem.type === "piveau" ? (g(), A(c, {
                              key: 0,
                              "no-gutters": ""
                            }, {
                              default: s(() => [
                                o(d, null, {
                                  default: s(() => [
                                    o(i, { "html-for": "filter" }, {
                                      default: s(() => [
                                        b(
                                          y(e.$t("dynamicLayer.config.filter")),
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
                                o(d, null, {
                                  default: s(() => [
                                    o(f, {
                                      id: "filter",
                                      modelValue: e.menuCatalogueItem.filter,
                                      "onUpdate:modelValue": t[10] || (t[10] = (C) => e.menuCatalogueItem.filter = C)
                                    }, null, 8, ["modelValue"])
                                  ]),
                                  _: 1
                                  /* STABLE */
                                })
                              ]),
                              _: 1
                              /* STABLE */
                            })) : $("v-if", !0),
                            o(c, { "no-gutters": "" }, {
                              default: s(() => [
                                o(S, {
                                  modelValue: e.menuCatalogueItem.description,
                                  "onUpdate:modelValue": t[11] || (t[11] = (C) => e.menuCatalogueItem.description = C),
                                  placeholder: `${e.$t("dynamicLayer.common.description")} (markdown)`
                                }, null, 8, ["modelValue", "placeholder"])
                              ]),
                              _: 1
                              /* STABLE */
                            }),
                            U("span", Cl, [
                              o(T, {
                                variant: "filled",
                                type: "submit",
                                disabled: !e.menuCatalogueItem.title || !e.menuCatalogueItem.url
                              }, {
                                default: s(() => [
                                  b(
                                    y(e.$t("dynamicLayer.actions.apply")),
                                    1
                                    /* TEXT */
                                  )
                                ]),
                                _: 1
                                /* STABLE */
                              }, 8, ["disabled"]),
                              o(T, {
                                onClick: t[12] || (t[12] = (C) => e.dialog = !1)
                              }, {
                                default: s(() => [
                                  b(
                                    y(e.$t("dynamicLayer.actions.cancel")),
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
              ])) : $("v-if", !0)
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
  }, 16, ["onSubmit"])) : $("v-if", !0);
}
const _l = /* @__PURE__ */ J(Tl, [["render", El], ["__scopeId", "data-v-a6121c69"]]);
function Dl(e) {
  let t, n;
  const a = [], r = B({}), i = _a({ mergeArrays: !1 })(gn(), e), d = w([]), u = w(), c = w(
    i.enabledTabs.includes(i.defaultTab) ? i.defaultTab : i.enabledTabs[0]
  ), p = {
    added: w([]),
    selected: w(),
    selectedDataset: w(),
    expandedDistributionIds: w([])
  }, f = {
    added: w([]),
    selected: w(),
    opened: w([])
  };
  return {
    get name() {
      return k;
    },
    get version() {
      return Da;
    },
    get mapVersion() {
      return Oa;
    },
    get config() {
      return i;
    },
    state: r,
    activeTab: c,
    addedToMap: d,
    addedSelected: u,
    catalogues: p,
    webdata: f,
    get layerIndex() {
      if (!n) {
        const v = [...t.layers].map((S) => S.zIndex).filter((S) => S < zn);
        n = Math.max(0, ...v);
      }
      return n += 1, n;
    },
    initialize(v, S) {
      if (t = v, !c.value)
        throw new Error(
          `${k} ${t.vueI18n.t("dynamicLayer.error.noActiveCategory")}`
        );
      const { action: T, destroy: N } = En(
        {
          name: "dynamicLayer.title",
          icon: "mdi-database-search-outline",
          title: "dynamicLayer.title"
        },
        {
          id: dt,
          component: wl,
          state: {
            infoUrlCallback: t.getHelpUrlCallback(
              "/tools/dynamicLayerTool.html"
            ),
            headerTitle: "dynamicLayer.title",
            headerIcon: "mdi-database-search-outline"
          },
          slot: _n.DETACHED,
          position: {
            left: "20%",
            right: "20%",
            top: "10%",
            height: 600,
            minWidth: 800
          }
        },
        v.windowManager,
        k
      );
      return a.push(N), v.navbarManager.add(
        { id: k, action: T },
        k,
        $n.CONTENT
      ), v.contentTree.add(
        new Vn(
          {
            name: k,
            title: "dynamicLayer.contentTreeTitle",
            initOpen: !0
          },
          v
        )
      ), v.featureInfo.add(new Rn({ name: k })), i.enabledTabs.includes(G.CATALOGUES) && mr(t, i.catalogues.presets, S == null ? void 0 : S.entry), S && Object.entries(S).forEach(([M, F]) => {
        if (M === "entry")
          r.entry = F, Pn(T);
        else {
          const { type: O, layerNames: j } = F;
          ht(t, M, O).then((C) => {
            C.children.forEach((X) => {
              Ge((_) => {
                j.includes(_.name) && De(t, _).catch((K) => {
                  ge(k).error(String(K));
                });
              }, X);
            }), f.added.value.push(C);
          }).catch((C) => {
            ge(k).error(String(C));
          });
        }
      }), Promise.resolve();
    },
    getState() {
      return r;
    },
    i18n: { en: Ua, de: Ma },
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
          component: _l,
          title: "dynamicLayer.configEditorTitle",
          infoUrlCallback: t.getHelpUrlCallback(
            "/components/plugins/dynamicLayerConfig.html",
            "app-configurator"
          )
        }
      ];
    },
    destroy() {
      a.forEach((T) => {
        T();
      }), t.navbarManager.remove(k);
      const v = t.contentTree.getByKey(k);
      v && t.contentTree.remove(v);
      const S = t.featureInfo.getByKey(k);
      S && t.featureInfo.remove(S);
    }
  };
}
export {
  Dl as default
};
