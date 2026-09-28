import { test, expect } from '../../fixtures/auth.fixture';
import { DashboardPage } from '../../page-objects/dashboard.page';

test('@smoke templates GET API should return 200', async ({ authenticatedPage }) => {
  const dashboardPage = new DashboardPage(authenticatedPage);

  const responsePromise = authenticatedPage.waitForResponse(response =>
    response.url().includes('/v1/templates?page=1&limit=8') &&
    response.request().method() === 'GET'
  );

  await dashboardPage.templatesMenu.click();

  const response = await responsePromise;

  expect(response.status()).toBe(200);
  expect(response.request().method()).toBe('GET');

  const body = await response.json();

  expect(body).toHaveProperty('success');
  expect(body).toHaveProperty('data');
  expect(body).toHaveProperty('meta');

  expect(Array.isArray(body.data)).toBeTruthy();
});

test('@smoke segments GET API should return 200', async ({ authenticatedPage }) => {
  const dashboardPage = new DashboardPage(authenticatedPage);

  const responsePromise = authenticatedPage.waitForResponse(response =>
    response.url().includes('/v1/segments?page=1&limit=8') &&
    response.request().method() === 'GET'
  );

  await dashboardPage.segmentsMenu.click();

  const response = await responsePromise;

  expect(response.status()).toBe(200);
  expect(response.request().method()).toBe('GET');

  const body = await response.json();

expect(body).toHaveProperty('data');
expect(body).toHaveProperty('meta');

expect(Array.isArray(body.data)).toBeTruthy();

expect(body.meta).toHaveProperty('page');
expect(body.meta).toHaveProperty('limit');
expect(body.meta).toHaveProperty('total');
});