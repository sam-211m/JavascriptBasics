// Imperative and Declarative way of writing code
// Imperation - structural, logical, follows a process or standard approach and lengthy 
// Declarative - focuses on solution, less code, quicker, readable 

// Problem statement : Find if square of a given number is even or not

// Imperative 
let num = 5;
// let isEven;
// let squarenum = num * num;
// if(squarenum % 2 == 0)
// {
//    isEven = true;
// }
// else 
// {
//     isEven = false;
// }

// console.log(isEven);


// Declarative 
// we will use arrow function
// We will ternary operator which is (condition ? true : false) , here if the condition is satisfied, return 
// statement written after ? and if it doesnt satisfy then return what is written after colon symbol.
const checkEven = (n)=>(n*n%2 == 0 ? true : false)
console.log(checkEven(4)); 
