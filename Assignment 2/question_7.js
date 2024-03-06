// -----------------------------------------------------
// question 3
// -----------------------------------------------------

function fun1 (){
    console.log("function 1 called")
}

const fun2 = (fun1) => {
    console.log("function 2 called");
    fun1()
}
fun2(fun1)
// -----------------------------------------------------
// question 4
// -----------------------------------------------------
const calculateSquare = (a) => {
    return a*a;
}

const no = prompt("Enter a no to calculate square.")
console.log(calculateSquare(Number(no)));

// -----------------------------------------------------
// question 5
// -----------------------------------------------------
const calculateSum = (num1, num2) => {
    return num1 + num2;
}

const num1 = prompt("Enter the first no.:");
const num2 = prompt("Enter the second no.:");

console.log(calculateSum(Number(num1), Number(num2)));

// -----------------------------------------------------
// question 6
// -----------------------------------------------------


const checkOddEven = (num) => {
    if (num%2 == 0) return true;
    if (num%2 != 0) return false;
}


const num = prompt("Enter a number:");

console.log(checkOddEven(Number(num)));