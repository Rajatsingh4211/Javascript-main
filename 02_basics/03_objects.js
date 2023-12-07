// Singleton
// Object.create => This method is used to create object as well. 
// object literals. 

const mySym = Symbol("Key1")
const Jsuser = {
    name : "Rajat", //By Deafault the system takes name as String. 
    "full name" : "Rajat Kumar Singh",
    [mySym]: "Key1",
    age: 18, 
    location: "Jaipur",
    email: "hitesh@google.com", 
    isloggedin: false,
    lastloggedin: ["Monday", "Saturday"]

}

// console.log(Jsuser.email);
// console.log(Jsuser["email"]);
// console.log(Jsuser["full name"]);
Jsuser.email = "Hitesh@chatgpt.com"

// console.log(Jsuser);
// Object.freeze(Jsuser)
Jsuser.email = 'hitesh@microsoft.com'
// console.log(Jsuser);

Jsuser.greeting = function(){
    console.log("Hello JS user");
}
console.log(Jsuser.greeting);


Jsuser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}
console.log(Jsuser.greeting());
console.log(Jsuser.greetingTwo());
