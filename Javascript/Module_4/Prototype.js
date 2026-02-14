// Prototype
// A prototype is javascript is an object that is attached to any newly created object
// This prototype has built in methods that we can use
// A simple object will have only 1 prototype attached to it
// An object created by using constructor will have two prototypes attached to it in the chain form known as
// prototype chaining
// We can create our own method and add them to the prototype object of that particular class or function

let obj ={}
// This has only 1 prototype
console.log(obj)

// Constructor function
function Person(_name,_age){
    this.name = _name;
    this.age = _age;

    // this.getNameAge = function(){
    //     console.log(`This is my ${this.name} & this is my ${this.age}`)
    // }
}

// create new object with Person function
let person1 = new Person("sam",23);
let person2 = new Person("Joe",25);

// This has 2 prototypes in it.
console.log(person1);
console.log(person2);

// Output of the person objects with function 
/**
 * Person {name: 'sam', age: 23, getNameAge: ƒ}
 * Person {name: 'Joe', age: 25, getNameAge: ƒ}
 * 
 * the getNameAge is repeated for both, it is defined for both and creates redundancy
 * To avoid this, we can move that method from constructor function and add it as part of
 * the prototype methods.
 * In this way, we will define it only once and it will be referred by all the objects created by it
 * 
 */


// Add a new method in the prototype method
Person.prototype.getNameAge = function(){
        console.log(`My name is ${this.name} & my age is ${this.age}`)
    }

    // Output : Personage: 23name: "sam"[[Prototype]]: Object    
/**
 * Person 
 * age: 23
 * name:"sam"
 * [[Prototype]]: Object
 * getNameAge: ƒ ()
 * constructor: ƒ Person(_name,_age)
 * [[Prototype]]: Object
 */

console.log(person1.getNameAge("Adam",45))