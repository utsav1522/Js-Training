// program to convert given string in camel case ("hello john doe" => helloJohnDoe)

const camelCase = (str) => {
    let arr = str.split(" ");
    console.log(arr)
    let camelCaseStr = ""
    camelCaseStr+=arr[0];
    for (let i = 1;  i< arr.length; i++){
        let word = "";
        let toConvert = arr[i];
        for (let j = 0; j< toConvert.lengtj; j++){
            if (j == 0){
                word+=toConvert[j].toUpperCase();
            }else{
                word+=toConvert[j];
            }
        }
        camelCaseStr+=word;
    }
    console.log(camelCaseStr);
}


let str = "hello john doe";
camelCase(str)