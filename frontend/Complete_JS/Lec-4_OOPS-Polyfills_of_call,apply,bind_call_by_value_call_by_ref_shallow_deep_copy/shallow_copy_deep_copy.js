/***
  
    What is shallow copy?
       
       - A shallow copy will create a copy of top-levevl properties of an object not the nested object.


    Ways to implement the shallow copy of object?
     1. using spread operator: const person1 = {...person};
     2. using Object.assign(targetObject, srcObject);
        const person1 = Object.assign({}, person);

    Ways to implement the shallow copy of array?
    1. can use spread operator: let  arr = [1,2,3];
                const arr1 = [...arr];
    2. using concat method arr1.concat(arr);
    3. using map() method;



    What is deep copy?

      - craetes an independent copy of an object or an array, including the nested object.


    ways to implememt deep copy?

      1. JSON.parse(JSON.stringify());
      2. loadash _.cloneDeep();


   shallow copy vs deep copy:

   1. copies the top-level properties where deep copy copies the nested level properties
   2. share the reference of nested object where as deep copy create an independent copy of nested object.
   3. memory-efficient, faster where deep copy memory-intensive, slower.
   4. Chnages propagate to original object whereas in deep copy the chnages are not propagated.


 */

// copy of an object works, based call by reference concept and use the shared memory location of an object or arary.

const person = {
   name: "Vikas",
   age: 28,
   address: {
    city: 'Delhi',
    country: 'India',
    street: {
      faltNo: 123,
      block: 'M-Block'
    }
   }
}

// const person1 = {...person};
// const person1 = Object.assign({}, person);


// person1.name = 'Vikas Kumar',
// person1.age = 30;
// person1.city = 'Banglore';
// person1.address.street.faltNo = 234 

// console.log(person); // Vikas Kumar 30
// console.log(person1); // Vikas Kumar 30


// deepcopy implementation

const person1 = JSON.parse(JSON.stringify(person));

person1.name = 'Vikas Kumar',
person1.age = 30;
person1.city = 'Banglore';
person1.address.street.faltNo = 234 

console.log(person); // Vikas 28 Delhi
console.log(person1); // Vikas Kumar 30 Banglore

