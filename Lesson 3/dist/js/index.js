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
    name: "Eddie",
    active: false,
    albums: ["The Jiggy Boo", 12]
};
const greetGuitarist = (guitarist) => {
    return `Hello ${guitarist.name}`;
};
const result = greetGuitarist(evh);
console.log(result);
