// Polymorphism
// Polymorphism : Poly - many & Form - many forms
// We can have same method name in different classes behaving differently

class Animal{
    sound(){
        console.log("Animals make different sounds");
    }
}

class Dog{
    sound(){
        console.log("Dog barks");
    }
}

class Cat{
    sound(){
    console.log("Cat meows")
    }
}

let animal1 = new Animal();
animal1.sound();

let tommy = new Dog();
tommy.sound();

let percy = new Cat();
percy.sound();
