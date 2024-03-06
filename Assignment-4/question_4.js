const prompt = require ('prompt');
const schema = {
  properties: {
    str: {
      pattern: /^[a-zA-Z]*$/,
      messgage: "Enter the string with alphabets and digits",
      required: true,
    },
  },
};

const convertCase = (str) =>{
    let convertedCase = "";
    for (let i = 0; i < str.length; i++){
        let letter = str[i];
        if (letter.toUpperCase() === letter){
            convertedCase += letter.toLowerCase();
        }else{
            convertedCase += letter.toUpperCase();
        }
    }
    console.log(convertedCase);
}

prompt.start();
prompt.get(schema, (err, result) => {
    convertCase(result.str);
});
