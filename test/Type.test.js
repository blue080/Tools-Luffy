/**
 * Created by blue on 2016/12/28.
 */
import Type from '../src/Type'
import {expect} from 'chai'

describe('Type', () => {
    describe('#isArray', () => {
        it('isArray([]) should be true', () => expect(Type.isArray([])).to.be.true);

        it('isArray([1,2,3] should be true', () => expect(Type.isArray([1, 2, 3])).to.be.true);

        it('isArray() should be false', () => expect(Type.isArray()).to.be.false);

        it('isArray(1) should be false', () => expect(Type.isArray(1)).to.be.false);

        it('isArray(true) should be false', () => expect(Type.isArray(true)).to.be.false);

        it('isArray({}) should be false', () => expect(Type.isArray({})).to.be.false);

        it('isArray(undefined) should be false', () => expect(Type.isArray(undefined)).to.be.false);

        it('isArray(NaN) should be false', () => expect(Type.isArray(NaN)).to.be.false);

        it('isArray(null) should be false', () => expect(Type.isArray(null)).to.be.false);
    });

    describe('#isObject', () => {
        it('isObject({}) should be true', () => expect(Type.isObject({})).to.be.true);

        it('isObject({a: 1}) should be true', () => expect(Type.isObject({a: 1})).to.be.true);

        it('isObject([]) should be false', () => expect(Type.isObject([])).to.be.false);

        it('isObject([1,2,3] should be false', () => expect(Type.isObject([1, 2, 3])).to.be.false);

        it('isObject() should be false', () => expect(Type.isObject()).to.be.false);

        it('isObject(1) should be false', () => expect(Type.isObject(1)).to.be.false);

        it('isObject(true) should be false', () => expect(Type.isObject(true)).to.be.false);

        it('isObject(undefined) should be false', () => expect(Type.isObject(undefined)).to.be.false);

        it('isObject(NaN) should be false', () => expect(Type.isObject(NaN)).to.be.false);

        it('isObject(null) should be false', () => expect(Type.isObject(null)).to.be.false);
    });

    describe('#isBoolean', () => {
        it('isBoolean(true) should be true', () => expect(Type.isBoolean(true)).to.be.true);

        it('isBoolean(false) should be true', () => expect(Type.isBoolean(false)).to.be.true);

        it('isBoolean("true") should be false', () => expect(Type.isBoolean("true")).to.be.false);

        it('isBoolean("false") should be false', () => expect(Type.isBoolean("false")).to.be.false);

        it('isBoolean({}) should be false', () => expect(Type.isBoolean({})).to.be.false);

        it('isBoolean({a: 1}) should be false', () => expect(Type.isBoolean({a: 1})).to.be.false);

        it('isBoolean([]) should be false', () => expect(Type.isBoolean([])).to.be.false);

        it('isBoolean([1,2,3] should be false', () => expect(Type.isBoolean([1, 2, 3])).to.be.false);

        it('isBoolean() should be false', () => expect(Type.isBoolean()).to.be.false);

        it('isBoolean(1) should be false', () => expect(Type.isBoolean(1)).to.be.false);

        it('isBoolean(undefined) should be false', () => expect(Type.isBoolean(undefined)).to.be.false);

        it('isBoolean(NaN) should be false', () => expect(Type.isBoolean(NaN)).to.be.false);

        it('isBoolean(null) should be false', () => expect(Type.isBoolean(null)).to.be.false);
    });

    describe('#isNumber', () => {
        it('isNumber(1) should be true', () => expect(Type.isNumber(1)).to.be.true);

        it('isNumber(0) should be true', () => expect(Type.isNumber(0)).to.be.true);

        it('isNumber(-1) should be true', () => expect(Type.isNumber(-1)).to.be.true);

        it('isNumber(Infinity) should be true', () => expect(Type.isNumber(Infinity)).to.be.true);

        it('isNumber(-Infinity) should be true', () => expect(Type.isNumber(-Infinity)).to.be.true);

        it('isNumber("1") should be false', () => expect(Type.isNumber("1")).to.be.false);

        it('isNumber(NaN) should be false', () => expect(Type.isNumber(NaN)).to.be.false);

        it('isNumber(true) should be false', () => expect(Type.isNumber(true)).to.be.false);

        it('isNumber(false) should be false', () => expect(Type.isNumber(false)).to.be.false);

        it('isNumber({}) should be false', () => expect(Type.isNumber({})).to.be.false);

        it('isNumber({a: 1}) should be false', () => expect(Type.isNumber({a: 1})).to.be.false);

        it('isNumber([]) should be false', () => expect(Type.isNumber([])).to.be.false);

        it('isNumber([1,2,3] should be false', () => expect(Type.isNumber([1, 2, 3])).to.be.false);

        it('isNumber() should be false', () => expect(Type.isNumber()).to.be.false);

        it('isNumber(undefined) should be false', () => expect(Type.isNumber(undefined)).to.be.false);

        it('isNumber(null) should be false', () => expect(Type.isNumber(null)).to.be.false);
    });

    describe('#isUndefined', () => {
        it('isUndefined(undefined) should be true', () => expect(Type.isUndefined(undefined)).to.be.true);

        it('isUndefined() should be true', () => expect(Type.isUndefined()).to.be.true);

        it('isUndefined("undefined") should be false', () => expect(Type.isUndefined("undefined")).to.be.false);

        it('isUndefined(null) should be false', () => expect(Type.isUndefined(null)).to.be.false);

        it('isUndefined(NaN) should be false', () => expect(Type.isUndefined(NaN)).to.be.false);

        it('isUndefined(0) should be false', () => expect(Type.isUndefined(0)).to.be.false);

        it('isUndefined("") should be false', () => expect(Type.isUndefined("")).to.be.false);

        it('isUndefined(false) should be false', () => expect(Type.isUndefined(false)).to.be.false);

        it('isUndefined({}) should be false', () => expect(Type.isUndefined({})).to.be.false);

        it('isUndefined([]) should be false', () => expect(Type.isUndefined([])).to.be.false);
    });

    describe('#isNull', () => {
        it('isNull(null) should be true', () => expect(Type.isNull(null)).to.be.true);

        it('isNull("null") should be false', () => expect(Type.isNull("null")).to.be.false);

        it('isNull(undefined) should be false', () => expect(Type.isNull(undefined)).to.be.false);

        it('isNull() should be false', () => expect(Type.isNull()).to.be.false);

        it('isNull(NaN) should be false', () => expect(Type.isNull(NaN)).to.be.false);

        it('isNull(0) should be false', () => expect(Type.isNull(0)).to.be.false);

        it('isNull("") should be false', () => expect(Type.isNull("")).to.be.false);

        it('isNull(false) should be false', () => expect(Type.isNull(false)).to.be.false);

        it('isNull({}) should be false', () => expect(Type.isNull({})).to.be.false);

        it('isNull([]) should be false', () => expect(Type.isNull([])).to.be.false);
    });

    describe('#isFunction', () => {
        it('isFunction(function(){}) should be true', () => expect(Type.isFunction(function(){})).to.be.true);

        it('isFunction(() => {}) should be true', () => expect(Type.isFunction(() => {})).to.be.true);

        it('isFunction(class Example{}) should be true', () => expect(Type.isFunction(class Example{})).to.be.true);

        it('isFunction(null) should be false', () => expect(Type.isFunction(null)).to.be.false);

        it('isFunction("null") should be false', () => expect(Type.isFunction("null")).to.be.false);

        it('isFunction(undefined) should be false', () => expect(Type.isFunction(undefined)).to.be.false);

        it('isFunction() should be false', () => expect(Type.isFunction()).to.be.false);

        it('isFunction(NaN) should be false', () => expect(Type.isFunction(NaN)).to.be.false);

        it('isFunction(0) should be false', () => expect(Type.isFunction(0)).to.be.false);

        it('isFunction("") should be false', () => expect(Type.isFunction("")).to.be.false);

        it('isFunction(false) should be false', () => expect(Type.isFunction(false)).to.be.false);

        it('isFunction({}) should be false', () => expect(Type.isFunction({})).to.be.false);

        it('isFunction([]) should be false', () => expect(Type.isFunction([])).to.be.false);
    });

    describe('#isString', () => {
        it('isString("example") should be true', () => expect(Type.isString("example")).to.be.true);

        it('isString("null") should be true', () => expect(Type.isString("null")).to.be.true);

        it('isString("undefined") should be true', () => expect(Type.isString("undefined")).to.be.true);

        it('isString("") should be true', () => expect(Type.isString("")).to.be.true);

        it('isString("NaN") should be true', () => expect(Type.isString("NaN")).to.be.true);

        it('isString("0") should be true', () => expect(Type.isString("0")).to.be.true);

        it('isString("false") should be true', () => expect(Type.isString("false")).to.be.true);

        it('isString(null) should be false', () => expect(Type.isString(null)).to.be.false);

        it('isString(undefined) should be false', () => expect(Type.isString(undefined)).to.be.false);

        it('isString() should be false', () => expect(Type.isString()).to.be.false);

        it('isString(NaN) should be false', () => expect(Type.isString(NaN)).to.be.false);

        it('isString(0) should be false', () => expect(Type.isString(0)).to.be.false);

        it('isString(false) should be false', () => expect(Type.isString(false)).to.be.false);

        it('isString({}) should be false', () => expect(Type.isString({})).to.be.false);

        it('isString([]) should be false', () => expect(Type.isString([])).to.be.false);
    });

});