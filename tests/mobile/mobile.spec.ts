import { test, expect } from '@playwright/test';
import { LoginPage } from '../../page-objects/login.page';
import { WorkspacePage } from '../../page-objects/workspace.page';

test.use({
  viewport: {
    width: 390,
    height: 844
  }
});

test('@smoke login page should display correctly on mobile viewport', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.open();

  await expect(loginPage.heading).toBeVisible();
  await expect(loginPage.emailInput).toBeVisible();
  await expect(loginPage.passwordInput).toBeVisible();
  await expect(loginPage.loginButton).toBeVisible();

  await expect(loginPage.emailInput).toBeInViewport();
  await expect(loginPage.passwordInput).toBeInViewport();
  await expect(loginPage.loginButton).toBeInViewport();
});

test('@regression valid login should show workspace selection on mobile viewport', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const workspacePage = new WorkspacePage(page);

  await loginPage.open();

  await loginPage.login(
    process.env.TEST_EMAIL!,
    process.env.TEST_PASSWORD!
  );

  await expect(workspacePage.heading).toBeVisible({
    timeout: 20000
  });

  await expect(workspacePage.isuWorkspace).toBeVisible();
  await expect(workspacePage.lnbWorkspace).toBeVisible();
});