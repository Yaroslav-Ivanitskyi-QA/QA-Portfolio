import {Page} from '@playwright/test';

export class LoginPage
{
    readonly  page: Page;

    constructor(page: Page) {
        this.page = page;
    }
    async navigate(){
        await  this.page.goto("https://saucedemo.com");
    }

    async login(username: string, password: string)
    {
        await this.page.fill('[data-test="username"]',username)

        await this.page.fill('[data-test="password"]',password);

        await  this.page.click('[data-test="login-button"]');
    }
}