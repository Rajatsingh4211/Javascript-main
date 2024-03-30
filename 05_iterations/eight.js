// Reduce. 

const myNums = [1,2,3,4]
const initialValue = 0; 
const sumwithinitial = myNums.reduce(
(accumulator, currentValue) => accumulator + currentValue, 
initialValue, 
); 

console.log(sumwithinitial);