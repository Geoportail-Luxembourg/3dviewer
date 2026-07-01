
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
} await loadCss('data:text/css;base64,W2RhdGEtdi1jYTRlOTEzNF0gLnZjcy10ZXh0LWZpZWxkIGlucHV0LFtkYXRhLXYtZjg1NGVkZDVdIC52Y3MtdGV4dC1maWVsZCBpbnB1dCxbZGF0YS12LTk4YWQyZWE3XSAudmNzLXRleHQtZmllbGQgaW5wdXR7dGV4dC1hbGlnbjpyaWdodH0K');var ge = Object.defineProperty;
var ve = (e, i, t) => i in e ? ge(e, i, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[i] = t;
var d = (e, i, t) => ve(e, typeof i != "symbol" ? i + "" : i, t);
import { categoryManagerWindowId as J, WindowSlot as ae, ToolboxType as be, getPluginAssetUrl as xe, VcsFormSection as ne, VcsSlider as we, VcsCheckbox as _e, VcsLabel as oe, VcsTextField as se, VcsHelp as re, createSupportedMapMappingFunction as Te, VcsExtent as Be, setupExtentComponentActions as ze, NotificationType as Y, callSafeAction as Me, VcsWorkspaceWrapper as Se, downloadText as Ve, makeEditorCollectionComponentClass as Ce, createListImportAction as De, createListExportAction as Oe } from "../../../assets/ui.js";
import { shallowRef as O, reactive as j, watch as T, ref as q, defineComponent as U, inject as $, computed as ee, resolveComponent as h, openBlock as C, createBlock as D, withCtx as l, createVNode as o, createTextVNode as M, toDisplayString as S, onMounted as Ee, onUnmounted as Pe, createCommentVNode as K } from "../../../assets/vue.js";
import { getDefaultProjection as $e, CesiumMap as F, Extent as R, wgs84Projection as X, AbstractInteraction as ke, EventType as P, ClippingObject as Ne, Projection as H, mercatorProjection as Ie, cartesianToMercator as je, DataSourceLayer as Fe, markVolatile as Le, Category as Ae, Viewpoint as We, parseGeoJSON as Re, writeGeoJSON as Ue } from "../../../assets/core.js";
import { Feature as Ge, ol$geom$Polygon as Ke, ol$extent$isEmpty as He } from "../../../assets/ol.js";
import { Color as W, NearFarScalar as Je, Rectangle as L, Matrix4 as le, Cartesian3 as f, ImageMaterialProperty as Ye, Cartesian2 as E, Cartographic as qe, Entity as k, CallbackProperty as w, Plane as N, JulianDate as Xe, ClippingPlaneCollection as Ze, ClippingPlane as I, Ellipsoid as Qe } from "../../../assets/cesium.js";
import { VSwitch as ce, VRow as pe, VCol as ue, VSheet as te, VDivider as de } from "../../../assets/vuetify.js";
const z = "@vcmap/transparent-terrain", et = "3.0.0", tt = "^6.2";
var m = /* @__PURE__ */ ((e) => (e.Box = "Box", e.Rectangle = "Rectangle", e.Global = "Global", e))(m || {});
class he {
  constructor(i) {
    d(this, "app");
    d(this, "type");
    d(this, "_initialized");
    d(this, "_active");
    d(this, "projection");
    d(this, "name");
    d(this, "isPersistent");
    this.app = i, this.type = void 0, this._initialized = !1, this._active = !1, this.name = O(void 0), this.isPersistent = O(!1), this.projection = $e();
  }
  initialize() {
    this._initialized || (this._initialized = !0);
  }
  activate() {
    this._active || (this.initialize(), this._active = !0);
  }
  serialize() {
    const i = new Ge();
    return i.setGeometry(new Ke([])), i.set("name", this.name.value), i.set("type", this.type), i;
  }
  deserialize(i) {
    this.name.value = i.get("name");
  }
  deactivate() {
    this._active = !1;
  }
}
const me = {
  [m.Box]: "$vcsTerrainBox",
  [m.Rectangle]: "$vcsTransparentTerrain",
  [m.Global]: "$vcsGlobalTerrain"
};
function it(e, i, t, a) {
  const n = (r) => ({
    name: r,
    title: `transparentTerrain.create.tooltip.${r}`,
    icon: me[r]
  }), s = j({
    name: "creation",
    currentIndex: 0,
    active: !1,
    background: !1,
    callback() {
      this.active ? this.background ? e.windowManager.add(
        {
          ...a,
          id: t,
          parentId: J,
          slot: ae.DYNAMIC_CHILD
        },
        z
      ) : i.stop() : i.startNew(this.tools[this.currentIndex].name);
    },
    selected(r) {
      this.currentIndex = r, i.startNew(this.tools[this.currentIndex].name);
    },
    tools: [
      n(m.Box),
      n(m.Rectangle),
      n(m.Global)
    ]
  }), p = e.toolboxManager.add(
    {
      type: be.SELECT,
      action: s
    },
    z
  ).id, u = T(i.currentMode, () => {
    const r = i.currentMode.value;
    if (s.active = !!r, s.active) {
      const y = r.type, _ = s.tools.findIndex((v) => v.name === String(y));
      _ >= 0 && s.currentIndex !== _ && (s.currentIndex = _);
    }
  }), c = [
    e.maps.mapActivated.addEventListener((r) => {
      r instanceof F || e.windowManager.has(t) && e.windowManager.remove(t), s.disabled = !(r instanceof F);
    }),
    e.windowManager.added.addEventListener(({ id: r }) => {
      r === t && (s.background = !1);
    }),
    e.windowManager.removed.addEventListener(({ id: r }) => {
      r === t && (s.background = !0);
    })
  ];
  return () => {
    u(), c.forEach((r) => {
      r();
    }), e.toolboxManager.remove(p);
  };
}
class B extends he {
  constructor(t) {
    super(t);
    d(this, "opacity");
    d(this, "useOpacityByDistance");
    d(this, "opacityByDistance");
    d(this, "collision");
    // eslint-disable-next-line class-methods-use-this
    d(this, "_opacityWatcher", () => {
    });
    // eslint-disable-next-line class-methods-use-this
    d(this, "_useOpacityByDistanceWatcher", () => {
    });
    // eslint-disable-next-line class-methods-use-this
    d(this, "_opacityByDistanceWatcher", () => {
    });
    // eslint-disable-next-line class-methods-use-this
    d(this, "_collisionWatcher", () => {
    });
    this.type = m.Global, this.opacity = O(B.getDefaultOptions().opacity), this.useOpacityByDistance = O(
      B.getDefaultOptions().useOpacityByDistance
    ), this.opacityByDistance = j(
      B.getDefaultOptions().opacityByDistance
    ), this.collision = O(
      B.getDefaultOptions().collision
    );
  }
  static getDefaultOptions() {
    return {
      opacity: 50,
      useOpacityByDistance: !1,
      opacityByDistance: {
        near: 200,
        nearValue: 50,
        far: 2e3,
        farValue: 100
      },
      collision: !1
    };
  }
  initialize() {
    this._initialized || (super.initialize(), this.app.maps.activeMap.getScene().globe.undergroundColor = W.WHITE, this.app.maps.activeMap.getScene().screenSpaceCameraController.enableCollisionDetection = this.collision.value);
  }
  activate() {
    this._active || (super.activate(), this.app.maps.activeMap.getScene().globe.translucency.enabled = !0, this._opacityWatcher = T(
      this.opacity,
      this.applyOpacitySettings.bind(this)
    ), this._useOpacityByDistanceWatcher = T(
      this.useOpacityByDistance,
      this.applyOpacitySettings.bind(this)
    ), this._opacityByDistanceWatcher = T(
      this.opacityByDistance,
      this.applyOpacitySettings.bind(this)
    ), this._collisionWatcher = T(this.collision, () => {
      this.app.maps.activeMap.getScene().screenSpaceCameraController.enableCollisionDetection = this.collision.value;
    }), this.applyOpacitySettings());
  }
  applyOpacitySettings() {
    this.useOpacityByDistance.value ? (this.app.maps.activeMap.getScene().globe.translucency.frontFaceAlphaByDistance = new Je(
      this.opacityByDistance.near,
      this.opacityByDistance.nearValue / 100,
      this.opacityByDistance.far,
      this.opacityByDistance.farValue / 100
    ), this.app.maps.activeMap.getScene().globe.translucency.frontFaceAlpha = 1) : (this.app.maps.activeMap.getScene().globe.translucency.frontFaceAlphaByDistance = void 0, this.app.maps.activeMap.getScene().globe.translucency.frontFaceAlpha = this.opacity.value / 100);
  }
  serialize() {
    const t = super.serialize();
    return t.set("opacity", this.opacity.value), t.set("useOpacityByDistance", this.useOpacityByDistance.value), t.set("opacityByDistance", this.opacityByDistance), t.set("collision", this.collision.value), t;
  }
  deserialize(t) {
    super.deserialize(t), this.opacity.value = t.get("opacity") || B.getDefaultOptions().opacity, this.useOpacityByDistance.value = t.get("useOpacityByDistance") || B.getDefaultOptions().useOpacityByDistance, this.opacityByDistance = j(
      t.get("opacityByDistance") || B.getDefaultOptions().opacityByDistance
    ), this.collision.value = t.get("collision") || B.getDefaultOptions().collision;
  }
  deactivate() {
    this._active && (super.deactivate(), this._opacityWatcher(), this._useOpacityByDistanceWatcher(), this._opacityByDistanceWatcher(), this._collisionWatcher(), this.app.maps.activeMap instanceof F && (this.app.maps.activeMap.getScene().globe.translucency.enabled = !1));
  }
}
class Z extends B {
  constructor(t) {
    super(t);
    d(this, "_extent");
    this.type = m.Rectangle, this._extent = void 0;
  }
  // eslint-disable-next-line class-methods-use-this
  get defaultExtent() {
    return [-180, -90, 180, 90];
  }
  extentNotEqual() {
    return this._extent ? this._extent.length !== this.defaultExtent.length || !this._extent.every(
      (t, a) => t === this.defaultExtent[a]
    ) : !0;
  }
  initialize() {
    this._initialized || (super.initialize(), this._extent || (this._extent = this.defaultExtent));
  }
  activate() {
    this._active || (super.activate(), this.extentNotEqual() ? this.app.maps.activeMap.getScene().globe.translucency.rectangle = L.fromDegrees(
      ...this._extent
    ) : this.app.maps.activeMap.getScene().globe.translucency.rectangle = L.fromDegrees());
  }
  getExtent() {
    return new R({
      projection: X.toJSON(),
      coordinates: this._extent
    });
  }
  getDefaultExtent() {
    return new R({
      projection: X.toJSON(),
      coordinates: this.defaultExtent
    });
  }
  updateExtent(t) {
    t && (this._extent = t.extent, this.app.maps.activeMap.getScene().globe.translucency.rectangle = L.fromDegrees(
      ...this._extent
    ));
  }
  serialize() {
    const t = super.serialize();
    return t.set("_extent", this._extent), t;
  }
  deserialize(t) {
    super.deserialize(t), this._extent = t.get("_extent");
  }
  deactivate() {
    this._active && (super.deactivate(), this.app.maps.activeMap instanceof F && (this.app.maps.activeMap.getScene().globe.translucency.rectangle = L.fromDegrees(...this.defaultExtent)));
  }
}
class at extends ke {
  constructor(t) {
    super(P.CLICKMOVE);
    d(this, "_cb");
    d(this, "paused");
    this._cb = t, this.paused = !1, this.setActive();
  }
  pipe(t) {
    return t.type & P.MOVE ? t.position && !t.position.every((a) => a === 0) && this._cb(t.position) : t.type & P.CLICK && (this.paused ? t.feature && t.feature.getId().startsWith("transparentTerrainBox") && (this.paused = !1, this.setActive(P.CLICKMOVE)) : (this.paused = !0, this.setActive(P.CLICK))), Promise.resolve(t);
  }
}
let A = new le();
class Q extends he {
  constructor(t) {
    super(t);
    d(this, "_material");
    d(this, "_clippingObject");
    d(this, "_entities");
    d(this, "layer");
    d(this, "position");
    d(this, "projectPosition");
    d(this, "boxSize");
    d(this, "showTexture");
    // eslint-disable-next-line class-methods-use-this
    d(this, "_removeInteraction", () => {
    });
    d(this, "_interaction");
    this.type = m.Box, this._material = void 0, this._clippingObject = void 0, this._entities = [], this.position = new f(), this.projectPosition = q(new f()), this.boxSize = new f(100, 100, 50), this.showTexture = !0, this._interaction = new at(
      this.translatePosition.bind(this)
    );
  }
  initialize() {
    this._initialized || (super.initialize(), this._material = new Ye({
      image: xe(this.app, z, "plugin-assets/dirt_0.png"),
      repeat: new E(
        Math.ceil(this.boxSize.x / 20),
        Math.ceil(this.boxSize.y / 20)
      )
    }));
  }
  activate() {
    if (!this._active) {
      if (super.activate(), this._clippingObject || (this._clippingObject = new Ne({ terrain: !0 })), this.position.equals(new f())) {
        const a = this.app.maps.activeMap.getScene().camera.positionCartographic.clone();
        a.height = 0, this.position = qe.toCartesian(
          a,
          this.app.maps.activeMap.getScene().globe.ellipsoid,
          this.position
        );
      }
      this.projectPosition.value = this.getProjectPosition(), this.initClippingPlanes();
      const { eventHandler: t } = this.app.maps;
      this._removeInteraction = t.addExclusiveInteraction(
        this._interaction,
        () => {
        }
      ), this.app.maps.clippingObjectManager.setExclusiveClippingObjects(
        [this._clippingObject],
        () => {
          this.deactivate();
        }
      );
    }
  }
  initClippingPlanes() {
    const t = new k({
      id: "transparentTerrainBox_bottom",
      // eslint-disable-next-line
      // @ts-ignore
      position: new w(() => this.position, !1),
      plane: {
        plane: new w(() => new N(f.UNIT_Z, this.boxSize.z / 2), !1),
        dimensions: new w(() => new E(this.boxSize.x, this.boxSize.y), !1),
        material: this._material
      }
    }), a = new k({
      id: "transparentTerrainBox_wall1",
      // eslint-disable-next-line
      // @ts-ignore
      position: new w(() => this.position, !1),
      plane: {
        plane: new w(() => new N(f.UNIT_Y, this.boxSize.y / 2), !1),
        dimensions: new w(() => new E(this.boxSize.x, this.boxSize.z), !1),
        material: this._material
      }
    }), n = new k({
      id: "transparentTerrainBox_wall2",
      // eslint-disable-next-line
      // @ts-ignore
      position: new w(() => this.position, !1),
      plane: {
        plane: new w(() => new N(f.UNIT_Y, -this.boxSize.y / 2), !1),
        dimensions: new w(() => new E(this.boxSize.x, this.boxSize.z), !1),
        material: this._material
      }
    }), s = new k({
      id: "transparentTerrainBox_wall3",
      // eslint-disable-next-line
      // @ts-ignore
      position: new w(() => this.position, !1),
      plane: {
        plane: new w(() => new N(f.UNIT_X, this.boxSize.x / 2), !1),
        dimensions: new w(() => new E(this.boxSize.y, this.boxSize.z), !1),
        material: this._material
      }
    }), p = new k({
      id: "transparentTerrainBox_wall4",
      // eslint-disable-next-line
      // @ts-ignore
      position: new w(() => this.position, !1),
      plane: {
        plane: new w(() => new N(f.UNIT_X, -this.boxSize.x / 2), !1),
        dimensions: new w(() => new E(this.boxSize.y, this.boxSize.z), !1),
        material: this._material
      }
    });
    this._entities = [t, a, n, s, p], this._entities.forEach((u) => {
      var c;
      return (c = this.layer) == null ? void 0 : c.addEntity(u);
    }), A = t.computeModelMatrix(Xe.now()), this.updateClippingPlaner();
  }
  updateClippingPlaner() {
    this._entities.forEach((s) => {
      s.plane.material.color = this.showTexture ? W.WHITE : W.BLACK;
    });
    const t = this.boxSize.x / 2, a = this.boxSize.y / 2, n = Math.abs(this.boxSize.z);
    this._clippingObject.clippingPlaneCollection = new Ze(
      {
        modelMatrix: A,
        planes: [
          new I(new f(1, 0, 0), -t),
          new I(new f(-1, 0, 0), -t),
          new I(new f(0, 1, 0), -a),
          new I(new f(0, -1, 0), -a),
          new I(new f(0, 0, -1), -n)
        ],
        edgeWidth: 1,
        edgeColor: W.WHITE,
        enabled: !0
      }
    );
  }
  updateBox(t, a, n) {
    f.clone(t, this.boxSize), this.showTexture = n;
    const s = H.transform(
      X,
      this.projection,
      [a.x, a.y, a.z]
    );
    this.updatePosition(s);
  }
  getProjectPosition() {
    const t = f.fromArray(
      H.transform(
        this.projection,
        Ie,
        je(this.position)
      )
    );
    return t.z += this.boxSize.z / 2, t;
  }
  updatePosition(t) {
    const [a, n, s] = t;
    this.position = f.fromDegrees(
      a,
      n,
      s - this.boxSize.z / 2,
      Qe.WGS84,
      this.position
    ), le.setTranslation(A, this.position, A), this.updateClippingPlaner();
  }
  translatePosition(t) {
    this.updatePosition(H.mercatorToWgs84(t, !1)), this.projectPosition.value = this.getProjectPosition();
  }
  serialize() {
    const t = super.serialize();
    return t.set("position", [
      this.position.x,
      this.position.y,
      this.position.z
    ]), t.set("boxSize", [this.boxSize.x, this.boxSize.y, this.boxSize.z]), t.set("showTexture", this.showTexture), t;
  }
  deserialize(t) {
    super.deserialize(t), this.position = f.fromArray(t.get("position")), this.boxSize = f.fromArray(t.get("boxSize")), this.showTexture = !!t.get("showTexture"), this._interaction.paused = !0, this._interaction.setActive(P.CLICK);
  }
  deactivate() {
    this._active && (super.deactivate(), this._removeInteraction(), this._entities.forEach(
      (t) => {
        var a;
        return (a = this.layer) == null ? void 0 : a.removeEntityById(t.id);
      }
    ), this.app.maps.clippingObjectManager.clearExclusiveClippingObjects(!0), this._clippingObject = void 0);
  }
}
class nt {
  constructor(i) {
    d(this, "app");
    d(this, "_boxLayer");
    d(this, "currentMode");
    this.app = i, this._boxLayer = void 0, this.currentMode = O(void 0);
  }
  initializeBoxLayer() {
    this._boxLayer = new Fe({
      name: "_boxTransparentTerrainLayer"
    }), Le(this._boxLayer), this.app.layers.add(this._boxLayer), this._boxLayer.activate().catch(() => {
    });
  }
  start(i) {
    i && i !== this.currentMode.value && (this.currentMode.value && this.currentMode.value.deactivate(), this.currentMode.value = i), this.currentMode.value && this.currentMode.value.activate();
  }
  startNew(i) {
    this.currentMode.value && this.currentMode.value.deactivate(), this.currentMode.value = this.create(i), this.start(void 0);
  }
  create(i) {
    let t;
    return i === m.Box ? (this._boxLayer || this.initializeBoxLayer(), t = new Q(this.app), t.layer = this._boxLayer) : i === m.Global ? t = new B(this.app) : i === m.Rectangle && (t = new Z(this.app)), t;
  }
  createFromFeature(i) {
    const t = this.create(i.get("type"));
    return t && t.deserialize(i), t;
  }
  stop() {
    this.currentMode.value && (this.currentMode.value.deactivate(), this.currentMode.value = void 0);
  }
}
const ot = U({
  name: "GlobalTerrainComponent",
  components: {
    VcsFormSection: ne,
    VSwitch: ce,
    VcsSlider: we,
    VcsCheckbox: _e,
    VcsLabel: oe,
    VRow: pe,
    VCol: ue,
    VSheet: te,
    VcsTextField: se
  },
  setup() {
    const i = $("manager").currentMode.value, { collision: t, opacity: a, opacityByDistance: n, useOpacityByDistance: s } = i;
    return {
      moveCameraUnderTerrain: ee({
        get() {
          return !t.value;
        },
        set(u) {
          t.value = !u;
        }
      }),
      opacity: a,
      opacityByDistance: n,
      useOpacityByDistance: s
    };
  }
}), G = (e, i) => {
  const t = e.__vccOpts || e;
  for (const [a, n] of i)
    t[a] = n;
  return t;
};
function st(e, i, t, a, n, s) {
  const p = h("VcsCheckbox"), u = h("v-row"), c = h("VcsLabel"), r = h("v-col"), y = h("vcs-slider"), _ = h("v-switch"), v = h("VcsTextField"), V = h("VcsFormSection"), b = h("v-sheet");
  return C(), D(b, { class: "hide-scrollbar" }, {
    default: l(() => [
      o(u, {
        "no-gutters": "",
        class: "py-0 px-1"
      }, {
        default: l(() => [
          o(p, {
            modelValue: e.moveCameraUnderTerrain,
            "onUpdate:modelValue": i[0] || (i[0] = (x) => e.moveCameraUnderTerrain = x),
            label: e.$t("transparentTerrain.settings.global.camera")
          }, null, 8, ["modelValue", "label"])
        ]),
        _: 1
        /* STABLE */
      }),
      o(u, {
        "no-gutters": "",
        class: "py-0 px-1"
      }, {
        default: l(() => [
          o(r, null, {
            default: l(() => [
              o(c, null, {
                default: l(() => [
                  M(
                    S(e.$t("transparentTerrain.settings.global.opacity")),
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
          o(r, { class: "d-flex justify-end" }, {
            default: l(() => [
              o(c, null, {
                default: l(() => [
                  M(
                    S(e.opacity) + " % ",
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
      o(u, {
        "no-gutters": "",
        class: "py-0 px-1"
      }, {
        default: l(() => [
          o(y, {
            modelValue: e.opacity,
            "onUpdate:modelValue": i[1] || (i[1] = (x) => e.opacity = x),
            modelModifiers: { number: !0 },
            type: "number",
            step: "1",
            disabled: e.useOpacityByDistance
          }, null, 8, ["modelValue", "disabled"])
        ]),
        _: 1
        /* STABLE */
      }),
      o(V, {
        expandable: !0,
        heading: "transparentTerrain.settings.global.nearFar"
      }, {
        default: l(() => [
          o(u, {
            "no-gutters": "",
            class: "py-1 px-3"
          }, {
            default: l(() => [
              o(_, {
                modelValue: e.useOpacityByDistance,
                "onUpdate:modelValue": i[2] || (i[2] = (x) => e.useOpacityByDistance = x),
                label: e.$t("transparentTerrain.settings.global.distanceOpacity")
              }, null, 8, ["modelValue", "label"])
            ]),
            _: 1
            /* STABLE */
          }),
          o(u, {
            "no-gutters": "",
            class: "py-0 px-1"
          }, {
            default: l(() => [
              o(r, null, {
                default: l(() => [
                  o(c, null, {
                    default: l(() => [
                      M(
                        S(e.$t("transparentTerrain.settings.global.near")),
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
              o(r, { class: "d-flex justify-end" }, {
                default: l(() => [
                  o(v, {
                    modelValue: e.opacityByDistance.near,
                    "onUpdate:modelValue": i[3] || (i[3] = (x) => e.opacityByDistance.near = x),
                    modelModifiers: { number: !0 },
                    type: "number",
                    disabled: !e.useOpacityByDistance,
                    "hide-spin-buttons": "",
                    unit: "m"
                  }, null, 8, ["modelValue", "disabled"])
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
            class: "py-0 px-1"
          }, {
            default: l(() => [
              o(r, null, {
                default: l(() => [
                  o(c, null, {
                    default: l(() => [
                      M(
                        S(e.$t("transparentTerrain.settings.global.nearOpacity")),
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
              o(r, { class: "d-flex justify-end" }, {
                default: l(() => [
                  o(c, {
                    disabled: !e.useOpacityByDistance
                  }, {
                    default: l(() => [
                      M(
                        S(e.opacityByDistance.nearValue) + " % ",
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
          }),
          o(u, {
            "no-gutters": "",
            class: "py-0 px-1"
          }, {
            default: l(() => [
              o(y, {
                modelValue: e.opacityByDistance.nearValue,
                "onUpdate:modelValue": i[4] || (i[4] = (x) => e.opacityByDistance.nearValue = x),
                modelModifiers: { number: !0 },
                type: "number",
                step: "1",
                disabled: !e.useOpacityByDistance
              }, null, 8, ["modelValue", "disabled"])
            ]),
            _: 1
            /* STABLE */
          }),
          o(u, {
            "no-gutters": "",
            class: "py-0 px-1"
          }, {
            default: l(() => [
              o(r, null, {
                default: l(() => [
                  o(c, null, {
                    default: l(() => [
                      M(
                        S(e.$t("transparentTerrain.settings.global.far")),
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
              o(r, { class: "d-flex justify-end" }, {
                default: l(() => [
                  o(v, {
                    modelValue: e.opacityByDistance.far,
                    "onUpdate:modelValue": i[5] || (i[5] = (x) => e.opacityByDistance.far = x),
                    modelModifiers: { number: !0 },
                    type: "number",
                    disabled: !e.useOpacityByDistance,
                    "hide-spin-buttons": "",
                    unit: "m"
                  }, null, 8, ["modelValue", "disabled"])
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
            class: "py-0 px-1"
          }, {
            default: l(() => [
              o(r, null, {
                default: l(() => [
                  o(c, null, {
                    default: l(() => [
                      M(
                        S(e.$t("transparentTerrain.settings.global.farOpacity")),
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
              o(r, { class: "d-flex justify-end" }, {
                default: l(() => [
                  o(c, {
                    disabled: !e.useOpacityByDistance
                  }, {
                    default: l(() => [
                      M(
                        S(e.opacityByDistance.farValue) + " % ",
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
          }),
          o(u, {
            "no-gutters": "",
            class: "py-0 px-1"
          }, {
            default: l(() => [
              o(y, {
                modelValue: e.opacityByDistance.farValue,
                "onUpdate:modelValue": i[6] || (i[6] = (x) => e.opacityByDistance.farValue = x),
                modelModifiers: { number: !0 },
                type: "number",
                step: "1",
                disabled: !e.useOpacityByDistance
              }, null, 8, ["modelValue", "disabled"])
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
const ye = /* @__PURE__ */ G(ot, [["render", st], ["__scopeId", "data-v-ca4e9134"]]), rt = U({
  name: "BoxTerrainComponent",
  components: {
    VcsHelp: re,
    VSwitch: ce,
    VcsTextField: se,
    VcsLabel: oe,
    VRow: pe,
    VCol: ue,
    VSheet: te,
    VDivider: de
  },
  setup() {
    const i = $("manager").currentMode.value, { projectPosition: t } = i, a = j(t.value.clone()), n = j(i.boxSize.clone()), s = O(i.showTexture);
    return i && (T(t, () => {
      f.clone(t.value, a);
    }), T(a, () => {
      Number.isFinite(a.x) && Number.isFinite(a.y) && Number.isFinite(a.z) && i.updateBox(n, a, s.value);
    }), T(n, () => {
      Number.isFinite(n.x) && Number.isFinite(n.y) && Number.isFinite(n.z) && n.x > 0 && n.y > 0 && i.updateBox(n, a, s.value);
    }), T(s, () => {
      i.updateBox(n, a, s.value);
    })), {
      localBoxSize: n,
      boxPosition: a,
      showTexture: s
    };
  }
});
function lt(e, i, t, a, n, s) {
  const p = h("VcsHelp"), u = h("VcsLabel"), c = h("v-col"), r = h("v-row"), y = h("VcsTextField"), _ = h("v-divider"), v = h("v-switch"), V = h("v-sheet");
  return C(), D(V, { class: "hide-scrollbar" }, {
    default: l(() => [
      o(p, {
        text: "transparentTerrain.settings.box.hint",
        show: !0
      }),
      o(r, {
        "no-gutters": "",
        class: "py-0 px-1"
      }, {
        default: l(() => [
          o(c, null, {
            default: l(() => [
              o(u, null, {
                default: l(() => [
                  M(
                    S(e.$t("transparentTerrain.settings.geometry")),
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
      o(r, { "no-gutters": "" }, {
        default: l(() => [
          o(c, { class: "py-0 px-1" }, {
            default: l(() => [
              o(y, {
                modelValue: e.localBoxSize.x,
                "onUpdate:modelValue": i[0] || (i[0] = (b) => e.localBoxSize.x = b),
                modelModifiers: { number: !0 },
                type: "number",
                step: "10",
                prefix: e.$t("transparentTerrain.settings.length"),
                "hide-spin-buttons": "",
                unit: "m"
              }, null, 8, ["modelValue", "prefix"])
            ]),
            _: 1
            /* STABLE */
          }),
          o(c, { class: "py-0 px-1" }, {
            default: l(() => [
              o(y, {
                modelValue: e.localBoxSize.y,
                "onUpdate:modelValue": i[1] || (i[1] = (b) => e.localBoxSize.y = b),
                modelModifiers: { number: !0 },
                type: "number",
                step: "10",
                prefix: e.$t("transparentTerrain.settings.width"),
                "hide-spin-buttons": "",
                unit: "m"
              }, null, 8, ["modelValue", "prefix"])
            ]),
            _: 1
            /* STABLE */
          }),
          o(c, { class: "py-0 px-1" }, {
            default: l(() => [
              o(y, {
                modelValue: e.localBoxSize.z,
                "onUpdate:modelValue": i[2] || (i[2] = (b) => e.localBoxSize.z = b),
                modelModifiers: { number: !0 },
                type: "number",
                step: "10",
                prefix: e.$t("transparentTerrain.settings.depth"),
                "hide-spin-buttons": "",
                unit: "m"
              }, null, 8, ["modelValue", "prefix"])
            ]),
            _: 1
            /* STABLE */
          })
        ]),
        _: 1
        /* STABLE */
      }),
      o(_, { class: "mt-3" }),
      o(r, {
        "no-gutters": "",
        class: "py-0 px-1"
      }, {
        default: l(() => [
          o(c, null, {
            default: l(() => [
              o(u, null, {
                default: l(() => [
                  M(
                    S(e.$t("transparentTerrain.settings.position")),
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
      o(r, { "no-gutters": "" }, {
        default: l(() => [
          o(c, { class: "py-0 px-1" }, {
            default: l(() => [
              o(y, {
                modelValue: e.boxPosition.x,
                "onUpdate:modelValue": i[3] || (i[3] = (b) => e.boxPosition.x = b),
                modelModifiers: { number: !0 },
                type: "number",
                step: "10",
                prefix: "X",
                decimals: 2,
                unit: "m"
              }, null, 8, ["modelValue"])
            ]),
            _: 1
            /* STABLE */
          }),
          o(c, { class: "py-0 px-1" }, {
            default: l(() => [
              o(y, {
                modelValue: e.boxPosition.y,
                "onUpdate:modelValue": i[4] || (i[4] = (b) => e.boxPosition.y = b),
                modelModifiers: { number: !0 },
                type: "number",
                step: "10",
                prefix: "Y",
                decimals: 2,
                unit: "m"
              }, null, 8, ["modelValue"])
            ]),
            _: 1
            /* STABLE */
          })
        ]),
        _: 1
        /* STABLE */
      }),
      o(r, {
        "no-gutters": "",
        class: "py-1 px-3"
      }, {
        default: l(() => [
          o(v, {
            modelValue: e.showTexture,
            "onUpdate:modelValue": i[5] || (i[5] = (b) => e.showTexture = b),
            label: e.$t("transparentTerrain.settings.box.showTexture"),
            "hide-details": ""
          }, null, 8, ["modelValue", "label"])
        ]),
        _: 1
        /* STABLE */
      })
    ]),
    _: 1
    /* STABLE */
  });
}
const ct = /* @__PURE__ */ G(rt, [["render", lt], ["__scopeId", "data-v-f854edd5"]]);
function fe(e, i) {
  if (i && !e.collection.hasKey(i.name.value)) {
    if (!i.name.value) {
      let t, a = 0;
      const n = new Set(
        [...e.collection].filter((s) => s.mode.type === i.type).map((s) => s.name)
      );
      do
        a += 1, n.has(`${i.type}-${a}`) || (t = `${i.type}-${a}`);
      while (!t);
      i.name.value = t;
    }
    e.collection.add({
      name: i.name.value,
      mode: i
    }), i.isPersistent.value = !0;
  }
}
function pt(e, i, t, a) {
  t.title = e.name, t.titleChanged = (n) => {
    t.title = n, e.name = n, e.mode.name.value = n;
  }, t.actions.push({
    name: "transparentTerrain.category.zoomTo",
    disabled: !(e.mode instanceof Q) && !(e.mode instanceof Z),
    async callback() {
      var s;
      let n;
      if (e.mode instanceof Q)
        n = {
          coordinates: [
            e.mode.projectPosition.value.x - e.mode.boxSize.x / 2,
            e.mode.projectPosition.value.y - e.mode.boxSize.y / 2,
            e.mode.projectPosition.value.x + e.mode.boxSize.x / 2,
            e.mode.projectPosition.value.y + e.mode.boxSize.y / 2
          ],
          projection: e.mode.projection
        };
      else if (e.mode instanceof Z)
        n = {
          coordinates: e.mode.getExtent().extent,
          projection: e.mode.getExtent().projection
        };
      else
        return;
      if (n.coordinates && !He(n.coordinates)) {
        const p = We.createViewpointFromExtent(new R(n));
        p && (i.selection.value = [t], p.animate = !0, await ((s = a.maps.activeMap) == null ? void 0 : s.gotoViewpoint(p)));
      }
    }
  });
}
async function ut(e) {
  const i = await e.categoryManager.requestCategory(
    {
      type: Ae.className,
      name: "Transparent Terrain Category",
      title: "transparentTerrain.header.title",
      featureProperty: void 0
    },
    z,
    {
      selectable: !0,
      overflowCount: 3,
      renamable: !0,
      removable: !0
    }
  ), t = i.collectionComponent, { category: a } = i;
  return e.categoryManager.addMappingFunction(
    () => !0,
    (n, s, p) => {
      pt(n, s, p, e);
    },
    z,
    [a.name]
  ), t.addItemMapping({
    mappingFunction: Te(
      [F.className],
      e.maps
    ),
    owner: z
  }), {
    categoryUiItem: t,
    category: a,
    destroy() {
      e.categoryManager.removeOwner(z);
    }
  };
}
const dt = U({
  name: "RectangleTerrainComponent",
  components: {
    VcsHelp: re,
    VcsExtent: Be,
    VcsFormSection: ne,
    GlobalTerrainComponent: ye,
    VSheet: te,
    VDivider: de
  },
  setup() {
    const e = $("manager"), i = e.currentMode.value, { isPersistent: t } = i, a = q(i.getExtent().toJSON()), n = ee({
      get() {
        return new R(a.value);
      },
      set(V) {
        a.value = V.toJSON();
      }
    });
    T(n, () => {
      i.updateExtent(n.value);
    });
    const {
      actions: [
        s,
        p,
        u,
        c,
        r
      ],
      destroy: y,
      layer: _
    } = ze(e.app, n), v = q(p);
    return _.style.fillColor = [255, 255, 255, 0], n.value.isValid() && _.activate().catch((V) => {
      e.app.notifier.add({
        type: Y.ERROR,
        message: `Failed to activate extent layer: ${V.message}`
      });
    }), Ee(() => {
      t.value || Me(v.value);
    }), Pe(() => {
      y();
    }), {
      actions: [
        s,
        u,
        c,
        r
      ],
      isPersistent: t,
      localExtent: a,
      createExtent: v
    };
  }
});
function ht(e, i, t, a, n, s) {
  const p = h("VcsHelp"), u = h("VcsFormSection"), c = h("VcsExtent"), r = h("v-divider"), y = h("GlobalTerrainComponent"), _ = h("v-sheet");
  return C(), D(_, { class: "hide-scrollbar" }, {
    default: l(() => [
      e.createExtent.active ? (C(), D(p, {
        key: 0,
        text: "transparentTerrain.settings.rectangle.hint",
        show: !0
      })) : (C(), D(u, {
        key: 1,
        heading: "transparentTerrain.settings.modify",
        "header-actions": e.actions,
        "action-button-list-overflow-count": 5
      }, null, 8, ["header-actions"])),
      o(c, {
        modelValue: e.localExtent,
        "onUpdate:modelValue": i[0] || (i[0] = (v) => e.localExtent = v)
      }, null, 8, ["modelValue"]),
      o(r, { class: "mt-2" }),
      o(y)
    ]),
    _: 1
    /* STABLE */
  });
}
const mt = /* @__PURE__ */ G(dt, [["render", ht], ["__scopeId", "data-v-98ad2ea7"]]), yt = U({
  name: "TerrainWindow",
  components: {
    BoxTerrainComponent: ct,
    RectangleTerrainComponent: mt,
    GlobalTerrainComponent: ye,
    VcsWorkspaceWrapper: Se
  },
  props: {
    itemName: {
      type: String,
      default: void 0
    }
  },
  setup(e, { attrs: i }) {
    var r;
    const t = i["window-state"], a = $("manager"), n = $("category"), s = $("collectionComponent");
    a.start(
      (r = s.collection.getByKey(e.itemName)) == null ? void 0 : r.mode
    );
    const p = a.currentMode.value, u = p.type, c = ee(() => p.isPersistent.value);
    return T(p.name, () => {
      t.headerTitle = p.name.value;
    }), {
      terrainType: u,
      isPersistent: c,
      createNew() {
        a.startNew(p.type);
      },
      addToCategory() {
        fe(n, p), s.selection.value = s.items.value.filter(
          (y) => p.name.value === y.name
        );
      }
    };
  },
  computed: {
    types() {
      return m;
    }
  }
});
function ft(e, i, t, a, n, s) {
  const p = h("GlobalTerrainComponent"), u = h("RectangleTerrainComponent"), c = h("BoxTerrainComponent"), r = h("VcsWorkspaceWrapper");
  return C(), D(r, {
    "disable-add": e.isPersistent,
    "disable-new": e.terrainType === e.types.Global,
    onAddClicked: e.addToCategory,
    onNewClicked: e.createNew
  }, {
    default: l(() => [
      e.terrainType === e.types.Global ? (C(), D(p, { key: 0 })) : K("v-if", !0),
      e.terrainType === e.types.Rectangle ? (C(), D(u, { key: 1 })) : K("v-if", !0),
      e.terrainType === e.types.Box ? (C(), D(c, { key: 2 })) : K("v-if", !0)
    ]),
    _: 1
    /* STABLE */
  }, 8, ["disable-add", "disable-new", "onAddClicked", "onNewClicked"]);
}
const gt = /* @__PURE__ */ G(yt, [["render", ft]]);
function vt(e, i, t, a) {
  return a.forEach((n) => {
    const s = new FileReader();
    s.onload = (p) => {
      const u = p.target.result;
      try {
        const { features: c } = Re(u, {
          dynamicStyle: !0
        }), r = t.collection.size;
        c.forEach((y) => {
          fe(t, i.createFromFeature(y));
        }), e.notifier.add({
          type: Y.SUCCESS,
          message: e.vueI18n.t("components.import.featuresAdded", [
            t.collection.size - r
          ])
        });
      } catch (c) {
        e.notifier.add({
          message: c.message,
          type: Y.ERROR
        });
      }
    }, s.readAsText(n);
  }), !0;
}
function bt(e) {
  const i = e.selection.value.map(
    (a) => e.collection.getByKey(a.name).mode.serialize()
  ), t = Ue(
    { features: i },
    { writeStyle: !0, embedIcons: !0, prettyPrint: !0, writeId: !0 }
  );
  Ve(t, "transparentTerrain.json");
}
function xt(e, i, t, a) {
  const n = `${t.id}-editor`, s = {
    headerTitle: "transparentTerrain.header.title",
    styles: { height: "auto" },
    infoUrlCallback: e.getHelpUrlCallback(
      "tools/transparentTerrainTool.html"
    )
  }, p = {
    component: gt,
    provides: { manager: i, category: a, collectionComponent: t },
    state: s
  }, u = Ce(
    e,
    t,
    {
      editor: (g) => ({
        ...p,
        props: {
          itemName: g.name
        }
      })
    }
  ), { action: c, destroy: r } = De(
    (g) => vt(e, i, a, g),
    e.windowManager,
    z,
    J
  ), { action: y, destroy: _ } = Oe(
    t.selection,
    () => {
      bt(t);
    },
    z
  );
  u.addActions([c, y]);
  let v = () => {
  };
  function V() {
    const g = i.currentMode.value;
    g && (v(), v = T(g.name, () => {
      s.headerTitle = g.name.value;
    }), s.headerTitle = g.name.value ? g.name.value : `transparentTerrain.create.title.${g.type}`, s.headerIcon = me[g.type]);
  }
  const b = T(i.currentMode, () => {
    e.windowManager.has(n) && e.windowManager.remove(n);
    const g = i.currentMode.value;
    g ? (V(), g.isPersistent.value || setTimeout(() => {
      e.windowManager.add(
        {
          ...p,
          id: n,
          parentId: J,
          slot: ae.DYNAMIC_CHILD
        },
        z
      );
    }, 1)) : t.selection.value = [];
  }), x = T(t.selection, () => {
    var g, ie;
    t.selection.value.length === 0 ? i.stop() : t.selection.value.length === 1 ? i.start(
      (g = t.collection.getByKey(
        t.selection.value[0].name
      )) == null ? void 0 : g.mode
    ) : (ie = i.currentMode.value) == null || ie.deactivate();
  });
  return {
    destroy: () => {
      b(), x(), v(), r(), _(), e.windowManager.remove(n);
    },
    windowId: n,
    editor: p
  };
}
function Vt() {
  let e = () => {
  };
  return {
    get name() {
      return z;
    },
    get version() {
      return et;
    },
    get mapVersion() {
      return tt;
    },
    async initialize(i) {
      const t = new nt(i), {
        categoryUiItem: a,
        category: n,
        destroy: s
      } = await ut(i), {
        destroy: p,
        windowId: u,
        editor: c
      } = xt(
        i,
        t,
        a,
        n
      ), r = it(
        i,
        t,
        u,
        c
      );
      e = () => {
        r(), s(), p();
      };
    },
    i18n: {
      en: {
        transparentTerrain: {
          header: {
            title: "Transparent Terrain"
          },
          create: {
            tooltip: {
              [m.Box]: "Create ground excavation area",
              [m.Rectangle]: "Create transparent rectangle",
              [m.Global]: "Create transparent globe"
            },
            title: {
              [m.Box]: "Temporary box terrain",
              [m.Rectangle]: "Temporary rectangle terrain",
              [m.Global]: "Temporary global terrain"
            }
          },
          category: {
            zoomTo: "Zoom to item extent"
          },
          settings: {
            modify: "Modify",
            geometry: "Geometry",
            length: "Length",
            width: "Width",
            depth: "Depth",
            position: "Position",
            box: {
              edit: "Edit box",
              translate: "Translate box",
              scale: "Scale box",
              showTexture: "Show texture",
              hint: "Click on box to release and move."
            },
            global: {
              camera: "Move camera under terrain",
              opacity: "Opacity",
              nearFar: "Near/Far Scalar",
              distanceOpacity: "Alpha, scaled depending on distance",
              near: "Near",
              nearOpacity: "Near Opacity",
              far: "Far",
              farOpacity: "Far Opacity"
            },
            rectangle: {
              extent: {
                remove: "Remove extent"
              },
              hint: "click in map to set the position of the rectangle. Move mouse to inspect further."
            }
          }
        }
      },
      de: {
        transparentTerrain: {
          header: {
            title: "Transparenter Geländemodus"
          },
          create: {
            tooltip: {
              [m.Box]: "Geländeaushub erstellen",
              [m.Rectangle]: "Transparentes Rechteck erstellen",
              [m.Global]: "Globus transparent stellen "
            },
            title: {
              [m.Box]: "Temporäres Box-Gelände",
              [m.Rectangle]: "Temporäres Rechteck-Gelände",
              [m.Global]: "Temporäres globale Gelände"
            }
          },
          category: {
            zoomTo: "Auf Elementausdehnung zoomen"
          },
          settings: {
            modify: "Editieren",
            geometry: "Geometrie",
            length: "Länge",
            width: "Breite",
            depth: "Tiefe",
            position: "Position",
            box: {
              edit: "Box editieren",
              translate: "Box verschieben",
              scale: "Box skalieren",
              showTexture: "Textur anzeigen",
              hint: "Klicken Sie auf die Box um diese zu aktivieren und verschieben."
            },
            global: {
              camera: "Kamera unter Gelände bewegen",
              opacity: "Deckkraft",
              nearFar: "Nah/Fern Skalierung",
              distanceOpacity: "Transparenz skaliert abhängig vom Abstand",
              near: "Nah ",
              nearOpacity: "Deckkraft nah",
              far: "Fern",
              farOpacity: "Deckkraft fern"
            },
            rectangle: {
              extent: {
                remove: "Ausdehnung entfernen"
              },
              hint: "Klicken Sie in die Karte um die Position des Rechtecks festzulegen. Bewegen Sie die Maus um das Rechteck weiter zu zeichnen."
            }
          }
        }
      }
    },
    destroy() {
      e();
    }
  };
}
export {
  Vt as default
};
