/***
   What is debounce/debouncing? -> delaying the task -> function (executing a function after certain period of time)

    - Debouncing is a technique which is useful when you are implemeneting like autocomplete, it is used to prevent multiple number of http request while typing inside the search box.

    - usecases:

       1. While user typing in the input field
       2. window resizing
       3. scroll events
       4. prevent the multiple button clicks.
 */

export const debounce = (cb, delay) => {

    let timerId;

    return function(...args){
        if(timerId){
            clearTimeout(timerId);
            timerId = null;
        }

        timerId = setTimeout(()=>{
            cb.apply(this, args);
        }, delay)
    }

}