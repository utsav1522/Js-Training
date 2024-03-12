// program to remove duplicate charecters from a string ("Hello Yellow" => "Helo Yw")

const checkUnique = (str) => {
  let uniqueStr = "";
  for (let i = 0; i < str.length; i++) {
    if (uniqueStr.includes(str[i]) === false) {
      uniqueStr += str[i];
    }
  }
  return uniqueStr;
};

console.log(checkUnique("Hello My name is Yellow"));
