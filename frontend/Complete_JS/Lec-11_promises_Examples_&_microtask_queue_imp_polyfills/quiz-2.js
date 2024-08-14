const promise1 = Promise.reject("Some error");

promise1.then((err) => {
  console.log("90", err);
}).catch((err) => {
  console.log("92", err); // 92 Some error
});