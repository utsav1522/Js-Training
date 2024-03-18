// for (var i = 0; i < 10; i++) {
//   setTimeout(function () {
//     console.log(i);
//   }, 1000);
// }

// error: the error in the code is that in order to use the setTimeout in a for loop, we need to 
// create a variable in the local scope so that it shows the count and not a constant value of 10.

// resolved code:

for (let i = 0; i < 10; i++) {
    setTimeout(function () {
      console.log(i);
    }, 1000);
  }
  