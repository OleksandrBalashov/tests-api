const express = require('express');
const router = express.Router();
const { users: usersCtrl } = require('../../controllers');
const { auth } = require('../middlewares/auth');
const { validateUsers } = require('../middlewares/validate');

router.post('/signup', validateUsers.validateForm, usersCtrl.signUp);

router.post('/signin', validateUsers.validateForm, usersCtrl.signIn);

router.post('/logout', auth, usersCtrl.signOut);

router.post('/current', auth, usersCtrl.getCurrent);

router.get('/verify/:verificationToken', usersCtrl.verificationToken);

router.post('/verify', validateUsers.validVerifyEmail, usersCtrl.verify);

router.get('/google', usersCtrl.googleAuth);

router.get('/google-redirect', usersCtrl.googleRedirect);

module.exports = router;
