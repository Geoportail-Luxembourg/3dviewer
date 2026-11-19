var Le = Object.defineProperty;
var Fe = (e, o, t) => o in e ? Le(e, o, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[o] = t;
var C = (e, o, t) => Fe(e, typeof o != "symbol" ? o + "" : o, t);
import { VcsCameraPrimitive as We, VcsObject as je, VcsEvent as te, AbstractInteraction as Ge, EventType as ee, Projection as J, SessionType as Be, CesiumMap as z, startEditFeaturesSession as Ue, startEditGeometrySession as xe, VectorLayer as He, maxZIndex as ze, wgs84Projection as Ke, markVolatile as Ye, Viewpoint as Xe, TransformationMode as Je, Category as Ze, moduleIdSymbol as qe } from "../../../assets/core.js";
import { Color as ie, Matrix4 as Qe, Transforms as et, Primitive as ge, PerInstanceColorAppearance as Ce, GeometryInstance as _e, SphereGeometry as tt, ColorGeometryInstanceAttribute as Ee, SphereOutlineGeometry as it, Math as F, Cartesian3 as x, ShadowMap as ot, Camera as st, HeightReference as nt } from "../../../assets/cesium.js";
import { shallowRef as ae, ref as K, nextTick as at, defineComponent as Me, inject as ce, reactive as oe, watchEffect as rt, watch as Z, onMounted as lt, onUnmounted as ct, computed as dt, resolveComponent as V, openBlock as R, createElementBlock as q, createCommentVNode as Y, createBlock as W, withCtx as m, createTextVNode as H, toDisplayString as j, createVNode as v, createElementVNode as ut, Fragment as ye, renderList as be, toRaw as ht, mergeProps as ft } from "../../../assets/vue.js";
import { ol$Observable$unByKey as pt, Feature as vt, ol$geom$Point as mt, ol$style$Style as wt } from "../../../assets/ol.js";
import { VcsWorkspaceWrapper as gt, VcsTextField as Ct, VcsSelect as Te, VcsLabeledSlider as _t, VcsLabel as Re, VcsHelp as Et, VcsFormSection as Ne, VcsFeatureTransforms as yt, VcsFormButton as bt, makeEditorCollectionComponentClass as Vt, WindowSlot as St, ToolboxType as Ve, createSupportedMapMappingFunction as Ot, createListExportAction as Mt, downloadText as Tt, createListImportAction as Rt, NotificationType as ne, AbstractConfigEditor as Nt } from "../../../assets/ui.js";
import { VRow as Ie, VDivider as It, VCol as Pe, VColorPicker as Pt, VContainer as At } from "../../../assets/vuetify.js";
const Ae = Symbol("isMatcher"), $t = Symbol("Integer"), Dt = Symbol("NonEmptyString"), ve = /* @__PURE__ */ new Map();
[
  [String, "string"],
  [Number, "number"],
  [Boolean, "boolean"],
  [Function, "function"],
  [void 0, "undefined"],
  [Symbol, "symbol"]
].forEach(([e, o]) => {
  ve.set(e, o);
});
function kt(e) {
  return e == null ? void 0 : e[Ae];
}
function de(e) {
  if (!e || String(e) !== "[object Object]")
    return !1;
  const o = Object.getPrototypeOf(e);
  if (!o)
    return !0;
  const i = {}.hasOwnProperty.call(o, "constructor") && o.constructor;
  return typeof i == "function" && String(i) === String(Object);
}
function $(e, o) {
  if (e === null)
    return "null";
  if (typeof e > "u")
    return "undefined";
  if (o)
    return typeof e;
  let t;
  if (Array.isArray(e))
    t = `[${e.map((s) => $(s, o)).join(",")}]`;
  else
    try {
      t = JSON.stringify(e);
    } catch {
      t = typeof e;
    }
  return t = t || typeof e, t.length > 20 ? `${t.substring(0, 20)}...` : t;
}
function Lt(e, o) {
  return typeof o == "string" || typeof o == "number" || typeof o == "boolean" || typeof o == "symbol" ? e === o ? !1 : `Expected ${$(e)} to equal ${o.toString()}` : null;
}
function Ft(e, o, t) {
  if (Array.isArray(o)) {
    if (o.length !== 1)
      throw new Error("Array patterns may only have one type");
    if (Array.isArray(e)) {
      let i = !1;
      return e.findIndex((n) => (i = t(n, o[0]), i)) > -1 ? `${String(i)} in ${$(e)}` : !1;
    }
    return `Expected ${$(e)} to be an Array`;
  }
  return null;
}
function ue(e, o, t, i) {
  const s = i ? `${i}.` : "";
  if (!de(e))
    return `Expected ${$(e)} to be a plain Object`;
  let a = !1;
  const l = Object.keys(o).find((u) => {
    const d = e[u];
    return de(o[u]) ? a = ue(d, o[u], t, s + u) : a = t(d, o[u]), a;
  });
  return l ? `${String(a)} in object.${s}${l}` : !1;
}
function Wt(e, o) {
  if (o === Number)
    return Number.isFinite(e) ? !1 : `expected ${$(e)} to be a number, excluding NaN`;
  if (o === $t)
    return Number.isInteger(e) ? !1 : `expected ${$(e)} to be an integer number`;
  if (o === Dt)
    return typeof e == "string" && e.length > 0 ? !1 : `expected ${$(e)} to be a non-empty string`;
  const t = ve.get(o);
  return t ? typeof e === t ? !1 : `expected ${$(e)} to be a ${String(t)}` : null;
}
function $e(e) {
  if (e === null)
    return "null";
  const o = ve.get(e);
  if (o)
    return o;
  const t = e == null ? void 0 : e.className;
  if (t)
    return t;
  let i = String(e);
  const s = i.match(/function (.*)\(/);
  if (s && s.length > 1) {
    const n = e == null ? void 0 : e.name;
    return n || s[1].substring(0, 20);
  }
  if (de(e)) {
    const n = {};
    Object.keys(e).forEach((a) => {
      n[a] = $e(e[a]);
    });
    try {
      i = `Object of ${JSON.stringify(n)}`;
    } catch {
      i = "Object";
    }
  }
  return i;
}
function jt(e, o) {
  const t = (i, s) => {
    if (kt(s))
      return s(i);
    if (s == null)
      return i === s ? !1 : `Expected ${$(i)} to be ${String(s)}`;
    const n = Wt(i, s);
    if (n !== null)
      return n;
    const a = Lt(i, s);
    if (a !== null)
      return a;
    if (Array.isArray(s))
      return Ft(i, s, t);
    if (s === Object)
      return ue(i, {}, t);
    if (s instanceof Function)
      return i instanceof s ? !1 : `Expected ${$(i, !0)} to be of Type ${$e(s)}`;
    if (typeof s == "object") {
      const l = ue(i, s, t);
      return l || !1;
    }
    throw new Error(`Cannot handle pattern ${String(s)}`);
  };
  return t(e, o);
}
let Gt = Error;
function me(e, o) {
  const t = jt(e, o);
  if (t)
    throw new Gt(`Match failed: ${t}`);
}
function Bt(e, o) {
  me(e, Object);
  let t = Object.values(e);
  const i = (s) => t.includes(s) ? !1 : `expected ${$(s)} to be of enum: ${t.join(", ")}`;
  return i[Ae] = !0, i;
}
function Ut(e, o, t) {
  if (e != null) {
    const i = Object.values(o).find((s) => s == e);
    if (i != null)
      return i;
  }
  return t;
}
const xt = new ie(), re = new Qe();
class Ht extends We {
  constructor(t) {
    super(t);
    C(this, "spot");
    C(this, "_allowPicking");
    C(this, "_color", ie.WHITE);
    C(this, "_camera");
    C(this, "_planesPrimitives", []);
    C(this, "_outlinePrimitives", []);
    this.spot = t.spot, this._camera = t.camera, this._allowPicking = t.allowPicking;
  }
  static get className() {
    return "ViewshedCameraPrimitive";
  }
  update(t) {
    if (this.show)
      if (this.spot)
        super.update(t);
      else {
        const i = this._planesPrimitives, s = this._outlinePrimitives;
        i.length === 0 && (et.eastNorthUpToFixedFrame(
          this._camera.positionWC,
          void 0,
          re
        ), i[0] = new ge({
          allowPicking: this._allowPicking,
          geometryInstances: new _e({
            geometry: new tt({
              radius: 2
            }),
            attributes: {
              color: Ee.fromColor(
                ie.fromAlpha(this._color, 0.1, xt)
              )
            },
            modelMatrix: re
          }),
          appearance: new Ce({
            translucent: !0,
            flat: !0
          }),
          asynchronous: !1
        }), s[0] = new ge({
          allowPicking: this._allowPicking,
          geometryInstances: new _e({
            geometry: new it({
              radius: 2
            }),
            attributes: {
              color: Ee.fromColor(this._color)
            },
            modelMatrix: re
          }),
          appearance: new Ce({
            translucent: !1,
            flat: !0
          }),
          asynchronous: !1
        }));
        const { length: n } = i;
        for (let a = 0; a < n; ++a)
          s[a].update(t), i[a].update(t);
      }
  }
}
var _ = /* @__PURE__ */ ((e) => (e.CONE = "cone", e.THREESIXTY = "360", e))(_ || {});
function zt(e, o) {
  const t = new st(e), i = t.frustum;
  return i.fov = o.fov, i.near = o.near, i.aspectRatio = o.aspectRatio, i.far = o.far, t;
}
const P = class P extends je {
  constructor(t) {
    var i, s, n, a, l, u;
    super(t);
    C(this, "_cesiumMap", null);
    C(this, "_shadowCamera", null);
    C(this, "_scene", null);
    C(this, "_frustumOptions");
    C(this, "_headingPitchRollValues");
    /**
     * The viewsheds position, excluding height offset, in lat/lon degrees.
     */
    C(this, "_position");
    C(this, "_viewshedType");
    C(this, "_colors");
    C(this, "_heightOffset");
    C(this, "_shadowMap", null);
    C(this, "_primitive", null);
    C(this, "_showPrimitive");
    C(this, "_positionChanged", new te());
    C(this, "_active", !1);
    this._frustumOptions = {
      fov: ((i = t.frustumOptions) == null ? void 0 : i.fov) || P.getDefaultOptions().frustumOptions.fov,
      far: ((s = t.frustumOptions) == null ? void 0 : s.far) || P.getDefaultOptions().frustumOptions.far,
      near: ((n = t.frustumOptions) == null ? void 0 : n.near) || P.getDefaultOptions().frustumOptions.near,
      aspectRatio: ((a = t.frustumOptions) == null ? void 0 : a.aspectRatio) || P.getDefaultOptions().frustumOptions.aspectRatio
    }, this._headingPitchRollValues = t.orientation || {
      ...P.getDefaultOptions().orientation
    }, this._position = t.position || P.getDefaultOptions().position, this._viewshedType = Ut(
      t.viewshedType,
      _,
      "cone"
      /* CONE */
    ), this._colors = {
      visibleColor: ie.fromCssColorString(
        ((l = t.colorOptions) == null ? void 0 : l.visibleColor) || P.getDefaultOptions().colorOptions.visibleColor
      ),
      shadowColor: ie.fromCssColorString(
        ((u = t.colorOptions) == null ? void 0 : u.shadowColor) || P.getDefaultOptions().colorOptions.shadowColor
      )
    }, this._heightOffset = t.heightOffset || 0, this._showPrimitive = !!t.showPrimitive;
  }
  static get className() {
    return "Viewshed";
  }
  static getDefaultOptions() {
    return {
      colorOptions: { shadowColor: "#3333331A", visibleColor: "#FF990080" },
      frustumOptions: {
        fov: F.PI / 3,
        near: 1,
        aspectRatio: 1,
        far: 300
      },
      orientation: { heading: 0, pitch: 0, roll: 0 },
      position: [0, 0, 0]
    };
  }
  /**
   * Sets a new position for the shadow map. If no shadow map was created yet, due to missing position, this method triggers the creation of a shadow map.
   * @param coords The new positions coordinates in degrees
   */
  set position(t) {
    me(t, [Number]), this._position = t, this._shadowCamera && (this._shadowCamera.position = x.fromDegrees(
      t[0],
      t[1],
      t[2] + this._heightOffset
    ), this._shadowCamera.setView({ orientation: this._headingPitchRollValues }), this._updatePrimitive()), this._positionChanged.raiseEvent(t);
  }
  /**
   * @returns The current position of the viewshed source.
   */
  get position() {
    return [...this._position];
  }
  /**
   * Getter for Event that is triggered each time the position is changed.
   * @returns The new position
   */
  get positionChanged() {
    return this._positionChanged;
  }
  /**
   * Sets the height offset of the viewshed.
   * @param value the offset that is added to the position height.
   */
  set heightOffset(t) {
    this._heightOffset = t, this._shadowCamera && (this._shadowCamera.position = x.fromDegrees(
      this.position[0],
      this.position[1],
      this.position[2] + t
    ), this._updatePrimitive());
  }
  get heightOffset() {
    return this._heightOffset;
  }
  /**
   * Sets the reach of the viewshed.
   * @param value The distance in meters.
   */
  set distance(t) {
    this._frustumOptions.far = t > P.MIN_DISTANCE ? t : P.MIN_DISTANCE, this._shadowCamera && (this._shadowCamera.frustum.far = this._frustumOptions.far, this._viewshedType === "360" && this._updateShadowMap(), this._viewshedType === "cone" && this._updatePrimitive());
  }
  /**
   * Returns the reach of the viewshed.
   * @returns The distance in meters.
   */
  get distance() {
    return this._frustumOptions.far;
  }
  /**
   * Sets the field of view of a cone viewshed. Does not have a impact on 360 viewshed.
   * @param value The field of view in degrees.
   */
  set fov(t) {
    this._frustumOptions.fov = t * F.RADIANS_PER_DEGREE, this._shadowCamera && (this._shadowCamera.frustum.fov = t * F.RADIANS_PER_DEGREE, this._viewshedType === "cone" && (this._updateShadowMap(), this._updatePrimitive()));
  }
  /**
   * Returns the field of view.
   * @returns The field of view in degrees.
   */
  get fov() {
    return this._frustumOptions.fov * F.DEGREES_PER_RADIAN;
  }
  /**
   * Sets the heading of a cone viewshed. Does not have impact on 360 viewshed.
   * @param value Heading in degrees.
   */
  set heading(t) {
    this._headingPitchRollValues.heading = t * F.RADIANS_PER_DEGREE, this._shadowCamera && (this._shadowCamera.setView({
      orientation: {
        heading: t * F.RADIANS_PER_DEGREE,
        pitch: this._shadowCamera.pitch,
        roll: 0
      }
    }), this._viewshedType === "cone" && this._updatePrimitive());
  }
  get heading() {
    return this._headingPitchRollValues.heading * F.DEGREES_PER_RADIAN;
  }
  /**
   * Sets the pitch of a cone viewshed. 0 is horizontal. Does not have impact on 360 viewshed.
   * @param value The pitch in degrees.
   */
  set pitch(t) {
    if (this._headingPitchRollValues.pitch = t * F.RADIANS_PER_DEGREE, this._shadowCamera) {
      const i = t * F.RADIANS_PER_DEGREE - this._shadowCamera.pitch;
      this._shadowCamera.lookUp(i), this._viewshedType === "cone" && this._updatePrimitive();
    }
  }
  get pitch() {
    return this._headingPitchRollValues.pitch * F.DEGREES_PER_RADIAN;
  }
  /**
   * Sets whether the primitive of the viewshed should be shown or not.
   * @param value
   */
  set showPrimitive(t) {
    this._showPrimitive = t, this._updatePrimitive();
  }
  /**
   * Gets if the primitive of the viewshed is shown or not.
   */
  get showPrimitive() {
    return this._showPrimitive;
  }
  get type() {
    return this._viewshedType;
  }
  get shadowMap() {
    return this._shadowMap;
  }
  /**
   * Deactivates the viewshed by removing primitive and removing shadowMap.
   */
  deactivate() {
    var t;
    this._active && (this._removePrimitive(), this._shadowMap.enabled = !1, (t = this._shadowMap) == null || t.destroy(), this._shadowCamera = null, this._scene = null, this._cesiumMap = null, this._shadowMap = null, this._active = !1);
  }
  /**
   * Activates viewshed.
   * @param The cesium map to which the shadow map of the viewshed is applied to.
   */
  activate(t) {
    if (this._active || (this._active = !0), t !== this._cesiumMap) {
      this._cesiumMap = t;
      const i = t.getScene();
      if (i)
        this._shadowCamera = zt(i, this._frustumOptions), this._position && (this.position = this._position), this._scene = i;
      else
        throw new Error("CesiumMap contains no scene");
      this._updateShadowMap(), this._updatePrimitive();
    }
  }
  /**
   * Updates the shadow map by creating a new one and applying all the current parameters.
   */
  _updateShadowMap() {
    var t;
    !this._active || !this._shadowCamera || !this._cesiumMap || !this._scene || ((t = this._shadowMap) == null || t.destroy(), this._shadowMap = new ot({
      context: this._scene.context,
      lightCamera: this._shadowCamera,
      enabled: !0,
      isPointLight: this._viewshedType === "360",
      softShadows: !0,
      fromLightSource: !0,
      cascadesEnabled: !1,
      pointLightRadius: this._shadowCamera.frustum.far,
      maximumDistance: 200,
      size: 2048
    }), this._shadowMap.viewshed = this._colors, this._cesiumMap.setShadowMap(this._shadowMap));
  }
  _removePrimitive() {
    var t;
    this._primitive && !this._primitive.isDestroyed() && ((t = this._scene) == null || t.primitives.remove(this._primitive), this._primitive.destroy(), this._primitive = null);
  }
  _updatePrimitive() {
    this._showPrimitive && this._active && this._scene ? (this._removePrimitive(), this._primitive = new Ht({
      camera: this._shadowCamera,
      allowPicking: !1,
      spot: this._viewshedType === "cone"
      /* CONE */
    }), this._scene.primitives.add(this._primitive)) : this._removePrimitive();
  }
  /**
   * Sets distance and, in case of cone viewsheds, also heading and pitch. Only works when viewshed is **active**.
   * @param target Point to calculate distance, heading and pitch from.
   */
  lookAt(t) {
    if (!this._shadowCamera)
      return;
    const i = x.fromDegrees(t[0], t[1], t[2]);
    if (this.distance = x.distance(this._shadowCamera.position, i), this.type === "cone" && !i.equals(this._shadowCamera.position)) {
      const s = new x();
      x.subtract(i, this._shadowCamera.position, i), x.normalize(i, i), x.normalize(this._shadowCamera.position, s), this._shadowCamera.setView({
        orientation: {
          direction: i,
          up: s
        }
      }), this._headingPitchRollValues.heading = this._shadowCamera.heading, this._headingPitchRollValues.pitch = this._shadowCamera.pitch;
    }
    this._updatePrimitive();
  }
  /**
   * Returns an object with all the settings of a viewshed instance.
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
  destroy() {
    var s;
    const t = this._cesiumMap, i = this._shadowMap;
    this.deactivate(), ((s = t == null ? void 0 : t.getScene()) == null ? void 0 : s.shadowMap) === i && t.setDefaultShadowMap();
  }
};
C(P, "MIN_DISTANCE", 10);
let B = P;
const y = {
  ERROR: 2,
  WARN: 4,
  INFO: 8,
  DEBUG: 16
}, G = {
  ERROR: 0,
  WARN: 0,
  INFO: 0,
  DEBUG: 0
};
G.ERROR = y.ERROR | y.WARN | y.INFO | y.DEBUG;
G.WARN = y.WARN | y.INFO | y.DEBUG;
G.INFO = y.INFO | y.DEBUG;
G.DEBUG = y.DEBUG;
const Q = {
  logLevel: y.INFO
}, se = /* @__PURE__ */ new Map();
se.set(y.ERROR, "error");
se.set(y.WARN, "warn");
se.set(y.INFO, "info");
se.set(y.DEBUG, "log");
class Kt {
  /**
   * @param {string=} className
   */
  constructor(o) {
    this.className = o, this.deprecations = /* @__PURE__ */ new Map();
  }
  /**
   * Logs an error message
   * @param {string} msg The message to log.
   * @param {...any} optArgs
   */
  error(o, ...t) {
    Q.logLevel & G.ERROR && this._log(String(o), y.ERROR, t);
  }
  /**
   * Logs a warning message
   * @param {string} msg The message to log.
   * @param {...any} optArgs
   */
  warning(o, ...t) {
    Q.logLevel & G.WARN && this._log(String(o), y.WARN, t);
  }
  /**
   * Deprecate a function. deprecations are stored on the logger
   * @param {string} functionName
   * @param {string=} alternativeFunctionName
   */
  deprecate(o, t) {
    const i = String(o), s = t ? String(t) : null;
    if (!this.deprecations.has(i)) {
      this.deprecations.set(i, s || null);
      let n = `${i} has been deprecated and will be removed`;
      s && (n = `${n}. ${s}`), this.warning(n);
    }
  }
  /**
   * Logs an info message
   * @param {string} msg The message to log.
   * @param {...any} optArgs
   */
  info(o, ...t) {
    Q.logLevel & G.INFO && this._log(String(o), y.INFO, t);
  }
  /**
   * Logs a debug message
   * @param {string} msg The message to log.
   * @param {...any} optArgs
   */
  debug(o, ...t) {
    Q.logLevel & G.DEBUG && this._log(String(o), y.DEBUG, t);
  }
  /**
   * Alias for debug
   * @param {string} msg The message to log.
   * @param {...any} optArgs
   */
  log(o, ...t) {
    Q.logLevel & G.DEBUG && this._log(String(o), y.DEBUG, t);
  }
  /**
   * Logs a message
   * @param {string} msg The message to log.
   * @param {LOG_LEVEL} level
   * @param {Array} optArgs
   * @private
   */
  _log(o, t, i) {
    let s = o;
    this.className && (s = `[${this.className}] ${s}`), console[se.get(t)](s, ...i), t & y.ERROR && (console.group(), console.trace(), console.groupEnd());
  }
}
const he = /* @__PURE__ */ new Map();
function Yt(e) {
  const o = new Kt(e);
  return he.set(e, o), o;
}
function De(e) {
  return he.has(e) ? he.get(e) : Yt(e);
}
const A = "@vcmap/viewshed", Xt = "4.0.0", Jt = "^6.3";
class Zt extends Ge {
  constructor(t) {
    super(ee.CLICKMOVE);
    C(this, "_viewshed");
    C(this, "_positioned", new te());
    C(this, "_finished", new te());
    C(this, "_position", !1);
    this._viewshed = t, this.setActive();
  }
  static get className() {
    return "ViewshedInteraction";
  }
  get finished() {
    return this._finished;
  }
  get positioned() {
    return this._positioned;
  }
  async pipe(t) {
    return t.position && (this._position ? (this._viewshed.lookAt(J.mercatorToWgs84(t.position)), t.type & ee.CLICK && (this.setActive(!1), this._finished.raiseEvent(null))) : (this._viewshed.position = J.mercatorToWgs84(t.position), t.type & ee.CLICK && (this._position = !0, this._positioned.raiseEvent(null)))), Promise.resolve(t);
  }
  destroy() {
    super.destroy(), this._finished.destroy(), this._positioned.destroy();
  }
}
var X = /* @__PURE__ */ ((e) => (e.ABSOLUTE = "absolute", e.RELATIVE = "relative", e))(X || {}), T = /* @__PURE__ */ ((e) => (e.CREATE = "create", e.VIEW = "view", e.EDIT = "edit", e.MOVE = "move", e.MULTI_SELECT = "multiSelect", e))(T || {});
const Se = 1.8;
function qt(e) {
  const o = new He({
    projection: Ke.toJSON(),
    zIndex: ze - 1
  });
  Ye(o), o.activate().catch((i) => {
    De(A).error("Failed to activate layer", String(i));
  });
  const t = new vt(new mt(e));
  return t.setStyle(new wt({})), o.addFeatures([t]), o.vectorProperties.altitudeMode = nt.NONE, {
    layer: o,
    feature: t,
    destroy() {
      t.dispose(), o.destroy();
    }
  };
}
function le(e, o) {
  const t = o === "absolute" ? ee.CLICKMOVE : ee.NONE;
  e.setActive(t), e.pickPosition = t, e.pullPickedPosition = 1.8;
}
function Qt(e, o, t) {
  const i = ae(null), s = K(null), n = K(null), a = K(
    "absolute"
    /* ABSOLUTE */
  ), l = ae(null);
  let u = () => {
  };
  const d = ae([]);
  let c = () => {
  };
  function f() {
    var r;
    s.value && i.value ? (i.value.deactivate(), t.setVisibility(i.value.name, !1)) : (r = i.value) == null || r.destroy();
  }
  function h(r = !0) {
    c(), u(), f(), i.value = null, r && t.clearSelection(), s.value = null, n.value = null;
  }
  function g(r) {
    c(), f(), e.maps.activeMap instanceof z && (i.value = r, r.activate(e.maps.activeMap), c = e.maps.activeMap.shadowMapChanged.addEventListener((p) => {
      var E;
      p !== ((E = i.value) == null ? void 0 : E.shadowMap) && h(!1);
    }));
  }
  async function b(r) {
    h(), await at();
    const { eventHandler: p } = e.maps, { featureInteraction: E } = p, S = new B({
      viewshedType: r,
      colorOptions: {
        visibleColor: o.visibleColor,
        shadowColor: o.shadowColor
      },
      heightOffset: a.value === "absolute" ? 0 : Se
    });
    g(S);
    const I = new Zt(i.value);
    I.finished.addEventListener(() => {
      u(), i.value ? (i.value.showPrimitive = !0, n.value = "edit") : h();
    });
    const w = p.addExclusiveInteraction(
      I,
      () => {
        I.destroy();
      }
    );
    le(E, a.value), I.positioned.addEventListener(() => {
      le(
        E,
        "absolute"
        /* ABSOLUTE */
      );
    }), u = () => {
      w(), I.destroy(), E.setActive(), u = () => {
      };
    }, n.value = "create";
  }
  function N(r) {
    var p;
    if (i.value && r) {
      u();
      const {
        layer: E,
        feature: S,
        destroy: I
      } = qt(i.value.position);
      e.layers.add(E), d.value = [S], a.value === "absolute" ? (l.value = Ue(e, E), l.value.setFeatures([S])) : (l.value = xe(e, E), l.value.setFeature(S)), l.value.stopped.addEventListener(() => {
        u();
      });
      const w = (p = S.getGeometry()) == null ? void 0 : p.on("change", () => {
        i.value ? i.value.position = J.mercatorToWgs84(
          S.getGeometry().getCoordinates()
        ) : h();
      });
      n.value = "move", u = () => {
        var M;
        u = () => {
        }, w && pt(w), (M = l.value) == null || M.stop(), l.value = null, d.value = [], e.layers.remove(E), I(), n.value = "edit";
      };
    } else
      u();
  }
  function O(r, p) {
    u(), i.value !== p && (g(p), a.value = p.heightOffset ? "relative" : "absolute"), s.value = !!p.properties.title, n.value = r, s.value && t.setVisibility(p.name, !0);
  }
  const U = [
    t.collectionComponent.collection.removed.addEventListener(
      (r) => {
        var p;
        t.remove(r.name), ((p = i.value) == null ? void 0 : p.name) === r.name && h();
      }
    ),
    t.renamed.addEventListener(({ item: r, title: p }) => {
      var S;
      const E = e.windowManager.get(
        `${t.collectionComponent.id}-editor`
      );
      E && ((S = i.value) == null ? void 0 : S.name) === r.name && (E.state.headerTitle = p);
    }),
    t.visibilityChanged.addEventListener(({ item: r }) => {
      var E;
      const p = ((E = i.value) == null ? void 0 : E.name) === r.name;
      p ? h() : (O("view", r), t.clearSelection()), t.setVisibility(r.name, !p);
    })
  ];
  function k(r) {
    if (!(r === a.value || !i.value)) {
      if (a.value = r, n.value === "move" && u(), n.value === "create")
        le(
          e.maps.eventHandler.featureInteraction,
          r
        ), i.value.heightOffset = r === "absolute" ? 0 : Se;
      else if (n.value === "edit") {
        const { position: p, heightOffset: E } = i.value;
        r === "relative" ? e.maps.activeMap.getHeightFromTerrain([J.wgs84ToMercator(p)]).then((S) => {
          const I = J.mercatorToWgs84(S[0]);
          i.value && (i.value.heightOffset = p[2] - I[2], i.value.position = I);
        }).catch((S) => {
          De(A).error(
            "Failed to get height from terrain",
            String(S)
          );
        }) : (i.value.position = [
          p[0],
          p[1],
          p[2] + E
        ], i.value.heightOffset = 0);
      }
    }
  }
  return {
    currentViewshed: i,
    currentIsPersisted: s,
    currentEditSession: l,
    currentFeatures: d,
    createViewshed: b,
    viewViewshed(r) {
      O("view", r);
    },
    editViewshed(r) {
      O("edit", r), s.value && t.setSelection(r.name);
    },
    persistCurrent() {
      i.value && (t.add(i.value), s.value = !0, t.setSelection(i.value.name), t.setVisibility(i.value.name, !0));
    },
    moveCurrentViewshed: N,
    setupMultiSelect() {
      u(), n.value = "multiSelect", f(), i.value = null;
    },
    mode: n,
    heightMode: a,
    changeHeightMode: k,
    async placeCurrentFeaturesOnTerrain() {
      var r, p;
      if (i.value && ((r = l.value) == null ? void 0 : r.type) === Be.EDIT_FEATURES && e.maps.activeMap instanceof z) {
        const S = (await e.maps.activeMap.getHeightFromTerrain([
          J.wgs84ToMercator((p = i.value) == null ? void 0 : p.position)
        ]))[0][2] - i.value.position[2];
        l.value.translate(0, 0, S);
      }
    },
    stop: h,
    destroy() {
      h(), U.forEach((r) => {
        r();
      });
    }
  };
}
const ei = {
  distance: [B.MIN_DISTANCE, 2e3],
  fov: [25, 85],
  heading: [0, 360],
  pitch: [-90, 90]
}, ti = Me({
  name: "ViewshedWindow",
  components: {
    VCol: Pe,
    VDivider: It,
    VRow: Ie,
    VcsFormButton: bt,
    VcsFeatureTransforms: yt,
    VcsFormSection: Ne,
    VcsHelp: Et,
    VcsLabel: Re,
    VcsLabeledSlider: _t,
    VcsSelect: Te,
    VcsTextField: Ct,
    VcsWorkspaceWrapper: gt
  },
  props: {
    getViewshed: {
      type: Function,
      default: () => {
      }
    },
    selection: {
      type: Object,
      default: () => {
      }
    }
  },
  setup(e) {
    var r, p, E, S, I;
    const o = ce("manager"), t = ce("vcsApp"), {
      currentViewshed: i,
      mode: s,
      currentIsPersisted: n
    } = o, a = K(
      ((r = t.maps.activeMap) == null ? void 0 : r.movementApiCallsDisabled) ?? !1
    );
    let l, u = () => {
    };
    const d = oe({
      X: void 0,
      Y: void 0,
      Z: void 0
    }), c = ae();
    let f = () => {
    };
    const h = oe({
      showPrimitive: !1,
      distance: ((p = i.value) == null ? void 0 : p.distance) || 0,
      fov: ((E = i.value) == null ? void 0 : E.fov) || 0,
      heading: ((S = i.value) == null ? void 0 : S.heading) || 0,
      pitch: ((I = i.value) == null ? void 0 : I.pitch) || 0
    }), g = K();
    function b() {
      i.value && (d.X = i.value.position[0], d.Y = i.value.position[1], d.Z = o.heightMode.value === X.ABSOLUTE ? i.value.position[2] : i.value.heightOffset);
    }
    function N() {
      b(), i.value && (h.distance = i.value.distance, h.fov = i.value.fov, h.heading = i.value.heading, h.pitch = i.value.pitch, h.showPrimitive = i.value.showPrimitive, g.value = i.value.type);
    }
    rt(() => {
      i.value && s.value !== T.CREATE && N();
    }), Z(
      i,
      () => {
        i.value && (u(), u = i.value.positionChanged.addEventListener(() => {
          b(), f();
        }));
      },
      { immediate: !0 }
    );
    function O() {
      var D, L;
      (D = i.value) == null || D.deactivate();
      const w = (L = t.maps.activeMap.getScene()) == null ? void 0 : L.camera, M = w == null ? void 0 : w.changed.addEventListener(
        f
      );
      f = () => {
        var we;
        M == null || M(), c.value = null, (we = i.value) == null || we.activate(t.maps.activeMap), f = () => {
        };
      };
    }
    lt(() => {
      var M, D;
      const w = (M = e.getViewshed) == null ? void 0 : M.call(e);
      w && o.editViewshed(w), l = (D = t.maps.activeMap) == null ? void 0 : D.movementDisabledChanged.addEventListener(
        (L) => {
          a.value = L.apiCalls;
        }
      );
    }), ct(() => {
      var w;
      u(), f(), l == null || l(), n.value || ((s.value === T.EDIT || s.value === T.MOVE) && i.value ? o.viewViewshed(i.value) : s.value === T.CREATE && o.stop()), (w = e.selection) != null && w.value && (e.selection.value.length > 1 ? o.setupMultiSelect() : e.selection.value.length === 1 && i.value ? o.viewViewshed(i.value) : (
        // when a persited viewshed is deselected, stops plugin
        !e.selection.value.length && s.value === T.EDIT && o.stop(!1)
      ));
    }), N();
    function U(w, M) {
      f(), i.value && (h[w] = M, i.value[w] = M);
    }
    const k = dt(() => {
      const w = [];
      return g.value === _.CONE && w.push({
        name: "jumpToViewpoint",
        title: c.value ? "viewshed.returnToViewpoint" : "viewshed.jumpToViewpoint",
        icon: "mdi-human-male",
        active: !!c.value,
        disabled: a.value,
        async callback() {
          var M, D, L;
          o.moveCurrentViewshed(!1), i.value && !c.value ? (c.value = await ((M = t.maps.activeMap) == null ? void 0 : M.getViewpoint()), await ((D = t.maps.activeMap) == null ? void 0 : D.gotoViewpoint(
            new Xe({
              groundPosition: [
                i.value.position[0],
                i.value.position[1],
                i.value.position[2] + i.value.heightOffset
              ],
              heading: i.value.heading,
              pitch: i.value.pitch,
              distance: 0,
              animate: !0
              // if not animate, async does not work and the cameraChanged listener is triggered immediately. alternatively set timeout
            })
          )), O()) : c.value && (await ((L = t.maps.activeMap) == null ? void 0 : L.gotoViewpoint(c.value)), f());
        }
      }), w.push({
        name: "moveViewshed",
        title: "viewshed.move",
        icon: o.heightMode.value === X.RELATIVE ? "$vcsEditVertices" : "mdi-axis-arrow",
        active: s.value === T.MOVE,
        callback() {
          o.moveCurrentViewshed(
            s.value !== T.MOVE
          );
        }
      }), w.unshift({
        name: "showPrimitive",
        title: "viewshed.showPrimitive",
        icon: "mdi-eye",
        active: h.showPrimitive,
        callback() {
          this.active = !this.active, U("showPrimitive", this.active);
        }
      }), w;
    });
    return {
      position: d,
      setPosition(w, M, D) {
        if (f(), !!i.value) {
          if (D === 2 && o.heightMode.value === X.RELATIVE)
            i.value.heightOffset = Number(w);
          else {
            const L = [...i.value.position];
            L[D] = Number(w), i.value.position = L;
          }
          d[M] = Number(w);
        }
      },
      parameters: h,
      setParameter: U,
      parameterRanges: ei,
      ViewshedPluginModes: T,
      viewshedMode: s,
      currentIsPersisted: n,
      viewshedType: g,
      ViewshedTypes: _,
      HeightModes: X,
      heightMode: o.heightMode,
      heightModes: Object.values(X).map((w) => ({
        value: w,
        title: `viewshed.${w}`
      })),
      TransformationMode: Je,
      changeHeightMode: (w) => {
        o.changeHeightMode(w);
      },
      async createNewViewshed() {
        await o.createViewshed(g.value);
      },
      addToMyWorkspace: () => {
        o.persistCurrent();
      },
      cancel: () => {
        o.stop();
      },
      headerActions: k
    };
  }
}), ke = (e, o) => {
  const t = e.__vccOpts || e;
  for (const [i, s] of o)
    t[i] = s;
  return t;
}, ii = { key: 0 }, oi = { class: "px-1" };
function si(e, o, t, i, s, n) {
  const a = V("VcsHelp"), l = V("VcsLabel"), u = V("v-col"), d = V("VcsSelect"), c = V("v-row"), f = V("v-divider"), h = V("VcsFormButton"), g = V("VcsFeatureTransforms"), b = V("VcsTextField"), N = V("VcsFormSection"), O = V("VcsLabeledSlider"), U = V("VcsWorkspaceWrapper");
  return R(), q("div", null, [
    Y(" CREATE "),
    e.viewshedMode === e.ViewshedPluginModes.CREATE ? (R(), q("div", ii, [
      e.viewshedType === e.ViewshedTypes.CONE ? (R(), W(a, { key: 0 }, {
        default: m(() => [
          H(
            j(e.$t("viewshed.createDescription")),
            1
            /* TEXT */
          )
        ]),
        _: 1
        /* STABLE */
      })) : e.viewshedType === e.ViewshedTypes.THREESIXTY ? (R(), W(a, { key: 1 }, {
        default: m(() => [
          H(
            j(e.$t("viewshed.createThreeSixtyDescription")),
            1
            /* TEXT */
          )
        ]),
        _: 1
        /* STABLE */
      })) : Y("v-if", !0),
      v(c, {
        "no-gutters": "",
        class: "px-1"
      }, {
        default: m(() => [
          v(u, null, {
            default: m(() => [
              v(l, { "html-for": "heightMode" }, {
                default: m(() => [
                  H(
                    j(e.$t("viewshed.heightMode")),
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
          v(u, null, {
            default: m(() => [
              v(d, {
                id: "heightMode",
                items: e.heightModes,
                "model-value": e.heightMode,
                "onUpdate:modelValue": e.changeHeightMode
              }, null, 8, ["items", "model-value", "onUpdate:modelValue"])
            ]),
            _: 1
            /* STABLE */
          })
        ]),
        _: 1
        /* STABLE */
      }),
      v(f),
      v(c, {
        "no-gutters": "",
        class: "px-2 pt-2 pb-1 d-flex justify-end"
      }, {
        default: m(() => [
          v(h, {
            onClick: o[0] || (o[0] = (k) => e.cancel())
          }, {
            default: m(() => [
              H(
                j(e.$t("viewshed.cancel")),
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
      })
    ])) : Y("v-if", !0),
    Y(" EDIT AND MOVE "),
    e.viewshedMode === e.ViewshedPluginModes.EDIT || e.viewshedMode === e.ViewshedPluginModes.MOVE ? (R(), W(U, {
      key: 1,
      "disable-add": e.currentIsPersisted,
      class: "wrapper",
      onAddClicked: e.addToMyWorkspace,
      onNewClicked: e.createNewViewshed
    }, {
      default: m(() => [
        v(N, {
          "header-actions": e.headerActions,
          heading: "viewshed.viewpoint",
          "action-button-list-overflow-count": 3
        }, {
          default: m(() => [
            v(c, {
              "no-gutters": "",
              class: "px-1"
            }, {
              default: m(() => [
                ut(
                  "span",
                  oi,
                  j(e.$t("viewshed.position")),
                  1
                  /* TEXT */
                )
              ]),
              _: 1
              /* STABLE */
            }),
            e.viewshedMode === e.ViewshedPluginModes.MOVE && e.heightMode === e.HeightModes.ABSOLUTE ? (R(), W(c, {
              key: 0,
              "no-gutters": "",
              class: "px-1"
            }, {
              default: m(() => [
                v(g, {
                  "transformation-mode": e.TransformationMode.TRANSLATE,
                  "feature-properties": { altitudeMode: "absolute" },
                  "allow-z-input": !0,
                  class: "w-100"
                }, null, 8, ["transformation-mode"])
              ]),
              _: 1
              /* STABLE */
            })) : (R(), W(c, {
              key: 1,
              "no-gutters": "",
              class: "px-1"
            }, {
              default: m(() => [
                (R(!0), q(
                  ye,
                  null,
                  be(e.position, (k, r, p) => (R(), W(
                    u,
                    {
                      key: p,
                      class: "pb-1"
                    },
                    {
                      default: m(() => [
                        v(b, {
                          "model-value": k,
                          type: "number",
                          prefix: r,
                          step: r === "Z" ? 1 : 1e-4,
                          unit: r === "Z" ? "m" : "°",
                          decimals: r === "Z" ? 2 : 8,
                          disabled: e.viewshedMode === e.ViewshedPluginModes.MOVE && !(r === "Z" && e.heightMode === e.HeightModes.RELATIVE),
                          "hide-spin-buttons": !0,
                          "onUpdate:modelValue": (E) => e.setPosition(E, r, p)
                        }, null, 8, ["model-value", "prefix", "step", "unit", "decimals", "disabled", "onUpdate:modelValue"])
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
        }, 8, ["header-actions"]),
        v(f),
        v(c, {
          "no-gutters": "",
          class: "px-1"
        }, {
          default: m(() => [
            v(u, null, {
              default: m(() => [
                v(l, { "html-for": "heightMode" }, {
                  default: m(() => [
                    H(
                      j(e.$t("viewshed.heightMode")),
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
            v(u, null, {
              default: m(() => [
                v(d, {
                  id: "heightMode",
                  items: e.heightModes,
                  "model-value": e.heightMode,
                  "onUpdate:modelValue": e.changeHeightMode
                }, null, 8, ["items", "model-value", "onUpdate:modelValue"])
              ]),
              _: 1
              /* STABLE */
            })
          ]),
          _: 1
          /* STABLE */
        }),
        (R(!0), q(
          ye,
          null,
          be(e.parameters, (k, r) => (R(), q("div", {
            key: r,
            class: "px-1"
          }, [
            r === "distance" || e.viewshedType === e.ViewshedTypes.CONE && r !== "showPrimitive" ? (R(), W(O, {
              key: 0,
              class: "pa-0",
              label: `viewshed.${r}`,
              unit: r === "distance" ? "m" : "°",
              min: e.parameterRanges[r][0],
              max: e.parameterRanges[r][1],
              step: 1,
              "text-input-cols": 3,
              "allow-text-input": "",
              "hide-spin-buttons": "",
              "model-value": Math.round(Number(k)),
              "onUpdate:modelValue": (p) => e.setParameter(r, p)
            }, null, 8, ["label", "unit", "min", "max", "model-value", "onUpdate:modelValue"])) : Y("v-if", !0)
          ]))),
          128
          /* KEYED_FRAGMENT */
        ))
      ]),
      _: 1
      /* STABLE */
    }, 8, ["disable-add", "onAddClicked", "onNewClicked"])) : Y("v-if", !0)
  ]);
}
const ni = /* @__PURE__ */ ke(ti, [["render", si]]), fe = {
  [_.CONE]: "$vcsViewshed",
  [_.THREESIXTY]: "$vcsViewshedCone"
};
function ai(e, o, t) {
  const i = K(""), s = K(), n = `${t.id}-editor`, a = {
    component: ni,
    provides: { manager: e },
    state: {
      headerTitle: i,
      headerIcon: s,
      styles: { width: "280px", height: "auto" },
      infoUrlCallback: o.getHelpUrlCallback("tools/viewshed.html")
    }
  };
  Vt(o, t, {
    editor: (h) => ({
      ...a,
      props: {
        selection: t.selection,
        getViewshed: () => t.collection.getByKey(h.name)
      }
    })
  });
  function l() {
    e.currentViewshed.value && (s.value = fe[e.currentViewshed.value.type], e.currentIsPersisted.value ? i.value = e.currentViewshed.value.properties.title : e.mode.value === T.CREATE ? i.value = `viewshed.create.${e.currentViewshed.value.type}` : i.value = [
      "viewshed.temporary",
      `viewshed.${e.currentViewshed.value.type}`
    ]);
  }
  function u() {
    l(), e.currentViewshed.value && !e.currentIsPersisted.value && (e.mode.value === T.EDIT || e.mode.value === T.MOVE || e.mode.value === T.CREATE) && (o.windowManager.has(n) || o.windowManager.add(
      {
        ...a,
        id: n,
        parentId: "category-manager",
        slot: St.DYNAMIC_CHILD
      },
      A
    ));
  }
  const d = Z(e.currentViewshed, (h) => {
    h && u();
  }), c = Z(e.currentIsPersisted, (h) => {
    h && l();
  }), f = Z(e.mode, () => {
    e.mode.value ? u() : o.windowManager.remove(n);
  });
  return {
    destroy() {
      o.windowManager.remove(n), d(), f(), c();
    }
  };
}
function ri(e, o, t, i) {
  function s(d) {
    return d === _.CONE ? {
      name: _.CONE,
      icon: fe[_.CONE],
      title: `viewshed.create.${_.CONE}`
    } : d === _.THREESIXTY ? {
      name: _.THREESIXTY,
      icon: fe[_.THREESIXTY],
      title: `viewshed.create.${_.THREESIXTY}`
    } : void 0;
  }
  let n, a;
  if (i.length === 1) {
    const d = s(i[0]);
    n = {
      type: Ve.SINGLE,
      action: oe({
        ...d,
        active: !1,
        background: !1,
        disabled: !(e.maps.activeMap instanceof z),
        async callback() {
          this.active ? this.background && o.currentViewshed.value ? o.editViewshed(o.currentViewshed.value) : o.stop() : d && await o.createViewshed(d.name);
        }
      })
    };
  } else
    n = {
      type: Ve.SELECT,
      action: oe({
        name: t,
        currentIndex: 0,
        active: !1,
        background: !1,
        disabled: !(e.maps.activeMap instanceof z),
        async callback() {
          if (this.active)
            this.background && o.currentViewshed.value ? o.editViewshed(o.currentViewshed.value) : o.stop();
          else {
            const d = this.tools[this.currentIndex].name;
            await o.createViewshed(d);
          }
        },
        async selected(d) {
          d !== this.currentIndex && (this.currentIndex = d);
          const c = this.tools[this.currentIndex].name;
          await o.createViewshed(c);
        },
        tools: i.flatMap((d) => s(d))
      })
    }, a = Z(
      o.currentViewshed,
      (d) => {
        d && (n.action.currentIndex = n.action.tools.findIndex(
          (c) => c.name === d.type
        ));
      }
    );
  const l = Z(o.mode, (d) => {
    d === T.VIEW ? (n.action.background = !0, n.action.active = !0) : d ? (n.action.background = !1, n.action.active = !0) : (n.action.background = !1, n.action.active = !1);
  }), u = e.maps.mapActivated.addEventListener((d) => {
    d instanceof z ? n.action.disabled = !1 : n.action.disabled = !0;
  });
  return {
    toolbox: n,
    destroy() {
      l(), a == null || a(), u();
    }
  };
}
function li(e, o, t, i) {
  me(i, [Bt(_)]);
  const { toolbox: s, destroy: n } = ri(e, o, t, i), a = e.toolboxManager.add(s, t).id;
  return () => {
    e.toolboxManager.remove(a), n();
  };
}
class pe extends Ze {
  static get className() {
    return "ViewshedCategory";
  }
  async _deserializeItem(o) {
    var i;
    if ((i = this._app) == null ? void 0 : i.maps.getByType(z.className)[0])
      return Promise.resolve(new B(o));
    throw new Error("No CesiumMap available");
  }
}
function ci(e, o) {
  let t, i = 0;
  const s = new Set(
    o.filter((n) => n.type === e).map((n) => n.properties.title)
  );
  do
    i += 1, s.has(`${e}-${i}`) || (t = `${e}-${i}`);
  while (!t);
  return t;
}
async function di(e) {
  const o = new te(), t = new te(), { collectionComponent: i, category: s } = await e.categoryManager.requestCategory(
    {
      type: pe.className,
      name: "Viewsheds",
      title: "viewshed.viewshedCategory"
    },
    A,
    { selectable: !0, renamable: !0, removable: !0 }
  );
  i.addItemMapping({
    mappingFunction: Ot(
      [z.className],
      e.maps
    ),
    owner: A
  });
  const n = (c, f, h) => {
    h.title = c.properties.title, h.titleChanged = (g) => {
      c.properties.title = g, h.title = g, o.raiseEvent({ item: c, title: g });
    }, h.actions.push(
      oe({
        name: "visibilityAction",
        icon: "$vcsCheckbox",
        callback() {
          t.raiseEvent({ item: c, visible: !!h.visible });
        }
      })
    );
  };
  e.categoryManager.addMappingFunction(
    () => !0,
    n,
    A,
    [i.id]
  );
  const { action: a, destroy: l } = Mt(
    i.selection,
    () => {
      const c = i.selection.value.map(
        (f) => i.collection.getByKey(f.name)
      );
      Tt(JSON.stringify(c), "viewsheds.json");
    },
    A
  ), { action: u, destroy: d } = Rt(
    async (c) => {
      const { vueI18n: f } = e, g = (await Promise.all(
        c.map(async (O) => {
          const U = await O.text();
          try {
            return JSON.parse(U).map((r) => new B(r));
          } catch {
            e.notifier.add({
              type: ne.ERROR,
              message: f.t("components.import.failure", {
                fileName: O.name
              })
            });
          }
          return [];
        })
      )).flat(), b = g.map((O) => s.collection.add(O)).filter((O) => O != null), N = g.length - b.length;
      if (N > 0)
        return e.notifier.add({
          type: ne.WARNING,
          message: f.t("components.import.addFailure", [N])
        }), !1;
      if (b.length > 0)
        e.notifier.add({
          type: ne.SUCCESS,
          message: f.t("components.import.featuresAdded", [
            b.length
          ])
        });
      else
        return e.notifier.add({
          type: ne.ERROR,
          message: f.t("components.import.nothingAdded")
        }), !1;
      return !0;
    },
    e.windowManager,
    A,
    "category-manager"
  );
  return i.addActions([a, u]), {
    renamed: o,
    visibilityChanged: t,
    setSelection(c) {
      c && (i.selection.value = i.items.value.filter((f) => c === f.name));
    },
    clearSelection() {
      i.selection.value.length && (i.selection.value = []);
    },
    setVisibility(c, f) {
      const h = i.items.value.find(
        (g) => c === g.name
      );
      if (h) {
        const g = h.actions.find(
          (b) => b.name === "visibilityAction"
        );
        g && (g.icon = f ? "$vcsCheckboxChecked" : "$vcsCheckbox");
      }
    },
    add(c) {
      c.properties.title = ci(c.type, [
        ...s.collection
      ]), s.collection.add(c);
    },
    remove(c) {
      const f = s.collection.getByKey(c);
      f && s.collection.remove(f);
    },
    collectionComponent: i,
    destroy() {
      e.categoryManager.removeOwner(A), o.destroy(), t.destroy(), l(), d();
    }
  };
}
const ui = Me({
  name: "ViewshedConfigEditor",
  components: {
    AbstractConfigEditor: Nt,
    VcsFormSection: Ne,
    VContainer: At,
    VRow: Ie,
    VCol: Pe,
    VcsLabel: Re,
    VcsSelect: Te,
    VColorPicker: Pt
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
    const o = ce("vcsUiApp"), { getDefaultOptions: t } = o.plugins.getByKey(
      A
    ), i = K({
      ...t == null ? void 0 : t(),
      ...e.getConfig()
    });
    function s() {
      e.setConfig(structuredClone(ht(i.value)));
    }
    return {
      localConfig: i,
      ViewshedTypes: _,
      apply: s,
      toolItems: Object.values(_).map((n) => ({
        value: n,
        title: `viewshed.${n}`
      }))
    };
  }
});
function hi(e, o, t, i, s, n) {
  const a = V("VcsLabel"), l = V("v-col"), u = V("VcsSelect"), d = V("v-row"), c = V("VColorPicker"), f = V("v-container"), h = V("VcsFormSection"), g = V("AbstractConfigEditor");
  return R(), W(g, ft({ ...e.$attrs, ...e.$props }, { onSubmit: e.apply }), {
    default: m(() => [
      e.localConfig ? (R(), W(h, {
        key: 0,
        heading: "viewshed.editor.general"
      }, {
        default: m(() => [
          v(f, { class: "px-1 py-0" }, {
            default: m(() => [
              v(d, { "no-gutters": "" }, {
                default: m(() => [
                  v(l, null, {
                    default: m(() => [
                      v(a, { "html-for": "viewshed-editor-tools" }, {
                        default: m(() => [
                          H(
                            j(e.$t("viewshed.editor.tools")),
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
                  v(l, null, {
                    default: m(() => [
                      v(u, {
                        id: "viewshed-tools",
                        modelValue: e.localConfig.tools,
                        "onUpdate:modelValue": o[0] || (o[0] = (b) => e.localConfig.tools = b),
                        items: e.toolItems,
                        multiple: !0
                      }, null, 8, ["modelValue", "items"])
                    ]),
                    _: 1
                    /* STABLE */
                  })
                ]),
                _: 1
                /* STABLE */
              }),
              v(d, { "no-gutters": "" }, {
                default: m(() => [
                  v(l, null, {
                    default: m(() => [
                      v(a, { "html-for": "viewshed-editor-visible-color" }, {
                        default: m(() => [
                          H(
                            j(e.$t("viewshed.editor.visibleColor")),
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
                  v(l, null, {
                    default: m(() => [
                      v(c, {
                        modelValue: e.localConfig.visibleColor,
                        "onUpdate:modelValue": o[1] || (o[1] = (b) => e.localConfig.visibleColor = b),
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
              v(d, { "no-gutters": "" }, {
                default: m(() => [
                  v(l, null, {
                    default: m(() => [
                      v(a, { "html-for": "viewshed-editor-shadow-color" }, {
                        default: m(() => [
                          H(
                            j(e.$t("viewshed.editor.shadowColor")),
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
                  v(l, null, {
                    default: m(() => [
                      v(c, {
                        modelValue: e.localConfig.shadowColor,
                        "onUpdate:modelValue": o[2] || (o[2] = (b) => e.localConfig.shadowColor = b),
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
      })) : Y("v-if", !0)
    ]),
    _: 1
    /* STABLE */
  }, 16, ["onSubmit"]);
}
const fi = /* @__PURE__ */ ke(ui, [["render", hi]]);
function Oe() {
  return {
    visibleColor: B.getDefaultOptions().colorOptions.visibleColor,
    shadowColor: B.getDefaultOptions().colorOptions.shadowColor,
    tools: [...Object.values(_)]
  };
}
function Ei(e) {
  let o, t, i = () => {
  };
  const s = Oe(), n = { ...s, ...e };
  return {
    get name() {
      return A;
    },
    get version() {
      return Xt;
    },
    get mapVersion() {
      return Jt;
    },
    async initialize(a, l) {
      o = a, a.categoryClassRegistry.registerClass(
        this[qe],
        pe.className,
        pe
      );
      const u = await di(a);
      t = Qt(
        a,
        n,
        u
      );
      const d = li(
        a,
        t,
        A,
        n.tools || s.tools
      ), { destroy: c } = ai(
        t,
        a,
        u.collectionComponent
      ), { activeMap: f } = a.maps;
      function h(N) {
        if (l != null && l.m && l.cv && N instanceof z) {
          const O = new B(l.cv);
          l.m === T.VIEW ? t.viewViewshed(O) : t.editViewshed(O);
        }
      }
      let g = !1;
      f && (g = !0, h(f));
      const b = a.maps.mapActivated.addEventListener(
        (N) => {
          t.stop(), g || (h(N), g = !0);
        }
      );
      i = () => {
        b(), d(), c(), u.destroy(), t.destroy();
      };
    },
    getDefaultOptions: Oe,
    toJSON() {
      const a = {};
      return n.tools && s.tools.length !== n.tools.length && (a.tools = [...n.tools]), n.shadowColor && n.shadowColor !== s.shadowColor && (a.shadowColor = n.shadowColor), n.visibleColor && n.visibleColor !== s.visibleColor && (a.visibleColor = n.visibleColor), a;
    },
    getState(a) {
      var c, f, h, g;
      const l = {}, u = t.mode.value, d = (c = t.currentViewshed.value) == null ? void 0 : c.toJSON();
      return u !== null && u !== T.CREATE && d && (l.m = u, l.cv = d, a && ((h = (f = l.cv) == null ? void 0 : f.properties) != null && h.title) && (Object.keys((g = l.cv) == null ? void 0 : g.properties).length === 1 ? delete l.cv.properties : delete l.cv.properties.title)), l;
    },
    getConfigEditors() {
      return [
        {
          component: fi,
          title: "viewshed.editor.title",
          infoUrlCallback: o == null ? void 0 : o.getHelpUrlCallback(
            "/components/plugins/viewshedToolConfig.html",
            "app-configurator"
          )
        }
      ];
    },
    destroy: () => {
      i();
    },
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
          cancel: "Cancel",
          [_.CONE]: "Cone viewshed analysis",
          [_.THREESIXTY]: "360° viewshed analysis",
          create: {
            [_.CONE]: "Create cone viewshed analysis",
            [_.THREESIXTY]: "Create 360° viewshed analysis"
          },
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
          cancel: "Abbrechen",
          [_.CONE]: "Sichtkegelanalyse",
          [_.THREESIXTY]: "360° Sichtsanalyse",
          create: {
            [_.CONE]: "Sichtkegelanalyse erstellen",
            [_.THREESIXTY]: "360° Sichtanalyse erstellen"
          },
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
  Ei as default,
  Oe as getDefaultOptions
};
