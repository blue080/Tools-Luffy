/**
 * Created by blue on 2016/12/28.
 */
import Type from './Type'

export default class Cookie {
    constructor() {
    }

    static set(sKey, sValue, vEnd, sPath, sDomain, bSecure) {
        let encodeSKey, encodeSValue, sExpires = '';
        if (!sKey || /^(?:expires|max\-age|path|domain|secure)$/i.test(sKey)) return false;

        if (vEnd && Type.isNumber(vEnd)) sExpires = vEnd === Infinity ? 'expires=Fri, 31 Dec 9999 23:59:59 GMT' : `max-age=${vEnd}`;

        if (vEnd && (Type.isString(vEnd) || Type.isDate(vEnd))) sExpires = `expires=${vEnd}`;

        sDomain = sDomain ? 'domain=' + sDomain : '';
        sPath = sPath ? 'path=' + sPath : '';
        bSecure = bSecure ? 'secure=' + bSecure : '';
        encodeSKey = encodeURIComponent(sKey);
        encodeSValue = encodeURIComponent(sValue);
        document.cookie = '' + encodeSKey + '=' + encodeSValue + '; ' + sExpires + '; ' + sDomain + '; ' + sPath + '; ' + bSecure;
        return true
    };

    static get(sKey) {
        if (!sKey) return null;
        return decodeURIComponent(document.cookie.replace(new RegExp('(?:(?:^|.*;)\\s*' + encodeURIComponent(sKey).replace(/[\-\.\+\*]/g, '\\$&') + '\\s*\\=\\s*([^;]*).*$)|^.*$'), '$1')) || null
    }

    static remove(sKey, sPath, sDomain) {
        let encodeSKey = encodeURIComponent(sKey);
        sDomain = sDomain ? 'domain=' + sDomain : '';
        sPath = sPath ? 'path=' + sPath : '';
        document.cookie = '' + encodeSKey + '=; expires=Thu, 01 Jan 1970 00:00:00 GMT; ' + sDomain + '; ' + sPath;
        return true
    }
}