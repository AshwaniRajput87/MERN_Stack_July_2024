console.log("Before");

const cb2 = () => {
        console.log("Set timeout 1");
        while(1){

        }
}

const cb1 = () => console.log("hello");

setTimeout(cb2) // 1sec

setTimeout(cb1, 2000) // 2sec

console.log("After");

// Before
// After
//