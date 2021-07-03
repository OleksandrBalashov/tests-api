const Joi = require('joi');

const validateForm = (req, _, next) => {
  const { body } = req;

  const isValidUser = Joi.object({
    email: Joi.string().required(),
    password: Joi.string().required(),
    token: Joi.string(),
    verify: Joi.boolean(),
    verifyToken: Joi.string(),
  });

  const validUser = isValidUser.validate(body);

  if (validUser.error) {
    validUser.error.code = 400;
    return next(validUser.error);
  }

  next();
};

const validVerifyEmail = (req, _, next) => {
  const { body } = req;

  const isValidEmail = Joi.object({
    email: Joi.string().required(),
  });

  const validEmail = isValidEmail.validate(body);

  if (validEmail.error) {
    validEmail.error.code = 400;
    return next(validEmail.error);
  }

  next();
};

module.exports = {
  validateForm,
  validVerifyEmail,
};
