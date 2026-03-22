import {Page, expect} from "@playwright/test";

export class AddProductToCart {
    private page: Page;
    private priceProduct: number = 0;
    private totalPrice: number = 0; 
    
    constructor(page: Page) {
        this.page = page;
    }

    async addProductToCart(ProductName: string){
        await this.page.click(`text=${ProductName}`);

        const [dialog] = await Promise.all([
            this.page.waitForEvent('dialog'),
            this.page.getByRole('link', { name: 'Add to cart' }).click(),
        ]);
        expect((await dialog).message()).toBe('Product added');
        await (await dialog).accept();

        await this.GetPriceOfOneProduct();
        await this.page.click('id=cartur');

        await expect(this.page).toHaveURL('https://www.demoblaze.com/cart.html');
        
        await this.getTotalPrice();        
    }

    async GetPriceOfOneProduct(): Promise<number> {
        const priceLocator = this.page.locator('h3.price-container');
        await expect(priceLocator).toBeVisible({ timeout: 15000 });

        const text = await priceLocator.textContent();
        if (!text) throw new Error('Price not found in h3.price-container');

        const clean = text.replace(/[^\d.]/g, '');
        this.priceProduct = Number(clean);
            if (Number.isNaN(this.priceProduct)) throw new Error(`Unable to parse number from: ${text}`);

        return this.priceProduct;
    }
    
    async ComparePriceInCartWithPriceOfProduct() {
        if (this.totalPrice === this.priceProduct){
            console.log('Total price in cart items is correct.');
        }
    }

    async getTotalPrice(): Promise<number>{
        const priceLocator = this.page.locator('id=totalp'); // or '#totalp'
        await expect(priceLocator).toBeVisible({ timeout: 15000 });

        const raw = await priceLocator.textContent();
        if (!raw) throw new Error('Total price not found');

        const clean = raw.replace(/[^\d.]/g, '').trim();
        this.totalPrice = Number(clean);

        if (Number.isNaN(this.totalPrice)) {
        throw new Error(`Unable to parse total price from: "${raw}"`);
    }
    return this.totalPrice;
    }
};