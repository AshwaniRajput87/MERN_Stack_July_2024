const fs = require('fs');
const promise = Promise.resolve(10);
promise
  .then(function (data) {
    console.log("92", data);
    return "hello";
  }).catch(function (firstThenVal) {
    console.log("113", firstThenVal);
    return 100;
  }).then(function (secondThenVal) {
    console.log("116", secondThenVal);
    return fs.promises.readFile("f1.txt");
  }).then(function (thirdThen) {
    console.log("120" + thirdThen);
  }).catch(function (firstThenVal) {
    console.log("113" + firstThenVal);
    return 100;
  });