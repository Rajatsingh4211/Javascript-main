// // Code without Function 


// let n = 100;
// let ans = 0; 
// for(let i = 1; i<n; i++){
//     ans = ans + i; 
// } 
// // console.log(ans)


// let n2 = 1000; 
// let ans2 = 0; 
// for (let i = 0; i<1000; i++){
//     ans2 = ans2 + i; 
// }

// console.log(ans2)

// Example of SYNCHRONOUS FUNCTION. 

// function findsum (n){
//     let ans = 0;
//     for (let i =0; i<n; i++){
//         ans = ans + i; 
//     } 
//     return ans; 
// }

// console.log(findsum(100))



// Example of ASYNCHRONOUS FUNCTION.

// function findsum(n){
//     let ans = 0; 
//     for (let i = 0; i<n; i ++){
//         ans = ans + i; 
//     }
//     return ans
// }

// function findsumnow(){
//     console.log(findsum(100));
// }

// setTimeout(findsumnow, 1000)
// console.log("Hello World")



function square(n){
    return n * n
}

function cube(n){
    return n * n * n
}

function sumofnumbers(a, b, callback){
    const val1 = callback (a)
    const val2 = callback (b)
    return val1 + val2;
}

setTimeout( ()=>{
    const result = sumofnumbers(1, 2, square); 
    console.log(result)
}, 1000)
console.log("Hello World")