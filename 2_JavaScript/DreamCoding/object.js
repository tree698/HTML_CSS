// Object
// one of the JavaScript's data types
// a collection of related data and/or functionality
// Nearly all objects in JavaScript are instances of Object
// object = { key : value};



// 1. Literals and properties
// Object 선언: object literal syntax
const obj1 = {};   
// Object 선언: object constructor systax
const obj2 = new Object();


function print(person) {
    console.log(person.name);
    console.log(person.age);
}

const ellie = { name:'ellie', age: 4};
print(ellie);

// JS는 runtime(프로그램이 동작하고 있을때)때 type이 결정되어, 뒤늦게 property를 추가/삭제 가능
ellie.hasJob = true;
console.log(ellie.hasJob);
delete ellie.hasJob;
console.log(ellie.hasJob);




// 2. Computed properties
console.log(ellie.name);
// 배열에서 key값을 compute하여 불러 올수도 있다. 이 경우 key 값은 string이어야 한다
// 코딩할 때는 어떤 값인지 모르고, 실시간으로 값을 받아야 할 경우에 사용한다 
console.log(ellie['name']);
// computed properties를 이용해 다시 추가할 수도 있다
ellie['hasJob'] = 'true';
console.log(ellie.hasJob);

// key값이 어떤것이 올지 모른다
function printValue(obj, key) {
    console.log(obj[key]);
}
// key 값으로 name과 age 등이 올수 있다. 
printValue(ellie, 'name');
printValue(ellie, 'age')





// 3. Property value shorthand
const person1 = { name: 'bob', age:2};
const person2 = { name: 'steve', age:3};
const person3 = { name: 'dave', age:4};
// Constructor function에 의해 간단히 생성 
const person4 = new Person('ellie', 30);
console.log(person4);




// 4. Constructor function
function Person(name, age) {
    this.name = name;
    this.age = age;
}


// 5. in operator: 