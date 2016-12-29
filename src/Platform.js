/**
 * Created by blue on 2016/12/28.
 */
const ua = navigator.userAgent.toLowerCase();

export default class Platform {
    constructor() {
    }

    static get isIe() {
        return ua.match(/msie/i) !== null
    }

    static get isAndroid() {
        return ua.match(/Android/i) !== null
    }

    static get isIPhone() {
        return ua.match(/iPhone/i) !== null
    }

    static get isIPad() {
        return ua.match(/iPad/i) !== null
    }

    static get isIPod() {
        return ua.match(/iPod/i) !== null
    }

    static get isWinPhone() {
        return ua.match(/Windows Phone/i) !== null
    }

    static get isIOS() {
        return ua.match(/iPhone/i) !== null || ua.match(/iPad/i) !== null
    }

    static get isTouchDevice() {
        return "ontouchstart" in window
    }

    static get isServer() {
        return typeof process !== 'undefined' && Object.prototype.toString.call(process) === '[object process]'
    }
}