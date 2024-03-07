// program to remove dupliacte elements from an array

const arr = [1,2,3,4,5,6,7,1,2,3,4,5,6,7, 8];

const obj = {}
for (i in arr){
    if (obj[arr[i]] != undefined){
        obj[arr[i]].push(i);
    }else{
        obj[arr[i]] = [i];
    }
}

for (key in obj){
    if (obj[key].length == 1){
        delete obj[key];
    }
}
console.log(obj)

const obj2 = {};

for (key in obj){
    obj2[key] = obj[key][obj[key].length-1]
}
console.log(obj2);