const { test, expect } = require('@playwright/test');

test('Open Google', async ({ page }) => {
    await page.goto('https://www.amazon.in/');
    await page.locator("twotabsearchtextbox").fill("Laptop");
});