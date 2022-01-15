
//----------------------------------IIFE-------------------------

(function (i) {
    console.log("hello mern", i);
  })(i);
  //Use the IIFE for isolating parts of the code to hide details of implementation.
  //Use it in closures, when you use closures in loops.

  //--------------------------------Currying_Functions--------------
  
  function calculateVolume(length) {
    return function (breadth) {
        return function (height) {
            return length * breadth * height;
        }
    }
  }
  console.log(calculateVolume(4)(5)(1));

  //ways for creating objects
  //function based
  //object literal
  //new keyword
  //object.create