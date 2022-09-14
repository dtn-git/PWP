import { Page,Locator } from "@playwright/test";

export class loginpage
{
    readonly page:Page;
    readonly password;
    readonly submit;

    constructor(page:Page)
    {
        this.page=page;
        this.password=page.locator('input[name="wpforms\\[form_locker_password\\]"]');
        this.submit=page.locator('text=Submit');
    }

    async goto()
    {
        await this.page.goto('https://qaauto.co.nz/billing-order-form/');  

    }

    async validLogin(password)
    {
        await this.password.fill(password);
        await this.submit.click();
    }
}
//module.exports={loginpage};