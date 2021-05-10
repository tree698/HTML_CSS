'use strict';

var result = "ab:cd".replace(":", "$");
console.log(result);

var result = "ab:cd".split(":")
console.log(result);
console.log(typeof(result));
console.log(toString.call(result));

// toString() 은 문자열을 반환하는 object의 대표적인 방법이다