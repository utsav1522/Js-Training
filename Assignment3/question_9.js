// Fibbonacci Series: 

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
  printFibbonacci(Number(10));

