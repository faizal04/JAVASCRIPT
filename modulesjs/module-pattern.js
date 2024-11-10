// Define the `counter` module using an Immediately Invoked Function Expression (IIFE)
const counter = (function () {
    // Private variable `count`, only accessible within this function's scope
    let count = 0;

    // Private function to increment the count by 1
    const upcount = function () {
        count++;
    };

    // Private function to decrement the count by 1
    const deccount = function () {
        count--;
    };

    // Return an object with public methods to access and modify `count`
    return {
        // Expose the `upcount` function as a public method
        upcount,

        // Expose the `deccount` function as a public method
        deccount,

        // Public method to get the current value of `count`
        getcount() {
            return count;
        }
    };
})(); // Immediately invoked to create and initialize `counter`

// Using the public methods of `counter` to modify `count`
counter.upcount();
counter.upcount();
counter.upcount();
counter.deccount();

// Attempt to access `count` directly (this will log `undefined` because `count` is private)
console.log(counter.count); // Output: undefined

// Retrieve the current count value using the public `getcount` method
const count = counter.getcount();
console.log(count); // Output: 2


//This way, the counter module maintains a clear and controlled way to interact with its data, enhancing both security and maintainability.