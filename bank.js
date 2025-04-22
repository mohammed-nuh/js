class BankAccount {
    name;
    accNo;
    balance;

    constructor(n, a, b){
        this.name = n;
        this.accNo = a;
        this.balance = b;
    }

    printDetails(){
        console.log(`Name: ${this.name}`);
        console.log(`Account Number: ${this.accNo}`);
        console.log(`Balance : ${this.balance}`);
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

let backAccount1 = new BankAccount("Nuh", 607, 10000);
console.log(`Current Balance: ${backAccount1.balance}`);
backAccount1.deposit(5000);
console.log(`Balance after deposit: ${backAccount1.balance}`);
backAccount1.withdraw(8000);
console.log(`Balance after withdrawal: ${backAccount1.balance}`);
