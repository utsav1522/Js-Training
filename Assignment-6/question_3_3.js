// Create a class Teacher
// that inherits from the Person class
// and has a property subjectsTaught.
// Override the farewell() method to include information about what the teacher teaches.

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
    if (age < 1) {
      this.#age = 1;
    }
    if (age > 115) {
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

  farewell() {
    if (this.#gender === "M") {
      console.log("Good Bye Mr.", this.#name);
    } else {
      console.log("Good Bye Ms.", this.#name);
    }
  }
}
class Teacher extends Person {
  #subjectsTaught = "";
  constructor(name = "John Doe", age, gender, interests, subjectsTaught) {
    super(name, age, gender, interests);
    this.#subjectsTaught = subjectsTaught;
  }

  farewell() {
    super.farewell();
    let subjectStr = "";
    this.#subjectsTaught.forEach(function (subject) {
      subjectStr += subject + " ";
    });

    console.log("I taught", subjectStr);
  }
}

let teacher1 = new Teacher(
  "Abcd",
  30,
  "F",
  ["Travelling", "Cooking"],
  ["Electrical Science, Data Structues and Algorithms"]
);

teacher1.farewell();
