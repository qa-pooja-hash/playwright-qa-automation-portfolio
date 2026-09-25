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

    // Login with credentials from .env
    await loginPage.login(
      process.env.TEST_EMAIL!,
      process.env.TEST_PASSWORD!
    );

    // Verify workspace selection screen
    await expect(workspacePage.heading).toBeVisible({
      timeout: 15000
    });

    // Select ISU workspace
    await workspacePage.selectISU();

    // Verify Dashboard opens
    await expect(page).toHaveURL(/\/dashboard/, {
      timeout: 20000
    });

    // Give authenticated page to the test
    await use(page);
  }
});

export { expect };