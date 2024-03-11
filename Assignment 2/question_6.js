// function expression that takes in a number and returns true if it's even and false if it's odd

var prompt = require('prompt');
const schema = {
    properties: {
        num:{
            pattern: /^[0-9]+$/,
            messgage: "Enter a number",
            required: true
        }
    }
};

function checkOddOrEven(num){
    if (num%2 == 0)return true;
    else return false;
}
prompt.start();
prompt.get(schema, function(err, result){
        if (typeof Number(result.num) != 'number'){
        throw err;
    }
    console.log(`The output is : `,checkOddOrEven(Number(result.num)));
});