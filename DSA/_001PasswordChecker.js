let str = "sdewdddddd"

let has8Chars = str.length>=8;
let hasUppercase = str.split('').some(char => char >= 'A' && char <= 'Z');
let hasLowercase = str.split('').some(char => char >= 'a' && char <= 'z');
let hasNumbercase = str.split('').some(char => char >= '0' && char <= '9');

console.log(has8Chars)
console.log(hasLowercase)
console.log(hasUppercase)
console.log(hasNumbercase)