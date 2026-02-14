// Undefined 
/***
 * When value is not defined
 * When we try to access an empty element in an array
 * When we don't return anything from a function and call that function 
 */

let a
console.log(a);
// O/P -> undefined

let arr = ['a','b', , 'd']
console.log(arr[2]);
// O/P -> undefined

function add(a,b){
    let c = a+b;
}
console.log(add(2,3));  
let sum = add(2,3)
console.log(sum);

// O/P -> undefined

/***********************Null**************** */

let str = null;
console.log(str)
// O/P -> null

/**************************Not defined*********** */

console.log(address);
// O/P -> ReferenceError: address is not defined