/**
   What is default parameter?

    - Assiging a default value to a function parameter.
    - Was introduced in ES6
     
   What is spread operator? - in ES6

    - Spread out the elements into individual elements from an array or objects.
    - Represented by (...)
    - Benefit to use: promotes the immutability, which means the original won't get affected after the chnages in an array or object.

    What is rest parameter? - in ES6

    - Rest paramter in a function allows to collect the multiple parameters in a single array.
    - Represented by (...args) or (...params);
    - Benefit to use: Easier to work with variable-length argument lists


 */

 // Problem:

function greet(name) {
    if(name && name.length) {
        console.log(`Hello, ${name}`);
    }
}

greet();// Hello, undefined
greet('Shaswatha');// Hello, Shaswatha


//Solution: Default parmamter

function greet(name = 'Guest') {
    console.log(`Hello, ${name}`);
}

greet();// Hello, Guest
greet('Shaswatha');// Hello, Shaswatha



// --------------------------- Spread operator ---------------

let arr = [1,2,3,4,5];


console.log(arr);

console.log(...arr);

// problem: copy an array with updated values but without impacting original array

//let arr2 = [...arr];

// arr.push(200);
// arr[6] = 10;

console.log(arr);

// solution: spread operator

let arr2 = [...arr];

arr2.push(200);
arr2[6] = 10;

console.log(arr2);


//---------------------------Rest parameters --------------

// problem: findMax(45, 10, 49, 3, 50); // 50

const findMax = (...numbers) => { //[45,10,49,3,50]

console.log(numbers);

  return Math.max(...numbers);

}

console.log(findMax(45, 10, 49, 3, 50, 100, 140,150));



