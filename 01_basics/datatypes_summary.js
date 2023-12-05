// # Primitive Data Types

// 7 Types - String, Number, Boolean, null, undefined, Symbol, BigInt. 


const score = 100
const scoreValue = 100.3

const isLoggedin = false
const outsideTemp = null
let userEmail;

const Id = Symbol('123')
const anotherId = Symbol('123')

const bigNumber = 3545234523452345234534n

// # Reference Data Types (Non Primitive Data Types)

// Objects, Arrays, Functions. 

const heros = ["Shaktiman", "Doga", "naagraj"]
let myObj = {
    name:  "Rajat", 
    age: 23
    
}

const myFunction = function (){
    // console.log("Hello World");
} 
// console.log(typeof anotherId);

// The dataype of function returns function but it is called Objecy Function. => This is IMP 


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack (Primitive), Heap (Non-Primitive)

// eg of stack =>


let myYoutubename = "Hiteshchoudarydotcom"
let anotherName = myYoutubename
anotherName = "ChaiorCode"

console.log(myYoutubename)
console.log(anotherName)

// eg of heap =>

let userOne = {
    email: "user@google.com", 
    upi: "user@ybl.com"
}

let userTwo = userOne
userTwo.email = ("rajat@google.com"); 

console.log(userOne.email);
console.log(userTwo.email);

