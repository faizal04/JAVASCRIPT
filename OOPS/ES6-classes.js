class person_class {
    // the job of constructor method is initializing the  object properties 
    // its automatically called when you create an object from the class using "new"
    constructor(firstname, birthyear) {
        this.firstname = firstname
        this.birthyear = birthyear

    }
    //  The methods you define in a class(or by using .prototype ) are stored on the prototype and are inherited by the objects created from the class. Built-in methods like "hasOwnProperty" also come from JavaScript's object prototype system.

    // this is the way of es6 classes of adding prototype
    // these methods also called Instance methods
    calcage() {
        console.log(2024 - this.birthyear);
    }
}
// this type of adding prototype is same as constructor function and gonna work same here also     
// these methods also called Instance methods

person_class.prototype.greet = function () {
    console.log(`hey ${this.firstname}`);
}


const person1 = new person_class("faisal", 2004);
const person2 = new person_class("ibrahim", 2000);
console.log(person1, person2)


//  both methods works fine
person1.calcage();
person1.greet();

person2.calcage();
person2.greet();




