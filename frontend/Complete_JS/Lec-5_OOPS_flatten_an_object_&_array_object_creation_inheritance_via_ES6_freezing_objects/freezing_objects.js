/***

   freezing properties:

      - means making the properties immmutable, that means properties can't be modified, added or deleted.

      - This can be done by using below methods:

      1. Object.seal(): preventing adding new properties from being added to it and making all existing objects as non-configurable.

      - you can't add or delete the properties from an existing object but you can modify the values of an object.


      2. Object.freeze(): Freezing an object, making it read-only and preventing any modifications to its properties.

      - you can't add, delete or modify any propeties.

      - usecase: database configuration

      3. Object.preventExtentions(): Preventing new properties from being aaded to an existing object but allows changes to the existing properties.


 */

 const obj = {
    name: 'Ashwani',
    age: 28
 }

console.log(Object.isSealed(obj));// false

Object.seal(obj);

console.log(Object.isSealed(obj)); // true


obj.value = 'data'; // adding new property

delete obj.age // eleted new property


console.log(obj);

obj.name = 'Ashwin';

console.log(obj);


const dbConfig = {
    appName: 'google.com',
    database: {
        host: '127.0.0.1',
        user: 'Ashwani',
        password: 'Ashwin',
    }
    // host: '127.0.0.1',
    // user: 'Ashwani',
    // password: 'Ashwin'
}

console.log(Object.isFrozen(dbConfig));// false

Object.freeze(dbConfig);

console.log(Object.isFrozen(dbConfig)); //true


dbConfig.appName = 'scaler.com';
delete dbConfig.database.host
dbConfig.database.value = 'data';

console.log(dbConfig);

// deepFreeze() custom method - Assignments

    //Impl
      // 1. iterate the object
      // 2. recursively call the Object.freeze()


const car = {
    name: 'Mercedez',
    model: '2024'
}

Object.preventExtensions(car);

car.model = '2023';
car.value = 'abc';


console.log(car);
