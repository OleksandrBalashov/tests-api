const { Theory } = require("../../../model");
const { getTests, randomTests } = require("../../../utils");

const getTheory = async (req, res, next) => {
  try {
    const allTests = await getTests(Theory);
    const tests = randomTests(allTests);

    return res.json({
      status: "success",
      code: 200,
      data: {
        result: tests,
      },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = getTheory;
