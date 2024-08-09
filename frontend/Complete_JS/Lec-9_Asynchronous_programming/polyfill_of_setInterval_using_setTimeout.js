/**
  IQ: Write the polyfill of setInterval()  using setTimeout()

   setInterval(cb, delay)

 */


 const mySetInterval = (cb, delay) => {

    const myFunc = () => {
        cb();
        setTimeout(myFunc, delay);
    }
    setTimeout(myFunc, delay);
 }

 const cb = () =>{
    console.log('I am a cb function')
 }

 mySetInterval(cb, 1000);

 // ployfill of clearInreval - assignment;

