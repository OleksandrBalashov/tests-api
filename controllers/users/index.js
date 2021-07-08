const signUp = require('./signUp');
const signIn = require('./signIn');
const verificationToken = require('./verificationToken');
const verify = require('./verify');
const getCurrent = require('./getCurrent');
const signOut = require('./signOut');
const googleAuth = require('./googleAuth');
const googleRedirect = require('./googleRedirect');

module.exports = {
  signUp,
  signIn,
  verificationToken,
  verify,
  getCurrent,
  signOut,
  googleAuth,
  googleRedirect,
};
