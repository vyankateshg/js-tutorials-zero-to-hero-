/*
🔥 Bhai ke Code Presents 🔥

This JavaScript file is a complete demo of asynchronous programming concepts.
It includes simple and well-commented examples of:

1. ✅ Callbacks
2. ✅ Callback Hell
3. ✅ Promises
4. ✅ Promise Chaining
5. ✅ setTimeout
6. ✅ Asynchronous Functions
7. ✅ .then() & .catch() Error Handling

🧨 Real-world Problems & ✅ Their JavaScript Solutions are explained too!
*/


// ---------------------- setTimeout (Async Delay) ----------------------
// ✅ Use Case: Delay the execution of code without blocking the main thread.


// console.log("one");
// console.log("two");

// const hello = () => {
//     console.log("hello"); // Will run after delay
// };

// setTimeout(hello, 4000); // Runs after 4 seconds – late lateef bhai

// setTimeout(() => {
//     console.log("jai jai"); // Callback function after 2 sec
// }, 2000);

// console.log("three"); // This runs immediately – JS is non-blocking


// ---------------------- Callback Function ----------------------
// ✅ Use Case: Pass a function as an argument to be run later.


// const sum = (a, b) => {
//     console.log(a + b); // Adds two numbers
// };

// const calculator = (a, b, sumCallBack) => {
//     sumCallBack(a, b); // Callback gets executed
// };

// calculator(10, 30, sum); // Runs sum
// calculator(10, 30, (a, b) => {
//     console.log(a * b); // Multiplication via callback
// });


// ---------------------- 🧨 Problem: Callback Hell ----------------------
// Jab async kaam ke andar async kaam... pura jungle ban jata hai 😵


// getData(1, () => {
//     console.log("getting data 2.....");
//     getData(2, () => {
//         console.log("getting data 3.....");
//         getData(3, () => {
//             console.log("getting data 4.....");
//             getData(4); // Endless nesting
//         });
//     });
// });


// ---------------------- ✅ Solution: Promises ----------------------
// Promises help avoid callback hell and handle async tasks cleanly.


// const getpromise = () => {
//     return new Promise((resolve, reject) => {
//         console.log("I am a promise"); // Gets called immediately
//         resolve("success"); // Everything went fine
//         // reject("network error"); // If error happens
//     });
// };

// let promise = getpromise();
// promise.then((res) => {
//     console.log("Promisefulfilled", res);
// });
// promise.catch((err) => {
//     console.log("kuch to error hai");
//     console.log(err);
// });


// ---------------------- getData Function (Simulates Async Task) ----------------------
// ✅ Simulates a delayed data fetch using Promises and setTimeout

function getData(dataid, getnextdata) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`data with data id ${dataid}`);
            resolve("success"); // Operation done
        }, 3000);
    });
}


// ---------------------- 🧨 Problem: Promise nesting ----------------------
// Even Promises can become messy if we don't return them properly.

getData(1).then((res) => {
    console.log(res);
    getData(2).then((res) => {
        console.log(res); // Nesting again – not good for long chains
    });
});


// ---------------------- ✅ Solution: Promise Chaining ----------------------
// Return each Promise to form a clean chain – much more readable.

getData(1)
    .then((res) => {
        return getData(2); // Clean flow
    })
    .then((res) => {
        return getData(3);
    })
    .then((res) => {
        console.log("success", res);
    });


// ---------------------- 🧨 Problem: Async Error Handling ----------------------
// Async tasks fail too – like server down, timeout, etc.
// If you don't handle errors, the app crashes silently.


// let promises = new Promise((resolve, reject) => {
//     console.log("i am a promise");
//     // resolve("ho gaya reee");
//     reject("Promis pura nhi ho raha hai reee"); // Failure simulation
// });

// console.log(promises); // Will show pending or rejected


// ---------------------- ✅ Solution: .catch() for Error Handling ----------------------
// Use .catch() to catch any rejection or failure from promise chain.


// promise
//     .then((res) => { console.log("done", res); })
//     .catch((err) => { console.log("error caught", err); });


// ---------------------- Asynchronous Functions ----------------------
// ✅ Modern way to handle Promises – cleaner than .then()

// function asyncFunc1() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("some data1");
//             resolve("success");
//         }, 4000);
//     });
// }

// function asyncFunc2() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data 2");
//             resolve("success full2");
//         }, 4000);
//     });
// }


// ---------------------- Async Execution in Sequence ----------------------
// ✅ Run async functions one after another using .then() chaining

// console.log("fetching data1");
// let p1 = asyncFunc1();
// p1.then((res) => {
//     console.log(res);
//     console.log("fetching data 2");
//     let p2 = asyncFunc2();
//     p2.then((res) => {
//         console.log(res);
//     });
// });

// ✅ Alternate approach (cleaner with await – can be shown if needed)
// console.log("fetching data 2");
// asyncFunc2().then((res) => {
//     console.log(res);
// });
