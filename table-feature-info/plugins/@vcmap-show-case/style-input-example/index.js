import { VcsVectorStyleComponent as _, VcsTextSelector as v, VcsImageSelector as w, VcsStrokeSelector as O, VcsFillSelector as k, VcsFormSection as h, VectorStyleMenus as b, createToggleAction as F, WindowSlot as T, ButtonLocation as C } from "../../../assets/ui.js";
import { VSheet as E } from "../../../assets/vuetify.js";
import { resolveComponent as s, createBlock as I, openBlock as U, withCtx as r, createVNode as l, reactive as M, toRaw as A } from "../../../assets/vue.js";
import { getStyleOptions as u } from "../../../assets/core.js";
import { ol$style$Style as B, ol$style$Text as L, ol$style$RegularShape as N, ol$style$Fill as d, ol$style$Stroke as p } from "../../../assets/ol.js";
const H = "@vcmap-show-case/style-input-example", R = "1.0.0", Y = "^6.0", c = {
  name: H,
  version: R,
  mapVersion: Y
}, z = (o, t) => {
  const n = o.__vccOpts || o;
  for (const [e, m] of t)
    n[e] = m;
  return n;
}, D = {
  name: "StyleExample",
  components: {
    VSheet: E,
    VcsFormSection: h,
    VcsFillSelector: k,
    VcsStrokeSelector: O,
    VcsImageSelector: w,
    VcsTextSelector: v,
    VcsVectorStyleComponent: _
  },
  setup() {
    const o = new B({
      fill: new d({ color: "rgba(255,255,255,0.4)" }),
      stroke: void 0,
      image: new N({
        points: void 0,
        radius: 11,
        angle: void 0,
        radius2: void 0,
        fill: new d({ color: "rgba(255,255,255,1)" }),
        stroke: new p({ color: "rgba(0,0,0,1)", width: 1 })
      }),
      text: new L({
        font: "10px Arial, Helvetica, sans-serif",
        fill: new d({ color: "rgba(0,0,0,1)" }),
        stroke: new p({ color: "rgba(255,255,255,1)", width: 1 })
      })
    }), t = {
      fill: void 0,
      stroke: {
        color: [0, 0, 0, 1],
        width: 2
      },
      image: {
        fill: void 0,
        stroke: {
          color: [0, 0, 0, 1],
          width: 2
        },
        radius: 10,
        scale: 1,
        opacity: 1
      },
      text: {
        font: "10px Arial, Helvetica, sans-serif",
        offsetX: 0,
        offsetY: 0,
        text: ""
      }
    }, n = M({
      style: u(o)
    });
    return {
      styleOptions: n,
      defaultStyleOptions: t,
      VectorStyleMenus: b,
      resetExample: {
        name: "resetExample",
        icon: "mdi-sync",
        callback() {
          n.style = u(o);
        }
      },
      logStyle: {
        name: "logStyle",
        icon: "mdi-console",
        callback() {
          console.log(A(n.style));
        }
      }
    };
  }
};
function J(o, t, n, e, m, W) {
  const y = s("VcsVectorStyleComponent"), i = s("VcsFormSection"), f = s("VcsFillSelector"), S = s("VcsStrokeSelector"), V = s("VcsImageSelector"), g = s("VcsTextSelector"), x = s("v-sheet");
  return U(), I(x, null, {
    default: r(() => [
      l(i, {
        heading: "Style menus",
        "header-actions": [e.resetExample, e.logStyle]
      }, {
        default: r(() => [
          l(y, {
            modelValue: e.styleOptions.style,
            "onUpdate:modelValue": t[0] || (t[0] = (a) => e.styleOptions.style = a),
            "value-default": e.defaultStyleOptions
          }, null, 8, ["modelValue", "value-default"])
        ]),
        _: 1
      }, 8, ["header-actions"]),
      l(i, {
        expandable: !0,
        heading: "Fill Selector"
      }, {
        default: r(() => [
          l(f, {
            modelValue: e.styleOptions.style.fill,
            "onUpdate:modelValue": t[1] || (t[1] = (a) => e.styleOptions.style.fill = a)
          }, null, 8, ["modelValue"])
        ]),
        _: 1
      }),
      l(i, {
        expandable: !0,
        heading: "Stroke Selector"
      }, {
        default: r(() => [
          l(S, {
            modelValue: e.styleOptions.style.stroke,
            "onUpdate:modelValue": t[2] || (t[2] = (a) => e.styleOptions.style.stroke = a)
          }, null, 8, ["modelValue"])
        ]),
        _: 1
      }),
      l(i, {
        expandable: !0,
        heading: "Image Selector"
      }, {
        default: r(() => [
          l(V, {
            modelValue: e.styleOptions.style.image,
            "onUpdate:modelValue": t[3] || (t[3] = (a) => e.styleOptions.style.image = a),
            "value-default": e.defaultStyleOptions.image,
            "extended-shape-settings": !0
          }, null, 8, ["modelValue", "value-default"])
        ]),
        _: 1
      }),
      l(i, {
        expandable: !0,
        heading: "Text Selector"
      }, {
        default: r(() => [
          l(g, {
            modelValue: e.styleOptions.style.text,
            "onUpdate:modelValue": t[4] || (t[4] = (a) => e.styleOptions.style.text = a),
            "value-default": e.defaultStyleOptions.text
          }, null, 8, ["modelValue", "value-default"])
        ]),
        _: 1
      })
    ]),
    _: 1
  });
}
const P = /* @__PURE__ */ z(D, [["render", J]]);
function K() {
  return {
    get name() {
      return c.name;
    },
    get version() {
      return c.version;
    },
    get mapVersion() {
      return c.mapVersion;
    },
    initialize(o) {
      const { action: t, destroy: n } = F(
        {
          name: "Style Example",
          icon: "$vcsColorSwatch"
        },
        {
          id: "style-input-example",
          state: {
            headerTitle: "Style example",
            headerIcon: "$vcsColorSwatch"
          },
          component: P,
          slot: T.DYNAMIC_LEFT
        },
        o.windowManager,
        c.name
      );
      o.navbarManager.add(
        { id: "style", action: t },
        c.name,
        C.TOOL
      ), this.destroy = n;
    }
  };
}
export {
  K as default
};
