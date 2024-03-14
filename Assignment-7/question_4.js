// 4. Write a program to implement a Promise-based rate limiter,
// that limits the number of concurrent requests to a certain number

// const rateLimiter = (i) =>
//   new Promise((resolve, reject) => {
//     if (i < 10) resolve(`Promise run for ${i}th request`);
//     else reject(`Too many concurrent request`);
//   });

class RateLimiter {
  static i = 0;
  static returnPromise() {
    this.i++;
    return new Promise((resolve, reject) => {
      if (this.i > 10) {
        reject(`Too Man API requests`);
      } else {
        resolve(() => {
          `Promise run for ${this.i}th request`;
        });
      }
    });
  }
}

for (let i = 1; i < 13; i++) {
  RateLimiter.returnPromise()
    .then((msg) => console.log(`Promise run for ${i}th request `))
    .catch((err) => console.log("Too Man API requests "));
}