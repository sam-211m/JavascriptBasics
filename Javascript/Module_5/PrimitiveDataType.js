// Primitive data types
// int, bool, string, null, undefined all are primitive data types
// They are stored in stack memory
// They are immutable

let a = 10; // creates a value in stack memory with value '10'
let b = 20; // creates a value in reference memory with value '20'

a=b;

b = 30; // override the value of b in the stack memory to value 30

console.log("a "+a);
console.log("b " +b);

// O/p -> a 20
// b 30
// It will not change the value of a, only b gets changed.. the primitive data types are immutable 

