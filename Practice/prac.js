// Class Method of JS.

class Animal {
    constructor (name, legCount, speak){ 
        this.name = name; 
        this.speak = speak;
        this.legCount = legCount;  
    }                                        
    namefn(){
        console.log("Hi there my name is " + this.name)
    }
    makeSound(){
        console.log("I speak " + this.speak)
    }
    legnumber(){
        console.log("I have " + this.legCount + " legs")
    }

}

// Static Function

class Allien {
    constructor (name, legCount, speak){ 
        this.name = name; 
        this.speak = speak;
        this.legCount = legCount;  
    }           

    namefn(){
        console.log("Hi there my name is " + this.name)
    }
    makeSound(){
        console.log("I speak " + this.speak)
    }
    legnumber(){
        console.log("I have " + this.legCount + " legs")
    }

}
let dog = new Animal("dog", 4, "Bhow Bhow") // This is how we create object in a JS Classes. 
let cat = new Animal("cat", 4, "Meow Meow") // This is how we create object in a JS Classes.

// dog.namefn()
// dog.makeSound()
// dog.legnumber()

// cat.namefn()
// cat.makeSound()
// cat.legnumber()

 

// function log() {
//     console.log("Hi there")
// }


// function log2() {
//     console.log("Hi there two")
// }

// function logwhatsPresent(fn){
// fn();
// }

// logwhatsPresent(log2)


// Callbacks 


function Log1(){ 
    console.log("Hi there what up?")
}

function log2(){
    console.log("Hi there, How are you")
}

function finalLog(cn){
cn();
}

// finalLog(log2)


const str = "Hello World"
// console.log(str.replace("World", "JS"))

// Dates 

const currentDate = new Date()
// console.log(currentDate.getMonth() + 1)



const sampleObject = {
    key1: "value1",
    key2: "value2",
    key3: "value3",
  }; 

  objectMethods(sampleObject);
  
  function objectMethods(obj) {
    console.log("Original Object:", obj);


    let keys = Object.keys(obj);
    console.log("After Object.keys():", keys);

    let values = Object.values(obj)
    console.log("After Value", values)

    let anot = Object.entries(obj)
    console.log("After anoth: ", anot) 
  }