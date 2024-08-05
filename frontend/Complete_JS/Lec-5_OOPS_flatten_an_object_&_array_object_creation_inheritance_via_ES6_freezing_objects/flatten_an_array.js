/**

   Flatten an array: (Do it assignment)

   nestedArray = [1,2,3,[4,5,[6,7, [8,9]]],10];

   o/p: [1,2,3,4,5,6,7,8,9,10]

 */

 const nestedArray = [1,2,3,[4,5,[6,7, [8,9]]],10];
 console.log(nestedArray.flat(3));

 Array.prototype.myFlat = function(arr, depth=1) {
    const flatArr = [];

     // iterate the array
        
          // check whether its an array or not, Array.isArray()

              // do recursion

              // else push the elements in flatArr

    // return  flat array


    return flatArr;
 }