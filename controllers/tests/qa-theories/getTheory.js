const { Theory } = require("../../../model");
const { getTests } = require("../../../utils");

const getTheory = (req, res, next) => {
  try {
    getTests(Theory, res);
  } catch (error) {
    next(error);
  }
};

module.exports = getTheory;
