"use strict";
const todaysTransaction1 = {
    Pizza: 20,
    Books: 21,
    Job: 12
};
let prop = 'Pizza';
console.log(todaysTransaction1['Pizza']);
console.log(todaysTransaction1[prop]);
const netsTransaction = (transactions) => {
    let total = 0;
    for (const transaction in transactions) {
        total += transactions[transaction];
    }
    return total;
};
console.log(netsTransaction(todaysTransaction1));
const newUser = {
    name: "John Doe",
    age: 32,
    isEmployed: true
};
for (const user in newUser) {
    console.log(newUser[user]);
}
Object.keys(newUser).map(key => {
    console.log(newUser[key]);
});
const getFullDetails = (user) => {
    return `${user.name} is ${user.age} years old and employment status is ${user.isEmployed}`;
};
const logUserKey = (newUser, key) => {
    console.log(`Student ${key}: ${newUser[key]}`);
};
logUserKey(newUser, "name");
const result = getFullDetails(newUser);
console.log(result);
