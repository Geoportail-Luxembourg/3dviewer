var Ie = Object.defineProperty;
var Pe = (i, e, o) => e in i ? Ie(i, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : i[e] = o;
var de = (i, e, o) => Pe(i, typeof e != "symbol" ? e + "" : e, o);
import { VcsCameraPrimitive as Ae, VcsObject as Re, VcsEvent as X, AbstractInteraction as Ne, EventType as Y, Projection as z, SessionType as De, CesiumMap as U, startEditFeaturesSession as ke, startEditGeometrySession as xe, VectorLayer as Le, wgs84Projection as Fe, maxZIndex as je, markVolatile as We, Viewpoint as Be, TransformationMode as Ue, Category as $e, moduleIdSymbol as He } from "../../../assets/core.js";
import { Color as ee, Matrix4 as ze, Transforms as Ge, Primitive as ce, GeometryInstance as ue, SphereGeometry as Ke, ColorGeometryInstanceAttribute as he, PerInstanceColorAppearance as fe, SphereOutlineGeometry as Ye, Math as k, Cartesian3 as W, ShadowMap as Xe, Camera as Je, HeightReference as Ze } from "../../../assets/cesium.js";
import { shallowRef as q, ref as $, nextTick as qe, inject as me, computed as ve, reactive as J, watchEffect as Qe, watch as G, onMounted as et, onUnmounted as tt, resolveComponent as b, openBlock as M, createElementBlock as B, createBlock as N, withCtx as h, createTextVNode as F, toDisplayString as A, createCommentVNode as H, createVNode as p, createElementVNode as it, Fragment as pe, renderList as we, mergeProps as ot } from "../../../assets/vue.js";
import { ol$Observable$unByKey as st, Feature as nt, ol$geom$Point as at, ol$style$Style as rt } from "../../../assets/ol.js";
import { VcsTextField as lt, VcsSlider as dt, VcsLabel as Ce, VcsFormSection as Ee, VcsSelect as ye, VcsFormButton as ct, VcsFeatureTransforms as ut, VcsHelp as ht, makeEditorCollectionComponentClass as ft, WindowSlot as mt, ToolboxType as ge, createSupportedMapMappingFunction as vt, createListExportAction as pt, downloadText as wt, createListImportAction as gt, NotificationType as Z, AbstractConfigEditor as _t } from "../../../assets/ui.js";
import { VContainer as Ve, VRow as be, VCol as Me, VDivider as Ct, VColorPicker as Et } from "../../../assets/vuetify.js";
const Te = Symbol("isMatcher"), yt = Symbol("Integer"), Vt = Symbol("NonEmptyString"), re = /* @__PURE__ */ new Map();
[
  [String, "string"],
  [Number, "number"],
  [Boolean, "boolean"],
  [Function, "function"],
  [void 0, "undefined"],
  [Symbol, "symbol"]
].forEach(([i, e]) => {
  re.set(i, e);
});
function bt(i) {
  return i == null ? void 0 : i[Te];
}
function oe(i) {
  if (!i || String(i) !== "[object Object]")
    return !1;
  const e = Object.getPrototypeOf(i);
  if (!e)
    return !0;
  const t = {}.hasOwnProperty.call(e, "constructor") && e.constructor;
  return typeof t == "function" && String(t) === String(Object);
}
function R(i, e) {
  if (i === null)
    return "null";
  if (typeof i > "u")
    return "undefined";
  if (e)
    return typeof i;
  let o;
  if (Array.isArray(i))
    o = `[${i.map((s) => R(s, e)).join(",")}]`;
  else
    try {
      o = JSON.stringify(i);
    } catch {
      o = typeof i;
    }
  return o = o || typeof i, o.length > 20 ? `${o.substring(0, 20)}...` : o;
}
function Mt(i, e) {
  return typeof e == "string" || typeof e == "number" || typeof e == "boolean" || typeof e == "symbol" ? i === e ? !1 : `Expected ${R(i)} to equal ${e.toString()}` : null;
}
function Tt(i, e, o) {
  if (Array.isArray(e)) {
    if (e.length !== 1)
      throw new Error("Array patterns may only have one type");
    if (Array.isArray(i)) {
      let t = !1;
      return i.findIndex((n) => (t = o(n, e[0]), t)) > -1 ? `${String(t)} in ${R(i)}` : !1;
    }
    return `Expected ${R(i)} to be an Array`;
  }
  return null;
}
function se(i, e, o, t) {
  const s = t ? `${t}.` : "";
  if (!oe(i))
    return `Expected ${R(i)} to be a plain Object`;
  let r = !1;
  const l = Object.keys(e).find((w) => {
    const c = i[w];
    return oe(e[w]) ? r = se(c, e[w], o, s + w) : r = o(c, e[w]), r;
  });
  return l ? `${String(r)} in object.${s}${l}` : !1;
}
function St(i, e) {
  if (e === Number)
    return Number.isFinite(i) ? !1 : `expected ${R(i)} to be a number, excluding NaN`;
  if (e === yt)
    return Number.isInteger(i) ? !1 : `expected ${R(i)} to be an integer number`;
  if (e === Vt)
    return typeof i == "string" && i.length > 0 ? !1 : `expected ${R(i)} to be a non-empty string`;
  const o = re.get(e);
  return o ? typeof i === o ? !1 : `expected ${R(i)} to be a ${String(o)}` : null;
}
function Se(i) {
  if (i === null)
    return "null";
  const e = re.get(i);
  if (e)
    return e;
  const o = i == null ? void 0 : i.className;
  if (o)
    return o;
  let t = String(i);
  const s = t.match(/function (.*)\(/);
  if (s && s.length > 1) {
    const n = i == null ? void 0 : i.name;
    return n || s[1].substring(0, 20);
  }
  if (oe(i)) {
    const n = {};
    Object.keys(i).forEach((r) => {
      n[r] = Se(i[r]);
    });
    try {
      t = `Object of ${JSON.stringify(n)}`;
    } catch {
      t = "Object";
    }
  }
  return t;
}
function Ot(i, e) {
  const o = (t, s) => {
    if (bt(s))
      return s(t);
    if (s == null)
      return t === s ? !1 : `Expected ${R(t)} to be ${String(s)}`;
    const n = St(t, s);
    if (n !== null)
      return n;
    const r = Mt(t, s);
    if (r !== null)
      return r;
    if (Array.isArray(s))
      return Tt(t, s, o);
    if (s === Object)
      return se(t, {}, o);
    if (s instanceof Function)
      return t instanceof s ? !1 : `Expected ${R(t, !0)} to be of Type ${Se(s)}`;
    if (typeof s == "object") {
      const l = se(t, s, o);
      return l || !1;
    }
    throw new Error(`Cannot handle pattern ${String(s)}`);
  };
  return o(i, e);
}
let It = Error;
function le(i, e) {
  const o = Ot(i, e);
  if (o)
    throw new It(`Match failed: ${o}`);
}
function Pt(i) {
  le(i, Object);
  const e = Object.values(i), o = (t) => e.includes(t) ? !1 : `expected ${R(t)} to be of enum: ${e.join(", ")}`;
  return o[Te] = !0, o;
}
function At(i, e, o) {
  if (i != null) {
    const t = Object.values(e).find((s) => s == i);
    if (t != null)
      return t;
  }
  return o;
}
const Rt = new ee(), te = new ze();
class Nt extends Ae {
  constructor(e) {
    super(e), this.spot = e.spot;
  }
  /**
   * Updates the camera primitive.
   * @param {unknown} frameState
   */
  update(e) {
    if (this.show)
      if (this.spot)
        super.update(e);
      else {
        const o = this._planesPrimitives, t = this._outlinePrimitives;
        o.length === 0 && (Ge.eastNorthUpToFixedFrame(
          this._camera.positionWC,
          void 0,
          te
        ), o[0] = new ce({
          allowPicking: this.allowPicking,
          geometryInstances: new ue({
            geometry: new Ke({
              radius: 2
            }),
            attributes: {
              color: he.fromColor(
                ee.fromAlpha(this._color, 0.1, Rt)
              )
            },
            modelMatrix: te
          }),
          appearance: new fe({
            translucent: !0,
            flat: !0
          }),
          asynchronous: !1
        }), t[0] = new ce({
          allowPicking: this.allowPicking,
          geometryInstances: new ue({
            geometry: new Ye({
              radius: 2
            }),
            attributes: {
              color: he.fromColor(this._color)
            },
            modelMatrix: te
          }),
          appearance: new fe({
            translucent: !1,
            flat: !0
          }),
          asynchronous: !1
        }));
        const { length: s } = o;
        for (let n = 0; n < s; ++n)
          t[n].update(e), o[n].update(e);
      }
  }
}
const g = {
  CONE: "cone",
  THREESIXTY: "360"
};
function Dt(i, e) {
  const o = new Je(i), t = (
    /** @type {import("@vcmap-cesium/engine").PerspectiveFrustum} */
    o.frustum
  );
  return t.fov = e.fov, t.near = e.near, t.aspectRatio = e.aspectRatio, t.far = e.far, o;
}
const I = class I extends Re {
  static get className() {
    return "Viewshed";
  }
  /**
   * Returns the default viewshed options.
   * @returns {{frustum: ShadowFrustumOptions, shadowColor: string, visibleColor: string, orientation: import("@vcmap-cesium/engine").HeadingPitchRollValues, position: import("ol/coordinate").Coordinate}}
   */
  static getDefaultOptions() {
    return {
      frustum: {
        fov: k.PI / 3,
        near: 1,
        aspectRatio: 1,
        far: 300
      },
      shadowColor: "#3333331A",
      visibleColor: "#FF990080",
      orientation: {
        heading: 0,
        pitch: 0,
        roll: 0
      },
      position: [0, 0, 0]
    };
  }
  /**
   * @param {ViewshedOptions} options The options for the viewshed.
   */
  constructor(e) {
    var o, t, s, n, r, l;
    super(e), this._cesiumMap = null, this._shadowCamera = null, this._scene = null, this._frustumOptions = {
      fov: ((o = e.frustumOptions) == null ? void 0 : o.fov) || I.getDefaultOptions().frustum.fov,
      far: ((t = e.frustumOptions) == null ? void 0 : t.far) || I.getDefaultOptions().frustum.far,
      near: ((s = e.frustumOptions) == null ? void 0 : s.near) || I.getDefaultOptions().frustum.near,
      aspectRatio: ((n = e.frustumOptions) == null ? void 0 : n.aspectRatio) || I.getDefaultOptions().frustum.aspectRatio
    }, this._headingPitchRollValues = e.orientation || {
      ...I.getDefaultOptions().orientation
    }, this._position = e.position || I.getDefaultOptions().position, this._viewshedType = At(e.viewshedType, g), this._colors = {
      visibleColor: ee.fromCssColorString(
        ((r = e.colorOptions) == null ? void 0 : r.visibleColor) || I.getDefaultOptions().visibleColor
      ),
      shadowColor: ee.fromCssColorString(
        ((l = e.colorOptions) == null ? void 0 : l.shadowColor) || I.getDefaultOptions().shadowColor
      )
    }, this._heightOffset = e.heightOffset || 0, this._shadowMap = null, this._primitive = null, this._showPrimitive = !!e.showPrimitive, this._positionChanged = new X(), this._active = !1;
  }
  /**
   * Sets a new position for the shadow map. If no shadow map was created yet, due to missing position, this method triggers the creation of a shadow map.
   * @param {import("ol/coordinate").Coordinate} coords The new positions coordinates in degrees
   */
  set position(e) {
    le(e, [Number]), this._position = e, this._shadowCamera && (this._shadowCamera.position = W.fromDegrees(
      e[0],
      e[1],
      e[2] + this._heightOffset
    ), this._shadowCamera.setView({ orientation: this._headingPitchRollValues }), this._updatePrimitive()), this._positionChanged.raiseEvent(e);
  }
  /**
   * @returns {import("ol/coordinate").Coordinate} The current position of the viewshed source.
   */
  get position() {
    return [...this._position];
  }
  /**
   * Getter for Event that is triggered each time the position is changed.
   * @returns {import("@vcmap/core").VcsEvent<number[]>} The new position
   */
  get positionChanged() {
    return this._positionChanged;
  }
  /**
   * Sets the height offset of the viewshed.
   * @param {number} value the offset that is added to the position height.
   */
  set heightOffset(e) {
    this._heightOffset = e, this._shadowCamera && (this._shadowCamera.position = W.fromDegrees(
      this.position[0],
      this.position[1],
      this.position[2] + e
    ), this._updatePrimitive());
  }
  /**
   * Getter for height offset.
   * @returns {number}
   */
  get heightOffset() {
    return this._heightOffset;
  }
  /**
   * Sets the reach of the viewshed.
   * @param {number} value The distance in meters.
   */
  set distance(e) {
    this._frustumOptions.far = e > I.MIN_DISTANCE ? e : I.MIN_DISTANCE, this._shadowCamera && (this._shadowCamera.frustum.far = this._frustumOptions.far, this._viewshedType === g.THREESIXTY && this._updateShadowMap(), this._viewshedType === g.CONE && this._updatePrimitive());
  }
  /**
   * Returns the reach of the viewshed.
   * @returns {number} The distance in meters.
   */
  get distance() {
    return this._frustumOptions.far;
  }
  /**
   * Sets the field of view of a cone viewshed. Does not have a impact on 360 viewshed.
   * @param {number} value The field of view in degrees.
   */
  set fov(e) {
    this._frustumOptions.fov = e * k.RADIANS_PER_DEGREE, this._shadowCamera && (this._shadowCamera.frustum.fov = e * k.RADIANS_PER_DEGREE, this._viewshedType === g.CONE && (this._updateShadowMap(), this._updatePrimitive()));
  }
  /**
   * Returns the field of view.
   * @returns {number} The field of view in degrees.
   */
  get fov() {
    return this._frustumOptions.fov * k.DEGREES_PER_RADIAN;
  }
  /**
   * Sets the heading of a cone viewshed. Does not have impact on 360 viewshed.
   * @param {number} value Heading in degrees.
   */
  set heading(e) {
    this._headingPitchRollValues.heading = e * k.RADIANS_PER_DEGREE, this._shadowCamera && (this._shadowCamera.setView({
      orientation: {
        heading: e * k.RADIANS_PER_DEGREE,
        pitch: this._shadowCamera.pitch,
        roll: 0
      }
    }), this._viewshedType === g.CONE && this._updatePrimitive());
  }
  /**
   * Getter for the heading of a cone viewshed.
   * @returns {number} The heading in degress.
   */
  get heading() {
    return this._headingPitchRollValues.heading * k.DEGREES_PER_RADIAN;
  }
  /**
   * Sets the pitch of a cone viewshed. 0 is horizontal. Does not have impact on 360 viewshed.
   * @param {number} value The pitch in degrees.
   */
  set pitch(e) {
    if (this._headingPitchRollValues.pitch = e * k.RADIANS_PER_DEGREE, this._shadowCamera) {
      const o = e * k.RADIANS_PER_DEGREE - this._shadowCamera.pitch;
      this._shadowCamera.lookUp(o), this._viewshedType === g.CONE && this._updatePrimitive();
    }
  }
  /**
   * Getter for the pitch of a cone viewshed.
   * @returns {number} The pitch in degrees.
   */
  get pitch() {
    return this._headingPitchRollValues.pitch * k.DEGREES_PER_RADIAN;
  }
  /**
   * Sets whether the primitive of the viewshed should be shown or not.
   * @param {boolean} value
   */
  set showPrimitive(e) {
    this._showPrimitive = e, this._updatePrimitive();
  }
  /**
   * Gets if the primitive of the viewshed is shown or not.
   * @returns {boolean}
   */
  get showPrimitive() {
    return this._showPrimitive;
  }
  /**
   * Returns the type of the Viewshed.
   * @returns {ViewshedTypes}
   */
  get type() {
    return this._viewshedType;
  }
  /**
   * @returns {ShadowMap|null}
   */
  get shadowMap() {
    return this._shadowMap;
  }
  /**
   * Deactivates the viewshed by removing primitive and removing shadowMap.
   */
  deactivate() {
    var e;
    this._active && (this._removePrimitive(), this._shadowMap.enabled = !1, (e = this._shadowMap) == null || e.destroy(), this._shadowCamera = null, this._scene = null, this._cesiumMap = null, this._shadowMap = null, this._active = !1);
  }
  /**
   * Activates viewshed.
   * @param {import("@vcmap/core").CesiumMap} cesiumMap The cesium map to which the shadow map of the viewshed is applied to.
   */
  activate(e) {
    if (this._active || (this._active = !0), e !== this._cesiumMap) {
      this._cesiumMap = e;
      const o = e.getScene();
      if (o)
        this._shadowCamera = Dt(o, this._frustumOptions), this._position && (this.position = this._position), this._scene = o;
      else
        throw new Error("CesiumMap contains no scene");
      this._updateShadowMap(), this._updatePrimitive();
    }
  }
  /**
   * Updates the shadow map by creating a new one and applying all the current parameters.
   */
  _updateShadowMap() {
    var e;
    !this._active || !this._shadowCamera || !this._cesiumMap || !this._scene || ((e = this._shadowMap) == null || e.destroy(), this._shadowMap = new Xe({
      // @ts-ignore
      context: this._scene.context,
      lightCamera: this._shadowCamera,
      enabled: !0,
      isPointLight: this._viewshedType === g.THREESIXTY,
      softShadows: !0,
      fromLightSource: !0,
      cascadesEnabled: !1,
      pointLightRadius: this._shadowCamera.frustum.far,
      maximumDistance: 200,
      size: 2048
    }), this._shadowMap.viewshed = this._colors, this._cesiumMap.setShadowMap(this._shadowMap));
  }
  _removePrimitive() {
    var e;
    this._primitive && !this._primitive.isDestroyed() && ((e = this._scene) == null || e.primitives.remove(this._primitive), this._primitive.destroy(), this._primitive = null);
  }
  _updatePrimitive() {
    this._showPrimitive && this._active && this._scene ? (this._removePrimitive(), this._primitive = new Nt({
      camera: this._shadowCamera,
      allowPicking: !1,
      spot: this._viewshedType === g.CONE
    }), this._scene.primitives.add(this._primitive)) : this._removePrimitive();
  }
  /**
   * Sets distance and, in case of cone viewsheds, also heading and pitch. Only works when viewshed is **active**.
   * @param {number[]} target Point to calculate distance, heading and pitch from.
   */
  lookAt(e) {
    if (!this._shadowCamera)
      return;
    const o = W.fromDegrees(e[0], e[1], e[2]);
    if (this.distance = W.distance(this._shadowCamera.position, o), this.type === g.CONE && !o.equals(this._shadowCamera.position)) {
      const t = new W();
      W.subtract(o, this._shadowCamera.position, o), W.normalize(o, o), W.normalize(this._shadowCamera.position, t), this._shadowCamera.setView({
        orientation: {
          direction: o,
          up: t
        }
      }), this._headingPitchRollValues.heading = this._shadowCamera.heading, this._headingPitchRollValues.pitch = this._shadowCamera.pitch;
    }
    this._updatePrimitive();
  }
  /**
   * Returns an object with all the settings of a viewshed instance.
   * @returns {ViewshedOptions}
   */
  toJSON() {
    return {
      ...super.toJSON(),
      viewshedType: this.type,
      position: this.position,
      frustumOptions: { ...this._frustumOptions },
      orientation: { ...this._headingPitchRollValues },
      colorOptions: {
        visibleColor: this._colors.visibleColor.toCssHexString(),
        shadowColor: this._colors.shadowColor.toCssHexString()
      },
      showPrimitive: this.showPrimitive,
      heightOffset: this.heightOffset
    };
  }
  /**
   * Destroys the viewshed.
   */
  destroy() {
    var t;
    const e = this._cesiumMap, o = this._shadowMap;
    this.deactivate(), ((t = e == null ? void 0 : e.getScene()) == null ? void 0 : t.shadowMap) === o && e.setDefaultShadowMap();
  }
};
de(I, "MIN_DISTANCE", 10);
let D = I;
class kt extends Ne {
  /**
   *
   * @param {import("./viewshed").default} viewshed
   */
  constructor(e) {
    super(Y.CLICKMOVE), this._viewshed = e, this._positioned = new X(), this._finished = new X(), this._position = !1, this.setActive();
  }
  get finished() {
    return this._finished;
  }
  get positioned() {
    return this._positioned;
  }
  async pipe(e) {
    return e.position && (this._position ? (this._viewshed.lookAt(z.mercatorToWgs84(e.position)), e.type & Y.CLICK && (this.setActive(!1), this._finished.raiseEvent(null))) : (this._viewshed.position = z.mercatorToWgs84(e.position), e.type & Y.CLICK && (this._position = !0, this._positioned.raiseEvent(null)))), e;
  }
  destroy() {
    super.destroy(), this._finished.destroy(), this._positioned.destroy();
  }
}
const P = {
  ABSOLUTE: "absolute",
  RELATIVE: "relative"
}, E = {
  CREATE: "create",
  VIEW: "view",
  EDIT: "edit",
  MOVE: "move",
  MULTI_SELECT: "multiSelect"
}, _e = 1.8;
function xt(i) {
  const e = new Le({
    projection: Fe.toJSON(),
    zIndex: je - 1
  });
  We(e), e.activate();
  const o = new nt(new at(i));
  return o.setStyle(new rt({})), e.addFeatures([o]), e.vectorProperties.altitudeMode = Ze.NONE, {
    layer: e,
    feature: o,
    destroy() {
      o.dispose(), e.destroy();
    }
  };
}
function ie(i, e) {
  const o = e === P.ABSOLUTE ? Y.CLICKMOVE : Y.NONE;
  i.setActive(o), i.pickPosition = o, i.pullPickedPosition = 1.8;
}
function Lt(i, e, o) {
  const t = q(null), s = $(null), n = $(null), r = $(P.ABSOLUTE);
  let l = () => {
  };
  const w = q(null), c = q([]);
  let d = () => {
  };
  function f() {
    var a;
    s.value && t.value ? (t.value.deactivate(), o.setVisibility(t.value.name, !1)) : (a = t.value) == null || a.destroy();
  }
  function m(a = !0) {
    d(), l(), f(), t.value = null, a && o.clearSelection(), s.value = null, n.value = null;
  }
  function _(a) {
    d(), f(), i.maps.activeMap instanceof U && (t.value = a, a.activate(i.maps.activeMap), d = i.maps.activeMap.shadowMapChanged.addEventListener((v) => {
      var u;
      v !== ((u = t.value) == null ? void 0 : u.shadowMap) && m(!1);
    }));
  }
  async function y(a) {
    m(), await qe();
    const { eventHandler: v } = i.maps, { featureInteraction: u } = v, C = new D({
      viewshedType: a,
      colorOptions: {
        visibleColor: e.visibleColor,
        shadowColor: e.shadowColor
      },
      heightOffset: r.value === P.ABSOLUTE ? 0 : _e
    });
    _(C);
    const V = new kt(t.value);
    V.finished.addEventListener(() => {
      l(), t.value ? (t.value.showPrimitive = !0, n.value = E.EDIT) : m();
    });
    const O = v.addExclusiveInteraction(
      V,
      () => {
        V.destroy();
      }
    );
    ie(u, r.value), V.positioned.addEventListener(() => {
      ie(u, P.ABSOLUTE);
    }), l = () => {
      O(), V.destroy(), u.setActive(), l = () => {
      };
    }, n.value = E.CREATE;
  }
  function x(a) {
    var v;
    if (t.value && a) {
      l();
      const {
        layer: u,
        feature: C,
        destroy: V
      } = xt(t.value.position);
      i.layers.add(u), c.value = [C], r.value === P.ABSOLUTE ? (w.value = ke(i, u), w.value.setFeatures([C])) : (w.value = xe(i, u), w.value.setFeature(C)), w.value.stopped.addEventListener(() => {
        l();
      });
      const O = (v = C.getGeometry()) == null ? void 0 : v.on("change", () => {
        t.value ? t.value.position = z.mercatorToWgs84(
          /** @type {import("ol/geom").Point} */
          C.getGeometry().getCoordinates()
        ) : m();
      });
      n.value = E.MOVE, l = () => {
        var K;
        l = () => {
        }, O && st(O), (K = w.value) == null || K.stop(), w.value = null, c.value = [], i.layers.remove(u), V(), n.value = E.EDIT;
      };
    } else
      l();
  }
  function S(a, v) {
    l(), t.value !== v && (_(v), r.value = v.heightOffset ? P.RELATIVE : P.ABSOLUTE), s.value = !!v.properties.title, n.value = a, s.value && o.setVisibility(v.name, !0);
  }
  const L = [
    o.collectionComponent.collection.removed.addEventListener(
      (a) => {
        var v;
        o.remove(a.name), ((v = t.value) == null ? void 0 : v.name) === a.name && m();
      }
    ),
    o.renamed.addEventListener(({ item: a, title: v }) => {
      var C;
      const u = i.windowManager.get(
        `${o.collectionComponent.id}-editor`
      );
      u && ((C = t.value) == null ? void 0 : C.name) === a.name && (u.state.headerTitle = v);
    }),
    o.visibilityChanged.addEventListener((a) => {
      var u;
      const v = ((u = t.value) == null ? void 0 : u.name) === a.name;
      v ? m() : (S(E.VIEW, a), o.clearSelection()), o.setVisibility(a.name, !v);
    })
  ];
  function T(a) {
    if (!(a === r.value || !t.value)) {
      if (r.value = a, n.value === E.MOVE && l(), n.value === E.CREATE)
        ie(
          i.maps.eventHandler.featureInteraction,
          a
        ), t.value.heightOffset = a === P.ABSOLUTE ? 0 : _e;
      else if (n.value === E.EDIT) {
        const { position: v, heightOffset: u } = t.value;
        a === P.RELATIVE ? i.maps.activeMap.getHeightFromTerrain([z.wgs84ToMercator(v)]).then((C) => {
          const V = z.mercatorToWgs84(C[0]);
          t.value && (t.value.heightOffset = v[2] - V[2], t.value.position = V);
        }) : (t.value.position = [
          v[0],
          v[1],
          v[2] + u
        ], t.value.heightOffset = 0);
      }
    }
  }
  return {
    currentViewshed: t,
    currentIsPersisted: s,
    currentEditSession: w,
    currentFeatures: c,
    createViewshed: y,
    viewViewshed(a) {
      S(E.VIEW, a);
    },
    editViewshed(a) {
      S(E.EDIT, a), s.value && (o.setSelection(a.name), o.collectionComponent.openEditorWindow(a));
    },
    persistCurrent() {
      t.value && (o.add(t.value), s.value = !0, o.setSelection(t.value.name), o.setVisibility(t.value.name, !0));
    },
    moveCurrentViewshed: x,
    setupMultiSelect() {
      l(), n.value = E.MULTI_SELECT, f(), t.value = null;
    },
    mode: n,
    heightMode: r,
    changeHeightMode: T,
    async placeCurrentFeaturesOnTerrain() {
      var a, v;
      if (t.value && ((a = w.value) == null ? void 0 : a.type) === De.EDIT_FEATURES && i.maps.activeMap instanceof U) {
        const C = (await i.maps.activeMap.getHeightFromTerrain([
          z.wgs84ToMercator((v = t.value) == null ? void 0 : v.position)
        ]))[0][2] - t.value.position[2];
        w.value.translate(0, 0, C);
      }
    },
    stop: m,
    destroy() {
      m(), L.forEach((a) => a());
    }
  };
}
const Oe = (i, e) => {
  const o = i.__vccOpts || i;
  for (const [t, s] of e)
    o[t] = s;
  return o;
}, Ft = {
  distance: [D.MIN_DISTANCE, 2e3],
  fov: [25, 85],
  heading: [0, 360],
  pitch: [-90, 90]
}, jt = {
  components: {
    VcsTextField: lt,
    VContainer: Ve,
    VRow: be,
    VCol: Me,
    VcsSlider: dt,
    VcsLabel: Ce,
    VcsFormSection: Ee,
    VDivider: Ct,
    VcsSelect: ye,
    VcsFormButton: ct,
    VcsFeatureTransforms: ut,
    VcsHelp: ht
  },
  name: "ViewshedWindow",
  props: {
    getViewshed: {
      type: Function,
      required: !1,
      default: void 0
    },
    selection: {
      type: Object,
      required: !1,
      default: void 0
    }
  },
  setup(i) {
    var v;
    const e = (
      /** @type {import("./viewshedManager.js").ViewshedManager} */
      me("manager")
    ), o = (
      /** @type {import("@vcmap/ui").VcsUiApp} */
      me("vcsApp")
    ), {
      currentViewshed: t,
      mode: s,
      currentIsPersisted: n
    } = e, r = $(
      ((v = o.maps.activeMap) == null ? void 0 : v.movementApiCallsDisabled) ?? !1
    );
    let l = () => {
    };
    const w = ve(() => i.selection);
    let c = () => {
    };
    const d = J({
      X: void 0,
      Y: void 0,
      Z: void 0
    }), f = q();
    let m = () => {
    };
    const _ = J({
      showPrimitive: !1,
      distance: void 0,
      fov: void 0,
      heading: void 0,
      pitch: void 0
    }), y = $();
    function x() {
      t.value && (d.X = t.value.position[0], d.Y = t.value.position[1], d.Z = e.heightMode.value === P.ABSOLUTE ? t.value.position[2] : t.value.heightOffset);
    }
    function S() {
      x(), t.value && (_.distance = t.value.distance, _.fov = t.value.fov, _.heading = t.value.heading, _.pitch = t.value.pitch, _.showPrimitive = t.value.showPrimitive, y.value = t.value.type);
    }
    Qe(() => {
      t.value && s.value !== E.CREATE && S();
    }), G(
      t,
      () => {
        t.value && (c(), c = t.value.positionChanged.addEventListener(() => {
          x(), m();
        }));
      },
      { immediate: !0 }
    );
    async function L() {
      var V, O;
      (V = t.value) == null || V.deactivate();
      const u = (
        /** @type {import("@vcmap/core").CesiumMap} */
        (O = o.maps.activeMap.getScene()) == null ? void 0 : O.camera
      ), C = u == null ? void 0 : u.changed.addEventListener(() => {
        m();
      });
      m = () => {
        var K;
        C == null || C(), f.value = null, (K = t.value) == null || K.activate(o.maps.activeMap), m = () => {
        };
      };
    }
    et(() => {
      var C, V;
      const u = (C = i.getViewshed) == null ? void 0 : C.call(i);
      u && e.editViewshed(u), l = (V = o.maps.activeMap) == null ? void 0 : V.movementDisabledChanged.addEventListener(
        (O) => {
          r.value = O.apiCalls;
        }
      );
    }), tt(() => {
      c(), m(), l(), n.value || ((s.value === E.EDIT || s.value === E.MOVE) && t.value ? e.viewViewshed(t.value) : s.value === E.CREATE && e.stop()), w.value && (w.value.length > 1 ? e.setupMultiSelect() : w.value.length === 1 && t.value ? e.viewViewshed(t.value) : (
        // when a persited viewshed is deselected, stops plugin
        !w.value.length && s.value === E.EDIT && e.stop(!1)
      ));
    }), S();
    function T(u, C) {
      m(), t.value && (_[u] = C, t.value[u] = C);
    }
    const a = ve(() => {
      const u = [];
      return y.value === g.CONE && u.push({
        name: "jumpToViewpoint",
        title: f.value ? "viewshed.returnToViewpoint" : "viewshed.jumpToViewpoint",
        icon: "mdi-human-male",
        active: !!f.value,
        disabled: r.value,
        async callback() {
          var C, V, O;
          e.moveCurrentViewshed(!1), t.value && !f.value ? (f.value = await ((C = o.maps.activeMap) == null ? void 0 : C.getViewpoint()), await ((V = o.maps.activeMap) == null ? void 0 : V.gotoViewpoint(
            new Be({
              groundPosition: [
                t.value.position[0],
                t.value.position[1],
                t.value.position[2] + t.value.heightOffset
              ],
              heading: t.value.heading,
              pitch: t.value.pitch,
              distance: 0,
              animate: !0
              // if not animate, async does not work and the cameraChanged listener is triggered immediately. alternatively set timeout
            })
          )), L()) : f.value && ((O = o.maps.activeMap) == null || O.gotoViewpoint(f.value), m());
        }
      }), u.push({
        name: "moveViewshed",
        title: "viewshed.move",
        icon: e.heightMode.value === P.RELATIVE ? "$vcsEditVertices" : "mdi-axis-arrow",
        active: s.value === E.MOVE,
        callback() {
          e.moveCurrentViewshed(
            s.value !== E.MOVE
          );
        }
      }), u.unshift({
        name: "showPrimitive",
        title: "viewshed.showPrimitive",
        icon: "mdi-eye",
        active: _.showPrimitive,
        callback() {
          this.active = !this.active, T("showPrimitive", this.active);
        }
      }), u;
    });
    return {
      position: d,
      setPosition(u, C, V) {
        if (m(), !!t.value) {
          if (V === 2 && e.heightMode.value === P.RELATIVE)
            t.value.heightOffset = Number(u);
          else {
            const O = [...t.value.position];
            O[V] = Number(u), t.value.position = O;
          }
          d[C] = Number(u);
        }
      },
      parameters: _,
      setParameter: T,
      parameterRanges: Ft,
      ViewshedPluginModes: E,
      viewshedMode: s,
      currentIsPersisted: n,
      viewshedType: y,
      ViewshedTypes: g,
      HeightModes: P,
      heightMode: e.heightMode,
      TransformationMode: Ue,
      changeHeightMode: e.changeHeightMode,
      async createNewViewshed() {
        await e.createViewshed(y.value);
      },
      addToMyWorkspace: () => e.persistCurrent(),
      cancel: () => e.stop(),
      headerActions: a
    };
  }
}, Wt = { key: 0 }, Bt = { class: "px-1 py-0" }, Ut = { key: 0 }, $t = { key: 1 }, Ht = {
  key: 3,
  class: "d-flex w-full justify-space-between px-2 pt-2 pb-1"
}, zt = {
  key: 4,
  class: "d-flex w-full justify-end px-2 pt-2 pb-1"
};
function Gt(i, e, o, t, s, n) {
  const r = b("VcsHelp"), l = b("v-row"), w = b("VcsFeatureTransforms"), c = b("VcsTextField"), d = b("v-col"), f = b("v-container"), m = b("VcsFormSection"), _ = b("v-divider"), y = b("VcsLabel"), x = b("VcsSelect"), S = b("VcsSlider"), L = b("VcsFormButton");
  return M(), B("div", null, [
    t.viewshedMode === t.ViewshedPluginModes.CREATE ? (M(), B("div", Wt, [
      t.viewshedType === t.ViewshedTypes.CONE ? (M(), N(r, { key: 0 }, {
        default: h(() => [
          F(
            A(i.$t("viewshed.createDescription")),
            1
            /* TEXT */
          )
        ]),
        _: 1
        /* STABLE */
      })) : t.viewshedType === t.ViewshedTypes.THREESIXTY ? (M(), N(r, { key: 1 }, {
        default: h(() => [
          F(
            A(i.$t("viewshed.createThreeSixtyDescription")),
            1
            /* TEXT */
          )
        ]),
        _: 1
        /* STABLE */
      })) : H("v-if", !0)
    ])) : t.viewshedMode === t.ViewshedPluginModes.EDIT || t.viewshedMode === t.ViewshedPluginModes.MOVE ? (M(), N(m, {
      key: 1,
      "header-actions": t.headerActions,
      heading: "viewshed.viewpoint",
      "action-button-list-overflow-count": 3
    }, {
      default: h(() => [
        p(f, { class: "px-1 py-0" }, {
          default: h(() => [
            p(l, { "no-gutters": "" }, {
              default: h(() => [
                it(
                  "span",
                  Bt,
                  A(i.$t("viewshed.position")),
                  1
                  /* TEXT */
                )
              ]),
              _: 1
              /* STABLE */
            }),
            t.viewshedMode === t.ViewshedPluginModes.MOVE && t.heightMode === t.HeightModes.ABSOLUTE ? (M(), N(l, {
              key: 0,
              "no-gutters": ""
            }, {
              default: h(() => [
                p(w, {
                  "transformation-mode": t.TransformationMode.TRANSLATE,
                  "feature-properties": { altitudeMode: "absolute" },
                  "allow-z-input": !0,
                  class: "w-100"
                }, null, 8, ["transformation-mode"])
              ]),
              _: 1
              /* STABLE */
            })) : (M(), N(l, {
              key: 1,
              "no-gutters": ""
            }, {
              default: h(() => [
                (M(!0), B(
                  pe,
                  null,
                  we(t.position, (T, a, v) => (M(), N(
                    d,
                    {
                      key: v,
                      class: "pb-1"
                    },
                    {
                      default: h(() => [
                        p(c, {
                          "model-value": T,
                          "onUpdate:modelValue": (u) => t.setPosition(u, a, v),
                          type: "number",
                          prefix: a,
                          step: a === "Z" ? 1 : 1e-4,
                          unit: a === "Z" ? "m" : "°",
                          decimals: a === "Z" ? 2 : 8,
                          disabled: t.viewshedMode === t.ViewshedPluginModes.MOVE && !(a === "Z" && t.heightMode === t.HeightModes.RELATIVE),
                          "hide-spin-buttons": !0
                        }, null, 8, ["model-value", "onUpdate:modelValue", "prefix", "step", "unit", "decimals", "disabled"])
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
        })
      ]),
      _: 1
      /* STABLE */
    }, 8, ["header-actions"])) : H("v-if", !0),
    p(_),
    p(f, { class: "px-1 py-0" }, {
      default: h(() => [
        p(l, { "no-gutters": "" }, {
          default: h(() => [
            p(d, null, {
              default: h(() => [
                p(y, { "html-for": "heightMode" }, {
                  default: h(() => [
                    F(
                      A(i.$t("viewshed.heightMode")),
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
            p(d, null, {
              default: h(() => [
                p(x, {
                  id: "heightMode",
                  items: Object.values(t.HeightModes).map((T) => ({
                    value: T,
                    title: `viewshed.${T}`
                  })),
                  "model-value": t.heightMode,
                  "onUpdate:modelValue": t.changeHeightMode
                }, null, 8, ["items", "model-value", "onUpdate:modelValue"])
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
    t.viewshedMode === t.ViewshedPluginModes.EDIT || t.viewshedMode === t.ViewshedPluginModes.MOVE ? (M(), N(f, {
      key: 2,
      class: "px-1 pt-0 pb-2"
    }, {
      default: h(() => [
        (M(!0), B(
          pe,
          null,
          we(t.parameters, (T, a) => (M(), N(
            l,
            {
              "no-gutters": "",
              key: a
            },
            {
              default: h(() => [
                a === "distance" || t.viewshedType === t.ViewshedTypes.CONE && a !== "showPrimitive" ? (M(), N(
                  d,
                  { key: 0 },
                  {
                    default: h(() => [
                      p(
                        l,
                        {
                          "no-gutters": "",
                          class: "px-1"
                        },
                        {
                          default: h(() => [
                            p(
                              d,
                              null,
                              {
                                default: h(() => [
                                  p(y, {
                                    "html-for": a,
                                    class: "py-0"
                                  }, {
                                    default: h(() => [
                                      F(
                                        A(i.$t(`viewshed.${a}`)),
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
                              d,
                              { class: "d-flex justify-end align-center" },
                              {
                                default: h(() => [
                                  a === "distance" ? (M(), B(
                                    "span",
                                    Ut,
                                    A(`${Math.round(T)} m`),
                                    1
                                    /* TEXT */
                                  )) : (M(), B(
                                    "span",
                                    $t,
                                    A(`${Math.round(T)} °`),
                                    1
                                    /* TEXT */
                                  ))
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
                      p(
                        l,
                        { "no-gutters": "" },
                        {
                          default: h(() => [
                            p(
                              d,
                              null,
                              {
                                default: h(() => [
                                  p(S, {
                                    id: a,
                                    class: "pa-0",
                                    "model-value": T,
                                    "onUpdate:modelValue": (v) => t.setParameter(a, v),
                                    type: "number",
                                    step: "1",
                                    min: t.parameterRanges[a][0],
                                    max: t.parameterRanges[a][1]
                                  }, null, 8, ["id", "model-value", "onUpdate:modelValue", "min", "max"])
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
                )) : H("v-if", !0)
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
    })) : H("v-if", !0),
    p(_),
    t.viewshedMode === t.ViewshedPluginModes.EDIT || t.viewshedMode === t.ViewshedPluginModes.MOVE ? (M(), B("div", Ht, [
      p(L, {
        onClick: e[0] || (e[0] = (T) => t.addToMyWorkspace()),
        tooltip: "viewshed.addToMyWorkspace",
        icon: "$vcsComponentsPlus",
        disabled: t.currentIsPersisted || void 0
      }, null, 8, ["disabled"]),
      p(L, {
        onClick: e[1] || (e[1] = (T) => t.createNewViewshed()),
        variant: "filled"
      }, {
        default: h(() => [
          F(
            A(i.$t("viewshed.new")),
            1
            /* TEXT */
          )
        ]),
        _: 1
        /* STABLE */
      })
    ])) : t.viewshedMode === t.ViewshedPluginModes.CREATE ? (M(), B("div", zt, [
      p(L, {
        onClick: e[2] || (e[2] = (T) => t.cancel()),
        variant: "outlined"
      }, {
        default: h(() => [
          F(
            A(i.$t("viewshed.cancel")),
            1
            /* TEXT */
          )
        ]),
        _: 1
        /* STABLE */
      })
    ])) : H("v-if", !0)
  ]);
}
const Kt = /* @__PURE__ */ Oe(jt, [["render", Gt]]), j = "@vcmap/viewshed", Yt = "3.0.5", Xt = "^6.0", ne = {
  [g.CONE]: "$vcsViewshed",
  [g.THREESIXTY]: "$vcsViewshedCone"
};
function Jt(i, e, o) {
  const t = $(), s = $(), n = `${o.id}-editor`, r = {
    component: Kt,
    provides: {
      manager: i
    },
    state: {
      headerTitle: t,
      headerIcon: s,
      styles: { width: "280px", height: "auto" },
      infoUrlCallback: e.getHelpUrlCallback("tools/viewshed.html")
    }
  };
  ft(e, o, {
    editor: (m) => ({
      ...r,
      props: {
        selection: o.selection,
        getViewshed: () => o.collection.getByKey(m.name)
      }
    })
  });
  function l() {
    i.currentViewshed.value && (s.value = ne[i.currentViewshed.value.type], i.currentIsPersisted.value ? t.value = i.currentViewshed.value.properties.title : i.mode.value === E.CREATE ? t.value = `viewshed.create.${i.currentViewshed.value.type}` : t.value = [
      "viewshed.temporary",
      `viewshed.${i.currentViewshed.value.type}`
    ]);
  }
  function w() {
    l(), i.currentViewshed.value && !i.currentIsPersisted.value && (i.mode.value === E.EDIT || i.mode.value === E.MOVE || i.mode.value === E.CREATE) && (e.windowManager.has(n) || e.windowManager.add(
      {
        ...r,
        id: n,
        parentId: "category-manager",
        slot: mt.DYNAMIC_CHILD
      },
      j
    ));
  }
  const c = G(i.currentViewshed, (m) => {
    m && w();
  }), d = G(i.currentIsPersisted, (m) => {
    m && l();
  }), f = G(i.mode, () => {
    i.mode.value ? w() : e.windowManager.remove(n);
  });
  return {
    destroy() {
      e.windowManager.remove(n), c(), f(), d();
    }
  };
}
function Zt(i, e, o, t) {
  function s(c) {
    return c === g.CONE ? {
      name: g.CONE,
      icon: ne[g.CONE],
      title: `viewshed.create.${g.CONE}`
    } : c === g.THREESIXTY ? {
      name: g.THREESIXTY,
      icon: ne[g.THREESIXTY],
      title: `viewshed.create.${g.THREESIXTY}`
    } : void 0;
  }
  let n, r;
  if (t.length === 1) {
    const c = s(t[0]);
    n = {
      type: ge.SINGLE,
      action: J({
        ...c,
        active: !1,
        background: !1,
        disabled: !(i.maps.activeMap instanceof U),
        callback() {
          this.active ? this.background && e.currentViewshed.value ? e.editViewshed(e.currentViewshed.value) : e.stop() : e.createViewshed(c.name);
        }
      })
    };
  } else
    n = {
      type: ge.SELECT,
      action: J({
        name: o,
        currentIndex: 0,
        active: !1,
        background: !1,
        disabled: !(i.maps.activeMap instanceof U),
        callback() {
          if (this.active)
            this.background && e.currentViewshed.value ? e.editViewshed(e.currentViewshed.value) : e.stop();
          else {
            const c = this.tools[this.currentIndex].name;
            e.createViewshed(c);
          }
        },
        selected(c) {
          c !== this.currentIndex && (this.currentIndex = c);
          const d = this.tools[this.currentIndex].name;
          e.createViewshed(d);
        },
        tools: t.flatMap(s)
      })
    }, r = G(
      e.currentViewshed,
      (c) => {
        c && (n.action.currentIndex = n.action.tools.findIndex(
          (d) => d.name === c.type
        ));
      }
    );
  const l = G(e.mode, (c) => {
    c === E.VIEW ? (n.action.background = !0, n.action.active = !0) : c ? (n.action.background = !1, n.action.active = !0) : (n.action.background = !1, n.action.active = !1);
  }), w = i.maps.mapActivated.addEventListener((c) => {
    c instanceof U ? n.action.disabled = !1 : n.action.disabled = !0;
  });
  return {
    destroy() {
      l(), r == null || r(), w();
    },
    toolbox: n
  };
}
function qt(i, e, o, t) {
  le(t, [Pt(g)]);
  const { toolbox: s, destroy: n } = Zt(i, e, o, t), r = i.toolboxManager.add(s, o).id;
  return () => {
    i.toolboxManager.remove(r), n();
  };
}
class ae extends $e {
  static get className() {
    return "ViewshedCategory";
  }
  async _deserializeItem(e) {
    var t;
    if (
      /** @type {import("@vcmap/core").CesiumMap | undefined} */
      (t = this._app) == null ? void 0 : t.maps.getByType(U.className)[0]
    )
      return new D(e);
    throw new Error("No CesiumMap available");
  }
}
function Qt(i, e) {
  let o, t = 0;
  const s = new Set(
    e.filter((n) => n.type === i).map((n) => n.properties.title)
  );
  do
    t += 1, s.has(`${i}-${t}`) || (o = `${i}-${t}`);
  while (!o);
  return o;
}
async function ei(i) {
  const e = new X(), o = new X(), { collectionComponent: t, category: s } = await i.categoryManager.requestCategory(
    {
      type: ae.className,
      name: "Viewsheds",
      title: "viewshed.viewshedCategory"
    },
    j,
    {
      selectable: !0,
      renamable: !0,
      removable: !0
    }
  );
  t.addItemMapping({
    mappingFunction: vt(
      [U.className],
      i.maps
    ),
    owner: j
  });
  const n = (d, f, m) => {
    m.title = d.properties.title, m.titleChanged = (_) => {
      d.properties.title = _, m.title = _, e.raiseEvent({ item: d, title: _ });
    }, m.actions.push(
      J({
        name: "visibilityAction",
        icon: "$vcsCheckbox",
        callback() {
          o.raiseEvent(d);
        }
      })
    );
  };
  i.categoryManager.addMappingFunction(
    () => !0,
    n,
    j,
    [t.id]
  );
  const { action: r, destroy: l } = pt(
    t.selection,
    () => {
      const d = t.selection.value.map(
        (f) => t.collection.getByKey(f.name)
      );
      wt(JSON.stringify(d), "viewsheds.json");
    },
    j
  ), { action: w, destroy: c } = gt(
    async (d) => {
      const { vueI18n: f } = i, _ = (await Promise.all(
        d.map(async (S) => {
          const L = await S.text();
          try {
            return JSON.parse(L).map((a) => new D(a));
          } catch {
            i.notifier.add({
              type: Z.ERROR,
              message: f.t("components.import.failure", {
                fileName: S.name
              })
            });
          }
          return [];
        })
      )).flat(), y = _.map((S) => s.collection.add(S)).filter((S) => S != null), x = _.length - y.length;
      if (x > 0)
        return i.notifier.add({
          type: Z.WARNING,
          message: f.t("components.import.addFailure", [x])
        }), !1;
      if (y.length > 0)
        i.notifier.add({
          type: Z.SUCCESS,
          message: f.t("components.import.featuresAdded", [
            y.length
          ])
        });
      else
        return i.notifier.add({
          type: Z.ERROR,
          message: f.t("components.import.nothingAdded")
        }), !1;
      return !0;
    },
    i.windowManager,
    j,
    "category-manager"
  );
  return t.addActions([r, w]), {
    renamed: e,
    visibilityChanged: o,
    setSelection(d) {
      d && (t.selection.value = t.items.value.filter((f) => d === f.name));
    },
    clearSelection() {
      t.selection.value.length && (t.selection.value = []);
    },
    setVisibility(d, f) {
      const m = t.items.value.find(
        (_) => d === _.name
      );
      if (m) {
        const _ = m.actions.find(
          (y) => y.name === "visibilityAction"
        );
        _ && (_.icon = f ? "$vcsCheckboxChecked" : "$vcsCheckbox");
      }
    },
    add(d) {
      d.properties.title = Qt(
        d.type,
        /** @type {import("./viewshed.js").default[]} */
        [
          ...s.collection
        ]
      ), s.collection.add(d);
    },
    remove(d) {
      const f = s.collection.getByKey(d);
      f && s.collection.remove(f);
    },
    collectionComponent: t,
    destroy() {
      i.categoryManager.removeOwner(j), e.destroy(), o.destroy(), l(), c();
    }
  };
}
function Q() {
  return {
    visibleColor: D.getDefaultOptions().visibleColor,
    shadowColor: D.getDefaultOptions().shadowColor,
    tools: [...Object.values(g)]
  };
}
const ti = {
  name: "ViewshedConfigEditor",
  components: {
    AbstractConfigEditor: _t,
    VcsFormSection: Ee,
    VContainer: Ve,
    VRow: be,
    VCol: Me,
    VcsLabel: Ce,
    VcsSelect: ye,
    VColorPicker: Et
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
  setup(i) {
    const e = i.getConfig(), o = $({ ...Q(), ...e });
    function t() {
      i.setConfig(o.value);
    }
    return {
      localConfig: o,
      ViewshedTypes: g,
      apply: t,
      toolItems: Object.values(g).map((s) => ({
        value: s,
        title: `viewshed.${s}`
      }))
    };
  }
};
function ii(i, e, o, t, s, n) {
  const r = b("VcsLabel"), l = b("v-col"), w = b("VcsSelect"), c = b("v-row"), d = b("VColorPicker"), f = b("v-container"), m = b("VcsFormSection"), _ = b("AbstractConfigEditor");
  return M(), N(_, ot({ onSubmit: t.apply }, { ...i.$attrs, ...i.$props }), {
    default: h(() => [
      t.localConfig ? (M(), N(m, {
        key: 0,
        heading: "viewshed.editor.general"
      }, {
        default: h(() => [
          p(f, { class: "px-1 py-0" }, {
            default: h(() => [
              p(c, { "no-gutters": "" }, {
                default: h(() => [
                  p(l, null, {
                    default: h(() => [
                      p(r, { "html-for": "viewshed-editor-tools" }, {
                        default: h(() => [
                          F(
                            A(i.$t("viewshed.editor.tools")),
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
                  p(l, null, {
                    default: h(() => [
                      p(w, {
                        id: "viewshed-tools",
                        items: t.toolItems,
                        modelValue: t.localConfig.tools,
                        "onUpdate:modelValue": e[0] || (e[0] = (y) => t.localConfig.tools = y),
                        multiple: !0
                      }, null, 8, ["items", "modelValue"])
                    ]),
                    _: 1
                    /* STABLE */
                  })
                ]),
                _: 1
                /* STABLE */
              }),
              p(c, { "no-gutters": "" }, {
                default: h(() => [
                  p(l, null, {
                    default: h(() => [
                      p(r, { "html-for": "viewshed-editor-visible-color" }, {
                        default: h(() => [
                          F(
                            A(i.$t("viewshed.editor.visibleColor")),
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
                  p(l, null, {
                    default: h(() => [
                      p(d, {
                        modelValue: t.localConfig.visibleColor,
                        "onUpdate:modelValue": e[1] || (e[1] = (y) => t.localConfig.visibleColor = y),
                        mode: "rgba"
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
                default: h(() => [
                  p(l, null, {
                    default: h(() => [
                      p(r, { "html-for": "viewshed-editor-shadow-color" }, {
                        default: h(() => [
                          F(
                            A(i.$t("viewshed.editor.shadowColor")),
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
                  p(l, null, {
                    default: h(() => [
                      p(d, {
                        modelValue: t.localConfig.shadowColor,
                        "onUpdate:modelValue": e[2] || (e[2] = (y) => t.localConfig.shadowColor = y),
                        mode: "rgba"
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
      })) : H("v-if", !0)
    ]),
    _: 1
    /* STABLE */
  }, 16, ["onSubmit"]);
}
const oi = /* @__PURE__ */ Oe(ti, [["render", ii]]);
function ui(i) {
  let e, o, t = () => {
  };
  return {
    get name() {
      return j;
    },
    get version() {
      return Yt;
    },
    get mapVersion() {
      return Xt;
    },
    /**
     * @param {import("@vcmap/ui").VcsUiApp} vcsUiApp
     * @param {ViewshedPluginState=} state
     * @returns {Promise<void>}
     */
    async initialize(s, n) {
      o = s, s.categoryClassRegistry.registerClass(
        this[He],
        ae.className,
        ae
      );
      const r = await ei(s);
      e = Lt(
        s,
        i,
        r
      );
      const l = qt(
        s,
        e,
        j,
        i.tools || Q().tools
      ), { destroy: w } = Jt(
        e,
        s,
        r.collectionComponent
      ), { activeMap: c } = s.maps;
      function d(_) {
        if (n != null && n.m && n.cv && _ instanceof U) {
          const y = new D(n.cv);
          n.m === E.VIEW ? e.viewViewshed(y) : e.editViewshed(y);
        }
      }
      let f = !1;
      c && (f = !0, d(c));
      const m = s.maps.mapActivated.addEventListener(
        (_) => {
          e.stop(), f || (d(_), f = !0);
        }
      );
      t = () => {
        m(), l(), w(), r.destroy(), e.destroy();
      };
    },
    /**
     * should return all default values of the configuration
     * @returns {ViewshedPluginOptions}
     */
    getDefaultOptions: Q,
    /**
     * should return the plugin's serialization excluding all default values
     * @returns {ViewshedPluginOptions}
     */
    toJSON() {
      const s = {};
      return i.tools && Q().tools.length !== i.tools.length && (s.tools = [...i.tools]), i.shadowColor && i.shadowColor !== D.getDefaultOptions().shadowColor && (s.shadowColor = i.shadowColor), i.visibleColor && i.visibleColor !== D.getDefaultOptions().visibleColor && (s.visibleColor = i.visibleColor), s;
    },
    /**
     * should return the plugins state
     * @param {boolean} forUrl
     * @returns {ViewshedPluginState}
     */
    getState(s) {
      var w, c;
      const n = {}, r = e.mode.value, l = (w = e.currentViewshed.value) == null ? void 0 : w.toJSON();
      return r !== null && r !== "create" && l && (n.m = r, n.cv = l, s && ((c = n.cv.properties) != null && c.title) && (Object.keys(n.properties).length === 1 ? delete n.cv.properties : delete n.cv.properties.title)), n;
    },
    /**
     * components for configuring the plugin and/ or custom items defined by the plugin
     * @returns {Array<import("@vcmap/ui").PluginConfigEditor>}
     */
    getConfigEditors() {
      return [
        {
          component: oi,
          title: "viewshed.editor.title",
          infoUrlCallback: o == null ? void 0 : o.getHelpUrlCallback(
            "/components/plugins/viewshedToolConfig.html",
            "app-configurator"
          )
        }
      ];
    },
    destroy: () => t(),
    i18n: {
      en: {
        viewshed: {
          distance: "Distance",
          fov: "Field of view",
          heading: "Heading",
          pitch: "Pitch",
          position: "Position",
          showPrimitive: "Show viewpoint",
          viewpoint: "Viewpoint",
          viewshedCategory: "Viewsheds",
          heightMode: "Height mode",
          relative: "Relative to ground",
          absolute: "Absolute",
          new: "New",
          cancel: "Cancel",
          [g.CONE]: "Cone viewshed analysis",
          [g.THREESIXTY]: "360° viewshed analysis",
          create: {
            [g.CONE]: "Create cone viewshed analysis",
            [g.THREESIXTY]: "Create 360° viewshed analysis"
          },
          addToMyWorkspace: "Add to My Workspace",
          temporary: "Temporary",
          jumpToViewpoint: "Jump to viewpoint",
          returnToViewpoint: "Return to previous viewpoint",
          move: "Move viewpoint",
          createDescription: "Click the map twice. First click places the origin, second defines the distance and direction of the viewshed.",
          createThreeSixtyDescription: "Click the map twice. First click places the origin, second defines the distance of the viewshed.",
          remove: "Remove",
          editor: {
            title: "Viewshed Editor",
            general: "General Settings",
            visibleColor: "Visible color",
            shadowColor: "Shadow color",
            tools: "Tools"
          }
        }
      },
      de: {
        viewshed: {
          distance: "Distanz",
          fov: "Sichtfeld",
          heading: "Ausrichtung",
          pitch: "Neigung",
          position: "Position",
          showPrimitive: "Standpunkt zeigen",
          viewpoint: "Standpunkt",
          viewshedCategory: "Sichtbarkeitsanalysen",
          heightMode: "Höhenmodus",
          relative: "Relativ zum Gelände",
          absolute: "Absolut",
          new: "Neu",
          cancel: "Abbrechen",
          [g.CONE]: "Sichtkegelanalyse",
          [g.THREESIXTY]: "360° Sichtsanalyse",
          create: {
            [g.CONE]: "Sichtkegelanalyse erstellen",
            [g.THREESIXTY]: "360° Sichtanalyse erstellen"
          },
          addToMyWorkspace: "Zu Mein Arbeitsbereich hinzufügen",
          temporary: "Temporäre",
          jumpToViewpoint: "Zu Standpunkt springen",
          returnToViewpoint: "Zu vorherigem Standpunkt zurück springen",
          move: "Standpunkt verschieben",
          createDescription: "Klicken Sie zweimal in die Karte. Der erste Klick platziert den Ursprung, der zweite die Distanz und die Richtung des Sichtkegels.",
          createThreeSixtyDescription: "Klicken Sie zweimal in die Karte. Der erste Klick platziert den Ursprung, der zweite die Distanz der Sichtbarkeitsanalyse.",
          remove: "Entfernen",
          editor: {
            title: "Viewshed Editor",
            general: "Allgemeine Einstellungen",
            visibleColor: "Sichtbarer Bereich",
            shadowColor: "Nicht sichtbarer Bereich",
            tools: "Werkzeuge"
          }
        }
      }
    }
  };
}
export {
  ui as default
};
