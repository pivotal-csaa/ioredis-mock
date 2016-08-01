"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.decr = decr;
function decr(key) {
  var curVal = Number(this.data[key]);
  this.data[key] = curVal - 1;
  return this.data[key].toString();
}