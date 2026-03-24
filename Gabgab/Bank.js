class Bank {
  #balance;

  constructor(balance) {
    this.#balance = balance;
  }

  Withdraw(amount) {
    if (amount > 0 && this.#balance >= amount) {
      this.#balance -= amount;
      return true;
    } else {
      console.log("Error");
      return false;
    }
  }
  Deposit(amount) {
    if (amount > 0) {
      this.#balance += amount;
      return true;
    } else {
      console.log("Not enough");
      return false;
    }
  }
  get Balance() {
    return this.#balance;
  }
  set SBalance(amount) {
    this.#balance = amount;
  }
  Transfer(targetaccount, amount) {
   
    if (this.Withdraw(amount)) {
      targetaccount.Deposit(amount);
    } else {
    throw new Error("Your money was not enough");
    }
  }

}

class Savings extends Bank {
  interestrate;

  constructor(interestrate, balance) {
    super(balance);
    this.interestrate = interestrate;
  }
  apply() {
    let total = (this.Balance * this.interestrate) / 365;
    this.SBalance = total + this.Balance;

    return this.Balance;
  }
}

const myaccount = new Bank(1000);
myaccount.Deposit(200);
console.log(myaccount.Balance);

console.log(myaccount.Balance + " \n");

const secondaccount = new Bank(2000);
console.log(secondaccount.Balance);

myaccount.Transfer(secondaccount, 700);
console.log("First accounts balance" + myaccount.Balance);
console.log("Seconds accounts balance" + secondaccount.Balance);

const newaccount = new Savings(0.04, myaccount.Balance);
newaccount.apply();
console.log(newaccount.Balance);
