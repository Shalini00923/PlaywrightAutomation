
const {test: base} = require('@playwright/test')
const { HomePage }  = require('../pages/HomePage')
const { SpeakersPage } = require('../pages/SpeakerPage')
const { ProductDetailsPage } = require('../pages/ProductDetailsPage');
const { CartPage } = require('../pages/CartPage');
const { LoginPage } = require('../pages/LoginPage');
const loginData = require('../test-data/loginData.json')


const test = base.extend({

    appPage: async({page}, use) => {
        await page.goto("/");
        await use(page);
    },
     
    loginPage: async({page}, use) =>{
        const loginPage = new LoginPage(page)
        await use(loginPage);
    },

    authenticatedPage: async({appPage,loginPage}, use) => {

        await loginPage.login(
            loginData.username,
            loginData.password
        );

        await use(appPage);

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
    },
 
    cartPage: async({page}, use) =>{
        const cartPage = new CartPage(page);
        await use(cartPage)

    },

    cleanCart: async({authenticatedPage, homePage, cartPage}, use) => {

        await cartPage.clickCart();
        await cartPage.emptyCart();
        await cartPage.clickHome();
        
        await use()

    },
});

module.exports= {test};