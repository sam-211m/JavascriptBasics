// settimeout - This function will set a timer 
// Settimeout is an asynchronous function
// It will call the callback function after the  provided delayed timeline 
console.log("First")

setTimeout(cb,3000)

function cb()
{
    console.log("Hey Man, how are you?")
}

console.log("End")

/**
 * Output :
 * First
    End
    Hey Man, how are you?
 */