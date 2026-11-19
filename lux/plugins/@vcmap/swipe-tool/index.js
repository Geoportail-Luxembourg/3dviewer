
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
} await loadCss('data:text/css;base64,LnN3aXBlLXRyZWUtaGVhZGVye2hlaWdodDoxN3B4fS52Y20tc3dpcGUtZWxlbWVudDpiZWZvcmUsLnZjbS1zd2lwZS1lbGVtZW50OmFmdGVye3RleHQtZGVjb3JhdGlvbjpub25lO3RvcDo0OCU7cG9zaXRpb246YWJzb2x1dGV9LnZjbS1zd2lwZS1lbGVtZW50OmJlZm9yZXtyaWdodDpjYWxjKC0xICogdmFyKC0tdi12Y3MtZm9udC1zaXplKSAqIC43ODc1KTtjb250ZW50OiIiO2JhY2tncm91bmQtY29sb3I6cmdiKHZhcigtLXYtdGhlbWUtcHJpbWFyeSkpO2JvcmRlci1yYWRpdXM6NTAlO3dpZHRoOmNhbGModmFyKC0tdi12Y3MtZm9udC1zaXplKSAqIDIgLSAycHgpO2hlaWdodDpjYWxjKHZhcigtLXYtdmNzLWZvbnQtc2l6ZSkgKiAyIC0gMnB4KX0udmNtLXN3aXBlLWVsZW1lbnQ6YWZ0ZXJ7bGVmdDpjYWxjKC0xICogKHZhcigtLXYtdmNzLWZvbnQtc2l6ZSkgKiAyICogLjYyNSAtIDdweCkpO2NvbnRlbnQ6IiI7d2lkdGg6Y2FsYyh2YXIoLS12LXZjcy1mb250LXNpemUpICogMiAtIDJweCk7aGVpZ2h0OmNhbGModmFyKC0tdi12Y3MtZm9udC1zaXplKSAqIDIgLSAycHgpO2JhY2tncm91bmQtY29sb3I6cmdiKHZhcigtLXYtdGhlbWUtYmFzZS1saWdodGVuLTUpKTstd2Via2l0LW1hc2staW1hZ2U6dXJsKCdkYXRhOmltYWdlL3N2Zyt4bWw7dXRmOCw8c3ZnIGhlaWdodD0iMjRweCIgd2lkdGg9IjI0cHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJtMTQuNTMsNi43MmMtLjI5LjI5LS4yOS43NywwLDEuMDYsMCwwLDAsMCwwLDBsMy44NiwzLjg2Yy4wNi4wNi4wNi4xNSwwLC4yMWwtMy44NiwzLjg2Yy0uMjkuMjktLjI5Ljc3LDAsMS4wNi4yOS4yOS43Ny4yOSwxLjA2LDBsNC41LTQuNWMuMjktLjI5LjI5LS43NywwLTEuMDYsMCwwLDAsMCwwLDBsLTQuNS00LjVjLS4yOS0uMjktLjc3LS4yOS0xLjA2LDAsMCwwLDAsMCwwLDBoMFptLTUsMTAuMzNjLjI5LS4yOS4yOS0uNzcsMC0xLjA2LDAsMCwwLDAsMCwwbC0zLjg2LTMuODZjLS4wNi0uMDYtLjA2LS4xNSwwLS4yMWwzLjg2LTMuODZjLjI5LS4yOS4yOS0uNzcsMC0xLjA2LS4yOS0uMjktLjc3LS4yOS0xLjA2LDBsLTQuNSw0LjVjLS4yOS4yOS0uMjkuNzcsMCwxLjA2LDAsMCwwLDAsMCwwbDQuNSw0LjVjLjI5LjI5Ljc3LjI5LDEuMDYsMCwwLDAsMCwwLDAsMGgwWiIgZmlsbD0iY3VycmVudENvbG9yIiAvPjwvc3ZnPicpO21hc2staW1hZ2U6dXJsKCdkYXRhOmltYWdlL3N2Zyt4bWw7dXRmOCw8c3ZnIGhlaWdodD0iMjRweCIgd2lkdGg9IjI0cHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJtMTQuNTMsNi43MmMtLjI5LjI5LS4yOS43NywwLDEuMDYsMCwwLDAsMCwwLDBsMy44NiwzLjg2Yy4wNi4wNi4wNi4xNSwwLC4yMWwtMy44NiwzLjg2Yy0uMjkuMjktLjI5Ljc3LDAsMS4wNi4yOS4yOS43Ny4yOSwxLjA2LDBsNC41LTQuNWMuMjktLjI5LjI5LS43NywwLTEuMDYsMCwwLDAsMCwwLDBsLTQuNS00LjVjLS4yOS0uMjktLjc3LS4yOS0xLjA2LDAsMCwwLDAsMCwwLDBoMFptLTUsMTAuMzNjLjI5LS4yOS4yOS0uNzcsMC0xLjA2LDAsMCwwLDAsMCwwbC0zLjg2LTMuODZjLS4wNi0uMDYtLjA2LS4xNSwwLS4yMWwzLjg2LTMuODZjLjI5LS4yOS4yOS0uNzcsMC0xLjA2LS4yOS0uMjktLjc3LS4yOS0xLjA2LDBsLTQuNSw0LjVjLS4yOS4yOS0uMjkuNzcsMCwxLjA2LDAsMCwwLDAsMCwwbDQuNSw0LjVjLjI5LjI5Ljc3LjI5LDEuMDYsMCwwLDAsMCwwLDAsMGgwWiIgZmlsbD0iY3VycmVudENvbG9yIiAvPjwvc3ZnPicpOy13ZWJraXQtbWFzay1yZXBlYXQ6bm8tcmVwZWF0O21hc2stcmVwZWF0Om5vLXJlcGVhdDstd2Via2l0LW1hc2stc2l6ZToxMDAlIDEwMCU7bWFzay1zaXplOjEwMCUgMTAwJX0udmNtLXN3aXBlLWVsZW1lbnR7dmVydGljYWwtYWxpZ246bWlkZGxlO3dpZHRoOjVweDtiYWNrZ3JvdW5kLWNvbG9yOnJnYih2YXIoLS12LXRoZW1lLXByaW1hcnkpKTt0b3VjaC1hY3Rpb246bm9uZX0udmNtLXN3aXBlLWVsZW1lbnQ6aG92ZXJ7Y3Vyc29yOmV3LXJlc2l6ZX0udmNtLXN3aXBlLWVsZW1lbnQtdGl0bGV7Y29sb3I6cmdiKHZhcigtLXYtdGhlbWUtYmFzZS1saWdodGVuLTUpKTt3aGl0ZS1zcGFjZTpub3dyYXA7cGFkZGluZzo1cHg7YmFja2dyb3VuZC1jb2xvcjpyZ2IodmFyKC0tdi10aGVtZS1wcmltYXJ5KSl9LnZjbS1zd2lwZS1lbGVtZW50LXRpdGxlLWxlZnR7Ym9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czo0cHg7Ym9yZGVyLXRvcC1sZWZ0LXJhZGl1czo0cHh9LnZjbS1zd2lwZS1lbGVtZW50LXRpdGxlLXJpZ2h0e2JvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOjRweDtib3JkZXItdG9wLXJpZ2h0LXJhZGl1czo0cHh9LnZjbS10cmVlLWhlYWRlcntiYWNrZ3JvdW5kLWNvbG9yOnJnYih2YXIoLS12LXRoZW1lLWJhc2UtbGlnaHRlbi0zKSl9Cg==');var Ce = Object.defineProperty;
var Ie = (t, e, i) => e in t ? Ce(t, e, { enumerable: !0, configurable: !0, writable: !0, value: i }) : t[e] = i;
var a = (t, e, i) => Ie(t, typeof e != "symbol" ? e + "" : e, i);
import { VcsObjectContentTreeItem as Ae, VcsTreeview as Ne, VcsFormSection as me, WindowSlot as Ve, ToolboxType as ge, ContentTreeItem as Oe, callSafeAction as se, NodeContentTreeItem as j, LayerContentTreeItem as $e, LayerGroupContentTreeItem as De, GroupContentTreeItem as Re, SubContentTreeItem as Me, VcsFormButton as Fe, VcsList as ke, VcsCheckbox as Pe, VcsTextField as Ge, VcsSelect as xe, VcsLabel as Be, AbstractConfigEditor as Ue } from "../../../assets/ui.js";
import { reactive as L, watch as H, defineComponent as we, inject as _e, ref as I, computed as Y, resolveComponent as y, createElementBlock as P, openBlock as A, Fragment as je, renderList as We, createBlock as B, createSlots as He, withCtx as h, createVNode as c, createElementVNode as O, createTextVNode as D, toDisplayString as T, createCommentVNode as ne } from "../../../assets/vue.js";
import { ScreenSpaceEventHandler as ze, ScreenSpaceEventType as $, SplitDirection as w } from "../../../assets/cesium.js";
import { VcsEvent as z, CesiumMap as Je, OpenlayersMap as Ke, VectorLayer as qe, moduleIdSymbol as Ze, volatileModuleId as Ye } from "../../../assets/core.js";
import { VIcon as Qe, VCol as Xe, VRow as et, VContainer as tt } from "../../../assets/vuetify.js";
function it(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var st = function t(e, i) {
  if (e === i) return !0;
  if (e && i && typeof e == "object" && typeof i == "object") {
    if (e.constructor !== i.constructor) return !1;
    var s, n, r;
    if (Array.isArray(e)) {
      if (s = e.length, s != i.length) return !1;
      for (n = s; n-- !== 0; )
        if (!t(e[n], i[n])) return !1;
      return !0;
    }
    if (e.constructor === RegExp) return e.source === i.source && e.flags === i.flags;
    if (e.valueOf !== Object.prototype.valueOf) return e.valueOf() === i.valueOf();
    if (e.toString !== Object.prototype.toString) return e.toString() === i.toString();
    if (r = Object.keys(e), s = r.length, s !== Object.keys(i).length) return !1;
    for (n = s; n-- !== 0; )
      if (!Object.prototype.hasOwnProperty.call(i, r[n])) return !1;
    for (n = s; n-- !== 0; ) {
      var o = r[n];
      if (!t(e[o], i[o])) return !1;
    }
    return !0;
  }
  return e !== e && i !== i;
};
const re = /* @__PURE__ */ it(st);
function nt(t, e) {
  if (t != null) {
    const i = Number.parseFloat(String(t));
    if (i != null && !Number.isNaN(i))
      return i;
  }
  return e;
}
function oe(t, e) {
  return t == null ? !!e : typeof t == "boolean" ? t : t === 1 ? !0 : t === 0 ? !1 : typeof t == "string" && (t.toLowerCase() === "true" || t.toLowerCase() === "1") ? !0 : typeof t == "string" && (t.toLowerCase() === "false" || t.toLowerCase() === "0") ? !1 : !!e;
}
const U = Symbol("isMatcher"), rt = Symbol("Integer"), ot = Symbol("NonEmptyString"), Q = /* @__PURE__ */ new Map();
[
  [String, "string"],
  [Number, "number"],
  [Boolean, "boolean"],
  [Function, "function"],
  [void 0, "undefined"],
  [Symbol, "symbol"]
].forEach(([t, e]) => {
  Q.set(t, e);
});
function lt(t) {
  return t == null ? void 0 : t[U];
}
function J(t) {
  if (!t || String(t) !== "[object Object]")
    return !1;
  const e = Object.getPrototypeOf(t);
  if (!e)
    return !0;
  const s = {}.hasOwnProperty.call(e, "constructor") && e.constructor;
  return typeof s == "function" && String(s) === String(Object);
}
function E(t, e) {
  if (t === null)
    return "null";
  if (typeof t > "u")
    return "undefined";
  if (e)
    return typeof t;
  let i;
  if (Array.isArray(t))
    i = `[${t.map((n) => E(n, e)).join(",")}]`;
  else
    try {
      i = JSON.stringify(t);
    } catch {
      i = typeof t;
    }
  return i = i || typeof t, i.length > 20 ? `${i.substring(0, 20)}...` : i;
}
function at(t, e) {
  return typeof e == "string" || typeof e == "number" || typeof e == "boolean" || typeof e == "symbol" ? t === e ? !1 : `Expected ${E(t)} to equal ${e.toString()}` : null;
}
function ct(t, e, i) {
  if (Array.isArray(e)) {
    if (e.length !== 1)
      throw new Error("Array patterns may only have one type");
    if (Array.isArray(t)) {
      let s = !1;
      return t.findIndex((r) => (s = i(r, e[0]), s)) > -1 ? `${String(s)} in ${E(t)}` : !1;
    }
    return `Expected ${E(t)} to be an Array`;
  }
  return null;
}
function K(t, e, i, s) {
  const n = s ? `${s}.` : "";
  if (!J(t))
    return `Expected ${E(t)} to be a plain Object`;
  let o = !1;
  const l = Object.keys(e).find((p) => {
    const f = t[p];
    return J(e[p]) ? o = K(f, e[p], i, n + p) : o = i(f, e[p]), o;
  });
  return l ? `${String(o)} in object.${n}${l}` : !1;
}
function pt(t, e) {
  if (e === Number)
    return Number.isFinite(t) ? !1 : `expected ${E(t)} to be a number, excluding NaN`;
  if (e === rt)
    return Number.isInteger(t) ? !1 : `expected ${E(t)} to be an integer number`;
  if (e === ot)
    return typeof t == "string" && t.length > 0 ? !1 : `expected ${E(t)} to be a non-empty string`;
  const i = Q.get(e);
  return i ? typeof t === i ? !1 : `expected ${E(t)} to be a ${String(i)}` : null;
}
function X(t) {
  if (t === null)
    return "null";
  const e = Q.get(t);
  if (e)
    return e;
  const i = t == null ? void 0 : t.className;
  if (i)
    return i;
  let s = String(t);
  const n = s.match(/function (.*)\(/);
  if (n && n.length > 1) {
    const r = t == null ? void 0 : t.name;
    return r || n[1].substring(0, 20);
  }
  if (J(t)) {
    const r = {};
    Object.keys(t).forEach((o) => {
      r[o] = X(t[o]);
    });
    try {
      s = `Object of ${JSON.stringify(r)}`;
    } catch {
      s = "Object";
    }
  }
  return s;
}
function ee(t, e) {
  const i = (s, n) => {
    if (lt(n))
      return n(s);
    if (n == null)
      return s === n ? !1 : `Expected ${E(s)} to be ${String(n)}`;
    const r = pt(s, n);
    if (r !== null)
      return r;
    const o = at(s, n);
    if (o !== null)
      return o;
    if (Array.isArray(n))
      return ct(s, n, i);
    if (n === Object)
      return K(s, {}, i);
    if (n instanceof Function)
      return s instanceof n ? !1 : `Expected ${E(s, !0)} to be of Type ${X(n)}`;
    if (typeof n == "object") {
      const l = K(s, n, i);
      return l || !1;
    }
    throw new Error(`Cannot handle pattern ${String(n)}`);
  };
  return i(t, e);
}
let ht = Error;
function v(t, e) {
  const i = ee(t, e);
  if (i)
    throw new ht(`Match failed: ${i}`);
}
function te(t) {
  const e = (i) => {
    if (i == null)
      return !1;
    const s = ee(i, t);
    return s && `${s} or undefined or null`;
  };
  return e[U] = !0, e;
}
function ft(...t) {
  const e = (i) => t.every((n) => ee(i, n)) ? `Expected ${E(i)} to be a ${t.map((n) => X(n)).join(" or ")}` : !1;
  return e[U] = !0, e;
}
function R(t) {
  v(t, Object);
  const e = Object.values(t), i = (s) => e.includes(s) ? !1 : `expected ${E(s)} to be of enum: ${e.join(", ")}`;
  return i[U] = !0, i;
}
const _ = "@vcmap/swipe-tool", dt = "4.0.0", ut = "^6.2";
function mt(t) {
  const e = document.createElement("div");
  return e.className = "vcm-swipe-element", e.style.position = "absolute", e.style.left = `${100 * t}%`, e.style.top = "0px", e.style.height = "100%", e.style.zIndex = "0", e;
}
function le(t, e) {
  const i = document.createElement("span");
  return i.classList.add(
    "vcm-swipe-element-title",
    `vcm-swipe-element-title-${e}`
  ), i.style.position = "absolute", i.style.bottom = "3px", e === "left" ? i.style.right = "3px" : i.style.left = "3px", i.style.zIndex = "9999", i.innerText = t, i;
}
class gt {
  constructor(e, i) {
    a(this, "element");
    a(this, "swipeEventHandler");
    a(this, "swipeActive", !1);
    a(this, "active", !1);
    a(this, "stateChanged", new z());
    a(this, "positionChanged", new z());
    a(this, "_listeners", []);
    a(this, "_i18nChangedListener");
    this._app = e, this._titles = i, this.element = mt(this._app.maps.splitPosition), this.swipeEventHandler = new ze(
      this.element
    ), this._i18nChangedListener = this._app.i18n.changed.addEventListener(
      ({ name: s }) => {
        s === _ && this._setTitles();
      }
    );
  }
  /** The titles on the swipe element */
  get titles() {
    return this._titles;
  }
  set titles(e) {
    v(e, te(Object)), this._titles = e, this._setTitles();
  }
  /** Set the title elements */
  _setTitles() {
    for (; this.element.firstChild; )
      this.element.removeChild(this.element.firstChild);
    this.titles && (this.titles.left && this.element.appendChild(
      le(this._app.vueI18n.t(this.titles.left), "left")
    ), this.titles.right && this.element.appendChild(
      le(this._app.vueI18n.t(this.titles.right), "right")
    ));
  }
  /** Adds the swipeElement to the map container */
  activate() {
    this.active || (this._addElementToMap(), this._setTitles(), this.element.style.left = `calc(${100 * this._app.maps.splitPosition}% - 2px)`, this.swipeEventHandler.setInputAction(() => {
      this.swipeActive = !0;
    }, $.LEFT_DOWN), this.swipeEventHandler.setInputAction(() => {
      this.swipeActive = !1;
    }, $.LEFT_UP), this.swipeEventHandler.setInputAction(
      this.onSwipingListener.bind(this),
      $.MOUSE_MOVE
    ), this.active = !0, this._listeners = [
      this._app.localeChanged.addEventListener(this._setTitles.bind(this)),
      this._app.maps.mapActivated.addEventListener(
        this.handleMapChange.bind(this)
      )
    ]), this.stateChanged.raiseEvent(this.active);
  }
  /** Removes the swipeElement from the map container */
  deactivate() {
    this.active && (this._removeElementFromMap(), this.swipeEventHandler.removeInputAction($.LEFT_DOWN), this.swipeEventHandler.removeInputAction($.LEFT_UP), this.swipeEventHandler.removeInputAction($.MOUSE_MOVE), this.active = !1, this._listeners.forEach((e) => {
      e();
    }), this._listeners.splice(0)), this.stateChanged.raiseEvent(this.active);
  }
  handleMapChange() {
    this._removeElementFromMap(), this.active && this._addElementToMap();
  }
  _addElementToMap() {
    this._app.maps.target.appendChild(this.element);
  }
  _removeElementFromMap() {
    this.element.parentElement && this.element.parentElement.removeChild(this.element);
  }
  /** Sync the swipe position of the dom element and map layers */
  onSwipingListener(e) {
    if (this.swipeActive) {
      const i = e.endPosition.x, s = (this.element.offsetLeft + i) / this.element.parentElement.offsetWidth;
      s > 0.01 && s < 0.99 && (this._app.maps.splitPosition = s, this.element.style.left = `calc(${100 * this._app.maps.splitPosition}% - 2px)`, this.positionChanged.raiseEvent(s));
    }
  }
  destroy() {
    this.deactivate(), this._i18nChangedListener(), this._listeners.forEach((e) => {
      e();
    }), this._listeners.splice(0);
  }
}
var u = /* @__PURE__ */ ((t) => (t[t.INACTIVE = 0] = "INACTIVE", t[t.ACTIVE = 1] = "ACTIVE", t[t.INDETERMINATE = 2] = "INDETERMINATE", t))(u || {});
const G = {
  0: "$vcsCheckbox",
  1: "$vcsCheckboxChecked",
  2: "$vcsCheckboxIndeterminate"
}, x = {
  0: "swipeTool.stateActionTitles.inactive",
  1: "swipeTool.stateActionTitles.active",
  2: "swipeTool.stateActionTitles.indeterminate"
};
function ie(t, e) {
  v(t.left, R(u)), v(t.right, R(u)), v(e, Function);
  const i = L({
    name: "split-left",
    active: !!t.left,
    icon: G[t.left],
    title: `${x[t.left]}Left`,
    callback: () => e(w.LEFT)
  }), s = H(
    () => t.left,
    (o) => {
      i.active = !!o, i.icon = G[o], i.title = `${x[t.left]}Left`;
    }
  ), n = L({
    name: "split-right",
    active: !!t.right,
    icon: G[t.right],
    title: `${x[t.right]}Right`,
    callback: () => e(w.RIGHT)
  }), r = H(
    () => t.right,
    (o) => {
      n.active = !!o, n.icon = G[o], n.title = `${x[t.right]}Right`;
    }
  );
  return {
    actions: [n, i],
    destroy: () => {
      s(), r();
    }
  };
}
function ve(t, e, i) {
  if (e.active || e.loading)
    return e.splitDirection && e.splitDirection !== i ? e.splitDirection = w.NONE : e.splitDirection === i ? e.deactivate() : e.splitDirection === w.NONE && (e.splitDirection = i === w.RIGHT ? w.LEFT : w.RIGHT), Promise.resolve();
  if (e.exclusiveGroups.length > 0) {
    const s = e.exclusiveGroups.map(
      (n) => t.exclusiveManager.getActiveLayersForGroup(
        n.toString()
      )
    ).flat().filter((n) => "splitDirection" in n);
    s.length === 1 && s[0].splitDirection === w.NONE && (s[0].splitDirection = i === w.RIGHT ? w.LEFT : w.RIGHT);
  }
  return e.splitDirection = i, e.activate();
}
function F(t) {
  return t.active ? t.splitDirection === w.LEFT ? {
    left: 1,
    right: 0
    /* INACTIVE */
  } : t.splitDirection === w.NONE ? {
    left: 1,
    right: 1
    /* ACTIVE */
  } : {
    left: 0,
    right: 1
    /* ACTIVE */
  } : {
    left: 0,
    right: 0
    /* INACTIVE */
  };
}
class wt extends Ae {
  constructor(i, s) {
    super(i, s);
    a(this, "_app");
    a(this, "_splitState", L({
      left: 1,
      right: 1
      /* ACTIVE */
    }));
    a(this, "_layerName");
    a(this, "_listeners", []);
    a(this, "_destroyWatcher");
    this._app = s, this._layerName = i.layerName, this._setup();
  }
  static get className() {
    return "LayerSwipeTreeItem";
  }
  get splitState() {
    return this._splitState;
  }
  set splitState(i) {
    v(i.left, R(u)), v(i.right, R(u)), this._splitState.left !== i.left && (this._splitState.left = i.left), this._splitState.right !== i.right && (this._splitState.right = i.right);
  }
  get layer() {
    return this._app.layers.getByKey(this._layerName);
  }
  _setSwipeActions() {
    this.removeAction("split-right"), this.removeAction("split-left");
    const i = ve.bind(this, this._app.maps.layerCollection, this.layer), { actions: s, destroy: n } = ie(
      this.splitState,
      i
    );
    s.forEach((r) => {
      this.addAction(r);
    }), this._destroyWatcher = n;
  }
  _clearListeners() {
    this._listeners.forEach((i) => {
      i();
    }), this._listeners.splice(0);
  }
  _setup() {
    this._clearListeners(), this._setSwipeActions();
    const i = (s) => {
      s.name === this._layerName && this._setup();
    };
    this.layer ? (this.visible = this.layer.isSupported(this._app.maps.activeMap), this.setPropertiesFromObject(this.layer), this._listeners.push(
      this._app.layers.removed.addEventListener(i)
    ), this._listeners.push(
      this._app.layers.added.addEventListener(i)
    ), this._listeners.push(
      this._app.maps.mapActivated.addEventListener(() => {
        this.visible = this.layer.isSupported(this._app.maps.activeMap);
      })
    ), this._listeners.push(
      this.layer.stateChanged.addEventListener(() => {
        this.splitState = F(this.layer);
      })
    ), this._listeners.push(
      this.layer.splitDirectionChanged.addEventListener(() => {
        this.splitState = F(this.layer);
      })
    ), this.splitState = F(this.layer)) : (this.visible = !1, this._listeners.push(
      this._app.layers.added.addEventListener(i)
    ));
  }
  getTreeViewItem() {
    const i = super.getTreeViewItem();
    return i.splitState = this._splitState, i;
  }
  toJSON() {
    return { ...super.toJSON(), layerName: this._layerName };
  }
  destroy() {
    var i;
    super.destroy(), (i = this._destroyWatcher) == null || i.call(this), this._clearListeners();
  }
}
const _t = we({
  name: "SwipeToolComponent",
  components: {
    VcsFormSection: me,
    VcsTreeview: Ne,
    VIcon: Qe
  },
  setup() {
    const t = _e("vcsApp"), e = t.plugins.getByKey(_), { subTreeIds: i } = e.swipeTool, s = I(
      i.value.flatMap((r) => t.contentTree.getTreeOpenState(r))
    ), n = Y(() => i.value.flatMap(
      (r) => e.swipeTool.getComputedVisibleTree(r).value
    ));
    return {
      subTreeIds: i,
      trees: n,
      opened: s
    };
  }
}), ye = (t, e) => {
  const i = t.__vccOpts || t;
  for (const [s, n] of e)
    i[s] = n;
  return i;
}, vt = { key: 0 }, yt = { class: "pa-2 vcm-tree-header" }, Et = { class: "form-section-header d-flex align-center swipe-tree-header" }, St = { class: "d-inline-flex" }, Tt = { class: "px-1" }, bt = { class: "ml-auto mr-10" }, Lt = {
  key: 1,
  class: "ma-2"
};
function Ct(t, e, i, s, n, r) {
  const o = y("v-icon"), l = y("VcsTreeview"), p = y("VcsFormSection");
  return A(), P("div", null, [
    t.trees.length > 0 ? (A(), P("div", vt, [
      (A(!0), P(
        je,
        null,
        We(t.trees, (f, V) => (A(), B(
          p,
          {
            key: t.subTreeIds[V]
          },
          He({
            default: h(() => [
              c(l, {
                opened: t.opened,
                "onUpdate:opened": e[0] || (e[0] = (d) => t.opened = d),
                items: f.visibleChildren,
                "item-children": "visibleChildren",
                "open-on-click": ""
              }, null, 8, ["opened", "items"])
            ]),
            _: 2
            /* DYNAMIC */
          }, [
            f ? {
              name: "header",
              fn: h(() => [
                O("article", yt, [
                  O("div", Et, [
                    O("div", St, [
                      c(
                        o,
                        null,
                        {
                          default: h(() => [
                            D(
                              T(f.icon),
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
                    O("div", null, [
                      O(
                        "strong",
                        Tt,
                        T(t.$t(f.title)),
                        1
                        /* TEXT */
                      )
                    ]),
                    O("div", bt, [
                      O(
                        "strong",
                        null,
                        T(t.$st("swipeTool.treeTitle")),
                        1
                        /* TEXT */
                      )
                    ])
                  ])
                ])
              ]),
              key: "0"
            } : void 0
          ]),
          1024
          /* DYNAMIC_SLOTS */
        ))),
        128
        /* KEYED_FRAGMENT */
      ))
    ])) : (A(), P(
      "p",
      Lt,
      T(t.$t("swipeTool.emptyTree")),
      1
      /* TEXT */
    ))
  ]);
}
const It = /* @__PURE__ */ ye(_t, [["render", Ct]]), S = "swipe-tool-window";
function At(t) {
  const e = L({
    name: "hide-swipe-action",
    title: "swipeTool.hideController",
    icon: "$vcsEye",
    active: !1,
    callback() {
      t.active ? (t.deactivate(), e.title = "swipeTool.showController") : (t.activate(), e.title = "swipeTool.hideController");
    }
  }), i = t.stateChanged.addEventListener((s) => {
    e.active = s;
  });
  return { action: e, destroy: i };
}
function ae(t, e) {
  const { action: i, destroy: s } = At(e.swipeElement), n = {
    id: S,
    component: It,
    slot: Ve.DYNAMIC_LEFT,
    state: {
      headerTitle: "swipeTool.title",
      headerIcon: "$vcsSplitView",
      headerActions: [i],
      infoUrlCallback: t.getHelpUrlCallback("/tools/swipeTool.html")
    }
  }, r = L({
    name: "swipe-action",
    title: "swipeTool.title",
    icon: "$vcsSplitView",
    active: !1,
    background: !1,
    disabled: !1,
    callback() {
      r.active ? (r.background ? t.windowManager.add(n, _) : (t.windowManager.remove(S), e.deactivate(), r.active = !1), r.background = !1) : (e.activate(), r.active = !0, t.windowManager.add(n, _));
    }
  }), o = [
    t.windowManager.added.addEventListener(({ id: l }) => {
      l === S && (r.active = !0, r.background = !1);
    }),
    t.windowManager.removed.addEventListener(({ id: l }) => {
      l === S && (r.background = !0);
    }),
    e.stateChanged.addEventListener((l) => {
      r.active = l, r.background = !t.windowManager.has(S);
    }),
    t.maps.mapActivated.addEventListener((l) => {
      l instanceof Je || l instanceof Ke ? r.disabled = !1 : (e.deactivate(), t.windowManager.remove(S), r.disabled = !0);
    })
  ];
  return t.toolboxManager.has(_) && t.toolboxManager.remove(_), t.toolboxManager.add(
    {
      id: _,
      type: ge.SINGLE,
      action: r
    },
    _
  ), () => {
    t.toolboxManager.has(_) && t.toolboxManager.remove(_), t.windowManager.has(S) && t.windowManager.remove(S), s && s(), o.forEach((l) => {
      l();
    });
  };
}
function ce(t, e) {
  const i = L({
    name: "swipe-action",
    title: "swipeTool.title",
    icon: "$vcsSplitView",
    active: !1,
    callback() {
      i.active ? (e.deactivate(), i.active = !1) : (e.activate(), i.active = !0);
    }
  }), s = e.stateChanged.addEventListener((n) => {
    i.active = n;
  });
  return t.toolboxManager.has(_) && t.toolboxManager.remove(_), t.toolboxManager.add(
    {
      id: _,
      type: ge.SINGLE,
      action: i
    },
    _
  ), () => {
    t.toolboxManager.has(_) && t.toolboxManager.remove(_), s();
  };
}
const m = {
  ERROR: 2,
  WARN: 4,
  INFO: 8,
  DEBUG: 16
}, b = {
  ERROR: 0,
  WARN: 0,
  INFO: 0,
  DEBUG: 0
};
b.ERROR = m.ERROR | m.WARN | m.INFO | m.DEBUG;
b.WARN = m.WARN | m.INFO | m.DEBUG;
b.INFO = m.INFO | m.DEBUG;
b.DEBUG = m.DEBUG;
const M = {
  logLevel: m.INFO
}, k = /* @__PURE__ */ new Map();
k.set(m.ERROR, "error");
k.set(m.WARN, "warn");
k.set(m.INFO, "info");
k.set(m.DEBUG, "log");
class Nt {
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
  error(e, ...i) {
    M.logLevel & b.ERROR && this._log(String(e), m.ERROR, i);
  }
  /**
   * Logs a warning message
   * @param {string} msg The message to log.
   * @param {...any} optArgs
   */
  warning(e, ...i) {
    M.logLevel & b.WARN && this._log(String(e), m.WARN, i);
  }
  /**
   * Deprecate a function. deprecations are stored on the logger
   * @param {string} functionName
   * @param {string=} alternativeFunctionName
   */
  deprecate(e, i) {
    const s = String(e), n = i ? String(i) : null;
    if (!this.deprecations.has(s)) {
      this.deprecations.set(s, n || null);
      let r = `${s} has been deprecated and will be removed`;
      n && (r = `${r}. ${n}`), this.warning(r);
    }
  }
  /**
   * Logs an info message
   * @param {string} msg The message to log.
   * @param {...any} optArgs
   */
  info(e, ...i) {
    M.logLevel & b.INFO && this._log(String(e), m.INFO, i);
  }
  /**
   * Logs a debug message
   * @param {string} msg The message to log.
   * @param {...any} optArgs
   */
  debug(e, ...i) {
    M.logLevel & b.DEBUG && this._log(String(e), m.DEBUG, i);
  }
  /**
   * Alias for debug
   * @param {string} msg The message to log.
   * @param {...any} optArgs
   */
  log(e, ...i) {
    M.logLevel & b.DEBUG && this._log(String(e), m.DEBUG, i);
  }
  /**
   * Logs a message
   * @param {string} msg The message to log.
   * @param {LOG_LEVEL} level
   * @param {Array} optArgs
   * @private
   */
  _log(e, i, s) {
    let n = e;
    this.className && (n = `[${this.className}] ${n}`), console[k.get(i)](n, ...s), i & m.ERROR && (console.group(), console.trace(), console.groupEnd());
  }
}
const q = /* @__PURE__ */ new Map();
function Vt(t) {
  const e = new Nt(t);
  return q.set(t, e), e;
}
function Ot(t) {
  return q.has(t) ? q.get(t) : Vt(t);
}
class Ee extends Oe {
  constructor() {
    super(...arguments);
    a(this, "_splitState", L({
      left: u.ACTIVE,
      right: u.ACTIVE
    }));
  }
  static get className() {
    return "SwipeTreeItem";
  }
  get children() {
    return this._children;
  }
  get splitState() {
    return this._splitState;
  }
  set splitState(i) {
    v(i.left, R(u)), v(i.right, R(u)), this._splitState.left !== i.left && (this._splitState.left = i.left), this._splitState.right !== i.right && (this._splitState.right = i.right);
  }
  getTreeViewItem() {
    const i = super.getTreeViewItem();
    return i.splitState = this._splitState, i;
  }
}
function pe(t, e) {
  return t.every((i) => i[e] === u.ACTIVE) ? u.ACTIVE : t.every((i) => i[e] === u.INACTIVE) ? u.INACTIVE : u.INDETERMINATE;
}
function Z(t) {
  return {
    left: pe(t, "left"),
    right: pe(t, "right")
  };
}
function W(t) {
  return Z(t.map((e) => F(e)));
}
class $t extends Ee {
  constructor(i, s) {
    super(i, s);
    a(this, "_layerNames");
    a(this, "_listeners", []);
    a(this, "_destroyWatcher");
    this._layerNames = Array.isArray(i.layerNames) ? i.layerNames.slice() : [], this._setup();
  }
  static get className() {
    return "LayerGroupSwipeTreeItem";
  }
  get _layers() {
    return this._layerNames.map((i) => this._app.layers.getByKey(i)).filter((i) => !!i).filter((i) => "splitDirection" in i && i.splitDirection !== void 0).map((i) => i);
  }
  _setSwipeActions() {
    this.removeAction("split-right"), this.removeAction("split-left");
    const i = (r) => {
      this._layers.filter((o) => {
        const l = F(o);
        return r === w.LEFT ? this.splitState.left === u.ACTIVE ? l.left === u.ACTIVE : l.left !== u.ACTIVE : r === w.RIGHT ? this.splitState.right === u.ACTIVE ? l.right === u.ACTIVE : l.right !== u.ACTIVE : !1;
      }).forEach((o) => {
        ve(this._app.maps.layerCollection, o, r).catch(
          (l) => {
            Ot(_).error(
              "Error while applying Split Direction to layer",
              o.name,
              l
            );
          }
        );
      });
    }, { actions: s, destroy: n } = ie(
      this.splitState,
      i
    );
    s.forEach((r) => {
      this.addAction(r);
    }), this._destroyWatcher = n;
  }
  _setup() {
    this._clearListeners();
    const i = (n) => {
      this._layerNames.includes(n.name) && this._setup();
    }, s = this._layers;
    this.visible = s.some((n) => n.isSupported(this._app.maps.activeMap)), this._setSwipeActions(), this._listeners.push(
      this._app.layers.removed.addEventListener(i)
    ), this._listeners.push(this._app.layers.added.addEventListener(i)), this._listeners.push(
      this._app.maps.mapActivated.addEventListener(() => {
        this.visible = !!s.find(
          (n) => n.isSupported(this._app.maps.activeMap)
        );
      })
    ), s.forEach((n) => {
      this._listeners.push(
        n.stateChanged.addEventListener(() => {
          this.splitState = W(s);
        })
      ), this._listeners.push(
        n.splitDirectionChanged.addEventListener(() => {
          this.splitState = W(s);
        })
      );
    }), this.splitState = W(s);
  }
  _clearListeners() {
    this._listeners.forEach((i) => {
      i();
    }), this._listeners.splice(0);
  }
  toJSON() {
    return {
      ...super.toJSON(),
      layerNames: this._layerNames.slice()
    };
  }
  destroy() {
    var i;
    this._clearListeners(), (i = this._destroyWatcher) == null || i.call(this), super.destroy();
  }
}
class Dt extends Ee {
  constructor(i, s) {
    super(i, s);
    a(this, "_listeners", []);
    a(this, "_childWatcher");
    a(this, "_destroyWatcher");
    this._childWatcher = H(
      this._children,
      () => {
        const n = this._children.value;
        this.visible = n.some((o) => o.visible);
        const r = n.map(({ splitState: o }) => o);
        this.splitState = Z(r);
      },
      { deep: !0 }
    ), this._setup();
  }
  static get className() {
    return "GroupSwipeTreeItem";
  }
  _setSwipeActions() {
    this.removeAction("split-right"), this.removeAction("split-left");
    const i = (r) => {
      this._children.value.forEach(({ actions: o }) => {
        if (r === w.LEFT) {
          const l = this.splitState.left === u.ACTIVE;
          o.filter((p) => p.name === "split-left" && p.active === l).forEach((p) => {
            se(p);
          });
        } else if (r === w.RIGHT) {
          const l = this.splitState.right === u.ACTIVE;
          o.filter((p) => p.name === "split-right" && p.active === l).forEach((p) => {
            se(p);
          });
        }
      });
    }, { actions: s, destroy: n } = ie(
      this.splitState,
      i
    );
    s.forEach((r) => {
      this.addAction(r);
    }), this._destroyWatcher = n;
  }
  _setup() {
    this._setSwipeActions(), this.splitState = Z(
      this._children.value.map(({ splitState: i }) => i)
    );
  }
  _clearListeners() {
    this._listeners.forEach((i) => {
      i();
    }), this._listeners.splice(0);
  }
  destroy() {
    var i, s;
    this._clearListeners(), super.destroy(), (i = this._destroyWatcher) == null || i.call(this), (s = this._childWatcher) == null || s.call(this);
  }
}
function Rt(t) {
  var i;
  v(t.active, Boolean), v(t.splitDirection, te(ft("left", "right")));
  const e = (i = t.splitDirection) == null ? void 0 : i.toUpperCase();
  return {
    active: t.active,
    splitDirection: e ? w[e] : w.NONE
  };
}
class N {
  constructor(e, i) {
    a(this, "_app");
    a(this, "_active", !1);
    a(this, "_splitPosition");
    a(this, "_showSwipeTree");
    a(this, "_showSwipeElement");
    a(this, "_swipeElementTitles");
    a(this, "_swipeElement");
    a(this, "swipeLayerStates");
    a(this, "_cachedState", {});
    a(this, "_initialState", {});
    a(this, "_subTreeIds", I([]));
    a(this, "_subTreeViewItems", /* @__PURE__ */ new Map());
    a(this, "stateChanged", new z());
    a(this, "_listeners");
    a(this, "_destroyActions");
    const s = N.getDefaultOptions();
    this._app = e, this._splitPosition = nt(
      i.splitPosition,
      N.getDefaultOptions().splitPosition
    ), this._showSwipeTree = oe(
      i.showSwipeTree,
      s.showSwipeTree
    ), this._showSwipeElement = oe(
      i.showSwipeElement,
      s.showSwipeElement
    ), this._swipeElementTitles = i.swipeElementTitles || s.swipeElementTitles, this._swipeElement = new gt(e, this._swipeElementTitles), this.swipeLayerStates = i.swipeLayerStates ?? {}, i.swipeLayerStates && Object.entries(this.swipeLayerStates).forEach(
      ([n, r]) => {
        this._cachedState[n] = Rt(r);
      }
    ), this._listeners = [
      e.contentTree.added.addEventListener(this.handleItemAdded.bind(this)),
      e.contentTree.removed.addEventListener(this.setTreeView.bind(this)),
      e.moduleAdded.addEventListener(this.setTreeView.bind(this)),
      this._swipeElement.positionChanged.addEventListener((n) => {
        this._splitPosition = n;
      })
    ], this._destroyActions = this._showSwipeTree ? ae(this._app, this) : ce(this._app, this);
  }
  static get className() {
    return "SwipeTool";
  }
  /**
   * Returns the default options for this Widget
   */
  static getDefaultOptions() {
    return {
      showSwipeTree: !0,
      showSwipeElement: !0,
      splitPosition: 0.5,
      swipeElementTitles: void 0,
      swipeLayerStates: void 0
    };
  }
  get active() {
    return this._active;
  }
  get splitPosition() {
    return this._splitPosition;
  }
  set splitPosition(e) {
    if (v(e, Number), e < 0 || e > 1)
      throw new Error("Position must be between 0 and 1");
    this._splitPosition = e, this._active && (this._app.maps.splitPosition = this._splitPosition);
  }
  get showSwipeElement() {
    return this._showSwipeElement;
  }
  set showSwipeElement(e) {
    v(e, Boolean), this._showSwipeElement = e, e ? this._swipeElement.activate() : this._swipeElement.deactivate();
  }
  get showSwipeTree() {
    return this._showSwipeTree;
  }
  set showSwipeTree(e) {
    v(e, Boolean), this._showSwipeTree = e, this._destroyActions(), this._destroyActions = this._showSwipeTree ? ae(this._app, this) : ce(this._app, this);
  }
  /** The title present on the swipe element. */
  get swipeElementTitles() {
    return this._swipeElementTitles;
  }
  set swipeElementTitles(e) {
    v(e, te(Object)), this._swipeElementTitles = e, this._swipeElement && (this._swipeElement.titles = this._swipeElementTitles);
  }
  get swipeElement() {
    return this._swipeElement;
  }
  /** Activates swipe tool by applying state */
  activate() {
    this._active || (this._app.maps.splitPosition = this._splitPosition, this._showSwipeElement && this._swipeElement.activate(), this._initialState = this.getState(), this._active = !0, this.setTreeView(), this.applyState(this._cachedState), this.stateChanged.raiseEvent(this._active));
  }
  /** Deactivating swipe tool by resetting state and clearing swipe tree */
  deactivate() {
    if (this._active) {
      this._splitPosition = this._app.maps.splitPosition, this._swipeElement.deactivate(), this._app.windowManager.has(S) && this._app.windowManager.remove(S);
      const e = this.getState();
      this.setState(e), this.applyState(this._initialState), this._clearSwipeTree(), this._active = !1, this.stateChanged.raiseEvent(this._active);
    }
  }
  /**
   * Takes a mapped SwipeTreeItem and handles its children.
   * Removes all other actions than split actions.
   * Returns a mapped TreeViewItem to be used within SwipeTree
   */
  _handleChildren(e, i, s) {
    return e.getTreeViewItem().children = i.children.map((r) => this._mapTreeItems(r, s)).filter((r) => !!r), e instanceof j || (e.getTreeViewItem().clickable = !1), e.actions.map((r) => r.name).filter((r) => r !== "split-right" && r !== "split-left").forEach((r) => {
      e.removeAction(r);
    }), e.getTreeViewItem();
  }
  /** Maps ContentTreeItems to SwipeTreeItems */
  _mapTreeItems(e, i) {
    const s = i.getByKey(e.name);
    let n;
    const r = s.toJSON();
    if (s instanceof $e) {
      const o = this._app.maps.layerCollection.getByKey(
        r.layerName
      );
      if (o instanceof qe && o.vectorClusterGroup)
        return null;
      o && o.splitDirection !== void 0 && (n = new wt(
        r,
        this._app
      ));
    } else s instanceof De ? n = new $t(
      r,
      this._app
    ) : s instanceof Re ? n = new Dt(r, this._app) : s instanceof j && (n = new j(r, this._app));
    return n ? this._handleChildren(n, e, i) : null;
  }
  /**
   * Sets swipe tree by deriving it from content tree.
   * Maps all entries of content tree with swipe layers to new LayerSwipeTreeItems or GroupLayerSwipeTreeItems.
   * Called whenever content tree changes.
   * Might be extended in future to support further sources apart from content tree.
   */
  setTreeView() {
    this._clearSwipeTree(), this._active && this._showSwipeTree && [...this._app.contentTree.subTreeViewItems.value.values()].forEach(
      (e, i) => {
        const { name: s, title: n, tooltip: r, icon: o } = e, l = new Me(
          { name: s, title: n, tooltip: r, icon: o },
          this._app
        ), p = this._handleChildren(
          l,
          e,
          this._app.contentTree
        ), f = this._app.contentTree.subTreeIds[i];
        this._subTreeViewItems.set(f, p), this._subTreeIds.value.push(f);
      }
    );
  }
  /** All ids of the currently managed subtrees. Ids are not persisted and will change if
   * the trees get recalculated. */
  get subTreeIds() {
    return this._subTreeIds;
  }
  getComputedVisibleTree(e) {
    return Y(() => this._subTreeViewItems.has(e) ? [this._subTreeViewItems.get(e)].filter(
      (i) => i !== void 0
    ) : []);
  }
  _clearSwipeTree() {
    this._subTreeViewItems.clear(), this._subTreeIds.value.splice(0);
  }
  /** Clears swipeTool by removing all items of managed layers and resetting initial state */
  clear() {
    this.applyState(this._initialState), this._cachedState = {}, this._initialState = {}, this._clearSwipeTree();
  }
  /**
   * Iterates over content tree collection and returns current SwipeLayerState
   * for all layers of LayerContentTreeItem and LayerGroupContentTreeItem.
   */
  getState() {
    const e = [...this._app.contentTree].map((i) => {
      const s = i.toJSON();
      return s.layerName ? [s.layerName] : s.layerNames ? s.layerNames : [];
    }).flat().filter(
      (i) => {
        var s;
        return ((s = this._app.layers.getByKey(i)) == null ? void 0 : s.splitDirection) !== void 0;
      }
    ).map((i) => {
      const { active: s, splitDirection: n } = this._app.layers.getByKey(
        i
      );
      return [i, { active: s, splitDirection: n }];
    });
    return Object.fromEntries(e);
  }
  /** Sets SwipeLayerState and applies it, if active. */
  setState(e) {
    this._cachedState = e, this.applyState(this._cachedState);
  }
  /** Iterate over all cached SwipeLayerStates and apply state on the layer */
  applyState(e) {
    this._active && Object.entries(e).forEach(([i, s]) => {
      this._applyStateToLayer(i, s);
    });
  }
  _applyStateToLayer(e, i) {
    const s = this._app.maps.layerCollection.getByKey(e);
    s && "splitDirection" in s && s.splitDirection !== void 0 && (s.splitDirection = i.splitDirection, s.active !== i.active && (s.active ? s.deactivate() : s.activate()));
  }
  /** Handles items added to the content tree */
  handleItemAdded(e) {
    const i = e.toJSON(), s = [];
    i.layerName ? s.push(i.layerName) : i.layerNames && s.push(
      ...i.layerNames
    ), s.forEach((n) => {
      const r = this._app.layers.getByKey(n);
      if (r) {
        const { active: o, splitDirection: l } = r;
        this._initialState[n] = { active: o, splitDirection: l }, this._cachedState[n] && this._active && this._applyStateToLayer(n, this._cachedState[n]);
      }
    });
  }
  toJSON() {
    const e = {}, i = N.getDefaultOptions();
    return this.showSwipeTree !== i.showSwipeTree && (e.showSwipeTree = this.showSwipeTree), this._showSwipeElement !== i.showSwipeElement && (e.showSwipeElement = this._showSwipeElement), this._splitPosition !== i.splitPosition && (e.splitPosition = this._splitPosition), re(this.swipeElementTitles, i.swipeElementTitles) || (e.swipeElementTitles = this.swipeElementTitles), re(this.swipeLayerStates, i.swipeLayerStates) || (e.swipeLayerStates = this.swipeLayerStates), e;
  }
  destroy() {
    this.deactivate(), this.clear(), this.stateChanged.destroy(), this._listeners.forEach((e) => {
      e();
    }), this._destroyActions && this._destroyActions(), this._swipeElement.destroy();
  }
}
function Mt(t) {
  return {
    a: t.active,
    sp: t.splitPosition,
    ...t.swipeLayerStates && {
      swl: Object.entries(t.swipeLayerStates).reduce(
        (e, [i, { active: s, splitDirection: n }]) => (e[i] = { a: s, sd: n }, e),
        {}
      )
    }
  };
}
function Ft(t) {
  const e = {
    active: (t == null ? void 0 : t.active) ?? (t == null ? void 0 : t.a),
    splitPosition: (t == null ? void 0 : t.splitPosition) || (t == null ? void 0 : t.sp),
    swipeLayerStates: t == null ? void 0 : t.swipeLayerStates
  };
  return t != null && t.swl && (e.swipeLayerStates = Object.entries(
    t.swl
  ).reduce((i, [s, { a: n, sd: r }]) => (i[s] = { active: n, splitDirection: r }, i), {})), e;
}
function he(t) {
  return t.left && t.right ? { active: !0 } : t.left ? { active: !0, splitDirection: "left" } : t.right ? { active: !0, splitDirection: "right" } : { active: !1 };
}
function fe(t) {
  return t ? Object.keys(t) : [];
}
function de(t, e) {
  var i, s;
  return ((s = (i = t.layers.getByKey(e)) == null ? void 0 : i.properties) == null ? void 0 : s.title) || e;
}
function ue(t, e, i, s) {
  const n = {
    left: i[t].active && i[t].splitDirection === "left",
    right: i[t].active && i[t].splitDirection === "right"
  };
  return {
    name: t,
    title: e,
    actions: [
      L({
        name: "split-left",
        title: "swipeTool.editor.swipeLayer.splitLeft",
        icon: "mdi-arrow-expand-left",
        active: n.left,
        callback() {
          n.left = !n.left, this.active = n.left, i[t] = he(n);
        }
      }),
      L({
        name: "split-right",
        title: "swipeTool.editor.swipeLayer.splitRight",
        icon: "mdi-arrow-expand-right",
        active: n.right,
        callback() {
          n.right = !n.right, this.active = n.right, i[t] = he(n);
        }
      }),
      {
        name: "swipeTool.editor.swipeLayer.remove",
        callback() {
          const r = s.value.findIndex((o) => o.name === t);
          s.value.splice(r, 1), delete i[t];
        }
      }
    ]
  };
}
const kt = we({
  name: "SwipeToolConfigEditor",
  components: {
    VContainer: tt,
    VRow: et,
    VCol: Xe,
    AbstractConfigEditor: Ue,
    VcsFormSection: me,
    VcsLabel: Be,
    VcsSelect: xe,
    VcsTextField: Ge,
    VcsCheckbox: Pe,
    VcsList: ke,
    VcsFormButton: Fe
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
  setup(t) {
    const e = _e("vcsApp"), i = N.getDefaultOptions(), s = t.getConfig(), n = I(
      Object.assign(i, s)
    ), r = I(
      n.value.swipeElementTitles || { left: "", right: "" }
    ), o = I(
      !!Object.values(r.value).some((d) => !!d)
    ), l = I([]), p = I([]), f = I(""), V = Y(
      () => [...e.layers].filter(
        (d) => d[Ze] !== Ye && !("vectorClusterGroup" in d) && "splitDirection" in d && d.splitDirection !== void 0 && !l.value.includes(d.name)
      ).map((d) => {
        var C;
        return {
          name: d.name,
          title: ((C = d.properties) == null ? void 0 : C.title) || d.name
        };
      })
    );
    return l.value = fe(s.swipeLayerStates), p.value = l.value.map(
      (d) => ue(
        d,
        de(e, d),
        n.value.swipeLayerStates,
        p
      )
    ), {
      localConfig: n,
      enableSwipeElementTitle: o,
      swipeElementTitles: r,
      splitLayers: V,
      swipeLayerName: f,
      swipeLayerItems: p,
      addSwipeLayer() {
        var d;
        n.value.swipeLayerStates || (n.value.swipeLayerStates = {}), n.value.swipeLayerStates[f.value] = {
          active: !!((d = e.layers.getByKey(f.value)) != null && d.active)
        }, l.value = fe(
          n.value.swipeLayerStates
        ), p.value = l.value.map(
          (C) => ue(
            C,
            de(e, C),
            n.value.swipeLayerStates,
            p
          )
        ), f.value = "";
      },
      apply() {
        o.value ? n.value.swipeElementTitles = r.value : delete n.value.swipeElementTitles, l.value.length < 1 && (n.value.swipeLayerStates = void 0), t.setConfig(n.value);
      }
    };
  }
});
function Pt(t, e, i, s, n, r) {
  const o = y("VcsLabel"), l = y("v-col"), p = y("VcsCheckbox"), f = y("v-row"), V = y("VcsTextField"), d = y("v-container"), C = y("VcsFormSection"), Se = y("VcsSelect"), Te = y("VcsFormButton"), be = y("VcsList"), Le = y("AbstractConfigEditor");
  return A(), B(Le, { onSubmit: t.apply }, {
    default: h(() => [
      t.localConfig ? (A(), B(C, {
        key: 0,
        heading: "swipeTool.editor.general",
        expandable: "",
        "start-open": !0
      }, {
        default: h(() => [
          c(d, { class: "py-0 px-1" }, {
            default: h(() => [
              c(f, { "no-gutters": "" }, {
                default: h(() => [
                  c(l, null, {
                    default: h(() => [
                      c(o, { "html-for": "showSwipeTree" }, {
                        default: h(() => [
                          D(
                            T(t.$t("swipeTool.editor.showSwipeTree")),
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
                  c(l, null, {
                    default: h(() => [
                      c(p, {
                        id: "showSwipeTree",
                        modelValue: t.localConfig.showSwipeTree,
                        "onUpdate:modelValue": e[0] || (e[0] = (g) => t.localConfig.showSwipeTree = g),
                        "true-value": !0,
                        "false-value": !1
                      }, null, 8, ["modelValue"])
                    ]),
                    _: 1
                    /* STABLE */
                  })
                ]),
                _: 1
                /* STABLE */
              }),
              c(f, { "no-gutters": "" }, {
                default: h(() => [
                  c(l, null, {
                    default: h(() => [
                      c(o, { "html-for": "showSwipeElement" }, {
                        default: h(() => [
                          D(
                            T(t.$t("swipeTool.editor.showSwipeElement")),
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
                  c(l, null, {
                    default: h(() => [
                      c(p, {
                        id: "showSwipeElement",
                        modelValue: t.localConfig.showSwipeElement,
                        "onUpdate:modelValue": e[1] || (e[1] = (g) => t.localConfig.showSwipeElement = g),
                        "true-value": !0,
                        "false-value": !1
                      }, null, 8, ["modelValue"])
                    ]),
                    _: 1
                    /* STABLE */
                  })
                ]),
                _: 1
                /* STABLE */
              }),
              c(f, { "no-gutters": "" }, {
                default: h(() => [
                  c(l, null, {
                    default: h(() => [
                      c(o, { "html-for": "splitPosition" }, {
                        default: h(() => [
                          D(
                            T(t.$t("swipeTool.editor.splitPosition")),
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
                  c(l, null, {
                    default: h(() => [
                      c(V, {
                        id: "splitPosition",
                        modelValue: t.localConfig.splitPosition,
                        "onUpdate:modelValue": e[2] || (e[2] = (g) => t.localConfig.splitPosition = g),
                        modelModifiers: { number: !0 },
                        type: "number",
                        step: "0.1",
                        min: "0.0",
                        max: "1.0",
                        rules: [
                          (g) => g >= 0 && g <= 1 || "swipeTool.editor.splitPositionInvalid"
                        ]
                      }, null, 8, ["modelValue", "rules"])
                    ]),
                    _: 1
                    /* STABLE */
                  })
                ]),
                _: 1
                /* STABLE */
              }),
              c(f, { "no-gutters": "" }, {
                default: h(() => [
                  c(l, null, {
                    default: h(() => [
                      c(o, { "html-for": "swipeElementTitles" }, {
                        default: h(() => [
                          D(
                            T(t.$st("swipeTool.editor.swipeElementTitles")),
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
                  c(l, null, {
                    default: h(() => [
                      c(p, {
                        id: "swipeElementTitles",
                        modelValue: t.enableSwipeElementTitle,
                        "onUpdate:modelValue": e[3] || (e[3] = (g) => t.enableSwipeElementTitle = g)
                      }, null, 8, ["modelValue"])
                    ]),
                    _: 1
                    /* STABLE */
                  })
                ]),
                _: 1
                /* STABLE */
              }),
              t.enableSwipeElementTitle ? (A(), B(f, {
                key: 0,
                "no-gutters": ""
              }, {
                default: h(() => [
                  c(l, null, {
                    default: h(() => [
                      c(V, {
                        modelValue: t.swipeElementTitles.left,
                        "onUpdate:modelValue": e[4] || (e[4] = (g) => t.swipeElementTitles.left = g),
                        modelModifiers: { trim: !0 },
                        clearable: "",
                        prefix: t.$t("swipeTool.swipeElementTitles.left")
                      }, null, 8, ["modelValue", "prefix"])
                    ]),
                    _: 1
                    /* STABLE */
                  }),
                  c(l, null, {
                    default: h(() => [
                      c(V, {
                        modelValue: t.swipeElementTitles.right,
                        "onUpdate:modelValue": e[5] || (e[5] = (g) => t.swipeElementTitles.right = g),
                        modelModifiers: { trim: !0 },
                        clearable: "",
                        prefix: t.$t("swipeTool.swipeElementTitles.right")
                      }, null, 8, ["modelValue", "prefix"])
                    ]),
                    _: 1
                    /* STABLE */
                  })
                ]),
                _: 1
                /* STABLE */
              })) : ne("v-if", !0)
            ]),
            _: 1
            /* STABLE */
          })
        ]),
        _: 1
        /* STABLE */
      })) : ne("v-if", !0),
      c(C, {
        heading: "swipeTool.editor.swipeLayer.title",
        expandable: "",
        "start-open": !0
      }, {
        default: h(() => [
          c(d, { class: "py-1 px-2" }, {
            default: h(() => [
              c(f, { "no-gutters": "" }, {
                default: h(() => [
                  c(l, null, {
                    default: h(() => [
                      c(Se, {
                        id: "name",
                        modelValue: t.swipeLayerName,
                        "onUpdate:modelValue": e[6] || (e[6] = (g) => t.swipeLayerName = g),
                        placeholder: t.$t("swipeTool.editor.swipeLayer.name"),
                        items: t.splitLayers,
                        "item-text": (g) => g.title,
                        "item-value": (g) => g.name
                      }, null, 8, ["modelValue", "placeholder", "items", "item-text", "item-value"])
                    ]),
                    _: 1
                    /* STABLE */
                  }),
                  c(l, null, {
                    default: h(() => [
                      c(Te, {
                        disabled: !t.swipeLayerName,
                        onClick: t.addSwipeLayer
                      }, {
                        default: h(() => [
                          D(
                            T(t.$t("swipeTool.editor.swipeLayer.add")),
                            1
                            /* TEXT */
                          )
                        ]),
                        _: 1
                        /* STABLE */
                      }, 8, ["disabled", "onClick"])
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
          c(be, {
            items: t.swipeLayerItems,
            "show-title": !1
          }, null, 8, ["items"])
        ]),
        _: 1
        /* STABLE */
      })
    ]),
    _: 1
    /* STABLE */
  }, 8, ["onSubmit"]);
}
const Gt = /* @__PURE__ */ ye(kt, [["render", Pt]]);
function zt(t) {
  let e, i, s;
  return {
    get name() {
      return _;
    },
    get version() {
      return dt;
    },
    get mapVersion() {
      return ut;
    },
    get swipeTool() {
      if (!e) {
        if (!i)
          throw new Error("VcsUiApp not yet initialized");
        e = new N(i, t);
      }
      return e;
    },
    get active() {
      return (e == null ? void 0 : e.active) ?? !1;
    },
    activate() {
      e == null || e.activate();
    },
    deactivate() {
      e == null || e.deactivate();
    },
    initialize(n, r) {
      i = n, e || (e = new N(i, t));
      const o = Ft(r);
      if (o != null && o.splitPosition && (e.splitPosition = o.splitPosition), o != null && o.swipeLayerStates && e.setState(o.swipeLayerStates), o != null && o.active) {
        const l = e.activate.bind(e);
        s = i.maps.mapActivated.addEventListener(() => {
          l(), s == null || s(), s = void 0;
        });
      }
      return Promise.resolve();
    },
    getDefaultOptions() {
      return N.getDefaultOptions();
    },
    toJSON() {
      return e ? e.toJSON() : {};
    },
    getState(n) {
      const r = {
        active: e == null ? void 0 : e.active,
        splitPosition: e == null ? void 0 : e.splitPosition,
        swipeLayerStates: e == null ? void 0 : e.getState()
      };
      return n ? e != null && e.active ? Mt(r) : {} : r;
    },
    getConfigEditors() {
      return [
        {
          component: Gt,
          title: "swipeTool.editor.title",
          infoUrlCallback: i == null ? void 0 : i.getHelpUrlCallback(
            "/components/plugins/swipeToolConfig.html",
            "app-configurator"
          )
        }
      ];
    },
    i18n: {
      en: {
        swipeTool: {
          title: "Swipe content",
          hideController: "Hide control",
          showController: "Show control",
          treeTitle: "L {'|'} R",
          emptyTree: "Enable Swipe Tool to show available layers to be split.",
          stateActionTitles: {
            inactiveLeft: "Show layer on the left side",
            inactiveRight: "Show layer on the right side",
            activeLeft: "Hide layer on the left side",
            activeRight: "Hide layer on the right side",
            indeterminateLeft: "Show all layers on the left side",
            indeterminateRight: "Show all layers on the right side"
          },
          swipeElementTitles: {
            left: "Left",
            right: "Right"
          },
          editor: {
            title: "Swipe Tool Editor",
            general: "General settings",
            showSwipeTree: "Enable swipe tool ui",
            showSwipeElement: "Show swipe element",
            splitPosition: "Initial split position",
            splitPositionInvalid: "Invalid entry: value must be between 0 and 1",
            swipeElementTitles: "Swipe element titles",
            swipeLayer: {
              title: "Define initial state for layers",
              name: "Select layer",
              add: "Add initial state",
              remove: "Remove initial state",
              splitLeft: "Toggle split left",
              splitRight: "Toggle split right"
            }
          }
        }
      },
      de: {
        swipeTool: {
          title: "Inhalte vergleichen",
          hideController: "Regler ausblenden",
          showController: "Regler anzeigen",
          treeTitle: "L {'|'} R",
          emptyTree: "Aktivieren Sie das Splittenwerkzeug, um die verfügbaren Ebenen anzuzeigen.",
          stateActionTitles: {
            inactiveLeft: "Ebene links anzeigen",
            inactiveRight: "Ebene rechts anzeigen",
            activeLeft: "Ebene links verstecken",
            activeRight: "Ebene rechts verstecken",
            indeterminateLeft: "Alle Ebenen links anzeigen",
            indeterminateRight: "Alle Ebenen rechts anzeigen"
          },
          swipeElementTitles: {
            left: "Links",
            right: "Rechts"
          },
          editor: {
            title: "Splittenwerkzeug Editor",
            general: "Allgemeine Einstellungen",
            showSwipeTree: "Zeige Benutzeroberfläche",
            showSwipeElement: "Zeige Swipe Element",
            splitPosition: "Anfangssplitposition",
            splitPositionInvalid: "Ungültige Eingabe: Der Wert muss zwischen 0 und 1 liegen",
            swipeElementTitles: "Swipe Element Titel",
            swipeLayer: {
              title: "Definition von Anfangszuständen für Ebenen",
              name: "Ebene auswählen",
              add: "Anfangszustand hinzufügen",
              remove: "Anfangszustand entfernen",
              splitLeft: "Splitten links umschalten",
              splitRight: "Splitten rechts umschalten"
            }
          }
        }
      }
    },
    destroy() {
      e && (e.destroy(), e = void 0), s && (s(), s = void 0);
    }
  };
}
export {
  zt as default
};
