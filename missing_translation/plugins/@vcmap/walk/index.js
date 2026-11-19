import { Projection as q, VcsEvent as X, Viewpoint as ee, CesiumMap as P, vcsLayerName as te, CesiumTilesetLayer as ne } from "../../../assets/core.js";
import { ref as T, defineComponent as oe, inject as ie, watch as ae, onUnmounted as se, computed as B, resolveComponent as R, openBlock as le, createBlock as re, withCtx as l, createVNode as s, createElementVNode as C, toDisplayString as w, createTextVNode as H } from "../../../assets/vue.js";
import { Math as S, Cartesian2 as I, ScreenSpaceEventHandler as ce, ScreenSpaceEventType as $, Cartographic as ue, Cartesian3 as de, KeyboardEventModifier as G } from "../../../assets/cesium.js";
import { VcsLabel as ge, VcsTextField as me, VcsFormButton as pe, VcsSlider as fe, VcsHelp as he, WindowSlot as ve } from "../../../assets/ui.js";
import { VCol as we, VContainer as Ee, VRow as Re, VSheet as ke, VDivider as _e } from "../../../assets/vuetify.js";
const m = {
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
M.ERROR = m.ERROR | m.WARN | m.INFO | m.DEBUG;
M.WARN = m.WARN | m.INFO | m.DEBUG;
M.INFO = m.INFO | m.DEBUG;
M.DEBUG = m.DEBUG;
const N = {
  useTimestamp: !1,
  logLevel: m.INFO
}, b = /* @__PURE__ */ new Map();
b.set(m.ERROR, "error");
b.set(m.WARN, "warn");
b.set(m.INFO, "info");
b.set(m.DEBUG, "log");
class Se {
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
  error(t, ...n) {
    N.logLevel & M.ERROR && this._log(String(t), m.ERROR, n);
  }
  /**
   * Logs a warning message
   * @param {string} msg The message to log.
   * @param {...any} optArgs
   */
  warning(t, ...n) {
    N.logLevel & M.WARN && this._log(String(t), m.WARN, n);
  }
  /**
   * Deprecate a function. deprecations are stored on the logger
   * @param {string} functionName
   * @param {string=} alternativeFunctionName
   */
  deprecate(t, n) {
    const o = String(t), i = n ? String(n) : null;
    if (!this.deprecations.has(o)) {
      this.deprecations.set(o, i || null);
      let c = `${o} has been deprecated and will be removed`;
      i && (c = `${c}. ${i}`), this.warning(c);
    }
  }
  /**
   * Logs an info message
   * @param {string} msg The message to log.
   * @param {...any} optArgs
   */
  info(t, ...n) {
    N.logLevel & M.INFO && this._log(String(t), m.INFO, n);
  }
  /**
   * Logs a debug message
   * @param {string} msg The message to log.
   * @param {...any} optArgs
   */
  debug(t, ...n) {
    N.logLevel & M.DEBUG && this._log(String(t), m.DEBUG, n);
  }
  /**
   * Alias for debug
   * @param {string} msg The message to log.
   * @param {...any} optArgs
   */
  log(t, ...n) {
    N.logLevel & M.DEBUG && this._log(String(t), m.DEBUG, n);
  }
  /**
   * Logs a message
   * @param {string} msg The message to log.
   * @param {LOG_LEVEL} level
   * @param {Array} optArgs
   * @private
   */
  _log(t, n, o) {
    let i = t;
    this.className && (i = `[${this.className}] ${i}`), console[b.get(n)](i, ...o), n & m.ERROR && (console.group(), console.trace(), console.groupEnd());
  }
}
const O = /* @__PURE__ */ new Map();
function Me(e) {
  const t = new Se(e);
  return O.set(e, t), t;
}
function Ve(e) {
  return O.has(e) ? O.get(e) : Me(e);
}
const F = "@vcmap/walk", De = "2.0.1", ye = "^6.0", x = 85 / S.DEGREES_PER_RADIAN, Y = -x;
function Ae(e, t) {
  let n = e ? t - e : 0.016666666666666666;
  return (n <= 0 || n > 1) && (n = 1 / 60), n / (1 / 60);
}
function We(e, t, n) {
  const o = Number(
    (n - t).toFixed(2)
  );
  o !== 0 && e.moveUp(o);
}
function Z(e, t) {
  const n = e.ellipsoid.cartesianToCartographic(
    t.position
  ).height, o = e.getHeight(e.ellipsoid.cartesianToCartographic(t.position)) || 0;
  return n - o;
}
function Ce(e, t, n, o, i, c) {
  const r = e.getCesiumWidget(), f = e.getScene();
  if (!r || !f)
    return;
  const { canvas: h, camera: a } = r, g = 0.05, u = 1 / 30, k = 5, E = Ae(o, i);
  if (n.leftDown) {
    const { clientWidth: d, clientHeight: v } = h, { position: A, startPosition: _ } = n, L = (A.x - _.x) / d, V = -(A.y - _.y) / v;
    a.look(a.position, L * g * E);
    const W = V * g * E;
    a.pitch + W > Y && a.pitch + W < x && a.lookUp(W);
  }
  if (!t.size)
    return;
  const y = Z(f.globe, a);
  let p = y * u * E;
  t.has("ShiftLeft") && (p *= k), (t.has("KeyW") || t.has("ArrowUp")) && a.moveForward(p), (t.has("KeyS") || t.has("ArrowDown")) && a.moveBackward(p), (t.has("KeyA") || t.has("ArrowLeft")) && a.moveLeft(p), (t.has("KeyD") || t.has("ArrowRight")) && a.moveRight(p), We(a, y, c);
}
function Le(e, t) {
  var y;
  let n;
  const o = /* @__PURE__ */ new Set(), i = {
    startPosition: new I(),
    position: new I(),
    leftDown: !1
  }, c = e.maps.activeMap, { canvas: r } = c.getCesiumWidget();
  function f() {
    const p = new ce(r), d = (D) => {
      i.leftDown = !0, i.startPosition = I.clone(D.position), i.position = i.startPosition;
    }, v = () => {
      i.leftDown = !1;
    }, A = (D) => {
      i.position = D.endPosition;
    };
    function _(D, J) {
      const j = [];
      return [
        void 0,
        G.SHIFT,
        G.CTRL,
        G.ALT
      ].forEach(
        (U) => {
          p.setInputAction(J, D, U);
        },
        j.push(() => {
          p.removeInputAction(D);
        })
      ), () => {
        j.forEach((U) => U());
      };
    }
    const L = _(
      $.LEFT_DOWN,
      d
    ), V = _(
      $.LEFT_UP,
      v
    ), W = _(
      $.MOUSE_MOVE,
      A
    );
    return () => {
      L(), V(), W(), p.destroy();
    };
  }
  function h() {
    const p = (v) => {
      o.add(v.code);
    }, d = (v) => {
      o.delete(v.code);
    };
    return r.setAttribute("tabindex", "0"), r.onclick = (v) => {
      v.stopPropagation(), r.focus();
    }, r.onblur = () => o.clear(), r.focus(), r.addEventListener("keydown", p, !1), r.addEventListener("keyup", d, !1), () => {
      r.removeEventListener("keydown", p), r.removeEventListener("keyup", d), r.onclick = null, r.onblur = null;
    };
  }
  function a() {
    return e.overviewMap.mapClicked.addEventListener((p) => {
      var _, L;
      const d = (_ = c.getCesiumWidget()) == null ? void 0 : _.camera, { position: v } = p, A = (L = c.getScene()) == null ? void 0 : L.globe;
      if (d && v && A) {
        const V = q.mercatorToWgs84(v), W = A.getHeight(
          ue.fromDegrees(V[0], V[1])
        ) || 0, D = de.fromDegrees(
          V[0],
          V[1],
          W + t.value
        );
        d.setView({
          destination: D,
          orientation: {
            heading: d.heading,
            pitch: d.pitch,
            roll: 0
          }
        });
      }
    });
  }
  const g = f(), u = h(), k = (y = c.getCesiumWidget()) == null ? void 0 : y.clock.onTick.addEventListener((p) => {
    const d = p.currentTime.secondsOfDay;
    Ce(
      c,
      o,
      i,
      n,
      d,
      t.value
    ), n = d;
  }), E = a();
  return () => {
    g(), u(), k == null || k(), E == null || E();
  };
}
async function He(e, t, n) {
  var c, r;
  const { activeMap: o } = e.maps, i = (c = o == null ? void 0 : o.getViewpointSync()) == null ? void 0 : c.heading;
  if (i) {
    const f = new ee({
      groundPosition: [
        t[0],
        t[1],
        t[2] + n
      ],
      heading: i,
      distance: 0,
      pitch: 0,
      roll: 0,
      animate: !0
    });
    await ((r = e.maps.activeMap) == null ? void 0 : r.gotoViewpoint(f));
  }
}
function Ne(e, t) {
  var o;
  let n;
  e.maps.activeMap instanceof P ? n = e.maps.activeMap : n = e.maps.getByType("CesiumMap")[0], ((o = n.getCesiumWidget()) == null ? void 0 : o.camera.frustum).fov = t;
}
async function Fe(e, t) {
  var a;
  const n = new X(), o = T(1.6), i = ((a = e.maps.activeMap.getCesiumWidget()) == null ? void 0 : a.camera.frustum).fov;
  await He(e, t, o.value);
  let c = () => {
  };
  const r = e.maps.requestExclusiveMapControls(
    { apiCalls: !0, keyEvents: !0, pointerEvents: !0 },
    () => {
      c();
    }
  ), f = Le(
    e,
    o
  ), h = e.maps.mapActivated.addEventListener(() => {
    c();
  });
  return c = () => {
    h(), f(), r(), Ne(e, i), n.raiseEvent(), n.destroy(), c = () => {
    };
  }, {
    stop: c,
    stopped: n,
    relativeHeight: o
  };
}
function be(e, t) {
  var r, f;
  const n = e.maps.activeMap, o = (r = n.getCesiumWidget()) == null ? void 0 : r.camera, i = (f = n.getScene()) == null ? void 0 : f.globe;
  if (!o || !i)
    return;
  const c = Z(i, o);
  o.moveUp(t - c);
}
const Te = oe({
  name: "WalkWindow",
  components: {
    VcsLabel: ge,
    VcsTextField: me,
    VcsFormButton: pe,
    VcsSlider: fe,
    VcsHelp: he,
    VCol: we,
    VContainer: Ee,
    VRow: Re,
    VSheet: ke,
    VDivider: _e
  },
  setup() {
    var h;
    const e = ie("vcsApp"), t = e.plugins.getByKey(F), n = (h = e.maps.activeMap.getCesiumWidget()) == null ? void 0 : h.camera.frustum, o = T(n.fov * S.DEGREES_PER_RADIAN);
    ae(o, () => {
      n.fov = o.value / S.DEGREES_PER_RADIAN;
    });
    const i = T(0), c = T(0);
    function r({ map: a }) {
      var u;
      const g = (u = a.getCesiumWidget()) == null ? void 0 : u.camera;
      g && (i.value = g.heading * S.DEGREES_PER_RADIAN, c.value = g.pitch * S.DEGREES_PER_RADIAN);
    }
    e.maps.activeMap && r({ map: e.maps.activeMap });
    const f = e.maps.postRender.addEventListener(r);
    return se(() => {
      f();
    }), {
      viewHeight: B({
        get() {
          var a;
          return (a = t.walkSession) == null ? void 0 : a.relativeHeight.value;
        },
        set(a) {
          var u;
          const g = (u = t.walkSession) == null ? void 0 : u.relativeHeight;
          a && g && (g.value = a, be(e, a));
        }
      }),
      fov: o,
      heading: B({
        get() {
          return Math.round(i.value);
        },
        set(a) {
          var u;
          const g = (u = e.maps.activeMap.getCesiumWidget()) == null ? void 0 : u.camera;
          g && g.setView({
            orientation: {
              heading: a / S.DEGREES_PER_RADIAN,
              pitch: g.pitch,
              roll: 0
            }
          });
        }
      }),
      pitch: B({
        get() {
          return Math.round(c.value);
        },
        set(a) {
          var u;
          const g = (u = e.maps.activeMap.getCesiumWidget()) == null ? void 0 : u.camera;
          g && g.setView({
            orientation: {
              heading: g.heading,
              pitch: a / S.DEGREES_PER_RADIAN,
              roll: 0
            }
          });
        }
      }),
      async stop() {
        await t.stopWalkSession();
      },
      maxPitch: x * S.DEGREES_PER_RADIAN,
      minPitch: Y * S.DEGREES_PER_RADIAN
    };
  }
}), Ue = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [o, i] of t)
    n[o] = i;
  return n;
};
function Be(e, t, n, o, i, c) {
  const r = R("VcsHelp"), f = R("v-divider"), h = R("VcsLabel"), a = R("v-col"), g = R("VcsTextField"), u = R("v-row"), k = R("VcsSlider"), E = R("v-container"), y = R("VcsFormButton"), p = R("v-sheet");
  return le(), re(p, null, {
    default: l(() => [
      s(r, null, {
        default: l(() => [
          C("ul", null, [
            C(
              "li",
              null,
              w(e.$t("walk.navigation.move")),
              1
              /* TEXT */
            ),
            C(
              "li",
              null,
              w(e.$t("walk.navigation.boost")),
              1
              /* TEXT */
            ),
            C(
              "li",
              null,
              w(e.$t("walk.navigation.look")),
              1
              /* TEXT */
            )
          ])
        ]),
        _: 1
        /* STABLE */
      }),
      s(f),
      s(E, { class: "px-1 pt-0 pb-2" }, {
        default: l(() => [
          s(u, { "no-gutters": "" }, {
            default: l(() => [
              s(a, null, {
                default: l(() => [
                  s(h, { "html-for": "walk-viewing-height" }, {
                    default: l(() => [
                      H(
                        w(e.$t("walk.viewingHeight")),
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
              s(a, { cols: "4" }, {
                default: l(() => [
                  s(g, {
                    id: "walk-viewing-height",
                    type: "number",
                    unit: "m",
                    placeholder: "0",
                    min: "0.1",
                    max: "10000",
                    step: "0.1",
                    modelValue: e.viewHeight,
                    "onUpdate:modelValue": t[0] || (t[0] = (d) => e.viewHeight = d),
                    modelModifiers: { number: !0 }
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
                /* STABLE */
              })
            ]),
            _: 1
            /* STABLE */
          }),
          s(u, {
            "no-gutters": "",
            class: "pr-1"
          }, {
            default: l(() => [
              s(a, null, {
                default: l(() => [
                  s(h, { "html-for": "walk-viewing-angle" }, {
                    default: l(() => [
                      H(
                        w(e.$t("walk.viewingAngle")),
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
              s(a, { class: "d-flex justify-end align-center" }, {
                default: l(() => [
                  C(
                    "span",
                    null,
                    w(`${Math.round(e.fov)} °`),
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
          s(u, { "no-gutters": "" }, {
            default: l(() => [
              s(a, null, {
                default: l(() => [
                  s(k, {
                    modelValue: e.fov,
                    "onUpdate:modelValue": t[1] || (t[1] = (d) => e.fov = d),
                    min: "35",
                    max: "85",
                    step: "1"
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
                /* STABLE */
              })
            ]),
            _: 1
            /* STABLE */
          }),
          s(u, {
            "no-gutters": "",
            class: "pr-1"
          }, {
            default: l(() => [
              s(a, null, {
                default: l(() => [
                  s(h, { "html-for": "walk-heading" }, {
                    default: l(() => [
                      H(
                        w(e.$t("components.viewpoint.heading")),
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
              s(a, { class: "d-flex justify-end align-center" }, {
                default: l(() => [
                  C(
                    "span",
                    null,
                    w(`${e.heading} °`),
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
          s(u, { "no-gutters": "" }, {
            default: l(() => [
              s(a, null, {
                default: l(() => [
                  s(k, {
                    modelValue: e.heading,
                    "onUpdate:modelValue": t[2] || (t[2] = (d) => e.heading = d),
                    min: "1",
                    max: "360"
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
                /* STABLE */
              })
            ]),
            _: 1
            /* STABLE */
          }),
          s(u, {
            "no-gutters": "",
            class: "pr-1"
          }, {
            default: l(() => [
              s(a, null, {
                default: l(() => [
                  s(h, { "html-for": "walk-pitch" }, {
                    default: l(() => [
                      H(
                        w(e.$t("components.viewpoint.pitch")),
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
              s(a, { class: "d-flex justify-end align-center" }, {
                default: l(() => [
                  C(
                    "span",
                    null,
                    w(`${e.pitch} °`),
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
          s(u, { "no-gutters": "" }, {
            default: l(() => [
              s(a, null, {
                default: l(() => [
                  s(k, {
                    modelValue: e.pitch,
                    "onUpdate:modelValue": t[3] || (t[3] = (d) => e.pitch = d),
                    min: e.minPitch,
                    max: e.maxPitch
                  }, null, 8, ["modelValue", "min", "max"])
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
      s(f),
      s(E, { class: "px-2 pt-2 pb-1" }, {
        default: l(() => [
          s(u, { "no-gutters": "" }, {
            default: l(() => [
              s(a, { class: "d-flex justify-end" }, {
                default: l(() => [
                  s(y, {
                    variant: "filled",
                    onClick: e.stop,
                    tooltip: "walk.stopMode"
                  }, {
                    default: l(() => [
                      H(
                        w(e.$t("walk.stop")),
                        1
                        /* TEXT */
                      )
                    ]),
                    _: 1
                    /* STABLE */
                  }, 8, ["onClick"])
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
  });
}
const Ie = /* @__PURE__ */ Ue(Te, [["render", Be]]), K = "walk-plugin-window";
function z(e) {
  e.windowManager.add(
    {
      id: K,
      component: Ie,
      slot: ve.DYNAMIC_RIGHT,
      state: {
        headerTitle: "walk.headerTitle",
        headerIcon: "$vcsWalking",
        styles: { width: "280px", height: "auto" },
        infoUrlCallback: e.getHelpUrlCallback(
          "components/mapspace.html#id_3DView_walkmode"
        )
      }
    },
    F
  );
}
function $e(e, t) {
  function n(o) {
    const i = [];
    return o.map instanceof P ? (!t.walkSession && o.position && (!o.feature || !(e.layers.getByKey(o.feature[te]) instanceof ne)) ? i.push({
      name: "walk.start",
      icon: "$vcsWalking",
      async callback() {
        o.position && (await t.startWalkSession(
          q.mercatorToWgs84(o.position)
        ), z(e));
      }
    }) : t.walkSession && (e.windowManager.has(K) || i.push({
      name: "walk.openSettings",
      icon: "$vcsWalking",
      callback() {
        z(e);
      }
    }), i.push({
      name: "walk.stopMode",
      icon: "$vcsWalking",
      async callback() {
        await t.stopWalkSession();
      }
    })), i) : [];
  }
  return e.contextMenuManager.addEventHandler(n, F), () => {
    e.contextMenuManager.removeHandler(n);
  };
}
async function Q(e) {
  var o;
  const { activeMap: t } = e.maps, n = t == null ? void 0 : t.getViewpointSync();
  n && t instanceof P && (n.distance = 500, n.pitch = -45, n.groundPosition = n.cameraPosition, n.cameraPosition = null, n.animate = !0, await ((o = e.maps.activeMap) == null ? void 0 : o.gotoViewpoint(n)));
}
function je() {
  let e, t, n = () => {
  }, o = () => {
  };
  return {
    get name() {
      return F;
    },
    get version() {
      return De;
    },
    get mapVersion() {
      return ye;
    },
    get walkSession() {
      return t;
    },
    async startWalkSession(i) {
      await this.stopWalkSession(), e && (t = await Fe(e, i), n = t.stopped.addEventListener(() => {
        e == null || e.windowManager.remove(K), t = void 0, n();
      }));
    },
    async stopWalkSession() {
      e && t && (t.stop(), await Q(e));
    },
    initialize(i) {
      return e = i, o = $e(i, this), Promise.resolve();
    },
    destroy() {
      t == null || t.stop(), e && Q(e).catch((i) => {
        Ve(F).error(i);
      }), n(), o();
    },
    i18n: {
      en: {
        walk: {
          headerTitle: "Pedestrian mode",
          viewingHeight: "Viewing height",
          viewingAngle: "Viewing angle",
          stop: "Quit",
          stopMode: "Quit pedestrian mode",
          start: "Start pedestrian mode",
          openSettings: "Pedestrian mode settings",
          navigation: {
            move: 'Use the arrow keys (or alternatively "W"/"A"/"S"/"D") on the keyboard to move around.',
            boost: "Press and hold left shift key to increase walking speed.",
            look: "Drag with left mouse key to rotate the view."
          }
        }
      },
      de: {
        walk: {
          headerTitle: "Fußgängermodus",
          viewingHeight: "Sichthöhe",
          viewingAngle: "Blickwinkel",
          stop: "Beenden",
          stopMode: "Fußgängermodus beenden",
          start: "Fußgängermodus starten",
          openSettings: "Fußgängermodus Einstellungen",
          navigation: {
            move: 'Verwenden Sie die Pfeiltasten oder "W"/"A"/"S"/"D", um sich fortzubewegen.',
            boost: "Halten Sie die linke Shift-Taste gedrückt, um sich schneller fortzubewegen.",
            look: "Ziehen Sie mit der linken Maustaste über die Karte, um herumzuschauen."
          }
        }
      }
    }
  };
}
export {
  je as default
};
