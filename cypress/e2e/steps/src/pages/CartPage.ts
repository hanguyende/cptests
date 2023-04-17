export default class CartPage {
   
    private url = "https://rahulshettyacademy.com/client/dashboard/cart";
    private cart = "[routerlink*='cart']";
    private checkout = 'button[text="Checkout"]';
    private xPathDeletBtn = "//button[@class='btn btn-danger']";

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