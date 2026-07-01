
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
} await loadCss('data:text/css;base64,LnRpdGxlLXBhcmVudFtkYXRhLXYtMjA3MTc5NGFde292ZXJmbG93OmhpZGRlbjt0ZXh0LW92ZXJmbG93OmVsbGlwc2lzO2N1cnNvcjpwb2ludGVyfS5hY3RpdmVbZGF0YS12LTIwNzE3OTRhXXtjb2xvcjpyZ2IodmFyKC0tdi10aGVtZS1wcmltYXJ5KSl9LnRpdGxlW2RhdGEtdi00M2E3NGY2YV17Zm9udC13ZWlnaHQ6NzAwO3RleHQtZGVjb3JhdGlvbjp1bmRlcmxpbmU7ZGlzcGxheTpmbGV4O2p1c3RpZnktY29udGVudDpjZW50ZXJ9LnN1YnRpdGxlW2RhdGEtdi00M2E3NGY2YV17Zm9udC1zdHlsZTppdGFsaWM7ZGlzcGxheTpmbGV4O2p1c3RpZnktY29udGVudDpjZW50ZXI7cGFkZGluZy1ib3R0b206MXB4O3doaXRlLXNwYWNlOm5vd3JhcCFpbXBvcnRhbnQ7b3ZlcmZsb3c6aGlkZGVuIWltcG9ydGFudDt0ZXh0LW92ZXJmbG93OmVsbGlwc2lzIWltcG9ydGFudH0uc2VjdGlvbltkYXRhLXYtNDNhNzRmNmFdIC5zZWN0aW9uLWNvbnRlbnR7aGVpZ2h0OmNhbGMoMTAwJSAtICh2YXIoLS12LXZjcy1mb250LXNpemUpICogMiArIDYycHgpKSFpbXBvcnRhbnR9LnRyZWV2aWV3W2RhdGEtdi1mODAyMGExY10gLnZjcy1hY3Rpb24tYnV0dG9uLWxpc3R7cGFkZGluZy1yaWdodDo4cHghaW1wb3J0YW50fS50cmVldmlld1tkYXRhLXYtZjgwMjBhMWNdIC5wcmVwZW5kOm5vdCgubGV2ZWwtMCAucHJlcGVuZCl7ZGlzcGxheTpub25lIWltcG9ydGFudH0udHJlZXZpZXdbZGF0YS12LWY4MDIwYTFjXSAudHJlZW5vZGU6aGFzKC5hY3RpdmUpPmJ1dHRvbj5zcGFuPml7Y29sb3I6cmdiKHZhcigtLXYtdGhlbWUtcHJpbWFyeSkpIWltcG9ydGFudH0uZml4ZWQtYm90dG9tW2RhdGEtdi1mODAyMGExY117cG9zaXRpb246c3RpY2t5IWltcG9ydGFudDtmbGV4LWdyb3c6MDtib3R0b206MDttYXJnaW4tdG9wOmF1dG87ei1pbmRleDoxO2JhY2tncm91bmQtY29sb3I6cmdiKHZhcigtLXYtdGhlbWUtc3VyZmFjZSkpfS5idXR0b24tbWFyZ2luW2RhdGEtdi1mODAyMGExY117aGVpZ2h0OmNhbGMoMTAwJSAtICh2YXIoLS12LXZjcy1mb250LXNpemUpICogMiArIDE2cHgpKSFpbXBvcnRhbnR9W2RhdGEtdi0wMDI3ZTUwOV0gLnYtbGlzdHt3aWR0aDoxMDAlO2hlaWdodDo0NDhweH1bZGF0YS12LTAwMjdlNTA5XSAudi1wYWdpbmF0aW9uX19saXN0IC52LXBhZ2luYXRpb25fX3ByZXZ7cG9zaXRpb246YWJzb2x1dGU7bGVmdDowfVtkYXRhLXYtMDAyN2U1MDldIC52LXBhZ2luYXRpb25fX2xpc3QgLnYtcGFnaW5hdGlvbl9faXRlbT5idXR0b257d2lkdGg6Zml0LWNvbnRlbnQ7bWluLXdpZHRoOjI4cHh9W2RhdGEtdi0wMDI3ZTUwOV0gLnYtcGFnaW5hdGlvbl9fbGlzdCAudi1wYWdpbmF0aW9uX19uZXh0e3Bvc2l0aW9uOmFic29sdXRlO3JpZ2h0OjU4LjUlfS50cmVldmlld1tkYXRhLXYtNmEzNWMyMmJdIC52Y3MtYWN0aW9uLWJ1dHRvbi1saXN0e3BhZGRpbmctcmlnaHQ6OHB4IWltcG9ydGFudH0udHJlZXZpZXdbZGF0YS12LTZhMzVjMjJiXSAudi1zcGFjZXJ7ZGlzcGxheTpub25lIWltcG9ydGFudH1bZGF0YS12LWI2NjVlNTRlXSAudi1kYXRhLXRhYmxlX190ZHt3b3JkLWJyZWFrOmJyZWFrLWFsbH0ubWF4LWhlaWdodFtkYXRhLXYtMWFmNjkwNzZde2hlaWdodDo1MzBweH0uZGV0YWlsc1tkYXRhLXYtMWFmNjkwNzZde2JhY2tncm91bmQtY29sb3I6cmdiKHZhcigtLXYtdGhlbWUtb24tc3VyZmFjZS12YXJpYW50KSl9Lm1heC0zLWxpbmVzW2RhdGEtdi0xYWY2OTA3Nl17ZGlzcGxheTotd2Via2l0LWJveDstd2Via2l0LWxpbmUtY2xhbXA6Mzstd2Via2l0LWJveC1vcmllbnQ6dmVydGljYWw7aGVpZ2h0OjEwMCV9W2RhdGEtdi0xYWY2OTA3Nl0gLnYtY2FyZD4udi1jYXJkLWl0ZW17aGVpZ2h0OmNhbGMoMTAwJSAtIDQ4cHgpO2FsaWduLWNvbnRlbnQ6c3RhcnR9W2RhdGEtdi05MDNjZjY5NF0gLmJhZGdle3RvcDotNnB4O3JpZ2h0Oi02cHh9Lmxpc3RbZGF0YS12LWZmOWZlMzEwXSAudi1leHBhbnNpb24tcGFuZWxze2hlaWdodDpjYWxjKDEwMCUgLSAodmFyKC0tdi12Y3MtZm9udC1zaXplKSAqIDIgKyAxOHB4KSkhaW1wb3J0YW50O292ZXJmbG93LXk6YXV0bzthbGlnbi1jb250ZW50OmZsZXgtc3RhcnR9Lmxpc3RbZGF0YS12LWZmOWZlMzEwXSAudi1saXN0LWl0ZW17cGFkZGluZy1sZWZ0OjI0cHghaW1wb3J0YW50fS5saXN0W2RhdGEtdi1mZjlmZTMxMF0gLnYtbGlzdC1pdGVtLnYtbGlzdC1pdGVtLS1hY3RpdmV7cGFkZGluZy1sZWZ0OjIwcHghaW1wb3J0YW50fS5saXN0W2RhdGEtdi1mZjlmZTMxMF0gLnYtc3BhY2Vye2Rpc3BsYXk6bm9uZSFpbXBvcnRhbnR9LmJ1dHRvbi1tYXJnaW5bZGF0YS12LWZmOWZlMzEwXXtoZWlnaHQ6Y2FsYygxMDAlIC0gKHZhcigtLXYtdmNzLWZvbnQtc2l6ZSkgKiAyICsgMjBweCkpIWltcG9ydGFudH0uZGwtY29udGVudFtkYXRhLXYtYzJlZjkyYWJde2hlaWdodDpjYWxjKDU2MnB4IC0gdmFyKC0tdi12Y3MtZm9udC1zaXplKSAqIDIgLSA2cHgpfS52Y3MtYmFkZ2VbZGF0YS12LWMyZWY5MmFiXXt0b3A6NHB4O3JpZ2h0OjJweH1bZGF0YS12LWE0MzJkZDc1XSAudmNzTGlzdHt3aWR0aDoxMDAlIWltcG9ydGFudH0K');import { LayerContentTreeItem as Ot, NotificationType as ye, getPluginAssetUrl as va, createEllipseTooltip as ha, VcsLabel as ie, VcsExtent as Je, VcsFormSection as Ye, VcsTreeviewSearchbar as kt, VcsTreeview as Mt, VcsTextField as be, VcsSelect as Fe, VcsFormButton as We, VcsButton as ut, VcsList as Nt, VcsActionButtonList as Ut, VcsDataTable as ba, VcsMarkdown as Sa, VcsSlider as Ft, VcsCheckbox as ct, VcsGroupedList as wa, VcsBadge as Ta, VcsTextArea as La, AbstractConfigEditor as Aa, createToggleAction as Ca, WindowSlot as Ea, ButtonLocation as _a, GroupContentTreeItem as $a, TableFeatureInfoView as Va, callSafeAction as Ra } from "../../../assets/ui.js";
import { Extent as ue, GeoJSONLayer as Wt, Viewpoint as Bt, VectorStyleItem as Pa, WMSLayer as Ia, WMSFeatureProvider as Da, CesiumTilesetLayer as Oa, TerrainLayer as ka, WFSLayer as Ma, WMTSLayer as Na, Projection as zt, PointCloudLayer as Ua, CzmlLayer as Fa, maxZIndex as Wa } from "../../../assets/core.js";
import { reactive as B, toRaw as D, defineComponent as H, ref as w, computed as ae, createElementBlock as A, openBlock as g, normalizeClass as Ba, createElementVNode as U, createBlock as L, createCommentVNode as R, toDisplayString as y, unref as Ee, withCtx as s, createTextVNode as h, resolveComponent as m, Fragment as _e, renderList as Be, createVNode as o, inject as re, withKeys as jt, createSlots as za, watch as te, nextTick as ja, resolveDynamicComponent as Ga, mergeProps as Ka, withModifiers as qa } from "../../../assets/vue.js";
import { VTooltip as Za, VRow as Y, VChip as Gt, VSpacer as Ha, VDivider as Xe, VCol as oe, VCardTitle as Ja, VCard as ze, VPagination as Ya, VMenu as Xa, VIcon as Qa, VDialog as Kt, VContainer as mt, VCardText as xa, VTabsWindowItem as en, VTabsWindow as tn, VTabs as an, VTab as nn, VSheet as rn, VForm as on } from "../../../assets/vuetify.js";
import { ol$Feature as sn, ol$geom$Point as ln, ol$style$Style as dn, ol$format$WMSCapabilities as un, ol$xml$makeStructureNS as $, ol$xml$makeObjectPropertySetter as v, ol$format$xsd$readString as I, ol$xml$makeObjectPropertyPusher as Te, ol$xml$makeArrayPusher as ne, ol$format$xlink$readHref as rt, ol$xml$pushParseAndPop as P, ol$xml$getAllTextContent as cn, ol$format$XML as mn, ol$format$WMTSCapabilities as pn } from "../../../assets/ol.js";
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
class fn {
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
    Ne.logLevel & he.ERROR && this._log(String(t), Z.ERROR, a);
  }
  /**
   * Logs a warning message
   * @param {string} msg The message to log.
   * @param {...any} optArgs
   */
  warning(t, ...a) {
    Ne.logLevel & he.WARN && this._log(String(t), Z.WARN, a);
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
      let l = `${n} has been deprecated and will be removed`;
      r && (l = `${l}. ${r}`), this.warning(l);
    }
  }
  /**
   * Logs an info message
   * @param {string} msg The message to log.
   * @param {...any} optArgs
   */
  info(t, ...a) {
    Ne.logLevel & he.INFO && this._log(String(t), Z.INFO, a);
  }
  /**
   * Logs a debug message
   * @param {string} msg The message to log.
   * @param {...any} optArgs
   */
  debug(t, ...a) {
    Ne.logLevel & he.DEBUG && this._log(String(t), Z.DEBUG, a);
  }
  /**
   * Alias for debug
   * @param {string} msg The message to log.
   * @param {...any} optArgs
   */
  log(t, ...a) {
    Ne.logLevel & he.DEBUG && this._log(String(t), Z.DEBUG, a);
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
    this.className && (r = `[${this.className}] ${r}`), console[je.get(a)](r, ...n), a & Z.ERROR && (console.group(), console.trace(), console.groupEnd());
  }
}
const ot = /* @__PURE__ */ new Map();
function yn(e) {
  const t = new fn(e);
  return ot.set(e, t), t;
}
function ge(e) {
  return ot.has(e) ? ot.get(e) : yn(e);
}
const Le = {
  defaultMerge: Symbol("deepmerge-ts: default merge"),
  skip: Symbol("deepmerge-ts: skip")
};
Le.defaultMerge;
function gn(e, t) {
  return t;
}
function vn(e, t) {
  return e.filter((a) => a !== void 0);
}
var bt;
(function(e) {
  e[e.NOT = 0] = "NOT", e[e.RECORD = 1] = "RECORD", e[e.ARRAY = 2] = "ARRAY", e[e.SET = 3] = "SET", e[e.MAP = 4] = "MAP", e[e.OTHER = 5] = "OTHER";
})(bt || (bt = {}));
function St(e) {
  return typeof e != "object" || e === null ? 0 : Array.isArray(e) ? 2 : Sn(e) ? 1 : e instanceof Set ? 3 : e instanceof Map ? 4 : 5;
}
function hn(e) {
  const t = /* @__PURE__ */ new Set();
  for (const a of e)
    for (const n of [...Object.keys(a), ...Object.getOwnPropertySymbols(a)])
      t.add(n);
  return t;
}
function bn(e, t) {
  return typeof e == "object" && Object.prototype.propertyIsEnumerable.call(e, t);
}
function qt(e) {
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
            const l = a.next();
            if (l.done === !0) {
              t += 1, a = (r = e[t]) == null ? void 0 : r[Symbol.iterator]();
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
function Sn(e) {
  if (!wt.includes(Object.prototype.toString.call(e)))
    return !1;
  const { constructor: t } = e;
  if (t === void 0)
    return !0;
  const a = t.prototype;
  return !(a === null || typeof a != "object" || !wt.includes(Object.prototype.toString.call(a)) || !a.hasOwnProperty("isPrototypeOf"));
}
function wn(e, t, a) {
  const n = {};
  for (const r of hn(e)) {
    const l = [];
    for (const c of e)
      bn(c, r) && l.push(c[r]);
    if (l.length === 0)
      continue;
    const i = t.metaDataUpdater(a, {
      key: r,
      parents: e
    }), d = Zt(l, t, i);
    d !== Le.skip && (r === "__proto__" ? Object.defineProperty(n, r, {
      value: d,
      configurable: !0,
      enumerable: !0,
      writable: !0
    }) : n[r] = d);
  }
  return n;
}
function Tn(e) {
  return e.flat();
}
function Ln(e) {
  return new Set(qt(e));
}
function An(e) {
  return new Map(qt(e));
}
function Cn(e) {
  return e.at(-1);
}
const qe = {
  mergeRecords: wn,
  mergeArrays: Tn,
  mergeSets: Ln,
  mergeMaps: An,
  mergeOthers: Cn
};
function En(e, t) {
  const a = _n(e, n);
  function n(...r) {
    return Zt(r, a, t);
  }
  return n;
}
function _n(e, t) {
  return {
    defaultMergeFunctions: qe,
    mergeFunctions: {
      ...qe,
      ...Object.fromEntries(Object.entries(e).filter(([a, n]) => Object.hasOwn(qe, a)).map(([a, n]) => n === !1 ? [a, qe.mergeOthers] : [a, n]))
    },
    metaDataUpdater: e.metaDataUpdater ?? gn,
    deepmerge: t,
    useImplicitDefaultMerging: e.enableImplicitDefaultMerging ?? !1,
    filterValues: e.filterValues === !1 ? void 0 : e.filterValues ?? vn,
    actions: Le
  };
}
function Zt(e, t, a) {
  var l;
  const n = ((l = t.filterValues) == null ? void 0 : l.call(t, e, a)) ?? e;
  if (n.length === 0)
    return;
  if (n.length === 1)
    return xe(n, t, a);
  const r = St(n[0]);
  if (r !== 0 && r !== 5) {
    for (let i = 1; i < n.length; i++)
      if (St(n[i]) !== r)
        return xe(n, t, a);
  }
  switch (r) {
    case 1:
      return $n(n, t, a);
    case 2:
      return Vn(n, t, a);
    case 3:
      return Rn(n, t, a);
    case 4:
      return Pn(n, t, a);
    default:
      return xe(n, t, a);
  }
}
function $n(e, t, a) {
  const n = t.mergeFunctions.mergeRecords(e, t, a);
  return n === Le.defaultMerge || t.useImplicitDefaultMerging && n === void 0 && t.mergeFunctions.mergeRecords !== t.defaultMergeFunctions.mergeRecords ? t.defaultMergeFunctions.mergeRecords(e, t, a) : n;
}
function Vn(e, t, a) {
  const n = t.mergeFunctions.mergeArrays(e, t, a);
  return n === Le.defaultMerge || t.useImplicitDefaultMerging && n === void 0 && t.mergeFunctions.mergeArrays !== t.defaultMergeFunctions.mergeArrays ? t.defaultMergeFunctions.mergeArrays(e) : n;
}
function Rn(e, t, a) {
  const n = t.mergeFunctions.mergeSets(e, t, a);
  return n === Le.defaultMerge || t.useImplicitDefaultMerging && n === void 0 && t.mergeFunctions.mergeSets !== t.defaultMergeFunctions.mergeSets ? t.defaultMergeFunctions.mergeSets(e) : n;
}
function Pn(e, t, a) {
  const n = t.mergeFunctions.mergeMaps(e, t, a);
  return n === Le.defaultMerge || t.useImplicitDefaultMerging && n === void 0 && t.mergeFunctions.mergeMaps !== t.defaultMergeFunctions.mergeMaps ? t.defaultMergeFunctions.mergeMaps(e) : n;
}
function xe(e, t, a) {
  const n = t.mergeFunctions.mergeOthers(e, t, a);
  return n === Le.defaultMerge || t.useImplicitDefaultMerging && n === void 0 && t.mergeFunctions.mergeOthers !== t.defaultMergeFunctions.mergeOthers ? t.defaultMergeFunctions.mergeOthers(e) : n;
}
const k = "@vcmap/dynamic-layer", In = "1.0.4", Dn = "^6.2", On = {
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
    logo: "Logo"
  }
}, kn = {
  dynamicLayer: On
}, Mn = {
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
    logo: "Logo"
  }
}, Nn = {
  dynamicLayer: Mn
};
var G = /* @__PURE__ */ ((e) => (e.WEBDATA = "webdata", e.CATALOGUES = "catalogues", e.ADDED = "added", e))(G || {}), T = /* @__PURE__ */ ((e) => (e.CESIUM_TILESET = "CesiumTilesetLayer", e.POINTCLOUD = "PointCloudLayer", e.TERRAIN = "TerrainLayer", e.CZML = "CzmlLayer", e.GEOJSON = "GeoJSONLayer", e.WFS = "WFSLayer", e.WMS = "WMSLayer", e.WMTS = "WMTSLayer", e))(T || {});
function Un(e, t) {
  const a = (n, r) => {
    if (t(r))
      return n.push(r), n;
    if (r.children.length) {
      const l = r.children.reduce(a, []);
      if (l.length) {
        const i = { ...r };
        i.children = l, n.push(i);
      }
    }
    return n;
  };
  return e.reduce(a, []);
}
function Ge(e, t) {
  function a(n) {
    n.forEach((r) => {
      e(r), r.children.length && a(r.children);
    });
  }
  a([t]);
}
function Fn(e, t) {
  const a = e.plugins.getByKey(k);
  let n;
  return a.webdata.added.value.forEach((r) => {
    n || Ge((l) => {
      n || l.children.find((i) => i.name === t.name) && (n = l);
    }, r);
  }), n;
}
function pt(e, t) {
  const a = e.plugins.getByKey(k);
  let n = 1;
  const r = () => !!e.layers.getByKey(`${t}-${n}`) || !!a.webdata.added.value.find(
    (l) => l.name === `${t}-${n}`
  );
  for (; r(); )
    n += 1;
  return `${t}-${n}`;
}
function ft(e, t) {
  var i;
  const a = ["REQUEST", "SERVICE", "VERSION"], n = (i = e.split("?")[1]) == null ? void 0 : i.split("&"), r = n ? Object.fromEntries(
    n.map((d) => d.split("=")).map(([d, c]) => [
      a.includes(d.toUpperCase()) ? d.toUpperCase() : d,
      c
    ])
  ) : {}, l = { ...r };
  return a.forEach((d) => {
    delete l[d];
  }), r.SERVICE = t, r.REQUEST = "GetCapabilities", {
    parameters: Object.entries(r).map((d) => d.join("=")).join("&"),
    optionalParameters: l
  };
}
function Ht(e, t) {
  const a = new URL(e);
  return t && Object.entries(t).length && Object.entries(t).forEach(([n, r]) => {
    a.searchParams.append(n, r);
  }), a.toString();
}
function yt(e) {
  return ue.validateOptions(e.toJSON()) ? (e.extent[0] < -180 && (e.extent[0] = -180), e.extent[1] < -90 && (e.extent[1] = -90), e.extent[2] > 180 && (e.extent[2] = 180), e.extent[3] > 90 && (e.extent[3] = 90), e) : new ue({
    coordinates: ue.WGS_84_EXTENT,
    projection: { epsg: 4326 }
  });
}
function Pe(e, t) {
  switch (t) {
    case T.TERRAIN:
      return e.split("/layer.json")[0];
    case T.WFS:
    case T.WMS:
    case T.WMTS:
      return e.split("?")[0];
    // 3D Tiles URL does not need to be parsed.
    default:
      return e;
  }
}
function Jt(e) {
  return [T.WFS, T.WMS, T.WMTS].includes(
    e.type
  );
}
const ee = [];
for (let e = 0; e < 256; ++e)
  ee.push((e + 256).toString(16).slice(1));
function Wn(e, t = 0) {
  return (ee[e[t + 0]] + ee[e[t + 1]] + ee[e[t + 2]] + ee[e[t + 3]] + "-" + ee[e[t + 4]] + ee[e[t + 5]] + "-" + ee[e[t + 6]] + ee[e[t + 7]] + "-" + ee[e[t + 8]] + ee[e[t + 9]] + "-" + ee[e[t + 10]] + ee[e[t + 11]] + ee[e[t + 12]] + ee[e[t + 13]] + ee[e[t + 14]] + ee[e[t + 15]]).toLowerCase();
}
let et;
const Bn = new Uint8Array(16);
function zn() {
  if (!et) {
    if (typeof crypto > "u" || !crypto.getRandomValues)
      throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
    et = crypto.getRandomValues.bind(crypto);
  }
  return et(Bn);
}
const jn = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto), Tt = { randomUUID: jn };
function Gn(e, t, a) {
  var r;
  if (Tt.randomUUID && !e)
    return Tt.randomUUID();
  e = e || {};
  const n = e.random ?? ((r = e.rng) == null ? void 0 : r.call(e)) ?? zn();
  if (n.length < 16)
    throw new Error("Random bytes length must be >= 16");
  return n[6] = n[6] & 15 | 64, n[8] = n[8] & 63 | 128, Wn(n);
}
var Ze = /* @__PURE__ */ ((e) => (e.relevance = "relevance", e.lastModified = "changeDate", e.nameAsc = "title", e.rating = "rating", e.popularity = "popularity", e.lowScaleFirst = "denominatorDesc", e.highScaleFirst = "denominatorAsc", e))(Ze || {});
function Kn(e) {
  const t = e.split("|");
  let a = t[0];
  a && t[1] ? a += ` ${t[1]}` : t[1] ? a = t[1] : a || (a = t[2]);
  const n = Ue(t[4]) ?? Ue(t[3]) ?? Ue(t[2]);
  return {
    id: Gn(),
    title: a,
    description: t[1],
    type: n,
    [t[3].includes("link") ? "downloadUrl" : "accessUrl"]: t[2],
    format: (t[3] || (n == null ? void 0 : n.slice(0, -5))) ?? t[4]
  };
}
function st(e) {
  var a;
  const t = {
    id: e["geonet:info"].uuid,
    title: e.title ?? e.defaultTitle ?? e.identifier,
    description: e.abstract ?? e.defaultAbstract,
    ...e.recordOwner && { owner: { title: e.recordOwner } }
  };
  return e.publicationDate && (t.created = new Date(e.publicationDate).toDateString()), (a = e["geonet:info"]) != null && a.changeDate && (t.modified = new Date(e["geonet:info"].changeDate).toDateString()), e.keyword && (t.keywords = Array.isArray(e.keyword) ? e.keyword : [e.keyword]), e.link && (t.distributions = (Array.isArray(e.link) ? e.link : [e.link]).map(Kn)), t;
}
function qn(e) {
  const t = e.summary.dimension.filter(
    (n) => n.category && (Array.isArray(n.category) ? n.category : [n.category]).length > 0
  ).map((n) => ({
    id: n["@name"],
    title: ta(n["@label"]),
    values: (Array.isArray(n.category) ? n.category : [n.category]).filter((r) => !!r).map((r) => ({
      id: r["@value"],
      title: `${r["@label"]} (${r["@count"]})`
    }))
  })), a = Array.isArray(e.metadata) ? e.metadata.map(st) : [st(e.metadata)];
  return { count: +e.summary["@count"], datasets: a, facets: t };
}
async function Zn(e, t, a, n, r, l) {
  const i = { method: "GET", signal: AbortSignal.timeout(3e4) }, d = { type: "dataset", ...l }, c = Object.keys(Ze).includes(r) ? Ze[r] : "relevance", u = new URL(`${ve(e)}/q`);
  return u.searchParams.set("_content_type", "json"), u.searchParams.set(
    "facet.q",
    Object.entries(d).map(([f, p]) => `${f}/${encodeURIComponent(p)}`).join("&")
  ), u.searchParams.set("resultType", "details"), u.searchParams.set("fast", "index"), u.searchParams.set("from", (t * a + 1).toString()), u.searchParams.set("to", (t * (a + 1)).toString()), u.searchParams.set("any", n), u.searchParams.set("sortBy", c), c === "title" && u.searchParams.append("sortOrder", "reverse"), fetch(u, i).then((f) => f.json()).then((f) => qn(f));
}
async function Hn(e, t) {
  const a = { method: "GET", signal: AbortSignal.timeout(5e3) }, n = new URL(`${ve(e)}/q`);
  return n.searchParams.set("_content_type", "json"), n.searchParams.set("fast", "index"), n.searchParams.set("_uuid_OR__id", t), fetch(n, a).then((r) => r.json()).then((r) => {
    const l = Array.isArray(r.metadata) ? r.metadata[0] : r.metadata;
    return st(l);
  });
}
var He = /* @__PURE__ */ ((e) => (e.relevance = "relevance+desc", e.nameAsc = "title.$locale$+asc", e.nameDesc = "title.$locale$+desc", e.lastModified = "modified+desc", e.lastCreated = "issued+desc", e))(He || {});
function Jn(e, t) {
  var n, r, l, i;
  const a = {
    id: e.id,
    title: Re(e.title, t) || e.id,
    description: Re(e.description, t),
    type: Ue(((n = e.format) == null ? void 0 : n.label) ?? ((r = e.format) == null ? void 0 : r.id)),
    ...e.issued && { created: new Date(e.issued).toDateString() },
    ...e.modified && { modified: new Date(e.modified).toDateString() },
    ...e.format && { format: e.format.label ?? e.format.id },
    ...e.license && { license: e.license.label ?? e.license.id }
  };
  return (l = e.access_url) != null && l[0] && (a.accessUrl = e.access_url[0]), (i = e.download_url) != null && i[0] && (a.downloadUrl = e.download_url[0]), a;
}
function Yt(e, t) {
  var a, n, r, l;
  return {
    id: e.id,
    title: Re(e.title, t),
    description: Re(e.description, t),
    ...((a = e.publisher) == null ? void 0 : a.name) && {
      publisher: { title: e.publisher.name, url: (n = e.publisher) == null ? void 0 : n.resource }
    },
    ...e.issued && { created: new Date(e.issued).toDateString() },
    ...e.modified && { modified: new Date(e.modified).toDateString() },
    keywords: (r = e.keywords) == null ? void 0 : r.map(
      (i) => Re(i.title, t) || i.label
    ),
    distributions: (l = e.distributions) == null ? void 0 : l.map(
      (i) => Jn(i, t)
    )
  };
}
function Yn(e, t) {
  return {
    count: e.result.count,
    datasets: e.result.results.map((a) => Yt(a, t)),
    facets: e.result.facets.filter((a) => a.items.length > 0).map((a) => ({
      id: a.id,
      title: a.title,
      values: a.items.map((n) => ({
        id: n.id,
        title: `${Re(n.title, t)} (${n.count})`
      }))
    }))
  };
}
async function Xn(e, t, a, n, r, l, i) {
  const d = {
    method: "GET",
    headers: { accept: "application/json" },
    signal: AbortSignal.timeout(3e4)
  }, c = Object.keys(He).includes(r) ? He[r].replace(
    "$locale$",
    i
  ) : "relevance+desc", u = new URL(`${ve(e)}/search`);
  return u.searchParams.append("filter", "dataset"), u.searchParams.append("q", n), u.searchParams.append("sort", c), u.searchParams.append("page", a.toString()), u.searchParams.append("limit", t.toString()), u.searchParams.append("facets", JSON.stringify(l)), fetch(u, d).then((f) => f.json()).then((f) => Yn(f, i));
}
async function Qn(e, t, a) {
  const n = new URL(`${ve(e)}/datasets/${t}`), r = {
    method: "GET",
    headers: { accept: "application/json" },
    signal: AbortSignal.timeout(5e3)
  };
  return fetch(n, r).then((l) => l.json()).then(
    (l) => Yt(l.result, a)
  );
}
var gt = /* @__PURE__ */ ((e) => (e.nameAsc = "nameAsc", e.nameDesc = "nameDesc", e.lastModified = "lastModified", e.lastCreated = "lastCreated", e))(gt || {});
function xn(e) {
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
    distributions: (a = e.distributions) == null ? void 0 : a.map(xn)
  };
  return (n = e.publisher) != null && n.name && (t.publisher = {
    title: e.publisher.name,
    url: (r = e.publisher) == null ? void 0 : r.homepage
  }), t;
}
function er(e) {
  return {
    count: e.count,
    datasets: e.results.map(Xt),
    facets: e.facets.filter((t) => t.values.length).map((t) => ({
      id: t.search_parameter,
      title: t.displayName,
      values: t.values.map((a) => ({ id: a.search_value, title: a.facet }))
    }))
  };
}
function tr(e, t) {
  const a = Object.entries(e), n = { field: "ALL", value: t.replaceAll(" ", ",") };
  return a.length ? [...a.map((r) => ({ field: r[0], value: r[1][0] })), n] : [n];
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
async function nr(e, t, a, n, r, l) {
  const i = {
    method: "GET",
    headers: { accept: "application/json" },
    signal: AbortSignal.timeout(3e4)
  }, d = new URL(`${ve(e)}/cataloguesInfo`), c = await fetch(d, i).then((S) => S.json()).then((S) => S.map((b) => b.id)), u = {
    filters: tr(l, n),
    sort: ar(
      gt[r]
    ),
    live: !1,
    rows: t.toString(),
    start: (t * a).toString(),
    nodes: c,
    euroVocFilter: { euroVoc: !1, sourceLanguage: "", targetLanguages: [] }
  }, f = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    signal: AbortSignal.timeout(3e4),
    body: JSON.stringify(u)
  }, p = new URL(`${ve(e)}/search`);
  return fetch(p, f).then((S) => S.json()).then((S) => er(S));
}
async function rr(e, t) {
  const a = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    signal: AbortSignal.timeout(5e3)
  }, n = new URL(`${ve(e)}/dataset/${t}`);
  return fetch(n, a).then((r) => r.json()).then((r) => {
    var l;
    return Xt((l = r.results) == null ? void 0 : l[0]);
  });
}
var Qt = /* @__PURE__ */ ((e) => (e.CLIMATE_ZONES = "climateZoneIds", e.PILOTS = "pilotIds", e.KEYWORD_IDS = "keywordIds", e.PROBLEM_IDS = "problemIds", e))(Qt || {});
function or(e) {
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
        feature: new sn({
          geometry: new ln([
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
async function sr(e, t) {
  const a = new URL(`${ve(e)}/api/nbs/${t}`), n = {
    method: "GET",
    headers: { accept: "application/json" },
    signal: AbortSignal.timeout(5e3)
  };
  return fetch(a, n).then((r) => r.json()).then((r) => or(r));
}
async function ir(e, t) {
  const a = Object.values(Qt).reduce(
    (i, d) => {
      const c = `${d.slice(0, -3)}s`;
      return t[c] && (i[d] = t[c]), i;
    },
    {
      climateZoneIds: [],
      pilotIds: [],
      keywordIds: [],
      problemIds: []
    }
  ), n = JSON.stringify({ ...a, onlyUrbreathNbs: !1 }), r = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: n,
    signal: AbortSignal.timeout(3e4)
  }, l = `${ve(e)}/api/nbs/map`;
  return fetch(l, r).then((i) => i.json()).then(async (i) => {
    if (!i.success)
      throw new Error(i.message || "Failed to fetch registry data");
    const d = await Promise.all(
      i.data.map(
        async (f) => sr(e, f.id.toString())
      )
    ), c = await fetch(
      `${ve(e)}/api/filters/`
    ).then((f) => f.json()).catch((f) => (ge(k).error(
      `Failed to fetch registry filters from ${l}: ${String(f)}`
    ), null)), u = [];
    return c != null && c.success ? u.push(
      ...Object.entries(c.data).map(([f, p]) => ({
        id: f,
        title: ta(f),
        values: p.map((S) => ({
          id: S.id,
          title: `${S.label} `
        }))
      }))
    ) : ge(k).error(
      (c == null ? void 0 : c.message) || "Failed to fetch registry filters"
    ), { count: i.data.length, datasets: d, facets: u };
  });
}
const Lt = "nbsRegistryLayer";
function lr(e, t) {
  let a = e.layers.getByKey(Lt);
  if (!a) {
    a = new Wt({
      name: Lt,
      properties: {
        featureInfo: "NbsRegistryFeatureInfo",
        title: "Nature-Based Solutions"
      }
    }), a.activate().catch(() => {
    }), e.layers.add(a);
    const n = Qe(a.name), r = new Ot(
      {
        name: n,
        layerName: a.name,
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
            a.getZoomToExtent()
          );
          l && await ((i = e.maps.activeMap) == null ? void 0 : i.gotoViewpoint(l));
        }
      })
    ), r.addAction(
      B({
        name: "dynamicLayer.actions.layer.remove",
        callback: () => {
          e.layers.remove(a), a.destroy(), e.contentTree.remove(r);
        }
      })
    ), e.contentTree.add(r);
  }
  t.feature.setStyle(
    new dn(
      new Pa({
        image: { src: ea(e, Ie.NBS), scale: 0.05 }
      })
    )
  ), a.addFeatures([t.feature]), e.notifier.add({
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
async function xt(e, t, a, n = "en", r = 0, l = "", i = "relevance", d = {}) {
  return e === "piveau" ? Xn(t, a, r, l, i, d, n) : e === "nbsRegistry" ? ir(t, d) : e === "idra" ? nr(t, a, r, l, i, d) : Zn(t, a, r, l, i, d);
}
function dr(e, t, a, n) {
  switch (e) {
    case "geonetwork":
      return Hn(t, a);
    case "idra":
      return rr(t, a);
    case "piveau":
      return Qn(t, a, n);
    default:
      throw new Error("Unsupported catalogue type");
  }
}
function Ct(e, t) {
  var n;
  e.windowManager.has(dt) && e.windowManager.remove(dt);
  const a = (n = e.layers.getByKey(t)) == null ? void 0 : n.getZoomToExtent();
  if (a) {
    const r = Bt.createViewpointFromExtent(a);
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
async function ur(e, t, a, n, r, l = !1) {
  try {
    const i = await ht(e, t, a, n, r);
    if (!i.children.length)
      await De(e, i), l && Ct(e, i.name);
    else if (i.children.length === 1 && !i.children[0].children.length)
      await De(e, i.children[0]), l && Ct(e, i.children[0].name);
    else
      return Object.assign(i, {
        actions: i.actions.filter(
          (d) => d.name !== aa.DeleteSource.toString()
        )
      });
  } catch (i) {
    e.notifier.add({ type: ye.ERROR, message: String(i) });
  }
}
function ea(e, t) {
  return va(e, k, `plugin-assets/${t}_logo.png`) ?? "";
}
function Re(e, t) {
  return e ? typeof e == "string" ? e : e[t] ?? e.en ?? Object.values(e)[0] : "";
}
function ve(e) {
  return e.slice(-1) === "/" ? e.slice(0, -1) : e;
}
function ta(e) {
  return e.match(/^[a-z]+|[A-Z][a-z]*/g).map((t) => t[0].toUpperCase() + t.substring(1).toLowerCase()).join(" ");
}
function Ue(e) {
  function t(a) {
    return e ? e.toLowerCase().includes(a) : !1;
  }
  if (t("wfs"))
    return T.WFS;
  if (t("wms"))
    return T.WMS;
  if (t("wmts"))
    return T.WMTS;
  if (t("geojson"))
    return T.GEOJSON;
  if (t("czml"))
    return T.CZML;
}
function it(e) {
  return e === G.WEBDATA ? Object.values(T).map((t) => ({
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
function cr(e, t, a) {
  const n = e.plugins.getByKey(k);
  function r(i) {
    const { host: d } = new URL(i.url), c = {
      title: i.title ?? d.replace("www.", ""),
      url: i.url,
      type: i.type,
      subtitle: i.subtitle,
      ...i.logo && { logo: i.logo },
      ...i.description && { description: i.description }
    };
    return xt(
      c.type,
      c.url,
      n.config.catalogues.itemsPerPage
    ).then((u) => {
      if (u) {
        const f = {
          ...c,
          data: u
        };
        return n.catalogues.added.value.push(f), f;
      }
    });
  }
  const l = t.find((i) => i.url === (a == null ? void 0 : a.url));
  l && r(l).then((i) => {
    n.catalogues.selected.value = i;
    const { type: d, url: c } = i;
    dr(d, c, a.dataset, e.locale).then((u) => {
      n.catalogues.selectedDataset.value = u, n.catalogues.expandedDistributionIds.value = [a.distrib];
    }).catch((u) => {
      e.notifier.add({
        type: ye.ERROR,
        title: "dynamicLayer.errors.fetchingDatasetDetails",
        message: String(u)
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
var aa = /* @__PURE__ */ ((e) => (e.AddToMap = "dynamicLayer.actions.layer.add", e.AddAll = "dynamicLayer.actions.layer.addAll", e.RemoveAll = "dynamicLayer.actions.layer.removeAll", e.EditLayer = "editLayer", e.RemoveLayer = "dynamicLayer.actions.layer.remove", e.DeleteSource = "dynamicLayer.actions.source.delete", e))(aa || {});
function lt(e) {
  function t(a) {
    let n = 0;
    for (const r of a.children)
      !r.isAddedToMap && !r.children.length && (n += 1), n += t(r);
    return n;
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
    const a = e.plugins.getByKey(k);
    try {
      const n = ms(t, a.layerIndex);
      await n.activate(), n.properties.featureInfo = k, e.layers.add(n), a.state[n.url] || (a.state[n.url] = { layerNames: [], type: t.type }), a.state[n.url].layerNames.includes(t.name) || a.state[n.url].layerNames.push(t.name), t.isAddedToMap = !0;
      const r = Qe(n.name), l = new Ot(
        {
          name: r,
          layerName: n.name,
          title: t.title
        },
        e
      );
      t.actions = ce(e, t), e.contentTree.add(l), a.addedToMap.value.push(t), a.addedSelected.value = t, a.activeTab.value === G.WEBDATA && (a.webdata.selected.value = t), e.notifier.add({
        type: ye.SUCCESS,
        message: `${e.vueI18n.t("dynamicLayer.common.theLayer")} ${t.title} ${e.vueI18n.t("dynamicLayer.info.successfullyAdded")}`
      });
    } catch (n) {
      e.notifier.add({
        type: ye.ERROR,
        title: `${e.vueI18n.t("dynamicLayer.errors.addingLayer")}: ${t.title}`,
        message: n
      });
    }
  }
}
function na(e, t) {
  const a = e.plugins.getByKey(k);
  t.children.filter((n) => !n.isAddedToMap).forEach((n) => {
    Ge((r) => {
      r.children.length || De(e, r).catch((l) => {
        ge(k).error(String(l));
      });
    }, n);
  }), a.activeTab.value === G.WEBDATA && (a.webdata.selected.value = t);
}
function Oe(e, t) {
  var u;
  const { state: a, addedToMap: n, addedSelected: r } = e.plugins.getByKey(
    k
  );
  ((u = r.value) == null ? void 0 : u.name) === t.name && (r.value = void 0);
  const l = e.layers.getByKey(t.name);
  l && (e.layers.remove(l), l.destroy());
  const i = Qe(t.name), d = e.contentTree.getByKey(i);
  d && e.contentTree.remove(d), a[t.url] && (a[t.url].layerNames.includes(t.name) && a[t.url].layerNames.splice(
    a[t.url].layerNames.findIndex((f) => f === t.name),
    1
  ), a[t.url].layerNames.length || delete a[t.url]);
  const c = n.value.indexOf(t);
  n.value.splice(c, 1), t.isAddedToMap = !1, t.actions = ce(e, t);
}
function mr(e, t) {
  Ge((a) => {
    Oe(e, a);
  }, t);
}
function ra(e, t) {
  const a = e.plugins.getByKey(k);
  a.webdata.selected.value = void 0, Ge((r) => {
    Oe(e, r);
  }, t);
  const { value: n } = a.webdata.added;
  n.splice(n.indexOf(t), 1);
}
function ce(e, t) {
  const a = [];
  t.isAddedToMap && a.push(
    B({
      icon: "mdi-map-check-outline",
      name: "dynamicLayer.actions.layer.remove",
      title: "dynamicLayer.actions.layer.remove",
      callback: Oe.bind(null, e, t)
    })
  ), !t.children.length && !t.isAddedToMap && a.push(
    B({
      icon: "$vcsPlus",
      name: "dynamicLayer.actions.layer.add",
      title: "dynamicLayer.actions.layer.add",
      callback: De.bind(null, e, t)
    })
  ), t.children.length && (a.push(
    B({
      name: "dynamicLayer.actions.layer.addAll",
      disabled: lt(t) === 0,
      callback: na.bind(null, e, t)
    })
  ), a.push(
    B({
      name: "dynamicLayer.actions.layer.removeAll",
      disabled: !t.children.some((r) => r.isAddedToMap),
      callback: mr.bind(null, e, t)
    })
  )), t.isRootElement && a.push(
    B({
      name: "dynamicLayer.actions.source.delete",
      callback: ra.bind(null, e, t)
    })
  );
  const n = Fn(e, t);
  if (n) {
    const r = n.actions.find(
      (i) => i.name === "dynamicLayer.actions.layer.addAll"
    );
    r && (r.disabled = lt(n) === 0);
    const l = n.actions.find(
      (i) => i.name === "dynamicLayer.actions.layer.removeAll"
    );
    l && (l.disabled = !n.children.some((i) => i.isAddedToMap));
  }
  return a;
}
const pr = [
  "application/json",
  "application/geojson",
  "application/geo+json",
  "application/vnd.geo+json",
  "application/vnd.ogc.gml",
  "text/xml"
];
function fr(e, t, a, n) {
  var f, p, S, b, C, N, M, F, O, z, E, X, _, K, le, fe, Se;
  const { Capability: r, Service: l } = new un().read(t), i = pr.find(
    (W) => r.Request.GetFeatureInfo.Format.includes(W)
  );
  function d(W) {
    var Ae, Ce, pe, we;
    function me(q) {
      var x;
      return q.Layer ? ((x = q.Layer) == null ? void 0 : x.length) > 1 ? !0 : q.Name !== q.Layer[0].Name : !1;
    }
    const j = me(W);
    function de(q) {
      var Me;
      let x = j ? W : ((Me = W == null ? void 0 : W.Layer) == null ? void 0 : Me[0]) ?? W;
      return q.forEach((ga) => {
        x = x == null ? void 0 : x[ga];
      }), x;
    }
    const Ve = !!e.layers.hasKey(W.Name), Q = {
      optionalParameters: n,
      formats: r.Request.GetMap.Format.filter(
        (q) => q === "image/png" || q === "image/jpeg"
      ),
      featureInfoResponseType: i,
      attributions: {
        provider: (Ce = (Ae = l.ContactInformation) == null ? void 0 : Ae.ContactPersonPrimary) == null ? void 0 : Ce.ContactOrganization,
        url: l.OnlineResource
      },
      url: a,
      actions: [],
      type: T.WMS,
      name: de(["Name"]),
      title: de(["Title"]),
      queryable: de(["queryable"]),
      supportsTransparency: !de(["opaque"]),
      extent: yt(
        new ue({
          coordinates: de(["EX_GeographicBoundingBox"]),
          projection: { epsg: 4326 }
        })
      ),
      description: de(["Abstract"]),
      keywordList: de(["KeywordList"]),
      styles: (pe = W.Style) == null ? void 0 : pe.map((q) => ({
        value: q.Name,
        title: q.Title,
        abstract: q.Abstract,
        legendUrl: q.LegendURL[0].OnlineResource
      })),
      children: me(W) ? (we = W.Layer) == null ? void 0 : we.map((q) => d(q)) : []
    };
    return Q.isAddedToMap = Ve && !Q.children.length, Q;
  }
  const c = B({
    actions: [],
    name: a,
    title: l.Title,
    type: T.WMS,
    url: a,
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
      address: (p = (f = l.ContactInformation) == null ? void 0 : f.ContactAddress) == null ? void 0 : p.Address,
      city: `${((b = (S = l.ContactInformation) == null ? void 0 : S.ContactAddress) == null ? void 0 : b.PostCode) ?? ""}${(N = (C = l.ContactInformation) == null ? void 0 : C.ContactAddress) != null && N.PostCode && ((F = (M = l.ContactInformation) == null ? void 0 : M.ContactAddress) != null && F.City) ? " " : ""}${((z = (O = l.ContactInformation) == null ? void 0 : O.ContactAddress) == null ? void 0 : z.City) ?? ""}`,
      country: (X = (E = l.ContactInformation) == null ? void 0 : E.ContactAddress) == null ? void 0 : X.Country,
      person: (K = (_ = l.ContactInformation) == null ? void 0 : _.ContactPersonPrimary) == null ? void 0 : K.ContactPerson,
      position: (le = l.ContactInformation) == null ? void 0 : le.ContactPosition,
      organization: (Se = (fe = l.ContactInformation) == null ? void 0 : fe.ContactPersonPrimary) == null ? void 0 : Se.ContactOrganization
    },
    children: r.Layer.Layer.map((W) => d(W))
  });
  function u(W) {
    var me;
    W.actions.push(...ce(e, W)), (me = W.children) == null || me.forEach((j) => {
      u(j);
    });
  }
  return u(c), c;
}
async function yr(e, t) {
  const a = Pe(t, T.WMS), { parameters: n, optionalParameters: r } = ft(
    t,
    "WMS"
  );
  return fetch(`${a}?${n}`).then((l) => l.text()).then((l) => fr(e, l, a, r));
}
function gr(e, t) {
  var i, d;
  const a = e.formats.includes("image/png") ? "image/png" : e.formats[0], n = (i = e.styles) == null ? void 0 : i[0], r = {
    ...e.optionalParameters,
    FORMAT: a,
    STYLES: (n == null ? void 0 : n.value) ?? "",
    LAYERS: e.name,
    TRANSPARENT: e.supportsTransparency ? "TRUE" : "FALSE"
  }, l = new Ia({
    name: e.name,
    layers: e.name,
    url: e.url,
    extent: ((d = e.extent) == null ? void 0 : d.toJSON()) ?? new ue({ coordinates: ue.WGS_84_EXTENT }).toJSON(),
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
      attributions: D(e.attributions)
    },
    zIndex: t
  });
  return e.queryable && (l.featureProvider = new Da(e.name, {
    url: e.url,
    parameters: r,
    extent: e.extent,
    responseType: e.featureInfoResponseType
  })), l;
}
function vr(e, t, a, n) {
  const r = B(
    {
      actions: [],
      children: [],
      name: a,
      title: n,
      type: T.CESIUM_TILESET,
      url: t,
      isRootElement: !0
    }
  );
  return r.actions.push(
    ...ce(e, r)
  ), r;
}
function hr(e) {
  return new Oa({
    url: e.url,
    name: e.name,
    activeOnStartup: !0,
    properties: { title: e.title }
  });
}
function br(e, t, a, n) {
  const r = Pe(t, T.TERRAIN), l = B({
    actions: [],
    children: [],
    name: a,
    title: n,
    type: T.TERRAIN,
    url: r,
    isRootElement: !0
  });
  return l.actions.push(
    ...ce(e, l)
  ), l;
}
function Sr(e) {
  return new ka({
    url: e.url,
    name: e.name,
    activeOnStartup: !0,
    properties: { title: e.title }
  });
}
const se = {
  _200: "2.0.0",
  _110: "1.1.0",
  _100: "1.0.0"
};
function $e(e) {
  return e[0].version;
}
const V = [
  null,
  "http://www.opengis.net/fes/2.0",
  "http://www.opengis.net/ows/1.1",
  "http://www.opengis.net/ows",
  "http://www.opengis.net/wfs",
  "http://www.opengis.net/wfs/2.0",
  "http://www.opengis.net/ogc",
  "http://www.opengis.net/gml",
  "http://www.opengis.net/gml/3.2"
], wr = {
  [se._200]: $(V, {
    ServiceIdentification: v(tt),
    ServiceProvider: v(_t),
    OperationsMetadata: v($t),
    FeatureTypeList: v(at),
    Filter_Capabilities: v(nt)
  }),
  [se._110]: $(V, {
    ServiceIdentification: v(tt),
    ServiceProvider: v(_t),
    OperationsMetadata: v($t),
    FeatureTypeList: v(at),
    Filter_Capabilities: v(nt)
  }),
  [se._100]: $(V, {
    Service: v(tt),
    Capability: v(yo),
    FeatureTypeList: v(at),
    Filter_Capabilities: v(nt)
  })
};
class Tr extends mn {
  constructor() {
    super(), this.version = void 0;
  }
  /**
   * @param {Element} node Node.
   * @return {Object} Object
   */
  readFromNode(t) {
    this.version = t.getAttribute("version").trim();
    const a = P(
      {
        version: this.version
      },
      wr[this.version],
      t,
      []
    );
    return a || null;
  }
}
const Lr = $(V, {
  Name: v(I),
  Title: v(I),
  Abstract: v(I),
  Keywords: v(function(e, t) {
    return $e(t) === se._100 ? ma(e) : ia(e, t);
  }),
  ServiceType: v(I),
  ServiceTypeVersion: v(I),
  Fees: v(I),
  AccessConstraints: v(I),
  OnlineResource: v(I)
}), Ar = $(V, {
  ProviderName: v(I),
  ServiceContact: v(go)
}), Cr = $(V, {
  Operation: Te(Vo),
  Constraint: Te(oa)
}), Er = $(V, {
  Request: v(Ro)
}), _r = $(V, {
  IndividualName: v(I),
  PositionName: v(I),
  ContactInfo: v(vo)
}), $r = $(V, {
  Phone: v(ho),
  Address: v(bo)
}), Vr = $(V, {
  Voice: v(I),
  Facsimile: v(I)
}), Rr = $(V, {
  DeliveryPoint: v(I),
  City: v(I),
  AdministrativeArea: v(I),
  PostalCode: v(I),
  Country: v(I),
  ElectronicMailAddress: v(I)
}), Pr = $(V, {
  FeatureType: ne(vt)
}), Ir = $(V, {
  Operations: v(ke),
  FeatureType: Te(vt)
}), Dr = $(V, {
  Operations: v(Lo),
  FeatureType: Te(vt)
}), Or = $(V, {
  Name: v(I),
  Title: v(I),
  Abstract: v(I),
  Keywords: v(function(e, t) {
    return $e(t) === se._100 ? ma(e) : ia(e, t);
  }),
  DefaultSRS: v(I),
  DefaultCRS: v(I),
  // 1.1.0
  OtherSRS: Te(I),
  // 1.1.0
  SRS: v(I),
  WGS84BoundingBox: v(Mo),
  MetadataURL: v(Oo),
  LatLongBoundingBox: v(No)
  // 1.0.0
}), kr = $(V, {
  DCP: v(So),
  Parameter: Te(Do)
}), Mr = $(V, {
  Operation: ne(I)
}), Nr = $(V, {
  DCPType: Qo(wo),
  SchemaDescriptionLanguage: v(ke),
  ResultFormat: v(ke)
}), Et = $(V, {
  Value: Te(I),
  AllowedValues: v(la)
}), Ur = $(V, {
  NoValues: v(I),
  DefaultValue: v(I),
  AllowedValues: v(la)
}), Fr = $(V, {
  Get: v(rt),
  Post: v(rt)
}), Wr = $(V, {
  Get: v(It),
  Post: v(It)
}), Br = $(V, {
  LowerCorner: v(Pt),
  UpperCorner: v(Pt)
}), zr = $(V, {
  HTTP: v(_o)
}), jr = $(V, {
  HTTP: v($o)
}), Gr = $(V, {
  Keyword: ne(I)
}), Kr = $(V, {
  Value: ne(I)
}), qr = $(V, {
  Conformance: v(Uo),
  Id_Capabilities: v(Fo),
  Scalar_Capabilities: v(Wo),
  Spatial_Capabilities: v(Bo),
  Temporal_Capabilities: v(zo),
  Functions: v(jo)
}), Zr = $(V, {
  Constraint: Te(oa)
}), Hr = $(V, {
  ResourceIdentifier: ne(ko)
}), Jr = $(V, {
  LogicalOperators: v(Ko),
  ComparisonOperators: v(ua)
}), Yr = $(V, {
  LogicalOperators: v(I),
  ComparisonOperators: v(ua),
  ArithmeticOperators: v(ca)
}), Xr = $(V, {
  Logical_Operators: v(I),
  Comparison_Operators: v(ke),
  Arithmetic_Operators: v(ca)
}), Qr = $(V, {
  GeometryOperands: v(qo),
  SpatialOperators: v(Zo)
}), xr = $(V, {
  Spatial_Operators: v(ke)
}), eo = $(V, {
  TemporalOperands: v(Ho),
  TemporalOperators: v(Jo)
}), to = $(V, {
  Function: ne(Po)
}), ao = $(V, {
  Function_Names: v(Vt),
  // 1.0.0
  FunctionNames: v(Vt)
  // 1.1.0
}), no = $(V, {
  FunctionName: ne(Rt),
  // 1.1.0
  Function_Name: ne(Rt)
  // 1.0.0
}), ro = $(V, {
  Returns: v(I),
  Arguments: v(Yo)
}), oo = $(V, {
  Argument: ne(Io)
}), so = $(V, {
  Type: v(I)
}), io = $(V, {
  LogicalOperator: ne(Ke)
}), lo = $(V, {
  ComparisonOperator: ne(sa)
}), uo = $(V, {
  Simple_Arithmetic: v(I),
  SimpleArithmetic: v(I),
  Functions: v(Go)
}), co = $(V, {
  GeometryOperand: ne(sa)
}), mo = $(V, {
  SpatialOperator: ne(Ke)
}), po = $(V, {
  TemporalOperand: ne(Ke)
}), fo = $(V, {
  TemporalOperator: ne(Ke)
});
function tt(e, t) {
  return P({}, Lr, e, t);
}
function _t(e, t) {
  return P({}, Ar, e, t);
}
function $t(e, t) {
  return P({}, Cr, e, t);
}
function yo(e, t) {
  return P({}, Er, e, t);
}
function at(e, t) {
  const a = $e(t);
  let n;
  return a === se._100 ? n = Ir : a === se._110 ? n = Dr : n = Pr, P(
    a === se._100 || a === se._110 ? {} : [],
    n,
    e,
    t
  );
}
function go(e, t) {
  return P({}, _r, e, t);
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
  return P({}, zr, e, t);
}
function wo(e, t) {
  return P({}, jr, e, t);
}
function To(e, t) {
  return P({}, kr, e, t);
}
function Lo(e, t) {
  return P([], Mr, e, t);
}
function Ao(e, t) {
  return P({}, Nr, e, t);
}
function Co(e, t) {
  return $e(t) === se._110 ? P({}, Et, e, t) : P({}, Et, e, t);
}
function Eo(e, t) {
  return P({}, Ur, e, t);
}
function _o(e, t) {
  return P({}, Fr, e, t);
}
function $o(e, t) {
  return P({}, Wr, e, t);
}
function Vt(e, t) {
  return P([], no, e, t);
}
function Vo(e, t) {
  const a = To(e, t);
  if (a)
    return a.name = e.getAttribute("name"), a;
}
function Ro(e, t) {
  const a = [];
  for (const n of e.children) {
    const r = Ao(n, t);
    r && (r.name = n.tagName, a.push(r));
  }
  if (a.length)
    return a;
}
function Po(e, t) {
  const a = da(e, t);
  if (a)
    return a.name = e.getAttribute("name"), a;
}
function Rt(e, t) {
  const a = da(e, t);
  if (a)
    return a.name = I(e), a.nArgs = Number(e.getAttribute("nArgs")), a;
}
function Io(e, t) {
  const a = Xo(e, t);
  if (a)
    return a.name = e.getAttribute("name"), a;
}
function Do(e, t) {
  const a = Co(e, t);
  if (a)
    return a.name = e.getAttribute("name"), a;
}
function oa(e, t) {
  const a = Eo(e, t);
  if (a)
    return a.name = e.getAttribute("name"), a;
}
function Ke(e) {
  return e.getAttribute("name") || void 0;
}
function sa(e) {
  return Ke(e) || I(e) || void 0;
}
function Oo(e) {
  return rt(e) || I(e) || void 0;
}
function ko(e) {
  return {
    name: e.getAttribute("name")
  };
}
function Mo(e, t) {
  return P({}, Br, e, t);
}
function No(e, t) {
  return [
    Number(e.getAttribute("minx")),
    Number(e.getAttribute("miny")),
    Number(e.getAttribute("maxx")),
    Number(e.getAttribute("maxy"))
  ];
}
function ia(e, t) {
  return P([], Gr, e, t);
}
function la(e, t) {
  return P([], Kr, e, t);
}
function ke(e, t) {
  const a = [];
  for (const n of e.children) {
    const l = n.tagName.split(":");
    a.push(l[l.length - 1]);
  }
  if (a.length)
    return a;
}
function vt(e, t) {
  return P({}, Or, e, t);
}
function nt(e, t) {
  return P({}, qr, e, t);
}
function Uo(e, t) {
  return P({}, Zr, e, t);
}
function Fo(e, t) {
  return $e(t) === se._110 ? ke(e) : P([], Hr, e, t);
}
function Wo(e, t) {
  let a;
  const n = $e(t);
  return n === se._100 ? a = Xr : n === se._110 ? a = Yr : a = Jr, P({}, a, e, t);
}
function Bo(e, t) {
  return P(
    {},
    $e(t) === se._100 ? xr : Qr,
    e,
    t
  );
}
function zo(e, t) {
  return P({}, eo, e, t);
}
function jo(e, t) {
  return P([], to, e, t);
}
function Go(e, t) {
  return P({}, ao, e, t);
}
function da(e, t) {
  return P({}, ro, e, t);
}
function Ko(e, t) {
  return P([], io, e, t);
}
function ua(e, t) {
  return P([], lo, e, t);
}
function ca(e, t) {
  return P({}, uo, e, t);
}
function qo(e, t) {
  return P([], co, e, t);
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
  return P([], oo, e, t);
}
function Xo(e, t) {
  return P({}, so, e, t);
}
function Pt(e) {
  const t = cn(e, !1).split(" ");
  if (t.length)
    return t.map((a) => Number(a));
}
function ma(e, t = ", ") {
  const a = I(e);
  if (!a)
    return;
  const n = a.split(t);
  if (!(!n || !n.length))
    return n;
}
function It(e) {
  return e.getAttribute("onlineResource");
}
function Qo(e, t, a) {
  return (
    /**
     * @param {Element} node Node.
     * @param {Array<*>} objectStack Object stack.
     */
    function(n, r) {
      const l = e.call(
        this,
        n,
        r
      );
      if (l !== void 0) {
        const i = (
          /** @type {!Object} */
          r[r.length - 1]
        ), d = n.localName;
        for (const c of Object.keys(l))
          i[d] && c in i[d] ? i[d][c] = { ...i[d][c], ...l[c] } : i[d] = l;
      }
    }
  );
}
async function xo(e, t) {
  return fetch(
    `${e}?SERVICE=WFS&REQUEST=DescribeFeatureType&VERSION=${t}`
  ).then((a) => a.text()).then((a) => new DOMParser().parseFromString(a, "application/xml")).then(
    (a) => {
      var n, r;
      return (r = (n = a.activeElement) == null ? void 0 : n.attributes.getNamedItem("targetNamespace")) == null ? void 0 : r.value;
    }
  );
}
async function es(e, t, a, n) {
  var c, u, f, p, S, b, C, N, M, F, O, z, E, X, _, K, le, fe, Se, W, me, j;
  const r = new Tr().read(t), l = await xo(a, r.version);
  function i(de) {
    const Ve = [];
    return de.forEach((Q) => {
      var we, q;
      const Ae = !!e.layers.hasKey(Q.Name), Ce = yt(
        new ue({
          coordinates: (we = Q.WGS84BoundingBox) != null && we.LowerCorner && ((q = Q.WGS84BoundingBox) != null && q.UpperCorner) ? [
            ...Q.WGS84BoundingBox.LowerCorner,
            ...Q.WGS84BoundingBox.UpperCorner
          ] : ue.WGS_84_EXTENT,
          projection: { epsg: 4326 }
        })
      ), pe = {
        actions: [],
        children: [],
        optionalParameters: n,
        name: Q.Name,
        title: Q.Title,
        attributions: { provider: r.ServiceProvider.ProviderName },
        type: T.WFS,
        url: a,
        namespace: l,
        description: Q.Abstract,
        keywordList: Q.Keywords,
        onlineResource: Q.MetadataUrl,
        extent: Ce
      };
      pe.actions.push(...ce(e, pe)), pe.isAddedToMap = Ae && !pe.children.length, Ve.push(pe);
    }), Ve;
  }
  const d = B({
    actions: [],
    name: a,
    title: ((c = r.ServiceIdentification) == null ? void 0 : c.Title) ?? pt(e, "WFSLayer"),
    accessConstraints: (u = r.ServiceIdentification) == null ? void 0 : u.AccessConstraints,
    description: (f = r.ServiceIdentification) == null ? void 0 : f.Abstract,
    fees: (p = r.ServiceIdentification) == null ? void 0 : p.Fees,
    keywordList: (S = r.ServiceIdentification) == null ? void 0 : S.Keywords,
    contact: {
      address: (C = (b = r.ServiceProvider) == null ? void 0 : b.ServiceContact) == null ? void 0 : C.ContactInfo.Address.AdministrativeArea,
      city: `${((M = (N = r.ServiceProvider) == null ? void 0 : N.ServiceContact) == null ? void 0 : M.ContactInfo.Address.PostalCode) ?? ""}${(O = (F = r.ServiceProvider) == null ? void 0 : F.ServiceContact) != null && O.ContactInfo.Address.PostalCode && ((E = (z = r.ServiceProvider) == null ? void 0 : z.ServiceContact) != null && E.ContactInfo.Address.City) ? " " : ""}${((_ = (X = r.ServiceProvider) == null ? void 0 : X.ServiceContact) == null ? void 0 : _.ContactInfo.Address.City) ?? ""}`,
      country: (le = (K = r.ServiceProvider) == null ? void 0 : K.ServiceContact) == null ? void 0 : le.ContactInfo.Address.Country,
      person: (Se = (fe = r.ServiceProvider) == null ? void 0 : fe.ServiceContact) == null ? void 0 : Se.IndividualName,
      position: (me = (W = r.ServiceProvider) == null ? void 0 : W.ServiceContact) == null ? void 0 : me.PositionName,
      organization: (j = r.ServiceProvider) == null ? void 0 : j.ProviderName
    },
    type: T.WFS,
    url: a,
    isRootElement: !0,
    children: i(
      Array.isArray(r.FeatureTypeList) ? r.FeatureTypeList : r.FeatureTypeList.FeatureType
    )
  });
  return d.actions.push(...ce(e, d)), d;
}
async function ts(e, t) {
  const a = Pe(t, T.WFS), { parameters: n, optionalParameters: r } = ft(
    t,
    "WFS"
  );
  return fetch(`${a}?${n}`).then((l) => l.text()).then(
    (l) => es(e, l, a, r)
  );
}
function as(e, t) {
  var l, i;
  const a = e.name.split(":"), n = a[0], r = a[1];
  return new Ma({
    url: Ht(e.url, e.optionalParameters),
    name: e.name,
    extent: (l = e.extent) == null ? void 0 : l.toJSON(),
    featureType: r,
    featurePrefix: n,
    featureNS: e.namespace ?? "",
    projection: (i = e.extent) == null ? void 0 : i.projection,
    properties: { title: e.title, attributions: D(e.attributions) },
    zIndex: t
  });
}
function ns(e, t, a, n) {
  var c, u, f, p, S, b, C, N, M, F, O, z, E, X, _, K, le, fe, Se, W, me;
  const r = new pn().read(t), l = r.Contents.TileMatrixSet.filter(
    (j) => j.SupportedCRS.includes("3857")
  ).sort((j, de) => de.TileMatrix.length - j.TileMatrix.length)[0] ?? r.Contents.TileMatrixSet[0];
  function i(j) {
    var Ae, Ce, pe, we, q;
    const de = !!e.layers.hasKey(j.Identifier), Ve = yt(
      new ue({
        coordinates: (Ae = j.WGS84BoundingBox) != null && Ae.length ? j.WGS84BoundingBox : ue.WGS_84_EXTENT,
        projection: { epsg: 4326 }
      })
    ), Q = {
      actions: [],
      children: [],
      name: j.Identifier,
      title: j.Title,
      optionalParameters: n,
      isAddedToMap: de,
      type: T.WMTS,
      url: ((pe = (Ce = j.ResourceURL) == null ? void 0 : Ce.find((x) => x.resourceType === "tile")) == null ? void 0 : pe.template) ?? a,
      description: j.Abstract,
      keywordList: [],
      attributions: {
        url: (we = r.ServiceProvider) == null ? void 0 : we.ProviderSite,
        provider: (q = r.ServiceProvider) == null ? void 0 : q.ProviderName
      },
      formats: j.Format,
      extent: Ve,
      defaultTileMatrixSetId: l.Identifier,
      matrixSetIds: j.TileMatrixSetLink.map((x) => x.TileMatrixSet),
      styles: j.Style.map((x) => {
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
    name: a,
    title: ((c = r.ServiceIdentification) == null ? void 0 : c.Title) ?? pt(e, "WMTSLayer"),
    accessConstraints: (u = r.ServiceIdentification) == null ? void 0 : u.AccessConstraints,
    description: (f = r.ServiceIdentification) == null ? void 0 : f.Abstract,
    fees: (p = r.ServiceIdentification) == null ? void 0 : p.Fees,
    keywordList: [],
    contact: {
      address: (b = (S = r.ServiceProvider) == null ? void 0 : S.ServiceContact) == null ? void 0 : b.ContactInfo.Address.DeliveryPoint,
      city: `${((N = (C = r.ServiceProvider) == null ? void 0 : C.ServiceContact) == null ? void 0 : N.ContactInfo.Address.PostalCode) ?? ""}${(F = (M = r.ServiceProvider) == null ? void 0 : M.ServiceContact) != null && F.ContactInfo.Address.PostalCode && ((z = (O = r.ServiceProvider) == null ? void 0 : O.ServiceContact) != null && z.ContactInfo.Address.City) ? " " : ""}${((X = (E = r.ServiceProvider) == null ? void 0 : E.ServiceContact) == null ? void 0 : X.ContactInfo.Address.City) ?? ""}`,
      country: (K = (_ = r.ServiceProvider) == null ? void 0 : _.ServiceContact) == null ? void 0 : K.ContactInfo.Address.Country,
      person: (fe = (le = r.ServiceProvider) == null ? void 0 : le.ServiceContact) == null ? void 0 : fe.IndividualName,
      position: (W = (Se = r.ServiceProvider) == null ? void 0 : Se.ServiceContact) == null ? void 0 : W.PositionName,
      organization: (me = r.ServiceProvider) == null ? void 0 : me.ProviderName
    },
    type: T.WMTS,
    url: a,
    isRootElement: !0,
    children: r.Contents.Layer.map((j) => i(j))
  });
  return d.actions.push(...ce(e, d)), d;
}
async function rs(e, t) {
  const a = Pe(t, T.WMTS), { parameters: n, optionalParameters: r } = ft(
    t,
    "WMTS"
  );
  return fetch(`${a}?${n}`).then((l) => l.text()).then(
    (l) => ns(e, l, a, r)
  );
}
function os(e, t) {
  var a, n, r, l, i;
  return new Na({
    url: Ht(e.url, e.optionalParameters),
    name: e.name,
    layer: e.name,
    tileMatrixSetID: e.defaultTileMatrixSetId,
    format: (a = e.formats) == null ? void 0 : a[0],
    wmtsStyle: ((r = (n = e.styles) == null ? void 0 : n.find((d) => d.isDefault)) == null ? void 0 : r.name) ?? ((l = e.styles) == null ? void 0 : l[0].name),
    matrixIds: e.matrixSetIds ?? [],
    extent: (i = e.extent) == null ? void 0 : i.toJSON(),
    properties: { title: e.title, attributions: D(e.attributions) },
    tileSize: [256, 256],
    zIndex: t
  });
}
function ss(e, t, a, n) {
  const r = B({
    actions: [],
    children: [],
    name: a,
    title: n,
    type: T.GEOJSON,
    url: t,
    isRootElement: !0
  });
  return r.actions = ce(e, r), r;
}
function is(e) {
  return new Wt({
    url: e.url,
    name: e.name,
    projection: new zt({ epsg: 4326 }),
    properties: { title: e.title }
  });
}
function ls(e, t, a, n) {
  const r = B({
    actions: [],
    children: [],
    name: a,
    title: n,
    type: T.POINTCLOUD,
    url: t,
    isRootElement: !0
  });
  return r.actions.push(
    ...ce(e, r)
  ), r;
}
function ds(e) {
  return new Ua({
    url: e.url,
    name: e.name,
    activeOnStartup: !0,
    properties: { title: e.title }
  });
}
function us(e, t, a, n) {
  const r = B({
    actions: [],
    children: [],
    name: a,
    title: n,
    type: T.CZML,
    url: t,
    isRootElement: !0
  });
  return r.actions.push(...ce(e, r)), r;
}
function cs(e) {
  return new Fa({
    url: e.url,
    name: e.name,
    properties: { title: e.title }
  });
}
async function ht(e, t, a, n, r) {
  const l = r || pt(e, a), i = n || l;
  switch (a) {
    case T.CESIUM_TILESET:
      return vr(e, t, i, l);
    case T.CZML:
      return us(e, t, i, l);
    case T.GEOJSON:
      return ss(e, t, i, l);
    case T.POINTCLOUD:
      return ls(e, t, i, l);
    case T.TERRAIN:
      return br(e, t, i, l);
    case T.WFS:
      return ts(e, t);
    case T.WMS:
      return yr(e, t);
    case T.WMTS:
      return rs(e, t);
    default:
      throw new Error(e.vueI18n.t("dynamicLayer.errors.fetchingSource"));
  }
}
function ms(e, t) {
  switch (e.type) {
    case T.CESIUM_TILESET:
      return hr(e);
    case T.CZML:
      return cs(e);
    case T.GEOJSON:
      return is(e);
    case T.POINTCLOUD:
      return ds(e);
    case T.TERRAIN:
      return Sr(e);
    case T.WFS:
      return as(e, t);
    case T.WMS:
      return gr(e, t);
    case T.WMTS:
      return os(e, t);
    default:
      throw ge(k).error("dynamicLayer.errors.layerCreation"), new Error();
  }
}
const ps = /* @__PURE__ */ H({
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
    const t = e, a = w(), n = ha(
      ae(() => a.value),
      ae(() => ""),
      ae(() => t.title)
    );
    return (r, l) => (g(), A(
      "div",
      {
        ref_key: "titleParent",
        ref: a,
        class: Ba(["title-parent pr-2 vcs-treeview-title w-100", { active: e.active }])
      },
      [
        U(
          "span",
          null,
          y(e.title),
          1
          /* TEXT */
        ),
        Ee(n) ? (g(), L(Ee(Za), {
          key: 0,
          activator: "parent"
        }, {
          default: s(() => [
            h(
              y(Ee(n)),
              1
              /* TEXT */
            )
          ]),
          _: 1
          /* STABLE */
        })) : R("v-if", !0)
      ],
      2
      /* CLASS */
    ));
  }
}), J = (e, t) => {
  const a = e.__vccOpts || e;
  for (const [n, r] of t)
    a[n] = r;
  return a;
}, pa = /* @__PURE__ */ J(ps, [["__scopeId", "data-v-2071794a"]]), fs = H({
  name: "WxsInformations",
  components: {
    VChip: Gt,
    VRow: Y,
    VcsExtent: Je,
    VcsLabel: ie
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
}), ys = {
  key: 1,
  class: "w-100"
}, gs = {
  key: 2,
  class: "w-100"
}, vs = {
  key: 3,
  class: "w-100"
}, hs = {
  key: 4,
  class: "w-100"
}, bs = {
  key: 5,
  class: "w-100"
}, Ss = /* @__PURE__ */ U(
  "br",
  null,
  null,
  -1
  /* HOISTED */
), ws = ["href"], Ts = {
  key: 6,
  class: "w-100"
}, Ls = { key: 0 }, As = { key: 1 }, Cs = { key: 2 };
function Es(e, t, a, n, r, l) {
  var f;
  const i = m("v-chip"), d = m("v-row"), c = m("VcsLabel"), u = m("VcsExtent");
  return g(), A(
    _e,
    null,
    [
      (f = e.item.keywordList) != null && f.length ? (g(), L(d, {
        key: 0,
        "no-gutters": "",
        class: "w-100"
      }, {
        default: s(() => [
          (g(!0), A(
            _e,
            null,
            Be(e.item.keywordList, (p) => (g(), L(
              i,
              {
                key: p,
                label: "",
                size: "x-small",
                color: "primary",
                class: "ma-1"
              },
              {
                default: s(() => [
                  h(
                    y(p),
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
      })) : R("v-if", !0),
      e.item.description ? (g(), A("span", ys, [
        o(d, { "no-gutters": "" }, {
          default: s(() => [
            o(c, {
              "html-for": "description",
              class: "font-weight-bold"
            }, {
              default: s(() => [
                h(
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
            h(
              y(e.item.description),
              1
              /* TEXT */
            )
          ]),
          _: 1
          /* STABLE */
        })
      ])) : R("v-if", !0),
      e.item.accessConstraints ? (g(), A("span", gs, [
        o(d, { "no-gutters": "" }, {
          default: s(() => [
            o(c, {
              "html-for": "accessConstraints",
              class: "font-weight-bold"
            }, {
              default: s(() => [
                h(
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
            h(
              y(e.item.accessConstraints),
              1
              /* TEXT */
            )
          ]),
          _: 1
          /* STABLE */
        })
      ])) : R("v-if", !0),
      e.item.fees ? (g(), A("span", vs, [
        o(d, { "no-gutters": "" }, {
          default: s(() => [
            o(c, {
              "html-for": "fees",
              class: "font-weight-bold"
            }, {
              default: s(() => [
                h(
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
            h(
              y(e.item.fees),
              1
              /* TEXT */
            )
          ]),
          _: 1
          /* STABLE */
        })
      ])) : R("v-if", !0),
      e.item.extent ? (g(), A("span", hs, [
        o(d, { "no-gutters": "" }, {
          default: s(() => [
            o(c, {
              "html-for": "extent",
              class: "font-weight-bold"
            }, {
              default: s(() => [
                h(
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
            o(u, {
              disabled: "",
              "model-value": e.item.extent.toJSON()
            }, null, 8, ["model-value"])
          ]),
          _: 1
          /* STABLE */
        })
      ])) : R("v-if", !0),
      e.checkAnyProperty(e.item.attributions) ? (g(), A("span", bs, [
        o(d, { "no-gutters": "" }, {
          default: s(() => [
            o(c, {
              "html-for": "attributions",
              class: "font-weight-bold"
            }, {
              default: s(() => [
                h(
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
            var p, S;
            return [
              U("div", null, [
                h(
                  y((p = e.item.attributions) == null ? void 0 : p.provider) + " ",
                  1
                  /* TEXT */
                ),
                Ss,
                (S = e.item.attributions) != null && S.url ? (g(), A("a", {
                  key: 0,
                  href: e.item.attributions.url,
                  target: "_blank"
                }, y(e.$t("dynamicLayer.info.website")), 9, ws)) : R("v-if", !0)
              ])
            ];
          }),
          _: 1
          /* STABLE */
        })
      ])) : R("v-if", !0),
      e.checkAnyProperty(e.item.contact) ? (g(), A("span", Ts, [
        o(d, { "no-gutters": "" }, {
          default: s(() => [
            o(c, {
              "html-for": "contact",
              class: "font-weight-bold"
            }, {
              default: s(() => [
                h(
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
            var p, S, b, C, N, M, F, O, z, E, X, _, K;
            return [
              U("p", null, [
                h(
                  y((p = e.item.contact) == null ? void 0 : p.person) + y((S = e.item.contact) != null && S.person && ((b = e.item.contact) != null && b.organization) ? " - " : "") + y((C = e.item.contact) == null ? void 0 : C.organization) + " ",
                  1
                  /* TEXT */
                ),
                (N = e.item.contact) != null && N.organization ? (g(), A("br", Ls)) : R("v-if", !0),
                h(
                  " " + y((M = e.item.contact) == null ? void 0 : M.position) + " ",
                  1
                  /* TEXT */
                ),
                (F = e.item.contact) != null && F.position ? (g(), A("br", As)) : R("v-if", !0),
                h(
                  " " + y((O = e.item.contact) == null ? void 0 : O.address) + " ",
                  1
                  /* TEXT */
                ),
                (z = e.item.contact) != null && z.address ? (g(), A("br", Cs)) : R("v-if", !0),
                h(
                  " " + y((E = e.item.contact) == null ? void 0 : E.city) + y((X = e.item.contact) != null && X.city && ((_ = e.item.contact) != null && _.country) ? ", " : "") + y((K = e.item.contact) == null ? void 0 : K.country),
                  1
                  /* TEXT */
                )
              ])
            ];
          }),
          _: 1
          /* STABLE */
        })
      ])) : R("v-if", !0)
    ],
    64
    /* STABLE_FRAGMENT */
  );
}
const _s = /* @__PURE__ */ J(fs, [["render", Es]]), $s = { class: "h-100" }, Vs = { class: "h-100 overflow-y-auto pb-2" }, Rs = {
  key: 1,
  class: "pa-1"
}, Ps = /* @__PURE__ */ H({
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
    return (t, a) => (g(), A("div", $s, [
      o(Ee(Y), {
        "no-gutters": "",
        class: "title pt-1"
      }, {
        default: s(() => [
          h(
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
          h(
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
          U("div", Vs, [
            Ee(Jt)(e.item) ? (g(), L(_s, {
              key: 0,
              item: e.item
            }, null, 8, ["item"])) : (g(), A(
              "span",
              Rs,
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
}), fa = /* @__PURE__ */ J(Ps, [["__scopeId", "data-v-43a74f6a"]]), Is = H({
  name: "WebdataWindow",
  components: {
    VCard: ze,
    VCardTitle: Ja,
    VCol: oe,
    VDivider: Xe,
    VRow: Y,
    VSpacer: Ha,
    VcsButton: ut,
    VcsFormButton: We,
    VcsLabel: ie,
    VcsSelect: Fe,
    VcsTextField: be,
    VcsTreeview: Mt,
    DlTreeviewTitle: pa,
    VcsTreeviewSearchbar: kt,
    WebdataInformations: fa
  },
  setup() {
    const e = re("vcsApp"), t = e.plugins.getByKey(k), { added: a, selected: n, opened: r } = t.webdata, l = w(""), i = w(!1), d = it(G.WEBDATA), c = w(t.config.webdata.defaultType), u = w(t.config.webdata.defaultUrl), f = w(!1);
    return {
      newSourceType: c,
      newSourceUrl: u,
      added: a,
      opened: r,
      selected: n,
      search: l,
      filterActive: f,
      availableTypes: d,
      isNewSourceLoading: i,
      getNonAddedChildrenLength: lt,
      addLayer: De.bind(null, e),
      addNested: na.bind(null, e),
      removeLayer: Oe.bind(null, e),
      removeSource: ra.bind(null, e),
      editParameters(p) {
        t.activeTab.value = G.ADDED, t.addedSelected.value = p;
      },
      filter(p) {
        return Un(p, (S) => !!S.isAddedToMap);
      },
      getSubtitle(p) {
        return Jt(p) ? p.name : Pe(p.url, p.type);
      },
      async addSource() {
        if (!(!c.value || !u.value || i.value)) {
          f.value = !1;
          try {
            i.value = !0;
            const p = Pe(
              u.value,
              c.value
            );
            if (a.value.some((b) => b.url === p)) {
              e.notifier.add({
                type: ye.ERROR,
                message: "dynamicLayer.errors.urlAlreadyAdded"
              }), i.value = !1;
              return;
            }
            const S = await ht(
              e,
              u.value,
              c.value
            );
            n.value = S, r.value = [S.name], a.value.push(S);
          } catch (p) {
            e.notifier.add({
              type: ye.ERROR,
              message: p
            });
          }
          i.value = !1;
        }
      }
    };
  }
}), Ds = {
  key: 0,
  class: "h-100"
}, Os = { class: "d-flex justify-end gc-2 pa-2 w-100" }, ks = {
  key: 3,
  class: "d-flex gc-2"
}, Ms = { class: "d-flex justify-end pt-3" };
function Ns(e, t, a, n, r, l) {
  const i = m("VcsTreeviewSearchbar"), d = m("v-col"), c = m("VcsButton"), u = m("v-row"), f = m("DlTreeviewTitle"), p = m("VcsTreeview"), S = m("v-divider"), b = m("WebdataInformations"), C = m("VDivider"), N = m("VcsFormButton"), M = m("VSpacer"), F = m("v-card-title"), O = m("VcsLabel"), z = m("VcsSelect"), E = m("VcsTextField"), X = m("v-card");
  return g(), L(u, {
    "no-gutters": "",
    class: "h-100"
  }, {
    default: s(() => [
      o(d, {
        cols: "4",
        class: "h-100"
      }, {
        default: s(() => [
          o(u, { "no-gutters": "" }, {
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
                  o(c, {
                    icon: "mdi-filter",
                    tooltip: "dynamicLayer.actions.filter.showAddedOnly",
                    active: e.filterActive,
                    onClick: t[1] || (t[1] = (_) => e.filterActive = !e.filterActive)
                  }, null, 8, ["active"]),
                  o(c, {
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
          o(u, {
            "no-gutters": "",
            style: { height: "486px" }
          }, {
            default: s(() => [
              o(p, {
                opened: e.opened,
                "onUpdate:opened": t[3] || (t[3] = (_) => e.opened = _),
                class: "treeview h-100 w-100 overflow-y-auto",
                items: e.filterActive ? e.filter(e.added) : e.added,
                search: e.search
              }, {
                title: s(({ item: _ }) => [
                  o(f, {
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
      o(S, { vertical: "" }),
      o(d, {
        cols: "8",
        class: "h-100"
      }, {
        default: s(() => [
          e.selected ? (g(), A("span", Ds, [
            (g(), L(b, {
              key: e.selected.name,
              item: e.selected,
              title: e.selected.title,
              subtitle: e.getSubtitle(e.selected),
              "start-open": "",
              class: "button-margin"
            }, null, 8, ["item", "title", "subtitle"])),
            o(u, {
              "no-gutters": "",
              class: "fixed-bottom d-flex justify-end"
            }, {
              default: s(() => [
                o(C),
                U("span", Os, [
                  e.selected.children.length ? (g(), L(N, {
                    key: 0,
                    variant: "filled",
                    disabled: !e.getNonAddedChildrenLength(e.selected),
                    onClick: t[4] || (t[4] = (_) => e.addNested(e.selected))
                  }, {
                    default: s(() => [
                      h(
                        y(e.$t("dynamicLayer.actions.layer.addAll")) + " " + y(e.getNonAddedChildrenLength(e.selected) ? `(${e.getNonAddedChildrenLength(e.selected)})` : ""),
                        1
                        /* TEXT */
                      )
                    ]),
                    _: 1
                    /* STABLE */
                  }, 8, ["disabled"])) : R("v-if", !0),
                  e.selected.isRootElement ? (g(), L(N, {
                    key: 1,
                    onClick: t[5] || (t[5] = (_) => e.removeSource(e.selected))
                  }, {
                    default: s(() => [
                      h(
                        y(e.$t("dynamicLayer.actions.source.delete")),
                        1
                        /* TEXT */
                      )
                    ]),
                    _: 1
                    /* STABLE */
                  })) : R("v-if", !0),
                  !e.selected.children.length && e.selected.isAddedToMap ? (g(), L(M, { key: 2 })) : R("v-if", !0),
                  !e.selected.children.length && e.selected.isAddedToMap ? (g(), A("span", ks, [
                    o(N, {
                      variant: "filled",
                      onClick: t[6] || (t[6] = (_) => e.editParameters(e.selected))
                    }, {
                      default: s(() => [
                        h(
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
                        h(
                          y(e.$t("dynamicLayer.actions.layer.remove")),
                          1
                          /* TEXT */
                        )
                      ]),
                      _: 1
                      /* STABLE */
                    })
                  ])) : e.selected.children.length ? R("v-if", !0) : (g(), L(N, {
                    key: 4,
                    variant: "filled",
                    onClick: t[8] || (t[8] = (_) => e.addLayer(e.selected))
                  }, {
                    default: s(() => [
                      h(
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
          ])) : (g(), L(u, {
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
                          h(
                            y(e.$t("dynamicLayer.webdata.add.title")),
                            1
                            /* TEXT */
                          )
                        ]),
                        _: 1
                        /* STABLE */
                      }),
                      o(u, {
                        "no-gutters": "",
                        class: "w-100 pt-3"
                      }, {
                        default: s(() => [
                          o(O, { "html-for": "type" }, {
                            default: s(() => [
                              h(
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
                      o(u, {
                        "no-gutters": "",
                        class: "w-100"
                      }, {
                        default: s(() => [
                          o(z, {
                            id: "type",
                            modelValue: e.newSourceType,
                            "onUpdate:modelValue": t[9] || (t[9] = (_) => e.newSourceType = _),
                            items: e.availableTypes
                          }, null, 8, ["modelValue", "items"])
                        ]),
                        _: 1
                        /* STABLE */
                      }),
                      o(u, {
                        "no-gutters": "",
                        class: "w-100 pt-3"
                      }, {
                        default: s(() => [
                          o(O, { "html-for": "url" }, {
                            default: s(() => [
                              h(
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
                      o(u, {
                        "no-gutters": "",
                        class: "w-100"
                      }, {
                        default: s(() => [
                          o(E, {
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
                      U("span", Ms, [
                        o(N, {
                          variant: "filled",
                          loading: e.isNewSourceLoading,
                          disabled: !e.newSourceType || !e.newSourceUrl || e.isNewSourceLoading,
                          onClick: e.addSource
                        }, {
                          default: s(() => [
                            h(
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
const Us = /* @__PURE__ */ J(Is, [["render", Ns], ["__scopeId", "data-v-f8020a1c"]]), Fs = H({
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
    const a = w("");
    return {
      filteredItems: ae(
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
function Ws(e, t, a, n, r, l) {
  const i = m("VcsTextField"), d = m("VcsButton"), c = m("v-row"), u = m("VcsSelect"), f = m("v-col");
  return g(), L(c, {
    "no-gutters": "",
    class: "w-100"
  }, {
    default: s(() => [
      o(f, {
        cols: e.selection.length ? 11 : 12
      }, {
        default: s(() => [
          o(u, {
            "item-value": "id",
            items: e.filteredItems,
            label: e.facet.title,
            "model-value": e.selection,
            "menu-props": { origin: "overlap", modelValue: e.opened },
            disabled: !!e.selection.length,
            onClick: t[2] || (t[2] = (p) => e.$emit("toggleFacet", e.facet.id)),
            "onUpdate:modelValue": e.apply
          }, za({
            _: 2
            /* DYNAMIC */
          }, [
            e.facet.values.length > 1 ? {
              name: "prepend-item",
              fn: s(() => [
                o(c, {
                  "no-gutters": "",
                  class: "px-2 pt-1"
                }, {
                  default: s(() => [
                    o(i, {
                      modelValue: e.search,
                      "onUpdate:modelValue": t[0] || (t[0] = (p) => e.search = p),
                      autofocus: "",
                      placeholder: `${e.$t("dynamicLayer.common.filter")} ${e.facet.title}`,
                      clearable: ""
                    }, null, 8, ["modelValue", "placeholder"]),
                    o(d, {
                      class: "pl-2 pt-2",
                      icon: "mdi-window-close",
                      tooltip: e.$t("dynamicLayer.actions.cancel"),
                      onClick: t[1] || (t[1] = (p) => e.$emit("toggleFacet", ""))
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
      e.selection.length ? (g(), L(f, {
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
      })) : R("v-if", !0)
    ]),
    _: 1
    /* STABLE */
  });
}
const Bs = /* @__PURE__ */ J(Fs, [["render", Ws]]);
function Dt(e) {
  return e.map((t) => ({ name: t.id, title: t.title }));
}
const zs = H({
  name: "DatasetsList",
  components: {
    VCard: ze,
    VCol: oe,
    VIcon: Qa,
    VMenu: Xa,
    VPagination: Ya,
    VRow: Y,
    VcsActionButtonList: Ut,
    VcsList: Nt,
    VcsButton: ut,
    VcsTreeviewSearchbar: kt,
    CatalogueFilter: Bs
  },
  props: {
    source: {
      type: Object,
      required: !0
    }
  },
  emits: ["select"],
  setup(e, { emit: t }) {
    var E, X;
    const a = re("vcsApp"), n = a.plugins.getByKey(k), { locale: r } = a, { itemsPerPage: l } = n.config.catalogues, i = w(e.source.data), d = w(""), c = w(!1), u = w(!1), f = w((E = At[e.source.type]) == null ? void 0 : E[0]), p = (X = At[e.source.type]) == null ? void 0 : X.map(
      (_) => B({
        active: ae(() => f.value === _),
        name: `dynamicLayer.catalogues.sortBy.${_}`,
        callback: () => {
          f.value = _;
        }
      })
    ), S = w(Dt(i.value.datasets)), b = w(1), C = w(!0), N = ae({
      get: () => [],
      set(_) {
        const K = _ != null && _[0] ? i.value.datasets.find((le) => le.id === _[0].name) : void 0;
        t("select", K);
      }
    }), M = Object.fromEntries(
      i.value.facets.map((_) => [_.id, []])
    ), F = w(), O = w(!1);
    async function z(_ = !1, K = 1) {
      u.value = !0, _ || (b.value = 1);
      const le = await xt(
        e.source.type,
        e.source.url,
        l,
        r,
        b.value - 1,
        d.value ?? "",
        f.value,
        Object.fromEntries(
          Object.entries(M).filter((fe) => fe[1].length > 0)
        )
      ).catch(() => {
        O.value = !0, b.value = K, a.notifier.add({
          type: ye.ERROR,
          message: `${a.vueI18n.t("dynamicLayer.errors.fetchingCatalogue")} ${e.source.url}`
        });
      }).finally(() => {
        u.value = !1;
      });
      le && (i.value = le, S.value = Dt(i.value.datasets), N.value = void 0);
    }
    return te(f, async () => {
      await z();
    }), te(b, async (_, K) => {
      if (O.value) {
        O.value = !1;
        return;
      }
      await z(!0, K);
    }), {
      locale: a.locale,
      data: i,
      page: b,
      itemsPerPage: l,
      loading: u,
      search: d,
      searchLoading: c,
      sortByActions: p,
      showDatasetDescription: C,
      datasets: S,
      arraySelected: N,
      filters: M,
      openedFacet: F,
      async updateFilters(_, K) {
        M[_] = K, await z();
      },
      async updateSearch() {
        c.value = !0, await z(), c.value = !1;
      }
    };
  }
}), js = { class: "d-block h-100" }, Gs = {
  key: 0,
  class: "h-100 d-flex align-center justify-center"
};
function Ks(e, t, a, n, r, l) {
  const i = m("VcsTreeviewSearchbar"), d = m("VcsActionButtonList"), c = m("CatalogueFilter"), u = m("v-row"), f = m("v-card"), p = m("v-menu"), S = m("VcsButton"), b = m("v-col"), C = m("v-icon"), N = m("VcsList"), M = m("VPagination");
  return g(), A("span", js, [
    o(u, { "no-gutters": "" }, {
      default: s(() => [
        o(b, {
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
              (F = e.sortByActions) != null && F.length ? (g(), L(d, {
                key: 0,
                class: "px-1",
                actions: e.sortByActions,
                button: "VcsButton",
                "overflow-icon": "mdi-sort",
                "overflow-count": 0
              }, null, 8, ["actions"])) : R("v-if", !0),
              e.data.facets.length ? (g(), L(S, {
                key: 1,
                class: "pl-2",
                active: Object.values(e.filters).some((O) => O.length),
                icon: "mdi-filter",
                tooltip: e.$t("dynamicLayer.common.filter")
              }, {
                default: s(() => [
                  o(p, {
                    activator: "parent",
                    "close-on-content-click": !1,
                    "menu-props": { closeOnContentClick: !0 },
                    location: "end"
                  }, {
                    default: s(() => [
                      o(f, { "min-width": "300" }, {
                        default: s(() => [
                          (g(!0), A(
                            _e,
                            null,
                            Be(e.data.facets, (O) => (g(), L(
                              u,
                              {
                                key: O.id,
                                "no-gutters": "",
                                class: "px-2 py-1"
                              },
                              {
                                default: s(() => [
                                  o(c, {
                                    facet: O,
                                    selection: e.filters[O.id],
                                    opened: e.openedFacet === O.id,
                                    onFilter: e.updateFilters,
                                    onToggleFacet: t[1] || (t[1] = (z) => e.openedFacet = z)
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
              }, 8, ["active", "tooltip"])) : R("v-if", !0)
            ];
          }),
          _: 1
          /* STABLE */
        })
      ]),
      _: 1
      /* STABLE */
    }),
    e.loading ? (g(), A("div", Gs, [
      o(C, {
        size: "2em",
        color: "primary",
        icon: "$vcsProgress"
      })
    ])) : (g(), L(u, {
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
    o(u, {
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
const qs = /* @__PURE__ */ J(zs, [["render", Ks], ["__scopeId", "data-v-0027e509"]]), Zs = H({
  name: "DistributionDetails",
  components: {
    VCard: ze,
    VDialog: Kt,
    VRow: Y,
    VcsFormButton: We,
    VcsLabel: ie,
    VcsTreeview: Mt,
    DlTreeviewTitle: pa
  },
  props: {
    columns: { type: Array, required: !0 },
    distribution: {
      type: Object,
      required: !0
    }
  },
  setup(e) {
    const t = re("vcsApp"), a = t.plugins.getByKey(k), n = w(!1), r = w();
    async function l(i) {
      n.value = !0;
      const d = await ur(
        t,
        i.accessUrl,
        i.type,
        i.id,
        i.title,
        !!a.state.entry
      );
      n.value = !1, r.value = d;
    }
    return a.state.entry && a.state.entry.distrib === e.distribution.id && l(e.distribution).then(() => {
      delete a.state.entry;
    }).catch((i) => {
      t.notifier.add({
        type: ye.ERROR,
        message: `${t.vueI18n.t("dynamicLayer.errors.addingLayer")} ${e.distribution.title}: ${String(i)}`
      });
    }), {
      plugin: a,
      loading: n,
      chooseLayerOfItem: r,
      addToMap: l,
      addNbs: lr.bind(null, t)
    };
  }
}), Hs = ["colspan"], Js = {
  "no-gutters": "",
  class: "d-flex justify-end gc-2 font-italic"
}, Ys = { key: 0 }, Xs = { class: "w-100 d-inline-block text-break" }, Qs = { class: "d-flex gc-2 justify-end py-2" }, xs = { key: 1 }, ei = { class: "pa-2" }, ti = { key: 0 }, ai = { class: "font-italic" }, ni = { key: 2 };
function ri(e, t, a, n, r, l) {
  const i = m("VcsLabel"), d = m("v-row"), c = m("VcsFormButton"), u = m("DlTreeviewTitle"), f = m("VcsTreeview"), p = m("v-card"), S = m("v-dialog");
  return g(), A("tr", null, [
    U("td", {
      colspan: e.columns.length
    }, [
      U(
        "span",
        Js,
        " id: " + y(e.distribution.id),
        1
        /* TEXT */
      ),
      e.distribution.description ? (g(), A("span", Ys, [
        o(d, { "no-gutters": "" }, {
          default: s(() => [
            o(i, {
              "html-for": "description",
              class: "font-weight-bold"
            }, {
              default: s(() => [
                h(
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
              Xs,
              y(e.distribution.description),
              1
              /* TEXT */
            )
          ]),
          _: 1
          /* STABLE */
        })
      ])) : R("v-if", !0),
      U("div", Qs, [
        e.distribution.downloadUrl ? (g(), L(c, {
          key: 0,
          download: "",
          href: e.distribution.downloadUrl,
          target: "_blank"
        }, {
          default: s(() => [
            h(
              y(e.$t("dynamicLayer.actions.download")),
              1
              /* TEXT */
            )
          ]),
          _: 1
          /* STABLE */
        }, 8, ["href"])) : R("v-if", !0),
        e.distribution.accessUrl ? (g(), A("span", xs, [
          e.distribution.type ? (g(), L(c, {
            key: 1,
            variant: "filled",
            loading: e.loading,
            onClick: t[0] || (t[0] = (b) => e.addToMap(e.distribution))
          }, {
            default: s(() => [
              h(
                y(e.$t("dynamicLayer.actions.add")),
                1
                /* TEXT */
              )
            ]),
            _: 1
            /* STABLE */
          }, 8, ["loading"])) : (g(), L(c, {
            key: 0,
            variant: "filled",
            target: "_blank",
            href: e.distribution.accessUrl
          }, {
            default: s(() => [
              h(
                y(e.$t("dynamicLayer.actions.access")),
                1
                /* TEXT */
              )
            ]),
            _: 1
            /* STABLE */
          }, 8, ["href"])),
          o(S, {
            "model-value": !!e.chooseLayerOfItem,
            width: "400",
            onAfterLeave: t[1] || (t[1] = (b) => e.chooseLayerOfItem = void 0)
          }, {
            default: s(() => [
              o(p, null, {
                default: s(() => [
                  U("span", ei, [
                    h(
                      y(e.$t("dynamicLayer.catalogues.chooseLayersToAdd")) + " ",
                      1
                      /* TEXT */
                    ),
                    e.distribution.title ? (g(), A("p", ti, [
                      h(
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
                      h(". ")
                    ])) : R("v-if", !0)
                  ]),
                  o(f, {
                    "show-searchbar": "",
                    items: [e.chooseLayerOfItem],
                    "open-all": "",
                    class: "treeview"
                  }, {
                    title: s(({ item: b }) => [
                      o(u, {
                        title: b.title
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
        ])) : e.distribution.feature ? (g(), A("span", ni, [
          o(c, {
            variant: "filled",
            loading: e.loading,
            onClick: t[2] || (t[2] = (b) => e.addNbs(e.distribution))
          }, {
            default: s(() => [
              h(
                y(e.$t("dynamicLayer.actions.add")),
                1
                /* TEXT */
              )
            ]),
            _: 1
            /* STABLE */
          }, 8, ["loading"])
        ])) : R("v-if", !0)
      ])
    ], 8, Hs)
  ]);
}
const oi = /* @__PURE__ */ J(Zs, [["render", ri], ["__scopeId", "data-v-6a35c22b"]]);
function si(e = []) {
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
  return e.some((a) => a.format) && t.push({
    title: "dynamicLayer.common.format",
    value: (a) => a.format ?? "",
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
const ii = H({
  name: "DatasetDetails",
  components: {
    VChip: Gt,
    VRow: Y,
    VcsDataTable: ba,
    VcsFormSection: Ye,
    VcsLabel: ie,
    DistributionDetails: oi
  },
  props: {
    dataset: {
      type: Object,
      required: !0
    }
  },
  setup(e) {
    const t = re("vcsApp"), a = t.plugins.getByKey(k), { expandedDistributionIds: n } = a.catalogues, { locale: r } = t, l = w(e.dataset.distributions ?? []), i = w(si(l.value)), d = w(
      e.dataset.keywords && e.dataset.keywords.length <= 4
    );
    return {
      expandedDistributionIds: n,
      locale: r,
      distributions: l,
      headers: i,
      showAllKeywords: d
    };
  }
}), li = { class: "py-1" }, di = { class: "text-truncate pr-1" }, ui = { class: "font-italic" }, ci = ["href"], mi = {
  key: 1,
  class: "text-decoration-underline"
}, pi = { class: "text-truncate pr-1" }, fi = { class: "font-italic" }, yi = ["href"], gi = {
  key: 1,
  class: "text-decoration-underline"
}, vi = { class: "text-truncate pr-1" }, hi = { class: "font-italic" }, bi = ["href"], Si = {
  key: 1,
  class: "text-decoration-underline"
}, wi = { key: 0 }, Ti = { class: "text-decoration-underline" }, Li = { class: "font-italic" }, Ai = { key: 1 }, Ci = { class: "text-decoration-underline" }, Ei = { class: "font-italic" }, _i = {
  key: 1,
  class: "w-100 pb-1"
}, $i = { key: 0 };
function Vi(e, t, a, n, r, l) {
  const i = m("v-row"), d = m("v-chip"), c = m("VcsLabel"), u = m("VcsFormSection"), f = m("DistributionDetails"), p = m("VcsDataTable");
  return g(), A("span", li, [
    o(i, {
      "no-gutters": "",
      class: "font-weight-black d-flex justify-center text-center py-1"
    }, {
      default: s(() => [
        h(
          y(e.dataset.title),
          1
          /* TEXT */
        )
      ]),
      _: 1
      /* STABLE */
    }),
    e.dataset.source ? (g(), L(i, {
      key: 0,
      "no-gutters": "",
      class: "d-flex align-center justify-center gc-1"
    }, {
      default: s(() => [
        U("span", di, [
          h(
            y(e.$t("dynamicLayer.info.source")) + ": ",
            1
            /* TEXT */
          ),
          U("span", ui, [
            e.dataset.source.url ? (g(), A("a", {
              key: 0,
              href: e.dataset.source.url,
              target: "_blank"
            }, y(e.dataset.source.title), 9, ci)) : (g(), A(
              "span",
              mi,
              y(e.dataset.source.title),
              1
              /* TEXT */
            ))
          ])
        ])
      ]),
      _: 1
      /* STABLE */
    })) : R("v-if", !0),
    e.dataset.publisher ? (g(), L(i, {
      key: 1,
      "no-gutters": "",
      class: "d-flex align-center justify-center gc-1"
    }, {
      default: s(() => [
        U("span", pi, [
          h(
            y(e.$t("dynamicLayer.info.publisher")) + ": ",
            1
            /* TEXT */
          ),
          U("span", fi, [
            e.dataset.publisher.url ? (g(), A("a", {
              key: 0,
              href: e.dataset.publisher.url,
              target: "_blank"
            }, y(e.dataset.publisher.title), 9, yi)) : (g(), A(
              "span",
              gi,
              y(e.dataset.publisher.title),
              1
              /* TEXT */
            ))
          ])
        ])
      ]),
      _: 1
      /* STABLE */
    })) : R("v-if", !0),
    e.dataset.owner ? (g(), L(i, {
      key: 2,
      "no-gutters": "",
      class: "d-flex align-center justify-center gc-1"
    }, {
      default: s(() => [
        U("span", vi, [
          h(
            y(e.$t("dynamicLayer.info.owner")) + ": ",
            1
            /* TEXT */
          ),
          U("span", hi, [
            e.dataset.owner.url ? (g(), A("a", {
              key: 0,
              href: e.dataset.owner.url,
              target: "_blank"
            }, y(e.dataset.owner.title), 9, bi)) : (g(), A(
              "span",
              Si,
              y(e.dataset.owner.title),
              1
              /* TEXT */
            ))
          ])
        ])
      ]),
      _: 1
      /* STABLE */
    })) : R("v-if", !0),
    o(i, {
      "no-gutters": "",
      class: "d-flex justify-center gc-4"
    }, {
      default: s(() => [
        e.dataset.created ? (g(), A("span", wi, [
          U(
            "span",
            Ti,
            y(e.$t("dynamicLayer.info.created")) + ":",
            1
            /* TEXT */
          ),
          U(
            "span",
            Li,
            " " + y(e.dataset.created),
            1
            /* TEXT */
          )
        ])) : R("v-if", !0),
        e.dataset.modified ? (g(), A("span", Ai, [
          U(
            "span",
            Ci,
            y(e.$t("dynamicLayer.info.modified")) + ":",
            1
            /* TEXT */
          ),
          U(
            "span",
            Ei,
            " " + y(e.dataset.modified),
            1
            /* TEXT */
          )
        ])) : R("v-if", !0)
      ]),
      _: 1
      /* STABLE */
    }),
    o(u, {
      heading: "dynamicLayer.info.title",
      expandable: "",
      "start-open": ""
    }, {
      default: s(() => {
        var S;
        return [
          (S = e.dataset.keywords) != null && S.length ? (g(), L(i, {
            key: 0,
            "no-gutters": "",
            class: "w-100 pt-1"
          }, {
            default: s(() => [
              e.dataset.keywords.length > 3 ? (g(), L(d, {
                key: 0,
                size: "x-small",
                color: "primary",
                variant: "outlined",
                class: "ma-1",
                onClick: t[0] || (t[0] = (b) => e.showAllKeywords = !e.showAllKeywords)
              }, {
                default: s(() => [
                  h(
                    y(e.showAllKeywords ? e.$t("dynamicLayer.actions.collapse") : `${e.$t("dynamicLayer.common.show")} ${e.dataset.keywords.length} ${e.$t("dynamicLayer.common.more")}`),
                    1
                    /* TEXT */
                  )
                ]),
                _: 1
                /* STABLE */
              })) : R("v-if", !0),
              (g(!0), A(
                _e,
                null,
                Be(e.dataset.keywords.slice(
                  e.showAllKeywords ? void 0 : -1
                ), (b) => (g(), L(
                  d,
                  {
                    key: b,
                    size: "x-small",
                    color: "primary",
                    class: "ma-1"
                  },
                  {
                    default: s(() => [
                      h(
                        y(b),
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
          })) : R("v-if", !0),
          e.dataset.description ? (g(), A("span", _i, [
            o(i, { "no-gutters": "" }, {
              default: s(() => [
                o(c, {
                  "html-for": "description",
                  class: "font-weight-bold"
                }, {
                  default: s(() => [
                    h(
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
                h(
                  y(e.dataset.description),
                  1
                  /* TEXT */
                )
              ]),
              _: 1
              /* STABLE */
            })
          ])) : R("v-if", !0)
        ];
      }),
      _: 1
      /* STABLE */
    }),
    o(u, {
      heading: `${e.$t("dynamicLayer.info.distributions")} (${e.distributions.length})`,
      expandable: "",
      "start-open": ""
    }, {
      default: s(() => [
        o(i, { "no-gutters": "" }, {
          default: s(() => [
            e.distributions.length ? (g(), L(p, {
              key: 1,
              expanded: e.expandedDistributionIds,
              "onUpdate:expanded": t[1] || (t[1] = (S) => e.expandedDistributionIds = S),
              class: "w-100",
              items: e.distributions,
              headers: e.headers,
              "items-per-page": e.distributions.length,
              "show-expand": "",
              "expand-on-click": ""
            }, {
              "expanded-row": s(({ columns: S, item: b }) => [
                o(f, {
                  columns: S,
                  distribution: b
                }, null, 8, ["columns", "distribution"])
              ]),
              _: 1
              /* STABLE */
            }, 8, ["expanded", "items", "headers", "items-per-page"])) : (g(), A(
              "span",
              $i,
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
const Ri = /* @__PURE__ */ J(ii, [["render", Vi], ["__scopeId", "data-v-b665e54e"]]), Pi = H({
  name: "CataloguesWindow",
  components: {
    VCard: ze,
    VCardText: xa,
    VCol: oe,
    VContainer: mt,
    VDivider: Xe,
    VRow: Y,
    VcsFormButton: We,
    VcsMarkdown: Sa,
    DatasetsList: qs,
    DatasetDetails: Ri
  },
  setup() {
    const e = re("vcsApp"), t = e.plugins.getByKey(k), {
      added: a,
      selected: n,
      selectedDataset: r
    } = t.catalogues;
    a.value.length === 1 && (n.value = a.value[0]);
    const l = w(!0);
    return te(n, () => {
      r.value = void 0;
    }), {
      CataloguesTypes: Ie,
      locale: e.locale,
      added: a,
      selectedCatalogue: n,
      selectedDataset: r,
      showDatasetDescription: l,
      getLogo(i) {
        return i.logo ?? ea(e, i.type);
      },
      selectDataset: (i) => {
        r.value = i;
      }
    };
  }
}), Ii = ["src"], Di = { class: "d-flex align-start font-weight-black" }, Oi = { class: "text-wrap max-3-lines" }, ki = { class: "d-flex justify-end gc-1" };
function Mi(e, t, a, n, r, l) {
  const i = m("v-col"), d = m("VcsFormButton"), c = m("v-row"), u = m("v-card-text"), f = m("v-card"), p = m("DatasetsList"), S = m("v-divider"), b = m("DatasetDetails"), C = m("VcsMarkdown"), N = m("v-container");
  return g(), L(N, { class: "h-100 pa-0" }, {
    default: s(() => [
      R(" OVERVIEW "),
      e.selectedCatalogue ? (g(), A(
        _e,
        { key: 1 },
        [
          R(" CATALOGUE "),
          (g(), L(c, {
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
                  o(p, {
                    source: e.selectedCatalogue,
                    onSelect: e.selectDataset
                  }, null, 8, ["source", "onSelect"])
                ]),
                _: 1
                /* STABLE */
              }),
              o(S, { vertical: "" }),
              o(i, {
                cols: "7",
                class: "max-height overflow-y-auto"
              }, {
                default: s(() => [
                  e.selectedDataset ? (g(), L(b, {
                    key: e.selectedDataset.id,
                    dataset: e.selectedDataset,
                    "show-description": e.showDatasetDescription,
                    onToggleDescription: t[0] || (t[0] = (M) => e.showDatasetDescription = !e.showDatasetDescription)
                  }, null, 8, ["dataset", "show-description"])) : (g(), L(C, {
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
      )) : (g(), L(c, {
        key: 0,
        "no-gutters": "",
        class: "w-100 overflow-y-auto px-1"
      }, {
        default: s(() => [
          (g(!0), A(
            _e,
            null,
            Be(e.added, (M) => (g(), L(
              i,
              {
                key: M.url,
                class: "v-col-6 pa-1 d-flex flex-column"
              },
              {
                default: s(() => [
                  o(
                    f,
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
                        }, null, 8, Ii)
                      ]),
                      title: s(() => [
                        U(
                          "span",
                          Di,
                          y(M.title),
                          1
                          /* TEXT */
                        )
                      ]),
                      subtitle: s(() => [
                        U(
                          "span",
                          Oi,
                          y(M.subtitle ?? e.$t("dynamicLayer.catalogues.noDescription")),
                          1
                          /* TEXT */
                        )
                      ]),
                      default: s(() => [
                        o(
                          u,
                          { class: "details py-2" },
                          {
                            default: s(() => [
                              o(
                                c,
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
                                          h(
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
                                          U("span", ki, [
                                            o(d, {
                                              variant: "filled",
                                              onClick: (F) => e.selectedCatalogue = M
                                            }, {
                                              default: s(() => [
                                                h(
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
const Ni = /* @__PURE__ */ J(Pi, [["render", Mi], ["__scopeId", "data-v-1af69076"]]), Ui = H({
  name: "WmsParameters",
  components: {
    VCol: oe,
    VRow: Y,
    VcsCheckbox: ct,
    VcsExtent: Je,
    VcsLabel: ie,
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
    const n = re("vcsApp").layers.getByKey(e.item.name), r = w({
      ...n.toJSON(),
      tilingSchema: n.tilingSchema,
      opacity: n.opacity,
      availableStyles: D(e.item.styles),
      availableFormats: D(e.item.formats),
      supportsTransparency: e.item.supportsTransparency,
      queryable: e.item.queryable
    }), l = w(
      structuredClone(D(r.value))
    ), i = w(!!n.featureProvider);
    te(
      [r, i],
      () => {
        t("parametersEdited");
      },
      { deep: !0 }
    );
    function d(c, u) {
      return c.find((f) => f.value === u);
    }
    return {
      parameters: r,
      findStyle: d,
      enableFeatureInfo: i,
      styleText(c) {
        return c.title;
      },
      setExtent(c) {
        r.value.extent = c;
      },
      updateTransparency() {
        r.value.parameters.TRANSPARENT === "true" && (r.value.parameters.FORMAT = "image/png");
      },
      updateFormat(c) {
        var u;
        c !== "image/png" && ((u = r.value.parameters) != null && u.TRANSPARENT) && (r.value.parameters.TRANSPARENT = "false");
      },
      cancel() {
        r.value = structuredClone(D(l.value));
      },
      async apply() {
        Object.keys(r.value).forEach((c) => {
          var u;
          c in n && (c === "extent" ? n.extent = new ue(r.value[c]) : c === "properties" || c === "parameters" ? (r.value.availableStyles && n.parameters.STYLES !== r.value.parameters.STYLE && (n.properties.legend = [
            {
              popoutBtn: !0,
              type: "ImageLegendItem",
              src: (u = d(
                r.value.availableStyles,
                r.value.parameters.STYLES
              )) == null ? void 0 : u.legendUrl
            }
          ]), Object.keys(n[c]).forEach((f) => {
            var p;
            (p = r.value[c]) != null && p[f] && (n[c][f] = D(
              r.value[c][f]
            ));
          })) : n[c] = r.value[c]);
        }), i.value ? n.properties.featureInfo = k : delete n.properties.featureInfo, n.deactivate(), await n.activate(), await n.reload(), l.value = structuredClone(D(r.value));
      }
    };
  }
}), Fi = { class: "px-2 pb-1" };
function Wi(e, t, a, n, r, l) {
  var b;
  const i = m("VcsExtent"), d = m("v-row"), c = m("VcsLabel"), u = m("v-col"), f = m("VcsSelect"), p = m("VcsSlider"), S = m("VcsCheckbox");
  return g(), A("span", null, [
    e.parameters.extent ? (g(), L(d, {
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
    })) : R("v-if", !0),
    e.parameters.tilingSchema ? (g(), L(d, {
      key: 1,
      "no-gutters": "",
      class: "px-1"
    }, {
      default: s(() => [
        o(u, null, {
          default: s(() => [
            o(c, { "html-for": "tilingSchema" }, {
              default: s(() => [
                h(
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
        o(u, null, {
          default: s(() => [
            o(f, {
              id: "tilingSchema",
              modelValue: e.parameters.tilingSchema,
              "onUpdate:modelValue": t[0] || (t[0] = (C) => e.parameters.tilingSchema = C),
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
    })) : R("v-if", !0),
    e.parameters.parameters.FORMAT ? (g(), L(d, {
      key: 2,
      "no-gutters": "",
      class: "px-1"
    }, {
      default: s(() => [
        o(u, null, {
          default: s(() => [
            o(c, { "html-for": "format" }, {
              default: s(() => [
                h(
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
        o(u, null, {
          default: s(() => [
            o(f, {
              id: "format",
              modelValue: e.parameters.parameters.FORMAT,
              "onUpdate:modelValue": [
                t[1] || (t[1] = (C) => e.parameters.parameters.FORMAT = C),
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
    })) : R("v-if", !0),
    o(d, {
      "no-gutters": "",
      class: "px-1"
    }, {
      default: s(() => [
        o(u, null, {
          default: s(() => [
            o(c, { "html-for": "opacity" }, {
              default: s(() => [
                h(
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
        o(u, null, {
          default: s(() => [
            o(p, {
              id: "opacity",
              modelValue: e.parameters.opacity,
              "onUpdate:modelValue": t[2] || (t[2] = (C) => e.parameters.opacity = C),
              min: "0",
              max: "1",
              step: "0.01"
            }, {
              append: s(() => [
                h(
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
    e.parameters.supportsTransparency ? (g(), L(d, {
      key: 3,
      "no-gutters": "",
      class: "px-1"
    }, {
      default: s(() => [
        o(u, null, {
          default: s(() => [
            o(c, { "html-for": "transparency" }, {
              default: s(() => [
                h(
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
        o(u, { class: "d-flex align-center" }, {
          default: s(() => [
            o(S, {
              id: "transparency",
              modelValue: e.parameters.parameters.TRANSPARENT,
              "onUpdate:modelValue": t[3] || (t[3] = (C) => e.parameters.parameters.TRANSPARENT = C),
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
    })) : R("v-if", !0),
    e.parameters.queryable ? (g(), L(d, {
      key: 4,
      "no-gutters": "",
      class: "px-1"
    }, {
      default: s(() => [
        o(u, null, {
          default: s(() => [
            o(c, { "html-for": "featureInfo" }, {
              default: s(() => [
                h(
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
        o(u, { class: "d-flex align-center" }, {
          default: s(() => [
            o(S, {
              id: "featureInfo",
              modelValue: e.enableFeatureInfo,
              "onUpdate:modelValue": t[4] || (t[4] = (C) => e.enableFeatureInfo = C)
            }, null, 8, ["modelValue"])
          ]),
          _: 1
          /* STABLE */
        })
      ]),
      _: 1
      /* STABLE */
    })) : R("v-if", !0),
    e.parameters.parameters.STYLES ? (g(), L(d, {
      key: 5,
      "no-gutters": "",
      class: "px-1"
    }, {
      default: s(() => [
        o(u, null, {
          default: s(() => [
            o(c, { "html-for": "style" }, {
              default: s(() => [
                h(
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
        o(u, null, {
          default: s(() => [
            o(f, {
              id: "style",
              modelValue: e.parameters.parameters.STYLES,
              "onUpdate:modelValue": t[5] || (t[5] = (C) => e.parameters.parameters.STYLES = C),
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
    })) : R("v-if", !0),
    e.parameters.availableStyles && ((b = e.findStyle(e.parameters.availableStyles, e.parameters.parameters.STYLES)) != null && b.abstract) ? (g(), L(d, {
      key: 6,
      "no-gutters": ""
    }, {
      default: s(() => {
        var C;
        return [
          U(
            "p",
            Fi,
            y(e.$t("dynamicLayer.common.description")) + ": " + y((C = e.findStyle(e.parameters.availableStyles, e.parameters.parameters.STYLES)) == null ? void 0 : C.abstract),
            1
            /* TEXT */
          )
        ];
      }),
      _: 1
      /* STABLE */
    })) : R("v-if", !0)
  ]);
}
const Bi = /* @__PURE__ */ J(Ui, [["render", Wi]]), zi = H({
  name: "CesiumTilesetParameters",
  components: {
    VCol: oe,
    VRow: Y,
    VcsLabel: ie,
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
    const n = re("vcsApp").layers.getByKey(e.item.name), r = w({
      properties: { title: n.properties.title },
      screenSpaceError: n.screenSpaceError
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
        n.screenSpaceError = r.value.screenSpaceError, await n.reload(), l.value = structuredClone(D(r.value));
      }
    };
  }
});
function ji(e, t, a, n, r, l) {
  const i = m("VcsLabel"), d = m("v-col"), c = m("VcsTextField"), u = m("v-row");
  return g(), A("span", null, [
    e.parameters.screenSpaceError ? (g(), L(u, {
      key: 0,
      "no-gutters": "",
      class: "px-1"
    }, {
      default: s(() => [
        o(d, null, {
          default: s(() => [
            o(i, { "html-for": "screenSpaceError" }, {
              default: s(() => [
                h(
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
            o(c, {
              id: "screenSpaceError",
              modelValue: e.parameters.screenSpaceError,
              "onUpdate:modelValue": t[0] || (t[0] = (f) => e.parameters.screenSpaceError = f),
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
    })) : R("v-if", !0)
  ]);
}
const Gi = /* @__PURE__ */ J(zi, [["render", ji]]), Ki = H({
  name: "GeoJSONParameters",
  components: {
    VCol: oe,
    VRow: Y,
    VcsLabel: ie,
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
    const n = re("vcsApp").layers.getByKey(e.item.name), r = w({
      ...n.toJSON(),
      epsg: n.projection.epsg,
      proj4: n.projection.proj4
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
        (n.projection.epsg !== r.value.epsg || n.projection.proj4 !== r.value.proj4) && (n.projection = new zt({
          epsg: r.value.epsg,
          proj4: r.value.proj4
        })), l.value = structuredClone(D(r.value));
      }
    };
  }
});
function qi(e, t, a, n, r, l) {
  const i = m("VcsLabel"), d = m("v-col"), c = m("VcsTextField"), u = m("v-row");
  return g(), A("span", null, [
    o(u, {
      "no-gutters": "",
      class: "px-1"
    }, {
      default: s(() => [
        o(d, null, {
          default: s(() => [
            o(i, { "html-for": "epsg" }, {
              default: s(() => [
                h(
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
            o(c, {
              id: "epsg",
              modelValue: e.parameters.epsg,
              "onUpdate:modelValue": t[0] || (t[0] = (f) => e.parameters.epsg = f),
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
    o(u, {
      "no-gutters": "",
      class: "px-1"
    }, {
      default: s(() => [
        o(d, null, {
          default: s(() => [
            o(i, { "html-for": "proj4" }, {
              default: s(() => [
                h(
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
            o(c, {
              id: "proj4",
              modelValue: e.parameters.proj4,
              "onUpdate:modelValue": t[1] || (t[1] = (f) => e.parameters.proj4 = f),
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
const Zi = /* @__PURE__ */ J(Ki, [["render", qi]]), Hi = H({
  name: "TerrainParameters",
  components: {
    VCol: oe,
    VRow: Y,
    VcsCheckbox: ct,
    VcsLabel: ie
  },
  props: {
    item: {
      type: Object,
      required: !0
    }
  },
  emits: ["parametersEdited"],
  setup(e, { emit: t }) {
    const n = re("vcsApp").layers.getByKey(e.item.name), r = w({
      requestVertexNormals: n.requestVertexNormals,
      requestWaterMask: n.requestWaterMask
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
        n.requestVertexNormals !== r.value.requestVertexNormals && (n.requestVertexNormals = r.value.requestVertexNormals), n.requestWaterMask !== r.value.requestWaterMask && (n.requestWaterMask = r.value.requestWaterMask), n.deactivate(), await n.activate(), l.value = structuredClone(D(r.value));
      }
    };
  }
});
function Ji(e, t, a, n, r, l) {
  const i = m("VcsLabel"), d = m("v-col"), c = m("VcsCheckbox"), u = m("v-row");
  return g(), A("span", null, [
    o(u, {
      "no-gutters": "",
      class: "px-1"
    }, {
      default: s(() => [
        o(d, null, {
          default: s(() => [
            o(i, { "html-for": "requestVertexNormals" }, {
              default: s(() => [
                h(
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
            o(c, {
              id: "requestVertexNormals",
              modelValue: e.parameters.requestVertexNormals,
              "onUpdate:modelValue": t[0] || (t[0] = (f) => e.parameters.requestVertexNormals = f)
            }, null, 8, ["modelValue"])
          ]),
          _: 1
          /* STABLE */
        })
      ]),
      _: 1
      /* STABLE */
    }),
    o(u, {
      "no-gutters": "",
      class: "px-1"
    }, {
      default: s(() => [
        o(d, null, {
          default: s(() => [
            o(i, { "html-for": "requestWaterMask" }, {
              default: s(() => [
                h(
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
            o(c, {
              id: "requestWaterMask",
              modelValue: e.parameters.requestWaterMask,
              "onUpdate:modelValue": t[1] || (t[1] = (f) => e.parameters.requestWaterMask = f)
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
const Yi = /* @__PURE__ */ J(Hi, [["render", Ji]]), Xi = H({
  name: "WfsParameters",
  components: {
    VCol: oe,
    VRow: Y,
    VcsExtent: Je,
    VcsLabel: ie,
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
    const n = re("vcsApp").layers.getByKey(e.item.name), r = w({ ...n.toJSON() }), l = w(structuredClone(D(r.value)));
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
          i in n && (i === "extent" && r.value.extent !== n.extent ? n.extent = new ue(D(r.value.extent)) : i !== "projection" && (n[i] = D(r.value[i])));
        }), n.deactivate(), await n.activate(), await n.reload(), l.value = structuredClone(D(r.value));
      }
    };
  }
});
function Qi(e, t, a, n, r, l) {
  const i = m("VcsLabel"), d = m("v-col"), c = m("VcsTextField"), u = m("v-row"), f = m("VcsExtent");
  return g(), A("span", null, [
    o(u, {
      "no-gutters": "",
      class: "px-1"
    }, {
      default: s(() => [
        o(d, null, {
          default: s(() => [
            o(i, { "html-for": "featureNS" }, {
              default: s(() => [
                h(
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
            o(c, {
              id: "featureNS",
              modelValue: e.parameters.featureNS,
              "onUpdate:modelValue": t[0] || (t[0] = (p) => e.parameters.featureNS = p)
            }, null, 8, ["modelValue"])
          ]),
          _: 1
          /* STABLE */
        })
      ]),
      _: 1
      /* STABLE */
    }),
    o(u, {
      "no-gutters": "",
      class: "px-1"
    }, {
      default: s(() => [
        o(d, null, {
          default: s(() => [
            o(i, { "html-for": "featurePrefix" }, {
              default: s(() => [
                h(
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
            o(c, {
              id: "featurePrefix",
              modelValue: e.parameters.featurePrefix,
              "onUpdate:modelValue": t[1] || (t[1] = (p) => e.parameters.featurePrefix = p)
            }, null, 8, ["modelValue"])
          ]),
          _: 1
          /* STABLE */
        })
      ]),
      _: 1
      /* STABLE */
    }),
    o(u, {
      "no-gutters": "",
      class: "px-1"
    }, {
      default: s(() => [
        o(d, null, {
          default: s(() => [
            o(i, { "html-for": "featureType" }, {
              default: s(() => [
                h(
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
            o(c, {
              id: "featureType",
              modelValue: e.parameters.featureType[0],
              "onUpdate:modelValue": t[2] || (t[2] = (p) => e.parameters.featureType[0] = p)
            }, null, 8, ["modelValue"])
          ]),
          _: 1
          /* STABLE */
        })
      ]),
      _: 1
      /* STABLE */
    }),
    e.parameters.extent ? (g(), L(u, {
      key: 0,
      "no-gutters": ""
    }, {
      default: s(() => [
        o(f, {
          id: "extent",
          "model-value": e.parameters.extent,
          "first-cols": 6,
          "onUpdate:modelValue": e.setExtent
        }, null, 8, ["model-value", "onUpdate:modelValue"])
      ]),
      _: 1
      /* STABLE */
    })) : R("v-if", !0)
  ]);
}
const xi = /* @__PURE__ */ J(Xi, [["render", Qi]]), el = H({
  name: "WmtsParameters",
  components: {
    VCol: oe,
    VRow: Y,
    VcsExtent: Je,
    VcsLabel: ie,
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
    const n = re("vcsApp").layers.getByKey(e.item.name), r = w({
      ...n.toJSON(),
      opacity: n.opacity,
      minLevel: n.minLevel,
      maxLevel: n.maxLevel,
      tileSize: n.tileSize,
      tileMatrixPrefix: n.tileMatrixPrefix,
      numberOfLevelZeroTilesX: n.numberOfLevelZeroTilesX,
      numberOfLevelZeroTilesY: n.numberOfLevelZeroTilesY
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
          i in n && (i === "extent" && r.value.extent !== n.extent ? n.extent = new ue(D(r.value.extent)) : i !== "projection" && (n[i] = D(r.value[i])));
        }), n.deactivate(), await n.activate(), await n.reload(), l.value = structuredClone(D(r.value));
      }
    };
  }
});
function tl(e, t, a, n, r, l) {
  const i = m("VcsLabel"), d = m("v-col"), c = m("VcsSlider"), u = m("v-row"), f = m("VcsSelect"), p = m("VcsTextField"), S = m("VcsExtent");
  return g(), A("span", null, [
    o(u, {
      "no-gutters": "",
      class: "px-1"
    }, {
      default: s(() => [
        o(d, null, {
          default: s(() => [
            o(i, { "html-for": "opacity" }, {
              default: s(() => [
                h(
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
            o(c, {
              id: "opacity",
              modelValue: e.parameters.opacity,
              "onUpdate:modelValue": t[0] || (t[0] = (b) => e.parameters.opacity = b),
              min: "0",
              max: "1",
              step: "0.01"
            }, {
              append: s(() => [
                h(
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
    o(u, {
      "no-gutters": "",
      class: "px-1"
    }, {
      default: s(() => [
        o(d, null, {
          default: s(() => [
            o(i, { "html-for": "format" }, {
              default: s(() => [
                h(
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
            o(f, {
              id: "format",
              modelValue: e.parameters.format,
              "onUpdate:modelValue": t[1] || (t[1] = (b) => e.parameters.format = b),
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
    o(u, {
      "no-gutters": "",
      class: "px-1"
    }, {
      default: s(() => [
        o(d, null, {
          default: s(() => [
            o(i, { "html-for": "tileMatrixSetID" }, {
              default: s(() => [
                h(
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
            o(f, {
              id: "tileMatrixSetID",
              modelValue: e.parameters.tileMatrixSetID,
              "onUpdate:modelValue": t[2] || (t[2] = (b) => e.parameters.tileMatrixSetID = b),
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
    o(u, {
      "no-gutters": "",
      class: "px-1"
    }, {
      default: s(() => [
        o(d, null, {
          default: s(() => [
            o(i, { "html-for": "tileMatrixPrefix" }, {
              default: s(() => [
                h(
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
            o(p, {
              id: "tileMatrixPrefix",
              modelValue: e.parameters.tileMatrixPrefix,
              "onUpdate:modelValue": t[3] || (t[3] = (b) => e.parameters.tileMatrixPrefix = b)
            }, null, 8, ["modelValue"])
          ]),
          _: 1
          /* STABLE */
        })
      ]),
      _: 1
      /* STABLE */
    }),
    e.parameters.numberOfLevelZeroTilesX && e.parameters.numberOfLevelZeroTilesY ? (g(), L(u, {
      key: 0,
      "no-gutters": "",
      class: "px-1"
    }, {
      default: s(() => [
        o(d, { cols: "6" }, {
          default: s(() => [
            o(i, { "html-for": "levelZeroTilesX" }, {
              default: s(() => [
                h(
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
            o(p, {
              id: "levelZeroTilesX",
              modelValue: e.parameters.numberOfLevelZeroTilesX,
              "onUpdate:modelValue": t[4] || (t[4] = (b) => e.parameters.numberOfLevelZeroTilesX = b),
              modelModifiers: { number: !0 },
              prefix: "X"
            }, null, 8, ["modelValue"])
          ]),
          _: 1
          /* STABLE */
        }),
        o(d, null, {
          default: s(() => [
            o(p, {
              id: "levelZeroTilesY",
              modelValue: e.parameters.numberOfLevelZeroTilesX,
              "onUpdate:modelValue": t[5] || (t[5] = (b) => e.parameters.numberOfLevelZeroTilesX = b),
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
    })) : R("v-if", !0),
    o(u, {
      "no-gutters": "",
      class: "px-1"
    }, {
      default: s(() => [
        o(d, { cols: "6" }, {
          default: s(() => [
            o(i, { "html-for": "zoomLevelMin" }, {
              default: s(() => [
                h(
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
            o(p, {
              id: "zoomLevelMin",
              modelValue: e.parameters.minLevel,
              "onUpdate:modelValue": t[6] || (t[6] = (b) => e.parameters.minLevel = b),
              modelModifiers: { number: !0 },
              prefix: "min"
            }, null, 8, ["modelValue"])
          ]),
          _: 1
          /* STABLE */
        }),
        o(d, null, {
          default: s(() => [
            o(p, {
              id: "zoomLevelMax",
              modelValue: e.parameters.maxLevel,
              "onUpdate:modelValue": t[7] || (t[7] = (b) => e.parameters.maxLevel = b),
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
    o(u, {
      "no-gutters": "",
      class: "px-1"
    }, {
      default: s(() => [
        o(d, { cols: "6" }, {
          default: s(() => [
            o(i, { "html-for": "tileSizeX" }, {
              default: s(() => [
                h(
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
            o(p, {
              id: "tileSizeX",
              modelValue: e.parameters.tileSize[0],
              "onUpdate:modelValue": t[8] || (t[8] = (b) => e.parameters.tileSize[0] = b),
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
            o(p, {
              id: "tileSizeY",
              modelValue: e.parameters.tileSize[1],
              "onUpdate:modelValue": t[9] || (t[9] = (b) => e.parameters.tileSize[1] = b),
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
    o(u, {
      "no-gutters": "",
      class: "px-1"
    }, {
      default: s(() => [
        o(d, null, {
          default: s(() => [
            o(i, { "html-for": "style" }, {
              default: s(() => [
                h(
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
            o(f, {
              id: "style",
              modelValue: e.parameters.wmtsStyle,
              "onUpdate:modelValue": t[10] || (t[10] = (b) => e.parameters.wmtsStyle = b),
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
    e.parameters.extent ? (g(), L(u, {
      key: 1,
      "no-gutters": ""
    }, {
      default: s(() => [
        o(S, {
          id: "extent",
          "model-value": e.parameters.extent,
          "first-cols": 6,
          "onUpdate:modelValue": e.setExtent
        }, null, 8, ["model-value", "onUpdate:modelValue"])
      ]),
      _: 1
      /* STABLE */
    })) : R("v-if", !0)
  ]);
}
const al = /* @__PURE__ */ J(el, [["render", tl]]), nl = H({
  name: "PointCloudParameters",
  components: {
    VCol: oe,
    VRow: Y,
    VcsLabel: ie,
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
    const n = re("vcsApp").layers.getByKey(e.item.name), r = w({
      pointSize: n.pointSize,
      screenSpaceError: n.screenSpaceError
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
        n.screenSpaceError !== r.value.screenSpaceError && (n.screenSpaceError = r.value.screenSpaceError), n.pointSize !== r.value.pointSize && (n.pointSize = r.value.pointSize), await n.reload(), l.value = structuredClone(D(r.value));
      }
    };
  }
});
function rl(e, t, a, n, r, l) {
  const i = m("VcsLabel"), d = m("v-col"), c = m("VcsTextField"), u = m("v-row");
  return g(), A("span", null, [
    o(u, {
      "no-gutters": "",
      class: "px-1"
    }, {
      default: s(() => [
        o(d, null, {
          default: s(() => [
            o(i, { "html-for": "pointSize" }, {
              default: s(() => [
                h(
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
            o(c, {
              id: "pointSize",
              modelValue: e.parameters.pointSize,
              "onUpdate:modelValue": t[0] || (t[0] = (f) => e.parameters.pointSize = f),
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
    o(u, {
      "no-gutters": "",
      class: "px-1"
    }, {
      default: s(() => [
        o(d, null, {
          default: s(() => [
            o(i, { "html-for": "screenSpaceError" }, {
              default: s(() => [
                h(
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
            o(c, {
              id: "screenSpaceError",
              modelValue: e.parameters.screenSpaceError,
              "onUpdate:modelValue": t[1] || (t[1] = (f) => e.parameters.screenSpaceError = f),
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
const ol = /* @__PURE__ */ J(nl, [["render", rl]]), sl = H({
  name: "CzmlParameters",
  components: {
    VCol: oe,
    VRow: Y,
    VcsCheckbox: ct,
    VcsLabel: ie
  },
  props: {
    item: {
      type: Object,
      required: !0
    }
  },
  emits: ["parametersEdited"],
  setup(e, { emit: t }) {
    const n = re("vcsApp").layers.getByKey(e.item.name), r = w({
      ...n.toJSON(),
      featureInfo: !!n.properties.featureInfo
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
        r.value.featureInfo ? n.properties.featureInfo = k : delete n.properties.featureInfo, l.value = structuredClone(D(r.value));
      }
    };
  }
});
function il(e, t, a, n, r, l) {
  const i = m("VcsLabel"), d = m("v-col"), c = m("VcsCheckbox"), u = m("v-row");
  return g(), A("span", null, [
    o(u, {
      "no-gutters": "",
      class: "px-1"
    }, {
      default: s(() => [
        o(d, null, {
          default: s(() => [
            o(i, { "html-for": "featureInfo" }, {
              default: s(() => [
                h(
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
            o(c, {
              id: "featureInfo",
              modelValue: e.parameters.featureInfo,
              "onUpdate:modelValue": t[0] || (t[0] = (f) => e.parameters.featureInfo = f),
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
const ll = /* @__PURE__ */ J(sl, [["render", il]]), dl = H({
  name: "WebdataParameters",
  components: {
    VCol: oe,
    VRow: Y,
    VcsFormSection: Ye,
    VcsLabel: ie,
    VcsTextField: be,
    CesiumTilesetParameters: Gi,
    CzmlParameters: ll,
    GeoJSONParameters: Zi,
    PointCloudParameters: ol,
    TerrainParameters: Yi,
    WfsParameters: xi,
    WmsParameters: Bi,
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
    const a = w(!0), n = w(!1), r = w(!1), l = ae(
      () => n.value || r.value
    ), i = w(), d = w(e.item.title);
    return {
      show: a,
      hasUpdate: l,
      itemParameters: i,
      parametersHaveUpdate: r,
      title: d,
      titleHasUpdate: n,
      headerActions: ae(
        () => l.value ? [
          B({
            icon: "mdi-close",
            tooltip: "dynamicLayer.actions.cancel",
            disabled: !l.value,
            callback: async () => {
              d.value = e.item.title, i.value.cancel(), await ja(), n.value = !1, r.value = !1;
            }
          }),
          B({
            icon: "mdi-content-save-edit-outline",
            tooltip: "dynamicLayer.actions.apply",
            disabled: !l.value,
            callback: () => {
              n.value && (t("rename", d.value), n.value = !1), r.value && (i.value.apply(), r.value = !1);
            }
          })
        ] : []
      ),
      getComponentName() {
        switch (e.item.type) {
          case T.CESIUM_TILESET:
            return "CesiumTilesetParameters";
          case T.CZML:
            return "CzmlParameters";
          case T.GEOJSON:
            return "GeoJSONParameters";
          case T.POINTCLOUD:
            return "PointCloudParameters";
          case T.TERRAIN:
            return "TerrainParameters";
          case T.WFS:
            return "WfsParameters";
          case T.WMS:
            return "WmsParameters";
          case T.WMTS:
            return "WmtsParameters";
          default:
            return "";
        }
      }
    };
  }
}), ul = { class: "h-100 overflow-y-auto" };
function cl(e, t, a, n, r, l) {
  const i = m("VcsLabel"), d = m("v-col"), c = m("VcsTextField"), u = m("v-row"), f = m("VcsFormSection");
  return g(), L(f, {
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
      U("div", ul, [
        o(u, {
          "no-gutters": "",
          class: "px-1"
        }, {
          default: s(() => [
            o(d, null, {
              default: s(() => [
                o(i, { "html-for": "title" }, {
                  default: s(() => [
                    h(
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
                o(c, {
                  id: "title",
                  modelValue: e.title,
                  "onUpdate:modelValue": [
                    t[0] || (t[0] = (p) => e.title = p),
                    t[1] || (t[1] = (p) => e.titleHasUpdate = !0)
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
        (g(), L(Ga(e.getComponentName()), {
          ref: "itemParameters",
          class: "w-100 d-inline-block overflow-y-auto",
          item: e.item,
          onRename: t[2] || (t[2] = (p) => e.$emit("rename")),
          onParametersEdited: t[3] || (t[3] = (p) => e.parametersHaveUpdate = !0)
        }, null, 40, ["item"]))
      ])
    ]),
    _: 1
    /* STABLE */
  }, 8, ["header-actions", "help-text"]);
}
const ml = /* @__PURE__ */ J(dl, [["render", cl], ["__scopeId", "data-v-903cf694"]]), pl = H({
  name: "AddedData",
  components: {
    VCol: oe,
    VDivider: Xe,
    VRow: Y,
    VcsFormButton: We,
    VcsGroupedList: wa,
    WebdataParameters: ml,
    WebdataInformations: fa
  },
  setup() {
    const e = re("vcsApp"), t = e.plugins.getByKey(k), { addedSelected: a, addedToMap: n } = t, r = ae(
      () => n.value.map(
        (c) => B({
          name: c.name,
          title: c.title,
          group: c.type
        })
      )
    );
    te(r, () => {
      r.value.length === 0 && (t.activeTab.value = t.config.defaultTab);
    });
    const l = w([
      r.value.find(
        (c) => {
          var u;
          return c.name === ((u = a.value) == null ? void 0 : u.name);
        }
      )
    ]);
    te(l, (c) => {
      (c == null ? void 0 : c.length) === 1 ? a.value = n.value.find(
        (u) => {
          var f;
          return u.name === ((f = c[0]) == null ? void 0 : f.name);
        }
      ) : a.value = void 0;
    });
    function i() {
      a.value && (l.value = [
        r.value.find(
          (c) => c.name === a.value.name
        )
      ]);
    }
    return i(), te(t.activeTab, (c) => {
      c === G.ADDED && i();
    }), {
      groups: ae(() => [...new Set(n.value.map((c) => c.type))].map(
        (c) => ({
          name: c,
          title: `dynamicLayer.webdata.type.${c}`,
          headerActions: [
            B({
              name: "dynamicLayer.added.actions.selectAll",
              callback: () => {
                l.value = r.value.filter(
                  (u) => u.group === String(c)
                );
              }
            }),
            B({
              name: "dynamicLayer.added.actions.clearSelection",
              disabled: ae(() => !l.value.length),
              callback: () => {
                l.value = [];
              }
            }),
            B({
              name: "dynamicLayer.added.actions.removeSelection",
              title: "dynamicLayer.added.actions.removeSelectionTitle",
              disabled: ae(() => !l.value.length),
              callback: () => {
                n.value.filter(
                  (u) => l.value.some((f) => (f == null ? void 0 : f.name) === u.name)
                ).forEach((u) => {
                  Oe(e, u);
                }), l.value = [];
              }
            })
          ]
        })
      )),
      localItems: r,
      addedSelected: a,
      localSelected: l,
      removeLayer: Oe.bind(null, e),
      rename(c) {
        const u = a.value.name, f = e.layers.getByKey(u);
        f.properties.title = c;
        const p = Qe(u), S = e.contentTree.getByKey(p);
        S.title = c, a.value.title = c;
      }
    };
  }
}), fl = {
  key: 0,
  class: "d-flex w-100 py-1 justify-center font-weight-bold"
}, yl = { class: "pa-2" };
function gl(e, t, a, n, r, l) {
  const i = m("VcsGroupedList"), d = m("v-col"), c = m("v-divider"), u = m("WebdataInformations"), f = m("WebdataParameters"), p = m("v-row"), S = m("VDivider"), b = m("VcsFormButton");
  return g(), L(p, {
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
            "onUpdate:modelValue": t[0] || (t[0] = (C) => e.localSelected = C),
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
      o(c, {
        vertical: "",
        style: { "z-index": "1" }
      }),
      o(d, {
        cols: "8",
        class: "h-100"
      }, {
        default: s(() => [
          e.addedSelected ? (g(), L(p, {
            key: 1,
            "no-gutters": "",
            class: "d-flex w-100 h-100"
          }, {
            default: s(() => [
              o(p, {
                "no-gutters": "",
                class: "d-block w-100 overflow-y-auto button-margin"
              }, {
                default: s(() => [
                  o(u, {
                    item: e.addedSelected,
                    title: e.addedSelected.name,
                    subtitle: e.addedSelected.url,
                    style: { height: "min-content !important" }
                  }, null, 8, ["item", "title", "subtitle"]),
                  (g(), L(f, {
                    key: e.addedSelected.name,
                    item: e.addedSelected,
                    style: { height: "min-content !important" },
                    onRename: e.rename
                  }, null, 8, ["item", "onRename"]))
                ]),
                _: 1
                /* STABLE */
              }),
              o(p, {
                "no-gutters": "",
                class: "w-100 justify-end"
              }, {
                default: s(() => [
                  o(S),
                  U("span", yl, [
                    o(b, {
                      onClick: t[1] || (t[1] = (C) => e.removeLayer(e.addedSelected))
                    }, {
                      default: s(() => [
                        h(
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
          })) : (g(), A(
            "span",
            fl,
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
const vl = /* @__PURE__ */ J(pl, [["render", gl], ["__scopeId", "data-v-ff9fe310"]]), dt = "dynamic_layer_window_id", hl = H({
  name: "DynamicLayer",
  components: {
    VContainer: mt,
    VDivider: Xe,
    VSheet: rn,
    VTab: nn,
    VTabs: an,
    VTabsWindow: tn,
    VTabsWindowItem: en,
    VcsActionButtonList: Ut,
    VcsBadge: Ta,
    AddedData: vl,
    Catalogues: Ni,
    Webdata: Us
  },
  setup() {
    const e = re("vcsApp"), t = e.plugins.getByKey(k), { activeTab: a, addedToMap: n, catalogues: r, config: l } = t, i = ae(() => [
      ...Object.values(G).filter(
        (u) => l.enabledTabs.includes(u)
      ),
      ...n.value.length ? [G.ADDED] : []
    ]), d = ae(() => [
      B({
        name: "dynamicLayer.actions.overview",
        callback: () => {
          r.selected.value = void 0;
        }
      }),
      ...r.added.value.map((u) => B({
        name: u.title,
        title: `${u.data.count.toLocaleString(e.locale)} ${e.vueI18n.t("dynamicLayer.catalogues.datasets")} @ ${new URL(u.url).host}`,
        active: ae(() => {
          var f;
          return ((f = r.selected.value) == null ? void 0 : f.url) === u.url;
        }),
        callback: () => {
          r.selected.value = u;
        }
      }))
    ]), c = w(!1);
    return te(
      () => n.value.length,
      (u, f) => {
        c.value = u > f || c.value;
      }
    ), te(a, () => {
      a.value === G.ADDED && (c.value = !1);
    }), {
      CategoryType: G,
      activeTab: a,
      enabledTabs: i,
      catalogues: r,
      cataloguesActions: d,
      addedHasUpdate: c,
      switchCategory(u) {
        a.value === G.CATALOGUES && u === G.CATALOGUES && (t.catalogues.selected.value = void 0), a.value = u;
      }
    };
  }
});
function bl(e, t, a, n, r, l) {
  const i = m("VcsBadge"), d = m("VcsActionButtonList"), c = m("v-tab"), u = m("v-tabs"), f = m("v-divider"), p = m("Webdata"), S = m("v-tabs-window-item"), b = m("Catalogues"), C = m("AddedData"), N = m("v-tabs-window"), M = m("v-container"), F = m("v-sheet");
  return g(), L(F, null, {
    default: s(() => [
      o(u, {
        color: "primary",
        height: "32",
        "model-value": e.activeTab
      }, {
        default: s(() => [
          (g(!0), A(
            _e,
            null,
            Be(e.enabledTabs, (O) => (g(), A("span", { key: O }, [
              o(c, {
                value: O,
                text: e.$t(`dynamicLayer.${O}.title`),
                onClick: (z) => e.switchCategory(O)
              }, {
                append: s(() => [
                  O === e.CategoryType.ADDED && e.addedHasUpdate ? (g(), L(i, {
                    key: 0,
                    class: "position-absolute"
                  })) : O === e.CategoryType.CATALOGUES && e.activeTab === e.CategoryType.CATALOGUES && e.catalogues.added.value.length > 1 && e.catalogues.selected.value ? (g(), L(d, {
                    key: 1,
                    actions: e.cataloguesActions,
                    "overflow-icon": "mdi-chevron-down",
                    "overflow-count": 0
                  }, null, 8, ["actions"])) : R("v-if", !0)
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
      o(f),
      o(M, { class: "pa-0 dl-content" }, {
        default: s(() => [
          o(N, {
            modelValue: e.activeTab,
            "onUpdate:modelValue": t[0] || (t[0] = (O) => e.activeTab = O),
            class: "h-100"
          }, {
            default: s(() => [
              o(S, {
                value: e.CategoryType.WEBDATA,
                class: "h-100"
              }, {
                default: s(() => [
                  o(p)
                ]),
                _: 1
                /* STABLE */
              }, 8, ["value"]),
              o(S, {
                value: e.CategoryType.CATALOGUES,
                class: "h-100"
              }, {
                default: s(() => [
                  o(b)
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
const Sl = /* @__PURE__ */ J(hl, [["render", bl], ["__scopeId", "data-v-c2ef92ab"]]);
function ya() {
  return {
    defaultTab: G.WEBDATA,
    enabledTabs: [G.WEBDATA, G.CATALOGUES],
    webdata: {
      defaultType: T.WMS,
      defaultUrl: ""
    },
    catalogues: {
      itemsPerPage: 14,
      presets: []
    }
  };
}
const wl = H({
  name: "DynamicLayerConfigEditor",
  components: {
    VCard: ze,
    VCol: oe,
    VContainer: mt,
    VDialog: Kt,
    VForm: on,
    VRow: Y,
    AbstractConfigEditor: Aa,
    VcsFormButton: We,
    VcsFormSection: Ye,
    VcsLabel: ie,
    VcsList: Nt,
    VcsSelect: Fe,
    VcsTextArea: La,
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
    const t = ya(), a = e.getConfig(), n = w({ ...t, ...a }), r = w(
      Object.values(G).filter((p) => p !== G.ADDED).map((p) => ({
        title: `dynamicLayer.${p}.title`,
        value: p
      }))
    ), l = w(it(G.WEBDATA)), i = w(it(G.CATALOGUES)), d = w([]), c = w({
      url: "",
      type: Ie.PIVEAU,
      title: "",
      subtitle: "",
      logo: "",
      description: ""
    }), u = w(!1);
    function f() {
      d.value = [], n.value.catalogues.presets.forEach((p) => {
        d.value.push({
          title: p.title ?? p.url,
          actions: [
            B({
              name: "dynamicLayer.actions.edit",
              icon: "mdi-pencil",
              callback: () => {
                u.value = !0, c.value = p;
              }
            }),
            B({
              name: "dynamicLayer.actions.remove",
              icon: "mdi-delete",
              callback: () => {
                const S = n.value.catalogues.presets.findIndex(
                  (C) => C.url === p.url
                );
                n.value.catalogues.presets.splice(S, 1);
                const b = d.value.findIndex(
                  (C) => C.title === (p.title ?? p.url)
                );
                d.value.splice(b, 1);
              }
            })
          ]
        });
      });
    }
    return f(), {
      CategoryType: G,
      localConfig: n,
      tabs: r,
      webdataTypes: l,
      cataloguesTypes: i,
      catalogues: d,
      menuCatalogueItem: c,
      dialog: u,
      titleAction: w([
        {
          name: "dynamicLayer.config.addPreset",
          icon: "$vcsPlus",
          callback() {
            u.value = !0, c.value = {
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
      isUrl(p) {
        try {
          return !!new URL(p);
        } catch {
          return "dynamicLayer.errors.invalidUrl";
        }
      },
      checkDefaultTab() {
        n.value.enabledTabs.includes(
          n.value.defaultTab
        ) || (n.value.defaultTab = n.value.enabledTabs[0]);
      },
      addOrUpdate() {
        const p = n.value.catalogues.presets.findIndex(
          (S) => S.url === c.value.url
        );
        p !== -1 ? n.value.catalogues.presets[p] = D(
          c.value
        ) : n.value.catalogues.presets.push(
          D(c.value)
        ), u.value = !1, f();
      },
      apply() {
        const p = structuredClone(
          D(n.value)
        );
        p.enabledTabs.map(D), p.webdata = structuredClone(D(p.webdata)), p.catalogues = {
          itemsPerPage: D(p.catalogues.itemsPerPage),
          presets: p.catalogues.presets.map(
            (S) => structuredClone(D(S))
          )
        }, e.setConfig(p);
      }
    };
  }
}), Tl = { key: 0 }, Ll = { key: 0 }, Al = { class: "d-flex justify-end gc-2 pt-1" };
function Cl(e, t, a, n, r, l) {
  const i = m("VcsLabel"), d = m("v-col"), c = m("VcsSelect"), u = m("v-row"), f = m("VcsFormSection"), p = m("VcsTextField"), S = m("VcsList"), b = m("VcsTextArea"), C = m("VcsFormButton"), N = m("v-form"), M = m("v-card"), F = m("v-dialog"), O = m("v-container"), z = m("AbstractConfigEditor");
  return e.localConfig ? (g(), L(z, Ka({ key: 0 }, { ...e.$attrs, ...e.$props }, { onSubmit: e.apply }), {
    default: s(() => [
      o(O, { class: "pa-0" }, {
        default: s(() => [
          o(f, {
            heading: e.$t("dynamicLayer.config.general"),
            expandable: "",
            "start-open": "",
            disabled: !e.localConfig.enabledTabs.includes(e.CategoryType.WEBDATA)
          }, {
            default: s(() => [
              o(u, { "no-gutters": "" }, {
                default: s(() => [
                  o(d, null, {
                    default: s(() => [
                      o(i, { "html-for": "enabledTabs" }, {
                        default: s(() => [
                          h(
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
                      o(c, {
                        id: "enabledTabs",
                        modelValue: e.localConfig.enabledTabs,
                        "onUpdate:modelValue": [
                          t[0] || (t[0] = (E) => e.localConfig.enabledTabs = E),
                          e.checkDefaultTab
                        ],
                        multiple: "",
                        items: e.tabs,
                        rules: [(E) => !!E.length]
                      }, null, 8, ["modelValue", "items", "rules", "onUpdate:modelValue"])
                    ]),
                    _: 1
                    /* STABLE */
                  })
                ]),
                _: 1
                /* STABLE */
              }),
              o(u, { "no-gutters": "" }, {
                default: s(() => [
                  o(d, null, {
                    default: s(() => [
                      o(i, { "html-for": "defaultTab" }, {
                        default: s(() => [
                          h(
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
                      o(c, {
                        id: "defaultTab",
                        modelValue: e.localConfig.defaultTab,
                        "onUpdate:modelValue": t[1] || (t[1] = (E) => e.localConfig.defaultTab = E),
                        items: e.localConfig.enabledTabs,
                        actions: e.titleAction,
                        "item-text": (E) => e.$t(`dynamicLayer.${E}.title`)
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
          o(f, {
            heading: e.$t("dynamicLayer.webdata.title"),
            expandable: e.localConfig.enabledTabs.includes(e.CategoryType.WEBDATA),
            "start-open": "",
            disabled: !e.localConfig.enabledTabs.includes(e.CategoryType.WEBDATA)
          }, {
            default: s(() => [
              e.localConfig.enabledTabs.includes(e.CategoryType.WEBDATA) ? (g(), A("span", Tl, [
                o(u, { "no-gutters": "" }, {
                  default: s(() => [
                    o(d, null, {
                      default: s(() => [
                        o(i, { "html-for": "webdataType" }, {
                          default: s(() => [
                            h(
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
                        o(c, {
                          id: "webdataType",
                          modelValue: e.localConfig.webdata.defaultType,
                          "onUpdate:modelValue": t[2] || (t[2] = (E) => e.localConfig.webdata.defaultType = E),
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
                o(u, { "no-gutters": "" }, {
                  default: s(() => [
                    o(d, null, {
                      default: s(() => [
                        o(i, { "html-for": "webdataUrl" }, {
                          default: s(() => [
                            h(
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
                        o(p, {
                          id: "webdataUrl",
                          modelValue: e.localConfig.webdata.defaultUrl,
                          "onUpdate:modelValue": t[3] || (t[3] = (E) => e.localConfig.webdata.defaultUrl = E)
                        }, null, 8, ["modelValue"])
                      ]),
                      _: 1
                      /* STABLE */
                    })
                  ]),
                  _: 1
                  /* STABLE */
                })
              ])) : R("v-if", !0)
            ]),
            _: 1
            /* STABLE */
          }, 8, ["heading", "expandable", "disabled"]),
          o(f, {
            heading: e.$t("dynamicLayer.catalogues.title"),
            expandable: e.localConfig.enabledTabs.includes(e.CategoryType.CATALOGUES),
            "start-open": "",
            disabled: !e.localConfig.enabledTabs.includes(e.CategoryType.CATALOGUES)
          }, {
            default: s(() => [
              e.localConfig.enabledTabs.includes(e.CategoryType.CATALOGUES) ? (g(), A("span", Ll, [
                o(u, { "no-gutters": "" }, {
                  default: s(() => [
                    o(d, null, {
                      default: s(() => [
                        o(i, { "html-for": "cataloguesItemsPerPage" }, {
                          default: s(() => [
                            h(
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
                        o(p, {
                          id: "cataloguesItemsPerPage",
                          modelValue: e.localConfig.catalogues.itemsPerPage,
                          "onUpdate:modelValue": t[4] || (t[4] = (E) => e.localConfig.catalogues.itemsPerPage = E),
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
                o(u, { "no-gutters": "" }, {
                  default: s(() => [
                    o(S, {
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
                  "onUpdate:modelValue": t[12] || (t[12] = (E) => e.dialog = E)
                }, {
                  default: s(() => [
                    o(M, { class: "pa-2" }, {
                      default: s(() => [
                        o(N, {
                          onSubmit: qa(e.addOrUpdate, ["prevent"])
                        }, {
                          default: s(() => [
                            o(u, { "no-gutters": "" }, {
                              default: s(() => [
                                o(d, null, {
                                  default: s(() => [
                                    o(i, {
                                      required: "",
                                      "html-for": "title"
                                    }, {
                                      default: s(() => [
                                        h(
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
                                    o(p, {
                                      id: "title",
                                      modelValue: e.menuCatalogueItem.title,
                                      "onUpdate:modelValue": t[5] || (t[5] = (E) => e.menuCatalogueItem.title = E)
                                    }, null, 8, ["modelValue"])
                                  ]),
                                  _: 1
                                  /* STABLE */
                                })
                              ]),
                              _: 1
                              /* STABLE */
                            }),
                            o(u, { "no-gutters": "" }, {
                              default: s(() => [
                                o(d, null, {
                                  default: s(() => [
                                    o(i, {
                                      required: "",
                                      "html-for": "url"
                                    }, {
                                      default: s(() => [
                                        h("URL")
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
                                      id: "url",
                                      modelValue: e.menuCatalogueItem.url,
                                      "onUpdate:modelValue": t[6] || (t[6] = (E) => e.menuCatalogueItem.url = E),
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
                            o(u, { "no-gutters": "" }, {
                              default: s(() => [
                                o(d, null, {
                                  default: s(() => [
                                    o(i, {
                                      required: "",
                                      "html-for": "type"
                                    }, {
                                      default: s(() => [
                                        h(
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
                                    o(c, {
                                      id: "type",
                                      modelValue: e.menuCatalogueItem.type,
                                      "onUpdate:modelValue": t[7] || (t[7] = (E) => e.menuCatalogueItem.type = E),
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
                            o(u, { "no-gutters": "" }, {
                              default: s(() => [
                                o(d, null, {
                                  default: s(() => [
                                    o(i, { "html-for": "subtitle" }, {
                                      default: s(() => [
                                        h(
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
                                    o(p, {
                                      id: "subtitle",
                                      modelValue: e.menuCatalogueItem.subtitle,
                                      "onUpdate:modelValue": t[8] || (t[8] = (E) => e.menuCatalogueItem.subtitle = E)
                                    }, null, 8, ["modelValue"])
                                  ]),
                                  _: 1
                                  /* STABLE */
                                })
                              ]),
                              _: 1
                              /* STABLE */
                            }),
                            o(u, { "no-gutters": "" }, {
                              default: s(() => [
                                o(d, null, {
                                  default: s(() => [
                                    o(i, { "html-for": "logo" }, {
                                      default: s(() => [
                                        h(
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
                                    o(p, {
                                      id: "logo",
                                      modelValue: e.menuCatalogueItem.logo,
                                      "onUpdate:modelValue": t[9] || (t[9] = (E) => e.menuCatalogueItem.logo = E)
                                    }, null, 8, ["modelValue"])
                                  ]),
                                  _: 1
                                  /* STABLE */
                                })
                              ]),
                              _: 1
                              /* STABLE */
                            }),
                            o(u, { "no-gutters": "" }, {
                              default: s(() => [
                                o(b, {
                                  modelValue: e.menuCatalogueItem.description,
                                  "onUpdate:modelValue": t[10] || (t[10] = (E) => e.menuCatalogueItem.description = E),
                                  placeholder: `${e.$t("dynamicLayer.common.description")} (markdown)`
                                }, null, 8, ["modelValue", "placeholder"])
                              ]),
                              _: 1
                              /* STABLE */
                            }),
                            U("span", Al, [
                              o(C, {
                                variant: "filled",
                                type: "submit",
                                disabled: !e.menuCatalogueItem.title || !e.menuCatalogueItem.url
                              }, {
                                default: s(() => [
                                  h(
                                    y(e.$t("dynamicLayer.actions.apply")),
                                    1
                                    /* TEXT */
                                  )
                                ]),
                                _: 1
                                /* STABLE */
                              }, 8, ["disabled"]),
                              o(C, {
                                onClick: t[11] || (t[11] = (E) => e.dialog = !1)
                              }, {
                                default: s(() => [
                                  h(
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
              ])) : R("v-if", !0)
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
  }, 16, ["onSubmit"])) : R("v-if", !0);
}
const El = /* @__PURE__ */ J(wl, [["render", Cl], ["__scopeId", "data-v-a432dd75"]]);
function Il(e) {
  let t, a;
  const n = [], r = B({}), i = En({ mergeArrays: !1 })(ya(), e), d = w([]), c = w(), u = w(
    i.enabledTabs.includes(i.defaultTab) ? i.defaultTab : i.enabledTabs[0]
  ), f = {
    added: w([]),
    selected: w(),
    selectedDataset: w(),
    expandedDistributionIds: w([])
  }, p = {
    added: w([]),
    selected: w(),
    opened: w([])
  };
  return {
    get name() {
      return k;
    },
    get version() {
      return In;
    },
    get mapVersion() {
      return Dn;
    },
    get config() {
      return i;
    },
    state: r,
    activeTab: u,
    addedToMap: d,
    addedSelected: c,
    catalogues: f,
    webdata: p,
    get layerIndex() {
      if (!a) {
        const S = [...t.layers].map((b) => b.zIndex).filter((b) => b < Wa);
        a = Math.max(0, ...S);
      }
      return a += 1, a;
    },
    initialize(S, b) {
      if (t = S, !u.value)
        throw new Error(
          `${k} ${t.vueI18n.t("dynamicLayer.error.noActiveCategory")}`
        );
      const { action: C, destroy: N } = Ca(
        {
          name: "dynamicLayer.title",
          icon: "mdi-database-search-outline",
          title: "dynamicLayer.title"
        },
        {
          id: dt,
          component: Sl,
          state: {
            infoUrlCallback: t.getHelpUrlCallback(
              "/tools/dynamicLayerTool.html"
            ),
            headerTitle: "dynamicLayer.title",
            headerIcon: "mdi-database-search-outline"
          },
          slot: Ea.DETACHED,
          position: {
            left: "20%",
            right: "20%",
            top: "10%",
            height: 600,
            minWidth: 800
          }
        },
        S.windowManager,
        k
      );
      return n.push(N), S.navbarManager.add(
        { id: k, action: C },
        k,
        _a.CONTENT
      ), S.contentTree.add(
        new $a(
          {
            name: k,
            title: "dynamicLayer.contentTreeTitle",
            initOpen: !0
          },
          S
        )
      ), S.featureInfo.add(new Va({ name: k })), i.enabledTabs.includes(G.CATALOGUES) && cr(t, i.catalogues.presets, b == null ? void 0 : b.entry), b && Object.entries(b).forEach(([M, F]) => {
        if (M === "entry")
          r.entry = F, Ra(C);
        else {
          const { type: O, layerNames: z } = F;
          ht(t, M, O).then((E) => {
            E.children.forEach((X) => {
              Ge((_) => {
                z.includes(_.name) && De(t, _).catch((K) => {
                  ge(k).error(String(K));
                });
              }, X);
            }), p.added.value.push(E);
          }).catch((E) => {
            ge(k).error(String(E));
          });
        }
      }), Promise.resolve();
    },
    getState() {
      return r;
    },
    i18n: { en: Nn, de: kn },
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
          component: El,
          title: "dynamicLayer.configEditorTitle",
          infoUrlCallback: t.getHelpUrlCallback(
            "/components/plugins/dynamicLayerConfig.html",
            "app-configurator"
          )
        }
      ];
    },
    destroy() {
      n.forEach((C) => {
        C();
      }), t.navbarManager.remove(k);
      const S = t.contentTree.getByKey(k);
      S && t.contentTree.remove(S);
      const b = t.featureInfo.getByKey(k);
      b && t.featureInfo.remove(b);
    }
  };
}
export {
  Il as default
};
