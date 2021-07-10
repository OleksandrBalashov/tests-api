const { Practice } = require('../../../model');
const { getTests, randomTests } = require('../../../utils');

const getPractice = (req, res, next) => {
  try {
    const allTests = getTests(Practice);
    const tests = randomTests(allTests);

    return res.json({
      status: 'success',
      code: 200,
      data: {
        result: tests,
      },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = getPractice;
