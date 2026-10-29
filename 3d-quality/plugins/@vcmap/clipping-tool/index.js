var Ce = Object.defineProperty;
var Te = (t, o, n) => o in t ? Ce(t, o, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[o] = n;
var $ = (t, o, n) => Te(t, typeof o != "symbol" ? o + "" : o, n);
import { reactive as x, watch as F, shallowRef as ne, defineComponent as be, inject as Ee, computed as Y, provide as we, ref as L, onUnmounted as Ie, resolveComponent as I, openBlock as z, createBlock as U, withCtx as T, createTextVNode as K, toDisplayString as J, createVNode as m, createElementBlock as Oe, Fragment as Fe, createCommentVNode as Le, nextTick as Ve } from "../../../assets/vue.js";
import { CesiumMap as B, getDefaultHighlightStyle as je, VectorLayer as Se, mercatorProjection as Ae, markVolatile as _e, emptyStyle as Me, moduleIdSymbol as ie, CesiumTilesetLayer as W, ClippingObject as Ne, getClippingOptions as Re, createClippingPlaneCollection as xe, AbstractInteraction as ae, EventType as Q, handlerSymbol as Pe, SessionType as V, startEditFeaturesSession as Ge, startEditGeometrySession as He, TransformationMode as _, Category as ke, writeGeoJSONFeature as $e, parseGeoJSON as ze, writeGeoJSON as le, VcsEvent as re, Projection as We, createClippingFeature as Be, cursorMap as te } from "../../../assets/core.js";
import { ToolboxType as De, EditorTransformationIcons as Ue, VcsFormSection as Ke, VcsLabel as Je, VcsTextField as Ye, VcsFeatureTransforms as qe, VcsSelect as Ze, VcsCheckbox as Qe, VcsHelp as Xe, VcsWorkspaceWrapper as et, categoryManagerWindowId as tt, WindowSlot as ot, createSupportedMapMappingFunction as nt, createListExportAction as it, downloadText as se, createListImportAction as at, importIntoLayer as lt, makeEditorCollectionComponentClass as rt, createZoomToFeatureAction as st } from "../../../assets/ui.js";
import { ol$Observable$unByKey as S } from "../../../assets/ol.js";
import { VRow as ct, VCol as pt, VContainer as dt, VDivider as ut } from "../../../assets/vuetify.js";
const w = "@vcmap/clipping-tool", gt = "3.0.0", vt = "^6.2", R = {
  horizontal: "$vcsClippingHorizontal",
  vertical: "$vcsClippingVertical"
};
function mt(t, o, n, e) {
  const i = {
    type: De.SELECT,
    action: x({
      name: o,
      currentIndex: 0,
      active: !1,
      background: !1,
      disabled: !1,
      async callback() {
        var l;
        if (this.active)
          this.background && e.activeClippingToolObject.value ? e.openWindowForClippingToolObject(
            e.activeClippingToolObject.value
          ) : (e.activeClippingToolObject.value = void 0, (l = e.editorSession.value) == null || l.stop(), e.collectionComponent.selection.value = [], t.windowManager.remove(n));
        else {
          const r = this.tools[this.currentIndex].name;
          await e.startCreateClippingSession(r);
        }
      },
      selected(l) {
        this.currentIndex = l;
        const r = this.tools[this.currentIndex].name;
        e.startCreateClippingSession(r);
      },
      tools: [
        {
          name: "horizontal",
          icon: R.horizontal,
          title: "clippingTool.createHorizontal"
        },
        {
          name: "vertical",
          icon: R.vertical,
          title: "clippingTool.createVertical"
        }
      ]
    })
  }, d = F(
    [e.editorSession, e.activeClippingToolObject],
    () => {
      i.action.active = !!(e.activeClippingToolObject.value || e.editorSession.value);
    }
  ), p = F(
    e.activeClippingToolObject,
    (l) => {
      l && (i.action.currentIndex = i.action.tools.findIndex(
        (r) => r.name === l.getProperty("clippingType")
      ));
    }
  ), a = [
    t.maps.mapActivated.addEventListener((l) => {
      i.action.disabled = !(l instanceof B);
    }),
    t.windowManager.added.addEventListener(({ id: l }) => {
      l === n && (i.action.background = !1);
    }),
    t.windowManager.removed.addEventListener(({ id: l }) => {
      l === n && (i.action.background = !0);
    })
  ];
  return {
    destroy() {
      d(), p(), a.forEach((l) => {
        l();
      });
    },
    toolbox: i
  };
}
function ft(t, o, n, e) {
  const { toolbox: i, destroy: d } = mt(t, o, n, e), p = t.toolboxManager.add(i, o).id;
  return () => {
    t.toolboxManager.remove(p), d();
  };
}
const f = {
  OFF: 1,
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
j.ERROR = f.ERROR | f.WARN | f.INFO | f.DEBUG;
j.WARN = f.WARN | f.INFO | f.DEBUG;
j.INFO = f.INFO | f.DEBUG;
j.DEBUG = f.DEBUG;
const M = {
  useTimestamp: !1,
  logLevel: f.INFO
}, P = /* @__PURE__ */ new Map();
P.set(f.ERROR, "error");
P.set(f.WARN, "warn");
P.set(f.INFO, "info");
P.set(f.DEBUG, "log");
class yt {
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
  error(o, ...n) {
    M.logLevel & j.ERROR && this._log(String(o), f.ERROR, n);
  }
  /**
   * Logs a warning message
   * @param {string} msg The message to log.
   * @param {...any} optArgs
   */
  warning(o, ...n) {
    M.logLevel & j.WARN && this._log(String(o), f.WARN, n);
  }
  /**
   * Deprecate a function. deprecations are stored on the logger
   * @param {string} functionName
   * @param {string=} alternativeFunctionName
   */
  deprecate(o, n) {
    const e = String(o), i = n ? String(n) : null;
    if (!this.deprecations.has(e)) {
      this.deprecations.set(e, i || null);
      let d = `${e} has been deprecated and will be removed`;
      i && (d = `${d}. ${i}`), this.warning(d);
    }
  }
  /**
   * Logs an info message
   * @param {string} msg The message to log.
   * @param {...any} optArgs
   */
  info(o, ...n) {
    M.logLevel & j.INFO && this._log(String(o), f.INFO, n);
  }
  /**
   * Logs a debug message
   * @param {string} msg The message to log.
   * @param {...any} optArgs
   */
  debug(o, ...n) {
    M.logLevel & j.DEBUG && this._log(String(o), f.DEBUG, n);
  }
  /**
   * Alias for debug
   * @param {string} msg The message to log.
   * @param {...any} optArgs
   */
  log(o, ...n) {
    M.logLevel & j.DEBUG && this._log(String(o), f.DEBUG, n);
  }
  /**
   * Logs a message
   * @param {string} msg The message to log.
   * @param {LOG_LEVEL} level
   * @param {Array} optArgs
   * @private
   */
  _log(o, n, e) {
    let i = o;
    this.className && (i = `[${this.className}] ${i}`), console[P.get(n)](i, ...e), n & f.ERROR && (console.group(), console.trace(), console.groupEnd());
  }
}
const q = /* @__PURE__ */ new Map();
function ht(t) {
  const o = new yt(t);
  return q.set(t, o), o;
}
function Ct(t) {
  return q.has(t) ? q.get(t) : ht(t);
}
const A = Symbol("ClippingObject");
function D(t) {
  function o(i) {
    return i.getType() === "LineString" && i.getCoordinates().length === 2;
  }
  function n(i) {
    return i.getType() === "Polygon" && i.getCoordinates()[0].length === 4;
  }
  const e = t == null ? void 0 : t.getGeometry();
  return !!e && (o(e) || n(e));
}
function ce(t) {
  const o = t.getProperties(), n = Re(t, o.isInfinite);
  return o.clippingType === "horizontal" && o.olcs_extrudedHeight && (n.createTopPlane = !0), n.reverse = o.isInverted, xe(t, n);
}
function Tt(t) {
  const o = ce(t);
  if (o) {
    const n = t.getProperties();
    return new Ne({
      clippingPlaneCollection: o,
      layerNames: n.layerNames,
      terrain: n.cutsGlobe
    });
  } else
    throw new Error("Could not create clipping plane collection");
}
function bt(t) {
  const o = () => {
    const i = ce(t);
    i && (t[A].clippingPlaneCollection = i);
  }, n = t.getGeometry().on("change", o), e = t.on("propertychange", (i) => {
    const { key: d } = i;
    if (d === "isInverted" || d === "isInfinite" || d === "olcs_extrudedHeight")
      o();
    else if (d === "cutsGlobe")
      t[A].terrain = !!t.get("cutsGlobe");
    else if (d === "layerNames") {
      const p = i.oldValue, a = new Set(p), l = t.get("layerNames"), r = t[A];
      l.forEach((s) => {
        p.includes(s) ? a.delete(s) : r.addLayer(s);
      }), a.forEach((s) => {
        r.removeLayer(s);
      });
    }
  });
  return () => {
    S(n), S(e);
  };
}
async function Et(t, o) {
  const n = new Se({
    projection: Ae.toJSON()
  });
  _e(n), n.setStyle(Me), await n.activate(), t.layers.add(n);
  const e = /* @__PURE__ */ new Map(), i = n.getSource(), d = [
    i.on("addfeature", ({ feature: a }) => {
      if (!D(a)) {
        a && n.removeFeaturesById([a.getId()]);
        return;
      }
      a[ie] = t.dynamicModuleId;
      let l = a.getProperties();
      if (!l.clippingType) {
        const r = a.getGeometry().getType() === "LineString" ? "vertical" : "horizontal", s = [...t.layers].filter((c) => c.active && c instanceof W).map((c) => c.name);
        l = {
          title: r,
          clippingType: r,
          isInverted: !1,
          isInfinite: !1,
          showFeature: !0,
          layerNames: s,
          cutsGlobe: !1
        }, a.setProperties(l);
      }
      a[A] = Tt(a), e.set(a, bt(a));
    }),
    i.on("removefeature", ({ feature: a }) => {
      var l;
      a && ((l = e.get(a)) == null || l(), e.delete(a));
    })
  ], p = [
    o.added.addEventListener((a) => {
      D(a) ? n.getFeatureById(a.getId()) || n.addFeatures([a]) : (Ct(w).error("Found invalid feature in collection, removing"), o.remove(a));
    }),
    o.removed.addEventListener((a) => {
      n.removeFeaturesById([a.getId()]);
    })
  ];
  return {
    layer: n,
    destroy: () => {
      S(d), e.forEach((a) => {
        a();
      }), e.clear(), p.forEach((a) => {
        a();
      }), t.layers.remove(n), n.destroy();
    }
  };
}
const oe = je();
function wt(t, o, n) {
  const e = ne(), { clippingObjectManager: i } = t.maps;
  let d = () => {
  };
  const p = F(e, (s, c) => {
    if (d(), c)
      if (i.hasClippingObject(c[A]) && i.clearExclusiveClippingObjects(!0), c.setStyle(), o.collection.has(c)) {
        const g = o.getListItemForItem(c);
        g && o.selection.value.includes(g) && o.selection.value.length === 1 && (o.selection.value = []);
      } else
        n.removeFeaturesById([c.getId()]);
    if (s && t.maps.activeMap instanceof B) {
      i.setExclusiveClippingObjects(
        [s[A]],
        () => {
          e.value = void 0;
        }
      ), s.get("showFeature") && s.setStyle(oe);
      const g = s.on("propertychange", ({ key: v }) => {
        v === "showFeature" && (s.get("showFeature") ? s.setStyle(oe) : s.setStyle());
      });
      d = () => {
        S(g);
      };
    }
  }), a = F(o.selection, () => {
    o.selection.value.length > 1 && e.value && (e.value = void 0);
  }), l = o.collection.removed.addEventListener((s) => {
    e.value === s && (e.value = void 0);
  }), r = t.maps.mapActivated.addEventListener((s) => {
    if (!(s instanceof B) && e.value) {
      const c = `${o.id}-editor`;
      t.windowManager.has(c) && t.windowManager.remove(c), e.value = void 0;
    }
  });
  return {
    activeClippingToolObject: e,
    destroy() {
      l(), p(), a(), r();
    }
  };
}
class pe extends ae {
  constructor(n) {
    super(Q.CLICK);
    $(this, "_currentSession");
    this._currentSession = n;
  }
  pipe(n) {
    var i;
    const e = this._currentSession.value;
    return !((i = n == null ? void 0 : n.feature) != null && i[Pe]) && ((e == null ? void 0 : e.type) === V.EDIT_FEATURES || (e == null ? void 0 : e.type) === V.EDIT_GEOMETRY) && (e.stop(), this._currentSession.value = void 0), Promise.resolve(n);
  }
}
function de(t, o, n, e, i) {
  const d = t.plugins.getByKey(w), p = /* @__PURE__ */ new Map();
  i.forEach((l) => {
    p.set(
      l,
      x({
        name: `components.editor.${l}`,
        title: `components.editor.${l}`,
        icon: Ue[l],
        active: !1,
        callback: () => {
          var r;
          if (((r = e.value) == null ? void 0 : r.type) === V.EDIT_FEATURES)
            e.value.mode === l ? e.value.stop() : e.value.setMode(l);
          else {
            d.openWindowForClippingToolObject(n);
            const s = Ge(
              t,
              o,
              void 0,
              l
            );
            s.setFeatures([n]), e.value = s;
            const c = new pe(
              e
            ), g = t.maps.eventHandler.addPersistentInteraction(
              c
            );
            s.stopped.addEventListener(() => {
              g(), c.destroy(), e.value = void 0;
            });
          }
        }
      })
    );
  });
  const a = F(
    e,
    (l) => {
      function r(s) {
        p.forEach((c, g) => {
          c.active = g === s;
        });
      }
      (l == null ? void 0 : l.type) === V.EDIT_FEATURES ? (r(l.mode), l.modeChanged.addEventListener(r)) : r();
    },
    { immediate: !0 }
  );
  return {
    actions: [...p.values()],
    destroy() {
      a();
    }
  };
}
function ue(t, o, n, e) {
  const i = t.plugins.getByKey(w), d = x({
    name: "components.editor.edit",
    title: "components.editor.edit",
    icon: "$vcsEditVertices",
    active: !1,
    callback: () => {
      var a;
      if (((a = e.value) == null ? void 0 : a.type) === V.EDIT_GEOMETRY)
        e.value.stop();
      else {
        e.value = He(
          t,
          o,
          void 0,
          { denyInsertion: !0, denyRemoval: !0 }
        ), e.value.setFeature(n), i.openWindowForClippingToolObject(n);
        const l = new pe(
          e
        ), r = t.maps.eventHandler.addPersistentInteraction(l), s = n.getGeometry(), c = t.maps.eventHandler.featureInteraction.pickPosition;
        t.maps.eventHandler.featureInteraction.pickPosition = Q.NONE;
        let g;
        if (s) {
          const v = s == null ? void 0 : s.getFlatCoordinates()[2], E = () => {
            S(g);
            const h = s.getCoordinates();
            s.getType() === "LineString" && (h[0][2] = v, h[1][2] = v), s.setCoordinates(h), g = s.on(
              "change",
              E
            );
          };
          g = s.on("change", E);
        }
        e.value.stopped.addEventListener(() => {
          e.value = void 0, r(), l.destroy(), S(g), t.maps.eventHandler.featureInteraction.pickPosition = c;
        });
      }
    }
  }), p = F(
    e,
    (a) => {
      d.active = (a == null ? void 0 : a.type) === V.EDIT_GEOMETRY;
    },
    { immediate: !0 }
  );
  return {
    action: d,
    destroy() {
      p();
    }
  };
}
function It(t) {
  const o = x({
    name: "clippingTool.showFeature",
    title: "clippingTool.showFeature",
    icon: "$vcsEye",
    active: t.getProperty("showFeature"),
    callback: () => {
      const e = !t.getProperty("showFeature");
      t.setProperties({ showFeature: e });
    }
  }), n = t.on("propertychange", ({ key: e }) => {
    e === "showFeature" && (o.active = t.get(e));
  });
  return {
    action: o,
    destroy() {
      S(n);
    }
  };
}
function N(t, o, n) {
  return Y({
    get() {
      return t.value;
    },
    set(e) {
      var i;
      (i = n.value) == null || i.set(o, e);
    }
  });
}
function Ot(t, o) {
  let n, e = 0;
  const i = new Set(
    o.filter(
      (d) => d.get("clippingType") === t
    ).map((d) => d.get("title"))
  );
  do
    e += 1, i.has(`${t}-${e}`) || (n = `${t}-${e}`);
  while (!n);
  return n;
}
const Ft = be({
  name: "ClippingToolWindow",
  components: {
    VRow: ct,
    VCol: pt,
    VContainer: dt,
    VDivider: ut,
    VcsFormSection: Ke,
    VcsLabel: Je,
    VcsTextField: Ye,
    VcsFeatureTransforms: qe,
    VcsSelect: Ze,
    VcsCheckbox: Qe,
    VcsHelp: Xe,
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
  setup(t) {
    const { windowState: o } = t, n = Ee("vcsApp"), e = n.plugins.getByKey(w), i = {
      currentEditSession: e.editorSession,
      currentFeatures: Y(() => {
        const u = [];
        return e.activeClippingToolObject.value && u.push(e.activeClippingToolObject.value), u;
      })
    };
    we("manager", i);
    const d = L(!0), p = L(!0), a = L(!0), l = L([]), r = L(), s = L([]), c = L(!1), g = L(), v = L();
    let E = () => {
    }, h = () => {
    }, O = () => {
    };
    F(
      e.editorSession,
      (u) => {
        E(), E = () => {
        }, v.value = void 0, (u == null ? void 0 : u.type) === V.CREATE ? (o.headerTitle = "clippingTool.create", o.headerIcon = R[u.clippingType]) : (u == null ? void 0 : u.type) === V.EDIT_FEATURES && (v.value = u.mode, E = u.modeChanged.addEventListener((y) => {
          v.value = y;
        }));
      },
      { immediate: !0 }
    );
    function G(u) {
      o.headerTitle = u;
    }
    F(
      e.activeClippingToolObject,
      () => {
        var u;
        if (O(), h(), e.activeClippingToolObject.value) {
          const y = e.activeClippingToolObject.value.getProperties();
          d.value = y.isInfinite, p.value = y.cutsGlobe, a.value = y.isInverted, l.value = y.layerNames, r.value = y.olcs_extrudedHeight, G(y.title);
          const H = e.activeClippingToolObject.value.on(
            "propertychange",
            ({ key: b }) => {
              b === "title" && G(
                e.activeClippingToolObject.value.get(b)
              ), b === "isInfinite" && (d.value = e.activeClippingToolObject.value.get(
                b
              )), b === "cutsGlobe" && (p.value = e.activeClippingToolObject.value.get(
                b
              )), b === "isInverted" && (a.value = e.activeClippingToolObject.value.get(
                b
              )), b === "layerNames" && (l.value = e.activeClippingToolObject.value.get(
                b
              )), b === "olcs_extrudedHeight" && (r.value = e.activeClippingToolObject.value.get(b));
            }
          );
          c.value = e.collectionComponent.collection.has(
            e.activeClippingToolObject.value
          ), c.value || (o.headerTitle = [
            "clippingTool.temporary",
            `clippingTool.${(u = e.activeClippingToolObject.value) == null ? void 0 : u.get("clippingType")}`
          ], o.headerIcon = R[e.activeClippingToolObject.value.get(
            "clippingType"
          )]), O = () => {
            S(H);
          }, g.value = e.activeClippingToolObject.value.get(
            "clippingType"
          );
          const k = [], { action: ve, destroy: me } = It(e.activeClippingToolObject.value);
          s.value = [ve];
          const ee = [
            _.TRANSLATE,
            _.ROTATE
          ];
          if (g.value === "vertical") {
            const { action: b, destroy: he } = ue(
              n,
              e.clippingFeatureLayer,
              e.activeClippingToolObject.value,
              e.editorSession
            );
            s.value.push(b), k.push(he);
          } else
            ee.push(_.SCALE);
          const {
            actions: fe,
            destroy: ye
          } = de(
            n,
            e.clippingFeatureLayer,
            e.activeClippingToolObject.value,
            e.editorSession,
            ee
          );
          s.value.push(...fe), k.push(ye), k.push(me), h = () => {
            k.forEach((b) => {
              b();
            });
          };
        } else
          s.value = [], g.value = void 0, c.value = !1;
      },
      { immediate: !0 }
    ), F(
      () => t.featureId,
      () => {
        var u, y;
        if (t.featureId && ((y = (u = e.activeClippingToolObject) == null ? void 0 : u.value) == null ? void 0 : y.getId()) !== t.featureId) {
          const H = e.clippingFeatureLayer.getFeatureById(
            t.featureId
          );
          H && (e.activeClippingToolObject.value = H);
        }
      },
      { immediate: !0 }
    );
    const C = L(
      [...n.layers].filter(
        (u) => u.active && u instanceof W
      ).map((u) => u.name)
    ), ge = [
      n.layers.added.addEventListener((u) => {
        u instanceof W && u.active && C.value.push(u.name);
      }),
      n.layers.removed.addEventListener((u) => {
        const y = C.value.indexOf(u.name);
        y >= 0 && C.value.splice(y, 1);
      }),
      n.layers.stateChanged.addEventListener((u) => {
        if (u instanceof W)
          if (u.active)
            C.value.push(u.name);
          else {
            const y = C.value.indexOf(u.name);
            y >= 0 && C.value.splice(y, 1);
          }
      })
    ];
    return Ie(() => {
      var u;
      ge.forEach((y) => {
        y();
      }), h(), (u = i.currentEditSession.value) == null || u.stop();
    }), {
      manager: i,
      isCreate: Y(
        () => {
          var u;
          return ((u = e.editorSession.value) == null ? void 0 : u.type) === V.CREATE;
        }
      ),
      isPersisted: c,
      availableLayerNames: C,
      isInfinite: N(
        d,
        "isInfinite",
        e.activeClippingToolObject
      ),
      cutsGlobe: N(
        p,
        "cutsGlobe",
        e.activeClippingToolObject
      ),
      isInverted: N(
        a,
        "isInverted",
        e.activeClippingToolObject
      ),
      layerNames: N(
        l,
        "layerNames",
        e.activeClippingToolObject
      ),
      extrudedHeight: N(
        r,
        "olcs_extrudedHeight",
        e.activeClippingToolObject
      ),
      addToMyWorkspace() {
        if (e.activeClippingToolObject.value) {
          const u = e.activeClippingToolObject.value;
          u.set(
            "title",
            Ot(
              u.get("clippingType"),
              [...e.collectionComponent.collection]
            )
          ), e.collectionComponent.collection.add(u), e.collectionComponent.selection.value = [
            e.collectionComponent.getListItemForItem(u)
          ], c.value = !0;
        }
      },
      async createNewClippingToolObject() {
        if (g.value)
          await e.startCreateClippingSession(
            g.value
          );
        else
          throw new Error("no current clipping object type");
      },
      headerActions: s,
      currentTransformationMode: v
    };
  }
}), Lt = (t, o) => {
  const n = t.__vccOpts || t;
  for (const [e, i] of o)
    n[e] = i;
  return n;
};
function Vt(t, o, n, e, i, d) {
  const p = I("VcsHelp"), a = I("VcsFeatureTransforms"), l = I("v-col"), r = I("v-row"), s = I("v-divider"), c = I("VcsLabel"), g = I("VcsSelect"), v = I("VcsTextField"), E = I("VcsCheckbox"), h = I("v-container"), O = I("VcsFormSection"), G = I("VcsWorkspaceWrapper");
  return z(), U(G, {
    "show-footer": !t.isCreate,
    "disable-add": t.isPersisted,
    onAddClicked: t.addToMyWorkspace,
    onNewClicked: t.createNewClippingToolObject
  }, {
    default: T(() => [
      t.isCreate ? (z(), U(p, { key: 0 }, {
        default: T(() => [
          K(
            J(t.$t("clippingTool.createDescription")),
            1
            /* TEXT */
          )
        ]),
        _: 1
        /* STABLE */
      })) : (z(), U(O, {
        key: 1,
        heading: "clippingTool.clippingPlane",
        "header-actions": t.headerActions,
        "action-button-list-overflow-count": 5
      }, {
        default: T(() => [
          m(h, { class: "px-1 py-0" }, {
            default: T(() => [
              t.currentTransformationMode ? (z(), Oe(
                Fe,
                { key: 0 },
                [
                  m(r, null, {
                    default: T(() => [
                      m(l, null, {
                        default: T(() => [
                          m(a, {
                            "transformation-mode": t.currentTransformationMode,
                            "feature-properties": { altitudeMode: "absolute" },
                            "allow-z-input": !0
                          }, null, 8, ["transformation-mode"])
                        ]),
                        _: 1
                        /* STABLE */
                      })
                    ]),
                    _: 1
                    /* STABLE */
                  }),
                  m(s)
                ],
                64
                /* STABLE_FRAGMENT */
              )) : Le("v-if", !0),
              m(r, { "no-gutters": "" }, {
                default: T(() => [
                  m(l, { cols: "6" }, {
                    default: T(() => [
                      m(c, { "html-for": "clipping-tool-layernames" }, {
                        default: T(() => [
                          K(
                            J(t.$t("clippingTool.layerNames")),
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
                  m(l, { cols: "6" }, {
                    default: T(() => [
                      m(g, {
                        id: "clipping-tool-layernames",
                        modelValue: t.layerNames,
                        "onUpdate:modelValue": o[0] || (o[0] = (C) => t.layerNames = C),
                        items: [...t.availableLayerNames],
                        multiple: ""
                      }, null, 8, ["modelValue", "items"])
                    ]),
                    _: 1
                    /* STABLE */
                  })
                ]),
                _: 1
                /* STABLE */
              }),
              m(r, { "no-gutters": "" }, {
                default: T(() => [
                  m(l, { cols: "6" }, {
                    default: T(() => [
                      m(c, { "html-for": "clipping-tool-extrusion" }, {
                        default: T(() => [
                          K(
                            J(t.$t("components.vectorProperties.extrudedHeight")),
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
                  m(l, { cols: "6" }, {
                    default: T(() => [
                      m(v, {
                        id: "clipping-tool-extrusion",
                        modelValue: t.extrudedHeight,
                        "onUpdate:modelValue": o[1] || (o[1] = (C) => t.extrudedHeight = C),
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
              m(r, { "no-gutters": "" }, {
                default: T(() => [
                  m(E, {
                    modelValue: t.isInfinite,
                    "onUpdate:modelValue": o[2] || (o[2] = (C) => t.isInfinite = C),
                    label: "clippingTool.isInfinite",
                    "true-value": !0,
                    "false-value": !1
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
                /* STABLE */
              }),
              m(r, { "no-gutters": "" }, {
                default: T(() => [
                  m(E, {
                    modelValue: t.cutsGlobe,
                    "onUpdate:modelValue": o[3] || (o[3] = (C) => t.cutsGlobe = C),
                    label: "clippingTool.cutsGlobe",
                    "true-value": !0,
                    "false-value": !1
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
                /* STABLE */
              }),
              m(r, { "no-gutters": "" }, {
                default: T(() => [
                  m(E, {
                    modelValue: t.isInverted,
                    "onUpdate:modelValue": o[4] || (o[4] = (C) => t.isInverted = C),
                    label: "clippingTool.isInverted",
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
          })
        ]),
        _: 1
        /* STABLE */
      }, 8, ["header-actions"]))
    ]),
    _: 1
    /* STABLE */
  }, 8, ["show-footer", "disable-add", "onAddClicked", "onNewClicked"]);
}
const jt = /* @__PURE__ */ Lt(Ft, [["render", Vt]]);
function X(t, o, n) {
  return {
    id: n,
    component: jt,
    parentId: tt,
    slot: ot.DYNAMIC_CHILD,
    state: {
      headerTitle: (o == null ? void 0 : o.get("title")) ?? "clippingTool.create",
      headerIcon: R[o == null ? void 0 : o.get("clippingType")],
      styles: { width: "280px" },
      infoUrlCallback: t.getHelpUrlCallback("tools/clippingTool.html")
    },
    props: { featureId: o == null ? void 0 : o.getId() }
  };
}
class Z extends ke {
  static get className() {
    return "ClippingToolCategory";
  }
  // eslint-disable-next-line class-methods-use-this
  _serializeItem(o) {
    return $e(o, {
      asObject: !0,
      writeId: !0
    });
  }
  // eslint-disable-next-line class-methods-use-this
  _deserializeItem(o) {
    const [n] = ze(o).features;
    return D(n) ? Promise.resolve(n) : Promise.reject(new Error("could not desierialize item"));
  }
}
function St(t, o) {
  const n = x({
    name: "visibilityAction",
    icon: "$vcsCheckbox",
    callback() {
      t === o.value ? o.value = void 0 : o.value = t;
    }
  }), e = F(
    o,
    () => {
      n.icon = o.value === t ? "$vcsCheckboxChecked" : "$vcsCheckbox";
    },
    { immediate: !0 }
  );
  return { action: n, destroy: e };
}
async function At(t, o) {
  const { collectionComponent: n } = await t.categoryManager.requestCategory(
    {
      type: Z.className,
      name: "ClippingTool",
      title: "clippingTool.clippingPlanes",
      keyProperty: "id_"
    },
    w,
    {
      selectable: !0,
      renamable: !0,
      removable: !0
    }
  );
  n.addItemMapping({
    mappingFunction: nt(
      [B.className],
      t.maps
    ),
    owner: w
  });
  const e = (r, s, c) => {
    const g = r.getProperties();
    c.title = g.title, c.titleChanged = (O) => {
      r.set("title", O), c.title = O;
    };
    const { action: v, destroy: E } = St(
      r,
      o.activeClippingToolObject
    );
    st(
      { name: "clippingTool.zoomTo" },
      r,
      t.maps
    ) && c.actions.push(), c.actions.push(v), c.destroyFunctions.push(E);
  };
  t.categoryManager.addMappingFunction(
    () => !0,
    e,
    w,
    [n.id]
  );
  const { action: i, destroy: d } = it(
    n.selection,
    () => {
      const r = n.selection.value.map((c) => n.collection.getByKey(c.name)).filter((c) => !!c), s = le({ features: r }, { prettyPrint: !0 });
      typeof s == "string" && se(s, "clippings.json");
    },
    w
  ), { action: p, destroy: a } = at(
    async (r) => {
      const s = [], c = o.clippingFeatureLayer.getSource().on("addfeature", ({ feature: v }) => {
        s.push(v);
      }), g = await lt(
        r,
        t,
        o.clippingFeatureLayer,
        {
          predicate: D
        }
      );
      return g && s.forEach((v) => {
        o.clippingFeatureLayer.getFeatureById(v.getId()) && o.collectionComponent.collection.add(
          v
        );
      }), S(c), g;
    },
    t.windowManager,
    w,
    "category-manager"
  );
  return n.addActions([i, p]), {
    collectionComponent: rt(
      t,
      n,
      {
        editor: (r) => X(t, r)
      }
    ),
    destroy() {
      d(), a();
    }
  };
}
class _t extends ae {
  constructor(n) {
    super(Q.CLICK);
    $(this, "_isVertical");
    $(this, "_finished");
    this._isVertical = n, this._finished = new re(), this.setActive();
  }
  get finished() {
    return this._finished;
  }
  pipe(n) {
    var e;
    if (n.position) {
      const i = (e = n.map.getScene()) == null ? void 0 : e.camera, d = We.mercatorToWgs84(n.position), p = this._isVertical ? Math.PI / 2 : 0;
      if (i) {
        const a = Be(
          d,
          i,
          this._isVertical,
          void 0,
          p
        );
        this._finished.raiseEvent(a);
      } else
        this._finished.raiseEvent(void 0);
      n.stopPropagation = !0;
    }
    return Promise.resolve(n);
  }
}
async function Mt(t, o, n, e) {
  n.activeClippingToolObject.value = void 0, await Ve();
  const i = new re(), d = o === "vertical", p = new _t(d);
  t.windowManager.has(e) || t.windowManager.add(
    X(t, void 0, e),
    w
  );
  let a = (c) => {
  };
  const l = t.maps.eventHandler.addExclusiveInteraction(
    p,
    () => {
      t.windowManager.has(e) && t.windowManager.remove(e), a();
    }
  );
  t.maps.target && (t.maps.target.style.cursor = te.select);
  const r = () => {
    l(), p.destroy(), t.maps.target && (t.maps.target.style.cursor = te.auto);
  };
  let s = () => {
  };
  return a = (c) => {
    s(), r(), c && (n.clippingFeatureLayer.addFeatures([c]), n.activeClippingToolObject.value = c), n.editorSession.value = void 0, i.raiseEvent();
  }, s = F(
    n.activeClippingToolObject,
    () => {
      a();
    }
  ), p.finished.addEventListener((c) => {
    r(), a(c);
  }), {
    clippingType: o,
    type: V.CREATE,
    stopped: i,
    stop() {
      a();
    }
  };
}
function Nt(t, o) {
  let n = () => {
  };
  t.contextMenuManager.closed.addEventListener(() => {
    n(), n = () => {
    };
  });
  function e(i) {
    const d = [], p = [], a = [
      _.TRANSLATE,
      _.ROTATE
    ], {
      clippingFeatureLayer: l,
      activeClippingToolObject: r,
      collectionComponent: s,
      editorSession: c
    } = o;
    if (i.feature && r.value && i.feature === r.value) {
      if (i.feature.getProperty(
        "clippingType"
      ) === "vertical") {
        const { action: h, destroy: O } = ue(
          t,
          l,
          r.value,
          c
        );
        d.push(h), p.push(O);
      } else
        a.push(_.SCALE);
      const {
        actions: v,
        destroy: E
      } = de(
        t,
        l,
        r.value,
        c,
        a
      );
      d.push(...v), p.push(E), n = () => {
        p.forEach((h) => {
          h();
        });
      }, d.push({
        name: "clippingTool.export",
        title: "clippingTool.export",
        icon: "$vcsExport",
        callback: () => {
          if (r.value) {
            const h = le(
              { features: [r.value] },
              { prettyPrint: !0 }
            );
            if (typeof h == "string") {
              const O = r.value.getProperty("title") ?? "tempClipping";
              se(h, `${O}.json`);
            }
          }
        }
      }), d.push({
        name: "clippingTool.delete",
        title: "clippingTool.delete",
        icon: "$vcsTrashCan",
        callback: () => {
          r.value && l.getFeatureById(
            r.value.getId()
          ) && s.collection.remove(
            r.value
          ), r.value = void 0;
        }
      });
    }
    return d;
  }
  return t.contextMenuManager.addEventHandler(e, w), () => {
    n(), t.contextMenuManager.removeHandler(e);
  };
}
function $t() {
  let t, o, n, e;
  const i = ne(void 0);
  let d = () => {
  };
  return {
    get name() {
      return w;
    },
    get version() {
      return gt;
    },
    get mapVersion() {
      return vt;
    },
    get activeClippingToolObject() {
      if (!e)
        throw new Error("Clipping tool not yet initialized");
      return e;
    },
    get clippingFeatureLayer() {
      if (!n)
        throw new Error("Clipping tool not yet initialized");
      return n;
    },
    get editorSession() {
      return i;
    },
    get collectionComponent() {
      if (!t)
        throw new Error("Clipping tool not yet initialized");
      return t;
    },
    async initialize(p) {
      o = p, o.categoryClassRegistry.registerClass(
        this[ie],
        Z.className,
        Z
      );
      const a = await At(p, this);
      ({ collectionComponent: t } = a);
      const l = await Et(
        p,
        a.collectionComponent.collection
      );
      n = l.layer;
      const r = wt(
        p,
        t,
        n
      );
      ({ activeClippingToolObject: e } = r);
      const s = ft(
        p,
        w,
        `${a.collectionComponent.id}-editor`,
        this
      ), c = Nt(o, this);
      return d = () => {
        var v;
        r.destroy(), a.destroy(), s(), c(), l.destroy();
        const g = (v = e == null ? void 0 : e.value) == null ? void 0 : v[A];
        g && p.maps.clippingObjectManager.hasClippingObject(g) && p.maps.clippingObjectManager.clearExclusiveClippingObjects();
      }, Promise.resolve();
    },
    async startCreateClippingSession(p) {
      i.value = await Mt(
        o,
        p,
        this,
        `${this.collectionComponent.id}-editor`
      );
    },
    openWindowForClippingToolObject(p) {
      if (o != null && o.windowManager.has(`${this.collectionComponent.id}-editor`))
        if ((e == null ? void 0 : e.value) !== p)
          o.windowManager.remove(`${this.collectionComponent.id}-editor`);
        else
          return;
      this.collectionComponent.collection.has(p) ? (this.collectionComponent.selection.value = [
        this.collectionComponent.getListItemForItem(p)
      ], this.collectionComponent.openEditorWindow(p)) : o.windowManager.add(
        X(
          o,
          p,
          `${this.collectionComponent.id}-editor`
        ),
        w
      );
    },
    getDefaultOptions() {
      return {};
    },
    toJSON() {
      return {};
    },
    getConfigEditors() {
      return [];
    },
    i18n: {
      en: {
        clippingTool: {
          clippingPlanes: "Clipping Planes",
          clippingPlane: "Clipping Plane",
          temporary: "Temporary",
          horizontal: "Horizontal",
          vertical: "Vertical",
          isInfinite: "Is infinite",
          cutsGlobe: "Cuts globe",
          isInverted: "Is inverted",
          showFeature: "Show feature",
          create: "Create clipping plane",
          createVertical: "Create vertical clipping plane",
          createHorizontal: "Create horizontal clipping plane",
          layerNames: "Layer",
          createDescription: "Set clipping skeleton by click within the map.",
          zoomTo: "Zoom to item",
          export: "Export",
          delete: "Delete"
        }
      },
      de: {
        clippingTool: {
          clippingPlanes: "Schnittebenen",
          clippingPlane: "Schnittebene",
          temporary: "Temporäre",
          horizontal: "Horizontale",
          vertical: "Vertikale",
          isInfinite: "Unendlich",
          cutsGlobe: "Schneidet Globus",
          isInverted: "Invertieren",
          showFeature: "Feature anzeigen",
          create: "Schnittebene erzeugen",
          createVertical: "Vertikalen Schnitt erzeugen",
          createHorizontal: "Horizontalen Schnitt erzeugen",
          layerNames: "Ebene",
          createDescription: "Setzen Sie die Schnittebene mit einem Klick in die Karte.",
          zoomTo: "Auf Element zoomen",
          export: "Exportieren",
          delete: "Löschen"
        }
      }
    },
    destroy() {
      d();
    }
  };
}
export {
  $t as default
};
