const user = {
    username : "Hitesh", 
    price : 999, 
    
    welcomeMessage :  function (){
        console.log(`${this.username} , welcone to website`);
        // console.log(this);
    }
}
// user.welcomeMessage()
// user.username = "Rajat"
// user.welcomeMessage()

// console.log(this);

// function chai (){
//     let username = "Hitesh"
//     console.log(this.username)
// }
// chai()

// const chai =  () => {
//     let username = "Hitesh"
    // console.log(this.username)
// }
// chai ()
    
// ARROW FUNCTIONS

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addNum = addTwo(46,4)
// console.log(addNum);

// Implicit return 
const addTwo = (num1, num2) => (num1 + num2)


const addNum = addTwo(46,4)
// console.log(addNum);

const myArr = [1,3,5,6,7,]
// myArr.forEach(function())
