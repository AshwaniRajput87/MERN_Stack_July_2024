/**

   async/await: 
   - introduced in ES8(2017)

   - syntatic sugar of consuming of promises

   - provides you readble code and make compact version consumption of promises

   - without async , can't use await
 */

const fs = require('fs');

console.log('Before');

const promise = fs.promises.readFile('./f1.txt');
// console.log(promise);

// promise.then((content)=>{
//     console.log('' + content);
// }).catch((err)=>{
//      console.log(err);
// })

const readContentOfAFile = async() =>{
  // started the spinner/loader
  try {

    const data = await promise;
    console.log('' + data);
    
  } catch (error) {
    console.log(error)
  } finally {
    // can stop the loader here
    console.log('Finally is executed')
  }
}


readContentOfAFile()


console.log('After');