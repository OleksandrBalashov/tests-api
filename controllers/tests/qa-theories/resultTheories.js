const { Theory } = require("../../../model");
const { getTests, getFeedback } = require("../../../utils");

const resultTheories = async (req, res, next) => {
  const { body } = req;

  const allTests = await getTests(Theory);

  const feedback = getFeedback(allTests, body);

  res.json({
    status: "success",
    code: 200,
    data: {
      feedback,
    },
  });
};

module.exports = resultTheories;
