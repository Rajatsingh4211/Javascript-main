//For loop 

for (let index = 0; index <= 10; index++) {
    const element = index;
    if (element == 5) {
    //  console.log("5 is best number");
    }
    // console.log(element)
    
}
for (let i = 0; i <= 10; i++) {
    // console.log(`Outer loop: ${i}`);
    for (let j = 0; j <= 10; j++) {
        //console.log(`Inner Loop ${i} and inner loop ${j}`);
        // console.log(i + "*" + j + '=' + i * j);
        
    }
    
}
let myArray = ["Flash", "Batman", "Spiderman"]

for (let index = 0; index < myArray.length; index++) { //if we add and = sign after < in myarray.length then
    //it will go out of the scope and will give the output undefined
    const element = myArray[index];
    console.log(element);
    
}




// break and continue 

// for (let k = 1; k <= 20; k++) {
//     if (k == 5) {
//         console.log("Detected 5");
//         break
//     }
//     console.log(`value of k is ${k}`)
    
// }



for (let k = 1; k <= 20; k++) {
    if (k == 5) {
        console.log("Detected 5");
        continue
    }
    console.log(`value of k is ${k}`)
    
}