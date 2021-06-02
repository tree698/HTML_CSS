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

