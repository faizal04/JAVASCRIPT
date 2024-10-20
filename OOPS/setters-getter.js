// A getter is a method that gets (retrieves) the value of a property.
// A setter is a method that sets (modifies) the value of a property.


const account = {
    owner: "faisal",
    pin: 1919,
    transactions: [2000, 900, 200, -400],

    // Getter for the latest transaction in the transactions array
    get latest_transaction() {
        return this.transactions.slice(-1).pop();  // Returns the last element of the transactions array
    },

    // Setter to change the account pin
    set changepin(pin) {

        if (typeof (pin) === "number" && pin != "0000" && pin.toString().length >= 6)
            this.pin = pin;  // Assigns the new pin value to the account pin
        else {
            console.log("the pin should be number and should not be in ordered and should be of length more than 6");
        }
    },

    // Setter to add a new transaction to the transactions array
    set add_transaction(amount) {
        this.transactions.push(amount);  // Adds a new transaction (amount) to the transactions array
    },
}

console.log(account.latest_transaction);  // Outputs the latest transaction (last element in transactions array)

account.changepin = 1902045;
console.log(account.pin);  // Outputs the updated pin (2020)

account.add_transaction = 500;
console.log(account.latest_transaction);  // Outputs the updated latest transaction (500)



//  setters and getters also work in classes;

class account1 {
    constructor(fullname, pin) {
        this.fullname = fullname;
        this.pin = pin;
    }


    // when you define a property using a setter (like your fullname setter), it gets automatically called whenever you try to assign a value to that property



    set fullname(name) {
        // This setter is called whenever you try to assign a value to the fullname property
        if (name.includes(" "))
            this._fullname = name;  // If valid, store the name in a private property
        else {
            console.log("there should be spaces between firstname and lastname");
        }
    }
    get fullname() {
        return this._fullname;   // Returns the private property _fullname
    }
}
const account_holder_1 = new account1("faisal harray", 20);
console.log(account_holder_1);

