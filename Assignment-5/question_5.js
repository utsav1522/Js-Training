const obj = {
  a: 1,
  b: { c: 2, d: [3, 4] },
};
const flattenedObj = {};

const flatten = (obj, prefix = "") => {
  for (key in obj) {
    if (typeof obj[key] === "object") {
      flatten(obj[key], prefix + "." + key);
    } else {
      let prefixKey = prefix + "." + key;
      flattenedObj[prefixKey] = obj[key];
    }
  }
  return flattenedObj;
};
console.log(flatten(obj));
