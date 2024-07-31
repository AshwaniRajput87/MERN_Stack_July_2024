/**

   call by value: A function recieves the copy of actual data, so changes you made inside the a function doesn't impact the original data;

   In JS, The primitive data types are using call by value concept. 


   call by reference: A function recieves the reference or memory address of the actual data, so changes made in the inside the function will impact the original data. 

   In JS, Every objects or array are using the concept of call by reference. Every object uses shared memory location.

 */


 function callByValue(number) {
    number++;
    return number
 }

 let number = 5;
 console.log(number);
 console.log(callByValue(number));// 6



function callByReference(data) {
    for(let i = 0; i < data.length; i++){
        data[i] = data[i]*2;
    }
 }

 let arr = [1,2,3,4,5];
 console.log('Array Values', arr);


callByReference(arr);

console.log('Array Values after callByReference Method', arr);

