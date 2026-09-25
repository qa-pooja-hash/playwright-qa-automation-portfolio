import { test, expect } from '@playwright/test';
import { LoginPage } from '../../page-objects/login.page';
import { WorkspacePage } from '../../page-objects/workspace.page';
import { DashboardPage } from '../../page-objects/dashboard.page';
import { SegmentsPage } from '../../page-objects/segments.page';

test('dashboard should load after selecting ISU workspace', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const workspacePage = new WorkspacePage(page);
  const dashboardPage = new DashboardPage(page);

  await loginPage.open();

  await loginPage.login(
    process.env.TEST_EMAIL!,
    process.env.TEST_PASSWORD!
  );

  await expect(workspacePage.heading).toBeVisible({
    timeout: 15000
  });

  await workspacePage.selectISU();

  await expect(page).toHaveURL(/\/dashboard/, {
    timeout: 20000
  });

  await expect(dashboardPage.audienceMenu).toBeVisible({
    timeout: 20000
  });
});

test('should navigate from dashboard to segments page', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const workspacePage = new WorkspacePage(page);
  const dashboardPage = new DashboardPage(page);
  const segmentsPage = new SegmentsPage(page);

  await loginPage.open();

  await loginPage.login(
    process.env.TEST_EMAIL!,
    process.env.TEST_PASSWORD!
  );

  await expect(workspacePage.heading).toBeVisible({
    timeout: 15000
  });

  await workspacePage.selectISU();

  await expect(page).toHaveURL(/\/dashboard/, {
    timeout: 20000
  });

  await expect(dashboardPage.segmentsMenu).toBeVisible({
    timeout: 20000
  });

  await dashboardPage.segmentsMenu.click();

  await expect(page).toHaveURL(/\/segment$/, {
    timeout: 20000
  });

  await expect(segmentsPage.heading).toBeVisible({
    timeout: 20000
  });
});