import { GeometryType as g, startCreateFeatureSession as fe, SessionType as m, startSelectFeaturesSession as X, SelectionMode as H, CesiumMap as K, getFlatCoordinateReferences as ge, TransformationMode as T, VectorLayer as ye, mercatorProjection as re, maxZIndex as he, markVolatile as ve, startEditGeometrySession as pe, startEditFeaturesSession as Ee, OpenlayersMap as J, getStyleOptions as me, vectorStyleSymbol as we, VectorStyleItem as Se, ObliqueMap as oe, getDefaultHighlightStyle as Le, vcsLayerName as Ce, writeGeoJSON as se, Category as be, parseGeoJSON as Z, writeGeoJSONFeature as Te, FeatureVisibilityAction as W, Viewpoint as Me, Extent as xe, moduleIdSymbol as Fe } from "../../../assets/core.js";
import { shallowRef as V, watch as N, nextTick as Oe, reactive as q, ref as ae, openBlock as Q, createBlock as ee, unref as b, mergeProps as Ie, withCtx as F, createVNode as O, createTextVNode as Ne, toDisplayString as Ae, createCommentVNode as Re, toRaw as _e } from "../../../assets/vue.js";
import { ol$geom$Polygon as ke, ol$geom$LineString as $e, ol$geom$Point as De, Feature as le, ol$Observable$unByKey as j, ol$extent$isEmpty as Be } from "../../../assets/ol.js";
import { ToolboxType as Ve, WindowSlot as Ge, VcsFeatureEditingWindow as Pe, getAllowedEditorTransformationModes as We, EditorTransformationIcons as je, downloadText as ce, makeEditorCollectionComponentClass as He, createListImportAction as Ue, importIntoLayer as ze, createListExportAction as Ke, createSupportedMapMappingFunction as Je, AbstractConfigEditor as qe, VcsFormSection as Ye, VcsLabel as Xe, VcsSelect as Ze } from "../../../assets/ui.js";
import { VContainer as Qe, VRow as et, VCol as te } from "../../../assets/vuetify.js";
const L = "@vcmap/draw", tt = "4.0.0", nt = "^6.2", G = "select_interaction_id";
function it(n) {
  const e = new ye({
    projection: re.toJSON(),
    zIndex: he - 1
  });
  return ve(e), e.activate(), n.layers.add(e), e;
}
function rt(n, e, t, r, i) {
  const o = [];
  return e.type === m.SELECT && o.push(
    e.featuresChanged.addEventListener((s) => {
      t.value = s;
    })
  ), e.type === m.CREATE && (o.push(
    e.featureCreated.addEventListener((s) => {
      var d, y;
      t.value = [s];
      const a = ((d = i.getStyle()) == null ? void 0 : d.clone()) || r.style.style.clone(), l = i.getProperties();
      delete l.geometry, n.maps.activeMap instanceof J && (l.olcs_altitudeMode = "clampToGround"), t.value[0].setStyle(a);
      const u = me(a);
      (y = u.text) != null && y.text && (u.label = u.text.text), t.value[0][we] = new Se(
        u
      ), Object.keys(l).length && t.value[0].setProperties(l);
    }),
    () => {
      n.maps.eventHandler.featureInteraction.pullPickedPosition = 0;
    }
  ), o.push(
    e.creationFinished.addEventListener(() => {
      t.value = [i];
    })
  )), () => {
    o.forEach((s) => s());
  };
}
function ot(n, e) {
  let t;
  e.type === m.EDIT_FEATURES ? t = (o) => {
    e.setFeatures(o);
  } : e.type === m.EDIT_GEOMETRY && (t = (o) => {
    e.setFeature(o[0]);
  });
  const r = n.featuresChanged.addEventListener(t), i = n.stopped.addEventListener(e.stop);
  return () => {
    r(), i();
  };
}
function st(n) {
  const e = V(null), t = V(null), r = V([]);
  let i;
  const o = it(n), s = V(o);
  let a = () => {
  }, l = () => {
  }, u = () => {
  }, d = () => {
  };
  function y(f) {
    var h, c;
    u(), a(), r.value = [], (c = (h = e.value) == null ? void 0 : h.stop) == null || c.call(h), e.value = f, e.value ? (u = e.value.stopped.addEventListener(y), a = rt(
      n,
      e.value,
      r,
      s.value,
      i
    )) : (u = () => {
    }, a = () => {
    });
  }
  async function w(f, h) {
    var E, v, C, A, R, _;
    d(), l(), (v = (E = t.value) == null ? void 0 : E.stop) == null || v.call(E);
    const c = (f == null ? void 0 : f()) || null;
    if (c) {
      await Oe();
      const B = c.type === m.EDIT_GEOMETRY ? H.SINGLE : H.MULTI;
      ((C = e.value) == null ? void 0 : C.type) !== m.SELECT ? y(
        X(
          n,
          s.value,
          G,
          B
        )
      ) : e.value.setMode(B), d = c.stopped.addEventListener(
        w
      ), l = ot(
        e.value,
        c
      ), h ? await ((A = e.value) == null ? void 0 : A.setCurrentFeatures(h)) : c.type === m.EDIT_GEOMETRY ? c.setFeature((R = e.value) == null ? void 0 : R.currentFeatures[0]) : c.setFeatures((_ = e.value) == null ? void 0 : _.currentFeatures);
    } else
      d = () => {
      }, l = () => {
      };
    t.value = c;
  }
  const S = N(s, () => {
    y(null), s.value || (s.value = o);
  });
  return {
    currentSession: e,
    currentEditSession: t,
    currentFeatures: r,
    currentLayer: s,
    startCreateSession(f) {
      var E;
      if (!(i != null && i.getGeometry()) || f !== ((E = i.getGeometry()) == null ? void 0 : E.getType())) {
        let v;
        const C = `drawing.create.${f}`;
        switch (f) {
          case g.Point:
            v = new De([]);
            break;
          case g.LineString:
            v = new $e([]);
            break;
          default:
            v = new ke([]);
            break;
        }
        i = new le({ geometry: v }), i.setId(C);
      }
      const h = fe(
        n,
        s.value,
        f
      ), c = i.on(
        "propertychange",
        ({ key: v }) => {
          v === "olcs_altitudeMode" && (h.featureAltitudeMode = i.get(v));
        }
      );
      h.stopped.addEventListener(() => {
        j(c);
      }), y(h), r.value = [i], n.maps.eventHandler.featureInteraction.pullPickedPosition = 0.05;
    },
    startSelectSession(f) {
      var h, c;
      ((h = t.value) == null ? void 0 : h.type) !== m.SELECT && y(
        X(
          n,
          s.value,
          G,
          void 0
        )
      ), f && ((c = e.value) == null || c.setCurrentFeatures(f));
    },
    async startEditSession(f) {
      await w(
        () => pe(
          n,
          s.value,
          G
        ),
        f
      );
    },
    async startTransformSession(f, h) {
      await w(
        () => Ee(
          n,
          s.value,
          G,
          f
        ),
        h
      );
    },
    async stop() {
      y(null), await w(null);
    },
    async stopEditing() {
      var f;
      await w(null), ((f = e == null ? void 0 : e.value) == null ? void 0 : f.type) === m.SELECT && e.value.setMode(H.MULTI);
    },
    async placeCurrentFeaturesOnTerrain() {
      const f = n.maps.activeMap, h = await Promise.all(
        // XXX do this in one go: get all coordiantes first, then place them onto terrain
        r.value.map(async (E) => {
          let v = 0;
          const C = E.getGeometry();
          if (f instanceof K && C) {
            const A = ge(C), R = structuredClone(A);
            await f.getHeightFromTerrain(R), v = A.reduce((_, B, de) => {
              const Y = R[de][2] - B[2];
              return Y > _ ? Y : _;
            }, -1 / 0);
          }
          return v;
        })
      ), c = Math.max(...h);
      Number.isFinite(c) && c !== 0 && (this.startTransformSession(T.TRANSLATE), t.value.translate(0, 0, c));
    },
    getDefaultLayer() {
      return o;
    },
    destroy() {
      y(null), S(), n.layers.remove(o), o.destroy();
    }
  };
}
const p = {
  OFF: 1,
  ERROR: 2,
  WARN: 4,
  INFO: 8,
  DEBUG: 16
}, M = {
  ERROR: 0,
  WARN: 0,
  INFO: 0,
  DEBUG: 0
};
M.ERROR = p.ERROR | p.WARN | p.INFO | p.DEBUG;
M.WARN = p.WARN | p.INFO | p.DEBUG;
M.INFO = p.INFO | p.DEBUG;
M.DEBUG = p.DEBUG;
const k = {
  useTimestamp: !1,
  logLevel: p.INFO
}, D = /* @__PURE__ */ new Map();
D.set(p.ERROR, "error");
D.set(p.WARN, "warn");
D.set(p.INFO, "info");
D.set(p.DEBUG, "log");
class at {
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
    k.logLevel & M.ERROR && this._log(String(e), p.ERROR, t);
  }
  /**
   * Logs a warning message
   * @param {string} msg The message to log.
   * @param {...any} optArgs
   */
  warning(e, ...t) {
    k.logLevel & M.WARN && this._log(String(e), p.WARN, t);
  }
  /**
   * Deprecate a function. deprecations are stored on the logger
   * @param {string} functionName
   * @param {string=} alternativeFunctionName
   */
  deprecate(e, t) {
    const r = String(e), i = t ? String(t) : null;
    if (!this.deprecations.has(r)) {
      this.deprecations.set(r, i || null);
      let o = `${r} has been deprecated and will be removed`;
      i && (o = `${o}. ${i}`), this.warning(o);
    }
  }
  /**
   * Logs an info message
   * @param {string} msg The message to log.
   * @param {...any} optArgs
   */
  info(e, ...t) {
    k.logLevel & M.INFO && this._log(String(e), p.INFO, t);
  }
  /**
   * Logs a debug message
   * @param {string} msg The message to log.
   * @param {...any} optArgs
   */
  debug(e, ...t) {
    k.logLevel & M.DEBUG && this._log(String(e), p.DEBUG, t);
  }
  /**
   * Alias for debug
   * @param {string} msg The message to log.
   * @param {...any} optArgs
   */
  log(e, ...t) {
    k.logLevel & M.DEBUG && this._log(String(e), p.DEBUG, t);
  }
  /**
   * Logs a message
   * @param {string} msg The message to log.
   * @param {LOG_LEVEL} level
   * @param {Array} optArgs
   * @private
   */
  _log(e, t, r) {
    let i = e;
    this.className && (i = `[${this.className}] ${i}`), console[D.get(t)](i, ...r), t & p.ERROR && (console.group(), console.trace(), console.groupEnd());
  }
}
const U = /* @__PURE__ */ new Map();
function lt(n) {
  const e = new at(n);
  return U.set(n, e), e;
}
function ct(n) {
  return U.has(n) ? U.get(n) : lt(n);
}
const ut = {
  [g.Point]: "$vcsPoint",
  [g.Polygon]: "$vcsTriangle",
  [g.LineString]: "$vcsLine",
  [g.BBox]: "$vcsBoundingBox",
  [g.Circle]: "$vcsCircle"
};
function dt(n) {
  const e = (i) => ({
    name: i,
    title: `drawing.create.${i}`,
    icon: ut[i]
  }), t = {
    type: Ve.SELECT,
    action: q({
      name: "creation",
      currentIndex: 3,
      active: !1,
      callback() {
        if (this.active)
          n.stop();
        else {
          const i = this.tools[this.currentIndex].name;
          i === m.SELECT ? n.startSelectSession() : n.startCreateSession(i);
        }
      },
      selected(i) {
        if (i !== this.currentIndex) {
          this.currentIndex = i;
          const o = this.tools[this.currentIndex].name;
          o === m.SELECT ? n.startSelectSession() : n.startCreateSession(o);
        }
      },
      tools: [
        {
          name: m.SELECT,
          icon: "$vcsPointSelect",
          title: "drawing.select"
        },
        e(g.Point),
        e(g.LineString),
        e(g.Polygon),
        e(g.Circle),
        e(g.BBox)
      ]
    })
  }, r = N(n.currentSession, () => {
    const i = n.currentSession.value;
    if (t.action.active = !!i, t.action.active) {
      const o = (i == null ? void 0 : i.type) === m.CREATE ? i.geometryType : m.SELECT, s = t.action.tools.findIndex((a) => a.name === o);
      t.action.currentIndex !== s && (t.action.currentIndex = s);
    }
  });
  return {
    toolbox: t,
    destroy: r
  };
}
function ft(n, e) {
  const { toolbox: t, destroy: r } = dt(n), i = e.toolboxManager.add(t, L).id, o = (a) => {
    a instanceof J || a instanceof K || a instanceof oe ? t.action.disabled = !1 : (n.stop().catch((l) => {
      ct(L).error(l);
    }), t.action.disabled = !0);
  }, s = e.maps.mapActivated.addEventListener(o);
  return o(e.maps.activeMap), () => {
    e.toolboxManager.remove(i), r(), s();
  };
}
function gt(n) {
  const { currentSession: e, currentEditSession: t, currentLayer: r, currentFeatures: i } = n, o = n.getDefaultLayer();
  function s(l) {
    var u, d;
    if (l.target.tagName !== "INPUT")
      switch (l.code) {
        case "Escape":
          t.value ? t.value.stop() : e.value.currentFeatures.length && e.value.clearSelection();
          break;
        case "Delete":
          if (r.value === o && ((d = (u = e.value) == null ? void 0 : u.currentFeatures) != null && d.length)) {
            const y = e.value.currentFeatures.map(
              (w) => w.getId()
            );
            e.value.clearSelection(), r.value.removeFeaturesById(y);
          }
          break;
      }
  }
  function a(l) {
    if (l.target.tagName !== "INPUT")
      switch (l.code) {
        case "Escape":
          r.value.removeFeaturesById([
            i.value[0].getId()
          ]), e.value.finish();
          break;
        case "Enter":
          e.value.finish();
          break;
      }
  }
  return e.value.type === m.CREATE ? (window.addEventListener("keydown", a), () => {
    window.removeEventListener("keydown", a);
  }) : e.value.type === m.SELECT ? (window.addEventListener("keydown", s), () => {
    window.removeEventListener("keydown", s);
  }) : () => {
  };
}
function yt(n) {
  let e = () => {
  };
  const t = N(n.currentSession, (r) => {
    e(), r ? e = gt(n) : e = () => {
    };
  });
  return () => {
    e(), t();
  };
}
const I = "DrawPluginMainWindow", $ = ae();
function ue(n, e) {
  var i;
  const t = e.plugins.getByKey(L), r = (i = t == null ? void 0 : t.config) == null ? void 0 : i.altitudeModes;
  return {
    component: Pe,
    provides: {
      manager: n
    },
    state: {
      headerTitle: $,
      styles: { width: "280px", height: "auto" },
      infoUrlCallback: e.getHelpUrlCallback("tools/drawingTool.html")
    },
    props: {
      altitudeModes: r
    }
  };
}
function ht(n, e) {
  let t = () => {
  };
  function r() {
    var a;
    t();
    const s = n.currentFeatures.value;
    if (s.length > 1)
      $.value = `(${s.length}) Features`;
    else if (((a = n.currentSession.value) == null ? void 0 : a.type) === m.CREATE)
      $.value = `drawing.create.${n.currentSession.value.geometryType}`;
    else if (s.length) {
      const l = s[0].on(
        "propertychange",
        ({ key: u }) => {
          u === "title" && ($.value = s[0].get(u));
        }
      );
      t = () => {
        j(l);
      }, $.value = s[0].get("title");
    }
  }
  const i = N(n.currentFeatures, (s) => {
    var a, l;
    s[0] && !((l = n.currentLayer.value) != null && l.getFeatureById((a = s[0]) == null ? void 0 : a.getId())) ? e.windowManager.has(I) ? e.windowManager.bringWindowToTop(I) : e.windowManager.add(
      {
        ...ue(n, e),
        id: I,
        parentId: "category-manager",
        slot: Ge.DYNAMIC_CHILD
      },
      L
    ) : e.windowManager.remove(I), r();
  }), o = e.windowManager.removed.addEventListener(
    (s) => {
      var a, l, u;
      s.id === I && ((a = n.currentSession.value) == null ? void 0 : a.type) === m.CREATE && (n.currentFeatures.value.length === 0 || !((u = n.currentLayer.value) != null && u.getFeatureById(
        (l = n.currentFeatures.value[0]) == null ? void 0 : l.getId()
      ))) && n.stop();
    }
  );
  return () => {
    i(), t(), o();
  };
}
function vt(n, e, t, r) {
  const i = Le();
  let o = () => {
  };
  const s = (a) => {
    var u, d;
    const l = [];
    if (a.feature && a.feature[Ce] === e.currentLayer.value.name) {
      const y = e.currentFeatures.value.includes(a.feature), w = y && ((u = e.currentSession.value) == null ? void 0 : u.type) === m.CREATE;
      l.push({
        id: "draw-edit_properties",
        name: "drawing.contextMenu.editProperties",
        disabled: w,
        icon: "$vcsEdit",
        callback() {
          y || e.startSelectSession([a.feature]), r();
        }
      }), l.push({
        id: "draw-edit_geometry",
        name: "drawing.geometry.edit",
        disabled: w,
        icon: "$vcsEditVertices",
        callback() {
          e.startEditSession(a.feature);
        }
      });
      const S = y ? e.currentFeatures.value : [a.feature], f = new Set(
        S.map(
          (c) => {
            var E, v;
            return ((E = c.getGeometry()) == null ? void 0 : E.get("_vcsGeomType")) ?? ((v = c.getGeometry()) == null ? void 0 : v.getType()) ?? g.Point;
          }
        )
      );
      if (We(
        f,
        S,
        e.currentLayer.value,
        ((d = n.maps.activeMap) == null ? void 0 : d.className) === "CesiumMap"
      ).forEach((c) => {
        l.push({
          id: `draw-${c}`,
          disabled: w,
          name: `drawing.transform.${c}`,
          icon: je[c],
          callback() {
            n.windowManager.has(I) || r(), e.startTransformSession(c, S);
          }
        });
      }), l.push({
        disabled: w,
        name: "drawing.contextMenu.exportSelection",
        icon: "$vcsExport",
        callback() {
          const c = {
            writeStyle: !0,
            embedIcons: !0,
            prettyPrint: !0,
            writeId: !0
          }, E = se(
            {
              features: S,
              vcsMeta: e.currentLayer.value.getVcsMeta(c)
            },
            c
          );
          ce(E, "drawings.json");
        }
      }), l.push({
        name: "drawing.contextMenu.removeSelection",
        icon: "$vcsTrashCan",
        disabled: w,
        callback() {
          e.currentLayer.value.removeFeaturesById(
            S.map((c) => c.getId())
          );
        }
      }), !y) {
        const c = a.feature.getId();
        o = n.contextMenuManager.closed.addEventListener(() => {
          o(), e.currentFeatures.value.includes(
            a.feature
          ) || e.currentLayer.value.featureVisibility.unHighlight([
            c
          ]);
        }), e.currentLayer.value.featureVisibility.highlight({
          [c]: i
        });
      }
    }
    return l;
  };
  return n.contextMenuManager.addEventHandler(s, t), () => {
    n.contextMenuManager.removeHandler(s), o();
  };
}
function pt(n, e) {
  const t = {
    writeStyle: !0,
    embedIcons: !0,
    prettyPrint: !0,
    writeId: !0
  }, r = se(
    {
      features: n,
      vcsMeta: e.getVcsMeta(t)
    },
    t
  );
  ce(r, "drawings.json");
}
const Et = {
  NONE: 0,
  SHAPE: 1,
  TEXT: 2,
  OBJECT: 3
};
function mt(n, e) {
  const t = n.getGeometry();
  let r = "Unknown";
  t && (r = t.get("_vcsGeomType") ?? t.getType());
  let i, o = 0;
  const s = new Set(
    e.getFeatures().filter((a) => a.getGeometry().getType() === r).map((a) => a.get("title"))
  );
  do
    o += 1, s.has(`${r}-${o}`) || (i = `${r}-${o}`);
  while (!i);
  n.set("title", i, !0);
}
class z extends be {
  static get className() {
    return "SimpleEditorCategory";
  }
  constructor(e) {
    super(e), this._layer = null, this._categoryType = e.categoryType, this._layerListeners = () => {
    }, this._setCurrentLayer(e.layer);
  }
  /**
   * @param {import("@vcmap/core").VectorLayer} layer
   */
  _setCurrentLayer(e) {
    this._layerListeners(), this._layer = e;
    const t = e.getSource();
    [...this.collection].forEach((i) => {
      this._layer.getFeatureById(i.name) || this._itemAdded(i);
    });
    const r = [
      t.on("removefeature", ({ feature: i }) => {
        const o = this.collection.getByKey(i.getId());
        o && this.collection.remove(o);
      }),
      t.on("addfeature", ({ feature: i }) => {
        this.collection.hasKey(i.getId()) || (i.get("title") || mt(i, e), this.collection.add({
          name: i.getId(),
          feature: i
        }));
      })
    ];
    this._layerListeners = () => {
      j(r);
    };
  }
  mergeOptions(e) {
    super.mergeOptions(e), this._setCurrentLayer(e.layer);
  }
  _itemAdded(e) {
    if (!this._layer.getFeatureById(e.name)) {
      let { feature: t } = e;
      if (!(t instanceof le)) {
        const r = Z(t);
        t = Array.isArray(r) ? r[0] : r;
      }
      t.setId(e.name), this._layer.addFeatures([t]);
    }
  }
  _itemRemoved(e) {
    this._layer.getFeatureById(e.name) && this._layer.removeFeaturesById([e.name]);
  }
  // eslint-disable-next-line class-methods-use-this
  async _deserializeItem(e) {
    const { features: t } = Z(e.feature);
    return t[0] && (e.feature = t[0]), e;
  }
  // eslint-disable-next-line class-methods-use-this
  _serializeItem(e) {
    return {
      name: e.name,
      feature: Te(e.feature)
    };
  }
}
function wt(n, e, t, r, i) {
  i.title = t.feature.get("title") ?? "Object";
  const o = e.getDefaultLayer();
  let s = o.featureVisibility.hiddenObjects[t.name];
  const a = q({
    name: "hideAction",
    icon: s ? "$vcsCheckbox" : "$vcsCheckboxChecked",
    callback() {
      if (s)
        o.featureVisibility.showObjects([t.name]), s = !1, this.icon = "$vcsCheckboxChecked";
      else if (o.featureVisibility.hideObjects([t.name]), s = !0, this.icon = "$vcsCheckbox", e.currentFeatures.value.includes(t.feature)) {
        const u = e.currentFeatures.value.filter(
          (d) => d.getId() !== t.feature.getId()
        );
        e.currentSession.value.setCurrentFeatures(u);
      }
    }
  }), l = o.featureVisibility.changed.addEventListener(
    (u) => {
      (u.action === W.HIDE || u.action === W.SHOW) && u.ids.some((d) => d === i.name) && (s = !!o.featureVisibility.hiddenObjects[i.name], a.icon = s ? "$vcsCheckbox" : "$vcsCheckboxChecked");
    }
  );
  i.selectionChanged = (u) => {
    u && s && a.callback();
  }, i.titleChanged = (u) => {
    t.feature.set("title", u), i.title = u;
  }, i.actions.push(
    a,
    {
      name: "drawing.category.zoomTo",
      async callback() {
        var d, y, w;
        const u = (y = (d = t.feature.getGeometry()) == null ? void 0 : d.getExtent) == null ? void 0 : y.call(d);
        if (u && !Be(u)) {
          const S = Me.createViewpointFromExtent(
            new xe({
              coordinates: u,
              projection: re.toJSON()
            })
          );
          S.animate = !0, await ((w = n.maps.activeMap) == null ? void 0 : w.gotoViewpoint(S));
        }
      }
    },
    {
      name: "drawing.category.edit",
      callback() {
        s && a.callback(), e.currentLayer.value !== o && (e.currentLayer.value = o), e.startEditSession(t.feature);
      }
    }
  ), i.destroy = () => {
    l();
  };
}
function St(n, e, t) {
  let r = 0, i = 0;
  const o = N(e.selection, () => {
    var a, l;
    if (r < i) {
      r = i;
      return;
    }
    if (r === i) {
      r += 1;
      const { selection: u } = e;
      n.currentLayer.value !== t && (n.currentLayer.value = t), ((a = n.currentSession.value) == null ? void 0 : a.type) !== m.SELECT && u.value.length && n.startSelectSession(), (l = n.currentSession.value) == null || l.setCurrentFeatures(
        t.getFeaturesById(u.value.map((d) => d.name))
      ), u.value.forEach((d) => {
        t.featureVisibility.hiddenObjects[d.name] && t.featureVisibility.showObjects([d.name]);
      });
    }
  }), s = N(n.currentFeatures, () => {
    if (i < r) {
      i = r;
      return;
    }
    i === r && (i += 1, e.selection.value = e.items.value.filter(
      (a) => n.currentFeatures.value.find((l) => l.getId() === a.name)
    ));
  });
  return () => {
    o(), s();
  };
}
const x = {
  ALL: "all",
  NONE: "none",
  SOME: "some"
}, ne = {
  [x.ALL]: "$vcsCheckboxChecked",
  [x.NONE]: "$vcsCheckbox",
  [x.SOME]: "$vcsCheckboxIndeterminate"
};
function ie(n) {
  const { hiddenObjects: e } = n.featureVisibility, t = n.getFeatures(), r = t.filter(
    (i) => !e[i.getId()]
  );
  return r.length === t.length ? x.ALL : r.length === 0 ? x.NONE : x.SOME;
}
async function Lt(n, e) {
  const t = n.getDefaultLayer();
  let r = ie(t);
  const i = q({
    name: "hide-all",
    title: r === x.ALL ? "drawing.category.hideAll" : "drawing.category.showAll",
    icon: ne[r],
    callback() {
      var c, E, v;
      r === x.ALL && ((c = t.getFeatures()) != null && c.length) ? (t.featureVisibility.hideObjects(
        t.getFeatures().map((C) => C.getId())
      ), n.currentFeatures.value && ((v = (E = n.currentSession.value).clearSelection) == null || v.call(E)), this.icon = "$vcsCheckbox", this.title = "drawing.category.showAll") : (t.featureVisibility.clearHiddenObjects(), this.icon = "$vcsCheckboxChecked", this.title = "drawing.category.hideAll");
    }
  });
  function o() {
    r = ie(t), i.icon = ne[r], i.title = r === x.ALL ? "drawing.category.hideAll" : "drawing.category.showAll";
  }
  const s = [
    t.source.on("addfeature", o),
    t.source.on("removefeature", o)
  ], a = [
    t.featureVisibility.changed.addEventListener((c) => {
      (c.action === W.HIDE || c.action === W.SHOW) && o();
    }),
    () => {
      j(s);
    }
  ], { collectionComponent: l, category: u } = (
    /** @type {{ collectionComponent: import("@vcmap/ui").CollectionComponentClass<Feature> }} */
    await e.categoryManager.requestCategory(
      {
        type: z.className,
        name: "Simple Drawing - shape",
        title: "drawing.category.shape",
        categoryType: Et.SHAPE,
        layer: t,
        featureProperty: "feature"
      },
      L,
      {
        selectable: !0,
        renamable: !0,
        removable: !0,
        overflowCount: 3
      }
    )
  ), d = ue(n, e);
  He(e, l, {
    editor: d,
    multiEditor: d
  });
  const { action: y, destroy: w } = Ue(
    (c) => ze(c, e, n.currentLayer.value, {
      setStyle: !0,
      setVcsMeta: !0
    }),
    e.windowManager,
    L,
    "category-manager"
  ), { action: S, destroy: f } = Ke(
    l.selection,
    () => {
      pt(
        n.currentFeatures.value,
        n.currentLayer.value
      );
    },
    L
  );
  l.addActions([
    y,
    S,
    { action: i, owner: L }
  ]), l.addItemMapping({
    mappingFunction: wt.bind(null, e, n),
    owner: L
  }), l.addItemMapping({
    mappingFunction: Je(
      [K.className, J.className, oe.className],
      e.maps
    ),
    owner: L
  }), u.collection.removed.addEventListener((c) => {
    if (n.currentFeatures.value.includes(c.feature)) {
      const E = n.currentFeatures.value.filter(
        (v) => v.getId() !== c.feature.getId()
      );
      n.currentFeatures.value = E;
    }
  });
  const h = St(n, l, t);
  return {
    destroy: () => {
      h(), a.forEach((c) => c()), e.categoryManager.removeOwner(L), f(), w();
    },
    editSelection: () => {
      l.selection.value.length === 1 ? l.openEditorWindow() : l.selection.value.length > 1 && l.openMultiEditorWindow();
    }
  };
}
function P() {
  return {
    altitudeModes: [
      "clampToGround",
      "clampToTerrain",
      "clampTo3DTiles",
      "absolute"
    ]
  };
}
const Ct = {
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
    const e = n, t = ae({ ...P(), ...e.getConfig() }), r = [
      "clampToGround",
      "clampToTerrain",
      "clampTo3DTiles",
      "absolute",
      "relativeToGround",
      "relativeToTerrain",
      "relativeTo3DTiles"
    ].map((o) => ({
      value: o,
      title: `components.vectorProperties.${o}`
    }));
    function i() {
      e.setConfig(structuredClone(_e(t.value)));
    }
    return (o, s) => (Q(), ee(
      b(qe),
      Ie({ ...o.$attrs, ...o.$props }, { onSubmit: i }),
      {
        default: F(() => [
          t.value ? (Q(), ee(b(Ye), {
            key: 0,
            heading: "drawing.config.title",
            expandable: "",
            "start-open": !0
          }, {
            default: F(() => [
              O(b(Qe), { class: "py-0 px-1" }, {
                default: F(() => [
                  O(b(et), { "no-gutters": "" }, {
                    default: F(() => [
                      O(b(te), null, {
                        default: F(() => [
                          O(b(Xe), { "html-for": "altitudeModes" }, {
                            default: F(() => [
                              Ne(
                                Ae(o.$t("drawing.config.altitudeModes")),
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
                      O(b(te), null, {
                        default: F(() => [
                          O(b(Ze), {
                            modelValue: t.value.altitudeModes,
                            "onUpdate:modelValue": s[0] || (s[0] = (a) => t.value.altitudeModes = a),
                            items: b(r),
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
          })) : Re("v-if", !0)
        ]),
        _: 1
        /* STABLE */
      },
      16
      /* FULL_PROPS */
    ));
  }
};
function Ot(n) {
  const e = { ...P(), ...structuredClone(n) };
  return {
    get name() {
      return L;
    },
    get version() {
      return tt;
    },
    get mapVersion() {
      return nt;
    },
    get config() {
      return structuredClone(e);
    },
    getDefaultOptions: P,
    toJSON() {
      const t = P(), r = {};
      return (e.altitudeModes.length !== t.altitudeModes.length || e.altitudeModes.some(
        (i) => !t.altitudeModes.includes(i)
      )) && (r.altitudeModes = e.altitudeModes.slice()), r;
    },
    getConfigEditors() {
      return [
        {
          title: "drawing.config.title",
          component: Ct
        }
      ];
    },
    _destroy: () => {
    },
    async initialize(t) {
      this._editorManager = st(t);
      const r = ft(this._editorManager, t), i = ht(this._editorManager, t), o = yt(this._editorManager);
      t.categoryClassRegistry.registerClass(
        this[Fe],
        z.className,
        z
      );
      const { destroy: s, editSelection: a } = await Lt(this._editorManager, t), l = vt(
        t,
        this._editorManager,
        this.name,
        a
      );
      this._destroy = () => {
        r(), i(), s(), o(), l();
      };
    },
    i18n: {
      en: {
        drawing: {
          create: {
            [g.Point]: "Draw points",
            [g.Polygon]: "Draw polygons",
            [g.LineString]: "Draw lines",
            [g.BBox]: "Draw bounding box",
            [g.Circle]: "Draw circles"
          },
          geometry: {
            edit: "Edit geometry"
          },
          transform: {
            [T.TRANSLATE]: "Translate features",
            [T.ROTATE]: "Rotate features",
            [T.SCALE]: "Scale features",
            [T.EXTRUDE]: "Extrude features"
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
        drawing: {
          create: {
            [g.Point]: "Punkte zeichnen",
            [g.Polygon]: "Polygone zeichnen",
            [g.LineString]: "Linien zeichnen",
            [g.BBox]: "Bounding Box zeichnen",
            [g.Circle]: "Kreise zeichnen"
          },
          geometry: {
            edit: "Geometrie editieren"
          },
          transform: {
            [T.TRANSLATE]: "Objekt verschieben",
            [T.ROTATE]: "Objekt rotieren",
            [T.SCALE]: "Objekt skalieren",
            [T.EXTRUDE]: "Objekt extrudieren"
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
      this._editorManager && (this._editorManager.destroy(), this._destroy());
    }
  };
}
export {
  Ot as default
};
