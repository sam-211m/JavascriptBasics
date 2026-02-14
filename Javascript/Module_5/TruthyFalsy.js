// Truthy & Falsy values
// In Js, everything is boolean, array, objects, string, numbers, null etc
// There are only few falsy values others are truthy values
/**
 * 0
 * -0
 * NaN
 * Undefined
 * false
 * 0n ( Bigint 0)
 * empty string (' ', " ", ` `)
 * null
 */

let a = null;
if(a)
console.log("truthy value");
else
    console.log("falsy value");
