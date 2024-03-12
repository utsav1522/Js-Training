// program to implement a Promise-based task queue,
// that processes tasks in a specified order,
// with a specified concurrency limit

const p1 = new Promise((resolve, reject) => {
  resolve("Promise 1 resolved");
})
  .then((msg) => {
    console.log(msg)
    return new Promise((resolve, reject) => {
      if (!resolve("Promise 2 resolved")) {
        reject("Promise 2 rejected");
      } else {
        resolve("Promise 2 resolved");
      }
    });
  })
  .catch((err) => {
    console.log(err);
  })
  .then((msg2) => {
    console.log(msg2);
    return new Promise((resolve, reject) => {
      if (!resolve("Promise 3 resolved")) {
        reject("Promise 3 rejected");
      } else {
        resolve("Promise 3 resolved");
      }
    });
  })
  .catch((err) => console.log(err))
  .then((msg3) => {
    console.log(msg3);
  })
  .catch((err) => console.log(err));
