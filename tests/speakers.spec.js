
const{ expect } = require('@playwright/test')
const { test } = require('../fixtures/testFixtures');
const speakerTestData = require('../test-data/speakerData.json');
const { generateRandomEmail } = require('../utils/testDataUtils');


test("Filter Speakers by Bose", async ({appPage, homePage, speakersPage,productDetailsPage}) => {

    await homePage.clickSpeaker();
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
    //const email = generateRandomEmail()
   // console.log(email)  
})

test("Filter Speakers by HP", async ({appPage, homePage, speakersPage}) => {

    await homePage.clickSpeaker();
   
    await speakersPage.filterByManufacturer(speakerTestData.hp.manufacturer);
    await expect (
        speakersPage.getProduct(speakerTestData.hp.productName)

        ).toBeVisible()
    

});

test("Filter speaker by Logitech ", async({appPage,homePage, speakersPage}) =>{
     
     await homePage.clickSpeaker()

     await speakersPage.filterByManufacturer(speakerTestData.logitech.manufacturer);
     await expect (
        speakersPage.getProduct(speakerTestData.logitech.productName)
     ).toBeVisible();

})
