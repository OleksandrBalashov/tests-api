const { Practice } = require("../../../model");
const { getTests, getFeedback } = require("../../../utils");

const resultPractices = async (req, res, next) => {
  const { body } = req;

  const allTests = await getTests(Practice);

  const feedback = getFeedback(allTests, body);

  res.json({
    status: "success",
    code: 200,
    data: {
      feedback,
    },
  });
};

module.exports = resultPractices;
