import { VcsTextField as L, VcsLabel as R, VcsCheckbox as J, downloadText as X, AbstractConfigEditor as Y, VcsFormButton as $, CollectionComponentProvider as ee, CollectionComponentList as oe, CollectionComponent as te, VcsTextArea as ne, isEditorCollectionComponentClass as ae, createListExportAction as le, createListImportAction as ie, makeEditorCollectionComponentClass as re, createToggleAction as de, WindowSlot as se, ButtonLocation as ce } from "../../../assets/ui.js";
import { inject as j, reactive as me, ref as E, watch as z, isRef as ue, resolveComponent as s, createBlock as w, openBlock as v, withCtx as a, createVNode as t, createElementBlock as U, createTextVNode as C, toDisplayString as I, Fragment as W, renderList as K, mergeProps as ge, createCommentVNode as N, onMounted as fe, onUnmounted as H, createElementVNode as P, withModifiers as D, provide as pe } from "../../../assets/vue.js";
import { VCol as Z, VRow as G, VContainer as S, VDialog as ye, VForm as _e, VCardTitle as ve, VCard as Ve, VExpansionPanels as Ce } from "../../../assets/vuetify.js";
import { Collection as be, getObjectFromClassRegistry as we } from "../../../assets/core.js";
const T = "@vcmap-show-case/category-tester", Ee = "2.0.0", xe = "^6.0", M = {
  name: T,
  version: Ee,
  mapVersion: xe
}, B = (n, o) => {
  const r = n.__vccOpts || n;
  for (const [e, f] of o)
    r[e] = f;
  return r;
}, Te = {
  name: "CollectionComponentOptions",
  components: {
    VcsCheckbox: J,
    VcsLabel: R,
    VcsTextField: L,
    VContainer: S,
    VRow: G,
    VCol: Z
  },
  props: {},
  setup() {
    const n = j("collectionComponent"), o = me({
      draggable: n.draggable,
      selectable: n.selectable,
      singleSelect: n.singleSelect,
      renamable: n.renamable,
      removable: n.removable
    }), r = new be(), e = E(!!n.pagination.value);
    return z(e, (f) => {
      f ? (r.clear(), [...n.collection].forEach((p) => {
        r.add(p);
      }), n.setPagination({
        // just for demonstration purposes -> get Items should fetch items from server.
        getItems(p, m) {
          return {
            items: [...r].slice(
              p,
              m + p
            ),
            total: r.size
          };
        }
      })) : (n.setPagination(void 0), [...r].forEach((p) => {
        n.collection.add(p);
      }));
    }), {
      title: n.title,
      keys: Object.keys(o),
      localOptions: o,
      updateOption(f, p) {
        o[f] = p, ue(n[f]) ? n[f].value = p : n[f] = p;
      },
      pagination: e
    };
  }
};
function Ie(n, o, r, e, f, p) {
  const m = s("VcsLabel"), d = s("v-col"), y = s("VcsTextField"), _ = s("v-row"), b = s("VcsCheckbox"), x = s("v-container");
  return v(), w(x, { class: "py-0 px-2" }, {
    default: a(() => [
      t(_, { "no-gutters": "" }, {
        default: a(() => [
          t(d, null, {
            default: a(() => [
              t(m, { "html-for": "title" }, {
                default: a(() => [
                  C(I(n.$t("categoryTester.title")), 1)
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          t(d, null, {
            default: a(() => [
              t(y, {
                id: "title",
                clearable: "",
                modelValue: e.title,
                "onUpdate:modelValue": o[0] || (o[0] = (u) => e.title = u)
              }, null, 8, ["modelValue"])
            ]),
            _: 1
          })
        ]),
        _: 1
      }),
      (v(!0), U(W, null, K(e.keys, (u) => (v(), w(_, {
        "no-gutters": "",
        key: u
      }, {
        default: a(() => [
          t(d, null, {
            default: a(() => [
              t(m, { "html-for": u }, {
                default: a(() => [
                  C(I(n.$st(`categoryTester.${u}`)), 1)
                ]),
                _: 2
              }, 1032, ["html-for"])
            ]),
            _: 2
          }, 1024),
          t(d, null, {
            default: a(() => [
              t(b, {
                id: u,
                "model-value": e.localOptions[u],
                "onUpdate:modelValue": (h) => e.updateOption(u, h)
              }, null, 8, ["id", "model-value", "onUpdate:modelValue"])
            ]),
            _: 2
          }, 1024)
        ]),
        _: 2
      }, 1024))), 128)),
      t(_, { "no-gutters": "" }, {
        default: a(() => [
          t(d, null, {
            default: a(() => [
              t(m, null, {
                default: a(() => [
                  C(I(n.$st("pagination")), 1)
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          t(d, null, {
            default: a(() => [
              t(b, {
                modelValue: e.pagination,
                "onUpdate:modelValue": o[1] || (o[1] = (u) => e.pagination = u)
              }, null, 8, ["modelValue"])
            ]),
            _: 1
          })
        ]),
        _: 1
      })
    ]),
    _: 1
  });
}
const he = /* @__PURE__ */ B(Te, [["render", Ie]]);
function Ae(n, o, r) {
  const e = r.serializeModule(n.dynamicModuleId);
  e.items = e.items.filter(
    (f) => o.selection.value.find((p) => p.title === f.name)
  ), X(JSON.stringify(e, null, 2), `${r.name}.json`);
}
async function Oe(n, o) {
  const r = o.map((e) => {
    const f = new FileReader();
    return new Promise((p, m) => {
      f.onload = (d) => {
        try {
          const { name: y, items: _ } = JSON.parse(d.target.result);
          n.categories.parseCategoryItems(y, _, n.dynamicModuleId), p();
        } catch (y) {
          m(y);
        }
      }, f.readAsText(e);
    });
  });
  await Promise.all(r);
}
const Fe = {
  name: "FoobarEditor",
  components: {
    AbstractConfigEditor: Y,
    VcsLabel: R,
    VcsTextField: L,
    VContainer: S,
    VRow: G,
    VCol: Z
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
  setup(n) {
    const o = E({});
    let r = () => {
    };
    fe(async () => {
      o.value = await n.getConfig();
    }), n.multi && n.selection && (r = z(
      () => n.selection,
      async () => {
        o.value = await n.getConfig();
      }
    )), H(() => r());
    async function e() {
      await n.setConfig(o.value);
    }
    return {
      localConfig: o,
      apply: e
    };
  }
};
function ke(n, o, r, e, f, p) {
  const m = s("VcsLabel"), d = s("v-col"), y = s("VcsTextField"), _ = s("v-row"), b = s("v-container"), x = s("AbstractConfigEditor");
  return v(), w(x, ge({ onSubmit: e.apply }, { ...n.$attrs, ...n.$props }, { "set-config-on-cancel": !1 }), {
    default: a(() => [
      t(b, { class: "py-0 px-2" }, {
        default: a(() => [
          r.multi ? N("", !0) : (v(), w(_, {
            key: 0,
            "no-gutters": ""
          }, {
            default: a(() => [
              t(d, null, {
                default: a(() => [
                  t(m, {
                    "html-for": "name",
                    required: ""
                  }, {
                    default: a(() => [
                      C(I(n.$t("categoryTester.fooEditor.name")), 1)
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              t(d, null, {
                default: a(() => [
                  t(y, {
                    id: "name",
                    clearable: "",
                    modelValue: e.localConfig.name,
                    "onUpdate:modelValue": o[0] || (o[0] = (u) => e.localConfig.name = u)
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
              })
            ]),
            _: 1
          })),
          r.multi ? N("", !0) : (v(), w(_, {
            key: 1,
            "no-gutters": ""
          }, {
            default: a(() => [
              t(d, null, {
                default: a(() => [
                  t(m, { "html-for": "title" }, {
                    default: a(() => [
                      C(I(n.$t("categoryTester.fooEditor.title")), 1)
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              t(d, null, {
                default: a(() => [
                  t(y, {
                    id: "title",
                    clearable: "",
                    modelValue: e.localConfig.title,
                    "onUpdate:modelValue": o[1] || (o[1] = (u) => e.localConfig.title = u)
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
              })
            ]),
            _: 1
          })),
          t(_, { "no-gutters": "" }, {
            default: a(() => [
              t(d, null, {
                default: a(() => [
                  t(m, { "html-for": "random" }, {
                    default: a(() => [
                      C(I(n.$t("categoryTester.fooEditor.random")), 1)
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              t(d, null, {
                default: a(() => [
                  t(y, {
                    id: "random",
                    clearable: "",
                    type: "number",
                    modelValue: e.localConfig.random,
                    "onUpdate:modelValue": o[2] || (o[2] = (u) => e.localConfig.random = u),
                    modelModifiers: { number: !0 },
                    placeholder: n.$t("categoryTester.fooEditor.ambiguous")
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
const q = /* @__PURE__ */ B(Fe, [["render", ke]]), Me = (n, o, r) => {
  r.title = n.name, r.actions.push({ name: "foobar", callback: () => {
  } });
}, Ne = {
  name: "CategoriesExample",
  components: {
    VcsTextArea: ne,
    CollectionComponent: te,
    CollectionComponentList: oe,
    CollectionComponentProvider: ee,
    CollectionComponentOptions: he,
    VcsFormButton: $,
    VcsTextField: L,
    VcsCheckbox: J,
    VContainer: S,
    VExpansionPanels: Ce,
    VCard: Ve,
    VCardTitle: ve,
    VForm: _e,
    VDialog: ye
  },
  setup(n, { attrs: o }) {
    const r = j("vcsApp");
    pe("collectionManager", r.categoryManager);
    const e = E([]), f = [], p = E([]), m = E({
      dialog: !1,
      name: "",
      addItems: !1,
      addActions: !1,
      addImportExport: !1,
      addEditors: !1,
      selectionBased: !1
    }), d = E({
      dialog: !1,
      categoryName: void 0,
      config: JSON.stringify({ name: "newItem" }, null, 2)
    }), y = E(!1);
    function _(l, g) {
      r.categoryManager.addMappingFunction(
        () => !0,
        Me,
        T,
        [l.id]
      );
      for (let V = 0; V <= 12; V++)
        l.collection.add({
          name: `${g.name}-${V}`,
          title: `${g.name}-${V}-title`,
          random: Math.random()
        });
    }
    function b(l, g) {
      l.addActions([
        {
          action: {
            name: "add",
            icon: "$vcsPlus",
            callback() {
              d.value.dialog = !0, d.value.categoryName = g.name;
            }
          },
          owner: T
        },
        {
          action: {
            name: "Category Options",
            callback() {
              y.value = !0;
            }
          },
          owner: T
        }
      ]);
    }
    function x(l, g) {
      const { action: V, destroy: A } = le(
        l.selection,
        () => Ae(r, l, g),
        T
      ), { action: c, destroy: i } = ie(
        (O) => Oe(r, O),
        r.windowManager,
        T,
        o["window-state"].id
      );
      f.push(A, i), l.addActions([V, c]);
    }
    function u(l, g, V) {
      l.selectable.value = !0;
      function A(c) {
        return l.collection.getByKey(c.name);
      }
      re(
        r,
        l,
        {
          editor: (c) => ({
            component: q,
            state: {
              headerTitle: `${g.name} Editor`,
              headerIcon: "$vcsEdit"
            },
            position: {
              width: 300
            },
            props: {
              async getConfig() {
                var i, O;
                return ((O = (i = l.collection).getSerializedByKey) == null ? void 0 : O.call(
                  i,
                  c.name
                )) ?? l.collection.getByKey(c.name);
              },
              setConfig(i) {
                c.name = i.name ?? c.name, c.title = i.title ?? c.title, c.random = i.random ?? c.random;
              }
            }
          }),
          multiEditor: {
            component: q,
            state: {
              headerTitle: `${g.name} Multi Editor`,
              headerIcon: "$vcsPen"
            },
            position: {
              width: 300
            },
            props: {
              multi: !0,
              selection: l.selection,
              getConfig() {
                const c = l.selection.value.map(A);
                return c.every((i) => i.random === c[0].random) ? c[0] : { random: void 0 };
              },
              setConfig(c) {
                l.selection.value.map(A).forEach((i) => {
                  i.random = c.random ?? i.random;
                });
              }
            }
          },
          selectionBased: V
        },
        o["window-state"].id
      );
    }
    function h() {
      e.value.map((l) => r.categoryManager.get(l)).forEach((l) => {
        l[ae] && (l.closeEditorWindows(), l.closeMultiEditorWindow()), r.categoryManager.remove(l.id);
      }), e.value.splice(0);
    }
    H(() => {
      f.forEach((l) => l()), h();
    });
    async function F() {
      if (d.value.categoryName) {
        const { category: l } = await r.categoryManager.requestCategory({
          name: d.value.categoryName
        });
        try {
          const g = JSON.parse(d.value.config);
          l.classRegistryName ? l.collection.add(
            we(
              r[l.classRegistryName],
              g
            )
          ) : l.collection.add(g);
        } catch {
          console.error("invalid JSON");
        }
        d.value.dialog = !1, d.value.categoryName = void 0, d.value.config = JSON.stringify({ name: "newItem" }, null, 2);
      }
    }
    const k = E(null);
    return {
      componentIds: e,
      newCategory: m,
      newItem: d,
      optionsDialog: y,
      panels: p,
      addItem: F,
      async requestCategory() {
        const { collectionComponent: l, category: g } = await r.categoryManager.requestCategory(
          { name: m.value.name },
          T
        );
        e.value.push(l.id), m.value.addItems && _(l, g), m.value.addActions && b(l, g), m.value.addImportExport && x(l, g), m.value.addEditors && u(
          l,
          g,
          m.value.selectionBased
        ), m.value.name = "", m.value.dialog = !1;
      },
      clear: h,
      hasCategory(l) {
        return !r.categoryManager.has(l) || "Category already existing";
      },
      componentView: k,
      openList(l) {
        k.value = l;
      },
      closeList() {
        k.value = null;
      }
    };
  }
}, Ue = { class: "d-flex gc-2 px-2 pt-2 pb-1" }, Le = { class: "d-flex gc-2 w-full justify-end" };
function Se(n, o, r, e, f, p) {
  const m = s("collection-component"), d = s("CollectionComponentOptions"), y = s("v-card"), _ = s("v-dialog"), b = s("collection-component-provider"), x = s("v-expansion-panels"), u = s("collection-component-list"), h = s("v-container"), F = s("VcsFormButton"), k = s("v-card-title"), l = s("vcs-text-area"), g = s("vcs-form-button"), V = s("v-form"), A = s("VcsTextField"), c = s("VcsCheckbox");
  return v(), U("div", null, [
    t(h, { class: "pa-0" }, {
      default: a(() => [
        !e.componentView && e.componentIds.length > 0 ? (v(), w(x, {
          key: 0,
          variant: "accordion",
          multiple: "",
          class: "rounded-0",
          modelValue: e.panels,
          "onUpdate:modelValue": o[1] || (o[1] = (i) => e.panels = i)
        }, {
          default: a(() => [
            (v(!0), U(W, null, K(e.componentIds, (i, O) => (v(), w(b, {
              "component-id": i,
              key: i
            }, {
              default: a(() => [
                t(m, {
                  onOpenList: e.openList,
                  open: e.panels.includes(O)
                }, null, 8, ["onOpenList", "open"]),
                t(_, {
                  modelValue: e.optionsDialog,
                  "onUpdate:modelValue": o[0] || (o[0] = (Q) => e.optionsDialog = Q),
                  width: "300"
                }, {
                  default: a(() => [
                    t(y, { class: "pa-2" }, {
                      default: a(() => [
                        t(d)
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
        e.componentView ? (v(), w(b, {
          key: 1,
          "component-id": e.componentView
        }, {
          default: a(() => [
            t(u, { onCloseList: e.closeList }, null, 8, ["onCloseList"]),
            t(_, {
              modelValue: e.optionsDialog,
              "onUpdate:modelValue": o[2] || (o[2] = (i) => e.optionsDialog = i),
              width: "300"
            }, {
              default: a(() => [
                t(y, { class: "pa-2" }, {
                  default: a(() => [
                    t(d)
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
    P("div", Ue, [
      P("div", Le, [
        t(F, {
          onClick: o[3] || (o[3] = (i) => e.newCategory.dialog = !0),
          variant: "filled"
        }, {
          default: a(() => [
            C("Request Category")
          ]),
          _: 1
        }),
        t(F, { onClick: e.clear }, {
          default: a(() => [
            C("Clear")
          ]),
          _: 1
        }, 8, ["onClick"])
      ])
    ]),
    t(_, {
      modelValue: e.newItem.dialog,
      "onUpdate:modelValue": o[5] || (o[5] = (i) => e.newItem.dialog = i),
      width: "300"
    }, {
      default: a(() => [
        t(y, { class: "pa-2" }, {
          default: a(() => [
            t(k, null, {
              default: a(() => [
                C(I(e.newItem.categoryName), 1)
              ]),
              _: 1
            }),
            t(V, {
              onSubmit: D(e.addItem, ["prevent"])
            }, {
              default: a(() => [
                t(l, {
                  modelValue: e.newItem.config,
                  "onUpdate:modelValue": o[4] || (o[4] = (i) => e.newItem.config = i)
                }, null, 8, ["modelValue"]),
                t(g, { type: "submit" }, {
                  default: a(() => [
                    C(" Add Item ")
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
    t(_, {
      modelValue: e.newCategory.dialog,
      "onUpdate:modelValue": o[12] || (o[12] = (i) => e.newCategory.dialog = i),
      width: "200"
    }, {
      default: a(() => [
        t(y, { class: "pa-2" }, {
          default: a(() => [
            t(V, {
              onSubmit: D(e.requestCategory, ["prevent"])
            }, {
              default: a(() => [
                t(A, {
                  modelValue: e.newCategory.name,
                  "onUpdate:modelValue": o[6] || (o[6] = (i) => e.newCategory.name = i),
                  placeholder: "category name",
                  rules: [
                    (i) => i !== "" || "Please provide a name!",
                    e.hasCategory
                  ]
                }, null, 8, ["modelValue", "rules"]),
                t(c, {
                  label: "add Foobar items",
                  modelValue: e.newCategory.addItems,
                  "onUpdate:modelValue": o[7] || (o[7] = (i) => e.newCategory.addItems = i)
                }, null, 8, ["modelValue"]),
                t(c, {
                  label: "Add & UI Option actions",
                  modelValue: e.newCategory.addActions,
                  "onUpdate:modelValue": o[8] || (o[8] = (i) => e.newCategory.addActions = i)
                }, null, 8, ["modelValue"]),
                t(c, {
                  label: "Import & Export actions",
                  modelValue: e.newCategory.addImportExport,
                  "onUpdate:modelValue": o[9] || (o[9] = (i) => e.newCategory.addImportExport = i)
                }, null, 8, ["modelValue"]),
                t(c, {
                  label: "add Foobar Editor",
                  modelValue: e.newCategory.addEditors,
                  "onUpdate:modelValue": o[10] || (o[10] = (i) => e.newCategory.addEditors = i)
                }, null, 8, ["modelValue"]),
                e.newCategory.addEditors ? (v(), w(c, {
                  key: 0,
                  label: "selection based editors",
                  class: "mx-2",
                  modelValue: e.newCategory.selectionBased,
                  "onUpdate:modelValue": o[11] || (o[11] = (i) => e.newCategory.selectionBased = i)
                }, null, 8, ["modelValue"])) : N("", !0),
                t(F, {
                  type: "submit",
                  disabled: !e.newCategory.name
                }, {
                  default: a(() => [
                    C(" Request ")
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
const Be = /* @__PURE__ */ B(Ne, [["render", Se]]);
async function Je() {
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
    initialize(n) {
      const { action: o, destroy: r } = de(
        {
          name: "Category Tester",
          title: "Category Tester Plugin",
          icon: "$vcsPen"
        },
        {
          id: "category-editor",
          component: Be,
          slot: se.DETACHED,
          state: {
            headerTitle: "Category Tester",
            headerIcon: "$vcsPen"
          },
          position: {
            width: 500
          }
        },
        n.windowManager,
        M.name
      );
      n.navbarManager.add(
        { id: "category-editor", action: o },
        M.name,
        ce.TOOL
      ), this._destroyAction = r;
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
          pagination: "Pagination",
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
          pagination: "Pagination",
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
  Je as default
};
