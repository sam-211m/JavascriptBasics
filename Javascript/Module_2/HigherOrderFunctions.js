/// A Higher Order function is a function that takes another function as an argument or returns a function as 
///         an output.
/// 1) Map() -> Map method will iterate through each element in an array and do the specified operations
///             & return the result in a new array
/// 2) Foreach() -> Foreach method will also iterate through each element in an array and do the specified 
///              operation.
//               ->  Foreach will not return a new array, infact, if we try to return it, it will 
///              return an undefined value. We can log it or use the value within its function scope only
///              -> The syntax for foreach and map method is same
///              -> When we console log it, it will return plain output, won't return an array 

let arr = [1,2,3,4,5];

// loop through each element, return the square of each element

let arr2 = [];

// Usual approach
for(var i=0;i<arr.length;i++)
{
    //arr2[i] = arr[i] * arr [i]; 
    arr2.push(arr[i]*arr[i])   
}

//console.log(arr2);

/// With Map Function

let squareArr = arr.map(function(n)
{
   return n*n;
})
//console.log(squareArr);

// Take the amount and convert it into dollars using map function
const transactions = [1000,3000,4000,-3000,-450,500]
const intodollar = 80;

const dollarTransaction = transactions.map((amount)=>{
    return amount/intodollar + "$";
})

console.log(dollarTransaction);

/// Foreach method
const dollarTransaction1 = transactions.forEach((n)=>{
    console.log(n/intodollar.toFixed());
})


