"use strict";
var myName = "VNM";
var myAge = 30;
function getMyName() {
    return myName;
}
function getMyAge(age, prefix) {
    if (prefix === void 0) { prefix = "Ohh"; }
    return prefix + age;
}
console.log(getMyName());
console.log(getMyAge(30));
//функции, которые ничего не возвращают
function consoleLog(str) {
    console.log(str);
}
consoleLog("TestString"); // результат работы функции - undefined
//
function sum(num1, num2) {
    return num1 + num2;
}
console.log(sum(5, 10));
// functional expression
var mySum = sum;
console.log(mySum(10, 20));
