/**

   What is array?

    - An array is a built-in object in JS to store multiple values in a single a vriable.

    - Array(0) is a prototype object of an arr with length 0.

    - Array as an object:
       - properties:
       
          length: tell you the size of an array

       - most used methods: 

        1. slice(startIndex, endIndex):
             - creates a new array conatinig  the portion from an existing array.
             - always create a shallow copy.


        2. splice(startIndex, endIndex, ... itemto be added): 
            - Changes the content of an array by removing ,replacing or adding the elements.
            - It modifies the original array and return the removed elements.
            - splice doesn't create a shallow copy of the new array. So, it just follow the call be refernce.

        3. concat(): merge 2 or more arrays

        4. push(): to insert the elements in an array at end;

        5. pop(): to remove the elements from an array at end

        6. unshift(): to insert the elements in an array at beginning;

        7. shift():  to remove the elements from an array at begining

        8. join(): join all the arrays elements in a string

        9. sort(): to do the soring over array elements either in ascending oreder or descending order by passign the callback function

        10. filter(): to filter the array elements based provided callback function

        11. map(): to return a new array with shallow copy based the provided callback function condition

        12. reduce(): to return a single vlaue form the number of array elements.

 */


 const arr = [];

 console.log(arr);

let  arr1 = [10,20,30,40,50]; // [10],[10,20], [30,40,50]

//--------------------slice()---------------
let arr2 = arr1.slice(0,4);

 for(let i=0; i<arr2.length; i++) {
    arr2[i]*=2;
 }
 console.log(arr2); //[20,40,60,80]
 console.log(arr1); // [10,20,30,40,50]

//--------------------splice()---------------
 const arr3 = arr1.splice(1,2, 100);
 console.log(arr3);// [20,30]

 for(let i=0; i<arr3.length; i++) {
    arr3[i]*=2;
 }
 console.log(arr3); //[40,60]
 console.log(arr1); // [10, 100, 40, 50];

 // -------------concat-----------

const arr4 = [1,2,3];

const arr5 = [4,5];

const arr6 = arr4.concat(arr5);
console.log(arr6);


// ------join()----

const fruits = ['banana', 'Guava', 'pomegranate', 'Kiwi'];
const str = fruits.join(',');
console.log(fruits.join(','));
console.log(str.split(','));

console.log([10,50,40,5,3,20].sort((a,b)=> b-a));