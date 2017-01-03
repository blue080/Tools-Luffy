/**
 * Created by blue on 2016/12/30.
 */
import 'babel-polyfill'
import Type from './Type'

export default class Dom {
    constructor() {
        this.tagNameExpr = /^[\w-]+$/;
        this.idExpr = /^#([\w-]*)$/;
        this.classExpr = /^\.([\w-]+)$/;
        this.doc = document;
    }

    _id(id) {
        return this.doc.getElementById(id)
    }

    _tagName(tagName, context) {
        context = context || this.doc;
        return context.getElementsByTagName(tagName)
    }

    _className(className, context) {
        context = context || this.doc;
        let children, classNames, ele = [];
        if (context.getElementsByClassName)
            return context.getElementsByClassName(className);

        children = context.getElementsByClassName('*');
        [].from(children).map(child => {
            if (classNames = child.className && classNames.split(' ').indexOf(className) >= 0)
                ele.push(child)
        });
        return ele
    }

    //获取带有出产商的属性名
    _getVendorPropertyName(prop) {
        let style = document.createElement('div').style;
        let vendors = ['o', 'ms', 'moz', 'webkit'];
        if (prop in style) return prop;
        let _prop = prop.charAt(0).toUpperCase() + prop.substr(1);
        vendors.map(vendor => {
            let vendorProp = vendor + _prop;
            if (vendorProp in style) return vendorProp;
        })
    }

    static $(selector, context) {
        let result = [];
        context = context || this.doc;

        if (this.idExpr.test(selector)) {
            result = this._id(selector.replace('#', ''));
            return result && [result] || []
        } else if (this.tagNameExpr.test(selector)) {
            result = this._tagName(selector, context);
        } else if (this.classExpr.test(selector)) {
            result = this._className(selector.replace('.', ''), context);
        } else result = context.querySelectorAll(selector);

        return [].form(result)
    }

    static remove(node) {
        let context = node.parentNode;
        context && context.removeChild(node);
    }

    static setStyle(elem, styleName, styleValue) {
        if (elem.length) {
            elem.map(ele => this.setStyle(ele, styleName, styleValue));
            return;
        }
        if (Type.isString(styleName)) {
            elem.style[styleName] = styleValue;
            return;
        }
        if (Type.isObject(styleName)) {
            for (let n in styleName) {
                if (styleName.hasOwnProperty(n))
                    elem.style[n] = styleName[n];
            }

        }
    }

    static getStyle(ele, styleName) {
        if (!ele) return;
        styleName = styleName === 'float' && 'cssFloat';
        if (ele.style[styleName]) return ele.style[styleName];
        if (window.getComputedStyle)
            return window.getComputedStyle(ele, null)[styleName];
        if (document.defaultView && document.defaultView.getComputedStyle) {
            styleName = styleName.replace(/([/A-Z])/g, '-$1').toLowerCase();
            let style = document.defaultView.getComputedStyle(ele, '');
            return style && style.getPropertyValue(styleName);
        }
        if (ele.currentStyle) return ele.currentStyle[styleName];
    }

    static isSupport3D() {
        let p_prop = this._getVendorPropertyName('perspective');
        return p_prop && p_prop in document.createElement('div').style;
    }

    static addClass(elem, className) {
        if (!elem || !className || this.hasClass(elem, className)) return;
        if ('classList' in document.documentElement) {
            elem.classList.add(className);
            return;
        }
        elem.className = `${elem.className} ${className}`;
    }

    static hasClass(elem, className) {
        if (!elem || !className) return false;
        if ('classList' in document.documentElement)
            return elem.classList.contains(className);

        return -1 < (' ' + elem.className + ' ').indexOf(' ' + className + ' ');
    }

    static removeClass(elem, className) {
        if (!elem || !className || this.hasClass(elem, className)) return;
        if ('classList' in document.documentElement) {
            elem.classList.remove(className);
            return;
        }

        elem.className = elem.className.replace(new RegExp('(?:^|\\s)' + className + '(?:\\s|$)'), ' ');
    }

    static toggleClass(ele, className) {
        if (this.hasClass(ele, className)) {
            this.removeClass(ele, className)
        } else {
            this.addClass(ele, className)
        }
    }

    static toDomStyle(cssStyle) {
        if (!Type.isString(cssStyle)) return;
        return cssStyle.replace(/\-[a-z]/g, m => m.charAt(1).toUpperCase())
    }

    static toCssStyle(domStyle) {
        if (!Type.isString(domStyle)) return;
        return domStyle.replace(/[A-Z]/g, m => `-${m.toLowerCase()}`)
    }

}