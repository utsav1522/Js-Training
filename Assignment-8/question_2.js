// let myObject = { name: 'John', age: 30 };
// for (property in myObject) {
//    console.log(property + ': ' + myObject.property);
// }

// resolved code:
// error: in order to access the property in the object use the square brackets
//        instead of dot operator as it will retrun undefined
let myObject = { name: "John", age: 30 };
for (property in myObject) {
  console.log(property + ": " + myObject[property]);
}
