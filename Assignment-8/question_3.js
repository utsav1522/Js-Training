// let myArray = [1, 2, 3, 4];
// for (let i = 0; i < myArray.length; i++) {
//    console.log('The value at index ' + i + ' is: ' + myArray[i]);
// }

// let total = 0;
// myArray.forEach(function(element) { total += 1; });
// console.log('The total of all elements in the array is: ' + element);

// error: the error is to count the no of elements in the array we need to add 1 to the total and not element
// as it would return the sum of all the elements;
// resolved code

let myArray = [1, 2, 3, 4];
for (let i = 0; i < myArray.length; i++) {
  console.log("The value at index " + i + " is: " + myArray[i]);
}

let total = 0;
myArray.forEach(function (element) {
  total += element;
});
console.log("The total of all elements in the array is: " + total);
