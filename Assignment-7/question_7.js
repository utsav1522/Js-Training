// function that performs multiple asynchronous operations 
// in parallel using async/await 
// and waits for all of them to complete before returning the results.



const giveRes = async (p1, p2, p3) => {
    await Promise.all ([p1, p2, p3]).then(values => console.log(values))
}

const p1 =new Promise((resolve, reject) => {
    resolve("Promise 1 resolved");
});

const p2 =new Promise((resolve, reject) => {
    resolve("Promise 2 resolved");
});

const p3 =new Promise((resolve, reject) => {
    resolve("Promise 3 resolved");
});

giveRes(p1, p2, p3)