/**

   Application on closure:

   1. currying function or infinite currying:

      - It's just a technique in FP, that transforms the multi-arguments function into a sequence single-argument function.
      - function fn(arg1, arg2,..argN) -> function curriedFunction(arg1)(arg2)(arg3);
   2. How to create private variables via closure?

      - A variable defined inside the function is private and can only be accessed within the function code.


   3. How to memoize a finction?


 */


 const sum = (...args) => {

    let sum = 0;

     for(let i = 0; i<args.length; i++){
        sum+=args[i];
     }

     return sum;

 }


console.log(sum(1,2,3,4,5))//15

console.log(sum(1,2,3))//6

const curriedSum = (a) => {

    return function(b){

        return function(c){
           return function(d){
             return a+b+c+d;
           }
        }

    }

}

console.log(curriedSum(1)(2)(3)(4));


// infinite currying

const infiniteCurryingSum = (a) => {//1 //3 // 6

    return function(b){//2 //3 // undefined
        if(b){
            return infiniteCurryingSum(a+b); //3+3 =6
        }

        return a;
    }

    

}

console.log(infiniteCurryingSum(1)(2)(3)()); //-> 1 time: infiniteCurryingSum(3)(3)())
                                            // //-> 1 time: infiniteCurryingSum(6)()) // 6


//----- How to create private variables via closure? ----

function createEvenStack() {
    let items = [];

    return {

        push(item){
            if(item%2===0){
                items.push(item);
            } else {
                console.log('Please give the even input only')
            }
        },

        pop(){
            return items.pop();  
        }

    }

}

const stack = createEvenStack();

stack.push(10);
stack.push(2);
stack.push(20);
stack.push(14);
stack.push(3);


console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());


// Memoisation: It's a method/technique that improves the function calls by saving the results of costly computations with same arguments.


function calc(n){
    let sum = 0;
    for(let i = 0; i < n ; i++){
        sum+=n;
    }

    return sum;
}

// console.time();
// console.log(calc(10000));
// console.timeEnd();

// console.time();
// console.log(calc(10000));
// console.timeEnd();



// How to memoize a function via closure?

const memoize = (fn) =>{

    let cache = {};

    return function(n) {

        if(cache[n] !== undefined){
            return cache[n];
        } else {
            const result = fn(n); // calc(10000);

            cache[n] = result;

            return result;
        }

    }

}

const efficientCalcFn = memoize(calc);

console.time();
console.log(efficientCalcFn(10000));
console.timeEnd();

console.time();
console.log(efficientCalcFn(10000));
console.timeEnd();


// doubt session

var result = (function(){
    var name="steve";
    return "Hello" + name + "!";
})(); // IIFE

console.log(result); // Helloseteve!


// IIFE: Immediately Invoked function Expression

  (function(){
   // logic come here
  })();