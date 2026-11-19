
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
} await loadCss('data:text/css;base64,OmRlZXAoLnYtaW5wdXRfX2RldGFpbHMpe2Rpc3BsYXk6bm9uZX1bZGF0YS12LTYwNjZiNDU3XSAudi1maWVsZF9faW5wdXR7cGFkZGluZy1yaWdodDowIWltcG9ydGFudH1bZGF0YS12LTYwNjZiNDU3XSAudi1jb250YWluZXJ7cGFkZGluZzowIWltcG9ydGFudH0ubGlzdC1oZWlnaHRbZGF0YS12LWYzNDFiOTgyXXttYXgtaGVpZ2h0OjI5MHB4O292ZXJmbG93LXk6YXV0b30K');var pn = Object.defineProperty;
var mn = (e, t, r) => t in e ? pn(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var W = (e, t, r) => mn(e, typeof t != "symbol" ? t + "" : t, r);
import { VcsToolButton as hn, getDefaultPrimaryColor as Ft, getHighlightStyle as Cr, NotificationType as Ae, VcsFormButton as Yt, useProxiedComplexModel as zt, VcsLabel as Jt, VcsSelect as dt, VcsCheckbox as Ht, downloadBlob as gn, downloadURI as no, VcsList as En, useProxiedAtomicModel as Sn, VcsTextField as io, VcsTextArea as vn, VcsWizard as yn, VcsWizardStep as bn, AbstractConfigEditor as wn, VcsFormSection as $n, VcsChipArrayInput as Ln, VcsProjection as On, createToggleAction as Tn, WindowSlot as Cn, ToolboxType as Rn } from "../../../assets/ui.js";
import { GeometryType as it, VectorStyleItem as so, VectorLayer as ft, mercatorProjection as je, markVolatile as lo, startCreateFeatureSession as Nn, AbstractInteraction as An, VcsEvent as Mn, EventType as In, ModificationKeyType as Dn, vcsLayerName as ao, CesiumTilesetLayer as uo, TMSLayer as co, WMSLayer as fo, obliqueViewDirectionNames as Rr, moduleIdSymbol as Pn, volatileModuleId as Vn, SingleImageLayer as xn, VectorTileLayer as Fn, wgs84Projection as Ut, CesiumMap as Wt, parseGeoJSON as Un, hidden as po, createAbsoluteFeature as jn, writeGeoJSONFeature as qn, getExtrusionHeightInfo as Bn, vectorStyleSymbol as Gn, ObliqueView as kn, hasSameOrigin as _n, ObliqueImage as Xn, obliqueGeometry as Yn, imageGeometryToMercatorGeometry as zn, ObliqueMap as Kt, TerrainLayer as Jn, Projection as Hn, Extent as mo, ObliqueCollection as Wn, ObliqueViewDirection as Kn, GeoJSONLayer as Zn, getDefaultProjection as Zt } from "../../../assets/core.js";
import { reactive as st, defineComponent as Ie, inject as Ye, ref as le, onMounted as ho, resolveComponent as U, openBlock as q, createBlock as z, withCtx as g, createVNode as p, createElementBlock as ne, Fragment as Oe, renderList as Te, shallowRef as Qn, computed as fe, watch as Fe, createTextVNode as X, toDisplayString as B, createElementVNode as de, normalizeClass as ei, createCommentVNode as Z, onBeforeMount as ti, onUnmounted as go, withDirectives as Tt, withModifiers as Nr, vShow as Ct, createSlots as ri, toRaw as Ar, mergeProps as oi } from "../../../assets/vue.js";
import { VSheet as pt, VInput as Eo, VTooltip as So, VContainer as mt, VRow as ht, VCol as gt, VIcon as vo, VForm as ni, VOverlay as ii, VChip as si, VProgressLinear as li } from "../../../assets/vuetify.js";
import { Color as ai } from "../../../assets/cesium.js";
import { ol$extent$intersects as ui, ol$size$toSize as ci, ol$geom$Polygon as di, ol$sphere$getArea as fi, ol$format$GeoJSON as pi, ol$Feature as Mr } from "../../../assets/ol.js";
var mi = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function yo(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function bo(e) {
  if (e.__esModule) return e;
  var t = e.default;
  if (typeof t == "function") {
    var r = function o() {
      return this instanceof o ? Reflect.construct(t, arguments, this.constructor) : t.apply(this, arguments);
    };
    r.prototype = t.prototype;
  } else r = {};
  return Object.defineProperty(r, "__esModule", { value: !0 }), Object.keys(e).forEach(function(o) {
    var n = Object.getOwnPropertyDescriptor(e, o);
    Object.defineProperty(r, o, n.get ? n : {
      enumerable: !0,
      get: function() {
        return e[o];
      }
    });
  }), r;
}
var hi = function e(t, r) {
  if (t === r) return !0;
  if (t && r && typeof t == "object" && typeof r == "object") {
    if (t.constructor !== r.constructor) return !1;
    var o, n, i;
    if (Array.isArray(t)) {
      if (o = t.length, o != r.length) return !1;
      for (n = o; n-- !== 0; )
        if (!e(t[n], r[n])) return !1;
      return !0;
    }
    if (t.constructor === RegExp) return t.source === r.source && t.flags === r.flags;
    if (t.valueOf !== Object.prototype.valueOf) return t.valueOf() === r.valueOf();
    if (t.toString !== Object.prototype.toString) return t.toString() === r.toString();
    if (i = Object.keys(t), o = i.length, o !== Object.keys(r).length) return !1;
    for (n = o; n-- !== 0; )
      if (!Object.prototype.hasOwnProperty.call(r, i[n])) return !1;
    for (n = o; n-- !== 0; ) {
      var l = i[n];
      if (!e(t[l], r[l])) return !1;
    }
    return !0;
  }
  return t !== t && r !== r;
};
const gi = /* @__PURE__ */ yo(hi), we = "@vcmap/export", Ei = "2.0.9", Si = "^6.0", ke = Symbol("areaSelection");
var wo = /* @__PURE__ */ ((e) => (e.Polygon = "$vcsTriangle", e.BBox = "$vcsBoundingBox", e))(wo || {});
const Rt = st({
  [it.Polygon]: !1,
  [it.BBox]: !1
});
function Nt(e) {
  return new so({
    fill: {
      color: ai.fromCssColorString(e).withAlpha(0.3).toCssColorString()
    },
    stroke: {
      color: e,
      width: 2
    }
  });
}
const vi = Ie({
  name: "SelectionArea",
  components: { VcsToolButton: hn, VSheet: pt, VInput: Eo, VTooltip: So },
  emits: ["sessionstart"],
  setup(e, { emit: t }) {
    const r = Ye("vcsApp"), o = Ft(r), n = le(!1);
    function i() {
      let s = r.layers.getByKey(
        String(ke)
      );
      if (!s) {
        const c = r.uiConfig.config.primaryColor ?? o, u = Nt(c);
        s = new ft({
          name: String(ke),
          projection: je.toJSON(),
          style: u
        }), lo(s), r.layers.add(s);
      }
      return s.activate().catch(() => {
      }), s;
    }
    const l = [
      r.uiConfig.added.addEventListener((s) => {
        (s == null ? void 0 : s.name) === "primaryColor" && i().setStyle(
          Nt(s.value)
        );
      }),
      r.uiConfig.removed.addEventListener((s) => {
        (s == null ? void 0 : s.name) === "primaryColor" && i().setStyle(
          Nt(o)
        );
      })
    ];
    function a(s) {
      const c = i();
      c && (c.removeAllFeatures(), n.value = !1);
      const u = Nn(
        r,
        c,
        it[s]
      );
      t(
        "sessionstart",
        new Promise((E) => {
          let b = null;
          u.stopped.addEventListener(() => {
            Rt[s] = !1, E(b);
          }), u.creationFinished.addEventListener((h) => {
            h && (b = h, u.stop(), n.value = !0);
          });
        })
      ), Rt[s] = !0;
    }
    return ho(() => {
      const s = i();
      n.value = s.getFeatures().length !== 0;
    }), r.windowManager.removed.addEventListener(({ id: s }) => {
      s === Ue && (i().deactivate(), l.forEach((c) => {
        c();
      }));
    }), {
      GeometryType: it,
      waitForGeometry: a,
      AllowedGeometries: wo,
      geometryState: Rt,
      featureDrawn: n
    };
  }
}), De = (e, t) => {
  const r = e.__vccOpts || e;
  for (const [o, n] of t)
    r[o] = n;
  return r;
};
function yi(e, t, r, o, n, i) {
  const l = U("VcsToolButton"), a = U("v-tooltip"), s = U("v-input"), c = U("v-sheet");
  return q(), z(c, { class: "px-1" }, {
    default: g(() => [
      p(s, {
        class: "feature-input",
        "model-value": e.featureDrawn,
        rules: [(u) => !!u || "export.validation.areaSelection"]
      }, {
        message: g(({ message: u }) => [
          p(a, {
            activator: ".feature-input",
            "v-if": u,
            text: e.$st(u),
            "content-class": "bg-error",
            location: "right"
          }, null, 8, ["v-if", "text"])
        ]),
        default: g(() => [
          (q(!0), ne(
            Oe,
            null,
            Te(e.AllowedGeometries, (u, E) => (q(), z(l, {
              key: E,
              icon: u,
              active: e.geometryState[E],
              tooltip: e.$st("export.selectionTypes.draw" + E),
              onClick: (b) => e.waitForGeometry(e.GeometryType[E])
            }, null, 8, ["icon", "active", "tooltip", "onClick"]))),
            128
            /* KEYED_FRAGMENT */
          ))
        ]),
        _: 1
        /* STABLE */
      }, 8, ["model-value", "rules"])
    ]),
    _: 1
    /* STABLE */
  });
}
const bi = /* @__PURE__ */ De(vi, [["render", yi]]);
class wi extends An {
  constructor(r, o) {
    super(In.CLICK, Dn.CTRL);
    W(this, "_app");
    /** All layers that are supported for export with object selection. */
    W(this, "_selectableLayers");
    /** Array with the ids of selected features. */
    W(this, "_selectedFeatures", []);
    W(this, "_featureClicked", new Mn());
    this._app = r, this._selectableLayers = o;
  }
  get featureClicked() {
    return this._featureClicked;
  }
  /**
   * Either adds or removes a feature from the selected features and also adds and removes style.
   * @param feature A clicked feature.
   */
  _selectFeature(r) {
    const o = r.getId();
    this._selectedFeatures.indexOf(o) !== -1 ? (this._selectedFeatures = this._selectedFeatures.filter(
      (n) => n !== o
    ), this._selectableLayers.forEach((n) => {
      n.featureVisibility.unHighlight([o]);
    })) : (this._selectedFeatures.push(o), this._selectableLayers.forEach((n) => {
      n.featureVisibility.highlight({
        [o]: Cr(
          r,
          n,
          this._app.uiConfig.config.primaryColor ?? Ft(this._app)
        )
      });
    }));
  }
  /** Highlights selected features. */
  _highlightSelectedFeatures() {
    const r = this._selectedFeatures.reduce(
      (o, n) => ({
        ...o,
        [n]: Cr(
          // @ts-expect-error feature
          null,
          null,
          this._app.uiConfig.config.primaryColor ?? Ft(this._app)
        )
      }),
      {}
    );
    this._selectableLayers.forEach((o) => {
      o.featureVisibility.highlight(r);
    });
  }
  /** Removes highlight from selected features. */
  clearHighlighting() {
    this._selectableLayers.forEach((r) => {
      r.featureVisibility.unHighlight(this._selectedFeatures);
    });
  }
  /** Removes selection and clears highlighting. */
  clearSelection() {
    this.clearHighlighting(), this._selectedFeatures = [];
  }
  /**
   * Sets the selected features. All previously selected features are unselected.
   * @param features The ids of the features to select.
   */
  set selectedFeatures(r) {
    this.clearSelection(), this._selectedFeatures = r, this._highlightSelectedFeatures();
  }
  // eslint-disable-next-line @typescript-eslint/require-await
  async pipe(r) {
    return r.feature && (this._selectableLayers.some(
      (o) => o.name === r.feature[ao]
    ) ? (this._selectFeature(r.feature), this._featureClicked.raiseEvent(this._selectedFeatures)) : this._app.notifier.add({
      type: Ae.WARNING,
      message: "export.selectionTypes.layerNotSupportedWarning",
      timeout: 5e3
    })), r;
  }
  destroy() {
    super.destroy(), this.clearSelection(), this._featureClicked.destroy();
  }
}
const ze = Symbol("isMatcher"), $i = Symbol("Integer"), Li = Symbol("NonEmptyString"), Qt = /* @__PURE__ */ new Map();
[
  [String, "string"],
  [Number, "number"],
  [Boolean, "boolean"],
  [Function, "function"],
  [void 0, "undefined"],
  [Symbol, "symbol"]
].forEach(([e, t]) => {
  Qt.set(e, t);
});
function Oi(e) {
  return e == null ? void 0 : e[ze];
}
function jt(e) {
  if (!e || String(e) !== "[object Object]")
    return !1;
  const t = Object.getPrototypeOf(e);
  if (!t)
    return !0;
  const o = {}.hasOwnProperty.call(t, "constructor") && t.constructor;
  return typeof o == "function" && String(o) === String(Object);
}
function ce(e, t) {
  if (e === null)
    return "null";
  if (typeof e > "u")
    return "undefined";
  if (t)
    return typeof e;
  let r;
  if (Array.isArray(e))
    r = `[${e.map((n) => ce(n, t)).join(",")}]`;
  else
    try {
      r = JSON.stringify(e);
    } catch {
      r = typeof e;
    }
  return r = r || typeof e, r.length > 20 ? `${r.substring(0, 20)}...` : r;
}
function Ti(e, t) {
  return typeof t == "string" || typeof t == "number" || typeof t == "boolean" || typeof t == "symbol" ? e === t ? !1 : `Expected ${ce(e)} to equal ${t.toString()}` : null;
}
function Ci(e, t, r) {
  if (Array.isArray(t)) {
    if (t.length !== 1)
      throw new Error("Array patterns may only have one type");
    if (Array.isArray(e)) {
      let o = !1;
      return e.findIndex((i) => (o = r(i, t[0]), o)) > -1 ? `${String(o)} in ${ce(e)}` : !1;
    }
    return `Expected ${ce(e)} to be an Array`;
  }
  return null;
}
function qt(e, t, r, o) {
  const n = o ? `${o}.` : "";
  if (!jt(e))
    return `Expected ${ce(e)} to be a plain Object`;
  let l = !1;
  const a = Object.keys(t).find((s) => {
    const c = e[s];
    return jt(t[s]) ? l = qt(c, t[s], r, n + s) : l = r(c, t[s]), l;
  });
  return a ? `${String(l)} in object.${n}${a}` : !1;
}
function Ri(e, t) {
  if (t === Number)
    return Number.isFinite(e) ? !1 : `expected ${ce(e)} to be a number, excluding NaN`;
  if (t === $i)
    return Number.isInteger(e) ? !1 : `expected ${ce(e)} to be an integer number`;
  if (t === Li)
    return typeof e == "string" && e.length > 0 ? !1 : `expected ${ce(e)} to be a non-empty string`;
  const r = Qt.get(t);
  return r ? typeof e === r ? !1 : `expected ${ce(e)} to be a ${String(r)}` : null;
}
function er(e) {
  if (e === null)
    return "null";
  const t = Qt.get(e);
  if (t)
    return t;
  const r = e == null ? void 0 : e.className;
  if (r)
    return r;
  let o = String(e);
  const n = o.match(/function (.*)\(/);
  if (n && n.length > 1) {
    const i = e == null ? void 0 : e.name;
    return i || n[1].substring(0, 20);
  }
  if (jt(e)) {
    const i = {};
    Object.keys(e).forEach((l) => {
      i[l] = er(e[l]);
    });
    try {
      o = `Object of ${JSON.stringify(i)}`;
    } catch {
      o = "Object";
    }
  }
  return o;
}
function tr(e, t) {
  const r = (o, n) => {
    if (Oi(n))
      return n(o);
    if (n == null)
      return o === n ? !1 : `Expected ${ce(o)} to be ${String(n)}`;
    const i = Ri(o, n);
    if (i !== null)
      return i;
    const l = Ti(o, n);
    if (l !== null)
      return l;
    if (Array.isArray(n))
      return Ci(o, n, r);
    if (n === Object)
      return qt(o, {}, r);
    if (n instanceof Function)
      return o instanceof n ? !1 : `Expected ${ce(o, !0)} to be of Type ${er(n)}`;
    if (typeof n == "object") {
      const a = qt(o, n, r);
      return a || !1;
    }
    throw new Error(`Cannot handle pattern ${String(n)}`);
  };
  return r(e, t);
}
let Ni = Error;
function _(e, t) {
  const r = tr(e, t);
  if (r)
    throw new Ni(`Match failed: ${r}`);
}
function K(e) {
  const t = (r) => {
    if (r == null)
      return !1;
    const o = tr(r, e);
    return o && `${o} or undefined or null`;
  };
  return t[ze] = !0, t;
}
function $o(...e) {
  const t = (r) => e.every((n) => tr(r, n)) ? `Expected ${ce(r)} to be a ${e.map((n) => er(n)).join(" or ")}` : !1;
  return t[ze] = !0, t;
}
function Ai(e, t) {
  _(e, Object);
  let r = Object.values(e);
  const o = (n) => r.includes(n) ? !1 : `expected ${ce(n)} to be of enum: ${r.join(", ")}`;
  return o[ze] = !0, o;
}
function be(e) {
  _(e, $o([String], [Number], [Symbol]));
  const t = (r) => e.includes(r) ? !1 : `expected ${ce(r)} to be a member of: ${e.join(", ")}`;
  return t[ze] = !0, t;
}
function Mi(e, t) {
  if (e != null) {
    const r = Number.parseInt(String(e), 10);
    if (r != null && !Number.isNaN(r))
      return r;
  }
  return t;
}
function Se(e, t) {
  return e == null ? !!t : typeof e == "boolean" ? e : e === 1 ? !0 : e === 0 ? !1 : typeof e == "string" && (e.toLowerCase() === "true" || e.toLowerCase() === "1") ? !0 : typeof e == "string" && (e.toLowerCase() === "false" || e.toLowerCase() === "0") ? !1 : !!t;
}
const $e = {
  "2D Shape": {
    texture: !1,
    localCoordinates: !1,
    genericAttributes: !0,
    heightMode: !1
  },
  "3D Shape - PolygonZ": {
    texture: !1,
    localCoordinates: !1,
    genericAttributes: !0,
    heightMode: !0
  },
  "3D Shape - Multipatch": {
    texture: !1,
    localCoordinates: !1,
    genericAttributes: !0,
    heightMode: !0
  },
  "ESRI FGDB": {
    texture: !1,
    localCoordinates: !1,
    genericAttributes: !0,
    heightMode: !0
  },
  KMZ: {
    texture: !0,
    localCoordinates: !0,
    genericAttributes: !0,
    heightMode: !0
  },
  CityGML: {
    texture: !0,
    localCoordinates: !1,
    genericAttributes: !0,
    heightMode: !1
  },
  CityJSON: {
    texture: !0,
    localCoordinates: !1,
    genericAttributes: !0,
    heightMode: !1
  },
  DXF: {
    texture: !1,
    localCoordinates: !0,
    genericAttributes: !1,
    heightMode: !0
  },
  DWG: {
    texture: !1,
    localCoordinates: !0,
    genericAttributes: !1,
    heightMode: !0
  },
  "3DS": {
    texture: !0,
    localCoordinates: !0,
    genericAttributes: !1,
    heightMode: !0
  },
  SketchUp: {
    texture: !0,
    localCoordinates: !0,
    genericAttributes: !1,
    heightMode: !0
  },
  OBJ: {
    texture: !0,
    localCoordinates: !0,
    genericAttributes: !1,
    heightMode: !0
  },
  VRML: {
    texture: !0,
    localCoordinates: !0,
    genericAttributes: !1,
    heightMode: !0
  },
  COLLADA: {
    texture: !0,
    localCoordinates: !0,
    genericAttributes: !1,
    heightMode: !0
  },
  GLTF: {
    texture: !0,
    localCoordinates: !0,
    genericAttributes: !1,
    heightMode: !0
  },
  "3DPDF": {
    texture: !0,
    localCoordinates: !1,
    genericAttributes: !0,
    heightMode: !0
  },
  FMEAR: {
    texture: !0,
    localCoordinates: !1,
    genericAttributes: !1,
    heightMode: !0
  },
  STL: {
    texture: !1,
    localCoordinates: !0,
    genericAttributes: !1,
    heightMode: !0
  },
  STEP: {
    texture: !1,
    localCoordinates: !0,
    genericAttributes: !1,
    heightMode: !0
  },
  GEOPACKAGE: {
    texture: !1,
    localCoordinates: !1,
    genericAttributes: !0,
    heightMode: !0
  },
  FBX: {
    texture: !0,
    localCoordinates: !0,
    genericAttributes: !1,
    heightMode: !0
  }
}, Lo = {
  26: "Building",
  7: "SolitaryVegetationObjects",
  5: "GenericCityObject",
  21: "CityFurniture",
  14: "ReliefFeature",
  85: "Tunnel",
  64: "Bridge",
  45: "Road",
  44: "Railway",
  43: "Track",
  46: "Square",
  8: "Plant Cover",
  9: "WaterBody",
  4: "LandUse"
};
function Oo(e) {
  const t = {
    85: !0,
    45: !0,
    44: !0,
    43: !0,
    46: !0,
    8: !0,
    9: !0,
    4: !0
  };
  return e.map((r) => ({
    value: r,
    title: Lo[r],
    citygmlOnly: t[r]
  }));
}
var ee = /* @__PURE__ */ ((e) => (e.AREA_SELECTION = "areaSelection", e.OBJECT_SELECTION = "objectSelection", e.CURRENT_IMAGE = "currentImage", e))(ee || {}), J = /* @__PURE__ */ ((e) => (e.CITY_MODEL = "cityModel", e.OBLIQUE = "oblique", e.GEOJSON = "geojson", e))(J || {}), rr = /* @__PURE__ */ ((e) => (e.ABSOLUTE = "absolute", e.ELLIPSOID = "ellipsoid", e))(rr || {}), To = /* @__PURE__ */ ((e) => (e.LOD1 = "LoD1", e.LOD2 = "LoD2", e.LOD3 = "LoD3", e.LOD4 = "LoD4", e.HALOD = "haLoD", e))(To || {});
function Ii(e, t) {
  _(
    e.exportFormatList,
    K([be(Object.keys($e))])
  ), _(
    e.exportFormatDefault || t.exportFormatDefault,
    [
      be(
        e.exportFormatList || t.exportFormatList
      )
    ]
  ), _(
    e.thematicClassList,
    K([be(Object.keys(Lo))])
  ), _(
    e.thematicClassDefault || t.thematicClassDefault,
    [
      be(
        e.thematicClassList || t.thematicClassList
      )
    ]
  ), _(
    e.lodList,
    K([be(Object.values(To))])
  ), _(
    e.lodDefault || t.lodDefault,
    be(e.lodList || t.lodList)
  ), _(e.appearanceThemeList, K([String])), _(
    e.appearanceThemeDefault || t.appearanceThemeDefault,
    be(
      e.appearanceThemeList || t.appearanceThemeList
    )
  ), _(
    e.dataSourceOptionsList,
    K([{ type: be(Object.values(J)) }])
  ), _(e.heightModeDefault, K(Ai(rr))), _(e.terrainAppearanceOptions, K(Object)), _(e.terrainZoomLevel, K(Number)), _(e.allowHeightMode, K(Boolean)), _(e.allowTextureExport, K(Boolean)), _(e.allowAddGenericAttrs, K(Boolean)), _(e.allowTiledExport, K(Boolean)), _(e.allowTerrainExport, K(Boolean)), _(e.termsOfUse, K(String)), _(e.allowDescription, K(Boolean)), _(e.exportScene, K(Boolean)), _(e.crs, K($o(String, [String]))), _(e.dataProjection, K(Object)), _(e.maxSelectionArea, K(Number)), _(e.allowEmail, K(Boolean)), _(e.allowExportName, K(Boolean));
  const r = e.dataSourceOptionsList || t.dataSourceOptionsList;
  r.forEach((T) => {
    T.type === "geojson" && (T.title ? T.title : T.title = "export.dataSources.geojson", T.help ? T.help : T.help = "export.help.dataSources.geojson");
  }), r.some(
    (T) => T.type === "cityModel"
    /* CITY_MODEL */
  ) && (_(e.fmeServerUrl, String), _(e.fmeSecurityToken, K(String)));
  const o = e.exportFormatList || t.exportFormatList, n = e.exportFormatDefault || t.exportFormatDefault, i = e.lodList || t.lodList, l = e.lodDefault || t.lodDefault, a = e.thematicClassList || t.thematicClassList, s = e.thematicClassDefault || t.thematicClassDefault, c = e.termsOfUse !== void 0 ? e.termsOfUse : t.termsOfUse, u = e.appearanceThemeList || t.appearanceThemeList, E = e.appearanceThemeDefault || t.appearanceThemeDefault, b = e.terrainAppearanceOptions || {}, h = Se(
    e.allowHeightMode,
    t.allowHeightMode
  ), w = e.heightModeDefault || t.heightModeDefault, v = Se(
    e.allowTextureExport,
    t.allowTextureExport
  ), M = Se(
    e.allowAddGenericAttrs,
    t.allowAddGenericAttrs
  ), f = Se(
    e.allowTiledExport,
    t.allowTiledExport
  ), d = Se(
    e.allowTerrainExport,
    t.allowTerrainExport
  ), m = e.terrainUrl || t.terrainUrl, y = Mi(
    e.terrainZoomLevel,
    t.terrainZoomLevel || void 0
  ) || null, R = e.dataProjection || t.dataProjection, A = e.crs || t.crs, N = Se(
    e.allowDescription,
    t.allowDescription
  ), I = e.fmeSecurityToken || t.fmeSecurityToken, G = e.fmeServerUrl || t.fmeServerUrl, C = e.maxSelectionArea || t.maxSelectionArea, F = Array.isArray(A) ? A[0] : A, k = Se(
    e.exportScene,
    t.exportScene
  ), j = Se(
    e.allowExportName,
    t.allowExportName
  ), $ = Se(
    e.allowEmail,
    t.allowEmail
  );
  return {
    pluginConfig: {
      settingsCityModel: {
        exportFormatList: o,
        lodList: i,
        thematicClassList: a,
        terrainAppearanceOptions: b,
        appearanceThemeList: u,
        allowHeightMode: h,
        allowTextureExport: v,
        allowAddGenericAttrs: M,
        allowTiledExport: f,
        allowTerrainExport: d,
        crs: A,
        terrainUrl: m,
        terrainZoomLevel: y,
        dataProjection: R,
        exportScene: k,
        fmeSecurityToken: I,
        fmeServerUrl: G
      },
      allowExportName: j,
      allowEmail: $,
      termsOfUse: c,
      dataSourceOptionsList: r,
      allowDescription: N,
      maxSelectionArea: C,
      defaults: {
        exportFormatDefault: n,
        lodDefault: l,
        thematicClassDefault: s,
        appearanceThemeDefault: E,
        heightModeDefault: w
      }
    },
    pluginState: {
      step: 0,
      highestStep: 0,
      settingsCityModel: {
        selectedExportFormats: n,
        selectedLod: l,
        selectedThematicClasses: s,
        terrainExport: !1,
        textureExport: !1,
        tiledExport: !1,
        localCoordinates: !1,
        genericAttributes: !1,
        selectedCrs: F,
        selectedAppearanceTheme: E,
        selectedTerrainAppearanceLayer: null,
        selectedHeightMode: w
      },
      settingsOblique: {
        directionFilter: null
      },
      termsConsented: !1,
      email: null,
      exportName: null,
      description: "",
      selectedSelectionType: null,
      selectedDataSourceOptions: null,
      selectedObjects: [],
      selectedResultItems: []
    }
  };
}
function At(e, t) {
  return [...e.layers].filter(
    (r) => r instanceof uo && r.properties.exportWorkbench === t
  );
}
const Di = Ie({
  name: "SelectionObjects",
  components: {
    VContainer: mt,
    VRow: ht,
    VCol: gt,
    VIcon: vo,
    VInput: Eo,
    VcsFormButton: Yt,
    VTooltip: So
  },
  props: {
    modelValue: {
      type: Array,
      required: !0
    },
    buttonDisabled: {
      type: Boolean,
      required: !0
    },
    buttonShow: {
      type: Boolean,
      default: !0
    },
    isReset: {
      type: Boolean,
      required: !0
    }
  },
  emits: ["continue", "update:modelValue"],
  setup(e, { emit: t }) {
    const r = Ye("vcsApp"), o = r.plugins.getByKey(we), n = Qn(
      At(r, o.config.settingsCityModel.fmeServerUrl)
    ), i = zt(e, "modelValue", t), l = le(i.value.length), { eventHandler: a } = r.maps, s = new wi(
      r,
      n.value
    );
    s.id = "objectSelectionInteractionId";
    const c = fe(() => n.value.map(
      (w) => {
        var v;
        return ((v = w.properties) == null ? void 0 : v.title) ?? w.name;
      }
    ));
    let u = () => {
    }, E = () => {
    };
    u = () => {
      E(), i.value = [], l.value = 0, s.clearSelection(), s.destroy();
    };
    const b = [
      s.featureClicked.addEventListener((w) => {
        i.value = w, l.value = w.length;
      }),
      a.exclusiveAdded.addEventListener(() => {
        s.id !== a.exclusiveInteractionId && o.state.selectedSelectionType === ee.OBJECT_SELECTION && (r.windowManager.remove(Ue), b.forEach((w) => {
          w();
        }));
      }),
      a.addExclusiveInteraction(
        s,
        () => {
          u == null || u();
        },
        void 0,
        s.id
      ),
      r.layers.added.addEventListener((w) => {
        w.properties.exportWorkbench === o.config.settingsCityModel.fmeServerUrl && (n.value = At(
          r,
          o.config.settingsCityModel.fmeServerUrl
        ));
      }),
      r.layers.removed.addEventListener((w) => {
        w.properties.exportWorkbench === o.config.settingsCityModel.fmeServerUrl && (n.value = At(
          r,
          o.config.settingsCityModel.fmeServerUrl
        ));
      }),
      r.windowManager.removed.addEventListener(({ id: w }) => {
        w === Ue && (b.forEach((v) => {
          v();
        }), u());
      })
    ];
    E = Fe(
      () => e.modelValue,
      () => {
        s.selectedFeatures = e.modelValue, l.value = e.modelValue.length;
      },
      { immediate: !0 }
    );
    function h(w) {
      return !!w || "export.validation.objectSelection";
    }
    return {
      selectableLayerNames: c,
      count: l,
      objectSelectionRule: h
    };
  }
});
function Pi(e, t, r, o, n, i) {
  const l = U("v-icon"), a = U("v-col"), s = U("v-row"), c = U("v-tooltip"), u = U("v-input"), E = U("VcsFormButton"), b = U("v-container");
  return q(), z(b, { class: "px-1 py-0" }, {
    default: g(() => [
      p(s, { "no-gutters": "" }, {
        default: g(() => [
          p(a, null, {
            default: g(() => [
              X(
                B(e.$t("export.selectionTypes.objectSelection1")) + " ",
                1
                /* TEXT */
              ),
              p(l, null, {
                default: g(() => [
                  X("$vcsPointSelect")
                ]),
                _: 1
                /* STABLE */
              }),
              X(
                " " + B(e.$t("export.selectionTypes.objectSelection2")) + ". ",
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
      p(s, {
        "no-gutters": "",
        class: "mt-1 mb-0"
      }, {
        default: g(() => [
          p(a, null, {
            default: g(() => [
              X(
                B(e.$t("export.selectionTypes.selectableLayers")) + ": ",
                1
                /* TEXT */
              )
            ]),
            _: 1
            /* STABLE */
          }),
          p(a, { class: "d-flex justify-end" }, {
            default: g(() => [
              de("ul", null, [
                (q(!0), ne(
                  Oe,
                  null,
                  Te(e.selectableLayerNames, (h) => (q(), ne(
                    "li",
                    { key: h },
                    B(h),
                    1
                    /* TEXT */
                  ))),
                  128
                  /* KEYED_FRAGMENT */
                ))
              ])
            ]),
            _: 1
            /* STABLE */
          })
        ]),
        _: 1
        /* STABLE */
      }),
      p(s, { "no-gutters": "" }, {
        default: g(() => [
          p(u, {
            class: ei(["feature-input", { "text-error": e.count === 0 && e.isReset }]),
            "model-value": e.count,
            rules: [e.objectSelectionRule]
          }, {
            message: g(({ message: h }) => [
              p(c, {
                activator: ".feature-input",
                "v-if": h,
                text: e.$st(h),
                "content-class": "bg-error",
                location: "right"
              }, null, 8, ["v-if", "text"])
            ]),
            default: g(() => [
              p(a, {
                cols: "8",
                class: "px-0 py-1"
              }, {
                default: g(() => [
                  X(
                    B(e.$t("export.selectionTypes.objectCount")) + ": ",
                    1
                    /* TEXT */
                  )
                ]),
                _: 1
                /* STABLE */
              }),
              p(a, {
                cols: "4",
                class: "px-0 py-1 d-flex justify-end"
              }, {
                default: g(() => [
                  de(
                    "span",
                    null,
                    B(e.count),
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
          }, 8, ["model-value", "rules", "class"])
        ]),
        _: 1
        /* STABLE */
      }),
      e.buttonShow ? (q(), z(s, {
        key: 0,
        "no-gutters": ""
      }, {
        default: g(() => [
          p(a, { class: "d-flex flex-row-reverse" }, {
            default: g(() => [
              p(E, {
                disabled: e.buttonDisabled,
                onClick: t[0] || (t[0] = (h) => e.$emit("continue"))
              }, {
                default: g(() => [
                  X(
                    B(e.$t("export.continue")),
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
      })) : Z("v-if", !0)
    ]),
    _: 1
    /* STABLE */
  });
}
const Vi = /* @__PURE__ */ De(Di, [["render", Pi]]), xi = Ie({
  name: "SettingsCityModel",
  components: {
    VContainer: mt,
    VRow: ht,
    VCol: gt,
    VcsLabel: Jt,
    VcsSelect: dt,
    VcsCheckbox: Ht,
    VcsFormButton: Yt
  },
  props: {
    modelValue: {
      type: Object,
      required: !0
    },
    setup: {
      type: Object,
      required: !0
    },
    buttonDisabled: {
      type: Boolean,
      required: !0
    },
    buttonShow: {
      type: Boolean,
      default: !0
    }
  },
  emits: ["continue", "update:modelValue"],
  setup(e, { emit: t }) {
    const r = zt(
      e,
      "modelValue",
      t
    ), o = {
      exportFormat: {
        items: e.setup.exportFormatList,
        i18n: "export.settingsCityModel.exportFormat",
        multiple: !0,
        stateName: "selectedExportFormats"
      },
      lod: {
        items: e.setup.lodList,
        i18n: "export.settingsCityModel.lod",
        multiple: !1,
        stateName: "selectedLod"
      },
      thematicClassList: {
        items: Oo(e.setup.thematicClassList),
        i18n: "export.settingsCityModel.thematicClasses",
        multiple: !0,
        stateName: "selectedThematicClasses"
      }
    }, n = {};
    function i() {
      if (Object.keys(e.setup.terrainAppearanceOptions).length === 0) {
        [...Ye("vcsApp").layers].filter(
          (E) => E instanceof co || E instanceof fo
        ).forEach((E) => {
          const { name: b, maxLevel: h } = E;
          n[b] = h;
        });
        const u = Object.keys(n);
        u.length > 0 && (r.value.selectedTerrainAppearanceLayer = u[0]);
      }
    }
    ti(() => {
      i();
    });
    const l = fe(() => {
      const c = {
        showTerrainExport: {
          render: e.setup.allowTerrainExport && r.value.selectedExportFormats.some(
            (u) => u !== "2D Shape"
          ),
          i18n: "export.settingsCityModel.terrainExport",
          stateName: "terrainExport"
        },
        showAddGenericAttr: {
          render: e.setup.allowAddGenericAttrs && r.value.selectedExportFormats.some(
            (u) => $e[u].genericAttributes
          ),
          i18n: "export.settingsCityModel.genericAttrs",
          stateName: "genericAttributes"
        },
        showTextureExport: {
          render: e.setup.allowTextureExport && r.value.selectedExportFormats.some(
            (u) => $e[u].texture
          ),
          i18n: "export.settingsCityModel.textureExport",
          stateName: "textureExport",
          selectFields: [
            {
              name: "appearanceThemeOptions",
              render: e.setup.appearanceThemeList.length > 0,
              i18n: "export.settingsCityModel.appearanceTheme",
              items: e.setup.appearanceThemeList,
              stateName: "selectedAppearanceTheme"
            },
            {
              name: "terrainAppearanceOptions",
              render: Object.keys(n).length > 0 && r.value.terrainExport,
              i18n: "export.settingsCityModel.terrainTexture",
              items: Object.keys(n),
              stateName: "selectedTerrainAppearanceLayer"
            }
          ]
        },
        showUseLocalCoors: {
          render: r.value.selectedExportFormats.some(
            (u) => $e[u].localCoordinates
          ),
          i18n: "export.settingsCityModel.localCoordinates",
          stateName: "localCoordinates"
        },
        // TODO: replace by setup prop
        showTiledExport: {
          render: e.setup.allowTiledExport,
          i18n: "export.settingsCityModel.tiledExport",
          stateName: "tiledExport"
        }
      };
      return Object.keys(c).filter((u) => !c[u].render).forEach((u) => delete c[u]), Object.keys(c).filter(
        (u) => Object.prototype.hasOwnProperty.call(c[u], "selectFields")
      ).forEach((u) => {
        var b;
        const E = c[u];
        if ("selectFields" in E) {
          const h = (b = E.selectFields) == null ? void 0 : b.filter(
            (w) => w.render
          );
          (h == null ? void 0 : h.length) === 0 ? delete E.selectFields : E.selectFields = h;
        }
      }), c;
    }), a = fe(() => !r.value.terrainExport && e.setup.allowHeightMode && r.value.selectedExportFormats.some(
      (c) => $e[c].heightMode
    )), s = fe(
      () => Array.isArray(e.setup.crs) && r.value.selectedExportFormats.some(
        (c) => !$e[c].localCoordinates
      )
    );
    return {
      settingsState: r,
      mainSettingsSetup: o,
      formatSettingsSetup: l,
      showHeightMode: a,
      showCrsInput: s
    };
  }
});
function Fi(e, t, r, o, n, i) {
  const l = U("VcsLabel"), a = U("v-col"), s = U("VcsSelect"), c = U("v-row"), u = U("VcsCheckbox"), E = U("VcsFormButton"), b = U("v-container");
  return q(), z(b, { class: "pa-0" }, {
    default: g(() => [
      Z(" main settings "),
      (q(!0), ne(
        Oe,
        null,
        Te(e.mainSettingsSetup, (h, w) => (q(), z(
          c,
          {
            key: w,
            "no-gutters": ""
          },
          {
            default: g(() => [
              p(
                a,
                {
                  class: "pa-0",
                  cols: "6"
                },
                {
                  default: g(() => [
                    p(l, {
                      "html-for": w + "Select"
                    }, {
                      default: g(() => [
                        X(
                          B(e.$st(h.i18n)),
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
              p(
                a,
                {
                  class: "pa-0",
                  cols: "6"
                },
                {
                  default: g(() => [
                    p(s, {
                      id: w + "Select",
                      modelValue: e.settingsState[h.stateName],
                      "onUpdate:modelValue": (v) => e.settingsState[h.stateName] = v,
                      items: h.items,
                      multiple: h.multiple,
                      rules: [
                        (v) => !!v.length || e.$t("export.validation.selectFieldMultiple")
                      ]
                    }, null, 8, ["id", "modelValue", "onUpdate:modelValue", "items", "multiple", "rules"])
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
      )),
      Z(" settings that depend on the selected formats "),
      (q(!0), ne(
        Oe,
        null,
        Te(e.formatSettingsSetup, (h, w) => (q(), ne("div", { key: w }, [
          p(
            c,
            { "no-gutters": "" },
            {
              default: g(() => [
                p(
                  a,
                  { class: "pa-0" },
                  {
                    default: g(() => [
                      p(u, {
                        modelValue: e.settingsState[h.stateName],
                        "onUpdate:modelValue": (v) => e.settingsState[h.stateName] = v,
                        label: h.i18n
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "label"])
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
          ),
          e.settingsState[h.stateName] ? (q(!0), ne(
            Oe,
            { key: 0 },
            Te(("selectFields" in h ? h.selectFields : []) || [], (v) => (q(), z(
              c,
              {
                key: v.name,
                "no-gutter": "",
                class: "ma-0 pl-6"
              },
              {
                default: g(() => [
                  p(
                    a,
                    {
                      class: "pa-0",
                      cols: "6"
                    },
                    {
                      default: g(() => [
                        p(l, {
                          "html-for": v.name + "Select"
                        }, {
                          default: g(() => [
                            X(
                              B(e.$st(v.i18n)),
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
                  p(
                    a,
                    {
                      class: "pa-0",
                      cols: "6"
                    },
                    {
                      default: g(() => [
                        p(s, {
                          id: v.name + "Select",
                          modelValue: e.settingsState[v.stateName],
                          "onUpdate:modelValue": (M) => e.settingsState[v.stateName] = M,
                          items: v.items
                        }, null, 8, ["id", "modelValue", "onUpdate:modelValue", "items"])
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
          )) : Z("v-if", !0)
        ]))),
        128
        /* KEYED_FRAGMENT */
      )),
      e.showHeightMode ? (q(), z(c, {
        key: 0,
        "no-gutters": ""
      }, {
        default: g(() => [
          p(a, {
            class: "pa-0",
            cols: "6"
          }, {
            default: g(() => [
              p(l, { "html-for": "height-mode-select" }, {
                default: g(() => [
                  X(
                    B(e.$t("export.settingsCityModel.heightMode")),
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
          p(a, {
            class: "pa-0",
            cols: "6"
          }, {
            default: g(() => [
              p(s, {
                id: "height-mode-select",
                modelValue: e.settingsState.selectedHeightMode,
                "onUpdate:modelValue": t[0] || (t[0] = (h) => e.settingsState.selectedHeightMode = h),
                items: [
                  {
                    value: "absolute",
                    title: e.$t("export.settingsCityModel.absolute")
                  },
                  {
                    value: "ellipsoid",
                    title: e.$t("export.settingsCityModel.ellipsoid")
                  }
                ]
              }, null, 8, ["modelValue", "items"])
            ]),
            _: 1
            /* STABLE */
          })
        ]),
        _: 1
        /* STABLE */
      })) : Z("v-if", !0),
      e.showCrsInput ? (q(), z(c, {
        key: 1,
        "no-gutters": ""
      }, {
        default: g(() => [
          p(a, {
            class: "pa-0",
            cols: "6"
          }, {
            default: g(() => [
              p(l, { "html-for": "crs-input" }, {
                default: g(() => [
                  X(
                    B(e.$t("export.settingsCityModel.coordinateSystem")),
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
          p(a, {
            class: "pa-0",
            cols: "6"
          }, {
            default: g(() => [
              p(s, {
                id: "crs-input",
                modelValue: e.settingsState.selectedCrs,
                "onUpdate:modelValue": t[1] || (t[1] = (h) => e.settingsState.selectedCrs = h),
                items: e.setup.crs
              }, null, 8, ["modelValue", "items"])
            ]),
            _: 1
            /* STABLE */
          })
        ]),
        _: 1
        /* STABLE */
      })) : Z("v-if", !0),
      e.buttonShow ? (q(), z(c, {
        key: 2,
        "no-gutters": ""
      }, {
        default: g(() => [
          p(a, {
            cols: "12",
            class: "px-1 d-flex flex-row-reverse"
          }, {
            default: g(() => [
              p(E, {
                disabled: e.buttonDisabled,
                onClick: t[2] || (t[2] = (h) => e.$emit("continue"))
              }, {
                default: g(() => [
                  X(
                    B(e.$t("export.continue")),
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
      })) : Z("v-if", !0)
    ]),
    _: 1
    /* STABLE */
  });
}
const Ui = /* @__PURE__ */ De(xi, [["render", Fi]]), ji = Ie({
  name: "SettingsOblique",
  components: {
    VSheet: pt,
    VContainer: mt,
    VRow: ht,
    VCol: gt,
    VcsLabel: Jt,
    VcsSelect: dt
  },
  props: {
    modelValue: {
      type: Object,
      required: !0
    }
  },
  setup(e, { emit: t }) {
    const r = zt(e, "modelValue", t), { nadir: o, ...n } = Rr, i = Object.keys({ nadir: o, ...n }).map(
      (l) => ({
        value: Rr[l],
        title: `export.settingsOblique.${l}`
      })
    );
    return {
      settingsState: r,
      directionFilterItems: i
    };
  }
});
function qi(e, t, r, o, n, i) {
  const l = U("VcsLabel"), a = U("v-col"), s = U("VcsSelect"), c = U("v-row"), u = U("v-container"), E = U("v-sheet");
  return q(), z(E, null, {
    default: g(() => [
      p(u, null, {
        default: g(() => [
          p(c, { "no-gutters": "" }, {
            default: g(() => [
              p(a, { cols: "7" }, {
                default: g(() => [
                  p(l, null, {
                    default: g(() => [
                      X(
                        B(e.$t("export.settingsOblique.directionFilter")),
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
              p(a, { cols: "5" }, {
                default: g(() => [
                  p(s, {
                    modelValue: e.settingsState.directionFilter,
                    "onUpdate:modelValue": t[0] || (t[0] = (b) => e.settingsState.directionFilter = b),
                    items: e.directionFilterItems,
                    rules: [
                      (b) => !!b || "Please select at least one option."
                    ],
                    placeholder: e.$t("export.settingsOblique.directionPlaceholder")
                  }, null, 8, ["modelValue", "items", "rules", "placeholder"])
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
  });
}
const Bi = /* @__PURE__ */ De(ji, [["render", qi], ["__scopeId", "data-v-6066b457"]]);
var Bt = { exports: {} };
const Gi = "2.0.0", Co = 256, ki = Number.MAX_SAFE_INTEGER || /* istanbul ignore next */
9007199254740991, _i = 16, Xi = Co - 6, Yi = [
  "major",
  "premajor",
  "minor",
  "preminor",
  "patch",
  "prepatch",
  "prerelease"
];
var Et = {
  MAX_LENGTH: Co,
  MAX_SAFE_COMPONENT_LENGTH: _i,
  MAX_SAFE_BUILD_LENGTH: Xi,
  MAX_SAFE_INTEGER: ki,
  RELEASE_TYPES: Yi,
  SEMVER_SPEC_VERSION: Gi,
  FLAG_INCLUDE_PRERELEASE: 1,
  FLAG_LOOSE: 2
};
const zi = typeof process == "object" && process.env && process.env.NODE_DEBUG && /\bsemver\b/i.test(process.env.NODE_DEBUG) ? (...e) => console.error("SEMVER", ...e) : () => {
};
var St = zi;
(function(e, t) {
  const {
    MAX_SAFE_COMPONENT_LENGTH: r,
    MAX_SAFE_BUILD_LENGTH: o,
    MAX_LENGTH: n
  } = Et, i = St;
  t = e.exports = {};
  const l = t.re = [], a = t.safeRe = [], s = t.src = [], c = t.safeSrc = [], u = t.t = {};
  let E = 0;
  const b = "[a-zA-Z0-9-]", h = [
    ["\\s", 1],
    ["\\d", n],
    [b, o]
  ], w = (M) => {
    for (const [f, d] of h)
      M = M.split(`${f}*`).join(`${f}{0,${d}}`).split(`${f}+`).join(`${f}{1,${d}}`);
    return M;
  }, v = (M, f, d) => {
    const m = w(f), y = E++;
    i(M, y, f), u[M] = y, s[y] = f, c[y] = m, l[y] = new RegExp(f, d ? "g" : void 0), a[y] = new RegExp(m, d ? "g" : void 0);
  };
  v("NUMERICIDENTIFIER", "0|[1-9]\\d*"), v("NUMERICIDENTIFIERLOOSE", "\\d+"), v("NONNUMERICIDENTIFIER", `\\d*[a-zA-Z-]${b}*`), v("MAINVERSION", `(${s[u.NUMERICIDENTIFIER]})\\.(${s[u.NUMERICIDENTIFIER]})\\.(${s[u.NUMERICIDENTIFIER]})`), v("MAINVERSIONLOOSE", `(${s[u.NUMERICIDENTIFIERLOOSE]})\\.(${s[u.NUMERICIDENTIFIERLOOSE]})\\.(${s[u.NUMERICIDENTIFIERLOOSE]})`), v("PRERELEASEIDENTIFIER", `(?:${s[u.NONNUMERICIDENTIFIER]}|${s[u.NUMERICIDENTIFIER]})`), v("PRERELEASEIDENTIFIERLOOSE", `(?:${s[u.NONNUMERICIDENTIFIER]}|${s[u.NUMERICIDENTIFIERLOOSE]})`), v("PRERELEASE", `(?:-(${s[u.PRERELEASEIDENTIFIER]}(?:\\.${s[u.PRERELEASEIDENTIFIER]})*))`), v("PRERELEASELOOSE", `(?:-?(${s[u.PRERELEASEIDENTIFIERLOOSE]}(?:\\.${s[u.PRERELEASEIDENTIFIERLOOSE]})*))`), v("BUILDIDENTIFIER", `${b}+`), v("BUILD", `(?:\\+(${s[u.BUILDIDENTIFIER]}(?:\\.${s[u.BUILDIDENTIFIER]})*))`), v("FULLPLAIN", `v?${s[u.MAINVERSION]}${s[u.PRERELEASE]}?${s[u.BUILD]}?`), v("FULL", `^${s[u.FULLPLAIN]}$`), v("LOOSEPLAIN", `[v=\\s]*${s[u.MAINVERSIONLOOSE]}${s[u.PRERELEASELOOSE]}?${s[u.BUILD]}?`), v("LOOSE", `^${s[u.LOOSEPLAIN]}$`), v("GTLT", "((?:<|>)?=?)"), v("XRANGEIDENTIFIERLOOSE", `${s[u.NUMERICIDENTIFIERLOOSE]}|x|X|\\*`), v("XRANGEIDENTIFIER", `${s[u.NUMERICIDENTIFIER]}|x|X|\\*`), v("XRANGEPLAIN", `[v=\\s]*(${s[u.XRANGEIDENTIFIER]})(?:\\.(${s[u.XRANGEIDENTIFIER]})(?:\\.(${s[u.XRANGEIDENTIFIER]})(?:${s[u.PRERELEASE]})?${s[u.BUILD]}?)?)?`), v("XRANGEPLAINLOOSE", `[v=\\s]*(${s[u.XRANGEIDENTIFIERLOOSE]})(?:\\.(${s[u.XRANGEIDENTIFIERLOOSE]})(?:\\.(${s[u.XRANGEIDENTIFIERLOOSE]})(?:${s[u.PRERELEASELOOSE]})?${s[u.BUILD]}?)?)?`), v("XRANGE", `^${s[u.GTLT]}\\s*${s[u.XRANGEPLAIN]}$`), v("XRANGELOOSE", `^${s[u.GTLT]}\\s*${s[u.XRANGEPLAINLOOSE]}$`), v("COERCEPLAIN", `(^|[^\\d])(\\d{1,${r}})(?:\\.(\\d{1,${r}}))?(?:\\.(\\d{1,${r}}))?`), v("COERCE", `${s[u.COERCEPLAIN]}(?:$|[^\\d])`), v("COERCEFULL", s[u.COERCEPLAIN] + `(?:${s[u.PRERELEASE]})?(?:${s[u.BUILD]})?(?:$|[^\\d])`), v("COERCERTL", s[u.COERCE], !0), v("COERCERTLFULL", s[u.COERCEFULL], !0), v("LONETILDE", "(?:~>?)"), v("TILDETRIM", `(\\s*)${s[u.LONETILDE]}\\s+`, !0), t.tildeTrimReplace = "$1~", v("TILDE", `^${s[u.LONETILDE]}${s[u.XRANGEPLAIN]}$`), v("TILDELOOSE", `^${s[u.LONETILDE]}${s[u.XRANGEPLAINLOOSE]}$`), v("LONECARET", "(?:\\^)"), v("CARETTRIM", `(\\s*)${s[u.LONECARET]}\\s+`, !0), t.caretTrimReplace = "$1^", v("CARET", `^${s[u.LONECARET]}${s[u.XRANGEPLAIN]}$`), v("CARETLOOSE", `^${s[u.LONECARET]}${s[u.XRANGEPLAINLOOSE]}$`), v("COMPARATORLOOSE", `^${s[u.GTLT]}\\s*(${s[u.LOOSEPLAIN]})$|^$`), v("COMPARATOR", `^${s[u.GTLT]}\\s*(${s[u.FULLPLAIN]})$|^$`), v("COMPARATORTRIM", `(\\s*)${s[u.GTLT]}\\s*(${s[u.LOOSEPLAIN]}|${s[u.XRANGEPLAIN]})`, !0), t.comparatorTrimReplace = "$1$2$3", v("HYPHENRANGE", `^\\s*(${s[u.XRANGEPLAIN]})\\s+-\\s+(${s[u.XRANGEPLAIN]})\\s*$`), v("HYPHENRANGELOOSE", `^\\s*(${s[u.XRANGEPLAINLOOSE]})\\s+-\\s+(${s[u.XRANGEPLAINLOOSE]})\\s*$`), v("STAR", "(<|>)?=?\\s*\\*"), v("GTE0", "^\\s*>=\\s*0\\.0\\.0\\s*$"), v("GTE0PRE", "^\\s*>=\\s*0\\.0\\.0-0\\s*$");
})(Bt, Bt.exports);
var Je = Bt.exports;
const Ji = Object.freeze({ loose: !0 }), Hi = Object.freeze({}), Wi = (e) => e ? typeof e != "object" ? Ji : e : Hi;
var or = Wi;
const Ir = /^[0-9]+$/, Ro = (e, t) => {
  const r = Ir.test(e), o = Ir.test(t);
  return r && o && (e = +e, t = +t), e === t ? 0 : r && !o ? -1 : o && !r ? 1 : e < t ? -1 : 1;
}, Ki = (e, t) => Ro(t, e);
var No = {
  compareIdentifiers: Ro,
  rcompareIdentifiers: Ki
};
const Ze = St, { MAX_LENGTH: Dr, MAX_SAFE_INTEGER: Qe } = Et, { safeRe: et, t: tt } = Je, Zi = or, { compareIdentifiers: Pe } = No;
let Qi = class ve {
  constructor(t, r) {
    if (r = Zi(r), t instanceof ve) {
      if (t.loose === !!r.loose && t.includePrerelease === !!r.includePrerelease)
        return t;
      t = t.version;
    } else if (typeof t != "string")
      throw new TypeError(`Invalid version. Must be a string. Got type "${typeof t}".`);
    if (t.length > Dr)
      throw new TypeError(
        `version is longer than ${Dr} characters`
      );
    Ze("SemVer", t, r), this.options = r, this.loose = !!r.loose, this.includePrerelease = !!r.includePrerelease;
    const o = t.trim().match(r.loose ? et[tt.LOOSE] : et[tt.FULL]);
    if (!o)
      throw new TypeError(`Invalid Version: ${t}`);
    if (this.raw = t, this.major = +o[1], this.minor = +o[2], this.patch = +o[3], this.major > Qe || this.major < 0)
      throw new TypeError("Invalid major version");
    if (this.minor > Qe || this.minor < 0)
      throw new TypeError("Invalid minor version");
    if (this.patch > Qe || this.patch < 0)
      throw new TypeError("Invalid patch version");
    o[4] ? this.prerelease = o[4].split(".").map((n) => {
      if (/^[0-9]+$/.test(n)) {
        const i = +n;
        if (i >= 0 && i < Qe)
          return i;
      }
      return n;
    }) : this.prerelease = [], this.build = o[5] ? o[5].split(".") : [], this.format();
  }
  format() {
    return this.version = `${this.major}.${this.minor}.${this.patch}`, this.prerelease.length && (this.version += `-${this.prerelease.join(".")}`), this.version;
  }
  toString() {
    return this.version;
  }
  compare(t) {
    if (Ze("SemVer.compare", this.version, this.options, t), !(t instanceof ve)) {
      if (typeof t == "string" && t === this.version)
        return 0;
      t = new ve(t, this.options);
    }
    return t.version === this.version ? 0 : this.compareMain(t) || this.comparePre(t);
  }
  compareMain(t) {
    return t instanceof ve || (t = new ve(t, this.options)), Pe(this.major, t.major) || Pe(this.minor, t.minor) || Pe(this.patch, t.patch);
  }
  comparePre(t) {
    if (t instanceof ve || (t = new ve(t, this.options)), this.prerelease.length && !t.prerelease.length)
      return -1;
    if (!this.prerelease.length && t.prerelease.length)
      return 1;
    if (!this.prerelease.length && !t.prerelease.length)
      return 0;
    let r = 0;
    do {
      const o = this.prerelease[r], n = t.prerelease[r];
      if (Ze("prerelease compare", r, o, n), o === void 0 && n === void 0)
        return 0;
      if (n === void 0)
        return 1;
      if (o === void 0)
        return -1;
      if (o === n)
        continue;
      return Pe(o, n);
    } while (++r);
  }
  compareBuild(t) {
    t instanceof ve || (t = new ve(t, this.options));
    let r = 0;
    do {
      const o = this.build[r], n = t.build[r];
      if (Ze("build compare", r, o, n), o === void 0 && n === void 0)
        return 0;
      if (n === void 0)
        return 1;
      if (o === void 0)
        return -1;
      if (o === n)
        continue;
      return Pe(o, n);
    } while (++r);
  }
  // preminor will bump the version up to the next minor release, and immediately
  // down to pre-release. premajor and prepatch work the same way.
  inc(t, r, o) {
    if (t.startsWith("pre")) {
      if (!r && o === !1)
        throw new Error("invalid increment argument: identifier is empty");
      if (r) {
        const n = `-${r}`.match(this.options.loose ? et[tt.PRERELEASELOOSE] : et[tt.PRERELEASE]);
        if (!n || n[1] !== r)
          throw new Error(`invalid identifier: ${r}`);
      }
    }
    switch (t) {
      case "premajor":
        this.prerelease.length = 0, this.patch = 0, this.minor = 0, this.major++, this.inc("pre", r, o);
        break;
      case "preminor":
        this.prerelease.length = 0, this.patch = 0, this.minor++, this.inc("pre", r, o);
        break;
      case "prepatch":
        this.prerelease.length = 0, this.inc("patch", r, o), this.inc("pre", r, o);
        break;
      // If the input is a non-prerelease version, this acts the same as
      // prepatch.
      case "prerelease":
        this.prerelease.length === 0 && this.inc("patch", r, o), this.inc("pre", r, o);
        break;
      case "release":
        if (this.prerelease.length === 0)
          throw new Error(`version ${this.raw} is not a prerelease`);
        this.prerelease.length = 0;
        break;
      case "major":
        (this.minor !== 0 || this.patch !== 0 || this.prerelease.length === 0) && this.major++, this.minor = 0, this.patch = 0, this.prerelease = [];
        break;
      case "minor":
        (this.patch !== 0 || this.prerelease.length === 0) && this.minor++, this.patch = 0, this.prerelease = [];
        break;
      case "patch":
        this.prerelease.length === 0 && this.patch++, this.prerelease = [];
        break;
      // This probably shouldn't be used publicly.
      // 1.0.0 'pre' would become 1.0.0-0 which is the wrong direction.
      case "pre": {
        const n = Number(o) ? 1 : 0;
        if (this.prerelease.length === 0)
          this.prerelease = [n];
        else {
          let i = this.prerelease.length;
          for (; --i >= 0; )
            typeof this.prerelease[i] == "number" && (this.prerelease[i]++, i = -2);
          if (i === -1) {
            if (r === this.prerelease.join(".") && o === !1)
              throw new Error("invalid increment argument: identifier already exists");
            this.prerelease.push(n);
          }
        }
        if (r) {
          let i = [r, n];
          o === !1 && (i = [r]), Pe(this.prerelease[0], r) === 0 ? isNaN(this.prerelease[1]) && (this.prerelease = i) : this.prerelease = i;
        }
        break;
      }
      default:
        throw new Error(`invalid increment argument: ${t}`);
    }
    return this.raw = this.format(), this.build.length && (this.raw += `+${this.build.join(".")}`), this;
  }
};
var ae = Qi;
const Pr = ae, es = (e, t, r = !1) => {
  if (e instanceof Pr)
    return e;
  try {
    return new Pr(e, t);
  } catch (o) {
    if (!r)
      return null;
    throw o;
  }
};
var qe = es;
const ts = qe, rs = (e, t) => {
  const r = ts(e, t);
  return r ? r.version : null;
};
var os = rs;
const ns = qe, is = (e, t) => {
  const r = ns(e.trim().replace(/^[=v]+/, ""), t);
  return r ? r.version : null;
};
var ss = is;
const Vr = ae, ls = (e, t, r, o, n) => {
  typeof r == "string" && (n = o, o = r, r = void 0);
  try {
    return new Vr(
      e instanceof Vr ? e.version : e,
      r
    ).inc(t, o, n).version;
  } catch {
    return null;
  }
};
var as = ls;
const xr = qe, us = (e, t) => {
  const r = xr(e, null, !0), o = xr(t, null, !0), n = r.compare(o);
  if (n === 0)
    return null;
  const i = n > 0, l = i ? r : o, a = i ? o : r, s = !!l.prerelease.length;
  if (!!a.prerelease.length && !s) {
    if (!a.patch && !a.minor)
      return "major";
    if (a.compareMain(l) === 0)
      return a.minor && !a.patch ? "minor" : "patch";
  }
  const u = s ? "pre" : "";
  return r.major !== o.major ? u + "major" : r.minor !== o.minor ? u + "minor" : r.patch !== o.patch ? u + "patch" : "prerelease";
};
var cs = us;
const ds = ae, fs = (e, t) => new ds(e, t).major;
var ps = fs;
const ms = ae, hs = (e, t) => new ms(e, t).minor;
var gs = hs;
const Es = ae, Ss = (e, t) => new Es(e, t).patch;
var vs = Ss;
const ys = qe, bs = (e, t) => {
  const r = ys(e, t);
  return r && r.prerelease.length ? r.prerelease : null;
};
var ws = bs;
const Fr = ae, $s = (e, t, r) => new Fr(e, r).compare(new Fr(t, r));
var he = $s;
const Ls = he, Os = (e, t, r) => Ls(t, e, r);
var Ts = Os;
const Cs = he, Rs = (e, t) => Cs(e, t, !0);
var Ns = Rs;
const Ur = ae, As = (e, t, r) => {
  const o = new Ur(e, r), n = new Ur(t, r);
  return o.compare(n) || o.compareBuild(n);
};
var nr = As;
const Ms = nr, Is = (e, t) => e.sort((r, o) => Ms(r, o, t));
var Ds = Is;
const Ps = nr, Vs = (e, t) => e.sort((r, o) => Ps(o, r, t));
var xs = Vs;
const Fs = he, Us = (e, t, r) => Fs(e, t, r) > 0;
var vt = Us;
const js = he, qs = (e, t, r) => js(e, t, r) < 0;
var ir = qs;
const Bs = he, Gs = (e, t, r) => Bs(e, t, r) === 0;
var Ao = Gs;
const ks = he, _s = (e, t, r) => ks(e, t, r) !== 0;
var Mo = _s;
const Xs = he, Ys = (e, t, r) => Xs(e, t, r) >= 0;
var sr = Ys;
const zs = he, Js = (e, t, r) => zs(e, t, r) <= 0;
var lr = Js;
const Hs = Ao, Ws = Mo, Ks = vt, Zs = sr, Qs = ir, el = lr, tl = (e, t, r, o) => {
  switch (t) {
    case "===":
      return typeof e == "object" && (e = e.version), typeof r == "object" && (r = r.version), e === r;
    case "!==":
      return typeof e == "object" && (e = e.version), typeof r == "object" && (r = r.version), e !== r;
    case "":
    case "=":
    case "==":
      return Hs(e, r, o);
    case "!=":
      return Ws(e, r, o);
    case ">":
      return Ks(e, r, o);
    case ">=":
      return Zs(e, r, o);
    case "<":
      return Qs(e, r, o);
    case "<=":
      return el(e, r, o);
    default:
      throw new TypeError(`Invalid operator: ${t}`);
  }
};
var Io = tl;
const rl = ae, ol = qe, { safeRe: rt, t: ot } = Je, nl = (e, t) => {
  if (e instanceof rl)
    return e;
  if (typeof e == "number" && (e = String(e)), typeof e != "string")
    return null;
  t = t || {};
  let r = null;
  if (!t.rtl)
    r = e.match(t.includePrerelease ? rt[ot.COERCEFULL] : rt[ot.COERCE]);
  else {
    const s = t.includePrerelease ? rt[ot.COERCERTLFULL] : rt[ot.COERCERTL];
    let c;
    for (; (c = s.exec(e)) && (!r || r.index + r[0].length !== e.length); )
      (!r || c.index + c[0].length !== r.index + r[0].length) && (r = c), s.lastIndex = c.index + c[1].length + c[2].length;
    s.lastIndex = -1;
  }
  if (r === null)
    return null;
  const o = r[2], n = r[3] || "0", i = r[4] || "0", l = t.includePrerelease && r[5] ? `-${r[5]}` : "", a = t.includePrerelease && r[6] ? `+${r[6]}` : "";
  return ol(`${o}.${n}.${i}${l}${a}`, t);
};
var il = nl;
class sl {
  constructor() {
    this.max = 1e3, this.map = /* @__PURE__ */ new Map();
  }
  get(t) {
    const r = this.map.get(t);
    if (r !== void 0)
      return this.map.delete(t), this.map.set(t, r), r;
  }
  delete(t) {
    return this.map.delete(t);
  }
  set(t, r) {
    if (!this.delete(t) && r !== void 0) {
      if (this.map.size >= this.max) {
        const n = this.map.keys().next().value;
        this.delete(n);
      }
      this.map.set(t, r);
    }
    return this;
  }
}
var ll = sl, Mt, jr;
function ge() {
  if (jr) return Mt;
  jr = 1;
  const e = /\s+/g;
  class t {
    constructor(T, V) {
      if (V = n(V), T instanceof t)
        return T.loose === !!V.loose && T.includePrerelease === !!V.includePrerelease ? T : new t(T.raw, V);
      if (T instanceof i)
        return this.raw = T.value, this.set = [[T]], this.formatted = void 0, this;
      if (this.options = V, this.loose = !!V.loose, this.includePrerelease = !!V.includePrerelease, this.raw = T.trim().replace(e, " "), this.set = this.raw.split("||").map((S) => this.parseRange(S.trim())).filter((S) => S.length), !this.set.length)
        throw new TypeError(`Invalid SemVer Range: ${this.raw}`);
      if (this.set.length > 1) {
        const S = this.set[0];
        if (this.set = this.set.filter((L) => !v(L[0])), this.set.length === 0)
          this.set = [S];
        else if (this.set.length > 1) {
          for (const L of this.set)
            if (L.length === 1 && M(L[0])) {
              this.set = [L];
              break;
            }
        }
      }
      this.formatted = void 0;
    }
    get range() {
      if (this.formatted === void 0) {
        this.formatted = "";
        for (let T = 0; T < this.set.length; T++) {
          T > 0 && (this.formatted += "||");
          const V = this.set[T];
          for (let S = 0; S < V.length; S++)
            S > 0 && (this.formatted += " "), this.formatted += V[S].toString().trim();
        }
      }
      return this.formatted;
    }
    format() {
      return this.range;
    }
    toString() {
      return this.range;
    }
    parseRange(T) {
      const S = ((this.options.includePrerelease && h) | (this.options.loose && w)) + ":" + T, L = o.get(S);
      if (L)
        return L;
      const O = this.options.loose, D = O ? s[c.HYPHENRANGELOOSE] : s[c.HYPHENRANGE];
      T = T.replace(D, k(this.options.includePrerelease)), l("hyphen replace", T), T = T.replace(s[c.COMPARATORTRIM], u), l("comparator trim", T), T = T.replace(s[c.TILDETRIM], E), l("tilde trim", T), T = T.replace(s[c.CARETTRIM], b), l("caret trim", T);
      let x = T.split(" ").map((Q) => d(Q, this.options)).join(" ").split(/\s+/).map((Q) => F(Q, this.options));
      O && (x = x.filter((Q) => (l("loose invalid filter", Q, this.options), !!Q.match(s[c.COMPARATORLOOSE])))), l("range list", x);
      const P = /* @__PURE__ */ new Map(), Y = x.map((Q) => new i(Q, this.options));
      for (const Q of Y) {
        if (v(Q))
          return [Q];
        P.set(Q.value, Q);
      }
      P.size > 1 && P.has("") && P.delete("");
      const oe = [...P.values()];
      return o.set(S, oe), oe;
    }
    intersects(T, V) {
      if (!(T instanceof t))
        throw new TypeError("a Range is required");
      return this.set.some((S) => f(S, V) && T.set.some((L) => f(L, V) && S.every((O) => L.every((D) => O.intersects(D, V)))));
    }
    // if ANY of the sets match ALL of its comparators, then pass
    test(T) {
      if (!T)
        return !1;
      if (typeof T == "string")
        try {
          T = new a(T, this.options);
        } catch {
          return !1;
        }
      for (let V = 0; V < this.set.length; V++)
        if (j(this.set[V], T, this.options))
          return !0;
      return !1;
    }
  }
  Mt = t;
  const r = ll, o = new r(), n = or, i = yt(), l = St, a = ae, {
    safeRe: s,
    t: c,
    comparatorTrimReplace: u,
    tildeTrimReplace: E,
    caretTrimReplace: b
  } = Je, { FLAG_INCLUDE_PRERELEASE: h, FLAG_LOOSE: w } = Et, v = ($) => $.value === "<0.0.0-0", M = ($) => $.value === "", f = ($, T) => {
    let V = !0;
    const S = $.slice();
    let L = S.pop();
    for (; V && S.length; )
      V = S.every((O) => L.intersects(O, T)), L = S.pop();
    return V;
  }, d = ($, T) => (l("comp", $, T), $ = A($, T), l("caret", $), $ = y($, T), l("tildes", $), $ = I($, T), l("xrange", $), $ = C($, T), l("stars", $), $), m = ($) => !$ || $.toLowerCase() === "x" || $ === "*", y = ($, T) => $.trim().split(/\s+/).map((V) => R(V, T)).join(" "), R = ($, T) => {
    const V = T.loose ? s[c.TILDELOOSE] : s[c.TILDE];
    return $.replace(V, (S, L, O, D, x) => {
      l("tilde", $, S, L, O, D, x);
      let P;
      return m(L) ? P = "" : m(O) ? P = `>=${L}.0.0 <${+L + 1}.0.0-0` : m(D) ? P = `>=${L}.${O}.0 <${L}.${+O + 1}.0-0` : x ? (l("replaceTilde pr", x), P = `>=${L}.${O}.${D}-${x} <${L}.${+O + 1}.0-0`) : P = `>=${L}.${O}.${D} <${L}.${+O + 1}.0-0`, l("tilde return", P), P;
    });
  }, A = ($, T) => $.trim().split(/\s+/).map((V) => N(V, T)).join(" "), N = ($, T) => {
    l("caret", $, T);
    const V = T.loose ? s[c.CARETLOOSE] : s[c.CARET], S = T.includePrerelease ? "-0" : "";
    return $.replace(V, (L, O, D, x, P) => {
      l("caret", $, L, O, D, x, P);
      let Y;
      return m(O) ? Y = "" : m(D) ? Y = `>=${O}.0.0${S} <${+O + 1}.0.0-0` : m(x) ? O === "0" ? Y = `>=${O}.${D}.0${S} <${O}.${+D + 1}.0-0` : Y = `>=${O}.${D}.0${S} <${+O + 1}.0.0-0` : P ? (l("replaceCaret pr", P), O === "0" ? D === "0" ? Y = `>=${O}.${D}.${x}-${P} <${O}.${D}.${+x + 1}-0` : Y = `>=${O}.${D}.${x}-${P} <${O}.${+D + 1}.0-0` : Y = `>=${O}.${D}.${x}-${P} <${+O + 1}.0.0-0`) : (l("no pr"), O === "0" ? D === "0" ? Y = `>=${O}.${D}.${x}${S} <${O}.${D}.${+x + 1}-0` : Y = `>=${O}.${D}.${x}${S} <${O}.${+D + 1}.0-0` : Y = `>=${O}.${D}.${x} <${+O + 1}.0.0-0`), l("caret return", Y), Y;
    });
  }, I = ($, T) => (l("replaceXRanges", $, T), $.split(/\s+/).map((V) => G(V, T)).join(" ")), G = ($, T) => {
    $ = $.trim();
    const V = T.loose ? s[c.XRANGELOOSE] : s[c.XRANGE];
    return $.replace(V, (S, L, O, D, x, P) => {
      l("xRange", $, S, L, O, D, x, P);
      const Y = m(O), oe = Y || m(D), Q = oe || m(x), Ne = Q;
      return L === "=" && Ne && (L = ""), P = T.includePrerelease ? "-0" : "", Y ? L === ">" || L === "<" ? S = "<0.0.0-0" : S = "*" : L && Ne ? (oe && (D = 0), x = 0, L === ">" ? (L = ">=", oe ? (O = +O + 1, D = 0, x = 0) : (D = +D + 1, x = 0)) : L === "<=" && (L = "<", oe ? O = +O + 1 : D = +D + 1), L === "<" && (P = "-0"), S = `${L + O}.${D}.${x}${P}`) : oe ? S = `>=${O}.0.0${P} <${+O + 1}.0.0-0` : Q && (S = `>=${O}.${D}.0${P} <${O}.${+D + 1}.0-0`), l("xRange return", S), S;
    });
  }, C = ($, T) => (l("replaceStars", $, T), $.trim().replace(s[c.STAR], "")), F = ($, T) => (l("replaceGTE0", $, T), $.trim().replace(s[T.includePrerelease ? c.GTE0PRE : c.GTE0], "")), k = ($) => (T, V, S, L, O, D, x, P, Y, oe, Q, Ne) => (m(S) ? V = "" : m(L) ? V = `>=${S}.0.0${$ ? "-0" : ""}` : m(O) ? V = `>=${S}.${L}.0${$ ? "-0" : ""}` : D ? V = `>=${V}` : V = `>=${V}${$ ? "-0" : ""}`, m(Y) ? P = "" : m(oe) ? P = `<${+Y + 1}.0.0-0` : m(Q) ? P = `<${Y}.${+oe + 1}.0-0` : Ne ? P = `<=${Y}.${oe}.${Q}-${Ne}` : $ ? P = `<${Y}.${oe}.${+Q + 1}-0` : P = `<=${P}`, `${V} ${P}`.trim()), j = ($, T, V) => {
    for (let S = 0; S < $.length; S++)
      if (!$[S].test(T))
        return !1;
    if (T.prerelease.length && !V.includePrerelease) {
      for (let S = 0; S < $.length; S++)
        if (l($[S].semver), $[S].semver !== i.ANY && $[S].semver.prerelease.length > 0) {
          const L = $[S].semver;
          if (L.major === T.major && L.minor === T.minor && L.patch === T.patch)
            return !0;
        }
      return !1;
    }
    return !0;
  };
  return Mt;
}
var It, qr;
function yt() {
  if (qr) return It;
  qr = 1;
  const e = Symbol("SemVer ANY");
  class t {
    static get ANY() {
      return e;
    }
    constructor(u, E) {
      if (E = r(E), u instanceof t) {
        if (u.loose === !!E.loose)
          return u;
        u = u.value;
      }
      u = u.trim().split(/\s+/).join(" "), l("comparator", u, E), this.options = E, this.loose = !!E.loose, this.parse(u), this.semver === e ? this.value = "" : this.value = this.operator + this.semver.version, l("comp", this);
    }
    parse(u) {
      const E = this.options.loose ? o[n.COMPARATORLOOSE] : o[n.COMPARATOR], b = u.match(E);
      if (!b)
        throw new TypeError(`Invalid comparator: ${u}`);
      this.operator = b[1] !== void 0 ? b[1] : "", this.operator === "=" && (this.operator = ""), b[2] ? this.semver = new a(b[2], this.options.loose) : this.semver = e;
    }
    toString() {
      return this.value;
    }
    test(u) {
      if (l("Comparator.test", u, this.options.loose), this.semver === e || u === e)
        return !0;
      if (typeof u == "string")
        try {
          u = new a(u, this.options);
        } catch {
          return !1;
        }
      return i(u, this.operator, this.semver, this.options);
    }
    intersects(u, E) {
      if (!(u instanceof t))
        throw new TypeError("a Comparator is required");
      return this.operator === "" ? this.value === "" ? !0 : new s(u.value, E).test(this.value) : u.operator === "" ? u.value === "" ? !0 : new s(this.value, E).test(u.semver) : (E = r(E), E.includePrerelease && (this.value === "<0.0.0-0" || u.value === "<0.0.0-0") || !E.includePrerelease && (this.value.startsWith("<0.0.0") || u.value.startsWith("<0.0.0")) ? !1 : !!(this.operator.startsWith(">") && u.operator.startsWith(">") || this.operator.startsWith("<") && u.operator.startsWith("<") || this.semver.version === u.semver.version && this.operator.includes("=") && u.operator.includes("=") || i(this.semver, "<", u.semver, E) && this.operator.startsWith(">") && u.operator.startsWith("<") || i(this.semver, ">", u.semver, E) && this.operator.startsWith("<") && u.operator.startsWith(">")));
    }
  }
  It = t;
  const r = or, { safeRe: o, t: n } = Je, i = Io, l = St, a = ae, s = ge();
  return It;
}
const al = ge(), ul = (e, t, r) => {
  try {
    t = new al(t, r);
  } catch {
    return !1;
  }
  return t.test(e);
};
var bt = ul;
const cl = ge(), dl = (e, t) => new cl(e, t).set.map((r) => r.map((o) => o.value).join(" ").trim().split(" "));
var fl = dl;
const pl = ae, ml = ge(), hl = (e, t, r) => {
  let o = null, n = null, i = null;
  try {
    i = new ml(t, r);
  } catch {
    return null;
  }
  return e.forEach((l) => {
    i.test(l) && (!o || n.compare(l) === -1) && (o = l, n = new pl(o, r));
  }), o;
};
var gl = hl;
const El = ae, Sl = ge(), vl = (e, t, r) => {
  let o = null, n = null, i = null;
  try {
    i = new Sl(t, r);
  } catch {
    return null;
  }
  return e.forEach((l) => {
    i.test(l) && (!o || n.compare(l) === 1) && (o = l, n = new El(o, r));
  }), o;
};
var yl = vl;
const Dt = ae, bl = ge(), Br = vt, wl = (e, t) => {
  e = new bl(e, t);
  let r = new Dt("0.0.0");
  if (e.test(r) || (r = new Dt("0.0.0-0"), e.test(r)))
    return r;
  r = null;
  for (let o = 0; o < e.set.length; ++o) {
    const n = e.set[o];
    let i = null;
    n.forEach((l) => {
      const a = new Dt(l.semver.version);
      switch (l.operator) {
        case ">":
          a.prerelease.length === 0 ? a.patch++ : a.prerelease.push(0), a.raw = a.format();
        /* fallthrough */
        case "":
        case ">=":
          (!i || Br(a, i)) && (i = a);
          break;
        case "<":
        case "<=":
          break;
        /* istanbul ignore next */
        default:
          throw new Error(`Unexpected operation: ${l.operator}`);
      }
    }), i && (!r || Br(r, i)) && (r = i);
  }
  return r && e.test(r) ? r : null;
};
var $l = wl;
const Ll = ge(), Ol = (e, t) => {
  try {
    return new Ll(e, t).range || "*";
  } catch {
    return null;
  }
};
var Tl = Ol;
const Cl = ae, Do = yt(), { ANY: Rl } = Do, Nl = ge(), Al = bt, Gr = vt, kr = ir, Ml = lr, Il = sr, Dl = (e, t, r, o) => {
  e = new Cl(e, o), t = new Nl(t, o);
  let n, i, l, a, s;
  switch (r) {
    case ">":
      n = Gr, i = Ml, l = kr, a = ">", s = ">=";
      break;
    case "<":
      n = kr, i = Il, l = Gr, a = "<", s = "<=";
      break;
    default:
      throw new TypeError('Must provide a hilo val of "<" or ">"');
  }
  if (Al(e, t, o))
    return !1;
  for (let c = 0; c < t.set.length; ++c) {
    const u = t.set[c];
    let E = null, b = null;
    if (u.forEach((h) => {
      h.semver === Rl && (h = new Do(">=0.0.0")), E = E || h, b = b || h, n(h.semver, E.semver, o) ? E = h : l(h.semver, b.semver, o) && (b = h);
    }), E.operator === a || E.operator === s || (!b.operator || b.operator === a) && i(e, b.semver))
      return !1;
    if (b.operator === s && l(e, b.semver))
      return !1;
  }
  return !0;
};
var ar = Dl;
const Pl = ar, Vl = (e, t, r) => Pl(e, t, ">", r);
var xl = Vl;
const Fl = ar, Ul = (e, t, r) => Fl(e, t, "<", r);
var jl = Ul;
const _r = ge(), ql = (e, t, r) => (e = new _r(e, r), t = new _r(t, r), e.intersects(t, r));
var Bl = ql;
const Gl = bt, kl = he;
var _l = (e, t, r) => {
  const o = [];
  let n = null, i = null;
  const l = e.sort((u, E) => kl(u, E, r));
  for (const u of l)
    Gl(u, t, r) ? (i = u, n || (n = u)) : (i && o.push([n, i]), i = null, n = null);
  n && o.push([n, null]);
  const a = [];
  for (const [u, E] of o)
    u === E ? a.push(u) : !E && u === l[0] ? a.push("*") : E ? u === l[0] ? a.push(`<=${E}`) : a.push(`${u} - ${E}`) : a.push(`>=${u}`);
  const s = a.join(" || "), c = typeof t.raw == "string" ? t.raw : String(t);
  return s.length < c.length ? s : t;
};
const Xr = ge(), ur = yt(), { ANY: Pt } = ur, Be = bt, cr = he, Xl = (e, t, r = {}) => {
  if (e === t)
    return !0;
  e = new Xr(e, r), t = new Xr(t, r);
  let o = !1;
  e: for (const n of e.set) {
    for (const i of t.set) {
      const l = zl(n, i, r);
      if (o = o || l !== null, l)
        continue e;
    }
    if (o)
      return !1;
  }
  return !0;
}, Yl = [new ur(">=0.0.0-0")], Yr = [new ur(">=0.0.0")], zl = (e, t, r) => {
  if (e === t)
    return !0;
  if (e.length === 1 && e[0].semver === Pt) {
    if (t.length === 1 && t[0].semver === Pt)
      return !0;
    r.includePrerelease ? e = Yl : e = Yr;
  }
  if (t.length === 1 && t[0].semver === Pt) {
    if (r.includePrerelease)
      return !0;
    t = Yr;
  }
  const o = /* @__PURE__ */ new Set();
  let n, i;
  for (const h of e)
    h.operator === ">" || h.operator === ">=" ? n = zr(n, h, r) : h.operator === "<" || h.operator === "<=" ? i = Jr(i, h, r) : o.add(h.semver);
  if (o.size > 1)
    return null;
  let l;
  if (n && i) {
    if (l = cr(n.semver, i.semver, r), l > 0)
      return null;
    if (l === 0 && (n.operator !== ">=" || i.operator !== "<="))
      return null;
  }
  for (const h of o) {
    if (n && !Be(h, String(n), r) || i && !Be(h, String(i), r))
      return null;
    for (const w of t)
      if (!Be(h, String(w), r))
        return !1;
    return !0;
  }
  let a, s, c, u, E = i && !r.includePrerelease && i.semver.prerelease.length ? i.semver : !1, b = n && !r.includePrerelease && n.semver.prerelease.length ? n.semver : !1;
  E && E.prerelease.length === 1 && i.operator === "<" && E.prerelease[0] === 0 && (E = !1);
  for (const h of t) {
    if (u = u || h.operator === ">" || h.operator === ">=", c = c || h.operator === "<" || h.operator === "<=", n) {
      if (b && h.semver.prerelease && h.semver.prerelease.length && h.semver.major === b.major && h.semver.minor === b.minor && h.semver.patch === b.patch && (b = !1), h.operator === ">" || h.operator === ">=") {
        if (a = zr(n, h, r), a === h && a !== n)
          return !1;
      } else if (n.operator === ">=" && !Be(n.semver, String(h), r))
        return !1;
    }
    if (i) {
      if (E && h.semver.prerelease && h.semver.prerelease.length && h.semver.major === E.major && h.semver.minor === E.minor && h.semver.patch === E.patch && (E = !1), h.operator === "<" || h.operator === "<=") {
        if (s = Jr(i, h, r), s === h && s !== i)
          return !1;
      } else if (i.operator === "<=" && !Be(i.semver, String(h), r))
        return !1;
    }
    if (!h.operator && (i || n) && l !== 0)
      return !1;
  }
  return !(n && c && !i && l !== 0 || i && u && !n && l !== 0 || b || E);
}, zr = (e, t, r) => {
  if (!e)
    return t;
  const o = cr(e.semver, t.semver, r);
  return o > 0 ? e : o < 0 || t.operator === ">" && e.operator === ">=" ? t : e;
}, Jr = (e, t, r) => {
  if (!e)
    return t;
  const o = cr(e.semver, t.semver, r);
  return o < 0 ? e : o > 0 || t.operator === "<" && e.operator === "<=" ? t : e;
};
var Jl = Xl;
const Vt = Je, Hr = Et, Hl = ae, Wr = No, Wl = qe, Kl = os, Zl = ss, Ql = as, ea = cs, ta = ps, ra = gs, oa = vs, na = ws, ia = he, sa = Ts, la = Ns, aa = nr, ua = Ds, ca = xs, da = vt, fa = ir, pa = Ao, ma = Mo, ha = sr, ga = lr, Ea = Io, Sa = il, va = yt(), ya = ge(), ba = bt, wa = fl, $a = gl, La = yl, Oa = $l, Ta = Tl, Ca = ar, Ra = xl, Na = jl, Aa = Bl, Ma = _l, Ia = Jl;
var Da = {
  parse: Wl,
  valid: Kl,
  clean: Zl,
  inc: Ql,
  diff: ea,
  major: ta,
  minor: ra,
  patch: oa,
  prerelease: na,
  compare: ia,
  rcompare: sa,
  compareLoose: la,
  compareBuild: aa,
  sort: ua,
  rsort: ca,
  gt: da,
  lt: fa,
  eq: pa,
  neq: ma,
  gte: ha,
  lte: ga,
  cmp: Ea,
  coerce: Sa,
  Comparator: va,
  Range: ya,
  satisfies: ba,
  toComparators: wa,
  maxSatisfying: $a,
  minSatisfying: La,
  minVersion: Oa,
  validRange: Ta,
  outside: Ca,
  gtr: Ra,
  ltr: Na,
  intersects: Aa,
  simplifyRange: Ma,
  subset: Ia,
  SemVer: Hl,
  re: Vt.re,
  src: Vt.src,
  tokens: Vt.t,
  SEMVER_SPEC_VERSION: Hr.SEMVER_SPEC_VERSION,
  RELEASE_TYPES: Hr.RELEASE_TYPES,
  compareIdentifiers: Wr.compareIdentifiers,
  rcompareIdentifiers: Wr.rcompareIdentifiers
};
function Pa(e, t) {
  var n;
  const r = (n = e.extent) == null ? void 0 : n.getCoordinatesInProjection(Ut), o = t.getCoordinatesInProjection(Ut);
  return !r || !ui(r, o) ? null : {
    type: "singleImage",
    opacity: e.opacity,
    extent: r,
    url: e.url
  };
}
function Va(e) {
  let t = 1 / 0;
  const r = e.getStride();
  if (r > 2) {
    const o = e.getFlatCoordinates(), n = o.length;
    for (let i = 0; i < n; i += r) {
      const l = o[i + 2];
      t = l < t ? l : t;
    }
  }
  return t !== 1 / 0 ? t : 0;
}
async function dr(e, t, r, o) {
  return Promise.all(
    e.map(async (n) => {
      const i = await jn(
        n,
        t,
        o
      ), l = qn(i, {
        asObject: !0
      }), a = Va(
        i.getGeometry()
      );
      l.heightInfo = {
        ...Bn(i, t),
        groundLevel: a
      };
      const s = t.getModel(i);
      s && (l.model = s);
      const c = n[Gn] ?? r;
      return c instanceof so ? l.style = c.getOptionsForFeature(i) : l.style = c.toJSON(), l;
    })
  );
}
async function xa(e, t, r) {
  const o = e.plugins.getByKey("@vcmap/planning").version;
  if (Da.satisfies(o, ">=6.0.0-0", { includePrerelease: !0 })) {
    const [i] = e.maps.getByType(Wt.className), l = i.getScene();
    if (!l)
      return null;
    const a = await t.fetchFeatureCollection({
      bbox: r.getCoordinatesInProjection(Ut),
      asJson: !0
    }), {
      features: s,
      style: c,
      vcsMeta: u
    } = Un(a);
    return {
      features: await dr(
        s,
        t.vectorProperties,
        t.style,
        l
      ),
      style: c.toJSON(),
      vcsMeta: u,
      type: "FeatureCollection"
      /* FEATURE_COLLECTION */
    };
  }
  return null;
}
async function Fa(e, t, r) {
  const [o] = e.maps.getByType(Wt.className), n = o.getScene();
  if (!n)
    return null;
  const i = r.getCoordinatesInProjection(je), l = t.getFeatures().filter(
    (s) => {
      var c;
      return ((c = s.getGeometry()) == null ? void 0 : c.intersectsExtent(i)) && !s[po];
    }
  ), a = await dr(
    l,
    t.vectorProperties,
    t.style,
    n
  );
  return a.length === 0 ? null : {
    type: "geojson",
    features: a,
    vcsMeta: t.getVcsMeta(),
    style: t.style.toJSON()
  };
}
async function Ua(e, t, r) {
  if (!t.tileProvider)
    return null;
  const [o] = e.maps.getByType(Wt.className), n = o.getScene();
  if (!n)
    return null;
  const i = (await t.tileProvider.getFeaturesForExtent(r)).filter(
    (a) => !a[po]
  ), l = await dr(
    i,
    t.vectorProperties,
    t.style,
    n
  );
  return l.length === 0 ? null : {
    type: "geojson",
    features: l,
    vcsMeta: t.vectorProperties.getVcsMeta(),
    style: t.style.toJSON()
  };
}
async function ja(e, t) {
  const { activeMap: r } = t.maps, o = [...t.layers].filter(
    (l) => l.active && l.isSupported(r) && l[Pn] !== Vn
  ).map((l) => l instanceof xn ? Pa(l, e) : l instanceof ft ? l.className === "PlanningFeatureStoreLayer" ? xa(
    t,
    l,
    e
  ) : Fa(t, l, e) : l instanceof Fn ? Ua(t, l, e) : null);
  return {
    baseLayers: (await Promise.all(o)).filter((l) => l ? l.type === "geojson" || l.type === "FeatureCollection" ? l.features.length > 0 : !0 : !1).filter((l) => l !== null),
    hiddenObjects: [...t.hiddenObject].map((l) => l.id)
  };
}
class Po {
  constructor(t) {
    W(this, "title");
    W(this, "featureId");
    W(this, "fileSize");
    this.title = t.title, this.featureId = t.featureId, this.fileSize = t.fileSize;
  }
  // eslint-disable-next-line class-methods-use-this
  download() {
    return Promise.resolve();
  }
}
function qa(e) {
  return /jpe?g$/i.test(e) ? "image/jpeg" : /png$/i.test(e) ? "image/png" : /tiff?$/i.test(e) ? "image/tiff" : "";
}
function Vo(e, t, r, o = "jpg") {
  _(e, Xn), _(
    o,
    K(be(["jpg", "jpeg", "png", "tif", "tiff"]))
  ), _(r, K(Number));
  const n = new kn(e.meta, {
    maxZoom: 0,
    minZoom: 0,
    scaleFactor: 4,
    hideLevels: 0
  });
  n.setImageName(e.name);
  const i = n.layer.getSource(), l = i.getTileGrid();
  if (!l)
    throw new Error("tileGrid not available");
  const a = i.getTileUrlFunction(), s = r ? l.getResolutions().indexOf(r) : l.getMaxZoom(), { size: c } = e.meta, u = document.createElement("canvas"), E = ci(l.getTileSize(s)), b = c.slice();
  r && (b[0] /= r, b[1] /= r), u.width = b[0], u.height = b[1];
  const h = u.getContext("2d"), w = [];
  let v = 0;
  return l.forEachTileCoord([0, 0, c[0], c[1]], s, (M) => {
    const f = new Image();
    _n(e.meta.url) || (f.crossOrigin = "anonymous"), w.push(
      new Promise((d, m) => {
        f.onload = () => {
          h.drawImage(
            f,
            0,
            0,
            E[0],
            E[1],
            M[1] * E[0],
            b[1] + M[2] * E[1],
            E[0],
            E[1]
          ), v += 1, t && (t.progress = Math.round(
            v * 100 / w.length
          )), d();
        }, f.onerror = m, f.src = a(M);
      })
    );
  }), new Promise((M, f) => {
    Promise.all(w).then(() => {
      u.toBlob((d) => {
        d ? (gn(d, `${e.name}.${o}`), M()) : f(
          new Error(
            "Image conversion failed. If using Firefox try using Chrome or Edge."
          )
        ), t.progress = 0;
      }, qa(o));
    }).catch((d) => {
      f(new Error(`Image download failed: ${String(d)}`)), t.progress = 0;
    });
  });
}
class Ba extends Po {
  constructor(r, o) {
    super(r);
    W(this, "obliqueCollectionName");
    W(this, "imageName");
    W(this, "fileExtension");
    W(this, "resolution");
    W(this, "downloadState");
    W(this, "_app");
    this.obliqueCollectionName = r.obliqueCollectionName, this.imageName = r.imageName, this.fileExtension = r.fileExtension, this.resolution = r.resolution, this.downloadState = r.downloadState, this._app = o;
  }
  download() {
    const r = this._app.obliqueCollections.getByKey(
      this.obliqueCollectionName
    ), o = r == null ? void 0 : r.getImageByName(this.imageName);
    if (o)
      return Vo(
        o,
        this.downloadState,
        this.resolution,
        this.fileExtension
      );
    throw new Error("Oblique image not found");
  }
}
async function xo(e, t) {
  const r = e[Yn];
  if (r) {
    const o = r.clone(), n = t.maps.activeMap;
    if (n.currentImage)
      return zn(
        r,
        o,
        n.currentImage
      );
  }
  return null;
}
function Ga(e, t, r) {
  const { currentImage: o } = e.maps.activeMap;
  if (o)
    if (t.dedicatedSource)
      no(
        t.getUriForImage(o.name),
        `${o.name}.${t.fileExtension}`
      );
    else
      return r.progress = 0, Vo(
        o,
        r,
        t.resolution,
        t.fileExtension
      );
  return Promise.resolve();
}
function ka(e) {
  return e < 1e3 ? `${e} kB` : e < 1e3 * 1e3 ? `${e / 1e3} MB` : `${e / (1e3 * 1e3)} GB`;
}
async function Fo(e, t, r) {
  const o = t.maps.activeMap instanceof Kt ? await xo(e, t) : e.getGeometry();
  if (!o || !(o instanceof di) || o.getArea() === 0)
    throw new Error("export.validation.polygonFeature");
  if (r != null && fi(o) > r)
    throw new Error("export.validation.polygonFeatureArea");
  return o;
}
async function _a(e, t, r, o, n) {
  var L;
  const {
    selectedCrs: i,
    selectedExportFormats: l,
    selectedThematicClasses: a,
    selectedLod: s,
    textureExport: c,
    localCoordinates: u,
    tiledExport: E,
    genericAttributes: b,
    selectedAppearanceTheme: h,
    terrainExport: w,
    selectedHeightMode: v,
    selectedTerrainAppearanceLayer: M
  } = t.settingsCityModel, {
    email: f,
    exportName: d,
    description: m,
    selectedSelectionType: y,
    selectedObjects: R
  } = t, {
    terrainUrl: A,
    terrainZoomLevel: N,
    terrainAppearanceOptions: I,
    exportScene: G,
    dataProjection: C,
    fmeSecurityToken: F,
    fmeServerUrl: k
  } = e.settingsCityModel, { maxSelectionArea: j } = e, $ = {
    COORD_SYS: i.startsWith("E") ? i : `EPSG:${i}`,
    OPT_SERVICEMODE: "async",
    EXPORT_FORMAT: l.join(","),
    THEM_CLASS: a,
    // TODO: Validation (at least 1 class) already in vue component
    LOD_SELECTION: s,
    TEXTURE: c && l.some(
      (O) => $e[O].texture
    ) ? "Yes" : "No",
    LOCAL: u && l.some(
      (O) => $e[O].localCoordinates
    ) ? "Yes" : "No",
    TILE_OUTPUT: E ? "Yes" : "No",
    GENERIC_ATTRIB: b && l.some(
      (O) => $e[O].genericAttributes
    ) ? "Yes" : "No",
    APP_THEME: h || "none",
    HEIGHTMODE: w ? "absolute" : v,
    ...f && { OPT_REQUESTEREMAIL: f },
    // eslint-disable-next-line @typescript-eslint/naming-convention
    ...d && { nm_NAME: d },
    // eslint-disable-next-line @typescript-eslint/naming-convention
    nm_DESC: m,
    TERRAIN: "No"
  };
  if (w && l.some((O) => O !== "2D Shape")) {
    const O = [...o.layers].find(
      (x) => x instanceof Jn && x.active
    ), D = new URL(window.location.href);
    if (A)
      $.TERRAIN = "Yes", $.LAYER_JSON = A;
    else if (O) {
      $.TERRAIN = "Yes";
      const x = new URL(
        O.url,
        D
      ).toString();
      $.LAYER_JSON = /layer.json/.test(x) ? x : `${x}/layer.json`;
    }
    if (N && N >= 0 && ($.ZOOM = N), c && M) {
      const x = o.layers.getByKey(M);
      if (!x)
        throw new Error(
          `Selected terrain appearance layer "${M}" does not exist.`
        );
      const P = new URL(x.url, D);
      x instanceof fo ? ($.TEX_TYPE = "WMS", $.WMS_LEVEL = (I == null ? void 0 : I[M]) || x.maxLevel, P.search = new URLSearchParams(x.parameters).toString(), $.WMS_URL = P.toString()) : x instanceof co && ($.TEX_TYPE = "TMS", $.TMS_LEVEL = (I == null ? void 0 : I[M]) || x.maxLevel, $.TMS_URL = P.toString());
    }
  }
  let T;
  if (y === ee.AREA_SELECTION) {
    $.SELECTION = "Polygon";
    const O = o.layers.getByKey(r);
    if (!O || !(O instanceof ft))
      throw new Error("Layer for area selection does not exist.");
    const D = O.getFeatures()[0], x = (await Fo(D, o, j)).clone();
    x.transform(
      je.proj,
      new Hn(C).proj
    );
    const P = x.getCoordinates()[0];
    $.POLYGON = P.map((oe) => {
      const [Q, Ne] = oe;
      return `${Q},${Ne}`;
    }).join(";");
    const Y = new mo({
      projection: je.toJSON(),
      coordinates: (L = D.getGeometry()) == null ? void 0 : L.getExtent()
    });
    G && (T = await ja(Y, o));
  } else
    T = { selectedFeatures: R };
  if (!k)
    throw new Error("FME server URL is not configured");
  const V = new URL(k, window.location.href);
  Object.entries($).forEach(([O, D]) => {
    V.searchParams.set(O, String(D));
  });
  const S = { ...T, ...n };
  return fetch(V, {
    method: "POST",
    headers: {
      Accept: "application/json",
      // eslint-disable-next-line @typescript-eslint/naming-convention
      "Content-Type": "application/json",
      ...F ? { Authorization: `fmetoken token=${F}` } : {}
    },
    body: JSON.stringify(S)
  });
}
async function Xa(e, t, r) {
  await t.query(e);
  const { results: o } = t;
  return r.value = o.sort((n, i) => n.title < i.title ? -1 : 1).map((n) => ({
    name: n.title,
    title: n.title,
    tooltip: "export.selectToDownload",
    selectionChanged: (i) => {
      i ? t.resultLayer.featureVisibility.showObjects([
        n.featureId
      ]) : t.resultLayer.featureVisibility.hideObjects([
        n.featureId
      ]);
    }
  })), await t.resultLayer.activate(), Promise.resolve();
}
const Ya = Ie({
  name: "ResultList",
  components: { VSheet: pt, VIcon: vo, VcsList: En },
  props: {
    selectionLayerName: {
      type: Symbol,
      required: !0
    },
    modelValue: {
      type: Array,
      required: !0
    },
    active: {
      type: Boolean,
      required: !0
    },
    maxSelectionArea: {
      type: Number,
      required: !0
    },
    selectedDataSourceOptions: {
      type: Object,
      required: !0
    }
  },
  emits: ["invalidArea", "update:modelValue"],
  setup(e, { emit: t }) {
    const r = Ye("vcsApp"), o = r.plugins.getByKey(we), n = le(), i = Sn(e, "modelValue", t), l = fe(
      () => e.selectedDataSourceOptions.type === J.GEOJSON ? o.dataSource.title : "export.dataSources.oblique"
    );
    function a() {
      var u;
      const s = r.layers.getByKey(
        String(e.selectionLayerName)
      );
      (u = o.dataSource) == null || u.clear();
      const c = s == null ? void 0 : s.getFeatures()[0];
      if (c && c.getGeometry())
        Fo(c, r, e.maxSelectionArea).then(
          () => Xa(
            c,
            o.dataSource,
            n
          )
        ).catch((E) => {
          t("invalidArea"), r.notifier.add({
            type: Ae.ERROR,
            message: E.message,
            timeout: 5e3
          });
        });
      else
        throw new Error("Area selection feature does not exist.");
    }
    return Fe(
      () => e.active,
      () => {
        e.active && a();
      }
    ), ho(() => {
      e.active && a();
    }), go(() => {
      var s;
      return (s = o.dataSource) == null ? void 0 : s.clear();
    }), {
      resultItems: n,
      selectedResults: i,
      listTitle: l
    };
  }
}), za = { class: "list-height" };
function Ja(e, t, r, o, n, i) {
  const l = U("VcsList"), a = U("v-icon"), s = U("v-sheet");
  return q(), z(s, { class: "px-1" }, {
    default: g(() => [
      Z(" TODO: turn this into paginated list "),
      de("div", za, [
        e.resultItems ? (q(), z(l, {
          key: 0,
          modelValue: e.selectedResults,
          "onUpdate:modelValue": t[0] || (t[0] = (c) => e.selectedResults = c),
          items: e.resultItems,
          selectable: "",
          title: e.listTitle,
          "action-button-list-overflow-count": 1
        }, null, 8, ["modelValue", "items", "title"])) : (q(), z(a, { key: 1 }, {
          default: g(() => [
            X(" $vcsProgress ")
          ]),
          _: 1
          /* STABLE */
        }))
      ])
    ]),
    _: 1
    /* STABLE */
  });
}
const Ha = /* @__PURE__ */ De(Ya, [["render", Ja], ["__scopeId", "data-v-f341b982"]]), te = {
  OFF: 1,
  ERROR: 2,
  WARN: 4,
  INFO: 8,
  DEBUG: 16
}, Le = {
  ERROR: 0,
  WARN: 0,
  INFO: 0,
  DEBUG: 0
};
Le.ERROR = te.ERROR | te.WARN | te.INFO | te.DEBUG;
Le.WARN = te.WARN | te.INFO | te.DEBUG;
Le.INFO = te.INFO | te.DEBUG;
Le.DEBUG = te.DEBUG;
const Ge = {
  useTimestamp: !1,
  logLevel: te.INFO
}, He = /* @__PURE__ */ new Map();
He.set(te.ERROR, "error");
He.set(te.WARN, "warn");
He.set(te.INFO, "info");
He.set(te.DEBUG, "log");
class Uo {
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
  error(t, ...r) {
    Ge.logLevel & Le.ERROR && this._log(String(t), te.ERROR, r);
  }
  /**
   * Logs a warning message
   * @param {string} msg The message to log.
   * @param {...any} optArgs
   */
  warning(t, ...r) {
    Ge.logLevel & Le.WARN && this._log(String(t), te.WARN, r);
  }
  /**
   * Deprecate a function. deprecations are stored on the logger
   * @param {string} functionName
   * @param {string=} alternativeFunctionName
   */
  deprecate(t, r) {
    const o = String(t), n = r ? String(r) : null;
    if (!this.deprecations.has(o)) {
      this.deprecations.set(o, n || null);
      let i = `${o} has been deprecated and will be removed`;
      n && (i = `${i}. ${n}`), this.warning(i);
    }
  }
  /**
   * Logs an info message
   * @param {string} msg The message to log.
   * @param {...any} optArgs
   */
  info(t, ...r) {
    Ge.logLevel & Le.INFO && this._log(String(t), te.INFO, r);
  }
  /**
   * Logs a debug message
   * @param {string} msg The message to log.
   * @param {...any} optArgs
   */
  debug(t, ...r) {
    Ge.logLevel & Le.DEBUG && this._log(String(t), te.DEBUG, r);
  }
  /**
   * Alias for debug
   * @param {string} msg The message to log.
   * @param {...any} optArgs
   */
  log(t, ...r) {
    Ge.logLevel & Le.DEBUG && this._log(String(t), te.DEBUG, r);
  }
  /**
   * Logs a message
   * @param {string} msg The message to log.
   * @param {LOG_LEVEL} level
   * @param {Array} optArgs
   * @private
   */
  _log(t, r, o) {
    let n = t;
    this.className && (n = `[${this.className}] ${n}`), console[He.get(r)](n, ...o), r & te.ERROR && (console.group(), console.trace(), console.groupEnd());
  }
}
const Gt = /* @__PURE__ */ new Map();
let xt;
function Wa() {
  return xt || (xt = new Uo()), xt;
}
function Ka(e) {
  const t = new Uo(e);
  return Gt.set(e, t), t;
}
function fr(e) {
  return e ? Gt.has(e) ? Gt.get(e) : Ka(e) : Wa();
}
var ie = 63710088e-1, pr = {
  centimeters: ie * 100,
  centimetres: ie * 100,
  degrees: ie / 111325,
  feet: ie * 3.28084,
  inches: ie * 39.37,
  kilometers: ie / 1e3,
  kilometres: ie / 1e3,
  meters: ie,
  metres: ie,
  miles: ie / 1609.344,
  millimeters: ie * 1e3,
  millimetres: ie * 1e3,
  nauticalmiles: ie / 1852,
  radians: 1,
  yards: ie * 1.0936
}, Za = {
  centimeters: 100,
  centimetres: 100,
  degrees: 1 / 111325,
  feet: 3.28084,
  inches: 39.37,
  kilometers: 1 / 1e3,
  kilometres: 1 / 1e3,
  meters: 1,
  metres: 1,
  miles: 1 / 1609.344,
  millimeters: 1e3,
  millimetres: 1e3,
  nauticalmiles: 1 / 1852,
  radians: 1 / ie,
  yards: 1.0936133
}, kt = {
  acres: 247105e-9,
  centimeters: 1e4,
  centimetres: 1e4,
  feet: 10.763910417,
  hectares: 1e-4,
  inches: 1550.003100006,
  kilometers: 1e-6,
  kilometres: 1e-6,
  meters: 1,
  metres: 1,
  miles: 386e-9,
  millimeters: 1e6,
  millimetres: 1e6,
  yards: 1.195990046
};
function pe(e, t, r) {
  r === void 0 && (r = {});
  var o = { type: "Feature" };
  return (r.id === 0 || r.id) && (o.id = r.id), r.bbox && (o.bbox = r.bbox), o.properties = t || {}, o.geometry = e, o;
}
function Qa(e, t, r) {
  switch (e) {
    case "Point":
      return ye(t).geometry;
    case "LineString":
      return me(t).geometry;
    case "Polygon":
      return mr(t).geometry;
    case "MultiPoint":
      return jo(t).geometry;
    case "MultiLineString":
      return hr(t).geometry;
    case "MultiPolygon":
      return qo(t).geometry;
    default:
      throw new Error(e + " is invalid");
  }
}
function ye(e, t, r) {
  if (r === void 0 && (r = {}), !e)
    throw new Error("coordinates is required");
  if (!Array.isArray(e))
    throw new Error("coordinates must be an Array");
  if (e.length < 2)
    throw new Error("coordinates must be at least 2 numbers long");
  if (!lt(e[0]) || !lt(e[1]))
    throw new Error("coordinates must contain numbers");
  var o = {
    type: "Point",
    coordinates: e
  };
  return pe(o, t, r);
}
function eu(e, t, r) {
  return r === void 0 && (r = {}), Ce(e.map(function(o) {
    return ye(o, t);
  }), r);
}
function mr(e, t, r) {
  r === void 0 && (r = {});
  for (var o = 0, n = e; o < n.length; o++) {
    var i = n[o];
    if (i.length < 4)
      throw new Error("Each LinearRing of a Polygon must have 4 or more Positions.");
    for (var l = 0; l < i[i.length - 1].length; l++)
      if (i[i.length - 1][l] !== i[0][l])
        throw new Error("First and last Position are not equivalent.");
  }
  var a = {
    type: "Polygon",
    coordinates: e
  };
  return pe(a, t, r);
}
function tu(e, t, r) {
  return r === void 0 && (r = {}), Ce(e.map(function(o) {
    return mr(o, t);
  }), r);
}
function me(e, t, r) {
  if (r === void 0 && (r = {}), e.length < 2)
    throw new Error("coordinates must be an array of two or more positions");
  var o = {
    type: "LineString",
    coordinates: e
  };
  return pe(o, t, r);
}
function ru(e, t, r) {
  return r === void 0 && (r = {}), Ce(e.map(function(o) {
    return me(o, t);
  }), r);
}
function Ce(e, t) {
  t === void 0 && (t = {});
  var r = { type: "FeatureCollection" };
  return t.id && (r.id = t.id), t.bbox && (r.bbox = t.bbox), r.features = e, r;
}
function hr(e, t, r) {
  r === void 0 && (r = {});
  var o = {
    type: "MultiLineString",
    coordinates: e
  };
  return pe(o, t, r);
}
function jo(e, t, r) {
  r === void 0 && (r = {});
  var o = {
    type: "MultiPoint",
    coordinates: e
  };
  return pe(o, t, r);
}
function qo(e, t, r) {
  r === void 0 && (r = {});
  var o = {
    type: "MultiPolygon",
    coordinates: e
  };
  return pe(o, t, r);
}
function ou(e, t, r) {
  r === void 0 && (r = {});
  var o = {
    type: "GeometryCollection",
    geometries: e
  };
  return pe(o, t, r);
}
function nu(e, t) {
  if (t === void 0 && (t = 0), t && !(t >= 0))
    throw new Error("precision must be a positive number");
  var r = Math.pow(10, t || 0);
  return Math.round(e * r) / r;
}
function Bo(e, t) {
  t === void 0 && (t = "kilometers");
  var r = pr[t];
  if (!r)
    throw new Error(t + " units is invalid");
  return e * r;
}
function gr(e, t) {
  t === void 0 && (t = "kilometers");
  var r = pr[t];
  if (!r)
    throw new Error(t + " units is invalid");
  return e / r;
}
function iu(e, t) {
  return Go(gr(e, t));
}
function su(e) {
  var t = e % 360;
  return t < 0 && (t += 360), t;
}
function Go(e) {
  var t = e % (2 * Math.PI);
  return t * 180 / Math.PI;
}
function lu(e) {
  var t = e % 360;
  return t * Math.PI / 180;
}
function au(e, t, r) {
  if (t === void 0 && (t = "kilometers"), r === void 0 && (r = "kilometers"), !(e >= 0))
    throw new Error("length must be a positive number");
  return Bo(gr(e, t), r);
}
function uu(e, t, r) {
  if (t === void 0 && (t = "meters"), r === void 0 && (r = "kilometers"), !(e >= 0))
    throw new Error("area must be a positive number");
  var o = kt[t];
  if (!o)
    throw new Error("invalid original units");
  var n = kt[r];
  if (!n)
    throw new Error("invalid final units");
  return e / o * n;
}
function lt(e) {
  return !isNaN(e) && e !== null && !Array.isArray(e);
}
function Er(e) {
  return !!e && e.constructor === Object;
}
function cu(e) {
  if (!e)
    throw new Error("bbox is required");
  if (!Array.isArray(e))
    throw new Error("bbox must be an Array");
  if (e.length !== 4 && e.length !== 6)
    throw new Error("bbox must be an Array of 4 or 6 numbers");
  e.forEach(function(t) {
    if (!lt(t))
      throw new Error("bbox must only contain numbers");
  });
}
function du(e) {
  if (!e)
    throw new Error("id is required");
  if (["string", "number"].indexOf(typeof e) === -1)
    throw new Error("id must be a number or a string");
}
const fu = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  areaFactors: kt,
  bearingToAzimuth: su,
  convertArea: uu,
  convertLength: au,
  degreesToRadians: lu,
  earthRadius: ie,
  factors: pr,
  feature: pe,
  featureCollection: Ce,
  geometry: Qa,
  geometryCollection: ou,
  isNumber: lt,
  isObject: Er,
  lengthToDegrees: iu,
  lengthToRadians: gr,
  lineString: me,
  lineStrings: ru,
  multiLineString: hr,
  multiPoint: jo,
  multiPolygon: qo,
  point: ye,
  points: eu,
  polygon: mr,
  polygons: tu,
  radiansToDegrees: Go,
  radiansToLength: Bo,
  round: nu,
  unitsFactors: Za,
  validateBBox: cu,
  validateId: du
}, Symbol.toStringTag, { value: "Module" }));
function pu(e) {
  if (!e)
    throw new Error("coord is required");
  if (!Array.isArray(e)) {
    if (e.type === "Feature" && e.geometry !== null && e.geometry.type === "Point")
      return e.geometry.coordinates;
    if (e.type === "Point")
      return e.coordinates;
  }
  if (Array.isArray(e) && e.length >= 2 && !Array.isArray(e[0]) && !Array.isArray(e[1]))
    return e;
  throw new Error("coord must be GeoJSON Point or an Array of numbers");
}
function _e(e) {
  if (Array.isArray(e))
    return e;
  if (e.type === "Feature") {
    if (e.geometry !== null)
      return e.geometry.coordinates;
  } else if (e.coordinates)
    return e.coordinates;
  throw new Error("coords must be GeoJSON Feature, Geometry Object or an Array");
}
function wt(e) {
  return e.type === "Feature" ? e.geometry : e;
}
function Xe(e, t, r) {
  if (r === void 0 && (r = {}), !e)
    throw new Error("point is required");
  if (!t)
    throw new Error("polygon is required");
  var o = pu(e), n = wt(t), i = n.type, l = t.bbox, a = n.coordinates;
  if (l && mu(o, l) === !1)
    return !1;
  i === "Polygon" && (a = [a]);
  for (var s = !1, c = 0; c < a.length && !s; c++)
    if (Kr(o, a[c][0], r.ignoreBoundary)) {
      for (var u = !1, E = 1; E < a[c].length && !u; )
        Kr(o, a[c][E], !r.ignoreBoundary) && (u = !0), E++;
      u || (s = !0);
    }
  return s;
}
function Kr(e, t, r) {
  var o = !1;
  t[0][0] === t[t.length - 1][0] && t[0][1] === t[t.length - 1][1] && (t = t.slice(0, t.length - 1));
  for (var n = 0, i = t.length - 1; n < t.length; i = n++) {
    var l = t[n][0], a = t[n][1], s = t[i][0], c = t[i][1], u = e[1] * (l - s) + a * (s - e[0]) + c * (e[0] - l) === 0 && (l - e[0]) * (s - e[0]) <= 0 && (a - e[1]) * (c - e[1]) <= 0;
    if (u)
      return !r;
    var E = a > e[1] != c > e[1] && e[0] < (s - l) * (e[1] - a) / (c - a) + l;
    E && (o = !o);
  }
  return o;
}
function mu(e, t) {
  return t[0] <= e[0] && t[1] <= e[1] && t[2] >= e[0] && t[3] >= e[1];
}
function We(e, t, r) {
  if (e !== null)
    for (var o, n, i, l, a, s, c, u = 0, E = 0, b, h = e.type, w = h === "FeatureCollection", v = h === "Feature", M = w ? e.features.length : 1, f = 0; f < M; f++) {
      c = w ? e.features[f].geometry : v ? e.geometry : e, b = c ? c.type === "GeometryCollection" : !1, a = b ? c.geometries.length : 1;
      for (var d = 0; d < a; d++) {
        var m = 0, y = 0;
        if (l = b ? c.geometries[d] : c, l !== null) {
          s = l.coordinates;
          var R = l.type;
          switch (u = r && (R === "Polygon" || R === "MultiPolygon") ? 1 : 0, R) {
            case null:
              break;
            case "Point":
              if (t(
                s,
                E,
                f,
                m,
                y
              ) === !1)
                return !1;
              E++, m++;
              break;
            case "LineString":
            case "MultiPoint":
              for (o = 0; o < s.length; o++) {
                if (t(
                  s[o],
                  E,
                  f,
                  m,
                  y
                ) === !1)
                  return !1;
                E++, R === "MultiPoint" && m++;
              }
              R === "LineString" && m++;
              break;
            case "Polygon":
            case "MultiLineString":
              for (o = 0; o < s.length; o++) {
                for (n = 0; n < s[o].length - u; n++) {
                  if (t(
                    s[o][n],
                    E,
                    f,
                    m,
                    y
                  ) === !1)
                    return !1;
                  E++;
                }
                R === "MultiLineString" && m++, R === "Polygon" && y++;
              }
              R === "Polygon" && m++;
              break;
            case "MultiPolygon":
              for (o = 0; o < s.length; o++) {
                for (y = 0, n = 0; n < s[o].length; n++) {
                  for (i = 0; i < s[o][n].length - u; i++) {
                    if (t(
                      s[o][n][i],
                      E,
                      f,
                      m,
                      y
                    ) === !1)
                      return !1;
                    E++;
                  }
                  y++;
                }
                m++;
              }
              break;
            case "GeometryCollection":
              for (o = 0; o < l.geometries.length; o++)
                if (We(l.geometries[o], t, r) === !1)
                  return !1;
              break;
            default:
              throw new Error("Unknown Geometry Type");
          }
        }
      }
    }
}
function hu(e, t, r, o) {
  var n = r;
  return We(
    e,
    function(i, l, a, s, c) {
      l === 0 && r === void 0 ? n = i : n = t(
        n,
        i,
        l,
        a,
        s,
        c
      );
    },
    o
  ), n;
}
function ko(e, t) {
  var r;
  switch (e.type) {
    case "FeatureCollection":
      for (r = 0; r < e.features.length && t(e.features[r].properties, r) !== !1; r++)
        ;
      break;
    case "Feature":
      t(e.properties, 0);
      break;
  }
}
function gu(e, t, r) {
  var o = r;
  return ko(e, function(n, i) {
    i === 0 && r === void 0 ? o = n : o = t(o, n, i);
  }), o;
}
function at(e, t) {
  if (e.type === "Feature")
    t(e, 0);
  else if (e.type === "FeatureCollection")
    for (var r = 0; r < e.features.length && t(e.features[r], r) !== !1; r++)
      ;
}
function Eu(e, t, r) {
  var o = r;
  return at(e, function(n, i) {
    i === 0 && r === void 0 ? o = n : o = t(o, n, i);
  }), o;
}
function Su(e) {
  var t = [];
  return We(e, function(r) {
    t.push(r);
  }), t;
}
function Sr(e, t) {
  var r, o, n, i, l, a, s, c, u, E, b = 0, h = e.type === "FeatureCollection", w = e.type === "Feature", v = h ? e.features.length : 1;
  for (r = 0; r < v; r++) {
    for (a = h ? e.features[r].geometry : w ? e.geometry : e, c = h ? e.features[r].properties : w ? e.properties : {}, u = h ? e.features[r].bbox : w ? e.bbox : void 0, E = h ? e.features[r].id : w ? e.id : void 0, s = a ? a.type === "GeometryCollection" : !1, l = s ? a.geometries.length : 1, n = 0; n < l; n++) {
      if (i = s ? a.geometries[n] : a, i === null) {
        if (t(
          null,
          b,
          c,
          u,
          E
        ) === !1)
          return !1;
        continue;
      }
      switch (i.type) {
        case "Point":
        case "LineString":
        case "MultiPoint":
        case "Polygon":
        case "MultiLineString":
        case "MultiPolygon": {
          if (t(
            i,
            b,
            c,
            u,
            E
          ) === !1)
            return !1;
          break;
        }
        case "GeometryCollection": {
          for (o = 0; o < i.geometries.length; o++)
            if (t(
              i.geometries[o],
              b,
              c,
              u,
              E
            ) === !1)
              return !1;
          break;
        }
        default:
          throw new Error("Unknown Geometry Type");
      }
    }
    b++;
  }
}
function vu(e, t, r) {
  var o = r;
  return Sr(
    e,
    function(n, i, l, a, s) {
      i === 0 && r === void 0 ? o = n : o = t(
        o,
        n,
        i,
        l,
        a,
        s
      );
    }
  ), o;
}
function Me(e, t) {
  Sr(e, function(r, o, n, i, l) {
    var a = r === null ? null : r.type;
    switch (a) {
      case null:
      case "Point":
      case "LineString":
      case "Polygon":
        return t(
          pe(r, n, { bbox: i, id: l }),
          o,
          0
        ) === !1 ? !1 : void 0;
    }
    var s;
    switch (a) {
      case "MultiPoint":
        s = "Point";
        break;
      case "MultiLineString":
        s = "LineString";
        break;
      case "MultiPolygon":
        s = "Polygon";
        break;
    }
    for (var c = 0; c < r.coordinates.length; c++) {
      var u = r.coordinates[c], E = {
        type: s,
        coordinates: u
      };
      if (t(pe(E, n), o, c) === !1)
        return !1;
    }
  });
}
function yu(e, t, r) {
  var o = r;
  return Me(
    e,
    function(n, i, l) {
      i === 0 && l === 0 && r === void 0 ? o = n : o = t(
        o,
        n,
        i,
        l
      );
    }
  ), o;
}
function _o(e, t) {
  Me(e, function(r, o, n) {
    var i = 0;
    if (r.geometry) {
      var l = r.geometry.type;
      if (!(l === "Point" || l === "MultiPoint")) {
        var a, s = 0, c = 0, u = 0;
        if (We(
          r,
          function(E, b, h, w, v) {
            if (a === void 0 || o > s || w > c || v > u) {
              a = E, s = o, c = w, u = v, i = 0;
              return;
            }
            var M = me(
              [a, E],
              r.properties
            );
            if (t(
              M,
              o,
              n,
              v,
              i
            ) === !1)
              return !1;
            i++, a = E;
          }
        ) === !1)
          return !1;
      }
    }
  });
}
function bu(e, t, r) {
  var o = r, n = !1;
  return _o(
    e,
    function(i, l, a, s, c) {
      n === !1 && r === void 0 ? o = i : o = t(
        o,
        i,
        l,
        a,
        s,
        c
      ), n = !0;
    }
  ), o;
}
function Xo(e, t) {
  if (!e) throw new Error("geojson is required");
  Me(e, function(r, o, n) {
    if (r.geometry !== null) {
      var i = r.geometry.type, l = r.geometry.coordinates;
      switch (i) {
        case "LineString":
          if (t(r, o, n, 0, 0) === !1)
            return !1;
          break;
        case "Polygon":
          for (var a = 0; a < l.length; a++)
            if (t(
              me(l[a], r.properties),
              o,
              n,
              a
            ) === !1)
              return !1;
          break;
      }
    }
  });
}
function wu(e, t, r) {
  var o = r;
  return Xo(
    e,
    function(n, i, l, a) {
      i === 0 && r === void 0 ? o = n : o = t(
        o,
        n,
        i,
        l,
        a
      );
    }
  ), o;
}
function $u(e, t) {
  if (t = t || {}, !Er(t)) throw new Error("options is invalid");
  var r = t.featureIndex || 0, o = t.multiFeatureIndex || 0, n = t.geometryIndex || 0, i = t.segmentIndex || 0, l = t.properties, a;
  switch (e.type) {
    case "FeatureCollection":
      r < 0 && (r = e.features.length + r), l = l || e.features[r].properties, a = e.features[r].geometry;
      break;
    case "Feature":
      l = l || e.properties, a = e.geometry;
      break;
    case "Point":
    case "MultiPoint":
      return null;
    case "LineString":
    case "Polygon":
    case "MultiLineString":
    case "MultiPolygon":
      a = e;
      break;
    default:
      throw new Error("geojson is invalid");
  }
  if (a === null) return null;
  var s = a.coordinates;
  switch (a.type) {
    case "Point":
    case "MultiPoint":
      return null;
    case "LineString":
      return i < 0 && (i = s.length + i - 1), me(
        [s[i], s[i + 1]],
        l,
        t
      );
    case "Polygon":
      return n < 0 && (n = s.length + n), i < 0 && (i = s[n].length + i - 1), me(
        [
          s[n][i],
          s[n][i + 1]
        ],
        l,
        t
      );
    case "MultiLineString":
      return o < 0 && (o = s.length + o), i < 0 && (i = s[o].length + i - 1), me(
        [
          s[o][i],
          s[o][i + 1]
        ],
        l,
        t
      );
    case "MultiPolygon":
      return o < 0 && (o = s.length + o), n < 0 && (n = s[o].length + n), i < 0 && (i = s[o][n].length - i - 1), me(
        [
          s[o][n][i],
          s[o][n][i + 1]
        ],
        l,
        t
      );
  }
  throw new Error("geojson is invalid");
}
function Lu(e, t) {
  if (t = t || {}, !Er(t)) throw new Error("options is invalid");
  var r = t.featureIndex || 0, o = t.multiFeatureIndex || 0, n = t.geometryIndex || 0, i = t.coordIndex || 0, l = t.properties, a;
  switch (e.type) {
    case "FeatureCollection":
      r < 0 && (r = e.features.length + r), l = l || e.features[r].properties, a = e.features[r].geometry;
      break;
    case "Feature":
      l = l || e.properties, a = e.geometry;
      break;
    case "Point":
    case "MultiPoint":
      return null;
    case "LineString":
    case "Polygon":
    case "MultiLineString":
    case "MultiPolygon":
      a = e;
      break;
    default:
      throw new Error("geojson is invalid");
  }
  if (a === null) return null;
  var s = a.coordinates;
  switch (a.type) {
    case "Point":
      return ye(s, l, t);
    case "MultiPoint":
      return o < 0 && (o = s.length + o), ye(s[o], l, t);
    case "LineString":
      return i < 0 && (i = s.length + i), ye(s[i], l, t);
    case "Polygon":
      return n < 0 && (n = s.length + n), i < 0 && (i = s[n].length + i), ye(s[n][i], l, t);
    case "MultiLineString":
      return o < 0 && (o = s.length + o), i < 0 && (i = s[o].length + i), ye(s[o][i], l, t);
    case "MultiPolygon":
      return o < 0 && (o = s.length + o), n < 0 && (n = s[o].length + n), i < 0 && (i = s[o][n].length - i), ye(
        s[o][n][i],
        l,
        t
      );
  }
  throw new Error("geojson is invalid");
}
const Ou = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  coordAll: Su,
  coordEach: We,
  coordReduce: hu,
  featureEach: at,
  featureReduce: Eu,
  findPoint: Lu,
  findSegment: $u,
  flattenEach: Me,
  flattenReduce: yu,
  geomEach: Sr,
  geomReduce: vu,
  lineEach: Xo,
  lineReduce: wu,
  propEach: ko,
  propReduce: gu,
  segmentEach: _o,
  segmentReduce: bu
}, Symbol.toStringTag, { value: "Module" }));
function Zr(e) {
  if (!e)
    throw new Error("geojson is required");
  var t = [];
  return Me(e, function(r) {
    Tu(r, t);
  }), Ce(t);
}
function Tu(e, t) {
  var r = [], o = e.geometry;
  if (o !== null) {
    switch (o.type) {
      case "Polygon":
        r = _e(o);
        break;
      case "LineString":
        r = [_e(o)];
    }
    r.forEach(function(n) {
      var i = Cu(n, e.properties);
      i.forEach(function(l) {
        l.id = t.length, t.push(l);
      });
    });
  }
}
function Cu(e, t) {
  var r = [];
  return e.reduce(function(o, n) {
    var i = me([o, n], t);
    return i.bbox = Ru(o, n), r.push(i), n;
  }), r;
}
function Ru(e, t) {
  var r = e[0], o = e[1], n = t[0], i = t[1], l = r < n ? r : n, a = o < i ? o : i, s = r > n ? r : n, c = o > i ? o : i;
  return [l, a, s, c];
}
var vr = { exports: {} }, Yo = { exports: {} };
(function(e, t) {
  (function(r, o) {
    e.exports = o();
  })(mi, function() {
    function r(d, m, y, R, A) {
      (function N(I, G, C, F, k) {
        for (; F > C; ) {
          if (F - C > 600) {
            var j = F - C + 1, $ = G - C + 1, T = Math.log(j), V = 0.5 * Math.exp(2 * T / 3), S = 0.5 * Math.sqrt(T * V * (j - V) / j) * ($ - j / 2 < 0 ? -1 : 1), L = Math.max(C, Math.floor(G - $ * V / j + S)), O = Math.min(F, Math.floor(G + (j - $) * V / j + S));
            N(I, G, L, O, k);
          }
          var D = I[G], x = C, P = F;
          for (o(I, C, G), k(I[F], D) > 0 && o(I, C, F); x < P; ) {
            for (o(I, x, P), x++, P--; k(I[x], D) < 0; ) x++;
            for (; k(I[P], D) > 0; ) P--;
          }
          k(I[C], D) === 0 ? o(I, C, P) : o(I, ++P, F), P <= G && (C = P + 1), G <= P && (F = P - 1);
        }
      })(d, m, y || 0, R || d.length - 1, A || n);
    }
    function o(d, m, y) {
      var R = d[m];
      d[m] = d[y], d[y] = R;
    }
    function n(d, m) {
      return d < m ? -1 : d > m ? 1 : 0;
    }
    var i = function(d) {
      d === void 0 && (d = 9), this._maxEntries = Math.max(4, d), this._minEntries = Math.max(2, Math.ceil(0.4 * this._maxEntries)), this.clear();
    };
    function l(d, m, y) {
      if (!y) return m.indexOf(d);
      for (var R = 0; R < m.length; R++) if (y(d, m[R])) return R;
      return -1;
    }
    function a(d, m) {
      s(d, 0, d.children.length, m, d);
    }
    function s(d, m, y, R, A) {
      A || (A = M(null)), A.minX = 1 / 0, A.minY = 1 / 0, A.maxX = -1 / 0, A.maxY = -1 / 0;
      for (var N = m; N < y; N++) {
        var I = d.children[N];
        c(A, d.leaf ? R(I) : I);
      }
      return A;
    }
    function c(d, m) {
      return d.minX = Math.min(d.minX, m.minX), d.minY = Math.min(d.minY, m.minY), d.maxX = Math.max(d.maxX, m.maxX), d.maxY = Math.max(d.maxY, m.maxY), d;
    }
    function u(d, m) {
      return d.minX - m.minX;
    }
    function E(d, m) {
      return d.minY - m.minY;
    }
    function b(d) {
      return (d.maxX - d.minX) * (d.maxY - d.minY);
    }
    function h(d) {
      return d.maxX - d.minX + (d.maxY - d.minY);
    }
    function w(d, m) {
      return d.minX <= m.minX && d.minY <= m.minY && m.maxX <= d.maxX && m.maxY <= d.maxY;
    }
    function v(d, m) {
      return m.minX <= d.maxX && m.minY <= d.maxY && m.maxX >= d.minX && m.maxY >= d.minY;
    }
    function M(d) {
      return { children: d, height: 1, leaf: !0, minX: 1 / 0, minY: 1 / 0, maxX: -1 / 0, maxY: -1 / 0 };
    }
    function f(d, m, y, R, A) {
      for (var N = [m, y]; N.length; ) if (!((y = N.pop()) - (m = N.pop()) <= R)) {
        var I = m + Math.ceil((y - m) / R / 2) * R;
        r(d, I, m, y, A), N.push(m, I, I, y);
      }
    }
    return i.prototype.all = function() {
      return this._all(this.data, []);
    }, i.prototype.search = function(d) {
      var m = this.data, y = [];
      if (!v(d, m)) return y;
      for (var R = this.toBBox, A = []; m; ) {
        for (var N = 0; N < m.children.length; N++) {
          var I = m.children[N], G = m.leaf ? R(I) : I;
          v(d, G) && (m.leaf ? y.push(I) : w(d, G) ? this._all(I, y) : A.push(I));
        }
        m = A.pop();
      }
      return y;
    }, i.prototype.collides = function(d) {
      var m = this.data;
      if (!v(d, m)) return !1;
      for (var y = []; m; ) {
        for (var R = 0; R < m.children.length; R++) {
          var A = m.children[R], N = m.leaf ? this.toBBox(A) : A;
          if (v(d, N)) {
            if (m.leaf || w(d, N)) return !0;
            y.push(A);
          }
        }
        m = y.pop();
      }
      return !1;
    }, i.prototype.load = function(d) {
      if (!d || !d.length) return this;
      if (d.length < this._minEntries) {
        for (var m = 0; m < d.length; m++) this.insert(d[m]);
        return this;
      }
      var y = this._build(d.slice(), 0, d.length - 1, 0);
      if (this.data.children.length) if (this.data.height === y.height) this._splitRoot(this.data, y);
      else {
        if (this.data.height < y.height) {
          var R = this.data;
          this.data = y, y = R;
        }
        this._insert(y, this.data.height - y.height - 1, !0);
      }
      else this.data = y;
      return this;
    }, i.prototype.insert = function(d) {
      return d && this._insert(d, this.data.height - 1), this;
    }, i.prototype.clear = function() {
      return this.data = M([]), this;
    }, i.prototype.remove = function(d, m) {
      if (!d) return this;
      for (var y, R, A, N = this.data, I = this.toBBox(d), G = [], C = []; N || G.length; ) {
        if (N || (N = G.pop(), R = G[G.length - 1], y = C.pop(), A = !0), N.leaf) {
          var F = l(d, N.children, m);
          if (F !== -1) return N.children.splice(F, 1), G.push(N), this._condense(G), this;
        }
        A || N.leaf || !w(N, I) ? R ? (y++, N = R.children[y], A = !1) : N = null : (G.push(N), C.push(y), y = 0, R = N, N = N.children[0]);
      }
      return this;
    }, i.prototype.toBBox = function(d) {
      return d;
    }, i.prototype.compareMinX = function(d, m) {
      return d.minX - m.minX;
    }, i.prototype.compareMinY = function(d, m) {
      return d.minY - m.minY;
    }, i.prototype.toJSON = function() {
      return this.data;
    }, i.prototype.fromJSON = function(d) {
      return this.data = d, this;
    }, i.prototype._all = function(d, m) {
      for (var y = []; d; ) d.leaf ? m.push.apply(m, d.children) : y.push.apply(y, d.children), d = y.pop();
      return m;
    }, i.prototype._build = function(d, m, y, R) {
      var A, N = y - m + 1, I = this._maxEntries;
      if (N <= I) return a(A = M(d.slice(m, y + 1)), this.toBBox), A;
      R || (R = Math.ceil(Math.log(N) / Math.log(I)), I = Math.ceil(N / Math.pow(I, R - 1))), (A = M([])).leaf = !1, A.height = R;
      var G = Math.ceil(N / I), C = G * Math.ceil(Math.sqrt(I));
      f(d, m, y, C, this.compareMinX);
      for (var F = m; F <= y; F += C) {
        var k = Math.min(F + C - 1, y);
        f(d, F, k, G, this.compareMinY);
        for (var j = F; j <= k; j += G) {
          var $ = Math.min(j + G - 1, k);
          A.children.push(this._build(d, j, $, R - 1));
        }
      }
      return a(A, this.toBBox), A;
    }, i.prototype._chooseSubtree = function(d, m, y, R) {
      for (; R.push(m), !m.leaf && R.length - 1 !== y; ) {
        for (var A = 1 / 0, N = 1 / 0, I = void 0, G = 0; G < m.children.length; G++) {
          var C = m.children[G], F = b(C), k = (j = d, $ = C, (Math.max($.maxX, j.maxX) - Math.min($.minX, j.minX)) * (Math.max($.maxY, j.maxY) - Math.min($.minY, j.minY)) - F);
          k < N ? (N = k, A = F < A ? F : A, I = C) : k === N && F < A && (A = F, I = C);
        }
        m = I || m.children[0];
      }
      var j, $;
      return m;
    }, i.prototype._insert = function(d, m, y) {
      var R = y ? d : this.toBBox(d), A = [], N = this._chooseSubtree(R, this.data, m, A);
      for (N.children.push(d), c(N, R); m >= 0 && A[m].children.length > this._maxEntries; ) this._split(A, m), m--;
      this._adjustParentBBoxes(R, A, m);
    }, i.prototype._split = function(d, m) {
      var y = d[m], R = y.children.length, A = this._minEntries;
      this._chooseSplitAxis(y, A, R);
      var N = this._chooseSplitIndex(y, A, R), I = M(y.children.splice(N, y.children.length - N));
      I.height = y.height, I.leaf = y.leaf, a(y, this.toBBox), a(I, this.toBBox), m ? d[m - 1].children.push(I) : this._splitRoot(y, I);
    }, i.prototype._splitRoot = function(d, m) {
      this.data = M([d, m]), this.data.height = d.height + 1, this.data.leaf = !1, a(this.data, this.toBBox);
    }, i.prototype._chooseSplitIndex = function(d, m, y) {
      for (var R, A, N, I, G, C, F, k = 1 / 0, j = 1 / 0, $ = m; $ <= y - m; $++) {
        var T = s(d, 0, $, this.toBBox), V = s(d, $, y, this.toBBox), S = (A = T, N = V, I = void 0, G = void 0, C = void 0, F = void 0, I = Math.max(A.minX, N.minX), G = Math.max(A.minY, N.minY), C = Math.min(A.maxX, N.maxX), F = Math.min(A.maxY, N.maxY), Math.max(0, C - I) * Math.max(0, F - G)), L = b(T) + b(V);
        S < k ? (k = S, R = $, j = L < j ? L : j) : S === k && L < j && (j = L, R = $);
      }
      return R || y - m;
    }, i.prototype._chooseSplitAxis = function(d, m, y) {
      var R = d.leaf ? this.compareMinX : u, A = d.leaf ? this.compareMinY : E;
      this._allDistMargin(d, m, y, R) < this._allDistMargin(d, m, y, A) && d.children.sort(R);
    }, i.prototype._allDistMargin = function(d, m, y, R) {
      d.children.sort(R);
      for (var A = this.toBBox, N = s(d, 0, m, A), I = s(d, y - m, y, A), G = h(N) + h(I), C = m; C < y - m; C++) {
        var F = d.children[C];
        c(N, d.leaf ? A(F) : F), G += h(N);
      }
      for (var k = y - m - 1; k >= m; k--) {
        var j = d.children[k];
        c(I, d.leaf ? A(j) : j), G += h(I);
      }
      return G;
    }, i.prototype._adjustParentBBoxes = function(d, m, y) {
      for (var R = y; R >= 0; R--) c(m[R], d);
    }, i.prototype._condense = function(d) {
      for (var m = d.length - 1, y = void 0; m >= 0; m--) d[m].children.length === 0 ? m > 0 ? (y = d[m - 1].children).splice(y.indexOf(d[m]), 1) : this.clear() : a(d[m], this.toBBox);
    }, i;
  });
})(Yo);
var Nu = Yo.exports;
const Au = /* @__PURE__ */ bo(fu), Mu = /* @__PURE__ */ bo(Ou);
var $t = {}, re = {}, H = {};
Object.defineProperty(H, "__esModule", { value: !0 });
var ue = 63710088e-1, yr = {
  centimeters: ue * 100,
  centimetres: ue * 100,
  degrees: 360 / (2 * Math.PI),
  feet: ue * 3.28084,
  inches: ue * 39.37,
  kilometers: ue / 1e3,
  kilometres: ue / 1e3,
  meters: ue,
  metres: ue,
  miles: ue / 1609.344,
  millimeters: ue * 1e3,
  millimetres: ue * 1e3,
  nauticalmiles: ue / 1852,
  radians: 1,
  yards: ue * 1.0936
}, _t = {
  acres: 247105e-9,
  centimeters: 1e4,
  centimetres: 1e4,
  feet: 10.763910417,
  hectares: 1e-4,
  inches: 1550.003100006,
  kilometers: 1e-6,
  kilometres: 1e-6,
  meters: 1,
  metres: 1,
  miles: 386e-9,
  nauticalmiles: 29155334959812285e-23,
  millimeters: 1e6,
  millimetres: 1e6,
  yards: 1.195990046
};
function Re(e, t, r = {}) {
  const o = { type: "Feature" };
  return (r.id === 0 || r.id) && (o.id = r.id), r.bbox && (o.bbox = r.bbox), o.properties = t || {}, o.geometry = e, o;
}
function Iu(e, t, r = {}) {
  switch (e) {
    case "Point":
      return br(t).geometry;
    case "LineString":
      return $r(t).geometry;
    case "Polygon":
      return wr(t).geometry;
    case "MultiPoint":
      return Jo(t).geometry;
    case "MultiLineString":
      return zo(t).geometry;
    case "MultiPolygon":
      return Ho(t).geometry;
    default:
      throw new Error(e + " is invalid");
  }
}
function br(e, t, r = {}) {
  if (!e)
    throw new Error("coordinates is required");
  if (!Array.isArray(e))
    throw new Error("coordinates must be an Array");
  if (e.length < 2)
    throw new Error("coordinates must be at least 2 numbers long");
  if (!ut(e[0]) || !ut(e[1]))
    throw new Error("coordinates must contain numbers");
  return Re({
    type: "Point",
    coordinates: e
  }, t, r);
}
function Du(e, t, r = {}) {
  return Lt(
    e.map((o) => br(o, t)),
    r
  );
}
function wr(e, t, r = {}) {
  for (const n of e) {
    if (n.length < 4)
      throw new Error(
        "Each LinearRing of a Polygon must have 4 or more Positions."
      );
    if (n[n.length - 1].length !== n[0].length)
      throw new Error("First and last Position are not equivalent.");
    for (let i = 0; i < n[n.length - 1].length; i++)
      if (n[n.length - 1][i] !== n[0][i])
        throw new Error("First and last Position are not equivalent.");
  }
  return Re({
    type: "Polygon",
    coordinates: e
  }, t, r);
}
function Pu(e, t, r = {}) {
  return Lt(
    e.map((o) => wr(o, t)),
    r
  );
}
function $r(e, t, r = {}) {
  if (e.length < 2)
    throw new Error("coordinates must be an array of two or more positions");
  return Re({
    type: "LineString",
    coordinates: e
  }, t, r);
}
function Vu(e, t, r = {}) {
  return Lt(
    e.map((o) => $r(o, t)),
    r
  );
}
function Lt(e, t = {}) {
  const r = { type: "FeatureCollection" };
  return t.id && (r.id = t.id), t.bbox && (r.bbox = t.bbox), r.features = e, r;
}
function zo(e, t, r = {}) {
  return Re({
    type: "MultiLineString",
    coordinates: e
  }, t, r);
}
function Jo(e, t, r = {}) {
  return Re({
    type: "MultiPoint",
    coordinates: e
  }, t, r);
}
function Ho(e, t, r = {}) {
  return Re({
    type: "MultiPolygon",
    coordinates: e
  }, t, r);
}
function xu(e, t, r = {}) {
  return Re({
    type: "GeometryCollection",
    geometries: e
  }, t, r);
}
function Fu(e, t = 0) {
  if (t && !(t >= 0))
    throw new Error("precision must be a positive number");
  const r = Math.pow(10, t || 0);
  return Math.round(e * r) / r;
}
function Wo(e, t = "kilometers") {
  const r = yr[t];
  if (!r)
    throw new Error(t + " units is invalid");
  return e * r;
}
function Lr(e, t = "kilometers") {
  const r = yr[t];
  if (!r)
    throw new Error(t + " units is invalid");
  return e / r;
}
function Uu(e, t) {
  return Ko(Lr(e, t));
}
function ju(e) {
  let t = e % 360;
  return t < 0 && (t += 360), t;
}
function qu(e) {
  return e = e % 360, e > 180 ? e - 360 : e < -180 ? e + 360 : e;
}
function Ko(e) {
  return e % (2 * Math.PI) * 180 / Math.PI;
}
function Bu(e) {
  return e % 360 * Math.PI / 180;
}
function Gu(e, t = "kilometers", r = "kilometers") {
  if (!(e >= 0))
    throw new Error("length must be a positive number");
  return Wo(Lr(e, t), r);
}
function ku(e, t = "meters", r = "kilometers") {
  if (!(e >= 0))
    throw new Error("area must be a positive number");
  const o = _t[t];
  if (!o)
    throw new Error("invalid original units");
  const n = _t[r];
  if (!n)
    throw new Error("invalid final units");
  return e / o * n;
}
function ut(e) {
  return !isNaN(e) && e !== null && !Array.isArray(e);
}
function _u(e) {
  return e !== null && typeof e == "object" && !Array.isArray(e);
}
function Xu(e) {
  if (!e)
    throw new Error("bbox is required");
  if (!Array.isArray(e))
    throw new Error("bbox must be an Array");
  if (e.length !== 4 && e.length !== 6)
    throw new Error("bbox must be an Array of 4 or 6 numbers");
  e.forEach((t) => {
    if (!ut(t))
      throw new Error("bbox must only contain numbers");
  });
}
function Yu(e) {
  if (!e)
    throw new Error("id is required");
  if (["string", "number"].indexOf(typeof e) === -1)
    throw new Error("id must be a number or a string");
}
H.areaFactors = _t;
H.azimuthToBearing = qu;
H.bearingToAzimuth = ju;
H.convertArea = ku;
H.convertLength = Gu;
H.degreesToRadians = Bu;
H.earthRadius = ue;
H.factors = yr;
H.feature = Re;
H.featureCollection = Lt;
H.geometry = Iu;
H.geometryCollection = xu;
H.isNumber = ut;
H.isObject = _u;
H.lengthToDegrees = Uu;
H.lengthToRadians = Lr;
H.lineString = $r;
H.lineStrings = Vu;
H.multiLineString = zo;
H.multiPoint = Jo;
H.multiPolygon = Ho;
H.point = br;
H.points = Du;
H.polygon = wr;
H.polygons = Pu;
H.radiansToDegrees = Ko;
H.radiansToLength = Wo;
H.round = Fu;
H.validateBBox = Xu;
H.validateId = Yu;
Object.defineProperty(re, "__esModule", { value: !0 });
var se = H;
function Ke(e, t, r) {
  if (e !== null)
    for (var o, n, i, l, a, s, c, u = 0, E = 0, b, h = e.type, w = h === "FeatureCollection", v = h === "Feature", M = w ? e.features.length : 1, f = 0; f < M; f++) {
      c = w ? e.features[f].geometry : v ? e.geometry : e, b = c ? c.type === "GeometryCollection" : !1, a = b ? c.geometries.length : 1;
      for (var d = 0; d < a; d++) {
        var m = 0, y = 0;
        if (l = b ? c.geometries[d] : c, l !== null) {
          s = l.coordinates;
          var R = l.type;
          switch (u = r && (R === "Polygon" || R === "MultiPolygon") ? 1 : 0, R) {
            case null:
              break;
            case "Point":
              if (t(
                s,
                E,
                f,
                m,
                y
              ) === !1)
                return !1;
              E++, m++;
              break;
            case "LineString":
            case "MultiPoint":
              for (o = 0; o < s.length; o++) {
                if (t(
                  s[o],
                  E,
                  f,
                  m,
                  y
                ) === !1)
                  return !1;
                E++, R === "MultiPoint" && m++;
              }
              R === "LineString" && m++;
              break;
            case "Polygon":
            case "MultiLineString":
              for (o = 0; o < s.length; o++) {
                for (n = 0; n < s[o].length - u; n++) {
                  if (t(
                    s[o][n],
                    E,
                    f,
                    m,
                    y
                  ) === !1)
                    return !1;
                  E++;
                }
                R === "MultiLineString" && m++, R === "Polygon" && y++;
              }
              R === "Polygon" && m++;
              break;
            case "MultiPolygon":
              for (o = 0; o < s.length; o++) {
                for (y = 0, n = 0; n < s[o].length; n++) {
                  for (i = 0; i < s[o][n].length - u; i++) {
                    if (t(
                      s[o][n][i],
                      E,
                      f,
                      m,
                      y
                    ) === !1)
                      return !1;
                    E++;
                  }
                  y++;
                }
                m++;
              }
              break;
            case "GeometryCollection":
              for (o = 0; o < l.geometries.length; o++)
                if (Ke(l.geometries[o], t, r) === !1)
                  return !1;
              break;
            default:
              throw new Error("Unknown Geometry Type");
          }
        }
      }
    }
}
function zu(e, t, r, o) {
  var n = r;
  return Ke(
    e,
    function(i, l, a, s, c) {
      l === 0 && r === void 0 ? n = i : n = t(
        n,
        i,
        l,
        a,
        s,
        c
      );
    },
    o
  ), n;
}
function Zo(e, t) {
  var r;
  switch (e.type) {
    case "FeatureCollection":
      for (r = 0; r < e.features.length && t(e.features[r].properties, r) !== !1; r++)
        ;
      break;
    case "Feature":
      t(e.properties, 0);
      break;
  }
}
function Ju(e, t, r) {
  var o = r;
  return Zo(e, function(n, i) {
    i === 0 && r === void 0 ? o = n : o = t(o, n, i);
  }), o;
}
function Qo(e, t) {
  if (e.type === "Feature")
    t(e, 0);
  else if (e.type === "FeatureCollection")
    for (var r = 0; r < e.features.length && t(e.features[r], r) !== !1; r++)
      ;
}
function Hu(e, t, r) {
  var o = r;
  return Qo(e, function(n, i) {
    i === 0 && r === void 0 ? o = n : o = t(o, n, i);
  }), o;
}
function Wu(e) {
  var t = [];
  return Ke(e, function(r) {
    t.push(r);
  }), t;
}
function Or(e, t) {
  var r, o, n, i, l, a, s, c, u, E, b = 0, h = e.type === "FeatureCollection", w = e.type === "Feature", v = h ? e.features.length : 1;
  for (r = 0; r < v; r++) {
    for (a = h ? e.features[r].geometry : w ? e.geometry : e, c = h ? e.features[r].properties : w ? e.properties : {}, u = h ? e.features[r].bbox : w ? e.bbox : void 0, E = h ? e.features[r].id : w ? e.id : void 0, s = a ? a.type === "GeometryCollection" : !1, l = s ? a.geometries.length : 1, n = 0; n < l; n++) {
      if (i = s ? a.geometries[n] : a, i === null) {
        if (t(
          null,
          b,
          c,
          u,
          E
        ) === !1)
          return !1;
        continue;
      }
      switch (i.type) {
        case "Point":
        case "LineString":
        case "MultiPoint":
        case "Polygon":
        case "MultiLineString":
        case "MultiPolygon": {
          if (t(
            i,
            b,
            c,
            u,
            E
          ) === !1)
            return !1;
          break;
        }
        case "GeometryCollection": {
          for (o = 0; o < i.geometries.length; o++)
            if (t(
              i.geometries[o],
              b,
              c,
              u,
              E
            ) === !1)
              return !1;
          break;
        }
        default:
          throw new Error("Unknown Geometry Type");
      }
    }
    b++;
  }
}
function Ku(e, t, r) {
  var o = r;
  return Or(
    e,
    function(n, i, l, a, s) {
      i === 0 && r === void 0 ? o = n : o = t(
        o,
        n,
        i,
        l,
        a,
        s
      );
    }
  ), o;
}
function Ot(e, t) {
  Or(e, function(r, o, n, i, l) {
    var a = r === null ? null : r.type;
    switch (a) {
      case null:
      case "Point":
      case "LineString":
      case "Polygon":
        return t(
          se.feature.call(void 0, r, n, { bbox: i, id: l }),
          o,
          0
        ) === !1 ? !1 : void 0;
    }
    var s;
    switch (a) {
      case "MultiPoint":
        s = "Point";
        break;
      case "MultiLineString":
        s = "LineString";
        break;
      case "MultiPolygon":
        s = "Polygon";
        break;
    }
    for (var c = 0; c < r.coordinates.length; c++) {
      var u = r.coordinates[c], E = {
        type: s,
        coordinates: u
      };
      if (t(se.feature.call(void 0, E, n), o, c) === !1)
        return !1;
    }
  });
}
function Zu(e, t, r) {
  var o = r;
  return Ot(
    e,
    function(n, i, l) {
      i === 0 && l === 0 && r === void 0 ? o = n : o = t(
        o,
        n,
        i,
        l
      );
    }
  ), o;
}
function en(e, t) {
  Ot(e, function(r, o, n) {
    var i = 0;
    if (r.geometry) {
      var l = r.geometry.type;
      if (!(l === "Point" || l === "MultiPoint")) {
        var a, s = 0, c = 0, u = 0;
        if (Ke(
          r,
          function(E, b, h, w, v) {
            if (a === void 0 || o > s || w > c || v > u) {
              a = E, s = o, c = w, u = v, i = 0;
              return;
            }
            var M = se.lineString.call(
              void 0,
              [a, E],
              r.properties
            );
            if (t(
              M,
              o,
              n,
              v,
              i
            ) === !1)
              return !1;
            i++, a = E;
          }
        ) === !1)
          return !1;
      }
    }
  });
}
function Qu(e, t, r) {
  var o = r, n = !1;
  return en(
    e,
    function(i, l, a, s, c) {
      n === !1 && r === void 0 ? o = i : o = t(
        o,
        i,
        l,
        a,
        s,
        c
      ), n = !0;
    }
  ), o;
}
function tn(e, t) {
  if (!e) throw new Error("geojson is required");
  Ot(e, function(r, o, n) {
    if (r.geometry !== null) {
      var i = r.geometry.type, l = r.geometry.coordinates;
      switch (i) {
        case "LineString":
          if (t(r, o, n, 0, 0) === !1)
            return !1;
          break;
        case "Polygon":
          for (var a = 0; a < l.length; a++)
            if (t(
              se.lineString.call(void 0, l[a], r.properties),
              o,
              n,
              a
            ) === !1)
              return !1;
          break;
      }
    }
  });
}
function ec(e, t, r) {
  var o = r;
  return tn(
    e,
    function(n, i, l, a) {
      i === 0 && r === void 0 ? o = n : o = t(
        o,
        n,
        i,
        l,
        a
      );
    }
  ), o;
}
function tc(e, t) {
  if (t = t || {}, !se.isObject.call(void 0, t)) throw new Error("options is invalid");
  var r = t.featureIndex || 0, o = t.multiFeatureIndex || 0, n = t.geometryIndex || 0, i = t.segmentIndex || 0, l = t.properties, a;
  switch (e.type) {
    case "FeatureCollection":
      r < 0 && (r = e.features.length + r), l = l || e.features[r].properties, a = e.features[r].geometry;
      break;
    case "Feature":
      l = l || e.properties, a = e.geometry;
      break;
    case "Point":
    case "MultiPoint":
      return null;
    case "LineString":
    case "Polygon":
    case "MultiLineString":
    case "MultiPolygon":
      a = e;
      break;
    default:
      throw new Error("geojson is invalid");
  }
  if (a === null) return null;
  var s = a.coordinates;
  switch (a.type) {
    case "Point":
    case "MultiPoint":
      return null;
    case "LineString":
      return i < 0 && (i = s.length + i - 1), se.lineString.call(
        void 0,
        [s[i], s[i + 1]],
        l,
        t
      );
    case "Polygon":
      return n < 0 && (n = s.length + n), i < 0 && (i = s[n].length + i - 1), se.lineString.call(
        void 0,
        [
          s[n][i],
          s[n][i + 1]
        ],
        l,
        t
      );
    case "MultiLineString":
      return o < 0 && (o = s.length + o), i < 0 && (i = s[o].length + i - 1), se.lineString.call(
        void 0,
        [
          s[o][i],
          s[o][i + 1]
        ],
        l,
        t
      );
    case "MultiPolygon":
      return o < 0 && (o = s.length + o), n < 0 && (n = s[o].length + n), i < 0 && (i = s[o][n].length - i - 1), se.lineString.call(
        void 0,
        [
          s[o][n][i],
          s[o][n][i + 1]
        ],
        l,
        t
      );
  }
  throw new Error("geojson is invalid");
}
function rc(e, t) {
  if (t = t || {}, !se.isObject.call(void 0, t)) throw new Error("options is invalid");
  var r = t.featureIndex || 0, o = t.multiFeatureIndex || 0, n = t.geometryIndex || 0, i = t.coordIndex || 0, l = t.properties, a;
  switch (e.type) {
    case "FeatureCollection":
      r < 0 && (r = e.features.length + r), l = l || e.features[r].properties, a = e.features[r].geometry;
      break;
    case "Feature":
      l = l || e.properties, a = e.geometry;
      break;
    case "Point":
    case "MultiPoint":
      return null;
    case "LineString":
    case "Polygon":
    case "MultiLineString":
    case "MultiPolygon":
      a = e;
      break;
    default:
      throw new Error("geojson is invalid");
  }
  if (a === null) return null;
  var s = a.coordinates;
  switch (a.type) {
    case "Point":
      return se.point.call(void 0, s, l, t);
    case "MultiPoint":
      return o < 0 && (o = s.length + o), se.point.call(void 0, s[o], l, t);
    case "LineString":
      return i < 0 && (i = s.length + i), se.point.call(void 0, s[i], l, t);
    case "Polygon":
      return n < 0 && (n = s.length + n), i < 0 && (i = s[n].length + i), se.point.call(void 0, s[n][i], l, t);
    case "MultiLineString":
      return o < 0 && (o = s.length + o), i < 0 && (i = s[o].length + i), se.point.call(void 0, s[o][i], l, t);
    case "MultiPolygon":
      return o < 0 && (o = s.length + o), n < 0 && (n = s[o].length + n), i < 0 && (i = s[o][n].length - i), se.point.call(
        void 0,
        s[o][n][i],
        l,
        t
      );
  }
  throw new Error("geojson is invalid");
}
re.coordAll = Wu;
re.coordEach = Ke;
re.coordReduce = zu;
re.featureEach = Qo;
re.featureReduce = Hu;
re.findPoint = rc;
re.findSegment = tc;
re.flattenEach = Ot;
re.flattenReduce = Zu;
re.geomEach = Or;
re.geomReduce = Ku;
re.lineEach = tn;
re.lineReduce = ec;
re.propEach = Zo;
re.propReduce = Ju;
re.segmentEach = en;
re.segmentReduce = Qu;
Object.defineProperty($t, "__esModule", { value: !0 });
var oc = re;
function rn(e, t = {}) {
  if (e.bbox != null && t.recompute !== !0)
    return e.bbox;
  const r = [1 / 0, 1 / 0, -1 / 0, -1 / 0];
  return oc.coordEach.call(void 0, e, (o) => {
    r[0] > o[0] && (r[0] = o[0]), r[1] > o[1] && (r[1] = o[1]), r[2] < o[0] && (r[2] = o[0]), r[3] < o[1] && (r[3] = o[1]);
  }), r;
}
var nc = rn;
$t.bbox = rn;
$t.default = nc;
var Ee = Nu, on = Au, nn = Mu, Ve = $t.default, ic = nn.featureEach;
nn.coordEach;
on.polygon;
var Qr = on.featureCollection;
function sn(e) {
  var t = new Ee(e);
  return t.insert = function(r) {
    if (r.type !== "Feature") throw new Error("invalid feature");
    return r.bbox = r.bbox ? r.bbox : Ve(r), Ee.prototype.insert.call(this, r);
  }, t.load = function(r) {
    var o = [];
    return Array.isArray(r) ? r.forEach(function(n) {
      if (n.type !== "Feature") throw new Error("invalid features");
      n.bbox = n.bbox ? n.bbox : Ve(n), o.push(n);
    }) : ic(r, function(n) {
      if (n.type !== "Feature") throw new Error("invalid features");
      n.bbox = n.bbox ? n.bbox : Ve(n), o.push(n);
    }), Ee.prototype.load.call(this, o);
  }, t.remove = function(r, o) {
    if (r.type !== "Feature") throw new Error("invalid feature");
    return r.bbox = r.bbox ? r.bbox : Ve(r), Ee.prototype.remove.call(this, r, o);
  }, t.clear = function() {
    return Ee.prototype.clear.call(this);
  }, t.search = function(r) {
    var o = Ee.prototype.search.call(this, this.toBBox(r));
    return Qr(o);
  }, t.collides = function(r) {
    return Ee.prototype.collides.call(this, this.toBBox(r));
  }, t.all = function() {
    var r = Ee.prototype.all.call(this);
    return Qr(r);
  }, t.toJSON = function() {
    return Ee.prototype.toJSON.call(this);
  }, t.fromJSON = function(r) {
    return Ee.prototype.fromJSON.call(this, r);
  }, t.toBBox = function(r) {
    var o;
    if (r.bbox) o = r.bbox;
    else if (Array.isArray(r) && r.length === 4) o = r;
    else if (Array.isArray(r) && r.length === 6) o = [r[0], r[1], r[3], r[4]];
    else if (r.type === "Feature") o = Ve(r);
    else if (r.type === "FeatureCollection") o = Ve(r);
    else throw new Error("invalid geojson");
    return {
      minX: o[0],
      minY: o[1],
      maxX: o[2],
      maxY: o[3]
    };
  }, t;
}
vr.exports = sn;
vr.exports.default = sn;
var sc = vr.exports;
const lc = /* @__PURE__ */ yo(sc);
function Tr(e, t) {
  var r = {}, o = [];
  if (e.type === "LineString" && (e = pe(e)), t.type === "LineString" && (t = pe(t)), e.type === "Feature" && t.type === "Feature" && e.geometry !== null && t.geometry !== null && e.geometry.type === "LineString" && t.geometry.type === "LineString" && e.geometry.coordinates.length === 2 && t.geometry.coordinates.length === 2) {
    var n = eo(e, t);
    return n && o.push(n), Ce(o);
  }
  var i = lc();
  return i.load(Zr(t)), at(Zr(e), function(l) {
    at(i.search(l), function(a) {
      var s = eo(l, a);
      if (s) {
        var c = _e(s).join(",");
        r[c] || (r[c] = !0, o.push(s));
      }
    });
  }), Ce(o);
}
function eo(e, t) {
  var r = _e(e), o = _e(t);
  if (r.length !== 2)
    throw new Error("<intersects> line1 must only contain 2 coordinates");
  if (o.length !== 2)
    throw new Error("<intersects> line2 must only contain 2 coordinates");
  var n = r[0][0], i = r[0][1], l = r[1][0], a = r[1][1], s = o[0][0], c = o[0][1], u = o[1][0], E = o[1][1], b = (E - c) * (l - n) - (u - s) * (a - i), h = (u - s) * (i - c) - (E - c) * (n - s), w = (l - n) * (i - c) - (a - i) * (n - s);
  if (b === 0)
    return null;
  var v = h / b, M = w / b;
  if (v >= 0 && v <= 1 && M >= 0 && M <= 1) {
    var f = n + v * (l - n), d = i + v * (a - i);
    return ye([f, d]);
  }
  return null;
}
function Xt(e, t) {
  t === void 0 && (t = {});
  var r = wt(e);
  switch (!t.properties && e.type === "Feature" && (t.properties = e.properties), r.type) {
    case "Polygon":
      return ac(r, t);
    case "MultiPolygon":
      return uc(r, t);
    default:
      throw new Error("invalid poly");
  }
}
function ac(e, t) {
  t === void 0 && (t = {});
  var r = wt(e), o = r.coordinates, n = t.properties ? t.properties : e.type === "Feature" ? e.properties : {};
  return ln(o, n);
}
function uc(e, t) {
  t === void 0 && (t = {});
  var r = wt(e), o = r.coordinates, n = t.properties ? t.properties : e.type === "Feature" ? e.properties : {}, i = [];
  return o.forEach(function(l) {
    i.push(ln(l, n));
  }), Ce(i);
}
function ln(e, t) {
  return e.length > 1 ? hr(e, t) : me(e[0], t);
}
function cc(e, t) {
  var r = !0;
  return Me(e, function(o) {
    Me(t, function(n) {
      if (r === !1)
        return !1;
      r = dc(o.geometry, n.geometry);
    });
  }), r;
}
function dc(e, t) {
  switch (e.type) {
    case "Point":
      switch (t.type) {
        case "Point":
          return !hc(e.coordinates, t.coordinates);
        case "LineString":
          return !to(t, e);
        case "Polygon":
          return !Xe(e, t);
      }
      break;
    case "LineString":
      switch (t.type) {
        case "Point":
          return !to(e, t);
        case "LineString":
          return !fc(e, t);
        case "Polygon":
          return !ro(t, e);
      }
      break;
    case "Polygon":
      switch (t.type) {
        case "Point":
          return !Xe(t, e);
        case "LineString":
          return !ro(e, t);
        case "Polygon":
          return !pc(t, e);
      }
  }
  return !1;
}
function to(e, t) {
  for (var r = 0; r < e.coordinates.length - 1; r++)
    if (mc(e.coordinates[r], e.coordinates[r + 1], t.coordinates))
      return !0;
  return !1;
}
function fc(e, t) {
  var r = Tr(e, t);
  return r.features.length > 0;
}
function ro(e, t) {
  for (var r = 0, o = t.coordinates; r < o.length; r++) {
    var n = o[r];
    if (Xe(n, e))
      return !0;
  }
  var i = Tr(t, Xt(e));
  return i.features.length > 0;
}
function pc(e, t) {
  for (var r = 0, o = e.coordinates[0]; r < o.length; r++) {
    var n = o[r];
    if (Xe(n, t))
      return !0;
  }
  for (var i = 0, l = t.coordinates[0]; i < l.length; i++) {
    var a = l[i];
    if (Xe(a, e))
      return !0;
  }
  var s = Tr(Xt(e), Xt(t));
  return s.features.length > 0;
}
function mc(e, t, r) {
  var o = r[0] - e[0], n = r[1] - e[1], i = t[0] - e[0], l = t[1] - e[1], a = o * l - n * i;
  return a !== 0 ? !1 : Math.abs(i) >= Math.abs(l) ? i > 0 ? e[0] <= r[0] && r[0] <= t[0] : t[0] <= r[0] && r[0] <= e[0] : l > 0 ? e[1] <= r[1] && r[1] <= t[1] : t[1] <= r[1] && r[1] <= e[1];
}
function hc(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}
function an(e) {
  try {
    _(e.baseUrl, K(String));
  } catch (t) {
    return fr(we).error(t.message), !1;
  }
  return !0;
}
class un {
  constructor(t, r) {
    W(this, "type");
    W(this, "url");
    W(this, "_app");
    W(this, "_resultLayer");
    /** the results of the last query */
    W(this, "results");
    this._app = r, this.type = t.type, this.url = t.baseUrl ? t.baseUrl.replace(/\/$/, "") : "";
    let o = this._app.layers.getByKey("_exportResultLayer");
    o || (o = new ft({
      projection: je,
      name: "_exportResultLayer",
      allowPicking: !1,
      vectorProperties: {
        classificationType: "both",
        altitudeMode: "clampToGround"
      }
    }), lo(o), this._app.layers.add(o)), this._resultLayer = o, this.results = [];
  }
  get resultLayer() {
    return this._resultLayer;
  }
  /**
   * query the given data source based on a features geometry
   * @param feature The feature that is used to query the overlapping data sources.
   */
  async query(t) {
    _(t, Mr), this.clear();
    const r = this._app.maps.activeMap instanceof Kt ? await xo(t, this._app) : t.getGeometry();
    if (r) {
      const o = new mo({
        coordinates: r.getExtent(),
        projection: je.toJSON()
      });
      if (o.isValid()) {
        const n = new pi(), i = n.writeFeatureObject(new Mr(r)), l = (await this.getFeaturesInExtent(o)).map((a) => {
          const s = n.writeFeatureObject(a);
          if (!cc(s, i)) {
            const c = this.getResultFromFeature(a);
            return this.results.push(c), a;
          }
          return null;
        }).filter((a) => !!a);
        this._resultLayer.addFeatures(l), this._resultLayer.featureVisibility.hideObjects(
          l.map((a) => a.getId())
        );
      }
    }
  }
  /**
   * clears the results and the result layer
   */
  clear() {
    this.results.splice(0), this._resultLayer.removeAllFeatures();
  }
  // eslint-disable-next-line class-methods-use-this, @typescript-eslint/no-unused-vars
  getResultFromFeature(t) {
    throw new Error("Implementation Error");
  }
  // eslint-disable-next-line class-methods-use-this, @typescript-eslint/no-unused-vars, @typescript-eslint/require-await
  async getFeaturesInExtent(t) {
    throw new Error("Implementation Error");
  }
}
class cn extends Po {
  constructor(r) {
    super(r);
    W(this, "href");
    this.href = r.href;
  }
  download() {
    return no(this.href, ""), Promise.resolve();
  }
}
function dn(e, t) {
  if (an(e) && e.type === J.OBLIQUE) {
    const { obliqueCollectionName: o, fileExtension: n, resolution: i } = e;
    try {
      return _(o, String), _(
        t.obliqueCollections.getByKey(o),
        Wn
      ), _(n, K(String)), _(i, K(Number)), !0;
    } catch (l) {
      return fr("@vcmap/export/dataSources/ObliqueDataSource").error(
        l.message
      ), !1;
    }
  }
  return !1;
}
class ct extends un {
  constructor(r, o) {
    super(r, o);
    W(this, "dedicatedSource");
    W(this, "obliqueCollectionName");
    W(this, "fileExtension");
    W(this, "viewDirectionFilter", null);
    W(this, "resolution");
    W(this, "downloadState");
    this.dedicatedSource = Se(r.dedicatedSource, !1), this.obliqueCollectionName = r.obliqueCollectionName, this.fileExtension = r.fileExtension || "jpg", this.resolution = r.resolution, this.downloadState = r.downloadState;
  }
  /** generates a download link for a given image, if this data source has a dedicated source */
  getUriForImage(r) {
    return `${this.url}/${r}.${this.fileExtension}`;
  }
  getResultFromFeature(r) {
    const o = String(r.getId());
    return this.dedicatedSource ? new cn({
      title: o,
      href: this.getUriForImage(o),
      featureId: o,
      fileSize: void 0
    }) : new Ba(
      {
        title: o,
        featureId: o,
        obliqueCollectionName: this.obliqueCollectionName,
        imageName: o,
        fileExtension: this.fileExtension,
        resolution: this.resolution,
        downloadState: this.downloadState
      },
      this._app
    );
  }
  async getFeaturesInExtent(r) {
    const o = this._app.obliqueCollections.getByKey(
      this.obliqueCollectionName
    );
    if (o) {
      await o.load(), await o.loadDataForExtent(r.extent);
      const i = o.imageFeatureSource.getFeaturesInExtent(r.extent);
      return this.viewDirectionFilter && this.viewDirectionFilter !== Kn.NADIR ? i.filter(
        (l) => l.get("viewDirection") === this.viewDirectionFilter
      ) : i;
    } else
      throw new Error("Oblique collection does not exist.");
  }
}
function fn(e) {
  if (an(e) && e.type === J.GEOJSON)
    try {
      return _(e.geojsonUrl, String), !0;
    } catch (r) {
      return fr("@vcmap/export/dataSources/GeoJSONDataSource").error(
        r.message
      ), !1;
    }
  return !1;
}
class gc extends un {
  constructor(r, o) {
    super(r, o);
    /** the title of this data source to be rendered in the UI */
    W(this, "title");
    W(this, "geojsonUrl");
    W(this, "_geojsonLayer");
    this.title = r.title, this.geojsonUrl = r.geojsonUrl, this._geojsonLayer = new Zn({
      name: "_exportGeojsonLayer",
      url: this.geojsonUrl,
      vectorProperties: {
        altitudeMode: "clampToGround"
      }
    });
  }
  getResultFromFeature(r) {
    const o = r.getProperties();
    return new cn({
      href: `${this.url}/${o.url.replace(/^\//, "")}`,
      title: o.url,
      featureId: r.getId(),
      fileSize: o.fileSize ? ka(o.fileSize) : void 0
    });
  }
  async getFeaturesInExtent(r) {
    const o = this._geojsonLayer;
    if (o)
      return await o.fetchData(), o.source.getFeaturesInExtent(r.extent);
    throw new Error("GeoJSON layer does not exist.");
  }
}
function Ec(e, t) {
  if (fn(e))
    return new gc(e, t);
  if (dn(e, t))
    return new ct(e, t);
  if (e.type === J.CITY_MODEL)
    return null;
  throw new Error(`Datasource "${e.type}" not valid`);
}
function Sc(e, t) {
  return fn(t) || dn(t, e) || t.type === J.CITY_MODEL;
}
const vc = Ie({
  name: "ExportWindow",
  components: {
    VSheet: pt,
    VForm: ni,
    VOverlay: ii,
    VChip: si,
    VProgressLinear: li,
    VcsFormButton: Yt,
    VcsSelect: dt,
    VcsTextField: io,
    VcsTextArea: vn,
    VcsCheckbox: Ht,
    VcsWizard: yn,
    VcsWizardStep: bn,
    SelectionArea: bi,
    SelectionObjects: Vi,
    SettingsCityModel: Ui,
    SettingsOblique: Bi,
    ResultList: Ha
  },
  setup() {
    var $, T, V;
    const e = Ye("vcsApp"), t = e.plugins.getByKey(we), r = t.state, o = t.config, n = le(!1), i = st({
      running: !1,
      progress: 0,
      // shows how many images should be downloaded (second number) and which is currently downloading (first number).
      queue: [1, 1]
    });
    let l;
    ((S) => {
      S[S.DATASOURCE = 0] = "DATASOURCE", S[S.SELECTION_MODE = 1] = "SELECTION_MODE", S[S.SETTINGS = 2] = "SETTINGS", S[S.EXPORT_DESTINATION = 3] = "EXPORT_DESTINATION", S[S.SEND_REQUEST = 4] = "SEND_REQUEST";
    })(l || (l = {}));
    const a = st({
      selectionMode: !1,
      settings: !1,
      exportDestination: !o.termsOfUse
    }), s = le(null), c = le(null), u = le(null);
    Fe(
      () => r.settingsOblique.directionFilter,
      () => {
        t.dataSource && t.dataSource instanceof ct && (t.dataSource.viewDirectionFilter = r.settingsOblique.directionFilter);
      }
    );
    function E(S) {
      r.step = S + 1, S >= r.highestStep && (r.highestStep = r.step);
    }
    const b = le(($ = e.maps.activeMap) == null ? void 0 : $.className), h = le(
      (V = (T = e.maps.activeMap) == null ? void 0 : T.collection) == null ? void 0 : V.name
    ), w = fe(() => o.dataSourceOptionsList.filter(Sc.bind(null, e)).map((S) => {
      let L;
      if (S.type === J.CITY_MODEL)
        L = S.title || "export.dataSources.cityModel";
      else if (S.type === J.OBLIQUE)
        L = S.title || "export.dataSources.oblique";
      else if (S.type === J.GEOJSON)
        ({ title: L } = S);
      else
        throw new Error(
          `The following datasource type is not supported: "${String(S.type)}"`
        );
      return { ...S, title: L };
    }));
    function v() {
      return ![...e.layers].some(
        (S) => S instanceof uo && S.properties.exportWorkbench === o.settingsCityModel.fmeServerUrl
      );
    }
    const M = fe(() => {
      var L, O;
      const S = [
        {
          value: ee.AREA_SELECTION,
          title: "export.selectionTypes.areaSelection"
        }
      ];
      return ((L = r.selectedDataSourceOptions) == null ? void 0 : L.type) === J.CITY_MODEL && (v() || S.push({
        value: ee.OBJECT_SELECTION,
        title: "export.selectionTypes.objectSelection",
        props: {
          disabled: b.value !== "CesiumMap"
        }
      })), ((O = r.selectedDataSourceOptions) == null ? void 0 : O.type) === J.OBLIQUE && S.push({
        value: ee.CURRENT_IMAGE,
        title: "export.selectionTypes.currentImage",
        props: {
          disabled: b.value !== "ObliqueMap" || h.value !== r.selectedDataSourceOptions.obliqueCollectionName
        }
      }), S;
    });
    let f;
    const d = [
      e.maps.mapActivated.addEventListener((S) => {
        var L;
        b.value = S.className, h.value = (L = S == null ? void 0 : S.collection) == null ? void 0 : L.name, (r.selectedSelectionType === ee.OBJECT_SELECTION && S.className !== "CesiumMap" || r.selectedSelectionType === ee.CURRENT_IMAGE && S.className !== "ObliqueMap") && (r.selectedSelectionType = null), S instanceof Kt ? f = S.collectionChanged.addEventListener(
          (O) => {
            h.value = O.name, ee.CURRENT_IMAGE && O.name !== r.selectedDataSourceOptions.obliqueCollectionName && (r.selectedSelectionType = null);
          }
        ) : f == null || f();
      }),
      e.layers.added.addEventListener(() => {
        const S = M.value.find(
          (L) => L.value === ee.OBJECT_SELECTION
        );
        if (S && (S.disabled = b.value !== "CesiumMap"), v()) {
          const L = M.value.findIndex(
            (O) => O.value === ee.OBJECT_SELECTION
          );
          L !== -1 && M.value.splice(L, 1);
        }
      }),
      e.layers.removed.addEventListener(() => {
        const S = M.value.find(
          (L) => L.value === ee.OBJECT_SELECTION
        );
        if (S && (S.disabled = b.value !== "CesiumMap"), v()) {
          const L = M.value.findIndex(
            (O) => O.value === ee.OBJECT_SELECTION
          );
          L !== -1 && M.value.splice(L, 1);
        }
      })
    ];
    Fe(
      () => M.value,
      (S) => {
        S.length === 1 && (r.selectedSelectionType = S[0].value);
      },
      { deep: !0 }
    );
    function m(S) {
      return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(S);
    }
    const y = fe(() => {
      var L, O, D;
      const S = o.termsOfUse ? r.termsConsented : !0;
      if (((L = r.selectedDataSourceOptions) == null ? void 0 : L.type) === J.CITY_MODEL) {
        if (o.allowEmail)
          return S && r.email && m(r.email);
        if (o.allowExportName)
          return S && !!r.exportName;
      } else if (((O = r.selectedDataSourceOptions) == null ? void 0 : O.type) === J.OBLIQUE) {
        if (r.selectedSelectionType === ee.AREA_SELECTION)
          return S && r.selectedResultItems.length > 0;
        if (r.selectedSelectionType === ee.CURRENT_IMAGE)
          return S;
      } else if (((D = r.selectedDataSourceOptions) == null ? void 0 : D.type) === J.GEOJSON)
        return S && r.selectedResultItems.length > 0;
      return !1;
    });
    Fe(
      () => r.selectedSelectionType,
      (S, L) => {
        if (L === ee.AREA_SELECTION) {
          const O = e.layers.getByKey(
            String(ke)
          );
          O == null || O.removeAllFeatures();
        } else L === ee.OBJECT_SELECTION && (r.selectedObjects = []);
        S === ee.CURRENT_IMAGE && (r.highestStep = 1, c.value && c.value.reset());
      }
    );
    async function R(S, L) {
      var D;
      if (await S) {
        const x = ((D = r.selectedDataSourceOptions) == null ? void 0 : D.type) === J.GEOJSON ? L + 1 : L;
        E(x);
      }
    }
    function A() {
      var S, L, O;
      t.resetState(), (S = s.value) == null || S.resetValidation(), (L = c.value) == null || L.resetValidation(), (O = u.value) == null || O.resetValidation();
    }
    function N(S) {
      var L;
      r.selectedDataSourceOptions && A(), (L = t.dataSource) == null || L.clear(), r.selectedDataSourceOptions = S, t.updateDataSource(
        e,
        S,
        i
      ), E(
        0
        /* DATASOURCE */
      );
    }
    async function I() {
      var S, L, O, D;
      if (a.settings && a.exportDestination && a.selectionMode || ((S = r.selectedDataSourceOptions) == null ? void 0 : S.type) === J.GEOJSON && a.exportDestination && a.selectionMode || r.selectedSelectionType === ee.CURRENT_IMAGE && a.selectionMode) {
        let x;
        if (n.value = !0, ((L = r.selectedDataSourceOptions) == null ? void 0 : L.type) === J.CITY_MODEL)
          x = _a(
            o,
            r,
            String(ke),
            e,
            t.additionalParams
          );
        else if (((O = r.selectedDataSourceOptions) == null ? void 0 : O.type) === J.OBLIQUE || ((D = r.selectedDataSourceOptions) == null ? void 0 : D.type) === J.GEOJSON)
          if (i.running = !0, await new Promise((P) => {
            setTimeout(P, 0);
          }), r.selectedSelectionType === ee.CURRENT_IMAGE)
            if (t.dataSource instanceof ct)
              x = Ga(
                e,
                t.dataSource,
                i
              ).catch((P) => {
                e.notifier.add({
                  type: Ae.ERROR,
                  message: String(P),
                  timeout: 5e3
                });
              });
            else
              throw new Error(
                "AbstractDataSource is not instance of ObliqueDataSource"
              );
          else if (r.selectedSelectionType === ee.AREA_SELECTION) {
            const P = t.dataSource.results.flatMap(
              (Y) => r.selectedResultItems.some(
                (oe) => oe.title === Y.title
              ) ? [Y] : []
            );
            i.queue[1] = P.length;
            for (let Y = 0; Y < P.length; Y++)
              i.queue[0] = Y + 1, await P[Y].download().catch((Q) => {
                e.notifier.add({
                  type: Ae.ERROR,
                  message: String(Q),
                  timeout: 5e3
                });
              });
            x = Promise.resolve();
          } else
            throw new Error(
              `Selected SelectionType is not supported for ${r.selectedDataSourceOptions.type} export.`
            );
        else
          x = Promise.reject(new Error("No valid dataSource set."));
        x.then(() => {
          var P;
          ((P = r.selectedDataSourceOptions) == null ? void 0 : P.type) === J.CITY_MODEL && e.notifier.add({
            type: Ae.SUCCESS,
            message: "export.notification.success",
            timeout: 5e3
          });
        }).finally(() => {
          n.value = !1, i.running = !1, i.queue = [1, 1];
        }).catch(() => {
          e.notifier.add({
            type: Ae.ERROR,
            message: "export.notification.error.standard",
            timeout: 5e3
          });
        });
      } else
        e.notifier.add({
          type: Ae.ERROR,
          message: "export.notification.error.validation",
          timeout: 5e3
        });
    }
    go(() => {
      f == null || f(), d.forEach((S) => {
        S();
      });
    });
    const G = le(!1), C = {
      settingsCityModel: {
        name: "resetSettingsCityModel",
        title: "export.resetButtons.settingsCityModel",
        icon: "$vcsReturn",
        callback() {
          const S = JSON.parse(
            JSON.stringify(t.defaultState.settingsCityModel)
          );
          Object.assign(r.settingsCityModel, S);
        }
      },
      objectSelection: {
        name: "resetObjectSelection",
        title: "export.resetButtons.objectSelection",
        icon: "$vcsReturn",
        callback() {
          G.value = !0, r.selectedObjects = [];
        }
      },
      exportDestination: {
        name: "resetExportDestination",
        title: "export.resetButtons.userData",
        icon: "$vcsReturn",
        callback() {
          var S;
          (S = u.value) == null || S.reset();
        }
      }
    }, F = fe(() => {
      var S, L, O, D;
      return ((S = r.selectedDataSourceOptions) == null ? void 0 : S.type) === J.CITY_MODEL && !o.allowEmail && o.allowExportName ? "exportName" : ((L = r.selectedDataSourceOptions) == null ? void 0 : L.type) === J.CITY_MODEL && o.allowEmail ? "exportDestination" : ((O = r.selectedDataSourceOptions) == null ? void 0 : O.type) === J.OBLIQUE ? "selectImages" : ((D = r.selectedDataSourceOptions) == null ? void 0 : D.type) === J.GEOJSON ? "selectFiles" : "";
    }), k = fe(
      () => F.value ? `export.stepTitles.${F.value}` : ""
    ), j = fe(() => F.value === "exportDestination" ? "export.help.email" : F.value === "selectFiles" || F.value === "selectImages" ? "export.help.select" : "");
    return {
      StepOrder: l,
      increaseStep: E,
      requestEnabled: y,
      handleSession: R,
      areaSelectionLayerName: ke,
      pluginConfig: o,
      pluginState: r,
      dataSourceItems: w,
      selectionTypeItems: M,
      SelectionTypes: ee,
      DataSourceOptions: J,
      isValidEmail: m,
      sendRequest: I,
      stepValid: a,
      formSelectionMode: s,
      formSettings: c,
      formExportDestination: u,
      running: n,
      obliqueDownload: i,
      updateDataSource: N,
      resetActions: C,
      isReset: G,
      heading: k,
      help: j,
      geoJsonItem: w.value.find(
        (S) => S.type === J.GEOJSON
      )
    };
  }
}), yc = { key: 0 }, bc = { key: 1 }, wc = { key: 2 }, $c = { class: "px-1" }, Lc = ["href"], Oc = { key: 0 }, Tc = { key: 1 }, Cc = { class: "px-1" }, Rc = { class: "px-1" }, Nc = { key: 0 }, Ac = ["href"], Mc = { class: "d-flex flex-grow-1 flex-row-reverse pa-2" };
function Ic(e, t, r, o, n, i) {
  const l = U("VcsSelect"), a = U("VcsWizardStep"), s = U("SelectionObjects"), c = U("SelectionArea"), u = U("VcsCheckbox"), E = U("v-form"), b = U("SettingsCityModel"), h = U("SettingsOblique"), w = U("VcsTextField"), v = U("VcsTextArea"), M = U("ResultList"), f = U("VcsFormButton"), d = U("VcsWizard"), m = U("v-progress-linear"), y = U("v-chip"), R = U("v-overlay"), A = U("v-sheet");
  return q(), z(A, { class: "pb-2" }, {
    default: g(() => [
      p(d, {
        modelValue: e.pluginState.step,
        "onUpdate:modelValue": t[26] || (t[26] = (N) => e.pluginState.step = N),
        modelModifiers: { number: !0 }
      }, {
        default: g(() => {
          var N, I, G;
          return [
            p(a, {
              modelValue: e.pluginState.step,
              "onUpdate:modelValue": t[0] || (t[0] = (C) => e.pluginState.step = C),
              modelModifiers: { number: !0 },
              step: e.StepOrder.DATASOURCE,
              editable: "",
              complete: !!e.pluginState.selectedDataSourceOptions,
              heading: "export.stepTitles.dataSources"
            }, {
              help: g(() => {
                var C, F;
                return [
                  de("ul", null, [
                    e.dataSourceItems.some(
                      (k) => k.type === e.DataSourceOptions.CITY_MODEL
                    ) ? (q(), ne(
                      "li",
                      yc,
                      B(e.$t("export.dataSources.cityModel")) + ": " + B(e.$t("export.help.dataSources.cityModel")),
                      1
                      /* TEXT */
                    )) : Z("v-if", !0),
                    e.dataSourceItems.some(
                      (k) => k.type === e.DataSourceOptions.OBLIQUE
                    ) ? (q(), ne(
                      "li",
                      bc,
                      B(e.$t("export.dataSources.oblique")) + ": " + B(e.$t("export.help.dataSources.oblique")),
                      1
                      /* TEXT */
                    )) : Z("v-if", !0),
                    e.dataSourceItems.some(
                      (k) => k.type === e.DataSourceOptions.GEOJSON
                    ) ? (q(), ne(
                      "li",
                      wc,
                      B(e.$st((C = e.geoJsonItem) == null ? void 0 : C.title)) + ": " + B(e.$st((F = e.geoJsonItem) == null ? void 0 : F.help)),
                      1
                      /* TEXT */
                    )) : Z("v-if", !0)
                  ])
                ];
              }),
              default: g(() => [
                p(l, {
                  class: "px-1 pb-3",
                  items: e.dataSourceItems,
                  "model-value": e.pluginState.selectedDataSourceOptions,
                  "item-value": (C) => C.obliqueCollectionName ?? C.geojsonUrl ?? C.type,
                  "return-object": "",
                  placeholder: e.$t("export.select"),
                  "onUpdate:modelValue": e.updateDataSource
                }, null, 8, ["items", "model-value", "item-value", "placeholder", "onUpdate:modelValue"])
              ]),
              _: 1
              /* STABLE */
            }, 8, ["modelValue", "step", "complete"]),
            Tt(p(a, {
              modelValue: e.pluginState.step,
              "onUpdate:modelValue": t[8] || (t[8] = (C) => e.pluginState.step = C),
              modelModifiers: { number: !0 },
              step: e.StepOrder.SELECTION_MODE,
              editable: "",
              complete: !!e.pluginState.selectedSelectionType,
              rules: [() => e.stepValid.selectionMode !== !1],
              heading: "export.stepTitles.selectionType",
              "header-actions": e.pluginState.selectedSelectionType === e.SelectionTypes.OBJECT_SELECTION ? [e.resetActions.objectSelection] : []
            }, {
              help: g(() => [
                de("ul", null, [
                  (q(!0), ne(
                    Oe,
                    null,
                    Te(e.selectionTypeItems, (C) => (q(), ne(
                      "li",
                      {
                        key: C.value
                      },
                      B(e.$st("export.selectionTypes." + C.value)) + ": " + B(e.$st("export.help.selectionTypes." + C.value)),
                      1
                      /* TEXT */
                    ))),
                    128
                    /* KEYED_FRAGMENT */
                  ))
                ])
              ]),
              default: g(() => [
                de("div", $c, [
                  p(E, {
                    ref: "formSelectionMode",
                    modelValue: e.stepValid.selectionMode,
                    "onUpdate:modelValue": t[7] || (t[7] = (C) => e.stepValid.selectionMode = C),
                    "lazy-validation": ""
                  }, {
                    default: g(() => [
                      p(l, {
                        modelValue: e.pluginState.selectedSelectionType,
                        "onUpdate:modelValue": t[1] || (t[1] = (C) => e.pluginState.selectedSelectionType = C),
                        items: e.selectionTypeItems,
                        placeholder: e.$t("export.select"),
                        rules: [
                          (C) => !!C || e.$t("export.validation.selectField")
                        ],
                        class: "pb-2"
                      }, null, 8, ["modelValue", "items", "placeholder", "rules"]),
                      e.pluginState.selectedSelectionType === e.SelectionTypes.OBJECT_SELECTION ? (q(), z(s, {
                        key: 0,
                        modelValue: e.pluginState.selectedObjects,
                        "onUpdate:modelValue": t[2] || (t[2] = (C) => e.pluginState.selectedObjects = C),
                        "is-reset": e.isReset,
                        "button-disabled": e.pluginState.selectedObjects.length === 0,
                        "button-show": e.pluginState.highestStep <= e.StepOrder.SELECTION_MODE,
                        onContinue: t[3] || (t[3] = (C) => e.increaseStep(e.StepOrder.SELECTION_MODE))
                      }, null, 8, ["modelValue", "is-reset", "button-disabled", "button-show"])) : e.pluginState.selectedSelectionType === e.SelectionTypes.AREA_SELECTION ? (q(), z(c, {
                        key: 1,
                        onSessionstart: t[4] || (t[4] = (C) => e.handleSession(C, e.StepOrder.SELECTION_MODE))
                      })) : e.pluginState.selectedSelectionType === e.SelectionTypes.CURRENT_IMAGE && e.pluginConfig.termsOfUse ? (q(), z(u, {
                        key: 2,
                        modelValue: e.pluginState.termsConsented,
                        "onUpdate:modelValue": t[6] || (t[6] = (C) => e.pluginState.termsConsented = C),
                        rules: [
                          (C) => !!C || e.$t("export.validation.termsOfUse")
                        ]
                      }, {
                        label: g(() => [
                          X(
                            B(e.$t("export.userData.accept")) + "  ",
                            1
                            /* TEXT */
                          ),
                          de("a", {
                            target: "_blank",
                            href: e.pluginConfig.termsOfUse.toString(),
                            onClick: t[5] || (t[5] = Nr(() => {
                            }, ["stop"]))
                          }, B(e.$t("export.userData.termsOfUse")), 9, Lc)
                        ]),
                        _: 1
                        /* STABLE */
                      }, 8, ["modelValue", "rules"])) : Z("v-if", !0)
                    ]),
                    _: 1
                    /* STABLE */
                  }, 8, ["modelValue"])
                ])
              ]),
              _: 1
              /* STABLE */
            }, 8, ["modelValue", "step", "complete", "rules", "header-actions"]), [
              [Ct, e.pluginState.highestStep >= e.StepOrder.SELECTION_MODE]
            ]),
            Tt(p(a, {
              modelValue: e.pluginState.step,
              "onUpdate:modelValue": t[14] || (t[14] = (C) => e.pluginState.step = C),
              step: e.StepOrder.SETTINGS,
              editable: "",
              complete: e.pluginState.highestStep >= e.StepOrder.SETTINGS,
              rules: [() => !!e.stepValid.settings],
              heading: "export.stepTitles.settings",
              "header-actions": ((N = e.pluginState.selectedDataSourceOptions) == null ? void 0 : N.type) === e.DataSourceOptions.CITY_MODEL ? [e.resetActions.settingsCityModel] : []
            }, {
              help: g(() => {
                var C, F;
                return [
                  ((C = e.pluginState.selectedDataSourceOptions) == null ? void 0 : C.type) === e.DataSourceOptions.OBLIQUE ? (q(), ne(
                    "span",
                    Oc,
                    B(e.$t("export.help.settings.oblique")),
                    1
                    /* TEXT */
                  )) : ((F = e.pluginState.selectedDataSourceOptions) == null ? void 0 : F.type) === e.DataSourceOptions.CITY_MODEL ? (q(), ne(
                    "span",
                    Tc,
                    B(e.$t("export.help.settings.cityModel")),
                    1
                    /* TEXT */
                  )) : Z("v-if", !0)
                ];
              }),
              default: g(() => [
                de("div", Cc, [
                  p(E, {
                    ref: "formSettings",
                    modelValue: e.stepValid.settings,
                    "onUpdate:modelValue": t[13] || (t[13] = (C) => e.stepValid.settings = C),
                    "lazy-validation": ""
                  }, {
                    default: g(() => {
                      var C, F;
                      return [
                        ((C = e.pluginState.selectedDataSourceOptions) == null ? void 0 : C.type) === e.DataSourceOptions.CITY_MODEL ? (q(), z(b, {
                          key: 0,
                          modelValue: e.pluginState.settingsCityModel,
                          "onUpdate:modelValue": t[9] || (t[9] = (k) => e.pluginState.settingsCityModel = k),
                          setup: e.pluginConfig.settingsCityModel,
                          "button-disabled": !e.stepValid.settings,
                          "button-show": e.pluginState.highestStep <= e.StepOrder.SETTINGS,
                          onContinue: t[10] || (t[10] = (k) => e.increaseStep(e.StepOrder.SETTINGS))
                        }, null, 8, ["modelValue", "setup", "button-disabled", "button-show"])) : ((F = e.pluginState.selectedDataSourceOptions) == null ? void 0 : F.type) === e.DataSourceOptions.OBLIQUE && e.pluginState.selectedSelectionType === e.SelectionTypes.AREA_SELECTION ? (q(), z(h, {
                          key: 1,
                          modelValue: e.pluginState.settingsOblique,
                          "onUpdate:modelValue": [
                            t[11] || (t[11] = (k) => e.pluginState.settingsOblique = k),
                            t[12] || (t[12] = (k) => e.increaseStep(e.StepOrder.SETTINGS))
                          ]
                        }, null, 8, ["modelValue"])) : Z("v-if", !0)
                      ];
                    }),
                    _: 1
                    /* STABLE */
                  }, 8, ["modelValue"])
                ])
              ]),
              _: 1
              /* STABLE */
            }, 8, ["modelValue", "step", "complete", "rules", "header-actions"]), [
              [
                Ct,
                e.pluginState.highestStep >= e.StepOrder.SETTINGS && ((I = e.pluginState.selectedDataSourceOptions) == null ? void 0 : I.type) !== e.DataSourceOptions.GEOJSON
              ]
            ]),
            Tt(p(a, {
              modelValue: e.pluginState.step,
              "onUpdate:modelValue": t[23] || (t[23] = (C) => e.pluginState.step = C),
              step: e.StepOrder.EXPORT_DESTINATION,
              editable: "",
              complete: e.pluginState.highestStep >= e.StepOrder.EXPORT_DESTINATION,
              rules: [() => e.stepValid.exportDestination !== !1],
              "header-actions": ((G = e.pluginState.selectedDataSourceOptions) == null ? void 0 : G.type) === e.DataSourceOptions.CITY_MODEL ? [e.resetActions.exportDestination] : [],
              heading: e.$st(e.heading)
            }, ri({
              default: g(() => [
                de("div", Rc, [
                  p(E, {
                    ref: "formExportDestination",
                    modelValue: e.stepValid.exportDestination,
                    "onUpdate:modelValue": t[22] || (t[22] = (C) => e.stepValid.exportDestination = C),
                    "lazy-validation": ""
                  }, {
                    default: g(() => {
                      var C, F, k;
                      return [
                        ((C = e.pluginState.selectedDataSourceOptions) == null ? void 0 : C.type) === e.DataSourceOptions.CITY_MODEL ? (q(), ne("div", Nc, [
                          e.pluginConfig.allowEmail ? (q(), z(w, {
                            key: 0,
                            modelValue: e.pluginState.email,
                            "onUpdate:modelValue": t[15] || (t[15] = (j) => e.pluginState.email = j),
                            label: void 0,
                            placeholder: e.$t("export.userData.email"),
                            rules: [
                              (j) => e.isValidEmail(j) || e.$t("export.validation.provideEmail")
                            ]
                          }, null, 8, ["modelValue", "placeholder", "rules"])) : Z("v-if", !0),
                          e.pluginConfig.allowExportName ? (q(), z(w, {
                            key: 1,
                            modelValue: e.pluginState.exportName,
                            "onUpdate:modelValue": t[16] || (t[16] = (j) => e.pluginState.exportName = j),
                            label: void 0,
                            placeholder: e.$t("export.userData.exportName"),
                            rules: [
                              (j) => e.pluginConfig.allowEmail || j.length > 0 || e.$t("components.validation.required")
                            ]
                          }, null, 8, ["modelValue", "placeholder", "rules"])) : Z("v-if", !0),
                          e.pluginConfig.allowDescription ? (q(), z(v, {
                            key: 2,
                            modelValue: e.pluginState.description,
                            "onUpdate:modelValue": t[17] || (t[17] = (j) => e.pluginState.description = j),
                            placeholder: e.$t("export.userData.description"),
                            class: "pb-2",
                            rows: "2"
                          }, null, 8, ["modelValue", "placeholder"])) : Z("v-if", !0)
                        ])) : ((F = e.pluginState.selectedDataSourceOptions) == null ? void 0 : F.type) === e.DataSourceOptions.OBLIQUE || ((k = e.pluginState.selectedDataSourceOptions) == null ? void 0 : k.type) === e.DataSourceOptions.GEOJSON ? (q(), z(M, {
                          key: 1,
                          modelValue: e.pluginState.selectedResultItems,
                          "onUpdate:modelValue": t[18] || (t[18] = (j) => e.pluginState.selectedResultItems = j),
                          "selection-layer-name": e.areaSelectionLayerName,
                          "selected-data-source-options": e.pluginState.selectedDataSourceOptions,
                          active: e.pluginState.step === e.StepOrder.EXPORT_DESTINATION,
                          "max-selection-area": e.pluginConfig.maxSelectionArea,
                          onInvalidArea: t[19] || (t[19] = (j) => e.pluginState.step = e.StepOrder.SELECTION_MODE)
                        }, null, 8, ["modelValue", "selection-layer-name", "selected-data-source-options", "active", "max-selection-area"])) : Z("v-if", !0),
                        e.pluginConfig.termsOfUse ? (q(), z(u, {
                          key: 2,
                          modelValue: e.pluginState.termsConsented,
                          "onUpdate:modelValue": t[21] || (t[21] = (j) => e.pluginState.termsConsented = j),
                          rules: [
                            (j) => !!j || e.$t("export.validation.termsOfUse")
                          ]
                        }, {
                          label: g(() => [
                            X(
                              B(e.$t("export.userData.accept")) + "  ",
                              1
                              /* TEXT */
                            ),
                            de("a", {
                              target: "_blank",
                              href: e.pluginConfig.termsOfUse.toString(),
                              onClick: t[20] || (t[20] = Nr(() => {
                              }, ["stop"]))
                            }, B(e.$t("export.userData.termsOfUse")), 9, Ac)
                          ]),
                          _: 1
                          /* STABLE */
                        }, 8, ["modelValue", "rules"])) : Z("v-if", !0)
                      ];
                    }),
                    _: 1
                    /* STABLE */
                  }, 8, ["modelValue"])
                ])
              ]),
              _: 2
              /* DYNAMIC */
            }, [
              e.help ? {
                name: "help",
                fn: g(() => [
                  X(
                    B(e.$t(e.help)),
                    1
                    /* TEXT */
                  )
                ]),
                key: "0"
              } : void 0
            ]), 1032, ["modelValue", "step", "complete", "rules", "header-actions", "heading"]), [
              [Ct, e.pluginState.highestStep >= e.StepOrder.EXPORT_DESTINATION]
            ]),
            p(a, {
              modelValue: e.pluginState.step,
              "onUpdate:modelValue": t[25] || (t[25] = (C) => e.pluginState.step = C),
              step: e.StepOrder.SEND_REQUEST,
              complete: e.pluginState.step > e.StepOrder.SEND_REQUEST,
              editable: e.requestEnabled && !e.running
            }, {
              title: g(() => [
                de("div", Mc, [
                  p(f, {
                    variant: "filled",
                    disabled: !e.requestEnabled || e.running,
                    loading: e.running,
                    onClick: t[24] || (t[24] = (C) => e.sendRequest())
                  }, {
                    default: g(() => [
                      X(
                        B(e.$t("export.sendRequest")),
                        1
                        /* TEXT */
                      )
                    ]),
                    _: 1
                    /* STABLE */
                  }, 8, ["disabled", "loading"])
                ])
              ]),
              _: 1
              /* STABLE */
            }, 8, ["modelValue", "step", "complete", "editable"])
          ];
        }),
        _: 1
        /* STABLE */
      }, 8, ["modelValue"]),
      p(R, {
        modelValue: e.obliqueDownload.running,
        "onUpdate:modelValue": t[28] || (t[28] = (N) => e.obliqueDownload.running = N),
        contained: "",
        opacity: "0.8",
        class: "d-flex justify-center align-center"
      }, {
        default: g(() => [
          p(m, {
            modelValue: e.obliqueDownload.progress,
            "onUpdate:modelValue": t[27] || (t[27] = (N) => e.obliqueDownload.progress = N),
            height: "20",
            style: { width: "200px" },
            color: "base-lighten-2"
          }, {
            default: g(() => [
              de(
                "strong",
                null,
                B(e.obliqueDownload.progress) + " %",
                1
                /* TEXT */
              )
            ]),
            _: 1
            /* STABLE */
          }, 8, ["modelValue"]),
          p(y, { color: "base-lighten-2" }, {
            default: g(() => [
              X(
                B(e.obliqueDownload.queue[0]) + " / " + B(e.obliqueDownload.queue[1]),
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
      }, 8, ["modelValue"])
    ]),
    _: 1
    /* STABLE */
  });
}
const Dc = /* @__PURE__ */ De(vc, [["render", Ic]]), nt = () => {
  const e = Zt();
  return {
    exportFormatList: [
      "2D Shape",
      "3D Shape - PolygonZ",
      "3D Shape - Multipatch",
      "ESRI FGDB",
      "KMZ",
      "CityGML",
      "CityJSON",
      "DXF",
      "DWG",
      "3DS",
      "SketchUp",
      "OBJ",
      "VRML",
      "COLLADA",
      "GLTF",
      "3DPDF",
      "FMEAR",
      "STL",
      "STEP",
      "GEOPACKAGE",
      "FBX"
    ],
    exportFormatDefault: ["CityGML"],
    lodList: ["LoD1", "LoD2", "LoD3", "haLoD"],
    lodDefault: "haLoD",
    thematicClassList: [
      "26",
      "7",
      "14",
      "5",
      "21",
      "85",
      "64",
      "45",
      "43",
      "46",
      "8",
      "9",
      "4",
      "44"
    ],
    thematicClassDefault: ["26"],
    dataSourceOptionsList: [],
    appearanceThemeList: ["rgbTexture"],
    appearanceThemeDefault: "rgbTexture",
    heightModeDefault: rr.ABSOLUTE,
    allowHeightMode: !0,
    allowTextureExport: !0,
    allowAddGenericAttrs: !0,
    allowTiledExport: !0,
    allowTerrainExport: !0,
    termsOfUse: null,
    terrainAppearanceOptions: {},
    terrainUrl: null,
    terrainZoomLevel: -1,
    crs: e.epsg,
    allowDescription: !0,
    dataProjection: e.toJSON(),
    exportScene: !0,
    maxSelectionArea: 2e6,
    allowEmail: !0,
    allowExportName: !1
  };
}, xe = {
  cityModel: { type: J.CITY_MODEL },
  oblique: {
    type: J.OBLIQUE,
    obliqueCollectionName: void 0,
    // XXX get first oblique collections name from VcsApp?
    fileExtension: "jpg",
    dedicatedSource: !1,
    resolution: void 0,
    baseUrl: void 0
  },
  geojson: {
    type: J.GEOJSON,
    geojsonUrl: void 0,
    baseUrl: void 0,
    title: ""
  }
}, Pc = Ie({
  name: "ExportConfigEditor",
  components: {
    VContainer: mt,
    VRow: ht,
    VCol: gt,
    AbstractConfigEditor: wn,
    VcsFormSection: $n,
    VcsLabel: Jt,
    VcsSelect: dt,
    VcsTextField: io,
    VcsCheckbox: Ht,
    VcsChipArrayInput: Ln,
    VcsProjection: On
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
    var b;
    const t = le({
      cityModel: {
        isSelected: !1,
        properties: { ...xe.cityModel }
      },
      oblique: {
        isSelected: !1,
        properties: { ...xe.oblique }
      },
      geojson: {
        isSelected: !1,
        properties: { ...xe.geojson }
      }
    }), r = le(void 0), o = nt(), n = le({
      ...structuredClone(o),
      ...e.getConfig()
    });
    n.value.dataSourceOptionsList.forEach((h) => {
      t.value[h.type].isSelected || (t.value[h.type].isSelected = !0, t.value[h.type].properties = {
        ...xe[h.type],
        ...h
      });
    });
    const i = [
      {
        value: "absolute",
        title: "export.settingsCityModel.absolute"
      },
      {
        value: "ellipsoid",
        title: "export.settingsCityModel.ellipsoid"
      }
    ];
    function l(h) {
      t.value[h].properties = {
        ...xe[h]
      };
    }
    const a = le(), s = le(
      e.getConfig().dataProjection && ((b = e.getConfig().dataProjection) == null ? void 0 : b.epsg) !== Zt().epsg
    );
    function c(h, w) {
      return fe({
        get() {
          return n.value[h] !== null;
        },
        set(v) {
          v ? (n.value[h] = o[h] || "", w && w()) : (n.value[h] = null, w && w());
        }
      });
    }
    function u(h, w, v) {
      v.includes(n.value[h]) || (n.value[h] = w ? [v[0]] : v[0]);
    }
    const E = () => {
      n.value.crs.length === 1 && (n.value.crs = n.value.crs[0]), s.value || delete n.value.dataProjection, n.value.dataSourceOptionsList = Object.keys(t.value).filter((h) => {
        var w;
        return (w = t.value[h]) == null ? void 0 : w.isSelected;
      }).map((h) => {
        const w = Ar(t.value[h].properties), v = { type: h };
        return Object.keys(w).forEach((M) => {
          w[M] && w[M] !== xe[h][M] && (v[M] = w[M]);
        }), v;
      }), e.setConfig(structuredClone(Ar(n.value)));
    };
    return Fe(
      t,
      (h) => {
        Object.values(h).some((w) => w.isSelected) ? r.value = void 0 : r.value = "export.editor.dataSourceRequired";
      },
      { deep: !0 }
    ), {
      generalTermsOfUseUrl: a,
      localConfig: n,
      dataSourceList: t,
      resetDataSourceOption: l,
      DataSourceOptions: J,
      defaultOptions: o,
      hasTermsOfUse: c("termsOfUse", () => {
        var h, w, v;
        (v = (w = (h = a.value) == null ? void 0 : h.$refs) == null ? void 0 : w.textFieldRef) == null || v.validate();
      }),
      hasTerrainUrl: c("terrainUrl"),
      mapThematicClasses: Oo,
      heightModeItems: i,
      hasDataProjection: s,
      updateDefault: u,
      predefinedCrs: fe({
        get() {
          return Array.isArray(n.value.crs) ? n.value.crs : [n.value.crs];
        },
        set(h) {
          h.length > 1 ? n.value.crs = h : h.length === 1 && (n.value.crs = h[0]);
        }
      }),
      apply: E,
      errorMessageDataSource: r
    };
  }
});
function Vc(e, t, r, o, n, i) {
  const l = U("VcsCheckbox"), a = U("v-col"), s = U("VcsTextField"), c = U("v-row"), u = U("VcsLabel"), E = U("v-container"), b = U("VcsFormSection"), h = U("VcsSelect"), w = U("VcsChipArrayInput"), v = U("VcsProjection"), M = U("AbstractConfigEditor");
  return e.localConfig ? (q(), z(M, oi({ key: 0 }, { ...e.$attrs, ...e.$props }, { onSubmit: e.apply }), {
    default: g(() => [
      p(b, {
        heading: "export.editor.general",
        expandable: "",
        "start-open": !0
      }, {
        default: g(() => [
          p(E, { class: "py-0 px-1" }, {
            default: g(() => [
              p(c, { "no-gutters": "" }, {
                default: g(() => [
                  p(a, { cols: "6" }, {
                    default: g(() => [
                      p(l, {
                        id: "general-has-terms-of-use",
                        modelValue: e.hasTermsOfUse,
                        "onUpdate:modelValue": t[0] || (t[0] = (f) => e.hasTermsOfUse = f),
                        label: "export.editor.termsOfUse"
                      }, null, 8, ["modelValue"])
                    ]),
                    _: 1
                    /* STABLE */
                  }),
                  p(a, null, {
                    default: g(() => [
                      p(s, {
                        id: "general-terms-of-use-url",
                        ref: "generalTermsOfUseUrl",
                        modelValue: e.localConfig.termsOfUse,
                        "onUpdate:modelValue": t[1] || (t[1] = (f) => e.localConfig.termsOfUse = f),
                        clearable: "",
                        placeholder: "https://linktoprivacy",
                        disabled: !e.hasTermsOfUse,
                        rules: [
                          (f) => !e.hasTermsOfUse || !!f || "components.validation.required"
                        ]
                      }, null, 8, ["modelValue", "disabled", "rules"])
                    ]),
                    _: 1
                    /* STABLE */
                  })
                ]),
                _: 1
                /* STABLE */
              }),
              p(c, { "no-gutters": "" }, {
                default: g(() => [
                  p(a, null, {
                    default: g(() => [
                      p(l, {
                        id: "general-allow-email",
                        modelValue: e.localConfig.allowEmail,
                        "onUpdate:modelValue": t[2] || (t[2] = (f) => e.localConfig.allowEmail = f),
                        label: "export.editor.email",
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
              p(c, { "no-gutters": "" }, {
                default: g(() => [
                  p(a, null, {
                    default: g(() => [
                      p(l, {
                        id: "general-allow-description",
                        modelValue: e.localConfig.allowDescription,
                        "onUpdate:modelValue": t[3] || (t[3] = (f) => e.localConfig.allowDescription = f),
                        label: "export.editor.allowDescription",
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
              p(c, { "no-gutters": "" }, {
                default: g(() => [
                  p(a, null, {
                    default: g(() => [
                      p(u, {
                        "html-for": "general-max-selection-area",
                        required: ""
                      }, {
                        default: g(() => [
                          X(
                            B(e.$t("export.editor.maxSelectionArea")),
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
                  p(a, { cols: "3" }, {
                    default: g(() => [
                      p(s, {
                        id: "general-max-selection-area",
                        modelValue: e.localConfig.maxSelectionArea,
                        "onUpdate:modelValue": t[4] || (t[4] = (f) => e.localConfig.maxSelectionArea = f),
                        modelModifiers: { number: !0 },
                        clearable: "",
                        type: "number",
                        unit: "m²",
                        min: 0,
                        rules: [
                          (f) => !!f || "components.validation.required",
                          (f) => f > 0 || "export.validation.negative"
                        ]
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
      p(b, {
        heading: "export.editor.dataSources",
        expandable: "",
        "start-open": !0
      }, {
        default: g(() => [
          p(E, { class: "py-0 px-1" }, {
            default: g(() => [
              p(c, { "no-gutters": "" }, {
                default: g(() => [
                  p(a, { cols: "6" }, {
                    default: g(() => [
                      p(l, {
                        id: "data-source-city-model",
                        modelValue: e.dataSourceList.cityModel.isSelected,
                        "onUpdate:modelValue": t[5] || (t[5] = (f) => e.dataSourceList.cityModel.isSelected = f),
                        label: "export.dataSources.cityModel",
                        "error-messages": e.errorMessageDataSource,
                        onChange: t[6] || (t[6] = (f) => f || e.resetDataSourceOption(e.DataSourceOptions.CITY_MODEL))
                      }, null, 8, ["modelValue", "error-messages"])
                    ]),
                    _: 1
                    /* STABLE */
                  })
                ]),
                _: 1
                /* STABLE */
              }),
              p(c, { "no-gutters": "" }, {
                default: g(() => [
                  p(a, null, {
                    default: g(() => [
                      p(l, {
                        id: "data-source-oblique",
                        modelValue: e.dataSourceList.oblique.isSelected,
                        "onUpdate:modelValue": t[7] || (t[7] = (f) => e.dataSourceList.oblique.isSelected = f),
                        label: "export.dataSources.oblique",
                        "error-messages": e.errorMessageDataSource,
                        onChange: t[8] || (t[8] = (f) => f || e.resetDataSourceOption(e.DataSourceOptions.OBLIQUE))
                      }, null, 8, ["modelValue", "error-messages"])
                    ]),
                    _: 1
                    /* STABLE */
                  }),
                  e.dataSourceList.oblique.isSelected ? (q(), z(a, { key: 0 }, {
                    default: g(() => [
                      p(c, { "no-gutters": "" }, {
                        default: g(() => [
                          p(a, null, {
                            default: g(() => [
                              p(u, {
                                "html-for": "data-source-oblique-name",
                                required: e.dataSourceList.oblique.isSelected,
                                disabled: !e.dataSourceList.oblique.isSelected
                              }, {
                                default: g(() => [
                                  X(
                                    B(e.$t("export.editor.obliqueName")),
                                    1
                                    /* TEXT */
                                  )
                                ]),
                                _: 1
                                /* STABLE */
                              }, 8, ["required", "disabled"])
                            ]),
                            _: 1
                            /* STABLE */
                          }),
                          p(a, null, {
                            default: g(() => [
                              p(s, {
                                id: "data-source-oblique-name",
                                modelValue: e.dataSourceList.oblique.properties.obliqueCollectionName,
                                "onUpdate:modelValue": t[9] || (t[9] = (f) => e.dataSourceList.oblique.properties.obliqueCollectionName = f),
                                disabled: !e.dataSourceList.oblique.isSelected,
                                rules: e.dataSourceList.oblique.isSelected ? [(f) => !!f || "components.validation.required"] : [],
                                placeholder: "ObliqueCollection"
                              }, null, 8, ["modelValue", "disabled", "rules"])
                            ]),
                            _: 1
                            /* STABLE */
                          })
                        ]),
                        _: 1
                        /* STABLE */
                      }),
                      p(c, { "no-gutters": "" }, {
                        default: g(() => [
                          p(a, null, {
                            default: g(() => [
                              p(u, {
                                "html-for": "data-source-oblique-file-extension",
                                disabled: !e.dataSourceList.oblique.isSelected
                              }, {
                                default: g(() => [
                                  X(
                                    B(e.$t("export.editor.fileExtension")),
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
                          }),
                          p(a, null, {
                            default: g(() => [
                              p(s, {
                                id: "data-source-oblique-file-extension",
                                modelValue: e.dataSourceList.oblique.properties.fileExtension,
                                "onUpdate:modelValue": t[10] || (t[10] = (f) => e.dataSourceList.oblique.properties.fileExtension = f),
                                disabled: !e.dataSourceList.oblique.isSelected,
                                placeholder: "jpg"
                              }, null, 8, ["modelValue", "disabled"])
                            ]),
                            _: 1
                            /* STABLE */
                          })
                        ]),
                        _: 1
                        /* STABLE */
                      }),
                      p(c, { "no-gutters": "" }, {
                        default: g(() => [
                          p(a, null, {
                            default: g(() => [
                              p(u, {
                                "html-for": "data-source-oblique-resolution",
                                disabled: !e.dataSourceList.oblique.isSelected
                              }, {
                                default: g(() => [
                                  X(
                                    B(e.$t("export.editor.resolution")),
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
                          }),
                          p(a, null, {
                            default: g(() => [
                              p(s, {
                                id: "data-source-oblique-resolution",
                                modelValue: e.dataSourceList.oblique.properties.resolution,
                                "onUpdate:modelValue": t[11] || (t[11] = (f) => e.dataSourceList.oblique.properties.resolution = f),
                                modelModifiers: { number: !0 },
                                type: "number",
                                min: 0,
                                disabled: !e.dataSourceList.oblique.isSelected,
                                placeholder: "1",
                                rules: [
                                  (f) => f == null || f.toString() === "" || f > 0 || "export.validation.negative"
                                ]
                              }, null, 8, ["modelValue", "disabled", "rules"])
                            ]),
                            _: 1
                            /* STABLE */
                          })
                        ]),
                        _: 1
                        /* STABLE */
                      }),
                      p(c, { "no-gutters": "" }, {
                        default: g(() => [
                          p(a, null, {
                            default: g(() => [
                              p(l, {
                                id: "data-source-oblique-dedicated",
                                modelValue: e.dataSourceList.oblique.properties.dedicatedSource,
                                "onUpdate:modelValue": t[12] || (t[12] = (f) => e.dataSourceList.oblique.properties.dedicatedSource = f),
                                label: "export.editor.dedicatedSource",
                                disabled: !e.dataSourceList.oblique.isSelected
                              }, null, 8, ["modelValue", "disabled"])
                            ]),
                            _: 1
                            /* STABLE */
                          })
                        ]),
                        _: 1
                        /* STABLE */
                      }),
                      e.dataSourceList.oblique.properties.dedicatedSource ? (q(), z(c, {
                        key: 0,
                        "no-gutters": ""
                      }, {
                        default: g(() => [
                          p(a, null, {
                            default: g(() => [
                              p(u, {
                                "html-for": "data-source-oblique-base-url",
                                required: ""
                              }, {
                                default: g(() => [
                                  X(
                                    B(e.$t("export.editor.baseUrl")),
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
                          p(a, null, {
                            default: g(() => [
                              p(s, {
                                id: "data-source-oblique-base-url",
                                modelValue: e.dataSourceList.oblique.properties.baseUrl,
                                "onUpdate:modelValue": t[13] || (t[13] = (f) => e.dataSourceList.oblique.properties.baseUrl = f),
                                clearable: "",
                                rules: [
                                  (f) => !!f || "components.validation.required"
                                ],
                                placeholder: e.$t("export.editor.placeholder.baseUrl")
                              }, null, 8, ["modelValue", "rules", "placeholder"])
                            ]),
                            _: 1
                            /* STABLE */
                          })
                        ]),
                        _: 1
                        /* STABLE */
                      })) : Z("v-if", !0)
                    ]),
                    _: 1
                    /* STABLE */
                  })) : Z("v-if", !0)
                ]),
                _: 1
                /* STABLE */
              }),
              p(c, { "no-gutters": "" }, {
                default: g(() => [
                  p(a, { cols: "6" }, {
                    default: g(() => [
                      p(l, {
                        id: "data-source-geojson",
                        modelValue: e.dataSourceList.geojson.isSelected,
                        "onUpdate:modelValue": t[14] || (t[14] = (f) => e.dataSourceList.geojson.isSelected = f),
                        label: "export.dataSources.geojson",
                        "error-messages": e.errorMessageDataSource,
                        onChange: t[15] || (t[15] = (f) => f || e.resetDataSourceOption(e.DataSourceOptions.GEOJSON))
                      }, null, 8, ["modelValue", "error-messages"])
                    ]),
                    _: 1
                    /* STABLE */
                  }),
                  e.dataSourceList.geojson.isSelected ? (q(), z(a, { key: 0 }, {
                    default: g(() => [
                      p(c, { "no-gutters": "" }, {
                        default: g(() => [
                          p(a, null, {
                            default: g(() => [
                              p(u, {
                                "html-for": "data-source-geojson-title",
                                required: e.dataSourceList.geojson.isSelected
                              }, {
                                default: g(() => [
                                  X(
                                    B(e.$t("export.editor.title")),
                                    1
                                    /* TEXT */
                                  )
                                ]),
                                _: 1
                                /* STABLE */
                              }, 8, ["required"])
                            ]),
                            _: 1
                            /* STABLE */
                          }),
                          p(a, null, {
                            default: g(() => [
                              p(s, {
                                id: "data-source-geojson-title",
                                modelValue: e.dataSourceList.geojson.properties.title,
                                "onUpdate:modelValue": t[16] || (t[16] = (f) => e.dataSourceList.geojson.properties.title = f),
                                disabled: !e.dataSourceList.geojson.isSelected,
                                rules: e.dataSourceList.geojson.isSelected ? [(f) => !!f || "components.validation.required"] : [],
                                placeholder: e.$t("export.editor.title")
                              }, null, 8, ["modelValue", "disabled", "rules", "placeholder"])
                            ]),
                            _: 1
                            /* STABLE */
                          })
                        ]),
                        _: 1
                        /* STABLE */
                      }),
                      p(c, { "no-gutters": "" }, {
                        default: g(() => [
                          p(a, null, {
                            default: g(() => [
                              p(u, {
                                "html-for": "data-source-geojson-url",
                                required: e.dataSourceList.geojson.isSelected
                              }, {
                                default: g(() => [
                                  X(
                                    B(e.$t("export.editor.geojsonUrl")),
                                    1
                                    /* TEXT */
                                  )
                                ]),
                                _: 1
                                /* STABLE */
                              }, 8, ["required"])
                            ]),
                            _: 1
                            /* STABLE */
                          }),
                          p(a, null, {
                            default: g(() => [
                              p(s, {
                                id: "data-source-geojson-url",
                                modelValue: e.dataSourceList.geojson.properties.geojsonUrl,
                                "onUpdate:modelValue": t[17] || (t[17] = (f) => e.dataSourceList.geojson.properties.geojsonUrl = f),
                                disabled: !e.dataSourceList.geojson.isSelected,
                                rules: e.dataSourceList.geojson.isSelected ? [(f) => !!f || "components.validation.required"] : [],
                                placeholder: e.$t("export.editor.placeholder.geojsonUrl")
                              }, null, 8, ["modelValue", "disabled", "rules", "placeholder"])
                            ]),
                            _: 1
                            /* STABLE */
                          })
                        ]),
                        _: 1
                        /* STABLE */
                      }),
                      p(c, { "no-gutters": "" }, {
                        default: g(() => [
                          p(a, null, {
                            default: g(() => [
                              p(u, {
                                "html-for": "data-source-geojson-base-url",
                                required: e.dataSourceList.geojson.isSelected
                              }, {
                                default: g(() => [
                                  X(
                                    B(e.$t("export.editor.baseUrl")),
                                    1
                                    /* TEXT */
                                  )
                                ]),
                                _: 1
                                /* STABLE */
                              }, 8, ["required"])
                            ]),
                            _: 1
                            /* STABLE */
                          }),
                          p(a, null, {
                            default: g(() => [
                              p(s, {
                                id: "data-source-geojson-base-url",
                                modelValue: e.dataSourceList.geojson.properties.baseUrl,
                                "onUpdate:modelValue": t[18] || (t[18] = (f) => e.dataSourceList.geojson.properties.baseUrl = f),
                                disabled: !e.dataSourceList.geojson.isSelected,
                                rules: e.dataSourceList.geojson.isSelected ? [(f) => !!f || "components.validation.required"] : [],
                                placeholder: e.$t("export.editor.placeholder.baseUrl")
                              }, null, 8, ["modelValue", "disabled", "rules", "placeholder"])
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
                  })) : Z("v-if", !0)
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
      e.dataSourceList.cityModel.isSelected ? (q(), z(b, {
        key: 0,
        heading: "export.editor.cityModelSettings",
        expandable: "",
        "start-open": !0
      }, {
        default: g(() => [
          p(E, { class: "py-0 px-1" }, {
            default: g(() => [
              p(c, { "no-gutters": "" }, {
                default: g(() => [
                  p(a, null, {
                    default: g(() => [
                      p(u, { "html-for": "settings-fmeSecurityToken" }, {
                        default: g(() => [
                          X(
                            B(e.$st("export.editor.fmeSecurityToken")),
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
                  p(a, null, {
                    default: g(() => [
                      p(s, {
                        id: "settings-fmeSecurityToken",
                        modelValue: e.localConfig.fmeSecurityToken,
                        "onUpdate:modelValue": t[19] || (t[19] = (f) => e.localConfig.fmeSecurityToken = f),
                        placeholder: e.$st("export.editor.fmeSecurityToken")
                      }, null, 8, ["modelValue", "placeholder"])
                    ]),
                    _: 1
                    /* STABLE */
                  })
                ]),
                _: 1
                /* STABLE */
              }),
              p(c, { "no-gutters": "" }, {
                default: g(() => [
                  p(a, null, {
                    default: g(() => [
                      p(u, {
                        "html-for": "settings-fmeServerUrl",
                        required: ""
                      }, {
                        default: g(() => [
                          X(
                            B(e.$st("export.editor.fmeServerUrl")),
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
                  p(a, null, {
                    default: g(() => [
                      p(s, {
                        id: "settings-fmeServerUrl",
                        modelValue: e.localConfig.fmeServerUrl,
                        "onUpdate:modelValue": t[20] || (t[20] = (f) => e.localConfig.fmeServerUrl = f),
                        rules: [(f) => !!f || "components.validation.required"],
                        placeholder: e.$st("export.editor.fmeServerUrl")
                      }, null, 8, ["modelValue", "rules", "placeholder"])
                    ]),
                    _: 1
                    /* STABLE */
                  })
                ]),
                _: 1
                /* STABLE */
              }),
              (q(), ne(
                Oe,
                null,
                Te(["exportFormat", "lod", "thematicClass"], (f) => de("div", { key: f }, [
                  p(
                    c,
                    { "no-gutters": "" },
                    {
                      default: g(() => [
                        p(
                          a,
                          { cols: "6" },
                          {
                            default: g(() => [
                              p(u, {
                                "html-for": `settings-${f}-list`,
                                required: ""
                              }, {
                                default: g(() => [
                                  X(
                                    B(e.$st(`export.editor.${f}List`)),
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
                        p(
                          a,
                          { cols: "2" },
                          {
                            default: g(() => [
                              p(h, {
                                id: `settings-${f}-list`,
                                modelValue: e.localConfig[`${f}List`],
                                "onUpdate:modelValue": [
                                  (d) => e.localConfig[`${f}List`] = d,
                                  (d) => e.updateDefault(
                                    `${f}Default`,
                                    f !== "lod",
                                    d
                                  )
                                ],
                                multiple: "",
                                items: f === "thematicClass" ? e.mapThematicClasses(e.defaultOptions.thematicClassList) : e.defaultOptions[`${f}List`],
                                rules: [
                                  (d) => !!d.length || "components.validation.required"
                                ]
                              }, null, 8, ["id", "modelValue", "onUpdate:modelValue", "items", "rules"])
                            ]),
                            _: 2
                            /* DYNAMIC */
                          },
                          1024
                          /* DYNAMIC_SLOTS */
                        ),
                        p(
                          a,
                          { cols: "2" },
                          {
                            default: g(() => [
                              p(u, {
                                "html-for": `settings-${f}-default`
                              }, {
                                default: g(() => [
                                  X(
                                    B(e.$t("export.editor.default")),
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
                        p(
                          a,
                          { cols: "2" },
                          {
                            default: g(() => [
                              p(h, {
                                id: `settings-${f}-default`,
                                modelValue: e.localConfig[`${f}Default`],
                                "onUpdate:modelValue": (d) => e.localConfig[`${f}Default`] = d,
                                multiple: f !== "lod",
                                items: f === "thematicClass" ? e.mapThematicClasses(e.localConfig.thematicClassList) : e.localConfig[`${f}List`]
                              }, null, 8, ["id", "modelValue", "onUpdate:modelValue", "multiple", "items"])
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
                ])),
                64
                /* STABLE_FRAGMENT */
              )),
              p(c, { "no-gutters": "" }, {
                default: g(() => [
                  p(a, { cols: "6" }, {
                    default: g(() => [
                      p(u, { "html-for": "settings-appearance-theme-list" }, {
                        default: g(() => [
                          X(
                            B(e.$t("export.settingsCityModel.appearanceTheme")),
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
                  p(a, null, {
                    default: g(() => [
                      p(w, {
                        id: "settings-appearance-theme-list",
                        modelValue: e.localConfig.appearanceThemeList,
                        "onUpdate:modelValue": [
                          t[21] || (t[21] = (f) => e.localConfig.appearanceThemeList = f),
                          t[22] || (t[22] = (f) => e.updateDefault("appearanceThemeDefault", !1, f))
                        ],
                        column: "",
                        placeholder: "rgbTexture",
                        "input-width": 100
                      }, null, 8, ["modelValue"])
                    ]),
                    _: 1
                    /* STABLE */
                  })
                ]),
                _: 1
                /* STABLE */
              }),
              p(c, { "no-gutters": "" }, {
                default: g(() => [
                  p(a, null, {
                    default: g(() => [
                      p(u, {
                        "html-for": "settings-appearance-theme-default",
                        required: ""
                      }, {
                        default: g(() => [
                          X(
                            B(e.$t("export.editor.appearanceThemeDefault")),
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
                  p(a, null, {
                    default: g(() => [
                      p(h, {
                        id: "settings-appearance-theme-default",
                        modelValue: e.localConfig.appearanceThemeDefault,
                        "onUpdate:modelValue": t[23] || (t[23] = (f) => e.localConfig.appearanceThemeDefault = f),
                        items: e.localConfig.appearanceThemeList,
                        rules: [(f) => !!f || "components.validation.required"]
                      }, null, 8, ["modelValue", "items", "rules"])
                    ]),
                    _: 1
                    /* STABLE */
                  })
                ]),
                _: 1
                /* STABLE */
              }),
              p(c, { "no-gutters": "" }, {
                default: g(() => [
                  p(a, { cols: "6" }, {
                    default: g(() => [
                      p(u, {
                        "html-for": "settings-predefined-crs",
                        required: ""
                      }, {
                        default: g(() => [
                          X(
                            B(e.$t("export.editor.crsPredefined")),
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
                  p(a, { cols: "6" }, {
                    default: g(() => [
                      p(w, {
                        id: "settings-predefined-crs",
                        modelValue: e.predefinedCrs,
                        "onUpdate:modelValue": t[24] || (t[24] = (f) => e.predefinedCrs = f),
                        "input-width": 100,
                        column: !0,
                        rules: [!!e.predefinedCrs || "components.validation.required"]
                      }, null, 8, ["modelValue", "rules"])
                    ]),
                    _: 1
                    /* STABLE */
                  })
                ]),
                _: 1
                /* STABLE */
              }),
              p(c, { "no-gutters": "" }, {
                default: g(() => [
                  p(a, { cols: "6" }, {
                    default: g(() => [
                      p(l, {
                        id: "settings-allow-height-mode",
                        modelValue: e.localConfig.allowHeightMode,
                        "onUpdate:modelValue": t[25] || (t[25] = (f) => e.localConfig.allowHeightMode = f),
                        label: "export.editor.allowHeightMode",
                        "true-value": !0,
                        "false-value": !1
                      }, null, 8, ["modelValue"])
                    ]),
                    _: 1
                    /* STABLE */
                  }),
                  p(a, null, {
                    default: g(() => [
                      p(u, {
                        "html-for": "settings-height-mode-default",
                        required: ""
                      }, {
                        default: g(() => [
                          X(
                            B(e.$t("export.editor.default")),
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
                  p(a, null, {
                    default: g(() => [
                      p(h, {
                        id: "settings-height-mode-default",
                        modelValue: e.localConfig.heightModeDefault,
                        "onUpdate:modelValue": t[26] || (t[26] = (f) => e.localConfig.heightModeDefault = f),
                        items: e.heightModeItems,
                        rules: [(f) => !!f || "components.validation.required"]
                      }, null, 8, ["modelValue", "items", "rules"])
                    ]),
                    _: 1
                    /* STABLE */
                  })
                ]),
                _: 1
                /* STABLE */
              }),
              p(c, { "no-gutters": "" }, {
                default: g(() => [
                  p(a, { cols: "12" }, {
                    default: g(() => [
                      p(l, {
                        id: "settings-data-projection",
                        modelValue: e.hasDataProjection,
                        "onUpdate:modelValue": t[27] || (t[27] = (f) => e.hasDataProjection = f),
                        label: "export.editor.overrideMapProjection",
                        "true-value": !0,
                        "false-value": !1
                      }, null, 8, ["modelValue"])
                    ]),
                    _: 1
                    /* STABLE */
                  }),
                  e.hasDataProjection ? (q(), z(v, {
                    key: 0,
                    id: "settings-data-projection",
                    modelValue: e.localConfig.dataProjection,
                    "onUpdate:modelValue": t[28] || (t[28] = (f) => e.localConfig.dataProjection = f),
                    "hide-alias": "",
                    required: ""
                  }, null, 8, ["modelValue"])) : Z("v-if", !0)
                ]),
                _: 1
                /* STABLE */
              }),
              (q(), ne(
                Oe,
                null,
                Te([
                  "exportScene",
                  "allowTextureExport",
                  "allowAddGenericAttrs",
                  "allowTiledExport",
                  "allowTerrainExport"
                ], (f) => p(
                  c,
                  {
                    key: f,
                    "no-gutters": ""
                  },
                  {
                    default: g(() => [
                      p(
                        a,
                        null,
                        {
                          default: g(() => [
                            p(l, {
                              id: `settings-${f}`,
                              modelValue: e.localConfig[f],
                              "onUpdate:modelValue": (d) => e.localConfig[f] = d,
                              label: `export.editor.${f}`,
                              "true-value": !0,
                              "false-value": !1
                            }, null, 8, ["id", "modelValue", "onUpdate:modelValue", "label"])
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
              e.localConfig.allowTerrainExport ? (q(), z(c, {
                key: 0,
                "no-gutters": ""
              }, {
                default: g(() => [
                  p(a, null, {
                    default: g(() => [
                      p(l, {
                        id: "settings-has-terrain-url",
                        modelValue: e.hasTerrainUrl,
                        "onUpdate:modelValue": t[29] || (t[29] = (f) => e.hasTerrainUrl = f),
                        label: "export.editor.terrainUrl"
                      }, null, 8, ["modelValue"])
                    ]),
                    _: 1
                    /* STABLE */
                  }),
                  p(a, null, {
                    default: g(() => [
                      p(s, {
                        id: "settings-terrain-url",
                        modelValue: e.localConfig.terrainUrl,
                        "onUpdate:modelValue": t[30] || (t[30] = (f) => e.localConfig.terrainUrl = f),
                        clearable: "",
                        disabled: !e.hasTerrainUrl,
                        placeholder: e.$t("export.editor.placeholder.terrainUrl")
                      }, null, 8, ["modelValue", "disabled", "placeholder"])
                    ]),
                    _: 1
                    /* STABLE */
                  })
                ]),
                _: 1
                /* STABLE */
              })) : Z("v-if", !0),
              e.localConfig.allowTerrainExport ? (q(), z(c, {
                key: 1,
                "no-gutters": ""
              }, {
                default: g(() => [
                  p(a, null, {
                    default: g(() => [
                      p(u, { "html-for": "settings-terrain-zoom-level" }, {
                        default: g(() => [
                          X(
                            B(e.$t("export.editor.terrainZoomLevel")),
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
                  p(a, { cols: "3" }, {
                    default: g(() => [
                      p(s, {
                        id: "settings-terrain-zoom-level",
                        modelValue: e.localConfig.terrainZoomLevel,
                        "onUpdate:modelValue": t[31] || (t[31] = (f) => e.localConfig.terrainZoomLevel = f),
                        modelModifiers: { number: !0 },
                        clearable: "",
                        min: -1,
                        type: "number",
                        rules: [
                          (f) => Number.isInteger(Number(f)) || "export.validation.integer",
                          (f) => f >= -1 || "export.validation.negativeOne"
                        ]
                      }, null, 8, ["modelValue", "rules"])
                    ]),
                    _: 1
                    /* STABLE */
                  })
                ]),
                _: 1
                /* STABLE */
              })) : Z("v-if", !0)
            ]),
            _: 1
            /* STABLE */
          })
        ]),
        _: 1
        /* STABLE */
      })) : Z("v-if", !0)
    ]),
    _: 1
    /* STABLE */
  }, 16, ["onSubmit"])) : Z("v-if", !0);
}
const xc = /* @__PURE__ */ De(Pc, [["render", Vc]]), Fc = {
  export: {
    name: "Export Tool",
    editorTitle: "Export Editor",
    headerTitle: "Daten exportieren",
    tooltip: "Daten exportieren",
    stepTitles: {
      dataSources: "Datenquelle",
      selectionType: "Datenauswahl",
      settings: "Einstellungen",
      selectImages: "Bilder auswählen",
      selectFiles: "Dateien auswählen",
      exportDestination: "E-Mailadresse",
      exportName: "Export Name"
    },
    dataSources: {
      cityModel: "3D Objekte",
      oblique: "Schrägluftbild",
      geojson: "Statische Daten"
    },
    selectionTypes: {
      areaSelection: "Flächenauswahl",
      objectSelection: "Objektauswahl",
      currentImage: "Aktuelles Schrägluftbild",
      drawPolygon: "Polygon zeichnen",
      drawBBox: "Bounding Box zeichnen",
      objectCount: "Ausgewählte Objekte",
      selectableLayers: "Unterstützte Ebene(n)",
      layerNotSupportedWarning: "Objekte dieser Ebene werden für den Export nicht unterstützt.",
      objectSelection1: "Nutze",
      objectSelection2: "und halte die Strg-Taste gedrückt um Objekte auszuwählen"
    },
    settingsCityModel: {
      exportFormat: "Exportformat",
      lod: "Level of Detail",
      thematicClasses: "Thematische Klassen",
      terrainExport: "Geländeexport",
      genericAttrs: "Generische Attribute anfügen",
      textureExport: "Texturen ausgeben",
      localCoordinates: "Lokale Koordinaten verwenden",
      tiledExport: "Gekachelter Export",
      terrainTexture: "Geländetextur",
      appearanceTheme: "Objekttextur",
      heightMode: "Höhenmodus",
      absolute: "Absolut",
      ellipsoid: "Ellipsoid",
      coordinateSystem: "Koordinatensystem"
    },
    settingsOblique: {
      directionFilter: "Bildausrichtungsfilter",
      north: "Nord",
      east: "Ost",
      south: "Süd",
      west: "West",
      nadir: "Alle",
      directionPlaceholder: "Richtung"
    },
    userData: {
      email: "E-Mail",
      exportName: "Exportname",
      description: "Beschreibung",
      accept: "Ich akzeptiere die",
      termsOfUse: "Nutzungsbedingungen"
    },
    selectToDownload: "Zum Herunterladen auswählen",
    select: "Auswählen",
    continue: "Weiter",
    reset: "Zurücksetzen",
    sendRequest: "Anfrage senden",
    notification: {
      success: "Vielen Dank für Ihre Anfrage. Diese wurde erfolgreich übermittelt. Sie erhalten eine Benachrichtigung, sobald Ihr Auftrag verarbeitet wurde. Dies kann je nach Datenmenge und Komplexität bis zu mehreren Stunden dauern.",
      error: {
        standard: "Bei der Bearbeitung Ihrer Anfrage ist ein Fehler aufgetreten. Bitte versuchen sie es zu einem anderen Zeitpunkt erneut.",
        validation: "Bitte stellen Sie sicher, dass alle Eingabefelder korrekt ausgefüllt sind."
      }
    },
    validation: {
      termsOfUse: "Um eine Anfrage abzusenden, muss den Nutzungsbedingungen zugestimmt werden.",
      selectField: "Bitte wählen Sie eine Option.",
      selectFieldMultiple: "Bitte wählen Sie mindestens eine Option.",
      provideEmail: "Bitte geben Sie eine E-Mailadresse an.",
      epsg: "Bitte stellen Sie sicher, dass der EPSG Code valide ist (z.B. EPSG:25832 oder 25832).",
      objectSelection: "Bitte wählen Sie mindestens ein Objekt aus.",
      areaSelection: "Bitte zeichnen Sie eine Auswahlfläche.",
      polygonFeature: "Die Geometrie der Flächenauswahl ist nicht valide.",
      polygonFeatureArea: "Die maximale Größe der Auswahlfläche wurde überschritten.",
      negative: "Der Eingabewert muss größer als 0 sein.",
      negativeOne: "Der Eingabewert muss mindestens -1 sein.",
      integer: "Der Eingabewert muss ganzzahlig sein."
    },
    context: {
      cityModel: "Objekt exportieren"
    },
    resetButtons: {
      settingsCityModel: "Einstellungen zurücksetzen",
      objectSelection: "Objektauswahl zurücksetzen",
      userData: "Nutzerangaben zurücksetzen"
    },
    help: {
      dataSources: {
        cityModel: "Exportieren Sie Objekte des Stadtmodells wie z.B. Gebäude, Bäume oder Brücken.",
        oblique: "Exportieren Sie hochaufgelöste Schrägluftbilder.",
        geojson: "Exportieren Sie einen Ausschnitt aus statischen Daten"
      },
      selectionTypes: {
        areaSelection: "Zeichnen Sie eine Geometrie, um einen Bereich zu exportieren.",
        objectSelection: "Klicken Sie auf Objekte des Stadtmodells, um sie auszuwählen. Nur verfügbar in der 3D Ansicht.",
        currentImage: 'Lädt das aktuell sichtbare Schrägluftbild herunter. Nur verfügbar in der Ansicht "Schrägluftbilder".'
      },
      settings: {
        oblique: "Wählen Sie, welche Bildausrichtung für den Bildexport übernommen werden soll.",
        cityModel: "Spezifizieren Sie, wie die Daten exportiert werden sollen."
      },
      select: "Wählen Sie die zu exportierenden Elemente aus. Halten Sie STRG gedrückt, um mehrere auszuwählen.",
      email: "Bitte geben Sie eine Email an, an welche der Export geschickt werden soll."
    },
    editor: {
      dataSources: "Datenquellen",
      obliqueName: "Name",
      fileExtension: "Dateiendung",
      resolution: "Auflösung",
      dedicatedSource: "Zugehörige Quelle",
      baseUrl: "Basis URL",
      title: "Titel",
      geojsonUrl: "GeoJSON URL",
      termsOfUse: "Nutzungsbedingungen",
      allowDescription: "Eingabefeld für Beschreibung",
      email: "Eingabefeld für eine Email",
      exportName: "Eingabefeld für Export Namen",
      maxSelectionArea: "Maximale Auswahlfläche",
      cityModelSettings: "Einstellungen zum Stadtmodell",
      exportFormatList: "Export Formate",
      default: "Default",
      lodList: "Detaillierungsgrade",
      thematicClassList: "Thematische Klassen",
      appearanceThemeDefault: "Default Objekttextur",
      heightModeDefault: "Default Höhenmodus",
      overrideMapProjection: "Kartenprojektion überschreiben",
      general: "Allgemeine Einstellungen",
      allowHeightMode: "Höhenmodus konfigurierbar",
      fmeSecurityToken: "FME Security Token",
      fmeServerUrl: "FME Server URL",
      exportScene: "Planungen und Zeichnungen exportieren",
      allowTextureExport: "Export von Texturen erlauben",
      allowAddGenericAttrs: "Hinzufügen von generischen Attributen erlauben",
      allowTiledExport: "Gekachelten Export erlauben",
      allowTerrainExport: "Geländeexport erlauben",
      terrainUrl: "Aktives Gelände überschreiben",
      terrainZoomLevel: "Gelände Zoom Level",
      dataSourceRequired: "Mindestens eine Datenquelle erforderlich",
      crsPredefined: "CRS Auswahl",
      placeholder: {
        baseUrl: "./Pfad/zu/Datensatz/",
        geojsonUrl: "./Pfad/zu/file.geojson",
        terrainUrl: "./Pfad/zu/Gelände/layer.json"
      }
    }
  }
}, Uc = {
  export: {
    name: "Export Tool",
    editorTitle: "Export Editor",
    headerTitle: "Export data",
    tooltip: "Export data",
    stepTitles: {
      dataSources: "Data source",
      selectionType: "Data selection",
      settings: "Settings",
      selectImages: "Select images",
      selectFiles: "Select files",
      exportDestination: "Email address",
      exportName: "Export name"
    },
    dataSources: {
      cityModel: "3D objects",
      oblique: "Oblique images",
      geojson: "Static data"
    },
    selectionTypes: {
      areaSelection: "Area selection",
      objectSelection: "Object selection",
      currentImage: "Current image",
      drawPolygon: "Draw a polygon",
      drawBBox: "Draw a bounding box",
      objectCount: "Object count",
      selectableLayers: "Selectable layer(s)",
      layerNotSupportedWarning: "Objects of this layer are not supported for export.",
      objectSelection1: "Use",
      objectSelection2: "while holding down Ctrl key to select objects"
    },
    settingsCityModel: {
      exportFormat: "Export format",
      lod: "Level of detail",
      thematicClasses: "Thematic classes",
      terrainExport: "Terrain export",
      genericAttrs: "Add generic attributes",
      textureExport: "Texture export",
      localCoordinates: "Use local coordinates",
      tiledExport: "Tiled export",
      terrainTexture: "Terrain appearance",
      appearanceTheme: "Object appearance",
      heightMode: "Height mode",
      absolute: "Absolute",
      ellipsoid: "Ellipsoid",
      coordinateSystem: "Coordinate system"
    },
    settingsOblique: {
      directionFilter: "Image direction filter",
      north: "North",
      east: "East",
      south: "South",
      west: "West",
      nadir: "All",
      directionPlaceholder: "Direction"
    },
    userData: {
      email: "Email",
      exportName: "Export name",
      description: "Description",
      accept: "I accept the",
      termsOfUse: "terms of use"
    },
    selectToDownload: "Select to download",
    select: "Select",
    continue: "Continue",
    reset: "Reset",
    sendRequest: "Send request",
    notification: {
      success: "Thank you for submitting your request. It has been transmitted successfully. You will receive a response once the request has been processed. This can take up to several hours, depending on the amount and complexity of the data.",
      error: {
        standard: "There was an error processing your request. Please try again later.",
        validation: "Please ensure that all inputs are valid."
      }
    },
    validation: {
      termsOfUse: "You need to accept the terms of use.",
      selectField: "Please choose an option.",
      selectFieldMultiple: "Please select at least one option.",
      provideEmail: "Please provide an email address.",
      epsg: "Please make sure the EPSG code is valid (e.g. EPSG:25832 or simply 25832).",
      objectSelection: "Please select at least one object.",
      areaSelection: "Please draw a selection area.",
      polygonFeature: "Geometry of area selection is not valid.",
      polygonFeatureArea: "Selection geometry exceeds maximum area.",
      negative: "The value must be above 0.",
      negativeOne: "The value must be at least -1.",
      integer: "The value must be an integer."
    },
    context: {
      cityModel: "Export object"
    },
    resetButtons: {
      settingsCityModel: "Reset settings",
      objectSelection: "Reset object selection",
      userData: "Reset user data"
    },
    help: {
      dataSources: {
        cityModel: "Export city model objects like 3D buildings, trees or bridges.",
        oblique: "Export high resolution oblique images.",
        geojson: "Export a section of static data."
      },
      selectionTypes: {
        areaSelection: "Select the area you want to export by drawing a geometry.",
        objectSelection: "Select city model objects by clicking on them. Only available in 3D view.",
        currentImage: "Download the currently visible oblique image. Only available in oblique view."
      },
      settings: {
        oblique: "Select which image orientation should be used for the image export.",
        cityModel: "Specify how the data should be exported."
      },
      select: "Select the elements to be exported. Hold down CTRL to select more than one.",
      email: "Please enter an email address to which the export should be sent."
    },
    editor: {
      dataSources: "Data sources",
      obliqueName: "Name",
      fileExtension: "File extension",
      resolution: "Resolution",
      dedicatedSource: "Dedicated source",
      baseUrl: "Base URL",
      title: "Title",
      geojsonUrl: "GeoJSON URL",
      termsOfUse: "Terms of use",
      allowDescription: "Allow description",
      email: "Allow Email",
      exportName: "Allow export name",
      maxSelectionArea: "Max selection area",
      cityModelSettings: "City model settings",
      exportFormatList: "Export formats",
      default: "Default",
      lodList: "Levels of detail",
      thematicClassList: "Thematic classes",
      appearanceThemeDefault: "Object appearance default",
      heightModeDefault: "Height mode default",
      general: "General settings",
      allowHeightMode: "Height mode configurable",
      overrideMapProjection: "Override map projection",
      crsPredefined: "Predefined CRS",
      fmeSecurityToken: "FME Security Token",
      fmeServerUrl: "FME Server URL",
      exportScene: "Export plans and drawings",
      allowTextureExport: "Allow texture export",
      allowAddGenericAttrs: "Allow export of generic attributes",
      allowTiledExport: "Allow tiled export",
      allowTerrainExport: "Allow terrain export",
      terrainUrl: "Overwrite current terrain",
      terrainZoomLevel: "Terrain Zoom Level",
      dataSourceRequired: "At least one data source required",
      placeholder: {
        baseUrl: "./path/to/dataset/",
        geojsonUrl: "./path/to/file.geojson",
        terrainUrl: "./path/to/terrain/layer.json"
      }
    }
  }
}, Ue = "export_window_id";
function oo(e, t, r) {
  const o = Zt();
  e.dataProjection || (t.settingsCityModel.dataProjection = o), e.crs || (t.settingsCityModel.crs = o.epsg, r.settingsCityModel.selectedCrs = o.epsg);
}
function Yc(e) {
  let t = null;
  const { pluginConfig: r, pluginState: o } = Ii(
    e,
    nt()
  ), n = st(o), i = JSON.parse(JSON.stringify(o)), l = [];
  let a;
  return {
    get name() {
      return we;
    },
    get version() {
      return Ei;
    },
    get mapVersion() {
      return Si;
    },
    get config() {
      return r;
    },
    get state() {
      return n;
    },
    additionalParams: void 0,
    get defaultState() {
      return i;
    },
    get dataSource() {
      return t;
    },
    initialize(s) {
      a = s, l.push(
        s.moduleAdded.addEventListener(() => {
          oo(e, r, n);
        }),
        s.moduleRemoved.addEventListener(() => {
          oo(e, r, n);
        })
      );
    },
    onVcsAppMounted: (s) => {
      const { action: c, destroy: u } = Tn(
        { name: "export.name", title: "export.tooltip", icon: "$vcsExport" },
        {
          id: Ue,
          component: Dc,
          slot: Cn.DYNAMIC_LEFT,
          state: {
            headerTitle: "export.headerTitle",
            headerIcon: "$vcsExport",
            infoUrlCallback: s.getHelpUrlCallback(
              "/tools/exportTool.html"
            ),
            styles: {
              width: "350px",
              height: "auto",
              overflow: "none !important"
            }
          }
        },
        s.windowManager,
        we
      );
      s.toolboxManager.add(
        { id: Ue, type: Rn.SINGLE, action: c },
        we
      ), l.push(u), s.contextMenuManager.addEventHandler((E) => {
        var h;
        const b = [];
        if (E.feature) {
          const w = (h = s.layers.getByKey(
            E.feature[ao]
          )) == null ? void 0 : h.properties;
          w != null && w.exportWorkbench && (w == null ? void 0 : w.exportWorkbench) === r.settingsCityModel.fmeServerUrl && b.push({
            name: "export.context.cityModel",
            icon: "$vcsExport",
            async callback() {
              var f;
              const { action: v } = s.toolboxManager.get(
                Ue
              );
              v.active || (await v.callback(), v.active = !0);
              const M = s.plugins.getByKey(we);
              M.state.selectedDataSourceOptions = {
                type: J.CITY_MODEL,
                title: "export.dataSources.cityModel"
              }, M.state.step = 2, M.state.highestStep = 2, M.state.selectedSelectionType = ee.OBJECT_SELECTION, M.state.selectedObjects = [String((f = E.feature) == null ? void 0 : f.getId())];
            }
          });
        }
        return b;
      }, we);
    },
    updateDataSource(s, c, u) {
      t = Ec(c, s), t instanceof ct && (t.viewDirectionFilter = n.settingsOblique.directionFilter, t.downloadState = u);
    },
    resetState: () => {
      Object.assign(n, JSON.parse(JSON.stringify(i)));
    },
    i18n: { de: Fc, en: Uc },
    getDefaultOptions: nt,
    toJSON() {
      const s = nt(), c = {
        termsOfUse: r.termsOfUse,
        dataSourceOptionsList: r.dataSourceOptionsList,
        allowDescription: r.allowDescription,
        allowEmail: r.allowEmail,
        allowExportName: r.allowExportName,
        maxSelectionArea: r.maxSelectionArea,
        ...r.settingsCityModel,
        ...r.defaults
      };
      return Object.keys(c).reduce((E, b) => (gi(s[b], c[b]) || (E[b] = c[b]), E), {});
    },
    getConfigEditors() {
      return [
        {
          component: xc,
          title: "export.editorTitle",
          infoUrlCallback: a == null ? void 0 : a.getHelpUrlCallback(
            "/components/plugins/exportToolConfig.html",
            "app-configurator"
          )
        }
      ];
    },
    destroy() {
      l.forEach((s) => {
        s();
      });
    }
  };
}
export {
  Yc as default,
  Ue as windowId
};
