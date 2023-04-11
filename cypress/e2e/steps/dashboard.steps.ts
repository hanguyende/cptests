import { When } from '@badeball/cypress-cucumber-preprocessor'
import DashboardPage from './src/pages/DashboardPage'

// I add product to cart 'zara coat 3'
When("I add product {string} to the cart", function (productName: string){
  this.browser = new DashboardPage();
  this.browser.load();
  this.dashboardPage.addProduct(productName);
});


// I navigate to the cart
When("I navigate to the cart", function () {
  this.browser = new DashboardPage();
  this.dashboardPage.navigateToCart();
});

// I navigate to the cart
When("I navigate to the Orders", function () {
  this.browser = new DashboardPage();
  this.dashboardPage.navigateToOrders();
});