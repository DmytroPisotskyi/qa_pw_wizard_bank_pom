import { test } from '@playwright/test';
import { faker } from '@faker-js/faker';
import { CustomersListPage } from '../../../src/pages/manager/CustomersListPage';
import { AddCustomerPage } from '../../../src/pages/manager/AddCustomerPage';

let firstName;

test.beforeEach(async ({ page }) => {
  /* 
  Pre-conditons:
  1. Open Add Customer page.
  2. Fill the First Name.  
  3. Fill the Last Name.
  4. Fill the Postal Code.
  5. Click [Add Customer].
  */
  const addCustomerPage = new AddCustomerPage(page);
 
  
  firstName = faker.person.firstName(); 
  const lastName = faker.person.lastName();
  const postCode = faker.location.zipCode();

  await addCustomerPage.open();
  await addCustomerPage.fillField(addCustomerPage.firstName, firstName);
  await addCustomerPage.fillField(addCustomerPage.lastName, lastName);
  await addCustomerPage.fillField(addCustomerPage.postCode, postCode);
  await addCustomerPage.clickButton(addCustomerPage.formButton);
  await addCustomerPage.reloadPage();
  await addCustomerPage.clickButton(addCustomerPage.formButton);
});

test('Assert manager can delete customer', async ({ page }) => {
  /* 
  Test:
  1. Open Customers page.
  2. Click [Delete] for the row with customer name.
  3. Assert customer row is not present in the table. 
  4. Reload the page.
  5. Assert customer row is not present in the table. 
  */

  const customersListPage = new CustomersListPage(page);

  await customersListPage.open();
  await customersListPage.deleteCustomar();
  await customersListPage.assertCustomerRowIsNotPresent(firstName);
  await customersListPage.reloadPage();
  await customersListPage.assertCustomerRowIsNotPresent(firstName);


});
