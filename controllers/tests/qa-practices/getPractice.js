const { Practice } = require("../../../model");
const {getTests}=require('../../../utils')

const getPractice = (req, res, next) => {
  try {
    getTests(Practice, res);
  } catch (error) {
    next(error);
  }
};

module.exports = getPractice;
