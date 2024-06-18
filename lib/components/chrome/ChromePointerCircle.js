'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ChromePointerCircle = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactcss = require('reactcss');

var _reactcss2 = _interopRequireDefault(_reactcss);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ChromePointerCircle = exports.ChromePointerCircle = function (_ReactCSS$Component) {
  _inherits(ChromePointerCircle, _ReactCSS$Component);

  function ChromePointerCircle() {
    _classCallCheck(this, ChromePointerCircle);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(ChromePointerCircle).apply(this, arguments));
  }

  _createClass(ChromePointerCircle, [{
    key: 'classes',
    value: function classes() {
      return {
        'default': {
          picker: {
            width: '12px',
            height: '12px',
            borderRadius: '6px',
            boxShadow: 'inset 0 0 0 1px #fff',
            transform: 'translate(-6px, -6px)'
          }
        }
      };
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement('div', { style: this.styles().picker });
    }
  }]);

  return ChromePointerCircle;
}(_reactcss2.default.Component);

exports.default = ChromePointerCircle;