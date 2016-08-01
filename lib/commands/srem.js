"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.srem = srem;
function srem(key) {
  var _this = this;

  for (var _len = arguments.length, vals = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    vals[_key - 1] = arguments[_key];
  }

  vals.forEach(function (val) {
    var index = _this.data[key].indexOf(val);
    _this.data[key].splice(index, 1);
  });
  return vals.length;
}