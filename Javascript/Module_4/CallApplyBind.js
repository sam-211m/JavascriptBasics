// Call method 
/***
 * Problem : How to avoid redundancy of methods in the objects
 * Solution: Constructor function & prototype solves the redundancy only for functions and not objects
 *              For objects, we use call function to avoid redundancy
 * Call method is used to call or borrow or reuse a method from one object into another
 * This keyword is very important and it points to the object that is been passed in the call method
 * 
 * 
 * Apply method also works in the same way but it expects parameters in array only
 * 
 * Bind method also works in the same way but it can store a function in a variable and we 
 * can call this function at a later point of time in the code. It binds the function to that particular
 * variable.
 */

let person = {
    name: 'Sam',
    age: 32,
    // PrintDetails: function(){
    //     console.log(`My name is ${this.name} & age is ${this.age}`)
    // }
 
}

function PrintDetails(city){
        console.log(`My name is ${this.name} & age is ${this.age} & am from ${city}`)
    }

let person2 ={
    name : 'Joe',
    age :34,
    // PrintDetails : function(){
    //     console.log(`My name is ${this.name} & age is ${this.age}`)
    // }
}

// In the above objects, the key are same but the values are different. 
// The method is same and the content is also the same
// there is duplicacy. We can avoid this duplicacy by keeping the method only in one object and reusing
// it by using the call method.

// Call method

// person.PrintDetails.call(person2);
// We can directly call the method, pass the objects alongwith the parameters
// We can also avoid reduncdancy by making the function global
PrintDetails.call(person2,"NewYork")
// O/P - My name is Joe & age is 34

// Apply method
PrintDetails.apply(person,['Manhattan'])
// let test =PrintDetails.apply(person,['Manhattan']) - Error 
// O/p My name is Sam & age is 32 & am from Manhattan

// Bind method

let bound = PrintDetails.bind(person,'Paris')

bound();
// test(); Error
// O/p -> My name is Sam & age is 32 & am from Paris






