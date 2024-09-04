/**

   Map, WeakMap, Set, WeakSet:

     - These 4 distincts data structures use to manage and store the different collection of data.

    Map: 

       -> allows you to store data in key: value pair.
       -> keys in a Map can be of any type, including the objects and primitives.
       -> Map provides you the methods to manipulate and access the properties.
       -> In Map, no duplicate keys are allowed.

    WeakMap:

       -> similar to Map witha key difference
       -> keys in WeakMap can be object only, can't be primitive.
       -> doesn't provide the methods to iterate over the keys or retireve the size of the WeakMap


 */


let myMap = new Map();

myMap.set('name', 'Ashwani Rajput');
myMap.set('age', 30);
myMap.set('age', 32)

console.log(myMap.size);
console.log(myMap.get('name'));

const obj = {
    name: 'Ashwani',
    age: 32
}

for(let[key, value] of myMap) {
    console.log(`${key}: ${value}`);
}


let myWeakMap = new WeakMap();

let key1 = {id: 1};
let key2 = {id: 2};

myWeakMap.set(key1, 'Ashwin');
myWeakMap.set(key2, 30);

console.log(myWeakMap.get(key1));