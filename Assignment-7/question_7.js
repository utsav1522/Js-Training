// function that performs multiple asynchronous operations 
// in parallel using async/await 
// and waits for all of them to complete before returning the results.



const giveRes = async (p1, p2, p3) => {
    await Promise.all ([p1, p2, p3]).then(values => console.log(values))
}

const p1 =new Promise((resolve, reject) => {
    setTimeout(() => resolve("Promise 1 resolved"), 2000);
});

const p2 =new Promise((resolve, reject) => {
    setTimeout(() => resolve("Promise 2 resolved"), 1000);
});

const p3 =new Promise((resolve, reject) => {
    setTimeout(() => resolve("Promise 3 resolved"), 5000);
});

giveRes(p1, p2, p3)