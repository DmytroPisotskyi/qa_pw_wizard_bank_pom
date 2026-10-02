import { expect } from '@playwright/test';

export class BankManagerMainPage {
  constructor(page) {
    this.page = page;
    this.managerLoginButton = page.getByRole('button', { name: 'Bank Manager Login' });
    this.addCustomarButton = page.getByRole('button', { name: 'Add Customer' });
    this.openAccountButton = page.getByRole('button', { name: 'Open Account' });
    this.customersButton = page.getByRole('button', { name: 'Customers' });
    this.custommerLoginButton = page.getByRole('button', { name: 'Customer Login' });
  }

  async open() {
    await this.page.goto('/angularJs-protractor/BankingProject/#/manager');
  }

  async clickManagerLoginButton() {
    await this.managerLoginButton.click();
  }

}
