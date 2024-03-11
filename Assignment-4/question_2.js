// program to reverse a string ("Hello John" => "olleH nhoJ")

const reverseStirng = (str) => {
  let reverseStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reverseStr += str[i];
  }
  return reverseStr;
};

console.log(reverseStirng("Hello My name is Yellow"));
