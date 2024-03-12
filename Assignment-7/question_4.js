// 4. Write a program to implement a Promise-based rate limiter,
// that limits the number of concurrent requests to a certain number

const rateLimiter = (i) =>
  new Promise((resolve, reject) => {
    if (i < 10) resolve(`Promise run for ${i}th request`);
    else reject(`Too many concurrent request`);
  });

for (let i = 1; i < 11; i++) {
  rateLimiter(i)
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
}
