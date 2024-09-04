const fs = require("fs");
const promise = fs.promises.readFile("./f1.txt");

promise.then(scb);// Hi the data is i am a f1 content
promise.then(scb, fcb); // Hi the data is i am a f1 content
promise.then(null, fcb);// nothing happens
// promise.catch(fcb);
promise.finally(finallyCB); //  I will be called via finally


function scb(data) {
  console.log("Hi the data is " + data); // Hi the data is i am a f1 content
}
function fcb(error) {
  console.log("inside catch", error.message);
}

function finallyCB() {
  console.log(" I will be called via finally");
}