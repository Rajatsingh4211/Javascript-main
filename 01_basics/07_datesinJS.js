// Dates and Time in JS
let myDate = new Date()
// console.log(myDate); //=> This will give a very rough Output in terms of date and will not be readiable. 

//Another way to make it readiable is. 
// console.log(myDate.toString()); // => Expected Output - [Tue Dec 05 2023 16:54:19 GMT+0530 (India Standard Time)] 
// console.log(myDate.toDateString()); // =>Expected Output - [Tue Dec 05 2023]
// console.log(myDate.toLocaleString()); // => Expected Output - [12/5/2023, 4:55:43 PM]
//console.log(typeof (myDate)); // => Type of Date of (Object)

// Date created by you

let myCreatedDate = new Date("01-02-2023") // In JS month indexcing starts from 0. i.e (January starts from 0)
// console.log(myCreatedDate.toDateString());


// Time stamps in JS  

// let myTimeStamp = Date.now() // Method to get input time.
// console.log(myTimeStamp);
/* console.log(myCreatedDate.getTime());  To get time input as well. This method is used in projects like booking 
 booking sites */ 
//  console.log(Math.floor(Date.now()/1000)); 

let newDate = new Date()
console.log(newDate); //=> Gives date and time in the output. 
console.log(newDate.getDate()); // => Check various date value after adding (.) This will give various options
// to check dates, time,  year, and many more. 

