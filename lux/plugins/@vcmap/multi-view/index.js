
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
} await loadCss('data:text/css;base64,Lm5vLXBvaW50ZXJbZGF0YS12LTUzYjI2YzkzXXtwb2ludGVyLWV2ZW50czpub25lfS5ncmlkLWFyZWFbZGF0YS12LTUzYjI2YzkzXXtwb2ludGVyLWV2ZW50czpub25lO3Bvc2l0aW9uOnJlbGF0aXZlO3dpZHRoOjEwMCU7aGVpZ2h0OjEwMCU7cGFkZGluZy1sZWZ0OjRweH0uZm9ybS1idG5bZGF0YS12LTUzYjI2YzkzXXtiYWNrZ3JvdW5kLWNvbG9yOnJnYih2YXIoLS12LXRoZW1lLXN1cmZhY2UpKTtoZWlnaHQ6Y2FsYyh2YXIoLS12LXZjcy1mb250LXNpemUpICogMikhaW1wb3J0YW50O3BhZGRpbmctbGVmdDo4cHghaW1wb3J0YW50O3BhZGRpbmctcmlnaHQ6OHB4IWltcG9ydGFudDtib3JkZXI6MH0uY29ybmVyLWJ0bltkYXRhLXYtNTNiMjZjOTNde3Bvc2l0aW9uOmFic29sdXRlO2JvdHRvbTowO3BvaW50ZXItZXZlbnRzOmF1dG99LnNlbGVjdFtkYXRhLXYtNTNiMjZjOTNdIC52LWZpZWxke3BhZGRpbmc6NHB4fVtkYXRhLXYtNTNiMjZjOTNdIC5hYnNvbHV0ZS1maWxse3Bvc2l0aW9uOmFic29sdXRlO3RvcDowO2JvdHRvbTowO2xlZnQ6MDtyaWdodDowO292ZXJmbG93OmhpZGRlbn1bZGF0YS12LTUzYjI2YzkzXSAuZ3JpZC1hcmVhLTF7Z3JpZC1hcmVhOnZpZXctMX1bZGF0YS12LTUzYjI2YzkzXSAuZ3JpZC1hcmVhLTJ7Z3JpZC1hcmVhOnZpZXctMn1bZGF0YS12LTUzYjI2YzkzXSAuZ3JpZC1hcmVhLTN7Z3JpZC1hcmVhOnZpZXctM31bZGF0YS12LTUzYjI2YzkzXSAuZ3JpZC1hcmVhLTR7Z3JpZC1hcmVhOnZpZXctNH0ubXVsdGktdmlldy1jb250YWluZXJbZGF0YS12LTUzYjI2YzkzXXtjb250YWluZXItdHlwZTppbmxpbmUtc2l6ZX1bZGF0YS12LTUzYjI2YzkzXSAubXVsdGktdmlldy1ncmlke2Rpc3BsYXk6Z3JpZDtncmlkLXRlbXBsYXRlLWFyZWFzOiJ2aWV3LTEiICJ2aWV3LTIiICJ2aWV3LTMiICJ2aWV3LTQiO3Jvdy1nYXA6MnB4O2NvbHVtbi1nYXA6MnB4O3BhZGRpbmctbGVmdDowfUBjb250YWluZXIgKHdpZHRoID4gNzAwcHgpe1tkYXRhLXYtNTNiMjZjOTNdIC5tdWx0aS12aWV3LWdyaWR7Z3JpZC10ZW1wbGF0ZS1hcmVhczoidmlldy0xIHZpZXctMiIgInZpZXctMyB2aWV3LTQifX0K');var re = Object.defineProperty;
var ce = (e, i, t) => i in e ? re(e, i, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[i] = t;
var b = (e, i, t) => ce(e, typeof i != "symbol" ? i + "" : i, t);
import { VcsMap as ue, OrientationToolsButton as X, VcsSelect as H, VcsFormButton as de, AbstractConfigEditor as me, VcsLabel as F, VcsCheckbox as pe, PanelLocation as K, ToolboxType as ve } from "../../../assets/ui.js";
import { ref as k, shallowRef as Y, defineComponent as ee, inject as te, computed as E, onMounted as ge, onUnmounted as fe, openBlock as O, createElementBlock as D, createVNode as m, unref as c, createElementVNode as G, createBlock as Q, createCommentVNode as j, Fragment as Me, renderList as he, normalizeClass as we, withCtx as M, createTextVNode as L, toDisplayString as A, mergeProps as Se, toRaw as Ve, reactive as ye } from "../../../assets/vue.js";
import { VcsEvent as ae, CesiumMap as P, PanoramaMap as w, ObliqueMap as V, OpenlayersMap as R, AbstractInteraction as be, EventType as Ce, panoramaFeature as Z, getHeightFromTerrainProvider as Ee, Viewpoint as z, EventHandler as Ne, PanoramaFeatureHighlight as _e, PanoramaDatasetLayer as Ie } from "../../../assets/core.js";
import { VContainer as Oe, VRow as B, VCol as C } from "../../../assets/vuetify.js";
const h = "@vcmap/multi-view", Pe = "3.0.3", qe = "^6.2";
class ke extends ae {
  constructor() {
    super(...arguments);
    // eslint-disable-next-line class-methods-use-this
    b(this, "_activeListener", () => {
    });
  }
  setActiveMap(t) {
    var l;
    const a = () => {
      t && this.raiseEvent(t);
    };
    if (this._activeListener(), t instanceof P || t instanceof w) {
      const s = (l = t.getCesiumWidget()) == null ? void 0 : l.camera;
      s && (s.percentageChanged = 1e-5, this._activeListener = s.changed.addEventListener(a));
    } else if (t instanceof V)
      this._activeListener = t.postRender.addEventListener(a);
    else if (t instanceof R && t.olMap) {
      const s = t.olMap.getView();
      s && (s.on("change:center", a), s.on("change:resolution", a), this._activeListener = () => {
        s.un("change:center", a), s.un("change:resolution", a);
      });
    }
    a();
  }
  destroy() {
    try {
      this._activeListener();
    } catch (t) {
      throw new Error(
        `cannot destroy viewChangedEvent: ${t instanceof Error ? t.message : String(t)}`
      );
    } finally {
      super.destroy();
    }
  }
}
class J extends be {
  constructor(i, t, a, l) {
    super(Ce.CLICK), this._app = i, this._activeSideMap = t, this._setActiveSideMap = a, this._source = l;
  }
  async pipe(i) {
    if (i.feature && i.feature[Z]) {
      const { dataset: t, name: a } = i.feature[Z], l = await t.createPanoramaImage(a);
      i.stopPropagation = !0;
      const s = this._app.maps.activeMap, u = this._activeSideMap.value;
      s instanceof w && u instanceof w ? this._source === "mainMap" || this._source === "overviewMap" ? s.setCurrentImage(l) : this._source === "sideMap" && u.setCurrentImage(l) : s instanceof w && !(u instanceof w) ? s.setCurrentImage(l) : u instanceof w ? u.setCurrentImage(l) : (await this._setActiveSideMap(w.className), this._activeSideMap.value instanceof w && this._activeSideMap.value.setCurrentImage(l));
    }
    return i;
  }
}
class N {
  constructor() {
    b(this, "northMap");
    b(this, "southMap");
    b(this, "eastMap");
    b(this, "westMap");
    b(this, "maps");
    b(this, "_target");
    b(this, "mapElement");
    b(this, "layerCollection");
    b(this, "pointerInteractionEvent");
    this.northMap = new V({ switchOnEdge: !1 }), this.eastMap = new V({ switchOnEdge: !1 }), this.southMap = new V({ switchOnEdge: !1 }), this.westMap = new V({ switchOnEdge: !1 }), this.maps = [this.northMap, this.eastMap, this.southMap, this.westMap], this._target = null, this.mapElement = document.createElement("div"), this.mapElement.classList.add("absolute-fill", "multi-view-grid"), this.pointerInteractionEvent = new ae(), this.layerCollection = null;
  }
  static get className() {
    return "ObliqueMultiView";
  }
  get className() {
    return this.constructor.className;
  }
  async activate() {
    await Promise.all(this.maps.map((i) => i.activate()));
  }
  async setCollection(i) {
    await Promise.all(this.maps.map((t) => t.setCollection(i)));
  }
  deactivate() {
    this.maps.forEach((i) => {
      i.deactivate();
    });
  }
  setTarget(i) {
    this._target && this._target.removeChild(this.mapElement), this._target = typeof i == "string" ? document.getElementById(i) : i, this._target && (this.maps.forEach((t) => {
      t.setTarget(this.mapElement);
    }), this.northMap.mapElement.classList.add("grid-area-1"), this.eastMap.mapElement.classList.add("grid-area-2"), this.southMap.mapElement.classList.add("grid-area-3"), this.westMap.mapElement.classList.add("grid-area-4"), this._target.appendChild(this.mapElement));
  }
  async gotoViewpoint(i) {
    var l, s;
    const t = i.groundPosition ?? i.cameraPosition ?? void 0, { distance: a } = i;
    if (t) {
      if (!t[2]) {
        const u = (s = (l = this.northMap.currentImage) == null ? void 0 : l.meta) == null ? void 0 : s.terrainProvider;
        u && await Ee(
          u,
          [t],
          void 0,
          [t]
        );
      }
      await Promise.all([
        this.northMap.gotoViewpoint(
          new z({
            groundPosition: t,
            distance: a,
            heading: 0
          })
        ),
        this.eastMap.gotoViewpoint(
          new z({
            groundPosition: t,
            distance: a,
            heading: 90
          })
        ),
        this.southMap.gotoViewpoint(
          new z({
            groundPosition: t,
            distance: a,
            heading: 180
          })
        ),
        this.westMap.gotoViewpoint(
          new z({
            groundPosition: t,
            distance: a,
            heading: 270
          })
        )
      ]);
    }
  }
  destroy() {
    this.maps.forEach((i) => {
      i.destroy();
    }), this.maps.length = 0, this.mapElement && (this.mapElement.parentElement && this.mapElement.parentElement.removeChild(this.mapElement), this.mapElement = document.createElement("div"), this._target = null), this.layerCollection = null, this.pointerInteractionEvent.destroy();
  }
}
function Le(e, i, t, a) {
  const l = new J(
    e,
    t,
    a,
    "overviewMap"
  ), s = e.overviewMap.eventHandler.addPersistentInteraction(
    l
  ), u = e.overviewMap.panoramaImageSelection.active;
  e.overviewMap.panoramaImageSelection.setActive(!1);
  const v = new J(
    e,
    t,
    a,
    "mainMap"
  ), y = e.maps.eventHandler.addPersistentInteraction(
    v
  ), S = e.overviewMap.panoramaImageSelection.active;
  e.maps.panoramaImageSelection.setActive(!1);
  const p = new J(
    e,
    t,
    a,
    "sideMap"
  ), n = i.addPersistentInteraction(
    p
  );
  return () => {
    s(), e.overviewMap.panoramaImageSelection.setActive(
      u
    ), l.destroy(), y(), e.maps.panoramaImageSelection.setActive(
      S
    ), v.destroy(), n(), p.destroy();
  };
}
function Ae(e, i) {
  const t = k([]), a = k([]), l = Y(null), s = k(null), u = Y(null), v = k(!0);
  let y = !1;
  const S = new Ne(), p = new _e();
  S.addPersistentInteraction(p);
  async function n() {
    var d;
    const o = e.maps.activeMap;
    if (!o || y || o instanceof w && !o.currentPanoramaImage)
      return;
    const r = o.getViewpointSync();
    r != null && r.isValid() && l && (l.value instanceof w && e.maps.activeMap instanceof P && (r.groundPosition = null), y = !0, await ((d = l.value) == null ? void 0 : d.gotoViewpoint(r)), u.value = r), y = !1;
  }
  async function g() {
    v.value = !v.value, v.value && await n();
  }
  function f(o) {
    const r = e.maps.getByType(o)[0];
    if (r) {
      const d = r.toJSON();
      return d.name = `${o}-multi-view`, d;
    }
    return {};
  }
  function _() {
    let o;
    if (i.obliqueCollectionName && (o = e.obliqueCollections.getByKey(
      i.obliqueCollectionName
    )), !o) {
      const r = e.maps.getByType(V.className).find((d) => d.initialized);
      r && r instanceof V && (o = r.collection);
    }
    if (!o) {
      const r = [...e.modules].reverse().map((d) => d.startingObliqueCollectionName).find((d) => d);
      o = e.obliqueCollections.getByKey(
        r
      );
    }
    return o ?? [...e.obliqueCollections][0];
  }
  const $ = /* @__PURE__ */ new Map();
  async function ie(o) {
    if ($.has(o))
      return $.get(o);
    let r = null;
    if (o === R.className)
      r = new R(f(o));
    else if (o === P.className)
      r = new P(f(o));
    else if (o === w.className)
      r = new w(f(o));
    else if (o === V.className) {
      const d = _();
      d && (r = new V(f(o)), await r.setCollection(d));
    } else if (o === N.className) {
      const d = _();
      d && (r = new N(), await r.setCollection(d));
    }
    return r && (r.pointerInteractionEvent.addEventListener((d) => {
      S.handleMapEvent(d);
    }), r.setTarget("multi-view-map-container"), r.layerCollection = e.maps.layerCollection), r;
  }
  async function I(o) {
    var d, q;
    if (o === ((d = l.value) == null ? void 0 : d.className))
      return;
    const r = await ie(o);
    r && ((q = l.value) == null || q.deactivate(), await r.activate(), l.value = r, await n(), r instanceof w && (v.value = !1));
  }
  const ne = Le(
    e,
    S,
    l,
    I
  );
  async function le() {
    var d, q, U;
    const o = (q = e.maps.getByType(
      ((d = l.value) == null ? void 0 : d.className) ?? ""
    )[0]) == null ? void 0 : q.name;
    y = !0;
    const r = (U = e.maps.activeMap) == null ? void 0 : U.className;
    o && await e.maps.setActiveMap(o), r && await I(r), y = !1, await n();
  }
  const T = new ke();
  T.setActiveMap(e.maps.activeMap), T.addEventListener(async () => {
    l.value && v.value && await n();
  });
  async function se() {
    var o;
    i.allowedSideMaps && i.allowedSideMaps.length > 0 && (a.value = [...i.allowedSideMaps]), e.obliqueCollections.size === 0 && (a.value = a.value.filter(
      (r) => ![V.className, N.className].includes(
        r
      )
    )), [...e.layers].some((r) => r instanceof Ie) || (a.value = a.value.filter(
      (r) => w.className !== r
    )), s.value = ((o = e.maps.activeMap) == null ? void 0 : o.className) ?? null, a.value.length > 0 && (i.startingSideMap && a.value.includes(i.startingSideMap) ? await I(i.startingSideMap) : a.value.includes(N.className) ? await I(N.className) : await I(a.value[0]));
  }
  const oe = [
    e.maps.mapActivated.addEventListener((o) => {
      T.setActiveMap(o), s.value = o.className;
    }),
    e.maps.added.addEventListener(() => {
      e.panelManager.remove(h);
    }),
    e.maps.removed.addEventListener(() => {
      e.panelManager.remove(h);
    })
  ];
  return {
    isSync: v,
    availableMainMapClasses: t,
    availableSideMapClasses: a,
    activeSideMap: l,
    activeMainMapClassName: s,
    currentMainMapViewpoint: u,
    setActiveSideMap: I,
    initializeMultiViewMaps: se,
    toggleSync: g,
    switchMaps: le,
    destroy() {
      $.values().forEach((o) => {
        o.deactivate(), o.destroy();
      }), $.clear(), oe.forEach((o) => {
        o();
      }), ne(), S.destroy(), T.destroy();
    }
  };
}
const $e = { class: "multi-view-container" }, Te = { class: "d-flex justify-start pa-1 ga-1" }, Fe = {
  key: 0,
  class: "absolute-fill multi-view-grid no-pointer"
}, ze = { class: "d-flex justify-start pa-1 ga-1 corner-btn" }, Be = /* @__PURE__ */ ee({
  __name: "MultiViewComponent",
  setup(e) {
    const i = te("vcsApp"), t = i.plugins.getByKey(h);
    if (!t)
      throw new Error(`Plugin ${h} not found in app.`);
    const a = Ae(
      i,
      t.config
    );
    function l(n) {
      return n === N.className ? "multiView.obliqueMultiView" : `navbar.maps.${n}`;
    }
    const s = E(() => {
      var n;
      return !!(a.availableMainMapClasses.value.includes(
        ((n = a.activeSideMap.value) == null ? void 0 : n.className) ?? ""
      ) && a.availableSideMapClasses.value.includes(
        a.activeMainMapClassName.value ?? ""
      ));
    }), u = E({
      get() {
        var n;
        return ((n = a.activeSideMap.value) == null ? void 0 : n.className) ?? "";
      },
      set(n) {
        a.setActiveSideMap(n).catch((g) => {
          console.log(`Failed to set active side map: ${String(g)}`);
        });
      }
    }), v = E(() => a.availableSideMapClasses.value.map((n) => ({
      title: l(n),
      value: n
    })));
    function y(n) {
      var g;
      [
        V.className,
        P.className,
        w.className
      ].includes(a.activeMainMapClassName.value ?? "") && ((g = i.maps.activeMap) == null || g.getViewpoint().then((f) => {
        var _;
        return f ? (f.heading = n, (_ = i.maps.activeMap) == null ? void 0 : _.gotoViewpoint(f)) : null;
      }).catch((f) => {
        console.error(
          `Failed to goto viewpoint in main map: ${String(f)}`
        );
      }));
    }
    ge(() => {
      a.initializeMultiViewMaps().catch((n) => {
        console.error(`Failed to initialize multi view maps: ${String(n)}`);
      });
    }), fe(() => {
      a.destroy();
    });
    function S(n, g) {
      return n == null || n === void 0 ? "outlined" : (Math.round(n / 90) % 4 + 4) % 4 === g ? "filled" : "outlined";
    }
    const p = [
      {
        key: "north",
        variant: E(() => {
          var n;
          return S(
            (n = a.currentMainMapViewpoint.value) == null ? void 0 : n.heading,
            0
          );
        }),
        heading: 0,
        label: "multiView.north",
        gridArea: "grid-area-1"
      },
      {
        key: "east",
        heading: 90,
        variant: E(() => {
          var n;
          return S(
            (n = a.currentMainMapViewpoint.value) == null ? void 0 : n.heading,
            1
          );
        }),
        label: "multiView.east",
        gridArea: "grid-area-2"
      },
      {
        key: "south",
        heading: 180,
        label: "multiView.south",
        variant: E(() => {
          var n;
          return S(
            (n = a.currentMainMapViewpoint.value) == null ? void 0 : n.heading,
            2
          );
        }),
        gridArea: "grid-area-3"
      },
      {
        key: "west",
        heading: 270,
        variant: E(() => {
          var n;
          return S(
            (n = a.currentMainMapViewpoint.value) == null ? void 0 : n.heading,
            3
          );
        }),
        label: "multiView.west",
        gridArea: "grid-area-4"
      }
    ];
    return (n, g) => (O(), D("div", $e, [
      m(c(ue), {
        "map-id": "multi-view-map-container",
        class: "map"
      }),
      G("div", Te, [
        s.value ? (O(), Q(c(X), {
          key: 0,
          icon: "mdi-swap-horizontal",
          tooltip: n.$st("multiView.switchMaps"),
          onClick: c(a).switchMaps
        }, null, 8, ["tooltip", "onClick"])) : j("v-if", !0),
        m(c(X), {
          icon: "mdi-sync",
          color: c(a).isSync.value ? "primary" : void 0,
          tooltip: n.$st("multiView.sync"),
          onClick: c(a).toggleSync
        }, null, 8, ["color", "tooltip", "onClick"]),
        v.value.length > 1 ? (O(), Q(c(H), {
          key: 1,
          modelValue: u.value,
          "onUpdate:modelValue": g[0] || (g[0] = (f) => u.value = f),
          class: "select pa-0 flex-grow-0",
          "bg-color": "surface",
          items: v.value
        }, null, 8, ["modelValue", "items"])) : j("v-if", !0)
      ]),
      u.value === c(N).className ? (O(), D("div", Fe, [
        (O(), D(
          Me,
          null,
          he(p, (f) => G(
            "div",
            {
              key: f.key,
              class: we(["absolute-fill grid-area", f.gridArea])
            },
            [
              G("div", ze, [
                m(c(de), {
                  variant: f.variant.value,
                  class: "form-btn",
                  onClick: (_) => y(f.heading)
                }, {
                  default: M(() => [
                    L(
                      A(n.$st(f.label)),
                      1
                      /* TEXT */
                    )
                  ]),
                  _: 2
                  /* DYNAMIC */
                }, 1032, ["variant", "onClick"])
              ])
            ],
            2
            /* CLASS */
          )),
          64
          /* STABLE_FRAGMENT */
        ))
      ])) : j("v-if", !0)
    ]));
  }
}), He = (e, i) => {
  const t = e.__vccOpts || e;
  for (const [a, l] of i)
    t[a] = l;
  return t;
}, W = /* @__PURE__ */ He(Be, [["__scopeId", "data-v-53b26c93"]]);
function x() {
  return {
    activeOnStartup: !1,
    startingSideMap: void 0,
    allowedSideMaps: [
      R.className,
      P.className,
      w.className,
      V.className,
      N.className
    ],
    obliqueCollectionName: void 0
  };
}
const xe = /* @__PURE__ */ ee({
  __name: "MultiViewConfigEditor",
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
    const i = e, t = x(), a = i.getConfig(), l = k({
      ...t,
      ...structuredClone(a)
    }), s = t.allowedSideMaps, u = E(() => l.value.allowedSideMaps && l.value.allowedSideMaps.length > 0 ? l.value.allowedSideMaps : s), y = [...te("vcsApp").obliqueCollections].map(
      (p) => {
        var n;
        return {
          value: p.name,
          title: ((n = p == null ? void 0 : p.properties) == null ? void 0 : n.title) || p.name
        };
      }
    );
    function S() {
      i.setConfig(structuredClone(Ve(l.value)));
    }
    return (p, n) => (O(), Q(
      c(me),
      Se({ ...p.$attrs, ...p.$props }, { onSubmit: S }),
      {
        default: M(() => [
          m(c(Oe), { class: "pa-1" }, {
            default: M(() => [
              m(c(B), { "no-gutters": "" }, {
                default: M(() => [
                  m(c(C), { cols: "6" }, {
                    default: M(() => [
                      m(c(F), { "html-for": "configActiveOnStartup" }, {
                        default: M(() => [
                          L(
                            A(p.$t("multiView.config.activeOnStartup")),
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
                  m(c(C), {
                    cols: "6",
                    class: "gc-2 d-flex"
                  }, {
                    default: M(() => [
                      m(c(pe), {
                        id: "configActiveOnStartup",
                        modelValue: l.value.activeOnStartup,
                        "onUpdate:modelValue": n[0] || (n[0] = (g) => l.value.activeOnStartup = g),
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
              m(c(B), { "no-gutters": "" }, {
                default: M(() => [
                  m(c(C), { cols: "6" }, {
                    default: M(() => [
                      m(c(F), { "html-for": "configAllowedSideMaps" }, {
                        default: M(() => [
                          L(
                            A(p.$t("multiView.config.allowedSideMaps")),
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
                  m(c(C), {
                    cols: "6",
                    class: "gc-2 d-flex"
                  }, {
                    default: M(() => [
                      m(c(H), {
                        id: "configAllowedSideMaps",
                        modelValue: l.value.allowedSideMaps,
                        "onUpdate:modelValue": n[1] || (n[1] = (g) => l.value.allowedSideMaps = g),
                        multiple: "",
                        items: c(s)
                      }, null, 8, ["modelValue", "items"])
                    ]),
                    _: 1
                    /* STABLE */
                  })
                ]),
                _: 1
                /* STABLE */
              }),
              m(c(B), { "no-gutters": "" }, {
                default: M(() => [
                  m(c(C), { cols: "6" }, {
                    default: M(() => [
                      m(c(F), { "html-for": "configStartingSideMap" }, {
                        default: M(() => [
                          L(
                            A(p.$t("multiView.config.startingSideMap")),
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
                  m(c(C), {
                    cols: "6",
                    class: "gc-2 d-flex"
                  }, {
                    default: M(() => [
                      m(c(H), {
                        id: "configStartingSideMap",
                        modelValue: l.value.startingSideMap,
                        "onUpdate:modelValue": n[2] || (n[2] = (g) => l.value.startingSideMap = g),
                        clearable: "",
                        placeholder: p.$t("multiView.config.placeholder"),
                        items: u.value
                      }, null, 8, ["modelValue", "placeholder", "items"])
                    ]),
                    _: 1
                    /* STABLE */
                  })
                ]),
                _: 1
                /* STABLE */
              }),
              m(c(B), { "no-gutters": "" }, {
                default: M(() => [
                  m(c(C), { cols: "6" }, {
                    default: M(() => [
                      m(c(F), { "html-for": "configObliqueCollectionName" }, {
                        default: M(() => [
                          L(
                            A(p.$t("multiView.config.obliqueCollectionName")),
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
                  m(c(C), {
                    cols: "6",
                    class: "gc-2 d-flex"
                  }, {
                    default: M(() => [
                      m(c(H), {
                        id: "configObliqueCollectionName",
                        modelValue: l.value.obliqueCollectionName,
                        "onUpdate:modelValue": n[3] || (n[3] = (g) => l.value.obliqueCollectionName = g),
                        clearable: "",
                        placeholder: p.$t("multiView.config.placeholder"),
                        items: c(y)
                      }, null, 8, ["modelValue", "placeholder", "items"])
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
      },
      16
      /* FULL_PROPS */
    ));
  }
});
function Je(e) {
  const i = {
    ...x(),
    ...e
  };
  let t;
  const a = [];
  let l;
  return {
    get name() {
      return h;
    },
    get version() {
      return Pe;
    },
    get mapVersion() {
      return qe;
    },
    get config() {
      return { ...x(), ...i };
    },
    initialize(s) {
      t = s;
      const u = ye({
        name: h,
        title: "multiView.title",
        icon: "$vcsMultiView",
        active: !1,
        callback() {
          this.active ? s.panelManager.remove(h) : s.panelManager.add(
            {
              id: h,
              component: W
            },
            h,
            K.RIGHT
          );
        }
      });
      a.push(
        t.panelManager.added.addEventListener((v) => {
          v.id === h && (u.active = !0);
        })
      ), a.push(
        t.panelManager.removed.addEventListener((v) => {
          v.id === h && (u.active = !1);
        })
      ), s.toolboxManager.add(
        {
          id: "multi-view",
          type: ve.SINGLE,
          action: u
        },
        h
      );
    },
    onVcsAppMounted(s) {
      i.activeOnStartup && (s.maps.activeMap ? s.panelManager.add(
        {
          id: h,
          component: W
        },
        h,
        K.RIGHT
      ) : l = s.maps.mapActivated.addEventListener(
        () => {
          l == null || l(), s.panelManager.add(
            {
              id: h,
              component: W
            },
            h,
            K.RIGHT
          );
        }
      ));
    },
    i18n: {
      en: {
        multiView: {
          config: {
            title: "MultiView configuration",
            activeOnStartup: "Activate side map on startup",
            allowedSideMaps: "Allowed side maps",
            startingSideMap: "Side map displayed at startup",
            placeholder: "Select",
            obliqueCollectionName: "Name of the oblique imagery collection"
          },
          title: "Show side map",
          north: "north",
          east: "east",
          south: "south",
          west: "west",
          sync: "Synchronize views",
          switchMaps: "Switch views",
          obliqueMultiView: "Oblique multiview"
        }
      },
      de: {
        multiView: {
          config: {
            title: "MultiView Konfiguration",
            activeOnStartup: "Nebenkarte beim Start aktivieren",
            allowedSideMaps: "Erlaubte Nebenkarten",
            startingSideMap: "Nebenkarte, die beim Start angezeigt wird",
            placeholder: "Auswählen",
            obliqueCollectionName: "Name der Schrägluftbildebene"
          },
          title: "Nebenkarte anzeigen",
          north: "Norden",
          east: "Osten",
          south: "Süden",
          west: "Westen",
          sync: "Ansichten synchronisieren",
          switchMaps: "Ansichten vertschauschen",
          obliqueMultiView: "Schrägluftbild Mehrfachansicht"
        }
      }
    },
    getConfigEditors() {
      return [
        {
          component: xe,
          title: "multiView.config.title"
        }
      ];
    },
    toJSON() {
      const s = {}, u = x();
      return e.activeOnStartup !== u.activeOnStartup && (s.activeOnStartup = e.activeOnStartup), e.startingSideMap && (s.startingSideMap = e.startingSideMap), e.allowedSideMaps && e.allowedSideMaps.length > 0 && (e.allowedSideMaps.length !== u.allowedSideMaps.length || !e.allowedSideMaps.every(
        (v) => u.allowedSideMaps.includes(v)
      )) && (s.allowedSideMaps = e.allowedSideMaps), e.obliqueCollectionName && (s.obliqueCollectionName = e.obliqueCollectionName), s;
    },
    destroy() {
      var s;
      a.forEach((u) => {
        u();
      }), (s = t == null ? void 0 : t.toolboxManager) == null || s.removeOwner(h), l == null || l(), t == null || t.panelManager.remove(h), t = void 0;
    }
  };
}
export {
  Je as default
};
