/**

   Chaining in JS: A technique to call multiple methods on a single object in single line of code.

   Inheritance: means re-usability. It's a mechnanism where one object can inherit the properties of another object.
   obj -> Object
   arr -> Array -> Object
   function -> Function

   Prototype: An object that links to a particular object by default.

   Prototypal inheritance: It allows objects to access the properties and methods of another objects from their pototypes.

   Object.prototype
   Array.prototype
   Function.prototype

   spread operator: spreading the elements into individual elements from an array or object.

   Rest parameter: in a function allows you to collect individual elmenets into an single array.

   default parameter: Assigning a default value to a function paramater.

   call: used to invoke the function by setting the this context explicitly and passing individual parameters.
   
   apply: used to invoke the function by setting the this context explicitly and passing n number of parameters.
   
   bind: used to create a new function by setting this manually and passing indiviual parameters. But need to call that function explicitly.

   What is Polyfill?

    - Polyfills are code snippets or Javascript libraries that provide modern JS features support to the older browsers or enviroments.

    When use to polyfills?

    - cross-browser compatability.
    - Library or framework requirements. 

 */


 let cap = {
    name: 'Steve',
    team: 'cap',
    petersTeam: function(mem1, mem2){

        console.log(`Hey ${this.name} am your neighborhood spiderman and I belong to ${this.team} with members ${mem1} and ${mem2}`);

    }
}


let ironMan = {
    name: 'Tony',
    team:'Iron man',
};

// cap.petersTeam.call(ironMan, 'thor', 'loki');

// Syntax: functionName.call(thisContext, arg1, arg2, ... argN);

 // Polyfill of call:

 Function.prototype.myCall = function(objOnWhichReqFnToBeInvoked, ...args){
    // what is the value of this here?
    console.log('Value of this', this);

    let requiredFn = this;

    objOnWhichReqFnToBeInvoked.requiredFn = requiredFn;

    const result = objOnWhichReqFnToBeInvoked.requiredFn(...args);

    delete objOnWhichReqFnToBeInvoked.requiredFn;

    return result;

 }

 //cap.petersTeam.myCall(ironMan, 'thor', 'loki');

 // syntax: functionName.apply(thisArg, [arg1, arg2, ... argN]);

Function.prototype.myApply = function(objOnWhichReqFnToBeInvoked, args) {

}

// syntax: const fn = functionName.bind(thisArg, arg1, arg2,..., argN);

//               fn(arg1, arg2,...argN);

// const boundFn = cap.petersTeam.bind(ironMan, 'Data');

// boundFn('thor', 'loki');
// boundFn('cap', 'war machines')

// Polyfill of bind:


Function.prototype.myBind = function(objOnWhichReqFnToBeInvoked, ...args) {
    let requiredFn = this;

    return function(...innerArgs) {
        return requiredFn.apply(objOnWhichReqFnToBeInvoked, args.args.concat(innerArgs));
    }
}

const boundFn = cap.petersTeam.myBind(ironMan);

boundFn('thor', 'loki');
boundFn('cap', 'war machines');


