class person {
    constructor(firstname, birthyear) {
        this.firstname = firstname;
        this.birthyear = birthyear;
    }
    calcage() {
        return 2024 - this.birthyear;
    }
}

class student extends person {
    constructor(firstname, birthyear, course) {

        // super() is used to call the parent class constructor and must be called before accessing this in the subclass constructor.
        super(firstname, birthyear);

        this.course = course;
    }
    calcage() {
        console.log(`i am only ${super.calcage()} years old but it feels like 80`); // super also used to call metods from parent class 
    }
}

const student_1 = new student("faisal", 2004, "btech");
console.log(student_1);
student_1.calcage();


// When you extend a class, the subclass doesn't get fully constructed until the parent class (superclass) is properly initialized. Calling super() ensures that the parent class's constructor is invoked, which sets up the internal structure (like properties or methods) that the subclass might rely on.

// Without calling super(), the subclass can't properly set up its own this context because the parent class hasn't been initialized yet.