// program to remove dupliacte elements from an array

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4];
let unique = {};

const uniqueElements = (arr) => {
  for (i in arr) {
    if (!unique[arr[i]]) {
      unique[arr[i]] = true;
    } else {
      continue;
    }
  }
  let ans = [];
  for (key in unique){
    ans.push(key);
  }
  
  return ans;
  
};

console.log(uniqueElements(arr));
