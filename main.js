require('dotenv').config();
const { oaut2Client } = require('./utils/oauth2');
const nodeMailer = require('nodemailer');

// set credential
oaut2Client.setCredentials({
  refresh_token: process.env.GOOGLE_REFRESH_TOKEN,
});

const sendEmail = async ({ to, subject, html }) => {
  try {
    const accessToken = await oaut2Client.getAccessToken();
    const transport = nodeMailer.createTransport({
      service: 'gmail',
      auth: {
        type: 'OAuth2',
        user: process.env.GOOGLE_SENDER_EMAIL,
        clientId: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        refreshToken: process.env.GOOGLE_REFRESH_TOKEN,
        accessToken: accessToken.token,
      },
    });

    const email = await transport.sendMail({ to, subject, html });

    console.log('Email untuk ' + email.envelope.to + ' terkirim');
  } catch (error) {
    console.log(error);
  }
};

sendEmail({
  to: ['muhtaufik@students.amikom.ac.id','muhtaufikhdyt567@gmail.com'],
  subject: 'Test Node Mailer Multipe reciver',
  html: '<h1 style="background-color: aqua; color: black; padding: 4px;">Hello World</h1>',
});
