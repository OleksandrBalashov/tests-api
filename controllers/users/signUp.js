const { users: services } = require('../../services');
const sgMail = require('@sendgrid/mail');
const { createMail } = require('../../utils');

const signUp = async (req, res, next) => {
  const { body } = req;

  try {
    const result = await services.findUser({ email: body.email });

    if (result) {
      return res.status(409).json({
        status: 'error',
        code: 409,
        message: 'Email already registed',
      });
    }

    const { email, verify, verifyToken, googleAuth } = await services.addUser(
      body
    );

    const mail = createMail(email, verifyToken);

    sgMail
      .send(mail)
      .then(() => console.log('email send'))
      .catch(error => console.log(error.message));

    res.status(201).json({
      status: 'success',
      code: 201,
      data: {
        user: {
          email,
          verify,
          verifyToken,
          googleAuth,
        },
      },
      message: 'User create',
    });
  } catch (error) {
    next(error);
  }
};

module.exports = signUp;
