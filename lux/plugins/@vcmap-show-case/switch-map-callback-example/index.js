import { VcsCallback as c } from "../../../assets/ui.js";
const i = "@vcmap-show-case/switch-map-callback-example", p = "1.0.0", l = "^6.0";
class s extends c {
  /**
   * @type {string}
   */
  static get className() {
    return "SwitchMapCallback";
  }
  /**
   * @param {SwitchMapCallbackOptions} options
   * @param {VcsUiApp} app
   */
  constructor(a, t) {
    super(a, t), this._mapName = a.mapName;
  }
  callback() {
    this._app.maps.setActiveMap(this._mapName);
  }
  /**
   * @returns {SwitchMapCallbackOptions}
   */
  toJSON() {
    const a = super.toJSON();
    return a.mapName = this._mapName, a;
  }
}
function m() {
  return {
    get name() {
      return i;
    },
    get version() {
      return p;
    },
    get mapVersion() {
      return l;
    },
    /**
     * @param {import("@vcmap/ui").VcsUiApp} vcsUiApp
     */
    initialize(e) {
      this._app = e, this._app.callbackClassRegistry.registerClass(
        this._app.dynamicModuleId,
        s.className,
        s
      );
    },
    destroy() {
      this._app.callbackClassRegistry.unregisterClass(
        this._app.dynamicModuleId,
        s.className
      );
    }
  };
}
export {
  m as default
};
