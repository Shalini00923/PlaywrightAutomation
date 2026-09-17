const { test, expect } = require("@playwright/test");

test("Login", async ({ page }) => {
    await page.goto("https://example.com");

    await page.getByRole("button", { name: "Login" }).click();
});