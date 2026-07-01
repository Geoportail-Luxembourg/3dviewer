
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
} await loadCss('data:text/css;base64,OmRlZXAoLnYtaW5wdXRfX2RldGFpbHMpe2Rpc3BsYXk6bm9uZX1bZGF0YS12LWM1YzNhY2UxXSAudi1maWVsZF9faW5wdXR7cGFkZGluZy1yaWdodDowIWltcG9ydGFudH1bZGF0YS12LWM1YzNhY2UxXSAudi1jb250YWluZXJ7cGFkZGluZzowIWltcG9ydGFudH0ubGlzdC1oZWlnaHRbZGF0YS12LWQxYTUzZGNiXXttYXgtaGVpZ2h0OjI5MHB4O292ZXJmbG93LXk6YXV0b30K');import { VcsToolButton as Mo, getDefaultPrimaryColor as wt, getHighlightStyle as lr, NotificationType as we, VcsFormButton as Dt, useProxiedComplexModel as Mt, VcsLabel as Vt, VcsSelect as et, VcsCheckbox as Pt, downloadBlob as Vo, downloadURI as Fr, VcsList as Po, useProxiedAtomicModel as Uo, VcsTextField as jr, VcsTextArea as Fo, VcsWizard as jo, VcsWizardStep as $o, AbstractConfigEditor as Go, VcsFormSection as qo, VcsChipArrayInput as Bo, VcsProjection as ko, createToggleAction as Xo, WindowSlot as Yo, ToolboxType as zo } from "../../../assets/ui.js";
import { VectorStyleItem as $r, VectorLayer as tt, mercatorProjection as _e, markVolatile as Gr, startCreateFeatureSession as Jo, GeometryType as Ho, AbstractInteraction as Wo, EventType as Ko, ModificationKeyType as Zo, VcsEvent as Qo, vcsLayerName as qr, CesiumTilesetLayer as Br, TMSLayer as kr, WMSLayer as Xr, obliqueViewDirectionNames as ir, moduleIdSymbol as en, volatileModuleId as tn, SingleImageLayer as rn, VectorTileLayer as on, wgs84Projection as Ot, CesiumMap as Ut, parseGeoJSON as nn, hidden as Yr, createAbsoluteFeature as ln, writeGeoJSONFeature as an, getExtrusionHeightInfo as sn, vectorStyleSymbol as cn, ObliqueImage as un, ObliqueView as dn, hasSameOrigin as fn, obliqueGeometry as mn, imageGeometryToMercatorGeometry as pn, TerrainLayer as hn, Projection as gn, Extent as zr, ObliqueMap as Ft, ObliqueCollection as En, GeoJSONLayer as Sn, getDefaultProjection as jt } from "../../../assets/core.js";
import { reactive as Ue, inject as Ge, ref as re, onMounted as Jr, resolveComponent as M, openBlock as F, createBlock as X, withCtx as p, createVNode as f, createElementBlock as Q, Fragment as ye, renderList as ve, shallowRef as yn, computed as le, watch as Ae, createTextVNode as B, toDisplayString as j, createElementVNode as ne, normalizeClass as vn, createCommentVNode as J, onBeforeMount as bn, onUnmounted as Hr, withDirectives as ft, withModifiers as ar, vShow as mt, createSlots as xn, mergeProps as wn, toRaw as sr } from "../../../assets/vue.js";
import { VSheet as rt, VInput as Wr, VTooltip as Kr, VContainer as ot, VRow as nt, VCol as lt, VIcon as Zr, VForm as On, VOverlay as Ln, VChip as Tn, VProgressLinear as Cn } from "../../../assets/vuetify.js";
import { Color as Nn } from "../../../assets/cesium.js";
import { ol$extent$intersects as Rn, ol$geom$Polygon as An, ol$sphere$getArea as In, ol$format$GeoJSON as _n, ol$Feature as cr } from "../../../assets/ol.js";
var Dn = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Qr(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
function eo(t) {
  if (t.__esModule) return t;
  var e = t.default;
  if (typeof e == "function") {
    var o = function r() {
      return this instanceof r ? Reflect.construct(e, arguments, this.constructor) : e.apply(this, arguments);
    };
    o.prototype = e.prototype;
  } else o = {};
  return Object.defineProperty(o, "__esModule", { value: !0 }), Object.keys(t).forEach(function(r) {
    var n = Object.getOwnPropertyDescriptor(t, r);
    Object.defineProperty(o, r, n.get ? n : {
      enumerable: !0,
      get: function() {
        return t[r];
      }
    });
  }), o;
}
var Mn = function t(e, o) {
  if (e === o) return !0;
  if (e && o && typeof e == "object" && typeof o == "object") {
    if (e.constructor !== o.constructor) return !1;
    var r, n, l;
    if (Array.isArray(e)) {
      if (r = e.length, r != o.length) return !1;
      for (n = r; n-- !== 0; )
        if (!t(e[n], o[n])) return !1;
      return !0;
    }
    if (e.constructor === RegExp) return e.source === o.source && e.flags === o.flags;
    if (e.valueOf !== Object.prototype.valueOf) return e.valueOf() === o.valueOf();
    if (e.toString !== Object.prototype.toString) return e.toString() === o.toString();
    if (l = Object.keys(e), r = l.length, r !== Object.keys(o).length) return !1;
    for (n = r; n-- !== 0; )
      if (!Object.prototype.hasOwnProperty.call(o, l[n])) return !1;
    for (n = r; n-- !== 0; ) {
      var s = l[n];
      if (!t(e[s], o[s])) return !1;
    }
    return !0;
  }
  return e !== e && o !== o;
};
const Vn = /* @__PURE__ */ Qr(Mn), Se = "@vcmap/export", Pn = "2.0.7", Un = "^6.0", Te = (t, e) => {
  const o = t.__vccOpts || t;
  for (const [r, n] of e)
    o[r] = n;
  return o;
}, Ie = Symbol("areaSelection"), Fn = {
  Polygon: "$vcsTriangle",
  BBox: "$vcsBoundingBox"
}, pt = Ue({
  Polygon: !1,
  BBox: !1
});
function ht(t) {
  return new $r({
    fill: {
      color: Nn.fromCssColorString(t).withAlpha(0.3).toCssColorString()
    },
    stroke: {
      color: t,
      width: 2
    }
  });
}
const jn = {
  name: "SelectionArea",
  components: { VcsToolButton: Mo, VSheet: rt, VInput: Wr, VTooltip: Kr },
  emits: ["sessionstart"],
  setup(t, { emit: e }) {
    const o = Ge("vcsApp"), r = wt(o), n = re(!1);
    function l() {
      if (!o.layers.hasKey(String(Ie))) {
        const u = o.uiConfig.config.primaryColor ?? r, c = ht(u), S = new tt({
          name: String(Ie),
          projection: _e.toJSON(),
          style: c
        });
        Gr(S), o.layers.add(S);
      }
      const i = o.layers.getByKey(String(Ie));
      return i.activate(), i;
    }
    const s = [
      o.uiConfig.added.addEventListener((i) => {
        (i == null ? void 0 : i.name) === "primaryColor" && l().setStyle(
          ht(i.value)
        );
      }),
      o.uiConfig.removed.addEventListener((i) => {
        (i == null ? void 0 : i.name) === "primaryColor" && l().setStyle(
          ht(r)
        );
      })
    ];
    function a(i) {
      const u = l();
      u && (u.removeAllFeatures(), n.value = !1);
      const c = Jo(
        o,
        u,
        Ho[i]
      );
      e(
        "sessionstart",
        new Promise((S) => {
          let O = null;
          c.stopped.addEventListener(() => {
            pt[i] = !1, S(O);
          }), c.creationFinished.addEventListener((g) => {
            g && (O = g, c.stop(), n.value = !0);
          });
        })
      ), pt[i] = !0;
    }
    return Jr(() => {
      const i = l();
      n.value = i.getFeatures().length !== 0;
    }), o.windowManager.removed.addEventListener(({ id: i }) => {
      i === Oe && (l().deactivate(), s.forEach((u) => u()));
    }), {
      waitForGeometry: a,
      allowedGeometries: Fn,
      geometryState: pt,
      featureDrawn: n
    };
  }
};
function $n(t, e, o, r, n, l) {
  const s = M("VcsToolButton"), a = M("v-tooltip"), i = M("v-input"), u = M("v-sheet");
  return F(), X(u, { class: "px-1" }, {
    default: p(() => [
      f(i, {
        class: "feature-input",
        "model-value": r.featureDrawn,
        rules: [(c) => !!c || "export.validation.areaSelection"]
      }, {
        message: p(({ message: c }) => [
          f(a, {
            activator: ".feature-input",
            "v-if": c,
            text: t.$st(c),
            "content-class": "bg-error",
            location: "right"
          }, null, 8, ["v-if", "text"])
        ]),
        default: p(() => [
          (F(!0), Q(
            ye,
            null,
            ve(r.allowedGeometries, (c, S) => (F(), X(s, {
              key: S,
              icon: c,
              active: r.geometryState[S],
              tooltip: t.$st("export.selectionTypes.draw" + S),
              onClick: (O) => r.waitForGeometry(S)
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
const Gn = /* @__PURE__ */ Te(jn, [["render", $n]]);
class qn extends Wo {
  /**
   * @param {import("@vcmap/ui").VcsUiApp} app
   * @param {Array<import("@vcmap/core"):CesiumTilesetLayer>} layers
   */
  constructor(e, o) {
    super(Ko.CLICK, Zo.CTRL), this._app = e, this.selectableLayers = o, this._selectedFeatures = [], this._featureClicked = new Qo();
  }
  /**
   * Getter for featureClicked Event
   * @type {import("@vcmap/core").VcsEvent<Array<string>>}
   */
  get featureClicked() {
    return this._featureClicked;
  }
  /**
   * Either adds or removes a feature from the selected features and also adds and removes style.
   * @param {FeatureType} feature A clicked feature.
   */
  _selectFeature(e) {
    const o = e.getId();
    this._selectedFeatures.indexOf(o) !== -1 ? (this._selectedFeatures = this._selectedFeatures.filter(
      (r) => r !== o
    ), this.selectableLayers.forEach((r) => {
      r.featureVisibility.unHighlight([o]);
    })) : (this._selectedFeatures.push(o), this.selectableLayers.forEach((r) => {
      r.featureVisibility.highlight({
        [o]: lr(
          e,
          r,
          this._app.uiConfig.config.primaryColor ?? wt(this._app)
        )
      });
    }));
  }
  /**
   * Highlights selected features.
   */
  _highlightSelectedFeatures() {
    const e = this._selectedFeatures.reduce(
      (o, r) => ({
        ...o,
        [r]: lr(
          null,
          null,
          this._app.uiConfig.config.primaryColor ?? wt(this._app)
        )
      }),
      {}
    );
    this.selectableLayers.forEach(
      (o) => o.featureVisibility.highlight(e)
    );
  }
  /**
   * Removes highlight from selected features.
   */
  clearHighlighting() {
    this.selectableLayers.forEach(
      (e) => e.featureVisibility.unHighlight(this._selectedFeatures)
    );
  }
  /**
   * Removes selection and clears highlighting.
   */
  clearSelection() {
    this.clearHighlighting(), this._selectedFeatures = [];
  }
  /**
   * Sets the selected features. All previously selected features are unselected.
   * @param {string[]} features The ids of the features to select.
   */
  set selectedFeatures(e) {
    this.clearSelection(), this._selectedFeatures = e, this._highlightSelectedFeatures();
  }
  /**
   * @inheritDoc
   * @param {import("@vcmap/core").InteractionEvent} event
   * @returns {Promise<import("@vcmap/core").InteractionEvent>}
   */
  async pipe(e) {
    return e.feature && (this.selectableLayers.some(
      (o) => o.name === e.feature[qr]
    ) ? (this._selectFeature(e.feature), this._featureClicked.raiseEvent(this._selectedFeatures)) : this._app.notifier.add({
      type: we.WARNING,
      message: "export.selectionTypes.layerNotSupportedWarning",
      timeout: 5e3
    })), e;
  }
  destroy() {
    super.destroy(), this.clearSelection(), this._featureClicked.destroy();
  }
}
const Pe = [
  [String, "string"],
  [Number, "number"],
  [Boolean, "boolean"],
  [Function, "function"],
  [void 0, "undefined"],
  [Symbol, "symbol"]
];
function Lt(t) {
  const e = {};
  if (!t || e.toString(t) !== "[object Object]")
    return !1;
  const o = Object.getPrototypeOf(t);
  if (!o)
    return !0;
  const r = e.hasOwnProperty, n = r.call(o, "constructor") && o.constructor;
  return typeof n == "function" && r.toString.call(n) === r.toString.call(Object);
}
function he(t, e) {
  if (t === null)
    return "null";
  if (typeof t > "u")
    return "undefined";
  if (e)
    return typeof t;
  let o;
  if (Array.isArray(t))
    o = `[${t.map((n) => he(n, e)).join(",")}]`;
  else
    try {
      o = JSON.stringify(t);
    } catch {
      o = typeof t;
    }
  return o = o || typeof t, o.length > 20 ? `${o.substr(0, 20)}...` : o;
}
function Bn(t, e) {
  return typeof e == "string" || typeof e == "number" || typeof e == "boolean" || typeof e == "symbol" ? t === e ? !1 : `Expected ${he(t)} to equal ${e.toString()}` : null;
}
function kn(t, e, o) {
  if (Array.isArray(e)) {
    if (e.length !== 1)
      throw new Error("Array patterns may only have on type");
    if (Array.isArray(t)) {
      let r = !1;
      return t.findIndex((l) => {
        try {
          ie(l, e[0], o);
        } catch (s) {
          r = s.message.replace(/Match failed:\s/, "");
        }
        return r;
      }) > -1 ? `${r} in ${he(t)}` : !1;
    }
    return `Expected ${he(t)} to be an Array`;
  }
  return null;
}
function Tt(t, e, o) {
  const r = o ? `${o}.` : "";
  if (!Lt(t))
    return `Expected ${he(t)} to be a plain Object`;
  let l = !1;
  const s = Object.keys(e).find((a) => {
    const i = t[a];
    if (Lt(e[a]))
      l = Tt(i, e[a], r + a);
    else
      try {
        ie(i, e[a]);
      } catch (u) {
        l = u.message.replace(/Match failed:\s/, "");
      }
    return l;
  });
  return s ? `${l} in object.${r}${s}` : !1;
}
function Xn(t, e) {
  if (e === Number)
    return Number.isFinite(t) ? !1 : `expected ${he(t)} to be a number, excluding NaN`;
  for (let o = Pe.length; o--; )
    if (e === Pe[o][0])
      return typeof t === Pe[o][1] ? !1 : `expected ${he(t)} to be a ${Pe[o][1]}`;
  return null;
}
function Ct(t) {
  if (t === null)
    return "null";
  const e = Pe.find((n) => n[0] === t);
  if (e)
    return e[1];
  let o = t.toString();
  if (t.className)
    return t.className;
  const r = o.match(/function (.*)\(/);
  if (r && r.length > 1)
    return r[1];
  if (Lt(t)) {
    const n = {};
    Object.keys(t).forEach((l) => {
      n[l] = Ct(t[l]);
    });
    try {
      o = `Object of ${JSON.stringify(n)}`;
    } catch {
      o = "Object";
    }
  }
  return o;
}
function Yn(t, e, o) {
  const r = function(s, a) {
    if (a == null)
      return s === a ? !1 : `Expected ${he(s)} to be ${a}`;
    const i = Xn(s, a);
    if (i !== null)
      return i;
    const u = Bn(s, a);
    if (u !== null)
      return u;
    if (Array.isArray(a))
      return kn(s, a, o);
    if (a instanceof Function)
      return s instanceof a ? !1 : `Expected ${he(s, !0)} to be of Type ${Ct(a)}`;
    if (a === Object)
      return Tt(s, {});
    if (typeof a != "object")
      throw new Error(`Cannot handler pattern ${a}`);
    const c = Tt(s, a);
    return c || !1;
  };
  let n;
  return Array.isArray(e) && e.length > 1 ? e.every((s) => r(t, s)) && (n = `Expected ${he(t)} to be a ${e.map((s) => Ct(s)).join(" or ")}`) : n = r(t, e), n;
}
function ie(t, e, o) {
  const r = Yn(t, e, o);
  if (r)
    throw new Error(`Match failed: ${r}`);
  return !1;
}
function z(t, e, o) {
  const r = [null, void 0];
  return Array.isArray(e) && e.length > 1 ? e.forEach((n) => {
    r.push(n);
  }) : r.push(e), ie(t, r.reverse(), o);
}
function zn(t, e) {
  if (t != null) {
    const o = Number.parseInt(String(t), 10);
    if (o != null && !Number.isNaN(o))
      return o;
  }
  return e;
}
function fe(t, e) {
  return t == null ? e : typeof t == "boolean" ? t : t === 1 ? !0 : t === 0 ? !1 : typeof t == "string" && (t.toLowerCase() === "true" || t.toLowerCase() === "1") ? !0 : typeof t == "string" && (t.toLowerCase() === "false" || t.toLowerCase() === "0") ? !1 : e;
}
const ge = {
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
}, to = {
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
function ro(t) {
  const e = {
    85: !0,
    45: !0,
    44: !0,
    43: !0,
    46: !0,
    8: !0,
    9: !0,
    4: !0
  };
  return t.map((o) => ({
    value: o,
    title: to[o],
    citygmlOnly: e[o]
  }));
}
const K = {
  AREA_SELECTION: "areaSelection",
  OBJECT_SELECTION: "objectSelection",
  CURRENT_IMAGE: "currentImage"
}, k = {
  CITY_MODEL: "cityModel",
  OBLIQUE: "oblique",
  GEOJSON: "geojson"
}, Jn = {
  ABSOLUTE: "absolute",
  ELLIPSOID: "ellipsoid"
}, Hn = {
  LOD1: "LoD1",
  LOD2: "LoD2",
  LOD3: "LoD3",
  LOD4: "LoD4",
  HALOD: "haLoD"
};
function Wn(t, e) {
  const o = [
    "exportFormat",
    "thematicClass",
    "lod",
    "appearanceTheme"
  ].reduce((y, L) => {
    const A = t[`${L}List`] || e[`${L}List`];
    return y[`${L}List`] = A.length === 1 ? A[0] : A, y;
  }, {});
  z(t.exportFormatList, [Object.keys(ge)]), ie(
    t.exportFormatDefault || e.exportFormatDefault,
    [o.exportFormatList]
  ), z(t.thematicClassList, [
    Object.keys(to)
  ]), ie(
    t.thematicClassDefault || e.thematicClassDefault,
    [o.thematicClassList]
  ), z(t.lodList, [Object.values(Hn)]), ie(
    t.lodDefault || e.lodDefault,
    o.lodList
  ), z(t.appearanceThemeList, [String]), ie(
    t.appearanceThemeDefault || e.appearanceThemeDefault,
    o.appearanceThemeList
  ), z(t.dataSourceOptionsList, [
    { type: Object.values(k) }
  ]), z(t.heightModeDefault, Object.values(Jn)), z(t.terrainAppearanceOptions, Object), z(t.terrainZoomLevel, Number), z(t.allowHeightMode, Boolean), z(t.allowTextureExport, Boolean), z(t.allowAddGenericAttrs, Boolean), z(t.allowTiledExport, Boolean), z(t.allowTerrainExport, Boolean), z(t.termsOfUse, [String, URL]), z(t.allowDescription, Boolean), z(t.exportScene, Boolean), z(t.crs, [String, [String]]), z(t.dataProjection, Object), z(t.maxSelectionArea, Number), z(t.allowEmail, Boolean), z(t.allowExportName, Boolean);
  const r = t.dataSourceOptionsList || e.dataSourceOptionsList;
  r.forEach((y) => {
    y.type === k.GEOJSON && (y.title ? y.title : y.title = "export.dataSources.geojson", y.help ? y.help : y.help = "export.help.dataSources.geojson");
  }), r.some(
    (y) => y.type === k.CITY_MODEL
  ) && (ie(t.fmeServerUrl, String), z(t.fmeSecurityToken, String));
  const n = t.exportFormatList || e.exportFormatList, l = t.exportFormatDefault || e.exportFormatDefault, s = t.lodList || e.lodList, a = t.lodDefault || e.lodDefault, i = t.thematicClassList || e.thematicClassList, u = t.thematicClassDefault || e.thematicClassDefault, c = t.termsOfUse !== void 0 ? t.termsOfUse : e.termsOfUse, S = t.appearanceThemeList || e.appearanceThemeList, O = t.appearanceThemeDefault || e.appearanceThemeDefault, g = t.terrainAppearanceOptions || {}, T = fe(
    t.allowHeightMode,
    e.allowHeightMode
  ), v = t.heightModeDefault || e.heightModeDefault, D = fe(
    t.allowTextureExport,
    e.allowTextureExport
  ), m = fe(
    t.allowAddGenericAttrs,
    e.allowAddGenericAttrs
  ), d = fe(
    t.allowTiledExport,
    e.allowTiledExport
  ), h = fe(
    t.allowTerrainExport,
    e.allowTerrainExport
  ), x = t.terrainUrl || e.terrainUrl, N = zn(
    t.terrainZoomLevel,
    e.terrainZoomLevel || void 0
  ) || null, I = t.dataProjection || e.dataProjection, C = t.crs || e.crs, _ = fe(
    t.allowDescription,
    e.allowDescription
  ), $ = t.fmeSecurityToken || e.fmeSecurityToken, b = t.fmeServerUrl || e.fmeServerUrl, G = t.maxSelectionArea || e.maxSelectionArea, Y = Array.isArray(C) ? C[0] : C, q = fe(
    t.exportScene,
    e.exportScene
  ), w = fe(
    t.allowExportName,
    e.allowExportName
  ), E = fe(
    t.allowEmail,
    e.allowEmail
  );
  return {
    pluginConfig: {
      settingsCityModel: {
        exportFormatList: n,
        lodList: s,
        thematicClassList: i,
        terrainAppearanceOptions: g,
        appearanceThemeList: S,
        allowHeightMode: T,
        allowTextureExport: D,
        allowAddGenericAttrs: m,
        allowTiledExport: d,
        allowTerrainExport: h,
        crs: C,
        terrainUrl: x,
        terrainZoomLevel: N,
        dataProjection: I,
        exportScene: q,
        fmeSecurityToken: $,
        fmeServerUrl: b
      },
      allowExportName: w,
      allowEmail: E,
      termsOfUse: c,
      dataSourceOptionsList: r,
      allowDescription: _,
      maxSelectionArea: G,
      defaults: {
        exportFormatDefault: l,
        lodDefault: a,
        thematicClassDefault: u,
        appearanceThemeDefault: O,
        heightModeDefault: v
      }
    },
    pluginState: {
      step: 0,
      highestStep: 0,
      settingsCityModel: {
        selectedExportFormats: l,
        selectedLod: a,
        selectedThematicClasses: u,
        terrainExport: !1,
        textureExport: !1,
        tiledExport: !1,
        localCoordinates: !1,
        genericAttributes: !1,
        selectedCrs: Y,
        selectedAppearanceTheme: O,
        selectedTerrainAppearanceLayer: null,
        selectedHeightMode: v
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
function gt(t, e) {
  return [...t.layers].filter(
    (o) => o instanceof Br && o.properties.exportWorkbench === e
  );
}
const Kn = {
  name: "SelectionObjects",
  components: {
    VContainer: ot,
    VRow: nt,
    VCol: lt,
    VIcon: Zr,
    VInput: Wr,
    VcsFormButton: Dt,
    VTooltip: Kr
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
      required: !1,
      default: !0
    },
    isReset: {
      type: Boolean,
      required: !0
    }
  },
  emits: ["continue"],
  setup(t, { emit: e }) {
    const o = Ge("vcsApp"), r = o.plugins.getByKey(Se), n = yn(
      gt(o, r.config.settingsCityModel.fmeServerUrl)
    ), l = Mt(t, "modelValue", e), s = re(l.value.length), { eventHandler: a } = o.maps, i = new qn(
      o,
      n.value
    );
    i.id = "objectSelectionInteractionId";
    const u = le(() => n.value.map((T) => {
      var v;
      return ((v = T.properties) == null ? void 0 : v.title) ?? T.name;
    }));
    let c = () => {
    }, S = () => {
    };
    c = () => {
      S(), l.value = [], s.value = 0, i.clearSelection(), i.destroy();
    };
    const O = [
      i.featureClicked.addEventListener((T) => {
        l.value = T, s.value = T.length;
      }),
      a.exclusiveAdded.addEventListener(() => {
        i.id !== a.exclusiveInteractionId && r.state.selectedSelectionType === K.OBJECT_SELECTION && (o.windowManager.remove(Oe), O.forEach((T) => T()));
      }),
      a.addExclusiveInteraction(
        i,
        () => {
          c == null || c();
        },
        void 0,
        i.id
      ),
      o.layers.added.addEventListener((T) => {
        T.properties.exportWorkbench === r.config.fmeServerUrl && (n.value = gt(
          o,
          r.config.settingsCityModel.fmeServerUrl
        ));
      }),
      o.layers.removed.addEventListener((T) => {
        T.properties.exportWorkbench === r.config.fmeServerUrl && (n.value = gt(
          o,
          r.config.settingsCityModel.fmeServerUrl
        ));
      }),
      o.windowManager.removed.addEventListener(({ id: T }) => {
        T === Oe && (O.forEach((v) => v()), c());
      })
    ];
    S = Ae(
      () => t.modelValue,
      () => {
        i.selectedFeatures = t.modelValue, s.value = t.modelValue.length;
      },
      { immediate: !0 }
    );
    function g(T) {
      return !!T || "export.validation.objectSelection";
    }
    return {
      selectableLayerNames: u,
      count: s,
      objectSelectionRule: g
    };
  }
};
function Zn(t, e, o, r, n, l) {
  const s = M("v-icon"), a = M("v-col"), i = M("v-row"), u = M("v-tooltip"), c = M("v-input"), S = M("VcsFormButton"), O = M("v-container");
  return F(), X(O, { class: "px-1 py-0" }, {
    default: p(() => [
      f(i, { "no-gutters": "" }, {
        default: p(() => [
          f(a, null, {
            default: p(() => [
              B(
                j(t.$t("export.selectionTypes.objectSelection1")) + " ",
                1
                /* TEXT */
              ),
              f(s, null, {
                default: p(() => [
                  B("$vcsPointSelect")
                ]),
                _: 1
                /* STABLE */
              }),
              B(
                " " + j(t.$t("export.selectionTypes.objectSelection2")) + ". ",
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
      f(i, {
        "no-gutters": "",
        class: "mt-1 mb-0"
      }, {
        default: p(() => [
          f(a, null, {
            default: p(() => [
              B(
                j(t.$t("export.selectionTypes.selectableLayers")) + ": ",
                1
                /* TEXT */
              )
            ]),
            _: 1
            /* STABLE */
          }),
          f(a, { class: "d-flex justify-end" }, {
            default: p(() => [
              ne("ul", null, [
                (F(!0), Q(
                  ye,
                  null,
                  ve(r.selectableLayerNames, (g) => (F(), Q(
                    "li",
                    { key: g },
                    j(g),
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
      f(i, { "no-gutters": "" }, {
        default: p(() => [
          f(c, {
            class: vn(["feature-input", { "text-error": r.count === 0 && o.isReset }]),
            "model-value": r.count,
            rules: [r.objectSelectionRule]
          }, {
            message: p(({ message: g }) => [
              f(u, {
                activator: ".feature-input",
                "v-if": g,
                text: t.$st(g),
                "content-class": "bg-error",
                location: "right"
              }, null, 8, ["v-if", "text"])
            ]),
            default: p(() => [
              f(a, {
                cols: "8",
                class: "px-0 py-1"
              }, {
                default: p(() => [
                  B(
                    j(t.$t("export.selectionTypes.objectCount")) + ": ",
                    1
                    /* TEXT */
                  )
                ]),
                _: 1
                /* STABLE */
              }),
              f(a, {
                cols: "4",
                class: "px-0 py-1 d-flex justify-end"
              }, {
                default: p(() => [
                  ne(
                    "span",
                    null,
                    j(r.count),
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
      o.buttonShow ? (F(), X(i, {
        key: 0,
        "no-gutters": ""
      }, {
        default: p(() => [
          f(a, { class: "d-flex flex-row-reverse" }, {
            default: p(() => [
              f(S, {
                disabled: o.buttonDisabled,
                onClick: e[0] || (e[0] = (g) => t.$emit("continue"))
              }, {
                default: p(() => [
                  B(
                    j(t.$t("export.continue")),
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
      })) : J("v-if", !0)
    ]),
    _: 1
    /* STABLE */
  });
}
const Qn = /* @__PURE__ */ Te(Kn, [["render", Zn]]), el = {
  name: "SettingsCityModel",
  components: {
    VContainer: ot,
    VRow: nt,
    VCol: lt,
    VcsLabel: Vt,
    VcsSelect: et,
    VcsCheckbox: Pt,
    VcsFormButton: Dt
  },
  props: {
    setup: {
      type: Object,
      required: !0
    },
    modelValue: {
      type: Object,
      required: !0
    },
    buttonDisabled: {
      type: Boolean,
      required: !0
    },
    buttonShow: {
      type: Boolean,
      required: !1,
      default: !0
    }
  },
  emits: ["continue", "update:modelValue"],
  setup(t, { emit: e }) {
    const o = Mt(t, "modelValue", e), r = {
      exportFormat: {
        items: t.setup.exportFormatList,
        i18n: "export.settingsCityModel.exportFormat",
        multiple: !0,
        stateName: "selectedExportFormats"
      },
      lod: {
        items: t.setup.lodList,
        i18n: "export.settingsCityModel.lod",
        multiple: !1,
        stateName: "selectedLod"
      },
      thematicClassList: {
        items: ro(t.setup.thematicClassList),
        i18n: "export.settingsCityModel.thematicClasses",
        multiple: !0,
        stateName: "selectedThematicClasses"
      }
    }, n = {};
    function l() {
      if (Object.keys(t.setup.terrainAppearanceOptions).length === 0) {
        [...Ge("vcsApp").layers].filter(
          (S) => S instanceof kr || S instanceof Xr
        ).forEach((S) => {
          const { name: O, maxLevel: g } = S;
          n[O] = g;
        });
        const c = Object.keys(n);
        c.length > 0 && (o.value.selectedTerrainAppearanceLayer = c[0]);
      }
    }
    bn(() => {
      l();
    });
    const s = le(() => {
      const u = {
        showTerrainExport: {
          render: t.setup.allowTerrainExport && o.value.selectedExportFormats.some(
            (c) => c !== "2D Shape"
          ),
          i18n: "export.settingsCityModel.terrainExport",
          stateName: "terrainExport"
        },
        showAddGenericAttr: {
          render: t.setup.allowAddGenericAttrs && o.value.selectedExportFormats.some(
            (c) => ge[c].genericAttributes
          ),
          i18n: "export.settingsCityModel.genericAttrs",
          stateName: "genericAttributes"
        },
        showTextureExport: {
          render: t.setup.allowTextureExport && o.value.selectedExportFormats.some(
            (c) => ge[c].texture
          ),
          i18n: "export.settingsCityModel.textureExport",
          stateName: "textureExport",
          selectFields: [
            {
              name: "appearanceThemeOptions",
              render: t.setup.appearanceThemeList.length > 0,
              i18n: "export.settingsCityModel.appearanceTheme",
              items: t.setup.appearanceThemeList,
              stateName: "selectedAppearanceTheme"
            },
            {
              name: "terrainAppearanceOptions",
              render: Object.keys(n).length > 0 && o.value.terrainExport,
              i18n: "export.settingsCityModel.terrainTexture",
              items: Object.keys(n),
              stateName: "selectedTerrainAppearanceLayer"
            }
          ]
        },
        showUseLocalCoors: {
          render: o.value.selectedExportFormats.some(
            (c) => ge[c].localCoordinates
          ),
          i18n: "export.settingsCityModel.localCoordinates",
          stateName: "localCoordinates"
        },
        // TODO: replace by setup prop
        showTiledExport: {
          render: t.setup.allowTiledExport,
          i18n: "export.settingsCityModel.tiledExport",
          stateName: "tiledExport"
        }
      };
      return Object.keys(u).filter((c) => !u[c].render).forEach((c) => delete u[c]), Object.keys(u).filter((c) => u[c].selectFields).forEach((c) => {
        const S = u[c].selectFields.filter(
          (O) => O.render
        );
        S.length === 0 ? delete u[c].selectFields : u[c].selectFields = S;
      }), u;
    }), a = le(() => !o.value.terrainExport && t.setup.allowHeightMode && o.value.selectedExportFormats.some(
      (u) => ge[u].heightMode
    )), i = le(
      () => Array.isArray(t.setup.crs) && o.value.selectedExportFormats.some(
        (u) => !ge[u].localCoordinates
      )
    );
    return {
      settingsState: o,
      mainSettingsSetup: r,
      formatSettingsSetup: s,
      showHeightMode: a,
      showCrsInput: i
    };
  }
};
function tl(t, e, o, r, n, l) {
  const s = M("VcsLabel"), a = M("v-col"), i = M("VcsSelect"), u = M("v-row"), c = M("VcsCheckbox"), S = M("VcsFormButton"), O = M("v-container");
  return F(), X(O, { class: "pa-0" }, {
    default: p(() => [
      J(" main settings "),
      (F(!0), Q(
        ye,
        null,
        ve(r.mainSettingsSetup, (g, T) => (F(), X(
          u,
          {
            key: T,
            "no-gutters": ""
          },
          {
            default: p(() => [
              f(
                a,
                {
                  class: "pa-0",
                  cols: "6"
                },
                {
                  default: p(() => [
                    f(s, {
                      "html-for": T + "Select"
                    }, {
                      default: p(() => [
                        B(
                          j(t.$st(g.i18n)),
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
              f(
                a,
                {
                  class: "pa-0",
                  cols: "6"
                },
                {
                  default: p(() => [
                    f(i, {
                      id: T + "Select",
                      modelValue: r.settingsState[g.stateName],
                      "onUpdate:modelValue": (v) => r.settingsState[g.stateName] = v,
                      items: g.items,
                      multiple: g.multiple,
                      rules: [
                        (v) => !!v.length || t.$t("export.validation.selectFieldMultiple")
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
      J(" settings that depend on the selected formats "),
      (F(!0), Q(
        ye,
        null,
        ve(r.formatSettingsSetup, (g, T) => (F(), Q("div", { key: T }, [
          f(
            u,
            { "no-gutters": "" },
            {
              default: p(() => [
                f(
                  a,
                  { class: "pa-0" },
                  {
                    default: p(() => [
                      f(c, {
                        modelValue: r.settingsState[g.stateName],
                        "onUpdate:modelValue": (v) => r.settingsState[g.stateName] = v,
                        label: g.i18n
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
          r.settingsState[g.stateName] ? (F(!0), Q(
            ye,
            { key: 0 },
            ve(g.selectFields, (v) => (F(), X(
              u,
              {
                key: v.name,
                "no-gutter": "",
                class: "ma-0 pl-6"
              },
              {
                default: p(() => [
                  f(
                    a,
                    {
                      class: "pa-0",
                      cols: "6"
                    },
                    {
                      default: p(() => [
                        f(s, {
                          "html-for": v.name + "Select"
                        }, {
                          default: p(() => [
                            B(
                              j(t.$st(v.i18n)),
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
                  f(
                    a,
                    {
                      class: "pa-0",
                      cols: "6"
                    },
                    {
                      default: p(() => [
                        f(i, {
                          id: v.name + "Select",
                          modelValue: r.settingsState[v.stateName],
                          "onUpdate:modelValue": (D) => r.settingsState[v.stateName] = D,
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
          )) : J("v-if", !0)
        ]))),
        128
        /* KEYED_FRAGMENT */
      )),
      r.showHeightMode ? (F(), X(u, {
        key: 0,
        "no-gutters": ""
      }, {
        default: p(() => [
          f(a, {
            class: "pa-0",
            cols: "6"
          }, {
            default: p(() => [
              f(s, { "html-for": "height-mode-select" }, {
                default: p(() => [
                  B(
                    j(t.$t("export.settingsCityModel.heightMode")),
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
          f(a, {
            class: "pa-0",
            cols: "6"
          }, {
            default: p(() => [
              f(i, {
                id: "height-mode-select",
                modelValue: r.settingsState.selectedHeightMode,
                "onUpdate:modelValue": e[0] || (e[0] = (g) => r.settingsState.selectedHeightMode = g),
                items: [
                  {
                    value: "absolute",
                    title: t.$t("export.settingsCityModel.absolute")
                  },
                  {
                    value: "ellipsoid",
                    title: t.$t("export.settingsCityModel.ellipsoid")
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
      })) : J("v-if", !0),
      r.showCrsInput ? (F(), X(u, {
        key: 1,
        "no-gutters": ""
      }, {
        default: p(() => [
          f(a, {
            class: "pa-0",
            cols: "6"
          }, {
            default: p(() => [
              f(s, { "html-for": "crs-input" }, {
                default: p(() => [
                  B(
                    j(t.$t("export.settingsCityModel.coordinateSystem")),
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
          f(a, {
            class: "pa-0",
            cols: "6"
          }, {
            default: p(() => [
              f(i, {
                id: "crs-input",
                modelValue: r.settingsState.selectedCrs,
                "onUpdate:modelValue": e[1] || (e[1] = (g) => r.settingsState.selectedCrs = g),
                items: o.setup.crs
              }, null, 8, ["modelValue", "items"])
            ]),
            _: 1
            /* STABLE */
          })
        ]),
        _: 1
        /* STABLE */
      })) : J("v-if", !0),
      o.buttonShow ? (F(), X(u, {
        key: 2,
        "no-gutters": ""
      }, {
        default: p(() => [
          f(a, {
            cols: "12",
            class: "px-1 d-flex flex-row-reverse"
          }, {
            default: p(() => [
              f(S, {
                disabled: o.buttonDisabled,
                onClick: e[2] || (e[2] = (g) => t.$emit("continue"))
              }, {
                default: p(() => [
                  B(
                    j(t.$t("export.continue")),
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
      })) : J("v-if", !0)
    ]),
    _: 1
    /* STABLE */
  });
}
const rl = /* @__PURE__ */ Te(el, [["render", tl]]), ol = {
  name: "SettingsOblique",
  components: {
    VSheet: rt,
    VContainer: ot,
    VRow: nt,
    VCol: lt,
    VcsLabel: Vt,
    VcsSelect: et
  },
  props: {
    modelValue: {
      type: Object,
      required: !0
    }
  },
  setup(t, { emit: e }) {
    const o = Mt(t, "modelValue", e), { nadir: r, ...n } = ir, l = Object.keys({ nadir: r, ...n }).map(
      (s) => ({
        value: ir[s],
        title: `export.settingsOblique.${s}`
      })
    );
    return {
      settingsState: o,
      directionFilterItems: l
    };
  }
};
function nl(t, e, o, r, n, l) {
  const s = M("VcsLabel"), a = M("v-col"), i = M("VcsSelect"), u = M("v-row"), c = M("v-container"), S = M("v-sheet");
  return F(), X(S, null, {
    default: p(() => [
      f(c, null, {
        default: p(() => [
          f(u, { "no-gutters": "" }, {
            default: p(() => [
              f(a, { cols: "7" }, {
                default: p(() => [
                  f(s, null, {
                    default: p(() => [
                      B(
                        j(t.$t("export.settingsOblique.directionFilter")),
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
              f(a, { cols: "5" }, {
                default: p(() => [
                  f(i, {
                    modelValue: r.settingsState.directionFilter,
                    "onUpdate:modelValue": e[0] || (e[0] = (O) => r.settingsState.directionFilter = O),
                    items: r.directionFilterItems,
                    rules: [(O) => !!O || "Please select at least one option."],
                    placeholder: t.$t("export.settingsOblique.directionPlaceholder")
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
const ll = /* @__PURE__ */ Te(ol, [["render", nl], ["__scopeId", "data-v-c5c3ace1"]]);
var Nt = { exports: {} };
const il = "2.0.0", oo = 256, al = Number.MAX_SAFE_INTEGER || /* istanbul ignore next */
9007199254740991, sl = 16, cl = oo - 6, ul = [
  "major",
  "premajor",
  "minor",
  "preminor",
  "patch",
  "prepatch",
  "prerelease"
];
var it = {
  MAX_LENGTH: oo,
  MAX_SAFE_COMPONENT_LENGTH: sl,
  MAX_SAFE_BUILD_LENGTH: cl,
  MAX_SAFE_INTEGER: al,
  RELEASE_TYPES: ul,
  SEMVER_SPEC_VERSION: il,
  FLAG_INCLUDE_PRERELEASE: 1,
  FLAG_LOOSE: 2
};
const dl = typeof process == "object" && process.env && process.env.NODE_DEBUG && /\bsemver\b/i.test(process.env.NODE_DEBUG) ? (...t) => console.error("SEMVER", ...t) : () => {
};
var at = dl;
(function(t, e) {
  const {
    MAX_SAFE_COMPONENT_LENGTH: o,
    MAX_SAFE_BUILD_LENGTH: r,
    MAX_LENGTH: n
  } = it, l = at;
  e = t.exports = {};
  const s = e.re = [], a = e.safeRe = [], i = e.src = [], u = e.safeSrc = [], c = e.t = {};
  let S = 0;
  const O = "[a-zA-Z0-9-]", g = [
    ["\\s", 1],
    ["\\d", n],
    [O, r]
  ], T = (D) => {
    for (const [m, d] of g)
      D = D.split(`${m}*`).join(`${m}{0,${d}}`).split(`${m}+`).join(`${m}{1,${d}}`);
    return D;
  }, v = (D, m, d) => {
    const h = T(m), x = S++;
    l(D, x, m), c[D] = x, i[x] = m, u[x] = h, s[x] = new RegExp(m, d ? "g" : void 0), a[x] = new RegExp(h, d ? "g" : void 0);
  };
  v("NUMERICIDENTIFIER", "0|[1-9]\\d*"), v("NUMERICIDENTIFIERLOOSE", "\\d+"), v("NONNUMERICIDENTIFIER", `\\d*[a-zA-Z-]${O}*`), v("MAINVERSION", `(${i[c.NUMERICIDENTIFIER]})\\.(${i[c.NUMERICIDENTIFIER]})\\.(${i[c.NUMERICIDENTIFIER]})`), v("MAINVERSIONLOOSE", `(${i[c.NUMERICIDENTIFIERLOOSE]})\\.(${i[c.NUMERICIDENTIFIERLOOSE]})\\.(${i[c.NUMERICIDENTIFIERLOOSE]})`), v("PRERELEASEIDENTIFIER", `(?:${i[c.NUMERICIDENTIFIER]}|${i[c.NONNUMERICIDENTIFIER]})`), v("PRERELEASEIDENTIFIERLOOSE", `(?:${i[c.NUMERICIDENTIFIERLOOSE]}|${i[c.NONNUMERICIDENTIFIER]})`), v("PRERELEASE", `(?:-(${i[c.PRERELEASEIDENTIFIER]}(?:\\.${i[c.PRERELEASEIDENTIFIER]})*))`), v("PRERELEASELOOSE", `(?:-?(${i[c.PRERELEASEIDENTIFIERLOOSE]}(?:\\.${i[c.PRERELEASEIDENTIFIERLOOSE]})*))`), v("BUILDIDENTIFIER", `${O}+`), v("BUILD", `(?:\\+(${i[c.BUILDIDENTIFIER]}(?:\\.${i[c.BUILDIDENTIFIER]})*))`), v("FULLPLAIN", `v?${i[c.MAINVERSION]}${i[c.PRERELEASE]}?${i[c.BUILD]}?`), v("FULL", `^${i[c.FULLPLAIN]}$`), v("LOOSEPLAIN", `[v=\\s]*${i[c.MAINVERSIONLOOSE]}${i[c.PRERELEASELOOSE]}?${i[c.BUILD]}?`), v("LOOSE", `^${i[c.LOOSEPLAIN]}$`), v("GTLT", "((?:<|>)?=?)"), v("XRANGEIDENTIFIERLOOSE", `${i[c.NUMERICIDENTIFIERLOOSE]}|x|X|\\*`), v("XRANGEIDENTIFIER", `${i[c.NUMERICIDENTIFIER]}|x|X|\\*`), v("XRANGEPLAIN", `[v=\\s]*(${i[c.XRANGEIDENTIFIER]})(?:\\.(${i[c.XRANGEIDENTIFIER]})(?:\\.(${i[c.XRANGEIDENTIFIER]})(?:${i[c.PRERELEASE]})?${i[c.BUILD]}?)?)?`), v("XRANGEPLAINLOOSE", `[v=\\s]*(${i[c.XRANGEIDENTIFIERLOOSE]})(?:\\.(${i[c.XRANGEIDENTIFIERLOOSE]})(?:\\.(${i[c.XRANGEIDENTIFIERLOOSE]})(?:${i[c.PRERELEASELOOSE]})?${i[c.BUILD]}?)?)?`), v("XRANGE", `^${i[c.GTLT]}\\s*${i[c.XRANGEPLAIN]}$`), v("XRANGELOOSE", `^${i[c.GTLT]}\\s*${i[c.XRANGEPLAINLOOSE]}$`), v("COERCEPLAIN", `(^|[^\\d])(\\d{1,${o}})(?:\\.(\\d{1,${o}}))?(?:\\.(\\d{1,${o}}))?`), v("COERCE", `${i[c.COERCEPLAIN]}(?:$|[^\\d])`), v("COERCEFULL", i[c.COERCEPLAIN] + `(?:${i[c.PRERELEASE]})?(?:${i[c.BUILD]})?(?:$|[^\\d])`), v("COERCERTL", i[c.COERCE], !0), v("COERCERTLFULL", i[c.COERCEFULL], !0), v("LONETILDE", "(?:~>?)"), v("TILDETRIM", `(\\s*)${i[c.LONETILDE]}\\s+`, !0), e.tildeTrimReplace = "$1~", v("TILDE", `^${i[c.LONETILDE]}${i[c.XRANGEPLAIN]}$`), v("TILDELOOSE", `^${i[c.LONETILDE]}${i[c.XRANGEPLAINLOOSE]}$`), v("LONECARET", "(?:\\^)"), v("CARETTRIM", `(\\s*)${i[c.LONECARET]}\\s+`, !0), e.caretTrimReplace = "$1^", v("CARET", `^${i[c.LONECARET]}${i[c.XRANGEPLAIN]}$`), v("CARETLOOSE", `^${i[c.LONECARET]}${i[c.XRANGEPLAINLOOSE]}$`), v("COMPARATORLOOSE", `^${i[c.GTLT]}\\s*(${i[c.LOOSEPLAIN]})$|^$`), v("COMPARATOR", `^${i[c.GTLT]}\\s*(${i[c.FULLPLAIN]})$|^$`), v("COMPARATORTRIM", `(\\s*)${i[c.GTLT]}\\s*(${i[c.LOOSEPLAIN]}|${i[c.XRANGEPLAIN]})`, !0), e.comparatorTrimReplace = "$1$2$3", v("HYPHENRANGE", `^\\s*(${i[c.XRANGEPLAIN]})\\s+-\\s+(${i[c.XRANGEPLAIN]})\\s*$`), v("HYPHENRANGELOOSE", `^\\s*(${i[c.XRANGEPLAINLOOSE]})\\s+-\\s+(${i[c.XRANGEPLAINLOOSE]})\\s*$`), v("STAR", "(<|>)?=?\\s*\\*"), v("GTE0", "^\\s*>=\\s*0\\.0\\.0\\s*$"), v("GTE0PRE", "^\\s*>=\\s*0\\.0\\.0-0\\s*$");
})(Nt, Nt.exports);
var qe = Nt.exports;
const fl = Object.freeze({ loose: !0 }), ml = Object.freeze({}), pl = (t) => t ? typeof t != "object" ? fl : t : ml;
var $t = pl;
const ur = /^[0-9]+$/, no = (t, e) => {
  const o = ur.test(t), r = ur.test(e);
  return o && r && (t = +t, e = +e), t === e ? 0 : o && !r ? -1 : r && !o ? 1 : t < e ? -1 : 1;
}, hl = (t, e) => no(e, t);
var lo = {
  compareIdentifiers: no,
  rcompareIdentifiers: hl
};
const Xe = at, { MAX_LENGTH: dr, MAX_SAFE_INTEGER: Ye } = it, { safeRe: fr, safeSrc: mr, t: ze } = qe, gl = $t, { compareIdentifiers: Ce } = lo;
let El = class me {
  constructor(e, o) {
    if (o = gl(o), e instanceof me) {
      if (e.loose === !!o.loose && e.includePrerelease === !!o.includePrerelease)
        return e;
      e = e.version;
    } else if (typeof e != "string")
      throw new TypeError(`Invalid version. Must be a string. Got type "${typeof e}".`);
    if (e.length > dr)
      throw new TypeError(
        `version is longer than ${dr} characters`
      );
    Xe("SemVer", e, o), this.options = o, this.loose = !!o.loose, this.includePrerelease = !!o.includePrerelease;
    const r = e.trim().match(o.loose ? fr[ze.LOOSE] : fr[ze.FULL]);
    if (!r)
      throw new TypeError(`Invalid Version: ${e}`);
    if (this.raw = e, this.major = +r[1], this.minor = +r[2], this.patch = +r[3], this.major > Ye || this.major < 0)
      throw new TypeError("Invalid major version");
    if (this.minor > Ye || this.minor < 0)
      throw new TypeError("Invalid minor version");
    if (this.patch > Ye || this.patch < 0)
      throw new TypeError("Invalid patch version");
    r[4] ? this.prerelease = r[4].split(".").map((n) => {
      if (/^[0-9]+$/.test(n)) {
        const l = +n;
        if (l >= 0 && l < Ye)
          return l;
      }
      return n;
    }) : this.prerelease = [], this.build = r[5] ? r[5].split(".") : [], this.format();
  }
  format() {
    return this.version = `${this.major}.${this.minor}.${this.patch}`, this.prerelease.length && (this.version += `-${this.prerelease.join(".")}`), this.version;
  }
  toString() {
    return this.version;
  }
  compare(e) {
    if (Xe("SemVer.compare", this.version, this.options, e), !(e instanceof me)) {
      if (typeof e == "string" && e === this.version)
        return 0;
      e = new me(e, this.options);
    }
    return e.version === this.version ? 0 : this.compareMain(e) || this.comparePre(e);
  }
  compareMain(e) {
    return e instanceof me || (e = new me(e, this.options)), Ce(this.major, e.major) || Ce(this.minor, e.minor) || Ce(this.patch, e.patch);
  }
  comparePre(e) {
    if (e instanceof me || (e = new me(e, this.options)), this.prerelease.length && !e.prerelease.length)
      return -1;
    if (!this.prerelease.length && e.prerelease.length)
      return 1;
    if (!this.prerelease.length && !e.prerelease.length)
      return 0;
    let o = 0;
    do {
      const r = this.prerelease[o], n = e.prerelease[o];
      if (Xe("prerelease compare", o, r, n), r === void 0 && n === void 0)
        return 0;
      if (n === void 0)
        return 1;
      if (r === void 0)
        return -1;
      if (r === n)
        continue;
      return Ce(r, n);
    } while (++o);
  }
  compareBuild(e) {
    e instanceof me || (e = new me(e, this.options));
    let o = 0;
    do {
      const r = this.build[o], n = e.build[o];
      if (Xe("build compare", o, r, n), r === void 0 && n === void 0)
        return 0;
      if (n === void 0)
        return 1;
      if (r === void 0)
        return -1;
      if (r === n)
        continue;
      return Ce(r, n);
    } while (++o);
  }
  // preminor will bump the version up to the next minor release, and immediately
  // down to pre-release. premajor and prepatch work the same way.
  inc(e, o, r) {
    if (e.startsWith("pre")) {
      if (!o && r === !1)
        throw new Error("invalid increment argument: identifier is empty");
      if (o) {
        const n = new RegExp(`^${this.options.loose ? mr[ze.PRERELEASELOOSE] : mr[ze.PRERELEASE]}$`), l = `-${o}`.match(n);
        if (!l || l[1] !== o)
          throw new Error(`invalid identifier: ${o}`);
      }
    }
    switch (e) {
      case "premajor":
        this.prerelease.length = 0, this.patch = 0, this.minor = 0, this.major++, this.inc("pre", o, r);
        break;
      case "preminor":
        this.prerelease.length = 0, this.patch = 0, this.minor++, this.inc("pre", o, r);
        break;
      case "prepatch":
        this.prerelease.length = 0, this.inc("patch", o, r), this.inc("pre", o, r);
        break;
      // If the input is a non-prerelease version, this acts the same as
      // prepatch.
      case "prerelease":
        this.prerelease.length === 0 && this.inc("patch", o, r), this.inc("pre", o, r);
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
        const n = Number(r) ? 1 : 0;
        if (this.prerelease.length === 0)
          this.prerelease = [n];
        else {
          let l = this.prerelease.length;
          for (; --l >= 0; )
            typeof this.prerelease[l] == "number" && (this.prerelease[l]++, l = -2);
          if (l === -1) {
            if (o === this.prerelease.join(".") && r === !1)
              throw new Error("invalid increment argument: identifier already exists");
            this.prerelease.push(n);
          }
        }
        if (o) {
          let l = [o, n];
          r === !1 && (l = [o]), Ce(this.prerelease[0], o) === 0 ? isNaN(this.prerelease[1]) && (this.prerelease = l) : this.prerelease = l;
        }
        break;
      }
      default:
        throw new Error(`invalid increment argument: ${e}`);
    }
    return this.raw = this.format(), this.build.length && (this.raw += `+${this.build.join(".")}`), this;
  }
};
var oe = El;
const pr = oe, Sl = (t, e, o = !1) => {
  if (t instanceof pr)
    return t;
  try {
    return new pr(t, e);
  } catch (r) {
    if (!o)
      return null;
    throw r;
  }
};
var De = Sl;
const yl = De, vl = (t, e) => {
  const o = yl(t, e);
  return o ? o.version : null;
};
var bl = vl;
const xl = De, wl = (t, e) => {
  const o = xl(t.trim().replace(/^[=v]+/, ""), e);
  return o ? o.version : null;
};
var Ol = wl;
const hr = oe, Ll = (t, e, o, r, n) => {
  typeof o == "string" && (n = r, r = o, o = void 0);
  try {
    return new hr(
      t instanceof hr ? t.version : t,
      o
    ).inc(e, r, n).version;
  } catch {
    return null;
  }
};
var Tl = Ll;
const gr = De, Cl = (t, e) => {
  const o = gr(t, null, !0), r = gr(e, null, !0), n = o.compare(r);
  if (n === 0)
    return null;
  const l = n > 0, s = l ? o : r, a = l ? r : o, i = !!s.prerelease.length;
  if (!!a.prerelease.length && !i) {
    if (!a.patch && !a.minor)
      return "major";
    if (a.compareMain(s) === 0)
      return a.minor && !a.patch ? "minor" : "patch";
  }
  const c = i ? "pre" : "";
  return o.major !== r.major ? c + "major" : o.minor !== r.minor ? c + "minor" : o.patch !== r.patch ? c + "patch" : "prerelease";
};
var Nl = Cl;
const Rl = oe, Al = (t, e) => new Rl(t, e).major;
var Il = Al;
const _l = oe, Dl = (t, e) => new _l(t, e).minor;
var Ml = Dl;
const Vl = oe, Pl = (t, e) => new Vl(t, e).patch;
var Ul = Pl;
const Fl = De, jl = (t, e) => {
  const o = Fl(t, e);
  return o && o.prerelease.length ? o.prerelease : null;
};
var $l = jl;
const Er = oe, Gl = (t, e, o) => new Er(t, o).compare(new Er(e, o));
var ce = Gl;
const ql = ce, Bl = (t, e, o) => ql(e, t, o);
var kl = Bl;
const Xl = ce, Yl = (t, e) => Xl(t, e, !0);
var zl = Yl;
const Sr = oe, Jl = (t, e, o) => {
  const r = new Sr(t, o), n = new Sr(e, o);
  return r.compare(n) || r.compareBuild(n);
};
var Gt = Jl;
const Hl = Gt, Wl = (t, e) => t.sort((o, r) => Hl(o, r, e));
var Kl = Wl;
const Zl = Gt, Ql = (t, e) => t.sort((o, r) => Zl(r, o, e));
var ei = Ql;
const ti = ce, ri = (t, e, o) => ti(t, e, o) > 0;
var st = ri;
const oi = ce, ni = (t, e, o) => oi(t, e, o) < 0;
var qt = ni;
const li = ce, ii = (t, e, o) => li(t, e, o) === 0;
var io = ii;
const ai = ce, si = (t, e, o) => ai(t, e, o) !== 0;
var ao = si;
const ci = ce, ui = (t, e, o) => ci(t, e, o) >= 0;
var Bt = ui;
const di = ce, fi = (t, e, o) => di(t, e, o) <= 0;
var kt = fi;
const mi = io, pi = ao, hi = st, gi = Bt, Ei = qt, Si = kt, yi = (t, e, o, r) => {
  switch (e) {
    case "===":
      return typeof t == "object" && (t = t.version), typeof o == "object" && (o = o.version), t === o;
    case "!==":
      return typeof t == "object" && (t = t.version), typeof o == "object" && (o = o.version), t !== o;
    case "":
    case "=":
    case "==":
      return mi(t, o, r);
    case "!=":
      return pi(t, o, r);
    case ">":
      return hi(t, o, r);
    case ">=":
      return gi(t, o, r);
    case "<":
      return Ei(t, o, r);
    case "<=":
      return Si(t, o, r);
    default:
      throw new TypeError(`Invalid operator: ${e}`);
  }
};
var so = yi;
const vi = oe, bi = De, { safeRe: Je, t: He } = qe, xi = (t, e) => {
  if (t instanceof vi)
    return t;
  if (typeof t == "number" && (t = String(t)), typeof t != "string")
    return null;
  e = e || {};
  let o = null;
  if (!e.rtl)
    o = t.match(e.includePrerelease ? Je[He.COERCEFULL] : Je[He.COERCE]);
  else {
    const i = e.includePrerelease ? Je[He.COERCERTLFULL] : Je[He.COERCERTL];
    let u;
    for (; (u = i.exec(t)) && (!o || o.index + o[0].length !== t.length); )
      (!o || u.index + u[0].length !== o.index + o[0].length) && (o = u), i.lastIndex = u.index + u[1].length + u[2].length;
    i.lastIndex = -1;
  }
  if (o === null)
    return null;
  const r = o[2], n = o[3] || "0", l = o[4] || "0", s = e.includePrerelease && o[5] ? `-${o[5]}` : "", a = e.includePrerelease && o[6] ? `+${o[6]}` : "";
  return bi(`${r}.${n}.${l}${s}${a}`, e);
};
var wi = xi;
class Oi {
  constructor() {
    this.max = 1e3, this.map = /* @__PURE__ */ new Map();
  }
  get(e) {
    const o = this.map.get(e);
    if (o !== void 0)
      return this.map.delete(e), this.map.set(e, o), o;
  }
  delete(e) {
    return this.map.delete(e);
  }
  set(e, o) {
    if (!this.delete(e) && o !== void 0) {
      if (this.map.size >= this.max) {
        const n = this.map.keys().next().value;
        this.delete(n);
      }
      this.map.set(e, o);
    }
    return this;
  }
}
var Li = Oi, Et, yr;
function ue() {
  if (yr) return Et;
  yr = 1;
  const t = /\s+/g;
  class e {
    constructor(E, y) {
      if (y = n(y), E instanceof e)
        return E.loose === !!y.loose && E.includePrerelease === !!y.includePrerelease ? E : new e(E.raw, y);
      if (E instanceof l)
        return this.raw = E.value, this.set = [[E]], this.formatted = void 0, this;
      if (this.options = y, this.loose = !!y.loose, this.includePrerelease = !!y.includePrerelease, this.raw = E.trim().replace(t, " "), this.set = this.raw.split("||").map((L) => this.parseRange(L.trim())).filter((L) => L.length), !this.set.length)
        throw new TypeError(`Invalid SemVer Range: ${this.raw}`);
      if (this.set.length > 1) {
        const L = this.set[0];
        if (this.set = this.set.filter((A) => !v(A[0])), this.set.length === 0)
          this.set = [L];
        else if (this.set.length > 1) {
          for (const A of this.set)
            if (A.length === 1 && D(A[0])) {
              this.set = [A];
              break;
            }
        }
      }
      this.formatted = void 0;
    }
    get range() {
      if (this.formatted === void 0) {
        this.formatted = "";
        for (let E = 0; E < this.set.length; E++) {
          E > 0 && (this.formatted += "||");
          const y = this.set[E];
          for (let L = 0; L < y.length; L++)
            L > 0 && (this.formatted += " "), this.formatted += y[L].toString().trim();
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
    parseRange(E) {
      const L = ((this.options.includePrerelease && g) | (this.options.loose && T)) + ":" + E, A = r.get(L);
      if (A)
        return A;
      const R = this.options.loose, P = R ? i[u.HYPHENRANGELOOSE] : i[u.HYPHENRANGE];
      E = E.replace(P, Y(this.options.includePrerelease)), s("hyphen replace", E), E = E.replace(i[u.COMPARATORTRIM], c), s("comparator trim", E), E = E.replace(i[u.TILDETRIM], S), s("tilde trim", E), E = E.replace(i[u.CARETTRIM], O), s("caret trim", E);
      let U = E.split(" ").map((W) => d(W, this.options)).join(" ").split(/\s+/).map((W) => G(W, this.options));
      R && (U = U.filter((W) => (s("loose invalid filter", W, this.options), !!W.match(i[u.COMPARATORLOOSE])))), s("range list", U);
      const V = /* @__PURE__ */ new Map(), H = U.map((W) => new l(W, this.options));
      for (const W of H) {
        if (v(W))
          return [W];
        V.set(W.value, W);
      }
      V.size > 1 && V.has("") && V.delete("");
      const te = [...V.values()];
      return r.set(L, te), te;
    }
    intersects(E, y) {
      if (!(E instanceof e))
        throw new TypeError("a Range is required");
      return this.set.some((L) => m(L, y) && E.set.some((A) => m(A, y) && L.every((R) => A.every((P) => R.intersects(P, y)))));
    }
    // if ANY of the sets match ALL of its comparators, then pass
    test(E) {
      if (!E)
        return !1;
      if (typeof E == "string")
        try {
          E = new a(E, this.options);
        } catch {
          return !1;
        }
      for (let y = 0; y < this.set.length; y++)
        if (q(this.set[y], E, this.options))
          return !0;
      return !1;
    }
  }
  Et = e;
  const o = Li, r = new o(), n = $t, l = ct(), s = at, a = oe, {
    safeRe: i,
    t: u,
    comparatorTrimReplace: c,
    tildeTrimReplace: S,
    caretTrimReplace: O
  } = qe, { FLAG_INCLUDE_PRERELEASE: g, FLAG_LOOSE: T } = it, v = (w) => w.value === "<0.0.0-0", D = (w) => w.value === "", m = (w, E) => {
    let y = !0;
    const L = w.slice();
    let A = L.pop();
    for (; y && L.length; )
      y = L.every((R) => A.intersects(R, E)), A = L.pop();
    return y;
  }, d = (w, E) => (s("comp", w, E), w = I(w, E), s("caret", w), w = x(w, E), s("tildes", w), w = _(w, E), s("xrange", w), w = b(w, E), s("stars", w), w), h = (w) => !w || w.toLowerCase() === "x" || w === "*", x = (w, E) => w.trim().split(/\s+/).map((y) => N(y, E)).join(" "), N = (w, E) => {
    const y = E.loose ? i[u.TILDELOOSE] : i[u.TILDE];
    return w.replace(y, (L, A, R, P, U) => {
      s("tilde", w, L, A, R, P, U);
      let V;
      return h(A) ? V = "" : h(R) ? V = `>=${A}.0.0 <${+A + 1}.0.0-0` : h(P) ? V = `>=${A}.${R}.0 <${A}.${+R + 1}.0-0` : U ? (s("replaceTilde pr", U), V = `>=${A}.${R}.${P}-${U} <${A}.${+R + 1}.0-0`) : V = `>=${A}.${R}.${P} <${A}.${+R + 1}.0-0`, s("tilde return", V), V;
    });
  }, I = (w, E) => w.trim().split(/\s+/).map((y) => C(y, E)).join(" "), C = (w, E) => {
    s("caret", w, E);
    const y = E.loose ? i[u.CARETLOOSE] : i[u.CARET], L = E.includePrerelease ? "-0" : "";
    return w.replace(y, (A, R, P, U, V) => {
      s("caret", w, A, R, P, U, V);
      let H;
      return h(R) ? H = "" : h(P) ? H = `>=${R}.0.0${L} <${+R + 1}.0.0-0` : h(U) ? R === "0" ? H = `>=${R}.${P}.0${L} <${R}.${+P + 1}.0-0` : H = `>=${R}.${P}.0${L} <${+R + 1}.0.0-0` : V ? (s("replaceCaret pr", V), R === "0" ? P === "0" ? H = `>=${R}.${P}.${U}-${V} <${R}.${P}.${+U + 1}-0` : H = `>=${R}.${P}.${U}-${V} <${R}.${+P + 1}.0-0` : H = `>=${R}.${P}.${U}-${V} <${+R + 1}.0.0-0`) : (s("no pr"), R === "0" ? P === "0" ? H = `>=${R}.${P}.${U}${L} <${R}.${P}.${+U + 1}-0` : H = `>=${R}.${P}.${U}${L} <${R}.${+P + 1}.0-0` : H = `>=${R}.${P}.${U} <${+R + 1}.0.0-0`), s("caret return", H), H;
    });
  }, _ = (w, E) => (s("replaceXRanges", w, E), w.split(/\s+/).map((y) => $(y, E)).join(" ")), $ = (w, E) => {
    w = w.trim();
    const y = E.loose ? i[u.XRANGELOOSE] : i[u.XRANGE];
    return w.replace(y, (L, A, R, P, U, V) => {
      s("xRange", w, L, A, R, P, U, V);
      const H = h(R), te = H || h(P), W = te || h(U), xe = W;
      return A === "=" && xe && (A = ""), V = E.includePrerelease ? "-0" : "", H ? A === ">" || A === "<" ? L = "<0.0.0-0" : L = "*" : A && xe ? (te && (P = 0), U = 0, A === ">" ? (A = ">=", te ? (R = +R + 1, P = 0, U = 0) : (P = +P + 1, U = 0)) : A === "<=" && (A = "<", te ? R = +R + 1 : P = +P + 1), A === "<" && (V = "-0"), L = `${A + R}.${P}.${U}${V}`) : te ? L = `>=${R}.0.0${V} <${+R + 1}.0.0-0` : W && (L = `>=${R}.${P}.0${V} <${R}.${+P + 1}.0-0`), s("xRange return", L), L;
    });
  }, b = (w, E) => (s("replaceStars", w, E), w.trim().replace(i[u.STAR], "")), G = (w, E) => (s("replaceGTE0", w, E), w.trim().replace(i[E.includePrerelease ? u.GTE0PRE : u.GTE0], "")), Y = (w) => (E, y, L, A, R, P, U, V, H, te, W, xe) => (h(L) ? y = "" : h(A) ? y = `>=${L}.0.0${w ? "-0" : ""}` : h(R) ? y = `>=${L}.${A}.0${w ? "-0" : ""}` : P ? y = `>=${y}` : y = `>=${y}${w ? "-0" : ""}`, h(H) ? V = "" : h(te) ? V = `<${+H + 1}.0.0-0` : h(W) ? V = `<${H}.${+te + 1}.0-0` : xe ? V = `<=${H}.${te}.${W}-${xe}` : w ? V = `<${H}.${te}.${+W + 1}-0` : V = `<=${V}`, `${y} ${V}`.trim()), q = (w, E, y) => {
    for (let L = 0; L < w.length; L++)
      if (!w[L].test(E))
        return !1;
    if (E.prerelease.length && !y.includePrerelease) {
      for (let L = 0; L < w.length; L++)
        if (s(w[L].semver), w[L].semver !== l.ANY && w[L].semver.prerelease.length > 0) {
          const A = w[L].semver;
          if (A.major === E.major && A.minor === E.minor && A.patch === E.patch)
            return !0;
        }
      return !1;
    }
    return !0;
  };
  return Et;
}
var St, vr;
function ct() {
  if (vr) return St;
  vr = 1;
  const t = Symbol("SemVer ANY");
  class e {
    static get ANY() {
      return t;
    }
    constructor(c, S) {
      if (S = o(S), c instanceof e) {
        if (c.loose === !!S.loose)
          return c;
        c = c.value;
      }
      c = c.trim().split(/\s+/).join(" "), s("comparator", c, S), this.options = S, this.loose = !!S.loose, this.parse(c), this.semver === t ? this.value = "" : this.value = this.operator + this.semver.version, s("comp", this);
    }
    parse(c) {
      const S = this.options.loose ? r[n.COMPARATORLOOSE] : r[n.COMPARATOR], O = c.match(S);
      if (!O)
        throw new TypeError(`Invalid comparator: ${c}`);
      this.operator = O[1] !== void 0 ? O[1] : "", this.operator === "=" && (this.operator = ""), O[2] ? this.semver = new a(O[2], this.options.loose) : this.semver = t;
    }
    toString() {
      return this.value;
    }
    test(c) {
      if (s("Comparator.test", c, this.options.loose), this.semver === t || c === t)
        return !0;
      if (typeof c == "string")
        try {
          c = new a(c, this.options);
        } catch {
          return !1;
        }
      return l(c, this.operator, this.semver, this.options);
    }
    intersects(c, S) {
      if (!(c instanceof e))
        throw new TypeError("a Comparator is required");
      return this.operator === "" ? this.value === "" ? !0 : new i(c.value, S).test(this.value) : c.operator === "" ? c.value === "" ? !0 : new i(this.value, S).test(c.semver) : (S = o(S), S.includePrerelease && (this.value === "<0.0.0-0" || c.value === "<0.0.0-0") || !S.includePrerelease && (this.value.startsWith("<0.0.0") || c.value.startsWith("<0.0.0")) ? !1 : !!(this.operator.startsWith(">") && c.operator.startsWith(">") || this.operator.startsWith("<") && c.operator.startsWith("<") || this.semver.version === c.semver.version && this.operator.includes("=") && c.operator.includes("=") || l(this.semver, "<", c.semver, S) && this.operator.startsWith(">") && c.operator.startsWith("<") || l(this.semver, ">", c.semver, S) && this.operator.startsWith("<") && c.operator.startsWith(">")));
    }
  }
  St = e;
  const o = $t, { safeRe: r, t: n } = qe, l = so, s = at, a = oe, i = ue();
  return St;
}
const Ti = ue(), Ci = (t, e, o) => {
  try {
    e = new Ti(e, o);
  } catch {
    return !1;
  }
  return e.test(t);
};
var ut = Ci;
const Ni = ue(), Ri = (t, e) => new Ni(t, e).set.map((o) => o.map((r) => r.value).join(" ").trim().split(" "));
var Ai = Ri;
const Ii = oe, _i = ue(), Di = (t, e, o) => {
  let r = null, n = null, l = null;
  try {
    l = new _i(e, o);
  } catch {
    return null;
  }
  return t.forEach((s) => {
    l.test(s) && (!r || n.compare(s) === -1) && (r = s, n = new Ii(r, o));
  }), r;
};
var Mi = Di;
const Vi = oe, Pi = ue(), Ui = (t, e, o) => {
  let r = null, n = null, l = null;
  try {
    l = new Pi(e, o);
  } catch {
    return null;
  }
  return t.forEach((s) => {
    l.test(s) && (!r || n.compare(s) === 1) && (r = s, n = new Vi(r, o));
  }), r;
};
var Fi = Ui;
const yt = oe, ji = ue(), br = st, $i = (t, e) => {
  t = new ji(t, e);
  let o = new yt("0.0.0");
  if (t.test(o) || (o = new yt("0.0.0-0"), t.test(o)))
    return o;
  o = null;
  for (let r = 0; r < t.set.length; ++r) {
    const n = t.set[r];
    let l = null;
    n.forEach((s) => {
      const a = new yt(s.semver.version);
      switch (s.operator) {
        case ">":
          a.prerelease.length === 0 ? a.patch++ : a.prerelease.push(0), a.raw = a.format();
        /* fallthrough */
        case "":
        case ">=":
          (!l || br(a, l)) && (l = a);
          break;
        case "<":
        case "<=":
          break;
        /* istanbul ignore next */
        default:
          throw new Error(`Unexpected operation: ${s.operator}`);
      }
    }), l && (!o || br(o, l)) && (o = l);
  }
  return o && t.test(o) ? o : null;
};
var Gi = $i;
const qi = ue(), Bi = (t, e) => {
  try {
    return new qi(t, e).range || "*";
  } catch {
    return null;
  }
};
var ki = Bi;
const Xi = oe, co = ct(), { ANY: Yi } = co, zi = ue(), Ji = ut, xr = st, wr = qt, Hi = kt, Wi = Bt, Ki = (t, e, o, r) => {
  t = new Xi(t, r), e = new zi(e, r);
  let n, l, s, a, i;
  switch (o) {
    case ">":
      n = xr, l = Hi, s = wr, a = ">", i = ">=";
      break;
    case "<":
      n = wr, l = Wi, s = xr, a = "<", i = "<=";
      break;
    default:
      throw new TypeError('Must provide a hilo val of "<" or ">"');
  }
  if (Ji(t, e, r))
    return !1;
  for (let u = 0; u < e.set.length; ++u) {
    const c = e.set[u];
    let S = null, O = null;
    if (c.forEach((g) => {
      g.semver === Yi && (g = new co(">=0.0.0")), S = S || g, O = O || g, n(g.semver, S.semver, r) ? S = g : s(g.semver, O.semver, r) && (O = g);
    }), S.operator === a || S.operator === i || (!O.operator || O.operator === a) && l(t, O.semver))
      return !1;
    if (O.operator === i && s(t, O.semver))
      return !1;
  }
  return !0;
};
var Xt = Ki;
const Zi = Xt, Qi = (t, e, o) => Zi(t, e, ">", o);
var ea = Qi;
const ta = Xt, ra = (t, e, o) => ta(t, e, "<", o);
var oa = ra;
const Or = ue(), na = (t, e, o) => (t = new Or(t, o), e = new Or(e, o), t.intersects(e, o));
var la = na;
const ia = ut, aa = ce;
var sa = (t, e, o) => {
  const r = [];
  let n = null, l = null;
  const s = t.sort((c, S) => aa(c, S, o));
  for (const c of s)
    ia(c, e, o) ? (l = c, n || (n = c)) : (l && r.push([n, l]), l = null, n = null);
  n && r.push([n, null]);
  const a = [];
  for (const [c, S] of r)
    c === S ? a.push(c) : !S && c === s[0] ? a.push("*") : S ? c === s[0] ? a.push(`<=${S}`) : a.push(`${c} - ${S}`) : a.push(`>=${c}`);
  const i = a.join(" || "), u = typeof e.raw == "string" ? e.raw : String(e);
  return i.length < u.length ? i : e;
};
const Lr = ue(), Yt = ct(), { ANY: vt } = Yt, Me = ut, zt = ce, ca = (t, e, o = {}) => {
  if (t === e)
    return !0;
  t = new Lr(t, o), e = new Lr(e, o);
  let r = !1;
  e: for (const n of t.set) {
    for (const l of e.set) {
      const s = da(n, l, o);
      if (r = r || s !== null, s)
        continue e;
    }
    if (r)
      return !1;
  }
  return !0;
}, ua = [new Yt(">=0.0.0-0")], Tr = [new Yt(">=0.0.0")], da = (t, e, o) => {
  if (t === e)
    return !0;
  if (t.length === 1 && t[0].semver === vt) {
    if (e.length === 1 && e[0].semver === vt)
      return !0;
    o.includePrerelease ? t = ua : t = Tr;
  }
  if (e.length === 1 && e[0].semver === vt) {
    if (o.includePrerelease)
      return !0;
    e = Tr;
  }
  const r = /* @__PURE__ */ new Set();
  let n, l;
  for (const g of t)
    g.operator === ">" || g.operator === ">=" ? n = Cr(n, g, o) : g.operator === "<" || g.operator === "<=" ? l = Nr(l, g, o) : r.add(g.semver);
  if (r.size > 1)
    return null;
  let s;
  if (n && l) {
    if (s = zt(n.semver, l.semver, o), s > 0)
      return null;
    if (s === 0 && (n.operator !== ">=" || l.operator !== "<="))
      return null;
  }
  for (const g of r) {
    if (n && !Me(g, String(n), o) || l && !Me(g, String(l), o))
      return null;
    for (const T of e)
      if (!Me(g, String(T), o))
        return !1;
    return !0;
  }
  let a, i, u, c, S = l && !o.includePrerelease && l.semver.prerelease.length ? l.semver : !1, O = n && !o.includePrerelease && n.semver.prerelease.length ? n.semver : !1;
  S && S.prerelease.length === 1 && l.operator === "<" && S.prerelease[0] === 0 && (S = !1);
  for (const g of e) {
    if (c = c || g.operator === ">" || g.operator === ">=", u = u || g.operator === "<" || g.operator === "<=", n) {
      if (O && g.semver.prerelease && g.semver.prerelease.length && g.semver.major === O.major && g.semver.minor === O.minor && g.semver.patch === O.patch && (O = !1), g.operator === ">" || g.operator === ">=") {
        if (a = Cr(n, g, o), a === g && a !== n)
          return !1;
      } else if (n.operator === ">=" && !Me(n.semver, String(g), o))
        return !1;
    }
    if (l) {
      if (S && g.semver.prerelease && g.semver.prerelease.length && g.semver.major === S.major && g.semver.minor === S.minor && g.semver.patch === S.patch && (S = !1), g.operator === "<" || g.operator === "<=") {
        if (i = Nr(l, g, o), i === g && i !== l)
          return !1;
      } else if (l.operator === "<=" && !Me(l.semver, String(g), o))
        return !1;
    }
    if (!g.operator && (l || n) && s !== 0)
      return !1;
  }
  return !(n && u && !l && s !== 0 || l && c && !n && s !== 0 || O || S);
}, Cr = (t, e, o) => {
  if (!t)
    return e;
  const r = zt(t.semver, e.semver, o);
  return r > 0 ? t : r < 0 || e.operator === ">" && t.operator === ">=" ? e : t;
}, Nr = (t, e, o) => {
  if (!t)
    return e;
  const r = zt(t.semver, e.semver, o);
  return r < 0 ? t : r > 0 || e.operator === "<" && t.operator === "<=" ? e : t;
};
var fa = ca;
const bt = qe, Rr = it, ma = oe, Ar = lo, pa = De, ha = bl, ga = Ol, Ea = Tl, Sa = Nl, ya = Il, va = Ml, ba = Ul, xa = $l, wa = ce, Oa = kl, La = zl, Ta = Gt, Ca = Kl, Na = ei, Ra = st, Aa = qt, Ia = io, _a = ao, Da = Bt, Ma = kt, Va = so, Pa = wi, Ua = ct(), Fa = ue(), ja = ut, $a = Ai, Ga = Mi, qa = Fi, Ba = Gi, ka = ki, Xa = Xt, Ya = ea, za = oa, Ja = la, Ha = sa, Wa = fa;
var Ka = {
  parse: pa,
  valid: ha,
  clean: ga,
  inc: Ea,
  diff: Sa,
  major: ya,
  minor: va,
  patch: ba,
  prerelease: xa,
  compare: wa,
  rcompare: Oa,
  compareLoose: La,
  compareBuild: Ta,
  sort: Ca,
  rsort: Na,
  gt: Ra,
  lt: Aa,
  eq: Ia,
  neq: _a,
  gte: Da,
  lte: Ma,
  cmp: Va,
  coerce: Pa,
  Comparator: Ua,
  Range: Fa,
  satisfies: ja,
  toComparators: $a,
  maxSatisfying: Ga,
  minSatisfying: qa,
  minVersion: Ba,
  validRange: ka,
  outside: Xa,
  gtr: Ya,
  ltr: za,
  intersects: Ja,
  simplifyRange: Ha,
  subset: Wa,
  SemVer: ma,
  re: bt.re,
  src: bt.src,
  tokens: bt.t,
  SEMVER_SPEC_VERSION: Rr.SEMVER_SPEC_VERSION,
  RELEASE_TYPES: Rr.RELEASE_TYPES,
  compareIdentifiers: Ar.compareIdentifiers,
  rcompareIdentifiers: Ar.rcompareIdentifiers
};
const Fe = {
  SINGLE_IMAGE: "singleImage",
  GEOJSON: "geojson",
  FEATURE_COLLECTION: "FeatureCollection"
};
function Za(t, e) {
  var n;
  const o = (n = t.extent) == null ? void 0 : n.getCoordinatesInProjection(Ot), r = e.getCoordinatesInProjection(Ot);
  return !o || !Rn(o, r) ? null : {
    type: Fe.SINGLE_IMAGE,
    opacity: t.opacity,
    extent: o,
    url: t.url
  };
}
function Qa(t) {
  let e = 1 / 0;
  const o = t.getStride();
  if (o > 2) {
    const r = t.getFlatCoordinates(), n = r.length;
    for (let l = 0; l < n; l += o) {
      const s = r[l + 2];
      e = s < e ? s : e;
    }
  }
  return e !== 1 / 0 ? e : 0;
}
async function Jt(t, e, o, r) {
  return Promise.all(
    t.map(async (n) => {
      const l = await ln(
        n,
        e,
        r
      ), s = an(l, {
        asObject: !0
      }), a = Qa(l.getGeometry());
      s.heightInfo = {
        ...sn(l, e),
        groundLevel: a
      };
      const i = e.getModel(l);
      i && (s.model = i);
      const u = t[cn] ?? o;
      return u instanceof $r ? s.style = u.getOptionsForFeature(l) : s.style = u.toJSON(), s;
    })
  );
}
async function es(t, e, o) {
  const r = t.plugins.getByKey("@vcmap/planning").version;
  if (Ka.satisfies(r, ">=6.0.0-0 <7.0.0", { includePrerelease: !0 })) {
    const [l] = t.maps.getByType(Ut.className), s = l.getScene();
    if (!s)
      return null;
    const a = await e.fetchFeatureCollection({
      bbox: o.getCoordinatesInProjection(Ot),
      asJson: !0
    }), i = nn(a);
    return i.features = await Jt(
      i.features,
      e.vectorProperties,
      e.style,
      s
    ), i;
  }
  return null;
}
async function ts(t, e, o) {
  const [r] = t.maps.getByType(Ut.className), n = r.getScene();
  if (!n)
    return null;
  const l = o.getCoordinatesInProjection(_e), s = e.getFeatures().filter(
    (i) => {
      var u;
      return ((u = i.getGeometry()) == null ? void 0 : u.intersectsExtent(l)) && !i[Yr];
    }
  ), a = await Jt(
    s,
    e.vectorProperties,
    e.style,
    n
  );
  return a.length === 0 ? null : {
    type: Fe.GEOJSON,
    features: a,
    vcsMeta: e.getVcsMeta(),
    style: e.style.toJSON()
  };
}
async function rs(t, e, o) {
  if (!e.tileProvider)
    return null;
  const [r] = t.maps.getByType(Ut.className), n = r.getScene();
  if (!n)
    return null;
  const l = (await e.tileProvider.getFeaturesForExtent(o)).filter(
    (a) => !a[Yr]
  ), s = await Jt(
    l,
    e.vectorProperties,
    e.style,
    n
  );
  return s.length === 0 ? null : {
    type: Fe.GEOJSON,
    features: s,
    vcsMeta: e.vectorProperties.getVcsMeta(),
    style: e.style.toJSON()
  };
}
async function os(t, e) {
  const { activeMap: o } = e.maps, r = [...e.layers].filter(
    (s) => s.active && s.isSupported(o) && s[en] !== tn
  ).map((s) => s instanceof rn ? Za(s, t) : s instanceof tt ? s.className === "PlanningFeatureStoreLayer" ? es(e, s, t) : ts(e, s, t) : s instanceof on ? rs(e, s, t) : null);
  return {
    baseLayers: (await Promise.all(r)).filter((s) => s ? s.type === Fe.GEOJSON || s.type === Fe.FEATURE_COLLECTION ? s.features.length > 0 : !0 : !1),
    hiddenObjects: [...e.hiddenObject].map((s) => s.id)
  };
}
class uo {
  /**
   * @param {AbstractResultOptions} options
   */
  constructor(e) {
    this.title = e.title, this.featureId = e.featureId, this.fileSize = e.fileSize;
  }
  /**
   * @abstract
   * @returns {Promise<void>}
   */
  // eslint-disable-next-line class-methods-use-this
  download() {
    return Promise.resolve();
  }
}
function ns(t) {
  return /jpe?g$/i.test(t) ? "image/jpeg" : /png$/i.test(t) ? "image/png" : /tiff?$/i.test(t) ? "image/tiff" : "";
}
function fo(t, e, o, r = "jpg") {
  ie(t, un), z(r, ["jpg", "jpeg", "png", "tif", "tiff"]), z(o, Number);
  const n = new dn(t.meta, {
    maxZoom: 0,
    minZoom: 0,
    scaleFactor: 4,
    hideLevels: 0
  });
  n.setImageName(t.name);
  const l = (
    /** @type {import("ol/source").TileImage} */
    n.layer.getSource()
  ), s = l.getTileGrid();
  if (!s)
    throw new Error("tileGrid not available");
  const a = l.getTileUrlFunction(), i = o ? s.getResolutions().indexOf(o) : s.getMaxZoom(), { size: u } = t.meta, c = document.createElement("canvas"), S = s.getTileSize(i), O = u.slice();
  o && (O[0] /= o, O[1] /= o), c.width = O[0], c.height = O[1];
  const g = c.getContext("2d"), T = [];
  let v = 0;
  return s.forEachTileCoord([0, 0, u[0], u[1]], i, (D) => {
    const m = new Image();
    fn(t.meta.url) || (m.crossOrigin = "anonymous"), T.push(
      new Promise((d, h) => {
        m.onload = () => {
          g.drawImage(
            m,
            0,
            0,
            S[0],
            S[1],
            D[1] * S[0],
            O[1] + D[2] * S[1],
            S[0],
            S[1]
          ), v += 1, e && (e.progress = Math.round(
            v * 100 / T.length
          )), d();
        }, m.onerror = h, m.src = a(D);
      })
    );
  }), new Promise((D, m) => {
    Promise.all(T).then(() => {
      c.toBlob((d) => {
        d ? (Vo(d, `${t.name}.${r}`), D()) : m(
          new Error(
            "Image conversion failed. If using Firefox try using Chrome or Edge."
          )
        ), e.progress = 0;
      }, ns(r));
    }).catch((d) => {
      m(d), e.progress = 0;
    });
  });
}
class ls extends uo {
  /**
   * @param {ObliqueResultOptions} options
   * @param {import("@vcmap/core").VcsApp} app
   */
  constructor(e, o) {
    super(e), this.obliqueCollectionName = e.obliqueCollectionName, this.imageName = e.imageName, this.fileExtension = e.fileExtension, this.resolution = e.resolution, this.downloadState = e.downloadState, this._app = o;
  }
  download() {
    const o = this._app.obliqueCollections.getByKey(
      this.obliqueCollectionName
    ).getImageByName(this.imageName);
    return fo(
      o,
      this.downloadState,
      this.resolution,
      this.fileExtension
    );
  }
}
async function mo(t, e) {
  const o = t[mn];
  if (o) {
    const r = o.clone(), n = (
      /** @type {import("@vcmap/core").ObliqueMap} */
      e.maps.activeMap
    );
    if (n.currentImage)
      return pn(
        o,
        r,
        n.currentImage
      );
  }
  return null;
}
function is(t, e, o) {
  const { currentImage: r } = (
    /** @type {import("@vcmap/core").ObliqueMap} */
    t.maps.activeMap
  );
  if (r)
    if (e.dedicatedSource)
      Fr(
        e.getUriForImage(r.name),
        `${r.name}.${e.fileExtension}`
      );
    else
      return o.progress = 0, fo(
        r,
        o,
        e.resolution,
        e.fileExtension
      );
  return Promise.resolve();
}
function as(t) {
  return t < 1e3 ? `${t} kB` : t < 1e3 * 1e3 ? `${t / 1e3} MB` : `${t / (1e3 * 1e3)} GB`;
}
async function po(t, e, o) {
  const r = e.maps.activeMap instanceof Ft ? await mo(t, e) : t.getGeometry();
  if (!r || !(r instanceof An) || r.getArea() === 0)
    throw new Error("export.validation.polygonFeature");
  if (o != null && In(r) > o)
    throw new Error("export.validation.polygonFeatureArea");
  return r;
}
async function ss(t, e, o, r, n) {
  var A;
  const {
    selectedCrs: l,
    selectedExportFormats: s,
    selectedThematicClasses: a,
    selectedLod: i,
    textureExport: u,
    localCoordinates: c,
    tiledExport: S,
    genericAttributes: O,
    selectedAppearanceTheme: g,
    terrainExport: T,
    selectedHeightMode: v,
    selectedTerrainAppearanceLayer: D
  } = e.settingsCityModel, {
    email: m,
    exportName: d,
    description: h,
    selectedSelectionType: x,
    selectedObjects: N
  } = e, {
    terrainUrl: I,
    terrainZoomLevel: C,
    terrainAppearanceOptions: _,
    exportScene: $,
    dataProjection: b,
    fmeSecurityToken: G,
    fmeServerUrl: Y
  } = t.settingsCityModel, { maxSelectionArea: q } = t, w = {
    COORD_SYS: l.startsWith("E") ? l : `EPSG:${l}`,
    OPT_SERVICEMODE: "async",
    EXPORT_FORMAT: s.join(","),
    THEM_CLASS: a,
    // TODO: Validation (at least 1 class) already in vue component
    LOD_SELECTION: i,
    TEXTURE: u && s.some(
      (R) => ge[R].texture
    ) ? "Yes" : "No",
    LOCAL: c && s.some(
      (R) => ge[R].localCoordinates
    ) ? "Yes" : "No",
    TILE_OUTPUT: S ? "Yes" : "No",
    GENERIC_ATTRIB: O && s.some(
      (R) => ge[R].genericAttributes
    ) ? "Yes" : "No",
    APP_THEME: g || "none",
    HEIGHTMODE: T ? "absolute" : v,
    OPT_REQUESTEREMAIL: m,
    nm_NAME: d,
    nm_DESC: h
  };
  if (w.TERRAIN = "No", T && s.some((R) => R !== "2D Shape")) {
    const R = [...r.layers].find(
      (U) => U instanceof hn && U.activate
    ), P = new URL(window.location.href);
    if (I)
      w.TERRAIN = "Yes", w.LAYER_JSON = I;
    else if (R) {
      w.TERRAIN = "Yes";
      const U = new URL(
        R.url,
        P
      ).toString();
      w.LAYER_JSON = /layer.json/.test(U) ? U : `${U}/layer.json`;
    }
    if (C >= 0 && (w.ZOOM = C), u && D) {
      const U = r.layers.getByKey(D);
      if (!U)
        throw new Error(
          `Selected terrain appearance layer "${D}" does not exist.`
        );
      const V = new URL(U.url, P);
      U instanceof Xr ? (w.TEX_TYPE = "WMS", w.WMS_LEVEL = _[D] || U.maxLevel, V.search = new URLSearchParams(U.parameters).toString(), w.WMS_URL = V.toString()) : U instanceof kr && (w.TEX_TYPE = "TMS", w.TMS_LEVEL = _[D] || U.maxLevel, w.TMS_URL = V.toString());
    }
  }
  let E;
  if (x === K.AREA_SELECTION) {
    w.SELECTION = "Polygon";
    const R = r.layers.getByKey(o);
    if (!R || !(R instanceof tt))
      throw new Error("Layer for area selection does not exist.");
    const P = R.getFeatures()[0], U = (await po(P, r, q)).clone();
    U.transform(
      _e.proj,
      new gn(b).proj
    );
    const V = U.getCoordinates()[0];
    w.POLYGON = V.map((te) => {
      const [W, xe] = te;
      return `${W},${xe}`;
    }).join(";");
    const H = new zr({
      projection: _e.toJSON(),
      coordinates: (A = P.getGeometry()) == null ? void 0 : A.getExtent()
    });
    $ && (E = await os(H, r));
  } else
    E = { selectedFeatures: N };
  const y = new URL(Y, window.location.href);
  Object.entries(w).forEach(([R, P]) => {
    y.searchParams.set(R, P);
  });
  const L = { ...E, ...n };
  return fetch(y, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      ...G ? { Authorization: `fmetoken token=${G}` } : {}
    },
    body: JSON.stringify(L)
  });
}
async function cs(t, e, o) {
  await e.query(t);
  const { results: r } = e;
  return o.value = r.sort((n, l) => n.title < l.title ? -1 : 1).map((n) => ({
    name: n.title,
    title: n.title,
    tooltip: "export.selectToDownload",
    selectionChanged: (l) => {
      l ? e.resultLayer.featureVisibility.showObjects([
        n.featureId
      ]) : e.resultLayer.featureVisibility.hideObjects([
        n.featureId
      ]);
    }
  })), e.resultLayer.activate(), Promise.resolve();
}
const us = {
  name: "ResultList",
  components: {
    VSheet: rt,
    VIcon: Zr,
    VcsList: Po
  },
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
  emits: ["invalidArea"],
  setup(t, { emit: e }) {
    const o = Ge("vcsApp"), r = o.plugins.getByKey(Se), n = re(), l = Uo(t, "modelValue", e), s = le(
      () => t.selectedDataSourceOptions.type === "geojson" ? r.dataSource.title : "export.dataSources.oblique"
    );
    function a() {
      const i = o.layers.getByKey(
        String(t.selectionLayerName)
      );
      r.dataSource.clear();
      const u = i == null ? void 0 : i.getFeatures()[0];
      if (u && u.getGeometry())
        po(u, o, t.maxSelectionArea).then(
          () => cs(u, r.dataSource, n)
        ).catch((c) => {
          e("invalidArea"), o.notifier.add({
            type: we.ERROR,
            message: c.message,
            timeout: 5e3
          });
        });
      else
        throw new Error("Area selection feature does not exist.");
    }
    return Ae(
      () => t.active,
      () => {
        t.active && a();
      }
    ), Jr(() => {
      t.active && a();
    }), Hr(() => {
      var i;
      return (i = r.dataSource) == null ? void 0 : i.clear();
    }), {
      resultItems: n,
      selectedResults: l,
      listTitle: s
    };
  }
}, ds = { class: "list-height" };
function fs(t, e, o, r, n, l) {
  const s = M("VcsList"), a = M("v-icon"), i = M("v-sheet");
  return F(), X(i, { class: "px-1" }, {
    default: p(() => [
      J(" TODO: turn this into paginated list "),
      ne("div", ds, [
        r.resultItems ? (F(), X(s, {
          key: 0,
          modelValue: r.selectedResults,
          "onUpdate:modelValue": e[0] || (e[0] = (u) => r.selectedResults = u),
          items: r.resultItems,
          selectable: "",
          title: r.listTitle,
          "action-button-list-overflow-count": 1
        }, null, 8, ["modelValue", "items", "title"])) : (F(), X(a, { key: 1 }, {
          default: p(() => [
            B(" $vcsProgress ")
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
const ms = /* @__PURE__ */ Te(us, [["render", fs], ["__scopeId", "data-v-d1a53dcb"]]), Z = {
  OFF: 1,
  ERROR: 2,
  WARN: 4,
  INFO: 8,
  DEBUG: 16
}, Ee = {
  ERROR: 0,
  WARN: 0,
  INFO: 0,
  DEBUG: 0
};
Ee.ERROR = Z.ERROR | Z.WARN | Z.INFO | Z.DEBUG;
Ee.WARN = Z.WARN | Z.INFO | Z.DEBUG;
Ee.INFO = Z.INFO | Z.DEBUG;
Ee.DEBUG = Z.DEBUG;
const Ve = {
  useTimestamp: !1,
  logLevel: Z.INFO
}, Be = /* @__PURE__ */ new Map();
Be.set(Z.ERROR, "error");
Be.set(Z.WARN, "warn");
Be.set(Z.INFO, "info");
Be.set(Z.DEBUG, "log");
class ho {
  /**
   * @param {string=} className
   */
  constructor(e) {
    this.className = e, this.deprecations = /* @__PURE__ */ new Map();
  }
  /**
   * Logs an error message
   * @param {string} msg The message to log.
   * @param {...any} optArgs
   */
  error(e, ...o) {
    Ve.logLevel & Ee.ERROR && this._log(String(e), Z.ERROR, o);
  }
  /**
   * Logs a warning message
   * @param {string} msg The message to log.
   * @param {...any} optArgs
   */
  warning(e, ...o) {
    Ve.logLevel & Ee.WARN && this._log(String(e), Z.WARN, o);
  }
  /**
   * Deprecate a function. deprecations are stored on the logger
   * @param {string} functionName
   * @param {string=} alternativeFunctionName
   */
  deprecate(e, o) {
    const r = String(e), n = o ? String(o) : null;
    if (!this.deprecations.has(r)) {
      this.deprecations.set(r, n || null);
      let l = `${r} has been deprecated and will be removed`;
      n && (l = `${l}. ${n}`), this.warning(l);
    }
  }
  /**
   * Logs an info message
   * @param {string} msg The message to log.
   * @param {...any} optArgs
   */
  info(e, ...o) {
    Ve.logLevel & Ee.INFO && this._log(String(e), Z.INFO, o);
  }
  /**
   * Logs a debug message
   * @param {string} msg The message to log.
   * @param {...any} optArgs
   */
  debug(e, ...o) {
    Ve.logLevel & Ee.DEBUG && this._log(String(e), Z.DEBUG, o);
  }
  /**
   * Alias for debug
   * @param {string} msg The message to log.
   * @param {...any} optArgs
   */
  log(e, ...o) {
    Ve.logLevel & Ee.DEBUG && this._log(String(e), Z.DEBUG, o);
  }
  /**
   * Logs a message
   * @param {string} msg The message to log.
   * @param {LOG_LEVEL} level
   * @param {Array} optArgs
   * @private
   */
  _log(e, o, r) {
    let n = e;
    this.className && (n = `[${this.className}] ${n}`), console[Be.get(o)](n, ...r), o & Z.ERROR && (console.group(), console.trace(), console.groupEnd());
  }
}
const Rt = /* @__PURE__ */ new Map();
let xt;
function ps() {
  return xt || (xt = new ho()), xt;
}
function hs(t) {
  const e = new ho(t);
  return Rt.set(t, e), e;
}
function Ht(t) {
  return t ? Rt.has(t) ? Rt.get(t) : hs(t) : ps();
}
var ee = 63710088e-1, Wt = {
  centimeters: ee * 100,
  centimetres: ee * 100,
  degrees: ee / 111325,
  feet: ee * 3.28084,
  inches: ee * 39.37,
  kilometers: ee / 1e3,
  kilometres: ee / 1e3,
  meters: ee,
  metres: ee,
  miles: ee / 1609.344,
  millimeters: ee * 1e3,
  millimetres: ee * 1e3,
  nauticalmiles: ee / 1852,
  radians: 1,
  yards: ee * 1.0936
}, gs = {
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
  radians: 1 / ee,
  yards: 1.0936133
}, At = {
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
function ae(t, e, o) {
  o === void 0 && (o = {});
  var r = { type: "Feature" };
  return (o.id === 0 || o.id) && (r.id = o.id), o.bbox && (r.bbox = o.bbox), r.properties = e || {}, r.geometry = t, r;
}
function Es(t, e, o) {
  switch (t) {
    case "Point":
      return pe(e).geometry;
    case "LineString":
      return se(e).geometry;
    case "Polygon":
      return Kt(e).geometry;
    case "MultiPoint":
      return go(e).geometry;
    case "MultiLineString":
      return Zt(e).geometry;
    case "MultiPolygon":
      return Eo(e).geometry;
    default:
      throw new Error(t + " is invalid");
  }
}
function pe(t, e, o) {
  if (o === void 0 && (o = {}), !t)
    throw new Error("coordinates is required");
  if (!Array.isArray(t))
    throw new Error("coordinates must be an Array");
  if (t.length < 2)
    throw new Error("coordinates must be at least 2 numbers long");
  if (!Ke(t[0]) || !Ke(t[1]))
    throw new Error("coordinates must contain numbers");
  var r = {
    type: "Point",
    coordinates: t
  };
  return ae(r, e, o);
}
function Ss(t, e, o) {
  return o === void 0 && (o = {}), be(t.map(function(r) {
    return pe(r, e);
  }), o);
}
function Kt(t, e, o) {
  o === void 0 && (o = {});
  for (var r = 0, n = t; r < n.length; r++) {
    var l = n[r];
    if (l.length < 4)
      throw new Error("Each LinearRing of a Polygon must have 4 or more Positions.");
    for (var s = 0; s < l[l.length - 1].length; s++)
      if (l[l.length - 1][s] !== l[0][s])
        throw new Error("First and last Position are not equivalent.");
  }
  var a = {
    type: "Polygon",
    coordinates: t
  };
  return ae(a, e, o);
}
function ys(t, e, o) {
  return o === void 0 && (o = {}), be(t.map(function(r) {
    return Kt(r, e);
  }), o);
}
function se(t, e, o) {
  if (o === void 0 && (o = {}), t.length < 2)
    throw new Error("coordinates must be an array of two or more positions");
  var r = {
    type: "LineString",
    coordinates: t
  };
  return ae(r, e, o);
}
function vs(t, e, o) {
  return o === void 0 && (o = {}), be(t.map(function(r) {
    return se(r, e);
  }), o);
}
function be(t, e) {
  e === void 0 && (e = {});
  var o = { type: "FeatureCollection" };
  return e.id && (o.id = e.id), e.bbox && (o.bbox = e.bbox), o.features = t, o;
}
function Zt(t, e, o) {
  o === void 0 && (o = {});
  var r = {
    type: "MultiLineString",
    coordinates: t
  };
  return ae(r, e, o);
}
function go(t, e, o) {
  o === void 0 && (o = {});
  var r = {
    type: "MultiPoint",
    coordinates: t
  };
  return ae(r, e, o);
}
function Eo(t, e, o) {
  o === void 0 && (o = {});
  var r = {
    type: "MultiPolygon",
    coordinates: t
  };
  return ae(r, e, o);
}
function bs(t, e, o) {
  o === void 0 && (o = {});
  var r = {
    type: "GeometryCollection",
    geometries: t
  };
  return ae(r, e, o);
}
function xs(t, e) {
  if (e === void 0 && (e = 0), e && !(e >= 0))
    throw new Error("precision must be a positive number");
  var o = Math.pow(10, e || 0);
  return Math.round(t * o) / o;
}
function So(t, e) {
  e === void 0 && (e = "kilometers");
  var o = Wt[e];
  if (!o)
    throw new Error(e + " units is invalid");
  return t * o;
}
function Qt(t, e) {
  e === void 0 && (e = "kilometers");
  var o = Wt[e];
  if (!o)
    throw new Error(e + " units is invalid");
  return t / o;
}
function ws(t, e) {
  return yo(Qt(t, e));
}
function Os(t) {
  var e = t % 360;
  return e < 0 && (e += 360), e;
}
function yo(t) {
  var e = t % (2 * Math.PI);
  return e * 180 / Math.PI;
}
function Ls(t) {
  var e = t % 360;
  return e * Math.PI / 180;
}
function Ts(t, e, o) {
  if (e === void 0 && (e = "kilometers"), o === void 0 && (o = "kilometers"), !(t >= 0))
    throw new Error("length must be a positive number");
  return So(Qt(t, e), o);
}
function Cs(t, e, o) {
  if (e === void 0 && (e = "meters"), o === void 0 && (o = "kilometers"), !(t >= 0))
    throw new Error("area must be a positive number");
  var r = At[e];
  if (!r)
    throw new Error("invalid original units");
  var n = At[o];
  if (!n)
    throw new Error("invalid final units");
  return t / r * n;
}
function Ke(t) {
  return !isNaN(t) && t !== null && !Array.isArray(t);
}
function er(t) {
  return !!t && t.constructor === Object;
}
function Ns(t) {
  if (!t)
    throw new Error("bbox is required");
  if (!Array.isArray(t))
    throw new Error("bbox must be an Array");
  if (t.length !== 4 && t.length !== 6)
    throw new Error("bbox must be an Array of 4 or 6 numbers");
  t.forEach(function(e) {
    if (!Ke(e))
      throw new Error("bbox must only contain numbers");
  });
}
function Rs(t) {
  if (!t)
    throw new Error("id is required");
  if (["string", "number"].indexOf(typeof t) === -1)
    throw new Error("id must be a number or a string");
}
const As = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  areaFactors: At,
  bearingToAzimuth: Os,
  convertArea: Cs,
  convertLength: Ts,
  degreesToRadians: Ls,
  earthRadius: ee,
  factors: Wt,
  feature: ae,
  featureCollection: be,
  geometry: Es,
  geometryCollection: bs,
  isNumber: Ke,
  isObject: er,
  lengthToDegrees: ws,
  lengthToRadians: Qt,
  lineString: se,
  lineStrings: vs,
  multiLineString: Zt,
  multiPoint: go,
  multiPolygon: Eo,
  point: pe,
  points: Ss,
  polygon: Kt,
  polygons: ys,
  radiansToDegrees: yo,
  radiansToLength: So,
  round: xs,
  unitsFactors: gs,
  validateBBox: Ns,
  validateId: Rs
}, Symbol.toStringTag, { value: "Module" }));
function Is(t) {
  if (!t)
    throw new Error("coord is required");
  if (!Array.isArray(t)) {
    if (t.type === "Feature" && t.geometry !== null && t.geometry.type === "Point")
      return t.geometry.coordinates;
    if (t.type === "Point")
      return t.coordinates;
  }
  if (Array.isArray(t) && t.length >= 2 && !Array.isArray(t[0]) && !Array.isArray(t[1]))
    return t;
  throw new Error("coord must be GeoJSON Point or an Array of numbers");
}
function je(t) {
  if (Array.isArray(t))
    return t;
  if (t.type === "Feature") {
    if (t.geometry !== null)
      return t.geometry.coordinates;
  } else if (t.coordinates)
    return t.coordinates;
  throw new Error("coords must be GeoJSON Feature, Geometry Object or an Array");
}
function dt(t) {
  return t.type === "Feature" ? t.geometry : t;
}
function $e(t, e, o) {
  if (o === void 0 && (o = {}), !t)
    throw new Error("point is required");
  if (!e)
    throw new Error("polygon is required");
  var r = Is(t), n = dt(e), l = n.type, s = e.bbox, a = n.coordinates;
  if (s && _s(r, s) === !1)
    return !1;
  l === "Polygon" && (a = [a]);
  for (var i = !1, u = 0; u < a.length && !i; u++)
    if (Ir(r, a[u][0], o.ignoreBoundary)) {
      for (var c = !1, S = 1; S < a[u].length && !c; )
        Ir(r, a[u][S], !o.ignoreBoundary) && (c = !0), S++;
      c || (i = !0);
    }
  return i;
}
function Ir(t, e, o) {
  var r = !1;
  e[0][0] === e[e.length - 1][0] && e[0][1] === e[e.length - 1][1] && (e = e.slice(0, e.length - 1));
  for (var n = 0, l = e.length - 1; n < e.length; l = n++) {
    var s = e[n][0], a = e[n][1], i = e[l][0], u = e[l][1], c = t[1] * (s - i) + a * (i - t[0]) + u * (t[0] - s) === 0 && (s - t[0]) * (i - t[0]) <= 0 && (a - t[1]) * (u - t[1]) <= 0;
    if (c)
      return !o;
    var S = a > t[1] != u > t[1] && t[0] < (i - s) * (t[1] - a) / (u - a) + s;
    S && (r = !r);
  }
  return r;
}
function _s(t, e) {
  return e[0] <= t[0] && e[1] <= t[1] && e[2] >= t[0] && e[3] >= t[1];
}
function ke(t, e, o) {
  if (t !== null)
    for (var r, n, l, s, a, i, u, c = 0, S = 0, O, g = t.type, T = g === "FeatureCollection", v = g === "Feature", D = T ? t.features.length : 1, m = 0; m < D; m++) {
      u = T ? t.features[m].geometry : v ? t.geometry : t, O = u ? u.type === "GeometryCollection" : !1, a = O ? u.geometries.length : 1;
      for (var d = 0; d < a; d++) {
        var h = 0, x = 0;
        if (s = O ? u.geometries[d] : u, s !== null) {
          i = s.coordinates;
          var N = s.type;
          switch (c = o && (N === "Polygon" || N === "MultiPolygon") ? 1 : 0, N) {
            case null:
              break;
            case "Point":
              if (e(
                i,
                S,
                m,
                h,
                x
              ) === !1)
                return !1;
              S++, h++;
              break;
            case "LineString":
            case "MultiPoint":
              for (r = 0; r < i.length; r++) {
                if (e(
                  i[r],
                  S,
                  m,
                  h,
                  x
                ) === !1)
                  return !1;
                S++, N === "MultiPoint" && h++;
              }
              N === "LineString" && h++;
              break;
            case "Polygon":
            case "MultiLineString":
              for (r = 0; r < i.length; r++) {
                for (n = 0; n < i[r].length - c; n++) {
                  if (e(
                    i[r][n],
                    S,
                    m,
                    h,
                    x
                  ) === !1)
                    return !1;
                  S++;
                }
                N === "MultiLineString" && h++, N === "Polygon" && x++;
              }
              N === "Polygon" && h++;
              break;
            case "MultiPolygon":
              for (r = 0; r < i.length; r++) {
                for (x = 0, n = 0; n < i[r].length; n++) {
                  for (l = 0; l < i[r][n].length - c; l++) {
                    if (e(
                      i[r][n][l],
                      S,
                      m,
                      h,
                      x
                    ) === !1)
                      return !1;
                    S++;
                  }
                  x++;
                }
                h++;
              }
              break;
            case "GeometryCollection":
              for (r = 0; r < s.geometries.length; r++)
                if (ke(s.geometries[r], e, o) === !1)
                  return !1;
              break;
            default:
              throw new Error("Unknown Geometry Type");
          }
        }
      }
    }
}
function Ds(t, e, o, r) {
  var n = o;
  return ke(
    t,
    function(l, s, a, i, u) {
      s === 0 && o === void 0 ? n = l : n = e(
        n,
        l,
        s,
        a,
        i,
        u
      );
    },
    r
  ), n;
}
function vo(t, e) {
  var o;
  switch (t.type) {
    case "FeatureCollection":
      for (o = 0; o < t.features.length && e(t.features[o].properties, o) !== !1; o++)
        ;
      break;
    case "Feature":
      e(t.properties, 0);
      break;
  }
}
function Ms(t, e, o) {
  var r = o;
  return vo(t, function(n, l) {
    l === 0 && o === void 0 ? r = n : r = e(r, n, l);
  }), r;
}
function Ze(t, e) {
  if (t.type === "Feature")
    e(t, 0);
  else if (t.type === "FeatureCollection")
    for (var o = 0; o < t.features.length && e(t.features[o], o) !== !1; o++)
      ;
}
function Vs(t, e, o) {
  var r = o;
  return Ze(t, function(n, l) {
    l === 0 && o === void 0 ? r = n : r = e(r, n, l);
  }), r;
}
function Ps(t) {
  var e = [];
  return ke(t, function(o) {
    e.push(o);
  }), e;
}
function tr(t, e) {
  var o, r, n, l, s, a, i, u, c, S, O = 0, g = t.type === "FeatureCollection", T = t.type === "Feature", v = g ? t.features.length : 1;
  for (o = 0; o < v; o++) {
    for (a = g ? t.features[o].geometry : T ? t.geometry : t, u = g ? t.features[o].properties : T ? t.properties : {}, c = g ? t.features[o].bbox : T ? t.bbox : void 0, S = g ? t.features[o].id : T ? t.id : void 0, i = a ? a.type === "GeometryCollection" : !1, s = i ? a.geometries.length : 1, n = 0; n < s; n++) {
      if (l = i ? a.geometries[n] : a, l === null) {
        if (e(
          null,
          O,
          u,
          c,
          S
        ) === !1)
          return !1;
        continue;
      }
      switch (l.type) {
        case "Point":
        case "LineString":
        case "MultiPoint":
        case "Polygon":
        case "MultiLineString":
        case "MultiPolygon": {
          if (e(
            l,
            O,
            u,
            c,
            S
          ) === !1)
            return !1;
          break;
        }
        case "GeometryCollection": {
          for (r = 0; r < l.geometries.length; r++)
            if (e(
              l.geometries[r],
              O,
              u,
              c,
              S
            ) === !1)
              return !1;
          break;
        }
        default:
          throw new Error("Unknown Geometry Type");
      }
    }
    O++;
  }
}
function Us(t, e, o) {
  var r = o;
  return tr(
    t,
    function(n, l, s, a, i) {
      l === 0 && o === void 0 ? r = n : r = e(
        r,
        n,
        l,
        s,
        a,
        i
      );
    }
  ), r;
}
function Le(t, e) {
  tr(t, function(o, r, n, l, s) {
    var a = o === null ? null : o.type;
    switch (a) {
      case null:
      case "Point":
      case "LineString":
      case "Polygon":
        return e(
          ae(o, n, { bbox: l, id: s }),
          r,
          0
        ) === !1 ? !1 : void 0;
    }
    var i;
    switch (a) {
      case "MultiPoint":
        i = "Point";
        break;
      case "MultiLineString":
        i = "LineString";
        break;
      case "MultiPolygon":
        i = "Polygon";
        break;
    }
    for (var u = 0; u < o.coordinates.length; u++) {
      var c = o.coordinates[u], S = {
        type: i,
        coordinates: c
      };
      if (e(ae(S, n), r, u) === !1)
        return !1;
    }
  });
}
function Fs(t, e, o) {
  var r = o;
  return Le(
    t,
    function(n, l, s) {
      l === 0 && s === 0 && o === void 0 ? r = n : r = e(
        r,
        n,
        l,
        s
      );
    }
  ), r;
}
function bo(t, e) {
  Le(t, function(o, r, n) {
    var l = 0;
    if (o.geometry) {
      var s = o.geometry.type;
      if (!(s === "Point" || s === "MultiPoint")) {
        var a, i = 0, u = 0, c = 0;
        if (ke(
          o,
          function(S, O, g, T, v) {
            if (a === void 0 || r > i || T > u || v > c) {
              a = S, i = r, u = T, c = v, l = 0;
              return;
            }
            var D = se(
              [a, S],
              o.properties
            );
            if (e(
              D,
              r,
              n,
              v,
              l
            ) === !1)
              return !1;
            l++, a = S;
          }
        ) === !1)
          return !1;
      }
    }
  });
}
function js(t, e, o) {
  var r = o, n = !1;
  return bo(
    t,
    function(l, s, a, i, u) {
      n === !1 && o === void 0 ? r = l : r = e(
        r,
        l,
        s,
        a,
        i,
        u
      ), n = !0;
    }
  ), r;
}
function xo(t, e) {
  if (!t) throw new Error("geojson is required");
  Le(t, function(o, r, n) {
    if (o.geometry !== null) {
      var l = o.geometry.type, s = o.geometry.coordinates;
      switch (l) {
        case "LineString":
          if (e(o, r, n, 0, 0) === !1)
            return !1;
          break;
        case "Polygon":
          for (var a = 0; a < s.length; a++)
            if (e(
              se(s[a], o.properties),
              r,
              n,
              a
            ) === !1)
              return !1;
          break;
      }
    }
  });
}
function $s(t, e, o) {
  var r = o;
  return xo(
    t,
    function(n, l, s, a) {
      l === 0 && o === void 0 ? r = n : r = e(
        r,
        n,
        l,
        s,
        a
      );
    }
  ), r;
}
function Gs(t, e) {
  if (e = e || {}, !er(e)) throw new Error("options is invalid");
  var o = e.featureIndex || 0, r = e.multiFeatureIndex || 0, n = e.geometryIndex || 0, l = e.segmentIndex || 0, s = e.properties, a;
  switch (t.type) {
    case "FeatureCollection":
      o < 0 && (o = t.features.length + o), s = s || t.features[o].properties, a = t.features[o].geometry;
      break;
    case "Feature":
      s = s || t.properties, a = t.geometry;
      break;
    case "Point":
    case "MultiPoint":
      return null;
    case "LineString":
    case "Polygon":
    case "MultiLineString":
    case "MultiPolygon":
      a = t;
      break;
    default:
      throw new Error("geojson is invalid");
  }
  if (a === null) return null;
  var i = a.coordinates;
  switch (a.type) {
    case "Point":
    case "MultiPoint":
      return null;
    case "LineString":
      return l < 0 && (l = i.length + l - 1), se(
        [i[l], i[l + 1]],
        s,
        e
      );
    case "Polygon":
      return n < 0 && (n = i.length + n), l < 0 && (l = i[n].length + l - 1), se(
        [
          i[n][l],
          i[n][l + 1]
        ],
        s,
        e
      );
    case "MultiLineString":
      return r < 0 && (r = i.length + r), l < 0 && (l = i[r].length + l - 1), se(
        [
          i[r][l],
          i[r][l + 1]
        ],
        s,
        e
      );
    case "MultiPolygon":
      return r < 0 && (r = i.length + r), n < 0 && (n = i[r].length + n), l < 0 && (l = i[r][n].length - l - 1), se(
        [
          i[r][n][l],
          i[r][n][l + 1]
        ],
        s,
        e
      );
  }
  throw new Error("geojson is invalid");
}
function qs(t, e) {
  if (e = e || {}, !er(e)) throw new Error("options is invalid");
  var o = e.featureIndex || 0, r = e.multiFeatureIndex || 0, n = e.geometryIndex || 0, l = e.coordIndex || 0, s = e.properties, a;
  switch (t.type) {
    case "FeatureCollection":
      o < 0 && (o = t.features.length + o), s = s || t.features[o].properties, a = t.features[o].geometry;
      break;
    case "Feature":
      s = s || t.properties, a = t.geometry;
      break;
    case "Point":
    case "MultiPoint":
      return null;
    case "LineString":
    case "Polygon":
    case "MultiLineString":
    case "MultiPolygon":
      a = t;
      break;
    default:
      throw new Error("geojson is invalid");
  }
  if (a === null) return null;
  var i = a.coordinates;
  switch (a.type) {
    case "Point":
      return pe(i, s, e);
    case "MultiPoint":
      return r < 0 && (r = i.length + r), pe(i[r], s, e);
    case "LineString":
      return l < 0 && (l = i.length + l), pe(i[l], s, e);
    case "Polygon":
      return n < 0 && (n = i.length + n), l < 0 && (l = i[n].length + l), pe(i[n][l], s, e);
    case "MultiLineString":
      return r < 0 && (r = i.length + r), l < 0 && (l = i[r].length + l), pe(i[r][l], s, e);
    case "MultiPolygon":
      return r < 0 && (r = i.length + r), n < 0 && (n = i[r].length + n), l < 0 && (l = i[r][n].length - l), pe(
        i[r][n][l],
        s,
        e
      );
  }
  throw new Error("geojson is invalid");
}
const Bs = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  coordAll: Ps,
  coordEach: ke,
  coordReduce: Ds,
  featureEach: Ze,
  featureReduce: Vs,
  findPoint: qs,
  findSegment: Gs,
  flattenEach: Le,
  flattenReduce: Fs,
  geomEach: tr,
  geomReduce: Us,
  lineEach: xo,
  lineReduce: $s,
  propEach: vo,
  propReduce: Ms,
  segmentEach: bo,
  segmentReduce: js
}, Symbol.toStringTag, { value: "Module" }));
function _r(t) {
  if (!t)
    throw new Error("geojson is required");
  var e = [];
  return Le(t, function(o) {
    ks(o, e);
  }), be(e);
}
function ks(t, e) {
  var o = [], r = t.geometry;
  if (r !== null) {
    switch (r.type) {
      case "Polygon":
        o = je(r);
        break;
      case "LineString":
        o = [je(r)];
    }
    o.forEach(function(n) {
      var l = Xs(n, t.properties);
      l.forEach(function(s) {
        s.id = e.length, e.push(s);
      });
    });
  }
}
function Xs(t, e) {
  var o = [];
  return t.reduce(function(r, n) {
    var l = se([r, n], e);
    return l.bbox = Ys(r, n), o.push(l), n;
  }), o;
}
function Ys(t, e) {
  var o = t[0], r = t[1], n = e[0], l = e[1], s = o < n ? o : n, a = r < l ? r : l, i = o > n ? o : n, u = r > l ? r : l;
  return [s, a, i, u];
}
var rr = { exports: {} }, wo = { exports: {} };
(function(t, e) {
  (function(o, r) {
    t.exports = r();
  })(Dn, function() {
    function o(d, h, x, N, I) {
      (function C(_, $, b, G, Y) {
        for (; G > b; ) {
          if (G - b > 600) {
            var q = G - b + 1, w = $ - b + 1, E = Math.log(q), y = 0.5 * Math.exp(2 * E / 3), L = 0.5 * Math.sqrt(E * y * (q - y) / q) * (w - q / 2 < 0 ? -1 : 1), A = Math.max(b, Math.floor($ - w * y / q + L)), R = Math.min(G, Math.floor($ + (q - w) * y / q + L));
            C(_, $, A, R, Y);
          }
          var P = _[$], U = b, V = G;
          for (r(_, b, $), Y(_[G], P) > 0 && r(_, b, G); U < V; ) {
            for (r(_, U, V), U++, V--; Y(_[U], P) < 0; ) U++;
            for (; Y(_[V], P) > 0; ) V--;
          }
          Y(_[b], P) === 0 ? r(_, b, V) : r(_, ++V, G), V <= $ && (b = V + 1), $ <= V && (G = V - 1);
        }
      })(d, h, x || 0, N || d.length - 1, I || n);
    }
    function r(d, h, x) {
      var N = d[h];
      d[h] = d[x], d[x] = N;
    }
    function n(d, h) {
      return d < h ? -1 : d > h ? 1 : 0;
    }
    var l = function(d) {
      d === void 0 && (d = 9), this._maxEntries = Math.max(4, d), this._minEntries = Math.max(2, Math.ceil(0.4 * this._maxEntries)), this.clear();
    };
    function s(d, h, x) {
      if (!x) return h.indexOf(d);
      for (var N = 0; N < h.length; N++) if (x(d, h[N])) return N;
      return -1;
    }
    function a(d, h) {
      i(d, 0, d.children.length, h, d);
    }
    function i(d, h, x, N, I) {
      I || (I = D(null)), I.minX = 1 / 0, I.minY = 1 / 0, I.maxX = -1 / 0, I.maxY = -1 / 0;
      for (var C = h; C < x; C++) {
        var _ = d.children[C];
        u(I, d.leaf ? N(_) : _);
      }
      return I;
    }
    function u(d, h) {
      return d.minX = Math.min(d.minX, h.minX), d.minY = Math.min(d.minY, h.minY), d.maxX = Math.max(d.maxX, h.maxX), d.maxY = Math.max(d.maxY, h.maxY), d;
    }
    function c(d, h) {
      return d.minX - h.minX;
    }
    function S(d, h) {
      return d.minY - h.minY;
    }
    function O(d) {
      return (d.maxX - d.minX) * (d.maxY - d.minY);
    }
    function g(d) {
      return d.maxX - d.minX + (d.maxY - d.minY);
    }
    function T(d, h) {
      return d.minX <= h.minX && d.minY <= h.minY && h.maxX <= d.maxX && h.maxY <= d.maxY;
    }
    function v(d, h) {
      return h.minX <= d.maxX && h.minY <= d.maxY && h.maxX >= d.minX && h.maxY >= d.minY;
    }
    function D(d) {
      return { children: d, height: 1, leaf: !0, minX: 1 / 0, minY: 1 / 0, maxX: -1 / 0, maxY: -1 / 0 };
    }
    function m(d, h, x, N, I) {
      for (var C = [h, x]; C.length; ) if (!((x = C.pop()) - (h = C.pop()) <= N)) {
        var _ = h + Math.ceil((x - h) / N / 2) * N;
        o(d, _, h, x, I), C.push(h, _, _, x);
      }
    }
    return l.prototype.all = function() {
      return this._all(this.data, []);
    }, l.prototype.search = function(d) {
      var h = this.data, x = [];
      if (!v(d, h)) return x;
      for (var N = this.toBBox, I = []; h; ) {
        for (var C = 0; C < h.children.length; C++) {
          var _ = h.children[C], $ = h.leaf ? N(_) : _;
          v(d, $) && (h.leaf ? x.push(_) : T(d, $) ? this._all(_, x) : I.push(_));
        }
        h = I.pop();
      }
      return x;
    }, l.prototype.collides = function(d) {
      var h = this.data;
      if (!v(d, h)) return !1;
      for (var x = []; h; ) {
        for (var N = 0; N < h.children.length; N++) {
          var I = h.children[N], C = h.leaf ? this.toBBox(I) : I;
          if (v(d, C)) {
            if (h.leaf || T(d, C)) return !0;
            x.push(I);
          }
        }
        h = x.pop();
      }
      return !1;
    }, l.prototype.load = function(d) {
      if (!d || !d.length) return this;
      if (d.length < this._minEntries) {
        for (var h = 0; h < d.length; h++) this.insert(d[h]);
        return this;
      }
      var x = this._build(d.slice(), 0, d.length - 1, 0);
      if (this.data.children.length) if (this.data.height === x.height) this._splitRoot(this.data, x);
      else {
        if (this.data.height < x.height) {
          var N = this.data;
          this.data = x, x = N;
        }
        this._insert(x, this.data.height - x.height - 1, !0);
      }
      else this.data = x;
      return this;
    }, l.prototype.insert = function(d) {
      return d && this._insert(d, this.data.height - 1), this;
    }, l.prototype.clear = function() {
      return this.data = D([]), this;
    }, l.prototype.remove = function(d, h) {
      if (!d) return this;
      for (var x, N, I, C = this.data, _ = this.toBBox(d), $ = [], b = []; C || $.length; ) {
        if (C || (C = $.pop(), N = $[$.length - 1], x = b.pop(), I = !0), C.leaf) {
          var G = s(d, C.children, h);
          if (G !== -1) return C.children.splice(G, 1), $.push(C), this._condense($), this;
        }
        I || C.leaf || !T(C, _) ? N ? (x++, C = N.children[x], I = !1) : C = null : ($.push(C), b.push(x), x = 0, N = C, C = C.children[0]);
      }
      return this;
    }, l.prototype.toBBox = function(d) {
      return d;
    }, l.prototype.compareMinX = function(d, h) {
      return d.minX - h.minX;
    }, l.prototype.compareMinY = function(d, h) {
      return d.minY - h.minY;
    }, l.prototype.toJSON = function() {
      return this.data;
    }, l.prototype.fromJSON = function(d) {
      return this.data = d, this;
    }, l.prototype._all = function(d, h) {
      for (var x = []; d; ) d.leaf ? h.push.apply(h, d.children) : x.push.apply(x, d.children), d = x.pop();
      return h;
    }, l.prototype._build = function(d, h, x, N) {
      var I, C = x - h + 1, _ = this._maxEntries;
      if (C <= _) return a(I = D(d.slice(h, x + 1)), this.toBBox), I;
      N || (N = Math.ceil(Math.log(C) / Math.log(_)), _ = Math.ceil(C / Math.pow(_, N - 1))), (I = D([])).leaf = !1, I.height = N;
      var $ = Math.ceil(C / _), b = $ * Math.ceil(Math.sqrt(_));
      m(d, h, x, b, this.compareMinX);
      for (var G = h; G <= x; G += b) {
        var Y = Math.min(G + b - 1, x);
        m(d, G, Y, $, this.compareMinY);
        for (var q = G; q <= Y; q += $) {
          var w = Math.min(q + $ - 1, Y);
          I.children.push(this._build(d, q, w, N - 1));
        }
      }
      return a(I, this.toBBox), I;
    }, l.prototype._chooseSubtree = function(d, h, x, N) {
      for (; N.push(h), !h.leaf && N.length - 1 !== x; ) {
        for (var I = 1 / 0, C = 1 / 0, _ = void 0, $ = 0; $ < h.children.length; $++) {
          var b = h.children[$], G = O(b), Y = (q = d, w = b, (Math.max(w.maxX, q.maxX) - Math.min(w.minX, q.minX)) * (Math.max(w.maxY, q.maxY) - Math.min(w.minY, q.minY)) - G);
          Y < C ? (C = Y, I = G < I ? G : I, _ = b) : Y === C && G < I && (I = G, _ = b);
        }
        h = _ || h.children[0];
      }
      var q, w;
      return h;
    }, l.prototype._insert = function(d, h, x) {
      var N = x ? d : this.toBBox(d), I = [], C = this._chooseSubtree(N, this.data, h, I);
      for (C.children.push(d), u(C, N); h >= 0 && I[h].children.length > this._maxEntries; ) this._split(I, h), h--;
      this._adjustParentBBoxes(N, I, h);
    }, l.prototype._split = function(d, h) {
      var x = d[h], N = x.children.length, I = this._minEntries;
      this._chooseSplitAxis(x, I, N);
      var C = this._chooseSplitIndex(x, I, N), _ = D(x.children.splice(C, x.children.length - C));
      _.height = x.height, _.leaf = x.leaf, a(x, this.toBBox), a(_, this.toBBox), h ? d[h - 1].children.push(_) : this._splitRoot(x, _);
    }, l.prototype._splitRoot = function(d, h) {
      this.data = D([d, h]), this.data.height = d.height + 1, this.data.leaf = !1, a(this.data, this.toBBox);
    }, l.prototype._chooseSplitIndex = function(d, h, x) {
      for (var N, I, C, _, $, b, G, Y = 1 / 0, q = 1 / 0, w = h; w <= x - h; w++) {
        var E = i(d, 0, w, this.toBBox), y = i(d, w, x, this.toBBox), L = (I = E, C = y, _ = void 0, $ = void 0, b = void 0, G = void 0, _ = Math.max(I.minX, C.minX), $ = Math.max(I.minY, C.minY), b = Math.min(I.maxX, C.maxX), G = Math.min(I.maxY, C.maxY), Math.max(0, b - _) * Math.max(0, G - $)), A = O(E) + O(y);
        L < Y ? (Y = L, N = w, q = A < q ? A : q) : L === Y && A < q && (q = A, N = w);
      }
      return N || x - h;
    }, l.prototype._chooseSplitAxis = function(d, h, x) {
      var N = d.leaf ? this.compareMinX : c, I = d.leaf ? this.compareMinY : S;
      this._allDistMargin(d, h, x, N) < this._allDistMargin(d, h, x, I) && d.children.sort(N);
    }, l.prototype._allDistMargin = function(d, h, x, N) {
      d.children.sort(N);
      for (var I = this.toBBox, C = i(d, 0, h, I), _ = i(d, x - h, x, I), $ = g(C) + g(_), b = h; b < x - h; b++) {
        var G = d.children[b];
        u(C, d.leaf ? I(G) : G), $ += g(C);
      }
      for (var Y = x - h - 1; Y >= h; Y--) {
        var q = d.children[Y];
        u(_, d.leaf ? I(q) : q), $ += g(_);
      }
      return $;
    }, l.prototype._adjustParentBBoxes = function(d, h, x) {
      for (var N = x; N >= 0; N--) u(h[N], d);
    }, l.prototype._condense = function(d) {
      for (var h = d.length - 1, x = void 0; h >= 0; h--) d[h].children.length === 0 ? h > 0 ? (x = d[h - 1].children).splice(x.indexOf(d[h]), 1) : this.clear() : a(d[h], this.toBBox);
    }, l;
  });
})(wo);
var zs = wo.exports;
const Js = /* @__PURE__ */ eo(As), Oo = /* @__PURE__ */ eo(Bs);
var or = {};
Object.defineProperty(or, "__esModule", { value: !0 });
var Hs = Oo;
function It(t) {
  var e = [1 / 0, 1 / 0, -1 / 0, -1 / 0];
  return Hs.coordEach(t, function(o) {
    e[0] > o[0] && (e[0] = o[0]), e[1] > o[1] && (e[1] = o[1]), e[2] < o[0] && (e[2] = o[0]), e[3] < o[1] && (e[3] = o[1]);
  }), e;
}
It.default = It;
or.default = It;
var de = zs, Lo = Js, To = Oo, Ne = or.default, Ws = To.featureEach;
To.coordEach;
Lo.polygon;
var Dr = Lo.featureCollection;
function Co(t) {
  var e = new de(t);
  return e.insert = function(o) {
    if (o.type !== "Feature") throw new Error("invalid feature");
    return o.bbox = o.bbox ? o.bbox : Ne(o), de.prototype.insert.call(this, o);
  }, e.load = function(o) {
    var r = [];
    return Array.isArray(o) ? o.forEach(function(n) {
      if (n.type !== "Feature") throw new Error("invalid features");
      n.bbox = n.bbox ? n.bbox : Ne(n), r.push(n);
    }) : Ws(o, function(n) {
      if (n.type !== "Feature") throw new Error("invalid features");
      n.bbox = n.bbox ? n.bbox : Ne(n), r.push(n);
    }), de.prototype.load.call(this, r);
  }, e.remove = function(o, r) {
    if (o.type !== "Feature") throw new Error("invalid feature");
    return o.bbox = o.bbox ? o.bbox : Ne(o), de.prototype.remove.call(this, o, r);
  }, e.clear = function() {
    return de.prototype.clear.call(this);
  }, e.search = function(o) {
    var r = de.prototype.search.call(this, this.toBBox(o));
    return Dr(r);
  }, e.collides = function(o) {
    return de.prototype.collides.call(this, this.toBBox(o));
  }, e.all = function() {
    var o = de.prototype.all.call(this);
    return Dr(o);
  }, e.toJSON = function() {
    return de.prototype.toJSON.call(this);
  }, e.fromJSON = function(o) {
    return de.prototype.fromJSON.call(this, o);
  }, e.toBBox = function(o) {
    var r;
    if (o.bbox) r = o.bbox;
    else if (Array.isArray(o) && o.length === 4) r = o;
    else if (Array.isArray(o) && o.length === 6) r = [o[0], o[1], o[3], o[4]];
    else if (o.type === "Feature") r = Ne(o);
    else if (o.type === "FeatureCollection") r = Ne(o);
    else throw new Error("invalid geojson");
    return {
      minX: r[0],
      minY: r[1],
      maxX: r[2],
      maxY: r[3]
    };
  }, e;
}
rr.exports = Co;
rr.exports.default = Co;
var Ks = rr.exports;
const Zs = /* @__PURE__ */ Qr(Ks);
function nr(t, e) {
  var o = {}, r = [];
  if (t.type === "LineString" && (t = ae(t)), e.type === "LineString" && (e = ae(e)), t.type === "Feature" && e.type === "Feature" && t.geometry !== null && e.geometry !== null && t.geometry.type === "LineString" && e.geometry.type === "LineString" && t.geometry.coordinates.length === 2 && e.geometry.coordinates.length === 2) {
    var n = Mr(t, e);
    return n && r.push(n), be(r);
  }
  var l = Zs();
  return l.load(_r(e)), Ze(_r(t), function(s) {
    Ze(l.search(s), function(a) {
      var i = Mr(s, a);
      if (i) {
        var u = je(i).join(",");
        o[u] || (o[u] = !0, r.push(i));
      }
    });
  }), be(r);
}
function Mr(t, e) {
  var o = je(t), r = je(e);
  if (o.length !== 2)
    throw new Error("<intersects> line1 must only contain 2 coordinates");
  if (r.length !== 2)
    throw new Error("<intersects> line2 must only contain 2 coordinates");
  var n = o[0][0], l = o[0][1], s = o[1][0], a = o[1][1], i = r[0][0], u = r[0][1], c = r[1][0], S = r[1][1], O = (S - u) * (s - n) - (c - i) * (a - l), g = (c - i) * (l - u) - (S - u) * (n - i), T = (s - n) * (l - u) - (a - l) * (n - i);
  if (O === 0)
    return null;
  var v = g / O, D = T / O;
  if (v >= 0 && v <= 1 && D >= 0 && D <= 1) {
    var m = n + v * (s - n), d = l + v * (a - l);
    return pe([m, d]);
  }
  return null;
}
function _t(t, e) {
  e === void 0 && (e = {});
  var o = dt(t);
  switch (!e.properties && t.type === "Feature" && (e.properties = t.properties), o.type) {
    case "Polygon":
      return Qs(o, e);
    case "MultiPolygon":
      return ec(o, e);
    default:
      throw new Error("invalid poly");
  }
}
function Qs(t, e) {
  e === void 0 && (e = {});
  var o = dt(t), r = o.coordinates, n = e.properties ? e.properties : t.type === "Feature" ? t.properties : {};
  return No(r, n);
}
function ec(t, e) {
  e === void 0 && (e = {});
  var o = dt(t), r = o.coordinates, n = e.properties ? e.properties : t.type === "Feature" ? t.properties : {}, l = [];
  return r.forEach(function(s) {
    l.push(No(s, n));
  }), be(l);
}
function No(t, e) {
  return t.length > 1 ? Zt(t, e) : se(t[0], e);
}
function tc(t, e) {
  var o = !0;
  return Le(t, function(r) {
    Le(e, function(n) {
      if (o === !1)
        return !1;
      o = rc(r.geometry, n.geometry);
    });
  }), o;
}
function rc(t, e) {
  switch (t.type) {
    case "Point":
      switch (e.type) {
        case "Point":
          return !ic(t.coordinates, e.coordinates);
        case "LineString":
          return !Vr(e, t);
        case "Polygon":
          return !$e(t, e);
      }
      break;
    case "LineString":
      switch (e.type) {
        case "Point":
          return !Vr(t, e);
        case "LineString":
          return !oc(t, e);
        case "Polygon":
          return !Pr(e, t);
      }
      break;
    case "Polygon":
      switch (e.type) {
        case "Point":
          return !$e(e, t);
        case "LineString":
          return !Pr(t, e);
        case "Polygon":
          return !nc(e, t);
      }
  }
  return !1;
}
function Vr(t, e) {
  for (var o = 0; o < t.coordinates.length - 1; o++)
    if (lc(t.coordinates[o], t.coordinates[o + 1], e.coordinates))
      return !0;
  return !1;
}
function oc(t, e) {
  var o = nr(t, e);
  return o.features.length > 0;
}
function Pr(t, e) {
  for (var o = 0, r = e.coordinates; o < r.length; o++) {
    var n = r[o];
    if ($e(n, t))
      return !0;
  }
  var l = nr(e, _t(t));
  return l.features.length > 0;
}
function nc(t, e) {
  for (var o = 0, r = t.coordinates[0]; o < r.length; o++) {
    var n = r[o];
    if ($e(n, e))
      return !0;
  }
  for (var l = 0, s = e.coordinates[0]; l < s.length; l++) {
    var a = s[l];
    if ($e(a, t))
      return !0;
  }
  var i = nr(_t(t), _t(e));
  return i.features.length > 0;
}
function lc(t, e, o) {
  var r = o[0] - t[0], n = o[1] - t[1], l = e[0] - t[0], s = e[1] - t[1], a = r * s - n * l;
  return a !== 0 ? !1 : Math.abs(l) >= Math.abs(s) ? l > 0 ? t[0] <= o[0] && o[0] <= e[0] : e[0] <= o[0] && o[0] <= t[0] : s > 0 ? t[1] <= o[1] && o[1] <= e[1] : e[1] <= o[1] && o[1] <= t[1];
}
function ic(t, e) {
  return t[0] === e[0] && t[1] === e[1];
}
function Ro(t) {
  try {
    z(t.baseUrl, String);
  } catch (e) {
    return Ht("@vcmap/export").error(e.message), !1;
  }
  return !0;
}
class Ao {
  /**
   * @param {AbstractDataSourceOptions} options
   * @param {import("@vcmap/core").VcsApp} app
   */
  constructor(e, o) {
    this.url = e.baseUrl ? e.baseUrl.replace(/\/$/, "") : "", this._app = o;
    let r = this._app.layers.getByKey("_exportResultLayer");
    r || (r = new tt({
      projection: _e,
      name: "_exportResultLayer",
      classificationType: "both",
      altitudeMode: "clambToGround",
      allowPicking: !1
    }), Gr(r), this._app.layers.add(r)), this._resultLayer = /** @type {import("@vcmap/core").VectorLayer} */
    r, this.results = [];
  }
  /**
   * @returns {import("@vcmap/core").VectorLayer}
   */
  get resultLayer() {
    return this._resultLayer;
  }
  /**
   * query the given data source based on a features geometry
   * @param {import("ol").Feature<import("ol/geom/Geometry").default>} feature The feature that is used to query the overlapping data sources.
   * @api
   * @returns {Promise<void>}
   */
  async query(e) {
    ie(e, cr), this.clear();
    const o = this._app.maps.activeMap instanceof Ft ? await mo(e, this._app) : e.getGeometry();
    if (o) {
      const r = new zr({
        coordinates: o.getExtent(),
        projection: _e.toJSON()
      });
      if (r.isValid()) {
        const n = new _n(), l = n.writeFeatureObject(new cr(o)), s = (await this.getFeaturesInExtent(r)).map((a) => {
          const i = n.writeFeatureObject(a);
          if (!tc(i, l)) {
            const u = this.getResultFromFeature(a);
            return this.results.push(u), a;
          }
          return null;
        }).filter((a) => a);
        this._resultLayer.addFeatures(s), this._resultLayer.featureVisibility.hideObjects(
          s.map((a) => a.getId())
        );
      }
    }
  }
  /**
   * clears the results and the result layer
   * @api
   */
  clear() {
    this.results.splice(0), this._resultLayer.removeAllFeatures();
  }
  /**
   * @param {import("ol").Feature<import("ol/geom/Geometry").default>} feature
   * @returns {import("../results/abstractResult").default}
   * @abstract
   */
  // eslint-disable-next-line no-unused-vars,class-methods-use-this
  getResultFromFeature(e) {
    throw new Error("Implementation Error");
  }
  /**
   * @param {import("@vcmap/core").Extent} extent
   * @returns {Promise<Array<import("ol").Feature<import("ol/geom/Geometry").default>>>}
   * @abstract
   */
  // eslint-disable-next-line no-unused-vars,class-methods-use-this
  async getFeaturesInExtent(e) {
    throw new Error("Implementation Error");
  }
}
class Io extends uo {
  /**
   * @param {FileResultOptions} options
   */
  constructor(e) {
    super(e), this.href = e.href;
  }
  download() {
    return Fr(this.href, ""), Promise.resolve();
  }
}
function _o(t, e) {
  if (!Ro(t))
    return !1;
  try {
    ie(t.obliqueCollectionName, String), ie(
      e.obliqueCollections.getByKey(t.obliqueCollectionName),
      En
    ), z(t.fileExtension, String), z(t.resolution, Number);
  } catch (r) {
    return Ht("@vcmap/export/dataSources/ObliqueDataSource").error(
      r.message
    ), !1;
  }
  return !0;
}
class Qe extends Ao {
  /**
   * @param {ObliqueDataSourceOptions} options
   * @param {import("@vcmap/core").VcsApp} app
   */
  constructor(e, o) {
    super(e, o), this.dedicatedSource = fe(e.dedicatedSource, !1), this.obliqueCollectionName = e.obliqueCollectionName, this.fileExtension = e.fileExtension || "jpg", this.viewDirectionFilter = null, this.resolution = e.resolution, this.downloadState = e.downloadState;
  }
  /**
   * generates a download link for a given image, if this data source has a dedicated source
   * @api
   * @param {string} imageName
   * @returns {string}
   */
  getUriForImage(e) {
    return `${this.url}/${e}.${this.fileExtension}`;
  }
  /**
   * @inheritdoc
   */
  getResultFromFeature(e) {
    const o = e.getId();
    return this.dedicatedSource ? new Io({
      title: o,
      href: this.getUriForImage(o),
      featureId: o,
      fileSize: void 0
    }) : new ls(
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
  /**
   * @inheritdoc
   */
  async getFeaturesInExtent(e) {
    const o = this._app.obliqueCollections.getByKey(
      this.obliqueCollectionName
    );
    if (o) {
      await o.load(), await o.loadDataForExtent(e.extent);
      const n = o.imageFeatureSource.getFeaturesInExtent(e.extent);
      return this.viewDirectionFilter && this.viewDirectionFilter !== 5 ? n.filter(
        (l) => l.get("viewDirection") === this.viewDirectionFilter
      ) : n;
    } else
      throw new Error("Oblique collection does not exist.");
  }
}
function Do(t) {
  const e = Ro(t);
  try {
    ie(t.geojsonUrl, String);
  } catch (o) {
    return Ht("@vcmap/export/dataSources/GeoJSONDataSource").error(
      o.message
    ), !1;
  }
  return e;
}
class ac extends Ao {
  /**
   * @param {GeoJSONDataSourceOptions} options
   * @param {import("@vcmap/core").VcsApp} app
   */
  constructor(e, o) {
    super(e, o), this.title = e.title, this.geojsonUrl = e.geojsonUrl, this._geojsonLayer = new Sn({
      name: "_exportGeojsonLayer",
      url: this.geojsonUrl,
      vectorProperties: {
        altitudeMode: "clampToGround"
      }
    });
  }
  /**
   * @inheritdoc
   */
  getResultFromFeature(e) {
    const o = e.getProperties();
    return new Io({
      href: `${this.url}/${o.url.replace(/^\//, "")}`,
      title: o.url,
      featureId: e.getId(),
      fileSize: o.fileSize ? as(o.fileSize) : void 0
    });
  }
  /**
   * @inheritDoc
   */
  async getFeaturesInExtent(e) {
    const o = (
      /** @type {import("@vcmap/core").GeoJSONLayer} */
      this._geojsonLayer
    );
    if (o)
      return await o.fetchData(), o.source.getFeaturesInExtent(e.extent);
    throw new Error("GeoJSON layer does not exist.");
  }
}
function sc(t, e) {
  if (t.type === k.GEOJSON && Do(
    /** @type {import("./geojsonDataSource").GeoJSONDataSourceOptions} */
    t
  ))
    return new ac(
      /** @type {import("./geojsonDataSource").GeoJSONDataSourceOptions} */
      t,
      e
    );
  if (t.type === k.OBLIQUE && _o(
    /** @type {import("./obliqueDataSource").ObliqueDataSourceOptions} */
    t,
    e
  ))
    return new Qe(
      /** @type {import("./obliqueDataSource").ObliqueDataSourceOptions} */
      t,
      e
    );
  if (t.type === k.CITY_MODEL)
    return null;
  throw new Error(`Datasource "${t.type}" not supported`);
}
function cc(t, e) {
  return e.type === k.GEOJSON && Do(
    /** @type {import("./geojsonDataSource").GeoJSONDataSourceOptions} */
    e
  ) || e.type === k.OBLIQUE && _o(
    /** @type {import("./obliqueDataSource").ObliqueDataSourceOptions} */
    e,
    t
  ) ? !0 : e.type === k.CITY_MODEL;
}
const uc = {
  name: "ExportWindow",
  components: {
    VSheet: rt,
    VForm: On,
    VOverlay: Ln,
    VChip: Tn,
    VProgressLinear: Cn,
    VcsFormButton: Dt,
    VcsSelect: et,
    VcsTextField: jr,
    VcsTextArea: Fo,
    VcsCheckbox: Pt,
    VcsWizard: jo,
    VcsWizardStep: $o,
    SelectionArea: Gn,
    SelectionObjects: Qn,
    SettingsCityModel: rl,
    SettingsOblique: ll,
    ResultList: ms
  },
  setup() {
    var w;
    const t = Ge("vcsApp"), e = t.plugins.getByKey(Se), o = e.state, r = e.config, n = re(!1), l = Ue({
      running: !1,
      progress: 0,
      // shows how many images should be downloaded (second number) and which is currently downloading (first number).
      queue: [1, 1]
    }), s = {
      DATASOURCE: 0,
      SELECTION_MODE: 1,
      SETTINGS: 2,
      EXPORT_DESTINATION: 3,
      SEND_REQUEST: 4
    }, a = Ue({
      selectionMode: !1,
      settings: !1,
      exportDestination: !r.termsOfUse
    }), i = re(null), u = re(null), c = re(null);
    Ae(
      () => o.settingsOblique.directionFilter,
      () => {
        e.dataSource && e.dataSource instanceof Qe && (e.dataSource.viewDirectionFilter = o.settingsOblique.directionFilter);
      }
    );
    function S(E) {
      o.step = E + 1, E >= o.highestStep && (o.highestStep = o.step);
    }
    const O = re(t.maps.activeMap.className), g = re(
      (w = t.maps.activeMap.collection) == null ? void 0 : w.name
    ), T = le(() => r.dataSourceOptionsList.filter(cc.bind(null, t)).map((E) => {
      let y;
      if (E.type === k.CITY_MODEL)
        y = E.title || "export.dataSources.cityModel";
      else if (E.type === k.OBLIQUE)
        y = E.title || "export.dataSources.oblique";
      else if (E.type === k.GEOJSON)
        ({ title: y } = E);
      else
        throw new Error(
          `The following datasource type is not supported: "${E.type}"`
        );
      return { ...E, title: y };
    }));
    function v() {
      return ![...t.layers].some(
        (E) => E instanceof Br && E.properties.exportWorkbench === r.settingsCityModel.fmeServerUrl
      );
    }
    const D = le(() => {
      var y, L;
      const E = [
        {
          value: K.AREA_SELECTION,
          title: "export.selectionTypes.areaSelection"
        }
      ];
      return ((y = o.selectedDataSourceOptions) == null ? void 0 : y.type) === k.CITY_MODEL && (v() || E.push({
        value: K.OBJECT_SELECTION,
        title: "export.selectionTypes.objectSelection",
        props: {
          disabled: O.value !== "CesiumMap"
        }
      })), ((L = o.selectedDataSourceOptions) == null ? void 0 : L.type) === k.OBLIQUE && E.push({
        value: K.CURRENT_IMAGE,
        title: "export.selectionTypes.currentImage",
        props: {
          disabled: O.value !== "ObliqueMap" || g.value !== o.selectedDataSourceOptions.obliqueCollectionName
        }
      }), E;
    });
    let m;
    const d = [
      t.maps.mapActivated.addEventListener((E) => {
        var y;
        O.value = E.className, g.value = (y = E.collection) == null ? void 0 : y.name, (o.selectedSelectionType === K.OBJECT_SELECTION && E.className !== "CesiumMap" || o.selectedSelectionType === K.CURRENT_IMAGE && E.className !== "ObliqueMap") && (o.selectedSelectionType = void 0), E instanceof Ft ? m = E.collectionChanged.addEventListener(
          (L) => {
            g.value = L.name, K.CURRENT_IMAGE && L.name !== o.selectedDataSourceOptions.obliqueCollectionName && (o.selectedSelectionType = void 0);
          }
        ) : m == null || m();
      }),
      t.layers.added.addEventListener(() => {
        const E = D.value.find(
          (y) => y.value === K.OBJECT_SELECTION
        );
        if (E && (E.disabled = O.value !== "CesiumMap"), v()) {
          const y = D.value.findIndex(
            (L) => L.value === K.OBJECT_SELECTION
          );
          y !== -1 && D.value.splice(y, 1);
        }
      }),
      t.layers.removed.addEventListener(() => {
        const E = D.value.find(
          (y) => y.value === K.OBJECT_SELECTION
        );
        if (E && (E.disabled = O.value !== "CesiumMap"), v()) {
          const y = D.value.findIndex(
            (L) => L.value === K.OBJECT_SELECTION
          );
          y !== -1 && D.value.splice(y, 1);
        }
      })
    ];
    Ae(
      () => D.value,
      (E) => {
        E.length === 1 && (o.selectedSelectionType = E[0].value);
      },
      { deep: !0 }
    );
    function h(E) {
      return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(E);
    }
    const x = le(() => {
      var y, L, A;
      const E = r.termsOfUse ? o.termsConsented : !0;
      if (((y = o.selectedDataSourceOptions) == null ? void 0 : y.type) === k.CITY_MODEL) {
        if (r.allowEmail)
          return E && h(o.email);
        if (r.allowExportName)
          return E && !!o.exportName;
      } else if (((L = o.selectedDataSourceOptions) == null ? void 0 : L.type) === k.OBLIQUE) {
        if (o.selectedSelectionType === K.AREA_SELECTION)
          return E && o.selectedResultItems.length > 0;
        if (o.selectedSelectionType === K.CURRENT_IMAGE)
          return E;
      } else if (((A = o.selectedDataSourceOptions) == null ? void 0 : A.type) === k.GEOJSON)
        return E && o.selectedResultItems.length > 0;
      return !1;
    });
    Ae(
      () => o.selectedSelectionType,
      (E, y) => {
        var L;
        y === K.AREA_SELECTION ? (L = t.layers.getByKey(String(Ie))) == null || L.removeAllFeatures() : y === K.OBJECT_SELECTION && (o.selectedObjects = []), E === K.CURRENT_IMAGE && (o.highestStep = 1, u.value && u.value.reset());
      }
    );
    async function N(E, y) {
      if (await E) {
        const A = o.selectedDataSourceOptions.type === k.GEOJSON ? y + 1 : y;
        S(A);
      }
    }
    function I() {
      var E, y, L;
      e.resetState(), (E = i.value) == null || E.resetValidation(), (y = u.value) == null || y.resetValidation(), (L = c.value) == null || L.resetValidation();
    }
    function C(E) {
      var y;
      o.selectedDataSourceOptions && I(), (y = e.dataSource) == null || y.clear(), o.selectedDataSourceOptions = E, e.updateDataSource(
        t,
        E,
        l
      ), S(s.DATASOURCE);
    }
    async function _() {
      if (a.settings && a.exportDestination && a.selectionMode || o.selectedDataSourceOptions.type === k.GEOJSON && a.exportDestination && a.selectionMode || o.selectedSelectionType === K.CURRENT_IMAGE && a.selectionMode) {
        let E;
        if (n.value = !0, o.selectedDataSourceOptions.type === k.CITY_MODEL)
          E = ss(
            r,
            o,
            String(Ie),
            t,
            e.additionalParams
          );
        else if (o.selectedDataSourceOptions.type === k.OBLIQUE || o.selectedDataSourceOptions.type === k.GEOJSON)
          if (l.running = !0, await new Promise((y) => {
            setTimeout(y, 0);
          }), o.selectedSelectionType === K.CURRENT_IMAGE)
            if (e.dataSource instanceof Qe)
              E = is(
                t,
                e.dataSource,
                l
              ).catch((y) => {
                t.notifier.add({
                  type: we.ERROR,
                  message: y,
                  timeout: 5e3
                });
              });
            else
              throw new Error(
                "AbstractDataSource is not instance of ObliqueDataSource"
              );
          else if (o.selectedSelectionType === K.AREA_SELECTION) {
            const y = e.dataSource.results.flatMap(
              (L) => o.selectedResultItems.some(
                (A) => A.title === L.title
              ) ? [L] : []
            );
            l.queue[1] = y.length;
            for (let L = 0; L < y.length; L++)
              l.queue[0] = L + 1, await y[L].download().catch((R) => {
                t.notifier.add({
                  type: we.ERROR,
                  message: R,
                  timeout: 5e3
                });
              });
            E = Promise.resolve();
          } else
            throw new Error(
              `Selected SelectionType is not supported for ${o.selectedDataSourceOptions.type} export.`
            );
        else
          E = Promise.reject(new Error("No valid dataSource set."));
        E.then(() => {
          o.selectedDataSourceOptions.type === k.CITY_MODEL && t.notifier.add({
            type: we.SUCCESS,
            message: "export.notification.success",
            timeout: 5e3
          });
        }).finally(() => {
          n.value = !1, l.running = !1, l.queue = [1, 1];
        }).catch(() => {
          t.notifier.add({
            type: we.ERROR,
            message: "export.notification.error.standard",
            timeout: 5e3
          });
        });
      } else
        t.notifier.add({
          type: we.ERROR,
          message: "export.notification.error.validation",
          timeout: 5e3
        });
    }
    Hr(() => {
      m == null || m(), d.forEach((E) => E());
    });
    const $ = re(!1), b = {
      settingsCityModel: {
        name: "resetSettingsCityModel",
        title: "export.resetButtons.settingsCityModel",
        icon: "$vcsReturn",
        callback() {
          const E = JSON.parse(
            JSON.stringify(e.defaultState.settingsCityModel)
          );
          Object.assign(o.settingsCityModel, E);
        }
      },
      objectSelection: {
        name: "resetObjectSelection",
        title: "export.resetButtons.objectSelection",
        icon: "$vcsReturn",
        callback() {
          $.value = !0, o.selectedObjects = [];
        }
      },
      exportDestination: {
        name: "resetExportDestination",
        title: "export.resetButtons.userData",
        icon: "$vcsReturn",
        callback() {
          c.value.reset();
        }
      }
    }, G = le(() => {
      var E, y, L, A;
      return ((E = o.selectedDataSourceOptions) == null ? void 0 : E.type) === k.CITY_MODEL && r.allowEmail === !1 && r.allowExportName === !0 ? "exportName" : ((y = o.selectedDataSourceOptions) == null ? void 0 : y.type) === k.CITY_MODEL && r.allowEmail === !0 ? "exportDestination" : ((L = o.selectedDataSourceOptions) == null ? void 0 : L.type) === k.OBLIQUE ? "selectImages" : ((A = o.selectedDataSourceOptions) == null ? void 0 : A.type) === k.GEOJSON ? "selectFiles" : "";
    }), Y = le(
      () => G.value ? `export.stepTitles.${G.value}` : ""
    ), q = le(() => G.value === "exportDestination" ? "export.help.email" : G.value === "selectFiles" || G.value === "selectImages" ? "export.help.select" : "");
    return {
      stepOrder: s,
      increaseStep: S,
      requestEnabled: x,
      handleSession: N,
      areaSelectionLayerName: Ie,
      pluginConfig: r,
      pluginState: o,
      dataSourceItems: T,
      selectionTypeItems: D,
      SelectionTypes: K,
      DataSourceOptions: k,
      isValidEmail: h,
      sendRequest: _,
      stepValid: a,
      formSelectionMode: i,
      formSettings: u,
      formExportDestination: c,
      running: n,
      obliqueDownload: l,
      updateDataSource: C,
      resetActions: b,
      isReset: $,
      heading: Y,
      help: q,
      geoJsonItem: T.value.find(
        (E) => E.type === k.GEOJSON
      )
    };
  }
}, dc = { key: 0 }, fc = { key: 1 }, mc = { key: 2 }, pc = { class: "px-1" }, hc = ["href"], gc = { key: 0 }, Ec = { key: 1 }, Sc = { class: "px-1" }, yc = { class: "px-1" }, vc = { key: 0 }, bc = ["href"], xc = { class: "d-flex flex-grow-1 flex-row-reverse pa-2" };
function wc(t, e, o, r, n, l) {
  const s = M("VcsSelect"), a = M("VcsWizardStep"), i = M("SelectionObjects"), u = M("SelectionArea"), c = M("VcsCheckbox"), S = M("v-form"), O = M("SettingsCityModel"), g = M("SettingsOblique"), T = M("VcsTextField"), v = M("VcsTextArea"), D = M("ResultList"), m = M("VcsFormButton"), d = M("VcsWizard"), h = M("v-progress-linear"), x = M("v-chip"), N = M("v-overlay"), I = M("v-sheet");
  return F(), X(I, { class: "pb-2" }, {
    default: p(() => [
      f(d, {
        modelValue: r.pluginState.step,
        "onUpdate:modelValue": e[27] || (e[27] = (C) => r.pluginState.step = C),
        modelModifiers: { number: !0 }
      }, {
        default: p(() => {
          var C, _, $;
          return [
            f(a, {
              modelValue: r.pluginState.step,
              "onUpdate:modelValue": e[1] || (e[1] = (b) => r.pluginState.step = b),
              modelModifiers: { number: !0 },
              step: r.stepOrder.DATASOURCE,
              editable: "",
              complete: !!r.pluginState.selectedDataSourceOptions,
              heading: "export.stepTitles.dataSources"
            }, {
              help: p(() => [
                ne("ul", null, [
                  r.dataSourceItems.some(
                    (b) => b.type === r.DataSourceOptions.CITY_MODEL
                  ) ? (F(), Q(
                    "li",
                    dc,
                    j(t.$t("export.dataSources.cityModel")) + ": " + j(t.$t("export.help.dataSources.cityModel")),
                    1
                    /* TEXT */
                  )) : J("v-if", !0),
                  r.dataSourceItems.some(
                    (b) => b.type === r.DataSourceOptions.OBLIQUE
                  ) ? (F(), Q(
                    "li",
                    fc,
                    j(t.$t("export.dataSources.oblique")) + ": " + j(t.$t("export.help.dataSources.oblique")),
                    1
                    /* TEXT */
                  )) : J("v-if", !0),
                  r.dataSourceItems.some(
                    (b) => b.type === r.DataSourceOptions.GEOJSON
                  ) ? (F(), Q(
                    "li",
                    mc,
                    j(t.$st(r.geoJsonItem.title)) + ": " + j(t.$st(r.geoJsonItem.help)),
                    1
                    /* TEXT */
                  )) : J("v-if", !0)
                ])
              ]),
              default: p(() => [
                f(s, {
                  class: "px-1 pb-3",
                  items: r.dataSourceItems,
                  "model-value": r.pluginState.selectedDataSourceOptions,
                  "item-value": (b) => b.obliqueCollectionName ?? b.geojsonUrl ?? b.type,
                  "return-object": "",
                  placeholder: t.$t("export.select"),
                  "onUpdate:modelValue": e[0] || (e[0] = (b) => r.updateDataSource(b))
                }, null, 8, ["items", "model-value", "item-value", "placeholder"])
              ]),
              _: 1
              /* STABLE */
            }, 8, ["modelValue", "step", "complete"]),
            ft(f(a, {
              modelValue: r.pluginState.step,
              "onUpdate:modelValue": e[9] || (e[9] = (b) => r.pluginState.step = b),
              modelModifiers: { number: !0 },
              step: r.stepOrder.SELECTION_MODE,
              editable: "",
              complete: !!r.pluginState.selectedSelectionType,
              rules: [() => r.stepValid.selectionMode !== !1],
              heading: "export.stepTitles.selectionType",
              "header-actions": r.pluginState.selectedSelectionType === r.SelectionTypes.OBJECT_SELECTION ? [r.resetActions.objectSelection] : []
            }, {
              help: p(() => [
                ne("ul", null, [
                  (F(!0), Q(
                    ye,
                    null,
                    ve(r.selectionTypeItems, (b) => (F(), Q(
                      "li",
                      {
                        key: b.value
                      },
                      j(t.$st("export.selectionTypes." + b.value)) + ": " + j(t.$st("export.help.selectionTypes." + b.value)),
                      1
                      /* TEXT */
                    ))),
                    128
                    /* KEYED_FRAGMENT */
                  ))
                ])
              ]),
              default: p(() => [
                ne("div", pc, [
                  f(S, {
                    ref: "formSelectionMode",
                    modelValue: r.stepValid.selectionMode,
                    "onUpdate:modelValue": e[8] || (e[8] = (b) => r.stepValid.selectionMode = b),
                    "lazy-validation": ""
                  }, {
                    default: p(() => [
                      f(s, {
                        modelValue: r.pluginState.selectedSelectionType,
                        "onUpdate:modelValue": e[2] || (e[2] = (b) => r.pluginState.selectedSelectionType = b),
                        items: r.selectionTypeItems,
                        placeholder: t.$t("export.select"),
                        rules: [(b) => !!b || t.$t("export.validation.selectField")],
                        class: "pb-2"
                      }, null, 8, ["modelValue", "items", "placeholder", "rules"]),
                      r.pluginState.selectedSelectionType === r.SelectionTypes.OBJECT_SELECTION ? (F(), X(i, {
                        key: 0,
                        modelValue: r.pluginState.selectedObjects,
                        "onUpdate:modelValue": e[3] || (e[3] = (b) => r.pluginState.selectedObjects = b),
                        "is-reset": r.isReset,
                        "button-disabled": r.pluginState.selectedObjects.length === 0,
                        "button-show": r.pluginState.highestStep <= r.stepOrder.SELECTION_MODE,
                        onContinue: e[4] || (e[4] = (b) => r.increaseStep(r.stepOrder.SELECTION_MODE))
                      }, null, 8, ["modelValue", "is-reset", "button-disabled", "button-show"])) : r.pluginState.selectedSelectionType === r.SelectionTypes.AREA_SELECTION ? (F(), X(u, {
                        key: 1,
                        onSessionstart: e[5] || (e[5] = (b) => r.handleSession(b, r.stepOrder.SELECTION_MODE))
                      })) : r.pluginState.selectedSelectionType === r.SelectionTypes.CURRENT_IMAGE && r.pluginConfig.termsOfUse ? (F(), X(c, {
                        key: 2,
                        modelValue: r.pluginState.termsConsented,
                        "onUpdate:modelValue": e[7] || (e[7] = (b) => r.pluginState.termsConsented = b),
                        rules: [(b) => !!b || t.$t("export.validation.termsOfUse")]
                      }, {
                        label: p(() => [
                          B(
                            j(t.$t("export.userData.accept")) + "  ",
                            1
                            /* TEXT */
                          ),
                          ne("a", {
                            target: "_blank",
                            href: r.pluginConfig.termsOfUse.toString(),
                            onClick: e[6] || (e[6] = ar(() => {
                            }, ["stop"]))
                          }, j(t.$t("export.userData.termsOfUse")), 9, hc)
                        ]),
                        _: 1
                        /* STABLE */
                      }, 8, ["modelValue", "rules"])) : J("v-if", !0)
                    ]),
                    _: 1
                    /* STABLE */
                  }, 8, ["modelValue"])
                ])
              ]),
              _: 1
              /* STABLE */
            }, 8, ["modelValue", "step", "complete", "rules", "header-actions"]), [
              [mt, r.pluginState.highestStep >= r.stepOrder.SELECTION_MODE]
            ]),
            ft(f(a, {
              modelValue: r.pluginState.step,
              "onUpdate:modelValue": e[15] || (e[15] = (b) => r.pluginState.step = b),
              step: r.stepOrder.SETTINGS,
              editable: "",
              complete: r.pluginState.highestStep >= r.stepOrder.SETTINGS,
              rules: [() => !!r.stepValid.settings],
              heading: "export.stepTitles.settings",
              "header-actions": ((C = r.pluginState.selectedDataSourceOptions) == null ? void 0 : C.type) === r.DataSourceOptions.CITY_MODEL ? [r.resetActions.settingsCityModel] : []
            }, {
              help: p(() => [
                r.pluginState.selectedDataSourceOptions.type === r.DataSourceOptions.OBLIQUE ? (F(), Q(
                  "span",
                  gc,
                  j(t.$t("export.help.settings.oblique")),
                  1
                  /* TEXT */
                )) : r.pluginState.selectedDataSourceOptions.type === r.DataSourceOptions.CITY_MODEL ? (F(), Q(
                  "span",
                  Ec,
                  j(t.$t("export.help.settings.cityModel")),
                  1
                  /* TEXT */
                )) : J("v-if", !0)
              ]),
              default: p(() => [
                ne("div", Sc, [
                  f(S, {
                    ref: "formSettings",
                    modelValue: r.stepValid.settings,
                    "onUpdate:modelValue": e[14] || (e[14] = (b) => r.stepValid.settings = b),
                    "lazy-validation": ""
                  }, {
                    default: p(() => [
                      r.pluginState.selectedDataSourceOptions.type === r.DataSourceOptions.CITY_MODEL ? (F(), X(O, {
                        key: 0,
                        modelValue: r.pluginState.settingsCityModel,
                        "onUpdate:modelValue": e[10] || (e[10] = (b) => r.pluginState.settingsCityModel = b),
                        setup: r.pluginConfig.settingsCityModel,
                        "button-disabled": !r.stepValid.settings,
                        "button-show": r.pluginState.highestStep <= r.stepOrder.SETTINGS,
                        onContinue: e[11] || (e[11] = (b) => r.increaseStep(r.stepOrder.SETTINGS))
                      }, null, 8, ["modelValue", "setup", "button-disabled", "button-show"])) : r.pluginState.selectedDataSourceOptions.type === r.DataSourceOptions.OBLIQUE && r.pluginState.selectedSelectionType === r.SelectionTypes.AREA_SELECTION ? (F(), X(g, {
                        key: 1,
                        modelValue: r.pluginState.settingsOblique,
                        "onUpdate:modelValue": [
                          e[12] || (e[12] = (b) => r.pluginState.settingsOblique = b),
                          e[13] || (e[13] = (b) => r.increaseStep(r.stepOrder.SETTINGS))
                        ]
                      }, null, 8, ["modelValue"])) : J("v-if", !0)
                    ]),
                    _: 1
                    /* STABLE */
                  }, 8, ["modelValue"])
                ])
              ]),
              _: 1
              /* STABLE */
            }, 8, ["modelValue", "step", "complete", "rules", "header-actions"]), [
              [
                mt,
                r.pluginState.highestStep >= r.stepOrder.SETTINGS && ((_ = r.pluginState.selectedDataSourceOptions) == null ? void 0 : _.type) !== r.DataSourceOptions.GEOJSON
              ]
            ]),
            ft(f(a, {
              modelValue: r.pluginState.step,
              "onUpdate:modelValue": e[24] || (e[24] = (b) => r.pluginState.step = b),
              step: r.stepOrder.EXPORT_DESTINATION,
              editable: "",
              complete: r.pluginState.highestStep >= r.stepOrder.EXPORT_DESTINATION,
              rules: [() => r.stepValid.exportDestination !== !1],
              "header-actions": (($ = r.pluginState.selectedDataSourceOptions) == null ? void 0 : $.type) === r.DataSourceOptions.CITY_MODEL ? [r.resetActions.exportDestination] : [],
              heading: t.$st(r.heading)
            }, xn({
              default: p(() => [
                ne("div", yc, [
                  f(S, {
                    ref: "formExportDestination",
                    modelValue: r.stepValid.exportDestination,
                    "onUpdate:modelValue": e[23] || (e[23] = (b) => r.stepValid.exportDestination = b),
                    "lazy-validation": ""
                  }, {
                    default: p(() => [
                      r.pluginState.selectedDataSourceOptions.type === r.DataSourceOptions.CITY_MODEL ? (F(), Q("div", vc, [
                        r.pluginConfig.allowEmail ? (F(), X(T, {
                          key: 0,
                          modelValue: r.pluginState.email,
                          "onUpdate:modelValue": e[16] || (e[16] = (b) => r.pluginState.email = b),
                          label: void 0,
                          placeholder: t.$t("export.userData.email"),
                          rules: [
                            (b) => r.isValidEmail(b) || t.$t("export.validation.provideEmail")
                          ]
                        }, null, 8, ["modelValue", "placeholder", "rules"])) : J("v-if", !0),
                        r.pluginConfig.allowExportName ? (F(), X(T, {
                          key: 1,
                          modelValue: r.pluginState.exportName,
                          "onUpdate:modelValue": e[17] || (e[17] = (b) => r.pluginState.exportName = b),
                          label: void 0,
                          placeholder: t.$t("export.userData.exportName"),
                          rules: [
                            (b) => r.pluginConfig.allowEmail || b.length > 0 || t.$t("components.validation.required")
                          ]
                        }, null, 8, ["modelValue", "placeholder", "rules"])) : J("v-if", !0),
                        r.pluginConfig.allowDescription ? (F(), X(v, {
                          key: 2,
                          modelValue: r.pluginState.description,
                          "onUpdate:modelValue": e[18] || (e[18] = (b) => r.pluginState.description = b),
                          placeholder: t.$t("export.userData.description"),
                          class: "pb-2",
                          rows: "2"
                        }, null, 8, ["modelValue", "placeholder"])) : J("v-if", !0)
                      ])) : r.pluginState.selectedDataSourceOptions.type === r.DataSourceOptions.OBLIQUE || r.pluginState.selectedDataSourceOptions.type === r.DataSourceOptions.GEOJSON ? (F(), X(D, {
                        key: 1,
                        modelValue: r.pluginState.selectedResultItems,
                        "onUpdate:modelValue": e[19] || (e[19] = (b) => r.pluginState.selectedResultItems = b),
                        "selection-layer-name": r.areaSelectionLayerName,
                        "selected-data-source-options": r.pluginState.selectedDataSourceOptions,
                        active: r.pluginState.step === r.stepOrder.EXPORT_DESTINATION,
                        "max-selection-area": r.pluginConfig.maxSelectionArea,
                        onInvalidArea: e[20] || (e[20] = (b) => r.pluginState.step = r.stepOrder.SELECTION_MODE)
                      }, null, 8, ["modelValue", "selection-layer-name", "selected-data-source-options", "active", "max-selection-area"])) : J("v-if", !0),
                      r.pluginConfig.termsOfUse ? (F(), X(c, {
                        key: 2,
                        modelValue: r.pluginState.termsConsented,
                        "onUpdate:modelValue": e[22] || (e[22] = (b) => r.pluginState.termsConsented = b),
                        rules: [(b) => !!b || t.$t("export.validation.termsOfUse")]
                      }, {
                        label: p(() => [
                          B(
                            j(t.$t("export.userData.accept")) + "  ",
                            1
                            /* TEXT */
                          ),
                          ne("a", {
                            target: "_blank",
                            href: r.pluginConfig.termsOfUse.toString(),
                            onClick: e[21] || (e[21] = ar(() => {
                            }, ["stop"]))
                          }, j(t.$t("export.userData.termsOfUse")), 9, bc)
                        ]),
                        _: 1
                        /* STABLE */
                      }, 8, ["modelValue", "rules"])) : J("v-if", !0)
                    ]),
                    _: 1
                    /* STABLE */
                  }, 8, ["modelValue"])
                ])
              ]),
              _: 2
              /* DYNAMIC */
            }, [
              r.help ? {
                name: "help",
                fn: p(() => [
                  B(
                    j(t.$t(r.help)),
                    1
                    /* TEXT */
                  )
                ]),
                key: "0"
              } : void 0
            ]), 1032, ["modelValue", "step", "complete", "rules", "header-actions", "heading"]), [
              [mt, r.pluginState.highestStep >= r.stepOrder.EXPORT_DESTINATION]
            ]),
            f(a, {
              modelValue: r.pluginState.step,
              "onUpdate:modelValue": e[26] || (e[26] = (b) => r.pluginState.step = b),
              step: r.stepOrder.SEND_REQUEST,
              complete: r.pluginState.step > r.stepOrder.SEND_REQUEST,
              editable: r.requestEnabled && !r.running
            }, {
              title: p(() => [
                ne("div", xc, [
                  f(m, {
                    variant: "filled",
                    disabled: !r.requestEnabled || r.running,
                    loading: r.running,
                    onClick: e[25] || (e[25] = (b) => r.sendRequest())
                  }, {
                    default: p(() => [
                      B(
                        j(t.$t("export.sendRequest")),
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
      f(N, {
        modelValue: r.obliqueDownload.running,
        "onUpdate:modelValue": e[29] || (e[29] = (C) => r.obliqueDownload.running = C),
        contained: "",
        opacity: "0.8",
        class: "d-flex justify-center align-center"
      }, {
        default: p(() => [
          f(h, {
            modelValue: r.obliqueDownload.progress,
            "onUpdate:modelValue": e[28] || (e[28] = (C) => r.obliqueDownload.progress = C),
            height: "20",
            style: { width: "200px" },
            color: "base-lighten-2"
          }, {
            default: p(() => [
              ne(
                "strong",
                null,
                j(r.obliqueDownload.progress) + " %",
                1
                /* TEXT */
              )
            ]),
            _: 1
            /* STABLE */
          }, 8, ["modelValue"]),
          f(x, { color: "base-lighten-2" }, {
            default: p(() => [
              B(
                j(r.obliqueDownload.queue[0]) + " / " + j(r.obliqueDownload.queue[1]),
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
const Oc = /* @__PURE__ */ Te(uc, [["render", wc]]), We = () => {
  const t = jt();
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
    heightModeDefault: "absolute",
    allowHeightMode: !0,
    allowTextureExport: !0,
    allowAddGenericAttrs: !0,
    allowTiledExport: !0,
    allowTerrainExport: !0,
    termsOfUse: null,
    terrainAppearanceOptions: {},
    terrainUrl: null,
    terrainZoomLevel: -1,
    crs: t.epsg,
    allowDescription: !0,
    dataProjection: t.toJSON(),
    exportScene: !0,
    maxSelectionArea: 2e6,
    allowEmail: !0,
    allowExportName: !1
  };
}, Re = {
  cityModel: { type: k.CITY_MODEL },
  oblique: {
    type: k.OBLIQUE,
    obliqueCollectionName: void 0,
    // XXX get first oblique collections name from VcsApp?
    fileExtension: "jpg",
    dedicatedSource: !1,
    resolution: null,
    baseUrl: void 0
  },
  geojson: {
    type: k.GEOJSON,
    geojsonUrl: void 0,
    baseUrl: void 0,
    title: ""
  }
}, Lc = {
  name: "ExportConfigEditor",
  components: {
    VContainer: ot,
    VRow: nt,
    VCol: lt,
    AbstractConfigEditor: Go,
    VcsFormSection: qo,
    VcsLabel: Vt,
    VcsSelect: et,
    VcsTextField: jr,
    VcsCheckbox: Pt,
    VcsChipArrayInput: Bo,
    VcsProjection: ko
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
    var O;
    const e = re({
      cityModel: {
        isSelected: !1,
        properties: { ...Re.cityModel }
      },
      oblique: {
        isSelected: !1,
        properties: { ...Re.oblique }
      },
      geojson: {
        isSelected: !1,
        properties: { ...Re.geojson }
      }
    }), o = re(void 0), r = We(), n = re({
      ...structuredClone(r),
      ...t.getConfig()
    });
    n.value.dataSourceOptionsList.forEach((g) => {
      e.value[g.type].isSelected || (e.value[g.type].isSelected = !0, e.value[g.type].properties = {
        ...Re[g.type],
        ...g
      });
    });
    const l = [
      {
        value: "absolute",
        title: "export.settingsCityModel.absolute"
      },
      {
        value: "ellipsoid",
        title: "export.settingsCityModel.ellipsoid"
      }
    ];
    function s(g) {
      e.value[g].properties = {
        ...Re[g]
      };
    }
    const a = re(), i = re(
      t.getConfig().dataProjection && ((O = t.getConfig().dataProjection) == null ? void 0 : O.epsg) !== jt().epsg
    );
    function u(g, T) {
      return le({
        get() {
          return n.value[g] !== null;
        },
        set(v) {
          v ? (n.value[g] = r[g] || "", T && T()) : (n.value[g] = null, T && T());
        }
      });
    }
    function c(g, T, v) {
      v.includes(n.value[g]) || (n.value[g] = T ? [v[0]] : v[0]);
    }
    const S = () => {
      n.value.crs.length === 1 && (n.value.crs = n.value.crs[0]), i.value || delete n.value.dataProjection, n.value.dataSourceOptionsList = Object.keys(
        e.value
      ).filter((g) => e.value[g].isSelected).map((g) => {
        const T = sr(e.value[g].properties), v = {};
        return Object.keys(T).forEach((D) => {
          T[D] !== Re[g][D] && (v[D] = T[D]);
        }), v.type = g, v;
      }), t.setConfig(structuredClone(sr(n.value)));
    };
    return Ae(
      e,
      (g) => {
        Object.values(g).some((T) => T.isSelected) ? o.value = void 0 : o.value = "export.editor.dataSourceRequired";
      },
      { deep: !0 }
    ), {
      generalTermsOfUseUrl: a,
      localConfig: n,
      dataSourceList: e,
      resetDataSourceOption: s,
      DataSourceOptions: k,
      defaultOptions: r,
      hasTermsOfUse: u("termsOfUse", () => {
        var g, T, v;
        (v = (T = (g = a.value) == null ? void 0 : g.$refs) == null ? void 0 : T.textFieldRef) == null || v.validate();
      }),
      hasTerrainUrl: u("terrainUrl"),
      mapThematicClasses: ro,
      heightModeItems: l,
      hasDataProjection: i,
      updateDefault: c,
      predefinedCrs: le({
        get() {
          return Array.isArray(n.value.crs) ? n.value.crs : [n.value.crs];
        },
        set(g) {
          g.length > 1 ? n.value.crs = g : g.length === 1 && (n.value.crs = g[0]);
        }
      }),
      apply: S,
      errorMessageDataSource: o
    };
  }
};
function Tc(t, e, o, r, n, l) {
  const s = M("VcsCheckbox"), a = M("v-col"), i = M("VcsTextField"), u = M("v-row"), c = M("VcsLabel"), S = M("v-container"), O = M("VcsFormSection"), g = M("VcsSelect"), T = M("VcsChipArrayInput"), v = M("VcsProjection"), D = M("AbstractConfigEditor");
  return r.localConfig ? (F(), X(D, wn({ key: 0 }, { ...t.$attrs, ...t.$props }, { onSubmit: r.apply }), {
    default: p(() => [
      f(O, {
        heading: "export.editor.general",
        expandable: "",
        "start-open": !0
      }, {
        default: p(() => [
          f(S, { class: "py-0 px-1" }, {
            default: p(() => [
              f(u, { "no-gutters": "" }, {
                default: p(() => [
                  f(a, { cols: "6" }, {
                    default: p(() => [
                      f(s, {
                        id: "general-has-terms-of-use",
                        modelValue: r.hasTermsOfUse,
                        "onUpdate:modelValue": e[0] || (e[0] = (m) => r.hasTermsOfUse = m),
                        label: "export.editor.termsOfUse"
                      }, null, 8, ["modelValue"])
                    ]),
                    _: 1
                    /* STABLE */
                  }),
                  f(a, null, {
                    default: p(() => [
                      f(i, {
                        id: "general-terms-of-use-url",
                        ref: "generalTermsOfUseUrl",
                        modelValue: r.localConfig.termsOfUse,
                        "onUpdate:modelValue": e[1] || (e[1] = (m) => r.localConfig.termsOfUse = m),
                        clearable: "",
                        placeholder: "https://linktoprivacy",
                        disabled: !r.hasTermsOfUse,
                        rules: [
                          (m) => !r.hasTermsOfUse || !!m || "components.validation.required"
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
              f(u, { "no-gutters": "" }, {
                default: p(() => [
                  f(a, null, {
                    default: p(() => [
                      f(s, {
                        id: "general-allow-email",
                        modelValue: r.localConfig.allowEmail,
                        "onUpdate:modelValue": e[2] || (e[2] = (m) => r.localConfig.allowEmail = m),
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
              f(u, { "no-gutters": "" }, {
                default: p(() => [
                  f(a, null, {
                    default: p(() => [
                      f(s, {
                        id: "general-allow-description",
                        modelValue: r.localConfig.allowDescription,
                        "onUpdate:modelValue": e[3] || (e[3] = (m) => r.localConfig.allowDescription = m),
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
              f(u, { "no-gutters": "" }, {
                default: p(() => [
                  f(a, null, {
                    default: p(() => [
                      f(c, {
                        "html-for": "general-max-selection-area",
                        required: ""
                      }, {
                        default: p(() => [
                          B(
                            j(t.$t("export.editor.maxSelectionArea")),
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
                  f(a, { cols: "3" }, {
                    default: p(() => [
                      f(i, {
                        id: "general-max-selection-area",
                        modelValue: r.localConfig.maxSelectionArea,
                        "onUpdate:modelValue": e[4] || (e[4] = (m) => r.localConfig.maxSelectionArea = m),
                        modelModifiers: { number: !0 },
                        clearable: "",
                        type: "number",
                        unit: "m²",
                        min: 0,
                        rules: [
                          (m) => !!m || "components.validation.required",
                          (m) => m > 0 || "export.validation.negative"
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
      f(O, {
        heading: "export.editor.dataSources",
        expandable: "",
        "start-open": !0
      }, {
        default: p(() => [
          f(S, { class: "py-0 px-1" }, {
            default: p(() => [
              f(u, { "no-gutters": "" }, {
                default: p(() => [
                  f(a, { cols: "6" }, {
                    default: p(() => [
                      f(s, {
                        id: "data-source-city-model",
                        modelValue: r.dataSourceList.cityModel.isSelected,
                        "onUpdate:modelValue": e[5] || (e[5] = (m) => r.dataSourceList.cityModel.isSelected = m),
                        label: "export.dataSources.cityModel",
                        "error-messages": r.errorMessageDataSource,
                        onChange: e[6] || (e[6] = (m) => m || r.resetDataSourceOption(r.DataSourceOptions.CITY_MODEL))
                      }, null, 8, ["modelValue", "error-messages"])
                    ]),
                    _: 1
                    /* STABLE */
                  })
                ]),
                _: 1
                /* STABLE */
              }),
              f(u, { "no-gutters": "" }, {
                default: p(() => [
                  f(a, null, {
                    default: p(() => [
                      f(s, {
                        id: "data-source-oblique",
                        modelValue: r.dataSourceList.oblique.isSelected,
                        "onUpdate:modelValue": e[7] || (e[7] = (m) => r.dataSourceList.oblique.isSelected = m),
                        label: "export.dataSources.oblique",
                        "error-messages": r.errorMessageDataSource,
                        onChange: e[8] || (e[8] = (m) => m || r.resetDataSourceOption(r.DataSourceOptions.OBLIQUE))
                      }, null, 8, ["modelValue", "error-messages"])
                    ]),
                    _: 1
                    /* STABLE */
                  }),
                  r.dataSourceList.oblique.isSelected ? (F(), X(a, { key: 0 }, {
                    default: p(() => [
                      f(u, { "no-gutters": "" }, {
                        default: p(() => [
                          f(a, null, {
                            default: p(() => [
                              f(c, {
                                "html-for": "data-source-oblique-name",
                                required: r.dataSourceList.oblique.isSelected,
                                disabled: !r.dataSourceList.oblique.isSelected
                              }, {
                                default: p(() => [
                                  B(
                                    j(t.$t("export.editor.obliqueName")),
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
                          f(a, null, {
                            default: p(() => [
                              f(i, {
                                id: "data-source-oblique-name",
                                modelValue: r.dataSourceList.oblique.properties.obliqueCollectionName,
                                "onUpdate:modelValue": e[9] || (e[9] = (m) => r.dataSourceList.oblique.properties.obliqueCollectionName = m),
                                disabled: !r.dataSourceList.oblique.isSelected,
                                rules: r.dataSourceList.oblique.isSelected ? [(m) => !!m || "components.validation.required"] : [],
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
                      f(u, { "no-gutters": "" }, {
                        default: p(() => [
                          f(a, null, {
                            default: p(() => [
                              f(c, {
                                "html-for": "data-source-oblique-file-extension",
                                disabled: !r.dataSourceList.oblique.isSelected
                              }, {
                                default: p(() => [
                                  B(
                                    j(t.$t("export.editor.fileExtension")),
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
                          f(a, null, {
                            default: p(() => [
                              f(i, {
                                id: "data-source-oblique-file-extension",
                                modelValue: r.dataSourceList.oblique.properties.fileExtension,
                                "onUpdate:modelValue": e[10] || (e[10] = (m) => r.dataSourceList.oblique.properties.fileExtension = m),
                                disabled: !r.dataSourceList.oblique.isSelected,
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
                      f(u, { "no-gutters": "" }, {
                        default: p(() => [
                          f(a, null, {
                            default: p(() => [
                              f(c, {
                                "html-for": "data-source-oblique-resolution",
                                disabled: !r.dataSourceList.oblique.isSelected
                              }, {
                                default: p(() => [
                                  B(
                                    j(t.$t("export.editor.resolution")),
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
                          f(a, null, {
                            default: p(() => [
                              f(i, {
                                id: "data-source-oblique-resolution",
                                modelValue: r.dataSourceList.oblique.properties.resolution,
                                "onUpdate:modelValue": e[11] || (e[11] = (m) => r.dataSourceList.oblique.properties.resolution = m),
                                modelModifiers: { number: !0 },
                                type: "number",
                                min: 0,
                                disabled: !r.dataSourceList.oblique.isSelected,
                                placeholder: "1",
                                rules: [
                                  (m) => m == null || m === "" || m > 0 || "export.validation.negative"
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
                      f(u, { "no-gutters": "" }, {
                        default: p(() => [
                          f(a, null, {
                            default: p(() => [
                              f(s, {
                                id: "data-source-oblique-dedicated",
                                modelValue: r.dataSourceList.oblique.properties.dedicatedSource,
                                "onUpdate:modelValue": e[12] || (e[12] = (m) => r.dataSourceList.oblique.properties.dedicatedSource = m),
                                label: "export.editor.dedicatedSource",
                                disabled: !r.dataSourceList.oblique.isSelected
                              }, null, 8, ["modelValue", "disabled"])
                            ]),
                            _: 1
                            /* STABLE */
                          })
                        ]),
                        _: 1
                        /* STABLE */
                      }),
                      r.dataSourceList.oblique.properties.dedicatedSource ? (F(), X(u, {
                        key: 0,
                        "no-gutters": ""
                      }, {
                        default: p(() => [
                          f(a, null, {
                            default: p(() => [
                              f(c, {
                                "html-for": "data-source-oblique-base-url",
                                required: ""
                              }, {
                                default: p(() => [
                                  B(
                                    j(t.$t("export.editor.baseUrl")),
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
                          f(a, null, {
                            default: p(() => [
                              f(i, {
                                id: "data-source-oblique-base-url",
                                modelValue: r.dataSourceList.oblique.properties.baseUrl,
                                "onUpdate:modelValue": e[13] || (e[13] = (m) => r.dataSourceList.oblique.properties.baseUrl = m),
                                clearable: "",
                                rules: [(m) => !!m || "components.validation.required"],
                                placeholder: t.$t("export.editor.placeholder.baseUrl")
                              }, null, 8, ["modelValue", "rules", "placeholder"])
                            ]),
                            _: 1
                            /* STABLE */
                          })
                        ]),
                        _: 1
                        /* STABLE */
                      })) : J("v-if", !0)
                    ]),
                    _: 1
                    /* STABLE */
                  })) : J("v-if", !0)
                ]),
                _: 1
                /* STABLE */
              }),
              f(u, { "no-gutters": "" }, {
                default: p(() => [
                  f(a, { cols: "6" }, {
                    default: p(() => [
                      f(s, {
                        id: "data-source-geojson",
                        modelValue: r.dataSourceList.geojson.isSelected,
                        "onUpdate:modelValue": e[14] || (e[14] = (m) => r.dataSourceList.geojson.isSelected = m),
                        label: "export.dataSources.geojson",
                        "error-messages": r.errorMessageDataSource,
                        onChange: e[15] || (e[15] = (m) => m || r.resetDataSourceOption(r.DataSourceOptions.GEOJSON))
                      }, null, 8, ["modelValue", "error-messages"])
                    ]),
                    _: 1
                    /* STABLE */
                  }),
                  r.dataSourceList.geojson.isSelected ? (F(), X(a, { key: 0 }, {
                    default: p(() => [
                      f(u, { "no-gutters": "" }, {
                        default: p(() => [
                          f(a, null, {
                            default: p(() => [
                              f(c, {
                                "html-for": "data-source-geojson-title",
                                required: r.dataSourceList.geojson.isSelected
                              }, {
                                default: p(() => [
                                  B(
                                    j(t.$t("export.editor.title")),
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
                          f(a, null, {
                            default: p(() => [
                              f(i, {
                                id: "data-source-geojson-title",
                                modelValue: r.dataSourceList.geojson.properties.title,
                                "onUpdate:modelValue": e[16] || (e[16] = (m) => r.dataSourceList.geojson.properties.title = m),
                                disabled: !r.dataSourceList.geojson.isSelected,
                                rules: r.dataSourceList.geojson.isSelected ? [(m) => !!m || "components.validation.required"] : [],
                                placeholder: t.$t("export.editor.title")
                              }, null, 8, ["modelValue", "disabled", "rules", "placeholder"])
                            ]),
                            _: 1
                            /* STABLE */
                          })
                        ]),
                        _: 1
                        /* STABLE */
                      }),
                      f(u, { "no-gutters": "" }, {
                        default: p(() => [
                          f(a, null, {
                            default: p(() => [
                              f(c, {
                                "html-for": "data-source-geojson-url",
                                required: r.dataSourceList.geojson.isSelected
                              }, {
                                default: p(() => [
                                  B(
                                    j(t.$t("export.editor.geojsonUrl")),
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
                          f(a, null, {
                            default: p(() => [
                              f(i, {
                                id: "data-source-geojson-url",
                                modelValue: r.dataSourceList.geojson.properties.geojsonUrl,
                                "onUpdate:modelValue": e[17] || (e[17] = (m) => r.dataSourceList.geojson.properties.geojsonUrl = m),
                                disabled: !r.dataSourceList.geojson.isSelected,
                                rules: r.dataSourceList.geojson.isSelected ? [(m) => !!m || "components.validation.required"] : [],
                                placeholder: t.$t("export.editor.placeholder.geojsonUrl")
                              }, null, 8, ["modelValue", "disabled", "rules", "placeholder"])
                            ]),
                            _: 1
                            /* STABLE */
                          })
                        ]),
                        _: 1
                        /* STABLE */
                      }),
                      f(u, { "no-gutters": "" }, {
                        default: p(() => [
                          f(a, null, {
                            default: p(() => [
                              f(c, {
                                "html-for": "data-source-geojson-base-url",
                                required: r.dataSourceList.geojson.isSelected
                              }, {
                                default: p(() => [
                                  B(
                                    j(t.$t("export.editor.baseUrl")),
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
                          f(a, null, {
                            default: p(() => [
                              f(i, {
                                id: "data-source-geojson-base-url",
                                modelValue: r.dataSourceList.geojson.properties.baseUrl,
                                "onUpdate:modelValue": e[18] || (e[18] = (m) => r.dataSourceList.geojson.properties.baseUrl = m),
                                disabled: !r.dataSourceList.geojson.isSelected,
                                rules: r.dataSourceList.geojson.isSelected ? [(m) => !!m || "components.validation.required"] : [],
                                placeholder: t.$t("export.editor.placeholder.baseUrl")
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
                  })) : J("v-if", !0)
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
      r.dataSourceList.cityModel.isSelected ? (F(), X(O, {
        key: 0,
        heading: "export.editor.cityModelSettings",
        expandable: "",
        "start-open": !0
      }, {
        default: p(() => [
          f(S, { class: "py-0 px-1" }, {
            default: p(() => [
              f(u, { "no-gutters": "" }, {
                default: p(() => [
                  f(a, null, {
                    default: p(() => [
                      f(c, { "html-for": "settings-fmeSecurityToken" }, {
                        default: p(() => [
                          B(
                            j(t.$st("export.editor.fmeSecurityToken")),
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
                  f(a, null, {
                    default: p(() => [
                      f(i, {
                        id: "settings-fmeSecurityToken",
                        modelValue: r.localConfig.fmeSecurityToken,
                        "onUpdate:modelValue": e[19] || (e[19] = (m) => r.localConfig.fmeSecurityToken = m),
                        placeholder: t.$st("export.editor.fmeSecurityToken")
                      }, null, 8, ["modelValue", "placeholder"])
                    ]),
                    _: 1
                    /* STABLE */
                  })
                ]),
                _: 1
                /* STABLE */
              }),
              f(u, { "no-gutters": "" }, {
                default: p(() => [
                  f(a, null, {
                    default: p(() => [
                      f(c, {
                        "html-for": "settings-fmeServerUrl",
                        required: ""
                      }, {
                        default: p(() => [
                          B(
                            j(t.$st("export.editor.fmeServerUrl")),
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
                  f(a, null, {
                    default: p(() => [
                      f(i, {
                        id: "settings-fmeServerUrl",
                        modelValue: r.localConfig.fmeServerUrl,
                        "onUpdate:modelValue": e[20] || (e[20] = (m) => r.localConfig.fmeServerUrl = m),
                        rules: [(m) => !!m || "components.validation.required"],
                        placeholder: t.$st("export.editor.fmeServerUrl")
                      }, null, 8, ["modelValue", "rules", "placeholder"])
                    ]),
                    _: 1
                    /* STABLE */
                  })
                ]),
                _: 1
                /* STABLE */
              }),
              (F(), Q(
                ye,
                null,
                ve(["exportFormat", "lod", "thematicClass"], (m) => ne("div", { key: m }, [
                  f(
                    u,
                    { "no-gutters": "" },
                    {
                      default: p(() => [
                        f(
                          a,
                          { cols: "6" },
                          {
                            default: p(() => [
                              f(c, {
                                "html-for": `settings-${m}-list`,
                                required: ""
                              }, {
                                default: p(() => [
                                  B(
                                    j(t.$st(`export.editor.${m}List`)),
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
                        f(
                          a,
                          { cols: "2" },
                          {
                            default: p(() => [
                              f(g, {
                                id: `settings-${m}-list`,
                                modelValue: r.localConfig[`${m}List`],
                                "onUpdate:modelValue": [
                                  (d) => r.localConfig[`${m}List`] = d,
                                  (d) => r.updateDefault(`${m}Default`, m !== "lod", d)
                                ],
                                multiple: "",
                                items: m === "thematicClass" ? r.mapThematicClasses(r.defaultOptions.thematicClassList) : r.defaultOptions[`${m}List`],
                                rules: [(d) => !!d.length || "components.validation.required"]
                              }, null, 8, ["id", "modelValue", "onUpdate:modelValue", "items", "rules"])
                            ]),
                            _: 2
                            /* DYNAMIC */
                          },
                          1024
                          /* DYNAMIC_SLOTS */
                        ),
                        f(
                          a,
                          { cols: "2" },
                          {
                            default: p(() => [
                              f(c, {
                                "html-for": `settings-${m}-default`
                              }, {
                                default: p(() => [
                                  B(
                                    j(t.$t("export.editor.default")),
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
                        f(
                          a,
                          { cols: "2" },
                          {
                            default: p(() => [
                              f(g, {
                                id: `settings-${m}-default`,
                                modelValue: r.localConfig[`${m}Default`],
                                "onUpdate:modelValue": (d) => r.localConfig[`${m}Default`] = d,
                                multiple: m !== "lod",
                                items: m === "thematicClass" ? r.mapThematicClasses(r.localConfig.thematicClassList) : r.localConfig[`${m}List`]
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
              f(u, { "no-gutters": "" }, {
                default: p(() => [
                  f(a, { cols: "6" }, {
                    default: p(() => [
                      f(c, { "html-for": "settings-appearance-theme-list" }, {
                        default: p(() => [
                          B(
                            j(t.$t("export.settingsCityModel.appearanceTheme")),
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
                  f(a, null, {
                    default: p(() => [
                      f(T, {
                        id: "settings-appearance-theme-list",
                        modelValue: r.localConfig.appearanceThemeList,
                        "onUpdate:modelValue": [
                          e[21] || (e[21] = (m) => r.localConfig.appearanceThemeList = m),
                          e[22] || (e[22] = (m) => r.updateDefault("appearanceThemeDefault", !1, m))
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
              f(u, { "no-gutters": "" }, {
                default: p(() => [
                  f(a, null, {
                    default: p(() => [
                      f(c, {
                        "html-for": "settings-appearance-theme-default",
                        required: ""
                      }, {
                        default: p(() => [
                          B(
                            j(t.$t("export.editor.appearanceThemeDefault")),
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
                  f(a, null, {
                    default: p(() => [
                      f(g, {
                        id: "settings-appearance-theme-default",
                        modelValue: r.localConfig.appearanceThemeDefault,
                        "onUpdate:modelValue": e[23] || (e[23] = (m) => r.localConfig.appearanceThemeDefault = m),
                        items: r.localConfig.appearanceThemeList,
                        rules: [(m) => !!m || "components.validation.required"]
                      }, null, 8, ["modelValue", "items", "rules"])
                    ]),
                    _: 1
                    /* STABLE */
                  })
                ]),
                _: 1
                /* STABLE */
              }),
              f(u, { "no-gutters": "" }, {
                default: p(() => [
                  f(a, { cols: "6" }, {
                    default: p(() => [
                      f(c, {
                        "html-for": "settings-predefined-crs",
                        required: ""
                      }, {
                        default: p(() => [
                          B(
                            j(t.$t("export.editor.crsPredefined")),
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
                  f(a, { cols: "6" }, {
                    default: p(() => [
                      f(T, {
                        id: "settings-predefined-crs",
                        modelValue: r.predefinedCrs,
                        "onUpdate:modelValue": e[24] || (e[24] = (m) => r.predefinedCrs = m),
                        "input-width": 100,
                        column: !0,
                        rules: [!!r.predefinedCrs || "components.validation.required"]
                      }, null, 8, ["modelValue", "rules"])
                    ]),
                    _: 1
                    /* STABLE */
                  })
                ]),
                _: 1
                /* STABLE */
              }),
              f(u, { "no-gutters": "" }, {
                default: p(() => [
                  f(a, { cols: "6" }, {
                    default: p(() => [
                      f(s, {
                        id: "settings-allow-height-mode",
                        modelValue: r.localConfig.allowHeightMode,
                        "onUpdate:modelValue": e[25] || (e[25] = (m) => r.localConfig.allowHeightMode = m),
                        label: "export.editor.allowHeightMode",
                        "true-value": !0,
                        "false-value": !1
                      }, null, 8, ["modelValue"])
                    ]),
                    _: 1
                    /* STABLE */
                  }),
                  f(a, null, {
                    default: p(() => [
                      f(c, {
                        "html-for": "settings-height-mode-default",
                        required: ""
                      }, {
                        default: p(() => [
                          B(
                            j(t.$t("export.editor.default")),
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
                  f(a, null, {
                    default: p(() => [
                      f(g, {
                        id: "settings-height-mode-default",
                        modelValue: r.localConfig.heightModeDefault,
                        "onUpdate:modelValue": e[26] || (e[26] = (m) => r.localConfig.heightModeDefault = m),
                        items: r.heightModeItems,
                        rules: [(m) => !!m || "components.validation.required"]
                      }, null, 8, ["modelValue", "items", "rules"])
                    ]),
                    _: 1
                    /* STABLE */
                  })
                ]),
                _: 1
                /* STABLE */
              }),
              f(u, { "no-gutters": "" }, {
                default: p(() => [
                  f(a, { cols: "12" }, {
                    default: p(() => [
                      f(s, {
                        id: "settings-data-projection",
                        modelValue: r.hasDataProjection,
                        "onUpdate:modelValue": e[27] || (e[27] = (m) => r.hasDataProjection = m),
                        label: "export.editor.overrideMapProjection",
                        "true-value": !0,
                        "false-value": !1
                      }, null, 8, ["modelValue"])
                    ]),
                    _: 1
                    /* STABLE */
                  }),
                  r.hasDataProjection ? (F(), X(v, {
                    key: 0,
                    id: "settings-data-projection",
                    modelValue: r.localConfig.dataProjection,
                    "onUpdate:modelValue": e[28] || (e[28] = (m) => r.localConfig.dataProjection = m),
                    "hide-alias": "",
                    required: ""
                  }, null, 8, ["modelValue"])) : J("v-if", !0)
                ]),
                _: 1
                /* STABLE */
              }),
              (F(), Q(
                ye,
                null,
                ve([
                  "exportScene",
                  "allowTextureExport",
                  "allowAddGenericAttrs",
                  "allowTiledExport",
                  "allowTerrainExport"
                ], (m) => f(
                  u,
                  {
                    key: m,
                    "no-gutters": ""
                  },
                  {
                    default: p(() => [
                      f(
                        a,
                        null,
                        {
                          default: p(() => [
                            f(s, {
                              id: `settings-${m}`,
                              modelValue: r.localConfig[m],
                              "onUpdate:modelValue": (d) => r.localConfig[m] = d,
                              label: `export.editor.${m}`,
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
              r.localConfig.allowTerrainExport ? (F(), X(u, {
                key: 0,
                "no-gutters": ""
              }, {
                default: p(() => [
                  f(a, null, {
                    default: p(() => [
                      f(s, {
                        id: "settings-has-terrain-url",
                        modelValue: r.hasTerrainUrl,
                        "onUpdate:modelValue": e[29] || (e[29] = (m) => r.hasTerrainUrl = m),
                        label: "export.editor.terrainUrl"
                      }, null, 8, ["modelValue"])
                    ]),
                    _: 1
                    /* STABLE */
                  }),
                  f(a, null, {
                    default: p(() => [
                      f(i, {
                        id: "settings-terrain-url",
                        modelValue: r.localConfig.terrainUrl,
                        "onUpdate:modelValue": e[30] || (e[30] = (m) => r.localConfig.terrainUrl = m),
                        clearable: "",
                        disabled: !r.hasTerrainUrl,
                        placeholder: t.$t("export.editor.placeholder.terrainUrl")
                      }, null, 8, ["modelValue", "disabled", "placeholder"])
                    ]),
                    _: 1
                    /* STABLE */
                  })
                ]),
                _: 1
                /* STABLE */
              })) : J("v-if", !0),
              r.localConfig.allowTerrainExport ? (F(), X(u, {
                key: 1,
                "no-gutters": ""
              }, {
                default: p(() => [
                  f(a, null, {
                    default: p(() => [
                      f(c, { "html-for": "settings-terrain-zoom-level" }, {
                        default: p(() => [
                          B(
                            j(t.$t("export.editor.terrainZoomLevel")),
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
                  f(a, { cols: "3" }, {
                    default: p(() => [
                      f(i, {
                        id: "settings-terrain-zoom-level",
                        modelValue: r.localConfig.terrainZoomLevel,
                        "onUpdate:modelValue": e[31] || (e[31] = (m) => r.localConfig.terrainZoomLevel = m),
                        modelModifiers: { number: !0 },
                        clearable: "",
                        min: -1,
                        type: "number",
                        rules: [
                          (m) => Number.isInteger(Number(m)) || "export.validation.integer",
                          (m) => m >= -1 || "export.validation.negativeOne"
                        ]
                      }, null, 8, ["modelValue", "rules"])
                    ]),
                    _: 1
                    /* STABLE */
                  })
                ]),
                _: 1
                /* STABLE */
              })) : J("v-if", !0)
            ]),
            _: 1
            /* STABLE */
          })
        ]),
        _: 1
        /* STABLE */
      })) : J("v-if", !0)
    ]),
    _: 1
    /* STABLE */
  }, 16, ["onSubmit"])) : J("v-if", !0);
}
const Cc = /* @__PURE__ */ Te(Lc, [["render", Tc]]), Nc = {
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
}, Rc = {
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
}, Oe = "export_window_id";
function Ur(t, e, o) {
  const r = jt();
  t.dataProjection || (e.settingsCityModel.dataProjection = r), t.crs || (e.settingsCityModel.crs = r.epsg, o.settingsCityModel.selectedCrs = r.epsg);
}
const Pc = (t) => {
  let e = null, o = null, r = null, n = null, l = [], s;
  return {
    get name() {
      return Se;
    },
    get version() {
      return Pn;
    },
    get mapVersion() {
      return Un;
    },
    /** @returns {import("./configManager").ExportOptions} */
    get config() {
      return o;
    },
    /** @returns {import("./configManager").ExportState} */
    get state() {
      return r;
    },
    /**
     * Additional parameters (if any) that can be used to customize or configure the plugin further.
     * These can be set from other plugins and are handled in the body of the FME Request.
     * They can be used to forward login information (SessionIds).
     * @type {Object}
     */
    additionalParams: void 0,
    /**
     * initial state for setting back state to default values
     * @returns {import("./configManager").ExportState}
     */
    get defaultState() {
      return n;
    },
    get dataSource() {
      return e;
    },
    /**
     * @param {import("@vcmap/ui").VcsUiApp} vcsUiApp
     */
    initialize(a) {
      const { pluginConfig: i, pluginState: u } = Wn(
        t,
        We()
      );
      s = a, o = i, r = Ue(u), n = JSON.parse(JSON.stringify(u)), l = [
        a.moduleAdded.addEventListener(() => {
          Ur(t, i, u);
        }),
        a.moduleRemoved.addEventListener(() => {
          Ur(t, i, u);
        })
      ];
    },
    /**
     * @param {import("@vcmap/ui").VcsUiApp} vcsUiApp
     * @returns {Promise<void>}
     */
    onVcsAppMounted: async (a) => {
      const { action: i } = Xo(
        {
          name: "export.name",
          title: "export.tooltip",
          icon: "$vcsExport"
        },
        {
          id: Oe,
          component: Oc,
          slot: Yo.DYNAMIC_LEFT,
          state: {
            headerTitle: "export.headerTitle",
            headerIcon: "$vcsExport",
            infoUrlCallback: a.getHelpUrlCallback(
              "/tools/exportTool.html"
            ),
            styles: {
              width: "350px",
              height: "auto",
              overflow: "none !important"
            }
          }
        },
        a.windowManager,
        Se
      );
      a.toolboxManager.add(
        {
          id: Oe,
          type: zo.SINGLE,
          action: Ue(i)
        },
        Se
      ), a.contextMenuManager.addEventHandler(async (u) => {
        var S;
        const c = [];
        if (u.feature) {
          const O = (S = a.layers.getByKey(
            u.feature[qr]
          )) == null ? void 0 : S.properties;
          O != null && O.exportWorkbench && (O == null ? void 0 : O.exportWorkbench) === o.settingsCityModel.fmeServerUrl && c.push({
            id: "export_object",
            name: "export.context.cityModel",
            icon: "$vcsExport",
            callback() {
              var T;
              a.toolboxManager.get(Oe).action.active || (i.callback(), a.toolboxManager.get(Oe).action.active = !0);
              const g = a.plugins.getByKey(Se);
              g.state.selectedDataSourceOptions = {
                type: "cityModel",
                title: "export.dataSources.cityModel"
              }, g.state.step = 2, g.state.highestStep = 2, g.state.selectedSelectionType = "objectSelection", g.state.selectedObjects = [(T = u.feature) == null ? void 0 : T.getId()];
            }
          });
        }
        return c;
      }, Se);
    },
    updateDataSource(a, i, u) {
      e = sc(i, a), e instanceof Qe && (e.viewDirectionFilter = r.settingsOblique.directionFilter, e.downloadState = u);
    },
    resetState: () => Object.assign(r, JSON.parse(JSON.stringify(n))),
    i18n: {
      de: Nc,
      en: Rc
    },
    getDefaultOptions: We,
    toJSON() {
      const a = We(), i = {
        termsOfUse: o.termsOfUse,
        dataSourceOptionsList: o.dataSourceOptionsList,
        allowDescription: o.allowDescription,
        allowEmail: o.allowEmail,
        allowExportName: o.allowExportName,
        maxSelectionArea: o.maxSelectionArea,
        ...o.settingsCityModel,
        ...o.defaults
      };
      return Object.keys(i).reduce((c, S) => (Vn(a[S], i[S]) || (c[S] = i[S]), c), {});
    },
    getConfigEditors() {
      return [
        {
          component: Cc,
          title: "export.editorTitle",
          infoUrlCallback: s == null ? void 0 : s.getHelpUrlCallback(
            "/components/plugins/exportToolConfig.html",
            "app-configurator"
          )
        }
      ];
    },
    destroy() {
      l.forEach((a) => a());
    }
  };
};
export {
  Pc as default,
  Oe as windowId
};
