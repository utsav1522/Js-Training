// program to find the last duplicate index in an array

const arr1 = [1, 2, 3, 4, 5, 6, 7];
const arr2 = [9, 10, 11, 12, 13];

const concatenate2Array = (arr1, arr2) => {
  const arr = [...arr1, ...arr2];
  return arr;
};

console.log(concatenate2Array(arr1, arr2));
