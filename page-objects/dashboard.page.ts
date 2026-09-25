import { Page, Locator } from '@playwright/test';

export class DashboardPage {
  readonly page: Page;

  readonly audienceMenu: Locator;
  readonly segmentsMenu: Locator;
  readonly templatesMenu: Locator;

  constructor(page: Page) {
    this.page = page;

    this.audienceMenu = page
      .getByText('Audience', { exact: true })
      .first();

    this.segmentsMenu = page
      .getByText('Segments', { exact: true })
      .first();

    this.templatesMenu = page
      .getByText('Templates', { exact: true })
      .first();
  }
}