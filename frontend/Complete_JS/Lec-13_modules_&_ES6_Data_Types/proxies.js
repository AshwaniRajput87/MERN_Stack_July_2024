/***
     What is proxies in JS?

        proxies are the objects that allow you to intercept and customise operstions perfomed on objects such reading, writing and deleting properties.
 */

 let obj = {
    eng: 'English',
    math: 'Mathematics'
 }

 let handler = {
    get(target, prop){

        if(prop in target) {
            return target[prop];
        } else {
             throw new Error('Property not found')
        }

    },

    set(target, prop, value){

        if(prop in target){
            target[prop] = value;
            return true;
        } else {
            throw new Error('Property not found')
        }

    }
 }

 // create a proxy

 const proxy = new Proxy(obj, handler);

 console.log(proxy.eng);
 //console.log(proxy.science);

 proxy.history = 'History'; // Error: can add any new property if you using proxies.