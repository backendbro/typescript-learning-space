"use strict";
const todaysTransactions = {
    Pizza: -10,
    Books: -30,
    Job: 22
};
const todaysNet = (transactions) => {
    let total = 0;
    for (const transaction in transactions) {
        total += transactions[transaction];
    }
    return total;
};
const student = {
    name: "John Doe",
    GPA: 12,
    classes: [200, 300]
};
for (const key in student) {
    console.log(`${key}:  ${student[key]}`);
}
for (const key in student) {
    console.log(`${key}: ${student[key]}`);
}
for (const key in student) {
    console.log(`${key}: ${student[key]}`);
}
const logStudentKey = (student, key) => {
    console.log(`Student: ${student[key]}`);
};
