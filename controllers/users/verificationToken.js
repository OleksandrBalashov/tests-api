const { users: services } = require('../../services');
require('dotenv').config();

const verificationToken = async (req, res, next) => {
  const { verificationToken } = req.params;
  const { FRONTEND_URL } = process.env;

  try {
    const user = await services.findUser({ verifyToken: verificationToken });

    if (!user) {
      return res.status(404).json({
        status: 'error',
        code: 404,
        message: 'Not found',
      });
    }

    await services.findByIdAndUpdate(user._id, {
      verify: true,
      verifyToken: null,
    });

    res.json({
      status: 'success',
      code: 200,
      message: 'Verification successful',
    });

    // res.redirect(`${FRONTEND_URL}?email=${user.email}`); редиректим на фронтенд и вставляем имэйл
  } catch (error) {
    next(error);
  }
};

module.exports = verificationToken;
