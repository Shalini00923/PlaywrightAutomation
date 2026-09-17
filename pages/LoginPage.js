

class LoginPage{
    constructor(page){
        this.page= page;
        this.userIcon = this.page.locator("#menuUserLink");
        this.username = this.page.locator('[name ="username"]')
        this.password = this.page.locator('[name="password"]');
        this.signIn = this.page.getByRole("button", {name: 'SIGN IN'})

    }
    async login(username, password){
         await this.userIcon.click()
         await this.username.fill(username)
         await this.password.fill(password)
         await this.signIn.click()

         
         await this.page.locator(".containMiniTitle").waitFor();
    }
     
}

module.exports = { LoginPage };