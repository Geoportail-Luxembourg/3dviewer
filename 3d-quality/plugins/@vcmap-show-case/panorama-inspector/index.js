import { VcsFormSection as X, VcsLabel as C, VcsTextField as E, VcsCheckbox as V, VcsSlider as B, createToggleAction as ie, WindowSlot as re, ButtonLocation as ue } from "../../../assets/ui.js";
import { inject as W, shallowRef as O, onUnmounted as F, createBlock as I, openBlock as w, unref as e, withCtx as l, createVNode as a, createCommentVNode as Z, createTextVNode as y, reactive as ee, ref as g, watch as f, computed as H, createElementBlock as ae, Fragment as le, mergeProps as R } from "../../../assets/vue.js";
import { mercatorToCartesian as se, PanoramaMap as U, PanoramaDatasetLayer as z, getStringColor as $, cesiumColorToColor as j, PanoramaOverlayMode as b, AbstractInteraction as de, EventType as me, VcsEvent as ce } from "../../../assets/core.js";
import { VContainer as te, VRow as p, VCol as i, VMenu as K, VColorPicker as Y, VCard as G, VSheet as pe } from "../../../assets/vuetify.js";
import { Cartesian3 as ve, MaterialAppearance as q, Material as J, Color as N, Primitive as fe, Matrix4 as Q, GeometryInstance as ge, SphereGeometry as ye, Globe as Ce, ImageryLayer as Ve, OpenStreetMapImageryProvider as we } from "../../../assets/cesium.js";
const S = "@vcmap-show-case/panorama-inspector", _e = "1.0.0", he = "^6.2", Pe = {
  __name: "PanoramaDebugInfo",
  setup(c) {
    const t = W("vcsApp").maps.activeMap, n = O(t.currentPanoramaImage), d = t.currentImageChanged.addEventListener((m) => {
      n.value = m;
    });
    return F(() => {
      d();
    }), (m, _) => (w(), I(e(X), { heading: "Information" }, {
      default: l(() => [
        a(e(te), { class: "py-0 px-1" }, {
          default: l(() => [
            a(e(p), { "no-gutters": "" }, {
              default: l(() => [
                a(e(i), null, {
                  default: l(() => [
                    a(e(C), null, {
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
                      a(e(E), {
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
            a(e(p), { "no-gutters": "" }, {
              default: l(() => [
                a(e(i), null, {
                  default: l(() => [
                    a(e(C), null, {
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
                      a(e(E), {
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
            a(e(p), { "no-gutters": "" }, {
              default: l(() => [
                a(e(i), null, {
                  default: l(() => [
                    a(e(C), null, {
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
                    a(e(E), {
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
            a(e(p), { "no-gutters": "" }, {
              default: l(() => [
                a(e(i), null, {
                  default: l(() => [
                    a(e(C), null, {
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
                      a(e(V), {
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
            n.value ? (w(), I(e(p), {
              key: 0,
              "no-gutters": ""
            }, {
              default: l(() => [
                a(e(i), null, {
                  default: l(() => [
                    a(e(C), null, {
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
                      a(e(V), {
                        disabled: !0,
                        "model-value": ((v = n.value) == null ? void 0 : v.hasDepth) ?? !1
                      }, null, 8, ["model-value"])
                    ];
                  }),
                  _: 1
                })
              ]),
              _: 1
            })) : Z("", !0)
          ]),
          _: 1
        })
      ]),
      _: 1
    }));
  }
};
function be(c, o) {
  const t = new ve(), n = new q({
    flat: !0,
    material: J.fromType("Color", { color: N.ORANGERED })
  }), d = new fe({
    geometryInstances: [
      new ge({
        geometry: new ye({
          radius: 0.2
        })
      })
    ],
    appearance: n,
    depthFailAppearance: new q({
      translucent: !0,
      material: J.fromType("Color", {
        color: N.LIMEGREEN.withAlpha(0.6)
      })
    }),
    asynchronous: !1,
    show: !1,
    modelMatrix: Q.IDENTITY
  });
  return c.getCesiumWidget().scene.primitives.add(d), o.clicked.addEventListener((m) => {
    se(m.position, t), d.modelMatrix = Q.fromTranslation(t);
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
      c.getCesiumWidget().scene.primitives.remove(d);
    }
  };
}
function Ie(c) {
  const o = c.maps.getByType(U.className)[0], t = ee({
    name: "OSM Globe",
    icon: "mdi-earth",
    title: "Open Street Map Globe",
    active: !1,
    callback() {
      if (t.active)
        o.getCesiumWidget().scene.globe = void 0, t.active = !1;
      else {
        const { scene: n } = o.getCesiumWidget();
        n.globe = new Ce(), n.imageryLayers.add(
          new Ve(
            new we({ maximumLevel: 18 })
          )
        ), t.active = !0;
      }
    }
  });
  return {
    action: t,
    destroy: () => {
      o.initialized && (o.getCesiumWidget().scene.globe = void 0);
    }
  };
}
function ke(c) {
  const o = g(!1), t = f(o, () => {
    for (const m of c.layers)
      m instanceof z && (m.hideInPanorama = o.value);
  }), n = c.layers.added.addEventListener((m) => {
    m instanceof z && (m.hideInPanorama = o.value);
  });
  return {
    action: ee({
      name: "Hide Footprint",
      icon: H(() => o.value ? "mdi-map-marker-off" : "mdi-map-marker"),
      title: "Hide Footprint",
      active: H(() => o.value),
      callback() {
        o.value = !o.value;
      }
    }),
    destroy() {
      t(), n();
    }
  };
}
const xe = {
  __name: "PanoramaDebugTools",
  setup(c) {
    const o = W("vcsApp"), t = o.maps.activeMap, n = be(
      t,
      o.plugins.getByKey(S).clickedInteraction
    ), d = g(!1);
    f(d, (u) => {
      n.show = u;
    });
    const { scene: m } = t.getCesiumWidget(), _ = g(
      m.screenSpaceCameraController.enableInputs
    );
    f(_, (u) => {
      m.screenSpaceCameraController.enableInputs = u, u || m.camera.setView({
        destination: t.currentPanoramaImage.position,
        orientation: t.currentPanoramaImage.orientation
      });
    });
    const { action: v, destroy: k } = Ie(o), { action: oe, destroy: ne } = ke(o), T = g(t.panoramaView.suspendTileLoading);
    f(T, (u) => {
      t.panoramaView.suspendTileLoading = u;
    });
    const L = g(t.panoramaView.tilePrimitiveCollection.opacity);
    f(L, (u) => {
      t.panoramaView.tilePrimitiveCollection.opacity = u;
    });
    const D = g(
      t.panoramaView.tilePrimitiveCollection.overlayOpacity
    );
    f(D, (u) => {
      t.panoramaView.tilePrimitiveCollection.overlayOpacity = u;
    });
    const x = O(
      $(
        j(
          t.panoramaView.tilePrimitiveCollection.overlayNaNColor
        )
      )
    );
    f(x, (u) => {
      t.panoramaView.tilePrimitiveCollection.overlayNaNColor = N.fromCssColorString(u);
    });
    const M = O(
      $(
        j(t.panoramaView.tilePrimitiveCollection.cursorColor)
      )
    );
    f(M, (u) => {
      t.panoramaView.tilePrimitiveCollection.cursorColor = N.fromCssColorString(u);
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
    const A = g(t.panoramaView.tilePrimitiveCollection.showDebug);
    return f(A, (u) => {
      t.panoramaView.tilePrimitiveCollection.showDebug = u;
    }), F(() => {
      n.destroy(), k(), ne(), t.panoramaView.tilePrimitiveCollection.opacity = 1;
    }), (u, s) => (w(), I(e(X), {
      heading: "Tools",
      expandable: "",
      "header-actions": [e(v), e(oe)]
    }, {
      default: l(() => [
        a(e(te), { class: "py-0 px-1" }, {
          default: l(() => [
            a(e(p), { "no-gutters": "" }, {
              default: l(() => [
                a(e(i), null, {
                  default: l(() => [
                    a(e(V), {
                      label: "Show Debug",
                      modelValue: A.value,
                      "onUpdate:modelValue": s[0] || (s[0] = (r) => A.value = r)
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            a(e(p), { "no-gutters": "" }, {
              default: l(() => [
                a(e(i), null, {
                  default: l(() => [
                    a(e(V), {
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
            a(e(p), { "no-gutters": "" }, {
              default: l(() => [
                a(e(i), null, {
                  default: l(() => [
                    a(e(V), {
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
            P.value || h.value ? (w(), ae(le, { key: 0 }, [
              a(e(p), { "no-gutters": "" }, {
                default: l(() => [
                  a(e(i), { cols: "4" }, {
                    default: l(() => [
                      a(e(C), null, {
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
                      a(e(B), {
                        modelValue: D.value,
                        "onUpdate:modelValue": s[3] || (s[3] = (r) => D.value = r),
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
              a(e(p), { "no-gutters": "" }, {
                default: l(() => [
                  a(e(i), null, {
                    default: l(() => [
                      a(e(C), null, {
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
                      a(e(K), { "close-on-content-click": !1 }, {
                        activator: l(({ props: r }) => [
                          a(e(G), R({
                            rounded: "",
                            height: "24px",
                            width: "32px"
                          }, r, {
                            style: { backgroundColor: x.value }
                          }), null, 16, ["style"])
                        ]),
                        default: l(() => [
                          a(e(Y), {
                            modelValue: x.value,
                            "onUpdate:modelValue": s[4] || (s[4] = (r) => x.value = r),
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
            ], 64)) : Z("", !0),
            a(e(p), { "no-gutters": "" }, {
              default: l(() => [
                a(e(i), null, {
                  default: l(() => [
                    a(e(C), null, {
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
                    a(e(K), { "close-on-content-click": !1 }, {
                      activator: l(({ props: r }) => [
                        a(e(G), R({
                          rounded: "",
                          height: "24px",
                          width: "32px"
                        }, r, {
                          style: { backgroundColor: M.value }
                        }), null, 16, ["style"])
                      ]),
                      default: l(() => [
                        a(e(Y), {
                          modelValue: M.value,
                          "onUpdate:modelValue": s[5] || (s[5] = (r) => M.value = r),
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
            a(e(p), { "no-gutters": "" }, {
              default: l(() => [
                a(e(i), null, {
                  default: l(() => [
                    a(e(V), {
                      label: "Enable Cesium Interaction",
                      modelValue: _.value,
                      "onUpdate:modelValue": s[6] || (s[6] = (r) => _.value = r)
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            a(e(p), { "no-gutters": "" }, {
              default: l(() => [
                a(e(i), null, {
                  default: l(() => [
                    a(e(V), {
                      label: "Show Clicked",
                      modelValue: d.value,
                      "onUpdate:modelValue": s[7] || (s[7] = (r) => d.value = r)
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            a(e(p), { "no-gutters": "" }, {
              default: l(() => [
                a(e(i), null, {
                  default: l(() => [
                    a(e(V), {
                      label: "Suspend Tile Loading",
                      modelValue: T.value,
                      "onUpdate:modelValue": s[8] || (s[8] = (r) => T.value = r)
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            a(e(p), { "no-gutters": "" }, {
              default: l(() => [
                a(e(i), { cols: "4" }, {
                  default: l(() => [
                    a(e(C), null, {
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
                    a(e(B), {
                      modelValue: L.value,
                      "onUpdate:modelValue": s[9] || (s[9] = (r) => L.value = r),
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
}, Me = {
  __name: "PanoramaInspector",
  setup(c) {
    const o = W("vcsApp"), t = g(o.maps.activeMap instanceof U), n = o.maps.mapActivated.addEventListener((d) => {
      t.value = d instanceof U;
    });
    return F(() => {
      n();
    }), (d, m) => (w(), I(e(pe), null, {
      default: l(() => [
        t.value ? (w(), ae(le, { key: 0 }, [
          a(Pe),
          a(xe)
        ], 64)) : (w(), I(e(G), { key: 1 }, {
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
class Se extends de {
  constructor() {
    super(me.CLICK), this.clicked = new ce();
  }
  pipe(o) {
    return o.map.className === "PanoramaMap" && !o.map.getCesiumWidget().scene.screenSpaceCameraController.enableInputs && this.clicked.raiseEvent(o), Promise.resolve(o);
  }
}
function Ee() {
  let c, o, t, n;
  return {
    name: S,
    version: _e,
    mapVersion: he,
    get clickedInteraction() {
      return o;
    },
    get clickedPrimitive() {
      return n;
    },
    async initialize(d) {
      const { action: m, destroy: _ } = ie(
        {
          name: "Panorama Inspector"
        },
        {
          id: "panorama-inspector",
          state: {
            headerTitle: "panoramaInspector.title"
          },
          component: Me,
          slot: re.DYNAMIC_RIGHT
        },
        d.windowManager,
        S
      );
      d.navbarManager.add(
        { id: "panorama-inspector", action: m },
        S,
        ue.MENU
      ), o = new Se(), t = d.maps.eventHandler.addPersistentInteraction(o), c = _;
    },
    destroy() {
      c == null || c(), t == null || t(), o == null || o.destroy(), o = void 0, n == null || n.destroy(), n = void 0;
    }
  };
}
export {
  Ee as default
};
