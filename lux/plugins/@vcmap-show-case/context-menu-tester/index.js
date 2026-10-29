const t = "@vcmap-show-case/context-menu-tester", c = "1.0.0", r = "^6.0", e = {
  name: t,
  version: c,
  mapVersion: r
}, s = () => ({
  get name() {
    return e.name;
  },
  get version() {
    return e.version;
  },
  get mapVersion() {
    return e.mapVersion;
  },
  initialize(a) {
    a.contextMenuManager.addEventHandler(async (n) => {
      const o = [
        {
          id: "foo2",
          name: "Log Position",
          icon: "$vcsInfo",
          callback() {
            console.log(n.positionOrPixel);
          }
        }
      ];
      return n.feature && o.push({
        id: "foo",
        name: "Log Feature",
        icon: "$vcsInfo",
        callback() {
          console.log("feature right clicked"), console.log(n.feature);
        }
      }), o;
    }, e.name);
  }
});
export {
  s as default
};
