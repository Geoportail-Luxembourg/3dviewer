import { VcsTextField as S, VcsLabel as R, VcsCheckbox as J, downloadText as Q, AbstractConfigEditor as X, VcsFormButton as Y, CollectionComponentProvider as $, CollectionComponentList as ee, CollectionComponent as oe, VcsTextArea as te, isEditorCollectionComponentClass as ne, createListExportAction as ae, createListImportAction as le, makeEditorCollectionComponentClass as re, createToggleAction as ie, WindowSlot as de, ButtonLocation as se } from "../../../assets/ui.js";
import { inject as j, reactive as ce, isRef as me, resolveComponent as d, createBlock as C, openBlock as _, withCtx as a, createVNode as t, createElementBlock as L, createTextVNode as V, toDisplayString as O, Fragment as z, renderList as W, mergeProps as ue, createCommentVNode as N, ref as x, onMounted as ge, watch as fe, onUnmounted as K, createElementVNode as D, withModifiers as P, provide as pe } from "../../../assets/vue.js";
import { VCol as H, VRow as Z, VContainer as U, VDialog as ye, VForm as _e, VCardTitle as ve, VCard as Ve, VExpansionPanels as Ce } from "../../../assets/vuetify.js";
import { getObjectFromClassRegistry as be } from "../../../assets/core.js";
const T = "@vcmap-show-case/category-tester", we = "2.0.0", Ee = "^6.0", M = {
  name: T,
  version: we,
  mapVersion: Ee
}, B = (l, o) => {
  const i = l.__vccOpts || l;
  for (const [e, y] of o)
    i[e] = y;
  return i;
}, xe = {
  name: "CollectionComponentOptions",
  components: {
    VcsCheckbox: J,
    VcsLabel: R,
    VcsTextField: S,
    VContainer: U,
    VRow: Z,
    VCol: H
  },
  setup() {
    const l = j("collectionComponent"), o = ce({
      draggable: l.draggable,
      selectable: l.selectable,
      singleSelect: l.singleSelect,
      renamable: l.renamable,
      removable: l.removable
    });
    return {
      title: l.title,
      keys: Object.keys(o),
      localOptions: o,
      updateOption(i, e) {
        o[i] = e, me(l[i]) ? l[i].value = e : l[i] = e;
      }
    };
  }
};
function Te(l, o, i, e, y, b) {
  const m = d("VcsLabel"), s = d("v-col"), f = d("VcsTextField"), p = d("v-row"), w = d("VcsCheckbox"), E = d("v-container");
  return _(), C(E, { class: "py-0 px-2" }, {
    default: a(() => [
      t(p, { "no-gutters": "" }, {
        default: a(() => [
          t(s, null, {
            default: a(() => [
              t(m, { "html-for": "title" }, {
                default: a(() => [
                  V(O(l.$t("categoryTester.title")), 1)
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          t(s, null, {
            default: a(() => [
              t(f, {
                id: "title",
                clearable: "",
                modelValue: e.title,
                "onUpdate:modelValue": o[0] || (o[0] = (g) => e.title = g)
              }, null, 8, ["modelValue"])
            ]),
            _: 1
          })
        ]),
        _: 1
      }),
      (_(!0), L(z, null, W(e.keys, (g) => (_(), C(p, {
        "no-gutters": "",
        key: g
      }, {
        default: a(() => [
          t(s, null, {
            default: a(() => [
              t(m, { "html-for": g }, {
                default: a(() => [
                  V(O(l.$st(`categoryTester.${g}`)), 1)
                ]),
                _: 2
              }, 1032, ["html-for"])
            ]),
            _: 2
          }, 1024),
          t(s, null, {
            default: a(() => [
              t(w, {
                id: g,
                "model-value": e.localOptions[g],
                "onUpdate:modelValue": (I) => e.updateOption(g, I)
              }, null, 8, ["id", "model-value", "onUpdate:modelValue"])
            ]),
            _: 2
          }, 1024)
        ]),
        _: 2
      }, 1024))), 128))
    ]),
    _: 1
  });
}
const Ie = /* @__PURE__ */ B(xe, [["render", Te]]);
function he(l, o, i) {
  const e = i.serializeModule(l.dynamicModuleId);
  e.items = e.items.filter(
    (y) => o.selection.value.find((b) => b.title === y.name)
  ), Q(JSON.stringify(e, null, 2), `${i.name}.json`);
}
async function Ae(l, o) {
  const i = o.map((e) => {
    const y = new FileReader();
    return new Promise((b, m) => {
      y.onload = (s) => {
        try {
          const { name: f, items: p } = JSON.parse(s.target.result);
          l.categories.parseCategoryItems(f, p, l.dynamicModuleId), b();
        } catch (f) {
          m(f);
        }
      }, y.readAsText(e);
    });
  });
  await Promise.all(i);
}
const Oe = {
  name: "FoobarEditor",
  components: {
    AbstractConfigEditor: X,
    VcsLabel: R,
    VcsTextField: S,
    VContainer: U,
    VRow: Z,
    VCol: H
  },
  props: {
    multi: {
      type: Boolean,
      default: !1
    },
    selection: {
      type: Object,
      default: void 0
    },
    getConfig: {
      type: Function,
      required: !0
    },
    setConfig: {
      type: Function,
      required: !0
    }
  },
  setup(l) {
    const o = x({});
    let i = () => {
    };
    ge(async () => {
      o.value = await l.getConfig();
    }), l.multi && l.selection && (i = fe(
      () => l.selection,
      async () => {
        o.value = await l.getConfig();
      }
    )), K(() => i());
    async function e() {
      await l.setConfig(o.value);
    }
    return {
      localConfig: o,
      apply: e
    };
  }
};
function Fe(l, o, i, e, y, b) {
  const m = d("VcsLabel"), s = d("v-col"), f = d("VcsTextField"), p = d("v-row"), w = d("v-container"), E = d("AbstractConfigEditor");
  return _(), C(E, ue({ onSubmit: e.apply }, { ...l.$attrs, ...l.$props }, { "set-config-on-cancel": !1 }), {
    default: a(() => [
      t(w, { class: "py-0 px-2" }, {
        default: a(() => [
          i.multi ? N("", !0) : (_(), C(p, {
            key: 0,
            "no-gutters": ""
          }, {
            default: a(() => [
              t(s, null, {
                default: a(() => [
                  t(m, {
                    "html-for": "name",
                    required: ""
                  }, {
                    default: a(() => [
                      V(O(l.$t("categoryTester.fooEditor.name")), 1)
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              t(s, null, {
                default: a(() => [
                  t(f, {
                    id: "name",
                    clearable: "",
                    modelValue: e.localConfig.name,
                    "onUpdate:modelValue": o[0] || (o[0] = (g) => e.localConfig.name = g)
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
              })
            ]),
            _: 1
          })),
          i.multi ? N("", !0) : (_(), C(p, {
            key: 1,
            "no-gutters": ""
          }, {
            default: a(() => [
              t(s, null, {
                default: a(() => [
                  t(m, { "html-for": "title" }, {
                    default: a(() => [
                      V(O(l.$t("categoryTester.fooEditor.title")), 1)
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              t(s, null, {
                default: a(() => [
                  t(f, {
                    id: "title",
                    clearable: "",
                    modelValue: e.localConfig.title,
                    "onUpdate:modelValue": o[1] || (o[1] = (g) => e.localConfig.title = g)
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
              })
            ]),
            _: 1
          })),
          t(p, { "no-gutters": "" }, {
            default: a(() => [
              t(s, null, {
                default: a(() => [
                  t(m, { "html-for": "random" }, {
                    default: a(() => [
                      V(O(l.$t("categoryTester.fooEditor.random")), 1)
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              t(s, null, {
                default: a(() => [
                  t(f, {
                    id: "random",
                    clearable: "",
                    type: "number",
                    modelValue: e.localConfig.random,
                    "onUpdate:modelValue": o[2] || (o[2] = (g) => e.localConfig.random = g),
                    modelModifiers: { number: !0 },
                    placeholder: l.$t("categoryTester.fooEditor.ambiguous")
                  }, null, 8, ["modelValue", "placeholder"])
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
  }, 16, ["onSubmit"]);
}
const q = /* @__PURE__ */ B(Oe, [["render", Fe]]), ke = (l, o, i) => {
  i.title = l.name, i.actions.push({ name: "foobar", callback: () => {
  } });
}, Me = {
  name: "CategoriesExample",
  components: {
    VcsTextArea: te,
    CollectionComponent: oe,
    CollectionComponentList: ee,
    CollectionComponentProvider: $,
    CollectionComponentOptions: Ie,
    VcsFormButton: Y,
    VcsTextField: S,
    VcsCheckbox: J,
    VContainer: U,
    VExpansionPanels: Ce,
    VCard: Ve,
    VCardTitle: ve,
    VForm: _e,
    VDialog: ye
  },
  setup(l, { attrs: o }) {
    const i = j("vcsApp");
    pe("collectionManager", i.categoryManager);
    const e = x([]), y = [], b = x([]), m = x({
      dialog: !1,
      name: "",
      addItems: !1,
      addActions: !1,
      addImportExport: !1,
      addEditors: !1,
      selectionBased: !1
    }), s = x({
      dialog: !1,
      categoryName: void 0,
      config: JSON.stringify({ name: "newItem" }, null, 2)
    }), f = x(!1);
    function p(n, u) {
      i.categoryManager.addMappingFunction(
        () => !0,
        ke,
        T,
        [n.id]
      );
      for (let v = 0; v <= 12; v++)
        n.collection.add({
          name: `${u.name}-${v}`,
          title: `${u.name}-${v}-title`,
          random: Math.random()
        });
    }
    function w(n, u) {
      n.addActions([
        {
          action: {
            name: "add",
            icon: "$vcsPlus",
            callback() {
              s.value.dialog = !0, s.value.categoryName = u.name;
            }
          },
          owner: T
        },
        {
          action: {
            name: "Category Options",
            callback() {
              f.value = !0;
            }
          },
          owner: T
        }
      ]);
    }
    function E(n, u) {
      const { action: v, destroy: h } = ae(
        n.selection,
        () => he(i, n, u),
        T
      ), { action: c, destroy: r } = le(
        (A) => Ae(i, A),
        i.windowManager,
        T,
        o["window-state"].id
      );
      y.push(h, r), n.addActions([v, c]);
    }
    function g(n, u, v) {
      n.selectable.value = !0;
      function h(c) {
        return n.collection.getByKey(c.name);
      }
      re(
        i,
        n,
        {
          editor: (c) => ({
            component: q,
            state: {
              headerTitle: `${u.name} Editor`,
              headerIcon: "$vcsEdit"
            },
            position: {
              width: 300
            },
            props: {
              async getConfig() {
                var r, A;
                return ((A = (r = n.collection).getSerializedByKey) == null ? void 0 : A.call(
                  r,
                  c.name
                )) ?? n.collection.getByKey(c.name);
              },
              setConfig(r) {
                c.name = r.name ?? c.name, c.title = r.title ?? c.title, c.random = r.random ?? c.random;
              }
            }
          }),
          multiEditor: {
            component: q,
            state: {
              headerTitle: `${u.name} Multi Editor`,
              headerIcon: "$vcsPen"
            },
            position: {
              width: 300
            },
            props: {
              multi: !0,
              selection: n.selection,
              getConfig() {
                const c = n.selection.value.map(h);
                return c.every((r) => r.random === c[0].random) ? c[0] : { random: void 0 };
              },
              setConfig(c) {
                n.selection.value.map(h).forEach((r) => {
                  r.random = c.random ?? r.random;
                });
              }
            }
          },
          selectionBased: v
        },
        o["window-state"].id
      );
    }
    function I() {
      e.value.map((n) => i.categoryManager.get(n)).forEach((n) => {
        n[ne] && (n.closeEditorWindows(), n.closeMultiEditorWindow()), i.categoryManager.remove(n.id);
      }), e.value.splice(0);
    }
    K(() => {
      y.forEach((n) => n()), I();
    });
    async function F() {
      if (s.value.categoryName) {
        const { category: n } = await i.categoryManager.requestCategory({
          name: s.value.categoryName
        });
        try {
          const u = JSON.parse(s.value.config);
          n.classRegistryName ? n.collection.add(
            be(
              i[n.classRegistryName],
              u
            )
          ) : n.collection.add(u);
        } catch {
          console.error("invalid JSON");
        }
        s.value.dialog = !1, s.value.categoryName = void 0, s.value.config = JSON.stringify({ name: "newItem" }, null, 2);
      }
    }
    const k = x(null);
    return {
      componentIds: e,
      newCategory: m,
      newItem: s,
      optionsDialog: f,
      panels: b,
      addItem: F,
      async requestCategory() {
        const { collectionComponent: n, category: u } = await i.categoryManager.requestCategory(
          { name: m.value.name },
          T
        );
        e.value.push(n.id), m.value.addItems && p(n, u), m.value.addActions && w(n, u), m.value.addImportExport && E(n, u), m.value.addEditors && g(
          n,
          u,
          m.value.selectionBased
        ), m.value.name = "", m.value.dialog = !1;
      },
      clear: I,
      hasCategory(n) {
        return !i.categoryManager.has(n) || "Category already existing";
      },
      componentView: k,
      openList(n) {
        k.value = n;
      },
      closeList() {
        k.value = null;
      }
    };
  }
}, Ne = { class: "d-flex gc-2 px-2 pt-2 pb-1" }, Le = { class: "d-flex gc-2 w-full justify-end" };
function Se(l, o, i, e, y, b) {
  const m = d("collection-component"), s = d("CollectionComponentOptions"), f = d("v-card"), p = d("v-dialog"), w = d("collection-component-provider"), E = d("v-expansion-panels"), g = d("collection-component-list"), I = d("v-container"), F = d("VcsFormButton"), k = d("v-card-title"), n = d("vcs-text-area"), u = d("vcs-form-button"), v = d("v-form"), h = d("VcsTextField"), c = d("VcsCheckbox");
  return _(), L("div", null, [
    t(I, { class: "pa-0" }, {
      default: a(() => [
        !e.componentView && e.componentIds.length > 0 ? (_(), C(E, {
          key: 0,
          variant: "accordion",
          multiple: "",
          class: "rounded-0",
          modelValue: e.panels,
          "onUpdate:modelValue": o[1] || (o[1] = (r) => e.panels = r)
        }, {
          default: a(() => [
            (_(!0), L(z, null, W(e.componentIds, (r, A) => (_(), C(w, {
              "component-id": r,
              key: r
            }, {
              default: a(() => [
                t(m, {
                  onOpenList: e.openList,
                  open: e.panels.includes(A)
                }, null, 8, ["onOpenList", "open"]),
                t(p, {
                  modelValue: e.optionsDialog,
                  "onUpdate:modelValue": o[0] || (o[0] = (G) => e.optionsDialog = G),
                  width: "300"
                }, {
                  default: a(() => [
                    t(f, { class: "pa-2" }, {
                      default: a(() => [
                        t(s)
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }, 8, ["modelValue"])
              ]),
              _: 2
            }, 1032, ["component-id"]))), 128))
          ]),
          _: 1
        }, 8, ["modelValue"])) : N("", !0),
        e.componentView ? (_(), C(w, {
          key: 1,
          "component-id": e.componentView
        }, {
          default: a(() => [
            t(g, { onCloseList: e.closeList }, null, 8, ["onCloseList"]),
            t(p, {
              modelValue: e.optionsDialog,
              "onUpdate:modelValue": o[2] || (o[2] = (r) => e.optionsDialog = r),
              width: "300"
            }, {
              default: a(() => [
                t(f, { class: "pa-2" }, {
                  default: a(() => [
                    t(s)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["modelValue"])
          ]),
          _: 1
        }, 8, ["component-id"])) : N("", !0)
      ]),
      _: 1
    }),
    D("div", Ne, [
      D("div", Le, [
        t(F, {
          onClick: o[3] || (o[3] = (r) => e.newCategory.dialog = !0),
          variant: "filled"
        }, {
          default: a(() => [
            V("Request Category")
          ]),
          _: 1
        }),
        t(F, { onClick: e.clear }, {
          default: a(() => [
            V("Clear")
          ]),
          _: 1
        }, 8, ["onClick"])
      ])
    ]),
    t(p, {
      modelValue: e.newItem.dialog,
      "onUpdate:modelValue": o[5] || (o[5] = (r) => e.newItem.dialog = r),
      width: "300"
    }, {
      default: a(() => [
        t(f, { class: "pa-2" }, {
          default: a(() => [
            t(k, null, {
              default: a(() => [
                V(O(e.newItem.categoryName), 1)
              ]),
              _: 1
            }),
            t(v, {
              onSubmit: P(e.addItem, ["prevent"])
            }, {
              default: a(() => [
                t(n, {
                  modelValue: e.newItem.config,
                  "onUpdate:modelValue": o[4] || (o[4] = (r) => e.newItem.config = r)
                }, null, 8, ["modelValue"]),
                t(u, { type: "submit" }, {
                  default: a(() => [
                    V(" Add Item ")
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["onSubmit"])
          ]),
          _: 1
        })
      ]),
      _: 1
    }, 8, ["modelValue"]),
    t(p, {
      modelValue: e.newCategory.dialog,
      "onUpdate:modelValue": o[12] || (o[12] = (r) => e.newCategory.dialog = r),
      width: "200"
    }, {
      default: a(() => [
        t(f, { class: "pa-2" }, {
          default: a(() => [
            t(v, {
              onSubmit: P(e.requestCategory, ["prevent"])
            }, {
              default: a(() => [
                t(h, {
                  modelValue: e.newCategory.name,
                  "onUpdate:modelValue": o[6] || (o[6] = (r) => e.newCategory.name = r),
                  placeholder: "category name",
                  rules: [
                    (r) => r !== "" || "Please provide a name!",
                    e.hasCategory
                  ]
                }, null, 8, ["modelValue", "rules"]),
                t(c, {
                  label: "add Foobar items",
                  modelValue: e.newCategory.addItems,
                  "onUpdate:modelValue": o[7] || (o[7] = (r) => e.newCategory.addItems = r)
                }, null, 8, ["modelValue"]),
                t(c, {
                  label: "Add & UI Option actions",
                  modelValue: e.newCategory.addActions,
                  "onUpdate:modelValue": o[8] || (o[8] = (r) => e.newCategory.addActions = r)
                }, null, 8, ["modelValue"]),
                t(c, {
                  label: "Import & Export actions",
                  modelValue: e.newCategory.addImportExport,
                  "onUpdate:modelValue": o[9] || (o[9] = (r) => e.newCategory.addImportExport = r)
                }, null, 8, ["modelValue"]),
                t(c, {
                  label: "add Foobar Editor",
                  modelValue: e.newCategory.addEditors,
                  "onUpdate:modelValue": o[10] || (o[10] = (r) => e.newCategory.addEditors = r)
                }, null, 8, ["modelValue"]),
                e.newCategory.addEditors ? (_(), C(c, {
                  key: 0,
                  label: "selection based editors",
                  class: "mx-2",
                  modelValue: e.newCategory.selectionBased,
                  "onUpdate:modelValue": o[11] || (o[11] = (r) => e.newCategory.selectionBased = r)
                }, null, 8, ["modelValue"])) : N("", !0),
                t(F, {
                  type: "submit",
                  disabled: !e.newCategory.name
                }, {
                  default: a(() => [
                    V(" Request ")
                  ]),
                  _: 1
                }, 8, ["disabled"])
              ]),
              _: 1
            }, 8, ["onSubmit"])
          ]),
          _: 1
        })
      ]),
      _: 1
    }, 8, ["modelValue"])
  ]);
}
const Ue = /* @__PURE__ */ B(Me, [["render", Se]]);
async function Re() {
  return {
    get name() {
      return M.name;
    },
    get version() {
      return M.version;
    },
    get mapVersion() {
      return M.mapVersion;
    },
    initialize(l) {
      const { action: o, destroy: i } = ie(
        {
          name: "Category Tester",
          title: "Category Tester Plugin",
          icon: "$vcsPen"
        },
        {
          id: "category-editor",
          component: Ue,
          slot: de.DETACHED,
          state: {
            headerTitle: "Category Tester",
            headerIcon: "$vcsPen"
          },
          position: {
            width: 500
          }
        },
        l.windowManager,
        M.name
      );
      l.navbarManager.add(
        { id: "category-editor", action: o },
        M.name,
        se.TOOL
      ), this._destroyAction = i;
    },
    i18n: {
      de: {
        categoryTester: {
          title: "Titel",
          draggable: "verschiebbar",
          selectable: "selektierbar",
          singleSelect: "Einfachauswahl",
          renamable: "umbenennbar",
          removable: "löschbar",
          fooEditor: {
            name: "Name",
            title: "Titel",
            random: "Zufallszahl",
            ambiguous: "mehrdeutig"
          }
        }
      },
      en: {
        categoryTester: {
          title: "Title",
          draggable: "draggable",
          selectable: "selectable",
          singleSelect: "single select",
          renamable: "renamable",
          removable: "removable",
          fooEditor: {
            name: "Name",
            title: "Title",
            random: "Random Nr",
            ambiguous: "ambiguous"
          }
        }
      }
    },
    destroy() {
      this._destroyAction && (this._destroyAction(), this._destroyAction = null);
    }
  };
}
export {
  Re as default
};
