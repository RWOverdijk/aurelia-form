'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _extend = require('extend');

var _extend2 = _interopRequireDefault(_extend);

var _frameworksFrameworks = require('./frameworks/frameworks');

var _frameworksFrameworks2 = _interopRequireDefault(_frameworksFrameworks);

var Config = (function () {
  function Config() {
    _classCallCheck(this, Config);

    var defaultFramework = 'bootstrap';

    (0, _extend2['default'])(this, {

      translate: false,

      components: {},

      framework: defaultFramework,

      frameworkComponents: _frameworksFrameworks2['default'][defaultFramework] || {},
      aliases: {
        int: 'number',
        integer: 'number',
        float: 'number',
        string: 'text',
        bool: 'checkbox',
        boolean: 'checkbox'
      }
    });
  }

  _createClass(Config, [{
    key: 'configure',
    value: function configure(configs) {
      return (0, _extend2['default'])(true, this, configs);
    }
  }]);

  return Config;
})();

exports.Config = Config;