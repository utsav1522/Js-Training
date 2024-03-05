// function to take input(age, name, phone no.) from user and display it

function displayInformation (age, fullName, phoneNo){
    console.log("Name: ", fullName);
    console.log("Age: ", age);
    console.log("Phone No.: ", phoneNo);
}


const fullName = prompt("Enter the name: ");
const age = prompt("Enter the age of person: ");
const phoneNo = prompt("Enter the phone no.: ");

displayInformation(age, fullName, phoneNo);