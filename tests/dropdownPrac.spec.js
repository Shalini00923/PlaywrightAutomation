
const {test, expect} = require('@playwright/test')

test("Select country", async ({ page }) => {

await page.goto("https://qaplayground.com/practice/dropdowns?utm_source=chatgpt.com")
const searchCity=  page.locator("#citySearch")
await searchCity.fill("Mumbai")
await page.getByText("Mumbai").click()


})