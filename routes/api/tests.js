const express = require('express');
const router = express.Router();
const { tests: testsCtrl } = require('../../controllers');
const { auth } = require('../middlewares/auth');
const { validateAnswers } = require('../middlewares/validate');

router.get('/qa-practices', testsCtrl.practices.getPractices);
router.get('/qa-theories', testsCtrl.theories.getTheories);

router.post(
  '/qa-practices',
  auth,
  validateAnswers,
  testsCtrl.practices.resultPractices
);
router.post(
  '/qa-theories',
  auth,
  validateAnswers,
  testsCtrl.theories.resultTheories
);

module.exports = router;
