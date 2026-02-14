// Callback function in javascript is similar to a delegate in C#
// A callback function is a function that is passed to another function as an argument.
// Purpose : We pass a function as an argument and we can excute that function whenever we want it. 


const isEven = (n) => {
    if(n%2 == 0)
        return true;
}

const calculator = (evenCb, x)=>{
    console.log("I am calling a callback function");
    let result = evenCb(x);
    console.log(result);
}

calculator(isEven,4)
