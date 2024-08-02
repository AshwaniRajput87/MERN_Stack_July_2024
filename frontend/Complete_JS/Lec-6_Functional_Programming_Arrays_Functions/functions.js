/***
    
    What is the idea to use functional programming?

      - FP is a paradigm that focues on pure functions, Higher order functions, to write the predictable and maintainable logics/code.

      - Idea to use Functional Programming are:
        1. function first.
        2. pure function: always produces the same output for the given input with no side effects.
        3. Immutability
        4. declarative programming
        5. Avoid the side effects
        6. Higher Order Function
        7. Functional composition: combining the smaller function to to write a complex function.
    
    What is function?

      - A reusable block of code that perfoms some specific task.

    Types of function:
    1. normal function: function functionName(arguments) { // function declaration
      /// logic
    
    }
    functionName(argumnets); // calling function

    2. arrow function: introduced in ES6, 


      const functionName = (arguments) => {
        // write the logic 
        // return the value
      }

    3. function expression: when a function is storing into a variable is know as function expression

     const functionNameVariable =  function() {
       // write the logic
       // return the value
     }

    
    4. Recursive function: A function that calls itself again and again with a base condition is known as recursive function.

    5. callback function: When a function is passed as an argument. you call the callback function later point in time

    6. HOF(Higher Order Function):

        custom HOF:

        built-in HOF:

          1. forEach()
          2. filter()
          3. map()
          4. reduce()


 */

 function sum(a,b){
  return a+b;
 }

 const add = (a,b) =>  a+b;

 function mul(a,b) {
    return a*b;
 }

 const multiply = (a,b) => a*b;

console.log(mul(10,30));

console.log(mul(10,50));

console.log(add(10,50));

console.log(multiply(10,50));

//------------------ callback function --------------

function fn(param) {
  console.log(typeof param);
  const msg = param();

  console.log(msg);
}

function greetMsg() {
    return 'Hello, Ashwani'
}

fn(greetMsg);

// ----------Higher Order function -------------

// will cover in next session