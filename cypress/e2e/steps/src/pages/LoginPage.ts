import DashboardPage from "./DashboardPage";
import { loginPayLoad } from "../../MockData";

export default class LoginPage {
    private url = 'https://rahulshettyacademy.com/client';
    
    private userName = '#userEmail';
    private password = '#userPassword';
    private loginBtn = '#login';
    private xPathLoginMsg = "//div[@aria-label='Login Successfully']";
    private xpathSignOutLink = '//button[normalize-space()="Sign Out"]';
    private signOutLink = '.fa.fa-sign-out';
    load(): void {
        cy.visit(this.url);
        cy.get('body').should('be.visible');
    }


    login(username: string, password: string) {
        cy.get(this.userName).should('be.visible').type(username);
        cy.get(this.password).should('be.visible').type(password);
        cy.get(this.loginBtn).should('be.visible').click();
    }

    enterUserAndPassword(username: string, password: string) {
        cy.get(this.userName).should('be.visible').type(username);
        cy.get(this.password).should('be.visible').type(password);
    }

    submitLogin(): DashboardPage {
        cy.get(this.loginBtn).should('be.visible').click();
        return new DashboardPage();
    }

    verifySuccessfullLoginIsVisible(isVisible: boolean) {
        if (isVisible){
            cy.get(this.signOutLink, { timeout: 30000 }).should('be.visible');
        }else {
            cy.get(this.loginBtn).should('be.visible');
        }
    }
    setSession () {
        let token;
        cy.request('POST', 'https://rahulshettyacademy.com/api/ecom/auth/login', loginPayLoad)
        .then(response => {
            expect(response.body).to.have.property('token');
            token = response.body.token;
            window.localStorage.setItem('token', token)
        });
    }

    getToken(){  
        let token;
        cy.request('POST', 'https://rahulshettyacademy.com/api/ecom/auth/login', loginPayLoad)
        .then(response => {
            expect(response.body).to.have.property('token');
            token = response.body.token;
            cy.wrap(token).as('wrapToken');
            cy.log("response  " + this.wrapToken);
        });
        return this.token;    

    }
}