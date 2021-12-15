
//-------------------------------Prototypes------------------------

//Add new Properties
function Person(first, last, age) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
  }
  
  Person.prototype.nationality = "Indian";
  
  //Add new methods
  function Person(first, last, age) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
  
  }
  
  Person.prototype.name = function() {
    return this.firstName + " " + this.lastName;
  };