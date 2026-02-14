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