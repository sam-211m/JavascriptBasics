// Reference data type
// They are mutable
// Copying a reference variable to another reference variable changes the data in both and reflects in both

let a = {
    name : 'sam',
    age : 23
}

let b = a;
// O/p -> 
// { name: 'sam', age: 23 }
// { name: 'sam', age: 23 }

b.name = "Joe"
console.log(a)
console.log(b)

/**
 * O/P --> 
 * { name: 'Joe', age: 23 }
{ name: 'Joe', age: 23 }
 */