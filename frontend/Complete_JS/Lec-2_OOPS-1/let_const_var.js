/**

   let, const and var:
   -------------------

   let:
    1. block scope only.
    2. can be re-assigned. 
    3. no hoisting possible
    4. re-decalartion is not allowed
    5. let x = 10;

   const:
    1. block scope only.
    2. cannot be re-assigned.
    3. no hoisting possible.
    4. re-decalartion is not allowed
    5. const PAN = 'ABCD12345RT';

   var: 
    1. functional scope only.
    2. can be re-assigned.
    3. hoisting possible.
    4. var x = 50;

 */

function variableConcepts() {
   var a = 10;

   let b= 20;

   const c= 30;

   if(b) {
     a=20;
     b=30;
     c=40;
   }
}

variableConcepts();

