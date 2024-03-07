// program deepClone that takes an object as input and returns a deep copy of that object. The function should handle nested objects and arrays

const createDeepCopy = (obj) => {
  const deepCopyObj = {};
  for (key in obj) {
    deepCopyObj[key] = obj[key];
  }
  return deepCopyObj;
};

const obj = {
  firstName: "Utsav",
  lastName: "Jain",
  DOB: "12 October 2001",
  school: "Montfort School",
  college: "Jaypee institute of Information Technology",
  currentCompany: "Successive Digital",
};

console.log(createDeepCopy(obj));
