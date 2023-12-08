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
// console.log((loginUserMessage("Hitesh")));

// FUNCTIONS WITH OBJECTS. 

// function calculateCartPrice(num1){
//  return num1 
// }
// console.log(calculateCartPrice(200, 400, 500));


// REST OPERATOR/ 




function calculateCartPrice(val1, val2, ...num1){ // Method to pass multiple operator in JS using spread method (...)
  return num1 
 }
//  console.log(calculateCartPrice(200, 400, 500));


const user = { 

  username : "Hitesh",
  price : 199

}
function handleObject (anyobject){
  //  console.log(`Username is ${anyobject.username}, and the price is ${anyobject.price}`);

}
// handleOnject(user)
handleObject(
  {
    username : "Sam",
    Price : 399
  }
)

const mynewArray = [200, 400, 300, 100]
function returnSecondValue (getArray) { 
return (getArray[2])
}
// console.log(returnSecondValue(mynewArray));
// console.log(returnSecondValue([200, 400, 500, 1000 ]));

// REVISION OF BUM OPERATOR


// function anotheroper  (...bum){
//  return bum
// }
// console.log(anotheroper(200,5,7,745));