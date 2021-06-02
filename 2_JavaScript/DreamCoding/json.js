// JSON (JavaScript Object Notation)
// simplest data interchange format
// lightweight text-based structure
// easy to Read 
// key-value pair
// used for serialization and transmission of data between the network connections
// independent programming language and platform
// object <===> string


// 1. Object to JSON  =>  stringfy(obj)
let json = JSON.stringify(true);
console.log(json);

json = JSON.stringify(['apple', 'banana']);
console.log(json);

const rabbit = {
    name: 'tori',
    color: 'white',
    size: null,
    birthDate: new Date(),
    jump: () => {
        console.log(`${name} can jump`);
    },
};

json = JSON.stringify(rabbit);
console.log(json);

// replacer로 원하는 목록만 추가 
json = JSON.stringify(rabbit, ['name', 'color']);
console.log(json);

json = JSON.stringify(rabbit, (key, value) => {
    console.log(`key: ${key}, value: ${value}`);
    return key === 'name' ? 'ellie' : value;
});
console.log(json);



// 2. JSON to Object  =>  parse(json) 
const obj = JSON.parse(json);
console.log(obj);

// 당초 만들었던 jump 함수는 json으로 만들때 포함되지 않아 obj.jump() / birthDate은 에러
rabbit.jump()
// obj.jump()
console.log(rabbit.birthDate.getDate());
// console.log(obj.birthDate.getDate());


// revive로 json으로 만들때 포함되지 않은 함수등을 다시 포함 
const obj2 = JSON.parse(json, (key, value) => {
    console.log(`key: ${key}, value: ${value}`);
    return key === 'birthDate' ? new Date(value) : value;
});

// 잘 실행됨
console.log(obj2.birthDate.getDate());
// jump 함수도 실행되기 위해서는 55줄의 코드에 추가해야 한다 
// obj2.jump();





