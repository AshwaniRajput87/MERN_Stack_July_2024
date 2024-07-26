/**
  Quick Recap:
  ------------
  1. Object: A ollection of properties and methods, represented via key-value pairs, withing the curly braces.
  eg: let obj = {
    name: "Ashwani Rajput",
    greet: fuction() {
       // write yor logic here
    }
  };

  2. JSON: JavaScript Object Notation.It helps to exchnages the data b/w server and a client. Esay to understand and read. JSON.parse(): helps to convert into a JS Objects and JSON.stringify() when object needs to convert to the JSON.

  3.Host object: Objects provided by the enviornment. Browser (window, document) and nodeJS (global, process, fs, os, http(modules)).

  Native Object: Objects provided by JS language. Eg: Date, Number, String, JSON

  4. This keyword and the differnt behavior of this:

    this: reserved/keyword in JS. It refers to the context that is being currently used. It's value depends on the how and where your JS code is executed.

    1. Global Context: "this" refers to global object which "window" in case of browser. 

    this === window; // true

    2. Inside a function(normal function): "this" refers to the global object which is "window" here.

    function functionName(arg1, arg2,...argN) {
       // wite the logic
    
    }

    3. Inside an object method: The value of this refers to the current object itself.

    const person = {
       name: "Ashwani Rajput",
       age: 30.
       greet: function() {
         console.log(`${this.name}`);
       }
    }

    4. In a constructor function: this refers  to the new object being created.

      function Person(name, age) {
      
        this.name = name;
        this.age = age;

        this.greet = function() {
        
           console.log(`${this.name}`);
        
        }
      }

    const ashwani = new Person('Ashwani Rajput', 34);

    ashwani.greet();

    5. In arrow functions:

       - Arrow function doesn't have their own this; they inherit the "this" from the surrounding context in which they are craeted.
       -  
       
        const person = { // window which is a global object
          name: "Ashwani Rajput",
          age: 30,
          greet: () =>  {
            console.log(`${this.name}`); // window.name = undefined
          }
        }

    6. In event handles: DOM, the value of "this" refers to the element/tag that trgirred the event.

    <button>Click me</button>

    const btn = document.querySelector('button');

    btn.addEventListener('click', ()=> {
      console.log(this);
    
    }) 

    7. Explicitly set the "this": this can be manually set via call, apply and bind methods.

    What is chaining in JS?

     - It's a technique to call multiple methods on an object in single line of code.

     person.greet().bio().showData();

     NOTE: you just need to return this from each methods(in our example up, down, showStep)
 */


const ladder = {
  step: 0,
  up(){
    this.step++;
    return this;
  },
  down(){
    this.step--;
    return this;
  },
  showStep(){
    console.log(this.step);
  }

}

//ladder.up().up().up().down().showStep();
// ladder.up();
// ladder.up();
// ladder.up();
// ladder.down();
// ladder.showStep();

ladder.up().up().up().down().showStep();



