/*****SetTimeout -> clearTimeout****/
console.log("Before");
// Calling a function at a delay of 3000 milliseconds
function cb(){
    console.log("setTimeout cb has been called");
}
const timerID = setTimeout(cb, 3000);

function canceller() {
    console.log("Cancelling the timeout");
    clearTimeout(timerID);
}
setTimeout(canceller, 2000);
console.log("After");