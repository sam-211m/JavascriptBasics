// Set interval is an asynchronous timer function 
// Set interval is used to run a specific piece of code at a given interval
// It will run infinitely if not stopped 
// Inorder to stop this timer, we will be using cleartimeout and settimeout methods 
// All the timer methods are asynchronous
let timer = setInterval(cb1,1000)

// if we directly call the clearinterval, it will immediately execute and will not allow the timer
// to run at all. Therefore, clearInterval should always be used with Settimeout

//clearInterval(timer)


setTimeout(function(){
    clearInterval(timer);
},5000)



function cb1(){
    console.log("Hello");
}



