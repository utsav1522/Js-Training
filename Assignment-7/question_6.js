// Implement a function that returns a resolved Promise 
// after a specified delay using async/await.


const fun1 = async () => {
  const url = "https://currency-convertor-api.p.rapidapi.com/convert/1/USD/MAD";
  setTimeout(async () => {
    const fetchPromise = await fetch(url, {
      headers: {
        "X-RapidAPI-Key": "e506a53a8fmsh590af1fe09ad06fp168bd2jsne105e9ecd714",
        "X-RapidAPI-Host": "currency-convertor-api.p.rapidapi.com",
      },
    });
    const data = fetchPromise.json();
    console.log(data);

  }, 5000);
};

console.log("Start");
fun1();
console.log("end");
