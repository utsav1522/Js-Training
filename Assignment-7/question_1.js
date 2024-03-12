// Give an example
// of using a callback function
// to handle an asynchronous operation in JavaScript
// (Use any open api to make a call)

console.log("Start");

const url = "https://currency-convertor-api.p.rapidapi.com/convert/1/USD/MAD";
const fetchPromise = fetch(url, {
  headers: {
    "X-RapidAPI-Key": "e506a53a8fmsh590af1fe09ad06fp168bd2jsne105e9ecd714",
    "X-RapidAPI-Host": "currency-convertor-api.p.rapidapi.com",
  },
});

fetchPromise
  .then((response) => response.json())
  .then((data) => console.log(data));

console.log("End");
