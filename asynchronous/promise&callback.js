
//chaining asynchronous operations

// Function that returns a promise which resolves after a specified number of seconds
const wait = (ms) => {
    return new Promise((resolve) => {
        // Set a timeout for the specified milliseconds (converted to seconds)
        setTimeout(resolve, ms * 1000);
    });
};

// Start the first wait for 2 seconds
wait(2).then(() => {
    // This code runs after the first 2 seconds
    console.log("waited 2 seconds");

    // Start the next wait for 5 seconds, chaining it
    return wait(5).then(() => {
        // This code runs after the 5 seconds
        console.log("waited 5 seconds");

        // Start the final wait for 10 seconds, chaining it
        return wait(10).then(() => {
            // This code runs after the final 10 seconds
            console.log("waited eternity");
        });
    });
});


// without using promises

// Start the first wait using setTimeout for 2 seconds
setTimeout(() => {
    // This code runs after 2 seconds
    console.log("waited 2 seconds");

    // Start the next wait using setTimeout for 5 seconds
    setTimeout(() => {
        // This code runs after 5 seconds
        console.log("waited 5 seconds");

        // Start the final wait using setTimeout for 10 seconds
        setTimeout(() => {
            // This code runs after the final 10 seconds
            console.log("waited eternity");
        }, 10000); // 10 seconds delay
    }, 5000); // 5 seconds delay
}, 2000); // 2 seconds delay


// this is how we avoided callback hell using promises 