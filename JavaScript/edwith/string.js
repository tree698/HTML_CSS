'use strict';

var result = "ab:cd".replace(":", "$");
console.log(result);

var result = "ab:cd".split(":")
console.log(result);
console.log(typeof(result));
console.log(toString.call(result));