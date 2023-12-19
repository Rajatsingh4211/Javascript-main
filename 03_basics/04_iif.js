// IMMEDIATELY INVOKED FUNCTION (IFFE)

(function chai(){
    console.log(`Db connected`);
}()); // Imp to add the semicolon here. Otherwise it will give error because it does not know where to stop the fn. 

(function aurcode(){
    console.log(`DB connectd 2`);
}
)();// Same here. 

( () =>{
    console.log(`DB connectd 3`);
}
)()

 /* IIFE is used to wrap a fn in a small bracket () and then call the fn outside of it. So that it can help from 
 the pollution of Global Scope.  Like in the above you can see that the fn is wraped in () and then it's 
 called by another () which help the global scope from being polluted*/ 

//  Fn can be written in anyway given above  
