import { test, expect } from '../../fixtures/auth.fixture';
import { DashboardPage } from '../../page-objects/dashboard.page';
import { SegmentsPage } from '../../page-objects/segments.page';

test('@smoke dashboard should load after selecting ISU workspace', async ({ authenticatedPage }) => {
  const dashboardPage = new DashboardPage(authenticatedPage);

  await expect(dashboardPage.audienceMenu).toBeVisible({
    timeout: 20000
  });
});

test('@regression should navigate from dashboard to segments page', async ({ authenticatedPage }) => {
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