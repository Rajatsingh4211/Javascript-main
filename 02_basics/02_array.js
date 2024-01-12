const marvel_heros = ["Thor", "IronMan", "Spiderman"]
const dc_heros = ["Superman", "Flash", "Batman"]
// marvel_heros.push(dc_heros) 

// Push method in Array.

// console.log(marvel_heros); // Here we can see that that the second array is added within the first array. 
// console.log(marvel_heros[3][0]);

// concat method. 

// const all_heros = marvel_heros.concat(dc_heros);
// console.log(all_heros);  

// Spread Out Method. 

// const all_new_heros = [...marvel_heros, ...dc_heros]
// console.log(all_new_heros);

// Flat method or flat operator. 


// const another_array = [1,2,3,[4,5,6,],7,[6,7,[4,5]]]
// const real_another_array = another_array.flat(Infinity)
// console.log(real_another_array); 

// IS Array, From Array, of Array. 


const marvel_heros2 = ["thor", "tonyStark", "Ironman"];
const dc_heros2 = ["superman", "batman", "wonderwoman"];

const allHeros = marvel_heros.concat(dc_heros) //Concat returns you a new array. 
// console.log(allHeros) 

// spread 

const few_heros = [...marvel_heros2, ...dc_heros2]

// console.log(few_heros)

console.log(Array.isArray("Hitesh"))





