const { users: services } = require('../../services');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const signIn = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    const user = await services.findUser({ email });

    if (!user || (!user.googleAuth && !user.validPassword(password))) {
      return res.status(401).json({
        status: 'error',
        code: 401,
        message: 'Email or password is wrong',
      });
    }

    if (!user.verify) {
      return res.status(404).json({
        status: 'error',
        code: 404,
        message: 'You must verify email',
      });
    }

    const { verify, verifyToken, googleAuth } = user;

    const { SECRET_KEY } = process.env;

    const payload = {
      _id: user._id,
    };

    const token = jwt.sign(payload, SECRET_KEY);

    res.cookie('jwToken', token, { maxAge: 900000 });

    res.json({
      status: 'success',
      code: 200,
      data: {
        token,
        user: {
          email,
          verify,
          verifyToken,
          googleAuth,
          password,
        },
      },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = signIn;
