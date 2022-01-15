//We use promises for handling asynchronous interactions in a sequential manner.
// They are especially useful when we need to do an async operation and 
//THEN do another async operation based on the results of the first one.
// For example, if you want to request the list of all flights and then for each flight you want to request some details about it.
// The promise represents the future value. 
//It has an internal state (pending, fulfilled and rejected) and works like a state machine.

//A promise object has then method, where you can specify what to do when the promise is fulfilled or rejected.

//You can chain then() blocks, thus avoiding the callback hell. You can handle errors in the catch() block. After a promise is set to fulfilled or rejected state, it becomes immutable.
//3.-------------------------Promises------------------------------------
//example 1
/* function print(string) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, 1000);
  });
}

print("start")
  .then(() => print("loading"))
  .then(() => print("finish")); */

//example 2
function userLogin(name, address, aadhar) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log(name);
        resolve(aadhar);
      }, 5000);
    });
  }
  
  function otp_Validation(aadhar) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log(aadhar);
        resolve("paymentlink");
      }, 1000);
    });
  }
  
  function user_Payment(paymentlink) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log(paymentlink);
        resolve();
      }, 1000);
    });
  }
  
  userLogin("deep", "sangli", 2000)
    .then((aadhar) => otp_Validation(aadhar))
    .then((paymentlinks) => user_Payment(paymentlinks));