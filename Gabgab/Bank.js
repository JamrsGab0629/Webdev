class Bank{
  #balance

  constructor(balance){
    this.#balance = balance;

  }

  Withdraw(amount){
    if(amount > 0 && this.#balance >= amount){
        this.#balance -= amount; 
        return true;
    }
    else{
        console.log("Error");
        return false; 
    }
  }
  Deposit(amount){
    if(amount > 0){
        this.#balance += amount;
        return true;
    }
    else{
        console.log("Not enough");
        return false;
    }
  }
get Balance(){
    return this.#balance;
}
Transfer(targetaccount,amount){
    if(this.Withdraw(amount)){
       targetaccount.Deposit(amount);

    }else{
        console.log("Your money was not enough");
    }
}


}

const myaccount = new Bank(1000);
myaccount.Deposit(200);
console.log(myaccount.Balance);

console.log(myaccount.Balance + " \n");

const secondaccount = new Bank(2000);
console.log(secondaccount.Balance);

myaccount.Transfer(secondaccount,700);
console.log("First accounts balance" + myaccount.Balance);
console.log("Seconds accounts balance" + secondaccount.Balance);

