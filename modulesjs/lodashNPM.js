// Importing cloneDeep from lodash-es
import cloneDeep from './node_modules/lodash-es/cloneDeep.js';

// to run this file you have to download lodash-es 
//npm i lodash-es
// you can also use command npm i which will atomatically download lodash-es

// Defining a nested object
const nestedObject = {
    bookscart: [
        {
            namee: "alchemist",
            price: 200,
        },
        {
            namee: "atomic habit",
            price: 300,
        }
    ]
};

// Creating a shallow clone using Object.assign
const nestedObjectClone = Object.assign({}, nestedObject);

// Creating a deep clone using Lodash's cloneDeep
const deepclone = cloneDeep(nestedObject);

// Modifying the first book's name in the original nestedObject
nestedObject.bookscart[0].namee = "richdad";

// Logging the deep clone and shallow clone
console.log(deepclone);          // deepclone remains unaffected by the change
console.log(nestedObjectClone); // nestedObjectClone is affected by the change


// The Object.assign() method creates a shallow copy of nestedObject.This means it only copies the top - level properties of the object.When you modify nestedObject.bookscart[0].namee, it also changes the nestedObjectClone.bookscart[0].namee, because they are both referencing the same array.

// The cloneDeep() method creates a completely independent copy of nestedObject, including all nested objects and arrays. This is a deep clone, so changes to nestedObject will not affect deepclone

if (module.hot) {
    module.hot.accept();

}