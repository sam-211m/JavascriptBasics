/**
 * Closures
 * Closure states that a nested function will always have access to all the variables and methods
 * defined in the lexical scope i.e from  the main method
 * We wil have to return the nested function value
 */


function main(){ // lexical scope starts
    let a = 10;
    function child(){
        console.log(a);
    }
    return child();
}               // lexical scope ends

main();
// O/p -> 10

/*** ******************************************************************** */
// Grandchild method can also access the parent and grandparents propery
// It is like a child can have access to the properties of all his ancestors 

function grandparents()
{
    let lastName = "Dsouza"
    function parent()
    {
        let fatherName = "Denzil"
        console.log(`My father's name is ${fatherName} ${lastName}`)
        function children()
        {
            let myName = "Martin"
            console.log(`My name is ${myName} ${fatherName} ${lastName}`)
        }
        return children
    }
    return parent 
}

let parent = grandparents();
console.log(parent);

// The grandparents function now holds parent function
// When we call the grandparents(), it will call the parent function  

parent();
// O/P -> [Function: parent]
// My father's name is Denzil Dsouza

let child = parent();
console.log(child);
// We can call the child method through parent method
// This method now holds the pointer to the inner method i.e child method 
//[Function: children]

child();
// O/P -> My name is Martin Denzil Dsouza

grandparents();

