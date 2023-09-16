"use strict";
let username;
const sum = (a, b) => {
    return a + b.toString();
};
const logMsg = (message) => {
    console.log(message);
};
logMsg(sum(1, 2));
const multiply = function (a, b) {
    return a + b;
};
logMsg(multiply(1, 2));
const addAll = (a, b, c) => {
    if (typeof (c) !== "undefined") {
        return a + b + c;
    }
    return a + b;
};
logMsg(addAll(1, 2));
logMsg(addAll(1, 2, 3));
const total = (a, ...nums) => {
    return nums.reduce((prev, curr) => prev + curr);
};
logMsg(total(1, 2, 3, 4, 5));
const createError = (errMsg) => {
    throw new Error(errMsg);
};
