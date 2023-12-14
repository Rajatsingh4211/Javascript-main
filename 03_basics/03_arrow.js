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

const chai =  () => {
    let username = "Hitesh"
    console.log(this.username)
}
chai ()