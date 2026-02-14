// Promises in Js either resolves or gets rejected
// It returns resolved when the condition is satisfied and it returns rejected when the condition is 
// not satisfied. The first state of a promise is "Pending state"
// In order to get the resolved state and the rejected state, we will have to use "then" for getting
// the resolved state and "catch" for getting the rejected state
// Js will throw error if we do not define "catch" for the error scenerio when the error scenario runs

// step 1: Produce a promise
let mypromise = new Promise(function(resolve, reject){
    let a = 4;
    let b = 5;
    setTimeout(() => {
        if(a==b)
            resolve(" The values are equal")
        else
            reject("The values are not equal")
    }, 2000);
})

//console.log(mypromise);
// O/p -> Promise { <pending> }

// we need to use "then" to hold the success of a promise

mypromise.then(function(result){
    console.log(result);
})

// O/P -> The values are equal


// Error scenario without catch
/**
 * UnhandledPromiseRejection: This error originated either by throwing inside of an async function without a catch block, or by rejecting a promise which was not handled with .catch(). The promise rejected with the reason "The values are not equal".
    at throwUnhandledRejectionsMode (node:internal/process/promises:392:7)
 */


mypromise.catch(function(err){
    console.log(err);
})

// O/p - > The values are not equal