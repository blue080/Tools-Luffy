"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Created by blue on 2016/12/28.
 */

var Type = function () {
  function Type() {
    _classCallCheck(this, Type);
  }

  /**
   * 判断是否数组
   *
   * @name isArray
   * @function
   * @memberOf type
   * @param {Object} o 判断对象
   * @return {boolean} 是否数组
   */


  _createClass(Type, null, [{
    key: "isArray",
    value: function isArray(o) {
      return (o || false) && (o.constructor === Array || Object.prototype.toString.call(o) === "[object Array]");
    }

    /**
     * 判断是否Object
     *
     * @name isObject
     * @function
     * @memberOf type
     * @param {Object} o 判断对象
     * @return {boolean} 是否Object
     */

  }, {
    key: "isObject",
    value: function isObject(o) {
      return (o || false) && (o.constructor === Object || Object.prototype.toString.call(o) === "[object Object]");
    }

    /**
     * 判断是否布尔类型
     *
     * @name isBoolean
     * @function
     * @memberOf type
     * @param {Object} o 判断对象
     * @return {boolean} 是否布尔类型
     */

  }, {
    key: "isBoolean",
    value: function isBoolean(o) {
      return (o === false || o || false) && o.constructor === Boolean;
    }

    /**
     * 判断是否数值类型
     *
     * @name isNumber
     * @function
     * @memberOf type
     * @param {Object} o 判断对象
     * @return {boolean} 是否数值类型
     */

  }, {
    key: "isNumber",
    value: function isNumber(o) {
      return (o === 0 || o || false) && o.constructor === Number;
    }

    /**
     * 判断是否undefined
     *
     * @name isUndefined
     * @function
     * @memberOf type
     * @param {Object} o 判断对象
     * @return {boolean} 是否undefined
     */

  }, {
    key: "isUndefined",
    value: function isUndefined(o) {
      return typeof o === "undefined";
    }

    /**
     * 判断是否Null
     *
     * @name isNull
     * @function
     * @memberOf type
     * @param {Object} o 判断对象
     * @return {boolean} 是否Null
     */

  }, {
    key: "isNull",
    value: function isNull(o) {
      return o === null;
    }

    /**
     * 判断是否function
     *
     * @name isFunction
     * @function
     * @memberOf type
     * @param {Object} o 判断对象
     * @return {boolean} 是否function
     */

  }, {
    key: "isFunction",
    value: function isFunction(o) {
      return (o || false) && o.constructor === Function;
    }

    /**
     * 判断是否字符串
     *
     * @name isString
     * @function
     * @memberOf type
     * @param {Object} o 判断对象
     * @return {boolean} 是否字符串
     */

  }, {
    key: "isString",
    value: function isString(o) {
      return (o === "" || o || false) && o.constructor === String;
    }
  }]);

  return Type;
}();

exports.default = Type;