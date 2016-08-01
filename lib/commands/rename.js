'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.rename = rename;
function rename(key, newKey) {
  var value = this.data[key];
  this.data[newKey] = value;
  delete this.data[key];
  return 'OK';
}