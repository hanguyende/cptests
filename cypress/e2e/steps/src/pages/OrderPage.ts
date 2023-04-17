import DashboardPage from "./DashboardPage";
import { loginPayLoad, loginPayLoad2 } from "../../MockData";

export default class OrderPage {

    private country = "[placeholder*='Country']";
    private dropdown = '.ta-results';
    private emailId = ".user__name [type='text']";
    private submit = '.action__submit';
    private orderId = '.em-spacer-1 .ng-star-inserted';
    private itemTitle;
    private rows = 'tbody tr';
    private orderdIdDetails = '.col-text';
    private ordersTable = 'tbody';

    load(): void {
        cy.get('body').should('be.visible');
    }

    searchOrderAndSelect(orderId: string) {

        /*await this.ordersTable.waitFor();
        for (let i = 0; i < await this.rows.count(); ++i) {
            const rowOrderId = await this.rows.nth(i).locator("th").textContent();
            if ((rowOrderId != null) && orderId.includes(rowOrderId)) {
                await this.rows.nth(i).locator("button").first().click();
                break;
            }
        }*/
        

    }

    enterCountry(countryName: string) {
        cy.get('input[placeholder="Select Country"]').type(countryName);
        cy.get('span').filter(':contains("' + countryName + '")').click()
    }

    VerifyEmailId(username: string) {
        cy.get(this.emailId).should('be.visible');
    }

    submitOrder() {
        cy.get(this.submit).click();
        cy.get('h1').filter(':contains("Thankyou for the order.")').should('be.visible');
    }

    getOrderId() {
        return cy.get(this.orderdIdDetails);
    }

    VerifyOrderByProductName(productName: string) {
        return cy.get(this.itemTitle).should('have.value',  productName);
    }

    VerifyOrderIdIsDisplaying(orderId: string | null) {
        if (orderId == null)
            expect(false, "orderId is null");
        else
        cy.get(this.orderId).should('have.value',  orderId);
    }
    verifyOrdersCount(orderCount: number) {
        cy.get(this.rows).should('have.length', orderCount)
    }
}
