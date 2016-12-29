# TOC
   - [Type](#type)
     - [#isArray](#type-isarray)
     - [#isObject](#type-isobject)
     - [#isBoolean](#type-isboolean)
     - [#isNumber](#type-isnumber)
     - [#isUndefined](#type-isundefined)
     - [#isNull](#type-isnull)
     - [#isFunction](#type-isfunction)
     - [#isString](#type-isstring)
   - [Verify](#verify)
     - [#isChinese](#verify-ischinese)
     - [#isEmail](#verify-isemail)
     - [#isIDCard](#verify-isidcard)
     - [#isMoney](#verify-ismoney)
     - [#isPhone](#verify-isphone)
     - [#isUrl](#verify-isurl)
<a name=""></a>
 
<a name="type"></a>
# Type
<a name="type-isarray"></a>
## #isArray
isArray([]) should be true.

```js
return (0, _chai.expect)(_Type2.default.isArray([])).to.be.true;
```

isArray([1,2,3] should be true.

```js
return (0, _chai.expect)(_Type2.default.isArray([1, 2, 3])).to.be.true;
```

isArray() should be false.

```js
return (0, _chai.expect)(_Type2.default.isArray()).to.be.false;
```

isArray(1) should be false.

```js
return (0, _chai.expect)(_Type2.default.isArray(1)).to.be.false;
```

isArray(true) should be false.

```js
return (0, _chai.expect)(_Type2.default.isArray(true)).to.be.false;
```

isArray({}) should be false.

```js
return (0, _chai.expect)(_Type2.default.isArray({})).to.be.false;
```

isArray(undefined) should be false.

```js
return (0, _chai.expect)(_Type2.default.isArray(undefined)).to.be.false;
```

isArray(NaN) should be false.

```js
return (0, _chai.expect)(_Type2.default.isArray(NaN)).to.be.false;
```

isArray(null) should be false.

```js
return (0, _chai.expect)(_Type2.default.isArray(null)).to.be.false;
```

<a name="type-isobject"></a>
## #isObject
isObject({}) should be true.

```js
return (0, _chai.expect)(_Type2.default.isObject({})).to.be.true;
```

isObject({a: 1}) should be true.

```js
return (0, _chai.expect)(_Type2.default.isObject({ a: 1 })).to.be.true;
```

isObject([]) should be false.

```js
return (0, _chai.expect)(_Type2.default.isObject([])).to.be.false;
```

isObject([1,2,3] should be false.

```js
return (0, _chai.expect)(_Type2.default.isObject([1, 2, 3])).to.be.false;
```

isObject() should be false.

```js
return (0, _chai.expect)(_Type2.default.isObject()).to.be.false;
```

isObject(1) should be false.

```js
return (0, _chai.expect)(_Type2.default.isObject(1)).to.be.false;
```

isObject(true) should be false.

```js
return (0, _chai.expect)(_Type2.default.isObject(true)).to.be.false;
```

isObject(undefined) should be false.

```js
return (0, _chai.expect)(_Type2.default.isObject(undefined)).to.be.false;
```

isObject(NaN) should be false.

```js
return (0, _chai.expect)(_Type2.default.isObject(NaN)).to.be.false;
```

isObject(null) should be false.

```js
return (0, _chai.expect)(_Type2.default.isObject(null)).to.be.false;
```

<a name="type-isboolean"></a>
## #isBoolean
isBoolean(true) should be true.

```js
return (0, _chai.expect)(_Type2.default.isBoolean(true)).to.be.true;
```

isBoolean(false) should be true.

```js
return (0, _chai.expect)(_Type2.default.isBoolean(false)).to.be.true;
```

isBoolean("true") should be false.

```js
return (0, _chai.expect)(_Type2.default.isBoolean("true")).to.be.false;
```

isBoolean("false") should be false.

```js
return (0, _chai.expect)(_Type2.default.isBoolean("false")).to.be.false;
```

isBoolean({}) should be false.

```js
return (0, _chai.expect)(_Type2.default.isBoolean({})).to.be.false;
```

isBoolean({a: 1}) should be false.

```js
return (0, _chai.expect)(_Type2.default.isBoolean({ a: 1 })).to.be.false;
```

isBoolean([]) should be false.

```js
return (0, _chai.expect)(_Type2.default.isBoolean([])).to.be.false;
```

isBoolean([1,2,3] should be false.

```js
return (0, _chai.expect)(_Type2.default.isBoolean([1, 2, 3])).to.be.false;
```

isBoolean() should be false.

```js
return (0, _chai.expect)(_Type2.default.isBoolean()).to.be.false;
```

isBoolean(1) should be false.

```js
return (0, _chai.expect)(_Type2.default.isBoolean(1)).to.be.false;
```

isBoolean(undefined) should be false.

```js
return (0, _chai.expect)(_Type2.default.isBoolean(undefined)).to.be.false;
```

isBoolean(NaN) should be false.

```js
return (0, _chai.expect)(_Type2.default.isBoolean(NaN)).to.be.false;
```

isBoolean(null) should be false.

```js
return (0, _chai.expect)(_Type2.default.isBoolean(null)).to.be.false;
```

<a name="type-isnumber"></a>
## #isNumber
isNumber(1) should be true.

```js
return (0, _chai.expect)(_Type2.default.isNumber(1)).to.be.true;
```

isNumber(0) should be true.

```js
return (0, _chai.expect)(_Type2.default.isNumber(0)).to.be.true;
```

isNumber(-1) should be true.

```js
return (0, _chai.expect)(_Type2.default.isNumber(-1)).to.be.true;
```

isNumber(Infinity) should be true.

```js
return (0, _chai.expect)(_Type2.default.isNumber(Infinity)).to.be.true;
```

isNumber(-Infinity) should be true.

```js
return (0, _chai.expect)(_Type2.default.isNumber(-Infinity)).to.be.true;
```

isNumber("1") should be false.

```js
return (0, _chai.expect)(_Type2.default.isNumber("1")).to.be.false;
```

isNumber(NaN) should be false.

```js
return (0, _chai.expect)(_Type2.default.isNumber(NaN)).to.be.false;
```

isNumber(true) should be false.

```js
return (0, _chai.expect)(_Type2.default.isNumber(true)).to.be.false;
```

isNumber(false) should be false.

```js
return (0, _chai.expect)(_Type2.default.isNumber(false)).to.be.false;
```

isNumber({}) should be false.

```js
return (0, _chai.expect)(_Type2.default.isNumber({})).to.be.false;
```

isNumber({a: 1}) should be false.

```js
return (0, _chai.expect)(_Type2.default.isNumber({ a: 1 })).to.be.false;
```

isNumber([]) should be false.

```js
return (0, _chai.expect)(_Type2.default.isNumber([])).to.be.false;
```

isNumber([1,2,3] should be false.

```js
return (0, _chai.expect)(_Type2.default.isNumber([1, 2, 3])).to.be.false;
```

isNumber() should be false.

```js
return (0, _chai.expect)(_Type2.default.isNumber()).to.be.false;
```

isNumber(undefined) should be false.

```js
return (0, _chai.expect)(_Type2.default.isNumber(undefined)).to.be.false;
```

isNumber(null) should be false.

```js
return (0, _chai.expect)(_Type2.default.isNumber(null)).to.be.false;
```

<a name="type-isundefined"></a>
## #isUndefined
isUndefined(undefined) should be true.

```js
return (0, _chai.expect)(_Type2.default.isUndefined(undefined)).to.be.true;
```

isUndefined() should be true.

```js
return (0, _chai.expect)(_Type2.default.isUndefined()).to.be.true;
```

isUndefined("undefined") should be false.

```js
return (0, _chai.expect)(_Type2.default.isUndefined("undefined")).to.be.false;
```

isUndefined(null) should be false.

```js
return (0, _chai.expect)(_Type2.default.isUndefined(null)).to.be.false;
```

isUndefined(NaN) should be false.

```js
return (0, _chai.expect)(_Type2.default.isUndefined(NaN)).to.be.false;
```

isUndefined(0) should be false.

```js
return (0, _chai.expect)(_Type2.default.isUndefined(0)).to.be.false;
```

isUndefined("") should be false.

```js
return (0, _chai.expect)(_Type2.default.isUndefined("")).to.be.false;
```

isUndefined(false) should be false.

```js
return (0, _chai.expect)(_Type2.default.isUndefined(false)).to.be.false;
```

isUndefined({}) should be false.

```js
return (0, _chai.expect)(_Type2.default.isUndefined({})).to.be.false;
```

isUndefined([]) should be false.

```js
return (0, _chai.expect)(_Type2.default.isUndefined([])).to.be.false;
```

<a name="type-isnull"></a>
## #isNull
isNull(null) should be true.

```js
return (0, _chai.expect)(_Type2.default.isNull(null)).to.be.true;
```

isNull("null") should be false.

```js
return (0, _chai.expect)(_Type2.default.isNull("null")).to.be.false;
```

isNull(undefined) should be false.

```js
return (0, _chai.expect)(_Type2.default.isNull(undefined)).to.be.false;
```

isNull() should be false.

```js
return (0, _chai.expect)(_Type2.default.isNull()).to.be.false;
```

isNull(NaN) should be false.

```js
return (0, _chai.expect)(_Type2.default.isNull(NaN)).to.be.false;
```

isNull(0) should be false.

```js
return (0, _chai.expect)(_Type2.default.isNull(0)).to.be.false;
```

isNull("") should be false.

```js
return (0, _chai.expect)(_Type2.default.isNull("")).to.be.false;
```

isNull(false) should be false.

```js
return (0, _chai.expect)(_Type2.default.isNull(false)).to.be.false;
```

isNull({}) should be false.

```js
return (0, _chai.expect)(_Type2.default.isNull({})).to.be.false;
```

isNull([]) should be false.

```js
return (0, _chai.expect)(_Type2.default.isNull([])).to.be.false;
```

<a name="type-isfunction"></a>
## #isFunction
isFunction(function(){}) should be true.

```js
return (0, _chai.expect)(_Type2.default.isFunction(function () {})).to.be.true;
```

isFunction(() => {}) should be true.

```js
return (0, _chai.expect)(_Type2.default.isFunction(function () {})).to.be.true;
```

isFunction(class Example{}) should be true.

```js
return (0, _chai.expect)(_Type2.default.isFunction(function Example() {
    _classCallCheck(this, Example);
})).to.be.true;
```

isFunction(null) should be false.

```js
return (0, _chai.expect)(_Type2.default.isFunction(null)).to.be.false;
```

isFunction("null") should be false.

```js
return (0, _chai.expect)(_Type2.default.isFunction("null")).to.be.false;
```

isFunction(undefined) should be false.

```js
return (0, _chai.expect)(_Type2.default.isFunction(undefined)).to.be.false;
```

isFunction() should be false.

```js
return (0, _chai.expect)(_Type2.default.isFunction()).to.be.false;
```

isFunction(NaN) should be false.

```js
return (0, _chai.expect)(_Type2.default.isFunction(NaN)).to.be.false;
```

isFunction(0) should be false.

```js
return (0, _chai.expect)(_Type2.default.isFunction(0)).to.be.false;
```

isFunction("") should be false.

```js
return (0, _chai.expect)(_Type2.default.isFunction("")).to.be.false;
```

isFunction(false) should be false.

```js
return (0, _chai.expect)(_Type2.default.isFunction(false)).to.be.false;
```

isFunction({}) should be false.

```js
return (0, _chai.expect)(_Type2.default.isFunction({})).to.be.false;
```

isFunction([]) should be false.

```js
return (0, _chai.expect)(_Type2.default.isFunction([])).to.be.false;
```

<a name="type-isstring"></a>
## #isString
isString("example") should be true.

```js
return (0, _chai.expect)(_Type2.default.isString("example")).to.be.true;
```

isString("null") should be true.

```js
return (0, _chai.expect)(_Type2.default.isString("null")).to.be.true;
```

isString("undefined") should be true.

```js
return (0, _chai.expect)(_Type2.default.isString("undefined")).to.be.true;
```

isString("") should be true.

```js
return (0, _chai.expect)(_Type2.default.isString("")).to.be.true;
```

isString("NaN") should be true.

```js
return (0, _chai.expect)(_Type2.default.isString("NaN")).to.be.true;
```

isString("0") should be true.

```js
return (0, _chai.expect)(_Type2.default.isString("0")).to.be.true;
```

isString("false") should be true.

```js
return (0, _chai.expect)(_Type2.default.isString("false")).to.be.true;
```

isString(null) should be false.

```js
return (0, _chai.expect)(_Type2.default.isString(null)).to.be.false;
```

isString(undefined) should be false.

```js
return (0, _chai.expect)(_Type2.default.isString(undefined)).to.be.false;
```

isString() should be false.

```js
return (0, _chai.expect)(_Type2.default.isString()).to.be.false;
```

isString(NaN) should be false.

```js
return (0, _chai.expect)(_Type2.default.isString(NaN)).to.be.false;
```

isString(0) should be false.

```js
return (0, _chai.expect)(_Type2.default.isString(0)).to.be.false;
```

isString(false) should be false.

```js
return (0, _chai.expect)(_Type2.default.isString(false)).to.be.false;
```

isString({}) should be false.

```js
return (0, _chai.expect)(_Type2.default.isString({})).to.be.false;
```

isString([]) should be false.

```js
return (0, _chai.expect)(_Type2.default.isString([])).to.be.false;
```

<a name="verify"></a>
# Verify
<a name="verify-ischinese"></a>
## #isChinese
isChinese("飞") should be true.

```js
return (0, _chai.expect)(_Verify2.default.isChinese("飞")).to.be.true;
```

isChinese("飞龙在天") should be true.

```js
return (0, _chai.expect)(_Verify2.default.isChinese("飞龙在天")).to.be.true;
```

isChinese("0飞龙在天") should be false.

```js
return (0, _chai.expect)(_Verify2.default.isChinese("0飞龙在天")).to.be.false;
```

isChinese("飞龙&在天") should be false.

```js
return (0, _chai.expect)(_Verify2.default.isChinese("飞龙&在天")).to.be.false;
```

isChinese("") should be false.

```js
return (0, _chai.expect)(_Verify2.default.isChinese("")).to.be.false;
```

isChinese() should be false.

```js
return (0, _chai.expect)(_Verify2.default.isChinese()).to.be.false;
```

<a name="verify-isemail"></a>
## #isEmail
isEmail("809478662@qq.com") should be true.

```js
return (0, _chai.expect)(_Verify2.default.isEmail("809478662@qq.com")).to.be.true;
```

isEmail("") should be false.

```js
return (0, _chai.expect)(_Verify2.default.isEmail("")).to.be.false;
```

isEmail() should be false.

```js
return (0, _chai.expect)(_Verify2.default.isEmail()).to.be.false;
```

<a name="verify-isidcard"></a>
## #isIDCard
isIDCard("123456789012345678") should be true.

```js
return (0, _chai.expect)(_Verify2.default.isIDCard("123456789012345678")).to.be.true;
```

isIDCard("12345678901234567x") should be true.

```js
return (0, _chai.expect)(_Verify2.default.isIDCard("12345678901234567x")).to.be.true;
```

isIDCard("12345678901234567X") should be true.

```js
return (0, _chai.expect)(_Verify2.default.isIDCard("12345678901234567X")).to.be.true;
```

isIDCard("123456789012345") should be true.

```js
return (0, _chai.expect)(_Verify2.default.isIDCard("123456789012345")).to.be.true;
```

isIDCard(123456789012345678) should be true.

```js
return (0, _chai.expect)(_Verify2.default.isIDCard(123456789012345678)).to.be.true;
```

isIDCard(123456789012345) should be true.

```js
return (0, _chai.expect)(_Verify2.default.isIDCard(123456789012345)).to.be.true;
```

isIDCard("12345678901234") should be false.

```js
return (0, _chai.expect)(_Verify2.default.isIDCard("12345678901234")).to.be.false;
```

isIDCard(12345678901234) should be false.

```js
return (0, _chai.expect)(_Verify2.default.isIDCard(12345678901234)).to.be.false;
```

isIDCard("") should be false.

```js
return (0, _chai.expect)(_Verify2.default.isIDCard("")).to.be.false;
```

isIDCard() should be false.

```js
return (0, _chai.expect)(_Verify2.default.isIDCard()).to.be.false;
```

<a name="verify-ismoney"></a>
## #isMoney
isMoney(10) should be true.

```js
return (0, _chai.expect)(_Verify2.default.isMoney(10)).to.be.true;
```

isMoney(10.0) should be true.

```js
return (0, _chai.expect)(_Verify2.default.isMoney(10.0)).to.be.true;
```

isMoney(10.1) should be true.

```js
return (0, _chai.expect)(_Verify2.default.isMoney(10.1)).to.be.true;
```

isMoney(0) should be true.

```js
return (0, _chai.expect)(_Verify2.default.isMoney(0)).to.be.true;
```

isMoney(0.1) should be true.

```js
return (0, _chai.expect)(_Verify2.default.isMoney(0.1)).to.be.true;
```

isMoney("0") should be true.

```js
return (0, _chai.expect)(_Verify2.default.isMoney("0")).to.be.true;
```

isMoney("10") should be true.

```js
return (0, _chai.expect)(_Verify2.default.isMoney("10")).to.be.true;
```

isMoney("") should be false.

```js
return (0, _chai.expect)(_Verify2.default.isMoney("")).to.be.false;
```

isMoney() should be false.

```js
return (0, _chai.expect)(_Verify2.default.isMoney()).to.be.false;
```

<a name="verify-isphone"></a>
## #isPhone
isPhone(12123456789 should be false.

```js
return (0, _chai.expect)(_Verify2.default.isPhone(12123456789)).to.be.false;
```

isPhone(13123456789) should be true.

```js
return (0, _chai.expect)(_Verify2.default.isPhone(13123456789)).to.be.true;
```

isPhone(14123456789) should be true.

```js
return (0, _chai.expect)(_Verify2.default.isPhone(14123456789)).to.be.true;
```

isPhone(15123456789) should be true.

```js
return (0, _chai.expect)(_Verify2.default.isPhone(15123456789)).to.be.true;
```

isPhone(16123456789 should be false.

```js
return (0, _chai.expect)(_Verify2.default.isPhone(16123456789)).to.be.false;
```

isPhone(17123456789) should be true.

```js
return (0, _chai.expect)(_Verify2.default.isPhone(17123456789)).to.be.true;
```

isPhone(18123456789) should be true.

```js
return (0, _chai.expect)(_Verify2.default.isPhone(18123456789)).to.be.true;
```

isPhone("13123456789") should be true.

```js
return (0, _chai.expect)(_Verify2.default.isPhone("13123456789")).to.be.true;
```

isPhone("") should be false.

```js
return (0, _chai.expect)(_Verify2.default.isPhone("")).to.be.false;
```

isPhone() should be false.

```js
return (0, _chai.expect)(_Verify2.default.isPhone()).to.be.false;
```

<a name="verify-isurl"></a>
## #isUrl
isUrl("http://www.baidu.com") should be true.

```js
return (0, _chai.expect)(_Verify2.default.isUrl("http://www.baidu.com")).to.be.true;
```

isUrl("www.baidu.com") should be false.

```js
return (0, _chai.expect)(_Verify2.default.isUrl("www.baidu.com")).to.be.false;
```

isUrl("http://baidu.com") should be true.

```js
return (0, _chai.expect)(_Verify2.default.isUrl("http://baidu.com")).to.be.true;
```

isUrl("ftp://www.baidu.com") should be true.

```js
return (0, _chai.expect)(_Verify2.default.isUrl("ftp://www.baidu.com")).to.be.true;
```

isUrl("https://www.baidu.com") should be true.

```js
return (0, _chai.expect)(_Verify2.default.isUrl("https://www.baidu.com")).to.be.true;
```

isUrl("") should be false.

```js
return (0, _chai.expect)(_Verify2.default.isUrl("")).to.be.false;
```

isUrl() should be false.

```js
return (0, _chai.expect)(_Verify2.default.isUrl()).to.be.false;
```

