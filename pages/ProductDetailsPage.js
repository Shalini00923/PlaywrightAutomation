
class ProductDetailsPage{
     
    constructor(page){
        this.page= page
        this.increaseQuantityButton = this.page.locator(".plus");
        this.addtoCartButton = this.page.getByRole("button", {name: "ADD TO CART"});
    }

    getProductName(productName){
        return this.page.getByText(productName, {exact: true});
        

    }

    async increaseQuantity(){
        await this.increaseQuantityButton.click()
    }

    async selectColor(color){
        await this.page.locator(`[title= "${color}"]`).click();

    }

    async addToCart(){
        await this.addtoCartButton.click();
    }
}


module.exports ={ProductDetailsPage};