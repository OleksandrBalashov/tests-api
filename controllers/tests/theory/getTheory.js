const { Theory } = require("../../../model");

const getTheory = async (req, res, next) => {
  try {
    const result = await Theory.find({});
    let tests = [];

    while (tests.length < 12) {
      const randomTest = Math.floor(Math.random() * result.length+1);
      if (!tests.includes(randomTest)) {
        tests.push(randomTest);
        console.log("Такого індексу немає додаємо в масив");
      } else {
        console.log("Такий індекс є нічого не дадаємо");
      }
    }

    console.log(tests);
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

module.exports = getTheory;
