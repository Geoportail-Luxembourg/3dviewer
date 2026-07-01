import { PrimitiveOptionsType as ge, alreadyTransformedToMercator as fe, ArcStyle as pe, from3Dto2DLayout as se, CesiumMap as ee, from2Dto3DLayout as ye, VectorProperties as ie, Viewpoint as Fe, VectorLayer as _e, wgs84Projection as Ve, markVolatile as we } from "../../../assets/core.js";
import { BalloonFeatureInfoView as Ie, VcsFormSection as K, VcsFormButton as V, LayerContentTreeItem as ue, VcsTreeview as Pe, VcsSlider as be, VcsCheckbox as ce, VcsList as Se, VcsVectorPropertiesComponent as Ce, createToggleAction as Le, WindowSlot as $e, ButtonLocation as Te } from "../../../assets/ui.js";
import { inject as A, shallowRef as h, ref as L, computed as p, onUnmounted as H, createBlock as R, openBlock as M, unref as l, withCtx as r, createVNode as t, provide as xe, onMounted as de, createTextVNode as x, watch as te, createElementBlock as De, createCommentVNode as Be, Fragment as ke, toDisplayString as Ge, resolveComponent as S, reactive as Ae } from "../../../assets/vue.js";
import { VRow as $, VCol as v, VSwitch as le, VContainer as z, VDivider as E, VSheet as Me } from "../../../assets/vuetify.js";
import { Feature as P, ol$geom$Point as J, ol$geom$Circle as Oe, ol$geom$LineString as oe, ol$geom$Polygon as ve, ol$style$Style as Re, ol$style$Stroke as Ee, ol$style$Text as Ue, ol$geom$MultiPoint as Ne, ol$geom$MultiLineString as he, ol$geom$MultiPolygon as Ye, ol$geom$GeometryCollection as Xe, ol$Observable$unByKey as Ze } from "../../../assets/ol.js";
import { HeightReference as U } from "../../../assets/cesium.js";
const q = "@vcmap-show-case/vector-properties-example", je = "1.0.0", Ke = "^6.0", O = {
  name: q,
  version: je,
  mapVersion: Ke
};
function b(u, e = "XYZ") {
  e !== "XYZ" && se(u.getGeometry());
}
function ae(u) {
  const e = new P({
    geometry: new J([
      13.36218118875039,
      52.515822422115036,
      33.38730595560257
    ]),
    isDefault: !0,
    olcs_primitiveOptions: {
      type: ge.CYLINDER,
      geometryOptions: {
        length: 80,
        topRadius: 20,
        bottomRadius: 40
      },
      depthFailColor: "rgba(0, 0, 255, 0.2)",
      offset: [0, 0, 40]
    }
  });
  return e.setId("Primitive"), b(e, u), e;
}
function ne(u) {
  const e = new P({
    geometry: new J([
      13.363859221598505,
      52.515967046541505,
      32.59208264613772
    ]),
    isDefault: !0,
    olcs_modelUrl: "/exampleData/CesiumMan.gltf",
    olcs_modelScaleX: 20,
    olcs_modelScaleY: 20,
    olcs_modelScaleZ: 40
  });
  return e.setId("Model"), b(e, u), e;
}
function He(u) {
  const e = new P({
    geometry: new J([
      1.4884357314223575e6,
      6894028960149737e-9,
      33.5208502571338
    ]),
    isDefault: !0
  });
  return e.setStyle(
    new Re({
      text: new Ue({
        text: "Label"
      }),
      stroke: new Ee({
        color: "#FF00FF",
        width: 2
      })
    })
  ), e.setId("Label"), e.getGeometry()[fe] = !0, b(e, u), e;
}
function ze(u) {
  const e = new P({
    geometry: new oe([
      [13.366858637514758, 52.51621074844718, 32.72847998624475],
      [13.368622504013356, 52.51631428269934, 33.23048941465071]
    ]),
    isDefault: !0
  });
  return e.setStyle(new pe()), e.setId("Arrow"), b(e, u), e;
}
function Y(u) {
  const e = new P({
    geometry: new Oe(
      [13.360899224141466, 52.51506455406184, 34.09269200786326],
      1e-3
    ),
    isDefault: !0
  });
  return e.setId("Circle"), b(e, u), e;
}
function X(u) {
  const e = new P({
    geometry: new J([
      13.373567615611728,
      52.51548029456612,
      34.11213951937436
    ]),
    isDefault: !0
  });
  return e.setId("Point"), b(e, u), e;
}
function Je(u) {
  const e = new P({
    geometry: new Ne([
      [13.374358275687154, 52.513855119983305, 33.91001731696976],
      [13.37461329953504, 52.51415068687956, 34.032218848302364],
      [13.375878007044882, 52.51409378032608, 33.88938096529403]
    ]),
    isDefault: !0
  });
  return e.setId("Points"), b(e, u), e;
}
function Z(u) {
  const e = new P({
    geometry: new oe([
      [13.363844747632609, 52.515470473709854, 33.550534598980725],
      [13.366720318943523, 52.515665401253045, 33.76881006458447],
      [13.367412538305256, 52.51508187630654, 32.55462654508183]
    ]),
    isDefault: !0
  });
  return e.setId("LineString"), b(e, u), e;
}
function qe(u) {
  const e = new P({
    geometry: new he([
      [
        [13.36352639114729, 52.513266460999546, 33.26824957279316],
        [13.363353059492573, 52.51410122358479, 33.16223998562612],
        [13.364131850580959, 52.51463043952424, 33.20317208734183]
      ],
      [
        [13.365850262457908, 52.51444203087061, 32.61805259641959],
        [13.36656566684233, 52.513951194203, 32.78073146380907],
        [13.36627639442513, 52.513405317141604, 32.528679428301025]
      ],
      [
        [13.366290652223967, 52.51284093005012, 33.293564901315726],
        [13.36528194828741, 52.512304426371344, 32.5181043954614],
        [13.363954256366572, 52.512483274042154, 33.1318583891006]
      ]
    ]),
    isDefault: !0
  });
  return e.setId("LineStrings"), b(e, u), e;
}
function j(u) {
  const e = new P({
    geometry: new ve([
      [
        [13.368703252048375, 52.51483723086997, 33.49978802690113],
        [13.372125570630947, 52.514467042453646, 34.17881387564488],
        [13.372623878945069, 52.515336736733786, 33.587916392132065],
        [13.36979246350535, 52.51572336567955, 34.14276491983953],
        [13.368703252048375, 52.51483723086997, 33.49978802690113]
      ]
    ]),
    isDefault: !0
  });
  return e.setId("Polygon"), b(e, u), e;
}
function We(u) {
  const e = new P({
    geometry: new Ye([
      [
        [
          [13.368147753366285, 52.51388845623393, 33.326494025516986],
          [13.369439957644493, 52.513806731544804, 33.71837045675961],
          [13.369864824031266, 52.514204470721836, 33.90427477452053],
          [13.368652956316716, 52.51427909116808, 33.30150542013474],
          [13.368147753366285, 52.51388845623393, 33.326494025516986]
        ]
      ],
      [
        [
          [13.36908568340443, 52.513311470038445, 33.85600764188562],
          [13.370317227246808, 52.51266712675607, 33.942184554520324],
          [13.371726440088764, 52.513200118366456, 34.236263759862865],
          [13.371140661493031, 52.513403217334314, 33.836968802532446],
          [13.37025051092128, 52.51344597065966, 33.624748083503455],
          [13.369756747764669, 52.51346696101908, 33.71480053535501],
          [13.369289999321657, 52.51352152843859, 33.88720729210199],
          [13.369962684700711, 52.51365226834122, 33.50994865926776],
          [13.368960039632277, 52.51367751984219, 33.67689581665479],
          [13.36908568340443, 52.513311470038445, 33.85600764188562]
        ]
      ],
      [
        [
          [13.370951855771859, 52.514053649625225, 33.9281685013164],
          [13.371537851762398, 52.513614671407254, 34.450093341276464],
          [13.372435604984698, 52.513881261092365, 33.77611564016416],
          [13.372231219003348, 52.514139481519635, 34.244097450954634],
          [13.370951855771859, 52.514053649625225, 33.9281685013164]
        ]
      ]
    ]),
    isDefault: !0
  });
  return e.setId("Polygons"), b(e, u), e;
}
function Qe(u) {
  const e = [
    Y().getGeometry(),
    X().getGeometry(),
    Z().getGeometry(),
    j().getGeometry()
  ], s = new Xe(e);
  s.translate(0, -2e-3);
  const a = new P({
    geometry: s,
    isDefault: !0
  });
  return a.setId("GeometryCollection"), b(a, u), a;
}
function et(u) {
  const e = new P({
    geometry: new ve([
      [
        [13.368703252048375, 52.51483723086997, 33.49978802690113],
        [13.372125570630947, 52.514467042453646, 50.17881387564488],
        [13.372623878945069, 52.515336736733786, 120.58791639213206],
        [13.36979246350535, 52.51572336567955, 50.14276491983953],
        [13.368703252048375, 52.51483723086997, 33.49978802690113]
      ]
    ]),
    isDefault: !0
  });
  return e.getGeometry().translate(2e-3, -2e-3), e.setId("TiltedPolygon"), b(e, u), e;
}
function tt(u) {
  const e = new P({
    geometry: new oe([
      [13.363844747632609, 52.515470473709854, 33.550534598980725],
      [13.366720318943523, 52.515665401253045, 50.76881006458447],
      [13.367412538305256, 52.51508187630654, 120.55462654508183]
    ]),
    isDefault: !0
  });
  return e.getGeometry().translate(2e-3, -2e-3), e.setId("TiltedLineString"), b(e, u), e;
}
let N;
function lt(u) {
  return N || (N = new Ie({
    title: "Vector Properties Example",
    attributeKeys: ["featureId"]
  }), u.featureInfo.add(N)), N;
}
const at = {
  __name: "LayoutHandler",
  emits: ["layoutChanged"],
  setup(u, { emit: e }) {
    var w;
    const s = A("features"), a = A("vcsApp"), o = h(
      a.maps.activeMap instanceof ee ? a.maps.activeMap : null
    ), g = a.maps.mapActivated.addEventListener((I) => {
      I instanceof ee ? o.value = I : o.value = null;
    }), f = L(
      ((w = s.value[0]) == null ? void 0 : w.getGeometry().getLayout()) ?? "XYZ"
    ), i = L(U.CLAMP_TO_GROUND), m = e;
    m("layoutChanged", f.value);
    const d = p({
      get() {
        return f.value;
      },
      set(I) {
        I === "XY" ? s.value.forEach((y) => {
          se(y.getGeometry());
        }) : o.value && s.value.forEach((y) => {
          ye(
            y.getGeometry(),
            o.value.getScene(),
            i.value
          );
        }), f.value = I, m("layoutChanged", f.value);
      }
    });
    return H(() => {
      g();
    }), (I, y) => (M(), R(l($), { "no-gutters": "" }, {
      default: r(() => [
        t(l(v), { cols: "2" }),
        t(l(v), null, {
          default: r(() => [
            t(l(le), {
              "false-value": "XY",
              "true-value": "XYZ",
              "false-icon": "$vcs2d",
              "true-icon": "$vcs3d",
              label: d.value,
              disabled: !o.value && d.value === "XY",
              modelValue: d.value,
              "onUpdate:modelValue": y[0] || (y[0] = (C) => d.value = C)
            }, null, 8, ["label", "disabled", "modelValue"])
          ]),
          _: 1
        }),
        t(l(v), null, {
          default: r(() => [
            t(l(le), {
              "false-value": l(U).CLAMP_TO_TERRAIN,
              "true-value": l(U).CLAMP_TO_GROUND,
              modelValue: i.value,
              "onUpdate:modelValue": y[1] || (y[1] = (C) => i.value = C),
              "false-icon": "$vcsGlobalTerrain",
              "true-icon": "$vcsGlobeNature",
              label: i.value === l(U).CLAMP_TO_GROUND ? "to Ground" : "to Terrain"
            }, null, 8, ["false-value", "true-value", "modelValue", "label"])
          ]),
          _: 1
        }),
        t(l(v), { cols: "2" })
      ]),
      _: 1
    }));
  }
}, nt = {
  __name: "GeometrySettings",
  props: {
    featureProperties: {
      type: Object,
      required: !0
    }
  },
  setup(u) {
    const e = A("vcsApp"), { layer: s } = e.plugins.getByKey(q), a = h(s.getFeatures());
    xe("features", a);
    const o = s.getSource(), g = u, f = [
      o.on("addfeature", ({ feature: n }) => {
        new ie({}).setValuesForFeatures(g.featureProperties, [
          n
        ]), a.value = s.getFeatures();
      }),
      o.on("removefeature", () => {
        a.value = s.getFeatures();
      })
    ], i = L("XYZ"), m = p({
      get() {
        return a.value.some((n) => n.getId() === "Primitive");
      },
      set(n) {
        n && !m.value ? s.addFeatures([ae(i.value)]) : m.value && o.removeFeature(o.getFeatureById("Primitive"));
      }
    }), d = p({
      get() {
        return a.value.some((n) => n.getId() === "Model");
      },
      set(n) {
        n && !d.value ? s.addFeatures([ne(i.value)]) : d.value && o.removeFeature(o.getFeatureById("Model"));
      }
    }), w = p({
      get() {
        return a.value.some((n) => n.getId() === "Label");
      },
      set(n) {
        n && !w.value ? s.addFeatures([He(i.value)]) : w.value && o.removeFeature(o.getFeatureById("Label"));
      }
    }), I = p({
      get() {
        return a.value.some((n) => n.getId() === "Arrow");
      },
      set(n) {
        n && !I.value ? s.addFeatures([ze(i.value)]) : I.value && o.removeFeature(o.getFeatureById("Arrow"));
      }
    }), y = p({
      get() {
        return a.value.some((n) => n.getId() === "Circle");
      },
      set(n) {
        n && !y.value ? s.addFeatures([Y(i.value)]) : y.value && o.removeFeature(o.getFeatureById("Circle"));
      }
    }), C = p({
      get() {
        return a.value.some((n) => n.getId() === "Point");
      },
      set(n) {
        n && !C.value ? s.addFeatures([X(i.value)]) : C.value && o.removeFeature(o.getFeatureById("Point"));
      }
    }), D = p({
      get() {
        return a.value.some((n) => n.getId() === "Points");
      },
      set(n) {
        n && !D.value ? s.addFeatures([Je(i.value)]) : D.value && o.removeFeature(o.getFeatureById("Points"));
      }
    }), B = p({
      get() {
        return a.value.some((n) => n.getId() === "LineString");
      },
      set(n) {
        n && !B.value ? s.addFeatures([Z(i.value)]) : B.value && o.removeFeature(o.getFeatureById("LineString"));
      }
    }), k = p({
      get() {
        return a.value.some((n) => n.getId() === "LineStrings");
      },
      set(n) {
        n && !k.value ? s.addFeatures([qe(i.value)]) : k.value && o.removeFeature(o.getFeatureById("LineStrings"));
      }
    }), G = p({
      get() {
        return a.value.some((n) => n.getId() === "Polygon");
      },
      set(n) {
        n && !G.value ? s.addFeatures([j(i.value)]) : G.value && o.removeFeature(o.getFeatureById("Polygon"));
      }
    }), F = p({
      get() {
        return a.value.some((n) => n.getId() === "Polygons");
      },
      set(n) {
        n && !F.value ? s.addFeatures([We(i.value)]) : F.value && o.removeFeature(o.getFeatureById("Polygons"));
      }
    }), T = p({
      get() {
        return a.value.some((n) => n.getId() === "GeometryCollection");
      },
      set(n) {
        n && !T.value ? s.addFeatures([Qe(i.value)]) : T.value && o.removeFeature(o.getFeatureById("GeometryCollection"));
      }
    }), W = p({
      get() {
        return a.value.some((n) => n.getId() === "TiltedPolygon");
      },
      set(n) {
        n && !T.value ? s.addFeatures([et(i.value)]) : T.value && o.removeFeature(o.getFeatureById("TiltedPolygon"));
      }
    }), Q = p({
      get() {
        return a.value.some((n) => n.getId() === "TiltedLineString");
      },
      set(n) {
        n && !T.value ? s.addFeatures([tt(i.value)]) : T.value && o.removeFeature(o.getFeatureById("TiltedLineString"));
      }
    }), me = {
      name: "reset",
      icon: "$vcsReturn",
      callback() {
        s.removeAllFeatures(), s.addFeatures([
          ae(),
          ne(),
          Y(),
          X(),
          Z(),
          j()
        ]);
      }
    }, re = {
      name: "defaultVP",
      icon: "mdi-target",
      callback() {
        e.maps.activeMap.gotoViewpoint(
          new Fe({
            cameraPosition: [
              13.367898854716408,
              52.514030248633524,
              1546.0176382209434
            ],
            groundPosition: [
              13.367898854716412,
              52.51403023793378,
              33.15479339682457
            ],
            distance: 1512.862844824798,
            heading: 360,
            pitch: -90,
            roll: 0
          })
        );
      }
    };
    return de(() => {
      re.callback();
    }), H(() => {
      Ze(f);
    }), (n, c) => (M(), R(l(K), {
      heading: "Geometry Settings",
      expandable: "",
      "header-actions": [re, me]
    }, {
      default: r(() => [
        t(l(z), { class: "pa-2" }, {
          default: r(() => [
            t(l($), { "no-gutters": "" }, {
              default: r(() => [
                t(l(v), null, {
                  default: r(() => [
                    t(l(V), {
                      onClick: c[0] || (c[0] = (_) => m.value = !m.value),
                      active: m.value,
                      icon: "$vcsCone"
                    }, null, 8, ["active"])
                  ]),
                  _: 1
                }),
                t(l(v), null, {
                  default: r(() => [
                    t(l(V), {
                      onClick: c[1] || (c[1] = (_) => d.value = !d.value),
                      active: d.value,
                      icon: "mdi-human"
                    }, null, 8, ["active"])
                  ]),
                  _: 1
                }),
                t(l(v), null, {
                  default: r(() => [
                    t(l(V), {
                      onClick: c[2] || (c[2] = (_) => I.value = !I.value),
                      active: I.value,
                      icon: "mdi-arrow-left-right"
                    }, null, 8, ["active"])
                  ]),
                  _: 1
                }),
                t(l(v), null, {
                  default: r(() => [
                    t(l(V), {
                      onClick: c[3] || (c[3] = (_) => w.value = !w.value),
                      active: w.value,
                      icon: "mdi-text"
                    }, null, 8, ["active"])
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            t(l(E), { class: "my-2" }),
            t(l($), { "no-gutters": "" }, {
              default: r(() => [
                t(l(v), null, {
                  default: r(() => [
                    t(l(V), {
                      onClick: c[4] || (c[4] = (_) => y.value = !y.value),
                      active: y.value,
                      icon: "$vcsCircle"
                    }, null, 8, ["active"])
                  ]),
                  _: 1
                }),
                t(l(v), null, {
                  default: r(() => [
                    t(l(V), {
                      onClick: c[5] || (c[5] = (_) => B.value = !B.value),
                      active: B.value,
                      icon: "$vcsLine"
                    }, null, 8, ["active"])
                  ]),
                  _: 1
                }),
                t(l(v), null, {
                  default: r(() => [
                    t(l(V), {
                      onClick: c[6] || (c[6] = (_) => G.value = !G.value),
                      active: G.value,
                      icon: "$vcsTriangle"
                    }, null, 8, ["active"])
                  ]),
                  _: 1
                }),
                t(l(v), null, {
                  default: r(() => [
                    t(l(V), {
                      onClick: c[7] || (c[7] = (_) => C.value = !C.value),
                      active: C.value,
                      icon: "$vcsPoint"
                    }, null, 8, ["active"])
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            t(l(E), { class: "my-2" }),
            t(l($), { "no-gutters": "" }, {
              default: r(() => [
                t(l(v), null, {
                  default: r(() => [
                    t(l(V), {
                      onClick: c[8] || (c[8] = (_) => T.value = !T.value),
                      active: T.value,
                      icon: "$vcsShapes"
                    }, null, 8, ["active"])
                  ]),
                  _: 1
                }),
                t(l(v), null, {
                  default: r(() => [
                    t(l(V), {
                      onClick: c[9] || (c[9] = (_) => k.value = !k.value),
                      active: k.value,
                      icon: "$vcsLine"
                    }, {
                      default: r(() => [
                        x("+")
                      ]),
                      _: 1
                    }, 8, ["active"])
                  ]),
                  _: 1
                }),
                t(l(v), null, {
                  default: r(() => [
                    t(l(V), {
                      onClick: c[10] || (c[10] = (_) => F.value = !F.value),
                      active: F.value,
                      icon: "$vcsTriangle"
                    }, {
                      default: r(() => [
                        x("+")
                      ]),
                      _: 1
                    }, 8, ["active"])
                  ]),
                  _: 1
                }),
                t(l(v), null, {
                  default: r(() => [
                    t(l(V), {
                      onClick: c[11] || (c[11] = (_) => D.value = !D.value),
                      active: D.value,
                      icon: "$vcsPoint"
                    }, {
                      default: r(() => [
                        x("+")
                      ]),
                      _: 1
                    }, 8, ["active"])
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            t(l(E), { class: "my-2" }),
            t(l($), { "no-gutters": "" }, {
              default: r(() => [
                t(l(v)),
                t(l(v), null, {
                  default: r(() => [
                    t(l(V), {
                      onClick: c[12] || (c[12] = (_) => Q.value = !Q.value),
                      active: Q.value,
                      icon: "$vcsLine"
                    }, {
                      default: r(() => [
                        x("/")
                      ]),
                      _: 1
                    }, 8, ["active"])
                  ]),
                  _: 1
                }),
                t(l(v), null, {
                  default: r(() => [
                    t(l(V), {
                      onClick: c[13] || (c[13] = (_) => W.value = !W.value),
                      active: W.value,
                      icon: "$vcsTriangle"
                    }, {
                      default: r(() => [
                        x("/")
                      ]),
                      _: 1
                    }, 8, ["active"])
                  ]),
                  _: 1
                }),
                t(l(v))
              ]),
              _: 1
            }),
            t(l(E), { class: "my-2" }),
            t(at, {
              onLayoutChanged: c[14] || (c[14] = (_) => i.value = _)
            })
          ]),
          _: 1
        })
      ]),
      _: 1
    }, 8, ["header-actions"]));
  }
}, ot = {
  __name: "TerrainSettings",
  setup(u) {
    const e = A("vcsApp"), s = new ue(
      {
        name: "terrain",
        layerName: "GermanyBaseTerrain"
      },
      e
    ), a = new ue(
      { layerName: "mesh_surface", name: "mesh" },
      e
    ), [o] = e.maps.getByType("CesiumMap"), g = L(null), f = L(!1);
    let i = !1;
    return o && (i = o.getScene().globe.translucency.enabled, g.value = o.getScene().globe.translucency.frontFaceAlpha ?? 1, te(g, (m) => {
      o.getScene().globe.translucency.frontFaceAlpha = m;
    }), te(f, (m) => {
      o.getScene().globe.translucency.enabled = m;
    })), H(() => {
      i != null && (o.getScene().globe.translucency.enabled = i);
    }), (m, d) => (M(), R(l(K), {
      heading: "Terrain Settings",
      expandable: ""
    }, {
      default: r(() => [
        t(l(z), { class: "pa-2" }, {
          default: r(() => [
            t(l($), { "no-gutters": "" }, {
              default: r(() => [
                t(l(v), null, {
                  default: r(() => [
                    t(l(Pe), {
                      items: [
                        l(s).getTreeViewItem(),
                        l(a).getTreeViewItem()
                      ],
                      "item-children": "visibleChildren"
                    }, null, 8, ["items"])
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            g.value !== null ? (M(), De(ke, { key: 0 }, [
              t(l($), { class: "pa-4" }, {
                default: r(() => [
                  x(" Globe Transparency ")
                ]),
                _: 1
              }),
              t(l($), {
                "no-gutters": "",
                class: "d-flex align-content-space-between"
              }, {
                default: r(() => [
                  t(l(v), {
                    cols: "2",
                    class: "pl-2"
                  }, {
                    default: r(() => [
                      t(l(le), {
                        modelValue: f.value,
                        "onUpdate:modelValue": d[0] || (d[0] = (w) => f.value = w)
                      }, null, 8, ["modelValue"])
                    ]),
                    _: 1
                  }),
                  t(l(v), null, {
                    default: r(() => [
                      t(l(be), {
                        disabled: !f.value,
                        step: 0.01,
                        type: "number",
                        min: 0,
                        max: "1",
                        modelValue: g.value,
                        "onUpdate:modelValue": d[1] || (d[1] = (w) => g.value = w)
                      }, null, 8, ["disabled", "modelValue"])
                    ]),
                    _: 1
                  }),
                  t(l(v), {
                    cols: "2",
                    class: "pl-2"
                  }, {
                    default: r(() => [
                      x(Ge(g.value), 1)
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ], 64)) : Be("", !0)
          ]),
          _: 1
        })
      ]),
      _: 1
    }));
  }
}, rt = {
  __name: "LayerSettings",
  setup(u) {
    const e = A("vcsApp"), s = e.plugins.getByKey(q), { layer: a } = s, o = lt(e), g = L(a.properties.featureInfo === o.name), f = p({
      get: () => g.value,
      set: (i) => {
        i ? a.properties.featureInfo = o.name : a.properties.featureInfo = void 0, g.value = a.properties.featureInfo === o.name;
      }
    });
    return (i, m) => (M(), R(l(K), {
      heading: "Layer Settings",
      expandable: ""
    }, {
      default: r(() => [
        t(l(z), { class: "pa-2" }, {
          default: r(() => [
            t(l($), { "no-gutters": "" }, {
              default: r(() => [
                t(l(v), null, {
                  default: r(() => [
                    t(l(ce), {
                      modelValue: f.value,
                      "onUpdate:modelValue": m[0] || (m[0] = (d) => f.value = d),
                      label: "Ballon Feature Info"
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
    }));
  }
}, ut = (u, e) => {
  const s = u.__vccOpts || u;
  for (const [a, o] of e)
    s[a] = o;
  return s;
}, st = {
  name: "VectorPropertiesExample",
  components: {
    LayerSettings: rt,
    TerrainSettings: ot,
    GeometrySettings: nt,
    VcsVectorPropertiesComponent: Ce,
    VcsList: Se,
    VcsCheckbox: ce,
    VcsFormButton: V,
    VcsFormSection: K,
    VSheet: Me,
    VContainer: z,
    VRow: $,
    VCol: v
  },
  setup() {
    const u = A("vcsApp"), e = L(!1);
    function s() {
      e.value = u.maps.activeMap instanceof ee;
    }
    const a = u.maps.mapActivated.addEventListener(s);
    s();
    const { layer: o } = u.plugins.getByKey(q), g = h(
      o.vectorProperties.getValuesForFeatures(o.getFeatures())
    );
    g.value.scaleByDistance = [0, 0.5, 1e3, 1], te(g, () => {
      o.vectorProperties.setValuesForFeatures(
        g.value,
        o.getFeatures()
      );
    });
    const f = ie.getDefaultOptions(), i = Ae(
      Object.keys(f).map((d) => ({
        name: d,
        title: d
      }))
    ), m = h([...i]);
    return de(() => {
      o.activate();
    }), H(() => {
      o.deactivate(), a();
    }), {
      featureProperties: g,
      defaultOptions: f,
      is3D: e,
      propertiesToSelectFrom: i,
      propertiesSelected: m,
      properties: p(
        () => m.value.map(({ name: d }) => d)
      ),
      hideDividers: L(!1),
      expandable: L(!0),
      showReset: L(!0)
    };
  }
};
function it(u, e, s, a, o, g) {
  const f = S("VcsList"), i = S("v-col"), m = S("v-row"), d = S("VcsCheckbox"), w = S("VcsFormButton"), I = S("v-container"), y = S("VcsFormSection"), C = S("terrain-settings"), D = S("geometry-settings"), B = S("VcsVectorPropertiesComponent"), k = S("layer-settings"), G = S("v-sheet");
  return M(), R(G, null, {
    default: r(() => [
      t(y, {
        heading: "Input Settings",
        expandable: ""
      }, {
        default: r(() => [
          t(I, null, {
            default: r(() => [
              t(m, null, {
                default: r(() => [
                  t(i, null, {
                    default: r(() => [
                      t(f, {
                        items: a.propertiesToSelectFrom,
                        selectable: !0,
                        modelValue: a.propertiesSelected,
                        "onUpdate:modelValue": e[0] || (e[0] = (F) => a.propertiesSelected = F),
                        title: "Select all"
                      }, null, 8, ["items", "modelValue"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              t(m, { "no-gutters": "" }, {
                default: r(() => [
                  t(i, null, {
                    default: r(() => [
                      t(d, {
                        modelValue: a.hideDividers,
                        "onUpdate:modelValue": e[1] || (e[1] = (F) => a.hideDividers = F),
                        label: "Hide dividers"
                      }, null, 8, ["modelValue"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              t(m, { "no-gutters": "" }, {
                default: r(() => [
                  t(i, null, {
                    default: r(() => [
                      t(d, {
                        modelValue: a.expandable,
                        "onUpdate:modelValue": e[2] || (e[2] = (F) => a.expandable = F),
                        label: "Expandable"
                      }, null, 8, ["modelValue"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              t(m, { "no-gutters": "" }, {
                default: r(() => [
                  t(i, null, {
                    default: r(() => [
                      t(d, {
                        modelValue: a.showReset,
                        "onUpdate:modelValue": e[3] || (e[3] = (F) => a.showReset = F),
                        label: "Show reset vector properties"
                      }, null, 8, ["modelValue"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              t(m, { "no-gutters": "" }, {
                default: r(() => [
                  t(i, null, {
                    default: r(() => [
                      t(w, {
                        onClick: e[4] || (e[4] = () => console.log({ ...a.featureProperties }))
                      }, {
                        default: r(() => [
                          x("Log VectorProperties")
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
          })
        ]),
        _: 1
      }),
      t(C),
      t(D, { "feature-properties": a.featureProperties }, null, 8, ["feature-properties"]),
      t(B, {
        modelValue: a.featureProperties,
        "onUpdate:modelValue": e[5] || (e[5] = (F) => a.featureProperties = F),
        "value-default": a.defaultOptions,
        "show3-d-properties": a.is3D,
        properties: a.properties,
        "show-dividers": !a.hideDividers,
        expandable: a.expandable,
        "show-reset": a.showReset
      }, null, 8, ["modelValue", "value-default", "show3-d-properties", "properties", "show-dividers", "expandable", "show-reset"]),
      t(k)
    ]),
    _: 1
  });
}
const ct = /* @__PURE__ */ ut(st, [["render", it]]);
function yt() {
  const u = new _e({
    zIndex: 10,
    name: "vectorPropertiesExampleLayer",
    projection: Ve.toJSON()
  });
  return we(u), {
    get name() {
      return O.name;
    },
    get version() {
      return O.version;
    },
    get mapVersion() {
      return O.mapVersion;
    },
    get layer() {
      return u;
    },
    initialize(e) {
      const { action: s, destroy: a } = Le(
        {
          name: "Vector Properties Example"
        },
        {
          id: "vector-properties-example",
          state: {
            headerTitle: "Vector Properties Example"
          },
          component: ct,
          slot: $e.DYNAMIC_LEFT
        },
        e.windowManager,
        O.name
      );
      e.navbarManager.add(
        { id: "vectorProperties", action: s },
        O.name,
        Te.TOOL
      ), e.layers.add(u), u.addFeatures([
        ae(),
        ne(),
        Y(),
        X(),
        Z(),
        j()
      ]), this.destroy = () => {
        a(), u.deactivate(), e.layers.remove(u), u.destroy();
      };
    }
  };
}
export {
  yt as default
};
