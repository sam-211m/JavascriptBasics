// Classes in Javascript / modern ECMA was introduced to add the features of OOPS
// Classes are blueprint of an object
// We can have constructors, methods and properties inside a class
// Here we use "constructor keyword for defining a constructor inside a class"

class Student{
    constructor(_name,_age){
        this.name=_name;
        this.age=_age;
    }
    Welcome(){
        console.log(`Welcome ${this.name}`);
    }
}

// create objects from classes
let student1 = new Student("Adam",25);
let student2 = new Student("Eve",23);
console.log(student2);
console.log(student2.name);
student1.Welcome();
