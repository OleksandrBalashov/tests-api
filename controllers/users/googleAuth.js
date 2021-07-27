const queryString = require('query-string');
require('dotenv').config();

const googleAuth = (_, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  const { GOOGLE_CLIENT_ID, BASE_URL } = process.env;

  const stringifiedParams = queryString.stringify({
    client_id: GOOGLE_CLIENT_ID,
    redirect_uri: `${BASE_URL}/api/users/google-redirect`,
    scope: [
      'https://www.googleapis.com/auth/userinfo.email',
      'https://www.googleapis.com/auth/userinfo.profile',
    ].join(' '),
    response_type: 'code',
    access_type: 'offline',
    prompt: 'consent',
  });
  return res.redirect(
    `https://accounts.google.com/o/oauth2/v2/auth?${stringifiedParams}`
  );
};

module.exports = googleAuth;
