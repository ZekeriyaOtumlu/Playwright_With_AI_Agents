import { test, expect } from '@playwright/test';

test.describe('SauceDemo Tests', () => {
  test('Successful Login', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    await page.fill('#user-name', 'standard_user');
    await page.fill('#password', 'secret_sauce');
    await page.click('#login-button');
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
  });

  test('Invalid Login - Wrong Username', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    await page.fill('#user-name', 'invalid_user');
    await page.fill('#password', 'secret_sauce');
    await page.click('#login-button');
    await expect(page.locator('[data-test="error"]')).toContainText('Username and password do not match any user in this service');
  });

  test('Invalid Login - Wrong Password', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    await page.fill('#user-name', 'standard_user');
    await page.fill('#password', 'wrong_password');
    await page.click('#login-button');
    await expect(page.locator('[data-test="error"]')).toContainText('Username and password do not match any user in this service');
  });

  test('Invalid Login - Empty Fields', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    await page.click('#login-button');
    await expect(page.locator('[data-test="error"]')).toContainText('Username is required');
  });

  test('Browse Products', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    await page.fill('#user-name', 'standard_user');
    await page.fill('#password', 'secret_sauce');
    await page.click('#login-button');
    await expect(page.locator('.inventory_item')).toHaveCount(6);
    await page.click('.inventory_item_name');
    await expect(page).toHaveURL(/inventory-item/);
  });

  test('Add Item to Cart', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    await page.fill('#user-name', 'standard_user');
    await page.fill('#password', 'secret_sauce');
    await page.click('#login-button');
    await page.click('[data-test="add-to-cart-sauce-labs-backpack"]');
    await expect(page.locator('.shopping_cart_badge')).toContainText('1');
  });

  test('Add Multiple Items to Cart', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    await page.fill('#user-name', 'standard_user');
    await page.fill('#password', 'secret_sauce');
    await page.click('#login-button');
    await page.click('[data-test="add-to-cart-sauce-labs-backpack"]');
    await page.click('[data-test="add-to-cart-sauce-labs-bike-light"]');
    await expect(page.locator('.shopping_cart_badge')).toContainText('2');
  });

  test('View Cart', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    await page.fill('#user-name', 'standard_user');
    await page.fill('#password', 'secret_sauce');
    await page.click('#login-button');
    await page.click('[data-test="add-to-cart-sauce-labs-backpack"]');
    await page.click('.shopping_cart_link');
    await expect(page.locator('.cart_item')).toHaveCount(1);
    await page.click('[data-test="remove-sauce-labs-backpack"]');
    await expect(page.locator('.cart_item')).toHaveCount(0);
  });

  test('Checkout with Valid Data', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    await page.fill('#user-name', 'standard_user');
    await page.fill('#password', 'secret_sauce');
    await page.click('#login-button');
    await page.click('[data-test="add-to-cart-sauce-labs-backpack"]');
    await page.click('.shopping_cart_link');
    await page.click('[data-test="checkout"]');
    await page.fill('[data-test="firstName"]', 'John');
    await page.fill('[data-test="lastName"]', 'Doe');
    await page.fill('[data-test="postalCode"]', '12345');
    await page.click('[data-test="continue"]');
    await page.click('[data-test="finish"]');
    await expect(page.locator('.complete-header')).toContainText('Thank you for your order!');
  });

  test('Checkout with Invalid Data - Empty Fields', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    await page.fill('#user-name', 'standard_user');
    await page.fill('#password', 'secret_sauce');
    await page.click('#login-button');
    await page.click('[data-test="add-to-cart-sauce-labs-backpack"]');
    await page.click('.shopping_cart_link');
    await page.click('[data-test="checkout"]');
    await page.click('[data-test="continue"]');
    await expect(page.locator('[data-test="error"]')).toContainText('First Name is required');
  });

  test('Checkout with Invalid Zip Code', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    await page.fill('#user-name', 'standard_user');
    await page.fill('#password', 'secret_sauce');
    await page.click('#login-button');
    await page.click('[data-test="add-to-cart-sauce-labs-backpack"]');
    await page.click('.shopping_cart_link');
    await page.click('[data-test="checkout"]');
    await page.fill('[data-test="firstName"]', 'John');
    await page.fill('[data-test="lastName"]', 'Doe');
    await page.fill('[data-test="postalCode"]', '');
    await page.click('[data-test="continue"]');
    await expect(page.locator('[data-test="error"]')).toContainText('Postal Code is required');
  });

  test('Logout', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    await page.fill('#user-name', 'standard_user');
    await page.fill('#password', 'secret_sauce');
    await page.click('#login-button');
    await page.click('#react-burger-menu-btn');
    await page.click('#logout_sidebar_link');
    await expect(page).toHaveURL('https://www.saucedemo.com/');
  });

  test('Sort Products', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    await page.fill('#user-name', 'standard_user');
    await page.fill('#password', 'secret_sauce');
    await page.click('#login-button');
    await page.selectOption('.product_sort_container', 'lohi');
    // Assume first item is cheapest
    await expect(page.locator('.inventory_item_price').first()).toContainText('$7.99');
  });

  test('Add Same Item Multiple Times', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    await page.fill('#user-name', 'standard_user');
    await page.fill('#password', 'secret_sauce');
    await page.click('#login-button');
    await page.click('[data-test="add-to-cart-sauce-labs-backpack"]');
    await expect(page.locator('.shopping_cart_badge')).toContainText('1'); // SauceDemo doesn't increase quantity
  });

  test('Cancel Checkout', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    await page.fill('#user-name', 'standard_user');
    await page.fill('#password', 'secret_sauce');
    await page.click('#login-button');
    await page.click('[data-test="add-to-cart-sauce-labs-backpack"]');
    await page.click('.shopping_cart_link');
    await page.click('[data-test="checkout"]');
    await page.fill('[data-test="firstName"]', 'John');
    await page.click('[data-test="cancel"]');
    await expect(page).toHaveURL('https://www.saucedemo.com/cart.html');
  });
});