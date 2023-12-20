const userEmail = []
if (userEmail) {
    // console.log("Got user Email");
}

else{
    // console.log("Don't have user Email");
}

/* falsy value

 false, 0, -0, BigInt 0n, "", null, Undefined, NAN

 trythy valus

 "0", "false", " ", [], {}, function(){},  
  */
 

 //  Method to check empty object. 

 
 if (userEmail.length  === 0) { 
     console.log("Array is Empty");
    }
    
    //  Method to check empty object. 

const emptyObject = {}

if (Object.keys(emptyObject).length === 0) {
    console.log("Empty Object");
}
