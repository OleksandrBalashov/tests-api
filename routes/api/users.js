const express = require('express');
const router = express.Router();
const { users: usersCtrl } = require('../../controllers');
const { auth } = require('../middlewares/auth');
const { validateUsers } = require('../middlewares/validate');

router.post('/signup', validateUsers.validateForm, usersCtrl.signUp);

router.post('/signin', validateUsers.validateForm, usersCtrl.signIn); //обязательное подтверждение имйэла перед аутентификацией

router.post('/signout', auth, usersCtrl.signOut);

router.post('/current', auth, usersCtrl.getCurrent);

router.get(
  '/verify/:verificationToken',
  usersCtrl.verificationToken,
  usersCtrl.redirect
); //подтверждение имэйла

router.post('/verify', validateUsers.validVerifyEmail, usersCtrl.verify); //повторная отправка подтверждения имэйла

router.get('/google', usersCtrl.googleAuth);

router.get('/google-redirect', usersCtrl.googleRedirect, usersCtrl.signUp);

module.exports = router;
