import BankAccount from "./bankAccount.mjs";

let backAccount1 = new BankAccount("Nuh", 607, 10000);
console.log(`Current Balance: ${backAccount1.balance}`);
backAccount1.deposit(5000);
console.log(`Balance after deposit: ${backAccount1.balance}`);
backAccount1.withdraw(8000);
console.log(`Balance after withdrawal: ${backAccount1.balance}`);