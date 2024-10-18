// Here we created an object 'employee_prototypes' which contains methods as prototypes. 
// Then we linked the 'employee' object to these prototypes using Object.create.

const employee_prototypes = {
    year_of_experience() {
        console.log(2024 - this.date_of_joining);
    },

    inputdata(firstname, date_of_joining, age) {
        this.firstname = firstname;
        this.date_of_joining = date_of_joining;
        this.age = age;
    }
}

const employee = Object.create(employee_prototypes);  // Creating 'employee' object that inherits from 'employee_prototypes'
employee.inputdata("faisal", 2010, 20);               // Setting properties on the 'employee' object
employee.year_of_experience();                        // Calling the inherited method to calculate years of experience
