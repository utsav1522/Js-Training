// Fibbonacci Series: 

const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  const printFibbonacci = (num) => {
    let a = 0;
    let b = 1;
    console.log(a);
    console.log(b);
    for (let i = 0; i < num-2; i++){
        let c = a+b;
        console.log(c);
        a = b;
        b = c;
    }
  }

  readline.question("Enter a number:", (num) => {
    if (typeof Number(num) != "number") {
      console.log("a number is not entered ! ");
    }
    printFibbonacci(Number(num));
    readline.close();
  });