/**

   What is object? 
    
    -  Object is a real world entity(means that exist physically).
    -  An object is a collection of properties and methods, represented by key-value pairs, within the curly braces.
    -  How to acsess the methods or properties of an object?

        -  There are 2 ways:
        1. dot operator objectname.keyname
        2. bracket notation objectName['keyname']

    object vs JSON:

    JSON: stands for JavaScript Object Notation. used to exchange information/data over network via client and server. It's a text format or representation of data.

    JSON.parse(): to convert into the JS object

    JSON.stringify(): to convert the objects into the JSON(in textual format)

    {
      "name": "Ashwani Rajput",
      "agae": "32"
    }

    or 

    const obj = {
       name: "Ashwani",
       age: '32'
    
    }

    native object vs host object:
    -----------------------------

    native object: Objects that are provided by JS language itself. Eg: JSON, Date, Error


    host object: Objects that are provided by the environment. Eg: window, document, localStorage (browser), NodeJS is an environment (global, os, process)


    What is 'this' in JS?

     - this is keyword in JS which is used to set the context of current object.

    How "this" behaves in JS?

    1. Global Execution Context: this===window // true (Global Execution Context)
    2. object method: Whena function is called as a method of an object, this refers to the current object itself.
    3. constructor function: Earlier in ES5, we didn't have class keyword so to simulate the behavior of classes then we need to use constructor function concept.

      function Person(name, age) {
        this.name = name;
        this.age = age;

        this.greet = function(){
             console.log(`Hello, ${this.name}! How are you?`);
        }
      } 

      have create the object of CF: with the help new keyword.

      let ashwani = new Person('Ashwin', 30);



    -
 */



let person = {
    name: 'Ashwani Rajput',
    age: '30',
    greet: function() {
        console.log(`Hello, ${this.name}! How are you?`);
    },

    bio() {
        console.log(`Hi, My name is ${this.name} and my age is ${this.age}`);
    }
}

console.log(person);

console.log(person.name);
console.log(person['name']);
console.log(person.greet());
console.log(person.bio());  // at this point in without this keyword usage the context is set as window object


function Person(name, age) {
    this.name = name;
    this.age = age;

    this.greet = function(){
        console.log(`Hello, ${this.name}! How are you?`);
    }
} 

let ashwani = new Person('Ashwin', 30);
let geetha = new Person('Geetha', 25);
ashwani.greet();
geetha.greet();
console.log(ashwani.name);