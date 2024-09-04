/**

   Flatten an object:

   1. nested object:

   const nestedobj = {
        person: {
            name: {
                first: 'Ashwani',
                last: 'Rajput'
            },
            age: 32,

            address: {
                street: 'Block A',
                city: "Delhi",
                zip: 110059
            }
        },
        hobbies: ['Reading', 'Teaching', 'Coding'],
        isActive: true
   }

   o/p:

    {
        person.name.first = 'Ashwani',
        person.name.last = 'Rajput',
        person.age: 32,
        person.address.street = 'Block A'
        person.address.city = "Delhi",
        person.address.zip = 110059,
        hobbies.0 = 'Reading',
        hobbies.0 = 'Teaching',
        hobbies.0 = 'Coding',
        isActive: true
    }

 */

const flattenObject = (obj, delimeter='.', parentKey='') => {

    const flatten = {};

    for(const key in obj) {

        if(Object.prototype.hasOwnProperty.call(obj, key)) {
            const newKey = parentKey ? `${parentKey}${delimeter}${key}` : key;

            if(typeof obj[key] === 'object' && obj[key] !== null) {
                Object.assign(flatten, flattenObject(obj[key], delimeter, newKey))
            } else {
                flatten[newKey] = obj[key];
            }
        }
    }
    
    return flatten;
}

 const nestedobj = {
    person: {
        name: {
            first: 'Ashwani',
            last: 'Rajput'
        },
        age: 32,

        address: {
            street: 'Block A',
            city: "Delhi",
            zip: 110059
        }
    },
    hobbies: ['Reading', 'Teaching', 'Coding'],
    isActive: true
}


console.log(flattenObject(nestedobj));