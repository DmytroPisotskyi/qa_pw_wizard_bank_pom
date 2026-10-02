import { test } from '@playwright/test';
import { faker } from '@faker-js/faker';
import { AddCustomerPage } from '../../../src/pages/manager/AddCustomerPage';
import { OpenAccountPage } from '../../../src/pages/manager/OpenAccountPage';

let firstName;
let lastName;
let postCode;

test.beforeEach(async ({ page }) => {
  /* 
  Pre-conditons:
  1. Open Add Customer page
  2. Fill the First Name.  
  3. Fill the Last Name.
  4. Fill the Postal Code.
  5. Click [Add Customer].
  */
  firstName = faker.person.firstName();
  lastName = faker.person.lastName();
  postCode = faker.location.zipCode();

  const addCustomerPage = new AddCustomerPage(page);
  
  await addCustomerPage.open();
  await addCustomerPage.fillField(addCustomerPage.firstName, firstName);
  await addCustomerPage.fillField(addCustomerPage.lastName, lastName);
  await addCustomerPage.fillField(addCustomerPage.postCode, postCode);
  await addCustomerPage.clickButton(addCustomerPage.formButton);
  await addCustomerPage.reloadPage();
});

test('Assert manager can search customer by Last Name', async ({ page }) => {
  /* 
  Test:
  1. Open Customers page
  2. Fill the lastName to the search field
  3. Assert customer row is present in the table. 
  4. Assert no other rows is present in the table.
  */

    const addCustomerPage = new AddCustomerPage(page);
    const openAccountPage = new OpenAccountPage(page);
  
    await addCustomerPage.clickButton(addCustomerPage.customersButton);
    await openAccountPage.fillCusstomerSearchField(lastName);
  
    await openAccountPage.assertSearchCusstomerByData(lastName, openAccountPage.customarLastName);
    await openAccountPage.assertSearchCusstomerAllFields();
});
