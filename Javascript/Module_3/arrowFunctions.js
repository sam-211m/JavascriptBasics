
// arrow function
// fat arrow =>
// It replaces the function() keyword with ()=> in function expression

    // function expression
    let add = function(a,b){
        console.log(a+b)
    }

    // arrow function
    let sub = (a,b) => {
        console.log(a-b)
    }


    // we can also write a single line arrow function as 
     let mul = (a,b) => console.log(a*b);


     let s = a => console.log(a);

     let c = ()=> console.log('Hello');

    add(5,7)
    sub(7,5)
    mul(4,6)
    s(3)
    c();