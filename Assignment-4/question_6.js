// program to find sum of an array

const arr = [1,2,3,4,5,6];
let sum = arr.reduce((a, b) => {
     return a+b;
}, 0);
console.log(sum);