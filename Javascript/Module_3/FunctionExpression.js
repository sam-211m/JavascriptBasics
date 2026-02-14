// Function Expression
// Purpose : To overcome the hoisting issues with normal function
// follow good code practice
// security

// add(4,7); // error - Cannot access 'add' before initialization because of function expression while 
// a normal function will not give any error and will return the result. this may lead to errors and bugs in code
 
let add = function( a, b){
    console.log(a+b);
}
add(4,5);

// Function expression - a complete function is assigned to a variable and as a variable stands as undefined 
// before its usage, now, after assigning a function to a variable, even a function call will be undefined 
// before reaching the actual code
