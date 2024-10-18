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
const account_holder_1 = new account1("faisal", 20);
console.log(account_holder_1);