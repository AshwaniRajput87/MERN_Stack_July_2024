const obj = {
   name:"Ashwin",

   age:36,

   userDetails: function(){
        console.log(`user name ${this.name} and age ${this.age}`);
   },

   print: function(){
        console.log(this);
   },

   obj2:{
        username: this.name
   }
};

obj;

// what is the value of username in obj2?