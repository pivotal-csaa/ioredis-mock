"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sismember = sismember;
function sismember(key, val) {
  return this.data[key].indexOf(val) !== -1;
}