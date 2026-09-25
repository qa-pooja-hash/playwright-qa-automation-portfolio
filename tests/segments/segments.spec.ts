import { test, expect } from '@playwright/test';
import { LoginPage } from '../../page-objects/login.page';
import { WorkspacePage } from '../../page-objects/workspace.page';
import { DashboardPage } from '../../page-objects/dashboard.page';
import { SegmentsPage } from '../../page-objects/segments.page';

test('segments page should open successfully', async ({ page }) => {
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

test('create segment form should open successfully', async ({ page }) => {
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

  await dashboardPage.segmentsMenu.click();

  await expect(page).toHaveURL(/\/segment$/, {
    timeout: 20000
  });

  await segmentsPage.createSegmentButton.click();

  await expect(page).toHaveURL(/\/segment\/create$/, {
    timeout: 20000
  });

  await expect(segmentsPage.createSegmentHeading).toBeVisible();
  await expect(segmentsPage.segmentNameInput).toBeVisible();
  await expect(segmentsPage.descriptionInput).toBeVisible();
  await expect(segmentsPage.createButton).toBeVisible();
  await expect(segmentsPage.backButton).toBeVisible();
});

test('should create a new test segment successfully', async ({ page }) => {
  test.setTimeout(60000);

  const loginPage = new LoginPage(page);
  const workspacePage = new WorkspacePage(page);
  const dashboardPage = new DashboardPage(page);
  const segmentsPage = new SegmentsPage(page);

  const segmentName = `AUTO_QA_SEGMENT_${Date.now()}`;

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

  await dashboardPage.segmentsMenu.click();

  await expect(page).toHaveURL(/\/segment$/, {
    timeout: 20000
  });

  await segmentsPage.createSegmentButton.click();

  await expect(page).toHaveURL(/\/segment\/create$/, {
    timeout: 20000
  });

  await segmentsPage.segmentNameInput.fill(segmentName);

  await segmentsPage.descriptionInput.fill(
    'Automated QA test segment created by Playwright'
  );

  await segmentsPage.searchFilterButton.click();

  await segmentsPage.userAttributesButton.click();

  await segmentsPage.ageButton.click();

  await segmentsPage.filterValueInput.fill('30');

  await segmentsPage.createButton.click();

  await expect(page).toHaveURL(/\/segment$/, {
    timeout: 20000
  });

  await expect(
    page.getByText(segmentName, { exact: true })
  ).toBeVisible({
    timeout: 20000
  });
});