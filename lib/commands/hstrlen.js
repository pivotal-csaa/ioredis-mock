'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hstrlen = hstrlen;
function hstrlen(key, field) {
  return {}.hasOwnProperty.call(this.data, key) && {}.hasOwnProperty.call(this.data[key], field) ? this.data[key][field].length.toString() : '0';
}