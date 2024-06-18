'use strict';Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactcss = require('reactcss');

var _reactcss2 = _interopRequireDefault(_reactcss);

var _helpersColor = require('../../helpers/color');

var _helpersColor2 = _interopRequireDefault(_helpersColor);

var _materialColors = require('material-colors');

var _materialColors2 = _interopRequireDefault(_materialColors);

var _modulesReactMaterialDesign = require('../../../modules/react-material-design');

var _SwatchesGroup = require('./SwatchesGroup');

var _SwatchesGroup2 = _interopRequireDefault(_SwatchesGroup);

var Swatches = (function (_ReactCSS$Component) {
  _inherits(Swatches, _ReactCSS$Component);

  function Swatches() {
    _classCallCheck(this, Swatches);

    _get(Object.getPrototypeOf(Swatches.prototype), 'constructor', this).call(this);

    this.handleChange = this.handleChange.bind(this);
  }

  _createClass(Swatches, [{
    key: 'classes',
    value: function classes() {
      return {
        'default': {
          picker: {
            width: '320px',
            height: '240px'
          },
          overflow: {
            height: '240px',
            overflowY: 'scroll'
          },
          body: {
            padding: '16px 0 6px 16px'
          },

          clear: {
            clear: 'both'
          }
        }
      };
    }
  }, {
    key: 'handleChange',
    value: function handleChange(data) {
      _helpersColor2['default'].isValidHex(data) && this.props.onChange(data);
    }
  }, {
    key: 'render',
    value: function render() {
      var groups = [];
      if (this.props.colors) {
        for (var i = 0; i < this.props.colors.length; i++) {
          var group = this.props.colors[i];
          groups.push(_react2['default'].createElement(_SwatchesGroup2['default'], { key: group.toString(), group: group, active: this.props.hex, onClick: this.handleChange }));
        }
      }

      return _react2['default'].createElement(
        'div',
        { style: this.styles().picker },
        _react2['default'].createElement(
          _modulesReactMaterialDesign.Raised,
          null,
          _react2['default'].createElement(
            'div',
            { style: this.styles().overflow },
            _react2['default'].createElement(
              'div',
              { style: this.styles().body, ref: 'body' },
              groups,
              _react2['default'].createElement('div', { style: this.styles().clear })
            )
          )
        )
      );
    }
  }]);

  return Swatches;
})(_reactcss2['default'].Component);

exports.Swatches = Swatches;

Swatches.defaultProps = {
  colors: [[_materialColors2['default'].red['900'], _materialColors2['default'].red['700'], _materialColors2['default'].red['500'], _materialColors2['default'].red['300'], _materialColors2['default'].red['100']], [_materialColors2['default'].pink['900'], _materialColors2['default'].pink['700'], _materialColors2['default'].pink['500'], _materialColors2['default'].pink['300'], _materialColors2['default'].pink['100']], [_materialColors2['default'].purple['900'], _materialColors2['default'].purple['700'], _materialColors2['default'].purple['500'], _materialColors2['default'].purple['300'], _materialColors2['default'].purple['100']], [_materialColors2['default'].deepPurple['900'], _materialColors2['default'].deepPurple['700'], _materialColors2['default'].deepPurple['500'], _materialColors2['default'].deepPurple['300'], _materialColors2['default'].deepPurple['100']], [_materialColors2['default'].indigo['900'], _materialColors2['default'].indigo['700'], _materialColors2['default'].indigo['500'], _materialColors2['default'].indigo['300'], _materialColors2['default'].indigo['100']], [_materialColors2['default'].blue['900'], _materialColors2['default'].blue['700'], _materialColors2['default'].blue['500'], _materialColors2['default'].blue['300'], _materialColors2['default'].blue['100']], [_materialColors2['default'].lightBlue['900'], _materialColors2['default'].lightBlue['700'], _materialColors2['default'].lightBlue['500'], _materialColors2['default'].lightBlue['300'], _materialColors2['default'].lightBlue['100']], [_materialColors2['default'].cyan['900'], _materialColors2['default'].cyan['700'], _materialColors2['default'].cyan['500'], _materialColors2['default'].cyan['300'], _materialColors2['default'].cyan['100']], [_materialColors2['default'].teal['900'], _materialColors2['default'].teal['700'], _materialColors2['default'].teal['500'], _materialColors2['default'].teal['300'], _materialColors2['default'].teal['100']], ['#194D33', _materialColors2['default'].green['700'], _materialColors2['default'].green['500'], _materialColors2['default'].green['300'], _materialColors2['default'].green['100']], [_materialColors2['default'].lightGreen['900'], _materialColors2['default'].lightGreen['700'], _materialColors2['default'].lightGreen['500'], _materialColors2['default'].lightGreen['300'], _materialColors2['default'].lightGreen['100']], [_materialColors2['default'].lime['900'], _materialColors2['default'].lime['700'], _materialColors2['default'].lime['500'], _materialColors2['default'].lime['300'], _materialColors2['default'].lime['100']], [_materialColors2['default'].yellow['900'], _materialColors2['default'].yellow['700'], _materialColors2['default'].yellow['500'], _materialColors2['default'].yellow['300'], _materialColors2['default'].yellow['100']], [_materialColors2['default'].amber['900'], _materialColors2['default'].amber['700'], _materialColors2['default'].amber['500'], _materialColors2['default'].amber['300'], _materialColors2['default'].amber['100']], [_materialColors2['default'].orange['900'], _materialColors2['default'].orange['700'], _materialColors2['default'].orange['500'], _materialColors2['default'].orange['300'], _materialColors2['default'].orange['100']], [_materialColors2['default'].deepOrange['900'], _materialColors2['default'].deepOrange['700'], _materialColors2['default'].deepOrange['500'], _materialColors2['default'].deepOrange['300'], _materialColors2['default'].deepOrange['100']], [_materialColors2['default'].brown['900'], _materialColors2['default'].brown['700'], _materialColors2['default'].brown['500'], _materialColors2['default'].brown['300'], _materialColors2['default'].brown['100']], [_materialColors2['default'].blueGrey['900'], _materialColors2['default'].blueGrey['700'], _materialColors2['default'].blueGrey['500'], _materialColors2['default'].blueGrey['300'], _materialColors2['default'].blueGrey['100']]]
};

exports['default'] = Swatches;