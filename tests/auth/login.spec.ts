import { test, expect } from '@playwright/test';
import { LoginPage } from '../../page-objects/login.page';
import { WorkspacePage } from '../../page-objects/workspace.page';

test('unauthenticated user should be redirected to login page', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await page.goto('/dashboard');

  await expect(page).toHaveURL(/\/auth\/login/);

  await expect(loginPage.heading).toBeVisible();
  await expect(loginPage.emailInput).toBeVisible();
  await expect(loginPage.passwordInput).toBeVisible();
  await expect(loginPage.loginButton).toBeVisible();
});

test('should show validation when login fields are empty', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.open();

  await loginPage.loginButton.click();

  await expect(page.getByText('Enter a valid email')).toBeVisible();
  await expect(page.getByText('Password is required')).toBeVisible();
});

test('valid login should show workspace selection', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const workspacePage = new WorkspacePage(page);

  await loginPage.open();

  await loginPage.login(
    process.env.TEST_EMAIL!,
    process.env.TEST_PASSWORD!
  );

  await expect(workspacePage.heading).toBeVisible({
    timeout: 15000
  });

  await expect(workspacePage.isuWorkspace).toBeVisible();
  await expect(workspacePage.lnbWorkspace).toBeVisible();
});