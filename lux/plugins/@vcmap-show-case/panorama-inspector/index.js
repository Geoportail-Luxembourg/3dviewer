import { VcsFormSection as ee, VcsLabel as V, VcsTextField as F, VcsCheckbox as C, VcsSlider as N, createToggleAction as re, WindowSlot as ue, ButtonLocation as se } from "../../../assets/ui.js";
import { inject as R, shallowRef as B, onUnmounted as W, createBlock as I, openBlock as _, unref as e, withCtx as l, createVNode as a, createCommentVNode as ae, createTextVNode as y, reactive as le, ref as g, watch as f, computed as z, createElementBlock as te, Fragment as oe, mergeProps as $ } from "../../../assets/vue.js";
import { mercatorToCartesian as de, PanoramaMap as G, PanoramaDatasetLayer as j, getStringColor as K, cesiumColorToColor as Y, PanoramaOverlayMode as b, AbstractInteraction as me, EventType as ce, VcsEvent as pe } from "../../../assets/core.js";
import { VContainer as ne, VRow as c, VCol as i, VMenu as q, VColorPicker as J, VCard as H, VSheet as ve } from "../../../assets/vuetify.js";
import { Cartesian3 as fe, MaterialAppearance as Q, Material as X, Color as S, Primitive as ge, Matrix4 as Z, GeometryInstance as ye, SphereGeometry as Ve } from "../../../assets/cesium.js";
const M = "@vcmap-show-case/panorama-inspector", Ce = "1.0.0", _e = "^6.2", we = {
  __name: "PanoramaDebugInfo",
  setup(p) {
    const t = R("vcsApp").maps.activeMap, n = B(t.currentPanoramaImage), d = t.currentImageChanged.addEventListener((m) => {
      n.value = m;
    });
    return W(() => {
      d();
    }), (m, w) => (_(), I(e(ee), { heading: "Information" }, {
      default: l(() => [
        a(e(ne), { class: "py-0 px-1" }, {
          default: l(() => [
            a(e(c), { "no-gutters": "" }, {
              default: l(() => [
                a(e(i), null, {
                  default: l(() => [
                    a(e(V), null, {
                      default: l(() => [
                        y("Image Name")
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                a(e(i), null, {
                  default: l(() => {
                    var v;
                    return [
                      a(e(F), {
                        readonly: "",
                        disabled: !0,
                        "model-value": ((v = n.value) == null ? void 0 : v.name) ?? "No Image"
                      }, null, 8, ["model-value"])
                    ];
                  }),
                  _: 1
                })
              ]),
              _: 1
            }),
            a(e(c), { "no-gutters": "" }, {
              default: l(() => [
                a(e(i), null, {
                  default: l(() => [
                    a(e(V), null, {
                      default: l(() => [
                        y("Levels")
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                a(e(i), null, {
                  default: l(() => {
                    var v, k;
                    return [
                      a(e(F), {
                        readonly: "",
                        disabled: !0,
                        "model-value": `${((v = n.value) == null ? void 0 : v.minLevel) ?? "0"} - ${((k = n.value) == null ? void 0 : k.maxLevel) ?? "0"}`
                      }, null, 8, ["model-value"])
                    ];
                  }),
                  _: 1
                })
              ]),
              _: 1
            }),
            a(e(c), { "no-gutters": "" }, {
              default: l(() => [
                a(e(i), null, {
                  default: l(() => [
                    a(e(V), null, {
                      default: l(() => [
                        y("Tile Size")
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                a(e(i), null, {
                  default: l(() => [
                    a(e(F), {
                      readonly: "",
                      disabled: !0,
                      "model-value": n.value.tileSize.join(" x ") ?? "No Tile Size"
                    }, null, 8, ["model-value"])
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            a(e(c), { "no-gutters": "" }, {
              default: l(() => [
                a(e(i), null, {
                  default: l(() => [
                    a(e(V), null, {
                      default: l(() => [
                        y("Has Intensity")
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                a(e(i), null, {
                  default: l(() => {
                    var v;
                    return [
                      a(e(C), {
                        disabled: !0,
                        "model-value": ((v = n.value) == null ? void 0 : v.hasIntensity) ?? !1
                      }, null, 8, ["model-value"])
                    ];
                  }),
                  _: 1
                })
              ]),
              _: 1
            }),
            n.value ? (_(), I(e(c), {
              key: 0,
              "no-gutters": ""
            }, {
              default: l(() => [
                a(e(i), null, {
                  default: l(() => [
                    a(e(V), null, {
                      default: l(() => [
                        y("Has Depth")
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                a(e(i), null, {
                  default: l(() => {
                    var v;
                    return [
                      a(e(C), {
                        disabled: !0,
                        "model-value": ((v = n.value) == null ? void 0 : v.hasDepth) ?? !1
                      }, null, 8, ["model-value"])
                    ];
                  }),
                  _: 1
                })
              ]),
              _: 1
            })) : ae("", !0)
          ]),
          _: 1
        })
      ]),
      _: 1
    }));
  }
};
function he(p, o) {
  const t = new fe(), n = new Q({
    flat: !0,
    material: X.fromType("Color", { color: S.ORANGERED })
  }), d = new ge({
    geometryInstances: [
      new ye({
        geometry: new Ve({
          radius: 0.2
        })
      })
    ],
    appearance: n,
    depthFailAppearance: new Q({
      translucent: !0,
      material: X.fromType("Color", {
        color: S.LIMEGREEN.withAlpha(0.6)
      })
    }),
    asynchronous: !1,
    show: !1,
    modelMatrix: Z.IDENTITY
  });
  return p.getCesiumWidget().scene.primitives.add(d), o.clicked.addEventListener((m) => {
    de(m.position, t), d.modelMatrix = Z.fromTranslation(t);
  }), {
    get show() {
      return d.show;
    },
    set show(m) {
      d.show = m;
    },
    get position() {
      return t;
    },
    destroy() {
      p.getCesiumWidget().scene.primitives.remove(d);
    }
  };
}
function Pe(p) {
  const o = p.maps.getByType(G.className)[0], t = o.layerTypes.slice(), n = le({
    name: "globeToggle",
    icon: "mdi-earth",
    title: "Toggle additional layers",
    active: !1,
    callback() {
      n.active ? (o.layerTypes = t, n.active = !1) : (o.layerTypes = [], n.active = !0);
    }
  });
  return n;
}
function be(p) {
  const o = g(!1), t = f(o, () => {
    for (const m of p.layers)
      m instanceof j && (m.hideInPanorama = o.value);
  }), n = p.layers.added.addEventListener((m) => {
    m instanceof j && (m.hideInPanorama = o.value);
  });
  return {
    action: le({
      name: "Hide Footprint",
      icon: z(() => o.value ? "mdi-map-marker-off" : "mdi-map-marker"),
      title: "Hide Footprint",
      active: z(() => o.value),
      callback() {
        o.value = !o.value;
      }
    }),
    destroy() {
      t(), n();
    }
  };
}
const Ie = {
  __name: "PanoramaDebugTools",
  setup(p) {
    const o = R("vcsApp"), t = o.maps.activeMap, n = he(
      t,
      o.plugins.getByKey(M).clickedInteraction
    ), d = g(!1);
    f(d, (u) => {
      n.show = u;
    });
    const { scene: m } = t.getCesiumWidget(), w = g(
      m.screenSpaceCameraController.enableInputs
    );
    f(w, (u) => {
      m.screenSpaceCameraController.enableInputs = u, u || m.camera.setView({
        destination: t.currentPanoramaImage.position,
        orientation: t.currentPanoramaImage.orientation
      });
    });
    const v = Pe(o), { action: k, destroy: ie } = be(o), L = g(t.panoramaView.suspendTileLoading);
    f(L, (u) => {
      t.panoramaView.suspendTileLoading = u;
    });
    const D = g(t.panoramaView.tilePrimitiveCollection.opacity);
    f(D, (u) => {
      t.panoramaView.tilePrimitiveCollection.opacity = u;
    });
    const A = g(
      t.panoramaView.tilePrimitiveCollection.overlayOpacity
    );
    f(A, (u) => {
      t.panoramaView.tilePrimitiveCollection.overlayOpacity = u;
    });
    const E = g(t.panoramaView.tilePrimitiveCollection.contrast);
    f(E, (u) => {
      t.panoramaView.tilePrimitiveCollection.contrast = u;
    });
    const U = g(t.panoramaView.tilePrimitiveCollection.brightness);
    f(U, (u) => {
      t.panoramaView.tilePrimitiveCollection.brightness = u;
    });
    const T = B(
      K(
        Y(
          t.panoramaView.tilePrimitiveCollection.overlayNaNColor
        )
      )
    );
    f(T, (u) => {
      t.panoramaView.tilePrimitiveCollection.overlayNaNColor = S.fromCssColorString(u);
    });
    const x = B(
      K(
        Y(t.panoramaView.tilePrimitiveCollection.cursorColor)
      )
    );
    f(x, (u) => {
      t.panoramaView.tilePrimitiveCollection.cursorColor = S.fromCssColorString(u);
    });
    const h = g(
      t.panoramaView.tilePrimitiveCollection.overlay === b.Intensity
    ), P = g(
      t.panoramaView.tilePrimitiveCollection.overlay === b.Depth
    );
    f(h, (u) => {
      u ? (P.value = !1, t.panoramaView.tilePrimitiveCollection.overlay = b.Intensity) : P.value || (t.panoramaView.tilePrimitiveCollection.overlay = b.None);
    }), f(P, (u) => {
      u ? (h.value = !1, t.panoramaView.tilePrimitiveCollection.overlay = b.Depth) : h.value || (t.panoramaView.tilePrimitiveCollection.overlay = b.None);
    });
    const O = g(t.panoramaView.tilePrimitiveCollection.showDebug);
    return f(O, (u) => {
      t.panoramaView.tilePrimitiveCollection.showDebug = u;
    }), W(() => {
      n.destroy(), ie(), t.panoramaView.tilePrimitiveCollection.opacity = 1;
    }), (u, s) => (_(), I(e(ee), {
      heading: "Tools",
      expandable: "",
      "header-actions": [e(v), e(k)]
    }, {
      default: l(() => [
        a(e(ne), { class: "py-0 px-1" }, {
          default: l(() => [
            a(e(c), { "no-gutters": "" }, {
              default: l(() => [
                a(e(i), null, {
                  default: l(() => [
                    a(e(C), {
                      label: "Show Debug",
                      modelValue: O.value,
                      "onUpdate:modelValue": s[0] || (s[0] = (r) => O.value = r)
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            a(e(c), { "no-gutters": "" }, {
              default: l(() => [
                a(e(i), null, {
                  default: l(() => [
                    a(e(C), {
                      label: "Show Intensity",
                      modelValue: h.value,
                      "onUpdate:modelValue": s[1] || (s[1] = (r) => h.value = r)
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            a(e(c), { "no-gutters": "" }, {
              default: l(() => [
                a(e(i), null, {
                  default: l(() => [
                    a(e(C), {
                      label: "Show Depth",
                      modelValue: P.value,
                      "onUpdate:modelValue": s[2] || (s[2] = (r) => P.value = r)
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            a(e(c), { "no-gutters": "" }, {
              default: l(() => [
                a(e(i), { cols: "4" }, {
                  default: l(() => [
                    a(e(V), null, {
                      default: l(() => [
                        y("Brightness")
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                a(e(i), null, {
                  default: l(() => [
                    a(e(N), {
                      modelValue: U.value,
                      "onUpdate:modelValue": s[3] || (s[3] = (r) => U.value = r),
                      min: -1,
                      max: 1,
                      step: 1e-3
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            a(e(c), { "no-gutters": "" }, {
              default: l(() => [
                a(e(i), { cols: "4" }, {
                  default: l(() => [
                    a(e(V), null, {
                      default: l(() => [
                        y("Contrast")
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                a(e(i), null, {
                  default: l(() => [
                    a(e(N), {
                      modelValue: E.value,
                      "onUpdate:modelValue": s[4] || (s[4] = (r) => E.value = r),
                      min: 0,
                      max: 20,
                      step: 0.01
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            P.value || h.value ? (_(), te(oe, { key: 0 }, [
              a(e(c), { "no-gutters": "" }, {
                default: l(() => [
                  a(e(i), { cols: "4" }, {
                    default: l(() => [
                      a(e(V), null, {
                        default: l(() => [
                          y("Overlay Opacity")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  a(e(i), null, {
                    default: l(() => [
                      a(e(N), {
                        modelValue: A.value,
                        "onUpdate:modelValue": s[5] || (s[5] = (r) => A.value = r),
                        min: 0,
                        max: 1,
                        step: 0.01
                      }, null, 8, ["modelValue"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              a(e(c), { "no-gutters": "" }, {
                default: l(() => [
                  a(e(i), null, {
                    default: l(() => [
                      a(e(V), null, {
                        default: l(() => [
                          y("Overlay NaN Color")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  a(e(i), null, {
                    default: l(() => [
                      a(e(q), { "close-on-content-click": !1 }, {
                        activator: l(({ props: r }) => [
                          a(e(H), $({
                            rounded: "",
                            height: "24px",
                            width: "32px"
                          }, r, {
                            style: { backgroundColor: T.value }
                          }), null, 16, ["style"])
                        ]),
                        default: l(() => [
                          a(e(J), {
                            modelValue: T.value,
                            "onUpdate:modelValue": s[6] || (s[6] = (r) => T.value = r),
                            mode: "rgba",
                            width: "100%"
                          }, null, 8, ["modelValue"])
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ], 64)) : ae("", !0),
            a(e(c), { "no-gutters": "" }, {
              default: l(() => [
                a(e(i), null, {
                  default: l(() => [
                    a(e(V), null, {
                      default: l(() => [
                        y("Cursor Color")
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                a(e(i), null, {
                  default: l(() => [
                    a(e(q), { "close-on-content-click": !1 }, {
                      activator: l(({ props: r }) => [
                        a(e(H), $({
                          rounded: "",
                          height: "24px",
                          width: "32px"
                        }, r, {
                          style: { backgroundColor: x.value }
                        }), null, 16, ["style"])
                      ]),
                      default: l(() => [
                        a(e(J), {
                          modelValue: x.value,
                          "onUpdate:modelValue": s[7] || (s[7] = (r) => x.value = r),
                          mode: "rgba",
                          width: "100%"
                        }, null, 8, ["modelValue"])
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            a(e(c), { "no-gutters": "" }, {
              default: l(() => [
                a(e(i), null, {
                  default: l(() => [
                    a(e(C), {
                      label: "Enable Cesium Interaction",
                      modelValue: w.value,
                      "onUpdate:modelValue": s[8] || (s[8] = (r) => w.value = r)
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            a(e(c), { "no-gutters": "" }, {
              default: l(() => [
                a(e(i), null, {
                  default: l(() => [
                    a(e(C), {
                      label: "Show Clicked",
                      modelValue: d.value,
                      "onUpdate:modelValue": s[9] || (s[9] = (r) => d.value = r)
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            a(e(c), { "no-gutters": "" }, {
              default: l(() => [
                a(e(i), null, {
                  default: l(() => [
                    a(e(C), {
                      label: "Suspend Tile Loading",
                      modelValue: L.value,
                      "onUpdate:modelValue": s[10] || (s[10] = (r) => L.value = r)
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            a(e(c), { "no-gutters": "" }, {
              default: l(() => [
                a(e(i), { cols: "4" }, {
                  default: l(() => [
                    a(e(V), null, {
                      default: l(() => [
                        y("Opacity")
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                a(e(i), null, {
                  default: l(() => [
                    a(e(N), {
                      modelValue: D.value,
                      "onUpdate:modelValue": s[11] || (s[11] = (r) => D.value = r),
                      min: 0,
                      max: 1,
                      step: 0.01
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ]),
          _: 1
        })
      ]),
      _: 1
    }, 8, ["header-actions"]));
  }
}, ke = {
  __name: "PanoramaInspector",
  setup(p) {
    const o = R("vcsApp"), t = g(o.maps.activeMap instanceof G), n = o.maps.mapActivated.addEventListener((d) => {
      t.value = d instanceof G;
    });
    return W(() => {
      n();
    }), (d, m) => (_(), I(e(ve), null, {
      default: l(() => [
        t.value ? (_(), te(oe, { key: 0 }, [
          a(we),
          a(Ie)
        ], 64)) : (_(), I(e(H), { key: 1 }, {
          default: l(() => [
            y(" Switch to panorama map ")
          ]),
          _: 1
        }))
      ]),
      _: 1
    }));
  }
};
class Te extends me {
  constructor() {
    super(ce.CLICK), this.clicked = new pe();
  }
  pipe(o) {
    return o.map.className === "PanoramaMap" && !o.map.getCesiumWidget().scene.screenSpaceCameraController.enableInputs && this.clicked.raiseEvent(o), Promise.resolve(o);
  }
}
function De() {
  let p, o, t, n;
  return {
    name: M,
    version: Ce,
    mapVersion: _e,
    get clickedInteraction() {
      return o;
    },
    get clickedPrimitive() {
      return n;
    },
    async initialize(d) {
      const { action: m, destroy: w } = re(
        {
          name: "Panorama Inspector"
        },
        {
          id: "panorama-inspector",
          state: {
            headerTitle: "Panorama Inspector"
          },
          component: ke,
          slot: ue.DYNAMIC_RIGHT
        },
        d.windowManager,
        M
      );
      d.navbarManager.add(
        { id: "panorama-inspector", action: m },
        M,
        se.MENU
      ), o = new Te(), t = d.maps.eventHandler.addPersistentInteraction(o), p = w;
    },
    destroy() {
      p == null || p(), t == null || t(), o == null || o.destroy(), o = void 0, n == null || n.destroy(), n = void 0;
    }
  };
}
export {
  De as default
};
