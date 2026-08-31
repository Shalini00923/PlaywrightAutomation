
const {test: base} = require('@playwright/test')
const { HomePage }  = require('../pages/HomePage')
const { SpeakersPage } = require('../pages/SpeakerPage')
const { ProductDetailsPage } = require('../pages/ProductDetailsPage');

const test = base.extend({

    appPage: async({page}, use) => {
        await page.goto("/");
        await use(page);
    },

  
    homePage: async ({ page }, use) => {
        const homePage = new HomePage(page);
        await use(homePage);

    },
   
    speakersPage: async({page}, use) => {

        const speakersPage = new SpeakersPage(page);
        await use(speakersPage)
    },

    productDetailsPage: async ({page}, use) =>{
        const productDetailsPage = new ProductDetailsPage(page);
        await use(productDetailsPage)
    }


});

module.exports= {test};