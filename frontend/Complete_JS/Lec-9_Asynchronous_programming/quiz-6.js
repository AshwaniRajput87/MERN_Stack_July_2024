/*****setInterval, clearInterval****/
console.log("Before");

function cb(){
    console.log("Interval called");
}

// Setting up an interval to call function cb every 1000 milliseconds (1 second)
const timerID = setInterval(cb, 1000);

// Function to cancel the interval
function cancelInterval() {
    console.log("Cancelling the interval timer");
    clearInterval(timerID); // Clearing the interval using clearInterval
}

// Setting up a timeout to cancel the interval after 3000 milliseconds (3 seconds)
setTimeout(cancelInterval, 3000);

console.log("After");