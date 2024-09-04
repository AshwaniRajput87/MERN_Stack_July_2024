/***

   There are few more important methods available in promises: all(), allSettled() and race().

     what is race condition?

        - occurs when 2 or more async operations  to access the same shared resource or modify the same data simultaneously then the outcome will be unpredicatble.


   all():
      - takes an array of promises and return a new promise when all input promises are fullfilled.
      - If any of the promise rejects then entire resulting promise is also going to reject.

   allSettled():

     - takes an array of promises and return a new promise as an array of object when the respective promise are getting resolved or rejected.

   race(): takes an array of promises but it returns a new promise if any one of the first promises are settled, whether it resolve or rejects. 



 */

 const p1 = Promise.reject('Hey the data can not be fetched');
 const p2 = Promise.reject('Hey the data can not be fetched');
 const p3 = Promise.resolve(true);

//  const promise = Promise.all([p1,p2,p3]);

//  const promise = Promise.allSettled([p1,p2,p3]);

 const promise = Promise.race([p1,p2,p3]);

//  console.log(promise);

 promise.then((data)=>{
    console.log(data);
 }).catch((err)=>{
    console.log(err);
 })