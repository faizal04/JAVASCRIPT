// Constructor function for 'person'
const person = function (firstname, birthyear) {
    this.firstname = firstname;
    this.birthyear = birthyear;
}

// Adding a method to 'person's prototype to calculate age
person.prototype.calcage = function () {
    return 2024 - this.birthyear;
}

// Constructor function for 'student', which is a subclass of 'person'
const student = function (firstname, birthyear, course) {
    // Inheriting properties from 'person' by calling the person constructor
    // using 'call' to set 'this' context to the student instance
    person.call(this, firstname, birthyear);
    this.course = course;
}

// Linking 'student' prototype to 'person' prototype
// This sets up inheritance so that 'student' instances can access 'person's methods
student.prototype = Object.create(person.prototype);

// Adding a new method specific to 'student' in its own prototype
student.prototype.introduce = function () {
    // Introducing the student, and calling 'calcage' to calculate and display the age
    console.log(`Myself ${this.firstname}, and I am ${this.calcage()} years old, currently pursuing ${this.course}`);
    // here we were able to access both the prototype of student and the prototype of person.
}

// Creating an instance of 'student'
const student_1 = new student("faisal", 2004, "btechCSE");
console.log(student_1);
student_1.introduce();

// Calling the inherited 'calcage' method
const age = student_1.calcage();
console.log(age);
// Explanation:
// 1. We defined a 'person' object with properties 'firstname' and 'birthyear'.
//    It has a prototype method 'calcage' to calculate the age based on birthyear.
// 2. Then we created a 'student' constructor function, which adds the 'course' property.
//    It inherits properties from 'person' using 'person.call(this, ...)'.
// 3. We set up the inheritance by linking 'student.prototype' to 'person.prototype' using 'Object.create()'.
//    This ensures that every prototype method of 'person' is available to 'student' objects, but not the other way around.
// 4. A method 'introduce' is added to the 'student' prototype, which introduces the student and calculates their age using 'calcage'.
// 5. When a new 'student' is created, it inherits both its own methods and the methods of 'person' (like 'calcage').
