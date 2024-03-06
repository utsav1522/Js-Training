// function to take input(age, name, phone no.) from user and display it
var prompt = require('prompt');
const schema = {
    properties: {
        name: {
            required: true, 
            pattern: /^[a-zA-Z]+$/,
            message: "Enter the aplhabets only"
        },
        age: {
            required: true,
            pattern: /^[0-9]+$/,
            message: "Enter the digis only",
            minValue: 1,
            maxValue: 100,

        },
        phoneNo : {
            required: true,
            pattern: /^[0-9]+$/,
            minLength: 10,
            maxLength: 10,
            message: "Enter only the digits and no characters or + symbol"
        }
    }
};

prompt.start();
prompt.get(schema, function(err, result){
    if (result.age > 100) throw err;
    if (result.phoneNo.length != 10) throw err;

    console.log("The details entered by the user are : ");
    console.log("Name: ", result.name);
    console.log("Age: ", result.age);
    console.log("Phone No.: ", result.phoneNo);
});
