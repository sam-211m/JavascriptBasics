'use strict'

// Encapslation 
// Encapsulation in Js can be done by using var, getter and setter properties 

class Person{
    constructor(_name,_age,_id)
    {
        var id = _id
        this.name = _name,
        this.age = _age

        this.getId = function(){
            return id;
        }       
    }
}

let Person1 = new Person("Adam",25,"48794599");
console.log(Person1);
// We cannot directly get the ID
//Person { name: 'Adam', age: 25, getId: [Function (anonymous)] }
// We can get the id only by invoking the method 
console.log(Person1.getId());

Person1.id = "5890jlkjg"
// we won't be able to assign new values to the id property

Person1.name = "Raven";

console.log(Person1.getId());
console.log(Person1.name);
/// O/P 48794599
//   48794599
//  Raven