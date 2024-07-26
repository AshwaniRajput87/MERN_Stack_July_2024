/**
   What is shadowing?

        - When a varaibale is declared outside of a function or block has the same name as the variable declared inside the function in JS is known as Shadowing.

        - legal shadowing: When a variable in the outer scope has the same name as a variable defined within the function or block scope, this is known as legal shadowing

            var x = 10;

            function shadowingConcept(){

                var x = 20;
                console.log(x);

            }

            let x = 10;

            function shadowingConcept(){

                let x = 20;
                console.log(x);

            }


        - illegal shadowing:  When a variable is re-declared with in the same scope  using the same name with let and const or var.


            let x = 10;

            function shadowingConcept(){

                let x = 20;
                console.log(x);

            }

            let x = 30;

            let c = x + 40;
            console.log(c);


 */

 let x = 10;

 function shadowingConcept(){

    let x = 20;
    console.log(x);

 }

let c = x + 40;
console.log(c);


 shadowingConcept();