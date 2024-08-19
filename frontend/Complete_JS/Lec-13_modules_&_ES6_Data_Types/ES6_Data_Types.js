/**

  ES 6 data types:

    1. BigInt: to deal a very large number then can use bigint data type, after a very number put n as suffix.

    2. Symbol: In JS, if you would like to create a unquie and immutable value that is guranteed to be a uquie identifier and can be used as property key in the objects.

 */

 const largerNum = 12353446457576587687887n;

 const secondLargerNum = 36453757346545878574548n;

 console.log(largerNum + secondLargerNum);


const s1 = 'hello';
const s2 = 'hello';

 console.log(s1===s2) // true

 const str1 = Symbol('hi');
 const str2 = Symbol('hi');

 console.log(str1===str2) // false

const symbol1 = Symbol('designation');



 const person = {
    name: 'Ashwani Rajput',
    age: 30,
    [symbol1]: 'Tech Leader'
 }

 console.log(person[symbol1]);



// doubt resolution

person[symbol1] = 'Software Engineer';
console.log(person[symbol1]);