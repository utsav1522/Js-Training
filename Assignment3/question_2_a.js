// 1
// 2 3
// 4 5 6
// 7 8 9 10


let no = 1;
for (let i = 1; i <= 4; i++){
    let str = "";
    for (let j = 0; j<i; j++){
        str += no + " ";
        no++;
    }
    console.log(str);
}