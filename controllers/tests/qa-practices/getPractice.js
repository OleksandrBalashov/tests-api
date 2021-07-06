const { Practice } = require("../../../model");

const getPractice = async (req, res, next) => {
  try {
    const result = await Practice.find({});
    return res.json({
      status: "success",
      code: 200,
      data: {
        result,
      },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = getPractice;
