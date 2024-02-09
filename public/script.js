"use strict";
const greeting = "Hello, TypeScript!";
console.log(greeting);
function mult(a, b) {
    return a * b;
}
;
console.log(`Product is ${mult(512, 2)}`);
function isEven(a) {
    return a % 2 === 0;
}
;
console.log(`Number is even: ${isEven(-17)}`);
function greetUser(a) {
    console.log(`Hello, dear friend ${a}!`);
}
;
greetUser("Galina");
function filterPositivNumber(arr) {
    return arr.filter((e) => e > 0);
}
;
console.log(`Array of positiv numbers is ${filterPositivNumber([-7, 0, 512, 2, -1908, 78, -65, 59, 7, 7])}`);
