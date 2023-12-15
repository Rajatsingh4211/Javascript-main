// Immediately invoked functions.

(function chai(){
    console.log(`Db connected`);
}()); // Imp to add the semicolon here. Otherwise it will give error because it does not know where to stop the fn. 

(function aurcode(){
    console.log(`DB connectd 2`);
}
)()