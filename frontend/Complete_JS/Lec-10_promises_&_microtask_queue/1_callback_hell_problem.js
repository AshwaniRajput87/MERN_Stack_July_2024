/**

   - Async programming is the backbone of javascript based stack.
   - Asynchronous programming having functions -> invoking these function later point in time.
   There 3 ways to call executing in async programming:
   1. callback
   2. promises
   3. async/await


  - What is callback hell problem?

     - refers a situation in async programming  where multiple nestec callbacks make the code difficult to understand and maintain.

     - https://medium.com/gousto-engineering-techbrunch/avoiding-callback-hell-97734e303de1

 */


 const fs = require('fs');

 fs.readFile('./f1.txt', (err, data)=>{
    if(err) {
        console.log('Error', err)
    } else {
        console.log(''+ data);
        fs.readFile('./f2.txt', (err, data) => {
            if(err) {
                console.log('Error', err)
            } else {
                console.log(''+ data);
                fs.readFile('./f3.txt', (err, data) =>{
                    if(err) {
                        console.log('Error', err)
                    } else {
                        console.log(''+ data);
                    }
                })
            }
        })
    }
 })



