'use strick';

// number, string, boolean, null, undefined  =>  primitive 
let num = '2';
let num2 = num;
console.log(num);
console.log(num2);

num2 = 3
console.log(num);
console.log(num2);


// object => obj는 주소를 가지고 있음 
let obj = {
    name: 'ellie',
    age: 5,
};
console.log(obj.name)

// obj와 obj2는 동일 주소를 가짐
let obj2 = obj;
console.log(obj.name);
console.log(obj2.name);

// 어느 하나를 변경하면 모두 변경된
obj.name = 'Lee';
console.log(obj.name);
console.log(obj2.name);


// ==================================
let a = 2;
a = 5;

// const는 변경 안됨
const test = 2;
// test = 4;
// ================================


const obj3 = {
    name: 'ellie',
    age: 5,
};
// const로 되어 있어서 내용변경 불가능
// obj3 = {
//     name: 'Lee',
//     age: 7,
// };

// 그러나 obj3가 가지고 있는 주소로 레퍼런스 변경은 가능
obj3.name = 'Steve';
console.log(obj3.name);