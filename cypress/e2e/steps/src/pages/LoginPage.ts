import DashboardPage from './DashboardPage';

export default class LoginPage {
	private get url() {
		return 'https://rahulshettyacademy.com/client';
	}

	private get userName() {
		return '#userEmail';
	}

	private get password() {
		return '#userPassword';
	}

	private get loginBtn() {
		return '#login';
	}

	private get xPathLoginMsg() {
		return '//div[@aria-label=\'Login Successfully\']';
	}

	private get xpathSignOutLink() {
		return '//button[normalize-space()="Sign Out"]';
	}

	private get signOutLink() {
		return '.fa.fa-sign-out';
	}

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
		if (isVisible) {
			cy.get(this.signOutLink, {timeout: 30000}).should('be.visible');
		} else {
			cy.get(this.loginBtn).should('be.visible');
		}
	}
}
