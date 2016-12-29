'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Created by blue on 2016/12/28.
 */
var ua = navigator.userAgent.toLowerCase();

var Platform = function () {
    function Platform() {
        _classCallCheck(this, Platform);
    }

    _createClass(Platform, null, [{
        key: 'isIe',
        get: function get() {
            return ua.match(/msie/i) !== null;
        }
    }, {
        key: 'isAndroid',
        get: function get() {
            return ua.match(/Android/i) !== null;
        }
    }, {
        key: 'isIPhone',
        get: function get() {
            return ua.match(/iPhone/i) !== null;
        }
    }, {
        key: 'isIPad',
        get: function get() {
            return ua.match(/iPad/i) !== null;
        }
    }, {
        key: 'isIPod',
        get: function get() {
            return ua.match(/iPod/i) !== null;
        }
    }, {
        key: 'isWinPhone',
        get: function get() {
            return ua.match(/Windows Phone/i) !== null;
        }
    }, {
        key: 'isIOS',
        get: function get() {
            return ua.match(/iPhone/i) !== null || ua.match(/iPad/i) !== null;
        }
    }, {
        key: 'isTouchDevice',
        get: function get() {
            return "ontouchstart" in window;
        }
    }, {
        key: 'isServer',
        get: function get() {
            return typeof process !== 'undefined' && Object.prototype.toString.call(process) === '[object process]';
        }
    }]);

    return Platform;
}();

exports.default = Platform;