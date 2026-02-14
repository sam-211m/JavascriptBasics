// Currying
// Currying in Js is a method of splitting arguments across multiple nested functions

// Without currying
function sum(x,y,z)
{
    return x+y+z;
}

console.log(sum(2,3,4));
// O/P -> 9

/*** With Currying */
// I do not want to pass all the arguments in the first method, i want to split it with different methods

function curried(x)
{
    return function first(y)
    {
        return function second(z)
        {
           console.log(x+y+z);
        }
    }
}

let curriedSum = curried(2);
console.log(curriedSum); // This holds [Function: first]

let curriedFirstSum = curriedSum(3);
console.log(curriedFirstSum); // This holds [Function: second]


curriedFirstSum(5);

//curried(2);
// It wont return any value if we directly call the main method as it needs all the 3 parameters

