const { expect, test } = require('@playwright/test');
let fePage = 'http://localhost:3000',
    appUser = 'peter@abv.bg',
    appPassword = '123456';

// I. Tests before Login
// Test 1:
test('Verify "All Books" link is visible', async ({page}) => {
    await page.goto(fePage);
    await page.waitForSelector("nav.navbar");
    const allBooksLink = await page.$('a[href="/catalog"]');
    const isAllBooksLinkVisible = await allBooksLink.isVisible();
    expect(isAllBooksLinkVisible).toBe(true);
})
// Test 2:
test('Verify "Login button" is visible', async ({page}) => {
    await page.goto(fePage);
    await page.waitForSelector("nav.navbar");
    const loginButton = await page.$('a[href="/login"]');
    const isLoginButtonVisible = await loginButton.isVisible();
    expect(isLoginButtonVisible).toBe(true);
})
// Test 2.1:
test('Verify "Register button" is visible', async ({page}) => {
    await page.goto(fePage);
    await page.waitForSelector("nav.navbar");
    const registerButton = await page.$('a[href="/register"]');
    const isRegisterButtonVisible = await registerButton.isVisible();
    expect(isRegisterButtonVisible).toBe(true);
})

// II. Tests after successful Login
// Test 3:
test('Verify "All Books" is visible after user login', async ({page}) => {
    await page.goto(fePage);
    await page.waitForSelector("nav.navbar");
    await page.click('a[href="/login"]');
    await page.fill("#email", appUser);
    await page.fill("#password", appPassword);
    await page.click("input[type='submit']");
// Check if Logout buttons shows up
    const logoutButton = await page.$('#logoutBtn');
    const isLogoutButtonVisible = await logoutButton.isVisible();
    expect(isLogoutButtonVisible).toBe(true);
// Check if All Books is visible
    const allBooksLink = await page.$('a[href="/catalog"]');
    const isAllBooksLinkVisible = await allBooksLink.isVisible();
    expect(isAllBooksLinkVisible).toBe(true);
})

// Test 4: Login with valid credentials
// Test 5: Login with empty credentials
// Test 6: Add book with correct data
// Test 7: Add book with empty title field
// Test 8: Login and verify all books are displayed
// Test 9: Login and navigate to Details page
// Test 10: 
test('Verify visibility of "Logout" button after user login', async ({page}) => {
    await page.goto(fePage);
    await page.waitForSelector("nav.navbar");
    await page.click('a[href="/login"]');
    await page.fill("#email", appUser);
    await page.fill("#password", appPassword);
    await page.click("input[type='submit']");
    const logoutButton = await page.$('#logoutBtn');
    const isLogoutButtonVisible = await logoutButton.isVisible();
    expect(isLogoutButtonVisible).toBe(true);
})

// Test 11: Verify redirection Logout link after user login