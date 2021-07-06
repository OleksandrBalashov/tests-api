const express = require("express");
const router = express.Router();
const { tests: testsCtrl } = require("../../controllers");

router.get("/qa-practices", testsCtrl.practices.getPractice);
router.get("/qa-theories", testsCtrl.theories.getTheories);

module.exports = router;
