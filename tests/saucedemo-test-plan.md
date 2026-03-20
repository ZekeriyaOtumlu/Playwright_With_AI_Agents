# Test Plan for SauceDemo Web Application

## Overview
This test plan covers the SauceDemo e-commerce demo application available at https://www.saucedemo.com/. The application simulates an online store with user authentication, product browsing, shopping cart functionality, and checkout process. The plan includes functional tests for happy paths, edge cases, and error handling scenarios.

## Test Environment
- URL: https://www.saucedemo.com/
- Browser: Chrome (latest version)
- Test Framework: Playwright
- Assumptions: Start each test from a fresh browser session with no prior state.

## User Flows
1. **Authentication Flow**: Login with valid/invalid credentials.
2. **Product Browsing Flow**: View products, filter/sort if available.
3. **Shopping Cart Flow**: Add/remove items from cart.
4. **Checkout Flow**: Complete purchase with form validation.
5. **Logout Flow**: End session.

## Test Scenarios

### Scenario 1: Successful Login
- **Description**: Verify that a user can log in with valid credentials.
- **Preconditions**: None.
- **Steps**:
  1. Navigate to https://www.saucedemo.com/.
  2. Enter valid username (e.g., "standard_user").
  3. Enter valid password (e.g., "secret_sauce").
  4. Click the "Login" button.
- **Expected Outcome**: User is redirected to the products page.
- **Success Criteria**: Products page loads with item list.
- **Failure Conditions**: Error message or no redirection.

### Scenario 2: Invalid Login - Wrong Username
- **Description**: Verify error handling for incorrect username.
- **Preconditions**: None.
- **Steps**:
  1. Navigate to https://www.saucedemo.com/.
  2. Enter invalid username (e.g., "invalid_user").
  3. Enter valid password (e.g., "secret_sauce").
  4. Click the "Login" button.
- **Expected Outcome**: Error message "Username and password do not match any user in this service" appears.
- **Success Criteria**: Login fails, user remains on login page.
- **Failure Conditions**: User logs in or different error.

### Scenario 3: Invalid Login - Wrong Password
- **Description**: Verify error handling for incorrect password.
- **Preconditions**: None.
- **Steps**:
  1. Navigate to https://www.saucedemo.com/.
  2. Enter valid username (e.g., "standard_user").
  3. Enter invalid password (e.g., "wrong_password").
  4. Click the "Login" button.
- **Expected Outcome**: Error message "Username and password do not match any user in this service" appears.
- **Success Criteria**: Login fails, user remains on login page.
- **Failure Conditions**: User logs in or different error.

### Scenario 4: Invalid Login - Empty Fields
- **Description**: Verify validation for empty username and password.
- **Preconditions**: None.
- **Steps**:
  1. Navigate to https://www.saucedemo.com/.
  2. Leave username and password fields empty.
  3. Click the "Login" button.
- **Expected Outcome**: Error message "Username is required" appears.
- **Success Criteria**: Login fails, user remains on login page.
- **Failure Conditions**: User logs in or no error.

### Scenario 5: Browse Products
- **Description**: Verify product listing and details.
- **Preconditions**: User is logged in.
- **Steps**:
  1. Log in with valid credentials.
  2. Verify products are displayed (e.g., 6 items).
  3. Click on a product name or image to view details.
- **Expected Outcome**: Product details page loads with description, price, and "Add to Cart" button.
- **Success Criteria**: All products visible, details accessible.
- **Failure Conditions**: Products not loading or details incorrect.

### Scenario 6: Add Item to Cart
- **Description**: Verify adding a single item to the cart.
- **Preconditions**: User is logged in.
- **Steps**:
  1. Log in with valid credentials.
  2. On products page, click "Add to Cart" for one item (e.g., "Sauce Labs Backpack").
  3. Verify cart icon shows "1".
- **Expected Outcome**: Item added, cart count updates.
- **Success Criteria**: Cart count increases, item appears in cart when viewed.
- **Failure Conditions**: Cart count not updating or item not added.

### Scenario 7: Add Multiple Items to Cart
- **Description**: Verify adding multiple items.
- **Preconditions**: User is logged in.
- **Steps**:
  1. Log in with valid credentials.
  2. Add two different items to cart.
  3. Verify cart icon shows "2".
- **Expected Outcome**: Both items in cart.
- **Success Criteria**: Cart count accurate, items listed.
- **Failure Conditions**: Incorrect count or missing items.

### Scenario 8: View Cart
- **Description**: Verify cart contents and removal.
- **Preconditions**: Items in cart.
- **Steps**:
  1. Log in and add an item to cart.
  2. Click the cart icon.
  3. Verify item details (name, price, quantity).
  4. Click "Remove" to remove the item.
- **Expected Outcome**: Cart shows items, removal works, cart empties.
- **Success Criteria**: Accurate display and removal functionality.
- **Failure Conditions**: Incorrect details or removal fails.

### Scenario 9: Checkout with Valid Data
- **Description**: Complete checkout process.
- **Preconditions**: Items in cart.
- **Steps**:
  1. Log in, add item to cart.
  2. Go to cart, click "Checkout".
  3. Enter first name (e.g., "John"), last name (e.g., "Doe"), zip code (e.g., "12345").
  4. Click "Continue".
  5. On overview page, click "Finish".
- **Expected Outcome**: Order confirmation page with "Thank you for your order!" message.
- **Success Criteria**: Checkout completes successfully.
- **Failure Conditions**: Errors during process.

### Scenario 10: Checkout with Invalid Data - Empty Fields
- **Description**: Verify validation on checkout form.
- **Preconditions**: Items in cart.
- **Steps**:
  1. Log in, add item, go to checkout.
  2. Leave fields empty, click "Continue".
- **Expected Outcome**: Error message "Error: First Name is required".
- **Success Criteria**: Form validation prevents continuation.
- **Failure Conditions**: Allows empty fields.

### Scenario 11: Checkout with Invalid Zip Code
- **Description**: Verify zip code validation.
- **Preconditions**: Items in cart.
- **Steps**:
  1. Log in, add item, go to checkout.
  2. Enter name, but invalid zip (e.g., letters).
  3. Click "Continue".
- **Expected Outcome**: Error message "Error: Postal Code is required" or similar.
- **Success Criteria**: Validation triggers.
- **Failure Conditions**: Accepts invalid zip.

### Scenario 12: Logout
- **Description**: Verify logout functionality.
- **Preconditions**: User is logged in.
- **Steps**:
  1. Log in.
  2. Click menu button (hamburger), select "Logout".
- **Expected Outcome**: Redirected to login page.
- **Success Criteria**: Session ends, back to login.
- **Failure Conditions**: Not logged out.

### Scenario 13: Sort Products
- **Description**: Verify product sorting (if available).
- **Preconditions**: User is logged in.
- **Steps**:
  1. Log in.
  2. Use sort dropdown to select "Price (low to high)".
- **Expected Outcome**: Products sorted by price ascending.
- **Success Criteria**: Correct order.
- **Failure Conditions**: Incorrect sorting.

### Scenario 14: Edge Case - Add Same Item Multiple Times
- **Description**: Verify handling of duplicate adds.
- **Preconditions**: User is logged in.
- **Steps**:
  1. Log in.
  2. Click "Add to Cart" multiple times on the same item.
- **Expected Outcome**: Quantity increases or prevents duplicate.
- **Success Criteria**: Cart handles quantity properly.
- **Failure Conditions**: Errors or incorrect quantity.

### Scenario 15: Cancel Checkout
- **Description**: Verify canceling checkout.
- **Preconditions**: In checkout process.
- **Steps**:
  1. Start checkout, enter data, click "Cancel".
- **Expected Outcome**: Back to cart.
- **Success Criteria**: Cancellation works.
- **Failure Conditions**: Does not cancel.

## Additional Notes
- All scenarios assume independent execution.
- Include visual checks for UI elements.
- Test on different screen sizes if responsive.
- Monitor for performance issues during load.