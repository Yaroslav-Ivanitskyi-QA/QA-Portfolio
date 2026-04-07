import {test, expect} from '@playwright/test';
import { AddProductToCart } from '../../pages/addProductToCart';


test('Add product to cart', async({page}) => {
    const addProductToCart = new AddProductToCart(page);

    await page.goto('https://www.demoblaze.com/');
    await addProductToCart.addProductToCart('Samsung galaxy s6');
    const isPriceCorrect = await addProductToCart.comparePriceInCartWithPriceOfProduct();
    expect(isPriceCorrect).toBe(true);
});

test('Add multiple products to cart', async({page}) => {
    const addProductToCart = new AddProductToCart(page);

    await page.goto('https://www.demoblaze.com/');
    await addProductToCart.addMultipleProductsToCart(['Samsung galaxy s6', 'Nokia lumia 1520', 'Sony Xperia Z5']);

    const isPriceCorrect = await addProductToCart.comparePriceInCartWithPriceOfProduct();
    expect(isPriceCorrect).toBe(true);
});

test('Delete Product from Cart', async({page}) => {
    const addProductToCart = new AddProductToCart(page);

    await page.goto('https://www.demoblaze.com/');
    await addProductToCart.addProductToCart('Samsung galaxy s6');
    await addProductToCart.deleteProductFromCart('Samsung galaxy s6');
});