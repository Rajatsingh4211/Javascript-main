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

Cat.Speak();