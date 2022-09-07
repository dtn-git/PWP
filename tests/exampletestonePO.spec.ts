import { test, expect } from '@playwright/test';
import { loginpage } from '../pageobjects/loginpage.spec';



test('test', async ({ page }) => {

// create new PO

const loginpage = new loginpage (page);

//pass the password
const password = "Testing";

// Go to https://qaauto.co.nz/billing-order-form/

await loginpage.goto();
await loginpage.validLogin(password);

  
});

 

