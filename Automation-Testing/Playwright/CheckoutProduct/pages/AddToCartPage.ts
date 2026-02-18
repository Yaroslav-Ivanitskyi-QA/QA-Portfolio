import { Page, expect } from '@playwright/test';

export class AddToCartPage{
    readonly page: Page;

    constructor(page:Page){
        this.page = page;
        }

    async addToCart(){
         await this.page.click('[data-test="add-to-cart-sauce-labs-bike-light"]');
         await expect(this.page.locator('.shopping_cart_badge')).toHaveText('1');
        }
    }