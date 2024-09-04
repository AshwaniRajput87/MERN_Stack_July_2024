/**
    setInterval(callback, delay, param1, parm2, ...): it's a built-in function provided by Web API  and it's not the part of JS.
                  it executes the function after some delay but repeatedly.
                  it returs the timerID

    clearInterval(timerID):it's a built-in function provided by Web API  and it's not the part of JS.
                        - it is used to stop the excution of a function provided by setTimeout.

 */


 console.log('Before');

 const cb = () => {
    console.log('I am a callback function');
 }

const timerId = setInterval(cb, 1000);

const cancelInterval = () => {
    console.log('cancenlling the interval');
    clearInterval(timerId);
}

setTimeout(cancelInterval, 3000)

console.log('After');

