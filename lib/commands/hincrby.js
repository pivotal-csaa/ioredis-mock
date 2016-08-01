"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hincrby = hincrby;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function hincrby(key, field) {
  var increment = arguments.length <= 2 || arguments[2] === undefined ? 0 : arguments[2];

  if (!{}.hasOwnProperty.call(this.data, key)) {
    this.data[key] = _defineProperty({}, field, 0);
  }
  if (!{}.hasOwnProperty.call(this.data[key], field)) {
    this.data[key][field] = 0;
  }
  var curVal = Number(this.data[key][field]);
  this.data[key][field] = curVal + increment;
  return this.data[key][field].toString();
}