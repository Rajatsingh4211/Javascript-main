const score = (400); 
// console.log(score);
const balance = new Number(100)
// console.log(balance) //=> Changed the value given const to number because it was given a type of Number in the above line of code
// console.log(balance.toString().length) 
// console.log(balance.toFixed(2)) 

const otherNumber = 23.8699 /* => Gives precise value of the number. [Expected Output = 23.9 because of .toprecision syntax may
     be 124 if the value given is 123.8699
*/
// console.log(otherNumber.toPrecision(3));

const hundreds = 1000000000
// console.log(hundreds.toLocaleString()); // => Used to add commas in numbers in order to make them readiable. 
// console.log(hundreds.toLocaleString('en-IN')); //=> To convert in Indian Value



// +++++++++++++++++++++++++++++++++++++++++++Maths+++++++++++++++++++++++++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-3)); // => This is used to change the value of integer in the given array. Known as Absolute Value. 
// console.log(Math.round(4.3)); /* => This is uded to round off the value of the given integer this is known as Round Value. 
// This rounds off the value of the number. Eg- If you give 4.3 in the round off value. It will change this to 4. Similarly if 
// you change the value to be 4.6 this will come 5 as the output. */
// console.log(Math.ceil(4.1)); //=> Change the value to +1 if there is any digit after the decimal. 
// console.log(Math.floor(4.1));  /*=> Changes the value to lower original no if there is any digit after the decimal. 
// eg:- console.log(Math.floor(4.1)); => Output of this code will be 4 despite 9 being after the decimal. */

// console.log(Math.max(4,6,7,8,)); //=> Known as Math.mix function. Used to find the max value in the given Array. 
// console.log(Math.min(4,6,7,8,)); //=> Known as Math.min function. Used to find the min value in the given Array

console.log(Math.random()); //=> Gives you random value under 0. 
console.log((Math.random()*10)+1); 
