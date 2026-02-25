import {Page} from '@playwright/test';

export class LoginPage {
    private page: Page;
    
    constructor(page: Page) {
        this.page = page;
    }
    async navigateToStartPage() {
        await this.page.goto('https://www.demoblaze.com/');
    }

    async loginToAccount(username: string, password: string) {
        await this.page.click('id=login2');
        await this.page.fill('id=loginusername', username);
        await this.page.fill('id=loginpassword', password);
        await this.page.getByRole('button', { name: 'Log in' }).click();
    }
}