
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
} await loadCss('data:text/css;base64,Lm51bWJlci1pbnB1dFtkYXRhLXYtOWNlYWRhOGFde21heC13aWR0aDpjYWxjKHZhcigtLXYtdmNzLWZvbnQtc2l6ZSkgKiAyLjQpfS52Y3MtaW5wdXQtd3JhcFtkYXRhLXYtOWNlYWRhOGFde2ZsZXg6MSAyIGF1dG99W2RhdGEtdi05Y2VhZGE4YV0gLnZjcy10ZXh0LWZpZWxkIGlucHV0e3RleHQtYWxpZ246Y2VudGVyfQo=');import { CesiumMap as V } from "../../../assets/core.js";
import { VcsTextField as J, VcsSlider as Y, VcsLabel as O, VcsDatePicker as W, VcsButton as I, WindowSlot as K, ToolboxType as U } from "../../../assets/ui.js";
import { defineComponent as z, inject as G, ref as R, computed as _, onMounted as q, resolveComponent as p, createBlock as D, openBlock as T, withCtx as m, createVNode as d, createTextVNode as k, toDisplayString as S, withKeys as A, reactive as N } from "../../../assets/vue.js";
import { VRow as Q, VDivider as X, VContainer as Z, VCol as x } from "../../../assets/vuetify.js";
import { JulianDate as r } from "../../../assets/cesium.js";
var w = /* @__PURE__ */ ((e) => (e.Minutes = "minutes", e.Hours = "hours", e.Days = "days", e))(w || {});
const g = "shadow_tool_window_id", y = "@vcmap/shadow", ee = "3.0.4", te = "^6.0";
function ne(e, t, n) {
  const i = e.maps.activeMap;
  i.setDefaultShadowMap();
  const a = i.getCesiumWidget(), { clock: l } = a, u = Object.assign(l.currentTime), { shadowMap: s } = i.getScene();
  s.enabled = !0, t && (l.currentTime = t);
  const h = i.shadowMapChanged.addEventListener(() => {
    n();
  });
  return { originalTime: u, shadowMap: s, destroy: () => {
    h();
  }, clock: l };
}
function ae(e, t, n) {
  const a = e.maps.activeMap.getCesiumWidget();
  t && (t.enabled = !1);
  const l = a.clock.currentTime;
  return n && (a.clock.currentTime = n), { timeOnClose: l };
}
function oe(e, t, n, i) {
  const l = ((/* @__PURE__ */ new Date()).getTime() - e.getTime()) / 1e3;
  if (i === w.Hours) {
    const u = 1440 / n * l;
    return r.addMinutes(
      t,
      Math.ceil(u),
      new r()
    );
  } else if (i === w.Days) {
    const u = 365 / n * l;
    return r.addDays(
      t,
      Math.ceil(u),
      new r()
    );
  }
  throw new Error("invalid time unit provided");
}
function ie(e, t) {
  return r.compare(e, t) < 0;
}
function $(e) {
  return r.toDate(e).getHours();
}
function E(e) {
  return r.toDate(e).getMinutes();
}
function se(e) {
  return $(e) * 60 + E(e);
}
function P(e) {
  const t = Number(e);
  return Number.isInteger(t) && t <= 23 && t >= 0;
}
function B(e) {
  const t = Number(e);
  return Number.isInteger(t) && t <= 59 && t >= 0;
}
const re = z({
  name: "ShadowTool",
  components: {
    VCol: x,
    VContainer: Z,
    VDivider: X,
    VRow: Q,
    VcsButton: I,
    VcsDatePicker: W,
    VcsLabel: O,
    VcsSlider: Y,
    VcsTextField: J
  },
  setup() {
    const e = G("vcsApp"), t = e.maps.activeMap, { state: n } = e.plugins.getByKey(y), { clock: i } = t.getCesiumWidget(), a = R(i.currentTime), l = (o) => {
      a.value = o, i.currentTime = o;
    };
    let u, s;
    const h = _({
      get: () => r.toDate(a.value),
      set: (o) => {
        o.setHours($(a.value)), o.setMinutes(E(a.value)), l(r.fromDate(o));
      }
    }), f = _({
      get: () => {
        const o = String($(a.value));
        return o.length < 2 ? `0${o}` : o;
      },
      set: (o) => {
        const c = r.toDate(a.value);
        c.setHours(+o), l(r.fromDate(c));
      }
    }), v = _({
      get: () => {
        let o = String(E(a.value));
        return o.length < 2 && (o = `0${o}`), o;
      },
      set: (o) => {
        const c = r.toDate(a.value);
        c.setMinutes(+o), l(r.fromDate(c));
      }
    }), L = _({
      get: () => se(a.value),
      set: (o) => {
        const c = r.toDate(a.value);
        c.setHours(Math.floor(o / 60), Math.round(o % 60)), l(r.fromDate(c));
      }
    }), b = () => {
      n.animate = !1, n.endDate = null;
    };
    q(() => {
      n.removeListener && n.removeListener();
      const o = r.toDate(i.currentTime);
      o.setFullYear((/* @__PURE__ */ new Date()).getFullYear()), i.currentTime = r.fromDate(o), n.removeListener = i.onTick.addEventListener((c) => {
        if (n.animate)
          if (ie(a.value, n.endDate)) {
            const F = oe(
              u,
              s,
              n.duration,
              n.timeUnit
            );
            l(F);
          } else
            b();
        else r.secondsDifference(
          c.currentTime,
          a.value
        ) >= 1 && l(c.currentTime);
      });
    });
    const H = () => {
      u = /* @__PURE__ */ new Date(), s = r.clone(a.value), n.animate = !0;
    };
    return {
      TimeUnits: w,
      state: n,
      animateDay: () => {
        H(), n.timeUnit = w.Hours;
        const o = r.addDays(
          a.value,
          1,
          new r()
        );
        n.endDate = n.endDate ?? o;
      },
      animateYear: () => {
        H(), n.timeUnit = w.Days;
        const o = r.addDays(
          a.value,
          365,
          new r()
        );
        n.endDate = n.endDate ?? o;
      },
      stopAnimation: b,
      date: h,
      hours: f,
      minutes: v,
      totalMinutes: L,
      setTime: (o) => {
        const { value: c, id: F } = o.target;
        F === w.Hours ? P(+c) && (f.value = c) : F === w.Minutes && B(+c) && (v.value = c);
      },
      validateMinute: B,
      validateHour: P
    };
  }
}), le = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [i, a] of t)
    n[i] = a;
  return n;
};
function de(e, t, n, i, a, l) {
  const u = p("VcsLabel"), s = p("v-col"), h = p("VcsTextField"), f = p("VcsButton"), v = p("v-row"), L = p("VcsSlider"), b = p("v-divider"), H = p("VcsDatePicker"), j = p("v-container");
  return T(), D(j, { class: "pa-2 overflow-hidden" }, {
    default: m(() => [
      d(v, {
        "no-gutters": "",
        class: "d-flex flex-nowrap align-center justify-space-between"
      }, {
        default: m(() => [
          d(s, { class: "d-flex align-center justify-start" }, {
            default: m(() => [
              d(u, { "html-for": "time-slider" }, {
                default: m(() => [
                  k(
                    S(e.$t("shadow.time")),
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
          d(s, { class: "d-flex align-center justify-end vcs-input-wrap" }, {
            default: m(() => [
              d(h, {
                id: e.TimeUnits.Hours,
                class: "number-input",
                type: "number",
                "model-value": e.hours,
                tooltip: "shadow.hoursFormat",
                "tooltip-position": "bottom",
                "hide-spin-buttons": "",
                disabled: e.state.animate,
                rules: [e.validateHour],
                onBlur: e.setTime,
                onKeyup: A(e.setTime, ["enter"])
              }, null, 8, ["id", "model-value", "disabled", "rules", "onBlur", "onKeyup"]),
              k(" : "),
              d(h, {
                id: e.TimeUnits.Minutes,
                class: "number-input",
                type: "number",
                "model-value": e.minutes,
                tooltip: "shadow.minutesFormat",
                "tooltip-position": "bottom",
                "hide-spin-buttons": "",
                disabled: e.state.animate,
                rules: [e.validateMinute],
                onBlur: e.setTime,
                onKeyup: A(e.setTime, ["enter"])
              }, null, 8, ["id", "model-value", "disabled", "rules", "onBlur", "onKeyup"]),
              e.state.animate ? (T(), D(f, {
                key: 0,
                icon: "mdi-pause-circle",
                tooltip: "shadow.pause",
                class: "pl-1",
                onClick: e.stopAnimation
              }, null, 8, ["onClick"])) : (T(), D(f, {
                key: 1,
                icon: "$vcsPlayCircle",
                tooltip: "shadow.animateDay",
                class: "pl-1",
                onClick: e.animateDay
              }, null, 8, ["onClick"]))
            ]),
            _: 1
            /* STABLE */
          })
        ]),
        _: 1
        /* STABLE */
      }),
      d(L, {
        id: "time-slider",
        modelValue: e.totalMinutes,
        "onUpdate:modelValue": t[0] || (t[0] = (M) => e.totalMinutes = M),
        min: 0,
        max: 24 * 60 - 1,
        step: 0,
        disabled: e.state.animate
      }, null, 8, ["modelValue", "disabled"]),
      d(b),
      d(v, { class: "d-flex flex-nowrap align-center justify-space-between" }, {
        default: m(() => [
          d(s, { class: "d-flex align-center" }, {
            default: m(() => [
              d(u, { "html-for": "date" }, {
                default: m(() => [
                  k(
                    S(e.$t("shadow.date")),
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
          d(s, { class: "d-flex align-center" }, {
            default: m(() => [
              d(H, {
                modelValue: e.date,
                "onUpdate:modelValue": t[1] || (t[1] = (M) => e.date = M),
                disabled: e.state.animate
              }, null, 8, ["modelValue", "disabled"]),
              e.state.animate ? (T(), D(f, {
                key: 0,
                icon: "mdi-pause-circle",
                tooltip: "shadow.pause",
                class: "pl-1",
                onClick: e.stopAnimation
              }, null, 8, ["onClick"])) : (T(), D(f, {
                key: 1,
                icon: "$vcsPlayCircle",
                tooltip: "shadow.animateYear",
                small: "",
                class: "pl-1",
                onClick: e.animateYear
              }, null, 8, ["onClick"]))
            ]),
            _: 1
            /* STABLE */
          })
        ]),
        _: 1
        /* STABLE */
      }),
      d(b),
      d(v, { class: "d-flex flex-nowrap align-center justify-space-between pt-1" }, {
        default: m(() => [
          d(s, { class: "d-flex justify-start" }, {
            default: m(() => [
              d(u, {
                "html-for": "duration-picker",
                "help-text": "shadow.durationTooltip",
                "tooltip-position": "bottom",
                class: "gc-2"
              }, {
                default: m(() => [
                  k(
                    S(e.$t("shadow.duration")),
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
          d(s, { class: "d-flex align-center justify-end" }, {
            default: m(() => [
              d(u, {
                class: "pr-0",
                "html-for": "duration-slider"
              }, {
                default: m(() => [
                  k(
                    S(e.state.duration) + " " + S(e.$t("shadow.seconds")),
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
      }),
      d(L, {
        id: "duration-slider",
        modelValue: e.state.duration,
        "onUpdate:modelValue": t[2] || (t[2] = (M) => e.state.duration = M),
        type: "number",
        "show-ticks": "always",
        step: 1,
        min: 1,
        max: 20
      }, null, 8, ["modelValue"])
    ]),
    _: 1
    /* STABLE */
  });
}
const ue = /* @__PURE__ */ le(re, [["render", de], ["__scopeId", "data-v-9ceada8a"]]);
function ce(e, t) {
  const n = {
    id: g,
    component: ue,
    slot: K.DYNAMIC_LEFT,
    state: {
      headerTitle: "shadow.title",
      headerIcon: "$vcsShadow",
      infoUrlCallback: e.getHelpUrlCallback(
        "/tools/shadowTool.html",
        "vc-map"
      )
    }
  };
  let i = () => {
  };
  const a = N({
    name: "shadowAction",
    title: "shadow.title",
    icon: "$vcsShadow",
    active: !1,
    background: !1,
    disabled: !1,
    callback() {
      if (a.active)
        a.background ? e.windowManager.add(n, y) : i(), a.background = !1;
      else if (e.maps.activeMap instanceof V) {
        const { originalTime: s, shadowMap: h, destroy: f, clock: v } = ne(
          e,
          t.timeOnClose,
          i
        );
        t.destroyShadowMapChangedListener = f, t.shadowMap = h, t.clock = v, !t.originalTime && s && (t.originalTime = s), a.active = !0, e.windowManager.add(n, y);
      }
    }
  });
  i = () => {
    if (t.removeListener && (t.removeListener(), t.removeListener = null), t.destroyShadowMapChangedListener && (t.destroyShadowMapChangedListener(), t.destroyShadowMapChangedListener = null), e.windowManager.remove(g), e.maps.activeMap instanceof V) {
      const { timeOnClose: s } = ae(
        e,
        t.shadowMap,
        t.originalTime
      );
      s && (t.timeOnClose = s);
    }
    t.shadowMap = null, a.active = !1;
  };
  const l = [
    e.windowManager.added.addEventListener(({ id: s }) => {
      s === n.id && (a.active = !0, a.background = !1);
    }),
    e.windowManager.removed.addEventListener(({ id: s }) => {
      s === n.id && (a.background = !0);
    })
  ];
  return { action: a, destroy: () => {
    t.removeListener && t.removeListener(), t.destroyShadowMapChangedListener && t.destroyShadowMapChangedListener(), e.maps.activeMap instanceof V && i(), t.shadowMap && (t.shadowMap.enabled = !1), t.clock && (t.clock.currentTime = t.originalTime), l.forEach((s) => {
      s();
    });
  } };
}
const C = N({
  originalTime: null,
  timeOnClose: null,
  animate: !1,
  duration: 10,
  timeUnit: w.Days,
  endDate: null,
  removeListener: null,
  shadowMap: null,
  destroyShadowMapChangedListener: null,
  clock: null
});
function ge() {
  let e, t, n;
  return {
    get name() {
      return y;
    },
    get version() {
      return ee;
    },
    get mapVersion() {
      return te;
    },
    state: C,
    initialize(i) {
      e = i;
      const { action: a, destroy: l } = ce(i, C);
      return a.disabled = !(i.maps.activeMap instanceof V), t = l, n = i.maps.mapActivated.addEventListener(
        (u) => {
          u instanceof V ? a.disabled = !1 : (e.windowManager.has(g) && e.windowManager.remove(g), a.disabled = !0);
        }
      ), i.toolboxManager.add(
        {
          id: g,
          type: U.SINGLE,
          action: a
        },
        y
      ), Promise.resolve();
    },
    getDefaultOptions() {
      return {};
    },
    toJSON() {
      return {};
    },
    i18n: {
      en: {
        shadow: {
          title: "Simulate shadows",
          date: "Date",
          time: "Time",
          animateDay: "Animate shadow over a day",
          animateYear: "Animate shadow over a year",
          pause: "Pause",
          duration: "Animation duration",
          durationTooltip: "Determines the overall duration of the animation for a daily or annual loop.",
          hours: "hours",
          minutes: "minutes",
          min: "min",
          seconds: "seconds",
          sec: "sec",
          and: "and",
          hoursFormat: "Hour of day (00 to 23)",
          minutesFormat: "Minutes of day (00 to 59)",
          timePickerSelectHint: "Select the"
        }
      },
      de: {
        shadow: {
          title: "Schatten simulieren",
          date: "Datum",
          time: "Uhrzeit",
          animateDay: "Schatten über einen Tag animieren",
          animateYear: "Schatten über ein Jahr animieren",
          pause: "Pause",
          duration: "Animationsdauer",
          durationTooltip: "Definiert die Gesamtdauer der Animation für einen Tages- bzw. Jahresdurchlauf.",
          hours: "Stunden",
          minutes: "Minuten",
          min: "Min",
          seconds: "Sekunden",
          sec: "Sek",
          and: "und",
          hoursFormat: "Stunden (00 bis 23)",
          minutesFormat: "Minuten (00 bis 59)",
          timePickerSelectHint: "Wählen Sie die"
        }
      }
    },
    getConfigEditors() {
      return [];
    },
    destroy() {
      C.removeListener && (C.removeListener(), C.removeListener = null), e != null && e.toolboxManager.has(y) && e.toolboxManager.remove(y), e != null && e.windowManager.has(g) && e.windowManager.remove(g), t == null || t(), n == null || n();
    }
  };
}
export {
  ge as default
};
