// function Person(name, age) {
//   this.name = name;
//   this.age = age;
// }
// var person = Person("John Doe", 30);
// console.log(person.name);

// error; in order to access the properties in the constructor we need to convert the function defination
// to a class defination.
// resolved code:

class Person {
  person = "";
  age = 0;

  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}
var person = new Person("John Doe", 30);
console.log(person.name);
