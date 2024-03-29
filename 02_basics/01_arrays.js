// Arrays
const myArr = [0,1,2,3,4,5]
const myHeros = ["Shaktiman", "Naagraj", "Doga"]


const myArr2 = new Array (1,2,3,4,5,6,7)
// console.log(myArr[2]);
// console.log(myArr2);


// Array Methods. 

// .push method inserts new value to the array. It adds the value in the last of the array

// myArr.push("a") 
// myArr.push(7)
// myArr.push(8)
// console.log(myArr);

// pop method. => This simply removes the last element of the Array. Below is the example. 

// myArr.pop()

// myArr.unshift(9)
// console.log(myArr); // => This unshift method inserts the given value in the array this 
// adds the value in the first position of the Array. .  

// myArr.shift()
// console.log(myArr); // => This shift method removes the element at the zeroth index of an Array. 


//  console.log(myArr.includes(9));

//  console.log(myArr.indexOf(3));

// const newArr = myArr.join()
// console.log(typeof myArr);
// console.log(newArr);

// Slice and Splice method. 

// console.log("A", myArr);  
// const myny1 = myArr.slice(1,3)

// console.log(myny1);
// console.log("B", myArr); 

// const art = ["a", 1,2,3,4,5,6,7]
// const art2 = art.slice(1,4)
// console.log(art2);
// console.log(art);

// const ano = ["a", 1,2,3,4,5,6,7]
// const ano2 = ano.splice(1,4)
// console.log(ano2);
// console.log(ano); 


/* Imp point to keep in mind that in Slice method the array does not include the last element and it 
does not also changes the value in the array, while in the splice method the the method includes the 
last array but it changes the values in the original array */

// const newar = [1,2,3,4,5]
// newar.push(1) // Adds the element in the last index of the array
// newar.pop()  // Removes the last element of the array. 
// newar.shift()  // Removes the first element of the array. 
// newar.unshift(9) // Add the given value to the first index of the Array.  
// console.log(newar)

// Revision ogf slice and splice. 

// const tray = [1,2,3,4,5]

// console.log("A", tray)

// const myn1 = tray.slice(1,3)
// console.log(myn1)

// console.log("B", tray)
// const myn2 = tray.splice(1,3)
// console.log("C", tray)
// console.log(myn2)