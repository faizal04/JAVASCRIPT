// exporting module

// `cart` is an array that will store items added to the shopping cart
const cart = [];

// `shopping` is a named export function that adds a product and its quantity to the `cart` array
export const shopping = function (product, quantity) {
  // Adds an object with `product` and `quantity` to the `cart` array
  cart.push({
    product,
    quantity,
  });

  // Logs the updated `cart` array to the console
  console.log(cart);

  // Logs a confirmation message indicating the item and quantity added to the cart
  console.log(`your ${quantity} ${product} has been added to cart `);
};

// Exporting the `cart` array so it can be accessed and used in other modules
export { cart };

// Exporting a default array of user objects
// Each object represents a user with properties `id`, `name`, and `age`
export default [
  { id: 1, name: "Alice", age: 25 },
  { id: 2, name: "Bob", age: 30 },
  { id: 3, name: "Charlie", age: 35 },
];

// Note:
// - The `shopping` function and `cart` array are named exports and must be imported with their exact names.
// - The array of user objects is a default export and can be imported with any name.
