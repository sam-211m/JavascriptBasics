// Some Method
// -> Some method will iterate through each element of an array
// -> It returns true or false if any one of the element satisfies the condition
// Every Method
// -> Every method will also iterate through each element of an array
// -> It returns true or false only if each and every element satisifies the condition

// Some method
// condition 1:  
//const transactions = [200,400,500,-600,700,-900]
// Condition 2: 
const transactions = [200,400,500,600,700,900]
let someTransaction = transactions.some((n)=>{
    return n<0
})
console.log("Some Output : "+someTransaction);

// Every Method

let everyTransaction = transactions.every((n)=>{
    return n>0;
})
console.log("Every Output:  " + everyTransaction);


