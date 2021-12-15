
//---------------------------------------Async/Await-------------------
//"async and await make promises easier to write"
//async makes a function return a Promise
//await makes a function wait for a Promise

//example 1
/* function print(string) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log(string);
        resolve();
      }, 2000);
    });
  }
  
  async function printAll() {
    await print("start");
    await print("loading");
    await print("finish");
  }
  
  printAll(); */

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
  
  async function user_suscrption() {
    const aadhar = await userLogin("deep", "sangli", 2000);
    const paymentlink = await otp_Validation(aadhar);
    const success = await user_Payment(paymentlink);
  }
  
  user_suscrption();
  