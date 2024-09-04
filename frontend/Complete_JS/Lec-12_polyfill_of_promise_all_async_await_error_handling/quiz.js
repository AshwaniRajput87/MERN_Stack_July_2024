console.log('Before');
function resolveAfterNSeconds(delay, x) {
    return new Promise(resolve => {
        setTimeout(() => {
            // console.log(delay);
            // console.log(x);
            resolve(x);
        }, delay);
    });
}
console.time();
(function () {
    let a = resolveAfterNSeconds(1000, 1) // 1sec, 1
    a.then(async function (x) {
        let y = await resolveAfterNSeconds(2000, 2) // 2sec, 2
        let z = await resolveAfterNSeconds(1000, 3) // 1sec, 3

        let p = resolveAfterNSeconds(2000, 4); // 2 sec // 2sec => 1+2+1+2 = 6sec
        let q = resolveAfterNSeconds(1000, 5); // 1 sec

        console.log(x + y + z + await p + await q); // 1 + 2 + 3 + 4 + 5 = 15
    })
})()

console.timeEnd();

console.log('After');