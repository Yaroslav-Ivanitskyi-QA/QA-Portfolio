import {Page, expect} from '@playwright/test';

export class LoginPage {
    private page: Page;
    
    constructor(page: Page) {
        this.page = page;
    }
}