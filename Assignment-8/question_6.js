// var person = {
//   name: "John Doe",
//   age: 30,
//   getDetails: function () {
//     console.log(this.name + " is " + this.age + " years old");
//   },
// };
// var getPersonDetails = person.getDetails;
// getPersonDetails();

// resolved code:
// inorder to access the elements in an object we need to access the property using the object name

var person = {
  name: "John Doe",
  age: 30,
  getDetails: function () {
    console.log(this.name + " is " + this.age + " years old");
  },
};
var getPersonDetails = person.getDetails();
