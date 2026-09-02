const{test} = require('../fixtures/testFixtures')
const loginData = require('../test-data/loginData.json')



test("Login Page", async({appPage, loginPage}) => {
        await loginPage.clickUserIcon();
        await loginPage.enterUserName(loginData.username);
        await loginPage.enterPassword(loginData.password);
        await loginPage.clickSignIn();

})

