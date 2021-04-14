/// <reference path="../helpers/intellisense-definitions.js" />

module.exports = {
    

    
    '@tags' : ['qa'],


'confirming Form Page title': (client) =>
{

    const page = client.page.pageObjects();
    


    page.navigate()
    .hover('.et_pb_contact_submit[type="submit"]') ;

    client
    .waitForElementVisible("body")  
    .assert.title('Filling Out Forms - Ultimate QA')
    .saveScreenshot('test_output/google.png');

    



},

'Clicking the Button': (client) =>
{

    const page = client.page.pageObjects();
    


    page.setQueryName('Zeeshan Ahmed')
    .setQueryMesssage('this is text message and it is filled for automation testing!')
    
    .submit() ;

     client
    // .waitForElementVisible("body")  
     .waitForElementPresent(".et-pb-contact-message")
     .assert.containsText("Thanks for contacting us")
     .saveScreenshot('test_output/google.png');

    



}



};