import { VcsExtentEditor as d, createToggleAction as x, WindowSlot as u, ButtonLocation as E } from "../../../assets/ui.js";
import { VContainer as g } from "../../../assets/vuetify.js";
import { Extent as i, wgs84Projection as _, mercatorProjection as V } from "../../../assets/core.js";
import { resolveComponent as m, createBlock as f, openBlock as v, withCtx as w, createVNode as l } from "../../../assets/vue.js";
const h = "@vcmap-show-case/extent-example", y = "1.0.0", A = "^6.0", r = {
  name: h,
  version: y,
  mapVersion: A
}, B = (e, t) => {
  const o = e.__vccOpts || e;
  for (const [n, c] of t)
    o[n] = c;
  return o;
}, j = {
  name: "ExtentExample",
  components: { VcsExtentEditor: d, VContainer: g },
  setup() {
    const e = new i({ projection: _ }).toJSON(), t = new i({
      projection: V
    }).toJSON();
    return { wgs84Extent: e, mercatorExtent: t };
  }
};
function O(e, t, o, n, c, N) {
  const s = m("VcsExtentEditor"), p = m("v-container");
  return v(), f(p, { class: "pa-0" }, {
    default: w(() => [
      l(s, {
        heading: "Default WGS84 projection",
        modelValue: n.wgs84Extent,
        "onUpdate:modelValue": t[0] || (t[0] = (a) => n.wgs84Extent = a),
        "show-extent-on-startup": ""
      }, null, 8, ["modelValue"]),
      l(s, {
        heading: "Mercator projection example",
        modelValue: n.mercatorExtent,
        "onUpdate:modelValue": t[1] || (t[1] = (a) => n.mercatorExtent = a)
      }, null, 8, ["modelValue"])
    ]),
    _: 1
  });
}
const M = /* @__PURE__ */ B(j, [["render", O]]);
async function J() {
  return {
    get name() {
      return r.name;
    },
    get version() {
      return r.version;
    },
    get mapVersion() {
      return r.mapVersion;
    },
    onVcsAppMounted(e) {
      const { action: t, destroy: o } = x(
        {
          name: "Extent Example",
          title: "Extent Example Plugin",
          icon: "$vcsBoundingBox"
        },
        {
          id: "extent-example",
          component: M,
          slot: u.DYNAMIC_LEFT,
          state: {
            headerTitle: "Extent Example",
            headerIcon: "$vcsBoundingBox"
          }
        },
        e.windowManager,
        r.name
      );
      e.navbarManager.add({ action: t }, r.name, E.TOOL), this._destroyAction = o;
    },
    destroy() {
      this._destroyAction && (this._destroyAction(), this._destroyAction = null);
    }
  };
}
export {
  J as default
};
