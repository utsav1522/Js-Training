// program to convert given string in camel case ("hello john doe" => helloJohnDoe)

const camelCase = (str) => {
  let ans = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] == " ") {
      continue;
    }
    if (str[i - 1] == " ") {
      ans += str[i].toUpperCase();
    } else {
      ans += str[i];
    }
  }
  return ans;
};

str = "Hello jOhn doe";
str = str.trim();
str = str.toLocaleLowerCase()
console.log(camelCase(str));
