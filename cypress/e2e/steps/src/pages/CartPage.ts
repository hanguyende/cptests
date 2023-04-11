export class CartPage {
   
    private url = "https://rahulshettyacademy.com/client/dashboard/cart";
    private cart = "[routerlink*='cart']";
    private checkout = "text=Checkout";
    private xPathDeletBtn = "//button[@class='btn btn-danger']";

    load(): void {
        cy.visit(this.url);
        cy.get('body').should('be.visible');
    }
    clickOnCartIcon() {
        cy.get(this.cart).should('be.visible').click();
    }

    deletProductCartPage() {
        cy.xpath(this.xPathDeletBtn).should('be.visible').click();
    }

    checkoutProduct() {
        cy.get(this.checkout).should('be.visible').click();
    }

    verifyProductName(productName: string) {
        cy.get('//').filter('//h3[text()=' + productName + "']").eq(1);
    }
}