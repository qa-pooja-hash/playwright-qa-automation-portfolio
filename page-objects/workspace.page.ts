import { Page, Locator } from '@playwright/test';

export class WorkspacePage {
  readonly page: Page;
  readonly heading: Locator;
  readonly isuWorkspace: Locator;
  readonly lnbWorkspace: Locator;

  constructor(page: Page) {
    this.page = page;

    this.heading = page.getByRole('heading', {
      name: 'CHOOSE WORKSPACE'
    });

    this.isuWorkspace = page.getByRole('button', {
      name: /^ISU/
    });

    this.lnbWorkspace = page.getByRole('button', {
      name: /^LNB/
    });
  }

  async selectISU() {
    await this.isuWorkspace.click();
  }

  async selectLNB() {
    await this.lnbWorkspace.click();
  }
}