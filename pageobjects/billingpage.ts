import { Page,Locator } from "@playwright/test";

export class billingpage
{
    readonly page:Page;
    readonly firstname;
    readonly lastname;
    readonly email;
    readonly phone;
    readonly address1;
    readonly address2;
    readonly city;
    readonly zipcode;
    readonly availableitem;
    readonly comment;
    readonly submit2;


    constructor(page:Page)
    {
        this.page=page;
        this.firstname=page.locator('input[name="wpforms\\[fields\\]\\[0\\]\\[first\\]"]');
        this.lastname=page.locator('input[name="wpforms\\[fields\\]\\[0\\]\\[last\\]"]');
        this.email=page.locator('input[name="wpforms\\[fields\\]\\[1\\]"]');
        this.phone=page.locator('#wpforms-24-field_2');
        this.address1= page.locator('input[name="wpforms\\[fields\\]\\[3\\]\\[address1\\]"]');
        this.address2=page.locator('input[name="wpforms\\[fields\\]\\[3\\]\\[address2\\]"]');
        this.city=page.locator('input[name="wpforms\\[fields\\]\\[3\\]\\[city\\]"]');
        this.zipcode=page.locator('#wpforms-24-field_3-postal');
        this.availableitem=page.locator('#wpforms-24-field_4_1');
        this.comment=page.locator('textarea[name="wpforms\\[fields\\]\\[6\\]"]');
        this.submit2=page.locator('text=Submit');

    }

    async goto()
    {
        await this.page.goto('https://qaauto.co.nz/billing-order-form/');  

    }

    async fillbilling(firstname,lastname,email,phone,address1,address2,city,zipcode,comment)
    {
        await this.firstname.fill(firstname);
        await this.lastname.fill(lastname);
        await this.email.fill(email);
        await this.phone.fill(phone);
        await this.address1.fill(address1);
        await this.address2.fill(address2);
        await this.city.fill(city);
        await this.zipcode.fill(zipcode);
        await this.availableitem.check();
        await this.comment.type(comment);
        await this.submit2.click();
    }

    async fillbillingE(employee)
    {
        await this.firstname.fill(employee.firstname);
        await this.lastname.fill(employee.lastname);
        await this.email.fill(employee.email);
        await this.phone.fill(employee.phone);
        await this.address1.fill(employee.address1);
        await this.address2.fill(employee.address2);
        await this.city.fill(employee.city);
        await this.zipcode.fill(employee.zipcode);
        await this.availableitem.check();
        await this.comment.type(employee.comment);
        await this.submit2.click();
    }
}