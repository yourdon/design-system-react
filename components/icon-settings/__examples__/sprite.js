"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _icon = _interopRequireDefault(require("../../../../components/icon"));

var _iconSettings = _interopRequireDefault(require("../../../../components/icon-settings"));

var _symbols = _interopRequireDefault(require("@salesforce-ux/design-system/assets/icons/action-sprite/svg/symbols.svg"));

var _symbols2 = _interopRequireDefault(require("@salesforce-ux/design-system/assets/icons/custom-sprite/svg/symbols.svg"));

var _symbols3 = _interopRequireDefault(require("@salesforce-ux/design-system/assets/icons/utility-sprite/svg/symbols.svg"));

var _symbols4 = _interopRequireDefault(require("@salesforce-ux/design-system/assets/icons/standard-sprite/svg/symbols.svg"));

var _symbols5 = _interopRequireDefault(require("@salesforce-ux/design-system/assets/icons/doctype-sprite/svg/symbols.svg"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Example =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Example, _React$Component);

  function Example() {
    _classCallCheck(this, Example);

    return _possibleConstructorReturn(this, _getPrototypeOf(Example).apply(this, arguments));
  }

  _createClass(Example, [{
    key: "render",
    value: function render() {
      return _react.default.createElement(_iconSettings.default, {
        standardSprite: _symbols4.default,
        utilitySprite: _symbols3.default,
        actionSprite: _symbols.default,
        doctypeSprite: _symbols5.default,
        customSprite: _symbols2.default
      }, _react.default.createElement("div", {
        className: "slds-grid slds-grid_pull-padded slds-grid_vertical-align-center"
      }, _react.default.createElement("div", {
        className: "slds-col_padded"
      }, _react.default.createElement(_icon.default, {
        assistiveText: {
          label: 'Account'
        },
        category: "standard",
        name: "account",
        size: "small"
      })), _react.default.createElement("div", {
        className: "slds-col_padded"
      }, _react.default.createElement(_icon.default, {
        assistiveText: {
          label: 'Announcement'
        },
        category: "utility",
        name: "announcement",
        size: "small"
      })), _react.default.createElement("div", {
        className: "slds-col_padded"
      }, _react.default.createElement(_icon.default, {
        assistiveText: {
          label: 'Description'
        },
        category: "action",
        name: "description",
        size: "small"
      })), _react.default.createElement("div", {
        className: "slds-col_padded"
      }, _react.default.createElement(_icon.default, {
        assistiveText: {
          label: 'XML'
        },
        category: "doctype",
        name: "xml",
        size: "small"
      })), _react.default.createElement("div", {
        className: "slds-col_padded"
      }, _react.default.createElement(_icon.default, {
        assistiveText: {
          label: 'custom5'
        },
        category: "custom",
        name: "custom5",
        size: "small"
      }))));
    }
  }]);

  return Example;
}(_react.default.Component);

_defineProperty(Example, "displayName", 'IconSettingsExample');

var _default = Example; // export is replaced with `ReactDOM.render(<Example />, mountNode);` at runtime

exports.default = _default;