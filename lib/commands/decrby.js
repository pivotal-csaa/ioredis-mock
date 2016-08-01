"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.decrby = decrby;
function decrby(key) {
  var decrement = arguments.length <= 1 || arguments[1] === undefined ? 0 : arguments[1];

  var curVal = Number(this.data[key]);
  this.data[key] = curVal - decrement;
  return this.data[key].toString();
}