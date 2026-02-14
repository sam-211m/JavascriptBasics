// Problem Statement : Create a order, accept only coffee, reject other orders, process it and return the 
// order success result

function acceptOrder(order){
    return new Promise(function(resolve,reject){
            if(order == "coffee")
                resolve("Order accepted")
            else
                reject("We only accept coffee")
    })
}

function processOrder(acceptedOrder){
    return new Promise(function(resolve){
            resolve("Order is successfully processed")

    })
}

/***Promise Chaining approach */

// acceptOrder('coffee').then(function(res){
//     console.log("order is received");
//     console.log(res);
//      let orderPlaced = processOrder(res)
//      return orderPlaced;
// }).then(function(res){
//     console.log(res);
// })


/**** Async await approach */
// Async can be applied only on functions

async function takeOrder(order) {
    try{
let orderProcessed = await acceptOrder(order)
    console.log(orderProcessed);
    let result = await processOrder(orderProcessed)
    console.log(result)
    }
    catch(err)
    {
        console.log(err);
    }
    
    
}

//takeOrder("coffee")
// O/p -> Promise { 'Order accepted' } without await

takeOrder("coffee")
// with await -> O/P -> Order accepted

takeOrder("tea")
// O/P -> We only accept coffee