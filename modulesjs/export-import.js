import * as shop from './shoppingCart.js'
import { cart } from './shoppingCart.js'


console.log("importing script");
shop.shopping("bread", 10);
shop.shopping("egg", 20);
console.log(cart);
const data = cart.map(dt => dt.product);
console.log(data)


// main.js
import users from './shoppingCart.js';

users.forEach(user => {
    console.log(`User: ${user.name}, Age: ${user.age}`);
});
// dataModule.js

