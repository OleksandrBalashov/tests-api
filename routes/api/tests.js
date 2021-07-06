const express = require("express");
const router = express.Router();
const { tests: testsCtrl } = require("../../controllers");

router.get("/qa", testsCtrl.practices.getPractice);
router.get("/theories", testsCtrl.theories.getTheories);

module.exports = router;
