// Creating a new Promise to simulate the pizza ordering process
const getpizza = new Promise((resolve, reject) => {
    // Log a message to acknowledge the order
    console.log("Thank you for ordering");

    // Variable to simulate whether the pizza shop is open
    let pizzaShopOpen = true; // Change this to false to simulate the shop being closed

    // Set a timeout to simulate the time taken for the order processing
    setTimeout(() => {
        // Check if the pizza shop is open
        if (pizzaShopOpen) {
            // If open, resolve the promise with a success message
            resolve("Your pizza has been placed");
        } else {
            // If closed, reject the promise with an error message
            reject("Due to unavailability of delivery boy, the pizza can't be delivered at your location");
        }
    }, 2000); // 2 seconds delay to simulate order processing time
});

// Handling the resolved promise (success case)
getpizza
    .then(res => console.log(res)) // Log the success message if the promise resolves
    .catch(err => console.error(err)); // Log the error message if the promise is rejected
