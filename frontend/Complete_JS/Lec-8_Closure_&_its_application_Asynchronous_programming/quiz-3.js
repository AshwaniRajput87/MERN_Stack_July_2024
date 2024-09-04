// function outer() {
//     // var i = undefined;// 0 to 1 to 2 to 3 // here the clousure will formed
//     let arrFn = [];
//     for (var i = 0; i < 3; i++) {
//         arrFn.push(function fn() {
//             console.log(i);
//         })
//     }
//     return arrFn;
// }
// let arrFn = outer();
// arrFn[0](); // 3
// arrFn[1](); // 3
// arrFn[2](); // 3


function outer() {
    // var i = undefined;// 0 to 1 to 2 to 3 // here the clousure will formed
    let arrFn = [];
    //let i;
    for (let i = 0; i < 3; i++) {
        arrFn.push(function fn() {
            console.log(i);
        })
    }
    return arrFn;
}
let arrFn = outer();
arrFn[0](); // 0
arrFn[1](); // 1
arrFn[2](); // 2