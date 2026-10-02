import { expect } from '@playwright/test';

export class BankHomePage {
  constructor(page) {
    this.page = page;
    this.managerLoginButton = page.getByRole('button', { name: 'Bank Manager Login' });
    this.addCustomarButton = page.getByRole('button', { name: 'Add Customer' });
    this.openAccountButton = page.getByRole('button', { name: 'Open Account' });
    this.customersButton = page.getByRole('button', { name: 'Customers' });
    this.custommerLoginButton = page.getByRole('button', { name: 'Customer Login' });
  }

  async open() {
    await this.page.goto('/angularJs-protractor/BankingProject/#/login');
  }

  async clickCustomerLoginButton() {
    await this.custommerLoginButton.click();
  }

  async clickManagerLoginButton() {
    await this.managerLoginButton.click();
  }
  

  async assertButtonIsVisible(locator) {
    await expect(locator).toBeVisible();
  }
}
