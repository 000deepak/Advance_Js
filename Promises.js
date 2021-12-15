
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
      }, 1000);
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