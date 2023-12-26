class Animal{
    constructor(name, legCount, Speaks){
    this.name = name; 
    this.legCount = legCount; 
    this.Speaks = Speaks; 

    }
    Speak(){ 
        console.log("Hi there " + this.Speaks);
    }
    
}

let dog = new Animal("dog", 4, "Bhow Bhow");
let Cat = new Animal("cat", 4, "Meow Meow");

// Cat.Speak();

// 

const characters = [
    {
        name : "Tarak Mehta", 
        height : "172",
        mass : 60,
        gender: "Male"
    },
    {
        name : 'Jethalal',
        height : "160",
        mass : 110,
        gender: "Male"
    },
    {
        name : "ChampakLal",
        height : "169",
        mass : 90,
        gender: "male",
    },
    {
        name : "bide",
        height : "171",
        mass : 111,
        gender: "male"
    }
]



// //Get array of All Names. 
// // const names = characters.map(ch =>ch.name)
// const names = characters.map(ch=> ch.name)
// // console.log(names);

// // Get an array of objects with just name and height properties. 
// const propertiesofHeights = characters.map(ch=>{
//     return {names: ch.name, height: ch.height}
// })

// // console.log(propertiesofHeights);

// Get the total height of All characters. 

const totalHeight = characters.reduce((prevHeight, characters)=>{

return prevHeight + Number(characters.height)

},0)
// console.log(totalHeight);


// const greaterThanMass = characters.filter((characters)=>{
// return characters.mass > 100

// })

// const greaterThanMass = characters.filter((characters) => {
//     return characters.mass > 100;
// });

// console.log(greaterThanMass);

const greaterThanMass = characters.filter((character) => {
    return character.mass > 100;
});

// console.log(greaterThanMass);


// Get all male characters. 

const genderFilter = characters.filter((character)=>{
return character.gender>male; 
})

// console.log(genderFilter);


class Animal {
    constructor(name, legCount) {
      this.name = name
      this.legCount = legCount
    }
    describe() {
      return `${this.name} has ${this.legCount} legs`
    }
  }
  