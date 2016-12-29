"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Created by blue on 2016/12/28.
 */
var toFixedVersion = function toFixedVersion(ver, floatLength) {
    ver = ("" + ver).replace(/_/g, ".");
    floatLength = floatLength || 1;
    ver = String(ver).split(".");
    ver = ver[0] + "." + (ver[1] || "0");
    ver = Number(ver).toFixed(floatLength);
    return ver;
};

var ua = navigator.userAgent.toLowerCase();

var Browser = function () {
    function Browser(name, ver) {
        _classCallCheck(this, Browser);

        _initialiseProps.call(this);

        this.name = name;
        this.version = ver;
        this[name] = ver;
    }

    _createClass(Browser, [{
        key: "ua",
        get: function get() {
            return ua;
        }
    }, {
        key: "isCurrentView",


        /**
         * 是否支持css3的borderimage
         *
         * @description {boolean} 检测是否支持css3属性borderimage
         */
        //borderimage = false,

        get: function get() {
            var hidden = void 0,
                state = void 0,
                visibilityChange = void 0;
            if (typeof document.hidden !== "undefined") {
                hidden = "hidden";
                visibilityChange = "visibilitychange";
                state = "visibilityState";
            } else if (typeof document.mozHidden !== "undefined") {
                hidden = "mozHidden";
                visibilityChange = "mozvisibilitychange";
                state = "mozVisibilityState";
            } else if (typeof document.msHidden !== "undefined") {
                hidden = "msHidden";
                visibilityChange = "msvisibilitychange";
                state = "msVisibilityState";
            } else if (typeof document.webkitHidden !== "undefined") {
                hidden = "webkitHidden";
                visibilityChange = "webkitvisibilitychange";
                state = "webkitVisibilityState";
            }
            return document[state] === 'visible';
        }

        /**
         * 用户使用的浏览器的名称，如：chrome
         *
         *
         * @description {String} 用户使用的浏览器的名称，如：chrome
         * @type Number
         */


        /**
         * @property version
         * @lends browser
         */


        /**
         * 用户使用的浏览器的版本号，如果是0表示不是此浏览器
         *
         *
         * @description {Number} 用户使用的浏览器的版本号，如果是0表示不是此浏览器
         * @type Number
         */


        /**
         * 用户使用的浏览器的版本号，如果是0表示不是此浏览器
         *
         *
         * @description {Number} 用户使用的浏览器的版本号，如果是0表示不是此浏览器
         * @type Number
         */


        /**
         * 用户使用的浏览器的版本号，如果是0表示不是此浏览器
         *
         *
         * @description {Number} 用户使用的浏览器的版本号，如果是0表示不是此浏览器
         * @type Number
         */


        /**
         * 用户使用的浏览器的版本号，如果是0表示不是此浏览器
         *
         *
         * @description {Number} 用户使用的浏览器的版本号，如果是0表示不是此浏览器
         * @type Number
         */


        /**
         * 用户使用的浏览器的版本号，如果是0表示不是此浏览器
         *
         *
         * @description {Number} 用户使用的浏览器的版本号，如果是0表示不是此浏览器
         * @type Number
         */


        /**
         * 用户使用的浏览器的版本号，如果是0表示不是此浏览器
         *
         *
         * @description {Number} 用户使用的浏览器的版本号，如果是0表示不是此浏览器
         * @type Number
         */


        /**
         * 用户使用的是否是adobe 的air内嵌浏览器
         */

    }]);

    return Browser;
}();

var _initialiseProps = function _initialiseProps() {
    this.features = {
        xpath: !!document.evaluate,
        air: !!window.runtime,
        query: !!document.querySelector
    };
    this.plugins = {
        flash: function () {
            var ver = 0,
                plug = navigator.plugins;
            if (plug && plug.length) {
                var flash = plug['Shockwave Flash'];
                if (flash && flash.description) {
                    ver = toFixedVersion(flash.description.match(/\b(\d+)\.\d+\b/)[1], 1) || ver;
                }
            } else {
                var startVer = 13;
                while (startVer--) {
                    try {
                        new ActiveXObject('ShockwaveFlash.ShockwaveFlash.' + startVer);
                        ver = toFixedVersion(startVer);
                        break;
                    } catch (e) {}
                }
            }

            return ver;
        }()
    };
    this.name = "unknown";
    this.version = 0;
    this.ie = 0;
    this.firefox = 0;
    this.chrome = 0;
    this.opera = 0;
    this.safari = 0;
    this.mobileSafari = 0;
    this.adobeAir = 0;
};

var browser = (s = ua.match(/msie ([\d.]+)/)) ? new Browser("ie", toFixedVersion(s[1])) : (s = ua.match(/firefox\/([\d.]+)/)) ? new Browser("firefox", toFixedVersion(s[1])) : (s = ua.match(/chrome\/([\d.]+)/)) ? new Browser("chrome", toFixedVersion(s[1])) : (s = ua.match(/opera.([\d.]+)/)) ? new Browser("opera", toFixedVersion(s[1])) : (s = ua.match(/adobeair\/([\d.]+)/)) ? new Browser("adobeAir", toFixedVersion(s[1])) : (s = ua.match(/version\/([\d.]+).*safari/)) ? new Browser("safari", toFixedVersion(s[1])) : 0;

exports.default = browser;