// program to reverse a string ("Hello John" => "olleH nhoJ")

const prompt = require ('prompt');

const schema = {
    properties: {
        str: {
            pattern: /^[a-zA-Z0-9_]*$/,
            messgage: "Enter the string with alphabets and digits",
            required: true
        }
    }
}

const reverseStirng = (str) => {
    let reverseStr = ""
    for (let i = str.length-1; i >= 0; i--){
        reverseStr+=str[i];
    }
    return reverseStr;
}

prompt.start();
prompt.get(schema,(err, result) => {
    console.log(reverseStirng(result.str));
});