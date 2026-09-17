

class CartPage{
    constructor(page){
        this.page = page;
        this.cartIcon = this.page.locator("#shoppingCartLink");
        this.checkOut = this.page.locator("#checkOutButton");
        this.homeLink = this.page.getByText("HOME", { exact: true });
        
        
    }


    async clickCart(){
        await this.cartIcon.click();
        await this.page
        .getByText(/SHOPPING CART \(\d+\)/)
        .waitFor({ state: "visible" });
    }

 
    getProduct(productName) {
    return this.page
        .locator("tr")
        .filter({ hasText: productName });
      }

   getProductName(productName){
        return this.getProduct(productName)
        .locator(".productName");
    }


    getProductColor(productName, color) {
    return this.getProduct(productName)
        .locator(`[title = "${color}"]`);
    }

    getProductQuantity(productName){
    return this.getProduct(productName)
        .locator("td.quantityMobile label.ng-binding");
     }



    getProductPrice(productName){
    return this.getProduct(productName)
        .locator("p.price");

    }

    async clickCheckOut(){
        await this.checkOut.click();

    }
   async removeProduct(productName) {
    await this.getProduct(productName)
        .locator("a.remove")
        .click();

}

async emptyCart() {

  
    const removeButtons = this.page.locator("a.remove");
   

    if (await removeButtons.count() > 0) {
        while (await removeButtons.count() > 0) {
            await removeButtons.first().click();
        }
    }

}   



async clickHome(){
     await this.homeLink.click();
}

}

module.exports ={CartPage}