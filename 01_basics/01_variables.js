const accountId = 144553
let accountEmail = "raj123@gmail.com"
var accountPassword = 1234
 accountCity = "Jaipur"
 let accountState; 


// accountId = 2 //Not allowed because it's value if given as const. 

console.log();
 
accountEmail = "hc@hc.com" 
accountPassword = 2321212
accountCity = "Delhi"
/*
prefer not to use var because of the issue in block scope and functional scope 
*/


console.log(accountId)
// console.table([accountEmail,accountId,accountPassword,accountCity, accountState])
 
// function findsum(){
//     let ans = 0; 
//      for (i = 0; i<=10; i++){
//        ans =+ i; 
//      }
//      return ans; 
//    }
   
//    function fndsumtill100(){
//      return findsum(100)
//    }
   
//    setTimeout(fndsumtill100, 2000)
//    console.log("Hello World")