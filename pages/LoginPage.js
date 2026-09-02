

class LoginPage{
    constructor(page){
        this.page= page;
        this.userIcon = this.page.locator("#menuUser");
        this.username = this.page.locator('[name ="username"]')
        this.password = this.page.locator('[name="password"]');
        this.signIn = this.page.getByRole("button", {name: 'SIGN IN'})

    }

    async clickUserIcon(){

     await this.userIcon.click()
    }

     async enterUserName(username){
     await this.username.fill(username)
    }
     async enterPassword(password){
     await this.password.fill(password)
    }
    
     async clickSignIn(){
     await this.signIn.click()
    }
}

module.exports = { LoginPage };