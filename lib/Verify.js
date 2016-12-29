"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Created by blue on 2016/12/28.
 */
var Verify = function () {
  function Verify() {
    _classCallCheck(this, Verify);
  }

  /**
   * Check whether the o is Chinese
   *
   * @name isChinese
   * @function
   * @memberOf Verify
   * @param {object} o
   * @return {boolean} 是否是汉字
   */


  _createClass(Verify, null, [{
    key: "isChinese",
    value: function isChinese(o) {
      return (/^[\u4e00-\u9fa5]+$/.test(o)
      );
    }

    /**
     * Check whether the o is Email
     *
     * @name isEmail
     * @function
     * @memberOf Verify
     * @param {object} o
     * @return {boolean} 是否是邮箱
     */

  }, {
    key: "isEmail",
    value: function isEmail(o) {
      return (/^[\w-_]+@[\w-_]+(?:\.\w+)+$/.test(o)
      );
    }

    /**
     * Check whether the o is Email
     *
     * @name isIDCard
     * @function
     * @memberOf Verify
     * @param {object} o
     * @return {boolean} 身份证号是否正确
     */

  }, {
    key: "isIDCard",
    value: function isIDCard(o) {
      return (/(?:^\d{15}$)|(?:^\d{17}(?:[0-9]|X|x)$)/.test(o)
      );
    }

    /**
     * Check whether the o is Money
     *
     * @name isMoney
     * @function
     * @memberOf Verify
     * @param {object} o
     * @return {boolean}
     */

  }, {
    key: "isMoney",
    value: function isMoney(o) {
      return (/^(?:(?:0)|[^0]\d*)(\.\d+)?$/.test(o)
      );
    }

    /**
     * Check whether the o is phone
     *
     * @name isPhone
     * @function
     * @memberOf Verify
     * @param {object} o
     * @return {boolean}
     */

  }, {
    key: "isPhone",
    value: function isPhone(o) {
      return (/^1[3|4|5|7|8][0-9]\d{8}$/.test(o)
      );
    }

    /**
     * Check whether the o is url
     *
     * @name isUrl
     * @function
     * @memberOf Verify
     * @param {object} o
     * @return {boolean}
     */

  }, {
    key: "isUrl",
    value: function isUrl(o) {
      return (/^(?:ht|f)tp(?:s)?\:\/\/(?:[\w\-\.]+)\.\w+/i.test(o)
      );
    }
  }]);

  return Verify;
}();

exports.default = Verify;