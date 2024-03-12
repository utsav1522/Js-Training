// program to convert given string to upperCase OR lowerCase

const convertCase = (str) => {
  let convertedCase = "";
  for (let i = 0; i < str.length; i++) {
    let letter = str[i];
    if (letter.toUpperCase() === letter) {
      convertedCase += letter.toLowerCase();
    } else {
      convertedCase += letter.toUpperCase();
    }
  }
  console.log(convertedCase);
};

convertCase("uTsav");
