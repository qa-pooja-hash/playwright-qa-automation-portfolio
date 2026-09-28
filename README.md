# Playwright QA Automation Portfolio

A practical QA automation portfolio built using **Playwright + TypeScript**.

This project demonstrates real-world testing skills including:

- UI automation
- Functional testing
- End-to-end testing
- Negative testing
- API / network response validation
- Mobile responsive testing
- Page Object Model
- Reusable authentication fixtures
- Environment variable management
- Smoke and regression test tagging
- Cross-browser testing

The automation is based on a CMS / Admin Dashboard workflow and uses safe, sanitized test data.

---

## Project Status

✅ **18 working automated tests**

Current Chromium execution:

```text
18 passed
```

---

## What I Automated

### Authentication

Automated login and authentication scenarios including:

- Verify unauthenticated users are redirected to the login page
- Verify required-field validation
- Verify successful login reaches workspace selection
- Verify available workspace options
- Verify invalid login displays an error message

---

### Reusable Authentication Setup

Created a reusable Playwright fixture for authenticated tests.

The authentication flow is:

```text
Login
→ Enter valid test credentials
→ Choose workspace
→ Select test workspace
→ Dashboard
```

This avoids repeating the login steps inside every authenticated test.

---

### Dashboard

Automated dashboard scenarios including:

- Verify Dashboard loads successfully after authentication
- Verify navigation from Dashboard to Segments

---

### Segments

Automated Segment management scenarios including:

- Verify Segments page opens successfully
- Verify Create Segment form opens
- Create a test segment with automated test data
- Verify successful segment creation
- Verify required-field validation
- Verify a segment is not created when required information is missing

Example automated test data:

```text
AUTO_QA_SEGMENT_<timestamp>
```

Using unique test data helps avoid conflicts between repeated test executions.

---

### Templates

Automated Template scenarios including:

- Verify Templates page opens successfully
- Verify Create Template form opens
- Fill template form with test data
- Create and verify a test template
- Verify required-field validation
- Verify a template cannot be created when only the template name is entered

Example automated test data:

```text
AUTO_QA_TEMPLATE_<timestamp>
```

---

### API Testing

Added safe, read-only API validation using Playwright network responses.

Current API coverage includes:

- Templates GET API
  - Verify request method is GET
  - Verify HTTP status is 200
  - Verify expected response properties
  - Verify returned data is an array

- Segments GET API
  - Verify request method is GET
  - Verify HTTP status is 200
  - Verify expected response properties
  - Verify returned data is an array
  - Verify pagination metadata

API tests observe the same GET requests made by the CMS.

No POST, PUT, PATCH, or DELETE API operations are performed by these API tests.

---

### Mobile Testing

Added responsive UI validation using a mobile viewport.

Current mobile coverage includes:

- Verify login page displays correctly at 390 × 844 viewport
- Verify important login fields and button remain visible
- Verify key elements are inside the mobile viewport

---

## Current Automated Tests

| Module | Tests |
|---|---:|
| Authentication | 4 |
| Dashboard | 2 |
| Segments | 4 |
| Templates | 5 |
| API Testing | 2 |
| Mobile Testing | 1 |
| **Total** | **18** |

---

## Test Tags

Tests are organized using Playwright tags.

### Smoke Tests

```text
@smoke
```

Used for important application flows such as:

- Login
- Dashboard loading
- Segments page
- Templates page
- Read-only API checks
- Mobile responsive validation

Current smoke tests:

```text
8
```

### Regression Tests

```text
@regression
```

Used for deeper functional and negative scenarios.

Current regression tests:

```text
10
```

---

## Tech Stack

- Playwright
- TypeScript
- Node.js
- Page Object Model
- Playwright Fixtures
- Environment Variables
- dotenv
- API / Network Response Testing
- Mobile Viewport Testing
- Chromium
- Firefox
- WebKit
- HTML Test Reports
- Playwright Trace
- Git
- GitHub

---

## Project Structure

```text
playwright-qa-automation-portfolio/
│
├── fixtures/
│   └── auth.fixture.ts
│
├── page-objects/
│   ├── dashboard.page.ts
│   ├── login.page.ts
│   ├── segments.page.ts
│   ├── templates.page.ts
│   └── workspace.page.ts
│
├── tests/
│   ├── api/
│   │   └── api.spec.ts
│   │
│   ├── auth/
│   │   └── login.spec.ts
│   │
│   ├── dashboard/
│   │   └── dashboard.spec.ts
│   │
│   ├── mobile/
│   │   └── mobile.spec.ts
│   │
│   ├── segments/
│   │   └── segments.spec.ts
│   │
│   └── templates/
│       └── templates.spec.ts
│
├── .env.example
├── .gitignore
├── package.json
├── package-lock.json
├── playwright.config.ts
└── README.md
```

---

## Page Object Model

This project uses the **Page Object Model (POM)** to keep test code clean and reusable.

Page objects currently include:

```text
LoginPage
WorkspacePage
DashboardPage
SegmentsPage
TemplatesPage
```

UI locators and reusable page actions are stored inside these page objects instead of being repeated across test files.

---

## Authentication Fixture

Authenticated tests use a reusable custom fixture:

```text
fixtures/auth.fixture.ts
```

The fixture:

1. Opens the login page
2. Uses test credentials from environment variables
3. Logs into the application
4. Waits for workspace selection
5. Selects the test workspace
6. Waits for the Dashboard
7. Provides an authenticated page to the test

Example:

```ts
test('@smoke dashboard should load after selecting workspace', async ({
  authenticatedPage
}) => {
  // Test starts with an authenticated session
});
```

---

## Environment Variables

Credentials and environment-specific values are stored locally in:

```text
.env
```

Example structure:

```env
BASE_URL=
TEST_EMAIL=
TEST_PASSWORD=
```

A safe example file is included:

```text
.env.example
```

The real `.env` file is excluded from Git.

---

## Security and Test Safety

This project follows safe automation practices.

- Real credentials are not committed to GitHub
- `.env` is excluded through `.gitignore`
- Test data uses automated QA naming
- API automation is read-only using GET requests
- No notifications are sent by the automated tests
- Sensitive authentication headers and tokens are not stored in test code
- Confidential company source code is not included
- Tests use sanitized portfolio-friendly examples
- Event Triggers are intentionally excluded from automation
- Push Content is intentionally excluded from automation

---

## Install Project

Install project dependencies:

```bash
npm install
```

Install Playwright browsers:

```bash
npx playwright install
```

Create your local environment file:

```text
.env
```

Add your own authorized test environment values:

```env
BASE_URL=
TEST_EMAIL=
TEST_PASSWORD=
```

---

## Run All Chromium Tests

```bash
npm run test:chromium
```

Current result:

```text
18 passed
```

---

## Run Smoke Tests

```bash
npm run test:smoke
```

---

## Run Regression Tests

```bash
npm run test:regression
```

---

## Run Tests in Headed Mode

```bash
npm run test:headed
```

This opens the browser while Playwright executes the tests.

---

## Run Firefox Smoke Tests

```bash
npm run test:smoke:firefox
```

---

## Run WebKit Smoke Tests

```bash
npm run test:smoke:webkit
```

---

## Run API Tests

```bash
npx playwright test tests/api/api.spec.ts --project=chromium --workers=1
```

Current API coverage:

```text
2 passing API tests
```

---

## Run Mobile Test

```bash
npx playwright test tests/mobile/mobile.spec.ts --project=chromium --workers=1
```

Current mobile coverage:

```text
1 passing mobile viewport test
```

---

## View Playwright HTML Report

After running tests:

```bash
npm run report
```

or:

```bash
npx playwright show-report
```

---

## Cross-Browser Testing

The project supports:

- Chromium
- Firefox
- WebKit

Core UI smoke flows have been validated across all three browser engines.

API smoke tests have currently been verified in Chromium.

The mobile viewport test has currently been verified in Chromium.

---

## Testing Approach

The portfolio focuses on practical QA scenarios rather than only basic automation examples.

Coverage includes:

### Positive Testing

Examples:

- Successful login
- Successful navigation
- Successful segment creation
- Successful template creation
- Successful API responses
- Mobile login page visibility

### Negative Testing

Examples:

- Empty login fields
- Invalid login credentials
- Missing required Segment fields
- Missing required Template fields
- Incomplete Template form submission

### API Validation

Examples:

- HTTP method validation
- HTTP status validation
- Response structure validation
- Array validation
- Pagination metadata validation

### Responsive Testing

Examples:

- Mobile viewport validation
- Login field visibility
- Login button visibility
- Element viewport validation

---

## Current Test Summary

```text
Authentication Tests : 4
Dashboard Tests      : 2
Segments Tests       : 4
Templates Tests      : 5
API Tests            : 2
Mobile Tests         : 1
------------------------
Total                : 18
```

Test classification:

```text
Smoke Tests      : 8
Regression Tests : 10
Total            : 18
```

---

## Skills Demonstrated

This project demonstrates practical knowledge of:

- QA Automation
- Manual Testing concepts
- Functional Testing
- Regression Testing
- Smoke Testing
- Negative Testing
- End-to-End Testing
- API Testing
- Responsive Testing
- Playwright
- TypeScript
- Page Object Model
- Reusable Fixtures
- Locator strategies
- Assertions
- Network response validation
- Test data management
- Environment configuration
- Cross-browser testing
- Mobile viewport testing
- Git
- GitHub

---

## Future Improvements

The portfolio can be expanded with:

- Additional safe API tests
- More reusable test utilities
- Additional regression scenarios
- Improved reporting
- Authentication storage state
- Test documentation
- CI/CD integration when appropriate

---

## Author

**Pooja Odedara**

QA / Software Testing Professional

Skills include Manual Testing, Functional Testing, Regression Testing, UI Testing, End-to-End Testing, API Testing, Responsive Testing, and Playwright Automation with TypeScript.

---

## Note

This repository is created as a professional QA automation portfolio.

All automation is designed around authorized test workflows with sanitized test data. Confidential application source code, credentials, authentication tokens, and sensitive business information are not included.