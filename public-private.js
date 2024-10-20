class Account {
    #pin;                               // Private field for the account PIN
    #transactions;                      // Private field to hold transactions

    constructor(owner, pin) {
        this.owner = owner;
        this.#pin = pin;                        // Initialize the private PIN
        this.bank_code = "JK-SRG";              // Bank code (public)
        this.#transactions = [];             // Initialize an empty transactions array(private)
    }

    get statement() {
        return this.#transactions;
    }

    // Private setter for transactions(not accessible ourside the class)
    set #transaction_setter(amount) {
        if (amount > 0) {
            this.#transactions.push(amount);
            console.log(`Your ${amount} has been deposited :)`);
        }
        if (amount < 0) {
            this.#transactions.push(amount);
            console.log(`Your ${amount} has been withdrawn :)`);
        }
    }

    // Method to check balance
    balance(pin_entered) {
        if (pin_entered === this.#pin) {
            const total_balance = this.#transactions.reduce((acc, cur) => acc + cur, 0);
            console.log(`Your total account balance is ${total_balance}`);
        } else {
            console.log("Incorrect PIN");
        }
    }

    // Method to deposit an amount(puclic)
    deposit(amount) {
        this.#transaction_setter = amount;           // Use private setter to add deposit
    }

    // Method to withdraw an amount(public)
    withdraw(amount) {
        this.#transaction_setter = -amount;
    }
}

const person_1 = new Account("Faisal", 1929);

person_1.deposit(200);
person_1.withdraw(300);
person_1.balance(1929);

let statement = person_1.statement;

console.log(statement);

console.log(person_1); 
