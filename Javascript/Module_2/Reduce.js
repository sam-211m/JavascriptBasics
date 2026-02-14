// Reduce method
// => Reduce method is used to iterate through each element in an array
// => It can have 2 to 4 input parameters
// => The first parameter is an accumulator and the second parameter is the iterator value
// => The function also needs the first value of the accumulator to be specified
// => It returns a single evaluated value
// => We can also call it without defining the initial value

//Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.

//@param callbackfn — A function that accepts up to four arguments. The reduce method calls the callbackfn function one time for each element in the array.

//@param initialValue — If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value.

// Que : Find the sum and product of all the elements in a given array

const arr = [2,3,5,6,7,8];
let reduceArr = arr.reduce((accumulator, value)=>{
    let updatedResult = accumulator + value;
    return updatedResult;
},0)

console.log(reduceArr)

// Product

let productArr = arr.reduce((acc,n)=>{
    let result = acc*n;
    return result;
},1)

console.log(productArr);
