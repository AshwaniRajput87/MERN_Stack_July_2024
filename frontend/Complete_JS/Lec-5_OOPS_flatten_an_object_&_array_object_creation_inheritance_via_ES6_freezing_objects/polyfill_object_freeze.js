Object.prototype.myFreeze = function(obj) {

    if(typeof obj !== 'object' || obj === null) {
        return obj;
    }

    // preventing the new properties to be added
    Object.preventExtensions(obj);

    Object.getOwnPropertyNames(obj).forEach(function(key){

        const descriptor = Object.getOwnPropertyDescriptor(obj, key);

        if(descriptor && descriptor.configurable) {
            if(descriptor.value !== null && typeof descriptor.value === 'object') {
                Object.myFreeze(descriptor.value);
            }
        }

        // make the each property as non-configurable and non-writable
        Object.defineProperty(obj, key, {
            writable: false,
            configurable: false,
            enumerable: descriptor.enumerable
        });

        return obj;
    });
}



const dbConfig = {
    appName: 'google.com',
    // database: {
    //     host: '127.0.0.1',
    //     user: 'Ashwani',
    //     password: 'Ashwin',
    // }
    host: '127.0.0.1',
    user: 'Ashwani',
    password: 'Ashwin'
}

console.log(Object.isFrozen(dbConfig));// false

Object.myFreeze(dbConfig);

console.log(Object.isFrozen(dbConfig)); //true

dbConfig.appName = 'scaler.com';
delete dbConfig.host
dbConfig.value = 'data';

console.log(dbConfig);
