'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getset = getset;
function getset(key, val) {
  var old = {}.hasOwnProperty.call(this.data, key) ? this.data[key] : '';
  this.data[key] = val;
  return old;
}