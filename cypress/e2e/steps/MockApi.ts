import {loginPayLoad, type CartPayload, type OrderPayload} from './MockData';

export class MockApi {
	setSession() {
		const payLoad = loginPayLoad;
		cy.log('-------' + payLoad.userEmail + '---------' + payLoad.userPassword + '---------');
		cy.request(
			{
				method: 'POST',
				url: 'https://rahulshettyacademy.com/api/ecom/auth/login',
				headers: {
					accept: 'application/json',
					'Content-Type': 'application/json',
				},
				body: payLoad,
			}).then(response => {
			expect(response.body).to.have.property('token');
			window.localStorage.setItem('token', response.body.token);
		});
	}

	mockOrderList(fakePayload: OrderPayload) {
		cy.intercept('GET', 'https://rahulshettyacademy.com/api/ecom/order/get-orders-for-customer/**', {
			statusCode: 201,
			body: JSON.stringify(fakePayload),
		});
	}

	mockCartList(fakePayload: CartPayload) {
		cy.intercept('GET', 'https://rahulshettyacademy.com/api/ecom/user/get-cart-products/**', {
			statusCode: 201,
			body: {
				body: JSON.stringify(fakePayload),
			},
		});
	}
}
