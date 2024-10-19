const name = "Anmol"
const count = 45

console.log(name + count + " value"); //  Anmol45 value

// this doesnt a good practice to write strings like this

console.log(`My name is ${name} and my repoCount is ${reportError}`);

// this is good to insert variables and works upon them

const naam = new String('anmol')  // another way to declare string in js.

console.log(naam[0]);  // a
console.log(naam.__proto__);  // syntax to get prototype methods of string but we can do it directly by dot operator.

console.log(naam.length)
console.log(naam.toLowerCase())
console.log(naam.charAt(2))
console.log(naam.indexOf('m'))
console.log(naam.substring(0,4))
console.log(naam.slice(0,4))
console.log(naam.substring(-5,4))   // it does not obey negative index and treat it as starting(0).
console.log(naam.slice(-8,4))   // it obeys negative index

