import { When, Then } from '@badeball/cypress-cucumber-preprocessor'
import CartPage from './src/pages/CartPage';
import { MockApi } from './MockApi';
import { cartPayload } from './MockData';

// remove product from cart
When("I remove product from cart", function () {
  this.browser = new CartPage();
  this.browser.deletProductCartPage();
});

// When go to checkout with the product
When("After choosing my product, I can go to the checkout", function () {
  this.browser = new CartPage();
  this.browser.checkoutProduct();
});

When("I wanna mock response of cart list", function () {
  this.browser = new MockApi
  this.browser.mockCartList(this, cartPayload);
});

// I see this 'zara coat 3' product in the cart 
Then("I see this product {string} in the cart", function (productname: string) {
  this.browser = new CartPage();
  this.browser.verifyProductName(productname);
});