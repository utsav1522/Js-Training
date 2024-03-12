// program to reverse a string ("Hello John" => "olleH nhoJ")

const reverseWord = (str) => {
  var splitString = str.split("");
  var reverseArray = splitString.reverse();
  var joinArray = reverseArray.join("");
  return joinArray;
};

const reverseStirng = (str) => {
  let reverseStr = "";
  let word = "";
  for (let i = 0; i <= str.length - 1; i++) {
    word += str[i];
    if (str[i] === " ") {
      word = reverseWord(word);
      reverseStr += word + " ";
      word = "";
    }
  }
  word = reverseWord(word);
  reverseStr += word + " ";
  word = "";
  return reverseStr;
};
let str = "Hello My name is Yellow";
str.trim();
console.log(reverseStirng(str));
