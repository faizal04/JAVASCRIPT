class company {
    constructor(company_name, companyDOB) {
        this.company_name = company_name;
        this.companyDOB = companyDOB;
    }

    static data() {
        console.log("The data of every company is not accessible to individual instances"); // Static method: this method can only be called on the class, not on instances
    }

    // The 'age' method is an instance method, i.e., all objects created using the company class will inherit this method
    age() {
        console.log(2024 - this.companyDOB);
    }
}

const company_1 = new company("evowebx", 2010);
company_1.age();
company_1.data();    // will throw an error because 'data' is a static method and can't be called on an instance
