const nodemailer = require('nodemailer');
const { google } = require('googleapis');

// These id's and secrets should come from .env file.
const CLIENT_ID = '';
const CLEINT_SECRET = '';
const REDIRECT_URI = 'https://developers.google.com/oauthplayground';
const REFRESH_TOKEN = '';

const oAuth2Client = new google.auth.OAuth2(
    CLIENT_ID,
    CLEINT_SECRET,
    REDIRECT_URI
  );


  oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

  class Mailer {


 

async  sendMail() {
    try {
      const accessToken = await oAuth2Client.getAccessToken();
  
      const transport = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          type: 'OAuth2',
          user: 'zeeshan.ahmed9382@gmail.com',
          clientId: CLIENT_ID,
          clientSecret: CLEINT_SECRET,
          refreshToken: REFRESH_TOKEN,
          accessToken: accessToken,
        },
      });
  
      const mailOptions = {
        from: 'TEST REPORT <zeeshan.ahmed9382@gmail.com>',
        to: 'zahmed@nisum.com',
        subject: 'Test Report',
        text: 'Nightwatch Test Report',
        html: '<h1>Nightwatch Report</h1>',
        attachments: [{
            filename: 'TestReport.html',
            path: '../NightWatchTutorial/Reports/HTML-Reports/TestReport.html'
        }]                                                    
      };
  
      const result = await transport.sendMail(mailOptions);
      return result;
    } catch (error) {
      return error;
    }
  }


}


module.exports = Mailer;