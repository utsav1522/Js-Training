// program to remove duplicate charecters from a string ("Hello Yellow" => "Helo Yw")

const prompt = require ('prompt');

const checkUnique = (str) => {
    let uniqueStr = "";
    for (let i = 0; i < str.length; i++){
        if (uniqueStr.includes(str[i]) === false){
            uniqueStr+= str[i];
        }
    }
    return uniqueStr;
}

schema = {
    properties: {
        str: {
            required: true,
            pattern: /^[a-zA-Z0-9_]*$/,
            message:"Enter the string of letters and digits"
        }
    }
}

prompt.start();
prompt.get(schema, (err, result) => {
    console.log(checkUnique(result.str));
})

