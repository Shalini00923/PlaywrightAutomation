const { test, expect } = require('@playwright/test');

test.beforeEach(async ({ page }) => {
    console.log("Before Each Hook")
    await page.goto('/');
});

test('First test', async ({ page }) => {
    console.log('Running first test');
});

test('Second test', async ({ page }) => {
    console.log('Running second test');
});