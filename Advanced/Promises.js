Promise is an object that represents eventual completion of async operation


const cart = ['shoes' , 'pants','chaddi']

const promise = createOrder(cart) // createOrder is an api which fetches some information about cart

promise object states -> pending // promise is not completed
                         fulfilled // promise is completed
                         rejected // promise is rejected
// promise -> it is ans object {data:undefined} as soon as createOrder is executed 
// as long as data is not completely fetched into promise object from createOrder {data:undefined} remains undefined
// as data is fetchd completely {data:some_data} then folowoing code will be executed immidiately

promise.then(function (orderId) {
    proceedToPayment(orderId);
})


const cart = ['shoes', 'pants', 'chaddi'];

const promise = createOrder(cart); // returns a promise in 'pending' state

promise.then(function(orderId) {
    // called when promise is fulfilled
    proceedToPayment(orderId); 
});

// we can also use chaining

creatOrder(cart) // once the createOrder is completed and promisestate is finished then proceedToPayment is called
    .then(function (orderId) {
        return proceedToPayment(orderId);
    })
    .then(function (transactionId) { // once the proceedToPayment is completed, promisestate is finished then verifyPayment is called
        return verifyPayment(transactionId) // dont forget to write return 
    })


// How to create a Promise ??

cart = ['pants','chaddi','jhuta']
console.log("Promise is created");

const promise = createOrder(cart) // it create a object with promiseState and promiseResult keys and other things currently state is pending
console.log(promise);


promise.catch(function(err){ // when promise is rejected
    console.log(err);
    
})
promise.then(function (orderId) { // when promise is fullfiled
    console.log("Promise is resolved successfully " , orderId);
})

function createOrder(cart) {
    const pr = new Promise(function (resolve, reject) {
        if(!validate(cart)) {
            const err = new Error('Promise is rejected')
            reject(err)
        }
        else {
            let orderId = '13131'
            resolve(orderId)
            setTimeout(function () {
                resolve(orderId)
            },5000)
        }
    })
    return pr
}
function validate(cart) {
    return false;
}


// Nice way to write using chaining

    createOrder(cart)
        .then(function(orderId) {
            console.log(`orderId is ${orderId}`);
            return orderId
        })
        .then(function (orderId) {
            return proceedToPayment(orderId)
        })
        .then(function (message) {
            console.log(message);
        })
        .catch(function (err) {
            console.log("Cart is not valid");
        })
    
    function createOrder(cart) {

        const pr = new Promise(function (resolve, reject) {

            if(!validate(cart)) {
                const err = new Error('Promise is rejected')
                setTimeout(() => {
                    reject(err) // reject promise with result message (err)
                }, 5000);
            }
            else {
                orderId = '13131'
                setTimeout(function () {
                    resolve(orderId) // resolve promise returning orderId
                },5000)
            }
        })
        return pr
    }
    function validate(cart) {
        return true;
    }
    
    function proceedToPayment(orderId) {
        return new Promise(function(resolve,reject) {
            setTimeout(function () {
                resolve(`Payment for orderId ${orderId} is successful`)
            },5000)
        })
    }
    