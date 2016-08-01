'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hexists = hexists;
function hexists(key, field) {
  return {}.hasOwnProperty.call(this.data[key], field) ? '1' : '0';
}