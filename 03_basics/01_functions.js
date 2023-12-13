function sayMyName (){
  console.log("H");
  console.log("I");
  console.log("T");
  console.log("E");
  console.log("S");
  console.log("S");
}
// sayMyName()

function AddTwoNumbers(number1, number2){
//  console.log(number1 + number2); 
 return number1 + number2
}
 
const result = AddTwoNumbers(4,5)
// console.log("Result", result);


function loginuserMessage(username){
  return `${username} just logged in`

}

// console.log(loginuserMessage("Rajat"));



// FUNCTIONS IN JAVASCRIPT (FUNCTION WITH OBJECTS)

function CalclulateCartPrice(...num1){

return num1
}

// console.log(CalclulateCartPrice(200, 400, 500, 2000, 700))


function CalclulateCartPrice2(val1, val2, ...num1){ //Hre we have given val11 and val2 which will take their
  //respective values on their own.  
   
  return num1
  }
  
  // console.log(CalclulateCartPrice2(200, 400, 500, 2000, 500))
  

  const user = {
    username : "Hitesh", 
    price : 299
  }
  function handleObject (anyObject){
  console.log(`Username is ${anyObject.username}, and price is ${anyObject.price}`);
  }
  // handleObject(user)
    // handleObject({
    //   username : "sam", 
    //   price : 399
    // })

    const newArray = [200, 400, 500]
    function returnSecondArray (getArray) {
     return getArray[1]
    }
    // console.log(returnSecondArray(newArray))
    console.log(returnSecondArray(newArray))