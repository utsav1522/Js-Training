// program to return inverse of an array

const arr = [3, 4, 2, 0, 1];
const inverseArr = [];

const makeInverseArray = (arr) => {
  for (i in arr) {
    inverseArr[arr[i]] = i;
    console.log(inverseArr[arr[i]]);
    console.log(arr[arr[i]], 'arr[arr[i]]')
    if (Number(inverseArr[arr[i]]) !== Number(arr[arr[i]])){
      return false;
    }
  }
  console.log(inverseArr)
  return true
};


console.log(makeInverseArray(arr));
