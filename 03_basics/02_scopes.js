// var c = 300;
let a = 300
if (true) {
    let a = 10; 
    const b = 20;
    // console.log("Inner", a);


}


// console.log(a);
// console.log(b); 
// console.log(b); 

function one (){
    const username = "Hitesh"

    function Two (){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website)
    Two()
}

// one()

if (true) {
 
    const username = "Hitesh"
    if (username === "Hitesh") {
        const website = " youtube"
        //console.log(username + website);
    }
    // console.log(website);
}
// console.log(username);

//+++++++++++++++++++++++++++++++++ interesting +++++++++++++++++++++++++++++++++
console.log(addOne(5));

function addOne(num){
  return  num + 1 

}

const addTwo = function(num){
    return num + 2
}
// addTwo(5)