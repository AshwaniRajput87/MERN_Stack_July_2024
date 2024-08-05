/**
   Types of function:
    
    1. Normal function
    2. Arrow function
    3. Function Expression
    4. Recursive Function
    5. Callback function

       - When a function is passed as an argument inside a function and invoked in another function is known as callback function.

       - It is used in async operations, like handling of data after a fetch request.

    Higher Order Function(HOF):

       - HOF is also a function that meets one or both of the following criteria:

        1. It takes one or more functions as an arguments.
        2. It returns the function as a result.

        - How to write the custom HOF?

          - take referenec of the below code

        - built-in HOF for arrays:
          
          1. forEach(): Executes a given function for every item in an array.
                        Syntax: array.forEach(function);

          2. filter(): create a new array of elements based the criteria of the provided function. It is using the shallow copy.
           array.filter(callback function)

          3. map(): Executes a callback function on each element of an array. The callback function returns a new array with the returned new values. It is using the shallow copy concept.
            array.map(callback)

          4. reduce(): Applies a function to each element in an array to reduce into a single value.
            array.reduce(callback, initialValue);

          5. sort(): To sort the data either in assending order or descending based what the provided function returing the result.


 */
                        // add,       10, 20
 const applyOperation = (operation, a, b) => {

    return operation(a,b); // return add(10,20);// return 30
 }

const add = (x,y) => x+y;// return the value 30

const multiply = (x,y) => x*y;// return 5*30 // 150

console.log(applyOperation(add, 10, 20));// 30

console.log(applyOperation(multiply, 5, 30)); // 150



const cartItems = [
    {product: 'Laptop', price: 50000.0, qty:2},
    {product: 'Mobile', price: 20000.0, qty:1},
    {product: 'Tablet', price: 30000.0, qty:3},
];

cartItems.forEach((item)=>{

   console.log(`Product Name: ${item.product}, Product price: ${item.price} `)
  
});


// const filteredArr = cartItems.filter((item)=>{

//     return item.price > 20000

// });

const filteredArr = cartItems.filter(item => item.price > 20000);

console.log(filteredArr);
console.log(cartItems);


const tranformedData = cartItems.map((item)=>{
    return item.product;
});

const tranformedData1 = cartItems.map((item)=>{
    return item.price;
});

console.log(tranformedData);
console.log(tranformedData1);


const totalPrice = cartItems.reduce((accum, item)=>{
    return accum + (item.price * item.qty)
}, 0);

console.log(totalPrice);


const arr = [20, 4,1,50,30];
const sortedData = arr.sort((a,b) => a-b);
console.log(sortedData);
const sortedData1 = arr.sort((a,b) => b-a);
console.log(sortedData1);

const cartSortedData = cartItems.sort((a,b)=> a.price - b.price);
console.log(cartSortedData);



