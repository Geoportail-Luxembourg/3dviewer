import { AbstractFeatureInfoView as i } from "../../../assets/ui.js";
import { VSparkline as c } from "../../../assets/vuetify.js";
import { resolveComponent as f, createBlock as u, openBlock as p } from "../../../assets/vue.js";
function h(e, t) {
  return e == null ? !1 : typeof e == "boolean" ? e : e === 1 ? !0 : e === 0 ? !1 : typeof e == "string" && (e.toLowerCase() === "true" || e.toLowerCase() === "1") ? !0 : (typeof e == "string" && (e.toLowerCase() === "false" || e.toLowerCase() === "0"), !1);
}
const m = (e, t) => {
  const r = e.__vccOpts || e;
  for (const [l, a] of t)
    r[l] = a;
  return r;
}, d = {
  name: "SimpleGraphComponent",
  components: [c],
  props: {
    attributes: {
      type: Object,
      required: !0
    },
    labels: {
      type: Array,
      default: () => []
    },
    graph: {
      type: String,
      default: "trend"
    },
    color: {
      type: String,
      default: "primary"
    },
    gradient: {
      type: Array,
      default: () => []
    },
    fill: {
      type: Boolean,
      default: !1
    },
    smooth: {
      type: Number,
      default: 8
    }
  },
  computed: {
    values() {
      return Object.values(this.attributes);
    }
  }
};
function g(e, t, r, l, a, o) {
  const n = f("v-sparkline");
  return p(), u(n, {
    padding: "24",
    "stroke-linecap": "round",
    "show-labels": r.labels.length > 0,
    labels: r.labels,
    type: r.graph,
    color: r.color,
    gradient: r.gradient,
    fill: r.fill,
    smooth: r.smooth,
    value: o.values
  }, null, 8, ["show-labels", "labels", "type", "color", "gradient", "fill", "smooth", "value"]);
}
const y = /* @__PURE__ */ m(d, [["render", g]]);
class s extends i {
  /**
   * @type {string}
   */
  static get className() {
    return "SimpleGraphView";
  }
  /**
   * @param {SimpleGraphFeatureInfoViewOptions} options
   */
  constructor(t) {
    super(t, y), this.labels = t.labels || [], this.graph = t.graph || "trend", this.color = t.color || "primary", this.gradient = t.gradient || [], this.fill = h(t.fill), this.smooth = t.smooth ?? 8;
  }
  /**
   * @param {FeatureInfoEvent} featureInfo
   * @param {import("@vcmap/core").Layer} layer
   * @returns {FeatureInfoProps}
   */
  getProperties({ feature: t }, r) {
    return {
      featureId: t.getId(),
      layerName: r.name,
      attributes: this.getAttributes(t),
      labels: this.labels,
      graph: this.graph,
      color: this.color,
      gradient: this.gradient,
      fill: this.fill,
      smooth: this.smooth
    };
  }
}
async function C() {
  return {
    name: "@vcmap/simpleGraph",
    onVcsAppMounted(e) {
      e.featureInfoClassRegistry.registerClass(
        e.dynamicModuleId,
        s.className,
        s
      );
    }
  };
}
export {
  C as default
};
