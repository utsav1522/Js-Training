// program to print all even number first and then all odd numbers in one iteration

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

saveOddAndEven(Number(100));