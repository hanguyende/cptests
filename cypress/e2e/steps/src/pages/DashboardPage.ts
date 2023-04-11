export default class DashboardPage {
    private url = 'https://rahulshettyacademy.com/client/dashboard/dash';
    private products = '.card-body';
    private productsText = '.card-body b';
    private cart = '[routerlink*="cart"]';
    private orders = 'button[routerlink*="myorders"]';

    load(): void {
        cy.visit(this.url);
        cy.get('body').should('be.visible');
    }

    addProduct(productName: string) {
        cy.get( this.productsText).filter(':contains("' + productName + '")');
        cy.xpath("//div[@aria-label='Product Added To Cart']").should('be.visible');
    }

    navigateToOrders() {
        cy.get(this.orders).click();
    }

    navigateToCart() {
        cy.get(this.cart).click();
    }
}