export default class CartPage {
	private get url() {
		return 'https://rahulshettyacademy.com/client/dashboard/cart';
	}

	private get cart() {
		return '[routerlink*=\'cart\']';
	}

	private get checkout() {
		return 'button[text="Checkout"]';
	}

	private get xPathDeletBtn() {
		return '//button[@class=\'btn btn-danger\']';
	}

	load(): void {
		cy.get('body').should('be.visible');
	}

	clickOnCartIcon() {
		cy.get(this.cart).should('be.visible').click();
	}

	deletProductCartPage() {
		cy.xpath(this.xPathDeletBtn).should('be.visible').click();
	}

	checkoutProduct() {
		cy.get('div[role="alert"]').should('not.exist');
		cy.get('button:contains("Checkout")').click();
	}

	verifyProductName(productName: string) {
		cy.get('h3').filter(':contains("' + productName + '")').should('be.visible');
	}
}
