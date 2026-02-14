// Constructor function 
// Constructor function is used to initialize a newly created objects and methods as well. 
// It acts like a template, makes creation of new similar objects easier, avoids redundancy of code

// Before Constructor function
// Que : Create 3 objects with name & age property

let obj1 = {
    name : "sam",
    age : 32
}

let obj2 = {
    name : "Joe",
    age: 36
}

let obj3 ={
    name:"Rachael",
    age: 25
}

// In the above example, the properties are same, values are different. but we repeated the same property multiple times
// To avoid this, we will use constructor function

// Constructor / Template
// this keyword creates an empty array and fills in with the values passed to the function. 
function CreateStudentObj(_name,_age,_grade)
{
    this.name = _name;
    this.age = _age;
    this.grade  = _grade;
    this.ShowGrade = function(){
        console.log(`${_name} has got ${_grade} Grade`);
    }
}

// calling or actual creation of the student obj
// new  keyword creates a new object 
let student1 = new CreateStudentObj("sam",25,"A");
let student2 = new CreateStudentObj("Joe",25,"B");
let student3 = new CreateStudentObj("Karl",28,"A");

student1.ShowGrade();
student3.ShowGrade();