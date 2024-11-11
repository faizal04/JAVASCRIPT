// Import all exports from 'shoppingCart.js' as an object called `shop`
import * as shop from "./shoppingCart.js";

// Import a specific named export `cart` from 'shoppingCart.js'
import { cart } from "./shoppingCart.js";

// Log a message indicating the script is running
console.log("importing script");

// Call a function from the `shop` object to add items to the cart
shop.shopping("bread", 10); // Adds 10 units of "bread" to the cart
shop.shopping("egg", 20); // Adds 20 units of "egg" to the cart

// Log the `cart` array to show its current contents
console.log(cart);

// Map over the `cart` array to extract just the `product` names
const data = cart.map((dt) => dt.product);

// Log the resulting `data` array which contains only product names
console.log(data);

// In a separate file named 'main.js':
// Import the default export from 'shoppingCart.js' and assign it to `users`
import users from "./shoppingCart.js";

// Iterate over each user in the `users` array and log their name and age
users.forEach((user) => {
  console.log(`User: ${user.name}, Age: ${user.age}`);
});

// Exporting and importing data between files in JavaScript using modules has several important benefits that make code easier to maintain, reuse, and organize
