// a constructor function is a special type of function used to create or initialize objects.
// when you use a constructor function with a new keyword, a empty object is created.
// inside the constructor . 'this' keyword refers to a new object being created 



let Person = function (firstname, birthyear) {
    this.firstname = firstname;
    this.birthyear = birthyear;

    // never make method here because if you gonna make 1k objects then the method is copied in the 1k object.
    // what i mean by object here is the example 
    this.calcage = function () {
        console.log(2024 - this.birthyear);
    }

};
let person1_data = new Person("faisal", 2004);
let person2_data = new Person("hashim", 2002);
let person3_data = new Person("suhail", 2005);
let person4_data = new Person("junaid", 2003);

console.log(person1_data);
console.log(person2_data);
console.log(person3_data);
console.log(person4_data);


// function automatically return object 