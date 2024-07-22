1. About JS:

   # do you agree JS is a most powerful programming language?
      
    - yes, i do agree. JS is the most powerful PL because now-a-days it is being used in developing desktop apps, web apps(frontend and backend), mobile apps, gaming apps and Qa automation scripts (Cypress & webdrivers.io).

    # What is JS?

    - JS is PL that is used to add interactivity to your websites or web apps.

    # who invented JS?

    - Invented by Brenden Eich, in 1995. He was the co-founder of Mozilla corporation.

    # ES(ECMAScript) vs JS (JavaScript):

    - ES is a scripting lanaguage specification standardized by ECMA International in ECMA-262.
    - Ref doc: https://262.ecma-international.org/15.0/index.html?_gl=1*1sp81kn*_ga*MTc0ODMyMzU2Mi4xNzIxNjE0MDY0*_ga_TDCK4DWEPP*MTcyMTYxNDA2My4xLjAuMTcyMTYxNDA2My4wLjAuMA..#sec-intro

    - JS is the implementation of ECMAScript standard.
    - old to laetst vesion of ES
      old version: ES5(2014)
      latest version: ES6(2015) and ES14(2024)

    # Misconception about Java and JavaScript:

    1.  Java is purely Object-Oriented PL whereas JS is object-based PL. Because in JS you can write your code without classes and objects. But you still support the concepts of oops in JS.

    2. Java is statucally typed PL whereas JS is a dynamically typed PL.

       eg:   In Java, int a = 5;
             In JS: ES5 
                        var a = 5;// number
                        var a = 'ashwani'; // string
                    ES6:
                        let a = 10;
                        const name = "Ashwani";

    # How to add JS in your web pages?
     
    - There are 2 ways to add JS in any web pages:

     1. Inline: can directly add the JS code in head or body tag using <script> tag

     2. External: can create a seaparte with .js extention and then add that path of the script in src attribute of script tag.

       - Benefits of using external script:

         1. supports re-usability by using one JS file across multiple HTML files
         2. Segregates the HTML and JS logic.
         3. Makes HTML and JS easy to read and maintain.

    # What tools do you need to write and execute the JS code.

    1. VS code IDE and Browser dev tool.
    2. Browser.
    3. Debugging can be via bworser dev tools.  


    # what is variable?

    - A variable is just name used to hold any kind of value.

       eg: var a = 5;

            let name = "Ashwani";
            const PAN = "123fgjs45";

    # datatype in JS?

      - specifies the type of data that a variable stores.

      - how many types of datatypes available in JS:

        2 types of datatypes:
        1. primitive data types: 
           - pre-defined data types that means can not be derived from any other data types.
           - 7 types of primitive data types:
             1. string
             2. number
             3. boolean
             4. null
             5. undefined
             6. bigInt
             7. symbol

        2. non-primitive datatypes:

           - These are those data types that are derived from primitive data types.

           - types of non-primitive data types:
             1. objects
             2. array
             3. functions

    # what is function?

           - A reuasble piece of code that perform a specifc task.

           - function function_name(arg1, arg2, ... argN) {
               return
            }  

    # typeof operator in JS:

      - Used to determine the typr of data type of a given operand or expresions.

      - eg:  var a = 5;
            typeof a; // number

            typeof(a+b); // number

            typeof null; // 'object'

            typeof undefined; // 'undefined'

    # null vs undefined:

    null:
       1. null means there is no value.
       2. typeof null ->  'object'
       3. null is converted to zero when any primitive  operation is perforemed.
       eg: let x = null;
            x+20// 20, because x gets convereted to 0



    undefined: 
        1. undefined means absence of variable itself or having no values at all.
        2. typeof undefined -> 'undefined'
        3. undefined get converted to NaN when we perform any primitive operation.

        let x;
        x+20// NaN, because x gets convereted to NaN
        

    # conditional staments and Loops: 
    Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration

      1. if
      2. if..else
      3. else...if ladder
      4. switch
      5. while
      6. for
      7. do..while
      8. for..in
      9. for..of 


    # How the JS code gets executed in the browser?

    1. Firstly, all the JS code loaded in the browser.

    2. In the Browser, you JS engine to execute the JS code - exection stack (call stack) - it is always up and running.

    3. After that JS engine inserts the code into this call stack of execution stack.

    Please refer the notes with diagram and explanation

    # What is hoisting?

    Variable and function declarations are moved at the top of their respective scopes; refer the code expalantion in note pad.

    # Scope in JS will cover in next class