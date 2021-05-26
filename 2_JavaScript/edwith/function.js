'use strict';


// 1. Function declaration
// function name(param1, param2) { body... return}
// one function === one thing
// naming: doSomething, command, verb
// e.g. createCaredAndPoint(x) --> createCard, createPoint
// function is object in JS (변수에 저장, 파라미터로 전달 등)



function printName(firstname) {
    var myname = "Chanwoo";
    return "Name is " + firstname + " " + myname;
}

console.log(printName("Lee"));


// 변수로 함수를 받을 수 있다 
function printName2() {

    let inner = function() {
        return "Lee Chanwoo";
    }

    let result = inner();
    console.log(result);
}
printName2();


// 함수 표현식은 호이스팅이 일어나지 않아 undefined 에러 발생 
// function printName3() {

//     let result = inner();
//     console.log(result);

//     let inner = function() {
//         return "Lee Chanwoo";
//     }

// }
// printName3();


// 함수 선언식은 호이스팅이 일어나 정상 출력 
function printName4() {

    let result = inner();
    console.log(result);

    function inner() {
        return "Lee Chanwoo";
    }

}
printName4();


// hoisting: 함수 안에 있는 변수들을 모두 끌어 올려서 선언 


// 자바스크립트 함수는 실행되기 전에 함수 안에 필요한 변수값들을 모두 모아서 유효범위 최상단에 선언한다
// JS parser가 함수실행 전에 해당 함수를 한 번 훑는다
// 함수 안에 존재하는 변수/함수선언에 대한 정보를 기억하고 있다가 실행한다
// 유효범위는 함수 블록 {}

// (var) & (함수 선언식)만 호이스팅이 일어나며
// (let/const) & (함수 표현식)에서는 호이스팅이 발생하지 않는다 


// 함수 선언식
function foo(){

}

// 함수 표현식
var foo2 = function(){

}


function a() {
    console.log(arguments);
    for(var i=0; i<arguments.length; i++){
        console.log(arguments[i]);
    }
}
a(1,2,3);


function getName(name) {
    return "Kim" + name;
}
// arrow 함수로 표현
var getName = (name) => "Kim" + name; 