import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/loginPage';
import { validUser } from '../../test-data/users';
import { invalidUser } from '../../test-data/users';

test('Login with valid credentials', async({page})=>{
    const loginPage = new LoginPage(page);
    const { username, password } = validUser;

    await loginPage.navigateToStartPage();
    await loginPage.loginToAccount(username, password);

    //Verify successful login, 
    await expect(page.getByText(`Welcome ${username}`)).toBeVisible();
});

test('Login with invalid credentials', async({page})=>{
    const loginPage = new LoginPage(page);
    const {username, password} = invalidUser;

    await loginPage.navigateToStartPage();
    await loginPage.loginToAccount(username, password);

    page.once('dialog', async dialog => {
        expect(dialog.message()).toBe('User does not exist.');
        await dialog.accept();
    });
});