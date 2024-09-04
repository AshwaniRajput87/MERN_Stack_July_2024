/**

   Polyfill of promisify/promises(resolve, reject, then, catch, finally) and promise.all()

    - promise - having 3 states:
                1. pending
                2. resolved
                3. rejected

                Promise.resolve()
                new Promise((resolve, reject)=>{
                   if(data){
                     resolve(data)
                   
                   } else {
                   
                     reject(err)
                   }
                
                })


 */

 const PENDING = 'pending';
 const RESOLVED = 'resolved';
 const REJECTED = 'rejected';

 function CustomPromise(executorFn) {

    // add properties and methods
    let state = PENDING;
    let value = undefined;

    let scbArr = [];
    let fcbArr = [];
    let finallyArr = [];


   const resolve = (val) =>{
     if(state !== PENDING) return;

     state = RESOLVED;

     value = val;

     scbArr.forEach((cb)=>{
        cb(value);
     })
     executeFinallyCbArr();
   }

   const reject = (err) =>{
    if(state !== PENDING) return;

     state = REJECTED;

     value = err;

     fcbArr.forEach((cb)=>{
        cb(value);
     })

     executeFinallyCbArr();
   }


   this.then = function(cb){

     if(state === RESOLVED) {
        cb(value);
     } else {
        scbArr.push(cb);
     }

     return this;

   }

   this.catch = function(cb){

    if(state === REJECTED) {
        cb(value);
     } else {
        fcbArr.push(cb);
     }

     return this;
    
   }

   this.finally = function(cb){
    if(state === RESOLVED || state === REJECTED){
      cb();
    } else {
      finallyArr.push(cb);
    }

    return this;
   }

   const executeFinallyCbArr = () =>{
    finallyArr.forEach((cb)=>{
        cb();
     })
   }

   // call executor Function

   executorFn(resolve, reject);
 }

 CustomPromise.resolve = (val) =>{
  return new CustomPromise(function(resolve){
    resolve(val);
  })
 }

 CustomPromise.reject = (err) =>{
  return new CustomPromise(function(_, reject){
    reject(err);
  })
 }

 //promise.all(arrayofPromises)

CustomPromise.myPromiseAll = function(arrayOfPromises){

  return new CustomPromise((resolve, reject)=>{

    let unresolved = arrayOfPromises.length;

    const resolvedPromiseArr = new Array(unresolved);

    if(unresolved === 0){
      resolve(resolvedPromiseArr);
      return;
    }

    arrayOfPromises.forEach((promise, index)=>{

      promise.then((value)=>{
        resolvedPromiseArr[index] = value; //{}
        unresolved--;
        if(unresolved === 0) {
          resolve(resolvedPromiseArr);
        }
      }).catch((err)=>{
        reject(err);
      })
    })
  })
}



 //promise.allSettled() -> do as an assignment

// creating the object of custom promise
// const promise = new CustomPromise((resolve, reject)=>{
//     setTimeout(()=>{
//         const data = {name: 'Ashwani Rajput'};
//         //const data = null;
//         if(data){
//             resolve(data);
//         } else {
//             reject(new Error('promise rejected'));
//         }
//     }, 1000)
// });

// const promise1 = new CustomPromise((resolve, reject)=>{
//     setTimeout(()=>{
//         const data = {name: 'Ashwani Rajput'};
//         //const data = null;
//         if(data){
//             resolve(data);
//         } else {
//             reject(new Error('promise rejected'));
//         }
//     }, 1000)
// });

// const promise2 = new CustomPromise((resolve, reject)=>{
//     setTimeout(()=>{
//         const data = {data: ['10', '20', '30']};
//         //const data = null;
//         if(data){
//             resolve(data);
//         } else {
//             reject(new Error('promise rejected'));
//         }
//     }, 2000)
// });

// const p1 = CustomPromise.resolve('Hello Ashwani');
// const p2 = CustomPromise.reject('Some Error')
// const p3 = CustomPromise.resolve(10)

// const promise = CustomPromise.myPromiseAll([p1, p2]);
// console.log(promise);

 CustomPromise.resolve().then(()=>{
    console.log('C  microtask first cb')
 }).then(()=>{
    console.log('D microtask second cb')
 });

// consumption of promise
// promise.then((data)=>{
//     console.log(data);
// }).catch((err)=>{
//     console.log(err)
// }).finally(()=>{
//     console.log('finally has to be executed')
// });





