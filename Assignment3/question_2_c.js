
// 1 2 3 4 5
// 1 2 3 4
// 1 2 3
// 1 2
// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5


let rowLimit = 5;
for (let i = 1; i<5; i++){
    let str = "";
    for (let j = 1; j <= rowLimit; j++){
        str += j + " ";
    }
    rowLimit--
    console.log(str);
}
rowLimit = 1;

for ( let i = 1; i <= 5; i++ ){
    let str = "";
    for (let j = 1; j <= rowLimit; j++){
        str += j + " ";
    }
    console.log(str);
    rowLimit++;
    if (rowLimit == 6) break;
}