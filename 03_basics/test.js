// function getslice(str, start, end) {
//     console.log("Original String ", str);
//     console.log("After Slice:", str.slice(start, end));
//   }
  
//   console.log("Hello World", 0, 5);
  

// function cutIt (str, startIndex, endIndex){
//   let newstr = "";
// for (let i = 0; i<str.length; i++){
//   if(i>=startIndex && i<endIndex){
//     newstr = newstr + [i]
//   }
// }

// }
// const value = "Harkirat"
// let ans2 = value.slice(2,5)
// console.log(cutIt(value, 2,5));

// function replaceString (str, target, replacement){
// console.log('Original String', str);
// console.log("After Replace", str.replace(target, replacement));
// }


// REPLACE WORD

// const str = "Hello World";
// console.log(str.replace("Hello", "Kya haal ayeee")) 

// function splitString(str, seperator){
//  console.log("Original String", str)
//  console.log("After Split", str.split(seperator));

// }
// splitString("Hello, world, this, is, me, Rajat", ",")


// const hello = "Hello, World, this, is, me" 
// const words = hello.split(",")
// console.log(words);

// const value = "Hi my name is Rajat"
// const words = value.split("")
// console.log(words);


// const value = "Hi,my,name,is,Rajat"; 
// const word = value.split(",");
// console.log(word);

// function sum(a,b){
//     return a+b;
// }
// const no = sum(9,9)
// console.log(no)
// console.log(sum(9,8))

//   Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  

// const arr = [1,2,3,4,5,6]
// function largestNum(numbers){
   

    
// }


// const a = 5; 
// const b = 6; 
// console.log(6 + 5);

// For each array 

// const inititalArray = [1,2,3,4,5]

// function logthing(str){ 
//     console.log(str + " Is the string")
// }
// inititalArray.forEach(logthing)

// callback function, Keep in Mind Very Imp. 

function log1(){
    console.log("Hello World")
}

function log2(){
    console.log("Hello World 2")
}

function logWhatsPresent(fn){
    fn()
}

// logWhatsPresent(log2)

// One more example of Callback function. 

// function fn1(){

// console.log("Hey there")
// }

// function fn2(){
//     console.log("Hey there what's up");
// }

// function callback(cb){
//     cb()
// }

// callback(fn2)

// CALLBACK FUNCTION IN JS

function square(n){
    return n*n 
}
function cube (n){
    return n*n*n
}

function sumofSomething(a, s, f, fn){
 const val1 = fn(a)
 const val2 = fn(s)
 const val3 = fn(f)
 return val1 + val2 + val3
}

// console.log(sumofSomething(1, 2, 3, cube))

// CLASSES

class Animal{
    constructor (name, legcount, speaks)
{ 
    this.speak = speaks; 
    this.legcount = legcount; 
    this.name = name; 

}
speaks(){
    console.log("Hi there " + this.speak);
}

}

let dog = new Animal ("dog", 4 , "bhow bhow")
let cat = new Animal ("cat", 4 , "meow")

// dog.speaks(); 

function one (){
    const username = "Hitesh"

    function two() {
        const website = "Youtube"    
        console.log(username);
    } 
    console.log(website)
    two()
   
}
one ()