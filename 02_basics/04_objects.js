// const tinderuser = new Object () // Singelton Object.
const tinderusr = {} // Non singelton object.
tinderusr.id = "123abc"
tinderusr.name = "Sammy"
tinderusr.isloggedin = false


// console.log(tinderusr)
const regularuser = {
    email : "something@gmail.com",
    fullname : {
          userfullname : {
            userfirstname : {
                firstname : "Rajat",
                lastname : "singh"
            }
          }
    }

}
// console.log(regularuser.fullname.userfullname.userfirstname.lastname);

// Merging Objects in one another 
const obj = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}

// const obj3 = {obj,obj2}
// console.log(obj3); // Not the right way of doing this because it merges one object in another object. 

// const obj3 = (Object.assign ({}, obj,obj2)) /*Object assign operator merges the object properly without merging
// two array in one another. */
// console.log(obj3);
// console.log(obj3);


// Spread Method. 

const obj3 = {...obj, ...obj2}
// console.log(obj3);  
const users = [
    {
     id : "1",
     email : "r@gmail.com",
    },
    {
        id : "1",
        email : "r@gmail.com",
       },
       {
        id : "1",
        email : "r@gmail.com",
       },
       {
        id : "1",
        email : "r@gmail.com",
       }
]
users[1].email

// console.log(tinderusr);
// console.log(Object.keys(tinderusr));
// console.log(Object.values(tinderusr));
// console.log(Object.entries(tinderusr));

// Objects Destructuring and JSON API. 

const course = { 
    coursename : "js in hindi",
    price : 999, 
    courseInstructor : "Hitesh Choudary"
}
// course.courseInstructor

const {courseInstructor : instructor} = course 
console.log(instructor);


// {
//     "name" : "Rajat", 
//     "courseName" : "Js in hindi"
//     "price": "free"
// }
// [
//     {}
//     {}
//     {}
// ]
