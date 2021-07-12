const feedback = (allTests, userTests) => {
  const result = allTests.filter(({ _id, rightAnswer }) => {
    return userTests.filter(({ id, answer }) =>
      String(_id) === id && rightAnswer === answer ? answer : null
    );

    // const stringId = String(_id);

    // for (let i = 0; i < userTests.length; i++) {
    //   if (stringId === userTests[i].id && rightAnswer === userTests[i].answer) {
    //     return userTests[i].answer;
    //   }
    // }
  });
  const feedback = `${Math.floor((result.length / 12) * 100)}%`;
  return feedback;
};

module.exports = feedback;
