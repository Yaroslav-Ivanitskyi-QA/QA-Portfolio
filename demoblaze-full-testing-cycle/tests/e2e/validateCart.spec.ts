import {test, expect} from '@playwright/test';
import { AddProductToCart } from '../../pages/addProductToCart';


test('Add product to cart', async({page}) => {
    const addProductToCart = new AddProductToCart(page);

    await page.goto('https://www.demoblaze.com/');
    await addProductToCart.addProductToCart('Samsung galaxy s6');
    await addProductToCart.ComparePriceInCartWithPriceOfProduct();
});