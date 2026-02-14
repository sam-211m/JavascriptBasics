"use strict"

console.log(this) 


 // The regular function returns undefined when used this keyword within it.
function Check(){
    console.log(this)
}
Check();


// This keyword in a method inside an object
// It returns the entire object as the output : { name: 'sam', myFunc: [Function: myFunc] }
let obj = {
    name:'sam',
    myFunc : function(){
        console.log(this);
    }
}
obj.myFunc();

// This keyword inside a nested function inside a method
// o/p = Nested regular function: undefined
let obj1 = {
    grade : 'A',
    myFunc2 : function(){
        function myFunc3(){
            console.log("Nested regular function: " +this);
        }
        myFunc3();
    }
}
obj1.myFunc2();
