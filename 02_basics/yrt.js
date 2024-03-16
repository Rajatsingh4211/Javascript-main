const jsuser = {
    name: "Rajat",
    age: 27,
    email: "rajat@email.com",
    class: 17,
    lastLoggedin: "20-12-2022",
    lastloginDay: "Monday",
  };
  
//    console.log(jsuser["email"]);

   jsuser.greeting = function (){
    console.log("Hello JSUSER")
   }
   jsuser.greeting2 = function (){
    console.log(`Hello jsuser ${this.age} + ${this.name}`)
   }

//    console.log(jsuser.greeting())
//    console.log(jsuser.greeting2())

const tinderuser = new Object()
tinderuser.id = "123abc"
tinderuser.name = "samm"
tinderuser.isloggedin = false



// console.log(tinderuser)

const regularuser = {
    email : "rajat@kumar", 
    fullname : {
        userfullname : {
            firstname : "hitesh", 
            lastname : "hitesh", 
        }
    } 
}

// console.log(regularuser.fullname.userfullname.firstname)

const obj1 = {1 : "a", 2 : "b"}
const obj2 = {3 : "c", 4 : "d"}
const obj3 = {5 : "c", 6 : "d"}

const objfin = Object.assign({}, obj1, obj2)

// console.log(objfin)


const users = [
    {
        id : "h@gmail", 
        name1 : "raj"
    },
    {
        id : "h@gmail", 
        name1 : "raj"
    },
    {
        id : "h@gmail", 
        name1 : "raj"
    },
    {
        id : "h@gmail", 
        name1 : "raj"
    }
]

users[1].id
// console.log(tinderuser);
// console.log(Object.values(tinderuser)) // Used to find the values. 
// console.log(Object.keys(tinderuser)) // Used to find the keys. 
// console.log(Object.entries(tinderuser)) // Gives the seperate entry in the form of arrays 
// console.log(tinderuser.hasOwnProperty("islogged"))

const course = {
    course : "JavaScript", 
    courseInsturctor : "Hiteshchaudary", 
    price : 999 
}

const {courseInsturctor} = course // This is a syntactical Sugar. 
// console.log(courseInsturctor)
