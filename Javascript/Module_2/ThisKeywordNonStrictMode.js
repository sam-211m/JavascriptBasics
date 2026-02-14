// This keyword 
// Scenarios under node.js in non-strict mode
// -> Scenario 1: When we console log a this keyword in a regular function => "this" refers Object [global]
// -> Scenario 2: When we console log a function which is called a method defined inside an object =>  { name: 'sam', age: 32, myFunc: [Function: myFunc] }
// -> Scenario 3: When we console log a function inside a function in an object -> 
// -> Scenario 4: normal console.log(this) - > returns an empty object

// Scenario 1 - Regular function 
function regularFunction()
{
    console.log(this);
}

//  regularFunction();

// Regular function refers to a global object with "this" keyword
// Object [global] global object has the inbuilt methods of nodejs like clearInterval,queueMicrotask, setTimeoute etc

// Scenario 2 : A method called inside an object with this 
let obj = {
    name : "sam",
    age : 32,
    myFunc : function (){
        console.log(this);
    }
}

// obj.myFunc();

// A method defined under an object refers the entire object via "this" keyword
// calling the method returns an entire object -> { name: 'sam', age: 32, myFunc: [Function: myFunc] }

// Scenario 3: Calling a function inside a method in an object
let obj1 = {
    city : "Pune",
    pincode : "411035",
    myFunc1 : function(){
            function myFunc2() // A "this" inside a regular function will always refer to a global object
            {
                console.log(this);
            }
            myFunc2();
    }
}
// obj1.myFunc1(); 

// Scenario 4: normal console with this - > return an empty object{}
console.log(this);




