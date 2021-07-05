const axios = require('axios');
const queryString = require('query-string');
require('dotenv').config();

const googleRedirect = async (req, res) => {
  const { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET, BASE_URL, FRONTEND_URL } =
    process.env;

  const fullUrl = `${req.protocol}://${req.get('host')}${req.originalUrl}`;

  const urlObj = new URL(fullUrl);

  const urlParams = queryString.parse(urlObj.search);

  const code = urlParams.code;

  const tokenData = await axios({
    url: `https://oauth2.googleapis.com/token`,
    method: 'post',
    data: {
      client_id: GOOGLE_CLIENT_ID,
      client_secret: GOOGLE_CLIENT_SECRET,
      redirect_uri: `${BASE_URL}/api/users/google-redirect`,
      grant_type: 'authorization_code',
      code,
    },
  });

  const userData = await axios({
    url: 'https://www.googleapis.com/oauth2/v2/userinfo',
    method: 'get',
    headers: {
      Authorization: `Bearer ${tokenData.data.access_token}`,
    },
  });

  res.json(userData.data);

  //userData.data.email

  //проверяем пользователя в базу
  //даем токен, если пользователя нет

  //   return res.redirect(`${FRONTEND_URL}?email=${userData.data.email}`);
  // return res.redirect(`${FRONTEND_URL}?accessToken=${userData.data.accessToken}`); редиректим на фронт и указываем токен вместо мыла
};

module.exports = googleRedirect;
