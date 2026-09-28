# QA Automation Test Plan

## 1. Project Overview

This project is a Playwright + TypeScript QA automation portfolio based on a CMS / Admin Dashboard workflow.

The purpose of this test plan is to define the current automation scope, testing approach, supported browsers, test coverage, execution process, and safety rules used in the project.

---

## 2. Objectives

The main objectives are:

- Validate important CMS user flows
- Verify authentication behavior
- Verify workspace selection
- Verify Dashboard functionality
- Verify Dashboard navigation
- Verify Segments functionality
- Verify Templates functionality
- Validate safe read-only API responses
- Verify basic mobile responsiveness
- Validate important smoke scenarios across multiple browser engines
- Maintain reusable and readable Playwright automation
- Demonstrate practical QA automation and documentation skills

---

## 3. Test Scope

### In Scope

The current automation covers:

- Authentication
- Workspace selection
- Dashboard
- Dashboard to Segments navigation
- Dashboard to Templates navigation
- Segments
- Templates
- Read-only API validation
- Mobile viewport validation
- Cross-browser smoke testing
- Positive testing
- Negative testing
- Functional testing
- Responsive testing

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

Smoke tests are used for important application flows such as:

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

---

### Regression Testing

Regression tests are used for deeper functional and negative scenarios such as:

- Invalid login
- Required-field validation
- Dashboard navigation
- Segment creation
- Template creation
- Incomplete form submission
- Mobile login flow

Current regression tests:

```text
12
```

---

### Positive Testing

Positive scenarios include:

- Successful login
- Successful workspace selection
- Successful Dashboard loading
- Successful navigation to Segments
- Successful navigation to Templates
- Successful Segment creation
- Successful Template creation
- Successful API responses
- Successful mobile login flow

---

### Negative Testing

Negative scenarios include:

- Empty login fields
- Invalid login credentials
- Missing required Segment fields
- Missing required Template fields
- Incomplete Template form submission

---

### Responsive Testing

Responsive testing includes:

- Mobile login page validation
- Mobile field visibility
- Mobile button visibility
- Mobile viewport checks
- Mobile workspace selection

---

### API Testing

API testing currently validates safe, read-only GET responses.

Validation includes:

- Request method
- HTTP status
- Response structure
- Array validation
- Pagination metadata

---

## 5. Current Automated Test Coverage

| Module | Tests |
|---|---:|
| Authentication | 4 |
| Dashboard | 3 |
| Segments | 4 |
| Templates | 5 |
| API Testing | 2 |
| Mobile Testing | 2 |
| **Total** | **20** |

Current full Chromium execution:

```text
20 passed
```

---

## 6. Authentication Coverage

Current authentication scenarios include:

- Unauthenticated user is redirected to Login
- Empty Login fields show validation
- Valid Login reaches workspace selection
- Invalid Login displays an error message

Authentication test count:

```text
4
```

---

## 7. Dashboard Coverage

Current Dashboard scenarios include:

- Verify Dashboard loads after selecting the ISU workspace
- Verify navigation from Dashboard to Segments
- Verify navigation from Dashboard to Templates

Dashboard test count:

```text
3
```

---

## 8. Segments Coverage

Current Segment scenarios include:

- Verify Segments page opens successfully
- Verify Create Segment form opens
- Create a Segment using automated test data
- Verify required-field behavior when fields are empty

Example automated test data:

```text
AUTO_QA_SEGMENT_<timestamp>
```

Segment test count:

```text
4
```

---

## 9. Templates Coverage

Current Template scenarios include:

- Verify Templates page opens successfully
- Verify Create Template form opens
- Create and verify a Template using test data
- Verify required-field behavior when fields are empty
- Verify incomplete Template form cannot be submitted successfully

Example automated test data:

```text
AUTO_QA_TEMPLATE_<timestamp>
```

Template test count:

```text
5
```

---

## 10. Browser Coverage

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

The complete automation suite is currently validated in Chromium.

Current Chromium result:

```text
20 passed
```

---

## 11. Mobile Coverage

Mobile tests use the following viewport:

```text
390 × 844
```

Current mobile scenarios include:

- Verify Login page displays correctly
- Verify Email field is visible
- Verify Password field is visible
- Verify Login button is visible
- Verify important elements remain inside the viewport
- Verify successful Login reaches workspace selection
- Verify ISU workspace remains visible
- Verify LNB workspace remains visible

Mobile test count:

```text
2
```

---

## 12. API Coverage

API testing is currently read-only.

### Templates API

Validations include:

- GET request method
- HTTP 200 status
- Expected response properties
- Data array validation

Expected top-level response properties:

```text
success
data
meta
```

---

### Segments API

Validations include:

- GET request method
- HTTP 200 status
- Expected response properties
- Data array validation
- Pagination metadata validation

Expected pagination properties:

```text
page
limit
total
```

No POST, PUT, PATCH, or DELETE API tests are performed.

API test count:

```text
2
```

---

## 13. Automation Framework

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
- Mobile viewport configuration
- HTML reports
- Playwright traces
- Git
- GitHub

---

## 14. Page Object Model

The project uses Page Object Model to keep UI locators and reusable actions separate from test files.

Current page objects include:

```text
LoginPage
WorkspacePage
DashboardPage
SegmentsPage
TemplatesPage
```

Benefits include:

- Reduced code duplication
- Easier locator maintenance
- Cleaner test files
- Better test readability
- Reusable page actions

---

## 15. Authentication Fixture

Authenticated tests use a custom Playwright fixture.

The authentication flow is:

```text
Login
→ Enter valid test credentials
→ Choose workspace
→ Select ISU workspace
→ Dashboard
```

The fixture allows authenticated tests to start with a ready authenticated page instead of repeating the Login flow in each test.

---

## 16. Test Data

Automated test data uses unique QA-friendly names.

Examples:

```text
AUTO_QA_SEGMENT_<timestamp>
AUTO_QA_TEMPLATE_<timestamp>
```

Using timestamps reduces conflicts between repeated test executions.

Test data should remain:

- Sanitized
- Non-sensitive
- Clearly identifiable as QA automation data
- Safe for repeated execution

---

## 17. Environment Configuration

Environment-specific values are stored locally in:

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

Credentials should never be committed to the repository.

---

## 18. Security and Safety Rules

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

## 19. Test Execution

### Run Full Chromium Suite

```bash
npm run test:chromium
```

Current expected result:

```text
20 passed
```

---

### Run Smoke Tests

```bash
npm run test:smoke
```

Current smoke test count:

```text
8
```

---

### Run Regression Tests

```bash
npm run test:regression
```

Current regression test count:

```text
12
```

---

### Run Tests in Headed Mode

```bash
npm run test:headed
```

---

### Run Firefox Smoke Tests

```bash
npm run test:smoke:firefox
```

Current result:

```text
8 passed
```

---

### Run WebKit Smoke Tests

```bash
npm run test:smoke:webkit
```

Current result:

```text
8 passed
```

---

### Run API Tests

```bash
npx playwright test tests/api/api.spec.ts --project=chromium --workers=1
```

Current result:

```text
2 passed
```

---

### Run Mobile Tests

```bash
npx playwright test tests/mobile/mobile.spec.ts --project=chromium --workers=1
```

Current result:

```text
2 passed
```

---

## 20. Entry Criteria

Testing can begin when:

- CMS is accessible
- Test environment is available
- Valid test credentials are configured locally
- Required Playwright browsers are installed
- Node.js dependencies are installed
- Network connection is stable
- Required test workspace is available

---

## 21. Exit Criteria

The current automation run is considered successful when:

- All planned tests execute
- Smoke tests pass
- Regression tests pass
- API checks pass
- Mobile tests pass
- No unexpected application errors block testing
- No environment or network issue affects execution

For the current Chromium suite, the expected successful result is:

```text
20 passed
0 failed
```

---

## 22. Known External Risks

Possible external issues include:

- Internet connection interruptions
- Test environment downtime
- Slow API responses
- Temporary CMS loading delays
- Authentication service delays
- Changes in UI locators
- Changes in API response structure
- Changes in test data
- Changes in workspace availability

Environment failures should be separated from actual application defects.

For example:

```text
net::ERR_INTERNET_DISCONNECTED
```

is an environment/network issue rather than an application test failure.

---

## 23. Reporting

Test results are available through:

- Terminal output
- Playwright HTML report
- Playwright screenshots on failure
- Playwright error context
- Playwright traces when configured

To open the HTML report:

```bash
npm run report
```

or:

```bash
npx playwright show-report
```

---

## 24. QA Documentation

The portfolio includes:

```text
docs/test-plan.md
docs/test-cases.md
docs/bug-samples.md
```

These documents demonstrate:

- Test planning
- Test case writing
- Test coverage documentation
- Defect reporting
- Severity and priority understanding
- Automation documentation

---

## 25. Current Test Summary

```text
Authentication Tests : 4
Dashboard Tests      : 3
Segments Tests       : 4
Templates Tests      : 5
API Tests            : 2
Mobile Tests         : 2
------------------------
Total                : 20
```

Classification:

```text
Smoke Tests      : 8
Regression Tests : 12
Total            : 20
```

Browser validation:

```text
Chromium Full Suite : 20 passed
Chromium Smoke      : 8 passed
Firefox Smoke       : 8 passed
WebKit Smoke        : 8 passed
```

---

## 26. Future Improvements

Possible future improvements include:

- Additional safe API coverage
- Additional regression scenarios
- More reusable test utilities
- Authentication storage state
- Improved reporting
- Additional QA documentation
- Test data cleanup strategy
- CI/CD integration when appropriate