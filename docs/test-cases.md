# QA Automation Test Cases

## 1. Document Overview

This document describes the automated test cases currently implemented in the Playwright + TypeScript QA automation portfolio.

Current automation coverage:

| Module | Tests |
|---|---:|
| Authentication | 4 |
| Dashboard | 2 |
| Segments | 4 |
| Templates | 5 |
| API Testing | 2 |
| Mobile Testing | 2 |
| **Total** | **19** |

Current full Chromium execution:

```text
19 passed
```

---

# 2. Authentication Test Cases

## TC-AUTH-001 — Unauthenticated User Redirect

**Module:** Authentication  
**Type:** Smoke  
**Tag:** `@smoke`  
**Priority:** High  

### Preconditions

- User is not authenticated
- CMS is accessible

### Steps

1. Open the Dashboard URL directly.
2. Wait for the application to process authentication.
3. Observe the resulting page.

### Expected Result

- User is redirected to the Login page.
- Login heading is visible.
- Email field is visible.
- Password field is visible.
- Login button is visible.

### Automated

Yes

---

## TC-AUTH-002 — Empty Login Field Validation

**Module:** Authentication  
**Type:** Regression / Negative  
**Tag:** `@regression`  
**Priority:** High  

### Preconditions

- Login page is accessible.

### Steps

1. Open the Login page.
2. Leave Email empty.
3. Leave Password empty.
4. Click the Login button.

### Expected Result

The following validation messages are displayed:

```text
Enter a valid email
Password is required
```

User should remain on the Login page.

### Automated

Yes

---

## TC-AUTH-003 — Valid Login Shows Workspace Selection

**Module:** Authentication  
**Type:** Smoke / Positive  
**Tag:** `@smoke`  
**Priority:** High  

### Preconditions

- Valid test credentials are configured in `.env`.
- CMS is accessible.

### Steps

1. Open the Login page.
2. Enter valid Email.
3. Enter valid Password.
4. Click Login.
5. Wait for authentication to complete.

### Expected Result

- Workspace selection page is displayed.
- `CHOOSE WORKSPACE` heading is visible.
- ISU workspace is visible.
- LNB workspace is visible.

### Automated

Yes

---

## TC-AUTH-004 — Invalid Login Credentials

**Module:** Authentication  
**Type:** Regression / Negative  
**Tag:** `@regression`  
**Priority:** High  

### Preconditions

- Login page is accessible.

### Steps

1. Open the Login page.
2. Enter an invalid test email.
3. Enter an incorrect password.
4. Click Login.

### Expected Result

- Login should not succeed.
- An authentication error message should be displayed.

### Automated

Yes

---

# 3. Dashboard Test Cases

## TC-DASH-001 — Dashboard Loads After Workspace Selection

**Module:** Dashboard  
**Type:** Smoke  
**Tag:** `@smoke`  
**Priority:** High  

### Preconditions

- Valid test credentials are available.
- User can access the ISU workspace.

### Steps

1. Login with valid credentials.
2. Wait for workspace selection.
3. Select ISU workspace.
4. Wait for Dashboard to load.

### Expected Result

- Dashboard URL is loaded.
- Dashboard navigation is available.
- Audience menu is visible.

### Automated

Yes

---

## TC-DASH-002 — Navigate From Dashboard to Segments

**Module:** Dashboard  
**Type:** Regression  
**Tag:** `@regression`  
**Priority:** Medium  

### Preconditions

- User is authenticated.
- ISU workspace is selected.
- Dashboard is loaded.

### Steps

1. Locate the Segments option in the Dashboard navigation.
2. Click Segments.
3. Wait for navigation.

### Expected Result

- URL changes to the Segments route.
- Segments heading is visible.

### Automated

Yes

---

# 4. Segments Test Cases

## TC-SEG-001 — Segments Page Opens Successfully

**Module:** Segments  
**Type:** Smoke  
**Tag:** `@smoke`  
**Priority:** High  

### Preconditions

- User is authenticated.
- ISU workspace is selected.

### Steps

1. Open the Segments page.
2. Wait for the page to load.

### Expected Result

- Segments page is displayed.
- Segments heading is visible.
- Create Segment option is available.

### Automated

Yes

---

## TC-SEG-002 — Create Segment Form Opens

**Module:** Segments  
**Type:** Regression  
**Tag:** `@regression`  
**Priority:** Medium  

### Preconditions

- User is authenticated.
- Segments page is accessible.

### Steps

1. Open the Segments page.
2. Click Create Segment.

### Expected Result

- Create Segment page opens.
- Create Segment heading is visible.
- Segment Name field is available.
- Description field is available.
- Create button is available.

### Automated

Yes

---

## TC-SEG-003 — Create New Test Segment

**Module:** Segments  
**Type:** Regression / Positive  
**Tag:** `@regression`  
**Priority:** High  

### Preconditions

- User is authenticated.
- Create Segment page is accessible.

### Test Data

A unique Segment name is generated:

```text
AUTO_QA_SEGMENT_<timestamp>
```

Description:

```text
Automated QA test segment created by Playwright
```

Filter example:

```text
User Attributes
Age
Equals
30
```

### Steps

1. Open Segments.
2. Click Create Segment.
3. Enter a unique Segment name.
4. Enter the test description.
5. Open Search Filter.
6. Select User Attributes.
7. Select Age.
8. Keep the Equals condition.
9. Enter `30`.
10. Click Create.
11. Wait for the Segments page.
12. Locate the newly created Segment.

### Expected Result

- Segment is created successfully.
- User returns to the Segments page.
- Newly generated Segment name is visible.

### Automated

Yes

---

## TC-SEG-004 — Required Fields Empty

**Module:** Segments  
**Type:** Regression / Negative  
**Tag:** `@regression`  
**Priority:** High  

### Preconditions

- User is authenticated.
- Create Segment page is accessible.

### Steps

1. Open Create Segment.
2. Leave required fields empty.
3. Click Create.

### Expected Result

- Segment should not be created.
- User remains on the Create Segment page.
- Segment Name remains empty.
- Create Segment heading remains visible.

### Automated

Yes

---

# 5. Templates Test Cases

## TC-TEMP-001 — Templates Page Opens Successfully

**Module:** Templates  
**Type:** Smoke  
**Tag:** `@smoke`  
**Priority:** High  

### Preconditions

- User is authenticated.
- ISU workspace is selected.

### Steps

1. Navigate to Templates.
2. Wait for the page to load.

### Expected Result

- Templates page opens successfully.
- Templates heading is visible.
- Create option is available.
- Search field is available.

### Automated

Yes

---

## TC-TEMP-002 — Create Template Form Opens

**Module:** Templates  
**Type:** Regression  
**Tag:** `@regression`  
**Priority:** Medium  

### Preconditions

- User is authenticated.
- Templates page is accessible.

### Steps

1. Open Templates.
2. Click Create.

### Expected Result

- Create Template page opens.
- Create Template heading is visible.
- Template Name field is available.
- Description field is available.
- Title field is available.
- Message field is available.
- Create button is available.

### Automated

Yes

---

## TC-TEMP-003 — Create Template With Test Data

**Module:** Templates  
**Type:** Regression / Positive  
**Tag:** `@regression`  
**Priority:** High  

### Preconditions

- User is authenticated.
- Create Template page is accessible.

### Test Data

Template Name:

```text
AUTO_QA_TEMPLATE_<timestamp>
```

Title:

```text
QA Automation Test Title
```

Message:

```text
This is a safe Playwright test template.
```

### Steps

1. Open Templates.
2. Click Create.
3. Enter a unique Template name.
4. Enter Template description.
5. Enter test Title.
6. Enter test Message.
7. Click Create.
8. Wait for Templates page.
9. Search using the generated Template name.
10. Verify the created Template is displayed.

### Expected Result

- Template is created successfully.
- User returns to Templates.
- Newly created Template can be found using Search.

### Automated

Yes

---

## TC-TEMP-004 — Empty Required Template Fields

**Module:** Templates  
**Type:** Regression / Negative  
**Tag:** `@regression`  
**Priority:** High  

### Preconditions

- Create Template page is accessible.

### Steps

1. Open Create Template.
2. Leave required fields empty.
3. Click Create.

### Expected Result

- Template should not be created.
- User remains on Create Template page.
- Template Name remains empty.
- Create Template heading remains visible.

### Automated

Yes

---

## TC-TEMP-005 — Only Template Name Provided

**Module:** Templates  
**Type:** Regression / Negative  
**Tag:** `@regression`  
**Priority:** High  

### Preconditions

- Create Template page is accessible.

### Test Data

```text
AUTO_QA_INCOMPLETE_TEMPLATE_<timestamp>
```

### Steps

1. Open Create Template.
2. Enter only Template Name.
3. Leave Title empty.
4. Leave Message empty.
5. Click Create.

### Expected Result

- Template should not be created.
- User remains on Create Template page.
- Create Template heading remains visible.

### Automated

Yes

---

# 6. API Test Cases

## TC-API-001 — Templates GET API Validation

**Module:** API Testing  
**Type:** Smoke / API  
**Tag:** `@smoke`  
**Priority:** High  

### API Type

```text
GET
```

### Preconditions

- User is authenticated.
- Templates page is accessible.

### Steps

1. Prepare a listener for the Templates GET network response.
2. Navigate to Templates.
3. Capture the Templates response.
4. Verify HTTP method.
5. Verify HTTP status.
6. Parse response body.
7. Verify expected response properties.
8. Verify `data` is an array.

### Expected Result

- Request method is `GET`.
- Response status is `200`.
- Response contains:

```text
success
data
meta
```

- `data` is an array.

### Safety

This is a read-only API validation.

No POST, PUT, PATCH, or DELETE request is performed.

### Automated

Yes

---

## TC-API-002 — Segments GET API Validation

**Module:** API Testing  
**Type:** Smoke / API  
**Tag:** `@smoke`  
**Priority:** High  

### API Type

```text
GET
```

### Preconditions

- User is authenticated.
- Segments page is accessible.

### Steps

1. Prepare a listener for the Segments GET network response.
2. Navigate to Segments.
3. Capture the response.
4. Verify HTTP method.
5. Verify HTTP status.
6. Parse the response body.
7. Verify expected response properties.
8. Verify `data` is an array.
9. Verify pagination metadata.

### Expected Result

- Request method is `GET`.
- Response status is `200`.
- Response contains:

```text
data
meta
```

- `data` is an array.
- `meta` contains:

```text
page
limit
total
```

### Safety

This is a read-only API validation.

No POST, PUT, PATCH, or DELETE request is performed.

### Automated

Yes

---

# 7. Mobile Test Cases

## TC-MOB-001 — Login Page Mobile Viewport

**Module:** Mobile Testing  
**Type:** Smoke / Responsive  
**Tag:** `@smoke`  
**Priority:** Medium  

### Viewport

```text
390 × 844
```

### Preconditions

- Login page is accessible.

### Steps

1. Set browser viewport to 390 × 844.
2. Open Login page.
3. Verify Login heading.
4. Verify Email field.
5. Verify Password field.
6. Verify Login button.
7. Verify Email field is inside the viewport.
8. Verify Password field is inside the viewport.
9. Verify Login button is inside the viewport.

### Expected Result

- Login page displays correctly on the mobile viewport.
- Important Login elements are visible.
- Important Login elements remain inside the viewport.

### Automated

Yes

---

## TC-MOB-002 — Valid Login on Mobile Viewport

**Module:** Mobile Testing  
**Type:** Regression / Responsive  
**Tag:** `@regression`  
**Priority:** Medium  

### Viewport

```text
390 × 844
```

### Preconditions

- Valid test credentials are configured.
- Login page is accessible.

### Steps

1. Set viewport to 390 × 844.
2. Open Login page.
3. Enter valid Email.
4. Enter valid Password.
5. Click Login.
6. Wait for workspace selection.
7. Verify workspace selection heading.
8. Verify ISU workspace.
9. Verify LNB workspace.

### Expected Result

- Login succeeds.
- Workspace selection is displayed on the mobile viewport.
- ISU workspace is visible.
- LNB workspace is visible.

### Automated

Yes

---

# 8. Test Execution Summary

Current automated tests:

```text
Authentication Tests : 4
Dashboard Tests      : 2
Segments Tests       : 4
Templates Tests      : 5
API Tests            : 2
Mobile Tests         : 2
------------------------
Total                : 19
```

Classification:

```text
Smoke Tests      : 8
Regression Tests : 11
Total            : 19
```

---

# 9. Browser Validation

Current smoke test results:

```text
Chromium : 8 passed
Firefox  : 8 passed
WebKit   : 8 passed
```

Current complete Chromium suite:

```text
19 passed
```

---

# 10. Test Data and Security

The following practices are used:

- Test credentials are stored locally in `.env`
- `.env` is excluded from Git
- Credentials are not hardcoded
- Authentication tokens are not stored in source code
- Unique test data uses timestamps
- API tests are read-only
- No notifications are sent
- Event Triggers are excluded from automation
- Push Content is excluded from automation
- Confidential company source code is not included

---

# 11. Test Case Status

| Test Case ID | Module | Type | Status |
|---|---|---|---|
| TC-AUTH-001 | Authentication | Smoke | Passed |
| TC-AUTH-002 | Authentication | Regression | Passed |
| TC-AUTH-003 | Authentication | Smoke | Passed |
| TC-AUTH-004 | Authentication | Regression | Passed |
| TC-DASH-001 | Dashboard | Smoke | Passed |
| TC-DASH-002 | Dashboard | Regression | Passed |
| TC-SEG-001 | Segments | Smoke | Passed |
| TC-SEG-002 | Segments | Regression | Passed |
| TC-SEG-003 | Segments | Regression | Passed |
| TC-SEG-004 | Segments | Regression | Passed |
| TC-TEMP-001 | Templates | Smoke | Passed |
| TC-TEMP-002 | Templates | Regression | Passed |
| TC-TEMP-003 | Templates | Regression | Passed |
| TC-TEMP-004 | Templates | Regression | Passed |
| TC-TEMP-005 | Templates | Regression | Passed |
| TC-API-001 | API | Smoke | Passed |
| TC-API-002 | API | Smoke | Passed |
| TC-MOB-001 | Mobile | Smoke | Passed |
| TC-MOB-002 | Mobile | Regression | Passed |

---

# 12. Overall Status

```text
Total Automated Tests : 19
Passed                : 19
Failed                : 0
```

Current portfolio automation status:

**PASS**