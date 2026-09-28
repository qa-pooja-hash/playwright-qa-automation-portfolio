# QA Automation Test Plan

## 1. Project Overview

This project is a Playwright + TypeScript QA automation portfolio based on a CMS / Admin Dashboard workflow.

The purpose of this test plan is to define the current automation scope, test approach, environments, coverage, and safety rules used in the project.

---

## 2. Objectives

The main objectives are:

- Validate important CMS user flows
- Verify authentication behavior
- Verify dashboard navigation
- Verify Segments functionality
- Verify Templates functionality
- Validate safe read-only API responses
- Verify basic mobile responsiveness
- Validate important smoke scenarios across multiple browser engines
- Maintain reusable and readable Playwright automation

---

## 3. Test Scope

### In Scope

The current automation covers:

- Authentication
- Workspace selection
- Dashboard
- Segments
- Templates
- Read-only API validation
- Mobile viewport validation
- Cross-browser smoke testing

### Out of Scope

The following areas are intentionally not automated:

- Notification sending
- Event Triggers
- Push Content
- Destructive API operations
- Production data modification through API automation

API automation is limited to safe GET request validation.

---

## 4. Test Types

The project currently includes:

### Smoke Testing

Used for important application flows such as:

- Login
- Dashboard loading
- Segments page
- Templates page
- Read-only API checks
- Mobile login page validation

Current smoke tests:

```text
8
```

### Regression Testing

Used for deeper functional and negative scenarios such as:

- Invalid login
- Required-field validation
- Segment creation
- Template creation
- Incomplete form submission
- Mobile login flow

Current regression tests:

```text
11
```

---

## 5. Current Automated Test Coverage

| Module | Tests |
|---|---:|
| Authentication | 4 |
| Dashboard | 2 |
| Segments | 4 |
| Templates | 5 |
| API Testing | 2 |
| Mobile Testing | 2 |
| **Total** | **19** |

Current full Chromium result:

```text
19 passed
```

---

## 6. Browser Coverage

The project supports:

- Chromium
- Firefox
- WebKit

Current smoke validation:

```text
Chromium : 8 passed
Firefox  : 8 passed
WebKit   : 8 passed
```

The full regression suite is currently validated in Chromium.

---

## 7. Mobile Coverage

Mobile tests use the following viewport:

```text
390 × 844
```

Current mobile scenarios include:

- Verify login page displays correctly
- Verify Email field is visible
- Verify Password field is visible
- Verify Login button is visible
- Verify important elements remain inside the viewport
- Verify successful login reaches workspace selection
- Verify available workspace options remain visible

---

## 8. API Coverage

API testing is currently read-only.

### Templates API

Validations include:

- GET request method
- HTTP 200 status
- Expected response properties
- Data array validation

### Segments API

Validations include:

- GET request method
- HTTP 200 status
- Expected response properties
- Data array validation
- Pagination metadata validation

No POST, PUT, PATCH, or DELETE API tests are performed.

---

## 9. Automation Framework

The framework uses:

- Playwright
- TypeScript
- Node.js
- Page Object Model
- Custom Playwright fixtures
- Environment variables
- Smoke and regression tags
- Playwright assertions
- Network response validation
- HTML reports
- Playwright traces

---

## 10. Test Data

Automated test data uses unique QA-friendly names.

Examples:

```text
AUTO_QA_SEGMENT_<timestamp>
AUTO_QA_TEMPLATE_<timestamp>
```

This reduces conflicts between repeated test executions.

---

## 11. Environment Configuration

Environment-specific values are stored in:

```text
.env
```

Example:

```env
BASE_URL=
TEST_EMAIL=
TEST_PASSWORD=
```

The real `.env` file is excluded from Git.

A safe example file is available as:

```text
.env.example
```

---

## 12. Security and Safety Rules

The automation follows these rules:

- Real credentials are not committed to GitHub
- Authentication tokens are not stored in source code
- `.env` is excluded from Git
- Sensitive company source code is not included
- Test data is sanitized
- API automation uses GET requests only
- No notifications are sent
- Event Triggers are excluded
- Push Content is excluded
- Destructive API operations are not automated

---

## 13. Test Execution

### Run Full Chromium Suite

```bash
npm run test:chromium
```

Expected current result:

```text
19 passed
```

### Run Smoke Tests

```bash
npm run test:smoke
```

### Run Regression Tests

```bash
npm run test:regression
```

### Run Firefox Smoke Tests

```bash
npm run test:smoke:firefox
```

### Run WebKit Smoke Tests

```bash
npm run test:smoke:webkit
```

### Run API Tests

```bash
npx playwright test tests/api/api.spec.ts --project=chromium --workers=1
```

### Run Mobile Tests

```bash
npx playwright test tests/mobile/mobile.spec.ts --project=chromium --workers=1
```

---

## 14. Entry Criteria

Testing can begin when:

- The CMS is accessible
- The test environment is available
- Valid test credentials are configured locally
- Required Playwright browsers are installed
- Network connection is stable

---

## 15. Exit Criteria

The current automation run is considered successful when:

- All planned tests execute
- Smoke tests pass
- Regression tests pass
- No unexpected application errors block testing
- No environment or network issue affects execution

---

## 16. Known External Risks

Possible external issues include:

- Internet connection interruptions
- Test environment downtime
- Slow API responses
- Temporary CMS loading delays
- Changes in UI locators
- Changes in API response structure

Environment failures should be separated from actual application defects.

---

## 17. Reporting

Test results are available through:

- Terminal output
- Playwright HTML report
- Playwright screenshots on failure
- Playwright traces when configured

To open the HTML report:

```bash
npm run report
```

---

## 18. Future Improvements

Possible future improvements include:

- Additional safe API coverage
- Additional regression scenarios
- Reusable helper utilities
- Authentication storage state
- Better reporting
- More QA documentation
- CI/CD integration when appropriate