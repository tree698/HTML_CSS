'use:strict';

// JavaScript is synchronous
// Execute the code block by order after hoisting
//  hoisting: var, function declaration


// synchronous: 순차적으로 실행
// console.log('1');
// console.log('2');
// console.log('3');


// asychronous: 비순차적 실행
// (첫째)
console.log('1');
// 지정한 시간이 지나면 callback 함수를 호출하는 브라우저 API
// (넷째)
setTimeout(function() {
    console.log('2');
}, 1000)
// (다섯째)
setTimeout(() => console.log('5'), 2000);
// (둘째)
console.log('3');



// Synchronous Callback
// hoisting 되어 상단으로 올라간다
function printImmediately(print) {
    print();
}
// (셋째)
printImmediately(() => console.log('Hello'));


// Asychronous Callback
// hoisting되어 상단으로 올라간다 
function printWithDelay(print, timeout) {
    setTimeout(print, timeout);
}
// (여섯째)
printWithDelay(() => console.log('asychronous'), 2000);




// Callback Hell example
class UserStorage {
    loginUser(id, password, onSuccess, onError) {
        setTimeout(() => {
            if (
                (id === 'ellie' && password === 'dream') ||
                (id === 'coder' && password === 'academy')
            ) {
                onSuccess(id);
            } else {
                onError(new Error('not found'));
            }
        }, 2000);
    }

    getRoles(user, onSuccess, onError) {
        setTimeout(() => {
            if (user === 'ellie') {
                onSuccess({name: 'ellie', role: 'admin'});
            } else {
                onError(new Error('no access'));
            }
        }, 1000);
    }
}

const userStorage = new UserStorage;
const id = prompt('enter your id');
const password = prompt('enter your password');
userStorage.loginUser(
    id,
    password,
    user => {
        userStorage.getRoles(
            user,
            userWithRole => {
                alert(`Hello ${userWithRole.name}, you have a ${userWithRole.role} role`);
            },
            error => {
                console.log(error);
            }
        );
    },
    error => {
        console.log(error);
    }
);
