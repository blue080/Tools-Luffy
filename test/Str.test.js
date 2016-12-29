/**
 * Created by blue on 2016/12/29.
 */
import Str from '../src/Str'
import {expect} from 'chai'

describe('String', () => {
    describe('#sizeof()', () => {
        it('sizeof("a") should be 1', () => expect(Str.sizeof("a")).to.equal(1));

        it('sizeof("测") should be 3', () => expect(Str.sizeof("测")).to.equal(3));

        it('sizeof("a", "utf-16") should be 2', () => expect(Str.sizeof("a", "utf-16")).to.equal(2));

        it('sizeof("测", "utf-16") should be 2', () => expect(Str.sizeof("测", "utf-16")).to.equal(2));
    });

    describe('#obj2str', () => {
        it('obj2str({a: 1, b: 2}) should be "a=1&b=2"', () => expect(Str.obj2str({a: 1, b: 2})).to.equal("a=1&b=2"));

        it('obj2str([1, 2]) should be ""', () => expect(Str.obj2str([1, 2])).to.equal(""))
    });

    describe('#str2obj', () => {
        it('str2obj("a=1&b=2") should be {a: "1", b: "2"}', () => expect(Str.str2obj("a=1&b=2")).to.deep.equal({a: "1", b: "2"}));

        it('str2obj({a: 1, b: 2}) should be {}', () => expect(Str.str2obj({a: 1, b: 2})).to.deep.equal({}))
    })
});