


const Mailer = require('../helpers/mailer.js');


module.exports = {

    '@tags': ['timeCal'],

    before : function(browser) {
        console.log('Setting up the page...');
        const page = browser.page.calculateDifference();
        page.navigate();
      },
    


    'Calculate Difference between two dates': (browser) => {




        const page = browser.page.calculateDifference();
        page.maximizeWindow()

         
            .setStartTime('13', '12', '12')

           
            .setEndTime('10', '10', '28')
            .submit()


            .expect.element("div[class='eight columns'] h2").text.to.contain("Result: 3 hours, 1 minute and 44 seconds");

        browser.saveScreenshot("Reports/Sucessful-screenshots/time.png")


        

    },





    'Add Days': (browser) => {

        const page = browser.page.calculateDifference();

        page.switchtoAddDays()

            .addOrSubtract('sub')
            .selectQueryvalue("//input[@id='ay']", '10')
            .selectQueryvalue("//input[@id='am']", '02')
            .selectQueryvalue("//input[@id='aw']", '03')
            .selectQueryvalue("//input[@id='ad']", '04')
            .isRepeat(true, '03')


            .includeTime(true)




            .setStartTime('13', '12', '12')


            .selectQueryvalue("//input[@id='ah']", '13')
            .selectQueryvalue("//input[@id='ai']", '12')
            .selectQueryvalue("//input[@id='as']", '12')


            .submit()




            .useCss()
            .expect.element("div[class='bx-result'] h2").text.to.contain("Result: Tuesday, 18 January 2011, 23:48:49");

        browser.saveScreenshot("Reports/Sucessful-screenshots/addDays.png");
    },


    'Business Days Between Two Dates': (browser) => {

        const page = browser.page.calculateDifference();

        page.switchtoBuisnessDays()
            //.customPause()
            .setStartDate('10', '12', '2020')
            .setEndDate('20', '12', '2020')
            .submitFindBusinessDays()
            
            .useCss().expect.element("div[class='re-result five columns'] h2").text.to.contain("Result: 7 days");



        browser.saveScreenshot("Reports/Sucessful-screenshots/buisnessDays.png");


       

    },

    after : function(browser) {
        console.log('Exiting...');


        browser.pause(10000);
        const mailerObj = new Mailer();
        mailerObj.sendMail()
  .then((result) => console.log('Email sent...', result))
  .catch((error) => console.log(error.message));

  console.log("------------------------------------------------------------------")

        
      }



};