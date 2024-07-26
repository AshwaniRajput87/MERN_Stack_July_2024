/***
   call, apply, bind methods

   These mthods are going to use when you want to set the context of "this" explicitly/manually.

   1. call:

       - Used to invoke the function with a specidied "this" value and individuals arguments.
       - syntax: functionName.call(thisArg, arg1, arg2, ... argN);
       - usecase: We use call when we want to borrow a method only once with a defined number of parameters. 

   2. apply:

        - Used to invoke the function witha specidied "this" value and array of arguments.
        - syntax: functionName.apply(thisArg, [arg1, arg2, ... argN]);
        - usecase: We use call when we want to borrow a method only once with a n number of parameters. 

   3. bind: 
        - bind method is used to create a new method with a specified context with "this" and optional parameters.

        - syntax: const fn = functionName.bind(thisArg, arg1, arg2,..., argN);

            fn(arg1, arg2,...argN);

        - usecase: We use bind when we want to use a method multiple times and we want to make a permanent copy of that method.





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

// cap.petersTeam.call(cap, 'Natasha', 'Hema');

// cap.petersTeam.apply(ironMan, ['thor', 'loki']);

// cap.petersTeam.apply(cap, ['Natasha', 'Hema']);


const boundFn = cap.petersTeam.bind(ironMan);

boundFn('thor', 'loki');
boundFn('cap', 'war machines')





