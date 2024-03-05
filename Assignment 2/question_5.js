// function expression that takes in two numbers and returns their sum

function calculateSum(num1, num2){
    return num1 + num2;
}

const num1 = prompt("Enter the first no.:");
const num2 = prompt("Enter the second no.:");
console.log(calculateSum(Number(num1), Number(num2)));