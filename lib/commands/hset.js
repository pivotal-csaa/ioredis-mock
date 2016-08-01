'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hset = hset;
function hset(key, hashKey, hashVal) {
  this.data[key][hashKey] = hashVal;
  return 'OK';
}