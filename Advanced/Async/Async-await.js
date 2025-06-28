//*** async *** function always returns promise even if it is not a promise it will wrap it into a promise and returns it

// *** diff between older resolving way and newar way (async + await)
//  older way -> using .then it will not wait for it to resolve / reject it will execute next lines of codes ***
//  newar way -> using async + wait it will wait till promise is resolved / rejected completelly then line by line next lines will be executed



// **** actually js does not wait for promise to resolve in async + wait 
//     1] when it see promise is not resolved using (wait)
//     2] that function just pops out of (call stack) completelly storing current line of execution
//     3] when that promise is resolved / rejeted then that function again comes in to call stack 
//     4] and start execution from where it left

// older way to handle a promise
const p = new Promise((resolve,reject) => {
    setTimeout(() => {
        resolve('Promise is resolved after 3 sec')
    }, 3000);
})
// function resolveUsingOld() {
//     p.then((res) => console.log(res)) // *** basically this will not wait for resolving promise it will just add it to schedule and execute next lines
//     console.log("it will be printed before resolving");
// }
// resolveUsingOld()
// console.log("It will also be printed before resolving");


// *** Newar way to handle a promise ***  
// async function resolvePromiseUsingAsync() { // *** always await is written inside (async function) *** 
//    const res =  await p // *** This will wait until promise is resolved / rejected THEN ONLY next lines of code will be executed
//    console.log("it will be printed before resolving"); 
//    console.log(res);
// }
// resolvePromiseUsingAsync()
// console.log(42424); // this will be printed before promise p because async functoin just poped out of callstack as it sees promise is not resolved it
//                    // again that function comes in call stack once promise p is resolved


const API_URL = 'https://api.github.com/users/tushar-kachare'

async function fetchData() {
    const data = await fetch(API_URL)
    const jsonData = await data.json()
    console.log(jsonData);
}
fetchData().catch((err) => console.log("Somthing wrong !!")) // catch to handle errors remember async returns promise 

// fetch => Response.json() => jsonValue // fetch returns promise, Response.json() returns jsonValue which is an object

// to handle error you can use try and catch wrap promise code in try block and in catch using err paramter write errors 
// eg]
// try {
//     const data = await fetch(API_URL)
//     const jsonData = await data.json()
//     console.log(jsonData);
// } catch (error) {
//     console.log(error);
// }
Promise.all([Promise.resolve(1),Promise.resolve(2)])
.then(console.log);

Promise.allSettled([Promise.resolve(10),Promise.reject("ERROR")])
.then((res) =>console.log(res)).catch(err => console.log(err)); // it returns array if settled promises