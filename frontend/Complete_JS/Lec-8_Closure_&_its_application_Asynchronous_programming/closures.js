/**

   Why do we need closure?

     - Whenever you decalare a function , the variables defined inside are accessible within that function only.

     - If you try access them outside the function then it will throw an reference a error.


    What is the closure?

      - Closure in JS allows variables from the outer scope to be preserved in the inner scope using lexical scoping technique.

      - In lexical scoping, the scope of variable is defined by its position in the source code during excecution phase. 

      conclusion: 
      1. Inner function will form the closure over the outer function variables and it's variable are present even if outer function is removed from the stack.

      2. Where does the closure form? -> When an inner function is being called at that point in time, it forms closue over the outer variables.


      What is nested closure?

      - A nested closure means function within function.



 */

//  function outerFn() {
//     const count = 0;
//     console.log(count);
//  }

//  outerFn();

//  console.log(count);

 function outerFn() {
    let count = 0;

    function innerFunc() {
        count++;
        return count;
    }

    return innerFunc;
 }

 const innerFunc = outerFn();

console.log(innerFunc());
console.log(innerFunc());
console.log(innerFunc());


let iamINGEC = 200;

function getFirstName(firstName) {
  console.log("I have got your first Name");

  return function getLastName(lastName) {
    console.log("I have got Your last Name");

    return function greeter() {
      console.log(`Hi I am ${firstName} ${lastName}`);  // closure 
      console.log("Hi GEC", iamINGEC)//Lexical scope
    }
  }
}

const firstNameRtrn = getFirstName("Ashwani");
// console.log(firstNameRtrn); // getLastname

const lastNameRtrn = firstNameRtrn("Rajput");
// console.log(lastNameRtrn);  // greeter

lastNameRtrn(); 


//I have got your first Name
//I have got Your last Name
// Hi I am Ashwani Rajput
//Hi GEC 200





