const getTests = async (model) => {
  const allTests = await model.find({});
  return allTests;
};

module.exports = getTests;
