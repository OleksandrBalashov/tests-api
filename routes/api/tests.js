const express = require("express");
const router = express.Router();
const { tests: testsCtrl } = require("../../controllers");

router.get("/qa-practices", testsCtrl.practices.getPractices);
router.get("/qa-theories", testsCtrl.theories.getTheories);

router.post("/qa-practices", testsCtrl.practices.resultPractices);
router.post("/qa-theories", testsCtrl.theories.resultTheories);

module.exports = router;
