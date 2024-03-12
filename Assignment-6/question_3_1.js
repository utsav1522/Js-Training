// Create a class Person with properties name, age, gender, and interests.
// Add a method greeting() that returns a string introducing the person.
// Also add a method farewell() that returns a string saying goodbye to the person.

class Person {
  #name = "";
  #age = 1;
  #gender = "M";
  #interests = [];
  
  constructor(name = "John Doe", age, gender, interests) {
    this.#age = age;
    this.#name = name;
    this.#gender = gender;
    this.#interests = interests;
  }

  checkAge() {
    if (this.#age < 1) {
      this.#age = 1;
    }
    if (this.#age > 115) {
      console.log("Age is not realistic");
      return;
    }
  }

  containsNumbers() {
    return /\d/.test(this.#name);
  }

  greetings() {
    this.checkAge();
    if (this.containsNumbers() === true) {
      console.log("Name is not valid");
      return;
    }

    let interestsStr = "";
    this.#interests.forEach(function (interest) {
      interestsStr += interest + " ";
    });

    console.log("Hello !!!");
    console.log("My Name is : ", this.#name, ". ");
    console.log("I am ", this.#age, " years old.");
    if (this.#age > 100) {
      console.log("Congratulation !!! You hit a century.");
    }
    console.log("My interests are ", interestsStr);
  }
  printName() {
    console.log(this.#name);
  }

  farewell() {
    if (this.#gender === "M") {
      console.log("Good Bye Mr.", this.#name);
    } else {
      console.log("Good Bye Ms.", this.#name);
    }
  }
}

let person1 = new Person("Utsav Jain", "22", "M", [
  "Driving",
  "Listening to music",
]);

let person2 = new Person("Abcd", "22", "F", ["Listening to music"]);

person1.greetings();
person1.farewell();

person2.greetings();
person2.farewell();
