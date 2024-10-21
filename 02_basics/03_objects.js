//  const tinderUser  = new Object()
const tinderUser = {}

tinderUser.id = "123"
tinderUser.name = "Anmol"
tinderUser.isLoggedIn = false
// console.log(tinderUser);


const regularUser = {
    email:"anmol@gmail.com",
    fullname: {
        userFullName :{
            firstName : " anmol",
            lastName : "verma",
        }
    }
}






const obj1 = { 1 : "a", 2: "b"}
const obj2 = { 3: "c" , 4: "d"}

// const obj3 = obj1 + obj2    // incorrect for this,only works for array
// const obj3 = { obj1 , obj2}  //  same problem as of array
// console.log(obj3);   //  { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd' } }


// const obj3 = Object.assign(obj1 , obj2)
// const obj3 = Object.assign({},obj1 , obj2) // good practice

const obj3 = {...obj1, ...obj2}        //   spread operator
console.log(obj3); // { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }



const users = [
    {
        id:1,
        email:"h@gmail.com",
    }
]

users[0].email


console.log(tinderUser)    //   { id: '123', name: 'Anmol', isLoggedIn: false }


console.log(Object.keys(tinderUser));   //   [ 'id', 'name', 'isLoggedIn' ]
console.log(Object.values(tinderUser));  //  [ '123', 'Anmol', false ]
console.log(Object.entries(tinderUser));  //   [ [ 'id', '123' ], [ 'name', 'Anmol' ], [ 'isLoggedIn', false ] ]

console.log(tinderUser.hasOwnProperty('isLoggedIn'));    // true
 