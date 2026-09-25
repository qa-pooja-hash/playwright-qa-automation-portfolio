import { test as base, expect, Page } from '@playwright/test';
import { LoginPage } from '../page-objects/login.page';
import { WorkspacePage } from '../page-objects/workspace.page';

type AuthFixtures = {
  authenticatedPage: Page;
};

export const test = base.extend<AuthFixtures>({
  authenticatedPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    const workspacePage = new WorkspacePage(page);

    // Open login page
    await loginPage.open();

    // Login
    await loginPage.login(
      process.env.TEST_EMAIL!,
      process.env.TEST_PASSWORD!
    );

    // Wait for workspace selection
    await expect(workspacePage.heading).toBeVisible({
      timeout: 20000
    });

    // Select ISU workspace
    await workspacePage.selectISU();

    // Verify authentication completed
    await expect(page).toHaveURL(/\/dashboard/, {
      timeout: 30000
    });

    // Wait until dashboard document is ready
    await page.waitForLoadState('domcontentloaded');

    // Give authenticated page to the test
    await use(page);
  }
});

export { expect };