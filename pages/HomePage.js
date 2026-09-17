

class HomePage {

    constructor(page){
        this.page= page;
        this.ourProduct = this.page.getByText('OUR PRODUCTS')
        this.speakers = this.page.locator('#speakersImg');
        


    }
        
    async clickOurProduct(){
        await this.ourProduct.click()
        }

    async clickSpeaker(){
        await this.speakers.click()
    }

    
}

module.exports={HomePage};  