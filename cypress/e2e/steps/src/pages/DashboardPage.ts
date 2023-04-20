export default class DashboardPage {
	private get url() {
		return 'https://rahulshettyacademy.com/client/dashboard/dash';
	}

	private get products() {
		return '.card-body';
	}

	private get productsText() {
		return '.card-body b';
	}

	private get cart() {
		return '[routerlink*="cart"]';
	}

	private get orders() {
		return 'button[routerlink*="myorders"]';
	}

	load(): void {
		cy.get(this.products).should('have.length.greaterThan', 3);
	}

	addProduct(productName: string) {
		cy.get('h5')
			.filter(':contains("' + productName + '")')
			.parent('div')
			.within(() => {
				cy.get('.fa-shopping-cart').parent('button').click();
			});
	}

	navigateToOrders() {
		cy.get(this.orders).click();
	}

	navigateToCart() {
		cy.get(this.cart).click();
	}
}
