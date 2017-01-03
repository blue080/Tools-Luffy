'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Created by blue on 2016/12/30.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */


require('babel-polyfill');

var _Type = require('./Type');

var _Type2 = _interopRequireDefault(_Type);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Dom = function () {
    function Dom() {
        _classCallCheck(this, Dom);

        this.tagNameExpr = /^[\w-]+$/;
        this.idExpr = /^#([\w-]*)$/;
        this.classExpr = /^\.([\w-]+)$/;
        this.doc = document;
    }

    _createClass(Dom, [{
        key: '_id',
        value: function _id(id) {
            return this.doc.getElementById(id);
        }
    }, {
        key: '_tagName',
        value: function _tagName(tagName, context) {
            context = context || this.doc;
            return context.getElementsByTagName(tagName);
        }
    }, {
        key: '_className',
        value: function _className(className, context) {
            context = context || this.doc;
            var children = void 0,
                classNames = void 0,
                ele = [];
            if (context.getElementsByClassName) return context.getElementsByClassName(className);

            children = context.getElementsByClassName('*');
            [].from(children).map(function (child) {
                if (classNames = child.className && classNames.split(' ').indexOf(className) >= 0) ele.push(child);
            });
            return ele;
        }

        //获取带有出产商的属性名

    }, {
        key: '_getVendorPropertyName',
        value: function _getVendorPropertyName(prop) {
            var style = document.createElement('div').style;
            var vendors = ['o', 'ms', 'moz', 'webkit'];
            if (prop in style) return prop;
            var _prop = prop.charAt(0).toUpperCase() + prop.substr(1);
            vendors.map(function (vendor) {
                var vendorProp = vendor + _prop;
                if (vendorProp in style) return vendorProp;
            });
        }
    }], [{
        key: '$',
        value: function $(selector, context) {
            var result = [];
            context = context || this.doc;

            if (this.idExpr.test(selector)) {
                result = this._id(selector.replace('#', ''));
                return result && [result] || [];
            } else if (this.tagNameExpr.test(selector)) {
                result = this._tagName(selector, context);
            } else if (this.classExpr.test(selector)) {
                result = this._className(selector.replace('.', ''), context);
            } else result = context.querySelectorAll(selector);

            return [].form(result);
        }
    }, {
        key: 'remove',
        value: function remove(node) {
            var context = node.parentNode;
            context && context.removeChild(node);
        }
    }, {
        key: 'setStyle',
        value: function setStyle(elem, styleName, styleValue) {
            var _this = this;

            if (elem.length) {
                elem.map(function (ele) {
                    return _this.setStyle(ele, styleName, styleValue);
                });
                return;
            }
            if (_Type2.default.isString(styleName)) {
                elem.style[styleName] = styleValue;
                return;
            }
            if (_Type2.default.isObject(styleName)) {
                for (var n in styleName) {
                    if (styleName.hasOwnProperty(n)) elem.style[n] = styleName[n];
                }
            }
        }
    }, {
        key: 'getStyle',
        value: function getStyle(ele, styleName) {
            if (!ele) return;
            styleName = styleName === 'float' && 'cssFloat';
            if (ele.style[styleName]) return ele.style[styleName];
            if (window.getComputedStyle) return window.getComputedStyle(ele, null)[styleName];
            if (document.defaultView && document.defaultView.getComputedStyle) {
                styleName = styleName.replace(/([/A-Z])/g, '-$1').toLowerCase();
                var style = document.defaultView.getComputedStyle(ele, '');
                return style && style.getPropertyValue(styleName);
            }
            if (ele.currentStyle) return ele.currentStyle[styleName];
        }
    }, {
        key: 'isSupport3D',
        value: function isSupport3D() {
            var p_prop = this._getVendorPropertyName('perspective');
            return p_prop && p_prop in document.createElement('div').style;
        }
    }, {
        key: 'addClass',
        value: function addClass(elem, className) {
            if (!elem || !className || this.hasClass(elem, className)) return;
            if ('classList' in document.documentElement) {
                elem.classList.add(className);
                return;
            }
            elem.className = elem.className + ' ' + className;
        }
    }, {
        key: 'hasClass',
        value: function hasClass(elem, className) {
            if (!elem || !className) return false;
            if ('classList' in document.documentElement) return elem.classList.contains(className);

            return -1 < (' ' + elem.className + ' ').indexOf(' ' + className + ' ');
        }
    }, {
        key: 'removeClass',
        value: function removeClass(elem, className) {
            if (!elem || !className || this.hasClass(elem, className)) return;
            if ('classList' in document.documentElement) {
                elem.classList.remove(className);
                return;
            }

            elem.className = elem.className.replace(new RegExp('(?:^|\\s)' + className + '(?:\\s|$)'), ' ');
        }
    }, {
        key: 'toggleClass',
        value: function toggleClass(ele, className) {
            if (this.hasClass(ele, className)) {
                this.removeClass(ele, className);
            } else {
                this.addClass(ele, className);
            }
        }
    }, {
        key: 'toDomStyle',
        value: function toDomStyle(cssStyle) {
            if (!_Type2.default.isString(cssStyle)) return;
            return cssStyle.replace(/\-[a-z]/g, function (m) {
                return m.charAt(1).toUpperCase();
            });
        }
    }, {
        key: 'toCssStyle',
        value: function toCssStyle(domStyle) {
            if (!_Type2.default.isString(domStyle)) return;
            return domStyle.replace(/[A-Z]/g, function (m) {
                return '-' + m.toLowerCase();
            });
        }
    }]);

    return Dom;
}();

exports.default = Dom;