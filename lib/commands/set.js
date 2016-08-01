'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.set = set;
function set(key, value) {
  this.data[key] = value;
  return 'OK';
}