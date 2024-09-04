/**

   Lexical scope:

     - It refers to the the scope of a variable, which is determined by its position in the source code during the execution of code.


 */

// var x = 10; // global scope

// function fn() {
//     var x = 20; // local scope
//     console.log(x); // 20
// }

// fn();


var x = 10; // global scope

function fn() {
    console.log(x); // 10
}

fn();

// Conclusion of Lexical scope: JS searches the variables x in the local scope (FEC)
// then , JS searches for x into the global scope (GEC), if it not found in local scope. But if it not found in GEC, then it give the reference error: x is not defined. 


// quiz explanation

var varName = 10;
function b() {
    console.log(varName);
}
function fn() {
    var varName = 20;
    b();
    console.log(varName);
}
fn();// GEC -> varName=10 // FEC -> fn and FEC -> b -> function b() -> varName = 10
// 10 20

var varName = 10; 
function fn() { 
    var varName = 20; 
    b(); 
    console.log(varName); 
    
    function b() { 
        console.log( varName); 
    } 
} 
    
fn(); // 20 20 -> but it is using closue concept so will learn in next class