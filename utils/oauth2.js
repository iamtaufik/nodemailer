require("dotenv").config()
const { GOOLE_CLIENT_ID, GOOLE_CLIENT_SECRET, GOOGLE_REFRESH_TOKEN, GOOGLE_ACCESS_TOKEN, GOOGLE_REDIRECT_URI } = process.env;
const { google } = require('googleapis');
const oaut2Client = new google.auth.OAuth2(GOOLE_CLIENT_ID, GOOLE_CLIENT_SECRET, GOOGLE_REDIRECT_URI);

module.exports = {
  oaut2Client,
};
