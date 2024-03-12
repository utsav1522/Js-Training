// program to give count of variables in a string ("abcabcdabbcc" => "a3b4c4d1")


const frequencyChar = (str) => {
    let freq = {};
    for(let i = 0;  i < str.length; i++){
        let char = str[i];
        if (freq[char]){
            freq[char]++;
        }else{
            freq[char] = 1;
            
        }
    }
    let ans = "";
    for (key in freq){
        ans += (key + freq[key]);
    }
    return ans;
}

let str = "aaaabbbcccc";
console.log(frequencyChar(str));
