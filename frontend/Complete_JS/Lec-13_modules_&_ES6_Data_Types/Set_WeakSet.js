/**

  Set:

    - allows you to store the unique values of any types
    - doesn't allow duplicate values, each value/element must be unique.


  WeakSet:

    - similar like Set but with a key difference.
    - only allow to store object not primitives
    - doesn't expose the methods to iterate over elements and also not provide the size for the WeakSet.


 */

// returns the unique company names from an array of object.

const userData = [
    {id: 1, name: 'Ashwani', company: 'IBM'},
    {id: 2, name: 'Nidhi', company: 'Microsoft'},
    {id: 3, name: 'Arman', company: 'Microsoft'},
];

const companies = [];

userData.forEach((obj)=>{
    companies.push(obj.company);
});

console.log(companies);

const uniqueCompanies = [...new Set(companies)];

console.log(uniqueCompanies);

 const mySet = new Set();

const myWeakSet = new WeakSet();


const obj1 = {id:1};
const obj2 = {id:2};
const obj3 = {};

myWeakSet.add(obj1);
myWeakSet.add(obj2);

console.log(myWeakSet.has(obj1));
console.log(myWeakSet.has(obj3));

console.log(myWeakSet.delete(obj2));
console.log(myWeakSet.has(obj2));


