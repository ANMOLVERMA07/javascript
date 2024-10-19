/* 
Datatypes ko memory mei kaise store krte hai or
fir kaise access krte hai uske basis pe humne javascript
mei datatypes ko two types mei divide kra hai 

*/

// Primitive

/* 
7 Types : String , Number , Boolean , null (khali) , undefined (sirf create,not assign value) , Symbol (make anything unique) ,
 BigInt (bhot bda number).
*/

const name = "Anmol"
const value = 100
const anotherValue = 100.5
const isLoggedIn = true
const temperature = null
let userEmail;
const adharNumber = Symbol('123')
const id = Symbol('123')

// console.log(adharNumber === id); false 

// const bigNumber = 12351361351273176

// Reference type (Non-primitive)

/*
Array , Objects , Functions
*/

const heroes = ["anmol","verma","arpit"];
let myObj = {
    name: "anmol",
    age: 22,
}

const myFunction = function(){
   console.log("hello world");
}

// console.log(typeof myFunction); // function
// console.log(typeof temperature); // object

console.log(typeof heroes); // object

