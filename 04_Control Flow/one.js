// IF

// const userLoggedInto = true


// if (userLoggedInto) {
    
// }
// <, >, <=, >=, ==, !=, ===

// const temperature = 65;

// if (temperature == 41) {
//     console.log("Temperature is 41")
// }
// else {
//      console.log("Temperature is not 41");
// }

// const score = 200; 
// if (score> 100) {
//     const power = "fly"
//     console.log(`User Power: ${power}`)
// }
// const balance = 1000
// if (balance>500) console.log("test");

// if (balance <500) {
//     console.log("less than 500");
// }
// else if (balance <750) {
//     console.log("Less than 750");
// }
// else if(balance < 900){
//     console.log("Less than 900");
// }
// else {
//     console.log("Less than 1200");
// }



// Multiple condition Checking.
const userLoggedIn = true
const debitCard = true 
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard && 2==2) {
    console.log("Allowed to purchase Courses")
}
if (loggedInFromGoogle || loggedInFromEmail) {
     console.log("Allowed to purchase Course")
}


// Nullish Coalescing Operator (??) : null, undefined

let val1
// val1 = 5 ?? 10
// val1 = null ?? 10

val1 = undefined ?? 15
// console.log(val1);
// console.log(val1);


val1 = null ?? 10 ?? 10 // IN this case whatever the first value this val1 gets that value will be assigned to it. 



// TERNIARY Coalescing OPERATOR

// condition ? true : false


const iceTeaPrice = 100; 
iceTeaPrice <=80 ? console.log("lessthan 80") : console.log("More than 80")
