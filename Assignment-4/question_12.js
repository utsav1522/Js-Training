const arr1 = [1,2,3,4,5,6,7];
const arr2 = [5,6,7,9,10,11,12,13];

const common = []

const intersection = (arr1, arr2) => {
    for (i in arr2){
        if (arr1.includes(arr2[i])){
            common.push(arr2[i]);
        }
    }
    return common;
}


console.log(intersection(arr1, arr2));