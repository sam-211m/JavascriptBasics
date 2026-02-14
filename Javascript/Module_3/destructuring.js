// Destructuring helps us to unpack the values, properties from an array or an object easily
let arr = ['minal','shubhangi','pornima'];

// normal way to access an array value
let a = arr[0]
let b = arr[1]

console.log(` a = ${a} ,b = ${b}`)

// with destructuring
let [c,d,e] = arr;

console.log(`c= ${c},d= ${d},e= ${e}`)


// Destructuring the objects
// Object destructuring requires the same property name to access
// it uses {} as it is an object
// we can also get nested object properties

let obj = {
    name : 'sangeeta',
    age : 32,
    number : 123,
    address : {
        city : 'pune',
        pincode : 411035
    }
}
//let { name , age , address  ,number  } = obj;
let { name : n, age : ag, address: {city, pincode},number : num } = obj;
// console.log(`name : ${name},
//     age = ${age},
//     number = ${number},
//      adddress = ${address}`)


     console.log(`name : ${n},
    age = ${ag},
    number = ${num},
     city = ${city},
     pincode = ${pincode}`)
