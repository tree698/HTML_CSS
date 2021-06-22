// Object
// one of the JavaScript's data types
// a collection of related data and/or functionality
// Nearly all objects in JavaScript are instances of Object
// object = { key : value};  


// console.clear();

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
// key는 항상 string type으로...
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


// 5. in operator: property existence check (key in obj)
console.log('name' in ellie);
console.log('age' in ellie);
console.log('random' in ellie);
console.log(ellie.random);



// 6. for..in vs. for..of
// for (key in obj)  object에 있는 key에 대해 순차적으로 순회한다 
for (key in ellie) {
    console.log(key);
}

// for (value of iterable) 배열과 같이 iterable한 각 원소에 대해 순차적으로 순회한다
const array = [1,2,3,4,5];
// for (let i=0 ; i < array.length ; i++) {
//     console.log(array[i]);
// }
for (value of array) {
    console.log(value);
}



// 7. Fun cloning
// object.assign(dest, [obj1, obj2, obj3...])
const user = { name: 'ellie', age: '20'};
// 같은 reference를 가리킨다. 이것은 복사하는 것이 아니다 
const user2 = user;
// 그래서 user2의 이름을 변경하니 user도 함께 변경된다
user2.name = 'coder';
console.log(user);

// object 복사 방법(복사후 별도의 객체가 됨) : old way
const user3 = {}
for (key in user) {
    user3[key] = user[key];
}
console.log(user3);
// user3을 변경하여도 user는 변경되지 않는다. 
user3.name = 'Lee';
console.log(user3);
console.log(user);

// New way
const user4 = {};
Object.assign(user4, user);
console.log(user4);
// user4를 변경하여도 user는 변경되지 않는다. 
user4.name = 'Chan';
console.log(user4);
console.log(user);

// 상기 코드를 줄이면...
const user5 = Object.assign({}, user);
console.log(user5);

// another example
const fruit1 = { color: 'red'};
const fruit2 = { color:'blue', size: 'big'};
const mixed = Object.assign({}, fruit2, fruit1);
// 나중 것(fruit1)이 덮어 쓰면서 출력된다 
console.log(mixed.color);
console.log(mixed.size); 