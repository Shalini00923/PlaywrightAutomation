const { HomePage } = require('../pages/HomePage');
console.log(HomePage);
const { test } = require('@playwright/test')


test("Home Page Test", async ({ page }) => {
  
    const homePage = new HomePage(page);

    await page.goto('https://www.advantageonlineshopping.com/');
    await homePage.clickOurProduct();


});