// Object
// one of the JavaScript's data types
// a collection of related data and/or functionality
// Nearly all objects in JavaScript are instances of Object

// Object 선언: object literal syntax
const obj1 = {};   
// Object 선언: object constructor systax
const obj2 = new Object();


function print(p) {
    console.log(p.name);
    console.log(p.age);
}

const ellie = { name:'ellie', age: 4};
print(ellie);