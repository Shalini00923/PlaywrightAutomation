
const { expect } = require('@playwright/test')
const { test } = require('../fixtures/testFixtures');
const speakerTestData = require('../test-data/speakerData.json');


test.afterEach(async ({ page }, testInfo) => {
    if (testInfo.status !== testInfo.expectedStatus) {
        await page.screenshot({
            path: `screenshots/${testInfo.title}.png`
        });
    }
});



test("Add Bose speaker to the cart and verify the details", async ({cleanCart,homePage, speakersPage, productDetailsPage, cartPage}) => {


    ///remove the existing product

    test.step("Filter Boss speaker", async () =>{

    await homePage.clickSpeaker();

    await speakersPage.filterByManufacturer(speakerTestData.bose.manufacturer);

    await expect(
        speakersPage.getProduct(speakerTestData.bose.productName)
    ).toBeVisible();

});

   await test.step("Open Bose Product", async() =>{

    
    await speakersPage
        .getProduct(speakerTestData.bose.productName)
        .click();

    await expect(productDetailsPage
        .getProductName(speakerTestData.bose.productName))
        .toBeVisible()

    });
    const productName = speakerTestData.bose.productName;
    const color = speakerTestData.bose.colors[0];
    
    await test.step("Configure and add product to cart", async() => {
 
    await productDetailsPage.selectColor(color);
    await productDetailsPage.increaseQuantity();
    await productDetailsPage.addToCart();

    });


    await cartPage.clickCart();

  

    // Now we are on Cart
    await test.step("Verify Cart details", async() => {
    await expect(cartPage.getProductName(productName)).toHaveText(new RegExp(productName, "i"));
    await expect(cartPage.getProductColor(productName, color)).toBeVisible()
    await expect(cartPage.getProductQuantity(productName)).toHaveText("2");
    await expect(cartPage.getProductPrice(productName)).toHaveText("$539.98")

    });

    //Cart assertions are finished

    await cartPage.clickCheckOut();


});

test("Filter Speakers by HP", async ({ appPage, homePage, speakersPage }) => {

    await homePage.clickSpeaker()

    await speakersPage.filterByManufacturer(speakerTestData.hp.manufacturer);
    await expect(
        speakersPage.getProduct(speakerTestData.hp.productName)

    ).toBeVisible()


});

test("Filter speaker by Logitech ", async ({ appPage, homePage, speakersPage }) => {

    await homePage.clickSpeaker()


    await speakersPage.filterByManufacturer(speakerTestData.logitech.manufacturer);
    await expect(
        speakersPage.getProduct(speakerTestData.logitech.productName)
    ).toBeVisible();

})
