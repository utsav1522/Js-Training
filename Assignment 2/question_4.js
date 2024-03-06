// function expression that takes in a number and returns its square
var prompt = require('prompt');

const schema = {
    properties: {
        num: {
            pattern: /^[0-9]+$/,
            message: "Enter only digits",
            required: true
        }
    }
};

function calculateSquare(num){
    return num * num;
}

prompt.start();
prompt.get(schema, function(err, result){
        if (typeof Number(result.num) != 'number'){
        throw err;
    }
    console.log(`The Square of ${result.num} is : `, calculateSquare(Number(result.num)));
});
