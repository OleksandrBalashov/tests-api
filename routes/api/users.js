const express = require('express');
const router = express.Router();
const { users: usersCtrl } = require('../../controllers');
const { auth } = require('../middlewares/auth');

router.post('/signup', usersCtrl.signUp);

router.post('/signin', usersCtrl.signIn);

router.post('/logout', auth, usersCtrl.signOut);

router.post('/current', auth, usersCtrl.getCurrent);

router.get('/verify/:verificationToken', usersCtrl.verificationToken);

router.post('/verify', usersCtrl.verify);

module.exports = router;
