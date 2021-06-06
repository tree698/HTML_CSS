'use strict';

//  함수 선언
function doSomthing(add) {
    console.log(add);
    const result = add(2, 3);
    console.log(result);
}

function add(a, b) {
    const sum = a + b;
    return sum;
}

//  함수 호출
// doSomthing(add);

// const result = add(1, 2);
// console.log(result);

const addFun = add;
console.log(addFun);
const result = addFun(2, 2);
console.log(result);