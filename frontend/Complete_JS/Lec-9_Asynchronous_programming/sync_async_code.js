// synchronous code? -> the code that will execute sequentially
// console.log('Before');

// const fn = () => {
//     // 1sec delay
//     for(let i=0; i<1000; i++);
//     console.log('i am fn');

// }

// fn();


// console.log('After');

// asynchronous code? -> A piece of code that needs to be excuted at current point in time and other piece of code is execute at later point in time.

console.log('Before');

const fn = () =>{
    console.log('i am fn')
}

setTimeout(fn, 1000);

console.log('After');


// Summary:

/***

    JS is a single threaded. It provides us the logic to execute and web API provides the features.

    callback queue: When an async operations(likewise setTimeout, event Listerners) is readt to be executed, its callback function is place din the callback queue.

    Event loop: The event loop is continously checks the call stack and the callback queue and pushes the callback function in the call stack to execute the code.



 */