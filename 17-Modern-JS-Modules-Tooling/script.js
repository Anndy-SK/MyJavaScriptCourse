// IMPORTING MODULE

/*
// import './shoppingCart.js';
// import { addToCart } from './shoppingCart.js';
// import { addToCart, totalPrice, totalQuantity } from './shoppingCart.js';
import { addToCart, totalPrice as price, tq } from './shoppingCart.js';

console.log('Importing module');
// console.log(shippingCost);

addToCart('bread', 5);
// console.log(totalPrice, totalQuantity)
console.log(price, tq);
*/

/*
import * as ShoppingCart from './shoppingCart.js';

console.log('Importing module');
ShoppingCart.addToCart('bread', 5);
console.log(ShoppingCart.totalPrice);
*/
/*
// Import default
// import add from './shoppingCart.js';
// import add, { addToCart, totalPrice as price, tq } from './shoppingCart.js'; // takto sa to nerobi (nemiesa sa pomenovany a predvoleny export)
import add, { cart } from './shoppingCart.js';
console.log('Importing module');

add('pizza', 2);
// console.log(price);
add('bread', 5);
add('apples', 4);

console.log(cart);
*/
/////////////////////////////////////////
/*
console.log('Start fetching');
// async function x() {
//   // nieje potrebne async v module pri await
// }
const res = await fetch('https://jsonplaceholder.typicode.com/posts');
const data = await res.json();
console.log(data);
console.log('Something');
*/
/*
const getLastPost = async function () {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await res.json();
  //   console.log(data);

  return { title: data.at(-1).title, text: data.at(-1).body };
};

const lastPost = getLastPost();
console.log(lastPost);

// Not very clean
// lastPost.then(last => console.log(last));

const lastPost2 = await getLastPost();
console.log(lastPost2);
*/
///////////////////////////////////////////
/*
const ShoppingCart2 = (function () {
  const cart = [];
  const shippingCost = 10;
  const totalPrice = 237;
  const totalQuantity = 23;

  const addToCart = function (product, quantity) {
    cart.push({ product, quantity });
    console.log(
      `${quantity} ${product} added to cart (shipping cost is ${shippingCost})`
    );
  };

  const orderStock = function (product, quantity) {
    cart.push({ product, quantity });
    console.log(`${quantity} ${product} ordered from supplier`);
  };

  return {
    addToCart,
    cart,
    totalPrice,
    totalQuantity,
  };
})();

ShoppingCart2.addToCart('apple', 4);
ShoppingCart2.addToCart('pizza', 2);
console.log(ShoppingCart2);
console.log(ShoppingCart2.shippingCost);
*/
///////////////////////////////////////////
/*
// PRE NODE.JS (CommonJS)
// Export
export.addToCart = function (product, quantity) {
    cart.push({ product, quantity });
    console.log(
      `${quantity} ${product} added to cart (shipping cost is ${shippingCost})`
    );
  };

// Import
const  {addToCart} = require('./shoppingCart.js')
*/
