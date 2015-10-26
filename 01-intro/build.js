var home = function(e) {
  function t(r) {
    if (u[r])return u[r].exports;
    var o = u[r] = {exports: {}, id: r, loaded: !1};
    return e[r].call(o.exports, o, o.exports, t), o.loaded = !0, o.exports
  }

  var u = {};
  return t.m = e, t.c = u, t.p = "", t(0)
}([function(e, t, u) {
  "use strict";
  var r = u(1)["default"], o = u(2), n = r(o);
  n["default"]("home"), t.welcome = n["default"]
}, function(e, t) {
  "use strict";
  t["default"] = function(e) {
    return e && e.__esModule ? e : {"default": e}
  }, t.__esModule = !0
}, function(e, t) {
  "use strict";
  Object.defineProperty(t, "__esModule", {value: !0}), t["default"] = function(e) {
    alert("Welcome " + e)
  }, e.exports = t["default"]
}]);