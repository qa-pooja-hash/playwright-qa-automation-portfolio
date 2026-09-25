import { Page, Locator } from '@playwright/test';

export class TemplatesPage {
  readonly page: Page;

  readonly heading: Locator;
  readonly createTemplateButton: Locator;
  readonly searchInput: Locator;

  readonly createTemplateHeading: Locator;
  readonly templateNameInput: Locator;
  readonly templateDescriptionInput: Locator;
  readonly titleInput: Locator;
  readonly messageInput: Locator;
  readonly createButton: Locator;

  constructor(page: Page) {
    this.page = page;

    // Templates listing page
    this.heading = page.getByRole('heading', {
      name: 'Templates',
      exact: true
    });

    this.createTemplateButton = page.getByRole('button', {
      name: 'icon Create'
    });

    this.searchInput = page.getByPlaceholder(
      'Search by name'
    );

    // Create Template page
    this.createTemplateHeading = page.getByRole('heading', {
      name: 'Create Template',
      exact: true
    });

    this.templateNameInput = page.getByPlaceholder(
      'Enter name here...'
    );

    this.templateDescriptionInput = page.getByPlaceholder(
      'Enter info here...'
    );

    this.titleInput = page
      .getByRole('textbox', {
        name: 'Type {{ to insert token'
      })
      .first();

    this.messageInput = page
      .getByRole('textbox', {
        name: 'Type {{ to insert token'
      })
      .nth(1);

    this.createButton = page.getByRole('button', {
      name: 'create'
    });
  }
}