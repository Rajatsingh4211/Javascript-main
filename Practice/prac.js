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
let dog = new Animal("dog", 4, "Bhow Bhow")
let cat = new Animal("cat", 4, "Meow Meow")

// dog.namefn()
// dog.makeSound()
// dog.legnumber()

// cat.namefn()
// cat.makeSound()
// cat.legnumber()


