
//------------------------CallBack Concept--------------------------
//callback concept
//callback hell is error-Prone ,hard to read,hard to maintain.

//example 1
/* function print(string, callback) {
  setTimeout(() => {
    console.log(string);
    callback();
  }, 10000);
}

print("start", () => {
  print("loading", () => {
    print("finish", () => {});
  });
}); */

//example 2 (user suscription)

console.log("enter user details ");

function userLogin(name, address, aadhar, callback) {
  setTimeout(() => {
    console.log("user ${name} saved");
    callback(aadhar);
  }, 4000);
}

function otp_Validation(aadhar, callback) {
  setTimeout(() => {
    console.log(aadhar + "  userid validation successfull");
    callback("paymentLink");
  }, 4000);
}

function user_Payment(paymentlink, callback) {
  setTimeout(() => {
    console.log("payment successfull");
    callback("User suscription succesfull");
  }, 4000);
}

const user = userLogin("deep", "sangli", 2000, (aadhar) => {
  otp_Validation(aadhar, (uniquePaymentLink) => {
    user_Payment(uniquePaymentLink, (status) => {
      console.log(status);
    });
  });
});