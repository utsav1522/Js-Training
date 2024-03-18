// function Person(name, age) {
//   this.name = name;
//   this.age = age;
// }
// Person.prototype.getDetails = function () {
//   console.log(this.name + " is " + this.age + " years old");
// };
// var person = new Person("John Doe", 30);
// delete person.name;
// person.getDetails();


// error: in order to run the code and access the name property in the object. 
// we need to delete the property name after it has been used.
// resolved code: 
function Person(name, age) {
    this.name = name;
    this.age = age;
  }
  Person.prototype.getDetails = function () {
    console.log(this.name + " is " + this.age + " years old");
  };
  var person = new Person("John Doe", 30);
  person.getDetails();
  delete person.name;
  