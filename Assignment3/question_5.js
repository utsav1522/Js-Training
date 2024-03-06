// program to print all even number first and then all odd numbers in one iteration



const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  
  const even = [];
  const odd = [];
  
  const saveOddAndEven = (limit) => {
    for (let i = 0; i <= limit; i++) {
      if (i % 2 === 0) even.push(i);
      if (i % 2 !== 0) odd.push(i);
    }
    console.log(even);
    console.log(odd);
  };
  
  readline.question("Enter a number:", (num) => {
    if (typeof Number(num) != "number") {
      console.log("a number is not entered ! ");
    }
    saveOddAndEven(Number(num));
    readline.close();
  });
  