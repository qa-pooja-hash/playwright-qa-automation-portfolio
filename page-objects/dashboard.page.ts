import { Page, Locator } from '@playwright/test';

export class DashboardPage {
  readonly page: Page;

  readonly audienceMenu: Locator;
  readonly segmentsMenu: Locator;
  readonly templatesMenu: Locator;

  constructor(page: Page) {
    this.page = page;

    this.audienceMenu = page
      .getByRole('complementary')
      .getByText('Audience', { exact: true });

    this.segmentsMenu = page
      .getByRole('complementary')
      .getByText('Segments', { exact: true });

    this.templatesMenu = page
      .getByRole('complementary')
      .getByText('Templates', { exact: true });
  }
}