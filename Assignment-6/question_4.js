// Create a class called `Person`
// that has properties for `firstName`, `lastName`, and `age`.
// The class should also have a method called `fullName` that returns the person's full name.
// Additionally, the class should have a method called `averageAge`
// that takes in an array of `Person` objects
// and returns the average age of all the people in the array.

class Person {
  #firstName = "";
  #lastName = "";
  #age = 10;

  constructor(firstName, lastName, age) {
    this.#firstName = firstName;
    this.#lastName = lastName;
    this.#age = age;
  }

  get age() {
    return this.#age;
  }

  fullName() {
    return this.#firstName + this.#lastName;
  }

  averageAge(personArray) {
    let sum = 0;
    personArray.forEach((element) => {
      sum += Number(element.age);
      // console.log(element.age)
    });
    return sum / personArray.length;
  }
}

let person1 = new Person("abc", "def", "10");
let person2 = new Person("ghi", "jkl", "20");
let person3 = new Person("mno", "pqr", "30");
const personObj = [person1, person2, person3];
console.log(person3.averageAge(personObj));
