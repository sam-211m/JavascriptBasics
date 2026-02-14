// Find Method
// -> Find method will iterate through each element
// -> It is used to find the first element that satisfies the condition
// -> It returns the first encountered value 
// Find Index Method
// -> FindIndex method will also iterate through each element
// -> It is used to find the index of the first element that satisfies the condition.


//Find function
const transactions = [200,-300,500,600,-800]
let findTransaction = transactions.find((n)=>{
    return n>0;
})
console.log(findTransaction);

// Find Index function
let findIndexTransaction = transactions.findIndex((n)=>{
    return n<0;
})
console.log(findIndexTransaction);
console.log(transactions[findIndexTransaction]);