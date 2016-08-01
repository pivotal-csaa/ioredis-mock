'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.strlen = strlen;
function strlen(key) {
  return {}.hasOwnProperty.call(this.data, key) ? this.data[key].length.toString() : '0';
}