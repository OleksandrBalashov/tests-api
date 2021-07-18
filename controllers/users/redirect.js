require('dotenv').config();

const redirect = (req, res, next) => {
  res.redirect(`${process.env.FRONTEND_URL}/login`);
};

module.exports = redirect;
