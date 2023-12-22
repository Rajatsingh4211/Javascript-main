// High Order Array Loops
// FOR LOOPS

// ["", "", "",]
// [{}, {}, {},]

const arr = [1,2,3,4,5]
for (const num of arr) {
    // console.log(num)
}

const greetings = "Hello World"
for (const greet of greetings) {
    // console.log(`Each of char is ${greet}`);
} 

// Maps

// const map = new Map()
// map.set("IN", "India")
// map.set("USA", "Untied States of America")
// map.set("Uk", "Untied Kingdom")
// map.set("FR", "France")

// // console.log(map);

// for (const Maps of map) {
//     console.log(Maps);
// }



// DESTRUCTURING OF ARRAY IN FOR OFF LOOPS


const map = new Map()
map.set("IN", "India")
map.set("USA", "Untied States of America")
map.set("Uk", "Untied Kingdom")
map.set("FR", "France")

// console.log(map);


for (const [Maps, value] of map) {
    // console.log(Maps, ":-", value);
}

// const myObj = {
//     "game1" : "NFS",
//     "game2" : "SpiderMan"  
// }

// for (const key of myObj) {
//         console.log(key, ":-", value);
// }