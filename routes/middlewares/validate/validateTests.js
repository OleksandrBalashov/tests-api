const Joi = require("joi");

const validateAnswers = (req, _, next) => {
  const { body } = req;

  const isValidate = Joi.array()
    .items(
      Joi.object({
        id: Joi.string().required(),
        answer: Joi.string().required(),
      }).required()
    )
    .length(12);

  const validAnswer = isValidate.validate(body);

  if (validAnswer.error) {
    validAnswer.error.code = 400;
    return next(validAnswer.error);
  }

  next();
};

module.exports = validateAnswers;
