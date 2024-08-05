/**
   
    polyfill of HOFs:

    1. map()
    2. filter
    3. reduce


 */




const cartItems = [
    {product: 'Laptop', price: 50000.0, qty:2},
    {product: 'Mobile', price: 20000.0, qty:1},
    {product: 'Tablet', price: 30000.0, qty:3},
];


//-------------------polyfill of filter --------------------

Array.prototype.myFilter = function(){ // Do as an assignment

}


const filteredArr = cartItems.myFilter(item => item.price > 20000);

console.log(filteredArr);
console.log(cartItems);


//-------------------polyfill of map --------------------

Array.prototype.myMap = function(callback){
    let newArr = [];

    for(let i = 0; i<this.length; i++){
        let result = callback(this[i]);
        newArr.push(result);
    }

    return newArr;
}

const tranformedData = cartItems.myMap((item)=>{
    return item.product;
});

const tranformedData1 = cartItems.myMap((item)=>{
    return item.price;
});

console.log(tranformedData);
console.log(tranformedData1);

//-------------------polyfill of reduce --------------------



Array.prototype.myReduce = function(cb, intialVal){

    let acc = intialVal !== undefined ? intialVal : this[0];
    let sidx = intialVal !== undefined ? 0 : 1; // sidx (start index -> array)

    for(let i=sidx; i<this.length; i++){
        acc = cb(acc, this[i]);
    }

    return acc;

}


const totalPrice = cartItems.myReduce((accum, item)=>{
    return accum + (item.price * item.qty)
}, 0);

console.log(totalPrice); // 210000

const productOfPrice = cartItems.myReduce((accum, item)=>{
    return accum * (item.price * item.qty)
}, 1);

console.log(productOfPrice);// 18000000000000


// 




