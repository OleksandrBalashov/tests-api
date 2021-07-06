const randomTests = require("./randomTests");

const getTests = async (model, res) => {
  const allTests = await model.find({});
  const tests = randomTests(allTests);
  return res.json({
    status: "success",
    code: 200,
    data: {
      result: tests,
    },
  });
};

module.exports = getTests;
