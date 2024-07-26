// let cap = {
//     firstName : "Steve",
//     sayHi : function(){
//         console.log("53", this.firstName);// 53 Steve
//         const iAmInner = function(){
//             console.log("55", this.firstName);// 55 undefined // 
//         }
//         iAmInner(); // for this iAmInner() - context is set as window object not this, it undefined because FEC context can have acces of window object not this object as you this and window can be available in GEC. 
//     }
// }
// cap.sayHi();


// var firstName = "Loki" // window.firstName = "Loki", this===window -> GEC
// let cap = {
//     firstName : "Steve",
//     sayHi : () => {
//         console.log("53", this.firstName); // 53 Loki
//         const iAmInner = () => { // this an arrow function, this can never be bind with arrow fnction. so, that this is represent the window object of GEC.
//             console.log("55", this.firstName);// 55 Loki
//         }
//         iAmInner();
//     }
// }
// cap.sayHi();

let firstName = "Loki"
let cap = {
    firstName : "Steve",
    sayHi: function(){ // this ia normal method and this context has been set with respect the current object cap itself
        console.log("53", this.firstName); // 53 Steve
        const subInner = () => {
            console.log("54", this.firstName); // 54 Steve
            const iAmInner = ()=> {
                console.log("55", this.firstName);// 55 Steve
            }
            iAmInner();
        }
        subInner();
    }
}
cap.sayHi();