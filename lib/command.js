'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = command;

var _bluebird = require('bluebird');

var _bluebird2 = _interopRequireDefault(_bluebird);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function command(emulate) {
  return function () {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var lastArgIndex = args.length - 1;
    var callback = args[lastArgIndex];
    if (typeof callback !== 'function') {
      callback = undefined;
    } else {
      args.length = lastArgIndex; // eslint-disable-line no-param-reassign
    }

    return new _bluebird2.default(function (resolve) {
      return resolve(emulate.apply(undefined, args));
    }).asCallback(callback);
  };
}