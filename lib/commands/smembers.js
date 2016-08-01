"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.smembers = smembers;
function smembers(key) {
  return this.data[key];
}