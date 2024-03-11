// Create a class BankAccount with properties
// balance and owner and
// methods deposit(), withdraw(), and displayBalance()

class BankAccount {
  #balance = 0;
  #firstName = "";
  #lastName = "";
  
  constructor(balance = 1000, firstName = "Jonh", lastName = "Doe") {
    this.#balance = balance;
    this.#firstName = firstName;
    this.#lastName = lastName;
  }

  printBalance() {
    console.log(
      "---------------------- Account Balance ----------------------"
    );
    console.log("First Name : ", this.#firstName);
    console.log("Last Name : ", this.#lastName);
    console.log(`Current balance in account is ${this.#balance}`);
    console.log("------------------------------------------------------------");
  }

  deposit(depositAmount) {
    this.#balance += depositAmount;
    console.log(`Amount Deposited is : ${depositAmount} `);
    this.printBalance();
  }

  withdraw(withdrawAmount) {
    if (withdrawAmount > this.#balance) {
      console.log("Sufficient balance not available");
      this.printBalance();
    } else {
      console.log(`${withdrawAmount} withdrawn`);
      this.#balance -= withdrawAmount;
      this.printBalance();
    }
  }
}

const myAccount1 = new BankAccount(1000, "Utsav", "Jain");
console.log(myAccount1);
myAccount1.printBalance();
myAccount1.deposit(1000);
myAccount1.withdraw(1000);
myAccount1.withdraw(5000);
