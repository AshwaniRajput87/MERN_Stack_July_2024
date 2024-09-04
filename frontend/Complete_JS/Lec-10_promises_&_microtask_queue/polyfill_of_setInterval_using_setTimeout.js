/**
  IQ: Write the polyfill of setInterval() and clearInterval() using setTimeout()

   setInterval(cb, dßelay)


   Quick recap:

     1. Async programming paradigm: to execute the the functions later on.
     async programming uses only the callbacks.

     2. how to read the content of the files using serial and parallel.

     3. sync code vs async code.

     4. setTimeout(), clearTimeout(), setInterval(), clearInterval()

     5. polyfill of setInterval() and clearInterval() 

 */

 // Syntax: const timerId = setInterval(cb, delay);

 // syntx: clearInterval(timerId)


 const mySetInterval = (cb, delay) => {

   // call by reference (shared memory)
   let obj = {
      flag: true,
   }

    const myFunc = () => {
      if(obj && obj.flag === true) {
         cb();
         setTimeout(myFunc, delay);
      }
    }
    setTimeout(myFunc, delay);
    return obj;
 }

 const fn = () =>{
    console.log('I am a cb function')
 }

 let obj = mySetInterval(fn, 1000);

 // ployfill of clearInterval - assignment;


 const clearCb = () => {
   console.log('cancelled the callback');
   clearMyInterval(obj);
 }

 //setTimeout(clearCb, 4000);
 //clearTimer(timerID);

 const clearMyInterval = (obj) => {
   obj.flag = false;
 }





