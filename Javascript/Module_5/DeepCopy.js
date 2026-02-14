// DeepCopy.js
// DeepCopy is when we create a copy of an object, change the newly created object, it should 
// not change the previous object, even at nested level
// We can achieve deepcopy by using Json.Parse(Json.toStringify(obj))
// Json.Parse - Converts a JavaScript Object Notation (JSON) string into an object.
// Json.toStringify - Converts a JavaScript value to a JavaScript Object Notation (JSON) string.
// It changes the value at the nested level too

let obj = {
    name: "sam",
    age:32,
    address : {
        city : "mumbai",
        state : "Maharashtra",
        
    }
}

let obj2 = JSON.parse(JSON.stringify(obj))

console.log("Before the changes")

console.log(obj);
console.log(obj2);

console.log("After the changes")

obj2.address.city = "Pune"

console.log(obj);
console.log(obj2);



