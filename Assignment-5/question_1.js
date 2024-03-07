// program to iterate over object


const obj = {
    firstName: "Utsav",
    lastName: "Jain",
    DOB: "12 October 2001",
    school: "Montfort School",
    college: "Jaypee institute of Information Technology",
    currentCompany: "Successive Digital"
};


for (key in obj){
    console.log(`${key} : ${obj[key]}`);
}