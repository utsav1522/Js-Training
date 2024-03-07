// program to find index of duplicate elements in an array

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4];
let unique = [];

const uniqueElements = (arr) => {
  for (i in arr) {
    if (!unique.includes(arr[i])) {
      unique.push(arr[i]);
    } else {
      continue;
    }
  }
  return unique;
}

console.log(uniqueElements(arr));
