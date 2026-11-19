import { wgs84ToMercatorTransformer as m } from "../../../assets/core.js";
import { MarkdownBalloonFeatureInfoView as h, featureInfoViewSymbol as w, Icons as f } from "../../../assets/ui.js";
import { ol$extent$getSize as p, Feature as y, ol$geom$Point as d } from "../../../assets/ol.js";
const a = "@vcmap-show-case/search-example", g = "1.0.0", b = "^6.0", i = [13.301518, 52.445959, 13.489982, 52.527032], u = p(i), I = new h({
  template: `# Search
{{properties.title}}`
});
function P(t) {
  const e = new y({
    geometry: new d(
      m([
        i[0] + Math.random() * u[0],
        i[1] + Math.random() * u[1]
      ])
    ),
    properties: {
      title: t
    }
  });
  return e[w] = I, e;
}
function L() {
  const t = Object.keys(f), e = Math.floor(t.length * Math.random());
  return `$${t[e]}`;
}
function k(t, e, r, o) {
  let n;
  e && (n = L());
  let s;
  o && (s = [
    {
      name: "action-1",
      icon: n,
      callback() {
        console.log("Action 1");
      }
    },
    {
      name: "action-2",
      callback() {
        console.log("Action 2");
      }
    }
  ]);
  let c, l;
  return r ? l = P(t) : c = async () => {
    console.log(t);
  }, {
    title: t,
    icon: n,
    clicked: c,
    feature: l,
    actions: s
  };
}
class C {
  /**
   * @param {string[]} lines
   * @param {boolean} withIcon
   * @param {boolean} withPOI
   * @param {boolean} withActions
   */
  constructor(e, r, o, n) {
    this.name = a, this.lines = e, this.withIcon = r, this.withPOI = o, this.withActions = n;
  }
  search(e) {
    return Promise.resolve(
      this.lines.filter((r) => r.toLowerCase().includes(e.toLowerCase())).map(
        (r) => k(r, this.withIcon, this.withPOI, this.withActions)
      )
    );
  }
  suggest(e) {
    const r = e.toLowerCase();
    return Promise.resolve(
      this.lines.filter((o) => {
        const n = o.toLowerCase();
        return n !== r && n.startsWith(r);
      })
    );
  }
  // eslint-disable-next-line class-methods-use-this
  abort() {
  }
  // eslint-disable-next-line class-methods-use-this
  destroy() {
  }
}
const M = [
  "Dragonfruit",
  "Cherry",
  "Peach",
  "Banana",
  "Grape",
  "Fig",
  "Kiwi",
  "Watermelon",
  "Mango",
  "Strawberry",
  "Apple",
  "Raspberry",
  "Honeydew",
  "Lemon",
  "Cantaloupe",
  "Orange",
  "Papaya",
  "Date",
  "Blackberry",
  "Grapefruit",
  "Nectarine",
  "Apricot",
  "Blueberry",
  "Clementine",
  "Elderberry",
  "Gooseberry",
  "Pineapple",
  "Plum",
  "Lime",
  "Pomegranate",
  "Quince",
  "Tangerine",
  "Mulberry",
  "Lychee",
  "Passionfruit",
  "Kumquat",
  "Cranberry",
  "Jackfruit",
  "Olive",
  "Ugli fruit"
];
function x(t) {
  let e;
  return {
    get name() {
      return a;
    },
    get version() {
      return g;
    },
    get mapVersion() {
      return b;
    },
    /**
     * @param {import("@vcmap/ui").VcsUiApp} app
     */
    initialize(r) {
      e = new C(
        t.lines ?? M,
        t.withIcon ?? !0,
        t.withPOI ?? !0,
        t.withActions ?? !0
      ), r.search.add(e, a);
    },
    destroy() {
      e == null || e.destroy();
    }
  };
}
export {
  x as default
};
