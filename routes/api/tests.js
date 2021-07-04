const express = require('express');
const router = express.Router();
const { tests: testsCtrl } = require('../../controllers');

router.get('/qa', testsCtrl);


module.exports=router;