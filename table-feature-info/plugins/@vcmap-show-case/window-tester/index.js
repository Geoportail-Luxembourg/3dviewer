
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
} await loadCss('data:text/css;base64,LnZjc1Rlc3Qgc3BhbltkYXRhLXYtNjcyMDNjOGVde2JhY2tncm91bmQtY29sb3I6cmVkfQo=');import { VcsFormButton as O, WindowSlot as c, createToggleAction as V, ButtonLocation as G } from "../../../assets/ui.js";
import { resolveComponent as _, createBlock as T, openBlock as d, withCtx as p, createElementVNode as g, createElementBlock as y, Fragment as S, renderList as k, createVNode as R, withModifiers as H, createTextVNode as h, toDisplayString as M, inject as B, pushScopeId as U, popScopeId as b, ref as W, unref as L, withDirectives as Y, vModelText as P, computed as j, onUnmounted as J } from "../../../assets/vue.js";
import { VSheet as N, VContainer as q, VCard as z } from "../../../assets/vuetify.js";
const A = "@vcmap-show-case/window-tester", K = "1.0.0", Q = "^6.0", f = {
  name: A,
  version: K,
  mapVersion: Q
}, s = {
  ERROR: 2,
  WARN: 4,
  INFO: 8,
  DEBUG: 16
}, l = {
  ERROR: 0,
  WARN: 0,
  INFO: 0,
  DEBUG: 0
};
l.ERROR = s.ERROR | s.WARN | s.INFO | s.DEBUG;
l.WARN = s.WARN | s.INFO | s.DEBUG;
l.INFO = s.INFO | s.DEBUG;
l.DEBUG = s.DEBUG;
const E = {
  logLevel: s.INFO
}, v = /* @__PURE__ */ new Map();
v.set(s.ERROR, "error");
v.set(s.WARN, "warn");
v.set(s.INFO, "info");
v.set(s.DEBUG, "log");
class X {
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
    E.logLevel & l.ERROR && this._log(String(e), s.ERROR, t);
  }
  /**
   * Logs a warning message
   * @param {string} msg The message to log.
   * @param {...any} optArgs
   */
  warning(e, ...t) {
    E.logLevel & l.WARN && this._log(String(e), s.WARN, t);
  }
  /**
   * Deprecate a function. deprecations are stored on the logger
   * @param {string} functionName
   * @param {string=} alternativeFunctionName
   */
  deprecate(e, t) {
    const o = String(e), i = t ? String(t) : null;
    if (!this.deprecations.has(o)) {
      this.deprecations.set(o, i || null);
      let a = `${o} has been deprecated and will be removed`;
      i && (a = `${a}. ${i}`), this.warning(a);
    }
  }
  /**
   * Logs an info message
   * @param {string} msg The message to log.
   * @param {...any} optArgs
   */
  info(e, ...t) {
    E.logLevel & l.INFO && this._log(String(e), s.INFO, t);
  }
  /**
   * Logs a debug message
   * @param {string} msg The message to log.
   * @param {...any} optArgs
   */
  debug(e, ...t) {
    E.logLevel & l.DEBUG && this._log(String(e), s.DEBUG, t);
  }
  /**
   * Alias for debug
   * @param {string} msg The message to log.
   * @param {...any} optArgs
   */
  log(e, ...t) {
    E.logLevel & l.DEBUG && this._log(String(e), s.DEBUG, t);
  }
  /**
   * Logs a message
   * @param {string} msg The message to log.
   * @param {LOG_LEVEL} level
   * @param {Array} optArgs
   * @private
   */
  _log(e, t, o) {
    let i = e;
    this.className && (i = `[${this.className}] ${i}`), console[v.get(t)](i, ...o), t & s.ERROR && (console.group(), console.trace(), console.groupEnd());
  }
}
const $ = /* @__PURE__ */ new Map();
function Z(n) {
  const e = new X(n);
  return $.set(n, e), e;
}
function ee(n) {
  return $.has(n) ? $.get(n) : Z(n);
}
const x = (n, e) => {
  const t = n.__vccOpts || n;
  for (const [o, i] of e)
    t[o] = i;
  return t;
}, te = {
  name: "WindowExampleContent",
  components: { VSheet: N },
  setup() {
    return {};
  }
}, ne = /* @__PURE__ */ g("span", null, " content ", -1);
function oe(n, e, t, o, i, a) {
  const r = _("v-sheet");
  return d(), T(r, null, {
    default: p(() => [
      ne
    ]),
    _: 1
  });
}
const u = /* @__PURE__ */ x(te, [["render", oe]]), ie = {
  name: "WindowExampleContent",
  components: { VContainer: q, VcsFormButton: O },
  setup(n, { attrs: e }) {
    const t = B("vcsApp"), o = e["window-state"].id, i = `dynamicChild-${o}`;
    return {
      toggle(a) {
        const r = `${i}-${a}`;
        t.windowManager.has(r) ? t.windowManager.remove(r) : t.windowManager.add(
          {
            id: r,
            parentId: o,
            state: {
              headerTitle: `Example dynamicChild ${a}`,
              headerIcon: "mdi-human-child"
            },
            component: u,
            slot: c.DYNAMIC_CHILD
          },
          A
        );
      }
    };
  }
};
function se(n, e, t, o, i, a) {
  const r = _("VcsFormButton"), I = _("v-container");
  return d(), T(I, null, {
    default: p(() => [
      (d(), y(S, null, k([1, 2], (m) => R(r, {
        key: m,
        onClick: H((D) => o.toggle(m), ["stop"]),
        class: "ma-1"
      }, {
        default: p(() => [
          h("toggle child " + M(m), 1)
        ]),
        _: 2
      }, 1032, ["onClick"])), 64))
    ]),
    _: 1
  });
}
const w = /* @__PURE__ */ x(ie, [["render", se]]), ae = {
  name: "MyCustomHeader",
  props: {
    sample: {
      type: String,
      default: "MyCustomHeader"
    }
  },
  emits: ["close"],
  setup(n, { emit: e }) {
    return {
      clicked: () => {
        e("close");
      }
    };
  }
};
function re(n, e, t, o, i, a) {
  return d(), y("div", null, [
    g("div", null, [
      h(" Ha, this is a custom Header with a "),
      g("span", {
        onClick: e[0] || (e[0] = (...r) => o.clicked && o.clicked(...r))
      }, " CLOSE thing. ")
    ]),
    g("div", null, [
      h(" And here is '"),
      g("b", null, M(t.sample), 1),
      h("' passed through ")
    ])
  ]);
}
const ce = /* @__PURE__ */ x(ae, [["render", re]]), le = {
  name: "EmptyComponent",
  components: { VSheet: N }
}, de = (n) => (U("data-v-67203c8e"), n = n(), b(), n), pe = /* @__PURE__ */ de(() => /* @__PURE__ */ g("span", null, " Static Window ", -1));
function me(n, e, t, o, i, a) {
  const r = _("v-sheet");
  return d(), T(r, { style: { height: "100%" } }, {
    default: p(() => [
      pe
    ]),
    _: 1
  });
}
const ge = /* @__PURE__ */ x(le, [["render", me], ["__scopeId", "data-v-67203c8e"]]), he = ["prefix"], we = {
  __name: "BrokenWindow",
  setup(n) {
    const t = W("foo");
    return (o, i) => (d(), T(L(N), null, {
      default: p(() => [
        R(L(z), {
          class: "pa-2",
          elevation: "2"
        }, {
          default: p(() => [
            Y(g("input", {
              "onUpdate:modelValue": i[0] || (i[0] = (a) => t.value = a),
              type: "text",
              prefix: L(void 0)
            }, null, 8, he), [
              [P, t.value]
            ])
          ]),
          _: 1
        })
      ]),
      _: 1
    }));
  }
}, C = W(!1), ue = {
  name: "WindowExample",
  components: { VcsFormButton: O },
  setup() {
    const n = [
      {
        id: "dynamicLeft",
        state: {
          headerTitle: ["windowTester.title", "-", "Example dynamicLeft"]
        },
        component: w,
        slot: c.DYNAMIC_LEFT
      },
      {
        id: "dynamicLeft2",
        state: {
          headerTitle: ["windowTester.title", "-", "Example dynamicLeft2"]
        },
        component: w,
        slot: c.DYNAMIC_LEFT
      },
      {
        id: "dynamicLeft2 large",
        state: {
          headerTitle: [
            "windowTester.title",
            "-",
            "Example dynamicLeft2 with 1000px width"
          ]
        },
        component: w,
        slot: c.DYNAMIC_LEFT,
        position: {
          width: "1000px"
        }
      },
      {
        id: "dynamicRight",
        state: {
          headerTitle: ["windowTester.title", "-", "Example dynamicRight"]
        },
        component: u,
        headerComponent: ce,
        slot: c.DYNAMIC_RIGHT,
        props: {
          sample: "A window property"
        }
      },
      {
        id: "dynamicRight2",
        state: {
          headerTitle: ["windowTester.title", "-", "Example dynamicRight2"]
        },
        component: u,
        slot: c.DYNAMIC_RIGHT
      },
      {
        id: "static",
        state: {
          headerTitle: ["windowTester.title", "-", "Example static"],
          styles: { "background-color": "red" }
        },
        component: w,
        slot: c.STATIC
      },
      {
        id: "static2",
        state: {
          headerTitle: [
            "windowTester.title",
            "-",
            "Example static2 With TestClass"
          ],
          classes: {
            vcsTest: j(() => C.value)
          }
        },
        component: ge,
        slot: c.STATIC
      },
      {
        id: "position1",
        state: {
          headerTitle: [
            "windowTester.title",
            "-",
            "Example position1 relative"
          ]
        },
        component: w,
        position: {
          left: "30%",
          right: "30%",
          top: "40%",
          bottom: "20%"
        }
      },
      {
        id: "position2",
        state: {
          hideHeader: !1,
          headerTitle: [
            "windowTester.title",
            "-",
            "Example position2 absolute"
          ]
        },
        component: w,
        position: {
          left: "200px",
          top: "300px",
          minHeight: "250px",
          maxHeight: "500px",
          minWidth: "400px",
          maxWidth: "1000px"
        }
      },
      {
        id: "child-dynamicRight",
        parentId: "dynamicRight",
        state: {
          headerTitle: "Example dynamicRight dynamicChild",
          headerIcon: "mdi-human-child"
        },
        component: u,
        slot: c.DYNAMIC_CHILD
      },
      {
        id: "child-dynamicLeft",
        parentId: "dynamicLeft",
        state: {
          headerTitle: "Example dynamicLeft dynamicChild",
          headerIcon: "mdi-human-child"
        },
        component: u,
        slot: c.DYNAMIC_CHILD
      },
      {
        id: "child-dynamicLeft2",
        parentId: "dynamicLeft",
        state: {
          headerTitle: "Example dynamicLeft dynamicChild",
          headerIcon: "mdi-human-child"
        },
        component: u,
        slot: c.DYNAMIC_CHILD
      },
      {
        id: "broken",
        state: {
          headerTitle: "This window is broken",
          headerIcon: "mdi-human-child"
        },
        component: we,
        slot: c.DETACHED
      }
    ];
    J(() => {
      ee("windowManagerExample").log("got unmounted");
    });
    const e = B("vcsApp");
    return {
      showTestClass: C,
      toggleClass() {
        C.value = !C.value, e.windowManager.has("static2") && (C.value ? e.windowManager.get("static2").state.classes = ["vcsTest"] : e.windowManager.get("static2").state.classes = []);
      },
      toggle(t, o) {
        if (e.windowManager.has(o))
          e.windowManager.remove(o);
        else {
          t.stopPropagation();
          const i = n.find(
            (a) => a.id === o
          );
          e.windowManager.add(i, A);
        }
      },
      logStates() {
        e.windowManager.componentIds.forEach((t) => {
          console.log(e.windowManager.get(t)), console.log(e.windowManager.getCachedPosition(t));
        });
      },
      examples: n.map((t) => t.id)
    };
  }
};
function _e(n, e, t, o, i, a) {
  const r = _("VcsFormButton"), I = _("vcs-form-button");
  return d(), y("div", null, [
    (d(!0), y(S, null, k(o.examples, (m, D) => (d(), T(r, {
      key: `b-${D}`,
      onClick: (F) => o.toggle(F, m),
      class: "ma-1"
    }, {
      default: p(() => [
        h(" toggle " + M(m), 1)
      ]),
      _: 2
    }, 1032, ["onClick"]))), 128)),
    R(r, {
      onClick: e[0] || (e[0] = (m) => o.toggleClass()),
      active: o.showTestClass,
      class: "pa-1"
    }, {
      default: p(() => [
        h(" Change Static2 TestClass ")
      ]),
      _: 1
    }, 8, ["active"]),
    R(I, { onClick: o.logStates }, {
      default: p(() => [
        h("Log Current window states")
      ]),
      _: 1
    }, 8, ["onClick"])
  ]);
}
const fe = /* @__PURE__ */ x(ue, [["render", _e]]);
async function ve() {
  return {
    get name() {
      return f.name;
    },
    get version() {
      return f.version;
    },
    get mapVersion() {
      return f.mapVersion;
    },
    onVcsAppMounted(n) {
      const { action: e, destroy: t } = V(
        {
          name: "Window Tester"
        },
        {
          id: "window-tester",
          state: {
            headerTitle: "windowTester.title"
          },
          component: fe,
          position: {
            left: "55%",
            right: "10%",
            top: "10%"
          }
        },
        n.windowManager,
        f.name
      );
      n.navbarManager.add(
        { id: "window-tester", action: e },
        f.name,
        G.TOOL
      ), this._destroyAction = [t];
    },
    i18n: {
      de: {
        windowTester: {
          title: "Fenster Tester"
        }
      },
      en: {
        windowTester: {
          title: "Window Tester"
        }
      }
    },
    destroy() {
      this._destroyActions && (this._destroyActions.forEach((n) => n()), this._destroyActions = null);
    }
  };
}
export {
  ve as default
};
