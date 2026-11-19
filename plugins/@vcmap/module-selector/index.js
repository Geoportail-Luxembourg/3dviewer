
function loadCss(href) {
  return new Promise((resolve, reject) => {
    const elem = document.createElement('link');
    elem.rel = 'stylesheet';
    elem.href = href;
    elem.defer = false;
    elem.async = false;
    elem.onload = resolve;
    elem.onerror = reject;
    document.head.appendChild(elem);
  });
} await loadCss('data:text/css;base64,LnYtY2FyZFtkYXRhLXYtMDYwNmI1YmVde2Rpc3BsYXk6ZmxleDtmbGV4LWRpcmVjdGlvbjpjb2x1bW47anVzdGlmeS1jb250ZW50OmNlbnRlcjthbGlnbi1pdGVtczpjZW50ZXI7aGVpZ2h0OjE1MHB4O3dpZHRoOjE1MHB4O2FzcGVjdC1yYXRpbzoxO3RyYW5zaXRpb246YmFja2dyb3VuZC1jb2xvciAuM3N9LmZpeGVkLWNhcmRbZGF0YS12LTA2MDZiNWJlXXtoZWlnaHQ6MTUwcHg7d2lkdGg6MTUwcHg7YXNwZWN0LXJhdGlvOjF9LnNlbGVjdGVkLWNhcmRbZGF0YS12LTA2MDZiNWJlXXtiYWNrZ3JvdW5kLWNvbG9yOnJnYih2YXIoLS12LXRoZW1lLXByaW1hcnkpKTtjb2xvcjpyZ2IodmFyKC0tdi10aGVtZS1vbi1wcmltYXJ5KSl9LnRvcC1sZWZ0LWljb25bZGF0YS12LTA2MDZiNWJlXXtwb3NpdGlvbjphYnNvbHV0ZTt0b3A6OHB4O2xlZnQ6OHB4O3otaW5kZXg6MTA7Y3Vyc29yOnBvaW50ZXI7Y29sb3I6cmdiKHZhcigtLXYtdGhlbWUtb24tc3VyZmFjZSkpfS50b3AtbGVmdC1pY29uLnNlbGVjdGVkW2RhdGEtdi0wNjA2YjViZV17Y29sb3I6cmdiKHZhcigtLXYtdGhlbWUtb24tcHJpbWFyeSkpfS5ncm91cENhcmRbZGF0YS12LTA2MDZiNWJlXXt3aWR0aDoxNDZweDtiYWNrZ3JvdW5kLWNvbG9yOnJnYih2YXIoLS12LXRoZW1lLXN1cmZhY2UpKTtib3JkZXI6bm9uZSFpbXBvcnRhbnQ7Ym9yZGVyLXJpZ2h0OjFweCBzb2xpZCFpbXBvcnRhbnR9LmludGVybWVkaWF0ZS1jYXJkW2RhdGEtdi0wNjA2YjViZV17d2lkdGg6MTQ4cHg7YmFja2dyb3VuZC1jb2xvcjpyZ2IodmFyKC0tdi10aGVtZS1zdXJmYWNlKSk7Ym9yZGVyOm5vbmUhaW1wb3J0YW50O2JvcmRlci1yaWdodDoxcHggc29saWQhaW1wb3J0YW50fS5ncm91cFRpdGxlW2RhdGEtdi0wNjA2YjViZV0sLmdyb3VwSWNvbltkYXRhLXYtMDYwNmI1YmVde21hcmdpbi1sZWZ0OjIwcHghaW1wb3J0YW50fS5maXhlZC1ib3R0b21bZGF0YS12LTA2MDZiNWJlXXtwb3NpdGlvbjpzdGlja3k7Ym90dG9tOjA7YmFja2dyb3VuZC1jb2xvcjpyZ2IodmFyKC0tdi10aGVtZS1zdXJmYWNlKSk7ei1pbmRleDoxMH0K');var qe = Object.defineProperty;
var Pe = (e, o, i) => o in e ? qe(e, o, { enumerable: !0, configurable: !0, writable: !0, value: i }) : e[o] = i;
var J = (e, o, i) => Pe(e, typeof o != "symbol" ? o + "" : o, i);
import { VcsFormButton as ce, VcsTextField as me, VcsLabel as Se, VcsFormSection as ye, VcsTextArea as we, VcsCheckbox as ke, useProxiedComplexModel as je, useModelHasProperty as Le, VcsDataTable as ze, VcsList as We, AbstractConfigEditor as He, WindowSlot as Ke, createToggleAction as Je, ButtonLocation as Ze } from "../../../assets/ui.js";
import { defineComponent as oe, inject as Ue, computed as Z, resolveComponent as a, openBlock as C, createBlock as U, withCtx as t, createVNode as l, mergeProps as se, createTextVNode as h, toDisplayString as g, createCommentVNode as G, createElementVNode as L, createElementBlock as K, Fragment as ee, renderList as he, normalizeClass as re, ref as A, normalizeProps as Qe, guardReactiveProps as Xe, reactive as Ye, watch as xe, toRaw as fe } from "../../../assets/vue.js";
import { VSheet as Ae, VContainer as te, VRow as le, VCol as ie, VCard as Ie, VIcon as Te, VCardTitle as eo, VTooltip as Ne, VForm as Ee, VDivider as oo, VDialog as to } from "../../../assets/vuetify.js";
import { VcsModule as lo } from "../../../assets/core.js";
function Ce(e, o) {
  if (e != null) {
    const i = Number.parseInt(String(e), 10);
    if (i != null && !Number.isNaN(i))
      return i;
  }
  return o;
}
function io(e, o) {
  return e == null ? !!o : typeof e == "boolean" ? e : e === 1 ? !0 : e === 0 ? !1 : typeof e == "string" && (e.toLowerCase() === "true" || e.toLowerCase() === "1") ? !0 : typeof e == "string" && (e.toLowerCase() === "false" || e.toLowerCase() === "0") ? !1 : !!o;
}
function no(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var ro = function e(o, i) {
  if (o === i) return !0;
  if (o && i && typeof o == "object" && typeof i == "object") {
    if (o.constructor !== i.constructor) return !1;
    var d, n, r;
    if (Array.isArray(o)) {
      if (d = o.length, d != i.length) return !1;
      for (n = d; n-- !== 0; )
        if (!e(o[n], i[n])) return !1;
      return !0;
    }
    if (o.constructor === RegExp) return o.source === i.source && o.flags === i.flags;
    if (o.valueOf !== Object.prototype.valueOf) return o.valueOf() === i.valueOf();
    if (o.toString !== Object.prototype.toString) return o.toString() === i.toString();
    if (r = Object.keys(o), d = r.length, d !== Object.keys(i).length) return !1;
    for (n = d; n-- !== 0; )
      if (!Object.prototype.hasOwnProperty.call(i, r[n])) return !1;
    for (n = d; n-- !== 0; ) {
      var s = r[n];
      if (!e(o[s], i[s])) return !1;
    }
    return !0;
  }
  return o !== o && i !== i;
};
const ge = /* @__PURE__ */ no(ro), z = "@vcmap/module-selector", so = "3.0.0", uo = "^6.1";
async function $e(e, o) {
  const i = await fetch(e, {
    method: "GET"
  }).then((d) => {
    if (d.ok)
      return d.json();
  });
  if (i) {
    i._id = "moduleSelector_module_id";
    const d = new lo(i);
    await o.addModule(d);
  }
}
async function ao(e) {
  var n, r;
  const o = "moduleSelector_module_id", i = (n = e.maps.activeMap) == null ? void 0 : n.name;
  e.getModuleById(o) && await e.removeModule(o), e.maps.activeMap || await e.maps.setActiveMap(i || ((r = [...e.maps][0]) == null ? void 0 : r.name));
}
const ae = "moduleSelector_window_id";
async function Oe(e, o, i, d, n) {
  var u;
  if (await ao(i), e === null && !n) {
    i.windowManager.remove(ae);
    return;
  }
  const r = d[e], s = (r == null ? void 0 : r.type) === "group" ? (u = r.cards) == null ? void 0 : u[o] : null;
  s != null && s.moduleUrl ? await $e(s.moduleUrl, i) : (r == null ? void 0 : r.type) === "url" && await $e(r.moduleUrl, i), i.windowManager.remove(ae);
}
const co = oe({
  name: "ModuleSelector",
  methods: { startApplication: Oe },
  components: {
    VSheet: Ae,
    VContainer: te,
    VRow: le,
    VCol: ie,
    VCard: Ie,
    VIcon: Te,
    VCardTitle: eo,
    VcsFormButton: ce,
    VTooltip: Ne
  },
  props: {
    modules: {
      type: Array,
      required: !0
    },
    basisModule: {
      type: Object,
      required: !1,
      default: void 0
    },
    requireModuleSelection: {
      type: Boolean,
      required: !1,
      default: !1
    }
  },
  setup(e) {
    const o = Ue("vcsApp"), i = o.plugins.getByKey(z), { modules: d } = e, n = Z(() => {
      const c = e.modules[i.selectedMainModuleIndex.value];
      return (c == null ? void 0 : c.type) === "group" ? c.cards : [];
    }), r = (c) => {
      i.selectedMainModuleIndex.value === c ? i.selectedMainModuleIndex.value = null : i.selectedMainModuleIndex.value = c;
    }, s = (c) => {
      i.selectedNestedModuleIndex.value === c ? i.selectedNestedModuleIndex.value = null : i.selectedNestedModuleIndex.value = c;
    }, u = () => {
      i.selectedNestedModuleIndex.value = null, i.selectedMainModuleIndex.value = null;
    }, S = Z(() => {
      if (!e.requireModuleSelection) return !1;
      const c = i.selectedMainModuleIndex.value, y = i.selectedNestedModuleIndex.value, M = d[c];
      return c == null || (M == null ? void 0 : M.type) === "group" && M.cards && y == null;
    });
    return {
      nestedCards: n,
      plugin: i,
      selectModule: r,
      selectNestedModule: s,
      showMainCards: u,
      isButtonDisabled: S,
      app: o
    };
  }
}), ne = (e, o) => {
  const i = e.__vccOpts || e;
  for (const [d, n] of o)
    i[d] = n;
  return i;
};
function mo(e, o, i, d, n, r) {
  const s = a("v-icon"), u = a("v-tooltip"), S = a("v-card-title"), c = a("v-card"), y = a("v-col"), M = a("v-row"), $ = a("VcsFormButton"), B = a("v-container"), b = a("v-sheet");
  return C(), U(b, {
    class: "module-selector",
    elevation: "1"
  }, {
    default: t(() => [
      l(B, null, {
        default: t(() => [
          l(M, {
            class: "justify-center align-center",
            "no-gutters": ""
          }, {
            default: t(() => [
              e.basisModule && !e.nestedCards.length ? (C(), U(y, {
                key: 0,
                cols: "auto",
                class: "pa-2"
              }, {
                default: t(() => [
                  l(c, {
                    class: "pa-3 fixed-card selected-card",
                    variant: "outlined"
                  }, {
                    default: t(() => [
                      l(u, { "max-width": 300 }, {
                        activator: t(({ props: v }) => [
                          e.basisModule.description ? (C(), U(
                            s,
                            se({
                              key: 0,
                              class: "top-left-icon"
                            }, v),
                            {
                              default: t(() => [
                                h(g("$vcsInfo"))
                              ]),
                              _: 2
                              /* DYNAMIC */
                            },
                            1040
                            /* FULL_PROPS, DYNAMIC_SLOTS */
                          )) : G("v-if", !0)
                        ]),
                        default: t(() => [
                          L(
                            "span",
                            null,
                            g(e.$st(e.basisModule.description)),
                            1
                            /* TEXT */
                          )
                        ]),
                        _: 1
                        /* STABLE */
                      }),
                      e.basisModule.icon ? (C(), U(s, {
                        key: 0,
                        size: "50"
                      }, {
                        default: t(() => [
                          h(
                            g(e.basisModule.icon),
                            1
                            /* TEXT */
                          )
                        ]),
                        _: 1
                        /* STABLE */
                      })) : G("v-if", !0),
                      l(S, { class: "text-center" }, {
                        default: t(() => [
                          h(
                            g(e.$st(e.basisModule.title)),
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
                  })
                ]),
                _: 1
                /* STABLE */
              })) : G("v-if", !0),
              e.nestedCards.length ? (C(), K(
                ee,
                { key: 2 },
                [
                  l(y, {
                    cols: "auto",
                    class: "pa-2"
                  }, {
                    default: t(() => [
                      l(c, {
                        class: "fixed-card hover-card",
                        variant: "outlined",
                        onClick: o[0] || (o[0] = (v) => e.showMainCards())
                      }, {
                        default: t(() => [
                          l(s, { size: "50" }, {
                            default: t(() => [
                              h("mdi-arrow-left")
                            ]),
                            _: 1
                            /* STABLE */
                          }),
                          h(
                            " " + g(e.$st("moduleSelector.cardBack")),
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
                  (C(!0), K(
                    ee,
                    null,
                    he(e.nestedCards, (v, T) => (C(), U(
                      y,
                      {
                        key: T,
                        cols: "auto",
                        class: "pa-2"
                      },
                      {
                        default: t(() => [
                          l(c, {
                            class: re(["fixed-card hover-card", {
                              "selected-card": e.plugin.selectedNestedModuleIndex.value === T
                            }]),
                            variant: "outlined",
                            onClick: (p) => e.selectNestedModule(T)
                          }, {
                            default: t(() => [
                              l(
                                u,
                                { "max-width": 300 },
                                {
                                  activator: t(({ props: p }) => [
                                    v.description ? (C(), U(
                                      s,
                                      se({
                                        key: 0,
                                        class: "top-left-icon",
                                        ref_for: !0
                                      }, p),
                                      {
                                        default: t(() => [
                                          h(g("$vcsInfo"))
                                        ]),
                                        _: 2
                                        /* DYNAMIC */
                                      },
                                      1040
                                      /* FULL_PROPS, DYNAMIC_SLOTS */
                                    )) : G("v-if", !0)
                                  ]),
                                  default: t(() => [
                                    L(
                                      "span",
                                      null,
                                      g(e.$st(v.description)),
                                      1
                                      /* TEXT */
                                    )
                                  ]),
                                  _: 2
                                  /* DYNAMIC */
                                },
                                1024
                                /* DYNAMIC_SLOTS */
                              ),
                              v.icon ? (C(), U(
                                s,
                                {
                                  key: 0,
                                  size: "50"
                                },
                                {
                                  default: t(() => [
                                    h(
                                      g(v.icon),
                                      1
                                      /* TEXT */
                                    )
                                  ]),
                                  _: 2
                                  /* DYNAMIC */
                                },
                                1024
                                /* DYNAMIC_SLOTS */
                              )) : G("v-if", !0),
                              l(
                                S,
                                { class: "text-center" },
                                {
                                  default: t(() => [
                                    h(
                                      g(e.$st(v.title)),
                                      1
                                      /* TEXT */
                                    )
                                  ]),
                                  _: 2
                                  /* DYNAMIC */
                                },
                                1024
                                /* DYNAMIC_SLOTS */
                              )
                            ]),
                            _: 2
                            /* DYNAMIC */
                          }, 1032, ["class", "onClick"])
                        ]),
                        _: 2
                        /* DYNAMIC */
                      },
                      1024
                      /* DYNAMIC_SLOTS */
                    ))),
                    128
                    /* KEYED_FRAGMENT */
                  ))
                ],
                64
                /* STABLE_FRAGMENT */
              )) : (C(!0), K(
                ee,
                { key: 1 },
                he(e.modules, (v, T) => (C(), U(
                  y,
                  {
                    cols: "auto",
                    class: "pa-2",
                    key: T
                  },
                  {
                    default: t(() => [
                      l(c, {
                        class: re(["fixed-card hover-card", {
                          "selected-card": e.plugin.selectedMainModuleIndex.value === T,
                          "pr-3": v.type === "group"
                        }]),
                        variant: "outlined",
                        onClick: (p) => e.selectModule(T)
                      }, {
                        default: t(() => [
                          l(
                            u,
                            { "max-width": 300 },
                            {
                              activator: t(({ props: p }) => [
                                v.description ? (C(), U(s, se({
                                  key: 0,
                                  class: ["top-left-icon", {
                                    selected: e.plugin.selectedMainModuleIndex.value === T
                                  }],
                                  ref_for: !0
                                }, p), {
                                  default: t(() => [
                                    h(g("$vcsInfo"))
                                  ]),
                                  _: 2
                                  /* DYNAMIC */
                                }, 1040, ["class"])) : G("v-if", !0)
                              ]),
                              default: t(() => [
                                L(
                                  "span",
                                  null,
                                  g(e.$st(v.description)),
                                  1
                                  /* TEXT */
                                )
                              ]),
                              _: 2
                              /* DYNAMIC */
                            },
                            1024
                            /* DYNAMIC_SLOTS */
                          ),
                          v.type === "group" && v.cards ? (C(), U(c, {
                            key: 0,
                            class: re(["intermediate-card", {
                              "selected-card": e.plugin.selectedMainModuleIndex.value === T,
                              "pr-3": v.type === "group"
                            }]),
                            variant: "outlined"
                          }, {
                            default: t(() => [
                              l(c, {
                                variant: v.type === "group" && v.cards ? "outlined" : void 0,
                                class: re({
                                  "selected-card": e.plugin.selectedMainModuleIndex.value === T,
                                  groupCard: v.type === "group",
                                  innerCard: v.type === "group"
                                })
                              }, {
                                default: t(() => [
                                  v.icon ? (C(), U(
                                    s,
                                    {
                                      key: 0,
                                      size: "50",
                                      class: "groupIcon"
                                    },
                                    {
                                      default: t(() => [
                                        h(
                                          g(v.icon),
                                          1
                                          /* TEXT */
                                        )
                                      ]),
                                      _: 2
                                      /* DYNAMIC */
                                    },
                                    1024
                                    /* DYNAMIC_SLOTS */
                                  )) : G("v-if", !0),
                                  l(
                                    S,
                                    { class: "text-center groupTitle" },
                                    {
                                      default: t(() => [
                                        h(
                                          g(e.$st(v.title)),
                                          1
                                          /* TEXT */
                                        )
                                      ]),
                                      _: 2
                                      /* DYNAMIC */
                                    },
                                    1024
                                    /* DYNAMIC_SLOTS */
                                  )
                                ]),
                                _: 2
                                /* DYNAMIC */
                              }, 1032, ["variant", "class"])
                            ]),
                            _: 2
                            /* DYNAMIC */
                          }, 1032, ["class"])) : (C(), K(
                            ee,
                            { key: 1 },
                            [
                              v.icon ? (C(), U(
                                s,
                                {
                                  key: 0,
                                  size: "50"
                                },
                                {
                                  default: t(() => [
                                    h(
                                      g(v.icon),
                                      1
                                      /* TEXT */
                                    )
                                  ]),
                                  _: 2
                                  /* DYNAMIC */
                                },
                                1024
                                /* DYNAMIC_SLOTS */
                              )) : G("v-if", !0),
                              l(
                                S,
                                { class: "text-center" },
                                {
                                  default: t(() => [
                                    h(
                                      g(e.$st(v.title)),
                                      1
                                      /* TEXT */
                                    )
                                  ]),
                                  _: 2
                                  /* DYNAMIC */
                                },
                                1024
                                /* DYNAMIC_SLOTS */
                              )
                            ],
                            64
                            /* STABLE_FRAGMENT */
                          ))
                        ]),
                        _: 2
                        /* DYNAMIC */
                      }, 1032, ["class", "onClick"])
                    ]),
                    _: 2
                    /* DYNAMIC */
                  },
                  1024
                  /* DYNAMIC_SLOTS */
                ))),
                128
                /* KEYED_FRAGMENT */
              ))
            ]),
            _: 1
            /* STABLE */
          }),
          l(M, {
            class: "fixed-bottom",
            justify: "end"
          }, {
            default: t(() => [
              l($, {
                variant: "filled",
                class: "ma-5",
                onClick: o[1] || (o[1] = (v) => e.startApplication(
                  e.plugin.selectedMainModuleIndex.value,
                  e.plugin.selectedNestedModuleIndex.value,
                  e.app,
                  e.modules,
                  e.basisModule
                )),
                disabled: e.isButtonDisabled
              }, {
                default: t(() => [
                  h(
                    g(e.$st("moduleSelector.startButton")),
                    1
                    /* TEXT */
                  )
                ]),
                _: 1
                /* STABLE */
              }, 8, ["disabled"])
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
const po = /* @__PURE__ */ ne(co, [["render", mo], ["__scopeId", "data-v-0606b5be"]]), ue = () => ({
  windowTitle: "moduleSelector.title",
  isActiveOnStart: !0,
  requireModuleSelection: !1,
  position: {
    left: "33%",
    right: "33%",
    top: "10%",
    maxHeight: "80%"
  },
  basisModule: void 0,
  modules: [],
  serverUrl: "",
  projectId: "",
  appId: "",
  token: ""
}), fo = oe({
  name: "ModuleEditor",
  components: {
    VcsTextField: me,
    VcsLabel: Se,
    VCol: ie,
    VRow: le,
    VForm: Ee,
    VContainer: te,
    VcsFormButton: ce,
    VDivider: oo,
    VCard: Ie,
    VcsFormSection: ye,
    VcsTextArea: we
  },
  props: {
    modelValue: {
      type: Object,
      required: !0
    }
  },
  setup(e) {
    const o = A(e.modelValue), i = A(!1);
    return {
      localModuleOptions: o,
      isFormValid: i,
      validateForm: () => {
        i.value = !!o.value.title;
      },
      requiredRule: (r) => !!r || "moduleSelector.configEditor.editorError"
    };
  }
}), go = { class: "d-flex gc-2 w-100 justify-end pa-2" };
function vo(e, o, i, d, n, r) {
  const s = a("VcsLabel"), u = a("v-col"), S = a("VcsTextField"), c = a("v-row"), y = a("VcsTextArea"), M = a("v-container"), $ = a("v-form"), B = a("v-divider"), b = a("VcsFormButton"), v = a("VcsFormSection"), T = a("v-card");
  return C(), U(T, null, {
    default: t(() => [
      l(v, { heading: "moduleSelector.configEditor.moduleSettings" }, {
        default: t(() => [
          l($, {
            modelValue: e.isFormValid,
            "onUpdate:modelValue": o[4] || (o[4] = (p) => e.isFormValid = p),
            ref: "form"
          }, {
            default: t(() => [
              l(M, { class: "px-2 pt-0 pb-2" }, {
                default: t(() => [
                  l(c, { "no-gutters": "" }, {
                    default: t(() => [
                      l(u, { cols: "6" }, {
                        default: t(() => [
                          l(s, {
                            required: "",
                            "html-for": "moduleName"
                          }, {
                            default: t(() => [
                              h(
                                g(e.$st("moduleSelector.configEditor.moduleName")),
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
                      l(u, { cols: "6" }, {
                        default: t(() => [
                          l(S, {
                            id: "moduleName",
                            placeholder: "Module Name",
                            modelValue: e.localModuleOptions.title,
                            "onUpdate:modelValue": o[0] || (o[0] = (p) => e.localModuleOptions.title = p),
                            rules: [e.requiredRule]
                          }, null, 8, ["modelValue", "rules"])
                        ]),
                        _: 1
                        /* STABLE */
                      })
                    ]),
                    _: 1
                    /* STABLE */
                  }),
                  l(c, { "no-gutters": "" }, {
                    default: t(() => [
                      l(u, { cols: "6" }, {
                        default: t(() => [
                          l(s, {
                            required: "",
                            "html-for": "moduleIcon"
                          }, {
                            default: t(() => [
                              h(
                                g(e.$st("moduleSelector.configEditor.moduleIcon")),
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
                      l(u, { cols: "6" }, {
                        default: t(() => [
                          l(S, {
                            id: "moduleIcon",
                            placeholder: "Icon Name",
                            modelValue: e.localModuleOptions.icon,
                            "onUpdate:modelValue": o[1] || (o[1] = (p) => e.localModuleOptions.icon = p),
                            rules: [e.requiredRule]
                          }, null, 8, ["modelValue", "rules"])
                        ]),
                        _: 1
                        /* STABLE */
                      })
                    ]),
                    _: 1
                    /* STABLE */
                  }),
                  l(c, { "no-gutters": "" }, {
                    default: t(() => [
                      l(u, { cols: "6" }, {
                        default: t(() => [
                          l(s, {
                            required: "",
                            "html-for": "moduleUrl"
                          }, {
                            default: t(() => [
                              h(
                                g(e.$st("moduleSelector.configEditor.moduleUrl")),
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
                      l(u, { cols: "6" }, {
                        default: t(() => [
                          l(S, {
                            id: "moduleUrl",
                            placeholder: "URL",
                            modelValue: e.localModuleOptions.moduleUrl,
                            "onUpdate:modelValue": o[2] || (o[2] = (p) => e.localModuleOptions.moduleUrl = p),
                            rules: [e.requiredRule]
                          }, null, 8, ["modelValue", "rules"])
                        ]),
                        _: 1
                        /* STABLE */
                      })
                    ]),
                    _: 1
                    /* STABLE */
                  }),
                  l(c, { "no-gutters": "" }, {
                    default: t(() => [
                      l(u, { cols: "6" }, {
                        default: t(() => [
                          l(s, { "html-for": "moduleDescription" }, {
                            default: t(() => [
                              h(
                                g(e.$st("moduleSelector.configEditor.moduleDescription")),
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
                      l(u, { cols: "6" }, {
                        default: t(() => [
                          l(y, {
                            id: "moduleDescription",
                            modelValue: e.localModuleOptions.description,
                            "onUpdate:modelValue": o[3] || (o[3] = (p) => e.localModuleOptions.description = p)
                          }, null, 8, ["modelValue"])
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
          }, 8, ["modelValue"]),
          l(B),
          L("div", go, [
            l(b, {
              disabled: !e.isFormValid,
              onClick: o[5] || (o[5] = () => {
                e.$emit("submit", e.localModuleOptions);
              }),
              variant: "filled"
            }, {
              default: t(() => [
                h(
                  g(e.$st("components.apply")),
                  1
                  /* TEXT */
                )
              ]),
              _: 1
              /* STABLE */
            }, 8, ["disabled"]),
            l(b, {
              onClick: o[6] || (o[6] = (p) => e.$emit("close"))
            }, {
              default: t(() => [
                h(
                  g(e.$st("components.cancel")),
                  1
                  /* TEXT */
                )
              ]),
              _: 1
              /* STABLE */
            })
          ])
        ]),
        _: 1
        /* STABLE */
      })
    ]),
    _: 1
    /* STABLE */
  });
}
const ho = /* @__PURE__ */ ne(fo, [["render", vo]]), Mo = oe({
  name: "WindowPositionSettings",
  components: {
    VContainer: te,
    VRow: le,
    VCol: ie,
    VcsCheckbox: ke,
    VcsTextField: me
  },
  props: {
    modelValue: {
      type: Object,
      required: !0
    },
    positionKeys: {
      type: Array,
      default: () => ["height", "maxHeight", "width", "maxWidth"]
    }
  },
  setup(e, { emit: o }) {
    const i = je(
      e,
      "modelValue",
      o
    );
    return {
      inputs: Z(() => e.positionKeys.reduce(
        (n, r) => (n[r] = {
          key: r,
          checkbox: Le(i, r, null),
          input: Z({
            get() {
              return i.value[r];
            },
            set(s) {
              i.value[r] = s;
            }
          }),
          placeholder: "auto"
        }, n),
        {}
      ))
    };
  }
});
function bo(e, o, i, d, n, r) {
  const s = a("VcsCheckbox"), u = a("v-col"), S = a("VcsTextField"), c = a("v-row"), y = a("v-container");
  return C(), U(y, { class: "py-0 px-1" }, {
    default: t(() => [
      (C(!0), K(
        ee,
        null,
        he(e.inputs, ({ key: M, checkbox: $, input: B, placeholder: b }) => (C(), U(
          c,
          {
            "no-gutters": "",
            key: M
          },
          {
            default: t(() => [
              l(
                u,
                null,
                {
                  default: t(() => [
                    l(s, {
                      label: `appConfigurator.editors.featureInfo.window.position.${M}`,
                      modelValue: $.value,
                      "onUpdate:modelValue": (v) => $.value = v
                    }, null, 8, ["label", "modelValue", "onUpdate:modelValue"])
                  ]),
                  _: 2
                  /* DYNAMIC */
                },
                1024
                /* DYNAMIC_SLOTS */
              ),
              l(
                u,
                null,
                {
                  default: t(() => [
                    l(S, {
                      clearable: "",
                      disabled: !$.value,
                      placeholder: b,
                      modelValue: B.value,
                      "onUpdate:modelValue": (v) => B.value = v,
                      modelModifiers: { trim: !0 }
                    }, null, 8, ["disabled", "placeholder", "modelValue", "onUpdate:modelValue"])
                  ]),
                  _: 2
                  /* DYNAMIC */
                },
                1024
                /* DYNAMIC_SLOTS */
              )
            ]),
            _: 2
            /* DYNAMIC */
          },
          1024
          /* DYNAMIC_SLOTS */
        ))),
        128
        /* KEYED_FRAGMENT */
      ))
    ]),
    _: 1
    /* STABLE */
  });
}
const Vo = /* @__PURE__ */ ne(Mo, [["render", bo]]);
let De = "";
function So(e) {
  De = e;
}
let Me;
function yo(e) {
  Me = e;
}
let _e = {};
function wo() {
  return Me ? {
    authorization: `Bearer ${Me}`,
    ..._e
  } : { ..._e };
}
class Io extends Error {
  constructor(i, d, n, r, s) {
    super(`Failed to ${d} ${n}. Got status ${i} with reason: ${r}`);
    J(this, "url");
    J(this, "method");
    J(this, "status");
    J(this, "reason");
    J(this, "error");
    this.error = s, this.method = d, this.status = i, this.url = n, this.reason = r;
  }
}
function Eo(e, o, i) {
  let d = e;
  Object.keys(i).filter((r) => i[r] === "path").map((r) => ({ key: r, param: o[r] })).forEach(({ key: r, param: s }) => {
    d = d.replace(`{${r}}`, s.toString());
  });
  const n = new URL(d, De);
  return Object.keys(i).filter((r) => i[r] === "query" && o[r]).map((r) => ({ key: r, param: o[r] })).forEach(({ key: r, param: s }) => {
    Array.isArray(s) ? s.forEach((u) => {
      n.searchParams.append(r, u.toString());
    }) : n.searchParams.append(r, s.toString());
  }), n.toString();
}
async function Co(e, o, i, d = void 0, n = {}) {
  const r = await fetch(e, {
    method: o,
    body: d,
    headers: { ...n, ...wo() },
    redirect: "follow"
  });
  if (r.status === i)
    return r;
  let s = await r.text(), u;
  try {
    const S = JSON.parse(s);
    S.reason && ({ reason: s } = S), S.error && ({ error: u } = S);
  } catch {
  }
  throw new Io(r.status, o, e, s, u);
}
async function $o(e, o, i, d = void 0, n = {}) {
  return (await Co(e, o, i, d, n)).json();
}
async function _o(e) {
  const n = Eo("api/v1/project/{projectId}/modules", e, {
    projectId: "path",
    limit: "query",
    page: "query",
    sort: "query",
    orderBy: "query",
    name: "query"
  });
  return $o(n, "get", 200, void 0, void 0);
}
const O = {
  OFF: 1,
  ERROR: 2,
  WARN: 4,
  INFO: 8,
  DEBUG: 16
}, j = {
  ERROR: 0,
  WARN: 0,
  INFO: 0,
  DEBUG: 0
};
j.ERROR = O.ERROR | O.WARN | O.INFO | O.DEBUG;
j.WARN = O.WARN | O.INFO | O.DEBUG;
j.INFO = O.INFO | O.DEBUG;
j.DEBUG = O.DEBUG;
const x = {
  useTimestamp: !1,
  logLevel: O.INFO
}, de = /* @__PURE__ */ new Map();
de.set(O.ERROR, "error");
de.set(O.WARN, "warn");
de.set(O.INFO, "info");
de.set(O.DEBUG, "log");
class Be {
  /**
   * @param {string=} className
   */
  constructor(o) {
    this.className = o, this.deprecations = /* @__PURE__ */ new Map();
  }
  /**
   * Logs an error message
   * @param {string} msg The message to log.
   * @param {...any} optArgs
   */
  error(o, ...i) {
    x.logLevel & j.ERROR && this._log(String(o), O.ERROR, i);
  }
  /**
   * Logs a warning message
   * @param {string} msg The message to log.
   * @param {...any} optArgs
   */
  warning(o, ...i) {
    x.logLevel & j.WARN && this._log(String(o), O.WARN, i);
  }
  /**
   * Deprecate a function. deprecations are stored on the logger
   * @param {string} functionName
   * @param {string=} alternativeFunctionName
   */
  deprecate(o, i) {
    const d = String(o), n = i ? String(i) : null;
    if (!this.deprecations.has(d)) {
      this.deprecations.set(d, n || null);
      let r = `${d} has been deprecated and will be removed`;
      n && (r = `${r}. ${n}`), this.warning(r);
    }
  }
  /**
   * Logs an info message
   * @param {string} msg The message to log.
   * @param {...any} optArgs
   */
  info(o, ...i) {
    x.logLevel & j.INFO && this._log(String(o), O.INFO, i);
  }
  /**
   * Logs a debug message
   * @param {string} msg The message to log.
   * @param {...any} optArgs
   */
  debug(o, ...i) {
    x.logLevel & j.DEBUG && this._log(String(o), O.DEBUG, i);
  }
  /**
   * Alias for debug
   * @param {string} msg The message to log.
   * @param {...any} optArgs
   */
  log(o, ...i) {
    x.logLevel & j.DEBUG && this._log(String(o), O.DEBUG, i);
  }
  /**
   * Logs a message
   * @param {string} msg The message to log.
   * @param {LOG_LEVEL} level
   * @param {Array} optArgs
   * @private
   */
  _log(o, i, d) {
    let n = o;
    this.className && (n = `[${this.className}] ${n}`), console[de.get(i)](n, ...d), i & O.ERROR && (console.group(), console.trace(), console.groupEnd());
  }
}
const be = /* @__PURE__ */ new Map();
let ve;
function ko() {
  return ve || (ve = new Be()), ve;
}
function Uo(e) {
  const o = new Be(e);
  return be.set(e, o), o;
}
function Ve(e) {
  return e ? be.has(e) ? be.get(e) : Uo(e) : ko();
}
function Ao(e) {
  try {
    if (e.serverUrl) {
      const o = new URL(
        e.serverUrl,
        window.location.href
      ).toString();
      So(o);
      const i = e.token || localStorage.getItem("Meteor.loginToken");
      i && (yo(i), Ve(z).info("Publisher connection successful"));
    }
  } catch (o) {
    Ve(z).error("Failed to connect to publisher", o);
  }
}
function To(e, o) {
  return new Date(e).toLocaleString(o);
}
function No() {
  return [
    {
      title: "moduleSelector.configEditor.moduleCloudPicker.headers.name",
      value: "name",
      sortable: !0
    },
    {
      title: "moduleSelector.configEditor.moduleCloudPicker.headers.type",
      value: "type",
      sortable: !1
    },
    {
      title: "moduleSelector.configEditor.moduleCloudPicker.headers.description",
      value: "description",
      sortable: !0
    },
    {
      title: "moduleSelector.configEditor.moduleCloudPicker.headers.createdAt",
      value: "createdAt",
      sort: (e, o) => new Date(o).getTime() - new Date(e).getTime()
    },
    {
      title: "moduleSelector.configEditor.moduleCloudPicker.headers.updatedAt",
      value: "updatedAt",
      sort: (e, o) => new Date(o).getTime() - new Date(e).getTime()
    },
    {
      title: "moduleSelector.configEditor.moduleCloudPicker.headers.createdBy",
      value: "createdBy",
      sortable: !0
    },
    {
      title: "moduleSelector.configEditor.moduleCloudPicker.headers.updatedBy",
      value: "updatedBy",
      sortable: !0
    }
  ];
}
const Oo = oe({
  name: "CloudModuleSelector",
  components: {
    VcsDataTable: ze,
    VcsFormButton: ce,
    VTooltip: Ne,
    VIcon: Te,
    VCard: Ie,
    VcsLabel: Se,
    VcsTextField: me,
    VcsFormSection: ye,
    VRow: le,
    VCol: ie,
    VForm: Ee,
    VContainer: te,
    VcsTextArea: we
  },
  props: {
    modelValue: {
      type: Object,
      required: !0
    }
  },
  setup(e, { emit: o }) {
    const i = Ue("vcsApp"), d = i.plugins.getByKey(z), n = i.plugins.getByKey(
      "@vcmap/app-configurator"
    ), { serverUrl: r, projectId: s, appId: u, token: S } = (n == null ? void 0 : n.config) || d.config, c = { serverUrl: r, projectId: s, appId: u, token: S };
    Ao(c);
    const y = A(!0), M = A([]), $ = A(0), B = A(0), b = A([void 0]), v = No(), T = /* @__PURE__ */ new Map(), p = A(e.modelValue), P = Z(() => p.value.id === ""), k = A(!1), Q = () => {
      var R, W;
      k.value = !!((R = p.value) != null && R.title) && !!((W = p.value) != null && W.icon);
    }, X = {
      standalone: "$vcsGlobeNature",
      extension: "$vcsShapes"
    };
    function Y(R) {
      var N;
      const { itemsPerPage: W, page: m, search: I, sortBy: f } = R;
      y.value = !0, c.projectId ? _o({
        projectId: c.projectId,
        limit: W,
        page: m - 1,
        name: I,
        orderBy: f == null ? void 0 : f.map(({ key: _ }) => _),
        sort: (N = f == null ? void 0 : f[0]) == null ? void 0 : N.order
      }).then((_) => {
        M.value = _.items.map((E) => {
          var D, F;
          const w = {
            name: E.name,
            description: E.description,
            createdAt: E.createdAt,
            updatedAt: E.updatedAt,
            createdBy: (n == null ? void 0 : n.getUserName(E.createdBy)) || E.createdBy,
            updatedBy: (n == null ? void 0 : n.getUserName(E.updatedBy)) || E.updatedBy,
            _id: E._id
          };
          return (((D = E.maps) == null ? void 0 : D.length) ?? 0) > 0 && (((F = E.layers) == null ? void 0 : F.length) ?? 0) > 0 ? w.type = "standalone" : w.type = "extension", w.disabled = !!i.getModuleById(E._id), T.set(E._id, E), w;
        }), $.value = _.totalCount, B.value = _.totalPages;
      }).catch((_) => {
        Ve("CloudModuleSelector.vue").error(
          "Failed to load project modules.",
          _
        );
      }).finally(() => {
        y.value = !1;
      }) : (M.value = [], y.value = !1);
    }
    return {
      selectedItem: p,
      isItemIdEmpty: P,
      loading: y,
      items: M,
      totalItems: $,
      totalPages: B,
      headers: v,
      selected: b,
      typeIcon(R) {
        return X[R];
      },
      formatDate: To,
      getItems: Y,
      close: () => {
        o("close");
      },
      addSelected: () => {
        var R;
        b.value.length > 0 && ((R = b.value[0]) == null ? void 0 : R._id) !== "" && (p.value.id = b.value[0]._id, p.value.title = b.value[0].name, p.value.icon = "", p.value.moduleUrl = `configs/${b.value[0]._id}.json`, p.value.description = b.value[0].description);
      },
      isFValid: k,
      validateForm: Q,
      removeSelected: () => {
        p.value.id = "", p.value.title = "", p.value.icon = "", p.value.description = "", p.value.moduleUrl = "";
      },
      requiredRule: (R) => !!R || "moduleSelector.configEditor.editorError"
    };
  }
}), Do = { class: "d-flex gc-2 px-2 pt-2 pb-2" }, Bo = {
  key: 0,
  class: "d-flex gc-2 justify-end w-100"
}, Fo = {
  key: 1,
  class: "d-flex gc-2 justify-space-between w-100"
}, Go = { class: "d-flex gc-2" };
function Ro(e, o, i, d, n, r) {
  const s = a("v-icon"), u = a("v-tooltip"), S = a("VcsDataTable"), c = a("VcsFormSection"), y = a("VcsLabel"), M = a("v-col"), $ = a("VcsTextField"), B = a("v-row"), b = a("VcsTextArea"), v = a("v-container"), T = a("v-form"), p = a("VcsFormButton"), P = a("v-card");
  return C(), U(P, null, {
    default: t(() => [
      L("div", null, [
        e.isItemIdEmpty ? (C(), U(c, {
          key: 0,
          heading: "moduleSelector.configEditor.moduleSettings"
        }, {
          default: t(() => [
            l(S, {
              "base-component": "VDataTableServer",
              loading: e.loading,
              items: e.items,
              "server-items-length": e.totalItems,
              "server-pages-length": e.totalPages,
              "searchbar-placeholder": e.$t("moduleSelector.configEditor.moduleCloudPicker.searchName"),
              headers: e.headers,
              "select-strategy": "single",
              "return-object": "",
              "show-select": "",
              "item-value": "_id",
              modelValue: e.selected,
              "onUpdate:modelValue": o[0] || (o[0] = (k) => e.selected = k),
              "onUpdate:items": e.getItems
            }, {
              "item.type": t(({ item: k }) => [
                l(
                  s,
                  Qe(Xe({ ...e.$attrs })),
                  {
                    default: t(() => [
                      h(
                        g(e.typeIcon(k.type)),
                        1
                        /* TEXT */
                      )
                    ]),
                    _: 2
                    /* DYNAMIC */
                  },
                  1040
                  /* FULL_PROPS, DYNAMIC_SLOTS */
                ),
                l(
                  u,
                  {
                    activator: "parent",
                    location: "right"
                  },
                  {
                    default: t(() => [
                      h(
                        g(e.$t(`appConfigurator.dialogs.vcsModuleTable.${k.type}`)),
                        1
                        /* TEXT */
                      )
                    ]),
                    _: 2
                    /* DYNAMIC */
                  },
                  1024
                  /* DYNAMIC_SLOTS */
                )
              ]),
              "item.createdAt": t(({ item: k }) => [
                h(
                  g(e.formatDate(k.createdAt, e.$i18n.locale)),
                  1
                  /* TEXT */
                )
              ]),
              "item.updatedAt": t(({ item: k }) => [
                h(
                  g(e.formatDate(k.updatedAt, e.$i18n.locale)),
                  1
                  /* TEXT */
                )
              ]),
              _: 1
              /* STABLE */
            }, 8, ["loading", "items", "server-items-length", "server-pages-length", "searchbar-placeholder", "headers", "modelValue", "onUpdate:items"])
          ]),
          _: 1
          /* STABLE */
        })) : (C(), U(c, {
          key: 1,
          heading: "moduleSelector.configEditor.moduleSettings"
        }, {
          default: t(() => [
            l(T, {
              modelValue: e.isFValid,
              "onUpdate:modelValue": o[4] || (o[4] = (k) => e.isFValid = k),
              ref: "form"
            }, {
              default: t(() => [
                l(v, { class: "px-2 pt-0 pb-2" }, {
                  default: t(() => [
                    l(B, {
                      "no-gutters": "",
                      class: "px-2"
                    }, {
                      default: t(() => [
                        l(M, { cols: "2" }, {
                          default: t(() => [
                            l(y, {
                              required: "",
                              "html-for": "moduleName"
                            }, {
                              default: t(() => [
                                h(
                                  g(e.$st("moduleSelector.configEditor.moduleName")),
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
                        l(M, { cols: "4" }, {
                          default: t(() => [
                            l($, {
                              id: "moduleName",
                              placeholder: "Module Name",
                              modelValue: e.selectedItem.title,
                              "onUpdate:modelValue": o[1] || (o[1] = (k) => e.selectedItem.title = k),
                              rules: [e.requiredRule]
                            }, null, 8, ["modelValue", "rules"])
                          ]),
                          _: 1
                          /* STABLE */
                        })
                      ]),
                      _: 1
                      /* STABLE */
                    }),
                    l(B, {
                      "no-gutters": "",
                      class: "px-2"
                    }, {
                      default: t(() => [
                        l(M, { cols: "2" }, {
                          default: t(() => [
                            l(y, {
                              required: "",
                              "html-for": "moduleIcon"
                            }, {
                              default: t(() => [
                                h(
                                  g(e.$st("moduleSelector.configEditor.moduleIcon")),
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
                        l(M, { cols: "4" }, {
                          default: t(() => [
                            l($, {
                              id: "moduleIcon",
                              placeholder: "Icon Name",
                              modelValue: e.selectedItem.icon,
                              "onUpdate:modelValue": o[2] || (o[2] = (k) => e.selectedItem.icon = k),
                              rules: [e.requiredRule]
                            }, null, 8, ["modelValue", "rules"])
                          ]),
                          _: 1
                          /* STABLE */
                        })
                      ]),
                      _: 1
                      /* STABLE */
                    }),
                    l(B, {
                      "no-gutters": "",
                      class: "px-2"
                    }, {
                      default: t(() => [
                        l(M, { cols: "2" }, {
                          default: t(() => [
                            l(y, { "html-for": "moduleDescription" }, {
                              default: t(() => [
                                h(
                                  g(e.$st("moduleSelector.configEditor.moduleDescription")),
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
                        l(M, { cols: "4" }, {
                          default: t(() => [
                            l(b, {
                              id: "moduleDescription",
                              modelValue: e.selectedItem.description,
                              "onUpdate:modelValue": o[3] || (o[3] = (k) => e.selectedItem.description = k)
                            }, null, 8, ["modelValue"])
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
            }, 8, ["modelValue"])
          ]),
          _: 1
          /* STABLE */
        })),
        L("div", Do, [
          e.isItemIdEmpty ? (C(), K("div", Bo, [
            l(p, {
              variant: "filled",
              disabled: e.selected[0] === void 0,
              onClick: e.addSelected,
              tooltip: "appConfigurator.dialogs.addTooltip",
              "tooltip-position": "bottom"
            }, {
              default: t(() => [
                h(
                  g(e.$t("moduleSelector.configEditor.moduleCloudPicker.continue")),
                  1
                  /* TEXT */
                )
              ]),
              _: 1
              /* STABLE */
            }, 8, ["disabled", "onClick"]),
            l(p, { onClick: e.close }, {
              default: t(() => [
                h(
                  g(e.$t("components.cancel")),
                  1
                  /* TEXT */
                )
              ]),
              _: 1
              /* STABLE */
            }, 8, ["onClick"])
          ])) : G("v-if", !0),
          e.isItemIdEmpty ? G("v-if", !0) : (C(), K("div", Fo, [
            l(p, { onClick: e.removeSelected }, {
              default: t(() => [
                h(
                  g(e.$t("moduleSelector.configEditor.moduleCloudPicker.back")),
                  1
                  /* TEXT */
                )
              ]),
              _: 1
              /* STABLE */
            }, 8, ["onClick"]),
            L("div", Go, [
              l(p, {
                disabled: !e.isFValid,
                variant: "filled",
                onClick: o[5] || (o[5] = () => {
                  e.$emit("submit", e.selectedItem);
                })
              }, {
                default: t(() => [
                  h(
                    g(e.$t("components.apply")),
                    1
                    /* TEXT */
                  )
                ]),
                _: 1
                /* STABLE */
              }, 8, ["disabled"]),
              l(p, { onClick: e.close }, {
                default: t(() => [
                  h(
                    g(e.$t("components.cancel")),
                    1
                    /* TEXT */
                  )
                ]),
                _: 1
                /* STABLE */
              }, 8, ["onClick"])
            ])
          ]))
        ])
      ])
    ]),
    _: 1
    /* STABLE */
  });
}
const qo = /* @__PURE__ */ ne(Oo, [["render", Ro]]), Po = oe({
  name: "ModuleSelectorConfigEditor",
  components: {
    VForm: Ee,
    VcsFormButton: ce,
    VcsCheckbox: ke,
    VDialog: to,
    VcsList: We,
    VcsFormSection: ye,
    VRow: le,
    VSheet: Ae,
    VcsLabel: Se,
    AbstractConfigEditor: He,
    VcsTextField: me,
    VCol: ie,
    VContainer: te,
    ModuleEditor: ho,
    WindowPositionSettings: Vo,
    VcsModuleTable: qo,
    VcsTextArea: we
  },
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
  setup(e) {
    var pe, R, W;
    const o = A(0), i = A(void 0), d = A([]), n = A(void 0), r = A({
      id: "",
      title: "",
      icon: "",
      moduleUrl: "",
      description: ""
    }), s = A({
      id: "",
      title: "",
      icon: "",
      moduleUrl: "",
      description: ""
    });
    let u = {
      title: "",
      icon: "",
      type: "group",
      description: "",
      cards: []
    };
    const S = A(!1), c = A(!1), y = A(!1), M = A(void 0);
    i.value = {
      ...ue(),
      ...e.getConfig()
    };
    const $ = A();
    (pe = i.value) != null && pe.basisModule && ($.value = (R = i.value) == null ? void 0 : R.basisModule);
    const B = Z({
      get() {
        return !!$.value;
      },
      set(m) {
        var I;
        m ? $.value = ((I = i.value) == null ? void 0 : I.basisModule) || { title: "" } : $.value = null;
      }
    }), b = Ye([]);
    function v(m) {
      var I;
      if (m.type === "url") {
        const { actions: f, id: N, name: _, ...E } = m;
        return {
          ...E,
          moduleUrl: m.moduleUrl || ""
        };
      } else {
        const f = ((I = m.cards) == null ? void 0 : I.map((D) => {
          const { actions: F, id: q, name: H, ...Re } = D;
          return {
            ...Re
          };
        })) || [], { actions: N, id: _, name: E, ...w } = m;
        return {
          ...w,
          ...f.length ? { cards: f } : {}
        };
      }
    }
    function T(m) {
      return m.map(v);
    }
    function p(m, I) {
      var N, _, E;
      const f = {
        id: `${m.title || "undefined"}-${I}`,
        name: m.title,
        title: m.title,
        icon: m.icon,
        type: m.type,
        description: m.description,
        actions: []
      };
      return m.type === "url" && (f.moduleUrl = m.moduleUrl, (N = f.actions) == null || N.push({
        name: "edit",
        title: "moduleSelector.configEditor.TooltipEditModule",
        icon: "$vcsEdit",
        callback() {
          if (n.value === void 0 && d.value.length > 0) {
            const w = d.value.find(
              (D) => D.id === f.id
            );
            w && (r.value = {
              id: w.id,
              title: w.title,
              icon: w.icon,
              moduleUrl: w.moduleUrl,
              description: w.description
            });
          } else {
            const w = n.value.cards.find(
              (D) => D.id === f.id
            );
            w && (r.value = {
              id: w.id,
              title: w.title,
              icon: w.icon,
              moduleUrl: w.moduleUrl,
              description: w.description
            });
          }
          c.value = !0;
        }
      })), m.type === "group" && ((_ = f.actions) == null || _.push({
        name: "editGroup",
        title: "moduleSelector.configEditor.TooltipEditGroup",
        icon: "mdi-playlist-edit",
        callback() {
          if (d.value.length > 0) {
            const w = d.value.find(
              (D) => D.id === f.id
            );
            if (w) {
              n.value = w, y.value = !0;
              const [D] = T([
                n.value
              ]);
              D.cards.length === 0 && (D.cards = []), u = structuredClone(D), b.splice(2, 1), b.length > 1 && (b[1].icon = "$vcsPlus", b[1].title = "moduleSelector.configEditor.TooltipAddModule");
            }
          }
        }
      }), m.cards && (f.cards = m.cards.map(p))), (E = f.actions) == null || E.push({
        name: "linkButton.editor.remove",
        title: "moduleSelector.configEditor.TooltipDeleteMG",
        icon: "$vcsTrashCan",
        callback() {
          var w, D, F;
          n.value ? n.value.cards = (D = (w = n.value) == null ? void 0 : w.cards) == null ? void 0 : D.filter(
            (q) => q.id !== f.id
          ) : d.value = (F = d.value) == null ? void 0 : F.filter(
            (q) => q.id !== f.id
          );
        }
      }), f;
    }
    b.push({
      name: "moduleSelector.configEditor.addFromCloud",
      title: "moduleSelector.configEditor.TooltipAddCloudModule",
      icon: "$vcsImport",
      callback() {
        s.value = {
          id: "",
          title: "",
          icon: "",
          moduleUrl: "",
          description: ""
        }, S.value = !0;
      }
    });
    const P = {
      name: "moduleSelector.configEditor.addGroup",
      callback() {
        var f;
        const m = {
          type: "group",
          title: "",
          icon: "",
          description: "",
          cards: []
        };
        y.value = !0;
        const I = (f = d.value) == null ? void 0 : f.push(
          p(
            m,
            d.value.length
          )
        );
        n.value = d.value[I - 1], y.value = !0, b.splice(2, 1), b.length > 1 && (b[1].icon = "$vcsPlus", b[1].title = "moduleSelector.configEditor.TooltipAddModule");
      }
    };
    (W = i.value) != null && W.modules && (d.value = i.value.modules.map(p)), b.push(
      {
        name: "moduleSelector.configEditor.add",
        callback() {
          r.value = {
            id: "",
            title: "",
            icon: "",
            moduleUrl: "",
            description: ""
          }, c.value = !0;
        }
      },
      P
    ), xe(i, (m) => {
      m != null && m.modules ? M.value = m.modules.map(
        (I, f) => p(I, f)
      ) : M.value = [];
    });
    const k = () => {
      var N;
      const m = fe((N = i.value) == null ? void 0 : N.position), I = Object.values(m).some(
        (_) => _ !== void 0
      ), f = {
        ...fe(i.value),
        modules: T(d.value),
        basisModule: fe($.value)
      };
      I ? f.position = m : delete f.position, e.setConfig(f);
    }, Q = () => {
      var m, I, f, N, _, E, w, D;
      if (n.value === void 0) {
        if (r.value)
          if (((m = r.value) == null ? void 0 : m.id) !== "") {
            const F = d.value.find(
              (q) => {
                var H;
                return q.id === ((H = r.value) == null ? void 0 : H.id);
              }
            );
            F && Object.assign(F, {
              ...r.value
            });
          } else
            d.value.push(
              p(
                {
                  ...r.value,
                  type: "url"
                },
                d.value.length
              )
            );
      } else if (r.value && ((I = r.value) == null ? void 0 : I.id) !== "") {
        const F = n.value.cards.find(
          (H) => H.id === r.value.id
        );
        F && Object.assign(F, {
          ...r.value
        });
        let q;
        (f = n.value) != null && f.id || ((N = n.value) == null ? void 0 : N.id) !== "" ? q = n.value.id : q = `${n.value.title}-${d.value.length - 1}`, n.value = d.value.find(
          (H) => H.id === q
        );
      } else {
        n.value.cards.push(
          p(
            {
              ...r.value,
              type: "url"
            },
            n.value.cards.length
          )
        );
        let F;
        (_ = n.value) != null && _.id || ((E = n.value) == null ? void 0 : E.id) !== "" ? F = n.value.id : F = `${(w = n.value) == null ? void 0 : w.title}-${d.value.length - 1}`, n.value = (D = d.value) == null ? void 0 : D.find(
          (q) => q.id === F
        );
      }
      r.value = {
        id: "",
        title: "",
        icon: "",
        moduleUrl: "",
        description: ""
      }, c.value = !1;
    }, X = () => {
      var m, I, f, N;
      if (n.value === void 0)
        s.value && d.value.push(
          p(
            {
              title: s.value.title,
              icon: s.value.icon,
              moduleUrl: s.value.moduleUrl,
              type: "url",
              description: s.value.description
            },
            d.value.length
          )
        );
      else {
        n.value.cards.push(
          p(
            {
              ...s.value,
              type: "url"
            },
            n.value.cards.length
          )
        );
        let _;
        (m = n.value) != null && m.id || ((I = n.value) == null ? void 0 : I.id) !== "" ? _ = n.value.id : _ = `${(f = n.value) == null ? void 0 : f.title}-${d.value.length - 1}`, n.value = (N = d.value) == null ? void 0 : N.find(
          (E) => E.id === _
        );
      }
      s.value = {
        id: "",
        title: "",
        icon: "",
        moduleUrl: "",
        description: ""
      }, S.value = !1;
    }, Y = () => {
      y.value = !1, n.value = void 0, b.length > 1 && (delete b[1].icon, delete b[1].title), b.push(P);
    }, V = (m) => m && m.trim() !== "" ? !0 : "moduleSelector.configEditor.error";
    return {
      isFormValid: A(),
      editingItem: r,
      selectedGroupItem: u,
      groupItemDialogVisible: y,
      cancelCurrentGroup: () => {
        const m = d.value.findIndex(
          (I) => I.id === n.value.id
        );
        if (u.title !== "") {
          const I = p(u, m);
          d.value.splice(m, 1, I);
        } else
          d.value.splice(m, 1);
        y.value = !1, n.value = void 0, b.length > 1 && (delete b[1].icon, delete b[1].title), b.push(P);
      },
      selectCloudItem: s,
      editingItemDialogVisible: c,
      selectCloudItemDialogVisible: S,
      localConfig: i,
      listItemArray: d,
      currentGroup: n,
      apply: k,
      returnLevel: Y,
      updateItem: Q,
      updateCloudItem: X,
      level: o,
      listItems: M,
      basisModule: $,
      basisModuleExists: B,
      headerActions: b,
      isRequired: V,
      moveItem({
        item: m,
        targetIndex: I
      }) {
        var N, _, E;
        const f = (N = d.value) == null ? void 0 : N.indexOf(m);
        f !== I && ((_ = d.value) == null || _.splice(f, 1), (E = d.value) == null || E.splice(I, 0, m));
      },
      moveCard({
        item: m,
        targetIndex: I
      }) {
        var N, _, E, w;
        const f = n.value.cards.indexOf(m);
        f !== I && ((_ = (N = n.value) == null ? void 0 : N.cards) == null || _.splice(f, 1), (w = (E = n.value) == null ? void 0 : E.cards) == null || w.splice(I, 0, m));
      }
    };
  }
}), jo = { class: "d-flex gc-2 px-2 pt-2 pb-2" }, Lo = { class: "d-flex gc-2 justify-end w-100" };
function zo(e, o, i, d, n, r) {
  const s = a("VcsLabel"), u = a("v-col"), S = a("VcsTextField"), c = a("v-row"), y = a("VcsCheckbox"), M = a("v-container"), $ = a("VcsFormSection"), B = a("VcsTextArea"), b = a("v-form"), v = a("VcsList"), T = a("VcsFormButton"), p = a("v-sheet"), P = a("v-dialog"), k = a("ModuleEditor"), Q = a("VcsModuleTable"), X = a("WindowPositionSettings"), Y = a("AbstractConfigEditor");
  return e.localConfig ? (C(), U(Y, se({
    key: 0,
    onSubmit: e.apply
  }, { ...e.$attrs, ...e.$props }), {
    default: t(() => [
      l(M, { class: "py-0 px-0" }, {
        default: t(() => [
          l($, { heading: "moduleSelector.configEditor.general" }, {
            default: t(() => [
              l(M, { class: "py-0 px-1" }, {
                default: t(() => [
                  l(c, { "no-gutters": "" }, {
                    default: t(() => [
                      l(u, { cols: "6" }, {
                        default: t(() => [
                          l(s, { "html-for": "moduleselector-window-title" }, {
                            default: t(() => [
                              h(
                                g(e.$st("moduleSelector.configEditor.windowTitle")),
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
                      l(u, null, {
                        default: t(() => [
                          l(S, {
                            id: "moduleselector-window-title",
                            placeholder: e.$st("moduleSelector.title"),
                            modelValue: e.localConfig.windowTitle,
                            "onUpdate:modelValue": o[0] || (o[0] = (V) => e.localConfig.windowTitle = V)
                          }, null, 8, ["placeholder", "modelValue"])
                        ]),
                        _: 1
                        /* STABLE */
                      })
                    ]),
                    _: 1
                    /* STABLE */
                  }),
                  l(c, { "no-gutters": "" }, {
                    default: t(() => [
                      l(u, null, {
                        default: t(() => [
                          l(y, {
                            modelValue: e.localConfig.isActiveOnStart,
                            "onUpdate:modelValue": o[1] || (o[1] = (V) => e.localConfig.isActiveOnStart = V),
                            label: "moduleSelector.configEditor.isActiveOnStart"
                          }, null, 8, ["modelValue"])
                        ]),
                        _: 1
                        /* STABLE */
                      })
                    ]),
                    _: 1
                    /* STABLE */
                  }),
                  l(c, { "no-gutters": "" }, {
                    default: t(() => [
                      l(u, null, {
                        default: t(() => [
                          l(y, {
                            modelValue: e.localConfig.requireModuleSelection,
                            "onUpdate:modelValue": o[2] || (o[2] = (V) => e.localConfig.requireModuleSelection = V),
                            label: "moduleSelector.configEditor.requireModuleSelection"
                          }, null, 8, ["modelValue"])
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
          }),
          l($, { heading: "moduleSelector.configEditor.baseModule" }, {
            default: t(() => [
              l(M, { class: "py-0 px-1" }, {
                default: t(() => [
                  l(c, { "no-gutters": "" }, {
                    default: t(() => [
                      l(u, null, {
                        default: t(() => [
                          l(y, {
                            id: "BaseModuleCheckbox",
                            modelValue: e.basisModuleExists,
                            "onUpdate:modelValue": o[3] || (o[3] = (V) => e.basisModuleExists = V),
                            label: "moduleSelector.configEditor.baseModuleCheckbox"
                          }, null, 8, ["modelValue"])
                        ]),
                        _: 1
                        /* STABLE */
                      })
                    ]),
                    _: 1
                    /* STABLE */
                  }),
                  e.basisModuleExists ? (C(), U(c, {
                    key: 0,
                    "no-gutters": ""
                  }, {
                    default: t(() => [
                      l(u, { cols: "6" }, {
                        default: t(() => [
                          l(s, {
                            required: "",
                            "html-for": "basisModuleName"
                          }, {
                            default: t(() => [
                              h(
                                g(e.$st("moduleSelector.configEditor.title")),
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
                      l(u, null, {
                        default: t(() => [
                          l(S, {
                            id: "basisModuleName",
                            placeholder: "Base Module",
                            rules: [
                              e.basisModuleExists && (!e.basisModule.title || e.basisModule.title === "") ? () => "moduleSelector.configEditor.error" : () => !0
                            ],
                            modelValue: e.basisModule.title,
                            "onUpdate:modelValue": o[4] || (o[4] = (V) => e.basisModule.title = V)
                          }, null, 8, ["rules", "modelValue"])
                        ]),
                        _: 1
                        /* STABLE */
                      })
                    ]),
                    _: 1
                    /* STABLE */
                  })) : G("v-if", !0),
                  e.basisModuleExists ? (C(), U(c, {
                    key: 1,
                    "no-gutters": ""
                  }, {
                    default: t(() => [
                      l(u, { cols: "6" }, {
                        default: t(() => [
                          l(s, {
                            required: "",
                            "html-for": "basisModuleIcon"
                          }, {
                            default: t(() => [
                              h(
                                g(e.$st("components.style.icon")),
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
                      l(u, null, {
                        default: t(() => [
                          l(S, {
                            id: "basisModuleIcon",
                            placeholder: "mdi-home-city",
                            rules: [
                              e.basisModuleExists && (!e.basisModule.icon || e.basisModule.icon === "") ? () => "moduleSelector.configEditor.error" : () => !0
                            ],
                            modelValue: e.basisModule.icon,
                            "onUpdate:modelValue": o[5] || (o[5] = (V) => e.basisModule.icon = V)
                          }, null, 8, ["rules", "modelValue"])
                        ]),
                        _: 1
                        /* STABLE */
                      })
                    ]),
                    _: 1
                    /* STABLE */
                  })) : G("v-if", !0),
                  e.basisModuleExists ? (C(), U(c, {
                    key: 2,
                    "no-gutters": ""
                  }, {
                    default: t(() => [
                      l(u, { cols: "6" }, {
                        default: t(() => [
                          l(s, { "html-for": "basisModuleDescription" }, {
                            default: t(() => [
                              h(
                                g(e.$st("moduleSelector.configEditor.moduleDescription")),
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
                      l(u, null, {
                        default: t(() => [
                          l(B, {
                            id: "basisModuleDescription",
                            modelValue: e.basisModule.description,
                            "onUpdate:modelValue": o[6] || (o[6] = (V) => e.basisModule.description = V)
                          }, null, 8, ["modelValue"])
                        ]),
                        _: 1
                        /* STABLE */
                      })
                    ]),
                    _: 1
                    /* STABLE */
                  })) : G("v-if", !0)
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
      l(P, {
        modelValue: e.groupItemDialogVisible,
        "onUpdate:modelValue": o[13] || (o[13] = (V) => e.groupItemDialogVisible = V),
        width: "800",
        persistent: !0
      }, {
        default: t(() => [
          e.currentGroup ? (C(), U(p, { key: 0 }, {
            default: t(() => [
              l($, {
                heading: "moduleSelector.configEditor.groupHeading",
                "start-open": !0
              }, {
                default: t(() => [
                  l(b, {
                    modelValue: e.isFormValid,
                    "onUpdate:modelValue": o[10] || (o[10] = (V) => e.isFormValid = V)
                  }, {
                    default: t(() => [
                      l(M, { class: "py-0 px-1" }, {
                        default: t(() => [
                          l(c, { "no-gutters": "" }, {
                            default: t(() => [
                              l(u, { cols: "6" }, {
                                default: t(() => [
                                  l(s, {
                                    required: "",
                                    "html-for": "groupModuleName"
                                  }, {
                                    default: t(() => [
                                      h(
                                        g(e.$st("moduleSelector.configEditor.groupName")),
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
                              l(u, null, {
                                default: t(() => [
                                  l(S, {
                                    id: "groupModuleName",
                                    placeholder: "Module Name",
                                    modelValue: e.currentGroup.title,
                                    "onUpdate:modelValue": o[7] || (o[7] = (V) => e.currentGroup.title = V),
                                    rules: [e.isRequired]
                                  }, null, 8, ["modelValue", "rules"])
                                ]),
                                _: 1
                                /* STABLE */
                              })
                            ]),
                            _: 1
                            /* STABLE */
                          }),
                          l(c, { "no-gutters": "" }, {
                            default: t(() => [
                              l(u, { cols: "6" }, {
                                default: t(() => [
                                  l(s, {
                                    required: "",
                                    "html-for": "groupModuleIcon"
                                  }, {
                                    default: t(() => [
                                      h(
                                        g(e.$st("moduleSelector.configEditor.moduleIcon")),
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
                              l(u, null, {
                                default: t(() => [
                                  l(S, {
                                    id: "groupModuleIcon",
                                    placeholder: "Module Icon",
                                    modelValue: e.currentGroup.icon,
                                    "onUpdate:modelValue": o[8] || (o[8] = (V) => e.currentGroup.icon = V),
                                    rules: [e.isRequired]
                                  }, null, 8, ["modelValue", "rules"])
                                ]),
                                _: 1
                                /* STABLE */
                              })
                            ]),
                            _: 1
                            /* STABLE */
                          }),
                          l(c, { "no-gutters": "" }, {
                            default: t(() => [
                              l(u, { cols: "6" }, {
                                default: t(() => [
                                  l(s, { "html-for": "groupModuleDescription" }, {
                                    default: t(() => [
                                      h(
                                        g(e.$st("moduleSelector.configEditor.groupDescription")),
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
                              l(u, null, {
                                default: t(() => [
                                  l(B, {
                                    id: "groupModuleDescription",
                                    placeholder: "",
                                    modelValue: e.currentGroup.description,
                                    "onUpdate:modelValue": o[9] || (o[9] = (V) => e.currentGroup.description = V)
                                  }, null, 8, ["modelValue"])
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
                  }, 8, ["modelValue"])
                ]),
                _: 1
                /* STABLE */
              }),
              l($, {
                heading: "moduleSelector.configEditor.heading2",
                "start-open": !0,
                "header-actions": e.headerActions
              }, {
                default: t(() => [
                  l(v, {
                    class: "draggable-list",
                    items: e.currentGroup.cards,
                    draggable: !0,
                    onItemMoved: e.moveCard
                  }, null, 8, ["items", "onItemMoved"])
                ]),
                _: 1
                /* STABLE */
              }, 8, ["header-actions"]),
              L("div", jo, [
                L("div", Lo, [
                  l(T, {
                    variant: "filled",
                    disabled: !e.isFormValid,
                    onClick: o[11] || (o[11] = (V) => e.returnLevel())
                  }, {
                    default: t(() => [
                      h(
                        g(e.$t("components.apply")),
                        1
                        /* TEXT */
                      )
                    ]),
                    _: 1
                    /* STABLE */
                  }, 8, ["disabled"]),
                  l(T, {
                    onClick: o[12] || (o[12] = (V) => e.cancelCurrentGroup())
                  }, {
                    default: t(() => [
                      h(
                        g(e.$t("components.cancel")),
                        1
                        /* TEXT */
                      )
                    ]),
                    _: 1
                    /* STABLE */
                  })
                ])
              ])
            ]),
            _: 1
            /* STABLE */
          })) : G("v-if", !0)
        ]),
        _: 1
        /* STABLE */
      }, 8, ["modelValue"]),
      l($, {
        heading: "moduleSelector.configEditor.heading",
        "start-open": !0,
        "header-actions": e.headerActions
      }, {
        default: t(() => [
          l(v, {
            items: e.listItemArray,
            draggable: !0,
            onItemMoved: e.moveItem
          }, null, 8, ["items", "onItemMoved"]),
          l(P, {
            modelValue: e.editingItemDialogVisible,
            "onUpdate:modelValue": o[16] || (o[16] = (V) => e.editingItemDialogVisible = V),
            width: "400",
            persistent: !0
          }, {
            default: t(() => [
              l(k, {
                "model-value": e.editingItem,
                onClose: o[14] || (o[14] = (V) => e.editingItemDialogVisible = !1),
                onSubmit: o[15] || (o[15] = (V) => e.updateItem())
              }, null, 8, ["model-value"])
            ]),
            _: 1
            /* STABLE */
          }, 8, ["modelValue"]),
          l(P, {
            modelValue: e.selectCloudItemDialogVisible,
            "onUpdate:modelValue": o[19] || (o[19] = (V) => e.selectCloudItemDialogVisible = V),
            width: "1000",
            persistent: !0
          }, {
            default: t(() => [
              l(Q, {
                "model-value": e.selectCloudItem,
                onClose: o[17] || (o[17] = (V) => e.selectCloudItemDialogVisible = !1),
                onSubmit: o[18] || (o[18] = (V) => e.updateCloudItem())
              }, null, 8, ["model-value"])
            ]),
            _: 1
            /* STABLE */
          }, 8, ["modelValue"])
        ]),
        _: 1
        /* STABLE */
      }, 8, ["header-actions"]),
      l($, {
        heading: "moduleSelector.configEditor.windowPosition",
        expandable: !0
      }, {
        default: t(() => [
          l(X, {
            modelValue: e.localConfig.position,
            "onUpdate:modelValue": o[20] || (o[20] = (V) => e.localConfig.position = V),
            "position-keys": [
              "top",
              "right",
              "bottom",
              "left",
              "width",
              "maxWidth",
              "height",
              "maxHeight"
            ]
          }, null, 8, ["modelValue"])
        ]),
        _: 1
        /* STABLE */
      })
    ]),
    _: 1
    /* STABLE */
  }, 16, ["onSubmit"])) : G("v-if", !0);
}
const Wo = /* @__PURE__ */ ne(Po, [["render", zo]]);
function Xo(e) {
  let o;
  return {
    get name() {
      return z;
    },
    get version() {
      return so;
    },
    get mapVersion() {
      return uo;
    },
    get config() {
      return { ...ue(), ...e };
    },
    selectedMainModuleIndex: A(void 0),
    selectedNestedModuleIndex: A(void 0),
    async initialize(i, d) {
      var s;
      o = i;
      const n = {
        id: ae,
        component: po,
        slot: Ke.DETACHED,
        position: this.config.position,
        state: {
          headerIcon: "mdi-view-grid",
          headerTitle: this.config.windowTitle,
          infoUrlCallback: o.getHelpUrlCallback(
            "/components/genericFunctions.html#id_moduleSelector"
          )
        },
        props: {
          modules: this.config.modules,
          basisModule: this.config.basisModule,
          requireModuleSelection: this.config.requireModuleSelection
        }
      };
      if (d) {
        const u = Ce(d.smi), S = Ce(d.snmi), c = io(d.w), { modules: y } = this.config;
        if (u !== void 0 && u < (y == null ? void 0 : y.length)) {
          this.selectedMainModuleIndex.value = u;
          const M = y[u];
          S !== void 0 && (M == null ? void 0 : M.type) === "group" && S < ((s = M == null ? void 0 : M.cards) == null ? void 0 : s.length) && (this.selectedNestedModuleIndex.value = S);
        }
        c || await Oe(
          this.selectedMainModuleIndex.value,
          this.selectedNestedModuleIndex.value,
          o,
          this.config.modules,
          this.config.basisModule
        );
      }
      const { action: r } = Je(
        {
          name: "moduleSelector.title",
          title: "moduleSelector.title",
          icon: "mdi-view-grid"
        },
        n,
        o.windowManager,
        z
      );
      return o.navbarManager.add(
        {
          id: r.name,
          action: r
        },
        z,
        Ze.PROJECT,
        { desktop: !0, tablet: !0, mobile: !0 }
      ), (d && d.w || !d && this.config.isActiveOnStart) && o.windowManager.add(n, z), Promise.resolve();
    },
    getDefaultOptions: ue,
    getState() {
      var s, u;
      const i = (s = this.selectedMainModuleIndex) == null ? void 0 : s.value, d = (u = this.selectedNestedModuleIndex) == null ? void 0 : u.value, n = o.windowManager.has(ae), r = this.config.isActiveOnStart;
      return i !== void 0 || d !== void 0 || n !== r ? { smi: i, snmi: d, w: n } : {};
    },
    getConfigEditors() {
      return [
        {
          component: Wo,
          title: "moduleSelector.name",
          infoUrlCallback: o.getHelpUrlCallback(
            "/components/plugins/moduleSelectorConfig.html",
            "app-configurator"
          )
        }
      ];
    },
    toJSON() {
      const i = {}, d = ue();
      return this.config.windowTitle !== d.windowTitle && (i.windowTitle = this.config.windowTitle), this.config.isActiveOnStart !== d.isActiveOnStart && (i.isActiveOnStart = this.config.isActiveOnStart), this.config.requireModuleSelection !== d.requireModuleSelection && (i.requireModuleSelection = this.config.requireModuleSelection), ge(this.config.position, d.position) || (i.position = this.config.position), ge(this.config.modules, d.modules) || (i.modules = this.config.modules), ge(this.config.basisModule, d.basisModule) || (i.basisModule = this.config.basisModule), e.serverUrl != null && (i.serverUrl = e.serverUrl), e.projectId != null && (i.projectId = e.projectId), e.appId != null && (i.appId = e.appId), e.token != null && (i.token = e.token), i;
    },
    i18n: {
      de: {
        moduleSelector: {
          name: "Modul Auswahl Editor",
          title: "Themenkartenauswahl",
          startButton: "Anwendung starten",
          cardBack: "Zurück",
          configEditor: {
            moduleCloudPicker: {
              searchName: "Suche nach Name...",
              continue: "Weiter",
              back: "Zurück",
              headers: {
                name: "Modul Name",
                type: "Typ",
                description: "Beschreibung",
                createdAt: "Erzeugt am",
                updatedAt: "Aktualisiert am",
                createdBy: "Erzeugt von",
                updatedBy: "Aktualisiert von"
              }
            },
            TooltipAddCloudModule: "Modul aus Projekt hinzufügen",
            TooltipAddModule: "Modul hinzufügen",
            TooltipEditModule: "Modul bearbeiten",
            TooltipEditGroup: "Modul-Gruppe bearbeiten",
            TooltipDeleteMG: "Modul/Gruppe löschen",
            error: "Bitte tragen Sie einen Namen ein",
            editorError: "Bitte füllen Sie das Feld aus",
            breadcrumbs: { overview: "Übersicht", group: "Gruppe" },
            heading: "Themen- & Modulzuordnung",
            heading2: "Modulzuordnung",
            groupHeading: "Gruppeneinstellungen",
            baseModule: "Basismodul",
            baseModuleCheckbox: "Basismodul anzeigen",
            title: "Titel",
            add: "Modul hinzufügen",
            addGroup: "Gruppe hinzufügen",
            moduleName: "Modul Name",
            moduleIcon: "Icon Name",
            moduleUrl: "Modul URL",
            moduleDescription: "Modul Beschreibung",
            groupDescription: "Gruppen Beschreibung",
            groupName: "Gruppen Name",
            back: "Zurück",
            general: "Allgemeine Einstellungen",
            isActiveOnStart: "Themenkartenauswahl beim Start der Karte zeigen",
            requireModuleSelection: "Modulauswahl erforderlich machen",
            windowTitle: "Fenster Titel",
            windowPosition: "Fenster Position",
            moduleSettings: "Modul Einstellungen"
          }
        }
      },
      en: {
        moduleSelector: {
          name: "Module Selector Editor",
          title: "Theme map selection",
          startButton: "Start application",
          cardBack: "Back",
          configEditor: {
            moduleCloudPicker: {
              searchName: "Search for name...",
              continue: "Continue",
              back: "Back",
              headers: {
                name: "Module name",
                type: "Type",
                description: "Description",
                createdAt: "Created at",
                updatedAt: "Updated at",
                createdBy: "Created by",
                updatedBy: "Updated by"
              }
            },
            TooltipAddCloudModule: "Add module from project",
            TooltipAddModule: "Add module",
            TooltipEditModule: "Edit module",
            TooltipEditGroup: "Edit module group",
            TooltipDeleteMG: "Delete module/group",
            error: "Please add a name",
            editorError: "Please fill in the field",
            breadcrumbs: { overview: "Overview", group: "Group" },
            heading: "Topic & module assignment",
            heading2: "Module assignment",
            groupHeading: "Group settings",
            baseModule: "Base module",
            baseModuleCheckbox: "Show base module",
            title: "Title",
            add: "Add module",
            addGroup: "Add group",
            moduleName: "Module name",
            moduleIcon: "Icon name",
            moduleUrl: "Module URL",
            moduleDescription: "Module description",
            groupDescription: "Group description",
            groupName: "Group name",
            back: "Back",
            general: "General settings",
            isActiveOnStart: "Show theme map selection on map start",
            requireModuleSelection: "Require module selection",
            windowTitle: "Window title",
            windowPosition: "Window position",
            moduleSettings: "Module settings"
          }
        }
      }
    },
    destroy() {
    }
  };
}
export {
  Xo as default
};
