"use strict";
let employee;
function rialToToman(value) {
    if (typeof value === 'number')
        return value / 10;
    return parseInt(value) / 10;
}
;
let feed = {
    isBad: false,
    isGood: true,
};
let num = 50;
let str = 'str1';
let mx = 50;
num = 100;
str = 'str2';
mx = 'str';
function canNull(name) {
    if (name)
        console.log(name);
    else
        console.log('Invalid.');
}
;
canNull(null);
let objc = {};
console.log(objc === null || objc === void 0 ? void 0 : objc.birth);
let arr = null;
arr === null || arr === void 0 ? void 0 : arr[0];
let logger = null;
logger === null || logger === void 0 ? void 0 : logger('this');
let value1 = null;
let value2 = 0;
console.log(`${value1 !== null && value1 !== void 0 ? value1 : 30} and ${value2 !== null && value2 !== void 0 ? value2 : 30}`);
console.log(`${value1 ? value1 : 30} and ${value2 ? value2 : 30}`);
let element = document.getElementById('input1');
let element2 = document.getElementById('input2');
element2.value;
let element3 = document.getElementById('input3');
element3.value;
function func1(value) {
    return value;
}
function func2(value) {
    if (typeof value === 'string') {
        console.log(value.toUpperCase());
    }
}
function infiniteLoop() {
    while (true) {
    }
}
infiniteLoop();
//# sourceMappingURL=Part2.js.map