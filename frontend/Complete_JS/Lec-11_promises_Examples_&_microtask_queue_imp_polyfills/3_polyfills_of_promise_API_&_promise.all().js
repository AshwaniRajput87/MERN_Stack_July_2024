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
 const REJECTED = 'rejected'

 function CustomPromise(executorFn) {

    // add properties and methods

    let state = PENDING;
    let value = undefined;

    let scbArr = [];
    let fcbArr = [];


   const resolve = (val) =>{
     if(state !== PENDING) return;

     state = RESOLVED;

     value = val;

     scbArr.forEach((cb)=>{
        cb(value);
     })
   }

   const reject = (err) =>{
    if(state !== PENDING) return;

     state = REJECTED;

     value = err;

     fcbArr.forEach((cb)=>{
        cb(value);
     })
   }


   this.then = function(cb){

     if(state === RESOLVED) {
        cb(value);
     } else {
        scbArr.push(cb);
     }

   }

   this.catch = function(cb){

    if(state === REJECTED) {
        cb(value);
     } else {
        fcbArr.push(cb);
     }
    
   }

   this.finally = function(){
    
   }

   // call executor Function

   executorFn(resolve, reject);

 }


const promise = new CustomPromise((resolve, reject)=>{
    setTimeout(()=>{
        //const data = {name: 'Ashwani Rajput'};
        const data = null;
        if(data){
            resolve(data);
        } else {
            reject(new Error('promise rejected'));
        }
    }, 1000)
});


promise.then((data)=>{
    console.log(data);
});


promise.catch((err)=>{
    console.log(err)
})


