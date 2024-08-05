
/**
  * Inheritance: means re-usability, a mechanism to inherit the properties and methods fron an existing object.

    In ES5, we use prototypal inheritance: allows objects to inherit the properties and method from their proptotypes. (Please the code of previous session)


    How to achieve inheritance via ES6? 

    - In ES6, it's a mechanism where child class inherit the properties and methods from the parent class.

    - To achieve that we use extends.

 */


class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greetMsg(){
        console.log(`Hi, ${this.name} and your age is ${this.age}`); 
    }
}

class SuperHuman extends Person {
    constructor(name, age){
        super(name, age);
    }
    show() {
        this.greetMsg();
    }
}

const ashwin = new SuperHuman('Ashwin', 30);

console.log(ashwin.show());

