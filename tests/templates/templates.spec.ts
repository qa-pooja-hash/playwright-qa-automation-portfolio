import { test, expect } from '@playwright/test';
import { LoginPage } from '../../page-objects/login.page';
import { WorkspacePage } from '../../page-objects/workspace.page';
import { DashboardPage } from '../../page-objects/dashboard.page';
import { TemplatesPage } from '../../page-objects/templates.page';

test('templates page should open successfully', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const workspacePage = new WorkspacePage(page);
  const dashboardPage = new DashboardPage(page);
  const templatesPage = new TemplatesPage(page);

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

  await expect(dashboardPage.templatesMenu).toBeVisible({
    timeout: 20000
  });

  await dashboardPage.templatesMenu.click();

  await expect(page).toHaveURL(/\/templates$/, {
    timeout: 20000
  });

  await expect(templatesPage.heading).toBeVisible({
    timeout: 20000
  });
});

test('create template form should open successfully', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const workspacePage = new WorkspacePage(page);
  const dashboardPage = new DashboardPage(page);
  const templatesPage = new TemplatesPage(page);

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

  await expect(dashboardPage.templatesMenu).toBeVisible({
    timeout: 20000
  });

  await dashboardPage.templatesMenu.click();

  await expect(page).toHaveURL(/\/templates$/, {
    timeout: 20000
  });

  await expect(templatesPage.createTemplateButton).toBeVisible({
    timeout: 20000
  });

  await templatesPage.createTemplateButton.click();

  await expect(page).toHaveURL(/\/templates\/create$/, {
    timeout: 20000
  });

  await expect(templatesPage.createTemplateHeading).toBeVisible({
    timeout: 20000
  });

  await expect(templatesPage.templateNameInput).toBeVisible();

  await expect(
    templatesPage.templateDescriptionInput
  ).toBeVisible();
});

test('should fill template form with test data', async ({ page }) => {
  test.setTimeout(60000);

  const loginPage = new LoginPage(page);
  const workspacePage = new WorkspacePage(page);
  const dashboardPage = new DashboardPage(page);
  const templatesPage = new TemplatesPage(page);

  const templateName = `AUTO_QA_TEMPLATE_${Date.now()}`;

  // Used for verification because UI displays
  // underscores as spaces and may wrap the name.
 const displayedTemplateName = templateName.replaceAll('_', ' ');

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

  await expect(dashboardPage.templatesMenu).toBeVisible({
    timeout: 20000
  });

  await dashboardPage.templatesMenu.click();

  await expect(page).toHaveURL(/\/templates$/, {
    timeout: 20000
  });

  await expect(templatesPage.createTemplateButton).toBeVisible({
    timeout: 20000
  });

  await templatesPage.createTemplateButton.click();

  await expect(page).toHaveURL(/\/templates\/create$/, {
    timeout: 20000
  });

  // Fill Template Name
  await templatesPage.templateNameInput.fill(
    templateName
  );

  // Fill Template Description
  await templatesPage.templateDescriptionInput.fill(
    'Automated QA test template created by Playwright'
  );

  // Fill Title
  await templatesPage.titleInput.fill(
    'QA Automation Test Title'
  );

  // Fill Message
  await templatesPage.messageInput.fill(
    'This is a safe Playwright test template.'
  );

  // Create Template record
  await templatesPage.createButton.click();

  // Verify user returns to Templates page
  await expect(page).toHaveURL(/\/templates$/, {
    timeout: 20000
  });

  // Verify search field is available
  await expect(templatesPage.searchInput).toBeVisible({
    timeout: 20000
  });

  // Search newly created Template
  await templatesPage.searchInput.fill(
    templateName
  );

  // Verify unique Template ID is shown
 await expect(
  page.getByText(displayedTemplateName, {
    exact: true
  }).first()
).toBeVisible({
  timeout: 20000
});
});