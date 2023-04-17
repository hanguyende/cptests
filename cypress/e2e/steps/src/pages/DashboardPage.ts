export default class DashboardPage {
    private url = 'https://rahulshettyacademy.com/client/dashboard/dash';
    private products = '.card-body';
    private productsText = '.card-body b';
    private cart = '[routerlink*="cart"]';
    private orders = 'button[routerlink*="myorders"]';

    load(): void {
        cy.get(this.products).should('have.length.greaterThan', 3);
    }

    addProduct(productName: string) {

        cy.get('h5')
            .filter(':contains("' + productName + '")')
            .parent('div')
            .within(() => {
                cy.get('.fa-shopping-cart').parent('button').click();
             })
    }
    
    navigateToOrders() {
        cy.get(this.orders).click();
    }

    navigateToCart() {
        cy.get(this.cart).click();
    }
}