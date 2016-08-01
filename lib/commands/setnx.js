'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setnx = setnx;
function setnx(key, val) {
  if (!{}.hasOwnProperty.call(this.data, key)) {
    this.data[key] = val;

    return '1';
  }

  return '0';
}