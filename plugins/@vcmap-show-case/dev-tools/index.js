import { AbstractInteraction as o, EventType as t, CesiumMap as r, OpenlayersMap as i, ObliqueMap as n } from "../../../assets/core.js";
const a = "@vcmap-show-case/dev-tools", c = "1.0.0", l = "^6.0";
class v extends o {
  constructor() {
    super(), this.setActive(!1);
  }
  pipe(s) {
    return console.log(s), this.lastEvent = s, Promise.resolve(s);
  }
  off() {
    this.setActive(!1);
  }
  click() {
    this.setActive(t.CLICK);
  }
  clickMove() {
    this.setActive(t.CLICKMOVE);
  }
  drag() {
    this.setActive(t.DRAGEVENTS);
  }
  all() {
    this.setActive(t.ALL);
  }
}
function d(e, s) {
  e.getApp = () => s, e.getCesiumMap = () => s.maps.getByType(r.className)[0], e.getOpenlayersMap = () => s.maps.getByType(i.className)[0], e.getObliqueMap = () => s.maps.getByType(n.className)[0], e.eventLogger = new v(), s.maps.eventHandler.addPersistentInteraction(e.eventLogger);
}
function h() {
  return {
    name: a,
    version: c,
    mapVersion: l,
    initialize(e) {
      window.vcs.devTools && console.error(
        "dev tool already loaded! something must have gone wrong somewhere"
      ), window.vcs.devTools = this, d(this, e);
    },
    destroy() {
      window.vcs.devTools === this && (window.vcs.devTools = void 0);
    }
  };
}
export {
  h as default
};
