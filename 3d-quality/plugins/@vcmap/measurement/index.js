
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
} await loadCss('data:text/css;base64,LmQtZ3JpZFtkYXRhLXYtMDY5OGYyNDVde2Rpc3BsYXk6Z3JpZDtncmlkLXRlbXBsYXRlLWNvbHVtbnM6MWZyIDFmcn0K');var Ke = Object.defineProperty;
var Ye = (e, s, t) => s in e ? Ke(e, s, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[s] = t;
var A = (e, s, t) => Ye(e, typeof s != "symbol" ? s + "" : s, t);
import { GeometryType as V, originalFeatureSymbol as Q, getDefaultProjection as pe, CesiumMap as N, OpenlayersMap as ie, ObliqueMap as Y, getTextFromOptions as Je, getFlatCoordinateReferences as te, alreadyTransformedToImage as Xe, transformFromImage as Ce, wgs84Projection as de, Projection as _, mercatorProjection as U, getDefaultHighlightStyle as se, defaultVectorStyle as ne, transformToImage as Qe, checkLineIntersection as et, cartesian3DDistance as tt, SessionType as k, VectorStyleItem as st, startCreateFeatureSession as nt, startSelectFeaturesSession as Ae, startEditGeometrySession as at, SelectionMode as ge, VectorLayer as it, maxZIndex as rt, markVolatile as ot, doNotTransform as lt, writeGeoJSON as ct, vcsLayerName as ut, Category as dt, parseGeoJSON as Te, writeGeoJSONFeature as mt, FeatureVisibilityAction as me, Viewpoint as ht, Extent as gt, moduleIdSymbol as ft } from "../../../assets/core.js";
import { shallowRef as G, watch as R, reactive as Me, defineComponent as Le, inject as Fe, ref as Ie, computed as we, onUnmounted as yt, resolveComponent as $, openBlock as I, createBlock as B, withCtx as y, createVNode as h, createCommentVNode as E, createElementBlock as W, createTextVNode as C, toDisplayString as M, toRaw as pt, mergeProps as vt, Fragment as Dt, renderList as bt } from "../../../assets/vue.js";
import { ToolboxType as Pt, VcsDataTable as Ct, VcsFormSection as Ve, VcsLabel as $e, VcsActionButtonList as Mt, VcsWorkspaceWrapper as St, getPluginAssetUrl as At, downloadText as Tt, makeEditorCollectionComponentClass as Ft, createListExportAction as wt, createListImportAction as kt, importIntoLayer as Et, WindowSlot as Lt, createSupportedMapMappingFunction as It, AbstractConfigEditor as Vt, VcsTextField as $t } from "../../../assets/ui.js";
import { ol$Feature as Ot, ol$sphere$getDistance as ve, ol$geom$LineString as ae, ol$style$Style as q, ol$geom$Point as Z, ol$sphere$getArea as xt, ol$geom$Polygon as Oe, ol$proj$transform as ke, ol$Observable$unByKey as ee, Feature as _t, ol$extent$isEmpty as Ht } from "../../../assets/ol.js";
import { Cartesian3 as D, Matrix3 as le, Cartesian2 as jt, PolygonPipeline as Gt, Math as Rt } from "../../../assets/cesium.js";
import { VRow as xe, VCol as _e, VImg as zt, VContainer as Bt } from "../../../assets/vuetify.js";
const x = "@vcmap/measurement", Nt = "4.0.0", qt = "^6.2";
var L = /* @__PURE__ */ ((e) => (e.OpenLayers = "OpenlayersMap", e.Oblique = "ObliqueMap", e.Cesium = "CesiumMap", e.Panorama = "PanoramaMap", e))(L || {});
function De() {
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
      disable: !0,
      decimalPlaces: 2
    }
  };
}
function He(e) {
  const s = De();
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
      ...s.PanoramaMap
    }
  };
}
const w = Symbol("measurementModeSymbol"), Se = Symbol("doNotEditAndPersistentSymbol"), je = "vcs_measurement_type";
var f = /* @__PURE__ */ ((e) => (e.Position3D = "Position3D", e.Position2D = "Position2D", e.Distance2D = "Distance2D", e.Area2D = "Area2D", e.Distance3D = "Distance3D", e.Area3D = "Area3D", e.Height3D = "Height3D", e.ObliqueHeight2D = "ObliqueHeight2D", e))(f || {});
const Ut = {
  Position3D: V.Point,
  Position2D: V.Point,
  Distance2D: V.LineString,
  Area2D: V.Polygon,
  Distance3D: V.LineString,
  Area3D: V.Polygon,
  Height3D: V.LineString,
  ObliqueHeight2D: V.LineString
};
function K(e) {
  var s, t;
  return e[w] ? e[w].values.value : (t = (s = e[Q]) == null ? void 0 : s[w]) == null ? void 0 : t.values.value;
}
function Wt(e, s) {
  var n, i, r;
  return (((n = e[w]) == null ? void 0 : n.supportedMaps) ?? ((r = (i = e[Q]) == null ? void 0 : i[w]) == null ? void 0 : r.supportedMaps) ?? []).includes(s.className);
}
class O {
  constructor(s) {
    A(this, "app");
    A(this, "manager");
    A(this, "projection");
    A(this, "decimalPlaces");
    A(this, "decimalPlacesZ");
    A(this, "decimalPlacesAngle");
    A(this, "templateFeature");
    A(this, "values");
    var i;
    this.app = s.app, this.manager = s.manager, this.projection = pe(), this.templateFeature = this.createTemplateFeature(), this.values = G(this.defaultValues);
    const { config: t } = this.app.plugins.getByKey(x), n = (i = this.app.maps.activeMap) == null ? void 0 : i.className;
    this.decimalPlaces = t[n].decimalPlaces, this.decimalPlacesAngle = t[L.Cesium].decimalPlacesAngle, (n === L.Cesium || n === L.Oblique) && (this.decimalPlacesZ = t[n].decimalPlacesZ ?? this.decimalPlaces);
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
    return V.Polygon;
  }
  // eslint-disable-next-line class-methods-use-this
  get supportedMaps() {
    return [N.className, ie.className, Y.className];
  }
  getValue(s, t = !1, n = !1) {
    let i = Math.abs(s);
    const r = t ? 2 : 1;
    let a = t ? "m²" : "m";
    const o = 1e3 ** r;
    return i > o * (t ? 1 : 10) && (i /= o, a = `k${a}`), `${(s < 0 ? "-" : "") + i.toFixed(n ? this.decimalPlacesZ : this.decimalPlaces)} ${a}`;
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
    const s = new Ot();
    return s.set(je, this.type), s;
  }
  static getDefaultText() {
    return Je({
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
class Ge extends O {
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
    return V.LineString;
  }
  // eslint-disable-next-line class-methods-use-this
  get supportedMaps() {
    return [N.className, ie.className, Y.className];
  }
  calcMeasurementResult(t) {
    var n;
    return this.calcMeasurementTimeout && (clearTimeout(this.calcMeasurementTimeout), this.calcMeasurementTimeout = void 0, (n = this.calcMeasurementResolve) == null || n.call(this, !1), this.calcMeasurementResolve = void 0), this.check(t) ? new Promise((i) => {
      const r = this.app.maps.activeMap, a = t.getGeometry(), o = te(a);
      if (a[Xe])
        this.calcMeasurementResolve = i, this.calcMeasurementTimeout = setTimeout(async () => {
          this.calcMeasurementResolve = void 0, this.calcMeasurementTimeout = void 0;
          const l = await Promise.all(
            o.map((u) => Ce(r.currentImage, u, {
              dataProjection: de
            }).then((c) => c.coords))
          ), d = [];
          for (let u = 0; u < l.length; u++) {
            const c = _.transform(
              this.projection,
              de,
              l[u]
            );
            d.push({
              id: (d.length + 1).toString(),
              name: void 0,
              x: +c[0].toFixed(this.decimalPlaces),
              y: +c[1].toFixed(this.decimalPlaces),
              z: 0
            });
          }
          this.values.value.vertexPositions = d, this.values.value.distance = this.getValue(
            this.calculateDistance(l)
          ), i(!0);
        }, 30);
      else {
        const l = [];
        for (let d = 0; d < o.length; d++) {
          const u = _.transform(
            this.projection,
            U,
            o[d]
          );
          l.push({
            id: (l.length + 1).toString(),
            name: void 0,
            x: +u[0].toFixed(this.decimalPlaces),
            y: +u[1].toFixed(this.decimalPlaces),
            z: 0
          });
        }
        for (let d = 0; d < o.length; d++)
          _.mercatorToWgs84(o[d], !0);
        this.values.value = {
          type: this.type,
          distance: this.getValue(this.calculateDistance(o)),
          vertexPositions: l
        }, i(!0);
      }
    }) : Promise.resolve(!1);
  }
  // eslint-disable-next-line class-methods-use-this
  calculateDistance(t) {
    const n = t.length, i = new Array(n - 1);
    let r = 0;
    for (let a = 1; a < n; a++)
      i[a - 1] = ve(
        t[a - 1],
        t[a]
      ), r += i[a - 1];
    return r;
  }
  createTemplateFeature() {
    const t = super.createTemplateFeature();
    return t.setGeometry(new ae([])), t;
  }
  static getStyleFunction(t) {
    const n = t ? se() : ne.style, i = O.getDefaultText(), r = new q({
      text: i,
      geometry: (a) => {
        const o = a.getGeometry().getCoordinates();
        return o.length > 1 ? new Z(o[o.length - 1]) : a.getGeometry();
      }
    });
    return (a) => {
      var o;
      return i.setText((o = K(a)) == null ? void 0 : o.distance), [n, r];
    };
  }
}
class Zt extends O {
  // eslint-disable-next-line class-methods-use-this
  get type() {
    return f.Position3D;
  }
  // eslint-disable-next-line class-methods-use-this
  get geometryType() {
    return V.Point;
  }
  // eslint-disable-next-line class-methods-use-this
  get supportedMaps() {
    return [N.className];
  }
  calcMeasurementResult(s) {
    if (!this.check(s))
      return Promise.resolve(!1);
    const t = s.getGeometry(), n = te(t), i = _.transform(
      this.projection,
      U,
      n[0]
    ), r = [];
    return r.push({
      id: "",
      name: void 0,
      x: +i[0].toFixed(this.decimalPlaces),
      y: +i[1].toFixed(this.decimalPlaces),
      z: +i[2].toFixed(this.decimalPlacesZ)
    }), this.values.value = { type: this.type, vertexPositions: r }, Promise.resolve(!0);
  }
  createTemplateFeature() {
    const s = super.createTemplateFeature();
    return s.setGeometry(new Z([])), s.set("olcs_altitudeMode", "absolute"), s;
  }
}
class Re extends O {
  // eslint-disable-next-line class-methods-use-this
  get type() {
    return f.Area2D;
  }
  // eslint-disable-next-line class-methods-use-this
  get geometryType() {
    return V.Polygon;
  }
  // eslint-disable-next-line class-methods-use-this
  get supportedMaps() {
    return [N.className, ie.className];
  }
  calcMeasurementResult(s) {
    if (!this.check(s))
      return Promise.resolve(!1);
    const t = s.getGeometry(), n = te(t);
    let i = 0;
    for (let r = 0; r < n.length; r++)
      _.mercatorToWgs84(n[r], !0), r && (i += ve(n[r - 1], n[r])), r === n.length - 1 && (i += ve(n[r], n[0]));
    return this.values.value = {
      type: this.type,
      area: this.getValue(xt(t), !0),
      circumference: this.getValue(i)
    }, Promise.resolve(!0);
  }
  createTemplateFeature() {
    const s = super.createTemplateFeature();
    return s.setGeometry(new Oe([])), s;
  }
  static getStyleFunction(s) {
    const t = s ? se() : ne.style, n = O.getDefaultText(), i = new q({
      text: n,
      geometry: (r) => r.getGeometry().getInteriorPoint()
    });
    return (r) => {
      var a;
      return n.setText((a = K(r)) == null ? void 0 : a.area), [t, i];
    };
  }
}
let ce = new D(), ue = new D();
class Kt extends O {
  // eslint-disable-next-line class-methods-use-this
  get type() {
    return f.Distance3D;
  }
  // eslint-disable-next-line class-methods-use-this
  get geometryType() {
    return V.LineString;
  }
  // eslint-disable-next-line class-methods-use-this
  get supportedMaps() {
    return [N.className];
  }
  calcMeasurementResult(s) {
    if (!this.check(s))
      return Promise.resolve(!1);
    const t = s.getGeometry(), n = te(t), i = [];
    for (let o = 0; o < n.length - 1; o++) {
      const l = _.transform(
        this.projection,
        U,
        n[o]
      );
      i.push({
        id: (i.length + 1).toString(),
        name: void 0,
        x: +l[0].toFixed(this.decimalPlaces),
        y: +l[1].toFixed(this.decimalPlaces),
        z: +l[2].toFixed(this.decimalPlacesZ)
      });
    }
    let r = 0;
    const a = new Array(n.length - 1);
    _.mercatorToWgs84(n[0], !0), ce = D.fromDegrees(
      n[0][0],
      n[0][1],
      n[0][2],
      void 0,
      ce
    );
    for (let o = 1; o < n.length; o++)
      _.mercatorToWgs84(n[o], !0), ue = D.fromDegrees(
        n[o][0],
        n[o][1],
        n[o][2],
        void 0,
        ue
      ), a[o - 1] = D.distance(
        ce,
        ue
      ), r += a[o - 1], ce = D.clone(ue);
    return this.values.value = {
      type: this.type,
      distance: this.getValue(r),
      vertexPositions: i
    }, Promise.resolve(!0);
  }
  createTemplateFeature() {
    const s = super.createTemplateFeature();
    return s.setGeometry(new ae([])), s.set("olcs_altitudeMode", "absolute"), s;
  }
}
class ze extends O {
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
    return V.LineString;
  }
  // eslint-disable-next-line class-methods-use-this
  get supportedMaps() {
    return [Y.className];
  }
  calcMeasurementResult(t) {
    if (this.selfCall)
      return this.selfCall = !1, Promise.resolve(!1);
    const n = t.getGeometry().getCoordinates();
    if (n.length === 1)
      return this.values.value = this.defaultValues, Promise.resolve(!1);
    const i = this.app.maps.activeMap, { currentImage: r } = i;
    if (!this.set && n.length === 2)
      return this.startCoordinateTransformationPromise || (this.startCoordinateTransformationPromise = new Promise((a) => {
        this.startUndistorted = r.meta.radialDistortionCoordinate(
          n[0],
          !0
        ), this.startDistorted = n[0].slice(), this.measureVecGround = D.fromElements(
          this.startUndistorted[0],
          this.startUndistorted[1],
          0,
          this.measureVecGround
        ), Ce(r, n[0]).then((o) => {
          this.startPointRealWorld = o.coords;
          const l = o.coords.slice();
          return l[2] += 10, Qe(r, l);
        }).then((o) => {
          this.liftedUndistorted = r.meta.radialDistortionCoordinate(o.coords, !0);
          const l = D.fromElements(
            this.liftedUndistorted[0],
            this.liftedUndistorted[1],
            0
          );
          this.set = !0, this.measureVecOrientation = D.subtract(
            l,
            this.measureVecGround,
            this.measureVecOrientation
          ), this.measureVecOrientation = D.normalize(
            this.measureVecOrientation,
            this.measureVecOrientation
          ), this.selfCall = !0, t.getGeometry().setCoordinates([
            this.startDistorted,
            this.startDistorted
          ]), a(!0);
        });
      })), this.startCoordinateTransformationPromise;
    if (this.set) {
      if (n.length === 3)
        return this.manager.currentSession.value.finish(), this.selfCall = !1, Promise.resolve(!0);
      const a = r.meta.radialDistortionCoordinate(n[1], !0), o = [
        [
          a[0],
          a[1]
        ],
        [
          a[0] + 1,
          a[1]
        ]
      ], l = et(
        // XXX find replacement
        o,
        [this.startUndistorted, this.liftedUndistorted]
      ), d = [
        l.x,
        l.y
      ], u = r.meta.radialDistortionCoordinate(
        d,
        !1
      );
      u.push(0);
      const c = new D(
        d[0],
        d[1],
        0
      );
      let m = D.subtract(
        c,
        this.measureVecGround,
        new D()
      );
      m = D.normalize(
        m,
        m
      );
      const g = D.dot(
        this.measureVecOrientation,
        m
      );
      this.selfCall = !0;
      let P;
      if (g < 0 || Number.isNaN(g))
        this.values.value = {
          type: this.type,
          height: this.getValue(0)
        }, P = [this.startDistorted, this.startDistorted];
      else {
        const p = this.findVertical3DPositionRegardingPixel(
          i,
          d,
          this.startPointRealWorld
        );
        this.values.value = {
          type: this.type,
          height: this.getValue(
            tt(this.startPointRealWorld, p)
          )
        }, P = [this.startDistorted, u];
      }
      return t.getGeometry().setCoordinates(P), Promise.resolve(!0);
    }
    return Promise.resolve(!1);
  }
  createTemplateFeature() {
    const t = super.createTemplateFeature();
    return t.setGeometry(new ae([])), t;
  }
  static getStyleFunction(t) {
    const n = t ? se() : ne.style, i = O.getDefaultText(), r = new q({
      text: i,
      geometry: (a) => {
        const o = a.getGeometry().getCoordinates();
        return o.length === 2 ? new Z(o[1]) : a.getGeometry();
      }
    });
    return (a) => {
      var o;
      return i.setText(
        (o = a[Q]) == null ? void 0 : o[w].values.value.height
      ), [n, r];
    };
  }
  // eslint-disable-next-line class-methods-use-this
  findVertical3DPositionRegardingPixel(t, n, i) {
    const { currentImage: r } = t;
    let a = new D(
      n[0],
      r.meta.size[1] - n[1],
      1
    );
    a = le.multiplyByVector(
      r.pToRealworld,
      a,
      a
    );
    let o = new D(0, 0, 1), l = D.cross(
      o,
      a,
      new D()
    );
    const d = ke(
      i,
      U.proj,
      r.meta.projection.proj
    );
    let u = D.fromArray(d);
    const c = D.subtract(
      r.projectionCenter,
      u,
      new D()
    );
    let m = le.fromRowMajorArray([
      o.x,
      a.x,
      l.x,
      o.y,
      a.y,
      l.y,
      o.z,
      a.z,
      l.z
    ]);
    m = le.inverse(m, m);
    const g = le.multiplyByVector(m, c, new D());
    l = D.multiplyByScalar(l, g.z, l), o = D.multiplyByScalar(
      o,
      g.x,
      o
    ), o = D.add(o, l, o), u = D.add(
      u,
      o,
      u
    );
    const P = [u.x, u.y, u.z];
    return ke(
      P,
      r.meta.projection.proj,
      U.proj
    );
  }
}
let X = new D(), fe = new D();
class Be extends O {
  // eslint-disable-next-line class-methods-use-this
  get type() {
    return f.Area3D;
  }
  // eslint-disable-next-line class-methods-use-this
  get geometryType() {
    return V.Polygon;
  }
  // eslint-disable-next-line class-methods-use-this
  get supportedMaps() {
    return [N.className];
  }
  calcMeasurementResult(s) {
    if (!this.check(s))
      return Promise.resolve(!1);
    const t = s.getGeometry(), n = te(t), i = n.length, r = new Array(i), a = new Array(i);
    let o = n[0][2], l = 0, d = 0;
    for (let m = 0; m < i; m++)
      o = n[m][2] > o ? n[m][2] : o, _.mercatorToWgs84(n[m], !0), r[m] = D.fromDegrees(
        n[m][0],
        n[m][1],
        n[m][2]
      ), a[m] = jt.fromCartesian3(r[m]), m && (l += D.distance(
        r[m - 1],
        r[m]
      ));
    l += D.distance(
      r[i - 1],
      r[0]
    );
    const u = Gt.triangulate(a), c = u.length;
    for (let m = 0; m < c; m += 3) {
      const g = u[m], P = u[m + 1], p = u[m + 2];
      X = D.subtract(
        r[g],
        r[P],
        X
      ), fe = D.subtract(
        r[g],
        r[p],
        fe
      ), X = D.cross(X, fe, X), d += D.magnitude(X) / 2;
    }
    return this.values.value = {
      type: this.type,
      area: this.getValue(d, !0),
      circumference: this.getValue(l),
      height: o.toString()
    }, Promise.resolve(!0);
  }
  createTemplateFeature() {
    const s = super.createTemplateFeature();
    return s.setGeometry(new Oe([])), s.set("olcs_altitudeMode", "absolute"), s;
  }
  static getStyleFunction(s) {
    const t = s ? se() : ne.style, n = O.getDefaultText(), i = new q({
      text: n,
      geometry: (r) => {
        var l;
        const a = r.getGeometry().getInteriorPoint(), o = a.getCoordinates();
        return o[2] = +(((l = K(r)) == null ? void 0 : l.height) ?? 0), a.setCoordinates(o), a;
      }
    });
    return (r) => {
      var a;
      return n.setText((a = K(r)) == null ? void 0 : a.area), [t, i];
    };
  }
}
const Yt = [
  { key: "height", indices: [0, 1] },
  { key: "horizontal", indices: [1, 2] },
  { key: "distance", indices: [0, 2] }
];
class Ne extends O {
  // eslint-disable-next-line class-methods-use-this
  get type() {
    return f.Height3D;
  }
  // eslint-disable-next-line class-methods-use-this
  get geometryType() {
    return V.LineString;
  }
  // eslint-disable-next-line class-methods-use-this
  get supportedMaps() {
    return [N.className];
  }
  calcMeasurementResult(s) {
    var i;
    if (!this.check(s))
      return Promise.resolve(!1);
    const t = s.getGeometry().getCoordinates();
    if (t.length === 3 && ((i = this.manager.currentSession.value) == null ? void 0 : i.type) === k.CREATE)
      return this.manager.currentSession.value.finish(), Promise.resolve(!1);
    const n = [new D(), new D(), new D()];
    if (t.length === 2) {
      const r = t[0][2] < t[1][2] ? 0 : 1, a = t[r].slice();
      a[2] = t[r ? 0 : 1][2];
      const o = [
        t[r],
        a,
        t[r ? 0 : 1]
      ];
      for (let c = 0; c < 3; c++)
        _.mercatorToWgs84(o[c], !0), D.fromDegrees(
          o[c][0],
          o[c][1],
          o[c][2],
          void 0,
          n[c]
        );
      const l = {
        horizontal: 0,
        height: 0,
        distance: 0
      };
      for (let c = 0; c < 3; c++) {
        const { key: m, indices: g } = Yt[c], P = D.distance(
          n[g[0]],
          n[g[1]]
        );
        l[m] = P, this.values.value[m] = this.getValue(P, !1, m === "height");
      }
      const d = Rt.toDegrees(
        Math.asin(l.horizontal / l.distance)
      ), u = 90 - d;
      this.values.value = {
        ...this.values.value,
        alpha: `${d.toFixed(this.decimalPlacesAngle)}°`,
        beta: `${u.toFixed(this.decimalPlacesAngle)}°`,
        groundAltitude: this.getValue(t[r][2], !1, !0),
        heightAltitude: this.getValue(a[2], !1, !0)
      };
    }
    return Promise.resolve(!0);
  }
  createTemplateFeature() {
    const s = super.createTemplateFeature();
    return s.setGeometry(new ae([])), s.set("olcs_altitudeMode", "absolute"), s;
  }
  static getStyleFunction(s) {
    const t = s ? se() : ne.style, n = new q({
      stroke: t.getStroke() ?? void 0,
      geometry: (u) => {
        const c = u.getGeometry().getCoordinates();
        if (c.length === 2) {
          const m = c[0][2] < c[1][2] ? c[0] : c[1], g = c[0][2] < c[1][2] ? c[1] : c[0];
          return new ae([
            m,
            g,
            [m[0], m[1], g[2]],
            m
          ]);
        }
        return u.getGeometry();
      }
    }), i = O.getDefaultText(), r = new q({
      text: i,
      geometry: (u) => {
        const c = u.getGeometry().getCoordinates();
        if (c.length === 2) {
          const m = c[0][2] < c[1][2] ? c[0] : c[1];
          return m[2] = (c[0][2] + c[1][2]) * 0.5, new Z(m);
        }
        return u.getGeometry();
      }
    }), a = O.getDefaultText(), o = new q({
      text: a,
      geometry: (u) => {
        const c = u.getGeometry().getCoordinates();
        if (c.length === 2) {
          const m = Math.max(c[0][2], c[1][2]);
          return new Z([
            (c[0][0] + c[1][0]) * 0.5,
            (c[0][1] + c[1][1]) * 0.5,
            m
          ]);
        }
        return u.getGeometry();
      }
    }), l = O.getDefaultText(), d = new q({
      text: l,
      geometry: (u) => {
        const c = u.getGeometry().getCoordinates();
        return c.length === 2 ? new Z([
          (c[0][0] + c[1][0]) * 0.5,
          (c[0][1] + c[1][1]) * 0.5,
          (c[0][2] + c[1][2]) * 0.5
        ]) : u.getGeometry();
      }
    });
    return (u) => {
      var c, m, g;
      return i.setText((c = K(u)) == null ? void 0 : c.height), a.setText((m = K(u)) == null ? void 0 : m.horizontal), l.setText((g = K(u)) == null ? void 0 : g.distance), [n, r, o, d];
    };
  }
}
function Ee(e) {
  const s = Ge.getStyleFunction(e), t = Re.getStyleFunction(e), n = Be.getStyleFunction(e), i = Ne.getStyleFunction(e), r = ze.getStyleFunction(e), a = e ? se() : ne.style;
  return (o) => {
    const l = o, d = l[Q] ? l[Q] : l;
    if (d[w]) {
      if (d[w].type === f.Distance2D)
        return s(l);
      if (d[w].type === f.Distance3D)
        return s(l);
      if (d[w].type === f.Area2D)
        return t(l);
      if (d[w].type === f.Area3D)
        return n(l);
      if (d[w].type === f.Height3D)
        return i(l);
      if (d[w].type === f.ObliqueHeight2D)
        return r(l);
    }
    return [a];
  };
}
class Jt extends O {
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
    return V.Point;
  }
  // eslint-disable-next-line class-methods-use-this
  get supportedMaps() {
    return [N.className, ie.className, Y.className];
  }
  calcMeasurementResult(t) {
    return this.check(t) ? new Promise((n) => {
      var o;
      const i = this.app.maps.activeMap, r = ((o = t[Q]) == null ? void 0 : o.getGeometry()) ?? t.getGeometry(), a = te(r);
      if (i instanceof Y)
        this.calcMeasurementResolve = n, this.calcMeasurementTimeout = setTimeout(async () => {
          this.calcMeasurementResolve = void 0, this.calcMeasurementTimeout = void 0;
          const { coords: l } = await Ce(
            i.currentImage,
            a[0],
            {
              dataProjection: de
            }
          ), d = _.transform(
            this.projection,
            de,
            l
          );
          this.values.value = {
            type: this.type,
            vertexPositions: [
              {
                id: "",
                name: void 0,
                x: +d[0].toFixed(this.decimalPlaces),
                y: +d[1].toFixed(this.decimalPlaces),
                z: +d[2].toFixed(this.decimalPlacesZ)
              }
            ]
          }, n(!0);
        }, 30);
      else {
        const l = _.transform(
          this.projection,
          U,
          a[0]
        );
        this.values.value = {
          type: this.type,
          vertexPositions: [
            {
              id: "",
              name: void 0,
              x: +l[0].toFixed(this.decimalPlaces),
              y: +l[1].toFixed(this.decimalPlaces),
              z: r.getLayout() === "XY" ? void 0 : +l[2].toFixed(this.decimalPlacesZ)
            }
          ]
        }, n(!0);
      }
    }) : Promise.resolve(!1);
  }
  createTemplateFeature() {
    const t = super.createTemplateFeature();
    return t.setGeometry(new Z([])), t.set("olcs_altitudeMode", "clampToGround"), t;
  }
}
const ye = "select_interaction_id";
function Xt(e) {
  const s = new it({
    projection: U.toJSON(),
    zIndex: rt - 1,
    vectorProperties: {
      eyeOffset: [0, 0, -5]
    }
  });
  ot(s), s.activate().catch(() => {
  }), e.layers.add(s);
  const t = [
    s.getSource().on("addfeature", (i) => {
      i.feature && e.maps.eventHandler.featureInteraction.excludeFromPickPosition(
        i.feature
      );
    }),
    s.getSource().on("removefeature", (i) => {
      i.feature && e.maps.eventHandler.featureInteraction.includeInPickPosition(
        i.feature
      );
    })
  ];
  return { layer: s, destroy: () => {
    ee(t), s.deactivate(), e.layers.remove(s), s.destroy();
  } };
}
function be(e, s, t) {
  switch (e) {
    case f.Position2D:
      return new Jt({ app: s, manager: t });
    case f.Position3D:
      return new Zt({ app: s, manager: t });
    case f.Distance2D:
      return new Ge({ app: s, manager: t });
    case f.Distance3D:
      return new Kt({ app: s, manager: t });
    case f.Area2D:
      return new Re({ app: s, manager: t });
    case f.Area3D:
      return new Be({ app: s, manager: t });
    case f.Height3D:
      return new Ne({ app: s, manager: t });
    default:
      return new ze({ app: s, manager: t });
  }
}
function qe(e, s, t) {
  const n = e.templateFeature.getProperties();
  delete n.geometry, t.setStyle(e.templateFeature.getStyle()), t[w] = e, Object.keys(n).length && t.setProperties(n), e.type === f.ObliqueHeight2D && (t[lt] = !0, t[Se] = !0), s[t.getId()] = t.getGeometry().on("change", () => {
    e.calcMeasurementResult(t).then((i) => {
      i && t.changed();
    });
  });
}
function Qt(e, s, t, n, i, r) {
  const a = [];
  return s.type === k.SELECT && a.push(
    s.featuresChanged.addEventListener(
      (o) => {
        if (t.value = o, o.length === 1) {
          const l = o[0];
          i.value = l[w], i.value.calcMeasurementResult(l);
        }
      }
    )
  ), s.type === k.CREATE && a.push(
    s.featureCreated.addEventListener((o) => {
      t.value = [o], qe(
        i.value,
        r,
        o
      ), i.value.calcMeasurementResult(o);
    })
  ), () => {
    a.forEach((o) => {
      o();
    });
  };
}
function es(e, s) {
  if (s.type !== k.EDIT_GEOMETRY)
    return () => {
    };
  const t = (r) => {
    s.setFeature(r[0]);
  }, n = e.featuresChanged.addEventListener(t), i = e.stopped.addEventListener(() => {
    s.stop();
  });
  return () => {
    n(), i();
  };
}
function ts(e) {
  const s = G(), t = G(), n = G(), i = G();
  let r;
  const { layer: a, destroy: o } = Xt(e), l = new st({});
  l.style = Ee(!0), a.setStyle(Ee(!1));
  const d = G(a);
  let u = () => {
  }, c = () => {
  }, m = () => {
  }, g = () => {
  }, P = () => {
  };
  const p = {};
  let H;
  function he() {
    var S;
    const b = () => {
      a.removeFeaturesById(
        a.getFeatures().filter(
          (F) => {
            var j;
            return ((j = F[w]) == null ? void 0 : j.type) === f.ObliqueHeight2D;
          }
        ).map((F) => F.getId())
      );
    };
    return (S = e.maps.mapActivated) == null ? void 0 : S.addEventListener(() => {
      b(), e.maps.activeMap instanceof Y && (H == null || H(), H = e.maps.activeMap.imageChanged.addEventListener(() => {
        b();
      }));
    });
  }
  const re = he();
  function z(b) {
    var S, F, j;
    g(), u(), ((S = n.value) == null ? void 0 : S.length) !== 0 && (n.value = []), (j = (F = s.value) == null ? void 0 : F.stop) == null || j.call(F), s.value = b, s.value ? (g = s.value.stopped.addEventListener(
      () => {
        z();
      }
    ), u = Qt(
      e,
      s.value,
      n,
      d.value,
      i,
      p
    )) : (g = () => {
    }, u = () => {
    });
  }
  function v(b) {
    var S, F, j;
    if (P(), c(), (F = (S = t.value) == null ? void 0 : S.stop) == null || F.call(S), t.value = b, b) {
      const oe = b.type === k.EDIT_GEOMETRY ? ge.SINGLE : ge.MULTI;
      ((j = s.value) == null ? void 0 : j.type) !== k.SELECT ? z(
        Ae(
          e,
          d.value,
          ye,
          oe,
          l
        )
      ) : s.value.setMode(oe), P = t.value.stopped.addEventListener(() => {
        v();
      }), c = es(
        s.value,
        t.value
      );
    } else
      P = () => {
      }, c = () => {
      };
  }
  const T = R(d, () => {
    z(), d.value || (d.value = a);
  }), J = d.value.source.on("removefeature", (b) => {
    const S = b.feature.getId(), F = p[S];
    F && (ee(F), delete p[S]);
  });
  return {
    get category() {
      return r;
    },
    set category(b) {
      r = b;
    },
    currentSession: s,
    currentEditSession: t,
    currentFeatures: n,
    currentLayer: d,
    currentMeasurementMode: i,
    startCreateSession(b) {
      i.value = be(
        b,
        e,
        this
      ), d.value.getFeatures().forEach((F) => {
        r != null && r.collection.hasKey(F.getId()) || d.value.removeFeaturesById([F.getId()]);
      }), m();
      const S = nt(
        e,
        d.value,
        i.value.geometryType,
        i.value.createTemplateFeature().get("olcs_altitudeMode"),
        {
          hideSegmentLength: !0
        }
      );
      m = S.creationFinished.addEventListener(
        (F) => {
          if (F) {
            let j = !1;
            const oe = S.stopped.addEventListener(() => {
              oe(), j = !0;
            });
            setTimeout(() => {
              j || this.startSelectSession([F]);
            }, 0);
          }
        }
      ), z(S);
    },
    startSelectSession(b) {
      z(
        Ae(
          e,
          d.value,
          ye,
          void 0,
          l
        )
      ), b && s.value.setCurrentFeatures(
        b
      );
    },
    startEditSession(b) {
      var S;
      v(
        at(e, d.value, ye, {
          hideSegmentLength: !0
        })
      ), b ? (s.value.setCurrentFeatures(
        [b]
      ), b[w].calcMeasurementResult(b)) : t.value.setFeature(
        ((S = s.value) == null ? void 0 : S.firstFeature) || void 0
      );
    },
    addMeasurement(b) {
      const S = b == null ? void 0 : b.get(je);
      if (S) {
        const F = be(
          S,
          e,
          this
        );
        qe(F, p, b), r && r.addToCollection(b), F.calcMeasurementResult(b), b.changed();
      }
    },
    stop() {
      z(), v();
    },
    stopEditing() {
      var b;
      v(), ((b = s == null ? void 0 : s.value) == null ? void 0 : b.type) === k.SELECT && s.value.setMode(
        ge.MULTI
      );
    },
    getDefaultLayer() {
      return a;
    },
    destroy() {
      z(), T(), ee(J), o(), H == null || H(), re();
    }
  };
}
const Ue = {
  [f.Position3D]: "$vcs3dPoint",
  [f.Position2D]: "$vcs2dPoint",
  [f.Distance2D]: "$vcs2dDistance",
  [f.Area2D]: "$vcs2dArea",
  [f.Distance3D]: "$vcs3dDistance",
  [f.Area3D]: "$vcs3dArea",
  [f.Height3D]: "$vcs3dHeight",
  [f.ObliqueHeight2D]: "$vcs2dHeightOblique"
};
function ss(e, s) {
  const t = (r) => ({
    name: r,
    title: `measurement.create.tooltip.${r}`,
    icon: Ue[r],
    geometryType: Ut[r]
  }), n = {
    type: Pt.SELECT,
    action: Me({
      name: "creation",
      currentIndex: 0,
      active: !1,
      disabled: s,
      callback() {
        this.active ? e.stop() : e.startCreateSession(this.tools[this.currentIndex].name);
      },
      selected(r) {
        this.currentIndex = r, e.startCreateSession(this.tools[this.currentIndex].name);
      },
      tools: [
        t(f.Position2D),
        t(f.Position3D),
        t(f.Distance2D),
        t(f.Distance3D),
        t(f.Area2D),
        t(f.Area3D),
        t(f.ObliqueHeight2D),
        t(f.Height3D)
      ]
    })
  }, i = R(e.currentSession, () => {
    const r = e.currentSession.value;
    if ((r == null ? void 0 : r.type) === k.SELECT)
      n.action.active = !1;
    else if (n.action.active = !!r, n.action.active && (r == null ? void 0 : r.type) === k.CREATE) {
      const a = e.currentMeasurementMode.value.type, o = n.action.tools.findIndex(
        (l) => l.name === a
      );
      o >= 0 && n.action.currentIndex !== o && (n.action.currentIndex = o);
    }
  });
  return {
    toolbox: n,
    destroy: i
  };
}
function ns(e, s) {
  var d;
  const { config: t } = s.plugins.getByKey(x);
  let n = (d = t[s.maps.activeMap.className]) == null ? void 0 : d.disable;
  const { toolbox: i, destroy: r } = ss(e, n), a = s.toolboxManager.add(i, x).id;
  function o() {
    var u;
    if (n = (u = t[s.maps.activeMap.className]) == null ? void 0 : u.disable, i.action.tools.forEach((c) => {
      c.disabled = !0;
    }), i.action.disabled = n, !n) {
      const c = i.action.tools.filter((g) => {
        var P;
        return (P = be(
          g.name,
          s,
          e
        )) == null ? void 0 : P.supportedMaps.includes(s.maps.activeMap.className);
      });
      c.forEach((g) => {
        g.disabled = !1;
      }), i.action.disabled = c.length === 0;
      const { currentIndex: m } = i.action;
      c.includes(i.action.tools[m]) || (i.action.currentIndex = i.action.tools.findIndex(
        (g) => g.name === f.Distance2D
      ));
    }
    e.currentFeatures.value && e.currentLayer.value.removeFeaturesById(
      e.currentLayer.value.getFeatures().filter(
        (c) => {
          var m, g;
          return !((m = e.category) != null && m.collection.hasKey(c.getId())) && ((g = e.currentSession.value) == null ? void 0 : g.type) === k.CREATE;
        }
      ).map((c) => c.getId())
    ), e.stop();
  }
  o();
  const l = s.maps.mapActivated.addEventListener(o);
  return () => {
    s.toolboxManager.remove(a), r(), l();
  };
}
const as = Le({
  name: "MeasurementWindow",
  components: {
    VcsDataTable: Ct,
    VcsFormSection: Ve,
    VcsLabel: $e,
    VcsActionButtonList: Mt,
    VcsWorkspaceWrapper: St,
    VRow: xe,
    VCol: _e,
    VImg: zt
  },
  setup(e, { attrs: s }) {
    var re, z;
    const t = Fe("app"), n = s["window-state"], i = n.id, r = (re = t.maps.activeMap) == null ? void 0 : re.className, a = Fe("manager"), { values: o } = a.currentMeasurementMode.value, l = G(), d = G(!1), u = G(!1), c = G(!1), m = G(!1), g = Ie([
      {
        name: "editAction",
        icon: "$vcsEditVertices",
        title: "measurement.edit",
        active: ((z = a.currentEditSession.value) == null ? void 0 : z.type) === k.EDIT_GEOMETRY,
        disabled: !m.value || u.value || !c.value,
        callback() {
          this.active ? a.stopEditing() : a.startEditSession(l.value);
        }
      }
    ]);
    R(
      () => {
        var v;
        return (v = a.currentEditSession.value) == null ? void 0 : v.type;
      },
      () => {
        var v;
        g.value[0].active = ((v = a.currentEditSession.value) == null ? void 0 : v.type) === k.EDIT_GEOMETRY;
      }
    ), R([m, u, c], () => {
      g.value[0].disabled = !m.value || u.value || !c.value;
    });
    const P = we(() => {
      const v = [
        { title: "", value: "name" },
        { title: "X", value: "x" },
        { title: "Y", value: "y" }
      ], { type: T } = o.value;
      return (T === f.Position3D || T === f.Area3D || T === f.Distance3D) && v.push({ title: "Z", value: "z" }), v;
    });
    let p = () => {
    };
    function H() {
      var T;
      p();
      const v = a.currentFeatures.value;
      if (v.length > 1)
        n.headerTitle = `(${v.length}) Features`;
      else if (((T = a.currentSession.value) == null ? void 0 : T.type) === k.CREATE)
        n.headerTitle = "measurement.header.title";
      else if (v.length) {
        const J = v[0].on(
          "propertychange",
          ({ key: b }) => {
            b === "title" && (n.headerTitle = v[0].get(b));
          }
        );
        p = () => {
          ee(J);
        }, n.headerTitle = v[0].get("title") ? v[0].get("title") : "measurement.header.title";
      }
      a.currentMeasurementMode.value && (n.headerIcon = Ue[a.currentMeasurementMode.value.type]);
    }
    const he = we(() => {
      const v = t.vuetify.theme.current.value.dark ? "dark" : "light";
      return At(
        t,
        x,
        `plugin-assets/sketch_${v}.png`
      );
    });
    return R(
      a.currentFeatures,
      () => {
        var v, T, J, b, S;
        H(), a.currentFeatures.value.length > 0 && (l.value = a.currentFeatures.value[0], d.value = !!((T = a.category) != null && T.collection.hasKey(
          (v = l.value) == null ? void 0 : v.getId()
        )), c.value = !((J = l.value) != null && J[Se]), m.value = // prettier-ignore
        (S = (b = l.value) == null ? void 0 : b[w]) == null ? void 0 : S.supportedMaps.includes(t.maps.activeMap.className));
      },
      { immediate: !0 }
    ), R(
      a.currentSession,
      () => {
        var v;
        u.value = ((v = a.currentSession.value) == null ? void 0 : v.type) === k.CREATE;
      },
      { immediate: !0 }
    ), R(
      o,
      () => {
        const v = o.value.vertexPositions;
        v && v.forEach((T) => {
          T.name || (T.name = `${t.vueI18n.t("measurement.value.point")} ${T.id}`);
        });
      },
      { immediate: !0 }
    ), yt(() => {
      var v, T;
      p(), d.value || (T = (v = a.currentSession.value) == null ? void 0 : v.clearSelection) == null || T.call(v);
    }), {
      MeasurementType: f,
      activeMapClassName: r,
      values: o,
      headers: P,
      targetFeature: l,
      isPersistent: d,
      isInCreation: u,
      isMapSupported: m,
      isEditable: c,
      editActions: g,
      sketchIcon: he,
      createNewMeasurement() {
        a.startCreateSession(o.value.type), t.windowManager.remove(i);
      },
      addToCategory() {
        l.value && (a.category.addToCollection(l.value), a.currentFeatures.value = [l.value], d.value = !0);
      },
      getCopyAction(v) {
        return {
          name: "copyAction",
          icon: "mdi-content-copy",
          callback() {
            if (navigator.clipboard)
              navigator.clipboard.writeText(v).catch(() => {
              });
            else {
              const T = document.createElement("textarea");
              T.innerHTML = v, document.body.appendChild(T), T.select(), document.execCommand("copy"), document.body.removeChild(T);
            }
          }
        };
      },
      required: [
        (v) => !!v || "Input may not be null",
        (v) => v.length > 0 || "Input must have a length"
      ]
    };
  }
}), We = (e, s) => {
  const t = e.__vccOpts || e;
  for (const [n, i] of s)
    t[n] = i;
  return t;
}, is = { key: 1 }, rs = { key: 2 }, os = { key: 3 }, ls = { key: 4 }, cs = { key: 5 };
function us(e, s, t, n, i, r) {
  const a = $("VcsDataTable"), o = $("VcsLabel"), l = $("v-col"), d = $("VcsActionButtonList"), u = $("v-row"), c = $("v-img"), m = $("VcsFormSection"), g = $("VcsWorkspaceWrapper");
  return I(), B(g, {
    "disable-add": e.isPersistent || e.isInCreation || !e.isEditable,
    "disable-new": !e.isMapSupported,
    onNewClicked: e.createNewMeasurement,
    onAddClicked: e.addToCategory
  }, {
    default: y(() => [
      h(m, {
        heading: `measurement.create.${e.values.type}`,
        "header-actions": e.editActions
      }, {
        default: y(() => [
          E("point measurement block"),
          e.values.type === e.MeasurementType.Position3D || e.values.type === e.MeasurementType.Position2D ? (I(), B(a, {
            key: 0,
            items: e.values.vertexPositions,
            "item-key": "id",
            headers: e.headers,
            "show-searchbar": !1
          }, null, 8, ["items", "headers"])) : E("v-if", !0),
          E("distance measurement block"),
          e.values.type === e.MeasurementType.Distance2D || e.values.type === e.MeasurementType.Distance3D ? (I(), W("div", is, [
            h(u, {
              "no-gutters": "",
              class: "py-0 px-1"
            }, {
              default: y(() => [
                h(l, null, {
                  default: y(() => [
                    h(o, null, {
                      default: y(() => [
                        C(
                          M(e.$t("measurement.value.distance")),
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
                h(l, { class: "d-flex justify-end" }, {
                  default: y(() => [
                    h(o, null, {
                      default: y(() => [
                        C(
                          M(e.values.distance),
                          1
                          /* TEXT */
                        )
                      ]),
                      _: 1
                      /* STABLE */
                    }),
                    h(d, {
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
          ])) : E("v-if", !0),
          E("area measurement block"),
          e.values.type === e.MeasurementType.Area2D || e.values.type === e.MeasurementType.Area3D ? (I(), W("div", rs, [
            h(u, {
              "no-gutters": "",
              class: "py-0 px-1"
            }, {
              default: y(() => [
                h(l, null, {
                  default: y(() => [
                    h(o, null, {
                      default: y(() => [
                        C(
                          M(e.$t("measurement.value.area")),
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
                h(l, { class: "d-flex justify-end" }, {
                  default: y(() => [
                    h(o, null, {
                      default: y(() => [
                        C(
                          M(e.values.area),
                          1
                          /* TEXT */
                        )
                      ]),
                      _: 1
                      /* STABLE */
                    }),
                    h(d, {
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
            h(u, {
              "no-gutters": "",
              class: "py-0 px-1"
            }, {
              default: y(() => [
                h(l, null, {
                  default: y(() => [
                    h(o, null, {
                      default: y(() => [
                        C(
                          M(e.$t("measurement.value.circumference")),
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
                h(l, { class: "d-flex justify-end" }, {
                  default: y(() => [
                    h(o, null, {
                      default: y(() => [
                        C(
                          M(e.values.circumference),
                          1
                          /* TEXT */
                        )
                      ]),
                      _: 1
                      /* STABLE */
                    }),
                    h(d, {
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
          ])) : E("v-if", !0),
          E("2D height measurement block"),
          e.values.type === e.MeasurementType.ObliqueHeight2D ? (I(), W("div", os, [
            h(u, {
              "no-gutters": "",
              class: "py-0 px-1"
            }, {
              default: y(() => [
                h(l, null, {
                  default: y(() => [
                    h(o, null, {
                      default: y(() => [
                        C(
                          M(e.$t("measurement.value.height")),
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
                h(l, { class: "d-flex justify-end" }, {
                  default: y(() => [
                    h(o, null, {
                      default: y(() => [
                        C(
                          M(e.values.height),
                          1
                          /* TEXT */
                        )
                      ]),
                      _: 1
                      /* STABLE */
                    }),
                    h(d, {
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
          ])) : E("v-if", !0),
          E("oblique measurement hint"),
          e.activeMapClassName === "ObliqueMap" ? (I(), W("div", ls, [
            e.values.type === e.MeasurementType.Distance2D ? (I(), B(u, {
              key: 0,
              "no-gutters": "",
              class: "py-2 px-2"
            }, {
              default: y(() => [
                C(
                  M(e.$t("measurement.hint.oblique.distance")),
                  1
                  /* TEXT */
                )
              ]),
              _: 1
              /* STABLE */
            })) : E("v-if", !0),
            e.values.type === e.MeasurementType.ObliqueHeight2D ? (I(), B(u, {
              key: 1,
              "no-gutters": "",
              class: "py-2 px-2"
            }, {
              default: y(() => [
                C(
                  M(e.$t("measurement.hint.oblique.height")),
                  1
                  /* TEXT */
                )
              ]),
              _: 1
              /* STABLE */
            })) : E("v-if", !0)
          ])) : E("v-if", !0),
          E("3D height measurement block"),
          e.values.type === e.MeasurementType.Height3D ? (I(), W("div", cs, [
            h(u, {
              "no-gutters": "",
              class: "py-0 px-1"
            }, {
              default: y(() => [
                h(l, null, {
                  default: y(() => [
                    h(o, null, {
                      default: y(() => [
                        C(
                          M(e.$t("measurement.value.height")) + " [h] ",
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
                h(l, { class: "d-flex justify-end" }, {
                  default: y(() => [
                    h(o, null, {
                      default: y(() => [
                        C(
                          M(e.values.height),
                          1
                          /* TEXT */
                        )
                      ]),
                      _: 1
                      /* STABLE */
                    }),
                    h(d, {
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
            h(u, {
              "no-gutters": "",
              class: "py-0 px-1"
            }, {
              default: y(() => [
                h(l, null, {
                  default: y(() => [
                    h(o, null, {
                      default: y(() => [
                        C(
                          M(e.$t("measurement.value.horizontalDistance")) + " [dh] ",
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
                h(l, { class: "d-flex justify-end" }, {
                  default: y(() => [
                    h(o, null, {
                      default: y(() => [
                        C(
                          M(e.values.horizontal),
                          1
                          /* TEXT */
                        )
                      ]),
                      _: 1
                      /* STABLE */
                    }),
                    h(d, {
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
            h(u, {
              "no-gutters": "",
              class: "py-0 px-1"
            }, {
              default: y(() => [
                h(l, null, {
                  default: y(() => [
                    h(o, null, {
                      default: y(() => [
                        C(
                          M(e.$t("measurement.value.distance")) + " [d] ",
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
                h(l, { class: "d-flex justify-end" }, {
                  default: y(() => [
                    h(o, null, {
                      default: y(() => [
                        C(
                          M(e.values.distance),
                          1
                          /* TEXT */
                        )
                      ]),
                      _: 1
                      /* STABLE */
                    }),
                    h(d, {
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
            h(u, {
              "no-gutters": "",
              class: "py-0 px-1"
            }, {
              default: y(() => [
                h(l, null, {
                  default: y(() => [
                    h(o, null, {
                      default: y(() => [
                        C(
                          M(e.$t("measurement.value.alpha")) + " [α] ",
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
                h(l, { class: "d-flex justify-end" }, {
                  default: y(() => [
                    h(o, null, {
                      default: y(() => [
                        C(
                          M(e.values.alpha),
                          1
                          /* TEXT */
                        )
                      ]),
                      _: 1
                      /* STABLE */
                    }),
                    h(d, {
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
            h(u, {
              "no-gutters": "",
              class: "py-0 px-1"
            }, {
              default: y(() => [
                h(l, null, {
                  default: y(() => [
                    h(o, null, {
                      default: y(() => [
                        C(
                          M(e.$t("measurement.value.beta")) + " [β] ",
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
                h(l, { class: "d-flex justify-end" }, {
                  default: y(() => [
                    h(o, null, {
                      default: y(() => [
                        C(
                          M(e.values.beta),
                          1
                          /* TEXT */
                        )
                      ]),
                      _: 1
                      /* STABLE */
                    }),
                    h(d, {
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
            e.sketchIcon ? (I(), B(m, {
              key: 0,
              expandable: !0,
              heading: "Sketch"
            }, {
              default: y(() => [
                h(c, {
                  src: e.sketchIcon,
                  alt: "plugin-icon"
                }, null, 8, ["src"])
              ]),
              _: 1
              /* STABLE */
            })) : E("v-if", !0),
            h(u, {
              "no-gutters": "",
              class: "py-0 px-1"
            }, {
              default: y(() => [
                h(l, null, {
                  default: y(() => [
                    h(o, null, {
                      default: y(() => [
                        C(
                          M(e.$t("measurement.value.heightPoint")),
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
                h(l, { class: "d-flex justify-end" }, {
                  default: y(() => [
                    h(o, null, {
                      default: y(() => [
                        C(
                          M(e.values.heightAltitude),
                          1
                          /* TEXT */
                        )
                      ]),
                      _: 1
                      /* STABLE */
                    }),
                    h(d, {
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
            h(u, {
              "no-gutters": "",
              class: "py-0 px-1"
            }, {
              default: y(() => [
                h(l, null, {
                  default: y(() => [
                    h(o, null, {
                      default: y(() => [
                        C(
                          M(e.$t("measurement.value.groundPoint")),
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
                h(l, { class: "d-flex justify-end" }, {
                  default: y(() => [
                    h(o, null, {
                      default: y(() => [
                        C(
                          M(e.values.groundAltitude),
                          1
                          /* TEXT */
                        )
                      ]),
                      _: 1
                      /* STABLE */
                    }),
                    h(d, {
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
          ])) : E("v-if", !0)
        ]),
        _: 1
        /* STABLE */
      }, 8, ["heading", "header-actions"]),
      e.values.type === e.MeasurementType.Distance2D || e.values.type === e.MeasurementType.Distance3D ? (I(), B(m, {
        key: 0,
        heading: "measurement.value.points"
      }, {
        default: y(() => [
          h(a, {
            items: e.values.vertexPositions,
            "item-key": "id",
            headers: e.headers,
            "show-searchbar": !1
          }, null, 8, ["items", "headers"])
        ]),
        _: 1
        /* STABLE */
      })) : E("v-if", !0)
    ]),
    _: 1
    /* STABLE */
  }, 8, ["disable-add", "disable-new", "onNewClicked", "onAddClicked"]);
}
const ds = /* @__PURE__ */ We(as, [["render", us], ["__scopeId", "data-v-0698f245"]]);
function ms(e) {
  return {
    name: "measurement.category.hideSelected",
    icon: "$vcsCheckboxChecked",
    callback() {
      var t, n, i;
      const s = e.getDefaultLayer();
      if (e.currentLayer.value === s && ((t = e.currentFeatures.value) == null ? void 0 : t.length) > 0 && ((i = (n = e.currentSession.value) == null ? void 0 : n.currentFeatures) != null && i.length)) {
        const r = e.currentFeatures.value.map((a) => a.getId());
        e.currentLayer.value.featureVisibility.hideObjects(r);
      }
    }
  };
}
function Ze(e, s, t = !0) {
  const n = {
    name: "measurement.category.removeSelected",
    icon: t ? "$vcsTrashCan" : void 0,
    callback() {
      var r;
      s ? e.currentLayer.value.removeFeaturesById(
        s.selection.value.map((a) => a.name)
      ) : ((r = e.currentFeatures.value) == null ? void 0 : r.length) > 0 && e.currentLayer.value.removeFeaturesById(
        e.currentFeatures.value.map((a) => a.getId())
      );
    }
  };
  let i = () => {
  };
  return s && (i = R(
    s.selection,
    (r) => {
      n.disabled = r.length === 0;
    },
    { immediate: !0 }
  )), {
    action: n,
    destroy: i
  };
}
function hs(e, s, t) {
  const n = ct(
    {
      features: e,
      vcsMeta: s.getVcsMeta(t)
    },
    t
  );
  Tt(n, "measurement.json");
}
function gs(e, s) {
  const t = {
    writeStyle: !0,
    embedIcons: !0,
    prettyPrint: !0,
    writeId: !0
  }, n = e.currentLayer.value.getFeaturesById(
    s.selection.value.map((i) => i.name)
  );
  hs(n, e.currentLayer.value, t);
}
function fs(e, s, t) {
  const n = "tempMeasurementWindowId", i = {
    component: ds,
    provides: {
      app: s,
      manager: e
    },
    state: {
      headerTitle: "measurement.header.title",
      headerIcon: "",
      styles: { height: "auto" },
      infoUrlCallback: s.getHelpUrlCallback("tools/measurementTool.html")
    }
  }, r = Ft(
    s,
    t,
    { editor: () => ({ ...i }) }
  ), { action: a, destroy: o } = wt(
    t.selection,
    () => {
      gs(e, t);
    },
    x
  ), { action: l, destroy: d } = kt(
    async (m) => {
      const g = e.currentLayer.value.getSource().on("addfeature", ({ feature: P }) => {
        e.addMeasurement(P);
      });
      return await Et(m, s, e.currentLayer.value), ee(g), !0;
    },
    s.windowManager,
    x,
    "category-manager"
  );
  r.addActions([l, a]);
  const u = R(e.currentFeatures, () => {
    s.windowManager.has(n) && s.windowManager.remove(n);
    const m = t.selection.value.map(
      (p) => p.name
    ), g = e.currentFeatures.value.map(
      (p) => p.getId()
    );
    if (m.every((p) => g.includes(p)) && g.every(
      (p) => m.includes(p.toString())
    ))
      return;
    const P = t.items.value.filter(
      (p) => g.includes(p.name)
    );
    g.length === 1 && P.length === 0 && e.currentLayer.value.getFeatureById(g[0]) ? s.windowManager.add(
      {
        ...i,
        id: n,
        parentId: "category-manager",
        slot: Lt.DYNAMIC_CHILD
      },
      x
    ) : t.selection.value = P, g.length !== 0 && e.currentLayer.value.getFeatures().forEach((p) => {
      !t.items.value.find((H) => p.getId() === H.name) && !e.currentFeatures.value.includes(p) && e.currentLayer.value.removeFeaturesById([p.getId()]);
    });
  }), c = R(t.selection, () => {
    var m, g, P;
    t.selection.value.length !== 0 ? (((m = e.currentSession.value) == null ? void 0 : m.type) !== k.SELECT && e.startSelectSession([]), e.currentSession.value.setCurrentFeatures(
      e.currentLayer.value.getFeaturesById(
        t.selection.value.map((p) => p.name)
      )
    )) : ((P = (g = e.currentSession.value) == null ? void 0 : g.clearSelection) == null || P.call(g), e.stopEditing());
  });
  return {
    destroy: () => {
      s.windowManager.remove(n), u(), c(), d(), o();
    }
  };
}
function ys(e) {
  var l, d;
  const { currentSession: s, currentEditSession: t, currentLayer: n, currentFeatures: i } = e, r = e.getDefaultLayer();
  function a(u) {
    var c, m;
    if (!(u.target && u.target.tagName === "INPUT"))
      switch (u.code) {
        case "Escape":
          t.value ? t.value.stop() : s.value.currentFeatures.length && s.value.clearSelection();
          break;
        case "Delete":
          if (n.value === r && ((m = (c = s.value) == null ? void 0 : c.currentFeatures) != null && m.length)) {
            const g = s.value.currentFeatures.map((P) => P.getId());
            s.value.clearSelection(), n.value.removeFeaturesById(g);
          }
          break;
      }
  }
  function o(u) {
    if (!(u != null && u.target && u.target.tagName === "INPUT"))
      switch (u.code) {
        case "Escape":
          n.value.removeFeaturesById([
            i.value[0].getId()
          ]), s.value.finish();
          break;
        case "Enter":
          s.value.finish();
          break;
      }
  }
  return ((l = s.value) == null ? void 0 : l.type) === k.CREATE ? (window.addEventListener("keydown", o), () => {
    window.removeEventListener("keydown", o);
  }) : ((d = s.value) == null ? void 0 : d.type) === k.SELECT ? (window.addEventListener("keydown", a), () => {
    window.removeEventListener("keydown", a);
  }) : () => {
  };
}
function ps(e) {
  let s = () => {
  };
  const t = R(e.currentSession, (n) => {
    s(), n ? s = ys(e) : s = () => {
    };
  });
  return () => {
    s(), t();
  };
}
function vs(e, s, t) {
  e.contextMenuManager.addEventHandler((n) => {
    var r, a, o, l, d;
    const i = [];
    if (n.feature && n.feature[ut] === s.currentLayer.value.name) {
      const u = n.feature;
      let c = s.currentFeatures.value;
      const m = ((r = s.currentSession.value) == null ? void 0 : r.type) === k.CREATE;
      !m && ((a = s.currentSession.value) == null ? void 0 : a.type) !== k.SELECT ? (setTimeout(() => {
        s.startSelectSession([u]);
      }, 0), c = [u]) : ((o = s.currentSession.value) == null ? void 0 : o.type) === k.SELECT && !c.some(
        (p) => p.getId() === u.getId()
      ) && (setTimeout(() => {
        s.currentSession.value.setCurrentFeatures([n.feature]);
      }, 0), c = [u]), c.length === 1 && (c[0][Se] || i.push({
        id: "measurement-edit",
        name: "measurement.edit",
        icon: "$vcsEditVertices",
        disabled: m || !Wt(c[0], n.map),
        callback() {
          s.startEditSession(c[0]);
        }
      }));
      const g = ms(s), P = Ze(
        s,
        void 0
      ).action;
      g.disabled = m, P.disabled = m, i.push(g, P);
    } else
      (d = (l = s.currentSession.value) == null ? void 0 : l.clearSelection) == null || d.call(l);
    return i;
  }, t);
}
function Ds(e, s, t) {
  let n, i = 0;
  const r = new Set(
    s.getFeatures().filter((a) => {
      var o;
      return ((o = a[w]) == null ? void 0 : o.type) === t;
    }).map((a) => a.get("title"))
  );
  do
    i += 1, r.has(`${t}-${i}`) || (n = `${t}-${i}`);
  while (!n);
  e.set("title", n);
}
class Pe extends dt {
  constructor(t) {
    super(t);
    A(this, "_layer");
    A(this, "_layerListeners");
    this._layer = null, this._layerListeners = () => {
    };
  }
  static get className() {
    return "SimpleMeasurementCategory";
  }
  addToCollection(t) {
    if (!this.collection.hasKey(t.getId())) {
      if (!t.get("title")) {
        const { type: n } = t[w];
        Ds(t, this._layer, n);
      }
      this.collection.add({
        id: t.getId().toString(),
        name: t.getProperty("title"),
        feature: t
      });
    }
  }
  setCurrentLayer(t) {
    this._layerListeners(), this._layer = t;
    const n = t.getSource();
    [...this.collection].forEach((r) => {
      var a;
      (a = this._layer) != null && a.getFeatureById(r.name) || this._itemAdded(r);
    });
    const i = [
      n.on("removefeature", ({ feature: r }) => {
        const a = this.collection.getByKey(r == null ? void 0 : r.getId());
        a && this.collection.remove(a);
      })
    ];
    this._layerListeners = () => {
      ee(i);
    };
  }
  mergeOptions(t) {
    super.mergeOptions(t);
  }
  _itemAdded(t) {
    var n;
    if (!((n = this._layer) != null && n.getFeatureById(t.name))) {
      let { feature: i } = t;
      if (!(i instanceof _t)) {
        const r = Te(i);
        i = Array.isArray(r) ? r[0] : r;
      }
      i.setId(t.name), this._layer.addFeatures([i]);
    }
  }
  _itemRemoved(t) {
    var n;
    (n = this._layer) != null && n.getFeatureById(t.name) && this._layer.removeFeaturesById([t.name]);
  }
  // eslint-disable-next-line class-methods-use-this
  _deserializeItem(t) {
    const { features: n } = Te(t.feature);
    return n[0] && (t.feature = n[0]), Promise.resolve(t);
  }
  // eslint-disable-next-line class-methods-use-this
  _serializeItem(t) {
    return {
      id: t.id,
      name: t.name,
      feature: mt(t.feature)
    };
  }
  destroy() {
    this._layerListeners = () => {
    }, this._layer = null, super.destroy();
  }
}
function bs(e, s, t, n, i) {
  const r = t.feature.getId();
  i.title = t.feature.get("title") ?? "Object";
  const a = s.getDefaultLayer();
  let o = !!a.featureVisibility.hiddenObjects[t.name];
  const l = Me({
    name: "hideAction",
    icon: o ? "$vcsCheckbox" : "$vcsCheckboxChecked",
    callback() {
      o ? (a.featureVisibility.showObjects([t.name]), o = !1, this.icon = "$vcsCheckboxChecked") : (a.featureVisibility.hideObjects([t.name]), o = !0, this.icon = "$vcsCheckbox");
    }
  }), d = a.featureVisibility.changed.addEventListener(
    (u) => {
      (u.action === me.HIDE || u.action === me.SHOW) && u.ids.some((c) => c === i.name) && (o = !!a.featureVisibility.hiddenObjects[i.name], l.icon = o ? "$vcsCheckbox" : "$vcsCheckboxChecked");
    }
  );
  i.selectionChanged = (u) => {
    u && o && l.callback();
  }, i.titleChanged = (u) => {
    i.title = u, t.feature.set("title", u);
  }, i.actions.push(
    l,
    {
      name: "measurement.category.zoomTo",
      async callback() {
        var c, m, g;
        const u = (m = (c = t.feature.getGeometry()) == null ? void 0 : c.getExtent) == null ? void 0 : m.call(c);
        if (u && !Ht(u)) {
          const P = ht.createViewpointFromExtent(
            new gt({
              coordinates: u,
              projection: U.toJSON()
            })
          );
          P && (P.animate = !0, await ((g = e.maps.activeMap) == null ? void 0 : g.gotoViewpoint(P)));
        }
      }
    },
    {
      name: "measurement.category.remove",
      callback() {
        if (s.currentFeatures.value.includes(t.feature)) {
          const u = s.currentFeatures.value.filter(
            (c) => c.getId() !== r
          );
          s.currentFeatures.value = u;
        }
        a.removeFeaturesById([r]);
      }
    }
  ), i.destroy = () => {
    d();
  };
}
async function Ps(e, s) {
  const t = e.currentLayer.value, { collectionComponent: n, category: i } = await s.categoryManager.requestCategory(
    {
      type: Pe.className,
      name: "Simple Measurement",
      title: "measurement.category.title",
      featureProperty: "feature"
    },
    x,
    {
      selectable: !0,
      overflowCount: 3,
      renamable: !0
    }
  );
  e.category = i, e.category.setCurrentLayer(t);
  const r = Me({
    name: "hideAllAction",
    icon: "$vcsCheckboxChecked",
    callback() {
      var u, c;
      const d = Object.keys(
        t.featureVisibility.hiddenObjects
      );
      n.items.value.every(
        (m) => !d.includes(m.name)
      ) ? (t.featureVisibility.hideObjects(
        t.getFeatures().map((m) => m.getId())
      ), e.currentFeatures.value && ((c = (u = e.currentSession.value) == null ? void 0 : u.clearSelection) == null || c.call(u)), this.icon = "$vcsCheckbox") : (t.featureVisibility.clearHiddenObjects(), this.icon = "$vcsCheckboxChecked");
    }
  }), a = t.featureVisibility.changed.addEventListener(
    (d) => {
      if (d.action === me.HIDE || d.action === me.SHOW) {
        const u = Object.keys(
          t.featureVisibility.hiddenObjects
        );
        n.items.value.every(
          (c) => u.includes(c.name)
        ) ? r.icon = "$vcsCheckbox" : n.items.value.every(
          (c) => !u.includes(c.name)
        ) ? r.icon = "$vcsCheckboxChecked" : r.icon = "$vcsCheckboxIndeterminate";
      }
    }
  ), { action: o, destroy: l } = Ze(e, n, !1);
  return n.addActions(
    [r, o].map((d) => ({
      action: d,
      owner: x
    }))
  ), n.addItemMapping({
    mappingFunction: bs.bind(null, s, e),
    owner: x
  }), n.addItemMapping({
    mappingFunction: It(
      [N.className, ie.className, Y.className],
      s.maps
    ),
    owner: x
  }), {
    categoryUiItem: n,
    destroy() {
      s.categoryManager.removeOwner(x), l(), a();
    }
  };
}
const Cs = Le({
  name: "MeasurementConfigEditor",
  components: {
    AbstractConfigEditor: Vt,
    VCol: _e,
    VContainer: Bt,
    VRow: xe,
    VcsFormSection: Ve,
    VcsLabel: $e,
    VcsTextField: $t
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
    const s = e.getConfig(), t = Ie({ ...s, ...He(s) });
    function n() {
      var i, r;
      (t.value[L.Oblique].disable || t.value[L.Oblique].decimalPlacesZ) && ((i = t.value[L.Oblique]) == null || delete i.decimalPlacesZ), (t.value[L.Cesium].disable || t.value[L.Cesium].decimalPlacesZ) && ((r = t.value[L.Cesium]) == null || delete r.decimalPlacesZ), e.setConfig(structuredClone(pt(t.value)));
    }
    return {
      localConfig: t,
      apply: n,
      MapNames: L
    };
  }
}), Ms = { key: 0 };
function Ss(e, s, t, n, i, r) {
  const a = $("VcsLabel"), o = $("v-col"), l = $("VcsTextField"), d = $("v-row"), u = $("VcsFormSection"), c = $("v-container"), m = $("AbstractConfigEditor");
  return I(), B(m, vt({ ...e.$attrs, ...e.$props }, { onSubmit: e.apply }), {
    default: y(() => [
      h(c, { class: "pa-0" }, {
        default: y(() => [
          (I(!0), W(
            Dt,
            null,
            bt(Object.values(e.MapNames), (g, P) => (I(), B(u, {
              key: P,
              heading: g.replace("Map", " Map"),
              "start-open": "",
              "header-actions": [
                {
                  name: "toggle",
                  title: `measurement.config.${e.localConfig[g].disable ? "enable" : "disable"}`,
                  icon: `$vcsCheckbox${e.localConfig[g].disable ? "" : "Checked"}`,
                  callback: () => {
                    e.localConfig[g].disable = !e.localConfig[g].disable;
                  }
                }
              ]
            }, {
              default: y(() => [
                e.localConfig[g].disable ? E("v-if", !0) : (I(), W("div", Ms, [
                  h(
                    d,
                    { "no-gutters": "" },
                    {
                      default: y(() => [
                        h(
                          o,
                          null,
                          {
                            default: y(() => [
                              h(a, {
                                "html-for": `${g}_decimalPlaces`,
                                required: ""
                              }, {
                                default: y(() => [
                                  C(
                                    M(e.$t("measurement.config.decimalPlaces")),
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
                        h(
                          o,
                          null,
                          {
                            default: y(() => [
                              h(l, {
                                id: `${g}_decimalPlaces`,
                                modelValue: e.localConfig[g].decimalPlaces,
                                "onUpdate:modelValue": (p) => e.localConfig[g].decimalPlaces = p,
                                modelModifiers: { number: !0 },
                                type: "number",
                                min: "0",
                                rules: [
                                  (p) => (!!p || p === 0) && p >= 0 || "measurement.config.errorInput"
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
                  g !== e.MapNames.OpenLayers ? (I(), B(
                    d,
                    {
                      key: 0,
                      "no-gutters": ""
                    },
                    {
                      default: y(() => [
                        h(
                          o,
                          null,
                          {
                            default: y(() => [
                              h(a, {
                                "html-for": `${g}_decimalPlacesZ`
                              }, {
                                default: y(() => [
                                  C(
                                    M(e.$t("measurement.config.decimalPlacesZ")),
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
                        h(
                          o,
                          null,
                          {
                            default: y(() => [
                              h(l, {
                                id: `${g}_decimalPlacesZ`,
                                modelValue: e.localConfig[g].decimalPlacesZ,
                                "onUpdate:modelValue": (p) => e.localConfig[g].decimalPlacesZ = p,
                                modelModifiers: { number: !0 },
                                placeholder: String(e.localConfig[g].decimalPlaces),
                                min: "0",
                                rules: [
                                  (p) => p >= 0 || "measurement.config.errorInput"
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
                  )) : E("v-if", !0),
                  g === e.MapNames.Cesium ? (I(), B(
                    d,
                    {
                      key: 1,
                      "no-gutters": ""
                    },
                    {
                      default: y(() => [
                        h(
                          o,
                          null,
                          {
                            default: y(() => [
                              h(a, {
                                "html-for": `${g}_decimalPlacesAngle`,
                                required: ""
                              }, {
                                default: y(() => [
                                  C(
                                    M(e.$t("measurement.config.decimalPlacesAngle")),
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
                        h(
                          o,
                          null,
                          {
                            default: y(() => [
                              h(l, {
                                id: `${g}_decimalPlacesAngle`,
                                modelValue: e.localConfig[g].decimalPlacesAngle,
                                "onUpdate:modelValue": (p) => e.localConfig[g].decimalPlacesAngle = p,
                                modelModifiers: { number: !0 },
                                type: "number",
                                min: "0",
                                rules: [
                                  (p) => (!!p || p === 0) && p >= 0 || "measurement.config.errorInput"
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
                  )) : E("v-if", !0)
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
const As = /* @__PURE__ */ We(Cs, [["render", Ss]]);
function Vs(e) {
  let s = () => {
  };
  const t = He(e);
  return {
    get name() {
      return x;
    },
    get version() {
      return Nt;
    },
    get mapVersion() {
      return qt;
    },
    get config() {
      return t;
    },
    async initialize(n) {
      const i = ts(n);
      n.categoryClassRegistry.registerClass(
        this[ft],
        Pe.className,
        Pe
      );
      const { categoryUiItem: r, destroy: a } = await Ps(i, n), o = [
        n.moduleAdded.addEventListener(() => {
          var d;
          (d = i.currentMeasurementMode.value) == null || d.setProjection(
            pe()
          );
        }),
        n.moduleRemoved.addEventListener(() => {
          var d;
          (d = i.currentMeasurementMode.value) == null || d.setProjection(
            pe()
          );
        })
      ], l = n.maps.mapActivated.addEventListener(
        () => {
          const d = ns(i, n), { destroy: u } = fs(
            i,
            n,
            r
          ), c = ps(i);
          vs(n, i, this.name), s = () => {
            o.forEach((m) => {
              m();
            }), d(), u(), a(), c(), i.destroy();
          }, l();
        }
      );
    },
    getDefaultOptions: De,
    toJSON() {
      const n = {}, i = De();
      function r(a) {
        n[a] || Object.assign(n, { [a]: {} });
      }
      return Object.values(L).forEach((a) => {
        t[a].disable !== i[a].disable && (r(a), n[a].disable = t[a].disable), t[a].decimalPlaces !== i[a].decimalPlaces && (r(a), n[a].decimalPlaces = t[a].decimalPlaces);
      }), [L.Cesium, L.Oblique].forEach((a) => {
        t[a].decimalPlacesZ !== i[a].decimalPlacesZ && (r(a), n[a].decimalPlacesZ = t[a].decimalPlacesZ);
      }), t[L.Cesium].decimalPlacesAngle !== i[L.Cesium].decimalPlacesAngle && (r(L.Cesium), n[L.Cesium].decimalPlacesAngle = t[L.Cesium].decimalPlacesAngle), n;
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
            }
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
          select: "Select measurements",
          category: {
            title: "Measurements",
            selectAll: "Select all",
            hideSelected: "Hide measurements",
            hideAll: "Hide all",
            showAll: "Show all",
            zoomTo: "Zoom to",
            rename: "Rename",
            edit: "Edit",
            remove: "Remove",
            removeSelected: "Remove selection",
            exportSelected: "Export selection",
            import: "Import"
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
            }
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
          select: "Messungen",
          category: {
            title: "Messungen",
            selectAll: "Alle selektieren",
            hideSelected: "Selektierte Messungen ausblenden",
            hideAll: "Alle ausblenden",
            showAll: "Alle einblenden",
            zoomTo: "Hin zoomen",
            rename: "Umbenennen",
            edit: "Editieren",
            remove: "Entfernen",
            removeSelected: "Selektion löschen",
            exportSelected: "Selektion exportieren",
            import: "Importieren"
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
          component: As,
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
  Vs as default
};
