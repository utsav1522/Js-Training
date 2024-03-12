// program to remove all the id key from array of object ({name:"John", age:27, id:1})

const obj = [
    {
        name: "abc",
        age: 13,
        id: 1
    },
    {
        name: "def",
        age: 12,
        id: 2
    },
    {
        name: "ghi",
        age: 11,
        id: 3
    },
    {
        name: "jkl",
        age: 111,
        id: 9
    },
    {
        name: "mno",
        age: 24,
        id: 4
    },
]


for (key in obj){
    delete obj[key]["id"];
}

console.log(obj)