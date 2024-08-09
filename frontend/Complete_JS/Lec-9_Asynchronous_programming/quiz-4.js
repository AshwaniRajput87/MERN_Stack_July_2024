console.log("Before");

const cb2 = () => {
    console.log("set timeout 1");
    
    let timeInfuture = Date.now() + 5000;
    
     while (Date.now() < timeInfuture) {
    
    }
}

const cb1 = () => console.log("hello");

setTimeout(cb2, 1000)

setTimeout(cb1, 2000)

console.log("After");