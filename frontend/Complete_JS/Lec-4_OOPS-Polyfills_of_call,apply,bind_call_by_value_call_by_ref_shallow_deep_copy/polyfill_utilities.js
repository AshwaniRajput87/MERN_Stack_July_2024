 Function.prototype.myCall = function(objOnWhichReqFnToBeInvoked, ...args){
    // what is the value of this here?
    console.log('Value of this', this);

    let requiredFn = this;

    objOnWhichReqFnToBeInvoked.requiredFn = requiredFn;

    const result = objOnWhichReqFnToBeInvoked.requiredFn(...args);

    delete objOnWhichReqFnToBeInvoked.requiredFn;

    return result;

 }