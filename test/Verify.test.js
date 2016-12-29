/**
 * Created by blue on 2016/12/29.
 */
import Verify from '../lib/Verify'
import {expect} from 'chai'

describe('Verify', () => {
    describe('#isChinese', () => {
        it('isChinese("飞") should be true', () => expect(Verify.isChinese("飞")).to.be.true);

        it('isChinese("飞龙在天") should be true', () => expect(Verify.isChinese("飞龙在天")).to.be.true);

        it('isChinese("0飞龙在天") should be false', () => expect(Verify.isChinese("0飞龙在天")).to.be.false);

        it('isChinese("飞龙&在天") should be false', () => expect(Verify.isChinese("飞龙&在天")).to.be.false);

        it('isChinese("") should be false', () => expect(Verify.isChinese("")).to.be.false);

        it('isChinese() should be false', () => expect(Verify.isChinese()).to.be.false);
    });

    describe('#isEmail', () => {
        it('isEmail("809478662@qq.com") should be true', () => expect(Verify.isEmail("809478662@qq.com")).to.be.true);

        it('isEmail("") should be false', () => expect(Verify.isEmail("")).to.be.false);

        it('isEmail() should be false', () => expect(Verify.isEmail()).to.be.false);
    });

    describe('#isIDCard', () => {
        it('isIDCard("123456789012345678") should be true', () => expect(Verify.isIDCard("123456789012345678")).to.be.true);

        it('isIDCard("12345678901234567x") should be true', () => expect(Verify.isIDCard("12345678901234567x")).to.be.true);

        it('isIDCard("12345678901234567X") should be true', () => expect(Verify.isIDCard("12345678901234567X")).to.be.true);

        it('isIDCard("123456789012345") should be true', () => expect(Verify.isIDCard("123456789012345")).to.be.true);

        it('isIDCard(123456789012345678) should be true', () => expect(Verify.isIDCard(123456789012345678)).to.be.true);

        it('isIDCard(123456789012345) should be true', () => expect(Verify.isIDCard(123456789012345)).to.be.true);

        it('isIDCard("12345678901234") should be false', () => expect(Verify.isIDCard("12345678901234")).to.be.false);

        it('isIDCard(12345678901234) should be false', () => expect(Verify.isIDCard(12345678901234)).to.be.false);

        it('isIDCard("") should be false', () => expect(Verify.isIDCard("")).to.be.false);

        it('isIDCard() should be false', () => expect(Verify.isIDCard()).to.be.false);
    });

    describe('#isMoney', () => {
        it('isMoney(10) should be true', () => expect(Verify.isMoney(10)).to.be.true);

        it('isMoney(10.0) should be true', () => expect(Verify.isMoney(10.0)).to.be.true);

        it('isMoney(10.1) should be true', () => expect(Verify.isMoney(10.1)).to.be.true);

        it('isMoney(0) should be true', () => expect(Verify.isMoney(0)).to.be.true);

        it('isMoney(0.1) should be true', () => expect(Verify.isMoney(0.1)).to.be.true);

        it('isMoney("0") should be true', () => expect(Verify.isMoney("0")).to.be.true);

        it('isMoney("10") should be true', () => expect(Verify.isMoney("10")).to.be.true);

        it('isMoney("") should be false', () => expect(Verify.isMoney("")).to.be.false);

        it('isMoney() should be false', () => expect(Verify.isMoney()).to.be.false);
    });

    describe('#isPhone', () => {
        it('isPhone(12123456789 should be false', () => expect(Verify.isPhone(12123456789)).to.be.false);

        it('isPhone(13123456789) should be true', () => expect(Verify.isPhone(13123456789)).to.be.true);

        it('isPhone(14123456789) should be true', () => expect(Verify.isPhone(14123456789)).to.be.true);

        it('isPhone(15123456789) should be true', () => expect(Verify.isPhone(15123456789)).to.be.true);

        it('isPhone(16123456789 should be false', () => expect(Verify.isPhone(16123456789)).to.be.false);

        it('isPhone(17123456789) should be true', () => expect(Verify.isPhone(17123456789)).to.be.true);

        it('isPhone(18123456789) should be true', () => expect(Verify.isPhone(18123456789)).to.be.true);

        it('isPhone("13123456789") should be true', () => expect(Verify.isPhone("13123456789")).to.be.true);

        it('isPhone("") should be false', () => expect(Verify.isPhone("")).to.be.false);

        it('isPhone() should be false', () => expect(Verify.isPhone()).to.be.false);
    });

    describe('#isUrl', () => {
        it('isUrl("http://www.baidu.com") should be true', () => expect(Verify.isUrl("http://www.baidu.com")).to.be.true);

        it('isUrl("www.baidu.com") should be false', () => expect(Verify.isUrl("www.baidu.com")).to.be.false);

        it('isUrl("http://baidu.com") should be true', () => expect(Verify.isUrl("http://baidu.com")).to.be.true);

        it('isUrl("ftp://www.baidu.com") should be true', () => expect(Verify.isUrl("ftp://www.baidu.com")).to.be.true);

        it('isUrl("https://www.baidu.com") should be true', () => expect(Verify.isUrl("https://www.baidu.com")).to.be.true);

        it('isUrl("") should be false', () => expect(Verify.isUrl("")).to.be.false);

        it('isUrl() should be false', () => expect(Verify.isUrl()).to.be.false);
    })

});