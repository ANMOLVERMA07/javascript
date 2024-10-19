/*
const score = 400 // js already take this as a number dattype.

const balance = new Number(100); // but if you want to do it explicitely , you can do it like this.
console.log(balance);  // [Number : 100]

console.log(balance.toString().length);
console.log(typeof balance);  // string

console.log(balance.toFixed(2)); // 100.00
console.log(balance.toFixed(3)); // 100.000

const otherNumber = 23.896

console.log(otherNumber.toPrecision(3)); // 23.9

const num = 1000000
console.log(num.toLocaleString()); // 1,000,000
console.log(num.toLocaleString('en-IN')); // 10,00,000

*/
// ***************  MATHS ***************************

console.log(Math.abs(-4))   // 4
console.log(Math.round(4.3));  // 4
console.log(Math.round(4.6));  // 5
console.log(Math.ceil(4.2));  // 5
console.log(Math.floor(4.9));  // 4

console.log(Math.random());  // 0 < Math.random() < 1
console.log((Math.random()*10) + 1);  // 1 < Math.random() < 10

const min = 10
const max = 20



console.log(Math.floor(Math.random() * (max -min + 1)) + min);
