import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {

  // Go to https://qaauto.co.nz/billing-order-form/

  await page.goto('https://qaauto.co.nz/billing-order-form/');  

  // Click input[name="wpforms\[form_locker_password\]"]

  await page.locator('input[name="wpforms\\[form_locker_password\\]"]').click();
//   await page.pause();

  // Fill input[name="wpforms\[form_locker_password\]"]

  await page.locator('input[name="wpforms\\[form_locker_password\\]"]').fill('Testing');

  // Click text=Submit

  await page.locator('text=Submit').click();

  await expect(page).toHaveURL('https://qaauto.co.nz/billing-order-form/');

  // Click input[name="wpforms\[fields\]\[0\]\[first\]"]

  await page.locator('input[name="wpforms\\[fields\\]\\[0\\]\\[first\\]"]').click();

  // Fill input[name="wpforms\[fields\]\[0\]\[first\]"]

  await page.locator('input[name="wpforms\\[fields\\]\\[0\\]\\[first\\]"]').fill('sam');

  // Click input[name="wpforms\[fields\]\[0\]\[last\]"]

  await page.locator('input[name="wpforms\\[fields\\]\\[0\\]\\[last\\]"]').click();

  // Fill input[name="wpforms\[fields\]\[0\]\[last\]"]

  await page.locator('input[name="wpforms\\[fields\\]\\[0\\]\\[last\\]"]').fill('smith');

  // Click input[name="wpforms\[fields\]\[1\]"]

  await page.locator('input[name="wpforms\\[fields\\]\\[1\\]"]').click();

  // Fill input[name="wpforms\[fields\]\[1\]"]

  await page.locator('input[name="wpforms\\[fields\\]\\[1\\]"]').fill('sam.smith@yahoo.com');

  // Fill Phone no

  await page.locator('#wpforms-24-field_2').fill('1234567894');

  // Click input[name="wpforms\[fields\]\[3\]\[address1\]"]

  await page.locator('input[name="wpforms\\[fields\\]\\[3\\]\\[address1\\]"]').click();

  // Fill input[name="wpforms\[fields\]\[3\]\[address1\]"]

  await page.locator('input[name="wpforms\\[fields\\]\\[3\\]\\[address1\\]"]').fill('roberts road');

  // Click input[name="wpforms\[fields\]\[3\]\[address2\]"]

  await page.locator('input[name="wpforms\\[fields\\]\\[3\\]\\[address2\\]"]').click();

  // Fill input[name="wpforms\[fields\]\[3\]\[address2\]"]

  await page.locator('input[name="wpforms\\[fields\\]\\[3\\]\\[address2\\]"]').fill('glenfield');

  // Click input[name="wpforms\[fields\]\[3\]\[city\]"]

  await page.locator('input[name="wpforms\\[fields\\]\\[3\\]\\[city\\]"]').click();

  // Fill input[name="wpforms\[fields\]\[3\]\[city\]"]

  await page.locator('input[name="wpforms\\[fields\\]\\[3\\]\\[city\\]"]').fill('west');

  // Fill zip code

  await page.locator('#wpforms-24-field_3-postal').fill('12548');

  // Check #wpforms-24-field_4_1

  await page.locator('#wpforms-24-field_4_1').check();

  // Click textarea[name="wpforms\[fields\]\[6\]"]

  await page.locator('textarea[name="wpforms\\[fields\\]\\[6\\]"]').click();

  // Fill textarea[name="wpforms\[fields\]\[6\]"]

  await page.locator('textarea[name="wpforms\\[fields\\]\\[6\\]"]').fill('test 555');

  // Click text=Submit

  await page.locator('text=Submit').click();

  // Click text=Thanks for contacting us! We will be in touch with you shortly.

  await page.locator('text=Thanks for contacting us! We will be in touch with you shortly.').click();

});

 

test("qaauto validations",async({page})=>

{

await page.goto("https://qaauto.co.nz/billing-order-form/");

const passwordlocator = page.locator("#wpforms-locked-24-field_form_locker_password");

const password = 'Testing';

const submit = page.locator("#wpforms-submit-locked-24")

await passwordlocator.fill(password);

await submit.click();

});