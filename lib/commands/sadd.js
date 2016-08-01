"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sadd = sadd;
function sadd(key) {
  var _data$key;

  if (!{}.hasOwnProperty.call(this.data, key)) {
    this.data[key] = [];
  }

  for (var _len = arguments.length, vals = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    vals[_key - 1] = arguments[_key];
  }

  (_data$key = this.data[key]).push.apply(_data$key, vals);
  return vals.length;
}