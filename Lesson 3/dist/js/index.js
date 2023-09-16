"use strict";
let stringArr = ["Hey", "Dave", "One"];
let guitars = ["Les Paul", "Strat", 5150];
let mixedData = ["EVH", 1984, true];
stringArr[0] = "53";
guitars.push(1984);
mixedData.push(false);
let myTuple = ["Dave", 51, true];
let mixed = ['John', 1, false];
let myObj = {
    name: "John Doe",
    age: 32
};
let evh = {
    name: "John Doe",
    active: false,
    albums: ["The Jiggy Boo", 12]
};
const greetGuitarist = (guitarist) => {
    if (guitarist.name) {
        return `Hello ${guitarist.name.toUpperCase()}`;
    }
    return `Hello world`;
};
const result = greetGuitarist(evh);
console.log(result);
var Grade;
(function (Grade) {
    Grade[Grade["U"] = 0] = "U";
    Grade[Grade["D"] = 1] = "D";
    Grade[Grade["C"] = 2] = "C";
    Grade[Grade["B"] = 3] = "B";
    Grade[Grade["A"] = 4] = "A";
})(Grade || (Grade = {}));
