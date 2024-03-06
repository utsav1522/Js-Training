//         * 
//       * * * 
//     * * * * * 
//   * * * * * * * 
//     * * * * * 
//       * * * 
//         * 



let count = 6;
let countStar = 1;
for (let i = 0; i < 4; i++){
    let str = "";
    for (let j = 0; j < count; j++){
        str+= " ";
    }
    for (let k = 0; k < countStar; k++){
        str+= "* ";
    }
    console.log(str);
    countStar+=2;
    count-=2;
    
}
countStar-=4
count+=4
for (let i = 0; i < 5; i++){
    let str = "";
    for (let j = 0; j < count; j++){
        str+= " ";
    }
    for (let k = 0; k < countStar; k++){
        str+= "* ";
    }
    console.log(str);
    countStar-=2;
    count+=2;
    
}
