/**
   Ways to create an object in JS?

    - majorly 4 ways to create an object:

    1. Object literal:

        - A comma-separated list of key-value pairs in the curly braces.
        - eg: let objName = {
                    objKey1: objValue1,
                    objKey2: objValue2,
                    objKeyN: objValueN,
            }

    2. Object.create():

        - Object.create() is a built-in method used to create a new object and links it to the prototype of an existing object.

        - parent object of obj or obj2 obj3
              obj -> Object
              obj3 -> obj -> Object 

    3. Function Constructor:

       In JS (ES5), we use constructor function to create an object via new keyword.

         

    4. Class constructor:

       In ES6(2015), class keyword was introducted in ES6 and used to define the class and create n number of instances(object) via new keyword.



 */


//  const obj = {
//     name: 'Ashwin',
//     age: 36,
//     userDetails: function() {
//         console.log(`user name is ${this.name} and your age is ${this.age}`);
//     },
//     obj2: {
//         username: this.name  
//     }
//  }

 // Solution

 const obj = {
    name: 'Ashwin',
    age: 36,
    userDetails: function() {
        console.log(`user name is ${this.name} and your age is ${this.age}`);
    }
 }

const obj2 = {
    username: obj.name  
}

console.log(obj);
console.log(obj2);
console.log(obj2.username);

 // IQ: How can we use methods on primitive data types even though they don' have their own properties and methods?

 // Answer: 

 const obj3 = Object.create(obj);

 obj3.name = 'Vasu';

 console.log(obj);// There is no imapct on the original object because Object.create() creates a shallow copy.

 console.log(obj3);

 // How to create an object without parent?
 const obj4 = Object.create(null);
 obj4.name = 'Ashwani',
 obj4.lastName = 'Rajput';
 console.log(obj4);


// How check the prototype of any object
console.log(obj.isPrototypeOf(obj3));
console.log(obj2.isPrototypeOf(obj));


// Constructor function (ES5)

function Person(name, age){

    this.name = name;
    this.age = age;

    this.greetMsg = function() {
        console.log(`Hi, ${this.name} and your age is ${this.age}`);
    }
}

const ashwani = new Person('Ashwani', 32);
console.log(ashwani.greetMsg());

const vikas = new Person('Vikas', 28);
console.log(vikas.greetMsg());


// class constructor

class Person1 {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greetMsg(){
        console.log(`Hi, ${this.name} and your age is ${this.age}`); 
    }
}


const ashwaniObj = new Person1('Ashwani', 32);
console.log(ashwaniObj.greetMsg());

const vikasObj = new Person1('Vikas', 28);
console.log(vikasObj.greetMsg());

// How to iterate an object?
// for...in loop
// for(let key in objectName){....}
console.log(vikasObj);

// How to iterate an object using Object.keys() method? -> returns an array of enumerable properties of an object.
// to iterate such an array of enumerable properties -> use for...of loop (Introduced in ES6)
// for(const key of keys){...}

console.log(Object.keys(vikasObj));


const keys = Object.keys(ashwaniObj);

for(const key of keys) {

    const value = ashwaniObj[key];

    console.log(`${key}: ${value}`);

}

// for...in vs for...of : for..in iterates over the key of an object whereas for...of iterates over the values of an iterable (eg: an array or a string)






