
const{ expect } = require('@playwright/test')
const { test } = require('../fixtures/testFixtures');
const speakerTestData = require('../test-data/speakerData.json');
const { generateRandomEmail } = require('../utils/testDataUtils');


test.beforeAll(async() => {
    console.log("Starting Speaker Test Case")
});

test.afterAll(async () => {
    console.log("Speaker Test Ended ")
});

test.beforeEach(async ({appPage,homePage}) => {
    await homePage.clickSpeaker();
});

test.afterEach(async ({page}, testInfo) =>{
    if(testInfo.status !== testInfo.expectedStatus){
         await page.screenshot({
            path: `screenshots/${testInfo.title}.png`
         });
    }
});


test("Filter Speakers by Bose", async ({speakersPage,productDetailsPage}) => {


    await speakersPage.filterByManufacturer(speakerTestData.bose.manufacturer);
    await expect (
        speakersPage.getProduct(speakerTestData.bose.productName)
    ).toBeVisible();

    await speakersPage
    .getProduct(speakerTestData.bose.productName)
    .click();

    await expect(productDetailsPage
    .getProductName(speakerTestData.bose.productName))
    .toBeVisible()

    await productDetailsPage.selectColor("BLACK");
    await productDetailsPage.increaseQuantity();
    await productDetailsPage.addToCart()

});

test("Filter Speakers by HP", async ({appPage, homePage, speakersPage}) => {
     
    await speakersPage.filterByManufacturer(speakerTestData.hp.manufacturer);
    await expect (
        speakersPage.getProduct(speakerTestData.hp.productName)

        ).toBeVisible()
    

});

test("Filter speaker by Logitech ", async({appPage,homePage, speakersPage}) =>{
      

     await speakersPage.filterByManufacturer(speakerTestData.logitech.manufacturer);
     await expect (
        speakersPage.getProduct(speakerTestData.logitech.productName)
     ).toBeVisible();

})
