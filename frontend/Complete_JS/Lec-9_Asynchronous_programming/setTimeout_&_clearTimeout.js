/**
    setTimeout(callback, delay, param1, parm2, ...): it's a built-in function provided by Web API  and it's not the part of JS.
                  it executes the function after some delay.
                  it returs the timerID

    clearTimeout(timerID):it's a built-in function provided by Web API  and it's not the part of JS.
                        - it is used to stop the excution of a function provided by setTimeout.

 */


//  console.log('Before');

//  const cb = () => {
//     console.log('I am a callback function');
//  }

//  const timerId = setTimeout(cb, 1000);

//  clearTimeout(timerId);

// //  console.log(timerId);



//  console.log('After');



 // doubts:


 console.log('Before');

 const cb1 = () => {
    console.log('I am a callback function');
 }

const timerID1 = setTimeout(cb1, 0);

// setTimeout(cb1, 5000);

// sync code is here
for(let i =0; i<5; i++) {
    console.log(i);
}

clearTimeout(timerID1);