// == checks for values 
// === checks for values as well as the datatype

let a = 4;
let b = '4';

console.log(a == b) // lose checking
// O/P -> true It doesnt check the type, it checks only the value

let c = 5, d= '5';

console.log(c === d) // strict checking
// O/P -> false It checks both the type and the value.
