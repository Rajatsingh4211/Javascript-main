// const addingNum = (num1, num2) => {
//     return num1 + num2
    
//   }
  
  // console.log(addingNum(3, 4))


  // const month = 1; 
  // switch (month) {
  //   case 1:
  //     console.log("January");
  //     break;
  
  //   case 2:
  //     console.log("February");
  //     break;
  //   case 3:
  //     console.log("March");
  //     break;
  //   case 4:
  //     console.log("April");
  //     break;
  
  //   default:
  //     console.log("Default Case Match");
  //     break;
  // }

  // for (let i = 0; i < 10; i++) {
  //   const element = i;
  //   console.log(i)
    
  // }

  for (let i = 1; i <= 10; i++) {
    // console.log(`Outer loop value : ${i}`)
    for (let j = 1; j <= 10; j++) {

      // console.log(`Inner loop value : ${j}`)

      
      // console.log( i + "*" + j + "=" + (i*j)); 
    }
  }

  let myAry = ["Flash", "Batman", "Superman", "Spiderman", "Bheem"]
  // console.log(myAry.length);
  for (let index = 0; index < myAry.length; index++) {
    const element = myAry[index];
    // console.log(element);

  }

  // Break and continue. 
 
  // Break
  for (let i = 1; i <=20; i++) {
    if(i == 5){
      // console.log(`Value of i is 5`)

      break;
    }
    // console.log(`Value of i is ${i}`)

  }

  for (let i = 1; i <=20; i++) {
    if(i == 5){
      // console.log(`5 Detected`)

      continue;
    }
    // console.log(`Value of i is ${i}`)

  }
 

// const greetings = "Hello World!"
// for (const greet of greetings) {
//   console.log(greet)
// }

// Maps. 

const map = new Map()
map.set("In", "India")
map.set("USA", "United")
map.set("FR", "France")


for (const [key, value] of map) {
  // console.log(key, ":-", value);

}

// for off loop in Object

// const myobject = {
//   "game1" : "NFS", 
//   "game2" : "CSGO"
// }
// for (const [key, value] of myobject) {
//   console.log(key, value)
// }

// const program = ["Js", "Ruby", "Python", "GO"]
// for (const key of program) {
//   console.log([key])
// } // => In array for off loop gives the output of the array. 