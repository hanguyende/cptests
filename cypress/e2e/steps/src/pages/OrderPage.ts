export default class OrderPage {
	private get country() {
		return '[placeholder*=\'Country\']';
	}

	private get dropdown() {
		return '.ta-results';
	}

	private get emailId() {
		return '.user__name [type=\'text\']';
	}

	private get submit() {
		return '.action__submit';
	}

	private get orderId() {
		return '.em-spacer-1 .ng-star-inserted';
	}

	private readonly itemTitle;
	private get rows() {
		return 'tbody tr';
	}

	private get orderdIdDetails() {
		return '.col-text';
	}

	private get ordersTable() {
		return 'tbody';
	}

	load(): void {
		cy.get('body').should('be.visible');
	}

	enterCountry(countryName: string) {
		cy.get('input[placeholder="Select Country"]').type(countryName);
		cy.get('span').filter(':contains("' + countryName + '")').click();
	}

	submitOrder() {
		cy.get(this.submit).click();
		cy.get('h1').filter(':contains("Thankyou for the order.")').should('be.visible');
	}

	getOrderId() {
		return cy.get(this.orderdIdDetails);
	}

	VerifyOrderByProductName(productName: string) {
		return cy.get(this.itemTitle).should('have.value', productName);
	}

	VerifyOrderIdIsDisplaying(orderId: string | undefined) {
		if (orderId == null) {
			expect(false, 'orderId is null');
		} else {
			cy.get(this.orderId).should('have.value', orderId);
		}
	}

	verifyOrdersCount(orderCount: number) {
		cy.get(this.rows).should('have.length', orderCount);
	}
}
