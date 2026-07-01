import { resolveComponent as m, createBlock as R, openBlock as h, withCtx as v, createElementBlock as T, Fragment as F, renderList as $, createTextVNode as I, createCommentVNode as P, toDisplayString as G, mergeProps as J, createElementVNode as U, createVNode as B, inject as q, ref as z, reactive as D } from "../../../assets/vue.js";
import { createToggleAction as H, ButtonLocation as K } from "../../../assets/ui.js";
import { VcsModule as Q } from "../../../assets/core.js";
import { VIcon as S, VChip as X, VContainer as x, VTooltip as Y, VDivider as Z, VAvatar as ee, VCard as oe, VList as te } from "../../../assets/vuetify.js";
const s = {
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
M.ERROR = s.ERROR | s.WARN | s.INFO | s.DEBUG;
M.WARN = s.WARN | s.INFO | s.DEBUG;
M.INFO = s.INFO | s.DEBUG;
M.DEBUG = s.DEBUG;
const C = {
  logLevel: s.INFO
}, V = /* @__PURE__ */ new Map();
V.set(s.ERROR, "error");
V.set(s.WARN, "warn");
V.set(s.INFO, "info");
V.set(s.DEBUG, "log");
class ne {
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
  error(t, ...e) {
    C.logLevel & M.ERROR && this._log(String(t), s.ERROR, e);
  }
  /**
   * Logs a warning message
   * @param {string} msg The message to log.
   * @param {...any} optArgs
   */
  warning(t, ...e) {
    C.logLevel & M.WARN && this._log(String(t), s.WARN, e);
  }
  /**
   * Deprecate a function. deprecations are stored on the logger
   * @param {string} functionName
   * @param {string=} alternativeFunctionName
   */
  deprecate(t, e) {
    const i = String(t), r = e ? String(e) : null;
    if (!this.deprecations.has(i)) {
      this.deprecations.set(i, r || null);
      let a = `${i} has been deprecated and will be removed`;
      r && (a = `${a}. ${r}`), this.warning(a);
    }
  }
  /**
   * Logs an info message
   * @param {string} msg The message to log.
   * @param {...any} optArgs
   */
  info(t, ...e) {
    C.logLevel & M.INFO && this._log(String(t), s.INFO, e);
  }
  /**
   * Logs a debug message
   * @param {string} msg The message to log.
   * @param {...any} optArgs
   */
  debug(t, ...e) {
    C.logLevel & M.DEBUG && this._log(String(t), s.DEBUG, e);
  }
  /**
   * Alias for debug
   * @param {string} msg The message to log.
   * @param {...any} optArgs
   */
  log(t, ...e) {
    C.logLevel & M.DEBUG && this._log(String(t), s.DEBUG, e);
  }
  /**
   * Logs a message
   * @param {string} msg The message to log.
   * @param {LOG_LEVEL} level
   * @param {Array} optArgs
   * @private
   */
  _log(t, e, i) {
    let r = t;
    this.className && (r = `[${this.className}] ${r}`), console[V.get(e)](r, ...i), e & s.ERROR && (console.group(), console.trace(), console.groupEnd());
  }
}
let k;
function se() {
  return k || (k = new ne()), k;
}
function ce(c) {
  return se();
}
const W = (c, t) => {
  const e = c.__vccOpts || c;
  for (const [i, r] of t)
    e[i] = r;
  return e;
}, ie = {
  name: "ModulesListComponent",
  components: {
    VTooltip: Y,
    VContainer: x,
    VChip: X,
    VIcon: S
  },
  props: {
    modules: {
      type: Array,
      required: !0
    },
    toggleable: {
      type: Boolean,
      default: !0
    }
  },
  emits: ["toggle-module"],
  methods: {
    toggle(c) {
      this.toggleable && this.$emit("toggle-module", c);
    }
  }
};
function le(c, t, e, i, r, a) {
  const g = m("v-icon"), d = m("v-tooltip"), j = m("v-chip"), w = m("v-container");
  return h(), R(w, { class: "pa-0" }, {
    default: v(() => [
      (h(!0), T(F, null, $(e.modules, (u, N) => (h(), R(j, {
        key: N,
        class: "ma-1",
        color: u.active ? "primary" : void 0,
        disabled: !e.toggleable,
        onClick: (y) => a.toggle(u)
      }, {
        default: v(() => [
          I(G(u.name || u.configUrl) + " ", 1),
          u.description && e.toggleable ? (h(), R(g, J({
            key: 0,
            right: "",
            ref_for: !0
          }, { ...c.$attrs, ...c.$props }), {
            default: v(() => [
              I(" mdi-help-circle ")
            ]),
            _: 1
          }, 16)) : P("", !0),
          u.description && e.toggleable ? (h(), R(d, {
            key: 1,
            text: u.description,
            activator: "parent"
          }, null, 8, ["text"])) : P("", !0)
        ]),
        _: 2
      }, 1032, ["color", "disabled", "onClick"]))), 128))
    ]),
    _: 1
  });
}
const re = /* @__PURE__ */ W(ie, [["render", le]]), ae = {
  name: "ProjectSelector",
  components: {
    ModulesListComponent: re,
    VList: te,
    VContainer: x,
    VCard: oe,
    VIcon: S,
    VAvatar: ee,
    VDivider: Z
  },
  setup() {
    const c = q("vcsApp"), t = c.plugins.getByKey("@vcmap-show-case/project-selector"), e = z(void 0);
    async function i(a) {
      e.value = a.name, await t.selectProject(c, a), e.value = void 0;
    }
    async function r(a) {
      a.active ? await t.unloadModule(c, a) : await t.loadModule(c, a);
    }
    return {
      loading: void 0,
      state: t.state,
      config: t.config,
      selectProject: i,
      toggleModule: r
    };
  }
};
function de(c, t, e, i, r, a) {
  const g = m("ModulesListComponent"), d = m("v-icon"), j = m("v-avatar"), w = m("v-card"), u = m("v-list"), N = m("v-divider"), y = m("v-container");
  return h(), R(y, null, {
    default: v(() => [
      U("h1", null, G(c.$t("project-selector.project.title")), 1),
      (h(!0), T(F, null, $(i.state.projects, (p, b) => (h(), R(u, { key: b }, {
        default: v(() => [
          B(w, {
            class: "ma-1",
            title: p.name,
            subtitle: p.description,
            color: p.active ? "base-lighten-3" : void 0,
            onClick: (A) => i.selectProject(p),
            hover: "",
            outlined: "",
            loading: i.loading === p.name
          }, {
            actions: v(() => [
              B(g, {
                modules: p.modules,
                onToggleModule: i.toggleModule,
                toggleable: !1
              }, null, 8, ["modules", "onToggleModule"])
            ]),
            append: v(() => [
              p.active ? (h(), R(j, {
                key: 0,
                color: "success",
                size: "30"
              }, {
                default: v(() => [
                  B(d, null, {
                    default: v(() => [
                      I("mdi-check")
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })) : P("", !0)
            ]),
            _: 2
          }, 1032, ["title", "subtitle", "color", "onClick", "loading"])
        ]),
        _: 2
      }, 1024))), 128)),
      B(N),
      U("h1", null, G(c.$t("project-selector.module.title")), 1),
      B(g, {
        modules: i.state.modules,
        onToggleModule: i.toggleModule
      }, null, 8, ["modules", "onToggleModule"])
    ]),
    _: 1
  });
}
const ue = /* @__PURE__ */ W(ae, [["render", de]]), ge = "@vcmap-show-case/project-selector", me = "1.0.0", pe = "^6.0", E = {
  name: ge,
  version: me,
  mapVersion: pe
}, fe = "VC Map Base", _e = [], ve = !1, he = [
  {
    name: "VC Map Base",
    description: "Base Layout with basic datasets",
    modules: [
      "config/base.config.json"
    ]
  }
], Me = [], L = {
  selected: fe,
  selectedModules: _e,
  open: ve,
  projects: he,
  modules: Me
}, Re = {
  "project-selector": {
    project: {
      title: "Projekte"
    },
    module: {
      title: "Module"
    }
  }
}, je = {
  "project-selector": {
    project: {
      title: "Projects"
    },
    module: {
      title: "Modules"
    }
  }
};
async function Be(c) {
  const {
    selected: t,
    selectedModules: e,
    open: i,
    projects: r = [],
    modules: a = []
  } = c, g = D({
    selected: t || L.selected,
    selectedModules: e || L.selectedModules,
    open: i || L.open,
    projects: (
      /** @type {Array<ProjectOptions>} */
      [
        ...L.projects,
        ...r
      ]
    ),
    modules: (
      /** @type {Array<string>} */
      [
        ...L.modules,
        ...a
      ]
    )
  }), d = D({
    projects: (
      /** @type {Array<Project>} */
      []
    ),
    modules: (
      /** @type {Array<VcsModuleState>} */
      []
    )
  });
  function j(n) {
    d.modules.push({ _id: void 0, configUrl: n, active: !1 });
  }
  function w(n) {
    const o = d.modules.findIndex(({ _id: l }) => l === n);
    d.modules.splice(o, 1);
  }
  function u({ name: n, description: o, modules: l }) {
    const O = {
      name: n,
      description: o,
      modules: l.map((f) => ({
        _id: void 0,
        configUrl: f,
        active: !1
      })),
      active: !1
    };
    d.projects.push(O);
  }
  function N(n) {
    const o = d.projects.findIndex(
      (l) => l.name === n.name
    );
    d.projects.splice(o, 1);
  }
  async function y(n, o) {
    try {
      const l = await fetch(o.configUrl);
      if (l.ok) {
        const O = await l.json(), f = new Q(O);
        n.getModuleById(f._id) || (await n.addModule(f), o._id = f._id, o.name = f.name, o.description = f.description, o.active = !0);
      }
    } catch (l) {
      ce().error(
        `Failed loading module from ${o.configUrl}`,
        l
      );
    }
  }
  async function p(n, o) {
    n.getModuleById(o._id) && (await n.removeModule(o._id), o.active = !1, o._id = void 0);
  }
  async function b(n, o) {
    o.active && (await Promise.all(
      [...o.modules].map((l) => p(n, l))
    ), o.active = !1);
  }
  async function A(n, o) {
    o.active || (await Promise.all(
      [...d.projects].map((l) => b(n, l))
    ), await Promise.all(
      [...o.modules].map((l) => y(n, l))
    ), o.active = !0);
  }
  return {
    get name() {
      return E.name;
    },
    get version() {
      return E.version;
    },
    get mapVersion() {
      return E.mapVersion;
    },
    config: g,
    state: d,
    addModule: j,
    removeModule: w,
    addProject: u,
    removeProject: N,
    selectProject: A,
    deselectProject: b,
    loadModule: y,
    unloadModule: p,
    onVcsAppMounted(n) {
      const o = {
        id: "project-selector",
        component: ue,
        state: {
          headerTitle: "Project Selector"
        },
        position: {
          left: "30%",
          right: "30%",
          top: "20%",
          bottom: "20%"
        }
      }, { action: l, destroy: O } = H(
        {
          name: "VC Map HOSTING",
          icon: "mdi-chevron-down"
        },
        o,
        n.windowManager,
        E.name
      );
      n.navbarManager.add(
        { id: "project-selector", action: l },
        E.name,
        K.PROJECT
      ), this._destroyAction = O, g.modules.forEach((_) => j(_)), g.projects.forEach((_) => u(_));
      const f = [...d.projects].find(
        (_) => _.name === g.selected
      ) || d.projects[0];
      A(n, f), [...d.modules].filter(
        (_) => g.selectedModules.includes(_.configUrl)
      ).forEach((_) => y(n, _)), g.open && n.windowManager.add(o, E.name);
    },
    i18n: {
      de: Re,
      en: je
    },
    destroy() {
      this._destroyAction && (this._destroyAction(), this._destroyAction = null);
    }
  };
}
export {
  Be as default
};
