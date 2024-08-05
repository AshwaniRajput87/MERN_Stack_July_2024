/**
   
    Function as an object:

      - Function can have properties and methods like an object.


      How to store function in an array?

      const functionList = [function1, function2,..., functionN];

 */

 function fn(){
    console.log('Hello, I am a fn');
 }

 fn.count = 0;
 fn.showCount = function() {
    console.log('count value is:', this.count);
 }

 console.log(fn.count);
 fn.showCount();

 console.log(fn);


 const greetMsg = (name) => {
    console.log(`Hello, ${name}!`)
 }

 const displayData = (x) => {
    console.log(`Value is ${x}`);
 }

 const fnList = [greetMsg, displayData];

fnList[0]('Ashwnai Rajput');
fnList[1](10);

