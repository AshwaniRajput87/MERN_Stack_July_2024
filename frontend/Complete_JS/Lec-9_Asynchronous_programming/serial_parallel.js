/***

   Serial and parallel execution of async code:


        When we discuss the code -> it can either be synchronous code or asynchronous code.
        When we discuss the tasks -> They can either be serial or parallel.
      

 */


// const fs = require('fs');
//  // Synchronous function provided by nodeJS to read the content of file

// console.log('Before');

// const buffer = fs.readFileSync('./f1.txt');

// console.log("" + buffer);


// console.log('After');


const fs = require('fs');
 // Asynchronous function provided by nodeJS to read the content of file

// console.log('Before');

// fs.readFile('./f11.txt', (err, data)=>{
//     if(data){
//         console.log("" + data);
//     } else {
//         console.log(err);
//     }
// });

// console.log('After');


// serial task via async code

// console.log('Before');


// fs.readFile('./f1.txt', (err, data)=>{

//     let content1 = data;
//     fs.readFile('./f2.txt', (error, data)=>{
//         let content2 = data;
//         console.log(content1 + " " + content2);
//     })
    
// });

// console.log('After');




// parallel task via  async code

console.log('Before');


fs.readFile('./f1.txt', (err, data)=>{
    console.log('' + data);
});

fs.readFile('./f2.txt', (error, data)=>{
    console.log('' + data);
})

console.log('After');