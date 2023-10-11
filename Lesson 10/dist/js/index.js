"use strict";
// UTILITY TYPES 
const updateAssignment = (assign, propsToUpdate) => {
    return Object.assign(Object.assign({}, assign), propsToUpdate);
};
const assign1 = {
    studentId: "One",
    title: "Undergraduate",
    grade: 100
};
console.log(updateAssignment(assign1, { verified: true }));
const assignGraded = updateAssignment(assign1, { verified: false });
console.log(assignGraded);
// Required and Readonly 
const recordAssignment = (assign) => {
    return assign;
};
recordAssignment(Object.assign(Object.assign({}, assignGraded), { verified: true }));
// Record 
const hexColorMap = {
    red: "FF0000",
    green: "00FF00",
    blue: "0000FF"
};
const finalGrades = {
    Sara: "B",
    Kelly: "E"
};
console.log(finalGrades.Kelly);
const gradeData = {
    Sara: { assign1: 85, assign2: 90 },
    Kelly: { assign1: 98, assign2: 70 }
};
console.log(gradeData.Sara.assign1);
const score = {
    studentId: "Stu1",
    grade: 100
};
console.log(score);
const preview = {
    title: "Big man",
    grade: 300
};
console.log(preview);
// ReturnType 
//type newAssign = {title:string, points:number }
const createNewAssign = (title, points) => {
    return { title, points };
};
console.log(createNewAssign("Namaste", 12));
const tsAssign = createNewAssign("Fellas", 12);
console.log(tsAssign);
const assignArgs = ["Generic", 200];
const tsAssign2 = createNewAssign(...assignArgs);
console.log(tsAssign2);
// Awaited - helps us with the ReturnType of a Promise 
