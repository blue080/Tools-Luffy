'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Created by blue on 2016/12/28.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */


var _Type = require('./Type');

var _Type2 = _interopRequireDefault(_Type);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Cookie = function () {
    function Cookie() {
        _classCallCheck(this, Cookie);
    }

    _createClass(Cookie, null, [{
        key: 'set',
        value: function set(sKey, sValue, vEnd, sPath, sDomain, bSecure) {
            var encodeSKey = void 0,
                encodeSValue = void 0,
                sExpires = '';
            if (!sKey || /^(?:expires|max\-age|path|domain|secure)$/i.test(sKey)) return false;

            if (vEnd && _Type2.default.isNumber(vEnd)) sExpires = vEnd === Infinity ? 'expires=Fri, 31 Dec 9999 23:59:59 GMT' : 'max-age=' + vEnd;

            if (vEnd && (_Type2.default.isString(vEnd) || _Type2.default.isDate(vEnd))) sExpires = 'expires=' + vEnd;

            sDomain = sDomain ? 'domain=' + sDomain : '';
            sPath = sPath ? 'path=' + sPath : '';
            bSecure = bSecure ? 'secure=' + bSecure : '';
            encodeSKey = encodeURIComponent(sKey);
            encodeSValue = encodeURIComponent(sValue);
            document.cookie = '' + encodeSKey + '=' + encodeSValue + '; ' + sExpires + '; ' + sDomain + '; ' + sPath + '; ' + bSecure;
            return true;
        }
    }, {
        key: 'get',
        value: function get(sKey) {
            if (!sKey) return null;
            return decodeURIComponent(document.cookie.replace(new RegExp('(?:(?:^|.*;)\\s*' + encodeURIComponent(sKey).replace(/[\-\.\+\*]/g, '\\$&') + '\\s*\\=\\s*([^;]*).*$)|^.*$'), '$1')) || null;
        }
    }, {
        key: 'remove',
        value: function remove(sKey, sPath, sDomain) {
            var encodeSKey = encodeURIComponent(sKey);
            sDomain = sDomain ? 'domain=' + sDomain : '';
            sPath = sPath ? 'path=' + sPath : '';
            document.cookie = '' + encodeSKey + '=; expires=Thu, 01 Jan 1970 00:00:00 GMT; ' + sDomain + '; ' + sPath;
            return true;
        }
    }]);

    return Cookie;
}();

exports.default = Cookie;