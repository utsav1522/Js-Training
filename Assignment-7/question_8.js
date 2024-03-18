// Create a function that fetches data from multiple
// APIs in parallel and then performs some operation on the combined data,
// using async/await.

const fetchData1 = async (url, heads) => {
  let response = await fetch(url, { headers: heads });
  return response.json();
};

const url1 =
  "https://numbersapi.p.rapidapi.com/6/21/date?fragment=true&json=true";
const headers1 = {
  "X-RapidAPI-Key": "e506a53a8fmsh590af1fe09ad06fp168bd2jsne105e9ecd714",
  "X-RapidAPI-Host": "numbersapi.p.rapidapi.com",
};
let p1 = fetchData1(url1, headers1);
const url2 = "https://currency-exchange.p.rapidapi.com/listquotes";
const headers2 = {
  "X-RapidAPI-Key": "e506a53a8fmsh590af1fe09ad06fp168bd2jsne105e9ecd714",
  "X-RapidAPI-Host": "currency-exchange.p.rapidapi.com",
};
let p2 = fetchData1(url2, headers2);
const url3 = "https://food-center.p.rapidapi.com/";
const headers3 = {
  "X-RapidAPI-Key": "e506a53a8fmsh590af1fe09ad06fp168bd2jsne105e9ecd714",
  "X-RapidAPI-Host": "food-center.p.rapidapi.com",
};
let p3 = fetchData1(url1, headers1);

Promise.all([p1, p2, p3]).then((result) => {
  let res1 = result[0];
  let res2 = result[1];
  let res3 = result[2];
  console.log("res1 is :  ", res1);
  console.log("res2 is :  ", res2);
  console.log("res3 is :  ", res3);
  result["dataFetchedBy"] = "Utsav Jain";
  console.log(result);
});

// values["added manually"] = "Value Added by Utsav Jain";
// console.log(values)
