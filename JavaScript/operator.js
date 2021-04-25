'use strict';


// 1. String concatenation
console.log('my' + 'cat');
console.log('1' + 2);
console.log(`string literals: 1 + 2 = ${1 + 2}`);

// 2. Numeri operators
console.log(1 + 1);
console.log(1 -1);
console.log(1 / 1);
console.log(1 * 1);
console.log(5 % 2);
console.log(2 ** 3);

// 3. Increment and decrement operators
let counter = 2;
const preIncrement = ++counter;
// counter = counter + 1;
// preIncrement = counter;
console.log(`preIncrement: ${preIncrement}, counter: ${counter}`);
const postIncrement = counter++;
// postIncrement = counter;
// counter = counter + 1;
console.log(`postIncrement: ${postIncrement}, counter: ${counter}`);

// 4. Assignment operators
let x = 3;
let y = 6;
x += y;
x -= y;
x *= y;
x /= y;

// 5. Comparison operators
console.log(10 < 6);
console.log(10 <= 6);
console.log(10 > 6);
console.log(10 >= 6);

// 6. Logical operators:  || (or), && (and), ! (not)
const value1 = false;
const value2 = 4 < 2;

// || (or) : 하나만 true면  이후 실행하지 않기에 시간 걸리는 함수를 마지막에 위치 
// find the first true value
console.log(`or: ${value1 || value2 || check()}`);

function check() {
    for (let i =0; i<10; i++) {
        console.log('t');
    }
    return true;
}

// && (and) : 하나만 false면 판명되기에 시간 걸리는 함수를 마지막에 위치 
// find the first falsy value
console.log(`and: ${value1 && value2 && check()}`)

// often used to compress long if-statement
// nullableObject && nullableObject.something
// if (nullableObject != null) {
//     nullableObject.something
// }

// ! (not)
console.log(!value1);


// 7.Equality
const stringFive = '5';
const numberFive = 5;

// == loose equality, with type conversion
console.log(stringFive == numberFive);
console.log(stringFive != numberFive);

// === Strict equalit, no type conversion
console.log(stringFive === numberFive);
console.log(stringFive !== numberFive);

// object equality by reference
const ellie1 = {name: 'ellie'};
const ellie2 = {name: 'ellie'};
const ellie3 = ellie1;
console.log(ellie1 == ellie2);
console.log(ellie1 === ellie2);
console.log(ellie1 === ellie3); 

// equality - puzzler
console.log(0 == false);
console.log(0 === false);
console.log('' == false);
console.log('' === false);
console.log(null == undefined);
console.log(null === undefined); 


// 8. Conditional operators: if
// if, else if, else
const name = 'ellie';
if (name === 'ellie') {
    console.log('Welcome, Ellie!');
} else if (name === 'coder') {
    console.log('You are amazing coder') 
} else {
    console.log('unknown');
}


// 9. Ternary operator: ?
// condition ? value1 : value2;
console.log(name === 'ellie' ? 'yes' : 'no');


// 10. Switch statement
// use for multiple if checks
// use for enum-like value check
// use for multiple type checks in TS
const browser = 'IE';
switch (browser) {
    case 'IE':
        console.log('go away!');
        break;
    case 'Chrom':
    case 'Firefox':
        console.log('love you');
        break;
    default:
        console.log('same all!');
        break;
}


// 11. Loops
// while loops, while the condition is truthy, body code is executed
let i = 3;
while (i > 0) {
    console.log(`while: ${i}`);
    i --;
}


// 12. do while loop, body code is executed first, then check the condition
do {
    console.log(`do while: ${i}`);
    i --
} while (i > 0);


// 13. for loop, for(begin; condition; step)
for (i = 3; i > 0; i--) {
    console.log(`for: ${i}`);
}

for (let i = 3; i > 0; i = i -2) {
    // inline variabel declaration
    console.log(`inline varialbe for: ${i}`);
}

// nested loops
for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 10; j++) {
        console.log(`i: ${i}, i+j: ${i+j}`);
    }
}


// break, continue
