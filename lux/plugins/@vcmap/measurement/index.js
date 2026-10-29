
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
} await loadCss('data:text/css;base64,LmQtZ3JpZFtkYXRhLXYtY2Q4MDIxMDdde2Rpc3BsYXk6Z3JpZDtncmlkLXRlbXBsYXRlLWNvbHVtbnM6MWZyIDFmcn0K');var tt = Object.defineProperty;
var st = (e, s, t) => s in e ? tt(e, s, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[s] = t;
var A = (e, s, t) => st(e, typeof s != "symbol" ? s + "" : s, t);
import { GeometryType as O, originalFeatureSymbol as ae, PanoramaMap as K, getDefaultProjection as we, CesiumMap as z, OpenlayersMap as de, ObliqueMap as Q, getTextFromOptions as nt, getFlatCoordinateReferences as ie, alreadyTransformedToImage as at, transformFromImage as Ve, wgs84Projection as ve, Projection as H, mercatorProjection as ee, getDefaultHighlightStyle as oe, defaultVectorStyle as re, transformToImage as it, checkLineIntersection as ot, cartesian3DDistance as rt, SessionType as Re, FeatureVisibilityAction as De, writeGeoJSON as lt, startEditGeometrySession as ct, startCreateFeatureSession as ut, VectorLayer as dt, maxZIndexMin50 as mt, markVolatile as gt, VectorStyleItem as ht, makeOverrideCollection as ft, Collection as pt, writeGeoJSONFeature as yt, parseGeoJSON as vt, doNotTransform as Dt, vcsLayerName as Pt } from "../../../assets/core.js";
import { shallowRef as ye, reactive as be, defineComponent as He, inject as bt, computed as Me, ref as ne, watch as W, onUnmounted as Mt, nextTick as Ge, resolveComponent as $, openBlock as V, createBlock as R, withCtx as h, createTextVNode as C, toDisplayString as w, createCommentVNode as k, createElementBlock as Y, createVNode as m, toRaw as Ct, mergeProps as wt, Fragment as At, renderList as St } from "../../../assets/vue.js";
import { downloadText as kt, VcsWorkspaceWrapper as Ft, VcsActionButtonList as Tt, VcsLabel as xe, VcsFormSection as Ne, VcsDataTable as Et, NotificationType as Vt, getPluginAssetUrl as Ot, categoryManagerWindowId as Oe, WindowSlot as $e, makeEditorCollectionComponentClass as $t, createListExportAction as It, createListImportAction as Lt, importIntoLayer as Rt, createZoomToFeatureAction as Ht, ToolboxType as Gt, VcsTextField as xt, AbstractConfigEditor as Nt } from "../../../assets/ui.js";
import { ol$Feature as _t, ol$sphere$getDistance as Ae, ol$geom$LineString as ce, ol$style$Style as q, ol$geom$Point as J, ol$sphere$getArea as jt, ol$geom$Polygon as _e, ol$proj$transform as Ie, ol$Observable$unByKey as ue } from "../../../assets/ol.js";
import { Cartesian3 as D, Matrix3 as he, Cartesian2 as zt, PolygonPipeline as Bt, Math as Ut } from "../../../assets/cesium.js";
import { VCard as Wt, VImg as qt, VCol as je, VRow as ze, VContainer as Zt } from "../../../assets/vuetify.js";
const S = "@vcmap/measurement", Kt = "5.0.2", Yt = "^6.3", T = {
  ERROR: 2,
  WARN: 4,
  INFO: 8,
  DEBUG: 16
}, j = {
  ERROR: 0,
  WARN: 0,
  INFO: 0,
  DEBUG: 0
};
j.ERROR = T.ERROR | T.WARN | T.INFO | T.DEBUG;
j.WARN = T.WARN | T.INFO | T.DEBUG;
j.INFO = T.INFO | T.DEBUG;
j.DEBUG = T.DEBUG;
const le = {
  logLevel: T.INFO
}, me = /* @__PURE__ */ new Map();
me.set(T.ERROR, "error");
me.set(T.WARN, "warn");
me.set(T.INFO, "info");
me.set(T.DEBUG, "log");
class Jt {
  /**
   * @param {string=} className
   */
  constructor(s) {
    this.className = s, this.deprecations = /* @__PURE__ */ new Map();
  }
  /**
   * Logs an error message
   * @param {string} msg The message to log.
   * @param {...any} optArgs
   */
  error(s, ...t) {
    le.logLevel & j.ERROR && this._log(String(s), T.ERROR, t);
  }
  /**
   * Logs a warning message
   * @param {string} msg The message to log.
   * @param {...any} optArgs
   */
  warning(s, ...t) {
    le.logLevel & j.WARN && this._log(String(s), T.WARN, t);
  }
  /**
   * Deprecate a function. deprecations are stored on the logger
   * @param {string} functionName
   * @param {string=} alternativeFunctionName
   */
  deprecate(s, t) {
    const n = String(s), a = t ? String(t) : null;
    if (!this.deprecations.has(n)) {
      this.deprecations.set(n, a || null);
      let o = `${n} has been deprecated and will be removed`;
      a && (o = `${o}. ${a}`), this.warning(o);
    }
  }
  /**
   * Logs an info message
   * @param {string} msg The message to log.
   * @param {...any} optArgs
   */
  info(s, ...t) {
    le.logLevel & j.INFO && this._log(String(s), T.INFO, t);
  }
  /**
   * Logs a debug message
   * @param {string} msg The message to log.
   * @param {...any} optArgs
   */
  debug(s, ...t) {
    le.logLevel & j.DEBUG && this._log(String(s), T.DEBUG, t);
  }
  /**
   * Alias for debug
   * @param {string} msg The message to log.
   * @param {...any} optArgs
   */
  log(s, ...t) {
    le.logLevel & j.DEBUG && this._log(String(s), T.DEBUG, t);
  }
  /**
   * Logs a message
   * @param {string} msg The message to log.
   * @param {LOG_LEVEL} level
   * @param {Array} optArgs
   * @private
   */
  _log(s, t, n) {
    let a = s;
    this.className && (a = `[${this.className}] ${a}`), console[me.get(t)](a, ...n), t & T.ERROR && (console.group(), console.trace(), console.groupEnd());
  }
}
const Se = /* @__PURE__ */ new Map();
function Xt(e) {
  const s = new Jt(e);
  return Se.set(e, s), s;
}
function Z(e) {
  return Se.has(e) ? Se.get(e) : Xt(e);
}
var F = /* @__PURE__ */ ((e) => (e.OpenLayers = "OpenlayersMap", e.Oblique = "ObliqueMap", e.Cesium = "CesiumMap", e.Panorama = "PanoramaMap", e))(F || {});
function ke() {
  return {
    OpenlayersMap: {
      disable: !1,
      decimalPlaces: 2
    },
    CesiumMap: {
      disable: !1,
      decimalPlaces: 2,
      decimalPlacesAngle: 3
    },
    ObliqueMap: {
      disable: !1,
      decimalPlaces: 2
    },
    PanoramaMap: {
      disable: !1,
      decimalPlaces: 2,
      decimalPlacesAngle: 3
    }
  };
}
function Be(e) {
  const s = ke();
  return {
    OpenlayersMap: {
      ...s.OpenlayersMap,
      ...e.OpenlayersMap
    },
    CesiumMap: {
      ...s.CesiumMap,
      ...e.CesiumMap
    },
    ObliqueMap: {
      ...s.ObliqueMap,
      ...e.ObliqueMap
    },
    PanoramaMap: {
      ...s.PanoramaMap,
      ...e.PanoramaMap
    }
  };
}
const E = Symbol("measurementModeSymbol"), Ue = Symbol("doNotEditAndPersistentSymbol"), Fe = "vcs_measurement_type";
var f = /* @__PURE__ */ ((e) => (e.Position3D = "Position3D", e.Position2D = "Position2D", e.Distance2D = "Distance2D", e.Area2D = "Area2D", e.Distance3D = "Distance3D", e.Area3D = "Area3D", e.Height3D = "Height3D", e.ObliqueHeight2D = "ObliqueHeight2D", e))(f || {});
const Qt = {
  Position3D: O.Point,
  Position2D: O.Point,
  Distance2D: O.LineString,
  Area2D: O.Polygon,
  Distance3D: O.LineString,
  Area3D: O.Polygon,
  Height3D: O.LineString,
  ObliqueHeight2D: O.LineString
};
function X(e) {
  var s, t;
  return e[E] ? e[E].values.value : (t = (s = e[ae]) == null ? void 0 : s[E]) == null ? void 0 : t.values.value;
}
function es(e, s) {
  var a, o, r, i;
  const n = (((a = e[E]) == null ? void 0 : a.supportedMaps) ?? ((r = (o = e[ae]) == null ? void 0 : o[E]) == null ? void 0 : r.supportedMaps) ?? []).includes(s.className);
  return s instanceof K ? n && !!((i = s.currentPanoramaImage) != null && i.hasDepth) : n;
}
class I {
  constructor(s) {
    A(this, "app");
    A(this, "manager");
    A(this, "projection");
    A(this, "decimalPlaces");
    A(this, "decimalPlacesZ");
    A(this, "decimalPlacesAngle");
    A(this, "templateFeature");
    A(this, "values");
    var a;
    this.app = s.app, this.manager = s.manager, this.projection = we(), this.templateFeature = this.createTemplateFeature(), this.values = ye(this.defaultValues);
    const { config: t } = this.app.plugins.getByKey(S), n = (a = this.app.maps.activeMap) == null ? void 0 : a.className;
    this.decimalPlaces = t[n].decimalPlaces, this.decimalPlacesAngle = t[F.Cesium].decimalPlacesAngle, (n === F.Cesium || n === F.Oblique || n === F.Panorama) && (this.decimalPlacesZ = t[n].decimalPlacesZ ?? this.decimalPlaces);
  }
  get defaultValues() {
    return {
      type: this.type,
      area: "0",
      circumference: "0",
      distance: "0",
      height: "0",
      alpha: "0",
      beta: "0",
      horizontal: "0",
      pointPosition: void 0,
      vertexPositions: []
    };
  }
  // eslint-disable-next-line class-methods-use-this
  get type() {
    return "Area2D";
  }
  // eslint-disable-next-line class-methods-use-this
  get geometryType() {
    return O.Polygon;
  }
  // eslint-disable-next-line class-methods-use-this
  get supportedMaps() {
    return [z.className, de.className, Q.className];
  }
  getValue(s, t = !1, n = !1) {
    let a = Math.abs(s);
    const o = t ? 2 : 1;
    let r = t ? "m²" : "m";
    const i = 1e3 ** o;
    return a > i * (t ? 1 : 10) && (a /= i, r = `k${r}`), `${(s < 0 ? "-" : "") + a.toFixed(n ? this.decimalPlacesZ : this.decimalPlaces)} ${r}`;
  }
  // eslint-disable-next-line class-methods-use-this
  check(s) {
    const t = s.getGeometry();
    return t ? t.getCoordinates().length !== 0 : !1;
  }
  calcMeasurementResult(s) {
    return Promise.resolve(this.check(s));
  }
  createTemplateFeature() {
    const s = new _t();
    return s.set(Fe, this.type), s;
  }
  static getDefaultText() {
    return nt({
      font: "bold 18px Arial",
      textBaseline: "bottom",
      offsetY: -20,
      offsetX: 0,
      fill: { color: [3, 9, 53, 1] },
      stroke: { color: [255, 255, 255, 1], width: 2 }
    });
  }
  setProjection(s) {
    s.epsg !== this.projection.epsg && (this.projection = s);
  }
}
class We extends I {
  constructor(t) {
    super(t);
    A(this, "calcMeasurementResolve");
    A(this, "calcMeasurementTimeout");
    this.calcMeasurementResolve = void 0, this.calcMeasurementTimeout = void 0;
  }
  // eslint-disable-next-line class-methods-use-this
  get type() {
    return f.Distance2D;
  }
  // eslint-disable-next-line class-methods-use-this
  get geometryType() {
    return O.LineString;
  }
  // eslint-disable-next-line class-methods-use-this
  get supportedMaps() {
    return [z.className, de.className, Q.className];
  }
  calcMeasurementResult(t) {
    var n;
    return this.calcMeasurementTimeout && (clearTimeout(this.calcMeasurementTimeout), this.calcMeasurementTimeout = void 0, (n = this.calcMeasurementResolve) == null || n.call(this, !1), this.calcMeasurementResolve = void 0), this.check(t) ? new Promise((a) => {
      const o = this.app.maps.activeMap, r = t.getGeometry(), i = ie(r);
      if (r[at])
        this.calcMeasurementResolve = a, this.calcMeasurementTimeout = setTimeout(async () => {
          this.calcMeasurementResolve = void 0, this.calcMeasurementTimeout = void 0;
          const c = await Promise.all(
            i.map((d) => Ve(o.currentImage, d, {
              dataProjection: ve
            }).then((l) => l.coords))
          ), u = [];
          for (let d = 0; d < c.length; d++) {
            const l = H.transform(
              this.projection,
              ve,
              c[d]
            );
            u.push({
              id: (u.length + 1).toString(),
              name: void 0,
              x: +l[0].toFixed(this.decimalPlaces),
              y: +l[1].toFixed(this.decimalPlaces),
              z: 0
            });
          }
          this.values.value.vertexPositions = u, this.values.value.distance = this.getValue(
            this.calculateDistance(c)
          ), a(!0);
        }, 30);
      else {
        const c = [];
        for (let u = 0; u < i.length; u++) {
          const d = H.transform(
            this.projection,
            ee,
            i[u]
          );
          c.push({
            id: (c.length + 1).toString(),
            name: void 0,
            x: +d[0].toFixed(this.decimalPlaces),
            y: +d[1].toFixed(this.decimalPlaces),
            z: 0
          });
        }
        for (let u = 0; u < i.length; u++)
          H.mercatorToWgs84(i[u], !0);
        this.values.value = {
          type: this.type,
          distance: this.getValue(this.calculateDistance(i)),
          vertexPositions: c
        }, a(!0);
      }
    }) : Promise.resolve(!1);
  }
  // eslint-disable-next-line class-methods-use-this
  calculateDistance(t) {
    const n = t.length, a = new Array(n - 1);
    let o = 0;
    for (let r = 1; r < n; r++)
      a[r - 1] = Ae(
        t[r - 1],
        t[r]
      ), o += a[r - 1];
    return o;
  }
  createTemplateFeature() {
    const t = super.createTemplateFeature();
    return t.setGeometry(new ce([])), t;
  }
  static getStyleFunction(t) {
    const n = t ? oe() : re.style, a = I.getDefaultText(), o = new q({
      text: a,
      geometry: (r) => {
        const i = r.getGeometry().getCoordinates();
        return i.length > 1 ? new J(i[i.length - 1]) : r.getGeometry();
      }
    });
    return (r) => {
      var i;
      return a.setText((i = X(r)) == null ? void 0 : i.distance), [n, o];
    };
  }
}
class ts extends I {
  // eslint-disable-next-line class-methods-use-this
  get type() {
    return f.Position3D;
  }
  // eslint-disable-next-line class-methods-use-this
  get geometryType() {
    return O.Point;
  }
  // eslint-disable-next-line class-methods-use-this
  get supportedMaps() {
    return [z.className, K.className];
  }
  calcMeasurementResult(s) {
    if (!this.check(s))
      return Promise.resolve(!1);
    const t = s.getGeometry(), n = ie(t), a = H.transform(
      this.projection,
      ee,
      n[0]
    ), o = [];
    return o.push({
      id: "",
      name: void 0,
      x: +a[0].toFixed(this.decimalPlaces),
      y: +a[1].toFixed(this.decimalPlaces),
      z: +a[2].toFixed(this.decimalPlacesZ)
    }), this.values.value = { type: this.type, vertexPositions: o }, Promise.resolve(!0);
  }
  createTemplateFeature() {
    const s = super.createTemplateFeature();
    return s.setGeometry(new J([])), s.set("olcs_altitudeMode", "absolute"), s;
  }
}
class qe extends I {
  // eslint-disable-next-line class-methods-use-this
  get type() {
    return f.Area2D;
  }
  // eslint-disable-next-line class-methods-use-this
  get geometryType() {
    return O.Polygon;
  }
  // eslint-disable-next-line class-methods-use-this
  get supportedMaps() {
    return [z.className, de.className];
  }
  calcMeasurementResult(s) {
    if (!this.check(s))
      return Promise.resolve(!1);
    const t = s.getGeometry(), n = ie(t);
    let a = 0;
    for (let o = 0; o < n.length; o++)
      H.mercatorToWgs84(n[o], !0), o && (a += Ae(n[o - 1], n[o])), o === n.length - 1 && (a += Ae(n[o], n[0]));
    return this.values.value = {
      type: this.type,
      area: this.getValue(jt(t), !0),
      circumference: this.getValue(a)
    }, Promise.resolve(!0);
  }
  createTemplateFeature() {
    const s = super.createTemplateFeature();
    return s.setGeometry(new _e([])), s;
  }
  static getStyleFunction(s) {
    const t = s ? oe() : re.style, n = I.getDefaultText(), a = new q({
      text: n,
      geometry: (o) => o.getGeometry().getInteriorPoint()
    });
    return (o) => {
      var r;
      return n.setText((r = X(o)) == null ? void 0 : r.area), [t, a];
    };
  }
}
let fe = new D(), pe = new D();
class ss extends I {
  // eslint-disable-next-line class-methods-use-this
  get type() {
    return f.Distance3D;
  }
  // eslint-disable-next-line class-methods-use-this
  get geometryType() {
    return O.LineString;
  }
  // eslint-disable-next-line class-methods-use-this
  get supportedMaps() {
    return [z.className, K.className];
  }
  calcMeasurementResult(s) {
    if (!this.check(s))
      return Promise.resolve(!1);
    const t = s.getGeometry(), n = ie(t), a = [];
    for (let i = 0; i < n.length - 1; i++) {
      const c = H.transform(
        this.projection,
        ee,
        n[i]
      );
      a.push({
        id: (a.length + 1).toString(),
        name: void 0,
        x: +c[0].toFixed(this.decimalPlaces),
        y: +c[1].toFixed(this.decimalPlaces),
        z: +c[2].toFixed(this.decimalPlacesZ)
      });
    }
    let o = 0;
    const r = new Array(n.length - 1);
    H.mercatorToWgs84(n[0], !0), fe = D.fromDegrees(
      n[0][0],
      n[0][1],
      n[0][2],
      void 0,
      fe
    );
    for (let i = 1; i < n.length; i++)
      H.mercatorToWgs84(n[i], !0), pe = D.fromDegrees(
        n[i][0],
        n[i][1],
        n[i][2],
        void 0,
        pe
      ), r[i - 1] = D.distance(
        fe,
        pe
      ), o += r[i - 1], fe = D.clone(pe);
    return this.values.value = {
      type: this.type,
      distance: this.getValue(o),
      vertexPositions: a
    }, Promise.resolve(!0);
  }
  createTemplateFeature() {
    const s = super.createTemplateFeature();
    return s.setGeometry(new ce([])), s.set("olcs_altitudeMode", "absolute"), s;
  }
}
class Ze extends I {
  constructor(t) {
    super(t);
    A(this, "set");
    A(this, "selfCall");
    A(this, "measureVecGround");
    A(this, "measureVecOrientation");
    A(this, "startCoordinateTransformationPromise");
    A(this, "startDistorted");
    A(this, "startUndistorted");
    A(this, "liftedUndistorted");
    A(this, "startPointRealWorld");
    this.set = !1, this.selfCall = !1, this.measureVecGround = new D(), this.measureVecOrientation = new D(), this.startCoordinateTransformationPromise = null, this.startDistorted = [], this.startUndistorted = [], this.liftedUndistorted = [], this.startPointRealWorld = [];
  }
  // eslint-disable-next-line class-methods-use-this
  get type() {
    return f.ObliqueHeight2D;
  }
  // eslint-disable-next-line class-methods-use-this
  get geometryType() {
    return O.LineString;
  }
  // eslint-disable-next-line class-methods-use-this
  get supportedMaps() {
    return [Q.className];
  }
  calcMeasurementResult(t) {
    if (this.selfCall)
      return this.selfCall = !1, Promise.resolve(!1);
    const n = t.getGeometry().getCoordinates();
    if (n.length === 1)
      return this.values.value = this.defaultValues, Promise.resolve(!1);
    const a = this.app.maps.activeMap, { currentImage: o } = a;
    if (!this.set && n.length === 2)
      return this.startCoordinateTransformationPromise || (this.startCoordinateTransformationPromise = new Promise((r) => {
        this.startUndistorted = o.meta.radialDistortionCoordinate(
          n[0],
          !0
        ), this.startDistorted = n[0].slice(), this.measureVecGround = D.fromElements(
          this.startUndistorted[0],
          this.startUndistorted[1],
          0,
          this.measureVecGround
        ), Ve(o, n[0]).then((i) => {
          this.startPointRealWorld = i.coords;
          const c = i.coords.slice();
          return c[2] += 10, it(o, c);
        }).then((i) => {
          this.liftedUndistorted = o.meta.radialDistortionCoordinate(i.coords, !0);
          const c = D.fromElements(
            this.liftedUndistorted[0],
            this.liftedUndistorted[1],
            0
          );
          this.set = !0, this.measureVecOrientation = D.subtract(
            c,
            this.measureVecGround,
            this.measureVecOrientation
          ), this.measureVecOrientation = D.normalize(
            this.measureVecOrientation,
            this.measureVecOrientation
          ), this.selfCall = !0, t.getGeometry().setCoordinates([
            this.startDistorted,
            this.startDistorted
          ]), r(!0);
        });
      })), this.startCoordinateTransformationPromise;
    if (this.set) {
      if (n.length === 3)
        return this.manager.currentSession.value.finish(), this.selfCall = !1, Promise.resolve(!0);
      const r = o.meta.radialDistortionCoordinate(n[1], !0), i = [
        [
          r[0],
          r[1]
        ],
        [
          r[0] + 1,
          r[1]
        ]
      ], c = ot(
        // XXX find replacement
        i,
        [this.startUndistorted, this.liftedUndistorted]
      ), u = [
        c.x,
        c.y
      ], d = o.meta.radialDistortionCoordinate(
        u,
        !1
      );
      d.push(0);
      const l = new D(
        u[0],
        u[1],
        0
      );
      let g = D.subtract(
        l,
        this.measureVecGround,
        new D()
      );
      g = D.normalize(
        g,
        g
      );
      const p = D.dot(
        this.measureVecOrientation,
        g
      );
      this.selfCall = !0;
      let y;
      if (p < 0 || Number.isNaN(p))
        this.values.value = {
          type: this.type,
          height: this.getValue(0)
        }, y = [this.startDistorted, this.startDistorted];
      else {
        const b = this.findVertical3DPositionRegardingPixel(
          a,
          u,
          this.startPointRealWorld
        );
        this.values.value = {
          type: this.type,
          height: this.getValue(
            rt(this.startPointRealWorld, b)
          )
        }, y = [this.startDistorted, d];
      }
      return t.getGeometry().setCoordinates(y), Promise.resolve(!0);
    }
    return Promise.resolve(!1);
  }
  createTemplateFeature() {
    const t = super.createTemplateFeature();
    return t.setGeometry(new ce([])), t;
  }
  static getStyleFunction(t) {
    const n = t ? oe() : re.style, a = I.getDefaultText(), o = new q({
      text: a,
      geometry: (r) => {
        const i = r.getGeometry().getCoordinates();
        return i.length === 2 ? new J(i[1]) : r.getGeometry();
      }
    });
    return (r) => {
      var i;
      return a.setText(
        (i = r[ae]) == null ? void 0 : i[E].values.value.height
      ), [n, o];
    };
  }
  // eslint-disable-next-line class-methods-use-this
  findVertical3DPositionRegardingPixel(t, n, a) {
    const { currentImage: o } = t;
    let r = new D(
      n[0],
      o.meta.size[1] - n[1],
      1
    );
    r = he.multiplyByVector(
      o.pToRealworld,
      r,
      r
    );
    let i = new D(0, 0, 1), c = D.cross(
      i,
      r,
      new D()
    );
    const u = Ie(
      a,
      ee.proj,
      o.meta.projection.proj
    );
    let d = D.fromArray(u);
    const l = D.subtract(
      o.projectionCenter,
      d,
      new D()
    );
    let g = he.fromRowMajorArray([
      i.x,
      r.x,
      c.x,
      i.y,
      r.y,
      c.y,
      i.z,
      r.z,
      c.z
    ]);
    g = he.inverse(g, g);
    const p = he.multiplyByVector(g, l, new D());
    c = D.multiplyByScalar(c, p.z, c), i = D.multiplyByScalar(
      i,
      p.x,
      i
    ), i = D.add(i, c, i), d = D.add(
      d,
      i,
      d
    );
    const y = [d.x, d.y, d.z];
    return Ie(
      y,
      o.meta.projection.proj,
      ee.proj
    );
  }
}
let se = new D(), Ce = new D();
class Ke extends I {
  // eslint-disable-next-line class-methods-use-this
  get type() {
    return f.Area3D;
  }
  // eslint-disable-next-line class-methods-use-this
  get geometryType() {
    return O.Polygon;
  }
  // eslint-disable-next-line class-methods-use-this
  get supportedMaps() {
    return [z.className, K.className];
  }
  calcMeasurementResult(s) {
    if (!this.check(s))
      return Promise.resolve(!1);
    const t = s.getGeometry(), n = ie(t), a = n.length, o = new Array(a), r = new Array(a);
    let i = n[0][2], c = 0, u = 0;
    for (let g = 0; g < a; g++)
      i = n[g][2] > i ? n[g][2] : i, H.mercatorToWgs84(n[g], !0), o[g] = D.fromDegrees(
        n[g][0],
        n[g][1],
        n[g][2]
      ), r[g] = zt.fromCartesian3(o[g]), g && (c += D.distance(
        o[g - 1],
        o[g]
      ));
    c += D.distance(
      o[a - 1],
      o[0]
    );
    const d = Bt.triangulate(r), l = d.length;
    for (let g = 0; g < l; g += 3) {
      const p = d[g], y = d[g + 1], b = d[g + 2];
      se = D.subtract(
        o[p],
        o[y],
        se
      ), Ce = D.subtract(
        o[p],
        o[b],
        Ce
      ), se = D.cross(se, Ce, se), u += D.magnitude(se) / 2;
    }
    return this.values.value = {
      type: this.type,
      area: this.getValue(u, !0),
      circumference: this.getValue(c),
      height: i.toString()
    }, Promise.resolve(!0);
  }
  createTemplateFeature() {
    const s = super.createTemplateFeature();
    return s.setGeometry(new _e([])), s.set("olcs_altitudeMode", "absolute"), s;
  }
  static getStyleFunction(s) {
    const t = s ? oe() : re.style, n = I.getDefaultText(), a = new q({
      text: n,
      geometry: (o) => {
        var c;
        const r = o.getGeometry().getInteriorPoint(), i = r.getCoordinates();
        return i[2] = +(((c = X(o)) == null ? void 0 : c.height) ?? 0), r.setCoordinates(i), r;
      }
    });
    return (o) => {
      var r;
      return n.setText((r = X(o)) == null ? void 0 : r.area), [t, a];
    };
  }
}
function ns(e, s, t) {
  const n = lt(
    {
      features: e,
      vcsMeta: s.getVcsMeta(t)
    },
    t
  );
  kt(n, "measurement.json");
}
function as(e, s) {
  const t = {
    writeStyle: !0,
    embedIcons: !0,
    prettyPrint: !0,
    writeId: !0
  }, n = e.getFeaturesById(
    s.selection.value.map((a) => a.name)
  );
  ns(n, e, t);
}
function is(e, s, t) {
  const n = be({
    name: "hideAllAction",
    icon: "$vcsCheckboxChecked",
    callback() {
      const o = Object.keys(
        e.featureVisibility.hiddenObjects
      );
      t.items.value.every(
        (r) => !o.includes(r.name)
      ) ? (e.featureVisibility.hideObjects(
        e.getFeatures().map((r) => r.getId())
      ), s.value = void 0, this.icon = "$vcsCheckbox") : (e.featureVisibility.clearHiddenObjects(), this.icon = "$vcsCheckboxChecked");
    }
  }), a = e.featureVisibility.changed.addEventListener(
    (o) => {
      if (o.action === De.HIDE || o.action === De.SHOW) {
        const r = Object.keys(
          e.featureVisibility.hiddenObjects
        );
        t.items.value.every(
          (i) => r.includes(i.name)
        ) ? n.icon = "$vcsCheckbox" : t.items.value.every(
          (i) => !r.includes(i.name)
        ) ? n.icon = "$vcsCheckboxChecked" : n.icon = "$vcsCheckboxIndeterminate";
      }
    }
  );
  return { action: n, destroy: a };
}
function ge(e) {
  return (e == null ? void 0 : e.type) === Re.CREATE;
}
function Ye(e) {
  return (e == null ? void 0 : e.type) === Re.EDIT_GEOMETRY;
}
const os = [
  { key: "height", indices: [0, 1] },
  { key: "horizontal", indices: [1, 2] },
  { key: "distance", indices: [0, 2] }
];
class Je extends I {
  // eslint-disable-next-line class-methods-use-this
  get type() {
    return f.Height3D;
  }
  // eslint-disable-next-line class-methods-use-this
  get geometryType() {
    return O.LineString;
  }
  // eslint-disable-next-line class-methods-use-this
  get supportedMaps() {
    return [z.className, K.className];
  }
  calcMeasurementResult(s) {
    if (!this.check(s))
      return Promise.resolve(!1);
    const t = s.getGeometry().getCoordinates();
    if (t.length === 3 && ge(this.manager.currentSession.value))
      return this.manager.currentSession.value.finish(), Promise.resolve(!1);
    const n = [new D(), new D(), new D()];
    if (t.length === 2) {
      const a = t[0][2] < t[1][2] ? 0 : 1, o = t[a].slice();
      o[2] = t[a ? 0 : 1][2];
      const r = [
        t[a],
        o,
        t[a ? 0 : 1]
      ];
      for (let d = 0; d < 3; d++)
        H.mercatorToWgs84(r[d], !0), D.fromDegrees(
          r[d][0],
          r[d][1],
          r[d][2],
          void 0,
          n[d]
        );
      const i = {
        horizontal: 0,
        height: 0,
        distance: 0
      };
      for (let d = 0; d < 3; d++) {
        const { key: l, indices: g } = os[d], p = D.distance(
          n[g[0]],
          n[g[1]]
        );
        i[l] = p, this.values.value[l] = this.getValue(p, !1, l === "height");
      }
      const c = Ut.toDegrees(
        Math.asin(i.horizontal / i.distance)
      ), u = 90 - c;
      this.values.value = {
        ...this.values.value,
        alpha: `${c.toFixed(this.decimalPlacesAngle)}°`,
        beta: `${u.toFixed(this.decimalPlacesAngle)}°`,
        groundAltitude: this.getValue(t[a][2], !1, !0),
        heightAltitude: this.getValue(o[2], !1, !0)
      };
    }
    return Promise.resolve(!0);
  }
  createTemplateFeature() {
    const s = super.createTemplateFeature();
    return s.setGeometry(new ce([])), s.set("olcs_altitudeMode", "absolute"), s;
  }
  static getStyleFunction(s) {
    const t = s ? oe() : re.style, n = new q({
      stroke: t.getStroke() ?? void 0,
      geometry: (d) => {
        const l = d.getGeometry().getCoordinates();
        if (l.length === 2) {
          const g = l[0][2] < l[1][2] ? l[0] : l[1], p = l[0][2] < l[1][2] ? l[1] : l[0];
          return new ce([
            g,
            p,
            [g[0], g[1], p[2]],
            g
          ]);
        }
        return d.getGeometry();
      }
    }), a = I.getDefaultText(), o = new q({
      text: a,
      geometry: (d) => {
        const l = d.getGeometry().getCoordinates();
        if (l.length === 2) {
          const g = l[0][2] < l[1][2] ? l[0] : l[1];
          return g[2] = (l[0][2] + l[1][2]) * 0.5, new J(g);
        }
        return d.getGeometry();
      }
    }), r = I.getDefaultText(), i = new q({
      text: r,
      geometry: (d) => {
        const l = d.getGeometry().getCoordinates();
        if (l.length === 2) {
          const g = Math.max(l[0][2], l[1][2]);
          return new J([
            (l[0][0] + l[1][0]) * 0.5,
            (l[0][1] + l[1][1]) * 0.5,
            g
          ]);
        }
        return d.getGeometry();
      }
    }), c = I.getDefaultText(), u = new q({
      text: c,
      geometry: (d) => {
        const l = d.getGeometry().getCoordinates();
        return l.length === 2 ? new J([
          (l[0][0] + l[1][0]) * 0.5,
          (l[0][1] + l[1][1]) * 0.5,
          (l[0][2] + l[1][2]) * 0.5
        ]) : d.getGeometry();
      }
    });
    return (d) => {
      var l, g, p;
      return a.setText((l = X(d)) == null ? void 0 : l.height), r.setText((g = X(d)) == null ? void 0 : g.horizontal), c.setText((p = X(d)) == null ? void 0 : p.distance), [n, o, i, u];
    };
  }
}
function Le(e) {
  const s = We.getStyleFunction(e), t = qe.getStyleFunction(e), n = Ke.getStyleFunction(e), a = Je.getStyleFunction(e), o = Ze.getStyleFunction(e), r = e ? oe() : re.style;
  return (i) => {
    const c = i, u = c[ae] ? c[ae] : c;
    if (u[E]) {
      if (u[E].type === f.Distance2D)
        return s(c);
      if (u[E].type === f.Distance3D)
        return s(c);
      if (u[E].type === f.Area2D)
        return t(c);
      if (u[E].type === f.Area3D)
        return n(c);
      if (u[E].type === f.Height3D)
        return a(c);
      if (u[E].type === f.ObliqueHeight2D)
        return o(c);
    }
    return [r];
  };
}
class rs extends I {
  constructor() {
    super(...arguments);
    A(this, "calcMeasurementResolve");
    A(this, "calcMeasurementTimeout");
  }
  // eslint-disable-next-line class-methods-use-this
  get type() {
    return f.Position2D;
  }
  // eslint-disable-next-line class-methods-use-this
  get geometryType() {
    return O.Point;
  }
  // eslint-disable-next-line class-methods-use-this
  get supportedMaps() {
    return [z.className, de.className, Q.className];
  }
  calcMeasurementResult(t) {
    return this.check(t) ? new Promise((n) => {
      var i;
      const a = this.app.maps.activeMap, o = ((i = t[ae]) == null ? void 0 : i.getGeometry()) ?? t.getGeometry(), r = ie(o);
      if (a instanceof Q)
        this.calcMeasurementResolve = n, this.calcMeasurementTimeout = setTimeout(async () => {
          this.calcMeasurementResolve = void 0, this.calcMeasurementTimeout = void 0;
          const { coords: c } = await Ve(
            a.currentImage,
            r[0],
            {
              dataProjection: ve
            }
          ), u = H.transform(
            this.projection,
            ve,
            c
          );
          this.values.value = {
            type: this.type,
            vertexPositions: [
              {
                id: "",
                name: void 0,
                x: +u[0].toFixed(this.decimalPlaces),
                y: +u[1].toFixed(this.decimalPlaces),
                z: +u[2].toFixed(this.decimalPlacesZ)
              }
            ]
          }, n(!0);
        }, 30);
      else {
        const c = H.transform(
          this.projection,
          ee,
          r[0]
        );
        this.values.value = {
          type: this.type,
          vertexPositions: [
            {
              id: "",
              name: void 0,
              x: +c[0].toFixed(this.decimalPlaces),
              y: +c[1].toFixed(this.decimalPlaces),
              z: o.getLayout() === "XY" ? void 0 : +c[2].toFixed(this.decimalPlacesZ)
            }
          ]
        }, n(!0);
      }
    }) : Promise.resolve(!1);
  }
  createTemplateFeature() {
    const t = super.createTemplateFeature();
    return t.setGeometry(new J([])), t.set("olcs_altitudeMode", "clampToGround"), t;
  }
}
const ls = He({
  name: "MeasurementWindow",
  components: {
    VcsDataTable: Et,
    VcsFormSection: Ne,
    VcsLabel: xe,
    VcsActionButtonList: Tt,
    VcsWorkspaceWrapper: Ft,
    VRow: ze,
    VCol: je,
    VImg: qt,
    VCard: Wt
  },
  setup(e, { attrs: s }) {
    var _;
    const t = bt("vcsApp"), { manager: n } = t.plugins.getByKey(S), a = s["window-state"], o = (_ = t.maps.activeMap) == null ? void 0 : _.className, r = Me(() => {
      var P, v;
      return ((v = (P = n.currentMeasurementMode.value) == null ? void 0 : P.values) == null ? void 0 : v.value) ?? void 0;
    }), i = ne(!1), c = ne(!1), u = ne(!1), d = ne(!1), l = be({
      name: "editAction",
      icon: "$vcsEditVertices",
      title: "measurement.edit",
      active: !1,
      disabled: !u.value || i.value || !c.value,
      callback() {
        l.active ? n.stop() : n.currentFeature.value && n.startEditSession(n.currentFeature.value);
      }
    });
    let g = () => {
    };
    W(
      n.currentSession,
      () => {
        var G;
        const P = n.currentSession.value;
        l.active = Ye(P);
        const v = ge(P);
        i.value = v;
        const M = (G = r.value) == null ? void 0 : G.type;
        v && (g = P.creationFinished.addEventListener(
          (x) => {
            var N;
            !x && M && M === ((N = r.value) == null ? void 0 : N.type) && (t.notifier.add({
              type: Vt.WARNING,
              message: t.vueI18n.t("measurement.create.failed")
            }), n.startCreateSession(r.value.type).catch((L) => {
              Z(S).error(
                "Error starting create session",
                L
              );
            }));
          }
        ));
      },
      { immediate: !0 }
    ), W(
      [u, i, c],
      () => {
        l.disabled = !u.value || i.value || !c.value;
      },
      { immediate: !0 }
    );
    const p = Me(() => {
      var M;
      const P = [
        { title: "", value: "name" },
        { title: "X", value: "x" },
        { title: "Y", value: "y" }
      ], v = (M = r.value) == null ? void 0 : M.type;
      return (v === f.Position3D || v === f.Area3D || v === f.Distance3D) && P.push({ title: "Z", value: "z" }), P;
    });
    let y = () => {
    };
    const b = ne("");
    function B() {
      y();
      const P = n.currentFeature.value;
      if (P) {
        const v = P.on(
          "propertychange",
          ({ key: M }) => {
            M === "title" && (b.value = P.get("title"));
          }
        );
        y = () => {
          ue(v);
        }, b.value = P.get("title");
      }
    }
    W([b, d], () => {
      a.headerTitle = d.value && b.value ? b.value : "measurement.header.title";
    }), W(
      n.currentFeature,
      (P) => {
        B(), d.value = !!P && n.collection.has(P), c.value = !!P && !P[Ue], u.value = !!P && P[E].supportedMaps.includes(
          t.maps.activeMap.className
        );
      },
      { immediate: !0 }
    );
    const te = Me(() => {
      const P = t.vuetify.theme.current.value.dark ? "dark" : "light";
      return Ot(
        t,
        S,
        `plugin-assets/sketch_${P}.png`
      );
    });
    return W(
      r,
      () => {
        var v;
        const P = (v = r.value) == null ? void 0 : v.vertexPositions;
        P && P.forEach((M) => {
          M.name || (M.name = `${t.vueI18n.t("measurement.value.point")} ${M.id}`);
        }), r.value && (a.headerIcon = et[r.value.type]);
      },
      { immediate: !0 }
    ), Mt(() => {
      g(), y(), Ge(() => {
        t.windowManager.has(a.id) || (n.stop(), n.currentFeature.value = void 0);
      }).catch((P) => {
        Z(S).error("Error on window close ", P);
      });
    }), {
      MeasurementType: f,
      activeMapClassName: o,
      values: r,
      headers: p,
      targetFeature: n.currentFeature,
      isPersistent: d,
      isInCreation: i,
      isMapSupported: u,
      isEditable: c,
      editAction: l,
      sketchIcon: te,
      createNewMeasurement() {
        n.startCreateSession(r.value.type).catch((P) => {
          Z(S).error("Error starting create session", P);
        });
      },
      addToCategory() {
        n.persistCurrentFeature(), d.value = !0;
      },
      getCopyAction(P) {
        return {
          name: "copyAction",
          icon: "mdi-content-copy",
          callback() {
            if (navigator.clipboard)
              navigator.clipboard.writeText(P).catch(() => {
              });
            else {
              const v = document.createElement("textarea");
              v.innerHTML = P, document.body.appendChild(v), v.select(), document.execCommand("copy"), document.body.removeChild(v);
            }
          }
        };
      },
      required: [
        (P) => !!P || "Input may not be null",
        (P) => P.length > 0 || "Input must have a length"
      ]
    };
  }
}), Xe = (e, s) => {
  const t = e.__vccOpts || e;
  for (const [n, a] of s)
    t[n] = a;
  return t;
}, cs = { key: 1 }, us = { key: 2 }, ds = { key: 3 }, ms = { key: 4 }, gs = { key: 5 };
function hs(e, s, t, n, a, o) {
  const r = $("v-card"), i = $("VcsDataTable"), c = $("VcsLabel"), u = $("v-col"), d = $("VcsActionButtonList"), l = $("v-row"), g = $("v-img"), p = $("VcsFormSection"), y = $("VcsWorkspaceWrapper");
  return V(), R(y, {
    "disable-add": e.isPersistent || e.isInCreation || !e.isEditable,
    "disable-new": !e.isMapSupported,
    onNewClicked: e.createNewMeasurement,
    onAddClicked: e.addToCategory
  }, {
    default: h(() => {
      var b, B;
      return [
        e.targetFeature ? k("v-if", !0) : (V(), R(r, {
          key: 0,
          class: "pa-2",
          elevation: "0"
        }, {
          default: h(() => [
            C(
              w(e.$t("measurement.create.noFeature")),
              1
              /* TEXT */
            )
          ]),
          _: 1
          /* STABLE */
        })),
        e.targetFeature && e.values ? (V(), R(p, {
          key: 1,
          heading: `measurement.create.${e.values.type}`,
          "header-actions": [e.editAction]
        }, {
          default: h(() => [
            k("point measurement block"),
            e.values.type === e.MeasurementType.Position3D || e.values.type === e.MeasurementType.Position2D ? (V(), R(i, {
              key: 0,
              items: e.values.vertexPositions,
              "item-key": "id",
              headers: e.headers,
              "show-searchbar": !1
            }, null, 8, ["items", "headers"])) : k("v-if", !0),
            k("distance measurement block"),
            e.values.type === e.MeasurementType.Distance2D || e.values.type === e.MeasurementType.Distance3D ? (V(), Y("div", cs, [
              m(l, {
                "no-gutters": "",
                class: "py-0 px-1"
              }, {
                default: h(() => [
                  m(u, null, {
                    default: h(() => [
                      m(c, null, {
                        default: h(() => [
                          C(
                            w(e.$t("measurement.value.distance")),
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
                  m(u, { class: "d-flex justify-end" }, {
                    default: h(() => [
                      m(c, null, {
                        default: h(() => [
                          C(
                            w(e.values.distance),
                            1
                            /* TEXT */
                          )
                        ]),
                        _: 1
                        /* STABLE */
                      }),
                      m(d, {
                        class: "px-1",
                        actions: [e.getCopyAction(e.values.distance)]
                      }, null, 8, ["actions"])
                    ]),
                    _: 1
                    /* STABLE */
                  })
                ]),
                _: 1
                /* STABLE */
              })
            ])) : k("v-if", !0),
            k("area measurement block"),
            e.values.type === e.MeasurementType.Area2D || e.values.type === e.MeasurementType.Area3D ? (V(), Y("div", us, [
              m(l, {
                "no-gutters": "",
                class: "py-0 px-1"
              }, {
                default: h(() => [
                  m(u, null, {
                    default: h(() => [
                      m(c, null, {
                        default: h(() => [
                          C(
                            w(e.$t("measurement.value.area")),
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
                  m(u, { class: "d-flex justify-end" }, {
                    default: h(() => [
                      m(c, null, {
                        default: h(() => [
                          C(
                            w(e.values.area),
                            1
                            /* TEXT */
                          )
                        ]),
                        _: 1
                        /* STABLE */
                      }),
                      m(d, {
                        class: "px-1",
                        actions: [e.getCopyAction(e.values.area)]
                      }, null, 8, ["actions"])
                    ]),
                    _: 1
                    /* STABLE */
                  })
                ]),
                _: 1
                /* STABLE */
              }),
              m(l, {
                "no-gutters": "",
                class: "py-0 px-1"
              }, {
                default: h(() => [
                  m(u, null, {
                    default: h(() => [
                      m(c, null, {
                        default: h(() => [
                          C(
                            w(e.$t("measurement.value.circumference")),
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
                  m(u, { class: "d-flex justify-end" }, {
                    default: h(() => [
                      m(c, null, {
                        default: h(() => [
                          C(
                            w(e.values.circumference),
                            1
                            /* TEXT */
                          )
                        ]),
                        _: 1
                        /* STABLE */
                      }),
                      m(d, {
                        class: "px-1",
                        actions: [e.getCopyAction(e.values.circumference)]
                      }, null, 8, ["actions"])
                    ]),
                    _: 1
                    /* STABLE */
                  })
                ]),
                _: 1
                /* STABLE */
              })
            ])) : k("v-if", !0),
            k("2D height measurement block"),
            e.values.type === e.MeasurementType.ObliqueHeight2D ? (V(), Y("div", ds, [
              m(l, {
                "no-gutters": "",
                class: "py-0 px-1"
              }, {
                default: h(() => [
                  m(u, null, {
                    default: h(() => [
                      m(c, null, {
                        default: h(() => [
                          C(
                            w(e.$t("measurement.value.height")),
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
                  m(u, { class: "d-flex justify-end" }, {
                    default: h(() => [
                      m(c, null, {
                        default: h(() => [
                          C(
                            w(e.values.height),
                            1
                            /* TEXT */
                          )
                        ]),
                        _: 1
                        /* STABLE */
                      }),
                      m(d, {
                        class: "px-1",
                        actions: [e.getCopyAction(e.values.height)]
                      }, null, 8, ["actions"])
                    ]),
                    _: 1
                    /* STABLE */
                  })
                ]),
                _: 1
                /* STABLE */
              })
            ])) : k("v-if", !0),
            k("oblique measurement hint"),
            e.activeMapClassName === "ObliqueMap" ? (V(), Y("div", ms, [
              e.values.type === e.MeasurementType.Distance2D ? (V(), R(l, {
                key: 0,
                "no-gutters": "",
                class: "py-2 px-2"
              }, {
                default: h(() => [
                  C(
                    w(e.$t("measurement.hint.oblique.distance")),
                    1
                    /* TEXT */
                  )
                ]),
                _: 1
                /* STABLE */
              })) : k("v-if", !0),
              e.values.type === e.MeasurementType.ObliqueHeight2D ? (V(), R(l, {
                key: 1,
                "no-gutters": "",
                class: "py-2 px-2"
              }, {
                default: h(() => [
                  C(
                    w(e.$t("measurement.hint.oblique.height")),
                    1
                    /* TEXT */
                  )
                ]),
                _: 1
                /* STABLE */
              })) : k("v-if", !0)
            ])) : k("v-if", !0),
            k("3D height measurement block"),
            e.values.type === e.MeasurementType.Height3D ? (V(), Y("div", gs, [
              m(l, {
                "no-gutters": "",
                class: "py-0 px-1"
              }, {
                default: h(() => [
                  m(u, null, {
                    default: h(() => [
                      m(c, null, {
                        default: h(() => [
                          C(
                            w(e.$t("measurement.value.height")) + " [h] ",
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
                  m(u, { class: "d-flex justify-end" }, {
                    default: h(() => [
                      m(c, null, {
                        default: h(() => [
                          C(
                            w(e.values.height),
                            1
                            /* TEXT */
                          )
                        ]),
                        _: 1
                        /* STABLE */
                      }),
                      m(d, {
                        class: "px-1",
                        actions: [e.getCopyAction(e.values.height)]
                      }, null, 8, ["actions"])
                    ]),
                    _: 1
                    /* STABLE */
                  })
                ]),
                _: 1
                /* STABLE */
              }),
              m(l, {
                "no-gutters": "",
                class: "py-0 px-1"
              }, {
                default: h(() => [
                  m(u, null, {
                    default: h(() => [
                      m(c, null, {
                        default: h(() => [
                          C(
                            w(e.$t("measurement.value.horizontalDistance")) + " [dh] ",
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
                  m(u, { class: "d-flex justify-end" }, {
                    default: h(() => [
                      m(c, null, {
                        default: h(() => [
                          C(
                            w(e.values.horizontal),
                            1
                            /* TEXT */
                          )
                        ]),
                        _: 1
                        /* STABLE */
                      }),
                      m(d, {
                        class: "px-1",
                        actions: [e.getCopyAction(e.values.horizontal)]
                      }, null, 8, ["actions"])
                    ]),
                    _: 1
                    /* STABLE */
                  })
                ]),
                _: 1
                /* STABLE */
              }),
              m(l, {
                "no-gutters": "",
                class: "py-0 px-1"
              }, {
                default: h(() => [
                  m(u, null, {
                    default: h(() => [
                      m(c, null, {
                        default: h(() => [
                          C(
                            w(e.$t("measurement.value.distance")) + " [d] ",
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
                  m(u, { class: "d-flex justify-end" }, {
                    default: h(() => [
                      m(c, null, {
                        default: h(() => [
                          C(
                            w(e.values.distance),
                            1
                            /* TEXT */
                          )
                        ]),
                        _: 1
                        /* STABLE */
                      }),
                      m(d, {
                        class: "px-1",
                        actions: [e.getCopyAction(e.values.distance)]
                      }, null, 8, ["actions"])
                    ]),
                    _: 1
                    /* STABLE */
                  })
                ]),
                _: 1
                /* STABLE */
              }),
              m(l, {
                "no-gutters": "",
                class: "py-0 px-1"
              }, {
                default: h(() => [
                  m(u, null, {
                    default: h(() => [
                      m(c, null, {
                        default: h(() => [
                          C(
                            w(e.$t("measurement.value.alpha")) + " [α] ",
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
                  m(u, { class: "d-flex justify-end" }, {
                    default: h(() => [
                      m(c, null, {
                        default: h(() => [
                          C(
                            w(e.values.alpha),
                            1
                            /* TEXT */
                          )
                        ]),
                        _: 1
                        /* STABLE */
                      }),
                      m(d, {
                        class: "px-1",
                        actions: [e.getCopyAction(e.values.alpha)]
                      }, null, 8, ["actions"])
                    ]),
                    _: 1
                    /* STABLE */
                  })
                ]),
                _: 1
                /* STABLE */
              }),
              m(l, {
                "no-gutters": "",
                class: "py-0 px-1"
              }, {
                default: h(() => [
                  m(u, null, {
                    default: h(() => [
                      m(c, null, {
                        default: h(() => [
                          C(
                            w(e.$t("measurement.value.beta")) + " [β] ",
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
                  m(u, { class: "d-flex justify-end" }, {
                    default: h(() => [
                      m(c, null, {
                        default: h(() => [
                          C(
                            w(e.values.beta),
                            1
                            /* TEXT */
                          )
                        ]),
                        _: 1
                        /* STABLE */
                      }),
                      m(d, {
                        class: "px-1",
                        actions: [e.getCopyAction(e.values.beta)]
                      }, null, 8, ["actions"])
                    ]),
                    _: 1
                    /* STABLE */
                  })
                ]),
                _: 1
                /* STABLE */
              }),
              e.sketchIcon ? (V(), R(p, {
                key: 0,
                expandable: !0,
                heading: "Sketch"
              }, {
                default: h(() => [
                  m(g, {
                    src: e.sketchIcon,
                    alt: "plugin-icon"
                  }, null, 8, ["src"])
                ]),
                _: 1
                /* STABLE */
              })) : k("v-if", !0),
              m(l, {
                "no-gutters": "",
                class: "py-0 px-1"
              }, {
                default: h(() => [
                  m(u, null, {
                    default: h(() => [
                      m(c, null, {
                        default: h(() => [
                          C(
                            w(e.$t("measurement.value.heightPoint")),
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
                  m(u, { class: "d-flex justify-end" }, {
                    default: h(() => [
                      m(c, null, {
                        default: h(() => [
                          C(
                            w(e.values.heightAltitude),
                            1
                            /* TEXT */
                          )
                        ]),
                        _: 1
                        /* STABLE */
                      }),
                      m(d, {
                        class: "px-1",
                        actions: [e.getCopyAction(e.values.heightAltitude)]
                      }, null, 8, ["actions"])
                    ]),
                    _: 1
                    /* STABLE */
                  })
                ]),
                _: 1
                /* STABLE */
              }),
              m(l, {
                "no-gutters": "",
                class: "py-0 px-1"
              }, {
                default: h(() => [
                  m(u, null, {
                    default: h(() => [
                      m(c, null, {
                        default: h(() => [
                          C(
                            w(e.$t("measurement.value.groundPoint")),
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
                  m(u, { class: "d-flex justify-end" }, {
                    default: h(() => [
                      m(c, null, {
                        default: h(() => [
                          C(
                            w(e.values.groundAltitude),
                            1
                            /* TEXT */
                          )
                        ]),
                        _: 1
                        /* STABLE */
                      }),
                      m(d, {
                        class: "px-1",
                        actions: [e.getCopyAction(e.values.groundAltitude)]
                      }, null, 8, ["actions"])
                    ]),
                    _: 1
                    /* STABLE */
                  })
                ]),
                _: 1
                /* STABLE */
              })
            ])) : k("v-if", !0)
          ]),
          _: 1
          /* STABLE */
        }, 8, ["heading", "header-actions"])) : k("v-if", !0),
        e.targetFeature && (((b = e.values) == null ? void 0 : b.type) === e.MeasurementType.Distance2D || ((B = e.values) == null ? void 0 : B.type) === e.MeasurementType.Distance3D) ? (V(), R(p, {
          key: 2,
          heading: "measurement.value.points"
        }, {
          default: h(() => [
            m(i, {
              items: e.values.vertexPositions,
              "item-key": "id",
              headers: e.headers,
              "show-searchbar": !1
            }, null, 8, ["items", "headers"])
          ]),
          _: 1
          /* STABLE */
        })) : k("v-if", !0)
      ];
    }),
    _: 1
    /* STABLE */
  }, 8, ["disable-add", "disable-new", "onNewClicked", "onAddClicked"]);
}
const fs = /* @__PURE__ */ Xe(ls, [["render", hs], ["__scopeId", "data-v-cd802107"]]);
function Te(e, s) {
  const t = e.templateFeature.getProperties();
  delete t.geometry, s.setStyle(e.templateFeature.getStyle()), s[E] = e, Object.keys(t).length && s.setProperties(t), e.type === f.ObliqueHeight2D && (s[Dt] = !0, s[Ue] = !0);
}
function ps(e) {
  const s = new dt({
    projection: ee.toJSON(),
    zIndex: mt,
    vectorProperties: {
      eyeOffset: [0, 0, -5]
    }
  });
  gt(s), s.activate().catch(() => {
  }), e.layers.add(s);
  const t = new ht({});
  t.style = Le(!0), s.setHighlightStyle(t), s.setStyle(Le(!1));
  const n = [
    s.getSource().on("addfeature", (o) => {
      o.feature && e.maps.eventHandler.featureInteraction.excludeFromPickPosition(
        o.feature
      );
    }),
    s.getSource().on("removefeature", (o) => {
      o.feature && e.maps.eventHandler.featureInteraction.includeInPickPosition(
        o.feature
      );
    })
  ];
  return { layer: s, destroy: () => {
    ue(n), s.deactivate(), e.layers.remove(s), s.destroy();
  } };
}
function Pe(e, s, t) {
  switch (e) {
    case f.Position2D:
      return new rs({ app: s, manager: t });
    case f.Position3D:
      return new ts({ app: s, manager: t });
    case f.Distance2D:
      return new We({ app: s, manager: t });
    case f.Distance3D:
      return new ss({ app: s, manager: t });
    case f.Area2D:
      return new qe({ app: s, manager: t });
    case f.Area3D:
      return new Ke({ app: s, manager: t });
    case f.Height3D:
      return new Je({ app: s, manager: t });
    default:
      return new Ze({ app: s, manager: t });
  }
}
function Qe(e, s) {
  const { type: t } = e[E], n = new Set(
    s.getFeatures().filter(
      (r) => r[E].type === t
    ).map((r) => r.get("title"))
  );
  let a = "", o = 1;
  for (; !a; )
    n.has(`${t}-${o}`) || (a = `${t}-${o}`), o += 1;
  e.set("title", a);
}
function ys(e, s) {
  if (ge(e)) {
    const t = (n) => {
      if (!(n != null && n.target && n.target.tagName === "INPUT"))
        switch (n.code) {
          case "Escape":
            s();
            break;
          case "Enter":
            e.finish();
            break;
        }
    };
    return window.addEventListener("keydown", t), () => {
      window.removeEventListener("keydown", t);
    };
  } else if (Ye(e)) {
    let t = function(n) {
      n.target && n.target.tagName === "INPUT" || n.code === "Escape" && e.stop();
    };
    return window.addEventListener("keydown", t), () => {
      window.removeEventListener("keydown", t);
    };
  }
  return () => {
  };
}
function Ee(e, s) {
  return {
    id: s,
    component: fs,
    state: {
      headerTitle: "measurement.header.title",
      headerIcon: "",
      styles: { height: "auto" },
      infoUrlCallback: e.getHelpUrlCallback("tools/measurementTool.html")
    }
  };
}
function vs(e, s, t, n, a) {
  const o = t.getId();
  a.title = t.get("title") ?? "Object";
  let r = !!s.featureVisibility.hiddenObjects[o];
  const i = be({
    name: "hideAction",
    icon: r ? "$vcsCheckbox" : "$vcsCheckboxChecked",
    callback() {
      r ? (s.featureVisibility.showObjects([o]), r = !1, this.icon = "$vcsCheckboxChecked") : (s.featureVisibility.hideObjects([o]), r = !0, this.icon = "$vcsCheckbox");
    }
  }), c = s.featureVisibility.changed.addEventListener(
    (y) => {
      (y.action === De.HIDE || y.action === De.SHOW) && y.ids.some((b) => b === a.name) && (r = !!s.featureVisibility.hiddenObjects[a.name], i.icon = r ? "$vcsCheckbox" : "$vcsCheckboxChecked");
    }
  );
  a.selectionChanged = (y) => {
    y && r && i.callback();
  }, a.titleChanged = (y) => {
    a.title = y, t.set("title", y);
  };
  const u = Ht(
    { name: "measurement.category.zoomTo" },
    t,
    e.maps
  );
  a.actions.push(i, u);
  let d = () => {
  };
  const l = (y) => {
    a.disabled = !(y != null && y.hasDepth);
  }, g = (y) => {
    d(), y instanceof de || y instanceof z || y instanceof Q ? a.disabled = !1 : y instanceof K ? (d = y.currentImageChanged.addEventListener(l), l(y.currentPanoramaImage)) : a.disabled = !0;
  }, p = e.maps.mapActivated.addEventListener(g);
  g(e.maps.activeMap), a.destroy = () => {
    c(), p(), d();
  };
}
function Ds(e, s, t) {
  const n = ft(
    // @ts-expect-error using private as key
    new pt("id_"),
    () => e.dynamicModuleId,
    (l) => yt(l),
    (l) => {
      const g = vt(l).features[0], p = g.get(Fe), y = Pe(p, e, this);
      return Te(y, g), Qe(g, s), g;
    }
  ), a = $t(
    e,
    e.categoryManager.add(
      {
        id: "simpleMeasurementCategory",
        title: "measurement.category.title",
        collection: n,
        selectable: !0,
        removable: !0,
        renamable: !0
      },
      S
    ),
    {
      editor: (l) => Ee(
        e,
        a.getEditorWindowId(l)
      ),
      selectionBased: !0
    }
  ), { action: o, destroy: r } = It(
    a.selection,
    () => {
      as(s, a);
    },
    S
  ), { action: i, destroy: c } = Lt(
    async (l) => {
      const g = s.getSource().on("addfeature", ({ feature: p }) => {
        const y = p == null ? void 0 : p.get(Fe);
        if (y) {
          const b = Pe(
            y,
            e,
            this
          );
          Te(b, p), n.add(p), b.calcMeasurementResult(p).catch((B) => {
            Z(S).error(
              "Error calculating measurement result",
              B
            );
          }), p.changed();
        }
      });
      return await Rt(l, e, s), ue(g), !0;
    },
    e.windowManager,
    S,
    "category-manager"
  ), { action: u, destroy: d } = is(s, t, a);
  return a.addActions([
    { action: u, owner: S },
    i,
    o
  ]), a.addItemMapping({
    mappingFunction: vs.bind(null, e, s),
    owner: S
  }), {
    collectionComponent: a,
    destroy: () => {
      e.categoryManager.remove(a.id), n.destroy(), c(), r(), d();
    }
  };
}
function Ps(e) {
  const s = ye(), t = ye(), n = ye(), { layer: a, destroy: o } = ps(e), { collectionComponent: r, destroy: i } = Ds(
    e,
    a,
    t
  ), { collection: c } = r, u = r.getEditorWindowId(), d = () => {
    a.featureVisibility.clearHighlighting();
    const v = {};
    r.selection.value.forEach((M) => {
      v[M.name] = a.highlightStyle;
    }), t.value && (v[t.value.getId()] = a.highlightStyle), a.featureVisibility.highlight(v);
  };
  let l = () => {
  };
  const g = W(
    t,
    (v, M) => {
      if (l(), v) {
        n.value = v[E], n.value.calcMeasurementResult(v).catch((L) => {
          Z(S).error("Error calculating measurement result", L);
        });
        const G = v.getGeometry().on("change", () => {
          v[E].calcMeasurementResult(v).then((L) => {
            L && v.changed();
          }).catch((L) => {
            Z(S).error(
              "Error calculating measurement result",
              L
            );
          });
        });
        l = () => {
          ue(G), l = () => {
          };
        };
        const x = r.selection.value.map(
          (L) => L.name
        ), N = v.getId();
        if (!(x.length === 1 && x[0] === N)) {
          const L = r.getListItemForItem(v);
          L && (r.selection.value = [L]);
        }
        e.windowManager.has(u) || e.windowManager.add(
          {
            ...Ee(e, u),
            slot: $e.DYNAMIC_CHILD,
            parentId: Oe
          },
          S
        );
      } else
        n.value = void 0, r.selection.value.length === 1 && (r.selection.value = []);
      M && !c.has(M) && a.getSource().removeFeature(M), d();
    }
  ), p = W(
    r.selection,
    (v) => {
      if (v.length === 1) {
        const M = c.getByKey(v[0].name);
        M && M !== t.value && (t.value = M);
      } else t.value && (t.value = void 0);
      d();
    }
  );
  let y;
  function b() {
    var M;
    const v = () => {
      a.removeFeaturesById(
        a.getFeatures().filter(
          (G) => {
            var x;
            return ((x = G[E]) == null ? void 0 : x.type) === f.ObliqueHeight2D;
          }
        ).map((G) => G.getId())
      );
    };
    return (M = e.maps.mapActivated) == null ? void 0 : M.addEventListener(() => {
      v(), e.maps.activeMap instanceof Q && (y == null || y(), y = e.maps.activeMap.imageChanged.addEventListener(() => {
        v();
      }));
    });
  }
  const B = b();
  let te = () => {
  };
  function _(v) {
    var M, G;
    if (te(), (G = (M = s.value) == null ? void 0 : M.stop) == null || G.call(M), s.value = v, s.value) {
      const x = [
        s.value.stopped.addEventListener(() => {
          _();
        }),
        ys(s.value, () => {
          e.windowManager.has(u) && e.windowManager.remove(u);
        })
      ];
      ge(s.value) && x.push(
        s.value.featureCreated.addEventListener((N) => {
          Te(n.value, N), Qe(N, a), t.value = N;
        })
      ), te = () => {
        x.forEach((N) => {
          N();
        });
      };
    } else
      te = () => {
      };
  }
  const P = a.source.on("removefeature", (v) => {
    v.feature && (v.feature === t.value && (t.value = void 0), c.has(v.feature) && c.remove(v.feature));
  });
  return c.removed.addEventListener((v) => {
    a.getSource().removeFeature(v);
  }), {
    currentSession: s,
    currentFeature: t,
    get layer() {
      return a;
    },
    get collection() {
      return c;
    },
    get windowId() {
      return u;
    },
    currentMeasurementMode: n,
    async startCreateSession(v) {
      t.value = void 0, await Ge(), n.value = Pe(
        v,
        e,
        this
      );
      const M = ut(
        e,
        a,
        n.value.geometryType,
        n.value.createTemplateFeature().get("olcs_altitudeMode"),
        {
          hideSegmentLength: !0
        }
      );
      M.creationFinished.addEventListener(() => {
        _();
      }), _(M), e.windowManager.has(u) || e.windowManager.add(
        {
          ...Ee(e, u),
          slot: $e.DYNAMIC_CHILD,
          parentId: Oe
        },
        S
      );
    },
    startEditSession(v) {
      const M = ct(e, a, void 0, {
        hideSegmentLength: !0
      });
      _(M), M.setFeature(v), t.value = v;
    },
    stop() {
      _(), !t.value && e.windowManager.has(u) && e.windowManager.remove(u);
    },
    persistCurrentFeature() {
      t.value && !c.has(t.value) && n.value && (c.add(t.value), r.selection.value = [
        r.getListItemForItem(t.value)
      ]);
    },
    destroy() {
      _(), ue(P), o(), y == null || y(), B(), g(), i(), l(), te(), p(), e.windowManager.remove(u);
    }
  };
}
const et = {
  [f.Position3D]: "$vcs3dPoint",
  [f.Position2D]: "$vcs2dPoint",
  [f.Distance2D]: "$vcs2dDistance",
  [f.Area2D]: "$vcs2dArea",
  [f.Distance3D]: "$vcs3dDistance",
  [f.Area3D]: "$vcs3dArea",
  [f.Height3D]: "$vcs3dHeight",
  [f.ObliqueHeight2D]: "$vcs2dHeightOblique"
};
function U(e) {
  return {
    name: e,
    title: `measurement.create.tooltip.${e}`,
    icon: et[e],
    geometryType: Qt[e]
  };
}
function bs(e, s) {
  const { config: t } = s.plugins.getByKey(S);
  function n() {
    return s.windowManager.has(e.windowId);
  }
  function a() {
    var p, y;
    const { activeMap: l } = s.maps, g = ((p = t[l == null ? void 0 : l.className]) == null ? void 0 : p.disable) ?? !0;
    return !g && l instanceof K ? !((y = l.currentPanoramaImage) != null && y.hasDepth) : g;
  }
  const o = {
    type: Gt.SELECT,
    action: be({
      name: "creation",
      currentIndex: 0,
      active: n(),
      disabled: a(),
      callback() {
        n() ? s.windowManager.remove(e.windowId) : e.startCreateSession(this.tools[this.currentIndex].name).catch((l) => {
          Z(S).error("Error starting create session ", l);
        });
      },
      selected(l) {
        this.currentIndex = l, e.startCreateSession(this.tools[this.currentIndex].name).catch((g) => {
          Z(S).error("Error starting create session ", g);
        });
      },
      tools: [
        U(f.Position2D),
        U(f.Position3D),
        U(f.Distance2D),
        U(f.Distance3D),
        U(f.Area2D),
        U(f.Area3D),
        U(f.ObliqueHeight2D),
        U(f.Height3D)
      ]
    })
  }, r = s.toolboxManager.add(o, S).id;
  function i() {
    o.action.tools.forEach((g) => {
      g.disabled = !0;
    });
    const l = a();
    if (o.action.disabled = l, !l) {
      const g = o.action.tools.filter((y) => {
        var b;
        return (b = Pe(
          y.name,
          s,
          e
        )) == null ? void 0 : b.supportedMaps.includes(s.maps.activeMap.className);
      });
      g.forEach((y) => {
        y.disabled = !1;
      }), o.action.disabled = g.length === 0;
      const { currentIndex: p } = o.action;
      g.includes(o.action.tools[p]) || (o.action.currentIndex = o.action.tools.findIndex(
        (y) => !y.disabled
      ));
    }
    e.currentFeature.value = void 0, e.stop();
  }
  let c = () => {
  };
  function u(l) {
    c(), i(), l instanceof K && (c = l.currentImageChanged.addEventListener(() => {
      i();
    }));
  }
  u(s.maps.activeMap);
  const d = [
    s.maps.mapActivated.addEventListener(u),
    s.windowManager.added.addEventListener(() => {
      o.action.active = n();
    }),
    s.windowManager.removed.addEventListener(() => {
      o.action.active = n();
    }),
    W(
      e.currentMeasurementMode,
      (l) => {
        if (l) {
          const g = l.type, p = o.action.tools.findIndex(
            (y) => y.name === g
          );
          p >= 0 && o.action.currentIndex !== p && (o.action.currentIndex = p);
        }
      },
      { immediate: !0 }
    ),
    () => {
      c();
    }
  ];
  return () => {
    s.toolboxManager.remove(r), d.forEach((l) => {
      l();
    });
  };
}
function Ms(e, s) {
  e.contextMenuManager.addEventHandler((t) => {
    const n = [];
    if (t.feature && t.feature[Pt] === s.layer.name) {
      const a = t.feature;
      !ge(s.currentSession.value) && s.currentFeature.value !== a && n.push({
        id: "measurement-select",
        name: "measurement.select",
        icon: "$vcsPen",
        disabled: !es(a, t.map),
        callback() {
          s.currentFeature.value = a;
        }
      });
    }
    return n;
  }, S);
}
const Cs = He({
  name: "MeasurementConfigEditor",
  components: {
    AbstractConfigEditor: Nt,
    VCol: je,
    VContainer: Zt,
    VRow: ze,
    VcsFormSection: Ne,
    VcsLabel: xe,
    VcsTextField: xt
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
    const s = e.getConfig(), t = ne({ ...s, ...Be(s) });
    function n() {
      var a, o;
      (t.value[F.Oblique].disable || t.value[F.Oblique].decimalPlacesZ) && ((a = t.value[F.Oblique]) == null || delete a.decimalPlacesZ), (t.value[F.Cesium].disable || t.value[F.Cesium].decimalPlacesZ) && ((o = t.value[F.Cesium]) == null || delete o.decimalPlacesZ), e.setConfig(structuredClone(Ct(t.value)));
    }
    return {
      localConfig: t,
      apply: n,
      MapNames: F
    };
  }
}), ws = { key: 0 };
function As(e, s, t, n, a, o) {
  const r = $("VcsLabel"), i = $("v-col"), c = $("VcsTextField"), u = $("v-row"), d = $("VcsFormSection"), l = $("v-container"), g = $("AbstractConfigEditor");
  return V(), R(g, wt({ ...e.$attrs, ...e.$props }, { onSubmit: e.apply }), {
    default: h(() => [
      m(l, { class: "pa-0" }, {
        default: h(() => [
          (V(!0), Y(
            At,
            null,
            St(Object.values(e.MapNames), (p, y) => (V(), R(d, {
              key: y,
              heading: p.replace("Map", " Map"),
              "start-open": "",
              "header-actions": [
                {
                  name: "toggle",
                  title: `measurement.config.${e.localConfig[p].disable ? "enable" : "disable"}`,
                  icon: `$vcsCheckbox${e.localConfig[p].disable ? "" : "Checked"}`,
                  callback: () => {
                    e.localConfig[p].disable = !e.localConfig[p].disable;
                  }
                }
              ]
            }, {
              default: h(() => [
                e.localConfig[p].disable ? k("v-if", !0) : (V(), Y("div", ws, [
                  m(
                    u,
                    { "no-gutters": "" },
                    {
                      default: h(() => [
                        m(
                          i,
                          null,
                          {
                            default: h(() => [
                              m(r, {
                                "html-for": `${p}_decimalPlaces`,
                                required: ""
                              }, {
                                default: h(() => [
                                  C(
                                    w(e.$t("measurement.config.decimalPlaces")),
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
                          i,
                          null,
                          {
                            default: h(() => [
                              m(c, {
                                id: `${p}_decimalPlaces`,
                                modelValue: e.localConfig[p].decimalPlaces,
                                "onUpdate:modelValue": (b) => e.localConfig[p].decimalPlaces = b,
                                modelModifiers: { number: !0 },
                                type: "number",
                                min: "0",
                                rules: [
                                  (b) => (!!b || b === 0) && b >= 0 || "measurement.config.errorInput"
                                ]
                              }, null, 8, ["id", "modelValue", "onUpdate:modelValue", "rules"])
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
                  p !== e.MapNames.OpenLayers ? (V(), R(
                    u,
                    {
                      key: 0,
                      "no-gutters": ""
                    },
                    {
                      default: h(() => [
                        m(
                          i,
                          null,
                          {
                            default: h(() => [
                              m(r, {
                                "html-for": `${p}_decimalPlacesZ`
                              }, {
                                default: h(() => [
                                  C(
                                    w(e.$t("measurement.config.decimalPlacesZ")),
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
                          i,
                          null,
                          {
                            default: h(() => [
                              m(c, {
                                id: `${p}_decimalPlacesZ`,
                                modelValue: e.localConfig[p].decimalPlacesZ,
                                "onUpdate:modelValue": (b) => e.localConfig[p].decimalPlacesZ = b,
                                modelModifiers: { number: !0 },
                                placeholder: String(e.localConfig[p].decimalPlaces),
                                min: "0",
                                rules: [
                                  (b) => b >= 0 || "measurement.config.errorInput"
                                ]
                              }, null, 8, ["id", "modelValue", "onUpdate:modelValue", "placeholder", "rules"])
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
                  )) : k("v-if", !0),
                  p === e.MapNames.Cesium ? (V(), R(
                    u,
                    {
                      key: 1,
                      "no-gutters": ""
                    },
                    {
                      default: h(() => [
                        m(
                          i,
                          null,
                          {
                            default: h(() => [
                              m(r, {
                                "html-for": `${p}_decimalPlacesAngle`,
                                required: ""
                              }, {
                                default: h(() => [
                                  C(
                                    w(e.$t("measurement.config.decimalPlacesAngle")),
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
                          i,
                          null,
                          {
                            default: h(() => [
                              m(c, {
                                id: `${p}_decimalPlacesAngle`,
                                modelValue: e.localConfig[p].decimalPlacesAngle,
                                "onUpdate:modelValue": (b) => e.localConfig[p].decimalPlacesAngle = b,
                                modelModifiers: { number: !0 },
                                type: "number",
                                min: "0",
                                rules: [
                                  (b) => (!!b || b === 0) && b >= 0 || "measurement.config.errorInput"
                                ]
                              }, null, 8, ["id", "modelValue", "onUpdate:modelValue", "rules"])
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
                  )) : k("v-if", !0)
                ]))
              ]),
              _: 2
              /* DYNAMIC */
            }, 1032, ["heading", "header-actions"]))),
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
  }, 16, ["onSubmit"]);
}
const Ss = /* @__PURE__ */ Xe(Cs, [["render", As]]);
function Is(e) {
  let s = () => {
  }, t;
  const n = Be(e);
  return {
    get name() {
      return S;
    },
    get version() {
      return Kt;
    },
    get mapVersion() {
      return Yt;
    },
    get config() {
      return n;
    },
    get manager() {
      if (!t)
        throw new Error("Measurement manager not yet initialized");
      return t;
    },
    initialize(a) {
      const o = [
        a.moduleAdded.addEventListener(() => {
          var i;
          (i = t == null ? void 0 : t.currentMeasurementMode.value) == null || i.setProjection(
            we()
          );
        }),
        a.moduleRemoved.addEventListener(() => {
          var i;
          (i = t == null ? void 0 : t.currentMeasurementMode.value) == null || i.setProjection(
            we()
          );
        })
      ];
      t = Ps(a);
      const r = bs(t, a);
      return Ms(a, t), s = () => {
        o.forEach((i) => {
          i();
        }), r(), t == null || t.destroy();
      }, Promise.resolve();
    },
    getDefaultOptions: ke,
    toJSON() {
      const a = {}, o = ke();
      function r(i) {
        a[i] || Object.assign(a, { [i]: {} });
      }
      return Object.values(F).forEach((i) => {
        n[i].disable !== o[i].disable && (r(i), a[i].disable = n[i].disable), n[i].decimalPlaces !== o[i].decimalPlaces && (r(i), a[i].decimalPlaces = n[i].decimalPlaces);
      }), [F.Cesium, F.Oblique, F.Panorama].forEach(
        (i) => {
          n[i].decimalPlacesZ !== o[i].decimalPlacesZ && (r(i), a[i].decimalPlacesZ = n[i].decimalPlacesZ);
        }
      ), n[F.Cesium].decimalPlacesAngle !== o[F.Cesium].decimalPlacesAngle && (r(F.Cesium), a[F.Cesium].decimalPlacesAngle = n[F.Cesium].decimalPlacesAngle), a;
    },
    i18n: {
      en: {
        measurement: {
          header: {
            title: "Temporary measurement"
          },
          create: {
            [f.Position2D]: "2D-Point",
            [f.Position3D]: "3D-Point",
            [f.Distance2D]: "2D-Distance",
            [f.Distance3D]: "3D-Distance",
            [f.Area2D]: "2D-Area",
            [f.Area3D]: "3D-Area",
            [f.ObliqueHeight2D]: "2D-Height",
            [f.Height3D]: "3D-Height",
            tooltip: {
              [f.Position2D]: "Measure 2D-Point",
              [f.Position3D]: "Measure 3D-Point",
              [f.Distance2D]: "Measure 2D-Distance",
              [f.Distance3D]: "Measure 3D-Distance",
              [f.Area2D]: "Measure 2D-Area",
              [f.Area3D]: "Measure 3D-Area",
              [f.ObliqueHeight2D]: "Measure 2D-Height",
              [f.Height3D]: "Measure 3D-Height"
            },
            noFeature: "Click on the map to start measuring",
            failed: "Failed to create a valid geometry for the measurement"
          },
          value: {
            point: "Point",
            points: "Measurement Points",
            distance: "Distance",
            area: "Area",
            circumference: "Circumference",
            height: "Height",
            groundPoint: "Ground Point",
            heightPoint: "Height Point",
            horizontalDistance: "Horizontal Distance",
            beta: "Beta",
            alpha: "Alpha"
          },
          edit: "Edit measurement",
          select: "Select measurement",
          category: {
            title: "Measurements",
            zoomTo: "Zoom to",
            remove: "Remove",
            removeSelected: "Remove selection"
          },
          config: {
            title: "Measurement Config Editor",
            decimalPlaces: "Number of decimals",
            decimalPlacesZ: "Number of altimetry decimals",
            decimalPlacesAngle: "Number of angle decimals",
            disable: "Disable measurements for this map",
            enable: "Enable measurements for this map",
            errorInput: "Input must be a positive number"
          },
          hint: {
            oblique: {
              distance: "Please notice that measurements only provide correct results if measured on the ground.",
              height: "Please notice that measurements only provide correct results if the start point is on the ground. Since the measurement depends on the local image coordinate system, it cannot be edited nor added to My Workspace."
            }
          }
        }
      },
      de: {
        measurement: {
          header: {
            title: "Temporäre Messung"
          },
          create: {
            [f.Position2D]: "2D-Punkt",
            [f.Position3D]: "3D-Punkt",
            [f.Distance2D]: "2D-Distanz",
            [f.Distance3D]: "3D-Distanz",
            [f.Area2D]: "2D-Fläche",
            [f.Area3D]: "3D-Fläche",
            [f.ObliqueHeight2D]: "2D-Höhe",
            [f.Height3D]: "3D-Höhe",
            tooltip: {
              [f.Position2D]: "2D-Punkt messen",
              [f.Position3D]: "3D-Punkt messen",
              [f.Distance2D]: "2D-Distanz messen",
              [f.Distance3D]: "3D-Distanz messen",
              [f.Area2D]: "2D-Fläche messen",
              [f.Area3D]: "3D-Fläche messen",
              [f.ObliqueHeight2D]: "2D-Höhe messen",
              [f.Height3D]: "3D-Höhe messen"
            },
            noFeature: "Klicken Sie auf die Karte, um eine Messung zu starten",
            failed: "Es konnte keine gültige Geometrie für die Messung erstellt werden"
          },
          value: {
            point: "Punkt",
            points: "Messpunkte",
            distance: "Distanz",
            area: "Fläche",
            circumference: "Umfang",
            height: "Höhe",
            groundPoint: "Bodenpunkt",
            heightPoint: "Höhenpunkt",
            horizontalDistance: "Horizontale Distanz",
            beta: "Beta",
            alpha: "Alpha"
          },
          edit: "Messung editieren",
          select: "Messung selektieren",
          category: {
            title: "Messungen",
            zoomTo: "Hin zoomen",
            remove: "Entfernen",
            removeSelected: "Selektion löschen"
          },
          config: {
            title: "Messung Konfiguration",
            decimalPlaces: "Anzahl der Dezimalstellen",
            decimalPlacesZ: "Anzahl der Höhen-Dezimalstellen",
            decimalPlacesAngle: "Anzahl der Winkeldezimalstellen",
            disable: "Messung für diese Karte deaktivieren",
            enable: "Messung für diese Karte aktivieren",
            errorInput: "Eingabe muss eine positive Zahl sein"
          },
          hint: {
            oblique: {
              distance: "Bitte beachten Sie, dass Messungen nur dann korrekte Ergebnisse liefern, wenn sie auf dem Boden gemessen werden.",
              height: "Bitte beachten Sie, dass Messungen nur korrekte Ergebnisse liefern, wenn der Startpunkt der Messung auf einen Bodenpunkt gesetzt wird. Da die Messung vom lokalen Bildkoordinatensystem abhängt, kann sie weder bearbeitet noch zu meinem Arbeitsbereich hinzugefügt werden."
            }
          }
        }
      }
    },
    getConfigEditors() {
      return [
        {
          component: Ss,
          title: "measurement.config.title"
        }
      ];
    },
    destroy() {
      s();
    }
  };
}
export {
  Is as default
};
