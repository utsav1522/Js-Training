// function expression that takes in a number and returns true if it's even and false if it's odd

function checkOddEven(num){
    if (num%2 == 0) return true;
    if (num%2 != 0) return false;
}

const num = prompt("Enter a number:");
console.log(checkOddEven(Number(num)));