// Method chaining
// Method chaining is passing the result of a method to another method and return a single result

// Que : Find all the women and their age from the given array of objects

const arr = [
    { name: "A", age: 20, gender: "F" },
    { name: "B", age: 40, gender: "M" },
    { name: "C", age: 50, gender: "F" },
    { name: "D", age: 26, gender: "F" },
    { name: "E", age: 24, gender: "M" },
    { name: "F", age: 45, gender: "F" },
    { name: "G", age: 49, gender: "F" },
    { name: "H", age: 29, gender: "M" }, 
    { name: "I", age: 25, gender: "F" }
]


// Normal approach with higher order functions 
// Step 1: Find all females 

let females = arr.filter((f)=>{
    return f.gender == "F"
})

console.log(females);
/**
 * [
  { name: 'A', age: 20, gender: 'F' },
  { name: 'C', age: 50, gender: 'F' },
  { name: 'D', age: 26, gender: 'F' },
  { name: 'F', age: 45, gender: 'F' },
  { name: 'G', age: 49, gender: 'F' },
  { name: 'I', age: 25, gender: 'F' }
]
 */
let femaleAge = females.map((x)=>{
    return x.age;
})

console.log(femaleAge);
// o/p - [ 20, 50, 26, 45, 49, 25 ]

// With method chaining
let method1 = arr.filter((f)=>{
    return f.gender == "F"
}).map((r)=>{
    return r.age;
})

console.log("Result from Method Chaining : "+method1);


// Que : Filter out positive element and calculate the total amount

const transactions = [20,34,-56,-78,45]
let result = transactions.filter((x=>{
    return x>0
})).reduce((acc,r)=>{
    let sum = acc + r;
    return sum;
}, 0)

console.log("Results : " + result);