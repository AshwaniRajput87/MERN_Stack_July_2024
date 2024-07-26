/**
   What is the concept od scope in JS?

    Scope: refers to the region of the code where the varaible can be accessed and modified.

    - 3 types of scope in JS:

      1. Global scope: varibales declared outside any function  or block have a global scope.
      - They can accessed from anywhere in the code, including withing the functions asw well.

      2. Local Scope (Function Scope): variables declared inside a function have functioanl scope.
      - The variables are accessible only within the function.

      3. Block Scope: introduced in ES6 with let and const keyword.
         - variables declared with let and const keywords inside a block {} have a block scope.

         - These variables are accessible with the block.
 */

let a = 10; // global variable

function print() {
    let b = 20; // function scope
    console.log(a); // 10

    console.log(a+b);// 30

    let c = 10; // function scope
    if(c) {
        let d = 30;  // block scope
        console.log(d); // 30
    }

    console.log(d); // undefined -> Reference error d is not defined
}

print();