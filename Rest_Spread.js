Rest

/* Rest is used during function defination */
//During function call actual parameters are passed in fn
//ther parameters are grouped in array and map,sort,for each can be applied in it
//However, the third argument, manyMoreArgs, will be an array that contains the third, fourth, fifth, sixth ... nth — as many arguments that the user includes.


function myFun(a, b, ...manyMoreArgs) {
    console.log("a", a)
    console.log("b", b)
    console.log("manyMoreArgs", manyMoreArgs)
  }
  
  myFun("one", "two", "three", "four", "five", "six")
  
  // a, "one"
  // b, "two"
  // manyMoreArgs, ["three", "four", "five", "six"] <-- notice it's an array


/* If it is used in object deconstruction, rest will copy all enumerable attributes of the object except 
the manually specified attribute name. */

const obj = {one: 1, two: 2, three: 3};
const {one, ...rest} = obj;
    // Same as:
    // const one = 1;
    // const rest = {two: 2, three: 3};
//If used in parameters, rest represents all the remaining parameters


/* Rest syntax looks exactly like spread syntax. 
In a way, rest syntax is the opposite of spread syntax. 
rest syntax collects multiple elements and "condenses" them into a single element.
Spread syntax "expands" an array into its elements. */


/* Spread */
/* spread is used during function call */
//During function call array are passed in fn
//ther parameters are grouped in array and map,sort,for each can be applied in it
//However, the third argument, manyMoreArgs, will be an array that contains the third, fourth, fifth, sixth ... nth — as many arguments that the user includes.

function myFunction(x, y, z) { }
let args = [0, 1, 2];
myFunction(...args);


//Spread is mainly used to expand objects. 
//The properties of objects that can be expanded must be enumerable.

/* spread syntax can be used multiple times. *///Rest used only once

function myFunction(v, w, x, y, z) { }
let args = [0, 1];
myFunction(-1, ...args, 2, ...[3]);


/* If the array contained more than three numbers, e.g. [1, 2, 3, 4], 
then it would still work fine, except that all four would be passed,
 but only the first three would be used unless you added more arguments to the function, e.g.: */

function sum(x, y, z, n) {
  return x + y + z + n;
}
