//  singleton

// OBJECT Literals ( can change )

// symbol

const mySymbol = Symbol("key1");
const mySymbol2 = Symbol("key2");
const jsUser = {
    name: "Anmol",
    age: 20,
    mySymbol : "key1.0",       //  here we included symbol as a key but it act as a string.
    [mySymbol2] : "Key2.0",    // here we included symbol as a key but it act as a symbol now
    language : "Javascript", 
    email: "anmol@gmail.com",
    isLoggedIn : false,
}


console.log(jsUser.email);    //  anmol@gmail.com   way to access the key of an object by dot operator
// console.log(jsUser[email]);   // error
console.log(jsUser["email"]);  //  anmol@gmail.com  another way to access a key of an object


console.log(jsUser.mySymbol);    // key1.0
console.log( typeof jsUser.mySymbol);   // string

console.log(jsUser[mySymbol2]);   // key2.0
console.log(typeof jsUser[mySymbol2]);  // string




jsUser.email = "harshit@gmail.com"   // we can change the key of a object literal
// Object.freeze(jsUser)                // but if we want to lock the object then we can use freeze ( Object.freeze() )
jsUser.email = "arpit@gmail.com"     //  this does not propogate this value.
console.log(jsUser.email);     // harshit@gmail.com


jsUser.greeting = function(){
    console.log("hello Js User");
    
}

// console.log(jsUser.greeting); // undefined
// jsUser.greeting();      //  hello Js User
// console.log(jsUser.greeting()); // hello js user
