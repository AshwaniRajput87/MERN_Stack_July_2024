// polyfill of deepy copy:

const deepCopy = (obj)=> {

    // check wherther the obj is primitive types/ values or an object.
    if(obj===null || typeof obj !== 'object') {
        return obj;
    }

    // create an empty array or an empty object
    let copy = Array.isArray(obj) ? [] : {};

    for(let key in obj) {
        // check the object contains those own property or not

        if(obj.hasOwnProperty(key)) {
            copy[key] = deepCopy(obj[key]); // recursive function
        }
    }

    return copy;

}

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

const person1 = deepCopy(person);

person1.name = 'Vikas Kumar',
person1.age = 30;
person1.city = 'Banglore';
person1.address.street.faltNo = 234 
// person1.address.street.data = 'sahdghas'

console.log(person); // Vikas 28 Delhi
console.log(person1); // Vikas Kumar 30 Banglore