'use strict';

// Function
// fundamental building block in the program
// subprogram can be used multiple times
// performs a task or calculates a vlue


// 1. Function declaration
// function name(param1, param2) {body...return}
// one function === one thing
// naming: doSomething, command, verb
// e.g. createCardAndPoint(x) -> createCard, createPoint
// function is object in JS (변수에 저장, 파라미터로 전달 등 가능)


function printHello() {
    console.log('Hello')
}
printHello()

function log(message) {
    console.log(message);
}
log('Hello@');
log(1234);


// 2. Parameters
// premitive parameters: passed by value
// object parameters: passed by reference
function changeName(obj) {
    obj.name = 'coder';
}
const ellie = {name:'ellie'};
changeName(ellie);
console.log(ellie);



// 3. Default parameters (added in ES6)
function showMessage(message, from = 'unknown') {
    console.log(`${message} by ${from}`);
}
showMessage('Hi!');

// 예전에는 if를 삽입하여 매개변수가 하나만 입력될 경우 대비했다 
// function showMessage(message, from) {
//     if (from === undefined) {
//         from = 'unknown';
//     }
//     console.log(`${message} by ${from}`)
// }
// showMessage('Hi');





// 4. Rest parameters (added in ES6)
// arg는 배열을 가리킨다
function printAll(...args) {
    for (let i = 0; i < args.length; i ++) {
        console.log(args[i])
    }

    for (const arg of args) {
        console.log(arg);
    }

    args.forEach((arg) => console.log(arg));
}
printAll('dream', 'coding', 'ellie');





// 5. Local scope
// 밖에서는 안이 보이지 않고 안에서만 밖을 볼 수 있다 
let globalMessage = 'global';    //global variable
function printMessage() {
    let message = 'hello';
    console.log(message);       //local variable
    console.log(globalMessage);
    function printAnother(){
        // 안에서는 밖이 보이기에 출력됨
        console.log(message);    
        let childMessage = 'hello'
    }
    // 밖에서는 안이 안보이기에 에러
    // console.log(childMessage);
}
printMessage();

// message는 지역변수이기에 밖에서는 출력이 안된다 
// console.log(message);




// 6. Return a value
function sum(a, b) {
    return a + b;
}
const result = sum(1,2);
console.log(result);
console.log(`sum: ${sum(1,2)}`);




// 7. Early return, early exit
// bad
function upgradeUser(user) {
    if (user.point > 10) {
        // long upgrade logic...
    }
}

// good
function upgradeUsser (User) {
    if (user.point <= 10) {
        return;
    }
    //long upgrade logic...
}



// First-class function
// functions are treated like any other variable
// can be assigned as a value to variable
// can be passed as an argument to other functions
// can be returned by another function 


// 1. Function expression
// a function declaration(함수 선언식) can be called earlier than it is defined. (hoisted)
// a function expression(함수 표현식) is created when the execution reaches it
const print = function() {  //anonymous function
    console.log('print');
};
print();
const printAgain = print;
printAgain();
const sumAgain = sum;
console.log(sumAgain(1,3));



// 2. Callback function using function expression
// 매개변수로 함수도 받을 수 있다 
function randomQuiz(answer, printYes, printNo) {
    if(answer === 'love you') {
        printYes();
    } else {
        printNo();
    }
}

const printYes = function() {
    console.log('yes!');
};
const printNo = function() {
    console.log('no!');
};
randomQuiz('wrong', printYes, printNo);
randomQuiz('love you', printYes, printNo);



// Arrow function
// always anonymous

// const simplePrint = function() {
//     console.log('simplePrint');
// };
const simplePrint = () => console.log('simplePrint')
const add = (a, b) => a + b;
const sumpleMultiply = (a, b) => {
    // do something more
    return a * b;
}


// IIFE: Immediately Invoked Function Expression (선언함과 동시에 호출)
(function hello() {
    console.log('IIEF');
})();




// (Quize) 💖
// function calculate(command, a, b)
// command: add, substract, divide, multiply, remainder
function calculate (command, a, b) {
    if (command === add) {
        return a + b;
    } else if (command === substract) {
        return a - b;
    } else if (command === divide) {
        return a / b;
    } else if (command === multiply) {
        return a * b;
    } else if (command === remainder) {
        return a % b;
    }
}

// switch calculate (command, a, b) {
//     case 'add':
//         return a + b;
//         break;
//     case 'substract':
//         return a -b;
//         break;
// }

console.log(calculate(substract, 1, 3));

