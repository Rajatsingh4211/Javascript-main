// const name = "Rajat"
// const repoCount = 50

// console.log(name + repoCount + "value"); => Outdated Syntax. 

// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`); => Modern way also known as String interpolation or backtick

// Another way to declare string (// const gameName = new String("Rajat kumar singh"))

 const gameName = new String("Rajat-kr")
// console.log(gameName.__proto__);    
// console.log(gameName.__proto__);
console.log(gameName.length);
// console.log(gameName.indexOf("k"));
// console.log(gameName. lastIndexOf("i")) 
// console.log(gameName.toLowerCase());
// console.log(gameName.indexOf("j"));



const newString = gameName.substring(0,4)
console.log(newString)

const anotherString = gameName.slice(-8,4)
console.log(anotherString);


/* .slice doesnot includes last object in the Array. 
eg. const Animals = [ant, bison, camel, duck, elephant]
console.log(animal.slice(2,4));
Output will be ["Camel", "Duck"] => camel is at 2 position from the starting index and the 4th index 
array will not be displayed. .Slice method cuts the last element.

*/

// Trim method. 
const newStringOne = "     hitesh 1 "
console.log(newStringOne);
console.log(newStringOne.trim()); 

// .trim method is used to remove all the extra spaces from the input array. 


// Replace array
const url = "https://www.hitesh.com/Rajat%20chaudary."

console.log (url.replace('%20', '-'))

// Replace array is used to change the info in the array 

// Include Array
console.log(url.includes("Rajat"))
// This array is used to check whether given data is present in the array or Notification. 

// split method

console.log(gameName.split('-'));
// Read split method on MDN Docs. 