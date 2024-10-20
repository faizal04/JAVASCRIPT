class person {
    // The parent class 'person' contains methods common to all person instances.
    calcage() {
        console.log(2024 - this.birthyear);
    }

    income(choice) {
        switch (choice) {
            case 1:
                console.log("earn nothing");
                break;
            case 2:
                console.log("earn 10k");
                break;
            case 3:
                console.log("earn 20k");
                break;
            case 4:
                console.log("earn >30k");
                break;
        }
    }

    inputdata(firstname, birthyear) {
        // This method assigns the firstname and birthyear properties to an instance.
        this.firstname = firstname;
        this.birthyear = birthyear;
    }
}

// Creating a 'person_1' object using Object.create, which allows it to inherit the methods of the 'person' class.
const person_1 = Object.create(person.prototype);
person_1.inputdata("faisal", 2024);

// Now creating 'studentproto', an object that will inherit the prototypes of 'person'.
const studentproto = Object.create(person.prototype);

studentproto.init = function (firstname, birthyear) {
    // This method initializes student data, using 'person's inputdata method via 'call' to inherit behavior.
    person.inputdata.call(this, firstname, birthyear);
}

studentproto.course = function (choice) {

    switch (choice) {
        case 1:
            console.log("BtechCSE");
            break;
        case 2:
            console.log("BtechECE");
            break;
        case 3:
            console.log("BtechCE");
            break;
        case 4:
            console.log("BtechMEC");
            break;
    }
}

// Creating 'student_1', an object that inherits from 'studentproto', which itself inherits from 'person'.
const student_1 = Object.create(studentproto);
student_1.inputdata("ibrahim", 2003);
student_1.calcage();
student_1.course(1);
student_1.income(2);
console.log(student_1);  
