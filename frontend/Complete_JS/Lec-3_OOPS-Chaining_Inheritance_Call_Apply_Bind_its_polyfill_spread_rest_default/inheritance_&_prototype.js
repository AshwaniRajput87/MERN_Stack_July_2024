/**
  what is inheritance in JS?

   - Inheritance means re-usability.
   - It's a mechanism where one object can inherit the properties and methods from another object.
   - Let understand how it works in JS? 
   - In JS, Everything is object

   const arr = [1,2,3,4,5];
    console.log(arr);

    // arr -> Array(properties and methods of Array) -> Object(properties and methods can be accessed for Array)

    - JS uses prototypes to implement the inheritance.
    - Each object has a prototype and the custom objects can inherit the properties and methods from their prototypes. // arr -> Array -> Object

    What is prototype?

    - It's an object that links to a particular object by default.
    - eg: person -> Object
          arr -> Array
          function -> Function

    What is prototypal inheritance?

    - PI allows objects to inherit the properties and methods from their prototypes.



    Child Object -> Parent Object
                  access(properties and method of Parent)

    - What the advantage of the inheritance in JS?

     1. reuse of the code
     2. Saving the time and efforts
     3. Save memory space.
     4. Child obhects can access the single or multiples method of Parent object.

 */

 let obj = {};
 console.log(obj); // obj->Object

 const person = {
    name: "Ashwani Rajput",
    age: 35
 }

 console.log(person);

 console.log(person.hasOwnProperty('name'));

console.log(person.hasOwnProperty('greet'));

const arr = [1,2,3,4,5];
console.log(arr);

// arr -> Array(properties and methods of Array) -> Object(properties and methods can be accessed for Array)

// Problem-1: claculate the sum of all the numbers inside this array

const arr1 = [10,20,30,40,50];

arr1.sum = function(){

  let sum = 0;

  for(let i = 0; i<this.length; i++) {
    sum = sum + this[i];
  }

  console.log(sum);
};

// arr1.sum();// 150
// arr.sum();// 15

Array.prototype.sum = function(){
    let sum = 0;

  for(let i = 0; i<this.length; i++) {
    sum = sum + this[i];
  }

  console.log(sum);
}

Array.prototype.name="Ashwani"

arr1.sum();
arr.sum();



