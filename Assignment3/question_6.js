// program to display prime numbers from 1 to 50

const checkPrime = (dividend) => {
    let divisor = 2;
    while (divisor <= (dividend / 2)){
        if (dividend % divisor === 0){
            return false;
        }
        divisor++;

    }
    return true;
}


let num = 2;
for (; num <= 50; num++){
    if (checkPrime(num) === true){
        console.log(num);
    }
}