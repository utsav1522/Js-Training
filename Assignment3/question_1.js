// program to perform functionality of a calculator (add,sub,multiply,divide)

const prompt = require("prompt");

const schema = {
  properties: {
    num1: {
      required: true,
      pattern: /^[0-9]+$/,
      message: "A number is required",
    },
    num2: {
      required: true,
      pattern: /^[0-9]+$/,
      message: "A number is required",
    },
    choice: {
      required: true,
      pattern: /^[0-9]+$/,
      message: "Enter a no in range 1 - 4",
    },
  },
};

const calculateSum = (a, b) => {
  return a + b;
};

const calculateDifference = (a, b) => {
  return a - b;
};

const calculateProduct = (a, b) => {
  return a * b;
};

const calculateQuotient = (a, b) => {
  return ( a / b );
};

console.log(" 1. Add, \n 2. Subtract, \n 3. Multiply, \n 4. Divide ")
prompt.start();
prompt.get(schema, function (err, result) {
  if (Number(result.choice) < 0 || Number(result.choice) > 4) throw err;
  switch (Number(result.choice)) {
    case 1:
      console.log("Sum is :" ,calculateSum(Number(result.num1), Number(result.num2)));
      break;
    case 2:
      console.log("Difference is :" ,calculateDifference(Number(result.num1), Number(result.num2)));
      break;
    case 3:
      console.log("Product is :" ,calculateProduct(Number(result.num1), Number(result.num2)));
      break;
    case 4:
      if (Number(result.num2) === 0) {
        console.log("Divisor cannot be zero");
        return;
      }
      console.log("Divisor is :" ,calculateQuotient(Number(result.num1), Number(result.num2)));

      break;
  }
});
