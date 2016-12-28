/**
 * Created by blue on 2016/12/28.
 */

export default class Type {
    constructor() {
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
    static isArray(o) {
        return o && (o.constructor === Array || Object.prototype.toString.call(o) === "[object Array]");
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
    static isObject(o) {
        return o && (o.constructor === Object || Object.prototype.toString.call(o) === "[object Object]");
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
    static isBoolean(o) {
        return (o === false || o) && (o.constructor === Boolean);
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
    static isNumber(o) {
        return (o === 0 || o) && o.constructor === Number;
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
    static isUndefined(o) {
        return typeof(o) === "undefined";
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
    static isNull(o) {
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
    static isFunction(o) {
        return o && (o.constructor === Function);
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
    static isString(o) {
        return (o === "" || o) && (o.constructor === String);
    }

    /**
     * 判断是否Date
     *
     * @name isDate
     * @function
     * @memberOf type
     * @param {Object} o 判断对象
     * @return {boolean} 是否Date
     */
    static isDate(o) {
        return (o === "" || o) && (o.constructor === Date);
    }
}