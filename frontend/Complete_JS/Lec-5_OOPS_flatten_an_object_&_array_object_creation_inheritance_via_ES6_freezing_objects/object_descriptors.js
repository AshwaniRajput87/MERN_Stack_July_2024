/**

   To create the immutable objects, we need to understand

   Object descriptors:

    - Object descriptors in JS, is used to define and control the properties of an object. 
    - To allow you to specify the attributes such as whether a property can be written, enumerated or configured.
    - Every object descriptors have 2 things: 
    1. data descriptors:
       value, writable, enumerable, configurable 
    2. Accessor descriptors:
       get, set, enumerable, configurable

    Object.defineProperty(object, property-name, descriptors)

   Object.seal():

   Object.freeze():

 */

//  const person = {
//     name: 'Ashwani',
//     age: '32'
//  }

 const person = {}

 Object.defineProperty(person, 'name', {

    value: 'Ashwani',
    writable: false, // can't change,
    enumerable: true, // will show up in loop other can't iterate via loop
    configurable: false, // can't be deleted or re-defined

 });


 // please do as in assignments Object.defineProperties()

 console.log(person.name);

 person.name = 'Ashwin';

 console.log('person name', person.name);

 for(let key in person) {
    console.log(person[key]);
 }

 delete person.name;

  for(let key in person) {
    console.log(key); // can't delete the properties becuse configurale is set as false, to delete it turn it on as true
 }