// Implement a function that returns a resolved Promise
// after a specified delay using async/await.

const delayResolved = async (ms) => {
  await new Promise((resolve) => setTimeout(resolve, ms));
  return `data is returning after ${ms} milliseconds`;
};

const fun1 = async () => {
  console.log("start");
  const result = await delayResolved(5000);
  console.log(result);
  console.log("end");
};

console.log("test");
fun1();
console.log("test1");
