const fs = require("fs");
let p = new Promise(function (resolve, reject) {
    setTimeout(function () {
        reject(new Error("some value"));
    }, 2000);

    resolve("some error");
    setTimeout(function () {
        reject(new Error("some value"));
    }, 2000);
    resolve("some error");
    setTimeout(function () {
        reject(new Error("some value"));
    }, 2000);
});

p.then(null, function (err) {
    console.log(1);
    console.log(err);
});

p.catch(function (err) {
    console.log(2);
    console.log(err);
});

p.finally(function () {
  console.log("32", 1);
});