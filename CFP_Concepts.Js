//let var constatnt 
const myName = "deepak";   //global scope

function first() {
  const age = 25;          //Function/block Scope

  if ((age === 25)) {
    const decade = 2.5;    //Block  Scope
    var year = 2021;       //Function Scope
  }

  console.log(year);
  //console.log(decade);

}

first()

console.log(myName);

//console.log(year);
//console.log(decade);
