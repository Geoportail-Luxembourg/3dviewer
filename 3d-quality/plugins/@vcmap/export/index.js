
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
} await loadCss('data:text/css;base64,OmRlZXAoLnYtaW5wdXRfX2RldGFpbHMpe2Rpc3BsYXk6bm9uZX1bZGF0YS12LTYwNjZiNDU3XSAudi1maWVsZF9faW5wdXR7cGFkZGluZy1yaWdodDowIWltcG9ydGFudH1bZGF0YS12LTYwNjZiNDU3XSAudi1jb250YWluZXJ7cGFkZGluZzowIWltcG9ydGFudH0ubGlzdC1oZWlnaHRbZGF0YS12LWYzNDFiOTgyXXttYXgtaGVpZ2h0OjI5MHB4O292ZXJmbG93LXk6YXV0b30K');var wo = Object.defineProperty;
var Lo = (e, t, r) => t in e ? wo(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var J = (e, t, r) => Lo(e, typeof t != "symbol" ? t + "" : t, r);
import { VcsToolButton as $o, getDefaultPrimaryColor as Ot, getHighlightStyle as tr, NotificationType as we, VcsFormButton as Vt, useProxiedComplexModel as Mt, VcsLabel as jt, VcsSelect as tt, VcsCheckbox as Ut, downloadBlob as Oo, downloadURI as jr, VcsList as To, useProxiedAtomicModel as Co, VcsTextField as Ur, VcsTextArea as Io, VcsWizard as No, VcsWizardStep as Ro, AbstractConfigEditor as Ao, VcsFormSection as Do, VcsChipArrayInput as Vo, VcsProjection as Mo, createToggleAction as jo, WindowSlot as Uo, ToolboxType as Fo } from "../../../assets/ui.js";
import { GeometryType as Ze, VectorStyleItem as Fr, VectorLayer as rt, mercatorProjection as Ae, markVolatile as Pr, startCreateFeatureSession as Po, AbstractInteraction as xo, VcsEvent as qo, EventType as Go, ModificationKeyType as Bo, vcsLayerName as xr, CesiumTilesetLayer as qr, TMSLayer as Gr, WMSLayer as Br, obliqueViewDirectionNames as rr, moduleIdSymbol as ko, volatileModuleId as _o, SingleImageLayer as zo, VectorTileLayer as Ho, wgs84Projection as Tt, CesiumMap as Ft, parseGeoJSON as Jo, hidden as kr, createAbsoluteFeature as Wo, writeGeoJSONFeature as Xo, getExtrusionHeightInfo as Yo, vectorStyleSymbol as Ko, ObliqueView as Zo, hasSameOrigin as Qo, ObliqueImage as es, obliqueGeometry as ts, imageGeometryToMercatorGeometry as rs, ObliqueMap as Pt, TerrainLayer as os, Projection as ss, Extent as _r, ObliqueCollection as ns, ObliqueViewDirection as ls, GeoJSONLayer as is, getDefaultProjection as xt } from "../../../assets/core.js";
import { reactive as Qe, defineComponent as $e, inject as Fe, ref as ne, onMounted as zr, resolveComponent as N, openBlock as D, createBlock as B, withCtx as h, createVNode as m, createElementBlock as re, Fragment as ye, renderList as be, shallowRef as as, computed as ue, watch as Ne, createTextVNode as x, toDisplayString as V, createElementVNode as ae, normalizeClass as us, createCommentVNode as X, onBeforeMount as cs, onUnmounted as Hr, withDirectives as pt, withModifiers as or, vShow as mt, createSlots as ds, toRaw as sr, mergeProps as fs } from "../../../assets/vue.js";
import { VSheet as ot, VInput as Jr, VTooltip as Wr, VContainer as st, VRow as nt, VCol as lt, VIcon as Xr, VForm as ps, VOverlay as ms, VChip as hs, VProgressLinear as gs } from "../../../assets/vuetify.js";
import { Color as Ss } from "../../../assets/cesium.js";
import { ol$extent$intersects as Es, ol$size$toSize as ys, ol$geom$Polygon as bs, ol$sphere$getArea as vs, ol$format$GeoJSON as ws, ol$Feature as nr } from "../../../assets/ol.js";
function Ls(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var $s = function e(t, r) {
  if (t === r) return !0;
  if (t && r && typeof t == "object" && typeof r == "object") {
    if (t.constructor !== r.constructor) return !1;
    var o, s, a;
    if (Array.isArray(t)) {
      if (o = t.length, o != r.length) return !1;
      for (s = o; s-- !== 0; )
        if (!e(t[s], r[s])) return !1;
      return !0;
    }
    if (t.constructor === RegExp) return t.source === r.source && t.flags === r.flags;
    if (t.valueOf !== Object.prototype.valueOf) return t.valueOf() === r.valueOf();
    if (t.toString !== Object.prototype.toString) return t.toString() === r.toString();
    if (a = Object.keys(t), o = a.length, o !== Object.keys(r).length) return !1;
    for (s = o; s-- !== 0; )
      if (!Object.prototype.hasOwnProperty.call(r, a[s])) return !1;
    for (s = o; s-- !== 0; ) {
      var i = a[s];
      if (!e(t[i], r[i])) return !1;
    }
    return !0;
  }
  return t !== t && r !== r;
};
const Os = /* @__PURE__ */ Ls($s), he = "@vcmap/export", Ts = "2.0.8", Cs = "^6.0", je = Symbol("areaSelection");
var Yr = /* @__PURE__ */ ((e) => (e.Polygon = "$vcsTriangle", e.BBox = "$vcsBoundingBox", e))(Yr || {});
const ht = Qe({
  [Ze.Polygon]: !1,
  [Ze.BBox]: !1
});
function gt(e) {
  return new Fr({
    fill: {
      color: Ss.fromCssColorString(e).withAlpha(0.3).toCssColorString()
    },
    stroke: {
      color: e,
      width: 2
    }
  });
}
const Is = $e({
  name: "SelectionArea",
  components: { VcsToolButton: $o, VSheet: ot, VInput: Jr, VTooltip: Wr },
  emits: ["sessionstart"],
  setup(e, { emit: t }) {
    const r = Fe("vcsApp"), o = Ot(r), s = ne(!1);
    function a() {
      let n = r.layers.getByKey(
        String(je)
      );
      if (!n) {
        const c = r.uiConfig.config.primaryColor ?? o, l = gt(c);
        n = new rt({
          name: String(je),
          projection: Ae.toJSON(),
          style: l
        }), Pr(n), r.layers.add(n);
      }
      return n.activate().catch(() => {
      }), n;
    }
    const i = [
      r.uiConfig.added.addEventListener((n) => {
        (n == null ? void 0 : n.name) === "primaryColor" && a().setStyle(
          gt(n.value)
        );
      }),
      r.uiConfig.removed.addEventListener((n) => {
        (n == null ? void 0 : n.name) === "primaryColor" && a().setStyle(
          gt(o)
        );
      })
    ];
    function u(n) {
      const c = a();
      c && (c.removeAllFeatures(), s.value = !1);
      const l = Po(
        r,
        c,
        Ze[n]
      );
      t(
        "sessionstart",
        new Promise((f) => {
          let g = null;
          l.stopped.addEventListener(() => {
            ht[n] = !1, f(g);
          }), l.creationFinished.addEventListener((p) => {
            p && (g = p, l.stop(), s.value = !0);
          });
        })
      ), ht[n] = !0;
    }
    return zr(() => {
      const n = a();
      s.value = n.getFeatures().length !== 0;
    }), r.windowManager.removed.addEventListener(({ id: n }) => {
      n === Re && (a().deactivate(), i.forEach((c) => {
        c();
      }));
    }), {
      GeometryType: Ze,
      waitForGeometry: u,
      AllowedGeometries: Yr,
      geometryState: ht,
      featureDrawn: s
    };
  }
}), Oe = (e, t) => {
  const r = e.__vccOpts || e;
  for (const [o, s] of t)
    r[o] = s;
  return r;
};
function Ns(e, t, r, o, s, a) {
  const i = N("VcsToolButton"), u = N("v-tooltip"), n = N("v-input"), c = N("v-sheet");
  return D(), B(c, { class: "px-1" }, {
    default: h(() => [
      m(n, {
        class: "feature-input",
        "model-value": e.featureDrawn,
        rules: [(l) => !!l || "export.validation.areaSelection"]
      }, {
        message: h(({ message: l }) => [
          m(u, {
            activator: ".feature-input",
            "v-if": l,
            text: e.$st(l),
            "content-class": "bg-error",
            location: "right"
          }, null, 8, ["v-if", "text"])
        ]),
        default: h(() => [
          (D(!0), re(
            ye,
            null,
            be(e.AllowedGeometries, (l, f) => (D(), B(i, {
              key: f,
              icon: l,
              active: e.geometryState[f],
              tooltip: e.$st("export.selectionTypes.draw" + f),
              onClick: (g) => e.waitForGeometry(e.GeometryType[f])
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
const Rs = /* @__PURE__ */ Oe(Is, [["render", Ns]]);
class As extends xo {
  constructor(r, o) {
    super(Go.CLICK, Bo.CTRL);
    J(this, "_app");
    /** All layers that are supported for export with object selection. */
    J(this, "_selectableLayers");
    /** Array with the ids of selected features. */
    J(this, "_selectedFeatures", []);
    J(this, "_featureClicked", new qo());
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
      (s) => s !== o
    ), this._selectableLayers.forEach((s) => {
      s.featureVisibility.unHighlight([o]);
    })) : (this._selectedFeatures.push(o), this._selectableLayers.forEach((s) => {
      s.featureVisibility.highlight({
        [o]: tr(
          r,
          s,
          this._app.uiConfig.config.primaryColor ?? Ot(this._app)
        )
      });
    }));
  }
  /** Highlights selected features. */
  _highlightSelectedFeatures() {
    const r = this._selectedFeatures.reduce(
      (o, s) => ({
        ...o,
        [s]: tr(
          // @ts-expect-error feature
          null,
          null,
          this._app.uiConfig.config.primaryColor ?? Ot(this._app)
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
      (o) => o.name === r.feature[xr]
    ) ? (this._selectFeature(r.feature), this._featureClicked.raiseEvent(this._selectedFeatures)) : this._app.notifier.add({
      type: we.WARNING,
      message: "export.selectionTypes.layerNotSupportedWarning",
      timeout: 5e3
    })), r;
  }
  destroy() {
    super.destroy(), this.clearSelection(), this._featureClicked.destroy();
  }
}
const Pe = Symbol("isMatcher"), Ds = Symbol("Integer"), Vs = Symbol("NonEmptyString"), qt = /* @__PURE__ */ new Map();
[
  [String, "string"],
  [Number, "number"],
  [Boolean, "boolean"],
  [Function, "function"],
  [void 0, "undefined"],
  [Symbol, "symbol"]
].forEach(([e, t]) => {
  qt.set(e, t);
});
function Ms(e) {
  return e == null ? void 0 : e[Pe];
}
function Ct(e) {
  if (!e || String(e) !== "[object Object]")
    return !1;
  const t = Object.getPrototypeOf(e);
  if (!t)
    return !0;
  const o = {}.hasOwnProperty.call(t, "constructor") && t.constructor;
  return typeof o == "function" && String(o) === String(Object);
}
function ie(e, t) {
  if (e === null)
    return "null";
  if (typeof e > "u")
    return "undefined";
  if (t)
    return typeof e;
  let r;
  if (Array.isArray(e))
    r = `[${e.map((s) => ie(s, t)).join(",")}]`;
  else
    try {
      r = JSON.stringify(e);
    } catch {
      r = typeof e;
    }
  return r = r || typeof e, r.length > 20 ? `${r.substring(0, 20)}...` : r;
}
function js(e, t) {
  return typeof t == "string" || typeof t == "number" || typeof t == "boolean" || typeof t == "symbol" ? e === t ? !1 : `Expected ${ie(e)} to equal ${t.toString()}` : null;
}
function Us(e, t, r) {
  if (Array.isArray(t)) {
    if (t.length !== 1)
      throw new Error("Array patterns may only have one type");
    if (Array.isArray(e)) {
      let o = !1;
      return e.findIndex((a) => (o = r(a, t[0]), o)) > -1 ? `${String(o)} in ${ie(e)}` : !1;
    }
    return `Expected ${ie(e)} to be an Array`;
  }
  return null;
}
function It(e, t, r, o) {
  const s = o ? `${o}.` : "";
  if (!Ct(e))
    return `Expected ${ie(e)} to be a plain Object`;
  let i = !1;
  const u = Object.keys(t).find((n) => {
    const c = e[n];
    return Ct(t[n]) ? i = It(c, t[n], r, s + n) : i = r(c, t[n]), i;
  });
  return u ? `${String(i)} in object.${s}${u}` : !1;
}
function Fs(e, t) {
  if (t === Number)
    return Number.isFinite(e) ? !1 : `expected ${ie(e)} to be a number, excluding NaN`;
  if (t === Ds)
    return Number.isInteger(e) ? !1 : `expected ${ie(e)} to be an integer number`;
  if (t === Vs)
    return typeof e == "string" && e.length > 0 ? !1 : `expected ${ie(e)} to be a non-empty string`;
  const r = qt.get(t);
  return r ? typeof e === r ? !1 : `expected ${ie(e)} to be a ${String(r)}` : null;
}
function Gt(e) {
  if (e === null)
    return "null";
  const t = qt.get(e);
  if (t)
    return t;
  const r = e == null ? void 0 : e.className;
  if (r)
    return r;
  let o = String(e);
  const s = o.match(/function (.*)\(/);
  if (s && s.length > 1) {
    const a = e == null ? void 0 : e.name;
    return a || s[1].substring(0, 20);
  }
  if (Ct(e)) {
    const a = {};
    Object.keys(e).forEach((i) => {
      a[i] = Gt(e[i]);
    });
    try {
      o = `Object of ${JSON.stringify(a)}`;
    } catch {
      o = "Object";
    }
  }
  return o;
}
function Bt(e, t) {
  const r = (o, s) => {
    if (Ms(s))
      return s(o);
    if (s == null)
      return o === s ? !1 : `Expected ${ie(o)} to be ${String(s)}`;
    const a = Fs(o, s);
    if (a !== null)
      return a;
    const i = js(o, s);
    if (i !== null)
      return i;
    if (Array.isArray(s))
      return Us(o, s, r);
    if (s === Object)
      return It(o, {}, r);
    if (s instanceof Function)
      return o instanceof s ? !1 : `Expected ${ie(o, !0)} to be of Type ${Gt(s)}`;
    if (typeof s == "object") {
      const u = It(o, s, r);
      return u || !1;
    }
    throw new Error(`Cannot handle pattern ${String(s)}`);
  };
  return r(e, t);
}
let Ps = Error;
function j(e, t) {
  const r = Bt(e, t);
  if (r)
    throw new Ps(`Match failed: ${r}`);
}
function W(e) {
  const t = (r) => {
    if (r == null)
      return !1;
    const o = Bt(r, e);
    return o && `${o} or undefined or null`;
  };
  return t[Pe] = !0, t;
}
function Kr(...e) {
  const t = (r) => e.every((s) => Bt(r, s)) ? `Expected ${ie(r)} to be a ${e.map((s) => Gt(s)).join(" or ")}` : !1;
  return t[Pe] = !0, t;
}
function xs(e, t) {
  j(e, Object);
  let r = Object.values(e);
  const o = (s) => r.includes(s) ? !1 : `expected ${ie(s)} to be of enum: ${r.join(", ")}`;
  return o[Pe] = !0, o;
}
function me(e) {
  j(e, Kr([String], [Number], [Symbol]));
  const t = (r) => e.includes(r) ? !1 : `expected ${ie(r)} to be a member of: ${e.join(", ")}`;
  return t[Pe] = !0, t;
}
function qs(e, t) {
  if (e != null) {
    const r = Number.parseInt(String(e), 10);
    if (r != null && !Number.isNaN(r))
      return r;
  }
  return t;
}
function fe(e, t) {
  return e == null ? !!t : typeof e == "boolean" ? e : e === 1 ? !0 : e === 0 ? !1 : typeof e == "string" && (e.toLowerCase() === "true" || e.toLowerCase() === "1") ? !0 : typeof e == "string" && (e.toLowerCase() === "false" || e.toLowerCase() === "0") ? !1 : !!t;
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
}, Zr = {
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
function Qr(e) {
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
    title: Zr[r],
    citygmlOnly: t[r]
  }));
}
var Q = /* @__PURE__ */ ((e) => (e.AREA_SELECTION = "areaSelection", e.OBJECT_SELECTION = "objectSelection", e.CURRENT_IMAGE = "currentImage", e))(Q || {}), _ = /* @__PURE__ */ ((e) => (e.CITY_MODEL = "cityModel", e.OBLIQUE = "oblique", e.GEOJSON = "geojson", e))(_ || {}), kt = /* @__PURE__ */ ((e) => (e.ABSOLUTE = "absolute", e.ELLIPSOID = "ellipsoid", e))(kt || {}), eo = /* @__PURE__ */ ((e) => (e.LOD1 = "LoD1", e.LOD2 = "LoD2", e.LOD3 = "LoD3", e.LOD4 = "LoD4", e.HALOD = "haLoD", e))(eo || {});
function Gs(e, t) {
  j(
    e.exportFormatList,
    W([me(Object.keys(ge))])
  ), j(
    e.exportFormatDefault || t.exportFormatDefault,
    [
      me(
        e.exportFormatList || t.exportFormatList
      )
    ]
  ), j(
    e.thematicClassList,
    W([me(Object.keys(Zr))])
  ), j(
    e.thematicClassDefault || t.thematicClassDefault,
    [
      me(
        e.thematicClassList || t.thematicClassList
      )
    ]
  ), j(
    e.lodList,
    W([me(Object.values(eo))])
  ), j(
    e.lodDefault || t.lodDefault,
    me(e.lodList || t.lodList)
  ), j(e.appearanceThemeList, W([String])), j(
    e.appearanceThemeDefault || t.appearanceThemeDefault,
    me(
      e.appearanceThemeList || t.appearanceThemeList
    )
  ), j(
    e.dataSourceOptionsList,
    W([{ type: me(Object.values(_)) }])
  ), j(e.heightModeDefault, W(xs(kt))), j(e.terrainAppearanceOptions, W(Object)), j(e.terrainZoomLevel, W(Number)), j(e.allowHeightMode, W(Boolean)), j(e.allowTextureExport, W(Boolean)), j(e.allowAddGenericAttrs, W(Boolean)), j(e.allowTiledExport, W(Boolean)), j(e.allowTerrainExport, W(Boolean)), j(e.termsOfUse, W(String)), j(e.allowDescription, W(Boolean)), j(e.exportScene, W(Boolean)), j(e.crs, W(Kr(String, [String]))), j(e.dataProjection, W(Object)), j(e.maxSelectionArea, W(Number)), j(e.allowEmail, W(Boolean)), j(e.allowExportName, W(Boolean));
  const r = e.dataSourceOptionsList || t.dataSourceOptionsList;
  r.forEach((v) => {
    v.type === "geojson" && (v.title ? v.title : v.title = "export.dataSources.geojson", v.help ? v.help : v.help = "export.help.dataSources.geojson");
  }), r.some(
    (v) => v.type === "cityModel"
    /* CITY_MODEL */
  ) && (j(e.fmeServerUrl, String), j(e.fmeSecurityToken, W(String)));
  const o = e.exportFormatList || t.exportFormatList, s = e.exportFormatDefault || t.exportFormatDefault, a = e.lodList || t.lodList, i = e.lodDefault || t.lodDefault, u = e.thematicClassList || t.thematicClassList, n = e.thematicClassDefault || t.thematicClassDefault, c = e.termsOfUse !== void 0 ? e.termsOfUse : t.termsOfUse, l = e.appearanceThemeList || t.appearanceThemeList, f = e.appearanceThemeDefault || t.appearanceThemeDefault, g = e.terrainAppearanceOptions || {}, p = fe(
    e.allowHeightMode,
    t.allowHeightMode
  ), y = e.heightModeDefault || t.heightModeDefault, S = fe(
    e.allowTextureExport,
    t.allowTextureExport
  ), $ = fe(
    e.allowAddGenericAttrs,
    t.allowAddGenericAttrs
  ), d = fe(
    e.allowTiledExport,
    t.allowTiledExport
  ), C = fe(
    e.allowTerrainExport,
    t.allowTerrainExport
  ), M = e.terrainUrl || t.terrainUrl, U = qs(
    e.terrainZoomLevel,
    t.terrainZoomLevel || void 0
  ) || null, Y = e.dataProjection || t.dataProjection, H = e.crs || t.crs, z = fe(
    e.allowDescription,
    t.allowDescription
  ), k = e.fmeSecurityToken || t.fmeSecurityToken, Z = e.fmeServerUrl || t.fmeServerUrl, O = e.maxSelectionArea || t.maxSelectionArea, F = Array.isArray(H) ? H[0] : H, P = fe(
    e.exportScene,
    t.exportScene
  ), q = fe(
    e.allowExportName,
    t.allowExportName
  ), L = fe(
    e.allowEmail,
    t.allowEmail
  );
  return {
    pluginConfig: {
      settingsCityModel: {
        exportFormatList: o,
        lodList: a,
        thematicClassList: u,
        terrainAppearanceOptions: g,
        appearanceThemeList: l,
        allowHeightMode: p,
        allowTextureExport: S,
        allowAddGenericAttrs: $,
        allowTiledExport: d,
        allowTerrainExport: C,
        crs: H,
        terrainUrl: M,
        terrainZoomLevel: U,
        dataProjection: Y,
        exportScene: P,
        fmeSecurityToken: k,
        fmeServerUrl: Z
      },
      allowExportName: q,
      allowEmail: L,
      termsOfUse: c,
      dataSourceOptionsList: r,
      allowDescription: z,
      maxSelectionArea: O,
      defaults: {
        exportFormatDefault: s,
        lodDefault: i,
        thematicClassDefault: n,
        appearanceThemeDefault: f,
        heightModeDefault: y
      }
    },
    pluginState: {
      step: 0,
      highestStep: 0,
      settingsCityModel: {
        selectedExportFormats: s,
        selectedLod: i,
        selectedThematicClasses: n,
        terrainExport: !1,
        textureExport: !1,
        tiledExport: !1,
        localCoordinates: !1,
        genericAttributes: !1,
        selectedCrs: F,
        selectedAppearanceTheme: f,
        selectedTerrainAppearanceLayer: null,
        selectedHeightMode: y
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
function St(e, t) {
  return [...e.layers].filter(
    (r) => r instanceof qr && r.properties.exportWorkbench === t
  );
}
const Bs = $e({
  name: "SelectionObjects",
  components: {
    VContainer: st,
    VRow: nt,
    VCol: lt,
    VIcon: Xr,
    VInput: Jr,
    VcsFormButton: Vt,
    VTooltip: Wr
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
    const r = Fe("vcsApp"), o = r.plugins.getByKey(he), s = as(
      St(r, o.config.settingsCityModel.fmeServerUrl)
    ), a = Mt(e, "modelValue", t), i = ne(a.value.length), { eventHandler: u } = r.maps, n = new As(
      r,
      s.value
    );
    n.id = "objectSelectionInteractionId";
    const c = ue(() => s.value.map(
      (y) => {
        var S;
        return ((S = y.properties) == null ? void 0 : S.title) ?? y.name;
      }
    ));
    let l = () => {
    }, f = () => {
    };
    l = () => {
      f(), a.value = [], i.value = 0, n.clearSelection(), n.destroy();
    };
    const g = [
      n.featureClicked.addEventListener((y) => {
        a.value = y, i.value = y.length;
      }),
      u.exclusiveAdded.addEventListener(() => {
        n.id !== u.exclusiveInteractionId && o.state.selectedSelectionType === Q.OBJECT_SELECTION && (r.windowManager.remove(Re), g.forEach((y) => {
          y();
        }));
      }),
      u.addExclusiveInteraction(
        n,
        () => {
          l == null || l();
        },
        void 0,
        n.id
      ),
      r.layers.added.addEventListener((y) => {
        y.properties.exportWorkbench === o.config.settingsCityModel.fmeServerUrl && (s.value = St(
          r,
          o.config.settingsCityModel.fmeServerUrl
        ));
      }),
      r.layers.removed.addEventListener((y) => {
        y.properties.exportWorkbench === o.config.settingsCityModel.fmeServerUrl && (s.value = St(
          r,
          o.config.settingsCityModel.fmeServerUrl
        ));
      }),
      r.windowManager.removed.addEventListener(({ id: y }) => {
        y === Re && (g.forEach((S) => {
          S();
        }), l());
      })
    ];
    f = Ne(
      () => e.modelValue,
      () => {
        n.selectedFeatures = e.modelValue, i.value = e.modelValue.length;
      },
      { immediate: !0 }
    );
    function p(y) {
      return !!y || "export.validation.objectSelection";
    }
    return {
      selectableLayerNames: c,
      count: i,
      objectSelectionRule: p
    };
  }
});
function ks(e, t, r, o, s, a) {
  const i = N("v-icon"), u = N("v-col"), n = N("v-row"), c = N("v-tooltip"), l = N("v-input"), f = N("VcsFormButton"), g = N("v-container");
  return D(), B(g, { class: "px-1 py-0" }, {
    default: h(() => [
      m(n, { "no-gutters": "" }, {
        default: h(() => [
          m(u, null, {
            default: h(() => [
              x(
                V(e.$t("export.selectionTypes.objectSelection1")) + " ",
                1
                /* TEXT */
              ),
              m(i, null, {
                default: h(() => [
                  x("$vcsPointSelect")
                ]),
                _: 1
                /* STABLE */
              }),
              x(
                " " + V(e.$t("export.selectionTypes.objectSelection2")) + ". ",
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
      m(n, {
        "no-gutters": "",
        class: "mt-1 mb-0"
      }, {
        default: h(() => [
          m(u, null, {
            default: h(() => [
              x(
                V(e.$t("export.selectionTypes.selectableLayers")) + ": ",
                1
                /* TEXT */
              )
            ]),
            _: 1
            /* STABLE */
          }),
          m(u, { class: "d-flex justify-end" }, {
            default: h(() => [
              ae("ul", null, [
                (D(!0), re(
                  ye,
                  null,
                  be(e.selectableLayerNames, (p) => (D(), re(
                    "li",
                    { key: p },
                    V(p),
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
      m(n, { "no-gutters": "" }, {
        default: h(() => [
          m(l, {
            class: us(["feature-input", { "text-error": e.count === 0 && e.isReset }]),
            "model-value": e.count,
            rules: [e.objectSelectionRule]
          }, {
            message: h(({ message: p }) => [
              m(c, {
                activator: ".feature-input",
                "v-if": p,
                text: e.$st(p),
                "content-class": "bg-error",
                location: "right"
              }, null, 8, ["v-if", "text"])
            ]),
            default: h(() => [
              m(u, {
                cols: "8",
                class: "px-0 py-1"
              }, {
                default: h(() => [
                  x(
                    V(e.$t("export.selectionTypes.objectCount")) + ": ",
                    1
                    /* TEXT */
                  )
                ]),
                _: 1
                /* STABLE */
              }),
              m(u, {
                cols: "4",
                class: "px-0 py-1 d-flex justify-end"
              }, {
                default: h(() => [
                  ae(
                    "span",
                    null,
                    V(e.count),
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
      e.buttonShow ? (D(), B(n, {
        key: 0,
        "no-gutters": ""
      }, {
        default: h(() => [
          m(u, { class: "d-flex flex-row-reverse" }, {
            default: h(() => [
              m(f, {
                disabled: e.buttonDisabled,
                onClick: t[0] || (t[0] = (p) => e.$emit("continue"))
              }, {
                default: h(() => [
                  x(
                    V(e.$t("export.continue")),
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
      })) : X("v-if", !0)
    ]),
    _: 1
    /* STABLE */
  });
}
const _s = /* @__PURE__ */ Oe(Bs, [["render", ks]]), zs = $e({
  name: "SettingsCityModel",
  components: {
    VContainer: st,
    VRow: nt,
    VCol: lt,
    VcsLabel: jt,
    VcsSelect: tt,
    VcsCheckbox: Ut,
    VcsFormButton: Vt
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
    const r = Mt(
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
        items: Qr(e.setup.thematicClassList),
        i18n: "export.settingsCityModel.thematicClasses",
        multiple: !0,
        stateName: "selectedThematicClasses"
      }
    }, s = {};
    function a() {
      if (Object.keys(e.setup.terrainAppearanceOptions).length === 0) {
        [...Fe("vcsApp").layers].filter(
          (f) => f instanceof Gr || f instanceof Br
        ).forEach((f) => {
          const { name: g, maxLevel: p } = f;
          s[g] = p;
        });
        const l = Object.keys(s);
        l.length > 0 && (r.value.selectedTerrainAppearanceLayer = l[0]);
      }
    }
    cs(() => {
      a();
    });
    const i = ue(() => {
      const c = {
        showTerrainExport: {
          render: e.setup.allowTerrainExport && r.value.selectedExportFormats.some(
            (l) => l !== "2D Shape"
          ),
          i18n: "export.settingsCityModel.terrainExport",
          stateName: "terrainExport"
        },
        showAddGenericAttr: {
          render: e.setup.allowAddGenericAttrs && r.value.selectedExportFormats.some(
            (l) => ge[l].genericAttributes
          ),
          i18n: "export.settingsCityModel.genericAttrs",
          stateName: "genericAttributes"
        },
        showTextureExport: {
          render: e.setup.allowTextureExport && r.value.selectedExportFormats.some(
            (l) => ge[l].texture
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
              render: Object.keys(s).length > 0 && r.value.terrainExport,
              i18n: "export.settingsCityModel.terrainTexture",
              items: Object.keys(s),
              stateName: "selectedTerrainAppearanceLayer"
            }
          ]
        },
        showUseLocalCoors: {
          render: r.value.selectedExportFormats.some(
            (l) => ge[l].localCoordinates
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
      return Object.keys(c).filter((l) => !c[l].render).forEach((l) => delete c[l]), Object.keys(c).filter(
        (l) => Object.prototype.hasOwnProperty.call(c[l], "selectFields")
      ).forEach((l) => {
        var g;
        const f = c[l];
        if ("selectFields" in f) {
          const p = (g = f.selectFields) == null ? void 0 : g.filter(
            (y) => y.render
          );
          (p == null ? void 0 : p.length) === 0 ? delete f.selectFields : f.selectFields = p;
        }
      }), c;
    }), u = ue(() => !r.value.terrainExport && e.setup.allowHeightMode && r.value.selectedExportFormats.some(
      (c) => ge[c].heightMode
    )), n = ue(
      () => Array.isArray(e.setup.crs) && r.value.selectedExportFormats.some(
        (c) => !ge[c].localCoordinates
      )
    );
    return {
      settingsState: r,
      mainSettingsSetup: o,
      formatSettingsSetup: i,
      showHeightMode: u,
      showCrsInput: n
    };
  }
});
function Hs(e, t, r, o, s, a) {
  const i = N("VcsLabel"), u = N("v-col"), n = N("VcsSelect"), c = N("v-row"), l = N("VcsCheckbox"), f = N("VcsFormButton"), g = N("v-container");
  return D(), B(g, { class: "pa-0" }, {
    default: h(() => [
      X(" main settings "),
      (D(!0), re(
        ye,
        null,
        be(e.mainSettingsSetup, (p, y) => (D(), B(
          c,
          {
            key: y,
            "no-gutters": ""
          },
          {
            default: h(() => [
              m(
                u,
                {
                  class: "pa-0",
                  cols: "6"
                },
                {
                  default: h(() => [
                    m(i, {
                      "html-for": y + "Select"
                    }, {
                      default: h(() => [
                        x(
                          V(e.$st(p.i18n)),
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
              m(
                u,
                {
                  class: "pa-0",
                  cols: "6"
                },
                {
                  default: h(() => [
                    m(n, {
                      id: y + "Select",
                      modelValue: e.settingsState[p.stateName],
                      "onUpdate:modelValue": (S) => e.settingsState[p.stateName] = S,
                      items: p.items,
                      multiple: p.multiple,
                      rules: [
                        (S) => !!S.length || e.$t("export.validation.selectFieldMultiple")
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
      X(" settings that depend on the selected formats "),
      (D(!0), re(
        ye,
        null,
        be(e.formatSettingsSetup, (p, y) => (D(), re("div", { key: y }, [
          m(
            c,
            { "no-gutters": "" },
            {
              default: h(() => [
                m(
                  u,
                  { class: "pa-0" },
                  {
                    default: h(() => [
                      m(l, {
                        modelValue: e.settingsState[p.stateName],
                        "onUpdate:modelValue": (S) => e.settingsState[p.stateName] = S,
                        label: p.i18n
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
          e.settingsState[p.stateName] ? (D(!0), re(
            ye,
            { key: 0 },
            be(("selectFields" in p ? p.selectFields : []) || [], (S) => (D(), B(
              c,
              {
                key: S.name,
                "no-gutter": "",
                class: "ma-0 pl-6"
              },
              {
                default: h(() => [
                  m(
                    u,
                    {
                      class: "pa-0",
                      cols: "6"
                    },
                    {
                      default: h(() => [
                        m(i, {
                          "html-for": S.name + "Select"
                        }, {
                          default: h(() => [
                            x(
                              V(e.$st(S.i18n)),
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
                  m(
                    u,
                    {
                      class: "pa-0",
                      cols: "6"
                    },
                    {
                      default: h(() => [
                        m(n, {
                          id: S.name + "Select",
                          modelValue: e.settingsState[S.stateName],
                          "onUpdate:modelValue": ($) => e.settingsState[S.stateName] = $,
                          items: S.items
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
          )) : X("v-if", !0)
        ]))),
        128
        /* KEYED_FRAGMENT */
      )),
      e.showHeightMode ? (D(), B(c, {
        key: 0,
        "no-gutters": ""
      }, {
        default: h(() => [
          m(u, {
            class: "pa-0",
            cols: "6"
          }, {
            default: h(() => [
              m(i, { "html-for": "height-mode-select" }, {
                default: h(() => [
                  x(
                    V(e.$t("export.settingsCityModel.heightMode")),
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
          m(u, {
            class: "pa-0",
            cols: "6"
          }, {
            default: h(() => [
              m(n, {
                id: "height-mode-select",
                modelValue: e.settingsState.selectedHeightMode,
                "onUpdate:modelValue": t[0] || (t[0] = (p) => e.settingsState.selectedHeightMode = p),
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
      })) : X("v-if", !0),
      e.showCrsInput ? (D(), B(c, {
        key: 1,
        "no-gutters": ""
      }, {
        default: h(() => [
          m(u, {
            class: "pa-0",
            cols: "6"
          }, {
            default: h(() => [
              m(i, { "html-for": "crs-input" }, {
                default: h(() => [
                  x(
                    V(e.$t("export.settingsCityModel.coordinateSystem")),
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
          m(u, {
            class: "pa-0",
            cols: "6"
          }, {
            default: h(() => [
              m(n, {
                id: "crs-input",
                modelValue: e.settingsState.selectedCrs,
                "onUpdate:modelValue": t[1] || (t[1] = (p) => e.settingsState.selectedCrs = p),
                items: e.setup.crs
              }, null, 8, ["modelValue", "items"])
            ]),
            _: 1
            /* STABLE */
          })
        ]),
        _: 1
        /* STABLE */
      })) : X("v-if", !0),
      e.buttonShow ? (D(), B(c, {
        key: 2,
        "no-gutters": ""
      }, {
        default: h(() => [
          m(u, {
            cols: "12",
            class: "px-1 d-flex flex-row-reverse"
          }, {
            default: h(() => [
              m(f, {
                disabled: e.buttonDisabled,
                onClick: t[2] || (t[2] = (p) => e.$emit("continue"))
              }, {
                default: h(() => [
                  x(
                    V(e.$t("export.continue")),
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
      })) : X("v-if", !0)
    ]),
    _: 1
    /* STABLE */
  });
}
const Js = /* @__PURE__ */ Oe(zs, [["render", Hs]]), Ws = $e({
  name: "SettingsOblique",
  components: {
    VSheet: ot,
    VContainer: st,
    VRow: nt,
    VCol: lt,
    VcsLabel: jt,
    VcsSelect: tt
  },
  props: {
    modelValue: {
      type: Object,
      required: !0
    }
  },
  setup(e, { emit: t }) {
    const r = Mt(e, "modelValue", t), { nadir: o, ...s } = rr, a = Object.keys({ nadir: o, ...s }).map(
      (i) => ({
        value: rr[i],
        title: `export.settingsOblique.${i}`
      })
    );
    return {
      settingsState: r,
      directionFilterItems: a
    };
  }
});
function Xs(e, t, r, o, s, a) {
  const i = N("VcsLabel"), u = N("v-col"), n = N("VcsSelect"), c = N("v-row"), l = N("v-container"), f = N("v-sheet");
  return D(), B(f, null, {
    default: h(() => [
      m(l, null, {
        default: h(() => [
          m(c, { "no-gutters": "" }, {
            default: h(() => [
              m(u, { cols: "7" }, {
                default: h(() => [
                  m(i, null, {
                    default: h(() => [
                      x(
                        V(e.$t("export.settingsOblique.directionFilter")),
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
              m(u, { cols: "5" }, {
                default: h(() => [
                  m(n, {
                    modelValue: e.settingsState.directionFilter,
                    "onUpdate:modelValue": t[0] || (t[0] = (g) => e.settingsState.directionFilter = g),
                    items: e.directionFilterItems,
                    rules: [
                      (g) => !!g || "Please select at least one option."
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
const Ys = /* @__PURE__ */ Oe(Ws, [["render", Xs], ["__scopeId", "data-v-6066b457"]]);
var Nt = { exports: {} };
const Ks = "2.0.0", to = 256, Zs = Number.MAX_SAFE_INTEGER || /* istanbul ignore next */
9007199254740991, Qs = 16, en = to - 6, tn = [
  "major",
  "premajor",
  "minor",
  "preminor",
  "patch",
  "prepatch",
  "prerelease"
];
var it = {
  MAX_LENGTH: to,
  MAX_SAFE_COMPONENT_LENGTH: Qs,
  MAX_SAFE_BUILD_LENGTH: en,
  MAX_SAFE_INTEGER: Zs,
  RELEASE_TYPES: tn,
  SEMVER_SPEC_VERSION: Ks,
  FLAG_INCLUDE_PRERELEASE: 1,
  FLAG_LOOSE: 2
};
const rn = typeof process == "object" && process.env && process.env.NODE_DEBUG && /\bsemver\b/i.test(process.env.NODE_DEBUG) ? (...e) => console.error("SEMVER", ...e) : () => {
};
var at = rn;
(function(e, t) {
  const {
    MAX_SAFE_COMPONENT_LENGTH: r,
    MAX_SAFE_BUILD_LENGTH: o,
    MAX_LENGTH: s
  } = it, a = at;
  t = e.exports = {};
  const i = t.re = [], u = t.safeRe = [], n = t.src = [], c = t.safeSrc = [], l = t.t = {};
  let f = 0;
  const g = "[a-zA-Z0-9-]", p = [
    ["\\s", 1],
    ["\\d", s],
    [g, o]
  ], y = ($) => {
    for (const [d, C] of p)
      $ = $.split(`${d}*`).join(`${d}{0,${C}}`).split(`${d}+`).join(`${d}{1,${C}}`);
    return $;
  }, S = ($, d, C) => {
    const M = y(d), U = f++;
    a($, U, d), l[$] = U, n[U] = d, c[U] = M, i[U] = new RegExp(d, C ? "g" : void 0), u[U] = new RegExp(M, C ? "g" : void 0);
  };
  S("NUMERICIDENTIFIER", "0|[1-9]\\d*"), S("NUMERICIDENTIFIERLOOSE", "\\d+"), S("NONNUMERICIDENTIFIER", `\\d*[a-zA-Z-]${g}*`), S("MAINVERSION", `(${n[l.NUMERICIDENTIFIER]})\\.(${n[l.NUMERICIDENTIFIER]})\\.(${n[l.NUMERICIDENTIFIER]})`), S("MAINVERSIONLOOSE", `(${n[l.NUMERICIDENTIFIERLOOSE]})\\.(${n[l.NUMERICIDENTIFIERLOOSE]})\\.(${n[l.NUMERICIDENTIFIERLOOSE]})`), S("PRERELEASEIDENTIFIER", `(?:${n[l.NONNUMERICIDENTIFIER]}|${n[l.NUMERICIDENTIFIER]})`), S("PRERELEASEIDENTIFIERLOOSE", `(?:${n[l.NONNUMERICIDENTIFIER]}|${n[l.NUMERICIDENTIFIERLOOSE]})`), S("PRERELEASE", `(?:-(${n[l.PRERELEASEIDENTIFIER]}(?:\\.${n[l.PRERELEASEIDENTIFIER]})*))`), S("PRERELEASELOOSE", `(?:-?(${n[l.PRERELEASEIDENTIFIERLOOSE]}(?:\\.${n[l.PRERELEASEIDENTIFIERLOOSE]})*))`), S("BUILDIDENTIFIER", `${g}+`), S("BUILD", `(?:\\+(${n[l.BUILDIDENTIFIER]}(?:\\.${n[l.BUILDIDENTIFIER]})*))`), S("FULLPLAIN", `v?${n[l.MAINVERSION]}${n[l.PRERELEASE]}?${n[l.BUILD]}?`), S("FULL", `^${n[l.FULLPLAIN]}$`), S("LOOSEPLAIN", `[v=\\s]*${n[l.MAINVERSIONLOOSE]}${n[l.PRERELEASELOOSE]}?${n[l.BUILD]}?`), S("LOOSE", `^${n[l.LOOSEPLAIN]}$`), S("GTLT", "((?:<|>)?=?)"), S("XRANGEIDENTIFIERLOOSE", `${n[l.NUMERICIDENTIFIERLOOSE]}|x|X|\\*`), S("XRANGEIDENTIFIER", `${n[l.NUMERICIDENTIFIER]}|x|X|\\*`), S("XRANGEPLAIN", `[v=\\s]*(${n[l.XRANGEIDENTIFIER]})(?:\\.(${n[l.XRANGEIDENTIFIER]})(?:\\.(${n[l.XRANGEIDENTIFIER]})(?:${n[l.PRERELEASE]})?${n[l.BUILD]}?)?)?`), S("XRANGEPLAINLOOSE", `[v=\\s]*(${n[l.XRANGEIDENTIFIERLOOSE]})(?:\\.(${n[l.XRANGEIDENTIFIERLOOSE]})(?:\\.(${n[l.XRANGEIDENTIFIERLOOSE]})(?:${n[l.PRERELEASELOOSE]})?${n[l.BUILD]}?)?)?`), S("XRANGE", `^${n[l.GTLT]}\\s*${n[l.XRANGEPLAIN]}$`), S("XRANGELOOSE", `^${n[l.GTLT]}\\s*${n[l.XRANGEPLAINLOOSE]}$`), S("COERCEPLAIN", `(^|[^\\d])(\\d{1,${r}})(?:\\.(\\d{1,${r}}))?(?:\\.(\\d{1,${r}}))?`), S("COERCE", `${n[l.COERCEPLAIN]}(?:$|[^\\d])`), S("COERCEFULL", n[l.COERCEPLAIN] + `(?:${n[l.PRERELEASE]})?(?:${n[l.BUILD]})?(?:$|[^\\d])`), S("COERCERTL", n[l.COERCE], !0), S("COERCERTLFULL", n[l.COERCEFULL], !0), S("LONETILDE", "(?:~>?)"), S("TILDETRIM", `(\\s*)${n[l.LONETILDE]}\\s+`, !0), t.tildeTrimReplace = "$1~", S("TILDE", `^${n[l.LONETILDE]}${n[l.XRANGEPLAIN]}$`), S("TILDELOOSE", `^${n[l.LONETILDE]}${n[l.XRANGEPLAINLOOSE]}$`), S("LONECARET", "(?:\\^)"), S("CARETTRIM", `(\\s*)${n[l.LONECARET]}\\s+`, !0), t.caretTrimReplace = "$1^", S("CARET", `^${n[l.LONECARET]}${n[l.XRANGEPLAIN]}$`), S("CARETLOOSE", `^${n[l.LONECARET]}${n[l.XRANGEPLAINLOOSE]}$`), S("COMPARATORLOOSE", `^${n[l.GTLT]}\\s*(${n[l.LOOSEPLAIN]})$|^$`), S("COMPARATOR", `^${n[l.GTLT]}\\s*(${n[l.FULLPLAIN]})$|^$`), S("COMPARATORTRIM", `(\\s*)${n[l.GTLT]}\\s*(${n[l.LOOSEPLAIN]}|${n[l.XRANGEPLAIN]})`, !0), t.comparatorTrimReplace = "$1$2$3", S("HYPHENRANGE", `^\\s*(${n[l.XRANGEPLAIN]})\\s+-\\s+(${n[l.XRANGEPLAIN]})\\s*$`), S("HYPHENRANGELOOSE", `^\\s*(${n[l.XRANGEPLAINLOOSE]})\\s+-\\s+(${n[l.XRANGEPLAINLOOSE]})\\s*$`), S("STAR", "(<|>)?=?\\s*\\*"), S("GTE0", "^\\s*>=\\s*0\\.0\\.0\\s*$"), S("GTE0PRE", "^\\s*>=\\s*0\\.0\\.0-0\\s*$");
})(Nt, Nt.exports);
var xe = Nt.exports;
const on = Object.freeze({ loose: !0 }), sn = Object.freeze({}), nn = (e) => e ? typeof e != "object" ? on : e : sn;
var _t = nn;
const lr = /^[0-9]+$/, ro = (e, t) => {
  const r = lr.test(e), o = lr.test(t);
  return r && o && (e = +e, t = +t), e === t ? 0 : r && !o ? -1 : o && !r ? 1 : e < t ? -1 : 1;
}, ln = (e, t) => ro(t, e);
var oo = {
  compareIdentifiers: ro,
  rcompareIdentifiers: ln
};
const Be = at, { MAX_LENGTH: ir, MAX_SAFE_INTEGER: ke } = it, { safeRe: _e, t: ze } = xe, an = _t, { compareIdentifiers: Te } = oo;
let un = class pe {
  constructor(t, r) {
    if (r = an(r), t instanceof pe) {
      if (t.loose === !!r.loose && t.includePrerelease === !!r.includePrerelease)
        return t;
      t = t.version;
    } else if (typeof t != "string")
      throw new TypeError(`Invalid version. Must be a string. Got type "${typeof t}".`);
    if (t.length > ir)
      throw new TypeError(
        `version is longer than ${ir} characters`
      );
    Be("SemVer", t, r), this.options = r, this.loose = !!r.loose, this.includePrerelease = !!r.includePrerelease;
    const o = t.trim().match(r.loose ? _e[ze.LOOSE] : _e[ze.FULL]);
    if (!o)
      throw new TypeError(`Invalid Version: ${t}`);
    if (this.raw = t, this.major = +o[1], this.minor = +o[2], this.patch = +o[3], this.major > ke || this.major < 0)
      throw new TypeError("Invalid major version");
    if (this.minor > ke || this.minor < 0)
      throw new TypeError("Invalid minor version");
    if (this.patch > ke || this.patch < 0)
      throw new TypeError("Invalid patch version");
    o[4] ? this.prerelease = o[4].split(".").map((s) => {
      if (/^[0-9]+$/.test(s)) {
        const a = +s;
        if (a >= 0 && a < ke)
          return a;
      }
      return s;
    }) : this.prerelease = [], this.build = o[5] ? o[5].split(".") : [], this.format();
  }
  format() {
    return this.version = `${this.major}.${this.minor}.${this.patch}`, this.prerelease.length && (this.version += `-${this.prerelease.join(".")}`), this.version;
  }
  toString() {
    return this.version;
  }
  compare(t) {
    if (Be("SemVer.compare", this.version, this.options, t), !(t instanceof pe)) {
      if (typeof t == "string" && t === this.version)
        return 0;
      t = new pe(t, this.options);
    }
    return t.version === this.version ? 0 : this.compareMain(t) || this.comparePre(t);
  }
  compareMain(t) {
    return t instanceof pe || (t = new pe(t, this.options)), Te(this.major, t.major) || Te(this.minor, t.minor) || Te(this.patch, t.patch);
  }
  comparePre(t) {
    if (t instanceof pe || (t = new pe(t, this.options)), this.prerelease.length && !t.prerelease.length)
      return -1;
    if (!this.prerelease.length && t.prerelease.length)
      return 1;
    if (!this.prerelease.length && !t.prerelease.length)
      return 0;
    let r = 0;
    do {
      const o = this.prerelease[r], s = t.prerelease[r];
      if (Be("prerelease compare", r, o, s), o === void 0 && s === void 0)
        return 0;
      if (s === void 0)
        return 1;
      if (o === void 0)
        return -1;
      if (o === s)
        continue;
      return Te(o, s);
    } while (++r);
  }
  compareBuild(t) {
    t instanceof pe || (t = new pe(t, this.options));
    let r = 0;
    do {
      const o = this.build[r], s = t.build[r];
      if (Be("build compare", r, o, s), o === void 0 && s === void 0)
        return 0;
      if (s === void 0)
        return 1;
      if (o === void 0)
        return -1;
      if (o === s)
        continue;
      return Te(o, s);
    } while (++r);
  }
  // preminor will bump the version up to the next minor release, and immediately
  // down to pre-release. premajor and prepatch work the same way.
  inc(t, r, o) {
    if (t.startsWith("pre")) {
      if (!r && o === !1)
        throw new Error("invalid increment argument: identifier is empty");
      if (r) {
        const s = `-${r}`.match(this.options.loose ? _e[ze.PRERELEASELOOSE] : _e[ze.PRERELEASE]);
        if (!s || s[1] !== r)
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
        const s = Number(o) ? 1 : 0;
        if (this.prerelease.length === 0)
          this.prerelease = [s];
        else {
          let a = this.prerelease.length;
          for (; --a >= 0; )
            typeof this.prerelease[a] == "number" && (this.prerelease[a]++, a = -2);
          if (a === -1) {
            if (r === this.prerelease.join(".") && o === !1)
              throw new Error("invalid increment argument: identifier already exists");
            this.prerelease.push(s);
          }
        }
        if (r) {
          let a = [r, s];
          o === !1 && (a = [r]), Te(this.prerelease[0], r) === 0 ? isNaN(this.prerelease[1]) && (this.prerelease = a) : this.prerelease = a;
        }
        break;
      }
      default:
        throw new Error(`invalid increment argument: ${t}`);
    }
    return this.raw = this.format(), this.build.length && (this.raw += `+${this.build.join(".")}`), this;
  }
};
var le = un;
const ar = le, cn = (e, t, r = !1) => {
  if (e instanceof ar)
    return e;
  try {
    return new ar(e, t);
  } catch (o) {
    if (!r)
      return null;
    throw o;
  }
};
var De = cn;
const dn = De, fn = (e, t) => {
  const r = dn(e, t);
  return r ? r.version : null;
};
var pn = fn;
const mn = De, hn = (e, t) => {
  const r = mn(e.trim().replace(/^[=v]+/, ""), t);
  return r ? r.version : null;
};
var gn = hn;
const ur = le, Sn = (e, t, r, o, s) => {
  typeof r == "string" && (s = o, o = r, r = void 0);
  try {
    return new ur(
      e instanceof ur ? e.version : e,
      r
    ).inc(t, o, s).version;
  } catch {
    return null;
  }
};
var En = Sn;
const cr = De, yn = (e, t) => {
  const r = cr(e, null, !0), o = cr(t, null, !0), s = r.compare(o);
  if (s === 0)
    return null;
  const a = s > 0, i = a ? r : o, u = a ? o : r, n = !!i.prerelease.length;
  if (!!u.prerelease.length && !n) {
    if (!u.patch && !u.minor)
      return "major";
    if (u.compareMain(i) === 0)
      return u.minor && !u.patch ? "minor" : "patch";
  }
  const l = n ? "pre" : "";
  return r.major !== o.major ? l + "major" : r.minor !== o.minor ? l + "minor" : r.patch !== o.patch ? l + "patch" : "prerelease";
};
var bn = yn;
const vn = le, wn = (e, t) => new vn(e, t).major;
var Ln = wn;
const $n = le, On = (e, t) => new $n(e, t).minor;
var Tn = On;
const Cn = le, In = (e, t) => new Cn(e, t).patch;
var Nn = In;
const Rn = De, An = (e, t) => {
  const r = Rn(e, t);
  return r && r.prerelease.length ? r.prerelease : null;
};
var Dn = An;
const dr = le, Vn = (e, t, r) => new dr(e, r).compare(new dr(t, r));
var ce = Vn;
const Mn = ce, jn = (e, t, r) => Mn(t, e, r);
var Un = jn;
const Fn = ce, Pn = (e, t) => Fn(e, t, !0);
var xn = Pn;
const fr = le, qn = (e, t, r) => {
  const o = new fr(e, r), s = new fr(t, r);
  return o.compare(s) || o.compareBuild(s);
};
var zt = qn;
const Gn = zt, Bn = (e, t) => e.sort((r, o) => Gn(r, o, t));
var kn = Bn;
const _n = zt, zn = (e, t) => e.sort((r, o) => _n(o, r, t));
var Hn = zn;
const Jn = ce, Wn = (e, t, r) => Jn(e, t, r) > 0;
var ut = Wn;
const Xn = ce, Yn = (e, t, r) => Xn(e, t, r) < 0;
var Ht = Yn;
const Kn = ce, Zn = (e, t, r) => Kn(e, t, r) === 0;
var so = Zn;
const Qn = ce, el = (e, t, r) => Qn(e, t, r) !== 0;
var no = el;
const tl = ce, rl = (e, t, r) => tl(e, t, r) >= 0;
var Jt = rl;
const ol = ce, sl = (e, t, r) => ol(e, t, r) <= 0;
var Wt = sl;
const nl = so, ll = no, il = ut, al = Jt, ul = Ht, cl = Wt, dl = (e, t, r, o) => {
  switch (t) {
    case "===":
      return typeof e == "object" && (e = e.version), typeof r == "object" && (r = r.version), e === r;
    case "!==":
      return typeof e == "object" && (e = e.version), typeof r == "object" && (r = r.version), e !== r;
    case "":
    case "=":
    case "==":
      return nl(e, r, o);
    case "!=":
      return ll(e, r, o);
    case ">":
      return il(e, r, o);
    case ">=":
      return al(e, r, o);
    case "<":
      return ul(e, r, o);
    case "<=":
      return cl(e, r, o);
    default:
      throw new TypeError(`Invalid operator: ${t}`);
  }
};
var lo = dl;
const fl = le, pl = De, { safeRe: He, t: Je } = xe, ml = (e, t) => {
  if (e instanceof fl)
    return e;
  if (typeof e == "number" && (e = String(e)), typeof e != "string")
    return null;
  t = t || {};
  let r = null;
  if (!t.rtl)
    r = e.match(t.includePrerelease ? He[Je.COERCEFULL] : He[Je.COERCE]);
  else {
    const n = t.includePrerelease ? He[Je.COERCERTLFULL] : He[Je.COERCERTL];
    let c;
    for (; (c = n.exec(e)) && (!r || r.index + r[0].length !== e.length); )
      (!r || c.index + c[0].length !== r.index + r[0].length) && (r = c), n.lastIndex = c.index + c[1].length + c[2].length;
    n.lastIndex = -1;
  }
  if (r === null)
    return null;
  const o = r[2], s = r[3] || "0", a = r[4] || "0", i = t.includePrerelease && r[5] ? `-${r[5]}` : "", u = t.includePrerelease && r[6] ? `+${r[6]}` : "";
  return pl(`${o}.${s}.${a}${i}${u}`, t);
};
var hl = ml;
class gl {
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
        const s = this.map.keys().next().value;
        this.delete(s);
      }
      this.map.set(t, r);
    }
    return this;
  }
}
var Sl = gl, Et, pr;
function de() {
  if (pr) return Et;
  pr = 1;
  const e = /\s+/g;
  class t {
    constructor(v, I) {
      if (I = s(I), v instanceof t)
        return v.loose === !!I.loose && v.includePrerelease === !!I.includePrerelease ? v : new t(v.raw, I);
      if (v instanceof a)
        return this.raw = v.value, this.set = [[v]], this.formatted = void 0, this;
      if (this.options = I, this.loose = !!I.loose, this.includePrerelease = !!I.includePrerelease, this.raw = v.trim().replace(e, " "), this.set = this.raw.split("||").map((E) => this.parseRange(E.trim())).filter((E) => E.length), !this.set.length)
        throw new TypeError(`Invalid SemVer Range: ${this.raw}`);
      if (this.set.length > 1) {
        const E = this.set[0];
        if (this.set = this.set.filter((w) => !S(w[0])), this.set.length === 0)
          this.set = [E];
        else if (this.set.length > 1) {
          for (const w of this.set)
            if (w.length === 1 && $(w[0])) {
              this.set = [w];
              break;
            }
        }
      }
      this.formatted = void 0;
    }
    get range() {
      if (this.formatted === void 0) {
        this.formatted = "";
        for (let v = 0; v < this.set.length; v++) {
          v > 0 && (this.formatted += "||");
          const I = this.set[v];
          for (let E = 0; E < I.length; E++)
            E > 0 && (this.formatted += " "), this.formatted += I[E].toString().trim();
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
    parseRange(v) {
      const E = ((this.options.includePrerelease && p) | (this.options.loose && y)) + ":" + v, w = o.get(E);
      if (w)
        return w;
      const b = this.options.loose, T = b ? n[c.HYPHENRANGELOOSE] : n[c.HYPHENRANGE];
      v = v.replace(T, P(this.options.includePrerelease)), i("hyphen replace", v), v = v.replace(n[c.COMPARATORTRIM], l), i("comparator trim", v), v = v.replace(n[c.TILDETRIM], f), i("tilde trim", v), v = v.replace(n[c.CARETTRIM], g), i("caret trim", v);
      let R = v.split(" ").map((K) => C(K, this.options)).join(" ").split(/\s+/).map((K) => F(K, this.options));
      b && (R = R.filter((K) => (i("loose invalid filter", K, this.options), !!K.match(n[c.COMPARATORLOOSE])))), i("range list", R);
      const A = /* @__PURE__ */ new Map(), G = R.map((K) => new a(K, this.options));
      for (const K of G) {
        if (S(K))
          return [K];
        A.set(K.value, K);
      }
      A.size > 1 && A.has("") && A.delete("");
      const te = [...A.values()];
      return o.set(E, te), te;
    }
    intersects(v, I) {
      if (!(v instanceof t))
        throw new TypeError("a Range is required");
      return this.set.some((E) => d(E, I) && v.set.some((w) => d(w, I) && E.every((b) => w.every((T) => b.intersects(T, I)))));
    }
    // if ANY of the sets match ALL of its comparators, then pass
    test(v) {
      if (!v)
        return !1;
      if (typeof v == "string")
        try {
          v = new u(v, this.options);
        } catch {
          return !1;
        }
      for (let I = 0; I < this.set.length; I++)
        if (q(this.set[I], v, this.options))
          return !0;
      return !1;
    }
  }
  Et = t;
  const r = Sl, o = new r(), s = _t, a = ct(), i = at, u = le, {
    safeRe: n,
    t: c,
    comparatorTrimReplace: l,
    tildeTrimReplace: f,
    caretTrimReplace: g
  } = xe, { FLAG_INCLUDE_PRERELEASE: p, FLAG_LOOSE: y } = it, S = (L) => L.value === "<0.0.0-0", $ = (L) => L.value === "", d = (L, v) => {
    let I = !0;
    const E = L.slice();
    let w = E.pop();
    for (; I && E.length; )
      I = E.every((b) => w.intersects(b, v)), w = E.pop();
    return I;
  }, C = (L, v) => (i("comp", L, v), L = H(L, v), i("caret", L), L = U(L, v), i("tildes", L), L = k(L, v), i("xrange", L), L = O(L, v), i("stars", L), L), M = (L) => !L || L.toLowerCase() === "x" || L === "*", U = (L, v) => L.trim().split(/\s+/).map((I) => Y(I, v)).join(" "), Y = (L, v) => {
    const I = v.loose ? n[c.TILDELOOSE] : n[c.TILDE];
    return L.replace(I, (E, w, b, T, R) => {
      i("tilde", L, E, w, b, T, R);
      let A;
      return M(w) ? A = "" : M(b) ? A = `>=${w}.0.0 <${+w + 1}.0.0-0` : M(T) ? A = `>=${w}.${b}.0 <${w}.${+b + 1}.0-0` : R ? (i("replaceTilde pr", R), A = `>=${w}.${b}.${T}-${R} <${w}.${+b + 1}.0-0`) : A = `>=${w}.${b}.${T} <${w}.${+b + 1}.0-0`, i("tilde return", A), A;
    });
  }, H = (L, v) => L.trim().split(/\s+/).map((I) => z(I, v)).join(" "), z = (L, v) => {
    i("caret", L, v);
    const I = v.loose ? n[c.CARETLOOSE] : n[c.CARET], E = v.includePrerelease ? "-0" : "";
    return L.replace(I, (w, b, T, R, A) => {
      i("caret", L, w, b, T, R, A);
      let G;
      return M(b) ? G = "" : M(T) ? G = `>=${b}.0.0${E} <${+b + 1}.0.0-0` : M(R) ? b === "0" ? G = `>=${b}.${T}.0${E} <${b}.${+T + 1}.0-0` : G = `>=${b}.${T}.0${E} <${+b + 1}.0.0-0` : A ? (i("replaceCaret pr", A), b === "0" ? T === "0" ? G = `>=${b}.${T}.${R}-${A} <${b}.${T}.${+R + 1}-0` : G = `>=${b}.${T}.${R}-${A} <${b}.${+T + 1}.0-0` : G = `>=${b}.${T}.${R}-${A} <${+b + 1}.0.0-0`) : (i("no pr"), b === "0" ? T === "0" ? G = `>=${b}.${T}.${R}${E} <${b}.${T}.${+R + 1}-0` : G = `>=${b}.${T}.${R}${E} <${b}.${+T + 1}.0-0` : G = `>=${b}.${T}.${R} <${+b + 1}.0.0-0`), i("caret return", G), G;
    });
  }, k = (L, v) => (i("replaceXRanges", L, v), L.split(/\s+/).map((I) => Z(I, v)).join(" ")), Z = (L, v) => {
    L = L.trim();
    const I = v.loose ? n[c.XRANGELOOSE] : n[c.XRANGE];
    return L.replace(I, (E, w, b, T, R, A) => {
      i("xRange", L, E, w, b, T, R, A);
      const G = M(b), te = G || M(T), K = te || M(R), ve = K;
      return w === "=" && ve && (w = ""), A = v.includePrerelease ? "-0" : "", G ? w === ">" || w === "<" ? E = "<0.0.0-0" : E = "*" : w && ve ? (te && (T = 0), R = 0, w === ">" ? (w = ">=", te ? (b = +b + 1, T = 0, R = 0) : (T = +T + 1, R = 0)) : w === "<=" && (w = "<", te ? b = +b + 1 : T = +T + 1), w === "<" && (A = "-0"), E = `${w + b}.${T}.${R}${A}`) : te ? E = `>=${b}.0.0${A} <${+b + 1}.0.0-0` : K && (E = `>=${b}.${T}.0${A} <${b}.${+T + 1}.0-0`), i("xRange return", E), E;
    });
  }, O = (L, v) => (i("replaceStars", L, v), L.trim().replace(n[c.STAR], "")), F = (L, v) => (i("replaceGTE0", L, v), L.trim().replace(n[v.includePrerelease ? c.GTE0PRE : c.GTE0], "")), P = (L) => (v, I, E, w, b, T, R, A, G, te, K, ve) => (M(E) ? I = "" : M(w) ? I = `>=${E}.0.0${L ? "-0" : ""}` : M(b) ? I = `>=${E}.${w}.0${L ? "-0" : ""}` : T ? I = `>=${I}` : I = `>=${I}${L ? "-0" : ""}`, M(G) ? A = "" : M(te) ? A = `<${+G + 1}.0.0-0` : M(K) ? A = `<${G}.${+te + 1}.0-0` : ve ? A = `<=${G}.${te}.${K}-${ve}` : L ? A = `<${G}.${te}.${+K + 1}-0` : A = `<=${A}`, `${I} ${A}`.trim()), q = (L, v, I) => {
    for (let E = 0; E < L.length; E++)
      if (!L[E].test(v))
        return !1;
    if (v.prerelease.length && !I.includePrerelease) {
      for (let E = 0; E < L.length; E++)
        if (i(L[E].semver), L[E].semver !== a.ANY && L[E].semver.prerelease.length > 0) {
          const w = L[E].semver;
          if (w.major === v.major && w.minor === v.minor && w.patch === v.patch)
            return !0;
        }
      return !1;
    }
    return !0;
  };
  return Et;
}
var yt, mr;
function ct() {
  if (mr) return yt;
  mr = 1;
  const e = Symbol("SemVer ANY");
  class t {
    static get ANY() {
      return e;
    }
    constructor(l, f) {
      if (f = r(f), l instanceof t) {
        if (l.loose === !!f.loose)
          return l;
        l = l.value;
      }
      l = l.trim().split(/\s+/).join(" "), i("comparator", l, f), this.options = f, this.loose = !!f.loose, this.parse(l), this.semver === e ? this.value = "" : this.value = this.operator + this.semver.version, i("comp", this);
    }
    parse(l) {
      const f = this.options.loose ? o[s.COMPARATORLOOSE] : o[s.COMPARATOR], g = l.match(f);
      if (!g)
        throw new TypeError(`Invalid comparator: ${l}`);
      this.operator = g[1] !== void 0 ? g[1] : "", this.operator === "=" && (this.operator = ""), g[2] ? this.semver = new u(g[2], this.options.loose) : this.semver = e;
    }
    toString() {
      return this.value;
    }
    test(l) {
      if (i("Comparator.test", l, this.options.loose), this.semver === e || l === e)
        return !0;
      if (typeof l == "string")
        try {
          l = new u(l, this.options);
        } catch {
          return !1;
        }
      return a(l, this.operator, this.semver, this.options);
    }
    intersects(l, f) {
      if (!(l instanceof t))
        throw new TypeError("a Comparator is required");
      return this.operator === "" ? this.value === "" ? !0 : new n(l.value, f).test(this.value) : l.operator === "" ? l.value === "" ? !0 : new n(this.value, f).test(l.semver) : (f = r(f), f.includePrerelease && (this.value === "<0.0.0-0" || l.value === "<0.0.0-0") || !f.includePrerelease && (this.value.startsWith("<0.0.0") || l.value.startsWith("<0.0.0")) ? !1 : !!(this.operator.startsWith(">") && l.operator.startsWith(">") || this.operator.startsWith("<") && l.operator.startsWith("<") || this.semver.version === l.semver.version && this.operator.includes("=") && l.operator.includes("=") || a(this.semver, "<", l.semver, f) && this.operator.startsWith(">") && l.operator.startsWith("<") || a(this.semver, ">", l.semver, f) && this.operator.startsWith("<") && l.operator.startsWith(">")));
    }
  }
  yt = t;
  const r = _t, { safeRe: o, t: s } = xe, a = lo, i = at, u = le, n = de();
  return yt;
}
const El = de(), yl = (e, t, r) => {
  try {
    t = new El(t, r);
  } catch {
    return !1;
  }
  return t.test(e);
};
var dt = yl;
const bl = de(), vl = (e, t) => new bl(e, t).set.map((r) => r.map((o) => o.value).join(" ").trim().split(" "));
var wl = vl;
const Ll = le, $l = de(), Ol = (e, t, r) => {
  let o = null, s = null, a = null;
  try {
    a = new $l(t, r);
  } catch {
    return null;
  }
  return e.forEach((i) => {
    a.test(i) && (!o || s.compare(i) === -1) && (o = i, s = new Ll(o, r));
  }), o;
};
var Tl = Ol;
const Cl = le, Il = de(), Nl = (e, t, r) => {
  let o = null, s = null, a = null;
  try {
    a = new Il(t, r);
  } catch {
    return null;
  }
  return e.forEach((i) => {
    a.test(i) && (!o || s.compare(i) === 1) && (o = i, s = new Cl(o, r));
  }), o;
};
var Rl = Nl;
const bt = le, Al = de(), hr = ut, Dl = (e, t) => {
  e = new Al(e, t);
  let r = new bt("0.0.0");
  if (e.test(r) || (r = new bt("0.0.0-0"), e.test(r)))
    return r;
  r = null;
  for (let o = 0; o < e.set.length; ++o) {
    const s = e.set[o];
    let a = null;
    s.forEach((i) => {
      const u = new bt(i.semver.version);
      switch (i.operator) {
        case ">":
          u.prerelease.length === 0 ? u.patch++ : u.prerelease.push(0), u.raw = u.format();
        /* fallthrough */
        case "":
        case ">=":
          (!a || hr(u, a)) && (a = u);
          break;
        case "<":
        case "<=":
          break;
        /* istanbul ignore next */
        default:
          throw new Error(`Unexpected operation: ${i.operator}`);
      }
    }), a && (!r || hr(r, a)) && (r = a);
  }
  return r && e.test(r) ? r : null;
};
var Vl = Dl;
const Ml = de(), jl = (e, t) => {
  try {
    return new Ml(e, t).range || "*";
  } catch {
    return null;
  }
};
var Ul = jl;
const Fl = le, io = ct(), { ANY: Pl } = io, xl = de(), ql = dt, gr = ut, Sr = Ht, Gl = Wt, Bl = Jt, kl = (e, t, r, o) => {
  e = new Fl(e, o), t = new xl(t, o);
  let s, a, i, u, n;
  switch (r) {
    case ">":
      s = gr, a = Gl, i = Sr, u = ">", n = ">=";
      break;
    case "<":
      s = Sr, a = Bl, i = gr, u = "<", n = "<=";
      break;
    default:
      throw new TypeError('Must provide a hilo val of "<" or ">"');
  }
  if (ql(e, t, o))
    return !1;
  for (let c = 0; c < t.set.length; ++c) {
    const l = t.set[c];
    let f = null, g = null;
    if (l.forEach((p) => {
      p.semver === Pl && (p = new io(">=0.0.0")), f = f || p, g = g || p, s(p.semver, f.semver, o) ? f = p : i(p.semver, g.semver, o) && (g = p);
    }), f.operator === u || f.operator === n || (!g.operator || g.operator === u) && a(e, g.semver))
      return !1;
    if (g.operator === n && i(e, g.semver))
      return !1;
  }
  return !0;
};
var Xt = kl;
const _l = Xt, zl = (e, t, r) => _l(e, t, ">", r);
var Hl = zl;
const Jl = Xt, Wl = (e, t, r) => Jl(e, t, "<", r);
var Xl = Wl;
const Er = de(), Yl = (e, t, r) => (e = new Er(e, r), t = new Er(t, r), e.intersects(t, r));
var Kl = Yl;
const Zl = dt, Ql = ce;
var ei = (e, t, r) => {
  const o = [];
  let s = null, a = null;
  const i = e.sort((l, f) => Ql(l, f, r));
  for (const l of i)
    Zl(l, t, r) ? (a = l, s || (s = l)) : (a && o.push([s, a]), a = null, s = null);
  s && o.push([s, null]);
  const u = [];
  for (const [l, f] of o)
    l === f ? u.push(l) : !f && l === i[0] ? u.push("*") : f ? l === i[0] ? u.push(`<=${f}`) : u.push(`${l} - ${f}`) : u.push(`>=${l}`);
  const n = u.join(" || "), c = typeof t.raw == "string" ? t.raw : String(t);
  return n.length < c.length ? n : t;
};
const yr = de(), Yt = ct(), { ANY: vt } = Yt, Ve = dt, Kt = ce, ti = (e, t, r = {}) => {
  if (e === t)
    return !0;
  e = new yr(e, r), t = new yr(t, r);
  let o = !1;
  e: for (const s of e.set) {
    for (const a of t.set) {
      const i = oi(s, a, r);
      if (o = o || i !== null, i)
        continue e;
    }
    if (o)
      return !1;
  }
  return !0;
}, ri = [new Yt(">=0.0.0-0")], br = [new Yt(">=0.0.0")], oi = (e, t, r) => {
  if (e === t)
    return !0;
  if (e.length === 1 && e[0].semver === vt) {
    if (t.length === 1 && t[0].semver === vt)
      return !0;
    r.includePrerelease ? e = ri : e = br;
  }
  if (t.length === 1 && t[0].semver === vt) {
    if (r.includePrerelease)
      return !0;
    t = br;
  }
  const o = /* @__PURE__ */ new Set();
  let s, a;
  for (const p of e)
    p.operator === ">" || p.operator === ">=" ? s = vr(s, p, r) : p.operator === "<" || p.operator === "<=" ? a = wr(a, p, r) : o.add(p.semver);
  if (o.size > 1)
    return null;
  let i;
  if (s && a) {
    if (i = Kt(s.semver, a.semver, r), i > 0)
      return null;
    if (i === 0 && (s.operator !== ">=" || a.operator !== "<="))
      return null;
  }
  for (const p of o) {
    if (s && !Ve(p, String(s), r) || a && !Ve(p, String(a), r))
      return null;
    for (const y of t)
      if (!Ve(p, String(y), r))
        return !1;
    return !0;
  }
  let u, n, c, l, f = a && !r.includePrerelease && a.semver.prerelease.length ? a.semver : !1, g = s && !r.includePrerelease && s.semver.prerelease.length ? s.semver : !1;
  f && f.prerelease.length === 1 && a.operator === "<" && f.prerelease[0] === 0 && (f = !1);
  for (const p of t) {
    if (l = l || p.operator === ">" || p.operator === ">=", c = c || p.operator === "<" || p.operator === "<=", s) {
      if (g && p.semver.prerelease && p.semver.prerelease.length && p.semver.major === g.major && p.semver.minor === g.minor && p.semver.patch === g.patch && (g = !1), p.operator === ">" || p.operator === ">=") {
        if (u = vr(s, p, r), u === p && u !== s)
          return !1;
      } else if (s.operator === ">=" && !Ve(s.semver, String(p), r))
        return !1;
    }
    if (a) {
      if (f && p.semver.prerelease && p.semver.prerelease.length && p.semver.major === f.major && p.semver.minor === f.minor && p.semver.patch === f.patch && (f = !1), p.operator === "<" || p.operator === "<=") {
        if (n = wr(a, p, r), n === p && n !== a)
          return !1;
      } else if (a.operator === "<=" && !Ve(a.semver, String(p), r))
        return !1;
    }
    if (!p.operator && (a || s) && i !== 0)
      return !1;
  }
  return !(s && c && !a && i !== 0 || a && l && !s && i !== 0 || g || f);
}, vr = (e, t, r) => {
  if (!e)
    return t;
  const o = Kt(e.semver, t.semver, r);
  return o > 0 ? e : o < 0 || t.operator === ">" && e.operator === ">=" ? t : e;
}, wr = (e, t, r) => {
  if (!e)
    return t;
  const o = Kt(e.semver, t.semver, r);
  return o < 0 ? e : o > 0 || t.operator === "<" && e.operator === "<=" ? t : e;
};
var si = ti;
const wt = xe, Lr = it, ni = le, $r = oo, li = De, ii = pn, ai = gn, ui = En, ci = bn, di = Ln, fi = Tn, pi = Nn, mi = Dn, hi = ce, gi = Un, Si = xn, Ei = zt, yi = kn, bi = Hn, vi = ut, wi = Ht, Li = so, $i = no, Oi = Jt, Ti = Wt, Ci = lo, Ii = hl, Ni = ct(), Ri = de(), Ai = dt, Di = wl, Vi = Tl, Mi = Rl, ji = Vl, Ui = Ul, Fi = Xt, Pi = Hl, xi = Xl, qi = Kl, Gi = ei, Bi = si;
var ki = {
  parse: li,
  valid: ii,
  clean: ai,
  inc: ui,
  diff: ci,
  major: di,
  minor: fi,
  patch: pi,
  prerelease: mi,
  compare: hi,
  rcompare: gi,
  compareLoose: Si,
  compareBuild: Ei,
  sort: yi,
  rsort: bi,
  gt: vi,
  lt: wi,
  eq: Li,
  neq: $i,
  gte: Oi,
  lte: Ti,
  cmp: Ci,
  coerce: Ii,
  Comparator: Ni,
  Range: Ri,
  satisfies: Ai,
  toComparators: Di,
  maxSatisfying: Vi,
  minSatisfying: Mi,
  minVersion: ji,
  validRange: Ui,
  outside: Fi,
  gtr: Pi,
  ltr: xi,
  intersects: qi,
  simplifyRange: Gi,
  subset: Bi,
  SemVer: ni,
  re: wt.re,
  src: wt.src,
  tokens: wt.t,
  SEMVER_SPEC_VERSION: Lr.SEMVER_SPEC_VERSION,
  RELEASE_TYPES: Lr.RELEASE_TYPES,
  compareIdentifiers: $r.compareIdentifiers,
  rcompareIdentifiers: $r.rcompareIdentifiers
};
function _i(e, t) {
  var s;
  const r = (s = e.extent) == null ? void 0 : s.getCoordinatesInProjection(Tt), o = t.getCoordinatesInProjection(Tt);
  return !r || !Es(r, o) ? null : {
    type: "singleImage",
    opacity: e.opacity,
    extent: r,
    url: e.url
  };
}
function zi(e) {
  let t = 1 / 0;
  const r = e.getStride();
  if (r > 2) {
    const o = e.getFlatCoordinates(), s = o.length;
    for (let a = 0; a < s; a += r) {
      const i = o[a + 2];
      t = i < t ? i : t;
    }
  }
  return t !== 1 / 0 ? t : 0;
}
async function Zt(e, t, r, o) {
  return Promise.all(
    e.map(async (s) => {
      const a = await Wo(
        s,
        t,
        o
      ), i = Xo(a, {
        asObject: !0
      }), u = zi(
        a.getGeometry()
      );
      i.heightInfo = {
        ...Yo(a, t),
        groundLevel: u
      };
      const n = t.getModel(a);
      n && (i.model = n);
      const c = s[Ko] ?? r;
      return c instanceof Fr ? i.style = c.getOptionsForFeature(a) : i.style = c.toJSON(), i;
    })
  );
}
async function Hi(e, t, r) {
  const o = e.plugins.getByKey("@vcmap/planning").version;
  if (ki.satisfies(o, ">=6.0.0-0", { includePrerelease: !0 })) {
    const [a] = e.maps.getByType(Ft.className), i = a.getScene();
    if (!i)
      return null;
    const u = await t.fetchFeatureCollection({
      bbox: r.getCoordinatesInProjection(Tt),
      asJson: !0
    }), {
      features: n,
      style: c,
      vcsMeta: l
    } = Jo(u);
    return {
      features: await Zt(
        n,
        t.vectorProperties,
        t.style,
        i
      ),
      style: c.toJSON(),
      vcsMeta: l,
      type: "FeatureCollection"
      /* FEATURE_COLLECTION */
    };
  }
  return null;
}
async function Ji(e, t, r) {
  const [o] = e.maps.getByType(Ft.className), s = o.getScene();
  if (!s)
    return null;
  const a = r.getCoordinatesInProjection(Ae), i = t.getFeatures().filter(
    (n) => {
      var c;
      return ((c = n.getGeometry()) == null ? void 0 : c.intersectsExtent(a)) && !n[kr];
    }
  ), u = await Zt(
    i,
    t.vectorProperties,
    t.style,
    s
  );
  return u.length === 0 ? null : {
    type: "geojson",
    features: u,
    vcsMeta: t.getVcsMeta(),
    style: t.style.toJSON()
  };
}
async function Wi(e, t, r) {
  if (!t.tileProvider)
    return null;
  const [o] = e.maps.getByType(Ft.className), s = o.getScene();
  if (!s)
    return null;
  const a = (await t.tileProvider.getFeaturesForExtent(r)).filter(
    (u) => !u[kr]
  ), i = await Zt(
    a,
    t.vectorProperties,
    t.style,
    s
  );
  return i.length === 0 ? null : {
    type: "geojson",
    features: i,
    vcsMeta: t.vectorProperties.getVcsMeta(),
    style: t.style.toJSON()
  };
}
async function Xi(e, t) {
  const { activeMap: r } = t.maps, o = [...t.layers].filter(
    (i) => i.active && i.isSupported(r) && i[ko] !== _o
  ).map((i) => i instanceof zo ? _i(i, e) : i instanceof rt ? i.className === "PlanningFeatureStoreLayer" ? Hi(
    t,
    i,
    e
  ) : Ji(t, i, e) : i instanceof Ho ? Wi(t, i, e) : null);
  return {
    baseLayers: (await Promise.all(o)).filter((i) => i ? i.type === "geojson" || i.type === "FeatureCollection" ? i.features.length > 0 : !0 : !1).filter((i) => i !== null),
    hiddenObjects: [...t.hiddenObject].map((i) => i.id)
  };
}
class ao {
  constructor(t) {
    J(this, "title");
    J(this, "featureId");
    J(this, "fileSize");
    this.title = t.title, this.featureId = t.featureId, this.fileSize = t.fileSize;
  }
  // eslint-disable-next-line class-methods-use-this
  download() {
    return Promise.resolve();
  }
}
function Yi(e) {
  return /jpe?g$/i.test(e) ? "image/jpeg" : /png$/i.test(e) ? "image/png" : /tiff?$/i.test(e) ? "image/tiff" : "";
}
function uo(e, t, r, o = "jpg") {
  j(e, es), j(
    o,
    W(me(["jpg", "jpeg", "png", "tif", "tiff"]))
  ), j(r, W(Number));
  const s = new Zo(e.meta, {
    maxZoom: 0,
    minZoom: 0,
    scaleFactor: 4,
    hideLevels: 0
  });
  s.setImageName(e.name);
  const a = s.layer.getSource(), i = a.getTileGrid();
  if (!i)
    throw new Error("tileGrid not available");
  const u = a.getTileUrlFunction(), n = r ? i.getResolutions().indexOf(r) : i.getMaxZoom(), { size: c } = e.meta, l = document.createElement("canvas"), f = ys(i.getTileSize(n)), g = c.slice();
  r && (g[0] /= r, g[1] /= r), l.width = g[0], l.height = g[1];
  const p = l.getContext("2d"), y = [];
  let S = 0;
  return i.forEachTileCoord([0, 0, c[0], c[1]], n, ($) => {
    const d = new Image();
    Qo(e.meta.url) || (d.crossOrigin = "anonymous"), y.push(
      new Promise((C, M) => {
        d.onload = () => {
          p.drawImage(
            d,
            0,
            0,
            f[0],
            f[1],
            $[1] * f[0],
            g[1] + $[2] * f[1],
            f[0],
            f[1]
          ), S += 1, t && (t.progress = Math.round(
            S * 100 / y.length
          )), C();
        }, d.onerror = M, d.src = u($);
      })
    );
  }), new Promise(($, d) => {
    Promise.all(y).then(() => {
      l.toBlob((C) => {
        C ? (Oo(C, `${e.name}.${o}`), $()) : d(
          new Error(
            "Image conversion failed. If using Firefox try using Chrome or Edge."
          )
        ), t.progress = 0;
      }, Yi(o));
    }).catch((C) => {
      d(new Error(`Image download failed: ${String(C)}`)), t.progress = 0;
    });
  });
}
class Ki extends ao {
  constructor(r, o) {
    super(r);
    J(this, "obliqueCollectionName");
    J(this, "imageName");
    J(this, "fileExtension");
    J(this, "resolution");
    J(this, "downloadState");
    J(this, "_app");
    this.obliqueCollectionName = r.obliqueCollectionName, this.imageName = r.imageName, this.fileExtension = r.fileExtension, this.resolution = r.resolution, this.downloadState = r.downloadState, this._app = o;
  }
  download() {
    const r = this._app.obliqueCollections.getByKey(
      this.obliqueCollectionName
    ), o = r == null ? void 0 : r.getImageByName(this.imageName);
    if (o)
      return uo(
        o,
        this.downloadState,
        this.resolution,
        this.fileExtension
      );
    throw new Error("Oblique image not found");
  }
}
async function co(e, t) {
  const r = e[ts];
  if (r) {
    const o = r.clone(), s = t.maps.activeMap;
    if (s.currentImage)
      return rs(
        r,
        o,
        s.currentImage
      );
  }
  return null;
}
function Zi(e, t, r) {
  const { currentImage: o } = e.maps.activeMap;
  if (o)
    if (t.dedicatedSource)
      jr(
        t.getUriForImage(o.name),
        `${o.name}.${t.fileExtension}`
      );
    else
      return r.progress = 0, uo(
        o,
        r,
        t.resolution,
        t.fileExtension
      );
  return Promise.resolve();
}
function Qi(e) {
  return e < 1e3 ? `${e} kB` : e < 1e3 * 1e3 ? `${e / 1e3} MB` : `${e / (1e3 * 1e3)} GB`;
}
async function fo(e, t, r) {
  const o = t.maps.activeMap instanceof Pt ? await co(e, t) : e.getGeometry();
  if (!o || !(o instanceof bs) || o.getArea() === 0)
    throw new Error("export.validation.polygonFeature");
  if (r != null && vs(o) > r)
    throw new Error("export.validation.polygonFeatureArea");
  return o;
}
async function ea(e, t, r, o, s) {
  var w;
  const {
    selectedCrs: a,
    selectedExportFormats: i,
    selectedThematicClasses: u,
    selectedLod: n,
    textureExport: c,
    localCoordinates: l,
    tiledExport: f,
    genericAttributes: g,
    selectedAppearanceTheme: p,
    terrainExport: y,
    selectedHeightMode: S,
    selectedTerrainAppearanceLayer: $
  } = t.settingsCityModel, {
    email: d,
    exportName: C,
    description: M,
    selectedSelectionType: U,
    selectedObjects: Y
  } = t, {
    terrainUrl: H,
    terrainZoomLevel: z,
    terrainAppearanceOptions: k,
    exportScene: Z,
    dataProjection: O,
    fmeSecurityToken: F,
    fmeServerUrl: P
  } = e.settingsCityModel, { maxSelectionArea: q } = e, L = {
    COORD_SYS: a.startsWith("E") ? a : `EPSG:${a}`,
    OPT_SERVICEMODE: "async",
    EXPORT_FORMAT: i.join(","),
    THEM_CLASS: u,
    // TODO: Validation (at least 1 class) already in vue component
    LOD_SELECTION: n,
    TEXTURE: c && i.some(
      (b) => ge[b].texture
    ) ? "Yes" : "No",
    LOCAL: l && i.some(
      (b) => ge[b].localCoordinates
    ) ? "Yes" : "No",
    TILE_OUTPUT: f ? "Yes" : "No",
    GENERIC_ATTRIB: g && i.some(
      (b) => ge[b].genericAttributes
    ) ? "Yes" : "No",
    APP_THEME: p || "none",
    HEIGHTMODE: y ? "absolute" : S,
    ...d && { OPT_REQUESTEREMAIL: d },
    // eslint-disable-next-line @typescript-eslint/naming-convention
    ...C && { nm_NAME: C },
    // eslint-disable-next-line @typescript-eslint/naming-convention
    nm_DESC: M,
    TERRAIN: "No"
  };
  if (y && i.some((b) => b !== "2D Shape")) {
    const b = [...o.layers].find(
      (R) => R instanceof os && R.active
    ), T = new URL(window.location.href);
    if (H)
      L.TERRAIN = "Yes", L.LAYER_JSON = H;
    else if (b) {
      L.TERRAIN = "Yes";
      const R = new URL(
        b.url,
        T
      ).toString();
      L.LAYER_JSON = /layer.json/.test(R) ? R : `${R}/layer.json`;
    }
    if (z && z >= 0 && (L.ZOOM = z), c && $) {
      const R = o.layers.getByKey($);
      if (!R)
        throw new Error(
          `Selected terrain appearance layer "${$}" does not exist.`
        );
      const A = new URL(R.url, T);
      R instanceof Br ? (L.TEX_TYPE = "WMS", L.WMS_LEVEL = (k == null ? void 0 : k[$]) || R.maxLevel, A.search = new URLSearchParams(R.parameters).toString(), L.WMS_URL = A.toString()) : R instanceof Gr && (L.TEX_TYPE = "TMS", L.TMS_LEVEL = (k == null ? void 0 : k[$]) || R.maxLevel, L.TMS_URL = A.toString());
    }
  }
  let v;
  if (U === Q.AREA_SELECTION) {
    L.SELECTION = "Polygon";
    const b = o.layers.getByKey(r);
    if (!b || !(b instanceof rt))
      throw new Error("Layer for area selection does not exist.");
    const T = b.getFeatures()[0], R = (await fo(T, o, q)).clone();
    R.transform(
      Ae.proj,
      new ss(O).proj
    );
    const A = R.getCoordinates()[0];
    L.POLYGON = A.map((te) => {
      const [K, ve] = te;
      return `${K},${ve}`;
    }).join(";");
    const G = new _r({
      projection: Ae.toJSON(),
      coordinates: (w = T.getGeometry()) == null ? void 0 : w.getExtent()
    });
    Z && (v = await Xi(G, o));
  } else
    v = { selectedFeatures: Y };
  if (!P)
    throw new Error("FME server URL is not configured");
  const I = new URL(P, window.location.href);
  Object.entries(L).forEach(([b, T]) => {
    I.searchParams.set(b, String(T));
  });
  const E = { ...v, ...s };
  return fetch(I, {
    method: "POST",
    headers: {
      Accept: "application/json",
      // eslint-disable-next-line @typescript-eslint/naming-convention
      "Content-Type": "application/json",
      ...F ? { Authorization: `fmetoken token=${F}` } : {}
    },
    body: JSON.stringify(E)
  });
}
async function ta(e, t, r) {
  await t.query(e);
  const { results: o } = t;
  return r.value = o.sort((s, a) => s.title < a.title ? -1 : 1).map((s) => ({
    name: s.title,
    title: s.title,
    tooltip: "export.selectToDownload",
    selectionChanged: (a) => {
      a ? t.resultLayer.featureVisibility.showObjects([
        s.featureId
      ]) : t.resultLayer.featureVisibility.hideObjects([
        s.featureId
      ]);
    }
  })), await t.resultLayer.activate(), Promise.resolve();
}
const ra = $e({
  name: "ResultList",
  components: { VSheet: ot, VIcon: Xr, VcsList: To },
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
    const r = Fe("vcsApp"), o = r.plugins.getByKey(he), s = ne(), a = Co(e, "modelValue", t), i = ue(
      () => e.selectedDataSourceOptions.type === _.GEOJSON ? o.dataSource.title : "export.dataSources.oblique"
    );
    function u() {
      var l;
      const n = r.layers.getByKey(
        String(e.selectionLayerName)
      );
      (l = o.dataSource) == null || l.clear();
      const c = n == null ? void 0 : n.getFeatures()[0];
      if (c && c.getGeometry())
        fo(c, r, e.maxSelectionArea).then(
          () => ta(
            c,
            o.dataSource,
            s
          )
        ).catch((f) => {
          t("invalidArea"), r.notifier.add({
            type: we.ERROR,
            message: f.message,
            timeout: 5e3
          });
        });
      else
        throw new Error("Area selection feature does not exist.");
    }
    return Ne(
      () => e.active,
      () => {
        e.active && u();
      }
    ), zr(() => {
      e.active && u();
    }), Hr(() => {
      var n;
      return (n = o.dataSource) == null ? void 0 : n.clear();
    }), {
      resultItems: s,
      selectedResults: a,
      listTitle: i
    };
  }
}), oa = { class: "list-height" };
function sa(e, t, r, o, s, a) {
  const i = N("VcsList"), u = N("v-icon"), n = N("v-sheet");
  return D(), B(n, { class: "px-1" }, {
    default: h(() => [
      X(" TODO: turn this into paginated list "),
      ae("div", oa, [
        e.resultItems ? (D(), B(i, {
          key: 0,
          modelValue: e.selectedResults,
          "onUpdate:modelValue": t[0] || (t[0] = (c) => e.selectedResults = c),
          items: e.resultItems,
          selectable: "",
          title: e.listTitle,
          "action-button-list-overflow-count": 1
        }, null, 8, ["modelValue", "items", "title"])) : (D(), B(u, { key: 1 }, {
          default: h(() => [
            x(" $vcsProgress ")
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
const na = /* @__PURE__ */ Oe(ra, [["render", sa], ["__scopeId", "data-v-f341b982"]]), ee = {
  OFF: 1,
  ERROR: 2,
  WARN: 4,
  INFO: 8,
  DEBUG: 16
}, Se = {
  ERROR: 0,
  WARN: 0,
  INFO: 0,
  DEBUG: 0
};
Se.ERROR = ee.ERROR | ee.WARN | ee.INFO | ee.DEBUG;
Se.WARN = ee.WARN | ee.INFO | ee.DEBUG;
Se.INFO = ee.INFO | ee.DEBUG;
Se.DEBUG = ee.DEBUG;
const Me = {
  useTimestamp: !1,
  logLevel: ee.INFO
}, qe = /* @__PURE__ */ new Map();
qe.set(ee.ERROR, "error");
qe.set(ee.WARN, "warn");
qe.set(ee.INFO, "info");
qe.set(ee.DEBUG, "log");
class po {
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
    Me.logLevel & Se.ERROR && this._log(String(t), ee.ERROR, r);
  }
  /**
   * Logs a warning message
   * @param {string} msg The message to log.
   * @param {...any} optArgs
   */
  warning(t, ...r) {
    Me.logLevel & Se.WARN && this._log(String(t), ee.WARN, r);
  }
  /**
   * Deprecate a function. deprecations are stored on the logger
   * @param {string} functionName
   * @param {string=} alternativeFunctionName
   */
  deprecate(t, r) {
    const o = String(t), s = r ? String(r) : null;
    if (!this.deprecations.has(o)) {
      this.deprecations.set(o, s || null);
      let a = `${o} has been deprecated and will be removed`;
      s && (a = `${a}. ${s}`), this.warning(a);
    }
  }
  /**
   * Logs an info message
   * @param {string} msg The message to log.
   * @param {...any} optArgs
   */
  info(t, ...r) {
    Me.logLevel & Se.INFO && this._log(String(t), ee.INFO, r);
  }
  /**
   * Logs a debug message
   * @param {string} msg The message to log.
   * @param {...any} optArgs
   */
  debug(t, ...r) {
    Me.logLevel & Se.DEBUG && this._log(String(t), ee.DEBUG, r);
  }
  /**
   * Alias for debug
   * @param {string} msg The message to log.
   * @param {...any} optArgs
   */
  log(t, ...r) {
    Me.logLevel & Se.DEBUG && this._log(String(t), ee.DEBUG, r);
  }
  /**
   * Logs a message
   * @param {string} msg The message to log.
   * @param {LOG_LEVEL} level
   * @param {Array} optArgs
   * @private
   */
  _log(t, r, o) {
    let s = t;
    this.className && (s = `[${this.className}] ${s}`), console[qe.get(r)](s, ...o), r & ee.ERROR && (console.group(), console.trace(), console.groupEnd());
  }
}
const Rt = /* @__PURE__ */ new Map();
let Lt;
function la() {
  return Lt || (Lt = new po()), Lt;
}
function ia(e) {
  const t = new po(e);
  return Rt.set(e, t), t;
}
function Qt(e) {
  return e ? Rt.has(e) ? Rt.get(e) : ia(e) : la();
}
const Ee = 11102230246251565e-32, oe = 134217729, aa = (3 + 8 * Ee) * Ee;
function $t(e, t, r, o, s) {
  let a, i, u, n, c = t[0], l = o[0], f = 0, g = 0;
  l > c == l > -c ? (a = c, c = t[++f]) : (a = l, l = o[++g]);
  let p = 0;
  if (f < e && g < r)
    for (l > c == l > -c ? (i = c + a, u = a - (i - c), c = t[++f]) : (i = l + a, u = a - (i - l), l = o[++g]), a = i, u !== 0 && (s[p++] = u); f < e && g < r; )
      l > c == l > -c ? (i = a + c, n = i - a, u = a - (i - n) + (c - n), c = t[++f]) : (i = a + l, n = i - a, u = a - (i - n) + (l - n), l = o[++g]), a = i, u !== 0 && (s[p++] = u);
  for (; f < e; )
    i = a + c, n = i - a, u = a - (i - n) + (c - n), c = t[++f], a = i, u !== 0 && (s[p++] = u);
  for (; g < r; )
    i = a + l, n = i - a, u = a - (i - n) + (l - n), l = o[++g], a = i, u !== 0 && (s[p++] = u);
  return (a !== 0 || p === 0) && (s[p++] = a), p;
}
function ua(e, t) {
  let r = t[0];
  for (let o = 1; o < e; o++) r += t[o];
  return r;
}
function Ge(e) {
  return new Float64Array(e);
}
const ca = (3 + 16 * Ee) * Ee, da = (2 + 12 * Ee) * Ee, fa = (9 + 64 * Ee) * Ee * Ee, Ce = Ge(4), Or = Ge(8), Tr = Ge(12), Cr = Ge(16), se = Ge(4);
function pa(e, t, r, o, s, a, i) {
  let u, n, c, l, f, g, p, y, S, $, d, C, M, U, Y, H, z, k;
  const Z = e - s, O = r - s, F = t - a, P = o - a;
  U = Z * P, g = oe * Z, p = g - (g - Z), y = Z - p, g = oe * P, S = g - (g - P), $ = P - S, Y = y * $ - (U - p * S - y * S - p * $), H = F * O, g = oe * F, p = g - (g - F), y = F - p, g = oe * O, S = g - (g - O), $ = O - S, z = y * $ - (H - p * S - y * S - p * $), d = Y - z, f = Y - d, Ce[0] = Y - (d + f) + (f - z), C = U + d, f = C - U, M = U - (C - f) + (d - f), d = M - H, f = M - d, Ce[1] = M - (d + f) + (f - H), k = C + d, f = k - C, Ce[2] = C - (k - f) + (d - f), Ce[3] = k;
  let q = ua(4, Ce), L = da * i;
  if (q >= L || -q >= L || (f = e - Z, u = e - (Z + f) + (f - s), f = r - O, c = r - (O + f) + (f - s), f = t - F, n = t - (F + f) + (f - a), f = o - P, l = o - (P + f) + (f - a), u === 0 && n === 0 && c === 0 && l === 0) || (L = fa * i + aa * Math.abs(q), q += Z * l + P * u - (F * c + O * n), q >= L || -q >= L)) return q;
  U = u * P, g = oe * u, p = g - (g - u), y = u - p, g = oe * P, S = g - (g - P), $ = P - S, Y = y * $ - (U - p * S - y * S - p * $), H = n * O, g = oe * n, p = g - (g - n), y = n - p, g = oe * O, S = g - (g - O), $ = O - S, z = y * $ - (H - p * S - y * S - p * $), d = Y - z, f = Y - d, se[0] = Y - (d + f) + (f - z), C = U + d, f = C - U, M = U - (C - f) + (d - f), d = M - H, f = M - d, se[1] = M - (d + f) + (f - H), k = C + d, f = k - C, se[2] = C - (k - f) + (d - f), se[3] = k;
  const v = $t(4, Ce, 4, se, Or);
  U = Z * l, g = oe * Z, p = g - (g - Z), y = Z - p, g = oe * l, S = g - (g - l), $ = l - S, Y = y * $ - (U - p * S - y * S - p * $), H = F * c, g = oe * F, p = g - (g - F), y = F - p, g = oe * c, S = g - (g - c), $ = c - S, z = y * $ - (H - p * S - y * S - p * $), d = Y - z, f = Y - d, se[0] = Y - (d + f) + (f - z), C = U + d, f = C - U, M = U - (C - f) + (d - f), d = M - H, f = M - d, se[1] = M - (d + f) + (f - H), k = C + d, f = k - C, se[2] = C - (k - f) + (d - f), se[3] = k;
  const I = $t(v, Or, 4, se, Tr);
  U = u * l, g = oe * u, p = g - (g - u), y = u - p, g = oe * l, S = g - (g - l), $ = l - S, Y = y * $ - (U - p * S - y * S - p * $), H = n * c, g = oe * n, p = g - (g - n), y = n - p, g = oe * c, S = g - (g - c), $ = c - S, z = y * $ - (H - p * S - y * S - p * $), d = Y - z, f = Y - d, se[0] = Y - (d + f) + (f - z), C = U + d, f = C - U, M = U - (C - f) + (d - f), d = M - H, f = M - d, se[1] = M - (d + f) + (f - H), k = C + d, f = k - C, se[2] = C - (k - f) + (d - f), se[3] = k;
  const E = $t(I, Tr, 4, se, Cr);
  return Cr[E - 1];
}
function ma(e, t, r, o, s, a) {
  const i = (t - a) * (r - s), u = (e - s) * (o - a), n = i - u, c = Math.abs(i + u);
  return Math.abs(n) >= ca * c ? n : -pa(e, t, r, o, s, a, c);
}
function ha(e, t) {
  var r, o, s = 0, a, i, u, n, c, l, f, g = e[0], p = e[1], y = t.length;
  for (r = 0; r < y; r++) {
    o = 0;
    var S = t[r], $ = S.length - 1;
    if (l = S[0], l[0] !== S[$][0] && l[1] !== S[$][1])
      throw new Error("First and last coordinates in a ring must be the same");
    for (i = l[0] - g, u = l[1] - p, o; o < $; o++) {
      if (f = S[o + 1], n = f[0] - g, c = f[1] - p, u === 0 && c === 0) {
        if (n <= 0 && i >= 0 || i <= 0 && n >= 0)
          return 0;
      } else if (c >= 0 && u <= 0 || c <= 0 && u >= 0) {
        if (a = ma(i, n, u, c, 0, 0), a === 0)
          return 0;
        (a > 0 && c > 0 && u <= 0 || a < 0 && c <= 0 && u > 0) && s++;
      }
      l = f, u = c, i = n;
    }
  }
  return s % 2 !== 0;
}
function Le(e, t, r = {}) {
  const o = { type: "Feature" };
  return (r.id === 0 || r.id) && (o.id = r.id), r.bbox && (o.bbox = r.bbox), o.properties = t || {}, o.geometry = e, o;
}
function ga(e, t, r = {}) {
  if (!e)
    throw new Error("coordinates is required");
  if (!Array.isArray(e))
    throw new Error("coordinates must be an Array");
  if (e.length < 2)
    throw new Error("coordinates must be at least 2 numbers long");
  if (!Ir(e[0]) || !Ir(e[1]))
    throw new Error("coordinates must contain numbers");
  return Le({
    type: "Point",
    coordinates: e
  }, t, r);
}
function Sa(e, t, r = {}) {
  if (e.length < 2)
    throw new Error("coordinates must be an array of two or more positions");
  return Le({
    type: "LineString",
    coordinates: e
  }, t, r);
}
function At(e, t = {}) {
  const r = { type: "FeatureCollection" };
  return t.id && (r.id = t.id), t.bbox && (r.bbox = t.bbox), r.features = e, r;
}
function Ea(e, t, r = {}) {
  return Le({
    type: "MultiLineString",
    coordinates: e
  }, t, r);
}
function Ir(e) {
  return !isNaN(e) && e !== null && !Array.isArray(e);
}
function ya(e) {
  if (!e)
    throw new Error("coord is required");
  if (!Array.isArray(e)) {
    if (e.type === "Feature" && e.geometry !== null && e.geometry.type === "Point")
      return [...e.geometry.coordinates];
    if (e.type === "Point")
      return [...e.coordinates];
  }
  if (Array.isArray(e) && e.length >= 2 && !Array.isArray(e[0]) && !Array.isArray(e[1]))
    return [...e];
  throw new Error("coord must be GeoJSON Point or an Array of numbers");
}
function ft(e) {
  return e.type === "Feature" ? e.geometry : e;
}
function Ue(e, t, r = {}) {
  if (!e)
    throw new Error("point is required");
  if (!t)
    throw new Error("polygon is required");
  const o = ya(e), s = ft(t), a = s.type, i = t.bbox;
  let u = s.coordinates;
  if (i && ba(o, i) === !1)
    return !1;
  a === "Polygon" && (u = [u]);
  let n = !1;
  for (var c = 0; c < u.length; ++c) {
    const l = ha(o, u[c]);
    if (l === 0) return !r.ignoreBoundary;
    l && (n = !0);
  }
  return n;
}
function ba(e, t) {
  return t[0] <= e[0] && t[1] <= e[1] && t[2] >= e[0] && t[3] >= e[1];
}
class mo {
  constructor(t = [], r = va) {
    if (this.data = t, this.length = this.data.length, this.compare = r, this.length > 0)
      for (let o = (this.length >> 1) - 1; o >= 0; o--) this._down(o);
  }
  push(t) {
    this.data.push(t), this.length++, this._up(this.length - 1);
  }
  pop() {
    if (this.length === 0) return;
    const t = this.data[0], r = this.data.pop();
    return this.length--, this.length > 0 && (this.data[0] = r, this._down(0)), t;
  }
  peek() {
    return this.data[0];
  }
  _up(t) {
    const { data: r, compare: o } = this, s = r[t];
    for (; t > 0; ) {
      const a = t - 1 >> 1, i = r[a];
      if (o(s, i) >= 0) break;
      r[t] = i, t = a;
    }
    r[t] = s;
  }
  _down(t) {
    const { data: r, compare: o } = this, s = this.length >> 1, a = r[t];
    for (; t < s; ) {
      let i = (t << 1) + 1, u = r[i];
      const n = i + 1;
      if (n < this.length && o(r[n], u) < 0 && (i = n, u = r[n]), o(u, a) >= 0) break;
      r[t] = u, t = i;
    }
    r[t] = a;
  }
}
function va(e, t) {
  return e < t ? -1 : e > t ? 1 : 0;
}
function ho(e, t) {
  return e.p.x > t.p.x ? 1 : e.p.x < t.p.x ? -1 : e.p.y !== t.p.y ? e.p.y > t.p.y ? 1 : -1 : 1;
}
function wa(e, t) {
  return e.rightSweepEvent.p.x > t.rightSweepEvent.p.x ? 1 : e.rightSweepEvent.p.x < t.rightSweepEvent.p.x ? -1 : e.rightSweepEvent.p.y !== t.rightSweepEvent.p.y ? e.rightSweepEvent.p.y < t.rightSweepEvent.p.y ? 1 : -1 : 1;
}
class Nr {
  constructor(t, r, o, s) {
    this.p = {
      x: t[0],
      y: t[1]
    }, this.featureId = r, this.ringId = o, this.eventId = s, this.otherEvent = null, this.isLeftEndpoint = null;
  }
  isSamePoint(t) {
    return this.p.x === t.p.x && this.p.y === t.p.y;
  }
}
function La(e, t) {
  if (e.type === "FeatureCollection") {
    const r = e.features;
    for (let o = 0; o < r.length; o++)
      Rr(r[o], t);
  } else
    Rr(e, t);
}
let We = 0, Xe = 0, Ye = 0;
function Rr(e, t) {
  const r = e.type === "Feature" ? e.geometry : e;
  let o = r.coordinates;
  (r.type === "Polygon" || r.type === "MultiLineString") && (o = [o]), r.type === "LineString" && (o = [[o]]);
  for (let s = 0; s < o.length; s++)
    for (let a = 0; a < o[s].length; a++) {
      let i = o[s][a][0], u = null;
      Xe = Xe + 1;
      for (let n = 0; n < o[s][a].length - 1; n++) {
        u = o[s][a][n + 1];
        const c = new Nr(i, We, Xe, Ye), l = new Nr(u, We, Xe, Ye + 1);
        c.otherEvent = l, l.otherEvent = c, ho(c, l) > 0 ? (l.isLeftEndpoint = !0, c.isLeftEndpoint = !1) : (c.isLeftEndpoint = !0, l.isLeftEndpoint = !1), t.push(c), t.push(l), i = u, Ye = Ye + 1;
      }
    }
  We = We + 1;
}
class $a {
  constructor(t) {
    this.leftSweepEvent = t, this.rightSweepEvent = t.otherEvent;
  }
}
function Oa(e, t) {
  if (e === null || t === null || e.leftSweepEvent.ringId === t.leftSweepEvent.ringId && (e.rightSweepEvent.isSamePoint(t.leftSweepEvent) || e.rightSweepEvent.isSamePoint(t.leftSweepEvent) || e.rightSweepEvent.isSamePoint(t.rightSweepEvent) || e.leftSweepEvent.isSamePoint(t.leftSweepEvent) || e.leftSweepEvent.isSamePoint(t.rightSweepEvent))) return !1;
  const r = e.leftSweepEvent.p.x, o = e.leftSweepEvent.p.y, s = e.rightSweepEvent.p.x, a = e.rightSweepEvent.p.y, i = t.leftSweepEvent.p.x, u = t.leftSweepEvent.p.y, n = t.rightSweepEvent.p.x, c = t.rightSweepEvent.p.y, l = (c - u) * (s - r) - (n - i) * (a - o), f = (n - i) * (o - u) - (c - u) * (r - i), g = (s - r) * (o - u) - (a - o) * (r - i);
  if (l === 0)
    return !1;
  const p = f / l, y = g / l;
  if (p >= 0 && p <= 1 && y >= 0 && y <= 1) {
    const S = r + p * (s - r), $ = o + p * (a - o);
    return [S, $];
  }
  return !1;
}
function Ta(e, t) {
  t = t || !1;
  const r = [], o = new mo([], wa);
  for (; e.length; ) {
    const s = e.pop();
    if (s.isLeftEndpoint) {
      const a = new $a(s);
      for (let i = 0; i < o.data.length; i++) {
        const u = o.data[i];
        if (t && u.leftSweepEvent.featureId === s.featureId)
          continue;
        const n = Oa(a, u);
        n !== !1 && r.push(n);
      }
      o.push(a);
    } else s.isLeftEndpoint === !1 && o.pop();
  }
  return r;
}
function Ca(e, t) {
  const r = new mo([], ho);
  return La(e, r), Ta(r, t);
}
var Ia = Ca;
function er(e, t, r = {}) {
  const { removeDuplicates: o = !0, ignoreSelfIntersections: s = !0 } = r;
  let a = [];
  e.type === "FeatureCollection" ? a = a.concat(e.features) : e.type === "Feature" ? a.push(e) : (e.type === "LineString" || e.type === "Polygon" || e.type === "MultiLineString" || e.type === "MultiPolygon") && a.push(Le(e)), t.type === "FeatureCollection" ? a = a.concat(t.features) : t.type === "Feature" ? a.push(t) : (t.type === "LineString" || t.type === "Polygon" || t.type === "MultiLineString" || t.type === "MultiPolygon") && a.push(Le(t));
  const i = Ia(
    At(a),
    s
  );
  let u = [];
  if (o) {
    const n = {};
    i.forEach((c) => {
      const l = c.join(",");
      n[l] || (n[l] = !0, u.push(c));
    });
  } else
    u = i;
  return At(u.map((n) => ga(n)));
}
function Na(e, t) {
  var r, o, s, a, i, u, n, c, l, f, g = 0, p = e.type === "FeatureCollection", y = e.type === "Feature", S = p ? e.features.length : 1;
  for (r = 0; r < S; r++) {
    for (u = p ? e.features[r].geometry : y ? e.geometry : e, c = p ? e.features[r].properties : y ? e.properties : {}, l = p ? e.features[r].bbox : y ? e.bbox : void 0, f = p ? e.features[r].id : y ? e.id : void 0, n = u ? u.type === "GeometryCollection" : !1, i = n ? u.geometries.length : 1, s = 0; s < i; s++) {
      if (a = n ? u.geometries[s] : u, a === null) {
        if (t(
          null,
          g,
          c,
          l,
          f
        ) === !1)
          return !1;
        continue;
      }
      switch (a.type) {
        case "Point":
        case "LineString":
        case "MultiPoint":
        case "Polygon":
        case "MultiLineString":
        case "MultiPolygon": {
          if (t(
            a,
            g,
            c,
            l,
            f
          ) === !1)
            return !1;
          break;
        }
        case "GeometryCollection": {
          for (o = 0; o < a.geometries.length; o++)
            if (t(
              a.geometries[o],
              g,
              c,
              l,
              f
            ) === !1)
              return !1;
          break;
        }
        default:
          throw new Error("Unknown Geometry Type");
      }
    }
    g++;
  }
}
function Ar(e, t) {
  Na(e, function(r, o, s, a, i) {
    var u = r === null ? null : r.type;
    switch (u) {
      case null:
      case "Point":
      case "LineString":
      case "Polygon":
        return t(
          Le(r, s, { bbox: a, id: i }),
          o,
          0
        ) === !1 ? !1 : void 0;
    }
    var n;
    switch (u) {
      case "MultiPoint":
        n = "Point";
        break;
      case "MultiLineString":
        n = "LineString";
        break;
      case "MultiPolygon":
        n = "Polygon";
        break;
    }
    for (var c = 0; c < r.coordinates.length; c++) {
      var l = r.coordinates[c], f = {
        type: n,
        coordinates: l
      };
      if (t(Le(f, s), o, c) === !1)
        return !1;
    }
  });
}
function Dt(e, t = {}) {
  const r = ft(e);
  switch (!t.properties && e.type === "Feature" && (t.properties = e.properties), r.type) {
    case "Polygon":
      return Ra(r, t);
    case "MultiPolygon":
      return Aa(r, t);
    default:
      throw new Error("invalid poly");
  }
}
function Ra(e, t = {}) {
  const o = ft(e).coordinates, s = t.properties ? t.properties : e.type === "Feature" ? e.properties : {};
  return go(o, s);
}
function Aa(e, t = {}) {
  const o = ft(e).coordinates, s = t.properties ? t.properties : e.type === "Feature" ? e.properties : {}, a = [];
  return o.forEach((i) => {
    a.push(go(i, s));
  }), At(a);
}
function go(e, t) {
  return e.length > 1 ? Ea(e, t) : Sa(e[0], t);
}
function Da(e, t, {
  ignoreSelfIntersections: r = !0
} = { ignoreSelfIntersections: !0 }) {
  let o = !0;
  return Ar(e, (s) => {
    Ar(t, (a) => {
      if (o === !1)
        return !1;
      o = Va(
        s.geometry,
        a.geometry,
        r
      );
    });
  }), o;
}
function Va(e, t, r) {
  switch (e.type) {
    case "Point":
      switch (t.type) {
        case "Point":
          return !Fa(e.coordinates, t.coordinates);
        case "LineString":
          return !Dr(t, e);
        case "Polygon":
          return !Ue(e, t);
      }
      break;
    case "LineString":
      switch (t.type) {
        case "Point":
          return !Dr(e, t);
        case "LineString":
          return !Ma(e, t, r);
        case "Polygon":
          return !Vr(t, e, r);
      }
      break;
    case "Polygon":
      switch (t.type) {
        case "Point":
          return !Ue(t, e);
        case "LineString":
          return !Vr(e, t, r);
        case "Polygon":
          return !ja(t, e, r);
      }
  }
  return !1;
}
function Dr(e, t) {
  for (let r = 0; r < e.coordinates.length - 1; r++)
    if (Ua(
      e.coordinates[r],
      e.coordinates[r + 1],
      t.coordinates
    ))
      return !0;
  return !1;
}
function Ma(e, t, r) {
  return er(e, t, {
    ignoreSelfIntersections: r
  }).features.length > 0;
}
function Vr(e, t, r) {
  for (const s of t.coordinates)
    if (Ue(s, e))
      return !0;
  return er(t, Dt(e), {
    ignoreSelfIntersections: r
  }).features.length > 0;
}
function ja(e, t, r) {
  for (const s of e.coordinates[0])
    if (Ue(s, t))
      return !0;
  for (const s of t.coordinates[0])
    if (Ue(s, e))
      return !0;
  return er(
    Dt(e),
    Dt(t),
    { ignoreSelfIntersections: r }
  ).features.length > 0;
}
function Ua(e, t, r) {
  const o = r[0] - e[0], s = r[1] - e[1], a = t[0] - e[0], i = t[1] - e[1];
  return o * i - s * a !== 0 ? !1 : Math.abs(a) >= Math.abs(i) ? a > 0 ? e[0] <= r[0] && r[0] <= t[0] : t[0] <= r[0] && r[0] <= e[0] : i > 0 ? e[1] <= r[1] && r[1] <= t[1] : t[1] <= r[1] && r[1] <= e[1];
}
function Fa(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}
var Pa = Da;
function So(e) {
  try {
    j(e.baseUrl, W(String));
  } catch (t) {
    return Qt(he).error(t.message), !1;
  }
  return !0;
}
class Eo {
  constructor(t, r) {
    J(this, "type");
    J(this, "url");
    J(this, "_app");
    J(this, "_resultLayer");
    /** the results of the last query */
    J(this, "results");
    this._app = r, this.type = t.type, this.url = t.baseUrl ? t.baseUrl.replace(/\/$/, "") : "";
    let o = this._app.layers.getByKey("_exportResultLayer");
    o || (o = new rt({
      projection: Ae,
      name: "_exportResultLayer",
      allowPicking: !1,
      vectorProperties: {
        classificationType: "both",
        altitudeMode: "clampToGround"
      }
    }), Pr(o), this._app.layers.add(o)), this._resultLayer = o, this.results = [];
  }
  get resultLayer() {
    return this._resultLayer;
  }
  /**
   * query the given data source based on a features geometry
   * @param feature The feature that is used to query the overlapping data sources.
   */
  async query(t) {
    j(t, nr), this.clear();
    const r = this._app.maps.activeMap instanceof Pt ? await co(t, this._app) : t.getGeometry();
    if (r) {
      const o = new _r({
        coordinates: r.getExtent(),
        projection: Ae.toJSON()
      });
      if (o.isValid()) {
        const s = new ws(), a = s.writeFeatureObject(new nr(r)), i = (await this.getFeaturesInExtent(o)).map((u) => {
          const n = s.writeFeatureObject(u);
          if (!Pa(n, a)) {
            const c = this.getResultFromFeature(u);
            return this.results.push(c), u;
          }
          return null;
        }).filter((u) => !!u);
        this._resultLayer.addFeatures(i), this._resultLayer.featureVisibility.hideObjects(
          i.map((u) => u.getId())
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
class yo extends ao {
  constructor(r) {
    super(r);
    J(this, "href");
    this.href = r.href;
  }
  download() {
    return jr(this.href, ""), Promise.resolve();
  }
}
function bo(e, t) {
  if (So(e) && e.type === _.OBLIQUE) {
    const { obliqueCollectionName: o, fileExtension: s, resolution: a } = e;
    try {
      return j(o, String), j(
        t.obliqueCollections.getByKey(o),
        ns
      ), j(s, W(String)), j(a, W(Number)), !0;
    } catch (i) {
      return Qt("@vcmap/export/dataSources/ObliqueDataSource").error(
        i.message
      ), !1;
    }
  }
  return !1;
}
class et extends Eo {
  constructor(r, o) {
    super(r, o);
    J(this, "dedicatedSource");
    J(this, "obliqueCollectionName");
    J(this, "fileExtension");
    J(this, "viewDirectionFilter", null);
    J(this, "resolution");
    J(this, "downloadState");
    this.dedicatedSource = fe(r.dedicatedSource, !1), this.obliqueCollectionName = r.obliqueCollectionName, this.fileExtension = r.fileExtension || "jpg", this.resolution = r.resolution, this.downloadState = r.downloadState;
  }
  /** generates a download link for a given image, if this data source has a dedicated source */
  getUriForImage(r) {
    return `${this.url}/${r}.${this.fileExtension}`;
  }
  getResultFromFeature(r) {
    const o = String(r.getId());
    return this.dedicatedSource ? new yo({
      title: o,
      href: this.getUriForImage(o),
      featureId: o,
      fileSize: void 0
    }) : new Ki(
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
      const a = o.imageFeatureSource.getFeaturesInExtent(r.extent);
      return this.viewDirectionFilter && this.viewDirectionFilter !== ls.NADIR ? a.filter(
        (i) => i.get("viewDirection") === this.viewDirectionFilter
      ) : a;
    } else
      throw new Error("Oblique collection does not exist.");
  }
}
function vo(e) {
  if (So(e) && e.type === _.GEOJSON)
    try {
      return j(e.geojsonUrl, String), !0;
    } catch (r) {
      return Qt("@vcmap/export/dataSources/GeoJSONDataSource").error(
        r.message
      ), !1;
    }
  return !1;
}
class xa extends Eo {
  constructor(r, o) {
    super(r, o);
    /** the title of this data source to be rendered in the UI */
    J(this, "title");
    J(this, "geojsonUrl");
    J(this, "_geojsonLayer");
    this.title = r.title, this.geojsonUrl = r.geojsonUrl, this._geojsonLayer = new is({
      name: "_exportGeojsonLayer",
      url: this.geojsonUrl,
      vectorProperties: {
        altitudeMode: "clampToGround"
      }
    });
  }
  getResultFromFeature(r) {
    const o = r.getProperties();
    return new yo({
      href: `${this.url}/${o.url.replace(/^\//, "")}`,
      title: o.url,
      featureId: r.getId(),
      fileSize: o.fileSize ? Qi(o.fileSize) : void 0
    });
  }
  async getFeaturesInExtent(r) {
    const o = this._geojsonLayer;
    if (o)
      return await o.fetchData(), o.source.getFeaturesInExtent(r.extent);
    throw new Error("GeoJSON layer does not exist.");
  }
}
function qa(e, t) {
  if (vo(e))
    return new xa(e, t);
  if (bo(e, t))
    return new et(e, t);
  if (e.type === _.CITY_MODEL)
    return null;
  throw new Error(`Datasource "${e.type}" not valid`);
}
function Ga(e, t) {
  return vo(t) || bo(t, e) || t.type === _.CITY_MODEL;
}
const Ba = $e({
  name: "ExportWindow",
  components: {
    VSheet: ot,
    VForm: ps,
    VOverlay: ms,
    VChip: hs,
    VProgressLinear: gs,
    VcsFormButton: Vt,
    VcsSelect: tt,
    VcsTextField: Ur,
    VcsTextArea: Io,
    VcsCheckbox: Ut,
    VcsWizard: No,
    VcsWizardStep: Ro,
    SelectionArea: Rs,
    SelectionObjects: _s,
    SettingsCityModel: Js,
    SettingsOblique: Ys,
    ResultList: na
  },
  setup() {
    var L, v, I;
    const e = Fe("vcsApp"), t = e.plugins.getByKey(he), r = t.state, o = t.config, s = ne(!1), a = Qe({
      running: !1,
      progress: 0,
      // shows how many images should be downloaded (second number) and which is currently downloading (first number).
      queue: [1, 1]
    });
    let i;
    ((E) => {
      E[E.DATASOURCE = 0] = "DATASOURCE", E[E.SELECTION_MODE = 1] = "SELECTION_MODE", E[E.SETTINGS = 2] = "SETTINGS", E[E.EXPORT_DESTINATION = 3] = "EXPORT_DESTINATION", E[E.SEND_REQUEST = 4] = "SEND_REQUEST";
    })(i || (i = {}));
    const u = Qe({
      selectionMode: !1,
      settings: !1,
      exportDestination: !o.termsOfUse
    }), n = ne(null), c = ne(null), l = ne(null);
    Ne(
      () => r.settingsOblique.directionFilter,
      () => {
        t.dataSource && t.dataSource instanceof et && (t.dataSource.viewDirectionFilter = r.settingsOblique.directionFilter);
      }
    );
    function f(E) {
      r.step = E + 1, E >= r.highestStep && (r.highestStep = r.step);
    }
    const g = ne((L = e.maps.activeMap) == null ? void 0 : L.className), p = ne(
      (I = (v = e.maps.activeMap) == null ? void 0 : v.collection) == null ? void 0 : I.name
    ), y = ue(() => o.dataSourceOptionsList.filter(Ga.bind(null, e)).map((E) => {
      let w;
      if (E.type === _.CITY_MODEL)
        w = E.title || "export.dataSources.cityModel";
      else if (E.type === _.OBLIQUE)
        w = E.title || "export.dataSources.oblique";
      else if (E.type === _.GEOJSON)
        ({ title: w } = E);
      else
        throw new Error(
          `The following datasource type is not supported: "${String(E.type)}"`
        );
      return { ...E, title: w };
    }));
    function S() {
      return ![...e.layers].some(
        (E) => E instanceof qr && E.properties.exportWorkbench === o.settingsCityModel.fmeServerUrl
      );
    }
    const $ = ue(() => {
      var w, b;
      const E = [
        {
          value: Q.AREA_SELECTION,
          title: "export.selectionTypes.areaSelection"
        }
      ];
      return ((w = r.selectedDataSourceOptions) == null ? void 0 : w.type) === _.CITY_MODEL && (S() || E.push({
        value: Q.OBJECT_SELECTION,
        title: "export.selectionTypes.objectSelection",
        props: {
          disabled: g.value !== "CesiumMap"
        }
      })), ((b = r.selectedDataSourceOptions) == null ? void 0 : b.type) === _.OBLIQUE && E.push({
        value: Q.CURRENT_IMAGE,
        title: "export.selectionTypes.currentImage",
        props: {
          disabled: g.value !== "ObliqueMap" || p.value !== r.selectedDataSourceOptions.obliqueCollectionName
        }
      }), E;
    });
    let d;
    const C = [
      e.maps.mapActivated.addEventListener((E) => {
        var w;
        g.value = E.className, p.value = (w = E == null ? void 0 : E.collection) == null ? void 0 : w.name, (r.selectedSelectionType === Q.OBJECT_SELECTION && E.className !== "CesiumMap" || r.selectedSelectionType === Q.CURRENT_IMAGE && E.className !== "ObliqueMap") && (r.selectedSelectionType = null), E instanceof Pt ? d = E.collectionChanged.addEventListener(
          (b) => {
            p.value = b.name, Q.CURRENT_IMAGE && b.name !== r.selectedDataSourceOptions.obliqueCollectionName && (r.selectedSelectionType = null);
          }
        ) : d == null || d();
      }),
      e.layers.added.addEventListener(() => {
        const E = $.value.find(
          (w) => w.value === Q.OBJECT_SELECTION
        );
        if (E && (E.disabled = g.value !== "CesiumMap"), S()) {
          const w = $.value.findIndex(
            (b) => b.value === Q.OBJECT_SELECTION
          );
          w !== -1 && $.value.splice(w, 1);
        }
      }),
      e.layers.removed.addEventListener(() => {
        const E = $.value.find(
          (w) => w.value === Q.OBJECT_SELECTION
        );
        if (E && (E.disabled = g.value !== "CesiumMap"), S()) {
          const w = $.value.findIndex(
            (b) => b.value === Q.OBJECT_SELECTION
          );
          w !== -1 && $.value.splice(w, 1);
        }
      })
    ];
    Ne(
      () => $.value,
      (E) => {
        E.length === 1 && (r.selectedSelectionType = E[0].value);
      },
      { deep: !0 }
    );
    function M(E) {
      return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(E);
    }
    const U = ue(() => {
      var w, b, T;
      const E = o.termsOfUse ? r.termsConsented : !0;
      if (((w = r.selectedDataSourceOptions) == null ? void 0 : w.type) === _.CITY_MODEL) {
        if (o.allowEmail)
          return E && r.email && M(r.email);
        if (o.allowExportName)
          return E && !!r.exportName;
      } else if (((b = r.selectedDataSourceOptions) == null ? void 0 : b.type) === _.OBLIQUE) {
        if (r.selectedSelectionType === Q.AREA_SELECTION)
          return E && r.selectedResultItems.length > 0;
        if (r.selectedSelectionType === Q.CURRENT_IMAGE)
          return E;
      } else if (((T = r.selectedDataSourceOptions) == null ? void 0 : T.type) === _.GEOJSON)
        return E && r.selectedResultItems.length > 0;
      return !1;
    });
    Ne(
      () => r.selectedSelectionType,
      (E, w) => {
        if (w === Q.AREA_SELECTION) {
          const b = e.layers.getByKey(
            String(je)
          );
          b == null || b.removeAllFeatures();
        } else w === Q.OBJECT_SELECTION && (r.selectedObjects = []);
        E === Q.CURRENT_IMAGE && (r.highestStep = 1, c.value && c.value.reset());
      }
    );
    async function Y(E, w) {
      var T;
      if (await E) {
        const R = ((T = r.selectedDataSourceOptions) == null ? void 0 : T.type) === _.GEOJSON ? w + 1 : w;
        f(R);
      }
    }
    function H() {
      var E, w, b;
      t.resetState(), (E = n.value) == null || E.resetValidation(), (w = c.value) == null || w.resetValidation(), (b = l.value) == null || b.resetValidation();
    }
    function z(E) {
      var w;
      r.selectedDataSourceOptions && H(), (w = t.dataSource) == null || w.clear(), r.selectedDataSourceOptions = E, t.updateDataSource(
        e,
        E,
        a
      ), f(
        0
        /* DATASOURCE */
      );
    }
    async function k() {
      var E, w, b, T;
      if (u.settings && u.exportDestination && u.selectionMode || ((E = r.selectedDataSourceOptions) == null ? void 0 : E.type) === _.GEOJSON && u.exportDestination && u.selectionMode || r.selectedSelectionType === Q.CURRENT_IMAGE && u.selectionMode) {
        let R;
        if (s.value = !0, ((w = r.selectedDataSourceOptions) == null ? void 0 : w.type) === _.CITY_MODEL)
          R = ea(
            o,
            r,
            String(je),
            e,
            t.additionalParams
          );
        else if (((b = r.selectedDataSourceOptions) == null ? void 0 : b.type) === _.OBLIQUE || ((T = r.selectedDataSourceOptions) == null ? void 0 : T.type) === _.GEOJSON)
          if (a.running = !0, await new Promise((A) => {
            setTimeout(A, 0);
          }), r.selectedSelectionType === Q.CURRENT_IMAGE)
            if (t.dataSource instanceof et)
              R = Zi(
                e,
                t.dataSource,
                a
              ).catch((A) => {
                e.notifier.add({
                  type: we.ERROR,
                  message: String(A),
                  timeout: 5e3
                });
              });
            else
              throw new Error(
                "AbstractDataSource is not instance of ObliqueDataSource"
              );
          else if (r.selectedSelectionType === Q.AREA_SELECTION) {
            const A = t.dataSource.results.flatMap(
              (G) => r.selectedResultItems.some(
                (te) => te.title === G.title
              ) ? [G] : []
            );
            a.queue[1] = A.length;
            for (let G = 0; G < A.length; G++)
              a.queue[0] = G + 1, await A[G].download().catch((K) => {
                e.notifier.add({
                  type: we.ERROR,
                  message: String(K),
                  timeout: 5e3
                });
              });
            R = Promise.resolve();
          } else
            throw new Error(
              `Selected SelectionType is not supported for ${r.selectedDataSourceOptions.type} export.`
            );
        else
          R = Promise.reject(new Error("No valid dataSource set."));
        R.then(() => {
          var A;
          ((A = r.selectedDataSourceOptions) == null ? void 0 : A.type) === _.CITY_MODEL && e.notifier.add({
            type: we.SUCCESS,
            message: "export.notification.success",
            timeout: 5e3
          });
        }).finally(() => {
          s.value = !1, a.running = !1, a.queue = [1, 1];
        }).catch(() => {
          e.notifier.add({
            type: we.ERROR,
            message: "export.notification.error.standard",
            timeout: 5e3
          });
        });
      } else
        e.notifier.add({
          type: we.ERROR,
          message: "export.notification.error.validation",
          timeout: 5e3
        });
    }
    Hr(() => {
      d == null || d(), C.forEach((E) => {
        E();
      });
    });
    const Z = ne(!1), O = {
      settingsCityModel: {
        name: "resetSettingsCityModel",
        title: "export.resetButtons.settingsCityModel",
        icon: "$vcsReturn",
        callback() {
          const E = JSON.parse(
            JSON.stringify(t.defaultState.settingsCityModel)
          );
          Object.assign(r.settingsCityModel, E);
        }
      },
      objectSelection: {
        name: "resetObjectSelection",
        title: "export.resetButtons.objectSelection",
        icon: "$vcsReturn",
        callback() {
          Z.value = !0, r.selectedObjects = [];
        }
      },
      exportDestination: {
        name: "resetExportDestination",
        title: "export.resetButtons.userData",
        icon: "$vcsReturn",
        callback() {
          var E;
          (E = l.value) == null || E.reset();
        }
      }
    }, F = ue(() => {
      var E, w, b, T;
      return ((E = r.selectedDataSourceOptions) == null ? void 0 : E.type) === _.CITY_MODEL && !o.allowEmail && o.allowExportName ? "exportName" : ((w = r.selectedDataSourceOptions) == null ? void 0 : w.type) === _.CITY_MODEL && o.allowEmail ? "exportDestination" : ((b = r.selectedDataSourceOptions) == null ? void 0 : b.type) === _.OBLIQUE ? "selectImages" : ((T = r.selectedDataSourceOptions) == null ? void 0 : T.type) === _.GEOJSON ? "selectFiles" : "";
    }), P = ue(
      () => F.value ? `export.stepTitles.${F.value}` : ""
    ), q = ue(() => F.value === "exportDestination" ? "export.help.email" : F.value === "selectFiles" || F.value === "selectImages" ? "export.help.select" : "");
    return {
      StepOrder: i,
      increaseStep: f,
      requestEnabled: U,
      handleSession: Y,
      areaSelectionLayerName: je,
      pluginConfig: o,
      pluginState: r,
      dataSourceItems: y,
      selectionTypeItems: $,
      SelectionTypes: Q,
      DataSourceOptions: _,
      isValidEmail: M,
      sendRequest: k,
      stepValid: u,
      formSelectionMode: n,
      formSettings: c,
      formExportDestination: l,
      running: s,
      obliqueDownload: a,
      updateDataSource: z,
      resetActions: O,
      isReset: Z,
      heading: P,
      help: q,
      geoJsonItem: y.value.find(
        (E) => E.type === _.GEOJSON
      )
    };
  }
}), ka = { key: 0 }, _a = { key: 1 }, za = { key: 2 }, Ha = { class: "px-1" }, Ja = ["href"], Wa = { key: 0 }, Xa = { key: 1 }, Ya = { class: "px-1" }, Ka = { class: "px-1" }, Za = { key: 0 }, Qa = ["href"], eu = { class: "d-flex flex-grow-1 flex-row-reverse pa-2" };
function tu(e, t, r, o, s, a) {
  const i = N("VcsSelect"), u = N("VcsWizardStep"), n = N("SelectionObjects"), c = N("SelectionArea"), l = N("VcsCheckbox"), f = N("v-form"), g = N("SettingsCityModel"), p = N("SettingsOblique"), y = N("VcsTextField"), S = N("VcsTextArea"), $ = N("ResultList"), d = N("VcsFormButton"), C = N("VcsWizard"), M = N("v-progress-linear"), U = N("v-chip"), Y = N("v-overlay"), H = N("v-sheet");
  return D(), B(H, { class: "pb-2" }, {
    default: h(() => [
      m(C, {
        modelValue: e.pluginState.step,
        "onUpdate:modelValue": t[26] || (t[26] = (z) => e.pluginState.step = z),
        modelModifiers: { number: !0 }
      }, {
        default: h(() => {
          var z, k, Z;
          return [
            m(u, {
              modelValue: e.pluginState.step,
              "onUpdate:modelValue": t[0] || (t[0] = (O) => e.pluginState.step = O),
              modelModifiers: { number: !0 },
              step: e.StepOrder.DATASOURCE,
              editable: "",
              complete: !!e.pluginState.selectedDataSourceOptions,
              heading: "export.stepTitles.dataSources"
            }, {
              help: h(() => {
                var O, F;
                return [
                  ae("ul", null, [
                    e.dataSourceItems.some(
                      (P) => P.type === e.DataSourceOptions.CITY_MODEL
                    ) ? (D(), re(
                      "li",
                      ka,
                      V(e.$t("export.dataSources.cityModel")) + ": " + V(e.$t("export.help.dataSources.cityModel")),
                      1
                      /* TEXT */
                    )) : X("v-if", !0),
                    e.dataSourceItems.some(
                      (P) => P.type === e.DataSourceOptions.OBLIQUE
                    ) ? (D(), re(
                      "li",
                      _a,
                      V(e.$t("export.dataSources.oblique")) + ": " + V(e.$t("export.help.dataSources.oblique")),
                      1
                      /* TEXT */
                    )) : X("v-if", !0),
                    e.dataSourceItems.some(
                      (P) => P.type === e.DataSourceOptions.GEOJSON
                    ) ? (D(), re(
                      "li",
                      za,
                      V(e.$st((O = e.geoJsonItem) == null ? void 0 : O.title)) + ": " + V(e.$st((F = e.geoJsonItem) == null ? void 0 : F.help)),
                      1
                      /* TEXT */
                    )) : X("v-if", !0)
                  ])
                ];
              }),
              default: h(() => [
                m(i, {
                  class: "px-1 pb-3",
                  items: e.dataSourceItems,
                  "model-value": e.pluginState.selectedDataSourceOptions,
                  "item-value": (O) => O.obliqueCollectionName ?? O.geojsonUrl ?? O.type,
                  "return-object": "",
                  placeholder: e.$t("export.select"),
                  "onUpdate:modelValue": e.updateDataSource
                }, null, 8, ["items", "model-value", "item-value", "placeholder", "onUpdate:modelValue"])
              ]),
              _: 1
              /* STABLE */
            }, 8, ["modelValue", "step", "complete"]),
            pt(m(u, {
              modelValue: e.pluginState.step,
              "onUpdate:modelValue": t[8] || (t[8] = (O) => e.pluginState.step = O),
              modelModifiers: { number: !0 },
              step: e.StepOrder.SELECTION_MODE,
              editable: "",
              complete: !!e.pluginState.selectedSelectionType,
              rules: [() => e.stepValid.selectionMode !== !1],
              heading: "export.stepTitles.selectionType",
              "header-actions": e.pluginState.selectedSelectionType === e.SelectionTypes.OBJECT_SELECTION ? [e.resetActions.objectSelection] : []
            }, {
              help: h(() => [
                ae("ul", null, [
                  (D(!0), re(
                    ye,
                    null,
                    be(e.selectionTypeItems, (O) => (D(), re(
                      "li",
                      {
                        key: O.value
                      },
                      V(e.$st("export.selectionTypes." + O.value)) + ": " + V(e.$st("export.help.selectionTypes." + O.value)),
                      1
                      /* TEXT */
                    ))),
                    128
                    /* KEYED_FRAGMENT */
                  ))
                ])
              ]),
              default: h(() => [
                ae("div", Ha, [
                  m(f, {
                    ref: "formSelectionMode",
                    modelValue: e.stepValid.selectionMode,
                    "onUpdate:modelValue": t[7] || (t[7] = (O) => e.stepValid.selectionMode = O),
                    "lazy-validation": ""
                  }, {
                    default: h(() => [
                      m(i, {
                        modelValue: e.pluginState.selectedSelectionType,
                        "onUpdate:modelValue": t[1] || (t[1] = (O) => e.pluginState.selectedSelectionType = O),
                        items: e.selectionTypeItems,
                        placeholder: e.$t("export.select"),
                        rules: [
                          (O) => !!O || e.$t("export.validation.selectField")
                        ],
                        class: "pb-2"
                      }, null, 8, ["modelValue", "items", "placeholder", "rules"]),
                      e.pluginState.selectedSelectionType === e.SelectionTypes.OBJECT_SELECTION ? (D(), B(n, {
                        key: 0,
                        modelValue: e.pluginState.selectedObjects,
                        "onUpdate:modelValue": t[2] || (t[2] = (O) => e.pluginState.selectedObjects = O),
                        "is-reset": e.isReset,
                        "button-disabled": e.pluginState.selectedObjects.length === 0,
                        "button-show": e.pluginState.highestStep <= e.StepOrder.SELECTION_MODE,
                        onContinue: t[3] || (t[3] = (O) => e.increaseStep(e.StepOrder.SELECTION_MODE))
                      }, null, 8, ["modelValue", "is-reset", "button-disabled", "button-show"])) : e.pluginState.selectedSelectionType === e.SelectionTypes.AREA_SELECTION ? (D(), B(c, {
                        key: 1,
                        onSessionstart: t[4] || (t[4] = (O) => e.handleSession(O, e.StepOrder.SELECTION_MODE))
                      })) : e.pluginState.selectedSelectionType === e.SelectionTypes.CURRENT_IMAGE && e.pluginConfig.termsOfUse ? (D(), B(l, {
                        key: 2,
                        modelValue: e.pluginState.termsConsented,
                        "onUpdate:modelValue": t[6] || (t[6] = (O) => e.pluginState.termsConsented = O),
                        rules: [
                          (O) => !!O || e.$t("export.validation.termsOfUse")
                        ]
                      }, {
                        label: h(() => [
                          x(
                            V(e.$t("export.userData.accept")) + "  ",
                            1
                            /* TEXT */
                          ),
                          ae("a", {
                            target: "_blank",
                            href: e.pluginConfig.termsOfUse.toString(),
                            onClick: t[5] || (t[5] = or(() => {
                            }, ["stop"]))
                          }, V(e.$t("export.userData.termsOfUse")), 9, Ja)
                        ]),
                        _: 1
                        /* STABLE */
                      }, 8, ["modelValue", "rules"])) : X("v-if", !0)
                    ]),
                    _: 1
                    /* STABLE */
                  }, 8, ["modelValue"])
                ])
              ]),
              _: 1
              /* STABLE */
            }, 8, ["modelValue", "step", "complete", "rules", "header-actions"]), [
              [mt, e.pluginState.highestStep >= e.StepOrder.SELECTION_MODE]
            ]),
            pt(m(u, {
              modelValue: e.pluginState.step,
              "onUpdate:modelValue": t[14] || (t[14] = (O) => e.pluginState.step = O),
              step: e.StepOrder.SETTINGS,
              editable: "",
              complete: e.pluginState.highestStep >= e.StepOrder.SETTINGS,
              rules: [() => !!e.stepValid.settings],
              heading: "export.stepTitles.settings",
              "header-actions": ((z = e.pluginState.selectedDataSourceOptions) == null ? void 0 : z.type) === e.DataSourceOptions.CITY_MODEL ? [e.resetActions.settingsCityModel] : []
            }, {
              help: h(() => {
                var O, F;
                return [
                  ((O = e.pluginState.selectedDataSourceOptions) == null ? void 0 : O.type) === e.DataSourceOptions.OBLIQUE ? (D(), re(
                    "span",
                    Wa,
                    V(e.$t("export.help.settings.oblique")),
                    1
                    /* TEXT */
                  )) : ((F = e.pluginState.selectedDataSourceOptions) == null ? void 0 : F.type) === e.DataSourceOptions.CITY_MODEL ? (D(), re(
                    "span",
                    Xa,
                    V(e.$t("export.help.settings.cityModel")),
                    1
                    /* TEXT */
                  )) : X("v-if", !0)
                ];
              }),
              default: h(() => [
                ae("div", Ya, [
                  m(f, {
                    ref: "formSettings",
                    modelValue: e.stepValid.settings,
                    "onUpdate:modelValue": t[13] || (t[13] = (O) => e.stepValid.settings = O),
                    "lazy-validation": ""
                  }, {
                    default: h(() => {
                      var O, F;
                      return [
                        ((O = e.pluginState.selectedDataSourceOptions) == null ? void 0 : O.type) === e.DataSourceOptions.CITY_MODEL ? (D(), B(g, {
                          key: 0,
                          modelValue: e.pluginState.settingsCityModel,
                          "onUpdate:modelValue": t[9] || (t[9] = (P) => e.pluginState.settingsCityModel = P),
                          setup: e.pluginConfig.settingsCityModel,
                          "button-disabled": !e.stepValid.settings,
                          "button-show": e.pluginState.highestStep <= e.StepOrder.SETTINGS,
                          onContinue: t[10] || (t[10] = (P) => e.increaseStep(e.StepOrder.SETTINGS))
                        }, null, 8, ["modelValue", "setup", "button-disabled", "button-show"])) : ((F = e.pluginState.selectedDataSourceOptions) == null ? void 0 : F.type) === e.DataSourceOptions.OBLIQUE && e.pluginState.selectedSelectionType === e.SelectionTypes.AREA_SELECTION ? (D(), B(p, {
                          key: 1,
                          modelValue: e.pluginState.settingsOblique,
                          "onUpdate:modelValue": [
                            t[11] || (t[11] = (P) => e.pluginState.settingsOblique = P),
                            t[12] || (t[12] = (P) => e.increaseStep(e.StepOrder.SETTINGS))
                          ]
                        }, null, 8, ["modelValue"])) : X("v-if", !0)
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
                mt,
                e.pluginState.highestStep >= e.StepOrder.SETTINGS && ((k = e.pluginState.selectedDataSourceOptions) == null ? void 0 : k.type) !== e.DataSourceOptions.GEOJSON
              ]
            ]),
            pt(m(u, {
              modelValue: e.pluginState.step,
              "onUpdate:modelValue": t[23] || (t[23] = (O) => e.pluginState.step = O),
              step: e.StepOrder.EXPORT_DESTINATION,
              editable: "",
              complete: e.pluginState.highestStep >= e.StepOrder.EXPORT_DESTINATION,
              rules: [() => e.stepValid.exportDestination !== !1],
              "header-actions": ((Z = e.pluginState.selectedDataSourceOptions) == null ? void 0 : Z.type) === e.DataSourceOptions.CITY_MODEL ? [e.resetActions.exportDestination] : [],
              heading: e.$st(e.heading)
            }, ds({
              default: h(() => [
                ae("div", Ka, [
                  m(f, {
                    ref: "formExportDestination",
                    modelValue: e.stepValid.exportDestination,
                    "onUpdate:modelValue": t[22] || (t[22] = (O) => e.stepValid.exportDestination = O),
                    "lazy-validation": ""
                  }, {
                    default: h(() => {
                      var O, F, P;
                      return [
                        ((O = e.pluginState.selectedDataSourceOptions) == null ? void 0 : O.type) === e.DataSourceOptions.CITY_MODEL ? (D(), re("div", Za, [
                          e.pluginConfig.allowEmail ? (D(), B(y, {
                            key: 0,
                            modelValue: e.pluginState.email,
                            "onUpdate:modelValue": t[15] || (t[15] = (q) => e.pluginState.email = q),
                            label: void 0,
                            placeholder: e.$t("export.userData.email"),
                            rules: [
                              (q) => e.isValidEmail(q) || e.$t("export.validation.provideEmail")
                            ]
                          }, null, 8, ["modelValue", "placeholder", "rules"])) : X("v-if", !0),
                          e.pluginConfig.allowExportName ? (D(), B(y, {
                            key: 1,
                            modelValue: e.pluginState.exportName,
                            "onUpdate:modelValue": t[16] || (t[16] = (q) => e.pluginState.exportName = q),
                            label: void 0,
                            placeholder: e.$t("export.userData.exportName"),
                            rules: [
                              (q) => e.pluginConfig.allowEmail || q.length > 0 || e.$t("components.validation.required")
                            ]
                          }, null, 8, ["modelValue", "placeholder", "rules"])) : X("v-if", !0),
                          e.pluginConfig.allowDescription ? (D(), B(S, {
                            key: 2,
                            modelValue: e.pluginState.description,
                            "onUpdate:modelValue": t[17] || (t[17] = (q) => e.pluginState.description = q),
                            placeholder: e.$t("export.userData.description"),
                            class: "pb-2",
                            rows: "2"
                          }, null, 8, ["modelValue", "placeholder"])) : X("v-if", !0)
                        ])) : ((F = e.pluginState.selectedDataSourceOptions) == null ? void 0 : F.type) === e.DataSourceOptions.OBLIQUE || ((P = e.pluginState.selectedDataSourceOptions) == null ? void 0 : P.type) === e.DataSourceOptions.GEOJSON ? (D(), B($, {
                          key: 1,
                          modelValue: e.pluginState.selectedResultItems,
                          "onUpdate:modelValue": t[18] || (t[18] = (q) => e.pluginState.selectedResultItems = q),
                          "selection-layer-name": e.areaSelectionLayerName,
                          "selected-data-source-options": e.pluginState.selectedDataSourceOptions,
                          active: e.pluginState.step === e.StepOrder.EXPORT_DESTINATION,
                          "max-selection-area": e.pluginConfig.maxSelectionArea,
                          onInvalidArea: t[19] || (t[19] = (q) => e.pluginState.step = e.StepOrder.SELECTION_MODE)
                        }, null, 8, ["modelValue", "selection-layer-name", "selected-data-source-options", "active", "max-selection-area"])) : X("v-if", !0),
                        e.pluginConfig.termsOfUse ? (D(), B(l, {
                          key: 2,
                          modelValue: e.pluginState.termsConsented,
                          "onUpdate:modelValue": t[21] || (t[21] = (q) => e.pluginState.termsConsented = q),
                          rules: [
                            (q) => !!q || e.$t("export.validation.termsOfUse")
                          ]
                        }, {
                          label: h(() => [
                            x(
                              V(e.$t("export.userData.accept")) + "  ",
                              1
                              /* TEXT */
                            ),
                            ae("a", {
                              target: "_blank",
                              href: e.pluginConfig.termsOfUse.toString(),
                              onClick: t[20] || (t[20] = or(() => {
                              }, ["stop"]))
                            }, V(e.$t("export.userData.termsOfUse")), 9, Qa)
                          ]),
                          _: 1
                          /* STABLE */
                        }, 8, ["modelValue", "rules"])) : X("v-if", !0)
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
                fn: h(() => [
                  x(
                    V(e.$t(e.help)),
                    1
                    /* TEXT */
                  )
                ]),
                key: "0"
              } : void 0
            ]), 1032, ["modelValue", "step", "complete", "rules", "header-actions", "heading"]), [
              [mt, e.pluginState.highestStep >= e.StepOrder.EXPORT_DESTINATION]
            ]),
            m(u, {
              modelValue: e.pluginState.step,
              "onUpdate:modelValue": t[25] || (t[25] = (O) => e.pluginState.step = O),
              step: e.StepOrder.SEND_REQUEST,
              complete: e.pluginState.step > e.StepOrder.SEND_REQUEST,
              editable: e.requestEnabled && !e.running
            }, {
              title: h(() => [
                ae("div", eu, [
                  m(d, {
                    variant: "filled",
                    disabled: !e.requestEnabled || e.running,
                    loading: e.running,
                    onClick: t[24] || (t[24] = (O) => e.sendRequest())
                  }, {
                    default: h(() => [
                      x(
                        V(e.$t("export.sendRequest")),
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
      m(Y, {
        modelValue: e.obliqueDownload.running,
        "onUpdate:modelValue": t[28] || (t[28] = (z) => e.obliqueDownload.running = z),
        contained: "",
        opacity: "0.8",
        class: "d-flex justify-center align-center"
      }, {
        default: h(() => [
          m(M, {
            modelValue: e.obliqueDownload.progress,
            "onUpdate:modelValue": t[27] || (t[27] = (z) => e.obliqueDownload.progress = z),
            height: "20",
            style: { width: "200px" },
            color: "base-lighten-2"
          }, {
            default: h(() => [
              ae(
                "strong",
                null,
                V(e.obliqueDownload.progress) + " %",
                1
                /* TEXT */
              )
            ]),
            _: 1
            /* STABLE */
          }, 8, ["modelValue"]),
          m(U, { color: "base-lighten-2" }, {
            default: h(() => [
              x(
                V(e.obliqueDownload.queue[0]) + " / " + V(e.obliqueDownload.queue[1]),
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
const ru = /* @__PURE__ */ Oe(Ba, [["render", tu]]), Ke = () => {
  const e = xt();
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
    heightModeDefault: kt.ABSOLUTE,
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
}, Ie = {
  cityModel: { type: _.CITY_MODEL },
  oblique: {
    type: _.OBLIQUE,
    obliqueCollectionName: void 0,
    // XXX get first oblique collections name from VcsApp?
    fileExtension: "jpg",
    dedicatedSource: !1,
    resolution: void 0,
    baseUrl: void 0
  },
  geojson: {
    type: _.GEOJSON,
    geojsonUrl: void 0,
    baseUrl: void 0,
    title: ""
  }
}, ou = $e({
  name: "ExportConfigEditor",
  components: {
    VContainer: st,
    VRow: nt,
    VCol: lt,
    AbstractConfigEditor: Ao,
    VcsFormSection: Do,
    VcsLabel: jt,
    VcsSelect: tt,
    VcsTextField: Ur,
    VcsCheckbox: Ut,
    VcsChipArrayInput: Vo,
    VcsProjection: Mo
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
    var g;
    const t = ne({
      cityModel: {
        isSelected: !1,
        properties: { ...Ie.cityModel }
      },
      oblique: {
        isSelected: !1,
        properties: { ...Ie.oblique }
      },
      geojson: {
        isSelected: !1,
        properties: { ...Ie.geojson }
      }
    }), r = ne(void 0), o = Ke(), s = ne({
      ...structuredClone(o),
      ...e.getConfig()
    });
    s.value.dataSourceOptionsList.forEach((p) => {
      t.value[p.type].isSelected || (t.value[p.type].isSelected = !0, t.value[p.type].properties = {
        ...Ie[p.type],
        ...p
      });
    });
    const a = [
      {
        value: "absolute",
        title: "export.settingsCityModel.absolute"
      },
      {
        value: "ellipsoid",
        title: "export.settingsCityModel.ellipsoid"
      }
    ];
    function i(p) {
      t.value[p].properties = {
        ...Ie[p]
      };
    }
    const u = ne(), n = ne(
      e.getConfig().dataProjection && ((g = e.getConfig().dataProjection) == null ? void 0 : g.epsg) !== xt().epsg
    );
    function c(p, y) {
      return ue({
        get() {
          return s.value[p] !== null;
        },
        set(S) {
          S ? (s.value[p] = o[p] || "", y && y()) : (s.value[p] = null, y && y());
        }
      });
    }
    function l(p, y, S) {
      S.includes(s.value[p]) || (s.value[p] = y ? [S[0]] : S[0]);
    }
    const f = () => {
      s.value.crs.length === 1 && (s.value.crs = s.value.crs[0]), n.value || delete s.value.dataProjection, s.value.dataSourceOptionsList = Object.keys(t.value).filter((p) => {
        var y;
        return (y = t.value[p]) == null ? void 0 : y.isSelected;
      }).map((p) => {
        const y = sr(t.value[p].properties), S = { type: p };
        return Object.keys(y).forEach(($) => {
          y[$] && y[$] !== Ie[p][$] && (S[$] = y[$]);
        }), S;
      }), e.setConfig(structuredClone(sr(s.value)));
    };
    return Ne(
      t,
      (p) => {
        Object.values(p).some((y) => y.isSelected) ? r.value = void 0 : r.value = "export.editor.dataSourceRequired";
      },
      { deep: !0 }
    ), {
      generalTermsOfUseUrl: u,
      localConfig: s,
      dataSourceList: t,
      resetDataSourceOption: i,
      DataSourceOptions: _,
      defaultOptions: o,
      hasTermsOfUse: c("termsOfUse", () => {
        var p, y, S;
        (S = (y = (p = u.value) == null ? void 0 : p.$refs) == null ? void 0 : y.textFieldRef) == null || S.validate();
      }),
      hasTerrainUrl: c("terrainUrl"),
      mapThematicClasses: Qr,
      heightModeItems: a,
      hasDataProjection: n,
      updateDefault: l,
      predefinedCrs: ue({
        get() {
          return Array.isArray(s.value.crs) ? s.value.crs : [s.value.crs];
        },
        set(p) {
          p.length > 1 ? s.value.crs = p : p.length === 1 && (s.value.crs = p[0]);
        }
      }),
      apply: f,
      errorMessageDataSource: r
    };
  }
});
function su(e, t, r, o, s, a) {
  const i = N("VcsCheckbox"), u = N("v-col"), n = N("VcsTextField"), c = N("v-row"), l = N("VcsLabel"), f = N("v-container"), g = N("VcsFormSection"), p = N("VcsSelect"), y = N("VcsChipArrayInput"), S = N("VcsProjection"), $ = N("AbstractConfigEditor");
  return e.localConfig ? (D(), B($, fs({ key: 0 }, { ...e.$attrs, ...e.$props }, { onSubmit: e.apply }), {
    default: h(() => [
      m(g, {
        heading: "export.editor.general",
        expandable: "",
        "start-open": !0
      }, {
        default: h(() => [
          m(f, { class: "py-0 px-1" }, {
            default: h(() => [
              m(c, { "no-gutters": "" }, {
                default: h(() => [
                  m(u, { cols: "6" }, {
                    default: h(() => [
                      m(i, {
                        id: "general-has-terms-of-use",
                        modelValue: e.hasTermsOfUse,
                        "onUpdate:modelValue": t[0] || (t[0] = (d) => e.hasTermsOfUse = d),
                        label: "export.editor.termsOfUse"
                      }, null, 8, ["modelValue"])
                    ]),
                    _: 1
                    /* STABLE */
                  }),
                  m(u, null, {
                    default: h(() => [
                      m(n, {
                        id: "general-terms-of-use-url",
                        ref: "generalTermsOfUseUrl",
                        modelValue: e.localConfig.termsOfUse,
                        "onUpdate:modelValue": t[1] || (t[1] = (d) => e.localConfig.termsOfUse = d),
                        clearable: "",
                        placeholder: "https://linktoprivacy",
                        disabled: !e.hasTermsOfUse,
                        rules: [
                          (d) => !e.hasTermsOfUse || !!d || "components.validation.required"
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
              m(c, { "no-gutters": "" }, {
                default: h(() => [
                  m(u, null, {
                    default: h(() => [
                      m(i, {
                        id: "general-allow-email",
                        modelValue: e.localConfig.allowEmail,
                        "onUpdate:modelValue": t[2] || (t[2] = (d) => e.localConfig.allowEmail = d),
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
              m(c, { "no-gutters": "" }, {
                default: h(() => [
                  m(u, null, {
                    default: h(() => [
                      m(i, {
                        id: "general-allow-description",
                        modelValue: e.localConfig.allowDescription,
                        "onUpdate:modelValue": t[3] || (t[3] = (d) => e.localConfig.allowDescription = d),
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
              m(c, { "no-gutters": "" }, {
                default: h(() => [
                  m(u, null, {
                    default: h(() => [
                      m(l, {
                        "html-for": "general-max-selection-area",
                        required: ""
                      }, {
                        default: h(() => [
                          x(
                            V(e.$t("export.editor.maxSelectionArea")),
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
                  m(u, { cols: "3" }, {
                    default: h(() => [
                      m(n, {
                        id: "general-max-selection-area",
                        modelValue: e.localConfig.maxSelectionArea,
                        "onUpdate:modelValue": t[4] || (t[4] = (d) => e.localConfig.maxSelectionArea = d),
                        modelModifiers: { number: !0 },
                        clearable: "",
                        type: "number",
                        unit: "m²",
                        min: 0,
                        rules: [
                          (d) => !!d || "components.validation.required",
                          (d) => d > 0 || "export.validation.negative"
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
      m(g, {
        heading: "export.editor.dataSources",
        expandable: "",
        "start-open": !0
      }, {
        default: h(() => [
          m(f, { class: "py-0 px-1" }, {
            default: h(() => [
              m(c, { "no-gutters": "" }, {
                default: h(() => [
                  m(u, { cols: "6" }, {
                    default: h(() => [
                      m(i, {
                        id: "data-source-city-model",
                        modelValue: e.dataSourceList.cityModel.isSelected,
                        "onUpdate:modelValue": t[5] || (t[5] = (d) => e.dataSourceList.cityModel.isSelected = d),
                        label: "export.dataSources.cityModel",
                        "error-messages": e.errorMessageDataSource,
                        onChange: t[6] || (t[6] = (d) => d || e.resetDataSourceOption(e.DataSourceOptions.CITY_MODEL))
                      }, null, 8, ["modelValue", "error-messages"])
                    ]),
                    _: 1
                    /* STABLE */
                  })
                ]),
                _: 1
                /* STABLE */
              }),
              m(c, { "no-gutters": "" }, {
                default: h(() => [
                  m(u, null, {
                    default: h(() => [
                      m(i, {
                        id: "data-source-oblique",
                        modelValue: e.dataSourceList.oblique.isSelected,
                        "onUpdate:modelValue": t[7] || (t[7] = (d) => e.dataSourceList.oblique.isSelected = d),
                        label: "export.dataSources.oblique",
                        "error-messages": e.errorMessageDataSource,
                        onChange: t[8] || (t[8] = (d) => d || e.resetDataSourceOption(e.DataSourceOptions.OBLIQUE))
                      }, null, 8, ["modelValue", "error-messages"])
                    ]),
                    _: 1
                    /* STABLE */
                  }),
                  e.dataSourceList.oblique.isSelected ? (D(), B(u, { key: 0 }, {
                    default: h(() => [
                      m(c, { "no-gutters": "" }, {
                        default: h(() => [
                          m(u, null, {
                            default: h(() => [
                              m(l, {
                                "html-for": "data-source-oblique-name",
                                required: e.dataSourceList.oblique.isSelected,
                                disabled: !e.dataSourceList.oblique.isSelected
                              }, {
                                default: h(() => [
                                  x(
                                    V(e.$t("export.editor.obliqueName")),
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
                          m(u, null, {
                            default: h(() => [
                              m(n, {
                                id: "data-source-oblique-name",
                                modelValue: e.dataSourceList.oblique.properties.obliqueCollectionName,
                                "onUpdate:modelValue": t[9] || (t[9] = (d) => e.dataSourceList.oblique.properties.obliqueCollectionName = d),
                                disabled: !e.dataSourceList.oblique.isSelected,
                                rules: e.dataSourceList.oblique.isSelected ? [(d) => !!d || "components.validation.required"] : [],
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
                      m(c, { "no-gutters": "" }, {
                        default: h(() => [
                          m(u, null, {
                            default: h(() => [
                              m(l, {
                                "html-for": "data-source-oblique-file-extension",
                                disabled: !e.dataSourceList.oblique.isSelected
                              }, {
                                default: h(() => [
                                  x(
                                    V(e.$t("export.editor.fileExtension")),
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
                          m(u, null, {
                            default: h(() => [
                              m(n, {
                                id: "data-source-oblique-file-extension",
                                modelValue: e.dataSourceList.oblique.properties.fileExtension,
                                "onUpdate:modelValue": t[10] || (t[10] = (d) => e.dataSourceList.oblique.properties.fileExtension = d),
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
                      m(c, { "no-gutters": "" }, {
                        default: h(() => [
                          m(u, null, {
                            default: h(() => [
                              m(l, {
                                "html-for": "data-source-oblique-resolution",
                                disabled: !e.dataSourceList.oblique.isSelected
                              }, {
                                default: h(() => [
                                  x(
                                    V(e.$t("export.editor.resolution")),
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
                          m(u, null, {
                            default: h(() => [
                              m(n, {
                                id: "data-source-oblique-resolution",
                                modelValue: e.dataSourceList.oblique.properties.resolution,
                                "onUpdate:modelValue": t[11] || (t[11] = (d) => e.dataSourceList.oblique.properties.resolution = d),
                                modelModifiers: { number: !0 },
                                type: "number",
                                min: 0,
                                disabled: !e.dataSourceList.oblique.isSelected,
                                placeholder: "1",
                                rules: [
                                  (d) => d == null || d.toString() === "" || d > 0 || "export.validation.negative"
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
                      m(c, { "no-gutters": "" }, {
                        default: h(() => [
                          m(u, null, {
                            default: h(() => [
                              m(i, {
                                id: "data-source-oblique-dedicated",
                                modelValue: e.dataSourceList.oblique.properties.dedicatedSource,
                                "onUpdate:modelValue": t[12] || (t[12] = (d) => e.dataSourceList.oblique.properties.dedicatedSource = d),
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
                      e.dataSourceList.oblique.properties.dedicatedSource ? (D(), B(c, {
                        key: 0,
                        "no-gutters": ""
                      }, {
                        default: h(() => [
                          m(u, null, {
                            default: h(() => [
                              m(l, {
                                "html-for": "data-source-oblique-base-url",
                                required: ""
                              }, {
                                default: h(() => [
                                  x(
                                    V(e.$t("export.editor.baseUrl")),
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
                          m(u, null, {
                            default: h(() => [
                              m(n, {
                                id: "data-source-oblique-base-url",
                                modelValue: e.dataSourceList.oblique.properties.baseUrl,
                                "onUpdate:modelValue": t[13] || (t[13] = (d) => e.dataSourceList.oblique.properties.baseUrl = d),
                                clearable: "",
                                rules: [
                                  (d) => !!d || "components.validation.required"
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
                      })) : X("v-if", !0)
                    ]),
                    _: 1
                    /* STABLE */
                  })) : X("v-if", !0)
                ]),
                _: 1
                /* STABLE */
              }),
              m(c, { "no-gutters": "" }, {
                default: h(() => [
                  m(u, { cols: "6" }, {
                    default: h(() => [
                      m(i, {
                        id: "data-source-geojson",
                        modelValue: e.dataSourceList.geojson.isSelected,
                        "onUpdate:modelValue": t[14] || (t[14] = (d) => e.dataSourceList.geojson.isSelected = d),
                        label: "export.dataSources.geojson",
                        "error-messages": e.errorMessageDataSource,
                        onChange: t[15] || (t[15] = (d) => d || e.resetDataSourceOption(e.DataSourceOptions.GEOJSON))
                      }, null, 8, ["modelValue", "error-messages"])
                    ]),
                    _: 1
                    /* STABLE */
                  }),
                  e.dataSourceList.geojson.isSelected ? (D(), B(u, { key: 0 }, {
                    default: h(() => [
                      m(c, { "no-gutters": "" }, {
                        default: h(() => [
                          m(u, null, {
                            default: h(() => [
                              m(l, {
                                "html-for": "data-source-geojson-title",
                                required: e.dataSourceList.geojson.isSelected
                              }, {
                                default: h(() => [
                                  x(
                                    V(e.$t("export.editor.title")),
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
                          m(u, null, {
                            default: h(() => [
                              m(n, {
                                id: "data-source-geojson-title",
                                modelValue: e.dataSourceList.geojson.properties.title,
                                "onUpdate:modelValue": t[16] || (t[16] = (d) => e.dataSourceList.geojson.properties.title = d),
                                disabled: !e.dataSourceList.geojson.isSelected,
                                rules: e.dataSourceList.geojson.isSelected ? [(d) => !!d || "components.validation.required"] : [],
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
                      m(c, { "no-gutters": "" }, {
                        default: h(() => [
                          m(u, null, {
                            default: h(() => [
                              m(l, {
                                "html-for": "data-source-geojson-url",
                                required: e.dataSourceList.geojson.isSelected
                              }, {
                                default: h(() => [
                                  x(
                                    V(e.$t("export.editor.geojsonUrl")),
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
                          m(u, null, {
                            default: h(() => [
                              m(n, {
                                id: "data-source-geojson-url",
                                modelValue: e.dataSourceList.geojson.properties.geojsonUrl,
                                "onUpdate:modelValue": t[17] || (t[17] = (d) => e.dataSourceList.geojson.properties.geojsonUrl = d),
                                disabled: !e.dataSourceList.geojson.isSelected,
                                rules: e.dataSourceList.geojson.isSelected ? [(d) => !!d || "components.validation.required"] : [],
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
                      m(c, { "no-gutters": "" }, {
                        default: h(() => [
                          m(u, null, {
                            default: h(() => [
                              m(l, {
                                "html-for": "data-source-geojson-base-url",
                                required: e.dataSourceList.geojson.isSelected
                              }, {
                                default: h(() => [
                                  x(
                                    V(e.$t("export.editor.baseUrl")),
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
                          m(u, null, {
                            default: h(() => [
                              m(n, {
                                id: "data-source-geojson-base-url",
                                modelValue: e.dataSourceList.geojson.properties.baseUrl,
                                "onUpdate:modelValue": t[18] || (t[18] = (d) => e.dataSourceList.geojson.properties.baseUrl = d),
                                disabled: !e.dataSourceList.geojson.isSelected,
                                rules: e.dataSourceList.geojson.isSelected ? [(d) => !!d || "components.validation.required"] : [],
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
                  })) : X("v-if", !0)
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
      e.dataSourceList.cityModel.isSelected ? (D(), B(g, {
        key: 0,
        heading: "export.editor.cityModelSettings",
        expandable: "",
        "start-open": !0
      }, {
        default: h(() => [
          m(f, { class: "py-0 px-1" }, {
            default: h(() => [
              m(c, { "no-gutters": "" }, {
                default: h(() => [
                  m(u, null, {
                    default: h(() => [
                      m(l, { "html-for": "settings-fmeSecurityToken" }, {
                        default: h(() => [
                          x(
                            V(e.$st("export.editor.fmeSecurityToken")),
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
                  m(u, null, {
                    default: h(() => [
                      m(n, {
                        id: "settings-fmeSecurityToken",
                        modelValue: e.localConfig.fmeSecurityToken,
                        "onUpdate:modelValue": t[19] || (t[19] = (d) => e.localConfig.fmeSecurityToken = d),
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
              m(c, { "no-gutters": "" }, {
                default: h(() => [
                  m(u, null, {
                    default: h(() => [
                      m(l, {
                        "html-for": "settings-fmeServerUrl",
                        required: ""
                      }, {
                        default: h(() => [
                          x(
                            V(e.$st("export.editor.fmeServerUrl")),
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
                  m(u, null, {
                    default: h(() => [
                      m(n, {
                        id: "settings-fmeServerUrl",
                        modelValue: e.localConfig.fmeServerUrl,
                        "onUpdate:modelValue": t[20] || (t[20] = (d) => e.localConfig.fmeServerUrl = d),
                        rules: [(d) => !!d || "components.validation.required"],
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
              (D(), re(
                ye,
                null,
                be(["exportFormat", "lod", "thematicClass"], (d) => ae("div", { key: d }, [
                  m(
                    c,
                    { "no-gutters": "" },
                    {
                      default: h(() => [
                        m(
                          u,
                          { cols: "6" },
                          {
                            default: h(() => [
                              m(l, {
                                "html-for": `settings-${d}-list`,
                                required: ""
                              }, {
                                default: h(() => [
                                  x(
                                    V(e.$st(`export.editor.${d}List`)),
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
                        m(
                          u,
                          { cols: "2" },
                          {
                            default: h(() => [
                              m(p, {
                                id: `settings-${d}-list`,
                                modelValue: e.localConfig[`${d}List`],
                                "onUpdate:modelValue": [
                                  (C) => e.localConfig[`${d}List`] = C,
                                  (C) => e.updateDefault(
                                    `${d}Default`,
                                    d !== "lod",
                                    C
                                  )
                                ],
                                multiple: "",
                                items: d === "thematicClass" ? e.mapThematicClasses(e.defaultOptions.thematicClassList) : e.defaultOptions[`${d}List`],
                                rules: [
                                  (C) => !!C.length || "components.validation.required"
                                ]
                              }, null, 8, ["id", "modelValue", "onUpdate:modelValue", "items", "rules"])
                            ]),
                            _: 2
                            /* DYNAMIC */
                          },
                          1024
                          /* DYNAMIC_SLOTS */
                        ),
                        m(
                          u,
                          { cols: "2" },
                          {
                            default: h(() => [
                              m(l, {
                                "html-for": `settings-${d}-default`
                              }, {
                                default: h(() => [
                                  x(
                                    V(e.$t("export.editor.default")),
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
                        m(
                          u,
                          { cols: "2" },
                          {
                            default: h(() => [
                              m(p, {
                                id: `settings-${d}-default`,
                                modelValue: e.localConfig[`${d}Default`],
                                "onUpdate:modelValue": (C) => e.localConfig[`${d}Default`] = C,
                                multiple: d !== "lod",
                                items: d === "thematicClass" ? e.mapThematicClasses(e.localConfig.thematicClassList) : e.localConfig[`${d}List`]
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
              m(c, { "no-gutters": "" }, {
                default: h(() => [
                  m(u, { cols: "6" }, {
                    default: h(() => [
                      m(l, { "html-for": "settings-appearance-theme-list" }, {
                        default: h(() => [
                          x(
                            V(e.$t("export.settingsCityModel.appearanceTheme")),
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
                  m(u, null, {
                    default: h(() => [
                      m(y, {
                        id: "settings-appearance-theme-list",
                        modelValue: e.localConfig.appearanceThemeList,
                        "onUpdate:modelValue": [
                          t[21] || (t[21] = (d) => e.localConfig.appearanceThemeList = d),
                          t[22] || (t[22] = (d) => e.updateDefault("appearanceThemeDefault", !1, d))
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
              m(c, { "no-gutters": "" }, {
                default: h(() => [
                  m(u, null, {
                    default: h(() => [
                      m(l, {
                        "html-for": "settings-appearance-theme-default",
                        required: ""
                      }, {
                        default: h(() => [
                          x(
                            V(e.$t("export.editor.appearanceThemeDefault")),
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
                  m(u, null, {
                    default: h(() => [
                      m(p, {
                        id: "settings-appearance-theme-default",
                        modelValue: e.localConfig.appearanceThemeDefault,
                        "onUpdate:modelValue": t[23] || (t[23] = (d) => e.localConfig.appearanceThemeDefault = d),
                        items: e.localConfig.appearanceThemeList,
                        rules: [(d) => !!d || "components.validation.required"]
                      }, null, 8, ["modelValue", "items", "rules"])
                    ]),
                    _: 1
                    /* STABLE */
                  })
                ]),
                _: 1
                /* STABLE */
              }),
              m(c, { "no-gutters": "" }, {
                default: h(() => [
                  m(u, { cols: "6" }, {
                    default: h(() => [
                      m(l, {
                        "html-for": "settings-predefined-crs",
                        required: ""
                      }, {
                        default: h(() => [
                          x(
                            V(e.$t("export.editor.crsPredefined")),
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
                  m(u, { cols: "6" }, {
                    default: h(() => [
                      m(y, {
                        id: "settings-predefined-crs",
                        modelValue: e.predefinedCrs,
                        "onUpdate:modelValue": t[24] || (t[24] = (d) => e.predefinedCrs = d),
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
              m(c, { "no-gutters": "" }, {
                default: h(() => [
                  m(u, { cols: "6" }, {
                    default: h(() => [
                      m(i, {
                        id: "settings-allow-height-mode",
                        modelValue: e.localConfig.allowHeightMode,
                        "onUpdate:modelValue": t[25] || (t[25] = (d) => e.localConfig.allowHeightMode = d),
                        label: "export.editor.allowHeightMode",
                        "true-value": !0,
                        "false-value": !1
                      }, null, 8, ["modelValue"])
                    ]),
                    _: 1
                    /* STABLE */
                  }),
                  m(u, null, {
                    default: h(() => [
                      m(l, {
                        "html-for": "settings-height-mode-default",
                        required: ""
                      }, {
                        default: h(() => [
                          x(
                            V(e.$t("export.editor.default")),
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
                  m(u, null, {
                    default: h(() => [
                      m(p, {
                        id: "settings-height-mode-default",
                        modelValue: e.localConfig.heightModeDefault,
                        "onUpdate:modelValue": t[26] || (t[26] = (d) => e.localConfig.heightModeDefault = d),
                        items: e.heightModeItems,
                        rules: [(d) => !!d || "components.validation.required"]
                      }, null, 8, ["modelValue", "items", "rules"])
                    ]),
                    _: 1
                    /* STABLE */
                  })
                ]),
                _: 1
                /* STABLE */
              }),
              m(c, { "no-gutters": "" }, {
                default: h(() => [
                  m(u, { cols: "12" }, {
                    default: h(() => [
                      m(i, {
                        id: "settings-data-projection",
                        modelValue: e.hasDataProjection,
                        "onUpdate:modelValue": t[27] || (t[27] = (d) => e.hasDataProjection = d),
                        label: "export.editor.overrideMapProjection",
                        "true-value": !0,
                        "false-value": !1
                      }, null, 8, ["modelValue"])
                    ]),
                    _: 1
                    /* STABLE */
                  }),
                  e.hasDataProjection ? (D(), B(S, {
                    key: 0,
                    id: "settings-data-projection",
                    modelValue: e.localConfig.dataProjection,
                    "onUpdate:modelValue": t[28] || (t[28] = (d) => e.localConfig.dataProjection = d),
                    "hide-alias": "",
                    required: ""
                  }, null, 8, ["modelValue"])) : X("v-if", !0)
                ]),
                _: 1
                /* STABLE */
              }),
              (D(), re(
                ye,
                null,
                be([
                  "exportScene",
                  "allowTextureExport",
                  "allowAddGenericAttrs",
                  "allowTiledExport",
                  "allowTerrainExport"
                ], (d) => m(
                  c,
                  {
                    key: d,
                    "no-gutters": ""
                  },
                  {
                    default: h(() => [
                      m(
                        u,
                        null,
                        {
                          default: h(() => [
                            m(i, {
                              id: `settings-${d}`,
                              modelValue: e.localConfig[d],
                              "onUpdate:modelValue": (C) => e.localConfig[d] = C,
                              label: `export.editor.${d}`,
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
              e.localConfig.allowTerrainExport ? (D(), B(c, {
                key: 0,
                "no-gutters": ""
              }, {
                default: h(() => [
                  m(u, null, {
                    default: h(() => [
                      m(i, {
                        id: "settings-has-terrain-url",
                        modelValue: e.hasTerrainUrl,
                        "onUpdate:modelValue": t[29] || (t[29] = (d) => e.hasTerrainUrl = d),
                        label: "export.editor.terrainUrl"
                      }, null, 8, ["modelValue"])
                    ]),
                    _: 1
                    /* STABLE */
                  }),
                  m(u, null, {
                    default: h(() => [
                      m(n, {
                        id: "settings-terrain-url",
                        modelValue: e.localConfig.terrainUrl,
                        "onUpdate:modelValue": t[30] || (t[30] = (d) => e.localConfig.terrainUrl = d),
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
              })) : X("v-if", !0),
              e.localConfig.allowTerrainExport ? (D(), B(c, {
                key: 1,
                "no-gutters": ""
              }, {
                default: h(() => [
                  m(u, null, {
                    default: h(() => [
                      m(l, { "html-for": "settings-terrain-zoom-level" }, {
                        default: h(() => [
                          x(
                            V(e.$t("export.editor.terrainZoomLevel")),
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
                  m(u, { cols: "3" }, {
                    default: h(() => [
                      m(n, {
                        id: "settings-terrain-zoom-level",
                        modelValue: e.localConfig.terrainZoomLevel,
                        "onUpdate:modelValue": t[31] || (t[31] = (d) => e.localConfig.terrainZoomLevel = d),
                        modelModifiers: { number: !0 },
                        clearable: "",
                        min: -1,
                        type: "number",
                        rules: [
                          (d) => Number.isInteger(Number(d)) || "export.validation.integer",
                          (d) => d >= -1 || "export.validation.negativeOne"
                        ]
                      }, null, 8, ["modelValue", "rules"])
                    ]),
                    _: 1
                    /* STABLE */
                  })
                ]),
                _: 1
                /* STABLE */
              })) : X("v-if", !0)
            ]),
            _: 1
            /* STABLE */
          })
        ]),
        _: 1
        /* STABLE */
      })) : X("v-if", !0)
    ]),
    _: 1
    /* STABLE */
  }, 16, ["onSubmit"])) : X("v-if", !0);
}
const nu = /* @__PURE__ */ Oe(ou, [["render", su]]), lu = {
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
}, iu = {
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
}, Re = "export_window_id";
function Mr(e, t, r) {
  const o = xt();
  e.dataProjection || (t.settingsCityModel.dataProjection = o), e.crs || (t.settingsCityModel.crs = o.epsg, r.settingsCityModel.selectedCrs = o.epsg);
}
function hu(e) {
  let t = null;
  const { pluginConfig: r, pluginState: o } = Gs(
    e,
    Ke()
  ), s = Qe(o), a = JSON.parse(JSON.stringify(o)), i = [];
  let u;
  return {
    get name() {
      return he;
    },
    get version() {
      return Ts;
    },
    get mapVersion() {
      return Cs;
    },
    get config() {
      return r;
    },
    get state() {
      return s;
    },
    additionalParams: void 0,
    get defaultState() {
      return a;
    },
    get dataSource() {
      return t;
    },
    initialize(n) {
      u = n, i.push(
        n.moduleAdded.addEventListener(() => {
          Mr(e, r, s);
        }),
        n.moduleRemoved.addEventListener(() => {
          Mr(e, r, s);
        })
      );
    },
    onVcsAppMounted: (n) => {
      const { action: c, destroy: l } = jo(
        { name: "export.name", title: "export.tooltip", icon: "$vcsExport" },
        {
          id: Re,
          component: ru,
          slot: Uo.DYNAMIC_LEFT,
          state: {
            headerTitle: "export.headerTitle",
            headerIcon: "$vcsExport",
            infoUrlCallback: n.getHelpUrlCallback(
              "/tools/exportTool.html"
            ),
            styles: {
              width: "350px",
              height: "auto",
              overflow: "none !important"
            }
          }
        },
        n.windowManager,
        he
      );
      n.toolboxManager.add(
        { id: Re, type: Fo.SINGLE, action: c },
        he
      ), i.push(l), n.contextMenuManager.addEventHandler((f) => {
        var p;
        const g = [];
        if (f.feature) {
          const y = (p = n.layers.getByKey(
            f.feature[xr]
          )) == null ? void 0 : p.properties;
          y != null && y.exportWorkbench && (y == null ? void 0 : y.exportWorkbench) === r.settingsCityModel.fmeServerUrl && g.push({
            name: "export.context.cityModel",
            icon: "$vcsExport",
            async callback() {
              var d;
              const { action: S } = n.toolboxManager.get(
                Re
              );
              S.active || (await S.callback(), S.active = !0);
              const $ = n.plugins.getByKey(he);
              $.state.selectedDataSourceOptions = {
                type: _.CITY_MODEL,
                title: "export.dataSources.cityModel"
              }, $.state.step = 2, $.state.highestStep = 2, $.state.selectedSelectionType = Q.OBJECT_SELECTION, $.state.selectedObjects = [String((d = f.feature) == null ? void 0 : d.getId())];
            }
          });
        }
        return g;
      }, he);
    },
    updateDataSource(n, c, l) {
      t = qa(c, n), t instanceof et && (t.viewDirectionFilter = s.settingsOblique.directionFilter, t.downloadState = l);
    },
    resetState: () => {
      Object.assign(s, JSON.parse(JSON.stringify(a)));
    },
    i18n: { de: lu, en: iu },
    getDefaultOptions: Ke,
    toJSON() {
      const n = Ke(), c = {
        termsOfUse: r.termsOfUse,
        dataSourceOptionsList: r.dataSourceOptionsList,
        allowDescription: r.allowDescription,
        allowEmail: r.allowEmail,
        allowExportName: r.allowExportName,
        maxSelectionArea: r.maxSelectionArea,
        ...r.settingsCityModel,
        ...r.defaults
      };
      return Object.keys(c).reduce((f, g) => (Os(n[g], c[g]) || (f[g] = c[g]), f), {});
    },
    getConfigEditors() {
      return [
        {
          component: nu,
          title: "export.editorTitle",
          infoUrlCallback: u == null ? void 0 : u.getHelpUrlCallback(
            "/components/plugins/exportToolConfig.html",
            "app-configurator"
          )
        }
      ];
    },
    destroy() {
      i.forEach((n) => {
        n();
      });
    }
  };
}
export {
  hu as default,
  Re as windowId
};
