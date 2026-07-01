import { LayerState as E, MapState as c } from "../../../assets/core.js";
import { executeCallbacks as d } from "../../../assets/ui.js";
const v = "@vcmap/event-control", p = "1.0.1", C = "^6.1";
function y(r, i, a) {
  return i.stateChanged.addEventListener((l) => {
    a.forEach((m) => {
      var h, f;
      (h = m.onActivate) != null && h.length && l === c.ACTIVE && d(r, m.onActivate), (f = m.onDeactivate) != null && f.length && l === c.INACTIVE && d(r, m.onDeactivate);
    });
  });
}
function D(r) {
  const i = [];
  return {
    get name() {
      return v;
    },
    get version() {
      return p;
    },
    get mapVersion() {
      return C;
    },
    onVcsAppMounted(a) {
      var l, m, h, f;
      if ((l = r.actions) != null && l.some((t) => t.type === "layer") && i.push(
        a.layers.stateChanged.addEventListener((t) => {
          var o;
          (o = r.actions) == null || o.filter(
            (e) => e.type === "layer" && e.targetName === t.name
          ).forEach((e) => {
            var n, s;
            t.state === E.ACTIVE && ((n = e.onActivate) != null && n.length) ? d(a, e.onActivate) : t.state === E.INACTIVE && ((s = e.onDeactivate) != null && s.length) && d(a, e.onDeactivate);
          });
        })
      ), (m = r.actions) != null && m.some((t) => t.type === "map")) {
        const t = r.actions.filter(
          (e) => e.type === "map"
          /* Map */
        );
        [...new Set(t.map((e) => e.targetName))].forEach((e) => {
          const n = a.maps.getByKey(e), s = t.filter(
            (u) => u.targetName === e
          );
          if (n)
            i.push(y(a, n, s));
          else {
            const u = a.maps.added.addEventListener(
              (g) => {
                g.name === e && (u == null || u(), i.push(y(a, g, s)));
              }
            );
          }
        });
      }
      if ((h = r.actions) != null && h.some(
        (t) => t.type === "module" || t.type === "planning"
      ) && i.push(
        a.moduleAdded.addEventListener((t) => {
          var o;
          (o = r.actions) == null || o.filter(
            (e) => {
              var n;
              return (e.type === "module" || e.type === "planning") && e.targetName === t._id && ((n = e.onActivate) == null ? void 0 : n.length);
            }
          ).forEach((e) => {
            d(a, e.onActivate);
          });
        }),
        a.moduleRemoved.addEventListener((t) => {
          var o;
          (o = r.actions) == null || o.filter(
            (e) => {
              var n;
              return (e.type === "module" || e.type === "planning") && e.targetName === t._id && ((n = e.onDeactivate) == null ? void 0 : n.length);
            }
          ).forEach((e) => {
            d(a, e.onDeactivate);
          });
        })
      ), (f = r.actions) != null && f.some((t) => t.type === "window")) {
        const t = r.actions.filter(
          (e) => {
            var n;
            return e.type === "window" && ((n = e.onActivate) == null ? void 0 : n.length);
          }
        );
        t != null && t.length && i.push(
          a.windowManager.added.addEventListener((e) => {
            var n;
            (n = t.filter((s) => s.targetName === e.id)) == null || n.forEach((s) => {
              d(a, s.onActivate);
            });
          })
        );
        const o = r.actions.filter(
          (e) => {
            var n;
            return e.type === "window" && ((n = e.onDeactivate) == null ? void 0 : n.length);
          }
        );
        o != null && o.length && i.push(
          a.windowManager.removed.addEventListener((e) => {
            var n;
            (n = o.filter((s) => s.targetName === e.id)) == null || n.forEach((s) => {
              d(a, s.onDeactivate);
            });
          })
        );
      }
    },
    getDefaultOptions() {
      return {};
    },
    toJSON() {
      return r;
    },
    getConfigEditors() {
      return [];
    },
    destroy() {
      i.forEach((a) => {
        a == null || a();
      });
    }
  };
}
export {
  D as default
};
