import { throttle } from "./utils/throttling.js";
console.log('Ashwani');

const task = () =>{
    console.log('Task executed');
}

const throttleHandler = throttle(task, 1000);

window.addEventListener('scroll', throttleHandler)