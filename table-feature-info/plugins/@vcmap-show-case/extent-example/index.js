import { createToggleAction as r, WindowSlot as i, VcsExtentEditor as s, ButtonLocation as c } from "../../../assets/ui.js";
import { Extent as m } from "../../../assets/core.js";
import { reactive as d } from "../../../assets/vue.js";
const p = "@vcmap-show-case/extent-example", l = "1.0.0", x = "^6.0", e = {
  name: p,
  version: l,
  mapVersion: x
};
async function v() {
  const n = d(new m().toJSON());
  return {
    get name() {
      return e.name;
    },
    get version() {
      return e.version;
    },
    get mapVersion() {
      return e.mapVersion;
    },
    onVcsAppMounted(t) {
      const { action: o, destroy: a } = r(
        {
          name: "Extent Example",
          title: "Extent Example Plugin",
          icon: "$vcsBoundingBox"
        },
        {
          id: "extent-example",
          component: s,
          slot: i.DYNAMIC_LEFT,
          state: {
            headerTitle: "Extent Example",
            headerIcon: "$vcsBoundingBox"
          },
          props: {
            modelValue: n
          }
        },
        t.windowManager,
        e.name
      );
      t.navbarManager.add({ action: o }, e.name, c.TOOL), this._destroyAction = a;
    },
    destroy() {
      this._destroyAction && (this._destroyAction(), this._destroyAction = null);
    }
  };
}
export {
  v as default
};
