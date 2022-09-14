import { test, expect, chromium } from '@playwright/test';
import { billingpage } from '../pageobjects/billingpage';
import { loginpage } from '../pageobjects/loginpage';



test('testPO', async ({ page }) => {

// create new PO

//const login = new loginpage (page);
const login = new loginpage (page);
const billing= new billingpage(page);

//pass the password
const password = "Testing";
const firstname= "sam";
const lastname="smith";
const email="sam.smith@yahoo.com";
const phone="1234567894";
const address1="roberts road";
const address2="glenfield";
const city="west";
const zipcode="12548";
const comment="test 555"


// Go to https://qaauto.co.nz/billing-order-form/

await login.goto();
await login.validLogin("");
//await billing.goto();
// employee
// /await billing.fillbilling(employee);
await billing.fillbilling(firstname,lastname,email,phone,address1,address2,city,zipcode,comment);//Todo: Object 
const path = "logs";  //Todo: move this to global 
await page.screenshot({path:path + "\\" + Date.now() + ('screenshot.png')});
//const context = await browser.newContext({ recordVideo: { dir: 'videos/' } }); 

});

test('testvideo', async ({ page }) => {
    const driver = await chromium.launch();
    const page1 = await driver.newPage();
    await page1.goto("http:\\www.google.com");
    const context = await driver.newContext({ recordVideo: { dir: 'd:\\temp\\'} });
    await context.close();
    await driver.close();
})

