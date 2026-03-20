# Playwright With AI Agents Automation

## Overview
This repository contains a Playwright test automation suite for the SauceDemo web application (`https://www.saucedemo.com/`).
The suite uses AI agent-assisted planning and scripting. It includes:
- Test plan in `tests/saucedemo-test-plan.md`
- Playwright tests in `tests/saucedemo.spec.ts`
- AI-generated workflows and troubleshooting logs

## Tech Stack
- Node.js
- Playwright
- TypeScript
- GitHub Copilot / AI agent environment (VScode AI extension)

## Project Files
- `tests/saucedemo-test-plan.md` - manual test plan for SauceDemo scenarios
- `tests/saucedemo.spec.ts` - Playwright test implementation
- `playwright.config.ts` - Playwright configuration (existing)
- `README.md` - this file

## SauceDemo Scenarios Covered
1. Successful login
2. Invalid login (wrong username/password/empty fields)
3. Browse products
4. Add/remove products from cart
5. Checkout with valid and invalid data
6. Logout flow
7. Product sorting
8. Edge-case item repeat add
9. Cancel checkout

## Run Tests
Install dependencies:
```bash
npm install
npx playwright install
```
Run all tests:
```bash
npx playwright test
```
Run a specific file:
```bash
npx playwright test tests/saucedemo.spec.ts
```
Run in headed mode:
```bash
npx playwright test tests/saucedemo.spec.ts --headed
```

## Using AI Agent Workflow
- Start with test planning and scenario definitions in Markdown
- Generate initial test code with AI suggestions
- Validate using Playwright test run
- Investigate failures and adjust locators / assertions
- Copy code changes to `tests/saucedemo.spec.ts`

## Notes
- Keep browser sessions isolated for each test
- Use the known SauceDemo test credentials
  - username: `standard_user`
  - password: `secret_sauce`
- For “terminal tool” support in AI agent mode, configure VS Code AI extension settings


