import { When, Then } from '@badeball/cypress-cucumber-preprocessor'
import { orderPayload, emptyOrderPayLoad } from './MockData';
import OrderPage from './src/pages/OrderPage'
import { MockApi } from './MockApi';

//productname 'string' in order
Then("I see product name {string} in the order", function (productname: string) {
  this.browser = new OrderPage();
  this.load();
  this.orderPage.VerifyOrderByProductName(productname);
});

// I select shipping information countryCode 'ind' and countryName 'India'
Then("I select shipping information countryName {string}", function (countryName: string) {
  this.browser = new OrderPage();
  this.browser.enterCountry(countryName);
});

//complete order
When ("I complete the purchase", function () {
  this.browser = new OrderPage();
  this.browser.submitOrder();
});

// I mock product list response of api call {0 or 1}
When("I wanna mock response of api call with {string}", function (productCount: number) {
  this.browser = new MockApi();
  if (productCount == 0){
    this.browser.mockOrderList(emptyOrderPayLoad);    
  } else {
    this.browser.mockOrderList(orderPayload);
  }   
});

//orderlist has orders {number}
Then("I verify my orderlist has {string} orders", function (ordersCount: number) {
  this.browser = new OrderPage();
  this.browser.verifyOrdersCount(ordersCount);
});