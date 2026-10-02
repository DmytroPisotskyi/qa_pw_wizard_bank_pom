import { expect } from '@playwright/test';

export class CustomersListPage {
  constructor(page) {
    this.page = page;
    this.tableLastRow = page.locator('table.table tbody tr');
    this.deleteCustomarButton = page.getByRole('button', { name: 'Delete' }).last();
  }

  async open() {
    await this.page.goto('/angularJs-protractor/BankingProject/#/manager/list');
  }


  async deleteCustomar() {
    await this.deleteCustomarButton.click();
  }

  async assertCustomerRowIsNotPresent(firstName) {
    let isDeletedCustomar = this.tableLastRow.filter({hasText: firstName});
    await expect(isDeletedCustomar).not.toBeVisible();
  }

  async reloadPage() {
    await this.page.reload();
  }
}
