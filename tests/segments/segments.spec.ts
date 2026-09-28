import { test, expect } from '../../fixtures/auth.fixture';
import { DashboardPage } from '../../page-objects/dashboard.page';
import { SegmentsPage } from '../../page-objects/segments.page';

test.describe.configure({ timeout: 60000 });

test('@smoke segments page should open successfully', async ({ authenticatedPage }) => {
  const dashboardPage = new DashboardPage(authenticatedPage);
  const segmentsPage = new SegmentsPage(authenticatedPage);

  await expect(dashboardPage.segmentsMenu).toBeVisible({
    timeout: 20000
  });

  await dashboardPage.segmentsMenu.click();

  await expect(authenticatedPage).toHaveURL(/\/segment$/, {
    timeout: 20000
  });

  await expect(segmentsPage.heading).toBeVisible({
    timeout: 20000
  });
});

test('@regression create segment form should open successfully', async ({ authenticatedPage }) => {
  const dashboardPage = new DashboardPage(authenticatedPage);
  const segmentsPage = new SegmentsPage(authenticatedPage);

  await dashboardPage.segmentsMenu.click();

  await expect(authenticatedPage).toHaveURL(/\/segment$/, {
    timeout: 20000
  });

  await segmentsPage.createSegmentButton.click();

  await expect(authenticatedPage).toHaveURL(/\/segment\/create$/, {
    timeout: 20000
  });

  await expect(segmentsPage.createSegmentHeading).toBeVisible();
  await expect(segmentsPage.segmentNameInput).toBeVisible();
  await expect(segmentsPage.descriptionInput).toBeVisible();
  await expect(segmentsPage.createButton).toBeVisible();
  await expect(segmentsPage.backButton).toBeVisible();
});

test('@regression should create a new test segment successfully', async ({ authenticatedPage }) => {
  test.setTimeout(60000);

  const dashboardPage = new DashboardPage(authenticatedPage);
  const segmentsPage = new SegmentsPage(authenticatedPage);

  const segmentName = `AUTO_QA_SEGMENT_${Date.now()}`;

  await dashboardPage.segmentsMenu.click();

  await expect(authenticatedPage).toHaveURL(/\/segment$/, {
    timeout: 20000
  });

  await segmentsPage.createSegmentButton.click();

  await expect(authenticatedPage).toHaveURL(/\/segment\/create$/, {
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

  await expect(authenticatedPage).toHaveURL(/\/segment$/, {
    timeout: 20000
  });

  await expect(
    authenticatedPage.getByText(segmentName, { exact: true })
  ).toBeVisible({
    timeout: 20000
  });
});

test('@regression should not create segment when required fields are empty', async ({ authenticatedPage }) => {
  const dashboardPage = new DashboardPage(authenticatedPage);
  const segmentsPage = new SegmentsPage(authenticatedPage);

  await dashboardPage.segmentsMenu.click();

  await expect(authenticatedPage).toHaveURL(/\/segment$/, {
    timeout: 20000
  });

  await segmentsPage.createSegmentButton.click();

  await expect(authenticatedPage).toHaveURL(/\/segment\/create$/, {
    timeout: 20000
  });

  await segmentsPage.createButton.click();

  await expect(authenticatedPage).toHaveURL(/\/segment\/create$/);

  await expect(segmentsPage.segmentNameInput).toHaveValue('');

  await expect(segmentsPage.createSegmentHeading).toBeVisible();
});