// Impure functions 
// A function where the o/p changes even when we pass the same arguments due to an external variable or method etc. 


// Pure functions
// A pure function is a method where for the same argument, we will always get the same output.
// we should not use any external library, variable inside a pure function.
// A pure function must only do a task that it is intended for, no other task should be performed by the pure function


// e.g Impure function
// step 1 : a =5 , i/p = 4 , o/p = 9
// step 2 : a = 6, i/p = 4, o/p = 10 ( output changed, it became an impure function)
// step 3 : increment a in the function ( output changed, even though we are calling the same method with same signature)

let a = 5;

const ImpureAdd = (x)=>{
    console.log(x+a)
    a++
}

// ImpureAdd(4);
// ImpureAdd(4);
// ImpureAdd(4);

// e.g Pure method
// step 1 : no external variables allowed, we added the external variable as an argument. same i/p and same o/p
// step 2: Our function is still impure because it is dependent on external method i.e console. 
// step 3: remove console , then the function will become a pure function
const pureAdd = (x,a)=>{
    //console.log(x+a);
    return x+a;
}

console.log(pureAdd(2,3));
console.log(pureAdd(4,5));