'use strict';

// async & await
// clear style of using promise


// 1. async
function fetchUser() {
    // do network request in 10 secs...
    return 'ellie';
}
const user = fetchUser();
console.log(user);


function fetchUser1() {
    return new Promise((resolve, reject) => {
        // do network request in 10 secs...
        resolve('ellie');
    })
}
const user1 = fetchUser1();
user1.then(console.log);
console.log(user1);


async function fetchUser2() {
    // do network request in 10 secs...
    return 'ellie';
    
}
const user2 = fetchUser2();
user1.then(console.log);
console.log(user2);


// 2. await
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function getApple() {
    await delay(3000);
    return '🎈';
}

async function getBanana() {
    await delay(3000);
    return '🍌';
}