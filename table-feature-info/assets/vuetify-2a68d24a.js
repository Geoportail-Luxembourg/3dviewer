
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
} await loadCss('./assets/vuetify-2a68d24a.css');import { watch as J, onScopeDispose as Xe, effectScope as Xl, shallowRef as G, reactive as lt, computed as b, watchEffect as Fe, toRefs as Ut, capitalize as Hn, unref as it, Fragment as ie, isVNode as Oc, Comment as Nc, warn as Ua, getCurrentInstance as Rc, ref as U, provide as De, inject as be, defineComponent as Hc, h as Yt, camelize as Ir, toRaw as Be, createVNode as r, mergeProps as O, onBeforeUnmount as Ze, readonly as Zl, onMounted as Ue, onDeactivated as _r, onActivated as zc, nextTick as we, TransitionGroup as Ql, Transition as Wt, isRef as An, toRef as $, onBeforeMount as sa, withDirectives as $e, resolveDirective as mt, vShow as Ct, onUpdated as Wc, Text as jc, resolveDynamicComponent as Uc, toDisplayString as sn, markRaw as Yc, Teleport as Gc, cloneVNode as Kc, createTextVNode as _t, onUnmounted as Tr, onBeforeUpdate as qc, withModifiers as Zn, vModelText as Xc, resolveComponent as Zc, render as Ar } from "./vue-f3195b79.js";
function ot(e, n) {
  let t;
  function a() {
    t = Xl(), t.run(() => n.length ? n(() => {
      t == null || t.stop(), a();
    }) : n());
  }
  J(e, (l) => {
    l && !t ? a() : l || (t == null || t.stop(), t = void 0);
  }, {
    immediate: !0
  }), Xe(() => {
    t == null || t.stop();
  });
}
const xe = typeof window < "u", Jl = xe && "IntersectionObserver" in window, Qc = xe && ("ontouchstart" in window || window.navigator.maxTouchPoints > 0), Ki = xe && "EyeDropper" in window;
function qi(e, n, t) {
  Jc(e, n), n.set(e, t);
}
function Jc(e, n) {
  if (n.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object");
}
function ed(e, n, t) {
  return e.set(Dr(e, n), t), t;
}
function Jt(e, n) {
  return e.get(Dr(e, n));
}
function Dr(e, n, t) {
  if (typeof e == "function" ? e === n : e.has(n)) return arguments.length < 3 ? n : t;
  throw new TypeError("Private element is not present on this object");
}
function Br(e, n, t) {
  const a = n.length - 1;
  if (a < 0) return e === void 0 ? t : e;
  for (let l = 0; l < a; l++) {
    if (e == null)
      return t;
    e = e[n[l]];
  }
  return e == null || e[n[a]] === void 0 ? t : e[n[a]];
}
function nt(e, n) {
  if (e === n) return !0;
  if (e instanceof Date && n instanceof Date && e.getTime() !== n.getTime() || e !== Object(e) || n !== Object(n))
    return !1;
  const t = Object.keys(e);
  return t.length !== Object.keys(n).length ? !1 : t.every((a) => nt(e[a], n[a]));
}
function cn(e, n, t) {
  return e == null || !n || typeof n != "string" ? t : e[n] !== void 0 ? e[n] : (n = n.replace(/\[(\w+)\]/g, ".$1"), n = n.replace(/^\./, ""), Br(e, n.split("."), t));
}
function Ne(e, n, t) {
  if (n === !0) return e === void 0 ? t : e;
  if (n == null || typeof n == "boolean") return t;
  if (e !== Object(e)) {
    if (typeof n != "function") return t;
    const l = n(e, t);
    return typeof l > "u" ? t : l;
  }
  if (typeof n == "string") return cn(e, n, t);
  if (Array.isArray(n)) return Br(e, n, t);
  if (typeof n != "function") return t;
  const a = n(e, t);
  return typeof a > "u" ? t : a;
}
function vt(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
  return Array.from({
    length: e
  }, (t, a) => n + a);
}
function te(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "px";
  if (e == null || e === "")
    return;
  const t = Number(e);
  return isNaN(t) ? String(e) : isFinite(t) ? `${t}${n}` : void 0;
}
function Ya(e) {
  return e !== null && typeof e == "object" && !Array.isArray(e);
}
function Xi(e) {
  let n;
  return e !== null && typeof e == "object" && ((n = Object.getPrototypeOf(e)) === Object.prototype || n === null);
}
function ei(e) {
  if (e && "$el" in e) {
    const n = e.$el;
    return (n == null ? void 0 : n.nodeType) === Node.TEXT_NODE ? n.nextElementSibling : n;
  }
  return e;
}
const Zi = Object.freeze({
  enter: 13,
  tab: 9,
  delete: 46,
  esc: 27,
  space: 32,
  up: 38,
  down: 40,
  left: 37,
  right: 39,
  end: 35,
  home: 36,
  del: 46,
  backspace: 8,
  insert: 45,
  pageup: 33,
  pagedown: 34,
  shift: 16
}), Tl = Object.freeze({
  enter: "Enter",
  tab: "Tab",
  delete: "Delete",
  esc: "Escape",
  space: "Space",
  up: "ArrowUp",
  down: "ArrowDown",
  left: "ArrowLeft",
  right: "ArrowRight",
  end: "End",
  home: "Home",
  del: "Delete",
  backspace: "Backspace",
  insert: "Insert",
  pageup: "PageUp",
  pagedown: "PageDown",
  shift: "Shift"
});
function Mr(e) {
  return Object.keys(e);
}
function tn(e, n) {
  return n.every((t) => e.hasOwnProperty(t));
}
function Ot(e, n) {
  const t = {};
  for (const a of n)
    Object.prototype.hasOwnProperty.call(e, a) && (t[a] = e[a]);
  return t;
}
function Al(e, n, t) {
  const a = /* @__PURE__ */ Object.create(null), l = /* @__PURE__ */ Object.create(null);
  for (const i in e)
    n.some((o) => o instanceof RegExp ? o.test(i) : o === i) ? a[i] = e[i] : l[i] = e[i];
  return [a, l];
}
function Ce(e, n) {
  const t = {
    ...e
  };
  return n.forEach((a) => delete t[a]), t;
}
const pr = /^on[^a-z]/, ti = (e) => pr.test(e), td = ["onAfterscriptexecute", "onAnimationcancel", "onAnimationend", "onAnimationiteration", "onAnimationstart", "onAuxclick", "onBeforeinput", "onBeforescriptexecute", "onChange", "onClick", "onCompositionend", "onCompositionstart", "onCompositionupdate", "onContextmenu", "onCopy", "onCut", "onDblclick", "onFocusin", "onFocusout", "onFullscreenchange", "onFullscreenerror", "onGesturechange", "onGestureend", "onGesturestart", "onGotpointercapture", "onInput", "onKeydown", "onKeypress", "onKeyup", "onLostpointercapture", "onMousedown", "onMousemove", "onMouseout", "onMouseover", "onMouseup", "onMousewheel", "onPaste", "onPointercancel", "onPointerdown", "onPointerenter", "onPointerleave", "onPointermove", "onPointerout", "onPointerover", "onPointerup", "onReset", "onSelect", "onSubmit", "onTouchcancel", "onTouchend", "onTouchmove", "onTouchstart", "onTransitioncancel", "onTransitionend", "onTransitionrun", "onTransitionstart", "onWheel"], nd = ["ArrowUp", "ArrowDown", "ArrowRight", "ArrowLeft", "Enter", "Escape", "Tab", " "];
function ad(e) {
  return e.isComposing && nd.includes(e.key);
}
function Nt(e) {
  const [n, t] = Al(e, [pr]), a = Ce(n, td), [l, i] = Al(t, ["class", "style", "id", /^data-/]);
  return Object.assign(l, n), Object.assign(i, a), [l, i];
}
function Ae(e) {
  return e == null ? [] : Array.isArray(e) ? e : [e];
}
function ld(e, n) {
  let t = 0;
  const a = function() {
    for (var l = arguments.length, i = new Array(l), o = 0; o < l; o++)
      i[o] = arguments[o];
    clearTimeout(t), t = setTimeout(() => e(...i), it(n));
  };
  return a.clear = () => {
    clearTimeout(t);
  }, a.immediate = e, a;
}
function Me(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1;
  return Math.max(n, Math.min(t, e));
}
function Qi(e) {
  const n = e.toString().trim();
  return n.includes(".") ? n.length - n.indexOf(".") - 1 : 0;
}
function Ji(e, n) {
  let t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "0";
  return e + t.repeat(Math.max(0, n - e.length));
}
function eo(e, n) {
  return (arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "0").repeat(Math.max(0, n - e.length)) + e;
}
function id(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
  const t = [];
  let a = 0;
  for (; a < e.length; )
    t.push(e.substr(a, n)), a += n;
  return t;
}
function od(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
  return Array.from({
    length: Math.ceil(e.length / n)
  }, (t, a) => e.slice(a * n, a * n + n));
}
function Dl(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1e3;
  if (e < n)
    return `${e} B`;
  const t = n === 1024 ? ["Ki", "Mi", "Gi"] : ["k", "M", "G"];
  let a = -1;
  for (; Math.abs(e) >= n && a < t.length - 1; )
    e /= n, ++a;
  return `${e.toFixed(1)} ${t[a]}B`;
}
function et() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, t = arguments.length > 2 ? arguments[2] : void 0;
  const a = {};
  for (const l in e)
    a[l] = e[l];
  for (const l in n) {
    const i = e[l], o = n[l];
    if (Xi(i) && Xi(o)) {
      a[l] = et(i, o, t);
      continue;
    }
    if (t && Array.isArray(i) && Array.isArray(o)) {
      a[l] = t(i, o);
      continue;
    }
    a[l] = o;
  }
  return a;
}
function Er(e) {
  return e.map((n) => n.type === ie ? Er(n.children) : n).flat();
}
function ln() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
  if (ln.cache.has(e)) return ln.cache.get(e);
  const n = e.replace(/[^a-z]/gi, "-").replace(/\B([A-Z])/g, "-$1").toLowerCase();
  return ln.cache.set(e, n), n;
}
ln.cache = /* @__PURE__ */ new Map();
function _n(e, n) {
  if (!n || typeof n != "object") return [];
  if (Array.isArray(n))
    return n.map((t) => _n(e, t)).flat(1);
  if (n.suspense)
    return _n(e, n.ssContent);
  if (Array.isArray(n.children))
    return n.children.map((t) => _n(e, t)).flat(1);
  if (n.component) {
    if (Object.getOwnPropertySymbols(n.component.provides).includes(e))
      return [n.component];
    if (n.component.subTree)
      return _n(e, n.component.subTree).flat(1);
  }
  return [];
}
var xa = /* @__PURE__ */ new WeakMap(), Cn = /* @__PURE__ */ new WeakMap();
class rd {
  constructor(n) {
    qi(this, xa, []), qi(this, Cn, 0), this.size = n;
  }
  push(n) {
    Jt(xa, this)[Jt(Cn, this)] = n, ed(Cn, this, (Jt(Cn, this) + 1) % this.size);
  }
  values() {
    return Jt(xa, this).slice(Jt(Cn, this)).concat(Jt(xa, this).slice(0, Jt(Cn, this)));
  }
}
function ud(e) {
  return "touches" in e ? {
    clientX: e.touches[0].clientX,
    clientY: e.touches[0].clientY
  } : {
    clientX: e.clientX,
    clientY: e.clientY
  };
}
function ni(e) {
  const n = lt({}), t = b(e);
  return Fe(() => {
    for (const a in t.value)
      n[a] = t.value[a];
  }, {
    flush: "sync"
  }), Ut(n);
}
function Ma(e, n) {
  return e.includes(n);
}
function Fr(e) {
  return e[2].toLowerCase() + e.slice(3);
}
const Ye = () => [Function, Array];
function to(e, n) {
  return n = "on" + Hn(n), !!(e[n] || e[`${n}Once`] || e[`${n}Capture`] || e[`${n}OnceCapture`] || e[`${n}CaptureOnce`]);
}
function Ga(e) {
  for (var n = arguments.length, t = new Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++)
    t[a - 1] = arguments[a];
  if (Array.isArray(e))
    for (const l of e)
      l(...t);
  else typeof e == "function" && e(...t);
}
function Qn(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
  const t = ["button", "[href]", 'input:not([type="hidden"])', "select", "textarea", "[tabindex]"].map((a) => `${a}${n ? ':not([tabindex="-1"])' : ""}:not([disabled])`).join(", ");
  return [...e.querySelectorAll(t)];
}
function $r(e, n, t) {
  let a, l = e.indexOf(document.activeElement);
  const i = n === "next" ? 1 : -1;
  do
    l += i, a = e[l];
  while ((!a || a.offsetParent == null || !((t == null ? void 0 : t(a)) ?? !0)) && l < e.length && l >= 0);
  return a;
}
function on(e, n) {
  var a, l, i, o;
  const t = Qn(e);
  if (!n)
    (e === document.activeElement || !e.contains(document.activeElement)) && ((a = t[0]) == null || a.focus());
  else if (n === "first")
    (l = t[0]) == null || l.focus();
  else if (n === "last")
    (i = t.at(-1)) == null || i.focus();
  else if (typeof n == "number")
    (o = t[n]) == null || o.focus();
  else {
    const u = $r(t, n);
    u ? u.focus() : on(e, n === "next" ? "first" : "last");
  }
}
function Ca(e) {
  return e == null || typeof e == "string" && e.trim() === "";
}
function Lr() {
}
function Dn(e, n) {
  if (!(xe && typeof CSS < "u" && typeof CSS.supports < "u" && CSS.supports(`selector(${n})`))) return null;
  try {
    return !!e && e.matches(n);
  } catch {
    return null;
  }
}
function Ka(e) {
  return e.some((n) => Oc(n) ? n.type === Nc ? !1 : n.type !== ie || Ka(n.children) : !0) ? e : null;
}
function sd(e, n) {
  if (!xe || e === 0)
    return n(), () => {
    };
  const t = window.setTimeout(n, e);
  return () => window.clearTimeout(t);
}
function cd(e, n) {
  const t = e.clientX, a = e.clientY, l = n.getBoundingClientRect(), i = l.left, o = l.top, u = l.right, s = l.bottom;
  return t >= i && t <= u && a >= o && a <= s;
}
function pa() {
  const e = G(), n = (t) => {
    e.value = t;
  };
  return Object.defineProperty(n, "value", {
    enumerable: !0,
    get: () => e.value,
    set: (t) => e.value = t
  }), Object.defineProperty(n, "el", {
    enumerable: !0,
    get: () => ei(e.value)
  }), n;
}
function Bn(e) {
  const n = e.key.length === 1, t = !e.ctrlKey && !e.metaKey && !e.altKey;
  return n && t;
}
function Or(e) {
  return typeof e == "string" || typeof e == "number" || typeof e == "boolean" || typeof e == "bigint";
}
const Nr = ["top", "bottom"], dd = ["start", "end", "left", "right"];
function Bl(e, n) {
  let [t, a] = e.split(" ");
  return a || (a = Ma(Nr, t) ? "start" : Ma(dd, t) ? "top" : "center"), {
    side: Ml(t, n),
    align: Ml(a, n)
  };
}
function Ml(e, n) {
  return e === "start" ? n ? "right" : "left" : e === "end" ? n ? "left" : "right" : e;
}
function yl(e) {
  return {
    side: {
      center: "center",
      top: "bottom",
      bottom: "top",
      left: "right",
      right: "left"
    }[e.side],
    align: e.align
  };
}
function bl(e) {
  return {
    side: e.side,
    align: {
      center: "center",
      top: "bottom",
      bottom: "top",
      left: "right",
      right: "left"
    }[e.align]
  };
}
function no(e) {
  return {
    side: e.align,
    align: e.side
  };
}
function ao(e) {
  return Ma(Nr, e.side) ? "y" : "x";
}
class rn {
  constructor(n) {
    let {
      x: t,
      y: a,
      width: l,
      height: i
    } = n;
    this.x = t, this.y = a, this.width = l, this.height = i;
  }
  get top() {
    return this.y;
  }
  get bottom() {
    return this.y + this.height;
  }
  get left() {
    return this.x;
  }
  get right() {
    return this.x + this.width;
  }
}
function lo(e, n) {
  return {
    x: {
      before: Math.max(0, n.left - e.left),
      after: Math.max(0, e.right - n.right)
    },
    y: {
      before: Math.max(0, n.top - e.top),
      after: Math.max(0, e.bottom - n.bottom)
    }
  };
}
function Rr(e) {
  return Array.isArray(e) ? new rn({
    x: e[0],
    y: e[1],
    width: 0,
    height: 0
  }) : e.getBoundingClientRect();
}
function ai(e) {
  const n = e.getBoundingClientRect(), t = getComputedStyle(e), a = t.transform;
  if (a) {
    let l, i, o, u, s;
    if (a.startsWith("matrix3d("))
      l = a.slice(9, -1).split(/, /), i = Number(l[0]), o = Number(l[5]), u = Number(l[12]), s = Number(l[13]);
    else if (a.startsWith("matrix("))
      l = a.slice(7, -1).split(/, /), i = Number(l[0]), o = Number(l[3]), u = Number(l[4]), s = Number(l[5]);
    else
      return new rn(n);
    const c = t.transformOrigin, v = n.x - u - (1 - i) * parseFloat(c), f = n.y - s - (1 - o) * parseFloat(c.slice(c.indexOf(" ") + 1)), d = i ? n.width / i : e.offsetWidth + 1, g = o ? n.height / o : e.offsetHeight + 1;
    return new rn({
      x: v,
      y: f,
      width: d,
      height: g
    });
  } else
    return new rn(n);
}
function nn(e, n, t) {
  if (typeof e.animate > "u") return {
    finished: Promise.resolve()
  };
  let a;
  try {
    a = e.animate(n, t);
  } catch {
    return {
      finished: Promise.resolve()
    };
  }
  return typeof a.finished > "u" && (a.finished = new Promise((l) => {
    a.onfinish = () => {
      l(a);
    };
  })), a;
}
const Aa = /* @__PURE__ */ new WeakMap();
function vd(e, n) {
  Object.keys(n).forEach((t) => {
    if (ti(t)) {
      const a = Fr(t), l = Aa.get(e);
      if (n[t] == null)
        l == null || l.forEach((i) => {
          const [o, u] = i;
          o === a && (e.removeEventListener(a, u), l.delete(i));
        });
      else if (!l || ![...l].some((i) => i[0] === a && i[1] === n[t])) {
        e.addEventListener(a, n[t]);
        const i = l || /* @__PURE__ */ new Set();
        i.add([a, n[t]]), Aa.has(e) || Aa.set(e, i);
      }
    } else
      n[t] == null ? e.removeAttribute(t) : e.setAttribute(t, n[t]);
  });
}
function fd(e, n) {
  Object.keys(n).forEach((t) => {
    if (ti(t)) {
      const a = Fr(t), l = Aa.get(e);
      l == null || l.forEach((i) => {
        const [o, u] = i;
        o === a && (e.removeEventListener(a, u), l.delete(i));
      });
    } else
      e.removeAttribute(t);
  });
}
const Vn = 2.4, io = 0.2126729, oo = 0.7151522, ro = 0.072175, md = 0.55, gd = 0.58, hd = 0.57, yd = 0.62, Va = 0.03, uo = 1.45, bd = 5e-4, kd = 1.25, Sd = 1.25, so = 0.078, co = 12.82051282051282, Pa = 0.06, vo = 1e-3;
function fo(e, n) {
  const t = (e.r / 255) ** Vn, a = (e.g / 255) ** Vn, l = (e.b / 255) ** Vn, i = (n.r / 255) ** Vn, o = (n.g / 255) ** Vn, u = (n.b / 255) ** Vn;
  let s = t * io + a * oo + l * ro, c = i * io + o * oo + u * ro;
  if (s <= Va && (s += (Va - s) ** uo), c <= Va && (c += (Va - c) ** uo), Math.abs(c - s) < bd) return 0;
  let v;
  if (c > s) {
    const f = (c ** md - s ** gd) * kd;
    v = f < vo ? 0 : f < so ? f - f * co * Pa : f - Pa;
  } else {
    const f = (c ** yd - s ** hd) * Sd;
    v = f > -vo ? 0 : f > -so ? f - f * co * Pa : f + Pa;
  }
  return v * 100;
}
function wt(e) {
  Ua(`Vuetify: ${e}`);
}
function Mn(e) {
  Ua(`Vuetify error: ${e}`);
}
function wd(e, n) {
  n = Array.isArray(n) ? n.slice(0, -1).map((t) => `'${t}'`).join(", ") + ` or '${n.at(-1)}'` : `'${n}'`, Ua(`[Vuetify UPGRADE] '${e}' is deprecated, use ${n} instead.`);
}
const Ea = 0.20689655172413793, xd = (e) => e > Ea ** 3 ? Math.cbrt(e) : e / (3 * Ea ** 2) + 4 / 29, Cd = (e) => e > Ea ? e ** 3 : 3 * Ea ** 2 * (e - 4 / 29);
function Hr(e) {
  const n = xd, t = n(e[1]);
  return [116 * t - 16, 500 * (n(e[0] / 0.95047) - t), 200 * (t - n(e[2] / 1.08883))];
}
function zr(e) {
  const n = Cd, t = (e[0] + 16) / 116;
  return [n(t + e[1] / 500) * 0.95047, n(t), n(t - e[2] / 200) * 1.08883];
}
const Vd = [[3.2406, -1.5372, -0.4986], [-0.9689, 1.8758, 0.0415], [0.0557, -0.204, 1.057]], Pd = (e) => e <= 31308e-7 ? e * 12.92 : 1.055 * e ** (1 / 2.4) - 0.055, Id = [[0.4124, 0.3576, 0.1805], [0.2126, 0.7152, 0.0722], [0.0193, 0.1192, 0.9505]], _d = (e) => e <= 0.04045 ? e / 12.92 : ((e + 0.055) / 1.055) ** 2.4;
function Wr(e) {
  const n = Array(3), t = Pd, a = Vd;
  for (let l = 0; l < 3; ++l)
    n[l] = Math.round(Me(t(a[l][0] * e[0] + a[l][1] * e[1] + a[l][2] * e[2])) * 255);
  return {
    r: n[0],
    g: n[1],
    b: n[2]
  };
}
function li(e) {
  let {
    r: n,
    g: t,
    b: a
  } = e;
  const l = [0, 0, 0], i = _d, o = Id;
  n = i(n / 255), t = i(t / 255), a = i(a / 255);
  for (let u = 0; u < 3; ++u)
    l[u] = o[u][0] * n + o[u][1] * t + o[u][2] * a;
  return l;
}
function pl(e) {
  return !!e && /^(#|var\(--|(rgb|hsl)a?\()/.test(e);
}
function Td(e) {
  return pl(e) && !/^((rgb|hsl)a?\()?var\(--/.test(e);
}
const mo = /^(?<fn>(?:rgb|hsl)a?)\((?<values>.+)\)/, Ad = {
  rgb: (e, n, t, a) => ({
    r: e,
    g: n,
    b: t,
    a
  }),
  rgba: (e, n, t, a) => ({
    r: e,
    g: n,
    b: t,
    a
  }),
  hsl: (e, n, t, a) => go({
    h: e,
    s: n,
    l: t,
    a
  }),
  hsla: (e, n, t, a) => go({
    h: e,
    s: n,
    l: t,
    a
  }),
  hsv: (e, n, t, a) => Ft({
    h: e,
    s: n,
    v: t,
    a
  }),
  hsva: (e, n, t, a) => Ft({
    h: e,
    s: n,
    v: t,
    a
  })
};
function ft(e) {
  if (typeof e == "number")
    return (isNaN(e) || e < 0 || e > 16777215) && wt(`'${e}' is not a valid hex color`), {
      r: (e & 16711680) >> 16,
      g: (e & 65280) >> 8,
      b: e & 255
    };
  if (typeof e == "string" && mo.test(e)) {
    const {
      groups: n
    } = e.match(mo), {
      fn: t,
      values: a
    } = n, l = a.split(/,\s*/).map((i) => i.endsWith("%") && ["hsl", "hsla", "hsv", "hsva"].includes(t) ? parseFloat(i) / 100 : parseFloat(i));
    return Ad[t](...l);
  } else if (typeof e == "string") {
    let n = e.startsWith("#") ? e.slice(1) : e;
    [3, 4].includes(n.length) ? n = n.split("").map((a) => a + a).join("") : [6, 8].includes(n.length) || wt(`'${e}' is not a valid hex(a) color`);
    const t = parseInt(n, 16);
    return (isNaN(t) || t < 0 || t > 4294967295) && wt(`'${e}' is not a valid hex(a) color`), Kr(n);
  } else if (typeof e == "object") {
    if (tn(e, ["r", "g", "b"]))
      return e;
    if (tn(e, ["h", "s", "l"]))
      return Ft(ii(e));
    if (tn(e, ["h", "s", "v"]))
      return Ft(e);
  }
  throw new TypeError(`Invalid color: ${e == null ? e : String(e) || e.constructor.name}
Expected #hex, #hexa, rgb(), rgba(), hsl(), hsla(), object or number`);
}
function Ft(e) {
  const {
    h: n,
    s: t,
    v: a,
    a: l
  } = e, i = (u) => {
    const s = (u + n / 60) % 6;
    return a - a * t * Math.max(Math.min(s, 4 - s, 1), 0);
  }, o = [i(5), i(3), i(1)].map((u) => Math.round(u * 255));
  return {
    r: o[0],
    g: o[1],
    b: o[2],
    a: l
  };
}
function go(e) {
  return Ft(ii(e));
}
function ca(e) {
  if (!e) return {
    h: 0,
    s: 1,
    v: 1,
    a: 1
  };
  const n = e.r / 255, t = e.g / 255, a = e.b / 255, l = Math.max(n, t, a), i = Math.min(n, t, a);
  let o = 0;
  l !== i && (l === n ? o = 60 * (0 + (t - a) / (l - i)) : l === t ? o = 60 * (2 + (a - n) / (l - i)) : l === a && (o = 60 * (4 + (n - t) / (l - i)))), o < 0 && (o = o + 360);
  const u = l === 0 ? 0 : (l - i) / l, s = [o, u, l];
  return {
    h: s[0],
    s: s[1],
    v: s[2],
    a: e.a
  };
}
function jr(e) {
  const {
    h: n,
    s: t,
    v: a,
    a: l
  } = e, i = a - a * t / 2, o = i === 1 || i === 0 ? 0 : (a - i) / Math.min(i, 1 - i);
  return {
    h: n,
    s: o,
    l: i,
    a: l
  };
}
function ii(e) {
  const {
    h: n,
    s: t,
    l: a,
    a: l
  } = e, i = a + t * Math.min(a, 1 - a), o = i === 0 ? 0 : 2 - 2 * a / i;
  return {
    h: n,
    s: o,
    v: i,
    a: l
  };
}
function Ur(e) {
  let {
    r: n,
    g: t,
    b: a,
    a: l
  } = e;
  return l === void 0 ? `rgb(${n}, ${t}, ${a})` : `rgba(${n}, ${t}, ${a}, ${l})`;
}
function Yr(e) {
  return Ur(Ft(e));
}
function Ia(e) {
  const n = Math.round(e).toString(16);
  return ("00".substr(0, 2 - n.length) + n).toUpperCase();
}
function Gr(e) {
  let {
    r: n,
    g: t,
    b: a,
    a: l
  } = e;
  return `#${[Ia(n), Ia(t), Ia(a), l !== void 0 ? Ia(Math.round(l * 255)) : ""].join("")}`;
}
function Kr(e) {
  e = Bd(e);
  let [n, t, a, l] = id(e, 2).map((i) => parseInt(i, 16));
  return l = l === void 0 ? l : l / 255, {
    r: n,
    g: t,
    b: a,
    a: l
  };
}
function Dd(e) {
  const n = Kr(e);
  return ca(n);
}
function qr(e) {
  return Gr(Ft(e));
}
function Bd(e) {
  return e.startsWith("#") && (e = e.slice(1)), e = e.replace(/([^0-9a-f])/gi, "F"), (e.length === 3 || e.length === 4) && (e = e.split("").map((n) => n + n).join("")), e.length !== 6 && (e = Ji(Ji(e, 6), 8, "F")), e;
}
function Md(e, n) {
  const t = Hr(li(e));
  return t[0] = t[0] + n * 10, Wr(zr(t));
}
function pd(e, n) {
  const t = Hr(li(e));
  return t[0] = t[0] - n * 10, Wr(zr(t));
}
function El(e) {
  const n = ft(e);
  return li(n)[1];
}
function Ed(e, n) {
  const t = El(e), a = El(n), l = Math.max(t, a), i = Math.min(t, a);
  return (l + 0.05) / (i + 0.05);
}
function Xr(e) {
  const n = Math.abs(fo(ft(0), ft(e)));
  return Math.abs(fo(ft(16777215), ft(e))) > Math.min(n, 50) ? "#fff" : "#000";
}
function p(e, n) {
  return (t) => Object.keys(e).reduce((a, l) => {
    const o = typeof e[l] == "object" && e[l] != null && !Array.isArray(e[l]) ? e[l] : {
      type: e[l]
    };
    return t && l in t ? a[l] = {
      ...o,
      default: t[l]
    } : a[l] = o, n && !a[l].source && (a[l].source = n), a;
  }, {});
}
const le = p({
  class: [String, Array, Object],
  style: {
    type: [String, Array, Object],
    default: null
  }
}, "component");
function Le(e, n) {
  const t = Rc();
  if (!t)
    throw new Error(`[Vuetify] ${e} must be called from inside a setup function`);
  return t;
}
function Dt() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "composables";
  const n = Le(e).type;
  return ln((n == null ? void 0 : n.aliasName) || (n == null ? void 0 : n.name));
}
let Zr = 0, Da = /* @__PURE__ */ new WeakMap();
function Ke() {
  const e = Le("getUid");
  if (Da.has(e)) return Da.get(e);
  {
    const n = Zr++;
    return Da.set(e, n), n;
  }
}
Ke.reset = () => {
  Zr = 0, Da = /* @__PURE__ */ new WeakMap();
};
function Fd(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Le("injectSelf");
  const {
    provides: t
  } = n;
  if (t && e in t)
    return t[e];
}
const pn = Symbol.for("vuetify:defaults");
function $d(e) {
  return U(e);
}
function oi() {
  const e = be(pn);
  if (!e) throw new Error("[Vuetify] Could not find defaults instance");
  return e;
}
function pe(e, n) {
  const t = oi(), a = U(e), l = b(() => {
    if (it(n == null ? void 0 : n.disabled)) return t.value;
    const o = it(n == null ? void 0 : n.scoped), u = it(n == null ? void 0 : n.reset), s = it(n == null ? void 0 : n.root);
    if (a.value == null && !(o || u || s)) return t.value;
    let c = et(a.value, {
      prev: t.value
    });
    if (o) return c;
    if (u || s) {
      const v = Number(u || 1 / 0);
      for (let f = 0; f <= v && !(!c || !("prev" in c)); f++)
        c = c.prev;
      return c && typeof s == "string" && s in c && (c = et(et(c, {
        prev: c
      }), c[s])), c;
    }
    return c.prev ? et(c.prev, c) : c;
  });
  return De(pn, l), l;
}
function Ld(e, n) {
  var t, a;
  return typeof ((t = e.props) == null ? void 0 : t[n]) < "u" || typeof ((a = e.props) == null ? void 0 : a[ln(n)]) < "u";
}
function Qr() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = arguments.length > 1 ? arguments[1] : void 0, t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : oi();
  const a = Le("useDefaults");
  if (n = n ?? a.type.name ?? a.type.__name, !n)
    throw new Error("[Vuetify] Could not determine component name");
  const l = b(() => {
    var s;
    return (s = t.value) == null ? void 0 : s[e._as ?? n];
  }), i = new Proxy(e, {
    get(s, c) {
      var f, d, g, y, h, m, k;
      const v = Reflect.get(s, c);
      return c === "class" || c === "style" ? [(f = l.value) == null ? void 0 : f[c], v].filter((S) => S != null) : typeof c == "string" && !Ld(a.vnode, c) ? ((d = l.value) == null ? void 0 : d[c]) !== void 0 ? (g = l.value) == null ? void 0 : g[c] : ((h = (y = t.value) == null ? void 0 : y.global) == null ? void 0 : h[c]) !== void 0 ? (k = (m = t.value) == null ? void 0 : m.global) == null ? void 0 : k[c] : v : v;
    }
  }), o = G();
  Fe(() => {
    if (l.value) {
      const s = Object.entries(l.value).filter((c) => {
        let [v] = c;
        return v.startsWith(v[0].toUpperCase());
      });
      o.value = s.length ? Object.fromEntries(s) : void 0;
    } else
      o.value = void 0;
  });
  function u() {
    const s = Fd(pn, a);
    De(pn, b(() => o.value ? et((s == null ? void 0 : s.value) ?? {}, o.value) : s == null ? void 0 : s.value));
  }
  return {
    props: i,
    provideSubDefaults: u
  };
}
function Wb() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = arguments.length > 1 ? arguments[1] : void 0;
  const {
    props: t,
    provideSubDefaults: a
  } = Qr(e, n);
  return a(), t;
}
function gt(e) {
  if (e._setup = e._setup ?? e.setup, !e.name)
    return wt("The component is missing an explicit name, unable to generate default prop value"), e;
  if (e._setup) {
    e.props = p(e.props ?? {}, e.name)();
    const n = Object.keys(e.props).filter((t) => t !== "class" && t !== "style");
    e.filterProps = function(a) {
      return Ot(a, n);
    }, e.props._as = String, e.setup = function(a, l) {
      const i = oi();
      if (!i.value) return e._setup(a, l);
      const {
        props: o,
        provideSubDefaults: u
      } = Qr(a, a._as ?? e.name, i), s = e._setup(o, l);
      return u(), s;
    };
  }
  return e;
}
function L() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !0;
  return (n) => (e ? gt : Hc)(n);
}
function Od(e, n) {
  return n.props = e, n;
}
function Bt(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "div", t = arguments.length > 2 ? arguments[2] : void 0;
  return L()({
    name: t ?? Hn(Ir(e.replace(/__/g, "-"))),
    props: {
      tag: {
        type: String,
        default: n
      },
      ...le()
    },
    setup(a, l) {
      let {
        slots: i
      } = l;
      return () => {
        var o;
        return Yt(a.tag, {
          class: [e, a.class],
          style: a.style
        }, (o = i.default) == null ? void 0 : o.call(i));
      };
    }
  });
}
function Jr(e) {
  if (typeof e.getRootNode != "function") {
    for (; e.parentNode; ) e = e.parentNode;
    return e !== document ? null : document;
  }
  const n = e.getRootNode();
  return n !== document && n.getRootNode({
    composed: !0
  }) !== document ? null : n;
}
const Jn = "cubic-bezier(0.4, 0, 0.2, 1)", Nd = "cubic-bezier(0.0, 0, 0.2, 1)", Rd = "cubic-bezier(0.4, 0, 1, 1)";
function ho(e, n, t) {
  return Object.keys(e).filter((a) => ti(a) && a.endsWith(n)).reduce((a, l) => (a[l.slice(0, -n.length)] = (i) => e[l](i, t(i)), a), {});
}
function ri(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
  for (; e; ) {
    if (n ? Hd(e) : ui(e)) return e;
    e = e.parentElement;
  }
  return document.scrollingElement;
}
function ea(e, n) {
  const t = [];
  if (n && e && !n.contains(e)) return t;
  for (; e && (ui(e) && t.push(e), e !== n); )
    e = e.parentElement;
  return t;
}
function ui(e) {
  if (!e || e.nodeType !== Node.ELEMENT_NODE) return !1;
  const n = window.getComputedStyle(e);
  return n.overflowY === "scroll" || n.overflowY === "auto" && e.scrollHeight > e.clientHeight;
}
function Hd(e) {
  if (!e || e.nodeType !== Node.ELEMENT_NODE) return !1;
  const n = window.getComputedStyle(e);
  return ["scroll", "auto"].includes(n.overflowY);
}
function zd(e) {
  for (; e; ) {
    if (window.getComputedStyle(e).position === "fixed")
      return !0;
    e = e.offsetParent;
  }
  return !1;
}
function z(e) {
  const n = Le("useRender");
  n.render = e;
}
function oe(e, n, t) {
  let a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : (f) => f, l = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : (f) => f;
  const i = Le("useProxiedModel"), o = U(e[n] !== void 0 ? e[n] : t), u = ln(n), c = u !== n ? b(() => {
    var f, d, g, y;
    return e[n], !!(((f = i.vnode.props) != null && f.hasOwnProperty(n) || (d = i.vnode.props) != null && d.hasOwnProperty(u)) && ((g = i.vnode.props) != null && g.hasOwnProperty(`onUpdate:${n}`) || (y = i.vnode.props) != null && y.hasOwnProperty(`onUpdate:${u}`)));
  }) : b(() => {
    var f, d;
    return e[n], !!((f = i.vnode.props) != null && f.hasOwnProperty(n) && ((d = i.vnode.props) != null && d.hasOwnProperty(`onUpdate:${n}`)));
  });
  ot(() => !c.value, () => {
    J(() => e[n], (f) => {
      o.value = f;
    });
  });
  const v = b({
    get() {
      const f = e[n];
      return a(c.value ? f : o.value);
    },
    set(f) {
      const d = l(f), g = Be(c.value ? e[n] : o.value);
      g === d || a(g) === f || (o.value = d, i == null || i.emit(`update:${n}`, d));
    }
  });
  return Object.defineProperty(v, "externalValue", {
    get: () => c.value ? e[n] : o.value
  }), v;
}
const Wd = {
  badge: "Badge",
  open: "Open",
  close: "Close",
  dismiss: "Dismiss",
  confirmEdit: {
    ok: "OK",
    cancel: "Cancel"
  },
  dataIterator: {
    noResultsText: "No matching records found",
    loadingText: "Loading items..."
  },
  dataTable: {
    itemsPerPageText: "Rows per page:",
    ariaLabel: {
      sortDescending: "Sorted descending.",
      sortAscending: "Sorted ascending.",
      sortNone: "Not sorted.",
      activateNone: "Activate to remove sorting.",
      activateDescending: "Activate to sort descending.",
      activateAscending: "Activate to sort ascending."
    },
    sortBy: "Sort by"
  },
  dataFooter: {
    itemsPerPageText: "Items per page:",
    itemsPerPageAll: "All",
    nextPage: "Next page",
    prevPage: "Previous page",
    firstPage: "First page",
    lastPage: "Last page",
    pageText: "{0}-{1} of {2}"
  },
  dateRangeInput: {
    divider: "to"
  },
  datePicker: {
    itemsSelected: "{0} selected",
    range: {
      title: "Select dates",
      header: "Enter dates"
    },
    title: "Select date",
    header: "Enter date",
    input: {
      placeholder: "Enter date"
    }
  },
  noDataText: "No data available",
  carousel: {
    prev: "Previous visual",
    next: "Next visual",
    ariaLabel: {
      delimiter: "Carousel slide {0} of {1}"
    }
  },
  calendar: {
    moreEvents: "{0} more",
    today: "Today"
  },
  input: {
    clear: "Clear {0}",
    prependAction: "{0} prepended action",
    appendAction: "{0} appended action",
    otp: "Please enter OTP character {0}"
  },
  fileInput: {
    counter: "{0} files",
    counterSize: "{0} files ({1} in total)"
  },
  fileUpload: {
    title: "Drag and drop files here",
    divider: "or",
    browse: "Browse Files"
  },
  timePicker: {
    am: "AM",
    pm: "PM",
    title: "Select Time"
  },
  pagination: {
    ariaLabel: {
      root: "Pagination Navigation",
      next: "Next page",
      previous: "Previous page",
      page: "Go to page {0}",
      currentPage: "Page {0}, Current page",
      first: "First page",
      last: "Last page"
    }
  },
  stepper: {
    next: "Next",
    prev: "Previous"
  },
  rating: {
    ariaLabel: {
      item: "Rating {0} of {1}"
    }
  },
  loading: "Loading...",
  infiniteScroll: {
    loadMore: "Load more",
    empty: "No more"
  }
}, yo = "$vuetify.", bo = (e, n) => e.replace(/\{(\d+)\}/g, (t, a) => String(n[Number(a)])), eu = (e, n, t) => function(a) {
  for (var l = arguments.length, i = new Array(l > 1 ? l - 1 : 0), o = 1; o < l; o++)
    i[o - 1] = arguments[o];
  if (!a.startsWith(yo))
    return bo(a, i);
  const u = a.replace(yo, ""), s = e.value && t.value[e.value], c = n.value && t.value[n.value];
  let v = cn(s, u, null);
  return v || (wt(`Translation key "${a}" not found in "${e.value}", trying fallback locale`), v = cn(c, u, null)), v || (Mn(`Translation key "${a}" not found in fallback`), v = a), typeof v != "string" && (Mn(`Translation key "${a}" has a non-string value`), v = a), bo(v, i);
};
function tu(e, n) {
  return (t, a) => new Intl.NumberFormat([e.value, n.value], a).format(t);
}
function kl(e, n, t) {
  const a = oe(e, n, e[n] ?? t.value);
  return a.value = e[n] ?? t.value, J(t, (l) => {
    e[n] == null && (a.value = t.value);
  }), a;
}
function nu(e) {
  return (n) => {
    const t = kl(n, "locale", e.current), a = kl(n, "fallback", e.fallback), l = kl(n, "messages", e.messages);
    return {
      name: "vuetify",
      current: t,
      fallback: a,
      messages: l,
      t: eu(t, a, l),
      n: tu(t, a),
      provide: nu({
        current: t,
        fallback: a,
        messages: l
      })
    };
  };
}
function jd(e) {
  const n = G((e == null ? void 0 : e.locale) ?? "en"), t = G((e == null ? void 0 : e.fallback) ?? "en"), a = U({
    en: Wd,
    ...e == null ? void 0 : e.messages
  });
  return {
    name: "vuetify",
    current: n,
    fallback: t,
    messages: a,
    t: eu(n, t, a),
    n: tu(n, t),
    provide: nu({
      current: n,
      fallback: t,
      messages: a
    })
  };
}
const En = Symbol.for("vuetify:locale");
function Ud(e) {
  return e.name != null;
}
function Yd(e) {
  const n = e != null && e.adapter && Ud(e == null ? void 0 : e.adapter) ? e == null ? void 0 : e.adapter : jd(e), t = qd(n, e);
  return {
    ...n,
    ...t
  };
}
function Te() {
  const e = be(En);
  if (!e) throw new Error("[Vuetify] Could not find injected locale instance");
  return e;
}
function Gd(e) {
  const n = be(En);
  if (!n) throw new Error("[Vuetify] Could not find injected locale instance");
  const t = n.provide(e), a = Xd(t, n.rtl, e), l = {
    ...t,
    ...a
  };
  return De(En, l), l;
}
function Kd() {
  return {
    af: !1,
    ar: !0,
    bg: !1,
    ca: !1,
    ckb: !1,
    cs: !1,
    de: !1,
    el: !1,
    en: !1,
    es: !1,
    et: !1,
    fa: !0,
    fi: !1,
    fr: !1,
    hr: !1,
    hu: !1,
    he: !0,
    id: !1,
    it: !1,
    ja: !1,
    km: !1,
    ko: !1,
    lv: !1,
    lt: !1,
    nl: !1,
    no: !1,
    pl: !1,
    pt: !1,
    ro: !1,
    ru: !1,
    sk: !1,
    sl: !1,
    srCyrl: !1,
    srLatn: !1,
    sv: !1,
    th: !1,
    tr: !1,
    az: !1,
    uk: !1,
    vi: !1,
    zhHans: !1,
    zhHant: !1
  };
}
function qd(e, n) {
  const t = U((n == null ? void 0 : n.rtl) ?? Kd()), a = b(() => t.value[e.current.value] ?? !1);
  return {
    isRtl: a,
    rtl: t,
    rtlClasses: b(() => `v-locale--is-${a.value ? "rtl" : "ltr"}`)
  };
}
function Xd(e, n, t) {
  const a = b(() => t.rtl ?? n.value[e.current.value] ?? !1);
  return {
    isRtl: a,
    rtl: n,
    rtlClasses: b(() => `v-locale--is-${a.value ? "rtl" : "ltr"}`)
  };
}
function We() {
  const e = be(En);
  if (!e) throw new Error("[Vuetify] Could not find injected rtl instance");
  return {
    isRtl: e.isRtl,
    rtlClasses: e.rtlClasses
  };
}
const qa = {
  "001": 1,
  AD: 1,
  AE: 6,
  AF: 6,
  AG: 0,
  AI: 1,
  AL: 1,
  AM: 1,
  AN: 1,
  AR: 1,
  AS: 0,
  AT: 1,
  AU: 1,
  AX: 1,
  AZ: 1,
  BA: 1,
  BD: 0,
  BE: 1,
  BG: 1,
  BH: 6,
  BM: 1,
  BN: 1,
  BR: 0,
  BS: 0,
  BT: 0,
  BW: 0,
  BY: 1,
  BZ: 0,
  CA: 0,
  CH: 1,
  CL: 1,
  CM: 1,
  CN: 1,
  CO: 0,
  CR: 1,
  CY: 1,
  CZ: 1,
  DE: 1,
  DJ: 6,
  DK: 1,
  DM: 0,
  DO: 0,
  DZ: 6,
  EC: 1,
  EE: 1,
  EG: 6,
  ES: 1,
  ET: 0,
  FI: 1,
  FJ: 1,
  FO: 1,
  FR: 1,
  GB: 1,
  "GB-alt-variant": 0,
  GE: 1,
  GF: 1,
  GP: 1,
  GR: 1,
  GT: 0,
  GU: 0,
  HK: 0,
  HN: 0,
  HR: 1,
  HU: 1,
  ID: 0,
  IE: 1,
  IL: 0,
  IN: 0,
  IQ: 6,
  IR: 6,
  IS: 1,
  IT: 1,
  JM: 0,
  JO: 6,
  JP: 0,
  KE: 0,
  KG: 1,
  KH: 0,
  KR: 0,
  KW: 6,
  KZ: 1,
  LA: 0,
  LB: 1,
  LI: 1,
  LK: 1,
  LT: 1,
  LU: 1,
  LV: 1,
  LY: 6,
  MC: 1,
  MD: 1,
  ME: 1,
  MH: 0,
  MK: 1,
  MM: 0,
  MN: 1,
  MO: 0,
  MQ: 1,
  MT: 0,
  MV: 5,
  MX: 0,
  MY: 1,
  MZ: 0,
  NI: 0,
  NL: 1,
  NO: 1,
  NP: 0,
  NZ: 1,
  OM: 6,
  PA: 0,
  PE: 0,
  PH: 0,
  PK: 0,
  PL: 1,
  PR: 0,
  PT: 0,
  PY: 0,
  QA: 6,
  RE: 1,
  RO: 1,
  RS: 1,
  RU: 1,
  SA: 0,
  SD: 6,
  SE: 1,
  SG: 0,
  SI: 1,
  SK: 1,
  SM: 1,
  SV: 0,
  SY: 6,
  TH: 0,
  TJ: 1,
  TM: 1,
  TR: 1,
  TT: 0,
  TW: 0,
  UA: 1,
  UM: 0,
  US: 0,
  UY: 1,
  UZ: 1,
  VA: 1,
  VE: 0,
  VI: 0,
  VN: 1,
  WS: 0,
  XK: 1,
  YE: 0,
  ZA: 0,
  ZW: 0
};
function Zd(e, n, t) {
  const a = [];
  let l = [];
  const i = au(e), o = lu(e), u = t ?? qa[n.slice(-2).toUpperCase()] ?? 0, s = (i.getDay() - u + 7) % 7, c = (o.getDay() - u + 7) % 7;
  for (let v = 0; v < s; v++) {
    const f = new Date(i);
    f.setDate(f.getDate() - (s - v)), l.push(f);
  }
  for (let v = 1; v <= o.getDate(); v++) {
    const f = new Date(e.getFullYear(), e.getMonth(), v);
    l.push(f), l.length === 7 && (a.push(l), l = []);
  }
  for (let v = 1; v < 7 - c; v++) {
    const f = new Date(o);
    f.setDate(f.getDate() + v), l.push(f);
  }
  return l.length > 0 && a.push(l), a;
}
function Qd(e, n, t) {
  const a = t ?? qa[n.slice(-2).toUpperCase()] ?? 0, l = new Date(e);
  for (; l.getDay() !== a; )
    l.setDate(l.getDate() - 1);
  return l;
}
function Jd(e, n) {
  const t = new Date(e), a = ((qa[n.slice(-2).toUpperCase()] ?? 0) + 6) % 7;
  for (; t.getDay() !== a; )
    t.setDate(t.getDate() + 1);
  return t;
}
function au(e) {
  return new Date(e.getFullYear(), e.getMonth(), 1);
}
function lu(e) {
  return new Date(e.getFullYear(), e.getMonth() + 1, 0);
}
function ev(e) {
  const n = e.split("-").map(Number);
  return new Date(n[0], n[1] - 1, n[2]);
}
const tv = /^([12]\d{3}-([1-9]|0[1-9]|1[0-2])-([1-9]|0[1-9]|[12]\d|3[01]))$/;
function iu(e) {
  if (e == null) return /* @__PURE__ */ new Date();
  if (e instanceof Date) return e;
  if (typeof e == "string") {
    let n;
    if (tv.test(e))
      return ev(e);
    if (n = Date.parse(e), !isNaN(n)) return new Date(n);
  }
  return null;
}
const ko = new Date(2e3, 0, 2);
function nv(e, n) {
  const t = n ?? qa[e.slice(-2).toUpperCase()] ?? 0;
  return vt(7).map((a) => {
    const l = new Date(ko);
    return l.setDate(ko.getDate() + t + a), new Intl.DateTimeFormat(e, {
      weekday: "narrow"
    }).format(l);
  });
}
function av(e, n, t, a) {
  const l = iu(e) ?? /* @__PURE__ */ new Date(), i = a == null ? void 0 : a[n];
  if (typeof i == "function")
    return i(l, n, t);
  let o = {};
  switch (n) {
    case "fullDate":
      o = {
        year: "numeric",
        month: "long",
        day: "numeric"
      };
      break;
    case "fullDateWithWeekday":
      o = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
      };
      break;
    case "normalDate":
      const u = l.getDate(), s = new Intl.DateTimeFormat(t, {
        month: "long"
      }).format(l);
      return `${u} ${s}`;
    case "normalDateWithWeekday":
      o = {
        weekday: "short",
        day: "numeric",
        month: "short"
      };
      break;
    case "shortDate":
      o = {
        month: "short",
        day: "numeric"
      };
      break;
    case "year":
      o = {
        year: "numeric"
      };
      break;
    case "month":
      o = {
        month: "long"
      };
      break;
    case "monthShort":
      o = {
        month: "short"
      };
      break;
    case "monthAndYear":
      o = {
        month: "long",
        year: "numeric"
      };
      break;
    case "monthAndDate":
      o = {
        month: "long",
        day: "numeric"
      };
      break;
    case "weekday":
      o = {
        weekday: "long"
      };
      break;
    case "weekdayShort":
      o = {
        weekday: "short"
      };
      break;
    case "dayOfMonth":
      return new Intl.NumberFormat(t).format(l.getDate());
    case "hours12h":
      o = {
        hour: "numeric",
        hour12: !0
      };
      break;
    case "hours24h":
      o = {
        hour: "numeric",
        hour12: !1
      };
      break;
    case "minutes":
      o = {
        minute: "numeric"
      };
      break;
    case "seconds":
      o = {
        second: "numeric"
      };
      break;
    case "fullTime":
      o = {
        hour: "numeric",
        minute: "numeric"
      };
      break;
    case "fullTime12h":
      o = {
        hour: "numeric",
        minute: "numeric",
        hour12: !0
      };
      break;
    case "fullTime24h":
      o = {
        hour: "numeric",
        minute: "numeric",
        hour12: !1
      };
      break;
    case "fullDateTime":
      o = {
        year: "numeric",
        month: "short",
        day: "numeric",
        hour: "numeric",
        minute: "numeric"
      };
      break;
    case "fullDateTime12h":
      o = {
        year: "numeric",
        month: "short",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        hour12: !0
      };
      break;
    case "fullDateTime24h":
      o = {
        year: "numeric",
        month: "short",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        hour12: !1
      };
      break;
    case "keyboardDate":
      o = {
        year: "numeric",
        month: "2-digit",
        day: "2-digit"
      };
      break;
    case "keyboardDateTime":
      return o = {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "numeric",
        minute: "numeric"
      }, new Intl.DateTimeFormat(t, o).format(l).replace(/, /g, " ");
    case "keyboardDateTime12h":
      return o = {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "numeric",
        minute: "numeric",
        hour12: !0
      }, new Intl.DateTimeFormat(t, o).format(l).replace(/, /g, " ");
    case "keyboardDateTime24h":
      return o = {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "numeric",
        minute: "numeric",
        hour12: !1
      }, new Intl.DateTimeFormat(t, o).format(l).replace(/, /g, " ");
    default:
      o = i ?? {
        timeZone: "UTC",
        timeZoneName: "short"
      };
  }
  return new Intl.DateTimeFormat(t, o).format(l);
}
function lv(e, n) {
  const t = e.toJsDate(n), a = t.getFullYear(), l = eo(String(t.getMonth() + 1), 2, "0"), i = eo(String(t.getDate()), 2, "0");
  return `${a}-${l}-${i}`;
}
function iv(e) {
  const [n, t, a] = e.split("-").map(Number);
  return new Date(n, t - 1, a);
}
function ov(e, n) {
  const t = new Date(e);
  return t.setMinutes(t.getMinutes() + n), t;
}
function rv(e, n) {
  const t = new Date(e);
  return t.setHours(t.getHours() + n), t;
}
function uv(e, n) {
  const t = new Date(e);
  return t.setDate(t.getDate() + n), t;
}
function sv(e, n) {
  const t = new Date(e);
  return t.setDate(t.getDate() + n * 7), t;
}
function cv(e, n) {
  const t = new Date(e);
  return t.setDate(1), t.setMonth(t.getMonth() + n), t;
}
function dv(e) {
  return e.getFullYear();
}
function vv(e) {
  return e.getMonth();
}
function fv(e) {
  return e.getDate();
}
function mv(e) {
  return new Date(e.getFullYear(), e.getMonth() + 1, 1);
}
function gv(e) {
  return new Date(e.getFullYear(), e.getMonth() - 1, 1);
}
function hv(e) {
  return e.getHours();
}
function yv(e) {
  return e.getMinutes();
}
function bv(e) {
  return new Date(e.getFullYear(), 0, 1);
}
function kv(e) {
  return new Date(e.getFullYear(), 11, 31);
}
function Sv(e, n) {
  return Fa(e, n[0]) && Cv(e, n[1]);
}
function wv(e) {
  const n = new Date(e);
  return n instanceof Date && !isNaN(n.getTime());
}
function Fa(e, n) {
  return e.getTime() > n.getTime();
}
function xv(e, n) {
  return Fa(Fl(e), Fl(n));
}
function Cv(e, n) {
  return e.getTime() < n.getTime();
}
function So(e, n) {
  return e.getTime() === n.getTime();
}
function Vv(e, n) {
  return e.getDate() === n.getDate() && e.getMonth() === n.getMonth() && e.getFullYear() === n.getFullYear();
}
function Pv(e, n) {
  return e.getMonth() === n.getMonth() && e.getFullYear() === n.getFullYear();
}
function Iv(e, n) {
  return e.getFullYear() === n.getFullYear();
}
function _v(e, n, t) {
  const a = new Date(e), l = new Date(n);
  switch (t) {
    case "years":
      return a.getFullYear() - l.getFullYear();
    case "quarters":
      return Math.floor((a.getMonth() - l.getMonth() + (a.getFullYear() - l.getFullYear()) * 12) / 4);
    case "months":
      return a.getMonth() - l.getMonth() + (a.getFullYear() - l.getFullYear()) * 12;
    case "weeks":
      return Math.floor((a.getTime() - l.getTime()) / (1e3 * 60 * 60 * 24 * 7));
    case "days":
      return Math.floor((a.getTime() - l.getTime()) / (1e3 * 60 * 60 * 24));
    case "hours":
      return Math.floor((a.getTime() - l.getTime()) / (1e3 * 60 * 60));
    case "minutes":
      return Math.floor((a.getTime() - l.getTime()) / (1e3 * 60));
    case "seconds":
      return Math.floor((a.getTime() - l.getTime()) / 1e3);
    default:
      return a.getTime() - l.getTime();
  }
}
function Tv(e, n) {
  const t = new Date(e);
  return t.setHours(n), t;
}
function Av(e, n) {
  const t = new Date(e);
  return t.setMinutes(n), t;
}
function Dv(e, n) {
  const t = new Date(e);
  return t.setMonth(n), t;
}
function Bv(e, n) {
  const t = new Date(e);
  return t.setDate(n), t;
}
function Mv(e, n) {
  const t = new Date(e);
  return t.setFullYear(n), t;
}
function Fl(e) {
  return new Date(e.getFullYear(), e.getMonth(), e.getDate(), 0, 0, 0, 0);
}
function pv(e) {
  return new Date(e.getFullYear(), e.getMonth(), e.getDate(), 23, 59, 59, 999);
}
class Ev {
  constructor(n) {
    this.locale = n.locale, this.formats = n.formats;
  }
  date(n) {
    return iu(n);
  }
  toJsDate(n) {
    return n;
  }
  toISO(n) {
    return lv(this, n);
  }
  parseISO(n) {
    return iv(n);
  }
  addMinutes(n, t) {
    return ov(n, t);
  }
  addHours(n, t) {
    return rv(n, t);
  }
  addDays(n, t) {
    return uv(n, t);
  }
  addWeeks(n, t) {
    return sv(n, t);
  }
  addMonths(n, t) {
    return cv(n, t);
  }
  getWeekArray(n, t) {
    return Zd(n, this.locale, t ? Number(t) : void 0);
  }
  startOfWeek(n, t) {
    return Qd(n, this.locale, t ? Number(t) : void 0);
  }
  endOfWeek(n) {
    return Jd(n, this.locale);
  }
  startOfMonth(n) {
    return au(n);
  }
  endOfMonth(n) {
    return lu(n);
  }
  format(n, t) {
    return av(n, t, this.locale, this.formats);
  }
  isEqual(n, t) {
    return So(n, t);
  }
  isValid(n) {
    return wv(n);
  }
  isWithinRange(n, t) {
    return Sv(n, t);
  }
  isAfter(n, t) {
    return Fa(n, t);
  }
  isAfterDay(n, t) {
    return xv(n, t);
  }
  isBefore(n, t) {
    return !Fa(n, t) && !So(n, t);
  }
  isSameDay(n, t) {
    return Vv(n, t);
  }
  isSameMonth(n, t) {
    return Pv(n, t);
  }
  isSameYear(n, t) {
    return Iv(n, t);
  }
  setMinutes(n, t) {
    return Av(n, t);
  }
  setHours(n, t) {
    return Tv(n, t);
  }
  setMonth(n, t) {
    return Dv(n, t);
  }
  setDate(n, t) {
    return Bv(n, t);
  }
  setYear(n, t) {
    return Mv(n, t);
  }
  getDiff(n, t, a) {
    return _v(n, t, a);
  }
  getWeekdays(n) {
    return nv(this.locale, n ? Number(n) : void 0);
  }
  getYear(n) {
    return dv(n);
  }
  getMonth(n) {
    return vv(n);
  }
  getDate(n) {
    return fv(n);
  }
  getNextMonth(n) {
    return mv(n);
  }
  getPreviousMonth(n) {
    return gv(n);
  }
  getHours(n) {
    return hv(n);
  }
  getMinutes(n) {
    return yv(n);
  }
  startOfDay(n) {
    return Fl(n);
  }
  endOfDay(n) {
    return pv(n);
  }
  startOfYear(n) {
    return bv(n);
  }
  endOfYear(n) {
    return kv(n);
  }
}
const ou = Symbol.for("vuetify:date-options"), wo = Symbol.for("vuetify:date-adapter");
function Fv(e, n) {
  const t = et({
    adapter: Ev,
    locale: {
      af: "af-ZA",
      // ar: '', # not the same value for all variants
      bg: "bg-BG",
      ca: "ca-ES",
      ckb: "",
      cs: "cs-CZ",
      de: "de-DE",
      el: "el-GR",
      en: "en-US",
      // es: '', # not the same value for all variants
      et: "et-EE",
      fa: "fa-IR",
      fi: "fi-FI",
      // fr: '', #not the same value for all variants
      hr: "hr-HR",
      hu: "hu-HU",
      he: "he-IL",
      id: "id-ID",
      it: "it-IT",
      ja: "ja-JP",
      ko: "ko-KR",
      lv: "lv-LV",
      lt: "lt-LT",
      nl: "nl-NL",
      no: "no-NO",
      pl: "pl-PL",
      pt: "pt-PT",
      ro: "ro-RO",
      ru: "ru-RU",
      sk: "sk-SK",
      sl: "sl-SI",
      srCyrl: "sr-SP",
      srLatn: "sr-SP",
      sv: "sv-SE",
      th: "th-TH",
      tr: "tr-TR",
      az: "az-AZ",
      uk: "uk-UA",
      vi: "vi-VN",
      zhHans: "zh-CN",
      zhHant: "zh-TW"
    }
  }, e);
  return {
    options: t,
    instance: ru(t, n)
  };
}
function ru(e, n) {
  const t = lt(typeof e.adapter == "function" ? new e.adapter({
    locale: e.locale[n.current.value] ?? n.current.value,
    formats: e.formats
  }) : e.adapter);
  return J(n.current, (a) => {
    t.locale = e.locale[a] ?? a ?? t.locale;
  }), t;
}
function Mt() {
  const e = be(ou);
  if (!e) throw new Error("[Vuetify] Could not find injected date options");
  const n = Te();
  return ru(e, n);
}
function $v(e, n) {
  const t = e.toJsDate(n);
  let a = t.getFullYear(), l = new Date(a, 0, 1);
  if (t < l)
    a = a - 1, l = new Date(a, 0, 1);
  else {
    const u = new Date(a + 1, 0, 1);
    t >= u && (a = a + 1, l = u);
  }
  const i = Math.abs(t.getTime() - l.getTime()), o = Math.ceil(i / (1e3 * 60 * 60 * 24));
  return Math.floor(o / 7) + 1;
}
const Xa = ["sm", "md", "lg", "xl", "xxl"], $l = Symbol.for("vuetify:display"), xo = {
  mobileBreakpoint: "lg",
  thresholds: {
    xs: 0,
    sm: 600,
    md: 960,
    lg: 1280,
    xl: 1920,
    xxl: 2560
  }
}, Lv = function() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : xo;
  return et(xo, e);
};
function Co(e) {
  return xe && !e ? window.innerWidth : typeof e == "object" && e.clientWidth || 0;
}
function Vo(e) {
  return xe && !e ? window.innerHeight : typeof e == "object" && e.clientHeight || 0;
}
function Po(e) {
  const n = xe && !e ? window.navigator.userAgent : "ssr";
  function t(y) {
    return !!n.match(y);
  }
  const a = t(/android/i), l = t(/iphone|ipad|ipod/i), i = t(/cordova/i), o = t(/electron/i), u = t(/chrome/i), s = t(/edge/i), c = t(/firefox/i), v = t(/opera/i), f = t(/win/i), d = t(/mac/i), g = t(/linux/i);
  return {
    android: a,
    ios: l,
    cordova: i,
    electron: o,
    chrome: u,
    edge: s,
    firefox: c,
    opera: v,
    win: f,
    mac: d,
    linux: g,
    touch: Qc,
    ssr: n === "ssr"
  };
}
function Ov(e, n) {
  const {
    thresholds: t,
    mobileBreakpoint: a
  } = Lv(e), l = G(Vo(n)), i = G(Po(n)), o = lt({}), u = G(Co(n));
  function s() {
    l.value = Vo(), u.value = Co();
  }
  function c() {
    s(), i.value = Po();
  }
  return Fe(() => {
    const v = u.value < t.sm, f = u.value < t.md && !v, d = u.value < t.lg && !(f || v), g = u.value < t.xl && !(d || f || v), y = u.value < t.xxl && !(g || d || f || v), h = u.value >= t.xxl, m = v ? "xs" : f ? "sm" : d ? "md" : g ? "lg" : y ? "xl" : "xxl", k = typeof a == "number" ? a : t[a], S = u.value < k;
    o.xs = v, o.sm = f, o.md = d, o.lg = g, o.xl = y, o.xxl = h, o.smAndUp = !v, o.mdAndUp = !(v || f), o.lgAndUp = !(v || f || d), o.xlAndUp = !(v || f || d || g), o.smAndDown = !(d || g || y || h), o.mdAndDown = !(g || y || h), o.lgAndDown = !(y || h), o.xlAndDown = !h, o.name = m, o.height = l.value, o.width = u.value, o.mobile = S, o.mobileBreakpoint = a, o.platform = i.value, o.thresholds = t;
  }), xe && window.addEventListener("resize", s, {
    passive: !0
  }), {
    ...Ut(o),
    update: c,
    ssr: !!n
  };
}
const Gt = p({
  mobile: {
    type: Boolean,
    default: !1
  },
  mobileBreakpoint: [Number, String]
}, "display");
function ht() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {
    mobile: null
  }, n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Dt();
  const t = be($l);
  if (!t) throw new Error("Could not find Vuetify display injection");
  const a = b(() => e.mobile ? !0 : typeof e.mobileBreakpoint == "number" ? t.width.value < e.mobileBreakpoint : e.mobileBreakpoint ? t.width.value < t.thresholds.value[e.mobileBreakpoint] : e.mobile === null ? t.mobile.value : !1), l = b(() => n ? {
    [`${n}--mobile`]: a.value
  } : {});
  return {
    ...t,
    displayClasses: l,
    mobile: a
  };
}
const uu = Symbol.for("vuetify:goto");
function su() {
  return {
    container: void 0,
    duration: 300,
    layout: !1,
    offset: 0,
    easing: "easeInOutCubic",
    patterns: {
      linear: (e) => e,
      easeInQuad: (e) => e ** 2,
      easeOutQuad: (e) => e * (2 - e),
      easeInOutQuad: (e) => e < 0.5 ? 2 * e ** 2 : -1 + (4 - 2 * e) * e,
      easeInCubic: (e) => e ** 3,
      easeOutCubic: (e) => --e ** 3 + 1,
      easeInOutCubic: (e) => e < 0.5 ? 4 * e ** 3 : (e - 1) * (2 * e - 2) * (2 * e - 2) + 1,
      easeInQuart: (e) => e ** 4,
      easeOutQuart: (e) => 1 - --e ** 4,
      easeInOutQuart: (e) => e < 0.5 ? 8 * e ** 4 : 1 - 8 * --e ** 4,
      easeInQuint: (e) => e ** 5,
      easeOutQuint: (e) => 1 + --e ** 5,
      easeInOutQuint: (e) => e < 0.5 ? 16 * e ** 5 : 1 + 16 * --e ** 5
    }
  };
}
function Nv(e) {
  return si(e) ?? (document.scrollingElement || document.body);
}
function si(e) {
  return typeof e == "string" ? document.querySelector(e) : ei(e);
}
function Sl(e, n, t) {
  if (typeof e == "number") return n && t ? -e : e;
  let a = si(e), l = 0;
  for (; a; )
    l += n ? a.offsetLeft : a.offsetTop, a = a.offsetParent;
  return l;
}
function Rv(e, n) {
  return {
    rtl: n.isRtl,
    options: et(su(), e)
  };
}
async function Io(e, n, t, a) {
  const l = t ? "scrollLeft" : "scrollTop", i = et((a == null ? void 0 : a.options) ?? su(), n), o = a == null ? void 0 : a.rtl.value, u = (typeof e == "number" ? e : si(e)) ?? 0, s = i.container === "parent" && u instanceof HTMLElement ? u.parentElement : Nv(i.container), c = typeof i.easing == "function" ? i.easing : i.patterns[i.easing];
  if (!c) throw new TypeError(`Easing function "${i.easing}" not found.`);
  let v;
  if (typeof u == "number")
    v = Sl(u, t, o);
  else if (v = Sl(u, t, o) - Sl(s, t, o), i.layout) {
    const y = window.getComputedStyle(u).getPropertyValue("--v-layout-top");
    y && (v -= parseInt(y, 10));
  }
  v += i.offset, v = zv(s, v, !!o, !!t);
  const f = s[l] ?? 0;
  if (v === f) return Promise.resolve(v);
  const d = performance.now();
  return new Promise((g) => requestAnimationFrame(function y(h) {
    const k = (h - d) / i.duration, S = Math.floor(f + (v - f) * c(Me(k, 0, 1)));
    if (s[l] = S, k >= 1 && Math.abs(S - s[l]) < 10)
      return g(v);
    if (k > 2)
      return wt("Scroll target is not reachable"), g(s[l]);
    requestAnimationFrame(y);
  }));
}
function Hv() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  const n = be(uu), {
    isRtl: t
  } = We();
  if (!n) throw new Error("[Vuetify] Could not find injected goto instance");
  const a = {
    ...n,
    // can be set via VLocaleProvider
    rtl: b(() => n.rtl.value || t.value)
  };
  async function l(i, o) {
    return Io(i, et(e, o), !1, a);
  }
  return l.horizontal = async (i, o) => Io(i, et(e, o), !0, a), l;
}
function zv(e, n, t, a) {
  const {
    scrollWidth: l,
    scrollHeight: i
  } = e, [o, u] = e === document.scrollingElement ? [window.innerWidth, window.innerHeight] : [e.offsetWidth, e.offsetHeight];
  let s, c;
  return a ? t ? (s = -(l - o), c = 0) : (s = 0, c = l - o) : (s = 0, c = i + -u), Math.max(Math.min(n, c), s);
}
const Wv = {
  collapse: "mdi-chevron-up",
  complete: "mdi-check",
  cancel: "mdi-close-circle",
  close: "mdi-close",
  delete: "mdi-close-circle",
  // delete (e.g. v-chip close)
  clear: "mdi-close-circle",
  success: "mdi-check-circle",
  info: "mdi-information",
  warning: "mdi-alert-circle",
  error: "mdi-close-circle",
  prev: "mdi-chevron-left",
  next: "mdi-chevron-right",
  checkboxOn: "mdi-checkbox-marked",
  checkboxOff: "mdi-checkbox-blank-outline",
  checkboxIndeterminate: "mdi-minus-box",
  delimiter: "mdi-circle",
  // for carousel
  sortAsc: "mdi-arrow-up",
  sortDesc: "mdi-arrow-down",
  expand: "mdi-chevron-down",
  menu: "mdi-menu",
  subgroup: "mdi-menu-down",
  dropdown: "mdi-menu-down",
  radioOn: "mdi-radiobox-marked",
  radioOff: "mdi-radiobox-blank",
  edit: "mdi-pencil",
  ratingEmpty: "mdi-star-outline",
  ratingFull: "mdi-star",
  ratingHalf: "mdi-star-half-full",
  loading: "mdi-cached",
  first: "mdi-page-first",
  last: "mdi-page-last",
  unfold: "mdi-unfold-more-horizontal",
  file: "mdi-paperclip",
  plus: "mdi-plus",
  minus: "mdi-minus",
  calendar: "mdi-calendar",
  treeviewCollapse: "mdi-menu-down",
  treeviewExpand: "mdi-menu-right",
  eyeDropper: "mdi-eyedropper",
  upload: "mdi-cloud-upload"
}, Za = {
  // Not using mergeProps here, functional components merge props by default (?)
  component: (e) => Yt(du, {
    ...e,
    class: "mdi"
  })
}, ue = [String, Function, Object, Array], Ll = Symbol.for("vuetify:icons"), Qa = p({
  icon: {
    type: ue
  },
  // Could not remove this and use makeTagProps, types complained because it is not required
  tag: {
    type: String,
    required: !0
  }
}, "icon"), _o = L()({
  name: "VComponentIcon",
  props: Qa(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    return () => {
      const a = e.icon;
      return r(e.tag, null, {
        default: () => {
          var l;
          return [e.icon ? r(a, null, null) : (l = t.default) == null ? void 0 : l.call(t)];
        }
      });
    };
  }
}), cu = gt({
  name: "VSvgIcon",
  inheritAttrs: !1,
  props: Qa(),
  setup(e, n) {
    let {
      attrs: t
    } = n;
    return () => r(e.tag, O(t, {
      style: null
    }), {
      default: () => [r("svg", {
        class: "v-icon__svg",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        role: "img",
        "aria-hidden": "true"
      }, [Array.isArray(e.icon) ? e.icon.map((a) => Array.isArray(a) ? r("path", {
        d: a[0],
        "fill-opacity": a[1]
      }, null) : r("path", {
        d: a
      }, null)) : r("path", {
        d: e.icon
      }, null)])]
    });
  }
}), jb = gt({
  name: "VLigatureIcon",
  props: Qa(),
  setup(e) {
    return () => r(e.tag, null, {
      default: () => [e.icon]
    });
  }
}), du = gt({
  name: "VClassIcon",
  props: Qa(),
  setup(e) {
    return () => r(e.tag, {
      class: e.icon
    }, null);
  }
});
function jv() {
  return {
    svg: {
      component: cu
    },
    class: {
      component: du
    }
  };
}
function Uv(e) {
  const n = jv(), t = (e == null ? void 0 : e.defaultSet) ?? "mdi";
  return t === "mdi" && !n.mdi && (n.mdi = Za), et({
    defaultSet: t,
    sets: n,
    aliases: {
      ...Wv,
      /* eslint-disable max-len */
      vuetify: ["M8.2241 14.2009L12 21L22 3H14.4459L8.2241 14.2009Z", ["M7.26303 12.4733L7.00113 12L2 3H12.5261C12.5261 3 12.5261 3 12.5261 3L7.26303 12.4733Z", 0.6]],
      "vuetify-outline": "svg:M7.26 12.47 12.53 3H2L7.26 12.47ZM14.45 3 8.22 14.2 12 21 22 3H14.45ZM18.6 5 12 16.88 10.51 14.2 15.62 5ZM7.26 8.35 5.4 5H9.13L7.26 8.35Z",
      "vuetify-play": ["m6.376 13.184-4.11-7.192C1.505 4.66 2.467 3 4.003 3h8.532l-.953 1.576-.006.01-.396.677c-.429.732-.214 1.507.194 2.015.404.503 1.092.878 1.869.806a3.72 3.72 0 0 1 1.005.022c.276.053.434.143.523.237.138.146.38.635-.25 2.09-.893 1.63-1.553 1.722-1.847 1.677-.213-.033-.468-.158-.756-.406a4.95 4.95 0 0 1-.8-.927c-.39-.564-1.04-.84-1.66-.846-.625-.006-1.316.27-1.693.921l-.478.826-.911 1.506Z", ["M9.093 11.552c.046-.079.144-.15.32-.148a.53.53 0 0 1 .43.207c.285.414.636.847 1.046 1.2.405.35.914.662 1.516.754 1.334.205 2.502-.698 3.48-2.495l.014-.028.013-.03c.687-1.574.774-2.852-.005-3.675-.37-.391-.861-.586-1.333-.676a5.243 5.243 0 0 0-1.447-.044c-.173.016-.393-.073-.54-.257-.145-.18-.127-.316-.082-.392l.393-.672L14.287 3h5.71c1.536 0 2.499 1.659 1.737 2.992l-7.997 13.996c-.768 1.344-2.706 1.344-3.473 0l-3.037-5.314 1.377-2.278.004-.006.004-.007.481-.831Z", 0.6]]
      /* eslint-enable max-len */
    }
  }, e);
}
const Yv = (e) => {
  const n = be(Ll);
  if (!n) throw new Error("Missing Vuetify Icons provide!");
  return {
    iconData: b(() => {
      var s;
      const a = it(e);
      if (!a) return {
        component: _o
      };
      let l = a;
      if (typeof l == "string" && (l = l.trim(), l.startsWith("$") && (l = (s = n.aliases) == null ? void 0 : s[l.slice(1)])), l || wt(`Could not find aliased icon "${a}"`), Array.isArray(l))
        return {
          component: cu,
          icon: l
        };
      if (typeof l != "string")
        return {
          component: _o,
          icon: l
        };
      const i = Object.keys(n.sets).find((c) => typeof l == "string" && l.startsWith(`${c}:`)), o = i ? l.slice(i.length + 1) : l;
      return {
        component: n.sets[i ?? n.defaultSet].component,
        icon: o
      };
    })
  };
}, ta = Symbol.for("vuetify:theme"), ke = p({
  theme: String
}, "theme");
function To() {
  return {
    defaultTheme: "light",
    variations: {
      colors: [],
      lighten: 0,
      darken: 0
    },
    themes: {
      light: {
        dark: !1,
        colors: {
          background: "#FFFFFF",
          surface: "#FFFFFF",
          "surface-bright": "#FFFFFF",
          "surface-light": "#EEEEEE",
          "surface-variant": "#424242",
          "on-surface-variant": "#EEEEEE",
          primary: "#1867C0",
          "primary-darken-1": "#1F5592",
          secondary: "#48A9A6",
          "secondary-darken-1": "#018786",
          error: "#B00020",
          info: "#2196F3",
          success: "#4CAF50",
          warning: "#FB8C00"
        },
        variables: {
          "border-color": "#000000",
          "border-opacity": 0.12,
          "high-emphasis-opacity": 0.87,
          "medium-emphasis-opacity": 0.6,
          "disabled-opacity": 0.38,
          "idle-opacity": 0.04,
          "hover-opacity": 0.04,
          "focus-opacity": 0.12,
          "selected-opacity": 0.08,
          "activated-opacity": 0.12,
          "pressed-opacity": 0.12,
          "dragged-opacity": 0.08,
          "theme-kbd": "#212529",
          "theme-on-kbd": "#FFFFFF",
          "theme-code": "#F5F5F5",
          "theme-on-code": "#000000"
        }
      },
      dark: {
        dark: !0,
        colors: {
          background: "#121212",
          surface: "#212121",
          "surface-bright": "#ccbfd6",
          "surface-light": "#424242",
          "surface-variant": "#a3a3a3",
          "on-surface-variant": "#424242",
          primary: "#2196F3",
          "primary-darken-1": "#277CC1",
          secondary: "#54B6B2",
          "secondary-darken-1": "#48A9A6",
          error: "#CF6679",
          info: "#2196F3",
          success: "#4CAF50",
          warning: "#FB8C00"
        },
        variables: {
          "border-color": "#FFFFFF",
          "border-opacity": 0.12,
          "high-emphasis-opacity": 1,
          "medium-emphasis-opacity": 0.7,
          "disabled-opacity": 0.5,
          "idle-opacity": 0.1,
          "hover-opacity": 0.04,
          "focus-opacity": 0.12,
          "selected-opacity": 0.08,
          "activated-opacity": 0.12,
          "pressed-opacity": 0.16,
          "dragged-opacity": 0.08,
          "theme-kbd": "#212529",
          "theme-on-kbd": "#FFFFFF",
          "theme-code": "#343434",
          "theme-on-code": "#CCCCCC"
        }
      }
    }
  };
}
function Gv() {
  var a, l;
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : To();
  const n = To();
  if (!e) return {
    ...n,
    isDisabled: !0
  };
  const t = {};
  for (const [i, o] of Object.entries(e.themes ?? {})) {
    const u = o.dark || i === "dark" ? (a = n.themes) == null ? void 0 : a.dark : (l = n.themes) == null ? void 0 : l.light;
    t[i] = et(u, o);
  }
  return et(n, {
    ...e,
    themes: t
  });
}
function Kv(e) {
  const n = Gv(e), t = U(n.defaultTheme), a = U(n.themes), l = b(() => {
    const v = {};
    for (const [f, d] of Object.entries(a.value)) {
      const g = v[f] = {
        ...d,
        colors: {
          ...d.colors
        }
      };
      if (n.variations)
        for (const y of n.variations.colors) {
          const h = g.colors[y];
          if (h)
            for (const m of ["lighten", "darken"]) {
              const k = m === "lighten" ? Md : pd;
              for (const S of vt(n.variations[m], 1))
                g.colors[`${y}-${m}-${S}`] = Gr(k(ft(h), S));
            }
        }
      for (const y of Object.keys(g.colors)) {
        if (/^on-[a-z]/.test(y) || g.colors[`on-${y}`]) continue;
        const h = `on-${y}`, m = ft(g.colors[y]);
        g.colors[h] = Xr(m);
      }
    }
    return v;
  }), i = b(() => l.value[t.value]), o = b(() => {
    var y;
    const v = [];
    (y = i.value) != null && y.dark && en(v, ":root", ["color-scheme: dark"]), en(v, ":root", Ao(i.value));
    for (const [h, m] of Object.entries(l.value))
      en(v, `.v-theme--${h}`, [`color-scheme: ${m.dark ? "dark" : "normal"}`, ...Ao(m)]);
    const f = [], d = [], g = new Set(Object.values(l.value).flatMap((h) => Object.keys(h.colors)));
    for (const h of g)
      /^on-[a-z]/.test(h) ? en(d, `.${h}`, [`color: rgb(var(--v-theme-${h})) !important`]) : (en(f, `.bg-${h}`, [`--v-theme-overlay-multiplier: var(--v-theme-${h}-overlay-multiplier)`, `background-color: rgb(var(--v-theme-${h})) !important`, `color: rgb(var(--v-theme-on-${h})) !important`]), en(d, `.text-${h}`, [`color: rgb(var(--v-theme-${h})) !important`]), en(d, `.border-${h}`, [`--v-border-color: var(--v-theme-${h})`]));
    return v.push(...f, ...d), v.map((h, m) => m === 0 ? h : `    ${h}`).join("");
  });
  function u() {
    return {
      style: [{
        textContent: o.value,
        id: "vuetify-theme-stylesheet",
        nonce: n.cspNonce || !1
      }]
    };
  }
  function s(v) {
    if (n.isDisabled) return;
    const f = v._context.provides.usehead;
    if (f)
      if (f.push) {
        const d = f.push(u);
        xe && J(o, () => {
          d.patch(u);
        });
      } else
        xe ? (f.addHeadObjs(b(u)), Fe(() => f.updateDOM())) : f.addHeadObjs(u());
    else {
      let g = function() {
        if (typeof document < "u" && !d) {
          const y = document.createElement("style");
          y.type = "text/css", y.id = "vuetify-theme-stylesheet", n.cspNonce && y.setAttribute("nonce", n.cspNonce), d = y, document.head.appendChild(d);
        }
        d && (d.innerHTML = o.value);
      }, d = xe ? document.getElementById("vuetify-theme-stylesheet") : null;
      xe ? J(o, g, {
        immediate: !0
      }) : g();
    }
  }
  const c = b(() => n.isDisabled ? void 0 : `v-theme--${t.value}`);
  return {
    install: s,
    isDisabled: n.isDisabled,
    name: t,
    themes: a,
    current: i,
    computedThemes: l,
    themeClasses: c,
    styles: o,
    global: {
      name: t,
      current: i
    }
  };
}
function Ve(e) {
  Le("provideTheme");
  const n = be(ta, null);
  if (!n) throw new Error("Could not find Vuetify theme injection");
  const t = b(() => e.theme ?? n.name.value), a = b(() => n.themes.value[t.value]), l = b(() => n.isDisabled ? void 0 : `v-theme--${t.value}`), i = {
    ...n,
    name: t,
    current: a,
    themeClasses: l
  };
  return De(ta, i), i;
}
function ci() {
  Le("useTheme");
  const e = be(ta, null);
  if (!e) throw new Error("Could not find Vuetify theme injection");
  return e;
}
function en(e, n, t) {
  e.push(`${n} {
`, ...t.map((a) => `  ${a};
`), `}
`);
}
function Ao(e) {
  const n = e.dark ? 2 : 1, t = e.dark ? 1 : 2, a = [];
  for (const [l, i] of Object.entries(e.colors)) {
    const o = ft(i);
    a.push(`--v-theme-${l}: ${o.r},${o.g},${o.b}`), l.startsWith("on-") || a.push(`--v-theme-${l}-overlay-multiplier: ${El(i) > 0.18 ? n : t}`);
  }
  for (const [l, i] of Object.entries(e.variables)) {
    const o = typeof i == "string" && i.startsWith("#") ? ft(i) : void 0, u = o ? `${o.r}, ${o.g}, ${o.b}` : void 0;
    a.push(`--v-${l}: ${u ?? i}`);
  }
  return a;
}
function xt(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "content";
  const t = pa(), a = U();
  if (xe) {
    const l = new ResizeObserver((i) => {
      e == null || e(i, l), i.length && (n === "content" ? a.value = i[0].contentRect : a.value = i[0].target.getBoundingClientRect());
    });
    Ze(() => {
      l.disconnect();
    }), J(() => t.el, (i, o) => {
      o && (l.unobserve(o), a.value = void 0), i && l.observe(i);
    }, {
      flush: "post"
    });
  }
  return {
    resizeRef: t,
    contentRect: Zl(a)
  };
}
const na = Symbol.for("vuetify:layout"), vu = Symbol.for("vuetify:layout-item"), Do = 1e3, fu = p({
  overlaps: {
    type: Array,
    default: () => []
  },
  fullHeight: Boolean
}, "layout"), mn = p({
  name: {
    type: String
  },
  order: {
    type: [Number, String],
    default: 0
  },
  absolute: Boolean
}, "layout-item");
function mu() {
  const e = be(na);
  if (!e) throw new Error("[Vuetify] Could not find injected layout");
  return {
    getLayoutItem: e.getLayoutItem,
    mainRect: e.mainRect,
    mainStyles: e.mainStyles
  };
}
function gn(e) {
  const n = be(na);
  if (!n) throw new Error("[Vuetify] Could not find injected layout");
  const t = e.id ?? `layout-item-${Ke()}`, a = Le("useLayoutItem");
  De(vu, {
    id: t
  });
  const l = G(!1);
  _r(() => l.value = !0), zc(() => l.value = !1);
  const {
    layoutItemStyles: i,
    layoutItemScrimStyles: o
  } = n.register(a, {
    ...e,
    active: b(() => l.value ? !1 : e.active.value),
    id: t
  });
  return Ze(() => n.unregister(t)), {
    layoutItemStyles: i,
    layoutRect: n.layoutRect,
    layoutItemScrimStyles: o
  };
}
const qv = (e, n, t, a) => {
  let l = {
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  };
  const i = [{
    id: "",
    layer: {
      ...l
    }
  }];
  for (const o of e) {
    const u = n.get(o), s = t.get(o), c = a.get(o);
    if (!u || !s || !c) continue;
    const v = {
      ...l,
      [u.value]: parseInt(l[u.value], 10) + (c.value ? parseInt(s.value, 10) : 0)
    };
    i.push({
      id: o,
      layer: v
    }), l = v;
  }
  return i;
};
function gu(e) {
  const n = be(na, null), t = b(() => n ? n.rootZIndex.value - 100 : Do), a = U([]), l = lt(/* @__PURE__ */ new Map()), i = lt(/* @__PURE__ */ new Map()), o = lt(/* @__PURE__ */ new Map()), u = lt(/* @__PURE__ */ new Map()), s = lt(/* @__PURE__ */ new Map()), {
    resizeRef: c,
    contentRect: v
  } = xt(), f = b(() => {
    const _ = /* @__PURE__ */ new Map(), D = e.overlaps ?? [];
    for (const w of D.filter((P) => P.includes(":"))) {
      const [P, A] = w.split(":");
      if (!a.value.includes(P) || !a.value.includes(A)) continue;
      const V = l.get(P), x = l.get(A), M = i.get(P), E = i.get(A);
      !V || !x || !M || !E || (_.set(A, {
        position: V.value,
        amount: parseInt(M.value, 10)
      }), _.set(P, {
        position: x.value,
        amount: -parseInt(E.value, 10)
      }));
    }
    return _;
  }), d = b(() => {
    const _ = [...new Set([...o.values()].map((w) => w.value))].sort((w, P) => w - P), D = [];
    for (const w of _) {
      const P = a.value.filter((A) => {
        var V;
        return ((V = o.get(A)) == null ? void 0 : V.value) === w;
      });
      D.push(...P);
    }
    return qv(D, l, i, u);
  }), g = b(() => !Array.from(s.values()).some((_) => _.value)), y = b(() => d.value[d.value.length - 1].layer), h = b(() => ({
    "--v-layout-left": te(y.value.left),
    "--v-layout-right": te(y.value.right),
    "--v-layout-top": te(y.value.top),
    "--v-layout-bottom": te(y.value.bottom),
    ...g.value ? void 0 : {
      transition: "none"
    }
  })), m = b(() => d.value.slice(1).map((_, D) => {
    let {
      id: w
    } = _;
    const {
      layer: P
    } = d.value[D], A = i.get(w), V = l.get(w);
    return {
      id: w,
      ...P,
      size: Number(A.value),
      position: V.value
    };
  })), k = (_) => m.value.find((D) => D.id === _), S = Le("createLayout"), C = G(!1);
  Ue(() => {
    C.value = !0;
  }), De(na, {
    register: (_, D) => {
      let {
        id: w,
        order: P,
        position: A,
        layoutSize: V,
        elementSize: x,
        active: M,
        disableTransitions: E,
        absolute: N
      } = D;
      o.set(w, P), l.set(w, A), i.set(w, V), u.set(w, M), E && s.set(w, E);
      const ee = _n(vu, S == null ? void 0 : S.vnode).indexOf(_);
      ee > -1 ? a.value.splice(ee, 0, w) : a.value.push(w);
      const W = b(() => m.value.findIndex((H) => H.id === w)), R = b(() => t.value + d.value.length * 2 - W.value * 2), F = b(() => {
        const H = A.value === "left" || A.value === "right", Z = A.value === "right", Q = A.value === "bottom", re = x.value ?? V.value, X = re === 0 ? "%" : "px", K = {
          [A.value]: 0,
          zIndex: R.value,
          transform: `translate${H ? "X" : "Y"}(${(M.value ? 0 : -(re === 0 ? 100 : re)) * (Z || Q ? -1 : 1)}${X})`,
          position: N.value || t.value !== Do ? "absolute" : "fixed",
          ...g.value ? void 0 : {
            transition: "none"
          }
        };
        if (!C.value) return K;
        const ne = m.value[W.value];
        if (!ne) throw new Error(`[Vuetify] Could not find layout item "${w}"`);
        const ye = f.value.get(w);
        return ye && (ne[ye.position] += ye.amount), {
          ...K,
          height: H ? `calc(100% - ${ne.top}px - ${ne.bottom}px)` : x.value ? `${x.value}px` : void 0,
          left: Z ? void 0 : `${ne.left}px`,
          right: Z ? `${ne.right}px` : void 0,
          top: A.value !== "bottom" ? `${ne.top}px` : void 0,
          bottom: A.value !== "top" ? `${ne.bottom}px` : void 0,
          width: H ? x.value ? `${x.value}px` : void 0 : `calc(100% - ${ne.left}px - ${ne.right}px)`
        };
      }), B = b(() => ({
        zIndex: R.value - 1
      }));
      return {
        layoutItemStyles: F,
        layoutItemScrimStyles: B,
        zIndex: R
      };
    },
    unregister: (_) => {
      o.delete(_), l.delete(_), i.delete(_), u.delete(_), s.delete(_), a.value = a.value.filter((D) => D !== _);
    },
    mainRect: y,
    mainStyles: h,
    getLayoutItem: k,
    items: m,
    layoutRect: v,
    rootZIndex: t
  });
  const T = b(() => ["v-layout", {
    "v-layout--full-height": e.fullHeight
  }]), I = b(() => ({
    zIndex: n ? t.value : void 0,
    position: n ? "relative" : void 0,
    overflow: n ? "hidden" : void 0
  }));
  return {
    layoutClasses: T,
    layoutStyles: I,
    getLayoutItem: k,
    items: m,
    layoutRect: v,
    layoutRef: c
  };
}
function Xv() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  const {
    blueprint: n,
    ...t
  } = e, a = et(n, t), {
    aliases: l = {},
    components: i = {},
    directives: o = {}
  } = a, u = $d(a.defaults), s = Ov(a.display, a.ssr), c = Kv(a.theme), v = Uv(a.icons), f = Yd(a.locale), d = Fv(a.date, f), g = Rv(a.goTo, f);
  return {
    install: (h) => {
      for (const m in o)
        h.directive(m, o[m]);
      for (const m in i)
        h.component(m, i[m]);
      for (const m in l)
        h.component(m, gt({
          ...l[m],
          name: m,
          aliasName: l[m].name
        }));
      if (c.install(h), h.provide(pn, u), h.provide($l, s), h.provide(ta, c), h.provide(Ll, v), h.provide(En, f), h.provide(ou, d.options), h.provide(wo, d.instance), h.provide(uu, g), xe && a.ssr)
        if (h.$nuxt)
          h.$nuxt.hook("app:suspense:resolve", () => {
            s.update();
          });
        else {
          const {
            mount: m
          } = h;
          h.mount = function() {
            const k = m(...arguments);
            return we(() => s.update()), h.mount = m, k;
          };
        }
      Ke.reset(), h.mixin({
        computed: {
          $vuetify() {
            return lt({
              defaults: Pn.call(this, pn),
              display: Pn.call(this, $l),
              theme: Pn.call(this, ta),
              icons: Pn.call(this, Ll),
              locale: Pn.call(this, En),
              date: Pn.call(this, wo)
            });
          }
        }
      });
    },
    defaults: u,
    display: s,
    theme: c,
    icons: v,
    locale: f,
    date: d,
    goTo: g
  };
}
const Zv = "3.7.19";
Xv.version = Zv;
function Pn(e) {
  var a, l;
  const n = this.$, t = ((a = n.parent) == null ? void 0 : a.provides) ?? ((l = n.vnode.appContext) == null ? void 0 : l.provides);
  if (t && e in t)
    return t[e];
}
const Qv = p({
  ...le(),
  ...fu({
    fullHeight: !0
  }),
  ...ke()
}, "VApp"), Ub = L()({
  name: "VApp",
  props: Qv(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    const a = Ve(e), {
      layoutClasses: l,
      getLayoutItem: i,
      items: o,
      layoutRef: u
    } = gu(e), {
      rtlClasses: s
    } = We();
    return z(() => {
      var c;
      return r("div", {
        ref: u,
        class: ["v-application", a.themeClasses.value, l.value, s.value, e.class],
        style: [e.style]
      }, [r("div", {
        class: "v-application__wrap"
      }, [(c = t.default) == null ? void 0 : c.call(t)])]);
    }), {
      getLayoutItem: i,
      items: o,
      theme: a
    };
  }
}), ge = p({
  tag: {
    type: String,
    default: "div"
  }
}, "tag"), hu = p({
  text: String,
  ...le(),
  ...ge()
}, "VToolbarTitle"), yu = L()({
  name: "VToolbarTitle",
  props: hu(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    return z(() => {
      const a = !!(t.default || t.text || e.text);
      return r(e.tag, {
        class: ["v-toolbar-title", e.class],
        style: e.style
      }, {
        default: () => {
          var l;
          return [a && r("div", {
            class: "v-toolbar-title__placeholder"
          }, [t.text ? t.text() : e.text, (l = t.default) == null ? void 0 : l.call(t)])];
        }
      });
    }), {};
  }
}), Jv = p({
  disabled: Boolean,
  group: Boolean,
  hideOnLeave: Boolean,
  leaveAbsolute: Boolean,
  mode: String,
  origin: String
}, "transition");
function yt(e, n, t) {
  return L()({
    name: e,
    props: Jv({
      mode: t,
      origin: n
    }),
    setup(a, l) {
      let {
        slots: i
      } = l;
      const o = {
        onBeforeEnter(u) {
          a.origin && (u.style.transformOrigin = a.origin);
        },
        onLeave(u) {
          if (a.leaveAbsolute) {
            const {
              offsetTop: s,
              offsetLeft: c,
              offsetWidth: v,
              offsetHeight: f
            } = u;
            u._transitionInitialStyles = {
              position: u.style.position,
              top: u.style.top,
              left: u.style.left,
              width: u.style.width,
              height: u.style.height
            }, u.style.position = "absolute", u.style.top = `${s}px`, u.style.left = `${c}px`, u.style.width = `${v}px`, u.style.height = `${f}px`;
          }
          a.hideOnLeave && u.style.setProperty("display", "none", "important");
        },
        onAfterLeave(u) {
          if (a.leaveAbsolute && (u != null && u._transitionInitialStyles)) {
            const {
              position: s,
              top: c,
              left: v,
              width: f,
              height: d
            } = u._transitionInitialStyles;
            delete u._transitionInitialStyles, u.style.position = s || "", u.style.top = c || "", u.style.left = v || "", u.style.width = f || "", u.style.height = d || "";
          }
        }
      };
      return () => {
        const u = a.group ? Ql : Wt;
        return Yt(u, {
          name: a.disabled ? "" : e,
          css: !a.disabled,
          ...a.group ? void 0 : {
            mode: a.mode
          },
          ...a.disabled ? {} : o
        }, i.default);
      };
    }
  });
}
function bu(e, n) {
  let t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "in-out";
  return L()({
    name: e,
    props: {
      mode: {
        type: String,
        default: t
      },
      disabled: Boolean,
      group: Boolean
    },
    setup(a, l) {
      let {
        slots: i
      } = l;
      const o = a.group ? Ql : Wt;
      return () => Yt(o, {
        name: a.disabled ? "" : e,
        css: !a.disabled,
        // mode: props.mode, // TODO: vuejs/vue-next#3104
        ...a.disabled ? {} : n
      }, i.default);
    }
  });
}
function ku() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
  const t = (arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1) ? "width" : "height", a = Ir(`offset-${t}`);
  return {
    onBeforeEnter(o) {
      o._parent = o.parentNode, o._initialStyle = {
        transition: o.style.transition,
        overflow: o.style.overflow,
        [t]: o.style[t]
      };
    },
    onEnter(o) {
      const u = o._initialStyle;
      if (!u) return;
      o.style.setProperty("transition", "none", "important"), o.style.overflow = "hidden";
      const s = `${o[a]}px`;
      o.style[t] = "0", o.offsetHeight, o.style.transition = u.transition, e && o._parent && o._parent.classList.add(e), requestAnimationFrame(() => {
        o.style[t] = s;
      });
    },
    onAfterEnter: i,
    onEnterCancelled: i,
    onLeave(o) {
      o._initialStyle = {
        transition: "",
        overflow: o.style.overflow,
        [t]: o.style[t]
      }, o.style.overflow = "hidden", o.style[t] = `${o[a]}px`, o.offsetHeight, requestAnimationFrame(() => o.style[t] = "0");
    },
    onAfterLeave: l,
    onLeaveCancelled: l
  };
  function l(o) {
    e && o._parent && o._parent.classList.remove(e), i(o);
  }
  function i(o) {
    if (!o._initialStyle) return;
    const u = o._initialStyle[t];
    o.style.overflow = o._initialStyle.overflow, u != null && (o.style[t] = u), delete o._initialStyle;
  }
}
const ef = p({
  target: [Object, Array]
}, "v-dialog-transition"), di = L()({
  name: "VDialogTransition",
  props: ef(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    const a = {
      onBeforeEnter(l) {
        l.style.pointerEvents = "none", l.style.visibility = "hidden";
      },
      async onEnter(l, i) {
        var d;
        await new Promise((g) => requestAnimationFrame(g)), await new Promise((g) => requestAnimationFrame(g)), l.style.visibility = "";
        const {
          x: o,
          y: u,
          sx: s,
          sy: c,
          speed: v
        } = Mo(e.target, l), f = nn(l, [{
          transform: `translate(${o}px, ${u}px) scale(${s}, ${c})`,
          opacity: 0
        }, {}], {
          duration: 225 * v,
          easing: Nd
        });
        (d = Bo(l)) == null || d.forEach((g) => {
          nn(g, [{
            opacity: 0
          }, {
            opacity: 0,
            offset: 0.33
          }, {}], {
            duration: 450 * v,
            easing: Jn
          });
        }), f.finished.then(() => i());
      },
      onAfterEnter(l) {
        l.style.removeProperty("pointer-events");
      },
      onBeforeLeave(l) {
        l.style.pointerEvents = "none";
      },
      async onLeave(l, i) {
        var d;
        await new Promise((g) => requestAnimationFrame(g));
        const {
          x: o,
          y: u,
          sx: s,
          sy: c,
          speed: v
        } = Mo(e.target, l);
        nn(l, [{}, {
          transform: `translate(${o}px, ${u}px) scale(${s}, ${c})`,
          opacity: 0
        }], {
          duration: 125 * v,
          easing: Rd
        }).finished.then(() => i()), (d = Bo(l)) == null || d.forEach((g) => {
          nn(g, [{}, {
            opacity: 0,
            offset: 0.2
          }, {
            opacity: 0
          }], {
            duration: 250 * v,
            easing: Jn
          });
        });
      },
      onAfterLeave(l) {
        l.style.removeProperty("pointer-events");
      }
    };
    return () => e.target ? r(Wt, O({
      name: "dialog-transition"
    }, a, {
      css: !1
    }), t) : r(Wt, {
      name: "dialog-transition"
    }, t);
  }
});
function Bo(e) {
  var t;
  const n = (t = e.querySelector(":scope > .v-card, :scope > .v-sheet, :scope > .v-list")) == null ? void 0 : t.children;
  return n && [...n];
}
function Mo(e, n) {
  const t = Rr(e), a = ai(n), [l, i] = getComputedStyle(n).transformOrigin.split(" ").map((k) => parseFloat(k)), [o, u] = getComputedStyle(n).getPropertyValue("--v-overlay-anchor-origin").split(" ");
  let s = t.left + t.width / 2;
  o === "left" || u === "left" ? s -= t.width / 2 : (o === "right" || u === "right") && (s += t.width / 2);
  let c = t.top + t.height / 2;
  o === "top" || u === "top" ? c -= t.height / 2 : (o === "bottom" || u === "bottom") && (c += t.height / 2);
  const v = t.width / a.width, f = t.height / a.height, d = Math.max(1, v, f), g = v / d || 0, y = f / d || 0, h = a.width * a.height / (window.innerWidth * window.innerHeight), m = h > 0.12 ? Math.min(1.5, (h - 0.12) * 10 + 1) : 1;
  return {
    x: s - (l + a.left),
    y: c - (i + a.top),
    sx: g,
    sy: y,
    speed: m
  };
}
const Yb = yt("fab-transition", "center center", "out-in"), Gb = yt("dialog-bottom-transition"), Kb = yt("dialog-top-transition"), $a = yt("fade-transition"), Su = yt("scale-transition"), qb = yt("scroll-x-transition"), Xb = yt("scroll-x-reverse-transition"), Zb = yt("scroll-y-transition"), Qb = yt("scroll-y-reverse-transition"), Jb = yt("slide-x-transition"), ek = yt("slide-x-reverse-transition"), wu = yt("slide-y-transition"), tk = yt("slide-y-reverse-transition"), vi = bu("expand-transition", ku()), xu = bu("expand-x-transition", ku("", !0)), tf = p({
  defaults: Object,
  disabled: Boolean,
  reset: [Number, String],
  root: [Boolean, String],
  scoped: Boolean
}, "VDefaultsProvider"), de = L(!1)({
  name: "VDefaultsProvider",
  props: tf(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    const {
      defaults: a,
      disabled: l,
      reset: i,
      root: o,
      scoped: u
    } = Ut(e);
    return pe(a, {
      reset: i,
      root: o,
      scoped: u,
      disabled: l
    }), () => {
      var s;
      return (s = t.default) == null ? void 0 : s.call(t);
    };
  }
}), Re = p({
  height: [Number, String],
  maxHeight: [Number, String],
  maxWidth: [Number, String],
  minHeight: [Number, String],
  minWidth: [Number, String],
  width: [Number, String]
}, "dimension");
function He(e) {
  return {
    dimensionStyles: b(() => {
      const t = {}, a = te(e.height), l = te(e.maxHeight), i = te(e.maxWidth), o = te(e.minHeight), u = te(e.minWidth), s = te(e.width);
      return a != null && (t.height = a), l != null && (t.maxHeight = l), i != null && (t.maxWidth = i), o != null && (t.minHeight = o), u != null && (t.minWidth = u), s != null && (t.width = s), t;
    })
  };
}
function nf(e) {
  return {
    aspectStyles: b(() => {
      const n = Number(e.aspectRatio);
      return n ? {
        paddingBottom: String(1 / n * 100) + "%"
      } : void 0;
    })
  };
}
const Cu = p({
  aspectRatio: [String, Number],
  contentClass: null,
  inline: Boolean,
  ...le(),
  ...Re()
}, "VResponsive"), po = L()({
  name: "VResponsive",
  props: Cu(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    const {
      aspectStyles: a
    } = nf(e), {
      dimensionStyles: l
    } = He(e);
    return z(() => {
      var i;
      return r("div", {
        class: ["v-responsive", {
          "v-responsive--inline": e.inline
        }, e.class],
        style: [l.value, e.style]
      }, [r("div", {
        class: "v-responsive__sizer",
        style: a.value
      }, null), (i = t.additional) == null ? void 0 : i.call(t), t.default && r("div", {
        class: ["v-responsive__content", e.contentClass]
      }, [t.default()])]);
    }), {};
  }
});
function fi(e) {
  return ni(() => {
    const n = [], t = {};
    if (e.value.background)
      if (pl(e.value.background)) {
        if (t.backgroundColor = e.value.background, !e.value.text && Td(e.value.background)) {
          const a = ft(e.value.background);
          if (a.a == null || a.a === 1) {
            const l = Xr(a);
            t.color = l, t.caretColor = l;
          }
        }
      } else
        n.push(`bg-${e.value.background}`);
    return e.value.text && (pl(e.value.text) ? (t.color = e.value.text, t.caretColor = e.value.text) : n.push(`text-${e.value.text}`)), {
      colorClasses: n,
      colorStyles: t
    };
  });
}
function Ge(e, n) {
  const t = b(() => ({
    text: An(e) ? e.value : n ? e[n] : null
  })), {
    colorClasses: a,
    colorStyles: l
  } = fi(t);
  return {
    textColorClasses: a,
    textColorStyles: l
  };
}
function Pe(e, n) {
  const t = b(() => ({
    background: An(e) ? e.value : n ? e[n] : null
  })), {
    colorClasses: a,
    colorStyles: l
  } = fi(t);
  return {
    backgroundColorClasses: a,
    backgroundColorStyles: l
  };
}
const Ee = p({
  rounded: {
    type: [Boolean, Number, String],
    default: void 0
  },
  tile: Boolean
}, "rounded");
function Oe(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Dt();
  return {
    roundedClasses: b(() => {
      const a = An(e) ? e.value : e.rounded, l = An(e) ? e.value : e.tile, i = [];
      if (a === !0 || a === "")
        i.push(`${n}--rounded`);
      else if (typeof a == "string" || a === 0)
        for (const o of String(a).split(" "))
          i.push(`rounded-${o}`);
      else (l || a === !1) && i.push("rounded-0");
      return i;
    })
  };
}
const Vt = p({
  transition: {
    type: [Boolean, String, Object],
    default: "fade-transition",
    validator: (e) => e !== !0
  }
}, "transition"), tt = (e, n) => {
  let {
    slots: t
  } = n;
  const {
    transition: a,
    disabled: l,
    group: i,
    ...o
  } = e, {
    component: u = i ? Ql : Wt,
    ...s
  } = typeof a == "object" ? a : {};
  return Yt(u, O(typeof a == "string" ? {
    name: l ? "" : a
  } : s, typeof a == "string" ? {} : Object.fromEntries(Object.entries({
    disabled: l,
    group: i
  }).filter((c) => {
    let [v, f] = c;
    return f !== void 0;
  })), o), t);
};
function af(e, n) {
  if (!Jl) return;
  const t = n.modifiers || {}, a = n.value, {
    handler: l,
    options: i
  } = typeof a == "object" ? a : {
    handler: a,
    options: {}
  }, o = new IntersectionObserver(function() {
    var f;
    let u = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], s = arguments.length > 1 ? arguments[1] : void 0;
    const c = (f = e._observe) == null ? void 0 : f[n.instance.$.uid];
    if (!c) return;
    const v = u.some((d) => d.isIntersecting);
    l && (!t.quiet || c.init) && (!t.once || v || c.init) && l(v, u, s), v && t.once ? Vu(e, n) : c.init = !0;
  }, i);
  e._observe = Object(e._observe), e._observe[n.instance.$.uid] = {
    init: !1,
    observer: o
  }, o.observe(e);
}
function Vu(e, n) {
  var a;
  const t = (a = e._observe) == null ? void 0 : a[n.instance.$.uid];
  t && (t.observer.unobserve(e), delete e._observe[n.instance.$.uid]);
}
const Ja = {
  mounted: af,
  unmounted: Vu
}, Pu = p({
  absolute: Boolean,
  alt: String,
  cover: Boolean,
  color: String,
  draggable: {
    type: [Boolean, String],
    default: void 0
  },
  eager: Boolean,
  gradient: String,
  lazySrc: String,
  options: {
    type: Object,
    // For more information on types, navigate to:
    // https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
    default: () => ({
      root: void 0,
      rootMargin: void 0,
      threshold: void 0
    })
  },
  sizes: String,
  src: {
    type: [String, Object],
    default: ""
  },
  crossorigin: String,
  referrerpolicy: String,
  srcset: String,
  position: String,
  ...Cu(),
  ...le(),
  ...Ee(),
  ...Vt()
}, "VImg"), jt = L()({
  name: "VImg",
  directives: {
    intersect: Ja
  },
  props: Pu(),
  emits: {
    loadstart: (e) => !0,
    load: (e) => !0,
    error: (e) => !0
  },
  setup(e, n) {
    let {
      emit: t,
      slots: a
    } = n;
    const {
      backgroundColorClasses: l,
      backgroundColorStyles: i
    } = Pe($(e, "color")), {
      roundedClasses: o
    } = Oe(e), u = Le("VImg"), s = G(""), c = U(), v = G(e.eager ? "loading" : "idle"), f = G(), d = G(), g = b(() => e.src && typeof e.src == "object" ? {
      src: e.src.src,
      srcset: e.srcset || e.src.srcset,
      lazySrc: e.lazySrc || e.src.lazySrc,
      aspect: Number(e.aspectRatio || e.src.aspect || 0)
    } : {
      src: e.src,
      srcset: e.srcset,
      lazySrc: e.lazySrc,
      aspect: Number(e.aspectRatio || 0)
    }), y = b(() => g.value.aspect || f.value / d.value || 0);
    J(() => e.src, () => {
      h(v.value !== "idle");
    }), J(y, (x, M) => {
      !x && M && c.value && T(c.value);
    }), sa(() => h());
    function h(x) {
      if (!(e.eager && x) && !(Jl && !x && !e.eager)) {
        if (v.value = "loading", g.value.lazySrc) {
          const M = new Image();
          M.src = g.value.lazySrc, T(M, null);
        }
        g.value.src && we(() => {
          var M;
          t("loadstart", ((M = c.value) == null ? void 0 : M.currentSrc) || g.value.src), setTimeout(() => {
            var E;
            if (!u.isUnmounted)
              if ((E = c.value) != null && E.complete) {
                if (c.value.naturalWidth || k(), v.value === "error") return;
                y.value || T(c.value, null), v.value === "loading" && m();
              } else
                y.value || T(c.value), S();
          });
        });
      }
    }
    function m() {
      var x;
      u.isUnmounted || (S(), T(c.value), v.value = "loaded", t("load", ((x = c.value) == null ? void 0 : x.currentSrc) || g.value.src));
    }
    function k() {
      var x;
      u.isUnmounted || (v.value = "error", t("error", ((x = c.value) == null ? void 0 : x.currentSrc) || g.value.src));
    }
    function S() {
      const x = c.value;
      x && (s.value = x.currentSrc || x.src);
    }
    let C = -1;
    Ze(() => {
      clearTimeout(C);
    });
    function T(x) {
      let M = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 100;
      const E = () => {
        if (clearTimeout(C), u.isUnmounted) return;
        const {
          naturalHeight: N,
          naturalWidth: j
        } = x;
        N || j ? (f.value = j, d.value = N) : !x.complete && v.value === "loading" && M != null ? C = window.setTimeout(E, M) : (x.currentSrc.endsWith(".svg") || x.currentSrc.startsWith("data:image/svg+xml")) && (f.value = 1, d.value = 1);
      };
      E();
    }
    const I = b(() => ({
      "v-img__img--cover": e.cover,
      "v-img__img--contain": !e.cover
    })), _ = () => {
      var E;
      if (!g.value.src || v.value === "idle") return null;
      const x = r("img", {
        class: ["v-img__img", I.value],
        style: {
          objectPosition: e.position
        },
        crossorigin: e.crossorigin,
        src: g.value.src,
        srcset: g.value.srcset,
        alt: e.alt,
        referrerpolicy: e.referrerpolicy,
        draggable: e.draggable,
        sizes: e.sizes,
        ref: c,
        onLoad: m,
        onError: k
      }, null), M = (E = a.sources) == null ? void 0 : E.call(a);
      return r(tt, {
        transition: e.transition,
        appear: !0
      }, {
        default: () => [$e(M ? r("picture", {
          class: "v-img__picture"
        }, [M, x]) : x, [[Ct, v.value === "loaded"]])]
      });
    }, D = () => r(tt, {
      transition: e.transition
    }, {
      default: () => [g.value.lazySrc && v.value !== "loaded" && r("img", {
        class: ["v-img__img", "v-img__img--preload", I.value],
        style: {
          objectPosition: e.position
        },
        crossorigin: e.crossorigin,
        src: g.value.lazySrc,
        alt: e.alt,
        referrerpolicy: e.referrerpolicy,
        draggable: e.draggable
      }, null)]
    }), w = () => a.placeholder ? r(tt, {
      transition: e.transition,
      appear: !0
    }, {
      default: () => [(v.value === "loading" || v.value === "error" && !a.error) && r("div", {
        class: "v-img__placeholder"
      }, [a.placeholder()])]
    }) : null, P = () => a.error ? r(tt, {
      transition: e.transition,
      appear: !0
    }, {
      default: () => [v.value === "error" && r("div", {
        class: "v-img__error"
      }, [a.error()])]
    }) : null, A = () => e.gradient ? r("div", {
      class: "v-img__gradient",
      style: {
        backgroundImage: `linear-gradient(${e.gradient})`
      }
    }, null) : null, V = G(!1);
    {
      const x = J(y, (M) => {
        M && (requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            V.value = !0;
          });
        }), x());
      });
    }
    return z(() => {
      const x = po.filterProps(e);
      return $e(r(po, O({
        class: ["v-img", {
          "v-img--absolute": e.absolute,
          "v-img--booting": !V.value
        }, l.value, o.value, e.class],
        style: [{
          width: te(e.width === "auto" ? f.value : e.width)
        }, i.value, e.style]
      }, x, {
        aspectRatio: y.value,
        "aria-label": e.alt,
        role: e.alt ? "img" : void 0
      }), {
        additional: () => r(ie, null, [r(_, null, null), r(D, null, null), r(A, null, null), r(w, null, null), r(P, null, null)]),
        default: a.default
      }), [[mt("intersect"), {
        handler: h,
        options: e.options
      }, null, {
        once: !0
      }]]);
    }), {
      currentSrc: s,
      image: c,
      state: v,
      naturalWidth: f,
      naturalHeight: d
    };
  }
}), st = p({
  border: [Boolean, Number, String]
}, "border");
function bt(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Dt();
  return {
    borderClasses: b(() => {
      const a = An(e) ? e.value : e.border, l = [];
      if (a === !0 || a === "")
        l.push(`${n}--border`);
      else if (typeof a == "string" || a === 0)
        for (const i of String(a).split(" "))
          l.push(`border-${i}`);
      return l;
    })
  };
}
const je = p({
  elevation: {
    type: [Number, String],
    validator(e) {
      const n = parseInt(e);
      return !isNaN(n) && n >= 0 && // Material Design has a maximum elevation of 24
      // https://material.io/design/environment/elevation.html#default-elevations
      n <= 24;
    }
  }
}, "elevation");
function qe(e) {
  return {
    elevationClasses: b(() => {
      const t = An(e) ? e.value : e.elevation, a = [];
      return t == null || a.push(`elevation-${t}`), a;
    })
  };
}
const lf = [null, "prominent", "default", "comfortable", "compact"], Iu = p({
  absolute: Boolean,
  collapse: Boolean,
  color: String,
  density: {
    type: String,
    default: "default",
    validator: (e) => lf.includes(e)
  },
  extended: Boolean,
  extensionHeight: {
    type: [Number, String],
    default: 48
  },
  flat: Boolean,
  floating: Boolean,
  height: {
    type: [Number, String],
    default: 64
  },
  image: String,
  title: String,
  ...st(),
  ...le(),
  ...je(),
  ...Ee(),
  ...ge({
    tag: "header"
  }),
  ...ke()
}, "VToolbar"), Eo = L()({
  name: "VToolbar",
  props: Iu(),
  setup(e, n) {
    var g;
    let {
      slots: t
    } = n;
    const {
      backgroundColorClasses: a,
      backgroundColorStyles: l
    } = Pe($(e, "color")), {
      borderClasses: i
    } = bt(e), {
      elevationClasses: o
    } = qe(e), {
      roundedClasses: u
    } = Oe(e), {
      themeClasses: s
    } = Ve(e), {
      rtlClasses: c
    } = We(), v = G(!!(e.extended || (g = t.extension) != null && g.call(t))), f = b(() => parseInt(Number(e.height) + (e.density === "prominent" ? Number(e.height) : 0) - (e.density === "comfortable" ? 8 : 0) - (e.density === "compact" ? 16 : 0), 10)), d = b(() => v.value ? parseInt(Number(e.extensionHeight) + (e.density === "prominent" ? Number(e.extensionHeight) : 0) - (e.density === "comfortable" ? 4 : 0) - (e.density === "compact" ? 8 : 0), 10) : 0);
    return pe({
      VBtn: {
        variant: "text"
      }
    }), z(() => {
      var k;
      const y = !!(e.title || t.title), h = !!(t.image || e.image), m = (k = t.extension) == null ? void 0 : k.call(t);
      return v.value = !!(e.extended || m), r(e.tag, {
        class: ["v-toolbar", {
          "v-toolbar--absolute": e.absolute,
          "v-toolbar--collapse": e.collapse,
          "v-toolbar--flat": e.flat,
          "v-toolbar--floating": e.floating,
          [`v-toolbar--density-${e.density}`]: !0
        }, a.value, i.value, o.value, u.value, s.value, c.value, e.class],
        style: [l.value, e.style]
      }, {
        default: () => [h && r("div", {
          key: "image",
          class: "v-toolbar__image"
        }, [t.image ? r(de, {
          key: "image-defaults",
          disabled: !e.image,
          defaults: {
            VImg: {
              cover: !0,
              src: e.image
            }
          }
        }, t.image) : r(jt, {
          key: "image-img",
          cover: !0,
          src: e.image
        }, null)]), r(de, {
          defaults: {
            VTabs: {
              height: te(f.value)
            }
          }
        }, {
          default: () => {
            var S, C, T;
            return [r("div", {
              class: "v-toolbar__content",
              style: {
                height: te(f.value)
              }
            }, [t.prepend && r("div", {
              class: "v-toolbar__prepend"
            }, [(S = t.prepend) == null ? void 0 : S.call(t)]), y && r(yu, {
              key: "title",
              text: e.title
            }, {
              text: t.title
            }), (C = t.default) == null ? void 0 : C.call(t), t.append && r("div", {
              class: "v-toolbar__append"
            }, [(T = t.append) == null ? void 0 : T.call(t)])])];
          }
        }), r(de, {
          defaults: {
            VTabs: {
              height: te(d.value)
            }
          }
        }, {
          default: () => [r(vi, null, {
            default: () => [v.value && r("div", {
              class: "v-toolbar__extension",
              style: {
                height: te(d.value)
              }
            }, [m])]
          })]
        })]
      });
    }), {
      contentHeight: f,
      extensionHeight: d
    };
  }
}), of = p({
  scrollTarget: {
    type: String
  },
  scrollThreshold: {
    type: [String, Number],
    default: 300
  }
}, "scroll");
function rf(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    canScroll: t
  } = n;
  let a = 0, l = 0;
  const i = U(null), o = G(0), u = G(0), s = G(0), c = G(!1), v = G(!1), f = b(() => Number(e.scrollThreshold)), d = b(() => Me((f.value - o.value) / f.value || 0)), g = () => {
    const y = i.value;
    if (!y || t && !t.value) return;
    a = o.value, o.value = "window" in y ? y.pageYOffset : y.scrollTop;
    const h = y instanceof Window ? document.documentElement.scrollHeight : y.scrollHeight;
    if (l !== h) {
      l = h;
      return;
    }
    v.value = o.value < a, s.value = Math.abs(o.value - f.value);
  };
  return J(v, () => {
    u.value = u.value || o.value;
  }), J(c, () => {
    u.value = 0;
  }), Ue(() => {
    J(() => e.scrollTarget, (y) => {
      var m;
      const h = y ? document.querySelector(y) : window;
      if (!h) {
        wt(`Unable to locate element with identifier ${y}`);
        return;
      }
      h !== i.value && ((m = i.value) == null || m.removeEventListener("scroll", g), i.value = h, i.value.addEventListener("scroll", g, {
        passive: !0
      }));
    }, {
      immediate: !0
    });
  }), Ze(() => {
    var y;
    (y = i.value) == null || y.removeEventListener("scroll", g);
  }), t && J(t, g, {
    immediate: !0
  }), {
    scrollThreshold: f,
    currentScroll: o,
    currentThreshold: s,
    isScrollActive: c,
    scrollRatio: d,
    // required only for testing
    // probably can be removed
    // later (2 chars chlng)
    isScrollingUp: v,
    savedScroll: u
  };
}
function hn() {
  const e = G(!1);
  return Ue(() => {
    window.requestAnimationFrame(() => {
      e.value = !0;
    });
  }), {
    ssrBootStyles: b(() => e.value ? void 0 : {
      transition: "none !important"
    }),
    isBooted: Zl(e)
  };
}
const uf = p({
  scrollBehavior: String,
  modelValue: {
    type: Boolean,
    default: !0
  },
  location: {
    type: String,
    default: "top",
    validator: (e) => ["top", "bottom"].includes(e)
  },
  ...Iu(),
  ...mn(),
  ...of(),
  height: {
    type: [Number, String],
    default: 64
  }
}, "VAppBar"), nk = L()({
  name: "VAppBar",
  props: uf(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, n) {
    let {
      slots: t
    } = n;
    const a = U(), l = oe(e, "modelValue"), i = b(() => {
      var C;
      const S = new Set(((C = e.scrollBehavior) == null ? void 0 : C.split(" ")) ?? []);
      return {
        hide: S.has("hide"),
        fullyHide: S.has("fully-hide"),
        inverted: S.has("inverted"),
        collapse: S.has("collapse"),
        elevate: S.has("elevate"),
        fadeImage: S.has("fade-image")
        // shrink: behavior.has('shrink'),
      };
    }), o = b(() => {
      const S = i.value;
      return S.hide || S.fullyHide || S.inverted || S.collapse || S.elevate || S.fadeImage || // behavior.shrink ||
      !l.value;
    }), {
      currentScroll: u,
      scrollThreshold: s,
      isScrollingUp: c,
      scrollRatio: v
    } = rf(e, {
      canScroll: o
    }), f = b(() => i.value.hide || i.value.fullyHide), d = b(() => e.collapse || i.value.collapse && (i.value.inverted ? v.value > 0 : v.value === 0)), g = b(() => e.flat || i.value.fullyHide && !l.value || i.value.elevate && (i.value.inverted ? u.value > 0 : u.value === 0)), y = b(() => i.value.fadeImage ? i.value.inverted ? 1 - v.value : v.value : void 0), h = b(() => {
      var T, I;
      if (i.value.hide && i.value.inverted) return 0;
      const S = ((T = a.value) == null ? void 0 : T.contentHeight) ?? 0, C = ((I = a.value) == null ? void 0 : I.extensionHeight) ?? 0;
      return f.value ? u.value < s.value || i.value.fullyHide ? S + C : S : S + C;
    });
    ot(b(() => !!e.scrollBehavior), () => {
      Fe(() => {
        f.value ? i.value.inverted ? l.value = u.value > s.value : l.value = c.value || u.value < s.value : l.value = !0;
      });
    });
    const {
      ssrBootStyles: m
    } = hn(), {
      layoutItemStyles: k
    } = gn({
      id: e.name,
      order: b(() => parseInt(e.order, 10)),
      position: $(e, "location"),
      layoutSize: h,
      elementSize: G(void 0),
      active: l,
      absolute: $(e, "absolute")
    });
    return z(() => {
      const S = Eo.filterProps(e);
      return r(Eo, O({
        ref: a,
        class: ["v-app-bar", {
          "v-app-bar--bottom": e.location === "bottom"
        }, e.class],
        style: [{
          ...k.value,
          "--v-toolbar-image-opacity": y.value,
          height: void 0,
          ...m.value
        }, e.style]
      }, S, {
        collapse: d.value,
        flat: g.value
      }), t);
    }), {};
  }
}), sf = [null, "default", "comfortable", "compact"], ze = p({
  density: {
    type: String,
    default: "default",
    validator: (e) => sf.includes(e)
  }
}, "density");
function Qe(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Dt();
  return {
    densityClasses: b(() => `${n}--density-${e.density}`)
  };
}
const cf = ["elevated", "flat", "tonal", "outlined", "text", "plain"];
function Kt(e, n) {
  return r(ie, null, [e && r("span", {
    key: "overlay",
    class: `${n}__overlay`
  }, null), r("span", {
    key: "underlay",
    class: `${n}__underlay`
  }, null)]);
}
const St = p({
  color: String,
  variant: {
    type: String,
    default: "elevated",
    validator: (e) => cf.includes(e)
  }
}, "variant");
function yn(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Dt();
  const t = b(() => {
    const {
      variant: i
    } = it(e);
    return `${n}--variant-${i}`;
  }), {
    colorClasses: a,
    colorStyles: l
  } = fi(b(() => {
    const {
      variant: i,
      color: o
    } = it(e);
    return {
      [["elevated", "flat"].includes(i) ? "background" : "text"]: o
    };
  }));
  return {
    colorClasses: a,
    colorStyles: l,
    variantClasses: t
  };
}
const _u = p({
  baseColor: String,
  divided: Boolean,
  ...st(),
  ...le(),
  ...ze(),
  ...je(),
  ...Ee(),
  ...ge(),
  ...ke(),
  ...St()
}, "VBtnGroup"), Fo = L()({
  name: "VBtnGroup",
  props: _u(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    const {
      themeClasses: a
    } = Ve(e), {
      densityClasses: l
    } = Qe(e), {
      borderClasses: i
    } = bt(e), {
      elevationClasses: o
    } = qe(e), {
      roundedClasses: u
    } = Oe(e);
    pe({
      VBtn: {
        height: "auto",
        baseColor: $(e, "baseColor"),
        color: $(e, "color"),
        density: $(e, "density"),
        flat: !0,
        variant: $(e, "variant")
      }
    }), z(() => r(e.tag, {
      class: ["v-btn-group", {
        "v-btn-group--divided": e.divided
      }, a.value, i.value, l.value, o.value, u.value, e.class],
      style: e.style
    }, t));
  }
}), bn = p({
  modelValue: {
    type: null,
    default: void 0
  },
  multiple: Boolean,
  mandatory: [Boolean, String],
  max: Number,
  selectedClass: String,
  disabled: Boolean
}, "group"), kn = p({
  value: null,
  disabled: Boolean,
  selectedClass: String
}, "group-item");
function Sn(e, n) {
  let t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0;
  const a = Le("useGroupItem");
  if (!a)
    throw new Error("[Vuetify] useGroupItem composable must be used inside a component setup function");
  const l = Ke();
  De(Symbol.for(`${n.description}:id`), l);
  const i = be(n, null);
  if (!i) {
    if (!t) return i;
    throw new Error(`[Vuetify] Could not find useGroup injection with symbol ${n.description}`);
  }
  const o = $(e, "value"), u = b(() => !!(i.disabled.value || e.disabled));
  i.register({
    id: l,
    value: o,
    disabled: u
  }, a), Ze(() => {
    i.unregister(l);
  });
  const s = b(() => i.isSelected(l)), c = b(() => i.items.value[0].id === l), v = b(() => i.items.value[i.items.value.length - 1].id === l), f = b(() => s.value && [i.selectedClass.value, e.selectedClass]);
  return J(s, (d) => {
    a.emit("group:selected", {
      value: d
    });
  }, {
    flush: "sync"
  }), {
    id: l,
    isSelected: s,
    isFirst: c,
    isLast: v,
    toggle: () => i.select(l, !s.value),
    select: (d) => i.select(l, d),
    selectedClass: f,
    value: o,
    disabled: u,
    group: i
  };
}
function qt(e, n) {
  let t = !1;
  const a = lt([]), l = oe(e, "modelValue", [], (d) => d == null ? [] : Tu(a, Ae(d)), (d) => {
    const g = vf(a, d);
    return e.multiple ? g : g[0];
  }), i = Le("useGroup");
  function o(d, g) {
    const y = d, h = Symbol.for(`${n.description}:id`), k = _n(h, i == null ? void 0 : i.vnode).indexOf(g);
    it(y.value) == null && (y.value = k, y.useIndexAsValue = !0), k > -1 ? a.splice(k, 0, y) : a.push(y);
  }
  function u(d) {
    if (t) return;
    s();
    const g = a.findIndex((y) => y.id === d);
    a.splice(g, 1);
  }
  function s() {
    const d = a.find((g) => !g.disabled);
    d && e.mandatory === "force" && !l.value.length && (l.value = [d.id]);
  }
  Ue(() => {
    s();
  }), Ze(() => {
    t = !0;
  }), Wc(() => {
    for (let d = 0; d < a.length; d++)
      a[d].useIndexAsValue && (a[d].value = d);
  });
  function c(d, g) {
    const y = a.find((h) => h.id === d);
    if (!(g && (y != null && y.disabled)))
      if (e.multiple) {
        const h = l.value.slice(), m = h.findIndex((S) => S === d), k = ~m;
        if (g = g ?? !k, k && e.mandatory && h.length <= 1 || !k && e.max != null && h.length + 1 > e.max) return;
        m < 0 && g ? h.push(d) : m >= 0 && !g && h.splice(m, 1), l.value = h;
      } else {
        const h = l.value.includes(d);
        if (e.mandatory && h) return;
        l.value = g ?? !h ? [d] : [];
      }
  }
  function v(d) {
    if (e.multiple && wt('This method is not supported when using "multiple" prop'), l.value.length) {
      const g = l.value[0], y = a.findIndex((k) => k.id === g);
      let h = (y + d) % a.length, m = a[h];
      for (; m.disabled && h !== y; )
        h = (h + d) % a.length, m = a[h];
      if (m.disabled) return;
      l.value = [a[h].id];
    } else {
      const g = a.find((y) => !y.disabled);
      g && (l.value = [g.id]);
    }
  }
  const f = {
    register: o,
    unregister: u,
    selected: l,
    select: c,
    disabled: $(e, "disabled"),
    prev: () => v(a.length - 1),
    next: () => v(1),
    isSelected: (d) => l.value.includes(d),
    selectedClass: b(() => e.selectedClass),
    items: b(() => a),
    getItemIndex: (d) => df(a, d)
  };
  return De(n, f), f;
}
function df(e, n) {
  const t = Tu(e, [n]);
  return t.length ? e.findIndex((a) => a.id === t[0]) : -1;
}
function Tu(e, n) {
  const t = [];
  return n.forEach((a) => {
    const l = e.find((o) => nt(a, o.value)), i = e[a];
    (l == null ? void 0 : l.value) != null ? t.push(l.id) : i != null && t.push(i.id);
  }), t;
}
function vf(e, n) {
  const t = [];
  return n.forEach((a) => {
    const l = e.findIndex((i) => i.id === a);
    if (~l) {
      const i = e[l];
      t.push(i.value != null ? i.value : l);
    }
  }), t;
}
const mi = Symbol.for("vuetify:v-btn-toggle"), ff = p({
  ..._u(),
  ...bn()
}, "VBtnToggle"), ak = L()({
  name: "VBtnToggle",
  props: ff(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, n) {
    let {
      slots: t
    } = n;
    const {
      isSelected: a,
      next: l,
      prev: i,
      select: o,
      selected: u
    } = qt(e, mi);
    return z(() => {
      const s = Fo.filterProps(e);
      return r(Fo, O({
        class: ["v-btn-toggle", e.class]
      }, s, {
        style: e.style
      }), {
        default: () => {
          var c;
          return [(c = t.default) == null ? void 0 : c.call(t, {
            isSelected: a,
            next: l,
            prev: i,
            select: o,
            selected: u
          })];
        }
      });
    }), {
      next: l,
      prev: i,
      select: o
    };
  }
}), mf = ["x-small", "small", "default", "large", "x-large"], pt = p({
  size: {
    type: [String, Number],
    default: "default"
  }
}, "size");
function zn(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Dt();
  return ni(() => {
    let t, a;
    return Ma(mf, e.size) ? t = `${n}--size-${e.size}` : e.size && (a = {
      width: te(e.size),
      height: te(e.size)
    }), {
      sizeClasses: t,
      sizeStyles: a
    };
  });
}
const gf = p({
  color: String,
  disabled: Boolean,
  start: Boolean,
  end: Boolean,
  icon: ue,
  ...le(),
  ...pt(),
  ...ge({
    tag: "i"
  }),
  ...ke()
}, "VIcon"), Se = L()({
  name: "VIcon",
  props: gf(),
  setup(e, n) {
    let {
      attrs: t,
      slots: a
    } = n;
    const l = U(), {
      themeClasses: i
    } = ci(), {
      iconData: o
    } = Yv(b(() => l.value || e.icon)), {
      sizeClasses: u
    } = zn(e), {
      textColorClasses: s,
      textColorStyles: c
    } = Ge($(e, "color"));
    return z(() => {
      var d, g;
      const v = (d = a.default) == null ? void 0 : d.call(a);
      v && (l.value = (g = Er(v).filter((y) => y.type === jc && y.children && typeof y.children == "string")[0]) == null ? void 0 : g.children);
      const f = !!(t.onClick || t.onClickOnce);
      return r(o.value.component, {
        tag: e.tag,
        icon: o.value.icon,
        class: ["v-icon", "notranslate", i.value, u.value, s.value, {
          "v-icon--clickable": f,
          "v-icon--disabled": e.disabled,
          "v-icon--start": e.start,
          "v-icon--end": e.end
        }, e.class],
        style: [u.value ? void 0 : {
          fontSize: te(e.size),
          height: te(e.size),
          width: te(e.size)
        }, c.value, e.style],
        role: f ? "button" : void 0,
        "aria-hidden": !f,
        tabindex: f ? e.disabled ? -1 : 0 : void 0
      }, {
        default: () => [v]
      });
    }), {};
  }
});
function el(e, n) {
  const t = U(), a = G(!1);
  if (Jl) {
    const l = new IntersectionObserver((i) => {
      a.value = !!i.find((o) => o.isIntersecting);
    }, n);
    Ze(() => {
      l.disconnect();
    }), J(t, (i, o) => {
      o && (l.unobserve(o), a.value = !1), i && l.observe(i);
    }, {
      flush: "post"
    });
  }
  return {
    intersectionRef: t,
    isIntersecting: a
  };
}
const hf = p({
  bgColor: String,
  color: String,
  indeterminate: [Boolean, String],
  modelValue: {
    type: [Number, String],
    default: 0
  },
  rotate: {
    type: [Number, String],
    default: 0
  },
  width: {
    type: [Number, String],
    default: 4
  },
  ...le(),
  ...pt(),
  ...ge({
    tag: "div"
  }),
  ...ke()
}, "VProgressCircular"), dn = L()({
  name: "VProgressCircular",
  props: hf(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    const a = 20, l = 2 * Math.PI * a, i = U(), {
      themeClasses: o
    } = Ve(e), {
      sizeClasses: u,
      sizeStyles: s
    } = zn(e), {
      textColorClasses: c,
      textColorStyles: v
    } = Ge($(e, "color")), {
      textColorClasses: f,
      textColorStyles: d
    } = Ge($(e, "bgColor")), {
      intersectionRef: g,
      isIntersecting: y
    } = el(), {
      resizeRef: h,
      contentRect: m
    } = xt(), k = b(() => Math.max(0, Math.min(100, parseFloat(e.modelValue)))), S = b(() => Number(e.width)), C = b(() => s.value ? Number(e.size) : m.value ? m.value.width : Math.max(S.value, 32)), T = b(() => a / (1 - S.value / C.value) * 2), I = b(() => S.value / C.value * T.value), _ = b(() => te((100 - k.value) / 100 * l));
    return Fe(() => {
      g.value = i.value, h.value = i.value;
    }), z(() => r(e.tag, {
      ref: i,
      class: ["v-progress-circular", {
        "v-progress-circular--indeterminate": !!e.indeterminate,
        "v-progress-circular--visible": y.value,
        "v-progress-circular--disable-shrink": e.indeterminate === "disable-shrink"
      }, o.value, u.value, c.value, e.class],
      style: [s.value, v.value, e.style],
      role: "progressbar",
      "aria-valuemin": "0",
      "aria-valuemax": "100",
      "aria-valuenow": e.indeterminate ? void 0 : k.value
    }, {
      default: () => [r("svg", {
        style: {
          transform: `rotate(calc(-90deg + ${Number(e.rotate)}deg))`
        },
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: `0 0 ${T.value} ${T.value}`
      }, [r("circle", {
        class: ["v-progress-circular__underlay", f.value],
        style: d.value,
        fill: "transparent",
        cx: "50%",
        cy: "50%",
        r: a,
        "stroke-width": I.value,
        "stroke-dasharray": l,
        "stroke-dashoffset": 0
      }, null), r("circle", {
        class: "v-progress-circular__overlay",
        fill: "transparent",
        cx: "50%",
        cy: "50%",
        r: a,
        "stroke-width": I.value,
        "stroke-dasharray": l,
        "stroke-dashoffset": _.value
      }, null)]), t.default && r("div", {
        class: "v-progress-circular__content"
      }, [t.default({
        value: k.value
      })])]
    })), {};
  }
}), $o = {
  center: "center",
  top: "bottom",
  bottom: "top",
  left: "right",
  right: "left"
}, Rt = p({
  location: String
}, "location");
function wn(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, t = arguments.length > 2 ? arguments[2] : void 0;
  const {
    isRtl: a
  } = We();
  return {
    locationStyles: b(() => {
      if (!e.location) return {};
      const {
        side: i,
        align: o
      } = Bl(e.location.split(" ").length > 1 ? e.location : `${e.location} center`, a.value);
      function u(c) {
        return t ? t(c) : 0;
      }
      const s = {};
      return i !== "center" && (n ? s[$o[i]] = `calc(100% - ${u(i)}px)` : s[i] = 0), o !== "center" ? n ? s[$o[o]] = `calc(100% - ${u(o)}px)` : s[o] = 0 : (i === "center" ? s.top = s.left = "50%" : s[{
        top: "left",
        bottom: "left",
        left: "top",
        right: "top"
      }[i]] = "50%", s.transform = {
        top: "translateX(-50%)",
        bottom: "translateX(-50%)",
        left: "translateY(-50%)",
        right: "translateY(-50%)",
        center: "translate(-50%, -50%)"
      }[i]), s;
    })
  };
}
const yf = p({
  absolute: Boolean,
  active: {
    type: Boolean,
    default: !0
  },
  bgColor: String,
  bgOpacity: [Number, String],
  bufferValue: {
    type: [Number, String],
    default: 0
  },
  bufferColor: String,
  bufferOpacity: [Number, String],
  clickable: Boolean,
  color: String,
  height: {
    type: [Number, String],
    default: 4
  },
  indeterminate: Boolean,
  max: {
    type: [Number, String],
    default: 100
  },
  modelValue: {
    type: [Number, String],
    default: 0
  },
  opacity: [Number, String],
  reverse: Boolean,
  stream: Boolean,
  striped: Boolean,
  roundedBar: Boolean,
  ...le(),
  ...Rt({
    location: "top"
  }),
  ...Ee(),
  ...ge(),
  ...ke()
}, "VProgressLinear"), gi = L()({
  name: "VProgressLinear",
  props: yf(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, n) {
    var V;
    let {
      slots: t
    } = n;
    const a = oe(e, "modelValue"), {
      isRtl: l,
      rtlClasses: i
    } = We(), {
      themeClasses: o
    } = Ve(e), {
      locationStyles: u
    } = wn(e), {
      textColorClasses: s,
      textColorStyles: c
    } = Ge(e, "color"), {
      backgroundColorClasses: v,
      backgroundColorStyles: f
    } = Pe(b(() => e.bgColor || e.color)), {
      backgroundColorClasses: d,
      backgroundColorStyles: g
    } = Pe(b(() => e.bufferColor || e.bgColor || e.color)), {
      backgroundColorClasses: y,
      backgroundColorStyles: h
    } = Pe(e, "color"), {
      roundedClasses: m
    } = Oe(e), {
      intersectionRef: k,
      isIntersecting: S
    } = el(), C = b(() => parseFloat(e.max)), T = b(() => parseFloat(e.height)), I = b(() => Me(parseFloat(e.bufferValue) / C.value * 100, 0, 100)), _ = b(() => Me(parseFloat(a.value) / C.value * 100, 0, 100)), D = b(() => l.value !== e.reverse), w = b(() => e.indeterminate ? "fade-transition" : "slide-x-transition"), P = xe && ((V = window.matchMedia) == null ? void 0 : V.call(window, "(forced-colors: active)").matches);
    function A(x) {
      if (!k.value) return;
      const {
        left: M,
        right: E,
        width: N
      } = k.value.getBoundingClientRect(), j = D.value ? N - x.clientX + (E - N) : x.clientX - M;
      a.value = Math.round(j / N * C.value);
    }
    return z(() => r(e.tag, {
      ref: k,
      class: ["v-progress-linear", {
        "v-progress-linear--absolute": e.absolute,
        "v-progress-linear--active": e.active && S.value,
        "v-progress-linear--reverse": D.value,
        "v-progress-linear--rounded": e.rounded,
        "v-progress-linear--rounded-bar": e.roundedBar,
        "v-progress-linear--striped": e.striped
      }, m.value, o.value, i.value, e.class],
      style: [{
        bottom: e.location === "bottom" ? 0 : void 0,
        top: e.location === "top" ? 0 : void 0,
        height: e.active ? te(T.value) : 0,
        "--v-progress-linear-height": te(T.value),
        ...e.absolute ? u.value : {}
      }, e.style],
      role: "progressbar",
      "aria-hidden": e.active ? "false" : "true",
      "aria-valuemin": "0",
      "aria-valuemax": e.max,
      "aria-valuenow": e.indeterminate ? void 0 : Math.min(parseFloat(a.value), C.value),
      onClick: e.clickable && A
    }, {
      default: () => [e.stream && r("div", {
        key: "stream",
        class: ["v-progress-linear__stream", s.value],
        style: {
          ...c.value,
          [D.value ? "left" : "right"]: te(-T.value),
          borderTop: `${te(T.value / 2)} dotted`,
          opacity: parseFloat(e.bufferOpacity),
          top: `calc(50% - ${te(T.value / 4)})`,
          width: te(100 - I.value, "%"),
          "--v-progress-linear-stream-to": te(T.value * (D.value ? 1 : -1))
        }
      }, null), r("div", {
        class: ["v-progress-linear__background", P ? void 0 : v.value],
        style: [f.value, {
          opacity: parseFloat(e.bgOpacity),
          width: e.stream ? 0 : void 0
        }]
      }, null), r("div", {
        class: ["v-progress-linear__buffer", P ? void 0 : d.value],
        style: [g.value, {
          opacity: parseFloat(e.bufferOpacity),
          width: te(I.value, "%")
        }]
      }, null), r(Wt, {
        name: w.value
      }, {
        default: () => [e.indeterminate ? r("div", {
          class: "v-progress-linear__indeterminate"
        }, [["long", "short"].map((x) => r("div", {
          key: x,
          class: ["v-progress-linear__indeterminate", x, P ? void 0 : y.value],
          style: h.value
        }, null))]) : r("div", {
          class: ["v-progress-linear__determinate", P ? void 0 : y.value],
          style: [h.value, {
            width: te(_.value, "%")
          }]
        }, null)]
      }), t.default && r("div", {
        class: "v-progress-linear__content"
      }, [t.default({
        value: _.value,
        buffer: I.value
      })])]
    })), {};
  }
}), tl = p({
  loading: [Boolean, String]
}, "loader");
function da(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Dt();
  return {
    loaderClasses: b(() => ({
      [`${n}--loading`]: e.loading
    }))
  };
}
function va(e, n) {
  var a;
  let {
    slots: t
  } = n;
  return r("div", {
    class: `${e.name}__loader`
  }, [((a = t.default) == null ? void 0 : a.call(t, {
    color: e.color,
    isActive: e.active
  })) || r(gi, {
    absolute: e.absolute,
    active: e.active,
    color: e.color,
    height: "2",
    indeterminate: !0
  }, null)]);
}
const bf = ["static", "relative", "fixed", "absolute", "sticky"], Wn = p({
  position: {
    type: String,
    validator: (
      /* istanbul ignore next */
      (e) => bf.includes(e)
    )
  }
}, "position");
function jn(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Dt();
  return {
    positionClasses: b(() => e.position ? `${n}--${e.position}` : void 0)
  };
}
function kf() {
  const e = Le("useRoute");
  return b(() => {
    var n;
    return (n = e == null ? void 0 : e.proxy) == null ? void 0 : n.$route;
  });
}
function Au() {
  var e, n;
  return (n = (e = Le("useRouter")) == null ? void 0 : e.proxy) == null ? void 0 : n.$router;
}
function fa(e, n) {
  var f, d;
  const t = Uc("RouterLink"), a = b(() => !!(e.href || e.to)), l = b(() => (a == null ? void 0 : a.value) || to(n, "click") || to(e, "click"));
  if (typeof t == "string" || !("useLink" in t)) {
    const g = $(e, "href");
    return {
      isLink: a,
      isClickable: l,
      href: g,
      linkProps: lt({
        href: g
      })
    };
  }
  const i = b(() => ({
    ...e,
    to: $(() => e.to || "")
  })), o = t.useLink(i.value), u = b(() => e.to ? o : void 0), s = kf(), c = b(() => {
    var g, y, h;
    return u.value ? e.exact ? s.value ? ((h = u.value.isExactActive) == null ? void 0 : h.value) && nt(u.value.route.value.query, s.value.query) : ((y = u.value.isExactActive) == null ? void 0 : y.value) ?? !1 : ((g = u.value.isActive) == null ? void 0 : g.value) ?? !1 : !1;
  }), v = b(() => {
    var g;
    return e.to ? (g = u.value) == null ? void 0 : g.route.value.href : e.href;
  });
  return {
    isLink: a,
    isClickable: l,
    isActive: c,
    route: (f = u.value) == null ? void 0 : f.route,
    navigate: (d = u.value) == null ? void 0 : d.navigate,
    href: v,
    linkProps: lt({
      href: v,
      "aria-current": b(() => c.value ? "page" : void 0)
    })
  };
}
const ma = p({
  href: String,
  replace: Boolean,
  to: [String, Object],
  exact: Boolean
}, "router");
let wl = !1;
function Sf(e, n) {
  let t = !1, a, l;
  xe && (e != null && e.beforeEach) && (we(() => {
    window.addEventListener("popstate", i), a = e.beforeEach((o, u, s) => {
      wl ? t ? n(s) : s() : setTimeout(() => t ? n(s) : s()), wl = !0;
    }), l = e == null ? void 0 : e.afterEach(() => {
      wl = !1;
    });
  }), Xe(() => {
    window.removeEventListener("popstate", i), a == null || a(), l == null || l();
  }));
  function i(o) {
    var u;
    (u = o.state) != null && u.replaced || (t = !0, setTimeout(() => t = !1));
  }
}
function wf(e, n) {
  J(() => {
    var t;
    return (t = e.isActive) == null ? void 0 : t.value;
  }, (t) => {
    e.isLink.value && t && n && we(() => {
      n(!0);
    });
  }, {
    immediate: !0
  });
}
const Ol = Symbol("rippleStop"), xf = 80;
function Lo(e, n) {
  e.style.transform = n, e.style.webkitTransform = n;
}
function Nl(e) {
  return e.constructor.name === "TouchEvent";
}
function Du(e) {
  return e.constructor.name === "KeyboardEvent";
}
const Cf = function(e, n) {
  var f;
  let t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, a = 0, l = 0;
  if (!Du(e)) {
    const d = n.getBoundingClientRect(), g = Nl(e) ? e.touches[e.touches.length - 1] : e;
    a = g.clientX - d.left, l = g.clientY - d.top;
  }
  let i = 0, o = 0.3;
  (f = n._ripple) != null && f.circle ? (o = 0.15, i = n.clientWidth / 2, i = t.center ? i : i + Math.sqrt((a - i) ** 2 + (l - i) ** 2) / 4) : i = Math.sqrt(n.clientWidth ** 2 + n.clientHeight ** 2) / 2;
  const u = `${(n.clientWidth - i * 2) / 2}px`, s = `${(n.clientHeight - i * 2) / 2}px`, c = t.center ? u : `${a - i}px`, v = t.center ? s : `${l - i}px`;
  return {
    radius: i,
    scale: o,
    x: c,
    y: v,
    centerX: u,
    centerY: s
  };
}, La = {
  /* eslint-disable max-statements */
  show(e, n) {
    var g;
    let t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    if (!((g = n == null ? void 0 : n._ripple) != null && g.enabled))
      return;
    const a = document.createElement("span"), l = document.createElement("span");
    a.appendChild(l), a.className = "v-ripple__container", t.class && (a.className += ` ${t.class}`);
    const {
      radius: i,
      scale: o,
      x: u,
      y: s,
      centerX: c,
      centerY: v
    } = Cf(e, n, t), f = `${i * 2}px`;
    l.className = "v-ripple__animation", l.style.width = f, l.style.height = f, n.appendChild(a);
    const d = window.getComputedStyle(n);
    d && d.position === "static" && (n.style.position = "relative", n.dataset.previousPosition = "static"), l.classList.add("v-ripple__animation--enter"), l.classList.add("v-ripple__animation--visible"), Lo(l, `translate(${u}, ${s}) scale3d(${o},${o},${o})`), l.dataset.activated = String(performance.now()), requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        l.classList.remove("v-ripple__animation--enter"), l.classList.add("v-ripple__animation--in"), Lo(l, `translate(${c}, ${v}) scale3d(1,1,1)`);
      });
    });
  },
  hide(e) {
    var i;
    if (!((i = e == null ? void 0 : e._ripple) != null && i.enabled)) return;
    const n = e.getElementsByClassName("v-ripple__animation");
    if (n.length === 0) return;
    const t = n[n.length - 1];
    if (t.dataset.isHiding) return;
    t.dataset.isHiding = "true";
    const a = performance.now() - Number(t.dataset.activated), l = Math.max(250 - a, 0);
    setTimeout(() => {
      t.classList.remove("v-ripple__animation--in"), t.classList.add("v-ripple__animation--out"), setTimeout(() => {
        var u;
        e.getElementsByClassName("v-ripple__animation").length === 1 && e.dataset.previousPosition && (e.style.position = e.dataset.previousPosition, delete e.dataset.previousPosition), ((u = t.parentNode) == null ? void 0 : u.parentNode) === e && e.removeChild(t.parentNode);
      }, 300);
    }, l);
  }
};
function Bu(e) {
  return typeof e > "u" || !!e;
}
function aa(e) {
  const n = {}, t = e.currentTarget;
  if (!(!(t != null && t._ripple) || t._ripple.touched || e[Ol])) {
    if (e[Ol] = !0, Nl(e))
      t._ripple.touched = !0, t._ripple.isTouch = !0;
    else if (t._ripple.isTouch) return;
    if (n.center = t._ripple.centered || Du(e), t._ripple.class && (n.class = t._ripple.class), Nl(e)) {
      if (t._ripple.showTimerCommit) return;
      t._ripple.showTimerCommit = () => {
        La.show(e, t, n);
      }, t._ripple.showTimer = window.setTimeout(() => {
        var a;
        (a = t == null ? void 0 : t._ripple) != null && a.showTimerCommit && (t._ripple.showTimerCommit(), t._ripple.showTimerCommit = null);
      }, xf);
    } else
      La.show(e, t, n);
  }
}
function Oo(e) {
  e[Ol] = !0;
}
function dt(e) {
  const n = e.currentTarget;
  if (n != null && n._ripple) {
    if (window.clearTimeout(n._ripple.showTimer), e.type === "touchend" && n._ripple.showTimerCommit) {
      n._ripple.showTimerCommit(), n._ripple.showTimerCommit = null, n._ripple.showTimer = window.setTimeout(() => {
        dt(e);
      });
      return;
    }
    window.setTimeout(() => {
      n._ripple && (n._ripple.touched = !1);
    }), La.hide(n);
  }
}
function Mu(e) {
  const n = e.currentTarget;
  n != null && n._ripple && (n._ripple.showTimerCommit && (n._ripple.showTimerCommit = null), window.clearTimeout(n._ripple.showTimer));
}
let la = !1;
function pu(e) {
  !la && (e.keyCode === Zi.enter || e.keyCode === Zi.space) && (la = !0, aa(e));
}
function Eu(e) {
  la = !1, dt(e);
}
function Fu(e) {
  la && (la = !1, dt(e));
}
function $u(e, n, t) {
  const {
    value: a,
    modifiers: l
  } = n, i = Bu(a);
  if (i || La.hide(e), e._ripple = e._ripple ?? {}, e._ripple.enabled = i, e._ripple.centered = l.center, e._ripple.circle = l.circle, Ya(a) && a.class && (e._ripple.class = a.class), i && !t) {
    if (l.stop) {
      e.addEventListener("touchstart", Oo, {
        passive: !0
      }), e.addEventListener("mousedown", Oo);
      return;
    }
    e.addEventListener("touchstart", aa, {
      passive: !0
    }), e.addEventListener("touchend", dt, {
      passive: !0
    }), e.addEventListener("touchmove", Mu, {
      passive: !0
    }), e.addEventListener("touchcancel", dt), e.addEventListener("mousedown", aa), e.addEventListener("mouseup", dt), e.addEventListener("mouseleave", dt), e.addEventListener("keydown", pu), e.addEventListener("keyup", Eu), e.addEventListener("blur", Fu), e.addEventListener("dragstart", dt, {
      passive: !0
    });
  } else !i && t && Lu(e);
}
function Lu(e) {
  e.removeEventListener("mousedown", aa), e.removeEventListener("touchstart", aa), e.removeEventListener("touchend", dt), e.removeEventListener("touchmove", Mu), e.removeEventListener("touchcancel", dt), e.removeEventListener("mouseup", dt), e.removeEventListener("mouseleave", dt), e.removeEventListener("keydown", pu), e.removeEventListener("keyup", Eu), e.removeEventListener("dragstart", dt), e.removeEventListener("blur", Fu);
}
function Vf(e, n) {
  $u(e, n, !1);
}
function Pf(e) {
  delete e._ripple, Lu(e);
}
function If(e, n) {
  if (n.value === n.oldValue)
    return;
  const t = Bu(n.oldValue);
  $u(e, n, t);
}
const Xt = {
  mounted: Vf,
  unmounted: Pf,
  updated: If
}, nl = p({
  active: {
    type: Boolean,
    default: void 0
  },
  activeColor: String,
  baseColor: String,
  symbol: {
    type: null,
    default: mi
  },
  flat: Boolean,
  icon: [Boolean, String, Function, Object],
  prependIcon: ue,
  appendIcon: ue,
  block: Boolean,
  readonly: Boolean,
  slim: Boolean,
  stacked: Boolean,
  ripple: {
    type: [Boolean, Object],
    default: !0
  },
  text: {
    type: [String, Number, Boolean],
    default: void 0
  },
  ...st(),
  ...le(),
  ...ze(),
  ...Re(),
  ...je(),
  ...kn(),
  ...tl(),
  ...Rt(),
  ...Wn(),
  ...Ee(),
  ...ma(),
  ...pt(),
  ...ge({
    tag: "button"
  }),
  ...ke(),
  ...St({
    variant: "elevated"
  })
}, "VBtn"), fe = L()({
  name: "VBtn",
  props: nl(),
  emits: {
    "group:selected": (e) => !0
  },
  setup(e, n) {
    let {
      attrs: t,
      slots: a
    } = n;
    const {
      themeClasses: l
    } = Ve(e), {
      borderClasses: i
    } = bt(e), {
      densityClasses: o
    } = Qe(e), {
      dimensionStyles: u
    } = He(e), {
      elevationClasses: s
    } = qe(e), {
      loaderClasses: c
    } = da(e), {
      locationStyles: v
    } = wn(e), {
      positionClasses: f
    } = jn(e), {
      roundedClasses: d
    } = Oe(e), {
      sizeClasses: g,
      sizeStyles: y
    } = zn(e), h = Sn(e, e.symbol, !1), m = fa(e, t), k = b(() => {
      var V;
      return e.active !== void 0 ? e.active : m.isLink.value ? (V = m.isActive) == null ? void 0 : V.value : h == null ? void 0 : h.isSelected.value;
    }), S = b(() => k.value ? e.activeColor ?? e.color : e.color), C = b(() => {
      var x, M;
      return {
        color: (h == null ? void 0 : h.isSelected.value) && (!m.isLink.value || ((x = m.isActive) == null ? void 0 : x.value)) || !h || ((M = m.isActive) == null ? void 0 : M.value) ? S.value ?? e.baseColor : e.baseColor,
        variant: e.variant
      };
    }), {
      colorClasses: T,
      colorStyles: I,
      variantClasses: _
    } = yn(C), D = b(() => (h == null ? void 0 : h.disabled.value) || e.disabled), w = b(() => e.variant === "elevated" && !(e.disabled || e.flat || e.border)), P = b(() => {
      if (!(e.value === void 0 || typeof e.value == "symbol"))
        return Object(e.value) === e.value ? JSON.stringify(e.value, null, 0) : e.value;
    });
    function A(V) {
      var x;
      D.value || m.isLink.value && (V.metaKey || V.ctrlKey || V.shiftKey || V.button !== 0 || t.target === "_blank") || ((x = m.navigate) == null || x.call(m, V), h == null || h.toggle());
    }
    return wf(m, h == null ? void 0 : h.select), z(() => {
      const V = m.isLink.value ? "a" : e.tag, x = !!(e.prependIcon || a.prepend), M = !!(e.appendIcon || a.append), E = !!(e.icon && e.icon !== !0);
      return $e(r(V, O({
        type: V === "a" ? void 0 : "button",
        class: ["v-btn", h == null ? void 0 : h.selectedClass.value, {
          "v-btn--active": k.value,
          "v-btn--block": e.block,
          "v-btn--disabled": D.value,
          "v-btn--elevated": w.value,
          "v-btn--flat": e.flat,
          "v-btn--icon": !!e.icon,
          "v-btn--loading": e.loading,
          "v-btn--readonly": e.readonly,
          "v-btn--slim": e.slim,
          "v-btn--stacked": e.stacked
        }, l.value, i.value, T.value, o.value, s.value, c.value, f.value, d.value, g.value, _.value, e.class],
        style: [I.value, u.value, v.value, y.value, e.style],
        "aria-busy": e.loading ? !0 : void 0,
        disabled: D.value || void 0,
        tabindex: e.loading || e.readonly ? -1 : void 0,
        onClick: A,
        value: P.value
      }, m.linkProps), {
        default: () => {
          var N;
          return [Kt(!0, "v-btn"), !e.icon && x && r("span", {
            key: "prepend",
            class: "v-btn__prepend"
          }, [a.prepend ? r(de, {
            key: "prepend-defaults",
            disabled: !e.prependIcon,
            defaults: {
              VIcon: {
                icon: e.prependIcon
              }
            }
          }, a.prepend) : r(Se, {
            key: "prepend-icon",
            icon: e.prependIcon
          }, null)]), r("span", {
            class: "v-btn__content",
            "data-no-activator": ""
          }, [!a.default && E ? r(Se, {
            key: "content-icon",
            icon: e.icon
          }, null) : r(de, {
            key: "content-defaults",
            disabled: !E,
            defaults: {
              VIcon: {
                icon: e.icon
              }
            }
          }, {
            default: () => {
              var j;
              return [((j = a.default) == null ? void 0 : j.call(a)) ?? sn(e.text)];
            }
          })]), !e.icon && M && r("span", {
            key: "append",
            class: "v-btn__append"
          }, [a.append ? r(de, {
            key: "append-defaults",
            disabled: !e.appendIcon,
            defaults: {
              VIcon: {
                icon: e.appendIcon
              }
            }
          }, a.append) : r(Se, {
            key: "append-icon",
            icon: e.appendIcon
          }, null)]), !!e.loading && r("span", {
            key: "loader",
            class: "v-btn__loader"
          }, [((N = a.loader) == null ? void 0 : N.call(a)) ?? r(dn, {
            color: typeof e.loading == "boolean" ? void 0 : e.loading,
            indeterminate: !0,
            width: "2"
          }, null)])];
        }
      }), [[Xt, !D.value && e.ripple, "", {
        center: !!e.icon
      }]]);
    }), {
      group: h
    };
  }
}), _f = p({
  ...nl({
    icon: "$menu",
    variant: "text"
  })
}, "VAppBarNavIcon"), lk = L()({
  name: "VAppBarNavIcon",
  props: _f(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    return z(() => r(fe, O(e, {
      class: ["v-app-bar-nav-icon"]
    }), t)), {};
  }
}), ik = L()({
  name: "VAppBarTitle",
  props: hu(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    return z(() => r(yu, O(e, {
      class: "v-app-bar-title"
    }), t)), {};
  }
}), Tf = Bt("v-alert-title"), Af = ["success", "info", "warning", "error"], Df = p({
  border: {
    type: [Boolean, String],
    validator: (e) => typeof e == "boolean" || ["top", "end", "bottom", "start"].includes(e)
  },
  borderColor: String,
  closable: Boolean,
  closeIcon: {
    type: ue,
    default: "$close"
  },
  closeLabel: {
    type: String,
    default: "$vuetify.close"
  },
  icon: {
    type: [Boolean, String, Function, Object],
    default: null
  },
  modelValue: {
    type: Boolean,
    default: !0
  },
  prominent: Boolean,
  title: String,
  text: String,
  type: {
    type: String,
    validator: (e) => Af.includes(e)
  },
  ...le(),
  ...ze(),
  ...Re(),
  ...je(),
  ...Rt(),
  ...Wn(),
  ...Ee(),
  ...ge(),
  ...ke(),
  ...St({
    variant: "flat"
  })
}, "VAlert"), ok = L()({
  name: "VAlert",
  props: Df(),
  emits: {
    "click:close": (e) => !0,
    "update:modelValue": (e) => !0
  },
  setup(e, n) {
    let {
      emit: t,
      slots: a
    } = n;
    const l = oe(e, "modelValue"), i = b(() => {
      if (e.icon !== !1)
        return e.type ? e.icon ?? `$${e.type}` : e.icon;
    }), o = b(() => ({
      color: e.color ?? e.type,
      variant: e.variant
    })), {
      themeClasses: u
    } = Ve(e), {
      colorClasses: s,
      colorStyles: c,
      variantClasses: v
    } = yn(o), {
      densityClasses: f
    } = Qe(e), {
      dimensionStyles: d
    } = He(e), {
      elevationClasses: g
    } = qe(e), {
      locationStyles: y
    } = wn(e), {
      positionClasses: h
    } = jn(e), {
      roundedClasses: m
    } = Oe(e), {
      textColorClasses: k,
      textColorStyles: S
    } = Ge($(e, "borderColor")), {
      t: C
    } = Te(), T = b(() => ({
      "aria-label": C(e.closeLabel),
      onClick(I) {
        l.value = !1, t("click:close", I);
      }
    }));
    return () => {
      const I = !!(a.prepend || i.value), _ = !!(a.title || e.title), D = !!(a.close || e.closable);
      return l.value && r(e.tag, {
        class: ["v-alert", e.border && {
          "v-alert--border": !!e.border,
          [`v-alert--border-${e.border === !0 ? "start" : e.border}`]: !0
        }, {
          "v-alert--prominent": e.prominent
        }, u.value, s.value, f.value, g.value, h.value, m.value, v.value, e.class],
        style: [c.value, d.value, y.value, e.style],
        role: "alert"
      }, {
        default: () => {
          var w, P;
          return [Kt(!1, "v-alert"), e.border && r("div", {
            key: "border",
            class: ["v-alert__border", k.value],
            style: S.value
          }, null), I && r("div", {
            key: "prepend",
            class: "v-alert__prepend"
          }, [a.prepend ? r(de, {
            key: "prepend-defaults",
            disabled: !i.value,
            defaults: {
              VIcon: {
                density: e.density,
                icon: i.value,
                size: e.prominent ? 44 : 28
              }
            }
          }, a.prepend) : r(Se, {
            key: "prepend-icon",
            density: e.density,
            icon: i.value,
            size: e.prominent ? 44 : 28
          }, null)]), r("div", {
            class: "v-alert__content"
          }, [_ && r(Tf, {
            key: "title"
          }, {
            default: () => {
              var A;
              return [((A = a.title) == null ? void 0 : A.call(a)) ?? e.title];
            }
          }), ((w = a.text) == null ? void 0 : w.call(a)) ?? e.text, (P = a.default) == null ? void 0 : P.call(a)]), a.append && r("div", {
            key: "append",
            class: "v-alert__append"
          }, [a.append()]), D && r("div", {
            key: "close",
            class: "v-alert__close"
          }, [a.close ? r(de, {
            key: "close-defaults",
            defaults: {
              VBtn: {
                icon: e.closeIcon,
                size: "x-small",
                variant: "text"
              }
            }
          }, {
            default: () => {
              var A;
              return [(A = a.close) == null ? void 0 : A.call(a, {
                props: T.value
              })];
            }
          }) : r(fe, O({
            key: "close-btn",
            icon: e.closeIcon,
            size: "x-small",
            variant: "text"
          }, T.value), null)])];
        }
      });
    };
  }
}), Bf = p({
  start: Boolean,
  end: Boolean,
  icon: ue,
  image: String,
  text: String,
  ...st(),
  ...le(),
  ...ze(),
  ...Ee(),
  ...pt(),
  ...ge(),
  ...ke(),
  ...St({
    variant: "flat"
  })
}, "VAvatar"), ut = L()({
  name: "VAvatar",
  props: Bf(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    const {
      themeClasses: a
    } = Ve(e), {
      borderClasses: l
    } = bt(e), {
      colorClasses: i,
      colorStyles: o,
      variantClasses: u
    } = yn(e), {
      densityClasses: s
    } = Qe(e), {
      roundedClasses: c
    } = Oe(e), {
      sizeClasses: v,
      sizeStyles: f
    } = zn(e);
    return z(() => r(e.tag, {
      class: ["v-avatar", {
        "v-avatar--start": e.start,
        "v-avatar--end": e.end
      }, a.value, l.value, i.value, s.value, c.value, v.value, u.value, e.class],
      style: [o.value, f.value, e.style]
    }, {
      default: () => [t.default ? r(de, {
        key: "content-defaults",
        defaults: {
          VImg: {
            cover: !0,
            src: e.image
          },
          VIcon: {
            icon: e.icon
          }
        }
      }, {
        default: () => [t.default()]
      }) : e.image ? r(jt, {
        key: "image",
        src: e.image,
        alt: "",
        cover: !0
      }, null) : e.icon ? r(Se, {
        key: "icon",
        icon: e.icon
      }, null) : e.text, Kt(!1, "v-avatar")]
    })), {};
  }
}), Mf = p({
  text: String,
  onClick: Ye(),
  ...le(),
  ...ke()
}, "VLabel"), ga = L()({
  name: "VLabel",
  props: Mf(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    return z(() => {
      var a;
      return r("label", {
        class: ["v-label", {
          "v-label--clickable": !!e.onClick
        }, e.class],
        style: e.style,
        onClick: e.onClick
      }, [e.text, (a = t.default) == null ? void 0 : a.call(t)]);
    }), {};
  }
}), Ou = Symbol.for("vuetify:selection-control-group"), hi = p({
  color: String,
  disabled: {
    type: Boolean,
    default: null
  },
  defaultsTarget: String,
  error: Boolean,
  id: String,
  inline: Boolean,
  falseIcon: ue,
  trueIcon: ue,
  ripple: {
    type: [Boolean, Object],
    default: !0
  },
  multiple: {
    type: Boolean,
    default: null
  },
  name: String,
  readonly: {
    type: Boolean,
    default: null
  },
  modelValue: null,
  type: String,
  valueComparator: {
    type: Function,
    default: nt
  },
  ...le(),
  ...ze(),
  ...ke()
}, "SelectionControlGroup"), pf = p({
  ...hi({
    defaultsTarget: "VSelectionControl"
  })
}, "VSelectionControlGroup"), Ef = L()({
  name: "VSelectionControlGroup",
  props: pf(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, n) {
    let {
      slots: t
    } = n;
    const a = oe(e, "modelValue"), l = Ke(), i = b(() => e.id || `v-selection-control-group-${l}`), o = b(() => e.name || i.value), u = /* @__PURE__ */ new Set();
    return De(Ou, {
      modelValue: a,
      forceUpdate: () => {
        u.forEach((s) => s());
      },
      onForceUpdate: (s) => {
        u.add(s), Xe(() => {
          u.delete(s);
        });
      }
    }), pe({
      [e.defaultsTarget]: {
        color: $(e, "color"),
        disabled: $(e, "disabled"),
        density: $(e, "density"),
        error: $(e, "error"),
        inline: $(e, "inline"),
        modelValue: a,
        multiple: b(() => !!e.multiple || e.multiple == null && Array.isArray(a.value)),
        name: o,
        falseIcon: $(e, "falseIcon"),
        trueIcon: $(e, "trueIcon"),
        readonly: $(e, "readonly"),
        ripple: $(e, "ripple"),
        type: $(e, "type"),
        valueComparator: $(e, "valueComparator")
      }
    }), z(() => {
      var s;
      return r("div", {
        class: ["v-selection-control-group", {
          "v-selection-control-group--inline": e.inline
        }, e.class],
        style: e.style,
        role: e.type === "radio" ? "radiogroup" : void 0
      }, [(s = t.default) == null ? void 0 : s.call(t)]);
    }), {};
  }
}), al = p({
  label: String,
  baseColor: String,
  trueValue: null,
  falseValue: null,
  value: null,
  ...le(),
  ...hi()
}, "VSelectionControl");
function Ff(e) {
  const n = be(Ou, void 0), {
    densityClasses: t
  } = Qe(e), a = oe(e, "modelValue"), l = b(() => e.trueValue !== void 0 ? e.trueValue : e.value !== void 0 ? e.value : !0), i = b(() => e.falseValue !== void 0 ? e.falseValue : !1), o = b(() => !!e.multiple || e.multiple == null && Array.isArray(a.value)), u = b({
    get() {
      const g = n ? n.modelValue.value : a.value;
      return o.value ? Ae(g).some((y) => e.valueComparator(y, l.value)) : e.valueComparator(g, l.value);
    },
    set(g) {
      if (e.readonly) return;
      const y = g ? l.value : i.value;
      let h = y;
      o.value && (h = g ? [...Ae(a.value), y] : Ae(a.value).filter((m) => !e.valueComparator(m, l.value))), n ? n.modelValue.value = h : a.value = h;
    }
  }), {
    textColorClasses: s,
    textColorStyles: c
  } = Ge(b(() => {
    if (!(e.error || e.disabled))
      return u.value ? e.color : e.baseColor;
  })), {
    backgroundColorClasses: v,
    backgroundColorStyles: f
  } = Pe(b(() => u.value && !e.error && !e.disabled ? e.color : e.baseColor)), d = b(() => u.value ? e.trueIcon : e.falseIcon);
  return {
    group: n,
    densityClasses: t,
    trueValue: l,
    falseValue: i,
    model: u,
    textColorClasses: s,
    textColorStyles: c,
    backgroundColorClasses: v,
    backgroundColorStyles: f,
    icon: d
  };
}
const vn = L()({
  name: "VSelectionControl",
  directives: {
    Ripple: Xt
  },
  inheritAttrs: !1,
  props: al(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, n) {
    let {
      attrs: t,
      slots: a
    } = n;
    const {
      group: l,
      densityClasses: i,
      icon: o,
      model: u,
      textColorClasses: s,
      textColorStyles: c,
      backgroundColorClasses: v,
      backgroundColorStyles: f,
      trueValue: d
    } = Ff(e), g = Ke(), y = G(!1), h = G(!1), m = U(), k = b(() => e.id || `input-${g}`), S = b(() => !e.disabled && !e.readonly);
    l == null || l.onForceUpdate(() => {
      m.value && (m.value.checked = u.value);
    });
    function C(D) {
      S.value && (y.value = !0, Dn(D.target, ":focus-visible") !== !1 && (h.value = !0));
    }
    function T() {
      y.value = !1, h.value = !1;
    }
    function I(D) {
      D.stopPropagation();
    }
    function _(D) {
      if (!S.value) {
        m.value && (m.value.checked = u.value);
        return;
      }
      e.readonly && l && we(() => l.forceUpdate()), u.value = D.target.checked;
    }
    return z(() => {
      var V, x;
      const D = a.label ? a.label({
        label: e.label,
        props: {
          for: k.value
        }
      }) : e.label, [w, P] = Nt(t), A = r("input", O({
        ref: m,
        checked: u.value,
        disabled: !!e.disabled,
        id: k.value,
        onBlur: T,
        onFocus: C,
        onInput: _,
        "aria-disabled": !!e.disabled,
        "aria-label": e.label,
        type: e.type,
        value: d.value,
        name: e.name,
        "aria-checked": e.type === "checkbox" ? u.value : void 0
      }, P), null);
      return r("div", O({
        class: ["v-selection-control", {
          "v-selection-control--dirty": u.value,
          "v-selection-control--disabled": e.disabled,
          "v-selection-control--error": e.error,
          "v-selection-control--focused": y.value,
          "v-selection-control--focus-visible": h.value,
          "v-selection-control--inline": e.inline
        }, i.value, e.class]
      }, w, {
        style: e.style
      }), [r("div", {
        class: ["v-selection-control__wrapper", s.value],
        style: c.value
      }, [(V = a.default) == null ? void 0 : V.call(a, {
        backgroundColorClasses: v,
        backgroundColorStyles: f
      }), $e(r("div", {
        class: ["v-selection-control__input"]
      }, [((x = a.input) == null ? void 0 : x.call(a, {
        model: u,
        textColorClasses: s,
        textColorStyles: c,
        backgroundColorClasses: v,
        backgroundColorStyles: f,
        inputNode: A,
        icon: o.value,
        props: {
          onFocus: C,
          onBlur: T,
          id: k.value
        }
      })) ?? r(ie, null, [o.value && r(Se, {
        key: "icon",
        icon: o.value
      }, null), A])]), [[mt("ripple"), e.ripple && [!e.disabled && !e.readonly, null, ["center", "circle"]]]])]), D && r(ga, {
        for: k.value,
        onClick: I
      }, {
        default: () => [D]
      })]);
    }), {
      isFocused: y,
      input: m
    };
  }
}), Nu = p({
  indeterminate: Boolean,
  indeterminateIcon: {
    type: ue,
    default: "$checkboxIndeterminate"
  },
  ...al({
    falseIcon: "$checkboxOff",
    trueIcon: "$checkboxOn"
  })
}, "VCheckboxBtn"), $t = L()({
  name: "VCheckboxBtn",
  props: Nu(),
  emits: {
    "update:modelValue": (e) => !0,
    "update:indeterminate": (e) => !0
  },
  setup(e, n) {
    let {
      slots: t
    } = n;
    const a = oe(e, "indeterminate"), l = oe(e, "modelValue");
    function i(s) {
      a.value && (a.value = !1);
    }
    const o = b(() => a.value ? e.indeterminateIcon : e.falseIcon), u = b(() => a.value ? e.indeterminateIcon : e.trueIcon);
    return z(() => {
      const s = Ce(vn.filterProps(e), ["modelValue"]);
      return r(vn, O(s, {
        modelValue: l.value,
        "onUpdate:modelValue": [(c) => l.value = c, i],
        class: ["v-checkbox-btn", e.class],
        style: e.style,
        type: "checkbox",
        falseIcon: o.value,
        trueIcon: u.value,
        "aria-checked": a.value ? "mixed" : void 0
      }), t);
    }), {};
  }
});
function Ru(e) {
  const {
    t: n
  } = Te();
  function t(a) {
    let {
      name: l
    } = a;
    const i = {
      prepend: "prependAction",
      prependInner: "prependAction",
      append: "appendAction",
      appendInner: "appendAction",
      clear: "clear"
    }[l], o = e[`onClick:${l}`];
    function u(c) {
      c.key !== "Enter" && c.key !== " " || (c.preventDefault(), c.stopPropagation(), Ga(o, new PointerEvent("click", c)));
    }
    const s = o && i ? n(`$vuetify.input.${i}`, e.label ?? "") : void 0;
    return r(Se, {
      icon: e[`${l}Icon`],
      "aria-label": s,
      onClick: o,
      onKeydown: u
    }, null);
  }
  return {
    InputIcon: t
  };
}
const $f = p({
  active: Boolean,
  color: String,
  messages: {
    type: [Array, String],
    default: () => []
  },
  ...le(),
  ...Vt({
    transition: {
      component: wu,
      leaveAbsolute: !0,
      group: !0
    }
  })
}, "VMessages"), Lf = L()({
  name: "VMessages",
  props: $f(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    const a = b(() => Ae(e.messages)), {
      textColorClasses: l,
      textColorStyles: i
    } = Ge(b(() => e.color));
    return z(() => r(tt, {
      transition: e.transition,
      tag: "div",
      class: ["v-messages", l.value, e.class],
      style: [i.value, e.style]
    }, {
      default: () => [e.active && a.value.map((o, u) => r("div", {
        class: "v-messages__message",
        key: `${u}-${a.value}`
      }, [t.message ? t.message({
        message: o
      }) : o]))]
    })), {};
  }
}), Un = p({
  focused: Boolean,
  "onUpdate:focused": Ye()
}, "focus");
function Pt(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Dt();
  const t = oe(e, "focused"), a = b(() => ({
    [`${n}--focused`]: t.value
  }));
  function l() {
    t.value = !0;
  }
  function i() {
    t.value = !1;
  }
  return {
    focusClasses: a,
    isFocused: t,
    focus: l,
    blur: i
  };
}
const Hu = Symbol.for("vuetify:form"), Of = p({
  disabled: Boolean,
  fastFail: Boolean,
  readonly: Boolean,
  modelValue: {
    type: Boolean,
    default: null
  },
  validateOn: {
    type: String,
    default: "input"
  }
}, "form");
function Nf(e) {
  const n = oe(e, "modelValue"), t = b(() => e.disabled), a = b(() => e.readonly), l = G(!1), i = U([]), o = U([]);
  async function u() {
    const v = [];
    let f = !0;
    o.value = [], l.value = !0;
    for (const d of i.value) {
      const g = await d.validate();
      if (g.length > 0 && (f = !1, v.push({
        id: d.id,
        errorMessages: g
      })), !f && e.fastFail) break;
    }
    return o.value = v, l.value = !1, {
      valid: f,
      errors: o.value
    };
  }
  function s() {
    i.value.forEach((v) => v.reset());
  }
  function c() {
    i.value.forEach((v) => v.resetValidation());
  }
  return J(i, () => {
    let v = 0, f = 0;
    const d = [];
    for (const g of i.value)
      g.isValid === !1 ? (f++, d.push({
        id: g.id,
        errorMessages: g.errorMessages
      })) : g.isValid === !0 && v++;
    o.value = d, n.value = f > 0 ? !1 : v === i.value.length ? !0 : null;
  }, {
    deep: !0,
    flush: "post"
  }), De(Hu, {
    register: (v) => {
      let {
        id: f,
        vm: d,
        validate: g,
        reset: y,
        resetValidation: h
      } = v;
      i.value.some((m) => m.id === f) && wt(`Duplicate input name "${f}"`), i.value.push({
        id: f,
        validate: g,
        reset: y,
        resetValidation: h,
        vm: Yc(d),
        isValid: null,
        errorMessages: []
      });
    },
    unregister: (v) => {
      i.value = i.value.filter((f) => f.id !== v);
    },
    update: (v, f, d) => {
      const g = i.value.find((y) => y.id === v);
      g && (g.isValid = f, g.errorMessages = d);
    },
    isDisabled: t,
    isReadonly: a,
    isValidating: l,
    isValid: n,
    items: i,
    validateOn: $(e, "validateOn")
  }), {
    errors: o,
    isDisabled: t,
    isReadonly: a,
    isValidating: l,
    isValid: n,
    items: i,
    validate: u,
    reset: s,
    resetValidation: c
  };
}
function ha(e) {
  const n = be(Hu, null);
  return {
    ...n,
    isReadonly: b(() => !!((e == null ? void 0 : e.readonly) ?? (n == null ? void 0 : n.isReadonly.value))),
    isDisabled: b(() => !!((e == null ? void 0 : e.disabled) ?? (n == null ? void 0 : n.isDisabled.value)))
  };
}
const zu = p({
  disabled: {
    type: Boolean,
    default: null
  },
  error: Boolean,
  errorMessages: {
    type: [Array, String],
    default: () => []
  },
  maxErrors: {
    type: [Number, String],
    default: 1
  },
  name: String,
  label: String,
  readonly: {
    type: Boolean,
    default: null
  },
  rules: {
    type: Array,
    default: () => []
  },
  modelValue: null,
  validateOn: String,
  validationValue: null,
  ...Un()
}, "validation");
function Wu(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Dt(), t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Ke();
  const a = oe(e, "modelValue"), l = b(() => e.validationValue === void 0 ? a.value : e.validationValue), i = ha(e), o = U([]), u = G(!0), s = b(() => !!(Ae(a.value === "" ? null : a.value).length || Ae(l.value === "" ? null : l.value).length)), c = b(() => {
    var C;
    return (C = e.errorMessages) != null && C.length ? Ae(e.errorMessages).concat(o.value).slice(0, Math.max(0, Number(e.maxErrors))) : o.value;
  }), v = b(() => {
    var I;
    let C = (e.validateOn ?? ((I = i.validateOn) == null ? void 0 : I.value)) || "input";
    C === "lazy" && (C = "input lazy"), C === "eager" && (C = "input eager");
    const T = new Set((C == null ? void 0 : C.split(" ")) ?? []);
    return {
      input: T.has("input"),
      blur: T.has("blur") || T.has("input") || T.has("invalid-input"),
      invalidInput: T.has("invalid-input"),
      lazy: T.has("lazy"),
      eager: T.has("eager")
    };
  }), f = b(() => {
    var C;
    return e.error || (C = e.errorMessages) != null && C.length ? !1 : e.rules.length ? u.value ? o.value.length || v.value.lazy ? null : !0 : !o.value.length : !0;
  }), d = G(!1), g = b(() => ({
    [`${n}--error`]: f.value === !1,
    [`${n}--dirty`]: s.value,
    [`${n}--disabled`]: i.isDisabled.value,
    [`${n}--readonly`]: i.isReadonly.value
  })), y = Le("validation"), h = b(() => e.name ?? it(t));
  sa(() => {
    var C;
    (C = i.register) == null || C.call(i, {
      id: h.value,
      vm: y,
      validate: S,
      reset: m,
      resetValidation: k
    });
  }), Ze(() => {
    var C;
    (C = i.unregister) == null || C.call(i, h.value);
  }), Ue(async () => {
    var C;
    v.value.lazy || await S(!v.value.eager), (C = i.update) == null || C.call(i, h.value, f.value, c.value);
  }), ot(() => v.value.input || v.value.invalidInput && f.value === !1, () => {
    J(l, () => {
      if (l.value != null)
        S();
      else if (e.focused) {
        const C = J(() => e.focused, (T) => {
          T || S(), C();
        });
      }
    });
  }), ot(() => v.value.blur, () => {
    J(() => e.focused, (C) => {
      C || S();
    });
  }), J([f, c], () => {
    var C;
    (C = i.update) == null || C.call(i, h.value, f.value, c.value);
  });
  async function m() {
    a.value = null, await we(), await k();
  }
  async function k() {
    u.value = !0, v.value.lazy ? o.value = [] : await S(!v.value.eager);
  }
  async function S() {
    let C = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1;
    const T = [];
    d.value = !0;
    for (const I of e.rules) {
      if (T.length >= Number(e.maxErrors ?? 1))
        break;
      const D = await (typeof I == "function" ? I : () => I)(l.value);
      if (D !== !0) {
        if (D !== !1 && typeof D != "string") {
          console.warn(`${D} is not a valid value. Rule functions must return boolean true or a string.`);
          continue;
        }
        T.push(D || "");
      }
    }
    return o.value = T, d.value = !1, u.value = C, o.value;
  }
  return {
    errorMessages: c,
    isDirty: s,
    isDisabled: i.isDisabled,
    isReadonly: i.isReadonly,
    isPristine: u,
    isValid: f,
    isValidating: d,
    reset: m,
    resetValidation: k,
    validate: S,
    validationClasses: g
  };
}
const Ht = p({
  id: String,
  appendIcon: ue,
  centerAffix: {
    type: Boolean,
    default: !0
  },
  prependIcon: ue,
  hideDetails: [Boolean, String],
  hideSpinButtons: Boolean,
  hint: String,
  persistentHint: Boolean,
  messages: {
    type: [Array, String],
    default: () => []
  },
  direction: {
    type: String,
    default: "horizontal",
    validator: (e) => ["horizontal", "vertical"].includes(e)
  },
  "onClick:prepend": Ye(),
  "onClick:append": Ye(),
  ...le(),
  ...ze(),
  ...Ot(Re(), ["maxWidth", "minWidth", "width"]),
  ...ke(),
  ...zu()
}, "VInput"), at = L()({
  name: "VInput",
  props: {
    ...Ht()
  },
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, n) {
    let {
      attrs: t,
      slots: a,
      emit: l
    } = n;
    const {
      densityClasses: i
    } = Qe(e), {
      dimensionStyles: o
    } = He(e), {
      themeClasses: u
    } = Ve(e), {
      rtlClasses: s
    } = We(), {
      InputIcon: c
    } = Ru(e), v = Ke(), f = b(() => e.id || `input-${v}`), d = b(() => `${f.value}-messages`), {
      errorMessages: g,
      isDirty: y,
      isDisabled: h,
      isReadonly: m,
      isPristine: k,
      isValid: S,
      isValidating: C,
      reset: T,
      resetValidation: I,
      validate: _,
      validationClasses: D
    } = Wu(e, "v-input", f), w = b(() => ({
      id: f,
      messagesId: d,
      isDirty: y,
      isDisabled: h,
      isReadonly: m,
      isPristine: k,
      isValid: S,
      isValidating: C,
      reset: T,
      resetValidation: I,
      validate: _
    })), P = b(() => {
      var A;
      return (A = e.errorMessages) != null && A.length || !k.value && g.value.length ? g.value : e.hint && (e.persistentHint || e.focused) ? e.hint : e.messages;
    });
    return z(() => {
      var E, N, j, ee;
      const A = !!(a.prepend || e.prependIcon), V = !!(a.append || e.appendIcon), x = P.value.length > 0, M = !e.hideDetails || e.hideDetails === "auto" && (x || !!a.details);
      return r("div", {
        class: ["v-input", `v-input--${e.direction}`, {
          "v-input--center-affix": e.centerAffix,
          "v-input--hide-spin-buttons": e.hideSpinButtons
        }, i.value, u.value, s.value, D.value, e.class],
        style: [o.value, e.style]
      }, [A && r("div", {
        key: "prepend",
        class: "v-input__prepend"
      }, [(E = a.prepend) == null ? void 0 : E.call(a, w.value), e.prependIcon && r(c, {
        key: "prepend-icon",
        name: "prepend"
      }, null)]), a.default && r("div", {
        class: "v-input__control"
      }, [(N = a.default) == null ? void 0 : N.call(a, w.value)]), V && r("div", {
        key: "append",
        class: "v-input__append"
      }, [e.appendIcon && r(c, {
        key: "append-icon",
        name: "append"
      }, null), (j = a.append) == null ? void 0 : j.call(a, w.value)]), M && r("div", {
        id: d.value,
        class: "v-input__details",
        role: "alert",
        "aria-live": "polite"
      }, [r(Lf, {
        active: x,
        messages: P.value
      }, {
        message: a.message
      }), (ee = a.details) == null ? void 0 : ee.call(a, w.value)])]);
    }), {
      reset: T,
      resetValidation: I,
      validate: _,
      isValid: S,
      errorMessages: g
    };
  }
}), Rf = p({
  ...Ht(),
  ...Ce(Nu(), ["inline"])
}, "VCheckbox"), rk = L()({
  name: "VCheckbox",
  inheritAttrs: !1,
  props: Rf(),
  emits: {
    "update:modelValue": (e) => !0,
    "update:focused": (e) => !0
  },
  setup(e, n) {
    let {
      attrs: t,
      slots: a
    } = n;
    const l = oe(e, "modelValue"), {
      isFocused: i,
      focus: o,
      blur: u
    } = Pt(e), s = Ke(), c = b(() => e.id || `checkbox-${s}`);
    return z(() => {
      const [v, f] = Nt(t), d = at.filterProps(e), g = $t.filterProps(e);
      return r(at, O({
        class: ["v-checkbox", e.class]
      }, v, d, {
        modelValue: l.value,
        "onUpdate:modelValue": (y) => l.value = y,
        id: c.value,
        focused: i.value,
        style: e.style
      }), {
        ...a,
        default: (y) => {
          let {
            id: h,
            messagesId: m,
            isDisabled: k,
            isReadonly: S,
            isValid: C
          } = y;
          return r($t, O(g, {
            id: h.value,
            "aria-describedby": m.value,
            disabled: k.value,
            readonly: S.value
          }, f, {
            error: C.value === !1,
            modelValue: l.value,
            "onUpdate:modelValue": (T) => l.value = T,
            onFocus: o,
            onBlur: u
          }), a);
        }
      });
    }), {};
  }
});
function Hf(e) {
  let {
    selectedElement: n,
    containerElement: t,
    isRtl: a,
    isHorizontal: l
  } = e;
  const i = ia(l, t), o = ju(l, a, t), u = ia(l, n), s = Uu(l, n), c = u * 0.4;
  return o > s ? s - c : o + i < s + u ? s - i + u + c : o;
}
function zf(e) {
  let {
    selectedElement: n,
    containerElement: t,
    isHorizontal: a
  } = e;
  const l = ia(a, t), i = Uu(a, n), o = ia(a, n);
  return i - l / 2 + o / 2;
}
function No(e, n) {
  const t = e ? "scrollWidth" : "scrollHeight";
  return (n == null ? void 0 : n[t]) || 0;
}
function Wf(e, n) {
  const t = e ? "clientWidth" : "clientHeight";
  return (n == null ? void 0 : n[t]) || 0;
}
function ju(e, n, t) {
  if (!t)
    return 0;
  const {
    scrollLeft: a,
    offsetWidth: l,
    scrollWidth: i
  } = t;
  return e ? n ? i - l + a : a : t.scrollTop;
}
function ia(e, n) {
  const t = e ? "offsetWidth" : "offsetHeight";
  return (n == null ? void 0 : n[t]) || 0;
}
function Uu(e, n) {
  const t = e ? "offsetLeft" : "offsetTop";
  return (n == null ? void 0 : n[t]) || 0;
}
const Yu = Symbol.for("vuetify:v-slide-group"), yi = p({
  centerActive: Boolean,
  direction: {
    type: String,
    default: "horizontal"
  },
  symbol: {
    type: null,
    default: Yu
  },
  nextIcon: {
    type: ue,
    default: "$next"
  },
  prevIcon: {
    type: ue,
    default: "$prev"
  },
  showArrows: {
    type: [Boolean, String],
    validator: (e) => typeof e == "boolean" || ["always", "desktop", "mobile"].includes(e)
  },
  ...le(),
  ...Gt({
    mobile: null
  }),
  ...ge(),
  ...bn({
    selectedClass: "v-slide-group-item--active"
  })
}, "VSlideGroup"), Oa = L()({
  name: "VSlideGroup",
  props: yi(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, n) {
    let {
      slots: t
    } = n;
    const {
      isRtl: a
    } = We(), {
      displayClasses: l,
      mobile: i
    } = ht(e), o = qt(e, e.symbol), u = G(!1), s = G(0), c = G(0), v = G(0), f = b(() => e.direction === "horizontal"), {
      resizeRef: d,
      contentRect: g
    } = xt(), {
      resizeRef: y,
      contentRect: h
    } = xt(), m = Hv(), k = b(() => ({
      container: d.el,
      duration: 200,
      easing: "easeOutQuart"
    })), S = b(() => o.selected.value.length ? o.items.value.findIndex((B) => B.id === o.selected.value[0]) : -1), C = b(() => o.selected.value.length ? o.items.value.findIndex((B) => B.id === o.selected.value[o.selected.value.length - 1]) : -1);
    if (xe) {
      let B = -1;
      J(() => [o.selected.value, g.value, h.value, f.value], () => {
        cancelAnimationFrame(B), B = requestAnimationFrame(() => {
          if (g.value && h.value) {
            const H = f.value ? "width" : "height";
            c.value = g.value[H], v.value = h.value[H], u.value = c.value + 1 < v.value;
          }
          if (S.value >= 0 && y.el) {
            const H = y.el.children[C.value];
            I(H, e.centerActive);
          }
        });
      });
    }
    const T = G(!1);
    function I(B, H) {
      let Z = 0;
      H ? Z = zf({
        containerElement: d.el,
        isHorizontal: f.value,
        selectedElement: B
      }) : Z = Hf({
        containerElement: d.el,
        isHorizontal: f.value,
        isRtl: a.value,
        selectedElement: B
      }), _(Z);
    }
    function _(B) {
      if (!xe || !d.el) return;
      const H = ia(f.value, d.el), Z = ju(f.value, a.value, d.el);
      if (!(No(f.value, d.el) <= H || // Prevent scrolling by only a couple of pixels, which doesn't look smooth
      Math.abs(B - Z) < 16)) {
        if (f.value && a.value && d.el) {
          const {
            scrollWidth: re,
            offsetWidth: X
          } = d.el;
          B = re - X - B;
        }
        f.value ? m.horizontal(B, k.value) : m(B, k.value);
      }
    }
    function D(B) {
      const {
        scrollTop: H,
        scrollLeft: Z
      } = B.target;
      s.value = f.value ? Z : H;
    }
    function w(B) {
      if (T.value = !0, !(!u.value || !y.el)) {
        for (const H of B.composedPath())
          for (const Z of y.el.children)
            if (Z === H) {
              I(Z);
              return;
            }
      }
    }
    function P(B) {
      T.value = !1;
    }
    let A = !1;
    function V(B) {
      var H;
      !A && !T.value && !(B.relatedTarget && ((H = y.el) != null && H.contains(B.relatedTarget))) && N(), A = !1;
    }
    function x() {
      A = !0;
    }
    function M(B) {
      if (!y.el) return;
      function H(Z) {
        B.preventDefault(), N(Z);
      }
      f.value ? B.key === "ArrowRight" ? H(a.value ? "prev" : "next") : B.key === "ArrowLeft" && H(a.value ? "next" : "prev") : B.key === "ArrowDown" ? H("next") : B.key === "ArrowUp" && H("prev"), B.key === "Home" ? H("first") : B.key === "End" && H("last");
    }
    function E(B, H) {
      if (!B) return;
      let Z = B;
      do
        Z = Z == null ? void 0 : Z[H === "next" ? "nextElementSibling" : "previousElementSibling"];
      while (Z != null && Z.hasAttribute("disabled"));
      return Z;
    }
    function N(B) {
      if (!y.el) return;
      let H;
      if (!B)
        H = Qn(y.el)[0];
      else if (B === "next") {
        if (H = E(y.el.querySelector(":focus"), B), !H) return N("first");
      } else if (B === "prev") {
        if (H = E(y.el.querySelector(":focus"), B), !H) return N("last");
      } else B === "first" ? (H = y.el.firstElementChild, H != null && H.hasAttribute("disabled") && (H = E(H, "next"))) : B === "last" && (H = y.el.lastElementChild, H != null && H.hasAttribute("disabled") && (H = E(H, "prev")));
      H && H.focus({
        preventScroll: !0
      });
    }
    function j(B) {
      const H = f.value && a.value ? -1 : 1, Z = (B === "prev" ? -H : H) * c.value;
      let Q = s.value + Z;
      if (f.value && a.value && d.el) {
        const {
          scrollWidth: re,
          offsetWidth: X
        } = d.el;
        Q += re - X;
      }
      _(Q);
    }
    const ee = b(() => ({
      next: o.next,
      prev: o.prev,
      select: o.select,
      isSelected: o.isSelected
    })), W = b(() => {
      switch (e.showArrows) {
        // Always show arrows on desktop & mobile
        case "always":
          return !0;
        // Always show arrows on desktop
        case "desktop":
          return !i.value;
        // Show arrows on mobile when overflowing.
        // This matches the default 2.2 behavior
        case !0:
          return u.value || Math.abs(s.value) > 0;
        // Always show on mobile
        case "mobile":
          return i.value || u.value || Math.abs(s.value) > 0;
        // https://material.io/components/tabs#scrollable-tabs
        // Always show arrows when
        // overflowed on desktop
        default:
          return !i.value && (u.value || Math.abs(s.value) > 0);
      }
    }), R = b(() => Math.abs(s.value) > 1), F = b(() => {
      if (!d.value) return !1;
      const B = No(f.value, d.el), H = Wf(f.value, d.el);
      return B - H - Math.abs(s.value) > 1;
    });
    return z(() => r(e.tag, {
      class: ["v-slide-group", {
        "v-slide-group--vertical": !f.value,
        "v-slide-group--has-affixes": W.value,
        "v-slide-group--is-overflowing": u.value
      }, l.value, e.class],
      style: e.style,
      tabindex: T.value || o.selected.value.length ? -1 : 0,
      onFocus: V
    }, {
      default: () => {
        var B, H, Z;
        return [W.value && r("div", {
          key: "prev",
          class: ["v-slide-group__prev", {
            "v-slide-group__prev--disabled": !R.value
          }],
          onMousedown: x,
          onClick: () => R.value && j("prev")
        }, [((B = t.prev) == null ? void 0 : B.call(t, ee.value)) ?? r($a, null, {
          default: () => [r(Se, {
            icon: a.value ? e.nextIcon : e.prevIcon
          }, null)]
        })]), r("div", {
          key: "container",
          ref: d,
          class: "v-slide-group__container",
          onScroll: D
        }, [r("div", {
          ref: y,
          class: "v-slide-group__content",
          onFocusin: w,
          onFocusout: P,
          onKeydown: M
        }, [(H = t.default) == null ? void 0 : H.call(t, ee.value)])]), W.value && r("div", {
          key: "next",
          class: ["v-slide-group__next", {
            "v-slide-group__next--disabled": !F.value
          }],
          onMousedown: x,
          onClick: () => F.value && j("next")
        }, [((Z = t.next) == null ? void 0 : Z.call(t, ee.value)) ?? r($a, null, {
          default: () => [r(Se, {
            icon: a.value ? e.prevIcon : e.nextIcon
          }, null)]
        })])];
      }
    })), {
      selected: o.selected,
      scrollTo: j,
      scrollOffset: s,
      focus: N,
      hasPrev: R,
      hasNext: F
    };
  }
}), Gu = Symbol.for("vuetify:v-chip-group"), jf = p({
  column: Boolean,
  filter: Boolean,
  valueComparator: {
    type: Function,
    default: nt
  },
  ...yi(),
  ...le(),
  ...bn({
    selectedClass: "v-chip--selected"
  }),
  ...ge(),
  ...ke(),
  ...St({
    variant: "tonal"
  })
}, "VChipGroup"), uk = L()({
  name: "VChipGroup",
  props: jf(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, n) {
    let {
      slots: t
    } = n;
    const {
      themeClasses: a
    } = Ve(e), {
      isSelected: l,
      select: i,
      next: o,
      prev: u,
      selected: s
    } = qt(e, Gu);
    return pe({
      VChip: {
        color: $(e, "color"),
        disabled: $(e, "disabled"),
        filter: $(e, "filter"),
        variant: $(e, "variant")
      }
    }), z(() => {
      const c = Oa.filterProps(e);
      return r(Oa, O(c, {
        class: ["v-chip-group", {
          "v-chip-group--column": e.column
        }, a.value, e.class],
        style: e.style
      }), {
        default: () => {
          var v;
          return [(v = t.default) == null ? void 0 : v.call(t, {
            isSelected: l,
            select: i,
            next: o,
            prev: u,
            selected: s.value
          })];
        }
      });
    }), {};
  }
}), Uf = p({
  activeClass: String,
  appendAvatar: String,
  appendIcon: ue,
  closable: Boolean,
  closeIcon: {
    type: ue,
    default: "$delete"
  },
  closeLabel: {
    type: String,
    default: "$vuetify.close"
  },
  draggable: Boolean,
  filter: Boolean,
  filterIcon: {
    type: ue,
    default: "$complete"
  },
  label: Boolean,
  link: {
    type: Boolean,
    default: void 0
  },
  pill: Boolean,
  prependAvatar: String,
  prependIcon: ue,
  ripple: {
    type: [Boolean, Object],
    default: !0
  },
  text: {
    type: [String, Number, Boolean],
    default: void 0
  },
  modelValue: {
    type: Boolean,
    default: !0
  },
  onClick: Ye(),
  onClickOnce: Ye(),
  ...st(),
  ...le(),
  ...ze(),
  ...je(),
  ...kn(),
  ...Ee(),
  ...ma(),
  ...pt(),
  ...ge({
    tag: "span"
  }),
  ...ke(),
  ...St({
    variant: "tonal"
  })
}, "VChip"), Yn = L()({
  name: "VChip",
  directives: {
    Ripple: Xt
  },
  props: Uf(),
  emits: {
    "click:close": (e) => !0,
    "update:modelValue": (e) => !0,
    "group:selected": (e) => !0,
    click: (e) => !0
  },
  setup(e, n) {
    let {
      attrs: t,
      emit: a,
      slots: l
    } = n;
    const {
      t: i
    } = Te(), {
      borderClasses: o
    } = bt(e), {
      colorClasses: u,
      colorStyles: s,
      variantClasses: c
    } = yn(e), {
      densityClasses: v
    } = Qe(e), {
      elevationClasses: f
    } = qe(e), {
      roundedClasses: d
    } = Oe(e), {
      sizeClasses: g
    } = zn(e), {
      themeClasses: y
    } = Ve(e), h = oe(e, "modelValue"), m = Sn(e, Gu, !1), k = fa(e, t), S = b(() => e.link !== !1 && k.isLink.value), C = b(() => !e.disabled && e.link !== !1 && (!!m || e.link || k.isClickable.value)), T = b(() => ({
      "aria-label": i(e.closeLabel),
      onClick(D) {
        D.preventDefault(), D.stopPropagation(), h.value = !1, a("click:close", D);
      }
    }));
    function I(D) {
      var w;
      a("click", D), C.value && ((w = k.navigate) == null || w.call(k, D), m == null || m.toggle());
    }
    function _(D) {
      (D.key === "Enter" || D.key === " ") && (D.preventDefault(), I(D));
    }
    return () => {
      var N;
      const D = k.isLink.value ? "a" : e.tag, w = !!(e.appendIcon || e.appendAvatar), P = !!(w || l.append), A = !!(l.close || e.closable), V = !!(l.filter || e.filter) && m, x = !!(e.prependIcon || e.prependAvatar), M = !!(x || l.prepend), E = !m || m.isSelected.value;
      return h.value && $e(r(D, O({
        class: ["v-chip", {
          "v-chip--disabled": e.disabled,
          "v-chip--label": e.label,
          "v-chip--link": C.value,
          "v-chip--filter": V,
          "v-chip--pill": e.pill,
          [`${e.activeClass}`]: e.activeClass && ((N = k.isActive) == null ? void 0 : N.value)
        }, y.value, o.value, E ? u.value : void 0, v.value, f.value, d.value, g.value, c.value, m == null ? void 0 : m.selectedClass.value, e.class],
        style: [E ? s.value : void 0, e.style],
        disabled: e.disabled || void 0,
        draggable: e.draggable,
        tabindex: C.value ? 0 : void 0,
        onClick: I,
        onKeydown: C.value && !S.value && _
      }, k.linkProps), {
        default: () => {
          var j;
          return [Kt(C.value, "v-chip"), V && r(xu, {
            key: "filter"
          }, {
            default: () => [$e(r("div", {
              class: "v-chip__filter"
            }, [l.filter ? r(de, {
              key: "filter-defaults",
              disabled: !e.filterIcon,
              defaults: {
                VIcon: {
                  icon: e.filterIcon
                }
              }
            }, l.filter) : r(Se, {
              key: "filter-icon",
              icon: e.filterIcon
            }, null)]), [[Ct, m.isSelected.value]])]
          }), M && r("div", {
            key: "prepend",
            class: "v-chip__prepend"
          }, [l.prepend ? r(de, {
            key: "prepend-defaults",
            disabled: !x,
            defaults: {
              VAvatar: {
                image: e.prependAvatar,
                start: !0
              },
              VIcon: {
                icon: e.prependIcon,
                start: !0
              }
            }
          }, l.prepend) : r(ie, null, [e.prependIcon && r(Se, {
            key: "prepend-icon",
            icon: e.prependIcon,
            start: !0
          }, null), e.prependAvatar && r(ut, {
            key: "prepend-avatar",
            image: e.prependAvatar,
            start: !0
          }, null)])]), r("div", {
            class: "v-chip__content",
            "data-no-activator": ""
          }, [((j = l.default) == null ? void 0 : j.call(l, {
            isSelected: m == null ? void 0 : m.isSelected.value,
            selectedClass: m == null ? void 0 : m.selectedClass.value,
            select: m == null ? void 0 : m.select,
            toggle: m == null ? void 0 : m.toggle,
            value: m == null ? void 0 : m.value.value,
            disabled: e.disabled
          })) ?? sn(e.text)]), P && r("div", {
            key: "append",
            class: "v-chip__append"
          }, [l.append ? r(de, {
            key: "append-defaults",
            disabled: !w,
            defaults: {
              VAvatar: {
                end: !0,
                image: e.appendAvatar
              },
              VIcon: {
                end: !0,
                icon: e.appendIcon
              }
            }
          }, l.append) : r(ie, null, [e.appendIcon && r(Se, {
            key: "append-icon",
            end: !0,
            icon: e.appendIcon
          }, null), e.appendAvatar && r(ut, {
            key: "append-avatar",
            end: !0,
            image: e.appendAvatar
          }, null)])]), A && r("button", O({
            key: "close",
            class: "v-chip__close",
            type: "button",
            "data-testid": "close-chip"
          }, T.value), [l.close ? r(de, {
            key: "close-defaults",
            defaults: {
              VIcon: {
                icon: e.closeIcon,
                size: "x-small"
              }
            }
          }, l.close) : r(Se, {
            key: "close-icon",
            icon: e.closeIcon,
            size: "x-small"
          }, null)])];
        }
      }), [[mt("ripple"), C.value && e.ripple, null]]);
    };
  }
}), Rl = Symbol.for("vuetify:list");
function Ku() {
  const e = be(Rl, {
    hasPrepend: G(!1),
    updateHasPrepend: () => null
  }), n = {
    hasPrepend: G(!1),
    updateHasPrepend: (t) => {
      t && (n.hasPrepend.value = t);
    }
  };
  return De(Rl, n), e;
}
function qu() {
  return be(Rl, null);
}
const bi = (e) => {
  const n = {
    activate: (t) => {
      let {
        id: a,
        value: l,
        activated: i
      } = t;
      return a = Be(a), e && !l && i.size === 1 && i.has(a) || (l ? i.add(a) : i.delete(a)), i;
    },
    in: (t, a, l) => {
      let i = /* @__PURE__ */ new Set();
      if (t != null)
        for (const o of Ae(t))
          i = n.activate({
            id: o,
            value: !0,
            activated: new Set(i),
            children: a,
            parents: l
          });
      return i;
    },
    out: (t) => Array.from(t)
  };
  return n;
}, Xu = (e) => {
  const n = bi(e);
  return {
    activate: (a) => {
      let {
        activated: l,
        id: i,
        ...o
      } = a;
      i = Be(i);
      const u = l.has(i) ? /* @__PURE__ */ new Set([i]) : /* @__PURE__ */ new Set();
      return n.activate({
        ...o,
        id: i,
        activated: u
      });
    },
    in: (a, l, i) => {
      let o = /* @__PURE__ */ new Set();
      if (a != null) {
        const u = Ae(a);
        u.length && (o = n.in(u.slice(0, 1), l, i));
      }
      return o;
    },
    out: (a, l, i) => n.out(a, l, i)
  };
}, Yf = (e) => {
  const n = bi(e);
  return {
    activate: (a) => {
      let {
        id: l,
        activated: i,
        children: o,
        ...u
      } = a;
      return l = Be(l), o.has(l) ? i : n.activate({
        id: l,
        activated: i,
        children: o,
        ...u
      });
    },
    in: n.in,
    out: n.out
  };
}, Gf = (e) => {
  const n = Xu(e);
  return {
    activate: (a) => {
      let {
        id: l,
        activated: i,
        children: o,
        ...u
      } = a;
      return l = Be(l), o.has(l) ? i : n.activate({
        id: l,
        activated: i,
        children: o,
        ...u
      });
    },
    in: n.in,
    out: n.out
  };
}, Kf = {
  open: (e) => {
    let {
      id: n,
      value: t,
      opened: a,
      parents: l
    } = e;
    if (t) {
      const i = /* @__PURE__ */ new Set();
      i.add(n);
      let o = l.get(n);
      for (; o != null; )
        i.add(o), o = l.get(o);
      return i;
    } else
      return a.delete(n), a;
  },
  select: () => null
}, Zu = {
  open: (e) => {
    let {
      id: n,
      value: t,
      opened: a,
      parents: l
    } = e;
    if (t) {
      let i = l.get(n);
      for (a.add(n); i != null && i !== n; )
        a.add(i), i = l.get(i);
      return a;
    } else
      a.delete(n);
    return a;
  },
  select: () => null
}, qf = {
  open: Zu.open,
  select: (e) => {
    let {
      id: n,
      value: t,
      opened: a,
      parents: l
    } = e;
    if (!t) return a;
    const i = [];
    let o = l.get(n);
    for (; o != null; )
      i.push(o), o = l.get(o);
    return new Set(i);
  }
}, ki = (e) => {
  const n = {
    select: (t) => {
      let {
        id: a,
        value: l,
        selected: i
      } = t;
      if (a = Be(a), e && !l) {
        const o = Array.from(i.entries()).reduce((u, s) => {
          let [c, v] = s;
          return v === "on" && u.push(c), u;
        }, []);
        if (o.length === 1 && o[0] === a) return i;
      }
      return i.set(a, l ? "on" : "off"), i;
    },
    in: (t, a, l) => {
      const i = /* @__PURE__ */ new Map();
      for (const o of t || [])
        n.select({
          id: o,
          value: !0,
          selected: i,
          children: a,
          parents: l
        });
      return i;
    },
    out: (t) => {
      const a = [];
      for (const [l, i] of t.entries())
        i === "on" && a.push(l);
      return a;
    }
  };
  return n;
}, Qu = (e) => {
  const n = ki(e);
  return {
    select: (a) => {
      let {
        selected: l,
        id: i,
        ...o
      } = a;
      i = Be(i);
      const u = l.has(i) ? /* @__PURE__ */ new Map([[i, l.get(i)]]) : /* @__PURE__ */ new Map();
      return n.select({
        ...o,
        id: i,
        selected: u
      });
    },
    in: (a, l, i) => a != null && a.length ? n.in(a.slice(0, 1), l, i) : /* @__PURE__ */ new Map(),
    out: (a, l, i) => n.out(a, l, i)
  };
}, Xf = (e) => {
  const n = ki(e);
  return {
    select: (a) => {
      let {
        id: l,
        selected: i,
        children: o,
        ...u
      } = a;
      return l = Be(l), o.has(l) ? i : n.select({
        id: l,
        selected: i,
        children: o,
        ...u
      });
    },
    in: n.in,
    out: n.out
  };
}, Zf = (e) => {
  const n = Qu(e);
  return {
    select: (a) => {
      let {
        id: l,
        selected: i,
        children: o,
        ...u
      } = a;
      return l = Be(l), o.has(l) ? i : n.select({
        id: l,
        selected: i,
        children: o,
        ...u
      });
    },
    in: n.in,
    out: n.out
  };
}, Qf = (e) => {
  const n = {
    select: (t) => {
      let {
        id: a,
        value: l,
        selected: i,
        children: o,
        parents: u
      } = t;
      a = Be(a);
      const s = new Map(i), c = [a];
      for (; c.length; ) {
        const f = c.shift();
        i.set(Be(f), l ? "on" : "off"), o.has(f) && c.push(...o.get(f));
      }
      let v = Be(u.get(a));
      for (; v; ) {
        const f = o.get(v), d = f.every((y) => i.get(Be(y)) === "on"), g = f.every((y) => !i.has(Be(y)) || i.get(Be(y)) === "off");
        i.set(v, d ? "on" : g ? "off" : "indeterminate"), v = Be(u.get(v));
      }
      return e && !l && Array.from(i.entries()).reduce((d, g) => {
        let [y, h] = g;
        return h === "on" && d.push(y), d;
      }, []).length === 0 ? s : i;
    },
    in: (t, a, l) => {
      let i = /* @__PURE__ */ new Map();
      for (const o of t || [])
        i = n.select({
          id: o,
          value: !0,
          selected: i,
          children: a,
          parents: l
        });
      return i;
    },
    out: (t, a) => {
      const l = [];
      for (const [i, o] of t.entries())
        o === "on" && !a.has(i) && l.push(i);
      return l;
    }
  };
  return n;
}, oa = Symbol.for("vuetify:nested"), Ju = {
  id: G(),
  root: {
    register: () => null,
    unregister: () => null,
    parents: U(/* @__PURE__ */ new Map()),
    children: U(/* @__PURE__ */ new Map()),
    open: () => null,
    openOnSelect: () => null,
    activate: () => null,
    select: () => null,
    activatable: U(!1),
    selectable: U(!1),
    opened: U(/* @__PURE__ */ new Set()),
    activated: U(/* @__PURE__ */ new Set()),
    selected: U(/* @__PURE__ */ new Map()),
    selectedValues: U([]),
    getPath: () => []
  }
}, Jf = p({
  activatable: Boolean,
  selectable: Boolean,
  activeStrategy: [String, Function, Object],
  selectStrategy: [String, Function, Object],
  openStrategy: [String, Object],
  opened: null,
  activated: null,
  selected: null,
  mandatory: Boolean
}, "nested"), em = (e) => {
  let n = !1;
  const t = U(/* @__PURE__ */ new Map()), a = U(/* @__PURE__ */ new Map()), l = oe(e, "opened", e.opened, (y) => new Set(y), (y) => [...y.values()]), i = b(() => {
    if (typeof e.activeStrategy == "object") return e.activeStrategy;
    if (typeof e.activeStrategy == "function") return e.activeStrategy(e.mandatory);
    switch (e.activeStrategy) {
      case "leaf":
        return Yf(e.mandatory);
      case "single-leaf":
        return Gf(e.mandatory);
      case "independent":
        return bi(e.mandatory);
      case "single-independent":
      default:
        return Xu(e.mandatory);
    }
  }), o = b(() => {
    if (typeof e.selectStrategy == "object") return e.selectStrategy;
    if (typeof e.selectStrategy == "function") return e.selectStrategy(e.mandatory);
    switch (e.selectStrategy) {
      case "single-leaf":
        return Zf(e.mandatory);
      case "leaf":
        return Xf(e.mandatory);
      case "independent":
        return ki(e.mandatory);
      case "single-independent":
        return Qu(e.mandatory);
      case "classic":
      default:
        return Qf(e.mandatory);
    }
  }), u = b(() => {
    if (typeof e.openStrategy == "object") return e.openStrategy;
    switch (e.openStrategy) {
      case "list":
        return qf;
      case "single":
        return Kf;
      case "multiple":
      default:
        return Zu;
    }
  }), s = oe(e, "activated", e.activated, (y) => i.value.in(y, t.value, a.value), (y) => i.value.out(y, t.value, a.value)), c = oe(e, "selected", e.selected, (y) => o.value.in(y, t.value, a.value), (y) => o.value.out(y, t.value, a.value));
  Ze(() => {
    n = !0;
  });
  function v(y) {
    const h = [];
    let m = y;
    for (; m != null; )
      h.unshift(m), m = a.value.get(m);
    return h;
  }
  const f = Le("nested"), d = /* @__PURE__ */ new Set(), g = {
    id: G(),
    root: {
      opened: l,
      activatable: $(e, "activatable"),
      selectable: $(e, "selectable"),
      activated: s,
      selected: c,
      selectedValues: b(() => {
        const y = [];
        for (const [h, m] of c.value.entries())
          m === "on" && y.push(h);
        return y;
      }),
      register: (y, h, m) => {
        if (d.has(y)) {
          const k = v(y).map(String).join(" -> "), S = v(h).concat(y).map(String).join(" -> ");
          Mn(`Multiple nodes with the same ID
	${k}
	${S}`);
          return;
        } else
          d.add(y);
        h && y !== h && a.value.set(y, h), m && t.value.set(y, []), h != null && t.value.set(h, [...t.value.get(h) || [], y]);
      },
      unregister: (y) => {
        if (n) return;
        d.delete(y), t.value.delete(y);
        const h = a.value.get(y);
        if (h) {
          const m = t.value.get(h) ?? [];
          t.value.set(h, m.filter((k) => k !== y));
        }
        a.value.delete(y);
      },
      open: (y, h, m) => {
        f.emit("click:open", {
          id: y,
          value: h,
          path: v(y),
          event: m
        });
        const k = u.value.open({
          id: y,
          value: h,
          opened: new Set(l.value),
          children: t.value,
          parents: a.value,
          event: m
        });
        k && (l.value = k);
      },
      openOnSelect: (y, h, m) => {
        const k = u.value.select({
          id: y,
          value: h,
          selected: new Map(c.value),
          opened: new Set(l.value),
          children: t.value,
          parents: a.value,
          event: m
        });
        k && (l.value = k);
      },
      select: (y, h, m) => {
        f.emit("click:select", {
          id: y,
          value: h,
          path: v(y),
          event: m
        });
        const k = o.value.select({
          id: y,
          value: h,
          selected: new Map(c.value),
          children: t.value,
          parents: a.value,
          event: m
        });
        k && (c.value = k), g.root.openOnSelect(y, h, m);
      },
      activate: (y, h, m) => {
        if (!e.activatable)
          return g.root.select(y, !0, m);
        f.emit("click:activate", {
          id: y,
          value: h,
          path: v(y),
          event: m
        });
        const k = i.value.activate({
          id: y,
          value: h,
          activated: new Set(s.value),
          children: t.value,
          parents: a.value,
          event: m
        });
        if (k.size !== s.value.size)
          s.value = k;
        else {
          for (const S of k)
            if (!s.value.has(S)) {
              s.value = k;
              return;
            }
          for (const S of s.value)
            if (!k.has(S)) {
              s.value = k;
              return;
            }
        }
      },
      children: t,
      parents: a,
      getPath: v
    }
  };
  return De(oa, g), g.root;
}, es = (e, n) => {
  const t = be(oa, Ju), a = Symbol(Ke()), l = b(() => e.value !== void 0 ? e.value : a), i = {
    ...t,
    id: l,
    open: (o, u) => t.root.open(l.value, o, u),
    openOnSelect: (o, u) => t.root.openOnSelect(l.value, o, u),
    isOpen: b(() => t.root.opened.value.has(l.value)),
    parent: b(() => t.root.parents.value.get(l.value)),
    activate: (o, u) => t.root.activate(l.value, o, u),
    isActivated: b(() => t.root.activated.value.has(Be(l.value))),
    select: (o, u) => t.root.select(l.value, o, u),
    isSelected: b(() => t.root.selected.value.get(Be(l.value)) === "on"),
    isIndeterminate: b(() => t.root.selected.value.get(Be(l.value)) === "indeterminate"),
    isLeaf: b(() => !t.root.children.value.get(l.value)),
    isGroupActivator: t.isGroupActivator
  };
  return sa(() => {
    !t.isGroupActivator && t.root.register(l.value, t.id.value, n);
  }), Ze(() => {
    !t.isGroupActivator && t.root.unregister(l.value);
  }), n && De(oa, i), i;
}, tm = () => {
  const e = be(oa, Ju);
  De(oa, {
    ...e,
    isGroupActivator: !0
  });
}, nm = gt({
  name: "VListGroupActivator",
  setup(e, n) {
    let {
      slots: t
    } = n;
    return tm(), () => {
      var a;
      return (a = t.default) == null ? void 0 : a.call(t);
    };
  }
}), ts = p({
  /* @deprecated */
  activeColor: String,
  baseColor: String,
  color: String,
  collapseIcon: {
    type: ue,
    default: "$collapse"
  },
  expandIcon: {
    type: ue,
    default: "$expand"
  },
  prependIcon: ue,
  appendIcon: ue,
  fluid: Boolean,
  subgroup: Boolean,
  title: String,
  value: null,
  ...le(),
  ...ge()
}, "VListGroup"), Na = L()({
  name: "VListGroup",
  props: ts(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    const {
      isOpen: a,
      open: l,
      id: i
    } = es($(e, "value"), !0), o = b(() => `v-list-group--id-${String(i.value)}`), u = qu(), {
      isBooted: s
    } = hn();
    function c(g) {
      g.stopPropagation(), l(!a.value, g);
    }
    const v = b(() => ({
      onClick: c,
      class: "v-list-group__header",
      id: o.value
    })), f = b(() => a.value ? e.collapseIcon : e.expandIcon), d = b(() => ({
      VListItem: {
        active: a.value,
        activeColor: e.activeColor,
        baseColor: e.baseColor,
        color: e.color,
        prependIcon: e.prependIcon || e.subgroup && f.value,
        appendIcon: e.appendIcon || !e.subgroup && f.value,
        title: e.title,
        value: e.value
      }
    }));
    return z(() => r(e.tag, {
      class: ["v-list-group", {
        "v-list-group--prepend": u == null ? void 0 : u.hasPrepend.value,
        "v-list-group--fluid": e.fluid,
        "v-list-group--subgroup": e.subgroup,
        "v-list-group--open": a.value
      }, e.class],
      style: e.style
    }, {
      default: () => [t.activator && r(de, {
        defaults: d.value
      }, {
        default: () => [r(nm, null, {
          default: () => [t.activator({
            props: v.value,
            isOpen: a.value
          })]
        })]
      }), r(tt, {
        transition: {
          component: vi
        },
        disabled: !s.value
      }, {
        default: () => {
          var g;
          return [$e(r("div", {
            class: "v-list-group__items",
            role: "group",
            "aria-labelledby": o.value
          }, [(g = t.default) == null ? void 0 : g.call(t)]), [[Ct, a.value]])];
        }
      })]
    })), {
      isOpen: a
    };
  }
}), am = p({
  opacity: [Number, String],
  ...le(),
  ...ge()
}, "VListItemSubtitle"), lm = L()({
  name: "VListItemSubtitle",
  props: am(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    return z(() => r(e.tag, {
      class: ["v-list-item-subtitle", e.class],
      style: [{
        "--v-list-item-subtitle-opacity": e.opacity
      }, e.style]
    }, t)), {};
  }
}), im = Bt("v-list-item-title"), Si = p({
  active: {
    type: Boolean,
    default: void 0
  },
  activeClass: String,
  /* @deprecated */
  activeColor: String,
  appendAvatar: String,
  appendIcon: ue,
  baseColor: String,
  disabled: Boolean,
  lines: [Boolean, String],
  link: {
    type: Boolean,
    default: void 0
  },
  nav: Boolean,
  prependAvatar: String,
  prependIcon: ue,
  ripple: {
    type: [Boolean, Object],
    default: !0
  },
  slim: Boolean,
  subtitle: {
    type: [String, Number, Boolean],
    default: void 0
  },
  title: {
    type: [String, Number, Boolean],
    default: void 0
  },
  value: null,
  onClick: Ye(),
  onClickOnce: Ye(),
  ...st(),
  ...le(),
  ...ze(),
  ...Re(),
  ...je(),
  ...Ee(),
  ...ma(),
  ...ge(),
  ...ke(),
  ...St({
    variant: "text"
  })
}, "VListItem"), kt = L()({
  name: "VListItem",
  directives: {
    Ripple: Xt
  },
  props: Si(),
  emits: {
    click: (e) => !0
  },
  setup(e, n) {
    let {
      attrs: t,
      slots: a,
      emit: l
    } = n;
    const i = fa(e, t), o = b(() => e.value === void 0 ? i.href.value : e.value), {
      activate: u,
      isActivated: s,
      select: c,
      isOpen: v,
      isSelected: f,
      isIndeterminate: d,
      isGroupActivator: g,
      root: y,
      parent: h,
      openOnSelect: m,
      id: k
    } = es(o, !1), S = qu(), C = b(() => {
      var Q;
      return e.active !== !1 && (e.active || ((Q = i.isActive) == null ? void 0 : Q.value) || (y.activatable.value ? s.value : f.value));
    }), T = b(() => e.link !== !1 && i.isLink.value), I = b(() => !!S && (y.selectable.value || y.activatable.value || e.value != null)), _ = b(() => !e.disabled && e.link !== !1 && (e.link || i.isClickable.value || I.value)), D = b(() => e.rounded || e.nav), w = b(() => e.color ?? e.activeColor), P = b(() => ({
      color: C.value ? w.value ?? e.baseColor : e.baseColor,
      variant: e.variant
    }));
    J(() => {
      var Q;
      return (Q = i.isActive) == null ? void 0 : Q.value;
    }, (Q) => {
      Q && A();
    }), sa(() => {
      var Q;
      (Q = i.isActive) != null && Q.value && A();
    });
    function A() {
      h.value != null && y.open(h.value, !0), m(!0);
    }
    const {
      themeClasses: V
    } = Ve(e), {
      borderClasses: x
    } = bt(e), {
      colorClasses: M,
      colorStyles: E,
      variantClasses: N
    } = yn(P), {
      densityClasses: j
    } = Qe(e), {
      dimensionStyles: ee
    } = He(e), {
      elevationClasses: W
    } = qe(e), {
      roundedClasses: R
    } = Oe(D), F = b(() => e.lines ? `v-list-item--${e.lines}-line` : void 0), B = b(() => ({
      isActive: C.value,
      select: c,
      isOpen: v.value,
      isSelected: f.value,
      isIndeterminate: d.value
    }));
    function H(Q) {
      var re;
      l("click", Q), _.value && ((re = i.navigate) == null || re.call(i, Q), !g && (y.activatable.value ? u(!s.value, Q) : (y.selectable.value || e.value != null) && c(!f.value, Q)));
    }
    function Z(Q) {
      const re = Q.target;
      ["INPUT", "TEXTAREA"].includes(re.tagName) || (Q.key === "Enter" || Q.key === " ") && (Q.preventDefault(), Q.target.dispatchEvent(new MouseEvent("click", Q)));
    }
    return z(() => {
      const Q = T.value ? "a" : e.tag, re = a.title || e.title != null, X = a.subtitle || e.subtitle != null, K = !!(e.appendAvatar || e.appendIcon), ne = !!(K || a.append), ye = !!(e.prependAvatar || e.prependIcon), he = !!(ye || a.prepend);
      return S == null || S.updateHasPrepend(he), e.activeColor && wd("active-color", ["color", "base-color"]), $e(r(Q, O({
        class: ["v-list-item", {
          "v-list-item--active": C.value,
          "v-list-item--disabled": e.disabled,
          "v-list-item--link": _.value,
          "v-list-item--nav": e.nav,
          "v-list-item--prepend": !he && (S == null ? void 0 : S.hasPrepend.value),
          "v-list-item--slim": e.slim,
          [`${e.activeClass}`]: e.activeClass && C.value
        }, V.value, x.value, M.value, j.value, W.value, F.value, R.value, N.value, e.class],
        style: [E.value, ee.value, e.style],
        tabindex: _.value ? S ? -2 : 0 : void 0,
        "aria-selected": I.value ? y.activatable.value ? s.value : y.selectable.value ? f.value : C.value : void 0,
        onClick: H,
        onKeydown: _.value && !T.value && Z
      }, i.linkProps), {
        default: () => {
          var q;
          return [Kt(_.value || C.value, "v-list-item"), he && r("div", {
            key: "prepend",
            class: "v-list-item__prepend"
          }, [a.prepend ? r(de, {
            key: "prepend-defaults",
            disabled: !ye,
            defaults: {
              VAvatar: {
                density: e.density,
                image: e.prependAvatar
              },
              VIcon: {
                density: e.density,
                icon: e.prependIcon
              },
              VListItemAction: {
                start: !0
              }
            }
          }, {
            default: () => {
              var se;
              return [(se = a.prepend) == null ? void 0 : se.call(a, B.value)];
            }
          }) : r(ie, null, [e.prependAvatar && r(ut, {
            key: "prepend-avatar",
            density: e.density,
            image: e.prependAvatar
          }, null), e.prependIcon && r(Se, {
            key: "prepend-icon",
            density: e.density,
            icon: e.prependIcon
          }, null)]), r("div", {
            class: "v-list-item__spacer"
          }, null)]), r("div", {
            class: "v-list-item__content",
            "data-no-activator": ""
          }, [re && r(im, {
            key: "title"
          }, {
            default: () => {
              var se;
              return [((se = a.title) == null ? void 0 : se.call(a, {
                title: e.title
              })) ?? sn(e.title)];
            }
          }), X && r(lm, {
            key: "subtitle"
          }, {
            default: () => {
              var se;
              return [((se = a.subtitle) == null ? void 0 : se.call(a, {
                subtitle: e.subtitle
              })) ?? sn(e.subtitle)];
            }
          }), (q = a.default) == null ? void 0 : q.call(a, B.value)]), ne && r("div", {
            key: "append",
            class: "v-list-item__append"
          }, [a.append ? r(de, {
            key: "append-defaults",
            disabled: !K,
            defaults: {
              VAvatar: {
                density: e.density,
                image: e.appendAvatar
              },
              VIcon: {
                density: e.density,
                icon: e.appendIcon
              },
              VListItemAction: {
                end: !0
              }
            }
          }, {
            default: () => {
              var se;
              return [(se = a.append) == null ? void 0 : se.call(a, B.value)];
            }
          }) : r(ie, null, [e.appendIcon && r(Se, {
            key: "append-icon",
            density: e.density,
            icon: e.appendIcon
          }, null), e.appendAvatar && r(ut, {
            key: "append-avatar",
            density: e.density,
            image: e.appendAvatar
          }, null)]), r("div", {
            class: "v-list-item__spacer"
          }, null)])];
        }
      }), [[mt("ripple"), _.value && e.ripple]]);
    }), {
      activate: u,
      isActivated: s,
      isGroupActivator: g,
      isSelected: f,
      list: S,
      select: c,
      root: y,
      id: k,
      link: i
    };
  }
}), om = p({
  color: String,
  inset: Boolean,
  sticky: Boolean,
  title: String,
  ...le(),
  ...ge()
}, "VListSubheader"), rm = L()({
  name: "VListSubheader",
  props: om(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    const {
      textColorClasses: a,
      textColorStyles: l
    } = Ge($(e, "color"));
    return z(() => {
      const i = !!(t.default || e.title);
      return r(e.tag, {
        class: ["v-list-subheader", {
          "v-list-subheader--inset": e.inset,
          "v-list-subheader--sticky": e.sticky
        }, a.value, e.class],
        style: [{
          textColorStyles: l
        }, e.style]
      }, {
        default: () => {
          var o;
          return [i && r("div", {
            class: "v-list-subheader__text"
          }, [((o = t.default) == null ? void 0 : o.call(t)) ?? e.title])];
        }
      });
    }), {};
  }
}), ns = p({
  color: String,
  inset: Boolean,
  length: [Number, String],
  opacity: [Number, String],
  thickness: [Number, String],
  vertical: Boolean,
  ...le(),
  ...ke()
}, "VDivider"), It = L()({
  name: "VDivider",
  props: ns(),
  setup(e, n) {
    let {
      attrs: t,
      slots: a
    } = n;
    const {
      themeClasses: l
    } = Ve(e), {
      textColorClasses: i,
      textColorStyles: o
    } = Ge($(e, "color")), u = b(() => {
      const s = {};
      return e.length && (s[e.vertical ? "height" : "width"] = te(e.length)), e.thickness && (s[e.vertical ? "borderRightWidth" : "borderTopWidth"] = te(e.thickness)), s;
    });
    return z(() => {
      const s = r("hr", {
        class: [{
          "v-divider": !0,
          "v-divider--inset": e.inset,
          "v-divider--vertical": e.vertical
        }, l.value, i.value, e.class],
        style: [u.value, o.value, {
          "--v-border-opacity": e.opacity
        }, e.style],
        "aria-orientation": !t.role || t.role === "separator" ? e.vertical ? "vertical" : "horizontal" : void 0,
        role: `${t.role || "separator"}`
      }, null);
      return a.default ? r("div", {
        class: ["v-divider__wrapper", {
          "v-divider__wrapper--vertical": e.vertical,
          "v-divider__wrapper--inset": e.inset
        }]
      }, [s, r("div", {
        class: "v-divider__content"
      }, [a.default()]), s]) : s;
    }), {};
  }
}), um = p({
  items: Array,
  returnObject: Boolean
}, "VListChildren"), as = L()({
  name: "VListChildren",
  props: um(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    return Ku(), () => {
      var a, l;
      return ((a = t.default) == null ? void 0 : a.call(t)) ?? ((l = e.items) == null ? void 0 : l.map((i) => {
        var d, g;
        let {
          children: o,
          props: u,
          type: s,
          raw: c
        } = i;
        if (s === "divider")
          return ((d = t.divider) == null ? void 0 : d.call(t, {
            props: u
          })) ?? r(It, u, null);
        if (s === "subheader")
          return ((g = t.subheader) == null ? void 0 : g.call(t, {
            props: u
          })) ?? r(rm, u, null);
        const v = {
          subtitle: t.subtitle ? (y) => {
            var h;
            return (h = t.subtitle) == null ? void 0 : h.call(t, {
              ...y,
              item: c
            });
          } : void 0,
          prepend: t.prepend ? (y) => {
            var h;
            return (h = t.prepend) == null ? void 0 : h.call(t, {
              ...y,
              item: c
            });
          } : void 0,
          append: t.append ? (y) => {
            var h;
            return (h = t.append) == null ? void 0 : h.call(t, {
              ...y,
              item: c
            });
          } : void 0,
          title: t.title ? (y) => {
            var h;
            return (h = t.title) == null ? void 0 : h.call(t, {
              ...y,
              item: c
            });
          } : void 0
        }, f = Na.filterProps(u);
        return o ? r(Na, O({
          value: u == null ? void 0 : u.value
        }, f), {
          activator: (y) => {
            let {
              props: h
            } = y;
            const m = {
              ...u,
              ...h,
              value: e.returnObject ? c : u.value
            };
            return t.header ? t.header({
              props: m
            }) : r(kt, m, v);
          },
          default: () => r(as, {
            items: o,
            returnObject: e.returnObject
          }, t)
        }) : t.item ? t.item({
          props: u
        }) : r(kt, O(u, {
          value: e.returnObject ? c : u.value
        }), v);
      }));
    };
  }
}), ls = p({
  items: {
    type: Array,
    default: () => []
  },
  itemTitle: {
    type: [String, Array, Function],
    default: "title"
  },
  itemValue: {
    type: [String, Array, Function],
    default: "value"
  },
  itemChildren: {
    type: [Boolean, String, Array, Function],
    default: "children"
  },
  itemProps: {
    type: [Boolean, String, Array, Function],
    default: "props"
  },
  returnObject: Boolean,
  valueComparator: Function
}, "list-items");
function zt(e, n) {
  const t = Ne(n, e.itemTitle, n), a = Ne(n, e.itemValue, t), l = Ne(n, e.itemChildren), i = e.itemProps === !0 ? typeof n == "object" && n != null && !Array.isArray(n) ? "children" in n ? Ce(n, ["children"]) : n : void 0 : Ne(n, e.itemProps), o = {
    title: t,
    value: a,
    ...i
  };
  return {
    title: String(o.title ?? ""),
    value: o.value,
    props: o,
    children: Array.isArray(l) ? is(e, l) : void 0,
    raw: n
  };
}
function is(e, n) {
  const t = Ot(e, ["itemTitle", "itemValue", "itemChildren", "itemProps", "returnObject", "valueComparator"]), a = [];
  for (const l of n)
    a.push(zt(t, l));
  return a;
}
function wi(e) {
  const n = b(() => is(e, e.items)), t = b(() => n.value.some((u) => u.value === null)), a = G(/* @__PURE__ */ new Map()), l = G([]);
  Fe(() => {
    const u = n.value, s = /* @__PURE__ */ new Map(), c = [];
    for (let v = 0; v < u.length; v++) {
      const f = u[v];
      if (Or(f.value) || f.value === null) {
        let d = s.get(f.value);
        d || (d = [], s.set(f.value, d)), d.push(f);
      } else
        c.push(f);
    }
    a.value = s, l.value = c;
  });
  function i(u) {
    const s = a.value, c = n.value, v = l.value, f = t.value, d = e.returnObject, g = !!e.valueComparator, y = e.valueComparator || nt, h = Ot(e, ["itemTitle", "itemValue", "itemChildren", "itemProps", "returnObject", "valueComparator"]), m = [];
    e: for (const k of u) {
      if (!f && k === null) continue;
      if (d && typeof k == "string") {
        m.push(zt(h, k));
        continue;
      }
      const S = s.get(k);
      if (g || !S) {
        for (const C of g ? c : v)
          if (y(k, C.value)) {
            m.push(C);
            continue e;
          }
        m.push(zt(h, k));
        continue;
      }
      m.push(...S);
    }
    return m;
  }
  function o(u) {
    return e.returnObject ? u.map((s) => {
      let {
        raw: c
      } = s;
      return c;
    }) : u.map((s) => {
      let {
        value: c
      } = s;
      return c;
    });
  }
  return {
    items: n,
    transformIn: i,
    transformOut: o
  };
}
function sm(e, n) {
  const t = Ne(n, e.itemType, "item"), a = Or(n) ? n : Ne(n, e.itemTitle), l = Ne(n, e.itemValue, void 0), i = Ne(n, e.itemChildren), o = e.itemProps === !0 ? Ce(n, ["children"]) : Ne(n, e.itemProps), u = {
    title: a,
    value: l,
    ...o
  };
  return {
    type: t,
    title: u.title,
    value: u.value,
    props: u,
    children: t === "item" && i ? os(e, i) : void 0,
    raw: n
  };
}
function os(e, n) {
  const t = [];
  for (const a of n)
    t.push(sm(e, a));
  return t;
}
function rs(e) {
  return {
    items: b(() => os(e, e.items))
  };
}
const us = p({
  baseColor: String,
  /* @deprecated */
  activeColor: String,
  activeClass: String,
  bgColor: String,
  disabled: Boolean,
  expandIcon: ue,
  collapseIcon: ue,
  lines: {
    type: [Boolean, String],
    default: "one"
  },
  slim: Boolean,
  nav: Boolean,
  "onClick:open": Ye(),
  "onClick:select": Ye(),
  "onUpdate:opened": Ye(),
  ...Jf({
    selectStrategy: "single-leaf",
    openStrategy: "list"
  }),
  ...st(),
  ...le(),
  ...ze(),
  ...Re(),
  ...je(),
  itemType: {
    type: String,
    default: "type"
  },
  ...ls(),
  ...Ee(),
  ...ge(),
  ...ke(),
  ...St({
    variant: "text"
  })
}, "VList"), ra = L()({
  name: "VList",
  props: us(),
  emits: {
    "update:selected": (e) => !0,
    "update:activated": (e) => !0,
    "update:opened": (e) => !0,
    "click:open": (e) => !0,
    "click:activate": (e) => !0,
    "click:select": (e) => !0
  },
  setup(e, n) {
    let {
      slots: t
    } = n;
    const {
      items: a
    } = rs(e), {
      themeClasses: l
    } = Ve(e), {
      backgroundColorClasses: i,
      backgroundColorStyles: o
    } = Pe($(e, "bgColor")), {
      borderClasses: u
    } = bt(e), {
      densityClasses: s
    } = Qe(e), {
      dimensionStyles: c
    } = He(e), {
      elevationClasses: v
    } = qe(e), {
      roundedClasses: f
    } = Oe(e), {
      children: d,
      open: g,
      parents: y,
      select: h,
      getPath: m
    } = em(e), k = b(() => e.lines ? `v-list--${e.lines}-line` : void 0), S = $(e, "activeColor"), C = $(e, "baseColor"), T = $(e, "color");
    Ku(), pe({
      VListGroup: {
        activeColor: S,
        baseColor: C,
        color: T,
        expandIcon: $(e, "expandIcon"),
        collapseIcon: $(e, "collapseIcon")
      },
      VListItem: {
        activeClass: $(e, "activeClass"),
        activeColor: S,
        baseColor: C,
        color: T,
        density: $(e, "density"),
        disabled: $(e, "disabled"),
        lines: $(e, "lines"),
        nav: $(e, "nav"),
        slim: $(e, "slim"),
        variant: $(e, "variant")
      }
    });
    const I = G(!1), _ = U();
    function D(M) {
      I.value = !0;
    }
    function w(M) {
      I.value = !1;
    }
    function P(M) {
      var E;
      !I.value && !(M.relatedTarget && ((E = _.value) != null && E.contains(M.relatedTarget))) && x();
    }
    function A(M) {
      const E = M.target;
      if (!(!_.value || ["INPUT", "TEXTAREA"].includes(E.tagName))) {
        if (M.key === "ArrowDown")
          x("next");
        else if (M.key === "ArrowUp")
          x("prev");
        else if (M.key === "Home")
          x("first");
        else if (M.key === "End")
          x("last");
        else
          return;
        M.preventDefault();
      }
    }
    function V(M) {
      I.value = !0;
    }
    function x(M) {
      if (_.value)
        return on(_.value, M);
    }
    return z(() => r(e.tag, {
      ref: _,
      class: ["v-list", {
        "v-list--disabled": e.disabled,
        "v-list--nav": e.nav,
        "v-list--slim": e.slim
      }, l.value, i.value, u.value, s.value, v.value, k.value, f.value, e.class],
      style: [o.value, c.value, e.style],
      tabindex: e.disabled ? -1 : 0,
      role: "listbox",
      "aria-activedescendant": void 0,
      onFocusin: D,
      onFocusout: w,
      onFocus: P,
      onKeydown: A,
      onMousedown: V
    }, {
      default: () => [r(as, {
        items: a.value,
        returnObject: e.returnObject
      }, t)]
    })), {
      open: g,
      select: h,
      focus: x,
      children: d,
      parents: y,
      getPath: m
    };
  }
}), sk = Bt("v-list-img"), cm = p({
  start: Boolean,
  end: Boolean,
  ...le(),
  ...ge()
}, "VListItemAction"), dm = L()({
  name: "VListItemAction",
  props: cm(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    return z(() => r(e.tag, {
      class: ["v-list-item-action", {
        "v-list-item-action--start": e.start,
        "v-list-item-action--end": e.end
      }, e.class],
      style: e.style
    }, t)), {};
  }
}), vm = p({
  start: Boolean,
  end: Boolean,
  ...le(),
  ...ge()
}, "VListItemMedia"), ck = L()({
  name: "VListItemMedia",
  props: vm(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    return z(() => r(e.tag, {
      class: ["v-list-item-media", {
        "v-list-item-media--start": e.start,
        "v-list-item-media--end": e.end
      }, e.class],
      style: e.style
    }, t)), {};
  }
});
function xl(e, n) {
  return {
    x: e.x + n.x,
    y: e.y + n.y
  };
}
function fm(e, n) {
  return {
    x: e.x - n.x,
    y: e.y - n.y
  };
}
function Ro(e, n) {
  if (e.side === "top" || e.side === "bottom") {
    const {
      side: t,
      align: a
    } = e, l = a === "left" ? 0 : a === "center" ? n.width / 2 : a === "right" ? n.width : a, i = t === "top" ? 0 : t === "bottom" ? n.height : t;
    return xl({
      x: l,
      y: i
    }, n);
  } else if (e.side === "left" || e.side === "right") {
    const {
      side: t,
      align: a
    } = e, l = t === "left" ? 0 : t === "right" ? n.width : t, i = a === "top" ? 0 : a === "center" ? n.height / 2 : a === "bottom" ? n.height : a;
    return xl({
      x: l,
      y: i
    }, n);
  }
  return xl({
    x: n.width / 2,
    y: n.height / 2
  }, n);
}
const ss = {
  static: hm,
  // specific viewport position, usually centered
  connected: bm
  // connected to a certain element
}, mm = p({
  locationStrategy: {
    type: [String, Function],
    default: "static",
    validator: (e) => typeof e == "function" || e in ss
  },
  location: {
    type: String,
    default: "bottom"
  },
  origin: {
    type: String,
    default: "auto"
  },
  offset: [Number, String, Array]
}, "VOverlay-location-strategies");
function gm(e, n) {
  const t = U({}), a = U();
  xe && ot(() => !!(n.isActive.value && e.locationStrategy), (i) => {
    var o, u;
    J(() => e.locationStrategy, i), Xe(() => {
      window.removeEventListener("resize", l), a.value = void 0;
    }), window.addEventListener("resize", l, {
      passive: !0
    }), typeof e.locationStrategy == "function" ? a.value = (o = e.locationStrategy(n, e, t)) == null ? void 0 : o.updateLocation : a.value = (u = ss[e.locationStrategy](n, e, t)) == null ? void 0 : u.updateLocation;
  });
  function l(i) {
    var o;
    (o = a.value) == null || o.call(a, i);
  }
  return {
    contentStyles: t,
    updateLocation: a
  };
}
function hm() {
}
function ym(e, n) {
  const t = ai(e);
  return n ? t.x += parseFloat(e.style.right || 0) : t.x -= parseFloat(e.style.left || 0), t.y -= parseFloat(e.style.top || 0), t;
}
function bm(e, n, t) {
  (Array.isArray(e.target.value) || zd(e.target.value)) && Object.assign(t.value, {
    position: "fixed",
    top: 0,
    [e.isRtl.value ? "right" : "left"]: 0
  });
  const {
    preferredAnchor: l,
    preferredOrigin: i
  } = ni(() => {
    const y = Bl(n.location, e.isRtl.value), h = n.origin === "overlap" ? y : n.origin === "auto" ? yl(y) : Bl(n.origin, e.isRtl.value);
    return y.side === h.side && y.align === bl(h).align ? {
      preferredAnchor: no(y),
      preferredOrigin: no(h)
    } : {
      preferredAnchor: y,
      preferredOrigin: h
    };
  }), [o, u, s, c] = ["minWidth", "minHeight", "maxWidth", "maxHeight"].map((y) => b(() => {
    const h = parseFloat(n[y]);
    return isNaN(h) ? 1 / 0 : h;
  })), v = b(() => {
    if (Array.isArray(n.offset))
      return n.offset;
    if (typeof n.offset == "string") {
      const y = n.offset.split(" ").map(parseFloat);
      return y.length < 2 && y.push(0), y;
    }
    return typeof n.offset == "number" ? [n.offset, 0] : [0, 0];
  });
  let f = !1;
  const d = new ResizeObserver(() => {
    f && g();
  });
  J([e.target, e.contentEl], (y, h) => {
    let [m, k] = y, [S, C] = h;
    S && !Array.isArray(S) && d.unobserve(S), m && !Array.isArray(m) && d.observe(m), C && d.unobserve(C), k && d.observe(k);
  }, {
    immediate: !0
  }), Xe(() => {
    d.disconnect();
  });
  function g() {
    if (f = !1, requestAnimationFrame(() => f = !0), !e.target.value || !e.contentEl.value) return;
    const y = Rr(e.target.value), h = ym(e.contentEl.value, e.isRtl.value), m = ea(e.contentEl.value), k = 12;
    m.length || (m.push(document.documentElement), e.contentEl.value.style.top && e.contentEl.value.style.left || (h.x -= parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-x") || 0), h.y -= parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-y") || 0)));
    const S = m.reduce((V, x) => {
      const M = x.getBoundingClientRect(), E = new rn({
        x: x === document.documentElement ? 0 : M.x,
        y: x === document.documentElement ? 0 : M.y,
        width: x.clientWidth,
        height: x.clientHeight
      });
      return V ? new rn({
        x: Math.max(V.left, E.left),
        y: Math.max(V.top, E.top),
        width: Math.min(V.right, E.right) - Math.max(V.left, E.left),
        height: Math.min(V.bottom, E.bottom) - Math.max(V.top, E.top)
      }) : E;
    }, void 0);
    S.x += k, S.y += k, S.width -= k * 2, S.height -= k * 2;
    let C = {
      anchor: l.value,
      origin: i.value
    };
    function T(V) {
      const x = new rn(h), M = Ro(V.anchor, y), E = Ro(V.origin, x);
      let {
        x: N,
        y: j
      } = fm(M, E);
      switch (V.anchor.side) {
        case "top":
          j -= v.value[0];
          break;
        case "bottom":
          j += v.value[0];
          break;
        case "left":
          N -= v.value[0];
          break;
        case "right":
          N += v.value[0];
          break;
      }
      switch (V.anchor.align) {
        case "top":
          j -= v.value[1];
          break;
        case "bottom":
          j += v.value[1];
          break;
        case "left":
          N -= v.value[1];
          break;
        case "right":
          N += v.value[1];
          break;
      }
      return x.x += N, x.y += j, x.width = Math.min(x.width, s.value), x.height = Math.min(x.height, c.value), {
        overflows: lo(x, S),
        x: N,
        y: j
      };
    }
    let I = 0, _ = 0;
    const D = {
      x: 0,
      y: 0
    }, w = {
      x: !1,
      y: !1
    };
    let P = -1;
    for (; ; ) {
      if (P++ > 10) {
        Mn("Infinite loop detected in connectedLocationStrategy");
        break;
      }
      const {
        x: V,
        y: x,
        overflows: M
      } = T(C);
      I += V, _ += x, h.x += V, h.y += x;
      {
        const E = ao(C.anchor), N = M.x.before || M.x.after, j = M.y.before || M.y.after;
        let ee = !1;
        if (["x", "y"].forEach((W) => {
          if (W === "x" && N && !w.x || W === "y" && j && !w.y) {
            const R = {
              anchor: {
                ...C.anchor
              },
              origin: {
                ...C.origin
              }
            }, F = W === "x" ? E === "y" ? bl : yl : E === "y" ? yl : bl;
            R.anchor = F(R.anchor), R.origin = F(R.origin);
            const {
              overflows: B
            } = T(R);
            (B[W].before <= M[W].before && B[W].after <= M[W].after || B[W].before + B[W].after < (M[W].before + M[W].after) / 2) && (C = R, ee = w[W] = !0);
          }
        }), ee) continue;
      }
      M.x.before && (I += M.x.before, h.x += M.x.before), M.x.after && (I -= M.x.after, h.x -= M.x.after), M.y.before && (_ += M.y.before, h.y += M.y.before), M.y.after && (_ -= M.y.after, h.y -= M.y.after);
      {
        const E = lo(h, S);
        D.x = S.width - E.x.before - E.x.after, D.y = S.height - E.y.before - E.y.after, I += E.x.before, h.x += E.x.before, _ += E.y.before, h.y += E.y.before;
      }
      break;
    }
    const A = ao(C.anchor);
    return Object.assign(t.value, {
      "--v-overlay-anchor-origin": `${C.anchor.side} ${C.anchor.align}`,
      transformOrigin: `${C.origin.side} ${C.origin.align}`,
      // transform: `translate(${pixelRound(x)}px, ${pixelRound(y)}px)`,
      top: te(Cl(_)),
      left: e.isRtl.value ? void 0 : te(Cl(I)),
      right: e.isRtl.value ? te(Cl(-I)) : void 0,
      minWidth: te(A === "y" ? Math.min(o.value, y.width) : o.value),
      maxWidth: te(Ho(Me(D.x, o.value === 1 / 0 ? 0 : o.value, s.value))),
      maxHeight: te(Ho(Me(D.y, u.value === 1 / 0 ? 0 : u.value, c.value)))
    }), {
      available: D,
      contentBox: h
    };
  }
  return J(() => [l.value, i.value, n.offset, n.minWidth, n.minHeight, n.maxWidth, n.maxHeight], () => g()), we(() => {
    const y = g();
    if (!y) return;
    const {
      available: h,
      contentBox: m
    } = y;
    m.height > h.y && requestAnimationFrame(() => {
      g(), requestAnimationFrame(() => {
        g();
      });
    });
  }), {
    updateLocation: g
  };
}
function Cl(e) {
  return Math.round(e * devicePixelRatio) / devicePixelRatio;
}
function Ho(e) {
  return Math.ceil(e * devicePixelRatio) / devicePixelRatio;
}
let Hl = !0;
const Ra = [];
function km(e) {
  !Hl || Ra.length ? (Ra.push(e), zl()) : (Hl = !1, e(), zl());
}
let zo = -1;
function zl() {
  cancelAnimationFrame(zo), zo = requestAnimationFrame(() => {
    const e = Ra.shift();
    e && e(), Ra.length ? zl() : Hl = !0;
  });
}
const Ba = {
  none: null,
  close: xm,
  block: Cm,
  reposition: Vm
}, Sm = p({
  scrollStrategy: {
    type: [String, Function],
    default: "block",
    validator: (e) => typeof e == "function" || e in Ba
  }
}, "VOverlay-scroll-strategies");
function wm(e, n) {
  if (!xe) return;
  let t;
  Fe(async () => {
    t == null || t.stop(), n.isActive.value && e.scrollStrategy && (t = Xl(), await new Promise((a) => setTimeout(a)), t.active && t.run(() => {
      var a;
      typeof e.scrollStrategy == "function" ? e.scrollStrategy(n, e, t) : (a = Ba[e.scrollStrategy]) == null || a.call(Ba, n, e, t);
    }));
  }), Xe(() => {
    t == null || t.stop();
  });
}
function xm(e) {
  function n(t) {
    e.isActive.value = !1;
  }
  cs(e.targetEl.value ?? e.contentEl.value, n);
}
function Cm(e, n) {
  var o;
  const t = (o = e.root.value) == null ? void 0 : o.offsetParent, a = [.../* @__PURE__ */ new Set([...ea(e.targetEl.value, n.contained ? t : void 0), ...ea(e.contentEl.value, n.contained ? t : void 0)])].filter((u) => !u.classList.contains("v-overlay-scroll-blocked")), l = window.innerWidth - document.documentElement.offsetWidth, i = ((u) => ui(u) && u)(t || document.documentElement);
  i && e.root.value.classList.add("v-overlay--scroll-blocked"), a.forEach((u, s) => {
    u.style.setProperty("--v-body-scroll-x", te(-u.scrollLeft)), u.style.setProperty("--v-body-scroll-y", te(-u.scrollTop)), u !== document.documentElement && u.style.setProperty("--v-scrollbar-offset", te(l)), u.classList.add("v-overlay-scroll-blocked");
  }), Xe(() => {
    a.forEach((u, s) => {
      const c = parseFloat(u.style.getPropertyValue("--v-body-scroll-x")), v = parseFloat(u.style.getPropertyValue("--v-body-scroll-y")), f = u.style.scrollBehavior;
      u.style.scrollBehavior = "auto", u.style.removeProperty("--v-body-scroll-x"), u.style.removeProperty("--v-body-scroll-y"), u.style.removeProperty("--v-scrollbar-offset"), u.classList.remove("v-overlay-scroll-blocked"), u.scrollLeft = -c, u.scrollTop = -v, u.style.scrollBehavior = f;
    }), i && e.root.value.classList.remove("v-overlay--scroll-blocked");
  });
}
function Vm(e, n, t) {
  let a = !1, l = -1, i = -1;
  function o(u) {
    km(() => {
      var v, f;
      const s = performance.now();
      (f = (v = e.updateLocation).value) == null || f.call(v, u), a = (performance.now() - s) / (1e3 / 60) > 2;
    });
  }
  i = (typeof requestIdleCallback > "u" ? (u) => u() : requestIdleCallback)(() => {
    t.run(() => {
      cs(e.targetEl.value ?? e.contentEl.value, (u) => {
        a ? (cancelAnimationFrame(l), l = requestAnimationFrame(() => {
          l = requestAnimationFrame(() => {
            o(u);
          });
        })) : o(u);
      });
    });
  }), Xe(() => {
    typeof cancelIdleCallback < "u" && cancelIdleCallback(i), cancelAnimationFrame(l);
  });
}
function cs(e, n) {
  const t = [document, ...ea(e)];
  t.forEach((a) => {
    a.addEventListener("scroll", n, {
      passive: !0
    });
  }), Xe(() => {
    t.forEach((a) => {
      a.removeEventListener("scroll", n);
    });
  });
}
const Wl = Symbol.for("vuetify:v-menu"), ll = p({
  closeDelay: [Number, String],
  openDelay: [Number, String]
}, "delay");
function xi(e, n) {
  let t = () => {
  };
  function a(o) {
    t == null || t();
    const u = Number(o ? e.openDelay : e.closeDelay);
    return new Promise((s) => {
      t = sd(u, () => {
        n == null || n(o), s(o);
      });
    });
  }
  function l() {
    return a(!0);
  }
  function i() {
    return a(!1);
  }
  return {
    clearDelay: t,
    runOpenDelay: l,
    runCloseDelay: i
  };
}
const Pm = p({
  target: [String, Object],
  activator: [String, Object],
  activatorProps: {
    type: Object,
    default: () => ({})
  },
  openOnClick: {
    type: Boolean,
    default: void 0
  },
  openOnHover: Boolean,
  openOnFocus: {
    type: Boolean,
    default: void 0
  },
  closeOnContentClick: Boolean,
  ...ll()
}, "VOverlay-activator");
function Im(e, n) {
  let {
    isActive: t,
    isTop: a,
    contentEl: l
  } = n;
  const i = Le("useActivator"), o = U();
  let u = !1, s = !1, c = !0;
  const v = b(() => e.openOnFocus || e.openOnFocus == null && e.openOnHover), f = b(() => e.openOnClick || e.openOnClick == null && !e.openOnHover && !v.value), {
    runOpenDelay: d,
    runCloseDelay: g
  } = xi(e, (w) => {
    w === (e.openOnHover && u || v.value && s) && !(e.openOnHover && t.value && !a.value) && (t.value !== w && (c = !0), t.value = w);
  }), y = U(), h = {
    onClick: (w) => {
      w.stopPropagation(), o.value = w.currentTarget || w.target, t.value || (y.value = [w.clientX, w.clientY]), t.value = !t.value;
    },
    onMouseenter: (w) => {
      var P;
      (P = w.sourceCapabilities) != null && P.firesTouchEvents || (u = !0, o.value = w.currentTarget || w.target, d());
    },
    onMouseleave: (w) => {
      u = !1, g();
    },
    onFocus: (w) => {
      Dn(w.target, ":focus-visible") !== !1 && (s = !0, w.stopPropagation(), o.value = w.currentTarget || w.target, d());
    },
    onBlur: (w) => {
      s = !1, w.stopPropagation(), g();
    }
  }, m = b(() => {
    const w = {};
    return f.value && (w.onClick = h.onClick), e.openOnHover && (w.onMouseenter = h.onMouseenter, w.onMouseleave = h.onMouseleave), v.value && (w.onFocus = h.onFocus, w.onBlur = h.onBlur), w;
  }), k = b(() => {
    const w = {};
    if (e.openOnHover && (w.onMouseenter = () => {
      u = !0, d();
    }, w.onMouseleave = () => {
      u = !1, g();
    }), v.value && (w.onFocusin = () => {
      s = !0, d();
    }, w.onFocusout = () => {
      s = !1, g();
    }), e.closeOnContentClick) {
      const P = be(Wl, null);
      w.onClick = () => {
        t.value = !1, P == null || P.closeParents();
      };
    }
    return w;
  }), S = b(() => {
    const w = {};
    return e.openOnHover && (w.onMouseenter = () => {
      c && (u = !0, c = !1, d());
    }, w.onMouseleave = () => {
      u = !1, g();
    }), w;
  });
  J(a, (w) => {
    var P;
    w && (e.openOnHover && !u && (!v.value || !s) || v.value && !s && (!e.openOnHover || !u)) && !((P = l.value) != null && P.contains(document.activeElement)) && (t.value = !1);
  }), J(t, (w) => {
    w || setTimeout(() => {
      y.value = void 0;
    });
  }, {
    flush: "post"
  });
  const C = pa();
  Fe(() => {
    C.value && we(() => {
      o.value = C.el;
    });
  });
  const T = pa(), I = b(() => e.target === "cursor" && y.value ? y.value : T.value ? T.el : ds(e.target, i) || o.value), _ = b(() => Array.isArray(I.value) ? void 0 : I.value);
  let D;
  return J(() => !!e.activator, (w) => {
    w && xe ? (D = Xl(), D.run(() => {
      _m(e, i, {
        activatorEl: o,
        activatorEvents: m
      });
    })) : D && D.stop();
  }, {
    flush: "post",
    immediate: !0
  }), Xe(() => {
    D == null || D.stop();
  }), {
    activatorEl: o,
    activatorRef: C,
    target: I,
    targetEl: _,
    targetRef: T,
    activatorEvents: m,
    contentEvents: k,
    scrimEvents: S
  };
}
function _m(e, n, t) {
  let {
    activatorEl: a,
    activatorEvents: l
  } = t;
  J(() => e.activator, (s, c) => {
    if (c && s !== c) {
      const v = u(c);
      v && o(v);
    }
    s && we(() => i());
  }, {
    immediate: !0
  }), J(() => e.activatorProps, () => {
    i();
  }), Xe(() => {
    o();
  });
  function i() {
    let s = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : u(), c = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : e.activatorProps;
    s && vd(s, O(l.value, c));
  }
  function o() {
    let s = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : u(), c = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : e.activatorProps;
    s && fd(s, O(l.value, c));
  }
  function u() {
    let s = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : e.activator;
    const c = ds(s, n);
    return a.value = (c == null ? void 0 : c.nodeType) === Node.ELEMENT_NODE ? c : void 0, a.value;
  }
}
function ds(e, n) {
  var a, l;
  if (!e) return;
  let t;
  if (e === "parent") {
    let i = (l = (a = n == null ? void 0 : n.proxy) == null ? void 0 : a.$el) == null ? void 0 : l.parentNode;
    for (; i != null && i.hasAttribute("data-no-activator"); )
      i = i.parentNode;
    t = i;
  } else typeof e == "string" ? t = document.querySelector(e) : "$el" in e ? t = e.$el : t = e;
  return t;
}
function vs() {
  if (!xe) return G(!1);
  const {
    ssr: e
  } = ht();
  if (e) {
    const n = G(!1);
    return Ue(() => {
      n.value = !0;
    }), n;
  } else
    return G(!0);
}
const Ci = p({
  eager: Boolean
}, "lazy");
function Vi(e, n) {
  const t = G(!1), a = b(() => t.value || e.eager || n.value);
  J(n, () => t.value = !0);
  function l() {
    e.eager || (t.value = !1);
  }
  return {
    isBooted: t,
    hasContent: a,
    onAfterLeave: l
  };
}
function xn() {
  const n = Le("useScopeId").vnode.scopeId;
  return {
    scopeId: n ? {
      [n]: ""
    } : void 0
  };
}
const Wo = Symbol.for("vuetify:stack"), Xn = lt([]);
function Tm(e, n, t) {
  const a = Le("useStack"), l = !t, i = be(Wo, void 0), o = lt({
    activeChildren: /* @__PURE__ */ new Set()
  });
  De(Wo, o);
  const u = G(Number(n.value));
  ot(e, () => {
    var f;
    const v = (f = Xn.at(-1)) == null ? void 0 : f[1];
    u.value = v ? v + 10 : Number(n.value), l && Xn.push([a.uid, u.value]), i == null || i.activeChildren.add(a.uid), Xe(() => {
      if (l) {
        const d = Be(Xn).findIndex((g) => g[0] === a.uid);
        Xn.splice(d, 1);
      }
      i == null || i.activeChildren.delete(a.uid);
    });
  });
  const s = G(!0);
  l && Fe(() => {
    var f;
    const v = ((f = Xn.at(-1)) == null ? void 0 : f[0]) === a.uid;
    setTimeout(() => s.value = v);
  });
  const c = b(() => !o.activeChildren.size);
  return {
    globalTop: Zl(s),
    localTop: c,
    stackStyles: b(() => ({
      zIndex: u.value
    }))
  };
}
function Am(e) {
  return {
    teleportTarget: b(() => {
      const t = e();
      if (t === !0 || !xe) return;
      const a = t === !1 ? document.body : typeof t == "string" ? document.querySelector(t) : t;
      if (a == null) {
        Ua(`Unable to locate target ${t}`);
        return;
      }
      let l = [...a.children].find((i) => i.matches(".v-overlay-container"));
      return l || (l = document.createElement("div"), l.className = "v-overlay-container", a.appendChild(l)), l;
    })
  };
}
function Dm() {
  return !0;
}
function fs(e, n, t) {
  if (!e || ms(e, t) === !1) return !1;
  const a = Jr(n);
  if (typeof ShadowRoot < "u" && a instanceof ShadowRoot && a.host === e.target) return !1;
  const l = (typeof t.value == "object" && t.value.include || (() => []))();
  return l.push(n), !l.some((i) => i == null ? void 0 : i.contains(e.target));
}
function ms(e, n) {
  return (typeof n.value == "object" && n.value.closeConditional || Dm)(e);
}
function Bm(e, n, t) {
  const a = typeof t.value == "function" ? t.value : t.value.handler;
  e.shadowTarget = e.target, n._clickOutside.lastMousedownWasOutside && fs(e, n, t) && setTimeout(() => {
    ms(e, t) && a && a(e);
  }, 0);
}
function jo(e, n) {
  const t = Jr(e);
  n(document), typeof ShadowRoot < "u" && t instanceof ShadowRoot && n(t);
}
const Mm = {
  // [data-app] may not be found
  // if using bind, inserted makes
  // sure that the root element is
  // available, iOS does not support
  // clicks on body
  mounted(e, n) {
    const t = (l) => Bm(l, e, n), a = (l) => {
      e._clickOutside.lastMousedownWasOutside = fs(l, e, n);
    };
    jo(e, (l) => {
      l.addEventListener("click", t, !0), l.addEventListener("mousedown", a, !0);
    }), e._clickOutside || (e._clickOutside = {
      lastMousedownWasOutside: !1
    }), e._clickOutside[n.instance.$.uid] = {
      onClick: t,
      onMousedown: a
    };
  },
  beforeUnmount(e, n) {
    e._clickOutside && (jo(e, (t) => {
      var i;
      if (!t || !((i = e._clickOutside) != null && i[n.instance.$.uid])) return;
      const {
        onClick: a,
        onMousedown: l
      } = e._clickOutside[n.instance.$.uid];
      t.removeEventListener("click", a, !0), t.removeEventListener("mousedown", l, !0);
    }), delete e._clickOutside[n.instance.$.uid]);
  }
};
function pm(e) {
  const {
    modelValue: n,
    color: t,
    ...a
  } = e;
  return r(Wt, {
    name: "fade-transition",
    appear: !0
  }, {
    default: () => [e.modelValue && r("div", O({
      class: ["v-overlay__scrim", e.color.backgroundColorClasses.value],
      style: e.color.backgroundColorStyles.value
    }, a), null)]
  });
}
const ya = p({
  absolute: Boolean,
  attach: [Boolean, String, Object],
  closeOnBack: {
    type: Boolean,
    default: !0
  },
  contained: Boolean,
  contentClass: null,
  contentProps: null,
  disabled: Boolean,
  opacity: [Number, String],
  noClickAnimation: Boolean,
  modelValue: Boolean,
  persistent: Boolean,
  scrim: {
    type: [Boolean, String],
    default: !0
  },
  zIndex: {
    type: [Number, String],
    default: 2e3
  },
  ...Pm(),
  ...le(),
  ...Re(),
  ...Ci(),
  ...mm(),
  ...Sm(),
  ...ke(),
  ...Vt()
}, "VOverlay"), Tt = L()({
  name: "VOverlay",
  directives: {
    ClickOutside: Mm
  },
  inheritAttrs: !1,
  props: {
    _disableGlobalStack: Boolean,
    ...ya()
  },
  emits: {
    "click:outside": (e) => !0,
    "update:modelValue": (e) => !0,
    keydown: (e) => !0,
    afterEnter: () => !0,
    afterLeave: () => !0
  },
  setup(e, n) {
    let {
      slots: t,
      attrs: a,
      emit: l
    } = n;
    const i = Le("VOverlay"), o = U(), u = U(), s = U(), c = oe(e, "modelValue"), v = b({
      get: () => c.value,
      set: (K) => {
        K && e.disabled || (c.value = K);
      }
    }), {
      themeClasses: f
    } = Ve(e), {
      rtlClasses: d,
      isRtl: g
    } = We(), {
      hasContent: y,
      onAfterLeave: h
    } = Vi(e, v), m = Pe(b(() => typeof e.scrim == "string" ? e.scrim : null)), {
      globalTop: k,
      localTop: S,
      stackStyles: C
    } = Tm(v, $(e, "zIndex"), e._disableGlobalStack), {
      activatorEl: T,
      activatorRef: I,
      target: _,
      targetEl: D,
      targetRef: w,
      activatorEvents: P,
      contentEvents: A,
      scrimEvents: V
    } = Im(e, {
      isActive: v,
      isTop: S,
      contentEl: s
    }), {
      teleportTarget: x
    } = Am(() => {
      var ye, he, q;
      const K = e.attach || e.contained;
      if (K) return K;
      const ne = ((ye = T == null ? void 0 : T.value) == null ? void 0 : ye.getRootNode()) || ((q = (he = i.proxy) == null ? void 0 : he.$el) == null ? void 0 : q.getRootNode());
      return ne instanceof ShadowRoot ? ne : !1;
    }), {
      dimensionStyles: M
    } = He(e), E = vs(), {
      scopeId: N
    } = xn();
    J(() => e.disabled, (K) => {
      K && (v.value = !1);
    });
    const {
      contentStyles: j,
      updateLocation: ee
    } = gm(e, {
      isRtl: g,
      contentEl: s,
      target: _,
      isActive: v
    });
    wm(e, {
      root: o,
      contentEl: s,
      targetEl: D,
      isActive: v,
      updateLocation: ee
    });
    function W(K) {
      l("click:outside", K), e.persistent ? Q() : v.value = !1;
    }
    function R(K) {
      return v.value && k.value && // If using scrim, only close if clicking on it rather than anything opened on top
      (!e.scrim || K.target === u.value || K instanceof MouseEvent && K.shadowTarget === u.value);
    }
    xe && J(v, (K) => {
      K ? window.addEventListener("keydown", F) : window.removeEventListener("keydown", F);
    }, {
      immediate: !0
    }), Ze(() => {
      xe && window.removeEventListener("keydown", F);
    });
    function F(K) {
      var ne, ye, he;
      K.key === "Escape" && k.value && ((ne = s.value) != null && ne.contains(document.activeElement) || l("keydown", K), e.persistent ? Q() : (v.value = !1, (ye = s.value) != null && ye.contains(document.activeElement) && ((he = T.value) == null || he.focus())));
    }
    function B(K) {
      K.key === "Escape" && !k.value || l("keydown", K);
    }
    const H = Au();
    ot(() => e.closeOnBack, () => {
      Sf(H, (K) => {
        k.value && v.value ? (K(!1), e.persistent ? Q() : v.value = !1) : K();
      });
    });
    const Z = U();
    J(() => v.value && (e.absolute || e.contained) && x.value == null, (K) => {
      if (K) {
        const ne = ri(o.value);
        ne && ne !== document.scrollingElement && (Z.value = ne.scrollTop);
      }
    });
    function Q() {
      e.noClickAnimation || s.value && nn(s.value, [{
        transformOrigin: "center"
      }, {
        transform: "scale(1.03)"
      }, {
        transformOrigin: "center"
      }], {
        duration: 150,
        easing: Jn
      });
    }
    function re() {
      l("afterEnter");
    }
    function X() {
      h(), l("afterLeave");
    }
    return z(() => {
      var K;
      return r(ie, null, [(K = t.activator) == null ? void 0 : K.call(t, {
        isActive: v.value,
        targetRef: w,
        props: O({
          ref: I
        }, P.value, e.activatorProps)
      }), E.value && y.value && r(Gc, {
        disabled: !x.value,
        to: x.value
      }, {
        default: () => [r("div", O({
          class: ["v-overlay", {
            "v-overlay--absolute": e.absolute || e.contained,
            "v-overlay--active": v.value,
            "v-overlay--contained": e.contained
          }, f.value, d.value, e.class],
          style: [C.value, {
            "--v-overlay-opacity": e.opacity,
            top: te(Z.value)
          }, e.style],
          ref: o,
          onKeydown: B
        }, N, a), [r(pm, O({
          color: m,
          modelValue: v.value && !!e.scrim,
          ref: u
        }, V.value), null), r(tt, {
          appear: !0,
          persisted: !0,
          transition: e.transition,
          target: _.value,
          onAfterEnter: re,
          onAfterLeave: X
        }, {
          default: () => {
            var ne;
            return [$e(r("div", O({
              ref: s,
              class: ["v-overlay__content", e.contentClass],
              style: [M.value, j.value]
            }, A.value, e.contentProps), [(ne = t.default) == null ? void 0 : ne.call(t, {
              isActive: v
            })]), [[Ct, v.value], [mt("click-outside"), {
              handler: W,
              closeConditional: R,
              include: () => [T.value]
            }]])];
          }
        })])]
      })]);
    }), {
      activatorEl: T,
      scrimEl: u,
      target: _,
      animateClick: Q,
      contentEl: s,
      globalTop: k,
      localTop: S,
      updateLocation: ee
    };
  }
}), Vl = Symbol("Forwarded refs");
function Pl(e, n) {
  let t = e;
  for (; t; ) {
    const a = Reflect.getOwnPropertyDescriptor(t, n);
    if (a) return a;
    t = Object.getPrototypeOf(t);
  }
}
function ct(e) {
  for (var n = arguments.length, t = new Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++)
    t[a - 1] = arguments[a];
  return e[Vl] = t, new Proxy(e, {
    get(l, i) {
      if (Reflect.has(l, i))
        return Reflect.get(l, i);
      if (!(typeof i == "symbol" || i.startsWith("$") || i.startsWith("__"))) {
        for (const o of t)
          if (o.value && Reflect.has(o.value, i)) {
            const u = Reflect.get(o.value, i);
            return typeof u == "function" ? u.bind(o.value) : u;
          }
      }
    },
    has(l, i) {
      if (Reflect.has(l, i))
        return !0;
      if (typeof i == "symbol" || i.startsWith("$") || i.startsWith("__")) return !1;
      for (const o of t)
        if (o.value && Reflect.has(o.value, i))
          return !0;
      return !1;
    },
    set(l, i, o) {
      if (Reflect.has(l, i))
        return Reflect.set(l, i, o);
      if (typeof i == "symbol" || i.startsWith("$") || i.startsWith("__")) return !1;
      for (const u of t)
        if (u.value && Reflect.has(u.value, i))
          return Reflect.set(u.value, i, o);
      return !1;
    },
    getOwnPropertyDescriptor(l, i) {
      var u;
      const o = Reflect.getOwnPropertyDescriptor(l, i);
      if (o) return o;
      if (!(typeof i == "symbol" || i.startsWith("$") || i.startsWith("__"))) {
        for (const s of t) {
          if (!s.value) continue;
          const c = Pl(s.value, i) ?? ("_" in s.value ? Pl((u = s.value._) == null ? void 0 : u.setupState, i) : void 0);
          if (c) return c;
        }
        for (const s of t) {
          const c = s.value && s.value[Vl];
          if (!c) continue;
          const v = c.slice();
          for (; v.length; ) {
            const f = v.shift(), d = Pl(f.value, i);
            if (d) return d;
            const g = f.value && f.value[Vl];
            g && v.push(...g);
          }
        }
      }
    }
  });
}
const gs = p({
  // TODO
  // disableKeys: Boolean,
  id: String,
  submenu: Boolean,
  ...Ce(ya({
    closeDelay: 250,
    closeOnContentClick: !0,
    locationStrategy: "connected",
    location: void 0,
    openDelay: 300,
    scrim: !1,
    scrollStrategy: "reposition",
    transition: {
      component: di
    }
  }), ["absolute"])
}, "VMenu"), Fn = L()({
  name: "VMenu",
  props: gs(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, n) {
    let {
      slots: t
    } = n;
    const a = oe(e, "modelValue"), {
      scopeId: l
    } = xn(), {
      isRtl: i
    } = We(), o = Ke(), u = b(() => e.id || `v-menu-${o}`), s = U(), c = be(Wl, null), v = G(/* @__PURE__ */ new Set());
    De(Wl, {
      register() {
        v.value.add(o);
      },
      unregister() {
        v.value.delete(o);
      },
      closeParents(m) {
        setTimeout(() => {
          var k;
          !v.value.size && !e.persistent && (m == null || (k = s.value) != null && k.contentEl && !cd(m, s.value.contentEl)) && (a.value = !1, c == null || c.closeParents());
        }, 40);
      }
    }), Ze(() => {
      c == null || c.unregister(), document.removeEventListener("focusin", f);
    }), _r(() => a.value = !1);
    async function f(m) {
      var C, T, I;
      const k = m.relatedTarget, S = m.target;
      await we(), a.value && k !== S && ((C = s.value) != null && C.contentEl) && // We're the topmost menu
      ((T = s.value) != null && T.globalTop) && // It isn't the document or the menu body
      ![document, s.value.contentEl].includes(S) && // It isn't inside the menu body
      !s.value.contentEl.contains(S) && ((I = Qn(s.value.contentEl)[0]) == null || I.focus());
    }
    J(a, (m) => {
      m ? (c == null || c.register(), xe && document.addEventListener("focusin", f, {
        once: !0
      })) : (c == null || c.unregister(), xe && document.removeEventListener("focusin", f));
    }, {
      immediate: !0
    });
    function d(m) {
      c == null || c.closeParents(m);
    }
    function g(m) {
      var k, S, C, T, I;
      if (!e.disabled)
        if (m.key === "Tab" || m.key === "Enter" && !e.closeOnContentClick) {
          if (m.key === "Enter" && (m.target instanceof HTMLTextAreaElement || m.target instanceof HTMLInputElement && m.target.closest("form"))) return;
          m.key === "Enter" && m.preventDefault(), $r(Qn((k = s.value) == null ? void 0 : k.contentEl, !1), m.shiftKey ? "prev" : "next", (D) => D.tabIndex >= 0) || (a.value = !1, (C = (S = s.value) == null ? void 0 : S.activatorEl) == null || C.focus());
        } else e.submenu && m.key === (i.value ? "ArrowRight" : "ArrowLeft") && (a.value = !1, (I = (T = s.value) == null ? void 0 : T.activatorEl) == null || I.focus());
    }
    function y(m) {
      var S;
      if (e.disabled) return;
      const k = (S = s.value) == null ? void 0 : S.contentEl;
      k && a.value ? m.key === "ArrowDown" ? (m.preventDefault(), m.stopImmediatePropagation(), on(k, "next")) : m.key === "ArrowUp" ? (m.preventDefault(), m.stopImmediatePropagation(), on(k, "prev")) : e.submenu && (m.key === (i.value ? "ArrowRight" : "ArrowLeft") ? a.value = !1 : m.key === (i.value ? "ArrowLeft" : "ArrowRight") && (m.preventDefault(), on(k, "first"))) : (e.submenu ? m.key === (i.value ? "ArrowLeft" : "ArrowRight") : ["ArrowDown", "ArrowUp"].includes(m.key)) && (a.value = !0, m.preventDefault(), setTimeout(() => setTimeout(() => y(m))));
    }
    const h = b(() => O({
      "aria-haspopup": "menu",
      "aria-expanded": String(a.value),
      "aria-controls": u.value,
      onKeydown: y
    }, e.activatorProps));
    return z(() => {
      const m = Tt.filterProps(e);
      return r(Tt, O({
        ref: s,
        id: u.value,
        class: ["v-menu", e.class],
        style: e.style
      }, m, {
        modelValue: a.value,
        "onUpdate:modelValue": (k) => a.value = k,
        absolute: !0,
        activatorProps: h.value,
        location: e.location ?? (e.submenu ? "end" : "bottom"),
        "onClick:outside": d,
        onKeydown: g
      }, l), {
        activator: t.activator,
        default: function() {
          for (var k = arguments.length, S = new Array(k), C = 0; C < k; C++)
            S[C] = arguments[C];
          return r(de, {
            root: "VMenu"
          }, {
            default: () => {
              var T;
              return [(T = t.default) == null ? void 0 : T.call(t, ...S)];
            }
          });
        }
      });
    }), ct({
      id: u,
      ΨopenChildren: v
    }, s);
  }
}), Em = p({
  active: Boolean,
  disabled: Boolean,
  max: [Number, String],
  value: {
    type: [Number, String],
    default: 0
  },
  ...le(),
  ...Vt({
    transition: {
      component: wu
    }
  })
}, "VCounter"), Pi = L()({
  name: "VCounter",
  functional: !0,
  props: Em(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    const a = b(() => e.max ? `${e.value} / ${e.max}` : String(e.value));
    return z(() => r(tt, {
      transition: e.transition
    }, {
      default: () => [$e(r("div", {
        class: ["v-counter", {
          "text-error": e.max && !e.disabled && parseFloat(e.value) > parseFloat(e.max)
        }, e.class],
        style: e.style
      }, [t.default ? t.default({
        counter: a.value,
        max: e.max,
        value: e.value
      }) : a.value]), [[Ct, e.active]])]
    })), {};
  }
}), Fm = p({
  floating: Boolean,
  ...le()
}, "VFieldLabel"), _a = L()({
  name: "VFieldLabel",
  props: Fm(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    return z(() => r(ga, {
      class: ["v-field-label", {
        "v-field-label--floating": e.floating
      }, e.class],
      style: e.style,
      "aria-hidden": e.floating || void 0
    }, t)), {};
  }
}), $m = ["underlined", "outlined", "filled", "solo", "solo-inverted", "solo-filled", "plain"], ba = p({
  appendInnerIcon: ue,
  bgColor: String,
  clearable: Boolean,
  clearIcon: {
    type: ue,
    default: "$clear"
  },
  active: Boolean,
  centerAffix: {
    type: Boolean,
    default: void 0
  },
  color: String,
  baseColor: String,
  dirty: Boolean,
  disabled: {
    type: Boolean,
    default: null
  },
  error: Boolean,
  flat: Boolean,
  label: String,
  persistentClear: Boolean,
  prependInnerIcon: ue,
  reverse: Boolean,
  singleLine: Boolean,
  variant: {
    type: String,
    default: "filled",
    validator: (e) => $m.includes(e)
  },
  "onClick:clear": Ye(),
  "onClick:appendInner": Ye(),
  "onClick:prependInner": Ye(),
  ...le(),
  ...tl(),
  ...Ee(),
  ...ke()
}, "VField"), fn = L()({
  name: "VField",
  inheritAttrs: !1,
  props: {
    id: String,
    ...Un(),
    ...ba()
  },
  emits: {
    "update:focused": (e) => !0,
    "update:modelValue": (e) => !0
  },
  setup(e, n) {
    let {
      attrs: t,
      emit: a,
      slots: l
    } = n;
    const {
      themeClasses: i
    } = Ve(e), {
      loaderClasses: o
    } = da(e), {
      focusClasses: u,
      isFocused: s,
      focus: c,
      blur: v
    } = Pt(e), {
      InputIcon: f
    } = Ru(e), {
      roundedClasses: d
    } = Oe(e), {
      rtlClasses: g
    } = We(), y = b(() => e.dirty || e.active), h = b(() => !!(e.label || l.label)), m = b(() => !e.singleLine && h.value), k = Ke(), S = b(() => e.id || `input-${k}`), C = b(() => `${S.value}-messages`), T = U(), I = U(), _ = U(), D = b(() => ["plain", "underlined"].includes(e.variant)), {
      backgroundColorClasses: w,
      backgroundColorStyles: P
    } = Pe($(e, "bgColor")), {
      textColorClasses: A,
      textColorStyles: V
    } = Ge(b(() => e.error || e.disabled ? void 0 : y.value && s.value ? e.color : e.baseColor));
    J(y, (E) => {
      if (m.value) {
        const N = T.value.$el, j = I.value.$el;
        requestAnimationFrame(() => {
          const ee = ai(N), W = j.getBoundingClientRect(), R = W.x - ee.x, F = W.y - ee.y - (ee.height / 2 - W.height / 2), B = W.width / 0.75, H = Math.abs(B - ee.width) > 1 ? {
            maxWidth: te(B)
          } : void 0, Z = getComputedStyle(N), Q = getComputedStyle(j), re = parseFloat(Z.transitionDuration) * 1e3 || 150, X = parseFloat(Q.getPropertyValue("--v-field-label-scale")), K = Q.getPropertyValue("color");
          N.style.visibility = "visible", j.style.visibility = "hidden", nn(N, {
            transform: `translate(${R}px, ${F}px) scale(${X})`,
            color: K,
            ...H
          }, {
            duration: re,
            easing: Jn,
            direction: E ? "normal" : "reverse"
          }).finished.then(() => {
            N.style.removeProperty("visibility"), j.style.removeProperty("visibility");
          });
        });
      }
    }, {
      flush: "post"
    });
    const x = b(() => ({
      isActive: y,
      isFocused: s,
      controlRef: _,
      blur: v,
      focus: c
    }));
    function M(E) {
      E.target !== document.activeElement && E.preventDefault();
    }
    return z(() => {
      var R, F, B;
      const E = e.variant === "outlined", N = !!(l["prepend-inner"] || e.prependInnerIcon), j = !!(e.clearable || l.clear) && !e.disabled, ee = !!(l["append-inner"] || e.appendInnerIcon || j), W = () => l.label ? l.label({
        ...x.value,
        label: e.label,
        props: {
          for: S.value
        }
      }) : e.label;
      return r("div", O({
        class: ["v-field", {
          "v-field--active": y.value,
          "v-field--appended": ee,
          "v-field--center-affix": e.centerAffix ?? !D.value,
          "v-field--disabled": e.disabled,
          "v-field--dirty": e.dirty,
          "v-field--error": e.error,
          "v-field--flat": e.flat,
          "v-field--has-background": !!e.bgColor,
          "v-field--persistent-clear": e.persistentClear,
          "v-field--prepended": N,
          "v-field--reverse": e.reverse,
          "v-field--single-line": e.singleLine,
          "v-field--no-label": !W(),
          [`v-field--variant-${e.variant}`]: !0
        }, i.value, w.value, u.value, o.value, d.value, g.value, e.class],
        style: [P.value, e.style],
        onClick: M
      }, t), [r("div", {
        class: "v-field__overlay"
      }, null), r(va, {
        name: "v-field",
        active: !!e.loading,
        color: e.error ? "error" : typeof e.loading == "string" ? e.loading : e.color
      }, {
        default: l.loader
      }), N && r("div", {
        key: "prepend",
        class: "v-field__prepend-inner"
      }, [e.prependInnerIcon && r(f, {
        key: "prepend-icon",
        name: "prependInner"
      }, null), (R = l["prepend-inner"]) == null ? void 0 : R.call(l, x.value)]), r("div", {
        class: "v-field__field",
        "data-no-activator": ""
      }, [["filled", "solo", "solo-inverted", "solo-filled"].includes(e.variant) && m.value && r(_a, {
        key: "floating-label",
        ref: I,
        class: [A.value],
        floating: !0,
        for: S.value,
        style: V.value
      }, {
        default: () => [W()]
      }), h.value && r(_a, {
        key: "label",
        ref: T,
        for: S.value
      }, {
        default: () => [W()]
      }), (F = l.default) == null ? void 0 : F.call(l, {
        ...x.value,
        props: {
          id: S.value,
          class: "v-field__input",
          "aria-describedby": C.value
        },
        focus: c,
        blur: v
      })]), j && r(xu, {
        key: "clear"
      }, {
        default: () => [$e(r("div", {
          class: "v-field__clearable",
          onMousedown: (H) => {
            H.preventDefault(), H.stopPropagation();
          }
        }, [r(de, {
          defaults: {
            VIcon: {
              icon: e.clearIcon
            }
          }
        }, {
          default: () => [l.clear ? l.clear({
            ...x.value,
            props: {
              onFocus: c,
              onBlur: v,
              onClick: e["onClick:clear"]
            }
          }) : r(f, {
            name: "clear",
            onFocus: c,
            onBlur: v
          }, null)]
        })]), [[Ct, e.dirty]])]
      }), ee && r("div", {
        key: "append",
        class: "v-field__append-inner"
      }, [(B = l["append-inner"]) == null ? void 0 : B.call(l, x.value), e.appendInnerIcon && r(f, {
        key: "append-icon",
        name: "appendInner"
      }, null)]), r("div", {
        class: ["v-field__outline", A.value],
        style: V.value
      }, [E && r(ie, null, [r("div", {
        class: "v-field__outline__start"
      }, null), m.value && r("div", {
        class: "v-field__outline__notch"
      }, [r(_a, {
        ref: I,
        floating: !0,
        for: S.value
      }, {
        default: () => [W()]
      })]), r("div", {
        class: "v-field__outline__end"
      }, null)]), D.value && m.value && r(_a, {
        ref: I,
        floating: !0,
        for: S.value
      }, {
        default: () => [W()]
      })])]);
    }), {
      controlRef: _
    };
  }
}), Lm = ["color", "file", "time", "date", "datetime-local", "week", "month"], Gn = p({
  autofocus: Boolean,
  counter: [Boolean, Number, String],
  counterValue: [Number, Function],
  prefix: String,
  placeholder: String,
  persistentPlaceholder: Boolean,
  persistentCounter: Boolean,
  suffix: String,
  role: String,
  type: {
    type: String,
    default: "text"
  },
  modelModifiers: Object,
  ...Ht(),
  ...ba()
}, "VTextField"), At = L()({
  name: "VTextField",
  directives: {
    Intersect: Ja
  },
  inheritAttrs: !1,
  props: Gn(),
  emits: {
    "click:control": (e) => !0,
    "mousedown:control": (e) => !0,
    "update:focused": (e) => !0,
    "update:modelValue": (e) => !0
  },
  setup(e, n) {
    let {
      attrs: t,
      emit: a,
      slots: l
    } = n;
    const i = oe(e, "modelValue"), {
      isFocused: o,
      focus: u,
      blur: s
    } = Pt(e), c = b(() => typeof e.counterValue == "function" ? e.counterValue(i.value) : typeof e.counterValue == "number" ? e.counterValue : (i.value ?? "").toString().length), v = b(() => {
      if (t.maxlength) return t.maxlength;
      if (!(!e.counter || typeof e.counter != "number" && typeof e.counter != "string"))
        return e.counter;
    }), f = b(() => ["plain", "underlined"].includes(e.variant));
    function d(_, D) {
      var w, P;
      !e.autofocus || !_ || (P = (w = D[0].target) == null ? void 0 : w.focus) == null || P.call(w);
    }
    const g = U(), y = U(), h = U(), m = b(() => Lm.includes(e.type) || e.persistentPlaceholder || o.value || e.active);
    function k() {
      var _;
      h.value !== document.activeElement && ((_ = h.value) == null || _.focus()), o.value || u();
    }
    function S(_) {
      a("mousedown:control", _), _.target !== h.value && (k(), _.preventDefault());
    }
    function C(_) {
      k(), a("click:control", _);
    }
    function T(_) {
      _.stopPropagation(), k(), we(() => {
        i.value = null, Ga(e["onClick:clear"], _);
      });
    }
    function I(_) {
      var w;
      const D = _.target;
      if (i.value = D.value, (w = e.modelModifiers) != null && w.trim && ["text", "search", "password", "tel", "url"].includes(e.type)) {
        const P = [D.selectionStart, D.selectionEnd];
        we(() => {
          D.selectionStart = P[0], D.selectionEnd = P[1];
        });
      }
    }
    return z(() => {
      const _ = !!(l.counter || e.counter !== !1 && e.counter != null), D = !!(_ || l.details), [w, P] = Nt(t), {
        modelValue: A,
        ...V
      } = at.filterProps(e), x = fn.filterProps(e);
      return r(at, O({
        ref: g,
        modelValue: i.value,
        "onUpdate:modelValue": (M) => i.value = M,
        class: ["v-text-field", {
          "v-text-field--prefixed": e.prefix,
          "v-text-field--suffixed": e.suffix,
          "v-input--plain-underlined": f.value
        }, e.class],
        style: e.style
      }, w, V, {
        centerAffix: !f.value,
        focused: o.value
      }), {
        ...l,
        default: (M) => {
          let {
            id: E,
            isDisabled: N,
            isDirty: j,
            isReadonly: ee,
            isValid: W
          } = M;
          return r(fn, O({
            ref: y,
            onMousedown: S,
            onClick: C,
            "onClick:clear": T,
            "onClick:prependInner": e["onClick:prependInner"],
            "onClick:appendInner": e["onClick:appendInner"],
            role: e.role
          }, x, {
            id: E.value,
            active: m.value || j.value,
            dirty: j.value || e.dirty,
            disabled: N.value,
            focused: o.value,
            error: W.value === !1
          }), {
            ...l,
            default: (R) => {
              let {
                props: {
                  class: F,
                  ...B
                }
              } = R;
              const H = $e(r("input", O({
                ref: h,
                value: i.value,
                onInput: I,
                autofocus: e.autofocus,
                readonly: ee.value,
                disabled: N.value,
                name: e.name,
                placeholder: e.placeholder,
                size: 1,
                type: e.type,
                onFocus: k,
                onBlur: s
              }, B, P), null), [[mt("intersect"), {
                handler: d
              }, null, {
                once: !0
              }]]);
              return r(ie, null, [e.prefix && r("span", {
                class: "v-text-field__prefix"
              }, [r("span", {
                class: "v-text-field__prefix__text"
              }, [e.prefix])]), l.default ? r("div", {
                class: F,
                "data-no-activator": ""
              }, [l.default(), H]) : Kc(H, {
                class: F
              }), e.suffix && r("span", {
                class: "v-text-field__suffix"
              }, [r("span", {
                class: "v-text-field__suffix__text"
              }, [e.suffix])])]);
            }
          });
        },
        details: D ? (M) => {
          var E;
          return r(ie, null, [(E = l.details) == null ? void 0 : E.call(l, M), _ && r(ie, null, [r("span", null, null), r(Pi, {
            active: e.persistentCounter || o.value,
            value: c.value,
            max: v.value,
            disabled: e.disabled
          }, l.counter)])]);
        } : void 0
      });
    }), ct({}, g, y, h);
  }
}), Om = p({
  renderless: Boolean,
  ...le()
}, "VVirtualScrollItem"), hs = L()({
  name: "VVirtualScrollItem",
  inheritAttrs: !1,
  props: Om(),
  emits: {
    "update:height": (e) => !0
  },
  setup(e, n) {
    let {
      attrs: t,
      emit: a,
      slots: l
    } = n;
    const {
      resizeRef: i,
      contentRect: o
    } = xt(void 0, "border");
    J(() => {
      var u;
      return (u = o.value) == null ? void 0 : u.height;
    }, (u) => {
      u != null && a("update:height", u);
    }), z(() => {
      var u, s;
      return e.renderless ? r(ie, null, [(u = l.default) == null ? void 0 : u.call(l, {
        itemRef: i
      })]) : r("div", O({
        ref: i,
        class: ["v-virtual-scroll__item", e.class],
        style: e.style
      }, t), [(s = l.default) == null ? void 0 : s.call(l)]);
    });
  }
}), Nm = -1, Rm = 1, Il = 100, ys = p({
  itemHeight: {
    type: [Number, String],
    default: null
  },
  height: [Number, String]
}, "virtual");
function bs(e, n) {
  const t = ht(), a = G(0);
  Fe(() => {
    a.value = parseFloat(e.itemHeight || 0);
  });
  const l = G(0), i = G(Math.ceil(
    // Assume 16px items filling the entire screen height if
    // not provided. This is probably incorrect but it minimises
    // the chance of ending up with empty space at the bottom.
    // The default value is set here to avoid poisoning getSize()
    (parseInt(e.height) || t.height.value) / (a.value || 16)
  ) || 1), o = G(0), u = G(0), s = U(), c = U();
  let v = 0;
  const {
    resizeRef: f,
    contentRect: d
  } = xt();
  Fe(() => {
    f.value = s.value;
  });
  const g = b(() => {
    var F;
    return s.value === document.documentElement ? t.height.value : ((F = d.value) == null ? void 0 : F.height) || parseInt(e.height) || 0;
  }), y = b(() => !!(s.value && c.value && g.value && a.value));
  let h = Array.from({
    length: n.value.length
  }), m = Array.from({
    length: n.value.length
  });
  const k = G(0);
  let S = -1;
  function C(F) {
    return h[F] || a.value;
  }
  const T = ld(() => {
    const F = performance.now();
    m[0] = 0;
    const B = n.value.length;
    for (let H = 1; H <= B - 1; H++)
      m[H] = (m[H - 1] || 0) + C(H - 1);
    k.value = Math.max(k.value, performance.now() - F);
  }, k), I = J(y, (F) => {
    F && (I(), v = c.value.offsetTop, T.immediate(), j(), ~S && we(() => {
      xe && window.requestAnimationFrame(() => {
        W(S), S = -1;
      });
    }));
  });
  Xe(() => {
    T.clear();
  });
  function _(F, B) {
    const H = h[F], Z = a.value;
    a.value = Z ? Math.min(a.value, B) : B, (H !== B || Z !== a.value) && (h[F] = B, T());
  }
  function D(F) {
    return F = Me(F, 0, n.value.length - 1), m[F] || 0;
  }
  function w(F) {
    return Hm(m, F);
  }
  let P = 0, A = 0, V = 0;
  J(g, (F, B) => {
    B && (j(), F < B && requestAnimationFrame(() => {
      A = 0, j();
    }));
  });
  let x = -1;
  function M() {
    if (!s.value || !c.value) return;
    const F = s.value.scrollTop, B = performance.now();
    B - V > 500 ? (A = Math.sign(F - P), v = c.value.offsetTop) : A = F - P, P = F, V = B, window.clearTimeout(x), x = window.setTimeout(E, 500), j();
  }
  function E() {
    !s.value || !c.value || (A = 0, V = 0, window.clearTimeout(x), j());
  }
  let N = -1;
  function j() {
    cancelAnimationFrame(N), N = requestAnimationFrame(ee);
  }
  function ee() {
    if (!s.value || !g.value) return;
    const F = P - v, B = Math.sign(A), H = Math.max(0, F - Il), Z = Me(w(H), 0, n.value.length), Q = F + g.value + Il, re = Me(w(Q) + 1, Z + 1, n.value.length);
    if (
      // Only update the side we're scrolling towards,
      // the other side will be updated incidentally
      (B !== Nm || Z < l.value) && (B !== Rm || re > i.value)
    ) {
      const X = D(l.value) - D(Z), K = D(re) - D(i.value);
      Math.max(X, K) > Il ? (l.value = Z, i.value = re) : (Z <= 0 && (l.value = Z), re >= n.value.length && (i.value = re));
    }
    o.value = D(l.value), u.value = D(n.value.length) - D(i.value);
  }
  function W(F) {
    const B = D(F);
    !s.value || F && !B ? S = F : s.value.scrollTop = B;
  }
  const R = b(() => n.value.slice(l.value, i.value).map((F, B) => ({
    raw: F,
    index: B + l.value,
    key: Ya(F) && "value" in F ? F.value : B + l.value
  })));
  return J(n, () => {
    h = Array.from({
      length: n.value.length
    }), m = Array.from({
      length: n.value.length
    }), T.immediate(), j();
  }, {
    deep: !0
  }), {
    calculateVisibleItems: j,
    containerRef: s,
    markerRef: c,
    computedItems: R,
    paddingTop: o,
    paddingBottom: u,
    scrollToIndex: W,
    handleScroll: M,
    handleScrollend: E,
    handleItemResize: _
  };
}
function Hm(e, n) {
  let t = e.length - 1, a = 0, l = 0, i = null, o = -1;
  if (e[t] < n)
    return t;
  for (; a <= t; )
    if (l = a + t >> 1, i = e[l], i > n)
      t = l - 1;
    else if (i < n)
      o = l, a = l + 1;
    else return i === n ? l : a;
  return o;
}
const zm = p({
  items: {
    type: Array,
    default: () => []
  },
  renderless: Boolean,
  ...ys(),
  ...le(),
  ...Re()
}, "VVirtualScroll"), Ii = L()({
  name: "VVirtualScroll",
  props: zm(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    const a = Le("VVirtualScroll"), {
      dimensionStyles: l
    } = He(e), {
      calculateVisibleItems: i,
      containerRef: o,
      markerRef: u,
      handleScroll: s,
      handleScrollend: c,
      handleItemResize: v,
      scrollToIndex: f,
      paddingTop: d,
      paddingBottom: g,
      computedItems: y
    } = bs(e, $(e, "items"));
    return ot(() => e.renderless, () => {
      function h() {
        var S, C;
        const k = (arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1) ? "addEventListener" : "removeEventListener";
        o.value === document.documentElement ? (document[k]("scroll", s, {
          passive: !0
        }), document[k]("scrollend", c)) : ((S = o.value) == null || S[k]("scroll", s, {
          passive: !0
        }), (C = o.value) == null || C[k]("scrollend", c));
      }
      Ue(() => {
        o.value = ri(a.vnode.el, !0), h(!0);
      }), Xe(h);
    }), z(() => {
      const h = y.value.map((m) => r(hs, {
        key: m.key,
        renderless: e.renderless,
        "onUpdate:height": (k) => v(m.index, k)
      }, {
        default: (k) => {
          var S;
          return (S = t.default) == null ? void 0 : S.call(t, {
            item: m.raw,
            index: m.index,
            ...k
          });
        }
      }));
      return e.renderless ? r(ie, null, [r("div", {
        ref: u,
        class: "v-virtual-scroll__spacer",
        style: {
          paddingTop: te(d.value)
        }
      }, null), h, r("div", {
        class: "v-virtual-scroll__spacer",
        style: {
          paddingBottom: te(g.value)
        }
      }, null)]) : r("div", {
        ref: o,
        class: ["v-virtual-scroll", e.class],
        onScrollPassive: s,
        onScrollend: c,
        style: [l.value, e.style]
      }, [r("div", {
        ref: u,
        class: "v-virtual-scroll__container",
        style: {
          paddingTop: te(d.value),
          paddingBottom: te(g.value)
        }
      }, [h])]);
    }), {
      calculateVisibleItems: i,
      scrollToIndex: f
    };
  }
});
function _i(e, n) {
  const t = G(!1);
  let a;
  function l(u) {
    cancelAnimationFrame(a), t.value = !0, a = requestAnimationFrame(() => {
      a = requestAnimationFrame(() => {
        t.value = !1;
      });
    });
  }
  async function i() {
    await new Promise((u) => requestAnimationFrame(u)), await new Promise((u) => requestAnimationFrame(u)), await new Promise((u) => requestAnimationFrame(u)), await new Promise((u) => {
      if (t.value) {
        const s = J(t, () => {
          s(), u();
        });
      } else u();
    });
  }
  async function o(u) {
    var v, f;
    if (u.key === "Tab" && ((v = n.value) == null || v.focus()), !["PageDown", "PageUp", "Home", "End"].includes(u.key)) return;
    const s = (f = e.value) == null ? void 0 : f.$el;
    if (!s) return;
    (u.key === "Home" || u.key === "End") && s.scrollTo({
      top: u.key === "Home" ? 0 : s.scrollHeight,
      behavior: "smooth"
    }), await i();
    const c = s.querySelectorAll(":scope > :not(.v-virtual-scroll__spacer)");
    if (u.key === "PageDown" || u.key === "Home") {
      const d = s.getBoundingClientRect().top;
      for (const g of c)
        if (g.getBoundingClientRect().top >= d) {
          g.focus();
          break;
        }
    } else {
      const d = s.getBoundingClientRect().bottom;
      for (const g of [...c].reverse())
        if (g.getBoundingClientRect().bottom <= d) {
          g.focus();
          break;
        }
    }
  }
  return {
    onScrollPassive: l,
    onKeydown: o
  };
}
const Ti = p({
  chips: Boolean,
  closableChips: Boolean,
  closeText: {
    type: String,
    default: "$vuetify.close"
  },
  openText: {
    type: String,
    default: "$vuetify.open"
  },
  eager: Boolean,
  hideNoData: Boolean,
  hideSelected: Boolean,
  listProps: {
    type: Object
  },
  menu: Boolean,
  menuIcon: {
    type: ue,
    default: "$dropdown"
  },
  menuProps: {
    type: Object
  },
  multiple: Boolean,
  noDataText: {
    type: String,
    default: "$vuetify.noDataText"
  },
  openOnClear: Boolean,
  itemColor: String,
  ...ls({
    itemChildren: !1
  })
}, "Select"), Wm = p({
  ...Ti(),
  ...Ce(Gn({
    modelValue: null,
    role: "combobox"
  }), ["validationValue", "dirty", "appendInnerIcon"]),
  ...Vt({
    transition: {
      component: di
    }
  })
}, "VSelect"), ks = L()({
  name: "VSelect",
  props: Wm(),
  emits: {
    "update:focused": (e) => !0,
    "update:modelValue": (e) => !0,
    "update:menu": (e) => !0
  },
  setup(e, n) {
    let {
      slots: t
    } = n;
    const {
      t: a
    } = Te(), l = U(), i = U(), o = U(), u = oe(e, "menu"), s = b({
      get: () => u.value,
      set: (R) => {
        var F;
        u.value && !R && ((F = i.value) != null && F.ΨopenChildren.size) || (u.value = R);
      }
    }), {
      items: c,
      transformIn: v,
      transformOut: f
    } = wi(e), d = oe(e, "modelValue", [], (R) => v(R === null ? [null] : Ae(R)), (R) => {
      const F = f(R);
      return e.multiple ? F : F[0] ?? null;
    }), g = b(() => typeof e.counterValue == "function" ? e.counterValue(d.value) : typeof e.counterValue == "number" ? e.counterValue : d.value.length), y = ha(e), h = b(() => d.value.map((R) => R.value)), m = G(!1), k = b(() => s.value ? e.closeText : e.openText);
    let S = "", C;
    const T = b(() => e.hideSelected ? c.value.filter((R) => !d.value.some((F) => (e.valueComparator || nt)(F, R))) : c.value), I = b(() => e.hideNoData && !T.value.length || y.isReadonly.value || y.isDisabled.value), _ = b(() => {
      var R;
      return {
        ...e.menuProps,
        activatorProps: {
          ...((R = e.menuProps) == null ? void 0 : R.activatorProps) || {},
          "aria-haspopup": "listbox"
          // Set aria-haspopup to 'listbox'
        }
      };
    }), D = U(), w = _i(D, l);
    function P(R) {
      e.openOnClear && (s.value = !0);
    }
    function A() {
      I.value || (s.value = !s.value);
    }
    function V(R) {
      Bn(R) && x(R);
    }
    function x(R) {
      var Z, Q;
      if (!R.key || y.isReadonly.value) return;
      ["Enter", " ", "ArrowDown", "ArrowUp", "Home", "End"].includes(R.key) && R.preventDefault(), ["Enter", "ArrowDown", " "].includes(R.key) && (s.value = !0), ["Escape", "Tab"].includes(R.key) && (s.value = !1), R.key === "Home" ? (Z = D.value) == null || Z.focus("first") : R.key === "End" && ((Q = D.value) == null || Q.focus("last"));
      const F = 1e3;
      if (!Bn(R)) return;
      const B = performance.now();
      B - C > F && (S = ""), S += R.key.toLowerCase(), C = B;
      const H = c.value.find((re) => re.title.toLowerCase().startsWith(S));
      if (H !== void 0) {
        d.value = [H];
        const re = T.value.indexOf(H);
        xe && window.requestAnimationFrame(() => {
          var X;
          re >= 0 && ((X = o.value) == null || X.scrollToIndex(re));
        });
      }
    }
    function M(R) {
      let F = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
      if (!R.props.disabled)
        if (e.multiple) {
          const B = d.value.findIndex((Z) => (e.valueComparator || nt)(Z.value, R.value)), H = F ?? !~B;
          if (~B) {
            const Z = H ? [...d.value, R] : [...d.value];
            Z.splice(B, 1), d.value = Z;
          } else H && (d.value = [...d.value, R]);
        } else {
          const B = F !== !1;
          d.value = B ? [R] : [], we(() => {
            s.value = !1;
          });
        }
    }
    function E(R) {
      var F;
      (F = D.value) != null && F.$el.contains(R.relatedTarget) || (s.value = !1);
    }
    function N() {
      var R;
      e.eager && ((R = o.value) == null || R.calculateVisibleItems());
    }
    function j() {
      var R;
      m.value && ((R = l.value) == null || R.focus());
    }
    function ee(R) {
      m.value = !0;
    }
    function W(R) {
      if (R == null) d.value = [];
      else if (Dn(l.value, ":autofill") || Dn(l.value, ":-webkit-autofill")) {
        const F = c.value.find((B) => B.title === R);
        F && M(F);
      } else l.value && (l.value.value = "");
    }
    return J(s, () => {
      if (!e.hideSelected && s.value && d.value.length) {
        const R = T.value.findIndex((F) => d.value.some((B) => (e.valueComparator || nt)(B.value, F.value)));
        xe && window.requestAnimationFrame(() => {
          var F;
          R >= 0 && ((F = o.value) == null || F.scrollToIndex(R));
        });
      }
    }), J(() => e.items, (R, F) => {
      s.value || m.value && !F.length && R.length && (s.value = !0);
    }), z(() => {
      const R = !!(e.chips || t.chip), F = !!(!e.hideNoData || T.value.length || t["prepend-item"] || t["append-item"] || t["no-data"]), B = d.value.length > 0, H = At.filterProps(e), Z = B || !m.value && e.label && !e.persistentPlaceholder ? void 0 : e.placeholder;
      return r(At, O({
        ref: l
      }, H, {
        modelValue: d.value.map((Q) => Q.props.value).join(", "),
        "onUpdate:modelValue": W,
        focused: m.value,
        "onUpdate:focused": (Q) => m.value = Q,
        validationValue: d.externalValue,
        counterValue: g.value,
        dirty: B,
        class: ["v-select", {
          "v-select--active-menu": s.value,
          "v-select--chips": !!e.chips,
          [`v-select--${e.multiple ? "multiple" : "single"}`]: !0,
          "v-select--selected": d.value.length,
          "v-select--selection-slot": !!t.selection
        }, e.class],
        style: e.style,
        inputmode: "none",
        placeholder: Z,
        "onClick:clear": P,
        "onMousedown:control": A,
        onBlur: E,
        onKeydown: x,
        "aria-label": a(k.value),
        title: a(k.value)
      }), {
        ...t,
        default: () => r(ie, null, [r(Fn, O({
          ref: i,
          modelValue: s.value,
          "onUpdate:modelValue": (Q) => s.value = Q,
          activator: "parent",
          contentClass: "v-select__content",
          disabled: I.value,
          eager: e.eager,
          maxHeight: 310,
          openOnClick: !1,
          closeOnContentClick: !1,
          transition: e.transition,
          onAfterEnter: N,
          onAfterLeave: j
        }, _.value), {
          default: () => [F && r(ra, O({
            ref: D,
            selected: h.value,
            selectStrategy: e.multiple ? "independent" : "single-independent",
            onMousedown: (Q) => Q.preventDefault(),
            onKeydown: V,
            onFocusin: ee,
            tabindex: "-1",
            "aria-live": "polite",
            color: e.itemColor ?? e.color
          }, w, e.listProps), {
            default: () => {
              var Q, re, X;
              return [(Q = t["prepend-item"]) == null ? void 0 : Q.call(t), !T.value.length && !e.hideNoData && (((re = t["no-data"]) == null ? void 0 : re.call(t)) ?? r(kt, {
                key: "no-data",
                title: a(e.noDataText)
              }, null)), r(Ii, {
                ref: o,
                renderless: !0,
                items: T.value
              }, {
                default: (K) => {
                  var se;
                  let {
                    item: ne,
                    index: ye,
                    itemRef: he
                  } = K;
                  const q = O(ne.props, {
                    ref: he,
                    key: ne.value,
                    onClick: () => M(ne, null)
                  });
                  return ((se = t.item) == null ? void 0 : se.call(t, {
                    item: ne,
                    index: ye,
                    props: q
                  })) ?? r(kt, O(q, {
                    role: "option"
                  }), {
                    prepend: (Y) => {
                      let {
                        isSelected: ae
                      } = Y;
                      return r(ie, null, [e.multiple && !e.hideSelected ? r($t, {
                        key: ne.value,
                        modelValue: ae,
                        ripple: !1,
                        tabindex: "-1"
                      }, null) : void 0, ne.props.prependAvatar && r(ut, {
                        image: ne.props.prependAvatar
                      }, null), ne.props.prependIcon && r(Se, {
                        icon: ne.props.prependIcon
                      }, null)]);
                    }
                  });
                }
              }), (X = t["append-item"]) == null ? void 0 : X.call(t)];
            }
          })]
        }), d.value.map((Q, re) => {
          function X(he) {
            he.stopPropagation(), he.preventDefault(), M(Q, !1);
          }
          const K = {
            "onClick:close": X,
            onKeydown(he) {
              he.key !== "Enter" && he.key !== " " || (he.preventDefault(), he.stopPropagation(), X(he));
            },
            onMousedown(he) {
              he.preventDefault(), he.stopPropagation();
            },
            modelValue: !0,
            "onUpdate:modelValue": void 0
          }, ne = R ? !!t.chip : !!t.selection, ye = ne ? Ka(R ? t.chip({
            item: Q,
            index: re,
            props: K
          }) : t.selection({
            item: Q,
            index: re
          })) : void 0;
          if (!(ne && !ye))
            return r("div", {
              key: Q.value,
              class: "v-select__selection"
            }, [R ? t.chip ? r(de, {
              key: "chip-defaults",
              defaults: {
                VChip: {
                  closable: e.closableChips,
                  size: "small",
                  text: Q.title
                }
              }
            }, {
              default: () => [ye]
            }) : r(Yn, O({
              key: "chip",
              closable: e.closableChips,
              size: "small",
              text: Q.title,
              disabled: Q.props.disabled
            }, K), null) : ye ?? r("span", {
              class: "v-select__selection-text"
            }, [Q.title, e.multiple && re < d.value.length - 1 && r("span", {
              class: "v-select__selection-comma"
            }, [_t(",")])])]);
        })]),
        "append-inner": function() {
          var K;
          for (var Q = arguments.length, re = new Array(Q), X = 0; X < Q; X++)
            re[X] = arguments[X];
          return r(ie, null, [(K = t["append-inner"]) == null ? void 0 : K.call(t, ...re), e.menuIcon ? r(Se, {
            class: "v-select__menu-icon",
            icon: e.menuIcon
          }, null) : void 0]);
        }
      });
    }), ct({
      isFocused: m,
      menu: s,
      select: M
    }, l);
  }
}), jm = (e, n, t) => e == null || n == null ? -1 : e.toString().toLocaleLowerCase().indexOf(n.toString().toLocaleLowerCase()), Kn = p({
  customFilter: Function,
  customKeyFilter: Object,
  filterKeys: [Array, String],
  filterMode: {
    type: String,
    default: "intersection"
  },
  noFilter: Boolean
}, "filter");
function Um(e, n, t) {
  var u;
  const a = [], l = (t == null ? void 0 : t.default) ?? jm, i = t != null && t.filterKeys ? Ae(t.filterKeys) : !1, o = Object.keys((t == null ? void 0 : t.customKeyFilter) ?? {}).length;
  if (!(e != null && e.length)) return a;
  e: for (let s = 0; s < e.length; s++) {
    const [c, v = c] = Ae(e[s]), f = {}, d = {};
    let g = -1;
    if ((n || o > 0) && !(t != null && t.noFilter)) {
      if (typeof c == "object") {
        const m = i || Object.keys(v);
        for (const k of m) {
          const S = Ne(v, k), C = (u = t == null ? void 0 : t.customKeyFilter) == null ? void 0 : u[k];
          if (g = C ? C(S, n, c) : l(S, n, c), g !== -1 && g !== !1)
            C ? f[k] = g : d[k] = g;
          else if ((t == null ? void 0 : t.filterMode) === "every")
            continue e;
        }
      } else
        g = l(c, n, c), g !== -1 && g !== !1 && (d.title = g);
      const y = Object.keys(d).length, h = Object.keys(f).length;
      if (!y && !h || (t == null ? void 0 : t.filterMode) === "union" && h !== o && !y || (t == null ? void 0 : t.filterMode) === "intersection" && (h !== o || !y)) continue;
    }
    a.push({
      index: s,
      matches: {
        ...d,
        ...f
      }
    });
  }
  return a;
}
function qn(e, n, t, a) {
  const l = G([]), i = G(/* @__PURE__ */ new Map()), o = b(() => a != null && a.transform ? it(n).map((s) => [s, a.transform(s)]) : it(n));
  Fe(() => {
    const s = typeof t == "function" ? t() : it(t), c = typeof s != "string" && typeof s != "number" ? "" : String(s), v = Um(o.value, c, {
      customKeyFilter: {
        ...e.customKeyFilter,
        ...it(a == null ? void 0 : a.customKeyFilter)
      },
      default: e.customFilter,
      filterKeys: e.filterKeys,
      filterMode: e.filterMode,
      noFilter: e.noFilter
    }), f = it(n), d = [], g = /* @__PURE__ */ new Map();
    v.forEach((y) => {
      let {
        index: h,
        matches: m
      } = y;
      const k = f[h];
      d.push(k), g.set(k.value, m);
    }), l.value = d, i.value = g;
  });
  function u(s) {
    return i.value.get(s.value);
  }
  return {
    filteredItems: l,
    filteredMatches: i,
    getMatches: u
  };
}
function Ym(e, n, t) {
  if (n == null) return e;
  if (Array.isArray(n)) throw new Error("Multiple matches is not implemented");
  return typeof n == "number" && ~n ? r(ie, null, [r("span", {
    class: "v-autocomplete__unmask"
  }, [e.substr(0, n)]), r("span", {
    class: "v-autocomplete__mask"
  }, [e.substr(n, t)]), r("span", {
    class: "v-autocomplete__unmask"
  }, [e.substr(n + t)])]) : e;
}
const Gm = p({
  autoSelectFirst: {
    type: [Boolean, String]
  },
  clearOnSelect: Boolean,
  search: String,
  ...Kn({
    filterKeys: ["title"]
  }),
  ...Ti(),
  ...Ce(Gn({
    modelValue: null,
    role: "combobox"
  }), ["validationValue", "dirty", "appendInnerIcon"]),
  ...Vt({
    transition: !1
  })
}, "VAutocomplete"), dk = L()({
  name: "VAutocomplete",
  props: Gm(),
  emits: {
    "update:focused": (e) => !0,
    "update:search": (e) => !0,
    "update:modelValue": (e) => !0,
    "update:menu": (e) => !0
  },
  setup(e, n) {
    let {
      slots: t
    } = n;
    const {
      t: a
    } = Te(), l = U(), i = G(!1), o = G(!0), u = G(!1), s = U(), c = U(), v = oe(e, "menu"), f = b({
      get: () => v.value,
      set: (q) => {
        var se;
        v.value && !q && ((se = s.value) != null && se.ΨopenChildren.size) || (v.value = q);
      }
    }), d = G(-1), g = b(() => {
      var q;
      return (q = l.value) == null ? void 0 : q.color;
    }), y = b(() => f.value ? e.closeText : e.openText), {
      items: h,
      transformIn: m,
      transformOut: k
    } = wi(e), {
      textColorClasses: S,
      textColorStyles: C
    } = Ge(g), T = oe(e, "search", ""), I = oe(e, "modelValue", [], (q) => m(q === null ? [null] : Ae(q)), (q) => {
      const se = k(q);
      return e.multiple ? se : se[0] ?? null;
    }), _ = b(() => typeof e.counterValue == "function" ? e.counterValue(I.value) : typeof e.counterValue == "number" ? e.counterValue : I.value.length), D = ha(e), {
      filteredItems: w,
      getMatches: P
    } = qn(e, h, () => o.value ? "" : T.value), A = b(() => e.hideSelected ? w.value.filter((q) => !I.value.some((se) => se.value === q.value)) : w.value), V = b(() => !!(e.chips || t.chip)), x = b(() => V.value || !!t.selection), M = b(() => I.value.map((q) => q.props.value)), E = b(() => {
      var se;
      return (e.autoSelectFirst === !0 || e.autoSelectFirst === "exact" && T.value === ((se = A.value[0]) == null ? void 0 : se.title)) && A.value.length > 0 && !o.value && !u.value;
    }), N = b(() => e.hideNoData && !A.value.length || D.isReadonly.value || D.isDisabled.value), j = U(), ee = _i(j, l);
    function W(q) {
      e.openOnClear && (f.value = !0), T.value = "";
    }
    function R() {
      N.value || (f.value = !0);
    }
    function F(q) {
      N.value || (i.value && (q.preventDefault(), q.stopPropagation()), f.value = !f.value);
    }
    function B(q) {
      var se;
      q.key !== " " && Bn(q) && ((se = l.value) == null || se.focus());
    }
    function H(q) {
      var ae, ve, ce;
      if (D.isReadonly.value) return;
      const se = l.value.selectionStart, Y = I.value.length;
      if (["Enter", "ArrowDown", "ArrowUp"].includes(q.key) && q.preventDefault(), ["Enter", "ArrowDown"].includes(q.key) && (f.value = !0), ["Escape"].includes(q.key) && (f.value = !1), E.value && ["Enter", "Tab"].includes(q.key) && !I.value.some((me) => {
        let {
          value: Ie
        } = me;
        return Ie === A.value[0].value;
      }) && he(A.value[0]), q.key === "ArrowDown" && E.value && ((ae = j.value) == null || ae.focus("next")), ["Backspace", "Delete"].includes(q.key)) {
        if (!e.multiple && x.value && I.value.length > 0 && !T.value) return he(I.value[0], !1);
        if (~d.value) {
          q.preventDefault();
          const me = d.value;
          he(I.value[d.value], !1), d.value = me >= Y - 1 ? Y - 2 : me;
        } else q.key === "Backspace" && !T.value && (d.value = Y - 1);
        return;
      }
      if (e.multiple)
        if (q.key === "ArrowLeft") {
          if (d.value < 0 && se > 0) return;
          const me = d.value > -1 ? d.value - 1 : Y - 1;
          I.value[me] ? d.value = me : (d.value = -1, l.value.setSelectionRange((ve = T.value) == null ? void 0 : ve.length, (ce = T.value) == null ? void 0 : ce.length));
        } else if (q.key === "ArrowRight") {
          if (d.value < 0) return;
          const me = d.value + 1;
          I.value[me] ? d.value = me : (d.value = -1, l.value.setSelectionRange(0, 0));
        } else ~d.value && Bn(q) && (d.value = -1);
    }
    function Z(q) {
      if (Dn(l.value, ":autofill") || Dn(l.value, ":-webkit-autofill")) {
        const se = h.value.find((Y) => Y.title === q.target.value);
        se && he(se);
      }
    }
    function Q() {
      var q;
      e.eager && ((q = c.value) == null || q.calculateVisibleItems());
    }
    function re() {
      var q;
      i.value && (o.value = !0, (q = l.value) == null || q.focus());
    }
    function X(q) {
      i.value = !0, setTimeout(() => {
        u.value = !0;
      });
    }
    function K(q) {
      u.value = !1;
    }
    function ne(q) {
      (q == null || q === "" && !e.multiple && !x.value) && (I.value = []);
    }
    const ye = G(!1);
    function he(q) {
      let se = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
      if (!(!q || q.props.disabled))
        if (e.multiple) {
          const Y = I.value.findIndex((ve) => (e.valueComparator || nt)(ve.value, q.value)), ae = se ?? !~Y;
          if (~Y) {
            const ve = ae ? [...I.value, q] : [...I.value];
            ve.splice(Y, 1), I.value = ve;
          } else ae && (I.value = [...I.value, q]);
          e.clearOnSelect && (T.value = "");
        } else {
          const Y = se !== !1;
          I.value = Y ? [q] : [], T.value = Y && !x.value ? q.title : "", we(() => {
            f.value = !1, o.value = !0;
          });
        }
    }
    return J(i, (q, se) => {
      var Y;
      q !== se && (q ? (ye.value = !0, T.value = e.multiple || x.value ? "" : String(((Y = I.value.at(-1)) == null ? void 0 : Y.props.title) ?? ""), o.value = !0, we(() => ye.value = !1)) : (!e.multiple && T.value == null && (I.value = []), f.value = !1, I.value.some((ae) => {
        let {
          title: ve
        } = ae;
        return ve === T.value;
      }) || (T.value = ""), d.value = -1));
    }), J(T, (q) => {
      !i.value || ye.value || (q && (f.value = !0), o.value = !q);
    }), J(f, () => {
      if (!e.hideSelected && f.value && I.value.length) {
        const q = A.value.findIndex((se) => I.value.some((Y) => se.value === Y.value));
        xe && window.requestAnimationFrame(() => {
          var se;
          q >= 0 && ((se = c.value) == null || se.scrollToIndex(q));
        });
      }
    }), J(() => e.items, (q, se) => {
      f.value || i.value && !se.length && q.length && (f.value = !0);
    }), z(() => {
      const q = !!(!e.hideNoData || A.value.length || t["prepend-item"] || t["append-item"] || t["no-data"]), se = I.value.length > 0, Y = At.filterProps(e);
      return r(At, O({
        ref: l
      }, Y, {
        modelValue: T.value,
        "onUpdate:modelValue": [(ae) => T.value = ae, ne],
        focused: i.value,
        "onUpdate:focused": (ae) => i.value = ae,
        validationValue: I.externalValue,
        counterValue: _.value,
        dirty: se,
        onChange: Z,
        class: ["v-autocomplete", `v-autocomplete--${e.multiple ? "multiple" : "single"}`, {
          "v-autocomplete--active-menu": f.value,
          "v-autocomplete--chips": !!e.chips,
          "v-autocomplete--selection-slot": !!x.value,
          "v-autocomplete--selecting-index": d.value > -1
        }, e.class],
        style: e.style,
        readonly: D.isReadonly.value,
        placeholder: se ? void 0 : e.placeholder,
        "onClick:clear": W,
        "onMousedown:control": R,
        onKeydown: H
      }), {
        ...t,
        default: () => r(ie, null, [r(Fn, O({
          ref: s,
          modelValue: f.value,
          "onUpdate:modelValue": (ae) => f.value = ae,
          activator: "parent",
          contentClass: "v-autocomplete__content",
          disabled: N.value,
          eager: e.eager,
          maxHeight: 310,
          openOnClick: !1,
          closeOnContentClick: !1,
          transition: e.transition,
          onAfterEnter: Q,
          onAfterLeave: re
        }, e.menuProps), {
          default: () => [q && r(ra, O({
            ref: j,
            selected: M.value,
            selectStrategy: e.multiple ? "independent" : "single-independent",
            onMousedown: (ae) => ae.preventDefault(),
            onKeydown: B,
            onFocusin: X,
            onFocusout: K,
            tabindex: "-1",
            "aria-live": "polite",
            color: e.itemColor ?? e.color
          }, ee, e.listProps), {
            default: () => {
              var ae, ve, ce;
              return [(ae = t["prepend-item"]) == null ? void 0 : ae.call(t), !A.value.length && !e.hideNoData && (((ve = t["no-data"]) == null ? void 0 : ve.call(t)) ?? r(kt, {
                key: "no-data",
                title: a(e.noDataText)
              }, null)), r(Ii, {
                ref: c,
                renderless: !0,
                items: A.value
              }, {
                default: (me) => {
                  var Je;
                  let {
                    item: Ie,
                    index: rt,
                    itemRef: _e
                  } = me;
                  const Et = O(Ie.props, {
                    ref: _e,
                    key: Ie.value,
                    active: E.value && rt === 0 ? !0 : void 0,
                    onClick: () => he(Ie, null)
                  });
                  return ((Je = t.item) == null ? void 0 : Je.call(t, {
                    item: Ie,
                    index: rt,
                    props: Et
                  })) ?? r(kt, O(Et, {
                    role: "option"
                  }), {
                    prepend: (Zt) => {
                      let {
                        isSelected: Qt
                      } = Zt;
                      return r(ie, null, [e.multiple && !e.hideSelected ? r($t, {
                        key: Ie.value,
                        modelValue: Qt,
                        ripple: !1,
                        tabindex: "-1"
                      }, null) : void 0, Ie.props.prependAvatar && r(ut, {
                        image: Ie.props.prependAvatar
                      }, null), Ie.props.prependIcon && r(Se, {
                        icon: Ie.props.prependIcon
                      }, null)]);
                    },
                    title: () => {
                      var Zt, Qt;
                      return o.value ? Ie.title : Ym(Ie.title, (Zt = P(Ie)) == null ? void 0 : Zt.title, ((Qt = T.value) == null ? void 0 : Qt.length) ?? 0);
                    }
                  });
                }
              }), (ce = t["append-item"]) == null ? void 0 : ce.call(t)];
            }
          })]
        }), I.value.map((ae, ve) => {
          function ce(_e) {
            _e.stopPropagation(), _e.preventDefault(), he(ae, !1);
          }
          const me = {
            "onClick:close": ce,
            onKeydown(_e) {
              _e.key !== "Enter" && _e.key !== " " || (_e.preventDefault(), _e.stopPropagation(), ce(_e));
            },
            onMousedown(_e) {
              _e.preventDefault(), _e.stopPropagation();
            },
            modelValue: !0,
            "onUpdate:modelValue": void 0
          }, Ie = V.value ? !!t.chip : !!t.selection, rt = Ie ? Ka(V.value ? t.chip({
            item: ae,
            index: ve,
            props: me
          }) : t.selection({
            item: ae,
            index: ve
          })) : void 0;
          if (!(Ie && !rt))
            return r("div", {
              key: ae.value,
              class: ["v-autocomplete__selection", ve === d.value && ["v-autocomplete__selection--selected", S.value]],
              style: ve === d.value ? C.value : {}
            }, [V.value ? t.chip ? r(de, {
              key: "chip-defaults",
              defaults: {
                VChip: {
                  closable: e.closableChips,
                  size: "small",
                  text: ae.title
                }
              }
            }, {
              default: () => [rt]
            }) : r(Yn, O({
              key: "chip",
              closable: e.closableChips,
              size: "small",
              text: ae.title,
              disabled: ae.props.disabled
            }, me), null) : rt ?? r("span", {
              class: "v-autocomplete__selection-text"
            }, [ae.title, e.multiple && ve < I.value.length - 1 && r("span", {
              class: "v-autocomplete__selection-comma"
            }, [_t(",")])])]);
        })]),
        "append-inner": function() {
          var me;
          for (var ae = arguments.length, ve = new Array(ae), ce = 0; ce < ae; ce++)
            ve[ce] = arguments[ce];
          return r(ie, null, [(me = t["append-inner"]) == null ? void 0 : me.call(t, ...ve), e.menuIcon ? r(Se, {
            class: "v-autocomplete__menu-icon",
            icon: e.menuIcon,
            onMousedown: F,
            onClick: Lr,
            "aria-label": a(y.value),
            title: a(y.value),
            tabindex: "-1"
          }, null) : void 0]);
        }
      });
    }), ct({
      isFocused: i,
      isPristine: o,
      menu: f,
      search: T,
      filteredItems: w,
      select: he
    }, l);
  }
}), Km = p({
  bordered: Boolean,
  color: String,
  content: [Number, String],
  dot: Boolean,
  floating: Boolean,
  icon: ue,
  inline: Boolean,
  label: {
    type: String,
    default: "$vuetify.badge"
  },
  max: [Number, String],
  modelValue: {
    type: Boolean,
    default: !0
  },
  offsetX: [Number, String],
  offsetY: [Number, String],
  textColor: String,
  ...le(),
  ...Rt({
    location: "top end"
  }),
  ...Ee(),
  ...ge(),
  ...ke(),
  ...Vt({
    transition: "scale-rotate-transition"
  })
}, "VBadge"), qm = L()({
  name: "VBadge",
  inheritAttrs: !1,
  props: Km(),
  setup(e, n) {
    const {
      backgroundColorClasses: t,
      backgroundColorStyles: a
    } = Pe($(e, "color")), {
      roundedClasses: l
    } = Oe(e), {
      t: i
    } = Te(), {
      textColorClasses: o,
      textColorStyles: u
    } = Ge($(e, "textColor")), {
      themeClasses: s
    } = ci(), {
      locationStyles: c
    } = wn(e, !0, (v) => (e.floating ? e.dot ? 2 : 4 : e.dot ? 8 : 12) + (["top", "bottom"].includes(v) ? Number(e.offsetY ?? 0) : ["left", "right"].includes(v) ? Number(e.offsetX ?? 0) : 0));
    return z(() => {
      const v = Number(e.content), f = !e.max || isNaN(v) ? e.content : v <= Number(e.max) ? v : `${e.max}+`, [d, g] = Al(n.attrs, ["aria-atomic", "aria-label", "aria-live", "role", "title"]);
      return r(e.tag, O({
        class: ["v-badge", {
          "v-badge--bordered": e.bordered,
          "v-badge--dot": e.dot,
          "v-badge--floating": e.floating,
          "v-badge--inline": e.inline
        }, e.class]
      }, g, {
        style: e.style
      }), {
        default: () => {
          var y, h;
          return [r("div", {
            class: "v-badge__wrapper"
          }, [(h = (y = n.slots).default) == null ? void 0 : h.call(y), r(tt, {
            transition: e.transition
          }, {
            default: () => {
              var m, k;
              return [$e(r("span", O({
                class: ["v-badge__badge", s.value, t.value, l.value, o.value],
                style: [a.value, u.value, e.inline ? {} : c.value],
                "aria-atomic": "true",
                "aria-label": i(e.label, v),
                "aria-live": "polite",
                role: "status"
              }, d), [e.dot ? void 0 : n.slots.badge ? (k = (m = n.slots).badge) == null ? void 0 : k.call(m) : e.icon ? r(Se, {
                icon: e.icon
              }, null) : f]), [[Ct, e.modelValue]])];
            }
          })])];
        }
      });
    }), {};
  }
}), Xm = p({
  color: String,
  density: String,
  ...le()
}, "VBannerActions"), Zm = L()({
  name: "VBannerActions",
  props: Xm(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    return pe({
      VBtn: {
        color: e.color,
        density: e.density,
        slim: !0,
        variant: "text"
      }
    }), z(() => {
      var a;
      return r("div", {
        class: ["v-banner-actions", e.class],
        style: e.style
      }, [(a = t.default) == null ? void 0 : a.call(t)]);
    }), {};
  }
}), Qm = Bt("v-banner-text"), Jm = p({
  avatar: String,
  bgColor: String,
  color: String,
  icon: ue,
  lines: String,
  stacked: Boolean,
  sticky: Boolean,
  text: String,
  ...st(),
  ...le(),
  ...ze(),
  ...Re(),
  ...Gt({
    mobile: null
  }),
  ...je(),
  ...Rt(),
  ...Wn(),
  ...Ee(),
  ...ge(),
  ...ke()
}, "VBanner"), vk = L()({
  name: "VBanner",
  props: Jm(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    const {
      backgroundColorClasses: a,
      backgroundColorStyles: l
    } = Pe(e, "bgColor"), {
      borderClasses: i
    } = bt(e), {
      densityClasses: o
    } = Qe(e), {
      displayClasses: u,
      mobile: s
    } = ht(e), {
      dimensionStyles: c
    } = He(e), {
      elevationClasses: v
    } = qe(e), {
      locationStyles: f
    } = wn(e), {
      positionClasses: d
    } = jn(e), {
      roundedClasses: g
    } = Oe(e), {
      themeClasses: y
    } = Ve(e), h = $(e, "color"), m = $(e, "density");
    pe({
      VBannerActions: {
        color: h,
        density: m
      }
    }), z(() => {
      const k = !!(e.text || t.text), S = !!(e.avatar || e.icon), C = !!(S || t.prepend);
      return r(e.tag, {
        class: ["v-banner", {
          "v-banner--stacked": e.stacked || s.value,
          "v-banner--sticky": e.sticky,
          [`v-banner--${e.lines}-line`]: !!e.lines
        }, y.value, a.value, i.value, o.value, u.value, v.value, d.value, g.value, e.class],
        style: [l.value, c.value, f.value, e.style],
        role: "banner"
      }, {
        default: () => {
          var T;
          return [C && r("div", {
            key: "prepend",
            class: "v-banner__prepend"
          }, [t.prepend ? r(de, {
            key: "prepend-defaults",
            disabled: !S,
            defaults: {
              VAvatar: {
                color: h.value,
                density: m.value,
                icon: e.icon,
                image: e.avatar
              }
            }
          }, t.prepend) : r(ut, {
            key: "prepend-avatar",
            color: h.value,
            density: m.value,
            icon: e.icon,
            image: e.avatar
          }, null)]), r("div", {
            class: "v-banner__content"
          }, [k && r(Qm, {
            key: "text"
          }, {
            default: () => {
              var I;
              return [((I = t.text) == null ? void 0 : I.call(t)) ?? e.text];
            }
          }), (T = t.default) == null ? void 0 : T.call(t)]), t.actions && r(Zm, {
            key: "actions"
          }, t.actions)];
        }
      });
    });
  }
}), eg = p({
  baseColor: String,
  bgColor: String,
  color: String,
  grow: Boolean,
  mode: {
    type: String,
    validator: (e) => !e || ["horizontal", "shift"].includes(e)
  },
  height: {
    type: [Number, String],
    default: 56
  },
  active: {
    type: Boolean,
    default: !0
  },
  ...st(),
  ...le(),
  ...ze(),
  ...je(),
  ...Ee(),
  ...mn({
    name: "bottom-navigation"
  }),
  ...ge({
    tag: "header"
  }),
  ...bn({
    selectedClass: "v-btn--selected"
  }),
  ...ke()
}, "VBottomNavigation"), fk = L()({
  name: "VBottomNavigation",
  props: eg(),
  emits: {
    "update:active": (e) => !0,
    "update:modelValue": (e) => !0
  },
  setup(e, n) {
    let {
      slots: t
    } = n;
    const {
      themeClasses: a
    } = ci(), {
      borderClasses: l
    } = bt(e), {
      backgroundColorClasses: i,
      backgroundColorStyles: o
    } = Pe($(e, "bgColor")), {
      densityClasses: u
    } = Qe(e), {
      elevationClasses: s
    } = qe(e), {
      roundedClasses: c
    } = Oe(e), {
      ssrBootStyles: v
    } = hn(), f = b(() => Number(e.height) - (e.density === "comfortable" ? 8 : 0) - (e.density === "compact" ? 16 : 0)), d = oe(e, "active", e.active), {
      layoutItemStyles: g
    } = gn({
      id: e.name,
      order: b(() => parseInt(e.order, 10)),
      position: b(() => "bottom"),
      layoutSize: b(() => d.value ? f.value : 0),
      elementSize: f,
      active: d,
      absolute: $(e, "absolute")
    });
    return qt(e, mi), pe({
      VBtn: {
        baseColor: $(e, "baseColor"),
        color: $(e, "color"),
        density: $(e, "density"),
        stacked: b(() => e.mode !== "horizontal"),
        variant: "text"
      }
    }, {
      scoped: !0
    }), z(() => r(e.tag, {
      class: ["v-bottom-navigation", {
        "v-bottom-navigation--active": d.value,
        "v-bottom-navigation--grow": e.grow,
        "v-bottom-navigation--shift": e.mode === "shift"
      }, a.value, i.value, l.value, u.value, s.value, c.value, e.class],
      style: [o.value, g.value, {
        height: te(f.value)
      }, v.value, e.style]
    }, {
      default: () => [t.default && r("div", {
        class: "v-bottom-navigation__content"
      }, [t.default()])]
    })), {};
  }
}), Ss = p({
  fullscreen: Boolean,
  retainFocus: {
    type: Boolean,
    default: !0
  },
  scrollable: Boolean,
  ...ya({
    origin: "center center",
    scrollStrategy: "block",
    transition: {
      component: di
    },
    zIndex: 2400
  })
}, "VDialog"), Uo = L()({
  name: "VDialog",
  props: Ss(),
  emits: {
    "update:modelValue": (e) => !0,
    afterEnter: () => !0,
    afterLeave: () => !0
  },
  setup(e, n) {
    let {
      emit: t,
      slots: a
    } = n;
    const l = oe(e, "modelValue"), {
      scopeId: i
    } = xn(), o = U();
    function u(v) {
      var g, y;
      const f = v.relatedTarget, d = v.target;
      if (f !== d && ((g = o.value) != null && g.contentEl) && // We're the topmost dialog
      ((y = o.value) != null && y.globalTop) && // It isn't the document or the dialog body
      ![document, o.value.contentEl].includes(d) && // It isn't inside the dialog body
      !o.value.contentEl.contains(d)) {
        const h = Qn(o.value.contentEl);
        if (!h.length) return;
        const m = h[0], k = h[h.length - 1];
        f === m ? k.focus() : m.focus();
      }
    }
    Ze(() => {
      document.removeEventListener("focusin", u);
    }), xe && J(() => l.value && e.retainFocus, (v) => {
      v ? document.addEventListener("focusin", u) : document.removeEventListener("focusin", u);
    }, {
      immediate: !0
    });
    function s() {
      var v;
      t("afterEnter"), (v = o.value) != null && v.contentEl && !o.value.contentEl.contains(document.activeElement) && o.value.contentEl.focus({
        preventScroll: !0
      });
    }
    function c() {
      t("afterLeave");
    }
    return J(l, async (v) => {
      var f;
      v || (await we(), (f = o.value.activatorEl) == null || f.focus({
        preventScroll: !0
      }));
    }), z(() => {
      const v = Tt.filterProps(e), f = O({
        "aria-haspopup": "dialog"
      }, e.activatorProps), d = O({
        tabindex: -1
      }, e.contentProps);
      return r(Tt, O({
        ref: o,
        class: ["v-dialog", {
          "v-dialog--fullscreen": e.fullscreen,
          "v-dialog--scrollable": e.scrollable
        }, e.class],
        style: e.style
      }, v, {
        modelValue: l.value,
        "onUpdate:modelValue": (g) => l.value = g,
        "aria-modal": "true",
        activatorProps: f,
        contentProps: d,
        height: e.fullscreen ? void 0 : e.height,
        width: e.fullscreen ? void 0 : e.width,
        maxHeight: e.fullscreen ? void 0 : e.maxHeight,
        maxWidth: e.fullscreen ? void 0 : e.maxWidth,
        role: "dialog",
        onAfterEnter: s,
        onAfterLeave: c
      }, i), {
        activator: a.activator,
        default: function() {
          for (var g = arguments.length, y = new Array(g), h = 0; h < g; h++)
            y[h] = arguments[h];
          return r(de, {
            root: "VDialog"
          }, {
            default: () => {
              var m;
              return [(m = a.default) == null ? void 0 : m.call(a, ...y)];
            }
          });
        }
      });
    }), ct({}, o);
  }
}), tg = p({
  inset: Boolean,
  ...Ss({
    transition: "bottom-sheet-transition"
  })
}, "VBottomSheet"), mk = L()({
  name: "VBottomSheet",
  props: tg(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, n) {
    let {
      slots: t
    } = n;
    const a = oe(e, "modelValue");
    return z(() => {
      const l = Uo.filterProps(e);
      return r(Uo, O(l, {
        contentClass: ["v-bottom-sheet__content", e.contentClass],
        modelValue: a.value,
        "onUpdate:modelValue": (i) => a.value = i,
        class: ["v-bottom-sheet", {
          "v-bottom-sheet--inset": e.inset
        }, e.class],
        style: e.style
      }), t);
    }), {};
  }
}), ng = p({
  divider: [Number, String],
  ...le()
}, "VBreadcrumbsDivider"), ag = L()({
  name: "VBreadcrumbsDivider",
  props: ng(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    return z(() => {
      var a;
      return r("li", {
        "aria-hidden": "true",
        class: ["v-breadcrumbs-divider", e.class],
        style: e.style
      }, [((a = t == null ? void 0 : t.default) == null ? void 0 : a.call(t)) ?? e.divider]);
    }), {};
  }
}), lg = p({
  active: Boolean,
  activeClass: String,
  activeColor: String,
  color: String,
  disabled: Boolean,
  title: String,
  ...le(),
  ...ma(),
  ...ge({
    tag: "li"
  })
}, "VBreadcrumbsItem"), ig = L()({
  name: "VBreadcrumbsItem",
  props: lg(),
  setup(e, n) {
    let {
      slots: t,
      attrs: a
    } = n;
    const l = fa(e, a), i = b(() => {
      var c;
      return e.active || ((c = l.isActive) == null ? void 0 : c.value);
    }), o = b(() => i.value ? e.activeColor : e.color), {
      textColorClasses: u,
      textColorStyles: s
    } = Ge(o);
    return z(() => r(e.tag, {
      class: ["v-breadcrumbs-item", {
        "v-breadcrumbs-item--active": i.value,
        "v-breadcrumbs-item--disabled": e.disabled,
        [`${e.activeClass}`]: i.value && e.activeClass
      }, u.value, e.class],
      style: [s.value, e.style],
      "aria-current": i.value ? "page" : void 0
    }, {
      default: () => {
        var c, v;
        return [l.isLink.value ? r("a", O({
          class: "v-breadcrumbs-item--link",
          onClick: l.navigate
        }, l.linkProps), [((v = t.default) == null ? void 0 : v.call(t)) ?? e.title]) : ((c = t.default) == null ? void 0 : c.call(t)) ?? e.title];
      }
    })), {};
  }
}), og = p({
  activeClass: String,
  activeColor: String,
  bgColor: String,
  color: String,
  disabled: Boolean,
  divider: {
    type: String,
    default: "/"
  },
  icon: ue,
  items: {
    type: Array,
    default: () => []
  },
  ...le(),
  ...ze(),
  ...Ee(),
  ...ge({
    tag: "ul"
  })
}, "VBreadcrumbs"), gk = L()({
  name: "VBreadcrumbs",
  props: og(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    const {
      backgroundColorClasses: a,
      backgroundColorStyles: l
    } = Pe($(e, "bgColor")), {
      densityClasses: i
    } = Qe(e), {
      roundedClasses: o
    } = Oe(e);
    pe({
      VBreadcrumbsDivider: {
        divider: $(e, "divider")
      },
      VBreadcrumbsItem: {
        activeClass: $(e, "activeClass"),
        activeColor: $(e, "activeColor"),
        color: $(e, "color"),
        disabled: $(e, "disabled")
      }
    });
    const u = b(() => e.items.map((s) => typeof s == "string" ? {
      item: {
        title: s
      },
      raw: s
    } : {
      item: s,
      raw: s
    }));
    return z(() => {
      const s = !!(t.prepend || e.icon);
      return r(e.tag, {
        class: ["v-breadcrumbs", a.value, i.value, o.value, e.class],
        style: [l.value, e.style]
      }, {
        default: () => {
          var c;
          return [s && r("li", {
            key: "prepend",
            class: "v-breadcrumbs__prepend"
          }, [t.prepend ? r(de, {
            key: "prepend-defaults",
            disabled: !e.icon,
            defaults: {
              VIcon: {
                icon: e.icon,
                start: !0
              }
            }
          }, t.prepend) : r(Se, {
            key: "prepend-icon",
            start: !0,
            icon: e.icon
          }, null)]), u.value.map((v, f, d) => {
            var h;
            let {
              item: g,
              raw: y
            } = v;
            return r(ie, null, [((h = t.item) == null ? void 0 : h.call(t, {
              item: g,
              index: f
            })) ?? r(ig, O({
              key: f,
              disabled: f >= d.length - 1
            }, typeof g == "string" ? {
              title: g
            } : g), {
              default: t.title ? () => {
                var m;
                return (m = t.title) == null ? void 0 : m.call(t, {
                  item: g,
                  index: f
                });
              } : void 0
            }), f < d.length - 1 && r(ag, null, {
              default: t.divider ? () => {
                var m;
                return (m = t.divider) == null ? void 0 : m.call(t, {
                  item: y,
                  index: f
                });
              } : void 0
            })]);
          }), (c = t.default) == null ? void 0 : c.call(t)];
        }
      });
    }), {};
  }
}), rg = L()({
  name: "VCardActions",
  props: le(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    return pe({
      VBtn: {
        slim: !0,
        variant: "text"
      }
    }), z(() => {
      var a;
      return r("div", {
        class: ["v-card-actions", e.class],
        style: e.style
      }, [(a = t.default) == null ? void 0 : a.call(t)]);
    }), {};
  }
}), ug = p({
  opacity: [Number, String],
  ...le(),
  ...ge()
}, "VCardSubtitle"), sg = L()({
  name: "VCardSubtitle",
  props: ug(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    return z(() => r(e.tag, {
      class: ["v-card-subtitle", e.class],
      style: [{
        "--v-card-subtitle-opacity": e.opacity
      }, e.style]
    }, t)), {};
  }
}), cg = Bt("v-card-title"), dg = p({
  appendAvatar: String,
  appendIcon: ue,
  prependAvatar: String,
  prependIcon: ue,
  subtitle: {
    type: [String, Number, Boolean],
    default: void 0
  },
  title: {
    type: [String, Number, Boolean],
    default: void 0
  },
  ...le(),
  ...ze()
}, "VCardItem"), vg = L()({
  name: "VCardItem",
  props: dg(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    return z(() => {
      var c;
      const a = !!(e.prependAvatar || e.prependIcon), l = !!(a || t.prepend), i = !!(e.appendAvatar || e.appendIcon), o = !!(i || t.append), u = !!(e.title != null || t.title), s = !!(e.subtitle != null || t.subtitle);
      return r("div", {
        class: ["v-card-item", e.class],
        style: e.style
      }, [l && r("div", {
        key: "prepend",
        class: "v-card-item__prepend"
      }, [t.prepend ? r(de, {
        key: "prepend-defaults",
        disabled: !a,
        defaults: {
          VAvatar: {
            density: e.density,
            image: e.prependAvatar
          },
          VIcon: {
            density: e.density,
            icon: e.prependIcon
          }
        }
      }, t.prepend) : r(ie, null, [e.prependAvatar && r(ut, {
        key: "prepend-avatar",
        density: e.density,
        image: e.prependAvatar
      }, null), e.prependIcon && r(Se, {
        key: "prepend-icon",
        density: e.density,
        icon: e.prependIcon
      }, null)])]), r("div", {
        class: "v-card-item__content"
      }, [u && r(cg, {
        key: "title"
      }, {
        default: () => {
          var v;
          return [((v = t.title) == null ? void 0 : v.call(t)) ?? sn(e.title)];
        }
      }), s && r(sg, {
        key: "subtitle"
      }, {
        default: () => {
          var v;
          return [((v = t.subtitle) == null ? void 0 : v.call(t)) ?? sn(e.subtitle)];
        }
      }), (c = t.default) == null ? void 0 : c.call(t)]), o && r("div", {
        key: "append",
        class: "v-card-item__append"
      }, [t.append ? r(de, {
        key: "append-defaults",
        disabled: !i,
        defaults: {
          VAvatar: {
            density: e.density,
            image: e.appendAvatar
          },
          VIcon: {
            density: e.density,
            icon: e.appendIcon
          }
        }
      }, t.append) : r(ie, null, [e.appendIcon && r(Se, {
        key: "append-icon",
        density: e.density,
        icon: e.appendIcon
      }, null), e.appendAvatar && r(ut, {
        key: "append-avatar",
        density: e.density,
        image: e.appendAvatar
      }, null)])])]);
    }), {};
  }
}), fg = p({
  opacity: [Number, String],
  ...le(),
  ...ge()
}, "VCardText"), mg = L()({
  name: "VCardText",
  props: fg(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    return z(() => r(e.tag, {
      class: ["v-card-text", e.class],
      style: [{
        "--v-card-text-opacity": e.opacity
      }, e.style]
    }, t)), {};
  }
}), gg = p({
  appendAvatar: String,
  appendIcon: ue,
  disabled: Boolean,
  flat: Boolean,
  hover: Boolean,
  image: String,
  link: {
    type: Boolean,
    default: void 0
  },
  prependAvatar: String,
  prependIcon: ue,
  ripple: {
    type: [Boolean, Object],
    default: !0
  },
  subtitle: {
    type: [String, Number, Boolean],
    default: void 0
  },
  text: {
    type: [String, Number, Boolean],
    default: void 0
  },
  title: {
    type: [String, Number, Boolean],
    default: void 0
  },
  ...st(),
  ...le(),
  ...ze(),
  ...Re(),
  ...je(),
  ...tl(),
  ...Rt(),
  ...Wn(),
  ...Ee(),
  ...ma(),
  ...ge(),
  ...ke(),
  ...St({
    variant: "elevated"
  })
}, "VCard"), hk = L()({
  name: "VCard",
  directives: {
    Ripple: Xt
  },
  props: gg(),
  setup(e, n) {
    let {
      attrs: t,
      slots: a
    } = n;
    const {
      themeClasses: l
    } = Ve(e), {
      borderClasses: i
    } = bt(e), {
      colorClasses: o,
      colorStyles: u,
      variantClasses: s
    } = yn(e), {
      densityClasses: c
    } = Qe(e), {
      dimensionStyles: v
    } = He(e), {
      elevationClasses: f
    } = qe(e), {
      loaderClasses: d
    } = da(e), {
      locationStyles: g
    } = wn(e), {
      positionClasses: y
    } = jn(e), {
      roundedClasses: h
    } = Oe(e), m = fa(e, t), k = b(() => e.link !== !1 && m.isLink.value), S = b(() => !e.disabled && e.link !== !1 && (e.link || m.isClickable.value));
    return z(() => {
      const C = k.value ? "a" : e.tag, T = !!(a.title || e.title != null), I = !!(a.subtitle || e.subtitle != null), _ = T || I, D = !!(a.append || e.appendAvatar || e.appendIcon), w = !!(a.prepend || e.prependAvatar || e.prependIcon), P = !!(a.image || e.image), A = _ || w || D, V = !!(a.text || e.text != null);
      return $e(r(C, O({
        class: ["v-card", {
          "v-card--disabled": e.disabled,
          "v-card--flat": e.flat,
          "v-card--hover": e.hover && !(e.disabled || e.flat),
          "v-card--link": S.value
        }, l.value, i.value, o.value, c.value, f.value, d.value, y.value, h.value, s.value, e.class],
        style: [u.value, v.value, g.value, e.style],
        onClick: S.value && m.navigate,
        tabindex: e.disabled ? -1 : void 0
      }, m.linkProps), {
        default: () => {
          var x;
          return [P && r("div", {
            key: "image",
            class: "v-card__image"
          }, [a.image ? r(de, {
            key: "image-defaults",
            disabled: !e.image,
            defaults: {
              VImg: {
                cover: !0,
                src: e.image
              }
            }
          }, a.image) : r(jt, {
            key: "image-img",
            cover: !0,
            src: e.image
          }, null)]), r(va, {
            name: "v-card",
            active: !!e.loading,
            color: typeof e.loading == "boolean" ? void 0 : e.loading
          }, {
            default: a.loader
          }), A && r(vg, {
            key: "item",
            prependAvatar: e.prependAvatar,
            prependIcon: e.prependIcon,
            title: e.title,
            subtitle: e.subtitle,
            appendAvatar: e.appendAvatar,
            appendIcon: e.appendIcon
          }, {
            default: a.item,
            prepend: a.prepend,
            title: a.title,
            subtitle: a.subtitle,
            append: a.append
          }), V && r(mg, {
            key: "text"
          }, {
            default: () => {
              var M;
              return [((M = a.text) == null ? void 0 : M.call(a)) ?? e.text];
            }
          }), (x = a.default) == null ? void 0 : x.call(a), a.actions && r(rg, null, {
            default: a.actions
          }), Kt(S.value, "v-card")];
        }
      }), [[mt("ripple"), S.value && e.ripple]]);
    }), {};
  }
}), hg = (e) => {
  const {
    touchstartX: n,
    touchendX: t,
    touchstartY: a,
    touchendY: l
  } = e, i = 0.5, o = 16;
  e.offsetX = t - n, e.offsetY = l - a, Math.abs(e.offsetY) < i * Math.abs(e.offsetX) && (e.left && t < n - o && e.left(e), e.right && t > n + o && e.right(e)), Math.abs(e.offsetX) < i * Math.abs(e.offsetY) && (e.up && l < a - o && e.up(e), e.down && l > a + o && e.down(e));
};
function yg(e, n) {
  var a;
  const t = e.changedTouches[0];
  n.touchstartX = t.clientX, n.touchstartY = t.clientY, (a = n.start) == null || a.call(n, {
    originalEvent: e,
    ...n
  });
}
function bg(e, n) {
  var a;
  const t = e.changedTouches[0];
  n.touchendX = t.clientX, n.touchendY = t.clientY, (a = n.end) == null || a.call(n, {
    originalEvent: e,
    ...n
  }), hg(n);
}
function kg(e, n) {
  var a;
  const t = e.changedTouches[0];
  n.touchmoveX = t.clientX, n.touchmoveY = t.clientY, (a = n.move) == null || a.call(n, {
    originalEvent: e,
    ...n
  });
}
function Sg() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  const n = {
    touchstartX: 0,
    touchstartY: 0,
    touchendX: 0,
    touchendY: 0,
    touchmoveX: 0,
    touchmoveY: 0,
    offsetX: 0,
    offsetY: 0,
    left: e.left,
    right: e.right,
    up: e.up,
    down: e.down,
    start: e.start,
    move: e.move,
    end: e.end
  };
  return {
    touchstart: (t) => yg(t, n),
    touchend: (t) => bg(t, n),
    touchmove: (t) => kg(t, n)
  };
}
function wg(e, n) {
  var u;
  const t = n.value, a = t != null && t.parent ? e.parentElement : e, l = (t == null ? void 0 : t.options) ?? {
    passive: !0
  }, i = (u = n.instance) == null ? void 0 : u.$.uid;
  if (!a || !i) return;
  const o = Sg(n.value);
  a._touchHandlers = a._touchHandlers ?? /* @__PURE__ */ Object.create(null), a._touchHandlers[i] = o, Mr(o).forEach((s) => {
    a.addEventListener(s, o[s], l);
  });
}
function xg(e, n) {
  var i, o;
  const t = (i = n.value) != null && i.parent ? e.parentElement : e, a = (o = n.instance) == null ? void 0 : o.$.uid;
  if (!(t != null && t._touchHandlers) || !a) return;
  const l = t._touchHandlers[a];
  Mr(l).forEach((u) => {
    t.removeEventListener(u, l[u]);
  }), delete t._touchHandlers[a];
}
const ws = {
  mounted: wg,
  unmounted: xg
}, xs = Symbol.for("vuetify:v-window"), Cs = Symbol.for("vuetify:v-window-group"), il = p({
  continuous: Boolean,
  nextIcon: {
    type: [Boolean, String, Function, Object],
    default: "$next"
  },
  prevIcon: {
    type: [Boolean, String, Function, Object],
    default: "$prev"
  },
  reverse: Boolean,
  showArrows: {
    type: [Boolean, String],
    validator: (e) => typeof e == "boolean" || e === "hover"
  },
  touch: {
    type: [Object, Boolean],
    default: void 0
  },
  direction: {
    type: String,
    default: "horizontal"
  },
  modelValue: null,
  disabled: Boolean,
  selectedClass: {
    type: String,
    default: "v-window-item--active"
  },
  // TODO: mandatory should probably not be exposed but do this for now
  mandatory: {
    type: [Boolean, String],
    default: "force"
  },
  ...le(),
  ...ge(),
  ...ke()
}, "VWindow"), $n = L()({
  name: "VWindow",
  directives: {
    Touch: ws
  },
  props: il(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, n) {
    let {
      slots: t
    } = n;
    const {
      themeClasses: a
    } = Ve(e), {
      isRtl: l
    } = We(), {
      t: i
    } = Te(), o = qt(e, Cs), u = U(), s = b(() => l.value ? !e.reverse : e.reverse), c = G(!1), v = b(() => {
      const T = e.direction === "vertical" ? "y" : "x", _ = (s.value ? !c.value : c.value) ? "-reverse" : "";
      return `v-window-${T}${_}-transition`;
    }), f = G(0), d = U(void 0), g = b(() => o.items.value.findIndex((T) => o.selected.value.includes(T.id)));
    J(g, (T, I) => {
      const _ = o.items.value.length, D = _ - 1;
      _ <= 2 ? c.value = T < I : T === D && I === 0 ? c.value = !0 : T === 0 && I === D ? c.value = !1 : c.value = T < I;
    }), De(xs, {
      transition: v,
      isReversed: c,
      transitionCount: f,
      transitionHeight: d,
      rootRef: u
    });
    const y = b(() => e.continuous || g.value !== 0), h = b(() => e.continuous || g.value !== o.items.value.length - 1);
    function m() {
      y.value && o.prev();
    }
    function k() {
      h.value && o.next();
    }
    const S = b(() => {
      const T = [], I = {
        icon: l.value ? e.nextIcon : e.prevIcon,
        class: `v-window__${s.value ? "right" : "left"}`,
        onClick: o.prev,
        "aria-label": i("$vuetify.carousel.prev")
      };
      T.push(y.value ? t.prev ? t.prev({
        props: I
      }) : r(fe, I, null) : r("div", null, null));
      const _ = {
        icon: l.value ? e.prevIcon : e.nextIcon,
        class: `v-window__${s.value ? "left" : "right"}`,
        onClick: o.next,
        "aria-label": i("$vuetify.carousel.next")
      };
      return T.push(h.value ? t.next ? t.next({
        props: _
      }) : r(fe, _, null) : r("div", null, null)), T;
    }), C = b(() => e.touch === !1 ? e.touch : {
      ...{
        left: () => {
          s.value ? m() : k();
        },
        right: () => {
          s.value ? k() : m();
        },
        start: (I) => {
          let {
            originalEvent: _
          } = I;
          _.stopPropagation();
        }
      },
      ...e.touch === !0 ? {} : e.touch
    });
    return z(() => $e(r(e.tag, {
      ref: u,
      class: ["v-window", {
        "v-window--show-arrows-on-hover": e.showArrows === "hover"
      }, a.value, e.class],
      style: e.style
    }, {
      default: () => {
        var T, I;
        return [r("div", {
          class: "v-window__container",
          style: {
            height: d.value
          }
        }, [(T = t.default) == null ? void 0 : T.call(t, {
          group: o
        }), e.showArrows !== !1 && r("div", {
          class: "v-window__controls"
        }, [S.value])]), (I = t.additional) == null ? void 0 : I.call(t, {
          group: o
        })];
      }
    }), [[mt("touch"), C.value]])), {
      group: o
    };
  }
}), Cg = p({
  color: String,
  cycle: Boolean,
  delimiterIcon: {
    type: ue,
    default: "$delimiter"
  },
  height: {
    type: [Number, String],
    default: 500
  },
  hideDelimiters: Boolean,
  hideDelimiterBackground: Boolean,
  interval: {
    type: [Number, String],
    default: 6e3,
    validator: (e) => Number(e) > 0
  },
  progress: [Boolean, String],
  verticalDelimiters: [Boolean, String],
  ...il({
    continuous: !0,
    mandatory: "force",
    showArrows: !0
  })
}, "VCarousel"), yk = L()({
  name: "VCarousel",
  props: Cg(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, n) {
    let {
      slots: t
    } = n;
    const a = oe(e, "modelValue"), {
      t: l
    } = Te(), i = U();
    let o = -1;
    J(a, s), J(() => e.interval, s), J(() => e.cycle, (c) => {
      c ? s() : window.clearTimeout(o);
    }), Ue(u);
    function u() {
      !e.cycle || !i.value || (o = window.setTimeout(i.value.group.next, Number(e.interval) > 0 ? Number(e.interval) : 6e3));
    }
    function s() {
      window.clearTimeout(o), window.requestAnimationFrame(u);
    }
    return z(() => {
      const c = $n.filterProps(e);
      return r($n, O({
        ref: i
      }, c, {
        modelValue: a.value,
        "onUpdate:modelValue": (v) => a.value = v,
        class: ["v-carousel", {
          "v-carousel--hide-delimiter-background": e.hideDelimiterBackground,
          "v-carousel--vertical-delimiters": e.verticalDelimiters
        }, e.class],
        style: [{
          height: te(e.height)
        }, e.style]
      }), {
        default: t.default,
        additional: (v) => {
          let {
            group: f
          } = v;
          return r(ie, null, [!e.hideDelimiters && r("div", {
            class: "v-carousel__controls",
            style: {
              left: e.verticalDelimiters === "left" && e.verticalDelimiters ? 0 : "auto",
              right: e.verticalDelimiters === "right" ? 0 : "auto"
            }
          }, [f.items.value.length > 0 && r(de, {
            defaults: {
              VBtn: {
                color: e.color,
                icon: e.delimiterIcon,
                size: "x-small",
                variant: "text"
              }
            },
            scoped: !0
          }, {
            default: () => [f.items.value.map((d, g) => {
              const y = {
                id: `carousel-item-${d.id}`,
                "aria-label": l("$vuetify.carousel.ariaLabel.delimiter", g + 1, f.items.value.length),
                class: ["v-carousel__controls__item", f.isSelected(d.id) && "v-btn--active"],
                onClick: () => f.select(d.id, !0)
              };
              return t.item ? t.item({
                props: y,
                item: d
              }) : r(fe, O(d, y), null);
            })]
          })]), e.progress && r(gi, {
            class: "v-carousel__progress",
            color: typeof e.progress == "string" ? e.progress : void 0,
            modelValue: (f.getItemIndex(a.value) + 1) / f.items.value.length * 100
          }, null)]);
        },
        prev: t.prev,
        next: t.next
      });
    }), {};
  }
}), ol = p({
  reverseTransition: {
    type: [Boolean, String],
    default: void 0
  },
  transition: {
    type: [Boolean, String],
    default: void 0
  },
  ...le(),
  ...kn(),
  ...Ci()
}, "VWindowItem"), Ln = L()({
  name: "VWindowItem",
  directives: {
    Touch: ws
  },
  props: ol(),
  emits: {
    "group:selected": (e) => !0
  },
  setup(e, n) {
    let {
      slots: t
    } = n;
    const a = be(xs), l = Sn(e, Cs), {
      isBooted: i
    } = hn();
    if (!a || !l) throw new Error("[Vuetify] VWindowItem must be used inside VWindow");
    const o = G(!1), u = b(() => i.value && (a.isReversed.value ? e.reverseTransition !== !1 : e.transition !== !1));
    function s() {
      !o.value || !a || (o.value = !1, a.transitionCount.value > 0 && (a.transitionCount.value -= 1, a.transitionCount.value === 0 && (a.transitionHeight.value = void 0)));
    }
    function c() {
      var y;
      o.value || !a || (o.value = !0, a.transitionCount.value === 0 && (a.transitionHeight.value = te((y = a.rootRef.value) == null ? void 0 : y.clientHeight)), a.transitionCount.value += 1);
    }
    function v() {
      s();
    }
    function f(y) {
      o.value && we(() => {
        !u.value || !o.value || !a || (a.transitionHeight.value = te(y.clientHeight));
      });
    }
    const d = b(() => {
      const y = a.isReversed.value ? e.reverseTransition : e.transition;
      return u.value ? {
        name: typeof y != "string" ? a.transition.value : y,
        onBeforeEnter: c,
        onAfterEnter: s,
        onEnterCancelled: v,
        onBeforeLeave: c,
        onAfterLeave: s,
        onLeaveCancelled: v,
        onEnter: f
      } : !1;
    }), {
      hasContent: g
    } = Vi(e, l.isSelected);
    return z(() => r(tt, {
      transition: d.value,
      disabled: !i.value
    }, {
      default: () => {
        var y;
        return [$e(r("div", {
          class: ["v-window-item", l.selectedClass.value, e.class],
          style: e.style
        }, [g.value && ((y = t.default) == null ? void 0 : y.call(t))]), [[Ct, l.isSelected.value]])];
      }
    })), {
      groupItem: l
    };
  }
}), Vg = p({
  ...Pu(),
  ...ol()
}, "VCarouselItem"), bk = L()({
  name: "VCarouselItem",
  inheritAttrs: !1,
  props: Vg(),
  setup(e, n) {
    let {
      slots: t,
      attrs: a
    } = n;
    z(() => {
      const l = jt.filterProps(e), i = Ln.filterProps(e);
      return r(Ln, O({
        class: ["v-carousel-item", e.class]
      }, i), {
        default: () => [r(jt, O(a, l), t)]
      });
    });
  }
}), kk = Bt("v-code", "code"), Pg = p({
  color: {
    type: Object
  },
  disabled: Boolean,
  dotSize: {
    type: [Number, String],
    default: 10
  },
  height: {
    type: [Number, String],
    default: 150
  },
  width: {
    type: [Number, String],
    default: 300
  },
  ...le()
}, "VColorPickerCanvas"), Ig = gt({
  name: "VColorPickerCanvas",
  props: Pg(),
  emits: {
    "update:color": (e) => !0,
    "update:position": (e) => !0
  },
  setup(e, n) {
    let {
      emit: t
    } = n;
    const a = G(!1), l = U(), i = G(parseFloat(e.width)), o = G(parseFloat(e.height)), u = U({
      x: 0,
      y: 0
    }), s = b({
      get: () => u.value,
      set(m) {
        var C, T;
        if (!l.value) return;
        const {
          x: k,
          y: S
        } = m;
        u.value = m, t("update:color", {
          h: ((C = e.color) == null ? void 0 : C.h) ?? 0,
          s: Me(k, 0, i.value) / i.value,
          v: 1 - Me(S, 0, o.value) / o.value,
          a: ((T = e.color) == null ? void 0 : T.a) ?? 1
        });
      }
    }), c = b(() => {
      const {
        x: m,
        y: k
      } = s.value, S = parseInt(e.dotSize, 10) / 2;
      return {
        width: te(e.dotSize),
        height: te(e.dotSize),
        transform: `translate(${te(m - S)}, ${te(k - S)})`
      };
    }), {
      resizeRef: v
    } = xt((m) => {
      var C;
      if (!((C = v.el) != null && C.offsetParent)) return;
      const {
        width: k,
        height: S
      } = m[0].contentRect;
      i.value = k, o.value = S;
    });
    function f(m, k, S) {
      const {
        left: C,
        top: T,
        width: I,
        height: _
      } = S;
      s.value = {
        x: Me(m - C, 0, I),
        y: Me(k - T, 0, _)
      };
    }
    function d(m) {
      m.type === "mousedown" && m.preventDefault(), !e.disabled && (g(m), window.addEventListener("mousemove", g), window.addEventListener("mouseup", y), window.addEventListener("touchmove", g), window.addEventListener("touchend", y));
    }
    function g(m) {
      if (e.disabled || !l.value) return;
      a.value = !0;
      const k = ud(m);
      f(k.clientX, k.clientY, l.value.getBoundingClientRect());
    }
    function y() {
      window.removeEventListener("mousemove", g), window.removeEventListener("mouseup", y), window.removeEventListener("touchmove", g), window.removeEventListener("touchend", y);
    }
    function h() {
      var T;
      if (!l.value) return;
      const m = l.value, k = m.getContext("2d");
      if (!k) return;
      const S = k.createLinearGradient(0, 0, m.width, 0);
      S.addColorStop(0, "hsla(0, 0%, 100%, 1)"), S.addColorStop(1, `hsla(${((T = e.color) == null ? void 0 : T.h) ?? 0}, 100%, 50%, 1)`), k.fillStyle = S, k.fillRect(0, 0, m.width, m.height);
      const C = k.createLinearGradient(0, 0, 0, m.height);
      C.addColorStop(0, "hsla(0, 0%, 0%, 0)"), C.addColorStop(1, "hsla(0, 0%, 0%, 1)"), k.fillStyle = C, k.fillRect(0, 0, m.width, m.height);
    }
    return J(() => {
      var m;
      return (m = e.color) == null ? void 0 : m.h;
    }, h, {
      immediate: !0
    }), J(() => [i.value, o.value], (m, k) => {
      h(), u.value = {
        x: s.value.x * m[0] / k[0],
        y: s.value.y * m[1] / k[1]
      };
    }, {
      flush: "post"
    }), J(() => e.color, () => {
      if (a.value) {
        a.value = !1;
        return;
      }
      u.value = e.color ? {
        x: e.color.s * i.value,
        y: (1 - e.color.v) * o.value
      } : {
        x: 0,
        y: 0
      };
    }, {
      deep: !0,
      immediate: !0
    }), Ue(() => h()), z(() => r("div", {
      ref: v,
      class: ["v-color-picker-canvas", e.class],
      style: e.style,
      onMousedown: d,
      onTouchstartPassive: d
    }, [r("canvas", {
      ref: l,
      width: i.value,
      height: o.value
    }, null), e.color && r("div", {
      class: ["v-color-picker-canvas__dot", {
        "v-color-picker-canvas__dot--disabled": e.disabled
      }],
      style: c.value
    }, null)])), {};
  }
});
function _g(e, n) {
  if (n) {
    const {
      a: t,
      ...a
    } = e;
    return a;
  }
  return e;
}
function Tg(e, n) {
  if (n == null || typeof n == "string") {
    const t = qr(e);
    return e.a === 1 ? t.slice(0, 7) : t;
  }
  if (typeof n == "object") {
    let t;
    return tn(n, ["r", "g", "b"]) ? t = Ft(e) : tn(n, ["h", "s", "l"]) ? t = jr(e) : tn(n, ["h", "s", "v"]) && (t = e), _g(t, !tn(n, ["a"]) && e.a === 1);
  }
  return e;
}
const Tn = {
  h: 0,
  s: 0,
  v: 0,
  a: 1
}, jl = {
  inputProps: {
    type: "number",
    min: 0
  },
  inputs: [{
    label: "R",
    max: 255,
    step: 1,
    getValue: (e) => Math.round(e.r),
    getColor: (e, n) => ({
      ...e,
      r: Number(n)
    })
  }, {
    label: "G",
    max: 255,
    step: 1,
    getValue: (e) => Math.round(e.g),
    getColor: (e, n) => ({
      ...e,
      g: Number(n)
    })
  }, {
    label: "B",
    max: 255,
    step: 1,
    getValue: (e) => Math.round(e.b),
    getColor: (e, n) => ({
      ...e,
      b: Number(n)
    })
  }, {
    label: "A",
    max: 1,
    step: 0.01,
    getValue: (e) => {
      let {
        a: n
      } = e;
      return n != null ? Math.round(n * 100) / 100 : 1;
    },
    getColor: (e, n) => ({
      ...e,
      a: Number(n)
    })
  }],
  to: Ft,
  from: ca
};
var Pr;
const Ag = {
  ...jl,
  inputs: (Pr = jl.inputs) == null ? void 0 : Pr.slice(0, 3)
}, Ul = {
  inputProps: {
    type: "number",
    min: 0
  },
  inputs: [{
    label: "H",
    max: 360,
    step: 1,
    getValue: (e) => Math.round(e.h),
    getColor: (e, n) => ({
      ...e,
      h: Number(n)
    })
  }, {
    label: "S",
    max: 1,
    step: 0.01,
    getValue: (e) => Math.round(e.s * 100) / 100,
    getColor: (e, n) => ({
      ...e,
      s: Number(n)
    })
  }, {
    label: "L",
    max: 1,
    step: 0.01,
    getValue: (e) => Math.round(e.l * 100) / 100,
    getColor: (e, n) => ({
      ...e,
      l: Number(n)
    })
  }, {
    label: "A",
    max: 1,
    step: 0.01,
    getValue: (e) => {
      let {
        a: n
      } = e;
      return n != null ? Math.round(n * 100) / 100 : 1;
    },
    getColor: (e, n) => ({
      ...e,
      a: Number(n)
    })
  }],
  to: jr,
  from: ii
}, Dg = {
  ...Ul,
  inputs: Ul.inputs.slice(0, 3)
}, Vs = {
  inputProps: {
    type: "text"
  },
  inputs: [{
    label: "HEXA",
    getValue: (e) => e,
    getColor: (e, n) => n
  }],
  to: qr,
  from: Dd
}, Bg = {
  ...Vs,
  inputs: [{
    label: "HEX",
    getValue: (e) => e.slice(0, 7),
    getColor: (e, n) => n
  }]
}, un = {
  rgb: Ag,
  rgba: jl,
  hsl: Dg,
  hsla: Ul,
  hex: Bg,
  hexa: Vs
}, Mg = (e) => {
  let {
    label: n,
    ...t
  } = e;
  return r("div", {
    class: "v-color-picker-edit__input"
  }, [r("input", t, null), r("span", null, [n])]);
}, pg = p({
  color: Object,
  disabled: Boolean,
  mode: {
    type: String,
    default: "rgba",
    validator: (e) => Object.keys(un).includes(e)
  },
  modes: {
    type: Array,
    default: () => Object.keys(un),
    validator: (e) => Array.isArray(e) && e.every((n) => Object.keys(un).includes(n))
  },
  ...le()
}, "VColorPickerEdit"), Eg = gt({
  name: "VColorPickerEdit",
  props: pg(),
  emits: {
    "update:color": (e) => !0,
    "update:mode": (e) => !0
  },
  setup(e, n) {
    let {
      emit: t
    } = n;
    const a = b(() => e.modes.map((i) => ({
      ...un[i],
      name: i
    }))), l = b(() => {
      var u;
      const i = a.value.find((s) => s.name === e.mode);
      if (!i) return [];
      const o = e.color ? i.to(e.color) : null;
      return (u = i.inputs) == null ? void 0 : u.map((s) => {
        let {
          getValue: c,
          getColor: v,
          ...f
        } = s;
        return {
          ...i.inputProps,
          ...f,
          disabled: e.disabled,
          value: o && c(o),
          onChange: (d) => {
            const g = d.target;
            g && t("update:color", i.from(v(o ?? i.to(Tn), g.value)));
          }
        };
      });
    });
    return z(() => {
      var i;
      return r("div", {
        class: ["v-color-picker-edit", e.class],
        style: e.style
      }, [(i = l.value) == null ? void 0 : i.map((o) => r(Mg, o, null)), a.value.length > 1 && r(fe, {
        icon: "$unfold",
        size: "x-small",
        variant: "plain",
        onClick: () => {
          const o = a.value.findIndex((u) => u.name === e.mode);
          t("update:mode", a.value[(o + 1) % a.value.length].name);
        }
      }, null)]);
    }), {};
  }
}), Ai = Symbol.for("vuetify:v-slider");
function Yl(e, n, t) {
  const a = t === "vertical", l = n.getBoundingClientRect(), i = "touches" in e ? e.touches[0] : e;
  return a ? i.clientY - (l.top + l.height / 2) : i.clientX - (l.left + l.width / 2);
}
function Fg(e, n) {
  return "touches" in e && e.touches.length ? e.touches[0][n] : "changedTouches" in e && e.changedTouches.length ? e.changedTouches[0][n] : e[n];
}
const Ps = p({
  disabled: {
    type: Boolean,
    default: null
  },
  error: Boolean,
  readonly: {
    type: Boolean,
    default: null
  },
  max: {
    type: [Number, String],
    default: 100
  },
  min: {
    type: [Number, String],
    default: 0
  },
  step: {
    type: [Number, String],
    default: 0
  },
  thumbColor: String,
  thumbLabel: {
    type: [Boolean, String],
    default: void 0,
    validator: (e) => typeof e == "boolean" || e === "always"
  },
  thumbSize: {
    type: [Number, String],
    default: 20
  },
  showTicks: {
    type: [Boolean, String],
    default: !1,
    validator: (e) => typeof e == "boolean" || e === "always"
  },
  ticks: {
    type: [Array, Object]
  },
  tickSize: {
    type: [Number, String],
    default: 2
  },
  color: String,
  trackColor: String,
  trackFillColor: String,
  trackSize: {
    type: [Number, String],
    default: 4
  },
  direction: {
    type: String,
    default: "horizontal",
    validator: (e) => ["vertical", "horizontal"].includes(e)
  },
  reverse: Boolean,
  ...Ee(),
  ...je({
    elevation: 2
  }),
  ripple: {
    type: Boolean,
    default: !0
  }
}, "Slider"), Is = (e) => {
  const n = b(() => parseFloat(e.min)), t = b(() => parseFloat(e.max)), a = b(() => Number(e.step) > 0 ? parseFloat(e.step) : 0), l = b(() => Math.max(Qi(a.value), Qi(n.value)));
  function i(o) {
    if (o = parseFloat(o), a.value <= 0) return o;
    const u = Me(o, n.value, t.value), s = n.value % a.value, c = Math.round((u - s) / a.value) * a.value + s;
    return parseFloat(Math.min(c, t.value).toFixed(l.value));
  }
  return {
    min: n,
    max: t,
    step: a,
    decimals: l,
    roundValue: i
  };
}, _s = (e) => {
  let {
    props: n,
    steps: t,
    onSliderStart: a,
    onSliderMove: l,
    onSliderEnd: i,
    getActiveThumb: o
  } = e;
  const {
    isRtl: u
  } = We(), s = $(n, "reverse"), c = b(() => n.direction === "vertical"), v = b(() => c.value !== s.value), {
    min: f,
    max: d,
    step: g,
    decimals: y,
    roundValue: h
  } = t, m = b(() => parseInt(n.thumbSize, 10)), k = b(() => parseInt(n.tickSize, 10)), S = b(() => parseInt(n.trackSize, 10)), C = b(() => (d.value - f.value) / g.value), T = $(n, "disabled"), I = b(() => n.error || n.disabled ? void 0 : n.thumbColor ?? n.color), _ = b(() => n.error || n.disabled ? void 0 : n.trackColor ?? n.color), D = b(() => n.error || n.disabled ? void 0 : n.trackFillColor ?? n.color), w = G(!1), P = G(0), A = U(), V = U();
  function x(X) {
    var ce;
    const K = (ce = A.value) == null ? void 0 : ce.$el;
    if (!K) return;
    const ne = n.direction === "vertical", ye = ne ? "top" : "left", he = ne ? "height" : "width", q = ne ? "clientY" : "clientX", {
      [ye]: se,
      [he]: Y
    } = K.getBoundingClientRect(), ae = Fg(X, q);
    let ve = Math.min(Math.max((ae - se - P.value) / Y, 0), 1) || 0;
    return (ne ? v.value : v.value !== u.value) && (ve = 1 - ve), h(f.value + ve * (d.value - f.value));
  }
  const M = (X) => {
    const K = x(X);
    K != null && i({
      value: K
    }), w.value = !1, P.value = 0;
  }, E = (X) => {
    const K = x(X);
    V.value = o(X), V.value && (w.value = !0, V.value.contains(X.target) ? P.value = Yl(X, V.value, n.direction) : (P.value = 0, K != null && l({
      value: K
    })), K != null && a({
      value: K
    }), we(() => {
      var ne;
      return (ne = V.value) == null ? void 0 : ne.focus();
    }));
  }, N = {
    passive: !0,
    capture: !0
  };
  function j(X) {
    const K = x(X);
    K != null && l({
      value: K
    });
  }
  function ee(X) {
    X.stopPropagation(), X.preventDefault(), M(X), window.removeEventListener("mousemove", j, N), window.removeEventListener("mouseup", ee);
  }
  function W(X) {
    var K;
    M(X), window.removeEventListener("touchmove", j, N), (K = X.target) == null || K.removeEventListener("touchend", W);
  }
  function R(X) {
    var K;
    E(X), window.addEventListener("touchmove", j, N), (K = X.target) == null || K.addEventListener("touchend", W, {
      passive: !1
    });
  }
  function F(X) {
    X.button === 0 && (X.preventDefault(), E(X), window.addEventListener("mousemove", j, N), window.addEventListener("mouseup", ee, {
      passive: !1
    }));
  }
  const B = (X) => {
    const K = (X - f.value) / (d.value - f.value) * 100;
    return Me(isNaN(K) ? 0 : K, 0, 100);
  }, H = $(n, "showTicks"), Z = b(() => H.value ? n.ticks ? Array.isArray(n.ticks) ? n.ticks.map((X) => ({
    value: X,
    position: B(X),
    label: X.toString()
  })) : Object.keys(n.ticks).map((X) => ({
    value: parseFloat(X),
    position: B(parseFloat(X)),
    label: n.ticks[X]
  })) : C.value !== 1 / 0 ? vt(C.value + 1).map((X) => {
    const K = f.value + X * g.value;
    return {
      value: K,
      position: B(K)
    };
  }) : [] : []), Q = b(() => Z.value.some((X) => {
    let {
      label: K
    } = X;
    return !!K;
  })), re = {
    activeThumbRef: V,
    color: $(n, "color"),
    decimals: y,
    disabled: T,
    direction: $(n, "direction"),
    elevation: $(n, "elevation"),
    hasLabels: Q,
    isReversed: s,
    indexFromEnd: v,
    min: f,
    max: d,
    mousePressed: w,
    numTicks: C,
    onSliderMousedown: F,
    onSliderTouchstart: R,
    parsedTicks: Z,
    parseMouseMove: x,
    position: B,
    readonly: $(n, "readonly"),
    rounded: $(n, "rounded"),
    roundValue: h,
    showTicks: H,
    startOffset: P,
    step: g,
    thumbSize: m,
    thumbColor: I,
    thumbLabel: $(n, "thumbLabel"),
    ticks: $(n, "ticks"),
    tickSize: k,
    trackColor: _,
    trackContainerRef: A,
    trackFillColor: D,
    trackSize: S,
    vertical: c
  };
  return De(Ai, re), re;
}, $g = p({
  focused: Boolean,
  max: {
    type: Number,
    required: !0
  },
  min: {
    type: Number,
    required: !0
  },
  modelValue: {
    type: Number,
    required: !0
  },
  position: {
    type: Number,
    required: !0
  },
  ripple: {
    type: [Boolean, Object],
    default: !0
  },
  name: String,
  ...le()
}, "VSliderThumb"), Gl = L()({
  name: "VSliderThumb",
  directives: {
    Ripple: Xt
  },
  props: $g(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, n) {
    let {
      slots: t,
      emit: a
    } = n;
    const l = be(Ai), {
      isRtl: i,
      rtlClasses: o
    } = We();
    if (!l) throw new Error("[Vuetify] v-slider-thumb must be used inside v-slider or v-range-slider");
    const {
      thumbColor: u,
      step: s,
      disabled: c,
      thumbSize: v,
      thumbLabel: f,
      direction: d,
      isReversed: g,
      vertical: y,
      readonly: h,
      elevation: m,
      mousePressed: k,
      decimals: S,
      indexFromEnd: C
    } = l, T = b(() => c.value ? void 0 : m.value), {
      elevationClasses: I
    } = qe(T), {
      textColorClasses: _,
      textColorStyles: D
    } = Ge(u), {
      pageup: w,
      pagedown: P,
      end: A,
      home: V,
      left: x,
      right: M,
      down: E,
      up: N
    } = Tl, j = [w, P, A, V, x, M, E, N], ee = b(() => s.value ? [1, 2, 3] : [1, 5, 10]);
    function W(F, B) {
      if (!j.includes(F.key)) return;
      F.preventDefault();
      const H = s.value || 0.1, Z = (e.max - e.min) / H;
      if ([x, M, E, N].includes(F.key)) {
        const re = (y.value ? [i.value ? x : M, g.value ? E : N] : C.value !== i.value ? [x, N] : [M, N]).includes(F.key) ? 1 : -1, X = F.shiftKey ? 2 : F.ctrlKey ? 1 : 0;
        B = B + re * H * ee.value[X];
      } else if (F.key === V)
        B = e.min;
      else if (F.key === A)
        B = e.max;
      else {
        const Q = F.key === P ? 1 : -1;
        B = B - Q * H * (Z > 100 ? Z / 10 : 10);
      }
      return Math.max(e.min, Math.min(e.max, B));
    }
    function R(F) {
      const B = W(F, e.modelValue);
      B != null && a("update:modelValue", B);
    }
    return z(() => {
      const F = te(C.value ? 100 - e.position : e.position, "%");
      return r("div", {
        class: ["v-slider-thumb", {
          "v-slider-thumb--focused": e.focused,
          "v-slider-thumb--pressed": e.focused && k.value
        }, e.class, o.value],
        style: [{
          "--v-slider-thumb-position": F,
          "--v-slider-thumb-size": te(v.value)
        }, e.style],
        role: "slider",
        tabindex: c.value ? -1 : 0,
        "aria-label": e.name,
        "aria-valuemin": e.min,
        "aria-valuemax": e.max,
        "aria-valuenow": e.modelValue,
        "aria-readonly": !!h.value,
        "aria-orientation": d.value,
        onKeydown: h.value ? void 0 : R
      }, [r("div", {
        class: ["v-slider-thumb__surface", _.value, I.value],
        style: {
          ...D.value
        }
      }, null), $e(r("div", {
        class: ["v-slider-thumb__ripple", _.value],
        style: D.value
      }, null), [[mt("ripple"), e.ripple, null, {
        circle: !0,
        center: !0
      }]]), r(Su, {
        origin: "bottom center"
      }, {
        default: () => {
          var B;
          return [$e(r("div", {
            class: "v-slider-thumb__label-container"
          }, [r("div", {
            class: ["v-slider-thumb__label"]
          }, [r("div", null, [((B = t["thumb-label"]) == null ? void 0 : B.call(t, {
            modelValue: e.modelValue
          })) ?? e.modelValue.toFixed(s.value ? S.value : 1)])])]), [[Ct, f.value && e.focused || f.value === "always"]])];
        }
      })]);
    }), {};
  }
}), Lg = p({
  start: {
    type: Number,
    required: !0
  },
  stop: {
    type: Number,
    required: !0
  },
  ...le()
}, "VSliderTrack"), Ts = L()({
  name: "VSliderTrack",
  props: Lg(),
  emits: {},
  setup(e, n) {
    let {
      slots: t
    } = n;
    const a = be(Ai);
    if (!a) throw new Error("[Vuetify] v-slider-track must be inside v-slider or v-range-slider");
    const {
      color: l,
      parsedTicks: i,
      rounded: o,
      showTicks: u,
      tickSize: s,
      trackColor: c,
      trackFillColor: v,
      trackSize: f,
      vertical: d,
      min: g,
      max: y,
      indexFromEnd: h
    } = a, {
      roundedClasses: m
    } = Oe(o), {
      backgroundColorClasses: k,
      backgroundColorStyles: S
    } = Pe(v), {
      backgroundColorClasses: C,
      backgroundColorStyles: T
    } = Pe(c), I = b(() => `inset-${d.value ? "block" : "inline"}-${h.value ? "end" : "start"}`), _ = b(() => d.value ? "height" : "width"), D = b(() => ({
      [I.value]: "0%",
      [_.value]: "100%"
    })), w = b(() => e.stop - e.start), P = b(() => ({
      [I.value]: te(e.start, "%"),
      [_.value]: te(w.value, "%")
    })), A = b(() => u.value ? (d.value ? i.value.slice().reverse() : i.value).map((x, M) => {
      var N;
      const E = x.value !== g.value && x.value !== y.value ? te(x.position, "%") : void 0;
      return r("div", {
        key: x.value,
        class: ["v-slider-track__tick", {
          "v-slider-track__tick--filled": x.position >= e.start && x.position <= e.stop,
          "v-slider-track__tick--first": x.value === g.value,
          "v-slider-track__tick--last": x.value === y.value
        }],
        style: {
          [I.value]: E
        }
      }, [(x.label || t["tick-label"]) && r("div", {
        class: "v-slider-track__tick-label"
      }, [((N = t["tick-label"]) == null ? void 0 : N.call(t, {
        tick: x,
        index: M
      })) ?? x.label])]);
    }) : []);
    return z(() => r("div", {
      class: ["v-slider-track", m.value, e.class],
      style: [{
        "--v-slider-track-size": te(f.value),
        "--v-slider-tick-size": te(s.value)
      }, e.style]
    }, [r("div", {
      class: ["v-slider-track__background", C.value, {
        "v-slider-track__background--opacity": !!l.value || !v.value
      }],
      style: {
        ...D.value,
        ...T.value
      }
    }, null), r("div", {
      class: ["v-slider-track__fill", k.value],
      style: {
        ...P.value,
        ...S.value
      }
    }, null), u.value && r("div", {
      class: ["v-slider-track__ticks", {
        "v-slider-track__ticks--always-show": u.value === "always"
      }]
    }, [A.value])])), {};
  }
}), Og = p({
  ...Un(),
  ...Ps(),
  ...Ht(),
  modelValue: {
    type: [Number, String],
    default: 0
  }
}, "VSlider"), Yo = L()({
  name: "VSlider",
  props: Og(),
  emits: {
    "update:focused": (e) => !0,
    "update:modelValue": (e) => !0,
    start: (e) => !0,
    end: (e) => !0
  },
  setup(e, n) {
    let {
      slots: t,
      emit: a
    } = n;
    const l = U(), {
      rtlClasses: i
    } = We(), o = Is(e), u = oe(e, "modelValue", void 0, (_) => o.roundValue(_ ?? o.min.value)), {
      min: s,
      max: c,
      mousePressed: v,
      roundValue: f,
      onSliderMousedown: d,
      onSliderTouchstart: g,
      trackContainerRef: y,
      position: h,
      hasLabels: m,
      readonly: k
    } = _s({
      props: e,
      steps: o,
      onSliderStart: () => {
        a("start", u.value);
      },
      onSliderEnd: (_) => {
        let {
          value: D
        } = _;
        const w = f(D);
        u.value = w, a("end", w);
      },
      onSliderMove: (_) => {
        let {
          value: D
        } = _;
        return u.value = f(D);
      },
      getActiveThumb: () => {
        var _;
        return (_ = l.value) == null ? void 0 : _.$el;
      }
    }), {
      isFocused: S,
      focus: C,
      blur: T
    } = Pt(e), I = b(() => h(u.value));
    return z(() => {
      const _ = at.filterProps(e), D = !!(e.label || t.label || t.prepend);
      return r(at, O({
        class: ["v-slider", {
          "v-slider--has-labels": !!t["tick-label"] || m.value,
          "v-slider--focused": S.value,
          "v-slider--pressed": v.value,
          "v-slider--disabled": e.disabled
        }, i.value, e.class],
        style: e.style
      }, _, {
        focused: S.value
      }), {
        ...t,
        prepend: D ? (w) => {
          var P, A;
          return r(ie, null, [((P = t.label) == null ? void 0 : P.call(t, w)) ?? (e.label ? r(ga, {
            id: w.id.value,
            class: "v-slider__label",
            text: e.label
          }, null) : void 0), (A = t.prepend) == null ? void 0 : A.call(t, w)]);
        } : void 0,
        default: (w) => {
          let {
            id: P,
            messagesId: A
          } = w;
          return r("div", {
            class: "v-slider__container",
            onMousedown: k.value ? void 0 : d,
            onTouchstartPassive: k.value ? void 0 : g
          }, [r("input", {
            id: P.value,
            name: e.name || P.value,
            disabled: !!e.disabled,
            readonly: !!e.readonly,
            tabindex: "-1",
            value: u.value
          }, null), r(Ts, {
            ref: y,
            start: 0,
            stop: I.value
          }, {
            "tick-label": t["tick-label"]
          }), r(Gl, {
            ref: l,
            "aria-describedby": A.value,
            focused: S.value,
            min: s.value,
            max: c.value,
            modelValue: u.value,
            "onUpdate:modelValue": (V) => u.value = V,
            position: I.value,
            elevation: e.elevation,
            onFocus: C,
            onBlur: T,
            ripple: e.ripple,
            name: e.name
          }, {
            "thumb-label": t["thumb-label"]
          })]);
        }
      });
    }), {};
  }
}), Ng = p({
  color: {
    type: Object
  },
  disabled: Boolean,
  hideAlpha: Boolean,
  ...le()
}, "VColorPickerPreview"), Rg = gt({
  name: "VColorPickerPreview",
  props: Ng(),
  emits: {
    "update:color": (e) => !0
  },
  setup(e, n) {
    let {
      emit: t
    } = n;
    const a = new AbortController();
    Tr(() => a.abort());
    async function l() {
      if (!Ki) return;
      const i = new window.EyeDropper();
      try {
        const o = await i.open({
          signal: a.signal
        }), u = ca(ft(o.sRGBHex));
        t("update:color", {
          ...e.color ?? Tn,
          ...u
        });
      } catch {
      }
    }
    return z(() => {
      var i, o;
      return r("div", {
        class: ["v-color-picker-preview", {
          "v-color-picker-preview--hide-alpha": e.hideAlpha
        }, e.class],
        style: e.style
      }, [Ki && r("div", {
        class: "v-color-picker-preview__eye-dropper",
        key: "eyeDropper"
      }, [r(fe, {
        onClick: l,
        icon: "$eyeDropper",
        variant: "plain",
        density: "comfortable"
      }, null)]), r("div", {
        class: "v-color-picker-preview__dot"
      }, [r("div", {
        style: {
          background: Yr(e.color ?? Tn)
        }
      }, null)]), r("div", {
        class: "v-color-picker-preview__sliders"
      }, [r(Yo, {
        class: "v-color-picker-preview__track v-color-picker-preview__hue",
        modelValue: (i = e.color) == null ? void 0 : i.h,
        "onUpdate:modelValue": (u) => t("update:color", {
          ...e.color ?? Tn,
          h: u
        }),
        step: 0,
        min: 0,
        max: 360,
        disabled: e.disabled,
        thumbSize: 14,
        trackSize: 8,
        trackFillColor: "white",
        hideDetails: !0
      }, null), !e.hideAlpha && r(Yo, {
        class: "v-color-picker-preview__track v-color-picker-preview__alpha",
        modelValue: ((o = e.color) == null ? void 0 : o.a) ?? 1,
        "onUpdate:modelValue": (u) => t("update:color", {
          ...e.color ?? Tn,
          a: u
        }),
        step: 1 / 256,
        min: 0,
        max: 1,
        disabled: e.disabled,
        thumbSize: 14,
        trackSize: 8,
        trackFillColor: "white",
        hideDetails: !0
      }, null)])]);
    }), {};
  }
}), Hg = {
  base: "#f44336",
  lighten5: "#ffebee",
  lighten4: "#ffcdd2",
  lighten3: "#ef9a9a",
  lighten2: "#e57373",
  lighten1: "#ef5350",
  darken1: "#e53935",
  darken2: "#d32f2f",
  darken3: "#c62828",
  darken4: "#b71c1c",
  accent1: "#ff8a80",
  accent2: "#ff5252",
  accent3: "#ff1744",
  accent4: "#d50000"
}, zg = {
  base: "#e91e63",
  lighten5: "#fce4ec",
  lighten4: "#f8bbd0",
  lighten3: "#f48fb1",
  lighten2: "#f06292",
  lighten1: "#ec407a",
  darken1: "#d81b60",
  darken2: "#c2185b",
  darken3: "#ad1457",
  darken4: "#880e4f",
  accent1: "#ff80ab",
  accent2: "#ff4081",
  accent3: "#f50057",
  accent4: "#c51162"
}, Wg = {
  base: "#9c27b0",
  lighten5: "#f3e5f5",
  lighten4: "#e1bee7",
  lighten3: "#ce93d8",
  lighten2: "#ba68c8",
  lighten1: "#ab47bc",
  darken1: "#8e24aa",
  darken2: "#7b1fa2",
  darken3: "#6a1b9a",
  darken4: "#4a148c",
  accent1: "#ea80fc",
  accent2: "#e040fb",
  accent3: "#d500f9",
  accent4: "#aa00ff"
}, jg = {
  base: "#673ab7",
  lighten5: "#ede7f6",
  lighten4: "#d1c4e9",
  lighten3: "#b39ddb",
  lighten2: "#9575cd",
  lighten1: "#7e57c2",
  darken1: "#5e35b1",
  darken2: "#512da8",
  darken3: "#4527a0",
  darken4: "#311b92",
  accent1: "#b388ff",
  accent2: "#7c4dff",
  accent3: "#651fff",
  accent4: "#6200ea"
}, Ug = {
  base: "#3f51b5",
  lighten5: "#e8eaf6",
  lighten4: "#c5cae9",
  lighten3: "#9fa8da",
  lighten2: "#7986cb",
  lighten1: "#5c6bc0",
  darken1: "#3949ab",
  darken2: "#303f9f",
  darken3: "#283593",
  darken4: "#1a237e",
  accent1: "#8c9eff",
  accent2: "#536dfe",
  accent3: "#3d5afe",
  accent4: "#304ffe"
}, Yg = {
  base: "#2196f3",
  lighten5: "#e3f2fd",
  lighten4: "#bbdefb",
  lighten3: "#90caf9",
  lighten2: "#64b5f6",
  lighten1: "#42a5f5",
  darken1: "#1e88e5",
  darken2: "#1976d2",
  darken3: "#1565c0",
  darken4: "#0d47a1",
  accent1: "#82b1ff",
  accent2: "#448aff",
  accent3: "#2979ff",
  accent4: "#2962ff"
}, Gg = {
  base: "#03a9f4",
  lighten5: "#e1f5fe",
  lighten4: "#b3e5fc",
  lighten3: "#81d4fa",
  lighten2: "#4fc3f7",
  lighten1: "#29b6f6",
  darken1: "#039be5",
  darken2: "#0288d1",
  darken3: "#0277bd",
  darken4: "#01579b",
  accent1: "#80d8ff",
  accent2: "#40c4ff",
  accent3: "#00b0ff",
  accent4: "#0091ea"
}, Kg = {
  base: "#00bcd4",
  lighten5: "#e0f7fa",
  lighten4: "#b2ebf2",
  lighten3: "#80deea",
  lighten2: "#4dd0e1",
  lighten1: "#26c6da",
  darken1: "#00acc1",
  darken2: "#0097a7",
  darken3: "#00838f",
  darken4: "#006064",
  accent1: "#84ffff",
  accent2: "#18ffff",
  accent3: "#00e5ff",
  accent4: "#00b8d4"
}, qg = {
  base: "#009688",
  lighten5: "#e0f2f1",
  lighten4: "#b2dfdb",
  lighten3: "#80cbc4",
  lighten2: "#4db6ac",
  lighten1: "#26a69a",
  darken1: "#00897b",
  darken2: "#00796b",
  darken3: "#00695c",
  darken4: "#004d40",
  accent1: "#a7ffeb",
  accent2: "#64ffda",
  accent3: "#1de9b6",
  accent4: "#00bfa5"
}, Xg = {
  base: "#4caf50",
  lighten5: "#e8f5e9",
  lighten4: "#c8e6c9",
  lighten3: "#a5d6a7",
  lighten2: "#81c784",
  lighten1: "#66bb6a",
  darken1: "#43a047",
  darken2: "#388e3c",
  darken3: "#2e7d32",
  darken4: "#1b5e20",
  accent1: "#b9f6ca",
  accent2: "#69f0ae",
  accent3: "#00e676",
  accent4: "#00c853"
}, Zg = {
  base: "#8bc34a",
  lighten5: "#f1f8e9",
  lighten4: "#dcedc8",
  lighten3: "#c5e1a5",
  lighten2: "#aed581",
  lighten1: "#9ccc65",
  darken1: "#7cb342",
  darken2: "#689f38",
  darken3: "#558b2f",
  darken4: "#33691e",
  accent1: "#ccff90",
  accent2: "#b2ff59",
  accent3: "#76ff03",
  accent4: "#64dd17"
}, Qg = {
  base: "#cddc39",
  lighten5: "#f9fbe7",
  lighten4: "#f0f4c3",
  lighten3: "#e6ee9c",
  lighten2: "#dce775",
  lighten1: "#d4e157",
  darken1: "#c0ca33",
  darken2: "#afb42b",
  darken3: "#9e9d24",
  darken4: "#827717",
  accent1: "#f4ff81",
  accent2: "#eeff41",
  accent3: "#c6ff00",
  accent4: "#aeea00"
}, Jg = {
  base: "#ffeb3b",
  lighten5: "#fffde7",
  lighten4: "#fff9c4",
  lighten3: "#fff59d",
  lighten2: "#fff176",
  lighten1: "#ffee58",
  darken1: "#fdd835",
  darken2: "#fbc02d",
  darken3: "#f9a825",
  darken4: "#f57f17",
  accent1: "#ffff8d",
  accent2: "#ffff00",
  accent3: "#ffea00",
  accent4: "#ffd600"
}, eh = {
  base: "#ffc107",
  lighten5: "#fff8e1",
  lighten4: "#ffecb3",
  lighten3: "#ffe082",
  lighten2: "#ffd54f",
  lighten1: "#ffca28",
  darken1: "#ffb300",
  darken2: "#ffa000",
  darken3: "#ff8f00",
  darken4: "#ff6f00",
  accent1: "#ffe57f",
  accent2: "#ffd740",
  accent3: "#ffc400",
  accent4: "#ffab00"
}, th = {
  base: "#ff9800",
  lighten5: "#fff3e0",
  lighten4: "#ffe0b2",
  lighten3: "#ffcc80",
  lighten2: "#ffb74d",
  lighten1: "#ffa726",
  darken1: "#fb8c00",
  darken2: "#f57c00",
  darken3: "#ef6c00",
  darken4: "#e65100",
  accent1: "#ffd180",
  accent2: "#ffab40",
  accent3: "#ff9100",
  accent4: "#ff6d00"
}, nh = {
  base: "#ff5722",
  lighten5: "#fbe9e7",
  lighten4: "#ffccbc",
  lighten3: "#ffab91",
  lighten2: "#ff8a65",
  lighten1: "#ff7043",
  darken1: "#f4511e",
  darken2: "#e64a19",
  darken3: "#d84315",
  darken4: "#bf360c",
  accent1: "#ff9e80",
  accent2: "#ff6e40",
  accent3: "#ff3d00",
  accent4: "#dd2c00"
}, ah = {
  base: "#795548",
  lighten5: "#efebe9",
  lighten4: "#d7ccc8",
  lighten3: "#bcaaa4",
  lighten2: "#a1887f",
  lighten1: "#8d6e63",
  darken1: "#6d4c41",
  darken2: "#5d4037",
  darken3: "#4e342e",
  darken4: "#3e2723"
}, lh = {
  base: "#607d8b",
  lighten5: "#eceff1",
  lighten4: "#cfd8dc",
  lighten3: "#b0bec5",
  lighten2: "#90a4ae",
  lighten1: "#78909c",
  darken1: "#546e7a",
  darken2: "#455a64",
  darken3: "#37474f",
  darken4: "#263238"
}, ih = {
  base: "#9e9e9e",
  lighten5: "#fafafa",
  lighten4: "#f5f5f5",
  lighten3: "#eeeeee",
  lighten2: "#e0e0e0",
  lighten1: "#bdbdbd",
  darken1: "#757575",
  darken2: "#616161",
  darken3: "#424242",
  darken4: "#212121"
}, oh = {
  black: "#000000",
  white: "#ffffff",
  transparent: "#ffffff00"
}, rh = {
  red: Hg,
  pink: zg,
  purple: Wg,
  deepPurple: jg,
  indigo: Ug,
  blue: Yg,
  lightBlue: Gg,
  cyan: Kg,
  teal: qg,
  green: Xg,
  lightGreen: Zg,
  lime: Qg,
  yellow: Jg,
  amber: eh,
  orange: th,
  deepOrange: nh,
  brown: ah,
  blueGrey: lh,
  grey: ih,
  shades: oh
}, uh = p({
  swatches: {
    type: Array,
    default: () => sh(rh)
  },
  disabled: Boolean,
  color: Object,
  maxHeight: [Number, String],
  ...le()
}, "VColorPickerSwatches");
function sh(e) {
  return Object.keys(e).map((n) => {
    const t = e[n];
    return t.base ? [t.base, t.darken4, t.darken3, t.darken2, t.darken1, t.lighten1, t.lighten2, t.lighten3, t.lighten4, t.lighten5] : [t.black, t.white, t.transparent];
  });
}
const ch = gt({
  name: "VColorPickerSwatches",
  props: uh(),
  emits: {
    "update:color": (e) => !0
  },
  setup(e, n) {
    let {
      emit: t
    } = n;
    return z(() => r("div", {
      class: ["v-color-picker-swatches", e.class],
      style: [{
        maxHeight: te(e.maxHeight)
      }, e.style]
    }, [r("div", null, [e.swatches.map((a) => r("div", {
      class: "v-color-picker-swatches__swatch"
    }, [a.map((l) => {
      const i = ft(l), o = ca(i), u = Ur(i);
      return r("div", {
        class: "v-color-picker-swatches__color",
        onClick: () => o && t("update:color", o)
      }, [r("div", {
        style: {
          background: u
        }
      }, [e.color && nt(e.color, o) ? r(Se, {
        size: "x-small",
        icon: "$success",
        color: Ed(l, "#FFFFFF") > 2 ? "white" : "black"
      }, null) : void 0])]);
    })]))])])), {};
  }
}), ka = p({
  color: String,
  ...st(),
  ...le(),
  ...Re(),
  ...je(),
  ...Rt(),
  ...Wn(),
  ...Ee(),
  ...ge(),
  ...ke()
}, "VSheet"), Lt = L()({
  name: "VSheet",
  props: ka(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    const {
      themeClasses: a
    } = Ve(e), {
      backgroundColorClasses: l,
      backgroundColorStyles: i
    } = Pe($(e, "color")), {
      borderClasses: o
    } = bt(e), {
      dimensionStyles: u
    } = He(e), {
      elevationClasses: s
    } = qe(e), {
      locationStyles: c
    } = wn(e), {
      positionClasses: v
    } = jn(e), {
      roundedClasses: f
    } = Oe(e);
    return z(() => r(e.tag, {
      class: ["v-sheet", a.value, l.value, o.value, s.value, v.value, f.value, e.class],
      style: [i.value, u.value, c.value, e.style]
    }, t)), {};
  }
}), dh = p({
  canvasHeight: {
    type: [String, Number],
    default: 150
  },
  disabled: Boolean,
  dotSize: {
    type: [Number, String],
    default: 10
  },
  hideCanvas: Boolean,
  hideSliders: Boolean,
  hideInputs: Boolean,
  mode: {
    type: String,
    default: "rgba",
    validator: (e) => Object.keys(un).includes(e)
  },
  modes: {
    type: Array,
    default: () => Object.keys(un),
    validator: (e) => Array.isArray(e) && e.every((n) => Object.keys(un).includes(n))
  },
  showSwatches: Boolean,
  swatches: Array,
  swatchesMaxHeight: {
    type: [Number, String],
    default: 150
  },
  modelValue: {
    type: [Object, String]
  },
  ...Ce(ka({
    width: 300
  }), ["height", "location", "minHeight", "maxHeight", "minWidth", "maxWidth"])
}, "VColorPicker"), Sk = gt({
  name: "VColorPicker",
  props: dh(),
  emits: {
    "update:modelValue": (e) => !0,
    "update:mode": (e) => !0
  },
  setup(e) {
    const n = oe(e, "mode"), t = U(null), a = oe(e, "modelValue", void 0, (s) => {
      if (s == null || s === "") return null;
      let c;
      try {
        c = ca(ft(s));
      } catch (v) {
        return wt(v), null;
      }
      return c;
    }, (s) => s ? Tg(s, e.modelValue) : null), l = b(() => a.value ? {
      ...a.value,
      h: t.value ?? a.value.h
    } : null), {
      rtlClasses: i
    } = We();
    let o = !0;
    J(a, (s) => {
      if (!o) {
        o = !0;
        return;
      }
      s && (t.value = s.h);
    }, {
      immediate: !0
    });
    const u = (s) => {
      o = !1, t.value = s.h, a.value = s;
    };
    return sa(() => {
      e.modes.includes(n.value) || (n.value = e.modes[0]);
    }), pe({
      VSlider: {
        color: void 0,
        trackColor: void 0,
        trackFillColor: void 0
      }
    }), z(() => {
      const s = Lt.filterProps(e);
      return r(Lt, O({
        rounded: e.rounded,
        elevation: e.elevation,
        theme: e.theme,
        class: ["v-color-picker", i.value, e.class],
        style: [{
          "--v-color-picker-color-hsv": Yr({
            ...l.value ?? Tn,
            a: 1
          })
        }, e.style]
      }, s, {
        maxWidth: e.width
      }), {
        default: () => [!e.hideCanvas && r(Ig, {
          key: "canvas",
          color: l.value,
          "onUpdate:color": u,
          disabled: e.disabled,
          dotSize: e.dotSize,
          width: e.width,
          height: e.canvasHeight
        }, null), (!e.hideSliders || !e.hideInputs) && r("div", {
          key: "controls",
          class: "v-color-picker__controls"
        }, [!e.hideSliders && r(Rg, {
          key: "preview",
          color: l.value,
          "onUpdate:color": u,
          hideAlpha: !n.value.endsWith("a"),
          disabled: e.disabled
        }, null), !e.hideInputs && r(Eg, {
          key: "edit",
          modes: e.modes,
          mode: n.value,
          "onUpdate:mode": (c) => n.value = c,
          color: l.value,
          "onUpdate:color": u,
          disabled: e.disabled
        }, null)]), e.showSwatches && r(ch, {
          key: "swatches",
          color: l.value,
          "onUpdate:color": u,
          maxHeight: e.swatchesMaxHeight,
          swatches: e.swatches,
          disabled: e.disabled
        }, null)]
      });
    }), {};
  }
});
function vh(e, n, t) {
  if (n == null) return e;
  if (Array.isArray(n)) throw new Error("Multiple matches is not implemented");
  return typeof n == "number" && ~n ? r(ie, null, [r("span", {
    class: "v-combobox__unmask"
  }, [e.substr(0, n)]), r("span", {
    class: "v-combobox__mask"
  }, [e.substr(n, t)]), r("span", {
    class: "v-combobox__unmask"
  }, [e.substr(n + t)])]) : e;
}
const fh = p({
  autoSelectFirst: {
    type: [Boolean, String]
  },
  clearOnSelect: {
    type: Boolean,
    default: !0
  },
  delimiters: Array,
  ...Kn({
    filterKeys: ["title"]
  }),
  ...Ti({
    hideNoData: !0,
    returnObject: !0
  }),
  ...Ce(Gn({
    modelValue: null,
    role: "combobox"
  }), ["validationValue", "dirty", "appendInnerIcon"]),
  ...Vt({
    transition: !1
  })
}, "VCombobox"), wk = L()({
  name: "VCombobox",
  props: fh(),
  emits: {
    "update:focused": (e) => !0,
    "update:modelValue": (e) => !0,
    "update:search": (e) => !0,
    "update:menu": (e) => !0
  },
  setup(e, n) {
    var se;
    let {
      emit: t,
      slots: a
    } = n;
    const {
      t: l
    } = Te(), i = U(), o = G(!1), u = G(!0), s = G(!1), c = U(), v = U(), f = oe(e, "menu"), d = b({
      get: () => f.value,
      set: (Y) => {
        var ae;
        f.value && !Y && ((ae = c.value) != null && ae.ΨopenChildren.size) || (f.value = Y);
      }
    }), g = G(-1);
    let y = !1;
    const h = b(() => {
      var Y;
      return (Y = i.value) == null ? void 0 : Y.color;
    }), m = b(() => d.value ? e.closeText : e.openText), {
      items: k,
      transformIn: S,
      transformOut: C
    } = wi(e), {
      textColorClasses: T,
      textColorStyles: I
    } = Ge(h), _ = oe(e, "modelValue", [], (Y) => S(Ae(Y)), (Y) => {
      const ae = C(Y);
      return e.multiple ? ae : ae[0] ?? null;
    }), D = ha(e), w = b(() => !!(e.chips || a.chip)), P = b(() => w.value || !!a.selection), A = G(!e.multiple && !P.value ? ((se = _.value[0]) == null ? void 0 : se.title) ?? "" : ""), V = b({
      get: () => A.value,
      set: (Y) => {
        var ae;
        if (A.value = Y ?? "", !e.multiple && !P.value && (_.value = [zt(e, Y)]), Y && e.multiple && ((ae = e.delimiters) != null && ae.length)) {
          const ve = Y.split(new RegExp(`(?:${e.delimiters.join("|")})+`));
          ve.length > 1 && (ve.forEach((ce) => {
            ce = ce.trim(), ce && ne(zt(e, ce));
          }), A.value = "");
        }
        Y || (g.value = -1), u.value = !Y;
      }
    }), x = b(() => typeof e.counterValue == "function" ? e.counterValue(_.value) : typeof e.counterValue == "number" ? e.counterValue : e.multiple ? _.value.length : V.value.length);
    J(A, (Y) => {
      y ? we(() => y = !1) : o.value && !d.value && (d.value = !0), t("update:search", Y);
    }), J(_, (Y) => {
      var ae;
      !e.multiple && !P.value && (A.value = ((ae = Y[0]) == null ? void 0 : ae.title) ?? "");
    });
    const {
      filteredItems: M,
      getMatches: E
    } = qn(e, k, () => u.value ? "" : V.value), N = b(() => e.hideSelected ? M.value.filter((Y) => !_.value.some((ae) => ae.value === Y.value)) : M.value), j = b(() => _.value.map((Y) => Y.value)), ee = b(() => {
      var ae;
      return (e.autoSelectFirst === !0 || e.autoSelectFirst === "exact" && V.value === ((ae = N.value[0]) == null ? void 0 : ae.title)) && N.value.length > 0 && !u.value && !s.value;
    }), W = b(() => e.hideNoData && !N.value.length || D.isReadonly.value || D.isDisabled.value), R = U(), F = _i(R, i);
    function B(Y) {
      y = !0, e.openOnClear && (d.value = !0);
    }
    function H() {
      W.value || (d.value = !0);
    }
    function Z(Y) {
      W.value || (o.value && (Y.preventDefault(), Y.stopPropagation()), d.value = !d.value);
    }
    function Q(Y) {
      var ae;
      Y.key !== " " && Bn(Y) && ((ae = i.value) == null || ae.focus());
    }
    function re(Y) {
      var ce;
      if (ad(Y) || D.isReadonly.value) return;
      const ae = i.value.selectionStart, ve = _.value.length;
      if (["Enter", "ArrowDown", "ArrowUp"].includes(Y.key) && Y.preventDefault(), ["Enter", "ArrowDown"].includes(Y.key) && (d.value = !0), ["Escape"].includes(Y.key) && (d.value = !1), ["Enter", "Escape", "Tab"].includes(Y.key) && (ee.value && ["Enter", "Tab"].includes(Y.key) && !_.value.some((me) => {
        let {
          value: Ie
        } = me;
        return Ie === N.value[0].value;
      }) && ne(M.value[0]), u.value = !0), Y.key === "ArrowDown" && ee.value && ((ce = R.value) == null || ce.focus("next")), Y.key === "Enter" && V.value && (ne(zt(e, V.value)), P.value && (A.value = "")), ["Backspace", "Delete"].includes(Y.key)) {
        if (!e.multiple && P.value && _.value.length > 0 && !V.value) return ne(_.value[0], !1);
        if (~g.value) {
          Y.preventDefault();
          const me = g.value;
          ne(_.value[g.value], !1), g.value = me >= ve - 1 ? ve - 2 : me;
        } else Y.key === "Backspace" && !V.value && (g.value = ve - 1);
        return;
      }
      if (e.multiple)
        if (Y.key === "ArrowLeft") {
          if (g.value < 0 && ae > 0) return;
          const me = g.value > -1 ? g.value - 1 : ve - 1;
          _.value[me] ? g.value = me : (g.value = -1, i.value.setSelectionRange(V.value.length, V.value.length));
        } else if (Y.key === "ArrowRight") {
          if (g.value < 0) return;
          const me = g.value + 1;
          _.value[me] ? g.value = me : (g.value = -1, i.value.setSelectionRange(0, 0));
        } else ~g.value && Bn(Y) && (g.value = -1);
    }
    function X() {
      var Y;
      e.eager && ((Y = v.value) == null || Y.calculateVisibleItems());
    }
    function K() {
      var Y;
      o.value && (u.value = !0, (Y = i.value) == null || Y.focus());
    }
    function ne(Y) {
      let ae = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
      if (!(!Y || Y.props.disabled))
        if (e.multiple) {
          const ve = _.value.findIndex((me) => (e.valueComparator || nt)(me.value, Y.value)), ce = ae ?? !~ve;
          if (~ve) {
            const me = ce ? [..._.value, Y] : [..._.value];
            me.splice(ve, 1), _.value = me;
          } else ce && (_.value = [..._.value, Y]);
          e.clearOnSelect && (V.value = "");
        } else {
          const ve = ae !== !1;
          _.value = ve ? [Y] : [], A.value = ve && !P.value ? Y.title : "", we(() => {
            d.value = !1, u.value = !0;
          });
        }
    }
    function ye(Y) {
      o.value = !0, setTimeout(() => {
        s.value = !0;
      });
    }
    function he(Y) {
      s.value = !1;
    }
    function q(Y) {
      (Y == null || Y === "" && !e.multiple && !P.value) && (_.value = []);
    }
    return J(o, (Y, ae) => {
      if (!(Y || Y === ae) && (g.value = -1, d.value = !1, V.value)) {
        if (e.multiple) {
          ne(zt(e, V.value));
          return;
        }
        if (!P.value) return;
        _.value.some((ve) => {
          let {
            title: ce
          } = ve;
          return ce === V.value;
        }) ? A.value = "" : ne(zt(e, V.value));
      }
    }), J(d, () => {
      if (!e.hideSelected && d.value && _.value.length) {
        const Y = N.value.findIndex((ae) => _.value.some((ve) => (e.valueComparator || nt)(ve.value, ae.value)));
        xe && window.requestAnimationFrame(() => {
          var ae;
          Y >= 0 && ((ae = v.value) == null || ae.scrollToIndex(Y));
        });
      }
    }), J(() => e.items, (Y, ae) => {
      d.value || o.value && !ae.length && Y.length && (d.value = !0);
    }), z(() => {
      const Y = !!(!e.hideNoData || N.value.length || a["prepend-item"] || a["append-item"] || a["no-data"]), ae = _.value.length > 0, ve = At.filterProps(e);
      return r(At, O({
        ref: i
      }, ve, {
        modelValue: V.value,
        "onUpdate:modelValue": [(ce) => V.value = ce, q],
        focused: o.value,
        "onUpdate:focused": (ce) => o.value = ce,
        validationValue: _.externalValue,
        counterValue: x.value,
        dirty: ae,
        class: ["v-combobox", {
          "v-combobox--active-menu": d.value,
          "v-combobox--chips": !!e.chips,
          "v-combobox--selection-slot": !!P.value,
          "v-combobox--selecting-index": g.value > -1,
          [`v-combobox--${e.multiple ? "multiple" : "single"}`]: !0
        }, e.class],
        style: e.style,
        readonly: D.isReadonly.value,
        placeholder: ae ? void 0 : e.placeholder,
        "onClick:clear": B,
        "onMousedown:control": H,
        onKeydown: re
      }), {
        ...a,
        default: () => r(ie, null, [r(Fn, O({
          ref: c,
          modelValue: d.value,
          "onUpdate:modelValue": (ce) => d.value = ce,
          activator: "parent",
          contentClass: "v-combobox__content",
          disabled: W.value,
          eager: e.eager,
          maxHeight: 310,
          openOnClick: !1,
          closeOnContentClick: !1,
          transition: e.transition,
          onAfterEnter: X,
          onAfterLeave: K
        }, e.menuProps), {
          default: () => [Y && r(ra, O({
            ref: R,
            selected: j.value,
            selectStrategy: e.multiple ? "independent" : "single-independent",
            onMousedown: (ce) => ce.preventDefault(),
            onKeydown: Q,
            onFocusin: ye,
            onFocusout: he,
            tabindex: "-1",
            "aria-live": "polite",
            color: e.itemColor ?? e.color
          }, F, e.listProps), {
            default: () => {
              var ce, me, Ie;
              return [(ce = a["prepend-item"]) == null ? void 0 : ce.call(a), !N.value.length && !e.hideNoData && (((me = a["no-data"]) == null ? void 0 : me.call(a)) ?? r(kt, {
                key: "no-data",
                title: l(e.noDataText)
              }, null)), r(Ii, {
                ref: v,
                renderless: !0,
                items: N.value
              }, {
                default: (rt) => {
                  var Qt;
                  let {
                    item: _e,
                    index: Et,
                    itemRef: Je
                  } = rt;
                  const Zt = O(_e.props, {
                    ref: Je,
                    key: _e.value,
                    active: ee.value && Et === 0 ? !0 : void 0,
                    onClick: () => ne(_e, null)
                  });
                  return ((Qt = a.item) == null ? void 0 : Qt.call(a, {
                    item: _e,
                    index: Et,
                    props: Zt
                  })) ?? r(kt, O(Zt, {
                    role: "option"
                  }), {
                    prepend: (Sa) => {
                      let {
                        isSelected: wa
                      } = Sa;
                      return r(ie, null, [e.multiple && !e.hideSelected ? r($t, {
                        key: _e.value,
                        modelValue: wa,
                        ripple: !1,
                        tabindex: "-1"
                      }, null) : void 0, _e.props.prependAvatar && r(ut, {
                        image: _e.props.prependAvatar
                      }, null), _e.props.prependIcon && r(Se, {
                        icon: _e.props.prependIcon
                      }, null)]);
                    },
                    title: () => {
                      var Sa, wa;
                      return u.value ? _e.title : vh(_e.title, (Sa = E(_e)) == null ? void 0 : Sa.title, ((wa = V.value) == null ? void 0 : wa.length) ?? 0);
                    }
                  });
                }
              }), (Ie = a["append-item"]) == null ? void 0 : Ie.call(a)];
            }
          })]
        }), _.value.map((ce, me) => {
          function Ie(Je) {
            Je.stopPropagation(), Je.preventDefault(), ne(ce, !1);
          }
          const rt = {
            "onClick:close": Ie,
            onKeydown(Je) {
              Je.key !== "Enter" && Je.key !== " " || (Je.preventDefault(), Je.stopPropagation(), Ie(Je));
            },
            onMousedown(Je) {
              Je.preventDefault(), Je.stopPropagation();
            },
            modelValue: !0,
            "onUpdate:modelValue": void 0
          }, _e = w.value ? !!a.chip : !!a.selection, Et = _e ? Ka(w.value ? a.chip({
            item: ce,
            index: me,
            props: rt
          }) : a.selection({
            item: ce,
            index: me
          })) : void 0;
          if (!(_e && !Et))
            return r("div", {
              key: ce.value,
              class: ["v-combobox__selection", me === g.value && ["v-combobox__selection--selected", T.value]],
              style: me === g.value ? I.value : {}
            }, [w.value ? a.chip ? r(de, {
              key: "chip-defaults",
              defaults: {
                VChip: {
                  closable: e.closableChips,
                  size: "small",
                  text: ce.title
                }
              }
            }, {
              default: () => [Et]
            }) : r(Yn, O({
              key: "chip",
              closable: e.closableChips,
              size: "small",
              text: ce.title,
              disabled: ce.props.disabled
            }, rt), null) : Et ?? r("span", {
              class: "v-combobox__selection-text"
            }, [ce.title, e.multiple && me < _.value.length - 1 && r("span", {
              class: "v-combobox__selection-comma"
            }, [_t(",")])])]);
        })]),
        "append-inner": function() {
          var rt;
          for (var ce = arguments.length, me = new Array(ce), Ie = 0; Ie < ce; Ie++)
            me[Ie] = arguments[Ie];
          return r(ie, null, [(rt = a["append-inner"]) == null ? void 0 : rt.call(a, ...me), (!e.hideNoData || e.items.length) && e.menuIcon ? r(Se, {
            class: "v-combobox__menu-icon",
            icon: e.menuIcon,
            onMousedown: Z,
            onClick: Lr,
            "aria-label": l(m.value),
            title: l(m.value),
            tabindex: "-1"
          }, null) : void 0]);
        }
      });
    }), ct({
      isFocused: o,
      isPristine: u,
      menu: d,
      search: V,
      selectionIndex: g,
      filteredItems: M,
      select: ne
    }, i);
  }
}), As = p({
  modelValue: null,
  color: String,
  cancelText: {
    type: String,
    default: "$vuetify.confirmEdit.cancel"
  },
  okText: {
    type: String,
    default: "$vuetify.confirmEdit.ok"
  }
}, "VConfirmEdit"), Go = L()({
  name: "VConfirmEdit",
  props: As(),
  emits: {
    cancel: () => !0,
    save: (e) => !0,
    "update:modelValue": (e) => !0
  },
  setup(e, n) {
    let {
      emit: t,
      slots: a
    } = n;
    const l = oe(e, "modelValue"), i = U();
    Fe(() => {
      i.value = structuredClone(Be(l.value));
    });
    const {
      t: o
    } = Te(), u = b(() => nt(l.value, i.value));
    function s() {
      l.value = i.value, t("save", i.value);
    }
    function c() {
      i.value = structuredClone(Be(l.value)), t("cancel");
    }
    function v(d) {
      return r(ie, null, [r(fe, O({
        disabled: u.value,
        variant: "text",
        color: e.color,
        onClick: c,
        text: o(e.cancelText)
      }, d), null), r(fe, O({
        disabled: u.value,
        variant: "text",
        color: e.color,
        onClick: s,
        text: o(e.okText)
      }, d), null)]);
    }
    let f = !1;
    return z(() => {
      var d;
      return r(ie, null, [(d = a.default) == null ? void 0 : d.call(a, {
        model: i,
        save: s,
        cancel: c,
        isPristine: u.value,
        get actions() {
          return f = !0, v;
        }
      }), !f && v()]);
    }), {
      save: s,
      cancel: c,
      isPristine: u
    };
  }
}), Ds = p({
  expandOnClick: Boolean,
  showExpand: Boolean,
  expanded: {
    type: Array,
    default: () => []
  }
}, "DataTable-expand"), Bs = Symbol.for("vuetify:datatable:expanded");
function rl(e) {
  const n = $(e, "expandOnClick"), t = oe(e, "expanded", e.expanded, (u) => new Set(u), (u) => [...u.values()]);
  function a(u, s) {
    const c = new Set(t.value);
    s ? c.add(u.value) : c.delete(u.value), t.value = c;
  }
  function l(u) {
    return t.value.has(u.value);
  }
  function i(u) {
    a(u, !l(u));
  }
  const o = {
    expand: a,
    expanded: t,
    expandOnClick: n,
    isExpanded: l,
    toggleExpand: i
  };
  return De(Bs, o), o;
}
function Ms() {
  const e = be(Bs);
  if (!e) throw new Error("foo");
  return e;
}
const Di = p({
  groupBy: {
    type: Array,
    default: () => []
  }
}, "DataTable-group"), ps = Symbol.for("vuetify:data-table-group");
function Bi(e) {
  return {
    groupBy: oe(e, "groupBy")
  };
}
function ul(e) {
  const {
    disableSort: n,
    groupBy: t,
    sortBy: a
  } = e, l = U(/* @__PURE__ */ new Set()), i = b(() => t.value.map((v) => ({
    ...v,
    order: v.order ?? !1
  })).concat(n != null && n.value ? [] : a.value));
  function o(v) {
    return l.value.has(v.id);
  }
  function u(v) {
    const f = new Set(l.value);
    o(v) ? f.delete(v.id) : f.add(v.id), l.value = f;
  }
  function s(v) {
    function f(d) {
      const g = [];
      for (const y of d.items)
        "type" in y && y.type === "group" ? g.push(...f(y)) : g.push(y);
      return [...new Set(g)];
    }
    return f({
      items: v
    });
  }
  const c = {
    sortByWithGroups: i,
    toggleGroup: u,
    opened: l,
    groupBy: t,
    extractRows: s,
    isGroupOpen: o
  };
  return De(ps, c), c;
}
function Es() {
  const e = be(ps);
  if (!e) throw new Error("Missing group!");
  return e;
}
function mh(e, n) {
  if (!e.length) return [];
  const t = /* @__PURE__ */ new Map();
  for (const a of e) {
    const l = cn(a.raw, n);
    t.has(l) || t.set(l, []), t.get(l).push(a);
  }
  return t;
}
function Fs(e, n) {
  let t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0, a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : "root";
  if (!n.length) return [];
  const l = mh(e, n[0]), i = [], o = n.slice(1);
  return l.forEach((u, s) => {
    const c = n[0], v = `${a}_${c}_${s}`;
    i.push({
      depth: t,
      id: v,
      key: c,
      value: s,
      items: o.length ? Fs(u, o, t + 1, v) : u,
      type: "group"
    });
  }), i;
}
function $s(e, n) {
  const t = [];
  for (const a of e)
    "type" in a && a.type === "group" ? (a.value != null && t.push(a), (n.has(a.id) || a.value == null) && t.push(...$s(a.items, n))) : t.push(a);
  return t;
}
function sl(e, n, t) {
  return {
    flatItems: b(() => {
      if (!n.value.length) return e.value;
      const l = Fs(e.value, n.value.map((i) => i.key));
      return $s(l, t.value);
    })
  };
}
function cl(e) {
  let {
    page: n,
    itemsPerPage: t,
    sortBy: a,
    groupBy: l,
    search: i
  } = e;
  const o = Le("VDataTable"), u = b(() => ({
    page: n.value,
    itemsPerPage: t.value,
    sortBy: a.value,
    groupBy: l.value,
    search: i.value
  }));
  let s = null;
  J(u, () => {
    nt(s, u.value) || (s && s.search !== u.value.search && (n.value = 1), o.emit("update:options", u.value), s = u.value);
  }, {
    deep: !0,
    immediate: !0
  });
}
const Mi = p({
  page: {
    type: [Number, String],
    default: 1
  },
  itemsPerPage: {
    type: [Number, String],
    default: 10
  }
}, "DataTable-paginate"), Ls = Symbol.for("vuetify:data-table-pagination");
function pi(e) {
  const n = oe(e, "page", void 0, (a) => Number(a ?? 1)), t = oe(e, "itemsPerPage", void 0, (a) => Number(a ?? 10));
  return {
    page: n,
    itemsPerPage: t
  };
}
function Ei(e) {
  const {
    page: n,
    itemsPerPage: t,
    itemsLength: a
  } = e, l = b(() => t.value === -1 ? 0 : t.value * (n.value - 1)), i = b(() => t.value === -1 ? a.value : Math.min(a.value, l.value + t.value)), o = b(() => t.value === -1 || a.value === 0 ? 1 : Math.ceil(a.value / t.value));
  J([n, o], () => {
    n.value > o.value && (n.value = o.value);
  });
  function u(d) {
    t.value = d, n.value = 1;
  }
  function s() {
    n.value = Me(n.value + 1, 1, o.value);
  }
  function c() {
    n.value = Me(n.value - 1, 1, o.value);
  }
  function v(d) {
    n.value = Me(d, 1, o.value);
  }
  const f = {
    page: n,
    itemsPerPage: t,
    startIndex: l,
    stopIndex: i,
    pageCount: o,
    itemsLength: a,
    nextPage: s,
    prevPage: c,
    setPage: v,
    setItemsPerPage: u
  };
  return De(Ls, f), f;
}
function gh() {
  const e = be(Ls);
  if (!e) throw new Error("Missing pagination!");
  return e;
}
function Os(e) {
  const n = Le("usePaginatedItems"), {
    items: t,
    startIndex: a,
    stopIndex: l,
    itemsPerPage: i
  } = e, o = b(() => i.value <= 0 ? t.value : t.value.slice(a.value, l.value));
  return J(o, (u) => {
    n.emit("update:currentItems", u);
  }, {
    immediate: !0
  }), {
    paginatedItems: o
  };
}
const hh = {
  showSelectAll: !1,
  allSelected: () => [],
  select: (e) => {
    var a;
    let {
      items: n,
      value: t
    } = e;
    return new Set(t ? [(a = n[0]) == null ? void 0 : a.value] : []);
  },
  selectAll: (e) => {
    let {
      selected: n
    } = e;
    return n;
  }
}, Ns = {
  showSelectAll: !0,
  allSelected: (e) => {
    let {
      currentPage: n
    } = e;
    return n;
  },
  select: (e) => {
    let {
      items: n,
      value: t,
      selected: a
    } = e;
    for (const l of n)
      t ? a.add(l.value) : a.delete(l.value);
    return a;
  },
  selectAll: (e) => {
    let {
      value: n,
      currentPage: t,
      selected: a
    } = e;
    return Ns.select({
      items: t,
      value: n,
      selected: a
    });
  }
}, Rs = {
  showSelectAll: !0,
  allSelected: (e) => {
    let {
      allItems: n
    } = e;
    return n;
  },
  select: (e) => {
    let {
      items: n,
      value: t,
      selected: a
    } = e;
    for (const l of n)
      t ? a.add(l.value) : a.delete(l.value);
    return a;
  },
  selectAll: (e) => {
    let {
      value: n,
      allItems: t,
      selected: a
    } = e;
    return Rs.select({
      items: t,
      value: n,
      selected: a
    });
  }
}, Hs = p({
  showSelect: Boolean,
  selectStrategy: {
    type: [String, Object],
    default: "page"
  },
  modelValue: {
    type: Array,
    default: () => []
  },
  valueComparator: {
    type: Function,
    default: nt
  }
}, "DataTable-select"), zs = Symbol.for("vuetify:data-table-selection");
function dl(e, n) {
  let {
    allItems: t,
    currentPage: a
  } = n;
  const l = oe(e, "modelValue", e.modelValue, (k) => new Set(Ae(k).map((S) => {
    var C;
    return ((C = t.value.find((T) => e.valueComparator(S, T.value))) == null ? void 0 : C.value) ?? S;
  })), (k) => [...k.values()]), i = b(() => t.value.filter((k) => k.selectable)), o = b(() => a.value.filter((k) => k.selectable)), u = b(() => {
    if (typeof e.selectStrategy == "object") return e.selectStrategy;
    switch (e.selectStrategy) {
      case "single":
        return hh;
      case "all":
        return Rs;
      case "page":
      default:
        return Ns;
    }
  });
  function s(k) {
    return Ae(k).every((S) => l.value.has(S.value));
  }
  function c(k) {
    return Ae(k).some((S) => l.value.has(S.value));
  }
  function v(k, S) {
    const C = u.value.select({
      items: k,
      value: S,
      selected: new Set(l.value)
    });
    l.value = C;
  }
  function f(k) {
    v([k], !s([k]));
  }
  function d(k) {
    const S = u.value.selectAll({
      value: k,
      allItems: i.value,
      currentPage: o.value,
      selected: new Set(l.value)
    });
    l.value = S;
  }
  const g = b(() => l.value.size > 0), y = b(() => {
    const k = u.value.allSelected({
      allItems: i.value,
      currentPage: o.value
    });
    return !!k.length && s(k);
  }), h = b(() => u.value.showSelectAll), m = {
    toggleSelect: f,
    select: v,
    selectAll: d,
    isSelected: s,
    isSomeSelected: c,
    someSelected: g,
    allSelected: y,
    showSelectAll: h
  };
  return De(zs, m), m;
}
function vl() {
  const e = be(zs);
  if (!e) throw new Error("Missing selection!");
  return e;
}
const Ws = p({
  sortBy: {
    type: Array,
    default: () => []
  },
  customKeySort: Object,
  multiSort: Boolean,
  mustSort: Boolean
}, "DataTable-sort"), js = Symbol.for("vuetify:data-table-sort");
function fl(e) {
  const n = oe(e, "sortBy"), t = $(e, "mustSort"), a = $(e, "multiSort");
  return {
    sortBy: n,
    mustSort: t,
    multiSort: a
  };
}
function ml(e) {
  const {
    sortBy: n,
    mustSort: t,
    multiSort: a,
    page: l
  } = e, i = (s) => {
    if (s.key == null) return;
    let c = n.value.map((f) => ({
      ...f
    })) ?? [];
    const v = c.find((f) => f.key === s.key);
    v ? v.order === "desc" ? t.value && c.length === 1 ? v.order = "asc" : c = c.filter((f) => f.key !== s.key) : v.order = "desc" : a.value ? c.push({
      key: s.key,
      order: "asc"
    }) : c = [{
      key: s.key,
      order: "asc"
    }], n.value = c, l && (l.value = 1);
  };
  function o(s) {
    return !!n.value.find((c) => c.key === s.key);
  }
  const u = {
    sortBy: n,
    toggleSort: i,
    isSorted: o
  };
  return De(js, u), u;
}
function Us() {
  const e = be(js);
  if (!e) throw new Error("Missing sort!");
  return e;
}
function Fi(e, n, t, a) {
  const l = Te();
  return {
    sortedItems: b(() => {
      var o, u;
      return t.value.length ? yh(n.value, t.value, l.current.value, {
        transform: a == null ? void 0 : a.transform,
        sortFunctions: {
          ...e.customKeySort,
          ...(o = a == null ? void 0 : a.sortFunctions) == null ? void 0 : o.value
        },
        sortRawFunctions: (u = a == null ? void 0 : a.sortRawFunctions) == null ? void 0 : u.value
      }) : n.value;
    })
  };
}
function yh(e, n, t, a) {
  const l = new Intl.Collator(t, {
    sensitivity: "accent",
    usage: "sort"
  });
  return e.map((o) => [o, a != null && a.transform ? a.transform(o) : o]).sort((o, u) => {
    var s, c;
    for (let v = 0; v < n.length; v++) {
      let f = !1;
      const d = n[v].key, g = n[v].order ?? "asc";
      if (g === !1) continue;
      let y = cn(o[1], d), h = cn(u[1], d), m = o[0].raw, k = u[0].raw;
      if (g === "desc" && ([y, h] = [h, y], [m, k] = [k, m]), (s = a == null ? void 0 : a.sortRawFunctions) != null && s[d]) {
        const S = a.sortRawFunctions[d](m, k);
        if (S == null) continue;
        if (f = !0, S) return S;
      }
      if ((c = a == null ? void 0 : a.sortFunctions) != null && c[d]) {
        const S = a.sortFunctions[d](y, h);
        if (S == null) continue;
        if (f = !0, S) return S;
      }
      if (!f) {
        if (y instanceof Date && h instanceof Date)
          return y.getTime() - h.getTime();
        if ([y, h] = [y, h].map((S) => S != null ? S.toString().toLocaleLowerCase() : S), y !== h)
          return Ca(y) && Ca(h) ? 0 : Ca(y) ? -1 : Ca(h) ? 1 : !isNaN(y) && !isNaN(h) ? Number(y) - Number(h) : l.compare(y, h);
      }
    }
    return 0;
  }).map((o) => {
    let [u] = o;
    return u;
  });
}
const bh = p({
  items: {
    type: Array,
    default: () => []
  },
  itemValue: {
    type: [String, Array, Function],
    default: "id"
  },
  itemSelectable: {
    type: [String, Array, Function],
    default: null
  },
  returnObject: Boolean
}, "DataIterator-items");
function kh(e, n) {
  const t = e.returnObject ? n : Ne(n, e.itemValue), a = Ne(n, e.itemSelectable, !0);
  return {
    type: "item",
    value: t,
    selectable: a,
    raw: n
  };
}
function Sh(e, n) {
  const t = [];
  for (const a of n)
    t.push(kh(e, a));
  return t;
}
function wh(e) {
  return {
    items: b(() => Sh(e, e.items))
  };
}
const xh = p({
  search: String,
  loading: Boolean,
  ...le(),
  ...bh(),
  ...Hs(),
  ...Ws(),
  ...Mi({
    itemsPerPage: 5
  }),
  ...Ds(),
  ...Di(),
  ...Kn(),
  ...ge(),
  ...Vt({
    transition: {
      component: $a,
      hideOnLeave: !0
    }
  })
}, "VDataIterator"), xk = L()({
  name: "VDataIterator",
  props: xh(),
  emits: {
    "update:modelValue": (e) => !0,
    "update:groupBy": (e) => !0,
    "update:page": (e) => !0,
    "update:itemsPerPage": (e) => !0,
    "update:sortBy": (e) => !0,
    "update:options": (e) => !0,
    "update:expanded": (e) => !0,
    "update:currentItems": (e) => !0
  },
  setup(e, n) {
    let {
      slots: t
    } = n;
    const a = oe(e, "groupBy"), l = $(e, "search"), {
      items: i
    } = wh(e), {
      filteredItems: o
    } = qn(e, i, l, {
      transform: (B) => B.raw
    }), {
      sortBy: u,
      multiSort: s,
      mustSort: c
    } = fl(e), {
      page: v,
      itemsPerPage: f
    } = pi(e), {
      toggleSort: d
    } = ml({
      sortBy: u,
      multiSort: s,
      mustSort: c,
      page: v
    }), {
      sortByWithGroups: g,
      opened: y,
      extractRows: h,
      isGroupOpen: m,
      toggleGroup: k
    } = ul({
      groupBy: a,
      sortBy: u
    }), {
      sortedItems: S
    } = Fi(e, o, g, {
      transform: (B) => B.raw
    }), {
      flatItems: C
    } = sl(S, a, y), T = b(() => C.value.length), {
      startIndex: I,
      stopIndex: _,
      pageCount: D,
      prevPage: w,
      nextPage: P,
      setItemsPerPage: A,
      setPage: V
    } = Ei({
      page: v,
      itemsPerPage: f,
      itemsLength: T
    }), {
      paginatedItems: x
    } = Os({
      items: C,
      startIndex: I,
      stopIndex: _,
      itemsPerPage: f
    }), M = b(() => h(x.value)), {
      isSelected: E,
      select: N,
      selectAll: j,
      toggleSelect: ee
    } = dl(e, {
      allItems: i,
      currentPage: M
    }), {
      isExpanded: W,
      toggleExpand: R
    } = rl(e);
    cl({
      page: v,
      itemsPerPage: f,
      sortBy: u,
      groupBy: a,
      search: l
    });
    const F = b(() => ({
      page: v.value,
      itemsPerPage: f.value,
      sortBy: u.value,
      pageCount: D.value,
      toggleSort: d,
      prevPage: w,
      nextPage: P,
      setPage: V,
      setItemsPerPage: A,
      isSelected: E,
      select: N,
      selectAll: j,
      toggleSelect: ee,
      isExpanded: W,
      toggleExpand: R,
      isGroupOpen: m,
      toggleGroup: k,
      items: M.value,
      groupedItems: x.value
    }));
    return z(() => r(e.tag, {
      class: ["v-data-iterator", {
        "v-data-iterator--loading": e.loading
      }, e.class],
      style: e.style
    }, {
      default: () => {
        var B, H;
        return [(B = t.header) == null ? void 0 : B.call(t, F.value), r(tt, {
          transition: e.transition
        }, {
          default: () => {
            var Z, Q;
            return [e.loading ? r(va, {
              key: "loader",
              name: "v-data-iterator",
              active: !0
            }, {
              default: (re) => {
                var X;
                return (X = t.loader) == null ? void 0 : X.call(t, re);
              }
            }) : r("div", {
              key: "items"
            }, [x.value.length ? (Q = t.default) == null ? void 0 : Q.call(t, F.value) : (Z = t["no-data"]) == null ? void 0 : Z.call(t)])];
          }
        }), (H = t.footer) == null ? void 0 : H.call(t, F.value)];
      }
    })), {};
  }
});
function Ch() {
  const e = U([]);
  qc(() => e.value = []);
  function n(t, a) {
    e.value[a] = t;
  }
  return {
    refs: e,
    updateRef: n
  };
}
const Vh = p({
  activeColor: String,
  start: {
    type: [Number, String],
    default: 1
  },
  modelValue: {
    type: Number,
    default: (e) => e.start
  },
  disabled: Boolean,
  length: {
    type: [Number, String],
    default: 1,
    validator: (e) => e % 1 === 0
  },
  totalVisible: [Number, String],
  firstIcon: {
    type: ue,
    default: "$first"
  },
  prevIcon: {
    type: ue,
    default: "$prev"
  },
  nextIcon: {
    type: ue,
    default: "$next"
  },
  lastIcon: {
    type: ue,
    default: "$last"
  },
  ariaLabel: {
    type: String,
    default: "$vuetify.pagination.ariaLabel.root"
  },
  pageAriaLabel: {
    type: String,
    default: "$vuetify.pagination.ariaLabel.page"
  },
  currentPageAriaLabel: {
    type: String,
    default: "$vuetify.pagination.ariaLabel.currentPage"
  },
  firstAriaLabel: {
    type: String,
    default: "$vuetify.pagination.ariaLabel.first"
  },
  previousAriaLabel: {
    type: String,
    default: "$vuetify.pagination.ariaLabel.previous"
  },
  nextAriaLabel: {
    type: String,
    default: "$vuetify.pagination.ariaLabel.next"
  },
  lastAriaLabel: {
    type: String,
    default: "$vuetify.pagination.ariaLabel.last"
  },
  ellipsis: {
    type: String,
    default: "..."
  },
  showFirstLastPage: Boolean,
  ...st(),
  ...le(),
  ...ze(),
  ...je(),
  ...Ee(),
  ...pt(),
  ...ge({
    tag: "nav"
  }),
  ...ke(),
  ...St({
    variant: "text"
  })
}, "VPagination"), Ko = L()({
  name: "VPagination",
  props: Vh(),
  emits: {
    "update:modelValue": (e) => !0,
    first: (e) => !0,
    prev: (e) => !0,
    next: (e) => !0,
    last: (e) => !0
  },
  setup(e, n) {
    let {
      slots: t,
      emit: a
    } = n;
    const l = oe(e, "modelValue"), {
      t: i,
      n: o
    } = Te(), {
      isRtl: u
    } = We(), {
      themeClasses: s
    } = Ve(e), {
      width: c
    } = ht(), v = G(-1);
    pe(void 0, {
      scoped: !0
    });
    const {
      resizeRef: f
    } = xt((w) => {
      if (!w.length) return;
      const {
        target: P,
        contentRect: A
      } = w[0], V = P.querySelector(".v-pagination__list > *");
      if (!V) return;
      const x = A.width, M = V.offsetWidth + parseFloat(getComputedStyle(V).marginRight) * 2;
      v.value = h(x, M);
    }), d = b(() => parseInt(e.length, 10)), g = b(() => parseInt(e.start, 10)), y = b(() => e.totalVisible != null ? parseInt(e.totalVisible, 10) : v.value >= 0 ? v.value : h(c.value, 58));
    function h(w, P) {
      const A = e.showFirstLastPage ? 5 : 3;
      return Math.max(0, Math.floor(
        // Round to two decimal places to avoid floating point errors
        Number(((w - P * A) / P).toFixed(2))
      ));
    }
    const m = b(() => {
      if (d.value <= 0 || isNaN(d.value) || d.value > Number.MAX_SAFE_INTEGER) return [];
      if (y.value <= 0) return [];
      if (y.value === 1) return [l.value];
      if (d.value <= y.value)
        return vt(d.value, g.value);
      const w = y.value % 2 === 0, P = w ? y.value / 2 : Math.floor(y.value / 2), A = w ? P : P + 1, V = d.value - P;
      if (A - l.value >= 0)
        return [...vt(Math.max(1, y.value - 1), g.value), e.ellipsis, d.value];
      if (l.value - V >= (w ? 1 : 0)) {
        const x = y.value - 1, M = d.value - x + g.value;
        return [g.value, e.ellipsis, ...vt(x, M)];
      } else {
        const x = Math.max(1, y.value - 2), M = x === 1 ? l.value : l.value - Math.ceil(x / 2) + g.value;
        return [g.value, e.ellipsis, ...vt(x, M), e.ellipsis, d.value];
      }
    });
    function k(w, P, A) {
      w.preventDefault(), l.value = P, A && a(A, P);
    }
    const {
      refs: S,
      updateRef: C
    } = Ch();
    pe({
      VPaginationBtn: {
        color: $(e, "color"),
        border: $(e, "border"),
        density: $(e, "density"),
        size: $(e, "size"),
        variant: $(e, "variant"),
        rounded: $(e, "rounded"),
        elevation: $(e, "elevation")
      }
    });
    const T = b(() => m.value.map((w, P) => {
      const A = (V) => C(V, P);
      if (typeof w == "string")
        return {
          isActive: !1,
          key: `ellipsis-${P}`,
          page: w,
          props: {
            ref: A,
            ellipsis: !0,
            icon: !0,
            disabled: !0
          }
        };
      {
        const V = w === l.value;
        return {
          isActive: V,
          key: w,
          page: o(w),
          props: {
            ref: A,
            ellipsis: !1,
            icon: !0,
            disabled: !!e.disabled || Number(e.length) < 2,
            color: V ? e.activeColor : e.color,
            "aria-current": V,
            "aria-label": i(V ? e.currentPageAriaLabel : e.pageAriaLabel, w),
            onClick: (x) => k(x, w)
          }
        };
      }
    })), I = b(() => {
      const w = !!e.disabled || l.value <= g.value, P = !!e.disabled || l.value >= g.value + d.value - 1;
      return {
        first: e.showFirstLastPage ? {
          icon: u.value ? e.lastIcon : e.firstIcon,
          onClick: (A) => k(A, g.value, "first"),
          disabled: w,
          "aria-label": i(e.firstAriaLabel),
          "aria-disabled": w
        } : void 0,
        prev: {
          icon: u.value ? e.nextIcon : e.prevIcon,
          onClick: (A) => k(A, l.value - 1, "prev"),
          disabled: w,
          "aria-label": i(e.previousAriaLabel),
          "aria-disabled": w
        },
        next: {
          icon: u.value ? e.prevIcon : e.nextIcon,
          onClick: (A) => k(A, l.value + 1, "next"),
          disabled: P,
          "aria-label": i(e.nextAriaLabel),
          "aria-disabled": P
        },
        last: e.showFirstLastPage ? {
          icon: u.value ? e.firstIcon : e.lastIcon,
          onClick: (A) => k(A, g.value + d.value - 1, "last"),
          disabled: P,
          "aria-label": i(e.lastAriaLabel),
          "aria-disabled": P
        } : void 0
      };
    });
    function _() {
      var P;
      const w = l.value - g.value;
      (P = S.value[w]) == null || P.$el.focus();
    }
    function D(w) {
      w.key === Tl.left && !e.disabled && l.value > Number(e.start) ? (l.value = l.value - 1, we(_)) : w.key === Tl.right && !e.disabled && l.value < g.value + d.value - 1 && (l.value = l.value + 1, we(_));
    }
    return z(() => r(e.tag, {
      ref: f,
      class: ["v-pagination", s.value, e.class],
      style: e.style,
      role: "navigation",
      "aria-label": i(e.ariaLabel),
      onKeydown: D,
      "data-test": "v-pagination-root"
    }, {
      default: () => [r("ul", {
        class: "v-pagination__list"
      }, [e.showFirstLastPage && r("li", {
        key: "first",
        class: "v-pagination__first",
        "data-test": "v-pagination-first"
      }, [t.first ? t.first(I.value.first) : r(fe, O({
        _as: "VPaginationBtn"
      }, I.value.first), null)]), r("li", {
        key: "prev",
        class: "v-pagination__prev",
        "data-test": "v-pagination-prev"
      }, [t.prev ? t.prev(I.value.prev) : r(fe, O({
        _as: "VPaginationBtn"
      }, I.value.prev), null)]), T.value.map((w, P) => r("li", {
        key: w.key,
        class: ["v-pagination__item", {
          "v-pagination__item--is-active": w.isActive
        }],
        "data-test": "v-pagination-item"
      }, [t.item ? t.item(w) : r(fe, O({
        _as: "VPaginationBtn"
      }, w.props), {
        default: () => [w.page]
      })])), r("li", {
        key: "next",
        class: "v-pagination__next",
        "data-test": "v-pagination-next"
      }, [t.next ? t.next(I.value.next) : r(fe, O({
        _as: "VPaginationBtn"
      }, I.value.next), null)]), e.showFirstLastPage && r("li", {
        key: "last",
        class: "v-pagination__last",
        "data-test": "v-pagination-last"
      }, [t.last ? t.last(I.value.last) : r(fe, O({
        _as: "VPaginationBtn"
      }, I.value.last), null)])])]
    })), {};
  }
}), $i = p({
  prevIcon: {
    type: ue,
    default: "$prev"
  },
  nextIcon: {
    type: ue,
    default: "$next"
  },
  firstIcon: {
    type: ue,
    default: "$first"
  },
  lastIcon: {
    type: ue,
    default: "$last"
  },
  itemsPerPageText: {
    type: String,
    default: "$vuetify.dataFooter.itemsPerPageText"
  },
  pageText: {
    type: String,
    default: "$vuetify.dataFooter.pageText"
  },
  firstPageLabel: {
    type: String,
    default: "$vuetify.dataFooter.firstPage"
  },
  prevPageLabel: {
    type: String,
    default: "$vuetify.dataFooter.prevPage"
  },
  nextPageLabel: {
    type: String,
    default: "$vuetify.dataFooter.nextPage"
  },
  lastPageLabel: {
    type: String,
    default: "$vuetify.dataFooter.lastPage"
  },
  itemsPerPageOptions: {
    type: Array,
    default: () => [{
      value: 10,
      title: "10"
    }, {
      value: 25,
      title: "25"
    }, {
      value: 50,
      title: "50"
    }, {
      value: 100,
      title: "100"
    }, {
      value: -1,
      title: "$vuetify.dataFooter.itemsPerPageAll"
    }]
  },
  showCurrentPage: Boolean
}, "VDataTableFooter"), Ha = L()({
  name: "VDataTableFooter",
  props: $i(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    const {
      t: a
    } = Te(), {
      page: l,
      pageCount: i,
      startIndex: o,
      stopIndex: u,
      itemsLength: s,
      itemsPerPage: c,
      setItemsPerPage: v
    } = gh(), f = b(() => e.itemsPerPageOptions.map((d) => typeof d == "number" ? {
      value: d,
      title: d === -1 ? a("$vuetify.dataFooter.itemsPerPageAll") : String(d)
    } : {
      ...d,
      title: isNaN(Number(d.title)) ? a(d.title) : d.title
    }));
    return z(() => {
      var g;
      const d = Ko.filterProps(e);
      return r("div", {
        class: "v-data-table-footer"
      }, [(g = t.prepend) == null ? void 0 : g.call(t), r("div", {
        class: "v-data-table-footer__items-per-page"
      }, [r("span", null, [a(e.itemsPerPageText)]), r(ks, {
        items: f.value,
        modelValue: c.value,
        "onUpdate:modelValue": (y) => v(Number(y)),
        density: "compact",
        variant: "outlined",
        "hide-details": !0
      }, null)]), r("div", {
        class: "v-data-table-footer__info"
      }, [r("div", null, [a(e.pageText, s.value ? o.value + 1 : 0, u.value, s.value)])]), r("div", {
        class: "v-data-table-footer__pagination"
      }, [r(Ko, O({
        modelValue: l.value,
        "onUpdate:modelValue": (y) => l.value = y,
        density: "comfortable",
        "first-aria-label": e.firstPageLabel,
        "last-aria-label": e.lastPageLabel,
        length: i.value,
        "next-aria-label": e.nextPageLabel,
        "previous-aria-label": e.prevPageLabel,
        rounded: !0,
        "show-first-last-page": !0,
        "total-visible": e.showCurrentPage ? 1 : 0,
        variant: "plain"
      }, d), null)])]);
    }), {};
  }
}), za = Od({
  align: {
    type: String,
    default: "start"
  },
  fixed: Boolean,
  fixedOffset: [Number, String],
  height: [Number, String],
  lastFixed: Boolean,
  noPadding: Boolean,
  tag: String,
  width: [Number, String],
  maxWidth: [Number, String],
  nowrap: Boolean
}, (e, n) => {
  let {
    slots: t
  } = n;
  const a = e.tag ?? "td";
  return r(a, {
    class: ["v-data-table__td", {
      "v-data-table-column--fixed": e.fixed,
      "v-data-table-column--last-fixed": e.lastFixed,
      "v-data-table-column--no-padding": e.noPadding,
      "v-data-table-column--nowrap": e.nowrap
    }, `v-data-table-column--align-${e.align}`],
    style: {
      height: te(e.height),
      width: te(e.width),
      maxWidth: te(e.maxWidth),
      left: te(e.fixedOffset || null)
    }
  }, {
    default: () => {
      var l;
      return [(l = t.default) == null ? void 0 : l.call(t)];
    }
  });
}), Ph = p({
  headers: Array
}, "DataTable-header"), Ys = Symbol.for("vuetify:data-table-headers"), Gs = {
  title: "",
  sortable: !1
}, Ih = {
  ...Gs,
  width: 48
};
function _h() {
  const n = (arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : []).map((t) => ({
    element: t,
    priority: 0
  }));
  return {
    enqueue: (t, a) => {
      let l = !1;
      for (let i = 0; i < n.length; i++)
        if (n[i].priority > a) {
          n.splice(i, 0, {
            element: t,
            priority: a
          }), l = !0;
          break;
        }
      l || n.push({
        element: t,
        priority: a
      });
    },
    size: () => n.length,
    count: () => {
      let t = 0;
      if (!n.length) return 0;
      const a = Math.floor(n[0].priority);
      for (let l = 0; l < n.length; l++)
        Math.floor(n[l].priority) === a && (t += 1);
      return t;
    },
    dequeue: () => n.shift()
  };
}
function Kl(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
  if (!e.children)
    n.push(e);
  else
    for (const t of e.children)
      Kl(t, n);
  return n;
}
function Ks(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : /* @__PURE__ */ new Set();
  for (const t of e)
    t.key && n.add(t.key), t.children && Ks(t.children, n);
  return n;
}
function Th(e) {
  if (e.key) {
    if (e.key === "data-table-group") return Gs;
    if (["data-table-expand", "data-table-select"].includes(e.key)) return Ih;
  }
}
function Li(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
  return e.children ? Math.max(n, ...e.children.map((t) => Li(t, n + 1))) : n;
}
function Ah(e) {
  let n = !1;
  function t(i) {
    let o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
    if (i)
      if (o && (i.fixed = !0), i.fixed)
        if (i.children)
          for (let u = i.children.length - 1; u >= 0; u--)
            t(i.children[u], !0);
        else
          n ? isNaN(Number(i.width)) ? Mn(`Multiple fixed columns should have a static width (key: ${i.key})`) : i.minWidth = Math.max(Number(i.width) || 0, Number(i.minWidth) || 0) : i.lastFixed = !0, n = !0;
      else if (i.children)
        for (let u = i.children.length - 1; u >= 0; u--)
          t(i.children[u]);
      else
        n = !1;
  }
  for (let i = e.length - 1; i >= 0; i--)
    t(e[i]);
  function a(i) {
    let o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
    if (!i) return o;
    if (i.children) {
      i.fixedOffset = o;
      for (const u of i.children)
        o = a(u, o);
    } else i.fixed && (i.fixedOffset = o, o += parseFloat(i.width || "0") || 0);
    return o;
  }
  let l = 0;
  for (const i of e)
    l = a(i, l);
}
function Dh(e, n) {
  const t = [];
  let a = 0;
  const l = _h(e);
  for (; l.size() > 0; ) {
    let o = l.count();
    const u = [];
    let s = 1;
    for (; o > 0; ) {
      const {
        element: c,
        priority: v
      } = l.dequeue(), f = n - a - Li(c);
      if (u.push({
        ...c,
        rowspan: f ?? 1,
        colspan: c.children ? Kl(c).length : 1
      }), c.children)
        for (const d of c.children) {
          const g = v % 1 + s / Math.pow(10, a + 2);
          l.enqueue(d, a + f + g);
        }
      s += 1, o -= 1;
    }
    a += 1, t.push(u);
  }
  return {
    columns: e.map((o) => Kl(o)).flat(),
    headers: t
  };
}
function qs(e) {
  const n = [];
  for (const t of e) {
    const a = {
      ...Th(t),
      ...t
    }, l = a.key ?? (typeof a.value == "string" ? a.value : null), i = a.value ?? l ?? null, o = {
      ...a,
      key: l,
      value: i,
      sortable: a.sortable ?? (a.key != null || !!a.sort),
      children: a.children ? qs(a.children) : void 0
    };
    n.push(o);
  }
  return n;
}
function Oi(e, n) {
  const t = U([]), a = U([]), l = U({}), i = U({}), o = U({});
  Fe(() => {
    var h, m, k;
    const c = (e.headers || Object.keys(e.items[0] ?? {}).map((S) => ({
      key: S,
      title: Hn(S)
    }))).slice(), v = Ks(c);
    (h = n == null ? void 0 : n.groupBy) != null && h.value.length && !v.has("data-table-group") && c.unshift({
      key: "data-table-group",
      title: "Group"
    }), (m = n == null ? void 0 : n.showSelect) != null && m.value && !v.has("data-table-select") && c.unshift({
      key: "data-table-select"
    }), (k = n == null ? void 0 : n.showExpand) != null && k.value && !v.has("data-table-expand") && c.push({
      key: "data-table-expand"
    });
    const f = qs(c);
    Ah(f);
    const d = Math.max(...f.map((S) => Li(S))) + 1, g = Dh(f, d);
    t.value = g.headers, a.value = g.columns;
    const y = g.headers.flat(1);
    for (const S of y)
      S.key && (S.sortable && (S.sort && (l.value[S.key] = S.sort), S.sortRaw && (i.value[S.key] = S.sortRaw)), S.filter && (o.value[S.key] = S.filter));
  });
  const u = {
    headers: t,
    columns: a,
    sortFunctions: l,
    sortRawFunctions: i,
    filterFunctions: o
  };
  return De(Ys, u), u;
}
function gl() {
  const e = be(Ys);
  if (!e) throw new Error("Missing headers!");
  return e;
}
const Xs = p({
  color: String,
  disableSort: Boolean,
  fixedHeader: Boolean,
  multiSort: Boolean,
  sortAscIcon: {
    type: ue,
    default: "$sortAsc"
  },
  sortDescIcon: {
    type: ue,
    default: "$sortDesc"
  },
  headerProps: {
    type: Object
  },
  /** @deprecated */
  sticky: Boolean,
  ...Gt(),
  ...tl()
}, "VDataTableHeaders"), On = L()({
  name: "VDataTableHeaders",
  props: Xs(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    const {
      t: a
    } = Te(), {
      toggleSort: l,
      sortBy: i,
      isSorted: o
    } = Us(), {
      someSelected: u,
      allSelected: s,
      selectAll: c,
      showSelectAll: v
    } = vl(), {
      columns: f,
      headers: d
    } = gl(), {
      loaderClasses: g
    } = da(e);
    function y(w, P) {
      if (!(!(e.sticky || e.fixedHeader) && !w.fixed))
        return {
          position: "sticky",
          left: w.fixed ? te(w.fixedOffset) : void 0,
          top: e.sticky || e.fixedHeader ? `calc(var(--v-table-header-height) * ${P})` : void 0
        };
    }
    function h(w) {
      const P = i.value.find((A) => A.key === w.key);
      return P ? P.order === "asc" ? e.sortAscIcon : e.sortDescIcon : e.sortAscIcon;
    }
    const {
      backgroundColorClasses: m,
      backgroundColorStyles: k
    } = Pe(e, "color"), {
      displayClasses: S,
      mobile: C
    } = ht(e), T = b(() => ({
      headers: d.value,
      columns: f.value,
      toggleSort: l,
      isSorted: o,
      sortBy: i.value,
      someSelected: u.value,
      allSelected: s.value,
      selectAll: c,
      getSortIcon: h
    })), I = b(() => ["v-data-table__th", {
      "v-data-table__th--sticky": e.sticky || e.fixedHeader
    }, S.value, g.value]), _ = (w) => {
      let {
        column: P,
        x: A,
        y: V
      } = w;
      const x = P.key === "data-table-select" || P.key === "data-table-expand", M = O(e.headerProps ?? {}, P.headerProps ?? {});
      return r(za, O({
        tag: "th",
        align: P.align,
        class: [{
          "v-data-table__th--sortable": P.sortable && !e.disableSort,
          "v-data-table__th--sorted": o(P),
          "v-data-table__th--fixed": P.fixed
        }, ...I.value],
        style: {
          width: te(P.width),
          minWidth: te(P.minWidth),
          maxWidth: te(P.maxWidth),
          ...y(P, V)
        },
        colspan: P.colspan,
        rowspan: P.rowspan,
        onClick: P.sortable ? () => l(P) : void 0,
        fixed: P.fixed,
        nowrap: P.nowrap,
        lastFixed: P.lastFixed,
        noPadding: x
      }, M), {
        default: () => {
          var j;
          const E = `header.${P.key}`, N = {
            column: P,
            selectAll: c,
            isSorted: o,
            toggleSort: l,
            sortBy: i.value,
            someSelected: u.value,
            allSelected: s.value,
            getSortIcon: h
          };
          return t[E] ? t[E](N) : P.key === "data-table-select" ? ((j = t["header.data-table-select"]) == null ? void 0 : j.call(t, N)) ?? (v.value && r($t, {
            modelValue: s.value,
            indeterminate: u.value && !s.value,
            "onUpdate:modelValue": c
          }, null)) : r("div", {
            class: "v-data-table-header__content"
          }, [r("span", null, [P.title]), P.sortable && !e.disableSort && r(Se, {
            key: "icon",
            class: "v-data-table-header__sort-icon",
            icon: h(P)
          }, null), e.multiSort && o(P) && r("div", {
            key: "badge",
            class: ["v-data-table-header__sort-badge", ...m.value],
            style: k.value
          }, [i.value.findIndex((ee) => ee.key === P.key) + 1])]);
        }
      });
    }, D = () => {
      const w = O(e.headerProps ?? {} ?? {}), P = b(() => f.value.filter((V) => (V == null ? void 0 : V.sortable) && !e.disableSort)), A = b(() => {
        if (f.value.find((x) => x.key === "data-table-select") != null)
          return s.value ? "$checkboxOn" : u.value ? "$checkboxIndeterminate" : "$checkboxOff";
      });
      return r(za, O({
        tag: "th",
        class: [...I.value],
        colspan: d.value.length + 1
      }, w), {
        default: () => [r("div", {
          class: "v-data-table-header__content"
        }, [r(ks, {
          chips: !0,
          class: "v-data-table__td-sort-select",
          clearable: !0,
          density: "default",
          items: P.value,
          label: a("$vuetify.dataTable.sortBy"),
          multiple: e.multiSort,
          variant: "underlined",
          "onClick:clear": () => i.value = [],
          appendIcon: A.value,
          "onClick:append": () => c(!s.value)
        }, {
          ...t,
          chip: (V) => {
            var x;
            return r(Yn, {
              onClick: (x = V.item.raw) != null && x.sortable ? () => l(V.item.raw) : void 0,
              onMousedown: (M) => {
                M.preventDefault(), M.stopPropagation();
              }
            }, {
              default: () => [V.item.title, r(Se, {
                class: ["v-data-table__td-sort-icon", o(V.item.raw) && "v-data-table__td-sort-icon-active"],
                icon: h(V.item.raw),
                size: "small"
              }, null)]
            });
          }
        })])]
      });
    };
    z(() => C.value ? r("tr", null, [r(D, null, null)]) : r(ie, null, [t.headers ? t.headers(T.value) : d.value.map((w, P) => r("tr", null, [w.map((A, V) => r(_, {
      column: A,
      x: V,
      y: P
    }, null))])), e.loading && r("tr", {
      class: "v-data-table-progress"
    }, [r("th", {
      colspan: f.value.length
    }, [r(va, {
      name: "v-data-table-progress",
      absolute: !0,
      active: !0,
      color: typeof e.loading == "boolean" ? void 0 : e.loading,
      indeterminate: !0
    }, {
      default: t.loader
    })])])]));
  }
}), Bh = p({
  item: {
    type: Object,
    required: !0
  }
}, "VDataTableGroupHeaderRow"), Mh = L()({
  name: "VDataTableGroupHeaderRow",
  props: Bh(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    const {
      isGroupOpen: a,
      toggleGroup: l,
      extractRows: i
    } = Es(), {
      isSelected: o,
      isSomeSelected: u,
      select: s
    } = vl(), {
      columns: c
    } = gl(), v = b(() => i([e.item]));
    return () => r("tr", {
      class: "v-data-table-group-header-row",
      style: {
        "--v-data-table-group-header-row-depth": e.item.depth
      }
    }, [c.value.map((f) => {
      var d, g;
      if (f.key === "data-table-group") {
        const y = a(e.item) ? "$expand" : "$next", h = () => l(e.item);
        return ((d = t["data-table-group"]) == null ? void 0 : d.call(t, {
          item: e.item,
          count: v.value.length,
          props: {
            icon: y,
            onClick: h
          }
        })) ?? r(za, {
          class: "v-data-table-group-header-row__column"
        }, {
          default: () => [r(fe, {
            size: "small",
            variant: "text",
            icon: y,
            onClick: h
          }, null), r("span", null, [e.item.value]), r("span", null, [_t("("), v.value.length, _t(")")])]
        });
      }
      if (f.key === "data-table-select") {
        const y = o(v.value), h = u(v.value) && !y, m = (k) => s(v.value, k);
        return ((g = t["data-table-select"]) == null ? void 0 : g.call(t, {
          props: {
            modelValue: y,
            indeterminate: h,
            "onUpdate:modelValue": m
          }
        })) ?? r("td", null, [r($t, {
          modelValue: y,
          indeterminate: h,
          "onUpdate:modelValue": m
        }, null)]);
      }
      return r("td", null, null);
    })]);
  }
}), ph = p({
  index: Number,
  item: Object,
  cellProps: [Object, Function],
  onClick: Ye(),
  onContextmenu: Ye(),
  onDblclick: Ye(),
  ...Gt()
}, "VDataTableRow"), Zs = L()({
  name: "VDataTableRow",
  props: ph(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    const {
      displayClasses: a,
      mobile: l
    } = ht(e, "v-data-table__tr"), {
      isSelected: i,
      toggleSelect: o,
      someSelected: u,
      allSelected: s,
      selectAll: c
    } = vl(), {
      isExpanded: v,
      toggleExpand: f
    } = Ms(), {
      toggleSort: d,
      sortBy: g,
      isSorted: y
    } = Us(), {
      columns: h
    } = gl();
    z(() => r("tr", {
      class: ["v-data-table__tr", {
        "v-data-table__tr--clickable": !!(e.onClick || e.onContextmenu || e.onDblclick)
      }, a.value],
      onClick: e.onClick,
      onContextmenu: e.onContextmenu,
      onDblclick: e.onDblclick
    }, [e.item && h.value.map((m, k) => {
      const S = e.item, C = `item.${m.key}`, T = `header.${m.key}`, I = {
        index: e.index,
        item: S.raw,
        internalItem: S,
        value: cn(S.columns, m.key),
        column: m,
        isSelected: i,
        toggleSelect: o,
        isExpanded: v,
        toggleExpand: f
      }, _ = {
        column: m,
        selectAll: c,
        isSorted: y,
        toggleSort: d,
        sortBy: g.value,
        someSelected: u.value,
        allSelected: s.value,
        getSortIcon: () => ""
      }, D = typeof e.cellProps == "function" ? e.cellProps({
        index: I.index,
        item: I.item,
        internalItem: I.internalItem,
        value: I.value,
        column: m
      }) : e.cellProps, w = typeof m.cellProps == "function" ? m.cellProps({
        index: I.index,
        item: I.item,
        internalItem: I.internalItem,
        value: I.value
      }) : m.cellProps;
      return r(za, O({
        align: m.align,
        class: {
          "v-data-table__td--expanded-row": m.key === "data-table-expand",
          "v-data-table__td--select-row": m.key === "data-table-select"
        },
        fixed: m.fixed,
        fixedOffset: m.fixedOffset,
        lastFixed: m.lastFixed,
        maxWidth: l.value ? void 0 : m.maxWidth,
        noPadding: m.key === "data-table-select" || m.key === "data-table-expand",
        nowrap: m.nowrap,
        width: l.value ? void 0 : m.width
      }, D, w), {
        default: () => {
          var A, V, x, M;
          if (m.key === "data-table-select")
            return ((A = t["item.data-table-select"]) == null ? void 0 : A.call(t, {
              ...I,
              props: {
                disabled: !S.selectable,
                modelValue: i([S]),
                onClick: Zn(() => o(S), ["stop"])
              }
            })) ?? r($t, {
              disabled: !S.selectable,
              modelValue: i([S]),
              onClick: Zn(() => o(S), ["stop"])
            }, null);
          if (m.key === "data-table-expand")
            return ((V = t["item.data-table-expand"]) == null ? void 0 : V.call(t, {
              ...I,
              props: {
                icon: v(S) ? "$collapse" : "$expand",
                size: "small",
                variant: "text",
                onClick: Zn(() => f(S), ["stop"])
              }
            })) ?? r(fe, {
              icon: v(S) ? "$collapse" : "$expand",
              size: "small",
              variant: "text",
              onClick: Zn(() => f(S), ["stop"])
            }, null);
          if (t[C] && !l.value) return t[C](I);
          const P = sn(I.value);
          return l.value ? r(ie, null, [r("div", {
            class: "v-data-table__td-title"
          }, [((x = t[T]) == null ? void 0 : x.call(t, _)) ?? m.title]), r("div", {
            class: "v-data-table__td-value"
          }, [((M = t[C]) == null ? void 0 : M.call(t, I)) ?? P])]) : P;
        }
      });
    })]));
  }
}), Qs = p({
  loading: [Boolean, String],
  loadingText: {
    type: String,
    default: "$vuetify.dataIterator.loadingText"
  },
  hideNoData: Boolean,
  items: {
    type: Array,
    default: () => []
  },
  noDataText: {
    type: String,
    default: "$vuetify.noDataText"
  },
  rowProps: [Object, Function],
  cellProps: [Object, Function],
  ...Gt()
}, "VDataTableRows"), Nn = L()({
  name: "VDataTableRows",
  inheritAttrs: !1,
  props: Qs(),
  setup(e, n) {
    let {
      attrs: t,
      slots: a
    } = n;
    const {
      columns: l
    } = gl(), {
      expandOnClick: i,
      toggleExpand: o,
      isExpanded: u
    } = Ms(), {
      isSelected: s,
      toggleSelect: c
    } = vl(), {
      toggleGroup: v,
      isGroupOpen: f
    } = Es(), {
      t: d
    } = Te(), {
      mobile: g
    } = ht(e);
    return z(() => {
      var y, h;
      return e.loading && (!e.items.length || a.loading) ? r("tr", {
        class: "v-data-table-rows-loading",
        key: "loading"
      }, [r("td", {
        colspan: l.value.length
      }, [((y = a.loading) == null ? void 0 : y.call(a)) ?? d(e.loadingText)])]) : !e.loading && !e.items.length && !e.hideNoData ? r("tr", {
        class: "v-data-table-rows-no-data",
        key: "no-data"
      }, [r("td", {
        colspan: l.value.length
      }, [((h = a["no-data"]) == null ? void 0 : h.call(a)) ?? d(e.noDataText)])]) : r(ie, null, [e.items.map((m, k) => {
        var T;
        if (m.type === "group") {
          const I = {
            index: k,
            item: m,
            columns: l.value,
            isExpanded: u,
            toggleExpand: o,
            isSelected: s,
            toggleSelect: c,
            toggleGroup: v,
            isGroupOpen: f
          };
          return a["group-header"] ? a["group-header"](I) : r(Mh, O({
            key: `group-header_${m.id}`,
            item: m
          }, ho(t, ":group-header", () => I)), a);
        }
        const S = {
          index: k,
          item: m.raw,
          internalItem: m,
          columns: l.value,
          isExpanded: u,
          toggleExpand: o,
          isSelected: s,
          toggleSelect: c
        }, C = {
          ...S,
          props: O({
            key: `item_${m.key ?? m.index}`,
            onClick: i.value ? () => {
              o(m);
            } : void 0,
            index: k,
            item: m,
            cellProps: e.cellProps,
            mobile: g.value
          }, ho(t, ":row", () => S), typeof e.rowProps == "function" ? e.rowProps({
            item: S.item,
            index: S.index,
            internalItem: S.internalItem
          }) : e.rowProps)
        };
        return r(ie, {
          key: C.props.key
        }, [a.item ? a.item(C) : r(Zs, C.props, a), u(m) && ((T = a["expanded-row"]) == null ? void 0 : T.call(a, S))]);
      })]);
    }), {};
  }
}), Js = p({
  fixedHeader: Boolean,
  fixedFooter: Boolean,
  height: [Number, String],
  hover: Boolean,
  ...le(),
  ...ze(),
  ...ge(),
  ...ke()
}, "VTable"), Rn = L()({
  name: "VTable",
  props: Js(),
  setup(e, n) {
    let {
      slots: t,
      emit: a
    } = n;
    const {
      themeClasses: l
    } = Ve(e), {
      densityClasses: i
    } = Qe(e);
    return z(() => r(e.tag, {
      class: ["v-table", {
        "v-table--fixed-height": !!e.height,
        "v-table--fixed-header": e.fixedHeader,
        "v-table--fixed-footer": e.fixedFooter,
        "v-table--has-top": !!t.top,
        "v-table--has-bottom": !!t.bottom,
        "v-table--hover": e.hover
      }, l.value, i.value, e.class],
      style: e.style
    }, {
      default: () => {
        var o, u, s;
        return [(o = t.top) == null ? void 0 : o.call(t), t.default ? r("div", {
          class: "v-table__wrapper",
          style: {
            height: te(e.height)
          }
        }, [r("table", null, [t.default()])]) : (u = t.wrapper) == null ? void 0 : u.call(t), (s = t.bottom) == null ? void 0 : s.call(t)];
      }
    })), {};
  }
}), Eh = p({
  items: {
    type: Array,
    default: () => []
  },
  itemValue: {
    type: [String, Array, Function],
    default: "id"
  },
  itemSelectable: {
    type: [String, Array, Function],
    default: null
  },
  rowProps: [Object, Function],
  cellProps: [Object, Function],
  returnObject: Boolean
}, "DataTable-items");
function Fh(e, n, t, a) {
  const l = e.returnObject ? n : Ne(n, e.itemValue), i = Ne(n, e.itemSelectable, !0), o = a.reduce((u, s) => (s.key != null && (u[s.key] = Ne(n, s.value)), u), {});
  return {
    type: "item",
    key: e.returnObject ? Ne(n, e.itemValue) : l,
    index: t,
    value: l,
    selectable: i,
    columns: o,
    raw: n
  };
}
function $h(e, n, t) {
  return n.map((a, l) => Fh(e, a, l, t));
}
function Ni(e, n) {
  return {
    items: b(() => $h(e, e.items, n.value))
  };
}
const Ri = p({
  ...Qs(),
  hideDefaultBody: Boolean,
  hideDefaultFooter: Boolean,
  hideDefaultHeader: Boolean,
  width: [String, Number],
  search: String,
  ...Ds(),
  ...Di(),
  ...Ph(),
  ...Eh(),
  ...Hs(),
  ...Ws(),
  ...Xs(),
  ...Js()
}, "DataTable"), Lh = p({
  ...Mi(),
  ...Ri(),
  ...Kn(),
  ...$i()
}, "VDataTable"), Ck = L()({
  name: "VDataTable",
  props: Lh(),
  emits: {
    "update:modelValue": (e) => !0,
    "update:page": (e) => !0,
    "update:itemsPerPage": (e) => !0,
    "update:sortBy": (e) => !0,
    "update:options": (e) => !0,
    "update:groupBy": (e) => !0,
    "update:expanded": (e) => !0,
    "update:currentItems": (e) => !0
  },
  setup(e, n) {
    let {
      attrs: t,
      slots: a
    } = n;
    const {
      groupBy: l
    } = Bi(e), {
      sortBy: i,
      multiSort: o,
      mustSort: u
    } = fl(e), {
      page: s,
      itemsPerPage: c
    } = pi(e), {
      disableSort: v
    } = Ut(e), {
      columns: f,
      headers: d,
      sortFunctions: g,
      sortRawFunctions: y,
      filterFunctions: h
    } = Oi(e, {
      groupBy: l,
      showSelect: $(e, "showSelect"),
      showExpand: $(e, "showExpand")
    }), {
      items: m
    } = Ni(e, f), k = $(e, "search"), {
      filteredItems: S
    } = qn(e, m, k, {
      transform: (K) => K.columns,
      customKeyFilter: h
    }), {
      toggleSort: C
    } = ml({
      sortBy: i,
      multiSort: o,
      mustSort: u,
      page: s
    }), {
      sortByWithGroups: T,
      opened: I,
      extractRows: _,
      isGroupOpen: D,
      toggleGroup: w
    } = ul({
      groupBy: l,
      sortBy: i,
      disableSort: v
    }), {
      sortedItems: P
    } = Fi(e, S, T, {
      transform: (K) => ({
        ...K.raw,
        ...K.columns
      }),
      sortFunctions: g,
      sortRawFunctions: y
    }), {
      flatItems: A
    } = sl(P, l, I), V = b(() => A.value.length), {
      startIndex: x,
      stopIndex: M,
      pageCount: E,
      setItemsPerPage: N
    } = Ei({
      page: s,
      itemsPerPage: c,
      itemsLength: V
    }), {
      paginatedItems: j
    } = Os({
      items: A,
      startIndex: x,
      stopIndex: M,
      itemsPerPage: c
    }), ee = b(() => _(j.value)), {
      isSelected: W,
      select: R,
      selectAll: F,
      toggleSelect: B,
      someSelected: H,
      allSelected: Z
    } = dl(e, {
      allItems: m,
      currentPage: ee
    }), {
      isExpanded: Q,
      toggleExpand: re
    } = rl(e);
    cl({
      page: s,
      itemsPerPage: c,
      sortBy: i,
      groupBy: l,
      search: k
    }), pe({
      VDataTableRows: {
        hideNoData: $(e, "hideNoData"),
        noDataText: $(e, "noDataText"),
        loading: $(e, "loading"),
        loadingText: $(e, "loadingText")
      }
    });
    const X = b(() => ({
      page: s.value,
      itemsPerPage: c.value,
      sortBy: i.value,
      pageCount: E.value,
      toggleSort: C,
      setItemsPerPage: N,
      someSelected: H.value,
      allSelected: Z.value,
      isSelected: W,
      select: R,
      selectAll: F,
      toggleSelect: B,
      isExpanded: Q,
      toggleExpand: re,
      isGroupOpen: D,
      toggleGroup: w,
      items: ee.value.map((K) => K.raw),
      internalItems: ee.value,
      groupedItems: j.value,
      columns: f.value,
      headers: d.value
    }));
    return z(() => {
      const K = Ha.filterProps(e), ne = On.filterProps(e), ye = Nn.filterProps(e), he = Rn.filterProps(e);
      return r(Rn, O({
        class: ["v-data-table", {
          "v-data-table--show-select": e.showSelect,
          "v-data-table--loading": e.loading
        }, e.class],
        style: e.style
      }, he, {
        fixedHeader: e.fixedHeader || e.sticky
      }), {
        top: () => {
          var q;
          return (q = a.top) == null ? void 0 : q.call(a, X.value);
        },
        default: () => {
          var q, se, Y, ae, ve, ce;
          return a.default ? a.default(X.value) : r(ie, null, [(q = a.colgroup) == null ? void 0 : q.call(a, X.value), !e.hideDefaultHeader && r("thead", {
            key: "thead"
          }, [r(On, ne, a)]), (se = a.thead) == null ? void 0 : se.call(a, X.value), !e.hideDefaultBody && r("tbody", null, [(Y = a["body.prepend"]) == null ? void 0 : Y.call(a, X.value), a.body ? a.body(X.value) : r(Nn, O(t, ye, {
            items: j.value
          }), a), (ae = a["body.append"]) == null ? void 0 : ae.call(a, X.value)]), (ve = a.tbody) == null ? void 0 : ve.call(a, X.value), (ce = a.tfoot) == null ? void 0 : ce.call(a, X.value)]);
        },
        bottom: () => a.bottom ? a.bottom(X.value) : !e.hideDefaultFooter && r(ie, null, [r(It, null, null), r(Ha, K, {
          prepend: a["footer.prepend"]
        })])
      });
    }), {};
  }
}), Oh = p({
  ...Ri(),
  ...Di(),
  ...ys(),
  ...Kn()
}, "VDataTableVirtual"), Vk = L()({
  name: "VDataTableVirtual",
  props: Oh(),
  emits: {
    "update:modelValue": (e) => !0,
    "update:sortBy": (e) => !0,
    "update:options": (e) => !0,
    "update:groupBy": (e) => !0,
    "update:expanded": (e) => !0
  },
  setup(e, n) {
    let {
      attrs: t,
      slots: a
    } = n;
    const {
      groupBy: l
    } = Bi(e), {
      sortBy: i,
      multiSort: o,
      mustSort: u
    } = fl(e), {
      disableSort: s
    } = Ut(e), {
      columns: c,
      headers: v,
      filterFunctions: f,
      sortFunctions: d,
      sortRawFunctions: g
    } = Oi(e, {
      groupBy: l,
      showSelect: $(e, "showSelect"),
      showExpand: $(e, "showExpand")
    }), {
      items: y
    } = Ni(e, c), h = $(e, "search"), {
      filteredItems: m
    } = qn(e, y, h, {
      transform: (ne) => ne.columns,
      customKeyFilter: f
    }), {
      toggleSort: k
    } = ml({
      sortBy: i,
      multiSort: o,
      mustSort: u
    }), {
      sortByWithGroups: S,
      opened: C,
      extractRows: T,
      isGroupOpen: I,
      toggleGroup: _
    } = ul({
      groupBy: l,
      sortBy: i,
      disableSort: s
    }), {
      sortedItems: D
    } = Fi(e, m, S, {
      transform: (ne) => ({
        ...ne.raw,
        ...ne.columns
      }),
      sortFunctions: d,
      sortRawFunctions: g
    }), {
      flatItems: w
    } = sl(D, l, C), P = b(() => T(w.value)), {
      isSelected: A,
      select: V,
      selectAll: x,
      toggleSelect: M,
      someSelected: E,
      allSelected: N
    } = dl(e, {
      allItems: P,
      currentPage: P
    }), {
      isExpanded: j,
      toggleExpand: ee
    } = rl(e), {
      containerRef: W,
      markerRef: R,
      paddingTop: F,
      paddingBottom: B,
      computedItems: H,
      handleItemResize: Z,
      handleScroll: Q,
      handleScrollend: re
    } = bs(e, w), X = b(() => H.value.map((ne) => ne.raw));
    cl({
      sortBy: i,
      page: G(1),
      itemsPerPage: G(-1),
      groupBy: l,
      search: h
    }), pe({
      VDataTableRows: {
        hideNoData: $(e, "hideNoData"),
        noDataText: $(e, "noDataText"),
        loading: $(e, "loading"),
        loadingText: $(e, "loadingText")
      }
    });
    const K = b(() => ({
      sortBy: i.value,
      toggleSort: k,
      someSelected: E.value,
      allSelected: N.value,
      isSelected: A,
      select: V,
      selectAll: x,
      toggleSelect: M,
      isExpanded: j,
      toggleExpand: ee,
      isGroupOpen: I,
      toggleGroup: _,
      items: P.value.map((ne) => ne.raw),
      internalItems: P.value,
      groupedItems: w.value,
      columns: c.value,
      headers: v.value
    }));
    z(() => {
      const ne = On.filterProps(e), ye = Nn.filterProps(e), he = Rn.filterProps(e);
      return r(Rn, O({
        class: ["v-data-table", {
          "v-data-table--loading": e.loading
        }, e.class],
        style: e.style
      }, he, {
        fixedHeader: e.fixedHeader || e.sticky
      }), {
        top: () => {
          var q;
          return (q = a.top) == null ? void 0 : q.call(a, K.value);
        },
        wrapper: () => {
          var q, se, Y;
          return r("div", {
            ref: W,
            onScrollPassive: Q,
            onScrollend: re,
            class: "v-table__wrapper",
            style: {
              height: te(e.height)
            }
          }, [r("table", null, [(q = a.colgroup) == null ? void 0 : q.call(a, K.value), !e.hideDefaultHeader && r("thead", {
            key: "thead"
          }, [r(On, ne, a)]), !e.hideDefaultBody && r("tbody", null, [r("tr", {
            ref: R,
            style: {
              height: te(F.value),
              border: 0
            }
          }, [r("td", {
            colspan: c.value.length,
            style: {
              height: 0,
              border: 0
            }
          }, null)]), (se = a["body.prepend"]) == null ? void 0 : se.call(a, K.value), r(Nn, O(t, ye, {
            items: X.value
          }), {
            ...a,
            item: (ae) => r(hs, {
              key: ae.internalItem.index,
              renderless: !0,
              "onUpdate:height": (ve) => Z(ae.internalItem.index, ve)
            }, {
              default: (ve) => {
                var me;
                let {
                  itemRef: ce
                } = ve;
                return ((me = a.item) == null ? void 0 : me.call(a, {
                  ...ae,
                  itemRef: ce
                })) ?? r(Zs, O(ae.props, {
                  ref: ce,
                  key: ae.internalItem.index,
                  index: ae.internalItem.index
                }), a);
              }
            })
          }), (Y = a["body.append"]) == null ? void 0 : Y.call(a, K.value), r("tr", {
            style: {
              height: te(B.value),
              border: 0
            }
          }, [r("td", {
            colspan: c.value.length,
            style: {
              height: 0,
              border: 0
            }
          }, null)])])])]);
        },
        bottom: () => {
          var q;
          return (q = a.bottom) == null ? void 0 : q.call(a, K.value);
        }
      });
    });
  }
}), Nh = p({
  itemsLength: {
    type: [Number, String],
    required: !0
  },
  ...Mi(),
  ...Ri(),
  ...$i()
}, "VDataTableServer"), Pk = L()({
  name: "VDataTableServer",
  props: Nh(),
  emits: {
    "update:modelValue": (e) => !0,
    "update:page": (e) => !0,
    "update:itemsPerPage": (e) => !0,
    "update:sortBy": (e) => !0,
    "update:options": (e) => !0,
    "update:expanded": (e) => !0,
    "update:groupBy": (e) => !0
  },
  setup(e, n) {
    let {
      attrs: t,
      slots: a
    } = n;
    const {
      groupBy: l
    } = Bi(e), {
      sortBy: i,
      multiSort: o,
      mustSort: u
    } = fl(e), {
      page: s,
      itemsPerPage: c
    } = pi(e), {
      disableSort: v
    } = Ut(e), f = b(() => parseInt(e.itemsLength, 10)), {
      columns: d,
      headers: g
    } = Oi(e, {
      groupBy: l,
      showSelect: $(e, "showSelect"),
      showExpand: $(e, "showExpand")
    }), {
      items: y
    } = Ni(e, d), {
      toggleSort: h
    } = ml({
      sortBy: i,
      multiSort: o,
      mustSort: u,
      page: s
    }), {
      opened: m,
      isGroupOpen: k,
      toggleGroup: S,
      extractRows: C
    } = ul({
      groupBy: l,
      sortBy: i,
      disableSort: v
    }), {
      pageCount: T,
      setItemsPerPage: I
    } = Ei({
      page: s,
      itemsPerPage: c,
      itemsLength: f
    }), {
      flatItems: _
    } = sl(y, l, m), {
      isSelected: D,
      select: w,
      selectAll: P,
      toggleSelect: A,
      someSelected: V,
      allSelected: x
    } = dl(e, {
      allItems: y,
      currentPage: y
    }), {
      isExpanded: M,
      toggleExpand: E
    } = rl(e), N = b(() => C(y.value));
    cl({
      page: s,
      itemsPerPage: c,
      sortBy: i,
      groupBy: l,
      search: $(e, "search")
    }), De("v-data-table", {
      toggleSort: h,
      sortBy: i
    }), pe({
      VDataTableRows: {
        hideNoData: $(e, "hideNoData"),
        noDataText: $(e, "noDataText"),
        loading: $(e, "loading"),
        loadingText: $(e, "loadingText")
      }
    });
    const j = b(() => ({
      page: s.value,
      itemsPerPage: c.value,
      sortBy: i.value,
      pageCount: T.value,
      toggleSort: h,
      setItemsPerPage: I,
      someSelected: V.value,
      allSelected: x.value,
      isSelected: D,
      select: w,
      selectAll: P,
      toggleSelect: A,
      isExpanded: M,
      toggleExpand: E,
      isGroupOpen: k,
      toggleGroup: S,
      items: N.value.map((ee) => ee.raw),
      internalItems: N.value,
      groupedItems: _.value,
      columns: d.value,
      headers: g.value
    }));
    z(() => {
      const ee = Ha.filterProps(e), W = On.filterProps(e), R = Nn.filterProps(e), F = Rn.filterProps(e);
      return r(Rn, O({
        class: ["v-data-table", {
          "v-data-table--loading": e.loading
        }, e.class],
        style: e.style
      }, F, {
        fixedHeader: e.fixedHeader || e.sticky
      }), {
        top: () => {
          var B;
          return (B = a.top) == null ? void 0 : B.call(a, j.value);
        },
        default: () => {
          var B, H, Z, Q, re, X;
          return a.default ? a.default(j.value) : r(ie, null, [(B = a.colgroup) == null ? void 0 : B.call(a, j.value), !e.hideDefaultHeader && r("thead", {
            key: "thead",
            class: "v-data-table__thead",
            role: "rowgroup"
          }, [r(On, W, a)]), (H = a.thead) == null ? void 0 : H.call(a, j.value), !e.hideDefaultBody && r("tbody", {
            class: "v-data-table__tbody",
            role: "rowgroup"
          }, [(Z = a["body.prepend"]) == null ? void 0 : Z.call(a, j.value), a.body ? a.body(j.value) : r(Nn, O(t, R, {
            items: _.value
          }), a), (Q = a["body.append"]) == null ? void 0 : Q.call(a, j.value)]), (re = a.tbody) == null ? void 0 : re.call(a, j.value), (X = a.tfoot) == null ? void 0 : X.call(a, j.value)]);
        },
        bottom: () => a.bottom ? a.bottom(j.value) : !e.hideDefaultFooter && r(ie, null, [r(It, null, null), r(Ha, ee, {
          prepend: a["footer.prepend"]
        })])
      });
    });
  }
}), Rh = p({
  fluid: {
    type: Boolean,
    default: !1
  },
  ...le(),
  ...Re(),
  ...ge()
}, "VContainer"), Ik = L()({
  name: "VContainer",
  props: Rh(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    const {
      rtlClasses: a
    } = We(), {
      dimensionStyles: l
    } = He(e);
    return z(() => r(e.tag, {
      class: ["v-container", {
        "v-container--fluid": e.fluid
      }, a.value, e.class],
      style: [l.value, e.style]
    }, t)), {};
  }
}), ec = Xa.reduce((e, n) => (e[n] = {
  type: [Boolean, String, Number],
  default: !1
}, e), {}), tc = Xa.reduce((e, n) => {
  const t = "offset" + Hn(n);
  return e[t] = {
    type: [String, Number],
    default: null
  }, e;
}, {}), nc = Xa.reduce((e, n) => {
  const t = "order" + Hn(n);
  return e[t] = {
    type: [String, Number],
    default: null
  }, e;
}, {}), qo = {
  col: Object.keys(ec),
  offset: Object.keys(tc),
  order: Object.keys(nc)
};
function Hh(e, n, t) {
  let a = e;
  if (!(t == null || t === !1)) {
    if (n) {
      const l = n.replace(e, "");
      a += `-${l}`;
    }
    return e === "col" && (a = "v-" + a), e === "col" && (t === "" || t === !0) || (a += `-${t}`), a.toLowerCase();
  }
}
const zh = ["auto", "start", "end", "center", "baseline", "stretch"], Wh = p({
  cols: {
    type: [Boolean, String, Number],
    default: !1
  },
  ...ec,
  offset: {
    type: [String, Number],
    default: null
  },
  ...tc,
  order: {
    type: [String, Number],
    default: null
  },
  ...nc,
  alignSelf: {
    type: String,
    default: null,
    validator: (e) => zh.includes(e)
  },
  ...le(),
  ...ge()
}, "VCol"), _k = L()({
  name: "VCol",
  props: Wh(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    const a = b(() => {
      const l = [];
      let i;
      for (i in qo)
        qo[i].forEach((u) => {
          const s = e[u], c = Hh(i, u, s);
          c && l.push(c);
        });
      const o = l.some((u) => u.startsWith("v-col-"));
      return l.push({
        // Default to .v-col if no other col-{bp}-* classes generated nor `cols` specified.
        "v-col": !o || !e.cols,
        [`v-col-${e.cols}`]: e.cols,
        [`offset-${e.offset}`]: e.offset,
        [`order-${e.order}`]: e.order,
        [`align-self-${e.alignSelf}`]: e.alignSelf
      }), l;
    });
    return () => {
      var l;
      return Yt(e.tag, {
        class: [a.value, e.class],
        style: e.style
      }, (l = t.default) == null ? void 0 : l.call(t));
    };
  }
}), Hi = ["start", "end", "center"], ac = ["space-between", "space-around", "space-evenly"];
function zi(e, n) {
  return Xa.reduce((t, a) => {
    const l = e + Hn(a);
    return t[l] = n(), t;
  }, {});
}
const jh = [...Hi, "baseline", "stretch"], lc = (e) => jh.includes(e), ic = zi("align", () => ({
  type: String,
  default: null,
  validator: lc
})), Uh = [...Hi, ...ac], oc = (e) => Uh.includes(e), rc = zi("justify", () => ({
  type: String,
  default: null,
  validator: oc
})), Yh = [...Hi, ...ac, "stretch"], uc = (e) => Yh.includes(e), sc = zi("alignContent", () => ({
  type: String,
  default: null,
  validator: uc
})), Xo = {
  align: Object.keys(ic),
  justify: Object.keys(rc),
  alignContent: Object.keys(sc)
}, Gh = {
  align: "align",
  justify: "justify",
  alignContent: "align-content"
};
function Kh(e, n, t) {
  let a = Gh[e];
  if (t != null) {
    if (n) {
      const l = n.replace(e, "");
      a += `-${l}`;
    }
    return a += `-${t}`, a.toLowerCase();
  }
}
const qh = p({
  dense: Boolean,
  noGutters: Boolean,
  align: {
    type: String,
    default: null,
    validator: lc
  },
  ...ic,
  justify: {
    type: String,
    default: null,
    validator: oc
  },
  ...rc,
  alignContent: {
    type: String,
    default: null,
    validator: uc
  },
  ...sc,
  ...le(),
  ...ge()
}, "VRow"), Tk = L()({
  name: "VRow",
  props: qh(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    const a = b(() => {
      const l = [];
      let i;
      for (i in Xo)
        Xo[i].forEach((o) => {
          const u = e[o], s = Kh(i, o, u);
          s && l.push(s);
        });
      return l.push({
        "v-row--no-gutters": e.noGutters,
        "v-row--dense": e.dense,
        [`align-${e.align}`]: e.align,
        [`justify-${e.justify}`]: e.justify,
        [`align-content-${e.alignContent}`]: e.alignContent
      }), l;
    });
    return () => {
      var l;
      return Yt(e.tag, {
        class: ["v-row", a.value, e.class],
        style: e.style
      }, (l = t.default) == null ? void 0 : l.call(t));
    };
  }
}), Xh = Bt("v-spacer", "div", "VSpacer"), cc = p({
  active: {
    type: [String, Array],
    default: void 0
  },
  disabled: {
    type: [Boolean, String, Array],
    default: null
  },
  nextIcon: {
    type: ue,
    default: "$next"
  },
  prevIcon: {
    type: ue,
    default: "$prev"
  },
  modeIcon: {
    type: ue,
    default: "$subgroup"
  },
  text: String,
  viewMode: {
    type: String,
    default: "month"
  }
}, "VDatePickerControls"), Zo = L()({
  name: "VDatePickerControls",
  props: cc(),
  emits: {
    "click:year": () => !0,
    "click:month": () => !0,
    "click:prev": () => !0,
    "click:next": () => !0,
    "click:text": () => !0
  },
  setup(e, n) {
    let {
      emit: t
    } = n;
    const a = b(() => Array.isArray(e.disabled) ? e.disabled.includes("text") : !!e.disabled), l = b(() => Array.isArray(e.disabled) ? e.disabled.includes("mode") : !!e.disabled), i = b(() => Array.isArray(e.disabled) ? e.disabled.includes("prev") : !!e.disabled), o = b(() => Array.isArray(e.disabled) ? e.disabled.includes("next") : !!e.disabled);
    function u() {
      t("click:prev");
    }
    function s() {
      t("click:next");
    }
    function c() {
      t("click:year");
    }
    function v() {
      t("click:month");
    }
    return z(() => r("div", {
      class: ["v-date-picker-controls"]
    }, [r(fe, {
      class: "v-date-picker-controls__month-btn",
      "data-testid": "month-btn",
      disabled: a.value,
      text: e.text,
      variant: "text",
      rounded: !0,
      onClick: v
    }, null), r(fe, {
      class: "v-date-picker-controls__mode-btn",
      "data-testid": "year-btn",
      disabled: l.value,
      density: "comfortable",
      icon: e.modeIcon,
      variant: "text",
      onClick: c
    }, null), r(Xh, null, null), r("div", {
      class: "v-date-picker-controls__month"
    }, [r(fe, {
      "data-testid": "prev-month",
      disabled: i.value,
      icon: e.prevIcon,
      variant: "text",
      onClick: u
    }, null), r(fe, {
      "data-testid": "next-month",
      disabled: o.value,
      icon: e.nextIcon,
      variant: "text",
      onClick: s
    }, null)])])), {};
  }
}), Zh = p({
  appendIcon: ue,
  color: String,
  header: String,
  transition: String,
  onClick: Ye()
}, "VDatePickerHeader"), Qo = L()({
  name: "VDatePickerHeader",
  props: Zh(),
  emits: {
    click: () => !0,
    "click:append": () => !0
  },
  setup(e, n) {
    let {
      emit: t,
      slots: a
    } = n;
    const {
      backgroundColorClasses: l,
      backgroundColorStyles: i
    } = Pe(e, "color");
    function o() {
      t("click");
    }
    function u() {
      t("click:append");
    }
    return z(() => {
      const s = !!(a.default || e.header), c = !!(a.append || e.appendIcon);
      return r("div", {
        class: ["v-date-picker-header", {
          "v-date-picker-header--clickable": !!e.onClick
        }, l.value],
        style: i.value,
        onClick: o
      }, [a.prepend && r("div", {
        key: "prepend",
        class: "v-date-picker-header__prepend"
      }, [a.prepend()]), s && r(tt, {
        key: "content",
        name: e.transition
      }, {
        default: () => {
          var v;
          return [r("div", {
            key: e.header,
            class: "v-date-picker-header__content"
          }, [((v = a.default) == null ? void 0 : v.call(a)) ?? e.header])];
        }
      }), c && r("div", {
        class: "v-date-picker-header__append"
      }, [a.append ? r(de, {
        key: "append-defaults",
        disabled: !e.appendIcon,
        defaults: {
          VBtn: {
            icon: e.appendIcon,
            variant: "text"
          }
        }
      }, {
        default: () => {
          var v;
          return [(v = a.append) == null ? void 0 : v.call(a)];
        }
      }) : r(fe, {
        key: "append-btn",
        icon: e.appendIcon,
        variant: "text",
        onClick: u
      }, null)])]);
    }), {};
  }
}), dc = p({
  allowedDates: [Array, Function],
  disabled: {
    type: Boolean,
    default: null
  },
  displayValue: null,
  modelValue: Array,
  month: [Number, String],
  max: null,
  min: null,
  showAdjacentMonths: Boolean,
  year: [Number, String],
  weekdays: {
    type: Array,
    default: () => [0, 1, 2, 3, 4, 5, 6]
  },
  weeksInMonth: {
    type: String,
    default: "dynamic"
  },
  firstDayOfWeek: [Number, String]
}, "calendar");
function vc(e) {
  const n = Mt(), t = oe(e, "modelValue", [], (y) => Ae(y).map((h) => n.date(h))), a = b(() => e.displayValue ? n.date(e.displayValue) : t.value.length > 0 ? n.date(t.value[0]) : e.min ? n.date(e.min) : Array.isArray(e.allowedDates) ? n.date(e.allowedDates[0]) : n.date()), l = oe(e, "year", void 0, (y) => {
    const h = y != null ? Number(y) : n.getYear(a.value);
    return n.startOfYear(n.setYear(n.date(), h));
  }, (y) => n.getYear(y)), i = oe(e, "month", void 0, (y) => {
    const h = y != null ? Number(y) : n.getMonth(a.value), m = n.setYear(n.startOfMonth(n.date()), n.getYear(l.value));
    return n.setMonth(m, h);
  }, (y) => n.getMonth(y)), o = b(() => e.firstDayOfWeek ?? e.weekdays[0]), u = b(() => {
    const y = Number(e.firstDayOfWeek ?? 0);
    return e.weekdays.map((h) => (h + y) % 7);
  }), s = b(() => {
    const y = n.getWeekArray(i.value, o.value), h = y.flat(), m = 42;
    if (e.weeksInMonth === "static" && h.length < m) {
      const k = h[h.length - 1];
      let S = [];
      for (let C = 1; C <= m - h.length; C++)
        S.push(n.addDays(k, C)), C % 7 === 0 && (y.push(S), S = []);
    }
    return y;
  });
  function c(y, h) {
    return y.filter((m) => u.value.includes(n.toJsDate(m).getDay())).map((m, k) => {
      const S = n.toISO(m), C = !n.isSameMonth(m, i.value), T = n.isSameDay(m, n.startOfMonth(i.value)), I = n.isSameDay(m, n.endOfMonth(i.value)), _ = n.isSameDay(m, i.value);
      return {
        date: m,
        isoDate: S,
        formatted: n.format(m, "keyboardDate"),
        year: n.getYear(m),
        month: n.getMonth(m),
        isDisabled: g(m),
        isWeekStart: k % 7 === 0,
        isWeekEnd: k % 7 === 6,
        isToday: n.isSameDay(m, h),
        isAdjacent: C,
        isHidden: C && !e.showAdjacentMonths,
        isStart: T,
        isSelected: t.value.some((D) => n.isSameDay(m, D)),
        isEnd: I,
        isSame: _,
        localized: n.format(m, "dayOfMonth")
      };
    });
  }
  const v = b(() => {
    const y = n.startOfWeek(a.value, e.firstDayOfWeek), h = [];
    for (let k = 0; k <= 6; k++)
      h.push(n.addDays(y, k));
    const m = n.date();
    return c(h, m);
  }), f = b(() => {
    const y = s.value.flat(), h = n.date();
    return c(y, h);
  }), d = b(() => s.value.map((y) => y.length ? $v(n, y[0]) : null));
  function g(y) {
    if (e.disabled) return !0;
    const h = n.date(y);
    return e.min && n.isAfter(n.date(e.min), h) || e.max && n.isAfter(h, n.date(e.max)) ? !0 : Array.isArray(e.allowedDates) && e.allowedDates.length > 0 ? !e.allowedDates.some((m) => n.isSameDay(n.date(m), h)) : typeof e.allowedDates == "function" ? !e.allowedDates(h) : !1;
  }
  return {
    displayValue: a,
    daysInMonth: f,
    daysInWeek: v,
    genDays: c,
    model: t,
    weeksInMonth: s,
    weekDays: u,
    weekNumbers: d
  };
}
const fc = p({
  color: String,
  hideWeekdays: Boolean,
  multiple: [Boolean, Number, String],
  showWeek: Boolean,
  transition: {
    type: String,
    default: "picker-transition"
  },
  reverseTransition: {
    type: String,
    default: "picker-reverse-transition"
  },
  ...Ce(dc(), ["displayValue"])
}, "VDatePickerMonth"), Jo = L()({
  name: "VDatePickerMonth",
  props: fc(),
  emits: {
    "update:modelValue": (e) => !0,
    "update:month": (e) => !0,
    "update:year": (e) => !0
  },
  setup(e, n) {
    let {
      emit: t,
      slots: a
    } = n;
    const l = U(), {
      daysInMonth: i,
      model: o,
      weekNumbers: u
    } = vc(e), s = Mt(), c = G(), v = G(), f = G(!1), d = b(() => f.value ? e.reverseTransition : e.transition);
    e.multiple === "range" && o.value.length > 0 && (c.value = o.value[0], o.value.length > 1 && (v.value = o.value[o.value.length - 1]));
    const g = b(() => {
      const k = ["number", "string"].includes(typeof e.multiple) ? Number(e.multiple) : 1 / 0;
      return o.value.length >= k;
    });
    J(i, (k, S) => {
      S && (f.value = s.isBefore(k[0].date, S[0].date));
    });
    function y(k) {
      const S = s.startOfDay(k);
      if (o.value.length === 0 ? c.value = void 0 : o.value.length === 1 && (c.value = o.value[0], v.value = void 0), !c.value)
        c.value = S, o.value = [c.value];
      else if (v.value)
        c.value = k, v.value = void 0, o.value = [c.value];
      else {
        if (s.isSameDay(S, c.value)) {
          c.value = void 0, o.value = [];
          return;
        } else s.isBefore(S, c.value) ? (v.value = s.endOfDay(c.value), c.value = S) : v.value = s.endOfDay(S);
        const C = s.getDiff(v.value, c.value, "days"), T = [c.value];
        for (let I = 1; I < C; I++) {
          const _ = s.addDays(c.value, I);
          T.push(_);
        }
        T.push(v.value), o.value = T;
      }
    }
    function h(k) {
      const S = o.value.findIndex((C) => s.isSameDay(C, k));
      if (S === -1)
        o.value = [...o.value, k];
      else {
        const C = [...o.value];
        C.splice(S, 1), o.value = C;
      }
    }
    function m(k) {
      e.multiple === "range" ? y(k) : e.multiple ? h(k) : o.value = [k];
    }
    return () => r("div", {
      class: "v-date-picker-month"
    }, [e.showWeek && r("div", {
      key: "weeks",
      class: "v-date-picker-month__weeks"
    }, [!e.hideWeekdays && r("div", {
      key: "hide-week-days",
      class: "v-date-picker-month__day"
    }, [_t(" ")]), u.value.map((k) => r("div", {
      class: ["v-date-picker-month__day", "v-date-picker-month__day--adjacent"]
    }, [k]))]), r(tt, {
      name: d.value
    }, {
      default: () => {
        var k;
        return [r("div", {
          ref: l,
          key: (k = i.value[0].date) == null ? void 0 : k.toString(),
          class: "v-date-picker-month__days"
        }, [!e.hideWeekdays && s.getWeekdays(e.firstDayOfWeek).map((S) => r("div", {
          class: ["v-date-picker-month__day", "v-date-picker-month__weekday"]
        }, [S])), i.value.map((S, C) => {
          const T = {
            props: {
              onClick: () => m(S.date)
            },
            item: S,
            i: C
          };
          return g.value && !S.isSelected && (S.isDisabled = !0), r("div", {
            class: ["v-date-picker-month__day", {
              "v-date-picker-month__day--adjacent": S.isAdjacent,
              "v-date-picker-month__day--hide-adjacent": S.isHidden,
              "v-date-picker-month__day--selected": S.isSelected,
              "v-date-picker-month__day--week-end": S.isWeekEnd,
              "v-date-picker-month__day--week-start": S.isWeekStart
            }],
            "data-v-date": S.isDisabled ? void 0 : S.isoDate
          }, [(e.showAdjacentMonths || !S.isAdjacent) && r(de, {
            defaults: {
              VBtn: {
                class: "v-date-picker-month__day-btn",
                color: (S.isSelected || S.isToday) && !S.isDisabled ? e.color : void 0,
                disabled: S.isDisabled,
                icon: !0,
                ripple: !1,
                text: S.localized,
                variant: S.isDisabled ? S.isToday ? "outlined" : "text" : S.isToday && !S.isSelected ? "outlined" : "flat",
                onClick: () => m(S.date)
              }
            }
          }, {
            default: () => {
              var I;
              return [((I = a.day) == null ? void 0 : I.call(a, T)) ?? r(fe, T.props, null)];
            }
          })]);
        })])];
      }
    })]);
  }
}), mc = p({
  color: String,
  height: [String, Number],
  min: null,
  max: null,
  modelValue: Number,
  year: Number
}, "VDatePickerMonths"), er = L()({
  name: "VDatePickerMonths",
  props: mc(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, n) {
    let {
      emit: t,
      slots: a
    } = n;
    const l = Mt(), i = oe(e, "modelValue"), o = b(() => {
      let u = l.startOfYear(l.date());
      return e.year && (u = l.setYear(u, e.year)), vt(12).map((s) => {
        const c = l.format(u, "monthShort"), v = !!(e.min && l.isAfter(l.startOfMonth(l.date(e.min)), u) || e.max && l.isAfter(u, l.startOfMonth(l.date(e.max))));
        return u = l.getNextMonth(u), {
          isDisabled: v,
          text: c,
          value: s
        };
      });
    });
    return Fe(() => {
      i.value = i.value ?? l.getMonth(l.date());
    }), z(() => r("div", {
      class: "v-date-picker-months",
      style: {
        height: te(e.height)
      }
    }, [r("div", {
      class: "v-date-picker-months__content"
    }, [o.value.map((u, s) => {
      var f;
      const c = {
        active: i.value === s,
        color: i.value === s ? e.color : void 0,
        disabled: u.isDisabled,
        rounded: !0,
        text: u.text,
        variant: i.value === u.value ? "flat" : "text",
        onClick: () => v(s)
      };
      function v(d) {
        if (i.value === d) {
          t("update:modelValue", i.value);
          return;
        }
        i.value = d;
      }
      return ((f = a.month) == null ? void 0 : f.call(a, {
        month: u,
        i: s,
        props: c
      })) ?? r(fe, O({
        key: "month"
      }, c), null);
    })])])), {};
  }
}), gc = p({
  color: String,
  height: [String, Number],
  min: null,
  max: null,
  modelValue: Number
}, "VDatePickerYears"), tr = L()({
  name: "VDatePickerYears",
  props: gc(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, n) {
    let {
      emit: t,
      slots: a
    } = n;
    const l = Mt(), i = oe(e, "modelValue"), o = b(() => {
      const s = l.getYear(l.date());
      let c = s - 100, v = s + 52;
      e.min && (c = l.getYear(l.date(e.min))), e.max && (v = l.getYear(l.date(e.max)));
      let f = l.startOfYear(l.date());
      return f = l.setYear(f, c), vt(v - c + 1, c).map((d) => {
        const g = l.format(f, "year");
        return f = l.setYear(f, l.getYear(f) + 1), {
          text: g,
          value: d
        };
      });
    });
    Fe(() => {
      i.value = i.value ?? l.getYear(l.date());
    });
    const u = pa();
    return Ue(async () => {
      var s;
      await we(), (s = u.el) == null || s.scrollIntoView({
        block: "center"
      });
    }), z(() => r("div", {
      class: "v-date-picker-years",
      style: {
        height: te(e.height)
      }
    }, [r("div", {
      class: "v-date-picker-years__content"
    }, [o.value.map((s, c) => {
      var f;
      const v = {
        ref: i.value === s.value ? u : void 0,
        active: i.value === s.value,
        color: i.value === s.value ? e.color : void 0,
        rounded: !0,
        text: s.text,
        variant: i.value === s.value ? "flat" : "text",
        onClick: () => {
          if (i.value === s.value) {
            t("update:modelValue", i.value);
            return;
          }
          i.value = s.value;
        }
      };
      return ((f = a.year) == null ? void 0 : f.call(a, {
        year: s,
        i: c,
        props: v
      })) ?? r(fe, O({
        key: "month"
      }, v), null);
    })])])), {};
  }
}), Qh = Bt("v-picker-title"), Wi = p({
  bgColor: String,
  landscape: Boolean,
  title: String,
  hideHeader: Boolean,
  ...ka()
}, "VPicker"), Wa = L()({
  name: "VPicker",
  props: Wi(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    const {
      backgroundColorClasses: a,
      backgroundColorStyles: l
    } = Pe($(e, "color"));
    return z(() => {
      const i = Lt.filterProps(e), o = !!(e.title || t.title);
      return r(Lt, O(i, {
        color: e.bgColor,
        class: ["v-picker", {
          "v-picker--landscape": e.landscape,
          "v-picker--with-actions": !!t.actions
        }, e.class],
        style: e.style
      }), {
        default: () => {
          var u;
          return [!e.hideHeader && r("div", {
            key: "header",
            class: [a.value],
            style: [l.value]
          }, [o && r(Qh, {
            key: "picker-title"
          }, {
            default: () => {
              var s;
              return [((s = t.title) == null ? void 0 : s.call(t)) ?? e.title];
            }
          }), t.header && r("div", {
            class: "v-picker__header"
          }, [t.header()])]), r("div", {
            class: "v-picker__body"
          }, [(u = t.default) == null ? void 0 : u.call(t)]), t.actions && r(de, {
            defaults: {
              VBtn: {
                slim: !0,
                variant: "text"
              }
            }
          }, {
            default: () => [r("div", {
              class: "v-picker__actions"
            }, [t.actions()])]
          })];
        }
      });
    }), {};
  }
}), hc = p({
  // TODO: implement in v3.5
  // calendarIcon: {
  //   type: String,
  //   default: '$calendar',
  // },
  // keyboardIcon: {
  //   type: String,
  //   default: '$edit',
  // },
  // inputMode: {
  //   type: String as PropType<'calendar' | 'keyboard'>,
  //   default: 'calendar',
  // },
  // inputText: {
  //   type: String,
  //   default: '$vuetify.datePicker.input.placeholder',
  // },
  // inputPlaceholder: {
  //   type: String,
  //   default: 'dd/mm/yyyy',
  // },
  header: {
    type: String,
    default: "$vuetify.datePicker.header"
  },
  ...cc(),
  ...fc({
    weeksInMonth: "static"
  }),
  ...Ce(mc(), ["modelValue"]),
  ...Ce(gc(), ["modelValue"]),
  ...Wi({
    title: "$vuetify.datePicker.title"
  }),
  modelValue: null
}, "VDatePicker"), nr = L()({
  name: "VDatePicker",
  props: hc(),
  emits: {
    "update:modelValue": (e) => !0,
    "update:month": (e) => !0,
    "update:year": (e) => !0,
    // 'update:inputMode': (date: any) => true,
    "update:viewMode": (e) => !0
  },
  setup(e, n) {
    let {
      emit: t,
      slots: a
    } = n;
    const l = Mt(), {
      t: i
    } = Te(), o = oe(e, "modelValue", void 0, (P) => Ae(P).map((A) => l.date(A)), (P) => e.multiple ? P : P[0]), u = oe(e, "viewMode"), s = b(() => {
      const P = l.date(e.min);
      return e.min && l.isValid(P) ? P : null;
    }), c = b(() => {
      const P = l.date(e.max);
      return e.max && l.isValid(P) ? P : null;
    }), v = b(() => {
      var V;
      const P = l.date();
      let A = P;
      return (V = o.value) != null && V[0] ? A = l.date(o.value[0]) : s.value && l.isBefore(P, s.value) ? A = s.value : c.value && l.isAfter(P, c.value) && (A = c.value), A && l.isValid(A) ? A : P;
    }), f = U(Number(e.month ?? l.getMonth(l.startOfMonth(v.value)))), d = U(Number(e.year ?? l.getYear(l.startOfYear(l.setMonth(v.value, f.value))))), g = G(!1), y = b(() => e.multiple && o.value.length > 1 ? i("$vuetify.datePicker.itemsSelected", o.value.length) : o.value[0] && l.isValid(o.value[0]) ? l.format(l.date(o.value[0]), "normalDateWithWeekday") : i(e.header)), h = b(() => {
      let P = l.date();
      return P = l.setDate(P, 1), P = l.setMonth(P, f.value), P = l.setYear(P, d.value), l.format(P, "monthAndYear");
    }), m = b(() => `date-picker-header${g.value ? "-reverse" : ""}-transition`), k = b(() => {
      if (e.disabled) return !0;
      const P = [];
      if (u.value !== "month")
        P.push("prev", "next");
      else {
        let A = l.date();
        if (A = l.startOfMonth(A), A = l.setMonth(A, f.value), A = l.setYear(A, d.value), s.value) {
          const V = l.addDays(l.startOfMonth(A), -1);
          l.isAfter(s.value, V) && P.push("prev");
        }
        if (c.value) {
          const V = l.addDays(l.endOfMonth(A), 1);
          l.isAfter(V, c.value) && P.push("next");
        }
      }
      return P;
    });
    function S() {
      f.value < 11 ? f.value++ : (d.value++, f.value = 0, w(d.value)), D(f.value);
    }
    function C() {
      f.value > 0 ? f.value-- : (d.value--, f.value = 11, w(d.value)), D(f.value);
    }
    function T() {
      u.value = "month";
    }
    function I() {
      u.value = u.value === "months" ? "month" : "months";
    }
    function _() {
      u.value = u.value === "year" ? "month" : "year";
    }
    function D(P) {
      u.value === "months" && I(), t("update:month", P);
    }
    function w(P) {
      u.value === "year" && _(), t("update:year", P);
    }
    return J(o, (P, A) => {
      const V = Ae(A), x = Ae(P);
      if (!x.length) return;
      const M = l.date(V[V.length - 1]), E = l.date(x[x.length - 1]), N = l.getMonth(E), j = l.getYear(E);
      N !== f.value && (f.value = N, D(f.value)), j !== d.value && (d.value = j, w(d.value)), g.value = l.isBefore(M, E);
    }), z(() => {
      const P = Wa.filterProps(e), A = Zo.filterProps(e), V = Qo.filterProps(e), x = Jo.filterProps(e), M = Ce(er.filterProps(e), ["modelValue"]), E = Ce(tr.filterProps(e), ["modelValue"]), N = {
        header: y.value,
        transition: m.value
      };
      return r(Wa, O(P, {
        class: ["v-date-picker", `v-date-picker--${u.value}`, {
          "v-date-picker--show-week": e.showWeek
        }, e.class],
        style: e.style
      }), {
        title: () => {
          var j;
          return ((j = a.title) == null ? void 0 : j.call(a)) ?? r("div", {
            class: "v-date-picker__title"
          }, [i(e.title)]);
        },
        header: () => a.header ? r(de, {
          defaults: {
            VDatePickerHeader: {
              ...N
            }
          }
        }, {
          default: () => {
            var j;
            return [(j = a.header) == null ? void 0 : j.call(a, N)];
          }
        }) : r(Qo, O({
          key: "header"
        }, V, N, {
          onClick: u.value !== "month" ? T : void 0
        }), {
          ...a,
          default: void 0
        }),
        default: () => r(ie, null, [r(Zo, O(A, {
          disabled: k.value,
          text: h.value,
          "onClick:next": S,
          "onClick:prev": C,
          "onClick:month": I,
          "onClick:year": _
        }), null), r($a, {
          hideOnLeave: !0
        }, {
          default: () => [u.value === "months" ? r(er, O({
            key: "date-picker-months"
          }, M, {
            modelValue: f.value,
            "onUpdate:modelValue": [(j) => f.value = j, D],
            min: s.value,
            max: c.value,
            year: d.value
          }), null) : u.value === "year" ? r(tr, O({
            key: "date-picker-years"
          }, E, {
            modelValue: d.value,
            "onUpdate:modelValue": [(j) => d.value = j, w],
            min: s.value,
            max: c.value
          }), null) : r(Jo, O({
            key: "date-picker-month"
          }, x, {
            modelValue: o.value,
            "onUpdate:modelValue": (j) => o.value = j,
            month: f.value,
            "onUpdate:month": [(j) => f.value = j, D],
            year: d.value,
            "onUpdate:year": [(j) => d.value = j, w],
            min: s.value,
            max: c.value
          }), null)]
        })]),
        actions: a.actions
      });
    }), {};
  }
}), Jh = p({
  actionText: String,
  bgColor: String,
  color: String,
  icon: ue,
  image: String,
  justify: {
    type: String,
    default: "center"
  },
  headline: String,
  title: String,
  text: String,
  textWidth: {
    type: [Number, String],
    default: 500
  },
  href: String,
  to: String,
  ...le(),
  ...Re(),
  ...pt({
    size: void 0
  }),
  ...ke()
}, "VEmptyState"), Ak = L()({
  name: "VEmptyState",
  props: Jh(),
  emits: {
    "click:action": (e) => !0
  },
  setup(e, n) {
    let {
      emit: t,
      slots: a
    } = n;
    const {
      themeClasses: l
    } = Ve(e), {
      backgroundColorClasses: i,
      backgroundColorStyles: o
    } = Pe($(e, "bgColor")), {
      dimensionStyles: u
    } = He(e), {
      displayClasses: s
    } = ht();
    function c(v) {
      t("click:action", v);
    }
    return z(() => {
      var m, k, S;
      const v = !!(a.actions || e.actionText), f = !!(a.headline || e.headline), d = !!(a.title || e.title), g = !!(a.text || e.text), y = !!(a.media || e.image || e.icon), h = e.size || (e.image ? 200 : 96);
      return r("div", {
        class: ["v-empty-state", {
          [`v-empty-state--${e.justify}`]: !0
        }, l.value, i.value, s.value, e.class],
        style: [o.value, u.value, e.style]
      }, [y && r("div", {
        key: "media",
        class: "v-empty-state__media"
      }, [a.media ? r(de, {
        key: "media-defaults",
        defaults: {
          VImg: {
            src: e.image,
            height: h
          },
          VIcon: {
            size: h,
            icon: e.icon
          }
        }
      }, {
        default: () => [a.media()]
      }) : r(ie, null, [e.image ? r(jt, {
        key: "image",
        src: e.image,
        height: h
      }, null) : e.icon ? r(Se, {
        key: "icon",
        color: e.color,
        size: h,
        icon: e.icon
      }, null) : void 0])]), f && r("div", {
        key: "headline",
        class: "v-empty-state__headline"
      }, [((m = a.headline) == null ? void 0 : m.call(a)) ?? e.headline]), d && r("div", {
        key: "title",
        class: "v-empty-state__title"
      }, [((k = a.title) == null ? void 0 : k.call(a)) ?? e.title]), g && r("div", {
        key: "text",
        class: "v-empty-state__text",
        style: {
          maxWidth: te(e.textWidth)
        }
      }, [((S = a.text) == null ? void 0 : S.call(a)) ?? e.text]), a.default && r("div", {
        key: "content",
        class: "v-empty-state__content"
      }, [a.default()]), v && r("div", {
        key: "actions",
        class: "v-empty-state__actions"
      }, [r(de, {
        defaults: {
          VBtn: {
            class: "v-empty-state__action-btn",
            color: e.color ?? "surface-variant",
            text: e.actionText
          }
        }
      }, {
        default: () => {
          var C;
          return [((C = a.actions) == null ? void 0 : C.call(a, {
            props: {
              onClick: c
            }
          })) ?? r(fe, {
            onClick: c
          }, null)];
        }
      })])]);
    }), {};
  }
}), ua = Symbol.for("vuetify:v-expansion-panel"), yc = p({
  ...le(),
  ...Ci()
}, "VExpansionPanelText"), ar = L()({
  name: "VExpansionPanelText",
  props: yc(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    const a = be(ua);
    if (!a) throw new Error("[Vuetify] v-expansion-panel-text needs to be placed inside v-expansion-panel");
    const {
      hasContent: l,
      onAfterLeave: i
    } = Vi(e, a.isSelected);
    return z(() => r(vi, {
      onAfterLeave: i
    }, {
      default: () => {
        var o;
        return [$e(r("div", {
          class: ["v-expansion-panel-text", e.class],
          style: e.style
        }, [t.default && l.value && r("div", {
          class: "v-expansion-panel-text__wrapper"
        }, [(o = t.default) == null ? void 0 : o.call(t)])]), [[Ct, a.isSelected.value]])];
      }
    })), {};
  }
}), bc = p({
  color: String,
  expandIcon: {
    type: ue,
    default: "$expand"
  },
  collapseIcon: {
    type: ue,
    default: "$collapse"
  },
  hideActions: Boolean,
  focusable: Boolean,
  static: Boolean,
  ripple: {
    type: [Boolean, Object],
    default: !1
  },
  readonly: Boolean,
  ...le(),
  ...Re()
}, "VExpansionPanelTitle"), lr = L()({
  name: "VExpansionPanelTitle",
  directives: {
    Ripple: Xt
  },
  props: bc(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    const a = be(ua);
    if (!a) throw new Error("[Vuetify] v-expansion-panel-title needs to be placed inside v-expansion-panel");
    const {
      backgroundColorClasses: l,
      backgroundColorStyles: i
    } = Pe(e, "color"), {
      dimensionStyles: o
    } = He(e), u = b(() => ({
      collapseIcon: e.collapseIcon,
      disabled: a.disabled.value,
      expanded: a.isSelected.value,
      expandIcon: e.expandIcon,
      readonly: e.readonly
    })), s = b(() => a.isSelected.value ? e.collapseIcon : e.expandIcon);
    return z(() => {
      var c;
      return $e(r("button", {
        class: ["v-expansion-panel-title", {
          "v-expansion-panel-title--active": a.isSelected.value,
          "v-expansion-panel-title--focusable": e.focusable,
          "v-expansion-panel-title--static": e.static
        }, l.value, e.class],
        style: [i.value, o.value, e.style],
        type: "button",
        tabindex: a.disabled.value ? -1 : void 0,
        disabled: a.disabled.value,
        "aria-expanded": a.isSelected.value,
        onClick: e.readonly ? void 0 : a.toggle
      }, [r("span", {
        class: "v-expansion-panel-title__overlay"
      }, null), (c = t.default) == null ? void 0 : c.call(t, u.value), !e.hideActions && r(de, {
        defaults: {
          VIcon: {
            icon: s.value
          }
        }
      }, {
        default: () => {
          var v;
          return [r("span", {
            class: "v-expansion-panel-title__icon"
          }, [((v = t.actions) == null ? void 0 : v.call(t, u.value)) ?? r(Se, null, null)])];
        }
      })]), [[mt("ripple"), e.ripple]]);
    }), {};
  }
}), ji = p({
  title: String,
  text: String,
  bgColor: String,
  ...je(),
  ...kn(),
  ...Ee(),
  ...ge(),
  ...bc(),
  ...yc()
}, "VExpansionPanel"), ir = L()({
  name: "VExpansionPanel",
  props: ji(),
  emits: {
    "group:selected": (e) => !0
  },
  setup(e, n) {
    let {
      slots: t
    } = n;
    const a = Sn(e, ua), {
      backgroundColorClasses: l,
      backgroundColorStyles: i
    } = Pe(e, "bgColor"), {
      elevationClasses: o
    } = qe(e), {
      roundedClasses: u
    } = Oe(e), s = b(() => (a == null ? void 0 : a.disabled.value) || e.disabled), c = b(() => a.group.items.value.reduce((d, g, y) => (a.group.selected.value.includes(g.id) && d.push(y), d), [])), v = b(() => {
      const d = a.group.items.value.findIndex((g) => g.id === a.id);
      return !a.isSelected.value && c.value.some((g) => g - d === 1);
    }), f = b(() => {
      const d = a.group.items.value.findIndex((g) => g.id === a.id);
      return !a.isSelected.value && c.value.some((g) => g - d === -1);
    });
    return De(ua, a), z(() => {
      const d = !!(t.text || e.text), g = !!(t.title || e.title), y = lr.filterProps(e), h = ar.filterProps(e);
      return r(e.tag, {
        class: ["v-expansion-panel", {
          "v-expansion-panel--active": a.isSelected.value,
          "v-expansion-panel--before-active": v.value,
          "v-expansion-panel--after-active": f.value,
          "v-expansion-panel--disabled": s.value
        }, u.value, l.value, e.class],
        style: [i.value, e.style]
      }, {
        default: () => [r("div", {
          class: ["v-expansion-panel__shadow", ...o.value]
        }, null), r(de, {
          defaults: {
            VExpansionPanelTitle: {
              ...y
            },
            VExpansionPanelText: {
              ...h
            }
          }
        }, {
          default: () => {
            var m;
            return [g && r(lr, {
              key: "title"
            }, {
              default: () => [t.title ? t.title() : e.title]
            }), d && r(ar, {
              key: "text"
            }, {
              default: () => [t.text ? t.text() : e.text]
            }), (m = t.default) == null ? void 0 : m.call(t)];
          }
        })]
      });
    }), {
      groupItem: a
    };
  }
}), ey = ["default", "accordion", "inset", "popout"], kc = p({
  flat: Boolean,
  ...bn(),
  ...Ot(ji(), ["bgColor", "collapseIcon", "color", "eager", "elevation", "expandIcon", "focusable", "hideActions", "readonly", "ripple", "rounded", "tile", "static"]),
  ...ke(),
  ...le(),
  ...ge(),
  variant: {
    type: String,
    default: "default",
    validator: (e) => ey.includes(e)
  }
}, "VExpansionPanels"), or = L()({
  name: "VExpansionPanels",
  props: kc(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, n) {
    let {
      slots: t
    } = n;
    const {
      next: a,
      prev: l
    } = qt(e, ua), {
      themeClasses: i
    } = Ve(e), o = b(() => e.variant && `v-expansion-panels--variant-${e.variant}`);
    return pe({
      VExpansionPanel: {
        bgColor: $(e, "bgColor"),
        collapseIcon: $(e, "collapseIcon"),
        color: $(e, "color"),
        eager: $(e, "eager"),
        elevation: $(e, "elevation"),
        expandIcon: $(e, "expandIcon"),
        focusable: $(e, "focusable"),
        hideActions: $(e, "hideActions"),
        readonly: $(e, "readonly"),
        ripple: $(e, "ripple"),
        rounded: $(e, "rounded"),
        static: $(e, "static")
      }
    }), z(() => r(e.tag, {
      class: ["v-expansion-panels", {
        "v-expansion-panels--flat": e.flat,
        "v-expansion-panels--tile": e.tile
      }, i.value, o.value, e.class],
      style: e.style
    }, {
      default: () => {
        var u;
        return [(u = t.default) == null ? void 0 : u.call(t, {
          prev: l,
          next: a
        })];
      }
    })), {
      next: a,
      prev: l
    };
  }
}), ty = p({
  app: Boolean,
  appear: Boolean,
  extended: Boolean,
  layout: Boolean,
  offset: Boolean,
  modelValue: {
    type: Boolean,
    default: !0
  },
  ...Ce(nl({
    active: !0
  }), ["location"]),
  ...mn(),
  ...Rt(),
  ...Vt({
    transition: "fab-transition"
  })
}, "VFab"), Dk = L()({
  name: "VFab",
  props: ty(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, n) {
    let {
      slots: t
    } = n;
    const a = oe(e, "modelValue"), l = G(56), i = U(), {
      resizeRef: o
    } = xt((f) => {
      f.length && (l.value = f[0].target.clientHeight);
    }), u = b(() => e.app || e.absolute), s = b(() => {
      var f;
      return u.value ? ((f = e.location) == null ? void 0 : f.split(" ").shift()) ?? "bottom" : !1;
    }), c = b(() => {
      var f;
      return u.value ? ((f = e.location) == null ? void 0 : f.split(" ")[1]) ?? "end" : !1;
    });
    ot(() => e.app, () => {
      const f = gn({
        id: e.name,
        order: b(() => parseInt(e.order, 10)),
        position: s,
        layoutSize: b(() => e.layout ? l.value + 24 : 0),
        elementSize: b(() => l.value + 24),
        active: b(() => e.app && a.value),
        absolute: $(e, "absolute")
      });
      Fe(() => {
        i.value = f.layoutItemStyles.value;
      });
    });
    const v = U();
    return z(() => {
      const f = fe.filterProps(e);
      return r("div", {
        ref: v,
        class: ["v-fab", {
          "v-fab--absolute": e.absolute,
          "v-fab--app": !!e.app,
          "v-fab--extended": e.extended,
          "v-fab--offset": e.offset,
          [`v-fab--${s.value}`]: u.value,
          [`v-fab--${c.value}`]: u.value
        }, e.class],
        style: [e.app ? {
          ...i.value
        } : {
          height: e.absolute ? "100%" : "inherit"
        }, e.style]
      }, [r("div", {
        class: "v-fab__container"
      }, [r(tt, {
        appear: e.appear,
        transition: e.transition
      }, {
        default: () => [$e(r(fe, O({
          ref: o
        }, f, {
          active: void 0,
          location: void 0
        }), t), [[Ct, e.active]])]
      })])]);
    }), {};
  }
}), ny = p({
  chips: Boolean,
  counter: Boolean,
  counterSizeString: {
    type: String,
    default: "$vuetify.fileInput.counterSize"
  },
  counterString: {
    type: String,
    default: "$vuetify.fileInput.counter"
  },
  hideInput: Boolean,
  multiple: Boolean,
  showSize: {
    type: [Boolean, Number, String],
    default: !1,
    validator: (e) => typeof e == "boolean" || [1e3, 1024].includes(Number(e))
  },
  ...Ht({
    prependIcon: "$file"
  }),
  modelValue: {
    type: [Array, Object],
    default: (e) => e.multiple ? [] : null,
    validator: (e) => Ae(e).every((n) => n != null && typeof n == "object")
  },
  ...ba({
    clearable: !0
  })
}, "VFileInput"), Bk = L()({
  name: "VFileInput",
  inheritAttrs: !1,
  props: ny(),
  emits: {
    "click:control": (e) => !0,
    "mousedown:control": (e) => !0,
    "update:focused": (e) => !0,
    "update:modelValue": (e) => !0
  },
  setup(e, n) {
    let {
      attrs: t,
      emit: a,
      slots: l
    } = n;
    const {
      t: i
    } = Te(), o = oe(e, "modelValue", e.modelValue, (V) => Ae(V), (V) => !e.multiple && Array.isArray(V) ? V[0] : V), {
      isFocused: u,
      focus: s,
      blur: c
    } = Pt(e), v = b(() => typeof e.showSize != "boolean" ? e.showSize : void 0), f = b(() => (o.value ?? []).reduce((V, x) => {
      let {
        size: M = 0
      } = x;
      return V + M;
    }, 0)), d = b(() => Dl(f.value, v.value)), g = b(() => (o.value ?? []).map((V) => {
      const {
        name: x = "",
        size: M = 0
      } = V;
      return e.showSize ? `${x} (${Dl(M, v.value)})` : x;
    })), y = b(() => {
      var x;
      const V = ((x = o.value) == null ? void 0 : x.length) ?? 0;
      return e.showSize ? i(e.counterSizeString, V, d.value) : i(e.counterString, V);
    }), h = U(), m = U(), k = U(), S = b(() => u.value || e.active), C = b(() => ["plain", "underlined"].includes(e.variant));
    function T() {
      var V;
      k.value !== document.activeElement && ((V = k.value) == null || V.focus()), u.value || s();
    }
    function I(V) {
      var x;
      (x = k.value) == null || x.click();
    }
    function _(V) {
      a("mousedown:control", V);
    }
    function D(V) {
      var x;
      (x = k.value) == null || x.click(), a("click:control", V);
    }
    function w(V) {
      V.stopPropagation(), T(), we(() => {
        o.value = [], Ga(e["onClick:clear"], V);
      });
    }
    function P(V) {
      V.preventDefault();
    }
    function A(V) {
      V.preventDefault(), V.dataTransfer && (o.value = [...V.dataTransfer.files ?? []]);
    }
    return J(o, (V) => {
      (!Array.isArray(V) || !V.length) && k.value && (k.value.value = "");
    }), z(() => {
      const V = !!(l.counter || e.counter), x = !!(V || l.details), [M, E] = Nt(t), {
        modelValue: N,
        ...j
      } = at.filterProps(e), ee = fn.filterProps(e);
      return r(at, O({
        ref: h,
        modelValue: e.multiple ? o.value : o.value[0],
        class: ["v-file-input", {
          "v-file-input--chips": !!e.chips,
          "v-file-input--hide": e.hideInput,
          "v-input--plain-underlined": C.value
        }, e.class],
        style: e.style,
        "onClick:prepend": I
      }, M, j, {
        centerAffix: !C.value,
        focused: u.value
      }), {
        ...l,
        default: (W) => {
          let {
            id: R,
            isDisabled: F,
            isDirty: B,
            isReadonly: H,
            isValid: Z
          } = W;
          return r(fn, O({
            ref: m,
            "prepend-icon": e.prependIcon,
            onMousedown: _,
            onClick: D,
            "onClick:clear": w,
            "onClick:prependInner": e["onClick:prependInner"],
            "onClick:appendInner": e["onClick:appendInner"]
          }, ee, {
            id: R.value,
            active: S.value || B.value,
            dirty: B.value || e.dirty,
            disabled: F.value,
            focused: u.value,
            error: Z.value === !1,
            onDragover: P,
            onDrop: A
          }), {
            ...l,
            default: (Q) => {
              var K;
              let {
                props: {
                  class: re,
                  ...X
                }
              } = Q;
              return r(ie, null, [r("input", O({
                ref: k,
                type: "file",
                readonly: H.value,
                disabled: F.value,
                multiple: e.multiple,
                name: e.name,
                onClick: (ne) => {
                  ne.stopPropagation(), H.value && ne.preventDefault(), T();
                },
                onChange: (ne) => {
                  if (!ne.target) return;
                  const ye = ne.target;
                  o.value = [...ye.files ?? []];
                },
                onFocus: T,
                onBlur: c
              }, X, E), null), r("div", {
                class: re
              }, [!!((K = o.value) != null && K.length) && !e.hideInput && (l.selection ? l.selection({
                fileNames: g.value,
                totalBytes: f.value,
                totalBytesReadable: d.value
              }) : e.chips ? g.value.map((ne) => r(Yn, {
                key: ne,
                size: "small",
                text: ne
              }, null)) : g.value.join(", "))])]);
            }
          });
        },
        details: x ? (W) => {
          var R, F;
          return r(ie, null, [(R = l.details) == null ? void 0 : R.call(l, W), V && r(ie, null, [r("span", null, null), r(Pi, {
            active: !!((F = o.value) != null && F.length),
            value: y.value,
            disabled: e.disabled
          }, l.counter)])]);
        } : void 0
      });
    }), ct({}, h, m, k);
  }
}), ay = p({
  app: Boolean,
  color: String,
  height: {
    type: [Number, String],
    default: "auto"
  },
  ...st(),
  ...le(),
  ...je(),
  ...mn(),
  ...Ee(),
  ...ge({
    tag: "footer"
  }),
  ...ke()
}, "VFooter"), Mk = L()({
  name: "VFooter",
  props: ay(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    const a = U(), {
      themeClasses: l
    } = Ve(e), {
      backgroundColorClasses: i,
      backgroundColorStyles: o
    } = Pe($(e, "color")), {
      borderClasses: u
    } = bt(e), {
      elevationClasses: s
    } = qe(e), {
      roundedClasses: c
    } = Oe(e), v = G(32), {
      resizeRef: f
    } = xt((g) => {
      g.length && (v.value = g[0].target.clientHeight);
    }), d = b(() => e.height === "auto" ? v.value : parseInt(e.height, 10));
    return ot(() => e.app, () => {
      const g = gn({
        id: e.name,
        order: b(() => parseInt(e.order, 10)),
        position: b(() => "bottom"),
        layoutSize: d,
        elementSize: b(() => e.height === "auto" ? void 0 : d.value),
        active: b(() => e.app),
        absolute: $(e, "absolute")
      });
      Fe(() => {
        a.value = g.layoutItemStyles.value;
      });
    }), z(() => r(e.tag, {
      ref: f,
      class: ["v-footer", l.value, i.value, u.value, s.value, c.value, e.class],
      style: [o.value, e.app ? a.value : {
        height: te(e.height)
      }, e.style]
    }, t)), {};
  }
}), ly = p({
  ...le(),
  ...Of()
}, "VForm"), pk = L()({
  name: "VForm",
  props: ly(),
  emits: {
    "update:modelValue": (e) => !0,
    submit: (e) => !0
  },
  setup(e, n) {
    let {
      slots: t,
      emit: a
    } = n;
    const l = Nf(e), i = U();
    function o(s) {
      s.preventDefault(), l.reset();
    }
    function u(s) {
      const c = s, v = l.validate();
      c.then = v.then.bind(v), c.catch = v.catch.bind(v), c.finally = v.finally.bind(v), a("submit", c), c.defaultPrevented || v.then((f) => {
        var g;
        let {
          valid: d
        } = f;
        d && ((g = i.value) == null || g.submit());
      }), c.preventDefault();
    }
    return z(() => {
      var s;
      return r("form", {
        ref: i,
        class: ["v-form", e.class],
        style: e.style,
        novalidate: !0,
        onReset: o,
        onSubmit: u
      }, [(s = t.default) == null ? void 0 : s.call(t, l)]);
    }), ct(l, i);
  }
}), iy = p({
  disabled: Boolean,
  modelValue: {
    type: Boolean,
    default: null
  },
  ...ll()
}, "VHover"), Ek = L()({
  name: "VHover",
  props: iy(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, n) {
    let {
      slots: t
    } = n;
    const a = oe(e, "modelValue"), {
      runOpenDelay: l,
      runCloseDelay: i
    } = xi(e, (o) => !e.disabled && (a.value = o));
    return () => {
      var o;
      return (o = t.default) == null ? void 0 : o.call(t, {
        isHovering: a.value,
        props: {
          onMouseenter: l,
          onMouseleave: i
        }
      });
    };
  }
}), oy = p({
  color: String,
  direction: {
    type: String,
    default: "vertical",
    validator: (e) => ["vertical", "horizontal"].includes(e)
  },
  side: {
    type: String,
    default: "end",
    validator: (e) => ["start", "end", "both"].includes(e)
  },
  mode: {
    type: String,
    default: "intersect",
    validator: (e) => ["intersect", "manual"].includes(e)
  },
  margin: [Number, String],
  loadMoreText: {
    type: String,
    default: "$vuetify.infiniteScroll.loadMore"
  },
  emptyText: {
    type: String,
    default: "$vuetify.infiniteScroll.empty"
  },
  ...Re(),
  ...ge()
}, "VInfiniteScroll"), rr = gt({
  name: "VInfiniteScrollIntersect",
  props: {
    side: {
      type: String,
      required: !0
    },
    rootMargin: String
  },
  emits: {
    intersect: (e, n) => !0
  },
  setup(e, n) {
    let {
      emit: t
    } = n;
    const {
      intersectionRef: a,
      isIntersecting: l
    } = el();
    return J(l, async (i) => {
      t("intersect", e.side, i);
    }), z(() => r("div", {
      class: "v-infinite-scroll-intersect",
      style: {
        "--v-infinite-margin-size": e.rootMargin
      },
      ref: a
    }, [_t(" ")])), {};
  }
}), Fk = L()({
  name: "VInfiniteScroll",
  props: oy(),
  emits: {
    load: (e) => !0
  },
  setup(e, n) {
    let {
      slots: t,
      emit: a
    } = n;
    const l = U(), i = G("ok"), o = G("ok"), u = b(() => te(e.margin)), s = G(!1);
    function c(I) {
      if (!l.value) return;
      const _ = e.direction === "vertical" ? "scrollTop" : "scrollLeft";
      l.value[_] = I;
    }
    function v() {
      if (!l.value) return 0;
      const I = e.direction === "vertical" ? "scrollTop" : "scrollLeft";
      return l.value[I];
    }
    function f() {
      if (!l.value) return 0;
      const I = e.direction === "vertical" ? "scrollHeight" : "scrollWidth";
      return l.value[I];
    }
    function d() {
      if (!l.value) return 0;
      const I = e.direction === "vertical" ? "clientHeight" : "clientWidth";
      return l.value[I];
    }
    Ue(() => {
      l.value && (e.side === "start" ? c(f()) : e.side === "both" && c(f() / 2 - d() / 2));
    });
    function g(I, _) {
      I === "start" ? i.value = _ : I === "end" && (o.value = _);
    }
    function y(I) {
      return I === "start" ? i.value : o.value;
    }
    let h = 0;
    function m(I, _) {
      s.value = _, s.value && k(I);
    }
    function k(I) {
      if (e.mode !== "manual" && !s.value) return;
      const _ = y(I);
      if (!l.value || ["empty", "loading"].includes(_)) return;
      h = f(), g(I, "loading");
      function D(w) {
        g(I, w), we(() => {
          w === "empty" || w === "error" || (w === "ok" && I === "start" && c(f() - h + v()), e.mode !== "manual" && we(() => {
            window.requestAnimationFrame(() => {
              window.requestAnimationFrame(() => {
                window.requestAnimationFrame(() => {
                  k(I);
                });
              });
            });
          }));
        });
      }
      a("load", {
        side: I,
        done: D
      });
    }
    const {
      t: S
    } = Te();
    function C(I, _) {
      var P, A, V, x, M;
      if (e.side !== I && e.side !== "both") return;
      const D = () => k(I), w = {
        side: I,
        props: {
          onClick: D,
          color: e.color
        }
      };
      return _ === "error" ? (P = t.error) == null ? void 0 : P.call(t, w) : _ === "empty" ? ((A = t.empty) == null ? void 0 : A.call(t, w)) ?? r("div", null, [S(e.emptyText)]) : e.mode === "manual" ? _ === "loading" ? ((V = t.loading) == null ? void 0 : V.call(t, w)) ?? r(dn, {
        indeterminate: !0,
        color: e.color
      }, null) : ((x = t["load-more"]) == null ? void 0 : x.call(t, w)) ?? r(fe, {
        variant: "outlined",
        color: e.color,
        onClick: D
      }, {
        default: () => [S(e.loadMoreText)]
      }) : ((M = t.loading) == null ? void 0 : M.call(t, w)) ?? r(dn, {
        indeterminate: !0,
        color: e.color
      }, null);
    }
    const {
      dimensionStyles: T
    } = He(e);
    z(() => {
      const I = e.tag, _ = e.side === "start" || e.side === "both", D = e.side === "end" || e.side === "both", w = e.mode === "intersect";
      return r(I, {
        ref: l,
        class: ["v-infinite-scroll", `v-infinite-scroll--${e.direction}`, {
          "v-infinite-scroll--start": _,
          "v-infinite-scroll--end": D
        }],
        style: T.value
      }, {
        default: () => {
          var P;
          return [r("div", {
            class: "v-infinite-scroll__side"
          }, [C("start", i.value)]), _ && w && r(rr, {
            key: "start",
            side: "start",
            onIntersect: m,
            rootMargin: u.value
          }, null), (P = t.default) == null ? void 0 : P.call(t), D && w && r(rr, {
            key: "end",
            side: "end",
            onIntersect: m,
            rootMargin: u.value
          }, null), r("div", {
            class: "v-infinite-scroll__side"
          }, [C("end", o.value)])];
        }
      });
    });
  }
}), Sc = Symbol.for("vuetify:v-item-group"), ry = p({
  ...le(),
  ...bn({
    selectedClass: "v-item--selected"
  }),
  ...ge(),
  ...ke()
}, "VItemGroup"), $k = L()({
  name: "VItemGroup",
  props: ry(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, n) {
    let {
      slots: t
    } = n;
    const {
      themeClasses: a
    } = Ve(e), {
      isSelected: l,
      select: i,
      next: o,
      prev: u,
      selected: s
    } = qt(e, Sc);
    return () => r(e.tag, {
      class: ["v-item-group", a.value, e.class],
      style: e.style
    }, {
      default: () => {
        var c;
        return [(c = t.default) == null ? void 0 : c.call(t, {
          isSelected: l,
          select: i,
          next: o,
          prev: u,
          selected: s.value
        })];
      }
    });
  }
}), Lk = L()({
  name: "VItem",
  props: kn(),
  emits: {
    "group:selected": (e) => !0
  },
  setup(e, n) {
    let {
      slots: t
    } = n;
    const {
      isSelected: a,
      select: l,
      toggle: i,
      selectedClass: o,
      value: u,
      disabled: s
    } = Sn(e, Sc);
    return () => {
      var c;
      return (c = t.default) == null ? void 0 : c.call(t, {
        isSelected: a.value,
        selectedClass: o.value,
        select: l,
        toggle: i,
        value: u.value,
        disabled: s.value
      });
    };
  }
}), Ok = Bt("v-kbd", "kbd"), uy = p({
  ...le(),
  ...Re(),
  ...fu()
}, "VLayout"), Nk = L()({
  name: "VLayout",
  props: uy(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    const {
      layoutClasses: a,
      layoutStyles: l,
      getLayoutItem: i,
      items: o,
      layoutRef: u
    } = gu(e), {
      dimensionStyles: s
    } = He(e);
    return z(() => {
      var c;
      return r("div", {
        ref: u,
        class: [a.value, e.class],
        style: [s.value, l.value, e.style]
      }, [(c = t.default) == null ? void 0 : c.call(t)]);
    }), {
      getLayoutItem: i,
      items: o
    };
  }
}), sy = p({
  position: {
    type: String,
    required: !0
  },
  size: {
    type: [Number, String],
    default: 300
  },
  modelValue: Boolean,
  ...le(),
  ...mn()
}, "VLayoutItem"), Rk = L()({
  name: "VLayoutItem",
  props: sy(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    const {
      layoutItemStyles: a
    } = gn({
      id: e.name,
      order: b(() => parseInt(e.order, 10)),
      position: $(e, "position"),
      elementSize: $(e, "size"),
      layoutSize: $(e, "size"),
      active: $(e, "modelValue"),
      absolute: $(e, "absolute")
    });
    return () => {
      var l;
      return r("div", {
        class: ["v-layout-item", e.class],
        style: [a.value, e.style]
      }, [(l = t.default) == null ? void 0 : l.call(t)]);
    };
  }
}), cy = p({
  modelValue: Boolean,
  options: {
    type: Object,
    // For more information on types, navigate to:
    // https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
    default: () => ({
      root: void 0,
      rootMargin: void 0,
      threshold: void 0
    })
  },
  ...le(),
  ...Re(),
  ...ge(),
  ...Vt({
    transition: "fade-transition"
  })
}, "VLazy"), Hk = L()({
  name: "VLazy",
  directives: {
    intersect: Ja
  },
  props: cy(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, n) {
    let {
      slots: t
    } = n;
    const {
      dimensionStyles: a
    } = He(e), l = oe(e, "modelValue");
    function i(o) {
      l.value || (l.value = o);
    }
    return z(() => $e(r(e.tag, {
      class: ["v-lazy", e.class],
      style: [a.value, e.style]
    }, {
      default: () => [l.value && r(tt, {
        transition: e.transition,
        appear: !0
      }, {
        default: () => {
          var o;
          return [(o = t.default) == null ? void 0 : o.call(t)];
        }
      })]
    }), [[mt("intersect"), {
      handler: i,
      options: e.options
    }, null]])), {};
  }
}), dy = p({
  locale: String,
  fallbackLocale: String,
  messages: Object,
  rtl: {
    type: Boolean,
    default: void 0
  },
  ...le()
}, "VLocaleProvider"), zk = L()({
  name: "VLocaleProvider",
  props: dy(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    const {
      rtlClasses: a
    } = Gd(e);
    return z(() => {
      var l;
      return r("div", {
        class: ["v-locale-provider", a.value, e.class],
        style: e.style
      }, [(l = t.default) == null ? void 0 : l.call(t)]);
    }), {};
  }
}), vy = p({
  scrollable: Boolean,
  ...le(),
  ...Re(),
  ...ge({
    tag: "main"
  })
}, "VMain"), Wk = L()({
  name: "VMain",
  props: vy(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    const {
      dimensionStyles: a
    } = He(e), {
      mainStyles: l
    } = mu(), {
      ssrBootStyles: i
    } = hn();
    return z(() => r(e.tag, {
      class: ["v-main", {
        "v-main--scrollable": e.scrollable
      }, e.class],
      style: [l.value, i.value, a.value, e.style]
    }, {
      default: () => {
        var o, u;
        return [e.scrollable ? r("div", {
          class: "v-main__scroller"
        }, [(o = t.default) == null ? void 0 : o.call(t)]) : (u = t.default) == null ? void 0 : u.call(t)];
      }
    })), {};
  }
});
function fy(e) {
  let {
    rootEl: n,
    isSticky: t,
    layoutItemStyles: a
  } = e;
  const l = G(!1), i = G(0), o = b(() => {
    const c = typeof l.value == "boolean" ? "top" : l.value;
    return [t.value ? {
      top: "auto",
      bottom: "auto",
      height: void 0
    } : void 0, l.value ? {
      [c]: te(i.value)
    } : {
      top: a.value.top
    }];
  });
  Ue(() => {
    J(t, (c) => {
      c ? window.addEventListener("scroll", s, {
        passive: !0
      }) : window.removeEventListener("scroll", s);
    }, {
      immediate: !0
    });
  }), Ze(() => {
    window.removeEventListener("scroll", s);
  });
  let u = 0;
  function s() {
    const c = u > window.scrollY ? "up" : "down", v = n.value.getBoundingClientRect(), f = parseFloat(a.value.top ?? 0), d = window.scrollY - Math.max(0, i.value - f), g = v.height + Math.max(i.value, f) - window.scrollY - window.innerHeight, y = parseFloat(getComputedStyle(n.value).getPropertyValue("--v-body-scroll-y")) || 0;
    v.height < window.innerHeight - f ? (l.value = "top", i.value = f) : c === "up" && l.value === "bottom" || c === "down" && l.value === "top" ? (i.value = window.scrollY + v.top - y, l.value = !0) : c === "down" && g <= 0 ? (i.value = 0, l.value = "bottom") : c === "up" && d <= 0 && (y ? l.value !== "top" && (i.value = -d + y + f, l.value = "top") : (i.value = v.top + d, l.value = "top")), u = window.scrollY;
  }
  return {
    isStuck: l,
    stickyStyles: o
  };
}
const my = 100, gy = 20;
function ur(e) {
  return (e < 0 ? -1 : 1) * Math.sqrt(Math.abs(e)) * 1.41421356237;
}
function sr(e) {
  if (e.length < 2)
    return 0;
  if (e.length === 2)
    return e[1].t === e[0].t ? 0 : (e[1].d - e[0].d) / (e[1].t - e[0].t);
  let n = 0;
  for (let t = e.length - 1; t > 0; t--) {
    if (e[t].t === e[t - 1].t)
      continue;
    const a = ur(n), l = (e[t].d - e[t - 1].d) / (e[t].t - e[t - 1].t);
    n += (l - a) * Math.abs(l), t === e.length - 1 && (n *= 0.5);
  }
  return ur(n) * 1e3;
}
function hy() {
  const e = {};
  function n(l) {
    Array.from(l.changedTouches).forEach((i) => {
      (e[i.identifier] ?? (e[i.identifier] = new rd(gy))).push([l.timeStamp, i]);
    });
  }
  function t(l) {
    Array.from(l.changedTouches).forEach((i) => {
      delete e[i.identifier];
    });
  }
  function a(l) {
    var c;
    const i = (c = e[l]) == null ? void 0 : c.values().reverse();
    if (!i)
      throw new Error(`No samples for touch id ${l}`);
    const o = i[0], u = [], s = [];
    for (const v of i) {
      if (o[0] - v[0] > my) break;
      u.push({
        t: v[0],
        d: v[1].clientX
      }), s.push({
        t: v[0],
        d: v[1].clientY
      });
    }
    return {
      x: sr(u),
      y: sr(s),
      get direction() {
        const {
          x: v,
          y: f
        } = this, [d, g] = [Math.abs(v), Math.abs(f)];
        return d > g && v >= 0 ? "right" : d > g && v <= 0 ? "left" : g > d && f >= 0 ? "down" : g > d && f <= 0 ? "up" : yy();
      }
    };
  }
  return {
    addMovement: n,
    endTouch: t,
    getVelocity: a
  };
}
function yy() {
  throw new Error();
}
function by(e) {
  let {
    el: n,
    isActive: t,
    isTemporary: a,
    width: l,
    touchless: i,
    position: o
  } = e;
  Ue(() => {
    window.addEventListener("touchstart", S, {
      passive: !0
    }), window.addEventListener("touchmove", C, {
      passive: !1
    }), window.addEventListener("touchend", T, {
      passive: !0
    });
  }), Ze(() => {
    window.removeEventListener("touchstart", S), window.removeEventListener("touchmove", C), window.removeEventListener("touchend", T);
  });
  const u = b(() => ["left", "right"].includes(o.value)), {
    addMovement: s,
    endTouch: c,
    getVelocity: v
  } = hy();
  let f = !1;
  const d = G(!1), g = G(0), y = G(0);
  let h;
  function m(_, D) {
    return (o.value === "left" ? _ : o.value === "right" ? document.documentElement.clientWidth - _ : o.value === "top" ? _ : o.value === "bottom" ? document.documentElement.clientHeight - _ : In()) - (D ? l.value : 0);
  }
  function k(_) {
    let D = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
    const w = o.value === "left" ? (_ - y.value) / l.value : o.value === "right" ? (document.documentElement.clientWidth - _ - y.value) / l.value : o.value === "top" ? (_ - y.value) / l.value : o.value === "bottom" ? (document.documentElement.clientHeight - _ - y.value) / l.value : In();
    return D ? Math.max(0, Math.min(1, w)) : w;
  }
  function S(_) {
    if (i.value) return;
    const D = _.changedTouches[0].clientX, w = _.changedTouches[0].clientY, P = 25, A = o.value === "left" ? D < P : o.value === "right" ? D > document.documentElement.clientWidth - P : o.value === "top" ? w < P : o.value === "bottom" ? w > document.documentElement.clientHeight - P : In(), V = t.value && (o.value === "left" ? D < l.value : o.value === "right" ? D > document.documentElement.clientWidth - l.value : o.value === "top" ? w < l.value : o.value === "bottom" ? w > document.documentElement.clientHeight - l.value : In());
    (A || V || t.value && a.value) && (h = [D, w], y.value = m(u.value ? D : w, t.value), g.value = k(u.value ? D : w), f = y.value > -20 && y.value < 80, c(_), s(_));
  }
  function C(_) {
    const D = _.changedTouches[0].clientX, w = _.changedTouches[0].clientY;
    if (f) {
      if (!_.cancelable) {
        f = !1;
        return;
      }
      const A = Math.abs(D - h[0]), V = Math.abs(w - h[1]);
      (u.value ? A > V && A > 3 : V > A && V > 3) ? (d.value = !0, f = !1) : (u.value ? V : A) > 3 && (f = !1);
    }
    if (!d.value) return;
    _.preventDefault(), s(_);
    const P = k(u.value ? D : w, !1);
    g.value = Math.max(0, Math.min(1, P)), P > 1 ? y.value = m(u.value ? D : w, !0) : P < 0 && (y.value = m(u.value ? D : w, !1));
  }
  function T(_) {
    if (f = !1, !d.value) return;
    s(_), d.value = !1;
    const D = v(_.changedTouches[0].identifier), w = Math.abs(D.x), P = Math.abs(D.y);
    (u.value ? w > P && w > 400 : P > w && P > 3) ? t.value = D.direction === ({
      left: "right",
      right: "left",
      top: "down",
      bottom: "up"
    }[o.value] || In()) : t.value = g.value > 0.5;
  }
  const I = b(() => d.value ? {
    transform: o.value === "left" ? `translateX(calc(-100% + ${g.value * l.value}px))` : o.value === "right" ? `translateX(calc(100% - ${g.value * l.value}px))` : o.value === "top" ? `translateY(calc(-100% + ${g.value * l.value}px))` : o.value === "bottom" ? `translateY(calc(100% - ${g.value * l.value}px))` : In(),
    transition: "none"
  } : void 0);
  return ot(d, () => {
    var w, P;
    const _ = ((w = n.value) == null ? void 0 : w.style.transform) ?? null, D = ((P = n.value) == null ? void 0 : P.style.transition) ?? null;
    Fe(() => {
      var A, V, x, M;
      (V = n.value) == null || V.style.setProperty("transform", ((A = I.value) == null ? void 0 : A.transform) || "none"), (M = n.value) == null || M.style.setProperty("transition", ((x = I.value) == null ? void 0 : x.transition) || null);
    }), Xe(() => {
      var A, V;
      (A = n.value) == null || A.style.setProperty("transform", _), (V = n.value) == null || V.style.setProperty("transition", D);
    });
  }), {
    isDragging: d,
    dragProgress: g,
    dragStyles: I
  };
}
function In() {
  throw new Error();
}
const ky = ["start", "end", "left", "right", "top", "bottom"], Sy = p({
  color: String,
  disableResizeWatcher: Boolean,
  disableRouteWatcher: Boolean,
  expandOnHover: Boolean,
  floating: Boolean,
  modelValue: {
    type: Boolean,
    default: null
  },
  permanent: Boolean,
  rail: {
    type: Boolean,
    default: null
  },
  railWidth: {
    type: [Number, String],
    default: 56
  },
  scrim: {
    type: [Boolean, String],
    default: !0
  },
  image: String,
  temporary: Boolean,
  persistent: Boolean,
  touchless: Boolean,
  width: {
    type: [Number, String],
    default: 256
  },
  location: {
    type: String,
    default: "start",
    validator: (e) => ky.includes(e)
  },
  sticky: Boolean,
  ...st(),
  ...le(),
  ...ll(),
  ...Gt({
    mobile: null
  }),
  ...je(),
  ...mn(),
  ...Ee(),
  ...ge({
    tag: "nav"
  }),
  ...ke()
}, "VNavigationDrawer"), jk = L()({
  name: "VNavigationDrawer",
  props: Sy(),
  emits: {
    "update:modelValue": (e) => !0,
    "update:rail": (e) => !0
  },
  setup(e, n) {
    let {
      attrs: t,
      emit: a,
      slots: l
    } = n;
    const {
      isRtl: i
    } = We(), {
      themeClasses: o
    } = Ve(e), {
      borderClasses: u
    } = bt(e), {
      backgroundColorClasses: s,
      backgroundColorStyles: c
    } = Pe($(e, "color")), {
      elevationClasses: v
    } = qe(e), {
      displayClasses: f,
      mobile: d
    } = ht(e), {
      roundedClasses: g
    } = Oe(e), y = Au(), h = oe(e, "modelValue", null, (F) => !!F), {
      ssrBootStyles: m
    } = hn(), {
      scopeId: k
    } = xn(), S = U(), C = G(!1), {
      runOpenDelay: T,
      runCloseDelay: I
    } = xi(e, (F) => {
      C.value = F;
    }), _ = b(() => e.rail && e.expandOnHover && C.value ? Number(e.width) : Number(e.rail ? e.railWidth : e.width)), D = b(() => Ml(e.location, i.value)), w = b(() => e.persistent), P = b(() => !e.permanent && (d.value || e.temporary)), A = b(() => e.sticky && !P.value && D.value !== "bottom");
    ot(() => e.expandOnHover && e.rail != null, () => {
      J(C, (F) => a("update:rail", !F));
    }), ot(() => !e.disableResizeWatcher, () => {
      J(P, (F) => !e.permanent && we(() => h.value = !F));
    }), ot(() => !e.disableRouteWatcher && !!y, () => {
      J(y.currentRoute, () => P.value && (h.value = !1));
    }), J(() => e.permanent, (F) => {
      F && (h.value = !0);
    }), e.modelValue == null && !P.value && (h.value = e.permanent || !d.value);
    const {
      isDragging: V,
      dragProgress: x
    } = by({
      el: S,
      isActive: h,
      isTemporary: P,
      width: _,
      touchless: $(e, "touchless"),
      position: D
    }), M = b(() => {
      const F = P.value ? 0 : e.rail && e.expandOnHover ? Number(e.railWidth) : _.value;
      return V.value ? F * x.value : F;
    }), {
      layoutItemStyles: E,
      layoutItemScrimStyles: N
    } = gn({
      id: e.name,
      order: b(() => parseInt(e.order, 10)),
      position: D,
      layoutSize: M,
      elementSize: _,
      active: b(() => h.value || V.value),
      disableTransitions: b(() => V.value),
      absolute: b(() => (
        // eslint-disable-next-line @typescript-eslint/no-use-before-define
        e.absolute || A.value && typeof j.value != "string"
      ))
    }), {
      isStuck: j,
      stickyStyles: ee
    } = fy({
      rootEl: S,
      isSticky: A,
      layoutItemStyles: E
    }), W = Pe(b(() => typeof e.scrim == "string" ? e.scrim : null)), R = b(() => ({
      ...V.value ? {
        opacity: x.value * 0.2,
        transition: "none"
      } : void 0,
      ...N.value
    }));
    return pe({
      VList: {
        bgColor: "transparent"
      }
    }), z(() => {
      const F = l.image || e.image;
      return r(ie, null, [r(e.tag, O({
        ref: S,
        onMouseenter: T,
        onMouseleave: I,
        class: ["v-navigation-drawer", `v-navigation-drawer--${D.value}`, {
          "v-navigation-drawer--expand-on-hover": e.expandOnHover,
          "v-navigation-drawer--floating": e.floating,
          "v-navigation-drawer--is-hovering": C.value,
          "v-navigation-drawer--rail": e.rail,
          "v-navigation-drawer--temporary": P.value,
          "v-navigation-drawer--persistent": w.value,
          "v-navigation-drawer--active": h.value,
          "v-navigation-drawer--sticky": A.value
        }, o.value, s.value, u.value, f.value, v.value, g.value, e.class],
        style: [c.value, E.value, m.value, ee.value, e.style]
      }, k, t), {
        default: () => {
          var B, H, Z;
          return [F && r("div", {
            key: "image",
            class: "v-navigation-drawer__img"
          }, [l.image ? r(de, {
            key: "image-defaults",
            disabled: !e.image,
            defaults: {
              VImg: {
                alt: "",
                cover: !0,
                height: "inherit",
                src: e.image
              }
            }
          }, l.image) : r(jt, {
            key: "image-img",
            alt: "",
            cover: !0,
            height: "inherit",
            src: e.image
          }, null)]), l.prepend && r("div", {
            class: "v-navigation-drawer__prepend"
          }, [(B = l.prepend) == null ? void 0 : B.call(l)]), r("div", {
            class: "v-navigation-drawer__content"
          }, [(H = l.default) == null ? void 0 : H.call(l)]), l.append && r("div", {
            class: "v-navigation-drawer__append"
          }, [(Z = l.append) == null ? void 0 : Z.call(l)])];
        }
      }), r(Wt, {
        name: "fade-transition"
      }, {
        default: () => [P.value && (V.value || h.value) && !!e.scrim && r("div", O({
          class: ["v-navigation-drawer__scrim", W.backgroundColorClasses.value],
          style: [R.value, W.backgroundColorStyles.value],
          onClick: () => {
            w.value || (h.value = !1);
          }
        }, k), null)]
      })]);
    }), {
      isStuck: j
    };
  }
}), Uk = gt({
  name: "VNoSsr",
  setup(e, n) {
    let {
      slots: t
    } = n;
    const a = vs();
    return () => {
      var l;
      return a.value && ((l = t.default) == null ? void 0 : l.call(t));
    };
  }
}), wy = p({
  autofocus: Boolean,
  divider: String,
  focusAll: Boolean,
  label: {
    type: String,
    default: "$vuetify.input.otp"
  },
  length: {
    type: [Number, String],
    default: 6
  },
  modelValue: {
    type: [Number, String],
    default: void 0
  },
  placeholder: String,
  type: {
    type: String,
    default: "number"
  },
  ...Re(),
  ...Un(),
  ...Ot(ba({
    variant: "outlined"
  }), ["baseColor", "bgColor", "class", "color", "disabled", "error", "loading", "rounded", "style", "theme", "variant"])
}, "VOtpInput"), Yk = L()({
  name: "VOtpInput",
  props: wy(),
  emits: {
    finish: (e) => !0,
    "update:focused": (e) => !0,
    "update:modelValue": (e) => !0
  },
  setup(e, n) {
    let {
      attrs: t,
      emit: a,
      slots: l
    } = n;
    const {
      dimensionStyles: i
    } = He(e), {
      isFocused: o,
      focus: u,
      blur: s
    } = Pt(e), c = oe(e, "modelValue", "", (w) => w == null ? [] : String(w).split(""), (w) => w.join("")), {
      t: v
    } = Te(), f = b(() => Number(e.length)), d = b(() => Array(f.value).fill(0)), g = U(-1), y = U(), h = U([]), m = b(() => h.value[g.value]);
    function k() {
      if (D(m.value.value)) {
        m.value.value = "";
        return;
      }
      const w = c.value.slice(), P = m.value.value;
      w[g.value] = P;
      let A = null;
      g.value > c.value.length ? A = c.value.length + 1 : g.value + 1 !== f.value && (A = "next"), c.value = w, A && on(y.value, A);
    }
    function S(w) {
      const P = c.value.slice(), A = g.value;
      let V = null;
      ["ArrowLeft", "ArrowRight", "Backspace", "Delete"].includes(w.key) && (w.preventDefault(), w.key === "ArrowLeft" ? V = "prev" : w.key === "ArrowRight" ? V = "next" : ["Backspace", "Delete"].includes(w.key) && (P[g.value] = "", c.value = P, g.value > 0 && w.key === "Backspace" ? V = "prev" : requestAnimationFrame(() => {
        var x;
        (x = h.value[A]) == null || x.select();
      })), requestAnimationFrame(() => {
        V != null && on(y.value, V);
      }));
    }
    function C(w, P) {
      var V, x;
      P.preventDefault(), P.stopPropagation();
      const A = ((V = P == null ? void 0 : P.clipboardData) == null ? void 0 : V.getData("Text").slice(0, f.value)) ?? "";
      D(A) || (c.value = A.split(""), (x = h.value) == null || x[w].blur());
    }
    function T() {
      c.value = [];
    }
    function I(w, P) {
      u(), g.value = P;
    }
    function _() {
      s(), g.value = -1;
    }
    function D(w) {
      return e.type === "number" && /[^0-9]/g.test(w);
    }
    return pe({
      VField: {
        color: b(() => e.color),
        bgColor: b(() => e.color),
        baseColor: b(() => e.baseColor),
        disabled: b(() => e.disabled),
        error: b(() => e.error),
        variant: b(() => e.variant)
      }
    }, {
      scoped: !0
    }), J(c, (w) => {
      w.length === f.value && a("finish", w.join(""));
    }, {
      deep: !0
    }), J(g, (w) => {
      w < 0 || we(() => {
        var P;
        (P = h.value[w]) == null || P.select();
      });
    }), z(() => {
      var A;
      const [w, P] = Nt(t);
      return r("div", O({
        class: ["v-otp-input", {
          "v-otp-input--divided": !!e.divider
        }, e.class],
        style: [e.style]
      }, w), [r("div", {
        ref: y,
        class: "v-otp-input__content",
        style: [i.value]
      }, [d.value.map((V, x) => r(ie, null, [e.divider && x !== 0 && r("span", {
        class: "v-otp-input__divider"
      }, [e.divider]), r(fn, {
        focused: o.value && e.focusAll || g.value === x,
        key: x
      }, {
        ...l,
        loader: void 0,
        default: () => r("input", {
          ref: (M) => h.value[x] = M,
          "aria-label": v(e.label, x + 1),
          autofocus: x === 0 && e.autofocus,
          autocomplete: "one-time-code",
          class: ["v-otp-input__field"],
          disabled: e.disabled,
          inputmode: e.type === "number" ? "numeric" : "text",
          min: e.type === "number" ? 0 : void 0,
          maxlength: x === 0 ? f.value : "1",
          placeholder: e.placeholder,
          type: e.type === "number" ? "text" : e.type,
          value: c.value[x],
          onInput: k,
          onFocus: (M) => I(M, x),
          onBlur: _,
          onKeydown: S,
          onPaste: (M) => C(x, M)
        }, null)
      })])), r("input", O({
        class: "v-otp-input-input",
        type: "hidden"
      }, P, {
        value: c.value.join("")
      }), null), r(Tt, {
        contained: !0,
        "content-class": "v-otp-input__loader",
        "model-value": !!e.loading,
        persistent: !0
      }, {
        default: () => {
          var V;
          return [((V = l.loader) == null ? void 0 : V.call(l)) ?? r(dn, {
            color: typeof e.loading == "boolean" ? void 0 : e.loading,
            indeterminate: !0,
            size: "24",
            width: "2"
          }, null)];
        }
      }), (A = l.default) == null ? void 0 : A.call(l)])]);
    }), {
      blur: () => {
        var w;
        (w = h.value) == null || w.some((P) => P.blur());
      },
      focus: () => {
        var w;
        (w = h.value) == null || w[0].focus();
      },
      reset: T,
      isFocused: o
    };
  }
});
function xy(e) {
  return Math.floor(Math.abs(e)) * Math.sign(e);
}
const Cy = p({
  scale: {
    type: [Number, String],
    default: 0.5
  },
  ...le()
}, "VParallax"), Gk = L()({
  name: "VParallax",
  props: Cy(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    const {
      intersectionRef: a,
      isIntersecting: l
    } = el(), {
      resizeRef: i,
      contentRect: o
    } = xt(), {
      height: u
    } = ht(), s = U();
    Fe(() => {
      var g;
      a.value = i.value = (g = s.value) == null ? void 0 : g.$el;
    });
    let c;
    J(l, (g) => {
      g ? (c = ri(a.value), c = c === document.scrollingElement ? document : c, c.addEventListener("scroll", d, {
        passive: !0
      }), d()) : c.removeEventListener("scroll", d);
    }), Ze(() => {
      c == null || c.removeEventListener("scroll", d);
    }), J(u, d), J(() => {
      var g;
      return (g = o.value) == null ? void 0 : g.height;
    }, d);
    const v = b(() => 1 - Me(Number(e.scale)));
    let f = -1;
    function d() {
      l.value && (cancelAnimationFrame(f), f = requestAnimationFrame(() => {
        var I;
        const g = ((I = s.value) == null ? void 0 : I.$el).querySelector(".v-img__img");
        if (!g) return;
        const y = c instanceof Document ? document.documentElement.clientHeight : c.clientHeight, h = c instanceof Document ? window.scrollY : c.scrollTop, m = a.value.getBoundingClientRect().top + h, k = o.value.height, S = m + (k - y) / 2, C = xy((h - S) * v.value), T = Math.max(1, (v.value * (y - k) + k) / k);
        g.style.setProperty("transform", `translateY(${C}px) scale(${T})`);
      }));
    }
    return z(() => r(jt, {
      class: ["v-parallax", {
        "v-parallax--active": l.value
      }, e.class],
      style: e.style,
      ref: s,
      cover: !0,
      onLoadstart: d,
      onLoad: d
    }, t)), {};
  }
}), Vy = p({
  ...al({
    falseIcon: "$radioOff",
    trueIcon: "$radioOn"
  })
}, "VRadio"), Kk = L()({
  name: "VRadio",
  props: Vy(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    return z(() => {
      const a = vn.filterProps(e);
      return r(vn, O(a, {
        class: ["v-radio", e.class],
        style: e.style,
        type: "radio"
      }), t);
    }), {};
  }
}), Py = p({
  height: {
    type: [Number, String],
    default: "auto"
  },
  ...Ht(),
  ...Ce(hi(), ["multiple"]),
  trueIcon: {
    type: ue,
    default: "$radioOn"
  },
  falseIcon: {
    type: ue,
    default: "$radioOff"
  },
  type: {
    type: String,
    default: "radio"
  }
}, "VRadioGroup"), qk = L()({
  name: "VRadioGroup",
  inheritAttrs: !1,
  props: Py(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, n) {
    let {
      attrs: t,
      slots: a
    } = n;
    const l = Ke(), i = b(() => e.id || `radio-group-${l}`), o = oe(e, "modelValue");
    return z(() => {
      const [u, s] = Nt(t), c = at.filterProps(e), v = vn.filterProps(e), f = a.label ? a.label({
        label: e.label,
        props: {
          for: i.value
        }
      }) : e.label;
      return r(at, O({
        class: ["v-radio-group", e.class],
        style: e.style
      }, u, c, {
        modelValue: o.value,
        "onUpdate:modelValue": (d) => o.value = d,
        id: i.value
      }), {
        ...a,
        default: (d) => {
          let {
            id: g,
            messagesId: y,
            isDisabled: h,
            isReadonly: m
          } = d;
          return r(ie, null, [f && r(ga, {
            id: g.value
          }, {
            default: () => [f]
          }), r(Ef, O(v, {
            id: g.value,
            "aria-describedby": y.value,
            defaultsTarget: "VRadio",
            trueIcon: e.trueIcon,
            falseIcon: e.falseIcon,
            type: e.type,
            disabled: h.value,
            readonly: m.value,
            "aria-labelledby": f ? g.value : void 0,
            multiple: !1
          }, s, {
            modelValue: o.value,
            "onUpdate:modelValue": (k) => o.value = k
          }), a)]);
        }
      });
    }), {};
  }
}), Iy = p({
  ...Un(),
  ...Ht(),
  ...Ps(),
  strict: Boolean,
  modelValue: {
    type: Array,
    default: () => [0, 0]
  }
}, "VRangeSlider"), Xk = L()({
  name: "VRangeSlider",
  props: Iy(),
  emits: {
    "update:focused": (e) => !0,
    "update:modelValue": (e) => !0,
    end: (e) => !0,
    start: (e) => !0
  },
  setup(e, n) {
    let {
      slots: t,
      emit: a
    } = n;
    const l = U(), i = U(), o = U(), {
      rtlClasses: u
    } = We();
    function s(A) {
      if (!l.value || !i.value) return;
      const V = Yl(A, l.value.$el, e.direction), x = Yl(A, i.value.$el, e.direction), M = Math.abs(V), E = Math.abs(x);
      return M < E || M === E && V < 0 ? l.value.$el : i.value.$el;
    }
    const c = Is(e), v = oe(e, "modelValue", void 0, (A) => A != null && A.length ? A.map((V) => c.roundValue(V)) : [0, 0]), {
      activeThumbRef: f,
      hasLabels: d,
      max: g,
      min: y,
      mousePressed: h,
      onSliderMousedown: m,
      onSliderTouchstart: k,
      position: S,
      trackContainerRef: C,
      readonly: T
    } = _s({
      props: e,
      steps: c,
      onSliderStart: () => {
        a("start", v.value);
      },
      onSliderEnd: (A) => {
        var M;
        let {
          value: V
        } = A;
        const x = f.value === ((M = l.value) == null ? void 0 : M.$el) ? [V, v.value[1]] : [v.value[0], V];
        !e.strict && x[0] < x[1] && (v.value = x), a("end", v.value);
      },
      onSliderMove: (A) => {
        var E, N, j, ee;
        let {
          value: V
        } = A;
        const [x, M] = v.value;
        !e.strict && x === M && x !== y.value && (f.value = V > x ? (E = i.value) == null ? void 0 : E.$el : (N = l.value) == null ? void 0 : N.$el, (j = f.value) == null || j.focus()), f.value === ((ee = l.value) == null ? void 0 : ee.$el) ? v.value = [Math.min(V, M), M] : v.value = [x, Math.max(x, V)];
      },
      getActiveThumb: s
    }), {
      isFocused: I,
      focus: _,
      blur: D
    } = Pt(e), w = b(() => S(v.value[0])), P = b(() => S(v.value[1]));
    return z(() => {
      const A = at.filterProps(e), V = !!(e.label || t.label || t.prepend);
      return r(at, O({
        class: ["v-slider", "v-range-slider", {
          "v-slider--has-labels": !!t["tick-label"] || d.value,
          "v-slider--focused": I.value,
          "v-slider--pressed": h.value,
          "v-slider--disabled": e.disabled
        }, u.value, e.class],
        style: e.style,
        ref: o
      }, A, {
        focused: I.value
      }), {
        ...t,
        prepend: V ? (x) => {
          var M, E;
          return r(ie, null, [((M = t.label) == null ? void 0 : M.call(t, x)) ?? (e.label ? r(ga, {
            class: "v-slider__label",
            text: e.label
          }, null) : void 0), (E = t.prepend) == null ? void 0 : E.call(t, x)]);
        } : void 0,
        default: (x) => {
          var N, j;
          let {
            id: M,
            messagesId: E
          } = x;
          return r("div", {
            class: "v-slider__container",
            onMousedown: T.value ? void 0 : m,
            onTouchstartPassive: T.value ? void 0 : k
          }, [r("input", {
            id: `${M.value}_start`,
            name: e.name || M.value,
            disabled: !!e.disabled,
            readonly: !!e.readonly,
            tabindex: "-1",
            value: v.value[0]
          }, null), r("input", {
            id: `${M.value}_stop`,
            name: e.name || M.value,
            disabled: !!e.disabled,
            readonly: !!e.readonly,
            tabindex: "-1",
            value: v.value[1]
          }, null), r(Ts, {
            ref: C,
            start: w.value,
            stop: P.value
          }, {
            "tick-label": t["tick-label"]
          }), r(Gl, {
            ref: l,
            "aria-describedby": E.value,
            focused: I && f.value === ((N = l.value) == null ? void 0 : N.$el),
            modelValue: v.value[0],
            "onUpdate:modelValue": (ee) => v.value = [ee, v.value[1]],
            onFocus: (ee) => {
              var W, R, F, B;
              _(), f.value = (W = l.value) == null ? void 0 : W.$el, g.value !== y.value && v.value[0] === v.value[1] && v.value[1] === y.value && ee.relatedTarget !== ((R = i.value) == null ? void 0 : R.$el) && ((F = l.value) == null || F.$el.blur(), (B = i.value) == null || B.$el.focus());
            },
            onBlur: () => {
              D(), f.value = void 0;
            },
            min: y.value,
            max: v.value[1],
            position: w.value,
            ripple: e.ripple
          }, {
            "thumb-label": t["thumb-label"]
          }), r(Gl, {
            ref: i,
            "aria-describedby": E.value,
            focused: I && f.value === ((j = i.value) == null ? void 0 : j.$el),
            modelValue: v.value[1],
            "onUpdate:modelValue": (ee) => v.value = [v.value[0], ee],
            onFocus: (ee) => {
              var W, R, F, B;
              _(), f.value = (W = i.value) == null ? void 0 : W.$el, g.value !== y.value && v.value[0] === v.value[1] && v.value[0] === g.value && ee.relatedTarget !== ((R = l.value) == null ? void 0 : R.$el) && ((F = i.value) == null || F.$el.blur(), (B = l.value) == null || B.$el.focus());
            },
            onBlur: () => {
              D(), f.value = void 0;
            },
            min: v.value[0],
            max: g.value,
            position: P.value,
            ripple: e.ripple
          }, {
            "thumb-label": t["thumb-label"]
          })]);
        }
      });
    }), {};
  }
}), _y = p({
  name: String,
  itemAriaLabel: {
    type: String,
    default: "$vuetify.rating.ariaLabel.item"
  },
  activeColor: String,
  color: String,
  clearable: Boolean,
  disabled: Boolean,
  emptyIcon: {
    type: ue,
    default: "$ratingEmpty"
  },
  fullIcon: {
    type: ue,
    default: "$ratingFull"
  },
  halfIncrements: Boolean,
  hover: Boolean,
  length: {
    type: [Number, String],
    default: 5
  },
  readonly: Boolean,
  modelValue: {
    type: [Number, String],
    default: 0
  },
  itemLabels: Array,
  itemLabelPosition: {
    type: String,
    default: "top",
    validator: (e) => ["top", "bottom"].includes(e)
  },
  ripple: Boolean,
  ...le(),
  ...ze(),
  ...pt(),
  ...ge(),
  ...ke()
}, "VRating"), Zk = L()({
  name: "VRating",
  props: _y(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, n) {
    let {
      slots: t
    } = n;
    const {
      t: a
    } = Te(), {
      themeClasses: l
    } = Ve(e), i = oe(e, "modelValue"), o = b(() => Me(parseFloat(i.value), 0, Number(e.length))), u = b(() => vt(Number(e.length), 1)), s = b(() => u.value.flatMap((h) => e.halfIncrements ? [h - 0.5, h] : [h])), c = G(-1), v = b(() => s.value.map((h) => {
      const m = e.hover && c.value > -1, k = o.value >= h, S = c.value >= h, T = (m ? S : k) ? e.fullIcon : e.emptyIcon, I = e.activeColor ?? e.color, _ = k || S ? I : e.color;
      return {
        isFilled: k,
        isHovered: S,
        icon: T,
        color: _
      };
    })), f = b(() => [0, ...s.value].map((h) => {
      function m() {
        c.value = h;
      }
      function k() {
        c.value = -1;
      }
      function S() {
        e.disabled || e.readonly || (i.value = o.value === h && e.clearable ? 0 : h);
      }
      return {
        onMouseenter: e.hover ? m : void 0,
        onMouseleave: e.hover ? k : void 0,
        onClick: S
      };
    })), d = b(() => e.name ?? `v-rating-${Ke()}`);
    function g(h) {
      var w, P;
      let {
        value: m,
        index: k,
        showStar: S = !0
      } = h;
      const {
        onMouseenter: C,
        onMouseleave: T,
        onClick: I
      } = f.value[k + 1], _ = `${d.value}-${String(m).replace(".", "-")}`, D = {
        color: (w = v.value[k]) == null ? void 0 : w.color,
        density: e.density,
        disabled: e.disabled,
        icon: (P = v.value[k]) == null ? void 0 : P.icon,
        ripple: e.ripple,
        size: e.size,
        variant: "plain"
      };
      return r(ie, null, [r("label", {
        for: _,
        class: {
          "v-rating__item--half": e.halfIncrements && m % 1 > 0,
          "v-rating__item--full": e.halfIncrements && m % 1 === 0
        },
        onMouseenter: C,
        onMouseleave: T,
        onClick: I
      }, [r("span", {
        class: "v-rating__hidden"
      }, [a(e.itemAriaLabel, m, e.length)]), S ? t.item ? t.item({
        ...v.value[k],
        props: D,
        value: m,
        index: k,
        rating: o.value
      }) : r(fe, O({
        "aria-label": a(e.itemAriaLabel, m, e.length)
      }, D), null) : void 0]), r("input", {
        class: "v-rating__hidden",
        name: d.value,
        id: _,
        type: "radio",
        value: m,
        checked: o.value === m,
        tabindex: -1,
        readonly: e.readonly,
        disabled: e.disabled
      }, null)]);
    }
    function y(h) {
      return t["item-label"] ? t["item-label"](h) : h.label ? r("span", null, [h.label]) : r("span", null, [_t(" ")]);
    }
    return z(() => {
      var m;
      const h = !!((m = e.itemLabels) != null && m.length) || t["item-label"];
      return r(e.tag, {
        class: ["v-rating", {
          "v-rating--hover": e.hover,
          "v-rating--readonly": e.readonly
        }, l.value, e.class],
        style: e.style
      }, {
        default: () => [r(g, {
          value: 0,
          index: -1,
          showStar: !1
        }, null), u.value.map((k, S) => {
          var C, T;
          return r("div", {
            class: "v-rating__wrapper"
          }, [h && e.itemLabelPosition === "top" ? y({
            value: k,
            index: S,
            label: (C = e.itemLabels) == null ? void 0 : C[S]
          }) : void 0, r("div", {
            class: "v-rating__item"
          }, [e.halfIncrements ? r(ie, null, [r(g, {
            value: k - 0.5,
            index: S * 2
          }, null), r(g, {
            value: k,
            index: S * 2 + 1
          }, null)]) : r(g, {
            value: k,
            index: S
          }, null)]), h && e.itemLabelPosition === "bottom" ? y({
            value: k,
            index: S,
            label: (T = e.itemLabels) == null ? void 0 : T[S]
          }) : void 0]);
        })]
      });
    }), {};
  }
}), Ty = {
  actions: "button@2",
  article: "heading, paragraph",
  avatar: "avatar",
  button: "button",
  card: "image, heading",
  "card-avatar": "image, list-item-avatar",
  chip: "chip",
  "date-picker": "list-item, heading, divider, date-picker-options, date-picker-days, actions",
  "date-picker-options": "text, avatar@2",
  "date-picker-days": "avatar@28",
  divider: "divider",
  heading: "heading",
  image: "image",
  "list-item": "text",
  "list-item-avatar": "avatar, text",
  "list-item-two-line": "sentences",
  "list-item-avatar-two-line": "avatar, sentences",
  "list-item-three-line": "paragraph",
  "list-item-avatar-three-line": "avatar, paragraph",
  ossein: "ossein",
  paragraph: "text@3",
  sentences: "text@2",
  subtitle: "text",
  table: "table-heading, table-thead, table-tbody, table-tfoot",
  "table-heading": "chip, text",
  "table-thead": "heading@6",
  "table-tbody": "table-row-divider@6",
  "table-row-divider": "table-row, divider",
  "table-row": "text@6",
  "table-tfoot": "text@2, avatar@2",
  text: "text"
};
function Ay(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
  return r("div", {
    class: ["v-skeleton-loader__bone", `v-skeleton-loader__${e}`]
  }, [n]);
}
function cr(e) {
  const [n, t] = e.split("@");
  return Array.from({
    length: t
  }).map(() => hl(n));
}
function hl(e) {
  let n = [];
  if (!e) return n;
  const t = Ty[e];
  if (e !== t) {
    if (e.includes(",")) return dr(e);
    if (e.includes("@")) return cr(e);
    t.includes(",") ? n = dr(t) : t.includes("@") ? n = cr(t) : t && n.push(hl(t));
  }
  return [Ay(e, n)];
}
function dr(e) {
  return e.replace(/\s/g, "").split(",").map(hl);
}
const Dy = p({
  boilerplate: Boolean,
  color: String,
  loading: Boolean,
  loadingText: {
    type: String,
    default: "$vuetify.loading"
  },
  type: {
    type: [String, Array],
    default: "ossein"
  },
  ...Re(),
  ...je(),
  ...ke()
}, "VSkeletonLoader"), Qk = L()({
  name: "VSkeletonLoader",
  props: Dy(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    const {
      backgroundColorClasses: a,
      backgroundColorStyles: l
    } = Pe($(e, "color")), {
      dimensionStyles: i
    } = He(e), {
      elevationClasses: o
    } = qe(e), {
      themeClasses: u
    } = Ve(e), {
      t: s
    } = Te(), c = b(() => hl(Ae(e.type).join(",")));
    return z(() => {
      var d;
      const v = !t.default || e.loading, f = e.boilerplate || !v ? {} : {
        ariaLive: "polite",
        ariaLabel: s(e.loadingText),
        role: "alert"
      };
      return r("div", O({
        class: ["v-skeleton-loader", {
          "v-skeleton-loader--boilerplate": e.boilerplate
        }, u.value, a.value, o.value],
        style: [l.value, v ? i.value : {}]
      }, f), [v ? c.value : (d = t.default) == null ? void 0 : d.call(t)]);
    }), {};
  }
}), Jk = L()({
  name: "VSlideGroupItem",
  props: kn(),
  emits: {
    "group:selected": (e) => !0
  },
  setup(e, n) {
    let {
      slots: t
    } = n;
    const a = Sn(e, Yu);
    return () => {
      var l;
      return (l = t.default) == null ? void 0 : l.call(t, {
        isSelected: a.isSelected.value,
        select: a.select,
        toggle: a.toggle,
        selectedClass: a.selectedClass.value
      });
    };
  }
});
function By(e) {
  const n = G(e());
  let t = -1;
  function a() {
    clearInterval(t);
  }
  function l() {
    a(), we(() => n.value = e());
  }
  function i(o) {
    const u = o ? getComputedStyle(o) : {
      transitionDuration: 0.2
    }, s = parseFloat(u.transitionDuration) * 1e3 || 200;
    if (a(), n.value <= 0) return;
    const c = performance.now();
    t = window.setInterval(() => {
      const v = performance.now() - c + s;
      n.value = Math.max(e() - v, 0), n.value <= 0 && a();
    }, s);
  }
  return Xe(a), {
    clear: a,
    time: n,
    start: i,
    reset: l
  };
}
const wc = p({
  multiLine: Boolean,
  text: String,
  timer: [Boolean, String],
  timeout: {
    type: [Number, String],
    default: 5e3
  },
  vertical: Boolean,
  ...Rt({
    location: "bottom"
  }),
  ...Wn(),
  ...Ee(),
  ...St(),
  ...ke(),
  ...Ce(ya({
    transition: "v-snackbar-transition"
  }), ["persistent", "noClickAnimation", "scrim", "scrollStrategy"])
}, "VSnackbar"), vr = L()({
  name: "VSnackbar",
  props: wc(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, n) {
    let {
      slots: t
    } = n;
    const a = oe(e, "modelValue"), {
      positionClasses: l
    } = jn(e), {
      scopeId: i
    } = xn(), {
      themeClasses: o
    } = Ve(e), {
      colorClasses: u,
      colorStyles: s,
      variantClasses: c
    } = yn(e), {
      roundedClasses: v
    } = Oe(e), f = By(() => Number(e.timeout)), d = U(), g = U(), y = G(!1), h = G(0), m = U(), k = be(na, void 0);
    ot(() => !!k, () => {
      const V = mu();
      Fe(() => {
        m.value = V.mainStyles.value;
      });
    }), J(a, C), J(() => e.timeout, C), Ue(() => {
      a.value && C();
    });
    let S = -1;
    function C() {
      f.reset(), window.clearTimeout(S);
      const V = Number(e.timeout);
      if (!a.value || V === -1) return;
      const x = ei(g.value);
      f.start(x), S = window.setTimeout(() => {
        a.value = !1;
      }, V);
    }
    function T() {
      f.reset(), window.clearTimeout(S);
    }
    function I() {
      y.value = !0, T();
    }
    function _() {
      y.value = !1, C();
    }
    function D(V) {
      h.value = V.touches[0].clientY;
    }
    function w(V) {
      Math.abs(h.value - V.changedTouches[0].clientY) > 50 && (a.value = !1);
    }
    function P() {
      y.value && _();
    }
    const A = b(() => e.location.split(" ").reduce((V, x) => (V[`v-snackbar--${x}`] = !0, V), {}));
    return z(() => {
      const V = Tt.filterProps(e), x = !!(t.default || t.text || e.text);
      return r(Tt, O({
        ref: d,
        class: ["v-snackbar", {
          "v-snackbar--active": a.value,
          "v-snackbar--multi-line": e.multiLine && !e.vertical,
          "v-snackbar--timer": !!e.timer,
          "v-snackbar--vertical": e.vertical
        }, A.value, l.value, e.class],
        style: [m.value, e.style]
      }, V, {
        modelValue: a.value,
        "onUpdate:modelValue": (M) => a.value = M,
        contentProps: O({
          class: ["v-snackbar__wrapper", o.value, u.value, v.value, c.value],
          style: [s.value],
          onPointerenter: I,
          onPointerleave: _
        }, V.contentProps),
        persistent: !0,
        noClickAnimation: !0,
        scrim: !1,
        scrollStrategy: "none",
        _disableGlobalStack: !0,
        onTouchstartPassive: D,
        onTouchend: w,
        onAfterLeave: P
      }, i), {
        default: () => {
          var M, E;
          return [Kt(!1, "v-snackbar"), e.timer && !y.value && r("div", {
            key: "timer",
            class: "v-snackbar__timer"
          }, [r(gi, {
            ref: g,
            color: typeof e.timer == "string" ? e.timer : "info",
            max: e.timeout,
            "model-value": f.time.value
          }, null)]), x && r("div", {
            key: "content",
            class: "v-snackbar__content",
            role: "status",
            "aria-live": "polite"
          }, [((M = t.text) == null ? void 0 : M.call(t)) ?? e.text, (E = t.default) == null ? void 0 : E.call(t)]), t.actions && r(de, {
            defaults: {
              VBtn: {
                variant: "text",
                ripple: !1,
                slim: !0
              }
            }
          }, {
            default: () => [r("div", {
              class: "v-snackbar__actions"
            }, [t.actions({
              isActive: a
            })])]
          })];
        },
        activator: t.activator
      });
    }), ct({}, d);
  }
}), xc = p({
  autoDraw: Boolean,
  autoDrawDuration: [Number, String],
  autoDrawEasing: {
    type: String,
    default: "ease"
  },
  color: String,
  gradient: {
    type: Array,
    default: () => []
  },
  gradientDirection: {
    type: String,
    validator: (e) => ["top", "bottom", "left", "right"].includes(e),
    default: "top"
  },
  height: {
    type: [String, Number],
    default: 75
  },
  labels: {
    type: Array,
    default: () => []
  },
  labelSize: {
    type: [Number, String],
    default: 7
  },
  lineWidth: {
    type: [String, Number],
    default: 4
  },
  id: String,
  itemValue: {
    type: String,
    default: "value"
  },
  modelValue: {
    type: Array,
    default: () => []
  },
  min: [String, Number],
  max: [String, Number],
  padding: {
    type: [String, Number],
    default: 8
  },
  showLabels: Boolean,
  smooth: [Boolean, String, Number],
  width: {
    type: [Number, String],
    default: 300
  }
}, "Line"), Cc = p({
  autoLineWidth: Boolean,
  ...xc()
}, "VBarline"), fr = L()({
  name: "VBarline",
  props: Cc(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    const a = Ke(), l = b(() => e.id || `barline-${a}`), i = b(() => Number(e.autoDrawDuration) || 500), o = b(() => !!(e.showLabels || e.labels.length > 0 || t != null && t.label)), u = b(() => parseFloat(e.lineWidth) || 4), s = b(() => Math.max(e.modelValue.length * u.value, Number(e.width))), c = b(() => ({
      minX: 0,
      maxX: s.value,
      minY: 0,
      maxY: parseInt(e.height, 10)
    })), v = b(() => e.modelValue.map((m) => Ne(m, e.itemValue, m)));
    function f(m, k) {
      const {
        minX: S,
        maxX: C,
        minY: T,
        maxY: I
      } = k, _ = m.length;
      let D = e.max != null ? Number(e.max) : Math.max(...m), w = e.min != null ? Number(e.min) : Math.min(...m);
      w > 0 && e.min == null && (w = 0), D < 0 && e.max == null && (D = 0);
      const P = C / _, A = (I - T) / (D - w || 1), V = I - Math.abs(w * A);
      return m.map((x, M) => {
        const E = Math.abs(A * x);
        return {
          x: S + M * P,
          y: V - E + +(x < 0) * E,
          height: E,
          value: x
        };
      });
    }
    const d = b(() => {
      const m = [], k = f(v.value, c.value), S = k.length;
      for (let C = 0; m.length < S; C++) {
        const T = k[C];
        let I = e.labels[C];
        I || (I = typeof T == "object" ? T.value : T), m.push({
          x: T.x,
          value: String(I)
        });
      }
      return m;
    }), g = b(() => f(v.value, c.value)), y = b(() => (Math.abs(g.value[0].x - g.value[1].x) - u.value) / 2), h = b(() => typeof e.smooth == "boolean" ? e.smooth ? 2 : 0 : Number(e.smooth));
    z(() => {
      const m = e.gradient.slice().length ? e.gradient.slice().reverse() : [""];
      return r("svg", {
        display: "block"
      }, [r("defs", null, [r("linearGradient", {
        id: l.value,
        gradientUnits: "userSpaceOnUse",
        x1: e.gradientDirection === "left" ? "100%" : "0",
        y1: e.gradientDirection === "top" ? "100%" : "0",
        x2: e.gradientDirection === "right" ? "100%" : "0",
        y2: e.gradientDirection === "bottom" ? "100%" : "0"
      }, [m.map((k, S) => r("stop", {
        offset: S / Math.max(m.length - 1, 1),
        "stop-color": k || "currentColor"
      }, null))])]), r("clipPath", {
        id: `${l.value}-clip`
      }, [g.value.map((k) => r("rect", {
        x: k.x + y.value,
        y: k.y,
        width: u.value,
        height: k.height,
        rx: h.value,
        ry: h.value
      }, [e.autoDraw && r(ie, null, [r("animate", {
        attributeName: "y",
        from: k.y + k.height,
        to: k.y,
        dur: `${i.value}ms`,
        fill: "freeze"
      }, null), r("animate", {
        attributeName: "height",
        from: "0",
        to: k.height,
        dur: `${i.value}ms`,
        fill: "freeze"
      }, null)])]))]), o.value && r("g", {
        key: "labels",
        style: {
          textAnchor: "middle",
          dominantBaseline: "mathematical",
          fill: "currentColor"
        }
      }, [d.value.map((k, S) => {
        var C;
        return r("text", {
          x: k.x + y.value + u.value / 2,
          y: parseInt(e.height, 10) - 2 + (parseInt(e.labelSize, 10) || 7 * 0.75),
          "font-size": Number(e.labelSize) || 7
        }, [((C = t.label) == null ? void 0 : C.call(t, {
          index: S,
          value: k.value
        })) ?? k.value]);
      })]), r("g", {
        "clip-path": `url(#${l.value}-clip)`,
        fill: `url(#${l.value})`
      }, [r("rect", {
        x: 0,
        y: 0,
        width: Math.max(e.modelValue.length * u.value, Number(e.width)),
        height: e.height
      }, null)])]);
    });
  }
});
function My(e, n) {
  let t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1, a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 75;
  if (e.length === 0) return "";
  const l = e.shift(), i = e[e.length - 1];
  return (t ? `M${l.x} ${a - l.x + 2} L${l.x} ${l.y}` : `M${l.x} ${l.y}`) + e.map((o, u) => {
    const s = e[u + 1], c = e[u - 1] || l, v = s && py(s, o, c);
    if (!s || v)
      return `L${o.x} ${o.y}`;
    const f = Math.min(mr(c, o), mr(s, o)), g = f / 2 < n ? f / 2 : n, y = gr(c, o, g), h = gr(s, o, g);
    return `L${y.x} ${y.y}S${o.x} ${o.y} ${h.x} ${h.y}`;
  }).join("") + (t ? `L${i.x} ${a - l.x + 2} Z` : "");
}
function Ta(e) {
  return parseInt(e, 10);
}
function py(e, n, t) {
  return Ta(e.x + t.x) === Ta(2 * n.x) && Ta(e.y + t.y) === Ta(2 * n.y);
}
function mr(e, n) {
  return Math.sqrt(Math.pow(n.x - e.x, 2) + Math.pow(n.y - e.y, 2));
}
function gr(e, n, t) {
  const a = {
    x: e.x - n.x,
    y: e.y - n.y
  }, l = Math.sqrt(a.x * a.x + a.y * a.y), i = {
    x: a.x / l,
    y: a.y / l
  };
  return {
    x: n.x + i.x * t,
    y: n.y + i.y * t
  };
}
const Vc = p({
  fill: Boolean,
  ...xc()
}, "VTrendline"), hr = L()({
  name: "VTrendline",
  props: Vc(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    const a = Ke(), l = b(() => e.id || `trendline-${a}`), i = b(() => Number(e.autoDrawDuration) || (e.fill ? 500 : 2e3)), o = U(0), u = U(null);
    function s(m, k) {
      const {
        minX: S,
        maxX: C,
        minY: T,
        maxY: I
      } = k, _ = m.length, D = e.max != null ? Number(e.max) : Math.max(...m), w = e.min != null ? Number(e.min) : Math.min(...m), P = (C - S) / (_ - 1), A = (I - T) / (D - w || 1);
      return m.map((V, x) => ({
        x: S + x * P,
        y: I - (V - w) * A,
        value: V
      }));
    }
    const c = b(() => !!(e.showLabels || e.labels.length > 0 || t != null && t.label)), v = b(() => parseFloat(e.lineWidth) || 4), f = b(() => Number(e.width)), d = b(() => {
      const m = Number(e.padding);
      return {
        minX: m,
        maxX: f.value - m,
        minY: m,
        maxY: parseInt(e.height, 10) - m
      };
    }), g = b(() => e.modelValue.map((m) => Ne(m, e.itemValue, m))), y = b(() => {
      const m = [], k = s(g.value, d.value), S = k.length;
      for (let C = 0; m.length < S; C++) {
        const T = k[C];
        let I = e.labels[C];
        I || (I = typeof T == "object" ? T.value : T), m.push({
          x: T.x,
          value: String(I)
        });
      }
      return m;
    });
    J(() => e.modelValue, async () => {
      if (await we(), !e.autoDraw || !u.value) return;
      const m = u.value, k = m.getTotalLength();
      e.fill ? (m.style.transformOrigin = "bottom center", m.style.transition = "none", m.style.transform = "scaleY(0)", m.getBoundingClientRect(), m.style.transition = `transform ${i.value}ms ${e.autoDrawEasing}`, m.style.transform = "scaleY(1)") : (m.style.strokeDasharray = `${k}`, m.style.strokeDashoffset = `${k}`, m.getBoundingClientRect(), m.style.transition = `stroke-dashoffset ${i.value}ms ${e.autoDrawEasing}`, m.style.strokeDashoffset = "0"), o.value = k;
    }, {
      immediate: !0
    });
    function h(m) {
      const k = typeof e.smooth == "boolean" ? e.smooth ? 8 : 0 : Number(e.smooth);
      return My(s(g.value, d.value), k, m, parseInt(e.height, 10));
    }
    z(() => {
      var k;
      const m = e.gradient.slice().length ? e.gradient.slice().reverse() : [""];
      return r("svg", {
        display: "block",
        "stroke-width": parseFloat(e.lineWidth) ?? 4
      }, [r("defs", null, [r("linearGradient", {
        id: l.value,
        gradientUnits: "userSpaceOnUse",
        x1: e.gradientDirection === "left" ? "100%" : "0",
        y1: e.gradientDirection === "top" ? "100%" : "0",
        x2: e.gradientDirection === "right" ? "100%" : "0",
        y2: e.gradientDirection === "bottom" ? "100%" : "0"
      }, [m.map((S, C) => r("stop", {
        offset: C / Math.max(m.length - 1, 1),
        "stop-color": S || "currentColor"
      }, null))])]), c.value && r("g", {
        key: "labels",
        style: {
          textAnchor: "middle",
          dominantBaseline: "mathematical",
          fill: "currentColor"
        }
      }, [y.value.map((S, C) => {
        var T;
        return r("text", {
          x: S.x + v.value / 2 + v.value / 2,
          y: parseInt(e.height, 10) - 4 + (parseInt(e.labelSize, 10) || 7 * 0.75),
          "font-size": Number(e.labelSize) || 7
        }, [((T = t.label) == null ? void 0 : T.call(t, {
          index: C,
          value: S.value
        })) ?? S.value]);
      })]), r("path", {
        ref: u,
        d: h(e.fill),
        fill: e.fill ? `url(#${l.value})` : "none",
        stroke: e.fill ? "none" : `url(#${l.value})`
      }, null), e.fill && r("path", {
        d: h(!1),
        fill: "none",
        stroke: e.color ?? ((k = e.gradient) == null ? void 0 : k[0])
      }, null)]);
    });
  }
}), Ey = p({
  type: {
    type: String,
    default: "trend"
  },
  ...Cc(),
  ...Vc()
}, "VSparkline"), eS = L()({
  name: "VSparkline",
  props: Ey(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    const {
      textColorClasses: a,
      textColorStyles: l
    } = Ge($(e, "color")), i = b(() => !!(e.showLabels || e.labels.length > 0 || t != null && t.label)), o = b(() => {
      let u = parseInt(e.height, 10);
      return i.value && (u += parseInt(e.labelSize, 10) * 1.5), u;
    });
    z(() => {
      const u = e.type === "trend" ? hr : fr, s = e.type === "trend" ? hr.filterProps(e) : fr.filterProps(e);
      return r(u, O({
        key: e.type,
        class: a.value,
        style: l.value,
        viewBox: `0 0 ${e.width} ${parseInt(o.value, 10)}`
      }, s), t);
    });
  }
}), Fy = p({
  ...le(),
  ...gs({
    offset: 8,
    minWidth: 0,
    openDelay: 0,
    closeDelay: 100,
    location: "top center",
    transition: "scale-transition"
  })
}, "VSpeedDial"), tS = L()({
  name: "VSpeedDial",
  props: Fy(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, n) {
    let {
      slots: t
    } = n;
    const a = oe(e, "modelValue"), l = U(), i = b(() => {
      var c;
      const [u, s = "center"] = ((c = e.location) == null ? void 0 : c.split(" ")) ?? [];
      return `${u} ${s}`;
    }), o = b(() => ({
      [`v-speed-dial__content--${i.value.replace(" ", "-")}`]: !0
    }));
    return z(() => {
      const u = Fn.filterProps(e);
      return r(Fn, O(u, {
        modelValue: a.value,
        "onUpdate:modelValue": (s) => a.value = s,
        class: e.class,
        style: e.style,
        contentClass: ["v-speed-dial__content", o.value, e.contentClass],
        location: i.value,
        ref: l,
        transition: "fade-transition"
      }), {
        ...t,
        default: (s) => r(de, {
          defaults: {
            VBtn: {
              size: "small"
            }
          }
        }, {
          default: () => [r(tt, {
            appear: !0,
            group: !0,
            transition: e.transition
          }, {
            default: () => {
              var c;
              return [(c = t.default) == null ? void 0 : c.call(t, s)];
            }
          })]
        })
      });
    }), {};
  }
}), Ui = Symbol.for("vuetify:v-stepper"), Yi = p({
  color: String,
  disabled: {
    type: [Boolean, String],
    default: !1
  },
  prevText: {
    type: String,
    default: "$vuetify.stepper.prev"
  },
  nextText: {
    type: String,
    default: "$vuetify.stepper.next"
  }
}, "VStepperActions"), ql = L()({
  name: "VStepperActions",
  props: Yi(),
  emits: {
    "click:prev": () => !0,
    "click:next": () => !0
  },
  setup(e, n) {
    let {
      emit: t,
      slots: a
    } = n;
    const {
      t: l
    } = Te();
    function i() {
      t("click:prev");
    }
    function o() {
      t("click:next");
    }
    return z(() => {
      const u = {
        onClick: i
      }, s = {
        onClick: o
      };
      return r("div", {
        class: "v-stepper-actions"
      }, [r(de, {
        defaults: {
          VBtn: {
            disabled: ["prev", !0].includes(e.disabled),
            text: l(e.prevText),
            variant: "text"
          }
        }
      }, {
        default: () => {
          var c;
          return [((c = a.prev) == null ? void 0 : c.call(a, {
            props: u
          })) ?? r(fe, u, null)];
        }
      }), r(de, {
        defaults: {
          VBtn: {
            color: e.color,
            disabled: ["next", !0].includes(e.disabled),
            text: l(e.nextText),
            variant: "tonal"
          }
        }
      }, {
        default: () => {
          var c;
          return [((c = a.next) == null ? void 0 : c.call(a, {
            props: s
          })) ?? r(fe, s, null)];
        }
      })]);
    }), {};
  }
}), $y = Bt("v-stepper-header"), Pc = p({
  color: String,
  title: String,
  subtitle: String,
  complete: Boolean,
  completeIcon: {
    type: ue,
    default: "$complete"
  },
  editable: Boolean,
  editIcon: {
    type: ue,
    default: "$edit"
  },
  error: Boolean,
  errorIcon: {
    type: ue,
    default: "$error"
  },
  icon: ue,
  ripple: {
    type: [Boolean, Object],
    default: !0
  },
  rules: {
    type: Array,
    default: () => []
  }
}, "StepperItem"), Ly = p({
  ...Pc(),
  ...kn()
}, "VStepperItem"), Oy = L()({
  name: "VStepperItem",
  directives: {
    Ripple: Xt
  },
  props: Ly(),
  emits: {
    "group:selected": (e) => !0
  },
  setup(e, n) {
    let {
      slots: t
    } = n;
    const a = Sn(e, Ui, !0), l = b(() => (a == null ? void 0 : a.value.value) ?? e.value), i = b(() => e.rules.every((d) => d() === !0)), o = b(() => !e.disabled && e.editable), u = b(() => !e.disabled && e.editable), s = b(() => e.error || !i.value), c = b(() => e.complete || e.rules.length > 0 && i.value), v = b(() => s.value ? e.errorIcon : c.value ? e.completeIcon : a.isSelected.value && e.editable ? e.editIcon : e.icon), f = b(() => ({
      canEdit: u.value,
      hasError: s.value,
      hasCompleted: c.value,
      title: e.title,
      subtitle: e.subtitle,
      step: l.value,
      value: e.value
    }));
    return z(() => {
      var m, k, S;
      const d = (!a || a.isSelected.value || c.value || u.value) && !s.value && !e.disabled, g = !!(e.title != null || t.title), y = !!(e.subtitle != null || t.subtitle);
      function h() {
        a == null || a.toggle();
      }
      return $e(r("button", {
        class: ["v-stepper-item", {
          "v-stepper-item--complete": c.value,
          "v-stepper-item--disabled": e.disabled,
          "v-stepper-item--error": s.value
        }, a == null ? void 0 : a.selectedClass.value],
        disabled: !e.editable,
        type: "button",
        onClick: h
      }, [o.value && Kt(!0, "v-stepper-item"), r(ut, {
        key: "stepper-avatar",
        class: "v-stepper-item__avatar",
        color: d ? e.color : void 0,
        size: 24
      }, {
        default: () => {
          var C;
          return [((C = t.icon) == null ? void 0 : C.call(t, f.value)) ?? (v.value ? r(Se, {
            icon: v.value
          }, null) : l.value)];
        }
      }), r("div", {
        class: "v-stepper-item__content"
      }, [g && r("div", {
        key: "title",
        class: "v-stepper-item__title"
      }, [((m = t.title) == null ? void 0 : m.call(t, f.value)) ?? e.title]), y && r("div", {
        key: "subtitle",
        class: "v-stepper-item__subtitle"
      }, [((k = t.subtitle) == null ? void 0 : k.call(t, f.value)) ?? e.subtitle]), (S = t.default) == null ? void 0 : S.call(t, f.value)])]), [[mt("ripple"), e.ripple && e.editable, null]]);
    }), {};
  }
}), Ny = p({
  ...Ce(il(), ["continuous", "nextIcon", "prevIcon", "showArrows", "touch", "mandatory"])
}, "VStepperWindow"), Ry = L()({
  name: "VStepperWindow",
  props: Ny(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, n) {
    let {
      slots: t
    } = n;
    const a = be(Ui, null), l = oe(e, "modelValue"), i = b({
      get() {
        var o;
        return l.value != null || !a ? l.value : (o = a.items.value.find((u) => a.selected.value.includes(u.id))) == null ? void 0 : o.value;
      },
      set(o) {
        l.value = o;
      }
    });
    return z(() => {
      const o = $n.filterProps(e);
      return r($n, O({
        _as: "VStepperWindow"
      }, o, {
        modelValue: i.value,
        "onUpdate:modelValue": (u) => i.value = u,
        class: ["v-stepper-window", e.class],
        style: e.style,
        mandatory: !1,
        touch: !1
      }), t);
    }), {};
  }
}), Hy = p({
  ...ol()
}, "VStepperWindowItem"), zy = L()({
  name: "VStepperWindowItem",
  props: Hy(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    return z(() => {
      const a = Ln.filterProps(e);
      return r(Ln, O({
        _as: "VStepperWindowItem"
      }, a, {
        class: ["v-stepper-window-item", e.class],
        style: e.style
      }), t);
    }), {};
  }
}), Ic = p({
  altLabels: Boolean,
  bgColor: String,
  completeIcon: ue,
  editIcon: ue,
  editable: Boolean,
  errorIcon: ue,
  hideActions: Boolean,
  items: {
    type: Array,
    default: () => []
  },
  itemTitle: {
    type: String,
    default: "title"
  },
  itemValue: {
    type: String,
    default: "value"
  },
  nonLinear: Boolean,
  flat: Boolean,
  ...Gt()
}, "Stepper"), Wy = p({
  ...Ic(),
  ...bn({
    mandatory: "force",
    selectedClass: "v-stepper-item--selected"
  }),
  ...ka(),
  ...Ot(Yi(), ["prevText", "nextText"])
}, "VStepper"), nS = L()({
  name: "VStepper",
  props: Wy(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, n) {
    let {
      slots: t
    } = n;
    const {
      items: a,
      next: l,
      prev: i,
      selected: o
    } = qt(e, Ui), {
      displayClasses: u,
      mobile: s
    } = ht(e), {
      completeIcon: c,
      editIcon: v,
      errorIcon: f,
      color: d,
      editable: g,
      prevText: y,
      nextText: h
    } = Ut(e), m = b(() => e.items.map((C, T) => {
      const I = Ne(C, e.itemTitle, C), _ = Ne(C, e.itemValue, T + 1);
      return {
        title: I,
        value: _,
        raw: C
      };
    })), k = b(() => a.value.findIndex((C) => o.value.includes(C.id))), S = b(() => e.disabled ? e.disabled : k.value === 0 ? "prev" : k.value === a.value.length - 1 ? "next" : !1);
    return pe({
      VStepperItem: {
        editable: g,
        errorIcon: f,
        completeIcon: c,
        editIcon: v,
        prevText: y,
        nextText: h
      },
      VStepperActions: {
        color: d,
        disabled: S,
        prevText: y,
        nextText: h
      }
    }), z(() => {
      const C = Lt.filterProps(e), T = !!(t.header || e.items.length), I = e.items.length > 0, _ = !e.hideActions && !!(I || t.actions);
      return r(Lt, O(C, {
        color: e.bgColor,
        class: ["v-stepper", {
          "v-stepper--alt-labels": e.altLabels,
          "v-stepper--flat": e.flat,
          "v-stepper--non-linear": e.nonLinear,
          "v-stepper--mobile": s.value
        }, u.value, e.class],
        style: e.style
      }), {
        default: () => {
          var D, w;
          return [T && r($y, {
            key: "stepper-header"
          }, {
            default: () => [m.value.map((P, A) => {
              let {
                raw: V,
                ...x
              } = P;
              return r(ie, null, [!!A && r(It, null, null), r(Oy, x, {
                default: t[`header-item.${x.value}`] ?? t.header,
                icon: t.icon,
                title: t.title,
                subtitle: t.subtitle
              })]);
            })]
          }), I && r(Ry, {
            key: "stepper-window"
          }, {
            default: () => [m.value.map((P) => r(zy, {
              value: P.value
            }, {
              default: () => {
                var A, V;
                return ((A = t[`item.${P.value}`]) == null ? void 0 : A.call(t, P)) ?? ((V = t.item) == null ? void 0 : V.call(t, P));
              }
            }))]
          }), (D = t.default) == null ? void 0 : D.call(t, {
            prev: i,
            next: l
          }), _ && (((w = t.actions) == null ? void 0 : w.call(t, {
            next: l,
            prev: i
          })) ?? r(ql, {
            key: "stepper-actions",
            "onClick:prev": i,
            "onClick:next": l
          }, t))];
        }
      });
    }), {
      prev: i,
      next: l
    };
  }
}), jy = p({
  indeterminate: Boolean,
  inset: Boolean,
  flat: Boolean,
  loading: {
    type: [Boolean, String],
    default: !1
  },
  ...Ht(),
  ...al()
}, "VSwitch"), aS = L()({
  name: "VSwitch",
  inheritAttrs: !1,
  props: jy(),
  emits: {
    "update:focused": (e) => !0,
    "update:modelValue": (e) => !0,
    "update:indeterminate": (e) => !0
  },
  setup(e, n) {
    let {
      attrs: t,
      slots: a
    } = n;
    const l = oe(e, "indeterminate"), i = oe(e, "modelValue"), {
      loaderClasses: o
    } = da(e), {
      isFocused: u,
      focus: s,
      blur: c
    } = Pt(e), v = U(), f = xe && window.matchMedia("(forced-colors: active)").matches, d = b(() => typeof e.loading == "string" && e.loading !== "" ? e.loading : e.color), g = Ke(), y = b(() => e.id || `switch-${g}`);
    function h() {
      l.value && (l.value = !1);
    }
    function m(k) {
      var S, C;
      k.stopPropagation(), k.preventDefault(), (C = (S = v.value) == null ? void 0 : S.input) == null || C.click();
    }
    return z(() => {
      const [k, S] = Nt(t), C = at.filterProps(e), T = vn.filterProps(e);
      return r(at, O({
        class: ["v-switch", {
          "v-switch--flat": e.flat
        }, {
          "v-switch--inset": e.inset
        }, {
          "v-switch--indeterminate": l.value
        }, o.value, e.class]
      }, k, C, {
        modelValue: i.value,
        "onUpdate:modelValue": (I) => i.value = I,
        id: y.value,
        focused: u.value,
        style: e.style
      }), {
        ...a,
        default: (I) => {
          let {
            id: _,
            messagesId: D,
            isDisabled: w,
            isReadonly: P,
            isValid: A
          } = I;
          const V = {
            model: i,
            isValid: A
          };
          return r(vn, O({
            ref: v
          }, T, {
            modelValue: i.value,
            "onUpdate:modelValue": [(x) => i.value = x, h],
            id: _.value,
            "aria-describedby": D.value,
            type: "checkbox",
            "aria-checked": l.value ? "mixed" : void 0,
            disabled: w.value,
            readonly: P.value,
            onFocus: s,
            onBlur: c
          }, S), {
            ...a,
            default: (x) => {
              let {
                backgroundColorClasses: M,
                backgroundColorStyles: E
              } = x;
              return r("div", {
                class: ["v-switch__track", f ? void 0 : M.value],
                style: E.value,
                onClick: m
              }, [a["track-true"] && r("div", {
                key: "prepend",
                class: "v-switch__track-true"
              }, [a["track-true"](V)]), a["track-false"] && r("div", {
                key: "append",
                class: "v-switch__track-false"
              }, [a["track-false"](V)])]);
            },
            input: (x) => {
              let {
                inputNode: M,
                icon: E,
                backgroundColorClasses: N,
                backgroundColorStyles: j
              } = x;
              return r(ie, null, [M, r("div", {
                class: ["v-switch__thumb", {
                  "v-switch__thumb--filled": E || e.loading
                }, e.inset || f ? void 0 : N.value],
                style: e.inset ? void 0 : j.value
              }, [a.thumb ? r(de, {
                defaults: {
                  VIcon: {
                    icon: E,
                    size: "x-small"
                  }
                }
              }, {
                default: () => [a.thumb({
                  ...V,
                  icon: E
                })]
              }) : r(Su, null, {
                default: () => [e.loading ? r(va, {
                  name: "v-switch",
                  active: !0,
                  color: A.value === !1 ? void 0 : d.value
                }, {
                  default: (ee) => a.loader ? a.loader(ee) : r(dn, {
                    active: ee.isActive,
                    color: ee.color,
                    indeterminate: !0,
                    size: "16",
                    width: "2"
                  }, null)
                }) : E && r(Se, {
                  key: String(E),
                  icon: E,
                  size: "x-small"
                }, null)]
              })])]);
            }
          });
        }
      });
    }), {};
  }
}), Uy = p({
  color: String,
  height: [Number, String],
  window: Boolean,
  ...le(),
  ...je(),
  ...mn(),
  ...Ee(),
  ...ge(),
  ...ke()
}, "VSystemBar"), lS = L()({
  name: "VSystemBar",
  props: Uy(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    const {
      themeClasses: a
    } = Ve(e), {
      backgroundColorClasses: l,
      backgroundColorStyles: i
    } = Pe($(e, "color")), {
      elevationClasses: o
    } = qe(e), {
      roundedClasses: u
    } = Oe(e), {
      ssrBootStyles: s
    } = hn(), c = b(() => e.height ?? (e.window ? 32 : 24)), {
      layoutItemStyles: v
    } = gn({
      id: e.name,
      order: b(() => parseInt(e.order, 10)),
      position: G("top"),
      layoutSize: c,
      elementSize: c,
      active: b(() => !0),
      absolute: $(e, "absolute")
    });
    return z(() => r(e.tag, {
      class: ["v-system-bar", {
        "v-system-bar--window": e.window
      }, a.value, l.value, o.value, u.value, e.class],
      style: [i.value, v.value, s.value, e.style]
    }, t)), {};
  }
}), Gi = Symbol.for("vuetify:v-tabs"), Yy = p({
  fixed: Boolean,
  sliderColor: String,
  hideSlider: Boolean,
  direction: {
    type: String,
    default: "horizontal"
  },
  ...Ce(nl({
    selectedClass: "v-tab--selected",
    variant: "text"
  }), ["active", "block", "flat", "location", "position", "symbol"])
}, "VTab"), Gy = L()({
  name: "VTab",
  props: Yy(),
  setup(e, n) {
    let {
      slots: t,
      attrs: a
    } = n;
    const {
      textColorClasses: l,
      textColorStyles: i
    } = Ge(e, "sliderColor"), o = U(), u = U(), s = b(() => e.direction === "horizontal"), c = b(() => {
      var f, d;
      return ((d = (f = o.value) == null ? void 0 : f.group) == null ? void 0 : d.isSelected.value) ?? !1;
    });
    function v(f) {
      var g, y;
      let {
        value: d
      } = f;
      if (d) {
        const h = (y = (g = o.value) == null ? void 0 : g.$el.parentElement) == null ? void 0 : y.querySelector(".v-tab--selected .v-tab__slider"), m = u.value;
        if (!h || !m) return;
        const k = getComputedStyle(h).color, S = h.getBoundingClientRect(), C = m.getBoundingClientRect(), T = s.value ? "x" : "y", I = s.value ? "X" : "Y", _ = s.value ? "right" : "bottom", D = s.value ? "width" : "height", w = S[T], P = C[T], A = w > P ? S[_] - C[_] : S[T] - C[T], V = Math.sign(A) > 0 ? s.value ? "right" : "bottom" : Math.sign(A) < 0 ? s.value ? "left" : "top" : "center", M = (Math.abs(A) + (Math.sign(A) < 0 ? S[D] : C[D])) / Math.max(S[D], C[D]) || 0, E = S[D] / C[D] || 0, N = 1.5;
        nn(m, {
          backgroundColor: [k, "currentcolor"],
          transform: [`translate${I}(${A}px) scale${I}(${E})`, `translate${I}(${A / N}px) scale${I}(${(M - 1) / N + 1})`, "none"],
          transformOrigin: Array(3).fill(V)
        }, {
          duration: 225,
          easing: Jn
        });
      }
    }
    return z(() => {
      const f = fe.filterProps(e);
      return r(fe, O({
        symbol: Gi,
        ref: o,
        class: ["v-tab", e.class],
        style: e.style,
        tabindex: c.value ? 0 : -1,
        role: "tab",
        "aria-selected": String(c.value),
        active: !1
      }, f, a, {
        block: e.fixed,
        maxWidth: e.fixed ? 300 : void 0,
        "onGroup:selected": v
      }), {
        ...t,
        default: () => {
          var d;
          return r(ie, null, [((d = t.default) == null ? void 0 : d.call(t)) ?? e.text, !e.hideSlider && r("div", {
            ref: u,
            class: ["v-tab__slider", l.value],
            style: i.value
          }, null)]);
        }
      });
    }), ct({}, o);
  }
}), Ky = p({
  ...Ce(il(), ["continuous", "nextIcon", "prevIcon", "showArrows", "touch", "mandatory"])
}, "VTabsWindow"), qy = L()({
  name: "VTabsWindow",
  props: Ky(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, n) {
    let {
      slots: t
    } = n;
    const a = be(Gi, null), l = oe(e, "modelValue"), i = b({
      get() {
        var o;
        return l.value != null || !a ? l.value : (o = a.items.value.find((u) => a.selected.value.includes(u.id))) == null ? void 0 : o.value;
      },
      set(o) {
        l.value = o;
      }
    });
    return z(() => {
      const o = $n.filterProps(e);
      return r($n, O({
        _as: "VTabsWindow"
      }, o, {
        modelValue: i.value,
        "onUpdate:modelValue": (u) => i.value = u,
        class: ["v-tabs-window", e.class],
        style: e.style,
        mandatory: !1,
        touch: !1
      }), t);
    }), {};
  }
}), Xy = p({
  ...ol()
}, "VTabsWindowItem"), Zy = L()({
  name: "VTabsWindowItem",
  props: Xy(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    return z(() => {
      const a = Ln.filterProps(e);
      return r(Ln, O({
        _as: "VTabsWindowItem"
      }, a, {
        class: ["v-tabs-window-item", e.class],
        style: e.style
      }), t);
    }), {};
  }
});
function Qy(e) {
  return e ? e.map((n) => Ya(n) ? n : {
    text: n,
    value: n
  }) : [];
}
const Jy = p({
  alignTabs: {
    type: String,
    default: "start"
  },
  color: String,
  fixedTabs: Boolean,
  items: {
    type: Array,
    default: () => []
  },
  stacked: Boolean,
  bgColor: String,
  grow: Boolean,
  height: {
    type: [Number, String],
    default: void 0
  },
  hideSlider: Boolean,
  sliderColor: String,
  ...yi({
    mandatory: "force",
    selectedClass: "v-tab-item--selected"
  }),
  ...ze(),
  ...ge()
}, "VTabs"), iS = L()({
  name: "VTabs",
  props: Jy(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, n) {
    let {
      attrs: t,
      slots: a
    } = n;
    const l = oe(e, "modelValue"), i = b(() => Qy(e.items)), {
      densityClasses: o
    } = Qe(e), {
      backgroundColorClasses: u,
      backgroundColorStyles: s
    } = Pe($(e, "bgColor")), {
      scopeId: c
    } = xn();
    return pe({
      VTab: {
        color: $(e, "color"),
        direction: $(e, "direction"),
        stacked: $(e, "stacked"),
        fixed: $(e, "fixedTabs"),
        sliderColor: $(e, "sliderColor"),
        hideSlider: $(e, "hideSlider")
      }
    }), z(() => {
      const v = Oa.filterProps(e), f = !!(a.window || e.items.length > 0);
      return r(ie, null, [r(Oa, O(v, {
        modelValue: l.value,
        "onUpdate:modelValue": (d) => l.value = d,
        class: ["v-tabs", `v-tabs--${e.direction}`, `v-tabs--align-tabs-${e.alignTabs}`, {
          "v-tabs--fixed-tabs": e.fixedTabs,
          "v-tabs--grow": e.grow,
          "v-tabs--stacked": e.stacked
        }, o.value, u.value, e.class],
        style: [{
          "--v-tabs-height": te(e.height)
        }, s.value, e.style],
        role: "tablist",
        symbol: Gi
      }, c, t), {
        default: () => {
          var d;
          return [((d = a.default) == null ? void 0 : d.call(a)) ?? i.value.map((g) => {
            var y;
            return ((y = a.tab) == null ? void 0 : y.call(a, {
              item: g
            })) ?? r(Gy, O(g, {
              key: g.text,
              value: g.value
            }), {
              default: a[`tab.${g.value}`] ? () => {
                var h;
                return (h = a[`tab.${g.value}`]) == null ? void 0 : h.call(a, {
                  item: g
                });
              } : void 0
            });
          })];
        }
      }), f && r(qy, O({
        modelValue: l.value,
        "onUpdate:modelValue": (d) => l.value = d,
        key: "tabs-window"
      }, c), {
        default: () => {
          var d;
          return [i.value.map((g) => {
            var y;
            return ((y = a.item) == null ? void 0 : y.call(a, {
              item: g
            })) ?? r(Zy, {
              value: g.value
            }, {
              default: () => {
                var h;
                return (h = a[`item.${g.value}`]) == null ? void 0 : h.call(a, {
                  item: g
                });
              }
            });
          }), (d = a.window) == null ? void 0 : d.call(a)];
        }
      })]);
    }), {};
  }
}), eb = p({
  autoGrow: Boolean,
  autofocus: Boolean,
  counter: [Boolean, Number, String],
  counterValue: Function,
  prefix: String,
  placeholder: String,
  persistentPlaceholder: Boolean,
  persistentCounter: Boolean,
  noResize: Boolean,
  rows: {
    type: [Number, String],
    default: 5,
    validator: (e) => !isNaN(parseFloat(e))
  },
  maxRows: {
    type: [Number, String],
    validator: (e) => !isNaN(parseFloat(e))
  },
  suffix: String,
  modelModifiers: Object,
  ...Ht(),
  ...ba()
}, "VTextarea"), oS = L()({
  name: "VTextarea",
  directives: {
    Intersect: Ja
  },
  inheritAttrs: !1,
  props: eb(),
  emits: {
    "click:control": (e) => !0,
    "mousedown:control": (e) => !0,
    "update:focused": (e) => !0,
    "update:modelValue": (e) => !0
  },
  setup(e, n) {
    let {
      attrs: t,
      emit: a,
      slots: l
    } = n;
    const i = oe(e, "modelValue"), {
      isFocused: o,
      focus: u,
      blur: s
    } = Pt(e), c = b(() => typeof e.counterValue == "function" ? e.counterValue(i.value) : (i.value || "").toString().length), v = b(() => {
      if (t.maxlength) return t.maxlength;
      if (!(!e.counter || typeof e.counter != "number" && typeof e.counter != "string"))
        return e.counter;
    });
    function f(V, x) {
      var M, E;
      !e.autofocus || !V || (E = (M = x[0].target) == null ? void 0 : M.focus) == null || E.call(M);
    }
    const d = U(), g = U(), y = G(""), h = U(), m = b(() => e.persistentPlaceholder || o.value || e.active);
    function k() {
      var V;
      h.value !== document.activeElement && ((V = h.value) == null || V.focus()), o.value || u();
    }
    function S(V) {
      k(), a("click:control", V);
    }
    function C(V) {
      a("mousedown:control", V);
    }
    function T(V) {
      V.stopPropagation(), k(), we(() => {
        i.value = "", Ga(e["onClick:clear"], V);
      });
    }
    function I(V) {
      var M;
      const x = V.target;
      if (i.value = x.value, (M = e.modelModifiers) != null && M.trim) {
        const E = [x.selectionStart, x.selectionEnd];
        we(() => {
          x.selectionStart = E[0], x.selectionEnd = E[1];
        });
      }
    }
    const _ = U(), D = U(Number(e.rows)), w = b(() => ["plain", "underlined"].includes(e.variant));
    Fe(() => {
      e.autoGrow || (D.value = Number(e.rows));
    });
    function P() {
      e.autoGrow && we(() => {
        if (!_.value || !g.value) return;
        const V = getComputedStyle(_.value), x = getComputedStyle(g.value.$el), M = parseFloat(V.getPropertyValue("--v-field-padding-top")) + parseFloat(V.getPropertyValue("--v-input-padding-top")) + parseFloat(V.getPropertyValue("--v-field-padding-bottom")), E = _.value.scrollHeight, N = parseFloat(V.lineHeight), j = Math.max(parseFloat(e.rows) * N + M, parseFloat(x.getPropertyValue("--v-input-control-height"))), ee = parseFloat(e.maxRows) * N + M || 1 / 0, W = Me(E ?? 0, j, ee);
        D.value = Math.floor((W - M) / N), y.value = te(W);
      });
    }
    Ue(P), J(i, P), J(() => e.rows, P), J(() => e.maxRows, P), J(() => e.density, P);
    let A;
    return J(_, (V) => {
      V ? (A = new ResizeObserver(P), A.observe(_.value)) : A == null || A.disconnect();
    }), Ze(() => {
      A == null || A.disconnect();
    }), z(() => {
      const V = !!(l.counter || e.counter || e.counterValue), x = !!(V || l.details), [M, E] = Nt(t), {
        modelValue: N,
        ...j
      } = at.filterProps(e), ee = fn.filterProps(e);
      return r(at, O({
        ref: d,
        modelValue: i.value,
        "onUpdate:modelValue": (W) => i.value = W,
        class: ["v-textarea v-text-field", {
          "v-textarea--prefixed": e.prefix,
          "v-textarea--suffixed": e.suffix,
          "v-text-field--prefixed": e.prefix,
          "v-text-field--suffixed": e.suffix,
          "v-textarea--auto-grow": e.autoGrow,
          "v-textarea--no-resize": e.noResize || e.autoGrow,
          "v-input--plain-underlined": w.value
        }, e.class],
        style: e.style
      }, M, j, {
        centerAffix: D.value === 1 && !w.value,
        focused: o.value
      }), {
        ...l,
        default: (W) => {
          let {
            id: R,
            isDisabled: F,
            isDirty: B,
            isReadonly: H,
            isValid: Z
          } = W;
          return r(fn, O({
            ref: g,
            style: {
              "--v-textarea-control-height": y.value
            },
            onClick: S,
            onMousedown: C,
            "onClick:clear": T,
            "onClick:prependInner": e["onClick:prependInner"],
            "onClick:appendInner": e["onClick:appendInner"]
          }, ee, {
            id: R.value,
            active: m.value || B.value,
            centerAffix: D.value === 1 && !w.value,
            dirty: B.value || e.dirty,
            disabled: F.value,
            focused: o.value,
            error: Z.value === !1
          }), {
            ...l,
            default: (Q) => {
              let {
                props: {
                  class: re,
                  ...X
                }
              } = Q;
              return r(ie, null, [e.prefix && r("span", {
                class: "v-text-field__prefix"
              }, [e.prefix]), $e(r("textarea", O({
                ref: h,
                class: re,
                value: i.value,
                onInput: I,
                autofocus: e.autofocus,
                readonly: H.value,
                disabled: F.value,
                placeholder: e.placeholder,
                rows: e.rows,
                name: e.name,
                onFocus: k,
                onBlur: s
              }, X, E), null), [[mt("intersect"), {
                handler: f
              }, null, {
                once: !0
              }]]), e.autoGrow && $e(r("textarea", {
                class: [re, "v-textarea__sizer"],
                id: `${X.id}-sizer`,
                "onUpdate:modelValue": (K) => i.value = K,
                ref: _,
                readonly: !0,
                "aria-hidden": "true"
              }, null), [[Xc, i.value]]), e.suffix && r("span", {
                class: "v-text-field__suffix"
              }, [e.suffix])]);
            }
          });
        },
        details: x ? (W) => {
          var R;
          return r(ie, null, [(R = l.details) == null ? void 0 : R.call(l, W), V && r(ie, null, [r("span", null, null), r(Pi, {
            active: e.persistentCounter || o.value,
            value: c.value,
            max: v.value,
            disabled: e.disabled
          }, l.counter)])]);
        } : void 0
      });
    }), ct({}, d, g, h);
  }
}), tb = p({
  withBackground: Boolean,
  ...le(),
  ...ke(),
  ...ge()
}, "VThemeProvider"), rS = L()({
  name: "VThemeProvider",
  props: tb(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    const {
      themeClasses: a
    } = Ve(e);
    return () => {
      var l;
      return e.withBackground ? r(e.tag, {
        class: ["v-theme-provider", a.value, e.class],
        style: e.style
      }, {
        default: () => {
          var i;
          return [(i = t.default) == null ? void 0 : i.call(t)];
        }
      }) : (l = t.default) == null ? void 0 : l.call(t);
    };
  }
}), nb = p({
  dotColor: String,
  fillDot: Boolean,
  hideDot: Boolean,
  icon: ue,
  iconColor: String,
  lineColor: String,
  ...le(),
  ...Ee(),
  ...pt(),
  ...je()
}, "VTimelineDivider"), ab = L()({
  name: "VTimelineDivider",
  props: nb(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    const {
      sizeClasses: a,
      sizeStyles: l
    } = zn(e, "v-timeline-divider__dot"), {
      backgroundColorStyles: i,
      backgroundColorClasses: o
    } = Pe($(e, "dotColor")), {
      roundedClasses: u
    } = Oe(e, "v-timeline-divider__dot"), {
      elevationClasses: s
    } = qe(e), {
      backgroundColorClasses: c,
      backgroundColorStyles: v
    } = Pe($(e, "lineColor"));
    return z(() => r("div", {
      class: ["v-timeline-divider", {
        "v-timeline-divider--fill-dot": e.fillDot
      }, e.class],
      style: e.style
    }, [r("div", {
      class: ["v-timeline-divider__before", c.value],
      style: v.value
    }, null), !e.hideDot && r("div", {
      key: "dot",
      class: ["v-timeline-divider__dot", s.value, u.value, a.value],
      style: l.value
    }, [r("div", {
      class: ["v-timeline-divider__inner-dot", o.value, u.value],
      style: i.value
    }, [t.default ? r(de, {
      key: "icon-defaults",
      disabled: !e.icon,
      defaults: {
        VIcon: {
          color: e.iconColor,
          icon: e.icon,
          size: e.size
        }
      }
    }, t.default) : r(Se, {
      key: "icon",
      color: e.iconColor,
      icon: e.icon,
      size: e.size
    }, null)])]), r("div", {
      class: ["v-timeline-divider__after", c.value],
      style: v.value
    }, null)])), {};
  }
}), _c = p({
  density: String,
  dotColor: String,
  fillDot: Boolean,
  hideDot: Boolean,
  hideOpposite: {
    type: Boolean,
    default: void 0
  },
  icon: ue,
  iconColor: String,
  lineInset: [Number, String],
  ...le(),
  ...Re(),
  ...je(),
  ...Ee(),
  ...pt(),
  ...ge()
}, "VTimelineItem"), uS = L()({
  name: "VTimelineItem",
  props: _c(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    const {
      dimensionStyles: a
    } = He(e), l = G(0), i = U();
    return J(i, (o) => {
      var u;
      o && (l.value = ((u = o.$el.querySelector(".v-timeline-divider__dot")) == null ? void 0 : u.getBoundingClientRect().width) ?? 0);
    }, {
      flush: "post"
    }), z(() => {
      var o, u;
      return r("div", {
        class: ["v-timeline-item", {
          "v-timeline-item--fill-dot": e.fillDot
        }, e.class],
        style: [{
          "--v-timeline-dot-size": te(l.value),
          "--v-timeline-line-inset": e.lineInset ? `calc(var(--v-timeline-dot-size) / 2 + ${te(e.lineInset)})` : te(0)
        }, e.style]
      }, [r("div", {
        class: "v-timeline-item__body",
        style: a.value
      }, [(o = t.default) == null ? void 0 : o.call(t)]), r(ab, {
        ref: i,
        hideDot: e.hideDot,
        icon: e.icon,
        iconColor: e.iconColor,
        size: e.size,
        elevation: e.elevation,
        dotColor: e.dotColor,
        fillDot: e.fillDot,
        rounded: e.rounded
      }, {
        default: t.icon
      }), e.density !== "compact" && r("div", {
        class: "v-timeline-item__opposite"
      }, [!e.hideOpposite && ((u = t.opposite) == null ? void 0 : u.call(t))])]);
    }), {};
  }
}), lb = p({
  align: {
    type: String,
    default: "center",
    validator: (e) => ["center", "start"].includes(e)
  },
  direction: {
    type: String,
    default: "vertical",
    validator: (e) => ["vertical", "horizontal"].includes(e)
  },
  justify: {
    type: String,
    default: "auto",
    validator: (e) => ["auto", "center"].includes(e)
  },
  side: {
    type: String,
    validator: (e) => e == null || ["start", "end"].includes(e)
  },
  lineThickness: {
    type: [String, Number],
    default: 2
  },
  lineColor: String,
  truncateLine: {
    type: String,
    validator: (e) => ["start", "end", "both"].includes(e)
  },
  ...Ot(_c({
    lineInset: 0
  }), ["dotColor", "fillDot", "hideOpposite", "iconColor", "lineInset", "size"]),
  ...le(),
  ...ze(),
  ...ge(),
  ...ke()
}, "VTimeline"), sS = L()({
  name: "VTimeline",
  props: lb(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    const {
      themeClasses: a
    } = Ve(e), {
      densityClasses: l
    } = Qe(e), {
      rtlClasses: i
    } = We();
    pe({
      VTimelineDivider: {
        lineColor: $(e, "lineColor")
      },
      VTimelineItem: {
        density: $(e, "density"),
        dotColor: $(e, "dotColor"),
        fillDot: $(e, "fillDot"),
        hideOpposite: $(e, "hideOpposite"),
        iconColor: $(e, "iconColor"),
        lineColor: $(e, "lineColor"),
        lineInset: $(e, "lineInset"),
        size: $(e, "size")
      }
    });
    const o = b(() => {
      const s = e.side ? e.side : e.density !== "default" ? "end" : null;
      return s && `v-timeline--side-${s}`;
    }), u = b(() => {
      const s = ["v-timeline--truncate-line-start", "v-timeline--truncate-line-end"];
      switch (e.truncateLine) {
        case "both":
          return s;
        case "start":
          return s[0];
        case "end":
          return s[1];
        default:
          return null;
      }
    });
    return z(() => r(e.tag, {
      class: ["v-timeline", `v-timeline--${e.direction}`, `v-timeline--align-${e.align}`, `v-timeline--justify-${e.justify}`, u.value, {
        "v-timeline--inset-line": !!e.lineInset
      }, a.value, l.value, o.value, i.value, e.class],
      style: [{
        "--v-timeline-line-thickness": te(e.lineThickness)
      }, e.style]
    }, t)), {};
  }
}), ib = p({
  ...le(),
  ...St({
    variant: "text"
  })
}, "VToolbarItems"), cS = L()({
  name: "VToolbarItems",
  props: ib(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    return pe({
      VBtn: {
        color: $(e, "color"),
        height: "inherit",
        variant: $(e, "variant")
      }
    }), z(() => {
      var a;
      return r("div", {
        class: ["v-toolbar-items", e.class],
        style: e.style
      }, [(a = t.default) == null ? void 0 : a.call(t)]);
    }), {};
  }
}), ob = p({
  id: String,
  text: String,
  ...Ce(ya({
    closeOnBack: !1,
    location: "end",
    locationStrategy: "connected",
    eager: !0,
    minWidth: 0,
    offset: 10,
    openOnClick: !1,
    openOnHover: !0,
    origin: "auto",
    scrim: !1,
    scrollStrategy: "reposition",
    transition: !1
  }), ["absolute", "persistent"])
}, "VTooltip"), rb = L()({
  name: "VTooltip",
  props: ob(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, n) {
    let {
      slots: t
    } = n;
    const a = oe(e, "modelValue"), {
      scopeId: l
    } = xn(), i = Ke(), o = b(() => e.id || `v-tooltip-${i}`), u = U(), s = b(() => e.location.split(" ").length > 1 ? e.location : e.location + " center"), c = b(() => e.origin === "auto" || e.origin === "overlap" || e.origin.split(" ").length > 1 || e.location.split(" ").length > 1 ? e.origin : e.origin + " center"), v = b(() => e.transition ? e.transition : a.value ? "scale-transition" : "fade-transition"), f = b(() => O({
      "aria-describedby": o.value
    }, e.activatorProps));
    return z(() => {
      const d = Tt.filterProps(e);
      return r(Tt, O({
        ref: u,
        class: ["v-tooltip", e.class],
        style: e.style,
        id: o.value
      }, d, {
        modelValue: a.value,
        "onUpdate:modelValue": (g) => a.value = g,
        transition: v.value,
        absolute: !0,
        location: s.value,
        origin: c.value,
        persistent: !0,
        role: "tooltip",
        activatorProps: f.value,
        _disableGlobalStack: !0
      }, l), {
        activator: t.activator,
        default: function() {
          var m;
          for (var g = arguments.length, y = new Array(g), h = 0; h < g; h++)
            y[h] = arguments[h];
          return ((m = t.default) == null ? void 0 : m.call(t, ...y)) ?? e.text;
        }
      });
    }), ct({}, u);
  }
}), dS = L()({
  name: "VValidation",
  props: zu(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, n) {
    let {
      slots: t
    } = n;
    const a = Wu(e, "validation");
    return () => {
      var l;
      return (l = t.default) == null ? void 0 : l.call(t, a);
    };
  }
});
function ub(e, n) {
  const t = n.modifiers || {}, a = n.value, {
    once: l,
    immediate: i,
    ...o
  } = t, u = !Object.keys(o).length, {
    handler: s,
    options: c
  } = typeof a == "object" ? a : {
    handler: a,
    options: {
      attributes: (o == null ? void 0 : o.attr) ?? u,
      characterData: (o == null ? void 0 : o.char) ?? u,
      childList: (o == null ? void 0 : o.child) ?? u,
      subtree: (o == null ? void 0 : o.sub) ?? u
    }
  }, v = new MutationObserver(function() {
    let f = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], d = arguments.length > 1 ? arguments[1] : void 0;
    s == null || s(f, d), l && Tc(e, n);
  });
  i && (s == null || s([], v)), e._mutate = Object(e._mutate), e._mutate[n.instance.$.uid] = {
    observer: v
  }, v.observe(e, c);
}
function Tc(e, n) {
  var t;
  (t = e._mutate) != null && t[n.instance.$.uid] && (e._mutate[n.instance.$.uid].observer.disconnect(), delete e._mutate[n.instance.$.uid]);
}
const vS = {
  mounted: ub,
  unmounted: Tc
};
function sb(e, n) {
  var l, i;
  const t = n.value, a = {
    passive: !((l = n.modifiers) != null && l.active)
  };
  window.addEventListener("resize", t, a), e._onResize = Object(e._onResize), e._onResize[n.instance.$.uid] = {
    handler: t,
    options: a
  }, (i = n.modifiers) != null && i.quiet || t();
}
function cb(e, n) {
  var l;
  if (!((l = e._onResize) != null && l[n.instance.$.uid])) return;
  const {
    handler: t,
    options: a
  } = e._onResize[n.instance.$.uid];
  window.removeEventListener("resize", t, a), delete e._onResize[n.instance.$.uid];
}
const fS = {
  mounted: sb,
  unmounted: cb
};
function Ac(e, n) {
  const {
    self: t = !1
  } = n.modifiers ?? {}, a = n.value, l = typeof a == "object" && a.options || {
    passive: !0
  }, i = typeof a == "function" || "handleEvent" in a ? a : a.handler, o = t ? e : n.arg ? document.querySelector(n.arg) : window;
  o && (o.addEventListener("scroll", i, l), e._onScroll = Object(e._onScroll), e._onScroll[n.instance.$.uid] = {
    handler: i,
    options: l,
    // Don't reference self
    target: t ? void 0 : o
  });
}
function Dc(e, n) {
  var i;
  if (!((i = e._onScroll) != null && i[n.instance.$.uid])) return;
  const {
    handler: t,
    options: a,
    target: l = e
  } = e._onScroll[n.instance.$.uid];
  l.removeEventListener("scroll", t, a), delete e._onScroll[n.instance.$.uid];
}
function db(e, n) {
  n.value !== n.oldValue && (Dc(e, n), Ac(e, n));
}
const mS = {
  mounted: Ac,
  unmounted: Dc,
  updated: db
};
function vb(e, n) {
  const t = typeof e == "string" ? Zc(e) : e, a = fb(t, n);
  return {
    mounted: a,
    updated: a,
    unmounted(l) {
      Ar(null, l);
    }
  };
}
function fb(e, n) {
  return function(t, a, l) {
    var f, d, g;
    const i = typeof n == "function" ? n(a) : n, o = ((f = a.value) == null ? void 0 : f.text) ?? a.value ?? (i == null ? void 0 : i.text), u = Ya(a.value) ? a.value : {}, s = () => o ?? t.textContent, c = (l.ctx === a.instance.$ ? (d = mb(l, a.instance.$)) == null ? void 0 : d.provides : (g = l.ctx) == null ? void 0 : g.provides) ?? a.instance.$.provides, v = Yt(e, O(i, u), s);
    v.appContext = Object.assign(/* @__PURE__ */ Object.create(null), a.instance.$.appContext, {
      provides: c
    }), Ar(v, t);
  };
}
function mb(e, n) {
  const t = /* @__PURE__ */ new Set(), a = (i) => {
    var o, u;
    for (const s of i) {
      if (!s) continue;
      if (s === e || s.el && e.el && s.el === e.el)
        return !0;
      t.add(s);
      let c;
      if (s.suspense ? c = a([s.ssContent]) : Array.isArray(s.children) ? c = a(s.children) : (o = s.component) != null && o.vnode && (c = a([(u = s.component) == null ? void 0 : u.subTree])), c)
        return c;
      t.delete(s);
    }
    return !1;
  };
  if (!a([n.subTree]))
    return Mn("Could not find original vnode, component will not inherit provides"), n;
  const l = Array.from(t).reverse();
  for (const i of l)
    if (i.component)
      return i.component;
  return n;
}
const gS = vb(rb, (e) => {
  var n;
  return {
    activator: "parent",
    location: (n = e.arg) == null ? void 0 : n.replace("-", " "),
    text: typeof e.value == "boolean" ? void 0 : e.value
  };
}), hS = {
  defaults: {
    global: {
      rounded: "sm"
    },
    VAvatar: {
      rounded: "circle"
    },
    VAutocomplete: {
      variant: "underlined"
    },
    VBanner: {
      color: "primary"
    },
    VBtn: {
      color: "primary",
      rounded: 0
    },
    VCheckbox: {
      color: "secondary"
    },
    VCombobox: {
      variant: "underlined"
    },
    VSelect: {
      variant: "underlined"
    },
    VSlider: {
      color: "primary"
    },
    VTabs: {
      color: "primary"
    },
    VTextarea: {
      variant: "underlined"
    },
    VTextField: {
      variant: "underlined"
    },
    VToolbar: {
      VBtn: {
        color: null
      }
    }
  },
  icons: {
    defaultSet: "mdi",
    sets: {
      mdi: Za
    }
  },
  theme: {
    themes: {
      light: {
        colors: {
          primary: "#3F51B5",
          "primary-darken-1": "#303F9F",
          "primary-lighten-1": "#C5CAE9",
          secondary: "#FF4081",
          "secondary-darken-1": "#F50057",
          "secondary-lighten-1": "#FF80AB",
          accent: "#009688"
        }
      }
    }
  }
}, yS = {
  defaults: {
    global: {
      rounded: "md"
    },
    VAvatar: {
      rounded: "circle"
    },
    VAutocomplete: {
      variant: "filled"
    },
    VBanner: {
      color: "primary"
    },
    VBtn: {
      color: "primary"
    },
    VCheckbox: {
      color: "secondary"
    },
    VCombobox: {
      variant: "filled"
    },
    VSelect: {
      variant: "filled"
    },
    VSlider: {
      color: "primary"
    },
    VTabs: {
      color: "primary"
    },
    VTextarea: {
      variant: "filled"
    },
    VTextField: {
      variant: "filled"
    },
    VToolbar: {
      VBtn: {
        color: null
      }
    }
  },
  icons: {
    defaultSet: "mdi",
    sets: {
      mdi: Za
    }
  },
  theme: {
    themes: {
      light: {
        colors: {
          primary: "#6200EE",
          "primary-darken-1": "#3700B3",
          secondary: "#03DAC6",
          "secondary-darken-1": "#018786",
          error: "#B00020"
        }
      }
    }
  }
}, bS = {
  defaults: {
    VAppBar: {
      flat: !0
    },
    VAutocomplete: {
      variant: "filled"
    },
    VBanner: {
      color: "primary"
    },
    VBottomSheet: {
      contentClass: "rounded-t-xl overflow-hidden"
    },
    VBtn: {
      color: "primary",
      rounded: "xl"
    },
    VBtnGroup: {
      rounded: "xl",
      VBtn: {
        rounded: null
      }
    },
    VCard: {
      rounded: "lg"
    },
    VCheckbox: {
      color: "secondary",
      inset: !0
    },
    VChip: {
      rounded: "sm"
    },
    VCombobox: {
      variant: "filled"
    },
    VNavigationDrawer: {
      // VList: {
      //   nav: true,
      //   VListItem: {
      //     rounded: 'xl',
      //   },
      // },
    },
    VSelect: {
      variant: "filled"
    },
    VSlider: {
      color: "primary"
    },
    VTabs: {
      color: "primary"
    },
    VTextarea: {
      variant: "filled"
    },
    VTextField: {
      variant: "filled"
    },
    VToolbar: {
      VBtn: {
        color: null
      }
    }
  },
  icons: {
    defaultSet: "mdi",
    sets: {
      mdi: Za
    }
  },
  theme: {
    themes: {
      light: {
        colors: {
          primary: "#6750a4",
          secondary: "#b4b0bb",
          tertiary: "#7d5260",
          error: "#b3261e",
          surface: "#fffbfe"
        }
      }
    }
  }
}, gb = p({
  allDay: Boolean,
  interval: Object,
  intervalDivisions: {
    type: Number,
    required: !0
  },
  intervalDuration: {
    type: Number,
    required: !0
  },
  intervalHeight: {
    type: Number,
    required: !0
  },
  event: Object
}, "VCalendarIntervalEvent"), yr = L()({
  name: "VCalendarIntervalEvent",
  props: gb(),
  setup(e) {
    const n = Mt(), t = () => {
      var a, l, i, o;
      if (!((a = e.event) != null && a.first) && !((l = e.event) != null && l.last) || n.isEqual((i = e.event) == null ? void 0 : i.start, (o = e.interval) == null ? void 0 : o.start))
        return {
          height: "100%",
          margin: te(0)
        };
      {
        const {
          height: u,
          margin: s
        } = Array.from({
          length: e.intervalDivisions
        }, (c) => c * (e.intervalDuration / e.intervalDivisions)).reduce((c, v, f) => {
          var d, g;
          return n.isBefore(n.addMinutes((d = e.interval) == null ? void 0 : d.start, v), (g = e.event) == null ? void 0 : g.start) ? {
            height: te(e.intervalHeight / e.intervalDivisions * f),
            margin: te(e.intervalHeight / e.intervalDivisions * f)
          } : {
            height: c.height,
            margin: c.margin
          };
        }, {
          height: "",
          margin: ""
        });
        return {
          height: u,
          margin: s
        };
      }
    };
    return z(() => {
      var a, l, i, o, u;
      return r(Lt, {
        height: t().height,
        density: "comfortable",
        style: `margin-top: ${t().margin}`,
        class: "v-calendar-internal-event",
        color: ((a = e.event) == null ? void 0 : a.color) ?? void 0,
        rounded: (l = e.event) != null && l.first && ((i = e.event) != null && i.last) ? !0 : (o = e.event) != null && o.first ? "t" : (u = e.event) != null && u.last ? "b" : !1
      }, {
        default: () => {
          var s, c;
          return [(s = e.event) != null && s.first ? (c = e.event) == null ? void 0 : c.title : ""];
        }
      });
    }), {};
  }
}), Bc = p({
  day: {
    type: Object,
    default: () => ({})
  },
  dayIndex: Number,
  events: Array,
  intervalDivisions: {
    type: Number,
    default: 2
  },
  intervalDuration: {
    type: Number,
    default: 60
  },
  intervalHeight: {
    type: Number,
    default: 48
  },
  intervalFormat: {
    type: [String, Function],
    default: "fullTime12h"
  },
  intervalStart: {
    type: Number,
    default: 0
  }
}, "VCalendarInterval"), br = L()({
  name: "VCalendarInterval",
  props: {
    index: {
      type: Number,
      required: !0
    },
    ...Bc()
  },
  setup(e, n) {
    let {
      emit: t,
      slots: a
    } = n;
    const l = Mt(), i = b(() => {
      const o = l.addMinutes(l.startOfDay(e.day.date), e.intervalDuration * (e.index + e.intervalStart)), u = l.addMinutes(l.startOfDay(e.day.date), e.intervalDuration * (e.index + e.intervalStart + 1) - 1);
      return {
        ...e.day,
        label: l.format(o, "fullTime24h"),
        start: o,
        end: u,
        events: e.events ? e.events.filter((s) => !s.allDay && (l.isEqual(o, s.start) || l.isWithinRange(s.start, [o, u]) || l.isWithinRange(o, [s.start, s.end]) || l.isEqual(u, s.end))).map((s) => ({
          ...s,
          first: l.isEqual(o, s.start) || l.isWithinRange(s.start, [o, u]),
          last: l.isEqual(u, s.end) || l.isWithinRange(s.end, [o, u])
        })) : []
      };
    });
    return z(() => {
      var o, u;
      return e.dayIndex === 0 ? r("div", {
        class: "v-calendar-day__row-with-label",
        style: `height: ${te(e.intervalHeight)}`
      }, [r("div", {
        class: "v-calendar-day__row-label"
      }, [r("slot", {
        name: "intervalFormat",
        interval: i.value
      }, [e.index ? e.intervalFormat ? typeof e.intervalFormat == "string" ? l.format(i.value.start, "hours12h") : e.intervalFormat(i.value) : i.value.label : ""])]), r("div", {
        class: "v-calendar-day__row-hairline"
      }, null), r("div", {
        class: ["v-calendar-day__row-content", i.value.events.some((s) => !s.last) ? "v-calendar-day__row-content-through" : ""]
      }, [r("slot", {
        name: "intervalBody",
        interval: i.value
      }, [(o = i.value.events) == null ? void 0 : o.map((s) => r(yr, {
        event: s,
        interval: i.value,
        intervalDivisions: e.intervalDivisions,
        intervalDuration: e.intervalDuration,
        intervalHeight: e.intervalHeight
      }, null))])])]) : r("div", {
        class: "v-calendar-day__row-without-label",
        style: `height: ${te(e.intervalHeight)}`
      }, [r("div", {
        class: ["v-calendar-day__row-content", i.value.events.some((s) => !s.last) ? "v-calendar-day__row-content-through" : ""]
      }, [r("slot", {
        name: "intervalBody",
        interval: i.value
      }, [(u = i.value.events) == null ? void 0 : u.filter((s) => !s.allDay).map((s) => r(yr, {
        event: s,
        interval: i.value,
        intervalDivisions: e.intervalDivisions,
        intervalDuration: e.intervalDuration,
        intervalHeight: e.intervalHeight
      }, null))])])]);
    }), {
      interval: i
    };
  }
}), Mc = p({
  hideDayHeader: Boolean,
  intervals: {
    type: Number,
    default: 24
  },
  ...Bc()
}, "VCalendarDay"), _l = L()({
  name: "VCalendarDay",
  props: Mc(),
  setup(e) {
    const n = Mt(), t = b(() => [...Array.from({
      length: e.intervals
    }, (a, l) => l).filter((a, l) => e.intervalDuration * (l + e.intervalStart) < 1440)]);
    return z(() => {
      const a = br.filterProps(e);
      return r("div", {
        class: "v-calendar-day__container"
      }, [!e.hideDayHeader && r("div", {
        key: "calender-week-name",
        class: "v-calendar-weekly__head-weekday"
      }, [n.format(e.day.date, "weekdayShort"), r("div", null, [r(fe, {
        icon: !0,
        text: n.format(e.day.date, "dayOfMonth"),
        variant: "text"
      }, null)])]), t.value.map((l, i) => r(br, O({
        index: i
      }, a), null))]);
    }), {
      intervals: t
    };
  }
}), pc = p({
  nextIcon: {
    type: String,
    default: "$next"
  },
  prevIcon: {
    type: String,
    default: "$prev"
  },
  title: String,
  text: {
    type: String,
    default: "$vuetify.calendar.today"
  },
  viewMode: {
    type: String,
    default: "month"
  }
}, "VCalendarHeader"), kr = L()({
  name: "VCalendarHeader",
  props: pc(),
  emits: {
    "click:next": () => !0,
    "click:prev": () => !0,
    "click:toToday": () => !0
  },
  setup(e, n) {
    let {
      emit: t
    } = n;
    const {
      t: a
    } = Te();
    function l() {
      t("click:prev");
    }
    function i() {
      t("click:next");
    }
    function o() {
      t("click:toToday");
    }
    return z(() => r("div", {
      class: "v-calendar-header"
    }, [e.text && r(fe, {
      key: "today",
      class: "v-calendar-header__today",
      text: a(e.text),
      variant: "outlined",
      onClick: o
    }, null), r(fe, {
      density: "comfortable",
      icon: e.prevIcon,
      variant: "text",
      onClick: l
    }, null), r(fe, {
      density: "comfortable",
      icon: e.nextIcon,
      variant: "text",
      onClick: i
    }, null), r("div", {
      class: "v-calendar-header__title"
    }, [e.title])])), {};
  }
}), hb = p({
  allDay: Boolean,
  day: Object,
  event: Object
}, "VCalendarEvent"), Sr = L()({
  name: "VCalendarEvent",
  props: hb(),
  setup(e) {
    return z(() => r(Yn, {
      color: e.allDay ? "primary" : void 0,
      density: "comfortable",
      label: e.allDay,
      width: "100%"
    }, {
      default: () => {
        var n, t;
        return [r(qm, {
          inline: !0,
          dot: !0,
          color: (n = e.event) == null ? void 0 : n.color
        }, null), (t = e.event) == null ? void 0 : t.title];
      }
    })), {};
  }
}), yb = p({
  active: Boolean,
  color: String,
  day: Object,
  disabled: Boolean,
  events: Array,
  title: [Number, String]
}, "VCalendarMonthDay"), bb = L()({
  name: "VCalendarMonthDay",
  props: yb(),
  setup(e, n) {
    let {
      emit: t,
      slots: a
    } = n;
    return z(() => {
      var i, o, u, s, c, v, f, d, g, y, h;
      const l = !!(e.title || (i = a.title) != null && i.call(a, {
        title: e.title
      }));
      return r("div", {
        class: ["v-calendar-month__day"]
      }, [!((o = e.day) != null && o.isHidden) && l && r("div", {
        key: "title",
        class: "v-calendar-weekly__day-label"
      }, [((u = a.title) == null ? void 0 : u.call(a, {
        title: e.title
      })) ?? r(fe, {
        class: (s = e.day) != null && s.isToday ? "v-calendar-weekly__day-label__today" : void 0,
        color: e.color,
        disabled: e.disabled,
        icon: !0,
        size: "x-small",
        variant: (c = e.day) != null && c.isToday ? void 0 : "flat"
      }, {
        default: () => [e.title]
      })]), !((v = e.day) != null && v.isHidden) && r("div", {
        key: "content",
        class: "v-calendar-weekly__day-content"
      }, [((f = a.content) == null ? void 0 : f.call(a)) ?? r("div", null, [r("div", {
        class: "v-calendar-weekly__day-alldayevents-container"
      }, [(d = e.events) == null ? void 0 : d.filter((m) => m.allDay).map((m) => a.event ? a.event({
        day: e.day,
        allDay: !0,
        event: m
      }) : r(Sr, {
        day: e.day,
        event: m,
        allDay: !0
      }, null))]), r("div", {
        class: "v-calendar-weekly__day-events-container"
      }, [(g = e.events) == null ? void 0 : g.filter((m) => !m.allDay).map((m) => a.event ? a.event({
        day: e.day,
        event: m,
        allDay: !1
      }) : r(Sr, {
        day: e.day,
        event: m
      }, null))])])]), !((y = e.day) != null && y.isHidden) && ((h = a.default) == null ? void 0 : h.call(a))]);
    }), {};
  }
}), kb = p({
  hideHeader: Boolean,
  hideWeekNumber: Boolean,
  ...dc(),
  ...Mc(),
  ...pc()
}, "VCalender"), kS = L()({
  name: "VCalendar",
  props: kb(),
  emits: {
    next: null,
    prev: null,
    "update:modelValue": null
  },
  setup(e, n) {
    let {
      emit: t,
      slots: a
    } = n;
    const l = Mt(), {
      daysInMonth: i,
      daysInWeek: o,
      genDays: u,
      model: s,
      displayValue: c,
      weekNumbers: v,
      weekDays: f
    } = vc(e), d = l.getWeekdays();
    function g() {
      e.viewMode === "month" && (s.value = [l.addMonths(c.value, 1)]), e.viewMode === "week" && (s.value = [l.addDays(c.value, 7)]), e.viewMode === "day" && (s.value = [l.addDays(c.value, 1)]);
    }
    function y() {
      e.viewMode === "month" && (s.value = [l.addMonths(c.value, -1)]), e.viewMode === "week" && (s.value = [l.addDays(c.value, -7)]), e.viewMode === "day" && (s.value = [l.addDays(c.value, -1)]);
    }
    function h() {
      s.value = [l.date()];
    }
    const m = b(() => l.format(c.value, "monthAndYear"));
    return z(() => {
      var C;
      const k = _l.filterProps(e), S = kr.filterProps(e);
      return r("div", {
        class: ["v-calendar", {
          "v-calendar-monthly": e.viewMode === "month",
          "v-calendar-weekly": e.viewMode === "week",
          "v-calendar-day": e.viewMode === "day"
        }]
      }, [r("div", null, [!e.hideHeader && (a.header ? a.header({
        title: m.value
      }) : r(kr, O({
        key: "calendar-header"
      }, S, {
        title: m.value,
        "onClick:next": g,
        "onClick:prev": y,
        "onClick:toToday": h
      }), null))]), r("div", {
        class: ["v-calendar__container", `days__${f.value.length}`]
      }, [e.viewMode === "month" && !e.hideDayHeader && r("div", {
        class: ["v-calendar-weekly__head", `days__${f.value.length}`, ...e.hideWeekNumber ? [] : ["v-calendar-weekly__head-weeknumbers"]],
        key: "calenderWeeklyHead"
      }, [e.hideWeekNumber ? "" : r("div", {
        key: "weekNumber0",
        class: "v-calendar-weekly__head-weeknumber"
      }, null), f.value.map((T) => r("div", {
        class: `v-calendar-weekly__head-weekday${e.hideWeekNumber ? "" : "-with-weeknumber"}`
      }, [d[T]]))]), e.viewMode === "month" && r("div", {
        key: "VCalendarMonth",
        class: ["v-calendar-month__days", `days${e.hideWeekNumber ? "" : "-with-weeknumbers"}__${f.value.length}`, ...e.hideWeekNumber ? [] : ["v-calendar-month__weeknumbers"]]
      }, [od(i.value, f.value.length).map((T, I) => [e.hideWeekNumber ? "" : r("div", {
        class: "v-calendar-month__weeknumber"
      }, [v.value[I]]), T.map((_) => {
        var D;
        return r(bb, {
          color: l.isSameDay(l.date(), _.date) ? "primary" : void 0,
          day: _,
          title: _ ? l.format(_.date, "dayOfMonth") : "NaN",
          events: (D = e.events) == null ? void 0 : D.filter((w) => l.isSameDay(_.date, w.start) || l.isSameDay(_.date, w.end))
        }, {
          event: a.event
        });
      })])]), e.viewMode === "week" && o.value.map((T, I) => {
        var _;
        return r(_l, O(k, {
          day: T,
          dayIndex: I,
          events: (_ = e.events) == null ? void 0 : _.filter((D) => l.isSameDay(D.start, T.date) || l.isSameDay(D.end, T.date))
        }), null);
      }), e.viewMode === "day" && r(_l, O(k, {
        day: u([c.value], l.date())[0],
        dayIndex: 0,
        events: (C = e.events) == null ? void 0 : C.filter((T) => l.isSameDay(T.start, u([c.value], l.date())[0].date) || l.isSameDay(T.end, u([c.value], l.date())[0].date))
      }), null)])]);
    }), {
      daysInMonth: i,
      daysInWeek: o,
      genDays: u
    };
  }
}), Sb = p({
  displayFormat: [Function, String],
  hideActions: Boolean,
  location: {
    type: String,
    default: "bottom start"
  },
  ...Gt(),
  ...Un(),
  ...As(),
  ...Gn({
    placeholder: "mm/dd/yyyy",
    prependIcon: "$calendar"
  }),
  ...Ce(hc({
    hideHeader: !0,
    showAdjacentMonths: !0
  }), ["active", "location", "rounded"])
}, "VDateInput"), SS = L()({
  name: "VDateInput",
  props: Sb(),
  emits: {
    save: (e) => !0,
    cancel: () => !0,
    "update:modelValue": (e) => !0
  },
  setup(e, n) {
    let {
      emit: t,
      slots: a
    } = n;
    const {
      t: l
    } = Te(), i = Mt(), {
      mobile: o
    } = ht(), {
      isFocused: u,
      focus: s,
      blur: c
    } = Pt(e), v = oe(e, "modelValue", e.multiple ? [] : null, (A) => Array.isArray(A) ? A.map((V) => i.toJsDate(V)) : A && i.toJsDate(A), (A) => Array.isArray(A) ? A.map((V) => i.date(V)) : A && i.date(A)), f = G(!1), d = G(!1), g = U();
    function y(A) {
      return typeof e.displayFormat == "function" ? e.displayFormat(A) : i.format(A, e.displayFormat ?? "keyboardDate");
    }
    const h = b(() => {
      const A = Ae(v.value);
      if (!A.length) return null;
      if (e.multiple === !0)
        return l("$vuetify.datePicker.itemsSelected", A.length);
      if (e.multiple === "range") {
        const V = A[0], x = A[A.length - 1];
        return !i.isValid(V) || !i.isValid(x) ? "" : `${y(i.date(V))} - ${y(i.date(x))}`;
      }
      return i.isValid(v.value) ? y(i.date(v.value)) : "";
    }), m = b(() => {
      if (o.value)
        return d.value ? "text" : "none";
    }), k = b(() => !e.disabled && !e.readonly), S = b(() => !(o.value && d.value) && e.readonly);
    J(f, (A) => {
      A || (d.value = !1);
    });
    function C(A) {
      if (A.key !== "Enter") return;
      if (!f.value || !u.value) {
        f.value = !0;
        return;
      }
      const V = A.target;
      v.value = V.value === "" ? null : V.value;
    }
    function T(A) {
      A.preventDefault(), A.stopPropagation(), f.value && o.value ? d.value = !0 : f.value = !0;
    }
    function I() {
      t("cancel"), f.value = !1, d.value = !1;
    }
    function _(A) {
      t("save", A), f.value = !1;
    }
    function D(A) {
      A == null && (v.value = null);
    }
    function w(A) {
      A || (d.value = !1);
    }
    function P() {
      c(), o.value && d.value && !u.value && (f.value = !1, d.value = !1);
    }
    return z(() => {
      const A = Go.filterProps(e), V = nr.filterProps(Ce(e, ["active", "location", "rounded"])), x = At.filterProps(e);
      return r(At, O({
        ref: g
      }, x, {
        class: e.class,
        style: e.style,
        modelValue: h.value,
        inputmode: m.value,
        readonly: S.value,
        onKeydown: k.value ? C : void 0,
        focused: f.value || u.value,
        onFocus: s,
        onBlur: P,
        "onClick:control": k.value ? T : void 0,
        "onClick:prepend": k.value ? T : void 0,
        "onUpdate:modelValue": D
      }), {
        ...a,
        default: () => {
          var M;
          return r(ie, null, [r(Fn, {
            modelValue: f.value,
            "onUpdate:modelValue": [(E) => f.value = E, w],
            activator: "parent",
            "min-width": "0",
            eager: u.value,
            location: e.location,
            closeOnContentClick: !1,
            openOnClick: !1
          }, {
            default: () => [r(Go, O(A, {
              modelValue: v.value,
              "onUpdate:modelValue": (E) => v.value = E,
              onSave: _,
              onCancel: I
            }), {
              default: (E) => {
                let {
                  actions: N,
                  model: j,
                  save: ee,
                  cancel: W,
                  isPristine: R
                } = E;
                function F(B) {
                  var H;
                  e.hideActions ? (v.value = B, e.multiple || (f.value = !1)) : j.value = B, t("save", B), (H = g.value) == null || H.blur();
                }
                return r(nr, O(V, {
                  modelValue: e.hideActions ? v.value : j.value,
                  "onUpdate:modelValue": (B) => F(B),
                  onMousedown: (B) => B.preventDefault()
                }), {
                  actions: e.hideActions ? void 0 : () => {
                    var B;
                    return ((B = a.actions) == null ? void 0 : B.call(a, {
                      save: ee,
                      cancel: W,
                      isPristine: R
                    })) ?? N();
                  }
                });
              }
            })]
          }), (M = a.default) == null ? void 0 : M.call(a)]);
        }
      });
    }), ct({}, g);
  }
}), wb = p({
  clearable: Boolean,
  file: {
    type: Object,
    default: null
  },
  fileIcon: {
    type: String,
    // TODO: setup up a proper aliased icon
    default: "mdi-file-document"
  },
  showSize: Boolean,
  ...Si({
    border: !0,
    rounded: !0,
    lines: "two"
  })
}, "VFileUploadItem"), xb = L()({
  name: "VFileUploadItem",
  props: wb(),
  emits: {
    "click:remove": () => !0,
    click: (e) => !0
  },
  setup(e, n) {
    let {
      emit: t,
      slots: a
    } = n;
    const l = U(), i = b(() => typeof e.showSize != "boolean" ? e.showSize : void 0);
    function o() {
      t("click:remove");
    }
    Fe(() => {
      var u;
      l.value = (u = e.file) != null && u.type.startsWith("image") ? URL.createObjectURL(e.file) : void 0;
    }), z(() => {
      var s, c, v;
      const u = kt.filterProps(e);
      return r(kt, O(u, {
        title: e.title ?? ((s = e.file) == null ? void 0 : s.name),
        subtitle: e.showSize ? Dl((c = e.file) == null ? void 0 : c.size, i.value) : (v = e.file) == null ? void 0 : v.type,
        class: "v-file-upload-item"
      }), {
        ...a,
        prepend: (f) => r(ie, null, [a.prepend ? r(de, {
          defaults: {
            VAvatar: {
              image: l.value,
              icon: l.value ? void 0 : e.fileIcon,
              rounded: !0
            }
          }
        }, {
          default: () => {
            var d;
            return [((d = a.prepend) == null ? void 0 : d.call(a, f)) ?? r(ut, null, null)];
          }
        }) : r(ut, {
          icon: e.fileIcon,
          image: l.value,
          rounded: !0
        }, null)]),
        append: (f) => {
          var d;
          return r(ie, null, [e.clearable && r(ie, null, [a.clear ? r(de, {
            defaults: {
              VBtn: {
                icon: "$clear",
                density: "comfortable",
                variant: "text"
              }
            }
          }, {
            default: () => {
              var g;
              return [((g = a.clear) == null ? void 0 : g.call(a, {
                ...f,
                props: {
                  onClick: o
                }
              })) ?? r(fe, null, null)];
            }
          }) : r(fe, {
            icon: "$clear",
            density: "comfortable",
            variant: "text",
            onClick: o
          }, null)]), (d = a.append) == null ? void 0 : d.call(a, f)]);
        }
      });
    });
  }
}), Cb = p({
  browseText: {
    type: String,
    default: "$vuetify.fileUpload.browse"
  },
  dividerText: {
    type: String,
    default: "$vuetify.fileUpload.divider"
  },
  title: {
    type: String,
    default: "$vuetify.fileUpload.title"
  },
  subtitle: String,
  icon: {
    type: ue,
    default: "$upload"
  },
  modelValue: {
    type: [Array, Object],
    default: null,
    validator: (e) => Ae(e).every((n) => n != null && typeof n == "object")
  },
  clearable: Boolean,
  disabled: Boolean,
  hideBrowse: Boolean,
  multiple: Boolean,
  scrim: {
    type: [Boolean, String],
    default: !0
  },
  showSize: Boolean,
  name: String,
  ...ll(),
  ...ze(),
  ...Ot(ns({
    length: 150
  }), ["length", "thickness", "opacity"]),
  ...ka()
}, "VFileUpload"), wS = L()({
  name: "VFileUpload",
  inheritAttrs: !1,
  props: Cb(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, n) {
    let {
      attrs: t,
      slots: a
    } = n;
    const {
      t: l
    } = Te(), {
      densityClasses: i
    } = Qe(e), o = oe(e, "modelValue", e.modelValue, (h) => Ae(h), (h) => e.multiple || Array.isArray(e.modelValue) ? h : h[0]), u = G(!1), s = U(null), c = U(null);
    Ue(() => {
      var h, m;
      (h = s.value) == null || h.$el.addEventListener("dragover", v), (m = s.value) == null || m.$el.addEventListener("drop", d);
    }), Tr(() => {
      var h, m;
      (h = s.value) == null || h.$el.removeEventListener("dragover", v), (m = s.value) == null || m.$el.removeEventListener("drop", d);
    });
    function v(h) {
      h.preventDefault(), h.stopImmediatePropagation(), u.value = !0;
    }
    function f(h) {
      h.preventDefault(), u.value = !1;
    }
    function d(h) {
      var S;
      h.preventDefault(), h.stopImmediatePropagation(), u.value = !1;
      const m = Array.from(((S = h.dataTransfer) == null ? void 0 : S.files) ?? []);
      if (!m.length) return;
      if (!e.multiple) {
        o.value = [m[0]];
        return;
      }
      const k = o.value.slice();
      for (const C of m)
        k.some((T) => T.name === C.name) || k.push(C);
      o.value = k;
    }
    function g() {
      var h;
      (h = c.value) == null || h.click();
    }
    function y(h) {
      const m = o.value.filter((k, S) => S !== h);
      o.value = m, !(m.length > 0 || !c.value) && (c.value.value = "");
    }
    z(() => {
      const h = !!(a.title || e.title), m = !!(a.icon || e.icon), k = !!(!e.hideBrowse && (a.browse || e.density === "default")), S = Lt.filterProps(e), C = It.filterProps(e), [T, I] = Nt(t), _ = r("input", O({
        ref: c,
        type: "file",
        disabled: e.disabled,
        multiple: e.multiple,
        name: e.name,
        onChange: (D) => {
          if (!D.target) return;
          const w = D.target;
          o.value = [...w.files ?? []];
        }
      }, I), null);
      return r(ie, null, [r(Lt, O({
        ref: s
      }, S, {
        class: ["v-file-upload", {
          "v-file-upload--clickable": !k,
          "v-file-upload--disabled": e.disabled,
          "v-file-upload--dragging": u.value
        }, i.value],
        onDragleave: f,
        onDragover: v,
        onDrop: d,
        onClick: k ? void 0 : g
      }, T), {
        default: () => {
          var D, w, P;
          return [m && r("div", {
            key: "icon",
            class: "v-file-upload-icon"
          }, [a.icon ? r(de, {
            key: "icon-defaults",
            defaults: {
              VIcon: {
                icon: e.icon
              }
            }
          }, {
            default: () => [a.icon()]
          }) : r(Se, {
            key: "icon-icon",
            icon: e.icon
          }, null)]), h && r("div", {
            key: "title",
            class: "v-file-upload-title"
          }, [((D = a.title) == null ? void 0 : D.call(a)) ?? l(e.title)]), e.density === "default" && r(ie, null, [r("div", {
            key: "upload-divider",
            class: "v-file-upload-divider"
          }, [((w = a.divider) == null ? void 0 : w.call(a)) ?? r(It, C, {
            default: () => [l(e.dividerText)]
          })]), k && r(ie, null, [a.browse ? r(de, {
            defaults: {
              VBtn: {
                readonly: e.disabled,
                size: "large",
                text: l(e.browseText),
                variant: "tonal"
              }
            }
          }, {
            default: () => [a.browse({
              props: {
                onClick: g
              }
            })]
          }) : r(fe, {
            readonly: e.disabled,
            size: "large",
            text: l(e.browseText),
            variant: "tonal",
            onClick: g
          }, null)]), e.subtitle && r("div", {
            class: "v-file-upload-subtitle"
          }, [e.subtitle])]), r(Tt, {
            "model-value": u.value,
            contained: !0,
            scrim: e.scrim
          }, null), ((P = a.input) == null ? void 0 : P.call(a, {
            inputNode: _
          })) ?? _];
        }
      }), o.value.length > 0 && r("div", {
        class: "v-file-upload-items"
      }, [o.value.map((D, w) => {
        const P = {
          file: D,
          props: {
            "onClick:remove": () => y(w)
          }
        };
        return r(de, {
          key: w,
          defaults: {
            VFileUploadItem: {
              file: D,
              clearable: e.clearable,
              disabled: e.disabled,
              showSize: e.showSize
            }
          }
        }, {
          default: () => {
            var A;
            return [((A = a.item) == null ? void 0 : A.call(a, P)) ?? r(xb, {
              key: w,
              "onClick:remove": () => y(w)
            }, a)];
          }
        });
      })])]);
    });
  }
}), Vb = 50, Pb = 500;
function Ib(e) {
  let {
    toggleUpDown: n
  } = e, t = -1, a = -1;
  Xe(i);
  function l(u) {
    i(), o(u), t = window.setTimeout(() => {
      a = window.setInterval(() => o(u), Vb);
    }, Pb);
  }
  function i() {
    window.clearTimeout(t), window.clearInterval(a);
  }
  function o(u) {
    n(u === "up");
  }
  return {
    holdStart: l,
    holdStop: i
  };
}
const _b = p({
  controlVariant: {
    type: String,
    default: "default"
  },
  inset: Boolean,
  hideInput: Boolean,
  modelValue: {
    type: Number,
    default: null
  },
  min: {
    type: Number,
    default: Number.MIN_SAFE_INTEGER
  },
  max: {
    type: Number,
    default: Number.MAX_SAFE_INTEGER
  },
  step: {
    type: Number,
    default: 1
  },
  precision: {
    type: Number,
    default: 0
  },
  ...Ce(Gn(), ["modelValue", "validationValue"])
}, "VNumberInput"), xS = L()({
  name: "VNumberInput",
  props: {
    ..._b()
  },
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, n) {
    let {
      slots: t
    } = n;
    const a = U(), {
      holdStart: l,
      holdStop: i
    } = Ib({
      toggleUpDown: P
    }), o = ha(e), u = b(() => o.isDisabled.value || o.isReadonly.value), {
      isFocused: s,
      focus: c,
      blur: v
    } = Pt(e);
    function f(B) {
      let H = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : e.precision;
      const Z = H == null ? String(B) : B.toFixed(H);
      return s.value ? Number(Z).toString() : Z;
    }
    const d = oe(e, "modelValue", null, (B) => B ?? null, (B) => B == null ? B ?? null : Me(Number(B), e.min, e.max)), g = G(null);
    Fe(() => {
      s.value && !u.value || (d.value == null ? g.value = null : isNaN(d.value) || (g.value = f(d.value)));
    });
    const y = b({
      get: () => g.value,
      set(B) {
        B === null || B === "" ? (d.value = null, g.value = null) : !isNaN(Number(B)) && Number(B) <= e.max && Number(B) >= e.min && (d.value = Number(B), g.value = B);
      }
    }), h = b(() => u.value ? !1 : (d.value ?? 0) + e.step <= e.max), m = b(() => u.value ? !1 : (d.value ?? 0) - e.step >= e.min), k = b(() => e.hideInput ? "stacked" : e.controlVariant), S = b(() => k.value === "split" ? "$plus" : "$collapse"), C = b(() => k.value === "split" ? "$minus" : "$expand"), T = b(() => k.value === "split" ? "default" : "small"), I = b(() => k.value === "stacked" ? "auto" : "100%"), _ = b(() => ({
      props: {
        onClick: x,
        onPointerup: M,
        onPointerdown: E
      }
    })), D = b(() => ({
      props: {
        onClick: x,
        onPointerup: M,
        onPointerdown: N
      }
    }));
    J(() => e.precision, () => ee()), Ue(() => {
      j();
    });
    function w(B) {
      if (B == null) return 0;
      const H = B.toString(), Z = H.indexOf(".");
      return ~Z ? H.length - Z : 0;
    }
    function P() {
      let B = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !0;
      if (u.value) return;
      if (d.value == null) {
        y.value = f(Me(0, e.min, e.max));
        return;
      }
      let H = Math.max(w(d.value), w(e.step));
      e.precision != null && (H = Math.max(H, e.precision)), B ? h.value && (y.value = f(d.value + e.step, H)) : m.value && (y.value = f(d.value - e.step, H));
    }
    function A(B) {
      var X, K, ne, ye;
      if (!B.data) return;
      const H = (X = B.target) == null ? void 0 : X.value, Z = (K = B.target) == null ? void 0 : K.selectionStart, Q = (ne = B.target) == null ? void 0 : ne.selectionEnd, re = H ? H.slice(0, Z) + B.data + H.slice(Q) : B.data;
      /^-?(\d+(\.\d*)?|(\.\d+)|\d*|\.)$/.test(re) || B.preventDefault(), e.precision != null && (((ye = re.split(".")[1]) == null ? void 0 : ye.length) > e.precision && B.preventDefault(), e.precision === 0 && re.includes(".") && B.preventDefault());
    }
    async function V(B) {
      ["Enter", "ArrowLeft", "ArrowRight", "Backspace", "Delete", "Tab"].includes(B.key) || B.ctrlKey || ["ArrowDown", "ArrowUp"].includes(B.key) && (B.preventDefault(), j(), await we(), B.key === "ArrowDown" ? P(!1) : P());
    }
    function x(B) {
      B.stopPropagation();
    }
    function M(B) {
      const H = B.currentTarget;
      H == null || H.releasePointerCapture(B.pointerId), B.preventDefault(), B.stopPropagation(), i();
    }
    function E(B) {
      const H = B.currentTarget;
      H == null || H.setPointerCapture(B.pointerId), B.preventDefault(), B.stopPropagation(), l("up");
    }
    function N(B) {
      const H = B.currentTarget;
      H == null || H.setPointerCapture(B.pointerId), B.preventDefault(), B.stopPropagation(), l("down");
    }
    function j() {
      if (u.value || !a.value) return;
      const B = a.value.value;
      B && !isNaN(Number(B)) ? y.value = f(Me(Number(B), e.min, e.max)) : y.value = null;
    }
    function ee() {
      if (!u.value) {
        if (d.value === null || isNaN(d.value)) {
          y.value = null;
          return;
        }
        y.value = e.precision == null ? String(d.value) : d.value.toFixed(e.precision);
      }
    }
    function W() {
      if (!u.value) {
        if (d.value === null || isNaN(d.value)) {
          y.value = null;
          return;
        }
        y.value = d.value.toString();
      }
    }
    function R() {
      c(), W();
    }
    function F() {
      v(), j();
    }
    return z(() => {
      const {
        modelValue: B,
        ...H
      } = At.filterProps(e);
      function Z() {
        return t.increment ? r(de, {
          key: "increment-defaults",
          defaults: {
            VBtn: {
              disabled: !h.value,
              flat: !0,
              height: I.value,
              size: T.value,
              icon: S.value
            }
          }
        }, {
          default: () => [t.increment(_.value)]
        }) : r(fe, {
          disabled: !h.value,
          flat: !0,
          key: "increment-btn",
          height: I.value,
          "data-testid": "increment",
          "aria-hidden": "true",
          icon: S.value,
          onClick: x,
          onPointerup: M,
          onPointerdown: E,
          size: T.value,
          tabindex: "-1"
        }, null);
      }
      function Q() {
        return t.decrement ? r(de, {
          key: "decrement-defaults",
          defaults: {
            VBtn: {
              disabled: !m.value,
              flat: !0,
              height: I.value,
              size: T.value,
              icon: C.value
            }
          }
        }, {
          default: () => [t.decrement(D.value)]
        }) : r(fe, {
          disabled: !m.value,
          flat: !0,
          key: "decrement-btn",
          height: I.value,
          "data-testid": "decrement",
          "aria-hidden": "true",
          icon: C.value,
          size: T.value,
          tabindex: "-1",
          onClick: x,
          onPointerup: M,
          onPointerdown: N
        }, null);
      }
      function re() {
        return r("div", {
          class: "v-number-input__control"
        }, [Q(), r(It, {
          vertical: k.value !== "stacked"
        }, null), Z()]);
      }
      function X() {
        return !e.hideInput && !e.inset ? r(It, {
          vertical: !0
        }, null) : void 0;
      }
      const K = k.value === "split" ? r("div", {
        class: "v-number-input__control"
      }, [r(It, {
        vertical: !0
      }, null), Z()]) : e.reverse || k.value === "hidden" ? void 0 : r(ie, null, [X(), re()]), ne = t["append-inner"] || K, ye = k.value === "split" ? r("div", {
        class: "v-number-input__control"
      }, [Q(), r(It, {
        vertical: !0
      }, null)]) : e.reverse && k.value !== "hidden" ? r(ie, null, [re(), X()]) : void 0, he = t["prepend-inner"] || ye;
      return r(At, O({
        ref: a,
        modelValue: y.value,
        "onUpdate:modelValue": (q) => y.value = q,
        validationValue: d.value,
        onBeforeinput: A,
        onFocus: R,
        onBlur: F,
        onKeydown: V,
        class: ["v-number-input", {
          "v-number-input--default": k.value === "default",
          "v-number-input--hide-input": e.hideInput,
          "v-number-input--inset": e.inset,
          "v-number-input--reverse": e.reverse,
          "v-number-input--split": k.value === "split",
          "v-number-input--stacked": k.value === "stacked"
        }, e.class]
      }, H, {
        style: e.style,
        inputmode: "decimal"
      }), {
        ...t,
        "append-inner": ne ? function() {
          var ae;
          for (var q = arguments.length, se = new Array(q), Y = 0; Y < q; Y++)
            se[Y] = arguments[Y];
          return r(ie, null, [(ae = t["append-inner"]) == null ? void 0 : ae.call(t, ...se), K]);
        } : void 0,
        "prepend-inner": he ? function() {
          var ae;
          for (var q = arguments.length, se = new Array(q), Y = 0; Y < q; Y++)
            se[Y] = arguments[Y];
          return r(ie, null, [ye, (ae = t["prepend-inner"]) == null ? void 0 : ae.call(t, ...se)]);
        } : void 0
      });
    }), ct({}, a);
  }
}), Tb = p({
  ...Yi()
}, "VStepperActions"), Ab = L()({
  name: "VStepperVerticalActions",
  props: Tb(),
  emits: {
    "click:prev": () => !0,
    "click:next": () => !0
  },
  setup(e, n) {
    let {
      emit: t,
      slots: a
    } = n;
    function l() {
      t("click:prev");
    }
    function i() {
      t("click:next");
    }
    return z(() => {
      const o = ql.filterProps(e);
      return r(ql, O({
        class: "v-stepper-vertical-actions"
      }, o, {
        "onClick:prev": l,
        "onClick:next": i
      }), a);
    }), {};
  }
}), Db = p({
  hideActions: Boolean,
  ...Pc(),
  ...Ce(ji({
    expandIcon: "",
    collapseIcon: ""
  }), ["hideActions"])
}, "VStepperVerticalItem"), Bb = L()({
  name: "VStepperVerticalItem",
  props: Db(),
  emits: {
    "click:next": () => !0,
    "click:prev": () => !0,
    "click:finish": () => !0
  },
  setup(e, n) {
    let {
      emit: t,
      slots: a
    } = n;
    const l = U(), i = b(() => isNaN(parseInt(e.value)) ? e.value : Number(e.value)), o = b(() => {
      var S;
      return (S = l.value) == null ? void 0 : S.groupItem;
    }), u = b(() => {
      var S;
      return ((S = o.value) == null ? void 0 : S.isSelected.value) ?? !1;
    }), s = b(() => u.value ? e.rules.every((S) => S() === !0) : null), c = b(() => !e.disabled && e.editable), v = b(() => e.error || u.value && !s.value), f = b(() => e.complete || e.rules.length > 0 && s.value === !0), d = b(() => {
      var S;
      return e.disabled ? e.disabled : (S = o.value) != null && S.isFirst.value ? "prev" : !1;
    }), g = b(() => {
      var S;
      return v.value ? e.errorIcon : f.value ? e.completeIcon : (S = o.value) != null && S.isSelected.value && e.editable ? e.editIcon : e.icon;
    }), y = b(() => ({
      canEdit: c.value,
      hasError: v.value,
      hasCompleted: f.value,
      title: e.title,
      subtitle: e.subtitle,
      step: i.value
    })), h = b(() => ({
      ...y.value,
      prev: k,
      next: m
    }));
    function m() {
      var S;
      t("click:next"), !((S = o.value) != null && S.isLast.value) && o.value.group.next();
    }
    function k() {
      t("click:prev"), o.value.group.prev();
    }
    return z(() => {
      var I;
      const S = (f.value || ((I = o.value) == null ? void 0 : I.isSelected.value)) && !v.value && !e.disabled, C = !e.hideActions || !!a.actions, T = ir.filterProps(e);
      return r(ir, O({
        _as: "VStepperVerticalItem",
        ref: l
      }, T, {
        class: ["v-stepper-vertical-item", {
          "v-stepper-vertical-item--complete": f.value,
          "v-stepper-vertical-item--disabled": e.disabled,
          "v-stepper-vertical-item--editable": c.value,
          "v-stepper-vertical-item--error": v.value
        }, e.class],
        readonly: !e.editable,
        style: e.style,
        color: "",
        "hide-actions": !1,
        value: i.value
      }), {
        title: () => {
          var _, D;
          return r(ie, null, [r(ut, {
            key: "stepper-avatar",
            class: "v-stepper-vertical-item__avatar",
            color: S ? e.color : void 0,
            size: 24,
            start: !0
          }, {
            default: () => {
              var w;
              return [((w = a.icon) == null ? void 0 : w.call(a, y.value)) ?? (g.value ? r(Se, {
                icon: g.value
              }, null) : i.value)];
            }
          }), r("div", null, [r("div", {
            class: "v-stepper-vertical-item__title"
          }, [((_ = a.title) == null ? void 0 : _.call(a, y.value)) ?? e.title]), r("div", {
            class: "v-stepper-vertical-item__subtitle"
          }, [((D = a.subtitle) == null ? void 0 : D.call(a, y.value)) ?? e.subtitle])])]);
        },
        text: () => {
          var _, D;
          return r(ie, null, [((_ = a.default) == null ? void 0 : _.call(a, y.value)) ?? e.text, C && r(de, {
            defaults: {
              VStepperVerticalActions: {
                disabled: d.value,
                finish: (D = o.value) == null ? void 0 : D.isLast.value
              }
            }
          }, {
            default: () => {
              var w;
              return [((w = a.actions) == null ? void 0 : w.call(a, h.value)) ?? r(Ab, {
                "onClick:next": m,
                "onClick:prev": k
              }, {
                prev: a.prev ? () => {
                  var P;
                  return (P = a.prev) == null ? void 0 : P.call(a, h.value);
                } : void 0,
                next: a.next ? () => {
                  var P;
                  return (P = a.next) == null ? void 0 : P.call(a, h.value);
                } : void 0
              })];
            }
          })]);
        }
      });
    }), {};
  }
}), Mb = p({
  prevText: {
    type: String,
    default: "$vuetify.stepper.prev"
  },
  nextText: {
    type: String,
    default: "$vuetify.stepper.next"
  },
  ...Ic(),
  ...Ce(kc({
    mandatory: "force",
    variant: "accordion"
  }), ["static"])
}, "VStepperVertical"), CS = L()({
  name: "VStepperVertical",
  props: Mb(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, n) {
    let {
      slots: t
    } = n;
    const a = U(), {
      color: l,
      eager: i,
      editable: o,
      prevText: u,
      nextText: s,
      hideActions: c
    } = Ut(e), v = oe(e, "modelValue"), f = b(() => e.items.map((d, g) => {
      const y = Ne(d, e.itemTitle, d), h = Ne(d, e.itemValue, g + 1);
      return {
        title: y,
        value: h,
        raw: d
      };
    }));
    return pe({
      VStepperVerticalItem: {
        color: l,
        eager: i,
        editable: o,
        prevText: u,
        nextText: s,
        hideActions: c,
        static: !0
      },
      VStepperActions: {
        color: l
      }
    }), z(() => {
      const d = or.filterProps(e);
      return r(or, O(d, {
        modelValue: v.value,
        "onUpdate:modelValue": (g) => v.value = g,
        ref: a,
        class: ["v-stepper", {
          "v-stepper--alt-labels": e.altLabels,
          "v-stepper--flat": e.flat,
          "v-stepper--non-linear": e.nonLinear,
          "v-stepper--mobile": e.mobile
        }, e.class],
        style: e.style
      }), {
        ...t,
        default: (g) => {
          var m;
          let {
            prev: y,
            next: h
          } = g;
          return r(ie, null, [f.value.map((k) => {
            let {
              raw: S,
              ...C
            } = k;
            return r(Bb, C, {
              ...t,
              default: t[`item.${C.value}`]
            });
          }), (m = t.default) == null ? void 0 : m.call(t, {
            prev: y,
            next: h,
            step: v.value
          })]);
        }
      });
    }), {};
  }
}), VS = L()({
  name: "VPullToRefresh",
  props: {
    disabled: Boolean,
    pullDownThreshold: {
      type: Number,
      default: 64
    }
  },
  emits: {
    load: (e) => !0
  },
  setup(e, n) {
    let {
      slots: t,
      emit: a
    } = n, l = 0, i = [];
    const o = G(0), u = U(), s = G(!1), c = G(!1), v = G(!1), f = b(() => o.value >= e.pullDownThreshold && !s.value), d = b(() => Me(o.value, 0, e.pullDownThreshold));
    function g(m) {
      s.value || e.disabled || (v.value = !0, l = "clientY" in m ? m.clientY : m.touches[0].clientY);
    }
    function y(m) {
      if (s.value || !v.value || e.disabled) return;
      const k = "clientY" in m ? m.clientY : m.touches[0].clientY;
      i.length && !i[0].scrollTop && (o.value = k - l);
    }
    function h(m) {
      s.value || e.disabled || (v.value = !1, f.value ? (a("load", {
        done: function() {
          s.value && (o.value = 0, s.value = !1);
        }
      }), s.value = !0) : o.value = 0);
    }
    Ue(() => {
      i = ea(u.value);
    }), J([d, s], () => {
      if (i.length) {
        const m = d.value && !s.value;
        i.forEach((k) => k.style.overflow = m ? "hidden" : "auto");
      }
    }), J(d, (m, k) => {
      c.value = m < k;
    }), z(() => {
      var m;
      return r("div", {
        class: ["v-pull-to-refresh"],
        onTouchstart: g,
        onTouchmove: y,
        onTouchend: h,
        onMousedown: g,
        onMouseup: h,
        onMouseleave: h,
        onMousemove: y,
        ref: u
      }, [r("div", {
        class: ["v-pull-to-refresh__pull-down", {
          "v-pull-to-refresh__pull-down--touching": v.value
        }],
        style: {
          top: te(-1 * e.pullDownThreshold + d.value),
          height: te(e.pullDownThreshold)
        }
      }, [t.pullDownPanel ? t.pullDownPanel({
        canRefresh: f.value,
        goingUp: c.value,
        refreshing: s.value
      }) : r("div", {
        class: ["v-pull-to-refresh__pull-down-default"]
      }, [s.value ? r(dn, {
        indeterminate: !0,
        active: !1
      }, null) : r(Se, {
        icon: f.value || c.value ? "$sortAsc" : "$sortDesc"
      }, null)])]), r("div", {
        class: ["v-pull-to-refresh__scroll-container", {
          "v-pull-to-refresh__scroll-container--touching": v.value
        }],
        style: {
          top: te(d.value)
        }
      }, [(m = t.default) == null ? void 0 : m.call(t)])]);
    });
  }
}), pb = p({
  // TODO: Port this to Snackbar on dev
  closable: [Boolean, String],
  closeText: {
    type: String,
    default: "$vuetify.dismiss"
  },
  modelValue: {
    type: Array,
    default: () => []
  },
  ...Ce(wc(), ["modelValue"])
}, "VSnackbarQueue"), PS = L()({
  name: "VSnackbarQueue",
  props: pb(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, n) {
    let {
      emit: t,
      slots: a
    } = n;
    const {
      t: l
    } = Te(), i = G(!1), o = G(!1), u = G();
    J(() => e.modelValue.length, (d, g) => {
      !o.value && d > g && c();
    }), J(i, (d) => {
      d && (o.value = !0);
    });
    function s() {
      e.modelValue.length ? c() : (u.value = void 0, o.value = !1);
    }
    function c() {
      const [d, ...g] = e.modelValue;
      t("update:modelValue", g), u.value = typeof d == "string" ? {
        text: d
      } : d, we(() => {
        i.value = !0;
      });
    }
    function v() {
      i.value = !1;
    }
    const f = b(() => ({
      color: typeof e.closable == "string" ? e.closable : void 0,
      text: l(e.closeText)
    }));
    z(() => {
      const d = !!(e.closable || a.actions), {
        modelValue: g,
        ...y
      } = vr.filterProps(e);
      return r(ie, null, [o.value && !!u.value && (a.default ? r(de, {
        defaults: {
          VSnackbar: u.value
        }
      }, {
        default: () => [a.default({
          item: u.value
        })]
      }) : r(vr, O(y, u.value, {
        modelValue: i.value,
        "onUpdate:modelValue": (h) => i.value = h,
        onAfterLeave: s
      }), {
        text: a.text ? () => {
          var h;
          return (h = a.text) == null ? void 0 : h.call(a, {
            item: u.value
          });
        } : void 0,
        actions: d ? () => r(ie, null, [a.actions ? r(de, {
          defaults: {
            VBtn: f.value
          }
        }, {
          default: () => [a.actions({
            item: u.value,
            props: {
              onClick: v
            }
          })]
        }) : r(fe, O(f.value, {
          onClick: v
        }), null)]) : void 0
      }))]);
    });
  }
});
function an(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 2;
  return String(e).padStart(n, "0");
}
const Eb = p({
  allowedValues: Function,
  ampm: Boolean,
  color: String,
  disabled: Boolean,
  displayedValue: null,
  double: Boolean,
  format: {
    type: Function,
    default: (e) => e
  },
  max: {
    type: Number,
    required: !0
  },
  min: {
    type: Number,
    required: !0
  },
  scrollable: Boolean,
  readonly: Boolean,
  rotate: {
    type: Number,
    default: 0
  },
  step: {
    type: Number,
    default: 1
  },
  modelValue: {
    type: Number
  }
}, "VTimePickerClock"), wr = L()({
  name: "VTimePickerClock",
  props: Eb(),
  emits: {
    change: (e) => !0,
    input: (e) => !0
  },
  setup(e, n) {
    let {
      emit: t
    } = n;
    const a = U(null), l = U(null), i = U(void 0), o = U(!1), u = U(null), s = U(null), {
      textColorClasses: c,
      textColorStyles: v
    } = Ge($(e, "color")), {
      backgroundColorClasses: f,
      backgroundColorStyles: d
    } = Pe($(e, "color")), g = b(() => e.max - e.min + 1), y = b(() => e.double ? g.value / 2 : g.value), h = b(() => 360 / y.value), m = b(() => h.value * Math.PI / 180), k = b(() => e.modelValue == null ? e.min : e.modelValue), S = b(() => 0.62), C = b(() => {
      const W = [];
      for (let R = e.min; R <= e.max; R = R + e.step)
        W.push(R);
      return W;
    });
    J(() => e.modelValue, (W) => {
      i.value = W;
    });
    function T(W) {
      i.value !== W && (i.value = W), t("input", W);
    }
    function I(W) {
      return !e.allowedValues || e.allowedValues(W);
    }
    function _(W) {
      if (!e.scrollable || e.disabled) return;
      W.preventDefault();
      const R = Math.sign(-W.deltaY || 1);
      let F = k.value;
      do
        F = F + R, F = (F - e.min + g.value) % g.value + e.min;
      while (!I(F) && F !== k.value);
      F !== e.displayedValue && T(F);
    }
    function D(W) {
      return e.double && W - e.min >= y.value;
    }
    function w(W) {
      return D(W) ? S.value : 1;
    }
    function P(W) {
      const R = e.rotate * Math.PI / 180;
      return {
        x: Math.sin((W - e.min) * m.value + R) * w(W),
        y: -Math.cos((W - e.min) * m.value + R) * w(W)
      };
    }
    function A(W, R) {
      const F = (Math.round(W / h.value) + (R ? y.value : 0)) % g.value + e.min;
      return W < 360 - h.value / 2 ? F : R ? e.max - y.value + 1 : e.min;
    }
    function V(W) {
      const {
        x: R,
        y: F
      } = P(W);
      return {
        left: `${50 + R * 50}%`,
        top: `${50 + F * 50}%`
      };
    }
    function x(W, R) {
      const F = R.x - W.x, B = R.y - W.y;
      return Math.sqrt(F * F + B * B);
    }
    function M(W, R) {
      const F = 2 * Math.atan2(R.y - W.y - x(W, R), R.x - W.x);
      return Math.abs(F * 180 / Math.PI);
    }
    function E(W) {
      u.value === null && (u.value = W), s.value = W, T(W);
    }
    function N(W) {
      var q, se;
      if (W.preventDefault(), !o.value && W.type !== "click" || !a.value) return;
      const {
        width: R,
        top: F,
        left: B
      } = (q = a.value) == null ? void 0 : q.getBoundingClientRect(), {
        width: H
      } = ((se = l.value) == null ? void 0 : se.getBoundingClientRect()) ?? {
        width: 0
      }, {
        clientX: Z,
        clientY: Q
      } = "touches" in W ? W.touches[0] : W, re = {
        x: R / 2,
        y: -R / 2
      }, X = {
        x: Z - B,
        y: F - Q
      }, K = Math.round(M(re, X) - e.rotate + 360) % 360, ne = e.double && x(re, X) < (H + H * S.value) / 4, ye = Math.ceil(15 / h.value);
      let he;
      for (let Y = 0; Y < ye; Y++)
        if (he = A(K + Y * h.value, ne), I(he) || (he = A(K - Y * h.value, ne), I(he))) return E(he);
    }
    function j(W) {
      e.disabled || (W.preventDefault(), window.addEventListener("mousemove", N), window.addEventListener("touchmove", N), window.addEventListener("mouseup", ee), window.addEventListener("touchend", ee), u.value = null, s.value = null, o.value = !0, N(W));
    }
    function ee(W) {
      W.stopPropagation(), window.removeEventListener("mousemove", N), window.removeEventListener("touchmove", N), window.removeEventListener("mouseup", ee), window.removeEventListener("touchend", ee), o.value = !1, s.value !== null && I(s.value) && t("change", s.value);
    }
    z(() => r("div", {
      class: [{
        "v-time-picker-clock": !0,
        "v-time-picker-clock--indeterminate": e.modelValue == null,
        "v-time-picker-clock--readonly": e.readonly
      }],
      onMousedown: j,
      onTouchstart: j,
      onWheel: _,
      ref: a
    }, [r("div", {
      class: "v-time-picker-clock__inner",
      ref: l
    }, [r("div", {
      class: [{
        "v-time-picker-clock__hand": !0,
        "v-time-picker-clock__hand--inner": D(e.modelValue)
      }, c.value],
      style: [{
        transform: `rotate(${e.rotate + h.value * (k.value - e.min)}deg) scaleY(${w(k.value)})`
      }, v.value]
    }, null), C.value.map((W) => {
      const R = W === k.value;
      return r("div", {
        class: [{
          "v-time-picker-clock__item": !0,
          "v-time-picker-clock__item--active": R,
          "v-time-picker-clock__item--disabled": e.disabled || !I(W)
        }, R && f.value],
        style: [V(W), R && d.value]
      }, [r("span", null, [e.format(W)])]);
    })])]));
  }
}), Fb = p({
  ampm: Boolean,
  ampmInTitle: Boolean,
  ampmReadonly: Boolean,
  color: String,
  disabled: Boolean,
  hour: Number,
  minute: Number,
  second: Number,
  period: String,
  readonly: Boolean,
  useSeconds: Boolean,
  value: Number,
  viewMode: String
}, "VTimePickerControls"), xr = L()({
  name: "VTimePickerControls",
  props: Fb(),
  emits: {
    "update:period": (e) => !0,
    "update:viewMode": (e) => !0
  },
  setup(e, n) {
    let {
      emit: t,
      slots: a
    } = n;
    const {
      t: l
    } = Te();
    return z(() => {
      let i = e.hour;
      return e.ampm && (i = i ? (i - 1) % 12 + 1 : 12), r("div", {
        class: "v-time-picker-controls"
      }, [r("div", {
        class: {
          "v-time-picker-controls__time": !0,
          "v-time-picker-controls__time--with-seconds": e.useSeconds
        }
      }, [r(fe, {
        active: e.viewMode === "hour",
        color: e.viewMode === "hour" ? e.color : void 0,
        disabled: e.disabled,
        variant: "tonal",
        class: {
          "v-time-picker-controls__time__btn": !0,
          "v-time-picker-controls__time--with-ampm__btn": e.ampm,
          "v-time-picker-controls__time--with-seconds__btn": e.useSeconds
        },
        text: e.hour == null ? "--" : an(`${i}`),
        onClick: () => t("update:viewMode", "hour")
      }, null), r("span", {
        class: ["v-time-picker-controls__time__separator", {
          "v-time-picker-controls--with-seconds__time__separator": e.useSeconds
        }]
      }, [_t(":")]), r(fe, {
        active: e.viewMode === "minute",
        color: e.viewMode === "minute" ? e.color : void 0,
        class: {
          "v-time-picker-controls__time__btn": !0,
          "v-time-picker-controls__time__btn__active": e.viewMode === "minute",
          "v-time-picker-controls__time--with-ampm__btn": e.ampm,
          "v-time-picker-controls__time--with-seconds__btn": e.useSeconds
        },
        disabled: e.disabled,
        variant: "tonal",
        text: e.minute == null ? "--" : an(e.minute),
        onClick: () => t("update:viewMode", "minute")
      }, null), e.useSeconds && r("span", {
        class: ["v-time-picker-controls__time__separator", {
          "v-time-picker-controls--with-seconds__time__separator": e.useSeconds
        }],
        key: "secondsDivider"
      }, [_t(":")]), e.useSeconds && r(fe, {
        key: "secondsVal",
        active: e.viewMode === "second",
        color: e.viewMode === "second" ? e.color : void 0,
        variant: "tonal",
        onClick: () => t("update:viewMode", "second"),
        class: {
          "v-time-picker-controls__time__btn": !0,
          "v-time-picker-controls__time__btn__active": e.viewMode === "second",
          "v-time-picker-controls__time--with-seconds__btn": e.useSeconds
        },
        disabled: e.disabled,
        text: e.second == null ? "--" : an(e.second)
      }, null), e.ampm && e.ampmInTitle && r("div", {
        class: ["v-time-picker-controls__ampm", {
          "v-time-picker-controls__ampm--readonly": e.ampmReadonly
        }]
      }, [r(fe, {
        active: e.period === "am",
        color: e.period === "am" ? e.color : void 0,
        class: {
          "v-time-picker-controls__ampm__am": !0,
          "v-time-picker-controls__ampm__btn": !0,
          "v-time-picker-controls__ampm__btn__active": e.period === "am"
        },
        disabled: e.disabled,
        text: l("$vuetify.timePicker.am"),
        variant: e.disabled && e.period === "am" ? "elevated" : "tonal",
        onClick: () => e.period !== "am" ? t("update:period", "am") : null
      }, null), r(fe, {
        active: e.period === "pm",
        color: e.period === "pm" ? e.color : void 0,
        class: {
          "v-time-picker-controls__ampm__pm": !0,
          "v-time-picker-controls__ampm__btn": !0,
          "v-time-picker-controls__ampm__btn__active": e.period === "pm"
        },
        disabled: e.disabled,
        text: l("$vuetify.timePicker.pm"),
        variant: e.disabled && e.period === "pm" ? "elevated" : "tonal",
        onClick: () => e.period !== "pm" ? t("update:period", "pm") : null
      }, null)])])]);
    }), {};
  }
}), $b = vt(24), Ec = vt(12), Lb = Ec.map((e) => e + 12);
vt(60);
const Ob = p({
  allowedHours: [Function, Array],
  allowedMinutes: [Function, Array],
  allowedSeconds: [Function, Array],
  ampmInTitle: Boolean,
  disabled: Boolean,
  format: {
    type: String,
    default: "ampm"
  },
  max: String,
  min: String,
  viewMode: {
    type: String,
    default: "hour"
  },
  modelValue: null,
  readonly: Boolean,
  scrollable: Boolean,
  useSeconds: Boolean,
  ...Ce(Wi({
    title: "$vuetify.timePicker.title"
  }), ["landscape"])
}, "VTimePicker"), IS = L()({
  name: "VTimePicker",
  props: Ob(),
  emits: {
    "update:hour": (e) => !0,
    "update:minute": (e) => !0,
    "update:period": (e) => !0,
    "update:second": (e) => !0,
    "update:modelValue": (e) => !0,
    "update:viewMode": (e) => !0
  },
  setup(e, n) {
    let {
      emit: t,
      slots: a
    } = n;
    const {
      t: l
    } = Te(), i = U(null), o = U(null), u = U(null), s = U(null), c = U(null), v = U(null), f = U("am"), d = oe(e, "viewMode", "hour"), g = U(null), y = U(null), h = b(() => {
      let x;
      if (e.allowedHours instanceof Array ? x = (N) => e.allowedHours.includes(N) : x = e.allowedHours, !e.min && !e.max) return x;
      const M = e.min ? Number(e.min.split(":")[0]) : 0, E = e.max ? Number(e.max.split(":")[0]) : 23;
      return (N) => N >= Number(M) && N <= Number(E) && (!x || x(N));
    }), m = b(() => {
      let x;
      const M = !h.value || i.value === null || h.value(i.value);
      if (e.allowedMinutes instanceof Array ? x = (F) => e.allowedMinutes.includes(F) : x = e.allowedMinutes, !e.min && !e.max)
        return M ? x : () => !1;
      const [E, N] = e.min ? e.min.split(":").map(Number) : [0, 0], [j, ee] = e.max ? e.max.split(":").map(Number) : [23, 59], W = E * 60 + Number(N), R = j * 60 + Number(ee);
      return (F) => {
        const B = 60 * i.value + F;
        return B >= W && B <= R && M && (!x || x(F));
      };
    }), k = b(() => {
      let x;
      const E = (!h.value || i.value === null || h.value(i.value)) && (!m.value || o.value === null || m.value(o.value));
      if (e.allowedSeconds instanceof Array ? x = (Z) => e.allowedSeconds.includes(Z) : x = e.allowedSeconds, !e.min && !e.max)
        return E ? x : () => !1;
      const [N, j, ee] = e.min ? e.min.split(":").map(Number) : [0, 0, 0], [W, R, F] = e.max ? e.max.split(":").map(Number) : [23, 59, 59], B = N * 3600 + j * 60 + Number(ee || 0), H = W * 3600 + R * 60 + Number(F || 0);
      return (Z) => {
        const Q = 3600 * i.value + 60 * o.value + Z;
        return Q >= B && Q <= H && E && (!x || x(Z));
      };
    }), S = b(() => e.format === "ampm");
    J(() => e.modelValue, (x) => D(x)), Ue(() => {
      D(e.modelValue);
    });
    function C() {
      return i.value != null && o.value != null && (!e.useSeconds || u.value != null) ? `${an(i.value)}:${an(o.value)}` + (e.useSeconds ? `:${an(u.value)}` : "") : null;
    }
    function T() {
      const x = C();
      x !== null && t("update:modelValue", x);
    }
    function I(x) {
      return x ? (x - 1) % 12 + 1 : 12;
    }
    function _(x, M) {
      return x % 12 + (M === "pm" ? 12 : 0);
    }
    function D(x) {
      if (x == null || x === "")
        i.value = null, o.value = null, u.value = null;
      else if (x instanceof Date)
        i.value = x.getHours(), o.value = x.getMinutes(), u.value = x.getSeconds();
      else {
        const [M, , E, , N, j] = x.trim().toLowerCase().match(/^(\d+):(\d+)(:(\d+))?([ap]m)?$/) || new Array(6);
        i.value = j ? _(parseInt(M, 10), j) : parseInt(M, 10), o.value = parseInt(E, 10), u.value = parseInt(N || 0, 10);
      }
      f.value = i.value == null || i.value < 12 ? "am" : "pm";
    }
    function w(x, M) {
      const E = h.value;
      if (!E) return M;
      const N = S.value ? M < 12 ? Ec : Lb : $b;
      return ((N.find((ee) => E((ee + M) % N.length + N[0])) || 0) + M) % N.length + N[0];
    }
    function P(x) {
      if (f.value = x, i.value != null) {
        const M = i.value + (f.value === "am" ? -12 : 12);
        i.value = w("hour", M);
      }
      return t("update:period", x), T(), !0;
    }
    function A(x) {
      d.value === "hour" ? i.value = S.value ? _(x, f.value) : x : d.value === "minute" ? o.value = x : u.value = x;
    }
    function V(x) {
      switch (d.value || "hour") {
        case "hour":
          t("update:hour", x);
          break;
        case "minute":
          t("update:minute", x);
          break;
        case "second":
          t("update:second", x);
          break;
      }
      const M = i.value !== null && o.value !== null && (e.useSeconds ? u.value !== null : !0);
      d.value === "hour" ? d.value = "minute" : e.useSeconds && d.value === "minute" && (d.value = "second"), !(i.value === s.value && o.value === c.value && (!e.useSeconds || u.value === v.value) || C() === null) && (s.value = i.value, c.value = o.value, e.useSeconds && (v.value = u.value), M && T());
    }
    z(() => {
      const x = Wa.filterProps(e), M = xr.filterProps(e), E = wr.filterProps(Ce(e, ["format", "modelValue", "min", "max"]));
      return r(Wa, O(x, {
        color: void 0,
        class: ["v-time-picker", e.class],
        style: e.style
      }), {
        title: () => {
          var N;
          return ((N = a.title) == null ? void 0 : N.call(a)) ?? r("div", {
            class: "v-time-picker__title"
          }, [l(e.title)]);
        },
        header: () => r(xr, O(M, {
          ampm: S.value || e.ampmInTitle,
          ampmReadonly: S.value && !e.ampmInTitle,
          hour: i.value,
          minute: o.value,
          period: f.value,
          second: u.value,
          viewMode: d.value,
          "onUpdate:period": (N) => P(N),
          "onUpdate:viewMode": (N) => d.value = N,
          ref: g
        }), null),
        default: () => r(wr, O(E, {
          allowedValues: d.value === "hour" ? h.value : d.value === "minute" ? m.value : k.value,
          double: d.value === "hour" && !S.value,
          format: d.value === "hour" ? S.value ? I : (N) => N : (N) => an(N, 2),
          max: d.value === "hour" ? S.value && f.value === "am" ? 11 : 23 : 59,
          min: d.value === "hour" && S.value && f.value === "pm" ? 12 : 0,
          size: 20,
          step: d.value === "hour" ? 1 : 5,
          modelValue: d.value === "hour" ? i.value : d.value === "minute" ? o.value : u.value,
          onChange: V,
          onInput: A,
          ref: y
        }), null),
        actions: a.actions
      });
    });
  }
}), Nb = p({
  ...Ce(ts({
    collapseIcon: "$treeviewCollapse",
    expandIcon: "$treeviewExpand"
  }), ["subgroup"])
}, "VTreeviewGroup"), Cr = L()({
  name: "VTreeviewGroup",
  props: Nb(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    const a = U(), l = b(() => {
      var o;
      return (o = a.value) != null && o.isOpen ? e.collapseIcon : e.expandIcon;
    }), i = b(() => {
      var o;
      return {
        VTreeviewItem: {
          prependIcon: void 0,
          appendIcon: void 0,
          active: (o = a.value) == null ? void 0 : o.isOpen,
          toggleIcon: l.value
        }
      };
    });
    return z(() => {
      const o = Na.filterProps(e);
      return r(Na, O(o, {
        ref: a,
        class: ["v-treeview-group", e.class],
        subgroup: !0
      }), {
        ...t,
        activator: t.activator ? (u) => r(ie, null, [r(de, {
          defaults: i.value
        }, {
          default: () => {
            var s;
            return [(s = t.activator) == null ? void 0 : s.call(t, u)];
          }
        })]) : void 0
      });
    }), {};
  }
}), Fc = Symbol.for("vuetify:v-treeview"), Rb = p({
  loading: Boolean,
  toggleIcon: ue,
  ...Si({
    slim: !0
  })
}, "VTreeviewItem"), Vr = L()({
  name: "VTreeviewItem",
  props: Rb(),
  emits: {
    toggleExpand: (e) => !0
  },
  setup(e, n) {
    let {
      slots: t,
      emit: a
    } = n;
    const l = be(Fc, {
      visibleIds: U()
    }).visibleIds, i = U(), o = b(() => {
      var d, g;
      return ((d = i.value) == null ? void 0 : d.root.activatable.value) && ((g = i.value) == null ? void 0 : g.isGroupActivator);
    }), u = b(() => {
      var d, g;
      return ((d = i.value) == null ? void 0 : d.link.isClickable.value) || e.value != null && !!((g = i.value) != null && g.list);
    }), s = b(() => !e.disabled && e.link !== !1 && (e.link || u.value || o.value)), c = b(() => {
      var d;
      return l.value && !l.value.has(Be((d = i.value) == null ? void 0 : d.id));
    });
    function v(d) {
      var g, y;
      s.value && o.value && ((y = i.value) == null || y.activate(!((g = i.value) != null && g.isActivated), d));
    }
    function f(d) {
      d.preventDefault(), a("toggleExpand", d);
    }
    return z(() => {
      var y;
      const d = Ce(kt.filterProps(e), ["onClick"]), g = t.prepend || e.toggleIcon;
      return r(kt, O({
        ref: i
      }, d, {
        active: (y = i.value) == null ? void 0 : y.isActivated,
        class: ["v-treeview-item", {
          "v-treeview-item--activatable-group-activator": o.value,
          "v-treeview-item--filtered": c.value
        }, e.class],
        ripple: !1,
        onClick: e.onClick ?? v
      }), {
        ...t,
        prepend: g ? (h) => {
          var m;
          return r(ie, null, [r(dm, {
            start: !1
          }, {
            default: () => [e.toggleIcon ? r(fe, {
              density: "compact",
              icon: e.toggleIcon,
              loading: e.loading,
              variant: "text",
              onClick: f
            }, {
              loader() {
                return r(dn, {
                  indeterminate: "disable-shrink",
                  size: "20",
                  width: "2"
                }, null);
              }
            }) : r("div", {
              class: "v-treeview-item__level"
            }, null)]
          }), (m = t.prepend) == null ? void 0 : m.call(t, h)]);
        } : void 0
      });
    }), {};
  }
}), $c = p({
  disabled: Boolean,
  loadChildren: Function,
  loadingIcon: {
    type: String,
    default: "$loading"
  },
  items: Array,
  openOnClick: {
    type: Boolean,
    default: void 0
  },
  indeterminateIcon: {
    type: ue,
    default: "$checkboxIndeterminate"
  },
  falseIcon: ue,
  trueIcon: ue,
  returnObject: Boolean,
  selectable: Boolean,
  selectedColor: String,
  selectStrategy: [String, Function, Object],
  ...ze()
}, "VTreeviewChildren"), ja = L()({
  name: "VTreeviewChildren",
  props: $c(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    const a = lt(/* @__PURE__ */ new Set()), l = b(() => !e.disabled && (e.openOnClick != null ? e.openOnClick : e.selectable));
    async function i(u) {
      var s, c;
      try {
        if (!((s = e.items) != null && s.length) || !e.loadChildren) return;
        ((c = u == null ? void 0 : u.children) == null ? void 0 : c.length) === 0 && (a.add(u.value), await e.loadChildren(u.raw));
      } finally {
        a.delete(u.value);
      }
    }
    function o(u, s) {
      e.selectable && u(!s);
    }
    return () => {
      var u, s;
      return ((u = t.default) == null ? void 0 : u.call(t)) ?? ((s = e.items) == null ? void 0 : s.map((c) => {
        var m;
        const {
          children: v,
          props: f
        } = c, d = a.has(c.value), g = {
          prepend: (k) => {
            var S;
            return r(ie, null, [e.selectable && (!v || v && !["leaf", "single-leaf"].includes(e.selectStrategy)) && r("div", null, [r($t, {
              key: c.value,
              modelValue: k.isSelected,
              disabled: e.disabled,
              loading: d,
              color: e.selectedColor,
              density: e.density,
              indeterminate: k.isIndeterminate,
              indeterminateIcon: e.indeterminateIcon,
              falseIcon: e.falseIcon,
              trueIcon: e.trueIcon,
              onClick: Zn(() => o(k.select, k.isSelected), ["stop"]),
              onKeydown: (C) => {
                ["Enter", "Space"].includes(C.key) && (C.stopPropagation(), o(k.select, k.isSelected));
              }
            }, null)]), (S = t.prepend) == null ? void 0 : S.call(t, {
              ...k,
              item: c.raw,
              internalItem: c
            })]);
          },
          append: t.append ? (k) => {
            var S;
            return (S = t.append) == null ? void 0 : S.call(t, {
              ...k,
              item: c.raw,
              internalItem: c
            });
          } : void 0,
          title: t.title ? (k) => {
            var S;
            return (S = t.title) == null ? void 0 : S.call(t, {
              ...k,
              item: c.raw,
              internalItem: c
            });
          } : void 0,
          subtitle: t.subtitle ? (k) => {
            var S;
            return (S = t.subtitle) == null ? void 0 : S.call(t, {
              ...k,
              item: c.raw,
              internalItem: c
            });
          } : void 0
        }, y = Cr.filterProps(f), h = ja.filterProps(e);
        return v ? r(Cr, O(y, {
          value: e.returnObject ? c.raw : y == null ? void 0 : y.value
        }), {
          activator: (k) => {
            let {
              props: S
            } = k;
            const C = {
              ...f,
              ...S,
              value: f == null ? void 0 : f.value,
              onToggleExpand: [() => i(c), S.onClick],
              onClick: l.value ? [() => i(c), S.onClick] : void 0
            };
            return r(Vr, O(C, {
              value: e.returnObject ? c.raw : f.value,
              loading: d
            }), g);
          },
          default: () => r(ja, O(h, {
            items: v,
            returnObject: e.returnObject
          }), t)
        }) : ((m = t.item) == null ? void 0 : m.call(t, {
          props: f,
          item: c.raw,
          internalItem: c
        })) ?? r(Vr, O(f, {
          value: e.returnObject ? Be(c.raw) : f.value
        }), g);
      }));
    };
  }
});
function Lc(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
  for (const t of e)
    n.push(t), t.children && Lc(t.children, n);
  return n;
}
const Hb = p({
  fluid: Boolean,
  openAll: Boolean,
  search: String,
  ...Kn({
    filterKeys: ["title"]
  }),
  ...$c(),
  ...Ce(us({
    collapseIcon: "$treeviewCollapse",
    expandIcon: "$treeviewExpand",
    slim: !0
  }), ["itemType", "nav", "openStrategy"]),
  modelValue: {
    type: Array,
    default: () => []
  }
}, "VTreeview"), _S = L()({
  name: "VTreeview",
  props: Hb(),
  emits: {
    "update:opened": (e) => !0,
    "update:activated": (e) => !0,
    "update:selected": (e) => !0,
    "update:modelValue": (e) => !0,
    "click:open": (e) => !0,
    "click:select": (e) => !0
  },
  setup(e, n) {
    let {
      slots: t
    } = n;
    const {
      items: a
    } = rs(e), l = $(e, "activeColor"), i = $(e, "baseColor"), o = $(e, "color"), u = oe(e, "activated"), s = oe(e, "modelValue"), c = oe(e, "selected", e.modelValue), v = b({
      get: () => c.value,
      set(C) {
        c.value = C, s.value = C;
      }
    }), f = U(), d = b(() => e.openAll ? S(a.value) : e.opened), g = b(() => Lc(a.value)), y = $(e, "search"), {
      filteredItems: h
    } = qn(e, g, y), m = b(() => {
      var T;
      if (!y.value) return null;
      const C = (T = f.value) == null ? void 0 : T.getPath;
      return C ? new Set(h.value.flatMap((I) => {
        const _ = e.returnObject ? I.raw : I.props.value;
        return [...C(_), ...k(_)].map(Be);
      })) : null;
    });
    function k(C) {
      var _, D;
      const T = [], I = (((_ = f.value) == null ? void 0 : _.children.get(C)) ?? []).slice();
      for (; I.length; ) {
        const w = I.shift();
        w && (T.push(w), I.push(...(((D = f.value) == null ? void 0 : D.children.get(w)) ?? []).slice()));
      }
      return T;
    }
    function S(C) {
      let T = [];
      for (const I of C)
        I.children && (T.push(e.returnObject ? Be(I.raw) : I.value), I.children && (T = T.concat(S(I.children))));
      return T;
    }
    return De(Fc, {
      visibleIds: m
    }), pe({
      VTreeviewGroup: {
        activeColor: l,
        baseColor: i,
        color: o,
        collapseIcon: $(e, "collapseIcon"),
        expandIcon: $(e, "expandIcon")
      },
      VTreeviewItem: {
        activeClass: $(e, "activeClass"),
        activeColor: l,
        baseColor: i,
        color: o,
        density: $(e, "density"),
        disabled: $(e, "disabled"),
        lines: $(e, "lines"),
        variant: $(e, "variant")
      }
    }), z(() => {
      const C = ra.filterProps(e), T = ja.filterProps(e);
      return r(ra, O({
        ref: f
      }, C, {
        class: ["v-treeview", {
          "v-treeview--fluid": e.fluid
        }, e.class],
        "open-strategy": "multiple",
        style: e.style,
        opened: d.value,
        activated: u.value,
        "onUpdate:activated": (I) => u.value = I,
        selected: v.value,
        "onUpdate:selected": (I) => v.value = I
      }), {
        default: () => [r(ja, O(T, {
          density: e.density,
          returnObject: e.returnObject,
          items: a.value
        }), t)]
      });
    }), {};
  }
});
export {
  Mm as ClickOutside,
  Ja as Intersect,
  vS as Mutate,
  fS as Resize,
  Xt as Ripple,
  mS as Scroll,
  gS as Tooltip,
  ws as Touch,
  ok as VAlert,
  Tf as VAlertTitle,
  Ub as VApp,
  nk as VAppBar,
  lk as VAppBarNavIcon,
  ik as VAppBarTitle,
  dk as VAutocomplete,
  ut as VAvatar,
  qm as VBadge,
  vk as VBanner,
  Zm as VBannerActions,
  Qm as VBannerText,
  fk as VBottomNavigation,
  mk as VBottomSheet,
  gk as VBreadcrumbs,
  ag as VBreadcrumbsDivider,
  ig as VBreadcrumbsItem,
  fe as VBtn,
  Fo as VBtnGroup,
  ak as VBtnToggle,
  kS as VCalendar,
  _l as VCalendarDay,
  kr as VCalendarHeader,
  br as VCalendarInterval,
  yr as VCalendarIntervalEvent,
  bb as VCalendarMonthDay,
  hk as VCard,
  rg as VCardActions,
  vg as VCardItem,
  sg as VCardSubtitle,
  mg as VCardText,
  cg as VCardTitle,
  yk as VCarousel,
  bk as VCarouselItem,
  rk as VCheckbox,
  $t as VCheckboxBtn,
  Yn as VChip,
  uk as VChipGroup,
  du as VClassIcon,
  kk as VCode,
  _k as VCol,
  Sk as VColorPicker,
  wk as VCombobox,
  _o as VComponentIcon,
  Go as VConfirmEdit,
  Ik as VContainer,
  Pi as VCounter,
  xk as VDataIterator,
  Ck as VDataTable,
  Ha as VDataTableFooter,
  On as VDataTableHeaders,
  Zs as VDataTableRow,
  Nn as VDataTableRows,
  Pk as VDataTableServer,
  Vk as VDataTableVirtual,
  SS as VDateInput,
  nr as VDatePicker,
  Zo as VDatePickerControls,
  Qo as VDatePickerHeader,
  Jo as VDatePickerMonth,
  er as VDatePickerMonths,
  tr as VDatePickerYears,
  de as VDefaultsProvider,
  Uo as VDialog,
  Gb as VDialogBottomTransition,
  Kb as VDialogTopTransition,
  di as VDialogTransition,
  It as VDivider,
  Ak as VEmptyState,
  vi as VExpandTransition,
  xu as VExpandXTransition,
  ir as VExpansionPanel,
  ar as VExpansionPanelText,
  lr as VExpansionPanelTitle,
  or as VExpansionPanels,
  Dk as VFab,
  Yb as VFabTransition,
  $a as VFadeTransition,
  fn as VField,
  _a as VFieldLabel,
  Bk as VFileInput,
  wS as VFileUpload,
  xb as VFileUploadItem,
  Mk as VFooter,
  pk as VForm,
  Ek as VHover,
  Se as VIcon,
  jt as VImg,
  Fk as VInfiniteScroll,
  at as VInput,
  Lk as VItem,
  $k as VItemGroup,
  Ok as VKbd,
  ga as VLabel,
  Nk as VLayout,
  Rk as VLayoutItem,
  Hk as VLazy,
  jb as VLigatureIcon,
  ra as VList,
  Na as VListGroup,
  sk as VListImg,
  kt as VListItem,
  dm as VListItemAction,
  ck as VListItemMedia,
  lm as VListItemSubtitle,
  im as VListItemTitle,
  rm as VListSubheader,
  zk as VLocaleProvider,
  Wk as VMain,
  Fn as VMenu,
  Lf as VMessages,
  jk as VNavigationDrawer,
  Uk as VNoSsr,
  xS as VNumberInput,
  Yk as VOtpInput,
  Tt as VOverlay,
  Ko as VPagination,
  Gk as VParallax,
  Wa as VPicker,
  Qh as VPickerTitle,
  dn as VProgressCircular,
  gi as VProgressLinear,
  VS as VPullToRefresh,
  Kk as VRadio,
  qk as VRadioGroup,
  Xk as VRangeSlider,
  Zk as VRating,
  po as VResponsive,
  Tk as VRow,
  Su as VScaleTransition,
  Xb as VScrollXReverseTransition,
  qb as VScrollXTransition,
  Qb as VScrollYReverseTransition,
  Zb as VScrollYTransition,
  ks as VSelect,
  vn as VSelectionControl,
  Ef as VSelectionControlGroup,
  Lt as VSheet,
  Qk as VSkeletonLoader,
  Oa as VSlideGroup,
  Jk as VSlideGroupItem,
  ek as VSlideXReverseTransition,
  Jb as VSlideXTransition,
  tk as VSlideYReverseTransition,
  wu as VSlideYTransition,
  Yo as VSlider,
  vr as VSnackbar,
  PS as VSnackbarQueue,
  Xh as VSpacer,
  eS as VSparkline,
  tS as VSpeedDial,
  nS as VStepper,
  ql as VStepperActions,
  $y as VStepperHeader,
  Oy as VStepperItem,
  CS as VStepperVertical,
  Ab as VStepperVerticalActions,
  Bb as VStepperVerticalItem,
  Ry as VStepperWindow,
  zy as VStepperWindowItem,
  cu as VSvgIcon,
  aS as VSwitch,
  lS as VSystemBar,
  Gy as VTab,
  Rn as VTable,
  iS as VTabs,
  qy as VTabsWindow,
  Zy as VTabsWindowItem,
  At as VTextField,
  oS as VTextarea,
  rS as VThemeProvider,
  IS as VTimePicker,
  wr as VTimePickerClock,
  xr as VTimePickerControls,
  sS as VTimeline,
  uS as VTimelineItem,
  Eo as VToolbar,
  cS as VToolbarItems,
  yu as VToolbarTitle,
  rb as VTooltip,
  _S as VTreeview,
  Cr as VTreeviewGroup,
  Vr as VTreeviewItem,
  dS as VValidation,
  Ii as VVirtualScroll,
  $n as VWindow,
  Ln as VWindowItem,
  Xv as createVuetify,
  hS as md1,
  yS as md2,
  bS as md3,
  Mt as useDate,
  Wb as useDefaults,
  ht as useDisplay,
  Hv as useGoTo,
  mu as useLayout,
  Te as useLocale,
  We as useRtl,
  ci as useTheme,
  Zv as version
};
