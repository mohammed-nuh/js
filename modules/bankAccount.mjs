class BankAccount {
    constructor(n, a, b){
        this.name = n;
        this.accNo = a;
        this.balance = b;
    }

    deposit(amt){
        console.log(`Depositing ${amt} to bank account...`);
        this.balance += amt;
    }
    
    withdraw(amt){
        console.log(`Attempting to withdraw ${amt} from bank account...`);
        amt > this.balance ? console.log(`Insufficient balance`) : this.balance -= amt;
    }
}

export default BankAccount;
