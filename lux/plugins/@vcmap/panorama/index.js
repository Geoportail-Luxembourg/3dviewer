import { defineComponent as H, ref as T, watch as M, computed as S, createElementBlock as q, openBlock as w, Fragment as J, createVNode as a, unref as e, withCtx as t, createTextVNode as h, toDisplayString as b, inject as R, createBlock as E, createCommentVNode as te, shallowRef as G, onUnmounted as ne, reactive as O } from "../../../assets/vue.js";
import { VcsLabel as L, VcsTextField as x, VcsSlider as Q, VcsExpansionPanel as z, VcsCheckbox as B, VcsFormSection as oe, VcsCoordinate as K, createToggleAction as le, WindowSlot as ie, ToolboxType as re } from "../../../assets/ui.js";
import { cartesianToMercator as se, Projection as ue, PanoramaOverlayMode as k, PanoramaMap as D, PanoramaDatasetLayer as W } from "../../../assets/core.js";
import { Math as Z, Color as j } from "../../../assets/cesium.js";
import { VRow as _, VCol as g, VContainer as N, VExpansionPanels as me, VCard as X } from "../../../assets/vuetify.js";
const $ = "@vcmap/panorama", de = "1.0.1", ce = "^6.3", A = /* @__PURE__ */ H({
  __name: "percentageSlider",
  props: {
    label: {},
    modelValue: { default: 0 },
    min: { default: -1 },
    max: { default: 1 },
    center: { default: 0 }
  },
  emits: ["update:modelValue"],
  setup(r, { emit: o }) {
    const n = r;
    function s(l, u, f) {
      return (l - u) / (f - u);
    }
    function i(l) {
      const { min: u, max: f, center: V } = n, P = Math.abs(V - l);
      return l > V ? s(P, 0, Math.abs(f - V)) : l < V ? s(P, 0, Math.abs(V - u)) * -1 : 0;
    }
    function d(l) {
      const { min: u, max: f, center: V } = n;
      return l > 0 ? l * Math.abs(f - V) + V : l < 0 ? l * Math.abs(V - u) + V : V;
    }
    const v = o, p = T(n.modelValue);
    M(
      () => n.modelValue,
      (l) => {
        l !== p.value && (p.value = l);
      }
    );
    const c = S({
      get: () => i(p.value),
      set: (l) => {
        const u = d(l);
        p.value = u, v("update:modelValue", u);
      }
    }), C = S({
      get: () => Math.round(c.value * 100),
      set: (l) => {
        c.value = l / 100;
      }
    });
    return (l, u) => (w(), q(
      J,
      null,
      [
        a(e(_), { "no-gutters": "" }, {
          default: t(() => [
            a(e(g), { cols: "4" }, {
              default: t(() => [
                a(e(L), null, {
                  default: t(() => [
                    h(
                      b(l.$t(n.label)),
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
            a(e(g), null, {
              default: t(() => [
                a(e(x), {
                  modelValue: C.value,
                  "onUpdate:modelValue": u[0] || (u[0] = (f) => C.value = f),
                  modelModifiers: { number: !0 },
                  type: "number",
                  min: "-100",
                  max: "100",
                  step: "1",
                  unit: "%"
                }, null, 8, ["modelValue"])
              ]),
              _: 1
              /* STABLE */
            })
          ]),
          _: 1
          /* STABLE */
        }),
        a(e(_), { "no-gutters": "" }, {
          default: t(() => [
            a(e(g), null, {
              default: t(() => [
                a(e(Q), {
                  modelValue: c.value,
                  "onUpdate:modelValue": u[1] || (u[1] = (f) => c.value = f),
                  min: -1,
                  max: 1,
                  step: 0.01,
                  center: 0
                }, {
                  append: t(() => [
                    h(" 100% ")
                  ]),
                  prepend: t(() => [
                    h(" -100% ")
                  ]),
                  _: 1
                  /* STABLE */
                }, 8, ["modelValue"])
              ]),
              _: 1
              /* STABLE */
            })
          ]),
          _: 1
          /* STABLE */
        })
      ],
      64
      /* STABLE_FRAGMENT */
    ));
  }
}), pe = /* @__PURE__ */ H({
  __name: "panoramaImageEnhancement",
  setup(r) {
    const n = R("vcsApp").maps.activeMap, s = T(n.panoramaView.tilePrimitiveCollection.contrast);
    M(s, (l) => {
      n.panoramaView.tilePrimitiveCollection.contrast = l;
    });
    const i = T(n.panoramaView.tilePrimitiveCollection.brightness);
    M(i, (l) => {
      n.panoramaView.tilePrimitiveCollection.brightness = l;
    });
    const { scene: d } = n.getCesiumWidget(), v = T(d.highDynamicRange);
    M(v, (l) => {
      d.highDynamicRange = l;
    });
    const p = T(d.gamma);
    M(p, (l) => {
      d.gamma = l;
    });
    const c = T(d.postProcessStages.exposure);
    M(c, (l) => {
      d.postProcessStages.exposure = l;
    });
    const C = {
      name: "panorama.imageEnhancement.reset",
      icon: "$vcsReturn",
      title: "panorama.imageEnhancement.reset",
      callback() {
        i.value = 0, s.value = 1, v.value = !0, p.value = 2.2, c.value = 1;
      }
    };
    return (l, u) => (w(), E(e(z), {
      heading: "panorama.imageEnhancement.title",
      "header-actions": [C]
    }, {
      default: t(() => [
        a(e(N), { class: "py-0 px-5" }, {
          default: t(() => [
            a(e(_), { "no-gutters": "" }, {
              default: t(() => [
                a(e(g), { cols: "4" }, {
                  default: t(() => [
                    a(e(L), null, {
                      default: t(() => [
                        h(
                          b(l.$t("panorama.imageEnhancement.hdr")),
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
                a(e(g), null, {
                  default: t(() => [
                    a(e(B), {
                      modelValue: v.value,
                      "onUpdate:modelValue": u[0] || (u[0] = (f) => v.value = f)
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                  /* STABLE */
                })
              ]),
              _: 1
              /* STABLE */
            }),
            a(A, {
              modelValue: i.value,
              "onUpdate:modelValue": u[1] || (u[1] = (f) => i.value = f),
              label: "panorama.imageEnhancement.brightness",
              min: -1,
              max: 1,
              center: 0
            }, null, 8, ["modelValue"]),
            a(A, {
              modelValue: s.value,
              "onUpdate:modelValue": u[2] || (u[2] = (f) => s.value = f),
              label: "panorama.imageEnhancement.contrast",
              min: 0,
              max: 4,
              center: 1
            }, null, 8, ["modelValue"]),
            v.value ? (w(), q(
              J,
              { key: 0 },
              [
                a(A, {
                  modelValue: p.value,
                  "onUpdate:modelValue": u[3] || (u[3] = (f) => p.value = f),
                  label: "panorama.imageEnhancement.gamma",
                  min: 0.1,
                  max: 5,
                  center: 2.2
                }, null, 8, ["modelValue"]),
                a(A, {
                  modelValue: c.value,
                  "onUpdate:modelValue": u[4] || (u[4] = (f) => c.value = f),
                  label: "panorama.imageEnhancement.exposure",
                  min: 0,
                  max: 5,
                  center: 1
                }, null, 8, ["modelValue"])
              ],
              64
              /* STABLE_FRAGMENT */
            )) : te("v-if", !0)
          ]),
          _: 1
          /* STABLE */
        })
      ]),
      _: 1
      /* STABLE */
    }, 8, ["header-actions"]));
  }
}), ge = /* @__PURE__ */ H({
  __name: "panoramaSettings",
  setup(r) {
    const o = R("vcsApp"), n = o.maps.activeMap, s = o.plugins.getByKey($), { action: i, destroy: d } = Me(n), { action: v, destroy: p } = Le(o), c = [s.layerTypesAction, i, v], C = G(n.currentPanoramaImage), l = G(), u = n.currentImageChanged.addEventListener(
      (m) => {
        C.value = m;
      }
    );
    M(
      C,
      (m) => {
        l.value = m == null ? void 0 : m.dataset;
      },
      { immediate: !0 }
    );
    const f = S(() => {
      var I;
      if (!((I = C.value) != null && I.position))
        return [];
      const m = se(C.value.position);
      return ue.mercatorToWgs84(m);
    }), V = S(() => {
      var m;
      return (m = C.value) != null && m.orientation ? [
        Z.toDegrees(C.value.orientation.heading),
        Z.toDegrees(C.value.orientation.pitch),
        Z.toDegrees(C.value.orientation.roll)
      ] : [];
    }), P = T(
      n.panoramaView.tilePrimitiveCollection.overlayOpacity
    ), U = S({
      get: () => P.value,
      set: (m) => {
        m < 0 ? P.value = 0 : m > 1 ? P.value = 1 : P.value = m;
      }
    });
    M(P, (m) => {
      n.panoramaView.tilePrimitiveCollection.overlayOpacity = m;
    });
    const {
      actions: ee,
      currentOverlay: F,
      destroy: ae
    } = Te(n);
    return ne(() => {
      d(), p(), ae(), u();
    }), (m, I) => (w(), E(e(oe), {
      heading: "panorama.visibility",
      "header-actions": c,
      "action-button-list-overflow-count": 4
    }, {
      default: t(() => [
        a(e(me), {
          variant: "accordion",
          multiple: ""
        }, {
          default: t(() => [
            a(pe),
            a(e(z), {
              heading: "panorama.complementaryImages.title",
              "header-actions": e(ee)
            }, {
              default: t(() => [
                a(e(N), { class: "py-0 px-5" }, {
                  default: t(() => [
                    a(e(_), { "no-gutters": "" }, {
                      default: t(() => [
                        a(e(g), { cols: "4" }, {
                          default: t(() => [
                            a(e(L), null, {
                              default: t(() => [
                                h(
                                  b(m.$t("panorama.complementaryImages.opacity")),
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
                        a(e(g), null, {
                          default: t(() => [
                            a(e(x), {
                              modelValue: U.value,
                              "onUpdate:modelValue": I[0] || (I[0] = (y) => U.value = y),
                              modelModifiers: { number: !0 },
                              type: "number",
                              min: "0",
                              max: "1",
                              step: "0.01",
                              disabled: e(F) === e(k).None
                            }, null, 8, ["modelValue", "disabled"])
                          ]),
                          _: 1
                          /* STABLE */
                        })
                      ]),
                      _: 1
                      /* STABLE */
                    }),
                    a(e(_), { "no-gutters": "" }, {
                      default: t(() => [
                        a(e(g), null, {
                          default: t(() => [
                            a(e(Q), {
                              modelValue: P.value,
                              "onUpdate:modelValue": I[1] || (I[1] = (y) => P.value = y),
                              disabled: e(F) === e(k).None,
                              min: 0,
                              max: 1,
                              step: 0.01
                            }, {
                              append: t(() => [
                                h(" 1 ")
                              ]),
                              prepend: t(() => [
                                h(" 0 ")
                              ]),
                              _: 1
                              /* STABLE */
                            }, 8, ["modelValue", "disabled"])
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
            a(e(z), { heading: "panorama.imageMetadata.title" }, {
              default: t(() => [
                C.value ? (w(), E(e(N), {
                  key: 0,
                  class: "py-0 px-5"
                }, {
                  default: t(() => [
                    a(e(_), { "no-gutters": "" }, {
                      default: t(() => [
                        a(e(g), { cols: "4" }, {
                          default: t(() => [
                            a(e(L), null, {
                              default: t(() => [
                                h(
                                  b(m.$t("panorama.imageMetadata.name")),
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
                        a(e(g), null, {
                          default: t(() => [
                            a(e(x), {
                              readonly: "",
                              "model-value": C.value.name
                            }, null, 8, ["model-value"])
                          ]),
                          _: 1
                          /* STABLE */
                        })
                      ]),
                      _: 1
                      /* STABLE */
                    }),
                    a(e(_), { "no-gutters": "" }, {
                      default: t(() => [
                        a(e(g), { cols: "4" }, {
                          default: t(() => [
                            a(e(L), {
                              tooltip: "panorama.imageMetadata.positionTooltip",
                              "tooltip-position": "left"
                            }, {
                              default: t(() => [
                                h(
                                  b(m.$t("panorama.imageMetadata.position")),
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
                        a(e(g), null, {
                          default: t(() => [
                            a(e(K), {
                              readonly: "",
                              "model-value": f.value
                            }, null, 8, ["model-value"])
                          ]),
                          _: 1
                          /* STABLE */
                        })
                      ]),
                      _: 1
                      /* STABLE */
                    }),
                    a(e(_), { "no-gutters": "" }, {
                      default: t(() => [
                        a(e(g), { cols: "4" }, {
                          default: t(() => [
                            a(e(L), {
                              tooltip: "panorama.imageMetadata.orientationTooltip",
                              "tooltip-position": "left"
                            }, {
                              default: t(() => [
                                h(
                                  b(m.$t("panorama.imageMetadata.orientation")),
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
                        a(e(g), null, {
                          default: t(() => [
                            a(e(K), {
                              readonly: "",
                              "model-value": V.value,
                              unit: "°",
                              prefixes: ["H", "P", "R"]
                            }, null, 8, ["model-value"])
                          ]),
                          _: 1
                          /* STABLE */
                        })
                      ]),
                      _: 1
                      /* STABLE */
                    }),
                    a(e(_), { "no-gutters": "" }, {
                      default: t(() => [
                        a(e(g), { cols: "4" }, {
                          default: t(() => [
                            a(e(L), null, {
                              default: t(() => [
                                h(
                                  b(m.$t("panorama.imageMetadata.time")),
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
                        a(e(g), null, {
                          default: t(() => {
                            var y;
                            return [
                              a(e(x), {
                                type: "datetime",
                                readonly: "",
                                "model-value": (y = C.value.time) == null ? void 0 : y.toISOString()
                              }, null, 8, ["model-value"])
                            ];
                          }),
                          _: 1
                          /* STABLE */
                        })
                      ]),
                      _: 1
                      /* STABLE */
                    }),
                    a(e(_), { "no-gutters": "" }, {
                      default: t(() => [
                        a(e(g), { cols: "4" }, {
                          default: t(() => [
                            a(e(L), null, {
                              default: t(() => [
                                h(
                                  b(m.$t("panorama.imageMetadata.cameraOffset")),
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
                        a(e(g), null, {
                          default: t(() => [
                            a(e(x), {
                              readonly: "",
                              "model-value": l.value ? l.value.cameraOffset * -1 : 0
                            }, null, 8, ["model-value"])
                          ]),
                          _: 1
                          /* STABLE */
                        })
                      ]),
                      _: 1
                      /* STABLE */
                    }),
                    a(e(_), { "no-gutters": "" }, {
                      default: t(() => [
                        a(e(g), { cols: "4" }, {
                          default: t(() => [
                            a(e(L), null, {
                              default: t(() => [
                                h(
                                  b(m.$t("panorama.imageMetadata.tileSize")),
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
                        a(e(g), null, {
                          default: t(() => {
                            var y;
                            return [
                              a(e(x), {
                                readonly: "",
                                "model-value": ((y = C.value.tileSize) == null ? void 0 : y.join(" x ")) ?? ""
                              }, null, 8, ["model-value"])
                            ];
                          }),
                          _: 1
                          /* STABLE */
                        })
                      ]),
                      _: 1
                      /* STABLE */
                    }),
                    a(e(_), { "no-gutters": "" }, {
                      default: t(() => [
                        a(e(g), { cols: "4" }, {
                          default: t(() => [
                            a(e(L), null, {
                              default: t(() => [
                                h(
                                  b(m.$t("panorama.imageMetadata.hasIntensity")),
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
                        a(e(g), null, {
                          default: t(() => {
                            var y;
                            return [
                              a(e(B), {
                                disabled: !0,
                                "model-value": ((y = C.value) == null ? void 0 : y.hasIntensity) ?? !1
                              }, null, 8, ["model-value"])
                            ];
                          }),
                          _: 1
                          /* STABLE */
                        })
                      ]),
                      _: 1
                      /* STABLE */
                    }),
                    a(e(_), { "no-gutters": "" }, {
                      default: t(() => [
                        a(e(g), { cols: "4" }, {
                          default: t(() => [
                            a(e(L), null, {
                              default: t(() => [
                                h(
                                  b(m.$t("panorama.imageMetadata.hasDepth")),
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
                        a(e(g), null, {
                          default: t(() => {
                            var y;
                            return [
                              a(e(B), {
                                disabled: !0,
                                "model-value": ((y = C.value) == null ? void 0 : y.hasDepth) ?? !1
                              }, null, 8, ["model-value"])
                            ];
                          }),
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
                })) : (w(), E(e(X), { key: 1 }, {
                  default: t(() => [
                    h(
                      b(m.$t("panorama.imageMetadata.noImage")),
                      1
                      /* TEXT */
                    )
                  ]),
                  _: 1
                  /* STABLE */
                }))
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
    }));
  }
}), ve = /* @__PURE__ */ H({
  __name: "panoramaComponent",
  setup(r) {
    const o = R("vcsApp"), n = T(!1), s = () => {
      const { activeMap: i } = o.maps;
      n.value = i instanceof D;
    };
    return o.maps.mapActivated.addEventListener(s), s(), (i, d) => n.value ? (w(), E(ge, { key: 0 })) : (w(), E(e(X), { key: 1 }, {
      default: t(() => [
        h(
          b(i.$t("panorama.notPanoramaMap")),
          1
          /* TEXT */
        )
      ]),
      _: 1
      /* STABLE */
    }));
  }
}), Ce = `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.833 11.334V5.19043C11.8329 4.91899 11.7252 4.65874 11.5332 4.4668C11.3412 4.27486 11.081 4.16704 10.8096 4.16699L4.66602 4.16699C4.66602 3.59877 5.12219 3.14258 5.69043 3.14258H11.833C12.1046 3.14258 12.3656 3.25135 12.5576 3.44336C12.7494 3.63533 12.8574 3.89564 12.8574 4.16699V10.3096C12.8574 10.5811 12.7496 10.8422 12.5576 11.0342C12.3656 11.2262 12.1045 11.334 11.833 11.334Z" fill="currentColor"/>
<path d="M13.9166 7.33398V2.83398C13.9166 2.63506 13.8376 2.44339 13.6969 2.30273C13.5563 2.16225 13.3654 2.084 13.1666 2.08398L8.66663 2.08398C8.66663 1.66772 9.00035 1.33398 9.41663 1.33398L13.9166 1.33398C14.1154 1.334 14.3063 1.41224 14.4469 1.55273C14.5876 1.69339 14.6666 1.88506 14.6666 2.08398V6.58398C14.6666 6.7828 14.5875 6.97367 14.4469 7.11426C14.3063 7.25483 14.1155 7.33397 13.9166 7.33398Z" fill="currentColor"/>
<path d="M9.33337 5.52409C9.96761 5.52409 10.4759 6.03817 10.476 6.66666V13.5241C10.4758 14.1582 9.96758 14.6667 9.33337 14.6667H2.47595C2.17294 14.6666 1.8826 14.546 1.66833 14.3317C1.45407 14.1174 1.33344 13.8271 1.33337 13.5241V6.66666C1.33341 6.36364 1.45408 6.07333 1.66833 5.85905C1.8826 5.64479 2.17294 5.52416 2.47595 5.52409H9.33337ZM5.42712 12.7419L4.27869 11.3581L2.66638 13.4274H9.11365L7.03943 10.6667L5.42712 12.7419Z" fill="currentColor"/>
</svg>
`, fe = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M21 4C21.5 4 22 4.4 22 5V11.1631C21.3812 10.862 20.7083 10.6558 20 10.5605V6.40039C18 7.00038 15.3999 7.5 12 7.5C9.30003 7.5 6.59997 7.10037 4 6.40039V17.5996C5.99999 16.9996 8.60006 16.5 12 16.5C12.1783 16.5 12.3544 16.5022 12.5283 16.5049C12.5102 16.7046 12.5 16.9069 12.5 17.1113C12.5 17.5906 12.5525 18.0575 12.6494 18.5078C12.4369 18.503 12.2205 18.5 12 18.5C6.5 18.5 3.6 20 3 20C2.5 20 2 19.6 2 19V5C2 4.4 2.5 4 3 4C3.5 4 6.7 5.5 12 5.5C17.4 5.5 20.4 4 21 4ZM15.3779 11.6543C14.2052 12.4581 13.3054 13.6303 12.8438 15.0039C12.5641 15.0007 12.2828 15 12 15C9.7 15 7.5 15.1004 5.5 15.4004L9.2002 11L11.2002 13.4004L14 10L15.3779 11.6543Z" fill="currentColor"/>
<g clip-path="url(#clip0_333_46633)">
<path d="M18.9799 18.9099C18.5048 18.9099 18.0491 18.7212 17.7132 18.3852C17.3772 18.0492 17.1884 17.5936 17.1884 17.1184C17.1884 16.6433 17.3772 16.1877 17.7132 15.8517C18.0491 15.5157 18.5048 15.327 18.9799 15.327C19.455 15.327 19.9107 15.5157 20.2467 15.8517C20.5826 16.1877 20.7714 16.6433 20.7714 17.1184C20.7714 17.5936 20.5826 18.0492 20.2467 18.3852C19.9107 18.7212 19.455 18.9099 18.9799 18.9099ZM22.7829 17.6149C22.8034 17.4511 22.8187 17.2874 22.8187 17.1184C22.8187 16.9495 22.8034 16.7806 22.7829 16.6066L23.8629 15.7723C23.9601 15.6955 23.9857 15.5573 23.9243 15.4447L22.9006 13.6737C22.8392 13.5611 22.701 13.5151 22.5884 13.5611L21.3139 14.073C21.0478 13.8734 20.7714 13.6993 20.4489 13.5714L20.2595 12.215C20.239 12.0921 20.1316 12 20.0036 12H17.9562C17.8283 12 17.7208 12.0921 17.7003 12.215L17.5109 13.5714C17.1884 13.6993 16.9121 13.8734 16.6459 14.073L15.3714 13.5611C15.2588 13.5151 15.1206 13.5611 15.0592 13.6737L14.0355 15.4447C13.9689 15.5573 13.9997 15.6955 14.0969 15.7723L15.1769 16.6066C15.1564 16.7806 15.1411 16.9495 15.1411 17.1184C15.1411 17.2874 15.1564 17.4511 15.1769 17.6149L14.0969 18.4646C13.9997 18.5414 13.9689 18.6796 14.0355 18.7922L15.0592 20.5632C15.1206 20.6758 15.2588 20.7167 15.3714 20.6758L16.6459 20.1588C16.9121 20.3635 17.1884 20.5376 17.5109 20.6655L17.7003 22.0219C17.7208 22.1448 17.8283 22.2369 17.9562 22.2369H20.0036C20.1316 22.2369 20.239 22.1448 20.2595 22.0219L20.4489 20.6655C20.7714 20.5324 21.0478 20.3635 21.3139 20.1588L22.5884 20.6758C22.701 20.7167 22.8392 20.6758 22.9006 20.5632L23.9243 18.7922C23.9857 18.6796 23.9601 18.5414 23.8629 18.4646L22.7829 17.6149Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_333_46633">
<rect width="11" height="11" fill="white" transform="translate(13 11)"/>
</clipPath>
</defs>
</svg>
`, he = `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.3334 8C13.3334 5.76 11.9534 3.84667 10 3.06V3.33334C10 4.06667 9.40004 4.66667 8.66671 4.66667H7.33337V6C7.33337 6.36667 7.03337 6.66667 6.66671 6.66667H5.33337V8H9.33337C9.66671 8 9.93337 8.23334 10 8.54C8.80004 9.23334 8.00004 10.5267 8.00004 12C8.00004 13 8.36004 13.9 8.96004 14.6L8.00004 14.6667C4.33337 14.6667 1.33337 11.6667 1.33337 8C1.33337 4.33334 4.33337 1.33334 8.00004 1.33334C11.6667 1.33334 14.6667 4.33334 14.6667 8L14.6 8.96C14.2267 8.64 13.8 8.39334 13.3334 8.22667V8ZM7.33337 13.2867V12C6.60004 12 6.00004 11.4 6.00004 10.6667V10L2.80671 6.80667C2.72004 7.18667 2.66671 7.58667 2.66671 8C2.66671 10.72 4.70671 12.96 7.33337 13.2867Z" fill="currentColor"/>
<path d="M11.921 11.4377C12.0867 11.282 12.3064 11.1968 12.5338 11.2001C12.7611 11.1968 12.9808 11.282 13.1465 11.4377C13.2277 11.5071 13.2929 11.5934 13.3376 11.6904C13.3822 11.7875 13.4053 11.8931 13.4053 12C13.4053 12.1069 13.3822 12.2125 13.3376 12.3096C13.2929 12.4066 13.2277 12.4929 13.1465 12.5623C12.9808 12.718 12.7611 12.8032 12.5338 12.7999C12.3064 12.8032 12.0867 12.718 11.921 12.5623C11.8398 12.4929 11.7746 12.4066 11.73 12.3096C11.6853 12.2125 11.6622 12.1069 11.6623 12C11.6622 11.8931 11.6853 11.7875 11.73 11.6904C11.7746 11.5934 11.8398 11.5071 11.921 11.4377ZM11.4983 12.9499C11.7816 13.2055 12.1514 13.3441 12.533 13.3374C12.9137 13.3446 13.2822 13.2035 13.5608 12.9439C13.6963 12.827 13.8047 12.6821 13.8788 12.5192C13.9528 12.3563 13.9906 12.1793 13.9896 12.0004C13.9906 11.8214 13.9529 11.6443 13.8788 11.4814C13.8048 11.3184 13.6963 11.1735 13.5608 11.0565C13.2822 10.7969 12.9137 10.6558 12.533 10.663C12.1523 10.6558 11.7837 10.7969 11.5051 11.0565C11.3697 11.1734 11.2612 11.3183 11.1872 11.4812C11.1131 11.6441 11.0753 11.8211 11.0763 12C11.0754 12.1792 11.1125 12.3565 11.1853 12.5203C11.258 12.684 11.3647 12.8305 11.4983 12.9499ZM10.586 10.5502C11.1685 10.1831 11.8445 9.99215 12.533 10.0003C13.2216 9.992 13.898 10.183 14.4807 10.5502C15.0393 10.8909 15.4773 11.3979 15.7334 12C15.4773 12.6021 15.0393 13.1091 14.4807 13.4498C13.898 13.817 13.2216 14.008 12.533 13.9997C11.8445 14.0078 11.1685 13.8169 10.586 13.4498C10.0274 13.1091 9.5894 12.6021 9.33337 12C9.5894 11.3979 10.0274 10.8909 10.586 10.5502Z" fill="currentColor"/>
</svg>
`, Y = `svgString:${fe}`, ye = `svgString:${Ce}`, Ve = `svgString:${he}`;
function be(r) {
  const { action: o, destroy: n } = le(
    {
      name: "panorama",
      title: "panorama.title",
      icon: Y
    },
    {
      id: "panorama",
      slot: ie.DYNAMIC_RIGHT,
      component: ve,
      state: {
        headerTitle: "panorama.title",
        headerIcon: Y,
        infoUrlCallback: r.getHelpUrlCallback("tools/panoramaTool.html")
      }
    },
    r.windowManager,
    $
  ), s = r.toolboxManager.add(
    { action: o, type: re.SINGLE },
    $
  ), i = () => {
    o.disabled = !(r.maps.activeMap instanceof D);
  }, d = r.maps.mapActivated.addEventListener(i);
  return i(), () => {
    n(), r.toolboxManager.remove(s.id), d();
  };
}
function _e(r) {
  let o = D.getDefaultOptions().layerTypes, n, s = () => {
  };
  const i = O({
    name: "panorama.toggleLayers",
    title: "panorama.toggleLayers",
    icon: Ve,
    active: !1,
    disabled: !1,
    callback() {
      if (n) {
        const p = n;
        s(), i.active ? (p.layerTypes = o, s = p.layerTypesChanged.addEventListener(() => {
          o = p.layerTypes, i.active = !1, i.disabled = p.layerTypes.length === 0;
        }), i.active = !1) : (n.layerTypes = [], i.active = !0);
      }
    }
  }), d = () => {
    n = r.maps.activeMap instanceof D ? r.maps.activeMap : void 0;
  }, v = r.maps.mapActivated.addEventListener(d);
  return d(), {
    action: i,
    destroy() {
      v(), s();
    }
  };
}
function Me(r) {
  var v;
  const { tilePrimitiveCollection: o } = r.panoramaView, n = T(o.cursorColor.alpha === 0), s = O({
    name: "panorama.hideCursor",
    icon: "mdi-bullseye",
    title: "panorama.hideCursor",
    callback() {
      n.value = !n.value;
      const p = j.clone(
        o.cursorColor,
        new j()
      );
      p.alpha = n.value ? 0 : 1, o.cursorColor = p;
    }
  });
  s.disabled = !((v = r.currentPanoramaImage) != null && v.hasDepth);
  const i = r.currentImageChanged.addEventListener(
    () => {
      var p;
      s.disabled = !((p = r.currentPanoramaImage) != null && p.hasDepth);
    }
  ), d = M(
    n,
    () => {
      s.active = !n.value;
    },
    { immediate: !0 }
  );
  return {
    action: s,
    destroy() {
      d(), i();
    }
  };
}
function Le(r) {
  const o = T(!1), n = M(o, () => {
    for (const v of r.layers)
      v instanceof W && (v.hideInPanorama = o.value);
  }), s = r.layers.added.addEventListener((v) => {
    v instanceof W && (v.hideInPanorama = o.value);
  }), i = O({
    name: "panorama.hideFootprint",
    title: "panorama.hideFootprint",
    icon: "mdi-map-marker-path",
    callback() {
      o.value = !o.value;
    }
  }), d = M(
    o,
    () => {
      i.active = !o.value;
    },
    { immediate: !0 }
  );
  return {
    action: i,
    destroy() {
      n(), s(), d();
    }
  };
}
function Te(r) {
  const o = T(
    r.panoramaView.tilePrimitiveCollection.overlay
  ), n = [], s = (c) => {
    const C = c === "depth" ? k.Depth : k.Intensity, l = O({
      name: `panorama.complementaryImages.${c}`,
      title: `panorama.complementaryImages.${c}Title`,
      icon: c === "depth" ? ye : "mdi-gradient-horizontal",
      callback() {
        o.value === C ? o.value = k.None : o.value = C;
      }
    });
    return n.push(
      M(
        o,
        () => {
          l.active = o.value === C, r.panoramaView.tilePrimitiveCollection.overlay = o.value;
        },
        { immediate: !0 }
      )
    ), l;
  }, i = s("depth"), d = s("intensity"), v = () => {
    const c = r.currentPanoramaImage;
    i.disabled = !(c != null && c.hasDepth), d.disabled = !(c != null && c.hasIntensity);
  }, p = r.currentImageChanged.addEventListener(v);
  return v(), n.push(p), {
    actions: [i, d],
    currentOverlay: o,
    destroy() {
      n.forEach((c) => {
        c();
      });
    }
  };
}
function Se() {
  let r = () => {
  }, o;
  return {
    get name() {
      return $;
    },
    get version() {
      return de;
    },
    get mapVersion() {
      return ce;
    },
    get layerTypesAction() {
      if (!o)
        throw new Error("Panorama plugin not initialized");
      return o;
    },
    initialize(n) {
      const s = be(n), { action: i, destroy: d } = _e(n);
      return o = i, r = () => {
        s(), d();
      }, Promise.resolve();
    },
    i18n: {
      en: {
        panorama: {
          title: "Panorama tool",
          visibility: "Visibility",
          imageEnhancement: {
            title: "Image enhancement",
            brightness: "Brightness",
            contrast: "Contrast",
            reset: "Reset",
            hdr: "HDR",
            gamma: "Gamma",
            exposure: "Exposure"
          },
          complementaryImages: {
            title: "Complementary images",
            opacity: "Opacity",
            intensity: "Intensity image",
            depth: "Depth image",
            depthTitle: "Toggle depth image",
            intensityTitle: "Toggle intensity image"
          },
          imageMetadata: {
            title: "Image metadata",
            name: "Name",
            time: "Time",
            position: "Position",
            positionTooltip: "WGS84 Coordinates",
            orientation: "Orientation",
            orientationTooltip: "Heading, Pitch, Roll in Degrees",
            cameraOffset: "Camera offset",
            tileSize: "Tile size",
            hasIntensity: "Has intensity",
            hasDepth: "Has depth",
            noImage: "No image available"
          },
          notPanoramaMap: "Not a panorama map",
          hideCursor: "Toggle depth cursor",
          hideFootprint: "Toggle footprints",
          toggleLayers: "Toggle additional layers"
        }
      },
      de: {
        panorama: {
          title: "Panoramawerkzeug",
          visibility: "Sichtbarkeit",
          imageEnhancement: {
            title: "Bildverbesserung",
            brightness: "Helligkeit",
            contrast: "Kontrast",
            reset: "Zurücksetzen",
            hdr: "HDR",
            gamma: "Gamma",
            exposure: "Belichtung"
          },
          complementaryImages: {
            title: "Ergänzende Bilder",
            opacity: "Deckkraft",
            intensity: "Intensitätsbild",
            depth: "Tiefenbild",
            depthTitle: "Tiefenbild umschalten",
            intensityTitle: "Intensitätsbild umschalten"
          },
          imageMetadata: {
            title: "Bildmetadaten",
            name: "Name",
            time: "Zeit",
            position: "Position",
            positionTooltip: "WGS84 Koordinaten",
            orientation: "Ausrichtung",
            orientationTooltip: "Gier-, Nick-, Rollwinkel in Grad",
            cameraOffset: "Kameraversatz",
            tileSize: "Kachelgröße",
            hasIntensity: "Enthält Intensitätsbild",
            hasDepth: "Enthält Tiefenbild",
            noImage: "Kein Bild verfügbar"
          },
          notPanoramaMap: "Keine Panorama-Karte",
          hideCursor: "Tiefenbild-Cursor umschalten",
          hideFootprint: "Standorte umschalten",
          toggleLayers: "Zusätzliche Ebenen umschalten"
        }
      }
    },
    destroy() {
      r();
    }
  };
}
export {
  Se as default
};
