

class SpeakersPage{

    constructor(page){
        this.page =page

        this.speakerHeading = this.page.getByText("SPEAKERS");
        this.manufacturerFilter= this.page.locator("#accordionAttrib1");
        
        
    }


async filterByManufacturer(manufacturer){
  
    await this.manufacturerFilter.click();
    await this.page.getByLabel(manufacturer).click();

};

  getProduct(productName) {
        console.log("Product received:", productName);
        return this.page.getByText(productName, {exact: true})
         
    };
    
};
module.exports = { SpeakersPage };