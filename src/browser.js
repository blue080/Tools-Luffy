/**
 * Created by blue on 2016/12/28.
 */
const toFixedVersion = (ver, floatLength) => {
    ver = ("" + ver).replace(/_/g, ".");
    floatLength = floatLength || 1;
    ver = String(ver).split(".");
    ver = ver[0] + "." + (ver[1] || "0");
    ver = Number(ver).toFixed(floatLength);
    return ver;
};

const ua = navigator.userAgent.toLowerCase();

class Browser {
    constructor(name, ver) {
        this.name = name;
        this.version = ver;
        this[name] = ver;
    }

    features = {
        xpath: !!(document.evaluate),
        air: !!(window.runtime),
        query: !!(document.querySelector)
    };

    plugins = {
        flash: (() => {
            let ver = 0,
                plug = navigator.plugins;
            if (plug && plug.length) {
                let flash = plug['Shockwave Flash'];
                if (flash && flash.description) {
                    ver = toFixedVersion(flash.description.match(/\b(\d+)\.\d+\b/)[1], 1) || ver;
                }
            } else {
                let startVer = 13;
                while (startVer--) {
                    try {
                        new ActiveXObject('ShockwaveFlash.ShockwaveFlash.' + startVer);
                        ver = toFixedVersion(startVer);
                        break;
                    } catch(e) {}
                }
            }

            return ver;
        })()
    };

    get ua() {
        return ua;
    }

    get isCurrentView() {
        let hidden, state, visibilityChange;
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
        return document[state] === 'visible'
    }

    /**
     * 用户使用的浏览器的名称，如：chrome
     *
     *
     * @description {String} 用户使用的浏览器的名称，如：chrome
     * @type Number
     */
    name = "unknown";

    /**
     * @property version
     * @lends browser
     */
    version = 0;

    /**
     * 用户使用的浏览器的版本号，如果是0表示不是此浏览器
     *
     *
     * @description {Number} 用户使用的浏览器的版本号，如果是0表示不是此浏览器
     * @type Number
     */
    ie = 0;

    /**
     * 用户使用的浏览器的版本号，如果是0表示不是此浏览器
     *
     *
     * @description {Number} 用户使用的浏览器的版本号，如果是0表示不是此浏览器
     * @type Number
     */
    firefox = 0;

    /**
     * 用户使用的浏览器的版本号，如果是0表示不是此浏览器
     *
     *
     * @description {Number} 用户使用的浏览器的版本号，如果是0表示不是此浏览器
     * @type Number
     */
    chrome = 0;


    /**
     * 用户使用的浏览器的版本号，如果是0表示不是此浏览器
     *
     *
     * @description {Number} 用户使用的浏览器的版本号，如果是0表示不是此浏览器
     * @type Number
     */
    opera = 0;

    /**
     * 用户使用的浏览器的版本号，如果是0表示不是此浏览器
     *
     *
     * @description {Number} 用户使用的浏览器的版本号，如果是0表示不是此浏览器
     * @type Number
     */
    safari = 0;

    /**
     * 用户使用的浏览器的版本号，如果是0表示不是此浏览器
     *
     *
     * @description {Number} 用户使用的浏览器的版本号，如果是0表示不是此浏览器
     * @type Number
     */
    mobileSafari = 0;

    /**
     * 用户使用的是否是adobe 的air内嵌浏览器
     */
    adobeAir = 0;

    /**
     * 是否支持css3的borderimage
     *
     * @description {boolean} 检测是否支持css3属性borderimage
     */
    //borderimage = false,

}

const browser = (s = ua.match(/msie ([\d.]+)/)) ? new Browser("ie", toFixedVersion(s[1])):
                (s = ua.match(/firefox\/([\d.]+)/)) ? new Browser("firefox", toFixedVersion(s[1])) :
                (s = ua.match(/chrome\/([\d.]+)/)) ? new Browser("chrome", toFixedVersion(s[1])) :
                (s = ua.match(/opera.([\d.]+)/)) ? new Browser("opera", toFixedVersion(s[1])) :
                (s = ua.match(/adobeair\/([\d.]+)/)) ? new Browser("adobeAir", toFixedVersion(s[1])) :
                (s = ua.match(/version\/([\d.]+).*safari/)) ? new Browser("safari", toFixedVersion(s[1])) : 0;

export default browser