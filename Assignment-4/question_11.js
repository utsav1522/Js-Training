// program to sort an array (bubble sort)

const bubbleSort = (arr) => {
    for (let i = 0; i < arr.length; i++){
        for (let j = 0; j < arr.length; j++){
            if (arr[j] > arr[j+1]){
                let temp = arr[j+1];
                arr[j+1] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}

const arr = [1,2,4,3,6,9,5];
console.log(bubbleSort(arr));