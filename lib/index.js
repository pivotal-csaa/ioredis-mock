'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _commands = require('./commands');

var commands = _interopRequireWildcard(_commands);

var _command2 = require('./command');

var _command3 = _interopRequireDefault(_command2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _toArray(arr) { return Array.isArray(arr) ? arr : Array.from(arr); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var RedisMock = function () {
  function RedisMock() {
    var _this = this;

    var _ref = arguments.length <= 0 || arguments[0] === undefined ? { data: {} } : arguments[0];

    var data = _ref.data;

    _classCallCheck(this, RedisMock);

    this.data = data;

    Object.keys(commands).forEach(function (command) {
      _this[command] = (0, _command3.default)(commands[command].bind(_this));
    });
  }

  _createClass(RedisMock, [{
    key: 'multi',
    value: function multi(batch) {
      var _this2 = this;

      this.batch = batch.map(function (_ref2) {
        var _command;

        var _ref3 = _toArray(_ref2);

        var command = _ref3[0];

        var options = _ref3.slice(1);

        return (_command = _this2[command]).bind.apply(_command, [_this2].concat(_toConsumableArray(options)));
      });

      return this;
    }
  }, {
    key: 'exec',
    value: function exec() {
      return Promise.all(this.batch.map(function (promise) {
        return promise();
      })).then(function (results) {
        return results.map(function (result) {
          return [null, result];
        });
      });
    }
  }]);

  return RedisMock;
}();

exports.default = RedisMock;