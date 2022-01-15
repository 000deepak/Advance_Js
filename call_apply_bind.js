//Call invokes the function and allows you to pass in arguments one by one.
//Apply invokes the function and allows you to pass in arguments as an array.
//Bind returns a new function, allowing you to pass in a this array and any number of arguments.

let name =  {
    firstname : "Arham",
    lastname : "Chowdhury",
}

printFullName =  function(hometown,company){
    console.log(this.firstname + " " + this.lastname +", " + hometown + ", " + company)
}

//CALL
printFullName.call(name,"Mumbai","Taufa");     //Arham Chowdhury, Mumbai, Taufa


//APPLY
printFullName.apply(name, ["Mumbai","Taufa"]);     //Arham Chowdhury, Mumbai, Taufa


//BIND
let printMyNAme = printFullName.bind(name,"Mumbai","Taufa");
printMyNAme();      //Arham Chowdhury, Mumbai, Taufa