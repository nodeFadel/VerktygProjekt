const { expect } = require('@jest/globals');
const Product = require('../frontend/Product.js');
const ShoppingCart = require('../frontend/ShoppingCart.js');

// Mock the listen method (because it used in when creating a new Product)
// but in our test we do not need to add DOM events
global.listen = () => { };

// Mock document.querySelector because it is called when creating a shopping cart
// we don't need in our tests - (its only rendering the shopping cart to DOM)
global.document = { querySelector: () => ({}) };

let myProduct = new Product(2, 'Kola', 'en liten burke', 'asdxas',);
let myShoppingCart = new ShoppingCart();
myShoppingCart.add(2, myProduct);

describe('Test shoppingCart class', () => {

    test('check if the product already is in the cart', () => {
        expect(myShoppingCart.orderRows[0].quantity).toBe(2);
        expect(myShoppingCart.orderRows[0].product.name).toBe('Kola');
        
    });    
});
