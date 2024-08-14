/**
   Why promises are better than the callbacks?

     -> Promises can either be resolved or rejected once in it's lifetime.
     -> Avoid the the callback hell problem and make your code more understandable and maintainable.
     -> callbacks of promises goes into a separate queue which is known as microtask queue and it has the highest priority than the normal callback queue.


    What is microstask queue?
        -> microtask queue is a componnet of JS event loop
        -> responsible for handling the promises callbacks and has highest priority than the noraml callback queue.
        -> then(), catch() and finall() -> cb's of these methods are held inside the microtask queue

    conclusion: highest priority of the queues

    synchronous code > Microtask queue > callback queue

      

 */

 console.log('A synchronous task');

 setTimeout(()=>{
    console.log('B Set timeout cb')
 }, 0);

 queueMicrotask(()=>{
    console.log('F queue microtask cb')
 })

 Promise.resolve().then(()=>{
    console.log('C P1 microtask first cb')
 }).then(()=>{
    console.log('D P1 microtask second cb')
 });

 console.log('E sync task');