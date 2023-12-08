function saymyname () 
{
    console.log("R");
    console.log("a");
    console.log("j");
    console.log("a");
    console.log("t");
}
// saymyname()

// function addTwonumbers (number1, number2){
//   console.log(number1 + number2)
// }




function addTwonumbers (number1, number2){
 
    // let result = number1 + number2
    // return result
     return number1 + number2
  }  


const result = addTwonumbers(4, 3)
// console.log("Result ", result);



function loginUserMessage (username){
  return `${username} just logged in `

}
console.log((loginUserMessage("Hitesh")));