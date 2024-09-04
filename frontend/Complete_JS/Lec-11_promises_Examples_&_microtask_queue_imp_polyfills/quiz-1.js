const promise1 = Promise.reject("Some error");

promise1.then(null, (err) => {
  console.log("90", err); // 90 some error
  return 10;
}).then((err) => {
    console.log("92", err);// 92 10
});
