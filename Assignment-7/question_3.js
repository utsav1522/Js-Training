// Convert a callback-based API to a Promise-based API
// (function fetchData(callback) {
// setTimeout(() => {
// callback(null, "Data fetched successfully");
// }, 1000);
// })


// const mypromise= new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("Data fetched successfully")
//     },1000)
// })
  
// mypromise.then((data)=> console.log(data)).catch((err)=> console.log(err));

function add(a, b, callback) {
    setTimeout(() => callback(null, a + b), 100);
  }
  
  add(1, 2, (err, sum) => {
    console.log(sum);
  });