// exporting module
const cart = [];
export const shopping = function (product, quantity) {
    cart.push({
        product, quantity
    })
    console.log(cart);
    console.log(`your ${quantity} ${product} has been added to cart `)
}
export { cart }


export default [
    { id: 1, name: 'Alice', age: 25 },
    { id: 2, name: 'Bob', age: 30 },
    { id: 3, name: 'Charlie', age: 35 }
];
