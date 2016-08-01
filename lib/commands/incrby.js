"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.incrby = incrby;
function incrby(key) {
  var increment = arguments.length <= 1 || arguments[1] === undefined ? 0 : arguments[1];

  var curVal = Number(this.data[key]);
  this.data[key] = curVal + increment;
  return this.data[key].toString();
}