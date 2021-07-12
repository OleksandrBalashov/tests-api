const { Practice } = require('../../../model');
const { getTests, randomTests } = require('../../../utils');

const getPractice = async (req, res, next) => {
  try {
    const allTests = await getTests(Practice);
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
