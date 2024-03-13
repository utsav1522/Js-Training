// var promise = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     resolve("Data received");
//   }, 1000);
// });
// promise.then(
//   function (data) {
//     console.log(data);
//   },
//   function (error) {
//     console.log(error);
//   }
// );

// in order to catch the error, we need to use the catch block and not in the then block:.

var promise = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve("Data received");
  }, 1000);
});
promise
  .then(function (data) {
    console.log(data);
  })
  .catch(function (error) {
    console.log(error);
  });
