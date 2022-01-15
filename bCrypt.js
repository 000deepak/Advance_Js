const bcrypt = require("bcrypt");

const pass = "123";

bcrypt.hash(pass, 8).then((hash) => {
  console.log(hash);
  bcrypt.compare(pass, hash).then((match) => {
    console.log(match);
  });
});
