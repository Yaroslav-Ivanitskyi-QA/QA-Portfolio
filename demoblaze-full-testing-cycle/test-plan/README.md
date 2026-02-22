# Test Plan Demoblaze.com

## 🔹 Introduction
- This document describes the testing method for the web application https://www.demoblaze.com/
- The purpose of this testing activity is validate business functionality of the application, focusing on user login and purchase flow

## 🔹 Objectives
- Validate login functionality (positive and negative scenarios)
- Verify product selection and cart behavior
- Validate order placement process
- Identify functional defects
- Automate critical user experience using Playwright

## 🔹 In Scope
- Login (valid and invalid credentials)
- Add product to cart
- Cart validation
- Place order
- Order confirmation message
- Error handling (alerts, invalid input)

## 🔹 Out of Scope
- Performance testing
- Cross-browser testing (only chrome)

## 🔹 Test Types
The following types of testing will be performed:
- Manual functional testing
- Exploratory testing
- Automated E2E testing (Playwright, TypeScript)
- Basic API validation (if applicable)

## 🔹 Test Environment
- OS: Windows 11
- Browser: Chromium (Playwright)
- Automation Framework: Playwright (TypeScript)
- Version control: GitHub
- IDE: VS Code

## 🔹 Test Strategy
- Identify critical business flow (Login + Purchase).
- Prepare manual test cases.
- Execute manual tests.
- Implement automated tests for high-priority scenarios.
- Validate error handling (invalid credentials, alerts).
- Generate test reports.

## 🔹 Entry Criteria
- Application is accessible.
- Test environment is configured.
- Test data is prepared.

## 🔹 Exit Criteria
- All critical test scenarios executed
- No critical defects remain open
- Automation tests pass successfully

## 🔹 Risks
- Dynamic browser alerts may cause unstable automation.
- UI locator changes.
- Application instability.

## 🔹 Deliverables
- Test Plan document
- Manual test cases
- Automated test suite
- Test execution report
- Bug reports (if any)


----------------------------------------------------------

📌 This project demonstrates structured test documentation, bug reporting skills and understanding of QA workflow.
