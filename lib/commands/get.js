"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.get = get;
function get(key) {
  return {}.hasOwnProperty.call(this.data, key) ? this.data[key] : null;
}