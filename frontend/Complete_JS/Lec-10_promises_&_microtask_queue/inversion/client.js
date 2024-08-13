const { runMlalgo }  = require('./lib');

console.log("Before");

let amount = 100;

let price = 20;

const cb = () => {
    amount = amount - price;
    console.log('Amount', amount);
}

runMlalgo(amount, cb); // 80

console.log('After');

// creating a trust issue
