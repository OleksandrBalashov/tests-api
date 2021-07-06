const { Theory } = require("../../../model");

const randomTests = (arr) => {
  let tests = [];

  while (tests.length < 12) {
    const randomIdx = Math.floor(Math.random() * arr.length + 1);
    if (!tests.includes(randomIdx)) {
      tests.push(randomIdx);
    }
  }
  console.log();
  return tests;
};

const getTheory = async (req, res, next) => {
  try {
    const allTestQuestions = await Theory.find({});
    const tests = await randomTests(allTestQuestions);

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
