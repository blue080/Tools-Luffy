/**
 * Created by blue on 2016/12/28.
 */
export default class Verify{
    constructor() {}

    /**
     * Check whether the o is Chinese
     *
     * @name isChinese
     * @function
     * @memberOf Verify
     * @param {object} o
     * @return {boolean} 是否是汉字
     */
    static isChinese(o) {
        return /^[\u4e00-\u9fa5]+$/.test(o)
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
    static isEmail(o) {
        return /^[\w-_]+@[\w-_]+(?:\.\w+)+$/.test(o)
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
    static isIDCard(o) {
        return /(?:^\d{15}$)|(?:^\d{17}(?:[0-9]|X|x)$)/.test(o)
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
    static isMoney(o) {
        return /^(?:(?:0)|[^0]\d*)(\.\d+)?$/.test(o)
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
    static isPhone(o) {
        return /^1[3|4|5|7|8][0-9]\d{8}$/.test(o)
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
    static isUrl(o) {
        return /^(?:ht|f)tp(?:s)?\:\/\/(?:[\w\-\.]+)\.\w+/i.test(o)
    }
}