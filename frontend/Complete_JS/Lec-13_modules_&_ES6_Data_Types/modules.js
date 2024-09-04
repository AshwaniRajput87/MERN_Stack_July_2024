/**
   What is module?

     - Estabilsh a communication among different JS files  with help of methods/functions, classes and variables. 

     - A module organizes your code more maintainable and breaking into a smaller chunk.

     How  JS files can communicate?
     
       - In ES6, export and import were introduced.

     - Imports are cached 

       - In JS, when a modules is imported into another JS file, the imported contents are cached after the firt import and subsequent the imports get the same module which means the code will not be executed again.

 */

// const add = require('./utils/mathUtil.js')
import {add as sum, subtract} from './utils/mathUtil.js';
import Calulator  from './utils/Calculate.js';

import './a.js';
import './b.js';

 console.log(sum(10,20));

 const calc = new Calulator();

 console.log(calc.subtract(20, 30));