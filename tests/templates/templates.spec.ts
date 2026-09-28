import { test, expect } from '../../fixtures/auth.fixture';
import { DashboardPage } from '../../page-objects/dashboard.page';
import { TemplatesPage } from '../../page-objects/templates.page';

test('@smoke templates page should open successfully', async ({ authenticatedPage }) => {
  const dashboardPage = new DashboardPage(authenticatedPage);
  const templatesPage = new TemplatesPage(authenticatedPage);

  await expect(dashboardPage.templatesMenu).toBeVisible({
    timeout: 20000
  });

  await dashboardPage.templatesMenu.click();

  await expect(authenticatedPage).toHaveURL(/\/templates$/, {
    timeout: 20000
  });

  await expect(templatesPage.heading).toBeVisible({
    timeout: 20000
  });
});

test('@regression create template form should open successfully', async ({ authenticatedPage }) => {
  const dashboardPage = new DashboardPage(authenticatedPage);
  const templatesPage = new TemplatesPage(authenticatedPage);

  await dashboardPage.templatesMenu.click();

  await expect(authenticatedPage).toHaveURL(/\/templates$/, {
    timeout: 20000
  });

  await expect(templatesPage.createTemplateButton).toBeVisible({
    timeout: 20000
  });

  await templatesPage.createTemplateButton.click();

  await expect(authenticatedPage).toHaveURL(/\/templates\/create$/, {
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

test('@regression should fill template form with test data', async ({ authenticatedPage }) => {
  test.setTimeout(60000);

  const dashboardPage = new DashboardPage(authenticatedPage);
  const templatesPage = new TemplatesPage(authenticatedPage);

  const templateName = `AUTO_QA_TEMPLATE_${Date.now()}`;

  const displayedTemplateName = templateName.replaceAll('_', ' ');

  await dashboardPage.templatesMenu.click();

  await expect(authenticatedPage).toHaveURL(/\/templates$/, {
    timeout: 20000
  });

  await expect(templatesPage.createTemplateButton).toBeVisible({
    timeout: 20000
  });

  await templatesPage.createTemplateButton.click();

  await expect(authenticatedPage).toHaveURL(/\/templates\/create$/, {
    timeout: 20000
  });

  await templatesPage.templateNameInput.fill(templateName);

  await templatesPage.templateDescriptionInput.fill(
    'Automated QA test template created by Playwright'
  );

  await templatesPage.titleInput.fill(
    'QA Automation Test Title'
  );

  await templatesPage.messageInput.fill(
    'This is a safe Playwright test template.'
  );

  await templatesPage.createButton.click();

  await expect(authenticatedPage).toHaveURL(/\/templates$/, {
    timeout: 20000
  });

  await expect(templatesPage.searchInput).toBeVisible({
    timeout: 20000
  });

  await templatesPage.searchInput.fill(templateName);

  await expect(
    authenticatedPage
      .getByText(displayedTemplateName, {
        exact: true
      })
      .first()
  ).toBeVisible({
    timeout: 20000
  });
});

test('@regression should not create template when required fields are empty', async ({ authenticatedPage }) => {
  const dashboardPage = new DashboardPage(authenticatedPage);
  const templatesPage = new TemplatesPage(authenticatedPage);

  await dashboardPage.templatesMenu.click();

  await expect(authenticatedPage).toHaveURL(/\/templates$/, {
    timeout: 20000
  });

  await templatesPage.createTemplateButton.click();

  await expect(authenticatedPage).toHaveURL(/\/templates\/create$/, {
    timeout: 20000
  });

  // Keep required fields empty and click Create
  await templatesPage.createButton.click();

  // User should remain on Create Template page
  await expect(authenticatedPage).toHaveURL(/\/templates\/create$/);

  // Required Template Name should still be empty
  await expect(templatesPage.templateNameInput).toHaveValue('');

  // Create Template form should still be visible
  await expect(templatesPage.createTemplateHeading).toBeVisible();
});

test('@regression should not create template when only template name is provided', async ({ authenticatedPage }) => {
  const dashboardPage = new DashboardPage(authenticatedPage);
  const templatesPage = new TemplatesPage(authenticatedPage);

  const templateName = `AUTO_QA_INCOMPLETE_TEMPLATE_${Date.now()}`;

  await dashboardPage.templatesMenu.click();

  await expect(authenticatedPage).toHaveURL(/\/templates$/, {
    timeout: 20000
  });

  await templatesPage.createTemplateButton.click();

  await expect(authenticatedPage).toHaveURL(/\/templates\/create$/, {
    timeout: 20000
  });

  await templatesPage.templateNameInput.fill(templateName);

  await expect(templatesPage.titleInput).toHaveValue('');
  await expect(templatesPage.messageInput).toHaveValue('');

  await templatesPage.createButton.click();

  await expect(authenticatedPage).toHaveURL(/\/templates\/create$/);

  await expect(templatesPage.createTemplateHeading).toBeVisible();
});