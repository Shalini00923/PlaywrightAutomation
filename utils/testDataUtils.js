
function generateRandomEmail(){

    const email = "user"+ Math.floor(Math.random() * 10000)+ "@test.com"
    return email;

}


module.exports = { generateRandomEmail };