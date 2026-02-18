import {test, expect} from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { AddToCartPage } from '../pages/AddToCartPage';
import { CheckoutPage } from '../pages/CheckoutPage';

test.beforeEach(async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.navigate();
  await loginPage.login('standard_user', 'secret_sauce');
});

test ('Add product to Cart', async ({page}) =>{
    const addToCartPage = new AddToCartPage(page);

    await addToCartPage.addToCart();
    });

test ('Checkout process', async ({page}) =>{
    const addToCartPage = new AddToCartPage(page);
    const checkoutPage = new CheckoutPage(page);

    await addToCartPage.addToCart();

    await checkoutPage.checkout('Yaroslav','Ivanitskyi','28-320');
    await checkoutPage.verifyOrderSuccess();
    });