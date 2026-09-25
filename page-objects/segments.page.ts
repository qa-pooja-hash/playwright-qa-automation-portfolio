import { Page, Locator } from '@playwright/test';

export class SegmentsPage {
  readonly page: Page;

  readonly heading: Locator;
  readonly createSegmentButton: Locator;

  readonly createSegmentHeading: Locator;
  readonly segmentNameInput: Locator;
  readonly descriptionInput: Locator;
  readonly createButton: Locator;
  readonly backButton: Locator;

  readonly addFilterGroupButton: Locator;
  readonly searchFilterButton: Locator;
  readonly userAttributesButton: Locator;
  readonly ageButton: Locator;
  readonly filterValueInput: Locator;

  constructor(page: Page) {
    this.page = page;

    // Segments listing page
    this.heading = page.getByRole('heading', {
      name: 'Segments',
      exact: true
    });

    this.createSegmentButton = page.getByRole('button', {
      name: 'Icon Create Segment'
    });

    // Create Segment page
    this.createSegmentHeading = page.getByRole('heading', {
      name: 'Create Segment',
      exact: true
    });

    this.segmentNameInput = page.getByPlaceholder(
      'Enter segment name...'
    );

    this.descriptionInput = page.getByPlaceholder(
      'Describe this segment...'
    );

    this.createButton = page
      .getByRole('button', {
        name: 'Create',
        exact: true
      })
      .first();

    this.backButton = page.getByRole('button', {
      name: 'Back',
      exact: true
    });

    // Segment filter
    this.addFilterGroupButton = page.getByRole('button', {
      name: 'Add Filter Group'
    });

    this.searchFilterButton = page
      .getByRole('button', {
        name: 'Search Filter'
      })
      .first();

    this.userAttributesButton = page.getByRole('button', {
      name: 'User Attributes',
      exact: true
    });

    this.ageButton = page.getByRole('button', {
      name: 'Age',
      exact: true
    });

    this.filterValueInput = page.getByRole('textbox', {
      name: 'Enter value'
    });
  }
}