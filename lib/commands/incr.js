"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.incr = incr;
function incr(key) {
  var curVal = Number(this.data[key]);
  this.data[key] = curVal + 1;
  return this.data[key].toString();
}