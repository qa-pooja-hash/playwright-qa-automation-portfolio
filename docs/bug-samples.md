# Sample QA Bug Reports

## 1. Document Overview

This document contains sample bug reports written in a professional QA format.

The examples are based on common CMS / Admin Dashboard testing scenarios and are written using sanitized, portfolio-friendly data.

These examples demonstrate:

- Clear bug titles
- Reproduction steps
- Expected result
- Actual result
- Severity and priority
- Environment details
- Test evidence
- QA communication style

---

# BUG-001 — Login Form Allows Submission With Empty Required Fields

**Module:** Authentication  
**Severity:** Major  
**Priority:** High  
**Status:** Open  
**Type:** Functional / Validation  

## Environment

- Application: CMS / Admin Dashboard
- Browser: Chromium
- Platform: Desktop
- Test Type: Manual / Automated Validation

## Preconditions

- User is on the Login page.

## Steps to Reproduce

1. Open the Login page.
2. Leave the Email field empty.
3. Leave the Password field empty.
4. Click the Login button.

## Expected Result

The application should prevent login submission and display validation messages for both required fields.

Example:

```text
Enter a valid email
Password is required
```

## Actual Result

The form submission proceeds without displaying the required validation messages.

## Impact

Users may not receive clear guidance about missing required information.

## Suggested QA Evidence

- Screenshot of Login page after clicking Login
- Console logs if relevant
- Playwright failure screenshot
- Test execution result

---

# BUG-002 — Invalid Login Does Not Show Clear Error Message

**Module:** Authentication  
**Severity:** Major  
**Priority:** High  
**Status:** Open  
**Type:** Functional / Error Handling  

## Environment

- Application: CMS / Admin Dashboard
- Browser: Chromium
- Platform: Desktop

## Preconditions

- Login page is accessible.

## Steps to Reproduce

1. Open the Login page.
2. Enter an invalid email.
3. Enter an incorrect password.
4. Click Login.

## Expected Result

The application should reject authentication and display a clear error message such as:

```text
Invalid credentials
```

or another user-friendly authentication error.

## Actual Result

Login fails, but no clear error message is displayed to the user.

## Impact

Users may not understand why login failed.

---

# BUG-003 — Segment Can Be Created Without Required Information

**Module:** Segments  
**Severity:** Critical  
**Priority:** High  
**Status:** Open  
**Type:** Functional / Validation  

## Environment

- Application: CMS / Admin Dashboard
- Browser: Chromium
- User Role: Authorized test user

## Preconditions

- User is authenticated.
- User has access to Segments.

## Steps to Reproduce

1. Open Segments.
2. Click Create Segment.
3. Leave required fields empty.
4. Click Create.

## Expected Result

The application should prevent Segment creation and display validation for all required fields.

## Actual Result

A Segment is created even though required information is missing.

## Impact

Invalid Segment records may be created in the system.

This can affect data quality and downstream workflows.

---

# BUG-004 — Newly Created Segment Is Not Visible in Segment List

**Module:** Segments  
**Severity:** Major  
**Priority:** High  
**Status:** Open  
**Type:** Functional / Data Display  

## Preconditions

- User is authenticated.
- Segment creation is available.

## Test Data

```text
AUTO_QA_SEGMENT_<timestamp>
```

## Steps to Reproduce

1. Open Segments.
2. Create a new Segment with valid test data.
3. Complete the creation process.
4. Return to the Segments list.
5. Search for the newly created Segment.

## Expected Result

The newly created Segment should appear in the Segment list.

## Actual Result

Segment creation succeeds, but the new Segment is not visible in the list.

## Impact

Users may think Segment creation failed or may create duplicate records.

---

# BUG-005 — Template Can Be Created With Missing Required Content

**Module:** Templates  
**Severity:** Major  
**Priority:** High  
**Status:** Open  
**Type:** Functional / Validation  

## Preconditions

- User is authenticated.
- Create Template page is accessible.

## Steps to Reproduce

1. Open Templates.
2. Click Create.
3. Enter only Template Name.
4. Leave Title empty.
5. Leave Message empty.
6. Click Create.

## Expected Result

The Template should not be created.

Validation should be displayed for the missing required fields.

## Actual Result

The application allows the Template to be created with incomplete data.

## Impact

Incomplete templates may be stored and later used incorrectly.

---

# BUG-006 — Created Template Does Not Appear in Search Results

**Module:** Templates  
**Severity:** Major  
**Priority:** Medium  
**Status:** Open  
**Type:** Functional / Search  

## Preconditions

- User is authenticated.
- User has created a new Template.

## Test Data

```text
AUTO_QA_TEMPLATE_<timestamp>
```

## Steps to Reproduce

1. Create a new Template.
2. Return to the Templates page.
3. Enter the generated Template name in Search.
4. Observe the results.

## Expected Result

The newly created Template should be displayed in Search results.

## Actual Result

No matching Template is displayed.

## Impact

Users may not be able to find recently created Templates.

---

# BUG-007 — Templates API Returns Unexpected Response Structure

**Module:** API  
**Severity:** Major  
**Priority:** Medium  
**Status:** Open  
**Type:** API / Contract  

## Request Type

```text
GET
```

## Preconditions

- User is authenticated.
- Templates page is accessible.

## Steps to Reproduce

1. Navigate to Templates.
2. Capture the Templates GET API response.
3. Inspect the JSON response structure.

## Expected Result

The response should contain the expected contract:

```text
success
data
meta
```

The `data` property should be an array.

## Actual Result

One or more expected response properties are missing or use an unexpected data type.

## Impact

Frontend functionality or automation relying on the expected contract may fail.

---

# BUG-008 — Segments API Pagination Metadata Missing

**Module:** API  
**Severity:** Major  
**Priority:** Medium  
**Status:** Open  
**Type:** API / Contract  

## Request Type

```text
GET
```

## Preconditions

- User is authenticated.
- Segments page is accessible.

## Steps to Reproduce

1. Navigate to Segments.
2. Capture the Segments GET API response.
3. Inspect the `meta` object.

## Expected Result

The `meta` object should contain:

```text
page
limit
total
```

## Actual Result

One or more pagination properties are missing.

## Impact

Pagination controls may not work correctly or may display incorrect information.

---

# BUG-009 — Login Button Is Outside Mobile Viewport

**Module:** Mobile / Responsive  
**Severity:** Major  
**Priority:** High  
**Status:** Open  
**Type:** UI / Responsive  

## Environment

- Browser: Chromium
- Viewport:

```text
390 × 844
```

## Preconditions

- Login page is accessible.

## Steps to Reproduce

1. Set browser viewport to 390 × 844.
2. Open Login page.
3. Observe the Login form.

## Expected Result

The Login button should be visible and fully inside the viewport.

## Actual Result

The Login button is partially or completely outside the visible viewport.

## Impact

Mobile users may have difficulty accessing the Login action.

---

# BUG-010 — Workspace Selection Is Not Usable on Mobile Viewport

**Module:** Mobile / Responsive  
**Severity:** Major  
**Priority:** High  
**Status:** Open  
**Type:** UI / Responsive  

## Environment

- Browser: Chromium
- Viewport:

```text
390 × 844
```

## Preconditions

- Valid test credentials are available.

## Steps to Reproduce

1. Open Login page at mobile viewport.
2. Login with valid credentials.
3. Wait for Workspace Selection.
4. Observe available workspace options.

## Expected Result

- Workspace heading should be visible.
- Workspace options should be visible and usable.
- Important controls should fit within the mobile viewport.

## Actual Result

One or more workspace options are not visible or cannot be accessed properly.

## Impact

Mobile users may be unable to continue to the Dashboard.

---

# Bug Report Template

The following template can be used for future bugs:

```text
Bug ID:
Title:

Module:
Severity:
Priority:
Status:
Type:

Environment:

Preconditions:

Steps to Reproduce:
1.
2.
3.

Expected Result:

Actual Result:

Impact:

Evidence:
- Screenshot
- Video
- Console logs
- Network logs
- Test report
```

---

# Severity Guidelines

## Critical

Use when:

- Core functionality is completely blocked
- Data corruption is possible
- Security-sensitive functionality is affected
- No reasonable workaround exists

## Major

Use when:

- Important functionality does not work correctly
- Main user workflow is affected
- A workaround may exist

## Minor

Use when:

- Small UI or usability issue
- Main functionality still works
- Limited user impact

---

# Priority Guidelines

## High

Should be fixed quickly because the issue affects an important workflow.

## Medium

Should be fixed in a normal development cycle.

## Low

Can be planned for a later release if business impact is limited.

---

# Portfolio Note

These are sample bug reports created to demonstrate QA documentation skills.

They use sanitized examples and do not expose confidential company information, credentials, authentication tokens, or sensitive application data.