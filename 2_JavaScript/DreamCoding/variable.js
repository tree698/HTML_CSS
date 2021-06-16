// Whole-script strict mode syntax
// JavaScript is very flexible
// flexible == dangerous


// 1. Use strict
// added in ES 5
// use this for valina Javascript

'use strict';

console.log('Hello World!')
let a;
a = 6;

// 2. Variable
// let (added in ES6)   ES6에서 추가됨 

let globalName = 'global Name';
{
    let name = 'ellie';
    console.log(name);
    name = 'hello';
    console.log(name);
    console.log(globalName);
}
console.log(name);
console.log(globalName);


// var (don't ever use this)
// var hoisting (move, declaration from bottom to top)
// has no block scope   블럭 사용이 안된다 
console.log(age);
age = 4
console.log(age);
var age;



// 3. Constant
// favor immutable data type always for a few reasons
// - security, thread safety, reduce human mistakes
const daysInWeek = 7;
const maxNumber = 5;

// 자바스크립트에서 변수는
// mutable type의 let  vs. immutable type의 const



// 4. Variable types
// primitive, single item: number, string, boolean, null, undefined, symbol
// object, box container
// function, first-class function(함수도 변수로 할당 가능하고 함수로 return도 가능)
const count = 17;  
const size = 17.1;
console.log(count);
console.log(size);
console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`);

// compare
console.log('value: ' + count + ', type: ' + typeof count);

// number - special numeric values: infinity, -infinity, NaN
const infinity = 1 / 0;
const negativeInfinity = -1 / 0;
const nAn = 'not a number' / 2;
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

// bigInt (fairly new, dont use it yet)  over (-2**53) ~ 2**53
const bigInt = 1234567890123456789012345678901234567890n; 
console.log(`value: ${bigInt}, type: ${typeof bigInt}`);
Number.MAX_SAFE_INTEGER;

// String
const char = 'c';
const brendan = 'brendan';
const greeting = 'hello' + brendan;
console.log(`value: ${greeting}, type: ${typeof greeting}`);
// template literals (string)
const helloBob = `hi ${brendan}!`;
console.log(`value: ${helloBob}, type: ${typeof helloBob}`);
// compare (백태그와 달러를 사용하지 않는다면..)
console.log('value: ' + helloBob + ' type: ' + typeof helloBob);


// boolean
// false: 0, null, undefined, NaN, ''
// true: any other value
const canRead = true;
const test = 3 < 1
console.log(`value: ${canRead}, type: ${typeof canRead}`);
console.log(`value: ${test}, type: ${typeof test}`);

// null
let nothing = null;
console.log(`value: ${nothing}, type: ${typeof nothig}`);

// undefined
let x;
console.log(`value: ${x}, type: ${typeof x}`);

// symbol, create unique identifiers for objects
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2);   
console.log(`value: ${symbol1.description}, type: ${typeof symbol1.description}`);

const gsymbol1 = Symbol.for('id');
const gsymbol2 = Symbol.for('id');
console.log(gsymbol1 === gsymbol2);

// object, real-life object, data structure
const ellie = {name:'ellie', age:20};
ellie.age = 21;



// 5. Dynamic typing: dynamically typed language
let text = 'hello';
// .charAT(0)  => slicing
console.log(text.charAt(0)); 
console.log(`value: ${text}, type: ${typeof text}`);
text = 1;
console.log(`value: ${text}, type: ${typeof text}`);
// 75
text = '7' + 5;
console.log(`value: ${text}, type: ${typeof text}`);
// 4
text = '8' / '2';
console.log(`value: ${text}, type: ${typeof text}`);
// hello에서 4로 변경되어 에러 발생
// console.log(text.charAt(0));