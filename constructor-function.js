
// Constructor function for creating a 'person' object
const person = function (firstname, birthyear) {
  this.firstname = firstname;
  this.birthyear = birthyear;
};

// Creating two instances (p1 and p2) of the 'person' object
let p1 = new person("ibrahim", 1995);
let p2 = new person("faisal", 2004);
console.log(p1, p2);


// Adding a method to the prototype of 'person'
// This method calculates the age based on the birthyear
// these methods also called Instance methods

person.prototype.calcage = function () {
  console.log(2024 - this.birthyear);
};

// Calling the 'calcage' method on p2 instance
p2.calcage();  // Output: 20 (for 2004 birthyear)
p1.calcage();   //output 29


/* 
  The 'calcage' method is not directly stored in each individual object (p1, p2), 
  but rather in the prototype of the 'person' constructor. All objects created
  using 'person' share this method through inheritance. So, each instance (like p2)
  can use this method, even though it doesn't directly belong to p2 itself.
*/

// Adding a property to the prototype of 'person'
person.prototype.state = "jandk";

// Both p1 and p2 will have access to the 'state' property, even though it's
// defined on the prototype, not as an own property of each instance
console.log(p1.state);  // Output: jandk
console.log(p2.state);  // Output: jandk

/*
  The 'state' property is shared among all instances of 'person'. Like 'calcage',
  it's not an own property of p1 or p2; rather, it is inherited from the prototype. 
  This is how JavaScript prototype inheritance works—methods and properties defined
  on the prototype are available to all objects created from that constructor function.
*/





