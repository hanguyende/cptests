import { CartPayload, OrderPayload } from "./MockData";

export class MockApi
{ 
    createOrder(orderPayLoad: LoginPayload)
    {
        const token =  this.getToken();
        let orderRespone;
        cy
            .request('POST', 'https://rahulshettyacademy.com/api/ecom/auth/login', { 
                data:orderPayLoad,
                headers:
                {
                    'Authorization' : token,
                    'Content-Type' :'application/json'
                }
            })
            .then( ({ body }) => {
                orderRespone = body
            })
        const orderJsonResponse = orderRespone.json();
        console.log(orderJsonResponse);
        const orderId = orderJsonResponse.orders[0];
        return orderId;
    }

    getOrderResponse(orderPayLoad: LoginPayload)
    {
        const token = this.getToken();
        let orderRespone; 
        cy
            .request('POST', 'https://rahulshettyacademy.com/api/ecom/order/create-order', { 
                data:orderPayLoad,
                headers:
                {
                    'Authorization' : token,
                    'Content-Type' :'application/json'
                }
            })
            .then( ({ body }) => {
                orderRespone = body
            })

        const orderJsonResponse = orderRespone.json();
        console.log(orderJsonResponse);

        return orderJsonResponse;
    }

    mockOrderList(fakePayload: OrderPayload) {
        cy.intercept('GET', 'https://rahulshettyacademy.com/api/ecom/order/get-orders-for-customer/**', {
            statusCode: 201,
            body: {
                body: JSON.stringify(fakePayload)
            },
        })
    }

    mockCartList(fakePayload: CartPayload) {
        cy.intercept('GET', 'https://rahulshettyacademy.com/api/ecom/user/get-cart-products/**', {
            statusCode: 201,
            body: {
                body: JSON.stringify(fakePayload)
            },
        })
    } 
}