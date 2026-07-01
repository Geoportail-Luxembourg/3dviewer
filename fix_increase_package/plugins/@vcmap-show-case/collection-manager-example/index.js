import { VcsSelect as k, VcsLabel as T, VcsFormButton as D, CollectionComponentStandalone as I, CollectionManagerComponent as B, VcsFormSection as N, CollectionComponentClass as L, NotificationType as O, CollectionManager as $, createToggleAction as z, WindowSlot as P, ButtonLocation as R } from "../../../assets/ui.js";
import { resolveComponent as a, createElementBlock as V, openBlock as h, createVNode as l, withCtx as c, createCommentVNode as U, createElementVNode as j, createTextVNode as A, toDisplayString as q, inject as F, ref as w, provide as H, onMounted as J, onUnmounted as W } from "../../../assets/vue.js";
import { VDialog as G, VCard as K, VCol as Q, VRow as X, VContainer as Y } from "../../../assets/vuetify.js";
import { Collection as Z } from "../../../assets/core.js";
const i = "@vcmap-show-case/collection-manager-example", ee = "1.0.0", oe = "^6.0", m = {
  name: i,
  version: ee,
  mapVersion: oe
}, ne = (o, e) => {
  const t = o.__vccOpts || o;
  for (const [n, d] of e)
    t[n] = d;
  return t;
}, y = (o, e, t) => {
  t.actions = [
    ...t.actions,
    {
      name: "console.log",
      title: "log item, collectionComponent and listItem",
      icon: "mdi-printer",
      callback: () => console.log(o, e, t)
    }
  ];
};
function te() {
  const o = new L(
    {
      id: "standalone",
      title: "Collection Component Standalone",
      collection: new Z(),
      renamable: !0,
      selectable: !0
    },
    i
  );
  for (let e = 0; e <= 12; e++)
    o.collection.add({
      name: `item-${e}`,
      properties: {
        title: `item-${e}-title`
      },
      random: Math.random()
    });
  return o.addActions([
    {
      action: {
        name: "add",
        icon: "$vcsPlus",
        callback() {
          const e = o.collection.size;
          o.collection.add({
            name: `item-${e}`,
            properties: {
              title: `item-${e}-title`
            },
            random: Math.random()
          });
        }
      },
      owner: i
    }
  ]), o;
}
let v;
const le = {
  name: "CollectionManagerExample",
  components: {
    VcsFormSection: N,
    CollectionManagerComponent: B,
    CollectionComponentStandalone: I,
    VcsFormButton: D,
    VcsLabel: T,
    VcsSelect: k,
    VContainer: Y,
    VRow: X,
    VCol: Q,
    VCard: K,
    VDialog: G
  },
  setup() {
    const o = F("vcsApp"), e = F("collectionManager"), t = [
      "maps",
      "layers",
      "obliqueCollections",
      "styles",
      "featureInfo",
      "plugins",
      "viewpoints"
    ], n = w(t[0]), d = w(!1);
    v || (v = te()), H("collectionComponent", v), J(() => {
      e.addMappingFunction(
        () => !0,
        y,
        i
      );
    }), W(() => {
      e.removeMappingFunction(y, i);
    });
    function M(p) {
      const s = (r) => {
        var u, g;
        return ((g = (u = r == null ? void 0 : r.properties) == null ? void 0 : u.title) == null ? void 0 : g.includes("a")) || r.name.includes("a");
      };
      e.addActions(
        [
          {
            name: "addFilter",
            title: 'show only items including an "a" in title or name',
            icon: "mdi-filter-plus",
            callback: () => {
              e.addFilterFunction(s, i, [
                p
              ]);
            }
          },
          {
            name: "removeFilter",
            title: "remove filtering",
            icon: "mdi-filter-remove",
            callback: () => {
              e.removeFilterFunction(s, i);
            }
          }
        ],
        i,
        [p]
      );
    }
    function C() {
      e.has(n.value) ? o.notifier.add({
        message: "collectionManagerExample.addFailed",
        type: O.ERROR
      }) : (e.add(
        {
          id: n.value,
          title: n.value,
          collection: o[n.value],
          renamable: !0
        },
        i
      ), M(n.value));
    }
    const _ = [
      {
        name: "collectionManagerExample.addAction",
        title: "collectionManagerExample.addAction",
        icon: "$vcsPlus",
        callback() {
          d.value = !0;
        }
      },
      {
        name: "collectionManagerExample.clearAction",
        title: "collectionManagerExample.clearAction",
        callback() {
          e.clear();
        }
      }
    ];
    return {
      componentIds: e.componentIds,
      appCollections: t,
      selected: n,
      addCollection: C,
      addDialog: d,
      actions: _
    };
  }
}, ae = {
  key: 0,
  class: "pa-1"
}, ce = { class: "d-flex gc-2 w-full justify-end" };
function ie(o, e, t, n, d, M) {
  const C = a("CollectionComponentStandalone"), _ = a("CollectionManagerComponent"), p = a("VcsLabel"), s = a("v-col"), r = a("VcsSelect"), u = a("v-row"), g = a("VcsFormButton"), x = a("v-container"), b = a("v-card"), E = a("v-dialog"), S = a("VcsFormSection");
  return h(), V("div", null, [
    l(C),
    l(S, {
      heading: "Collection Manager",
      "header-actions": n.actions
    }, {
      default: c(() => [
        l(_),
        n.componentIds.length < 1 ? (h(), V("p", ae, " Add a collection by clicking + ")) : U("", !0),
        l(E, {
          modelValue: n.addDialog,
          "onUpdate:modelValue": e[1] || (e[1] = (f) => n.addDialog = f),
          width: "400"
        }, {
          default: c(() => [
            l(b, null, {
              default: c(() => [
                l(x, null, {
                  default: c(() => [
                    l(u, { "no-gutters": "" }, {
                      default: c(() => [
                        l(s, null, {
                          default: c(() => [
                            l(p, { "html-for": "selectInput" }, {
                              default: c(() => [
                                A(q(o.$t("collectionManagerExample.select")), 1)
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        l(s, null, {
                          default: c(() => [
                            l(r, {
                              id: "selectInput",
                              items: n.appCollections,
                              modelValue: n.selected,
                              "onUpdate:modelValue": e[0] || (e[0] = (f) => n.selected = f)
                            }, null, 8, ["items", "modelValue"])
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    j("div", ce, [
                      l(g, {
                        onClick: n.addCollection,
                        variant: "filled"
                      }, {
                        default: c(() => [
                          A("Add Collection")
                        ]),
                        _: 1
                      }, 8, ["onClick"])
                    ])
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ]),
          _: 1
        }, 8, ["modelValue"])
      ]),
      _: 1
    }, 8, ["header-actions"])
  ]);
}
const re = /* @__PURE__ */ ne(le, [["render", ie]]);
async function ue() {
  let o;
  return {
    get name() {
      return m.name;
    },
    get version() {
      return m.version;
    },
    get mapVersion() {
      return m.mapVersion;
    },
    get collectionManager() {
      return o;
    },
    initialize(e) {
      o = new $(e);
      const { action: t, destroy: n } = z(
        {
          name: "Collection Manager Tester",
          title: "Collection Manager Tester",
          icon: "$vcsPen"
        },
        {
          id: "collection-editor",
          component: re,
          slot: P.DETACHED,
          state: {
            headerTitle: "Collection Manager Tester",
            headerIcon: "$vcsPen"
          },
          position: {
            width: 500
          },
          provides: {
            collectionManager: o
          }
        },
        e.windowManager,
        m.name
      );
      e.navbarManager.add(
        { id: "collection-editor", action: t },
        m.name,
        R.TOOL
      ), this._destroyAction = n;
    },
    i18n: {
      de: {
        collectionManagerExample: {
          select: "Collection",
          addFailed: "Die gewählte Collection wurde bereits hinzugefügt!",
          addAction: "Collection hinzufügen",
          clearAction: "Manager leeren"
        }
      },
      en: {
        collectionManagerExample: {
          select: "Collection",
          addFailed: "The selected collection is already added!",
          addAction: "Add collection to manager",
          clearAction: "Clear Manager"
        }
      }
    },
    destroy() {
      this._destroyAction && (this._destroyAction(), this._destroyAction = null);
    }
  };
}
export {
  ue as default
};
