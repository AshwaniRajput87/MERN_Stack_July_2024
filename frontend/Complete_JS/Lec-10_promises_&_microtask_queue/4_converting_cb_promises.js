/**

   promisify: converting the cb to custom promise

   new Promise((resolve, reject)=>{
   
    if(err){
    
      reject(err);
    } else {
    
       resolve(data);
    }
   
   });

 */

 // read the content of any file using cutom promise

 const fs = require('fs');

 const promiseReadFile = (filePath) =>{
    return new Promise((resolve, reject)=>{ // resolve and reject are the functions based success and failure scenario you can invoke them accordingly
       fs.readFile(filePath, (err, data)=>{
         if(data) {
            resolve(data);
         } else {
            reject(err);
         }
       })
    });
}

const promise = promiseReadFile('./f12.txt');

// console.log(promise);

promise.then((data)=>{
    console.log('' + data)
}).catch((err)=>{
    console.log(err)
}).finally(()=>{
    console.log("Promise either get resolved or rejected")
})

