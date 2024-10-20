// dates

/*

let myDate = new Date()
console.log(myDate);  // 2024-10-20T07:23:40.936Z
console.log(myDate.toString());    // Sun Oct 20 2024 07:24:56 GMT+0000 (Coordinated Universal Time)
console.log(myDate.toDateString());   // Sun Oct 20 2024
console.log(myDate.toLocaleString());  // 10/20/2024, 7:26:02 AM
console.log(typeof myDate);  // Object

*/
let myCreatedDate = new Date(2023,0,23)  // year , month , date
console.log(myCreatedDate.toDateString());  // Mon Jan 23 2023

let myCreatedDate2 = new Date(2023 , 0 , 23 , 5,3)
console.log(myCreatedDate2.toLocaleString());   // 1/23/2023, 5:03:00 AM

let myCreatedDate3 = new Date("2023-01-14")
console.log(myCreatedDate3);  // 2023-01-14


let myCreatedDate4 = new Date("01-14-2023")
console.log(myCreatedDate3);  // 01/14/2023

let myTimeStamp = Date.now();
console.log(myTimeStamp);  // 1729409626435 => milliseconds

console.log(myCreatedDate.getTime());  // 1674432000000
console.log(Math.floor(Date.now()/1000));  // in seconds


let newDate = new Date()
console.log(newDate.getDate());
console.log(newDate.getHours());
console.log(newDate.getMonth()); // months start from  0 in javascript
console.log(newDate);
console.log(newDate);
console.log(newDate);

newDate.toLocaleString('default',{
    weekday:"long",
    // timeZone:""
})