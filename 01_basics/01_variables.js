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

console.table([accountEmail,accountId,accountPassword,accountCity, accountState])