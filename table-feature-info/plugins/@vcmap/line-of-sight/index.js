var Ce = Object.defineProperty;
var be = (e, t, o) => t in e ? Ce(e, t, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[t] = o;
var G = (e, t, o) => be(e, typeof t != "symbol" ? t + "" : t, o);
import { mercatorToCartesian as U, cartesianToMercator as Oe, VectorLayer as Me, mercatorProjection as Ve, markVolatile as Ee, CesiumMap as V, LayerState as se, AbstractInteraction as Ie, VcsEvent as te, EventType as Le, Viewpoint as ke, Projection as z, initialBearingBetweenCoords as Te, SessionType as Q, cursorMap as le, Category as _e, writeGeoJSONFeature as Fe, parseGeoJSON as Re, writeGeoJSON as Ge, FeatureVisibilityAction as Y, moduleIdSymbol as Ne } from "../../../assets/core.js";
import { shallowRef as oe, watch as L, reactive as K, defineComponent as Be, inject as We, ref as F, onUnmounted as De, computed as je, resolveComponent as M, openBlock as q, createBlock as ce, withCtx as A, createElementBlock as Ue, Fragment as Pe, createVNode as w, createElementVNode as k, toDisplayString as Z, createTextVNode as ze, nextTick as He } from "../../../assets/vue.js";
import { ol$Observable$unByKey as N, ol$style$Style as J, ol$style$Stroke as de, ol$geom$LineString as P, ol$style$Icon as ue, ol$geom$Point as fe, ol$Feature as xe } from "../../../assets/ol.js";
import { Cartesian3 as I, Ray as Ze, Math as Qe } from "../../../assets/cesium.js";
import { VcsHelp as Ye, VcsFormSection as Je, VcsCoordinate as $e, VcsFormButton as Xe, VcsCheckbox as Ke, VcsTextField as qe, VcsWorkspaceWrapper as et, WindowSlot as tt, ToolboxType as ot, createSupportedMapMappingFunction as it, createListExportAction as nt, downloadText as st, createListImportAction as at, importIntoLayer as rt, makeEditorCollectionComponentClass as lt, createZoomToFeatureAction as ct } from "../../../assets/ui.js";
import { VSheet as dt, VDivider as ut, VContainer as ft, VRow as gt, VCol as pt } from "../../../assets/vuetify.js";
const O = "@vcmap/line-of-sight", vt = "2.0.0", mt = "^6.2", S = {
  OFF: 1,
  ERROR: 2,
  WARN: 4,
  INFO: 8,
  DEBUG: 16
}, T = {
  ERROR: 0,
  WARN: 0,
  INFO: 0,
  DEBUG: 0
};
T.ERROR = S.ERROR | S.WARN | S.INFO | S.DEBUG;
T.WARN = S.WARN | S.INFO | S.DEBUG;
T.INFO = S.INFO | S.DEBUG;
T.DEBUG = S.DEBUG;
const j = {
  useTimestamp: !1,
  logLevel: S.INFO
}, H = /* @__PURE__ */ new Map();
H.set(S.ERROR, "error");
H.set(S.WARN, "warn");
H.set(S.INFO, "info");
H.set(S.DEBUG, "log");
class ht {
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
  error(t, ...o) {
    j.logLevel & T.ERROR && this._log(String(t), S.ERROR, o);
  }
  /**
   * Logs a warning message
   * @param {string} msg The message to log.
   * @param {...any} optArgs
   */
  warning(t, ...o) {
    j.logLevel & T.WARN && this._log(String(t), S.WARN, o);
  }
  /**
   * Deprecate a function. deprecations are stored on the logger
   * @param {string} functionName
   * @param {string=} alternativeFunctionName
   */
  deprecate(t, o) {
    const i = String(t), n = o ? String(o) : null;
    if (!this.deprecations.has(i)) {
      this.deprecations.set(i, n || null);
      let l = `${i} has been deprecated and will be removed`;
      n && (l = `${l}. ${n}`), this.warning(l);
    }
  }
  /**
   * Logs an info message
   * @param {string} msg The message to log.
   * @param {...any} optArgs
   */
  info(t, ...o) {
    j.logLevel & T.INFO && this._log(String(t), S.INFO, o);
  }
  /**
   * Logs a debug message
   * @param {string} msg The message to log.
   * @param {...any} optArgs
   */
  debug(t, ...o) {
    j.logLevel & T.DEBUG && this._log(String(t), S.DEBUG, o);
  }
  /**
   * Alias for debug
   * @param {string} msg The message to log.
   * @param {...any} optArgs
   */
  log(t, ...o) {
    j.logLevel & T.DEBUG && this._log(String(t), S.DEBUG, o);
  }
  /**
   * Logs a message
   * @param {string} msg The message to log.
   * @param {LOG_LEVEL} level
   * @param {Array} optArgs
   * @private
   */
  _log(t, o, i) {
    let n = t;
    this.className && (n = `[${this.className}] ${n}`), console[H.get(o)](n, ...i), o & S.ERROR && (console.group(), console.trace(), console.groupEnd());
  }
}
const ie = /* @__PURE__ */ new Map();
function wt(e) {
  const t = new ht(e);
  return ie.set(e, t), t;
}
function ve(e) {
  return ie.has(e) ? ie.get(e) : wt(e);
}
const _ = {
  altitudeMode: "offset",
  offset: 1.6
};
function me(e) {
  const t = new J({
    stroke: new de({
      color: [10, 255, 10, 1],
      width: 1.25
    })
  }), o = [t], i = e.getGeometry();
  if (!(i instanceof P))
    return o;
  const n = e.get("intersection");
  if (i && n) {
    t.setGeometry(
      new P([i.getCoordinates()[0], n])
    );
    const l = new J({
      stroke: new de({
        color: [255, 50, 50, 1],
        width: 1.25
      }),
      geometry: new P([n, i.getCoordinates()[1]])
    });
    o.push(l);
  }
  return o;
}
function ae(e) {
  const t = e.getGeometry();
  if (!(t instanceof P))
    return [];
  const o = new J({
    image: new ue({
      src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAA/ElEQVRIS+2VYQ0CMQyF7xyAA3AACjgJSDgUAAoAB6AAHCABUABSkMB7yZYszUHX/llC1mTZ7W7rt77rurYpZG0hbuMFj7DhDo39xbN5D5iwG9osAN/ox1a4B9wDchagLcZHC9wDXgJwFZCVVXIPeEjqKcCUPNs84Oh8Ex6YXCYo13nAjDgmVtzEywq3gncAMFLCpe3x4pCrtQXMKJ+K4zm+M3rVLOAe3uQxkoDs7K7gX/+mSj2kzn8lFyOcoK1DEUkj5s10CtUrq3xajlMEsXqxSqVmqlpcWMFqjcWEKjVVqsml5ornOHXwuhCeHxjfVVoywQO2+P86txj4A5HGNh+APwx4AAAAAElFTkSuQmCC"
    }),
    geometry: t ? new fe(t.getCoordinates()[0]) : void 0
  }), i = new J({
    image: new ue({
      src: `data:image/png;base64,
	iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0
	d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9i
	ZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2Vo
	aUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6
	bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5
	LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpS
	REYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJk
	Zi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIg
	eG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxu
	czp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1s
	bnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9S
	ZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9w
	IENDIDIwMTcgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlk
	OkFDN0M0MEFGOEZFQTExRTg5QjBDQ0NCMTJDOTk4NkYwIiB4bXBNTTpEb2N1
	bWVudElEPSJ4bXAuZGlkOkFDN0M0MEIwOEZFQTExRTg5QjBDQ0NCMTJDOTk4
	NkYwIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9Inht
	cC5paWQ6QUM3QzQwQUQ4RkVBMTFFODlCMENDQ0IxMkM5OTg2RjAiIHN0UmVm
	OmRvY3VtZW50SUQ9InhtcC5kaWQ6QUM3QzQwQUU4RkVBMTFFODlCMENDQ0Ix
	MkM5OTg2RjAiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94
	OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5AejVAAAABI0lEQVR42uyW
	0Q2DIBCGi+kCrMAKrkBHYAVXYIWu4Ap2hDqCjlBH0BHokfBwIYoc0PrCJX+s
	Mfz3ccr1mDHmdmXcUxYxxlq4SCcbM2gBvWBDG8nMViBWEDbx2y470ArSJE9C
	cuUSmAhZSF4MwO189RIo96w7gigJ8EHGNqEA9REV0dkA3g6HnWqEtJYAGJCh
	OPkI96RC/k3EQWnRUePo6MWGCD1sCAabA6CGzAXAlXgmACy5ALO7cvQ6LgFI
	jTGrFbt3aBI1lWpEfSKALAXAvW4YI136z8hCTCWTkwAQiA60YtslW4ofS52I
	YCiRXpecycMIsRH50aHf6qzlHm4kowL+wgd4jf+sQJGoABWgAlSAHIDt5P7n
	rVjgiRl8kka3rwADAMwaCzW8j1/1AAAAAElFTkSuQmCC`
    }),
    geometry: t != null && t.getCoordinates()[1] ? new fe(t.getCoordinates()[1]) : void 0
  });
  return [...me(e), o, i];
}
function B(e, t, o) {
  var s;
  const i = e.getScene(), n = (s = o.getGeometry()) == null ? void 0 : s.getCoordinates();
  let l;
  if (n) {
    const r = U(n[0]), a = U(n[1]), d = I.subtract(a, r, new I()), v = new Ze(r, d), y = (
      // @ts-expect-error {Property '_rootCollection' does not exist on type 'VectorObliqueImpl'.}
      // eslint-disable-next-line no-underscore-dangle
      t.getImplementationsForMap(e)[0]._rootCollection
    ), m = y.get(0), C = y.get(2), u = [];
    for (let g = 0; g < m.length; g++)
      u.push(m.get(g));
    for (let g = 0; g < C.length; g++)
      u.push(C.get(g));
    if (l = i == null ? void 0 : i.pickFromRay(v, u), l != null && l.position) {
      const g = I.distance(
        r,
        l.position
      ), f = I.distance(r, a);
      if (g < f)
        return Oe(l.position);
    }
  }
}
function $(e) {
  const t = e == null ? void 0 : e.getGeometry();
  return !!t && t.getType() === "LineString";
}
function yt(e) {
  const t = [
    e.on("propertychange", (o) => {
      var l, s, r;
      const { key: i, oldValue: n } = o;
      if (i === "viewpoint_altitudeMode") {
        if (e.get(i) === "absolute" && n === "offset") {
          const a = e.getGeometry().getCoordinates();
          a[0][2] -= e.get("viewpoint_offset"), (l = e.getGeometry()) == null || l.setCoordinates(a);
        } else if (e.get(i) === "offset" && n === "absolute") {
          const a = e.getGeometry().getCoordinates();
          a[0][2] += e.get("viewpoint_offset"), (s = e.getGeometry()) == null || s.setCoordinates(a);
        }
      } else if (i === "viewpoint_offset" && e.get("viewpoint_altitudeMode") === "offset") {
        const a = e.getGeometry().getCoordinates();
        a[0][2] += e.get(i) - n, (r = e.getGeometry()) == null || r.setCoordinates(a);
      }
    })
  ];
  return () => {
    t.forEach((o) => {
      N(o);
    });
  };
}
async function At(e) {
  const t = new Me({
    projection: Ve.toJSON(),
    name: "line-of-sight-layer"
  });
  Ee(t), t.setStyle(me), await t.activate(), e.layers.add(t);
  const o = /* @__PURE__ */ new Map(), i = t.getSource(), n = [
    i.on("addfeature", ({ feature: s }) => {
      if (!$(s)) {
        s && (t.removeFeaturesById([s.getId()]), ve(O).warning(
          "feature no valid LineOfSight feature, therefore removed."
        ));
        return;
      }
      s.getProperty("viewpoint_altitudeMode") || s.setProperties({
        olcs_altitudeMode: "absolute",
        // eslint-disable-next-line @typescript-eslint/naming-convention
        viewpoint_altitudeMode: _.altitudeMode,
        // eslint-disable-next-line @typescript-eslint/naming-convention
        viewpoint_offset: _.offset
      }), o.set(s, yt(s));
    }),
    i.on("removefeature", ({ feature: s }) => {
      var r;
      s && ((r = o.get(s)) == null || r(), o.delete(s));
    })
  ], l = e.maps.mapActivated.addEventListener(async (s) => {
    s instanceof V ? await t.activate() : t.deactivate();
  });
  return {
    layer: t,
    destroy() {
      N(n), o.forEach((s) => {
        s();
      }), o.clear(), e.layers.remove(t), t.destroy(), l();
    }
  };
}
function St(e, t, o) {
  const i = oe(), n = L(i, (a, d) => {
    if (d)
      if (t.collection.has(d)) {
        const v = t.getListItemForItem(d);
        v && t.selection.value.includes(v) && t.selection.value.length === 1 && (t.selection.value = []);
      } else
        o.removeFeaturesById([d.getId()]);
  }), l = L(
    t.selection,
    (a, d) => {
      (a.length > 1 || !a.length) && i.value && (i.value = void 0), d.forEach((v) => {
        const y = t.collection.getByKey(v.name);
        y == null || y.setStyle();
      }), a.forEach((v) => {
        var y;
        o.featureVisibility.showObjects([v.name]), (y = t.collection.getByKey(v.name)) == null || y.setStyle(ae);
      });
    }
  ), s = t.collection.removed.addEventListener((a) => {
    i.value === a && (i.value = void 0);
  }), r = o.stateChanged.addEventListener(
    (a) => {
      a !== se.ACTIVE && i.value && (e.windowManager.remove(
        t.getEditorWindowId(i.value)
      ), i.value = void 0);
    }
  );
  return {
    activeLineOfSightFeature: i,
    destroy() {
      var a;
      s(), n(), l(), r(), (a = i.value) == null || a.dispose(), i.value = void 0;
    }
  };
}
function he(e, t, o) {
  return new xe({
    title: "lineOfSight.temporary",
    geometry: new P(e),
    olcs_altitudeMode: "absolute",
    // eslint-disable-next-line @typescript-eslint/naming-convention
    viewpoint_altitudeMode: t,
    // eslint-disable-next-line @typescript-eslint/naming-convention
    viewpoint_offset: o
  });
}
class Ct extends Ie {
  constructor(o, i) {
    super(Le.CLICK);
    G(this, "_viewpointSet", new te());
    G(this, "_line");
    G(this, "_finished", new te());
    G(this, "viewpointAltitudeMode");
    G(this, "_viewpointOffset");
    this.viewpointAltitudeMode = o ?? _.altitudeMode, this._viewpointOffset = i ?? _.offset, this.setActive();
  }
  get finished() {
    return this._finished;
  }
  get viewpointSet() {
    return this._viewpointSet;
  }
  set offset(o) {
    this._line && this._line.set("viewpoint_offset", o), this._viewpointOffset = o;
  }
  get offset() {
    return this._viewpointOffset;
  }
  pipe(o) {
    if (o.position && !o.position.every((i) => i === 0))
      if (this._line) {
        const i = this._line.getGeometry();
        i.setCoordinates(
          i.getCoordinates().concat([o.position])
        ), this.setActive(!1), this._finished.raiseEvent(this._line);
      } else {
        const i = [...o.position];
        this.viewpointAltitudeMode === "offset" && (i[2] += this._viewpointOffset), this._line = he(
          [i],
          this.viewpointAltitudeMode,
          this._viewpointOffset
        ), this._viewpointSet.raiseEvent(this._line);
      }
    return Promise.resolve(o);
  }
  destroy() {
    this._finished.destroy(), this._viewpointSet.destroy(), super.destroy();
  }
}
function we(e) {
  return e === "returnTo" ? "lineOfSight.returnToViewpoint" : "lineOfSight.jumpToViewpoint";
}
function ee(e, t, o) {
  e.active = t === "returnTo", e.title = we(t), e.icon = t === "loading" ? "$vcsProgress" : "mdi-human-male", e.disabled = t === "loading" || o;
}
function bt(e, t) {
  const o = e[2] > t[2] ? [e[0], e[1], t[2]] : [t[0], t[1], e[2]], i = U(e), n = U(t), l = U(o), s = I.subtract(
    n,
    i,
    new I()
  ), r = I.subtract(
    l,
    i,
    new I()
  );
  I.normalize(s, s), I.normalize(r, r);
  let a = Qe.toDegrees(
    Math.acos(I.dot(s, r))
  );
  e[2] > t[2] && (a -= 90);
  const d = z.mercatorToWgs84(e), v = z.mercatorToWgs84(t);
  return {
    cameraPosition: d,
    heading: Te(d, v),
    roll: 0,
    distance: 0,
    pitch: a,
    animate: !0
  };
}
function Ot(e, t) {
  var s, r;
  let o, i = () => {
  };
  const n = K({
    name: "lineOfSight-jumpToViewpoint",
    title: we("jumpTo"),
    icon: "mdi-human-male",
    active: !1,
    disabled: ((s = e.maps.activeMap) == null ? void 0 : s.movementApiCallsDisabled) ?? !1,
    async callback() {
      var v, y, m, C, u;
      const { activeMap: a } = e.maps, d = (y = (v = t.value) == null ? void 0 : v.getGeometry()) == null ? void 0 : y.getCoordinates();
      if (d && !o && a) {
        o = await ((m = e.maps.activeMap) == null ? void 0 : m.getViewpoint()) || void 0;
        const g = (C = a.getScene()) == null ? void 0 : C.camera;
        let f;
        i = () => {
          f == null || f(), o = void 0, ee(n, "jumpTo", a.movementApiCallsDisabled), i = () => {
          };
        };
        const b = bt(
          d[0],
          d[1]
        );
        ee(n, "loading", a.movementApiCallsDisabled), await ((u = e.maps.activeMap) == null ? void 0 : u.gotoViewpoint(
          new ke(b)
        )), ee(n, "returnTo", a.movementApiCallsDisabled), f = g == null ? void 0 : g.changed.addEventListener(() => {
          i();
        });
      } else o && (await (a == null ? void 0 : a.gotoViewpoint(o)), i());
    }
  }), l = (r = e.maps.activeMap) == null ? void 0 : r.movementDisabledChanged.addEventListener((a) => {
    n.disabled = a.apiCalls;
  });
  return {
    action: n,
    destroy() {
      i(), l == null || l();
    },
    removeCachedView() {
      i();
    }
  };
}
function ye(e, t) {
  var i;
  const o = (i = e == null ? void 0 : e.getGeometry()) == null ? void 0 : i.getCoordinates()[t];
  return o && z.mercatorToWgs84(o);
}
function ge(e, t) {
  const o = ye(e, 0), i = e == null ? void 0 : e.get("viewpoint_offset");
  return o && t === "offset" && i && (o[2] -= i), o;
}
function Mt(e) {
  return ye(e, 1);
}
function Vt(e) {
  let t, o = 0;
  const i = new Set(
    e.map((n) => n.get("title"))
  );
  for (; !t; )
    o += 1, i.has(`lineOfSight-${o}`) || (t = `lineOfSight-${o}`);
  return t;
}
const Et = Be({
  name: "LineOfSightWindow",
  components: {
    VSheet: dt,
    VDivider: ut,
    VContainer: ft,
    VRow: gt,
    VCol: pt,
    VcsHelp: Ye,
    VcsFormSection: Je,
    VcsCoordinate: $e,
    VcsFormButton: Xe,
    VcsCheckbox: Ke,
    VcsTextField: qe,
    VcsWorkspaceWrapper: et
  },
  props: {
    featureId: {
      type: String,
      default: void 0,
      required: !1
    },
    windowState: {
      type: Object,
      default: () => ({})
    }
  },
  setup(e) {
    var x, W;
    const t = We("vcsApp"), o = t.plugins.getByKey(O), {
      activeLineOfSightFeature: i,
      collectionComponent: n,
      editorSession: l,
      lineOfSightLayer: s
    } = o, { windowState: r } = e, a = F(!1), d = F(
      ((x = l.value) == null ? void 0 : x.altitudeMode) ?? _.altitudeMode
    ), v = F(
      ((W = l.value) == null ? void 0 : W.offset) ?? _.offset
    ), y = F(), m = F(), C = F(), u = F(), {
      action: g,
      destroy: f,
      removeCachedView: b
    } = Ot(t, i);
    let h = [];
    return L(
      i,
      (c) => {
        b(), h.forEach((p) => {
          N(p);
        }), h = [], c && (h = [
          c.on("propertychange", ({ key: p }) => {
            p === "viewpoint_altitudeMode" ? u.value = c.get(p) : p === "title" ? r.headerTitle = c.get(p) : p === "viewpoint_offset" && (m.value = c.get(p));
          }),
          c.getGeometry().on("change", () => {
            const { activeMap: p } = t.maps;
            p instanceof V && c.set(
              "intersection",
              B(p, s, c)
            );
          })
        ], u.value = c.getProperty(
          "viewpoint_altitudeMode"
        ), m.value = c.get("viewpoint_offset"), y.value = ge(
          c,
          u.value
        ), C.value = Mt(c), a.value = n.collection.has(c));
      },
      { immediate: !0 }
    ), L(
      () => e.featureId,
      () => {
        var c;
        if (e.featureId && ((c = i == null ? void 0 : i.value) == null ? void 0 : c.getId()) !== e.featureId) {
          const p = s.getFeatureById(e.featureId);
          p && (i.value = p);
        }
      },
      { immediate: !0 }
    ), L(d, () => {
      var c;
      ((c = l.value) == null ? void 0 : c.type) === Q.CREATE && (l.value.altitudeMode = d.value);
    }), L(v, (c) => {
      var p;
      ((p = l.value) == null ? void 0 : p.type) === Q.CREATE && (l.value.offset = c);
    }), L(u, (c) => {
      var p;
      c && ((p = i.value) == null || p.set(
        "viewpoint_altitudeMode",
        c
      ), y.value = ge(
        i.value,
        c
      ));
    }), De(() => {
      var c;
      h.forEach((p) => {
        N(p);
      }), f(), (c = l.value) == null || c.stop();
    }), {
      isCreate: je(
        () => {
          var c;
          return ((c = l.value) == null ? void 0 : c.type) === Q.CREATE;
        }
      ),
      isPersisted: a,
      altitudeModeOnCreation: d,
      offsetOnCreation: v,
      viewpointAltitudeMode: u,
      viewpointOffset: m,
      viewpointPosition: y,
      targetPosition: C,
      headerActions: [g],
      updateViewpointAltitudeMode(c) {
        var p;
        b(), (p = i.value) == null || p.set("viewpoint_altitudeMode", c);
      },
      /** @param value Coordinate as WGS84 */
      updateViewpointPosition(c) {
        var D;
        b();
        const p = z.wgs84ToMercator(c), E = (D = i.value) == null ? void 0 : D.getGeometry(), R = E == null ? void 0 : E.getCoordinates();
        E && R && (u.value === "offset" && m.value && (p[2] += m.value), E.setCoordinates([p, R[1]]));
      },
      updateViewpointOffset(c) {
        var p;
        (p = i.value) == null || p.set(
          "viewpoint_offset",
          Number(c)
        );
      },
      /** @param value Coordinate as WGS84 */
      updateTargetPosition(c) {
        var D;
        b();
        const p = z.wgs84ToMercator(c), E = (D = i.value) == null ? void 0 : D.getGeometry(), R = E == null ? void 0 : E.getCoordinates();
        E && R && (R[1] = p, E.setCoordinates(R));
      },
      async createNewLineOfSight() {
        await o.startCreateLineOfSightSession(
          u.value,
          m.value
        );
      },
      addToMyWorkspace() {
        const c = i.value;
        c && (c.set(
          "title",
          Vt([...n.collection])
        ), n.collection.add(c), n.selection.value = [
          n.getListItemForItem(c)
        ], a.value = !0);
      },
      cancel() {
        var c;
        (c = l.value) == null || c.stop();
      },
      refresh() {
        const { activeMap: c } = t.maps, p = i.value;
        p && c instanceof V && p.set(
          "intersection",
          B(c, s, p)
        );
      }
    };
  }
}), It = (e, t) => {
  const o = e.__vccOpts || e;
  for (const [i, n] of t)
    o[i] = n;
  return o;
}, Lt = /* @__PURE__ */ k(
  "svg",
  {
    width: "46",
    height: "42",
    viewBox: "0 0 46 42",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  },
  [
    /* @__PURE__ */ k("path", {
      d: "M22 23.25c0 .189-.091.47-.473.83-.384.363-.992.736-1.827 1.07-1.665.666-4.033 1.1-6.7 1.1s-5.035-.434-6.7-1.1c-.835-.334-1.443-.707-1.827-1.07-.381-.36-.473-.641-.473-.83s.091-.47.473-.83c.384-.363.992-.736 1.827-1.07 1.665-.666 4.033-1.1 6.7-1.1s5.035.434 6.7 1.1c.835.334 1.444.707 1.827 1.07.381.36.473.641.473.83Z",
      fill: "#409D76",
      "fill-opacity": ".212",
      stroke: "#409D76",
      "stroke-width": "2"
    }),
    /* @__PURE__ */ k("path", {
      d: "m7.252 23.783-.1-.079a2.06 2.06 0 0 1-.248-2.901 10.4 10.4 0 0 0 1.95-3.946 16.2 16.2 0 0 0 .417-3.625v-.063a2.26 2.26 0 0 0-.4 1.295c-.09 1.18-1.024 2.043-2.138 2.043l-.049-.004h-.097c-1.222-.066-2.12-1.07-2.055-2.244.063-2.42 1.54-4.653 3.764-5.664a6.38 6.38 0 0 1 6.392.555l.965.69c.386.278.816.493 1.268.636l1.048.33c.939.218 1.62 1.127 1.564 2.144a2.08 2.08 0 0 1-.695 1.449c-.416.373-.96.561-1.513.535-.228-.024-.416-.036-.638-.106l-1.113-.354a8.8 8.8 0 0 1-1.963-.896v.652c0 .029.016.069.049.092a16.2 16.2 0 0 1 4.577 7.152c.34 1.176-.301 2.337-1.407 2.657a2.2 2.2 0 0 1-.652.099h-.04a2.16 2.16 0 0 1-2.016-1.418 14 14 0 0 0-1.609-3.43 16 16 0 0 1-2.21 4.042 2.27 2.27 0 0 1-1.726.806c-.465 0-.93-.147-1.325-.447M11.508 7.27c-1.685.045-3.04-1.306-3.08-2.995.043-1.712 1.438-3.05 3.113-3.023 1.722-.043 3.078 1.309 3.12 2.987l-.02.33c-.178 1.557-1.48 2.703-2.994 2.703z",
      fill: "#333"
    }),
    /* @__PURE__ */ k("path", {
      stroke: "#409D76",
      "stroke-width": "2",
      d: "m17.907 24.9 25.107 14.992"
    }),
    /* @__PURE__ */ k("path", {
      d: "m34.5 39.15 9.323 1.195-2.41-5.095",
      stroke: "#409D76",
      "stroke-width": "2",
      "stroke-linecap": "round"
    })
  ],
  -1
  /* HOISTED */
), kt = { class: "d-flex w-full justify-end px-2 pt-2 pb-1" }, Tt = { class: "px-1 py-0" }, _t = { class: "px-2 py-0" };
function Ft(e, t, o, i, n, l) {
  const s = M("v-col"), r = M("v-row"), a = M("VcsHelp"), d = M("VcsCheckbox"), v = M("VcsTextField"), y = M("v-divider"), m = M("VcsFormButton"), C = M("VcsCoordinate"), u = M("v-container"), g = M("VcsFormSection"), f = M("VcsWorkspaceWrapper"), b = M("v-sheet");
  return q(), ce(b, null, {
    default: A(() => [
      e.isCreate ? (q(), Ue(
        Pe,
        { key: 0 },
        [
          w(a, null, {
            default: A(() => [
              w(r, { "no-gutters": "" }, {
                default: A(() => [
                  w(s, {
                    cols: "2",
                    class: "pr-1 d-flex justify-center"
                  }, {
                    default: A(() => [
                      Lt
                    ]),
                    _: 1
                    /* STABLE */
                  }),
                  w(s, { class: "pl-1" }, {
                    default: A(() => [
                      k(
                        "p",
                        null,
                        Z(e.$t("lineOfSight.createHelp")),
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
            ]),
            _: 1
            /* STABLE */
          }),
          w(r, {
            "no-gutters": "",
            class: "px-1"
          }, {
            default: A(() => [
              w(s, null, {
                default: A(() => [
                  w(d, {
                    modelValue: e.altitudeModeOnCreation,
                    "onUpdate:modelValue": t[0] || (t[0] = (h) => e.altitudeModeOnCreation = h),
                    "true-value": "offset",
                    "false-value": "absolute",
                    label: "lineOfSight.hasOffset"
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
                /* STABLE */
              }),
              w(s, { cols: "3" }, {
                default: A(() => [
                  w(v, {
                    modelValue: e.offsetOnCreation,
                    "onUpdate:modelValue": t[1] || (t[1] = (h) => e.offsetOnCreation = h),
                    modelModifiers: { number: !0 },
                    type: "number",
                    unit: "m",
                    placeholder: "0"
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
                /* STABLE */
              })
            ]),
            _: 1
            /* STABLE */
          }),
          w(y),
          k("div", kt, [
            w(m, {
              tooltip: "lineOfSight.cancel",
              onClick: t[2] || (t[2] = (h) => e.cancel())
            }, {
              default: A(() => [
                ze(
                  Z(e.$t("lineOfSight.cancel")),
                  1
                  /* TEXT */
                )
              ]),
              _: 1
              /* STABLE */
            })
          ])
        ],
        64
        /* STABLE_FRAGMENT */
      )) : (q(), ce(f, {
        key: 1,
        "disable-add": e.isPersisted,
        onAddClicked: e.addToMyWorkspace,
        onNewClicked: e.createNewLineOfSight
      }, {
        secondaryButton: A(() => [
          w(m, {
            tooltip: "lineOfSight.refresh",
            variant: "filled",
            icon: "mdi-refresh",
            onClick: t[3] || (t[3] = (h) => e.refresh())
          })
        ]),
        default: A(() => [
          w(g, {
            heading: "lineOfSight.viewpoint",
            "header-actions": e.headerActions
          }, {
            default: A(() => [
              w(u, { class: "py-0 px-1" }, {
                default: A(() => [
                  w(r, { "no-gutters": "" }, {
                    default: A(() => [
                      k(
                        "span",
                        Tt,
                        Z(e.$t("lineOfSight.position")),
                        1
                        /* TEXT */
                      )
                    ]),
                    _: 1
                    /* STABLE */
                  }),
                  w(r, { "no-gutters": "" }, {
                    default: A(() => [
                      w(s, null, {
                        default: A(() => [
                          w(C, {
                            "model-value": e.viewpointPosition,
                            "onUpdate:modelValue": e.updateViewpointPosition
                          }, null, 8, ["model-value", "onUpdate:modelValue"])
                        ]),
                        _: 1
                        /* STABLE */
                      })
                    ]),
                    _: 1
                    /* STABLE */
                  }),
                  w(r, { "no-gutters": "" }, {
                    default: A(() => [
                      w(s, null, {
                        default: A(() => [
                          w(d, {
                            "model-value": e.viewpointAltitudeMode,
                            "true-value": "offset",
                            "false-value": "absolute",
                            label: "lineOfSight.hasOffset",
                            "onUpdate:modelValue": e.updateViewpointAltitudeMode
                          }, null, 8, ["model-value", "onUpdate:modelValue"])
                        ]),
                        _: 1
                        /* STABLE */
                      }),
                      w(s, { cols: "3" }, {
                        default: A(() => [
                          w(v, {
                            "model-value": e.viewpointOffset,
                            type: "number",
                            unit: "m",
                            placeholder: "0",
                            step: 0.1,
                            "onUpdate:modelValue": e.updateViewpointOffset
                          }, null, 8, ["model-value", "onUpdate:modelValue"])
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
          }, 8, ["header-actions"]),
          w(g, { heading: "lineOfSight.target" }, {
            default: A(() => [
              w(r, { "no-gutters": "" }, {
                default: A(() => [
                  k(
                    "span",
                    _t,
                    Z(e.$t("lineOfSight.position")),
                    1
                    /* TEXT */
                  )
                ]),
                _: 1
                /* STABLE */
              }),
              w(r, {
                "no-gutters": "",
                class: "px-1"
              }, {
                default: A(() => [
                  w(C, {
                    "model-value": e.targetPosition,
                    "onUpdate:modelValue": e.updateTargetPosition
                  }, null, 8, ["model-value", "onUpdate:modelValue"])
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
      }, 8, ["disable-add", "onAddClicked", "onNewClicked"]))
    ]),
    _: 1
    /* STABLE */
  });
}
const Rt = /* @__PURE__ */ It(Et, [["render", Ft]]), Ae = "$vcsViewshed360", Gt = "tools/lineofsightTool.html";
function Se(e, t, o) {
  return {
    id: t,
    component: Rt,
    props: {
      featureId: o == null ? void 0 : o.getId()
    },
    parentId: "category-manager",
    slot: tt.DYNAMIC_LEFT,
    state: {
      headerTitle: (o == null ? void 0 : o.get("title")) ?? "lineOfSight.create",
      headerIcon: Ae,
      infoUrlCallback: e.getHelpUrlCallback(Gt)
    }
  };
}
function re(e, t, o) {
  const i = t.getEditorWindowId(o);
  e.windowManager.has(i) || (e.windowManager.add(
    Se(e, i, o),
    O
  ), o && t.collection.has(o) && (t.selection.value = [
    t.getListItemForItem(o)
  ]));
}
function Nt(e, t) {
  const { activeLineOfSightFeature: o, collectionComponent: i, editorSession: n } = t, l = i.getEditorWindowId(
    o.value
  ), s = {
    type: ot.SINGLE,
    action: K({
      name: O,
      title: "lineOfSight.lineOfSight",
      icon: Ae,
      active: !!o.value,
      background: !e.windowManager.has(l),
      disabled: !(e.maps.activeMap instanceof V),
      async callback() {
        var d;
        this.active ? this.background && o.value ? re(
          e,
          i,
          o.value
        ) : (o.value = void 0, (d = n.value) == null || d.stop(), i.selection.value = [], e.windowManager.remove(l)) : await t.startCreateLineOfSightSession(
          _.altitudeMode
        );
      }
    })
  }, r = L(
    [t.editorSession, t.activeLineOfSightFeature],
    () => {
      s.action.active = !!(t.activeLineOfSightFeature.value || t.editorSession.value);
    }
  ), a = [
    e.maps.mapActivated.addEventListener((d) => {
      s.action.disabled = !(d instanceof V);
    }),
    e.windowManager.added.addEventListener(({ id: d }) => {
      d === l && (s.action.background = !1);
    }),
    e.windowManager.removed.addEventListener(({ id: d }) => {
      d === l && (s.action.background = !0);
    })
  ];
  return {
    destroy() {
      r(), a.forEach((d) => {
        d();
      });
    },
    toolbox: s
  };
}
function Bt(e, t) {
  const { toolbox: o, destroy: i } = Nt(e, t), n = e.toolboxManager.add(o, O).id;
  return () => {
    e.toolboxManager.remove(n), i();
  };
}
async function Wt(e, t, o, i) {
  if (!(e.maps.activeMap instanceof V))
    throw new Error("Create LineOfSight session only works for Cesium map");
  const { activeLineOfSightFeature: n, collectionComponent: l, lineOfSightLayer: s } = t, r = l.getEditorWindowId(
    n.value
  );
  e.windowManager.remove(r), n.value = void 0, await He();
  const a = new te(), d = new Ct(o, i);
  let v = () => {
  };
  const y = e.maps.eventHandler.addExclusiveInteraction(
    d,
    () => {
      v();
    }
  ), m = s.stateChanged.addEventListener(
    (f) => {
      f === se.INACTIVE && v();
    }
  );
  e.maps.target && (e.maps.target.style.cursor = le.select);
  const C = () => {
    y(), d.destroy(), e.maps.target && (e.maps.target.style.cursor = le.auto);
  };
  let u = () => {
  }, g;
  return v = () => {
    u(), C(), m(), g && (s.removeFeaturesById([g.getId()]), g.dispose(), g = void 0), t.editorSession.value = void 0, e.windowManager.remove(
      l.getEditorWindowId(n.value)
    ), a.raiseEvent();
  }, u = L(n, () => {
    v();
  }), d.viewpointSet.addEventListener((f) => {
    f.setStyle(ae), s.addFeatures([f]), g = f;
  }), d.finished.addEventListener((f) => {
    n.value = f, g = void 0, e.maps.activeMap instanceof V && f.set(
      "intersection",
      B(
        e.maps.activeMap,
        s,
        f
      )
    ), C(), v(), re(
      e,
      l,
      n.value
    );
  }), {
    type: Q.CREATE,
    set altitudeMode(f) {
      d.viewpointAltitudeMode = f;
    },
    get altitudeMode() {
      return d.viewpointAltitudeMode;
    },
    set offset(f) {
      d.offset = f;
    },
    get offset() {
      return d.offset;
    },
    stopped: a,
    stop() {
      v();
    }
  };
}
class ne extends _e {
  static get className() {
    return "LineOfSightCategory";
  }
  // eslint-disable-next-line class-methods-use-this
  _serializeItem(t) {
    return Fe(t, {
      asObject: !0,
      writeId: !0
    });
  }
  // eslint-disable-next-line class-methods-use-this
  _deserializeItem(t) {
    const [o] = Re(t).features;
    return $(o) ? Promise.resolve(o) : Promise.reject(new Error("could not deserialize item"));
  }
}
const X = {
  visible: "$vcsCheckboxChecked",
  indeterminate: "$vcsCheckboxIndeterminate",
  hidden: "$vcsCheckbox"
};
function pe(e) {
  const { hiddenObjects: t } = e.featureVisibility, o = e.getFeatures(), i = o.filter(
    (n) => t[n.getId()]
  );
  return i.length === o.length ? "hidden" : i.length === 0 ? "visible" : "indeterminate";
}
function Dt(e, t, o) {
  function i() {
    return o.featureVisibility.hiddenObjects[e.getId()] ? "hidden" : "visible";
  }
  let n = i();
  const l = K({
    name: "visibilityAction",
    icon: X[n],
    callback() {
      n === "visible" ? o.featureVisibility.hideObjects([e.getId()]) : (o.featureVisibility.showObjects([e.getId()]), t.maps.activeMap instanceof V && e.set(
        "intersection",
        B(t.maps.activeMap, o, e)
      ));
    }
  }), s = o.featureVisibility.changed.addEventListener(
    (r) => {
      (r.action === Y.HIDE || r.action === Y.SHOW) && r.ids.some((a) => a === e.getId()) && (n = i(), l.icon = X[n]);
    }
  );
  return {
    action: l,
    destroy() {
      s();
    }
  };
}
function jt(e, t) {
  let o = pe(t);
  const i = K({
    name: "globalVisibilityAction",
    icon: X[o],
    callback() {
      if (o === "visible")
        t.featureVisibility.hideObjects(
          t.getFeatures().map((a) => a.getId())
        );
      else {
        t.featureVisibility.clearHiddenObjects();
        const { activeMap: a } = e.maps;
        a instanceof V && t.getFeatures().forEach((d) => {
          d.set(
            "intersection",
            B(a, t, d)
          );
        });
      }
    }
  });
  function n() {
    o = pe(t), i.icon = X[o];
  }
  const l = t.featureVisibility.changed.addEventListener(
    (a) => {
      (a.action === Y.HIDE || a.action === Y.SHOW) && n();
    }
  ), s = t.stateChanged.addEventListener(
    (a) => {
      a === se.ACTIVE ? i.disabled = !1 : i.disabled = !0;
    }
  ), r = [
    t.source.on("addfeature", n),
    t.source.on("removefeature", n)
  ];
  return {
    action: {
      action: i,
      owner: O
    },
    destroy() {
      l(), r.forEach((a) => {
        N(a);
      }), s();
    }
  };
}
async function Ut(e, t) {
  const o = t.lineOfSightLayer, { collectionComponent: i } = await e.categoryManager.requestCategory(
    {
      type: ne.className,
      name: "LineOfSight",
      title: "lineOfSight.linesOfSight",
      keyProperty: "id_"
    },
    O,
    {
      selectable: !0,
      renamable: !0,
      removable: !0
    }
  ), { collection: n } = i;
  i.addItemMapping({
    mappingFunction: it(
      [V.className],
      e.maps
    ),
    owner: O
  });
  const l = (u, g, f) => {
    const b = u.getProperties();
    f.title = b.title, f.titleChanged = (c) => {
      u.set("title", c), f.title = c;
    };
    const { action: h, destroy: x } = Dt(
      u,
      e,
      o
    ), W = ct(
      { name: "lineOfSight.zoomTo" },
      u,
      e.maps
    );
    W && f.actions.push(W), f.actions.push(h), f.destroyFunctions.push(x);
  };
  e.categoryManager.addMappingFunction(
    () => !0,
    l,
    O,
    [i.id]
  );
  const { action: s, destroy: r } = nt(
    i.selection,
    () => {
      const u = i.selection.value.map((f) => i.collection.getByKey(f.name)).filter((f) => !!f), g = Ge({ features: u }, { prettyPrint: !0 });
      typeof g == "string" && st(g, "linesOfSight.json");
    },
    O
  ), { action: a, destroy: d } = at(
    async (u) => {
      const g = [], f = o.getSource().on("addfeature", ({ feature: h }) => {
        g.push(h);
      }), b = await rt(u, e, o, {
        predicate: $
      });
      return b && g.forEach((h) => {
        o.getFeatureById(h.getId()) && (t.collectionComponent.collection.add(
          h
        ), e.maps.activeMap instanceof V && h.set(
          "intersection",
          B(
            e.maps.activeMap,
            o,
            h
          )
        ));
      }), N(f), b;
    },
    e.windowManager,
    O,
    "category-manager"
  ), { action: v, destroy: y } = jt(e, o);
  i.addActions([
    s,
    a,
    v
  ]);
  const m = lt(
    e,
    i,
    {
      editor: (u) => Se(
        e,
        i.getEditorWindowId(u),
        u
      )
    }
  ), C = [
    n.added.addEventListener((u) => {
      $(u) ? o.getFeatureById(u.getId()) || o.addFeatures([u]) : (ve(O).error("Found invalid feature in collection, removing"), n.remove(u));
    }),
    n.removed.addEventListener((u) => {
      o.removeFeaturesById([u.getId()]);
    })
  ];
  return {
    collectionComponent: m,
    destroy() {
      r(), d(), y(), C.forEach((u) => {
        u();
      });
    }
  };
}
function Jt() {
  let e, t, o, i = oe();
  const n = oe();
  let l = () => {
  };
  return {
    get name() {
      return O;
    },
    get version() {
      return vt;
    },
    get mapVersion() {
      return mt;
    },
    get activeLineOfSightFeature() {
      return i;
    },
    get lineOfSightLayer() {
      if (!o)
        throw new Error("line-of-sight plugin not yet initialized");
      return o;
    },
    get editorSession() {
      return n;
    },
    get collectionComponent() {
      if (!e)
        throw new Error("line-of-sight plugin not yet initialized");
      return e;
    },
    async initialize(s, r) {
      t = s;
      const a = await At(t);
      o = a.layer, t.categoryClassRegistry.registerClass(
        String(this[Ne]),
        ne.className,
        ne
      );
      const d = await Ut(t, this);
      ({ collectionComponent: e } = d);
      const v = St(
        t,
        e,
        o
      );
      ({ activeLineOfSightFeature: i } = v);
      const y = Bt(t, this);
      let m;
      function C(g) {
        if (g instanceof V && (r != null && r.c) && o && i) {
          const f = r.o ? "offset" : "absolute", b = r.o || _.offset, h = he(
            r.c,
            f,
            b
          );
          r.i && h.set("intersection", r.i), o.addFeatures([h]), h != null && h.getId() && (i.value = o.getFeatureById(
            h.getId()
          ), h.setStyle(ae));
        }
      }
      const { activeMap: u } = s.maps;
      u ? C(u) : r != null && r.c && (m = s.maps.mapActivated.addEventListener(
        (g) => {
          var f;
          (f = n.value) == null || f.stop(), C(g), m == null || m();
        }
      )), l = () => {
        var g;
        v.destroy(), (g = n.value) == null || g.stop(), d.destroy(), y(), a.destroy(), m == null || m();
      };
    },
    async startCreateLineOfSightSession(s, r) {
      if (t && e)
        n.value = await Wt(
          t,
          this,
          s,
          r
        ), re(t, e);
      else
        throw new Error("line-of-sight plugin not yet initialized");
    },
    getState() {
      const s = {}, r = i == null ? void 0 : i.value;
      return r && (s.c = r.getGeometry().getCoordinates(), r.get("viewpoint_altitudeMode") === "offset" && (s.o = r.get("viewpoint_offset")), r.get("intersection") && (s.i = r.get("intersection"))), s;
    },
    destroy() {
      l();
    },
    i18n: {
      en: {
        lineOfSight: {
          lineOfSight: "Create line of sight",
          linesOfSight: "Lines of sight",
          create: "Create line of sight",
          temporary: "Temporary line of sight",
          viewpoint: "Viewpoint",
          target: "Target",
          new: "New",
          addToMyWorkspace: "Add to My Workspace",
          jumpToViewpoint: "Jump to viewpoint",
          returnToViewpoint: "Return to previous viewpoint",
          cancel: "Cancel",
          absolute: "Absolute",
          offset: "Offset",
          zoomTo: "Zoom to item",
          createHelp: "Click the map twice: First click places the origin (viewpoint), second click defines the target position that sets the viewing direction.",
          hasOffset: "Add observer offset",
          position: "Position",
          refresh: "Recalculate intersection"
        }
      },
      de: {
        lineOfSight: {
          lineOfSight: "Sichtachse erstellen",
          linesOfSight: "Sichtachsen",
          create: "Erzeuge Sichtachse",
          temporary: "Temporäre Sichtachse",
          viewpoint: "Standpunkt",
          target: "Ziel",
          new: "Neu",
          addToMyWorkspace: "Zu Mein Arbeitsbereich hinzufügen",
          jumpToViewpoint: "Zu Standpunkt springen",
          returnToViewpoint: "Zu vorherigem Standpunkt zurück springen",
          cancel: "Abbrechen",
          absolute: "Absolut",
          offset: "Versatz",
          zoomTo: "Auf Element zoomen",
          createHelp: "Klicken Sie zweimal in die Karte: Der erste Klick setzt den Ursprung (Standpunkt), der zweite Klick definiert die Zielposition, die die Blickrichtung festlegt.",
          hasOffset: "Beobachter-Versatz hinzufügen",
          position: "Position",
          refresh: "Schnittpunkt neu berechnen"
        }
      }
    }
  };
}
export {
  Jt as default
};
