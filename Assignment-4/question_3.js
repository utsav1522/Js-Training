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

const giveFrequency = (str) => {
    let freqObj = {};
    for (let i = 0; i < str.length; i++){
        if (freqObj[str[i]]){
            freqObj[str[1]] += 1;
        }else{
            freqObj[str[i]] = 1;
        }
    }
    console.log(freqObj);
}

prompt.start();
prompt.get(schema, (err, result) => {
    giveFrequency(result.str);
    // console.log(freq);
});