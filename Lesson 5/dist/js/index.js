"use strict";
let a = "Hello";
let b = a;
let c = a;
const addOrConcat = (a, b, c) => {
    if (c === "add")
        return a + b;
    return "" + a + b;
};
let myVal = addOrConcat(2, 2, 'concat');
let myVal1 = addOrConcat(2, 2, 'concat');
console.log(myVal);
console.log(myVal1);
const image = document.querySelector("img");
image.src = "";
