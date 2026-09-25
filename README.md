# Playwright QA Automation Portfolio

A practical QA automation portfolio built with **Playwright + TypeScript** using the **Page Object Model (POM)**.

The project demonstrates automated testing for a CMS/Admin Dashboard, covering authentication, workspace selection, dashboard navigation, Segments, and Templates.

Current status: **11 working automated tests**.

## What I Automated

### Authentication
- Redirect unauthenticated users to the login page
- Validate required login fields
- Verify successful login
- Verify workspace selection after login

### Reusable Authentication Setup
- Created a custom Playwright fixture for authenticated tests
- Reused login and workspace selection across Dashboard, Segments, and Templates tests
- Reduced duplicate setup code and improved maintainability

### Dashboard
- Verify Dashboard loads after selecting the workspace
- Verify navigation from Dashboard to Segments

### Segments
- Verify Segments page loads
- Verify Create Segment form opens
- Create and verify a test segment using safe test data

### Templates
- Verify Templates page loads
- Verify Create Template form opens
- Create and verify a test template using safe test data

### Cross-Browser Testing
- Executed the smoke test suite on Chromium
- Executed the smoke test suite on Firefox
- Executed the smoke test suite on WebKit
- Verified 5 smoke tests pass across all three browsers

## Current Automated Tests

- Authentication: 3 tests
- Dashboard: 2 tests
- Segments: 3 tests
- Templates: 3 tests

**Total: 11 automated tests**

## Tech Stack

- **Playwright** — browser automation and end-to-end testing
- **TypeScript** — test implementation
- **Node.js** — project runtime
- **Page Object Model (POM)** — reusable page locators and actions
- **Custom Playwright Fixture** — reusable authenticated setup for login, workspace selection, and dashboard access
- **Environment Variables** — secure handling of credentials
- **Chromium** — current primary test browser
- **Cross-Browser Testing** — smoke tests validated on Chromium, Firefox, and WebKit

## Safety

This portfolio uses only safe test workflows and sanitized test data.

- Real credentials are stored locally in `.env` and are not committed to GitHub.
- Test data uses automation-friendly names such as `AUTO_QA_SEGMENT_*` and `AUTO_QA_TEMPLATE_*`.
- The automation does not send notifications to users.
- Event Triggers and Push Content are intentionally excluded from the automated coverage.

## Project Structure

    playwright-qa-automation-portfolio/
    ├── fixtures/
    │   └── auth.fixture.ts
    │
    ├── page-objects/
    │   ├── login.page.ts
    │   ├── workspace.page.ts
    │   ├── dashboard.page.ts
    │   ├── segments.page.ts
    │   └── templates.page.ts
    │
    ├── tests/
    │   ├── auth/
    │   │   └── login.spec.ts
    │   ├── dashboard/
    │   │   └── dashboard.spec.ts
    │   ├── segments/
    │   │   └── segments.spec.ts
    │   └── templates/
    │       └── templates.spec.ts
    │
    ├── .env.example
    ├── .gitignore
    ├── package.json
    ├── package-lock.json
    ├── playwright.config.ts
    └── README.md

## How to Run

Install dependencies:

    npm install

Install Playwright browsers:

    npx playwright install

Run all tests in Chromium:

    npx playwright test --project=chromium --workers=1

Run tests in headed mode:

    npx playwright test --project=chromium --headed --workers=1