// Convert a callback-based API to a Promise-based API
// function fetchData(callback) {
//   setTimeout(() => {
//     callback(null, "Data fetched successfully");
//   }, 1000);
// }

const util = require("util");

function fetchData(callback) {
  setTimeout(() => {
    callback(null, "Data fetched successfully");
  }, 1000);
}

const callback = (a, b) => {
  if (!a) {
    console.log("callback called");
  }
};

const promiseFetchData = util.promisify(fetchData);
promiseFetchData(callback)
  .then((data) => {
    console.log(data);
  })
  .catch((err) => console.log(err));
