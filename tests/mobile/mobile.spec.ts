import { test, expect } from '@playwright/test';
import { LoginPage } from '../../page-objects/login.page';

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