// Create a class Student that inherits from the Person class
// and has a property studies.
// Override the greeting() method to include information about what the student is studying.

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

class Student extends Person {
  #studies = "";
  constructor(name = "John Doe", age, gender, interests, studies) {
    super(name, age, gender, interests);
    this.#studies = studies;
  }

  greetings() {
    super.greetings();
    console.log("I study", this.#studies);
  }
}

let student1 = new Student(
  "Utsav Jain",
  "22",
  "M",
  ["Driving", "Listening to music"],
  "Bachelors of Technology in Computer Science and Engineering"
);

student1.greetings();
