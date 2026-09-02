

class CartPage{
    constructor(page){
        this.page = page;
        this.cartIcon = this.page.locator("#shoppingCartLink");
    }


    async clickCart(){
        await this.cartIcon.click();
    }
}

module.exports ={CartPage}