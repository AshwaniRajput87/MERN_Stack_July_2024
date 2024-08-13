// /***

//    What is the reason behind of uisng promises?

//     1. callback hell problem - due to nested callbacks.
//     2. Inversion - (trust issue)

//         - cb based async function -> we have to send the cb to the 3rd party library function -> that library was calling the cb function multiple times.


//     To solve above problems, we use the concept of promises.

//     What is promise?

//       - Promise represents the outcome of the asynchronous operations in JS.
//        - It's an object:

//             value: 
//                1. intial value -> undefined
//                2. value is supposed to be here  basis on sucess or rejection of the state. 

//             state: 
//                1. pending (intial state)
//                2. fullfilled:
//                      resolved (in case of success)
//                      rejected(in case of failure)

//             After creating the promises, then you have to consumption the promises.

//             we use then(), catch(), finally()

//             promise make sure it has to invoke the function only once not the multiple times.

//  */


// const fs = require('fs');

// console.log('Before');

// const promise = fs.promises.readFile('./f11.txt');

// // console.log(promise);


// // setTimeout(()=> {
// //     console.log(promise);
// // }, 2000)


// promise.then((futureValue)=>{
//   console.log(`Content:` + '' + futureValue);
// }).catch((err)=>{
//     console.log('Error', err);
// })

// console.log('After');


/***

   What is the reason behind of uisng promises?

    1. callback hell problem - due to nested callbacks.
    2. Inversion - (trust issue)

        - cb based async function -> we have to send the cb to the 3rd party library function -> that library was calling the cb function multiple times.


    To solve above problems, we use the concept of promises.

    What is promise?

      - Promise represents the outcome of the asynchronous operations in JS.
       - It's an object:

            value: 
               1. intial value -> undefined
               2. value is supposed to be here  basis on sucess or rejection of the state. 

            state: 
               1. pending (intial state)
               2. fullfilled:
                     resolved (in case of success)
                     rejected(in case of failure)

            After creating the promises, then you have to consumption the promises.

            we use then(), catch(), finally()

            promise make sure it has to invoke the function only once not the multiple times.

 */


const fs = require('fs');

console.log('Before');

const p1 = fs.promises.readFile('./f1.txt');

// console.log(promise);


// setTimeout(()=> {
//     console.log(promise);
// }, 2000)


// p1.then((data)=>{
//   console.log('' + data);
//   const p2 = fs.promises.readFile('./f22.txt');
//   p2.then((data)=>{
//     console.log('' + data)
//     const p3 = fs.promises.readFile('./f3.txt');
//     p3.then((data)=>{
//         console.log('' + data)
//     });
//   })
// }).catch((err)=>{
//     console.log('Error', err);
// });

// console.log('After');

p1.then((data)=>{
    console.log('' + data);
    return fs.promises.readFile('./f2.txt');
}).then((data)=>{
    console.log('' + data);
    return fs.promises.readFile('./f3.txt');
}).then((data)=>{
    console.log('' + data);
}).catch((err)=>{
    console.log('Error', err);
});

console.log('After');


// then() -> it is used as an event handler for success data and make sure itself to invoke only once

// catch() -> it's also an event handler for failure/rejection and make sure invoking once.