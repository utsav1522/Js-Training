// program to sort an array of object on the basis of age ({name:"John", age:26})

const obj = [
  {
    fullname: "abcd",
    age: 10,
  },
  {
    fullname: "efgh",
    age: 9,
  },
  {
    fullname: "efgh",
    age: 19,
  },
  {
    fullname: "efgh",
    age: 1,
  },
];

const sorttedObj = obj.sort(function (a, b) {
  let x = Number(a["age"]);
  let y = Number(b["age"]);

  if (x > y) {
    return 1;
  } else return -1;
});

console.log(sorttedObj)