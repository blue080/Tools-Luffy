'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Created by blue on 2016/12/28.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */


var _Type = require('./Type');

var _Type2 = _interopRequireDefault(_Type);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Str = function () {
    function Str() {
        _classCallCheck(this, Str);
    }

    /**
     * 计算字符串所占的内存字节数，默认使用UTF-8的编码方式计算，也可制定为UTF-16
     * UTF-8 是一种可变长度的 Unicode 编码格式，使用一至四个字节为每个字符编码
     *
     * 000000 - 00007F(128个代码)      0zzzzzzz(00-7F)                             一个字节 (英文)
     * 000080 - 0007FF(1920个代码)     110yyyyy(C0-DF) 10zzzzzz(80-BF)             两个字节
     * 000800 - 00D7FF 00E000 - 00FFFF(61440个代码)    1110xxxx(E0-EF) 10yyyyyy 10zzzzzz             三个字节
     * 010000 - 10FFFF(1048576个代码)  11110www(F0-F7) 10xxxxxx 10yyyyyy 10zzzzzz  四个字节
     *
     * 注: Unicode在范围 D800-DFFF 中不存在任何字符
     * {@link http://zh.wikipedia.org/wiki/UTF-8}
     *
     * UTF-16 大部分使用两个字节编码，编码超出 65535 的使用四个字节
     * 000000 - 00FFFF  两个字节
     * 010000 - 10FFFF  四个字节
     *
     * {@link http://zh.wikipedia.org/wiki/UTF-16}
     * @param  {String} str
     * @param  {String} charset utf-8, utf-16
     * @return {Number}
     */


    _createClass(Str, null, [{
        key: 'sizeof',
        value: function sizeof(str, charset) {
            var total = 0,
                charCode = void 0,
                i = void 0,
                len = void 0;
            charset = charset ? charset.toLowerCase() : '';
            if (charset === 'utf-16' || charset === 'utf16') {
                for (i = 0, len = str.length; i < len; i++) {
                    charCode = str.charCodeAt(i);
                    if (charCode <= 0xffff) {
                        total += 2;
                    } else {
                        total += 4;
                    }
                }
            } else {
                for (i = 0, len = str.length; i < len; i++) {
                    charCode = str.charCodeAt(i);
                    if (charCode <= 0x007f) {
                        total += 1;
                    } else if (charCode <= 0x07ff) {
                        total += 2;
                    } else if (charCode <= 0xffff) {
                        total += 3;
                    } else {
                        total += 4;
                    }
                }
            }
            return total;
        }
    }, {
        key: 'obj2str',


        /**
         * Serialize an object to query string:
         *
         * obj2str({ singlepage: 1, b: 2 }) => 'singlepage=1&b=2'
         *
         * @param {object} obj
         * @returns {string}
         */
        value: function obj2str(obj) {
            if (!_Type2.default.isObject(obj)) return "";

            return Object.getOwnPropertyNames(obj).map(function (key) {
                return encodeURIComponent(key) + '=' + encodeURIComponent(obj[key]);
            }).join('&');
        }

        /**
         * Deserialize singlepage query string to an clean object:
         *
         * str2obj('singlepage=1&b=2') => { singlepage: 1, b: 2 }
         *
         * @param {string} str
         * @returns {object}
         */

    }, {
        key: 'str2obj',
        value: function str2obj(str) {
            if (!_Type2.default.isString(str)) return {};

            return str.split('&').reduce(function (acc, cur) {
                var _cur$split = cur.split('='),
                    _cur$split2 = _slicedToArray(_cur$split, 2),
                    k = _cur$split2[0],
                    v = _cur$split2[1];

                k = decodeURIComponent(k);
                v = decodeURIComponent(v);
                return _extends({}, acc, _defineProperty({}, k, v));
            }, {});
        }
    }]);

    return Str;
}();

exports.default = Str;