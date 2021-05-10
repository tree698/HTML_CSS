'use strict';

if(true) console.log(true)
else console.log(false)

let a = "something";
let result = (a) ? "ok" : "not ok";
console.log(result);

let a2 = "";
let result2 = (a2) ? "ok" : "not ok";
console.log(result2);

var arr = [1,2,3];
for(var i=0; i < arr.length; i++){

// arr.length를 매번 계산하므로 부하가 걸림   
}

for(var i=0, len=arr.length; i<len; i++){

// arr.length를 변수로 지정 
}

for(var i=len, len=arr; i<len; i--){

// 경우에 따라 성능개선을 위해 i를 줄여나감 / reserve
}

// forEach, for-of, for-in 