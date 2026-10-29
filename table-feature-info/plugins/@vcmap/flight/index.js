import { VcsFlightComponent as S, VcsWorkspaceWrapper as x, makeEditorCollectionComponentClass as D, categoryManagerWindowId as y, createSupportedMapMappingFunction as $, createListImportAction as P, importFlights as K, createZoomToFlightAction as B, createExportFlightAction as I, createFlightMovieActions as U, setupFlightListItemPlayer as O, WindowSlot as z, ToolboxType as H } from "../../../assets/ui.js";
import { Category as j, FlightInstance as F, moduleIdSymbol as R, CesiumMap as w, defaultDynamicModuleId as q } from "../../../assets/core.js";
import { defineComponent as G, inject as J, ref as p, shallowRef as Y, provide as Z, watch as Q, onUnmounted as X, nextTick as ee, resolveComponent as M, createBlock as T, openBlock as k, withCtx as te, createCommentVNode as oe, reactive as ne } from "../../../assets/vue.js";
const s = "@vcmap/flight", ie = "3.0.0", ae = "^6.2";
class v extends j {
  static get className() {
    return "FlightCategory";
  }
  setApp(o) {
    super.setApp(o), this.setCollection(o.flights);
  }
}
function b(e, o) {
  o.value = e.value.isValid();
  const t = [
    e.value.propertyChanged.addEventListener(() => {
      o.value = e.value.isValid();
    }),
    e.value.anchorsChanged.addEventListener(() => {
      o.value = e.value.isValid();
    })
  ];
  return () => {
    t.forEach((n) => {
      n();
    });
  };
}
const re = G({
  name: "FlightWindow",
  components: {
    VcsWorkspaceWrapper: x,
    VcsFlightComponent: S
  },
  props: {
    flightInstanceName: {
      type: String,
      default: void 0
    },
    windowState: {
      type: Object,
      default: () => ({})
    }
  },
  setup(e) {
    var h;
    const { windowState: o } = e, t = J("vcsApp"), n = t.plugins.getByKey(s), l = p(!0), a = p(
      t.flights.hasKey(e.flightInstanceName)
    ), i = p(!1), r = Y();
    a.value ? (r.value = t.flights.getByKey(e.flightInstanceName), (h = r.value.properties) != null && h.title && (o.headerTitle = r.value.properties.title)) : r.value = new F({}), Z("flightInstance", r);
    let c = b(r, i);
    const u = Q(r, () => {
      c(), c = b(r, i);
    });
    return X(() => {
      c(), u();
    }), {
      currentIsPersisted: a,
      isValid: i,
      hasFlightInstance: l,
      parentId: o.id,
      addToMyWorkspace() {
        const g = `flight-${[...t.flights].filter(
          (d) => d[R] === t.dynamicModuleId
        ).length + 1}`;
        r.value.properties = {
          title: g
        }, t.flights.add(r.value), n == null || n.selectFlight(r.value), a.value = !0, o.headerTitle = g;
      },
      async newFlight() {
        n == null || n.clearSelection(), t.windowManager.componentIds.filter(
          (d) => d.includes("edit-anchor")
        ).forEach((d) => {
          t.windowManager.remove(d);
        }), l.value = !1, await ee(), r.value = new F({}), l.value = !0, a.value = !1, o.headerTitle = "flight.titleTemporary";
      }
    };
  }
}), le = (e, o) => {
  const t = e.__vccOpts || e;
  for (const [n, l] of o)
    t[n] = l;
  return t;
};
function se(e, o, t, n, l, a) {
  const i = M("VcsFlightComponent"), r = M("VcsWorkspaceWrapper");
  return k(), T(r, {
    "disable-add": e.currentIsPersisted || !e.isValid,
    onNewClicked: e.newFlight,
    onAddClicked: e.addToMyWorkspace
  }, {
    default: te(() => [
      e.hasFlightInstance ? (k(), T(i, {
        key: 0,
        "parent-id": e.parentId,
        "hide-name": "",
        "hide-title": ""
      }, null, 8, ["parent-id"])) : oe("v-if", !0)
    ]),
    _: 1
    /* STABLE */
  }, 8, ["disable-add", "onNewClicked", "onAddClicked"]);
}
const N = /* @__PURE__ */ le(re, [["render", se]]);
function A(e) {
  return `${e.id}-editor`;
}
function ce(e, o) {
  const t = {
    id: A(o),
    parentId: y,
    component: N,
    slot: z.DYNAMIC_CHILD,
    state: {
      headerTitle: "flight.titleTemporary",
      headerIcon: "$vcsViewpointFlight",
      infoUrlCallback: e.getHelpUrlCallback("/tools/flight.html")
    },
    props: {}
  }, n = ne({
    name: "flight-plugin-action",
    title: "flight.title",
    icon: "$vcsViewpointFlight",
    active: e.windowManager.has(t.id),
    disabled: !(e.maps.activeMap instanceof w),
    callback() {
      n.active ? e.windowManager.remove(t.id) : (t.props = {}, o.selection.value.length > 0 && (o.selection.value.length === 1 ? t.props.flightInstanceName = o.selection.value[0].name : o.selection.value.splice(0)), e.windowManager.add(t, s));
    }
  }), l = [
    e.windowManager.added.addEventListener(({ id: a }) => {
      a === t.id && (n.active = !0);
    }),
    e.windowManager.removed.addEventListener(({ id: a }) => {
      a === t.id && (n.active = !1);
    }),
    e.maps.mapActivated.addEventListener((a) => {
      a instanceof w ? n.disabled = !1 : (e.windowManager.has(t.id) && e.windowManager.remove(t.id), n.disabled = !0);
    })
  ];
  return e.toolboxManager.has(s) && e.toolboxManager.remove(s), e.toolboxManager.add(
    {
      id: s,
      type: H.SINGLE,
      action: n
    },
    s
  ), () => {
    l.forEach((a) => {
      a();
    });
  };
}
async function de(e) {
  const o = [];
  e.categoryClassRegistry.registerClass(
    e.dynamicModuleId,
    v.className,
    v
  );
  const { collectionComponent: t } = await e.categoryManager.requestCategory(
    {
      type: v.className,
      name: "flights",
      title: "flight.categoryTitle"
    },
    s,
    {
      selectable: !0,
      renamable: !0,
      removable: !0,
      overflowCount: 3
    }
  ), n = D(
    e,
    t,
    {
      editor: (i) => ({
        component: N,
        state: {
          headerTitle: "flight.titleTemporary",
          headerIcon: "$vcsViewpointFlight",
          infoUrlCallback: e.getHelpUrlCallback("/tools/flight.html")
        },
        props: {
          flightInstanceName: i.name
        }
      })
    },
    y
  );
  n.addItemMapping({
    mappingFunction: $(
      [w.className],
      e.maps
    ),
    owner: s
  });
  const { action: l, destroy: a } = P(
    (i) => K(e, i, q),
    e.windowManager,
    s,
    y
  );
  return o.push(a), t.addActions([l]), e.categoryManager.addMappingFunction(
    () => !0,
    (i, r, c) => {
      const { action: u, destroy: h } = B(e, i), { action: g, destroy: d } = I(i), { action: W, destroy: V } = I(i, !0), { actions: E, destroy: L } = U(e, i);
      c.actions.push(
        u,
        g,
        W,
        ...E
      );
      const _ = O(
        e,
        i,
        c.actions
      );
      c.destroyFunctions.push(
        h,
        d,
        V,
        L,
        _
      );
      const { titleChanged: f } = c;
      c.titleChanged = (C) => {
        f == null || f(C);
        const m = e.windowManager.get(
          A(t)
        );
        m && m.props.flightInstanceName === i.name && (m.state.headerTitle = C);
      };
    },
    s,
    [t.id]
  ), o.push(ce(e, t)), {
    collectionComponent: n,
    destroy() {
      o.forEach((i) => {
        i();
      });
    }
  };
}
function fe() {
  let e, o = () => {
  };
  return {
    get name() {
      return s;
    },
    get version() {
      return ie;
    },
    get mapVersion() {
      return ae;
    },
    async initialize(t) {
      const { collectionComponent: n, destroy: l } = await de(t);
      e = n, o = l;
    },
    selectFlight(t) {
      if (e) {
        const n = e.getListItemForItem(t);
        n && (e.selection.value = [n]);
      }
    },
    clearSelection() {
      e == null || e.selection.value.splice(0);
    },
    getDefaultOptions() {
      return {};
    },
    toJSON() {
      return {};
    },
    i18n: {
      de: {
        flight: {
          title: "Kameraflug erstellen",
          titleTemporary: "Temporären Kameraflug erstellen",
          categoryTitle: "Kameraflüge",
          new: "Neu"
        }
      },
      en: {
        flight: {
          title: "Create camera flight",
          titleTemporary: "Create temporary camera flight",
          categoryTitle: "Camera flights",
          new: "New"
        }
      }
    },
    destroy() {
      o();
    }
  };
}
export {
  fe as default
};
