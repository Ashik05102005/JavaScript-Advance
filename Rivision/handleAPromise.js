// // handleAPromise.js
// const promise = Promise.resolve("Hello World");
// promise
// .then((result)=>console.log(result))
console.log("Start");

const promise = new Promise((resolve) => {
    console.log("Inside Promise");
    resolve();
});

promise.then(() => {
    console.log("Promise Resolved");
});

console.log("End");