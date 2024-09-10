/***

   What is throttling?

   - It is a technique which is used in web development, to limit the rate at which the particular event is going to delayed to be triggered.

   - use cases:
    1. rapid button clicks
    2. Limiting the scroll events trigger
    3. Mouseevent 

 */

 export const throttle = (cb, delay) =>{

    let lastExecutionTime = 0;

    return function(...args) {
        const currentTime = Date.now();

        const elapsed = currentTime - lastExecutionTime;

        if(elapsed >= delay){
            cb.apply(this, args);
            lastExecutionTime = currentTime;
        }
    }

 }