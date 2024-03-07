// program to dispaly number from 1-20 using all types of loops


const printUsingWhile = () => {
    let i = 1;
    console.log("Print using while loop");
    while (i <= 20){
        console.log(i);
        i++;
    }
}

const printUsingFor = () => {
    console.log("Print using For loop");
    for (let i = 1; i <= 20; i++){
        console.log(i);
    }
}

const pirntUsingDoWhile = () =>{
    console.log("Print using Do While ");
    let i = 1;
    do{
        console.log(i);
        i++;
    }while(i < 20);
}

printUsingFor();
printUsingWhile();
pirntUsingDoWhile();