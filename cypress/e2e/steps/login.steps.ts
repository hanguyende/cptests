import {Given, When, Then} from '@badeball/cypress-cucumber-preprocessor';

import LoginPage from './src/pages/LoginPage';
import {MockApi} from './MockApi';

Given('I go to the Login page', function () {
	this.browser = new LoginPage();
	this.browser.load();
});

// Login with user {string} and pwd {string}
Given('I log in with user {string} and password {string}', function (user: string, password: string) {
	// Use the page instance from the World instance to navigate
	this.browser.enterUserAndPassword(user, password);
});

// Login with token session
Given('I login with my token session', function () {
	// Use the page instance from the World instance to navigate
	this.browser = new MockApi();
	this.browser.setSession();

	this.browser = new LoginPage();
	this.browser.load();
});

// Submit Login
When('I submit login', function () {
	this.browser.submitLogin();
});

// I am {yes/false} able to Login
Then('I am {string} able to Login', function (isLogin: string) {
	this.browser.verifySuccessfullLoginIsVisible(JSON.parse(isLogin));
});
