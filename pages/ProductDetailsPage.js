
class ProductDetailsPage{
     
    constructor(page){
        this.page= page
    }

    getProductName(productName){
        return this.page.getByText(productName, {exact: true});

    }
}


module.exports ={ProductDetailsPage};