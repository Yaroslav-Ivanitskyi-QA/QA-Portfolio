import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/loginPage';
import { validUser } from '../../test-data/users';
import { invalidUsername } from '../../test-data/users';
import { invalidPassword } from '../../test-data/users';

test('Login with valid credentials', async({page})=>{
    const loginPage = new LoginPage(page);
    const { username, password } = validUser;

    await loginPage.navigateToStartPage();
    await loginPage.loginToAccount(username, password);

    //Verify successful login, 
    await expect(page.getByText(`Welcome ${username}`)).toBeVisible();
});

test('Login with invalid username', async({page})=>{
    const loginPage = new LoginPage(page);
    const {username, password} = invalidUsername;

    await loginPage.navigateToStartPage();
    

    page.once('dialog', async dialog => {
        expect(dialog.message()).toBe('User does not exist.');
        await dialog.accept();
    });
    await loginPage.loginToAccount(username, password);
});

test('Login with invalid password', async({page})=>{
    const loginPage = new LoginPage(page);
    const {username, password} = invalidPassword;

    await loginPage.navigateToStartPage();
    
    page.once('dialog', async dialog => {
        expect(dialog.message()).toBe('Wrong password.');
        await dialog.accept();
    });
    await loginPage.loginToAccount(username, password);
});
test('Login with empty credentials', async({page})=>{
    const loginPage = new LoginPage(page);
    
    await loginPage.navigateToStartPage();
    
    page.once('dialog', async dialog =>{
        expect(dialog.message()).toBe('Please fill out Username and Password.');
        await dialog.accept();
    });
    await loginPage.loginToAccount('', '');
});