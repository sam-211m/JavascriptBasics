// Filter :
// -> Filter method iterates through each element of an array.
// -> It filters the data based on a given condition and returns the data that satisfied the condition
// -> It returns the duplicate values as well
// -> It returns the result in the array format

// Que - Find the even numbers from a given array 
const transactions = [299,4455,45,645,34,6,7,6,9];
let filterTransactions = transactions.filter((n)=>{
    return (n%2 == 0)
})

console.log(filterTransactions);
