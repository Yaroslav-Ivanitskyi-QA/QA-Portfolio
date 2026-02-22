import { Page, expect } from '@playwright/test';

export class CheckoutPage {
    readonly page: Page;

    constructor (page: Page){
        this.page = page;
        }
    async checkout(firstName:string, lastName: string, postalCode: string){
        await this.page.click('[data-test="shopping-cart-link"]');

        await this.page.click('[data-test="checkout"]');

        await this.page.fill('[data-test="firstName"]', firstName);
        await this.page.fill('[data-test="lastName"]', lastName);
        await this.page.fill('[data-test="postalCode"]', postalCode);

        await this.page.click('[data-test="continue"]');

        await expect(this.page).toHaveURL('https://www.saucedemo.com/checkout-step-two.html');

        await this.page.click('[data-test="finish"]');


        await expect(this.page).toHaveURL('https://www.saucedemo.com/checkout-complete.html');
        }
    async verifyOrderSuccess(){
        await expect(this.page.locator('[data-test="complete-header"]'))
        .toHaveText(/THANK YOU/i);
        }
    }