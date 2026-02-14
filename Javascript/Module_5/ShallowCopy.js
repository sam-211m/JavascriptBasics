// shallow Copy
// In reference types, copying one object to another and then changes in the other object reflect in the first
// too. To avoid this, we use shallow copy
// Shallow copy is done using spread operator {...} three dots
// This works only for 1st level of properties in an object, doesn't work for nested objects

let obj1 ={
    name : "sam",
    age:34
}

let obj2 = {...obj1}

obj2.name = "Joe"

console.log(obj1);
console.log(obj2);

/**
 * Output
 * { name: 'sam', age: 34 }
{ name: 'Joe', age: 34 }
 */

let obj3 = {
    name : "disha",
    age : 45,
    obj4 : {
        address : 'pune',
        pincode : '411035'
    }
}

let obj5 = {...obj3};
console.log(obj5);
console.log(obj3);

obj5.obj4.address = 'mumbai';
console.log("After changes")
console.log(obj5);
console.log(obj3);

// When we do a change in nested object, it follows the same old pattern and the change
// is reflected in both the objects with shallow copy