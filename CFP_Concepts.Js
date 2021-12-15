//----------------------------let var constant-----------------------
const myName = "deepak"; //global scope

function first() {
  const age = 25; //Function/block Scope

  if (age === 25) {
    const decade = 2.5; //Block  Scope
    var year = 2021; //Function Scope
  }

  console.log(year);
  //console.log(decade);
}

first();

console.log(myName);

//console.log(year);
//console.log(decade);

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

  
//---------------------------------------Async/Await--------------------

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
  
  async function user_suscrption(){
      const aadhar = await userLogin('deep','sangli',2000)
      const paymentlink = await  otp_Validation(aadhar)
      const success =await user_Payment(paymentlink)
  }
  
  user_suscrption();