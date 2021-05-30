'use:strict';

// 1. Declaration
const arr1 = new Array();
const arr2 = [1,2]; 


// 2. Index position
const fruits = ['apple', 'banna'];
console.log(fruits)
console.log(fruits.length);
console.log(fruits[0]);
// 마지막 원소 출력 
console.log(fruits[fruits.length - 1]);


// 3. Looping over an array
// print all fruits
// a. for
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}
// b. for of
for (let i of fruits) {
    console.log(i);
}
// c. forEach : 배열에 있는 value들 마다 내가 전달한 함수를 출력한다 
fruits.forEach(function(value, index, array) {
    console.log(value, index, array);
})
// 이름이 없는 function은 arrow function을 쓸수 있다
fruits.forEach((fruit, index) => console.log(fruit, index));


// 4. Addition, deletion, copy
// push: add an item to the end
fruits.push('straberry', 'peach');
console.log(fruits);
// pop: remove an item from the end
const poped = fruits.pop();
console.log(fruits);
console.log(poped);
// unshift: add an item to the beginning
fruits.unshift('cherry')
console.log(fruits)
// shift: remove an item from the beginning
fruits.shift();
console.log(fruits);

// note!  shift, unshift are slower than pop and push
// splice: remove an item by index position => (시작지점, 삭제 개수)
fruits.push('💖','🍔','🍤');
console.log(fruits);
// 삭제 개수를 명시하지않으면 시작점부터 모두 삭제함
fruits.splice(1, 1);
console.log(fruits);
// 삭제와 추가를 동시에 할수 있다 
fruits.splice(1, 1, '🍈', '🍊');
console.log(fruits)

// combine two arrays
const tree = ['🌳','🌴'];
const mix = fruits.concat(tree);
console.log(mix);


// 5. Searching
// find the index
console.clear()
console.log(fruits);
console.log(fruits.indexOf('🍊'));
// 없을 경우 -1 출력
console.log(fruits.indexOf('c'));
// includes: search 기능이 있고 없을 경우 false 출력 
console.log(fruits.includes('c'));

// 원소가 중복되어 있을 경우
fruits.push('🍈');
console.log(fruits);
// 앞에 있는 것부터
console.log(fruits.indexOf('🍈'));
// 뒤에 있는 것부터 
console.log(fruits.lastIndexOf('🍈'));






