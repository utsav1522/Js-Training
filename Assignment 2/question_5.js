// function expression that takes in two numbers and returns their sum
var prompt = require('prompt');

const schema = {
    properties:{
        num1: {
            pattern: /^[0-9]+$/,
            message: "Enter only Digits",
            required: true
        },
        num2: {
            pattern: /^[0-9]+$/,
            message: "Enter only digits",
            required: true
        }
    }
}

function add(num1, num2){
    return num1 + num2;
}

prompt.start();
prompt.get(schema, function (err, result) {
    console.log("input received from user: ");
    if (typeof Number(result.num1) != 'number'){
        throw err;
    }
    if (typeof Number(result.num2) != 'number'){
        throw err;
    }
    console.log("Number 1: " +  result.num1);
    console.log("Number 2: " +  result.num2);
    console.log("Sum of 2 numbers is : ", add(Number(result.num1), Number(result.num2)) );
});