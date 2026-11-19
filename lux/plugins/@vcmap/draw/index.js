var Ce = Object.defineProperty;
var Le = (n, e, t) => e in n ? Ce(n, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : n[e] = t;
var j = (n, e, t) => Le(n, typeof e != "symbol" ? e + "" : e, t);
import { PanoramaMap as D, CesiumMap as K, getFlatCoordinateReferences as Te, getHeightFromTerrainProvider as xe, mercatorProjection as ee, TransformationMode as I, SelectionMode as q, startSelectFeaturesSession as ie, GeometryType as v, startCreateFeatureSession as Me, VectorLayer as Ie, maxZIndex as Fe, markVolatile as Oe, SessionType as L, OpenlayersMap as te, getStyleOptions as Ne, VectorStyleItem as Re, vectorStyleSymbol as Ae, startEditFeaturesSession as ke, startEditGeometrySession as _e, ObliqueMap as ye, getDefaultHighlightStyle as $e, vcsLayerName as De, writeGeoJSON as he, Category as Pe, parseGeoJSON as se, writeGeoJSONFeature as Be, FeatureVisibilityAction as z, Viewpoint as Ve, Extent as Ge, moduleIdSymbol as je } from "../../../assets/core.js";
import { shallowRef as W, watch as P, nextTick as We, reactive as ne, ref as ve, defineComponent as He, openBlock as ae, createBlock as le, unref as M, mergeProps as Ue, withCtx as R, createVNode as _, createTextVNode as ze, toDisplayString as Ke, createCommentVNode as Je, toRaw as qe } from "../../../assets/vue.js";
import { ol$geom$Polygon as Ze, ol$geom$LineString as Xe, ol$geom$Point as Ye, Feature as Ee, ol$Observable$unByKey as J, ol$extent$isEmpty as Qe } from "../../../assets/ol.js";
import { ToolboxType as et, WindowSlot as tt, VcsFeatureEditingWindow as nt, getAllowedEditorTransformationModes as rt, EditorTransformationIcons as ot, downloadText as we, makeEditorCollectionComponentClass as it, createListImportAction as st, importIntoLayer as at, createListExportAction as lt, callSafeAction as ce, AbstractConfigEditor as ct, VcsFormSection as ut, VcsLabel as dt, VcsSelect as ft } from "../../../assets/ui.js";
import { VContainer as gt, VRow as yt, VCol as ue } from "../../../assets/vuetify.js";
const S = "@vcmap/draw", ht = "5.0.1", vt = "^6.3", p = {
  ERROR: 2,
  WARN: 4,
  INFO: 8,
  DEBUG: 16
}, F = {
  ERROR: 0,
  WARN: 0,
  INFO: 0,
  DEBUG: 0
};
F.ERROR = p.ERROR | p.WARN | p.INFO | p.DEBUG;
F.WARN = p.WARN | p.INFO | p.DEBUG;
F.INFO = p.INFO | p.DEBUG;
F.DEBUG = p.DEBUG;
const B = {
  logLevel: p.INFO
}, G = /* @__PURE__ */ new Map();
G.set(p.ERROR, "error");
G.set(p.WARN, "warn");
G.set(p.INFO, "info");
G.set(p.DEBUG, "log");
class Et {
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
  error(e, ...t) {
    B.logLevel & F.ERROR && this._log(String(e), p.ERROR, t);
  }
  /**
   * Logs a warning message
   * @param {string} msg The message to log.
   * @param {...any} optArgs
   */
  warning(e, ...t) {
    B.logLevel & F.WARN && this._log(String(e), p.WARN, t);
  }
  /**
   * Deprecate a function. deprecations are stored on the logger
   * @param {string} functionName
   * @param {string=} alternativeFunctionName
   */
  deprecate(e, t) {
    const o = String(e), r = t ? String(t) : null;
    if (!this.deprecations.has(o)) {
      this.deprecations.set(o, r || null);
      let s = `${o} has been deprecated and will be removed`;
      r && (s = `${s}. ${r}`), this.warning(s);
    }
  }
  /**
   * Logs an info message
   * @param {string} msg The message to log.
   * @param {...any} optArgs
   */
  info(e, ...t) {
    B.logLevel & F.INFO && this._log(String(e), p.INFO, t);
  }
  /**
   * Logs a debug message
   * @param {string} msg The message to log.
   * @param {...any} optArgs
   */
  debug(e, ...t) {
    B.logLevel & F.DEBUG && this._log(String(e), p.DEBUG, t);
  }
  /**
   * Alias for debug
   * @param {string} msg The message to log.
   * @param {...any} optArgs
   */
  log(e, ...t) {
    B.logLevel & F.DEBUG && this._log(String(e), p.DEBUG, t);
  }
  /**
   * Logs a message
   * @param {string} msg The message to log.
   * @param {LOG_LEVEL} level
   * @param {Array} optArgs
   * @private
   */
  _log(e, t, o) {
    let r = e;
    this.className && (r = `[${this.className}] ${r}`), console[G.get(t)](r, ...o), t & p.ERROR && (console.group(), console.trace(), console.groupEnd());
  }
}
const Z = /* @__PURE__ */ new Map();
function wt(n) {
  const e = new Et(n);
  return Z.set(n, e), e;
}
function O(n) {
  return Z.has(n) ? Z.get(n) : wt(n);
}
const H = "select_interaction_id";
function pt(n) {
  const e = new Ie({
    projection: ee.toJSON(),
    zIndex: Fe - 1
  });
  return Oe(e), e.activate().catch((t) => {
    O(S).error("Error activating simple editor layer", t);
  }), n.layers.add(e), e;
}
function pe(n) {
  return !!n && n.type === L.CREATE;
}
function x(n) {
  return !!n && n.type === L.SELECT;
}
function X(n) {
  return !!n && n.type === L.EDIT_GEOMETRY;
}
function Y(n) {
  if (!x(n))
    throw new Error("Session is not a SelectFeaturesSession");
}
function mt(n, e, t, o, r) {
  const s = [];
  return x(e) && s.push(
    e.featuresChanged.addEventListener((i) => {
      t.value = i;
    })
  ), pe(e) && (s.push(
    e.featureCreated.addEventListener((i) => {
      var d, y;
      t.value = [i];
      const l = ((d = r == null ? void 0 : r.getStyle()) == null ? void 0 : d.clone()) || o.style.style.clone(), a = r == null ? void 0 : r.getProperties();
      a == null || delete a.geometry, a && n.maps.activeMap instanceof te && (a.olcs_altitudeMode = "clampToGround"), t.value[0].setStyle(l);
      const u = Ne(l);
      (y = u.text) != null && y.text && (u.label = Array.isArray(u.text.text) ? u.text.text.map(String).join("") : u.text.text), t.value[0][Ae] = new Re(
        u
      ), a && Object.keys(a).length && t.value[0].setProperties(a);
    }),
    () => {
      n.maps.eventHandler.featureInteraction.pullPickedPosition = 0;
    }
  ), s.push(
    e.creationFinished.addEventListener(() => {
      t.value = [r];
    })
  )), () => {
    s.forEach((i) => {
      i();
    });
  };
}
function St(n, e) {
  let t;
  e.type === L.EDIT_FEATURES ? t = (s) => {
    e.setFeatures(s);
  } : X(e) && (t = (s) => {
    e.setFeature(s[0]);
  });
  const o = n.featuresChanged.addEventListener(t), r = n.stopped.addEventListener(() => {
    e.stop();
  });
  return () => {
    o(), r();
  };
}
function bt(n) {
  const e = W(null), t = W(null), o = W([]), r = pt(n), s = W(r);
  let i, l = () => {
  }, a = () => {
  }, u = () => {
  }, d = () => {
  };
  function y(g) {
    var h, c;
    u(), l(), o.value = [], (c = (h = e.value) == null ? void 0 : h.stop) == null || c.call(h), e.value = g, e.value ? (u = e.value.stopped.addEventListener(
      () => {
        y(null);
      }
    ), l = mt(
      n,
      e.value,
      o,
      s.value,
      i
    )) : (u = () => {
    }, l = () => {
    });
  }
  async function m(g, h) {
    var w, b, C, N, A;
    d(), a(), (b = (w = t.value) == null ? void 0 : w.stop) == null || b.call(w);
    const c = (g == null ? void 0 : g()) || null;
    if (c) {
      await We();
      const k = X(c) ? q.SINGLE : q.MULTI;
      x(e.value) ? e.value.setMode(k) : y(
        ie(
          n,
          s.value,
          H,
          k
        )
      ), Y(e.value), d = c.stopped.addEventListener(
        () => m(null)
      ), a = St(
        e.value,
        c
      ), h ? await ((C = e.value) == null ? void 0 : C.setCurrentFeatures(h)) : X(c) ? c.setFeature((N = e.value) == null ? void 0 : N.currentFeatures[0]) : c.setFeatures((A = e.value) == null ? void 0 : A.currentFeatures);
    } else
      d = () => {
      }, a = () => {
      };
    t.value = c;
  }
  const f = P(s, () => {
    y(null), s.value || (s.value = r);
  });
  let E = {};
  const T = n.maps.mapActivated.addEventListener((g) => {
    i && (i = void 0), g.className === D.className ? E = { olcs_altitudeMode: "absolute" } : E = {};
  });
  return {
    currentSession: e,
    currentEditSession: t,
    currentFeatures: o,
    currentLayer: s,
    startCreateSession(g) {
      var b;
      if (!(i != null && i.getGeometry()) || g !== ((b = i.getGeometry()) == null ? void 0 : b.getType())) {
        let C;
        const N = `draw.create.${g}`;
        switch (g) {
          case v.Point:
            C = new Ye([]);
            break;
          case v.LineString:
            C = new Xe([]);
            break;
          default:
            C = new Ze([]);
            break;
        }
        i = new Ee({
          geometry: C,
          ...E
        }), i.setId(N);
      }
      const h = Me(
        n,
        s.value,
        g
      ), c = i.on(
        "propertychange",
        ({ key: C }) => {
          C === "olcs_altitudeMode" && (h.featureAltitudeMode = i == null ? void 0 : i.get(C));
        }
      ), w = h.stopped.addEventListener(() => {
        J(c), w();
      });
      y(h), o.value = [i], n.maps.eventHandler.featureInteraction.pullPickedPosition = 0.05;
    },
    startSelectSession(g) {
      x(e.value) || y(
        ie(
          n,
          s.value,
          H,
          void 0
        )
      ), Y(e.value), g && e.value.setCurrentFeatures(g).catch((h) => {
        O(S).error(
          "Error setting current features in select session",
          h
        );
      });
    },
    async startEditSession(g) {
      await m(
        () => _e(
          n,
          s.value,
          H
        ),
        g
      );
    },
    async startTransformSession(g, h) {
      await m(
        () => ke(
          n,
          s.value,
          H,
          g
        ),
        h
      );
    },
    async stop() {
      y(null), await m(null);
    },
    async stopEditing() {
      await m(null), x(e.value) && e.value.setMode(q.MULTI);
    },
    async placeCurrentFeaturesOnTerrain() {
      const g = n.maps.activeMap, h = await Promise.all(
        // XXX do this in one go: get all coordiantes first, then place them onto terrain
        o.value.map(async (w) => {
          let b = 0;
          const C = w.getGeometry();
          if ((g instanceof K || g instanceof D) && C) {
            const N = Te(C), A = structuredClone(N), { terrainProvider: k } = g.getScene();
            if (!k || !k.availability)
              return 0;
            await xe(
              k,
              A,
              ee,
              A
            ), b = N.reduce((re, Se, be) => {
              const oe = A[be][2] - Se[2];
              return oe > re ? oe : re;
            }, -1 / 0);
          }
          return b;
        })
      ), c = Math.max(...h);
      Number.isFinite(c) && c !== 0 && (this.startTransformSession(I.TRANSLATE), t.value.translate(
        0,
        0,
        c
      ));
    },
    getDefaultLayer() {
      return r;
    },
    destroy() {
      y(null), T(), f(), n.layers.remove(r), r.destroy();
    }
  };
}
const Ct = {
  [v.Point]: "$vcsPoint",
  [v.Polygon]: "$vcsTriangle",
  [v.LineString]: "$vcsLine",
  [v.BBox]: "$vcsBoundingBox",
  [v.Circle]: "$vcsCircle"
};
function Lt(n) {
  const e = (r) => ({
    name: r,
    title: `draw.create.${r}`,
    icon: Ct[r]
  }), t = {
    type: et.SELECT,
    action: ne({
      name: "creation",
      currentIndex: 3,
      active: !1,
      async callback() {
        if (this.active)
          await n.stop();
        else {
          const r = this.tools[this.currentIndex].name;
          r === L.SELECT ? n.startSelectSession() : n.startCreateSession(r);
        }
      },
      selected(r) {
        if (r !== this.currentIndex) {
          this.currentIndex = r;
          const s = this.tools[this.currentIndex].name;
          s === L.SELECT ? n.startSelectSession() : n.startCreateSession(s);
        }
      },
      tools: [
        {
          name: L.SELECT,
          icon: "$vcsPointSelect",
          title: "draw.select"
        },
        e(v.Point),
        e(v.LineString),
        e(v.Polygon),
        e(v.Circle),
        e(v.BBox)
      ]
    })
  }, o = P(n.currentSession, () => {
    const r = n.currentSession.value;
    if (t.action.active = !!r, t.action.active) {
      const s = (r == null ? void 0 : r.type) === L.CREATE ? r.geometryType : L.SELECT, i = t.action.tools.findIndex(
        (l) => l.name === s
      );
      t.action.currentIndex !== i && (t.action.currentIndex = i);
    }
  });
  return {
    toolbox: t,
    destroy: o
  };
}
function Tt(n, e) {
  const { toolbox: t, destroy: o } = Lt(n), r = e.toolboxManager.add(t, S).id;
  let s = () => {
  };
  const i = () => {
    n.stop().catch((d) => {
      O(S).error("Error stopping current editor session", d);
    }), t.action.disabled = !0;
  }, l = (d) => {
    d != null && d.hasDepth ? t.action.disabled = !1 : i();
  }, a = (d) => {
    s(), d instanceof te || d instanceof K || d instanceof ye ? t.action.disabled = !1 : d instanceof D ? (s = d.currentImageChanged.addEventListener(l), l(d.currentPanoramaImage)) : i();
  }, u = e.maps.mapActivated.addEventListener(a);
  return a(e.maps.activeMap), () => {
    e.toolboxManager.remove(r), o(), u(), s();
  };
}
function xt(n) {
  const { currentSession: e, currentEditSession: t, currentLayer: o, currentFeatures: r } = n, s = n.getDefaultLayer();
  function i(a) {
    var u;
    if (((u = a.target) == null ? void 0 : u.tagName) !== "INPUT")
      switch (a.code) {
        case "Escape":
          t.value ? t.value.stop() : x(e.value) && e.value.currentFeatures.length && e.value.clearSelection();
          break;
        case "Delete":
          if (o.value === s && x(e.value) && e.value.currentFeatures.length) {
            const d = e.value.currentFeatures.map(
              (y) => y.getId()
            );
            e.value.clearSelection(), o.value.removeFeaturesById(d);
          }
          break;
      }
  }
  function l(a) {
    var u, d, y;
    if (((u = a.target) == null ? void 0 : u.tagName) !== "INPUT")
      switch (a.code) {
        case "Escape":
          o.value.removeFeaturesById([
            r.value[0].getId()
          ]), (d = e.value) == null || d.finish();
          break;
        case "Enter":
          (y = e.value) == null || y.finish();
          break;
      }
  }
  return pe(e.value) ? (window.addEventListener("keydown", l), () => {
    window.removeEventListener("keydown", l);
  }) : x(e.value) ? (window.addEventListener("keydown", i), () => {
    window.removeEventListener("keydown", i);
  }) : () => {
  };
}
function Mt(n) {
  let e = () => {
  };
  const t = P(n.currentSession, (o) => {
    e(), o ? e = xt(n) : e = () => {
    };
  });
  return () => {
    e(), t();
  };
}
const $ = "DrawPluginMainWindow", V = ve();
function me(n, e) {
  var r;
  const t = e.plugins.getByKey(S), o = (r = t == null ? void 0 : t.config) == null ? void 0 : r.altitudeModes;
  return {
    component: nt,
    provides: { manager: n },
    state: {
      headerTitle: V,
      styles: { width: "280px", height: "auto" },
      infoUrlCallback: e.getHelpUrlCallback("tools/drawingTool.html")
    },
    props: { altitudeModes: o }
  };
}
function It(n, e) {
  let t = () => {
  };
  function o() {
    var l;
    t();
    const i = n.currentFeatures.value;
    if (i.length > 1)
      V.value = `(${i.length}) Features`;
    else if (((l = n.currentSession.value) == null ? void 0 : l.type) === L.CREATE) {
      const { geometryType: a } = n.currentSession.value;
      V.value = `draw.create.${a}`;
    } else if (i.length) {
      const a = i[0].on(
        "propertychange",
        ({ key: u }) => {
          u === "title" && (V.value = i[0].get(u));
        }
      );
      t = () => {
        J(a);
      }, V.value = i[0].get("title");
    }
  }
  const r = P(n.currentFeatures, (i) => {
    var a, u;
    const l = (a = i[0]) == null ? void 0 : a.getId();
    l && !((u = n.currentLayer.value) != null && u.getFeatureById(l)) ? e.windowManager.has($) ? e.windowManager.bringWindowToTop($) : e.windowManager.add(
      {
        ...me(n, e),
        id: $,
        parentId: "category-manager",
        slot: tt.DYNAMIC_CHILD
      },
      S
    ) : e.windowManager.remove($), o();
  }), s = e.windowManager.removed.addEventListener(
    async (i) => {
      var a, u, d;
      const l = (a = n.currentFeatures.value[0]) == null ? void 0 : a.getId();
      i.id === $ && ((u = n.currentSession.value) == null ? void 0 : u.type) === L.CREATE && (n.currentFeatures.value.length === 0 || !l || !((d = n.currentLayer.value) != null && d.getFeatureById(l))) && await n.stop();
    }
  );
  return () => {
    r(), t(), s();
  };
}
function Ft(n, e, t, o) {
  const r = $e();
  let s = () => {
  };
  const i = (l) => {
    var u, d, y;
    const a = [];
    if (l.feature && l.feature[De] === e.currentLayer.value.name) {
      const m = e.currentFeatures.value.includes(
        l.feature
      ), f = (u = n.maps.activeMap) == null ? void 0 : u.className, E = m && ((d = e.currentSession.value) == null ? void 0 : d.type) === L.CREATE || f === D.className && ((y = n.maps.activeMap.currentPanoramaImage) == null ? void 0 : y.hasDepth) !== !0;
      a.push({
        id: "draw-edit_properties",
        name: "draw.contextMenu.editProperties",
        disabled: E,
        icon: "$vcsEdit",
        callback() {
          m || e.startSelectSession([l.feature]), o();
        }
      }), a.push({
        id: "draw-edit_geometry",
        name: "draw.geometry.edit",
        disabled: E,
        icon: "$vcsEditVertices",
        callback() {
          e.startEditSession(l.feature).catch((c) => {
            O(S).error("Error starting edit session", c);
          });
        }
      });
      const T = m ? e.currentFeatures.value : [l.feature], g = new Set(
        T.map(
          (c) => {
            var w, b;
            return ((w = c.getGeometry()) == null ? void 0 : w.get("_vcsGeomType")) ?? ((b = c.getGeometry()) == null ? void 0 : b.getType()) ?? v.Point;
          }
        )
      );
      if (rt(
        g,
        T,
        e.currentLayer.value,
        f === K.className || f === D.className
      ).forEach((c) => {
        a.push({
          id: `draw-${c}`,
          disabled: E,
          name: `draw.transform.${c}`,
          icon: ot[c],
          callback() {
            n.windowManager.has($) || o(), e.startTransformSession(c, T).catch((w) => {
              O(S).error("Error starting transform session", w);
            });
          }
        });
      }), a.push({
        disabled: E,
        name: "draw.contextMenu.exportSelection",
        icon: "$vcsExport",
        callback() {
          const c = {
            writeStyle: !0,
            embedIcons: !0,
            prettyPrint: !0,
            writeId: !0
          }, w = he(
            {
              features: T,
              vcsMeta: e.currentLayer.value.getVcsMeta(c)
            },
            c
          );
          we(w, "drawings.json");
        }
      }), a.push({
        name: "draw.contextMenu.removeSelection",
        icon: "$vcsTrashCan",
        disabled: E,
        callback() {
          e.currentLayer.value.removeFeaturesById(
            T.map((c) => c.getId())
          );
        }
      }), !m) {
        const c = l.feature.getId();
        s = n.contextMenuManager.closed.addEventListener(() => {
          s(), e.currentFeatures.value.includes(
            l.feature
          ) || e.currentLayer.value.featureVisibility.unHighlight([
            c
          ]);
        }), e.currentLayer.value.featureVisibility.highlight({
          [c]: r
        });
      }
    }
    return a;
  };
  return n.contextMenuManager.addEventHandler(i, t), () => {
    n.contextMenuManager.removeHandler(i), s();
  };
}
function Ot(n, e) {
  const t = {
    writeStyle: !0,
    embedIcons: !0,
    prettyPrint: !0,
    writeId: !0
  }, o = he(
    {
      features: n,
      vcsMeta: e.getVcsMeta(t)
    },
    t
  );
  we(o, "drawings.json");
}
function de(n) {
  const e = n.getGeometry();
  return (e == null ? void 0 : e.get("_vcsGeomType")) ?? (e == null ? void 0 : e.getType()) ?? "Unknown";
}
function Nt(n, e) {
  const t = de(n);
  let o, r = 0;
  const s = new Set(
    e.getFeatures().filter((i) => de(i) === t).map((i) => i.get("title"))
  );
  do
    r += 1, s.has(`${t}-${r}`) || (o = `${t}-${r}`);
  while (!o);
  n.set("title", o, !0);
}
class Q extends Pe {
  constructor(t) {
    super(t);
    j(this, "categoryType");
    j(this, "_layer");
    // eslint-disable-next-line class-methods-use-this
    j(this, "_layerListeners", () => {
    });
    this.categoryType = t.categoryType, this._layer = t.layer, this._updateLayerSource();
  }
  static get className() {
    return "SimpleEditorCategory";
  }
  _updateLayerSource() {
    this._layerListeners();
    const t = this._layer.getSource();
    [...this.collection].forEach((r) => {
      this._layer.getFeatureById(r.name) || this._itemAdded(r);
    });
    const o = [
      t.on("removefeature", ({ feature: r }) => {
        const s = this.collection.getByKey(r == null ? void 0 : r.getId());
        s && this.collection.remove(s);
      }),
      t.on("addfeature", ({ feature: r }) => {
        r && !this.collection.hasKey(r.getId()) && (r.get("title") || Nt(r, this._layer), this.collection.add({
          name: String(r.getId()),
          feature: r
        }));
      })
    ];
    this._layerListeners = () => {
      J(o);
    };
  }
  mergeOptions(t) {
    super.mergeOptions(t), this._layer = t.layer, this._updateLayerSource();
  }
  _itemAdded(t) {
    if (!this._layer.getFeatureById(t.name)) {
      let { feature: o } = t;
      if (!(o instanceof Ee)) {
        const r = se(o);
        o = Array.isArray(r) ? r[0] : r;
      }
      o.setId(t.name), this._layer.addFeatures([o]);
    }
  }
  _itemRemoved(t) {
    this._layer.getFeatureById(t.name) && this._layer.removeFeaturesById([t.name]);
  }
  // eslint-disable-next-line class-methods-use-this
  _deserializeItem(t) {
    const { features: o } = se(t.feature);
    return o[0] && (t.feature = o[0]), Promise.resolve(t);
  }
  // eslint-disable-next-line class-methods-use-this
  _serializeItem(t) {
    return {
      name: t.name,
      feature: Be(t.feature)
    };
  }
}
function Rt(n, e, t, o, r) {
  r.title = t.feature.get("title") ?? "Object";
  const s = e.getDefaultLayer();
  let i = !!s.featureVisibility.hiddenObjects[t.name];
  const l = ne({
    name: "hideAction",
    icon: i ? "$vcsCheckbox" : "$vcsCheckboxChecked",
    callback() {
      if (i)
        s.featureVisibility.showObjects([t.name]), i = !1, this.icon = "$vcsCheckboxChecked";
      else if (s.featureVisibility.hideObjects([t.name]), i = !0, this.icon = "$vcsCheckbox", e.currentFeatures.value.includes(t.feature)) {
        const f = e.currentFeatures.value.filter(
          (E) => E.getId() !== t.feature.getId()
        );
        Y(e.currentSession.value), e.currentSession.value.setCurrentFeatures(f).catch((E) => {
          O(S).error(
            "Error updating current features after hiding feature",
            E
          );
        });
      }
    }
  }), a = s.featureVisibility.changed.addEventListener(
    (f) => {
      (f.action === z.HIDE || f.action === z.SHOW) && f.ids.some((E) => E === r.name) && (i = !!s.featureVisibility.hiddenObjects[r.name], l.icon = i ? "$vcsCheckbox" : "$vcsCheckboxChecked");
    }
  );
  r.selectionChanged = (f) => {
    f && i && ce(l);
  }, r.titleChanged = (f) => {
    t.feature.set("title", f), r.title = f;
  }, r.actions.push(
    l,
    {
      name: "draw.category.zoomTo",
      async callback() {
        var E, T, g;
        const f = (T = (E = t.feature.getGeometry()) == null ? void 0 : E.getExtent) == null ? void 0 : T.call(E);
        if (f && !Qe(f)) {
          const h = Ve.createViewpointFromExtent(
            new Ge({
              coordinates: f,
              projection: ee.toJSON()
            })
          );
          h && (h.animate = !0, await ((g = n.maps.activeMap) == null ? void 0 : g.gotoViewpoint(h)));
        }
      }
    },
    {
      name: "draw.category.edit",
      callback() {
        i && ce(l), e.currentLayer.value !== s && (e.currentLayer.value = s), e.startEditSession(t.feature).catch((f) => {
          O(S).error("Error starting edit session for feature", f);
        });
      }
    }
  );
  let u = () => {
  };
  const d = (f) => {
    r.disabled = !(f != null && f.hasDepth);
  }, y = (f) => {
    u(), f instanceof te || f instanceof K || f instanceof ye ? r.disabled = !1 : f instanceof D ? (u = f.currentImageChanged.addEventListener(d), d(f.currentPanoramaImage)) : r.disabled = !0;
  }, m = n.maps.mapActivated.addEventListener(y);
  y(n.maps.activeMap), r.destroy = () => {
    a(), m(), u();
  };
}
function At(n, e, t) {
  let o = 0, r = 0;
  const s = P(e.selection, () => {
    var l;
    if (o < r) {
      o = r;
      return;
    }
    if (o === r) {
      o += 1;
      const { selection: a } = e;
      n.currentLayer.value !== t && (n.currentLayer.value = t), ((l = n.currentSession.value) == null ? void 0 : l.type) !== L.SELECT && a.value.length && n.startSelectSession(), x(n.currentSession.value) && n.currentSession.value.setCurrentFeatures(
        t.getFeaturesById(a.value.map((u) => u.name))
      ).catch((u) => {
        O(S).error(
          "Error updating current features from selection",
          u
        );
      }), a.value.forEach((u) => {
        t.featureVisibility.hiddenObjects[u.name] && t.featureVisibility.showObjects([u.name]);
      });
    }
  }), i = P(n.currentFeatures, () => {
    if (r < o) {
      r = o;
      return;
    }
    r === o && (r += 1, e.selection.value = e.items.value.filter(
      (l) => n.currentFeatures.value.find((a) => a.getId() === l.name)
    ));
  });
  return () => {
    s(), i();
  };
}
const fe = {
  all: "$vcsCheckboxChecked",
  none: "$vcsCheckbox",
  some: "$vcsCheckboxIndeterminate"
};
function ge(n) {
  const { hiddenObjects: e } = n.featureVisibility, t = n.getFeatures(), o = t.filter(
    (r) => !e[r.getId()]
  );
  return o.length === t.length ? "all" : o.length === 0 ? "none" : "some";
}
async function kt(n, e) {
  const t = n.getDefaultLayer();
  let o = ge(t);
  const r = ne({
    name: "hide-all",
    title: o === "all" ? "draw.category.hideAll" : "draw.category.showAll",
    icon: fe[o],
    callback() {
      var c, w, b;
      o === "all" && ((c = t.getFeatures()) != null && c.length) ? (t.featureVisibility.hideObjects(
        t.getFeatures().map((C) => C.getId())
      ), x(n.currentSession.value) && ((b = (w = n.currentSession.value).clearSelection) == null || b.call(w)), this.icon = "$vcsCheckbox", this.title = "draw.category.showAll") : (t.featureVisibility.clearHiddenObjects(), this.icon = "$vcsCheckboxChecked", this.title = "draw.category.hideAll");
    }
  });
  function s() {
    o = ge(t), r.icon = fe[o], r.title = o === "all" ? "draw.category.hideAll" : "draw.category.showAll";
  }
  const i = [
    t.source.on("addfeature", s),
    t.source.on("removefeature", s)
  ], l = [
    t.featureVisibility.changed.addEventListener((c) => {
      (c.action === z.HIDE || c.action === z.SHOW) && s();
    }),
    () => {
      J(i);
    }
  ], a = {
    type: Q.className,
    name: "Simple Drawing - shape",
    title: "draw.category.shape",
    featureProperty: "feature",
    layer: t,
    categoryType: 1
    /* SHAPE */
  }, { collectionComponent: u, category: d } = await e.categoryManager.requestCategory(
    a,
    S,
    { selectable: !0, renamable: !0, removable: !0, overflowCount: 3 }
  ), y = me(n, e), m = it(
    e,
    u,
    { editor: y, multiEditor: y }
  ), { action: f, destroy: E } = st(
    (c) => at(c, e, n.currentLayer.value, {
      setStyle: !0,
      setVcsMeta: !0
    }),
    e.windowManager,
    S,
    "category-manager"
  ), { action: T, destroy: g } = lt(
    m.selection,
    () => {
      Ot(
        n.currentFeatures.value,
        n.currentLayer.value
      );
    },
    S
  );
  m.addActions([
    f,
    T,
    { action: r, owner: S }
  ]), e.categoryManager.addMappingFunction(
    () => !0,
    Rt.bind(null, e, n),
    S,
    [d.name]
  ), d.collection.removed.addEventListener((c) => {
    if (n.currentFeatures.value.includes(c.feature)) {
      const w = n.currentFeatures.value.filter(
        (b) => b.getId() !== c.feature.getId()
      );
      n.currentFeatures.value = w;
    }
  });
  const h = At(n, m, t);
  return {
    destroy: () => {
      h(), l.forEach((c) => {
        c();
      }), e.categoryManager.removeOwner(S), g(), E();
    },
    editSelection: () => {
      m.selection.value.length === 1 ? m.openEditorWindow() : m.selection.value.length > 1 && m.openMultiEditorWindow();
    }
  };
}
function U() {
  return {
    altitudeModes: [
      "clampToGround",
      "clampToTerrain",
      "clampTo3DTiles",
      "absolute"
    ]
  };
}
const _t = /* @__PURE__ */ He({
  __name: "ConfigEditor",
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
  setup(n) {
    const e = n, t = e.getConfig(), o = ve({
      ...U(),
      ...structuredClone(t)
    }), r = [
      "clampToGround",
      "clampToTerrain",
      "clampTo3DTiles",
      "absolute",
      "relativeToGround",
      "relativeToTerrain",
      "relativeTo3DTiles"
    ].map((i) => ({
      value: i,
      title: `components.vectorProperties.${i}`
    }));
    function s() {
      e.setConfig(structuredClone(qe(o.value)));
    }
    return (i, l) => (ae(), le(
      M(ct),
      Ue({ ...i.$attrs, ...i.$props }, { onSubmit: s }),
      {
        default: R(() => [
          o.value ? (ae(), le(M(ut), {
            key: 0,
            heading: "draw.config.title",
            expandable: "",
            "start-open": !0
          }, {
            default: R(() => [
              _(M(gt), { class: "py-0 px-1" }, {
                default: R(() => [
                  _(M(yt), { "no-gutters": "" }, {
                    default: R(() => [
                      _(M(ue), null, {
                        default: R(() => [
                          _(M(dt), { "html-for": "altitudeModes" }, {
                            default: R(() => [
                              ze(
                                Ke(i.$t("draw.config.altitudeModes")),
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
                      _(M(ue), null, {
                        default: R(() => [
                          _(M(ft), {
                            modelValue: o.value.altitudeModes,
                            "onUpdate:modelValue": l[0] || (l[0] = (a) => o.value.altitudeModes = a),
                            items: M(r),
                            multiple: ""
                          }, null, 8, ["modelValue", "items"])
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
          })) : Je("v-if", !0)
        ]),
        _: 1
        /* STABLE */
      },
      16
      /* FULL_PROPS */
    ));
  }
});
function jt(n) {
  let e, t;
  const o = {
    ...U(),
    ...structuredClone(n)
  };
  return {
    get name() {
      return S;
    },
    get version() {
      return ht;
    },
    get mapVersion() {
      return vt;
    },
    get config() {
      return structuredClone(o);
    },
    async initialize(r) {
      t = bt(r);
      const s = Tt(t, r), i = It(t, r), l = Mt(t);
      r.categoryClassRegistry.registerClass(
        this[je],
        Q.className,
        Q
      );
      const { destroy: a, editSelection: u } = await kt(t, r), d = Ft(
        r,
        t,
        this.name,
        u
      );
      e = () => {
        s(), i(), a(), l(), d();
      };
    },
    getDefaultOptions: U,
    toJSON() {
      const r = U(), s = {};
      return (o.altitudeModes.length !== r.altitudeModes.length || o.altitudeModes.some(
        (i) => !r.altitudeModes.includes(i)
      )) && (s.altitudeModes = o.altitudeModes.slice()), s;
    },
    getConfigEditors() {
      return [
        {
          component: _t,
          title: "draw.config.title"
        }
      ];
    },
    i18n: {
      en: {
        draw: {
          create: {
            [v.Point]: "Draw points",
            [v.Polygon]: "Draw polygons",
            [v.LineString]: "Draw lines",
            [v.BBox]: "Draw bounding box",
            [v.Circle]: "Draw circles"
          },
          geometry: {
            edit: "Edit geometry"
          },
          transform: {
            [I.TRANSLATE]: "Translate features",
            [I.ROTATE]: "Rotate features",
            [I.SCALE]: "Scale features",
            [I.EXTRUDE]: "Extrude features"
          },
          select: "Select drawn objects",
          category: {
            shape: "Shapes",
            hideAll: "Hide all",
            showAll: "Show all",
            zoomTo: "Zoom to",
            edit: "Edit geometry"
          },
          contextMenu: {
            editProperties: "Edit properties",
            removeSelection: "Remove selection",
            exportSelection: "Export selection"
          },
          config: {
            title: "Draw configuration",
            altitudeModes: "Altitude modes"
          }
        }
      },
      de: {
        draw: {
          create: {
            [v.Point]: "Punkte zeichnen",
            [v.Polygon]: "Polygone zeichnen",
            [v.LineString]: "Linien zeichnen",
            [v.BBox]: "Bounding Box zeichnen",
            [v.Circle]: "Kreise zeichnen"
          },
          geometry: {
            edit: "Geometrie editieren"
          },
          transform: {
            [I.TRANSLATE]: "Objekt verschieben",
            [I.ROTATE]: "Objekt rotieren",
            [I.SCALE]: "Objekt skalieren",
            [I.EXTRUDE]: "Objekt extrudieren"
          },
          select: "Gezeichnete Objekte auswählen",
          category: {
            shape: "Formen",
            hideAll: "Alle ausblenden",
            showAll: "Alle einblenden",
            zoomTo: "Hin zoomen",
            edit: "Geometrie editieren"
          },
          contextMenu: {
            editProperties: "Eigenschaften editieren",
            removeSelection: "Selektion entfernen",
            exportSelection: "Selektion exportieren"
          },
          config: {
            title: "Zeichentooleinstellungen",
            altitudeModes: "Höhenmodi"
          }
        }
      }
    },
    destroy() {
      t && t.destroy(), e();
    }
  };
}
export {
  jt as default
};
