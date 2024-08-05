var varName = 10;
function b() {
    console.log( varName);
}
function fn() {
    var varName = 20;
    b();
    console.log(varName);
}
fn();