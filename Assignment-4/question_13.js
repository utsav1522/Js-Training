// program to return inverse of an array

const arr = [3, 4, 2, 0, 1];
const inverseArr = new Array(arr.length);

const makeInverseArray = (arr) => {
  for (i in arr) {
    inverseArr[arr[i]] = i;
  }
};

const checkInverse = (arr, inverseArr) => {
  for (i in arr) {
    if (arr[i] != inverseArr[i]) {
      console.log("The array inverse is not possible");
      return false;
    }
  }
  return true;
};

makeInverseArray(arr);
console.log(inverseArr);
