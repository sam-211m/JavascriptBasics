// Classical Inheritance
// A derived class/ child class can inherit properties and methods from a parent class
// Super method is used to pass the properties to be inherited in child class from parent class
// extends keyword is used for inheritance in Js

class Person {
    constructor(_name, _age) {
        this.name = _name;
        this.age = _age;
    }

    Welcome(){
        console.log(`Welcome ${this.name}`);
    }
}


//ReferenceError: Must call super constructor in derived class before accessing 'this' or returning from derived constructor       
   //  at new Teacher
   // We cannot direclty extends a parent class and use properties 
   // we can inherit method as well using super keyword
class Teacher extends Person{
    constructor(_name,_age,_classStrength)
    {
        super(_name,_age); // super constructor with the parent properties to be reused in child class 
        this.classStrength = _classStrength;
    }
    // We can use same name or different method name too  
    Welcome()
   {
    super.Welcome();
   }
}

class Student extends Person{
    constructor(_name,_age,_cgpa){
        super(_name,_age)
        this.cgpa = _cgpa;
    }
}

let Teacher1 = new Teacher("Heena",56,85);
Teacher1.Welcome();

//console.log(Teacher1);

let Student1 = new Student("Adam",25,8.5);
//console.log(Student1);